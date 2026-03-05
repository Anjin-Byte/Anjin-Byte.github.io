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
function _u(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const st = {}, Bl = [], Nn = () => {
}, Av = () => false, nr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Iu = (e) => e.startsWith("onUpdate:"), Pt = Object.assign, Pu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tS = Object.prototype.hasOwnProperty, nt = (e, t) => tS.call(e, t), Le = Array.isArray, Fl = (e) => Xo(e) === "[object Map]", Tv = (e) => Xo(e) === "[object Set]", gd = (e) => Xo(e) === "[object Date]", Re = (e) => typeof e == "function", mt = (e) => typeof e == "string", Hn = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", Dv = (e) => (tt(e) || Re(e)) && Re(e.then) && Re(e.catch), Mv = Object.prototype.toString, Xo = (e) => Mv.call(e), nS = (e) => Xo(e).slice(8, -1), Ev = (e) => Xo(e) === "[object Object]", ar = (e) => mt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ho = _u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), lr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, aS = /-\w/g, ln = lr((e) => e.replace(aS, (t) => t.slice(1).toUpperCase())), lS = /\B([A-Z])/g, fl = lr((e) => e.replace(lS, "-$1").toLowerCase()), Yn = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)), jr = lr((e) => e ? `on${Yn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Ii = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Bv = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Au = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, oS = (e) => {
  const t = mt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let hd;
const or = () => hd || (hd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ye(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = mt(a) ? uS(a) : ye(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (mt(e) || tt(e)) return e;
}
const iS = /;(?![^(]*\))/g, rS = /:([^]+)/, sS = /\/\*[^]*?\*\//g;
function uS(e) {
  const t = {};
  return e.replace(sS, "").split(iS).forEach((n) => {
    if (n) {
      const a = n.split(rS);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (mt(e)) t = e;
  else if (Le(e)) for (let n = 0; n < e.length; n++) {
    const a = ne(e[n]);
    a && (t += a + " ");
  }
  else if (tt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function cS(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !mt(t) && (e.class = ne(t)), n && (e.style = ye(n)), e;
}
const dS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", fS = _u(dS);
function Fv(e) {
  return !!e || e === "";
}
function vS(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Tu(e[a], t[a]);
  return n;
}
function Tu(e, t) {
  if (e === t) return true;
  let n = gd(e), a = gd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Hn(e), a = Hn(t), n || a) return e === t;
  if (n = Le(e), a = Le(t), n || a) return n && a ? vS(e, t) : false;
  if (n = tt(e), a = tt(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !Tu(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const $v = (e) => !!(e && e.__v_isRef === true), We = (e) => mt(e) ? e : e == null ? "" : Le(e) || tt(e) && (e.toString === Mv || !Re(e.toString)) ? $v(e) ? We(e.value) : JSON.stringify(e, Lv, 2) : String(e), Lv = (e, t) => $v(t) ? Lv(e, t.value) : Fl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Ur(a, o) + " =>"] = l, n), {}) } : Tv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ur(n)) } : Hn(t) ? Ur(t) : tt(t) && !Le(t) && !Ev(t) ? String(t) : t, Ur = (e, t = "") => {
  var n;
  return Hn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jt;
class Ov {
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
function Rl(e) {
  return new Ov(e);
}
function Rv() {
  return jt;
}
function gt(e, t = false) {
  jt && jt.cleanups.push(e);
}
let dt;
const Yr = /* @__PURE__ */ new WeakSet();
class Nv {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, jt && jt.active && jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yr.has(this) && (Yr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zv(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, yd(this), Wv(this);
    const t = dt, n = Cn;
    dt = this, Cn = true;
    try {
      return this.fn();
    } finally {
      jv(this), dt = t, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Eu(t);
      this.deps = this.depsTail = void 0, yd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Ss(this) && this.run();
  }
  get dirty() {
    return Ss(this);
  }
}
let Hv = 0, yo, bo;
function zv(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function Du() {
  Hv++;
}
function Mu() {
  if (--Hv > 0) return;
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
function Wv(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jv(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), Eu(a), mS(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Ss(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Uv(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Uv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io) || (e.globalVersion = Io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ss(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = dt, a = Cn;
  dt = e, Cn = true;
  try {
    Wv(e);
    const l = e.fn(e._value);
    (t.version === 0 || Va(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    dt = n, Cn = a, jv(e), e.flags &= -3;
  }
}
function Eu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Eu(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function mS(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Cn = true;
const Yv = [];
function oa() {
  Yv.push(Cn), Cn = false;
}
function ia() {
  const e = Yv.pop();
  Cn = e === void 0 ? true : e;
}
function yd(e) {
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
class gS {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!dt || !Cn || dt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== dt) n = this.activeLink = new gS(dt, this), dt.deps ? (n.prevDep = dt.depsTail, dt.depsTail.nextDep = n, dt.depsTail = n) : dt.deps = dt.depsTail = n, Gv(n);
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
    Du();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mu();
    }
  }
}
function Gv(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) Gv(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), qa = Symbol(""), ps = Symbol(""), Po = Symbol("");
function Ut(e, t, n) {
  if (Cn && dt) {
    let a = Bi.get(e);
    a || Bi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Bu()), l.map = a, l.key = n), l.track();
  }
}
function na(e, t, n, a, l, o) {
  const i = Bi.get(e);
  if (!i) {
    Io++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (Du(), t === "clear") i.forEach(r);
  else {
    const s = Le(e), u = s && ar(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !Hn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(Po)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(qa)), Fl(e) && r(i.get(ps)));
        break;
      case "delete":
        s || (r(i.get(qa)), Fl(e) && r(i.get(ps)));
        break;
      case "set":
        Fl(e) && r(i.get(qa));
        break;
    }
  }
  Mu();
}
function hS(e, t) {
  const n = Bi.get(e);
  return n && n.get(t);
}
function xl(e) {
  const t = Ee(e);
  return t === e ? t : (Ut(t, "iterate", Po), mn(e) ? t : t.map(In));
}
function ir(e) {
  return Ut(e = Ee(e), "iterate", Po), e;
}
function wa(e, t) {
  return ra(e) ? Nl(_a(e) ? In(t) : t) : In(t);
}
const yS = { __proto__: null, [Symbol.iterator]() {
  return Gr(this, Symbol.iterator, (e) => wa(this, e));
}, concat(...e) {
  return xl(this).concat(...e.map((t) => Le(t) ? xl(t) : t));
}, entries() {
  return Gr(this, "entries", (e) => (e[1] = wa(this, e[1]), e));
}, every(e, t) {
  return Zn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Zn(this, "filter", e, t, (n) => n.map((a) => wa(this, a)), arguments);
}, find(e, t) {
  return Zn(this, "find", e, t, (n) => wa(this, n), arguments);
}, findIndex(e, t) {
  return Zn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Zn(this, "findLast", e, t, (n) => wa(this, n), arguments);
}, findLastIndex(e, t) {
  return Zn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Zn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Kr(this, "includes", e);
}, indexOf(...e) {
  return Kr(this, "indexOf", e);
}, join(e) {
  return xl(this).join(e);
}, lastIndexOf(...e) {
  return Kr(this, "lastIndexOf", e);
}, map(e, t) {
  return Zn(this, "map", e, t, void 0, arguments);
}, pop() {
  return lo(this, "pop");
}, push(...e) {
  return lo(this, "push", e);
}, reduce(e, ...t) {
  return bd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return bd(this, "reduceRight", e, t);
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
  return Gr(this, "values", (e) => wa(this, e));
} };
function Gr(e, t, n) {
  const a = ir(e), l = a[t]();
  return a !== e && !mn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const bS = Array.prototype;
function Zn(e, t, n, a, l, o) {
  const i = ir(e), r = i !== e && !mn(e), s = i[t];
  if (s !== bS[t]) {
    const d = s.apply(e, o);
    return r ? In(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, wa(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function bd(e, t, n, a) {
  const l = ir(e);
  let o = n;
  return l !== e && (mn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, wa(e, r), s, e);
  }), l[t](o, ...a);
}
function Kr(e, t, n) {
  const a = Ee(e);
  Ut(a, "iterate", Po);
  const l = a[t](...n);
  return (l === -1 || l === false) && Zo(n[0]) ? (n[0] = Ee(n[0]), a[t](...n)) : l;
}
function lo(e, t, n = []) {
  oa(), Du();
  const a = Ee(e)[t].apply(e, n);
  return Mu(), ia(), a;
}
const SS = _u("__proto__,__v_isRef,__isVue"), Kv = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hn));
function pS(e) {
  Hn(e) || (e = String(e));
  const t = Ee(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class qv {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? TS : Qv : o ? Jv : Zv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Le(t);
    if (!l) {
      let s;
      if (i && (s = yS[n])) return s;
      if (n === "hasOwnProperty") return pS;
    }
    const r = Reflect.get(t, n, yt(t) ? t : a);
    if ((Hn(n) ? Kv.has(n) : SS(n)) || (l || Ut(t, "get", n), o)) return r;
    if (yt(r)) {
      const s = i && ar(n) ? r : r.value;
      return l && tt(s) ? tl(s) : s;
    }
    return tt(r) ? l ? tl(r) : At(r) : r;
  }
}
class Xv extends qv {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = Le(t) && ar(n);
    if (!this._isShallow) {
      const u = ra(o);
      if (!mn(a) && !ra(a) && (o = Ee(o), a = Ee(a)), !i && yt(o) && !yt(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : nt(t, n), s = Reflect.set(t, n, a, yt(t) ? t : l);
    return t === Ee(l) && (r ? Va(a, o) && na(t, "set", n, a) : na(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = nt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && na(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Hn(n) || !Kv.has(n)) && Ut(t, "has", n), a;
  }
  ownKeys(t) {
    return Ut(t, "iterate", Le(t) ? "length" : qa), Reflect.ownKeys(t);
  }
}
class kS extends qv {
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
const wS = new Xv(), xS = new kS(), CS = new Xv(true);
const ks = (e) => e, gi = (e) => Reflect.getPrototypeOf(e);
function VS(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Ee(l), i = Fl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? ks : t ? Nl : In;
    return !t && Ut(o, "iterate", s ? ps : qa), Pt(Object.create(u), { next() {
      const { value: d, done: f } = u.next();
      return f ? { value: d, done: f } : { value: r ? [c(d[0]), c(d[1])] : c(d), done: f };
    } });
  };
}
function hi(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function _S(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = Ee(o), r = Ee(l);
    e || (Va(l, r) && Ut(i, "get", l), Ut(i, "get", r));
    const { has: s } = gi(i), u = t ? ks : e ? Nl : In;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Ut(Ee(l), "iterate", qa), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Ee(o), r = Ee(l);
    return e || (Va(l, r) && Ut(i, "has", l), Ut(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Ee(r), u = t ? ks : e ? Nl : In;
    return !e && Ut(s, "iterate", qa), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return Pt(n, e ? { add: hi("add"), set: hi("set"), delete: hi("delete"), clear: hi("clear") } : { add(l) {
    !t && !mn(l) && !ra(l) && (l = Ee(l));
    const o = Ee(this);
    return gi(o).has.call(o, l) || (o.add(l), na(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !mn(o) && !ra(o) && (o = Ee(o));
    const i = Ee(this), { has: r, get: s } = gi(i);
    let u = r.call(i, l);
    u || (l = Ee(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Va(o, c) && na(i, "set", l, o) : na(i, "add", l, o), this;
  }, delete(l) {
    const o = Ee(this), { has: i, get: r } = gi(o);
    let s = i.call(o, l);
    s || (l = Ee(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && na(o, "delete", l, void 0), u;
  }, clear() {
    const l = Ee(this), o = l.size !== 0, i = l.clear();
    return o && na(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = VS(l, e, t);
  }), n;
}
function Fu(e, t) {
  const n = _S(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(nt(n, l) && l in a ? n : a, l, o);
}
const IS = { get: Fu(false, false) }, PS = { get: Fu(false, true) }, AS = { get: Fu(true, false) };
const Zv = /* @__PURE__ */ new WeakMap(), Jv = /* @__PURE__ */ new WeakMap(), Qv = /* @__PURE__ */ new WeakMap(), TS = /* @__PURE__ */ new WeakMap();
function DS(e) {
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
function MS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : DS(nS(e));
}
function At(e) {
  return ra(e) ? e : $u(e, false, wS, IS, Zv);
}
function ES(e) {
  return $u(e, false, CS, PS, Jv);
}
function tl(e) {
  return $u(e, true, xS, AS, Qv);
}
function $u(e, t, n, a, l) {
  if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = MS(e);
  if (o === 0) return e;
  const i = l.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? a : n);
  return l.set(e, r), r;
}
function _a(e) {
  return ra(e) ? _a(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ra(e) {
  return !!(e && e.__v_isReadonly);
}
function mn(e) {
  return !!(e && e.__v_isShallow);
}
function Zo(e) {
  return e ? !!e.__v_raw : false;
}
function Ee(e) {
  const t = e && e.__v_raw;
  return t ? Ee(t) : e;
}
function em(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && Bv(e, "__v_skip", true), e;
}
const In = (e) => tt(e) ? At(e) : e, Nl = (e) => tt(e) ? tl(e) : e;
function yt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return tm(e, false);
}
function ue(e) {
  return tm(e, true);
}
function tm(e, t) {
  return yt(e) ? e : new BS(e, t);
}
class BS {
  constructor(t, n) {
    this.dep = new Bu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ee(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || mn(t) || ra(t);
    t = a ? t : Ee(t), Va(t, n) && (this._rawValue = t, this._value = a ? t : In(t), this.dep.trigger());
  }
}
function Et(e) {
  return yt(e) ? e.value : e;
}
function at(e) {
  return Re(e) ? e() : Et(e);
}
const FS = { get: (e, t, n) => t === "__v_raw" ? e : Et(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return yt(l) && !yt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function nm(e) {
  return _a(e) ? e : new Proxy(e, FS);
}
function Xl(e) {
  const t = Le(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = am(e, n);
  return t;
}
class $S {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Ee(t);
    let l = true, o = t;
    if (!Le(t) || !ar(String(n))) do
      l = !Zo(o) || mn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Et(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && yt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (yt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return hS(this._raw, this._key);
  }
}
class LS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function F(e, t, n) {
  return yt(e) ? e : Re(e) ? new LS(e) : tt(e) && arguments.length > 1 ? am(e, t, n) : K(e);
}
function am(e, t, n) {
  return new $S(e, t, n);
}
class OS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Bu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && dt !== this) return zv(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Uv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function RS(e, t, n = false) {
  let a, l;
  return Re(e) ? a = e : (a = e.get, l = e.set), new OS(a, l, n);
}
const yi = {}, Fi = /* @__PURE__ */ new WeakMap();
let Ua;
function NS(e, t = false, n = Ua) {
  if (n) {
    let a = Fi.get(n);
    a || Fi.set(n, a = []), a.push(e);
  }
}
function HS(e, t, n = st) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (I) => l ? I : mn(I) || l === false || l === 0 ? aa(I, 1) : aa(I);
  let c, d, f, v, S = false, m = false;
  if (yt(e) ? (d = () => e.value, S = mn(e)) : _a(e) ? (d = () => u(e), S = true) : Le(e) ? (m = true, S = e.some((I) => _a(I) || mn(I)), d = () => e.map((I) => {
    if (yt(I)) return I.value;
    if (_a(I)) return u(I);
    if (Re(I)) return s ? s(I, 2) : I();
  })) : Re(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      oa();
      try {
        f();
      } finally {
        ia();
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
    const I = d, k = l === true ? 1 / 0 : l;
    d = () => aa(I(), k);
  }
  const b = Rv(), h = () => {
    c.stop(), b && b.active && Pu(b.effects, c);
  };
  if (o && t) {
    const I = t;
    t = (...k) => {
      I(...k), h();
    };
  }
  let x = m ? new Array(e.length).fill(yi) : yi;
  const _ = (I) => {
    if (!(!(c.flags & 1) || !c.dirty && !I)) if (t) {
      const k = c.run();
      if (l || S || (m ? k.some((y, C) => Va(y, x[C])) : Va(k, x))) {
        f && f();
        const y = Ua;
        Ua = c;
        try {
          const C = [k, x === yi ? void 0 : m && x[0] === yi ? [] : x, v];
          x = k, s ? s(t, 3, C) : t(...C);
        } finally {
          Ua = y;
        }
      }
    } else c.run();
  };
  return r && r(_), c = new Nv(d), c.scheduler = i ? () => i(_, false) : _, v = (I) => NS(I, false, c), f = c.onStop = () => {
    const I = Fi.get(c);
    if (I) {
      if (s) s(I, 4);
      else for (const k of I) k();
      Fi.delete(c);
    }
  }, t ? a ? _(true) : x = c.run() : i ? i(_.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function aa(e, t = 1 / 0, n) {
  if (t <= 0 || !tt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, yt(e)) aa(e.value, t, n);
  else if (Le(e)) for (let a = 0; a < e.length; a++) aa(e[a], t, n);
  else if (Tv(e) || Fl(e)) e.forEach((a) => {
    aa(a, t, n);
  });
  else if (Ev(e)) {
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
    rr(l, t, n);
  }
}
function Pn(e, t, n, a) {
  if (Re(e)) {
    const l = Jo(e, t, n, a);
    return l && Dv(l) && l.catch((o) => {
      rr(o, t, n);
    }), l;
  }
  if (Le(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(Pn(e[o], t, n, a));
    return l;
  }
}
function rr(e, t, n, a = true) {
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
      oa(), Jo(o, null, 10, [e, s, u]), ia();
      return;
    }
  }
  zS(e, n, l, a, i);
}
function zS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const en = [];
let Fn = -1;
const $l = [];
let xa = null, Pl = 0;
const lm = Promise.resolve();
let $i = null;
function Be(e) {
  const t = $i || lm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function WS(e) {
  let t = Fn + 1, n = en.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = en[a], o = Ao(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Lu(e) {
  if (!(e.flags & 1)) {
    const t = Ao(e), n = en[en.length - 1];
    !n || !(e.flags & 2) && t >= Ao(n) ? en.push(e) : en.splice(WS(t), 0, e), e.flags |= 1, om();
  }
}
function om() {
  $i || ($i = lm.then(rm));
}
function jS(e) {
  Le(e) ? $l.push(...e) : xa && e.id === -1 ? xa.splice(Pl + 1, 0, e) : e.flags & 1 || ($l.push(e), e.flags |= 1), om();
}
function Sd(e, t, n = Fn + 1) {
  for (; n < en.length; n++) {
    const a = en[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      en.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function im(e) {
  if ($l.length) {
    const t = [...new Set($l)].sort((n, a) => Ao(n) - Ao(a));
    if ($l.length = 0, xa) {
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
function rm(e) {
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
    Fn = -1, en.length = 0, im(), $i = null, (en.length || $l.length) && rm();
  }
}
let un = null, sm = null;
function Li(e) {
  const t = un;
  return un = e, sm = e && e.type.__scopeId || null, t;
}
function Ce(e, t = un, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && Ni(-1);
    const o = Li(t);
    let i;
    try {
      i = e(...l);
    } finally {
      Li(o), a._d && Ni(1);
    }
    return i;
  };
  return a._n = true, a._c = true, a._d = true, a;
}
function lt(e, t) {
  if (un === null) return e;
  const n = vr(un), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = st] = t[l];
    o && (Re(o) && (o = { mounted: o, updated: o }), o.deep && aa(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Na(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (oa(), Pn(s, n, 8, [e.el, r, e, t]), ia());
  }
}
function rt(e, t) {
  if (Gt) {
    let n = Gt.provides;
    const a = Gt.parent && Gt.parent.provides;
    a === n && (n = Gt.provides = Object.create(a)), n[e] = t;
  }
}
function He(e, t, n = false) {
  const a = ei();
  if (a || Ll) {
    let l = Ll ? Ll._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Re(t) ? t.call(a && a.proxy) : t;
  }
}
const US = Symbol.for("v-scx"), YS = () => He(US);
function ut(e, t) {
  return Ou(e, null, t);
}
function ce(e, t, n) {
  return Ou(e, t, n);
}
function Ou(e, t, n = st) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = Pt({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Eo) {
    if (o === "sync") {
      const v = YS();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Nn, v.resume = Nn, v.pause = Nn, v;
    }
  }
  const c = Gt;
  r.call = (v, S, m) => Pn(v, c, S, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    Wt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, S) => {
    S ? v() : Lu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = HS(e, t, r);
  return Eo && (u ? u.push(f) : s && f()), f;
}
function GS(e, t, n) {
  const a = this.proxy, l = mt(e) ? e.includes(".") ? um(a, e) : () => a[e] : e.bind(a, a);
  let o;
  Re(t) ? o = t : (o = t.handler, n = t);
  const i = ti(this), r = Ou(l, o.bind(a), n);
  return i(), r;
}
function um(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const cm = Symbol("_vte"), dm = (e) => e.__isTeleport, So = (e) => e && (e.disabled || e.disabled === ""), pd = (e) => e && (e.defer || e.defer === ""), kd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ws = (e, t) => {
  const n = e && e.to;
  return mt(n) ? t ? t(n) : null : n;
}, fm = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: S, createText: m, createComment: b } } = u, h = So(t.props);
  let { shapeFlag: x, children: _, dynamicChildren: I } = t;
  if (e == null) {
    const k = t.el = m(""), y = t.anchor = m("");
    v(k, n, a), v(y, n, a);
    const C = (T, A) => {
      x & 16 && c(_, T, A, l, o, i, r, s);
    }, p = () => {
      const T = t.target = ws(t.props, S), A = xs(T, t, m, v);
      T && (i !== "svg" && kd(T) ? i = "svg" : i !== "mathml" && wd(T) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), h || (C(T, A), Pi(t, false)));
    };
    h && (C(n, y), Pi(t, true)), pd(t.props) ? (t.el.__isMounted = false, Wt(() => {
      p(), delete t.el.__isMounted;
    }, o)) : p();
  } else {
    if (pd(t.props) && e.el.__isMounted === false) {
      Wt(() => {
        fm.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const k = t.anchor = e.anchor, y = t.target = e.target, C = t.targetAnchor = e.targetAnchor, p = So(e.props), T = p ? n : y, A = p ? k : C;
    if (i === "svg" || kd(y) ? i = "svg" : (i === "mathml" || wd(y)) && (i = "mathml"), I ? (f(e.dynamicChildren, I, T, l, o, i, r), Wu(e, t, true)) : s || d(e, t, T, A, l, o, i, r, false), h) p ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bi(t, n, k, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = ws(t.props, S);
      E && bi(t, E, null, u, 0);
    } else p && bi(t, y, C, u, 1);
    Pi(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const v = o || !So(f);
    for (let S = 0; S < r.length; S++) {
      const m = r[S];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: bi, hydrate: KS };
function bi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || So(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function KS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
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
  const S = t.target = ws(t.props, s), m = So(t.props);
  if (S) {
    const b = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(S, b), t.targetAnchor || xs(S, t, c, u, r(e) === S ? e : null)) : (t.anchor = i(e), f(S, b), t.targetAnchor || xs(S, t, c, u), d(b && i(b), t, S, n, a, l, o))), Pi(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const qS = fm;
function Pi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function xs(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[cm] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Ln = Symbol("_leaveCb"), oo = Symbol("_enterCb");
function vm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return wt(() => {
    e.isMounted = true;
  }), Nt(() => {
    e.isUnmounting = true;
  }), e;
}
const Sn = [Function, Array], mm = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Sn, onEnter: Sn, onAfterEnter: Sn, onEnterCancelled: Sn, onBeforeLeave: Sn, onLeave: Sn, onAfterLeave: Sn, onLeaveCancelled: Sn, onBeforeAppear: Sn, onAppear: Sn, onAfterAppear: Sn, onAppearCancelled: Sn }, gm = (e) => {
  const t = e.subTree;
  return t.component ? gm(t.component) : t;
}, XS = { name: "BaseTransition", props: mm, setup(e, { slots: t }) {
  const n = ei(), a = vm();
  return () => {
    const l = t.default && Ru(t.default(), true);
    if (!l || !l.length) return;
    const o = hm(l), i = Ee(e), { mode: r } = i;
    if (a.isLeaving) return qr(o);
    const s = xd(o);
    if (!s) return qr(o);
    let u = To(s, i, a, n, (d) => u = d);
    s.type !== Yt && nl(s, u);
    let c = n.subTree && xd(n.subTree);
    if (c && c.type !== Yt && !Ga(c, s) && gm(n).type !== Yt) {
      let d = To(c, i, a, n);
      if (nl(c, d), r === "out-in" && s.type !== Yt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, qr(o);
      r === "in-out" && s.type !== Yt ? d.delayLeave = (f, v, S) => {
        const m = ym(a, c);
        m[String(c.key)] = c, f[Ln] = () => {
          v(), f[Ln] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          S(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function hm(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Yt) {
      t = n;
      break;
    }
  }
  return t;
}
const ZS = XS;
function ym(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function To(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: S, onLeaveCancelled: m, onBeforeAppear: b, onAppear: h, onAfterAppear: x, onAppearCancelled: _ } = t, I = String(e.key), k = ym(n, e), y = (T, A) => {
    T && Pn(T, a, 9, A);
  }, C = (T, A) => {
    const E = A[1];
    y(T, A), Le(T) ? T.every((B) => B.length <= 1) && E() : T.length <= 1 && E();
  }, p = { mode: i, persisted: r, beforeEnter(T) {
    let A = s;
    if (!n.isMounted) if (o) A = b || s;
    else return;
    T[Ln] && T[Ln](true);
    const E = k[I];
    E && Ga(e, E) && E.el[Ln] && E.el[Ln](), y(A, [T]);
  }, enter(T) {
    if (k[I] === e) return;
    let A = u, E = c, B = d;
    if (!n.isMounted) if (o) A = h || u, E = x || c, B = _ || d;
    else return;
    let M = false;
    T[oo] = (L) => {
      M || (M = true, L ? y(B, [T]) : y(E, [T]), p.delayedLeave && p.delayedLeave(), T[oo] = void 0);
    };
    const D = T[oo].bind(null, false);
    A ? C(A, [T, D]) : D();
  }, leave(T, A) {
    const E = String(e.key);
    if (T[oo] && T[oo](true), n.isUnmounting) return A();
    y(f, [T]);
    let B = false;
    T[Ln] = (D) => {
      B || (B = true, A(), D ? y(m, [T]) : y(S, [T]), T[Ln] = void 0, k[E] === e && delete k[E]);
    };
    const M = T[Ln].bind(null, false);
    k[E] = e, v ? C(v, [T, M]) : M();
  }, clone(T) {
    const A = To(T, t, n, a, l);
    return l && l(A), A;
  } };
  return p;
}
function qr(e) {
  if (sr(e)) return e = sa(e), e.children = null, e;
}
function xd(e) {
  if (!sr(e)) return dm(e.type) && e.children ? hm(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Re(n.default)) return n.default();
  }
}
function nl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, nl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ru(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && l++, a = a.concat(Ru(i.children, t, r))) : (t || i.type !== Yt) && a.push(r != null ? sa(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function da(e, t) {
  return Re(e) ? Pt({ name: e.name }, t, { setup: e }) : e;
}
function Mt() {
  const e = ei();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function bm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Oi = /* @__PURE__ */ new WeakMap();
function po(e, t, n, a, l = false) {
  if (Le(e)) {
    e.forEach((m, b) => po(m, t && (Le(t) ? t[b] : t), n, a, l));
    return;
  }
  if (ko(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && po(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? vr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === st ? r.refs = {} : r.refs, d = r.setupState, f = Ee(d), v = d === st ? Av : (m) => Cd(c, m) ? false : nt(f, m), S = (m, b) => !(b && Cd(c, b));
  if (u != null && u !== s) {
    if (Vd(t), mt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (yt(u)) {
      const m = t;
      S(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (Re(s)) Jo(s, r, 12, [i, c]);
  else {
    const m = mt(s), b = yt(s);
    if (m || b) {
      const h = () => {
        if (e.f) {
          const x = m ? v(s) ? d[s] : c[s] : S() || !e.k ? s.value : c[e.k];
          if (l) Le(x) && Pu(x, o);
          else if (Le(x)) x.includes(o) || x.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const _ = [o];
            S(s, e.k) && (s.value = _), e.k && (c[e.k] = _);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : b && (S(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const x = () => {
          h(), Oi.delete(e);
        };
        x.id = -1, Oi.set(e, x), Wt(x, n);
      } else Vd(e), h();
    }
  }
}
function Vd(e) {
  const t = Oi.get(e);
  t && (t.flags |= 8, Oi.delete(e));
}
or().requestIdleCallback;
or().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function Sm(e, t) {
  pm(e, "a", t);
}
function Nu(e, t) {
  pm(e, "da", t);
}
function pm(e, t, n = Gt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (ur(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) sr(l.parent.vnode) && JS(a, t, n, l), l = l.parent;
  }
}
function JS(e, t, n, a) {
  const l = ur(t, e, a, true);
  dr(() => {
    Pu(a[t], l);
  }, n);
}
function ur(e, t, n = Gt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      oa();
      const r = ti(n), s = Pn(t, n, e, i);
      return r(), ia(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const fa = (e) => (t, n = Gt) => {
  (!Eo || e === "sp") && ur(e, (...a) => t(...a), n);
}, Zl = fa("bm"), wt = fa("m"), km = fa("bu"), cr = fa("u"), Nt = fa("bum"), dr = fa("um"), QS = fa("sp"), ep = fa("rtg"), tp = fa("rtc");
function np(e, t = Gt) {
  ur("ec", e, t);
}
const wm = "components";
function Ge(e, t) {
  return xm(wm, e, true, t) || e;
}
const ap = Symbol.for("v-ndc");
function lp(e) {
  return mt(e) && xm(wm, e, false) || e;
}
function xm(e, t, n = true, a = false) {
  const l = un || Gt;
  if (l) {
    const o = l.type;
    {
      const r = Np(o, false);
      if (r && (r === t || r === ln(t) || r === Yn(ln(t)))) return o;
    }
    const i = _d(l[e] || o[e], t) || _d(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function _d(e, t) {
  return e && (e[t] || e[ln(t)] || e[Yn(ln(t))]);
}
function al(e, t, n, a) {
  let l;
  const o = n, i = Le(e);
  if (i || mt(e)) {
    const r = i && _a(e);
    let s = false, u = false;
    r && (s = !mn(e), u = ra(e), e = ir(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Nl(In(e[c])) : In(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, o);
  } else if (tt(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, o));
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
const Cs = (e) => e ? Wm(e) ? vr(e) : Cs(e.parent) : null, wo = Pt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Cs(e.parent), $root: (e) => Cs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Vm(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Lu(e.update);
}), $nextTick: (e) => e.n || (e.n = Be.bind(e.proxy)), $watch: (e) => GS.bind(e) }), Xr = (e, t) => e !== st && !e.__isScriptSetup && nt(e, t), op = { get({ _: e }, t) {
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
      if (Xr(a, t)) return i[t] = 1, a[t];
      if (l !== st && nt(l, t)) return i[t] = 2, l[t];
      if (nt(o, t)) return i[t] = 3, o[t];
      if (n !== st && nt(n, t)) return i[t] = 4, n[t];
      Vs && (i[t] = 0);
    }
  }
  const u = wo[t];
  let c, d;
  if (u) return t === "$attrs" && Ut(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== st && nt(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, nt(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return Xr(l, t) ? (l[t] = n, true) : a !== st && nt(a, t) ? (a[t] = n, true) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== st && r[0] !== "$" && nt(e, r) || Xr(t, r) || nt(o, r) || nt(a, r) || nt(wo, r) || nt(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Id(e) {
  return Le(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Vs = true;
function ip(e) {
  const t = Vm(e), n = e.proxy, a = e.ctx;
  Vs = false, t.beforeCreate && Pd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: S, activated: m, deactivated: b, beforeDestroy: h, beforeUnmount: x, destroyed: _, unmounted: I, render: k, renderTracked: y, renderTriggered: C, errorCaptured: p, serverPrefetch: T, expose: A, inheritAttrs: E, components: B, directives: M, filters: D } = t;
  if (u && rp(u, a, null), i) for (const H in i) {
    const Q = i[H];
    Re(Q) && (a[H] = Q.bind(n));
  }
  if (l) {
    const H = l.call(n, n);
    tt(H) && (e.data = At(H));
  }
  if (Vs = true, o) for (const H in o) {
    const Q = o[H], J = Re(Q) ? Q.bind(n, n) : Re(Q.get) ? Q.get.bind(n, n) : Nn, R = !Re(Q) && Re(Q.set) ? Q.set.bind(n) : Nn, Z = V({ get: J, set: R });
    Object.defineProperty(a, H, { enumerable: true, configurable: true, get: () => Z.value, set: (U) => Z.value = U });
  }
  if (r) for (const H in r) Cm(r[H], a, n, H);
  if (s) {
    const H = Re(s) ? s.call(n) : s;
    Reflect.ownKeys(H).forEach((Q) => {
      rt(Q, H[Q]);
    });
  }
  c && Pd(c, e, "c");
  function j(H, Q) {
    Le(Q) ? Q.forEach((J) => H(J.bind(n))) : Q && H(Q.bind(n));
  }
  if (j(Zl, d), j(wt, f), j(km, v), j(cr, S), j(Sm, m), j(Nu, b), j(np, p), j(tp, y), j(ep, C), j(Nt, x), j(dr, I), j(QS, T), Le(A)) if (A.length) {
    const H = e.exposed || (e.exposed = {});
    A.forEach((Q) => {
      Object.defineProperty(H, Q, { get: () => n[Q], set: (J) => n[Q] = J, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  k && e.render === Nn && (e.render = k), E != null && (e.inheritAttrs = E), B && (e.components = B), M && (e.directives = M), T && bm(e);
}
function rp(e, t, n = Nn) {
  Le(e) && (e = _s(e));
  for (const a in e) {
    const l = e[a];
    let o;
    tt(l) ? "default" in l ? o = He(l.from || a, l.default, true) : o = He(l.from || a) : o = He(l), yt(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function Pd(e, t, n) {
  Pn(Le(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Cm(e, t, n, a) {
  let l = a.includes(".") ? um(n, a) : () => n[a];
  if (mt(e)) {
    const o = t[e];
    Re(o) && ce(l, o);
  } else if (Re(e)) ce(l, e.bind(n));
  else if (tt(e)) if (Le(e)) e.forEach((o) => Cm(o, t, n, a));
  else {
    const o = Re(e.handler) ? e.handler.bind(n) : t[e.handler];
    Re(o) && ce(l, o, e);
  }
}
function Vm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Ri(s, u, i, true)), Ri(s, t, i)), tt(t) && o.set(t, s), s;
}
function Ri(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Ri(e, o, n, true), l && l.forEach((i) => Ri(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = sp[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const sp = { data: Ad, props: Td, emits: Td, methods: fo, computed: fo, beforeCreate: Jt, created: Jt, beforeMount: Jt, mounted: Jt, beforeUpdate: Jt, updated: Jt, beforeDestroy: Jt, beforeUnmount: Jt, destroyed: Jt, unmounted: Jt, activated: Jt, deactivated: Jt, errorCaptured: Jt, serverPrefetch: Jt, components: fo, directives: fo, watch: cp, provide: Ad, inject: up };
function Ad(e, t) {
  return t ? e ? function() {
    return Pt(Re(e) ? e.call(this, this) : e, Re(t) ? t.call(this, this) : t);
  } : t : e;
}
function up(e, t) {
  return fo(_s(e), _s(t));
}
function _s(e) {
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
  return e ? Pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Td(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pt(/* @__PURE__ */ Object.create(null), Id(e), Id(t ?? {})) : t;
}
function cp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = Jt(e[a], t[a]);
  return n;
}
function _m() {
  return { app: null, config: { isNativeTag: Av, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let dp = 0;
function fp(e, t) {
  return function(a, l = null) {
    Re(a) || (a = Pt({}, a)), l != null && !tt(l) && (l = null);
    const o = _m(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: dp++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: zp, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...d) {
      return i.has(c) || (c && Re(c.install) ? (i.add(c), c.install(u, ...d)) : Re(c) && (i.add(c), c(u, ...d))), u;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), u;
    }, component(c, d) {
      return d ? (o.components[c] = d, u) : o.components[c];
    }, directive(c, d) {
      return d ? (o.directives[c] = d, u) : o.directives[c];
    }, mount(c, d, f) {
      if (!s) {
        const v = u._ceVNode || g(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, vr(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (Pn(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
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
const vp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ln(t)}Modifiers`] || e[`${fl(t)}Modifiers`];
function mp(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || st;
  let l = n;
  const o = t.startsWith("update:"), i = o && vp(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => mt(c) ? c.trim() : c)), i.number && (l = n.map(Au)));
  let r, s = a[r = jr(t)] || a[r = jr(ln(t))];
  !s && o && (s = a[r = jr(fl(t))]), s && Pn(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Pn(u, e, 6, l);
  }
}
const gp = /* @__PURE__ */ new WeakMap();
function Im(e, t, n = false) {
  const a = n ? gp : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!Re(e)) {
    const s = (u) => {
      const c = Im(u, t, true);
      c && (r = true, Pt(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (tt(e) && a.set(e, null), null) : (Le(o) ? o.forEach((s) => i[s] = null) : Pt(i, o), tt(e) && a.set(e, i), i);
}
function fr(e, t) {
  return !e || !nr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, fl(t)) || nt(e, t));
}
function Dd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: S, inheritAttrs: m } = e, b = Li(e);
  let h, x;
  try {
    if (n.shapeFlag & 4) {
      const I = l || a, k = I;
      h = On(u.call(k, I, c, d, v, f, S)), x = r;
    } else {
      const I = t;
      h = On(I.length > 1 ? I(d, { attrs: r, slots: i, emit: s }) : I(d, null)), x = t.props ? r : hp(r);
    }
  } catch (I) {
    xo.length = 0, rr(I, e, 1), h = g(Yt);
  }
  let _ = h;
  if (x && m !== false) {
    const I = Object.keys(x), { shapeFlag: k } = _;
    I.length && k & 7 && (o && I.some(Iu) && (x = yp(x, o)), _ = sa(_, x, false, true));
  }
  return n.dirs && (_ = sa(_, null, false, true), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && nl(_, n.transition), h = _, Li(b), h;
}
const hp = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || nr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yp = (e, t) => {
  const n = {};
  for (const a in e) (!Iu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function bp(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Md(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Pm(i, a, f) && !fr(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Md(a, i, u) : true : !!i;
  return false;
}
function Md(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (Pm(t, e, o) && !fr(n, o)) return true;
  }
  return false;
}
function Pm(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && tt(a) && tt(l) ? !Tu(a, l) : a !== l;
}
function Sp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Am = {}, Tm = () => Object.create(Am), Dm = (e) => Object.getPrototypeOf(e) === Am;
function pp(e, t, n, a = false) {
  const l = {}, o = Tm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mm(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : ES(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function kp(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Ee(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (fr(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (nt(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const S = ln(f);
          l[S] = Is(s, r, S, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    Mm(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !nt(t, d) && ((c = fl(d)) === d || !nt(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Is(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !nt(t, d)) && (delete o[d], u = true);
  }
  u && na(e.attrs, "set", "");
}
function Mm(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (ho(s)) continue;
    const u = t[s];
    let c;
    l && nt(l, c = ln(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : fr(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = Ee(n), u = r || st;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Is(l, s, d, u[d], e, !nt(u, d));
    }
  }
  return i;
}
function Is(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = nt(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && Re(s)) {
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
const wp = /* @__PURE__ */ new WeakMap();
function Em(e, t, n = false) {
  const a = n ? wp : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!Re(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = Em(d, t, true);
      Pt(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return tt(e) && a.set(e, Bl), Bl;
  if (Le(o)) for (let c = 0; c < o.length; c++) {
    const d = ln(o[c]);
    Ed(d) && (i[d] = st);
  }
  else if (o) for (const c in o) {
    const d = ln(c);
    if (Ed(d)) {
      const f = o[c], v = i[d] = Le(f) || Re(f) ? { type: f } : Pt({}, f), S = v.type;
      let m = false, b = true;
      if (Le(S)) for (let h = 0; h < S.length; ++h) {
        const x = S[h], _ = Re(x) && x.name;
        if (_ === "Boolean") {
          m = true;
          break;
        } else _ === "String" && (b = false);
      }
      else m = Re(S) && S.name === "Boolean";
      v[0] = m, v[1] = b, (m || nt(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return tt(e) && a.set(e, u), u;
}
function Ed(e) {
  return e[0] !== "$" && !ho(e);
}
const Hu = (e) => e === "_" || e === "_ctx" || e === "$stable", zu = (e) => Le(e) ? e.map(On) : [On(e)], xp = (e, t, n) => {
  if (t._n) return t;
  const a = Ce((...l) => zu(t(...l)), n);
  return a._c = false, a;
}, Bm = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Hu(l)) continue;
    const o = e[l];
    if (Re(o)) t[l] = xp(l, o, a);
    else if (o != null) {
      const i = zu(o);
      t[l] = () => i;
    }
  }
}, Fm = (e, t) => {
  const n = zu(t);
  e.slots.default = () => n;
}, $m = (e, t, n) => {
  for (const a in t) (n || !Hu(a)) && (e[a] = t[a]);
}, Cp = (e, t, n) => {
  const a = e.slots = Tm();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? ($m(a, t, n), n && Bv(a, "_", l, true)) : Bm(t, a);
  } else t && Fm(e, t);
}, Vp = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = st;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : $m(l, t, n) : (o = !t.$stable, Bm(t, l)), i = t;
  } else t && (Fm(e, t), i = { default: 1 });
  if (o) for (const r in l) !Hu(r) && i[r] == null && delete l[r];
}, Wt = Tp;
function _p(e) {
  return Ip(e);
}
function Ip(e, t) {
  const n = or();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Nn, insertStaticContent: S } = e, m = (P, $, q, oe = null, ae = null, se = null, me = void 0, de = null, G = !!$.dynamicChildren) => {
    if (P === $) return;
    P && !Ga(P, $) && (oe = te(P), U(P, ae, se, true), P = null), $.patchFlag === -2 && (G = false, $.dynamicChildren = null);
    const { type: ie, ref: _e, shapeFlag: N } = $;
    switch (ie) {
      case Qo:
        b(P, $, q, oe);
        break;
      case Yt:
        h(P, $, q, oe);
        break;
      case Jr:
        P == null && x($, q, oe, me);
        break;
      case be:
        B(P, $, q, oe, ae, se, me, de, G);
        break;
      default:
        N & 1 ? k(P, $, q, oe, ae, se, me, de, G) : N & 6 ? M(P, $, q, oe, ae, se, me, de, G) : (N & 64 || N & 128) && ie.process(P, $, q, oe, ae, se, me, de, G, we);
    }
    _e != null && ae ? po(_e, P && P.ref, se, $ || P, !$) : _e == null && P && P.ref != null && po(P.ref, null, se, P, true);
  }, b = (P, $, q, oe) => {
    if (P == null) a($.el = r($.children), q, oe);
    else {
      const ae = $.el = P.el;
      $.children !== P.children && u(ae, $.children);
    }
  }, h = (P, $, q, oe) => {
    P == null ? a($.el = s($.children || ""), q, oe) : $.el = P.el;
  }, x = (P, $, q, oe) => {
    [P.el, P.anchor] = S(P.children, $, q, oe, P.el, P.anchor);
  }, _ = ({ el: P, anchor: $ }, q, oe) => {
    let ae;
    for (; P && P !== $; ) ae = f(P), a(P, q, oe), P = ae;
    a($, q, oe);
  }, I = ({ el: P, anchor: $ }) => {
    let q;
    for (; P && P !== $; ) q = f(P), l(P), P = q;
    l($);
  }, k = (P, $, q, oe, ae, se, me, de, G) => {
    if ($.type === "svg" ? me = "svg" : $.type === "math" && (me = "mathml"), P == null) y($, q, oe, ae, se, me, de, G);
    else {
      const ie = P.el && P.el._isVueCE ? P.el : null;
      try {
        ie && ie._beginPatch(), T(P, $, ae, se, me, de, G);
      } finally {
        ie && ie._endPatch();
      }
    }
  }, y = (P, $, q, oe, ae, se, me, de) => {
    let G, ie;
    const { props: _e, shapeFlag: N, transition: W, dirs: Se } = P;
    if (G = P.el = i(P.type, se, _e && _e.is, _e), N & 8 ? c(G, P.children) : N & 16 && p(P.children, G, null, oe, ae, Zr(P, se), me, de), Se && Na(P, null, oe, "created"), C(G, P, P.scopeId, me, oe), _e) {
      for (const Pe in _e) Pe !== "value" && !ho(Pe) && o(G, Pe, null, _e[Pe], se, oe);
      "value" in _e && o(G, "value", null, _e.value, se), (ie = _e.onVnodeBeforeMount) && En(ie, oe, P);
    }
    Se && Na(P, null, oe, "beforeMount");
    const xe = Pp(ae, W);
    xe && W.beforeEnter(G), a(G, $, q), ((ie = _e && _e.onVnodeMounted) || xe || Se) && Wt(() => {
      ie && En(ie, oe, P), xe && W.enter(G), Se && Na(P, null, oe, "mounted");
    }, ae);
  }, C = (P, $, q, oe, ae) => {
    if (q && v(P, q), oe) for (let se = 0; se < oe.length; se++) v(P, oe[se]);
    if (ae) {
      let se = ae.subTree;
      if ($ === se || Rm(se.type) && (se.ssContent === $ || se.ssFallback === $)) {
        const me = ae.vnode;
        C(P, me, me.scopeId, me.slotScopeIds, ae.parent);
      }
    }
  }, p = (P, $, q, oe, ae, se, me, de, G = 0) => {
    for (let ie = G; ie < P.length; ie++) {
      const _e = P[ie] = de ? ea(P[ie]) : On(P[ie]);
      m(null, _e, $, q, oe, ae, se, me, de);
    }
  }, T = (P, $, q, oe, ae, se, me) => {
    const de = $.el = P.el;
    let { patchFlag: G, dynamicChildren: ie, dirs: _e } = $;
    G |= P.patchFlag & 16;
    const N = P.props || st, W = $.props || st;
    let Se;
    if (q && Ha(q, false), (Se = W.onVnodeBeforeUpdate) && En(Se, q, $, P), _e && Na($, P, q, "beforeUpdate"), q && Ha(q, true), (N.innerHTML && W.innerHTML == null || N.textContent && W.textContent == null) && c(de, ""), ie ? A(P.dynamicChildren, ie, de, q, oe, Zr($, ae), se) : me || Q(P, $, de, null, q, oe, Zr($, ae), se, false), G > 0) {
      if (G & 16) E(de, N, W, q, ae);
      else if (G & 2 && N.class !== W.class && o(de, "class", null, W.class, ae), G & 4 && o(de, "style", N.style, W.style, ae), G & 8) {
        const xe = $.dynamicProps;
        for (let Pe = 0; Pe < xe.length; Pe++) {
          const Ae = xe[Pe], Te = N[Ae], Me = W[Ae];
          (Me !== Te || Ae === "value") && o(de, Ae, Te, Me, ae, q);
        }
      }
      G & 1 && P.children !== $.children && c(de, $.children);
    } else !me && ie == null && E(de, N, W, q, ae);
    ((Se = W.onVnodeUpdated) || _e) && Wt(() => {
      Se && En(Se, q, $, P), _e && Na($, P, q, "updated");
    }, oe);
  }, A = (P, $, q, oe, ae, se, me) => {
    for (let de = 0; de < $.length; de++) {
      const G = P[de], ie = $[de], _e = G.el && (G.type === be || !Ga(G, ie) || G.shapeFlag & 198) ? d(G.el) : q;
      m(G, ie, _e, null, oe, ae, se, me, true);
    }
  }, E = (P, $, q, oe, ae) => {
    if ($ !== q) {
      if ($ !== st) for (const se in $) !ho(se) && !(se in q) && o(P, se, $[se], null, ae, oe);
      for (const se in q) {
        if (ho(se)) continue;
        const me = q[se], de = $[se];
        me !== de && se !== "value" && o(P, se, de, me, ae, oe);
      }
      "value" in q && o(P, "value", $.value, q.value, ae);
    }
  }, B = (P, $, q, oe, ae, se, me, de, G) => {
    const ie = $.el = P ? P.el : r(""), _e = $.anchor = P ? P.anchor : r("");
    let { patchFlag: N, dynamicChildren: W, slotScopeIds: Se } = $;
    Se && (de = de ? de.concat(Se) : Se), P == null ? (a(ie, q, oe), a(_e, q, oe), p($.children || [], q, _e, ae, se, me, de, G)) : N > 0 && N & 64 && W && P.dynamicChildren && P.dynamicChildren.length === W.length ? (A(P.dynamicChildren, W, q, ae, se, me, de), ($.key != null || ae && $ === ae.subTree) && Wu(P, $, true)) : Q(P, $, q, _e, ae, se, me, de, G);
  }, M = (P, $, q, oe, ae, se, me, de, G) => {
    $.slotScopeIds = de, P == null ? $.shapeFlag & 512 ? ae.ctx.activate($, q, oe, me, G) : D($, q, oe, ae, se, me, G) : L(P, $, G);
  }, D = (P, $, q, oe, ae, se, me) => {
    const de = P.component = Fp(P, oe, ae);
    if (sr(P) && (de.ctx.renderer = we), $p(de, false, me), de.asyncDep) {
      if (ae && ae.registerDep(de, j, me), !P.el) {
        const G = de.subTree = g(Yt);
        h(null, G, $, q), P.placeholder = G.el;
      }
    } else j(de, P, $, q, ae, se, me);
  }, L = (P, $, q) => {
    const oe = $.component = P.component;
    if (bp(P, $, q)) if (oe.asyncDep && !oe.asyncResolved) {
      H(oe, $, q);
      return;
    } else oe.next = $, oe.update();
    else $.el = P.el, oe.vnode = $;
  }, j = (P, $, q, oe, ae, se, me) => {
    const de = () => {
      if (P.isMounted) {
        let { next: N, bu: W, u: Se, parent: xe, vnode: Pe } = P;
        {
          const qe = Lm(P);
          if (qe) {
            N && (N.el = Pe.el, H(P, N, me)), qe.asyncDep.then(() => {
              Wt(() => {
                P.isUnmounted || ie();
              }, ae);
            });
            return;
          }
        }
        let Ae = N, Te;
        Ha(P, false), N ? (N.el = Pe.el, H(P, N, me)) : N = Pe, W && Ii(W), (Te = N.props && N.props.onVnodeBeforeUpdate) && En(Te, xe, N, Pe), Ha(P, true);
        const Me = Dd(P), et = P.subTree;
        P.subTree = Me, m(et, Me, d(et.el), te(et), P, ae, se), N.el = Me.el, Ae === null && Sp(P, Me.el), Se && Wt(Se, ae), (Te = N.props && N.props.onVnodeUpdated) && Wt(() => En(Te, xe, N, Pe), ae);
      } else {
        let N;
        const { el: W, props: Se } = $, { bm: xe, m: Pe, parent: Ae, root: Te, type: Me } = P, et = ko($);
        Ha(P, false), xe && Ii(xe), !et && (N = Se && Se.onVnodeBeforeMount) && En(N, Ae, $), Ha(P, true);
        {
          Te.ce && Te.ce._hasShadowRoot() && Te.ce._injectChildStyle(Me);
          const qe = P.subTree = Dd(P);
          m(null, qe, q, oe, P, ae, se), $.el = qe.el;
        }
        if (Pe && Wt(Pe, ae), !et && (N = Se && Se.onVnodeMounted)) {
          const qe = $;
          Wt(() => En(N, Ae, qe), ae);
        }
        ($.shapeFlag & 256 || Ae && ko(Ae.vnode) && Ae.vnode.shapeFlag & 256) && P.a && Wt(P.a, ae), P.isMounted = true, $ = q = oe = null;
      }
    };
    P.scope.on();
    const G = P.effect = new Nv(de);
    P.scope.off();
    const ie = P.update = G.run.bind(G), _e = P.job = G.runIfDirty.bind(G);
    _e.i = P, _e.id = P.uid, G.scheduler = () => Lu(_e), Ha(P, true), ie();
  }, H = (P, $, q) => {
    $.component = P;
    const oe = P.vnode.props;
    P.vnode = $, P.next = null, kp(P, $.props, oe, q), Vp(P, $.children, q), oa(), Sd(P), ia();
  }, Q = (P, $, q, oe, ae, se, me, de, G = false) => {
    const ie = P && P.children, _e = P ? P.shapeFlag : 0, N = $.children, { patchFlag: W, shapeFlag: Se } = $;
    if (W > 0) {
      if (W & 128) {
        R(ie, N, q, oe, ae, se, me, de, G);
        return;
      } else if (W & 256) {
        J(ie, N, q, oe, ae, se, me, de, G);
        return;
      }
    }
    Se & 8 ? (_e & 16 && pe(ie, ae, se), N !== ie && c(q, N)) : _e & 16 ? Se & 16 ? R(ie, N, q, oe, ae, se, me, de, G) : pe(ie, ae, se, true) : (_e & 8 && c(q, ""), Se & 16 && p(N, q, oe, ae, se, me, de, G));
  }, J = (P, $, q, oe, ae, se, me, de, G) => {
    P = P || Bl, $ = $ || Bl;
    const ie = P.length, _e = $.length, N = Math.min(ie, _e);
    let W;
    for (W = 0; W < N; W++) {
      const Se = $[W] = G ? ea($[W]) : On($[W]);
      m(P[W], Se, q, null, ae, se, me, de, G);
    }
    ie > _e ? pe(P, ae, se, true, false, N) : p($, q, oe, ae, se, me, de, G, N);
  }, R = (P, $, q, oe, ae, se, me, de, G) => {
    let ie = 0;
    const _e = $.length;
    let N = P.length - 1, W = _e - 1;
    for (; ie <= N && ie <= W; ) {
      const Se = P[ie], xe = $[ie] = G ? ea($[ie]) : On($[ie]);
      if (Ga(Se, xe)) m(Se, xe, q, null, ae, se, me, de, G);
      else break;
      ie++;
    }
    for (; ie <= N && ie <= W; ) {
      const Se = P[N], xe = $[W] = G ? ea($[W]) : On($[W]);
      if (Ga(Se, xe)) m(Se, xe, q, null, ae, se, me, de, G);
      else break;
      N--, W--;
    }
    if (ie > N) {
      if (ie <= W) {
        const Se = W + 1, xe = Se < _e ? $[Se].el : oe;
        for (; ie <= W; ) m(null, $[ie] = G ? ea($[ie]) : On($[ie]), q, xe, ae, se, me, de, G), ie++;
      }
    } else if (ie > W) for (; ie <= N; ) U(P[ie], ae, se, true), ie++;
    else {
      const Se = ie, xe = ie, Pe = /* @__PURE__ */ new Map();
      for (ie = xe; ie <= W; ie++) {
        const fe = $[ie] = G ? ea($[ie]) : On($[ie]);
        fe.key != null && Pe.set(fe.key, ie);
      }
      let Ae, Te = 0;
      const Me = W - xe + 1;
      let et = false, qe = 0;
      const Zt = new Array(Me);
      for (ie = 0; ie < Me; ie++) Zt[ie] = 0;
      for (ie = Se; ie <= N; ie++) {
        const fe = P[ie];
        if (Te >= Me) {
          U(fe, ae, se, true);
          continue;
        }
        let zt;
        if (fe.key != null) zt = Pe.get(fe.key);
        else for (Ae = xe; Ae <= W; Ae++) if (Zt[Ae - xe] === 0 && Ga(fe, $[Ae])) {
          zt = Ae;
          break;
        }
        zt === void 0 ? U(fe, ae, se, true) : (Zt[zt - xe] = ie + 1, zt >= qe ? qe = zt : et = true, m(fe, $[zt], q, null, ae, se, me, de, G), Te++);
      }
      const Mn = et ? Ap(Zt) : Bl;
      for (Ae = Mn.length - 1, ie = Me - 1; ie >= 0; ie--) {
        const fe = xe + ie, zt = $[fe], vd = $[fe + 1], md = fe + 1 < _e ? vd.el || Om(vd) : oe;
        Zt[ie] === 0 ? m(null, zt, q, md, ae, se, me, de, G) : et && (Ae < 0 || ie !== Mn[Ae] ? Z(zt, q, md, 2) : Ae--);
      }
    }
  }, Z = (P, $, q, oe, ae = null) => {
    const { el: se, type: me, transition: de, children: G, shapeFlag: ie } = P;
    if (ie & 6) {
      Z(P.component.subTree, $, q, oe);
      return;
    }
    if (ie & 128) {
      P.suspense.move($, q, oe);
      return;
    }
    if (ie & 64) {
      me.move(P, $, q, we);
      return;
    }
    if (me === be) {
      a(se, $, q);
      for (let N = 0; N < G.length; N++) Z(G[N], $, q, oe);
      a(P.anchor, $, q);
      return;
    }
    if (me === Jr) {
      _(P, $, q);
      return;
    }
    if (oe !== 2 && ie & 1 && de) if (oe === 0) de.beforeEnter(se), a(se, $, q), Wt(() => de.enter(se), ae);
    else {
      const { leave: N, delayLeave: W, afterLeave: Se } = de, xe = () => {
        P.ctx.isUnmounted ? l(se) : a(se, $, q);
      }, Pe = () => {
        se._isLeaving && se[Ln](true), N(se, () => {
          xe(), Se && Se();
        });
      };
      W ? W(se, xe, Pe) : Pe();
    }
    else a(se, $, q);
  }, U = (P, $, q, oe = false, ae = false) => {
    const { type: se, props: me, ref: de, children: G, dynamicChildren: ie, shapeFlag: _e, patchFlag: N, dirs: W, cacheIndex: Se } = P;
    if (N === -2 && (ae = false), de != null && (oa(), po(de, null, q, P, true), ia()), Se != null && ($.renderCache[Se] = void 0), _e & 256) {
      $.ctx.deactivate(P);
      return;
    }
    const xe = _e & 1 && W, Pe = !ko(P);
    let Ae;
    if (Pe && (Ae = me && me.onVnodeBeforeUnmount) && En(Ae, $, P), _e & 6) re(P.component, q, oe);
    else {
      if (_e & 128) {
        P.suspense.unmount(q, oe);
        return;
      }
      xe && Na(P, null, $, "beforeUnmount"), _e & 64 ? P.type.remove(P, $, q, we, oe) : ie && !ie.hasOnce && (se !== be || N > 0 && N & 64) ? pe(ie, $, q, false, true) : (se === be && N & 384 || !ae && _e & 16) && pe(G, $, q), oe && O(P);
    }
    (Pe && (Ae = me && me.onVnodeUnmounted) || xe) && Wt(() => {
      Ae && En(Ae, $, P), xe && Na(P, null, $, "unmounted");
    }, q);
  }, O = (P) => {
    const { type: $, el: q, anchor: oe, transition: ae } = P;
    if ($ === be) {
      Y(q, oe);
      return;
    }
    if ($ === Jr) {
      I(P);
      return;
    }
    const se = () => {
      l(q), ae && !ae.persisted && ae.afterLeave && ae.afterLeave();
    };
    if (P.shapeFlag & 1 && ae && !ae.persisted) {
      const { leave: me, delayLeave: de } = ae, G = () => me(q, se);
      de ? de(P.el, se, G) : G();
    } else se();
  }, Y = (P, $) => {
    let q;
    for (; P !== $; ) q = f(P), l(P), P = q;
    l($);
  }, re = (P, $, q) => {
    const { bum: oe, scope: ae, job: se, subTree: me, um: de, m: G, a: ie } = P;
    Bd(G), Bd(ie), oe && Ii(oe), ae.stop(), se && (se.flags |= 8, U(me, P, $, q)), de && Wt(de, $), Wt(() => {
      P.isUnmounted = true;
    }, $);
  }, pe = (P, $, q, oe = false, ae = false, se = 0) => {
    for (let me = se; me < P.length; me++) U(P[me], $, q, oe, ae);
  }, te = (P) => {
    if (P.shapeFlag & 6) return te(P.component.subTree);
    if (P.shapeFlag & 128) return P.suspense.next();
    const $ = f(P.anchor || P.el), q = $ && $[cm];
    return q ? f(q) : $;
  };
  let ve = false;
  const De = (P, $, q) => {
    let oe;
    P == null ? $._vnode && (U($._vnode, null, null, true), oe = $._vnode.component) : m($._vnode || null, P, $, null, null, null, q), $._vnode = P, ve || (ve = true, Sd(oe), im(), ve = false);
  }, we = { p: m, um: U, m: Z, r: O, mt: D, mc: p, pc: Q, pbc: A, n: te, o: e };
  return { render: De, hydrate: void 0, createApp: fp(De) };
}
function Zr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ha({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Pp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wu(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Le(a) && Le(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = ea(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Wu(i, r)), r.type === Qo && (r.patchFlag === -1 && (r = l[o] = ea(r)), r.el = i.el), r.type === Yt && !r.el && (r.el = i.el);
  }
}
function Ap(e) {
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
function Lm(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Lm(t);
}
function Bd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Om(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Om(t.subTree) : null;
}
const Rm = (e) => e.__isSuspense;
function Tp(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : jS(e);
}
const be = Symbol.for("v-fgt"), Qo = Symbol.for("v-txt"), Yt = Symbol.for("v-cmt"), Jr = Symbol.for("v-stc"), xo = [];
let cn = null;
function Ye(e = false) {
  xo.push(cn = e ? null : []);
}
function Dp() {
  xo.pop(), cn = xo[xo.length - 1] || null;
}
let Do = 1;
function Ni(e, t = false) {
  Do += e, e < 0 && cn && t && (cn.hasOnce = true);
}
function Nm(e) {
  return e.dynamicChildren = Do > 0 ? cn || Bl : null, Dp(), Do > 0 && cn && cn.push(e), e;
}
function Ct(e, t, n, a, l, o) {
  return Nm(w(e, t, n, a, l, o, true));
}
function nn(e, t, n, a, l) {
  return Nm(g(e, t, n, a, l, true));
}
function Mo(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ga(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hm = ({ key: e }) => e ?? null, Ai = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? mt(e) || yt(e) || Re(e) ? { i: un, r: e, k: t, f: !!n } : e : null);
function w(e, t = null, n = null, a = 0, l = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Hm(t), ref: t && Ai(t), scopeId: sm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: un };
  return r ? (ju(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= mt(n) ? 8 : 16), Do > 0 && !i && cn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && cn.push(s), s;
}
const g = Mp;
function Mp(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === ap) && (e = Yt), Mo(e)) {
    const r = sa(e, t, true);
    return n && ju(r, n), Do > 0 && !o && cn && (r.shapeFlag & 6 ? cn[cn.indexOf(e)] = r : cn.push(r)), r.patchFlag = -2, r;
  }
  if (Hp(e) && (e = e.__vccOpts), t) {
    t = zm(t);
    let { class: r, style: s } = t;
    r && !mt(r) && (t.class = ne(r)), tt(s) && (Zo(s) && !Le(s) && (s = Pt({}, s)), t.style = ye(s));
  }
  const i = mt(e) ? 1 : Rm(e) ? 128 : dm(e) ? 64 : tt(e) ? 4 : Re(e) ? 2 : 0;
  return w(e, t, n, a, l, i, o, true);
}
function zm(e) {
  return e ? Zo(e) || Dm(e) ? Pt({}, e) : e : null;
}
function sa(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? X(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Hm(u), ref: t && t.ref ? n && o ? Le(o) ? o.concat(Ai(t)) : [o, Ai(t)] : Ai(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && sa(e.ssContent), ssFallback: e.ssFallback && sa(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && nl(c, s.clone(c)), c;
}
function Xe(e = " ", t = 0) {
  return g(Qo, null, e, t);
}
function $n(e = "", t = false) {
  return t ? (Ye(), nn(Yt, null, e)) : g(Yt, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? g(Yt) : Le(e) ? g(be, null, e.slice()) : Mo(e) ? ea(e) : g(Qo, null, String(e));
}
function ea(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : sa(e);
}
function ju(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Le(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), ju(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Dm(t) ? t._ctx = un : l === 3 && un && (un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Re(t) ? (t = { default: t, _ctx: un }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Xe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function X(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ne([t.class, a.class]));
    else if (l === "style") t.style = ye([t.style, a.style]);
    else if (nr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(Le(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function En(e, t, n, a = null) {
  Pn(e, t, 7, [n, a]);
}
const Ep = _m();
let Bp = 0;
function Fp(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Ep, o = { uid: Bp++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Ov(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Em(a, l), emitsOptions: Im(a, l), emit: null, emitted: null, propsDefaults: st, inheritAttrs: a.inheritAttrs, ctx: st, data: st, props: st, attrs: st, slots: st, refs: st, setupState: st, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = mp.bind(null, o), e.ce && e.ce(o), o;
}
let Gt = null;
const ei = () => Gt || un;
let Hi, Ps;
{
  const e = or(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Hi = t("__VUE_INSTANCE_SETTERS__", (n) => Gt = n), Ps = t("__VUE_SSR_SETTERS__", (n) => Eo = n);
}
const ti = (e) => {
  const t = Gt;
  return Hi(e), e.scope.on(), () => {
    e.scope.off(), Hi(t);
  };
}, Fd = () => {
  Gt && Gt.scope.off(), Hi(null);
};
function Wm(e) {
  return e.vnode.shapeFlag & 4;
}
let Eo = false;
function $p(e, t = false, n = false) {
  t && Ps(t);
  const { props: a, children: l } = e.vnode, o = Wm(e);
  pp(e, a, o, t), Cp(e, l, n || t);
  const i = o ? Lp(e, t) : void 0;
  return t && Ps(false), i;
}
function Lp(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, op);
  const { setup: a } = n;
  if (a) {
    oa();
    const l = e.setupContext = a.length > 1 ? Rp(e) : null, o = ti(e), i = Jo(a, e, 0, [e.props, l]), r = Dv(i);
    if (ia(), o(), (r || e.sp) && !ko(e) && bm(e), r) {
      if (i.then(Fd, Fd), t) return i.then((s) => {
        $d(e, s);
      }).catch((s) => {
        rr(s, e, 0);
      });
      e.asyncDep = i;
    } else $d(e, i);
  } else jm(e);
}
function $d(e, t, n) {
  Re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) && (e.setupState = nm(t)), jm(e);
}
function jm(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Nn);
  {
    const l = ti(e);
    oa();
    try {
      ip(e);
    } finally {
      ia(), l();
    }
  }
}
const Op = { get(e, t) {
  return Ut(e, "get", ""), e[t];
} };
function Rp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Op), slots: e.slots, emit: e.emit, expose: t };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nm(em(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in wo) return wo[n](e);
  }, has(t, n) {
    return n in t || n in wo;
  } })) : e.proxy;
}
function Np(e, t = true) {
  return Re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hp(e) {
  return Re(e) && "__vccOpts" in e;
}
const V = (e, t) => RS(e, t, Eo);
function va(e, t, n) {
  try {
    Ni(-1);
    const a = arguments.length;
    return a === 2 ? tt(t) && !Le(t) ? Mo(t) ? g(e, null, [t]) : g(e, t) : g(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Mo(n) && (n = [n]), g(e, t, n));
  } finally {
    Ni(1);
  }
}
const zp = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let As;
const Ld = typeof window < "u" && window.trustedTypes;
if (Ld) try {
  As = Ld.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Um = As ? (e) => As.createHTML(e) : (e) => e, Wp = "http://www.w3.org/2000/svg", jp = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, Od = Qn && Qn.createElement("template"), Up = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? Qn.createElementNS(Wp, e) : t === "mathml" ? Qn.createElementNS(jp, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
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
    Od.innerHTML = Um(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = Od.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, pa = "transition", io = "animation", Hl = Symbol("_vtc"), Ym = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Gm = Pt({}, mm, Ym), Yp = (e) => (e.displayName = "Transition", e.props = Gm, e), Ta = Yp((e, { slots: t }) => va(ZS, Km(e), t)), za = (e, t = []) => {
  Le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Rd = (e) => e ? Le(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Km(e) {
  const t = {};
  for (const B in e) B in Ym || (t[B] = e[B]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, S = Gp(l), m = S && S[0], b = S && S[1], { onBeforeEnter: h, onEnter: x, onEnterCancelled: _, onLeave: I, onLeaveCancelled: k, onBeforeAppear: y = h, onAppear: C = x, onAppearCancelled: p = _ } = t, T = (B, M, D, L) => {
    B._enterCancelled = L, ka(B, M ? c : r), ka(B, M ? u : i), D && D();
  }, A = (B, M) => {
    B._isLeaving = false, ka(B, d), ka(B, v), ka(B, f), M && M();
  }, E = (B) => (M, D) => {
    const L = B ? C : x, j = () => T(M, B, D);
    za(L, [M, j]), Nd(() => {
      ka(M, B ? s : o), Bn(M, B ? c : r), Rd(L) || Hd(M, a, m, j);
    });
  };
  return Pt(t, { onBeforeEnter(B) {
    za(h, [B]), Bn(B, o), Bn(B, i);
  }, onBeforeAppear(B) {
    za(y, [B]), Bn(B, s), Bn(B, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(B, M) {
    B._isLeaving = true;
    const D = () => A(B, M);
    Bn(B, d), B._enterCancelled ? (Bn(B, f), Ts(B)) : (Ts(B), Bn(B, f)), Nd(() => {
      B._isLeaving && (ka(B, d), Bn(B, v), Rd(I) || Hd(B, a, b, D));
    }), za(I, [B, D]);
  }, onEnterCancelled(B) {
    T(B, false, void 0, true), za(_, [B]);
  }, onAppearCancelled(B) {
    T(B, true, void 0, true), za(p, [B]);
  }, onLeaveCancelled(B) {
    A(B), za(k, [B]);
  } });
}
function Gp(e) {
  if (e == null) return null;
  if (tt(e)) return [Qr(e.enter), Qr(e.leave)];
  {
    const t = Qr(e);
    return [t, t];
  }
}
function Qr(e) {
  return oS(e);
}
function Bn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hl] || (e[Hl] = /* @__PURE__ */ new Set())).add(t);
}
function ka(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Hl];
  n && (n.delete(t), n.size || (e[Hl] = void 0));
}
function Nd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Kp = 0;
function Hd(e, t, n, a) {
  const l = e._endId = ++Kp, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = qm(e, t);
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
function qm(e, t) {
  const n = window.getComputedStyle(e), a = (S) => (n[S] || "").split(", "), l = a(`${pa}Delay`), o = a(`${pa}Duration`), i = zd(l, o), r = a(`${io}Delay`), s = a(`${io}Duration`), u = zd(r, s);
  let c = null, d = 0, f = 0;
  t === pa ? i > 0 && (c = pa, d = i, f = o.length) : t === io ? u > 0 && (c = io, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? pa : io : null, f = c ? c === pa ? o.length : s.length : 0);
  const v = c === pa && /\b(?:transform|all)(?:,|$)/.test(a(`${pa}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function zd(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Wd(n) + Wd(e[a])));
}
function Wd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ts(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function qp(e, t, n) {
  const a = e[Hl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zi = Symbol("_vod"), Xm = Symbol("_vsh"), Dn = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[zi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ro(e, t);
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
  e.style.display = t ? e[zi] : "none", e[Xm] = !t;
}
const Xp = Symbol(""), Zp = /(?:^|;)\s*display\s*:/;
function Jp(e, t, n) {
  const a = e.style, l = mt(n);
  let o = false;
  if (n && !l) {
    if (t) if (mt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Ti(a, r, "");
    }
    else for (const i in t) n[i] == null && Ti(a, i, "");
    for (const i in n) i === "display" && (o = true), Ti(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[Xp];
      i && (n += ";" + i), a.cssText = n, o = Zp.test(n);
    }
  } else t && e.removeAttribute("style");
  zi in e && (e[zi] = o ? a.display : "", e[Xm] && (a.display = "none"));
}
const jd = /\s*!important$/;
function Ti(e, t, n) {
  if (Le(n)) n.forEach((a) => Ti(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = Qp(e, t);
    jd.test(n) ? e.setProperty(fl(a), n.replace(jd, ""), "important") : e[a] = n;
  }
}
const Ud = ["Webkit", "Moz", "ms"], es = {};
function Qp(e, t) {
  const n = es[t];
  if (n) return n;
  let a = ln(t);
  if (a !== "filter" && a in e) return es[t] = a;
  a = Yn(a);
  for (let l = 0; l < Ud.length; l++) {
    const o = Ud[l] + a;
    if (o in e) return es[t] = o;
  }
  return t;
}
const Yd = "http://www.w3.org/1999/xlink";
function Gd(e, t, n, a, l, o = fS(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Yd, t.slice(6, t.length)) : e.setAttributeNS(Yd, t, n) : n == null || o && !Fv(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Hn(n) ? String(n) : n);
}
function Kd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Um(n) : n);
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
    r === "boolean" ? n = Fv(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
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
function e0(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const qd = Symbol("_vei");
function t0(e, t, n, a, l = null) {
  const o = e[qd] || (e[qd] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = n0(t);
    if (a) {
      const u = o[t] = o0(a, l);
      Al(e, r, u, s);
    } else i && (e0(e, r, i, s), o[t] = void 0);
  }
}
const Xd = /(?:Once|Passive|Capture)$/;
function n0(e) {
  let t;
  if (Xd.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Xd); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : fl(e.slice(2)), t];
}
let ts = 0;
const a0 = Promise.resolve(), l0 = () => ts || (a0.then(() => ts = 0), ts = Date.now());
function o0(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    Pn(i0(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = l0(), n;
}
function i0(e, t) {
  if (Le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const Zd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, r0 = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? qp(e, a, i) : t === "style" ? Jp(e, n, a) : nr(t) ? Iu(t) || t0(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : s0(e, t, a, i)) ? (Kd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !mt(a)) ? Kd(e, ln(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Gd(e, t, a, i));
};
function s0(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && Zd(t) && Re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Zd(t) && mt(n) ? false : t in e;
}
const Zm = /* @__PURE__ */ new WeakMap(), Jm = /* @__PURE__ */ new WeakMap(), Wi = Symbol("_moveCb"), Jd = Symbol("_enterCb"), u0 = (e) => (delete e.props.mode, e), c0 = u0({ name: "TransitionGroup", props: Pt({}, Gm, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ei(), a = vm();
  let l, o;
  return cr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!m0(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(d0), l.forEach(f0);
    const r = l.filter(v0);
    Ts(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Bn(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Wi] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Wi] = null, ka(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Ee(e), r = Km(i);
    let s = i.tag || be;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), nl(c, To(c, r, a, n)), Zm.set(c, Qm(c.el)));
    }
    o = t.default ? Ru(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && nl(c, To(c, r, a, n));
    }
    return g(s, null, o);
  };
} }), Uu = c0;
function d0(e) {
  const t = e.el;
  t[Wi] && t[Wi](), t[Jd] && t[Jd]();
}
function f0(e) {
  Jm.set(e, Qm(e.el));
}
function v0(e) {
  const t = Zm.get(e), n = Jm.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function Qm(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function m0(e, t, n) {
  const a = e.cloneNode(), l = e[Hl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = qm(a);
  return o.removeChild(a), i;
}
const Qd = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Le(t) ? (n) => Ii(t, n) : t;
};
function g0(e) {
  e.target.composing = true;
}
function ef(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function tf(e, t, n) {
  return t && (e = e.trim()), n && (e = Au(e)), e;
}
const h0 = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[ns] = Qd(l);
  const o = a || l.props && l.props.type === "number";
  Al(e, t ? "change" : "input", (i) => {
    i.target.composing || e[ns](tf(e.value, n, o));
  }), (n || o) && Al(e, "change", () => {
    e.value = tf(e.value, n, o);
  }), t || (Al(e, "compositionstart", g0), Al(e, "compositionend", ef), Al(e, "change", ef));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[ns] = Qd(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Au(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, y0 = ["ctrl", "shift", "alt", "meta"], b0 = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => y0.some((n) => e[`${n}Key`] && !t.includes(n)) }, Si = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = b0[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, S0 = Pt({ patchProp: r0 }, Up);
let nf;
function eg() {
  return nf || (nf = _p(S0));
}
const tg = ((...e) => {
  eg().render(...e);
}), p0 = ((...e) => {
  const t = eg().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = w0(a);
    if (!l) return;
    const o = t._component;
    !Re(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, k0(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function k0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function w0(e) {
  return mt(e) ? document.querySelector(e) : e;
}
const ng = { debug: 0, info: 1, warn: 2, error: 3 }, x0 = ng.warn;
function C0(e) {
  const t = (n, a) => {
    ng[n] < x0 || console[n](`[${e}]`, ...a);
  };
  return { debug: (...n) => t("debug", n), info: (...n) => t("info", n), warn: (...n) => t("warn", n), error: (...n) => t("error", n) };
}
const af = 5;
function lf(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * af)));
  return e / (l * af);
}
function of(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function V0(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
const Yu = 1, Gu = `gol.gridBlankZones.v${Yu}`, _0 = 128, I0 = /* @__PURE__ */ new Set(["minor", "major", "both"]), P0 = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function as(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Dl(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function A0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function T0(e) {
  return typeof e == "string" && I0.has(e) ? e : "both";
}
function D0(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && P0.has(t.style) ? t.style : "none", a = as(Dl(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = as(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = as(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, Dl(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function M0(e) {
  return typeof e == "boolean" ? e : true;
}
function rf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Ds(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Dl(n.x1), l = Dl(n.y1), o = Dl(n.x2), i = Dl(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : A0(), x1: r, y1: u, x2: s, y2: c, mode: T0(n.mode), edge: D0(n.edge), enabled: M0(n.enabled), createdAt: rf(n.createdAt, t), updatedAt: rf(n.updatedAt, t) };
}
function Ku(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= _0) break;
    const l = Ds(a, t);
    l && n.push(l);
  }
  return n;
}
function qu() {
  return typeof localStorage < "u";
}
function E0() {
  if (!qu()) return [];
  try {
    const e = localStorage.getItem(Gu);
    if (!e) return [];
    const t = JSON.parse(e);
    return t.version !== Yu ? [] : Ku(t.zones);
  } catch {
    return [];
  }
}
function B0(e) {
  if (!qu()) return;
  const t = { version: Yu, zones: Ku(e) };
  localStorage.setItem(Gu, JSON.stringify(t));
}
function F0() {
  qu() && localStorage.removeItem(Gu);
}
function $0(e = {}) {
  const t = K(E0());
  function n(u) {
    const c = Ku(u);
    return t.value = c, B0(c), c;
  }
  function a(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetZones) == null ? void 0 : _a3.call(e, c);
  }
  function l(u) {
    var _a3;
    const c = Ds(u);
    c && (n([...t.value, c]), (_a3 = e.onAddZone) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = Ds(u);
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
    t.value.length !== 0 && (t.value = [], F0(), (_a3 = e.onClearZones) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { zones: t, setZones: a, addZone: l, updateZone: o, removeZone: i, clearZones: r, syncFromWorker: s };
}
const L0 = 32, Xu = 1, Zu = `gol.decals.v${Xu}`, Qt = [0.49, 0.3, 1, 0.6], O0 = /* @__PURE__ */ new Set(["solid", "checkerboard", "stripes", "dots", "bitmap"]), R0 = /* @__PURE__ */ new Set(["alpha", "multiply", "screen"]);
function Ca(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function rn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function pi(e) {
  const t = rn(e);
  return t === null ? null : Math.trunc(t);
}
function N0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function H0(e) {
  return typeof e == "string" && O0.has(e) ? e : "solid";
}
function z0(e) {
  return typeof e == "string" && R0.has(e) ? e : "alpha";
}
function W0(e) {
  const t = e && typeof e == "object" ? e : {}, n = H0(t.kind), a = { kind: n };
  return n === "solid" ? (a.coverage = Ca(rn(t.coverage) ?? 1, 0, 1), a.solidR = Ca(rn(t.solidR) ?? Qt[0], 0, 1), a.solidG = Ca(rn(t.solidG) ?? Qt[1], 0, 1), a.solidB = Ca(rn(t.solidB) ?? Qt[2], 0, 1)) : n === "checkerboard" ? a.cellSize = Math.max(1, rn(t.cellSize) ?? 2) : n === "stripes" ? a.pitchCells = Math.max(2, rn(t.pitchCells) ?? 4) : n === "dots" && (a.dotRadius = Math.max(0.1, rn(t.dotRadius) ?? 0.4), a.dotSpacing = Math.max(2, rn(t.dotSpacing) ?? 3)), a;
}
function j0(e) {
  return !Array.isArray(e) || e.length < 4 ? [...Qt] : [Ca(rn(e[0]) ?? Qt[0], 0, 1), Ca(rn(e[1]) ?? Qt[1], 0, 1), Ca(rn(e[2]) ?? Qt[2], 0, 1), Ca(rn(e[3]) ?? Qt[3], 0, 1)];
}
function U0(e) {
  return typeof e == "boolean" ? e : true;
}
function sf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Ms(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = pi(n.x1), l = pi(n.y1), o = pi(n.x2), i = pi(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : N0(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), pattern: W0(n.pattern), tint: j0(n.tint), blendMode: z0(n.blendMode), suppressCells: typeof n.suppressCells == "boolean" ? n.suppressCells : false, enabled: U0(n.enabled), createdAt: sf(n.createdAt, t), updatedAt: sf(n.updatedAt, t) };
}
function Ju(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= L0) break;
    const l = Ms(a, t);
    l && n.push(l);
  }
  return n;
}
function Qu() {
  return typeof localStorage < "u";
}
function Y0() {
  if (!Qu()) return [];
  try {
    const e = localStorage.getItem(Zu);
    if (!e) return [];
    const t = JSON.parse(e);
    return t.version !== Xu ? [] : Ju(t.decals);
  } catch {
    return [];
  }
}
function G0(e) {
  if (!Qu()) return;
  const t = { version: Xu, decals: Ju(e) };
  localStorage.setItem(Zu, JSON.stringify(t));
}
function K0() {
  Qu() && localStorage.removeItem(Zu);
}
function q0(e = {}) {
  const t = K(Y0());
  function n(u) {
    const c = Ju(u);
    return t.value = c, G0(c), c;
  }
  function a(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetDecals) == null ? void 0 : _a3.call(e, c);
  }
  function l(u) {
    var _a3;
    const c = Ms(u);
    c && (n([...t.value, c]), (_a3 = e.onAddDecal) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = Ms(u);
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
    t.value.length !== 0 && (t.value = [], K0(), (_a3 = e.onClearDecals) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { decals: t, setDecals: a, addDecal: l, updateDecal: o, removeDecal: i, clearDecals: r, syncFromWorker: s };
}
const X0 = { key: 0, class: "zone-preview-text" }, Z0 = { class: "zone-list" }, J0 = { class: "zone-text" }, Q0 = { class: "zone-coords" }, ek = { class: "zone-actions" }, tk = { key: 0, class: "zone-empty" }, nk = { key: 4 }, ak = { class: "zone-list" }, lk = { class: "zone-text" }, ok = { class: "zone-coords" }, ik = { class: "zone-actions" }, rk = { key: 0, class: "zone-empty" }, sk = da({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, decals: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = K(false), o = K(false), i = K(false), r = K(0), s = K(0), u = K(4), c = K(4), d = K("both"), f = K("none"), v = K(1), S = K(1), m = K(0.6), b = K(2), h = K(false), x = V(() => n.zones.filter((N) => !!N && typeof N.id == "string" && N.id.length > 0 && typeof N.x1 == "number" && typeof N.y1 == "number" && typeof N.x2 == "number" && typeof N.y2 == "number" && typeof N.mode == "string" && !!N.edge && typeof N.edge.style == "string"));
  function _(N) {
    return N.id.slice(0, 6);
  }
  function I() {
    return { style: f.value, widthCells: Math.max(1, Math.min(4, Math.trunc(v.value))), opacity: Math.max(0, Math.min(1, S.value)), fadeStrength: f.value === "fade" ? Math.max(0, Math.min(1, m.value)) : void 0, notePitchCells: f.value === "noted" ? Math.max(1, Math.trunc(b.value)) : void 0, hideInteriorBorder: f.value === "bold-major" || f.value === "noted" ? h.value : void 0 };
  }
  const k = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], y = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function C() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function p() {
    const N = Date.now();
    a("add-zone", { id: C(), x1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), y1: Math.min(Math.trunc(s.value), Math.trunc(c.value)), x2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), y2: Math.max(Math.trunc(s.value), Math.trunc(c.value)), mode: d.value, edge: I(), enabled: true, createdAt: N, updatedAt: N });
  }
  function T(N) {
    a("update-zone", { ...N, enabled: !N.enabled, updatedAt: Date.now() });
  }
  function A() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function E() {
    a("draft-change", { mode: d.value, edge: I() });
  }
  ce(l, A, { immediate: true }), ce(o, A, { immediate: true }), ce([d, f, v, S, m, b, h], E, { immediate: true });
  const B = K(false), M = K(false), D = K(false), L = K("solid"), j = K("alpha"), H = K(false), Q = K(Qt[0]), J = K(Qt[1]), R = K(Qt[2]), Z = K(Qt[3]), U = K(1), O = K(Qt[0]), Y = K(Qt[1]), re = K(Qt[2]), pe = K(2), te = K(4), ve = K(0.4), De = K(3), we = K(0), he = K(0), P = K(4), $ = K(4), q = [{ title: "Solid", value: "solid" }, { title: "Checkerboard", value: "checkerboard" }, { title: "Stripes", value: "stripes" }, { title: "Dots", value: "dots" }], oe = [{ title: "Alpha", value: "alpha" }, { title: "Multiply", value: "multiply" }, { title: "Screen", value: "screen" }], ae = V(() => n.decals.filter((N) => !!N && typeof N.id == "string" && N.id.length > 0 && typeof N.x1 == "number" && typeof N.y1 == "number" && typeof N.x2 == "number" && typeof N.y2 == "number" && !!N.pattern && typeof N.pattern.kind == "string"));
  function se(N) {
    return N.id.slice(0, 6);
  }
  function me() {
    const N = L.value;
    return N === "solid" ? { kind: N, coverage: Math.max(0, Math.min(1, U.value)), solidR: Math.max(0, Math.min(1, O.value)), solidG: Math.max(0, Math.min(1, Y.value)), solidB: Math.max(0, Math.min(1, re.value)) } : N === "checkerboard" ? { kind: N, cellSize: Math.max(1, pe.value) } : N === "stripes" ? { kind: N, pitchCells: Math.max(2, te.value) } : N === "dots" ? { kind: N, dotRadius: Math.max(0.1, ve.value), dotSpacing: Math.max(2, De.value) } : { kind: N };
  }
  function de() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function G() {
    const N = Date.now();
    a("add-decal", { id: de(), x1: Math.min(Math.trunc(we.value), Math.trunc(P.value)), y1: Math.min(Math.trunc(he.value), Math.trunc($.value)), x2: Math.max(Math.trunc(we.value), Math.trunc(P.value)), y2: Math.max(Math.trunc(he.value), Math.trunc($.value)), pattern: me(), tint: [Math.max(0, Math.min(1, Q.value)), Math.max(0, Math.min(1, J.value)), Math.max(0, Math.min(1, R.value)), Math.max(0, Math.min(1, Z.value))], blendMode: j.value, suppressCells: H.value, enabled: true, createdAt: N, updatedAt: N });
  }
  function ie(N) {
    a("update-decal", { ...N, enabled: !N.enabled, updatedAt: Date.now() });
  }
  function _e() {
    a("decal-tool-change", { enabled: M.value, snapMajor: D.value });
  }
  return ce(M, _e, { immediate: true }), ce(D, _e, { immediate: true }), (N, W) => {
    const Se = Ge("v-btn"), xe = Ge("v-card-title"), Pe = Ge("v-switch"), Ae = Ge("v-text-field"), Te = Ge("v-col"), Me = Ge("v-row"), et = Ge("v-select"), qe = Ge("v-divider"), Zt = Ge("v-card-text"), Mn = Ge("v-card");
    return Ye(), Ct("aside", { class: ne(["zone-panel", { "is-collapsed": i.value }]), "data-grid-ignore-click": "true" }, [i.value ? (Ye(), nn(Se, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: W[38] || (W[38] = (fe) => i.value = false) }, { default: Ce(() => [...W[48] || (W[48] = [Xe(" Blank Zones ", -1)])]), _: 1 })) : (Ye(), nn(Mn, { key: 0, elevation: "6", rounded: "lg" }, { default: Ce(() => [g(xe, { class: "zone-title" }, { default: Ce(() => [W[40] || (W[40] = w("span", { class: "text-subtitle-1" }, "Blank Zones", -1)), g(Se, { size: "x-small", variant: "text", onClick: W[0] || (W[0] = (fe) => i.value = true) }, { default: Ce(() => [...W[39] || (W[39] = [Xe("Collapse", -1)])]), _: 1 })]), _: 1 }), g(Zt, { class: "pt-2" }, { default: Ce(() => [g(Pe, { modelValue: l.value, "onUpdate:modelValue": W[1] || (W[1] = (fe) => l.value = fe), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), g(Pe, { modelValue: o.value, "onUpdate:modelValue": W[2] || (W[2] = (fe) => o.value = fe), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Ye(), Ct("div", X0, " Preview: (" + We(n.previewRect.x1) + "," + We(n.previewRect.y1) + ") \u2192 (" + We(n.previewRect.x2) + "," + We(n.previewRect.y2) + ") ", 1)) : $n("", true), g(Me, { dense: "" }, { default: Ce(() => [g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: r.value, "onUpdate:modelValue": W[3] || (W[3] = (fe) => r.value = fe), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: s.value, "onUpdate:modelValue": W[4] || (W[4] = (fe) => s.value = fe), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: u.value, "onUpdate:modelValue": W[5] || (W[5] = (fe) => u.value = fe), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: c.value, "onUpdate:modelValue": W[6] || (W[6] = (fe) => c.value = fe), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Me, { dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "6" }, { default: Ce(() => [g(et, { modelValue: d.value, "onUpdate:modelValue": W[7] || (W[7] = (fe) => d.value = fe), items: k, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "6" }, { default: Ce(() => [g(et, { modelValue: f.value, "onUpdate:modelValue": W[8] || (W[8] = (fe) => f.value = fe), items: y, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Me, { dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "6" }, { default: Ce(() => [g(Ae, { modelValue: v.value, "onUpdate:modelValue": W[9] || (W[9] = (fe) => v.value = fe), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "6" }, { default: Ce(() => [g(Ae, { modelValue: S.value, "onUpdate:modelValue": W[10] || (W[10] = (fe) => S.value = fe), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), f.value === "fade" ? (Ye(), nn(Me, { key: 1, dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "12" }, { default: Ce(() => [g(Ae, { modelValue: m.value, "onUpdate:modelValue": W[11] || (W[11] = (fe) => m.value = fe), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : $n("", true), f.value === "noted" ? (Ye(), nn(Me, { key: 2, dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "12" }, { default: Ce(() => [g(Ae, { modelValue: b.value, "onUpdate:modelValue": W[12] || (W[12] = (fe) => b.value = fe), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : $n("", true), f.value === "bold-major" || f.value === "noted" ? (Ye(), nn(Me, { key: 3, dense: "", class: "mt-1" }, { default: Ce(() => [g(Te, { cols: "12" }, { default: Ce(() => [g(Pe, { modelValue: h.value, "onUpdate:modelValue": W[13] || (W[13] = (fe) => h.value = fe), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : $n("", true), g(Se, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: p }, { default: Ce(() => [...W[41] || (W[41] = [Xe(" Add Zone ", -1)])]), _: 1 }), g(qe, { class: "my-3" }), w("div", Z0, [(Ye(true), Ct(be, null, al(x.value, (fe) => (Ye(), Ct("div", { key: fe.id, class: "zone-row" }, [w("div", J0, [w("div", null, "#" + We(_(fe)) + " \xB7 " + We(fe.mode) + " \xB7 " + We(fe.edge.style), 1), w("div", Q0, "(" + We(fe.x1) + "," + We(fe.y1) + ") \u2192 (" + We(fe.x2) + "," + We(fe.y2) + ")", 1)]), w("div", ek, [g(Se, { size: "x-small", variant: "text", onClick: (zt) => T(fe) }, { default: Ce(() => [Xe(We(fe.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(Se, { size: "x-small", variant: "text", color: "error", onClick: (zt) => a("remove-zone", fe.id) }, { default: Ce(() => [...W[42] || (W[42] = [Xe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), x.value.length === 0 ? (Ye(), Ct("div", tk, "No zones.")) : $n("", true)]), g(Se, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: x.value.length === 0, onClick: W[14] || (W[14] = (fe) => a("clear-zones")) }, { default: Ce(() => [...W[43] || (W[43] = [Xe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"]), g(qe, { class: "my-3" }), w("div", { class: "decal-header", onClick: W[15] || (W[15] = (fe) => B.value = !B.value) }, [W[44] || (W[44] = w("span", { class: "text-subtitle-2" }, "Decals", -1)), g(Se, { size: "x-small", variant: "text" }, { default: Ce(() => [Xe(We(B.value ? "Collapse" : "Expand"), 1)]), _: 1 })]), B.value ? (Ye(), Ct("div", nk, [g(Pe, { modelValue: M.value, "onUpdate:modelValue": W[16] || (W[16] = (fe) => M.value = fe), class: "mt-2", inset: "", density: "compact", color: "primary", "hide-details": "", label: "Decal Tool (drag on page)" }, null, 8, ["modelValue"]), g(Pe, { modelValue: D.value, "onUpdate:modelValue": W[17] || (W[17] = (fe) => D.value = fe), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), g(Me, { dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "6" }, { default: Ce(() => [g(et, { modelValue: L.value, "onUpdate:modelValue": W[18] || (W[18] = (fe) => L.value = fe), items: q, "item-title": "title", "item-value": "value", label: "Kind", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "6" }, { default: Ce(() => [g(et, { modelValue: j.value, "onUpdate:modelValue": W[19] || (W[19] = (fe) => j.value = fe), items: oe, "item-title": "title", "item-value": "value", label: "Blend", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), L.value === "solid" ? (Ye(), Ct(be, { key: 0 }, [g(Me, { dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "12" }, { default: Ce(() => [g(Ae, { modelValue: U.value, "onUpdate:modelValue": W[20] || (W[20] = (fe) => U.value = fe), modelModifiers: { number: true }, label: "Coverage (0\u20131)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Me, { dense: "", class: "mt-1" }, { default: Ce(() => [g(Te, { cols: "4" }, { default: Ce(() => [g(Ae, { modelValue: O.value, "onUpdate:modelValue": W[21] || (W[21] = (fe) => O.value = fe), modelModifiers: { number: true }, label: "R", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "4" }, { default: Ce(() => [g(Ae, { modelValue: Y.value, "onUpdate:modelValue": W[22] || (W[22] = (fe) => Y.value = fe), modelModifiers: { number: true }, label: "G", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "4" }, { default: Ce(() => [g(Ae, { modelValue: re.value, "onUpdate:modelValue": W[23] || (W[23] = (fe) => re.value = fe), modelModifiers: { number: true }, label: "B", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })], 64)) : L.value === "checkerboard" ? (Ye(), nn(Me, { key: 1, dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "12" }, { default: Ce(() => [g(Ae, { modelValue: pe.value, "onUpdate:modelValue": W[24] || (W[24] = (fe) => pe.value = fe), modelModifiers: { number: true }, label: "Cell size (\u22651)", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : L.value === "stripes" ? (Ye(), nn(Me, { key: 2, dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "12" }, { default: Ce(() => [g(Ae, { modelValue: te.value, "onUpdate:modelValue": W[25] || (W[25] = (fe) => te.value = fe), modelModifiers: { number: true }, label: "Pitch cells (\u22652)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : L.value === "dots" ? (Ye(), nn(Me, { key: 3, dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "6" }, { default: Ce(() => [g(Ae, { modelValue: ve.value, "onUpdate:modelValue": W[26] || (W[26] = (fe) => ve.value = fe), modelModifiers: { number: true }, label: "Radius (\u22650.1)", type: "number", min: "0.1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "6" }, { default: Ce(() => [g(Ae, { modelValue: De.value, "onUpdate:modelValue": W[27] || (W[27] = (fe) => De.value = fe), modelModifiers: { number: true }, label: "Spacing (\u22652)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : $n("", true), g(Me, { dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: Q.value, "onUpdate:modelValue": W[28] || (W[28] = (fe) => Q.value = fe), modelModifiers: { number: true }, label: "TR", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: J.value, "onUpdate:modelValue": W[29] || (W[29] = (fe) => J.value = fe), modelModifiers: { number: true }, label: "TG", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: R.value, "onUpdate:modelValue": W[30] || (W[30] = (fe) => R.value = fe), modelModifiers: { number: true }, label: "TB", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: Z.value, "onUpdate:modelValue": W[31] || (W[31] = (fe) => Z.value = fe), modelModifiers: { number: true }, label: "TA", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Pe, { modelValue: H.value, "onUpdate:modelValue": W[32] || (W[32] = (fe) => H.value = fe), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Suppress cells" }, null, 8, ["modelValue"]), g(Me, { dense: "", class: "mt-2" }, { default: Ce(() => [g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: we.value, "onUpdate:modelValue": W[33] || (W[33] = (fe) => we.value = fe), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: he.value, "onUpdate:modelValue": W[34] || (W[34] = (fe) => he.value = fe), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: P.value, "onUpdate:modelValue": W[35] || (W[35] = (fe) => P.value = fe), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(Te, { cols: "3" }, { default: Ce(() => [g(Ae, { modelValue: $.value, "onUpdate:modelValue": W[36] || (W[36] = (fe) => $.value = fe), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(Se, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: G }, { default: Ce(() => [...W[45] || (W[45] = [Xe(" Add Decal ", -1)])]), _: 1 }), g(qe, { class: "my-3" }), w("div", ak, [(Ye(true), Ct(be, null, al(ae.value, (fe) => (Ye(), Ct("div", { key: fe.id, class: "zone-row" }, [w("div", lk, [w("div", null, "#" + We(se(fe)) + " \xB7 " + We(fe.pattern.kind) + " \xB7 " + We(fe.blendMode), 1), w("div", ok, "(" + We(fe.x1) + "," + We(fe.y1) + ") \u2192 (" + We(fe.x2) + "," + We(fe.y2) + ")", 1)]), w("div", ik, [g(Se, { size: "x-small", variant: "text", onClick: (zt) => ie(fe) }, { default: Ce(() => [Xe(We(fe.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(Se, { size: "x-small", variant: "text", color: "error", onClick: (zt) => a("remove-decal", fe.id) }, { default: Ce(() => [...W[46] || (W[46] = [Xe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), ae.value.length === 0 ? (Ye(), Ct("div", rk, "No decals.")) : $n("", true)]), g(Se, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: ae.value.length === 0, onClick: W[37] || (W[37] = (fe) => a("clear-decals")) }, { default: Ce(() => [...W[47] || (W[47] = [Xe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])])) : $n("", true)]), _: 1 })]), _: 1 }))], 2);
  };
} }), ec = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, uk = ec(sk, [["__scopeId", "data-v-04395616"]]), so = 5, uf = 19, ck = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]', dk = da({ __name: "AppBackground", setup(e) {
  const t = C0("AppBackground"), n = K(null);
  let a = null, l = 0, o = null, i = 0, r = 0;
  const s = K(null), u = K(0);
  let c = null;
  function d(P) {
    return P instanceof Error ? P.message : String(P);
  }
  function f(P) {
    return { ...P, edge: { ...P.edge } };
  }
  function v(P) {
    return P.map(($) => f($));
  }
  function S(P) {
    return { ...P, pattern: { ...P.pattern }, tint: [...P.tint] };
  }
  function m(P) {
    return P.map(S);
  }
  function b(P, $) {
    if (a) try {
      $ && $.length > 0 ? a.postMessage(P, $) : a.postMessage(P);
    } catch (q) {
      t.error("Worker postMessage failed:", d(q));
    }
  }
  const h = $0({ onSetZones: (P) => b({ type: "set_zones", zones: v(P) }), onAddZone: (P) => b({ type: "add_zone", zone: f(P) }), onUpdateZone: (P) => b({ type: "update_zone", zone: f(P) }), onRemoveZone: (P) => b({ type: "remove_zone", id: P }), onClearZones: () => b({ type: "clear_zones" }) }), x = q0({ onSetDecals: (P) => b({ type: "set_decals", decals: m(P) }), onAddDecal: (P) => b({ type: "add_decal", decal: S(P) }), onUpdateDecal: (P) => b({ type: "update_decal", decal: S(P) }), onRemoveDecal: (P) => b({ type: "remove_decal", id: P }), onClearDecals: () => b({ type: "clear_decals" }) }), _ = K(false), I = K(false), k = K({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), y = K(null), C = K(null);
  let p = null;
  function T(P) {
    h.addZone(P);
  }
  function A(P) {
    h.updateZone(P);
  }
  function E(P) {
    h.removeZone(P);
  }
  function B() {
    h.clearZones();
  }
  function M(P) {
    _.value = P.enabled, I.value = P.snapMajor, P.enabled || (p = null, y.value = null, C.value = null);
  }
  function D(P) {
    k.value = P;
  }
  function L(P) {
    x.addDecal(P);
  }
  function j(P) {
    x.updateDecal(P);
  }
  function H(P) {
    x.removeDecal(P);
  }
  function Q() {
    x.clearDecals();
  }
  function J() {
    const P = s.value;
    return !P || P.gridPitch === 0 ? null : { gridPitch: P.gridPitch, scrollCanvasPx: u.value, dpr: devicePixelRatio, screenCols: P.screenCols, screenRows: P.screenRows };
  }
  const R = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]);
  function Z(P) {
    if (!(P instanceof HTMLElement)) return false;
    if (P.closest(ck)) return true;
    let $ = P;
    for (; $; ) {
      if (R.has($.tagName) || $.getAttribute("role") === "button") return true;
      $ = $.parentElement;
    }
    return false;
  }
  function U(P, $) {
    return { x1: Math.min(P.cx, $.cx), y1: Math.min(P.cy, $.cy), x2: Math.max(P.cx, $.cx), y2: Math.max(P.cy, $.cy) };
  }
  function O(P, $) {
    return (P % $.screenCols + $.screenCols) % $.screenCols;
  }
  function Y(P) {
    const $ = J();
    if (!$) return null;
    const q = of(P.clientX, P.clientY, $);
    return { cx: O(q.cx, $), cy: q.cy };
  }
  function re(P, $) {
    const q = (ae) => Math.floor(ae / so) * so, oe = (ae) => q(ae) + (so - 1);
    return { x1: Math.max(0, Math.min($.screenCols - 1, q(P.x1))), y1: q(P.y1), x2: Math.max(0, Math.min($.screenCols - 1, oe(P.x2))), y2: oe(P.y2) };
  }
  function pe(P) {
    const $ = Date.now(), q = k.value;
    return { id: typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${$}-${Math.random().toString(36).slice(2, 9)}`, x1: P.x1, y1: P.y1, x2: P.x2, y2: P.y2, mode: q.mode, edge: { ...q.edge }, enabled: true, createdAt: $, updatedAt: $ };
  }
  function te() {
    const P = y.value, $ = J();
    if (!P || !$) {
      C.value = null;
      return;
    }
    const q = P.x1 * $.gridPitch / $.dpr, oe = (P.y1 * $.gridPitch - $.scrollCanvasPx) / $.dpr, ae = (P.x2 - P.x1 + 1) * $.gridPitch / $.dpr, se = (P.y2 - P.y1 + 1) * $.gridPitch / $.dpr;
    C.value = { left: `${q}px`, top: `${oe}px`, width: `${ae}px`, height: `${se}px` };
  }
  function ve(P) {
    if (!_.value || P.button !== 0 || Z(P.target)) return;
    const $ = Y(P);
    $ && (p = $, y.value = { x1: $.cx, y1: $.cy, x2: $.cx, y2: $.cy }, te(), P.target instanceof Element && P.target.setPointerCapture(P.pointerId), P.preventDefault());
  }
  function De(P) {
    if (!_.value || !p) return;
    const $ = Y(P), q = J();
    if (!$ || !q) return;
    const oe = U(p, $);
    y.value = I.value ? re(oe, q) : oe, te();
  }
  function we(P) {
    if (!_.value || !p || P.button !== 0) return;
    P.target instanceof Element && P.target.hasPointerCapture(P.pointerId) && P.target.releasePointerCapture(P.pointerId);
    const $ = Y(P), q = J();
    if ($ && q) {
      const oe = U(p, $), ae = I.value ? re(oe, q) : oe;
      h.addZone(pe(ae));
    }
    p = null, y.value = null, C.value = null;
  }
  function he(P) {
    if (_.value || p || Z(P.target)) return;
    const $ = J();
    if (!$) return;
    const q = of(P.clientX, P.clientY, $), oe = V0(q, $);
    t.debug("Click \u2192", P.clientX, P.clientY, "\u2192 cell", oe.cx, oe.cy), b({ type: "toggle_cell", cx: oe.cx, cy: oe.cy, scrollCanvasPx: $.scrollCanvasPx });
  }
  return wt(() => {
    const P = n.value;
    if (!P) return;
    i = Math.round(window.innerWidth * devicePixelRatio), r = Math.round(window.innerHeight * devicePixelRatio), P.width = i, P.height = r, t.debug("Canvas initialised", i, "x", r, "dpr", devicePixelRatio);
    const $ = P.transferControlToOffscreen();
    a = new Worker(new URL("/assets/backgroundRenderer-TwKQyfEC.js", import.meta.url), { type: "module" }), a.onmessage = (me) => {
      switch (me.data.type) {
        case "ready":
          t.info(`${me.data.backend.toUpperCase()} renderer active`), s.value = me.data.gridInfo, b({ type: "set_zones", zones: v(h.zones.value) }), b({ type: "set_decals", decals: m(x.decals.value) }), te();
          break;
        case "grid_info":
          s.value = me.data.gridInfo, te();
          break;
        case "zones_state":
          h.syncFromWorker(me.data.zones);
          break;
        case "zones_error":
          t.error("Zone update rejected:", me.data.message);
          break;
        case "decals_state":
          x.syncFromWorker(me.data.decals);
          break;
        case "decals_error":
          t.error("Decal update rejected:", me.data.message);
          break;
        case "error":
          me.data.phase === "gpu-init" ? t.debug(`GPU unavailable (${me.data.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${me.data.phase}]:`, me.data.message);
          break;
      }
    }, a.onerror = (me) => {
      t.error("Worker uncaught exception:", me.message, `at ${me.filename}:${me.lineno}`);
    }, document.addEventListener("click", he), document.addEventListener("pointerdown", ve), document.addEventListener("pointermove", De), document.addEventListener("pointerup", we);
    const q = lf(i, uf, devicePixelRatio), oe = 0.8 * q * so / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${oe.toFixed(1)}px`), b({ type: "init", canvas: $, cellPx: q }, [$]), t.debug("Worker spawned, init message sent, gridPitch", q.toFixed(2)), c = document.querySelector(".v-main");
    let ae = -1;
    const se = () => {
      b({ type: "frame" });
      const me = (c == null ? void 0 : c.scrollTop) || window.scrollY;
      me !== ae && (ae = me, u.value = me * devicePixelRatio, b({ type: "scroll", scrollY: u.value }), te()), l = requestAnimationFrame(se);
    };
    l = requestAnimationFrame(se), o = new ResizeObserver(([me]) => {
      const de = Math.round(me.contentRect.width * devicePixelRatio), G = Math.round(me.contentRect.height * devicePixelRatio);
      if (de === i && G === r) return;
      i = de, r = G;
      const ie = lf(de, uf, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * ie * so / devicePixelRatio).toFixed(1)}px`), t.debug("Resize \u2192", de, "x", G), b({ type: "resize", width: de, height: G });
    }), o.observe(P);
  }), dr(() => {
    cancelAnimationFrame(l), o == null ? void 0 : o.disconnect(), document.removeEventListener("click", he), document.removeEventListener("pointerdown", ve), document.removeEventListener("pointermove", De), document.removeEventListener("pointerup", we), b({ type: "stop" }), a == null ? void 0 : a.terminate(), a = null, t.debug("Unmounted, worker terminated");
  }), (P, $) => (Ye(), Ct(be, null, [w("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), C.value ? (Ye(), Ct("div", { key: 0, class: "zone-preview-overlay", style: ye(C.value) }, null, 4)) : $n("", true), g(uk, { zones: Et(h).zones.value, "preview-rect": y.value, decals: Et(x).decals.value, onAddZone: T, onUpdateZone: A, onRemoveZone: E, onClearZones: B, onToolChange: M, onDraftChange: D, onAddDecal: L, onUpdateDecal: j, onRemoveDecal: H, onClearDecals: Q }, null, 8, ["zones", "preview-rect", "decals"])], 64));
} }), fk = ec(dk, [["__scopeId", "data-v-3739da15"]]), vk = da({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (n, a) => {
    const l = Ge("v-app-bar-title"), o = Ge("v-btn"), i = Ge("v-app-bar");
    return Ye(), nn(i, { elevation: "0", color: "background", border: "b" }, { append: Ce(() => [(Ye(), Ct(be, null, al(t, (r) => g(o, { key: r.label, href: r.href, variant: "text", size: "default", class: "nav-ink" }, { default: Ce(() => [Xe(We(r.label), 1)]), _: 2 }, 1032, ["href"])), 64))]), default: Ce(() => [g(l, null, { default: Ce(() => [...a[0] || (a[0] = [w("span", { class: "title-ink font-weight-bold" }, "Anjin Byte (Work in progress...)", -1)])]), _: 1 })]), _: 1 });
  };
} }), mk = { class: "text-medium-emphasis text-caption" }, gk = da({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = Ge("v-footer");
    return Ye(), nn(l, { color: "background", border: "t", class: "justify-center" }, { default: Ce(() => [w("span", mk, " \xA9 " + We(Et(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), hk = {}, yk = { id: "hero", class: "hero-section" };
function bk(e, t) {
  const n = Ge("v-btn"), a = Ge("v-container");
  return Ye(), Ct("section", yk, [g(a, { class: "hero-container" }, { default: Ce(() => [t[2] || (t[2] = w("h1", { class: "text-h3 font-weight-bold text-white mb-2" }, "Taylor Hale", -1)), t[3] || (t[3] = w("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript ", -1)), g(n, { color: "primary", href: "#projects", size: "large", variant: "elevated" }, { default: Ce(() => [...t[0] || (t[0] = [Xe(" View Projects ", -1)])]), _: 1 }), g(n, { class: "ml-3", href: "#contact", size: "large", variant: "outlined", color: "secondary" }, { default: Ce(() => [...t[1] || (t[1] = [Xe(" Contact ", -1)])]), _: 1 })]), _: 1 })]);
}
const Sk = ec(hk, [["render", bk], ["__scopeId", "data-v-bd3b897d"]]), pk = { id: "about" }, kk = { class: "d-flex flex-wrap ga-2" }, wk = da({ __name: "AboutSection", setup(e) {
  const t = ["Rust", "WebAssembly", "TypeScript", "Vue 3", "Vite", "C++", "Python", "Linux", "OpenGL / WGPU", "Git"];
  return (n, a) => {
    const l = Ge("v-chip"), o = Ge("v-col"), i = Ge("v-row"), r = Ge("v-container");
    return Ye(), Ct("section", pk, [g(r, { class: "py-16" }, { default: Ce(() => [g(i, { justify: "center" }, { default: Ce(() => [g(o, { cols: "12", md: "8" }, { default: Ce(() => [a[0] || (a[0] = w("h2", { class: "text-h4 font-weight-bold mb-6" }, "About", -1)), a[1] || (a[1] = w("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " I build high-performance systems with Rust and WebAssembly, bringing low-level computation to the web without sacrificing developer experience. I care about clean architecture, rigorous testing, and shipping things that actually work. ", -1)), w("div", kk, [(Ye(), Ct(be, null, al(t, (s) => g(l, { key: s, color: "primary", variant: "tonal", size: "small" }, { default: Ce(() => [Xe(We(s), 1)]), _: 2 }, 1024)), 64))])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }), xk = { id: "projects" }, Ck = { class: "d-flex flex-wrap ga-1" }, Vk = da({ __name: "ProjectsSection", setup(e) {
  const t = [{ title: "Conway's Game of Life", description: "Classic cellular automaton implemented in Rust, compiled to WebAssembly, and rendered via the Canvas API. Cell state is read directly from WASM linear memory.", tags: ["Rust", "WebAssembly", "Canvas", "Vue 3"], href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }];
  return (n, a) => {
    const l = Ge("v-card-title"), o = Ge("v-card-text"), i = Ge("v-chip"), r = Ge("v-btn"), s = Ge("v-card-actions"), u = Ge("v-card"), c = Ge("v-col"), d = Ge("v-row"), f = Ge("v-container");
    return Ye(), Ct("section", xk, [g(f, { class: "py-16" }, { default: Ce(() => [a[1] || (a[1] = w("h2", { class: "text-h4 font-weight-bold mb-8" }, "Projects", -1)), g(d, null, { default: Ce(() => [(Ye(), Ct(be, null, al(t, (v) => g(c, { key: v.title, cols: "12", md: "6", lg: "4" }, { default: Ce(() => [g(u, { color: "surface", border: "", height: "100%", class: "d-flex flex-column" }, { default: Ce(() => [g(l, { class: "text-h6 pt-5 px-5" }, { default: Ce(() => [Xe(We(v.title), 1)]), _: 2 }, 1024), g(o, { class: "text-medium-emphasis flex-grow-1 px-5" }, { default: Ce(() => [Xe(We(v.description), 1)]), _: 2 }, 1024), g(o, { class: "pt-0 px-5" }, { default: Ce(() => [w("div", Ck, [(Ye(true), Ct(be, null, al(v.tags, (S) => (Ye(), nn(i, { key: S, size: "x-small", color: "secondary", variant: "tonal" }, { default: Ce(() => [Xe(We(S), 1)]), _: 2 }, 1024))), 128))])]), _: 2 }, 1024), v.href ? (Ye(), nn(s, { key: 0, class: "px-5 pb-5" }, { default: Ce(() => [g(r, { href: v.href, target: "_blank", variant: "text", color: "primary", size: "small", "append-icon": "mdi-open-in-new" }, { default: Ce(() => [...a[0] || (a[0] = [Xe(" View on GitHub ", -1)])]), _: 1 }, 8, ["href"])]), _: 2 }, 1024)) : $n("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)), 64))]), _: 1 })]), _: 1 })]);
  };
} }), _k = { id: "contact" }, Ik = { class: "d-flex justify-center flex-wrap ga-3" }, Pk = da({ __name: "ContactSection", setup(e) {
  const t = [{ label: "GitHub", icon: "mdi-github", href: "https://github.com/Anjin-Byte", color: "white" }, { label: "Email", icon: "mdi-email-outline", href: "mailto:thalesarkanzen@gmail.com", color: "secondary" }];
  return (n, a) => {
    const l = Ge("v-btn"), o = Ge("v-container");
    return Ye(), Ct("section", _k, [g(o, { class: "py-16 text-center" }, { default: Ce(() => [a[0] || (a[0] = w("h2", { class: "text-h4 font-weight-bold mb-4" }, "Get in Touch", -1)), a[1] || (a[1] = w("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Open to interesting problems. Reach out anytime. ", -1)), w("div", Ik, [(Ye(), Ct(be, null, al(t, (i) => g(l, { key: i.label, href: i.href, color: i.color, "prepend-icon": i.icon, variant: "outlined", target: "_blank", size: "large" }, { default: Ce(() => [Xe(We(i.label), 1)]), _: 2 }, 1032, ["href", "color", "prepend-icon"])), 64))])]), _: 1 })]);
  };
} }), Ak = da({ __name: "App", setup(e) {
  return (t, n) => {
    const a = Ge("v-main"), l = Ge("v-app");
    return Ye(), nn(l, null, { default: Ce(() => [g(fk), g(vk), g(a, null, { default: Ce(() => [g(Sk), g(wk), g(Vk), g(Pk)]), _: 1 }), g(gk)]), _: 1 });
  };
} });
function ag(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Je = typeof window < "u", tc = Je && "IntersectionObserver" in window, Tk = Je && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), cf = Je && "EyeDropper" in window, nc = Je && "matchMedia" in window && typeof window.matchMedia == "function", zn = () => nc && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function df(e, t, n) {
  Dk(e, t), t.set(e, n);
}
function Dk(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ff(e, t, n) {
  return e.set(lg(e, t), n), n;
}
function Jn(e, t) {
  return e.get(lg(e, t));
}
function lg(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function og(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ll(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), og(e, t.split("."), n));
}
function ht(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return ll(e, t, n);
  if (Array.isArray(t)) return og(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Rn(e) {
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
function Es(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function ac(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Bs = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function ig(e) {
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
function Fs(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Oe(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const rg = /^on[^a-z]/, lc = (e) => rg.test(e), Mk = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Ek = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function Bk(e) {
  return e.isComposing && Ek.includes(e.key);
}
function Gn(e) {
  const [t, n] = Fs(e, [rg]), a = Oe(t, Mk), [l, o] = Fs(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function ot(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function sg(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Et(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Ze(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function vf(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function mf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function gf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Fk(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function hf(e) {
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
    if (Es(o) && Es(i)) {
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
function ug(e) {
  return e.map((t) => t.type === be ? ug(t.children) : t).flat();
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
class cg {
  constructor(t) {
    df(this, Cl, []), df(this, Wa, 0), this.size = t;
  }
  get isFull() {
    return Jn(Cl, this).length === this.size;
  }
  push(t) {
    Jn(Cl, this)[Jn(Wa, this)] = t, ff(Wa, this, (Jn(Wa, this) + 1) % this.size);
  }
  values() {
    return Jn(Cl, this).slice(Jn(Wa, this)).concat(Jn(Cl, this).slice(0, Jn(Wa, this)));
  }
  clear() {
    Jn(Cl, this).length = 0, ff(Wa, this, 0);
  }
}
function $k(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function oc(e) {
  const t = At({});
  ut(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = F(() => t[a]);
  return n;
}
function ji(e, t) {
  return e.includes(t);
}
function dg(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Bt = () => [Function, Array];
function yf(e, t) {
  return t = "on" + Yn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ni(e) {
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
function fg(e, t, n) {
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
    const a = fg(n, t);
    a ? a.focus() : Za(e, t === "next" ? "first" : "last");
  }
}
function vo(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function mr() {
}
function zl(e, t) {
  if (!(Je && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function gr(e) {
  return e.some((t) => Mo(t) ? t.type === Yt ? false : t.type !== be || gr(t.children) : true) ? e : null;
}
function ki(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function Lk(e, t) {
  if (!Je || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Ok(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function Bo() {
  const e = ue(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => ac(e.value) }), t;
}
function Wl(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Da(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Ui(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function Rk(e, t, n) {
  const a = new RegExp(`[\\d\\-${Ui(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${Ui(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function Nk(e) {
  const t = {};
  for (const n in e) t[ln(n)] = e[n];
  return t;
}
function Hk(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function bf(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : yt(n) || _a(n) || Zo(n) ? t(Ee(n)) : Es(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const vg = ["top", "bottom"], zk = ["start", "end", "left", "right"];
function $s(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = ji(vg, n) ? "start" : ji(zk, n) ? "top" : "center"), { side: Ls(n, t), align: Ls(a, t) };
}
function Ls(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ls(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function os(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Sf(e) {
  return { side: e.align, align: e.side };
}
function pf(e) {
  return ji(vg, e.side) ? "y" : "x";
}
class pn {
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
function kf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function mg(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new pn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new pn(e);
}
function Wk(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new pn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new pn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new pn(e);
}
function ic(e) {
  const t = new pn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d(")) l = a.slice(9, -1).split(/, /), o = Number(l[0]), i = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix(")) l = a.slice(7, -1).split(/, /), o = Number(l[0]), i = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else return new pn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new pn({ x: c, y: d, width: f, height: v });
  } else return new pn(t);
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
const Di = /* @__PURE__ */ new WeakMap();
function jk(e, t) {
  Object.keys(t).forEach((n) => {
    if (lc(n)) {
      const a = dg(n), l = Di.get(e);
      if (t[n] == null) l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), Di.has(e) || Di.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Uk(e, t) {
  Object.keys(t).forEach((n) => {
    if (lc(n)) {
      const a = dg(n), l = Di.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Vl = 2.4, wf = 0.2126729, xf = 0.7151522, Cf = 0.072175, Yk = 0.55, Gk = 0.58, Kk = 0.57, qk = 0.62, wi = 0.03, Vf = 1.45, Xk = 5e-4, Zk = 1.25, Jk = 1.25, _f = 0.078, If = 12.82051282051282, xi = 0.06, Pf = 1e-3;
function Af(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * wf + a * xf + l * Cf, u = o * wf + i * xf + r * Cf;
  if (s <= wi && (s += (wi - s) ** Vf), u <= wi && (u += (wi - u) ** Vf), Math.abs(u - s) < Xk) return 0;
  let c;
  if (u > s) {
    const d = (u ** Yk - s ** Gk) * Zk;
    c = d < Pf ? 0 : d < _f ? d - d * If * xi : d - xi;
  } else {
    const d = (u ** qk - s ** Kk) * Jk;
    c = d > -Pf ? 0 : d > -_f ? d - d * If * xi : d + xi;
  }
  return c * 100;
}
const Yi = 0.20689655172413793, Qk = (e) => e > Yi ** 3 ? Math.cbrt(e) : e / (3 * Yi ** 2) + 4 / 29, ew = (e) => e > Yi ? e ** 3 : 3 * Yi ** 2 * (e - 4 / 29);
function gg(e) {
  const t = Qk, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function hg(e) {
  const t = ew, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const tw = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], nw = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, aw = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], lw = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function yg(e) {
  const t = Array(3), n = nw, a = tw;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Ze(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function rc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = lw, i = aw;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Os(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ow(e) {
  return Os(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Tf = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, iw = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => Df({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => Df({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => Wn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => Wn({ h: e, s: t, v: n, a }) };
function dn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Tf.test(e)) {
    const { groups: t } = e.match(Tf), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return iw[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), kg(t);
  } else if (typeof e == "object") {
    if (Ka(e, ["r", "g", "b"])) return e;
    if (Ka(e, ["h", "s", "l"])) return Wn(sc(e));
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
function Df(e) {
  return Wn(sc(e));
}
function ai(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Rs(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function sc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function bg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Sg(e) {
  return bg(Wn(e));
}
function Ci(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function pg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[Ci(t), Ci(n), Ci(a), l !== void 0 ? Ci(Math.round(l * 255)) : ""].join("")}`;
}
function kg(e) {
  e = sw(e);
  let [t, n, a, l] = Fk(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function rw(e) {
  const t = kg(e);
  return ai(t);
}
function wg(e) {
  return pg(Wn(e));
}
function sw(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = mf(mf(e, 6), 8, "F")), e;
}
function uw(e, t) {
  const n = gg(rc(e));
  return n[0] = n[0] + t * 10, yg(hg(n));
}
function cw(e, t) {
  const n = gg(rc(e));
  return n[0] = n[0] - t * 10, yg(hg(n));
}
function Ns(e) {
  const t = dn(e);
  return rc(t)[1];
}
function dw(e, t) {
  const n = Ns(e), a = Ns(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function xg(e) {
  const t = Math.abs(Af(dn(0), dn(e)));
  return Math.abs(Af(dn(16777215), dn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function z(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const ke = z({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function bt(e, t) {
  const n = ei();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = bt(e).type;
  return Xa((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function fw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bt("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const jl = Symbol.for("vuetify:defaults");
function vw(e) {
  return K(e);
}
function uc() {
  const e = He(jl);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ft(e, t) {
  const n = uc(), a = K(e), l = V(() => {
    if (Et(t == null ? void 0 : t.disabled)) return n.value;
    const i = Et(t == null ? void 0 : t.scoped), r = Et(t == null ? void 0 : t.reset), s = Et(t == null ? void 0 : t.root);
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
  return rt(jl, l), l;
}
function mw(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Xa(t)] < "u");
}
function gw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : uc();
  const a = bt("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = V(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (mw(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = ue();
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
    const s = fw(jl, a);
    rt(jl, V(() => i.value ? Ot((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
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
      const o = uc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = gw(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? qt : da)(t);
}
function hw(e, t) {
  return t.props = e, t;
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({ name: n ?? Yn(ln(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...ke() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return va(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function yw(e, t, n, a) {
  if (!n || Da(e) || Da(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function bw(e, t, n) {
  var _a3, _b2;
  if (!n || Da(e) || Da(t)) return null;
  const a = (_a3 = n.get(e)) == null ? void 0 : _a3.get(t);
  if (typeof a == "boolean") return a;
  const l = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof l == "boolean" ? l : null;
}
function Tt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return false;
  const l = bw(e, t, n);
  return l || (yw(e, t, n, true), a.every((o) => Tt(e[o], t[o], n)));
}
function Cg(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Fo = "cubic-bezier(0.4, 0, 0.2, 1)", Mf = "cubic-bezier(0.0, 0, 0.2, 1)", Ef = "cubic-bezier(0.4, 0, 1, 1)", Sw = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function fn(e, t, n) {
  return Object.keys(e).filter((a) => lc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ni(e[l], o, n(o)), a), {});
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? pw(e) : cc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Gi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (cc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function cc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function pw(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function kw(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function ww(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function le(e) {
  const t = bt("useRender");
  t.render = e;
}
function xw(e, t) {
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
    function S() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    o ? v >= t ? S() : n.trailing && (a = setTimeout(S, t - v)) : (o = true, n.leading && S());
  };
  return s.clear = r, s.immediate = e, s;
}
const Ie = [String, Function, Object, Array], Hs = Symbol.for("vuetify:icons"), yr = z({ icon: { type: Ie }, tag: { type: [String, Object, Function], required: true } }, "icon"), zs = ee()({ name: "VComponentIcon", props: yr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return g(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? g(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), dc = qt({ name: "VSvgIcon", inheritAttrs: false, props: yr(), setup(e, t) {
  let { attrs: n } = t;
  return () => g(e.tag, X(n, { style: null }), { default: () => [w("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? w("path", { d: a[0], "fill-opacity": a[1] }, null) : w("path", { d: a }, null)) : w("path", { d: e.icon }, null)])] });
} }), Cw = qt({ name: "VLigatureIcon", props: yr(), setup(e) {
  return () => g(e.tag, null, { default: () => [e.icon] });
} }), fc = qt({ name: "VClassIcon", props: yr(), setup(e) {
  return () => g(e.tag, { class: ne(e.icon) }, null);
} }), Vw = (e) => {
  const t = He(Hs);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: V(() => {
    var _a3;
    const a = at(e);
    if (!a) return { component: zs };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: dc, icon: l };
    if (typeof l != "string") return { component: zs, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, _w = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, Iw = { component: (e) => va(fc, { ...e, class: "mdi" }) };
function Pw() {
  return { svg: { component: dc }, class: { component: fc } };
}
function Aw(e) {
  const t = Pw(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = Iw), Ot({ defaultSet: n, sets: t, aliases: { ..._w, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Ft(e, t) {
  let n;
  function a() {
    n = Rl(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  ce(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), gt(() => {
    n == null ? void 0 : n.stop();
  });
}
function Ve(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = bt("useProxiedModel"), i = K(e[t] !== void 0 ? e[t] : n), r = Xa(t), u = V(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  Ft(() => !u.value, () => {
    ce(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = V({ get() {
    const d = e[t];
    return a(u.value ? d : i.value);
  }, set(d) {
    const f = l(d), v = Ee(u.value ? e[t] : i.value);
    v === f || a(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const Tw = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Bf = "$vuetify.", Ff = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Vg = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Bf)) return Ff(a, o);
  const r = a.replace(Bf, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ll(s, r, null);
  return c || (`${a}${e.value}`, c = ll(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Ff(c, o);
};
function vc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function _g(e, t) {
  return vc(e, t)(0.1).includes(",") ? "," : ".";
}
function is(e, t, n) {
  const a = Ve(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ce(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Ig(e) {
  return (t) => {
    const n = is(t, "locale", e.current), a = is(t, "fallback", e.fallback), l = is(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: F(() => _g(n, a)), t: Vg(n, a, l), n: vc(n, a), provide: Ig({ current: n, fallback: a, messages: l }) };
  };
}
function Dw(e) {
  const t = ue((e == null ? void 0 : e.locale) ?? "en"), n = ue((e == null ? void 0 : e.fallback) ?? "en"), a = K({ en: Tw, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: F(() => (e == null ? void 0 : e.decimalSeparator) ?? _g(t, n)), t: Vg(t, n, a), n: vc(t, n), provide: Ig({ current: t, fallback: n, messages: a }) };
}
const Ul = Symbol.for("vuetify:locale");
function Mw(e) {
  return e.name != null;
}
function Ew(e) {
  const t = (e == null ? void 0 : e.adapter) && Mw(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Dw(e), n = Fw(t, e);
  return { ...t, ...n };
}
function Qe() {
  const e = He(Ul);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Pg(e) {
  const t = He(Ul);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = $w(n, t.rtl, e), l = { ...n, ...a };
  return rt(Ul, l), l;
}
function Bw() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function Fw(e, t) {
  const n = K((t == null ? void 0 : t.rtl) ?? Bw()), a = V(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: F(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function $w(e, t, n) {
  const a = V(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: F(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function xt() {
  const e = He(Ul);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function li(e) {
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
function Lw(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Ag(e), i = Tg(e), r = n ?? ((_a3 = li(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
  let a = (n ?? ((_a3 = li(t)) == null ? void 0 : _a3.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
  return l;
}
function Ow(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = li(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function Ag(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Tg(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Rw(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Nw = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Dg(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Nw.test(e)) return Rw(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const $f = new Date(2e3, 0, 2);
function Hw(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = li(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Rn(7).map((l) => {
    const o = new Date($f);
    return o.setDate($f.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function zw(e, t, n, a) {
  const l = Dg(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function Ww(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = gf(String(n.getMonth() + 1), 2, "0"), o = gf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function jw(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function Uw(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function Yw(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Ja(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Gw(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Kw(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function $o(e) {
  return e.getFullYear();
}
function qw(e) {
  return e.getMonth();
}
function Xw(e, t, n, a) {
  const l = li(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? Zw(e, t, o, a) : Jw(e, t, o, i);
}
function Zw(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = Ja(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = $o(o);
  s < $o(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? Ja(u, -c) : Ja(u, 7 - c);
  return 1 + qi(mc(o), Lo(d), "weeks");
}
function Jw(e, t, n, a) {
  const l = Co(e, t, n), o = Ja(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - qi(f, Co(f, t, n), "days");
  }
  let r = $o(l);
  r < $o(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? Ja(s, u - 7) : Ja(s, u);
  return 1 + qi(mc(l), Lo(c), "weeks");
}
function Qw(e) {
  return e.getDate();
}
function ex(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function tx(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function nx(e) {
  return e.getHours();
}
function ax(e) {
  return e.getMinutes();
}
function lx(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function ox(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function ix(e, t) {
  return Ki(e, t[0]) && ux(e, t[1]);
}
function rx(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ki(e, t) {
  return e.getTime() > t.getTime();
}
function sx(e, t) {
  return Ki(Lo(e), Lo(t));
}
function ux(e, t) {
  return e.getTime() < t.getTime();
}
function Lf(e, t) {
  return e.getTime() === t.getTime();
}
function cx(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function dx(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function fx(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function qi(e, t, n) {
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
function vx(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function mx(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function gx(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function hx(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function yx(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Lo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function mc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class bx {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Dg(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Ww(this, t);
  }
  parseISO(t) {
    return jw(t);
  }
  addMinutes(t, n) {
    return Uw(t, n);
  }
  addHours(t, n) {
    return Yw(t, n);
  }
  addDays(t, n) {
    return Ja(t, n);
  }
  addWeeks(t, n) {
    return Gw(t, n);
  }
  addMonths(t, n) {
    return Kw(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Lw(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return Ow(t, this.locale);
  }
  startOfMonth(t) {
    return Ag(t);
  }
  endOfMonth(t) {
    return Tg(t);
  }
  format(t, n) {
    return zw(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Lf(t, n);
  }
  isValid(t) {
    return rx(t);
  }
  isWithinRange(t, n) {
    return ix(t, n);
  }
  isAfter(t, n) {
    return Ki(t, n);
  }
  isAfterDay(t, n) {
    return sx(t, n);
  }
  isBefore(t, n) {
    return !Ki(t, n) && !Lf(t, n);
  }
  isSameDay(t, n) {
    return cx(t, n);
  }
  isSameMonth(t, n) {
    return dx(t, n);
  }
  isSameYear(t, n) {
    return fx(t, n);
  }
  setMinutes(t, n) {
    return mx(t, n);
  }
  setHours(t, n) {
    return vx(t, n);
  }
  setMonth(t, n) {
    return gx(t, n);
  }
  setDate(t, n) {
    return hx(t, n);
  }
  setYear(t, n) {
    return yx(t, n);
  }
  getDiff(t, n, a) {
    return qi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return Hw(this.locale, a, n);
  }
  getYear(t) {
    return $o(t);
  }
  getMonth(t) {
    return qw(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return Xw(t, this.locale, l, o);
  }
  getDate(t) {
    return Qw(t);
  }
  getNextMonth(t) {
    return ex(t);
  }
  getPreviousMonth(t) {
    return tx(t);
  }
  getHours(t) {
    return nx(t);
  }
  getMinutes(t) {
    return ax(t);
  }
  startOfDay(t) {
    return Lo(t);
  }
  endOfDay(t) {
    return mc(t);
  }
  startOfYear(t) {
    return lx(t);
  }
  endOfYear(t) {
    return ox(t);
  }
}
const Mg = Symbol.for("vuetify:date-options"), Of = Symbol.for("vuetify:date-adapter");
function Sx(e, t) {
  const n = Ot({ adapter: bx, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Bg(n, t) };
}
function px(e, t, n) {
  const a = Eg(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Eg(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Bg(e, t) {
  const n = At(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return ce(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function vl() {
  const e = He(Mg);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Qe();
  return Bg(e, t);
}
const br = ["sm", "md", "lg", "xl", "xxl"], Ws = Symbol.for("vuetify:display"), Rf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, kx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rf;
  return Ot(Rf, e);
};
function Nf(e) {
  return Je && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Hf(e) {
  return Je && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function zf(e) {
  const t = Je && !e ? window.navigator.userAgent : "ssr";
  function n(S) {
    return !!t.match(S);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: Tk, ssr: t === "ssr" };
}
function wx(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = kx(e), l = ue(Hf(t)), o = ue(zf(t)), i = At({}), r = ue(Nf(t));
  function s() {
    l.value = Hf(), r.value = Nf();
  }
  function u() {
    s(), o.value = zf();
  }
  return ut(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), S = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, b = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : S ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], x = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = S, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || S || m), i.mdAndDown = !(v || S || m), i.lgAndDown = !(S || m), i.xlAndDown = !m, i.name = b, i.height = l.value, i.width = r.value, i.mobile = x, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Je && (window.addEventListener("resize", s, { passive: true }), gt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...Xl(i), update: u, ssr: !!t };
}
const ml = z({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function hn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  const n = He(Ws);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = V(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: F(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const Fg = Symbol.for("vuetify:goto");
function $g() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: Sw };
}
function xx(e) {
  return gc(e) ?? (document.scrollingElement || document.body);
}
function gc(e) {
  return typeof e == "string" ? document.querySelector(e) : ac(e);
}
function rs(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = gc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Cx(e, t) {
  return { rtl: t.isRtl, options: Ot($g(), e) };
}
async function Wf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Ot((a == null ? void 0 : a.options) ?? $g(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : gc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : xx(o.container), u = zn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = rs(r, n, i);
  else if (c = rs(r, n, i) - rs(s, n, i), o.layout) {
    const S = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    S && (c -= parseInt(S, 10));
  }
  c += o.offset, c = _x(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function S(m) {
    const h = (m - f) / o.duration, x = Math.floor(d + (c - d) * u(Ze(h, 0, 1)));
    if (s[l] = x, h >= 1 && Math.abs(x - s[l]) < 10) return v(c);
    if (h > 2) return v(s[l]);
    requestAnimationFrame(S);
  }));
}
function Vx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = He(Fg), { isRtl: n } = xt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: F(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Wf(o, Ot(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Wf(o, Ot(e, i), true, a), l;
}
function _x(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Ze(t, s, u);
}
const Oo = Symbol.for("vuetify:theme"), ze = z({ theme: String }, "theme");
function jf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Ix() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jf();
  const t = jf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Ot(o, l);
  }
  return Ot(t, { ...e, themes: n });
}
function ja(e, t, n, a) {
  e.push(`${Dx(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function Uf(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = dn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${Ns(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? dn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function Px(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? uw : cw;
    for (const i of Rn(n[l], 1)) a[`${e}-${l}-${i}`] = pg(o(dn(t), i));
  }
  return a;
}
function Ax(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...Px(a, l, t) });
  }
  return n;
}
function Tx(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = dn(e[n]);
    t[a] = xg(l);
  }
  return t;
}
function Dx(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function Mx(e, t, n) {
  const a = Ex(e, t);
  a && (a.innerHTML = n);
}
function Ex(e, t) {
  if (!Je) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function Bx(e) {
  const t = Ix(e), n = ue(t.defaultTheme), a = K(t.themes), l = ue("light"), o = V({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = V(() => {
    const h = {};
    for (const [x, _] of Object.entries(a.value)) {
      const I = { ..._.colors, ...Ax(_.colors, t.variations) };
      h[x] = { ..._, colors: { ...I, ...Tx(I) } };
    }
    return h;
  }), r = F(() => i.value[o.value]), s = F(() => n.value === "system"), u = V(() => {
    var _a3;
    const h = [], x = t.unimportant ? "" : " !important", _ = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && ja(h, ":root", ["color-scheme: dark"], t.scope), ja(h, ":root", Uf(r.value, t.prefix), t.scope);
    for (const [k, y] of Object.entries(i.value)) ja(h, `.${t.prefix}theme--${k}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...Uf(y, t.prefix)], t.scope);
    if (t.utilities) {
      const k = [], y = [], C = new Set(Object.values(i.value).flatMap((p) => Object.keys(p.colors)));
      for (const p of C) p.startsWith("on-") ? ja(y, `.${p}`, [`color: rgb(var(--${t.prefix}theme-${p}))${x}`], t.scope) : (ja(k, `.${_}bg-${p}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${p}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${p}))${x}`, `color: rgb(var(--${t.prefix}theme-on-${p}))${x}`], t.scope), ja(y, `.${_}text-${p}`, [`color: rgb(var(--${t.prefix}theme-${p}))${x}`], t.scope), ja(y, `.${_}border-${p}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${p})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...k.map((p) => `  ${p}`), `}
`, `@layer foreground {
`, ...y.map((p) => `  ${p}`), `}
`) : h.push(...k, ...y);
    }
    let I = h.map((k, y) => y === 0 ? k : `    ${k}`).join("");
    return t.layers && (I = `@layer vuetify.theme {
` + h.map((k) => `  ${k}`).join("") + `
}`), I;
  }), c = F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = F(() => Object.keys(i.value));
  if (nc) {
    let x = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    x(), h.addEventListener("change", x, { passive: true }), Rv() && gt(() => {
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
        Je && ce(u, () => {
          I.patch(_);
        });
      } else Je ? (x.addHeadObjs(F(_)), ut(() => x.updateDOM())) : x.addHeadObjs(_());
    } else {
      let _ = function() {
        Mx(t.stylesheetId, t.cspNonce, u.value);
      };
      Je ? ce(u, _, { immediate: true }) : _();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function S() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const x = h.indexOf(o.value), _ = x === -1 ? 0 : (x + 1) % h.length;
    v(h[_]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    S(h);
  }
  const b = new Proxy(o, { get(h, x) {
    return Reflect.get(h, x);
  }, set(h, x, _) {
    return x === "value" && ag(`theme.global.name.value = ${_}`, `theme.change('${_}')`), Reflect.set(h, x, _);
  } });
  return { install: f, change: v, cycle: S, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: b, current: r } };
}
function Ue(e) {
  bt("provideTheme");
  const t = He(Oo, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = F(() => e.theme ?? t.name.value), o = { ...t, name: n, current: F(() => t.themes.value[n.value]), themeClasses: F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return rt(Oo, o), o;
}
function Sr() {
  bt("useTheme");
  const e = He(Oo, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Bo(), a = K();
  if (Je) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Nt(() => {
      l.disconnect();
    }), ce(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: tl(a) };
}
const Ro = Symbol.for("vuetify:layout"), Lg = Symbol.for("vuetify:layout-item"), Yf = 1e3, Og = z({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), gl = z({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Rg() {
  const e = He(Ro);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function hl(e) {
  const t = He(Ro);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Mt()}`, a = bt("useLayoutItem");
  rt(Lg, { id: n });
  const l = ue(false);
  Nu(() => l.value = true), Sm(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: V(() => l.value ? false : e.active.value), id: n });
  return Nt(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const Fx = (e, t, n, a) => {
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
function Ng(e) {
  const t = He(Ro, null), n = V(() => t ? t.rootZIndex.value - 100 : Yf), a = K([]), l = At(/* @__PURE__ */ new Map()), o = At(/* @__PURE__ */ new Map()), i = At(/* @__PURE__ */ new Map()), r = At(/* @__PURE__ */ new Map()), s = At(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = kn(), d = V(() => {
    const y = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const p of C.filter((T) => T.includes(":"))) {
      const [T, A] = p.split(":");
      if (!a.value.includes(T) || !a.value.includes(A)) continue;
      const E = l.get(T), B = l.get(A), M = o.get(T), D = o.get(A);
      !E || !B || !M || !D || (y.set(A, { position: E.value, amount: parseInt(M.value, 10) }), y.set(T, { position: B.value, amount: -parseInt(D.value, 10) }));
    }
    return y;
  }), f = V(() => {
    const y = [...new Set([...i.values()].map((p) => p.value))].sort((p, T) => p - T), C = [];
    for (const p of y) {
      const T = a.value.filter((A) => {
        var _a3;
        return ((_a3 = i.get(A)) == null ? void 0 : _a3.value) === p;
      });
      C.push(...T);
    }
    return Fx(C, l, o, r);
  }), v = V(() => !Array.from(s.values()).some((y) => y.value)), S = V(() => f.value[f.value.length - 1].layer), m = F(() => ({ "--v-layout-left": ge(S.value.left), "--v-layout-right": ge(S.value.right), "--v-layout-top": ge(S.value.top), "--v-layout-bottom": ge(S.value.bottom), ...v.value ? void 0 : { transition: "none" } })), b = V(() => f.value.slice(1).map((y, C) => {
    let { id: p } = y;
    const { layer: T } = f.value[C], A = o.get(p), E = l.get(p);
    return { id: p, ...T, size: Number(A.value), position: E.value };
  })), h = (y) => b.value.find((C) => C.id === y), x = bt("createLayout"), _ = ue(false);
  return wt(() => {
    _.value = true;
  }), rt(Ro, { register: (y, C) => {
    let { id: p, order: T, position: A, layoutSize: E, elementSize: B, active: M, disableTransitions: D, absolute: L } = C;
    i.set(p, T), l.set(p, A), o.set(p, E), r.set(p, M), D && s.set(p, D);
    const H = Ml(Lg, x == null ? void 0 : x.vnode).indexOf(y);
    H > -1 ? a.value.splice(H, 0, p) : a.value.push(p);
    const Q = V(() => b.value.findIndex((U) => U.id === p)), J = V(() => n.value + f.value.length * 2 - Q.value * 2), R = V(() => {
      const U = A.value === "left" || A.value === "right", O = A.value === "right", Y = A.value === "bottom", re = B.value ?? E.value, pe = re === 0 ? "%" : "px", te = { [A.value]: 0, zIndex: J.value, transform: `translate${U ? "X" : "Y"}(${(M.value ? 0 : -(re === 0 ? 100 : re)) * (O || Y ? -1 : 1)}${pe})`, position: L.value || n.value !== Yf ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!_.value) return te;
      const ve = b.value[Q.value], De = d.value.get(p);
      return De && (ve[De.position] += De.amount), { ...te, height: U ? `calc(100% - ${ve.top}px - ${ve.bottom}px)` : B.value ? `${B.value}px` : void 0, left: O ? void 0 : `${ve.left}px`, right: O ? `${ve.right}px` : void 0, top: A.value !== "bottom" ? `${ve.top}px` : void 0, bottom: A.value !== "top" ? `${ve.bottom}px` : void 0, width: U ? B.value ? `${B.value}px` : void 0 : `calc(100% - ${ve.left}px - ${ve.right}px)` };
    }), Z = V(() => ({ zIndex: J.value - 1 }));
    return { layoutItemStyles: R, layoutItemScrimStyles: Z, zIndex: J };
  }, unregister: (y) => {
    i.delete(y), l.delete(y), o.delete(y), r.delete(y), s.delete(y), a.value = a.value.filter((C) => C !== y);
  }, mainRect: S, mainStyles: m, getLayoutItem: h, items: b, layoutRect: c, rootZIndex: n }), { layoutClasses: F(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: F(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: b, layoutRect: c, layoutRef: u };
}
const $x = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function Gf(e) {
  const t = e.toLowerCase();
  return $x[t] || t;
}
function Hg(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(Gf(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [Gf(e)], separators: o } : { keys: l, separators: o };
}
function Lx(e) {
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
  return i.every((u) => Hg(u).keys.length > 0) ? i : [];
}
function zg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Ot(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Rl();
  return r.run(() => {
    const s = vw(a.defaults), u = wx(a.display, a.ssr), c = Bx(a.theme), d = Aw(a.icons), f = Ew(a.locale), v = Sx(a.date, f), S = Cx(a.goTo, f);
    function m(h) {
      for (const _ in i) h.directive(_, i[_]);
      for (const _ in o) h.component(_, o[_]);
      for (const _ in l) h.component(_, qt({ ...l[_], name: _, aliasName: l[_].name }));
      const x = Rl();
      if (x.run(() => {
        c.install(h);
      }), h.onUnmount(() => x.stop()), h.provide(jl, s), h.provide(Ws, u), h.provide(Oo, c), h.provide(Hs, d), h.provide(Ul, f), h.provide(Mg, v.options), h.provide(Of, v.instance), h.provide(Fg, S), Je && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: _ } = h;
        h.mount = function() {
          const I = _(...arguments);
          return Be(() => u.update()), h.mount = _, I;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return At({ defaults: _l.call(this, jl), display: _l.call(this, Ws), theme: _l.call(this, Oo), icons: _l.call(this, Hs), locale: _l.call(this, Ul), date: _l.call(this, Of) });
      } } });
    }
    function b() {
      r.stop();
    }
    return { install: m, unmount: b, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: S };
  });
}
const Ox = "3.12.1";
zg.version = Ox;
function _l(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const Rx = z({ ...ke(), ...Oe(Og(), ["fullHeight"]), ...ze() }, "VApp"), Nx = ee()({ name: "VApp", props: Rx(), setup(e, t) {
  let { slots: n } = t;
  const a = Ue(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = Ng({ ...e, fullHeight: true }), { rtlClasses: s } = xt();
  return le(() => {
    var _a3;
    return w("div", { ref: r, class: ne(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: ye([e.style]) }, [w("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Fe = z({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Wg = z({ text: String, ...ke(), ...Fe() }, "VToolbarTitle"), hc = ee()({ name: "VToolbarTitle", props: Wg(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = !!(n.default || n.text || e.text);
    return g(e.tag, { class: ne(["v-toolbar-title", e.class]), style: ye(e.style) }, { default: () => {
      var _a3;
      return [a && w("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), Hx = z({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function yn(e, t, n) {
  return ee()({ name: e, props: Hx({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? Uu : Ta;
      return va(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function yc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: zn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? Uu : Ta;
    return () => va(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function bc() {
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
const zx = z({ target: [Object, Array] }, "v-dialog-transition"), ss = /* @__PURE__ */ new WeakMap(), pr = ee()({ name: "VDialogTransition", props: zx(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = qf(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (ss.set(l, i), zn()) ta(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Mf }).finished.then(() => o());
    else {
      const f = ta(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Mf });
      (_a3 = Kf(l)) == null ? void 0 : _a3.forEach((v) => {
        ta(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Fo });
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
    !ss.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = qf(e.target, l) : i = ss.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    zn() ? ta(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: Ef }).finished.then(() => o()) : (ta(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: Ef }).finished.then(() => o()), (_a3 = Kf(l)) == null ? void 0 : _a3.forEach((v) => {
      ta(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Fo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? g(Ta, X({ name: "dialog-transition" }, a, { css: false }), n) : g(Ta, { name: "dialog-transition" }, n);
} });
function Kf(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function qf(e, t) {
  const n = mg(e), a = ic(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, S = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), b = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: S, speed: b };
}
const Wx = yn("fab-transition", "center center", "out-in"), jx = yn("dialog-bottom-transition"), Ux = yn("dialog-top-transition"), No = yn("fade-transition"), Sc = yn("scale-transition"), Yx = yn("scroll-x-transition"), Gx = yn("scroll-x-reverse-transition"), Kx = yn("scroll-y-transition"), qx = yn("scroll-y-reverse-transition"), Xx = yn("slide-x-transition"), Zx = yn("slide-x-reverse-transition"), pc = yn("slide-y-transition"), Jx = yn("slide-y-reverse-transition"), kr = yc("expand-transition", bc()), kc = yc("expand-x-transition", bc("", "x")), Qx = yc("expand-both-transition", bc("", "both")), eC = z({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), $e = ee(false)({ name: "VDefaultsProvider", props: eC(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = Xl(e);
  return ft(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), St = z({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function pt(e) {
  return { dimensionStyles: V(() => {
    const n = {}, a = ge(e.height), l = ge(e.maxHeight), o = ge(e.maxWidth), i = ge(e.minHeight), r = ge(e.minWidth), s = ge(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function tC(e) {
  return { aspectStyles: V(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const jg = z({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...ke(), ...St() }, "VResponsive"), js = ee()({ name: "VResponsive", props: jg(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = tC(e), { dimensionStyles: l } = pt(e);
  return le(() => {
    var _a3;
    return w("div", { class: ne(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: ye([l.value, e.style]) }, [w("div", { class: "v-responsive__sizer", style: ye(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && w("div", { class: ne(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function wc(e) {
  return oc(() => {
    const { class: t, style: n } = Ug(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Dt(e) {
  const { colorClasses: t, colorStyles: n } = wc(() => ({ text: at(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Ke(e) {
  const { colorClasses: t, colorStyles: n } = wc(() => ({ background: at(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function nC(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Ug(e) {
  const t = nC(at(e)), n = [], a = {};
  if (t.background) if (Os(t.background)) {
    if (a.backgroundColor = t.background, !t.text && ow(t.background)) {
      const l = dn(t.background);
      if (l.a == null || l.a === 1) {
        const o = xg(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Os(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const it = z({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { roundedClasses: V(() => {
    const a = yt(e) ? e.value : e.rounded, l = yt(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const ga = z({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Kt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? Uu : Ta, ...s } = ol(a) ? a : {};
  let u;
  return ol(a) ? u = X(s, Hk({ disabled: l, group: o }), i) : u = X({ name: l || !a ? "" : a }, i), va(r, u, n);
};
function Xf(e, t) {
  if (!tc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? Us(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function Us(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const An = { mounted: Xf, unmounted: Us, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (Us(e, t), Xf(e, t));
} }, Yg = z({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...jg(), ...ke(), ...it(), ...ga() }, "VImg"), ua = ee()({ name: "VImg", directives: { vIntersect: An }, props: Yg(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.color), { roundedClasses: i } = ct(e), r = bt("VImg"), s = ue(""), u = K(), c = ue(e.eager ? "loading" : "idle"), d = ue(), f = ue(), v = V(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), S = V(() => v.value.aspect || d.value / f.value || 0);
  ce(() => e.src, () => {
    m(c.value !== "idle");
  }), ce(S, (B, M) => {
    !B && M && u.value && I(u.value);
  }), Zl(() => m());
  function m(B) {
    if (!(e.eager && B) && !(tc && !B && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const M = new Image();
        M.src = v.value.lazySrc, I(M, null);
      }
      v.value.src && Be(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || h(), c.value === "error") return;
            S.value || I(u.value, null), c.value === "loading" && b();
          } else S.value || I(u.value), x();
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
    const B = u.value;
    B && (s.value = B.currentSrc || B.src);
  }
  let _ = -1;
  Nt(() => {
    clearTimeout(_);
  });
  function I(B) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const D = () => {
      if (clearTimeout(_), r.isUnmounted) return;
      const { naturalHeight: L, naturalWidth: j } = B;
      L || j ? (d.value = j, f.value = L) : !B.complete && c.value === "loading" && M != null ? _ = window.setTimeout(D, M) : (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    D();
  }
  const k = F(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), y = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const B = w("img", { class: ne(["v-img__img", k.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: b, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return g(Kt, { transition: e.transition, appear: true }, { default: () => [lt(M ? w("picture", { class: "v-img__picture" }, [M, B]) : B, [[Dn, c.value === "loaded"]])] });
  }, C = () => g(Kt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && w("img", { class: ne(["v-img__img", "v-img__img--preload", k.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), p = () => a.placeholder ? g(Kt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && w("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, T = () => a.error ? g(Kt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && w("div", { class: "v-img__error" }, [a.error()])] }) : null, A = () => e.gradient ? w("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = ue(false);
  {
    const B = ce(S, (M) => {
      M && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = true;
        });
      }), B());
    });
  }
  return le(() => {
    const B = js.filterProps(e);
    return lt(g(js, X({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ge(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, B, { aspectRatio: S.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => w(be, null, [g(y, null, null), g(C, null, null), g(A, null, null), g(p, null, null), g(T, null, null)]), default: a.default }), [[An, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), Ht = z({ border: [Boolean, Number, String] }, "border");
function Xt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { borderClasses: V(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const kt = z({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function _t(e) {
  return { elevationClasses: F(() => {
    const n = yt(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const Zf = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, qn = z({ location: String }, "location");
function Oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = xt();
  return { locationStyles: V(() => {
    if (!e.location) return {};
    const { side: o, align: i } = $s(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[Zf[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[Zf[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const aC = [null, "prominent", "default", "comfortable", "compact"], Gg = z({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => aC.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Ht(), ...ke(), ...kt(), ...qn(), ...it(), ...Fe({ tag: "header" }), ...ze() }, "VToolbar"), Ys = ee()({ name: "VToolbar", props: Gg(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ke(() => e.color), { borderClasses: o } = Xt(e), { elevationClasses: i } = _t(e), { locationStyles: r } = Oa(e), { roundedClasses: s } = ct(e), { themeClasses: u } = Ue(e), { rtlClasses: c } = xt(), d = ue(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = V(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = V(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return ft({ VBtn: { variant: "text" } }), le(() => {
    var _a4;
    const S = !!(e.title || n.title), m = !!(n.image || e.image), b = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!b : e.extended, g(e.tag, { class: ne(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: ye([l.value, r.value, e.style]) }, { default: () => [m && w("div", { key: "image", class: "v-toolbar__image" }, [n.image ? g($e, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : g(ua, { key: "image-img", cover: true, src: e.image }, null)]), g($e, { defaults: { VTabs: { height: ge(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [w("div", { class: "v-toolbar__content", style: { height: ge(f.value) } }, [n.prepend && w("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), S && g(hc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && w("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), g($e, { defaults: { VTabs: { height: ge(v.value) } } }, { default: () => [g(kr, null, { default: () => [d.value && w("div", { class: "v-toolbar__extension", style: { height: ge(v.value) } }, [b])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), lC = z({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function oC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = K(null), r = ue(0), s = ue(0), u = ue(0), c = ue(false), d = ue(false), f = ue(false), v = ue(false), S = ue(true), m = V(() => Number(e.scrollThreshold)), b = V(() => Ze((m.value - r.value) / m.value || 0));
  function h(k) {
    const y = "window" in k ? window.innerHeight : k.clientHeight, C = "window" in k ? document.documentElement.scrollHeight : k.scrollHeight;
    return { clientHeight: y, scrollHeight: C };
  }
  function x() {
    const k = i.value;
    if (!k) return;
    const { clientHeight: y, scrollHeight: C } = h(k), p = C - y, T = (a == null ? void 0 : a.value) || 0, A = m.value + T;
    S.value = p > A;
  }
  function _() {
    x();
  }
  function I() {
    const k = i.value;
    if (!k || n && !n.value) return;
    l = r.value, r.value = "window" in k ? k.pageYOffset : k.scrollTop;
    const y = k instanceof Window ? document.documentElement.scrollHeight : k.scrollHeight;
    o !== y && (y > o && x(), o = y), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: p } = h(k), T = r.value + C >= p - 5;
    !d.value && T && r.value >= m.value && S.value && (v.value = true);
    const A = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !T || A && r.value < m.value || E) && (v.value = false), f.value = T;
  }
  return ce(d, () => {
    s.value = s.value || r.value;
  }), ce(c, () => {
    s.value = 0;
  }), wt(() => {
    ce(() => e.scrollTarget, (k) => {
      var _a3;
      const y = k ? document.querySelector(k) : window;
      y && y !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", I), i.value = y, i.value.addEventListener("scroll", I, { passive: true }), Promise.resolve().then(() => {
        x();
      }));
    }, { immediate: true }), window.addEventListener("resize", _, { passive: true });
  }), Nt(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", I), window.removeEventListener("resize", _);
  }), n && ce(n, I, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: b, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S };
}
function yl() {
  const e = ue(false);
  return wt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: F(() => e.value ? void 0 : { transition: "none !important" }), isBooted: tl(e) };
}
const iC = z({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Oe(Gg(), ["location"]), ...gl(), ...lC(), height: { type: [Number, String], default: 64 } }, "VAppBar"), rC = ee()({ name: "VAppBar", props: iC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = Ve(e, "modelValue"), o = V(() => {
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
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S } = oC(e, { canScroll: i, layoutSize: r }), m = F(() => o.value.hide || o.value.fullyHide), b = V(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = V(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), x = V(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), _ = V(() => {
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
      if (!S.value) {
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
  const { ssrBootStyles: I } = yl(), { layoutItemStyles: k } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: F(() => e.location), layoutSize: _, elementSize: ue(void 0), active: l, absolute: F(() => e.absolute) });
  return le(() => {
    const y = Oe(Ys.filterProps(e), ["location"]);
    return g(Ys, X({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...k.value, "--v-toolbar-image-opacity": x.value, height: void 0, ...I.value }, e.style] }, y, { collapse: b.value, flat: h.value }), n);
  }), {};
} }), sC = [null, "default", "comfortable", "compact"], vt = z({ density: { type: String, default: "default", validator: (e) => sC.includes(e) } }, "density");
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { densityClasses: F(() => `${t}--density-${e.density}`) };
}
const uC = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ha(e, t) {
  return w(be, null, [e && w("span", { key: "overlay", class: ne(`${t}__overlay`) }, null), w("span", { key: "underlay", class: ne(`${t}__underlay`) }, null)]);
}
const bn = z({ color: String, variant: { type: String, default: "elevated", validator: (e) => uC.includes(e) } }, "variant");
function ya(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  const n = F(() => {
    const { variant: o } = at(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = wc(() => {
    const { variant: o, color: i } = at(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const Kg = z({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Ht(), ...ke(), ...vt(), ...kt(), ...it(), ...Fe(), ...ze(), ...bn() }, "VBtnGroup"), Gs = ee()({ name: "VBtnGroup", props: Kg(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { densityClasses: l } = Lt(e), { borderClasses: o } = Xt(e), { elevationClasses: i } = _t(e), { roundedClasses: r } = ct(e);
  ft({ VBtn: { height: F(() => e.direction === "horizontal" ? "auto" : null), baseColor: F(() => e.baseColor), color: F(() => e.color), density: F(() => e.density), flat: true, variant: F(() => e.variant) } }), le(() => g(e.tag, { class: ne(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: ye(e.style) }, n));
} }), bl = z({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Sl = z({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ma(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = bt("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Mt();
  rt(Symbol.for(`${t.description}:id`), l);
  const o = He(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = F(() => e.value), r = V(() => !!(o.disabled.value || e.disabled));
  function s() {
    o == null ? void 0 : o.register({ id: l, value: i, disabled: r }, a);
  }
  function u() {
    o == null ? void 0 : o.unregister(l);
  }
  s(), Nt(() => u());
  const c = V(() => o.isSelected(l)), d = V(() => o.items.value[0].id === l), f = V(() => o.items.value[o.items.value.length - 1].id === l), v = V(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return ce(c, (S) => {
    a.emit("group:selected", { value: S });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (S) => o.select(l, S), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Ra(e, t) {
  let n = false;
  const a = At([]), l = Ve(e, "modelValue", [], (f) => f === void 0 ? [] : qg(a, f === null ? [null] : ot(f)), (f) => {
    const v = dC(a, f);
    return e.multiple ? v : v[0];
  }), o = bt("useGroup");
  function i(f, v) {
    const S = f, m = Symbol.for(`${t.description}:id`), h = Ml(m, o == null ? void 0 : o.vnode).indexOf(v);
    Et(S.value) === void 0 && (S.value = h, S.useIndexAsValue = true), h > -1 ? a.splice(h, 0, S) : a.push(S);
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
  wt(() => {
    s();
  }), Nt(() => {
    n = true;
  }), cr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const S = a.find((m) => m.id === f);
    if (!(v && (S == null ? void 0 : S.disabled))) if (e.multiple) {
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
      const v = l.value[0], S = a.findIndex((h) => h.id === v);
      let m = (S + f) % a.length, b = a[m];
      for (; b.disabled && m !== S; ) m = (m + f) % a.length, b = a[m];
      if (b.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((S) => !S.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: u, disabled: F(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: F(() => e.selectedClass), items: F(() => a), getItemIndex: (f) => cC(a, f) };
  return rt(t, d), d;
}
function cC(e, t) {
  const n = qg(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function qg(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Tt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function dC(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const xc = Symbol.for("vuetify:v-btn-toggle"), fC = z({ ...Kg(), ...bl() }, "VBtnToggle"), vC = ee()({ name: "VBtnToggle", props: fC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Ra(e, xc);
  return le(() => {
    const s = Gs.filterProps(e);
    return g(Gs, X({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), mC = ["x-small", "small", "default", "large", "x-large"], Xn = z({ size: { type: [String, Number], default: "default" } }, "size");
function Jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return oc(() => {
    const n = e.size;
    let a, l;
    return ji(mC, n) ? a = `${t}--size-${n}` : n && (l = { width: ge(n), height: ge(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const gC = z({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ie, opacity: [String, Number], ...ke(), ...Xn(), ...Fe({ tag: "i" }), ...ze() }, "VIcon"), je = ee()({ name: "VIcon", props: gC(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = ue(), { themeClasses: o } = Sr(), { iconData: i } = Vw(() => l.value || e.icon), { sizeClasses: r } = Jl(e), { textColorClasses: s, textColorStyles: u } = Dt(() => e.color);
  return le(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = ug(c).filter((f) => f.type === Qo && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return g(i.value.component, { tag: e.tag, icon: i.value.icon, class: ne(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: ye([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ge(e.size), height: ge(e.size), width: ge(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function oi(e, t) {
  const n = K(), a = ue(false);
  if (tc) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    gt(() => {
      l.disconnect();
    }), ce(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const hC = z({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function yC(e) {
  const n = F(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = ue(e.reveal ? "initial" : "disabled");
  return wt(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const bC = z({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ke(), ...hC(), ...Xn(), ...Fe({ tag: "div" }), ...ze() }, "VProgressCircular"), Ea = ee()({ name: "VProgressCircular", props: bC(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = K(), { themeClasses: i } = Ue(e), { sizeClasses: r, sizeStyles: s } = Jl(e), { textColorClasses: u, textColorStyles: c } = Dt(() => e.color), { textColorClasses: d, textColorStyles: f } = Dt(() => e.bgColor), { intersectionRef: v, isIntersecting: S } = oi(), { resizeRef: m, contentRect: b } = kn(), { state: h, duration: x } = yC(e), _ = F(() => h.value === "initial" ? 0 : Ze(parseFloat(e.modelValue), 0, 100)), I = F(() => Number(e.width)), k = F(() => s.value ? Number(e.size) : b.value ? b.value.width : Math.max(I.value, 32)), y = F(() => a / (1 - I.value / k.value) * 2), C = F(() => I.value / k.value * y.value), p = F(() => {
    const A = (100 - _.value) / 100 * l;
    return e.rounded && _.value > 0 && _.value < 100 ? ge(Math.min(l - 0.01, A + C.value)) : ge(A);
  }), T = V(() => {
    const A = Number(e.rotate);
    return e.rounded ? A + C.value / 2 / l * 360 : A;
  });
  return ut(() => {
    v.value = o.value, m.value = o.value;
  }), le(() => g(e.tag, { ref: o, class: ne(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": S.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || zn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: ye([s.value, c.value, { "--progress-reveal-duration": `${x.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : _.value }, { default: () => [w("svg", { style: { transform: `rotate(calc(-90deg + ${T.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${y.value} ${y.value}` }, [w("circle", { class: ne(["v-progress-circular__underlay", d.value]), style: ye(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), w("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": p.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && w("div", { class: "v-progress-circular__content" }, [n.default({ value: _.value })])] })), {};
} }), SC = z({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function pC(e, t) {
  const n = F(() => !!e.chunkCount || !!e.chunkWidth), a = V(() => {
    const r = at(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = F(() => Number(e.chunkGap)), o = V(() => {
    if (!n.value) return {};
    const r = ge(l.value), s = ge(a.value);
    return { maskRepeat: "repeat-x", maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`, maskSize: `calc(${s} + ${r}) 100%` };
  });
  function i(r) {
    const s = at(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return Ze(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const kC = z({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...SC(), ...ke(), ...qn({ location: "top" }), ...it(), ...Fe(), ...ze() }, "VProgressLinear"), wr = ee()({ name: "VProgressLinear", props: kC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = Ve(e, "modelValue"), { isRtl: o, rtlClasses: i } = xt(), { themeClasses: r } = Ue(e), { locationStyles: s } = Oa(e), { textColorClasses: u, textColorStyles: c } = Dt(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Ke(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: S } = Ke(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: b } = Ke(() => e.color), { roundedClasses: h } = ct(e), { intersectionRef: x, isIntersecting: _ } = oi(), I = V(() => parseFloat(e.max)), k = V(() => parseFloat(e.height)), y = V(() => Ze(parseFloat(e.bufferValue) / I.value * 100, 0, 100)), C = V(() => Ze(parseFloat(l.value) / I.value * 100, 0, 100)), p = V(() => o.value !== e.reverse), T = V(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), A = ue(0), { hasChunks: E, chunksMaskStyles: B, snapValueToChunk: M } = pC(e, A);
  Ft(E, () => {
    const { resizeRef: H } = kn((Q) => A.value = Q[0].contentRect.width);
    ut(() => H.value = a.value);
  });
  const D = V(() => E.value ? M(y.value) : y.value), L = V(() => E.value ? M(C.value) : C.value);
  function j(H) {
    if (!x.value) return;
    const { left: Q, right: J, width: R } = x.value.getBoundingClientRect(), Z = p.value ? R - H.clientX + (J - R) : H.clientX - Q;
    l.value = Math.round(Z / R * I.value);
  }
  return ut(() => {
    x.value = a.value;
  }), le(() => g(e.tag, { ref: a, class: ne(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && _.value, "v-progress-linear--reverse": p.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: ye([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ge(k.value) : 0, "--v-progress-linear-height": ge(k.value), ...e.absolute ? s.value : {} }, B.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), I.value), onClick: e.clickable && j }, { default: () => [e.stream && w("div", { key: "stream", class: ne(["v-progress-linear__stream", u.value]), style: { ...c.value, [p.value ? "left" : "right"]: ge(-k.value), borderTop: `${ge(k.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ge(k.value / 4)})`, width: ge(100 - y.value, "%"), "--v-progress-linear-stream-to": ge(k.value * (p.value ? 1 : -1)) } }, null), w("div", { class: ne(["v-progress-linear__background", d.value]), style: ye([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), w("div", { class: ne(["v-progress-linear__buffer", v.value]), style: ye([S.value, { opacity: parseFloat(e.bufferOpacity), width: ge(D.value, "%") }]) }, null), g(Ta, { name: T.value }, { default: () => [e.indeterminate ? w("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((H) => w("div", { key: H, class: ne(["v-progress-linear__indeterminate", H, m.value]), style: ye(b.value) }, null))]) : w("div", { class: ne(["v-progress-linear__determinate", m.value]), style: ye([b.value, { width: ge(L.value, "%") }]) }, null)] }), n.default && w("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: y.value })])] })), {};
} }), xr = z({ loading: [Boolean, String] }, "loader");
function ii(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { loaderClasses: F(() => ({ [`${t}--loading`]: e.loading })) };
}
function ri(e, t) {
  var _a3;
  let { slots: n } = t;
  return w("div", { class: ne(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || g(wr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const wC = ["static", "relative", "fixed", "absolute", "sticky"], Ql = z({ position: { type: String, validator: (e) => wC.includes(e) } }, "position");
function eo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  return { positionClasses: F(() => e.position ? `${t}--${e.position}` : void 0) };
}
function xC() {
  const e = bt("useRoute");
  return V(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function Xg() {
  var _a3, _b2;
  return (_b2 = (_a3 = bt("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function si(e, t) {
  const n = lp("RouterLink"), a = F(() => !!(e.href || e.to)), l = V(() => (a == null ? void 0 : a.value) || yf(t, "click") || yf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = F(() => e.href);
    return { isLink: a, isRouterLink: F(() => false), isClickable: l, href: d, linkProps: At({ href: d }), route: F(() => {
    }), navigate: F(() => {
    }) };
  }
  const o = n.useLink({ to: F(() => e.to || ""), replace: F(() => e.replace) }), i = V(() => e.to ? o : void 0), r = xC(), s = V(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Tt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = V(() => {
    var _a3;
    return e.to ? (_a3 = i.value) == null ? void 0 : _a3.route.value.href : e.href;
  });
  return { isLink: a, isRouterLink: F(() => !!e.to), isClickable: l, isActive: s, route: F(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.route.value;
  }), navigate: F(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.navigate;
  }), href: u, linkProps: At({ href: u, "aria-current": F(() => s.value ? "page" : void 0), "aria-disabled": F(() => e.disabled && a.value ? "true" : void 0), tabindex: F(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const ui = z({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let us = false;
function CC(e, t) {
  let n = false, a, l;
  Je && (e == null ? void 0 : e.beforeEach) && (Be(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      us ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), us = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      us = false;
    });
  }), gt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function VC(e, t) {
  ce(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Be(() => {
      t(n);
    });
  }, { immediate: true });
}
const Ks = Symbol("rippleStop"), _C = 80;
function Jf(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function qs(e) {
  return e.constructor.name === "TouchEvent";
}
function Zg(e) {
  return e.constructor.name === "KeyboardEvent";
}
const IC = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Zg(e)) {
    const d = t.getBoundingClientRect(), f = qs(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, Xi = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = IC(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Jf(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Jf(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function Jg(e) {
  return typeof e > "u" || !!e;
}
function Ho(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Ks])) {
    if (e[Ks] = true, qs(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Zg(e), n._ripple.class && (t.class = n._ripple.class), qs(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Xi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, _C);
    } else Xi.show(e, n, t);
  }
}
function Zi(e) {
  e[Ks] = true;
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
    }), Xi.hide(t);
  }
}
function Qg(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let zo = false;
function PC(e, t) {
  !zo && t.includes(e.key) && (zo = true, Ho(e));
}
function eh(e) {
  zo = false, sn(e);
}
function th(e) {
  zo && (zo = false, sn(e));
}
function nh(e, t, n) {
  const { value: a, modifiers: l } = t, o = Jg(a);
  o || Xi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = ol(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => PC(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Zi, { passive: true }), e.addEventListener("mousedown", Zi);
      return;
    }
    e.addEventListener("touchstart", Ho, { passive: true }), e.addEventListener("touchend", sn, { passive: true }), e.addEventListener("touchmove", Qg, { passive: true }), e.addEventListener("touchcancel", sn), e.addEventListener("mousedown", Ho), e.addEventListener("mouseup", sn), e.addEventListener("mouseleave", sn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", eh), e.addEventListener("blur", th), e.addEventListener("dragstart", sn, { passive: true });
  } else !o && n && ah(e);
}
function ah(e) {
  var _a3;
  e.removeEventListener("touchstart", Zi), e.removeEventListener("mousedown", Zi), e.removeEventListener("touchstart", Ho), e.removeEventListener("touchend", sn), e.removeEventListener("touchmove", Qg), e.removeEventListener("touchcancel", sn), e.removeEventListener("mousedown", Ho), e.removeEventListener("mouseup", sn), e.removeEventListener("mouseleave", sn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", eh), e.removeEventListener("blur", th), e.removeEventListener("dragstart", sn);
}
function AC(e, t) {
  nh(e, t, false);
}
function TC(e) {
  ah(e), delete e._ripple;
}
function DC(e, t) {
  if (t.value === t.oldValue) return;
  const n = Jg(t.oldValue);
  nh(e, t, n);
}
const $t = { mounted: AC, unmounted: TC, updated: DC }, Cr = z({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: xc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ie, appendIcon: Ie, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...ke(), ...vt(), ...St(), ...kt(), ...Sl(), ...xr(), ...qn(), ...Ql(), ...it(), ...ui(), ...Xn(), ...Fe({ tag: "button" }), ...ze(), ...bn({ variant: "elevated" }) }, "VBtn"), Ne = ee()({ name: "VBtn", props: Cr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { borderClasses: o } = Xt(e), { densityClasses: i } = Lt(e), { dimensionStyles: r } = pt(e), { elevationClasses: s } = _t(e), { loaderClasses: u } = ii(e), { locationStyles: c } = Oa(e), { positionClasses: d } = eo(e), { roundedClasses: f } = ct(e), { sizeClasses: v, sizeStyles: S } = Jl(e), m = Ma(e, e.symbol, false), b = si(e, n), h = V(() => {
    var _a3;
    return e.active !== void 0 ? e.active : b.isRouterLink.value ? (_a3 = b.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), x = F(() => h.value ? e.activeColor ?? e.color : e.color), _ = V(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!b.isLink.value || ((_a3 = b.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = b.isActive) == null ? void 0 : _b2.value) ? x.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: I, colorStyles: k, variantClasses: y } = ya(_), C = V(() => (m == null ? void 0 : m.disabled.value) || e.disabled), p = F(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = V(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function A(E) {
    var _a3, _b2;
    C.value || b.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (b.isRouterLink.value ? (_b2 = (_a3 = b.navigate).value) == null ? void 0 : _b2.call(_a3, E) : m == null ? void 0 : m.toggle());
  }
  return VC(b, m == null ? void 0 : m.select), le(() => {
    const E = b.isLink.value ? "a" : e.tag, B = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), D = !!(e.icon && e.icon !== true);
    return lt(g(E, X(b.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": p.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, I.value, i.value, s.value, u.value, d.value, f.value, v.value, y.value, e.class], style: [k.value, r.value, c.value, S.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: A, value: T.value }), { default: () => {
      var _a3;
      return [ha(true, "v-btn"), !e.icon && B && w("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? g($e, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : g(je, { key: "prepend-icon", icon: e.prependIcon }, null)]), w("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && D ? g(je, { key: "content-icon", icon: e.icon }, null) : g($e, { key: "content-defaults", disabled: !D, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? We(e.text)];
      } })]), !e.icon && M && w("span", { key: "append", class: "v-btn__append" }, [a.append ? g($e, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : g(je, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && w("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? g(Ea, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[$t, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), MC = z({ ...Oe(Cr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), EC = ee()({ name: "VAppBarNavIcon", props: MC(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(Ne, X(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), BC = ee()({ name: "VAppBarTitle", props: Wg(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(hc, X(e, { class: "v-app-bar-title" }), n)), {};
} }), lh = ma("v-alert-title"), oh = z({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function ih(e, t) {
  return { iconSize: V(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const FC = ["success", "info", "warning", "error"], $C = z({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => FC.includes(e) }, ...ke(), ...vt(), ...St(), ...kt(), ...oh(), ...qn(), ...Ql(), ...it(), ...Fe(), ...ze(), ...bn({ variant: "flat" }) }, "VAlert"), LC = ee()({ name: "VAlert", props: $C(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ve(e, "modelValue"), o = F(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = ih(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Ue(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ya(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Lt(e), { dimensionStyles: f } = pt(e), { elevationClasses: v } = _t(e), { locationStyles: S } = Oa(e), { positionClasses: m } = eo(e), { roundedClasses: b } = ct(e), { textColorClasses: h, textColorStyles: x } = Dt(() => e.borderColor), { t: _ } = Qe(), I = F(() => ({ "aria-label": _(e.closeLabel), onClick(k) {
    l.value = false, n("click:close", k);
  } }));
  return () => {
    const k = !!(a.prepend || o.value), y = !!(a.title || e.title), C = !!(a.close || e.closable), p = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && g(e.tag, { class: ne(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, b.value, c.value, e.class]), style: ye([u.value, f.value, S.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ha(false, "v-alert"), e.border && w("div", { key: "border", class: ne(["v-alert__border", h.value]), style: ye(x.value) }, null), k && w("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? g($e, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...p } } }, a.prepend) : g(je, X({ key: "prepend-icon" }, p), null)]), w("div", { class: "v-alert__content" }, [y && g(lh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && w("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && w("div", { key: "close", class: "v-alert__close" }, [a.close ? g($e, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: I.value })];
      } }) : g(Ne, X({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, I.value), null)])];
    } });
  };
} }), OC = z({ start: Boolean, end: Boolean, icon: Ie, image: String, text: String, ...Ht(), ...ke(), ...vt(), ...it(), ...Xn(), ...Fe(), ...ze(), ...bn({ variant: "flat" }) }, "VAvatar"), gn = ee()({ name: "VAvatar", props: OC(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { borderClasses: l } = Xt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ya(e), { densityClasses: s } = Lt(e), { roundedClasses: u } = ct(e), { sizeClasses: c, sizeStyles: d } = Jl(e);
  return le(() => g(e.tag, { class: ne(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: ye([i.value, d.value, e.style]) }, { default: () => [n.default ? g($e, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? g(ua, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? g(je, { key: "icon", icon: e.icon }, null) : e.text, ha(false, "v-avatar")] })), {};
} }), RC = z({ text: String, onClick: Bt(), ...ke(), ...ze() }, "VLabel"), to = ee()({ name: "VLabel", props: RC(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var _a3;
    return w("label", { class: ne(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: ye(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), rh = Symbol.for("vuetify:selection-control-group"), Cc = z({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ie, trueIcon: Ie, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Tt }, ...ke(), ...vt(), ...ze() }, "SelectionControlGroup"), NC = z({ ...Cc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), sh = ee()({ name: "VSelectionControlGroup", props: NC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), l = Mt(), o = F(() => e.id || `v-selection-control-group-${l}`), i = F(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return rt(rh, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), gt(() => {
      r.delete(s);
    });
  } }), ft({ [e.defaultsTarget]: { color: F(() => e.color), disabled: F(() => e.disabled), density: F(() => e.density), error: F(() => e.error), inline: F(() => e.inline), modelValue: a, multiple: F(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: F(() => e.falseIcon), trueIcon: F(() => e.trueIcon), readonly: F(() => e.readonly), ripple: F(() => e.ripple), type: F(() => e.type), valueComparator: F(() => e.valueComparator) } }), le(() => {
    var _a3;
    return w("div", { class: ne(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: ye(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Vr = z({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ke(), ...Cc() }, "VSelectionControl");
function HC(e) {
  const t = He(rh, void 0), { densityClasses: n } = Lt(e), a = Ve(e, "modelValue"), l = V(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = V(() => e.falseValue !== void 0 ? e.falseValue : false), i = V(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = V({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? ot(v).some((S) => e.valueComparator(S, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const S = v ? l.value : o.value;
    let m = S;
    i.value && (m = v ? [...ot(a.value), S] : ot(a.value).filter((b) => !e.valueComparator(b, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Dt(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Ke(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = V(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const Ba = ee()({ name: "VSelectionControl", directives: { vRipple: $t }, inheritAttrs: false, props: Vr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = HC(e), v = Mt(), S = ue(false), m = ue(false), b = K(), h = F(() => e.id || `input-${v}`), x = F(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    b.value && (b.value.checked = r.value);
  });
  function _(C) {
    x.value && (S.value = true, zl(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function I() {
    S.value = false, m.value = false;
  }
  function k(C) {
    C.stopPropagation();
  }
  function y(C) {
    if (!x.value) {
      b.value && (b.value.checked = r.value);
      return;
    }
    e.readonly && l && Be(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return le(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [p, T] = Gn(n), A = w("input", X({ ref: b, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: I, onFocus: _, onInput: y, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, T), null);
    return w("div", X({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": S.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, p, { style: e.style }), [w("div", { class: ne(["v-selection-control__wrapper", s.value]), style: ye(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), lt(w("div", { class: ne(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: A, icon: i.value, props: { onFocus: _, onBlur: I, id: h.value } })) ?? w(be, null, [i.value && g(je, { key: "icon", icon: i.value }, null), A])]), [[$t, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && g(to, { for: h.value, onClick: k }, { default: () => [C] })]);
  }), { isFocused: S, input: b };
} }), uh = z({ indeterminate: Boolean, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, ...Vr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Tn = ee()({ name: "VCheckboxBtn", props: uh(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "indeterminate"), l = Ve(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = F(() => a.value ? e.indeterminateIcon : e.falseIcon), r = F(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => {
    const s = Oe(Ba.filterProps(e), ["modelValue"]);
    return g(Ba, X(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function ci(e) {
  const { t } = Qe();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ni(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return g(je, X({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const zC = z({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ke(), ...ga({ transition: { component: pc, leaveAbsolute: true, group: true } }) }, "VMessages"), ch = ee()({ name: "VMessages", props: zC(), setup(e, t) {
  let { slots: n } = t;
  const a = V(() => ot(e.messages)), { textColorClasses: l, textColorStyles: o } = Dt(() => e.color);
  return le(() => g(Kt, { transition: e.transition, tag: "div", class: ne(["v-messages", l.value, e.class]), style: ye([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => w("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), di = z({ focused: Boolean, "onUpdate:focused": Bt() }, "focus");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn();
  const n = Ve(e, "focused"), a = F(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const dh = Symbol.for("vuetify:form"), WC = z({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function jC(e) {
  const t = Ve(e, "modelValue"), n = F(() => e.disabled), a = F(() => e.readonly), l = ue(false), o = K([]), i = K([]);
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
  return ce(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of o.value) v.isValid === false ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages })) : v.isValid === true && c++;
    i.value = f, t.value = d > 0 ? false : c === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), rt(dh, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: S, resetValidation: m } = c;
    o.value.some((b) => b.id === d), o.value.push({ id: d, validate: v, reset: S, resetValidation: m, vm: em(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((S) => S.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: F(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function no(e) {
  const t = He(dh, null);
  return { ...t, isReadonly: V(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: V(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const UC = Symbol.for("vuetify:rules");
function YC(e) {
  const t = He(UC, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? F(e);
}
const fh = z({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...di() }, "validation");
function vh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const a = Ve(e, "modelValue"), l = V(() => e.validationValue === void 0 ? a.value : e.validationValue), o = no(e), i = YC(() => e.rules), r = K([]), s = ue(true), u = V(() => !!(ot(a.value === "" ? null : a.value).length || ot(l.value === "" ? null : l.value).length)), c = V(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? ot(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = V(() => {
    var _a3;
    let I = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    I === "lazy" && (I = "input lazy"), I === "eager" && (I = "input eager");
    const k = new Set((I == null ? void 0 : I.split(" ")) ?? []);
    return { input: k.has("input"), blur: k.has("blur") || k.has("input") || k.has("invalid-input"), invalidInput: k.has("invalid-input"), lazy: k.has("lazy"), eager: k.has("eager") };
  }), f = V(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = ue(false), S = V(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = bt("validation"), b = V(() => e.name ?? Et(n));
  Zl(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: b.value, vm: m, validate: _, reset: h, resetValidation: x });
  }), Nt(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, b.value);
  }), wt(async () => {
    var _a3;
    d.value.lazy || await _(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, b.value, f.value, c.value);
  }), Ft(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    ce(l, () => {
      if (l.value != null) _();
      else if (e.focused) {
        const I = ce(() => e.focused, (k) => {
          k || _(), I();
        });
      }
    });
  }), Ft(() => d.value.blur, () => {
    ce(() => e.focused, (I) => {
      I || _();
    });
  }), ce([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, b.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Be(), await x();
  }
  async function x() {
    s.value = true, d.value.lazy ? r.value = [] : await _(!d.value.eager);
  }
  async function _() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const k = [];
    v.value = true;
    for (const y of i.value) {
      if (k.length >= Number(e.maxErrors ?? 1)) break;
      const p = await (typeof y == "function" ? y : () => y)(l.value);
      if (p !== true) {
        if (p !== false && typeof p != "string") {
          console.warn(`${p} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        k.push(p || "");
      }
    }
    return r.value = k, v.value = false, s.value = I, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: h, resetValidation: x, validate: _, validationClasses: S };
}
const Sa = z({ id: String, appendIcon: Ie, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ie, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...ke(), ...vt(), ...tn(St(), ["maxWidth", "minWidth", "width"]), ...ze(), ...fh() }, "VInput"), Rt = ee()({ name: "VInput", props: { ...Sa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = pt(e), { themeClasses: r } = Ue(e), { rtlClasses: s } = xt(), { InputIcon: u } = ci(e), c = Mt(), d = V(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: S, isReadonly: m, isPristine: b, isValid: h, isValidating: x, reset: _, resetValidation: I, validate: k, validationClasses: y } = vh(e, "v-input", d), C = V(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !b.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), p = F(() => C.value.length > 0), T = F(() => !e.hideDetails || e.hideDetails === "auto" && (p.value || !!a.details)), A = V(() => T.value ? `${d.value}-messages` : void 0), E = V(() => ({ id: d, messagesId: A, isDirty: v, isDisabled: S, isReadonly: m, isPristine: b, isValid: h, isValidating: x, hasDetails: T, reset: _, resetValidation: I, validate: k })), B = F(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = F(() => {
    if (e.iconColor) return e.iconColor === true ? B.value : e.iconColor;
  });
  return le(() => {
    var _a3, _b2;
    const D = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
    return w("div", { class: ne(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, y.value, e.class]), style: ye([i.value, e.style]) }, [D && w("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && g(u, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && w("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), L && w("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && g(u, { key: "append-icon", name: "append", color: M.value }, null)]), T.value && w("div", { id: A.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [g(ch, { active: p.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: _, resetValidation: I, validate: k, isValid: h, errorMessages: f };
} }), cs = Symbol("Forwarded refs");
function ds(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function It(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[cs] = n, new Proxy(e, { get(l, o) {
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
        const s = ds(r.value, o) ?? ("_" in r.value ? ds((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[cs];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = ds(c.value, o);
          if (d) return d;
          const f = c.value && c.value[cs];
          f && u.push(...f);
        }
      }
    }
  } });
}
const GC = z({ ...Oe(Sa(), ["direction"]), ...Oe(uh(), ["inline"]) }, "VCheckbox"), KC = ee()({ name: "VCheckbox", inheritAttrs: false, props: GC(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ve(e, "modelValue"), { isFocused: o, focus: i, blur: r } = ba(e), s = K(), u = Mt();
  return le(() => {
    const [c, d] = Gn(n), f = Rt.filterProps(e), v = Tn.filterProps(e);
    return g(Rt, X({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (S) => {
      let { id: m, messagesId: b, isDisabled: h, isReadonly: x, isValid: _ } = S;
      return g(Tn, X(v, { id: m.value, "aria-describedby": b.value, disabled: h.value, readonly: x.value }, d, { error: _.value === false, modelValue: l.value, "onUpdate:modelValue": (I) => l.value = I, onFocus: i, onBlur: r }), a);
    } });
  }), It({}, s);
} });
function qC(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = Wo(l, n), i = mh(l, a, n), r = Wo(l, t), s = gh(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function XC(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = Wo(a, n), o = gh(a, t), i = Wo(a, t);
  return o - l / 2 + i / 2;
}
function Qf(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function ZC(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function mh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function Wo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function gh(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Vc = Symbol.for("vuetify:v-slide-group"), _c = z({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Vc }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...ke(), ...ml({ mobile: null }), ...Fe(), ...bl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), jo = ee()({ name: "VSlideGroup", props: _c(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = xt(), { displayClasses: l, mobile: o } = hn(e), i = Ra(e, e.symbol), r = ue(false), s = ue(0), u = ue(0), c = ue(0), d = V(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = kn(), { resizeRef: S, contentRect: m } = kn(), b = Vx(), h = V(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), x = V(() => i.selected.value.length ? i.items.value.findIndex((U) => U.id === i.selected.value[0]) : -1), _ = V(() => i.selected.value.length ? i.items.value.findIndex((U) => U.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Je) {
    let U = -1;
    ce(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(U), U = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const O = d.value ? "width" : "height";
          u.value = v.value[O], c.value = m.value[O], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && x.value >= 0 && S.el) {
          const O = S.el.children[_.value];
          k(O, e.centerActive);
        }
      });
    });
  }
  const I = ue(false);
  function k(U, O) {
    let Y = 0;
    O ? Y = XC({ containerElement: f.el, isHorizontal: d.value, selectedElement: U }) : Y = qC({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: U }), y(Y);
  }
  function y(U) {
    if (!Je || !f.el) return;
    const O = Wo(d.value, f.el), Y = mh(d.value, a.value, f.el);
    if (!(Qf(d.value, f.el) <= O || Math.abs(U - Y) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: pe, offsetWidth: te } = f.el;
        U = pe - te - U;
      }
      d.value ? b.horizontal(U, h.value) : b(U, h.value);
    }
  }
  function C(U) {
    const { scrollTop: O, scrollLeft: Y } = U.target;
    s.value = d.value ? Y : O;
  }
  function p(U) {
    if (I.value = true, !(!r.value || !S.el)) {
      for (const O of U.composedPath()) for (const Y of S.el.children) if (Y === O) {
        k(Y);
        return;
      }
    }
  }
  function T(U) {
    I.value = false;
  }
  let A = false;
  function E(U) {
    var _a3;
    !A && !I.value && !(U.relatedTarget && ((_a3 = S.el) == null ? void 0 : _a3.contains(U.relatedTarget))) && L(), A = false;
  }
  function B() {
    A = true;
  }
  function M(U) {
    if (!S.el) return;
    function O(Y) {
      U.preventDefault(), L(Y);
    }
    d.value ? U.key === "ArrowRight" ? O(a.value ? "prev" : "next") : U.key === "ArrowLeft" && O(a.value ? "next" : "prev") : U.key === "ArrowDown" ? O("next") : U.key === "ArrowUp" && O("prev"), U.key === "Home" ? O("first") : U.key === "End" && O("last");
  }
  function D(U, O) {
    if (!U) return;
    let Y = U;
    do
      Y = Y == null ? void 0 : Y[O === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (Y == null ? void 0 : Y.hasAttribute("disabled"));
    return Y;
  }
  function L(U) {
    if (!S.el) return;
    let O;
    if (!U) O = Ia(S.el)[0];
    else if (U === "next") {
      if (O = D(S.el.querySelector(":focus"), U), !O) return L("first");
    } else if (U === "prev") {
      if (O = D(S.el.querySelector(":focus"), U), !O) return L("last");
    } else U === "first" ? (O = S.el.firstElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = D(O, "next"))) : U === "last" && (O = S.el.lastElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = D(O, "prev")));
    O && O.focus({ preventScroll: true });
  }
  function j(U) {
    const O = d.value && a.value ? -1 : 1, Y = (U === "prev" ? -O : O) * u.value;
    let re = s.value + Y;
    if (d.value && a.value && f.el) {
      const { scrollWidth: pe, offsetWidth: te } = f.el;
      re += pe - te;
    }
    y(re);
  }
  const H = V(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Q = V(() => r.value || Math.abs(s.value) > 0), J = V(() => {
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
  }), R = V(() => Math.abs(s.value) > 1), Z = V(() => {
    if (!f.value || !Q.value) return false;
    const U = Qf(d.value, f.el), O = ZC(d.value, f.el);
    return U - O - Math.abs(s.value) > 1;
  });
  return le(() => g(e.tag, { class: ne(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": J.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: ye(e.style), tabindex: I.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [J.value && w("div", { key: "prev", class: ne(["v-slide-group__prev", { "v-slide-group__prev--disabled": !R.value }]), onMousedown: B, onClick: () => R.value && j("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, H.value)) ?? g(No, null, { default: () => [g(je, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), w("div", { key: "container", ref: f, class: ne(["v-slide-group__container", e.contentClass]), onScroll: C }, [w("div", { ref: S, class: "v-slide-group__content", onFocusin: p, onFocusout: T, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, H.value)])]), J.value && w("div", { key: "next", class: ne(["v-slide-group__next", { "v-slide-group__next--disabled": !Z.value }]), onMousedown: B, onClick: () => Z.value && j("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, H.value)) ?? g(No, null, { default: () => [g(je, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: j, scrollOffset: s, focus: L, hasPrev: R, hasNext: Z };
} }), hh = Symbol.for("vuetify:v-chip-group"), JC = z({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Tt }, ..._c({ scrollToActive: false }), ...ke(), ...bl({ selectedClass: "v-chip--selected" }), ...Fe(), ...ze(), ...bn({ variant: "tonal" }) }, "VChipGroup"), QC = ee()({ name: "VChipGroup", props: JC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ra(e, hh);
  return ft({ VChip: { baseColor: F(() => e.baseColor), color: F(() => e.color), disabled: F(() => e.disabled), filter: F(() => e.filter), variant: F(() => e.variant) } }), le(() => {
    const u = jo.filterProps(e);
    return g(jo, X(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), e1 = z({ activeClass: String, appendAvatar: String, appendIcon: Ie, baseColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ie, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...ke(), ...vt(), ...kt(), ...Sl(), ...it(), ...ui(), ...Xn(), ...Fe({ tag: "span" }), ...ze(), ...bn({ variant: "tonal" }) }, "VChip"), ca = ee()({ name: "VChip", directives: { vRipple: $t }, props: e1(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { borderClasses: i } = Xt(e), { densityClasses: r } = Lt(e), { elevationClasses: s } = _t(e), { roundedClasses: u } = ct(e), { sizeClasses: c } = Jl(e), { themeClasses: d } = Ue(e), f = Ve(e, "modelValue"), v = Ma(e, hh, false), S = Ma(e, Vc, false), m = si(e, n), b = F(() => e.link !== false && m.isLink.value), h = V(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), x = F(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(p) {
    p.preventDefault(), p.stopPropagation(), f.value = false, a("click:close", p);
  } }));
  ce(f, (p) => {
    p ? (v == null ? void 0 : v.register(), S == null ? void 0 : S.register()) : (v == null ? void 0 : v.unregister(), S == null ? void 0 : S.unregister());
  });
  const { colorClasses: _, colorStyles: I, variantClasses: k } = ya(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function y(p) {
    var _a3, _b2;
    a("click", p), h.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, p), v == null ? void 0 : v.toggle());
  }
  function C(p) {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), y(p));
  }
  return () => {
    var _a3;
    const p = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), A = !!(T || l.append), E = !!(l.close || e.closable), B = !!(l.filter || e.filter) && v, M = !!(e.prependIcon || e.prependAvatar), D = !!(M || l.prepend);
    return f.value && lt(g(p, X(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": B, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, _.value, r.value, s.value, u.value, c.value, k.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [I.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: y, onKeydown: h.value && !b.value && C }), { default: () => {
      var _a4;
      return [ha(h.value, "v-chip"), B && g(kc, { key: "filter" }, { default: () => [lt(w("div", { class: "v-chip__filter" }, [l.filter ? g($e, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : g(je, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Dn, v.isSelected.value]])] }), D && w("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? g($e, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : w(be, null, [e.prependIcon && g(je, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && g(gn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), w("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? We(e.text)]), A && w("div", { key: "append", class: "v-chip__append" }, [l.append ? g($e, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : w(be, null, [e.appendIcon && g(je, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && g(gn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && w("button", X({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, x.value), [l.close ? g($e, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : g(je, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[$t, h.value && e.ripple, null]]);
  };
} }), t1 = ["dotted", "dashed", "solid", "double"], n1 = z({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => t1.includes(e) }, ...ke(), ...ze() }, "VDivider"), vn = ee()({ name: "VDivider", props: n1(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { textColorClasses: o, textColorStyles: i } = Dt(() => e.color), r = V(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ge(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ge(e.thickness)), u;
  }), s = F(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ge(u) : void 0, marginInline: !e.vertical && u ? ge(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ge(c)})` : void 0 };
  });
  return le(() => {
    const u = w("hr", { class: ne([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: ye([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? w("div", { class: ne(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, w("div", { class: "v-divider__content", style: ye(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), Xs = Symbol.for("vuetify:list");
function yh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = He(Xs, { filterable: false, hasPrepend: ue(false), updateHasPrepend: () => null, trackingIndex: ue(-1), navigationStrategy: ue("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Mt() } = e, i = { filterable: t.filterable || n, hasPrepend: ue(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return rt(Xs, i), t;
}
function bh() {
  return He(Xs, null);
}
const Ic = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Ee(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of ot(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, Sh = (e) => {
  const t = Ic(e);
  return { activate: (a) => {
    let { activated: l, id: o, ...i } = a;
    o = Ee(o);
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
}, a1 = (e) => {
  const t = Ic(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Ee(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, l1 = (e) => {
  const t = Sh(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Ee(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, o1 = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, ph = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, i1 = { open: ph.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Pc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = Ee(a), e && !l) {
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
}, kh = (e) => {
  const t = Pc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Ee(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, r1 = (e) => {
  const t = Pc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Ee(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, s1 = (e) => {
  const t = kh(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Ee(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Ac = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = Ee(a);
    const u = new Map(o), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(Ee(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = Ee(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const S of i.get(d)) {
        const m = Ee(S);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Ee(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, S) => {
      let [m, b] = S;
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
}, u1 = (e) => {
  const t = Ac(e);
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
}, c1 = (e) => {
  const n = { select: Ac(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Yl = Symbol.for("vuetify:nested"), wh = { id: ue(), root: { itemsRegistration: K("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: K(/* @__PURE__ */ new Map()), parents: K(/* @__PURE__ */ new Map()), disabled: K(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: K(false), scrollToActive: K(false), selectable: K(false), opened: K(/* @__PURE__ */ new Set()), activated: K(/* @__PURE__ */ new Set()), selected: K(/* @__PURE__ */ new Map()), selectedValues: K([]), getPath: () => [] } }, d1 = z({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), f1 = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = ue(/* @__PURE__ */ new Map()), r = ue(/* @__PURE__ */ new Map()), s = ue(/* @__PURE__ */ new Set()), u = Ve(e, "opened", e.opened, (k) => new Set(Array.isArray(k) ? k.map((y) => Ee(y)) : k), (k) => [...k.values()]), c = V(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return a1(e.mandatory);
      case "single-leaf":
        return l1(e.mandatory);
      case "independent":
        return Ic(e.mandatory);
      case "single-independent":
      default:
        return Sh(e.mandatory);
    }
  }), d = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return s1(e.mandatory);
      case "leaf":
        return r1(e.mandatory);
      case "independent":
        return Pc(e.mandatory);
      case "single-independent":
        return kh(e.mandatory);
      case "trunk":
        return u1(e.mandatory);
      case "branch":
        return c1(e.mandatory);
      case "classic":
      default:
        return Ac(e.mandatory);
    }
  }), f = V(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return i1;
      case "single":
        return o1;
      case "multiple":
      default:
        return ph;
    }
  }), v = Ve(e, "activated", e.activated, (k) => c.value.in(k, i.value, r.value), (k) => c.value.out(k, i.value, r.value)), S = Ve(e, "selected", e.selected, (k) => d.value.in(k, i.value, r.value, s.value), (k) => d.value.out(k, i.value, r.value));
  Nt(() => {
    o = true;
  });
  function m(k) {
    const y = [];
    let C = Ee(k);
    for (; C !== void 0; ) y.unshift(C), C = r.value.get(C);
    return y;
  }
  const b = bt("nested"), h = /* @__PURE__ */ new Set(), x = xw(() => {
    Be(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  ce(() => [n.value, at(a)], () => {
    e.itemsRegistration === "props" && _();
  }, { immediate: true });
  function _() {
    const k = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), p = at(a) ? (E) => Ee(E.raw) : (E) => E.value, T = [...n.value];
    let A = 0;
    for (; A < T.length; ) {
      const E = T[A++], B = p(E);
      if (E.children) {
        const M = [];
        for (const D of E.children) {
          const L = p(D);
          k.set(L, B), M.push(L), T.push(D);
        }
        y.set(B, M);
      }
      E.props.disabled && C.add(B);
    }
    i.value = y, r.value = k, s.value = C;
  }
  const I = { id: ue(), root: { opened: u, activatable: F(() => e.activatable), scrollToActive: F(() => at(l)), selectable: F(() => e.selectable), activated: v, selected: S, selectedValues: V(() => {
    const k = [];
    for (const [y, C] of S.value.entries()) C === "on" && k.push(y);
    return k;
  }), itemsRegistration: F(() => e.itemsRegistration), register: (k, y, C, p) => {
    if (h.has(k)) {
      m(k).map(String).join(" -> "), m(y).concat(k).map(String).join(" -> ");
      return;
    } else h.add(k);
    y && k !== y && r.value.set(k, y), C && s.value.add(k), p && i.value.set(k, []), y != null && i.value.set(y, [...i.value.get(y) || [], k]), x();
  }, unregister: (k) => {
    if (o) return;
    h.delete(k), i.value.delete(k), s.value.delete(k);
    const y = r.value.get(k);
    if (y) {
      const C = i.value.get(y) ?? [];
      i.value.set(y, C.filter((p) => p !== k));
    }
    r.value.delete(k), x();
  }, updateDisabled: (k, y) => {
    y ? s.value.add(k) : s.value.delete(k);
  }, open: (k, y, C) => {
    b.emit("click:open", { id: k, value: y, path: m(k), event: C });
    const p = f.value.open({ id: k, value: y, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    p && (u.value = p);
  }, openOnSelect: (k, y, C) => {
    const p = f.value.select({ id: k, value: y, selected: new Map(S.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    p && (u.value = p);
  }, select: (k, y, C) => {
    b.emit("click:select", { id: k, value: y, path: m(k), event: C });
    const p = d.value.select({ id: k, value: y, selected: new Map(S.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    p && (S.value = p), I.root.openOnSelect(k, y, C);
  }, activate: (k, y, C) => {
    if (!e.activatable) return I.root.select(k, true, C);
    b.emit("click:activate", { id: k, value: y, path: m(k), event: C });
    const p = c.value.activate({ id: k, value: y, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
    if (p.size !== v.value.size) v.value = p;
    else {
      for (const T of p) if (!v.value.has(T)) {
        v.value = p;
        return;
      }
      for (const T of v.value) if (!p.has(T)) {
        v.value = p;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: m } };
  return rt(Yl, I), I.root;
}, xh = (e, t, n) => {
  const a = He(Yl, wh), l = Symbol("nested item"), o = V(() => {
    const r = Ee(at(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: V(() => a.root.opened.value.has(o.value)), parent: V(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: V(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: V(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: V(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: V(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Zl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Be(() => {
      a.root.register(o.value, a.id.value, at(t), n);
    });
  }), Nt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), ce(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Be(() => {
      a.root.register(r, a.id.value, at(t), n);
    }));
  }), ce(() => at(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && rt(Yl, i), i;
}, v1 = () => {
  const e = He(Yl, wh);
  rt(Yl, { ...e, isGroupActivator: true });
}, m1 = qt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return v1(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Ch = z({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ie, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ie, default: "$expand" }, rawId: [String, Number], prependIcon: Ie, appendIcon: Ie, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ke(), ...Fe() }, "VListGroup"), Uo = ee()({ name: "VListGroup", props: Ch(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = xh(() => e.value, () => e.disabled, true), i = V(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = bh(), { isBooted: s } = yl(), u = He(Yl), c = F(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = V(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = V(() => a.value ? e.collapseIcon : e.expandIcon), S = V(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return le(() => g(e.tag, { class: ne(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: ye(e.style) }, { default: () => [n.activator && g($e, { defaults: S.value }, { default: () => [g(m1, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), g(Kt, { transition: { component: kr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? lt(w("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Dn, a.value]]) : a.value && w("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), g1 = z({ opacity: [Number, String], ...ke(), ...Fe() }, "VListItemSubtitle"), Vh = ee()({ name: "VListItemSubtitle", props: g1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-list-item-subtitle", e.class]), style: ye([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), _h = ma("v-list-item-title"), Ih = z({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ie, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...ke(), ...vt(), ...St(), ...kt(), ...it(), ...ui(), ...Fe(), ...ze(), ...bn({ variant: "text" }) }, "VListItem"), wn = ee()({ name: "VListItem", directives: { vRipple: $t }, props: Ih(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = si(e, n), i = K(), r = V(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: S, root: m, parent: b, openOnSelect: h, scrollToActive: x, id: _ } = xh(r, () => e.disabled, false), I = bh(), k = V(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), y = F(() => e.link !== false && o.isLink.value), C = V(() => !!I && (m.selectable.value || m.activatable.value || e.value != null)), p = V(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), T = V(() => I && I.navigationStrategy.value === "track" && e.index !== void 0 && I.trackingIndex.value === e.index), A = V(() => I ? y.value ? "link" : C.value ? "option" : "listitem" : void 0), E = V(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : k.value;
  }), B = F(() => e.rounded || e.nav), M = F(() => e.color ?? e.activeColor), D = F(() => ({ color: k.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ce(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (we) => {
    we && L();
  }), ce(u, (we) => {
    var _a3;
    !we || !x || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ce(T, (we) => {
    var _a3;
    we && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Zl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Be(() => L());
  });
  function L() {
    b.value != null && m.open(b.value, true), h(true);
  }
  const { themeClasses: j } = Ue(e), { borderClasses: H } = Xt(e), { colorClasses: Q, colorStyles: J, variantClasses: R } = ya(D), { densityClasses: Z } = Lt(e), { dimensionStyles: U } = pt(e), { elevationClasses: O } = _t(e), { roundedClasses: Y } = ct(B), re = F(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), pe = F(() => e.ripple !== void 0 && e.ripple && (I == null ? void 0 : I.filterable) ? { keys: ["Enter"] } : e.ripple), te = V(() => ({ isActive: k.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function ve(we) {
    var _a3, _b2, _c2;
    l("click", we), !["INPUT", "TEXTAREA"].includes((_a3 = we.target) == null ? void 0 : _a3.tagName) && p.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, we), !S && (m.activatable.value ? s(!u.value, we) : (m.selectable.value || e.value != null && !y.value) && c(!f.value, we)));
  }
  function De(we) {
    const he = we.target;
    ["INPUT", "TEXTAREA"].includes(he.tagName) || (we.key === "Enter" || we.key === " " && !(I == null ? void 0 : I.filterable)) && (we.preventDefault(), we.stopPropagation(), we.target.dispatchEvent(new MouseEvent("click", we)));
  }
  return le(() => {
    const we = y.value ? "a" : e.tag, he = a.title || e.title != null, P = a.subtitle || e.subtitle != null, q = !!(!!(e.appendAvatar || e.appendIcon) || a.append), ae = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return I == null ? void 0 : I.updateHasPrepend(ae), e.activeColor && ag("active-color", ["color", "base-color"]), lt(g(we, X(o.linkProps, { ref: i, id: e.index !== void 0 && I ? `v-list-item-${I.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": k.value, "v-list-item--disabled": e.disabled, "v-list-item--link": p.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !ae && (I == null ? void 0 : I.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": T.value, [`${e.activeClass}`]: e.activeClass && k.value }, j.value, H.value, Q.value, Z.value, O.value, re.value, Y.value, R.value, e.class], style: [{ "--v-list-prepend-gap": ge(e.prependGap) }, J.value, U.value, e.style], tabindex: e.tabindex ?? (p.value ? I ? -2 : 0 : void 0), "aria-selected": E.value, role: A.value, onClick: ve, onKeydown: p.value && !y.value && De }), { default: () => {
      var _a3;
      return [ha(p.value || k.value, "v-list-item"), ae && w("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? g($e, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, te.value)];
      } }) : w(be, null, [e.prependAvatar && g(gn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(je, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), w("div", { class: "v-list-item__spacer" }, null)]), w("div", { class: "v-list-item__content", "data-no-activator": "" }, [he && g(_h, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? We(e.title)];
      } }), P && g(Vh, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? We(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, te.value)]), q && w("div", { key: "append", class: "v-list-item__append" }, [a.append ? g($e, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, te.value)];
      } }) : w(be, null, [e.appendIcon && g(je, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(gn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), w("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[$t, p.value && pe.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: S, isSelected: f, list: I, select: c, root: m, id: _, link: o };
} }), h1 = z({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ke(), ...Fe() }, "VListSubheader"), ao = ee()({ name: "VListSubheader", props: h1(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Dt(() => e.color);
  return le(() => {
    const o = !!(n.default || e.title);
    return g(e.tag, { class: ne(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: ye([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && w("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), y1 = z({ items: Array, returnObject: Boolean }, "VListChildren"), Ph = ee()({ name: "VListChildren", props: y1(), setup(e, t) {
  let { slots: n } = t;
  return yh(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? g(vn, i, null);
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
      return o ? g(Uo, X(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = X(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : g(wn, X(v, { index: l }), u);
      }, default: () => g(Ph, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : g(wn, X(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), Ah = z({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), b1 = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function xn(e, t) {
  const n = ht(t, e.itemTitle, t), a = ht(t, e.itemValue, n), l = ht(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Oe(t, ["children"]) : t : void 0 : ht(t, e.itemProps);
  let i = ht(t, e.itemType, "item");
  b1.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? Th(e, l) : void 0, raw: t };
}
xn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Th(e, t) {
  const n = tn(e, xn.neededProps), a = [];
  for (const l of t) a.push(xn(n, l));
  return a;
}
function Tc(e) {
  const t = V(() => Th(e, e.items)), n = V(() => t.value.some((r) => r.value === null)), a = ue(/* @__PURE__ */ new Map()), l = ue([]);
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
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, S = e.valueComparator || Tt, m = tn(e, xn.neededProps), b = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        b.push(xn(m, h));
        continue;
      }
      const x = s.get(h);
      if (v || !x) {
        for (const _ of v ? u : c) if (S(h, _.value)) {
          b.push(_);
          continue e;
        }
        b.push(xn(m, h));
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
const S1 = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function p1(e, t) {
  const n = Da(t) ? t : ht(t, e.itemTitle), a = Da(t) ? t : ht(t, e.itemValue, void 0), l = ht(t, e.itemChildren), o = e.itemProps === true ? Oe(t, ["children"]) : ht(t, e.itemProps);
  let i = ht(t, e.itemType, "item");
  S1.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Dh(e, l) : void 0, raw: t };
}
function Dh(e, t) {
  const n = [];
  for (const a of t) n.push(p1(e, a));
  return n;
}
function Mh(e) {
  return { items: V(() => Dh(e, e.items)) };
}
const Eh = z({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ie, collapseIcon: Ie, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...d1({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ht(), ...ke(), ...vt(), ...St(), ...kt(), ...Ah(), ...it(), ...Fe(), ...ze(), ...bn({ variant: "text" }) }, "VList"), Gl = ee()({ name: "VList", props: Eh(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = Mh(e), { themeClasses: i } = Ue(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Ke(() => e.bgColor), { borderClasses: u } = Xt(e), { densityClasses: c } = Lt(e), { dimensionStyles: d } = pt(e), { elevationClasses: f } = _t(e), { roundedClasses: v } = ct(e), { children: S, open: m, parents: b, select: h, getPath: x } = f1(e, { items: o, returnObject: F(() => e.returnObject), scrollToActive: F(() => e.navigationStrategy === "track") }), _ = F(() => e.lines ? `v-list--${e.lines}-line` : void 0), I = F(() => e.activeColor), k = F(() => e.baseColor), y = F(() => e.color), C = F(() => e.selectable || e.activatable), p = Ve(e, "navigationIndex", -1, (Z) => Z ?? -1), T = Mt();
  yh({ filterable: e.filterable, trackingIndex: p, navigationStrategy: F(() => e.navigationStrategy), uid: T }), ce(o, () => {
    e.navigationStrategy === "track" && (p.value = -1);
  }), ft({ VListGroup: { activeColor: I, baseColor: k, color: y, expandIcon: F(() => e.expandIcon), collapseIcon: F(() => e.collapseIcon) }, VListItem: { activeClass: F(() => e.activeClass), activeColor: I, baseColor: k, color: y, density: F(() => e.density), disabled: F(() => e.disabled), lines: F(() => e.lines), nav: F(() => e.nav), slim: F(() => e.slim), variant: F(() => e.variant), tabindex: F(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const A = ue(false), E = K();
  function B(Z) {
    A.value = true;
  }
  function M(Z) {
    A.value = false;
  }
  function D(Z) {
    var _a3;
    e.navigationStrategy === "track" ? ~p.value || (p.value = H("first")) : !A.value && !(Z.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(Z.relatedTarget))) && R();
  }
  function L() {
    e.navigationStrategy === "track" && (p.value = -1);
  }
  function j(Z) {
    switch (Z) {
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
  function H(Z) {
    const U = o.value.length;
    if (U === 0) return -1;
    let O;
    Z === "first" ? O = 0 : Z === "last" ? O = U - 1 : (O = p.value + (Z === "next" ? 1 : -1), O < 0 && (O = U - 1), O >= U && (O = 0));
    const Y = O;
    let re = 0;
    for (; re < U; ) {
      const pe = o.value[O];
      if (pe && pe.type !== "divider" && pe.type !== "subheader") return O;
      if (O += Z === "next" || Z === "first" ? 1 : -1, O < 0 && (O = U - 1), O >= U && (O = 0), O === Y) return -1;
      re++;
    }
    return -1;
  }
  function Q(Z) {
    const U = Z.target;
    if (!E.value || U.tagName === "INPUT" && ["Home", "End"].includes(Z.key) || U.tagName === "TEXTAREA") return;
    const O = j(Z.key);
    if (O !== null) if (Z.preventDefault(), e.navigationStrategy === "track") {
      const Y = H(O);
      Y !== -1 && (p.value = Y);
    } else R(O);
  }
  function J(Z) {
    A.value = true;
  }
  function R(Z) {
    if (E.value) return Za(E.value, Z);
  }
  return le(() => {
    const Z = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), U = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return g(e.tag, { ref: E, class: ne(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, _.value, v.value, e.class]), style: ye([{ "--v-list-indent": ge(Z), "--v-list-group-prepend": Z ? "0px" : void 0, "--v-list-prepend-gap": ge(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && p.value >= 0 ? `v-list-item-${T}-${p.value}` : void 0, "aria-multiselectable": U, onFocusin: B, onFocusout: M, onFocus: D, onBlur: L, onKeydown: Q, onMousedown: J }, { default: () => [g(Ph, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: R, children: S, parents: b, getPath: x, navigationIndex: p };
} }), k1 = ma("v-list-img"), w1 = z({ start: Boolean, end: Boolean, ...ke(), ...Fe() }, "VListItemAction"), Dc = ee()({ name: "VListItemAction", props: w1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: ye(e.style) }, n)), {};
} }), x1 = z({ start: Boolean, end: Boolean, ...ke(), ...Fe() }, "VListItemMedia"), C1 = ee()({ name: "VListItemMedia", props: x1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: ye(e.style) }, n)), {};
} });
function fs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function V1(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ev(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return fs({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return fs({ x: l, y: o }, t);
  }
  return fs({ x: t.width / 2, y: t.height / 2 }, t);
}
const Bh = { static: P1, connected: T1 }, _1 = z({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Bh }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function I1(e, t) {
  const n = K({}), a = K();
  Je && Ft(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    ce(() => e.locationStrategy, r), gt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = Bh[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function P1() {
}
function A1(e, t) {
  const n = ic(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function T1(e, t, n) {
  (Array.isArray(e.target.value) || ww(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = oc(() => {
    const h = $s(t.location, e.isRtl.value), x = t.origin === "overlap" ? h : t.origin === "auto" ? ls(h) : $s(t.origin, e.isRtl.value);
    return h.side === x.side && h.align === os(x).align ? { preferredAnchor: Sf(h), preferredOrigin: Sf(x) } : { preferredAnchor: h, preferredOrigin: x };
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
  const v = new cg(4), S = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((x) => {
      x !== f && v.clear(), requestAnimationFrame((_) => {
        f = _;
      });
    }), v.isFull) {
      const x = v.values();
      if (Tt(x.at(-1), x.at(-3)) && !Tt(x.at(-1), x.at(-2))) return;
    }
    const h = b();
    h && v.push(h.flipped);
  });
  let m = new pn({ x: 0, y: 0, width: 0, height: 0 });
  ce(e.target, (h, x) => {
    x && !Array.isArray(x) && S.unobserve(x), Array.isArray(h) ? Tt(h, x) || b() : h && S.observe(h);
  }, { immediate: true }), ce(e.contentEl, (h, x) => {
    x && S.unobserve(x), h && S.observe(h);
  }, { immediate: true }), gt(() => {
    S.disconnect();
  });
  function b() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = mg(e.target.value));
    const h = A1(e.contentEl.value, e.isRtl.value), x = Gi(e.contentEl.value), _ = Number(t.viewportMargin);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const I = x.reduce((M, D) => {
      const L = Wk(D);
      return M ? new pn({ x: Math.max(M.left, L.left), y: Math.max(M.top, L.top), width: Math.min(M.right, L.right) - Math.max(M.left, L.left), height: Math.min(M.bottom, L.bottom) - Math.max(M.top, L.top) }) : L;
    }, void 0);
    t.stickToTarget ? (I.x += Math.min(_, m.x), I.y += Math.min(_, m.y), I.width = Math.max(I.width - _ * 2, m.x + m.width - _), I.height = Math.max(I.height - _ * 2, m.y + m.height - _)) : (I.x += _, I.y += _, I.width -= _ * 2, I.height -= _ * 2);
    let k = { anchor: l.value, origin: o.value };
    function y(M) {
      const D = new pn(h), L = ev(M.anchor, m), j = ev(M.origin, D);
      let { x: H, y: Q } = V1(L, j);
      switch (M.anchor.side) {
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
      switch (M.anchor.align) {
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
      return D.x += H, D.y += Q, D.width = Math.min(D.width, s.value), D.height = Math.min(D.height, u.value), { overflows: kf(D, I), x: H, y: Q };
    }
    let C = 0, p = 0;
    const T = { x: 0, y: 0 }, A = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: D, overflows: L } = y(k);
      C += M, p += D, h.x += M, h.y += D;
      {
        const j = pf(k.anchor), H = L.x.before || L.x.after, Q = L.y.before || L.y.after;
        let J = false;
        if (["x", "y"].forEach((R) => {
          if (R === "x" && H && !A.x || R === "y" && Q && !A.y) {
            const Z = { anchor: { ...k.anchor }, origin: { ...k.origin } }, U = R === "x" ? j === "y" ? os : ls : j === "y" ? ls : os;
            Z.anchor = U(Z.anchor), Z.origin = U(Z.origin);
            const { overflows: O } = y(Z);
            (O[R].before <= L[R].before && O[R].after <= L[R].after || O[R].before + O[R].after < (L[R].before + L[R].after) / 2) && (k = Z, J = A[R] = true);
          }
        }), J) continue;
      }
      L.x.before && (C += L.x.before, h.x += L.x.before), L.x.after && (C -= L.x.after, h.x -= L.x.after), L.y.before && (p += L.y.before, h.y += L.y.before), L.y.after && (p -= L.y.after, h.y -= L.y.after);
      {
        const j = kf(h, I);
        T.x = I.width - j.x.before - j.x.after, T.y = I.height - j.y.before - j.y.after, C += j.x.before, h.x += j.x.before, p += j.y.before, h.y += j.y.before;
      }
      break;
    }
    const B = pf(k.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`, transformOrigin: `${k.origin.side} ${k.origin.align}`, top: ge(vs(p)), left: e.isRtl.value ? void 0 : ge(vs(C)), right: e.isRtl.value ? ge(vs(-C)) : void 0, minWidth: ge(B === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ge(tv(Ze(T.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ge(tv(Ze(T.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: T, contentBox: h, flipped: A };
  }
  return ce(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => b()), Be(() => {
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
function vs(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function tv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Zs = true;
const Ji = [];
function D1(e) {
  !Zs || Ji.length ? (Ji.push(e), Js()) : (Zs = false, e(), Js());
}
let nv = -1;
function Js() {
  cancelAnimationFrame(nv), nv = requestAnimationFrame(() => {
    const e = Ji.shift();
    e && e(), Ji.length ? Js() : Zs = true;
  });
}
const Fh = { none: null, close: B1, block: F1, reposition: $1 }, M1 = z({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Fh } }, "VOverlay-scroll-strategies");
function E1(e, t) {
  if (!Je) return;
  let n;
  ut(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Rl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = Fh[e.scrollStrategy]) == null ? void 0 : _a3.call(Fh, t, e, n);
    }));
  }), gt(() => {
    n == null ? void 0 : n.stop();
  });
}
function B1(e) {
  function t(n) {
    e.isActive.value = false;
  }
  $h(Mc(e.target.value, e.contentEl.value), t);
}
function F1(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = Mc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Gi(a, t.contained ? n : void 0), ...Gi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => cc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ge(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ge(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ge(o)), r.classList.add("v-overlay-scroll-blocked");
  }), gt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function $1(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    D1(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      $h(Mc(e.target.value, e.contentEl.value), (r) => {
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
function Mc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function $h(e, t) {
  const n = [document, ...Gi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), gt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Qs = Symbol.for("vuetify:v-menu"), Ec = z({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Bc(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Lk(u, () => {
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
const L1 = z({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Ec() }, "VOverlay-activator");
function O1(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = bt("useActivator"), i = K();
  let r = false, s = false, u = true;
  const c = V(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = V(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = Bc(e, (p) => {
    p === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== p && (u = true), n.value = p);
  }), S = K(), m = { onClick: (p) => {
    p.stopPropagation(), i.value = p.currentTarget || p.target, n.value || (S.value = [p.clientX, p.clientY]), n.value = !n.value;
  }, onMouseenter: (p) => {
    r = true, i.value = p.currentTarget || p.target, f();
  }, onMouseleave: (p) => {
    r = false, v();
  }, onFocus: (p) => {
    zl(p.target, ":focus-visible") !== false && (s = true, p.stopPropagation(), i.value = p.currentTarget || p.target, f());
  }, onBlur: (p) => {
    s = false, p.stopPropagation(), v({ minDelay: 1 });
  } }, b = V(() => {
    const p = {};
    return d.value && (p.onClick = m.onClick), e.openOnHover && (p.onMouseenter = m.onMouseenter, p.onMouseleave = m.onMouseleave), c.value && (p.onFocus = m.onFocus, p.onBlur = m.onBlur), p;
  }), h = V(() => {
    const p = {};
    if (e.openOnHover && (p.onMouseenter = () => {
      r = true, f();
    }, p.onMouseleave = () => {
      r = false, v();
    }), c.value && (p.onFocusin = (T) => {
      T.target.matches(":focus-visible") && (s = true, f());
    }, p.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const T = He(Qs, null);
      p.onClick = () => {
        n.value = false, T == null ? void 0 : T.closeParents();
      };
    }
    return p;
  }), x = V(() => {
    const p = {};
    return e.openOnHover && (p.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, p.onMouseleave = () => {
      r = false, v();
    }), p;
  });
  ce(a, (p) => {
    var _a3;
    p && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), ce(n, (p) => {
    p || setTimeout(() => {
      S.value = void 0;
    });
  }, { flush: "post" });
  const _ = Bo();
  ut(() => {
    _.value && Be(() => {
      i.value = _.el;
    });
  });
  const I = Bo(), k = V(() => e.target === "cursor" && S.value ? S.value : I.value ? I.el : Lh(e.target, o) || i.value), y = V(() => Array.isArray(k.value) ? void 0 : k.value);
  let C;
  return ce(() => !!e.activator, (p) => {
    p && Je ? (C = Rl(), C.run(() => {
      R1(e, o, { activatorEl: i, activatorEvents: b });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), gt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: _, target: k, targetEl: y, targetRef: I, activatorEvents: b, contentEvents: h, scrimEvents: x };
}
function R1(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  ce(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Be(() => o());
  }, { immediate: true }), ce(() => e.activatorProps, () => {
    o();
  }), gt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && jk(s, X(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Uk(s, X(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Lh(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function Lh(e, t) {
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
const Oh = z({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Mi = /* @__PURE__ */ new Map();
let av = 0;
function lv(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Mi.values()).filter((u) => {
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
function Rh(e, t) {
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
    const S = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Be(), n.value && !r && S !== m && o.value && at(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Ia(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const S = Ia(document.documentElement);
      if (v.shiftKey && v.target === S.at(0) || !v.shiftKey && v.target === S.at(-1)) {
        const m = Ia(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = F(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Je && (ce(() => e.retainFocus, (v) => {
    v ? Mi.set(i, { isActive: n, contentEl: o }) : Mi.delete(i);
  }, { immediate: true }), ce(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), av++ < 1 && document.addEventListener("keydown", lv)), gt(() => {
    Mi.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --av < 1 && document.removeEventListener("keydown", lv);
  });
}
function Nh() {
  if (!Je) return ue(false);
  const { ssr: e } = hn();
  if (e) {
    const t = ue(false);
    return wt(() => {
      t.value = true;
    }), t;
  } else return ue(true);
}
const Fc = z({ eager: Boolean }, "lazy");
function $c(e, t) {
  const n = ue(false), a = F(() => n.value || e.eager || t.value);
  ce(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function pl() {
  const t = bt("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const ov = Symbol.for("vuetify:stack"), uo = At([]);
function N1(e, t, n) {
  const a = bt("useStack"), l = !n, o = He(ov, void 0), i = At({ activeChildren: /* @__PURE__ */ new Set() });
  rt(ov, i);
  const r = ue(Number(at(t)));
  Ft(e, () => {
    var _a3;
    const c = (_a3 = uo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(at(t)), l && uo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), gt(() => {
      if (l) {
        const d = Ee(uo).findIndex((f) => f[0] === a.uid);
        uo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = ue(true);
  return l && ut(() => {
    var _a3;
    const c = ((_a3 = uo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: tl(s), localTop: F(() => !i.activeChildren.size), stackStyles: F(() => ({ zIndex: r.value })) };
}
function H1(e) {
  return { teleportTarget: V(() => {
    const n = e();
    if (n === true || !Je) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function z1() {
  return true;
}
function Hh(e, t, n) {
  if (!e || zh(e, n) === false) return false;
  const a = Cg(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function zh(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || z1)(e);
}
function W1(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Hh(e, t, n) && setTimeout(() => {
    zh(e, n) && a && a(e);
  }, 0);
}
function iv(e, t) {
  const n = Cg(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const eu = { mounted(e, t) {
  const n = (l) => W1(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Hh(l, e, t);
  };
  iv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (iv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function j1(e) {
  const { modelValue: t, color: n, ...a } = e;
  return g(Ta, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && w("div", X({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const fi = z({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...L1(), ...ke(), ...St(), ...Fc(), ..._1(), ...M1(), ...Oh(), ...ze(), ...ga() }, "VOverlay"), jn = ee()({ name: "VOverlay", directives: { vClickOutside: eu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Oe(fi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = bt("VOverlay"), i = K(), r = K(), s = K(), u = Ve(e, "modelValue"), c = V({ get: () => u.value, set: (te) => {
    te && e.disabled || (u.value = te);
  } }), { themeClasses: d } = Ue(e), { rtlClasses: f, isRtl: v } = xt(), { hasContent: S, onAfterLeave: m } = $c(e, c), b = Ke(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: x, stackStyles: _ } = N1(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: I, activatorRef: k, target: y, targetEl: C, targetRef: p, activatorEvents: T, contentEvents: A, scrimEvents: E } = O1(e, { isActive: c, isTop: x, contentEl: s }), { teleportTarget: B } = H1(() => {
    var _a3, _b2, _c2;
    const te = e.attach || e.contained;
    if (te) return te;
    const ve = ((_a3 = I == null ? void 0 : I.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return ve instanceof ShadowRoot ? ve : false;
  }), { dimensionStyles: M } = pt(e), D = Nh(), { scopeId: L } = pl();
  ce(() => e.disabled, (te) => {
    te && (c.value = false);
  });
  const { contentStyles: j, updateLocation: H } = I1(e, { isRtl: v, contentEl: s, target: y, isActive: c });
  E1(e, { root: i, contentEl: s, targetEl: C, target: y, isActive: c, updateLocation: H });
  function Q(te) {
    l("click:outside", te), e.persistent ? Y() : c.value = false;
  }
  function J(te) {
    return c.value && x.value && (!e.scrim || te.target === r.value || te instanceof MouseEvent && te.shadowTarget === r.value);
  }
  Rh(e, { isActive: c, localTop: x, contentEl: s, activatorEl: I }), Je && ce(c, (te) => {
    te ? window.addEventListener("keydown", R) : window.removeEventListener("keydown", R);
  }, { immediate: true }), Nt(() => {
    Je && window.removeEventListener("keydown", R);
  });
  function R(te) {
    var _a3, _b2, _c2;
    te.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", te), e.persistent ? Y() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = I.value) == null ? void 0 : _c2.focus())));
  }
  function Z(te) {
    te.key === "Escape" && !h.value || l("keydown", te);
  }
  const U = Xg();
  Ft(() => e.closeOnBack, () => {
    CC(U, (te) => {
      h.value && c.value ? (te(false), e.persistent ? Y() : c.value = false) : te();
    });
  });
  const O = K();
  ce(() => c.value && (e.absolute || e.contained) && B.value == null, (te) => {
    if (te) {
      const ve = hr(i.value);
      ve && ve !== document.scrollingElement && (O.value = ve.scrollTop);
    }
  });
  function Y() {
    e.noClickAnimation || s.value && ta(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Fo });
  }
  function re() {
    l("afterEnter");
  }
  function pe() {
    m(), l("afterLeave");
  }
  return le(() => {
    var _a3;
    return w(be, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: p, props: X({ ref: k }, T.value, e.activatorProps) }), D.value && S.value && g(qS, { disabled: !B.value, to: B.value }, { default: () => [w("div", X({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [_.value, { "--v-overlay-opacity": e.opacity, top: ge(O.value) }, e.style], ref: i, onKeydown: Z }, L, a), [g(j1, X({ color: b, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), g(Kt, { appear: true, persisted: true, transition: e.transition, target: y.value, onAfterEnter: re, onAfterLeave: pe }, { default: () => {
      var _a4;
      return [lt(w("div", X({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, j.value] }, A.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[Dn, c.value], [eu, { handler: Q, closeConditional: J, include: () => [I.value] }]])];
    } })])] })]);
  }), { activatorEl: I, scrimEl: r, target: y, animateClick: Y, contentEl: s, rootEl: i, globalTop: h, localTop: x, updateLocation: H };
} }), Wh = z({ id: String, submenu: Boolean, ...Oe(fi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: pr } }), ["absolute"]) }, "VMenu"), Kl = ee()({ name: "VMenu", props: Wh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), { scopeId: l } = pl(), { isRtl: o } = xt(), i = Mt(), r = F(() => e.id || `v-menu-${i}`), s = K(), u = He(Qs, null), c = ue(/* @__PURE__ */ new Set());
  rt(Qs, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !Ok(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Nt(() => u == null ? void 0 : u.unregister()), Nu(() => a.value = false), ce(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !fg(Ia((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const b = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    b && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Za(b, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Za(b, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Za(b, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const S = V(() => X({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return le(() => {
    const m = jn.filterProps(e);
    return g(jn, X({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (b) => a.value = b, absolute: true, activatorProps: S.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var b = arguments.length, h = new Array(b), x = 0; x < b; x++) h[x] = arguments[x];
      return g($e, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), It({ id: r, \u03A8openChildren: c }, s);
} }), Lc = z({ color: String, ...Ht(), ...ke(), ...St(), ...kt(), ...qn(), ...Ql(), ...it(), ...Fe(), ...ze() }, "VSheet"), Fa = ee()({ name: "VSheet", props: Lc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.color), { borderClasses: i } = Xt(e), { dimensionStyles: r } = pt(e), { elevationClasses: s } = _t(e), { locationStyles: u } = Oa(e), { positionClasses: c } = eo(e), { roundedClasses: d } = ct(e);
  return le(() => g(e.tag, { class: ne(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: ye([o.value, r.value, u.value, e.style]) }, n)), {};
} }), U1 = z({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ke(), ...ga({ transition: { component: pc } }) }, "VCounter"), _r = ee()({ name: "VCounter", functional: true, props: U1(), setup(e, t) {
  let { slots: n } = t;
  const a = F(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => g(Kt, { transition: e.transition }, { default: () => [lt(w("div", { class: ne(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: ye(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Dn, e.active]])] })), {};
} }), Y1 = z({ floating: Boolean, ...ke() }, "VFieldLabel"), mo = ee()({ name: "VFieldLabel", props: Y1(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(to, { class: ne(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: ye(e.style) }, n)), {};
} }), G1 = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], vi = z({ appendInnerIcon: Ie, bgColor: String, clearable: Boolean, clearIcon: { type: Ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => G1.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...ke(), ...xr(), ...it(), ...ze() }, "VField"), $a = ee()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...di(), ...vi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = Ue(e), { loaderClasses: i } = ii(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = ba(e), { InputIcon: d } = ci(e), { roundedClasses: f } = ct(e), { rtlClasses: v } = xt(), S = F(() => e.dirty || e.active), m = F(() => !!(e.label || l.label)), b = F(() => !e.singleLine && m.value), h = Mt(), x = V(() => e.id || `input-${h}`), _ = F(() => e.details ? `${x.value}-messages` : void 0), I = K(), k = K(), y = K(), C = V(() => ["plain", "underlined"].includes(e.variant)), p = V(() => e.error || e.disabled ? void 0 : S.value && s.value ? e.color : e.baseColor), T = V(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? p.value : e.iconColor;
  }), { backgroundColorClasses: A, backgroundColorStyles: E } = Ke(() => e.bgColor), { textColorClasses: B, textColorStyles: M } = Dt(p);
  ce(S, (Q) => {
    if (b.value && !zn()) {
      const J = I.value.$el, R = k.value.$el;
      requestAnimationFrame(() => {
        const Z = ic(J), U = R.getBoundingClientRect(), O = U.x - Z.x, Y = U.y - Z.y - (Z.height / 2 - U.height / 2), re = U.width / 0.75, pe = Math.abs(re - Z.width) > 1 ? { maxWidth: ge(re) } : void 0, te = getComputedStyle(J), ve = getComputedStyle(R), De = parseFloat(te.transitionDuration) * 1e3 || 150, we = parseFloat(ve.getPropertyValue("--v-field-label-scale")), he = ve.getPropertyValue("color");
        J.style.visibility = "visible", R.style.visibility = "hidden", ta(J, { transform: `translate(${O}px, ${Y}px) scale(${we})`, color: he, ...pe }, { duration: De, easing: Fo, direction: Q ? "normal" : "reverse" }).finished.then(() => {
          J.style.removeProperty("visibility"), R.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const D = V(() => ({ isActive: S, isFocused: s, controlRef: y, iconColor: T, blur: c, focus: u })), L = F(() => {
    const Q = !S.value;
    return { "aria-hidden": Q, for: Q ? void 0 : x.value };
  }), j = F(() => {
    const Q = b.value && S.value;
    return { "aria-hidden": Q, for: Q ? void 0 : x.value };
  });
  function H(Q) {
    Q.target !== document.activeElement && Q.preventDefault();
  }
  return le(() => {
    var _a3;
    const Q = e.variant === "outlined", J = !!(l["prepend-inner"] || e.prependInnerIcon), R = !!(e.clearable || l.clear) && !e.disabled, Z = !!(l["append-inner"] || e.appendInnerIcon || R), U = () => l.label ? l.label({ ...D.value, label: e.label, props: { for: x.value } }) : e.label;
    return w("div", X({ class: ["v-field", { "v-field--active": S.value, "v-field--appended": Z, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": J, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !U(), [`v-field--variant-${e.variant}`]: true }, o.value, A.value, r.value, i.value, f.value, v.value, e.class], style: [E.value, e.style], onClick: H }, n), [w("div", { class: "v-field__overlay" }, null), g(ri, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), J && w("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](D.value) : e.prependInnerIcon && g(d, { key: "prepend-icon", name: "prependInner", color: T.value }, null)]), w("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && g(mo, X({ key: "floating-label", ref: k, class: [B.value], floating: true }, L.value, { style: M.value }), { default: () => [U()] }), m.value && g(mo, X({ key: "label", ref: I, id: e.labelId }, j.value), { default: () => [U()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...D.value, props: { id: x.value, class: "v-field__input", "aria-describedby": _.value }, focus: u, blur: c })) ?? w("div", { id: x.value, class: "v-field__input", "aria-describedby": _.value }, null)]), R && g(kc, { key: "clear" }, { default: () => [lt(w("div", { class: "v-field__clearable", onMousedown: (O) => {
      O.preventDefault(), O.stopPropagation();
    } }, [g($e, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...D.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : g(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Dn, e.dirty]])] }), Z && w("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](D.value) : e.appendInnerIcon && g(d, { key: "append-icon", name: "appendInner", color: T.value }, null)]), w("div", { class: ne(["v-field__outline", B.value]), style: ye(M.value) }, [Q && w(be, null, [w("div", { class: "v-field__outline__start" }, null), b.value && w("div", { class: "v-field__outline__notch" }, [g(mo, X({ ref: k, floating: true }, L.value), { default: () => [U()] })]), w("div", { class: "v-field__outline__end" }, null)]), C.value && b.value && g(mo, X({ ref: k, floating: true }, L.value), { default: () => [U()] })])]);
  }), { controlRef: y, fieldIconColor: T };
} }), jh = z({ autocomplete: String }, "autocomplete");
function Oc(e) {
  const t = Mt(), n = ue(0), a = F(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: F(() => a.value ? "off" : e.autocomplete), fieldName: F(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Uh(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const K1 = ["color", "file", "time", "date", "datetime-local", "week", "month"], mi = z({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...jh(), ...Oe(Sa(), ["direction"]), ...vi() }, "VTextField"), Un = ee()({ name: "VTextField", directives: { vIntersect: An }, inheritAttrs: false, props: mi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ve(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = ba(e), { onIntersect: u } = Uh(e), c = V(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = V(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = V(() => ["plain", "underlined"].includes(e.variant)), v = K(), S = K(), m = K(), b = Oc(e), h = V(() => K1.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function x() {
    b.isSuppressing.value && b.update(), i.value || r(), Be(() => {
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
  function k(C, p) {
    C.stopPropagation(), x(), Be(() => {
      p(), ni(e["onClick:clear"], C);
    });
  }
  function y(C) {
    var _a3;
    const p = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = p.value;
      return;
    }
    const T = p.value, A = p.selectionStart, E = p.selectionEnd;
    o.value = T, Be(() => {
      let B = 0;
      T.trimStart().length === p.value.length && (B = T.length - p.value.length), A != null && (p.selectionStart = A - B), E != null && (p.selectionEnd = E - B);
    });
  }
  return le(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), p = !!(C || l.details), [T, A] = Gn(n), { modelValue: E, ...B } = Rt.filterProps(e), M = $a.filterProps(e);
    return g(Rt, X({ ref: v, modelValue: o.value, "onUpdate:modelValue": (D) => o.value = D, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, T, B, { centerAffix: !f.value, focused: i.value }), { ...l, default: (D) => {
      let { id: L, isDisabled: j, isDirty: H, isReadonly: Q, isValid: J, hasDetails: R, reset: Z } = D;
      return g($a, X({ ref: S, onMousedown: _, onClick: I, "onClick:clear": (U) => k(U, Z), role: e.role }, Oe(M, ["onClick:clear"]), { id: L.value, labelId: `${L.value}-label`, active: h.value || H.value, dirty: H.value || e.dirty, disabled: j.value, focused: i.value, details: R.value, error: J.value === false }), { ...l, default: (U) => {
        let { props: { class: O, ...Y }, controlRef: re } = U;
        const pe = w("input", X({ ref: (te) => m.value = re.value = te, value: o.value, onInput: y, autofocus: e.autofocus, readonly: Q.value, disabled: j.value, name: b.fieldName.value, autocomplete: b.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${L.value}-label` }, Y, A), null);
        return w(be, null, [e.prefix && w("span", { class: "v-text-field__prefix" }, [w("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), lt(l.default ? w("div", { class: ne(O), "data-no-activator": "" }, [l.default({ id: L }), pe]) : sa(pe, { class: O }), [[An, u, null, { once: true }]]), e.suffix && w("span", { class: "v-text-field__suffix" }, [w("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: p ? (D) => {
      var _a3;
      return w(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, D), C && w(be, null, [w("span", null, null), g(_r, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), It({}, v, S, m);
} }), q1 = z({ renderless: Boolean, ...ke() }, "VVirtualScrollItem"), Yh = ee()({ name: "VVirtualScrollItem", inheritAttrs: false, props: q1(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = kn(void 0, "border");
  ce(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), le(() => {
    var _a3, _b2;
    return e.renderless ? w(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : w("div", X({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), X1 = -1, Z1 = 1, ms = 100, Gh = z({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Kh(e, t) {
  const n = hn(), a = ue(0);
  ut(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ue(0), o = ue(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = ue(0), r = ue(0), s = K(), u = K();
  let c = 0;
  const { resizeRef: d, contentRect: f } = kn();
  ut(() => {
    d.value = s.value;
  });
  const v = V(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), S = V(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length });
  const h = ue(0);
  let x = -1;
  function _(R) {
    return m[R] || a.value;
  }
  const I = sg(() => {
    const R = performance.now();
    b[0] = 0;
    const Z = t.value.length;
    for (let U = 1; U <= Z; U++) b[U] = (b[U - 1] || 0) + _(U - 1);
    h.value = Math.max(h.value, performance.now() - R);
  }, h), k = ce(S, (R) => {
    R && (k(), c = u.value.offsetTop, I.immediate(), j(), ~x && Be(() => {
      Je && window.requestAnimationFrame(() => {
        Q(x), x = -1;
      });
    }));
  });
  gt(() => {
    I.clear();
  });
  function y(R, Z) {
    const U = m[R], O = a.value;
    a.value = O ? Math.min(a.value, Z) : Z, (U !== Z || O !== a.value) && (m[R] = Z, I());
  }
  function C(R) {
    R = Ze(R, 0, t.value.length);
    const Z = Math.floor(R), U = R % 1, O = Z + 1, Y = b[Z] || 0, re = b[O] || Y;
    return Y + (re - Y) * U;
  }
  function p(R) {
    return J1(b, R);
  }
  let T = 0, A = 0, E = 0;
  ce(v, (R, Z) => {
    j(), R < Z && requestAnimationFrame(() => {
      A = 0, j();
    });
  });
  let B = -1;
  function M() {
    if (!s.value || !u.value) return;
    const R = s.value.scrollTop, Z = performance.now();
    Z - E > 500 ? (A = Math.sign(R - T), c = u.value.offsetTop) : A = R - T, T = R, E = Z, window.clearTimeout(B), B = window.setTimeout(D, 500), j();
  }
  function D() {
    !s.value || !u.value || (A = 0, E = 0, window.clearTimeout(B), j());
  }
  let L = -1;
  function j() {
    cancelAnimationFrame(L), L = requestAnimationFrame(H);
  }
  function H() {
    if (!s.value || !v.value || !a.value) return;
    const R = T - c, Z = Math.sign(A), U = Math.max(0, R - ms), O = Ze(p(U), 0, t.value.length), Y = R + v.value + ms, re = Ze(p(Y) + 1, O + 1, t.value.length);
    if ((Z !== X1 || O < l.value) && (Z !== Z1 || re > o.value)) {
      const pe = C(l.value) - C(O), te = C(re) - C(o.value);
      Math.max(pe, te) > ms ? (l.value = O, o.value = re) : (O <= 0 && (l.value = O), re >= t.value.length && (o.value = re));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Q(R) {
    const Z = C(R);
    !s.value || R && !Z ? x = R : s.value.scrollTop = Z;
  }
  const J = V(() => t.value.slice(l.value, o.value).map((R, Z) => {
    const U = Z + l.value;
    return { raw: R, index: U, key: ht(R, e.itemKey, U) };
  }));
  return ce(t, () => {
    m = Array.from({ length: t.value.length }), b = Array.from({ length: t.value.length }), I.immediate(), j();
  }, { deep: 1 }), { calculateVisibleItems: j, containerRef: s, markerRef: u, computedItems: J, paddingTop: i, paddingBottom: r, scrollToIndex: Q, handleScroll: M, handleScrollend: D, handleItemResize: y };
}
function J1(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const Q1 = z({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Gh(), ...ke(), ...St() }, "VVirtualScroll"), Ir = ee()({ name: "VVirtualScroll", props: Q1(), setup(e, t) {
  let { slots: n } = t;
  const a = bt("VVirtualScroll"), { dimensionStyles: l } = pt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: S } = Kh(e, F(() => e.items));
  return Ft(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    wt(() => {
      i.value = hr(a.vnode.el, true), m(true);
    }), gt(m);
  }), le(() => {
    const m = S.value.map((b) => g(Yh, { key: b.key, renderless: e.renderless, "onUpdate:height": (h) => c(b.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: b.raw, index: b.index, ...h });
    } }));
    return e.renderless ? w(be, null, [w("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ge(f.value) } }, null), m, w("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ge(v.value) } }, null)]) : w("div", { ref: i, class: ne(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: ye([l.value, e.style]) }, [w("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ge(f.value), paddingBottom: ge(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function Rc(e, t) {
  const n = ue(false);
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
        const s = ce(n, () => {
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
function Nc(e) {
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
      const v = t[d], S = c[d];
      (v.type === "list" || (u === "forward" ? S.at(-1) === r.target : S.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && at(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const S = u === "forward";
        c[f].at(S ? 0 : -1).focus();
      }
    }
  }
  function i(r, s, u, c) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(u === "forward" ? f.at(-1) === c : f.at(0) === c)) return null;
    const v = u === "forward" ? 1 : -1;
    for (let S = s + v; S >= 0 && S < t.length; S += v) {
      const m = t[S];
      if (r[S].length > 0 || m.type === "list" && at(m.displayItemsCount) > 0) return S;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const eV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function gs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const kl = z({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function tV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? eV, o = (n == null ? void 0 : n.filterKeys) ? ot(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = ot(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let S = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const h = o || Object.keys(c);
        S = h.length === i;
        for (const x of h) {
          const _ = ht(c, x), I = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[x];
          if (v = I ? I(_, t, u) : l(_, t, u), v !== -1 && v !== false) I ? d[x] = gs(v, t) : f[x] = gs(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = gs(v, t));
      const m = Object.keys(f).length, b = Object.keys(d).length;
      if (!m && !b || (n == null ? void 0 : n.filterMode) === "union" && b !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (b !== i || !m && i > 0 && !S)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function wl(e, t, n, a) {
  const l = ue([]), o = ue(/* @__PURE__ */ new Map()), i = V(() => (a == null ? void 0 : a.transform) ? Et(t).map((s) => [s, a.transform(s)]) : Et(t));
  ut(() => {
    const s = typeof n == "function" ? n() : Et(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = tV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Et(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Et(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((S) => {
      let { index: m, matches: b } = S;
      const h = d[m];
      f.push(h), v.set(h.value, b);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function Hc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [w("span", { class: ne(`${e}__unmask`) }, [t.slice(o, a[0])]), w("span", { class: ne(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(w("span", { class: ne(`${e}__unmask`) }, [t.slice(a[1])])), w(be, null, [i]);
  });
}
const nV = z({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function zc(e, t) {
  const n = Mt(), a = V(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: F(() => at(t)), ariaControls: F(() => a.value) };
}
const Wc = z({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ie, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...nV(), ...Ah({ itemChildren: false }) }, "Select"), aV = z({ search: String, ...kl({ filterKeys: ["title"] }), ...Wc(), ...Oe(mi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ga({ transition: { component: pr } }) }, "VSelect"), jc = ee()({ name: "VSelect", props: aV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = K(), o = K(), i = K(), r = K(), s = K(), { items: u, transformIn: c, transformOut: d } = Tc(e), f = Ve(e, "search", ""), { filteredItems: v, getMatches: S } = wl(e, u, () => f.value), m = Ve(e, "modelValue", [], (he) => c(he === null ? [null] : ot(he)), (he) => {
    const P = d(he);
    return e.multiple ? P : P[0] ?? null;
  }), b = V(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = no(e), x = Oc(e), _ = V(() => m.value.map((he) => he.value)), I = ue(false), k = F(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: y } = ci(e);
  let C = "", p = 0, T;
  const A = V(() => {
    const he = f.value ? v.value : u.value;
    return e.hideSelected ? he.filter((P) => !m.value.some(($) => (e.valueComparator || Tt)($, P))) : he;
  }), E = V(() => e.hideNoData && !A.value.length || h.isReadonly.value || h.isDisabled.value), B = Ve(e, "menu"), M = V({ get: () => B.value, set: (he) => {
    var _a3;
    B.value && !he && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || he && E.value || (B.value = he);
  } }), { menuId: D, ariaExpanded: L, ariaControls: j } = zc(e, M), H = V(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Q = K(), J = Rc(Q, l), { onTabKeydown: R } = Nc({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Q, displayItemsCount: () => A.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    M.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function Z(he) {
    e.openOnClear && (M.value = true);
  }
  function U() {
    E.value || (M.value = !M.value);
  }
  function O(he) {
    var _a3;
    he.key === "Tab" && R(he), ((_a3 = Q.value) == null ? void 0 : _a3.$el.contains(he.target)) && Wl(he) && Y(he);
  }
  function Y(he) {
    var _a3, _b2, _c2;
    if (!he.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(he.key) && he.preventDefault(), ["Enter", "ArrowDown", " "].includes(he.key) && (M.value = true), ["Escape", "Tab"].includes(he.key) && (M.value = false), e.clearable && he.key === "Backspace") {
      he.preventDefault(), m.value = [], Z();
      return;
    }
    he.key === "Home" ? (_a3 = Q.value) == null ? void 0 : _a3.focus("first") : he.key === "End" && ((_b2 = Q.value) == null ? void 0 : _b2.focus("last"));
    const P = 1e3;
    if (!Wl(he)) return;
    const $ = performance.now();
    $ - T > P && (C = "", p = 0), C += he.key.toLowerCase(), T = $;
    const q = A.value;
    function oe() {
      let G = ae();
      return G || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), p++, G = ae(), G) || (p = 0, G = ae(), G) ? G : (C = he.key.toLowerCase(), ae());
    }
    function ae() {
      for (let G = p; G < q.length; G++) {
        const ie = q[G];
        if (ie.title.toLowerCase().startsWith(C)) return [ie, G];
      }
    }
    const se = oe();
    if (!se) return;
    const [me, de] = se;
    p = de, (_c2 = Q.value) == null ? void 0 : _c2.focus(de), e.multiple || (m.value = [me]);
  }
  function re(he) {
    let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!he.props.disabled) if (e.multiple) {
      const $ = m.value.findIndex((oe) => (e.valueComparator || Tt)(oe.value, he.value)), q = P ?? !~$;
      if (~$) {
        const oe = q ? [...m.value, he] : [...m.value];
        oe.splice($, 1), m.value = oe;
      } else q && (m.value = [...m.value, he]);
    } else {
      const $ = P !== false;
      m.value = $ ? [he] : [], Be(() => {
        M.value = false;
      });
    }
  }
  function pe(he) {
    var _a3;
    const P = he.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains(P)) || (M.value = false);
  }
  function te() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function ve() {
    var _a3;
    f.value = "", I.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function De(he) {
    I.value = true;
  }
  function we(he) {
    if (he == null) m.value = [];
    else if (zl(l.value, ":autofill") || zl(l.value, ":-webkit-autofill")) {
      const P = u.value.find(($) => $.title === he);
      P && re(P);
    } else l.value && (l.value.value = "");
  }
  return ce(M, () => {
    if (!e.hideSelected && M.value && m.value.length) {
      const he = A.value.findIndex((P) => m.value.some(($) => (e.valueComparator || Tt)($.value, P.value)));
      Je && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        he >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(he));
      });
    }
  }), ce(u, (he, P) => {
    M.value || I.value && e.hideNoData && !P.length && he.length && (M.value = true);
  }), le(() => {
    const he = !!(e.chips || n.chip), P = !!(!e.hideNoData || A.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), $ = m.value.length > 0, q = Un.filterProps(e), oe = $ || !I.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, ae = { search: f, filteredItems: v.value };
    return g(Un, X({ ref: l }, q, { modelValue: m.value.map((se) => se.props.title).join(", "), name: void 0, "onUpdate:modelValue": we, focused: I.value, "onUpdate:focused": (se) => I.value = se, validationValue: m.externalValue, counterValue: b.value, dirty: $, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: oe, "onClick:clear": Z, "onMousedown:control": U, onBlur: pe, onKeydown: Y, "aria-expanded": L.value, "aria-controls": j.value }), { ...n, default: (se) => {
      let { id: me } = se;
      return w(be, null, [w("select", { hidden: true, multiple: e.multiple, name: x.fieldName.value }, [u.value.map((de) => w("option", { key: de.value, value: de.value, selected: _.value.includes(de.value) }, null))]), g(Kl, X({ id: D.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (de) => M.value = de, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: te, onAfterLeave: ve }, H.value), { default: () => [g(Fa, { onFocusin: De, onKeydown: O }, { default: () => [n["menu-header"] && w("header", { ref: i }, [n["menu-header"](ae)]), P && g(Gl, X({ key: "select-list", ref: Q, selected: _.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!A.value.length, "aria-live": "polite", "aria-labelledby": `${me.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, J, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !A.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(wn, { key: "no-data", title: a(e.noDataText) }, null)), g(Ir, { ref: s, renderless: true, items: A.value, itemKey: "value" }, { default: (de) => {
          var _a4, _b3, _c3;
          let { item: G, index: ie, itemRef: _e } = de;
          const N = Nk(G.props), W = X(G.props, { ref: _e, key: G.value, onClick: () => re(G, null), "aria-posinset": ie + 1, "aria-setsize": A.value.length });
          return G.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: G.raw, index: ie })) ?? g(vn, X(G.props, { key: `divider-${ie}` }), null) : G.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: G.raw, index: ie })) ?? g(ao, X(G.props, { key: `subheader-${ie}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: G, index: ie, props: W })) ?? g(wn, X(W, { role: "option" }), { prepend: (Se) => {
            let { isSelected: xe } = Se;
            return w(be, null, [e.multiple && !e.hideSelected ? g(Tn, { key: G.value, modelValue: xe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Pe) => Pe.preventDefault() }, null) : void 0, N.prependAvatar && g(gn, { image: N.prependAvatar }, null), N.prependIcon && g(je, { icon: N.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Hc("v-select", G.title, (_a5 = S(G)) == null ? void 0 : _a5.title) : G.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && w("footer", { ref: r }, [n["menu-footer"](ae)])] })] }), m.value.map((de, G) => {
        function ie(Se) {
          Se.stopPropagation(), Se.preventDefault(), re(de, false);
        }
        const _e = X(ca.filterProps(de.props), { "onClick:close": ie, onKeydown(Se) {
          Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), ie(Se));
        }, onMousedown(Se) {
          Se.preventDefault(), Se.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), N = he ? !!n.chip : !!n.selection, W = N ? gr(he ? n.chip({ item: de, index: G, props: _e }) : n.selection({ item: de, index: G })) : void 0;
        if (!(N && !W)) return w("div", { key: de.value, class: "v-select__selection" }, [he ? n.chip ? g($e, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: de.title } } }, { default: () => [W] }) : g(ca, X({ key: "chip", closable: k.value, size: "small", text: de.title, disabled: de.props.disabled }, _e), null) : W ?? w("span", { class: "v-select__selection-text" }, [de.title, e.multiple && G < m.value.length - 1 && w("span", { class: "v-select__selection-comma" }, [Xe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var se = arguments.length, me = new Array(se), de = 0; de < se; de++) me[de] = arguments[de];
      return w(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...me), e.menuIcon ? g(je, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && g(y, { key: "append-icon", name: "appendInner", color: me[0].iconColor.value }, null)]);
    } });
  }), It({ isFocused: I, menu: M, search: f, filteredItems: v, select: re }, l);
} }), lV = z({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...kl({ filterKeys: ["title"] }), ...Wc(), ...Oe(mi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), oV = ee()({ name: "VAutocomplete", props: lV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), l = K(), o = ue(false), i = ue(true), r = ue(false), s = K(), u = K(), c = ue(-1), d = ue(null), { items: f, transformIn: v, transformOut: S } = Tc(e), { textColorClasses: m, textColorStyles: b } = Dt(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = ci(e), x = Ve(e, "search", ""), _ = Ve(e, "modelValue", [], (G) => v(G === null ? [null] : ot(G)), (G) => {
    const ie = S(G);
    return e.multiple ? ie : ie[0] ?? null;
  }), I = V(() => typeof e.counterValue == "function" ? e.counterValue(_.value) : typeof e.counterValue == "number" ? e.counterValue : _.value.length), k = no(e), { filteredItems: y, getMatches: C } = wl(e, f, () => d.value ?? (i.value ? "" : x.value)), p = V(() => e.hideSelected && d.value === null ? y.value.filter((G) => !_.value.some((ie) => ie.value === G.value)) : y.value), T = F(() => e.closableChips && !k.isReadonly.value && !k.isDisabled.value), A = V(() => !!(e.chips || n.chip)), E = V(() => A.value || !!n.selection), B = V(() => _.value.map((G) => G.props.value)), M = V(() => p.value.find((G) => G.type === "item" && !G.props.disabled)), D = V(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && x.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && p.value.length > 0 && !i.value && !r.value;
  }), L = V(() => e.hideNoData && !p.value.length || k.isReadonly.value || k.isDisabled.value), j = Ve(e, "menu"), H = V({ get: () => j.value, set: (G) => {
    var _a3;
    j.value && !G && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || G && L.value || (j.value = G);
  } }), { menuId: Q, ariaExpanded: J, ariaControls: R } = zc(e, H), Z = K(), U = K(), O = K(), Y = Rc(Z, l), { onTabKeydown: re } = Nc({ groups: [{ type: "element", contentRef: U }, { type: "list", contentRef: Z, displayItemsCount: () => p.value.length }, { type: "element", contentRef: O }], onLeave: () => {
    var _a3;
    H.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function pe(G) {
    e.openOnClear && (H.value = true), x.value = "";
  }
  function te() {
    L.value || (H.value = true);
  }
  function ve(G) {
    L.value || (o.value && (G.preventDefault(), G.stopPropagation()), H.value = !H.value);
  }
  function De(G) {
    var _a3, _b2;
    G.key === "Tab" && re(G), ((_a3 = Z.value) == null ? void 0 : _a3.$el.contains(G.target)) && (Wl(G) || G.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function we(G) {
    var _a3, _b2, _c2, _d2, _e2;
    if (k.isReadonly.value) return;
    const ie = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, _e = _.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(G.key) && G.preventDefault(), ["Enter", "ArrowDown"].includes(G.key) && (H.value = true), ["Escape"].includes(G.key) && (H.value = false), D.value && ["Enter", "Tab"].includes(G.key) && M.value && !_.value.some((N) => {
      let { value: W } = N;
      return W === M.value.value;
    }) && de(M.value), G.key === "ArrowDown" && D.value && ((_b2 = Z.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(G.key)) {
      if (!e.multiple && E.value && _.value.length > 0 && !x.value) return de(_.value[0], false);
      if (~c.value) {
        G.preventDefault();
        const N = c.value;
        de(_.value[c.value], false), c.value = N >= _e - 1 ? _e - 2 : N;
      } else G.key === "Backspace" && !x.value && (c.value = _e - 1);
      return;
    }
    if (e.multiple) if (G.key === "ArrowLeft") {
      if (c.value < 0 && ie && ie > 0) return;
      const N = c.value > -1 ? c.value - 1 : _e - 1;
      if (_.value[N]) c.value = N;
      else {
        const W = ((_c2 = x.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(W, W);
      }
    } else if (G.key === "ArrowRight") {
      if (c.value < 0) return;
      const N = c.value + 1;
      _.value[N] ? c.value = N : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && Wl(G) && (c.value = -1);
  }
  function he(G) {
    if (zl(l.value, ":autofill") || zl(l.value, ":-webkit-autofill")) {
      const ie = f.value.find((_e) => _e.title === G.target.value);
      ie && de(ie);
    }
  }
  function P() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function $() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function q(G) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function oe(G) {
    r.value = false;
  }
  function ae(G) {
    (G == null || G === "" && !e.multiple && !E.value) && (_.value = []);
  }
  function se(G) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(G.relatedTarget)) && (o.value = true);
  }
  const me = ue(false);
  function de(G) {
    let ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!G || G.props.disabled)) if (e.multiple) {
      const _e = _.value.findIndex((W) => (e.valueComparator || Tt)(W.value, G.value)), N = ie ?? !~_e;
      if (~_e) {
        const W = N ? [..._.value, G] : [..._.value];
        W.splice(_e, 1), _.value = W;
      } else N && (_.value = [..._.value, G]);
      e.clearOnSelect && (x.value = "");
    } else {
      const _e = ie !== false;
      _.value = _e ? [G] : [], d.value = i.value ? "" : x.value ?? "", x.value = _e && !E.value ? G.title : "", Be(() => {
        H.value = false, i.value = true;
      });
    }
  }
  return ce(o, (G, ie) => {
    var _a3;
    G !== ie && (G ? (me.value = true, x.value = e.multiple || E.value ? "" : String(((_a3 = _.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Be(() => me.value = false)) : (!e.multiple && x.value == null && (_.value = []), H.value = false, !i.value && x.value && (d.value = x.value), x.value = "", c.value = -1));
  }), ce(x, (G) => {
    !o.value || me.value || (G && (H.value = true), i.value = !G);
  }), ce(H, (G) => {
    if (!e.hideSelected && G && _.value.length && i.value) {
      const ie = p.value.findIndex((_e) => _.value.some((N) => _e.value === N.value));
      Je && window.requestAnimationFrame(() => {
        var _a3;
        ie >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(ie));
      });
    }
    G && (d.value = null);
  }), ce(f, (G, ie) => {
    H.value || o.value && !ie.length && G.length && (H.value = true);
  }), le(() => {
    const G = !!(!e.hideNoData || p.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ie = _.value.length > 0, _e = Un.filterProps(e), N = { search: x, filteredItems: y.value };
    return g(Un, X({ ref: l }, _e, { modelValue: x.value, "onUpdate:modelValue": [(W) => x.value = W, ae], focused: o.value, "onUpdate:focused": (W) => o.value = W, validationValue: _.externalValue, counterValue: I.value, dirty: ie, onChange: he, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": H.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: k.isReadonly.value, placeholder: ie ? void 0 : e.placeholder, "onClick:clear": pe, "onMousedown:control": te, onKeydown: we, onBlur: se, "aria-expanded": J.value, "aria-controls": R.value }), { ...n, default: (W) => {
      let { id: Se } = W;
      return w(be, null, [g(Kl, X({ id: Q.value, ref: s, modelValue: H.value, "onUpdate:modelValue": (xe) => H.value = xe, activator: "parent", contentClass: "v-autocomplete__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: P, onAfterLeave: $ }, e.menuProps), { default: () => [g(Fa, { onFocusin: q, onKeydown: De }, { default: () => [n["menu-header"] && w("header", { ref: U }, [n["menu-header"](N)]), G && g(Gl, X({ key: "autocomplete-list", ref: Z, filterable: true, selected: B.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (xe) => xe.preventDefault(), onFocusout: oe, tabindex: "-1", selectable: !!p.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, Y, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !p.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(wn, { key: "no-data", title: a(e.noDataText) }, null)), g(Ir, { ref: u, renderless: true, items: p.value, itemKey: "value" }, { default: (xe) => {
          var _a4, _b3, _c3;
          let { item: Pe, index: Ae, itemRef: Te } = xe;
          const Me = X(Pe.props, { ref: Te, key: Pe.value, active: D.value && Pe === M.value ? true : void 0, onClick: () => de(Pe, null), "aria-posinset": Ae + 1, "aria-setsize": p.value.length });
          return Pe.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Pe.raw, index: Ae })) ?? g(vn, X(Pe.props, { key: `divider-${Ae}` }), null) : Pe.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Pe.raw, index: Ae })) ?? g(ao, X(Pe.props, { key: `subheader-${Ae}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Pe, index: Ae, props: Me })) ?? g(wn, X(Me, { role: "option" }), { prepend: (et) => {
            let { isSelected: qe } = et;
            return w(be, null, [e.multiple && !e.hideSelected ? g(Tn, { key: Pe.value, modelValue: qe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Zt) => Zt.preventDefault() }, null) : void 0, Pe.props.prependAvatar && g(gn, { image: Pe.props.prependAvatar }, null), Pe.props.prependIcon && g(je, { icon: Pe.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Pe.title : Hc("v-autocomplete", Pe.title, (_a5 = C(Pe)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && w("footer", { ref: O }, [n["menu-footer"](N)])] })] }), _.value.map((xe, Pe) => {
        function Ae(qe) {
          qe.stopPropagation(), qe.preventDefault(), de(xe, false);
        }
        const Te = X(ca.filterProps(xe.props), { "onClick:close": Ae, onKeydown(qe) {
          qe.key !== "Enter" && qe.key !== " " || (qe.preventDefault(), qe.stopPropagation(), Ae(qe));
        }, onMousedown(qe) {
          qe.preventDefault(), qe.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Me = A.value ? !!n.chip : !!n.selection, et = Me ? gr(A.value ? n.chip({ item: xe, index: Pe, props: Te }) : n.selection({ item: xe, index: Pe })) : void 0;
        if (!(Me && !et)) return w("div", { key: xe.value, class: ne(["v-autocomplete__selection", Pe === c.value && ["v-autocomplete__selection--selected", m.value]]), style: ye(Pe === c.value ? b.value : {}) }, [A.value ? n.chip ? g($e, { key: "chip-defaults", defaults: { VChip: { closable: T.value, size: "small", text: xe.title } } }, { default: () => [et] }) : g(ca, X({ key: "chip", closable: T.value, size: "small", text: xe.title, disabled: xe.props.disabled }, Te), null) : et ?? w("span", { class: "v-autocomplete__selection-text" }, [xe.title, e.multiple && Pe < _.value.length - 1 && w("span", { class: "v-autocomplete__selection-comma" }, [Xe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var W = arguments.length, Se = new Array(W), xe = 0; xe < W; xe++) Se[xe] = arguments[xe];
      return w(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? g(je, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ve, onClick: mr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(h, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), It({ isFocused: o, isPristine: i, menu: H, search: x, filteredItems: y, select: de }, l);
} }), iV = z({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ie, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...ke(), ...qn({ location: "top end" }), ...it(), ...Fe(), ...ze(), ...ga({ transition: "scale-rotate-transition" }), ...St() }, "VBadge"), qh = ee()({ name: "VBadge", inheritAttrs: false, props: iV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Ke(() => e.color), { roundedClasses: l } = ct(e), { t: o } = Qe(), { textColorClasses: i, textColorStyles: r } = Dt(() => e.textColor), { themeClasses: s } = Sr(), { locationStyles: u } = Oa(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = pt(e);
  return le(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, S] = Fs(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return g(e.tag, X({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, S, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [w("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), g(Kt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [lt(w("span", X({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? g(je, { icon: e.icon }, null) : f]), [[Dn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), rV = z({ color: String, density: String, ...ke() }, "VBannerActions"), Xh = ee()({ name: "VBannerActions", props: rV(), setup(e, t) {
  let { slots: n } = t;
  return ft({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), le(() => {
    var _a3;
    return w("div", { class: ne(["v-banner-actions", e.class]), style: ye(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Zh = ma("v-banner-text"), sV = z({ avatar: String, bgColor: String, color: String, icon: Ie, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Ht(), ...ke(), ...vt(), ...St(), ...ml({ mobile: null }), ...kt(), ...qn(), ...Ql(), ...it(), ...Fe(), ...ze() }, "VBanner"), uV = ee()({ name: "VBanner", props: sV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ke(() => e.bgColor), { borderClasses: o } = Xt(e), { densityClasses: i } = Lt(e), { displayClasses: r, mobile: s } = hn(e), { dimensionStyles: u } = pt(e), { elevationClasses: c } = _t(e), { locationStyles: d } = Oa(e), { positionClasses: f } = eo(e), { roundedClasses: v } = ct(e), { themeClasses: S } = Ue(e), m = F(() => e.color), b = F(() => e.density);
  ft({ VBannerActions: { color: m, density: b } }), le(() => {
    const h = !!(e.text || n.text), x = !!(e.avatar || e.icon), _ = !!(x || n.prepend);
    return g(e.tag, { class: ne(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, S.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: ye([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [_ && w("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? g($e, { key: "prepend-defaults", disabled: !x, defaults: { VAvatar: { color: m.value, density: b.value, icon: e.icon, image: e.avatar } } }, n.prepend) : g(gn, { key: "prepend-avatar", color: m.value, density: b.value, icon: e.icon, image: e.avatar }, null)]), w("div", { class: "v-banner__content" }, [h && g(Zh, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(Xh, { key: "actions" }, n.actions)];
    } });
  });
} }), cV = z({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Ht(), ...ke(), ...vt(), ...kt(), ...it(), ...gl({ name: "bottom-navigation" }), ...Fe({ tag: "header" }), ...bl({ selectedClass: "v-btn--selected" }), ...ze() }, "VBottomNavigation"), dV = ee()({ name: "VBottomNavigation", props: cV(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Sr(), { borderClasses: l } = Xt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Ke(() => e.bgColor), { densityClasses: r } = Lt(e), { elevationClasses: s } = _t(e), { roundedClasses: u } = ct(e), { ssrBootStyles: c } = yl(), d = V(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ve(e, "active", e.active), { layoutItemStyles: v } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: F(() => "bottom"), layoutSize: F(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: F(() => e.absolute) });
  return Ra(e, xc), ft({ VBtn: { baseColor: F(() => e.baseColor), color: F(() => e.color), density: F(() => e.density), stacked: F(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), le(() => g(e.tag, { class: ne(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: ye([i.value, v.value, { height: ge(d.value) }, c.value, e.style]) }, { default: () => [n.default && w("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), Jh = z({ fullscreen: Boolean, scrollable: Boolean, ...Oe(fi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: pr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), tu = ee()({ name: "VDialog", props: Jh(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ve(e, "modelValue"), { scopeId: o } = pl(), i = K();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return ce(l, async (u) => {
    var _a3;
    u || (await Be(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), le(() => {
    const u = jn.filterProps(e), c = X({ "aria-haspopup": "dialog" }, e.activatorProps), d = X({ tabindex: -1 }, e.contentProps);
    return g(jn, X({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), S = 0; S < f; S++) v[S] = arguments[S];
      return g($e, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), It({}, i);
} }), fV = z({ inset: Boolean, ...Jh({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), vV = ee()({ name: "VBottomSheet", props: fV(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue");
  return le(() => {
    const l = tu.filterProps(e);
    return g(tu, X(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), mV = z({ divider: [Number, String], ...ke() }, "VBreadcrumbsDivider"), Qh = ee()({ name: "VBreadcrumbsDivider", props: mV(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var _a3;
    return w("li", { "aria-hidden": "true", class: ne(["v-breadcrumbs-divider", e.class]), style: ye(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), gV = z({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...ke(), ...tn(St(), ["width", "maxWidth"]), ...ui(), ...Fe({ tag: "li" }) }, "VBreadcrumbsItem"), ey = ee()({ name: "VBreadcrumbsItem", props: gV(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = si(e, a), o = V(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = pt(e), { textColorClasses: r, textColorStyles: s } = Dt(() => o.value ? e.activeColor : e.color);
  return le(() => g(e.tag, { class: ne(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: ye([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? w("a", X({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), hV = z({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ie, items: { type: Array, default: () => [] }, ...ke(), ...vt(), ...it(), ...Fe({ tag: "ul" }) }, "VBreadcrumbs"), yV = ee()({ name: "VBreadcrumbs", props: hV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ke(() => e.bgColor), { densityClasses: o } = Lt(e), { roundedClasses: i } = ct(e);
  ft({ VBreadcrumbsDivider: { divider: F(() => e.divider) }, VBreadcrumbsItem: { activeClass: F(() => e.activeClass), activeColor: F(() => e.activeColor), color: F(() => e.color), disabled: F(() => e.disabled) } });
  const r = V(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return le(() => {
    const s = !!(n.prepend || e.icon);
    return g(e.tag, { class: ne(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: ye([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && w("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? g($e, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : g(je, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return w(be, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? g(ey, X({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && g(Qh, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), bV = z({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...ke(), ...kt(), ...oh(), ...it(), ...Fe({ tag: "button" }), ...ze(), ...bn({ variant: "flat" }) }, "VIconBtn"), ty = ee()({ name: "VIconBtn", props: bV(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ve(e, "active"), { themeClasses: o } = Ue(e), { borderClasses: i } = Xt(e), { elevationClasses: r } = _t(e), { roundedClasses: s } = ct(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ya(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return le(() => {
    const S = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, x = e.height ?? h, _ = e.width ?? h, { iconSize: I } = ih(e, () => new Map(e.iconSizes).get(m)), k = { icon: S, size: I.value, color: e.iconColor, opacity: e.opacity };
    return g(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ne([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: ye([{ "--v-icon-btn-rotate": ge(e.rotate, "deg"), "--v-icon-btn-height": ge(x), "--v-icon-btn-width": ge(_) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ha(!e.hideOverlay, "v-icon-btn"), w("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && S ? g(je, X({ key: "content-icon" }, k), null) : g($e, { key: "content-defaults", disabled: !S, defaults: { VIcon: { ...k } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? We(e.text);
      } })]), !!e.loading && w("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? g(Ea, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: I.value }, null)])];
    } });
  }), {};
} });
function SV(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const ny = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, ay = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, pV = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], kV = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], wV = 28, xV = 31, Uc = 12, ly = 1, Pr = 1, Pa = 7, rv = 60, CV = 59, VV = 1440, _V = 24, IV = 23, PV = 0, AV = 1e4, TV = 100, DV = 100, MV = 1e4;
function EV(e, t, n) {
  const a = an(e);
  return cy(a, t[0], uy), Vn(a), n && il(a, n, a.hasTime), a;
}
function BV(e, t, n) {
  const a = an(e);
  return cy(a, t[t.length - 1]), Vn(a), n && il(a, n, a.hasTime), a;
}
function oy(e) {
  const t = an(e);
  return t.day = Pr, Ar(t), Vn(t), t;
}
function iy(e) {
  const t = an(e);
  return t.day = Gc(t.year, t.month), Ar(t), Vn(t), t;
}
function Tl(e) {
  return isFinite(parseInt(e));
}
function FV(e) {
  return typeof e == "number" && isFinite(e) || !!ay.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function sv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = ay.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Ol(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!ny.exec(e) || e instanceof Date;
}
function la(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = Yc(e);
    return n && il(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = ny.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Ar(l), Vn(l), n && il(l, n, l.hasTime), l;
}
function Yc(e) {
  return Vn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * AV + e.month * TV + e.day;
}
function nu(e) {
  return e.hour * DV + e.minute;
}
function La(e) {
  return Vt(e) * MV + nu(e);
}
function il(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = nu(t), l = nu(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function uv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function cv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = IV, e.minute = CV, e.time = sy(e))), e;
}
function ry(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, au(e, t), Vn(e), n && il(e, n, true), e;
}
function Ar(e) {
  return e.weekday = $V(e), e;
}
function Vn(e) {
  return e.time = sy(e), e.date = LV(e), e;
}
function $V(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Uc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Gc(e, t) {
  return SV(e) ? kV[t] : pV[t];
}
function an(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function Qa(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function LV(e) {
  let t = `${Qa(e.year, 4)}-${Qa(e.month, 2)}`;
  return e.hasDay && (t += `-${Qa(e.day, 2)}`), t;
}
function sy(e) {
  return e.hasTime ? `${Qa(e.hour, 2)}:${Qa(e.minute, 2)}` : "";
}
function au(e, t) {
  for (e.minute += t; e.minute >= rv; ) e.minute -= rv, e.hour++, e.hour >= _V && (Aa(e), e.hour = PV);
  return e;
}
function Aa(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Pa, e.day > wV && e.day > Gc(e.year, e.month) && (e.day = Pr, e.month++, e.month > Uc && (e.month = ly, e.year++)), e;
}
function uy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Pa, e.day < Pr && (e.month--, e.month < ly && (e.year--, e.month = Uc), e.day = Gc(e.year, e.month)), e;
}
function Ya(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Aa, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function OV(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function cy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Aa, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function RV(e) {
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
function lu(e) {
  const t = `${Qa(e.hour, 2)}:${Qa(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Qi(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Vt(t), r = [];
  let s = an(e), u = 0, c = u === i;
  if (i < Vt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = Vt(s), c = c || u === i, a[s.weekday] === 0) {
      s = Aa(s);
      continue;
    }
    const d = an(s);
    Vn(d), il(d, n), r.push(d), s = Ya(s, Aa, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function NV(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = an(e);
    o.push(ry(s, r, l));
  }
  return o;
}
function Vo(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(lu(a));
    } catch {
      return "";
    }
  };
}
function HV(e) {
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
function zV(e) {
  const t = At({ now: la("0000-00-00 00:00", true), today: la("0000-00-00", true) }), n = V(() => e.now && Ol(e.now) ? la(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return Yc(/* @__PURE__ */ new Date());
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
  return ce(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const Tr = z({ start: { type: [String, Number, Date], validate: Ol, default: () => Yc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Ol }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: HV }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Ol }, type: { type: String, default: "month" } }, "VCalendar-base");
function Kc(e) {
  const { times: t, updateTimes: n } = zV({ now: e.now }), a = Pg(e), l = vl(), o = V(() => e.type === "month" ? oy(la(e.start, true)) : la(e.start, true)), i = V(() => {
    const I = o.value, k = e.end && la(e.end) || I, y = La(k) < La(I) ? I : k;
    return e.type === "month" ? iy(y) : y;
  }), r = V(() => Ol(e.modelValue) ? la(e.modelValue, true) : o.value || t.today), s = V(() => {
    const I = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((y) => parseInt(y, 10)), k = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...I.toSorted().filter((y) => y >= k), ...I.toSorted().filter((y) => y < k)];
  }), u = V(() => {
    const I = r.value, k = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [I.weekday];
      case "4day":
        return [I.weekday, (I.weekday + 1) % 7, (I.weekday + 2) % 7, (I.weekday + 3) % 7];
      case "category":
        return Array.from({ length: k }, (y, C) => (I.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = V(() => RV(s.value)), d = V(() => Qi(o.value, i.value, t.today, c.value)), f = V(() => e.dayFormat ? e.dayFormat : Vo(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = V(() => e.weekdayFormat ? e.weekdayFormat : Vo(a.current.value, (I, k) => ({ timeZone: "UTC", weekday: k ? "short" : "long" })));
  function S(I) {
    return Ug(I);
  }
  function m(I) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": I.present, "v-past": I.past, "v-future": I.future, "v-outside": k };
  }
  function b(I) {
    return l.getWeek(l.date(I.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(I) {
    return EV(I, s.value, t.today);
  }
  function x(I) {
    return BV(I, s.value, t.today);
  }
  function _(I) {
    return Vo(a.current.value, () => I);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: S, getRelativeClasses: m, getWeekNumber: b, getStartOfWeek: h, getEndOfWeek: x, getFormatter: _, updateTimes: n };
}
const dy = z({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Tl }, intervalWidth: { type: [Number, String], default: 60, validate: Tl }, intervalMinutes: { type: [Number, String], default: 60, validate: Tl }, firstInterval: { type: [Number, String], default: 0, validate: Tl }, firstTime: { type: [Number, String, Object], validate: FV }, intervalCount: { type: [Number, String], default: 24, validate: Tl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function fy(e) {
  const t = Kc(e), n = ue(), a = V(() => parseInt(String(e.firstInterval || 0))), l = V(() => parseInt(String(e.intervalMinutes || 60))), o = V(() => parseInt(String(e.intervalCount || 24))), i = V(() => parseFloat(String(e.intervalHeight || 48))), r = V(() => sv(e.firstTime)), s = V(() => {
    const k = r.value;
    return k !== false && k >= 0 && k <= VV ? k : a.value * l.value;
  }), u = V(() => o.value * i.value), c = V(() => Qi(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = V(() => {
    const k = c.value, y = s.value, C = l.value, p = o.value, T = t.times.now;
    return k.map((A) => NV(A, y, C, p, T));
  }), f = V(() => e.intervalFormat ? e.intervalFormat : Vo(t.locale.current.value, (k, y) => y ? k.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(k) {
    const y = d.value[0][0];
    return !(y.hour === k.hour && y.minute === k.minute);
  }
  function S(k) {
  }
  function m(k, y) {
    const C = an(y), p = k.currentTarget.getBoundingClientRect(), T = s.value, A = k, E = k, B = A.changedTouches || A.touches, D = ((B && B[0] ? B[0].clientY : E.clientY) - p.top) / i.value, L = Math.floor(D * l.value), j = T + L;
    return ry(C, j, t.times.now);
  }
  function b(k) {
    const y = an(k);
    return y.timeToY = _, y.timeDelta = I, y.minutesToPixels = x, y.week = c.value, y.intervalRange = [s.value, s.value + o.value * l.value], y;
  }
  function h(k) {
    const y = _(k), C = n.value;
    return y === false || !C ? false : (C.scrollTop = y, true);
  }
  function x(k) {
    return k / l.value * i.value;
  }
  function _(k) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = y !== false;
    let T = I(k, typeof y != "boolean" ? y : void 0);
    return T === false || (T *= u.value, C ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function I(k, y) {
    let C = sv(k);
    if (C === false) return false;
    const p = o.value * l.value;
    if (y && typeof k == "object" && "day" in k) {
      const A = Vt(k), E = Vt(y);
      C += (A - E) * p;
    }
    const T = s.value;
    return (C - T) / p;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: S, getTimestampAtEvent: m, getSlotScope: b, scrollToTime: h, minutesToPixels: x, timeToY: _, timeDelta: I };
}
function WV(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function jV(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Yo = { mounted: WV, unmounted: jV }, go = qt({ name: "VCalendarDaily", directives: { vResize: Yo }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Tr(), ...dy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = K(0), o = K(), i = fy(e);
  function r() {
    Be(s);
  }
  function s() {
    l.value = u();
  }
  function u() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function c() {
    return w("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const M = ge(e.intervalWidth);
    return w("div", { class: "v-calendar-daily__intervals-head", style: { width: M } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(M, D) {
    const L = fn(a, ":day", (j) => ({ nativeEvent: j, ...i.getSlotScope(M) }));
    return w("div", X({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, L), [m(M), b(M), S(M, D)]);
  }
  function S(M, D) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: D })) ?? [];
  }
  function m(M) {
    const D = M.present ? e.color : void 0;
    return w("div", X(i.getColorProps({ text: D }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function b(M) {
    var _a3;
    return w("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const D = fn(a, ":date", (L) => ({ nativeEvent: L, ...M }));
    return g(ty, X({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": mr }, D), { default: () => [i.dayFormatter.value(M, false)] });
  }
  function x() {
    return w("div", { class: "v-calendar-daily__body" }, [_()]);
  }
  function _() {
    return w("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [I()]);
  }
  function I() {
    return w("div", { ref: o, class: "v-calendar-daily__pane", style: { height: ge(i.bodyHeight.value) } }, [k()]);
  }
  function k() {
    var _a3;
    return w("div", { class: "v-calendar-daily__day-container" }, [A(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? y()]);
  }
  function y() {
    return i.days.value.map((M, D) => {
      const L = fn(a, ":time", (j) => ({ nativeEvent: j, ...i.getSlotScope(i.getTimestampAtEvent(j, M)) }));
      return w("div", X({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, L), [p(D), C(M)]);
    });
  }
  function C(M) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(M))) ?? [];
  }
  function p(M) {
    return i.intervals.value[M].map(T);
  }
  function T(M) {
    var _a3;
    const D = ge(e.intervalHeight), L = e.intervalStyle || i.intervalStyleDefault;
    return w("div", { class: "v-calendar-daily__day-interval", key: M.time, style: ye([{ height: D }, L(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function A() {
    const M = ge(e.intervalWidth), D = fn(a, ":interval", (L) => ({ nativeEvent: L, ...i.getTimestampAtEvent(L, i.parsedStart.value) }));
    return w("div", X({ class: "v-calendar-daily__intervals-body", style: { width: M } }, D), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(B) : null;
  }
  function B(M) {
    const D = ge(e.intervalHeight), L = e.shortIntervals, Q = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, L) : void 0;
    return w("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: D } }, [w("div", { class: "v-calendar-daily__interval-text" }, [Q])]);
  }
  return wt(r), le(() => lt(w("div", { class: ne(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : c(), x()]), [[Yo, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function UV(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function vy(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : UV(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const YV = qt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Tr(), ...dy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = fy(e), o = V(() => vy(e.categories, e.categoryText));
  function i(b, h) {
    const x = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...b, category: x };
  }
  function r(b) {
    return w("div", { class: "v-calendar-category__columns" }, [o.value.map((h) => s(b, i(b, h)))]);
  }
  function s(b, h) {
    var _a3, _b2;
    const x = typeof h.category == "object" ? h.category.categoryName : h.category, _ = fn(a, ":dayCategory", () => i(l.getSlotScope(b) || b, h.category));
    return w("div", X({ class: "v-calendar-category__column-header" }, _), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(x), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function u(b) {
    return w("div", { class: "v-calendar-category__category" }, [b === null ? e.categoryForInvalid : b]);
  }
  function c() {
    const b = [];
    return l.days.value.forEach((h, x) => {
      const _ = new Array(o.value.length || 1);
      _.fill(h), b.push(..._.map((I, k) => d(I, x, k)));
    }), b;
  }
  function d(b, h, x) {
    const _ = o.value[x], I = fn(a, ":time", (k) => l.getSlotScope(l.getTimestampAtEvent(k, b)));
    return w("div", X({ key: b.date + "-" + x, class: ["v-calendar-daily__day", l.getRelativeClasses(b)] }, I), [f(h, _), S(b, _)]);
  }
  function f(b, h) {
    return l.intervals.value[b].map((x) => v(x, h));
  }
  function v(b, h) {
    var _a3;
    const x = ge(e.intervalHeight), _ = e.intervalStyle || l.intervalStyleDefault;
    return w("div", { key: b.time, class: "v-calendar-daily__day-interval", style: ye([{ height: x }, _({ ...b, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(b), h))]);
  }
  function S(b, h) {
    return w("div", { class: "v-calendar-category__columns" }, [m(b, h)]);
  }
  function m(b, h) {
    var _a3;
    const x = fn(a, ":timeCategory", (_) => i(l.getSlotScope(l.getTimestampAtEvent(_, b)), h));
    return w("div", X({ class: "v-calendar-category__column" }, x), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(b), h))]);
  }
  return le(() => g(go, X({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), dv = qt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Tl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Tr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Kc(e), o = Sr(), i = V(() => parseInt(String(e.minWeeks))), r = V(() => {
    const k = i.value * l.parsedWeekdays.value.length, y = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return Qi(y, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, k);
  }), s = V(() => {
    const k = l.times.today, y = l.getStartOfWeek(k), C = l.getEndOfWeek(k);
    return Qi(y, C, k, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = V(() => e.monthFormat ? e.monthFormat : Vo(l.locale.current.value, (k, y) => ({ timeZone: "UTC", month: y ? "short" : "long" })));
  function c(k) {
    const y = Vt(k);
    return y < Vt(l.parsedStart.value) || y > Vt(l.parsedEnd.value);
  }
  function d() {
    return w("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const k = s.value.map(v);
    return e.showWeek && k.unshift(w("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), k;
  }
  function v(k, y) {
    const C = c(r.value[y]), p = k.present ? e.color : void 0;
    return w("div", X(l.getColorProps({ text: p }), { key: k.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(k, C)], role: "columnheader" }), [l.weekdayFormatter.value(k, e.shortWeekdays)]);
  }
  function S() {
    const k = r.value, y = l.parsedWeekdays.value.length, C = [];
    for (let p = 0; p < k.length; p += y) C.push(m(k.slice(p, p + y), b(k[p])));
    return C;
  }
  function m(k, y) {
    const C = k.map((p, T) => x(p, T, k));
    return e.showWeek && C.unshift(h(y)), w("div", { key: k[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function b(k) {
    return l.getWeekNumber(k);
  }
  function h(k) {
    return w("div", { class: "v-calendar-weekly__weeknumber" }, [w("small", null, [String(k)])]);
  }
  function x(k, y, C) {
    var _a3;
    const p = c(k), T = fn(a, ":day", (A) => ({ nativeEvent: A, ...k }));
    return w("div", X({ key: k.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(k, p)], role: "cell" }, T), [_(k), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: p, index: y, week: C, ...k })]);
  }
  function _(k) {
    var _a3;
    return w("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, k)) ?? I(k)]);
  }
  function I(k) {
    const y = k.day === 1 && e.showMonthOnFirst, C = fn(a, ":date", (p) => ({ nativeEvent: p, ...k }));
    return g(ty, X({ active: k.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": mr }, C), { default: () => [y ? u.value(k, e.shortMonths) + " " + l.dayFormatter.value(k, false) : l.dayFormatter.value(k, false)] });
  }
  return le(() => w("div", { class: ne(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (k) => k.preventDefault() }, [e.hideHeader ? void 0 : d(), S()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), GV = 864e5;
function my(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function _n(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function fv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function gy(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function hy(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function yy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + GV, e.endTimestampIdentifier)];
}
function KV(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (_n(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? gy(s.event) : hy(s.event);
      if (_n(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function by(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = La(n), r = my(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? gy(s.event) : hy(s.event);
      t.groups.length > 0 && !_n(u, c, t.min, t.max, l) && (fv(t.groups), t.reset());
      let d = KV(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), fv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const vv = 100, qV = (e, t, n) => {
  const a = by(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * vv / u.columnCount, u.width = vv / u.columnCount;
    }), s;
  };
}, Vi = 100, XV = 5, ZV = 1.7, JV = (e, t, n) => {
  const a = by(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = La(l), u = my(o, s), c = o_(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const S = i_(v, s), m = n_(S, f);
        if (m === false) {
          const b = a_(S, f);
          b && (S.parent = b, S.sibling = _n(S.start, S.end, b.start, Ei(b.start, n)), S.index = b.index + 1, b.children.push(S));
        } else {
          const [b] = mv(S, f, m - 1, m - 1), h = mv(S, f, m + 1, m + f.length, true);
          S.children = h, S.index = m, b && (S.parent = b, S.sibling = _n(S.start, S.end, b.start, Ei(b.start, n)), b.children.push(S));
          for (const x of h) x.parent === b && (x.parent = S), x.index - S.index <= 1 && S.sibling && _n(S.start, Ei(S.start, n), x.start, x.end) && (x.sibling = true);
        }
        f.push(S);
      }
      QV(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function QV(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = Sy(n) + 1, i = l ? l.visual.left : 0, r = Vi - i, s = Math.min(XV, Vi / o), u = e_(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = l_(n, e, t) ? Vi - a.left : Math.min(Vi - a.left, d * ZV);
  }
}
function e_(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function t_(e, t) {
  const n = [];
  for (const a of t) _n(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function n_(e, t) {
  const n = t_(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function mv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && _n(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function a_(e, t) {
  let n = null;
  for (const a of t) _n(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function l_(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && _n(e.start, Ei(e.start, n), a.start, a.end)) return false;
  return true;
}
function o_(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = yy(a.event, t);
    let i = false;
    for (const r of n) if (_n(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function i_(e, t) {
  const [n, a] = yy(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function Sy(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = Sy(n);
    a > t && (t = a);
  }
  return t;
}
function Ei(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const py = { stack: JV, column: qV };
function r_(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = la(i, true), u = r ? la(r, true) : s, c = uv(i) ? cv(s, l) : s, d = uv(r) ? cv(u, l) : u, f = Vt(c), v = La(c), S = Vt(d), m = c.hasTime ? 0 : 2359, b = La(d) + m, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: S, endTimestampIdentifier: b, allDay: h, index: t, category: o };
}
function qc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function s_(e, t, n) {
  if (n) {
    const a = au(an(t), n[0]), l = au(an(t), n[1]), o = e.startTimestampIdentifier < La(l), i = e.endTimestampIdentifier > La(a);
    return o && i;
  }
  return qc(e, Vt(t));
}
function u_(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function gv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && qc(e, n);
}
function c_(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const d_ = 100, f_ = 95, v_ = z({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in py || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function m_(e, t, n) {
  const a = Kc(e), l = V(() => !Array.isArray(e.events) || e.events.length === 0), o = V(() => e.type === "category"), i = V(() => typeof e.eventTimed == "function" ? e.eventTimed : (D) => !!D[e.eventTimed]), r = V(() => typeof e.eventCategory == "function" ? e.eventCategory : (D) => D[e.eventCategory]), s = V(() => e.events ? e.events.map((D, L) => r_(D, L, e.eventStart || "", e.eventEnd || "", i.value(D), o.value ? r.value(D) : false)) : []), u = V(() => parseInt(String(e.eventOverlapThreshold || 0))), c = V(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = V(() => typeof e.eventName == "function" ? e.eventName : (D, L) => D.input[e.eventName] || ""), f = V(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : py[e.eventOverlapMode]), v = V(() => a.effectiveWeekdays.value);
  function S(D) {
    return typeof e.eventColor == "function" ? e.eventColor(D) : D.color || e.eventColor;
  }
  const m = K([]);
  function b() {
    if (l.value || !e.eventMore) return;
    const D = e.eventHeight || 0, L = h();
    for (const j in L) {
      const { parent: H, events: Q, more: J } = L[j];
      if (!J) break;
      const R = H.getBoundingClientRect(), Z = Q.length - 1, U = Q.map((Y) => ({ event: Y, bottom: Y.getBoundingClientRect().bottom })).sort((Y, re) => Y.bottom - re.bottom);
      let O = 0;
      for (let Y = 0; Y <= Z; Y++) {
        const re = U[Y].bottom;
        (Y === Z ? re > R.bottom : re + D > R.bottom) && (U[Y].event.style.display = "none", O++);
      }
      O ? (J.style.display = "", J.innerHTML = a.locale.t(e.eventMoreText, O)) : J.style.display = "none";
    }
  }
  function h() {
    const D = {}, L = m.value;
    return !L || !L.length || L.forEach((j) => {
      const H = j.getAttribute("data-date");
      j.parentElement && H && (H in D || (D[H] = { parent: j.parentElement, more: null, events: [] }), j.getAttribute("data-more") ? D[H].more = j : (D[H].events.push(j), j.style.display = ""));
    }), D;
  }
  function x(D, L) {
    let { event: j } = D;
    const H = e.eventHeight || 0, Q = e.eventMarginBottom || 0, J = Vt(L), R = L.week, Z = J === j.startIdentifier;
    let U = J === j.endIdentifier, O = f_;
    if (!o.value) for (let re = L.index + 1; re < R.length; re++) {
      const pe = Vt(R[re]);
      if (j.endIdentifier >= pe) O += d_, U = U || pe === j.endIdentifier;
      else {
        U = true;
        break;
      }
    }
    return I(j, { eventParsed: j, day: L, start: Z, end: U, timed: false }, false, { class: ["v-event", { "v-event-start": Z, "v-event-end": U }], style: { height: `${H}px`, width: `${O}%`, marginBottom: `${Q}px` }, "data-date": L.date });
  }
  function _(D, L) {
    let { event: j, left: H, width: Q } = D;
    const J = L.timeDelta(j.start, L), R = L.timeDelta(j.end, L);
    if (R === false || J === false || R < 0 || J >= 1 || u_(j, L)) return false;
    const Z = Vt(L), U = j.startIdentifier >= Z, O = j.endIdentifier > Z, Y = L.timeToY(j.start, L), re = L.timeToY(j.end, L), pe = Math.max(e.eventHeight || 0, re - Y);
    return I(j, { eventParsed: j, day: L, start: U, end: O, timed: true }, true, { class: "v-event-timed", style: { top: `${Y}px`, height: `${pe}px`, left: `${H}%`, width: `${Q}%` } });
  }
  function I(D, L, j, H) {
    const Q = t.event, J = c.value(D.input), R = S(D.input), Z = D.start.hour < 12 && D.end.hour >= 12, U = OV(D.start, D.end) <= u.value, O = (ve, De) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: ve.minute > 0 ? "numeric" : void 0 })(ve, true), Y = () => O(D.start) + " - " + O(D.end), re = () => {
      const ve = d.value(D, j);
      if (D.start.hasTime) if (j) {
        const De = Y(), we = U ? ", " : w("br", null, null);
        return w("span", { class: "v-event-summary" }, [w("strong", null, [ve]), we, De]);
      } else {
        const De = O(D.start);
        return w("span", { class: "v-event-summary" }, [w("strong", null, [De]), Xe(" "), ve]);
      }
      return w("span", { class: "v-event-summary" }, [ve]);
    }, pe = { ...L, event: D.input, outside: L.day.outside, singline: U, overlapsNoon: Z, formatTime: O, timeSummary: Y, eventSummary: re }, te = fn(n, ":event", (ve) => ({ ...pe, nativeEvent: ve }));
    return lt(w("div", X(a.getColorProps({ text: J, background: R }), te, H, { ref_for: true, ref: m }), [(Q == null ? void 0 : Q(pe)) ?? k(re)]), [[$t, e.eventRipple ?? true]]);
  }
  function k(D) {
    return w("div", { class: "pl-1" }, [D()]);
  }
  function y(D) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return w("div", { style: { height: `${L}px` }, "data-date": D.date, ref_for: true, ref: m }, null);
  }
  function C(D) {
    const L = e.eventHeight || 0, j = e.eventMarginBottom || 0, H = fn(n, ":more", (Q) => ({ nativeEvent: Q, ...D }));
    return lt(w("div", X({ class: ["v-event-more pl-1", { "v-outside": D.outside }], "data-date": D.date, "data-more": "1", style: { display: "none", height: `${L}px`, marginBottom: `${j}px` }, ref_for: true, ref: m }, H), null), [[$t, e.eventRipple ?? true]]);
  }
  function p() {
    const D = a.days.value, L = Vt(D[0]), j = Vt(D[D.length - 1]);
    return s.value.filter((H) => c_(H, L, j));
  }
  function T(D, L) {
    return !o.value || typeof L == "object" && L.categoryName && L.categoryName === D.category || typeof D.category == "string" && L === D.category || typeof D.category != "string" && L === null;
  }
  function A(D) {
    const L = Vt(D), j = v.value[0];
    return s.value.filter((H) => gv(H, D, L, j));
  }
  function E(D) {
    const L = Vt(D), j = v.value[0];
    return s.value.filter((H) => H.allDay && (o.value ? qc(H, L) : gv(H, D, L, j)) && T(H, D.category));
  }
  function B(D) {
    return s.value.filter((L) => !L.allDay && s_(L, D, D.intervalRange) && T(L, D.category));
  }
  function M() {
    if (l.value) return { ...t };
    const D = f.value(s.value, v.value[0], u.value), L = (H) => !!H, j = (H, Q, J, R) => {
      const Z = Q(H), U = D(H, Z, R, o.value);
      if (R) return U.map((Y) => J(Y, H)).filter(L);
      const O = [];
      return U.forEach((Y, re) => {
        for (; O.length < Y.column; ) O.push(y(H));
        const pe = J(Y, H);
        pe && O.push(pe);
      }), O;
    };
    return { ...t, day: (H) => {
      let Q = j(H, A, x, false);
      if (Q && Q.length > 0 && e.eventMore && Q.push(C(H)), t.day) {
        const J = t.day(H);
        J && (Q = Q ? Q.concat(J) : J);
      }
      return Q;
    }, "day-header": (H) => {
      let Q = j(H, E, x, false);
      if (t["day-header"]) {
        const J = t["day-header"](H);
        J && (Q = Q ? Q.concat(J) : J);
      }
      return Q;
    }, "day-body": (H) => {
      const Q = j(H, B, _, true);
      let J = [w("div", { class: "v-event-timed-container" }, [Q])];
      if (t["day-body"]) {
        const R = t["day-body"](H);
        R && (J = J.concat(R));
      }
      return J;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: S, eventsRef: m, updateEventVisibility: b, getEventsMap: h, genDayEvent: x, genTimedEvent: _, genEvent: I, genName: k, genPlaceholder: y, genMore: C, getVisibleEvents: p, isEventForCategory: T, getEventsForDay: A, getEventsForDayAll: E, getEventsForDayTimed: B, getScopedSlots: M };
}
const g_ = ee()({ name: "VCalendar", directives: { vResize: Yo }, props: { modelValue: { type: [String, Number, Date], validate: Ol }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Tr(), ...v_() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = K(), i = m_(e, n, a), r = K(null), s = K(null), u = V(() => parseInt(String(e.categoryDays)) || 1), c = V(() => vy(e.categories, e.categoryText)), d = V(() => {
    const y = i.parsedValue.value;
    let C = null, p = e.maxDays, T = c.value, A = y, E = y;
    switch (e.type) {
      case "month":
        C = dv, A = oy(y), E = iy(y);
        break;
      case "week":
        C = go, A = i.getStartOfWeek(y), E = i.getEndOfWeek(y), p = 7;
        break;
      case "day":
        C = go, p = 1;
        break;
      case "4day":
        C = go, E = Ya(an(E), Aa, 3), Vn(E), p = 4;
        break;
      case "custom-weekly":
        C = dv, A = i.parsedStart.value || y, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = go, A = i.parsedStart.value || y, E = i.parsedEnd.value;
        break;
      case "category":
        const B = u.value;
        C = YV, E = Ya(an(E), Aa, B), Vn(E), p = B, T = k(T);
        break;
      default:
        const M = e.type;
        throw new Error(`${M} is not a valid Calendar type`);
    }
    return { component: C, start: A, end: E, maxDays: p, categories: T };
  }), f = V(() => i.effectiveWeekdays.value), v = V(() => e.type === "category"), S = V(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = V(() => i.getFormatter({ timeZone: "UTC", month: "short" })), b = V(() => {
    const { start: y, end: C } = d.value, p = y.year !== C.year, T = p || y.month !== C.month;
    return p ? m.value(y, true) + " " + y.year + " - " + m.value(C, true) + " " + C.year : T ? m.value(y, true) + " - " + m.value(C, true) + " " + C.year : S.value(y, false) + " " + y.year;
  });
  function h() {
    const { start: y, end: C } = d.value;
    (!r.value || !s.value || y.date !== r.value.date || C.date !== s.value.date) && (r.value = y, s.value = C, l("change", { start: y, end: C }));
  }
  function x() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = an(i.parsedValue.value), p = y > 0, T = p ? Aa : uy, A = p ? xV : Pr;
    let E = p ? y : -y;
    for (; --E >= 0; ) switch (e.type) {
      case "month":
        C.day = A, T(C);
        break;
      case "week":
        Ya(C, T, Pa);
        break;
      case "day":
        Ya(C, T, 1);
        break;
      case "4day":
        Ya(C, T, 4);
        break;
      case "category":
        Ya(C, T, u.value);
        break;
    }
    Ar(C), Vn(C), il(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", lu(C)) : typeof e.modelValue == "number" ? l("update:modelValue", lu(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function _() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(y);
  }
  function I() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(-y);
  }
  function k(y) {
    if (!i.noEvents.value) {
      const C = y.reduce((p, T, A) => (typeof T == "object" && T.categoryName ? p[T.categoryName] = { index: A, count: 0 } : typeof T == "string" && (p[T] = { index: A, count: 0 }), p), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let p = y.length;
        i.parsedEvents.value.forEach((T) => {
          let A = T.category;
          typeof A != "string" && (A = e.categoryForInvalid), A && (A in C ? C[A].count++ : e.categoryHideDynamic || (C[A] = { index: p++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const p in C) C[p].count === 0 && delete C[p];
      y = y.filter((p) => typeof p == "object" && p.categoryName ? C.hasOwnProperty(p.categoryName) : typeof p == "string" ? C.hasOwnProperty(p) : false);
    }
    return y;
  }
  return ce(d, h), wt(() => {
    i.updateEventVisibility(), h();
  }), cr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), le(() => {
    const { start: y, end: C, maxDays: p, component: T, categories: A } = d.value;
    return lt(g(T, X({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, T.filterProps(e), { start: y.date, end: C.date, maxDays: p, weekdays: i.effectiveWeekdays.value, categories: A, "onClick:date": (E, B) => {
      a["onUpdate:modelValue"] && l("update:modelValue", B.date);
    } }), i.getScopedSlots()), [[Yo, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), It({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: b, monthLongFormatter: S, monthShortFormatter: m, parsedCategories: c, checkChange: h, move: x, next: _, prev: I, getCategoryList: k }, o);
} }), h_ = z({ ...ke(), ...Fe() }, "VCardActions"), ky = ee()({ name: "VCardActions", props: h_(), setup(e, t) {
  let { slots: n } = t;
  return ft({ VBtn: { slim: true, variant: "text" } }), le(() => g(e.tag, { class: ne(["v-card-actions", e.class]), style: ye(e.style) }, n)), {};
} }), y_ = z({ opacity: [Number, String], ...ke(), ...Fe() }, "VCardSubtitle"), wy = ee()({ name: "VCardSubtitle", props: y_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-card-subtitle", e.class]), style: ye([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), xy = ma("v-card-title"), b_ = z({ appendAvatar: String, appendIcon: Ie, prependAvatar: String, prependIcon: Ie, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...ke(), ...vt(), ...Fe() }, "VCardItem"), Cy = ee()({ name: "VCardItem", props: b_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return g(e.tag, { class: ne(["v-card-item", e.class]), style: ye(e.style) }, { default: () => {
      var _a3;
      return [l && w("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? g($e, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : w(be, null, [e.prependAvatar && g(gn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(je, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), w("div", { class: "v-card-item__content" }, [r && g(xy, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? We(e.title)];
      } }), s && g(wy, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? We(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && w("div", { key: "append", class: "v-card-item__append" }, [n.append ? g($e, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : w(be, null, [e.appendIcon && g(je, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(gn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), S_ = z({ opacity: [Number, String], ...ke(), ...Fe() }, "VCardText"), Vy = ee()({ name: "VCardText", props: S_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-card-text", e.class]), style: ye([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), p_ = z({ appendAvatar: String, appendIcon: Ie, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...ke(), ...vt(), ...St(), ...kt(), ...xr(), ...qn(), ...Ql(), ...it(), ...ui(), ...Fe(), ...ze(), ...bn({ variant: "elevated" }) }, "VCard"), k_ = ee()({ name: "VCard", directives: { vRipple: $t }, props: p_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { borderClasses: o } = Xt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ya(e), { densityClasses: u } = Lt(e), { dimensionStyles: c } = pt(e), { elevationClasses: d } = _t(e), { loaderClasses: f } = ii(e), { locationStyles: v } = Oa(e), { positionClasses: S } = eo(e), { roundedClasses: m } = ct(e), b = si(e, n), h = ue(void 0);
  return ce(() => e.loading, (x, _) => {
    h.value = !x && typeof _ == "string" ? _ : typeof x == "boolean" ? void 0 : x;
  }, { immediate: true }), le(() => {
    const x = e.link !== false && b.isLink.value, _ = !e.disabled && e.link !== false && (e.link || b.isClickable.value), I = x ? "a" : e.tag, k = !!(a.title || e.title != null), y = !!(a.subtitle || e.subtitle != null), C = k || y, p = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), A = !!(a.image || e.image), E = C || T || p, B = !!(a.text || e.text != null);
    return lt(g(I, X(b.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": _ }, l.value, o.value, i.value, u.value, d.value, f.value, S.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": ge(e.height) }, e.style], onClick: _ && b.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [A && w("div", { key: "image", class: "v-card__image" }, [a.image ? g($e, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : g(ua, { key: "image-img", cover: true, src: e.image }, null)]), g(ri, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && g(Cy, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), B && g(Vy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && g(ky, null, { default: a.actions }), ha(_, "v-card")];
    } }), [[$t, _ && e.ripple]]);
  }), {};
} }), w_ = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function x_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function C_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), w_(t);
}
function V_(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function __() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => x_(n, t), touchend: (n) => C_(n, t), touchmove: (n) => V_(n, t) };
}
function I_(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = __(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, ig(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function P_(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  ig(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const er = { mounted: I_, unmounted: P_ }, _y = Symbol.for("vuetify:v-window"), Iy = Symbol.for("vuetify:v-window-group"), Dr = z({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...ke(), ...Fe(), ...ze() }, "VWindow"), rl = ee()({ name: "VWindow", directives: { vTouch: er }, props: Dr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { isRtl: l } = xt(), { t: o } = Qe(), i = Ra(e, Iy), r = K(), s = V(() => l.value ? !e.reverse : e.reverse), u = ue(false), c = V(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const y = e.direction === "vertical" ? "y" : "x", p = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${y}${p}-transition`;
  }), d = ue(0), f = K(void 0), v = V(() => i.items.value.findIndex((y) => i.selected.value.includes(y.id)));
  ce(v, (y, C) => {
    let p;
    const T = { left: 0, top: 0 };
    Je && C >= 0 && (p = hr(r.value), T.left = p == null ? void 0 : p.scrollLeft, T.top = p == null ? void 0 : p.scrollTop);
    const A = i.items.value.length, E = A - 1;
    A <= 2 ? u.value = y < C : y === E && C === 0 ? u.value = false : y === 0 && C === E ? u.value = true : u.value = y < C, Be(() => {
      if (!Je || !p) return;
      p.scrollTop !== T.top && p.scrollTo({ ...T, behavior: "instant" }), requestAnimationFrame(() => {
        if (!p) return;
        p.scrollTop !== T.top && p.scrollTo({ ...T, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), rt(_y, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const S = F(() => e.continuous || v.value !== 0), m = F(() => e.continuous || v.value !== i.items.value.length - 1);
  function b() {
    S.value && i.prev();
  }
  function h() {
    m.value && i.next();
  }
  const x = V(() => {
    const y = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    y.push(S.value ? n.prev ? n.prev({ props: C }) : g(Ne, C, null) : w("div", null, null));
    const p = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return y.push(m.value ? n.next ? n.next({ props: p }) : g(Ne, p, null) : w("div", null, null)), y;
  }), _ = V(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? b() : h();
  }, right: () => {
    s.value ? h() : b();
  }, start: (C) => {
    let { originalEvent: p } = C;
    p.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function I(y) {
    (e.direction === "horizontal" && y.key === "ArrowLeft" || e.direction === "vertical" && y.key === "ArrowUp") && (y.preventDefault(), b(), Be(() => {
      S.value ? k(0) : k(1);
    })), (e.direction === "horizontal" && y.key === "ArrowRight" || e.direction === "vertical" && y.key === "ArrowDown") && (y.preventDefault(), h(), Be(() => {
      m.value ? k(1) : k(0);
    }));
  }
  function k(y) {
    var _a3;
    const C = x.value[y];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return le(() => lt(g(e.tag, { ref: r, class: ne(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: ye([e.style, { "--v-window-transition-duration": zn() ? null : ge(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [w("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && w("div", { class: ne(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: I }, [x.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[er, _.value]])), { group: i };
} }), A_ = z({ color: String, cycle: Boolean, delimiterIcon: { type: Ie, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Dr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), T_ = ee()({ name: "VCarousel", props: A_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), { t: l } = Qe(), o = K();
  let i = -1;
  ce(a, s), ce(() => e.interval, s), ce(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), wt(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Be(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Be(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return le(() => {
    const c = rl.filterProps(e);
    return g(rl, X({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ge(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return w(be, null, [!e.hideDelimiters && w("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && g($e, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, S) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", S + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (b) => u(b, f) };
        return n.item ? n.item({ props: m, item: v }) : g(Ne, X(v, m), null);
      })] })]), e.progress && g(wr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), Mr = z({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...ke(), ...Sl(), ...Fc() }, "VWindowItem"), sl = ee()({ name: "VWindowItem", directives: { vTouch: er }, props: Mr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(_y), l = Ma(e, Iy), { isBooted: o } = yl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = ue(false), r = V(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
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
  function d(S) {
    i.value && Be(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ge(S.clientHeight));
    });
  }
  const f = V(() => {
    const S = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof S != "string" ? a.transition.value : S, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = $c(e, l.isSelected);
  return le(() => g(Kt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [lt(w("div", { class: ne(["v-window-item", l.selectedClass.value, e.class]), style: ye(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Dn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), D_ = z({ ...Yg(), ...Mr() }, "VCarouselItem"), M_ = ee()({ name: "VCarouselItem", inheritAttrs: false, props: D_(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  le(() => {
    const l = ua.filterProps(e), o = sl.filterProps(e);
    return g(sl, X({ class: ["v-carousel-item", e.class] }, o), { default: () => [g(ua, X(a, l), n)] });
  });
} }), E_ = ma("v-code", "code"), B_ = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...ke() }, "VColorPickerCanvas"), F_ = qt({ name: "VColorPickerCanvas", props: B_(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = ue(false), l = K(), o = ue(parseFloat(e.width)), i = ue(parseFloat(e.height)), r = K({ x: 0, y: 0 }), s = F(() => !e.disabled && !e.readonly), u = V({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x, y: _ } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Ze(x, 0, o.value) / o.value, v: 1 - Ze(_, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = V(() => {
    const { x: h, y: x } = u.value, _ = parseInt(e.dotSize, 10) / 2;
    return { width: ge(e.dotSize), height: ge(e.dotSize), transform: `translate(${ge(h - _)}, ${ge(x - _)})` };
  }), { resizeRef: d } = kn((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: x, height: _ } = h[0].contentRect;
    o.value = Math.round(x), i.value = Math.round(_);
  });
  function f(h, x, _) {
    const { left: I, top: k, width: y, height: C } = _;
    u.value = { x: Ze(h - I, 0, y), y: Ze(x - k, 0, C) };
  }
  function v(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (S(h), window.addEventListener("mousemove", S), window.addEventListener("mouseup", m), window.addEventListener("touchmove", S), window.addEventListener("touchend", m));
  }
  function S(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const x = $k(h);
    f(x.clientX, x.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", m);
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
  return ce(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, b, { immediate: true }), ce(() => [o.value, i.value], (h, x) => {
    b(), r.value = { x: u.value.x * h[0] / x[0], y: u.value.y * h[1] / x[1] };
  }, { flush: "post" }), ce(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), wt(() => b()), le(() => w("div", { ref: d, class: ne(["v-color-picker-canvas", e.class]), style: ye(e.style), onMousedown: v, onTouchstartPassive: v }, [w("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && w("div", { class: ne(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: ye(c.value) }, null)])), {};
} });
function $_(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function L_(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = Wn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = Rs(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = wg(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Ka(t, ["r", "g", "b"]) ? n = Wn(e) : Ka(t, ["h", "s", "l"]) ? n = Rs(e) : Ka(t, ["h", "s", "v"]) && (n = e), $_(n, !Ka(t, ["a"]) && e.a === 1);
  }
  return e;
}
const El = { h: 0, s: 0, v: 0, a: 1 }, ou = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Wn, from: ai }, O_ = { ...ou, inputs: (_a2 = ou.inputs) == null ? void 0 : _a2.slice(0, 3) }, iu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Rs, from: sc }, R_ = { ...iu, inputs: iu.inputs.slice(0, 3) }, Py = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: wg, from: rw }, N_ = { ...Py, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, el = { rgb: O_, rgba: ou, hsl: R_, hsla: iu, hex: N_, hexa: Py }, H_ = (e) => {
  let { label: t, ...n } = e;
  return w("div", { class: "v-color-picker-edit__input" }, [w("input", cS(zm(n)), null), w("span", null, [t])]);
}, z_ = z({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(el).includes(e) }, modes: { type: Array, default: () => Object.keys(el), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(el).includes(t)) }, ...ke() }, "VColorPickerEdit"), W_ = qt({ name: "VColorPickerEdit", props: z_(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = V(() => e.modes.map((i) => ({ ...el[i], name: i }))), o = V(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const S = v.target;
        S && n("update:color", i.from(c(r ?? i.to(El), S.value)));
      } };
    });
  });
  return le(() => {
    var _a3;
    return w("div", { class: ne(["v-color-picker-edit", e.class]), style: ye(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => g(H_, i, null)), l.value.length > 1 && g(Ne, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Xc = Symbol.for("vuetify:v-slider");
function ru(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function j_(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Ay = z({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...it(), ...kt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), Ty = (e) => {
  const t = V(() => parseFloat(e.min)), n = V(() => parseFloat(e.max)), a = V(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = V(() => Math.max(vf(a.value), vf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Ze(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Dy = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = no(t), { isRtl: s } = xt(), u = F(() => t.reverse), c = V(() => t.direction === "vertical"), d = V(() => c.value !== u.value), { min: f, max: v, step: S, decimals: m, roundValue: b } = n, h = V(() => parseInt(t.thumbSize, 10)), x = V(() => parseInt(t.tickSize, 10)), _ = V(() => parseInt(t.trackSize, 10)), I = V(() => (v.value - f.value) / S.value), k = V(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), y = V(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = V(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), p = V(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = ue(false), A = ue(0), E = K(), B = K();
  function M(te) {
    var _a3;
    const ve = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!ve) return;
    const De = t.direction === "vertical", we = De ? "top" : "left", he = De ? "height" : "width", P = De ? "clientY" : "clientX", { [we]: $, [he]: q } = ve.getBoundingClientRect(), oe = j_(te, P);
    let ae = Ze((oe - $ - A.value) / q) || 0;
    return (De ? d.value : d.value !== s.value) && (ae = 1 - ae), b(f.value + ae * (v.value - f.value));
  }
  const D = (te) => {
    const ve = M(te);
    ve != null && o({ value: ve }), T.value = false, A.value = 0;
  }, L = (te) => {
    const ve = M(te);
    B.value = i(te), B.value && (T.value = true, B.value.contains(te.target) ? A.value = ru(te, B.value, t.direction) : (A.value = 0, ve != null && l({ value: ve })), ve != null && a({ value: ve }), Be(() => {
      var _a3;
      return (_a3 = B.value) == null ? void 0 : _a3.focus();
    }));
  }, j = { passive: true, capture: true };
  function H(te) {
    const ve = M(te);
    ve != null && l({ value: ve });
  }
  function Q(te) {
    te.stopPropagation(), te.preventDefault(), D(te), window.removeEventListener("mousemove", H, j), window.removeEventListener("mouseup", Q);
  }
  function J(te) {
    var _a3;
    D(te), window.removeEventListener("touchmove", H, j), (_a3 = te.target) == null ? void 0 : _a3.removeEventListener("touchend", J);
  }
  function R(te) {
    var _a3;
    L(te), window.addEventListener("touchmove", H, j), (_a3 = te.target) == null ? void 0 : _a3.addEventListener("touchend", J, { passive: false });
  }
  function Z(te) {
    te.button === 0 && (te.preventDefault(), L(te), window.addEventListener("mousemove", H, j), window.addEventListener("mouseup", Q, { passive: false }));
  }
  gt(() => {
    window.removeEventListener("touchmove", H), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", Q);
  });
  const U = (te) => {
    const ve = (te - f.value) / (v.value - f.value) * 100;
    return Ze(isNaN(ve) ? 0 : ve, 0, 100);
  }, O = F(() => t.showTicks), Y = V(() => O.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((te) => ({ value: te, position: U(te), label: te.toString() })) : Object.keys(t.ticks).map((te) => ({ value: parseFloat(te), position: U(parseFloat(te)), label: t.ticks[te] })) : I.value !== 1 / 0 ? Rn(I.value + 1).map((te) => {
    const ve = f.value + te * S.value;
    return { value: ve, position: U(ve) };
  }) : [] : []), re = V(() => Y.value.some((te) => {
    let { label: ve } = te;
    return !!ve;
  })), pe = { activeThumbRef: B, color: F(() => t.color), decimals: m, disabled: r.isDisabled, direction: F(() => t.direction), elevation: F(() => t.elevation), hasLabels: re, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: T, noKeyboard: F(() => t.noKeyboard), numTicks: I, onSliderMousedown: Z, onSliderTouchstart: R, parsedTicks: Y, parseMouseMove: M, position: U, readonly: r.isReadonly, rounded: F(() => t.rounded), roundValue: b, showTicks: O, startOffset: A, step: S, thumbSize: h, thumbColor: k, thumbLabelColor: y, thumbLabel: F(() => t.thumbLabel), ticks: F(() => t.ticks), tickSize: x, trackColor: C, trackContainerRef: E, trackFillColor: p, trackSize: _, vertical: c };
  return rt(Xc, pe), pe;
}, U_ = z({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...ke() }, "VSliderThumb"), su = ee()({ name: "VSliderThumb", directives: { vRipple: $t }, props: U_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = He(Xc), { isRtl: o, rtlClasses: i } = xt();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: S, direction: m, isReversed: b, vertical: h, readonly: x, elevation: _, mousePressed: I, decimals: k, indexFromEnd: y } = l, C = ue(false), p = ue(false), T = V(() => f.value ? void 0 : _.value), { elevationClasses: A } = _t(T), { textColorClasses: E, textColorStyles: B } = Dt(u), { backgroundColorClasses: M, backgroundColorStyles: D } = Ke(c), { pageup: L, pagedown: j, end: H, home: Q, left: J, right: R, down: Z, up: U } = Bs, O = [L, j, H, Q, J, R, Z, U], Y = V(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function re(te, ve) {
    if (e.noKeyboard || f.value || !O.includes(te.key)) return;
    te.preventDefault();
    const De = d.value || 0.1, we = (s.value - r.value) / De;
    if ([J, R, Z, U].includes(te.key)) {
      const P = (h.value ? [o.value ? J : R, b.value ? Z : U] : y.value !== o.value ? [J, U] : [R, U]).includes(te.key) ? 1 : -1, $ = te.shiftKey ? 2 : te.ctrlKey ? 1 : 0;
      P === -1 && ve === s.value && !$ && !Number.isInteger(we) ? ve = ve - we % 1 * De : ve = ve + P * De * Y.value[$];
    } else if (te.key === Q) ve = r.value;
    else if (te.key === H) ve = s.value;
    else {
      const he = te.key === j ? 1 : -1;
      ve = ve - he * De * (we > 100 ? we / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, ve));
  }
  function pe(te) {
    const ve = re(te, e.modelValue);
    ve != null && (p.value = false, a("update:modelValue", ve));
  }
  return ce(() => e.focused, (te) => {
    te && (p.value = false);
  }), le(() => {
    const te = ge(y.value ? 100 - e.position : e.position, "%"), ve = S.value === "always" || S.value === true && e.focused || S.value === "hover" && (C.value || e.focused && !p.value);
    return w("div", { class: ne(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && I.value }, e.class, i.value]), style: ye([{ "--v-slider-thumb-position": te, "--v-slider-thumb-size": ge(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!x.value, "aria-orientation": m.value, onKeydown: x.value ? void 0 : pe, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, p.value = true;
    } }, [w("div", { class: ne(["v-slider-thumb__surface", E.value, A.value]), style: ye(B.value) }, null), lt(w("div", { class: ne(["v-slider-thumb__ripple", E.value]), style: ye(B.value) }, null), [[$t, e.ripple, null, { circle: true, center: true }]]), g(Sc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [lt(w("div", { class: "v-slider-thumb__label-container" }, [w("div", { class: ne(["v-slider-thumb__label", M.value]), style: ye(D.value) }, [w("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? k.value : 1)]), w("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Dn, ve]])];
    } })]);
  }), {};
} }), Y_ = z({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...ke() }, "VSliderTrack"), My = ee()({ name: "VSliderTrack", props: Y_(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = He(Xc);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: S, indexFromEnd: m } = a, { roundedClasses: b } = ct(i), { backgroundColorClasses: h, backgroundColorStyles: x } = Ke(c), { backgroundColorClasses: _, backgroundColorStyles: I } = Ke(u), k = V(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), y = V(() => f.value ? "height" : "width"), C = V(() => ({ [k.value]: "0%", [y.value]: "100%" })), p = V(() => e.stop - e.start), T = V(() => ({ [k.value]: ge(e.start, "%"), [y.value]: ge(p.value, "%") })), A = V(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((B, M) => {
    var _a3;
    const D = B.value !== v.value && B.value !== S.value ? ge(B.position, "%") : void 0;
    return w("div", { key: B.value, class: ne(["v-slider-track__tick", { "v-slider-track__tick--filled": B.position >= e.start && B.position <= e.stop, "v-slider-track__tick--first": B.value === v.value, "v-slider-track__tick--last": B.value === S.value }]), style: { [k.value]: D } }, [(B.label || n["tick-label"]) && w("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: B, index: M })) ?? B.label])]);
  }) : []);
  return le(() => w("div", { class: ne(["v-slider-track", b.value, e.class]), style: ye([{ "--v-slider-track-size": ge(d.value), "--v-slider-tick-size": ge(s.value) }, e.style]) }, [w("div", { class: ne(["v-slider-track__background", _.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...I.value } }, null), w("div", { class: ne(["v-slider-track__fill", h.value]), style: { ...T.value, ...x.value } }, null), r.value && w("div", { class: ne(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [A.value])])), {};
} }), G_ = z({ ...di(), ...Ay(), ...Sa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), uu = ee()({ name: "VSlider", inheritAttrs: false, props: G_(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), { rtlClasses: r } = xt(), s = Ty(e), u = Ve(e, "modelValue", void 0, (A) => s.roundValue(A ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: S, onSliderTouchstart: m, trackContainerRef: b, position: h, hasLabels: x, disabled: _, readonly: I, noKeyboard: k } = Dy({ props: e, steps: s, onSliderStart: () => {
    !_.value && !I.value && a("start", u.value);
  }, onSliderEnd: (A) => {
    let { value: E } = A;
    const B = v(E);
    !_.value && !I.value && (u.value = B), a("end", B);
  }, onSliderMove: (A) => {
    let { value: E } = A;
    !_.value && !I.value && (u.value = v(E));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: y, focus: C, blur: p } = ba(e), T = V(() => h(u.value));
  return le(() => {
    const A = Rt.filterProps(e), [E, B] = Gn(l), M = !!(e.label || n.label || n.prepend);
    return g(Rt, X({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || x.value, "v-slider--focused": y.value, "v-slider--pressed": f.value, "v-slider--disabled": _.value }, r.value, e.class], style: e.style }, A, E, { focused: y.value }), { ...n, prepend: M ? (D) => {
      var _a3, _b2;
      return w(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, D)) ?? (e.label ? g(to, { id: D.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, D)]);
    } : void 0, default: (D) => {
      let { id: L, messagesId: j } = D;
      return w("div", { class: "v-slider__container", onMousedown: I.value ? void 0 : S, onTouchstartPassive: I.value ? void 0 : m }, [w("input", { id: L.value, name: e.name || L.value, disabled: _.value, readonly: I.value, tabindex: "-1", value: u.value }, null), g(My, { ref: b, start: 0, stop: T.value }, { "tick-label": n["tick-label"] }), g(su, X({ ref: o, "aria-describedby": j.value, focused: y.value, noKeyboard: k.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (H) => u.value = H, position: T.value, elevation: e.elevation, onFocus: C, onBlur: p, ripple: e.ripple, name: e.name }, B), { "thumb-label": n["thumb-label"] })]);
    } });
  }), It({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), Ey = z({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ie, default: "$eyeDropper" }, ...ke() }, "VColorPickerPreview"), K_ = qt({ name: "VColorPickerPreview", props: Ey(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), l = new AbortController(), o = F(() => !e.disabled && !e.readonly);
  dr(() => l.abort());
  async function i() {
    if (!cf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = ai(dn(s.sRGBHex));
      n("update:color", { ...e.color ?? El, ...u });
    } catch {
    }
  }
  return le(() => {
    var _a3, _b2;
    return w("div", { class: ne(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: ye(e.style) }, [cf && !e.hideEyeDropper && w("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [g(Ne, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), w("div", { class: "v-color-picker-preview__dot" }, [w("div", { style: { background: Sg(e.color ?? El) } }, null)]), w("div", { class: "v-color-picker-preview__sliders" }, [g(uu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? El, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && g(uu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? El, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), q_ = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, X_ = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, Z_ = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, J_ = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, Q_ = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, eI = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, tI = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, nI = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, aI = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, lI = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, oI = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, iI = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, rI = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, sI = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, uI = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, cI = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, dI = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, fI = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, vI = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, mI = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, gI = { red: q_, pink: X_, purple: Z_, deepPurple: J_, indigo: Q_, blue: eI, lightBlue: tI, cyan: nI, teal: aI, green: lI, lightGreen: oI, lime: iI, yellow: rI, amber: sI, orange: uI, deepOrange: cI, brown: dI, blueGrey: fI, grey: vI, shades: mI }, hI = z({ swatches: { type: Array, default: () => yI(gI) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...ke() }, "VColorPickerSwatches");
function yI(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const bI = qt({ name: "VColorPickerSwatches", props: hI(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = F(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return le(() => w("div", { class: ne(["v-color-picker-swatches", e.class]), style: ye([{ maxHeight: ge(e.maxHeight) }, e.style]) }, [w("div", null, [e.swatches.map((o) => w("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = dn(i), s = ai(r), u = bg(r);
    return w("div", { class: ne(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [w("div", { style: { background: u } }, [e.color && Tt(e.color, s) ? g(je, { size: "x-small", icon: "$success", color: dw(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), SI = ma("v-picker-title"), Er = z({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Lc() }, "VPicker"), ql = ee()({ name: "VPicker", props: Er(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Ke(() => e.color);
  return le(() => {
    const o = Fa.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return g(Fa, X(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && w("div", { key: "header", class: ne(["v-picker__header-wrapper", a.value]), style: ye([l.value]) }, [i && g(SI, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && w("div", { class: "v-picker__header" }, [n.header()])]), w("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g($e, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [w("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), pI = z({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(el).includes(e) }, modes: { type: Array, default: () => Object.keys(el), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(el).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Er({ hideHeader: true }), ...tn(Ey(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), kI = qt({ name: "VColorPicker", props: pI(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "mode"), l = K(null), o = Ve(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = ai(dn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? L_(c, e.modelValue) : null), i = V(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = xt();
  let s = true;
  ce(o, (c) => {
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
    return g(ql, X(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Sg({ ...i.value ?? El, a: 1 }) }, e.style] }), { ...n, default: () => w(be, null, [!e.hideCanvas && g(F_, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && w("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && g(K_, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && g(W_, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && g(bI, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), wI = z({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...kl({ filterKeys: ["title"] }), ...Wc({ hideNoData: true, returnObject: true }), ...Oe(mi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), xI = ee()({ name: "VCombobox", props: wI(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = K(), i = ue(false), r = ue(true), s = ue(false), u = K(), c = K(), d = ue(-1);
  let f = false;
  const { items: v, transformIn: S, transformOut: m } = Tc(e), { textColorClasses: b, textColorStyles: h } = Dt(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: x } = ci(e), _ = Ve(e, "modelValue", [], (N) => S(ot(N)), (N) => {
    const W = m(N);
    return e.multiple ? W : W[0] ?? null;
  }), I = no(e), k = F(() => e.closableChips && !I.isReadonly.value && !I.isDisabled.value), y = V(() => !!(e.chips || a.chip)), C = V(() => y.value || !!a.selection), p = ue(!e.multiple && !C.value ? ((_a3 = _.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), T = ue(null), A = V({ get: () => p.value, set: async (N) => {
    var _a4;
    if (p.value = N ?? "", N === null || N === "" && !e.multiple && !C.value ? _.value = [] : !e.multiple && !C.value && (_.value = [xn(e, N)], Be(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), N && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const W = me(N);
      W.length > 1 && (de(W), p.value = "");
    }
    N || (d.value = -1), r.value = !N;
  } }), E = V(() => typeof e.counterValue == "function" ? e.counterValue(_.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? _.value.length : A.value.length), { filteredItems: B, getMatches: M } = wl(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? A.value : "")), D = V(() => e.hideSelected && T.value === null ? B.value.filter((N) => !_.value.some((W) => W.value === N.value)) : B.value), L = V(() => e.hideNoData && !D.value.length || I.isReadonly.value || I.isDisabled.value), j = Ve(e, "menu"), H = V({ get: () => j.value, set: (N) => {
    var _a4;
    j.value && !N && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || N && L.value || (j.value = N);
  } }), { menuId: Q, ariaExpanded: J, ariaControls: R } = zc(e, H);
  ce(p, (N) => {
    f ? Be(() => f = false) : i.value && !H.value && (H.value = true), n("update:search", N);
  }), ce(_, (N) => {
    var _a4;
    !e.multiple && !C.value && (p.value = ((_a4 = N[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const Z = V(() => _.value.map((N) => N.value)), U = V(() => D.value.find((N) => N.type === "item" && !N.props.disabled)), O = V(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && A.value === ((_a4 = U.value) == null ? void 0 : _a4.title)) && D.value.length > 0 && !r.value && !s.value;
  }), Y = K(), re = K(), pe = K(), te = Rc(Y, o), { onTabKeydown: ve } = Nc({ groups: [{ type: "element", contentRef: re }, { type: "list", contentRef: Y, displayItemsCount: () => D.value.length }, { type: "element", contentRef: pe }], onLeave: () => {
    var _a4;
    H.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function De(N) {
    f = true, Be(() => f = false), e.openOnClear && (H.value = true);
  }
  function we() {
    L.value || (H.value = true);
  }
  function he(N) {
    L.value || (i.value && (N.preventDefault(), N.stopPropagation()), H.value = !H.value);
  }
  function P(N) {
    var _a4, _b2;
    N.key === "Tab" && ve(N), ((_a4 = Y.value) == null ? void 0 : _a4.$el.contains(N.target)) && (Wl(N) || N.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function $(N) {
    var _a4, _b2, _c2, _d2;
    if (Bk(N) || I.isReadonly.value) return;
    const W = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, Se = _.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(N.key) && N.preventDefault(), ["Enter", "ArrowDown"].includes(N.key) && (H.value = true), ["Escape"].includes(N.key) && (H.value = false), O.value && ["Enter", "Tab"].includes(N.key) && U.value && !_.value.some((xe) => {
      let { value: Pe } = xe;
      return Pe === U.value.value;
    }) && se(U.value), N.key === "ArrowDown" && O.value && ((_b2 = Y.value) == null ? void 0 : _b2.focus("next")), N.key === "Enter" && A.value && (se(xn(e, A.value), true, true), C.value && (p.value = "")), ["Backspace", "Delete"].includes(N.key)) {
      if (!e.multiple && C.value && _.value.length > 0 && !A.value) return se(_.value[0], false);
      if (~d.value) {
        N.preventDefault();
        const xe = d.value;
        se(_.value[d.value], false), d.value = xe >= Se - 1 ? Se - 2 : xe;
      } else N.key === "Backspace" && !A.value && (d.value = Se - 1);
      return;
    }
    if (e.multiple) if (N.key === "ArrowLeft") {
      if (d.value < 0 && W && W > 0) return;
      const xe = d.value > -1 ? d.value - 1 : Se - 1;
      _.value[xe] ? d.value = xe : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(A.value.length, A.value.length));
    } else if (N.key === "ArrowRight") {
      if (d.value < 0) return;
      const xe = d.value + 1;
      _.value[xe] ? d.value = xe : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && Wl(N) && (d.value = -1);
  }
  function q(N) {
    var _a4;
    const W = ((_a4 = N == null ? void 0 : N.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", Se = me(W);
    Se.length > 1 && e.multiple && (N.preventDefault(), de(Se));
  }
  function oe() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function ae() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, T.value = null;
  }
  function se(N) {
    let W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!N || N.props.disabled)) if (e.multiple) {
      const xe = _.value.findIndex((Ae) => (e.valueComparator || Tt)(Ae.value, N.value)), Pe = W ?? !~xe;
      if (~xe) {
        const Ae = Pe ? [..._.value, N] : [..._.value];
        Ae.splice(xe, 1), _.value = Ae;
      } else Pe && (_.value = [..._.value, N]);
      e.clearOnSelect && (A.value = "");
    } else {
      const xe = W !== false;
      _.value = xe ? [N] : [], (!r.value || e.alwaysFilter) && p.value && (T.value = p.value), p.value = xe && !C.value ? N.title : "", Be(() => {
        H.value = Se, r.value = true;
      });
    }
  }
  function me(N) {
    const Se = [`
`, ...e.delimiters ?? []].map(Ui).join("|");
    return N.split(new RegExp(`(?:${Se})+`));
  }
  async function de(N) {
    for (let W of N) W = W.trim(), W && (se(xn(e, W)), await Be());
  }
  function G(N) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function ie(N) {
    s.value = false;
  }
  function _e(N) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(N.relatedTarget)) && (i.value = true);
  }
  return ce(i, (N, W) => {
    if (!(N || N === W) && (d.value = -1, H.value = false, A.value)) {
      if (e.multiple) {
        se(xn(e, A.value));
        return;
      }
      if (!C.value) return;
      _.value.some((Se) => {
        let { title: xe } = Se;
        return xe === A.value;
      }) ? p.value = "" : se(xn(e, A.value));
    }
  }), ce(H, (N) => {
    if (!e.hideSelected && N && _.value.length && r.value) {
      const W = D.value.findIndex((Se) => _.value.some((xe) => (e.valueComparator || Tt)(xe.value, Se.value)));
      Je && window.requestAnimationFrame(() => {
        var _a4;
        W >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(W));
      });
    }
    N && (T.value = null);
  }), ce(v, (N, W) => {
    H.value || i.value && !W.length && N.length && (H.value = true);
  }), le(() => {
    const N = !!(!e.hideNoData || D.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), W = _.value.length > 0, Se = Un.filterProps(e), xe = { search: A, filteredItems: B.value };
    return g(Un, X({ ref: o }, Se, { modelValue: A.value, "onUpdate:modelValue": (Pe) => A.value = Pe, focused: i.value, "onUpdate:focused": (Pe) => i.value = Pe, validationValue: _.externalValue, counterValue: E.value, dirty: W, class: ["v-combobox", { "v-combobox--active-menu": H.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: I.isReadonly.value, placeholder: W ? void 0 : e.placeholder, "onClick:clear": De, "onMousedown:control": we, onKeydown: $, onPaste: q, onBlur: _e, "aria-expanded": J.value, "aria-controls": R.value }), { ...a, default: (Pe) => {
      let { id: Ae } = Pe;
      return w(be, null, [g(Kl, X({ id: Q.value, ref: u, modelValue: H.value, "onUpdate:modelValue": (Te) => H.value = Te, activator: "parent", contentClass: "v-combobox__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: oe, onAfterLeave: ae }, e.menuProps), { default: () => [g(Fa, { onFocusin: G, onKeydown: P }, { default: () => [a["menu-header"] && w("header", { ref: re }, [a["menu-header"](xe)]), N && g(Gl, X({ key: "combobox-list", ref: Y, filterable: true, selected: Z.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Te) => Te.preventDefault(), selectable: !!D.value.length, onFocusout: ie, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Ae.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, te, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !D.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? g(wn, { key: "no-data", title: l(e.noDataText) }, null)), g(Ir, { ref: c, renderless: true, items: D.value, itemKey: "value" }, { default: (Te) => {
          var _a5, _b3, _c3;
          let { item: Me, index: et, itemRef: qe } = Te;
          const Zt = X(Me.props, { ref: qe, key: Me.value, active: O.value && Me === U.value ? true : void 0, onClick: () => se(Me, null), "aria-posinset": et + 1, "aria-setsize": D.value.length });
          return Me.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Me.raw, index: et })) ?? g(vn, X(Me.props, { key: `divider-${et}` }), null) : Me.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Me.raw, index: et })) ?? g(ao, X(Me.props, { key: `subheader-${et}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Me, index: et, props: Zt })) ?? g(wn, X(Zt, { role: "option" }), { prepend: (Mn) => {
            let { isSelected: fe } = Mn;
            return w(be, null, [e.multiple && !e.hideSelected ? g(Tn, { key: Me.value, modelValue: fe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (zt) => zt.preventDefault() }, null) : void 0, Me.props.prependAvatar && g(gn, { image: Me.props.prependAvatar }, null), Me.props.prependIcon && g(je, { icon: Me.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Me.title : Hc("v-combobox", Me.title, (_a6 = M(Me)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && w("footer", { ref: pe }, [a["menu-footer"](xe)])] })] }), _.value.map((Te, Me) => {
        function et(fe) {
          fe.stopPropagation(), fe.preventDefault(), se(Te, false);
        }
        const qe = X(ca.filterProps(Te.props), { "onClick:close": et, onKeydown(fe) {
          fe.key !== "Enter" && fe.key !== " " || (fe.preventDefault(), fe.stopPropagation(), et(fe));
        }, onMousedown(fe) {
          fe.preventDefault(), fe.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Zt = y.value ? !!a.chip : !!a.selection, Mn = Zt ? gr(y.value ? a.chip({ item: Te, index: Me, props: qe }) : a.selection({ item: Te, index: Me })) : void 0;
        if (!(Zt && !Mn)) return w("div", { key: Te.value, class: ne(["v-combobox__selection", Me === d.value && ["v-combobox__selection--selected", b.value]]), style: ye(Me === d.value ? h.value : {}) }, [y.value ? a.chip ? g($e, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: Te.title } } }, { default: () => [Mn] }) : g(ca, X({ key: "chip", closable: k.value, size: "small", text: Te.title, disabled: Te.props.disabled }, qe), null) : Mn ?? w("span", { class: "v-combobox__selection-text" }, [Te.title, e.multiple && Me < _.value.length - 1 && w("span", { class: "v-combobox__selection-comma" }, [Xe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Pe = arguments.length, Ae = new Array(Pe), Te = 0; Te < Pe; Te++) Ae[Te] = arguments[Te];
      return w(be, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Ae), (!e.hideNoData || e.items.length) && e.menuIcon ? g(je, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: he, onClick: mr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(x, { key: "append-icon", name: "appendInner", color: Ae[0].iconColor.value }, null)]);
    } });
  }), It({ isFocused: i, isPristine: r, menu: H, search: A, selectionIndex: d, filteredItems: B, select: se }, o);
} }), CI = z({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), VI = ee()({ name: "VConfirmEdit", props: CI(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ve(e, "modelValue"), o = K();
  ut(() => {
    o.value = structuredClone(bf(l.value));
  });
  const { t: i } = Qe(), r = V(() => Tt(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = V(() => s("save")), c = V(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(bf(l.value)), n("cancel");
  }
  function v(m) {
    return w(be, null, [g(Ne, X({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), g(Ne, X({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let S = false;
  return le(() => {
    var _a3;
    return w(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return S = true, v;
    } }), !e.hideActions && !S && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), By = z({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Fy = Symbol.for("vuetify:datatable:expanded");
function Br(e) {
  const t = F(() => e.expandOnClick), n = Ve(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = Ee(r.value);
    if (s) u.add(c);
    else {
      const d = [...n.value].find((f) => Ee(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = Ee(r.value);
    return [...n.value].some((u) => Ee(u) === s);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: o };
  return rt(Fy, i), i;
}
function $y() {
  const e = He(Fy);
  if (!e) throw new Error("foo");
  return e;
}
const Zc = z({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Ly = Symbol.for("vuetify:data-table-group");
function Jc(e) {
  return { groupBy: Ve(e, "groupBy") };
}
function Fr(e) {
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
      for (const S of f.items) "type" in S && S.type === "group" ? v.push(...d(S)) : v.push(S);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return rt(Ly, u), u;
}
function Oy() {
  const e = He(Ly);
  if (!e) throw new Error("Missing group!");
  return e;
}
function _I(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ll(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function Ry(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = _I(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? Ry(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function Ny(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...Ny(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function $r(e, t, n, a) {
  const l = V(() => t.value.length ? Ry(at(e), t.value.map((i) => i.key)) : []), o = V(() => t.value.length ? Ny(l.value, n.value, at(a)) : at(e));
  return { groups: l, flatItems: o };
}
function Lr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = bt("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  ce(r, (u) => {
    Tt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const Qc = z({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Hy = Symbol.for("vuetify:data-table-pagination");
function ed(e) {
  const t = Ve(e, "page", void 0, (a) => Number(a ?? 1)), n = Ve(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function td(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = V(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = V(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = V(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  ce([t, i], () => {
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
  return rt(Hy, d), d;
}
function II() {
  const e = He(Hy);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function zy(e) {
  const t = bt("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = V(() => o.value <= 0 ? at(n) : at(n).slice(a.value, l.value));
  return ce(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function PI(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = at(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = V(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((b) => b.type === "group" && b.id === d), S = o.value.findIndex((b) => b.type === "group" && b.id === f), m = o.value.findIndex((b, h) => h > S && b.type === "group" && b.depth === 0);
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
const AI = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, Wy = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return Wy.select({ items: n, value: t, selected: a });
} }, TI = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, jy = z({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Uy = Symbol.for("vuetify:data-table-selection");
function Or(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = Ve(e, "modelValue", e.modelValue, (x) => {
    const _ = e.valueComparator;
    return _ ? new Set(ot(x).map((I) => {
      var _a3;
      return ((_a3 = n.value.find((k) => _(I, k.value))) == null ? void 0 : _a3.value) ?? I;
    })) : new Set(ot(x).map((I) => {
      var _a3, _b2;
      return Da(I) ? ((_a3 = n.value.find((k) => I === k.value)) == null ? void 0 : _a3.value) ?? I : ((_b2 = n.value.find((k) => Tt(I, k.value))) == null ? void 0 : _b2.value) ?? I;
    }));
  }, (x) => [...x.values()]), o = V(() => n.value.filter((x) => x.selectable)), i = V(() => at(a).filter((x) => x.selectable)), r = V(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return AI;
      case "all":
        return TI;
      case "page":
      default:
        return Wy;
    }
  }), s = ue(null);
  function u(x) {
    return ot(x).every((_) => l.value.has(_.value));
  }
  function c(x) {
    return ot(x).some((_) => l.value.has(_.value));
  }
  function d(x, _) {
    const I = r.value.select({ items: x, value: _, selected: new Set(l.value) });
    l.value = I;
  }
  function f(x, _, I) {
    const k = [], y = at(a);
    if (_ = _ ?? y.findIndex((C) => C.value === x.value), e.selectStrategy !== "single" && (I == null ? void 0 : I.shiftKey) && s.value !== null) {
      const [C, p] = [s.value, _].sort((T, A) => T - A);
      k.push(...y.slice(C, p + 1).filter((T) => T.selectable));
    } else k.push(x), s.value = _;
    d(k, !u([x]));
  }
  function v(x) {
    const _ = r.value.selectAll({ value: x, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = _;
  }
  const S = V(() => l.value.size > 0), m = V(() => {
    const x = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!x.length && u(x);
  }), h = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: S, allSelected: m, showSelectAll: F(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return rt(Uy, h), h;
}
function Rr() {
  const e = He(Uy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Yy = z({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Gy = Symbol.for("vuetify:data-table-sort");
function Nr(e) {
  const t = F(() => e.initialSortOrder), n = Ve(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: F(() => e.multiSort), mustSort: F(() => e.mustSort) };
}
function DI(e, t) {
  if (!ol(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function Hr(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, S = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === S ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = S;
    else {
      const { active: m, mode: b } = DI(l.value, c);
      m ? b === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return rt(Gy, s), s;
}
function Ky() {
  const e = He(Gy);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function nd(e, t, n, a) {
  const l = Qe();
  return { sortedItems: V(() => {
    var _a3, _b2;
    return n.value.length ? MI(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function MI(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ll(i[1], c), v = ll(r[1], c), S = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [S, m] = [m, S]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const b = a.sortRawFunctions[c](S, m);
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
const EI = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function BI(e, t) {
  const n = e.returnObject ? t : ht(t, e.itemValue), a = ht(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function FI(e, t) {
  const n = [];
  for (const a of t) n.push(BI(e, a));
  return n;
}
function $I(e) {
  return { items: V(() => FI(e, e.items)) };
}
const LI = z({ search: String, loading: Boolean, itemsLength: [Number, String], ...ke(), ...EI(), ...jy(), ...Yy(), ...Qc({ itemsPerPage: 5 }), ...By(), ...Zc(), ...kl(), ...Fe(), ...ga({ transition: { component: No, hideOnLeave: true } }) }, "VDataIterator"), OI = ee()({ name: "VDataIterator", props: LI(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "groupBy"), l = F(() => e.search), { items: o } = $I(e), { filteredItems: i } = wl(e, o, l, { transform: (Y) => Y.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = Nr(e), { page: d, itemsPerPage: f } = ed(e), { toggleSort: v } = Hr({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: S, opened: m, extractRows: b, isGroupOpen: h, toggleGroup: x } = Fr({ groupBy: a, sortBy: s }), { sortedItems: _ } = nd(e, i, S, { transform: (Y) => Y.raw }), { flatItems: I } = $r(_, a, m, false), k = F(() => !vo(e.itemsLength)), y = F(() => k.value ? Number(e.itemsLength) : I.value.length), { startIndex: C, stopIndex: p, pageCount: T, prevPage: A, nextPage: E, setItemsPerPage: B, setPage: M } = td({ page: d, itemsPerPage: f, itemsLength: y }), D = ue([]), L = V(() => k.value ? I.value : D.value);
  Ft(() => !k.value, () => {
    const { paginatedItems: Y } = zy({ items: I, startIndex: C, stopIndex: p, itemsPerPage: f });
    ut(() => {
      D.value = Y.value;
    });
  });
  const j = V(() => b(L.value)), { isSelected: H, select: Q, selectAll: J, toggleSelect: R } = Or(e, { allItems: o, currentPage: j }), { isExpanded: Z, toggleExpand: U } = Br(e);
  Lr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const O = V(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: T.value, toggleSort: v, prevPage: A, nextPage: E, setPage: M, setItemsPerPage: B, isSelected: H, select: Q, selectAll: J, toggleSelect: R, isExpanded: Z, toggleExpand: U, isGroupOpen: h, toggleGroup: x, items: j.value, itemsCount: i.value.length, groupedItems: L.value }));
  return le(() => g(e.tag, { class: ne(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: ye(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, O.value), g(Kt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? g(ri, { key: "loader", name: "v-data-iterator", active: true }, { default: (Y) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, Y);
      } }) : w("div", { key: "items" }, [L.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, O.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, O.value)];
  } })), {};
} });
function RI() {
  const e = K([]);
  km(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const NI = z({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ie, default: "$first" }, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, lastIcon: { type: Ie, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Ht(), ...ke(), ...vt(), ...kt(), ...it(), ...Xn(), ...Fe({ tag: "nav" }), ...ze(), ...bn({ variant: "text" }) }, "VPagination"), cu = ee()({ name: "VPagination", props: NI(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ve(e, "modelValue"), { t: o, n: i } = Qe(), { isRtl: r } = xt(), { themeClasses: s } = Ue(e), { width: u } = hn(), c = ue(-1);
  ft(void 0, { scoped: true });
  const { resizeRef: d } = kn((p) => {
    if (!p.length) return;
    const { target: T, contentRect: A } = p[0], E = T.querySelector(".v-pagination__list > *");
    if (!E) return;
    const B = A.width, M = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    c.value = m(B, M);
  }), f = V(() => parseInt(e.length, 10)), v = V(() => parseInt(e.start, 10)), S = V(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(p, T) {
    const A = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((p - T * A) / T).toFixed(2))));
  }
  const b = V(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (S.value <= 0) return [];
    if (S.value === 1) return [l.value];
    if (f.value <= S.value) return Rn(f.value, v.value);
    const p = S.value % 2 === 0, T = p ? S.value / 2 : Math.floor(S.value / 2), A = p ? T : T + 1, E = f.value - T;
    if (A - l.value >= 0) return [...Rn(Math.max(1, S.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - E >= (p ? 1 : 0)) {
      const B = S.value - 1, M = f.value - B + v.value;
      return [v.value, e.ellipsis, ...Rn(B, M)];
    } else {
      const B = Math.max(1, S.value - 2), M = B === 1 ? l.value : l.value - Math.ceil(B / 2) + v.value;
      return [v.value, e.ellipsis, ...Rn(B, M), e.ellipsis, f.value];
    }
  });
  function h(p, T, A) {
    p.preventDefault(), l.value = T, A && a(A, T);
  }
  const { refs: x, updateRef: _ } = RI();
  ft({ VPaginationBtn: { color: F(() => e.color), border: F(() => e.border), density: F(() => e.density), size: F(() => e.size), variant: F(() => e.variant), rounded: F(() => e.rounded), elevation: F(() => e.elevation) } });
  const I = V(() => b.value.map((p, T) => {
    const A = (E) => _(E, T);
    if (typeof p == "string") return { isActive: false, key: `ellipsis-${T}`, page: p, props: { ref: A, ellipsis: true, icon: true, disabled: true } };
    {
      const E = p === l.value;
      return { isActive: E, key: p, page: i(p), props: { ref: A, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": o(E ? e.currentPageAriaLabel : e.pageAriaLabel, p), onClick: (B) => h(B, p) } };
    }
  })), k = V(() => {
    const p = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (A) => h(A, v.value, "first"), disabled: p, "aria-label": o(e.firstAriaLabel), "aria-disabled": p } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (A) => h(A, l.value - 1, "prev"), disabled: p, "aria-label": o(e.previousAriaLabel), "aria-disabled": p }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (A) => h(A, l.value + 1, "next"), disabled: T, "aria-label": o(e.nextAriaLabel), "aria-disabled": T }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (A) => h(A, v.value + f.value - 1, "last"), disabled: T, "aria-label": o(e.lastAriaLabel), "aria-disabled": T } : void 0 };
  });
  function y() {
    var _a3;
    const p = l.value - v.value;
    (_a3 = x.value[p]) == null ? void 0 : _a3.$el.focus();
  }
  function C(p) {
    p.key === Bs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Be(y)) : p.key === Bs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Be(y));
  }
  return le(() => g(e.tag, { ref: d, class: ne(["v-pagination", s.value, e.class]), style: ye(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [w("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && w("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(k.value.first) : g(Ne, X({ _as: "VPaginationBtn" }, k.value.first), null)]), w("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(k.value.prev) : g(Ne, X({ _as: "VPaginationBtn" }, k.value.prev), null)]), I.value.map((p, T) => w("li", { key: p.key, class: ne(["v-pagination__item", { "v-pagination__item--is-active": p.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(p) : g(Ne, X({ _as: "VPaginationBtn" }, p.props), { default: () => [p.page] })])), w("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(k.value.next) : g(Ne, X({ _as: "VPaginationBtn" }, k.value.next), null)]), e.showFirstLastPage && w("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(k.value.last) : g(Ne, X({ _as: "VPaginationBtn" }, k.value.last), null)])])] })), {};
} }), ad = z({ color: String, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, firstIcon: { type: Ie, default: "$first" }, lastIcon: { type: Ie, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Go = ee()({ name: "VDataTableFooter", props: ad(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = II(), d = V(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return le(() => {
    var _a3;
    const f = cu.filterProps(e);
    return w("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), w("div", { class: "v-data-table-footer__items-per-page" }, [w("span", null, [a(e.itemsPerPageText)]), g(jc, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), w("div", { class: "v-data-table-footer__info" }, [w("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), w("div", { class: "v-data-table-footer__pagination" }, [g(cu, X({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Oe(f, ["color"])), null)])]);
  }), {};
} }), Ko = hw({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return g(a, { class: ne(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ge(e.height), width: ge(e.width), maxWidth: ge(e.maxWidth), left: l === "start" ? ge(e.fixedOffset || null) : void 0, right: l === "end" ? ge(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ge(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), HI = z({ headers: Array }, "DataTable-header"), qy = Symbol.for("vuetify:data-table-headers"), Xy = { title: "", sortable: false }, zI = { ...Xy, width: 48 };
function WI() {
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
function du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) du(n, t);
  return t;
}
function Zy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Zy(n.children, t);
  return t;
}
function jI(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Xy;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return zI;
  }
}
function ld(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => ld(n, t + 1))) : t;
}
function UI(e) {
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
  for (let o = 0; o < e.length; o++) a = Jy(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = Qy(e[o], l);
}
function Jy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = Jy(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function Qy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = Qy(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function YI(e, t) {
  const n = [];
  let a = 0;
  const l = WI(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - ld(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? du(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => du(i)).flat(), headers: n };
}
function eb(e) {
  const t = [];
  for (const n of e) {
    const a = { ...jI(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? eb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function od(e, t) {
  const n = K([]), a = K([]), l = K({}), o = K({}), i = K({});
  ut(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Yn(m) }))).slice(), c = Zy(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = eb(u);
    UI(d);
    const f = Math.max(...d.map((m) => ld(m))) + 1, v = YI(d, f);
    n.value = v.headers, a.value = v.columns;
    const S = v.headers.flat(1);
    for (const m of S) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return rt(qy, r), r;
}
function zr() {
  const e = He(qy);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const tb = z({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ie }, sortAscIcon: { type: Ie, default: "$sortAsc" }, sortDescIcon: { type: Ie, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...vt(), ...ml(), ...xr() }, "VDataTableHeaders"), ul = ee()({ name: "VDataTableHeaders", props: tb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { toggleSort: l, sortBy: o, isSorted: i } = Ky(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = Rr(), { columns: d, headers: f } = zr(), { loaderClasses: v } = ii(e);
  function S(T, A) {
    if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
    const E = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? ge(T.fixedOffset) : void 0, right: E === "end" ? ge(T.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${A})` : void 0 };
  }
  function m(T, A) {
    T.key === "Enter" && !e.disableSort && l(A, T);
  }
  function b(T) {
    var _a3;
    switch ((_a3 = o.value.find((E) => E.key === T.key)) == null ? void 0 : _a3.order) {
      case "asc":
        return e.sortAscIcon;
      case "desc":
        return e.sortDescIcon;
      default:
        return e.sortIcon || (e.initialSortOrder === "asc" ? e.sortAscIcon : e.sortDescIcon);
    }
  }
  const { backgroundColorClasses: h, backgroundColorStyles: x } = Ke(() => e.color), { displayClasses: _, mobile: I } = hn(e), k = V(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: b })), y = V(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, _.value, v.value]), C = (T) => {
    let { column: A, x: E, y: B } = T;
    const M = A.key === "data-table-select" || A.key === "data-table-expand", D = A.key === "data-table-group" && A.width === 0 && !A.title, L = X(e.headerProps ?? {}, A.headerProps ?? {});
    return g(Ko, X({ tag: "th", align: A.align, class: [{ "v-data-table__th--sortable": A.sortable && !e.disableSort, "v-data-table__th--sorted": i(A), "v-data-table__th--fixed": A.fixed }, ...y.value], style: { width: ge(A.width), minWidth: ge(A.minWidth), maxWidth: ge(A.maxWidth), ...S(A, B) }, colspan: A.colspan, rowspan: A.rowspan, fixed: A.fixed, nowrap: A.nowrap, lastFixed: A.lastFixed, firstFixedEnd: A.firstFixedEnd, noPadding: M, empty: D, tabindex: A.sortable ? 0 : void 0, onClick: A.sortable ? (j) => l(A, j) : void 0, onKeydown: A.sortable ? (j) => m(j, A) : void 0 }, L), { default: () => {
      var _a3;
      const j = `header.${A.key}`, H = { column: A, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: b };
      return n[j] ? n[j](H) : D ? "" : A.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, H)) ?? (c.value && g(Tn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : w("div", { class: "v-data-table-header__content" }, [w("span", null, [A.title]), A.sortable && !e.disableSort && g(je, { key: "icon", class: "v-data-table-header__sort-icon", icon: b(A) }, null), e.multiSort && i(A) && w("div", { key: "badge", class: ne(["v-data-table-header__sort-badge", ...h.value]), style: ye(x.value) }, [o.value.findIndex((Q) => Q.key === A.key) + 1])]);
    } });
  }, p = () => {
    const T = V(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), A = d.value.find((E) => E.key === "data-table-select");
    return g(Ko, X({ tag: "th", class: [...y.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [w("div", { class: "v-data-table-header__content" }, [g(jc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: T.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: A ? () => g(Tn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return g(ca, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (B) => {
        B.preventDefault(), B.stopPropagation();
      } }, { default: () => [E.item.title, g(je, { class: ne(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: b(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  le(() => I.value ? w("tr", null, [g(p, null, null)]) : w(be, null, [n.headers ? n.headers(k.value) : f.value.map((T, A) => w("tr", null, [T.map((E, B) => g(C, { column: E, x: B, y: A }, null))])), e.loading && w("tr", { class: "v-data-table-progress" }, [w("th", { colspan: d.value.length }, [g(ri, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), nb = z({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ie, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ie, default: "$tableGroupExpand" }, ...vt() }, "VDataTableGroupHeaderRow"), GI = ee()({ name: "VDataTableGroupHeaderRow", props: nb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = Oy(), { isSelected: i, isSomeSelected: r, select: s } = Rr(), { columns: u } = zr(), c = V(() => o([e.item])), d = F(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => w("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, S = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: S } })) ?? g(Ko, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [g(Ne, { size: "small", variant: "text", icon: v, onClick: S }, null), w("span", null, [e.item.value]), w("span", null, [Xe("("), c.value.length, Xe(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((h) => h.selectable), S = v.length > 0 && i(v), m = r(v) && !S, b = (h) => s(v, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: S, indeterminate: m, "onUpdate:modelValue": b } })) ?? g(Ko, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [g(Tn, { density: e.density, disabled: v.length === 0, modelValue: S, indeterminate: m, "onUpdate:modelValue": b }, null)] });
    }
    return "";
  })]);
} }), ab = z({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ie, default: "$collapse" }, expandIcon: { type: Ie, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...vt(), ...ml() }, "VDataTableRow"), id = ee()({ name: "VDataTableRow", props: ab(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = hn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = Rr(), { isExpanded: c, toggleExpand: d } = $y(), { toggleSort: f, sortBy: v, isSorted: S } = Ky(), { columns: m } = zr();
  le(() => w("tr", { class: ne(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((b, h) => {
    const x = e.item, _ = `item.${b.key}`, I = `header.${b.key}`, k = { index: e.index, item: x.raw, internalItem: x, value: ll(x.columns, b.key), column: b, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, y = { column: b, selectAll: u, isSorted: S, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value, column: b }) : e.cellProps, p = typeof b.cellProps == "function" ? b.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value }) : b.cellProps, T = b.key === "data-table-select" || b.key === "data-table-expand", A = b.key === "data-table-group" && b.width === 0 && !b.title;
    return g(Ko, X({ align: b.align, indent: b.indent, class: { "v-data-table__td--expanded-row": b.key === "data-table-expand", "v-data-table__td--select-row": b.key === "data-table-select" }, fixed: b.fixed, fixedOffset: b.fixedOffset, fixedEndOffset: b.fixedEndOffset, lastFixed: b.lastFixed, firstFixedEnd: b.firstFixedEnd, maxWidth: l.value ? void 0 : b.maxWidth, noPadding: T, empty: A, nowrap: b.nowrap, width: l.value ? void 0 : b.width }, C, p), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (b.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...k, props: { color: e.color, disabled: !x.selectable, modelValue: o([x]), onClick: Si(() => i(x), ["stop"]) } })) ?? g(Tn, { color: e.color, disabled: !x.selectable, density: e.density, modelValue: o([x]), onClick: Si((B) => i(x, e.index, B), ["stop"]) }, null);
      if (b.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...k, props: { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(x), ["stop"]) } })) ?? g(Ne, { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(x), ["stop"]) }, null);
      if (n[_] && !l.value) return n[_](k);
      const E = We(k.value);
      return l.value ? w(be, null, [w("div", { class: "v-data-table__td-title" }, [((_c2 = n[I]) == null ? void 0 : _c2.call(n, y)) ?? b.title]), w("div", { class: "v-data-table__td-value" }, [((_d2 = n[_]) == null ? void 0 : _d2.call(n, k)) ?? E])]) : E;
    } });
  })]));
} }), lb = z({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...tn(ab(), ["collapseIcon", "expandIcon", "density"]), ...tn(nb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...ml() }, "VDataTableRows"), cl = ee()({ name: "VDataTableRows", inheritAttrs: false, props: lb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = zr(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = $y(), { isSelected: s, toggleSelect: u } = Rr(), { toggleGroup: c, isGroupOpen: d } = Oy(), { t: f } = Qe(), { mobile: v } = hn(e);
  return le(() => {
    var _a3, _b2;
    const S = tn(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? w("tr", { class: "v-data-table-rows-loading", key: "loading" }, [w("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? w("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [w("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : w(be, null, [e.items.map((m, b) => {
      var _a4, _b3;
      if (m.type === "group") {
        const _ = { index: b, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](_) : g(GI, X({ key: `group-header_${m.id}`, item: m }, fn(n, ":groupHeader", () => _), S), a);
      }
      if (m.type === "group-summary") {
        const _ = { index: b, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, _)) ?? "";
      }
      const h = { index: m.virtualIndex ?? b, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, x = { ...h, props: X({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: b, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, fn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return w(be, { key: x.props.key }, [a.item ? a.item(x) : g(id, x.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), ob = z({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...ke(), ...vt(), ...Fe(), ...ze() }, "VTable"), dl = ee()({ name: "VTable", props: ob(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = Ue(e), { densityClasses: o } = Lt(e);
  return le(() => g(e.tag, { class: ne(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: ye(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? w("div", { class: "v-table__wrapper", style: { height: ge(e.height) } }, [w("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), KI = z({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function qI(e, t, n, a) {
  const l = e.returnObject ? t : ht(t, e.itemValue), o = ht(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = ht(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? ht(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function XI(e, t, n) {
  return t.map((a, l) => qI(e, a, l, n));
}
function rd(e, t) {
  return { items: V(() => XI(e, e.items, t.value)) };
}
const sd = z({ ...lb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...By(), ...Zc(), ...HI(), ...KI(), ...jy(), ...Yy(), ...Oe(tb(), ["multiSort", "initialSortOrder"]), ...ob() }, "DataTable"), ZI = z({ ...Qc(), ...sd(), ...kl(), ...ad() }, "VDataTable"), JI = ee()({ name: "VDataTable", props: ZI(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Jc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { page: u, itemsPerPage: c } = ed(e), { disableSort: d } = Xl(e), { columns: f, headers: v, sortFunctions: S, sortRawFunctions: m, filterFunctions: b } = od(e, { groupBy: l, showSelect: F(() => e.showSelect), showExpand: F(() => e.showExpand) }), { items: h } = rd(e, f), x = F(() => e.search), { filteredItems: _ } = wl(e, h, x, { transform: (re) => re.columns, customKeyFilter: b }), { toggleSort: I } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: k, opened: y, extractRows: C, isGroupOpen: p, toggleGroup: T } = Fr({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: A } = nd(e, _, k, { transform: (re) => ({ ...re.raw, ...re.columns }), sortFunctions: S, sortRawFunctions: m }), E = V(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: B, setItemsPerPage: M, paginatedItems: D } = PI({ pageBy: E, sortedItems: A, paginate: (re) => {
    const pe = V(() => at(re).length), { startIndex: te, stopIndex: ve, pageCount: De, setItemsPerPage: we } = td({ page: u, itemsPerPage: c, itemsLength: pe }), { paginatedItems: he } = zy({ items: re, startIndex: te, stopIndex: ve, itemsPerPage: c });
    return { paginatedItems: he, pageCount: De, setItemsPerPage: we };
  }, group: (re) => $r(re, l, y, () => !!a["group-summary"]) }), L = V(() => C(D.value)), { isSelected: j, select: H, selectAll: Q, toggleSelect: J, someSelected: R, allSelected: Z } = Or(e, { allItems: h, currentPage: L }), { isExpanded: U, toggleExpand: O } = Br(e);
  Lr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: x }), ft({ VDataTableRows: { hideNoData: F(() => e.hideNoData), noDataText: F(() => e.noDataText), loading: F(() => e.loading), loadingText: F(() => e.loadingText) } });
  const Y = V(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: B.value, toggleSort: I, setItemsPerPage: M, someSelected: R.value, allSelected: Z.value, isSelected: j, select: H, selectAll: Q, toggleSelect: J, isExpanded: U, toggleExpand: O, isGroupOpen: p, toggleGroup: T, items: L.value.map((re) => re.raw), internalItems: L.value, groupedItems: D.value, columns: f.value, headers: v.value }));
  return le(() => {
    const re = Go.filterProps(e), pe = ul.filterProps(Oe(e, ["multiSort"])), te = cl.filterProps(e), ve = dl.filterProps(e);
    return g(dl, X({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, ve, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, Y.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(Y.value) : w(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, Y.value), !e.hideDefaultHeader && w("thead", { key: "thead" }, [g(ul, X(pe, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, Y.value), !e.hideDefaultBody && w("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, Y.value), a.body ? a.body(Y.value) : g(cl, X(n, te, { items: D.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, Y.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, Y.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, Y.value)]);
    }, bottom: () => a.bottom ? a.bottom(Y.value) : !e.hideDefaultFooter && w(be, null, [g(vn, null, null), g(Go, re, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), QI = z({ ...Oe(sd(), ["hideDefaultFooter"]), ...Zc(), ...Gh(), ...kl() }, "VDataTableVirtual"), eP = ee()({ name: "VDataTableVirtual", props: QI(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Jc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { disableSort: u } = Xl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: S } = od(e, { groupBy: l, showSelect: F(() => e.showSelect), showExpand: F(() => e.showExpand) }), { items: m } = rd(e, c), b = F(() => e.search), { filteredItems: h } = wl(e, m, b, { transform: (he) => he.columns, customKeyFilter: f }), { toggleSort: x } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: _, opened: I, extractRows: k, isGroupOpen: y, toggleGroup: C } = Fr({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: p } = nd(e, h, _, { transform: (he) => ({ ...he.raw, ...he.columns }), sortFunctions: v, sortRawFunctions: S }), { flatItems: T } = $r(p, l, I, () => !!a["group-summary"]), A = V(() => k(T.value)), { isSelected: E, select: B, selectAll: M, toggleSelect: D, someSelected: L, allSelected: j } = Or(e, { allItems: A, currentPage: A }), { isExpanded: H, toggleExpand: Q } = Br(e), { containerRef: J, markerRef: R, paddingTop: Z, paddingBottom: U, computedItems: O, handleItemResize: Y, handleScroll: re, handleScrollend: pe, calculateVisibleItems: te, scrollToIndex: ve } = Kh(e, T), De = V(() => O.value.map((he) => ({ ...he.raw, virtualIndex: he.index })));
  Lr({ sortBy: i, page: ue(1), itemsPerPage: ue(-1), groupBy: l, search: b }), ft({ VDataTableRows: { hideNoData: F(() => e.hideNoData), noDataText: F(() => e.noDataText), loading: F(() => e.loading), loadingText: F(() => e.loadingText) } });
  const we = V(() => ({ sortBy: i.value, toggleSort: x, someSelected: L.value, allSelected: j.value, isSelected: E, select: B, selectAll: M, toggleSelect: D, isExpanded: H, toggleExpand: Q, isGroupOpen: y, toggleGroup: C, items: A.value.map((he) => he.raw), internalItems: A.value, groupedItems: T.value, columns: c.value, headers: d.value }));
  return le(() => {
    const he = ul.filterProps(Oe(e, ["multiSort"])), P = cl.filterProps(e), $ = dl.filterProps(e);
    return g(dl, X({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, $, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, we.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return w("div", { ref: J, onScrollPassive: re, onScrollend: pe, class: "v-table__wrapper", style: { height: ge(e.height) } }, [w("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, we.value), !e.hideDefaultHeader && w("thead", { key: "thead" }, [g(ul, X(he, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, we.value), !e.hideDefaultBody && w("tbody", { key: "tbody" }, [w("tr", { ref: R, style: { height: ge(Z.value), border: 0 } }, [w("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, we.value), g(cl, X(n, P, { items: De.value }), { ...a, item: (q) => g(Yh, { key: q.internalItem.index, renderless: true, "onUpdate:height": (oe) => Y(q.internalItem.index, oe) }, { default: (oe) => {
        var _a4;
        let { itemRef: ae } = oe;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...q, itemRef: ae })) ?? g(id, X(q.props, { ref: ae, key: q.internalItem.index, index: q.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, we.value), w("tr", { style: { height: ge(U.value), border: 0 } }, [w("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = a.tbody) == null ? void 0 : _e.call(a, we.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, we.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, we.value);
    } });
  }), { calculateVisibleItems: te, scrollToIndex: ve };
} }), tP = z({ itemsLength: { type: [Number, String], required: true }, ...Qc(), ...sd(), ...ad() }, "VDataTableServer"), nP = ee()({ name: "VDataTableServer", props: tP(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Jc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { page: u, itemsPerPage: c } = ed(e), { disableSort: d } = Xl(e), f = V(() => parseInt(e.itemsLength, 10)), { columns: v, headers: S } = od(e, { groupBy: l, showSelect: F(() => e.showSelect), showExpand: F(() => e.showExpand) }), { items: m } = rd(e, v), { toggleSort: b } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: x, toggleGroup: _, extractRows: I } = Fr({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: k, setItemsPerPage: y } = td({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = $r(m, l, h, () => !!a["group-summary"]), { isSelected: p, select: T, selectAll: A, toggleSelect: E, someSelected: B, allSelected: M } = Or(e, { allItems: m, currentPage: m }), { isExpanded: D, toggleExpand: L } = Br(e), j = V(() => I(m.value));
  Lr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: F(() => e.search) }), rt("v-data-table", { toggleSort: b, sortBy: i }), ft({ VDataTableRows: { hideNoData: F(() => e.hideNoData), noDataText: F(() => e.noDataText), loading: F(() => e.loading), loadingText: F(() => e.loadingText) } });
  const H = V(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: k.value, toggleSort: b, setItemsPerPage: y, someSelected: B.value, allSelected: M.value, isSelected: p, select: T, selectAll: A, toggleSelect: E, isExpanded: D, toggleExpand: L, isGroupOpen: x, toggleGroup: _, items: j.value.map((Q) => Q.raw), internalItems: j.value, groupedItems: C.value, columns: v.value, headers: S.value }));
  le(() => {
    const Q = Go.filterProps(e), J = ul.filterProps(Oe(e, ["multiSort"])), R = cl.filterProps(e), Z = dl.filterProps(e);
    return g(dl, X({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, Z, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, H.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(H.value) : w(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, H.value), !e.hideDefaultHeader && w("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [g(ul, X(J, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, H.value), !e.hideDefaultBody && w("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, H.value), a.body ? a.body(H.value) : g(cl, X(n, R, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, H.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, H.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, H.value)]);
    }, bottom: () => a.bottom ? a.bottom(H.value) : !e.hideDefaultFooter && w(be, null, [g(vn, null, null), g(Go, Q, { prepend: a["footer.prepend"] })]) });
  });
} }), aP = z({ fluid: { type: Boolean, default: false }, ...ke(), ...St(), ...Fe() }, "VContainer"), lP = ee()({ name: "VContainer", props: aP(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = xt(), { dimensionStyles: l } = pt(e);
  return le(() => g(e.tag, { class: ne(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: ye([l.value, e.style]) }, n)), {};
} }), ib = br.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), rb = br.reduce((e, t) => {
  const n = "offset" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), sb = br.reduce((e, t) => {
  const n = "order" + Yn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), hv = { col: Object.keys(ib), offset: Object.keys(rb), order: Object.keys(sb) };
function oP(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const iP = ["auto", "start", "end", "center", "baseline", "stretch"], rP = z({ cols: { type: [Boolean, String, Number], default: false }, ...ib, offset: { type: [String, Number], default: null }, ...rb, order: { type: [String, Number], default: null }, ...sb, alignSelf: { type: String, default: null, validator: (e) => iP.includes(e) }, ...ke(), ...Fe() }, "VCol"), sP = ee()({ name: "VCol", props: rP(), setup(e, t) {
  let { slots: n } = t;
  const a = V(() => {
    const l = [];
    let o;
    for (o in hv) hv[o].forEach((r) => {
      const s = e[r], u = oP(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return va(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), ud = ["start", "end", "center"], ub = ["space-between", "space-around", "space-evenly"];
function cd(e, t) {
  return br.reduce((n, a) => {
    const l = e + Yn(a);
    return n[l] = t(), n;
  }, {});
}
const uP = [...ud, "baseline", "stretch"], cb = (e) => uP.includes(e), db = cd("align", () => ({ type: String, default: null, validator: cb })), cP = [...ud, ...ub], fb = (e) => cP.includes(e), vb = cd("justify", () => ({ type: String, default: null, validator: fb })), dP = [...ud, ...ub, "stretch"], mb = (e) => dP.includes(e), gb = cd("alignContent", () => ({ type: String, default: null, validator: mb })), yv = { align: Object.keys(db), justify: Object.keys(vb), alignContent: Object.keys(gb) }, fP = { align: "align", justify: "justify", alignContent: "align-content" };
function vP(e, t, n) {
  let a = fP[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const mP = z({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: cb }, ...db, justify: { type: String, default: null, validator: fb }, ...vb, alignContent: { type: String, default: null, validator: mb }, ...gb, ...ke(), ...Fe() }, "VRow"), gP = ee()({ name: "VRow", props: mP(), setup(e, t) {
  let { slots: n } = t;
  const a = V(() => {
    const l = [];
    let o;
    for (o in yv) yv[o].forEach((i) => {
      const r = e[i], s = vP(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return va(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), fu = ma("v-spacer", "div", "VSpacer"), hb = z({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, modeIcon: { type: Ie, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), vu = ee()({ name: "VDatePickerControls", props: hb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
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
  function S() {
    n("click:next-year");
  }
  function m() {
    n("click:year");
  }
  function b() {
    n("click:month");
  }
  return le(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, x = g(Ne, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), _ = g(Ne, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), I = g(Ne, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), k = g(Ne, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: S }, null), y = g(Ne, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: b }, null), C = g(Ne, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), p = g(Ne, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), T = w(be, null, [g(Ne, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: b }, null), g(Ne, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), A = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: b, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: S }, E = w(be, null, [e.noMonthPicker ? p : T, g(fu, null, null), w("div", { class: "v-date-picker-controls__month" }, [x, _])]), B = w(be, null, [w("div", { class: "v-date-picker-controls__month" }, [x, y, _]), g(fu, null, null), w("div", { class: "v-date-picker-controls__year" }, [I, C, k])]);
    return g($e, { defaults: h }, { default: () => {
      var _a3;
      return [w("div", { class: ne(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ge(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, A)) ?? w(be, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && B])])];
    } });
  }), {};
} }), hP = z({ appendIcon: Ie, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), mu = ee()({ name: "VDatePickerHeader", props: hP(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return le(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return w("div", { class: ne(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: ye(o.value), onClick: i }, [a.prepend && w("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && g(Kt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [w("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && w("div", { class: "v-date-picker-header__append" }, [a.append ? g($e, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : g(Ne, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), yP = z({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function bP(e) {
  const t = vl(), n = Ve(e, "modelValue", [], (m) => ot(m).map((b) => t.date(b))), a = V(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = Ve(e, "year", void 0, (m) => {
    const b = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), b));
  }, (m) => t.getYear(m)), o = Ve(e, "month", void 0, (m) => {
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
      const _ = t.toISO(h), I = !t.isSameMonth(h, o.value), k = t.isSameDay(h, t.startOfMonth(o.value)), y = t.isSameDay(h, t.endOfMonth(o.value)), C = t.isSameDay(h, o.value), p = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: I, isDisabled: S(h), isEnd: y, isHidden: I && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((T) => t.isSameDay(h, T)), isStart: k, isToday: t.isSameDay(h, b), isWeekEnd: x % p === p - 1, isWeekStart: x % p === 0, isoDate: _, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
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
  }), d = V(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = yb(e);
  function S(m) {
    if (e.disabled) return true;
    const b = t.date(m);
    return f.value && t.isBefore(t.endOfDay(b), f.value) || v.value && t.isAfter(b, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), b)) : typeof e.allowedDates == "function" ? !e.allowedDates(b) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function yb(e) {
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
const bb = z({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Oe(yP(), ["displayValue"]) }, "VDatePickerMonth"), gu = ee()({ name: "VDatePickerMonth", props: bb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = K(), { t: o } = Qe(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = bP(e), c = vl(), d = ue(), f = ue(), v = ue(false), S = F(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = V(() => {
    const y = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= y;
  });
  ce(i, (y, C) => {
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
      r.value = px(c, d.value, f.value);
    }
  }
  function h(y) {
    const C = c.format(y.date, "fullDateWithWeekday"), p = y.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${p}`, C);
  }
  function x(y) {
    const C = r.value.findIndex((p) => c.isSameDay(p, y));
    if (C === -1) r.value = [...r.value, y];
    else {
      const p = [...r.value];
      p.splice(C, 1), r.value = p;
    }
  }
  function _(y) {
    e.multiple === "range" ? b(y) : e.multiple ? x(y) : r.value = [y];
  }
  function I(y) {
    const { events: C, eventColor: p } = e;
    let T, A = [];
    if (Array.isArray(C) ? T = C.includes(y) : C instanceof Function ? T = C(y) || false : C ? T = C[y] || false : T = false, T) T !== true ? A = ot(T) : typeof p == "string" ? A = [p] : typeof p == "function" ? A = ot(p(y)) : Array.isArray(p) ? A = p : typeof p == "object" && p !== null && (A = ot(p[y]));
    else return [];
    return A.length ? A.filter(Boolean).map((E) => typeof E == "string" ? E : "surface-variant") : ["surface-variant"];
  }
  function k(y) {
    const C = I(y);
    return C.length ? w("div", { class: "v-date-picker-month__events" }, [C.map((p) => g(qh, { dot: true, color: p }, null))]) : null;
  }
  le(() => w("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && w("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && w("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Xe("\xA0")]), s.value.map((y) => w("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [y]))]), g(Kt, { name: S.value }, { default: () => {
    var _a3;
    return [w("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((y) => w("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [y])), i.value.map((y, C) => {
      var _a4;
      const p = { props: { class: "v-date-picker-month__day-btn", color: y.isSelected || y.isToday ? e.color : void 0, disabled: y.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: y.isSelected ? "flat" : y.isToday ? "outlined" : "text", "aria-label": h(y), "aria-current": y.isToday ? "date" : void 0, onClick: () => _(y.date) }, item: y, i: C };
      return m.value && !y.isSelected && (y.isDisabled = true), w("div", { class: ne(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": y.isAdjacent, "v-date-picker-month__day--hide-adjacent": y.isHidden, "v-date-picker-month__day--selected": y.isSelected, "v-date-picker-month__day--week-end": y.isWeekEnd, "v-date-picker-month__day--week-start": y.isWeekStart }]), "data-v-date": y.isDisabled ? void 0 : y.isoDate }, [(e.showAdjacentMonths || !y.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, p)) ?? g(Ne, p.props, { default: () => [y.localized, k(y.isoDate)] }))]);
    })])];
  } })]));
} }), Sb = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), hu = ee()({ name: "VDatePickerMonths", props: Sb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = vl(), o = Ve(e, "modelValue"), i = V(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Rn(12).map((u) => {
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
  return le(() => w("div", { class: "v-date-picker-months", style: { height: ge(e.height) } }, [w("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? g(Ne, X({ key: "month" }, c), null);
  })])])), {};
} }), pb = z({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), yu = ee()({ name: "VDatePickerYears", props: pb(), directives: { vIntersect: An }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = vl(), o = Ve(e, "modelValue"), i = ue(false), r = V(() => {
    const f = l.getYear(l.date());
    let v = f - 100, S = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (S = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), Rn(S - v + 1, v).map((b) => {
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
    const S = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - S.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return le(() => lt(w("div", { class: "v-date-picker-years", ref: s, style: { height: ge(e.height) } }, [w("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = u.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a3;
    const S = { ref: o.value === f.value ? u : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: S })) ?? g(Ne, X({ key: "month" }, S), null);
  })])]), [[An, { handler: c }, null, { once: true }]])), {};
} }), SP = z({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Oe(hb(), ["active", "monthText", "yearText"]), ...bb({ weeksInMonth: "static" }), ...Oe(Sb(), ["modelValue"]), ...Oe(pb(), ["modelValue"]), ...Er({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), pP = ee()({ name: "VDatePicker", props: SP(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = vl(), { t: o } = Qe(), { rtlClasses: i } = xt(), r = Ve(e, "modelValue", void 0, (Y) => ot(Y).map((re) => l.date(re)), (Y) => e.multiple ? Y : Y[0]), s = Ve(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = yb(e), f = V(() => {
    var _a3;
    const Y = l.date(), re = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(Y);
    return re && l.isValid(re) ? re : Y;
  }), v = F(() => e.headerColor ?? e.color), S = Ve(e, "month"), m = V({ get: () => Number(S.value ?? l.getMonth(l.startOfMonth(f.value))), set: (Y) => S.value = Y }), b = Ve(e, "year"), h = V({ get: () => Number(b.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (Y) => b.value = Y }), x = ue(false), _ = V(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const Y = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && Y.split(" ").length === 3 ? Y.replace(" ", `
`) : Y;
  }), I = F(() => {
    let Y = l.date();
    return Y = l.setDate(Y, 1), Y = l.setMonth(Y, m.value), Y = l.setYear(Y, h.value), Y;
  }), k = F(() => l.format(I.value, "monthAndYear")), y = F(() => l.format(I.value, "monthShort")), C = F(() => l.format(I.value, "year")), p = F(() => `date-picker-header${x.value ? "-reverse" : ""}-transition`), T = V(() => {
    if (e.disabled) return true;
    const Y = [];
    if (s.value !== "month") Y.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let re = l.date();
      if (re = l.startOfMonth(re), re = l.setMonth(re, m.value), re = l.setYear(re, h.value), u.value) {
        const pe = l.addDays(l.startOfMonth(re), -1), te = l.addDays(l.startOfYear(re), -1);
        l.isAfter(u.value, pe) && Y.push("prev-month"), l.isAfter(u.value, te) && Y.push("prev-year");
      }
      if (c.value) {
        const pe = l.addDays(l.endOfMonth(re), 1), te = l.addDays(l.endOfYear(re), 1);
        l.isAfter(pe, c.value) && Y.push("next-month"), l.isAfter(te, c.value) && Y.push("next-year");
      }
    }
    return Y;
  }), A = V(() => e.allowedYears || M), E = V(() => e.allowedMonths || D);
  function B(Y, re) {
    const pe = e.allowedDates;
    if (typeof pe != "function") return true;
    const te = 1 + Eg(l, Y, re);
    for (let ve = 0; ve < te; ve++) if (pe(l.addDays(Y, ve))) return true;
    return false;
  }
  function M(Y) {
    if (typeof e.allowedDates == "function") {
      const re = l.parseISO(`${Y}-01-01`);
      return B(re, l.endOfYear(re));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const re of e.allowedDates) if (l.getYear(l.date(re)) === Y) return true;
      return false;
    }
    return true;
  }
  function D(Y) {
    if (typeof e.allowedDates == "function") {
      const re = String(Y + 1).padStart(2, "0"), pe = l.parseISO(`${h.value}-${re}-01`);
      return B(pe, l.endOfMonth(pe));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const re of e.allowedDates) if (l.getYear(l.date(re)) === h.value && l.getMonth(l.date(re)) === Y) return true;
      return false;
    }
    return true;
  }
  function L() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, O()), U();
  }
  function j() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, O()), U();
  }
  function H() {
    if (h.value++, c.value) {
      const Y = String(m.value + 1).padStart(2, "0"), re = l.parseISO(`${h.value}-${Y}-01`);
      l.isAfter(re, c.value) && (m.value = l.getMonth(c.value));
    }
    O();
  }
  function Q() {
    if (h.value--, u.value) {
      const Y = String(m.value + 1).padStart(2, "0"), re = l.endOfMonth(l.parseISO(`${h.value}-${Y}-01`));
      l.isAfter(u.value, re) && (m.value = l.getMonth(u.value));
    }
    O();
  }
  function J() {
    s.value = "month";
  }
  function R() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function Z() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function U() {
    s.value === "months" && R();
  }
  function O() {
    s.value === "year" && Z();
  }
  return ce(r, (Y, re) => {
    const pe = ot(re), te = ot(Y);
    if (!te.length) return;
    const ve = l.date(pe[pe.length - 1]), De = l.date(te[te.length - 1]);
    if (l.isSameDay(ve, De)) return;
    const we = l.getMonth(De), he = l.getYear(De);
    we !== m.value && (m.value = we, U()), he !== h.value && (h.value = he, O()), x.value = l.isBefore(ve, De);
  }), le(() => {
    const Y = ql.filterProps(e), re = Oe(vu.filterProps(e), ["viewMode"]), pe = mu.filterProps(e), te = gu.filterProps(e), ve = Oe(hu.filterProps(e), ["modelValue"]), De = Oe(yu.filterProps(e), ["modelValue"]), we = { color: v.value, header: _.value, transition: p.value };
    return g(ql, X(Y, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ge(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? w("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? g($e, { defaults: { VDatePickerHeader: { ...we } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, we)];
    } }) : g(mu, X({ key: "header" }, pe, we, { onClick: s.value !== "month" ? J : void 0 }), { prepend: a.prepend, append: a.append }), default: () => w(be, null, [g(vu, X(re, { disabled: T.value, viewMode: s.value, text: k.value, monthText: y.value, yearText: C.value, "onClick:next": L, "onClick:prev": j, "onClick:nextYear": H, "onClick:prevYear": Q, "onClick:month": R, "onClick:year": Z }), { default: a.controls }), g(No, { hideOnLeave: true }, { default: () => [s.value === "months" ? g(hu, X({ key: "date-picker-months" }, ve, { modelValue: m.value, "onUpdate:modelValue": [(he) => m.value = he, U], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? g(yu, X({ key: "date-picker-years" }, De, { modelValue: h.value, "onUpdate:modelValue": [(he) => h.value = he, O], min: u.value, max: c.value, allowedYears: A.value }), { year: a.year }) : g(gu, X({ key: "date-picker-month" }, te, { modelValue: r.value, "onUpdate:modelValue": (he) => r.value = he, month: m.value, "onUpdate:month": [(he) => m.value = he, U], year: h.value, "onUpdate:year": [(he) => h.value = he, O], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), kP = z({ actionText: String, bgColor: String, color: String, icon: Ie, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...ke(), ...St(), ...Xn({ size: void 0 }), ...ze() }, "VEmptyState"), wP = ee()({ name: "VEmptyState", props: kP(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = Ue(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Ke(() => e.bgColor), { dimensionStyles: r } = pt(e), { displayClasses: s } = hn();
  function u(c) {
    n("click:action", c);
  }
  return le(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), S = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return w("div", { class: ne(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: ye([i.value, r.value, e.style]) }, [S && w("div", { key: "media", class: "v-empty-state__media" }, [a.media ? g($e, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : w(be, null, [e.image ? g(ua, { key: "image", src: e.image, height: m }, null) : e.icon ? g(je, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && w("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && w("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && w("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ge(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && w("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && w("div", { key: "actions", class: "v-empty-state__actions" }, [g($e, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? g(Ne, { onClick: u }, null)];
    } })])]);
  }), {};
} }), qo = Symbol.for("vuetify:v-expansion-panel"), kb = z({ ...ke(), ...Fc() }, "VExpansionPanelText"), bu = ee()({ name: "VExpansionPanelText", props: kb(), setup(e, t) {
  let { slots: n } = t;
  const a = He(qo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = $c(e, a.isSelected);
  return le(() => g(kr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [lt(w("div", { class: ne(["v-expansion-panel-text", e.class]), style: ye(e.style) }, [n.default && l.value && w("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Dn, a.isSelected.value]])];
  } })), {};
} }), wb = z({ color: String, expandIcon: { type: Ie, default: "$expand" }, collapseIcon: { type: Ie, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...ke(), ...St() }, "VExpansionPanelTitle"), Su = ee()({ name: "VExpansionPanelTitle", directives: { vRipple: $t }, props: wb(), setup(e, t) {
  let { slots: n } = t;
  const a = He(qo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.color), { dimensionStyles: i } = pt(e), r = V(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = F(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return le(() => {
    var _a3;
    return lt(w("button", { class: ne(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: ye([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [w("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && g($e, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [w("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? g(je, null, null)])];
    } })]), [[$t, e.ripple]]);
  }), {};
} }), xb = z({ title: String, text: String, bgColor: String, ...kt(), ...Sl(), ...it(), ...Fe(), ...wb(), ...kb() }, "VExpansionPanel"), xP = ee()({ name: "VExpansionPanel", props: xb(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, qo), { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.bgColor), { elevationClasses: i } = _t(e), { roundedClasses: r } = ct(e), s = F(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = V(() => a.group.items.value.reduce((f, v, S) => (a.group.selected.value.includes(v.id) && f.push(S), f), [])), c = V(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = V(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return rt(qo, a), le(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), S = Su.filterProps(e), m = bu.filterProps(e);
    return g(e.tag, { class: ne(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: ye([o.value, e.style]) }, { default: () => [w("div", { class: ne(["v-expansion-panel__shadow", ...i.value]) }, null), g($e, { defaults: { VExpansionPanelTitle: { ...S }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && g(Su, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && g(bu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), CP = ["default", "accordion", "inset", "popout"], VP = z({ flat: Boolean, ...bl(), ...tn(xb(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...ze(), ...ke(), ...Fe(), variant: { type: String, default: "default", validator: (e) => CP.includes(e) } }, "VExpansionPanels"), _P = ee()({ name: "VExpansionPanels", props: VP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Ra(e, qo), { themeClasses: o } = Ue(e), i = F(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return ft({ VExpansionPanel: { bgColor: F(() => e.bgColor), collapseIcon: F(() => e.collapseIcon), color: F(() => e.color), eager: F(() => e.eager), elevation: F(() => e.elevation), expandIcon: F(() => e.expandIcon), focusable: F(() => e.focusable), hideActions: F(() => e.hideActions), readonly: F(() => e.readonly), ripple: F(() => e.ripple), rounded: F(() => e.rounded), static: F(() => e.static) } }), le(() => g(e.tag, { class: ne(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: ye(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), IP = z({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Oe(Cr({ active: true }), ["location", "spaced"]), ...gl(), ...qn(), ...ga({ transition: "fab-transition" }) }, "VFab"), PP = ee()({ name: "VFab", props: IP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), l = ue(56), o = K(), { resizeRef: i } = kn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = F(() => e.app || e.absolute), s = V(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = V(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  Ft(() => e.app, () => {
    const d = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: s, layoutSize: V(() => e.layout ? l.value + 24 : 0), elementSize: V(() => l.value + 24), active: V(() => e.app && a.value), absolute: F(() => e.absolute) });
    ut(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = K();
  return le(() => {
    const d = Ne.filterProps(e);
    return w("div", { ref: c, class: ne(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: ye([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [w("div", { class: "v-fab__container" }, [g(Kt, { appear: e.appear, transition: e.transition }, { default: () => [lt(g(Ne, X({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Dn, e.active]])] })])]);
  }), {};
} });
function AP() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await Cb(o, Vb(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function Cb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await Cb(r, Vb(t, r)));
      n(i);
    });
  });
}
function Vb(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const TP = z({ filterByType: String }, "file-accept");
function DP(e) {
  const t = V(() => e.filterByType ? MP(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function MP(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const EP = z({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Oe(Sa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ot(e).every((t) => t != null && typeof t == "object") }, ...TP(), ...vi({ clearable: true }) }, "VFileInput"), BP = ee()({ name: "VFileInput", inheritAttrs: false, props: EP(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Qe(), { filterAccepted: i } = DP(e), r = Ve(e, "modelValue", e.modelValue, (J) => ot(J), (J) => !e.multiple && Array.isArray(J) ? J[0] : J), { isFocused: s, focus: u, blur: c } = ba(e), d = V(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = V(() => (r.value ?? []).reduce((J, R) => {
    let { size: Z = 0 } = R;
    return J + Z;
  }, 0)), v = V(() => hf(f.value, d.value)), S = V(() => (r.value ?? []).map((J) => {
    const { name: R = "", size: Z = 0 } = J, U = M(R);
    return e.showSize ? `${U} (${hf(Z, d.value)})` : U;
  })), m = V(() => {
    var _a3;
    const J = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, J, v.value) : o(e.counterString, J);
  }), b = K(), h = K(), x = K(), _ = F(() => s.value || e.active), I = V(() => ["plain", "underlined"].includes(e.variant)), k = ue(false), { handleDrop: y, hasFilesOrFolders: C } = AP();
  function p() {
    var _a3;
    x.value !== document.activeElement && ((_a3 = x.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function T(J) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click();
  }
  function A(J) {
    a("mousedown:control", J);
  }
  function E(J) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click(), a("click:control", J);
  }
  function B(J) {
    J.stopPropagation(), p(), Be(() => {
      r.value = [], ni(e["onClick:clear"], J);
    });
  }
  function M(J) {
    if (J.length < Number(e.truncateLength)) return J;
    const R = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${J.slice(0, R)}\u2026${J.slice(J.length - R)}`;
  }
  function D(J) {
    J.preventDefault(), J.stopImmediatePropagation(), k.value = true;
  }
  function L(J) {
    J.preventDefault(), k.value = false;
  }
  async function j(J) {
    if (J.preventDefault(), J.stopImmediatePropagation(), k.value = false, !x.value || !C(J)) return;
    const R = await y(J);
    Q(R);
  }
  function H(J) {
    if (!(!J.target || J.repack)) if (e.filterByType) Q([...J.target.files]);
    else {
      const R = J.target;
      r.value = [...R.files ?? []];
    }
  }
  function Q(J) {
    const R = new DataTransfer(), { accepted: Z, rejected: U } = i(J);
    U.length && a("rejected", U);
    for (const Y of Z) R.items.add(Y);
    x.value.files = R.files, r.value = [...R.files];
    const O = new Event("change", { bubbles: true });
    O.repack = true, x.value.dispatchEvent(O);
  }
  return ce(r, (J) => {
    (!Array.isArray(J) || !J.length) && x.value && (x.value.value = "");
  }), le(() => {
    const J = !!(l.counter || e.counter), R = !!(J || l.details), [Z, U] = Gn(n), { modelValue: O, ...Y } = Rt.filterProps(e), re = { ...$a.filterProps(e), "onClick:clear": B }, pe = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, te = n.accept ? String(n.accept) : void 0, ve = pe ? void 0 : e.filterByType ?? te;
    return g(Rt, X({ ref: b, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": k.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": I.value }, e.class], style: e.style, "onClick:prepend": T }, Z, Y, { centerAffix: !I.value, focused: s.value }), { ...l, default: (De) => {
      let { id: we, isDisabled: he, isDirty: P, isReadonly: $, isValid: q, hasDetails: oe } = De;
      return g($a, X({ ref: h, prependIcon: e.prependIcon, onMousedown: A, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, re, { id: we.value, active: _.value || P.value, dirty: P.value || e.dirty, disabled: he.value, focused: s.value, details: oe.value, error: q.value === false, onDragover: D, onDrop: j }), { ...l, default: (ae) => {
        var _a3;
        let { props: { class: se, ...me }, controlRef: de } = ae;
        return w(be, null, [w("input", X({ ref: (G) => x.value = de.value = G, type: "file", accept: ve, readonly: $.value, disabled: he.value, multiple: e.multiple, name: e.name, onClick: (G) => {
          G.stopPropagation(), $.value && G.preventDefault(), p();
        }, onChange: H, onDragleave: L, onFocus: p, onBlur: c }, me, U), null), w("div", { class: ne(se) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: S.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? S.value.map((G) => g(ca, { key: G, size: "small", text: G }, null)) : S.value.join(", "))])]);
      } });
    }, details: R ? (De) => {
      var _a3, _b2;
      return w(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, De), J && w(be, null, [w("span", null, null), g(_r, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), It({}, b, h, x);
} }), FP = z({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Ht(), ...ke(), ...kt(), ...gl(), ...it(), ...Fe({ tag: "footer" }), ...ze() }, "VFooter"), $P = ee()({ name: "VFooter", props: FP(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), { themeClasses: l } = Ue(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Ke(() => e.color), { borderClasses: r } = Xt(e), { elevationClasses: s } = _t(e), { roundedClasses: u } = ct(e), c = ue(32), { resizeRef: d } = kn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = V(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return Ft(() => e.app, () => {
    const v = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: F(() => "bottom"), layoutSize: f, elementSize: V(() => e.height === "auto" ? void 0 : f.value), active: F(() => e.app), absolute: F(() => e.absolute) });
    ut(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), le(() => g(e.tag, { ref: d, class: ne(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: ye([i.value, e.app ? a.value : { height: ge(e.height) }, e.style]) }, n)), {};
} }), LP = z({ ...ke(), ...WC() }, "VForm"), OP = ee()({ name: "VForm", props: LP(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = jC(e), o = K();
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
    return w("form", { ref: o, class: ne(["v-form", e.class]), style: ye(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), It(l, o);
} }), RP = z({ color: String, ...Ht(), ...ke(), ...it(), ...Fe({ tag: "kbd" }), ...ze(), ...kt() }, "VKbd"), pu = ee()({ name: "VKbd", props: RP(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { borderClasses: l } = Xt(e), { roundedClasses: o } = ct(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Ke(() => e.color), { elevationClasses: s } = _t(e);
  return le(() => g(e.tag, { class: ne(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: ye([r.value, e.style]) }, n)), {};
} });
function _b(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const Ib = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, NP = z({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => Ib }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...ke(), ...ze(), ...Ht(), ...it(), ...kt(), color: String }, "VHotkey"), hs = Symbol("VHotkey:AND_DELINEATOR"), ys = Symbol("VHotkey:SLASH_DELINEATOR"), bv = Symbol("VHotkey:THEN_DELINEATOR");
function HP(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = _b(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Sv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = _b(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const zP = ee()({ name: "VHotkey", props: NP(), setup(e) {
  const { t } = Qe(), { themeClasses: n } = Ue(e), { rtlClasses: a } = xt(), { borderClasses: l } = Xt(e), { roundedClasses: o } = ct(e), { elevationClasses: i } = _t(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ya(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = V(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = V(() => e.keys ? e.keys.split(" ").map((h) => {
    const x = [], _ = Lx(h);
    for (let I = 0; I < _.length; I++) {
      const k = _[I];
      I > 0 && x.push(bv);
      const { keys: y, separators: C } = Hg(k);
      for (let p = 0; p < y.length; p++) {
        const T = y[p];
        p > 0 && x.push(C[p - 1] === "/" ? ys : hs), x.push(Sv(e.keyMap, e.displayMode, T, c.value));
      }
    }
    return x;
  }) : []), f = V(() => {
    if (!e.keys) return "";
    const x = d.value.map((_) => {
      const I = [];
      for (const k of _) if (Array.isArray(k)) {
        const y = k[0] === "icon" || k[0] === "symbol" ? Sv(Ot(Ib, e.keyMap), "text", String(k[1]), c.value)[1] : k[1];
        I.push(v(y));
      } else k === hs ? I.push(t("$vuetify.hotkey.plus")) : k === ys ? I.push(t("$vuetify.hotkey.or")) : k === bv && I.push(t("$vuetify.hotkey.then"));
      return I.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", x);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function S(h) {
    if (e.displayMode === "text") return;
    const x = HP(e.keyMap, String(h[2]), c.value);
    return v(x);
  }
  function m(h, x) {
    const _ = e.variant === "contained", I = _ ? "kbd" : pu, k = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ..._ ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return g(I, { key: x, class: ne(k), style: ye(_ ? void 0 : s.value), "aria-hidden": "true", title: S(h) }, { default: () => [h[0] === "icon" ? g(je, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function b(h, x) {
    return w("span", { key: x, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === hs ? "+" : h === ys ? "/" : t("$vuetify.hotkey.then")]);
  }
  le(() => {
    const h = w(be, null, [e.prefix && w("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((x, _) => w("span", { class: "v-hotkey__combination", key: _ }, [x.map((I, k) => Array.isArray(I) ? m(I, k) : b(I, k)), _ < d.value.length - 1 && w("span", { "aria-hidden": "true" }, [Xe("\xA0")])])), e.suffix && w("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return w("div", { class: ne(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: ye(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : g(pu, { key: "contained", class: ne(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: ye(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), WP = z({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Ec() }, "VHover"), jP = ee()({ name: "VHover", props: WP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Bc(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), UP = z({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...St(), ...Fe() }, "VInfiniteScroll"), pv = qt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = oi();
  return ce(l, async (o) => {
    n("intersect", e.side, o);
  }), le(() => w("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Xe("\xA0")])), {};
} }), YP = ee()({ name: "VInfiniteScroll", props: UP(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = K(), o = ue("ok"), i = ue("ok"), r = V(() => ge(e.margin)), s = ue(false);
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
  wt(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function v(y, C) {
    y === "start" ? o.value = C : y === "end" ? i.value = C : y === "both" && (o.value = C, i.value = C);
  }
  function S(y) {
    return y === "start" ? o.value : i.value;
  }
  let m = 0;
  function b(y, C) {
    s.value = C, s.value && h(y);
  }
  function h(y) {
    if (e.mode !== "manual" && !s.value) return;
    const C = S(y);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(y, "loading");
    function p(T) {
      v(y, T), Be(() => {
        T === "empty" || T === "error" || (T === "ok" && y === "start" && u(d() - m + c()), e.mode !== "manual" && Be(() => {
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
    a("load", { side: y, done: p });
  }
  const { t: x } = Qe();
  function _(y, C) {
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== y && e.side !== "both") return;
    const p = () => h(y), T = { side: y, props: { onClick: p, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, T) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, T)) ?? w("div", null, [x(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, T)) ?? g(Ea, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, T)) ?? g(Ne, { variant: "outlined", color: e.color, onClick: p }, { default: () => [x(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, T)) ?? g(Ea, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: I } = pt(e);
  le(() => {
    const y = e.tag, C = e.side === "start" || e.side === "both", p = e.side === "end" || e.side === "both", T = e.mode === "intersect";
    return g(y, { ref: l, class: ne(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": p }]), style: ye(I.value) }, { default: () => {
      var _a3;
      return [w("div", { class: "v-infinite-scroll__side" }, [_("start", o.value)]), C && T && g(pv, { key: "start", side: "start", onIntersect: b, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), p && T && g(pv, { key: "end", side: "end", onIntersect: b, rootMargin: r.value }, null), w("div", { class: "v-infinite-scroll__side" }, [_("end", i.value)])];
    } });
  });
  function k(y) {
    const C = y ?? e.side;
    v(C, "ok"), Be(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && Be(() => {
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
} }), Pb = Symbol.for("vuetify:v-item-group"), GP = z({ ...ke(), ...bl({ selectedClass: "v-item--selected" }), ...Fe(), ...ze() }, "VItemGroup"), KP = ee()({ name: "VItemGroup", props: GP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ra(e, Pb);
  return () => g(e.tag, { class: ne(["v-item-group", a.value, e.class]), style: ye(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), qP = ee()({ name: "VItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, Pb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), XP = z({ ...ke(), ...St(), ...Og() }, "VLayout"), ZP = ee()({ name: "VLayout", props: XP(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = Ng(e), { dimensionStyles: s } = pt(e);
  return le(() => {
    var _a3;
    return w("div", { ref: r, class: ne([a.value, e.class]), style: ye([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), JP = z({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...ke(), ...gl() }, "VLayoutItem"), QP = ee()({ name: "VLayoutItem", props: JP(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: F(() => e.position), elementSize: F(() => e.size), layoutSize: F(() => e.size), active: F(() => e.modelValue), absolute: F(() => e.absolute) });
  return () => {
    var _a3;
    return w("div", { class: ne(["v-layout-item", e.class]), style: ye([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), eA = z({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...ke(), ...St(), ...Fe(), ...ga({ transition: "fade-transition" }) }, "VLazy"), tA = ee()({ name: "VLazy", directives: { vIntersect: An }, props: eA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = pt(e), l = Ve(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return le(() => lt(g(e.tag, { class: ne(["v-lazy", e.class]), style: ye([a.value, e.style]) }, { default: () => [l.value && g(Kt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[An, { handler: o, options: e.options }, null]])), {};
} }), nA = z({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...ke() }, "VLocaleProvider"), aA = ee()({ name: "VLocaleProvider", props: nA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Pg(e);
  return le(() => {
    var _a3;
    return w("div", { class: ne(["v-locale-provider", a.value, e.class]), style: ye(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), lA = z({ scrollable: Boolean, ...ke(), ...St(), ...Fe({ tag: "main" }) }, "VMain"), oA = ee()({ name: "VMain", props: lA(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = pt(e), { mainStyles: l } = Rg(), { ssrBootStyles: o } = yl();
  return le(() => g(e.tag, { class: ne(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: ye([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? w("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function iA(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = ue(false), o = ue(0), i = V(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: ge(o.value) } : { top: a.value.top }];
  });
  wt(() => {
    ce(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Nt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, S = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - S, l.value = true) : u === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (S ? l.value !== "top" && (o.value = -f + S + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const rA = 100, sA = 20;
function kv(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function wv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = kv(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return kv(t) * 1e3;
}
function uA() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new cg(sA))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > rA) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: wv(r), y: wv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : cA();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function cA() {
  throw new Error();
}
function dA(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  wt(() => {
    window.addEventListener("touchstart", x, { passive: true }), window.addEventListener("touchmove", _, { passive: false }), window.addEventListener("touchend", I, { passive: true });
  }), Nt(() => {
    window.removeEventListener("touchstart", x), window.removeEventListener("touchmove", _), window.removeEventListener("touchend", I);
  });
  const r = V(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = uA();
  let d = false;
  const f = ue(false), v = ue(0), S = ue(0);
  let m;
  function b(y, C) {
    return (i.value === "left" ? y : i.value === "right" ? document.documentElement.clientWidth - y : i.value === "top" ? y : i.value === "bottom" ? document.documentElement.clientHeight - y : Il()) - (C ? l.value : 0);
  }
  function h(y) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const p = i.value === "left" ? (y - S.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - y - S.value) / l.value : i.value === "top" ? (y - S.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - y - S.value) / l.value : Il();
    return C ? Ze(p) : p;
  }
  function x(y) {
    if (o.value) return;
    const C = y.changedTouches[0].clientX, p = y.changedTouches[0].clientY, T = 25, A = i.value === "left" ? C < T : i.value === "right" ? C > document.documentElement.clientWidth - T : i.value === "top" ? p < T : i.value === "bottom" ? p > document.documentElement.clientHeight - T : Il(), E = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? p < l.value : i.value === "bottom" ? p > document.documentElement.clientHeight - l.value : Il());
    (A || E || n.value && a.value) && (m = [C, p], S.value = b(r.value ? C : p, n.value), v.value = h(r.value ? C : p), d = S.value > -20 && S.value < 80, u(y), s(y));
  }
  function _(y) {
    const C = y.changedTouches[0].clientX, p = y.changedTouches[0].clientY;
    if (d) {
      if (!y.cancelable) {
        d = false;
        return;
      }
      const A = Math.abs(C - m[0]), E = Math.abs(p - m[1]);
      (r.value ? A > E && A > 3 : E > A && E > 3) ? (f.value = true, d = false) : (r.value ? E : A) > 3 && (d = false);
    }
    if (!f.value) return;
    y.preventDefault(), s(y);
    const T = h(r.value ? C : p, false);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? S.value = b(r.value ? C : p, true) : T < 0 && (S.value = b(r.value ? C : p, false));
  }
  function I(y) {
    if (d = false, !f.value) return;
    s(y), f.value = false;
    const C = c(y.changedTouches[0].identifier), p = Math.abs(C.x), T = Math.abs(C.y);
    (r.value ? p > T && p > 400 : T > p && T > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Il()) : n.value = v.value > 0.5;
  }
  const k = V(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Il(), transition: "none" } : void 0);
  return Ft(f, () => {
    var _a3, _b2;
    const y = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    ut(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = k.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = k.value) == null ? void 0 : _c2.transition) || null);
    }), gt(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", y), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: k };
}
function Il() {
  throw new Error();
}
const fA = ["start", "end", "left", "right", "top", "bottom"], vA = z({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => fA.includes(e) }, sticky: Boolean, ...Ht(), ...ke(), ...Ec(), ...ml({ mobile: null }), ...kt(), ...gl(), ...it(), ...Oe(Oh(), ["disableInitialFocus"]), ...Fe({ tag: "nav" }), ...ze() }, "VNavigationDrawer"), mA = ee()({ name: "VNavigationDrawer", props: vA(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = xt(), { themeClasses: i } = Ue(e), { borderClasses: r } = Xt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Ke(() => e.color), { elevationClasses: c } = _t(e), { displayClasses: d, mobile: f } = hn(e), { roundedClasses: v } = ct(e), S = Xg(), m = Ve(e, "modelValue", null, (R) => !!R), { ssrBootStyles: b } = yl(), { scopeId: h } = pl(), x = K(), _ = ue(false), { runOpenDelay: I, runCloseDelay: k } = Bc(e, (R) => {
    _.value = R;
  }), y = V(() => e.rail && e.expandOnHover && _.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = V(() => Ls(e.location, o.value)), p = F(() => e.persistent), T = V(() => !e.permanent && (f.value || e.temporary)), A = V(() => e.sticky && !T.value && C.value !== "bottom");
  Rh(e, { isActive: m, localTop: T, contentEl: x }), Ft(() => e.expandOnHover && e.rail != null, () => {
    ce(_, (R) => a("update:rail", !R));
  }), Ft(() => !e.disableResizeWatcher, () => {
    ce(T, (R) => !e.permanent && Be(() => m.value = !R));
  }), Ft(() => !e.disableRouteWatcher && !!S, () => {
    ce(S.currentRoute, () => T.value && (m.value = false));
  }), ce(() => e.permanent, (R) => {
    R && (m.value = true);
  }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: B } = dA({ el: x, isActive: m, isTemporary: T, width: y, touchless: F(() => e.touchless), position: C }), M = V(() => {
    const R = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : y.value;
    return E.value ? R * B.value : R;
  }), { layoutItemStyles: D, layoutItemScrimStyles: L } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: y, active: tl(m), disableTransitions: F(() => E.value), absolute: V(() => e.absolute || A.value && typeof j.value != "string") }), { isStuck: j, stickyStyles: H } = iA({ rootEl: x, isSticky: A, layoutItemStyles: D }), Q = Ke(() => typeof e.scrim == "string" ? e.scrim : null), J = V(() => ({ ...E.value ? { opacity: B.value * 0.2, transition: "none" } : void 0, ...L.value }));
  return ft({ VList: { bgColor: "transparent" } }), le(() => {
    const R = l.image || e.image;
    return w(be, null, [g(e.tag, X({ ref: x, onMouseenter: I, onMouseleave: k, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": _.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--persistent": p.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": A.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, D.value, b.value, H.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [R && w("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? g($e, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : g(ua, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && w("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), w("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && w("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), g(Ta, { name: "fade-transition" }, { default: () => [T.value && (E.value || m.value) && !!e.scrim && w("div", X({ class: ["v-navigation-drawer__scrim", Q.backgroundColorClasses.value], style: [J.value, Q.backgroundColorStyles.value], onClick: () => {
      p.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: j };
} }), gA = qt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = Nh();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), hA = 50, yA = 500;
function bA(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  gt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), hA);
    }, yA);
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
const SA = z({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Oe(mi(), ["modelValue", "validationValue"]) }, "VNumberInput"), pA = ee()({ name: "VNumberInput", props: { ...SA() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), { holdStart: l, holdStop: o } = bA({ toggleUpDown: E }), i = no(e), r = V(() => i.isDisabled.value || i.isReadonly.value), s = ue(e.focused), { decimalSeparator: u } = Qe(), c = V(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(O) {
    let Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const pe = Y == null ? String(O) : O.toFixed(Y);
    if (s.value && re) return Number(pe).toString().replace(".", c.value);
    if (e.minFractionDigits === null || Y !== null && Y < e.minFractionDigits) return pe.replace(".", c.value);
    let [te, ve] = pe.split(".");
    return ve = (ve ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [te, ve].filter(Boolean).join(c.value);
  }
  const f = Ve(e, "modelValue", null, (O) => O ?? null, (O) => O == null ? O ?? null : Ze(Number(O), e.min, e.max)), v = ue(null), S = ue(null);
  ce(f, (O) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === O || (O == null ? (v.value = null, S.value = null) : isNaN(O) || (v.value = d(O), S.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = V({ get: () => v.value, set(O) {
    if (O === null || O === "") {
      f.value = null, v.value = null, S.value = null;
      return;
    }
    const Y = Number(O.replace(c.value, "."));
    isNaN(Y) || (v.value = O, S.value = Y, Y <= e.max && Y >= e.min && (f.value = Y));
  } }), b = V(() => {
    var _a3;
    if (S.value === null) return false;
    const O = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return O !== Ze(O, e.min, e.max);
  }), h = V(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), x = V(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), _ = V(() => e.hideInput ? "stacked" : e.controlVariant), I = F(() => _.value === "split" ? "$plus" : "$collapse"), k = F(() => _.value === "split" ? "$minus" : "$expand"), y = F(() => _.value === "split" ? "default" : "small"), C = F(() => _.value === "stacked" ? "auto" : "100%"), p = { props: { onClick: D, onPointerup: L, onPointerdown: j, onPointercancel: L } }, T = { props: { onClick: D, onPointerup: L, onPointerdown: H, onPointercancel: L } };
  ce(() => e.precision, () => J()), ce(() => e.minFractionDigits, () => J()), wt(() => {
    Q();
  });
  function A(O) {
    if (O == null) return 0;
    const Y = O.toString(), re = Y.indexOf(".");
    return ~re ? Y.length - re : 0;
  }
  function E() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(Ze(0, e.min, e.max));
      return;
    }
    let Y = Math.max(A(f.value), A(e.step));
    e.precision != null && (Y = Math.max(Y, e.precision)), O ? h.value && (m.value = d(f.value + e.step, Y)) : x.value && (m.value = d(f.value - e.step, Y));
  }
  function B(O) {
    var _a3;
    if (!O.data) return;
    const Y = O.target, { value: re, selectionStart: pe, selectionEnd: te } = Y ?? {}, ve = re ? re.slice(0, pe) + O.data + re.slice(te) : O.data, De = Rk(ve, e.precision, c.value);
    if (new RegExp(`^-?\\d*${Ui(c.value)}?\\d*$`).test(ve) || (O.preventDefault(), Y.value = De, Be(() => m.value = De)), e.precision != null) {
      if (((_a3 = ve.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        O.preventDefault(), Y.value = De, Be(() => m.value = De);
        const we = (pe ?? 0) + O.data.length;
        Y.setSelectionRange(we, we);
      }
      e.precision === 0 && ve.endsWith(c.value) && (O.preventDefault(), Y.value = De, Be(() => m.value = De));
    }
  }
  async function M(O) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(O.key) || O.ctrlKey || ["ArrowDown", "ArrowUp"].includes(O.key) && (O.preventDefault(), O.stopPropagation(), Q(), await Be(), O.key === "ArrowDown" ? E(false) : E());
  }
  function D(O) {
    O.stopPropagation();
  }
  function L(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.releasePointerCapture(O.pointerId), O.preventDefault(), o();
  }
  function j(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("up");
  }
  function H(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("down");
  }
  function Q() {
    if (r.value || !a.value) return;
    const O = a.value.value, Y = Number(O.replace(c.value, "."));
    O && !isNaN(Y) ? m.value = d(Ze(Y, e.min, e.max)) : m.value = null;
  }
  function J() {
    r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function R() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        m.value = null;
        return;
      }
      m.value = f.value.toString().replace(".", c.value);
    }
  }
  function Z() {
    R();
  }
  function U() {
    Q();
  }
  return le(() => {
    const { modelValue: O, type: Y, ...re } = Un.filterProps(e);
    function pe() {
      return n.increment ? g($e, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: y.value, icon: I.value, variant: "text" } } }, { default: () => [n.increment(p)] }) : g(Ne, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: I.value, key: "increment-btn", onClick: D, onPointerdown: j, onPointerup: L, onPointercancel: L, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function te() {
      return n.decrement ? g($e, { key: "decrement-defaults", defaults: { VBtn: { disabled: !x.value, height: C.value, size: y.value, icon: k.value, variant: "text" } } }, { default: () => [n.decrement(T)] }) : g(Ne, { "aria-hidden": "true", "data-testid": "decrement", disabled: !x.value, height: C.value, icon: k.value, key: "decrement-btn", onClick: D, onPointerdown: H, onPointerup: L, onPointercancel: L, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function ve() {
      return w("div", { class: "v-number-input__control" }, [te(), g(vn, { vertical: _.value !== "stacked" }, null), pe()]);
    }
    function De() {
      return !e.hideInput && !e.inset ? g(vn, { vertical: true }, null) : void 0;
    }
    const we = _.value === "split" ? w("div", { class: "v-number-input__control" }, [g(vn, { vertical: true }, null), pe()]) : e.reverse || _.value === "hidden" ? void 0 : w(be, null, [De(), ve()]), he = n["append-inner"] || we, P = _.value === "split" ? w("div", { class: "v-number-input__control" }, [te(), g(vn, { vertical: true }, null)]) : e.reverse && _.value !== "hidden" ? w(be, null, [ve(), De()]) : void 0, $ = n["prepend-inner"] || P;
    return g(Un, X({ ref: a }, re, { modelValue: m.value, "onUpdate:modelValue": (q) => m.value = q, focused: s.value, "onUpdate:focused": (q) => s.value = q, validationValue: f.value, error: e.error || b.value || void 0, onBeforeinput: B, onFocus: Z, onBlur: U, onKeydown: M, class: ["v-number-input", { "v-number-input--default": _.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": _.value === "split", "v-number-input--stacked": _.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": he ? function() {
      var _a3;
      for (var q = arguments.length, oe = new Array(q), ae = 0; ae < q; ae++) oe[ae] = arguments[ae];
      return w(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...oe), we]);
    } : void 0, "prepend-inner": $ ? function() {
      var _a3;
      for (var q = arguments.length, oe = new Array(q), ae = 0; ae < q; ae++) oe[ae] = arguments[ae];
      return w(be, null, [P, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...oe)]);
    } : void 0 });
  }), It({}, a);
} }), kA = z({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...vt(), ...St(), ...di(), ...tn(vi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), wA = ee()({ name: "VOtpInput", props: kA(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = pt(e), { isFocused: r, focus: s, blur: u } = ba(e), c = Ve(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Qe(), f = V(() => Number(e.length)), v = V(() => Array(f.value).fill(0)), S = K(-1), m = K(), b = K([]), h = V(() => b.value[S.value]);
  let x = false;
  Ft(() => e.autofocus, () => {
    const E = Rl();
    E.run(() => {
      const { intersectionRef: B, isIntersecting: M } = oi();
      ut(() => {
        B.value = b.value[0];
      }), ce(M, (D) => {
        var _a3;
        D && ((_a3 = B.value) == null ? void 0 : _a3.focus(), E.stop());
      });
    });
  });
  function _() {
    if (A(h.value.value)) {
      h.value.value = "";
      return;
    }
    if (x) return;
    const E = c.value.slice(), B = h.value.value;
    E[S.value] = B;
    let M = null;
    S.value > c.value.length ? M = c.value.length + 1 : S.value + 1 !== f.value && (M = "next"), c.value = E, M && Za(m.value, M);
  }
  function I() {
    x = false, _();
  }
  function k(E) {
    const B = c.value.slice(), M = S.value;
    let D = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? D = "prev" : E.key === "ArrowRight" ? D = "next" : ["Backspace", "Delete"].includes(E.key) && (B[S.value] = "", c.value = B, S.value > 0 && E.key === "Backspace" ? D = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = b.value[M]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      D != null && Za(m.value, D);
    }));
  }
  function y(E, B) {
    var _a3;
    B.preventDefault(), B.stopPropagation();
    const M = ((_a3 = B == null ? void 0 : B.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", D = M.length - 1 === -1 ? E : M.length - 1;
    A(M) || (c.value = M.split(""), S.value = D);
  }
  function C() {
    c.value = [];
  }
  function p(E, B) {
    s(), S.value = B;
  }
  function T() {
    u(), S.value = -1;
  }
  function A(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return ft({ VField: { color: F(() => e.color), bgColor: F(() => e.color), baseColor: F(() => e.baseColor), disabled: F(() => e.disabled), error: F(() => e.error), variant: F(() => e.variant), rounded: F(() => e.rounded) } }, { scoped: true }), ce(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), ce(S, (E) => {
    E < 0 || Be(() => {
      var _a3;
      (_a3 = b.value[E]) == null ? void 0 : _a3.select();
    });
  }), le(() => {
    var _a3;
    const [E, B] = Gn(n);
    return w("div", X({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [w("div", { ref: m, class: "v-otp-input__content", style: ye([i.value]) }, [v.value.map((M, D) => w(be, null, [e.divider && D !== 0 && w("span", { class: "v-otp-input__divider" }, [e.divider]), g($a, { focused: r.value && e.focusAll || S.value === D, key: D }, { ...l, loader: void 0, default: () => w("input", { ref: (L) => b.value[D] = L, "aria-label": d(e.label, D + 1), autofocus: D === 0 && e.autofocus, autocomplete: "one-time-code", class: ne(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: D === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[D], onInput: _, onFocus: (L) => p(L, D), onBlur: T, onKeydown: k, onCompositionstart: () => x = true, onCompositionend: I, onPaste: (L) => y(D, L) }, null) })])), w("input", X({ class: "v-otp-input-input", type: "hidden" }, B, { value: c.value.join("") }), null), g(jn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
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
function xA(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const CA = z({ scale: { type: [Number, String], default: 0.5 }, ...ke() }, "VParallax"), VA = ee()({ name: "VParallax", props: CA(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = oi(), { resizeRef: o, contentRect: i } = kn(), { height: r } = hn(), s = K();
  ut(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  ce(l, (v) => {
    v ? (u = hr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Nt(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), ce(r, f), ce(() => {
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
      const S = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, b = a.value.getBoundingClientRect().top + m, h = i.value.height, x = b + (h - S) / 2, _ = xA((m - x) * c.value), I = Math.max(1, (c.value * (S - h) + h) / h);
      v.style.setProperty("transform", `translateY(${_}px) scale(${I})`);
    }));
  }
  return le(() => g(ua, { class: ne(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: ye(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), _A = z({ ...Vr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), IA = ee()({ name: "VRadio", props: _A(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = Ba.filterProps(e);
    return g(Ba, X(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), PA = z({ height: { type: [Number, String], default: "auto" }, ...Oe(Sa(), ["direction"]), ...Oe(Cc(), ["multiple"]), trueIcon: { type: Ie, default: "$radioOn" }, falseIcon: { type: Ie, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), AA = ee()({ name: "VRadioGroup", inheritAttrs: false, props: PA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Mt(), o = V(() => e.id || `radio-group-${l}`), i = Ve(e, "modelValue"), r = K();
  return le(() => {
    const [s, u] = Gn(n), c = Rt.filterProps(e), d = Ba.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return g(Rt, X({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: S, messagesId: m, isDisabled: b, isReadonly: h } = v;
      return w(be, null, [f && g(to, { id: S.value }, { default: () => [f] }), g(sh, X(d, { id: S.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: b.value, readonly: h.value, "aria-labelledby": f ? S.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (x) => i.value = x }), a)]);
    } });
  }), It({}, r);
} }), TA = z({ ...di(), ...Sa(), ...Ay(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), DA = ee()({ name: "VRangeSlider", inheritAttrs: false, props: TA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), r = K(), { rtlClasses: s } = xt();
  function u(B) {
    if (!o.value || !i.value) return;
    const M = ru(B, o.value.$el, e.direction), D = ru(B, i.value.$el, e.direction), L = Math.abs(M), j = Math.abs(D);
    return L < j || L === j && M < 0 ? o.value.$el : i.value.$el;
  }
  const c = Ty(e), d = Ve(e, "modelValue", void 0, (B) => (B == null ? void 0 : B.length) ? B.map((M) => c.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: S, min: m, mousePressed: b, onSliderMousedown: h, onSliderTouchstart: x, position: _, trackContainerRef: I, disabled: k, readonly: y } = Dy({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (k.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (B) => {
    var _a3, _b2;
    let { value: M } = B;
    if (k.value || y.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const D = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [M, d.value[1]] : [d.value[0], M];
      !e.strict && D[0] < D[1] && (d.value = D);
    }
    a("end", d.value);
  }, onSliderMove: (B) => {
    var _a3, _b2, _c2, _d2, _e;
    let { value: M } = B;
    const [D, L] = d.value;
    if (k.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && D === L && D !== m.value && (f.value = M > D ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(M, L), L] : d.value = [D, Math.max(D, M)];
  }, getActiveThumb: u }), { isFocused: C, focus: p, blur: T } = ba(e), A = V(() => _(d.value[0])), E = V(() => _(d.value[1]));
  return le(() => {
    const B = Rt.filterProps(e), [M, D] = Gn(l), L = !!(e.label || n.label || n.prepend);
    return g(Rt, X({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": b.value, "v-slider--disabled": k.value }, s.value, e.class], style: e.style, ref: r }, B, M, { focused: C.value }), { ...n, prepend: L ? (j) => {
      var _a3, _b2;
      return w(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, j)) ?? (e.label ? g(to, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, j)]);
    } : void 0, default: (j) => {
      var _a3, _b2;
      let { id: H, messagesId: Q } = j;
      return w("div", { class: "v-slider__container", onMousedown: y.value ? void 0 : h, onTouchstartPassive: y.value ? void 0 : x }, [w("input", { id: `${H.value}_start`, name: e.name || H.value, disabled: k.value, readonly: y.value, tabindex: "-1", value: d.value[0] }, null), w("input", { id: `${H.value}_stop`, name: e.name || H.value, disabled: k.value, readonly: y.value, tabindex: "-1", value: d.value[1] }, null), g(My, { ref: I, start: A.value, stop: E.value }, { "tick-label": n["tick-label"] }), g(su, X({ ref: o, "aria-describedby": Q.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (J) => d.value = [J, d.value[1]], onFocus: (J) => {
        var _a4, _b3, _c2, _d2;
        p(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && J.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: A.value, ripple: e.ripple }, D), { "thumb-label": n["thumb-label"] }), g(su, X({ ref: i, "aria-describedby": Q.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (J) => d.value = [d.value[0], J], onFocus: (J) => {
        var _a4, _b3, _c2, _d2;
        p(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[0] === S.value && J.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: d.value[0], max: S.value, position: E.value, ripple: e.ripple }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), It({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), MA = z({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ie, default: "$ratingEmpty" }, fullIcon: { type: Ie, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...ke(), ...vt(), ...Xn(), ...Fe(), ...ze() }, "VRating"), EA = ee()({ name: "VRating", props: MA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Qe(), { themeClasses: l } = Ue(e), o = K(), i = Ve(e, "modelValue"), r = V(() => Ze(parseFloat(i.value), 0, Number(e.length))), s = V(() => Rn(Number(e.length), 1)), u = V(() => s.value.flatMap((I) => e.halfIncrements ? [I - 0.5, I] : [I])), c = ue(-1), d = V(() => u.value.map((I) => {
    const k = e.hover && c.value > -1, y = r.value >= I, C = c.value >= I, T = (k ? C : y) ? e.fullIcon : e.emptyIcon, A = e.activeColor ?? e.color, E = y || C ? A : e.color;
    return { isFilled: y, isHovered: C, icon: T, color: E };
  })), f = V(() => [0, ...u.value].map((I) => {
    function k() {
      c.value = I;
    }
    function y() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === I && e.clearable ? 0 : I);
    }
    return { onMouseenter: e.hover ? k : void 0, onMouseleave: e.hover ? y : void 0, onClick: C };
  })), v = V(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function S() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(I) {
    if (e.disabled || e.readonly || I.ctrlKey || I.altKey) return;
    const k = e.halfIncrements ? 0.5 : 1;
    if (I.key === "ArrowRight") {
      const y = Math.min(Number(e.length), Number(i.value ?? 0) + k);
      i.value = y, Be(() => S());
    }
    if (I.key === "ArrowLeft") {
      const y = Math.max(0, Number(i.value ?? 0) - k);
      i.value = y, Be(() => S());
    }
  }
  const b = Mt(), h = V(() => e.name ?? `v-rating-${b}`);
  function x(I) {
    var _a3, _b2;
    let { value: k, index: y, showStar: C = true } = I;
    const { onMouseenter: p, onMouseleave: T, onClick: A } = f.value[y + 1], E = `${h.value}-${String(k).replace(".", "-")}`, B = y === v.value, M = { color: (_a3 = d.value[y]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[y]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: B ? 0 : -1, onKeydown: m };
    return w(be, null, [w("label", { for: E, class: ne({ "v-rating__item--half": e.halfIncrements && k % 1 > 0, "v-rating__item--full": e.halfIncrements && k % 1 === 0 }), onMouseenter: p, onMouseleave: T, onClick: A }, [w("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, k, e.length)]), C ? n.item ? n.item({ ...d.value[y], props: M, value: k, index: y, rating: r.value }) : g(Ne, X({ "aria-label": a(e.itemAriaLabel, k, e.length) }, M), null) : void 0]), w("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: k, checked: r.value === k, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function _(I) {
    return n["item-label"] ? n["item-label"](I) : I.label ? w("span", null, [I.label]) : w("span", null, [Xe("\xA0")]);
  }
  return le(() => {
    var _a3;
    const I = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return g(e.tag, { class: ne(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: ye(e.style), ref: o }, { default: () => [g(x, { value: 0, index: -1, showStar: false }, null), s.value.map((k, y) => {
      var _a4, _b2;
      return w("div", { class: "v-rating__wrapper" }, [I && e.itemLabelPosition === "top" ? _({ value: k, index: y, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[y] }) : void 0, w("div", { class: "v-rating__item" }, [e.halfIncrements ? w(be, null, [g(x, { value: k - 0.5, index: y * 2 }, null), g(x, { value: k, index: y * 2 + 1 }, null)]) : g(x, { value: k, index: y }, null)]), I && e.itemLabelPosition === "bottom" ? _({ value: k, index: y, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[y] }) : void 0]);
    })] });
  }), {};
} }), BA = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function FA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return w("div", { class: ne(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function xv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Wr(t));
}
function Wr(e) {
  let t = [];
  if (!e) return t;
  const n = BA[e];
  if (e !== n) {
    if (e.includes(",")) return Cv(e);
    if (e.includes("@")) return xv(e);
    n.includes(",") ? t = Cv(n) : n.includes("@") ? t = xv(n) : n && t.push(Wr(n));
  }
  return [FA(e, t)];
}
function Cv(e) {
  return e.replace(/\s/g, "").split(",").map(Wr);
}
const $A = z({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...St(), ...kt(), ...ze() }, "VSkeletonLoader"), LA = ee()({ name: "VSkeletonLoader", inheritAttrs: false, props: $A(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.color), { dimensionStyles: i } = pt(e), { elevationClasses: r } = _t(e), { themeClasses: s } = Ue(e), { t: u } = Qe(), c = V(() => Wr(ot(e.type).join(",")));
  return le(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? w("div", X({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : w(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), OA = ee()({ name: "VSlideGroupItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Vc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function RA(e) {
  const t = ue(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Be(() => t.value = e());
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
const Ab = z({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...qn({ location: "bottom" }), ...Ql(), ...it(), ...bn(), ...ze(), ...Oe(fi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), ku = ee()({ name: "VSnackbar", props: Ab(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), { positionClasses: l } = eo(e), { scopeId: o } = pl(), { themeClasses: i } = Ue(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ya(e), { roundedClasses: c } = ct(e), d = RA(() => Number(e.timeout)), f = K(), v = K(), S = ue(false), m = ue(0), b = K(), h = He(Ro, void 0);
  Ft(() => !!h, () => {
    const E = Rg();
    ut(() => {
      b.value = E.mainStyles.value;
    });
  }), ce(a, _), ce(() => e.timeout, _), wt(() => {
    a.value && _();
  });
  let x = -1;
  function _() {
    d.reset(), window.clearTimeout(x);
    const E = Number(e.timeout);
    if (!a.value || E === -1) return;
    const B = ac(v.value);
    d.start(B), x = window.setTimeout(() => {
      a.value = false;
    }, E);
  }
  function I() {
    d.reset(), window.clearTimeout(x);
  }
  function k() {
    S.value = true, I();
  }
  function y() {
    S.value = false, _();
  }
  function C(E) {
    m.value = E.touches[0].clientY;
  }
  function p(E) {
    Math.abs(m.value - E.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function T() {
    S.value && y();
  }
  const A = V(() => e.location.split(" ").reduce((E, B) => (E[`v-snackbar--${B}`] = true, E), {}));
  return le(() => {
    const E = jn.filterProps(e), B = !!(n.default || n.text || e.text);
    return g(jn, X({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, A.value, l.value, e.class], style: [b.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: X({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: k, onPointerleave: y }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: p, onAfterLeave: T }, o), { default: () => {
      var _a3, _b2;
      return [ha(false, "v-snackbar"), e.timer && !S.value && w("div", { key: "timer", class: "v-snackbar__timer" }, [g(wr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), B && w("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && g($e, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [w("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), It({}, f);
} }), NA = z({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Oe(Ab(), ["modelValue"]) }, "VSnackbarQueue"), HA = ee()({ name: "VSnackbarQueue", props: NA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), o = ue(false), i = ue(false), r = ue();
  ce(() => e.modelValue.length, (f, v) => {
    !i.value && f > v && u();
  }), ce(o, (f) => {
    f && (i.value = true);
  });
  function s() {
    e.modelValue.length ? u() : (r.value = void 0, i.value = false);
  }
  function u() {
    const [f, ...v] = e.modelValue;
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Be(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = V(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  le(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...S } = ku.filterProps(e);
    return w(be, null, [i.value && !!r.value && (a.default ? g($e, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : g(ku, X(S, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => w(be, null, [a.actions ? g($e, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : g(Ne, X(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), Tb = z({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Db = z({ autoLineWidth: Boolean, ...Tb() }, "VBarline"), Vv = ee()({ name: "VBarline", props: Db(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = V(() => e.id || `barline-${a}`), o = V(() => Number(e.autoDrawDuration) || 500), i = V(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = V(() => parseFloat(e.lineWidth) || 4), s = V(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = V(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = V(() => e.modelValue.map((b) => ht(b, e.itemValue, b)));
  function d(b, h) {
    const { minX: x, maxX: _, minY: I, maxY: k } = h, y = b.length;
    let C = e.max != null ? Number(e.max) : Math.max(...b), p = e.min != null ? Number(e.min) : Math.min(...b);
    p > 0 && e.min == null && (p = 0), C < 0 && e.max == null && (C = 0);
    const T = _ / (y === 1 ? 2 : y), A = (k - I) / (C - p || 1), E = k - Math.abs(p * A);
    return b.map((B, M) => {
      const D = Math.abs(A * B);
      return { x: x + M * T, y: E - D + +(B < 0) * D, height: D, value: B };
    });
  }
  const f = V(() => {
    const b = [], h = d(c.value, u.value), x = h.length;
    for (let _ = 0; b.length < x; _++) {
      const I = h[_];
      let k = e.labels[_];
      k || (k = typeof I == "object" ? I.value : I), b.push({ x: I.x, value: String(k) });
    }
    return b;
  }), v = V(() => d(c.value, u.value)), S = V(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = V(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  le(() => {
    const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return w("svg", { display: "block" }, [w("defs", null, [w("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [b.map((h, x) => w("stop", { offset: x / Math.max(b.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), w("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => w("rect", { x: h.x + S.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !zn() && w(be, null, [w("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), w("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && w("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, x) => {
      var _a3;
      return w("text", { x: h.x + S.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: x, value: h.value })) ?? h.value]);
    })]), w("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [w("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function zA(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && WA(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(_v(u, i), _v(s, i)), v = d / 2 < t ? d / 2 : t, S = Iv(u, i, v), m = Iv(s, i, v);
    return `L${S.x} ${S.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function _i(e) {
  return parseInt(e, 10);
}
function WA(e, t, n) {
  return _i(e.x + n.x) === _i(2 * t.x) && _i(e.y + n.y) === _i(2 * t.y);
}
function _v(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Iv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const Mb = z({ fill: Boolean, ...Tb() }, "VTrendline"), Pv = ee()({ name: "VTrendline", props: Mb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = V(() => e.id || `trendline-${a}`), o = V(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = K(0), r = K(null);
  function s(b, h) {
    const { minX: x, maxX: _, minY: I, maxY: k } = h;
    b.length === 1 && (b = [b[0], b[0]]);
    const y = b.length, C = e.max != null ? Number(e.max) : Math.max(...b), p = e.min != null ? Number(e.min) : Math.min(...b), T = (_ - x) / (y - 1), A = (k - I) / (C - p || 1);
    return b.map((E, B) => ({ x: x + B * T, y: k - (E - p) * A, value: E }));
  }
  const u = V(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = V(() => parseFloat(e.lineWidth) || 4), d = V(() => Number(e.width)), f = V(() => {
    const b = Number(e.padding);
    return { minX: b, maxX: d.value - b, minY: b, maxY: parseInt(e.height, 10) - b };
  }), v = V(() => e.modelValue.map((b) => ht(b, e.itemValue, b))), S = V(() => {
    const b = [], h = s(v.value, f.value), x = h.length;
    for (let _ = 0; b.length < x; _++) {
      const I = h[_];
      let k = e.labels[_];
      k || (k = typeof I == "object" ? I.value : I), b.push({ x: I.x, value: String(k) });
    }
    return b;
  });
  ce(() => e.modelValue, async () => {
    if (await Be(), !e.autoDraw || !r.value || zn()) return;
    const b = r.value, h = b.getTotalLength();
    e.fill ? (b.style.transformOrigin = "bottom center", b.style.transition = "none", b.style.transform = "scaleY(0)", b.getBoundingClientRect(), b.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, b.style.transform = "scaleY(1)") : (b.style.strokeDasharray = `${h}`, b.style.strokeDashoffset = `${h}`, b.getBoundingClientRect(), b.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, b.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function m(b) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return zA(s(v.value, f.value), h, b, parseInt(e.height, 10));
  }
  le(() => {
    var _a3;
    const b = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return w("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [w("defs", null, [w("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [b.map((h, x) => w("stop", { offset: x / Math.max(b.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && w("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [S.value.map((h, x) => {
      var _a4;
      return w("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: x, value: h.value })) ?? h.value]);
    })]), w("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && w("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), jA = z({ type: { type: String, default: "trend" }, ...Db(), ...Mb() }, "VSparkline"), UA = ee()({ name: "VSparkline", props: jA(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Dt(() => e.color), o = V(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = V(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  le(() => {
    const r = e.type === "trend" ? Pv : Vv, s = e.type === "trend" ? Pv.filterProps(e) : Vv.filterProps(e);
    return g(r, X({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), YA = z({ ...ke(), ...Wh({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), GA = ee()({ name: "VSpeedDial", props: YA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), l = K(), o = V(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = V(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return le(() => {
    const r = Kl.filterProps(e);
    return g(Kl, X(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => g($e, { defaults: { VBtn: { size: "small" } } }, { default: () => [g(Kt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), dd = Symbol.for("vuetify:v-stepper"), Eb = z({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), Bb = ee()({ name: "VStepperActions", props: Eb(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
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
    return w("div", { class: "v-stepper-actions" }, [g($e, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? g(Ne, r, null)];
    } }), g($e, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? g(Ne, s, null)];
    } })]);
  }), {};
} }), Fb = ma("v-stepper-header"), KA = z({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ie, default: "$complete" }, editable: Boolean, editIcon: { type: Ie, default: "$edit" }, error: Boolean, errorIcon: { type: Ie, default: "$error" }, icon: Ie, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), qA = z({ ...KA(), ...Sl() }, "VStepperItem"), $b = ee()({ name: "VStepperItem", directives: { vRipple: $t }, props: qA(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, dd, true), l = V(() => (a == null ? void 0 : a.value.value) ?? e.value), o = V(() => e.rules.every((f) => f() === true)), i = V(() => !e.disabled && e.editable), r = V(() => !e.disabled && e.editable), s = V(() => e.error || !o.value), u = V(() => e.complete || e.rules.length > 0 && o.value), c = V(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = V(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return le(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), S = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return lt(w("button", { class: ne(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && ha(true, "v-stepper-item"), g(gn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? g(je, { icon: c.value }, null) : l.value)];
    } }), w("div", { class: "v-stepper-item__content" }, [v && w("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), S && w("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[$t, e.editable && e.ripple, null]]);
  }), {};
} }), XA = z({ ...Oe(Dr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), Lb = ee()({ name: "VStepperWindow", props: XA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(dd, null), l = Ve(e, "modelValue"), o = V({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return le(() => {
    const i = rl.filterProps(e);
    return g(rl, X({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), ZA = z({ ...Mr() }, "VStepperWindowItem"), Ob = ee()({ name: "VStepperWindowItem", props: ZA(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = sl.filterProps(e);
    return g(sl, X({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), JA = z({ altLabels: Boolean, bgColor: String, completeIcon: Ie, editIcon: Ie, editable: Boolean, errorIcon: Ie, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...ml() }, "Stepper"), QA = z({ ...JA(), ...bl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Lc(), ...tn(Eb(), ["prevText", "nextText"]) }, "VStepper"), eT = ee()({ name: "VStepper", props: QA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Ra(e, dd), { displayClasses: r, mobile: s } = hn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: S, nextText: m } = Xl(e), b = V(() => e.items.map((_, I) => {
    const k = ht(_, e.itemTitle, _), y = ht(_, e.itemValue, I + 1), C = e.itemProps === true ? _ : ht(_, e.itemProps), p = { title: k, value: y, ...C };
    return { title: p.title, value: p.value, props: p, raw: _ };
  })), h = V(() => a.value.findIndex((_) => i.value.includes(_.id))), x = V(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return ft({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: S, nextText: m }, VStepperActions: { color: f, disabled: x, prevText: S, nextText: m } }), le(() => {
    const _ = Fa.filterProps(e), I = !!(n.header || e.items.length), k = e.items.length > 0, y = !e.hideActions && !!(k || n.actions);
    return g(Fa, X(_, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [I && g(Fb, { key: "stepper-header" }, { default: () => [b.value.map((C, p) => {
        let { raw: T, ...A } = C;
        return w(be, null, [!!p && g(vn, null, null), g($b, A.props, { default: n[`header-item.${A.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), k && g(Lb, { key: "stepper-window" }, { default: () => [b.value.map((C) => g(Ob, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), y && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? g(Bb, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), tT = z({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Sa(), ...Vr() }, "VSwitch"), nT = ee()({ name: "VSwitch", inheritAttrs: false, props: tT(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ve(e, "indeterminate"), o = Ve(e, "modelValue"), { loaderClasses: i } = ii(e), { isFocused: r, focus: s, blur: u } = ba(e), c = K(), d = K(), f = nc && window.matchMedia("(forced-colors: active)").matches, v = F(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), S = Mt(), m = F(() => e.id || `switch-${S}`);
  function b() {
    l.value && (l.value = false);
  }
  function h(x) {
    var _a3, _b2;
    x.stopPropagation(), x.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return le(() => {
    const [x, _] = Gn(n), I = Rt.filterProps(e), k = Ba.filterProps(e);
    return g(Rt, X({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, x, I, { modelValue: o.value, "onUpdate:modelValue": (y) => o.value = y, id: m.value, focused: r.value, style: e.style }), { ...a, default: (y) => {
      let { id: C, messagesId: p, isDisabled: T, isReadonly: A, isValid: E } = y;
      const B = { model: o, isValid: E };
      return g(Ba, X({ ref: c }, k, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, b], id: C.value, "aria-describedby": p.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: T.value, readonly: A.value, onFocus: s, onBlur: u }, _), { ...a, default: (M) => {
        let { backgroundColorClasses: D, backgroundColorStyles: L } = M;
        return w("div", { class: ne(["v-switch__track", f ? void 0 : D.value]), style: ye(L.value), onClick: h }, [a["track-true"] && w("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](B)]), a["track-false"] && w("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](B)])]);
      }, input: (M) => {
        let { inputNode: D, icon: L, backgroundColorClasses: j, backgroundColorStyles: H } = M;
        return w(be, null, [D, w("div", { class: ne(["v-switch__thumb", { "v-switch__thumb--filled": L || e.loading }, e.inset || f ? void 0 : j.value]), style: ye(e.inset ? void 0 : H.value) }, [a.thumb ? g($e, { defaults: { VIcon: { icon: L, size: "x-small" } } }, { default: () => [a.thumb({ ...B, icon: L })] }) : g(Sc, null, { default: () => [e.loading ? g(ri, { name: "v-switch", active: true, color: E.value === false ? void 0 : v.value }, { default: (Q) => a.loader ? a.loader(Q) : g(Ea, { active: Q.isActive, color: Q.color, indeterminate: true, size: "16", width: "2" }, null) }) : L && g(je, { key: String(L), icon: L, size: "x-small" }, null)] })])]);
      } });
    } });
  }), It({}, d);
} }), aT = z({ color: String, height: [Number, String], window: Boolean, ...ke(), ...kt(), ...gl(), ...it(), ...Fe(), ...ze() }, "VSystemBar"), lT = ee()({ name: "VSystemBar", props: aT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Ke(() => e.color), { elevationClasses: i } = _t(e), { roundedClasses: r } = ct(e), { ssrBootStyles: s } = yl(), u = V(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = hl({ id: e.name, order: V(() => parseInt(e.order, 10)), position: ue("top"), layoutSize: u, elementSize: u, active: V(() => true), absolute: F(() => e.absolute) });
  return le(() => g(e.tag, { class: ne(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: ye([o.value, c.value, s.value, e.style]) }, n)), {};
} }), fd = Symbol.for("vuetify:v-tabs"), Rb = z({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Oe(Cr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), Nb = ee()({ name: "VTab", props: Rb(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Dt(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Ke(() => e.sliderColor), s = K(), u = K(), c = V(() => e.direction === "horizontal"), d = V(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(b, h) {
    return { opacity: [0, 1] };
  }
  function v(b, h) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function S(b, h) {
    const x = h.getBoundingClientRect(), _ = b.getBoundingClientRect(), I = c.value ? "x" : "y", k = c.value ? "X" : "Y", y = c.value ? "right" : "bottom", C = c.value ? "width" : "height", p = x[I], T = _[I], A = p > T ? x[y] - _[y] : x[I] - _[I], E = Math.sign(A) > 0 ? c.value ? "right" : "bottom" : Math.sign(A) < 0 ? c.value ? "left" : "top" : "center", M = (Math.abs(A) + (Math.sign(A) < 0 ? x[C] : _[C])) / Math.max(x[C], _[C]) || 0, D = x[C] / _[C] || 0, L = 1.5;
    return { transform: [`translate${k}(${A}px) scale${k}(${D})`, `translate${k}(${A / L}px) scale${k}(${(M - 1) / L + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function m(b) {
    var _a3, _b2;
    let { value: h } = b;
    if (h) {
      const x = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), _ = u.value;
      if (!x || !_) return;
      const I = getComputedStyle(x).backgroundColor, k = { fade: f, grow: v, shift: S }[e.sliderTransition ?? "shift"] ?? S, y = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      ta(_, { backgroundColor: [I, I], ...k(_, x) }, { duration: y, easing: Fo });
    }
  }
  return le(() => {
    const b = Ne.filterProps(e);
    return g(Ne, X({ symbol: fd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, b, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return w(be, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && w("div", { ref: u, class: ne(["v-tab__slider", e.inset ? i.value : l.value]), style: ye([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), It({}, s);
} }), oT = z({ ...Oe(Dr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Hb = ee()({ name: "VTabsWindow", props: oT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(fd, null), l = Ve(e, "modelValue"), o = V({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return le(() => {
    const i = rl.filterProps(e);
    return g(rl, X({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), iT = z({ ...Mr() }, "VTabsWindowItem"), zb = ee()({ name: "VTabsWindowItem", props: iT(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const a = sl.filterProps(e);
    return g(sl, X({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function rT(e) {
  return e ? e.map((t) => ol(t) ? t : { text: t, value: t }) : [];
}
const sT = z({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...tn(Rb(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ..._c({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...vt(), ...Fe() }, "VTabs"), uT = ee()({ name: "VTabs", props: sT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ve(e, "modelValue"), o = V(() => rT(e.items)), { densityClasses: i } = Lt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Ke(() => e.bgColor), { scopeId: u } = pl();
  return ft({ VTab: { color: F(e, "color"), direction: F(e, "direction"), stacked: F(e, "stacked"), fixed: F(e, "fixedTabs"), inset: F(e, "inset"), sliderColor: F(e, "sliderColor"), sliderTransition: F(e, "sliderTransition"), sliderTransitionDuration: F(e, "sliderTransitionDuration"), hideSlider: F(e, "hideSlider") } }), le(() => {
    const c = jo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return w(be, null, [g(jo, X(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ge(e.height), "--v-tabs-inset-padding": e.inset ? ge(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ge(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: fd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? g(Nb, X(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && g(Hb, X({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? g(zb, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), cT = z({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...jh(), ...Oe(Sa(), ["direction"]), ...vi() }, "VTextarea"), dT = ee()({ name: "VTextarea", directives: { vIntersect: An }, inheritAttrs: false, props: cT(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ve(e, "modelValue"), { isFocused: i, focus: r, blur: s } = ba(e), { onIntersect: u } = Uh(e), c = V(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = V(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = K(), v = K(), S = ue(""), m = K(), b = K(0), { platform: h } = hn(), x = Oc(e), _ = V(() => e.persistentPlaceholder || i.value || e.active);
  function I() {
    var _a3;
    x.isSuppressing.value && x.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function k(D) {
    I(), a("click:control", D);
  }
  function y(D) {
    a("mousedown:control", D);
  }
  function C(D) {
    D.stopPropagation(), I(), Be(() => {
      o.value = "", ni(e["onClick:clear"], D);
    });
  }
  function p(D) {
    var _a3;
    const L = D.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = L.value;
      return;
    }
    const j = L.value, H = L.selectionStart, Q = L.selectionEnd;
    o.value = j, Be(() => {
      let J = 0;
      j.trimStart().length === L.value.length && (J = j.length - L.value.length), H != null && (L.selectionStart = H - J), Q != null && (L.selectionEnd = Q - J);
    });
  }
  const T = K(), A = K(Number(e.rows)), E = V(() => ["plain", "underlined"].includes(e.variant));
  ut(() => {
    e.autoGrow || (A.value = Number(e.rows));
  });
  function B() {
    Be(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        b.value = 12;
        return;
      }
      const { offsetWidth: D, clientWidth: L } = m.value;
      b.value = Math.max(0, D - L);
    }), e.autoGrow && Be(() => {
      if (!T.value || !v.value) return;
      const D = getComputedStyle(T.value), L = getComputedStyle(v.value.$el), j = parseFloat(D.getPropertyValue("--v-field-padding-top")) + parseFloat(D.getPropertyValue("--v-input-padding-top")) + parseFloat(D.getPropertyValue("--v-field-padding-bottom")), H = T.value.scrollHeight, Q = parseFloat(D.lineHeight), J = Math.max(parseFloat(e.rows) * Q + j, parseFloat(L.getPropertyValue("--v-input-control-height"))), R = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Q + j || 1 / 0, Z = Ze(H ?? 0, J, R);
      A.value = Math.floor((Z - j) / Q), S.value = ge(Z);
    });
  }
  wt(B), ce(o, B), ce(() => e.rows, B), ce(() => e.maxHeight, B), ce(() => e.maxRows, B), ce(() => e.density, B), ce(A, (D) => {
    a("update:rows", D);
  });
  let M;
  return ce(T, (D) => {
    D ? (M = new ResizeObserver(B), M.observe(T.value)) : M == null ? void 0 : M.disconnect();
  }), Nt(() => {
    M == null ? void 0 : M.disconnect();
  }), le(() => {
    const D = !!(l.counter || e.counter || e.counterValue), L = !!(D || l.details), [j, H] = Gn(n), { modelValue: Q, ...J } = Rt.filterProps(e), R = { ...$a.filterProps(e), "onClick:clear": C };
    return g(Rt, X({ ref: f, modelValue: o.value, "onUpdate:modelValue": (Z) => o.value = Z, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ge(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ge(b.value) }, e.style] }, j, J, { centerAffix: A.value === 1 && !E.value, focused: i.value }), { ...l, default: (Z) => {
      let { id: U, isDisabled: O, isDirty: Y, isReadonly: re, isValid: pe, hasDetails: te } = Z;
      return g($a, X({ ref: v, style: { "--v-textarea-control-height": S.value }, onClick: k, onMousedown: y, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, R, { id: U.value, active: _.value || Y.value, labelId: `${U.value}-label`, centerAffix: A.value === 1 && !E.value, dirty: Y.value || e.dirty, disabled: O.value, focused: i.value, details: te.value, error: pe.value === false }), { ...l, default: (ve) => {
        let { props: { class: De, ...we }, controlRef: he } = ve;
        return w(be, null, [e.prefix && w("span", { class: "v-text-field__prefix" }, [e.prefix]), lt(w("textarea", X({ ref: (P) => m.value = he.value = P, class: De, value: o.value, onInput: p, autofocus: e.autofocus, readonly: re.value, disabled: O.value, placeholder: e.placeholder, rows: e.rows, name: x.fieldName.value, autocomplete: x.fieldAutocomplete.value, onFocus: I, onBlur: s, "aria-labelledby": `${U.value}-label` }, we, H), null), [[An, { handler: u }, null, { once: true }]]), e.autoGrow && lt(w("textarea", { class: ne([De, "v-textarea__sizer"]), id: `${we.id}-sizer`, "onUpdate:modelValue": (P) => o.value = P, ref: T, readonly: true, "aria-hidden": "true" }, null), [[h0, o.value]]), e.suffix && w("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: L ? (Z) => {
      var _a3;
      return w(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Z), D && w(be, null, [w("span", null, null), g(_r, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), It({}, f, v, m);
} }), fT = z({ withBackground: Boolean, ...ke(), ...ze(), ...Fe() }, "VThemeProvider"), vT = ee()({ name: "VThemeProvider", props: fT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e);
  return () => {
    var _a3;
    return e.withBackground ? g(e.tag, { class: ne(["v-theme-provider", a.value, e.class]), style: ye(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), mT = z({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ie, iconColor: String, lineColor: String, ...ke(), ...it(), ...Xn(), ...kt() }, "VTimelineDivider"), gT = ee()({ name: "VTimelineDivider", props: mT(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Jl(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Ke(() => e.dotColor), { roundedClasses: r } = ct(e, "v-timeline-divider__dot"), { elevationClasses: s } = _t(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Ke(() => e.lineColor);
  return le(() => w("div", { class: ne(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: ye(e.style) }, [w("div", { class: ne(["v-timeline-divider__before", u.value]), style: ye(c.value) }, null), !e.hideDot && w("div", { key: "dot", class: ne(["v-timeline-divider__dot", s.value, r.value, a.value]), style: ye(l.value) }, [w("div", { class: ne(["v-timeline-divider__inner-dot", i.value, r.value]), style: ye(o.value) }, [n.default ? g($e, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : g(je, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), w("div", { class: ne(["v-timeline-divider__after", u.value]), style: ye(c.value) }, null)])), {};
} }), Wb = z({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ie, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...ke(), ...St(), ...kt(), ...it(), ...Xn(), ...Fe() }, "VTimelineItem"), hT = ee()({ name: "VTimelineItem", props: Wb(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = pt(e), l = ue(0), o = K();
  return ce(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), le(() => {
    var _a3, _b2;
    return w("div", { class: ne(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: ye([{ "--v-timeline-dot-size": ge(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ge(e.lineInset)})` : ge(0) }, e.style]) }, [w("div", { class: "v-timeline-item__body", style: ye(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), g(gT, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && w("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), yT = z({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...tn(Wb({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...ke(), ...vt(), ...Fe(), ...ze() }, "VTimeline"), bT = ee()({ name: "VTimeline", props: yT(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ue(e), { densityClasses: l } = Lt(e), { rtlClasses: o } = xt();
  ft({ VTimelineDivider: { lineColor: F(() => e.lineColor) }, VTimelineItem: { density: F(() => e.density), dotColor: F(() => e.dotColor), fillDot: F(() => e.fillDot), hideOpposite: F(() => e.hideOpposite), iconColor: F(() => e.iconColor), lineColor: F(() => e.lineColor), lineInset: F(() => e.lineInset), size: F(() => e.size) } });
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
  return le(() => g(e.tag, { class: ne(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: ye([{ "--v-timeline-line-thickness": ge(e.lineThickness) }, e.style]) }, n)), {};
} }), ST = z({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), wu = ee()({ name: "VTimePickerClock", props: ST(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = K(null), l = K(null), o = K(void 0), i = K(false), r = K(null), s = K(null), u = sg((R) => n("change", R), 750), { textColorClasses: c, textColorStyles: d } = Dt(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Ke(() => e.color), S = V(() => e.max - e.min + 1), m = V(() => e.double ? S.value / 2 : S.value), b = V(() => 360 / m.value), h = V(() => b.value * Math.PI / 180), x = V(() => e.modelValue == null ? e.min : e.modelValue), _ = V(() => 0.62), I = V(() => {
    const R = [];
    for (let Z = e.min; Z <= e.max; Z = Z + e.step) R.push(Z);
    return R;
  });
  ce(() => e.modelValue, (R) => {
    o.value = R;
  });
  function k(R) {
    o.value !== R && (o.value = R), n("input", R);
  }
  function y(R) {
    return !e.allowedValues || e.allowedValues(R);
  }
  function C(R) {
    if (!e.scrollable || e.disabled) return;
    R.preventDefault();
    const Z = Math.sign(-R.deltaY || 1);
    let U = x.value;
    do
      U = U + Z, U = (U - e.min + S.value) % S.value + e.min;
    while (!y(U) && U !== x.value);
    U !== e.displayedValue && k(U), u(U);
  }
  function p(R) {
    return e.double && R - e.min >= m.value;
  }
  function T(R) {
    return p(R) ? _.value : 1;
  }
  function A(R) {
    const Z = e.rotate * Math.PI / 180;
    return { x: Math.sin((R - e.min) * h.value + Z) * T(R), y: -Math.cos((R - e.min) * h.value + Z) * T(R) };
  }
  function E(R, Z) {
    const U = (Math.round(R / b.value) + (Z ? m.value : 0)) % S.value + e.min;
    return R < 360 - b.value / 2 ? U : Z ? e.max - m.value + 1 : e.min;
  }
  function B(R) {
    const { x: Z, y: U } = A(R);
    return { left: `${Math.round(50 + Z * 50)}%`, top: `${Math.round(50 + U * 50)}%` };
  }
  function M(R, Z) {
    const U = Z.x - R.x, O = Z.y - R.y;
    return Math.sqrt(U * U + O * O);
  }
  function D(R, Z) {
    const U = 2 * Math.atan2(Z.y - R.y - M(R, Z), Z.x - R.x);
    return Math.abs(U * 180 / Math.PI);
  }
  function L(R) {
    r.value === null && (r.value = R), s.value = R, k(R);
  }
  function j(R) {
    var _a3, _b2;
    if (R.preventDefault(), !i.value && R.type !== "click" || !a.value) return;
    const { width: Z, top: U, left: O } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: Y } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: re, clientY: pe } = "touches" in R ? R.touches[0] : R, te = { x: Z / 2, y: -Z / 2 }, ve = { x: re - O, y: U - pe }, De = Math.round(D(te, ve) - e.rotate + 360) % 360, we = e.double && M(te, ve) < (Y + Y * _.value) / 4, he = Math.ceil(15 / b.value);
    let P;
    for (let $ = 0; $ < he; $++) if (P = E(De + $ * b.value, we), y(P) || (P = E(De - $ * b.value, we), y(P))) return L(P);
  }
  function H(R) {
    e.disabled || (R.preventDefault(), window.addEventListener("mousemove", j), window.addEventListener("touchmove", j), window.addEventListener("mouseup", Q), window.addEventListener("touchend", Q), r.value = null, s.value = null, i.value = true, j(R));
  }
  function Q(R) {
    R.stopPropagation(), J(), i.value = false, s.value !== null && y(s.value) && n("change", s.value);
  }
  function J() {
    window.removeEventListener("mousemove", j), window.removeEventListener("touchmove", j), window.removeEventListener("mouseup", Q), window.removeEventListener("touchend", Q);
  }
  gt(J), le(() => w("div", { class: ne([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: H, onTouchstart: H, onWheel: C, ref: a }, [w("div", { class: "v-time-picker-clock__inner", ref: l }, [w("div", { class: ne([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": p(e.modelValue) }, c.value]), style: ye([{ transform: `rotate(${e.rotate + b.value * (x.value - e.min)}deg) scaleY(${T(x.value)})` }, d.value]) }, null), I.value.map((R) => {
    const Z = R === x.value;
    return w("div", { class: ne([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": Z, "v-time-picker-clock__item--disabled": e.disabled || !y(R) }, Z && f.value]), style: ye([B(R), Z && v.value]) }, [w("span", null, [e.format(R)])]);
  })])]));
} }), pT = z({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), bs = ee()({ name: "VTimePickerField", props: pT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Dt(() => e.color), o = K(), i = ue(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return le(() => g(Un, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ne(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: ye(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), It({}, o);
} });
function on(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function jb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function _o(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function co(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function kT(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function wT(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Ub = z({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function Yb(e) {
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
    return (v, S, m) => {
      if (v !== null && S !== null) {
        const b = 3600 * v + 60 * S + m;
        if (b < d || b > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => kT(v, r).value : (v) => wT(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const xT = z({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Ub() }, "VTimePickerControls"), xu = ee()({ name: "VTimePickerControls", props: xT(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Qe(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = Yb(e), s = V(() => e.hour !== null ? e.ampm ? _o(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = V(() => e.minute !== null ? Number(e.minute) : null), c = V(() => {
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
    const D = Number(M);
    return e.ampm ? on(jb(D)) : on(D);
  }, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const D = typeof M == "string" ? co(M) : Number(M);
    return D === null ? null : e.ampm ? _o(D, e.period ?? "am") : Ze(D, 0, 23);
  } }, S = Ve(e, "hour", void 0, v.in, v.out), m = { in: (M) => M != null && !isNaN(Number(M)) ? on(`${M}`) : null, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const D = typeof M == "string" ? co(M) : Number(M);
    return D !== null ? Ze(D, 0, 59) : null;
  } }, b = Ve(e, "minute", void 0, m.in, m.out), h = Ve(e, "second", void 0, m.in, m.out);
  function x(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const D = e.period === "am", L = e.ampm ? _o(Number(S.value ?? 0), D ? "am" : "pm") : Number(S.value ?? 0), j = r("hour", L, M.key === "ArrowUp"), H = D && j >= 12 || !D && j < 12;
    e.ampm && H ? (n("update:period", e.period === "am" ? "pm" : "am"), Be(() => S.value = on(j))) : S.value = on(j);
  }
  function _(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const D = Number(b.value ?? 0), L = r("minute", D, M.key === "ArrowUp", s.value);
    b.value = on(L);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const D = Number(h.value ?? 0), L = r("second", D, M.key === "ArrowUp", s.value, u.value);
    h.value = on(L);
  }
  function k(M, D, L) {
    return (j) => {
      if (!j.data) return;
      const H = j.target, { value: Q, selectionStart: J, selectionEnd: R } = H ?? {};
      if (co(j.data) === null) {
        j.preventDefault();
        return;
      }
      const Z = Q ? Q.slice(0, J) + j.data + Q.slice(R) : j.data;
      if (Z.length > 2) {
        if (J === R && R === 0 && j.data.trim().startsWith("0")) {
          j.preventDefault(), H.value = Z.trim().substring(0, 2), L(H.value), j.data.trim().length === 1 && H.setSelectionRange(1, 1);
          return;
        }
        if (J === R && R === 1 && Q.startsWith("0")) {
          j.preventDefault(), H.value = Z.trim().substring(0, 2), L(H.value);
          return;
        }
        const O = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(Z) > O) {
          j.preventDefault(), H.value = on(String(co(j.data)).substring(0, 2)), L(H.value);
          return;
        }
      }
      const U = M(Z);
      D(U) && j.preventDefault();
    };
  }
  function y(M) {
    n("update:period", M);
    const D = r("hour", M === "am" ? 23 : 11, true);
    Be(() => S.value = on(D));
  }
  const C = K(), p = K(), T = K();
  ce(() => e.viewMode, (M, D) => {
    switch (D) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        p.value.blur();
        break;
      case "second":
        T.value.blur();
        break;
    }
  });
  const A = k(v.out, (M) => v.in(M) === S.value, (M) => S.value = M), E = k(m.out, (M) => m.in(M) === b.value, (M) => b.value = M), B = k(m.out, (M) => m.in(M) === h.value, (M) => h.value = M);
  return le(() => w("div", { class: "v-time-picker-controls" }, [w("div", { class: ne({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [g(bs, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: S.value, "onUpdate:modelValue": (M) => S.value = M, onKeydown: x, onBeforeinput: A, onFocus: () => n("update:viewMode", "hour") }, null), w("span", { class: "v-time-picker-controls__time__separator" }, [Xe(":")]), g(bs, { ref: p, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (M) => b.value = M, onKeydown: _, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && w("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Xe(":")]), e.useSeconds && w(be, null, [g(bs, { key: "secondsVal", ref: T, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: I, onBeforeinput: B, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && w("div", { class: "v-time-picker-controls__ampm" }, [g(Ne, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? y("am") : null }, null), g(Ne, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? y("pm") : null }, null)])])])), {};
} }), CT = z({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Ub(), ...Oe(Er({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...vt() }, "VTimePicker"), VT = ee()({ name: "VTimePicker", props: CT(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Qe(), { densityClasses: o } = Lt(e), i = K(null), r = K(null), s = K(null), u = K(null), c = K(null), d = K(null), f = Ve(e, "period", "am"), v = Ve(e, "viewMode", "hour"), S = K(null), m = K(null), b = V(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: x, isAllowedSecond: _ } = Yb(e), I = F(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function k() {
    const A = y();
    A !== null && A !== e.modelValue && n("update:modelValue", A), I.value && n("update:modelValue", null);
  }
  ce(i, k), ce(r, k), ce(s, k), ce(() => e.modelValue, (A) => C(A)), ce(() => e.useSeconds, (A, E) => {
    E && !A && v.value === "second" && (v.value = "minute"), !A && s.value !== null && (s.value = null);
  }), wt(() => {
    C(e.modelValue);
  });
  function y() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${on(i.value)}:${on(r.value)}` + (e.useSeconds ? `:${on(s.value)}` : "") : null;
  }
  function C(A) {
    if (A == null || A === "") i.value = null, r.value = null, s.value = null;
    else if (A instanceof Date) i.value = A.getHours(), r.value = A.getMinutes(), s.value = A.getSeconds();
    else {
      const [E, , B, , M, D] = A.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = D ? _o(parseInt(E, 10), D) : parseInt(E, 10), r.value = parseInt(B, 10), s.value = parseInt(M || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function p(A) {
    v.value === "hour" ? i.value = b.value ? _o(A, f.value) : A : v.value === "minute" ? r.value = A : s.value = A;
  }
  function T(A) {
    switch (v.value || "hour") {
      case "hour":
        n("update:hour", A);
        break;
      case "minute":
        n("update:minute", A);
        break;
      case "second":
        n("update:second", A);
        break;
    }
    const E = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || y() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), E && k());
  }
  le(() => {
    const A = Oe(ql.filterProps(e), ["hideHeader"]), E = xu.filterProps(e), B = wu.filterProps(Oe(e, ["format", "modelValue", "min", "max"])), M = v.value === "hour" ? h.value : v.value === "minute" ? (D) => x.value(i.value, D) : (D) => _.value(i.value, r.value, D);
    return g(ql, X(A, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? w("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => g(xu, X(E, { ampm: b.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (D) => i.value = D, "onUpdate:minute": (D) => r.value = D, "onUpdate:second": (D) => s.value = D, "onUpdate:period": (D) => f.value = D, "onUpdate:viewMode": (D) => v.value = D, ref: S }), null), default: () => g(wu, X(B, { allowedValues: M, double: v.value === "hour" && !b.value, format: v.value === "hour" ? b.value ? jb : (D) => D : (D) => on(D, 2), max: v.value === "hour" ? b.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && b.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: T, onInput: p, ref: m }), null), actions: a.actions });
  });
} }), _T = z({ ...ke(), ...bn({ variant: "text" }) }, "VToolbarItems"), IT = ee()({ name: "VToolbarItems", props: _T(), setup(e, t) {
  let { slots: n } = t;
  return ft({ VBtn: { color: F(() => e.color), height: "inherit", variant: F(() => e.variant) } }), le(() => {
    var _a3;
    return w("div", { class: ne(["v-toolbar-items", e.class]), style: ye(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), PT = z({ id: String, interactive: Boolean, text: String, ...Oe(fi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Gb = ee()({ name: "VTooltip", props: PT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ve(e, "modelValue"), { scopeId: l } = pl(), o = Mt(), i = F(() => e.id || `v-tooltip-${o}`), r = K(), s = V(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = V(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = F(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = V(() => X({ "aria-describedby": i.value }, e.activatorProps));
  return le(() => {
    const f = jn.filterProps(e);
    return g(jn, X({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, S = new Array(v), m = 0; m < v; m++) S[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...S)) ?? e.text;
    } });
  }), It({}, r);
} }), AT = z({ ...Oe(Ch({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Cu = ee()({ name: "VTreeviewGroup", props: AT(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = V(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = V(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return le(() => {
    const i = Uo.filterProps(e);
    return g(Uo, X(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => w(be, null, [g($e, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), Kb = Symbol.for("vuetify:v-treeview"), qb = z({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ie, ...Ih({ slim: true }) }, "VTreeviewItem"), Vu = ee()({ name: "VTreeviewItem", props: qb(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = He(Kb, { visibleIds: K() }).visibleIds, o = K(), i = V(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = V(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = V(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = V(() => {
    var _a3;
    return l.value && !l.value.has(Ee((_a3 = o.value) == null ? void 0 : _a3.id));
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
    const f = wn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return g(wn, X({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (S) => {
      var _a4;
      return w(be, null, [e.indentLines && e.indentLines.length > 0 ? w("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => w("div", { class: ne(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && g(Dc, { start: true }, { default: () => [e.toggleIcon ? w(be, null, [n.toggle ? g($e, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...S, loading: e.loading, props: { onClick: d } })] }) : g(Ne, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => g(Ea, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : w("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? g($e, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, S)];
      } }) : w(be, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, S), e.prependAvatar && g(gn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(je, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), It({}, o);
} }), Xb = z({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, falseIcon: Ie, trueIcon: Ie, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...tn(qb(), ["hideActions"]), ...vt() }, "VTreeviewChildren"), tr = ee()({ name: "VTreeviewChildren", props: Xb(), setup(e, t) {
  let { slots: n } = t;
  const a = At(/* @__PURE__ */ new Set()), l = K([]), o = V(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, v = a.has(s.value), S = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, b = c.length - 1 === u, h = { index: u, depth: m, isFirst: u === 0, isLast: b, path: [...e.path, u], hideAction: e.hideActions }, x = kw({ depth: m, isLast: b, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), _ = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return w(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && g(Dc, { start: true }, { default: () => [g(Tn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (p) => r(C.select, p), onClick: (p) => p.stopPropagation(), onKeydown: (p) => {
          ["Enter", "Space"].includes(p.key) && (p.stopPropagation(), r(C.select, C.isSelected));
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
      } : void 0 }, I = Cu.filterProps(f), k = tr.filterProps({ ...e, ...h }), y = { hideActions: e.hideActions, indentLines: x.footer };
      return d ? g(Cu, X(I, { value: e.returnObject ? s.raw : I == null ? void 0 : I.value, rawId: I == null ? void 0 : I.value }), { activator: (C) => {
        let { props: p, isOpen: T } = C;
        const A = { ...f, ...p, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: x.node, ariaExpanded: T, onToggleExpand: [() => i(s), p.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), p.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return ki(n.header, { props: A, item: s.raw, internalItem: s, loading: v }, () => g(Vu, X({ ref: (E) => l.value[u] = E }, A, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), _));
      }, default: () => {
        var _a5;
        return w(be, null, [g(tr, X(k, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: x.children, isLastGroup: S, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: y, item: s.raw, internalItem: s, loading: v })]);
      } }) : ki(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? ki(n.divider, { props: s.raw }, () => g(vn, s.props, null)) : s.type === "subheader" ? ki(n.subheader, { props: s.raw }, () => g(ao, s.props, null)) : g(Vu, X(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: x.leaf, value: e.returnObject ? Ee(s.raw) : f.value }), _));
    }));
  };
} });
function Zb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && Zb(n.children, t);
  return t;
}
const TT = z({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...kl({ filterKeys: ["title"] }), ...Oe(Xb(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Oe(Eh({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), DT = ee()({ name: "VTreeview", props: TT(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Qe(), { items: o } = Mh(e), i = F(() => e.activeColor), r = F(() => e.baseColor), s = F(() => e.color), u = Ve(e, "activated"), c = Ve(e, "selected"), d = V({ get: () => e.modelValue ?? c.value, set(I) {
    c.value = I, a("update:modelValue", I);
  } }), f = K(), v = V(() => e.openAll ? _(o.value) : e.opened), S = V(() => Zb(o.value)), m = F(() => e.search), { filteredItems: b } = wl(e, S, m), h = V(() => {
    var _a3;
    if (!m.value) return null;
    const I = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return I ? new Set(b.value.flatMap((k) => {
      const y = e.returnObject ? k.raw : k.props.value;
      return [...I(y), ...x(y)].map(Ee);
    })) : null;
  });
  function x(I) {
    var _a3, _b2;
    const k = [], y = (((_a3 = f.value) == null ? void 0 : _a3.children.get(I)) ?? []).slice();
    for (; y.length; ) {
      const C = y.shift();
      C && (k.push(C), y.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return k;
  }
  function _(I) {
    let k = [];
    for (const y of I) y.children && (k.push(e.returnObject ? Ee(y.raw) : y.value), y.children && (k = k.concat(_(y.children))));
    return k;
  }
  return rt(Kb, { visibleIds: h }), ft({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: F(() => e.collapseIcon), expandIcon: F(() => e.expandIcon) }, VTreeviewItem: { activeClass: F(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: F(() => e.density), disabled: F(() => e.disabled), lines: F(() => e.lines), variant: F(() => e.variant) } }), le(() => {
    const I = Gl.filterProps(e), k = tr.filterProps(e), y = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return g(Gl, X({ ref: f }, I, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(wn, { key: "no-data", title: l(e.noDataText) }, null)), g(tr, X(k, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: y }), n)];
    } });
  }), {};
} }), MT = ee()({ name: "VValidation", props: fh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = vh(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), ET = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: LC, VAlertTitle: lh, VApp: Nx, VAppBar: rC, VAppBarNavIcon: EC, VAppBarTitle: BC, VAutocomplete: oV, VAvatar: gn, VBadge: qh, VBanner: uV, VBannerActions: Xh, VBannerText: Zh, VBottomNavigation: dV, VBottomSheet: vV, VBreadcrumbs: yV, VBreadcrumbsDivider: Qh, VBreadcrumbsItem: ey, VBtn: Ne, VBtnGroup: Gs, VBtnToggle: vC, VCalendar: g_, VCard: k_, VCardActions: ky, VCardItem: Cy, VCardSubtitle: wy, VCardText: Vy, VCardTitle: xy, VCarousel: T_, VCarouselItem: M_, VCheckbox: KC, VCheckboxBtn: Tn, VChip: ca, VChipGroup: QC, VClassIcon: fc, VCode: E_, VCol: sP, VColorPicker: kI, VCombobox: xI, VComponentIcon: zs, VConfirmEdit: VI, VContainer: lP, VCounter: _r, VDataIterator: OI, VDataTable: JI, VDataTableFooter: Go, VDataTableHeaders: ul, VDataTableRow: id, VDataTableRows: cl, VDataTableServer: nP, VDataTableVirtual: eP, VDatePicker: pP, VDatePickerControls: vu, VDatePickerHeader: mu, VDatePickerMonth: gu, VDatePickerMonths: hu, VDatePickerYears: yu, VDefaultsProvider: $e, VDialog: tu, VDialogBottomTransition: jx, VDialogTopTransition: Ux, VDialogTransition: pr, VDivider: vn, VEmptyState: wP, VExpandBothTransition: Qx, VExpandTransition: kr, VExpandXTransition: kc, VExpansionPanel: xP, VExpansionPanelText: bu, VExpansionPanelTitle: Su, VExpansionPanels: _P, VFab: PP, VFabTransition: Wx, VFadeTransition: No, VField: $a, VFieldLabel: mo, VFileInput: BP, VFooter: $P, VForm: OP, VHotkey: zP, VHover: jP, VIcon: je, VImg: ua, VInfiniteScroll: YP, VInput: Rt, VItem: qP, VItemGroup: KP, VKbd: pu, VLabel: to, VLayout: ZP, VLayoutItem: QP, VLazy: tA, VLigatureIcon: Cw, VList: Gl, VListGroup: Uo, VListImg: k1, VListItem: wn, VListItemAction: Dc, VListItemMedia: C1, VListItemSubtitle: Vh, VListItemTitle: _h, VListSubheader: ao, VLocaleProvider: aA, VMain: oA, VMenu: Kl, VMessages: ch, VNavigationDrawer: mA, VNoSsr: gA, VNumberInput: pA, VOtpInput: wA, VOverlay: jn, VPagination: cu, VParallax: VA, VProgressCircular: Ea, VProgressLinear: wr, VRadio: IA, VRadioGroup: AA, VRangeSlider: DA, VRating: EA, VResponsive: js, VRow: gP, VScaleTransition: Sc, VScrollXReverseTransition: Gx, VScrollXTransition: Yx, VScrollYReverseTransition: qx, VScrollYTransition: Kx, VSelect: jc, VSelectionControl: Ba, VSelectionControlGroup: sh, VSheet: Fa, VSkeletonLoader: LA, VSlideGroup: jo, VSlideGroupItem: OA, VSlideXReverseTransition: Zx, VSlideXTransition: Xx, VSlideYReverseTransition: Jx, VSlideYTransition: pc, VSlider: uu, VSnackbar: ku, VSnackbarQueue: HA, VSpacer: fu, VSparkline: UA, VSpeedDial: GA, VStepper: eT, VStepperActions: Bb, VStepperHeader: Fb, VStepperItem: $b, VStepperWindow: Lb, VStepperWindowItem: Ob, VSvgIcon: dc, VSwitch: nT, VSystemBar: lT, VTab: Nb, VTable: dl, VTabs: uT, VTabsWindow: Hb, VTabsWindowItem: zb, VTextField: Un, VTextarea: dT, VThemeProvider: vT, VTimePicker: VT, VTimePickerClock: wu, VTimePickerControls: xu, VTimeline: bT, VTimelineItem: hT, VToolbar: Ys, VToolbarItems: IT, VToolbarTitle: hc, VTooltip: Gb, VTreeview: DT, VTreeviewGroup: Cu, VTreeviewItem: Vu, VValidation: MT, VVirtualScroll: Ir, VWindow: rl, VWindowItem: sl }, Symbol.toStringTag, { value: "Module" }));
function BT(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && Jb(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function Jb(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const FT = { mounted: BT, unmounted: Jb };
function Qb(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function eS(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function $T(e, t) {
  t.value !== t.oldValue && (eS(e, t), Qb(e, t));
}
const LT = { mounted: Qb, unmounted: eS, updated: $T };
function OT(e, t) {
  const n = typeof e == "string" ? Ge(e) : e, a = RT(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    tg(null, l);
  } };
}
function RT(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = ol(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = NT(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = va(e, X(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), tg(c, n);
  };
}
function NT(e, t) {
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
const HT = OT(Gb, (e) => {
  var _a3;
  return { activator: (ol(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), zT = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: eu, Intersect: An, Mutate: FT, Resize: Yo, Ripple: $t, Scroll: LT, Tooltip: HT, Touch: er }, Symbol.toStringTag, { value: "Module" })), WT = zg({ components: ET, directives: zT, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
p0(Ak).use(WT).mount("#app");
