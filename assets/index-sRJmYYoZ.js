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
function Wo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ke = {}, Yn = [], Ut = () => {
}, fu = () => false, os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Go = (e) => e.startsWith("onUpdate:"), ze = Object.assign, Uo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Eh = Object.prototype.hasOwnProperty, xe = (e, t) => Eh.call(e, t), ie = Array.isArray, Kn = (e) => hi(e) === "[object Map]", du = (e) => hi(e) === "[object Set]", za = (e) => hi(e) === "[object Date]", fe = (e) => typeof e == "function", Ne = (e) => typeof e == "string", Pt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", hu = (e) => (Se(e) || fe(e)) && fe(e.then) && fe(e.catch), mu = Object.prototype.toString, hi = (e) => mu.call(e), Mh = (e) => hi(e).slice(8, -1), gu = (e) => hi(e) === "[object Object]", as = (e) => Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vr = Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, kh = /-\w/g, wt = ls((e) => e.replace(kh, (t) => t.slice(1).toUpperCase())), Th = /\B([A-Z])/g, On = ls((e) => e.replace(Th, "-$1").toLowerCase()), mr = ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ms = ls((e) => e ? `on${mr(e)}` : ""), mn = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, vu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, Ph = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ih = (e) => {
  const t = Ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wa;
const cs = () => Wa || (Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Re(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ne(r) ? Dh(r) : Re(r);
      if (i) for (const s in i) t[s] = i[s];
    }
    return t;
  } else if (Ne(e) || Se(e)) return e;
}
const Rh = /;(?![^(]*\))/g, Oh = /:([^]+)/, Vh = /\/\*[^]*?\*\//g;
function Dh(e) {
  const t = {};
  return e.replace(Vh, "").split(Rh).forEach((n) => {
    if (n) {
      const r = n.split(Oh);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (Ne(e)) t = e;
  else if (ie(e)) for (let n = 0; n < e.length; n++) {
    const r = Ee(e[n]);
    r && (t += r + " ");
  }
  else if (Se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Hh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nh = Wo(Hh);
function pu(e) {
  return !!e || e === "";
}
function Fh(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let r = 0; n && r < e.length; r++) n = Zo(e[r], t[r]);
  return n;
}
function Zo(e, t) {
  if (e === t) return true;
  let n = za(e), r = za(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : false;
  if (n = Pt(e), r = Pt(t), n || r) return e === t;
  if (n = ie(e), r = ie(t), n || r) return n && r ? Fh(e, t) : false;
  if (n = Se(e), r = Se(t), n || r) {
    if (!n || !r) return false;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s) return false;
    for (const o in e) {
      const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (a && !l || !a && l || !Zo(e[o], t[o])) return false;
    }
  }
  return String(e) === String(t);
}
const yu = (e) => !!(e && e.__v_isRef === true), be = (e) => Ne(e) ? e : e == null ? "" : ie(e) || Se(e) && (e.toString === mu || !fe(e.toString)) ? yu(e) ? be(e.value) : JSON.stringify(e, bu, 2) : String(e), bu = (e, t) => yu(t) ? bu(e, t.value) : Kn(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], s) => (n[Ts(r, s) + " =>"] = i, n), {}) } : du(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ts(n)) } : Pt(t) ? Ts(t) : Se(t) && !ie(t) && !gu(t) ? String(t) : t, Ts = (e, t = "") => {
  var n;
  return Pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qe;
class wu {
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
function Yr(e) {
  return new wu(e);
}
function _u() {
  return Qe;
}
function ct(e, t = false) {
  Qe && Qe.cleanups.push(e);
}
let Ie;
const Ps = /* @__PURE__ */ new WeakSet();
class Su {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ps.has(this) && (Ps.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xu(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Ga(this), Au(this);
    const t = Ie, n = kt;
    Ie = this, kt = true;
    try {
      return this.fn();
    } finally {
      Lu(this), Ie = t, kt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) qo(t);
      this.deps = this.depsTail = void 0, Ga(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    oo(this) && this.run();
  }
  get dirty() {
    return oo(this);
  }
}
let Cu = 0, Dr, Hr;
function xu(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Hr, Hr = e;
    return;
  }
  e.next = Dr, Dr = e;
}
function Yo() {
  Cu++;
}
function Ko() {
  if (--Cu > 0) return;
  if (Hr) {
    let t = Hr;
    for (Hr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Dr; ) {
    let t = Dr;
    for (Dr = void 0; t; ) {
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
function Au(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Lu(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), qo(r), $h(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function oo(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Eu(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Eu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Kr) || (e.globalVersion = Kr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oo(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = Ie, r = kt;
  Ie = e, kt = true;
  try {
    Au(e);
    const i = e.fn(e._value);
    (t.version === 0 || mn(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ie = n, kt = r, Lu(e), e.flags &= -3;
  }
}
function qo(e, t = false) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) qo(s, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $h(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kt = true;
const Mu = [];
function nn() {
  Mu.push(kt), kt = false;
}
function rn() {
  const e = Mu.pop();
  kt = e === void 0 ? true : e;
}
function Ga(e) {
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
let Kr = 0;
class Bh {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!Ie || !kt || Ie === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ie) n = this.activeLink = new Bh(Ie, this), Ie.deps ? (n.prevDep = Ie.depsTail, Ie.depsTail.nextDep = n, Ie.depsTail = n) : Ie.deps = Ie.depsTail = n, ku(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ie.depsTail, n.nextDep = void 0, Ie.depsTail.nextDep = n, Ie.depsTail = n, Ie.deps === n && (Ie.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Kr++, this.notify(t);
  }
  notify(t) {
    Yo();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ko();
    }
  }
}
function ku(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) ku(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Fi = /* @__PURE__ */ new WeakMap(), Mn = Symbol(""), ao = Symbol(""), qr = Symbol("");
function et(e, t, n) {
  if (kt && Ie) {
    let r = Fi.get(e);
    r || Fi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Xo()), i.map = r, i.key = n), i.track();
  }
}
function en(e, t, n, r, i, s) {
  const o = Fi.get(e);
  if (!o) {
    Kr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Yo(), t === "clear") o.forEach(a);
  else {
    const l = ie(e), u = l && as(n);
    if (l && n === "length") {
      const c = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === qr || !Pt(d) && d >= c) && a(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(qr)), t) {
      case "add":
        l ? u && a(o.get("length")) : (a(o.get(Mn)), Kn(e) && a(o.get(ao)));
        break;
      case "delete":
        l || (a(o.get(Mn)), Kn(e) && a(o.get(ao)));
        break;
      case "set":
        Kn(e) && a(o.get(Mn));
        break;
    }
  }
  Ko();
}
function jh(e, t) {
  const n = Fi.get(e);
  return n && n.get(t);
}
function Fn(e) {
  const t = ee(e);
  return t === e ? t : (et(t, "iterate", qr), bt(e) ? t : t.map(It));
}
function us(e) {
  return et(e = ee(e), "iterate", qr), e;
}
function fn(e, t) {
  return sn(e) ? rr(kn(e) ? It(t) : t) : It(t);
}
const zh = { __proto__: null, [Symbol.iterator]() {
  return Is(this, Symbol.iterator, (e) => fn(this, e));
}, concat(...e) {
  return Fn(this).concat(...e.map((t) => ie(t) ? Fn(t) : t));
}, entries() {
  return Is(this, "entries", (e) => (e[1] = fn(this, e[1]), e));
}, every(e, t) {
  return Kt(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Kt(this, "filter", e, t, (n) => n.map((r) => fn(this, r)), arguments);
}, find(e, t) {
  return Kt(this, "find", e, t, (n) => fn(this, n), arguments);
}, findIndex(e, t) {
  return Kt(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Kt(this, "findLast", e, t, (n) => fn(this, n), arguments);
}, findLastIndex(e, t) {
  return Kt(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Kt(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Rs(this, "includes", e);
}, indexOf(...e) {
  return Rs(this, "indexOf", e);
}, join(e) {
  return Fn(this).join(e);
}, lastIndexOf(...e) {
  return Rs(this, "lastIndexOf", e);
}, map(e, t) {
  return Kt(this, "map", e, t, void 0, arguments);
}, pop() {
  return Lr(this, "pop");
}, push(...e) {
  return Lr(this, "push", e);
}, reduce(e, ...t) {
  return Ua(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Ua(this, "reduceRight", e, t);
}, shift() {
  return Lr(this, "shift");
}, some(e, t) {
  return Kt(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Lr(this, "splice", e);
}, toReversed() {
  return Fn(this).toReversed();
}, toSorted(e) {
  return Fn(this).toSorted(e);
}, toSpliced(...e) {
  return Fn(this).toSpliced(...e);
}, unshift(...e) {
  return Lr(this, "unshift", e);
}, values() {
  return Is(this, "values", (e) => fn(this, e));
} };
function Is(e, t, n) {
  const r = us(e), i = r[t]();
  return r !== e && !bt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const Wh = Array.prototype;
function Kt(e, t, n, r, i, s) {
  const o = us(e), a = o !== e && !bt(e), l = o[t];
  if (l !== Wh[t]) {
    const f = l.apply(e, s);
    return a ? It(f) : f;
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
function Ua(e, t, n, r) {
  const i = us(e);
  let s = n;
  return i !== e && (bt(e) ? n.length > 3 && (s = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : s = function(o, a, l) {
    return n.call(this, o, fn(e, a), l, e);
  }), i[t](s, ...r);
}
function Rs(e, t, n) {
  const r = ee(e);
  et(r, "iterate", qr);
  const i = r[t](...n);
  return (i === -1 || i === false) && fs(n[0]) ? (n[0] = ee(n[0]), r[t](...n)) : i;
}
function Lr(e, t, n = []) {
  nn(), Yo();
  const r = ee(e)[t].apply(e, n);
  return Ko(), rn(), r;
}
const Gh = Wo("__proto__,__v_isRef,__isVue"), Tu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pt));
function Uh(e) {
  Pt(e) || (e = String(e));
  const t = ee(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class Pu {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw") return r === (i ? s ? nm : Vu : s ? Ou : Ru).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = ie(t);
    if (!i) {
      let l;
      if (o && (l = zh[n])) return l;
      if (n === "hasOwnProperty") return Uh;
    }
    const a = Reflect.get(t, n, He(t) ? t : r);
    if ((Pt(n) ? Tu.has(n) : Gh(n)) || (i || et(t, "get", n), s)) return a;
    if (He(a)) {
      const l = o && as(n) ? a : a.value;
      return i && Se(l) ? nr(l) : l;
    }
    return Se(a) ? i ? nr(a) : Ye(a) : a;
  }
}
class Iu extends Pu {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = ie(t) && as(n);
    if (!this._isShallow) {
      const u = sn(s);
      if (!bt(r) && !sn(r) && (s = ee(s), r = ee(r)), !o && He(s) && !He(r)) return u || (s.value = r), true;
    }
    const a = o ? Number(n) < t.length : xe(t, n), l = Reflect.set(t, n, r, He(t) ? t : i);
    return t === ee(i) && (a ? mn(r, s) && en(t, "set", n, r) : en(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = xe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && en(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Pt(n) || !Tu.has(n)) && et(t, "has", n), r;
  }
  ownKeys(t) {
    return et(t, "iterate", ie(t) ? "length" : Mn), Reflect.ownKeys(t);
  }
}
class Zh extends Pu {
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
const Yh = new Iu(), Kh = new Zh(), qh = new Iu(true);
const lo = (e) => e, Ei = (e) => Reflect.getPrototypeOf(e);
function Xh(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = ee(i), o = Kn(s), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), c = n ? lo : t ? rr : It;
    return !t && et(s, "iterate", l ? ao : Mn), ze(Object.create(u), { next() {
      const { value: f, done: d } = u.next();
      return d ? { value: f, done: d } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
    } });
  };
}
function Mi(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Jh(e, t) {
  const n = { get(i) {
    const s = this.__v_raw, o = ee(s), a = ee(i);
    e || (mn(i, a) && et(o, "get", i), et(o, "get", a));
    const { has: l } = Ei(o), u = t ? lo : e ? rr : It;
    if (l.call(o, i)) return u(s.get(i));
    if (l.call(o, a)) return u(s.get(a));
    s !== o && s.get(i);
  }, get size() {
    const i = this.__v_raw;
    return !e && et(ee(i), "iterate", Mn), i.size;
  }, has(i) {
    const s = this.__v_raw, o = ee(s), a = ee(i);
    return e || (mn(i, a) && et(o, "has", i), et(o, "has", a)), i === a ? s.has(i) : s.has(i) || s.has(a);
  }, forEach(i, s) {
    const o = this, a = o.__v_raw, l = ee(a), u = t ? lo : e ? rr : It;
    return !e && et(l, "iterate", Mn), a.forEach((c, f) => i.call(s, u(c), u(f), o));
  } };
  return ze(n, e ? { add: Mi("add"), set: Mi("set"), delete: Mi("delete"), clear: Mi("clear") } : { add(i) {
    !t && !bt(i) && !sn(i) && (i = ee(i));
    const s = ee(this);
    return Ei(s).has.call(s, i) || (s.add(i), en(s, "add", i, i)), this;
  }, set(i, s) {
    !t && !bt(s) && !sn(s) && (s = ee(s));
    const o = ee(this), { has: a, get: l } = Ei(o);
    let u = a.call(o, i);
    u || (i = ee(i), u = a.call(o, i));
    const c = l.call(o, i);
    return o.set(i, s), u ? mn(s, c) && en(o, "set", i, s) : en(o, "add", i, s), this;
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
    n[i] = Xh(i, e, t);
  }), n;
}
function Jo(e, t) {
  const n = Jh(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(xe(n, i) && i in r ? n : r, i, s);
}
const Qh = { get: Jo(false, false) }, em = { get: Jo(false, true) }, tm = { get: Jo(true, false) };
const Ru = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Vu = /* @__PURE__ */ new WeakMap(), nm = /* @__PURE__ */ new WeakMap();
function rm(e) {
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
function im(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : rm(Mh(e));
}
function Ye(e) {
  return sn(e) ? e : Qo(e, false, Yh, Qh, Ru);
}
function Du(e) {
  return Qo(e, false, qh, em, Ou);
}
function nr(e) {
  return Qo(e, true, Kh, tm, Vu);
}
function Qo(e, t, n, r, i) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const s = im(e);
  if (s === 0) return e;
  const o = i.get(e);
  if (o) return o;
  const a = new Proxy(e, s === 2 ? r : n);
  return i.set(e, a), a;
}
function kn(e) {
  return sn(e) ? kn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sn(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function fs(e) {
  return e ? !!e.__v_raw : false;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function sm(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && vu(e, "__v_skip", true), e;
}
const It = (e) => Se(e) ? Ye(e) : e, rr = (e) => Se(e) ? nr(e) : e;
function He(e) {
  return e ? e.__v_isRef === true : false;
}
function q(e) {
  return Hu(e, false);
}
function ce(e) {
  return Hu(e, true);
}
function Hu(e, t) {
  return He(e) ? e : new om(e, t);
}
class om {
  constructor(t, n) {
    this.dep = new Xo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ee(t), this._value = n ? t : It(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || bt(t) || sn(t);
    t = r ? t : ee(t), mn(t, n) && (this._rawValue = t, this._value = r ? t : It(t), this.dep.trigger());
  }
}
function ue(e) {
  return He(e) ? e.value : e;
}
function rt(e) {
  return fe(e) ? e() : ue(e);
}
const am = { get: (e, t, n) => t === "__v_raw" ? e : ue(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const i = e[t];
  return He(i) && !He(n) ? (i.value = n, true) : Reflect.set(e, t, n, r);
} };
function Nu(e) {
  return kn(e) ? e : new Proxy(e, am);
}
function Fu(e) {
  const t = ie(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = $u(e, n);
  return t;
}
class lm {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = ee(t);
    let i = true, s = t;
    if (!ie(t) || !as(String(n))) do
      i = !fs(s) || bt(s);
    while (i && (s = s.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ue(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return jh(this._raw, this._key);
  }
}
class cm {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function F(e, t, n) {
  return He(e) ? e : fe(e) ? new cm(e) : Se(e) && arguments.length > 1 ? $u(e, t, n) : q(e);
}
function $u(e, t, n) {
  return new lm(e, t, n);
}
class um {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Kr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Ie !== this) return xu(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Eu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function fm(e, t, n = false) {
  let r, i;
  return fe(e) ? r = e : (r = e.get, i = e.set), new um(r, i, n);
}
const ki = {}, $i = /* @__PURE__ */ new WeakMap();
let xn;
function dm(e, t = false, n = xn) {
  if (n) {
    let r = $i.get(n);
    r || $i.set(n, r = []), r.push(e);
  }
}
function hm(e, t, n = ke) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: a, call: l } = n, u = (S) => i ? S : bt(S) || i === false || i === 0 ? tn(S, 1) : tn(S);
  let c, f, d, h, b = false, m = false;
  if (He(e) ? (f = () => e.value, b = bt(e)) : kn(e) ? (f = () => u(e), b = true) : ie(e) ? (m = true, b = e.some((S) => kn(S) || bt(S)), f = () => e.map((S) => {
    if (He(S)) return S.value;
    if (kn(S)) return u(S);
    if (fe(S)) return l ? l(S, 2) : S();
  })) : fe(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (d) {
      nn();
      try {
        d();
      } finally {
        rn();
      }
    }
    const S = xn;
    xn = c;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      xn = S;
    }
  } : f = Ut, t && i) {
    const S = f, C = i === true ? 1 / 0 : i;
    f = () => tn(S(), C);
  }
  const _ = _u(), g = () => {
    c.stop(), _ && _.active && Uo(_.effects, c);
  };
  if (s && t) {
    const S = t;
    t = (...C) => {
      S(...C), g();
    };
  }
  let y = m ? new Array(e.length).fill(ki) : ki;
  const A = (S) => {
    if (!(!(c.flags & 1) || !c.dirty && !S)) if (t) {
      const C = c.run();
      if (i || b || (m ? C.some((x, T) => mn(x, y[T])) : mn(C, y))) {
        d && d();
        const x = xn;
        xn = c;
        try {
          const T = [C, y === ki ? void 0 : m && y[0] === ki ? [] : y, h];
          y = C, l ? l(t, 3, T) : t(...T);
        } finally {
          xn = x;
        }
      }
    } else c.run();
  };
  return a && a(A), c = new Su(f), c.scheduler = o ? () => o(A, false) : A, h = (S) => dm(S, false, c), d = c.onStop = () => {
    const S = $i.get(c);
    if (S) {
      if (l) l(S, 4);
      else for (const C of S) C();
      $i.delete(c);
    }
  }, t ? r ? A(true) : y = c.run() : o ? o(A.bind(null, true), true) : c.run(), g.pause = c.pause.bind(c), g.resume = c.resume.bind(c), g.stop = g, g;
}
function tn(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, He(e)) tn(e.value, t, n);
  else if (ie(e)) for (let r = 0; r < e.length; r++) tn(e[r], t, n);
  else if (du(e) || Kn(e)) e.forEach((r) => {
    tn(r, t, n);
  });
  else if (gu(e)) {
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
function mi(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    ds(i, t, n);
  }
}
function Rt(e, t, n, r) {
  if (fe(e)) {
    const i = mi(e, t, n, r);
    return i && hu(i) && i.catch((s) => {
      ds(s, t, n);
    }), i;
  }
  if (ie(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++) i.push(Rt(e[s], t, n, r));
    return i;
  }
}
function ds(e, t, n, r = true) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ke;
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
      nn(), mi(s, null, 10, [e, l, u]), rn();
      return;
    }
  }
  mm(e, n, i, r, o);
}
function mm(e, t, n, r = true, i = false) {
  if (i) throw e;
  console.error(e);
}
const lt = [];
let jt = -1;
const qn = [];
let dn = null, zn = 0;
const Bu = Promise.resolve();
let Bi = null;
function ht(e) {
  const t = Bi || Bu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gm(e) {
  let t = jt + 1, n = lt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = lt[r], s = Xr(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ea(e) {
  if (!(e.flags & 1)) {
    const t = Xr(e), n = lt[lt.length - 1];
    !n || !(e.flags & 2) && t >= Xr(n) ? lt.push(e) : lt.splice(gm(t), 0, e), e.flags |= 1, ju();
  }
}
function ju() {
  Bi || (Bi = Bu.then(Wu));
}
function vm(e) {
  ie(e) ? qn.push(...e) : dn && e.id === -1 ? dn.splice(zn + 1, 0, e) : e.flags & 1 || (qn.push(e), e.flags |= 1), ju();
}
function Za(e, t, n = jt + 1) {
  for (; n < lt.length; n++) {
    const r = lt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      lt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function zu(e) {
  if (qn.length) {
    const t = [...new Set(qn)].sort((n, r) => Xr(n) - Xr(r));
    if (qn.length = 0, dn) {
      dn.push(...t);
      return;
    }
    for (dn = t, zn = 0; zn < dn.length; zn++) {
      const n = dn[zn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dn = null, zn = 0;
  }
}
const Xr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wu(e) {
  try {
    for (jt = 0; jt < lt.length; jt++) {
      const t = lt[jt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), mi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jt < lt.length; jt++) {
      const t = lt[jt];
      t && (t.flags &= -2);
    }
    jt = -1, lt.length = 0, zu(), Bi = null, (lt.length || qn.length) && Wu();
  }
}
let Ke = null, Gu = null;
function ji(e) {
  const t = Ke;
  return Ke = e, Gu = e && e.type.__scopeId || null, t;
}
function De(e, t = Ke, n) {
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
function ir(e, t) {
  if (Ke === null) return e;
  const n = ps(Ke), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, a, l = ke] = t[i];
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
    l && (nn(), Rt(l, n, 8, [e.el, a, e, t]), rn());
  }
}
function qe(e, t) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), n[e] = t;
  }
}
function Me(e, t, n = false) {
  const r = vi();
  if (r || Jn) {
    let i = Jn ? Jn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && fe(t) ? t.call(r && r.proxy) : t;
  }
}
const pm = Symbol.for("v-scx"), ym = () => Me(pm);
function on(e, t) {
  return ta(e, null, t);
}
function te(e, t, n) {
  return ta(e, t, n);
}
function ta(e, t, n = ke) {
  const { immediate: r, deep: i, flush: s, once: o } = n, a = ze({}, n), l = t && r || !t && s !== "post";
  let u;
  if (ni) {
    if (s === "sync") {
      const h = ym();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Ut, h.resume = Ut, h.pause = Ut, h;
    }
  }
  const c = nt;
  a.call = (h, b, m) => Rt(h, c, b, m);
  let f = false;
  s === "post" ? a.scheduler = (h) => {
    Je(h, c && c.suspense);
  } : s !== "sync" && (f = true, a.scheduler = (h, b) => {
    b ? h() : ea(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const d = hm(e, t, a);
  return ni && (u ? u.push(d) : l && d()), d;
}
function bm(e, t, n) {
  const r = this.proxy, i = Ne(e) ? e.includes(".") ? Uu(r, e) : () => r[e] : e.bind(r, r);
  let s;
  fe(t) ? s = t : (s = t.handler, n = t);
  const o = pi(this), a = ta(i, s.bind(r), n);
  return o(), a;
}
function Uu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
const Zu = Symbol("_vte"), Yu = (e) => e.__isTeleport, Nr = (e) => e && (e.disabled || e.disabled === ""), Ya = (e) => e && (e.defer || e.defer === ""), Ka = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, co = (e, t) => {
  const n = e && e.to;
  return Ne(n) ? t ? t(n) : null : n;
}, Ku = { name: "Teleport", __isTeleport: true, process(e, t, n, r, i, s, o, a, l, u) {
  const { mc: c, pc: f, pbc: d, o: { insert: h, querySelector: b, createText: m, createComment: _ } } = u, g = Nr(t.props);
  let { shapeFlag: y, children: A, dynamicChildren: S } = t;
  if (e == null) {
    const C = t.el = m(""), x = t.anchor = m("");
    h(C, n, r), h(x, n, r);
    const T = (E, I) => {
      y & 16 && c(A, E, I, i, s, o, a, l);
    }, w = () => {
      const E = t.target = co(t.props, b), I = uo(E, t, m, h);
      E && (o !== "svg" && Ka(E) ? o = "svg" : o !== "mathml" && qa(E) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), g || (T(E, I), Oi(t, false)));
    };
    g && (T(n, x), Oi(t, true)), Ya(t.props) ? (t.el.__isMounted = false, Je(() => {
      w(), delete t.el.__isMounted;
    }, s)) : w();
  } else {
    if (Ya(t.props) && e.el.__isMounted === false) {
      Je(() => {
        Ku.process(e, t, n, r, i, s, o, a, l, u);
      }, s);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const C = t.anchor = e.anchor, x = t.target = e.target, T = t.targetAnchor = e.targetAnchor, w = Nr(e.props), E = w ? n : x, I = w ? C : T;
    if (o === "svg" || Ka(x) ? o = "svg" : (o === "mathml" || qa(x)) && (o = "mathml"), S ? (d(e.dynamicChildren, S, E, i, s, o, a), aa(e, t, true)) : l || f(e, t, E, I, i, s, o, a, false), g) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ti(t, n, C, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const $ = t.target = co(t.props, b);
      $ && Ti(t, $, null, u, 0);
    } else w && Ti(t, x, T, u, 1);
    Oi(t, g);
  }
}, remove(e, t, n, { um: r, o: { remove: i } }, s) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
  if (f && (i(u), i(c)), s && i(l), o & 16) {
    const h = s || !Nr(d);
    for (let b = 0; b < a.length; b++) {
      const m = a[b];
      r(m, t, n, h, !!m.dynamicChildren);
    }
  }
}, move: Ti, hydrate: wm };
function Ti(e, t, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(o, t, n), (!f || Nr(c)) && l & 16) for (let d = 0; d < u.length; d++) i(u[d], t, n, 2);
  f && r(a, t, n);
}
function wm(e, t, n, r, i, s, { o: { nextSibling: o, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
  function d(_, g) {
    let y = g;
    for (; y; ) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor") t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, _._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      y = o(y);
    }
  }
  function h(_, g) {
    g.anchor = f(o(_), g, a(_), n, r, i, s);
  }
  const b = t.target = co(t.props, l), m = Nr(t.props);
  if (b) {
    const _ = b._lpa || b.firstChild;
    t.shapeFlag & 16 && (m ? (h(e, t), d(b, _), t.targetAnchor || uo(b, t, c, u, a(e) === b ? e : null)) : (t.anchor = o(e), d(b, _), t.targetAnchor || uo(b, t, c, u), f(_ && o(_), t, b, n, r, i, s))), Oi(t, m);
  } else m && t.shapeFlag & 16 && (h(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const _m = Ku;
function Oi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function uo(e, t, n, r, i = null) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[Zu] = o, e && (r(s, e, i), r(o, e, i)), o;
}
const zt = Symbol("_leaveCb"), Er = Symbol("_enterCb");
function qu() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Lt(() => {
    e.isMounted = true;
  }), Et(() => {
    e.isUnmounting = true;
  }), e;
}
const Ct = [Function, Array], Xu = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Ct, onEnter: Ct, onAfterEnter: Ct, onEnterCancelled: Ct, onBeforeLeave: Ct, onLeave: Ct, onAfterLeave: Ct, onLeaveCancelled: Ct, onBeforeAppear: Ct, onAppear: Ct, onAfterAppear: Ct, onAppearCancelled: Ct }, Ju = (e) => {
  const t = e.subTree;
  return t.component ? Ju(t.component) : t;
}, Sm = { name: "BaseTransition", props: Xu, setup(e, { slots: t }) {
  const n = vi(), r = qu();
  return () => {
    const i = t.default && na(t.default(), true);
    if (!i || !i.length) return;
    const s = Qu(i), o = ee(e), { mode: a } = o;
    if (r.isLeaving) return Os(s);
    const l = Xa(s);
    if (!l) return Os(s);
    let u = Jr(l, o, r, n, (f) => u = f);
    l.type !== tt && Rn(l, u);
    let c = n.subTree && Xa(n.subTree);
    if (c && c.type !== tt && !Ln(c, l) && Ju(n).type !== tt) {
      let f = Jr(c, o, r, n);
      if (Rn(c, f), a === "out-in" && l.type !== tt) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, Os(s);
      a === "in-out" && l.type !== tt ? f.delayLeave = (d, h, b) => {
        const m = ef(r, c);
        m[String(c.key)] = c, d[zt] = () => {
          h(), d[zt] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          b(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return s;
  };
} };
function Qu(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== tt) {
      t = n;
      break;
    }
  }
  return t;
}
const Cm = Sm;
function ef(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Jr(e, t, n, r, i) {
  const { appear: s, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: b, onLeaveCancelled: m, onBeforeAppear: _, onAppear: g, onAfterAppear: y, onAppearCancelled: A } = t, S = String(e.key), C = ef(n, e), x = (E, I) => {
    E && Rt(E, r, 9, I);
  }, T = (E, I) => {
    const $ = I[1];
    x(E, I), ie(E) ? E.every((R) => R.length <= 1) && $() : E.length <= 1 && $();
  }, w = { mode: o, persisted: a, beforeEnter(E) {
    let I = l;
    if (!n.isMounted) if (s) I = _ || l;
    else return;
    E[zt] && E[zt](true);
    const $ = C[S];
    $ && Ln(e, $) && $.el[zt] && $.el[zt](), x(I, [E]);
  }, enter(E) {
    if (C[S] === e) return;
    let I = u, $ = c, R = f;
    if (!n.isMounted) if (s) I = g || u, $ = y || c, R = A || f;
    else return;
    let B = false;
    E[Er] = (K) => {
      B || (B = true, K ? x(R, [E]) : x($, [E]), w.delayedLeave && w.delayedLeave(), E[Er] = void 0);
    };
    const X = E[Er].bind(null, false);
    I ? T(I, [E, X]) : X();
  }, leave(E, I) {
    const $ = String(e.key);
    if (E[Er] && E[Er](true), n.isUnmounting) return I();
    x(d, [E]);
    let R = false;
    E[zt] = (X) => {
      R || (R = true, I(), X ? x(m, [E]) : x(b, [E]), E[zt] = void 0, C[$] === e && delete C[$]);
    };
    const B = E[zt].bind(null, false);
    C[$] = e, h ? T(h, [E, B]) : B();
  }, clone(E) {
    const I = Jr(E, t, n, r, i);
    return i && i(I), I;
  } };
  return w;
}
function Os(e) {
  if (hs(e)) return e = gn(e), e.children = null, e;
}
function Xa(e) {
  if (!hs(e)) return Yu(e.type) && e.children ? Qu(e.children) : e;
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
function na(e, t = false, n) {
  let r = [], i = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === ye ? (o.patchFlag & 128 && i++, r = r.concat(na(o.children, t, a))) : (t || o.type !== tt) && r.push(a != null ? gn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function Xe(e, t) {
  return fe(e) ? ze({ name: e.name }, t, { setup: e }) : e;
}
function gr() {
  const e = vi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function tf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ja(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zi = /* @__PURE__ */ new WeakMap();
function Fr(e, t, n, r, i = false) {
  if (ie(e)) {
    e.forEach((m, _) => Fr(m, t && (ie(t) ? t[_] : t), n, r, i));
    return;
  }
  if (Xn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Fr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? ps(r.component) : r.el, o = i ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === ke ? a.refs = {} : a.refs, f = a.setupState, d = ee(f), h = f === ke ? fu : (m) => Ja(c, m) ? false : xe(d, m), b = (m, _) => !(_ && Ja(c, _));
  if (u != null && u !== l) {
    if (Qa(t), Ne(u)) c[u] = null, h(u) && (f[u] = null);
    else if (He(u)) {
      const m = t;
      b(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (fe(l)) mi(l, a, 12, [o, c]);
  else {
    const m = Ne(l), _ = He(l);
    if (m || _) {
      const g = () => {
        if (e.f) {
          const y = m ? h(l) ? f[l] : c[l] : b() || !e.k ? l.value : c[e.k];
          if (i) ie(y) && Uo(y, s);
          else if (ie(y)) y.includes(s) || y.push(s);
          else if (m) c[l] = [s], h(l) && (f[l] = c[l]);
          else {
            const A = [s];
            b(l, e.k) && (l.value = A), e.k && (c[e.k] = A);
          }
        } else m ? (c[l] = o, h(l) && (f[l] = o)) : _ && (b(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          g(), zi.delete(e);
        };
        y.id = -1, zi.set(e, y), Je(y, n);
      } else Qa(e), g();
    }
  }
}
function Qa(e) {
  const t = zi.get(e);
  t && (t.flags |= 8, zi.delete(e));
}
cs().requestIdleCallback;
cs().cancelIdleCallback;
const Xn = (e) => !!e.type.__asyncLoader, hs = (e) => e.type.__isKeepAlive;
function nf(e, t) {
  rf(e, "a", t);
}
function ra(e, t) {
  rf(e, "da", t);
}
function rf(e, t, n = nt) {
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
    for (; i && i.parent; ) hs(i.parent.vnode) && xm(r, t, n, i), i = i.parent;
  }
}
function xm(e, t, n, r) {
  const i = ms(t, e, r, true);
  vr(() => {
    Uo(r[t], i);
  }, n);
}
function ms(e, t, n = nt, r = false) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      nn();
      const a = pi(n), l = Rt(t, n, e, o);
      return a(), rn(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const an = (e) => (t, n = nt) => {
  (!ni || e === "sp") && ms(e, (...r) => t(...r), n);
}, gs = an("bm"), Lt = an("m"), Am = an("bu"), ia = an("u"), Et = an("bum"), vr = an("um"), Lm = an("sp"), Em = an("rtg"), Mm = an("rtc");
function km(e, t = nt) {
  ms("ec", e, t);
}
const Tm = "components", Pm = Symbol.for("v-ndc");
function Im(e) {
  return Ne(e) && Rm(Tm, e, false) || e;
}
function Rm(e, t, n = true, r = false) {
  const i = Ke || nt;
  if (i) {
    const s = i.type;
    {
      const a = pg(s, false);
      if (a && (a === t || a === wt(t) || a === mr(wt(t)))) return s;
    }
    const o = el(i[e] || s[e], t) || el(i.appContext[e], t);
    return !o && r ? s : o;
  }
}
function el(e, t) {
  return e && (e[t] || e[wt(t)] || e[mr(wt(t))]);
}
function dt(e, t, n, r) {
  let i;
  const s = n, o = ie(e);
  if (o || Ne(e)) {
    const a = o && kn(e);
    let l = false, u = false;
    a && (l = !bt(e), u = sn(e), e = us(e)), i = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++) i[c] = t(l ? u ? rr(It(e[c])) : It(e[c]) : e[c], c, void 0, s);
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
function Om(e, t, n = {}, r, i) {
  if (Ke.ce || Ke.parent && Xn(Ke.parent) && Ke.parent.ce) {
    const u = Object.keys(n).length > 0;
    return oe(), sr(ye, null, [k("slot", n, r)], u ? -2 : 64);
  }
  let s = e[t];
  s && s._c && (s._d = false), oe();
  const o = s && sf(s(n)), a = n.key || o && o.key, l = sr(ye, { key: (a && !Pt(a) ? a : `_${t}`) + (!o && r ? "_fb" : "") }, o || [], o && e._ === 1 ? 64 : -2);
  return s && s._c && (s._d = true), l;
}
function sf(e) {
  return e.some((t) => ei(t) ? !(t.type === tt || t.type === ye && !sf(t.children)) : true) ? e : null;
}
const fo = (e) => e ? xf(e) ? ps(e) : fo(e.parent) : null, $r = ze(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => fo(e.parent), $root: (e) => fo(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => af(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ea(e.update);
}), $nextTick: (e) => e.n || (e.n = ht.bind(e.proxy)), $watch: (e) => bm.bind(e) }), Vs = (e, t) => e !== ke && !e.__isScriptSetup && xe(e, t), Vm = { get({ _: e }, t) {
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
      if (Vs(r, t)) return o[t] = 1, r[t];
      if (i !== ke && xe(i, t)) return o[t] = 2, i[t];
      if (xe(s, t)) return o[t] = 3, s[t];
      if (n !== ke && xe(n, t)) return o[t] = 4, n[t];
      ho && (o[t] = 0);
    }
  }
  const u = $r[t];
  let c, f;
  if (u) return t === "$attrs" && et(e.attrs, "get", ""), u(e);
  if ((c = a.__cssModules) && (c = c[t])) return c;
  if (n !== ke && xe(n, t)) return o[t] = 4, n[t];
  if (f = l.config.globalProperties, xe(f, t)) return f[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: i, ctx: s } = e;
  return Vs(i, t) ? (i[t] = n, true) : r !== ke && xe(r, t) ? (r[t] = n, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o } }, a) {
  let l;
  return !!(n[a] || e !== ke && a[0] !== "$" && xe(e, a) || Vs(t, a) || xe(s, a) || xe(r, a) || xe($r, a) || xe(i.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function tl(e) {
  return ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let ho = true;
function Dm(e) {
  const t = af(e), n = e.proxy, r = e.ctx;
  ho = false, t.beforeCreate && nl(t.beforeCreate, e, "bc");
  const { data: i, computed: s, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: b, activated: m, deactivated: _, beforeDestroy: g, beforeUnmount: y, destroyed: A, unmounted: S, render: C, renderTracked: x, renderTriggered: T, errorCaptured: w, serverPrefetch: E, expose: I, inheritAttrs: $, components: R, directives: B, filters: X } = t;
  if (u && Hm(u, r, null), o) for (const ae in o) {
    const le = o[ae];
    fe(le) && (r[ae] = le.bind(n));
  }
  if (i) {
    const ae = i.call(n, n);
    Se(ae) && (e.data = Ye(ae));
  }
  if (ho = true, s) for (const ae in s) {
    const le = s[ae], Ve = fe(le) ? le.bind(n, n) : fe(le.get) ? le.get.bind(n, n) : Ut, _e = !fe(le) && fe(le.set) ? le.set.bind(n) : Ut, se = V({ get: Ve, set: _e });
    Object.defineProperty(r, ae, { enumerable: true, configurable: true, get: () => se.value, set: (ge) => se.value = ge });
  }
  if (a) for (const ae in a) of(a[ae], r, n, ae);
  if (l) {
    const ae = fe(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((le) => {
      qe(le, ae[le]);
    });
  }
  c && nl(c, e, "c");
  function ne(ae, le) {
    ie(le) ? le.forEach((Ve) => ae(Ve.bind(n))) : le && ae(le.bind(n));
  }
  if (ne(gs, f), ne(Lt, d), ne(Am, h), ne(ia, b), ne(nf, m), ne(ra, _), ne(km, w), ne(Mm, x), ne(Em, T), ne(Et, y), ne(vr, S), ne(Lm, E), ie(I)) if (I.length) {
    const ae = e.exposed || (e.exposed = {});
    I.forEach((le) => {
      Object.defineProperty(ae, le, { get: () => n[le], set: (Ve) => n[le] = Ve, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  C && e.render === Ut && (e.render = C), $ != null && (e.inheritAttrs = $), R && (e.components = R), B && (e.directives = B), E && tf(e);
}
function Hm(e, t, n = Ut) {
  ie(e) && (e = mo(e));
  for (const r in e) {
    const i = e[r];
    let s;
    Se(i) ? "default" in i ? s = Me(i.from || r, i.default, true) : s = Me(i.from || r) : s = Me(i), He(s) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : t[r] = s;
  }
}
function nl(e, t, n) {
  Rt(ie(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function of(e, t, n, r) {
  let i = r.includes(".") ? Uu(n, r) : () => n[r];
  if (Ne(e)) {
    const s = t[e];
    fe(s) && te(i, s);
  } else if (fe(e)) te(i, e.bind(n));
  else if (Se(e)) if (ie(e)) e.forEach((s) => of(s, t, n, r));
  else {
    const s = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
    fe(s) && te(i, s, e);
  }
}
function af(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: s, config: { optionMergeStrategies: o } } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach((u) => Wi(l, u, o, true)), Wi(l, t, o)), Se(t) && s.set(t, l), l;
}
function Wi(e, t, n, r = false) {
  const { mixins: i, extends: s } = t;
  s && Wi(e, s, n, true), i && i.forEach((o) => Wi(e, o, n, true));
  for (const o in t) if (!(r && o === "expose")) {
    const a = Nm[o] || n && n[o];
    e[o] = a ? a(e[o], t[o]) : t[o];
  }
  return e;
}
const Nm = { data: rl, props: il, emits: il, methods: Or, computed: Or, beforeCreate: st, created: st, beforeMount: st, mounted: st, beforeUpdate: st, updated: st, beforeDestroy: st, beforeUnmount: st, destroyed: st, unmounted: st, activated: st, deactivated: st, errorCaptured: st, serverPrefetch: st, components: Or, directives: Or, watch: $m, provide: rl, inject: Fm };
function rl(e, t) {
  return t ? e ? function() {
    return ze(fe(e) ? e.call(this, this) : e, fe(t) ? t.call(this, this) : t);
  } : t : e;
}
function Fm(e, t) {
  return Or(mo(e), mo(t));
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
function Or(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function il(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(/* @__PURE__ */ Object.create(null), tl(e), tl(t ?? {})) : t;
}
function $m(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ze(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = st(e[r], t[r]);
  return n;
}
function lf() {
  return { app: null, config: { isNativeTag: fu, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Bm = 0;
function jm(e, t) {
  return function(r, i = null) {
    fe(r) || (r = ze({}, r)), i != null && !Se(i) && (i = null);
    const s = lf(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const u = s.app = { _uid: Bm++, _component: r, _props: i, _container: null, _context: s, _instance: null, version: bg, get config() {
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
        const h = u._ceVNode || k(r, i);
        return h.appContext = s, d === true ? d = "svg" : d === false && (d = void 0), e(h, c, d), l = true, u._container = c, c.__vue_app__ = u, ps(h.component);
      }
    }, onUnmount(c) {
      a.push(c);
    }, unmount() {
      l && (Rt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, f) {
      return s.provides[c] = f, u;
    }, runWithContext(c) {
      const f = Jn;
      Jn = u;
      try {
        return c();
      } finally {
        Jn = f;
      }
    } };
    return u;
  };
}
let Jn = null;
const zm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${On(t)}Modifiers`];
function Wm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ke;
  let i = n;
  const s = t.startsWith("update:"), o = s && zm(r, t.slice(7));
  o && (o.trim && (i = n.map((c) => Ne(c) ? c.trim() : c)), o.number && (i = n.map(Ph)));
  let a, l = r[a = Ms(t)] || r[a = Ms(wt(t))];
  !l && s && (l = r[a = Ms(On(t))]), l && Rt(l, e, 6, i);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = true, Rt(u, e, 6, i);
  }
}
const Gm = /* @__PURE__ */ new WeakMap();
function cf(e, t, n = false) {
  const r = n ? Gm : t.emitsCache, i = r.get(e);
  if (i !== void 0) return i;
  const s = e.emits;
  let o = {}, a = false;
  if (!fe(e)) {
    const l = (u) => {
      const c = cf(u, t, true);
      c && (a = true, ze(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (Se(e) && r.set(e, null), null) : (ie(s) ? s.forEach((l) => o[l] = null) : ze(o, s), Se(e) && r.set(e, o), o);
}
function vs(e, t) {
  return !e || !os(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, On(t)) || xe(e, t));
}
function sl(e) {
  const { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: b, inheritAttrs: m } = e, _ = ji(e);
  let g, y;
  try {
    if (n.shapeFlag & 4) {
      const S = i || r, C = S;
      g = Wt(u.call(C, S, c, f, h, d, b)), y = a;
    } else {
      const S = t;
      g = Wt(S.length > 1 ? S(f, { attrs: a, slots: o, emit: l }) : S(f, null)), y = t.props ? a : Um(a);
    }
  } catch (S) {
    Br.length = 0, ds(S, e, 1), g = k(tt);
  }
  let A = g;
  if (y && m !== false) {
    const S = Object.keys(y), { shapeFlag: C } = A;
    S.length && C & 7 && (s && S.some(Go) && (y = Zm(y, s)), A = gn(A, y, false, true));
  }
  return n.dirs && (A = gn(A, null, false, true), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && Rn(A, n.transition), g = A, ji(_), g;
}
const Um = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || os(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zm = (e, t) => {
  const n = {};
  for (const r in e) (!Go(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Ym(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: a, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return r ? ol(r, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (uf(o, r, d) && !vs(u, d)) return true;
      }
    }
  } else return (i || a) && (!a || !a.$stable) ? true : r === o ? false : r ? o ? ol(r, o, u) : true : !!o;
  return false;
}
function ol(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (uf(t, e, s) && !vs(n, s)) return true;
  }
  return false;
}
function uf(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Se(r) && Se(i) ? !Zo(r, i) : r !== i;
}
function Km({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const ff = {}, df = () => Object.create(ff), hf = (e) => Object.getPrototypeOf(e) === ff;
function qm(e, t, n, r = false) {
  const i = {}, s = df();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mf(e, t, i, s);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? e.props = r ? i : Du(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function Xm(e, t, n, r) {
  const { props: i, attrs: s, vnode: { patchFlag: o } } = e, a = ee(i), [l] = e.propsOptions;
  let u = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (vs(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l) if (xe(s, d)) h !== s[d] && (s[d] = h, u = true);
        else {
          const b = wt(d);
          i[b] = go(l, a, b, h, e, false);
        }
        else h !== s[d] && (s[d] = h, u = true);
      }
    }
  } else {
    mf(e, t, i, s) && (u = true);
    let c;
    for (const f in a) (!t || !xe(t, f) && ((c = On(f)) === f || !xe(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = go(l, a, f, void 0, e, true)) : delete i[f]);
    if (s !== a) for (const f in s) (!t || !xe(t, f)) && (delete s[f], u = true);
  }
  u && en(e.attrs, "set", "");
}
function mf(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = false, a;
  if (t) for (let l in t) {
    if (Vr(l)) continue;
    const u = t[l];
    let c;
    i && xe(i, c = wt(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : vs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = true);
  }
  if (s) {
    const l = ee(n), u = a || ke;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = go(i, l, f, u[f], e, !xe(u, f));
    }
  }
  return o;
}
function go(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const a = xe(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && fe(l)) {
        const { propsDefaults: u } = i;
        if (n in u) r = u[n];
        else {
          const c = pi(i);
          r = u[n] = l.call(null, t), c();
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r);
    }
    o[0] && (s && !a ? r = false : o[1] && (r === "" || r === On(n)) && (r = true));
  }
  return r;
}
const Jm = /* @__PURE__ */ new WeakMap();
function gf(e, t, n = false) {
  const r = n ? Jm : t.propsCache, i = r.get(e);
  if (i) return i;
  const s = e.props, o = {}, a = [];
  let l = false;
  if (!fe(e)) {
    const c = (f) => {
      l = true;
      const [d, h] = gf(f, t, true);
      ze(o, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l) return Se(e) && r.set(e, Yn), Yn;
  if (ie(s)) for (let c = 0; c < s.length; c++) {
    const f = wt(s[c]);
    al(f) && (o[f] = ke);
  }
  else if (s) for (const c in s) {
    const f = wt(c);
    if (al(f)) {
      const d = s[c], h = o[f] = ie(d) || fe(d) ? { type: d } : ze({}, d), b = h.type;
      let m = false, _ = true;
      if (ie(b)) for (let g = 0; g < b.length; ++g) {
        const y = b[g], A = fe(y) && y.name;
        if (A === "Boolean") {
          m = true;
          break;
        } else A === "String" && (_ = false);
      }
      else m = fe(b) && b.name === "Boolean";
      h[0] = m, h[1] = _, (m || xe(h, "default")) && a.push(f);
    }
  }
  const u = [o, a];
  return Se(e) && r.set(e, u), u;
}
function al(e) {
  return e[0] !== "$" && !Vr(e);
}
const sa = (e) => e === "_" || e === "_ctx" || e === "$stable", oa = (e) => ie(e) ? e.map(Wt) : [Wt(e)], Qm = (e, t, n) => {
  if (t._n) return t;
  const r = De((...i) => oa(t(...i)), n);
  return r._c = false, r;
}, vf = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (sa(i)) continue;
    const s = e[i];
    if (fe(s)) t[i] = Qm(i, s, r);
    else if (s != null) {
      const o = oa(s);
      t[i] = () => o;
    }
  }
}, pf = (e, t) => {
  const n = oa(t);
  e.slots.default = () => n;
}, yf = (e, t, n) => {
  for (const r in t) (n || !sa(r)) && (e[r] = t[r]);
}, eg = (e, t, n) => {
  const r = e.slots = df();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (yf(r, t, n), n && vu(r, "_", i, true)) : vf(t, r);
  } else t && pf(e, t);
}, tg = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = true, o = ke;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? s = false : yf(i, t, n) : (s = !t.$stable, vf(t, i)), o = t;
  } else t && (pf(e, t), o = { default: 1 });
  if (s) for (const a in i) !sa(a) && o[a] == null && delete i[a];
}, Je = og;
function ng(e) {
  return rg(e);
}
function rg(e, t) {
  const n = cs();
  n.__VUE__ = true;
  const { insert: r, remove: i, patchProp: s, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h = Ut, insertStaticContent: b } = e, m = (v, p, L, O = null, H = null, D = null, Z = void 0, G = null, z = !!p.dynamicChildren) => {
    if (v === p) return;
    v && !Ln(v, p) && (O = M(v), ge(v, H, D, true), v = null), p.patchFlag === -2 && (z = false, p.dynamicChildren = null);
    const { type: N, ref: re, shapeFlag: Y } = p;
    switch (N) {
      case gi:
        _(v, p, L, O);
        break;
      case tt:
        g(v, p, L, O);
        break;
      case Hs:
        v == null && y(p, L, O, Z);
        break;
      case ye:
        R(v, p, L, O, H, D, Z, G, z);
        break;
      default:
        Y & 1 ? C(v, p, L, O, H, D, Z, G, z) : Y & 6 ? B(v, p, L, O, H, D, Z, G, z) : (Y & 64 || Y & 128) && N.process(v, p, L, O, H, D, Z, G, z, U);
    }
    re != null && H ? Fr(re, v && v.ref, D, p || v, !p) : re == null && v && v.ref != null && Fr(v.ref, null, D, v, true);
  }, _ = (v, p, L, O) => {
    if (v == null) r(p.el = a(p.children), L, O);
    else {
      const H = p.el = v.el;
      p.children !== v.children && u(H, p.children);
    }
  }, g = (v, p, L, O) => {
    v == null ? r(p.el = l(p.children || ""), L, O) : p.el = v.el;
  }, y = (v, p, L, O) => {
    [v.el, v.anchor] = b(v.children, p, L, O, v.el, v.anchor);
  }, A = ({ el: v, anchor: p }, L, O) => {
    let H;
    for (; v && v !== p; ) H = d(v), r(v, L, O), v = H;
    r(p, L, O);
  }, S = ({ el: v, anchor: p }) => {
    let L;
    for (; v && v !== p; ) L = d(v), i(v), v = L;
    i(p);
  }, C = (v, p, L, O, H, D, Z, G, z) => {
    if (p.type === "svg" ? Z = "svg" : p.type === "math" && (Z = "mathml"), v == null) x(p, L, O, H, D, Z, G, z);
    else {
      const N = v.el && v.el._isVueCE ? v.el : null;
      try {
        N && N._beginPatch(), E(v, p, H, D, Z, G, z);
      } finally {
        N && N._endPatch();
      }
    }
  }, x = (v, p, L, O, H, D, Z, G) => {
    let z, N;
    const { props: re, shapeFlag: Y, transition: Q, dirs: de } = v;
    if (z = v.el = o(v.type, D, re && re.is, re), Y & 8 ? c(z, v.children) : Y & 16 && w(v.children, z, null, O, H, Ds(v, D), Z, G), de && yn(v, null, O, "created"), T(z, v, v.scopeId, Z, O), re) {
      for (const Pe in re) Pe !== "value" && !Vr(Pe) && s(z, Pe, null, re[Pe], D, O);
      "value" in re && s(z, "value", null, re.value, D), (N = re.onVnodeBeforeMount) && $t(N, O, v);
    }
    de && yn(v, null, O, "beforeMount");
    const we = ig(H, Q);
    we && Q.beforeEnter(z), r(z, p, L), ((N = re && re.onVnodeMounted) || we || de) && Je(() => {
      N && $t(N, O, v), we && Q.enter(z), de && yn(v, null, O, "mounted");
    }, H);
  }, T = (v, p, L, O, H) => {
    if (L && h(v, L), O) for (let D = 0; D < O.length; D++) h(v, O[D]);
    if (H) {
      let D = H.subTree;
      if (p === D || _f(D.type) && (D.ssContent === p || D.ssFallback === p)) {
        const Z = H.vnode;
        T(v, Z, Z.scopeId, Z.slotScopeIds, H.parent);
      }
    }
  }, w = (v, p, L, O, H, D, Z, G, z = 0) => {
    for (let N = z; N < v.length; N++) {
      const re = v[N] = G ? Qt(v[N]) : Wt(v[N]);
      m(null, re, p, L, O, H, D, Z, G);
    }
  }, E = (v, p, L, O, H, D, Z) => {
    const G = p.el = v.el;
    let { patchFlag: z, dynamicChildren: N, dirs: re } = p;
    z |= v.patchFlag & 16;
    const Y = v.props || ke, Q = p.props || ke;
    let de;
    if (L && bn(L, false), (de = Q.onVnodeBeforeUpdate) && $t(de, L, p, v), re && yn(p, v, L, "beforeUpdate"), L && bn(L, true), (Y.innerHTML && Q.innerHTML == null || Y.textContent && Q.textContent == null) && c(G, ""), N ? I(v.dynamicChildren, N, G, L, O, Ds(p, H), D) : Z || le(v, p, G, null, L, O, Ds(p, H), D, false), z > 0) {
      if (z & 16) $(G, Y, Q, L, H);
      else if (z & 2 && Y.class !== Q.class && s(G, "class", null, Q.class, H), z & 4 && s(G, "style", Y.style, Q.style, H), z & 8) {
        const we = p.dynamicProps;
        for (let Pe = 0; Pe < we.length; Pe++) {
          const Le = we[Pe], ut = Y[Le], ft = Q[Le];
          (ft !== ut || Le === "value") && s(G, Le, ut, ft, H, L);
        }
      }
      z & 1 && v.children !== p.children && c(G, p.children);
    } else !Z && N == null && $(G, Y, Q, L, H);
    ((de = Q.onVnodeUpdated) || re) && Je(() => {
      de && $t(de, L, p, v), re && yn(p, v, L, "updated");
    }, O);
  }, I = (v, p, L, O, H, D, Z) => {
    for (let G = 0; G < p.length; G++) {
      const z = v[G], N = p[G], re = z.el && (z.type === ye || !Ln(z, N) || z.shapeFlag & 198) ? f(z.el) : L;
      m(z, N, re, null, O, H, D, Z, true);
    }
  }, $ = (v, p, L, O, H) => {
    if (p !== L) {
      if (p !== ke) for (const D in p) !Vr(D) && !(D in L) && s(v, D, p[D], null, H, O);
      for (const D in L) {
        if (Vr(D)) continue;
        const Z = L[D], G = p[D];
        Z !== G && D !== "value" && s(v, D, G, Z, H, O);
      }
      "value" in L && s(v, "value", p.value, L.value, H);
    }
  }, R = (v, p, L, O, H, D, Z, G, z) => {
    const N = p.el = v ? v.el : a(""), re = p.anchor = v ? v.anchor : a("");
    let { patchFlag: Y, dynamicChildren: Q, slotScopeIds: de } = p;
    de && (G = G ? G.concat(de) : de), v == null ? (r(N, L, O), r(re, L, O), w(p.children || [], L, re, H, D, Z, G, z)) : Y > 0 && Y & 64 && Q && v.dynamicChildren && v.dynamicChildren.length === Q.length ? (I(v.dynamicChildren, Q, L, H, D, Z, G), (p.key != null || H && p === H.subTree) && aa(v, p, true)) : le(v, p, L, re, H, D, Z, G, z);
  }, B = (v, p, L, O, H, D, Z, G, z) => {
    p.slotScopeIds = G, v == null ? p.shapeFlag & 512 ? H.ctx.activate(p, L, O, Z, z) : X(p, L, O, H, D, Z, z) : K(v, p, z);
  }, X = (v, p, L, O, H, D, Z) => {
    const G = v.component = dg(v, O, H);
    if (hs(v) && (G.ctx.renderer = U), hg(G, false, Z), G.asyncDep) {
      if (H && H.registerDep(G, ne, Z), !v.el) {
        const z = G.subTree = k(tt);
        g(null, z, p, L), v.placeholder = z.el;
      }
    } else ne(G, v, p, L, H, D, Z);
  }, K = (v, p, L) => {
    const O = p.component = v.component;
    if (Ym(v, p, L)) if (O.asyncDep && !O.asyncResolved) {
      ae(O, p, L);
      return;
    } else O.next = p, O.update();
    else p.el = v.el, O.vnode = p;
  }, ne = (v, p, L, O, H, D, Z) => {
    const G = () => {
      if (v.isMounted) {
        let { next: Y, bu: Q, u: de, parent: we, vnode: Pe } = v;
        {
          const Nt = bf(v);
          if (Nt) {
            Y && (Y.el = Pe.el, ae(v, Y, Z)), Nt.asyncDep.then(() => {
              Je(() => {
                v.isUnmounted || N();
              }, H);
            });
            return;
          }
        }
        let Le = Y, ut;
        bn(v, false), Y ? (Y.el = Pe.el, ae(v, Y, Z)) : Y = Pe, Q && ks(Q), (ut = Y.props && Y.props.onVnodeBeforeUpdate) && $t(ut, we, Y, Pe), bn(v, true);
        const ft = sl(v), Ht = v.subTree;
        v.subTree = ft, m(Ht, ft, f(Ht.el), M(Ht), v, H, D), Y.el = ft.el, Le === null && Km(v, ft.el), de && Je(de, H), (ut = Y.props && Y.props.onVnodeUpdated) && Je(() => $t(ut, we, Y, Pe), H);
      } else {
        let Y;
        const { el: Q, props: de } = p, { bm: we, m: Pe, parent: Le, root: ut, type: ft } = v, Ht = Xn(p);
        bn(v, false), we && ks(we), !Ht && (Y = de && de.onVnodeBeforeMount) && $t(Y, Le, p), bn(v, true);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(ft);
          const Nt = v.subTree = sl(v);
          m(null, Nt, L, O, v, H, D), p.el = Nt.el;
        }
        if (Pe && Je(Pe, H), !Ht && (Y = de && de.onVnodeMounted)) {
          const Nt = p;
          Je(() => $t(Y, Le, Nt), H);
        }
        (p.shapeFlag & 256 || Le && Xn(Le.vnode) && Le.vnode.shapeFlag & 256) && v.a && Je(v.a, H), v.isMounted = true, p = L = O = null;
      }
    };
    v.scope.on();
    const z = v.effect = new Su(G);
    v.scope.off();
    const N = v.update = z.run.bind(z), re = v.job = z.runIfDirty.bind(z);
    re.i = v, re.id = v.uid, z.scheduler = () => ea(re), bn(v, true), N();
  }, ae = (v, p, L) => {
    p.component = v;
    const O = v.vnode.props;
    v.vnode = p, v.next = null, Xm(v, p.props, O, L), tg(v, p.children, L), nn(), Za(v), rn();
  }, le = (v, p, L, O, H, D, Z, G, z = false) => {
    const N = v && v.children, re = v ? v.shapeFlag : 0, Y = p.children, { patchFlag: Q, shapeFlag: de } = p;
    if (Q > 0) {
      if (Q & 128) {
        _e(N, Y, L, O, H, D, Z, G, z);
        return;
      } else if (Q & 256) {
        Ve(N, Y, L, O, H, D, Z, G, z);
        return;
      }
    }
    de & 8 ? (re & 16 && $e(N, H, D), Y !== N && c(L, Y)) : re & 16 ? de & 16 ? _e(N, Y, L, O, H, D, Z, G, z) : $e(N, H, D, true) : (re & 8 && c(L, ""), de & 16 && w(Y, L, O, H, D, Z, G, z));
  }, Ve = (v, p, L, O, H, D, Z, G, z) => {
    v = v || Yn, p = p || Yn;
    const N = v.length, re = p.length, Y = Math.min(N, re);
    let Q;
    for (Q = 0; Q < Y; Q++) {
      const de = p[Q] = z ? Qt(p[Q]) : Wt(p[Q]);
      m(v[Q], de, L, null, H, D, Z, G, z);
    }
    N > re ? $e(v, H, D, true, false, Y) : w(p, L, O, H, D, Z, G, z, Y);
  }, _e = (v, p, L, O, H, D, Z, G, z) => {
    let N = 0;
    const re = p.length;
    let Y = v.length - 1, Q = re - 1;
    for (; N <= Y && N <= Q; ) {
      const de = v[N], we = p[N] = z ? Qt(p[N]) : Wt(p[N]);
      if (Ln(de, we)) m(de, we, L, null, H, D, Z, G, z);
      else break;
      N++;
    }
    for (; N <= Y && N <= Q; ) {
      const de = v[Y], we = p[Q] = z ? Qt(p[Q]) : Wt(p[Q]);
      if (Ln(de, we)) m(de, we, L, null, H, D, Z, G, z);
      else break;
      Y--, Q--;
    }
    if (N > Y) {
      if (N <= Q) {
        const de = Q + 1, we = de < re ? p[de].el : O;
        for (; N <= Q; ) m(null, p[N] = z ? Qt(p[N]) : Wt(p[N]), L, we, H, D, Z, G, z), N++;
      }
    } else if (N > Q) for (; N <= Y; ) ge(v[N], H, D, true), N++;
    else {
      const de = N, we = N, Pe = /* @__PURE__ */ new Map();
      for (N = we; N <= Q; N++) {
        const mt = p[N] = z ? Qt(p[N]) : Wt(p[N]);
        mt.key != null && Pe.set(mt.key, N);
      }
      let Le, ut = 0;
      const ft = Q - we + 1;
      let Ht = false, Nt = 0;
      const Ar = new Array(ft);
      for (N = 0; N < ft; N++) Ar[N] = 0;
      for (N = de; N <= Y; N++) {
        const mt = v[N];
        if (ut >= ft) {
          ge(mt, H, D, true);
          continue;
        }
        let Ft;
        if (mt.key != null) Ft = Pe.get(mt.key);
        else for (Le = we; Le <= Q; Le++) if (Ar[Le - we] === 0 && Ln(mt, p[Le])) {
          Ft = Le;
          break;
        }
        Ft === void 0 ? ge(mt, H, D, true) : (Ar[Ft - we] = N + 1, Ft >= Nt ? Nt = Ft : Ht = true, m(mt, p[Ft], L, null, H, D, Z, G, z), ut++);
      }
      const $a = Ht ? sg(Ar) : Yn;
      for (Le = $a.length - 1, N = ft - 1; N >= 0; N--) {
        const mt = we + N, Ft = p[mt], Ba = p[mt + 1], ja = mt + 1 < re ? Ba.el || wf(Ba) : O;
        Ar[N] === 0 ? m(null, Ft, L, ja, H, D, Z, G, z) : Ht && (Le < 0 || N !== $a[Le] ? se(Ft, L, ja, 2) : Le--);
      }
    }
  }, se = (v, p, L, O, H = null) => {
    const { el: D, type: Z, transition: G, children: z, shapeFlag: N } = v;
    if (N & 6) {
      se(v.component.subTree, p, L, O);
      return;
    }
    if (N & 128) {
      v.suspense.move(p, L, O);
      return;
    }
    if (N & 64) {
      Z.move(v, p, L, U);
      return;
    }
    if (Z === ye) {
      r(D, p, L);
      for (let Y = 0; Y < z.length; Y++) se(z[Y], p, L, O);
      r(v.anchor, p, L);
      return;
    }
    if (Z === Hs) {
      A(v, p, L);
      return;
    }
    if (O !== 2 && N & 1 && G) if (O === 0) G.beforeEnter(D), r(D, p, L), Je(() => G.enter(D), H);
    else {
      const { leave: Y, delayLeave: Q, afterLeave: de } = G, we = () => {
        v.ctx.isUnmounted ? i(D) : r(D, p, L);
      }, Pe = () => {
        D._isLeaving && D[zt](true), Y(D, () => {
          we(), de && de();
        });
      };
      Q ? Q(D, we, Pe) : Pe();
    }
    else r(D, p, L);
  }, ge = (v, p, L, O = false, H = false) => {
    const { type: D, props: Z, ref: G, children: z, dynamicChildren: N, shapeFlag: re, patchFlag: Y, dirs: Q, cacheIndex: de } = v;
    if (Y === -2 && (H = false), G != null && (nn(), Fr(G, null, L, v, true), rn()), de != null && (p.renderCache[de] = void 0), re & 256) {
      p.ctx.deactivate(v);
      return;
    }
    const we = re & 1 && Q, Pe = !Xn(v);
    let Le;
    if (Pe && (Le = Z && Z.onVnodeBeforeUnmount) && $t(Le, p, v), re & 6) Ze(v.component, L, O);
    else {
      if (re & 128) {
        v.suspense.unmount(L, O);
        return;
      }
      we && yn(v, null, p, "beforeUnmount"), re & 64 ? v.type.remove(v, p, L, U, O) : N && !N.hasOnce && (D !== ye || Y > 0 && Y & 64) ? $e(N, p, L, false, true) : (D === ye && Y & 384 || !H && re & 16) && $e(z, p, L), O && me(v);
    }
    (Pe && (Le = Z && Z.onVnodeUnmounted) || we) && Je(() => {
      Le && $t(Le, p, v), we && yn(v, null, p, "unmounted");
    }, L);
  }, me = (v) => {
    const { type: p, el: L, anchor: O, transition: H } = v;
    if (p === ye) {
      je(L, O);
      return;
    }
    if (p === Hs) {
      S(v);
      return;
    }
    const D = () => {
      i(L), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (v.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Z, delayLeave: G } = H, z = () => Z(L, D);
      G ? G(v.el, D, z) : z();
    } else D();
  }, je = (v, p) => {
    let L;
    for (; v !== p; ) L = d(v), i(v), v = L;
    i(p);
  }, Ze = (v, p, L) => {
    const { bum: O, scope: H, job: D, subTree: Z, um: G, m: z, a: N } = v;
    ll(z), ll(N), O && ks(O), H.stop(), D && (D.flags |= 8, ge(Z, v, p, L)), G && Je(G, p), Je(() => {
      v.isUnmounted = true;
    }, p);
  }, $e = (v, p, L, O = false, H = false, D = 0) => {
    for (let Z = D; Z < v.length; Z++) ge(v[Z], p, L, O, H);
  }, M = (v) => {
    if (v.shapeFlag & 6) return M(v.component.subTree);
    if (v.shapeFlag & 128) return v.suspense.next();
    const p = d(v.anchor || v.el), L = p && p[Zu];
    return L ? d(L) : p;
  };
  let j = false;
  const W = (v, p, L) => {
    let O;
    v == null ? p._vnode && (ge(p._vnode, null, null, true), O = p._vnode.component) : m(p._vnode || null, v, p, null, null, null, L), p._vnode = v, j || (j = true, Za(O), zu(), j = false);
  }, U = { p: m, um: ge, m: se, r: me, mt: X, mc: w, pc: le, pbc: I, n: M, o: e };
  return { render: W, hydrate: void 0, createApp: jm(W) };
}
function Ds({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ig(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function aa(e, t, n = false) {
  const r = e.children, i = t.children;
  if (ie(r) && ie(i)) for (let s = 0; s < r.length; s++) {
    const o = r[s];
    let a = i[s];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = Qt(i[s]), a.el = o.el), !n && a.patchFlag !== -2 && aa(o, a)), a.type === gi && (a.patchFlag === -1 && (a = i[s] = Qt(a)), a.el = o.el), a.type === tt && !a.el && (a.el = o.el);
  }
}
function sg(e) {
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
function bf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : bf(t);
}
function ll(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function wf(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? wf(t.subTree) : null;
}
const _f = (e) => e.__isSuspense;
function og(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : vm(e);
}
const ye = Symbol.for("v-fgt"), gi = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), Hs = Symbol.for("v-stc"), Br = [];
let vt = null;
function oe(e = false) {
  Br.push(vt = e ? null : []);
}
function ag() {
  Br.pop(), vt = Br[Br.length - 1] || null;
}
let Qr = 1;
function Gi(e, t = false) {
  Qr += e, e < 0 && vt && t && (vt.hasOnce = true);
}
function Sf(e) {
  return e.dynamicChildren = Qr > 0 ? vt || Yn : null, ag(), Qr > 0 && vt && vt.push(e), e;
}
function he(e, t, n, r, i, s) {
  return Sf(P(e, t, n, r, i, s, true));
}
function sr(e, t, n, r, i) {
  return Sf(k(e, t, n, r, i, true));
}
function ei(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Cf = ({ key: e }) => e ?? null, Vi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Ne(e) || He(e) || fe(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, r = 0, i = null, s = e === ye ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Cf(t), ref: t && Vi(t), scopeId: Gu, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: r, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Ke };
  return a ? (la(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ne(n) ? 8 : 16), Qr > 0 && !o && vt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && vt.push(l), l;
}
const k = lg;
function lg(e, t = null, n = null, r = 0, i = null, s = false) {
  if ((!e || e === Pm) && (e = tt), ei(e)) {
    const a = gn(e, t, true);
    return n && la(a, n), Qr > 0 && !s && vt && (a.shapeFlag & 6 ? vt[vt.indexOf(e)] = a : vt.push(a)), a.patchFlag = -2, a;
  }
  if (yg(e) && (e = e.__vccOpts), t) {
    t = cg(t);
    let { class: a, style: l } = t;
    a && !Ne(a) && (t.class = Ee(a)), Se(l) && (fs(l) && !ie(l) && (l = ze({}, l)), t.style = Re(l));
  }
  const o = Ne(e) ? 1 : _f(e) ? 128 : Yu(e) ? 64 : Se(e) ? 4 : fe(e) ? 2 : 0;
  return P(e, t, n, r, i, o, s, true);
}
function cg(e) {
  return e ? fs(e) || hf(e) ? ze({}, e) : e : null;
}
function gn(e, t, n = false, r = false) {
  const { props: i, ref: s, patchFlag: o, children: a, transition: l } = e, u = t ? Te(i || {}, t) : i, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Cf(u), ref: t && t.ref ? n && s ? ie(s) ? s.concat(Vi(t)) : [s, Vi(t)] : Vi(t) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && gn(e.ssContent), ssFallback: e.ssFallback && gn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && r && Rn(c, l.clone(c)), c;
}
function ti(e = " ", t = 0) {
  return k(gi, null, e, t);
}
function or(e = "", t = false) {
  return t ? (oe(), sr(tt, null, e)) : k(tt, null, e);
}
function Wt(e) {
  return e == null || typeof e == "boolean" ? k(tt) : ie(e) ? k(ye, null, e.slice()) : ei(e) ? Qt(e) : k(gi, null, String(e));
}
function Qt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gn(e);
}
function la(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ie(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const i = t.default;
    i && (i._c && (i._d = false), la(e, i()), i._c && (i._d = true));
    return;
  } else {
    n = 32;
    const i = t._;
    !i && !hf(t) ? t._ctx = Ke : i === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else fe(t) ? (t = { default: t, _ctx: Ke }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ti(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Te(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r) if (i === "class") t.class !== r.class && (t.class = Ee([t.class, r.class]));
    else if (i === "style") t.style = Re([t.style, r.style]);
    else if (os(i)) {
      const s = t[i], o = r[i];
      o && s !== o && !(ie(s) && s.includes(o)) && (t[i] = s ? [].concat(s, o) : o);
    } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function $t(e, t, n, r = null) {
  Rt(e, t, 7, [n, r]);
}
const ug = lf();
let fg = 0;
function dg(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || ug, s = { uid: fg++, vnode: e, type: r, parent: t, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new wu(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(i.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: gf(r, i), emitsOptions: cf(r, i), emit: null, emitted: null, propsDefaults: ke, inheritAttrs: r.inheritAttrs, ctx: ke, data: ke, props: ke, attrs: ke, slots: ke, refs: ke, setupState: ke, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Wm.bind(null, s), e.ce && e.ce(s), s;
}
let nt = null;
const vi = () => nt || Ke;
let Ui, vo;
{
  const e = cs(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Ui = t("__VUE_INSTANCE_SETTERS__", (n) => nt = n), vo = t("__VUE_SSR_SETTERS__", (n) => ni = n);
}
const pi = (e) => {
  const t = nt;
  return Ui(e), e.scope.on(), () => {
    e.scope.off(), Ui(t);
  };
}, cl = () => {
  nt && nt.scope.off(), Ui(null);
};
function xf(e) {
  return e.vnode.shapeFlag & 4;
}
let ni = false;
function hg(e, t = false, n = false) {
  t && vo(t);
  const { props: r, children: i } = e.vnode, s = xf(e);
  qm(e, r, s, t), eg(e, i, n || t);
  const o = s ? mg(e, t) : void 0;
  return t && vo(false), o;
}
function mg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vm);
  const { setup: r } = n;
  if (r) {
    nn();
    const i = e.setupContext = r.length > 1 ? vg(e) : null, s = pi(e), o = mi(r, e, 0, [e.props, i]), a = hu(o);
    if (rn(), s(), (a || e.sp) && !Xn(e) && tf(e), a) {
      if (o.then(cl, cl), t) return o.then((l) => {
        ul(e, l);
      }).catch((l) => {
        ds(l, e, 0);
      });
      e.asyncDep = o;
    } else ul(e, o);
  } else Af(e);
}
function ul(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Nu(t)), Af(e);
}
function Af(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ut);
  {
    const i = pi(e);
    nn();
    try {
      Dm(e);
    } finally {
      rn(), i();
    }
  }
}
const gg = { get(e, t) {
  return et(e, "get", ""), e[t];
} };
function vg(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, gg), slots: e.slots, emit: e.emit, expose: t };
}
function ps(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nu(sm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in $r) return $r[n](e);
  }, has(t, n) {
    return n in t || n in $r;
  } })) : e.proxy;
}
function pg(e, t = true) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yg(e) {
  return fe(e) && "__vccOpts" in e;
}
const V = (e, t) => fm(e, t, ni);
function vn(e, t, n) {
  try {
    Gi(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !ie(t) ? ei(t) ? k(e, null, [t]) : k(e, t) : k(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ei(n) && (n = [n]), k(e, t, n));
  } finally {
    Gi(1);
  }
}
const bg = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let po;
const fl = typeof window < "u" && window.trustedTypes;
if (fl) try {
  po = fl.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Lf = po ? (e) => po.createHTML(e) : (e) => e, wg = "http://www.w3.org/2000/svg", _g = "http://www.w3.org/1998/Math/MathML", Jt = typeof document < "u" ? document : null, dl = Jt && Jt.createElement("template"), Sg = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const i = t === "svg" ? Jt.createElementNS(wg, e) : t === "mathml" ? Jt.createElementNS(_g, e) : n ? Jt.createElement(e, { is: n }) : Jt.createElement(e);
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
    dl.innerHTML = Lf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const a = dl.content;
    if (r === "svg" || r === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    t.insertBefore(a, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ln = "transition", Mr = "animation", ar = Symbol("_vtc"), Ef = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Mf = ze({}, Xu, Ef), Cg = (e) => (e.displayName = "Transition", e.props = Mf, e), lr = Cg((e, { slots: t }) => vn(Cm, kf(e), t)), wn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, hl = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function kf(e) {
  const t = {};
  for (const R in e) R in Ef || (t[R] = e[R]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: i, enterFromClass: s = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, b = xg(i), m = b && b[0], _ = b && b[1], { onBeforeEnter: g, onEnter: y, onEnterCancelled: A, onLeave: S, onLeaveCancelled: C, onBeforeAppear: x = g, onAppear: T = y, onAppearCancelled: w = A } = t, E = (R, B, X, K) => {
    R._enterCancelled = K, un(R, B ? c : a), un(R, B ? u : o), X && X();
  }, I = (R, B) => {
    R._isLeaving = false, un(R, f), un(R, h), un(R, d), B && B();
  }, $ = (R) => (B, X) => {
    const K = R ? T : y, ne = () => E(B, R, X);
    wn(K, [B, ne]), ml(() => {
      un(B, R ? l : s), Bt(B, R ? c : a), hl(K) || gl(B, r, m, ne);
    });
  };
  return ze(t, { onBeforeEnter(R) {
    wn(g, [R]), Bt(R, s), Bt(R, o);
  }, onBeforeAppear(R) {
    wn(x, [R]), Bt(R, l), Bt(R, u);
  }, onEnter: $(false), onAppear: $(true), onLeave(R, B) {
    R._isLeaving = true;
    const X = () => I(R, B);
    Bt(R, f), R._enterCancelled ? (Bt(R, d), yo(R)) : (yo(R), Bt(R, d)), ml(() => {
      R._isLeaving && (un(R, f), Bt(R, h), hl(S) || gl(R, r, _, X));
    }), wn(S, [R, X]);
  }, onEnterCancelled(R) {
    E(R, false, void 0, true), wn(A, [R]);
  }, onAppearCancelled(R) {
    E(R, true, void 0, true), wn(w, [R]);
  }, onLeaveCancelled(R) {
    I(R), wn(C, [R]);
  } });
}
function xg(e) {
  if (e == null) return null;
  if (Se(e)) return [Ns(e.enter), Ns(e.leave)];
  {
    const t = Ns(e);
    return [t, t];
  }
}
function Ns(e) {
  return Ih(e);
}
function Bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ar] || (e[ar] = /* @__PURE__ */ new Set())).add(t);
}
function un(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[ar];
  n && (n.delete(t), n.size || (e[ar] = void 0));
}
function ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ag = 0;
function gl(e, t, n, r) {
  const i = e._endId = ++Ag, s = () => {
    i === e._endId && r();
  };
  if (n != null) return setTimeout(s, n);
  const { type: o, timeout: a, propCount: l } = Tf(e, t);
  if (!o) return r();
  const u = o + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, d), s();
  }, d = (h) => {
    h.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, d);
}
function Tf(e, t) {
  const n = window.getComputedStyle(e), r = (b) => (n[b] || "").split(", "), i = r(`${ln}Delay`), s = r(`${ln}Duration`), o = vl(i, s), a = r(`${Mr}Delay`), l = r(`${Mr}Duration`), u = vl(a, l);
  let c = null, f = 0, d = 0;
  t === ln ? o > 0 && (c = ln, f = o, d = s.length) : t === Mr ? u > 0 && (c = Mr, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? ln : Mr : null, d = c ? c === ln ? s.length : l.length : 0);
  const h = c === ln && /\b(?:transform|all)(?:,|$)/.test(r(`${ln}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: h };
}
function vl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => pl(n) + pl(e[r])));
}
function pl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Lg(e, t, n) {
  const r = e[ar];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zi = Symbol("_vod"), Pf = Symbol("_vsh"), ca = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[Zi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : kr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), kr(e, true), r.enter(e)) : r.leave(e, () => {
    kr(e, false);
  }) : kr(e, t));
}, beforeUnmount(e, { value: t }) {
  kr(e, t);
} };
function kr(e, t) {
  e.style.display = t ? e[Zi] : "none", e[Pf] = !t;
}
const Eg = Symbol(""), Mg = /(?:^|;)\s*display\s*:/;
function kg(e, t, n) {
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
      const o = r[Eg];
      o && (n += ";" + o), r.cssText = n, s = Mg.test(n);
    }
  } else t && e.removeAttribute("style");
  Zi in e && (e[Zi] = s ? r.display : "", e[Pf] && (r.display = "none"));
}
const yl = /\s*!important$/;
function Di(e, t, n) {
  if (ie(n)) n.forEach((r) => Di(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Tg(e, t);
    yl.test(n) ? e.setProperty(On(r), n.replace(yl, ""), "important") : e[r] = n;
  }
}
const bl = ["Webkit", "Moz", "ms"], Fs = {};
function Tg(e, t) {
  const n = Fs[t];
  if (n) return n;
  let r = wt(t);
  if (r !== "filter" && r in e) return Fs[t] = r;
  r = mr(r);
  for (let i = 0; i < bl.length; i++) {
    const s = bl[i] + r;
    if (s in e) return Fs[t] = s;
  }
  return t;
}
const wl = "http://www.w3.org/1999/xlink";
function _l(e, t, n, r, i, s = Nh(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wl, t.slice(6, t.length)) : e.setAttributeNS(wl, t, n) : n == null || s && !pu(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Pt(n) ? String(n) : n);
}
function Sl(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Lf(n) : n);
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
    a === "boolean" ? n = pu(n) : n == null && a === "string" ? (n = "", o = true) : a === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Pg(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Ig(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cl = Symbol("_vei");
function Rg(e, t, n, r, i = null) {
  const s = e[Cl] || (e[Cl] = {}), o = s[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = Og(t);
    if (r) {
      const u = s[t] = Hg(r, i);
      Pg(e, a, u, l);
    } else o && (Ig(e, a, o, l), s[t] = void 0);
  }
}
const xl = /(?:Once|Passive|Capture)$/;
function Og(e) {
  let t;
  if (xl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(xl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : On(e.slice(2)), t];
}
let $s = 0;
const Vg = Promise.resolve(), Dg = () => $s || (Vg.then(() => $s = 0), $s = Date.now());
function Hg(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Rt(Ng(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = Dg(), n;
}
function Ng(e, t) {
  if (ie(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (i) => !i._stopped && r && r(i));
  } else return t;
}
const Al = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fg = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? Lg(e, r, o) : t === "style" ? kg(e, n, r) : os(t) ? Go(t) || Rg(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : $g(e, t, r, o)) ? (Sl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _l(e, t, r, o, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Ne(r)) ? Sl(e, wt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), _l(e, t, r, o));
};
function $g(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Al(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return false;
  }
  return Al(t) && Ne(n) ? false : t in e;
}
const If = /* @__PURE__ */ new WeakMap(), Rf = /* @__PURE__ */ new WeakMap(), Yi = Symbol("_moveCb"), Ll = Symbol("_enterCb"), Bg = (e) => (delete e.props.mode, e), jg = Bg({ name: "TransitionGroup", props: ze({}, Mf, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = vi(), r = qu();
  let i, s;
  return ia(() => {
    if (!i.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!Ug(i[0].el, n.vnode.el, o)) {
      i = [];
      return;
    }
    i.forEach(zg), i.forEach(Wg);
    const a = i.filter(Gg);
    yo(n.vnode.el), a.forEach((l) => {
      const u = l.el, c = u.style;
      Bt(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = u[Yi] = (d) => {
        d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Yi] = null, un(u, o));
      };
      u.addEventListener("transitionend", f);
    }), i = [];
  }), () => {
    const o = ee(e), a = kf(o);
    let l = o.tag || ye;
    if (i = [], s) for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.el && c.el instanceof Element && (i.push(c), Rn(c, Jr(c, a, r, n)), If.set(c, Of(c.el)));
    }
    s = t.default ? na(t.default()) : [];
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.key != null && Rn(c, Jr(c, a, r, n));
    }
    return k(l, null, s);
  };
} }), ua = jg;
function zg(e) {
  const t = e.el;
  t[Yi] && t[Yi](), t[Ll] && t[Ll]();
}
function Wg(e) {
  Rf.set(e, Of(e.el));
}
function Gg(e) {
  const t = If.get(e), n = Rf.get(e), r = t.left - n.left, i = t.top - n.top;
  if (r || i) {
    const s = e.el, o = s.style, a = s.getBoundingClientRect();
    let l = 1, u = 1;
    return s.offsetWidth && (l = a.width / s.offsetWidth), s.offsetHeight && (u = a.height / s.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${r / l}px,${i / u}px)`, o.transitionDuration = "0s", e;
  }
}
function Of(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Ug(e, t, n) {
  const r = e.cloneNode(), i = e[ar];
  i && i.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: o } = Tf(r);
  return s.removeChild(r), o;
}
const Zg = ze({ patchProp: Fg }, Sg);
let El;
function Yg() {
  return El || (El = ng(Zg));
}
const Kg = ((...e) => {
  const t = Yg().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = Xg(r);
    if (!i) return;
    const s = t._component;
    !fe(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, false, qg(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function qg(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Xg(e) {
  return Ne(e) ? document.querySelector(e) : e;
}
const Ml = () => {
};
function fa(e) {
  const t = `[${e}]`;
  return { debug: Ml, info: Ml, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const kl = 5;
function Jg(e, t, n) {
  const r = t * n, i = Math.max(1, Math.round(e / (r * kl)));
  return e / (i * kl);
}
function Vf(e, t, n) {
  const r = e * n.dpr, i = t * n.dpr, s = r + n.offsetX, o = i + n.offsetY, a = Math.floor(s / n.gridPitch), l = Math.floor(o / n.gridPitch);
  return { cx: a, cy: l };
}
function Qg(e, t) {
  const n = (e.cx % t.worldCols + t.worldCols) % t.worldCols, r = (e.cy % t.worldRows + t.worldRows) % t.worldRows;
  return { cx: n, cy: r };
}
function ev(e, t, n) {
  return { cssX: (e * n.gridPitch - n.offsetX) / n.dpr, cssY: (t * n.gridPitch - n.offsetY) / n.dpr };
}
function tv(e, t) {
  return e * t.gridPitch / t.dpr;
}
const Df = 1, nv = `gol.gridBlankZones.v${Df}`, rv = 128;
function iv(e, t, n, r) {
  if (!Array.isArray(e)) return [];
  const i = r ?? Date.now(), s = [];
  for (const o of e) {
    if (s.length >= n) break;
    const a = t(o, i);
    a && s.push(a);
  }
  return s;
}
const sv = /* @__PURE__ */ new Set(["minor", "major", "both"]), ov = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function Bs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Gn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function av() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function lv(e) {
  return typeof e == "string" && sv.has(e) ? e : "both";
}
function cv(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && ov.has(t.style) ? t.style : "none", r = Bs(Gn(t.widthCells) ?? 1, 1, 4), i = typeof t.opacity == "number" ? t.opacity : 1, s = Bs(i, 0, 1), o = { style: n, widthCells: r, opacity: s };
  if (n === "fade") {
    const a = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    o.fadeStrength = Bs(a, 0, 1);
  }
  return n === "noted" && (o.notePitchCells = Math.max(1, Gn(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (o.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), o;
}
function uv(e) {
  return typeof e == "boolean" ? e : true;
}
function Tl(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Hf(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, r = Gn(n.x1), i = Gn(n.y1), s = Gn(n.x2), o = Gn(n.y2);
  if (r === null || i === null || s === null || o === null) return null;
  const a = Math.min(r, s), l = Math.max(r, s), u = Math.min(i, o), c = Math.max(i, o);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : av(), x1: a, y1: u, x2: l, y2: c, mode: lv(n.mode), edge: cv(n.edge), enabled: uv(n.enabled), createdAt: Tl(n.createdAt, t), updatedAt: Tl(n.updatedAt, t) };
}
function Nf(e, t = Date.now()) {
  return iv(e, Hf, rv, t);
}
function js() {
  return typeof localStorage < "u";
}
function fv(e) {
  return { load() {
    if (!js()) return [];
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
    if (!js()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    js() && localStorage.removeItem(e.key);
  } };
}
const da = fv({ key: nv, version: Df, normalize: Nf, itemsKey: "zones" }), dv = da.load, hv = da.save, mv = da.clear;
function gv(e) {
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
function vv(e = {}) {
  const { items: t, setItems: n, addItem: r, updateItem: i, removeItem: s, clearItems: o, syncFromWorker: a } = gv({ storage: { load: dv, save: hv, clear: mv }, normalize: Nf, normalizeOne: Hf, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: r, updateZone: i, removeZone: s, clearZones: o, syncFromWorker: a };
}
const Pl = fa("WorkerBridge");
function pv() {
  let e = null;
  const t = q(null), n = /* @__PURE__ */ new Map();
  function r(l, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(l, u) : e.postMessage(l);
    } catch (c) {
      Pl.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
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
    const f = new Worker(new URL("/assets/backgroundRenderer-BYYkxl_g.js", import.meta.url), { type: "module" });
    f.onmessage = (d) => s(d.data), f.onerror = (d) => {
      Pl.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = f, r({ type: "init", canvas: l, cellPx: u, theme: c }, [l]);
  }
  function a() {
    r({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: r, on: i, init: o, terminate: a };
}
const zs = 5, yv = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), bv = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function wv(e, t) {
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
    const c = Vf(l.clientX, l.clientY, u);
    return { cx: r(c.cx, u), cy: c.cy };
  }
  function s(l, u) {
    return { x1: Math.min(l.cx, u.cx), y1: Math.min(l.cy, u.cy), x2: Math.max(l.cx, u.cx), y2: Math.max(l.cy, u.cy) };
  }
  function o(l, u) {
    const c = (d) => Math.floor(d / zs) * zs, f = (d) => c(d) + (zs - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(l.x1))), y1: c(l.y1), x2: Math.max(0, Math.min(u.worldCols - 1, f(l.x2))), y2: f(l.y2) };
  }
  function a(l) {
    if (!(l instanceof HTMLElement)) return false;
    if (l.closest(bv)) return true;
    let u = l;
    for (; u; ) {
      if (yv.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: i, cellToScreen: ev, cellSpanToCssPx: tv, normalizeRect: s, snapRectToMajor: o, isInteractiveTarget: a, wrapXToWorld: r };
}
function _v() {
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
function Sv(e) {
  const t = /* @__PURE__ */ new Map(), n = q(null), r = q(null), i = q(null);
  let s = null, o = null;
  function a(_, g) {
    t.set(_, g);
  }
  function l() {
    for (const _ of t.values()) if (_.isEnabled()) return true;
    return false;
  }
  function u() {
    const _ = r.value, g = e.makeSnapshot();
    if (!_ || !g) {
      i.value = null;
      return;
    }
    const y = e.cellToScreen(_.x1, _.y1, g), A = e.cellSpanToCssPx(_.x2 - _.x1 + 1, g), S = e.cellSpanToCssPx(_.y2 - _.y1 + 1, g);
    i.value = { left: `${y.cssX}px`, top: `${y.cssY}px`, width: `${A}px`, height: `${S}px` };
  }
  function c() {
    s = null, n.value = null, o = null, r.value = null, i.value = null;
  }
  function f(_) {
    n.value === _ && c();
  }
  function d(_) {
    if (_.button !== 0 || e.isInteractiveTarget(_.target)) return;
    let g = null;
    for (const S of t.entries()) S[1].isEnabled() && (!g || S[1].priority > g[1].priority) && (g = S);
    if (!g) return;
    const y = e.pointerToCell(_);
    if (!y) return;
    n.value = g[0], s = y;
    const A = { x1: y.cx, y1: y.cy, x2: y.cx, y2: y.cy };
    g[1].dragMode === "paint" && (o = { ...A }), r.value = A, u(), _.target instanceof Element && _.target.setPointerCapture(_.pointerId), _.preventDefault();
  }
  function h(_) {
    var _a2;
    if (!n.value || !s) return;
    const g = t.get(n.value);
    if (!g) return;
    const y = e.pointerToCell(_), A = e.makeSnapshot();
    if (!(!y || !A)) {
      if (g.dragMode === "paint" && o) o.x1 = Math.min(o.x1, y.cx), o.y1 = Math.min(o.y1, y.cy), o.x2 = Math.max(o.x2, y.cx), o.y2 = Math.max(o.y2, y.cy), r.value = { ...o };
      else {
        const S = e.normalizeRect(s, y);
        r.value = ((_a2 = g.snapMajor) == null ? void 0 : _a2.call(g)) ? e.snapRectToMajor(S, A) : S;
      }
      u();
    }
  }
  function b(_) {
    var _a2;
    if (!n.value || !s || _.button !== 0) return;
    _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId);
    const g = t.get(n.value);
    if (!g) {
      c();
      return;
    }
    const y = e.pointerToCell(_), A = e.makeSnapshot();
    let S;
    if (g.dragMode === "paint" && o) y && (o.x1 = Math.min(o.x1, y.cx), o.y1 = Math.min(o.y1, y.cy), o.x2 = Math.max(o.x2, y.cx), o.y2 = Math.max(o.y2, y.cy)), S = o;
    else if (y) {
      const x = e.normalizeRect(s, y);
      S = ((_a2 = g.snapMajor) == null ? void 0 : _a2.call(g)) && A ? e.snapRectToMajor(x, A) : x;
    } else {
      c();
      return;
    }
    g.onCommit(S, A) === false || c();
  }
  function m() {
    return document.addEventListener("pointerdown", d), document.addEventListener("pointermove", h), document.addEventListener("pointerup", b), () => {
      document.removeEventListener("pointerdown", d), document.removeEventListener("pointermove", h), document.removeEventListener("pointerup", b);
    };
  }
  return { register: a, activeTool: n, previewRect: r, previewStyle: i, cancelActiveDrag: f, anyToolEnabled: l, attachListeners: m };
}
const Il = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, Rl = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function _n(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Mt([e, t, n], r = 1) {
  return r === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${r.toFixed(3)})`;
}
function Ws([e, t, n], r = 1, i = 1) {
  const s = t * r;
  return i === 1 ? `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)} / ${i.toFixed(3)})`;
}
const Ff = "theme-preference";
function Cv() {
  var _a2;
  if (typeof window > "u") return "system";
  const e = (_a2 = window.localStorage) == null ? void 0 : _a2.getItem(Ff);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const ri = q(Cv()), $f = q(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    $f.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
te(ri, (e) => {
  var _a2;
  typeof window < "u" && ((_a2 = window.localStorage) == null ? void 0 : _a2.setItem(Ff, e));
});
const bo = V(() => ri.value === "light" ? Il : ri.value === "dark" || $f.value ? Rl : Il);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, r = (s, o) => {
      n.style.setProperty(s, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", r("--theme-surface", Mt(t.surface)), r("--theme-ink", Mt(t.ink)), r("--theme-ink-secondary", Mt(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-ink-tertiary", Mt(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-text-primary", Mt(t.ink)), r("--theme-text-secondary", Mt(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-text-tertiary", Mt(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-grid-minor", Mt(_n(t.surface, t.ink, t.minor_t))), r("--theme-grid-major", Mt(_n(t.surface, t.ink, t.major_t))), r("--theme-grid-border", Mt(_n(t.surface, t.ink, t.border_t))), r("--theme-accent", Ws(t.accent, t.accent_chroma_scale)), r("--theme-accent-ring", Ws(t.accent, t.accent_chroma_scale, 0.45)), r("--theme-selection-bg", Ws(t.accent, t.accent_chroma_scale, 0.2)), r("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const i = document.querySelector('meta[name="theme-color"]');
    i && i.setAttribute("content", Mt(t.surface));
  };
  e(bo.value), te(bo, e);
}
function Bf() {
  return { preference: ri, theme: bo, setPreference(e) {
    ri.value = e;
  } };
}
const xv = 5, Av = 16, Lv = 2160;
function Ev(e) {
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
  function h(E) {
    const I = Math.round(screen.height * devicePixelRatio);
    return Math.max(E, I, Lv);
  }
  function b() {
    const E = document.createElement("div");
    E.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(E);
    const I = E.getBoundingClientRect().width;
    return E.remove(), Math.abs(I - 100) > 0.1;
  }
  function m(E) {
    return Jg(E, Av, devicePixelRatio);
  }
  function _(E, I, $) {
    const R = I / devicePixelRatio, B = $ / devicePixelRatio;
    let X = R, K = B;
    if (u) {
      const ne = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      ne > 0 && ne !== 1 && (X = R / ne, K = B / ne);
    }
    E.style.width = `${X.toFixed(2)}px`, E.style.height = `${K.toFixed(2)}px`;
  }
  function g(E) {
    E.classList.add("app-bg--hidden"), s !== null && clearTimeout(s), s = window.setTimeout(() => {
      s = null, E.classList.remove("app-bg--hidden");
    }, 120);
  }
  function y(E) {
    const I = m(E);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * I * xv / devicePixelRatio).toFixed(1)}px`);
  }
  function A(E, I) {
    n = I, _(E, n, r), g(E), y(n), e({ type: "resize", width: n, height: r });
  }
  function S(E) {
    a === null && (a = requestAnimationFrame(() => {
      a = null, !(o === 0 || o === n) && A(E, o);
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
    t = I, u = b();
    const $ = f(E);
    n = $.width, r = h($.height), I.width = n, I.height = r, _(I, n, r);
    const R = I.transferControlToOffscreen(), B = m(n);
    return y(n), i = new ResizeObserver(([X]) => {
      if (!t) return;
      const K = d(X);
      K <= 0 || K === n || (o = K, S(t));
    }), i.observe(E), l = C(() => {
      if (!t) return;
      u = b();
      const X = Math.round(E.getBoundingClientRect().height * devicePixelRatio);
      r = h(X), A(t, n);
    }), { offscreen: R, gridPitch: B };
  }
  function T() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      c || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 800));
  }
  function w() {
    c = true, i == null ? void 0 : i.disconnect(), l == null ? void 0 : l(), s !== null && (clearTimeout(s), s = null), a !== null && (cancelAnimationFrame(a), a = null), t = null;
  }
  return { initialize: x, revealCanvas: T, teardown: w };
}
const Mv = fa("AppBackground");
function kv(e) {
  e.on("startup_breakdown", (t) => {
    const n = (s) => `${s.toFixed(0)}ms`, r = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], i = t.phases.newOffscreenPhases;
    i && (r.push("  new_offscreen sub-phases:"), r.push(`    device_request   ${n(i.deviceRequest)}`), r.push(`    panel_init       ${n(i.panelInit)}`), r.push(`    seeding          ${n(i.seeding)}`), r.push(`    simulation_init  ${n(i.simulationInit)}`), r.push(`    renderer_init    ${n(i.rendererInit)}`));
  }), e.on("gpu_pass_breakdown", (t) => {
    const n = (i) => i === null ? "\u2014" : `${i.toFixed(2)}ms`, r = t.durations;
    Mv.info(`GPU pass breakdown (frame ${t.frame}):
  compute_tick   ${n(r.computeTickMs)}
  xor_edit       ${n(r.xorEditMs)}
  or_edit        ${n(r.orEditMs)}
  render_pass    ${n(r.renderPassMs)}`);
  });
}
var Tv = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z", Pv = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", jf = "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z", Iv = "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M13 13C13 14.1 12.1 15 11 15S9 14.1 9 13 9.9 11 11 11 13 11.9 13 13M15 18V19H7V18C7 16.67 9.67 16 11 16S15 16.67 15 18Z", Rv = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z", zf = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", Ov = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z", Vv = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z", Wf = "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z", Dv = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", Hv = "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z", Ol = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z", Nv = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z", Vl = "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z", Fv = "M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z", Dl = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Hl = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
const pr = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0, icon: Ov }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0, icon: Fv }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0, icon: Iv }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1, icon: jf }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1, icon: Tv }], ys = pr[0], Gf = new Map(pr.map((e) => [e.id, e]));
new Map(pr.map((e) => [e.route, e]));
function bs(e) {
  return Gf.get(e) ?? ys;
}
function $v(e) {
  return typeof e == "string" && Gf.has(e) ? e : ys.id;
}
function Bv(e, t) {
  return Math.min(e.w, t);
}
function Nl(e, t, n, r) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + r;
}
function jv(e, t) {
  const n = t.zoom, r = Bv(e, t.panelMaxWidth), i = t.panelHeight ?? e.h;
  return { col: Nl(e.w, r, n, t.gutterX), row: Nl(e.h, i, n, t.gutterY) };
}
function yr(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function Uf(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function zv(e, t, n, r) {
  const i = Uf(e, t, n), s = Math.hypot(i.x - n.w / 2, i.y - n.h / 2), o = Math.min(1, s / Math.max(r.radius, 1e-6)), a = o * o * (3 - 2 * o);
  return r.floor + (1 - r.floor) * (1 - a);
}
const Wv = 1200, Fl = 0.55, Gv = 0.7, Uv = 0.7, $l = 0.5, Zv = 280, Yv = 180, Kv = 24, Bl = 1.4, qv = 0.6, Xv = 300, Jv = 22, Qv = 30, jl = 40, e1 = 240, t1 = 0.14, n1 = 0.7, r1 = 6, i1 = 84, Gs = 18, s1 = Math.PI / 3, o1 = 0.01;
function a1(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function l1(e, t, n = o1) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function c1(e, t) {
  const n = t.w / 2, r = t.h / 2;
  return `translate(${n}px, ${r}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function u1(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const f1 = 0.18, d1 = 1;
function Zf(e) {
  return jv(e, { panelMaxWidth: Wv, gutterX: Fl * e.w, gutterY: Fl * e.h, zoom: 1 });
}
const yi = q({ w: 1, h: 1 });
function Yf() {
  const e = bs(ys.id), t = yr(e, Zf(yi.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const xt = q(Yf()), Qn = q(Yf()), ws = q(false), ha = q(ys.id), ma = q(0), Kf = q(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    Kf.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const ga = V(() => Zf(yi.value));
let Tn = 0;
function qf() {
  if (xt.value = a1(xt.value, Qn.value, f1), l1(xt.value, Qn.value)) {
    xt.value = { ...Qn.value }, ws.value = false, Tn = 0;
    return;
  }
  Tn = requestAnimationFrame(qf);
}
function h1() {
  Tn === 0 && (ws.value = true, Tn = requestAnimationFrame(qf));
}
function m1() {
  Tn !== 0 && (cancelAnimationFrame(Tn), Tn = 0), ws.value = false;
}
function va(e, t, n) {
  m1();
  const r = n ?? xt.value.zoom;
  xt.value = { x: e, y: t, zoom: r }, Qn.value = { x: e, y: t, zoom: r };
}
function Xf(e, t, n = {}) {
  const r = n.zoom ?? Qn.value.zoom;
  if (Qn.value = { x: e, y: t, zoom: r }, n.snap || Kf.value) {
    va(e, t, r);
    return;
  }
  h1();
}
function g1(e, t = {}) {
  ha.value = e, ma.value = 0;
  const n = bs(e), r = yr(n, ga.value);
  Xf(r.x, r.y, { zoom: n.zoom, snap: t.snap });
}
function v1() {
  ha.value = null;
}
function p1(e, t) {
  yi.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function y1(e) {
  ma.value = Math.max(0, e);
}
te(ga, (e) => {
  const t = ha.value;
  if (t === null) return;
  const n = bs(t), r = yr(n, e);
  va(r.x, r.y, n.zoom ?? xt.value.zoom);
});
const b1 = V(() => ({ transform: c1(xt.value, yi.value) })), w1 = V(() => u1({ x: xt.value.x, y: xt.value.y + ma.value, zoom: xt.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, d1));
function Vn() {
  return { camera: xt, isAnimating: ws, viewport: yi, spacing: ga, cameraStyle: b1, worldOffsetDevicePx: w1, panTo: Xf, panToWaypoint: g1, snapTo: va, releaseAnchor: v1, setViewport: p1, setCaptureScroll: y1 };
}
const zl = 0.1;
function _1(e) {
  const { worldOffsetDevicePx: t } = Vn();
  let n = Number.NaN, r = Number.NaN;
  te(t, ({ x: i, y: s }) => {
    Math.abs(i - n) < zl && Math.abs(s - r) < zl || (n = i, r = s, e.post({ type: "camera", x: i, y: s }));
  });
}
function Jf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Oe = typeof window < "u", pa = Oe && "IntersectionObserver" in window, S1 = Oe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Qf = Oe && "matchMedia" in window && typeof window.matchMedia == "function", Ki = () => Qf && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Wl(e, t, n) {
  C1(e, t), t.set(e, n);
}
function C1(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Gl(e, t, n) {
  return e.set(ed(e, t), n), n;
}
function qt(e, t) {
  return e.get(ed(e, t));
}
function ed(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function td(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let i = 0; i < r; i++) {
    if (e == null) return n;
    e = e[t[i]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function wo(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), td(e, t.split("."), n));
}
function Tr(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const i = t(e, n);
    return typeof i > "u" ? n : i;
  }
  if (typeof t == "string") return wo(e, t, n);
  if (Array.isArray(t)) return td(e, t, n);
  if (typeof t != "function") return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}
function nd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, r) => t + r);
}
function ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function _o(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ul(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function x1(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function Us(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function A1(e, t) {
  const n = {};
  for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function Dn(e, t) {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}
const L1 = /^on[^a-z]/, rd = (e) => L1.test(e);
function ya(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ii(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Zl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Yl(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function E1(e) {
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
    if (Ul(s) && Ul(o)) {
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
function id(e) {
  return e.map((t) => t.type === ye ? id(t.children) : t).flat();
}
function Pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Pn.cache.has(e)) return Pn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Pn.cache.set(e, t), t;
}
Pn.cache = /* @__PURE__ */ new Map();
function Un(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Un(e, n)).flat(1);
  if (t.suspense) return Un(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Un(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return Un(e, t.component.subTree).flat(1);
  }
  return [];
}
var $n = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap();
class M1 {
  constructor(t) {
    Wl(this, $n, []), Wl(this, Sn, 0), this.size = t;
  }
  get isFull() {
    return qt($n, this).length === this.size;
  }
  push(t) {
    qt($n, this)[qt(Sn, this)] = t, Gl(Sn, this, (qt(Sn, this) + 1) % this.size);
  }
  values() {
    return qt($n, this).slice(qt(Sn, this)).concat(qt($n, this).slice(0, qt(Sn, this)));
  }
  clear() {
    qt($n, this).length = 0, Gl(Sn, this, 0);
  }
}
function ba(e) {
  const t = Ye({});
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
function sd(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const jr = () => [Function, Array];
function Kl(e, t) {
  return t = "on" + mr(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function er(e) {
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
function od(e, t, n) {
  let r, i = e.indexOf(document.activeElement);
  const s = t === "next" ? 1 : -1;
  do
    i += s, r = e[i];
  while ((!r || r.offsetParent == null || !((n == null ? void 0 : n(r)) ?? true)) && i < e.length && i >= 0);
  return r;
}
function zr(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = er(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const r = od(n, t);
    r ? r.focus() : zr(e, t === "next" ? "first" : "last");
  }
}
function k1(e, t) {
  if (!(Oe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function T1(e, t) {
  if (!Oe || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function P1(e, t) {
  const n = e.clientX, r = e.clientY, i = t.getBoundingClientRect(), s = i.left, o = i.top, a = i.right, l = i.bottom;
  return n >= s && n <= a && r >= o && r <= l;
}
function So() {
  const e = ce(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => x1(e.value) }), t;
}
function cr(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function I1(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, i] = n;
    return t.includes(r) ? !!i : i !== void 0;
  }));
}
const ad = ["top", "bottom"], R1 = ["start", "end", "left", "right"];
function Co(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = qi(ad, n) ? "start" : qi(R1, n) ? "top" : "center"), { side: ql(n, t), align: ql(r, t) };
}
function ql(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Zs(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Ys(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Xl(e) {
  return { side: e.align, align: e.side };
}
function Jl(e) {
  return qi(ad, e.side) ? "y" : "x";
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
function Ql(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function ld(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new At({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new At(e);
}
function O1(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new At({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new At({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new At(e);
}
function cd(e) {
  const t = new At(e), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, s, o, a, l;
    if (r.startsWith("matrix3d(")) i = r.slice(9, -1).split(/, /), s = Number(i[0]), o = Number(i[5]), a = Number(i[12]), l = Number(i[13]);
    else if (r.startsWith("matrix(")) i = r.slice(7, -1).split(/, /), s = Number(i[0]), o = Number(i[3]), a = Number(i[4]), l = Number(i[5]);
    else return new At(t);
    const u = n.transformOrigin, c = t.x - a - (1 - s) * parseFloat(u), f = t.y - l - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = s ? t.width / s : e.offsetWidth + 1, h = o ? t.height / o : e.offsetHeight + 1;
    return new At({ x: c, y: f, width: d, height: h });
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
function V1(e, t) {
  Object.keys(t).forEach((n) => {
    if (rd(n)) {
      const r = sd(n), i = Hi.get(e);
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
function D1(e, t) {
  Object.keys(t).forEach((n) => {
    if (rd(n)) {
      const r = sd(n), i = Hi.get(e);
      i == null ? void 0 : i.forEach((s) => {
        const [o, a] = s;
        o === r && (e.removeEventListener(r, a), i.delete(s));
      });
    } else e.removeAttribute(n);
  });
}
const Bn = 2.4, ec = 0.2126729, tc = 0.7151522, nc = 0.072175, H1 = 0.55, N1 = 0.58, F1 = 0.57, $1 = 0.62, Pi = 0.03, rc = 1.45, B1 = 5e-4, j1 = 1.25, z1 = 1.25, ic = 0.078, sc = 12.82051282051282, Ii = 0.06, oc = 1e-3;
function ac(e, t) {
  const n = (e.r / 255) ** Bn, r = (e.g / 255) ** Bn, i = (e.b / 255) ** Bn, s = (t.r / 255) ** Bn, o = (t.g / 255) ** Bn, a = (t.b / 255) ** Bn;
  let l = n * ec + r * tc + i * nc, u = s * ec + o * tc + a * nc;
  if (l <= Pi && (l += (Pi - l) ** rc), u <= Pi && (u += (Pi - u) ** rc), Math.abs(u - l) < B1) return 0;
  let c;
  if (u > l) {
    const f = (u ** H1 - l ** N1) * j1;
    c = f < oc ? 0 : f < ic ? f - f * sc * Ii : f - Ii;
  } else {
    const f = (u ** $1 - l ** F1) * z1;
    c = f > -oc ? 0 : f > -ic ? f - f * sc * Ii : f + Ii;
  }
  return c * 100;
}
const Xi = 0.20689655172413793, W1 = (e) => e > Xi ** 3 ? Math.cbrt(e) : e / (3 * Xi ** 2) + 4 / 29, G1 = (e) => e > Xi ? e ** 3 : 3 * Xi ** 2 * (e - 4 / 29);
function ud(e) {
  const t = W1, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function fd(e) {
  const t = G1, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const U1 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Z1 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Y1 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], K1 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function dd(e) {
  const t = Array(3), n = Z1, r = U1;
  for (let i = 0; i < 3; ++i) t[i] = Math.round(ii(n(r[i][0] * e[0] + r[i][1] * e[1] + r[i][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function wa(e) {
  let { r: t, g: n, b: r } = e;
  const i = [0, 0, 0], s = K1, o = Y1;
  t = s(t / 255), n = s(n / 255), r = s(r / 255);
  for (let a = 0; a < 3; ++a) i[a] = o[a][0] * t + o[a][1] * n + o[a][2] * r;
  return i;
}
function xo(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function q1(e) {
  return xo(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const lc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, X1 = { rgb: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), rgba: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), hsl: (e, t, n, r) => cc({ h: e, s: t, l: n, a: r }), hsla: (e, t, n, r) => cc({ h: e, s: t, l: n, a: r }), hsv: (e, t, n, r) => si({ h: e, s: t, v: n, a: r }), hsva: (e, t, n, r) => si({ h: e, s: t, v: n, a: r }) };
function Gt(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && lc.test(e)) {
    const { groups: t } = e.match(lc), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((s, o) => s.endsWith("%") || o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return X1[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Q1(t);
  } else if (typeof e == "object") {
    if (Us(e, ["r", "g", "b"])) return e;
    if (Us(e, ["h", "s", "l"])) return si(hd(e));
    if (Us(e, ["h", "s", "v"])) return si(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function si(e) {
  const { h: t, s: n, v: r, a: i } = e, s = (a) => {
    const l = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0);
  }, o = [s(5), s(3), s(1)].map((a) => Math.round(a * 255));
  return { r: o[0], g: o[1], b: o[2], a: i };
}
function cc(e) {
  return si(hd(e));
}
function hd(e) {
  const { h: t, s: n, l: r, a: i } = e, s = r + n * Math.min(r, 1 - r), o = s === 0 ? 0 : 2 - 2 * r / s;
  return { h: t, s: o, v: s, a: i };
}
function Ri(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function J1(e) {
  let { r: t, g: n, b: r, a: i } = e;
  return `#${[Ri(t), Ri(n), Ri(r), i !== void 0 ? Ri(Math.round(i * 255)) : ""].join("")}`;
}
function Q1(e) {
  e = ep(e);
  let [t, n, r, i] = E1(e, 2).map((s) => parseInt(s, 16));
  return i = i === void 0 ? i : i / 255, { r: t, g: n, b: r, a: i };
}
function ep(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Zl(Zl(e, 6), 8, "F")), e;
}
function tp(e, t) {
  const n = ud(wa(e));
  return n[0] = n[0] + t * 10, dd(fd(n));
}
function np(e, t) {
  const n = ud(wa(e));
  return n[0] = n[0] - t * 10, dd(fd(n));
}
function rp(e) {
  const t = Gt(e);
  return wa(t)[1];
}
function md(e) {
  const t = Math.abs(ac(Gt(0), Gt(e)));
  return Math.abs(ac(Gt(16777215), Gt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function J(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const o = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : { type: e[i] };
    return n && i in n ? r[i] = { ...o, default: n[i] } : r[i] = o, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const Ge = J({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function Ue(e, t) {
  const n = vi();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ue(e).type;
  return Pn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function ip(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const ur = Symbol.for("vuetify:defaults");
function sp(e) {
  return q(e);
}
function _a() {
  const e = Me(ur);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function _s(e, t) {
  const n = _a(), r = q(e), i = V(() => {
    if (ue(t == null ? void 0 : t.disabled)) return n.value;
    const o = ue(t == null ? void 0 : t.scoped), a = ue(t == null ? void 0 : t.reset), l = ue(t == null ? void 0 : t.root);
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
  return qe(ur, i), i;
}
function op(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Pn(t)] < "u");
}
function ap() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _a();
  const r = Ue("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const i = V(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), s = new Proxy(e, { get(l, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(l, u);
    if (u === "class" || u === "style") return [(_a2 = i.value) == null ? void 0 : _a2[u], c].filter((h) => h != null);
    if (op(r.vnode, u)) return c;
    const f = (_b2 = i.value) == null ? void 0 : _b2[u];
    if (f !== void 0) return f;
    const d = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return d !== void 0 ? d : c;
  } }), o = ce();
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
    const l = ip(ur, r);
    qe(ur, V(() => o.value ? pt((l == null ? void 0 : l.value) ?? {}, o.value) : l == null ? void 0 : l.value));
  }
  return { props: s, provideSubDefaults: a };
}
function br(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = J(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return A1(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const s = _a();
      if (!s.value) return e._setup(r, i);
      const { props: o, provideSubDefaults: a } = ap(r, r._as ?? e.name, s), l = e._setup(o, i);
      return a(), l;
    };
  }
  return e;
}
function Ae() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? br : Xe)(t);
}
function lp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Ae()({ name: n ?? mr(wt(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...Ge() }, setup(r, i) {
    let { slots: s } = i;
    return () => {
      var _a2;
      return vn(r.tag, { class: [e, r.class], style: r.style }, (_a2 = s.default) == null ? void 0 : _a2.call(s));
    };
  } });
}
function cp(e, t, n, r) {
  if (!n || cr(e) || cr(t)) return;
  const i = n.get(e);
  if (i) i.set(t, r);
  else {
    const s = /* @__PURE__ */ new WeakMap();
    s.set(t, r), n.set(e, s);
  }
}
function up(e, t, n) {
  var _a2, _b2;
  if (!n || cr(e) || cr(t)) return null;
  const r = (_a2 = n.get(e)) == null ? void 0 : _a2.get(t);
  if (typeof r == "boolean") return r;
  const i = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof i == "boolean" ? i : null;
}
function tr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return false;
  const i = up(e, t, n);
  return i || (cp(e, t, n, true), r.every((s) => tr(e[s], t[s], n)));
}
function gd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Ao = "cubic-bezier(0.4, 0, 0.2, 1)", uc = "cubic-bezier(0.0, 0, 0.2, 1)", fc = "cubic-bezier(0.4, 0, 1, 1)", fp = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function dp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? hp(e) : Sa(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ji(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Sa(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Sa(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, r = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || r;
}
function hp(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function mp(e) {
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
function gp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, r = 0, i = 0, s = false, o = 0;
  function a() {
    clearTimeout(r), s = false, o = 0;
  }
  const l = function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++) c[f] = arguments[f];
    clearTimeout(r);
    const d = Date.now();
    o || (o = d);
    const h = d - Math.max(o, i);
    function b() {
      i = Date.now(), r = setTimeout(a, t), e(...c);
    }
    s ? h >= t ? b() : n.trailing && (r = setTimeout(b, t - h)) : (s = true, n.leading && b());
  };
  return l.clear = a, l.immediate = e, l;
}
const wr = J({ border: [Boolean, Number, String] }, "border");
function _r(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { borderClasses: V(() => {
    const r = e.border;
    return r === true || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((i) => `border-${i}`) : [];
  }) };
}
const vp = [null, "default", "comfortable", "compact"], bi = J({ density: { type: String, default: "default", validator: (e) => vp.includes(e) } }, "density");
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
const Hn = J({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function Nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { roundedClasses: V(() => {
    const r = He(e) ? e.value : e.rounded, i = He(e) ? false : e.tile, s = [];
    if (i || r === false) s.push("rounded-0");
    else if (r === true || r === "") s.push(`${t}--rounded`);
    else if (typeof r == "string" || r === 0) for (const o of String(r).split(" ")) s.push(`rounded-${o}`);
    return s;
  }) };
}
const _t = J({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), oi = Symbol.for("vuetify:theme"), Vt = J({ theme: String }, "theme");
function dc() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function pp() {
  var _a2, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dc();
  const t = dc();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [r, i] of Object.entries(e.themes ?? {})) {
    const s = i.dark || r === "dark" ? (_a2 = t.themes) == null ? void 0 : _a2.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[r] = pt(s, i);
  }
  return pt(t, { ...e, themes: n });
}
function Cn(e, t, n, r) {
  e.push(`${_p(t, r)} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function hc(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, i = [];
  for (const [s, o] of Object.entries(e.colors)) {
    const a = Gt(o);
    i.push(`--${t}theme-${s}: ${a.r},${a.g},${a.b}`), s.startsWith("on-") || i.push(`--${t}theme-${s}-overlay-multiplier: ${rp(o) > 0.18 ? n : r}`);
  }
  for (const [s, o] of Object.entries(e.variables)) {
    const a = typeof o == "string" && o.startsWith("#") ? Gt(o) : void 0, l = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    i.push(`--${t}${s}: ${l ?? o}`);
  }
  return i;
}
function yp(e, t, n) {
  const r = {};
  if (n) for (const i of ["lighten", "darken"]) {
    const s = i === "lighten" ? tp : np;
    for (const o of nd(n[i], 1)) r[`${e}-${i}-${o}`] = J1(s(Gt(t), o));
  }
  return r;
}
function bp(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const i = e[r];
    i && (n = { ...n, ...yp(r, i, t) });
  }
  return n;
}
function wp(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, i = Gt(e[n]);
    t[r] = md(i);
  }
  return t;
}
function _p(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function Sp(e, t, n) {
  const r = Cp(e, t);
  r && (r.innerHTML = n);
}
function Cp(e, t) {
  if (!Oe) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function xp(e) {
  const t = pp(e), n = ce(t.defaultTheme), r = q(t.themes), i = ce("light"), s = V({ get() {
    return n.value === "system" ? i.value : n.value;
  }, set(g) {
    n.value = g;
  } }), o = V(() => {
    const g = {};
    for (const [y, A] of Object.entries(r.value)) {
      const S = { ...A.colors, ...bp(A.colors, t.variations) };
      g[y] = { ...A, colors: { ...S, ...wp(S) } };
    }
    return g;
  }), a = F(() => o.value[s.value]), l = F(() => n.value === "system"), u = V(() => {
    var _a2;
    const g = [], y = t.unimportant ? "" : " !important", A = t.scoped ? t.prefix : "";
    ((_a2 = a.value) == null ? void 0 : _a2.dark) && Cn(g, ":root", ["color-scheme: dark"], t.scope), Cn(g, ":root", hc(a.value, t.prefix), t.scope);
    for (const [C, x] of Object.entries(o.value)) Cn(g, `.${t.prefix}theme--${C}`, [`color-scheme: ${x.dark ? "dark" : "normal"}`, ...hc(x, t.prefix)], t.scope);
    if (t.utilities) {
      const C = [], x = [], T = new Set(Object.values(o.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of T) w.startsWith("on-") ? Cn(x, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${y}`], t.scope) : (Cn(C, `.${A}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${y}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${y}`], t.scope), Cn(x, `.${A}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${y}`], t.scope), Cn(x, `.${A}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? g.push(`@layer background {
`, ...C.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...x.map((w) => `  ${w}`), `}
`) : g.push(...C, ...x);
    }
    let S = g.map((C, x) => x === 0 ? C : `    ${C}`).join("");
    return t.layers && (S = `@layer vuetify.theme {
` + g.map((C) => `  ${C}`).join("") + `
}`), S;
  }), c = F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${s.value}`), f = F(() => Object.keys(o.value));
  if (Qf) {
    let y = function() {
      i.value = g.matches ? "dark" : "light";
    };
    const g = window.matchMedia("(prefers-color-scheme: dark)");
    y(), g.addEventListener("change", y, { passive: true }), _u() && ct(() => {
      g.removeEventListener("change", y);
    });
  }
  function d(g) {
    if (t.isDisabled) return;
    const y = g._context.provides.usehead;
    if (y) {
      let A = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (y.push) {
        const S = y.push(A);
        Oe && te(u, () => {
          S.patch(A);
        });
      } else Oe ? (y.addHeadObjs(F(A)), on(() => y.updateDOM())) : y.addHeadObjs(A());
    } else {
      let A = function() {
        Sp(t.stylesheetId, t.cspNonce, u.value);
      };
      Oe ? te(u, A, { immediate: true }) : A();
    }
  }
  function h(g) {
    g !== "system" && !f.value.includes(g) || (s.value = g);
  }
  function b() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    const y = g.indexOf(s.value), A = y === -1 ? 0 : (y + 1) % g.length;
    h(g[A]);
  }
  function m() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    b(g);
  }
  const _ = new Proxy(s, { get(g, y) {
    return Reflect.get(g, y);
  }, set(g, y, A) {
    return y === "value" && Jf(`theme.global.name.value = ${A}`, `theme.change('${A}')`), Reflect.set(g, y, A);
  } });
  return { install: d, change: h, cycle: b, toggle: m, isDisabled: t.isDisabled, isSystem: l, name: s, themes: r, current: a, computedThemes: o, prefix: t.prefix, themeClasses: c, styles: u, global: { name: _, current: a } };
}
function Yt(e) {
  Ue("provideTheme");
  const t = Me(oi, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = F(() => e.theme ?? t.name.value), s = { ...t, name: n, current: F(() => t.themes.value[n.value]), themeClasses: F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return qe(oi, s), s;
}
function Ap() {
  Ue("useTheme");
  const e = Me(oi, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Ca(e) {
  return ba(() => {
    const { class: t, style: n } = Ep(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function ai(e) {
  const { colorClasses: t, colorStyles: n } = Ca(() => ({ text: rt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Ss(e) {
  const { colorClasses: t, colorStyles: n } = Ca(() => ({ background: rt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function Lp(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Ep(e) {
  const t = Lp(rt(e)), n = [], r = {};
  if (t.background) if (xo(t.background)) {
    if (r.backgroundColor = t.background, !t.text && q1(t.background)) {
      const i = Gt(t.background);
      if (i.a == null || i.a === 1) {
        const s = md(i);
        r.color = s, r.caretColor = s;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (xo(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: r };
}
const Mp = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function xa(e, t) {
  return P(ye, null, [e && P("span", { key: "overlay", class: Ee(`${t}__overlay`) }, null), P("span", { key: "underlay", class: Ee(`${t}__underlay`) }, null)]);
}
const Ci = J({ color: String, variant: { type: String, default: "elevated", validator: (e) => Mp.includes(e) } }, "variant");
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = F(() => {
    const { variant: s } = rt(e);
    return `${t}--variant-${s}`;
  }), { colorClasses: r, colorStyles: i } = Ca(() => {
    const { variant: s, color: o } = rt(e);
    return { [["elevated", "flat"].includes(s) ? "background" : "text"]: o };
  });
  return { colorClasses: r, colorStyles: i, variantClasses: n };
}
const vd = J({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...wr(), ...Ge(), ...bi(), ..._i(), ...Hn(), ..._t(), ...Vt(), ...Ci() }, "VBtnGroup"), mc = Ae()({ name: "VBtnGroup", props: vd(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = Yt(e), { densityClasses: i } = wi(e), { borderClasses: s } = _r(e), { elevationClasses: o } = Si(e), { roundedClasses: a } = Nn(e);
  _s({ VBtn: { height: F(() => e.direction === "horizontal" ? "auto" : null), baseColor: F(() => e.baseColor), color: F(() => e.color), density: F(() => e.density), flat: true, variant: F(() => e.variant) } }), Fe(() => k(e.tag, { class: Ee(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, r.value, s.value, i.value, o.value, a.value, e.class]), style: Re(e.style) }, n));
} });
function xi(e, t) {
  let n;
  function r() {
    n = Yr(), n.run(() => t.length ? t(() => {
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
    const d = i(f), h = ee(u.value ? e[t] : o.value);
    h === d || r(h) === f || (o.value = d, s == null ? void 0 : s.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : o.value }), c;
}
const kp = J({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Tp = J({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Pp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const r = Ue("useGroupItem");
  if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const i = gr();
  qe(Symbol.for(`${t.description}:id`), i);
  const s = Me(t, null);
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
  l(), Et(() => u());
  const c = V(() => s.isSelected(i)), f = V(() => s.items.value[0].id === i), d = V(() => s.items.value[s.items.value.length - 1].id === i), h = V(() => c.value && [s.selectedClass.value, e.selectedClass]);
  return te(c, (b) => {
    r.emit("group:selected", { value: b });
  }, { flush: "sync" }), { id: i, isSelected: c, isFirst: f, isLast: d, toggle: () => s.select(i, !c.value), select: (b) => s.select(i, b), selectedClass: h, value: o, disabled: a, group: s, register: l, unregister: u };
}
function Ip(e, t) {
  let n = false;
  const r = Ye([]), i = Zt(e, "modelValue", [], (d) => d === void 0 ? [] : pd(r, d === null ? [null] : ya(d)), (d) => {
    const h = Op(r, d);
    return e.multiple ? h : h[0];
  }), s = Ue("useGroup");
  function o(d, h) {
    const b = d, m = Symbol.for(`${t.description}:id`), g = Un(m, s == null ? void 0 : s.vnode).indexOf(h);
    ue(b.value) === void 0 && (b.value = g, b.useIndexAsValue = true), g > -1 ? r.splice(g, 0, b) : r.push(b);
  }
  function a(d) {
    if (n) return;
    l();
    const h = r.findIndex((b) => b.id === d);
    r.splice(h, 1);
  }
  function l() {
    const d = r.find((h) => !h.disabled);
    d && e.mandatory === "force" && !i.value.length && (i.value = [d.id]);
  }
  Lt(() => {
    l();
  }), Et(() => {
    n = true;
  }), ia(() => {
    for (let d = 0; d < r.length; d++) r[d].useIndexAsValue && (r[d].value = d);
  });
  function u(d, h) {
    const b = r.find((m) => m.id === d);
    if (!(h && (b == null ? void 0 : b.disabled))) if (e.multiple) {
      const m = i.value.slice(), _ = m.findIndex((y) => y === d), g = ~_;
      if (h = h ?? !g, g && e.mandatory && m.length <= 1 || !g && e.max != null && m.length + 1 > e.max) return;
      _ < 0 && h ? m.push(d) : _ >= 0 && !h && m.splice(_, 1), i.value = m;
    } else {
      const m = i.value.includes(d);
      if (e.mandatory && m || !m && !h) return;
      i.value = h ?? !m ? [d] : [];
    }
  }
  function c(d) {
    if (e.multiple, i.value.length) {
      const h = i.value[0], b = r.findIndex((g) => g.id === h);
      let m = (b + d) % r.length, _ = r[m];
      for (; _.disabled && m !== b; ) m = (m + d) % r.length, _ = r[m];
      if (_.disabled) return;
      i.value = [r[m].id];
    } else {
      const h = r.find((b) => !b.disabled);
      h && (i.value = [h.id]);
    }
  }
  const f = { register: o, unregister: a, selected: i, select: u, disabled: F(() => e.disabled), prev: () => c(r.length - 1), next: () => c(1), isSelected: (d) => i.value.includes(d), selectedClass: F(() => e.selectedClass), items: F(() => r), getItemIndex: (d) => Rp(r, d) };
  return qe(t, f), f;
}
function Rp(e, t) {
  const n = pd(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function pd(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.find((o) => tr(r, o.value)), s = e[r];
    (i == null ? void 0 : i.value) !== void 0 ? n.push(i.id) : (s == null ? void 0 : s.useIndexAsValue) && n.push(s.id);
  }), n;
}
function Op(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.findIndex((s) => s.id === r);
    if (~i) {
      const s = e[i];
      n.push(s.value !== void 0 ? s.value : i);
    }
  }), n;
}
const yd = Symbol.for("vuetify:v-btn-toggle"), Vp = J({ ...vd(), ...kp() }, "VBtnToggle"), Dp = Ae()({ name: "VBtnToggle", props: Vp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: r, next: i, prev: s, select: o, selected: a } = Ip(e, yd);
  return Fe(() => {
    const l = mc.filterProps(e);
    return k(mc, Te({ class: ["v-btn-toggle", e.class] }, l, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: r, next: i, prev: s, select: o, selected: a })];
    } });
  }), { next: i, prev: s, select: o };
} }), Hp = J({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Tt = Ae(false)({ name: "VDefaultsProvider", props: Hp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: r, disabled: i, reset: s, root: o, scoped: a } = Fu(e);
  return _s(r, { reset: s, root: o, scoped: a, disabled: i }), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), yt = [String, Function, Object, Array], Lo = Symbol.for("vuetify:icons"), Cs = J({ icon: { type: yt }, tag: { type: [String, Object, Function], required: true } }, "icon"), gc = Ae()({ name: "VComponentIcon", props: Cs(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const r = e.icon;
    return k(e.tag, null, { default: () => {
      var _a2;
      return [e.icon ? k(r, null, null) : (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  };
} }), La = br({ name: "VSvgIcon", inheritAttrs: false, props: Cs(), setup(e, t) {
  let { attrs: n } = t;
  return () => k(e.tag, Te(n, { style: null }), { default: () => [P("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? P("path", { d: r[0], "fill-opacity": r[1] }, null) : P("path", { d: r }, null)) : P("path", { d: e.icon }, null)])] });
} });
br({ name: "VLigatureIcon", props: Cs(), setup(e) {
  return () => k(e.tag, null, { default: () => [e.icon] });
} });
const bd = br({ name: "VClassIcon", props: Cs(), setup(e) {
  return () => k(e.tag, { class: Ee(e.icon) }, null);
} }), Np = (e) => {
  const t = Me(Lo);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: V(() => {
    var _a2;
    const r = rt(e);
    if (!r) return { component: gc };
    let i = r;
    if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (_a2 = t.aliases) == null ? void 0 : _a2[i.slice(1)])), Array.isArray(i)) return { component: La, icon: i };
    if (typeof i != "string") return { component: gc, icon: i };
    const s = Object.keys(t.sets).find((l) => typeof i == "string" && i.startsWith(`${l}:`)), o = s ? i.slice(s.length + 1) : i;
    return { component: t.sets[s ?? t.defaultSet].component, icon: o };
  }) };
}, Fp = ["x-small", "small", "default", "large", "x-large"], xs = J({ size: { type: [String, Number], default: "default" } }, "size");
function As(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return ba(() => {
    const n = e.size;
    let r, i;
    return qi(Fp, n) ? r = `${t}--size-${n}` : n && (i = { width: ve(n), height: ve(n) }), { sizeClasses: r, sizeStyles: i };
  });
}
const $p = J({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: yt, opacity: [String, Number], ...Ge(), ...xs(), ..._t({ tag: "i" }), ...Vt() }, "VIcon"), it = Ae()({ name: "VIcon", props: $p(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const i = ce(), { themeClasses: s } = Ap(), { iconData: o } = Np(() => i.value || e.icon), { sizeClasses: a } = As(e), { textColorClasses: l, textColorStyles: u } = ai(() => e.color);
  return Fe(() => {
    var _a2, _b2;
    const c = (_a2 = r.default) == null ? void 0 : _a2.call(r);
    c && (i.value = (_b2 = id(c).filter((d) => d.type === gi && d.children && typeof d.children == "string")[0]) == null ? void 0 : _b2.children);
    const f = !!(n.onClick || n.onClickOnce);
    return k(o.value.component, { tag: e.tag, icon: o.value.icon, class: Ee(["v-icon", "notranslate", s.value, a.value, l.value, { "v-icon--clickable": f, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: Re([{ "--v-icon-opacity": e.opacity }, a.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: f ? "button" : void 0, "aria-hidden": !f, tabindex: f ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function Bp(e, t) {
  const n = q(), r = ce(false);
  if (pa) {
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
function wd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = So(), r = q();
  if (Oe) {
    const i = new ResizeObserver((s) => {
      s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    Et(() => {
      i.disconnect();
    }), te(() => n.el, (s, o) => {
      o && (i.unobserve(o), r.value = void 0), s && i.observe(s);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: nr(r) };
}
const jp = J({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function zp(e) {
  const n = F(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = ce(e.reveal ? "initial" : "disabled");
  return Lt(async () => {
    e.reveal && (r.value = "initial", await new Promise((i) => requestAnimationFrame(i)), r.value = "pending", await new Promise((i) => setTimeout(i, n.value)), r.value = "done");
  }), { duration: n, state: r };
}
const Wp = J({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...Ge(), ...jp(), ...xs(), ..._t({ tag: "div" }), ...Vt() }, "VProgressCircular"), Gp = Ae()({ name: "VProgressCircular", props: Wp(), setup(e, t) {
  let { slots: n } = t;
  const r = 20, i = 2 * Math.PI * r, s = q(), { themeClasses: o } = Yt(e), { sizeClasses: a, sizeStyles: l } = As(e), { textColorClasses: u, textColorStyles: c } = ai(() => e.color), { textColorClasses: f, textColorStyles: d } = ai(() => e.bgColor), { intersectionRef: h, isIntersecting: b } = Bp(), { resizeRef: m, contentRect: _ } = wd(), { state: g, duration: y } = zp(e), A = F(() => g.value === "initial" ? 0 : ii(parseFloat(e.modelValue), 0, 100)), S = F(() => Number(e.width)), C = F(() => l.value ? Number(e.size) : _.value ? _.value.width : Math.max(S.value, 32)), x = F(() => r / (1 - S.value / C.value) * 2), T = F(() => S.value / C.value * x.value), w = F(() => {
    const I = (100 - A.value) / 100 * i;
    return e.rounded && A.value > 0 && A.value < 100 ? ve(Math.min(i - 0.01, I + T.value)) : ve(I);
  }), E = V(() => {
    const I = Number(e.rotate);
    return e.rounded ? I + T.value / 2 / i * 360 : I;
  });
  return on(() => {
    h.value = s.value, m.value = s.value;
  }), Fe(() => k(e.tag, { ref: s, class: Ee(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": b.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Ki()), "v-progress-circular--revealing": ["initial", "pending"].includes(g.value) }, o.value, a.value, u.value, e.class]), style: Re([l.value, c.value, { "--progress-reveal-duration": `${y.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : A.value }, { default: () => [P("svg", { style: { transform: `rotate(calc(-90deg + ${E.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${x.value} ${x.value}` }, [P("circle", { class: Ee(["v-progress-circular__underlay", f.value]), style: Re(d.value), fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": 0 }, null), P("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && P("div", { class: "v-progress-circular__content" }, [n.default({ value: A.value })])] })), {};
} }), Sr = J({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Cr(e) {
  return { dimensionStyles: V(() => {
    const n = {}, r = ve(e.height), i = ve(e.maxHeight), s = ve(e.maxWidth), o = ve(e.minHeight), a = ve(e.minWidth), l = ve(e.width);
    return r != null && (n.height = r), i != null && (n.maxHeight = i), s != null && (n.maxWidth = s), o != null && (n.minHeight = o), a != null && (n.minWidth = a), l != null && (n.width = l), n;
  }) };
}
const Up = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, vc = "$vuetify.", pc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), _d = (e, t, n) => function(r) {
  for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
  if (!r.startsWith(vc)) return pc(r, s);
  const a = r.replace(vc, ""), l = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = wo(l, a, null);
  return c || (`${r}${e.value}`, c = wo(u, a, null)), c || (c = r), typeof c != "string" && (c = r), pc(c, s);
};
function Ea(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function Sd(e, t) {
  return Ea(e, t)(0.1).includes(",") ? "," : ".";
}
function Ks(e, t, n) {
  const r = Zt(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, te(n, (i) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function Cd(e) {
  return (t) => {
    const n = Ks(t, "locale", e.current), r = Ks(t, "fallback", e.fallback), i = Ks(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: r, messages: i, decimalSeparator: F(() => Sd(n, r)), t: _d(n, r, i), n: Ea(n, r), provide: Cd({ current: n, fallback: r, messages: i }) };
  };
}
function Zp(e) {
  const t = ce((e == null ? void 0 : e.locale) ?? "en"), n = ce((e == null ? void 0 : e.fallback) ?? "en"), r = q({ en: Up, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: r, decimalSeparator: F(() => (e == null ? void 0 : e.decimalSeparator) ?? Sd(t, n)), t: _d(t, n, r), n: Ea(t, n), provide: Cd({ current: t, fallback: n, messages: r }) };
}
const Eo = Symbol.for("vuetify:locale");
function Yp(e) {
  return e.name != null;
}
function Kp(e) {
  const t = (e == null ? void 0 : e.adapter) && Yp(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Zp(e), n = Xp(t, e);
  return { ...t, ...n };
}
function qp() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function Xp(e, t) {
  const n = q((t == null ? void 0 : t.rtl) ?? qp()), r = V(() => n.value[e.current.value] ?? false);
  return { isRtl: r, rtl: n, rtlClasses: F(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`) };
}
function xr() {
  const e = Me(Eo);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const yc = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, xd = J({ location: String }, "location");
function Ad(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: r } = xr();
  return { locationStyles: V(() => {
    if (!e.location) return {};
    const { side: s, align: o } = Co(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
    function a(u) {
      return n ? n(u) : 0;
    }
    const l = {};
    return s !== "center" && (t ? l[yc[s]] = `calc(100% - ${a(s)}px)` : l[s] = 0), o !== "center" ? t ? l[yc[o]] = `calc(100% - ${a(o)}px)` : l[o] = 0 : (s === "center" ? l.top = l.left = "50%" : l[{ top: "left", bottom: "left", left: "top", right: "top" }[s]] = "50%", l.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[s]), l;
  }) };
}
const Jp = J({ loading: [Boolean, String] }, "loader");
function Qp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { loaderClasses: F(() => ({ [`${t}--loading`]: e.loading })) };
}
const ey = ["static", "relative", "fixed", "absolute", "sticky"], ty = J({ position: { type: String, validator: (e) => ey.includes(e) } }, "position");
function ny(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { positionClasses: F(() => e.position ? `${t}--${e.position}` : void 0) };
}
function ry() {
  const e = Ue("useRoute");
  return V(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function iy() {
  var _a2, _b2;
  return (_b2 = (_a2 = Ue("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function Ld(e, t) {
  const n = Im("RouterLink"), r = F(() => !!(e.href || e.to)), i = V(() => (r == null ? void 0 : r.value) || Kl(t, "click") || Kl(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = F(() => e.href);
    return { isLink: r, isRouterLink: F(() => false), isClickable: i, href: f, linkProps: Ye({ href: f }), route: F(() => {
    }), navigate: F(() => {
    }) };
  }
  const s = n.useLink({ to: F(() => e.to || ""), replace: F(() => e.replace) }), o = V(() => e.to ? s : void 0), a = ry(), l = V(() => {
    var _a2, _b2, _c2;
    return o.value ? e.exact ? a.value ? ((_a2 = o.value.isExactActive) == null ? void 0 : _a2.value) && tr(o.value.route.value.query, a.value.query) : ((_b2 = o.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = o.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
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
  }), href: u, linkProps: Ye({ href: u, "aria-current": F(() => l.value ? "page" : void 0), "aria-disabled": F(() => e.disabled && r.value ? "true" : void 0), tabindex: F(() => e.disabled && r.value ? "-1" : void 0) }) };
}
const Ed = J({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let qs = false;
function sy(e, t) {
  let n = false, r, i;
  Oe && (e == null ? void 0 : e.beforeEach) && (ht(() => {
    window.addEventListener("popstate", s), r = e.beforeEach((o, a, l) => {
      qs ? n ? t(l) : l() : setTimeout(() => n ? t(l) : l()), qs = true;
    }), i = e == null ? void 0 : e.afterEach(() => {
      qs = false;
    });
  }), ct(() => {
    window.removeEventListener("popstate", s), r == null ? void 0 : r(), i == null ? void 0 : i();
  }));
  function s(o) {
    var _a2;
    ((_a2 = o.state) == null ? void 0 : _a2.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function oy(e, t) {
  te(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && ht(() => {
      t(n);
    });
  }, { immediate: true });
}
const Mo = Symbol("rippleStop"), ay = 80;
function bc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ko(e) {
  return e.constructor.name === "TouchEvent";
}
function Md(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ly = function(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!Md(e)) {
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
  const { radius: s, scale: o, x: a, y: l, centerX: u, centerY: c } = ly(e, t, n), f = `${s * 2}px`;
  i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
  const d = window.getComputedStyle(t);
  d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), bc(i, `translate(${a}, ${l}) scale3d(${o},${o},${o})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), bc(i, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function kd(e) {
  return typeof e > "u" || !!e;
}
function li(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Mo])) {
    if (e[Mo] = true, ko(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Md(e), n._ripple.class && (t.class = n._ripple.class), ko(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Qi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a2;
        ((_a2 = n == null ? void 0 : n._ripple) == null ? void 0 : _a2.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, ay);
    } else Qi.show(e, n, t);
  }
}
function es(e) {
  e[Mo] = true;
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
function Td(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let ci = false;
function cy(e, t) {
  !ci && t.includes(e.key) && (ci = true, li(e));
}
function Pd(e) {
  ci = false, gt(e);
}
function Id(e) {
  ci && (ci = false, gt(e));
}
function Rd(e, t, n) {
  const { value: r, modifiers: i } = t, s = kd(r);
  s || Qi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = i.center, e._ripple.circle = i.circle;
  const o = _o(r) ? r : {};
  o.class && (e._ripple.class = o.class);
  const a = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (l) => cy(l, a), s && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", es, { passive: true }), e.addEventListener("mousedown", es);
      return;
    }
    e.addEventListener("touchstart", li, { passive: true }), e.addEventListener("touchend", gt, { passive: true }), e.addEventListener("touchmove", Td, { passive: true }), e.addEventListener("touchcancel", gt), e.addEventListener("mousedown", li), e.addEventListener("mouseup", gt), e.addEventListener("mouseleave", gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Pd), e.addEventListener("blur", Id), e.addEventListener("dragstart", gt, { passive: true });
  } else !s && n && Od(e);
}
function Od(e) {
  var _a2;
  e.removeEventListener("touchstart", es), e.removeEventListener("mousedown", es), e.removeEventListener("touchstart", li), e.removeEventListener("touchend", gt), e.removeEventListener("touchmove", Td), e.removeEventListener("touchcancel", gt), e.removeEventListener("mousedown", li), e.removeEventListener("mouseup", gt), e.removeEventListener("mouseleave", gt), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Pd), e.removeEventListener("blur", Id), e.removeEventListener("dragstart", gt);
}
function uy(e, t) {
  Rd(e, t, false);
}
function fy(e) {
  Od(e), delete e._ripple;
}
function dy(e, t) {
  if (t.value === t.oldValue) return;
  const n = kd(t.oldValue);
  Rd(e, t, n);
}
const To = { mounted: uy, unmounted: fy, updated: dy }, hy = J({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: yd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: yt, appendIcon: yt, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...wr(), ...Ge(), ...bi(), ...Sr(), ..._i(), ...Tp(), ...Jp(), ...xd(), ...ty(), ...Hn(), ...Ed(), ...xs(), ..._t({ tag: "button" }), ...Vt(), ...Ci({ variant: "elevated" }) }, "VBtn"), Wr = Ae()({ name: "VBtn", props: hy(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = Yt(e), { borderClasses: s } = _r(e), { densityClasses: o } = wi(e), { dimensionStyles: a } = Cr(e), { elevationClasses: l } = Si(e), { loaderClasses: u } = Qp(e), { locationStyles: c } = Ad(e), { positionClasses: f } = ny(e), { roundedClasses: d } = Nn(e), { sizeClasses: h, sizeStyles: b } = As(e), m = Pp(e, e.symbol, false), _ = Ld(e, n), g = V(() => {
    var _a2;
    return e.active !== void 0 ? e.active : _.isRouterLink.value ? (_a2 = _.isActive) == null ? void 0 : _a2.value : m == null ? void 0 : m.isSelected.value;
  }), y = F(() => g.value ? e.activeColor ?? e.color : e.color), A = V(() => {
    var _a2, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!_.isLink.value || ((_a2 = _.isActive) == null ? void 0 : _a2.value)) || !m || ((_b2 = _.isActive) == null ? void 0 : _b2.value) ? y.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: S, colorStyles: C, variantClasses: x } = Aa(A), T = V(() => (m == null ? void 0 : m.disabled.value) || e.disabled), w = F(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), E = V(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function I($) {
    var _a2, _b2;
    T.value || _.isLink.value && ($.metaKey || $.ctrlKey || $.shiftKey || $.button !== 0 || n.target === "_blank") || (_.isRouterLink.value ? (_b2 = (_a2 = _.navigate).value) == null ? void 0 : _b2.call(_a2, $) : m == null ? void 0 : m.toggle());
  }
  return oy(_, m == null ? void 0 : m.select), Fe(() => {
    const $ = _.isLink.value ? "a" : e.tag, R = !!(e.prependIcon || r.prepend), B = !!(e.appendIcon || r.append), X = !!(e.icon && e.icon !== true);
    return ir(k($, Te(_.linkProps, { type: $ === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": g.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], i.value, s.value, S.value, o.value, l.value, u.value, f.value, d.value, h.value, x.value, e.class], style: [C.value, a.value, c.value, b.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: T.value && $ !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: I, value: E.value }), { default: () => {
      var _a2;
      return [xa(true, "v-btn"), !e.icon && R && P("span", { key: "prepend", class: "v-btn__prepend" }, [r.prepend ? k(Tt, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, r.prepend) : k(it, { key: "prepend-icon", icon: e.prependIcon }, null)]), P("span", { class: "v-btn__content", "data-no-activator": "" }, [!r.default && X ? k(it, { key: "content-icon", icon: e.icon }, null) : k(Tt, { key: "content-defaults", disabled: !X, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = r.default) == null ? void 0 : _a3.call(r)) ?? be(e.text)];
      } })]), !e.icon && B && P("span", { key: "append", class: "v-btn__append" }, [r.append ? k(Tt, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, r.append) : k(it, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && P("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = r.loader) == null ? void 0 : _a2.call(r)) ?? k(Gp, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[To, !T.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), my = ["dotted", "dashed", "solid", "double"], gy = J({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => my.includes(e) }, ...Ge(), ...Vt() }, "VDivider"), vy = Ae()({ name: "VDivider", props: gy(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = Yt(e), { textColorClasses: s, textColorStyles: o } = ai(() => e.color), a = V(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), l = F(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return Fe(() => {
    const u = P("hr", { class: Ee([{ "v-divider": true, "v-divider--gradient": e.gradient && !r.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, i.value, s.value, e.class]), style: Re([a.value, o.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return r.default ? P("div", { class: Ee(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, P("div", { class: "v-divider__content", style: Re(l.value) }, [r.default()]), u]) : u;
  }), {};
} }), py = J({ fluid: { type: Boolean, default: false }, ...Ge(), ...Sr(), ..._t() }, "VContainer"), Ai = Ae()({ name: "VContainer", props: py(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: r } = xr(), { dimensionStyles: i } = Cr(e);
  return Fe(() => k(e.tag, { class: Ee(["v-container", { "v-container--fluid": e.fluid }, r.value, e.class]), style: Re([i.value, e.style]) }, n)), {};
} }), Po = Symbol.for("vuetify:display"), wc = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, yy = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wc;
  return pt(wc, e);
};
function _c(e) {
  return Oe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Sc(e) {
  return Oe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Cc(e) {
  const t = Oe && !e ? window.navigator.userAgent : "ssr";
  function n(b) {
    return !!t.match(b);
  }
  const r = n(/android/i), i = n(/iphone|ipad|ipod/i), s = n(/cordova/i), o = n(/electron/i), a = n(/chrome/i), l = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), h = n(/linux/i);
  return { android: r, ios: i, cordova: s, electron: o, chrome: a, edge: l, firefox: u, opera: c, win: f, mac: d, linux: h, touch: S1, ssr: t === "ssr" };
}
function by(e, t) {
  const { thresholds: n, mobileBreakpoint: r } = yy(e), i = ce(Sc(t)), s = ce(Cc(t)), o = Ye({}), a = ce(_c(t));
  function l() {
    i.value = Sc(), a.value = _c();
  }
  function u() {
    l(), s.value = Cc();
  }
  return on(() => {
    const c = a.value < n.sm, f = a.value < n.md && !c, d = a.value < n.lg && !(f || c), h = a.value < n.xl && !(d || f || c), b = a.value < n.xxl && !(h || d || f || c), m = a.value >= n.xxl, _ = c ? "xs" : f ? "sm" : d ? "md" : h ? "lg" : b ? "xl" : "xxl", g = typeof r == "number" ? r : n[r], y = a.value < g;
    o.xs = c, o.sm = f, o.md = d, o.lg = h, o.xl = b, o.xxl = m, o.smAndUp = !c, o.mdAndUp = !(c || f), o.lgAndUp = !(c || f || d), o.xlAndUp = !(c || f || d || h), o.smAndDown = !(d || h || b || m), o.mdAndDown = !(h || b || m), o.lgAndDown = !(b || m), o.xlAndDown = !m, o.name = _, o.height = i.value, o.width = a.value, o.mobile = y, o.mobileBreakpoint = r, o.platform = s.value, o.thresholds = n;
  }), Oe && (window.addEventListener("resize", l, { passive: true }), ct(() => {
    window.removeEventListener("resize", l);
  }, true)), { ...Fu(o), update: u, ssr: !!t };
}
function Vd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = Me(Po);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = V(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: F(() => t ? { [`${t}--mobile`]: r.value } : {}), mobile: r };
}
const wy = J({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function St(e, t, n) {
  return Ae()({ name: e, props: wy({ mode: n, origin: t }), setup(r, i) {
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
      const a = r.group ? ua : lr;
      return vn(a, { name: r.disabled ? "" : e, css: !r.disabled, ...r.group ? void 0 : { mode: r.mode }, ...r.disabled ? {} : o }, s.default);
    };
  } });
}
function Ma(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Ae()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Ki() }, group: Boolean, hideOnLeave: Boolean }, setup(r, i) {
    let { slots: s } = i;
    const o = r.group ? ua : lr;
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
const _y = J({ target: [Object, Array] }, "v-dialog-transition"), Xs = /* @__PURE__ */ new WeakMap(), Sy = Ae()({ name: "VDialogTransition", props: _y(), setup(e, t) {
  let { slots: n } = t;
  const r = { onBeforeEnter(i) {
    i.style.pointerEvents = "none", i.style.visibility = "hidden";
  }, async onEnter(i, s) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), i.style.visibility = "";
    const o = Ac(e.target, i), { x: a, y: l, sx: u, sy: c, speed: f } = o;
    if (Xs.set(i, o), Ki()) An(i, [{ opacity: 0 }, {}], { duration: 125 * f, easing: uc }).finished.then(() => s());
    else {
      const d = An(i, [{ transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * f, easing: uc });
      (_a2 = xc(i)) == null ? void 0 : _a2.forEach((h) => {
        An(h, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * f, easing: Ao });
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
    !Xs.has(i) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Ac(e.target, i) : o = Xs.get(i);
    const { x: a, y: l, sx: u, sy: c, speed: f } = o;
    Ki() ? An(i, [{}, { opacity: 0 }], { duration: 85 * f, easing: fc }).finished.then(() => s()) : (An(i, [{}, { transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * f, easing: fc }).finished.then(() => s()), (_a2 = xc(i)) == null ? void 0 : _a2.forEach((h) => {
      An(h, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * f, easing: Ao });
    }));
  }, onAfterLeave(i) {
    i.style.removeProperty("pointer-events");
  } };
  return () => e.target ? k(lr, Te({ name: "dialog-transition" }, r, { css: false }), n) : k(lr, { name: "dialog-transition" }, n);
} });
function xc(e) {
  var _a2;
  const t = (_a2 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a2.children;
  return t && [...t];
}
function Ac(e, t) {
  const n = ld(e), r = cd(t), [i, s] = getComputedStyle(t).transformOrigin.split(" ").map((g) => parseFloat(g)), [o, a] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let l = n.left + n.width / 2;
  o === "left" || a === "left" ? l -= n.width / 2 : (o === "right" || a === "right") && (l += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || a === "top" ? u -= n.height / 2 : (o === "bottom" || a === "bottom") && (u += n.height / 2);
  const c = n.width / r.width, f = n.height / r.height, d = Math.max(1, c, f), h = c / d || 0, b = f / d || 0, m = r.width * r.height / (window.innerWidth * window.innerHeight), _ = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: l - (i + r.left), y: u - (s + r.top), sx: h, sy: b, speed: _ };
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
const Dd = Ma("expand-transition", ka());
Ma("expand-x-transition", ka("", "x"));
Ma("expand-both-transition", ka("", "both"));
function Cy(e) {
  return { aspectStyles: V(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Hd = J({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...Ge(), ...Sr() }, "VResponsive"), Lc = Ae()({ name: "VResponsive", props: Hd(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: r } = Cy(e), { dimensionStyles: i } = Cr(e);
  return Fe(() => {
    var _a2;
    return P("div", { class: Ee(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: Re([i.value, e.style]) }, [P("div", { class: "v-responsive__sizer", style: Re(r.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && P("div", { class: Ee(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} }), Nd = J({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Zn = (e, t) => {
  let { slots: n } = t;
  const { transition: r, disabled: i, group: s, ...o } = e, { component: a = s ? ua : lr, ...l } = _o(r) ? r : {};
  let u;
  return _o(r) ? u = Te(l, I1({ disabled: i, group: s }), o) : u = Te({ name: i || !r ? "" : r }, o), vn(a, u, n);
};
function Ec(e, t) {
  if (!pa) return;
  const n = t.modifiers || {}, r = t.value, { handler: i, options: s } = typeof r == "object" ? r : { handler: r, options: {} }, o = new IntersectionObserver(function() {
    var _a2;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
    if (!u) return;
    const c = a.some((f) => f.isIntersecting);
    i && (!n.quiet || u.init) && (!n.once || c || u.init) && i(c, a, l), c && n.once ? Io(e, t) : u.init = true;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: o }, o.observe(e);
}
function Io(e, t) {
  var _a2;
  const n = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Mc = { mounted: Ec, unmounted: Io, updated: (e, t) => {
  var _a2;
  ((_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid]) && (Io(e, t), Ec(e, t));
} }, xy = J({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Hd(), ...Ge(), ...Hn(), ...Nd() }, "VImg"), Fd = Ae()({ name: "VImg", directives: { vIntersect: Mc }, props: xy(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: r } = t;
  const { backgroundColorClasses: i, backgroundColorStyles: s } = Ss(() => e.color), { roundedClasses: o } = Nn(e), a = Ue("VImg"), l = ce(""), u = q(), c = ce(e.eager ? "loading" : "idle"), f = ce(), d = ce(), h = V(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), b = V(() => h.value.aspect || f.value / d.value || 0);
  te(() => e.src, () => {
    m(c.value !== "idle");
  }), te(b, (R, B) => {
    !R && B && u.value && S(u.value);
  }), gs(() => m());
  function m(R) {
    if (!(e.eager && R) && !(pa && !R && !e.eager)) {
      if (c.value = "loading", h.value.lazySrc) {
        const B = new Image();
        B.src = h.value.lazySrc, S(B, null);
      }
      h.value.src && ht(() => {
        var _a2;
        n("loadstart", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || h.value.src), setTimeout(() => {
          var _a3;
          if (!a.isUnmounted) if ((_a3 = u.value) == null ? void 0 : _a3.complete) {
            if (u.value.naturalWidth || g(), c.value === "error") return;
            b.value || S(u.value, null), c.value === "loading" && _();
          } else b.value || S(u.value), y();
        });
      });
    }
  }
  function _() {
    var _a2;
    a.isUnmounted || (y(), S(u.value), c.value = "loaded", n("load", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || h.value.src));
  }
  function g() {
    var _a2;
    a.isUnmounted || (c.value = "error", n("error", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || h.value.src));
  }
  function y() {
    const R = u.value;
    R && (l.value = R.currentSrc || R.src);
  }
  let A = -1;
  Et(() => {
    clearTimeout(A);
  });
  function S(R) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const X = () => {
      if (clearTimeout(A), a.isUnmounted) return;
      const { naturalHeight: K, naturalWidth: ne } = R;
      K || ne ? (f.value = ne, d.value = K) : !R.complete && c.value === "loading" && B != null ? A = window.setTimeout(X, B) : (R.currentSrc.endsWith(".svg") || R.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
    };
    X();
  }
  const C = F(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), x = () => {
    var _a2;
    if (!h.value.src || c.value === "idle") return null;
    const R = P("img", { class: Ee(["v-img__img", C.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: h.value.src, srcset: h.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: _, onError: g }, null), B = (_a2 = r.sources) == null ? void 0 : _a2.call(r);
    return k(Zn, { transition: e.transition, appear: true }, { default: () => [ir(B ? P("picture", { class: "v-img__picture" }, [B, R]) : R, [[ca, c.value === "loaded"]])] });
  }, T = () => k(Zn, { transition: e.transition }, { default: () => [h.value.lazySrc && c.value !== "loaded" && P("img", { class: Ee(["v-img__img", "v-img__img--preload", C.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: h.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => r.placeholder ? k(Zn, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !r.error) && P("div", { class: "v-img__placeholder" }, [r.placeholder()])] }) : null, E = () => r.error ? k(Zn, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && P("div", { class: "v-img__error" }, [r.error()])] }) : null, I = () => e.gradient ? P("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, $ = ce(false);
  {
    const R = te(b, (B) => {
      B && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          $.value = true;
        });
      }), R());
    });
  }
  return Fe(() => {
    const R = Lc.filterProps(e);
    return ir(k(Lc, Te({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !$.value, "v-img--fit-content": e.width === "fit-content" }, i.value, o.value, e.class], style: [{ width: ve(e.width === "auto" ? f.value : e.width) }, s.value, e.style] }, R, { aspectRatio: b.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => P(ye, null, [k(x, null, null), k(T, null, null), k(I, null, null), k(w, null, null), k(E, null, null)]), default: r.default }), [[Mc, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: l, image: u, state: c, naturalWidth: f, naturalHeight: d };
} }), Ay = J({ start: Boolean, end: Boolean, icon: yt, image: String, text: String, ...wr(), ...Ge(), ...bi(), ...Hn(), ...xs(), ..._t(), ...Vt(), ...Ci({ variant: "flat" }) }, "VAvatar"), kc = Ae()({ name: "VAvatar", props: Ay(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = Yt(e), { borderClasses: i } = _r(e), { colorClasses: s, colorStyles: o, variantClasses: a } = Aa(e), { densityClasses: l } = wi(e), { roundedClasses: u } = Nn(e), { sizeClasses: c, sizeStyles: f } = As(e);
  return Fe(() => k(e.tag, { class: Ee(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, r.value, i.value, s.value, l.value, u.value, c.value, a.value, e.class]), style: Re([o.value, f.value, e.style]) }, { default: () => [n.default ? k(Tt, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? k(Fd, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? k(it, { key: "icon", icon: e.icon }, null) : e.text, xa(false, "v-avatar")] })), {};
} }), Js = Symbol("Forwarded refs");
function Qs(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function $d(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return e[Js] = n, new Proxy(e, { get(i, s) {
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
        const l = Qs(a.value, s) ?? ("_" in a.value ? Qs((_a2 = a.value._) == null ? void 0 : _a2.setupState, s) : void 0);
        if (l) return l;
      }
      for (const a of n) {
        const l = a.value && a.value[Js];
        if (!l) continue;
        const u = l.slice();
        for (; u.length; ) {
          const c = u.shift(), f = Qs(c.value, s);
          if (f) return f;
          const d = c.value && c.value[Js];
          d && u.push(...d);
        }
      }
    }
  } });
}
const Ly = Symbol.for("vuetify:goto");
function Ey() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: fp };
}
function My(e, t) {
  return { rtl: t.isRtl, options: pt(Ey(), e) };
}
const Ro = Symbol.for("vuetify:list");
function Bd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Me(Ro, { filterable: false, hasPrepend: ce(false), updateHasPrepend: () => null, trackingIndex: ce(-1), navigationStrategy: ce("focus"), uid: "" }), { filterable: n, trackingIndex: r = t.trackingIndex, navigationStrategy: i = t.navigationStrategy, uid: s = t.uid || gr() } = e, o = { filterable: t.filterable || n, hasPrepend: ce(false), updateHasPrepend: (a) => {
    a && (o.hasPrepend.value = a);
  }, trackingIndex: r, navigationStrategy: i, uid: s };
  return qe(Ro, o), t;
}
function jd() {
  return Me(Ro, null);
}
const Ta = (e) => {
  const t = { activate: (n) => {
    let { id: r, value: i, activated: s } = n;
    return r = ee(r), e && !i && s.size === 1 && s.has(r) || (i ? s.add(r) : s.delete(r)), s;
  }, in: (n, r, i) => {
    let s = /* @__PURE__ */ new Set();
    if (n != null) for (const o of ya(n)) s = t.activate({ id: o, value: true, activated: new Set(s), children: r, parents: i });
    return s;
  }, out: (n) => Array.from(n) };
  return t;
}, zd = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { activated: i, id: s, ...o } = r;
    s = ee(s);
    const a = i.has(s) ? /* @__PURE__ */ new Set([s]) : /* @__PURE__ */ new Set();
    return t.activate({ ...o, id: s, activated: a });
  }, in: (r, i, s) => {
    let o = /* @__PURE__ */ new Set();
    if (r != null) {
      const a = ya(r);
      a.length && (o = t.in(a.slice(0, 1), i, s));
    }
    return o;
  }, out: (r, i, s) => t.out(r, i, s) };
}, ky = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Ty = (e) => {
  const t = zd(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Py = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    const s = /* @__PURE__ */ new Set();
    s.add(t);
    let o = i.get(t);
    for (; o != null; ) s.add(o), o = i.get(o);
    return s;
  } else return r.delete(t), r;
}, select: () => null }, Wd = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    let s = i.get(t);
    for (r.add(t); s != null && s !== t; ) r.add(s), s = i.get(s);
    return r;
  } else r.delete(t);
  return r;
}, select: () => null }, Iy = { open: Wd.open, select: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (!n) return r;
  const s = [];
  let o = i.get(t);
  for (; o != null; ) s.push(o), o = i.get(o);
  return new Set(s);
} }, Pa = (e) => {
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
}, Gd = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { selected: i, id: s, ...o } = r;
    s = ee(s);
    const a = i.has(s) ? /* @__PURE__ */ new Map([[s, i.get(s)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...o, id: s, selected: a });
  }, in: (r, i, s, o) => (r == null ? void 0 : r.length) ? t.in(r.slice(0, 1), i, s, o) : /* @__PURE__ */ new Map(), out: (r, i, s) => t.out(r, i, s) };
}, Ry = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Oy = (e) => {
  const t = Gd(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = ee(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Ia = (e) => {
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
      let d = true, h = true;
      for (const b of o.get(f)) {
        const m = ee(b);
        if (!l.has(m) && (s.get(m) !== "on" && (d = false), s.has(m) && s.get(m) !== "off" && (h = false), !d && !h)) break;
      }
      s.set(f, d ? "on" : h ? "off" : "indeterminate"), f = ee(a.get(f));
    }
    return e && !i && Array.from(s.entries()).reduce((h, b) => {
      let [m, _] = b;
      return _ === "on" && h.push(m), h;
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
}, Vy = (e) => {
  const t = Ia(e);
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
}, Dy = (e) => {
  const n = { select: Ia(e).select, in: (r, i, s, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const l of r || []) i.has(l) || (a = n.select({ id: l, value: true, selected: a, children: i, parents: s, disabled: o }));
    return a;
  }, out: (r) => {
    const i = [];
    for (const [s, o] of r.entries()) (o === "on" || o === "indeterminate") && i.push(s);
    return i;
  } };
  return n;
}, fr = Symbol.for("vuetify:nested"), Ud = { id: ce(), root: { itemsRegistration: q("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: q(/* @__PURE__ */ new Map()), parents: q(/* @__PURE__ */ new Map()), disabled: q(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: q(false), scrollToActive: q(false), selectable: q(false), opened: q(/* @__PURE__ */ new Set()), activated: q(/* @__PURE__ */ new Set()), selected: q(/* @__PURE__ */ new Map()), selectedValues: q([]), getPath: () => [] } }, Hy = J({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), Ny = (e, t) => {
  let { items: n, returnObject: r, scrollToActive: i } = t, s = false;
  const o = ce(/* @__PURE__ */ new Map()), a = ce(/* @__PURE__ */ new Map()), l = ce(/* @__PURE__ */ new Set()), u = Zt(e, "opened", e.opened, (C) => new Set(Array.isArray(C) ? C.map((x) => ee(x)) : C), (C) => [...C.values()]), c = V(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return ky(e.mandatory);
      case "single-leaf":
        return Ty(e.mandatory);
      case "independent":
        return Ta(e.mandatory);
      case "single-independent":
      default:
        return zd(e.mandatory);
    }
  }), f = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Oy(e.mandatory);
      case "leaf":
        return Ry(e.mandatory);
      case "independent":
        return Pa(e.mandatory);
      case "single-independent":
        return Gd(e.mandatory);
      case "trunk":
        return Vy(e.mandatory);
      case "branch":
        return Dy(e.mandatory);
      case "classic":
      default:
        return Ia(e.mandatory);
    }
  }), d = V(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Iy;
      case "single":
        return Py;
      case "multiple":
      default:
        return Wd;
    }
  }), h = Zt(e, "activated", e.activated, (C) => c.value.in(C, o.value, a.value), (C) => c.value.out(C, o.value, a.value)), b = Zt(e, "selected", e.selected, (C) => f.value.in(C, o.value, a.value, l.value), (C) => f.value.out(C, o.value, a.value));
  Et(() => {
    s = true;
  });
  function m(C) {
    const x = [];
    let T = ee(C);
    for (; T !== void 0; ) x.unshift(T), T = a.value.get(T);
    return x;
  }
  const _ = Ue("nested"), g = /* @__PURE__ */ new Set(), y = gp(() => {
    ht(() => {
      o.value = new Map(o.value), a.value = new Map(a.value);
    });
  }, 100);
  te(() => [n.value, rt(r)], () => {
    e.itemsRegistration === "props" && A();
  }, { immediate: true });
  function A() {
    const C = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), w = rt(r) ? ($) => ee($.raw) : ($) => $.value, E = [...n.value];
    let I = 0;
    for (; I < E.length; ) {
      const $ = E[I++], R = w($);
      if ($.children) {
        const B = [];
        for (const X of $.children) {
          const K = w(X);
          C.set(K, R), B.push(K), E.push(X);
        }
        x.set(R, B);
      }
      $.props.disabled && T.add(R);
    }
    o.value = x, a.value = C, l.value = T;
  }
  const S = { id: ce(), root: { opened: u, activatable: F(() => e.activatable), scrollToActive: F(() => rt(i)), selectable: F(() => e.selectable), activated: h, selected: b, selectedValues: V(() => {
    const C = [];
    for (const [x, T] of b.value.entries()) T === "on" && C.push(x);
    return C;
  }), itemsRegistration: F(() => e.itemsRegistration), register: (C, x, T, w) => {
    if (g.has(C)) {
      m(C).map(String).join(" -> "), m(x).concat(C).map(String).join(" -> ");
      return;
    } else g.add(C);
    x && C !== x && a.value.set(C, x), T && l.value.add(C), w && o.value.set(C, []), x != null && o.value.set(x, [...o.value.get(x) || [], C]), y();
  }, unregister: (C) => {
    if (s) return;
    g.delete(C), o.value.delete(C), l.value.delete(C);
    const x = a.value.get(C);
    if (x) {
      const T = o.value.get(x) ?? [];
      o.value.set(x, T.filter((w) => w !== C));
    }
    a.value.delete(C), y();
  }, updateDisabled: (C, x) => {
    x ? l.value.add(C) : l.value.delete(C);
  }, open: (C, x, T) => {
    _.emit("click:open", { id: C, value: x, path: m(C), event: T });
    const w = d.value.open({ id: C, value: x, opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    w && (u.value = w);
  }, openOnSelect: (C, x, T) => {
    const w = d.value.select({ id: C, value: x, selected: new Map(b.value), opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    w && (u.value = w);
  }, select: (C, x, T) => {
    _.emit("click:select", { id: C, value: x, path: m(C), event: T });
    const w = f.value.select({ id: C, value: x, selected: new Map(b.value), children: o.value, parents: a.value, disabled: l.value, event: T });
    w && (b.value = w), S.root.openOnSelect(C, x, T);
  }, activate: (C, x, T) => {
    if (!e.activatable) return S.root.select(C, true, T);
    _.emit("click:activate", { id: C, value: x, path: m(C), event: T });
    const w = c.value.activate({ id: C, value: x, activated: new Set(h.value), children: o.value, parents: a.value, event: T });
    if (w.size !== h.value.size) h.value = w;
    else {
      for (const E of w) if (!h.value.has(E)) {
        h.value = w;
        return;
      }
      for (const E of h.value) if (!w.has(E)) {
        h.value = w;
        return;
      }
    }
  }, children: o, parents: a, disabled: l, getPath: m } };
  return qe(fr, S), S.root;
}, Zd = (e, t, n) => {
  const r = Me(fr, Ud), i = Symbol("nested item"), s = V(() => {
    const a = ee(rt(e));
    return a !== void 0 ? a : i;
  }), o = { ...r, id: s, open: (a, l) => r.root.open(s.value, a, l), openOnSelect: (a, l) => r.root.openOnSelect(s.value, a, l), isOpen: V(() => r.root.opened.value.has(s.value)), parent: V(() => r.root.parents.value.get(s.value)), activate: (a, l) => r.root.activate(s.value, a, l), isActivated: V(() => r.root.activated.value.has(s.value)), scrollToActive: r.root.scrollToActive, select: (a, l) => r.root.select(s.value, a, l), isSelected: V(() => r.root.selected.value.get(s.value) === "on"), isIndeterminate: V(() => r.root.selected.value.get(s.value) === "indeterminate"), isLeaf: V(() => !r.root.children.value.get(s.value)), isGroupActivator: r.isGroupActivator };
  return gs(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || ht(() => {
      r.root.register(s.value, r.id.value, rt(t), n);
    });
  }), Et(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || r.root.unregister(s.value);
  }), te(s, (a, l) => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || (r.root.unregister(l), ht(() => {
      r.root.register(a, r.id.value, rt(t), n);
    }));
  }), te(() => rt(t), (a) => {
    r.root.updateDisabled(s.value, a);
  }), n && qe(fr, o), o;
}, Fy = () => {
  const e = Me(fr, Ud);
  qe(fr, { ...e, isGroupActivator: true });
};
function Yd() {
  const e = ce(false);
  return Lt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: F(() => e.value ? void 0 : { transition: "none !important" }), isBooted: nr(e) };
}
const $y = br({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return Fy(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), By = J({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: yt, default: "$collapse" }, disabled: Boolean, expandIcon: { type: yt, default: "$expand" }, rawId: [String, Number], prependIcon: yt, appendIcon: yt, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...Ge(), ..._t() }, "VListGroup"), Tc = Ae()({ name: "VListGroup", props: By(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: r, open: i, id: s } = Zd(() => e.value, () => e.disabled, true), o = V(() => `v-list-group--id-${String(e.rawId ?? s.value)}`), a = jd(), { isBooted: l } = Yd(), u = Me(fr), c = F(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function f(m) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = m.target) == null ? void 0 : _a2.tagName) || i(!r.value, m);
  }
  const d = V(() => ({ onClick: f, class: "v-list-group__header", id: o.value })), h = V(() => r.value ? e.collapseIcon : e.expandIcon), b = V(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && h.value, appendIcon: e.appendIcon || !e.subgroup && h.value, title: e.title, value: e.value } }));
  return Fe(() => k(e.tag, { class: Ee(["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": r.value }, e.class]), style: Re(e.style) }, { default: () => [n.activator && k(Tt, { defaults: b.value }, { default: () => [k($y, null, { default: () => [n.activator({ props: d.value, isOpen: r.value })] })] }), k(Zn, { transition: { component: Dd }, disabled: !l.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? ir(P("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[ca, r.value]]) : r.value && P("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: r };
} }), jy = J({ opacity: [Number, String], ...Ge(), ..._t() }, "VListItemSubtitle"), zy = Ae()({ name: "VListItemSubtitle", props: jy(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => k(e.tag, { class: Ee(["v-list-item-subtitle", e.class]), style: Re([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Wy = lp("v-list-item-title"), Gy = J({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: yt, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: yt, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: jr(), onClickOnce: jr(), ...wr(), ...Ge(), ...bi(), ...Sr(), ..._i(), ...Hn(), ...Ed(), ..._t(), ...Vt(), ...Ci({ variant: "text" }) }, "VListItem"), Oo = Ae()({ name: "VListItem", directives: { vRipple: To }, props: Gy(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const s = Ld(e, n), o = q(), a = V(() => e.value === void 0 ? s.href.value : e.value), { activate: l, isActivated: u, select: c, isOpen: f, isSelected: d, isIndeterminate: h, isGroupActivator: b, root: m, parent: _, openOnSelect: g, scrollToActive: y, id: A } = Zd(a, () => e.disabled, false), S = jd(), C = V(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = s.isActive) == null ? void 0 : _a2.value) || (m.activatable.value ? u.value : d.value));
  }), x = F(() => e.link !== false && s.isLink.value), T = V(() => !!S && (m.selectable.value || m.activatable.value || e.value != null)), w = V(() => !e.disabled && e.link !== false && (e.link || s.isClickable.value || T.value)), E = V(() => S && S.navigationStrategy.value === "track" && e.index !== void 0 && S.trackingIndex.value === e.index), I = V(() => S ? x.value ? "link" : T.value ? "option" : "listitem" : void 0), $ = V(() => {
    if (T.value) return m.activatable.value ? u.value : m.selectable.value ? d.value : C.value;
  }), R = F(() => e.rounded || e.nav), B = F(() => e.color ?? e.activeColor), X = F(() => ({ color: C.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  te(() => {
    var _a2;
    return (_a2 = s.isActive) == null ? void 0 : _a2.value;
  }, (U) => {
    U && K();
  }), te(u, (U) => {
    var _a2;
    !U || !y || ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), te(E, (U) => {
    var _a2;
    U && ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), gs(() => {
    var _a2;
    ((_a2 = s.isActive) == null ? void 0 : _a2.value) && ht(() => K());
  });
  function K() {
    _.value != null && m.open(_.value, true), g(true);
  }
  const { themeClasses: ne } = Yt(e), { borderClasses: ae } = _r(e), { colorClasses: le, colorStyles: Ve, variantClasses: _e } = Aa(X), { densityClasses: se } = wi(e), { dimensionStyles: ge } = Cr(e), { elevationClasses: me } = Si(e), { roundedClasses: je } = Nn(R), Ze = F(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), $e = F(() => e.ripple !== void 0 && e.ripple && (S == null ? void 0 : S.filterable) ? { keys: ["Enter"] } : e.ripple), M = V(() => ({ isActive: C.value, select: c, isOpen: f.value, isSelected: d.value, isIndeterminate: h.value, isDisabled: e.disabled }));
  function j(U) {
    var _a2, _b2, _c2;
    i("click", U), !["INPUT", "TEXTAREA"].includes((_a2 = U.target) == null ? void 0 : _a2.tagName) && w.value && ((_c2 = (_b2 = s.navigate).value) == null ? void 0 : _c2.call(_b2, U), !b && (m.activatable.value ? l(!u.value, U) : (m.selectable.value || e.value != null && !x.value) && c(!d.value, U)));
  }
  function W(U) {
    const pe = U.target;
    ["INPUT", "TEXTAREA"].includes(pe.tagName) || (U.key === "Enter" || U.key === " " && !(S == null ? void 0 : S.filterable)) && (U.preventDefault(), U.stopPropagation(), U.target.dispatchEvent(new MouseEvent("click", U)));
  }
  return Fe(() => {
    const U = x.value ? "a" : e.tag, pe = r.title || e.title != null, v = r.subtitle || e.subtitle != null, L = !!(!!(e.appendAvatar || e.appendIcon) || r.append), H = !!(!!(e.prependAvatar || e.prependIcon) || r.prepend);
    return S == null ? void 0 : S.updateHasPrepend(H), e.activeColor && Jf("active-color", ["color", "base-color"]), ir(k(U, Te(s.linkProps, { ref: o, id: e.index !== void 0 && S ? `v-list-item-${S.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": C.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !H && (S == null ? void 0 : S.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": E.value, [`${e.activeClass}`]: e.activeClass && C.value }, ne.value, ae.value, le.value, se.value, me.value, Ze.value, je.value, _e.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, Ve.value, ge.value, e.style], tabindex: e.tabindex ?? (w.value ? S ? -2 : 0 : void 0), "aria-selected": $.value, role: I.value, onClick: j, onKeydown: w.value && !x.value && W }), { default: () => {
      var _a2;
      return [xa(w.value || C.value, "v-list-item"), H && P("div", { key: "prepend", class: "v-list-item__prepend" }, [r.prepend ? k(Tt, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.prepend) == null ? void 0 : _a3.call(r, M.value)];
      } }) : P(ye, null, [e.prependAvatar && k(kc, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && k(it, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), P("div", { class: "v-list-item__spacer" }, null)]), P("div", { class: "v-list-item__content", "data-no-activator": "" }, [pe && k(Wy, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = r.title) == null ? void 0 : _a3.call(r, { title: e.title })) ?? be(e.title)];
      } }), v && k(zy, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = r.subtitle) == null ? void 0 : _a3.call(r, { subtitle: e.subtitle })) ?? be(e.subtitle)];
      } }), (_a2 = r.default) == null ? void 0 : _a2.call(r, M.value)]), L && P("div", { key: "append", class: "v-list-item__append" }, [r.append ? k(Tt, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.append) == null ? void 0 : _a3.call(r, M.value)];
      } }) : P(ye, null, [e.appendIcon && k(it, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && k(kc, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), P("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[To, w.value && $e.value]]);
  }), { activate: l, isActivated: u, isGroupActivator: b, isSelected: d, list: S, select: c, root: m, id: A, link: s };
} }), Uy = J({ color: String, inset: Boolean, sticky: Boolean, title: String, ...Ge(), ..._t() }, "VListSubheader"), Zy = Ae()({ name: "VListSubheader", props: Uy(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: r, textColorStyles: i } = ai(() => e.color);
  return Fe(() => {
    const s = !!(n.default || e.title);
    return k(e.tag, { class: Ee(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, r.value, e.class]), style: Re([{ textColorStyles: i }, e.style]) }, { default: () => {
      var _a2;
      return [s && P("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), Yy = J({ items: Array, returnObject: Boolean }, "VListChildren"), Kd = Ae()({ name: "VListChildren", props: Yy(), setup(e, t) {
  let { slots: n } = t;
  return Bd(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((r, i) => {
      var _a3, _b3;
      let { children: s, props: o, type: a, raw: l } = r;
      if (a === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: o })) ?? k(vy, o, null);
      if (a === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: o })) ?? k(Zy, o, null);
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
      } : void 0 }, c = Tc.filterProps(o);
      return s ? k(Tc, Te(c, { value: e.returnObject ? l : o == null ? void 0 : o.value, rawId: o == null ? void 0 : o.value }), { activator: (f) => {
        let { props: d } = f;
        const h = Te(o, d, { value: e.returnObject ? l : o.value });
        return n.header ? n.header({ props: h }) : k(Oo, Te(h, { index: i }), u);
      }, default: () => k(Kd, { items: s, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...o, index: i } }) : k(Oo, Te(o, { index: i, value: e.returnObject ? l : o.value }), u);
    }));
  };
} }), Ky = J({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), qy = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Xy(e, t) {
  const n = cr(t) ? t : Tr(t, e.itemTitle), r = cr(t) ? t : Tr(t, e.itemValue, void 0), i = Tr(t, e.itemChildren), s = e.itemProps === true ? Dn(t, ["children"]) : Tr(t, e.itemProps);
  let o = Tr(t, e.itemType, "item");
  qy.has(o) || (o = "item");
  const a = { title: n, value: r, ...s };
  return { type: o, title: a.title, value: a.value, props: a, children: o === "item" && i ? qd(e, i) : void 0, raw: t };
}
function qd(e, t) {
  const n = [];
  for (const r of t) n.push(Xy(e, r));
  return n;
}
function Jy(e) {
  return { items: V(() => qd(e, e.items)) };
}
const Qy = J({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: yt, collapseIcon: yt, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": jr(), "onClick:select": jr(), "onUpdate:opened": jr(), ...Hy({ selectStrategy: "single-leaf", openStrategy: "list" }), ...wr(), ...Ge(), ...bi(), ...Sr(), ..._i(), ...Ky(), ...Hn(), ..._t(), ...Vt(), ...Ci({ variant: "text" }) }, "VList"), e0 = Ae()({ name: "VList", props: Qy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const { items: s } = Jy(e), { themeClasses: o } = Yt(e), { backgroundColorClasses: a, backgroundColorStyles: l } = Ss(() => e.bgColor), { borderClasses: u } = _r(e), { densityClasses: c } = wi(e), { dimensionStyles: f } = Cr(e), { elevationClasses: d } = Si(e), { roundedClasses: h } = Nn(e), { children: b, open: m, parents: _, select: g, getPath: y } = Ny(e, { items: s, returnObject: F(() => e.returnObject), scrollToActive: F(() => e.navigationStrategy === "track") }), A = F(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = F(() => e.activeColor), C = F(() => e.baseColor), x = F(() => e.color), T = F(() => e.selectable || e.activatable), w = Zt(e, "navigationIndex", -1, (se) => se ?? -1), E = gr();
  Bd({ filterable: e.filterable, trackingIndex: w, navigationStrategy: F(() => e.navigationStrategy), uid: E }), te(s, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), _s({ VListGroup: { activeColor: S, baseColor: C, color: x, expandIcon: F(() => e.expandIcon), collapseIcon: F(() => e.collapseIcon) }, VListItem: { activeClass: F(() => e.activeClass), activeColor: S, baseColor: C, color: x, density: F(() => e.density), disabled: F(() => e.disabled), lines: F(() => e.lines), nav: F(() => e.nav), slim: F(() => e.slim), variant: F(() => e.variant), tabindex: F(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const I = ce(false), $ = q();
  function R(se) {
    I.value = true;
  }
  function B(se) {
    I.value = false;
  }
  function X(se) {
    var _a2;
    e.navigationStrategy === "track" ? ~w.value || (w.value = ae("first")) : !I.value && !(se.relatedTarget && ((_a2 = $.value) == null ? void 0 : _a2.contains(se.relatedTarget))) && _e();
  }
  function K() {
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
  function ae(se) {
    const ge = s.value.length;
    if (ge === 0) return -1;
    let me;
    se === "first" ? me = 0 : se === "last" ? me = ge - 1 : (me = w.value + (se === "next" ? 1 : -1), me < 0 && (me = ge - 1), me >= ge && (me = 0));
    const je = me;
    let Ze = 0;
    for (; Ze < ge; ) {
      const $e = s.value[me];
      if ($e && $e.type !== "divider" && $e.type !== "subheader") return me;
      if (me += se === "next" || se === "first" ? 1 : -1, me < 0 && (me = ge - 1), me >= ge && (me = 0), me === je) return -1;
      Ze++;
    }
    return -1;
  }
  function le(se) {
    const ge = se.target;
    if (!$.value || ge.tagName === "INPUT" && ["Home", "End"].includes(se.key) || ge.tagName === "TEXTAREA") return;
    const me = ne(se.key);
    if (me !== null) if (se.preventDefault(), e.navigationStrategy === "track") {
      const je = ae(me);
      je !== -1 && (w.value = je);
    } else _e(me);
  }
  function Ve(se) {
    I.value = true;
  }
  function _e(se) {
    if ($.value) return zr($.value, se);
  }
  return Fe(() => {
    const se = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), ge = T.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return k(e.tag, { ref: $, class: Ee(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, a.value, u.value, c.value, d.value, A.value, h.value, e.class]), style: Re([{ "--v-list-indent": ve(se), "--v-list-group-prepend": se ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, l.value, f.value, e.style]), tabindex: e.disabled ? -1 : 0, role: T.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${E}-${w.value}` : void 0, "aria-multiselectable": ge, onFocusin: R, onFocusout: B, onFocus: X, onBlur: K, onKeydown: le, onMousedown: Ve }, { default: () => [k(Kd, { items: s.value, returnObject: e.returnObject }, r)] });
  }), { open: m, select: g, focus: _e, children: b, parents: _, getPath: y, navigationIndex: w };
} });
function eo(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function t0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Pc(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: r } = e, i = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, s = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return eo({ x: i, y: s }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: r } = e, i = n === "left" ? 0 : n === "right" ? t.width : n, s = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return eo({ x: i, y: s }, t);
  }
  return eo({ x: t.width / 2, y: t.height / 2 }, t);
}
const Xd = { static: i0, connected: o0 }, n0 = J({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Xd }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function r0(e, t) {
  const n = q({}), r = q();
  Oe && xi(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var _a2, _b2;
    te(() => e.locationStrategy, a), ct(() => {
      window.removeEventListener("resize", i), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", s), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", o), r.value = void 0;
    }), window.addEventListener("resize", i, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", s, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", o, { passive: true }), typeof e.locationStrategy == "function" ? r.value = (_a2 = e.locationStrategy(t, e, n)) == null ? void 0 : _a2.updateLocation : r.value = (_b2 = Xd[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function i0() {
}
function s0(e, t) {
  const n = cd(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function o0(e, t, n) {
  (Array.isArray(e.target.value) || mp(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: i, preferredOrigin: s } = ba(() => {
    const g = Co(t.location, e.isRtl.value), y = t.origin === "overlap" ? g : t.origin === "auto" ? Zs(g) : Co(t.origin, e.isRtl.value);
    return g.side === y.side && g.align === Ys(y).align ? { preferredAnchor: Xl(g), preferredOrigin: Xl(y) } : { preferredAnchor: g, preferredOrigin: y };
  }), [o, a, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => V(() => {
    const y = parseFloat(t[g]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = V(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const g = t.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = false, d = -1;
  const h = new M1(4), b = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((y) => {
      y !== d && h.clear(), requestAnimationFrame((A) => {
        d = A;
      });
    }), h.isFull) {
      const y = h.values();
      if (tr(y.at(-1), y.at(-3)) && !tr(y.at(-1), y.at(-2))) return;
    }
    const g = _();
    g && h.push(g.flipped);
  });
  let m = new At({ x: 0, y: 0, width: 0, height: 0 });
  te(e.target, (g, y) => {
    y && !Array.isArray(y) && b.unobserve(y), Array.isArray(g) ? tr(g, y) || _() : g && b.observe(g);
  }, { immediate: true }), te(e.contentEl, (g, y) => {
    y && b.unobserve(y), g && b.observe(g);
  }, { immediate: true }), ct(() => {
    b.disconnect();
  });
  function _() {
    if (f = false, requestAnimationFrame(() => f = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = ld(e.target.value));
    const g = s0(e.contentEl.value, e.isRtl.value), y = Ji(e.contentEl.value), A = Number(t.viewportMargin);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = y.reduce((B, X) => {
      const K = O1(X);
      return B ? new At({ x: Math.max(B.left, K.left), y: Math.max(B.top, K.top), width: Math.min(B.right, K.right) - Math.max(B.left, K.left), height: Math.min(B.bottom, K.bottom) - Math.max(B.top, K.top) }) : K;
    }, void 0);
    t.stickToTarget ? (S.x += Math.min(A, m.x), S.y += Math.min(A, m.y), S.width = Math.max(S.width - A * 2, m.x + m.width - A), S.height = Math.max(S.height - A * 2, m.y + m.height - A)) : (S.x += A, S.y += A, S.width -= A * 2, S.height -= A * 2);
    let C = { anchor: i.value, origin: s.value };
    function x(B) {
      const X = new At(g), K = Pc(B.anchor, m), ne = Pc(B.origin, X);
      let { x: ae, y: le } = t0(K, ne);
      switch (B.anchor.side) {
        case "top":
          le -= c.value[0];
          break;
        case "bottom":
          le += c.value[0];
          break;
        case "left":
          ae -= c.value[0];
          break;
        case "right":
          ae += c.value[0];
          break;
      }
      switch (B.anchor.align) {
        case "top":
          le -= c.value[1];
          break;
        case "bottom":
          le += c.value[1];
          break;
        case "left":
          ae -= c.value[1];
          break;
        case "right":
          ae += c.value[1];
          break;
      }
      return X.x += ae, X.y += le, X.width = Math.min(X.width, l.value), X.height = Math.min(X.height, u.value), { overflows: Ql(X, S), x: ae, y: le };
    }
    let T = 0, w = 0;
    const E = { x: 0, y: 0 }, I = { x: false, y: false };
    let $ = -1;
    for (; !($++ > 10); ) {
      const { x: B, y: X, overflows: K } = x(C);
      T += B, w += X, g.x += B, g.y += X;
      {
        const ne = Jl(C.anchor), ae = K.x.before || K.x.after, le = K.y.before || K.y.after;
        let Ve = false;
        if (["x", "y"].forEach((_e) => {
          if (_e === "x" && ae && !I.x || _e === "y" && le && !I.y) {
            const se = { anchor: { ...C.anchor }, origin: { ...C.origin } }, ge = _e === "x" ? ne === "y" ? Ys : Zs : ne === "y" ? Zs : Ys;
            se.anchor = ge(se.anchor), se.origin = ge(se.origin);
            const { overflows: me } = x(se);
            (me[_e].before <= K[_e].before && me[_e].after <= K[_e].after || me[_e].before + me[_e].after < (K[_e].before + K[_e].after) / 2) && (C = se, Ve = I[_e] = true);
          }
        }), Ve) continue;
      }
      K.x.before && (T += K.x.before, g.x += K.x.before), K.x.after && (T -= K.x.after, g.x -= K.x.after), K.y.before && (w += K.y.before, g.y += K.y.before), K.y.after && (w -= K.y.after, g.y -= K.y.after);
      {
        const ne = Ql(g, S);
        E.x = S.width - ne.x.before - ne.x.after, E.y = S.height - ne.y.before - ne.y.after, T += ne.x.before, g.x += ne.x.before, w += ne.y.before, g.y += ne.y.before;
      }
      break;
    }
    const R = Jl(C.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${C.anchor.side} ${C.anchor.align}`, transformOrigin: `${C.origin.side} ${C.origin.align}`, top: ve(to(w)), left: e.isRtl.value ? void 0 : ve(to(T)), right: e.isRtl.value ? ve(to(-T)) : void 0, minWidth: ve(R === "y" ? Math.min(o.value, m.width) : o.value), maxWidth: ve(Ic(ii(E.x, o.value === 1 / 0 ? 0 : o.value, l.value))), maxHeight: ve(Ic(ii(E.y, a.value === 1 / 0 ? 0 : a.value, u.value))) }), { available: E, contentBox: g, flipped: I };
  }
  return te(() => [i.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => _()), ht(() => {
    const g = _();
    if (!g) return;
    const { available: y, contentBox: A } = g;
    A.height > y.y && requestAnimationFrame(() => {
      _(), requestAnimationFrame(() => {
        _();
      });
    });
  }), { updateLocation: _ };
}
function to(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ic(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Vo = true;
const ts = [];
function a0(e) {
  !Vo || ts.length ? (ts.push(e), Do()) : (Vo = false, e(), Do());
}
let Rc = -1;
function Do() {
  cancelAnimationFrame(Rc), Rc = requestAnimationFrame(() => {
    const e = ts.shift();
    e && e(), ts.length ? Do() : Vo = true;
  });
}
const Jd = { none: null, close: u0, block: f0, reposition: d0 }, l0 = J({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Jd } }, "VOverlay-scroll-strategies");
function c0(e, t) {
  if (!Oe) return;
  let n;
  on(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Yr(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = Jd[e.scrollStrategy]) == null ? void 0 : _a2.call(Jd, t, e, n);
    }));
  }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function u0(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Qd(Ra(e.target.value, e.contentEl.value), t);
}
function f0(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, r = Ra(e.target.value, e.contentEl.value), i = [.../* @__PURE__ */ new Set([...Ji(r, t.contained ? n : void 0), ...Ji(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, o = ((a) => Sa(a) && a)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((a, l) => {
    a.style.setProperty("--v-body-scroll-x", ve(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", ve(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", ve(s)), a.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    i.forEach((a, l) => {
      const u = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -u, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function d0(e, t, n) {
  let r = false, i = -1, s = -1;
  function o(a) {
    a0(() => {
      var _a2, _b2;
      const l = performance.now();
      (_b2 = (_a2 = e.updateLocation).value) == null ? void 0 : _b2.call(_a2, a), r = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      Qd(Ra(e.target.value, e.contentEl.value), (a) => {
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
function Ra(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Qd(e, t) {
  const n = [document, ...Ji(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, { passive: true });
  }), ct(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const Ho = Symbol.for("vuetify:v-menu"), h0 = J({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function m0(e, t) {
  let n = () => {
  };
  function r(o, a) {
    n == null ? void 0 : n();
    const l = o ? e.openDelay : e.closeDelay, u = Math.max((a == null ? void 0 : a.minDelay) ?? 0, Number(l ?? 0));
    return new Promise((c) => {
      n = T1(u, () => {
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
const g0 = J({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...h0() }, "VOverlay-activator");
function v0(e, t) {
  let { isActive: n, isTop: r, contentEl: i } = t;
  const s = Ue("useActivator"), o = q();
  let a = false, l = false, u = true;
  const c = V(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = V(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: d, runCloseDelay: h } = m0(e, (w) => {
    w === (e.openOnHover && a || c.value && l) && !(e.openOnHover && n.value && !r.value) && (n.value !== w && (u = true), n.value = w);
  }), b = q(), m = { onClick: (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (b.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    a = true, o.value = w.currentTarget || w.target, d();
  }, onMouseleave: (w) => {
    a = false, h();
  }, onFocus: (w) => {
    k1(w.target, ":focus-visible") !== false && (l = true, w.stopPropagation(), o.value = w.currentTarget || w.target, d());
  }, onBlur: (w) => {
    l = false, w.stopPropagation(), h({ minDelay: 1 });
  } }, _ = V(() => {
    const w = {};
    return f.value && (w.onClick = m.onClick), e.openOnHover && (w.onMouseenter = m.onMouseenter, w.onMouseleave = m.onMouseleave), c.value && (w.onFocus = m.onFocus, w.onBlur = m.onBlur), w;
  }), g = V(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      a = true, d();
    }, w.onMouseleave = () => {
      a = false, h();
    }), c.value && (w.onFocusin = (E) => {
      E.target.matches(":focus-visible") && (l = true, d());
    }, w.onFocusout = () => {
      l = false, h({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const E = Me(Ho, null);
      w.onClick = () => {
        n.value = false, E == null ? void 0 : E.closeParents();
      };
    }
    return w;
  }), y = V(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (a = true, u = false, d());
    }, w.onMouseleave = () => {
      a = false, h();
    }), w;
  });
  te(r, (w) => {
    var _a2;
    w && (e.openOnHover && !a && (!c.value || !l) || c.value && !l && (!e.openOnHover || !a)) && !((_a2 = i.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), te(n, (w) => {
    w || setTimeout(() => {
      b.value = void 0;
    });
  }, { flush: "post" });
  const A = So();
  on(() => {
    A.value && ht(() => {
      o.value = A.el;
    });
  });
  const S = So(), C = V(() => e.target === "cursor" && b.value ? b.value : S.value ? S.el : eh(e.target, s) || o.value), x = V(() => Array.isArray(C.value) ? void 0 : C.value);
  let T;
  return te(() => !!e.activator, (w) => {
    w && Oe ? (T = Yr(), T.run(() => {
      p0(e, s, { activatorEl: o, activatorEvents: _ });
    })) : T && T.stop();
  }, { flush: "post", immediate: true }), ct(() => {
    T == null ? void 0 : T.stop();
  }), { activatorEl: o, activatorRef: A, target: C, targetEl: x, targetRef: S, activatorEvents: _, contentEvents: g, scrimEvents: y };
}
function p0(e, t, n) {
  let { activatorEl: r, activatorEvents: i } = n;
  te(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = a(u);
      c && o(c);
    }
    l && ht(() => s());
  }, { immediate: true }), te(() => e.activatorProps, () => {
    s();
  }), ct(() => {
    o();
  });
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && V1(l, Te(i.value, u));
  }
  function o() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && D1(l, Te(i.value, u));
  }
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = eh(l, t);
    return r.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, r.value;
  }
}
function eh(e, t) {
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
const y0 = J({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Ni = /* @__PURE__ */ new Map();
let Oc = 0;
function Vc(e) {
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
  const s = er(r).filter((u) => u.tabIndex >= 0);
  if (!s.length) return;
  const o = document.activeElement;
  if (s.length === 1 && s[0].classList.contains("v-list") && s[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const a = s[0], l = s[s.length - 1];
  e.shiftKey && (o === a || a.classList.contains("v-list") && a.contains(o)) && (e.preventDefault(), l.focus()), !e.shiftKey && (o === l || l.classList.contains("v-list") && l.contains(o)) && (e.preventDefault(), a.focus());
}
function b0(e, t) {
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
    const h = d.relatedTarget, b = d.target;
    document.removeEventListener("pointerdown", l), document.removeEventListener("keydown", c), await ht(), n.value && !o && h !== b && i.value && rt(r) && ![document, i.value].includes(b) && !i.value.contains(b) && ((_a2 = er(i.value)[0]) == null ? void 0 : _a2.focus());
  }
  function c(d) {
    if (d.key === "Tab" && (document.removeEventListener("keydown", c), n.value && i.value && d.target && !i.value.contains(d.target))) {
      const h = er(document.documentElement);
      if (d.shiftKey && d.target === h.at(0) || !d.shiftKey && d.target === h.at(-1)) {
        const b = er(i.value);
        b.length > 0 && (d.preventDefault(), b[0].focus());
      }
    }
  }
  const f = F(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Oe && (te(() => e.retainFocus, (d) => {
    d ? Ni.set(s, { isActive: n, contentEl: i }) : Ni.delete(s);
  }, { immediate: true }), te(f, (d) => {
    d ? (document.addEventListener("pointerdown", l), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, { immediate: true }), Oc++ < 1 && document.addEventListener("keydown", Vc)), ct(() => {
    Ni.delete(s), clearTimeout(a), document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Oc < 1 && document.removeEventListener("keydown", Vc);
  });
}
function w0() {
  if (!Oe) return ce(false);
  const { ssr: e } = Vd();
  if (e) {
    const t = ce(false);
    return Lt(() => {
      t.value = true;
    }), t;
  } else return ce(true);
}
const _0 = J({ eager: Boolean }, "lazy");
function S0(e, t) {
  const n = ce(false), r = F(() => n.value || e.eager || t.value);
  te(t, () => n.value = true);
  function i() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: r, onAfterLeave: i };
}
function Oa() {
  const t = Ue("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Dc = Symbol.for("vuetify:stack"), Pr = Ye([]);
function C0(e, t, n) {
  const r = Ue("useStack"), i = !n, s = Me(Dc, void 0), o = Ye({ activeChildren: /* @__PURE__ */ new Set() });
  qe(Dc, o);
  const a = ce(Number(rt(t)));
  xi(e, () => {
    var _a2;
    const c = (_a2 = Pr.at(-1)) == null ? void 0 : _a2[1];
    a.value = c ? c + 10 : Number(rt(t)), i && Pr.push([r.uid, a.value]), s == null ? void 0 : s.activeChildren.add(r.uid), ct(() => {
      if (i) {
        const f = ee(Pr).findIndex((d) => d[0] === r.uid);
        Pr.splice(f, 1);
      }
      s == null ? void 0 : s.activeChildren.delete(r.uid);
    });
  });
  const l = ce(true);
  return i && on(() => {
    var _a2;
    const c = ((_a2 = Pr.at(-1)) == null ? void 0 : _a2[0]) === r.uid;
    setTimeout(() => l.value = c);
  }), { globalTop: nr(l), localTop: F(() => !o.activeChildren.size), stackStyles: F(() => ({ zIndex: a.value })) };
}
function x0(e) {
  return { teleportTarget: V(() => {
    const n = e();
    if (n === true || !Oe) return;
    const r = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (r == null) return;
    let i = [...r.children].find((s) => s.matches(".v-overlay-container"));
    return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
  }) };
}
function A0() {
  return true;
}
function th(e, t, n) {
  if (!e || nh(e, n) === false) return false;
  const r = gd(t);
  if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && r.host === e.target) return false;
  const i = (typeof n.value == "object" && n.value.include || (() => []))();
  return i.push(t), !i.some((s) => s == null ? void 0 : s.contains(e.target));
}
function nh(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || A0)(e);
}
function L0(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && th(e, t, n) && setTimeout(() => {
    nh(e, n) && r && r(e);
  }, 0);
}
function Hc(e, t) {
  const n = gd(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Nc = { mounted(e, t) {
  const n = (i) => L0(i, e, t), r = (i) => {
    e._clickOutside.lastMousedownWasOutside = th(i, e, t);
  };
  Hc(e, (i) => {
    i.addEventListener("click", n, true), i.addEventListener("mousedown", r, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: r };
}, beforeUnmount(e, t) {
  e._clickOutside && (Hc(e, (n) => {
    var _a2;
    if (!n || !((_a2 = e._clickOutside) == null ? void 0 : _a2[t.instance.$.uid])) return;
    const { onClick: r, onMousedown: i } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", r, true), n.removeEventListener("mousedown", i, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function E0(e) {
  const { modelValue: t, color: n, ...r } = e;
  return k(lr, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && P("div", Te({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, r), null)] });
}
const Va = J({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...g0(), ...Ge(), ...Sr(), ..._0(), ...n0(), ...l0(), ...y0(), ...Vt(), ...Nd() }, "VOverlay"), ns = Ae()({ name: "VOverlay", directives: { vClickOutside: Nc }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Dn(Va(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: r, emit: i } = t;
  const s = Ue("VOverlay"), o = q(), a = q(), l = q(), u = Zt(e, "modelValue"), c = V({ get: () => u.value, set: (M) => {
    M && e.disabled || (u.value = M);
  } }), { themeClasses: f } = Yt(e), { rtlClasses: d, isRtl: h } = xr(), { hasContent: b, onAfterLeave: m } = S0(e, c), _ = Ss(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: g, localTop: y, stackStyles: A } = C0(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: S, activatorRef: C, target: x, targetEl: T, targetRef: w, activatorEvents: E, contentEvents: I, scrimEvents: $ } = v0(e, { isActive: c, isTop: y, contentEl: l }), { teleportTarget: R } = x0(() => {
    var _a2, _b2, _c2;
    const M = e.attach || e.contained;
    if (M) return M;
    const j = ((_a2 = S == null ? void 0 : S.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = s.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return j instanceof ShadowRoot ? j : false;
  }), { dimensionStyles: B } = Cr(e), X = w0(), { scopeId: K } = Oa();
  te(() => e.disabled, (M) => {
    M && (c.value = false);
  });
  const { contentStyles: ne, updateLocation: ae } = r0(e, { isRtl: h, contentEl: l, target: x, isActive: c });
  c0(e, { root: o, contentEl: l, targetEl: T, target: x, isActive: c, updateLocation: ae });
  function le(M) {
    i("click:outside", M), e.persistent ? je() : c.value = false;
  }
  function Ve(M) {
    return c.value && y.value && (!e.scrim || M.target === a.value || M instanceof MouseEvent && M.shadowTarget === a.value);
  }
  b0(e, { isActive: c, localTop: y, contentEl: l }), Oe && te(c, (M) => {
    M ? window.addEventListener("keydown", _e) : window.removeEventListener("keydown", _e);
  }, { immediate: true }), Et(() => {
    Oe && window.removeEventListener("keydown", _e);
  });
  function _e(M) {
    var _a2, _b2, _c2;
    M.key === "Escape" && g.value && (((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) || i("keydown", M), e.persistent ? je() : (c.value = false, ((_b2 = l.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = S.value) == null ? void 0 : _c2.focus())));
  }
  function se(M) {
    M.key === "Escape" && !g.value || i("keydown", M);
  }
  const ge = iy();
  xi(() => e.closeOnBack, () => {
    sy(ge, (M) => {
      g.value && c.value ? (M(false), e.persistent ? je() : c.value = false) : M();
    });
  });
  const me = q();
  te(() => c.value && (e.absolute || e.contained) && R.value == null, (M) => {
    if (M) {
      const j = dp(o.value);
      j && j !== document.scrollingElement && (me.value = j.scrollTop);
    }
  });
  function je() {
    e.noClickAnimation || l.value && An(l.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Ao });
  }
  function Ze() {
    i("afterEnter");
  }
  function $e() {
    m(), i("afterLeave");
  }
  return Fe(() => {
    var _a2;
    return P(ye, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: w, props: Te({ ref: C }, E.value, e.activatorProps) }), X.value && b.value && k(_m, { disabled: !R.value, to: R.value }, { default: () => [P("div", Te({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, f.value, d.value, e.class], style: [A.value, { "--v-overlay-opacity": e.opacity, top: ve(me.value) }, e.style], ref: o, onKeydown: se }, K, r), [k(E0, Te({ color: _, modelValue: c.value && !!e.scrim, ref: a }, $.value), null), k(Zn, { appear: true, persisted: true, transition: e.transition, target: x.value, onAfterEnter: Ze, onAfterLeave: $e }, { default: () => {
      var _a3;
      return [ir(P("div", Te({ ref: l, class: ["v-overlay__content", e.contentClass], style: [B.value, ne.value] }, I.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[ca, c.value], [Nc, { handler: le, closeConditional: Ve, include: () => [S.value] }]])];
    } })])] })]);
  }), { activatorEl: S, scrimEl: a, target: x, animateClick: je, contentEl: l, rootEl: o, globalTop: g, localTop: y, updateLocation: ae };
} }), M0 = J({ id: String, submenu: Boolean, ...Dn(Va({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: Sy } }), ["absolute"]) }, "VMenu"), k0 = Ae()({ name: "VMenu", props: M0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Zt(e, "modelValue"), { scopeId: i } = Oa(), { isRtl: s } = xr(), o = gr(), a = F(() => e.id || `v-menu-${o}`), l = q(), u = Me(Ho, null), c = ce(/* @__PURE__ */ new Set());
  qe(Ho, { register() {
    c.value.add(o);
  }, unregister() {
    c.value.delete(o);
  }, closeParents(m) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (m == null || ((_a2 = l.value) == null ? void 0 : _a2.contentEl) && !P1(m, l.value.contentEl)) && (r.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Et(() => u == null ? void 0 : u.unregister()), ra(() => r.value = false), te(r, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function f(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function d(m) {
    var _a2, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !od(er((_a2 = l.value) == null ? void 0 : _a2.contentEl, false), m.shiftKey ? "prev" : "next", (g) => g.tabIndex >= 0) && !e.retainFocus && (r.value = false, (_c2 = (_b2 = l.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (s.value ? "ArrowRight" : "ArrowLeft") && (r.value = false, (_e = (_d2 = l.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function h(m) {
    var _a2;
    if (e.disabled) return;
    const _ = (_a2 = l.value) == null ? void 0 : _a2.contentEl;
    _ && r.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), zr(_, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), zr(_, "prev")) : e.submenu && (m.key === (s.value ? "ArrowRight" : "ArrowLeft") ? r.value = false : m.key === (s.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), zr(_, "first"))) : (e.submenu ? m.key === (s.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (r.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => h(m))));
  }
  const b = V(() => Te({ "aria-haspopup": "menu", "aria-expanded": String(r.value), "aria-controls": a.value, "aria-owns": a.value, onKeydown: h }, e.activatorProps));
  return Fe(() => {
    const m = ns.filterProps(e);
    return k(ns, Te({ ref: l, id: a.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: r.value, "onUpdate:modelValue": (_) => r.value = _, absolute: true, activatorProps: b.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": f, onKeydown: d }, i), { activator: n.activator, default: function() {
      for (var _ = arguments.length, g = new Array(_), y = 0; y < _; y++) g[y] = arguments[y];
      return k(Tt, { root: "VMenu" }, { default: () => {
        var _a2;
        return [(_a2 = n.default) == null ? void 0 : _a2.call(n, ...g)];
      } });
    } });
  }), $d({ id: a, \u03A8openChildren: c }, l);
} }), Dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t) n[r] = i;
  return n;
}, T0 = Xe({ __name: "AppBackground", setup(e) {
  const t = fa("AppBackground"), n = q(null), r = q(null), i = pv(), s = Vn(), o = wv(i.gridInfo, s.worldOffsetDevicePx), a = _v(), l = Sv(o), u = Ev(i.post);
  _1(i);
  function c(S) {
    return { ...S, edge: { ...S.edge } };
  }
  function f(S) {
    return S.map(c);
  }
  const d = vv({ onSetZones: (S) => i.post({ type: "set_zones", zones: f(S) }), onAddZone: (S) => i.post({ type: "add_zone", zone: c(S) }), onUpdateZone: (S) => i.post({ type: "update_zone", zone: c(S) }), onRemoveZone: (S) => i.post({ type: "remove_zone", id: S }), onClearZones: () => i.post({ type: "clear_zones" }) }), h = q(false), b = q(false), m = q({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: _ } = Bf();
  te(_, (S) => {
    i.post({ type: "set_theme", theme: S });
  });
  function g(S) {
    const C = Date.now(), x = m.value;
    return { id: crypto.randomUUID(), x1: S.x1, y1: S.y1, x2: S.x2, y2: S.y2, mode: x.mode, edge: { ...x.edge }, enabled: true, createdAt: C, updatedAt: C };
  }
  l.register("zone", { isEnabled: () => h.value, priority: 1, snapMajor: () => b.value, onCommit(S) {
    d.addZone(g(S));
  } });
  function y(S) {
    if (l.anyToolEnabled() || o.isInteractiveTarget(S.target)) return;
    const C = o.makeSnapshot();
    if (!C) return;
    const x = Vf(S.clientX, S.clientY, C), T = Qg(x, C);
    t.debug("Click \u2192", S.clientX, S.clientY, "\u2192 cell", T.cx, T.cy), i.post({ type: "toggle_cell", cx: T.cx, cy: T.cy, scrollCanvasPx: C.offsetY });
  }
  let A = null;
  return Lt(() => {
    const S = n.value, C = r.value;
    if (!S || !C) return;
    const { offscreen: x, gridPitch: T } = u.initialize(S, C);
    i.init(x, T, _.value), t.debug("Worker spawned, gridPitch", T.toFixed(2)), i.on("ready", (w) => {
      t.info(`${w.backend.toUpperCase()} renderer active`), i.post({ type: "set_theme", theme: _.value }), i.post({ type: "set_zones", zones: f(d.zones.value) });
      const E = s.worldOffsetDevicePx.value;
      i.post({ type: "camera", x: E.x, y: E.y });
    }), i.on("zones_state", (w) => d.syncFromWorker(w.zones)), i.on("zones_error", (w) => t.error("Zone update rejected:", w.message)), i.on("first_frame_painted", () => u.revealCanvas()), i.on("error", (w) => {
      w.phase === "gpu-init" ? t.debug(`GPU unavailable (${w.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${w.phase}]:`, w.message);
    }), kv(i), document.addEventListener("click", y), A = l.attachListeners(), a.start(() => i.post({ type: "frame" }));
  }), vr(() => {
    a.stop(), u.teardown(), document.removeEventListener("click", y), A == null ? void 0 : A(), i.terminate();
  }), (S, C) => (oe(), he(ye, null, [P("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [P("canvas", { ref_key: "canvasRef", ref: r, class: "app-bg" }, null, 512)], 512), ue(l).previewStyle.value ? (oe(), he("div", { key: 0, class: "zone-preview-overlay", style: Re(ue(l).previewStyle.value) }, null, 4)) : or("", true), or("", true)], 64));
} }), P0 = Dt(T0, [["__scopeId", "data-v-e3078bff"]]), I0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, R0 = { component: (e) => vn(bd, { ...e, class: "mdi" }) };
function O0() {
  return { svg: { component: La }, class: { component: bd } };
}
function V0(e) {
  const t = O0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = R0), pt({ defaultSet: n, sets: t, aliases: { ...I0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
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
function D0(e, t, n) {
  var _a2;
  const r = [];
  let i = [];
  const s = rh(e), o = ih(e), a = n ?? ((_a2 = Li(t)) == null ? void 0 : _a2.firstDay) ?? 0, l = (s.getDay() - a + 7) % 7, u = (o.getDay() - a + 7) % 7;
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
function Gr(e, t, n) {
  var _a2;
  let r = (n ?? ((_a2 = Li(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (r = 0);
  const i = new Date(e);
  for (; i.getDay() !== r; ) i.setDate(i.getDate() - 1);
  return i;
}
function H0(e, t) {
  var _a2;
  const n = new Date(e), r = ((((_a2 = Li(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function rh(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function ih(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function N0(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const F0 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function sh(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (F0.test(e)) return N0(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Fc = new Date(2e3, 0, 2);
function $0(e, t, n) {
  var _a2;
  const r = t ?? ((_a2 = Li(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return nd(7).map((i) => {
    const s = new Date(Fc);
    return s.setDate(Fc.getDate() + r + i), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(s);
  });
}
function B0(e, t, n, r) {
  const i = sh(e) ?? /* @__PURE__ */ new Date(), s = r == null ? void 0 : r[t];
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
function j0(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), i = Yl(String(n.getMonth() + 1), 2, "0"), s = Yl(String(n.getDate()), 2, "0");
  return `${r}-${i}-${s}`;
}
function z0(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function W0(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function G0(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function In(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function U0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Z0(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ui(e) {
  return e.getFullYear();
}
function Y0(e) {
  return e.getMonth();
}
function K0(e, t, n, r) {
  const i = Li(t), s = n ?? (i == null ? void 0 : i.firstDay) ?? 0, o = (i == null ? void 0 : i.firstWeekSize) ?? 1;
  return r !== void 0 ? q0(e, t, s, r) : X0(e, t, s, o);
}
function q0(e, t, n, r) {
  const i = (7 + r - n) % 7, s = Gr(e, t, n), o = In(s, 6);
  function a(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let l = ui(s);
  l < ui(o) && a(l + 1) <= i && l++;
  const u = new Date(l, 0, 1), c = a(l), f = c <= i ? In(u, -c) : In(u, 7 - c);
  return 1 + is(Da(s), fi(f), "weeks");
}
function X0(e, t, n, r) {
  const i = Gr(e, t, n), s = In(Gr(e, t, n), 6);
  function o(f) {
    const d = new Date(f, 0, 1);
    return 7 - is(d, Gr(d, t, n), "days");
  }
  let a = ui(i);
  a < ui(s) && o(a + 1) >= r && a++;
  const l = new Date(a, 0, 1), u = o(a), c = u >= r ? In(l, u - 7) : In(l, u);
  return 1 + is(Da(i), fi(c), "weeks");
}
function J0(e) {
  return e.getDate();
}
function Q0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function eb(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function tb(e) {
  return e.getHours();
}
function nb(e) {
  return e.getMinutes();
}
function rb(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function ib(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function sb(e, t) {
  return rs(e, t[0]) && lb(e, t[1]);
}
function ob(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function rs(e, t) {
  return e.getTime() > t.getTime();
}
function ab(e, t) {
  return rs(fi(e), fi(t));
}
function lb(e, t) {
  return e.getTime() < t.getTime();
}
function $c(e, t) {
  return e.getTime() === t.getTime();
}
function cb(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function ub(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function fb(e, t) {
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
function db(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function hb(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function mb(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function gb(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function vb(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function fi(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Da(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class pb {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return sh(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return j0(this, t);
  }
  parseISO(t) {
    return z0(t);
  }
  addMinutes(t, n) {
    return W0(t, n);
  }
  addHours(t, n) {
    return G0(t, n);
  }
  addDays(t, n) {
    return In(t, n);
  }
  addWeeks(t, n) {
    return U0(t, n);
  }
  addMonths(t, n) {
    return Z0(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return D0(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Gr(t, this.locale, r);
  }
  endOfWeek(t) {
    return H0(t, this.locale);
  }
  startOfMonth(t) {
    return rh(t);
  }
  endOfMonth(t) {
    return ih(t);
  }
  format(t, n) {
    return B0(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return $c(t, n);
  }
  isValid(t) {
    return ob(t);
  }
  isWithinRange(t, n) {
    return sb(t, n);
  }
  isAfter(t, n) {
    return rs(t, n);
  }
  isAfterDay(t, n) {
    return ab(t, n);
  }
  isBefore(t, n) {
    return !rs(t, n) && !$c(t, n);
  }
  isSameDay(t, n) {
    return cb(t, n);
  }
  isSameMonth(t, n) {
    return ub(t, n);
  }
  isSameYear(t, n) {
    return fb(t, n);
  }
  setMinutes(t, n) {
    return hb(t, n);
  }
  setHours(t, n) {
    return db(t, n);
  }
  setMonth(t, n) {
    return mb(t, n);
  }
  setDate(t, n) {
    return gb(t, n);
  }
  setYear(t, n) {
    return vb(t, n);
  }
  getDiff(t, n, r) {
    return is(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return $0(this.locale, r, n);
  }
  getYear(t) {
    return ui(t);
  }
  getMonth(t) {
    return Y0(t);
  }
  getWeek(t, n, r) {
    const i = n !== void 0 ? Number(n) : void 0, s = r !== void 0 ? Number(r) : void 0;
    return K0(t, this.locale, i, s);
  }
  getDate(t) {
    return J0(t);
  }
  getNextMonth(t) {
    return Q0(t);
  }
  getPreviousMonth(t) {
    return eb(t);
  }
  getHours(t) {
    return tb(t);
  }
  getMinutes(t) {
    return nb(t);
  }
  startOfDay(t) {
    return fi(t);
  }
  endOfDay(t) {
    return Da(t);
  }
  startOfYear(t) {
    return rb(t);
  }
  endOfYear(t) {
    return ib(t);
  }
}
const yb = Symbol.for("vuetify:date-options"), Bc = Symbol.for("vuetify:date-adapter");
function bb(e, t) {
  const n = pt({ adapter: pb, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: wb(n, t) };
}
function wb(e, t) {
  const n = Ye(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return te(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
const No = Symbol.for("vuetify:layout"), oh = Symbol.for("vuetify:layout-item"), jc = 1e3, _b = J({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), Sb = J({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Cb(e) {
  const t = Me(No);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${gr()}`, r = Ue("useLayoutItem");
  qe(oh, { id: n });
  const i = ce(false);
  ra(() => i.value = true), nf(() => i.value = false);
  const { layoutItemStyles: s, layoutItemScrimStyles: o } = t.register(r, { ...e, active: V(() => i.value ? false : e.active.value), id: n });
  return Et(() => t.unregister(n)), { layoutItemStyles: s, layoutRect: t.layoutRect, layoutItemScrimStyles: o };
}
const xb = (e, t, n, r) => {
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
function Ab(e) {
  const t = Me(No, null), n = V(() => t ? t.rootZIndex.value - 100 : jc), r = q([]), i = Ye(/* @__PURE__ */ new Map()), s = Ye(/* @__PURE__ */ new Map()), o = Ye(/* @__PURE__ */ new Map()), a = Ye(/* @__PURE__ */ new Map()), l = Ye(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = wd(), f = V(() => {
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
    return xb(T, i, s, a);
  }), h = V(() => !Array.from(l.values()).some((x) => x.value)), b = V(() => d.value[d.value.length - 1].layer), m = F(() => ({ "--v-layout-left": ve(b.value.left), "--v-layout-right": ve(b.value.right), "--v-layout-top": ve(b.value.top), "--v-layout-bottom": ve(b.value.bottom), ...h.value ? void 0 : { transition: "none" } })), _ = V(() => d.value.slice(1).map((x, T) => {
    let { id: w } = x;
    const { layer: E } = d.value[T], I = s.get(w), $ = i.get(w);
    return { id: w, ...E, size: Number(I.value), position: $.value };
  })), g = (x) => _.value.find((T) => T.id === x), y = Ue("createLayout"), A = ce(false);
  return Lt(() => {
    A.value = true;
  }), qe(No, { register: (x, T) => {
    let { id: w, order: E, position: I, layoutSize: $, elementSize: R, active: B, disableTransitions: X, absolute: K } = T;
    o.set(w, E), i.set(w, I), s.set(w, $), a.set(w, B), X && l.set(w, X);
    const ae = Un(oh, y == null ? void 0 : y.vnode).indexOf(x);
    ae > -1 ? r.value.splice(ae, 0, w) : r.value.push(w);
    const le = V(() => _.value.findIndex((ge) => ge.id === w)), Ve = V(() => n.value + d.value.length * 2 - le.value * 2), _e = V(() => {
      const ge = I.value === "left" || I.value === "right", me = I.value === "right", je = I.value === "bottom", Ze = R.value ?? $.value, $e = Ze === 0 ? "%" : "px", M = { [I.value]: 0, zIndex: Ve.value, transform: `translate${ge ? "X" : "Y"}(${(B.value ? 0 : -(Ze === 0 ? 100 : Ze)) * (me || je ? -1 : 1)}${$e})`, position: K.value || n.value !== jc ? "absolute" : "fixed", ...h.value ? void 0 : { transition: "none" } };
      if (!A.value) return M;
      const j = _.value[le.value], W = f.value.get(w);
      return W && (j[W.position] += W.amount), { ...M, height: ge ? `calc(100% - ${j.top}px - ${j.bottom}px)` : R.value ? `${R.value}px` : void 0, left: me ? void 0 : `${j.left}px`, right: me ? `${j.right}px` : void 0, top: I.value !== "bottom" ? `${j.top}px` : void 0, bottom: I.value !== "top" ? `${j.bottom}px` : void 0, width: ge ? R.value ? `${R.value}px` : void 0 : `calc(100% - ${j.left}px - ${j.right}px)` };
    }), se = V(() => ({ zIndex: Ve.value - 1 }));
    return { layoutItemStyles: _e, layoutItemScrimStyles: se, zIndex: Ve };
  }, unregister: (x) => {
    o.delete(x), i.delete(x), s.delete(x), a.delete(x), l.delete(x), r.value = r.value.filter((T) => T !== x);
  }, mainRect: b, mainStyles: m, getLayoutItem: g, items: _, layoutRect: c, rootZIndex: n }), { layoutClasses: F(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: F(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: g, items: _, layoutRect: c, layoutRef: u };
}
function ah() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, r = pt(t, n), { aliases: i = {}, components: s = {}, directives: o = {} } = r, a = Yr();
  return a.run(() => {
    const l = sp(r.defaults), u = by(r.display, r.ssr), c = xp(r.theme), f = V0(r.icons), d = Kp(r.locale), h = bb(r.date, d), b = My(r.goTo, d);
    function m(g) {
      for (const A in o) g.directive(A, o[A]);
      for (const A in s) g.component(A, s[A]);
      for (const A in i) g.component(A, br({ ...i[A], name: A, aliasName: i[A].name }));
      const y = Yr();
      if (y.run(() => {
        c.install(g);
      }), g.onUnmount(() => y.stop()), g.provide(ur, l), g.provide(Po, u), g.provide(oi, c), g.provide(Lo, f), g.provide(Eo, d), g.provide(yb, h.options), g.provide(Bc, h.instance), g.provide(Ly, b), Oe && r.ssr) if (g.$nuxt) g.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: A } = g;
        g.mount = function() {
          const S = A(...arguments);
          return ht(() => u.update()), g.mount = A, S;
        };
      }
      g.mixin({ computed: { $vuetify() {
        return Ye({ defaults: jn.call(this, ur), display: jn.call(this, Po), theme: jn.call(this, oi), icons: jn.call(this, Lo), locale: jn.call(this, Eo), date: jn.call(this, Bc) });
      } } });
    }
    function _() {
      a.stop();
    }
    return { install: m, unmount: _, defaults: l, display: u, theme: c, icons: f, locale: d, date: h, goTo: b };
  });
}
const Lb = "3.12.1";
ah.version = Lb;
function jn(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const Eb = J({ id: String, interactive: Boolean, text: String, ...Dn(Va({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Ur = Ae()({ name: "VTooltip", props: Eb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Zt(e, "modelValue"), { scopeId: i } = Oa(), s = gr(), o = F(() => e.id || `v-tooltip-${s}`), a = q(), l = V(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = V(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = F(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = V(() => Te({ "aria-describedby": o.value }, e.activatorProps));
  return Fe(() => {
    const d = ns.filterProps(e);
    return k(ns, Te({ ref: a, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: o.value }, d, { modelValue: r.value, "onUpdate:modelValue": (h) => r.value = h, transition: c.value, absolute: true, location: l.value, origin: u.value, role: "tooltip", activatorProps: f.value, _disableGlobalStack: true }, i), { activator: n.activator, default: function() {
      var _a2;
      for (var h = arguments.length, b = new Array(h), m = 0; m < h; m++) b[m] = arguments[m];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...b)) ?? e.text;
    } });
  }), $d({}, a);
} }), Mb = Xe({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = Bf();
  return (n, r) => (oe(), sr(Dp, { modelValue: ue(t), "onUpdate:modelValue": r[0] || (r[0] = (i) => He(t) ? t.value = i : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: De(() => [k(Wr, { value: "light", icon: ue(Hl), size: "small" }, { default: De(() => [k(it, { icon: ue(Hl) }, null, 8, ["icon"]), k(Ur, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }, 8, ["icon"]), k(Wr, { value: "system", icon: ue(Vl), size: "small" }, { default: De(() => [k(it, { icon: ue(Vl) }, null, 8, ["icon"]), k(Ur, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }, 8, ["icon"]), k(Wr, { value: "dark", icon: ue(Dl), size: "small" }, { default: De(() => [k(it, { icon: ue(Dl) }, null, 8, ["icon"]), k(Ur, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 }, 8, ["icon"])]), _: 1 }, 8, ["modelValue"]));
} }), zc = Dt(Mb, [["__scopeId", "data-v-8b2a7001"]]), lh = J({ text: String, ...Ge(), ..._t() }, "VToolbarTitle"), ch = Ae()({ name: "VToolbarTitle", props: lh(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => {
    const r = !!(n.default || n.text || e.text);
    return k(e.tag, { class: Ee(["v-toolbar-title", e.class]), style: Re(e.style) }, { default: () => {
      var _a2;
      return [r && P("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a2 = n.default) == null ? void 0 : _a2.call(n)])];
    } });
  }), {};
} }), kb = [null, "prominent", "default", "comfortable", "compact"], uh = J({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => kb.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...wr(), ...Ge(), ..._i(), ...xd(), ...Hn(), ..._t({ tag: "header" }), ...Vt() }, "VToolbar"), Wc = Ae()({ name: "VToolbar", props: uh(), setup(e, t) {
  var _a2;
  let { slots: n } = t;
  const { backgroundColorClasses: r, backgroundColorStyles: i } = Ss(() => e.color), { borderClasses: s } = _r(e), { elevationClasses: o } = Si(e), { locationStyles: a } = Ad(e), { roundedClasses: l } = Nn(e), { themeClasses: u } = Yt(e), { rtlClasses: c } = xr(), f = ce(e.extended === null ? !!((_a2 = n.extension) == null ? void 0 : _a2.call(n)) : e.extended), d = V(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), h = V(() => f.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return _s({ VBtn: { variant: "text" } }), Fe(() => {
    var _a3;
    const b = !!(e.title || n.title), m = !!(n.image || e.image), _ = (_a3 = n.extension) == null ? void 0 : _a3.call(n);
    return f.value = e.extended === null ? !!_ : e.extended, k(e.tag, { class: Ee(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, r.value, s.value, o.value, l.value, u.value, c.value, e.class]), style: Re([i.value, a.value, e.style]) }, { default: () => [m && P("div", { key: "image", class: "v-toolbar__image" }, [n.image ? k(Tt, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : k(Fd, { key: "image-img", cover: true, src: e.image }, null)]), k(Tt, { defaults: { VTabs: { height: ve(d.value) } } }, { default: () => {
      var _a4, _b2, _c2;
      return [P("div", { class: "v-toolbar__content", style: { height: ve(d.value) } }, [n.prepend && P("div", { class: "v-toolbar__prepend" }, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n)]), b && k(ch, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && P("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), k(Tt, { defaults: { VTabs: { height: ve(h.value) } } }, { default: () => [k(Dd, null, { default: () => [f.value && P("div", { class: "v-toolbar__extension", style: { height: ve(h.value) } }, [_])] })] })] });
  }), { contentHeight: d, extensionHeight: h };
} }), Tb = J({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function Pb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: r } = t;
  let i = 0, s = 0;
  const o = q(null), a = ce(0), l = ce(0), u = ce(0), c = ce(false), f = ce(false), d = ce(false), h = ce(false), b = ce(true), m = V(() => Number(e.scrollThreshold)), _ = V(() => ii((m.value - a.value) / m.value || 0));
  function g(C) {
    const x = "window" in C ? window.innerHeight : C.clientHeight, T = "window" in C ? document.documentElement.scrollHeight : C.scrollHeight;
    return { clientHeight: x, scrollHeight: T };
  }
  function y() {
    const C = o.value;
    if (!C) return;
    const { clientHeight: x, scrollHeight: T } = g(C), w = T - x, E = (r == null ? void 0 : r.value) || 0, I = m.value + E;
    b.value = w > I;
  }
  function A() {
    y();
  }
  function S() {
    const C = o.value;
    if (!C || n && !n.value) return;
    i = a.value, a.value = "window" in C ? C.pageYOffset : C.scrollTop;
    const x = C instanceof Window ? document.documentElement.scrollHeight : C.scrollHeight;
    s !== x && (x > s && y(), s = x), f.value = a.value < i, u.value = Math.abs(a.value - m.value);
    const { clientHeight: T, scrollHeight: w } = g(C), E = a.value + T >= w - 5;
    !f.value && E && a.value >= m.value && b.value && (h.value = true);
    const I = Math.abs(a.value - i) > 100, $ = a.value <= 5;
    (f.value && i - a.value > 1 && !E || I && a.value < m.value || $) && (h.value = false), d.value = E;
  }
  return te(f, () => {
    l.value = l.value || a.value;
  }), te(c, () => {
    l.value = 0;
  }), Lt(() => {
    te(() => e.scrollTarget, (C) => {
      var _a2;
      const x = C ? document.querySelector(C) : window;
      x && x !== o.value && ((_a2 = o.value) == null ? void 0 : _a2.removeEventListener("scroll", S), o.value = x, o.value.addEventListener("scroll", S, { passive: true }), Promise.resolve().then(() => {
        y();
      }));
    }, { immediate: true }), window.addEventListener("resize", A, { passive: true });
  }), Et(() => {
    var _a2;
    (_a2 = o.value) == null ? void 0 : _a2.removeEventListener("scroll", S), window.removeEventListener("resize", A);
  }), n && te(n, S, { immediate: true }), { scrollThreshold: m, currentScroll: a, currentThreshold: u, isScrollActive: c, scrollRatio: _, isScrollingUp: f, savedScroll: l, isAtBottom: d, reachedBottomWhileScrollingDown: h, hasEnoughScrollableSpace: b };
}
const Ib = J({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Dn(uh(), ["location"]), ...Sb(), ...Tb(), height: { type: [Number, String], default: 64 } }, "VAppBar"), Rb = Ae()({ name: "VAppBar", props: Ib(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
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
  }), { currentScroll: l, scrollThreshold: u, isScrollingUp: c, scrollRatio: f, isAtBottom: d, reachedBottomWhileScrollingDown: h, hasEnoughScrollableSpace: b } = Pb(e, { canScroll: o, layoutSize: a }), m = F(() => s.value.hide || s.value.fullyHide), _ = V(() => e.collapse || s.value.collapse && (s.value.inverted ? f.value > 0 : f.value === 0)), g = V(() => e.flat || s.value.fullyHide && !i.value || s.value.elevate && (s.value.inverted ? l.value > 0 : l.value === 0)), y = V(() => s.value.fadeImage ? s.value.inverted ? 1 - f.value : f.value : void 0), A = V(() => {
    var _a2, _b2;
    if (s.value.hide && s.value.inverted) return 0;
    const x = ((_a2 = r.value) == null ? void 0 : _a2.contentHeight) ?? 0, T = ((_b2 = r.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? l.value < u.value || s.value.fullyHide ? x + T : x : x + T;
  });
  xi(() => !!e.scrollBehavior, () => {
    on(() => {
      if (!m.value) {
        i.value = true;
        return;
      }
      if (s.value.inverted) {
        i.value = l.value > u.value;
        return;
      }
      if (!b.value) {
        i.value = true;
        return;
      }
      if (h.value) {
        i.value = false;
        return;
      }
      i.value = c.value && !d.value || l.value < u.value;
    });
  });
  const { ssrBootStyles: S } = Yd(), { layoutItemStyles: C } = Cb({ id: e.name, order: V(() => parseInt(e.order, 10)), position: F(() => e.location), layoutSize: A, elementSize: ce(void 0), active: i, absolute: F(() => e.absolute) });
  return Fe(() => {
    const x = Dn(Wc.filterProps(e), ["location"]);
    return k(Wc, Te({ ref: r, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...C.value, "--v-toolbar-image-opacity": y.value, height: void 0, ...S.value }, e.style] }, x, { collapse: _.value, flat: g.value }), n);
  }), {};
} }), Ob = Ae()({ name: "VAppBarTitle", props: lh(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => k(ch, Te(e, { class: "v-app-bar-title" }), n)), {};
} }), Vb = Xe({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", to: "/about" }, { label: "Demos", to: "/projects" }, { label: "Resume", to: "/resume" }, { label: "Contact", to: "/contact" }], { smAndDown: n } = Vd(), r = q(false);
  return (i, s) => (oe(), sr(Rb, { elevation: "0", color: "background", border: "b" }, { append: De(() => [ue(n) ? (oe(), he(ye, { key: 0 }, [k(zc), k(k0, { modelValue: r.value, "onUpdate:modelValue": s[1] || (s[1] = (o) => r.value = o), location: "bottom end", offset: "10" }, { activator: De(({ props: o }) => [k(Wr, Te(o, { icon: ue(Dv), variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16, ["icon"])]), default: De(() => [k(e0, { class: "header-menu-list", density: "compact" }, { default: De(() => [(oe(), he(ye, null, dt(t, (o) => k(Oo, { key: o.label, to: o.to, title: o.label, onClick: s[0] || (s[0] = (a) => r.value = false) }, null, 8, ["to", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (oe(), he(ye, { key: 1 }, [(oe(), he(ye, null, dt(t, (o) => k(Wr, { key: o.label, to: o.to, variant: "text", size: "default", class: "nav-ink" }, { default: De(() => [ti(be(o.label), 1)]), _: 2 }, 1032, ["to"])), 64)), k(zc)], 64))]), default: De(() => [k(Ob, { class: "header-title" }, { default: De(() => [...s[2] || (s[2] = [P("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 }));
} });
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const Wn = typeof document < "u";
function fh(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Db(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && fh(e.default);
}
const Ce = Object.assign;
function no(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = Ot(i) ? i.map(e) : e(i);
  }
  return n;
}
const Zr = () => {
}, Ot = Array.isArray;
function Gc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const dh = /#/g, Hb = /&/g, Nb = /\//g, Fb = /=/g, $b = /\?/g, hh = /\+/g, Bb = /%5B/g, jb = /%5D/g, mh = /%5E/g, zb = /%60/g, gh = /%7B/g, Wb = /%7C/g, vh = /%7D/g, Gb = /%20/g;
function Ha(e) {
  return e == null ? "" : encodeURI("" + e).replace(Wb, "|").replace(Bb, "[").replace(jb, "]");
}
function Ub(e) {
  return Ha(e).replace(gh, "{").replace(vh, "}").replace(mh, "^");
}
function Fo(e) {
  return Ha(e).replace(hh, "%2B").replace(Gb, "+").replace(dh, "%23").replace(Hb, "%26").replace(zb, "`").replace(gh, "{").replace(vh, "}").replace(mh, "^");
}
function Zb(e) {
  return Fo(e).replace(Fb, "%3D");
}
function Yb(e) {
  return Ha(e).replace(dh, "%23").replace($b, "%3F");
}
function Kb(e) {
  return Yb(e).replace(Nb, "%2F");
}
function di(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const qb = /\/$/, Xb = (e) => e.replace(qb, "");
function ro(e, t, n = "/") {
  let r, i = {}, s = "", o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), s = t.slice(l, a > 0 ? a : t.length), i = e(s.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = t2(r ?? t, n), { fullPath: r + s + o, path: r, query: i, hash: di(o) };
}
function Jb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Uc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Qb(e, t, n) {
  const r = t.matched.length - 1, i = n.matched.length - 1;
  return r > -1 && r === i && dr(t.matched[r], n.matched[i]) && ph(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function dr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ph(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!e2(e[n], t[n])) return false;
  return true;
}
function e2(e, t) {
  return Ot(e) ? Zc(e, t) : Ot(t) ? Zc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Zc(e, t) {
  return Ot(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function t2(e, t) {
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
let $o = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), io = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function n2(e) {
  if (!e) if (Wn) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Xb(e);
}
const r2 = /^[^#]+#/;
function i2(e, t) {
  return e.replace(r2, "#") + t;
}
function s2(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const Ls = () => ({ left: window.scrollX, top: window.scrollY });
function o2(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = s2(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Yc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Bo = /* @__PURE__ */ new Map();
function a2(e, t) {
  Bo.set(e, t);
}
function l2(e) {
  const t = Bo.get(e);
  return Bo.delete(e), t;
}
function c2(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function yh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Be = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const bh = Symbol("");
Be.MATCHER_NOT_FOUND + "", Be.NAVIGATION_GUARD_REDIRECT + "", Be.NAVIGATION_ABORTED + "", Be.NAVIGATION_CANCELLED + "", Be.NAVIGATION_DUPLICATED + "";
function hr(e, t) {
  return Ce(new Error(), { type: e, [bh]: true }, t);
}
function Xt(e, t) {
  return e instanceof Error && bh in e && (t == null || !!(e.type & t));
}
const u2 = ["params", "query", "hash"];
function f2(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of u2) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function d2(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(hh, " "), s = i.indexOf("="), o = di(s < 0 ? i : i.slice(0, s)), a = s < 0 ? null : di(i.slice(s + 1));
    if (o in t) {
      let l = t[o];
      Ot(l) || (l = t[o] = [l]), l.push(a);
    } else t[o] = a;
  }
  return t;
}
function Kc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Zb(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ot(r) ? r.map((i) => i && Fo(i)) : [r && Fo(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function h2(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Ot(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return t;
}
const m2 = Symbol(""), qc = Symbol(""), Es = Symbol(""), Na = Symbol(""), jo = Symbol("");
function Ir() {
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
function hn(e, t, n, r, i, s = (o) => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const u = (d) => {
      d === false ? l(hr(Be.NAVIGATION_ABORTED, { from: n, to: t })) : d instanceof Error ? l(d) : c2(d) ? l(hr(Be.NAVIGATION_GUARD_REDIRECT, { from: t, to: d })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d), a());
    }, c = s(() => e.call(r && r.instances[i], t, n, u));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
  });
}
function so(e, t, n, r, i = (s) => s()) {
  const s = [];
  for (const o of e) for (const a in o.components) {
    let l = o.components[a];
    if (!(t !== "beforeRouteEnter" && !o.instances[a])) if (fh(l)) {
      const u = (l.__vccOpts || l)[t];
      u && s.push(hn(u, n, r, o, a, i));
    } else {
      let u = l();
      s.push(() => u.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
        const f = Db(c) ? c.default : c;
        o.mods[a] = c, o.components[a] = f;
        const d = (f.__vccOpts || f)[t];
        return d && hn(d, n, r, o, a, i)();
      }));
    }
  }
  return s;
}
function g2(e, t) {
  const n = [], r = [], i = [], s = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < s; o++) {
    const a = t.matched[o];
    a && (e.matched.find((u) => dr(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((u) => dr(u, l)) || i.push(l));
  }
  return [n, r, i];
}
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let v2 = () => location.protocol + "//" + location.host;
function wh(e, t) {
  const { pathname: n, search: r, hash: i } = t, s = e.indexOf("#");
  if (s > -1) {
    let o = i.includes(e.slice(s)) ? e.slice(s).length : 1, a = i.slice(o);
    return a[0] !== "/" && (a = "/" + a), Uc(a, "");
  }
  return Uc(n, e) + r + i;
}
function p2(e, t, n, r) {
  let i = [], s = [], o = null;
  const a = ({ state: d }) => {
    const h = wh(e, location), b = n.value, m = t.value;
    let _ = 0;
    if (d) {
      if (n.value = h, t.value = d, o && o === b) {
        o = null;
        return;
      }
      _ = m ? d.position - m.position : 0;
    } else r(h);
    i.forEach((g) => {
      g(n.value, b, { delta: _, type: $o.pop, direction: _ ? _ > 0 ? io.forward : io.back : io.unknown });
    });
  };
  function l() {
    o = n.value;
  }
  function u(d) {
    i.push(d);
    const h = () => {
      const b = i.indexOf(d);
      b > -1 && i.splice(b, 1);
    };
    return s.push(h), h;
  }
  function c() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(Ce({}, d.state, { scroll: Ls() }), "");
    }
  }
  function f() {
    for (const d of s) d();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), { pauseListeners: l, listen: u, destroy: f };
}
function Xc(e, t, n, r = false, i = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: i ? Ls() : null };
}
function y2(e) {
  const { history: t, location: n } = window, r = { value: wh(e, n) }, i = { value: t.state };
  i.value || s(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function s(l, u, c) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : v2() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), i.value = u;
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d);
    }
  }
  function o(l, u) {
    s(l, Ce({}, t.state, Xc(i.value.back, l, i.value.forward, true), u, { position: i.value.position }), true), r.value = l;
  }
  function a(l, u) {
    const c = Ce({}, i.value, t.state, { forward: l, scroll: Ls() });
    s(c.current, c, true), s(l, Ce({}, Xc(r.value, l, null), { position: c.position + 1 }, u), false), r.value = l;
  }
  return { location: r, state: i, push: a, replace: o };
}
function b2(e) {
  e = n2(e);
  const t = y2(e), n = p2(e, t.state, t.location, t.replace);
  function r(s, o = true) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = Ce({ location: "", base: e, go: r, createHref: i2.bind(null, e) }, t, n);
  return Object.defineProperty(i, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(i, "state", { enumerable: true, get: () => t.state.value }), i;
}
let En = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var We = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(We || {});
const w2 = { type: En.Static, value: "" }, _2 = /[a-zA-Z0-9_]/;
function S2(e) {
  if (!e) return [[]];
  if (e === "/") return [[w2]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`);
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
        l === "(" ? n = We.ParamRegExp : _2.test(l) ? d() : (f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--);
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
const Jc = "[^/]+?", C2 = { sensitive: false, strict: false, start: true, end: true };
var ot = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(ot || {});
const x2 = /[.+*?^${}()[\]/\\]/g;
function A2(e, t) {
  const n = Ce({}, C2, t), r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [ot.Root];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = ot.Segment + (n.sensitive ? ot.BonusCaseSensitive : 0);
      if (d.type === En.Static) f || (i += "/"), i += d.value.replace(x2, "\\$&"), h += ot.Static;
      else if (d.type === En.Param) {
        const { value: b, repeatable: m, optional: _, regexp: g } = d;
        s.push({ name: b, repeatable: m, optional: _ });
        const y = g || Jc;
        if (y !== Jc) {
          h += ot.BonusCustomRegExp;
          try {
            `${y}`;
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${y}): ` + S.message);
          }
        }
        let A = m ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (A = _ && u.length < 2 ? `(?:/${A})` : "/" + A), _ && (A += "?"), i += A, h += ot.Dynamic, _ && (h += ot.BonusOptional), m && (h += ot.BonusRepeatable), y === ".*" && (h += ot.BonusWildcard);
      }
      c.push(h);
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
      const h = c[d] || "", b = s[d - 1];
      f[b.name] = h && b.repeatable ? h.split("/") : h;
    }
    return f;
  }
  function l(u) {
    let c = "", f = false;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), f = false;
      for (const h of d) if (h.type === En.Static) c += h.value;
      else if (h.type === En.Param) {
        const { value: b, repeatable: m, optional: _ } = h, g = b in u ? u[b] : "";
        if (Ot(g) && !m) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
        const y = Ot(g) ? g.join("/") : g;
        if (!y) if (_) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${b}"`);
        c += y;
      }
    }
    return c || "/";
  }
  return { re: o, score: r, keys: s, parse: a, stringify: l };
}
function L2(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === ot.Static + ot.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ot.Static + ot.Segment ? 1 : -1 : 0;
}
function _h(e, t) {
  let n = 0;
  const r = e.score, i = t.score;
  for (; n < r.length && n < i.length; ) {
    const s = L2(r[n], i[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Qc(r)) return 1;
    if (Qc(i)) return -1;
  }
  return i.length - r.length;
}
function Qc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const E2 = { strict: false, end: true, sensitive: false };
function M2(e, t, n) {
  const r = A2(S2(e.path), n), i = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function k2(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Gc(E2, t);
  function i(f) {
    return r.get(f);
  }
  function s(f, d, h) {
    const b = !h, m = tu(f);
    m.aliasOf = h && h.record;
    const _ = Gc(t, f), g = [m];
    if ("alias" in f) {
      const S = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const C of S) g.push(tu(Ce({}, m, { components: h ? h.record.components : m.components, path: C, aliasOf: h ? h.record : m })));
    }
    let y, A;
    for (const S of g) {
      const { path: C } = S;
      if (d && C[0] !== "/") {
        const x = d.record.path, T = x[x.length - 1] === "/" ? "" : "/";
        S.path = d.record.path + (C && T + C);
      }
      if (y = M2(S, d, _), h ? h.alias.push(y) : (A = A || y, A !== y && A.alias.push(y), b && f.name && !nu(y) && o(f.name)), Sh(y) && l(y), m.children) {
        const x = m.children;
        for (let T = 0; T < x.length; T++) s(x[T], y, h && h.children[T]);
      }
      h = h || y;
    }
    return A ? () => {
      o(A);
    } : Zr;
  }
  function o(f) {
    if (yh(f)) {
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
    const d = I2(f, n);
    n.splice(d, 0, f), f.record.name && !nu(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let h, b = {}, m, _;
    if ("name" in f && f.name) {
      if (h = r.get(f.name), !h) throw hr(Be.MATCHER_NOT_FOUND, { location: f });
      _ = h.record.name, b = Ce(eu(d.params, h.keys.filter((A) => !A.optional).concat(h.parent ? h.parent.keys.filter((A) => A.optional) : []).map((A) => A.name)), f.params && eu(f.params, h.keys.map((A) => A.name))), m = h.stringify(b);
    } else if (f.path != null) m = f.path, h = n.find((A) => A.re.test(m)), h && (b = h.parse(m), _ = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find((A) => A.re.test(d.path)), !h) throw hr(Be.MATCHER_NOT_FOUND, { location: f, currentLocation: d });
      _ = h.record.name, b = Ce({}, d.params, f.params), m = h.stringify(b);
    }
    const g = [];
    let y = h;
    for (; y; ) g.unshift(y.record), y = y.parent;
    return { name: _, path: m, params: b, matched: g, meta: P2(g) };
  }
  e.forEach((f) => s(f));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: s, resolve: u, removeRoute: o, clearRoutes: c, getRoutes: a, getRecordMatcher: i };
}
function eu(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function tu(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: T2(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function T2(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function nu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function P2(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function I2(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    _h(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const i = R2(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function R2(e) {
  let t = e;
  for (; t = t.parent; ) if (Sh(t) && _h(e, t) === 0) return t;
}
function Sh({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ru(e) {
  const t = Me(Es), n = Me(Na), r = V(() => {
    const l = ue(e.to);
    return t.resolve(l);
  }), i = V(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const d = f.findIndex(dr.bind(null, c));
    if (d > -1) return d;
    const h = iu(l[u - 2]);
    return u > 1 && iu(c) === h && f[f.length - 1].path !== h ? f.findIndex(dr.bind(null, l[u - 2])) : d;
  }), s = V(() => i.value > -1 && N2(n.params, r.value.params)), o = V(() => i.value > -1 && i.value === n.matched.length - 1 && ph(n.params, r.value.params));
  function a(l = {}) {
    if (H2(l)) {
      const u = t[ue(e.replace) ? "replace" : "push"](ue(e.to)).catch(Zr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: r, href: V(() => r.value.href), isActive: s, isExactActive: o, navigate: a };
}
function O2(e) {
  return e.length === 1 ? e[0] : e;
}
const V2 = Xe({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: ru, setup(e, { slots: t }) {
  const n = Ye(ru(e)), { options: r } = Me(Es), i = V(() => ({ [su(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [su(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const s = t.default && O2(t.default(n));
    return e.custom ? s : vn("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: i.value }, s);
  };
} }), D2 = V2;
function H2(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function N2(e, t) {
  for (const n in t) {
    const r = t[n], i = e[n];
    if (typeof r == "string") {
      if (r !== i) return false;
    } else if (!Ot(i) || i.length !== r.length || r.some((s, o) => s.valueOf() !== i[o].valueOf())) return false;
  }
  return true;
}
function iu(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const su = (e, t, n) => e ?? t ?? n, F2 = Xe({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = Me(jo), i = V(() => e.route || r.value), s = Me(qc, 0), o = V(() => {
    let u = ue(s);
    const { matched: c } = i.value;
    let f;
    for (; (f = c[u]) && !f.components; ) u++;
    return u;
  }), a = V(() => i.value.matched[o.value]);
  qe(qc, V(() => o.value + 1)), qe(m2, a), qe(jo, i);
  const l = q();
  return te(() => [l.value, a.value, e.name], ([u, c, f], [d, h, b]) => {
    c && (c.instances[f] = u, h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), u && c && (!h || !dr(c, h) || !d) && (c.enterCallbacks[f] || []).forEach((m) => m(u));
  }, { flush: "post" }), () => {
    const u = i.value, c = e.name, f = a.value, d = f && f.components[c];
    if (!d) return ou(n.default, { Component: d, route: u });
    const h = f.props[c], b = h ? h === true ? u.params : typeof h == "function" ? h(u) : h : null, _ = vn(d, Ce({}, b, t, { onVnodeUnmounted: (g) => {
      g.component.isUnmounted && (f.instances[c] = null);
    }, ref: l }));
    return ou(n.default, { Component: _, route: u }) || _;
  };
} });
function ou(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const $2 = F2;
function B2(e) {
  const t = k2(e.routes, e), n = e.parseQuery || d2, r = e.stringifyQuery || Kc, i = e.history, s = Ir(), o = Ir(), a = Ir(), l = ce(cn);
  let u = cn;
  Wn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = no.bind(null, (M) => "" + M), f = no.bind(null, Kb), d = no.bind(null, di);
  function h(M, j) {
    let W, U;
    return yh(M) ? (W = t.getRecordMatcher(M), U = j) : U = M, t.addRoute(U, W);
  }
  function b(M) {
    const j = t.getRecordMatcher(M);
    j && t.removeRoute(j);
  }
  function m() {
    return t.getRoutes().map((M) => M.record);
  }
  function _(M) {
    return !!t.getRecordMatcher(M);
  }
  function g(M, j) {
    if (j = Ce({}, j || l.value), typeof M == "string") {
      const L = ro(n, M, j.path), O = t.resolve({ path: L.path }, j), H = i.createHref(L.fullPath);
      return Ce(L, O, { params: d(O.params), hash: di(L.hash), redirectedFrom: void 0, href: H });
    }
    let W;
    if (M.path != null) W = Ce({}, M, { path: ro(n, M.path, j.path).path });
    else {
      const L = Ce({}, M.params);
      for (const O in L) L[O] == null && delete L[O];
      W = Ce({}, M, { params: f(L) }), j.params = f(j.params);
    }
    const U = t.resolve(W, j), pe = M.hash || "";
    U.params = c(d(U.params));
    const v = Jb(r, Ce({}, M, { hash: Ub(pe), path: U.path })), p = i.createHref(v);
    return Ce({ fullPath: v, hash: pe, query: r === Kc ? h2(M.query) : M.query || {} }, U, { redirectedFrom: void 0, href: p });
  }
  function y(M) {
    return typeof M == "string" ? ro(n, M, l.value.path) : Ce({}, M);
  }
  function A(M, j) {
    if (u !== M) return hr(Be.NAVIGATION_CANCELLED, { from: j, to: M });
  }
  function S(M) {
    return T(M);
  }
  function C(M) {
    return S(Ce(y(M), { replace: true }));
  }
  function x(M, j) {
    const W = M.matched[M.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: U } = W;
      let pe = typeof U == "function" ? U(M, j) : U;
      return typeof pe == "string" && (pe = pe.includes("?") || pe.includes("#") ? pe = y(pe) : { path: pe }, pe.params = {}), Ce({ query: M.query, hash: M.hash, params: pe.path != null ? {} : M.params }, pe);
    }
  }
  function T(M, j) {
    const W = u = g(M), U = l.value, pe = M.state, v = M.force, p = M.replace === true, L = x(W, U);
    if (L) return T(Ce(y(L), { state: typeof L == "object" ? Ce({}, pe, L.state) : pe, force: v, replace: p }), j || W);
    const O = W;
    O.redirectedFrom = j;
    let H;
    return !v && Qb(r, U, W) && (H = hr(Be.NAVIGATION_DUPLICATED, { to: O, from: U }), se(U, U, true, false)), (H ? Promise.resolve(H) : I(O, U)).catch((D) => Xt(D) ? Xt(D, Be.NAVIGATION_GUARD_REDIRECT) ? D : _e(D) : le(D, O, U)).then((D) => {
      if (D) {
        if (Xt(D, Be.NAVIGATION_GUARD_REDIRECT)) return T(Ce({ replace: p }, y(D.to), { state: typeof D.to == "object" ? Ce({}, pe, D.to.state) : pe, force: v }), j || O);
      } else D = R(O, U, true, p, pe);
      return $(O, U, D), D;
    });
  }
  function w(M, j) {
    const W = A(M, j);
    return W ? Promise.reject(W) : Promise.resolve();
  }
  function E(M) {
    const j = je.values().next().value;
    return j && typeof j.runWithContext == "function" ? j.runWithContext(M) : M();
  }
  function I(M, j) {
    let W;
    const [U, pe, v] = g2(M, j);
    W = so(U.reverse(), "beforeRouteLeave", M, j);
    for (const L of U) L.leaveGuards.forEach((O) => {
      W.push(hn(O, M, j));
    });
    const p = w.bind(null, M, j);
    return W.push(p), $e(W).then(() => {
      W = [];
      for (const L of s.list()) W.push(hn(L, M, j));
      return W.push(p), $e(W);
    }).then(() => {
      W = so(pe, "beforeRouteUpdate", M, j);
      for (const L of pe) L.updateGuards.forEach((O) => {
        W.push(hn(O, M, j));
      });
      return W.push(p), $e(W);
    }).then(() => {
      W = [];
      for (const L of v) if (L.beforeEnter) if (Ot(L.beforeEnter)) for (const O of L.beforeEnter) W.push(hn(O, M, j));
      else W.push(hn(L.beforeEnter, M, j));
      return W.push(p), $e(W);
    }).then(() => (M.matched.forEach((L) => L.enterCallbacks = {}), W = so(v, "beforeRouteEnter", M, j, E), W.push(p), $e(W))).then(() => {
      W = [];
      for (const L of o.list()) W.push(hn(L, M, j));
      return W.push(p), $e(W);
    }).catch((L) => Xt(L, Be.NAVIGATION_CANCELLED) ? L : Promise.reject(L));
  }
  function $(M, j, W) {
    a.list().forEach((U) => E(() => U(M, j, W)));
  }
  function R(M, j, W, U, pe) {
    const v = A(M, j);
    if (v) return v;
    const p = j === cn, L = Wn ? history.state : {};
    W && (U || p ? i.replace(M.fullPath, Ce({ scroll: p && L && L.scroll }, pe)) : i.push(M.fullPath, pe)), l.value = M, se(M, j, W, p), _e();
  }
  let B;
  function X() {
    B || (B = i.listen((M, j, W) => {
      if (!Ze.listening) return;
      const U = g(M), pe = x(U, Ze.currentRoute.value);
      if (pe) {
        T(Ce(pe, { replace: true, force: true }), U).catch(Zr);
        return;
      }
      u = U;
      const v = l.value;
      Wn && a2(Yc(v.fullPath, W.delta), Ls()), I(U, v).catch((p) => Xt(p, Be.NAVIGATION_ABORTED | Be.NAVIGATION_CANCELLED) ? p : Xt(p, Be.NAVIGATION_GUARD_REDIRECT) ? (T(Ce(y(p.to), { force: true }), U).then((L) => {
        Xt(L, Be.NAVIGATION_ABORTED | Be.NAVIGATION_DUPLICATED) && !W.delta && W.type === $o.pop && i.go(-1, false);
      }).catch(Zr), Promise.reject()) : (W.delta && i.go(-W.delta, false), le(p, U, v))).then((p) => {
        p = p || R(U, v, false), p && (W.delta && !Xt(p, Be.NAVIGATION_CANCELLED) ? i.go(-W.delta, false) : W.type === $o.pop && Xt(p, Be.NAVIGATION_ABORTED | Be.NAVIGATION_DUPLICATED) && i.go(-1, false)), $(U, v, p);
      }).catch(Zr);
    }));
  }
  let K = Ir(), ne = Ir(), ae;
  function le(M, j, W) {
    _e(M);
    const U = ne.list();
    return U.length ? U.forEach((pe) => pe(M, j, W)) : console.error(M), Promise.reject(M);
  }
  function Ve() {
    return ae && l.value !== cn ? Promise.resolve() : new Promise((M, j) => {
      K.add([M, j]);
    });
  }
  function _e(M) {
    return ae || (ae = !M, X(), K.list().forEach(([j, W]) => M ? W(M) : j()), K.reset()), M;
  }
  function se(M, j, W, U) {
    const { scrollBehavior: pe } = e;
    if (!Wn || !pe) return Promise.resolve();
    const v = !W && l2(Yc(M.fullPath, 0)) || (U || !W) && history.state && history.state.scroll || null;
    return ht().then(() => pe(M, j, v)).then((p) => p && o2(p)).catch((p) => le(p, M, j));
  }
  const ge = (M) => i.go(M);
  let me;
  const je = /* @__PURE__ */ new Set(), Ze = { currentRoute: l, listening: true, addRoute: h, removeRoute: b, clearRoutes: t.clearRoutes, hasRoute: _, getRoutes: m, resolve: g, options: e, push: S, replace: C, go: ge, back: () => ge(-1), forward: () => ge(1), beforeEach: s.add, beforeResolve: o.add, afterEach: a.add, onError: ne.add, isReady: Ve, install(M) {
    M.component("RouterLink", D2), M.component("RouterView", $2), M.config.globalProperties.$router = Ze, Object.defineProperty(M.config.globalProperties, "$route", { enumerable: true, get: () => ue(l) }), Wn && !me && l.value === cn && (me = true, S(i.location).catch((U) => {
    }));
    const j = {};
    for (const U in cn) Object.defineProperty(j, U, { get: () => l.value[U], enumerable: true });
    M.provide(Es, Ze), M.provide(Na, Du(j)), M.provide(jo, l);
    const W = M.unmount;
    je.add(M), M.unmount = function() {
      je.delete(M), je.size < 1 && (u = cn, B && B(), B = null, l.value = cn, me = false, ae = false), W();
    };
  } };
  function $e(M) {
    return M.reduce((j, W) => j.then(() => E(W)), Promise.resolve());
  }
  return Ze;
}
function Ch() {
  return Me(Es);
}
function xh(e) {
  return Me(Na);
}
function Ah(e, t, n) {
  const r = Uf(e, t, n);
  return Math.atan2(r.y - n.h / 2, r.x - n.w / 2);
}
function j2(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function z2(e, t, n, r, i) {
  if (n <= t) return i;
  const s = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return i + (r - i) * s;
}
function W2(e, t, n) {
  let r = 1 / 0;
  const i = (s) => {
    s > 0 && s < r && (r = s);
  };
  return t.x > 1e-9 && i((n.maxX - e.x) / t.x), t.x < -1e-9 && i((n.minX - e.x) / t.x), t.y > 1e-9 && i((n.maxY - e.y) / t.y), t.y < -1e-9 && i((n.minY - e.y) / t.y), Number.isFinite(r) ? { x: e.x + t.x * r, y: e.y + t.y * r } : { x: e.x, y: e.y };
}
function G2(e, t, n, r) {
  const i = { x: Math.cos(t), y: Math.sin(t) }, s = W2(e, i, n), o = s.x - i.x * r, a = s.y - i.y * r;
  return { x: Math.min(n.maxX - r, Math.max(n.minX + r, o)), y: Math.min(n.maxY - r, Math.max(n.minY + r, a)) };
}
function U2(e, t) {
  let n = Math.abs(e - t) % (2 * Math.PI);
  return n > Math.PI && (n = 2 * Math.PI - n), n;
}
function Z2(e, t, n) {
  let r = null, i = n;
  for (const s of e) {
    const o = U2(s.bearing, t);
    o <= i && (i = o, r = s);
  }
  return r;
}
const au = 1;
function Y2(e, t) {
  const n = e.scrollTop <= au, r = e.scrollTop >= e.scrollHeight - e.clientHeight - au;
  return n && t < 0 ? -1 : r && t > 0 ? 1 : 0;
}
const ss = { dir: 0, amount: 0 };
function K2(e, t, n, r) {
  if (t === 0) return { acc: ss, fire: 0 };
  const i = (e.dir === t ? e.amount : 0) + Math.abs(n);
  return i >= r ? { acc: ss, fire: t } : { acc: { dir: t, amount: i }, fire: 0 };
}
function q2(e, t, n, r) {
  return Math.abs(e) < n && Math.abs(t) < n ? "none" : Math.abs(e) > Math.abs(t) * r ? "horizontal" : "vertical";
}
function X2(e, t, n) {
  return e + t * n;
}
function J2(e, t) {
  return e >= t ? 1 : e <= -t ? -1 : 0;
}
function Q2(e) {
  const t = Ch(), n = Vn();
  let r = false, i = 0, s = 0, o = "none", a = 0, l = 0, u = ss, c = false, f = null;
  function d(_) {
    _ && r && o === "horizontal" && !c && n.panTo(a, l), r = false, i = 0, s = 0, o = "none", u = ss, c = false, f !== null && (clearTimeout(f), f = null);
  }
  function h(_) {
    const g = n.camera.value, y = n.viewport.value, A = n.spacing.value, S = pr.filter((x) => x.id !== e.waypointId).map((x) => ({ route: x.route, bearing: Ah(yr(x, A), g, y) })), C = Z2(S, _, s1);
    return C && t.push(C.route), C !== null;
  }
  function b(_) {
    const g = e.el.value;
    if (!e.isActive.value || n.isAnimating.value || !g) {
      d(false);
      return;
    }
    if (r || (r = true, a = n.camera.value.x, l = n.camera.value.y), i += _.deltaX, s += _.deltaY, f !== null && clearTimeout(f), f = window.setTimeout(() => d(true), Yv), o === "none" && (o = q2(i, s, Kv, Bl)), (o === "horizontal" || o === "none" && Math.abs(_.deltaX) > Math.abs(_.deltaY) * Bl) && _.preventDefault(), o === "horizontal") {
      if (c) return;
      n.snapTo(X2(a, i, qv), l);
      const y = J2(i, Xv);
      y !== 0 && h(y > 0 ? 0 : Math.PI) && (c = true);
    } else if (o === "vertical") {
      const y = Y2({ scrollTop: g.scrollTop, scrollHeight: g.scrollHeight, clientHeight: g.clientHeight }, _.deltaY), A = K2(u, y, _.deltaY, Zv);
      u = A.acc, A.fire !== 0 && h(A.fire > 0 ? Math.PI / 2 : -Math.PI / 2) && (c = true);
    }
  }
  let m = null;
  Lt(() => {
    m = e.el.value, m == null ? void 0 : m.addEventListener("wheel", b, { passive: false });
  }), vr(() => {
    m == null ? void 0 : m.removeEventListener("wheel", b), m = null, d(false);
  });
}
const ew = ["id", "aria-current", "aria-label"], tw = Xe({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = bs(t.waypointId), { camera: r, viewport: i, spacing: s, setCaptureScroll: o } = Vn(), a = xh(), l = V(() => a.name === t.waypointId), u = V(() => yr(n, s.value)), c = V(() => {
    const b = Math.min(s.value.col, s.value.row) * Uv;
    return zv(u.value, r.value, i.value, { radius: b, floor: Gv });
  }), f = V(() => {
    const b = $l + (1 - $l) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${b})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none", maxHeight: l.value ? `${i.value.h}px` : void 0 };
  }), d = q(null);
  function h() {
    l.value && d.value && o(d.value.scrollTop);
  }
  return te(l, (b) => {
    b && d.value && (d.value.scrollTop = 0, o(0));
  }), Q2({ el: d, isActive: l, waypointId: t.waypointId }), (b, m) => (oe(), he("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: d, class: Ee(["world-panel", { "world-panel--scroll": l.value }]), style: Re(f.value), "aria-current": l.value ? "page" : void 0, "aria-label": ue(n).label, tabindex: "-1", "data-grid-ignore-click": "true", onScroll: h }, [Om(b.$slots, "default", {}, void 0)], 46, ew));
} }), Rr = Dt(tw, [["__scopeId", "data-v-1a70f4b7"]]), at = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, Lh = [{ label: "Location", icon: Wf, href: "https://maps.google.com/?q=Bentonville,+AR", display: at.location }, { label: "Email", icon: jf, href: `mailto:${at.email}`, display: at.email }, { label: "Phone", icon: Hv, href: `tel:${at.phone.replace(/[^\d+]/g, "")}`, display: at.phone }, { label: "GitHub", icon: zf, href: at.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: Vv, href: at.linkedin, display: "bits-for-bread" }], nw = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], rw = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], iw = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], sw = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], ow = { id: "hero", class: "hero-section" }, aw = { class: "hero-frame glass-panel glass-panel--strong" }, lw = { class: "hero-main" }, cw = { class: "hero-kicker glass-chip section-kicker" }, uw = { class: "hero-name section-heading" }, fw = { class: "hero-tagline" }, dw = { class: "hero-bio" }, hw = { class: "hero-actions" }, mw = { href: "#projects", class: "hero-link hero-link--primary" }, gw = { class: "hero-rail" }, vw = { class: "hero-note quiet-sheet" }, pw = { class: "skills-block" }, yw = { class: "skill-label" }, bw = { class: "skill-items" }, ww = { class: "hero-note quiet-sheet" }, _w = { class: "hero-links" }, Sw = ["href"], Cw = Xe({ __name: "HeroSection", setup(e) {
  const t = Lh.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, r) => (oe(), he("section", ow, [k(Ai, { class: "hero-container" }, { default: De(() => [P("div", aw, [P("div", lw, [P("span", cw, [k(it, { icon: ue(Wf), class: "hero-location-icon" }, null, 8, ["icon"]), ti(be(ue(at).location), 1)]), P("h1", uw, be(ue(at).name), 1), P("p", fw, be(ue(at).tagline), 1), P("p", dw, be(ue(at).bio), 1), P("div", hw, [P("a", mw, [r[0] || (r[0] = ti(" View selected work ", -1)), k(it, { icon: ue(Pv), class: "hero-link-icon" }, null, 8, ["icon"])]), r[1] || (r[1] = P("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), P("aside", gw, [P("section", vw, [r[2] || (r[2] = P("p", { class: "hero-note-label" }, "Capabilities", -1)), P("div", pw, [(oe(true), he(ye, null, dt(ue(nw), (i) => (oe(), he("div", { key: i.label, class: "skill-group" }, [P("span", yw, be(i.label), 1), P("span", bw, be(i.items.join("  \xB7  ")), 1)]))), 128))])]), P("section", ww, [r[3] || (r[3] = P("p", { class: "hero-note-label" }, "Elsewhere", -1)), P("div", _w, [(oe(true), he(ye, null, dt(ue(t), (i) => (oe(), he("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [k(it, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), P("span", null, be(i.display ?? i.label), 1)], 8, Sw))), 128))])])])])]), _: 1 })]));
} }), xw = Dt(Cw, [["__scopeId", "data-v-5000fea6"]]), zo = { demo: { ariaLabel: "Live demo", icon: Ol, label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: zf, label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: Nv, label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: Ol, label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: Rv, label: "Docs", priority: 4 } };
function Aw(e, t) {
  return zo[e].priority - zo[t].priority;
}
function Lw(e) {
  return [...e.links ?? []].sort((t, n) => Aw(t.kind, n.kind)).map((t) => ({ ...t, ...zo[t.kind] }));
}
function lu(e, t) {
  const n = Lw(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const Ew = { id: "projects", class: "demos-section" }, Mw = { key: 0, class: "project-feature glass-panel" }, kw = { class: "project-feature-body" }, Tw = { class: "project-feature-title" }, Pw = { class: "project-feature-blurb" }, Iw = { class: "project-feature-tech" }, Rw = { class: "project-feature-actions" }, Ow = ["href", "aria-label"], Vw = { class: "project-index" }, Dw = { class: "project-item-head" }, Hw = { class: "project-item-title" }, Nw = { key: 0, class: "project-item-links", "aria-label": "Project links" }, Fw = ["href", "aria-label"], $w = { class: "project-item-blurb" }, Bw = { class: "project-item-tech" }, jw = Xe({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = rw, r = t ? { ...t, visibleLinks: lu(t, "featured") } : null, i = n.map((s) => ({ ...s, visibleLinks: lu(s, "compact") }));
  return (s, o) => (oe(), he("section", Ew, [k(Ai, { class: "projects-container" }, { default: De(() => [o[1] || (o[1] = P("div", { class: "projects-head" }, [P("div", { class: "projects-heading" }, [P("span", { class: "glass-chip section-kicker" }, "Selected work"), P("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), P("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), ue(r) ? (oe(), he("article", Mw, [P("div", kw, [o[0] || (o[0] = P("span", { class: "project-feature-label" }, "Featured project", -1)), P("h3", Tw, be(ue(r).title), 1), P("p", Pw, be(ue(r).blurb), 1), P("div", Iw, [(oe(true), he(ye, null, dt(ue(r).tech, (a) => (oe(), he("span", { key: a, class: "project-tech-tag" }, be(a), 1))), 128))])]), P("div", Rw, [(oe(true), he(ye, null, dt(ue(r).visibleLinks, (a) => (oe(), he("a", { key: a.kind, href: a.href, target: "_blank", rel: "noopener noreferrer", class: Ee(["project-link", { "project-link--demo": a.kind === "demo" }]), "aria-label": a.ariaLabel }, [k(it, { icon: a.icon }, null, 8, ["icon"]), P("span", null, be(a.label), 1), k(Ur, { activator: "parent", location: "top", text: a.ariaLabel }, null, 8, ["text"])], 10, Ow))), 128))])])) : or("", true), P("div", Vw, [(oe(true), he(ye, null, dt(ue(i), (a) => (oe(), he("article", { key: a.title, class: "project-item quiet-sheet" }, [P("header", Dw, [P("h3", Hw, be(a.title), 1), a.visibleLinks.length ? (oe(), he("div", Nw, [(oe(true), he(ye, null, dt(a.visibleLinks, (l) => (oe(), he("a", { key: l.kind, href: l.href, target: "_blank", rel: "noopener noreferrer", class: Ee(["project-item-link", { "project-item-link--demo": l.kind === "demo" }]), "aria-label": l.ariaLabel }, [k(it, { icon: l.icon }, null, 8, ["icon"]), k(Ur, { activator: "parent", location: "top", text: l.ariaLabel }, null, 8, ["text"])], 10, Fw))), 128))])) : or("", true)]), P("p", $w, be(a.blurb), 1), P("div", Bw, [(oe(true), he(ye, null, dt(a.tech, (l) => (oe(), he("span", { key: l, class: "project-tech-tag" }, be(l), 1))), 128))])]))), 128))])]), _: 1 })]));
} }), zw = Dt(jw, [["__scopeId", "data-v-990854bd"]]), Ww = { id: "resume", class: "resume-section" }, Gw = { class: "timeline" }, Uw = { class: "entry-rail" }, Zw = { class: "entry-dates glass-chip" }, Yw = { class: "entry quiet-sheet" }, Kw = { class: "entry-head" }, qw = { class: "entry-titleblock" }, Xw = { class: "entry-role" }, Jw = { class: "entry-subhead" }, Qw = { class: "entry-company" }, e_ = { class: "entry-work-location" }, t_ = { class: "entry-bullets" }, n_ = { key: 0, class: "entry-tech" }, r_ = { class: "entry-tech-items" }, i_ = { class: "entry-head" }, s_ = { class: "entry-titleblock" }, o_ = { class: "entry-role" }, a_ = { class: "entry-company" }, l_ = { class: "entry-meta" }, c_ = { class: "entry-dates" }, u_ = { class: "entry-location" }, f_ = { key: 0, class: "entry-focus" }, d_ = Xe({ __name: "ResumeSection", setup(e) {
  return (t, n) => (oe(), he("section", Ww, [k(Ai, { class: "resume-container" }, { default: De(() => [n[2] || (n[2] = P("div", { class: "resume-head" }, [P("div", { class: "resume-heading" }, [P("span", { class: "glass-chip section-kicker" }, "Resume"), P("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), P("ol", Gw, [(oe(true), he(ye, null, dt(ue(iw), (r) => (oe(), he("li", { key: `${r.company}-${r.dates}`, class: "timeline-row" }, [P("div", Uw, [P("span", Zw, be(r.dates), 1)]), P("article", Yw, [P("header", Kw, [P("div", qw, [P("h3", Xw, be(r.role), 1), P("div", Jw, [P("p", Qw, be(r.company), 1), P("span", e_, be(r.location), 1)])])]), P("ul", t_, [(oe(true), he(ye, null, dt(r.highlights, (i, s) => (oe(), he("li", { key: s }, be(i), 1))), 128))]), r.tech ? (oe(), he("div", n_, [n[0] || (n[0] = P("span", { class: "entry-tech-label" }, "Stack", -1)), P("span", r_, be(r.tech.join("  \xB7  ")), 1)])) : or("", true)])]))), 128))]), n[3] || (n[3] = P("div", { class: "edu-head" }, [P("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (oe(true), he(ye, null, dt(ue(sw), (r) => (oe(), he("div", { key: `${r.school}-${r.degree}`, class: "education-card glass-panel" }, [P("header", i_, [P("div", s_, [P("h3", o_, be(r.degree) + " \u2014 " + be(r.field), 1), P("p", a_, be(r.school), 1)]), P("div", l_, [P("span", c_, be(r.dates), 1), P("span", u_, be(r.location), 1)])]), r.focus ? (oe(), he("p", f_, [n[1] || (n[1] = P("span", { class: "entry-tech-label" }, "Focus", -1)), ti(" " + be(r.focus), 1)])) : or("", true)]))), 128))]), _: 1 })]));
} }), h_ = Dt(d_, [["__scopeId", "data-v-72166a64"]]), m_ = ["href", "aria-label"], g_ = { class: "contact-text" }, v_ = Xe({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => (oe(), he("div", { class: Ee(["contact-strip", { "is-dense": e.dense }]) }, [(oe(true), he(ye, null, dt(ue(Lh), (r) => (oe(), he("a", { key: r.label, href: r.href, "aria-label": r.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [k(it, { icon: r.icon, class: "contact-icon" }, null, 8, ["icon"]), P("span", g_, be(r.display ?? r.label), 1)], 8, m_))), 128))], 2));
} }), p_ = Dt(v_, [["__scopeId", "data-v-0c3dbac0"]]), y_ = { id: "contact", class: "contact-section" }, b_ = { class: "contact-band glass-panel" }, w_ = Xe({ __name: "ContactSection", setup(e) {
  return (t, n) => (oe(), he("section", y_, [k(Ai, { class: "contact-container" }, { default: De(() => [P("div", b_, [n[0] || (n[0] = P("div", { class: "contact-head" }, [P("span", { class: "glass-chip section-kicker" }, "Contact"), P("h2", { class: "contact-title" }, "Open to interesting problems."), P("p", { class: "contact-copy" })], -1)), k(p_, { class: "contact-strip-wrap" })])]), _: 1 })]));
} }), __ = Dt(w_, [["__scopeId", "data-v-e54dfca1"]]), S_ = { class: "about-section" }, C_ = { class: "content-surface about-card" }, x_ = { class: "section-heading" }, A_ = { class: "about-tagline" }, L_ = { class: "section-intro" }, E_ = { class: "about-meta" }, M_ = Xe({ __name: "AboutSection", setup(e) {
  return (t, n) => (oe(), he("section", S_, [k(Ai, { class: "about-container" }, { default: De(() => [P("div", C_, [n[0] || (n[0] = P("p", { class: "section-kicker" }, "About", -1)), P("h2", x_, be(ue(at).name), 1), P("p", A_, be(ue(at).tagline), 1), P("p", L_, be(ue(at).bio), 1), P("p", E_, be(ue(at).location), 1)])]), _: 1 })]));
} }), k_ = Dt(M_, [["__scopeId", "data-v-6126ab28"]]), T_ = Xe({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n } = Vn(), r = q(null);
  let i = null;
  return Lt(() => {
    const s = r.value;
    if (!s) return;
    const o = () => n(s.clientWidth, s.clientHeight);
    o(), i = new ResizeObserver(o), i.observe(s);
  }), vr(() => i == null ? void 0 : i.disconnect()), (s, o) => (oe(), he("div", { ref_key: "stageRef", ref: r, class: "world-stage" }, [P("div", { class: "world-plane", style: Re(ue(t)) }, [k(Rr, { "waypoint-id": "hero" }, { default: De(() => [k(xw)]), _: 1 }), k(Rr, { "waypoint-id": "projects" }, { default: De(() => [k(zw)]), _: 1 }), k(Rr, { "waypoint-id": "resume" }, { default: De(() => [k(h_)]), _: 1 }), k(Rr, { "waypoint-id": "contact" }, { default: De(() => [k(__)]), _: 1 }), k(Rr, { "waypoint-id": "about" }, { default: De(() => [k(k_)]), _: 1 })], 4)], 512));
} }), P_ = Dt(T_, [["__scopeId", "data-v-7b9c1dde"]]);
function cu(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function I_(e, t, n) {
  const r = Math.abs(e.x - (t.minX + n)), i = Math.abs(e.x - (t.maxX - n)), s = Math.abs(e.y - (t.minY + n)), o = Math.abs(e.y - (t.maxY - n)), a = Math.min(r, i, s, o);
  return a === r ? "L" : a === i ? "R" : a === s ? "T" : "B";
}
function uu(e, t) {
  e.wall === "L" ? e.x = t.minX + e.r : e.wall === "R" ? e.x = t.maxX - e.r : e.wall === "T" ? e.y = t.minY + e.r : e.y = t.maxY - e.r, e.x = cu(e.x, t.minX + e.r, t.maxX - e.r), e.y = cu(e.y, t.minY + e.r, t.maxY - e.r);
}
function R_(e, t) {
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
function O_(e, t, n) {
  const r = e.map((i) => {
    const s = (i.pos.x - i.prevPos.x) * n.friction, o = (i.pos.y - i.prevPos.y) * n.friction, a = (i.target.x - i.pos.x) * n.stiffness, l = (i.target.y - i.pos.y) * n.stiffness;
    return { x: i.pos.x + s + a, y: i.pos.y + o + l, r: i.radius, wall: I_(i.target, t, i.radius) };
  });
  for (const i of r) uu(i, t);
  for (let i = 0; i < n.iterations; i++) {
    for (let s = 0; s < r.length; s++) for (let o = s + 1; o < r.length; o++) R_(r[s], r[o]);
    for (const s of r) uu(s, t);
  }
  return r.map((i) => ({ x: i.x, y: i.y }));
}
function V_(e) {
  return { minX: Gs, minY: i1, maxX: e.w - Gs, maxY: e.h - Gs };
}
const D_ = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function H_() {
  const e = Vn(), t = xh(), n = q([]), r = /* @__PURE__ */ new Map(), i = D_();
  function s(c) {
    const f = e.camera.value, d = e.viewport.value, h = e.spacing.value, b = V_(d), m = { x: d.w / 2, y: d.h / 2 }, _ = pr.map((w) => {
      const E = yr(w, h);
      return { wp: w, dist: j2(E, f), bearing: Ah(E, f, d) };
    }).filter((w) => w.dist > jl), g = _.map((w) => w.dist), y = g.length ? Math.min(...g) : 0, A = g.length ? Math.max(...g) : 1, S = _.map((w) => {
      const E = z2(w.dist, y, A, Jv, Qv), I = G2(m, w.bearing, b, E), $ = r.get(w.wp.id) ?? { pos: I, prevPos: I };
      return { pos: $.pos, prevPos: $.prevPos, target: I, radius: E };
    }), C = O_(S, b, { stiffness: c ? 1 : t1, friction: c ? 0 : n1, iterations: r1 }), x = new Set(_.map((w) => w.wp.id));
    for (const w of [...r.keys()]) x.has(w) || r.delete(w);
    let T = true;
    return n.value = _.map((w, E) => {
      const I = C[E], $ = S[E].pos;
      r.set(w.wp.id, { pos: I, prevPos: $ });
      const R = S[E].target;
      return (Math.hypot(I.x - $.x, I.y - $.y) > 0.3 || Math.hypot(I.x - R.x, I.y - R.y) > 0.5) && (T = false), { id: w.wp.id, route: w.wp.route, label: w.wp.label, icon: w.wp.icon, x: I.x, y: I.y, radius: S[E].radius, bearing: w.bearing, opacity: Math.min(1, Math.max(0, (w.dist - jl) / e1)) };
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
  return te([() => e.camera.value.x, () => e.camera.value.y, () => e.viewport.value, () => e.spacing.value, e.isAnimating, () => t.name], u), Lt(() => i ? s(true) : u()), vr(() => {
    o && cancelAnimationFrame(o);
  }), n;
}
const N_ = { class: "compass", "aria-label": "Move to a section" }, F_ = ["aria-label", "title", "onClick"], $_ = Xe({ __name: "CompassNav", setup(e) {
  const t = Ch(), n = H_();
  function r(i) {
    t.push(i);
  }
  return (i, s) => (oe(), he("nav", N_, [(oe(true), he(ye, null, dt(ue(n), (o) => (oe(), he("button", { key: o.id, type: "button", class: "compass__marker", style: Re({ transform: `translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`, width: `${o.radius * 2}px`, height: `${o.radius * 2}px`, opacity: o.opacity, pointerEvents: o.opacity > 0.4 ? "auto" : "none" }), "aria-label": `Go to ${o.label}`, title: o.label, onClick: (a) => r(o.route) }, [P("span", { class: "compass__arrow", style: Re({ transform: `rotate(${o.bearing}rad)` }), "aria-hidden": "true" }, null, 4), k(it, { icon: o.icon, size: Math.round(o.radius), class: "compass__icon" }, null, 8, ["icon", "size"])], 12, F_))), 128))]));
} }), B_ = Dt($_, [["__scopeId", "data-v-8c614831"]]), j_ = J({ ...Ge(), ...Dn(_b(), ["fullHeight"]), ...Vt() }, "VApp"), z_ = Ae()({ name: "VApp", props: j_(), setup(e, t) {
  let { slots: n } = t;
  const r = Yt(e), { layoutClasses: i, getLayoutItem: s, items: o, layoutRef: a } = Ab({ ...e, fullHeight: true }), { rtlClasses: l } = xr();
  return Fe(() => {
    var _a2;
    return P("div", { ref: a, class: Ee(["v-application", r.themeClasses.value, i.value, l.value, e.class]), style: Re([e.style]) }, [P("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: s, items: o, theme: r };
} }), W_ = Xe({ __name: "App", setup(e) {
  return (t, n) => (oe(), sr(z_, { class: "app-shell" }, { default: De(() => [k(P0), k(Vb), k(P_), k(B_)]), _: 1 }));
} }), G_ = { collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z", info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z", checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z", sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z", expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", subgroup: "svg:M7,10L12,15L17,10H7Z", dropdown: "svg:M7,10L12,15L17,10H7Z", radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z", radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12", first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z", last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z", unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z", file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z", plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", minus: "svg:M19,13H5V11H19V13Z", calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", treeviewCollapse: "svg:M7,10L12,15L17,10H7Z", treeviewExpand: "svg:M10,17L15,12L10,7V17Z", tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z", upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z", color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8", command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z", ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z", space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z", shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z", alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z", enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z", arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z", arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z", arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z", arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z", backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z", play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z", pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z", fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z", volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z", volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z", volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z", search: "svg:M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, U_ = { component: La }, Z_ = ah({ icons: { defaultSet: "mdi", aliases: G_, sets: { mdi: U_ } }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function Y_(e) {
  const t = Vn();
  let n = true, r = null;
  const i = (s) => {
    var _a2;
    (_a2 = document.getElementById(`panel-${s}`)) == null ? void 0 : _a2.focus({ preventScroll: true });
  };
  e.afterEach((s) => {
    const o = $v(s.name);
    t.panToWaypoint(o, { snap: n }), n || (t.isAnimating.value ? r = o : i(o)), n = false;
  }), te(t.isAnimating, (s) => {
    !s && r !== null && (i(r), r = null);
  });
}
const K_ = Xe({ name: "RouteCoordinate", render: () => null }), q_ = [...pr.map((e) => ({ path: e.route, name: e.id, component: K_ })), { path: "/:pathMatch(.*)*", redirect: "/" }], Fa = B2({ history: b2("/"), routes: q_ }), X_ = Kg(W_).use(Z_).use(Fa);
Y_(Fa);
Fa.isReady().then(() => X_.mount("#app"));
