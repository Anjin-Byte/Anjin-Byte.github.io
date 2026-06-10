(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: true, subtree: true });
  function n(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(i) {
    if (i.ep) return;
    i.ep = true;
    const o = n(i);
    fetch(i.href, o);
  }
})();
/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Me = {}, Kn = [], Ut = () => {
}, lu = () => false, so = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ws = (e) => e.startsWith("onUpdate:"), ze = Object.assign, Gs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sh = Object.prototype.hasOwnProperty, xe = (e, t) => Sh.call(e, t), ie = Array.isArray, Yn = (e) => ui(e) === "[object Map]", cu = (e) => ui(e) === "[object Set]", za = (e) => ui(e) === "[object Date]", fe = (e) => typeof e == "function", He = (e) => typeof e == "string", Tt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", uu = (e) => (Se(e) || fe(e)) && fe(e.then) && fe(e.catch), fu = Object.prototype.toString, ui = (e) => fu.call(e), Ch = (e) => ui(e).slice(8, -1), du = (e) => ui(e) === "[object Object]", ao = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rr = zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), lo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, xh = /-\w/g, wt = lo((e) => e.replace(xh, (t) => t.slice(1).toUpperCase())), Lh = /\B([A-Z])/g, Vn = lo((e) => e.replace(Lh, "-$1").toLowerCase()), mr = lo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mo = lo((e) => e ? `on${mr(e)}` : ""), mn = (e, t) => !Object.is(e, t), To = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, hu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, Ah = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Eh = (e) => {
  const t = He(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wa;
const co = () => Wa || (Wa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ne(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = He(r) ? Ph(r) : Ne(r);
      if (i) for (const o in i) t[o] = i[o];
    }
    return t;
  } else if (He(e) || Se(e)) return e;
}
const kh = /;(?![^(]*\))/g, Mh = /:([^]+)/, Th = /\/\*[^]*?\*\//g;
function Ph(e) {
  const t = {};
  return e.replace(Th, "").split(kh).forEach((n) => {
    if (n) {
      const r = n.split(Mh);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Le(e) {
  let t = "";
  if (He(e)) t = e;
  else if (ie(e)) for (let n = 0; n < e.length; n++) {
    const r = Le(e[n]);
    r && (t += r + " ");
  }
  else if (Se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ih = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rh = zs(Ih);
function mu(e) {
  return !!e || e === "";
}
function Oh(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let r = 0; n && r < e.length; r++) n = Us(e[r], t[r]);
  return n;
}
function Us(e, t) {
  if (e === t) return true;
  let n = za(e), r = za(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : false;
  if (n = Tt(e), r = Tt(t), n || r) return e === t;
  if (n = ie(e), r = ie(t), n || r) return n && r ? Oh(e, t) : false;
  if (n = Se(e), r = Se(t), n || r) {
    if (!n || !r) return false;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o) return false;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Us(e[s], t[s])) return false;
    }
  }
  return String(e) === String(t);
}
const gu = (e) => !!(e && e.__v_isRef === true), be = (e) => He(e) ? e : e == null ? "" : ie(e) || Se(e) && (e.toString === fu || !fe(e.toString)) ? gu(e) ? be(e.value) : JSON.stringify(e, vu, 2) : String(e), vu = (e, t) => gu(t) ? vu(e, t.value) : Yn(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], o) => (n[Po(r, o) + " =>"] = i, n), {}) } : cu(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Po(n)) } : Tt(t) ? Po(t) : Se(t) && !ie(t) && !du(t) ? String(t) : t, Po = (e, t = "") => {
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
const Io = /* @__PURE__ */ new WeakSet();
class bu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Io.has(this) && (Io.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _u(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Ga(this), Su(this);
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
      for (let t = this.deps; t; t = t.nextDep) Ys(t);
      this.deps = this.depsTail = void 0, Ga(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ss(this) && this.run();
  }
  get dirty() {
    return ss(this);
  }
}
let wu = 0, Or, Vr;
function _u(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Vr, Vr = e;
    return;
  }
  e.next = Or, Or = e;
}
function Zs() {
  wu++;
}
function Ks() {
  if (--wu > 0) return;
  if (Vr) {
    let t = Vr;
    for (Vr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Or; ) {
    let t = Or;
    for (Or = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = i), Ys(r), Vh(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function ss(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (xu(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function xu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ur) || (e.globalVersion = Ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ss(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = Ie, r = kt;
  Ie = e, kt = true;
  try {
    Su(e);
    const i = e.fn(e._value);
    (t.version === 0 || mn(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Ie = n, kt = r, Cu(e), e.flags &= -3;
  }
}
function Ys(e, t = false) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Ys(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vh(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kt = true;
const Lu = [];
function nn() {
  Lu.push(kt), kt = false;
}
function rn() {
  const e = Lu.pop();
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
let Ur = 0;
class Dh {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!Ie || !kt || Ie === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ie) n = this.activeLink = new Dh(Ie, this), Ie.deps ? (n.prevDep = Ie.depsTail, Ie.depsTail.nextDep = n, Ie.depsTail = n) : Ie.deps = Ie.depsTail = n, Au(n);
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
    Zs();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ks();
    }
  }
}
function Au(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Au(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Fi = /* @__PURE__ */ new WeakMap(), kn = Symbol(""), as = Symbol(""), Zr = Symbol("");
function et(e, t, n) {
  if (kt && Ie) {
    let r = Fi.get(e);
    r || Fi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new qs()), i.map = r, i.key = n), i.track();
  }
}
function en(e, t, n, r, i, o) {
  const s = Fi.get(e);
  if (!s) {
    Ur++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Zs(), t === "clear") s.forEach(a);
  else {
    const l = ie(e), u = l && ao(n);
    if (l && n === "length") {
      const c = Number(r);
      s.forEach((f, d) => {
        (d === "length" || d === Zr || !Tt(d) && d >= c) && a(f);
      });
    } else switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Zr)), t) {
      case "add":
        l ? u && a(s.get("length")) : (a(s.get(kn)), Yn(e) && a(s.get(as)));
        break;
      case "delete":
        l || (a(s.get(kn)), Yn(e) && a(s.get(as)));
        break;
      case "set":
        Yn(e) && a(s.get(kn));
        break;
    }
  }
  Ks();
}
function Hh(e, t) {
  const n = Fi.get(e);
  return n && n.get(t);
}
function Fn(e) {
  const t = ee(e);
  return t === e ? t : (et(t, "iterate", Zr), bt(e) ? t : t.map(Pt));
}
function uo(e) {
  return et(e = ee(e), "iterate", Zr), e;
}
function fn(e, t) {
  return on(e) ? ir(Mn(e) ? Pt(t) : t) : Pt(t);
}
const Nh = { __proto__: null, [Symbol.iterator]() {
  return Ro(this, Symbol.iterator, (e) => fn(this, e));
}, concat(...e) {
  return Fn(this).concat(...e.map((t) => ie(t) ? Fn(t) : t));
}, entries() {
  return Ro(this, "entries", (e) => (e[1] = fn(this, e[1]), e));
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
  return Oo(this, "includes", e);
}, indexOf(...e) {
  return Oo(this, "indexOf", e);
}, join(e) {
  return Fn(this).join(e);
}, lastIndexOf(...e) {
  return Oo(this, "lastIndexOf", e);
}, map(e, t) {
  return Yt(this, "map", e, t, void 0, arguments);
}, pop() {
  return xr(this, "pop");
}, push(...e) {
  return xr(this, "push", e);
}, reduce(e, ...t) {
  return Ua(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Ua(this, "reduceRight", e, t);
}, shift() {
  return xr(this, "shift");
}, some(e, t) {
  return Yt(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return xr(this, "splice", e);
}, toReversed() {
  return Fn(this).toReversed();
}, toSorted(e) {
  return Fn(this).toSorted(e);
}, toSpliced(...e) {
  return Fn(this).toSpliced(...e);
}, unshift(...e) {
  return xr(this, "unshift", e);
}, values() {
  return Ro(this, "values", (e) => fn(this, e));
} };
function Ro(e, t, n) {
  const r = uo(e), i = r[t]();
  return r !== e && !bt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const Fh = Array.prototype;
function Yt(e, t, n, r, i, o) {
  const s = uo(e), a = s !== e && !bt(e), l = s[t];
  if (l !== Fh[t]) {
    const f = l.apply(e, o);
    return a ? Pt(f) : f;
  }
  let u = n;
  s !== e && (a ? u = function(f, d) {
    return n.call(this, fn(e, f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const c = l.call(s, u, r);
  return a && i ? i(c) : c;
}
function Ua(e, t, n, r) {
  const i = uo(e);
  let o = n;
  return i !== e && (bt(e) ? n.length > 3 && (o = function(s, a, l) {
    return n.call(this, s, a, l, e);
  }) : o = function(s, a, l) {
    return n.call(this, s, fn(e, a), l, e);
  }), i[t](o, ...r);
}
function Oo(e, t, n) {
  const r = ee(e);
  et(r, "iterate", Zr);
  const i = r[t](...n);
  return (i === -1 || i === false) && fo(n[0]) ? (n[0] = ee(n[0]), r[t](...n)) : i;
}
function xr(e, t, n = []) {
  nn(), Zs();
  const r = ee(e)[t].apply(e, n);
  return Ks(), rn(), r;
}
const $h = zs("__proto__,__v_isRef,__isVue"), Eu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tt));
function Bh(e) {
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
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return r === (i ? o ? Xh : Iu : o ? Pu : Tu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = ie(t);
    if (!i) {
      let l;
      if (s && (l = Nh[n])) return l;
      if (n === "hasOwnProperty") return Bh;
    }
    const a = Reflect.get(t, n, De(t) ? t : r);
    if ((Tt(n) ? Eu.has(n) : $h(n)) || (i || et(t, "get", n), o)) return a;
    if (De(a)) {
      const l = s && ao(n) ? a : a.value;
      return i && Se(l) ? rr(l) : l;
    }
    return Se(a) ? i ? rr(a) : Ke(a) : a;
  }
}
class Mu extends ku {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = ie(t) && ao(n);
    if (!this._isShallow) {
      const u = on(o);
      if (!bt(r) && !on(r) && (o = ee(o), r = ee(r)), !s && De(o) && !De(r)) return u || (o.value = r), true;
    }
    const a = s ? Number(n) < t.length : xe(t, n), l = Reflect.set(t, n, r, De(t) ? t : i);
    return t === ee(i) && (a ? mn(r, o) && en(t, "set", n, r) : en(t, "add", n, r)), l;
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
class jh extends ku {
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
const zh = new Mu(), Wh = new jh(), Gh = new Mu(true);
const ls = (e) => e, Ei = (e) => Reflect.getPrototypeOf(e);
function Uh(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = ee(i), s = Yn(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, u = i[e](...r), c = n ? ls : t ? ir : Pt;
    return !t && et(o, "iterate", l ? as : kn), ze(Object.create(u), { next() {
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
function Zh(e, t) {
  const n = { get(i) {
    const o = this.__v_raw, s = ee(o), a = ee(i);
    e || (mn(i, a) && et(s, "get", i), et(s, "get", a));
    const { has: l } = Ei(s), u = t ? ls : e ? ir : Pt;
    if (l.call(s, i)) return u(o.get(i));
    if (l.call(s, a)) return u(o.get(a));
    o !== s && o.get(i);
  }, get size() {
    const i = this.__v_raw;
    return !e && et(ee(i), "iterate", kn), i.size;
  }, has(i) {
    const o = this.__v_raw, s = ee(o), a = ee(i);
    return e || (mn(i, a) && et(s, "has", i), et(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
  }, forEach(i, o) {
    const s = this, a = s.__v_raw, l = ee(a), u = t ? ls : e ? ir : Pt;
    return !e && et(l, "iterate", kn), a.forEach((c, f) => i.call(o, u(c), u(f), s));
  } };
  return ze(n, e ? { add: ki("add"), set: ki("set"), delete: ki("delete"), clear: ki("clear") } : { add(i) {
    !t && !bt(i) && !on(i) && (i = ee(i));
    const o = ee(this);
    return Ei(o).has.call(o, i) || (o.add(i), en(o, "add", i, i)), this;
  }, set(i, o) {
    !t && !bt(o) && !on(o) && (o = ee(o));
    const s = ee(this), { has: a, get: l } = Ei(s);
    let u = a.call(s, i);
    u || (i = ee(i), u = a.call(s, i));
    const c = l.call(s, i);
    return s.set(i, o), u ? mn(o, c) && en(s, "set", i, o) : en(s, "add", i, o), this;
  }, delete(i) {
    const o = ee(this), { has: s, get: a } = Ei(o);
    let l = s.call(o, i);
    l || (i = ee(i), l = s.call(o, i)), a && a.call(o, i);
    const u = o.delete(i);
    return l && en(o, "delete", i, void 0), u;
  }, clear() {
    const i = ee(this), o = i.size !== 0, s = i.clear();
    return o && en(i, "clear", void 0, void 0), s;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = Uh(i, e, t);
  }), n;
}
function Xs(e, t) {
  const n = Zh(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(xe(n, i) && i in r ? n : r, i, o);
}
const Kh = { get: Xs(false, false) }, Yh = { get: Xs(false, true) }, qh = { get: Xs(true, false) };
const Tu = /* @__PURE__ */ new WeakMap(), Pu = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Xh = /* @__PURE__ */ new WeakMap();
function Jh(e) {
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
function Qh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jh(Ch(e));
}
function Ke(e) {
  return on(e) ? e : Js(e, false, zh, Kh, Tu);
}
function Ru(e) {
  return Js(e, false, Gh, Yh, Pu);
}
function rr(e) {
  return Js(e, true, Wh, qh, Iu);
}
function Js(e, t, n, r, i) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = Qh(e);
  if (o === 0) return e;
  const s = i.get(e);
  if (s) return s;
  const a = new Proxy(e, o === 2 ? r : n);
  return i.set(e, a), a;
}
function Mn(e) {
  return on(e) ? Mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function on(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function fo(e) {
  return e ? !!e.__v_raw : false;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function em(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && hu(e, "__v_skip", true), e;
}
const Pt = (e) => Se(e) ? Ke(e) : e, ir = (e) => Se(e) ? rr(e) : e;
function De(e) {
  return e ? e.__v_isRef === true : false;
}
function X(e) {
  return Ou(e, false);
}
function ce(e) {
  return Ou(e, true);
}
function Ou(e, t) {
  return De(e) ? e : new tm(e, t);
}
class tm {
  constructor(t, n) {
    this.dep = new qs(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ee(t), this._value = n ? t : Pt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || bt(t) || on(t);
    t = r ? t : ee(t), mn(t, n) && (this._rawValue = t, this._value = r ? t : Pt(t), this.dep.trigger());
  }
}
function ue(e) {
  return De(e) ? e.value : e;
}
function rt(e) {
  return fe(e) ? e() : ue(e);
}
const nm = { get: (e, t, n) => t === "__v_raw" ? e : ue(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const i = e[t];
  return De(i) && !De(n) ? (i.value = n, true) : Reflect.set(e, t, n, r);
} };
function Vu(e) {
  return Mn(e) ? e : new Proxy(e, nm);
}
function Du(e) {
  const t = ie(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Hu(e, n);
  return t;
}
class rm {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = ee(t);
    let i = true, o = t;
    if (!ie(t) || !ao(String(n))) do
      i = !fo(o) || bt(o);
    while (i && (o = o.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ue(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && De(this._raw[this._key])) {
      const n = this._object[this._key];
      if (De(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Hh(this._raw, this._key);
  }
}
class im {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function F(e, t, n) {
  return De(e) ? e : fe(e) ? new im(e) : Se(e) && arguments.length > 1 ? Hu(e, t, n) : X(e);
}
function Hu(e, t, n) {
  return new rm(e, t, n);
}
class om {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qs(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
function sm(e, t, n = false) {
  let r, i;
  return fe(e) ? r = e : (r = e.get, i = e.set), new om(r, i, n);
}
const Mi = {}, $i = /* @__PURE__ */ new WeakMap();
let xn;
function am(e, t = false, n = xn) {
  if (n) {
    let r = $i.get(n);
    r || $i.set(n, r = []), r.push(e);
  }
}
function lm(e, t, n = Me) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = n, u = (w) => i ? w : bt(w) || i === false || i === 0 ? tn(w, 1) : tn(w);
  let c, f, d, h, b = false, m = false;
  if (De(e) ? (f = () => e.value, b = bt(e)) : Mn(e) ? (f = () => u(e), b = true) : ie(e) ? (m = true, b = e.some((w) => Mn(w) || bt(w)), f = () => e.map((w) => {
    if (De(w)) return w.value;
    if (Mn(w)) return u(w);
    if (fe(w)) return l ? l(w, 2) : w();
  })) : fe(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (d) {
      nn();
      try {
        d();
      } finally {
        rn();
      }
    }
    const w = xn;
    xn = c;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      xn = w;
    }
  } : f = Ut, t && i) {
    const w = f, S = i === true ? 1 / 0 : i;
    f = () => tn(w(), S);
  }
  const _ = yu(), v = () => {
    c.stop(), _ && _.active && Gs(_.effects, c);
  };
  if (o && t) {
    const w = t;
    t = (...S) => {
      w(...S), v();
    };
  }
  let y = m ? new Array(e.length).fill(Mi) : Mi;
  const A = (w) => {
    if (!(!(c.flags & 1) || !c.dirty && !w)) if (t) {
      const S = c.run();
      if (i || b || (m ? S.some((x, T) => mn(x, y[T])) : mn(S, y))) {
        d && d();
        const x = xn;
        xn = c;
        try {
          const T = [S, y === Mi ? void 0 : m && y[0] === Mi ? [] : y, h];
          y = S, l ? l(t, 3, T) : t(...T);
        } finally {
          xn = x;
        }
      }
    } else c.run();
  };
  return a && a(A), c = new bu(f), c.scheduler = s ? () => s(A, false) : A, h = (w) => am(w, false, c), d = c.onStop = () => {
    const w = $i.get(c);
    if (w) {
      if (l) l(w, 4);
      else for (const S of w) S();
      $i.delete(c);
    }
  }, t ? r ? A(true) : y = c.run() : s ? s(A.bind(null, true), true) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function tn(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, De(e)) tn(e.value, t, n);
  else if (ie(e)) for (let r = 0; r < e.length; r++) tn(e[r], t, n);
  else if (cu(e) || Yn(e)) e.forEach((r) => {
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
    ho(i, t, n);
  }
}
function It(e, t, n, r) {
  if (fe(e)) {
    const i = fi(e, t, n, r);
    return i && uu(i) && i.catch((o) => {
      ho(o, t, n);
    }), i;
  }
  if (ie(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++) i.push(It(e[o], t, n, r));
    return i;
  }
}
function ho(e, t, n, r = true) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Me;
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
    if (o) {
      nn(), fi(o, null, 10, [e, l, u]), rn();
      return;
    }
  }
  cm(e, n, i, r, s);
}
function cm(e, t, n, r = true, i = false) {
  if (i) throw e;
  console.error(e);
}
const at = [];
let jt = -1;
const qn = [];
let dn = null, zn = 0;
const Nu = Promise.resolve();
let Bi = null;
function ht(e) {
  const t = Bi || Nu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function um(e) {
  let t = jt + 1, n = at.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = at[r], o = Kr(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Qs(e) {
  if (!(e.flags & 1)) {
    const t = Kr(e), n = at[at.length - 1];
    !n || !(e.flags & 2) && t >= Kr(n) ? at.push(e) : at.splice(um(t), 0, e), e.flags |= 1, Fu();
  }
}
function Fu() {
  Bi || (Bi = Nu.then(Bu));
}
function fm(e) {
  ie(e) ? qn.push(...e) : dn && e.id === -1 ? dn.splice(zn + 1, 0, e) : e.flags & 1 || (qn.push(e), e.flags |= 1), Fu();
}
function Za(e, t, n = jt + 1) {
  for (; n < at.length; n++) {
    const r = at[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      at.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function $u(e) {
  if (qn.length) {
    const t = [...new Set(qn)].sort((n, r) => Kr(n) - Kr(r));
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
const Kr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bu(e) {
  try {
    for (jt = 0; jt < at.length; jt++) {
      const t = at[jt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jt < at.length; jt++) {
      const t = at[jt];
      t && (t.flags &= -2);
    }
    jt = -1, at.length = 0, $u(), Bi = null, (at.length || qn.length) && Bu();
  }
}
let Ye = null, ju = null;
function ji(e) {
  const t = Ye;
  return Ye = e, ju = e && e.type.__scopeId || null, t;
}
function Ve(e, t = Ye, n) {
  if (!t || e._n) return e;
  const r = (...i) => {
    r._d && Gi(-1);
    const o = ji(t);
    let s;
    try {
      s = e(...i);
    } finally {
      ji(o), r._d && Gi(1);
    }
    return s;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function or(e, t) {
  if (Ye === null) return e;
  const n = yo(Ye), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Me] = t[i];
    o && (fe(o) && (o = { mounted: o, updated: o }), o.deep && tn(s), r.push({ dir: o, instance: n, value: s, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function yn(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
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
  const r = mi();
  if (r || Jn) {
    let i = Jn ? Jn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && fe(t) ? t.call(r && r.proxy) : t;
  }
}
const dm = Symbol.for("v-scx"), hm = () => ke(dm);
function sn(e, t) {
  return ea(e, null, t);
}
function te(e, t, n) {
  return ea(e, t, n);
}
function ea(e, t, n = Me) {
  const { immediate: r, deep: i, flush: o, once: s } = n, a = ze({}, n), l = t && r || !t && o !== "post";
  let u;
  if (Qr) {
    if (o === "sync") {
      const h = hm();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Ut, h.resume = Ut, h.pause = Ut, h;
    }
  }
  const c = nt;
  a.call = (h, b, m) => It(h, c, b, m);
  let f = false;
  o === "post" ? a.scheduler = (h) => {
    Je(h, c && c.suspense);
  } : o !== "sync" && (f = true, a.scheduler = (h, b) => {
    b ? h() : Qs(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const d = lm(e, t, a);
  return Qr && (u ? u.push(d) : l && d()), d;
}
function mm(e, t, n) {
  const r = this.proxy, i = He(e) ? e.includes(".") ? zu(r, e) : () => r[e] : e.bind(r, r);
  let o;
  fe(t) ? o = t : (o = t.handler, n = t);
  const s = gi(this), a = ea(i, o.bind(r), n);
  return s(), a;
}
function zu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
const Wu = Symbol("_vte"), Gu = (e) => e.__isTeleport, Dr = (e) => e && (e.disabled || e.disabled === ""), Ka = (e) => e && (e.defer || e.defer === ""), Ya = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cs = (e, t) => {
  const n = e && e.to;
  return He(n) ? t ? t(n) : null : n;
}, Uu = { name: "Teleport", __isTeleport: true, process(e, t, n, r, i, o, s, a, l, u) {
  const { mc: c, pc: f, pbc: d, o: { insert: h, querySelector: b, createText: m, createComment: _ } } = u, v = Dr(t.props);
  let { shapeFlag: y, children: A, dynamicChildren: w } = t;
  if (e == null) {
    const S = t.el = m(""), x = t.anchor = m("");
    h(S, n, r), h(x, n, r);
    const T = (k, V) => {
      y & 16 && c(A, k, V, i, o, s, a, l);
    }, C = () => {
      const k = t.target = cs(t.props, b), V = us(k, t, m, h);
      k && (s !== "svg" && Ya(k) ? s = "svg" : s !== "mathml" && qa(k) && (s = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(k), v || (T(k, V), Oi(t, false)));
    };
    v && (T(n, x), Oi(t, true)), Ka(t.props) ? (t.el.__isMounted = false, Je(() => {
      C(), delete t.el.__isMounted;
    }, o)) : C();
  } else {
    if (Ka(t.props) && e.el.__isMounted === false) {
      Je(() => {
        Uu.process(e, t, n, r, i, o, s, a, l, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const S = t.anchor = e.anchor, x = t.target = e.target, T = t.targetAnchor = e.targetAnchor, C = Dr(e.props), k = C ? n : x, V = C ? S : T;
    if (s === "svg" || Ya(x) ? s = "svg" : (s === "mathml" || qa(x)) && (s = "mathml"), w ? (d(e.dynamicChildren, w, k, i, o, s, a), sa(e, t, true)) : l || f(e, t, k, V, i, o, s, a, false), v) C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ti(t, n, S, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const j = t.target = cs(t.props, b);
      j && Ti(t, j, null, u, 0);
    } else C && Ti(t, x, T, u, 1);
    Oi(t, v);
  }
}, remove(e, t, n, { um: r, o: { remove: i } }, o) {
  const { shapeFlag: s, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
  if (f && (i(u), i(c)), o && i(l), s & 16) {
    const h = o || !Dr(d);
    for (let b = 0; b < a.length; b++) {
      const m = a[b];
      r(m, t, n, h, !!m.dynamicChildren);
    }
  }
}, move: Ti, hydrate: gm };
function Ti(e, t, n, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: a, shapeFlag: l, children: u, props: c } = e, f = o === 2;
  if (f && r(s, t, n), (!f || Dr(c)) && l & 16) for (let d = 0; d < u.length; d++) i(u[d], t, n, 2);
  f && r(a, t, n);
}
function gm(e, t, n, r, i, o, { o: { nextSibling: s, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
  function d(_, v) {
    let y = v;
    for (; y; ) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor") t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, _._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      y = s(y);
    }
  }
  function h(_, v) {
    v.anchor = f(s(_), v, a(_), n, r, i, o);
  }
  const b = t.target = cs(t.props, l), m = Dr(t.props);
  if (b) {
    const _ = b._lpa || b.firstChild;
    t.shapeFlag & 16 && (m ? (h(e, t), d(b, _), t.targetAnchor || us(b, t, c, u, a(e) === b ? e : null)) : (t.anchor = s(e), d(b, _), t.targetAnchor || us(b, t, c, u), f(_ && s(_), t, b, n, r, i, o))), Oi(t, m);
  } else m && t.shapeFlag & 16 && (h(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const vm = Uu;
function Oi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function us(e, t, n, r, i = null) {
  const o = t.targetStart = n(""), s = t.targetAnchor = n("");
  return o[Wu] = s, e && (r(o, e, i), r(s, e, i)), s;
}
const zt = Symbol("_leaveCb"), Lr = Symbol("_enterCb");
function Zu() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Ot(() => {
    e.isMounted = true;
  }), At(() => {
    e.isUnmounting = true;
  }), e;
}
const Ct = [Function, Array], Ku = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Ct, onEnter: Ct, onAfterEnter: Ct, onEnterCancelled: Ct, onBeforeLeave: Ct, onLeave: Ct, onAfterLeave: Ct, onLeaveCancelled: Ct, onBeforeAppear: Ct, onAppear: Ct, onAfterAppear: Ct, onAppearCancelled: Ct }, Yu = (e) => {
  const t = e.subTree;
  return t.component ? Yu(t.component) : t;
}, pm = { name: "BaseTransition", props: Ku, setup(e, { slots: t }) {
  const n = mi(), r = Zu();
  return () => {
    const i = t.default && ta(t.default(), true);
    if (!i || !i.length) return;
    const o = qu(i), s = ee(e), { mode: a } = s;
    if (r.isLeaving) return Vo(o);
    const l = Xa(o);
    if (!l) return Vo(o);
    let u = Yr(l, s, r, n, (f) => u = f);
    l.type !== tt && Rn(l, u);
    let c = n.subTree && Xa(n.subTree);
    if (c && c.type !== tt && !An(c, l) && Yu(n).type !== tt) {
      let f = Yr(c, s, r, n);
      if (Rn(c, f), a === "out-in" && l.type !== tt) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, Vo(o);
      a === "in-out" && l.type !== tt ? f.delayLeave = (d, h, b) => {
        const m = Xu(r, c);
        m[String(c.key)] = c, d[zt] = () => {
          h(), d[zt] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          b(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
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
const ym = pm;
function Xu(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Yr(e, t, n, r, i) {
  const { appear: o, mode: s, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: b, onLeaveCancelled: m, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: A } = t, w = String(e.key), S = Xu(n, e), x = (k, V) => {
    k && It(k, r, 9, V);
  }, T = (k, V) => {
    const j = V[1];
    x(k, V), ie(k) ? k.every((I) => I.length <= 1) && j() : k.length <= 1 && j();
  }, C = { mode: s, persisted: a, beforeEnter(k) {
    let V = l;
    if (!n.isMounted) if (o) V = _ || l;
    else return;
    k[zt] && k[zt](true);
    const j = S[w];
    j && An(e, j) && j.el[zt] && j.el[zt](), x(V, [k]);
  }, enter(k) {
    if (S[w] === e) return;
    let V = u, j = c, I = f;
    if (!n.isMounted) if (o) V = v || u, j = y || c, I = A || f;
    else return;
    let $ = false;
    k[Lr] = (Y) => {
      $ || ($ = true, Y ? x(I, [k]) : x(j, [k]), C.delayedLeave && C.delayedLeave(), k[Lr] = void 0);
    };
    const q = k[Lr].bind(null, false);
    V ? T(V, [k, q]) : q();
  }, leave(k, V) {
    const j = String(e.key);
    if (k[Lr] && k[Lr](true), n.isUnmounting) return V();
    x(d, [k]);
    let I = false;
    k[zt] = (q) => {
      I || (I = true, V(), q ? x(m, [k]) : x(b, [k]), k[zt] = void 0, S[j] === e && delete S[j]);
    };
    const $ = k[zt].bind(null, false);
    S[j] = e, h ? T(h, [k, $]) : $();
  }, clone(k) {
    const V = Yr(k, t, n, r, i);
    return i && i(V), V;
  } };
  return C;
}
function Vo(e) {
  if (mo(e)) return e = gn(e), e.children = null, e;
}
function Xa(e) {
  if (!mo(e)) return Gu(e.type) && e.children ? qu(e.children) : e;
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
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === ye ? (s.patchFlag & 128 && i++, r = r.concat(ta(s.children, t, a))) : (t || s.type !== tt) && r.push(a != null ? gn(s, { key: a }) : s);
  }
  if (i > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
function Xe(e, t) {
  return fe(e) ? ze({ name: e.name }, t, { setup: e }) : e;
}
function gr() {
  const e = mi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Ju(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ja(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zi = /* @__PURE__ */ new WeakMap();
function Hr(e, t, n, r, i = false) {
  if (ie(e)) {
    e.forEach((m, _) => Hr(m, t && (ie(t) ? t[_] : t), n, r, i));
    return;
  }
  if (Xn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Hr(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? yo(r.component) : r.el, s = i ? null : o, { i: a, r: l } = e, u = t && t.r, c = a.refs === Me ? a.refs = {} : a.refs, f = a.setupState, d = ee(f), h = f === Me ? lu : (m) => Ja(c, m) ? false : xe(d, m), b = (m, _) => !(_ && Ja(c, _));
  if (u != null && u !== l) {
    if (Qa(t), He(u)) c[u] = null, h(u) && (f[u] = null);
    else if (De(u)) {
      const m = t;
      b(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (fe(l)) fi(l, a, 12, [s, c]);
  else {
    const m = He(l), _ = De(l);
    if (m || _) {
      const v = () => {
        if (e.f) {
          const y = m ? h(l) ? f[l] : c[l] : b() || !e.k ? l.value : c[e.k];
          if (i) ie(y) && Gs(y, o);
          else if (ie(y)) y.includes(o) || y.push(o);
          else if (m) c[l] = [o], h(l) && (f[l] = c[l]);
          else {
            const A = [o];
            b(l, e.k) && (l.value = A), e.k && (c[e.k] = A);
          }
        } else m ? (c[l] = s, h(l) && (f[l] = s)) : _ && (b(l, e.k) && (l.value = s), e.k && (c[e.k] = s));
      };
      if (s) {
        const y = () => {
          v(), zi.delete(e);
        };
        y.id = -1, zi.set(e, y), Je(y, n);
      } else Qa(e), v();
    }
  }
}
function Qa(e) {
  const t = zi.get(e);
  t && (t.flags |= 8, zi.delete(e));
}
co().requestIdleCallback;
co().cancelIdleCallback;
const Xn = (e) => !!e.type.__asyncLoader, mo = (e) => e.type.__isKeepAlive;
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
  if (go(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) mo(i.parent.vnode) && bm(r, t, n, i), i = i.parent;
  }
}
function bm(e, t, n, r) {
  const i = go(t, e, r, true);
  di(() => {
    Gs(r[t], i);
  }, n);
}
function go(e, t, n = nt, r = false) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      nn();
      const a = gi(n), l = It(t, n, e, s);
      return a(), rn(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const an = (e) => (t, n = nt) => {
  (!Qr || e === "sp") && go(e, (...r) => t(...r), n);
}, vo = an("bm"), Ot = an("m"), wm = an("bu"), ra = an("u"), At = an("bum"), di = an("um"), _m = an("sp"), Sm = an("rtg"), Cm = an("rtc");
function xm(e, t = nt) {
  go("ec", e, t);
}
const Lm = "components", Am = Symbol.for("v-ndc");
function Em(e) {
  return He(e) && km(Lm, e, false) || e;
}
function km(e, t, n = true, r = false) {
  const i = Ye || nt;
  if (i) {
    const o = i.type;
    {
      const a = dg(o, false);
      if (a && (a === t || a === wt(t) || a === mr(wt(t)))) return o;
    }
    const s = el(i[e] || o[e], t) || el(i.appContext[e], t);
    return !s && r ? o : s;
  }
}
function el(e, t) {
  return e && (e[t] || e[wt(t)] || e[mr(wt(t))]);
}
function dt(e, t, n, r) {
  let i;
  const o = n, s = ie(e);
  if (s || He(e)) {
    const a = s && Mn(e);
    let l = false, u = false;
    a && (l = !bt(e), u = on(e), e = uo(e)), i = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++) i[c] = t(l ? u ? ir(Pt(e[c])) : Pt(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, o);
  } else if (Se(e)) if (e[Symbol.iterator]) i = Array.from(e, (a, l) => t(a, l, void 0, o));
  else {
    const a = Object.keys(e);
    i = new Array(a.length);
    for (let l = 0, u = a.length; l < u; l++) {
      const c = a[l];
      i[l] = t(e[c], c, l, o);
    }
  }
  else i = [];
  return i;
}
function Mm(e, t, n = {}, r, i) {
  if (Ye.ce || Ye.parent && Xn(Ye.parent) && Ye.parent.ce) {
    const u = Object.keys(n).length > 0;
    return se(), On(ye, null, [M("slot", n, r)], u ? -2 : 64);
  }
  let o = e[t];
  o && o._c && (o._d = false), se();
  const s = o && tf(o(n)), a = n.key || s && s.key, l = On(ye, { key: (a && !Tt(a) ? a : `_${t}`) + (!s && r ? "_fb" : "") }, s || [], s && e._ === 1 ? 64 : -2);
  return o && o._c && (o._d = true), l;
}
function tf(e) {
  return e.some((t) => Xr(t) ? !(t.type === tt || t.type === ye && !tf(t.children)) : true) ? e : null;
}
const fs = (e) => e ? _f(e) ? yo(e) : fs(e.parent) : null, Nr = ze(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => fs(e.parent), $root: (e) => fs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => rf(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Qs(e.update);
}), $nextTick: (e) => e.n || (e.n = ht.bind(e.proxy)), $watch: (e) => mm.bind(e) }), Do = (e, t) => e !== Me && !e.__isScriptSetup && xe(e, t), Tm = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: a, appContext: l } = e;
  if (t[0] !== "$") {
    const d = s[t];
    if (d !== void 0) switch (d) {
      case 1:
        return r[t];
      case 2:
        return i[t];
      case 4:
        return n[t];
      case 3:
        return o[t];
    }
    else {
      if (Do(r, t)) return s[t] = 1, r[t];
      if (i !== Me && xe(i, t)) return s[t] = 2, i[t];
      if (xe(o, t)) return s[t] = 3, o[t];
      if (n !== Me && xe(n, t)) return s[t] = 4, n[t];
      ds && (s[t] = 0);
    }
  }
  const u = Nr[t];
  let c, f;
  if (u) return t === "$attrs" && et(e.attrs, "get", ""), u(e);
  if ((c = a.__cssModules) && (c = c[t])) return c;
  if (n !== Me && xe(n, t)) return s[t] = 4, n[t];
  if (f = l.config.globalProperties, xe(f, t)) return f[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: i, ctx: o } = e;
  return Do(i, t) ? (i[t] = n, true) : r !== Me && xe(r, t) ? (r[t] = n, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s } }, a) {
  let l;
  return !!(n[a] || e !== Me && a[0] !== "$" && xe(e, a) || Do(t, a) || xe(o, a) || xe(r, a) || xe(Nr, a) || xe(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function tl(e) {
  return ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let ds = true;
function Pm(e) {
  const t = rf(e), n = e.proxy, r = e.ctx;
  ds = false, t.beforeCreate && nl(t.beforeCreate, e, "bc");
  const { data: i, computed: o, methods: s, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: h, updated: b, activated: m, deactivated: _, beforeDestroy: v, beforeUnmount: y, destroyed: A, unmounted: w, render: S, renderTracked: x, renderTriggered: T, errorCaptured: C, serverPrefetch: k, expose: V, inheritAttrs: j, components: I, directives: $, filters: q } = t;
  if (u && Im(u, r, null), s) for (const ae in s) {
    const le = s[ae];
    fe(le) && (r[ae] = le.bind(n));
  }
  if (i) {
    const ae = i.call(n, n);
    Se(ae) && (e.data = Ke(ae));
  }
  if (ds = true, o) for (const ae in o) {
    const le = o[ae], Oe = fe(le) ? le.bind(n, n) : fe(le.get) ? le.get.bind(n, n) : Ut, _e = !fe(le) && fe(le.set) ? le.set.bind(n) : Ut, oe = R({ get: Oe, set: _e });
    Object.defineProperty(r, ae, { enumerable: true, configurable: true, get: () => oe.value, set: (ge) => oe.value = ge });
  }
  if (a) for (const ae in a) nf(a[ae], r, n, ae);
  if (l) {
    const ae = fe(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((le) => {
      qe(le, ae[le]);
    });
  }
  c && nl(c, e, "c");
  function ne(ae, le) {
    ie(le) ? le.forEach((Oe) => ae(Oe.bind(n))) : le && ae(le.bind(n));
  }
  if (ne(vo, f), ne(Ot, d), ne(wm, h), ne(ra, b), ne(Qu, m), ne(na, _), ne(xm, C), ne(Cm, x), ne(Sm, T), ne(At, y), ne(di, w), ne(_m, k), ie(V)) if (V.length) {
    const ae = e.exposed || (e.exposed = {});
    V.forEach((le) => {
      Object.defineProperty(ae, le, { get: () => n[le], set: (Oe) => n[le] = Oe, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  S && e.render === Ut && (e.render = S), j != null && (e.inheritAttrs = j), I && (e.components = I), $ && (e.directives = $), k && Ju(e);
}
function Im(e, t, n = Ut) {
  ie(e) && (e = hs(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Se(i) ? "default" in i ? o = ke(i.from || r, i.default, true) : o = ke(i.from || r) : o = ke(i), De(o) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => o.value, set: (s) => o.value = s }) : t[r] = o;
  }
}
function nl(e, t, n) {
  It(ie(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function nf(e, t, n, r) {
  let i = r.includes(".") ? zu(n, r) : () => n[r];
  if (He(e)) {
    const o = t[e];
    fe(o) && te(i, o);
  } else if (fe(e)) te(i, e.bind(n));
  else if (Se(e)) if (ie(e)) e.forEach((o) => nf(o, t, n, r));
  else {
    const o = fe(e.handler) ? e.handler.bind(n) : t[e.handler];
    fe(o) && te(i, o, e);
  }
}
function rf(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: o, config: { optionMergeStrategies: s } } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach((u) => Wi(l, u, s, true)), Wi(l, t, s)), Se(t) && o.set(t, l), l;
}
function Wi(e, t, n, r = false) {
  const { mixins: i, extends: o } = t;
  o && Wi(e, o, n, true), i && i.forEach((s) => Wi(e, s, n, true));
  for (const s in t) if (!(r && s === "expose")) {
    const a = Rm[s] || n && n[s];
    e[s] = a ? a(e[s], t[s]) : t[s];
  }
  return e;
}
const Rm = { data: rl, props: il, emits: il, methods: Ir, computed: Ir, beforeCreate: it, created: it, beforeMount: it, mounted: it, beforeUpdate: it, updated: it, beforeDestroy: it, beforeUnmount: it, destroyed: it, unmounted: it, activated: it, deactivated: it, errorCaptured: it, serverPrefetch: it, components: Ir, directives: Ir, watch: Vm, provide: rl, inject: Om };
function rl(e, t) {
  return t ? e ? function() {
    return ze(fe(e) ? e.call(this, this) : e, fe(t) ? t.call(this, this) : t);
  } : t : e;
}
function Om(e, t) {
  return Ir(hs(e), hs(t));
}
function hs(e) {
  if (ie(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function it(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ir(e, t) {
  return e ? ze(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function il(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ze(/* @__PURE__ */ Object.create(null), tl(e), tl(t ?? {})) : t;
}
function Vm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ze(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = it(e[r], t[r]);
  return n;
}
function of() {
  return { app: null, config: { isNativeTag: lu, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Dm = 0;
function Hm(e, t) {
  return function(r, i = null) {
    fe(r) || (r = ze({}, r)), i != null && !Se(i) && (i = null);
    const o = of(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const u = o.app = { _uid: Dm++, _component: r, _props: i, _container: null, _context: o, _instance: null, version: mg, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...f) {
      return s.has(c) || (c && fe(c.install) ? (s.add(c), c.install(u, ...f)) : fe(c) && (s.add(c), c(u, ...f))), u;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), u;
    }, component(c, f) {
      return f ? (o.components[c] = f, u) : o.components[c];
    }, directive(c, f) {
      return f ? (o.directives[c] = f, u) : o.directives[c];
    }, mount(c, f, d) {
      if (!l) {
        const h = u._ceVNode || M(r, i);
        return h.appContext = o, d === true ? d = "svg" : d === false && (d = void 0), e(h, c, d), l = true, u._container = c, c.__vue_app__ = u, yo(h.component);
      }
    }, onUnmount(c) {
      a.push(c);
    }, unmount() {
      l && (It(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, f) {
      return o.provides[c] = f, u;
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
const Nm = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];
function Fm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Me;
  let i = n;
  const o = t.startsWith("update:"), s = o && Nm(r, t.slice(7));
  s && (s.trim && (i = n.map((c) => He(c) ? c.trim() : c)), s.number && (i = n.map(Ah)));
  let a, l = r[a = Mo(t)] || r[a = Mo(wt(t))];
  !l && o && (l = r[a = Mo(Vn(t))]), l && It(l, e, 6, i);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = true, It(u, e, 6, i);
  }
}
const $m = /* @__PURE__ */ new WeakMap();
function sf(e, t, n = false) {
  const r = n ? $m : t.emitsCache, i = r.get(e);
  if (i !== void 0) return i;
  const o = e.emits;
  let s = {}, a = false;
  if (!fe(e)) {
    const l = (u) => {
      const c = sf(u, t, true);
      c && (a = true, ze(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Se(e) && r.set(e, null), null) : (ie(o) ? o.forEach((l) => s[l] = null) : ze(s, o), Se(e) && r.set(e, s), s);
}
function po(e, t) {
  return !e || !so(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Vn(t)) || xe(e, t));
}
function ol(e) {
  const { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [o], slots: s, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: h, ctx: b, inheritAttrs: m } = e, _ = ji(e);
  let v, y;
  try {
    if (n.shapeFlag & 4) {
      const w = i || r, S = w;
      v = Wt(u.call(S, w, c, f, h, d, b)), y = a;
    } else {
      const w = t;
      v = Wt(w.length > 1 ? w(f, { attrs: a, slots: s, emit: l }) : w(f, null)), y = t.props ? a : Bm(a);
    }
  } catch (w) {
    Fr.length = 0, ho(w, e, 1), v = M(tt);
  }
  let A = v;
  if (y && m !== false) {
    const w = Object.keys(y), { shapeFlag: S } = A;
    w.length && S & 7 && (o && w.some(Ws) && (y = jm(y, o)), A = gn(A, y, false, true));
  }
  return n.dirs && (A = gn(A, null, false, true), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && Rn(A, n.transition), v = A, ji(_), v;
}
const Bm = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || so(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, jm = (e, t) => {
  const n = {};
  for (const r in e) (!Ws(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function zm(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return r ? sl(r, s, u) : !!s;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (af(s, r, d) && !po(u, d)) return true;
      }
    }
  } else return (i || a) && (!a || !a.$stable) ? true : r === s ? false : r ? s ? sl(r, s, u) : true : !!s;
  return false;
}
function sl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (af(t, e, o) && !po(n, o)) return true;
  }
  return false;
}
function af(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Se(r) && Se(i) ? !Us(r, i) : r !== i;
}
function Wm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const lf = {}, cf = () => Object.create(lf), uf = (e) => Object.getPrototypeOf(e) === lf;
function Gm(e, t, n, r = false) {
  const i = {}, o = cf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ff(e, t, i, o);
  for (const s in e.propsOptions[0]) s in i || (i[s] = void 0);
  n ? e.props = r ? i : Ru(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Um(e, t, n, r) {
  const { props: i, attrs: o, vnode: { patchFlag: s } } = e, a = ee(i), [l] = e.propsOptions;
  let u = false;
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (po(e.emitsOptions, d)) continue;
        const h = t[d];
        if (l) if (xe(o, d)) h !== o[d] && (o[d] = h, u = true);
        else {
          const b = wt(d);
          i[b] = ms(l, a, b, h, e, false);
        }
        else h !== o[d] && (o[d] = h, u = true);
      }
    }
  } else {
    ff(e, t, i, o) && (u = true);
    let c;
    for (const f in a) (!t || !xe(t, f) && ((c = Vn(f)) === f || !xe(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = ms(l, a, f, void 0, e, true)) : delete i[f]);
    if (o !== a) for (const f in o) (!t || !xe(t, f)) && (delete o[f], u = true);
  }
  u && en(e.attrs, "set", "");
}
function ff(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = false, a;
  if (t) for (let l in t) {
    if (Rr(l)) continue;
    const u = t[l];
    let c;
    i && xe(i, c = wt(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : po(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, s = true);
  }
  if (o) {
    const l = ee(n), u = a || Me;
    for (let c = 0; c < o.length; c++) {
      const f = o[c];
      n[f] = ms(i, l, f, u[f], e, !xe(u, f));
    }
  }
  return s;
}
function ms(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const a = xe(s, "default");
    if (a && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && fe(l)) {
        const { propsDefaults: u } = i;
        if (n in u) r = u[n];
        else {
          const c = gi(i);
          r = u[n] = l.call(null, t), c();
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r);
    }
    s[0] && (o && !a ? r = false : s[1] && (r === "" || r === Vn(n)) && (r = true));
  }
  return r;
}
const Zm = /* @__PURE__ */ new WeakMap();
function df(e, t, n = false) {
  const r = n ? Zm : t.propsCache, i = r.get(e);
  if (i) return i;
  const o = e.props, s = {}, a = [];
  let l = false;
  if (!fe(e)) {
    const c = (f) => {
      l = true;
      const [d, h] = df(f, t, true);
      ze(s, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !l) return Se(e) && r.set(e, Kn), Kn;
  if (ie(o)) for (let c = 0; c < o.length; c++) {
    const f = wt(o[c]);
    al(f) && (s[f] = Me);
  }
  else if (o) for (const c in o) {
    const f = wt(c);
    if (al(f)) {
      const d = o[c], h = s[f] = ie(d) || fe(d) ? { type: d } : ze({}, d), b = h.type;
      let m = false, _ = true;
      if (ie(b)) for (let v = 0; v < b.length; ++v) {
        const y = b[v], A = fe(y) && y.name;
        if (A === "Boolean") {
          m = true;
          break;
        } else A === "String" && (_ = false);
      }
      else m = fe(b) && b.name === "Boolean";
      h[0] = m, h[1] = _, (m || xe(h, "default")) && a.push(f);
    }
  }
  const u = [s, a];
  return Se(e) && r.set(e, u), u;
}
function al(e) {
  return e[0] !== "$" && !Rr(e);
}
const ia = (e) => e === "_" || e === "_ctx" || e === "$stable", oa = (e) => ie(e) ? e.map(Wt) : [Wt(e)], Km = (e, t, n) => {
  if (t._n) return t;
  const r = Ve((...i) => oa(t(...i)), n);
  return r._c = false, r;
}, hf = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ia(i)) continue;
    const o = e[i];
    if (fe(o)) t[i] = Km(i, o, r);
    else if (o != null) {
      const s = oa(o);
      t[i] = () => s;
    }
  }
}, mf = (e, t) => {
  const n = oa(t);
  e.slots.default = () => n;
}, gf = (e, t, n) => {
  for (const r in t) (n || !ia(r)) && (e[r] = t[r]);
}, Ym = (e, t, n) => {
  const r = e.slots = cf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (gf(r, t, n), n && hu(r, "_", i, true)) : hf(t, r);
  } else t && mf(e, t);
}, qm = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = true, s = Me;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = false : gf(i, t, n) : (o = !t.$stable, hf(t, i)), s = t;
  } else t && (mf(e, t), s = { default: 1 });
  if (o) for (const a in i) !ia(a) && s[a] == null && delete i[a];
}, Je = tg;
function Xm(e) {
  return Jm(e);
}
function Jm(e, t) {
  const n = co();
  n.__VUE__ = true;
  const { insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: h = Ut, insertStaticContent: b } = e, m = (g, p, L, O = null, H = null, D = null, Z = void 0, G = null, z = !!p.dynamicChildren) => {
    if (g === p) return;
    g && !An(g, p) && (O = E(g), ge(g, H, D, true), g = null), p.patchFlag === -2 && (z = false, p.dynamicChildren = null);
    const { type: N, ref: re, shapeFlag: K } = p;
    switch (N) {
      case hi:
        _(g, p, L, O);
        break;
      case tt:
        v(g, p, L, O);
        break;
      case No:
        g == null && y(p, L, O, Z);
        break;
      case ye:
        I(g, p, L, O, H, D, Z, G, z);
        break;
      default:
        K & 1 ? S(g, p, L, O, H, D, Z, G, z) : K & 6 ? $(g, p, L, O, H, D, Z, G, z) : (K & 64 || K & 128) && N.process(g, p, L, O, H, D, Z, G, z, U);
    }
    re != null && H ? Hr(re, g && g.ref, D, p || g, !p) : re == null && g && g.ref != null && Hr(g.ref, null, D, g, true);
  }, _ = (g, p, L, O) => {
    if (g == null) r(p.el = a(p.children), L, O);
    else {
      const H = p.el = g.el;
      p.children !== g.children && u(H, p.children);
    }
  }, v = (g, p, L, O) => {
    g == null ? r(p.el = l(p.children || ""), L, O) : p.el = g.el;
  }, y = (g, p, L, O) => {
    [g.el, g.anchor] = b(g.children, p, L, O, g.el, g.anchor);
  }, A = ({ el: g, anchor: p }, L, O) => {
    let H;
    for (; g && g !== p; ) H = d(g), r(g, L, O), g = H;
    r(p, L, O);
  }, w = ({ el: g, anchor: p }) => {
    let L;
    for (; g && g !== p; ) L = d(g), i(g), g = L;
    i(p);
  }, S = (g, p, L, O, H, D, Z, G, z) => {
    if (p.type === "svg" ? Z = "svg" : p.type === "math" && (Z = "mathml"), g == null) x(p, L, O, H, D, Z, G, z);
    else {
      const N = g.el && g.el._isVueCE ? g.el : null;
      try {
        N && N._beginPatch(), k(g, p, H, D, Z, G, z);
      } finally {
        N && N._endPatch();
      }
    }
  }, x = (g, p, L, O, H, D, Z, G) => {
    let z, N;
    const { props: re, shapeFlag: K, transition: Q, dirs: de } = g;
    if (z = g.el = s(g.type, D, re && re.is, re), K & 8 ? c(z, g.children) : K & 16 && C(g.children, z, null, O, H, Ho(g, D), Z, G), de && yn(g, null, O, "created"), T(z, g, g.scopeId, Z, O), re) {
      for (const Pe in re) Pe !== "value" && !Rr(Pe) && o(z, Pe, null, re[Pe], D, O);
      "value" in re && o(z, "value", null, re.value, D), (N = re.onVnodeBeforeMount) && $t(N, O, g);
    }
    de && yn(g, null, O, "beforeMount");
    const we = Qm(H, Q);
    we && Q.beforeEnter(z), r(z, p, L), ((N = re && re.onVnodeMounted) || we || de) && Je(() => {
      N && $t(N, O, g), we && Q.enter(z), de && yn(g, null, O, "mounted");
    }, H);
  }, T = (g, p, L, O, H) => {
    if (L && h(g, L), O) for (let D = 0; D < O.length; D++) h(g, O[D]);
    if (H) {
      let D = H.subTree;
      if (p === D || yf(D.type) && (D.ssContent === p || D.ssFallback === p)) {
        const Z = H.vnode;
        T(g, Z, Z.scopeId, Z.slotScopeIds, H.parent);
      }
    }
  }, C = (g, p, L, O, H, D, Z, G, z = 0) => {
    for (let N = z; N < g.length; N++) {
      const re = g[N] = G ? Qt(g[N]) : Wt(g[N]);
      m(null, re, p, L, O, H, D, Z, G);
    }
  }, k = (g, p, L, O, H, D, Z) => {
    const G = p.el = g.el;
    let { patchFlag: z, dynamicChildren: N, dirs: re } = p;
    z |= g.patchFlag & 16;
    const K = g.props || Me, Q = p.props || Me;
    let de;
    if (L && bn(L, false), (de = Q.onVnodeBeforeUpdate) && $t(de, L, p, g), re && yn(p, g, L, "beforeUpdate"), L && bn(L, true), (K.innerHTML && Q.innerHTML == null || K.textContent && Q.textContent == null) && c(G, ""), N ? V(g.dynamicChildren, N, G, L, O, Ho(p, H), D) : Z || le(g, p, G, null, L, O, Ho(p, H), D, false), z > 0) {
      if (z & 16) j(G, K, Q, L, H);
      else if (z & 2 && K.class !== Q.class && o(G, "class", null, Q.class, H), z & 4 && o(G, "style", K.style, Q.style, H), z & 8) {
        const we = p.dynamicProps;
        for (let Pe = 0; Pe < we.length; Pe++) {
          const Ee = we[Pe], ut = K[Ee], ft = Q[Ee];
          (ft !== ut || Ee === "value") && o(G, Ee, ut, ft, H, L);
        }
      }
      z & 1 && g.children !== p.children && c(G, p.children);
    } else !Z && N == null && j(G, K, Q, L, H);
    ((de = Q.onVnodeUpdated) || re) && Je(() => {
      de && $t(de, L, p, g), re && yn(p, g, L, "updated");
    }, O);
  }, V = (g, p, L, O, H, D, Z) => {
    for (let G = 0; G < p.length; G++) {
      const z = g[G], N = p[G], re = z.el && (z.type === ye || !An(z, N) || z.shapeFlag & 198) ? f(z.el) : L;
      m(z, N, re, null, O, H, D, Z, true);
    }
  }, j = (g, p, L, O, H) => {
    if (p !== L) {
      if (p !== Me) for (const D in p) !Rr(D) && !(D in L) && o(g, D, p[D], null, H, O);
      for (const D in L) {
        if (Rr(D)) continue;
        const Z = L[D], G = p[D];
        Z !== G && D !== "value" && o(g, D, G, Z, H, O);
      }
      "value" in L && o(g, "value", p.value, L.value, H);
    }
  }, I = (g, p, L, O, H, D, Z, G, z) => {
    const N = p.el = g ? g.el : a(""), re = p.anchor = g ? g.anchor : a("");
    let { patchFlag: K, dynamicChildren: Q, slotScopeIds: de } = p;
    de && (G = G ? G.concat(de) : de), g == null ? (r(N, L, O), r(re, L, O), C(p.children || [], L, re, H, D, Z, G, z)) : K > 0 && K & 64 && Q && g.dynamicChildren && g.dynamicChildren.length === Q.length ? (V(g.dynamicChildren, Q, L, H, D, Z, G), (p.key != null || H && p === H.subTree) && sa(g, p, true)) : le(g, p, L, re, H, D, Z, G, z);
  }, $ = (g, p, L, O, H, D, Z, G, z) => {
    p.slotScopeIds = G, g == null ? p.shapeFlag & 512 ? H.ctx.activate(p, L, O, Z, z) : q(p, L, O, H, D, Z, z) : Y(g, p, z);
  }, q = (g, p, L, O, H, D, Z) => {
    const G = g.component = ag(g, O, H);
    if (mo(g) && (G.ctx.renderer = U), lg(G, false, Z), G.asyncDep) {
      if (H && H.registerDep(G, ne, Z), !g.el) {
        const z = G.subTree = M(tt);
        v(null, z, p, L), g.placeholder = z.el;
      }
    } else ne(G, g, p, L, H, D, Z);
  }, Y = (g, p, L) => {
    const O = p.component = g.component;
    if (zm(g, p, L)) if (O.asyncDep && !O.asyncResolved) {
      ae(O, p, L);
      return;
    } else O.next = p, O.update();
    else p.el = g.el, O.vnode = p;
  }, ne = (g, p, L, O, H, D, Z) => {
    const G = () => {
      if (g.isMounted) {
        let { next: K, bu: Q, u: de, parent: we, vnode: Pe } = g;
        {
          const Nt = vf(g);
          if (Nt) {
            K && (K.el = Pe.el, ae(g, K, Z)), Nt.asyncDep.then(() => {
              Je(() => {
                g.isUnmounted || N();
              }, H);
            });
            return;
          }
        }
        let Ee = K, ut;
        bn(g, false), K ? (K.el = Pe.el, ae(g, K, Z)) : K = Pe, Q && To(Q), (ut = K.props && K.props.onVnodeBeforeUpdate) && $t(ut, we, K, Pe), bn(g, true);
        const ft = ol(g), Ht = g.subTree;
        g.subTree = ft, m(Ht, ft, f(Ht.el), E(Ht), g, H, D), K.el = ft.el, Ee === null && Wm(g, ft.el), de && Je(de, H), (ut = K.props && K.props.onVnodeUpdated) && Je(() => $t(ut, we, K, Pe), H);
      } else {
        let K;
        const { el: Q, props: de } = p, { bm: we, m: Pe, parent: Ee, root: ut, type: ft } = g, Ht = Xn(p);
        bn(g, false), we && To(we), !Ht && (K = de && de.onVnodeBeforeMount) && $t(K, Ee, p), bn(g, true);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(ft);
          const Nt = g.subTree = ol(g);
          m(null, Nt, L, O, g, H, D), p.el = Nt.el;
        }
        if (Pe && Je(Pe, H), !Ht && (K = de && de.onVnodeMounted)) {
          const Nt = p;
          Je(() => $t(K, Ee, Nt), H);
        }
        (p.shapeFlag & 256 || Ee && Xn(Ee.vnode) && Ee.vnode.shapeFlag & 256) && g.a && Je(g.a, H), g.isMounted = true, p = L = O = null;
      }
    };
    g.scope.on();
    const z = g.effect = new bu(G);
    g.scope.off();
    const N = g.update = z.run.bind(z), re = g.job = z.runIfDirty.bind(z);
    re.i = g, re.id = g.uid, z.scheduler = () => Qs(re), bn(g, true), N();
  }, ae = (g, p, L) => {
    p.component = g;
    const O = g.vnode.props;
    g.vnode = p, g.next = null, Um(g, p.props, O, L), qm(g, p.children, L), nn(), Za(g), rn();
  }, le = (g, p, L, O, H, D, Z, G, z = false) => {
    const N = g && g.children, re = g ? g.shapeFlag : 0, K = p.children, { patchFlag: Q, shapeFlag: de } = p;
    if (Q > 0) {
      if (Q & 128) {
        _e(N, K, L, O, H, D, Z, G, z);
        return;
      } else if (Q & 256) {
        Oe(N, K, L, O, H, D, Z, G, z);
        return;
      }
    }
    de & 8 ? (re & 16 && $e(N, H, D), K !== N && c(L, K)) : re & 16 ? de & 16 ? _e(N, K, L, O, H, D, Z, G, z) : $e(N, H, D, true) : (re & 8 && c(L, ""), de & 16 && C(K, L, O, H, D, Z, G, z));
  }, Oe = (g, p, L, O, H, D, Z, G, z) => {
    g = g || Kn, p = p || Kn;
    const N = g.length, re = p.length, K = Math.min(N, re);
    let Q;
    for (Q = 0; Q < K; Q++) {
      const de = p[Q] = z ? Qt(p[Q]) : Wt(p[Q]);
      m(g[Q], de, L, null, H, D, Z, G, z);
    }
    N > re ? $e(g, H, D, true, false, K) : C(p, L, O, H, D, Z, G, z, K);
  }, _e = (g, p, L, O, H, D, Z, G, z) => {
    let N = 0;
    const re = p.length;
    let K = g.length - 1, Q = re - 1;
    for (; N <= K && N <= Q; ) {
      const de = g[N], we = p[N] = z ? Qt(p[N]) : Wt(p[N]);
      if (An(de, we)) m(de, we, L, null, H, D, Z, G, z);
      else break;
      N++;
    }
    for (; N <= K && N <= Q; ) {
      const de = g[K], we = p[Q] = z ? Qt(p[Q]) : Wt(p[Q]);
      if (An(de, we)) m(de, we, L, null, H, D, Z, G, z);
      else break;
      K--, Q--;
    }
    if (N > K) {
      if (N <= Q) {
        const de = Q + 1, we = de < re ? p[de].el : O;
        for (; N <= Q; ) m(null, p[N] = z ? Qt(p[N]) : Wt(p[N]), L, we, H, D, Z, G, z), N++;
      }
    } else if (N > Q) for (; N <= K; ) ge(g[N], H, D, true), N++;
    else {
      const de = N, we = N, Pe = /* @__PURE__ */ new Map();
      for (N = we; N <= Q; N++) {
        const mt = p[N] = z ? Qt(p[N]) : Wt(p[N]);
        mt.key != null && Pe.set(mt.key, N);
      }
      let Ee, ut = 0;
      const ft = Q - we + 1;
      let Ht = false, Nt = 0;
      const Cr = new Array(ft);
      for (N = 0; N < ft; N++) Cr[N] = 0;
      for (N = de; N <= K; N++) {
        const mt = g[N];
        if (ut >= ft) {
          ge(mt, H, D, true);
          continue;
        }
        let Ft;
        if (mt.key != null) Ft = Pe.get(mt.key);
        else for (Ee = we; Ee <= Q; Ee++) if (Cr[Ee - we] === 0 && An(mt, p[Ee])) {
          Ft = Ee;
          break;
        }
        Ft === void 0 ? ge(mt, H, D, true) : (Cr[Ft - we] = N + 1, Ft >= Nt ? Nt = Ft : Ht = true, m(mt, p[Ft], L, null, H, D, Z, G, z), ut++);
      }
      const $a = Ht ? eg(Cr) : Kn;
      for (Ee = $a.length - 1, N = ft - 1; N >= 0; N--) {
        const mt = we + N, Ft = p[mt], Ba = p[mt + 1], ja = mt + 1 < re ? Ba.el || pf(Ba) : O;
        Cr[N] === 0 ? m(null, Ft, L, ja, H, D, Z, G, z) : Ht && (Ee < 0 || N !== $a[Ee] ? oe(Ft, L, ja, 2) : Ee--);
      }
    }
  }, oe = (g, p, L, O, H = null) => {
    const { el: D, type: Z, transition: G, children: z, shapeFlag: N } = g;
    if (N & 6) {
      oe(g.component.subTree, p, L, O);
      return;
    }
    if (N & 128) {
      g.suspense.move(p, L, O);
      return;
    }
    if (N & 64) {
      Z.move(g, p, L, U);
      return;
    }
    if (Z === ye) {
      r(D, p, L);
      for (let K = 0; K < z.length; K++) oe(z[K], p, L, O);
      r(g.anchor, p, L);
      return;
    }
    if (Z === No) {
      A(g, p, L);
      return;
    }
    if (O !== 2 && N & 1 && G) if (O === 0) G.beforeEnter(D), r(D, p, L), Je(() => G.enter(D), H);
    else {
      const { leave: K, delayLeave: Q, afterLeave: de } = G, we = () => {
        g.ctx.isUnmounted ? i(D) : r(D, p, L);
      }, Pe = () => {
        D._isLeaving && D[zt](true), K(D, () => {
          we(), de && de();
        });
      };
      Q ? Q(D, we, Pe) : Pe();
    }
    else r(D, p, L);
  }, ge = (g, p, L, O = false, H = false) => {
    const { type: D, props: Z, ref: G, children: z, dynamicChildren: N, shapeFlag: re, patchFlag: K, dirs: Q, cacheIndex: de } = g;
    if (K === -2 && (H = false), G != null && (nn(), Hr(G, null, L, g, true), rn()), de != null && (p.renderCache[de] = void 0), re & 256) {
      p.ctx.deactivate(g);
      return;
    }
    const we = re & 1 && Q, Pe = !Xn(g);
    let Ee;
    if (Pe && (Ee = Z && Z.onVnodeBeforeUnmount) && $t(Ee, p, g), re & 6) Ze(g.component, L, O);
    else {
      if (re & 128) {
        g.suspense.unmount(L, O);
        return;
      }
      we && yn(g, null, p, "beforeUnmount"), re & 64 ? g.type.remove(g, p, L, U, O) : N && !N.hasOnce && (D !== ye || K > 0 && K & 64) ? $e(N, p, L, false, true) : (D === ye && K & 384 || !H && re & 16) && $e(z, p, L), O && me(g);
    }
    (Pe && (Ee = Z && Z.onVnodeUnmounted) || we) && Je(() => {
      Ee && $t(Ee, p, g), we && yn(g, null, p, "unmounted");
    }, L);
  }, me = (g) => {
    const { type: p, el: L, anchor: O, transition: H } = g;
    if (p === ye) {
      je(L, O);
      return;
    }
    if (p === No) {
      w(g);
      return;
    }
    const D = () => {
      i(L), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (g.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Z, delayLeave: G } = H, z = () => Z(L, D);
      G ? G(g.el, D, z) : z();
    } else D();
  }, je = (g, p) => {
    let L;
    for (; g !== p; ) L = d(g), i(g), g = L;
    i(p);
  }, Ze = (g, p, L) => {
    const { bum: O, scope: H, job: D, subTree: Z, um: G, m: z, a: N } = g;
    ll(z), ll(N), O && To(O), H.stop(), D && (D.flags |= 8, ge(Z, g, p, L)), G && Je(G, p), Je(() => {
      g.isUnmounted = true;
    }, p);
  }, $e = (g, p, L, O = false, H = false, D = 0) => {
    for (let Z = D; Z < g.length; Z++) ge(g[Z], p, L, O, H);
  }, E = (g) => {
    if (g.shapeFlag & 6) return E(g.component.subTree);
    if (g.shapeFlag & 128) return g.suspense.next();
    const p = d(g.anchor || g.el), L = p && p[Wu];
    return L ? d(L) : p;
  };
  let B = false;
  const W = (g, p, L) => {
    let O;
    g == null ? p._vnode && (ge(p._vnode, null, null, true), O = p._vnode.component) : m(p._vnode || null, g, p, null, null, null, L), p._vnode = g, B || (B = true, Za(O), $u(), B = false);
  }, U = { p: m, um: ge, m: oe, r: me, mt: q, mc: C, pc: le, pbc: V, n: E, o: e };
  return { render: W, hydrate: void 0, createApp: Hm(W) };
}
function Ho({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sa(e, t, n = false) {
  const r = e.children, i = t.children;
  if (ie(r) && ie(i)) for (let o = 0; o < r.length; o++) {
    const s = r[o];
    let a = i[o];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Qt(i[o]), a.el = s.el), !n && a.patchFlag !== -2 && sa(s, a)), a.type === hi && (a.patchFlag === -1 && (a = i[o] = Qt(a)), a.el = s.el), a.type === tt && !a.el && (a.el = s.el);
  }
}
function eg(e) {
  const t = e.slice(), n = [0];
  let r, i, o, s, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; ) a = o + s >> 1, e[n[a]] < u ? o = a + 1 : s = a;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; ) n[o] = s, s = t[s];
  return n;
}
function vf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : vf(t);
}
function ll(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function pf(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? pf(t.subTree) : null;
}
const yf = (e) => e.__isSuspense;
function tg(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : fm(e);
}
const ye = Symbol.for("v-fgt"), hi = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), No = Symbol.for("v-stc"), Fr = [];
let vt = null;
function se(e = false) {
  Fr.push(vt = e ? null : []);
}
function ng() {
  Fr.pop(), vt = Fr[Fr.length - 1] || null;
}
let qr = 1;
function Gi(e, t = false) {
  qr += e, e < 0 && vt && t && (vt.hasOnce = true);
}
function bf(e) {
  return e.dynamicChildren = qr > 0 ? vt || Kn : null, ng(), qr > 0 && vt && vt.push(e), e;
}
function he(e, t, n, r, i, o) {
  return bf(P(e, t, n, r, i, o, true));
}
function On(e, t, n, r, i) {
  return bf(M(e, t, n, r, i, true));
}
function Xr(e) {
  return e ? e.__v_isVNode === true : false;
}
function An(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wf = ({ key: e }) => e ?? null, Vi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? He(e) || De(e) || fe(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, r = 0, i = null, o = e === ye ? 0 : 1, s = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && wf(t), ref: t && Vi(t), scopeId: ju, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: r, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Ye };
  return a ? (aa(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= He(n) ? 8 : 16), qr > 0 && !s && vt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && vt.push(l), l;
}
const M = rg;
function rg(e, t = null, n = null, r = 0, i = null, o = false) {
  if ((!e || e === Am) && (e = tt), Xr(e)) {
    const a = gn(e, t, true);
    return n && aa(a, n), qr > 0 && !o && vt && (a.shapeFlag & 6 ? vt[vt.indexOf(e)] = a : vt.push(a)), a.patchFlag = -2, a;
  }
  if (hg(e) && (e = e.__vccOpts), t) {
    t = ig(t);
    let { class: a, style: l } = t;
    a && !He(a) && (t.class = Le(a)), Se(l) && (fo(l) && !ie(l) && (l = ze({}, l)), t.style = Ne(l));
  }
  const s = He(e) ? 1 : yf(e) ? 128 : Gu(e) ? 64 : Se(e) ? 4 : fe(e) ? 2 : 0;
  return P(e, t, n, r, i, s, o, true);
}
function ig(e) {
  return e ? fo(e) || uf(e) ? ze({}, e) : e : null;
}
function gn(e, t, n = false, r = false) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, u = t ? Te(i || {}, t) : i, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && wf(u), ref: t && t.ref ? n && o ? ie(o) ? o.concat(Vi(t)) : [o, Vi(t)] : Vi(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ye ? s === -1 ? 16 : s | 16 : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && gn(e.ssContent), ssFallback: e.ssFallback && gn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && r && Rn(c, l.clone(c)), c;
}
function Jr(e = " ", t = 0) {
  return M(hi, null, e, t);
}
function sr(e = "", t = false) {
  return t ? (se(), On(tt, null, e)) : M(tt, null, e);
}
function Wt(e) {
  return e == null || typeof e == "boolean" ? M(tt) : ie(e) ? M(ye, null, e.slice()) : Xr(e) ? Qt(e) : M(hi, null, String(e));
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
    for (const i in r) if (i === "class") t.class !== r.class && (t.class = Le([t.class, r.class]));
    else if (i === "style") t.style = Ne([t.style, r.style]);
    else if (so(i)) {
      const o = t[i], s = r[i];
      s && o !== s && !(ie(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s);
    } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function $t(e, t, n, r = null) {
  It(e, t, 7, [n, r]);
}
const og = of();
let sg = 0;
function ag(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || og, o = { uid: sg++, vnode: e, type: r, parent: t, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new pu(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(i.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: df(r, i), emitsOptions: sf(r, i), emit: null, emitted: null, propsDefaults: Me, inheritAttrs: r.inheritAttrs, ctx: Me, data: Me, props: Me, attrs: Me, slots: Me, refs: Me, setupState: Me, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fm.bind(null, o), e.ce && e.ce(o), o;
}
let nt = null;
const mi = () => nt || Ye;
let Ui, gs;
{
  const e = co(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Ui = t("__VUE_INSTANCE_SETTERS__", (n) => nt = n), gs = t("__VUE_SSR_SETTERS__", (n) => Qr = n);
}
const gi = (e) => {
  const t = nt;
  return Ui(e), e.scope.on(), () => {
    e.scope.off(), Ui(t);
  };
}, cl = () => {
  nt && nt.scope.off(), Ui(null);
};
function _f(e) {
  return e.vnode.shapeFlag & 4;
}
let Qr = false;
function lg(e, t = false, n = false) {
  t && gs(t);
  const { props: r, children: i } = e.vnode, o = _f(e);
  Gm(e, r, o, t), Ym(e, i, n || t);
  const s = o ? cg(e, t) : void 0;
  return t && gs(false), s;
}
function cg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Tm);
  const { setup: r } = n;
  if (r) {
    nn();
    const i = e.setupContext = r.length > 1 ? fg(e) : null, o = gi(e), s = fi(r, e, 0, [e.props, i]), a = uu(s);
    if (rn(), o(), (a || e.sp) && !Xn(e) && Ju(e), a) {
      if (s.then(cl, cl), t) return s.then((l) => {
        ul(e, l);
      }).catch((l) => {
        ho(l, e, 0);
      });
      e.asyncDep = s;
    } else ul(e, s);
  } else Sf(e);
}
function ul(e, t, n) {
  fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Vu(t)), Sf(e);
}
function Sf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ut);
  {
    const i = gi(e);
    nn();
    try {
      Pm(e);
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
function yo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vu(em(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Nr) return Nr[n](e);
  }, has(t, n) {
    return n in t || n in Nr;
  } })) : e.proxy;
}
function dg(e, t = true) {
  return fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hg(e) {
  return fe(e) && "__vccOpts" in e;
}
const R = (e, t) => sm(e, t, Qr);
function vn(e, t, n) {
  try {
    Gi(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !ie(t) ? Xr(t) ? M(e, null, [t]) : M(e, t) : M(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Xr(n) && (n = [n]), M(e, t, n));
  } finally {
    Gi(1);
  }
}
const mg = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vs;
const fl = typeof window < "u" && window.trustedTypes;
if (fl) try {
  vs = fl.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Cf = vs ? (e) => vs.createHTML(e) : (e) => e, gg = "http://www.w3.org/2000/svg", vg = "http://www.w3.org/1998/Math/MathML", Jt = typeof document < "u" ? document : null, dl = Jt && Jt.createElement("template"), pg = { insert: (e, t, n) => {
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
}, insertStaticContent(e, t, n, r, i, o) {
  const s = n ? n.previousSibling : t.lastChild;
  if (i && (i === o || i.nextSibling)) for (; t.insertBefore(i.cloneNode(true), n), !(i === o || !(i = i.nextSibling)); ) ;
  else {
    dl.innerHTML = Cf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const a = dl.content;
    if (r === "svg" || r === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    t.insertBefore(a, n);
  }
  return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, ln = "transition", Ar = "animation", ar = Symbol("_vtc"), xf = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Lf = ze({}, Ku, xf), yg = (e) => (e.displayName = "Transition", e.props = Lf, e), lr = yg((e, { slots: t }) => vn(ym, Af(e), t)), wn = (e, t = []) => {
  ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, hl = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Af(e) {
  const t = {};
  for (const I in e) I in xf || (t[I] = e[I]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: i, enterFromClass: o = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = o, appearActiveClass: u = s, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, b = bg(i), m = b && b[0], _ = b && b[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: A, onLeave: w, onLeaveCancelled: S, onBeforeAppear: x = v, onAppear: T = y, onAppearCancelled: C = A } = t, k = (I, $, q, Y) => {
    I._enterCancelled = Y, un(I, $ ? c : a), un(I, $ ? u : s), q && q();
  }, V = (I, $) => {
    I._isLeaving = false, un(I, f), un(I, h), un(I, d), $ && $();
  }, j = (I) => ($, q) => {
    const Y = I ? T : y, ne = () => k($, I, q);
    wn(Y, [$, ne]), ml(() => {
      un($, I ? l : o), Bt($, I ? c : a), hl(Y) || gl($, r, m, ne);
    });
  };
  return ze(t, { onBeforeEnter(I) {
    wn(v, [I]), Bt(I, o), Bt(I, s);
  }, onBeforeAppear(I) {
    wn(x, [I]), Bt(I, l), Bt(I, u);
  }, onEnter: j(false), onAppear: j(true), onLeave(I, $) {
    I._isLeaving = true;
    const q = () => V(I, $);
    Bt(I, f), I._enterCancelled ? (Bt(I, d), ps(I)) : (ps(I), Bt(I, d)), ml(() => {
      I._isLeaving && (un(I, f), Bt(I, h), hl(w) || gl(I, r, _, q));
    }), wn(w, [I, q]);
  }, onEnterCancelled(I) {
    k(I, false, void 0, true), wn(A, [I]);
  }, onAppearCancelled(I) {
    k(I, true, void 0, true), wn(C, [I]);
  }, onLeaveCancelled(I) {
    V(I), wn(S, [I]);
  } });
}
function bg(e) {
  if (e == null) return null;
  if (Se(e)) return [Fo(e.enter), Fo(e.leave)];
  {
    const t = Fo(e);
    return [t, t];
  }
}
function Fo(e) {
  return Eh(e);
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
let wg = 0;
function gl(e, t, n, r) {
  const i = e._endId = ++wg, o = () => {
    i === e._endId && r();
  };
  if (n != null) return setTimeout(o, n);
  const { type: s, timeout: a, propCount: l } = Ef(e, t);
  if (!s) return r();
  const u = s + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, d), o();
  }, d = (h) => {
    h.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, d);
}
function Ef(e, t) {
  const n = window.getComputedStyle(e), r = (b) => (n[b] || "").split(", "), i = r(`${ln}Delay`), o = r(`${ln}Duration`), s = vl(i, o), a = r(`${Ar}Delay`), l = r(`${Ar}Duration`), u = vl(a, l);
  let c = null, f = 0, d = 0;
  t === ln ? s > 0 && (c = ln, f = s, d = o.length) : t === Ar ? u > 0 && (c = Ar, f = u, d = l.length) : (f = Math.max(s, u), c = f > 0 ? s > u ? ln : Ar : null, d = c ? c === ln ? o.length : l.length : 0);
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
function ps(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function _g(e, t, n) {
  const r = e[ar];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zi = Symbol("_vod"), kf = Symbol("_vsh"), la = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[Zi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Er(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Er(e, true), r.enter(e)) : r.leave(e, () => {
    Er(e, false);
  }) : Er(e, t));
}, beforeUnmount(e, { value: t }) {
  Er(e, t);
} };
function Er(e, t) {
  e.style.display = t ? e[Zi] : "none", e[kf] = !t;
}
const Sg = Symbol(""), Cg = /(?:^|;)\s*display\s*:/;
function xg(e, t, n) {
  const r = e.style, i = He(n);
  let o = false;
  if (n && !i) {
    if (t) if (He(t)) for (const s of t.split(";")) {
      const a = s.slice(0, s.indexOf(":")).trim();
      n[a] == null && Di(r, a, "");
    }
    else for (const s in t) n[s] == null && Di(r, s, "");
    for (const s in n) s === "display" && (o = true), Di(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[Sg];
      s && (n += ";" + s), r.cssText = n, o = Cg.test(n);
    }
  } else t && e.removeAttribute("style");
  Zi in e && (e[Zi] = o ? r.display : "", e[kf] && (r.display = "none"));
}
const yl = /\s*!important$/;
function Di(e, t, n) {
  if (ie(n)) n.forEach((r) => Di(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Lg(e, t);
    yl.test(n) ? e.setProperty(Vn(r), n.replace(yl, ""), "important") : e[r] = n;
  }
}
const bl = ["Webkit", "Moz", "ms"], $o = {};
function Lg(e, t) {
  const n = $o[t];
  if (n) return n;
  let r = wt(t);
  if (r !== "filter" && r in e) return $o[t] = r;
  r = mr(r);
  for (let i = 0; i < bl.length; i++) {
    const o = bl[i] + r;
    if (o in e) return $o[t] = o;
  }
  return t;
}
const wl = "http://www.w3.org/1999/xlink";
function _l(e, t, n, r, i, o = Rh(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wl, t.slice(6, t.length)) : e.setAttributeNS(wl, t, n) : n == null || o && !mu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Tt(n) ? String(n) : n);
}
function Sl(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Cf(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = false;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = mu(n) : n == null && a === "string" ? (n = "", s = true) : a === "number" && (n = 0, s = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Ag(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Eg(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cl = Symbol("_vei");
function kg(e, t, n, r, i = null) {
  const o = e[Cl] || (e[Cl] = {}), s = o[t];
  if (r && s) s.value = r;
  else {
    const [a, l] = Mg(t);
    if (r) {
      const u = o[t] = Ig(r, i);
      Ag(e, a, u, l);
    } else s && (Eg(e, a, s, l), o[t] = void 0);
  }
}
const xl = /(?:Once|Passive|Capture)$/;
function Mg(e) {
  let t;
  if (xl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(xl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Vn(e.slice(2)), t];
}
let Bo = 0;
const Tg = Promise.resolve(), Pg = () => Bo || (Tg.then(() => Bo = 0), Bo = Date.now());
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
const Ll = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Og = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? _g(e, r, s) : t === "style" ? xg(e, n, r) : so(t) ? Ws(t) || kg(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Vg(e, t, r, s)) ? (Sl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _l(e, t, r, s, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !He(r)) ? Sl(e, wt(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), _l(e, t, r, s));
};
function Vg(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ll(t) && fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return false;
  }
  return Ll(t) && He(n) ? false : t in e;
}
const Mf = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap(), Ki = Symbol("_moveCb"), Al = Symbol("_enterCb"), Dg = (e) => (delete e.props.mode, e), Hg = Dg({ name: "TransitionGroup", props: ze({}, Lf, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = mi(), r = Zu();
  let i, o;
  return ra(() => {
    if (!i.length) return;
    const s = e.moveClass || `${e.name || "v"}-move`;
    if (!Bg(i[0].el, n.vnode.el, s)) {
      i = [];
      return;
    }
    i.forEach(Ng), i.forEach(Fg);
    const a = i.filter($g);
    ps(n.vnode.el), a.forEach((l) => {
      const u = l.el, c = u.style;
      Bt(u, s), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = u[Ki] = (d) => {
        d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Ki] = null, un(u, s));
      };
      u.addEventListener("transitionend", f);
    }), i = [];
  }), () => {
    const s = ee(e), a = Af(s);
    let l = s.tag || ye;
    if (i = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (i.push(c), Rn(c, Yr(c, a, r, n)), Mf.set(c, Pf(c.el)));
    }
    o = t.default ? ta(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && Rn(c, Yr(c, a, r, n));
    }
    return M(l, null, o);
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
    const o = e.el, s = o.style, a = o.getBoundingClientRect();
    let l = 1, u = 1;
    return o.offsetWidth && (l = a.width / o.offsetWidth), o.offsetHeight && (u = a.height / o.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), s.transform = s.webkitTransform = `translate(${r / l}px,${i / u}px)`, s.transitionDuration = "0s", e;
  }
}
function Pf(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Bg(e, t, n) {
  const r = e.cloneNode(), i = e[ar];
  i && i.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(r);
  const { hasTransform: s } = Ef(r);
  return o.removeChild(r), s;
}
const jg = ze({ patchProp: Og }, pg);
let El;
function zg() {
  return El || (El = Xm(jg));
}
const Wg = ((...e) => {
  const t = zg().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = Ug(r);
    if (!i) return;
    const o = t._component;
    !fe(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, false, Gg(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Gg(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ug(e) {
  return He(e) ? document.querySelector(e) : e;
}
const kl = () => {
};
function ua(e) {
  const t = `[${e}]`;
  return { debug: kl, info: kl, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Ml = 5;
function Zg(e, t, n) {
  const r = t * n, i = Math.max(1, Math.round(e / (r * Ml)));
  return e / (i * Ml);
}
function If(e, t, n) {
  const r = e * n.dpr, i = t * n.dpr, o = r + n.offsetX, s = i + n.offsetY, a = Math.floor(o / n.gridPitch), l = Math.floor(s / n.gridPitch);
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
  const i = r ?? Date.now(), o = [];
  for (const s of e) {
    if (o.length >= n) break;
    const a = t(s, i);
    a && o.push(a);
  }
  return o;
}
const ev = /* @__PURE__ */ new Set(["minor", "major", "both"]), tv = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function jo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Gn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function nv() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function rv(e) {
  return typeof e == "string" && ev.has(e) ? e : "both";
}
function iv(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && tv.has(t.style) ? t.style : "none", r = jo(Gn(t.widthCells) ?? 1, 1, 4), i = typeof t.opacity == "number" ? t.opacity : 1, o = jo(i, 0, 1), s = { style: n, widthCells: r, opacity: o };
  if (n === "fade") {
    const a = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    s.fadeStrength = jo(a, 0, 1);
  }
  return n === "noted" && (s.notePitchCells = Math.max(1, Gn(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (s.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), s;
}
function ov(e) {
  return typeof e == "boolean" ? e : true;
}
function Tl(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Of(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, r = Gn(n.x1), i = Gn(n.y1), o = Gn(n.x2), s = Gn(n.y2);
  if (r === null || i === null || o === null || s === null) return null;
  const a = Math.min(r, o), l = Math.max(r, o), u = Math.min(i, s), c = Math.max(i, s);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : nv(), x1: a, y1: u, x2: l, y2: c, mode: rv(n.mode), edge: iv(n.edge), enabled: ov(n.enabled), createdAt: Tl(n.createdAt, t), updatedAt: Tl(n.updatedAt, t) };
}
function Vf(e, t = Date.now()) {
  return Qg(e, Of, Jg, t);
}
function zo() {
  return typeof localStorage < "u";
}
function sv(e) {
  return { load() {
    if (!zo()) return [];
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
    if (!zo()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    zo() && localStorage.removeItem(e.key);
  } };
}
const fa = sv({ key: Xg, version: Rf, normalize: Vf, itemsKey: "zones" }), av = fa.load, lv = fa.save, cv = fa.clear;
function uv(e) {
  const t = X(e.storage.load());
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
  function o(u) {
    var _a2;
    const c = e.normalizeOne(u);
    if (!c || !t.value.some((d) => d.id === c.id)) return;
    const f = t.value.map((d) => d.id === c.id ? c : d);
    n(f), (_a2 = e.onUpdate) == null ? void 0 : _a2.call(e, c);
  }
  function s(u) {
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
  return { items: t, setItems: r, addItem: i, updateItem: o, removeItem: s, clearItems: a, syncFromWorker: l };
}
function fv(e = {}) {
  const { items: t, setItems: n, addItem: r, updateItem: i, removeItem: o, clearItems: s, syncFromWorker: a } = uv({ storage: { load: av, save: lv, clear: cv }, normalize: Vf, normalizeOne: Of, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: r, updateZone: i, removeZone: o, clearZones: s, syncFromWorker: a };
}
const Pl = ua("WorkerBridge");
function dv() {
  let e = null;
  const t = X(null), n = /* @__PURE__ */ new Map();
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
  function o(l) {
    (l.type === "ready" || l.type === "grid_info") && (t.value = l.gridInfo);
    const u = n.get(l.type);
    if (u) for (const c of u) c(l);
  }
  function s(l, u, c) {
    const f = new Worker(new URL("/assets/backgroundRenderer-BYYkxl_g.js", import.meta.url), { type: "module" });
    f.onmessage = (d) => o(d.data), f.onerror = (d) => {
      Pl.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = f, r({ type: "init", canvas: l, cellPx: u, theme: c }, [l]);
  }
  function a() {
    r({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: r, on: i, init: s, terminate: a };
}
const Wo = 5, hv = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), mv = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
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
  function o(l, u) {
    return { x1: Math.min(l.cx, u.cx), y1: Math.min(l.cy, u.cy), x2: Math.max(l.cx, u.cx), y2: Math.max(l.cy, u.cy) };
  }
  function s(l, u) {
    const c = (d) => Math.floor(d / Wo) * Wo, f = (d) => c(d) + (Wo - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(l.x1))), y1: c(l.y1), x2: Math.max(0, Math.min(u.worldCols - 1, f(l.x2))), y2: f(l.y2) };
  }
  function a(l) {
    if (!(l instanceof HTMLElement)) return false;
    if (l.closest(mv)) return true;
    let u = l;
    for (; u; ) {
      if (hv.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: i, cellToScreen: Yg, cellSpanToCssPx: qg, normalizeRect: o, snapRectToMajor: s, isInteractiveTarget: a, wrapXToWorld: r };
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
  const t = /* @__PURE__ */ new Map(), n = X(null), r = X(null), i = X(null);
  let o = null, s = null;
  function a(_, v) {
    t.set(_, v);
  }
  function l() {
    for (const _ of t.values()) if (_.isEnabled()) return true;
    return false;
  }
  function u() {
    const _ = r.value, v = e.makeSnapshot();
    if (!_ || !v) {
      i.value = null;
      return;
    }
    const y = e.cellToScreen(_.x1, _.y1, v), A = e.cellSpanToCssPx(_.x2 - _.x1 + 1, v), w = e.cellSpanToCssPx(_.y2 - _.y1 + 1, v);
    i.value = { left: `${y.cssX}px`, top: `${y.cssY}px`, width: `${A}px`, height: `${w}px` };
  }
  function c() {
    o = null, n.value = null, s = null, r.value = null, i.value = null;
  }
  function f(_) {
    n.value === _ && c();
  }
  function d(_) {
    if (_.button !== 0 || e.isInteractiveTarget(_.target)) return;
    let v = null;
    for (const w of t.entries()) w[1].isEnabled() && (!v || w[1].priority > v[1].priority) && (v = w);
    if (!v) return;
    const y = e.pointerToCell(_);
    if (!y) return;
    n.value = v[0], o = y;
    const A = { x1: y.cx, y1: y.cy, x2: y.cx, y2: y.cy };
    v[1].dragMode === "paint" && (s = { ...A }), r.value = A, u(), _.target instanceof Element && _.target.setPointerCapture(_.pointerId), _.preventDefault();
  }
  function h(_) {
    var _a2;
    if (!n.value || !o) return;
    const v = t.get(n.value);
    if (!v) return;
    const y = e.pointerToCell(_), A = e.makeSnapshot();
    if (!(!y || !A)) {
      if (v.dragMode === "paint" && s) s.x1 = Math.min(s.x1, y.cx), s.y1 = Math.min(s.y1, y.cy), s.x2 = Math.max(s.x2, y.cx), s.y2 = Math.max(s.y2, y.cy), r.value = { ...s };
      else {
        const w = e.normalizeRect(o, y);
        r.value = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) ? e.snapRectToMajor(w, A) : w;
      }
      u();
    }
  }
  function b(_) {
    var _a2;
    if (!n.value || !o || _.button !== 0) return;
    _.target instanceof Element && _.target.hasPointerCapture(_.pointerId) && _.target.releasePointerCapture(_.pointerId);
    const v = t.get(n.value);
    if (!v) {
      c();
      return;
    }
    const y = e.pointerToCell(_), A = e.makeSnapshot();
    let w;
    if (v.dragMode === "paint" && s) y && (s.x1 = Math.min(s.x1, y.cx), s.y1 = Math.min(s.y1, y.cy), s.x2 = Math.max(s.x2, y.cx), s.y2 = Math.max(s.y2, y.cy)), w = s;
    else if (y) {
      const x = e.normalizeRect(o, y);
      w = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) && A ? e.snapRectToMajor(x, A) : x;
    } else {
      c();
      return;
    }
    v.onCommit(w, A) === false || c();
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
function Et([e, t, n], r = 1) {
  return r === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${r.toFixed(3)})`;
}
function Go([e, t, n], r = 1, i = 1) {
  const o = t * r;
  return i === 1 ? `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)} / ${i.toFixed(3)})`;
}
const Df = "theme-preference";
function yv() {
  var _a2;
  if (typeof window > "u") return "system";
  const e = (_a2 = window.localStorage) == null ? void 0 : _a2.getItem(Df);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const ei = X(yv()), Hf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
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
const ys = R(() => ei.value === "light" ? Il : ei.value === "dark" || Hf.value ? Rl : Il);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, r = (o, s) => {
      n.style.setProperty(o, s);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", r("--theme-surface", Et(t.surface)), r("--theme-ink", Et(t.ink)), r("--theme-ink-secondary", Et(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-ink-tertiary", Et(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-text-primary", Et(t.ink)), r("--theme-text-secondary", Et(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-text-tertiary", Et(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-grid-minor", Et(_n(t.surface, t.ink, t.minor_t))), r("--theme-grid-major", Et(_n(t.surface, t.ink, t.major_t))), r("--theme-grid-border", Et(_n(t.surface, t.ink, t.border_t))), r("--theme-accent", Go(t.accent, t.accent_chroma_scale)), r("--theme-accent-ring", Go(t.accent, t.accent_chroma_scale, 0.45)), r("--theme-selection-bg", Go(t.accent, t.accent_chroma_scale, 0.2)), r("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const i = document.querySelector('meta[name="theme-color"]');
    i && i.setAttribute("content", Et(t.surface));
  };
  e(ys.value), te(ys, e);
}
function Nf() {
  return { preference: ei, theme: ys, setPreference(e) {
    ei.value = e;
  } };
}
const bv = 5, wv = 16, _v = 2160;
function Sv(e) {
  let t = null, n = 0, r = 0, i = null, o = null, s = 0, a = null, l = null, u = false, c = false;
  function f(k) {
    const V = k.getBoundingClientRect();
    return { width: Math.max(1, Math.round(V.width * devicePixelRatio)), height: Math.max(1, Math.round(V.height * devicePixelRatio)) };
  }
  function d(k) {
    var _a2, _b2;
    const V = (_b2 = (_a2 = k.devicePixelContentBoxSize) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.inlineSize;
    return typeof V == "number" && V > 0 ? V : Math.max(1, Math.round(k.contentRect.width * devicePixelRatio));
  }
  function h(k) {
    const V = Math.round(screen.height * devicePixelRatio);
    return Math.max(k, V, _v);
  }
  function b() {
    const k = document.createElement("div");
    k.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(k);
    const V = k.getBoundingClientRect().width;
    return k.remove(), Math.abs(V - 100) > 0.1;
  }
  function m(k) {
    return Zg(k, wv, devicePixelRatio);
  }
  function _(k, V, j) {
    const I = V / devicePixelRatio, $ = j / devicePixelRatio;
    let q = I, Y = $;
    if (u) {
      const ne = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      ne > 0 && ne !== 1 && (q = I / ne, Y = $ / ne);
    }
    k.style.width = `${q.toFixed(2)}px`, k.style.height = `${Y.toFixed(2)}px`;
  }
  function v(k) {
    k.classList.add("app-bg--hidden"), o !== null && clearTimeout(o), o = window.setTimeout(() => {
      o = null, k.classList.remove("app-bg--hidden");
    }, 120);
  }
  function y(k) {
    const V = m(k);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * V * bv / devicePixelRatio).toFixed(1)}px`);
  }
  function A(k, V) {
    n = V, _(k, n, r), v(k), y(n), e({ type: "resize", width: n, height: r });
  }
  function w(k) {
    a === null && (a = requestAnimationFrame(() => {
      a = null, !(s === 0 || s === n) && A(k, s);
    }));
  }
  function S(k) {
    let V = false;
    const j = () => {
      if (V) return;
      const I = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), $ = () => {
        V || (k(), j());
      };
      I.addEventListener("change", $, { once: true });
    };
    return j(), () => {
      V = true;
    };
  }
  function x(k, V) {
    t = V, u = b();
    const j = f(k);
    n = j.width, r = h(j.height), V.width = n, V.height = r, _(V, n, r);
    const I = V.transferControlToOffscreen(), $ = m(n);
    return y(n), i = new ResizeObserver(([q]) => {
      if (!t) return;
      const Y = d(q);
      Y <= 0 || Y === n || (s = Y, w(t));
    }), i.observe(k), l = S(() => {
      if (!t) return;
      u = b();
      const q = Math.round(k.getBoundingClientRect().height * devicePixelRatio);
      r = h(q), A(t, n);
    }), { offscreen: I, gridPitch: $ };
  }
  function T() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      c || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 800));
  }
  function C() {
    c = true, i == null ? void 0 : i.disconnect(), l == null ? void 0 : l(), o !== null && (clearTimeout(o), o = null), a !== null && (cancelAnimationFrame(a), a = null), t = null;
  }
  return { initialize: x, revealCanvas: T, teardown: C };
}
const Cv = ua("AppBackground");
function xv(e) {
  e.on("startup_breakdown", (t) => {
    const n = (o) => `${o.toFixed(0)}ms`, r = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], i = t.phases.newOffscreenPhases;
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
const vi = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0 }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0 }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0 }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1 }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1 }], bo = vi[0], Ff = new Map(vi.map((e) => [e.id, e]));
new Map(vi.map((e) => [e.route, e]));
function pi(e) {
  return Ff.get(e) ?? bo;
}
function Lv(e, t) {
  return vi.find((n) => n.gx === e && n.gy === t) ?? null;
}
function da(e, t, n) {
  const r = pi(e);
  return Lv(r.gx + t, r.gy + n);
}
function Av(e, t) {
  return da(e, 0, t);
}
function Ev(e, t) {
  return da(e, t, 0);
}
function $f(e) {
  return typeof e == "string" && Ff.has(e) ? e : bo.id;
}
function kv(e, t) {
  return Math.min(e.w, t);
}
function Ol(e, t, n, r) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + r;
}
function Mv(e, t) {
  const n = t.zoom, r = kv(e, t.panelMaxWidth), i = t.panelHeight ?? e.h;
  return { col: Ol(e.w, r, n, t.gutterX), row: Ol(e.h, i, n, t.gutterY) };
}
function wo(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function Tv(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function Pv(e, t, n, r) {
  const i = Tv(e, t, n), o = Math.hypot(i.x - n.w / 2, i.y - n.h / 2), s = Math.min(1, o / Math.max(r.radius, 1e-6)), a = s * s * (3 - 2 * s);
  return r.floor + (1 - r.floor) * (1 - a);
}
const Iv = 1200, Vl = 0.55, Rv = 0.7, Ov = 0.7, Dl = 0.5, Vv = 280, Dv = 180, Hv = 24, Hl = 1.4, Nv = 0.6, Fv = 300, $v = 0.01;
function Bv(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function jv(e, t, n = $v) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function zv(e, t) {
  const n = t.w / 2, r = t.h / 2;
  return `translate(${n}px, ${r}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function Wv(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const Gv = 0.18, Uv = 1;
function Bf(e) {
  return Mv(e, { panelMaxWidth: Iv, gutterX: Vl * e.w, gutterY: Vl * e.h, zoom: 1 });
}
const yi = X({ w: 1, h: 1 });
function jf() {
  const e = pi(bo.id), t = wo(e, Bf(yi.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const xt = X(jf()), Qn = X(jf()), _o = X(false), ha = X(bo.id), ma = X(0), zf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    zf.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const ga = R(() => Bf(yi.value));
let Tn = 0;
function Wf() {
  if (xt.value = Bv(xt.value, Qn.value, Gv), jv(xt.value, Qn.value)) {
    xt.value = { ...Qn.value }, _o.value = false, Tn = 0;
    return;
  }
  Tn = requestAnimationFrame(Wf);
}
function Zv() {
  Tn === 0 && (_o.value = true, Tn = requestAnimationFrame(Wf));
}
function Kv() {
  Tn !== 0 && (cancelAnimationFrame(Tn), Tn = 0), _o.value = false;
}
function va(e, t, n) {
  Kv();
  const r = n ?? xt.value.zoom;
  xt.value = { x: e, y: t, zoom: r }, Qn.value = { x: e, y: t, zoom: r };
}
function Gf(e, t, n = {}) {
  const r = n.zoom ?? Qn.value.zoom;
  if (Qn.value = { x: e, y: t, zoom: r }, n.snap || zf.value) {
    va(e, t, r);
    return;
  }
  Zv();
}
function Yv(e, t = {}) {
  ha.value = e, ma.value = 0;
  const n = pi(e), r = wo(n, ga.value);
  Gf(r.x, r.y, { zoom: n.zoom, snap: t.snap });
}
function qv() {
  ha.value = null;
}
function Xv(e, t) {
  yi.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function Jv(e) {
  ma.value = Math.max(0, e);
}
te(ga, (e) => {
  const t = ha.value;
  if (t === null) return;
  const n = pi(t), r = wo(n, e);
  va(r.x, r.y, n.zoom ?? xt.value.zoom);
});
const Qv = R(() => ({ transform: zv(xt.value, yi.value) })), e1 = R(() => Wv({ x: xt.value.x, y: xt.value.y + ma.value, zoom: xt.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, Uv));
function vr() {
  return { camera: xt, isAnimating: _o, viewport: yi, spacing: ga, cameraStyle: Qv, worldOffsetDevicePx: e1, panTo: Gf, panToWaypoint: Yv, snapTo: va, releaseAnchor: qv, setViewport: Xv, setCaptureScroll: Jv };
}
const Nl = 0.1;
function t1(e) {
  const { worldOffsetDevicePx: t } = vr();
  let n = Number.NaN, r = Number.NaN;
  te(t, ({ x: i, y: o }) => {
    Math.abs(i - n) < Nl && Math.abs(o - r) < Nl || (n = i, r = o, e.post({ type: "camera", x: i, y: o }));
  });
}
function Uf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Re = typeof window < "u", pa = Re && "IntersectionObserver" in window, n1 = Re && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Zf = Re && "matchMedia" in window && typeof window.matchMedia == "function", Yi = () => Zf && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Fl(e, t, n) {
  r1(e, t), t.set(e, n);
}
function r1(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $l(e, t, n) {
  return e.set(Kf(e, t), n), n;
}
function qt(e, t) {
  return e.get(Kf(e, t));
}
function Kf(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Yf(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let i = 0; i < r; i++) {
    if (e == null) return n;
    e = e[t[i]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function bs(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Yf(e, t.split("."), n));
}
function kr(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const i = t(e, n);
    return typeof i > "u" ? n : i;
  }
  if (typeof t == "string") return bs(e, t, n);
  if (Array.isArray(t)) return Yf(e, t, n);
  if (typeof t != "function") return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}
function qf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, r) => t + r);
}
function ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function ws(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Bl(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function i1(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function Uo(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function o1(e, t) {
  const n = {};
  for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function Dn(e, t) {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}
const s1 = /^on[^a-z]/, Xf = (e) => s1.test(e);
function ya(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ti(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function jl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function zl(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function a1(e) {
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
    const o = e[i], s = t[i];
    if (Bl(o) && Bl(s)) {
      r[i] = pt(o, s, n);
      continue;
    }
    if (n && Array.isArray(o) && Array.isArray(s)) {
      r[i] = n(o, s);
      continue;
    }
    r[i] = s;
  }
  return r;
}
function Jf(e) {
  return e.map((t) => t.type === ye ? Jf(t.children) : t).flat();
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
class l1 {
  constructor(t) {
    Fl(this, $n, []), Fl(this, Sn, 0), this.size = t;
  }
  get isFull() {
    return qt($n, this).length === this.size;
  }
  push(t) {
    qt($n, this)[qt(Sn, this)] = t, $l(Sn, this, (qt(Sn, this) + 1) % this.size);
  }
  values() {
    return qt($n, this).slice(qt(Sn, this)).concat(qt($n, this).slice(0, qt(Sn, this)));
  }
  clear() {
    qt($n, this).length = 0, $l(Sn, this, 0);
  }
}
function ba(e) {
  const t = Ke({});
  sn(() => {
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
function Qf(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const $r = () => [Function, Array];
function Wl(e, t) {
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
function ed(e, t, n) {
  let r, i = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    i += o, r = e[i];
  while ((!r || r.offsetParent == null || !((n == null ? void 0 : n(r)) ?? true)) && i < e.length && i >= 0);
  return r;
}
function Br(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = er(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const r = ed(n, t);
    r ? r.focus() : Br(e, t === "next" ? "first" : "last");
  }
}
function c1(e, t) {
  if (!(Re && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function u1(e, t) {
  if (!Re || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function f1(e, t) {
  const n = e.clientX, r = e.clientY, i = t.getBoundingClientRect(), o = i.left, s = i.top, a = i.right, l = i.bottom;
  return n >= o && n <= a && r >= s && r <= l;
}
function _s() {
  const e = ce(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => i1(e.value) }), t;
}
function cr(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function d1(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, i] = n;
    return t.includes(r) ? !!i : i !== void 0;
  }));
}
const td = ["top", "bottom"], h1 = ["start", "end", "left", "right"];
function Ss(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = qi(td, n) ? "start" : qi(h1, n) ? "top" : "center"), { side: Gl(n, t), align: Gl(r, t) };
}
function Gl(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Zo(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Ko(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Ul(e) {
  return { side: e.align, align: e.side };
}
function Zl(e) {
  return qi(td, e.side) ? "y" : "x";
}
class Lt {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, r = t instanceof Element, i = r ? 1 + (1 - n) / n : 1, { x: o, y: s, width: a, height: l } = r ? t.getBoundingClientRect() : t;
    this.x = o * i, this.y = s * i, this.width = a * i, this.height = l * i;
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
function Kl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function nd(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new Lt({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new Lt(e);
}
function m1(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new Lt({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new Lt({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new Lt(e);
}
function rd(e) {
  const t = new Lt(e), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, o, s, a, l;
    if (r.startsWith("matrix3d(")) i = r.slice(9, -1).split(/, /), o = Number(i[0]), s = Number(i[5]), a = Number(i[12]), l = Number(i[13]);
    else if (r.startsWith("matrix(")) i = r.slice(7, -1).split(/, /), o = Number(i[0]), s = Number(i[3]), a = Number(i[4]), l = Number(i[5]);
    else return new Lt(t);
    const u = n.transformOrigin, c = t.x - a - (1 - o) * parseFloat(u), f = t.y - l - (1 - s) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = o ? t.width / o : e.offsetWidth + 1, h = s ? t.height / s : e.offsetHeight + 1;
    return new Lt({ x: c, y: f, width: d, height: h });
  } else return new Lt(t);
}
function Ln(e, t, n) {
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
function g1(e, t) {
  Object.keys(t).forEach((n) => {
    if (Xf(n)) {
      const r = Qf(n), i = Hi.get(e);
      if (t[n] == null) i == null ? void 0 : i.forEach((o) => {
        const [s, a] = o;
        s === r && (e.removeEventListener(r, a), i.delete(o));
      });
      else if (!i || ![...i].some((o) => o[0] === r && o[1] === t[n])) {
        e.addEventListener(r, t[n]);
        const o = i || /* @__PURE__ */ new Set();
        o.add([r, t[n]]), Hi.has(e) || Hi.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function v1(e, t) {
  Object.keys(t).forEach((n) => {
    if (Xf(n)) {
      const r = Qf(n), i = Hi.get(e);
      i == null ? void 0 : i.forEach((o) => {
        const [s, a] = o;
        s === r && (e.removeEventListener(r, a), i.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Bn = 2.4, Yl = 0.2126729, ql = 0.7151522, Xl = 0.072175, p1 = 0.55, y1 = 0.58, b1 = 0.57, w1 = 0.62, Pi = 0.03, Jl = 1.45, _1 = 5e-4, S1 = 1.25, C1 = 1.25, Ql = 0.078, ec = 12.82051282051282, Ii = 0.06, tc = 1e-3;
function nc(e, t) {
  const n = (e.r / 255) ** Bn, r = (e.g / 255) ** Bn, i = (e.b / 255) ** Bn, o = (t.r / 255) ** Bn, s = (t.g / 255) ** Bn, a = (t.b / 255) ** Bn;
  let l = n * Yl + r * ql + i * Xl, u = o * Yl + s * ql + a * Xl;
  if (l <= Pi && (l += (Pi - l) ** Jl), u <= Pi && (u += (Pi - u) ** Jl), Math.abs(u - l) < _1) return 0;
  let c;
  if (u > l) {
    const f = (u ** p1 - l ** y1) * S1;
    c = f < tc ? 0 : f < Ql ? f - f * ec * Ii : f - Ii;
  } else {
    const f = (u ** w1 - l ** b1) * C1;
    c = f > -tc ? 0 : f > -Ql ? f - f * ec * Ii : f + Ii;
  }
  return c * 100;
}
const Xi = 0.20689655172413793, x1 = (e) => e > Xi ** 3 ? Math.cbrt(e) : e / (3 * Xi ** 2) + 4 / 29, L1 = (e) => e > Xi ? e ** 3 : 3 * Xi ** 2 * (e - 4 / 29);
function id(e) {
  const t = x1, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function od(e) {
  const t = L1, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const A1 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], E1 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, k1 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], M1 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function sd(e) {
  const t = Array(3), n = E1, r = A1;
  for (let i = 0; i < 3; ++i) t[i] = Math.round(ti(n(r[i][0] * e[0] + r[i][1] * e[1] + r[i][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function wa(e) {
  let { r: t, g: n, b: r } = e;
  const i = [0, 0, 0], o = M1, s = k1;
  t = o(t / 255), n = o(n / 255), r = o(r / 255);
  for (let a = 0; a < 3; ++a) i[a] = s[a][0] * t + s[a][1] * n + s[a][2] * r;
  return i;
}
function Cs(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function T1(e) {
  return Cs(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const rc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, P1 = { rgb: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), rgba: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), hsl: (e, t, n, r) => ic({ h: e, s: t, l: n, a: r }), hsla: (e, t, n, r) => ic({ h: e, s: t, l: n, a: r }), hsv: (e, t, n, r) => ni({ h: e, s: t, v: n, a: r }), hsva: (e, t, n, r) => ni({ h: e, s: t, v: n, a: r }) };
function Gt(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && rc.test(e)) {
    const { groups: t } = e.match(rc), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((o, s) => o.endsWith("%") || s > 0 && s < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return P1[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), R1(t);
  } else if (typeof e == "object") {
    if (Uo(e, ["r", "g", "b"])) return e;
    if (Uo(e, ["h", "s", "l"])) return ni(ad(e));
    if (Uo(e, ["h", "s", "v"])) return ni(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ni(e) {
  const { h: t, s: n, v: r, a: i } = e, o = (a) => {
    const l = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0);
  }, s = [o(5), o(3), o(1)].map((a) => Math.round(a * 255));
  return { r: s[0], g: s[1], b: s[2], a: i };
}
function ic(e) {
  return ni(ad(e));
}
function ad(e) {
  const { h: t, s: n, l: r, a: i } = e, o = r + n * Math.min(r, 1 - r), s = o === 0 ? 0 : 2 - 2 * r / o;
  return { h: t, s, v: o, a: i };
}
function Ri(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function I1(e) {
  let { r: t, g: n, b: r, a: i } = e;
  return `#${[Ri(t), Ri(n), Ri(r), i !== void 0 ? Ri(Math.round(i * 255)) : ""].join("")}`;
}
function R1(e) {
  e = O1(e);
  let [t, n, r, i] = a1(e, 2).map((o) => parseInt(o, 16));
  return i = i === void 0 ? i : i / 255, { r: t, g: n, b: r, a: i };
}
function O1(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = jl(jl(e, 6), 8, "F")), e;
}
function V1(e, t) {
  const n = id(wa(e));
  return n[0] = n[0] + t * 10, sd(od(n));
}
function D1(e, t) {
  const n = id(wa(e));
  return n[0] = n[0] - t * 10, sd(od(n));
}
function H1(e) {
  const t = Gt(e);
  return wa(t)[1];
}
function ld(e) {
  const t = Math.abs(nc(Gt(0), Gt(e)));
  return Math.abs(nc(Gt(16777215), Gt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function J(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const s = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : { type: e[i] };
    return n && i in n ? r[i] = { ...s, default: n[i] } : r[i] = s, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const Ge = J({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function Ue(e, t) {
  const n = mi();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ue(e).type;
  return Pn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function N1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const ur = Symbol.for("vuetify:defaults");
function F1(e) {
  return X(e);
}
function _a() {
  const e = ke(ur);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function So(e, t) {
  const n = _a(), r = X(e), i = R(() => {
    if (ue(t == null ? void 0 : t.disabled)) return n.value;
    const s = ue(t == null ? void 0 : t.scoped), a = ue(t == null ? void 0 : t.reset), l = ue(t == null ? void 0 : t.root);
    if (r.value == null && !(s || a || l)) return n.value;
    let u = pt(r.value, { prev: n.value });
    if (s) return u;
    if (a || l) {
      const c = Number(a || 1 / 0);
      for (let f = 0; f <= c && !(!u || !("prev" in u)); f++) u = u.prev;
      return u && typeof l == "string" && l in u && (u = pt(pt(u, { prev: u }), u[l])), u;
    }
    return u.prev ? pt(u.prev, u) : u;
  });
  return qe(ur, i), i;
}
function $1(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Pn(t)] < "u");
}
function B1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _a();
  const r = Ue("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const i = R(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), o = new Proxy(e, { get(l, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(l, u);
    if (u === "class" || u === "style") return [(_a2 = i.value) == null ? void 0 : _a2[u], c].filter((h) => h != null);
    if ($1(r.vnode, u)) return c;
    const f = (_b2 = i.value) == null ? void 0 : _b2[u];
    if (f !== void 0) return f;
    const d = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return d !== void 0 ? d : c;
  } }), s = ce();
  sn(() => {
    if (i.value) {
      const l = Object.entries(i.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      s.value = l.length ? Object.fromEntries(l) : void 0;
    } else s.value = void 0;
  });
  function a() {
    const l = N1(ur, r);
    qe(ur, R(() => s.value ? pt((l == null ? void 0 : l.value) ?? {}, s.value) : l == null ? void 0 : l.value));
  }
  return { props: o, provideSubDefaults: a };
}
function pr(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = J(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return o1(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const o = _a();
      if (!o.value) return e._setup(r, i);
      const { props: s, provideSubDefaults: a } = B1(r, r._as ?? e.name, o), l = e._setup(s, i);
      return a(), l;
    };
  }
  return e;
}
function Ae() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? pr : Xe)(t);
}
function j1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Ae()({ name: n ?? mr(wt(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...Ge() }, setup(r, i) {
    let { slots: o } = i;
    return () => {
      var _a2;
      return vn(r.tag, { class: [e, r.class], style: r.style }, (_a2 = o.default) == null ? void 0 : _a2.call(o));
    };
  } });
}
function z1(e, t, n, r) {
  if (!n || cr(e) || cr(t)) return;
  const i = n.get(e);
  if (i) i.set(t, r);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, r), n.set(e, o);
  }
}
function W1(e, t, n) {
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
  const i = W1(e, t, n);
  return i || (z1(e, t, n, true), r.every((o) => tr(e[o], t[o], n)));
}
function cd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const xs = "cubic-bezier(0.4, 0, 0.2, 1)", oc = "cubic-bezier(0.0, 0, 0.2, 1)", sc = "cubic-bezier(0.4, 0, 1, 1)", G1 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function U1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? Z1(e) : Sa(e)) return e;
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
function Z1(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function K1(e) {
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
function Y1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, r = 0, i = 0, o = false, s = 0;
  function a() {
    clearTimeout(r), o = false, s = 0;
  }
  const l = function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++) c[f] = arguments[f];
    clearTimeout(r);
    const d = Date.now();
    s || (s = d);
    const h = d - Math.max(s, i);
    function b() {
      i = Date.now(), r = setTimeout(a, t), e(...c);
    }
    o ? h >= t ? b() : n.trailing && (r = setTimeout(b, t - h)) : (o = true, n.leading && b());
  };
  return l.clear = a, l.immediate = e, l;
}
const yr = J({ border: [Boolean, Number, String] }, "border");
function br(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { borderClasses: R(() => {
    const r = e.border;
    return r === true || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((i) => `border-${i}`) : [];
  }) };
}
const q1 = [null, "default", "comfortable", "compact"], bi = J({ density: { type: String, default: "default", validator: (e) => q1.includes(e) } }, "density");
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
    const n = De(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const Hn = J({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function Nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { roundedClasses: R(() => {
    const r = De(e) ? e.value : e.rounded, i = De(e) ? false : e.tile, o = [];
    if (i || r === false) o.push("rounded-0");
    else if (r === true || r === "") o.push(`${t}--rounded`);
    else if (typeof r == "string" || r === 0) for (const s of String(r).split(" ")) o.push(`rounded-${s}`);
    return o;
  }) };
}
const _t = J({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), ri = Symbol.for("vuetify:theme"), Vt = J({ theme: String }, "theme");
function ac() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function X1() {
  var _a2, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ac();
  const t = ac();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [r, i] of Object.entries(e.themes ?? {})) {
    const o = i.dark || r === "dark" ? (_a2 = t.themes) == null ? void 0 : _a2.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[r] = pt(o, i);
  }
  return pt(t, { ...e, themes: n });
}
function Cn(e, t, n, r) {
  e.push(`${tp(t, r)} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function lc(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, i = [];
  for (const [o, s] of Object.entries(e.colors)) {
    const a = Gt(s);
    i.push(`--${t}theme-${o}: ${a.r},${a.g},${a.b}`), o.startsWith("on-") || i.push(`--${t}theme-${o}-overlay-multiplier: ${H1(s) > 0.18 ? n : r}`);
  }
  for (const [o, s] of Object.entries(e.variables)) {
    const a = typeof s == "string" && s.startsWith("#") ? Gt(s) : void 0, l = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    i.push(`--${t}${o}: ${l ?? s}`);
  }
  return i;
}
function J1(e, t, n) {
  const r = {};
  if (n) for (const i of ["lighten", "darken"]) {
    const o = i === "lighten" ? V1 : D1;
    for (const s of qf(n[i], 1)) r[`${e}-${i}-${s}`] = I1(o(Gt(t), s));
  }
  return r;
}
function Q1(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const i = e[r];
    i && (n = { ...n, ...J1(r, i, t) });
  }
  return n;
}
function ep(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, i = Gt(e[n]);
    t[r] = ld(i);
  }
  return t;
}
function tp(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function np(e, t, n) {
  const r = rp(e, t);
  r && (r.innerHTML = n);
}
function rp(e, t) {
  if (!Re) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function ip(e) {
  const t = X1(e), n = ce(t.defaultTheme), r = X(t.themes), i = ce("light"), o = R({ get() {
    return n.value === "system" ? i.value : n.value;
  }, set(v) {
    n.value = v;
  } }), s = R(() => {
    const v = {};
    for (const [y, A] of Object.entries(r.value)) {
      const w = { ...A.colors, ...Q1(A.colors, t.variations) };
      v[y] = { ...A, colors: { ...w, ...ep(w) } };
    }
    return v;
  }), a = F(() => s.value[o.value]), l = F(() => n.value === "system"), u = R(() => {
    var _a2;
    const v = [], y = t.unimportant ? "" : " !important", A = t.scoped ? t.prefix : "";
    ((_a2 = a.value) == null ? void 0 : _a2.dark) && Cn(v, ":root", ["color-scheme: dark"], t.scope), Cn(v, ":root", lc(a.value, t.prefix), t.scope);
    for (const [S, x] of Object.entries(s.value)) Cn(v, `.${t.prefix}theme--${S}`, [`color-scheme: ${x.dark ? "dark" : "normal"}`, ...lc(x, t.prefix)], t.scope);
    if (t.utilities) {
      const S = [], x = [], T = new Set(Object.values(s.value).flatMap((C) => Object.keys(C.colors)));
      for (const C of T) C.startsWith("on-") ? Cn(x, `.${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${y}`], t.scope) : (Cn(S, `.${A}bg-${C}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${C}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${C}))${y}`, `color: rgb(var(--${t.prefix}theme-on-${C}))${y}`], t.scope), Cn(x, `.${A}text-${C}`, [`color: rgb(var(--${t.prefix}theme-${C}))${y}`], t.scope), Cn(x, `.${A}border-${C}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${C})`], t.scope));
      t.layers ? v.push(`@layer background {
`, ...S.map((C) => `  ${C}`), `}
`, `@layer foreground {
`, ...x.map((C) => `  ${C}`), `}
`) : v.push(...S, ...x);
    }
    let w = v.map((S, x) => x === 0 ? S : `    ${S}`).join("");
    return t.layers && (w = `@layer vuetify.theme {
` + v.map((S) => `  ${S}`).join("") + `
}`), w;
  }), c = F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), f = F(() => Object.keys(s.value));
  if (Zf) {
    let y = function() {
      i.value = v.matches ? "dark" : "light";
    };
    const v = window.matchMedia("(prefers-color-scheme: dark)");
    y(), v.addEventListener("change", y, { passive: true }), yu() && ct(() => {
      v.removeEventListener("change", y);
    });
  }
  function d(v) {
    if (t.isDisabled) return;
    const y = v._context.provides.usehead;
    if (y) {
      let A = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (y.push) {
        const w = y.push(A);
        Re && te(u, () => {
          w.patch(A);
        });
      } else Re ? (y.addHeadObjs(F(A)), sn(() => y.updateDOM())) : y.addHeadObjs(A());
    } else {
      let A = function() {
        np(t.stylesheetId, t.cspNonce, u.value);
      };
      Re ? te(u, A, { immediate: true }) : A();
    }
  }
  function h(v) {
    v !== "system" && !f.value.includes(v) || (o.value = v);
  }
  function b() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    const y = v.indexOf(o.value), A = y === -1 ? 0 : (y + 1) % v.length;
    h(v[A]);
  }
  function m() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    b(v);
  }
  const _ = new Proxy(o, { get(v, y) {
    return Reflect.get(v, y);
  }, set(v, y, A) {
    return y === "value" && Uf(`theme.global.name.value = ${A}`, `theme.change('${A}')`), Reflect.set(v, y, A);
  } });
  return { install: d, change: h, cycle: b, toggle: m, isDisabled: t.isDisabled, isSystem: l, name: o, themes: r, current: a, computedThemes: s, prefix: t.prefix, themeClasses: c, styles: u, global: { name: _, current: a } };
}
function Kt(e) {
  Ue("provideTheme");
  const t = ke(ri, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = F(() => e.theme ?? t.name.value), o = { ...t, name: n, current: F(() => t.themes.value[n.value]), themeClasses: F(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return qe(ri, o), o;
}
function op() {
  Ue("useTheme");
  const e = ke(ri, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Ca(e) {
  return ba(() => {
    const { class: t, style: n } = ap(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function ii(e) {
  const { colorClasses: t, colorStyles: n } = Ca(() => ({ text: rt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Co(e) {
  const { colorClasses: t, colorStyles: n } = Ca(() => ({ background: rt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function sp(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function ap(e) {
  const t = sp(rt(e)), n = [], r = {};
  if (t.background) if (Cs(t.background)) {
    if (r.backgroundColor = t.background, !t.text && T1(t.background)) {
      const i = Gt(t.background);
      if (i.a == null || i.a === 1) {
        const o = ld(i);
        r.color = o, r.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Cs(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: r };
}
const lp = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function xa(e, t) {
  return P(ye, null, [e && P("span", { key: "overlay", class: Le(`${t}__overlay`) }, null), P("span", { key: "underlay", class: Le(`${t}__underlay`) }, null)]);
}
const Ci = J({ color: String, variant: { type: String, default: "elevated", validator: (e) => lp.includes(e) } }, "variant");
function La(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = F(() => {
    const { variant: o } = rt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: r, colorStyles: i } = Ca(() => {
    const { variant: o, color: s } = rt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: s };
  });
  return { colorClasses: r, colorStyles: i, variantClasses: n };
}
const ud = J({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...yr(), ...Ge(), ...bi(), ..._i(), ...Hn(), ..._t(), ...Vt(), ...Ci() }, "VBtnGroup"), cc = Ae()({ name: "VBtnGroup", props: ud(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = Kt(e), { densityClasses: i } = wi(e), { borderClasses: o } = br(e), { elevationClasses: s } = Si(e), { roundedClasses: a } = Nn(e);
  So({ VBtn: { height: F(() => e.direction === "horizontal" ? "auto" : null), baseColor: F(() => e.baseColor), color: F(() => e.color), density: F(() => e.density), flat: true, variant: F(() => e.variant) } }), Fe(() => M(e.tag, { class: Le(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, r.value, o.value, i.value, s.value, a.value, e.class]), style: Ne(e.style) }, n));
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
  const o = Ue("useProxiedModel"), s = X(e[t] !== void 0 ? e[t] : n), a = Pn(t), u = R(a !== t ? () => {
    var _a2, _b2, _c2, _d2;
    return e[t], !!((((_a2 = o.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(a))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${a}`))));
  } : () => {
    var _a2, _b2;
    return e[t], !!(((_a2 = o.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  xi(() => !u.value, () => {
    te(() => e[t], (f) => {
      s.value = f;
    });
  });
  const c = R({ get() {
    const f = e[t];
    return r(u.value ? f : s.value);
  }, set(f) {
    const d = i(f), h = ee(u.value ? e[t] : s.value);
    h === d || r(h) === f || (s.value = d, o == null ? void 0 : o.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : s.value }), c;
}
const cp = J({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), up = J({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function fp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const r = Ue("useGroupItem");
  if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const i = gr();
  qe(Symbol.for(`${t.description}:id`), i);
  const o = ke(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const s = F(() => e.value), a = R(() => !!(o.disabled.value || e.disabled));
  function l() {
    o == null ? void 0 : o.register({ id: i, value: s, disabled: a }, r);
  }
  function u() {
    o == null ? void 0 : o.unregister(i);
  }
  l(), At(() => u());
  const c = R(() => o.isSelected(i)), f = R(() => o.items.value[0].id === i), d = R(() => o.items.value[o.items.value.length - 1].id === i), h = R(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return te(c, (b) => {
    r.emit("group:selected", { value: b });
  }, { flush: "sync" }), { id: i, isSelected: c, isFirst: f, isLast: d, toggle: () => o.select(i, !c.value), select: (b) => o.select(i, b), selectedClass: h, value: s, disabled: a, group: o, register: l, unregister: u };
}
function dp(e, t) {
  let n = false;
  const r = Ke([]), i = Zt(e, "modelValue", [], (d) => d === void 0 ? [] : fd(r, d === null ? [null] : ya(d)), (d) => {
    const h = mp(r, d);
    return e.multiple ? h : h[0];
  }), o = Ue("useGroup");
  function s(d, h) {
    const b = d, m = Symbol.for(`${t.description}:id`), v = Un(m, o == null ? void 0 : o.vnode).indexOf(h);
    ue(b.value) === void 0 && (b.value = v, b.useIndexAsValue = true), v > -1 ? r.splice(v, 0, b) : r.push(b);
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
  Ot(() => {
    l();
  }), At(() => {
    n = true;
  }), ra(() => {
    for (let d = 0; d < r.length; d++) r[d].useIndexAsValue && (r[d].value = d);
  });
  function u(d, h) {
    const b = r.find((m) => m.id === d);
    if (!(h && (b == null ? void 0 : b.disabled))) if (e.multiple) {
      const m = i.value.slice(), _ = m.findIndex((y) => y === d), v = ~_;
      if (h = h ?? !v, v && e.mandatory && m.length <= 1 || !v && e.max != null && m.length + 1 > e.max) return;
      _ < 0 && h ? m.push(d) : _ >= 0 && !h && m.splice(_, 1), i.value = m;
    } else {
      const m = i.value.includes(d);
      if (e.mandatory && m || !m && !h) return;
      i.value = h ?? !m ? [d] : [];
    }
  }
  function c(d) {
    if (e.multiple, i.value.length) {
      const h = i.value[0], b = r.findIndex((v) => v.id === h);
      let m = (b + d) % r.length, _ = r[m];
      for (; _.disabled && m !== b; ) m = (m + d) % r.length, _ = r[m];
      if (_.disabled) return;
      i.value = [r[m].id];
    } else {
      const h = r.find((b) => !b.disabled);
      h && (i.value = [h.id]);
    }
  }
  const f = { register: s, unregister: a, selected: i, select: u, disabled: F(() => e.disabled), prev: () => c(r.length - 1), next: () => c(1), isSelected: (d) => i.value.includes(d), selectedClass: F(() => e.selectedClass), items: F(() => r), getItemIndex: (d) => hp(r, d) };
  return qe(t, f), f;
}
function hp(e, t) {
  const n = fd(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function fd(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.find((s) => tr(r, s.value)), o = e[r];
    (i == null ? void 0 : i.value) !== void 0 ? n.push(i.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function mp(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.findIndex((o) => o.id === r);
    if (~i) {
      const o = e[i];
      n.push(o.value !== void 0 ? o.value : i);
    }
  }), n;
}
const dd = Symbol.for("vuetify:v-btn-toggle"), gp = J({ ...ud(), ...cp() }, "VBtnToggle"), vp = Ae()({ name: "VBtnToggle", props: gp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: r, next: i, prev: o, select: s, selected: a } = dp(e, dd);
  return Fe(() => {
    const l = cc.filterProps(e);
    return M(cc, Te({ class: ["v-btn-toggle", e.class] }, l, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: r, next: i, prev: o, select: s, selected: a })];
    } });
  }), { next: i, prev: o, select: s };
} }), pp = J({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Mt = Ae(false)({ name: "VDefaultsProvider", props: pp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: r, disabled: i, reset: o, root: s, scoped: a } = Du(e);
  return So(r, { reset: o, root: s, scoped: a, disabled: i }), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), yt = [String, Function, Object, Array], Ls = Symbol.for("vuetify:icons"), xo = J({ icon: { type: yt }, tag: { type: [String, Object, Function], required: true } }, "icon"), uc = Ae()({ name: "VComponentIcon", props: xo(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const r = e.icon;
    return M(e.tag, null, { default: () => {
      var _a2;
      return [e.icon ? M(r, null, null) : (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  };
} }), Aa = pr({ name: "VSvgIcon", inheritAttrs: false, props: xo(), setup(e, t) {
  let { attrs: n } = t;
  return () => M(e.tag, Te(n, { style: null }), { default: () => [P("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? P("path", { d: r[0], "fill-opacity": r[1] }, null) : P("path", { d: r }, null)) : P("path", { d: e.icon }, null)])] });
} });
pr({ name: "VLigatureIcon", props: xo(), setup(e) {
  return () => M(e.tag, null, { default: () => [e.icon] });
} });
const hd = pr({ name: "VClassIcon", props: xo(), setup(e) {
  return () => M(e.tag, { class: Le(e.icon) }, null);
} }), yp = (e) => {
  const t = ke(Ls);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: R(() => {
    var _a2;
    const r = rt(e);
    if (!r) return { component: uc };
    let i = r;
    if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (_a2 = t.aliases) == null ? void 0 : _a2[i.slice(1)])), Array.isArray(i)) return { component: Aa, icon: i };
    if (typeof i != "string") return { component: uc, icon: i };
    const o = Object.keys(t.sets).find((l) => typeof i == "string" && i.startsWith(`${l}:`)), s = o ? i.slice(o.length + 1) : i;
    return { component: t.sets[o ?? t.defaultSet].component, icon: s };
  }) };
}, bp = ["x-small", "small", "default", "large", "x-large"], Lo = J({ size: { type: [String, Number], default: "default" } }, "size");
function Ao(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return ba(() => {
    const n = e.size;
    let r, i;
    return qi(bp, n) ? r = `${t}--size-${n}` : n && (i = { width: ve(n), height: ve(n) }), { sizeClasses: r, sizeStyles: i };
  });
}
const wp = J({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: yt, opacity: [String, Number], ...Ge(), ...Lo(), ..._t({ tag: "i" }), ...Vt() }, "VIcon"), lt = Ae()({ name: "VIcon", props: wp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const i = ce(), { themeClasses: o } = op(), { iconData: s } = yp(() => i.value || e.icon), { sizeClasses: a } = Ao(e), { textColorClasses: l, textColorStyles: u } = ii(() => e.color);
  return Fe(() => {
    var _a2, _b2;
    const c = (_a2 = r.default) == null ? void 0 : _a2.call(r);
    c && (i.value = (_b2 = Jf(c).filter((d) => d.type === hi && d.children && typeof d.children == "string")[0]) == null ? void 0 : _b2.children);
    const f = !!(n.onClick || n.onClickOnce);
    return M(s.value.component, { tag: e.tag, icon: s.value.icon, class: Le(["v-icon", "notranslate", o.value, a.value, l.value, { "v-icon--clickable": f, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: Ne([{ "--v-icon-opacity": e.opacity }, a.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: f ? "button" : void 0, "aria-hidden": !f, tabindex: f ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function _p(e, t) {
  const n = X(), r = ce(false);
  if (pa) {
    const i = new IntersectionObserver((o) => {
      r.value = !!o.find((s) => s.isIntersecting);
    }, t);
    ct(() => {
      i.disconnect();
    }), te(n, (o, s) => {
      s && (i.unobserve(s), r.value = false), o && i.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: r };
}
function md(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = _s(), r = X();
  if (Re) {
    const i = new ResizeObserver((o) => {
      o.length && (t === "content" ? r.value = o[0].contentRect : r.value = o[0].target.getBoundingClientRect());
    });
    At(() => {
      i.disconnect();
    }), te(() => n.el, (o, s) => {
      s && (i.unobserve(s), r.value = void 0), o && i.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: rr(r) };
}
const Sp = J({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function Cp(e) {
  const n = F(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = ce(e.reveal ? "initial" : "disabled");
  return Ot(async () => {
    e.reveal && (r.value = "initial", await new Promise((i) => requestAnimationFrame(i)), r.value = "pending", await new Promise((i) => setTimeout(i, n.value)), r.value = "done");
  }), { duration: n, state: r };
}
const xp = J({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...Ge(), ...Sp(), ...Lo(), ..._t({ tag: "div" }), ...Vt() }, "VProgressCircular"), Lp = Ae()({ name: "VProgressCircular", props: xp(), setup(e, t) {
  let { slots: n } = t;
  const r = 20, i = 2 * Math.PI * r, o = X(), { themeClasses: s } = Kt(e), { sizeClasses: a, sizeStyles: l } = Ao(e), { textColorClasses: u, textColorStyles: c } = ii(() => e.color), { textColorClasses: f, textColorStyles: d } = ii(() => e.bgColor), { intersectionRef: h, isIntersecting: b } = _p(), { resizeRef: m, contentRect: _ } = md(), { state: v, duration: y } = Cp(e), A = F(() => v.value === "initial" ? 0 : ti(parseFloat(e.modelValue), 0, 100)), w = F(() => Number(e.width)), S = F(() => l.value ? Number(e.size) : _.value ? _.value.width : Math.max(w.value, 32)), x = F(() => r / (1 - w.value / S.value) * 2), T = F(() => w.value / S.value * x.value), C = F(() => {
    const V = (100 - A.value) / 100 * i;
    return e.rounded && A.value > 0 && A.value < 100 ? ve(Math.min(i - 0.01, V + T.value)) : ve(V);
  }), k = R(() => {
    const V = Number(e.rotate);
    return e.rounded ? V + T.value / 2 / i * 360 : V;
  });
  return sn(() => {
    h.value = o.value, m.value = o.value;
  }), Fe(() => M(e.tag, { ref: o, class: Le(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": b.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Yi()), "v-progress-circular--revealing": ["initial", "pending"].includes(v.value) }, s.value, a.value, u.value, e.class]), style: Ne([l.value, c.value, { "--progress-reveal-duration": `${y.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : A.value }, { default: () => [P("svg", { style: { transform: `rotate(calc(-90deg + ${k.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${x.value} ${x.value}` }, [P("circle", { class: Le(["v-progress-circular__underlay", f.value]), style: Ne(d.value), fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": 0 }, null), P("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": C.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && P("div", { class: "v-progress-circular__content" }, [n.default({ value: A.value })])] })), {};
} }), wr = J({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function _r(e) {
  return { dimensionStyles: R(() => {
    const n = {}, r = ve(e.height), i = ve(e.maxHeight), o = ve(e.maxWidth), s = ve(e.minHeight), a = ve(e.minWidth), l = ve(e.width);
    return r != null && (n.height = r), i != null && (n.maxHeight = i), o != null && (n.maxWidth = o), s != null && (n.minHeight = s), a != null && (n.minWidth = a), l != null && (n.width = l), n;
  }) };
}
const Ap = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, fc = "$vuetify.", dc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), gd = (e, t, n) => function(r) {
  for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
  if (!r.startsWith(fc)) return dc(r, o);
  const a = r.replace(fc, ""), l = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = bs(l, a, null);
  return c || (`${r}${e.value}`, c = bs(u, a, null)), c || (c = r), typeof c != "string" && (c = r), dc(c, o);
};
function Ea(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function vd(e, t) {
  return Ea(e, t)(0.1).includes(",") ? "," : ".";
}
function Yo(e, t, n) {
  const r = Zt(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, te(n, (i) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function pd(e) {
  return (t) => {
    const n = Yo(t, "locale", e.current), r = Yo(t, "fallback", e.fallback), i = Yo(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: r, messages: i, decimalSeparator: F(() => vd(n, r)), t: gd(n, r, i), n: Ea(n, r), provide: pd({ current: n, fallback: r, messages: i }) };
  };
}
function Ep(e) {
  const t = ce((e == null ? void 0 : e.locale) ?? "en"), n = ce((e == null ? void 0 : e.fallback) ?? "en"), r = X({ en: Ap, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: r, decimalSeparator: F(() => (e == null ? void 0 : e.decimalSeparator) ?? vd(t, n)), t: gd(t, n, r), n: Ea(t, n), provide: pd({ current: t, fallback: n, messages: r }) };
}
const As = Symbol.for("vuetify:locale");
function kp(e) {
  return e.name != null;
}
function Mp(e) {
  const t = (e == null ? void 0 : e.adapter) && kp(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Ep(e), n = Pp(t, e);
  return { ...t, ...n };
}
function Tp() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function Pp(e, t) {
  const n = X((t == null ? void 0 : t.rtl) ?? Tp()), r = R(() => n.value[e.current.value] ?? false);
  return { isRtl: r, rtl: n, rtlClasses: F(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`) };
}
function Sr() {
  const e = ke(As);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const hc = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, yd = J({ location: String }, "location");
function bd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: r } = Sr();
  return { locationStyles: R(() => {
    if (!e.location) return {};
    const { side: o, align: s } = Ss(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
    function a(u) {
      return n ? n(u) : 0;
    }
    const l = {};
    return o !== "center" && (t ? l[hc[o]] = `calc(100% - ${a(o)}px)` : l[o] = 0), s !== "center" ? t ? l[hc[s]] = `calc(100% - ${a(s)}px)` : l[s] = 0 : (o === "center" ? l.top = l.left = "50%" : l[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", l.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), l;
  }) };
}
const Ip = J({ loading: [Boolean, String] }, "loader");
function Rp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { loaderClasses: F(() => ({ [`${t}--loading`]: e.loading })) };
}
const Op = ["static", "relative", "fixed", "absolute", "sticky"], Vp = J({ position: { type: String, validator: (e) => Op.includes(e) } }, "position");
function Dp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { positionClasses: F(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Hp() {
  const e = Ue("useRoute");
  return R(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function Np() {
  var _a2, _b2;
  return (_b2 = (_a2 = Ue("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function wd(e, t) {
  const n = Em("RouterLink"), r = F(() => !!(e.href || e.to)), i = R(() => (r == null ? void 0 : r.value) || Wl(t, "click") || Wl(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = F(() => e.href);
    return { isLink: r, isRouterLink: F(() => false), isClickable: i, href: f, linkProps: Ke({ href: f }), route: F(() => {
    }), navigate: F(() => {
    }) };
  }
  const o = n.useLink({ to: F(() => e.to || ""), replace: F(() => e.replace) }), s = R(() => e.to ? o : void 0), a = Hp(), l = R(() => {
    var _a2, _b2, _c2;
    return s.value ? e.exact ? a.value ? ((_a2 = s.value.isExactActive) == null ? void 0 : _a2.value) && tr(s.value.route.value.query, a.value.query) : ((_b2 = s.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = s.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = R(() => {
    var _a2;
    return e.to ? (_a2 = s.value) == null ? void 0 : _a2.route.value.href : e.href;
  });
  return { isLink: r, isRouterLink: F(() => !!e.to), isClickable: i, isActive: l, route: F(() => {
    var _a2;
    return (_a2 = s.value) == null ? void 0 : _a2.route.value;
  }), navigate: F(() => {
    var _a2;
    return (_a2 = s.value) == null ? void 0 : _a2.navigate;
  }), href: u, linkProps: Ke({ href: u, "aria-current": F(() => l.value ? "page" : void 0), "aria-disabled": F(() => e.disabled && r.value ? "true" : void 0), tabindex: F(() => e.disabled && r.value ? "-1" : void 0) }) };
}
const _d = J({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let qo = false;
function Fp(e, t) {
  let n = false, r, i;
  Re && (e == null ? void 0 : e.beforeEach) && (ht(() => {
    window.addEventListener("popstate", o), r = e.beforeEach((s, a, l) => {
      qo ? n ? t(l) : l() : setTimeout(() => n ? t(l) : l()), qo = true;
    }), i = e == null ? void 0 : e.afterEach(() => {
      qo = false;
    });
  }), ct(() => {
    window.removeEventListener("popstate", o), r == null ? void 0 : r(), i == null ? void 0 : i();
  }));
  function o(s) {
    var _a2;
    ((_a2 = s.state) == null ? void 0 : _a2.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function $p(e, t) {
  te(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && ht(() => {
      t(n);
    });
  }, { immediate: true });
}
const Es = Symbol("rippleStop"), Bp = 80;
function mc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ks(e) {
  return e.constructor.name === "TouchEvent";
}
function Sd(e) {
  return e.constructor.name === "KeyboardEvent";
}
const jp = function(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!Sd(e)) {
    const f = t.getBoundingClientRect(), d = ks(e) ? e.touches[e.touches.length - 1] : e;
    r = d.clientX - f.left, i = d.clientY - f.top;
  }
  let o = 0, s = 0.3;
  ((_a2 = t._ripple) == null ? void 0 : _a2.circle) ? (s = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((r - o) ** 2 + (i - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const a = `${(t.clientWidth - o * 2) / 2}px`, l = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? a : `${r - o}px`, c = n.center ? l : `${i - o}px`;
  return { radius: o, scale: s, x: u, y: c, centerX: a, centerY: l };
}, Qi = { show(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a2 = t == null ? void 0 : t._ripple) == null ? void 0 : _a2.enabled)) return;
  const r = document.createElement("span"), i = document.createElement("span");
  r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
  const { radius: o, scale: s, x: a, y: l, centerX: u, centerY: c } = jp(e, t, n), f = `${o * 2}px`;
  i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
  const d = window.getComputedStyle(t);
  d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), mc(i, `translate(${a}, ${l}) scale3d(${s},${s},${s})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), mc(i, `translate(${u}, ${c}) scale3d(1,1,1)`);
    });
  });
}, hide(e) {
  var _a2;
  if (!((_a2 = e == null ? void 0 : e._ripple) == null ? void 0 : _a2.enabled)) return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0) return;
  const n = Array.from(t).findLast((o) => !o.dataset.isHiding);
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
function Cd(e) {
  return typeof e > "u" || !!e;
}
function oi(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Es])) {
    if (e[Es] = true, ks(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Sd(e), n._ripple.class && (t.class = n._ripple.class), ks(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Qi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a2;
        ((_a2 = n == null ? void 0 : n._ripple) == null ? void 0 : _a2.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Bp);
    } else Qi.show(e, n, t);
  }
}
function eo(e) {
  e[Es] = true;
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
function xd(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let si = false;
function zp(e, t) {
  !si && t.includes(e.key) && (si = true, oi(e));
}
function Ld(e) {
  si = false, gt(e);
}
function Ad(e) {
  si && (si = false, gt(e));
}
function Ed(e, t, n) {
  const { value: r, modifiers: i } = t, o = Cd(r);
  o || Qi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = i.center, e._ripple.circle = i.circle;
  const s = ws(r) ? r : {};
  s.class && (e._ripple.class = s.class);
  const a = s.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (l) => zp(l, a), o && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", eo, { passive: true }), e.addEventListener("mousedown", eo);
      return;
    }
    e.addEventListener("touchstart", oi, { passive: true }), e.addEventListener("touchend", gt, { passive: true }), e.addEventListener("touchmove", xd, { passive: true }), e.addEventListener("touchcancel", gt), e.addEventListener("mousedown", oi), e.addEventListener("mouseup", gt), e.addEventListener("mouseleave", gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Ld), e.addEventListener("blur", Ad), e.addEventListener("dragstart", gt, { passive: true });
  } else !o && n && kd(e);
}
function kd(e) {
  var _a2;
  e.removeEventListener("touchstart", eo), e.removeEventListener("mousedown", eo), e.removeEventListener("touchstart", oi), e.removeEventListener("touchend", gt), e.removeEventListener("touchmove", xd), e.removeEventListener("touchcancel", gt), e.removeEventListener("mousedown", oi), e.removeEventListener("mouseup", gt), e.removeEventListener("mouseleave", gt), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Ld), e.removeEventListener("blur", Ad), e.removeEventListener("dragstart", gt);
}
function Wp(e, t) {
  Ed(e, t, false);
}
function Gp(e) {
  kd(e), delete e._ripple;
}
function Up(e, t) {
  if (t.value === t.oldValue) return;
  const n = Cd(t.oldValue);
  Ed(e, t, n);
}
const Ms = { mounted: Wp, unmounted: Gp, updated: Up }, Zp = J({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: dd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: yt, appendIcon: yt, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...yr(), ...Ge(), ...bi(), ...wr(), ..._i(), ...up(), ...Ip(), ...yd(), ...Vp(), ...Hn(), ..._d(), ...Lo(), ..._t({ tag: "button" }), ...Vt(), ...Ci({ variant: "elevated" }) }, "VBtn"), nr = Ae()({ name: "VBtn", props: Zp(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = Kt(e), { borderClasses: o } = br(e), { densityClasses: s } = wi(e), { dimensionStyles: a } = _r(e), { elevationClasses: l } = Si(e), { loaderClasses: u } = Rp(e), { locationStyles: c } = bd(e), { positionClasses: f } = Dp(e), { roundedClasses: d } = Nn(e), { sizeClasses: h, sizeStyles: b } = Ao(e), m = fp(e, e.symbol, false), _ = wd(e, n), v = R(() => {
    var _a2;
    return e.active !== void 0 ? e.active : _.isRouterLink.value ? (_a2 = _.isActive) == null ? void 0 : _a2.value : m == null ? void 0 : m.isSelected.value;
  }), y = F(() => v.value ? e.activeColor ?? e.color : e.color), A = R(() => {
    var _a2, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!_.isLink.value || ((_a2 = _.isActive) == null ? void 0 : _a2.value)) || !m || ((_b2 = _.isActive) == null ? void 0 : _b2.value) ? y.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: w, colorStyles: S, variantClasses: x } = La(A), T = R(() => (m == null ? void 0 : m.disabled.value) || e.disabled), C = F(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = R(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function V(j) {
    var _a2, _b2;
    T.value || _.isLink.value && (j.metaKey || j.ctrlKey || j.shiftKey || j.button !== 0 || n.target === "_blank") || (_.isRouterLink.value ? (_b2 = (_a2 = _.navigate).value) == null ? void 0 : _b2.call(_a2, j) : m == null ? void 0 : m.toggle());
  }
  return $p(_, m == null ? void 0 : m.select), Fe(() => {
    const j = _.isLink.value ? "a" : e.tag, I = !!(e.prependIcon || r.prepend), $ = !!(e.appendIcon || r.append), q = !!(e.icon && e.icon !== true);
    return or(M(j, Te(_.linkProps, { type: j === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": v.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": C.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], i.value, o.value, w.value, s.value, l.value, u.value, f.value, d.value, h.value, x.value, e.class], style: [S.value, a.value, c.value, b.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: T.value && j !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: V, value: k.value }), { default: () => {
      var _a2;
      return [xa(true, "v-btn"), !e.icon && I && P("span", { key: "prepend", class: "v-btn__prepend" }, [r.prepend ? M(Mt, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, r.prepend) : M(lt, { key: "prepend-icon", icon: e.prependIcon }, null)]), P("span", { class: "v-btn__content", "data-no-activator": "" }, [!r.default && q ? M(lt, { key: "content-icon", icon: e.icon }, null) : M(Mt, { key: "content-defaults", disabled: !q, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = r.default) == null ? void 0 : _a3.call(r)) ?? be(e.text)];
      } })]), !e.icon && $ && P("span", { key: "append", class: "v-btn__append" }, [r.append ? M(Mt, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, r.append) : M(lt, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && P("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = r.loader) == null ? void 0 : _a2.call(r)) ?? M(Lp, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Ms, !T.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), Kp = ["dotted", "dashed", "solid", "double"], Yp = J({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => Kp.includes(e) }, ...Ge(), ...Vt() }, "VDivider"), qp = Ae()({ name: "VDivider", props: Yp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = Kt(e), { textColorClasses: o, textColorStyles: s } = ii(() => e.color), a = R(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), l = F(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return Fe(() => {
    const u = P("hr", { class: Le([{ "v-divider": true, "v-divider--gradient": e.gradient && !r.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, i.value, o.value, e.class]), style: Ne([a.value, s.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return r.default ? P("div", { class: Le(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, P("div", { class: "v-divider__content", style: Ne(l.value) }, [r.default()]), u]) : u;
  }), {};
} }), Xp = J({ fluid: { type: Boolean, default: false }, ...Ge(), ...wr(), ..._t() }, "VContainer"), Li = Ae()({ name: "VContainer", props: Xp(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: r } = Sr(), { dimensionStyles: i } = _r(e);
  return Fe(() => M(e.tag, { class: Le(["v-container", { "v-container--fluid": e.fluid }, r.value, e.class]), style: Ne([i.value, e.style]) }, n)), {};
} }), Ts = Symbol.for("vuetify:display"), gc = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, Jp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gc;
  return pt(gc, e);
};
function vc(e) {
  return Re && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function pc(e) {
  return Re && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function yc(e) {
  const t = Re && !e ? window.navigator.userAgent : "ssr";
  function n(b) {
    return !!t.match(b);
  }
  const r = n(/android/i), i = n(/iphone|ipad|ipod/i), o = n(/cordova/i), s = n(/electron/i), a = n(/chrome/i), l = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), h = n(/linux/i);
  return { android: r, ios: i, cordova: o, electron: s, chrome: a, edge: l, firefox: u, opera: c, win: f, mac: d, linux: h, touch: n1, ssr: t === "ssr" };
}
function Qp(e, t) {
  const { thresholds: n, mobileBreakpoint: r } = Jp(e), i = ce(pc(t)), o = ce(yc(t)), s = Ke({}), a = ce(vc(t));
  function l() {
    i.value = pc(), a.value = vc();
  }
  function u() {
    l(), o.value = yc();
  }
  return sn(() => {
    const c = a.value < n.sm, f = a.value < n.md && !c, d = a.value < n.lg && !(f || c), h = a.value < n.xl && !(d || f || c), b = a.value < n.xxl && !(h || d || f || c), m = a.value >= n.xxl, _ = c ? "xs" : f ? "sm" : d ? "md" : h ? "lg" : b ? "xl" : "xxl", v = typeof r == "number" ? r : n[r], y = a.value < v;
    s.xs = c, s.sm = f, s.md = d, s.lg = h, s.xl = b, s.xxl = m, s.smAndUp = !c, s.mdAndUp = !(c || f), s.lgAndUp = !(c || f || d), s.xlAndUp = !(c || f || d || h), s.smAndDown = !(d || h || b || m), s.mdAndDown = !(h || b || m), s.lgAndDown = !(b || m), s.xlAndDown = !m, s.name = _, s.height = i.value, s.width = a.value, s.mobile = y, s.mobileBreakpoint = r, s.platform = o.value, s.thresholds = n;
  }), Re && (window.addEventListener("resize", l, { passive: true }), ct(() => {
    window.removeEventListener("resize", l);
  }, true)), { ...Du(s), update: u, ssr: !!t };
}
function Md() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = ke(Ts);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = R(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: F(() => t ? { [`${t}--mobile`]: r.value } : {}), mobile: r };
}
const ey = J({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function St(e, t, n) {
  return Ae()({ name: e, props: ey({ mode: n, origin: t }), setup(r, i) {
    let { slots: o } = i;
    const s = { onBeforeEnter(a) {
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
      const a = r.group ? ca : lr;
      return vn(a, { name: r.disabled ? "" : e, css: !r.disabled, ...r.group ? void 0 : { mode: r.mode }, ...r.disabled ? {} : s }, o.default);
    };
  } });
}
function ka(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Ae()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Yi() }, group: Boolean, hideOnLeave: Boolean }, setup(r, i) {
    let { slots: o } = i;
    const s = r.group ? ca : lr;
    return () => vn(s, { name: r.disabled ? "" : e, css: !r.disabled, ...r.disabled ? {} : { ...t, onLeave: (a) => {
      var _a2;
      r.hideOnLeave ? a.style.setProperty("display", "none", "important") : (_a2 = t.onLeave) == null ? void 0 : _a2.call(t, a);
    } } }, o.default);
  } });
}
function Ma() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, width: i.style.width, height: i.style.height };
  }, onEnter(i) {
    const o = i._initialStyle;
    if (!o) return;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const s = `${i.offsetWidth}px`, a = `${i.offsetHeight}px`;
    ["x", "both"].includes(t) && (i.style.width = "0"), ["y", "both"].includes(t) && (i.style.height = "0"), i.offsetHeight, i.style.transition = o.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (i.style.width = s), ["y", "both"].includes(t) && (i.style.height = a);
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
    const { width: o, height: s } = i._initialStyle;
    i.style.overflow = i._initialStyle.overflow, o != null && ["x", "both"].includes(t) && (i.style.width = o), s != null && ["y", "both"].includes(t) && (i.style.height = s), delete i._initialStyle;
  }
}
const ty = J({ target: [Object, Array] }, "v-dialog-transition"), Xo = /* @__PURE__ */ new WeakMap(), ny = Ae()({ name: "VDialogTransition", props: ty(), setup(e, t) {
  let { slots: n } = t;
  const r = { onBeforeEnter(i) {
    i.style.pointerEvents = "none", i.style.visibility = "hidden";
  }, async onEnter(i, o) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), i.style.visibility = "";
    const s = wc(e.target, i), { x: a, y: l, sx: u, sy: c, speed: f } = s;
    if (Xo.set(i, s), Yi()) Ln(i, [{ opacity: 0 }, {}], { duration: 125 * f, easing: oc }).finished.then(() => o());
    else {
      const d = Ln(i, [{ transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * f, easing: oc });
      (_a2 = bc(i)) == null ? void 0 : _a2.forEach((h) => {
        Ln(h, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * f, easing: xs });
      }), d.finished.then(() => o());
    }
  }, onAfterEnter(i) {
    i.style.removeProperty("pointer-events");
  }, onBeforeLeave(i) {
    i.style.pointerEvents = "none";
  }, async onLeave(i, o) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d));
    let s;
    !Xo.has(i) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? s = wc(e.target, i) : s = Xo.get(i);
    const { x: a, y: l, sx: u, sy: c, speed: f } = s;
    Yi() ? Ln(i, [{}, { opacity: 0 }], { duration: 85 * f, easing: sc }).finished.then(() => o()) : (Ln(i, [{}, { transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * f, easing: sc }).finished.then(() => o()), (_a2 = bc(i)) == null ? void 0 : _a2.forEach((h) => {
      Ln(h, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * f, easing: xs });
    }));
  }, onAfterLeave(i) {
    i.style.removeProperty("pointer-events");
  } };
  return () => e.target ? M(lr, Te({ name: "dialog-transition" }, r, { css: false }), n) : M(lr, { name: "dialog-transition" }, n);
} });
function bc(e) {
  var _a2;
  const t = (_a2 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a2.children;
  return t && [...t];
}
function wc(e, t) {
  const n = nd(e), r = rd(t), [i, o] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [s, a] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let l = n.left + n.width / 2;
  s === "left" || a === "left" ? l -= n.width / 2 : (s === "right" || a === "right") && (l += n.width / 2);
  let u = n.top + n.height / 2;
  s === "top" || a === "top" ? u -= n.height / 2 : (s === "bottom" || a === "bottom") && (u += n.height / 2);
  const c = n.width / r.width, f = n.height / r.height, d = Math.max(1, c, f), h = c / d || 0, b = f / d || 0, m = r.width * r.height / (window.innerWidth * window.innerHeight), _ = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: l - (i + r.left), y: u - (o + r.top), sx: h, sy: b, speed: _ };
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
const Td = ka("expand-transition", Ma());
ka("expand-x-transition", Ma("", "x"));
ka("expand-both-transition", Ma("", "both"));
function ry(e) {
  return { aspectStyles: R(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Pd = J({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...Ge(), ...wr() }, "VResponsive"), _c = Ae()({ name: "VResponsive", props: Pd(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: r } = ry(e), { dimensionStyles: i } = _r(e);
  return Fe(() => {
    var _a2;
    return P("div", { class: Le(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: Ne([i.value, e.style]) }, [P("div", { class: "v-responsive__sizer", style: Ne(r.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && P("div", { class: Le(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} }), Id = J({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Zn = (e, t) => {
  let { slots: n } = t;
  const { transition: r, disabled: i, group: o, ...s } = e, { component: a = o ? ca : lr, ...l } = ws(r) ? r : {};
  let u;
  return ws(r) ? u = Te(l, d1({ disabled: i, group: o }), s) : u = Te({ name: i || !r ? "" : r }, s), vn(a, u, n);
};
function Sc(e, t) {
  if (!pa) return;
  const n = t.modifiers || {}, r = t.value, { handler: i, options: o } = typeof r == "object" ? r : { handler: r, options: {} }, s = new IntersectionObserver(function() {
    var _a2;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
    if (!u) return;
    const c = a.some((f) => f.isIntersecting);
    i && (!n.quiet || u.init) && (!n.once || c || u.init) && i(c, a, l), c && n.once ? Ps(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: s }, s.observe(e);
}
function Ps(e, t) {
  var _a2;
  const n = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Cc = { mounted: Sc, unmounted: Ps, updated: (e, t) => {
  var _a2;
  ((_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid]) && (Ps(e, t), Sc(e, t));
} }, iy = J({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Pd(), ...Ge(), ...Hn(), ...Id() }, "VImg"), Rd = Ae()({ name: "VImg", directives: { vIntersect: Cc }, props: iy(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: r } = t;
  const { backgroundColorClasses: i, backgroundColorStyles: o } = Co(() => e.color), { roundedClasses: s } = Nn(e), a = Ue("VImg"), l = ce(""), u = X(), c = ce(e.eager ? "loading" : "idle"), f = ce(), d = ce(), h = R(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), b = R(() => h.value.aspect || f.value / d.value || 0);
  te(() => e.src, () => {
    m(c.value !== "idle");
  }), te(b, (I, $) => {
    !I && $ && u.value && w(u.value);
  }), vo(() => m());
  function m(I) {
    if (!(e.eager && I) && !(pa && !I && !e.eager)) {
      if (c.value = "loading", h.value.lazySrc) {
        const $ = new Image();
        $.src = h.value.lazySrc, w($, null);
      }
      h.value.src && ht(() => {
        var _a2;
        n("loadstart", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || h.value.src), setTimeout(() => {
          var _a3;
          if (!a.isUnmounted) if ((_a3 = u.value) == null ? void 0 : _a3.complete) {
            if (u.value.naturalWidth || v(), c.value === "error") return;
            b.value || w(u.value, null), c.value === "loading" && _();
          } else b.value || w(u.value), y();
        });
      });
    }
  }
  function _() {
    var _a2;
    a.isUnmounted || (y(), w(u.value), c.value = "loaded", n("load", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || h.value.src));
  }
  function v() {
    var _a2;
    a.isUnmounted || (c.value = "error", n("error", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || h.value.src));
  }
  function y() {
    const I = u.value;
    I && (l.value = I.currentSrc || I.src);
  }
  let A = -1;
  At(() => {
    clearTimeout(A);
  });
  function w(I) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const q = () => {
      if (clearTimeout(A), a.isUnmounted) return;
      const { naturalHeight: Y, naturalWidth: ne } = I;
      Y || ne ? (f.value = ne, d.value = Y) : !I.complete && c.value === "loading" && $ != null ? A = window.setTimeout(q, $) : (I.currentSrc.endsWith(".svg") || I.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
    };
    q();
  }
  const S = F(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), x = () => {
    var _a2;
    if (!h.value.src || c.value === "idle") return null;
    const I = P("img", { class: Le(["v-img__img", S.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: h.value.src, srcset: h.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: _, onError: v }, null), $ = (_a2 = r.sources) == null ? void 0 : _a2.call(r);
    return M(Zn, { transition: e.transition, appear: true }, { default: () => [or($ ? P("picture", { class: "v-img__picture" }, [$, I]) : I, [[la, c.value === "loaded"]])] });
  }, T = () => M(Zn, { transition: e.transition }, { default: () => [h.value.lazySrc && c.value !== "loaded" && P("img", { class: Le(["v-img__img", "v-img__img--preload", S.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: h.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), C = () => r.placeholder ? M(Zn, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !r.error) && P("div", { class: "v-img__placeholder" }, [r.placeholder()])] }) : null, k = () => r.error ? M(Zn, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && P("div", { class: "v-img__error" }, [r.error()])] }) : null, V = () => e.gradient ? P("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, j = ce(false);
  {
    const I = te(b, ($) => {
      $ && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          j.value = true;
        });
      }), I());
    });
  }
  return Fe(() => {
    const I = _c.filterProps(e);
    return or(M(_c, Te({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !j.value, "v-img--fit-content": e.width === "fit-content" }, i.value, s.value, e.class], style: [{ width: ve(e.width === "auto" ? f.value : e.width) }, o.value, e.style] }, I, { aspectRatio: b.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => P(ye, null, [M(x, null, null), M(T, null, null), M(V, null, null), M(C, null, null), M(k, null, null)]), default: r.default }), [[Cc, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: l, image: u, state: c, naturalWidth: f, naturalHeight: d };
} }), oy = J({ start: Boolean, end: Boolean, icon: yt, image: String, text: String, ...yr(), ...Ge(), ...bi(), ...Hn(), ...Lo(), ..._t(), ...Vt(), ...Ci({ variant: "flat" }) }, "VAvatar"), xc = Ae()({ name: "VAvatar", props: oy(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = Kt(e), { borderClasses: i } = br(e), { colorClasses: o, colorStyles: s, variantClasses: a } = La(e), { densityClasses: l } = wi(e), { roundedClasses: u } = Nn(e), { sizeClasses: c, sizeStyles: f } = Ao(e);
  return Fe(() => M(e.tag, { class: Le(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, r.value, i.value, o.value, l.value, u.value, c.value, a.value, e.class]), style: Ne([s.value, f.value, e.style]) }, { default: () => [n.default ? M(Mt, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? M(Rd, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? M(lt, { key: "icon", icon: e.icon }, null) : e.text, xa(false, "v-avatar")] })), {};
} }), Jo = Symbol("Forwarded refs");
function Qo(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function Od(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return e[Jo] = n, new Proxy(e, { get(i, o) {
    if (Reflect.has(i, o)) return Reflect.get(i, o);
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const s of n) if (s.value && Reflect.has(s.value, o)) {
        const a = Reflect.get(s.value, o);
        return typeof a == "function" ? a.bind(s.value) : a;
      }
    }
  }, has(i, o) {
    if (Reflect.has(i, o)) return true;
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return false;
    for (const s of n) if (s.value && Reflect.has(s.value, o)) return true;
    return false;
  }, set(i, o, s) {
    if (Reflect.has(i, o)) return Reflect.set(i, o, s);
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return false;
    for (const a of n) if (a.value && Reflect.has(a.value, o)) return Reflect.set(a.value, o, s);
    return false;
  }, getOwnPropertyDescriptor(i, o) {
    var _a2;
    const s = Reflect.getOwnPropertyDescriptor(i, o);
    if (s) return s;
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const a of n) {
        if (!a.value) continue;
        const l = Qo(a.value, o) ?? ("_" in a.value ? Qo((_a2 = a.value._) == null ? void 0 : _a2.setupState, o) : void 0);
        if (l) return l;
      }
      for (const a of n) {
        const l = a.value && a.value[Jo];
        if (!l) continue;
        const u = l.slice();
        for (; u.length; ) {
          const c = u.shift(), f = Qo(c.value, o);
          if (f) return f;
          const d = c.value && c.value[Jo];
          d && u.push(...d);
        }
      }
    }
  } });
}
const sy = Symbol.for("vuetify:goto");
function ay() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: G1 };
}
function ly(e, t) {
  return { rtl: t.isRtl, options: pt(ay(), e) };
}
const Is = Symbol.for("vuetify:list");
function Vd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = ke(Is, { filterable: false, hasPrepend: ce(false), updateHasPrepend: () => null, trackingIndex: ce(-1), navigationStrategy: ce("focus"), uid: "" }), { filterable: n, trackingIndex: r = t.trackingIndex, navigationStrategy: i = t.navigationStrategy, uid: o = t.uid || gr() } = e, s = { filterable: t.filterable || n, hasPrepend: ce(false), updateHasPrepend: (a) => {
    a && (s.hasPrepend.value = a);
  }, trackingIndex: r, navigationStrategy: i, uid: o };
  return qe(Is, s), t;
}
function Dd() {
  return ke(Is, null);
}
const Ta = (e) => {
  const t = { activate: (n) => {
    let { id: r, value: i, activated: o } = n;
    return r = ee(r), e && !i && o.size === 1 && o.has(r) || (i ? o.add(r) : o.delete(r)), o;
  }, in: (n, r, i) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const s of ya(n)) o = t.activate({ id: s, value: true, activated: new Set(o), children: r, parents: i });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, Hd = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { activated: i, id: o, ...s } = r;
    o = ee(o);
    const a = i.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
    return t.activate({ ...s, id: o, activated: a });
  }, in: (r, i, o) => {
    let s = /* @__PURE__ */ new Set();
    if (r != null) {
      const a = ya(r);
      a.length && (s = t.in(a.slice(0, 1), i, o));
    }
    return s;
  }, out: (r, i, o) => t.out(r, i, o) };
}, cy = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { id: i, activated: o, children: s, ...a } = r;
    return i = ee(i), s.has(i) ? o : t.activate({ id: i, activated: o, children: s, ...a });
  }, in: t.in, out: t.out };
}, uy = (e) => {
  const t = Hd(e);
  return { activate: (r) => {
    let { id: i, activated: o, children: s, ...a } = r;
    return i = ee(i), s.has(i) ? o : t.activate({ id: i, activated: o, children: s, ...a });
  }, in: t.in, out: t.out };
}, fy = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let s = i.get(t);
    for (; s != null; ) o.add(s), s = i.get(s);
    return o;
  } else return r.delete(t), r;
}, select: () => null }, Nd = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    let o = i.get(t);
    for (r.add(t); o != null && o !== t; ) r.add(o), o = i.get(o);
    return r;
  } else r.delete(t);
  return r;
}, select: () => null }, dy = { open: Nd.open, select: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (!n) return r;
  const o = [];
  let s = i.get(t);
  for (; s != null; ) o.push(s), s = i.get(s);
  return new Set(o);
} }, Pa = (e) => {
  const t = { select: (n) => {
    let { id: r, value: i, selected: o } = n;
    if (r = ee(r), e && !i) {
      const s = Array.from(o.entries()).reduce((a, l) => {
        let [u, c] = l;
        return c === "on" && a.push(u), a;
      }, []);
      if (s.length === 1 && s[0] === r) return o;
    }
    return o.set(r, i ? "on" : "off"), o;
  }, in: (n, r, i, o) => {
    const s = /* @__PURE__ */ new Map();
    for (const a of n || []) t.select({ id: a, value: true, selected: s, children: r, parents: i, disabled: o });
    return s;
  }, out: (n) => {
    const r = [];
    for (const [i, o] of n.entries()) o === "on" && r.push(i);
    return r;
  } };
  return t;
}, Fd = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { selected: i, id: o, ...s } = r;
    o = ee(o);
    const a = i.has(o) ? /* @__PURE__ */ new Map([[o, i.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...s, id: o, selected: a });
  }, in: (r, i, o, s) => (r == null ? void 0 : r.length) ? t.in(r.slice(0, 1), i, o, s) : /* @__PURE__ */ new Map(), out: (r, i, o) => t.out(r, i, o) };
}, hy = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { id: i, selected: o, children: s, ...a } = r;
    return i = ee(i), s.has(i) ? o : t.select({ id: i, selected: o, children: s, ...a });
  }, in: t.in, out: t.out };
}, my = (e) => {
  const t = Fd(e);
  return { select: (r) => {
    let { id: i, selected: o, children: s, ...a } = r;
    return i = ee(i), s.has(i) ? o : t.select({ id: i, selected: o, children: s, ...a });
  }, in: t.in, out: t.out };
}, Ia = (e) => {
  const t = { select: (n) => {
    let { id: r, value: i, selected: o, children: s, parents: a, disabled: l } = n;
    r = ee(r);
    const u = new Map(o), c = [r];
    for (; c.length; ) {
      const d = c.shift();
      l.has(d) || o.set(ee(d), i ? "on" : "off"), s.has(d) && c.push(...s.get(d));
    }
    let f = ee(a.get(r));
    for (; f; ) {
      let d = true, h = true;
      for (const b of s.get(f)) {
        const m = ee(b);
        if (!l.has(m) && (o.get(m) !== "on" && (d = false), o.has(m) && o.get(m) !== "off" && (h = false), !d && !h)) break;
      }
      o.set(f, d ? "on" : h ? "off" : "indeterminate"), f = ee(a.get(f));
    }
    return e && !i && Array.from(o.entries()).reduce((h, b) => {
      let [m, _] = b;
      return _ === "on" && h.push(m), h;
    }, []).length === 0 ? u : o;
  }, in: (n, r, i) => {
    let o = /* @__PURE__ */ new Map();
    for (const s of n || []) o = t.select({ id: s, value: true, selected: o, children: r, parents: i, disabled: /* @__PURE__ */ new Set() });
    return o;
  }, out: (n, r) => {
    const i = [];
    for (const [o, s] of n.entries()) s === "on" && !r.has(o) && i.push(o);
    return i;
  } };
  return t;
}, gy = (e) => {
  const t = Ia(e);
  return { select: t.select, in: t.in, out: (r, i, o) => {
    const s = [];
    for (const [a, l] of r.entries()) if (l === "on") {
      if (o.has(a)) {
        const u = o.get(a);
        if (r.get(u) === "on") continue;
      }
      s.push(a);
    }
    return s;
  } };
}, vy = (e) => {
  const n = { select: Ia(e).select, in: (r, i, o, s) => {
    let a = /* @__PURE__ */ new Map();
    for (const l of r || []) i.has(l) || (a = n.select({ id: l, value: true, selected: a, children: i, parents: o, disabled: s }));
    return a;
  }, out: (r) => {
    const i = [];
    for (const [o, s] of r.entries()) (s === "on" || s === "indeterminate") && i.push(o);
    return i;
  } };
  return n;
}, fr = Symbol.for("vuetify:nested"), $d = { id: ce(), root: { itemsRegistration: X("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: X(/* @__PURE__ */ new Map()), parents: X(/* @__PURE__ */ new Map()), disabled: X(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: X(false), scrollToActive: X(false), selectable: X(false), opened: X(/* @__PURE__ */ new Set()), activated: X(/* @__PURE__ */ new Set()), selected: X(/* @__PURE__ */ new Map()), selectedValues: X([]), getPath: () => [] } }, py = J({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), yy = (e, t) => {
  let { items: n, returnObject: r, scrollToActive: i } = t, o = false;
  const s = ce(/* @__PURE__ */ new Map()), a = ce(/* @__PURE__ */ new Map()), l = ce(/* @__PURE__ */ new Set()), u = Zt(e, "opened", e.opened, (S) => new Set(Array.isArray(S) ? S.map((x) => ee(x)) : S), (S) => [...S.values()]), c = R(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return cy(e.mandatory);
      case "single-leaf":
        return uy(e.mandatory);
      case "independent":
        return Ta(e.mandatory);
      case "single-independent":
      default:
        return Hd(e.mandatory);
    }
  }), f = R(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return my(e.mandatory);
      case "leaf":
        return hy(e.mandatory);
      case "independent":
        return Pa(e.mandatory);
      case "single-independent":
        return Fd(e.mandatory);
      case "trunk":
        return gy(e.mandatory);
      case "branch":
        return vy(e.mandatory);
      case "classic":
      default:
        return Ia(e.mandatory);
    }
  }), d = R(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return dy;
      case "single":
        return fy;
      case "multiple":
      default:
        return Nd;
    }
  }), h = Zt(e, "activated", e.activated, (S) => c.value.in(S, s.value, a.value), (S) => c.value.out(S, s.value, a.value)), b = Zt(e, "selected", e.selected, (S) => f.value.in(S, s.value, a.value, l.value), (S) => f.value.out(S, s.value, a.value));
  At(() => {
    o = true;
  });
  function m(S) {
    const x = [];
    let T = ee(S);
    for (; T !== void 0; ) x.unshift(T), T = a.value.get(T);
    return x;
  }
  const _ = Ue("nested"), v = /* @__PURE__ */ new Set(), y = Y1(() => {
    ht(() => {
      s.value = new Map(s.value), a.value = new Map(a.value);
    });
  }, 100);
  te(() => [n.value, rt(r)], () => {
    e.itemsRegistration === "props" && A();
  }, { immediate: true });
  function A() {
    const S = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), C = rt(r) ? (j) => ee(j.raw) : (j) => j.value, k = [...n.value];
    let V = 0;
    for (; V < k.length; ) {
      const j = k[V++], I = C(j);
      if (j.children) {
        const $ = [];
        for (const q of j.children) {
          const Y = C(q);
          S.set(Y, I), $.push(Y), k.push(q);
        }
        x.set(I, $);
      }
      j.props.disabled && T.add(I);
    }
    s.value = x, a.value = S, l.value = T;
  }
  const w = { id: ce(), root: { opened: u, activatable: F(() => e.activatable), scrollToActive: F(() => rt(i)), selectable: F(() => e.selectable), activated: h, selected: b, selectedValues: R(() => {
    const S = [];
    for (const [x, T] of b.value.entries()) T === "on" && S.push(x);
    return S;
  }), itemsRegistration: F(() => e.itemsRegistration), register: (S, x, T, C) => {
    if (v.has(S)) {
      m(S).map(String).join(" -> "), m(x).concat(S).map(String).join(" -> ");
      return;
    } else v.add(S);
    x && S !== x && a.value.set(S, x), T && l.value.add(S), C && s.value.set(S, []), x != null && s.value.set(x, [...s.value.get(x) || [], S]), y();
  }, unregister: (S) => {
    if (o) return;
    v.delete(S), s.value.delete(S), l.value.delete(S);
    const x = a.value.get(S);
    if (x) {
      const T = s.value.get(x) ?? [];
      s.value.set(x, T.filter((C) => C !== S));
    }
    a.value.delete(S), y();
  }, updateDisabled: (S, x) => {
    x ? l.value.add(S) : l.value.delete(S);
  }, open: (S, x, T) => {
    _.emit("click:open", { id: S, value: x, path: m(S), event: T });
    const C = d.value.open({ id: S, value: x, opened: new Set(u.value), children: s.value, parents: a.value, event: T });
    C && (u.value = C);
  }, openOnSelect: (S, x, T) => {
    const C = d.value.select({ id: S, value: x, selected: new Map(b.value), opened: new Set(u.value), children: s.value, parents: a.value, event: T });
    C && (u.value = C);
  }, select: (S, x, T) => {
    _.emit("click:select", { id: S, value: x, path: m(S), event: T });
    const C = f.value.select({ id: S, value: x, selected: new Map(b.value), children: s.value, parents: a.value, disabled: l.value, event: T });
    C && (b.value = C), w.root.openOnSelect(S, x, T);
  }, activate: (S, x, T) => {
    if (!e.activatable) return w.root.select(S, true, T);
    _.emit("click:activate", { id: S, value: x, path: m(S), event: T });
    const C = c.value.activate({ id: S, value: x, activated: new Set(h.value), children: s.value, parents: a.value, event: T });
    if (C.size !== h.value.size) h.value = C;
    else {
      for (const k of C) if (!h.value.has(k)) {
        h.value = C;
        return;
      }
      for (const k of h.value) if (!C.has(k)) {
        h.value = C;
        return;
      }
    }
  }, children: s, parents: a, disabled: l, getPath: m } };
  return qe(fr, w), w.root;
}, Bd = (e, t, n) => {
  const r = ke(fr, $d), i = Symbol("nested item"), o = R(() => {
    const a = ee(rt(e));
    return a !== void 0 ? a : i;
  }), s = { ...r, id: o, open: (a, l) => r.root.open(o.value, a, l), openOnSelect: (a, l) => r.root.openOnSelect(o.value, a, l), isOpen: R(() => r.root.opened.value.has(o.value)), parent: R(() => r.root.parents.value.get(o.value)), activate: (a, l) => r.root.activate(o.value, a, l), isActivated: R(() => r.root.activated.value.has(o.value)), scrollToActive: r.root.scrollToActive, select: (a, l) => r.root.select(o.value, a, l), isSelected: R(() => r.root.selected.value.get(o.value) === "on"), isIndeterminate: R(() => r.root.selected.value.get(o.value) === "indeterminate"), isLeaf: R(() => !r.root.children.value.get(o.value)), isGroupActivator: r.isGroupActivator };
  return vo(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || ht(() => {
      r.root.register(o.value, r.id.value, rt(t), n);
    });
  }), At(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || r.root.unregister(o.value);
  }), te(o, (a, l) => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || (r.root.unregister(l), ht(() => {
      r.root.register(a, r.id.value, rt(t), n);
    }));
  }), te(() => rt(t), (a) => {
    r.root.updateDisabled(o.value, a);
  }), n && qe(fr, s), s;
}, by = () => {
  const e = ke(fr, $d);
  qe(fr, { ...e, isGroupActivator: true });
};
function jd() {
  const e = ce(false);
  return Ot(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: F(() => e.value ? void 0 : { transition: "none !important" }), isBooted: rr(e) };
}
const wy = pr({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return by(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), _y = J({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: yt, default: "$collapse" }, disabled: Boolean, expandIcon: { type: yt, default: "$expand" }, rawId: [String, Number], prependIcon: yt, appendIcon: yt, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...Ge(), ..._t() }, "VListGroup"), Lc = Ae()({ name: "VListGroup", props: _y(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: r, open: i, id: o } = Bd(() => e.value, () => e.disabled, true), s = R(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), a = Dd(), { isBooted: l } = jd(), u = ke(fr), c = F(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function f(m) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = m.target) == null ? void 0 : _a2.tagName) || i(!r.value, m);
  }
  const d = R(() => ({ onClick: f, class: "v-list-group__header", id: s.value })), h = R(() => r.value ? e.collapseIcon : e.expandIcon), b = R(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && h.value, appendIcon: e.appendIcon || !e.subgroup && h.value, title: e.title, value: e.value } }));
  return Fe(() => M(e.tag, { class: Le(["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": r.value }, e.class]), style: Ne(e.style) }, { default: () => [n.activator && M(Mt, { defaults: b.value }, { default: () => [M(wy, null, { default: () => [n.activator({ props: d.value, isOpen: r.value })] })] }), M(Zn, { transition: { component: Td }, disabled: !l.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? or(P("div", { class: "v-list-group__items", role: "group", "aria-labelledby": s.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[la, r.value]]) : r.value && P("div", { class: "v-list-group__items", role: "group", "aria-labelledby": s.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: r };
} }), Sy = J({ opacity: [Number, String], ...Ge(), ..._t() }, "VListItemSubtitle"), Cy = Ae()({ name: "VListItemSubtitle", props: Sy(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => M(e.tag, { class: Le(["v-list-item-subtitle", e.class]), style: Ne([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), xy = j1("v-list-item-title"), Ly = J({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: yt, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: yt, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: $r(), onClickOnce: $r(), ...yr(), ...Ge(), ...bi(), ...wr(), ..._i(), ...Hn(), ..._d(), ..._t(), ...Vt(), ...Ci({ variant: "text" }) }, "VListItem"), Rs = Ae()({ name: "VListItem", directives: { vRipple: Ms }, props: Ly(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const o = wd(e, n), s = X(), a = R(() => e.value === void 0 ? o.href.value : e.value), { activate: l, isActivated: u, select: c, isOpen: f, isSelected: d, isIndeterminate: h, isGroupActivator: b, root: m, parent: _, openOnSelect: v, scrollToActive: y, id: A } = Bd(a, () => e.disabled, false), w = Dd(), S = R(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = o.isActive) == null ? void 0 : _a2.value) || (m.activatable.value ? u.value : d.value));
  }), x = F(() => e.link !== false && o.isLink.value), T = R(() => !!w && (m.selectable.value || m.activatable.value || e.value != null)), C = R(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || T.value)), k = R(() => w && w.navigationStrategy.value === "track" && e.index !== void 0 && w.trackingIndex.value === e.index), V = R(() => w ? x.value ? "link" : T.value ? "option" : "listitem" : void 0), j = R(() => {
    if (T.value) return m.activatable.value ? u.value : m.selectable.value ? d.value : S.value;
  }), I = F(() => e.rounded || e.nav), $ = F(() => e.color ?? e.activeColor), q = F(() => ({ color: S.value ? $.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  te(() => {
    var _a2;
    return (_a2 = o.isActive) == null ? void 0 : _a2.value;
  }, (U) => {
    U && Y();
  }), te(u, (U) => {
    var _a2;
    !U || !y || ((_a2 = s.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), te(k, (U) => {
    var _a2;
    U && ((_a2 = s.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), vo(() => {
    var _a2;
    ((_a2 = o.isActive) == null ? void 0 : _a2.value) && ht(() => Y());
  });
  function Y() {
    _.value != null && m.open(_.value, true), v(true);
  }
  const { themeClasses: ne } = Kt(e), { borderClasses: ae } = br(e), { colorClasses: le, colorStyles: Oe, variantClasses: _e } = La(q), { densityClasses: oe } = wi(e), { dimensionStyles: ge } = _r(e), { elevationClasses: me } = Si(e), { roundedClasses: je } = Nn(I), Ze = F(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), $e = F(() => e.ripple !== void 0 && e.ripple && (w == null ? void 0 : w.filterable) ? { keys: ["Enter"] } : e.ripple), E = R(() => ({ isActive: S.value, select: c, isOpen: f.value, isSelected: d.value, isIndeterminate: h.value, isDisabled: e.disabled }));
  function B(U) {
    var _a2, _b2, _c2;
    i("click", U), !["INPUT", "TEXTAREA"].includes((_a2 = U.target) == null ? void 0 : _a2.tagName) && C.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, U), !b && (m.activatable.value ? l(!u.value, U) : (m.selectable.value || e.value != null && !x.value) && c(!d.value, U)));
  }
  function W(U) {
    const pe = U.target;
    ["INPUT", "TEXTAREA"].includes(pe.tagName) || (U.key === "Enter" || U.key === " " && !(w == null ? void 0 : w.filterable)) && (U.preventDefault(), U.stopPropagation(), U.target.dispatchEvent(new MouseEvent("click", U)));
  }
  return Fe(() => {
    const U = x.value ? "a" : e.tag, pe = r.title || e.title != null, g = r.subtitle || e.subtitle != null, L = !!(!!(e.appendAvatar || e.appendIcon) || r.append), H = !!(!!(e.prependAvatar || e.prependIcon) || r.prepend);
    return w == null ? void 0 : w.updateHasPrepend(H), e.activeColor && Uf("active-color", ["color", "base-color"]), or(M(U, Te(o.linkProps, { ref: s, id: e.index !== void 0 && w ? `v-list-item-${w.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": S.value, "v-list-item--disabled": e.disabled, "v-list-item--link": C.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !H && (w == null ? void 0 : w.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": k.value, [`${e.activeClass}`]: e.activeClass && S.value }, ne.value, ae.value, le.value, oe.value, me.value, Ze.value, je.value, _e.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, Oe.value, ge.value, e.style], tabindex: e.tabindex ?? (C.value ? w ? -2 : 0 : void 0), "aria-selected": j.value, role: V.value, onClick: B, onKeydown: C.value && !x.value && W }), { default: () => {
      var _a2;
      return [xa(C.value || S.value, "v-list-item"), H && P("div", { key: "prepend", class: "v-list-item__prepend" }, [r.prepend ? M(Mt, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.prepend) == null ? void 0 : _a3.call(r, E.value)];
      } }) : P(ye, null, [e.prependAvatar && M(xc, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && M(lt, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), P("div", { class: "v-list-item__spacer" }, null)]), P("div", { class: "v-list-item__content", "data-no-activator": "" }, [pe && M(xy, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = r.title) == null ? void 0 : _a3.call(r, { title: e.title })) ?? be(e.title)];
      } }), g && M(Cy, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = r.subtitle) == null ? void 0 : _a3.call(r, { subtitle: e.subtitle })) ?? be(e.subtitle)];
      } }), (_a2 = r.default) == null ? void 0 : _a2.call(r, E.value)]), L && P("div", { key: "append", class: "v-list-item__append" }, [r.append ? M(Mt, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.append) == null ? void 0 : _a3.call(r, E.value)];
      } }) : P(ye, null, [e.appendIcon && M(lt, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && M(xc, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), P("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Ms, C.value && $e.value]]);
  }), { activate: l, isActivated: u, isGroupActivator: b, isSelected: d, list: w, select: c, root: m, id: A, link: o };
} }), Ay = J({ color: String, inset: Boolean, sticky: Boolean, title: String, ...Ge(), ..._t() }, "VListSubheader"), Ey = Ae()({ name: "VListSubheader", props: Ay(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: r, textColorStyles: i } = ii(() => e.color);
  return Fe(() => {
    const o = !!(n.default || e.title);
    return M(e.tag, { class: Le(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, r.value, e.class]), style: Ne([{ textColorStyles: i }, e.style]) }, { default: () => {
      var _a2;
      return [o && P("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), ky = J({ items: Array, returnObject: Boolean }, "VListChildren"), zd = Ae()({ name: "VListChildren", props: ky(), setup(e, t) {
  let { slots: n } = t;
  return Vd(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((r, i) => {
      var _a3, _b3;
      let { children: o, props: s, type: a, raw: l } = r;
      if (a === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: s })) ?? M(qp, s, null);
      if (a === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: s })) ?? M(Ey, s, null);
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
      } : void 0 }, c = Lc.filterProps(s);
      return o ? M(Lc, Te(c, { value: e.returnObject ? l : s == null ? void 0 : s.value, rawId: s == null ? void 0 : s.value }), { activator: (f) => {
        let { props: d } = f;
        const h = Te(s, d, { value: e.returnObject ? l : s.value });
        return n.header ? n.header({ props: h }) : M(Rs, Te(h, { index: i }), u);
      }, default: () => M(zd, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...s, index: i } }) : M(Rs, Te(s, { index: i, value: e.returnObject ? l : s.value }), u);
    }));
  };
} }), My = J({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), Ty = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Py(e, t) {
  const n = cr(t) ? t : kr(t, e.itemTitle), r = cr(t) ? t : kr(t, e.itemValue, void 0), i = kr(t, e.itemChildren), o = e.itemProps === true ? Dn(t, ["children"]) : kr(t, e.itemProps);
  let s = kr(t, e.itemType, "item");
  Ty.has(s) || (s = "item");
  const a = { title: n, value: r, ...o };
  return { type: s, title: a.title, value: a.value, props: a, children: s === "item" && i ? Wd(e, i) : void 0, raw: t };
}
function Wd(e, t) {
  const n = [];
  for (const r of t) n.push(Py(e, r));
  return n;
}
function Iy(e) {
  return { items: R(() => Wd(e, e.items)) };
}
const Ry = J({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: yt, collapseIcon: yt, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": $r(), "onClick:select": $r(), "onUpdate:opened": $r(), ...py({ selectStrategy: "single-leaf", openStrategy: "list" }), ...yr(), ...Ge(), ...bi(), ...wr(), ..._i(), ...My(), ...Hn(), ..._t(), ...Vt(), ...Ci({ variant: "text" }) }, "VList"), Oy = Ae()({ name: "VList", props: Ry(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const { items: o } = Iy(e), { themeClasses: s } = Kt(e), { backgroundColorClasses: a, backgroundColorStyles: l } = Co(() => e.bgColor), { borderClasses: u } = br(e), { densityClasses: c } = wi(e), { dimensionStyles: f } = _r(e), { elevationClasses: d } = Si(e), { roundedClasses: h } = Nn(e), { children: b, open: m, parents: _, select: v, getPath: y } = yy(e, { items: o, returnObject: F(() => e.returnObject), scrollToActive: F(() => e.navigationStrategy === "track") }), A = F(() => e.lines ? `v-list--${e.lines}-line` : void 0), w = F(() => e.activeColor), S = F(() => e.baseColor), x = F(() => e.color), T = F(() => e.selectable || e.activatable), C = Zt(e, "navigationIndex", -1, (oe) => oe ?? -1), k = gr();
  Vd({ filterable: e.filterable, trackingIndex: C, navigationStrategy: F(() => e.navigationStrategy), uid: k }), te(o, () => {
    e.navigationStrategy === "track" && (C.value = -1);
  }), So({ VListGroup: { activeColor: w, baseColor: S, color: x, expandIcon: F(() => e.expandIcon), collapseIcon: F(() => e.collapseIcon) }, VListItem: { activeClass: F(() => e.activeClass), activeColor: w, baseColor: S, color: x, density: F(() => e.density), disabled: F(() => e.disabled), lines: F(() => e.lines), nav: F(() => e.nav), slim: F(() => e.slim), variant: F(() => e.variant), tabindex: F(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const V = ce(false), j = X();
  function I(oe) {
    V.value = true;
  }
  function $(oe) {
    V.value = false;
  }
  function q(oe) {
    var _a2;
    e.navigationStrategy === "track" ? ~C.value || (C.value = ae("first")) : !V.value && !(oe.relatedTarget && ((_a2 = j.value) == null ? void 0 : _a2.contains(oe.relatedTarget))) && _e();
  }
  function Y() {
    e.navigationStrategy === "track" && (C.value = -1);
  }
  function ne(oe) {
    switch (oe) {
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
  function ae(oe) {
    const ge = o.value.length;
    if (ge === 0) return -1;
    let me;
    oe === "first" ? me = 0 : oe === "last" ? me = ge - 1 : (me = C.value + (oe === "next" ? 1 : -1), me < 0 && (me = ge - 1), me >= ge && (me = 0));
    const je = me;
    let Ze = 0;
    for (; Ze < ge; ) {
      const $e = o.value[me];
      if ($e && $e.type !== "divider" && $e.type !== "subheader") return me;
      if (me += oe === "next" || oe === "first" ? 1 : -1, me < 0 && (me = ge - 1), me >= ge && (me = 0), me === je) return -1;
      Ze++;
    }
    return -1;
  }
  function le(oe) {
    const ge = oe.target;
    if (!j.value || ge.tagName === "INPUT" && ["Home", "End"].includes(oe.key) || ge.tagName === "TEXTAREA") return;
    const me = ne(oe.key);
    if (me !== null) if (oe.preventDefault(), e.navigationStrategy === "track") {
      const je = ae(me);
      je !== -1 && (C.value = je);
    } else _e(me);
  }
  function Oe(oe) {
    V.value = true;
  }
  function _e(oe) {
    if (j.value) return Br(j.value, oe);
  }
  return Fe(() => {
    const oe = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), ge = T.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return M(e.tag, { ref: j, class: Le(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, s.value, a.value, u.value, c.value, d.value, A.value, h.value, e.class]), style: Ne([{ "--v-list-indent": ve(oe), "--v-list-group-prepend": oe ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, l.value, f.value, e.style]), tabindex: e.disabled ? -1 : 0, role: T.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && C.value >= 0 ? `v-list-item-${k}-${C.value}` : void 0, "aria-multiselectable": ge, onFocusin: I, onFocusout: $, onFocus: q, onBlur: Y, onKeydown: le, onMousedown: Oe }, { default: () => [M(zd, { items: o.value, returnObject: e.returnObject }, r)] });
  }), { open: m, select: v, focus: _e, children: b, parents: _, getPath: y, navigationIndex: C };
} });
function es(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Vy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ac(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: r } = e, i = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return es({ x: i, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: r } = e, i = n === "left" ? 0 : n === "right" ? t.width : n, o = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return es({ x: i, y: o }, t);
  }
  return es({ x: t.width / 2, y: t.height / 2 }, t);
}
const Gd = { static: Ny, connected: $y }, Dy = J({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Gd }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function Hy(e, t) {
  const n = X({}), r = X();
  Re && xi(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var _a2, _b2;
    te(() => e.locationStrategy, a), ct(() => {
      window.removeEventListener("resize", i), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", s), r.value = void 0;
    }), window.addEventListener("resize", i, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", s, { passive: true }), typeof e.locationStrategy == "function" ? r.value = (_a2 = e.locationStrategy(t, e, n)) == null ? void 0 : _a2.updateLocation : r.value = (_b2 = Gd[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function i(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  function o(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  function s(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  return { contentStyles: n, updateLocation: r };
}
function Ny() {
}
function Fy(e, t) {
  const n = rd(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function $y(e, t, n) {
  (Array.isArray(e.target.value) || K1(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: i, preferredOrigin: o } = ba(() => {
    const v = Ss(t.location, e.isRtl.value), y = t.origin === "overlap" ? v : t.origin === "auto" ? Zo(v) : Ss(t.origin, e.isRtl.value);
    return v.side === y.side && v.align === Ko(y).align ? { preferredAnchor: Ul(v), preferredOrigin: Ul(y) } : { preferredAnchor: v, preferredOrigin: y };
  }), [s, a, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => R(() => {
    const y = parseFloat(t[v]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = R(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = false, d = -1;
  const h = new l1(4), b = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((y) => {
      y !== d && h.clear(), requestAnimationFrame((A) => {
        d = A;
      });
    }), h.isFull) {
      const y = h.values();
      if (tr(y.at(-1), y.at(-3)) && !tr(y.at(-1), y.at(-2))) return;
    }
    const v = _();
    v && h.push(v.flipped);
  });
  let m = new Lt({ x: 0, y: 0, width: 0, height: 0 });
  te(e.target, (v, y) => {
    y && !Array.isArray(y) && b.unobserve(y), Array.isArray(v) ? tr(v, y) || _() : v && b.observe(v);
  }, { immediate: true }), te(e.contentEl, (v, y) => {
    y && b.unobserve(y), v && b.observe(v);
  }, { immediate: true }), ct(() => {
    b.disconnect();
  });
  function _() {
    if (f = false, requestAnimationFrame(() => f = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = nd(e.target.value));
    const v = Fy(e.contentEl.value, e.isRtl.value), y = Ji(e.contentEl.value), A = Number(t.viewportMargin);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = y.reduce(($, q) => {
      const Y = m1(q);
      return $ ? new Lt({ x: Math.max($.left, Y.left), y: Math.max($.top, Y.top), width: Math.min($.right, Y.right) - Math.max($.left, Y.left), height: Math.min($.bottom, Y.bottom) - Math.max($.top, Y.top) }) : Y;
    }, void 0);
    t.stickToTarget ? (w.x += Math.min(A, m.x), w.y += Math.min(A, m.y), w.width = Math.max(w.width - A * 2, m.x + m.width - A), w.height = Math.max(w.height - A * 2, m.y + m.height - A)) : (w.x += A, w.y += A, w.width -= A * 2, w.height -= A * 2);
    let S = { anchor: i.value, origin: o.value };
    function x($) {
      const q = new Lt(v), Y = Ac($.anchor, m), ne = Ac($.origin, q);
      let { x: ae, y: le } = Vy(Y, ne);
      switch ($.anchor.side) {
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
      switch ($.anchor.align) {
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
      return q.x += ae, q.y += le, q.width = Math.min(q.width, l.value), q.height = Math.min(q.height, u.value), { overflows: Kl(q, w), x: ae, y: le };
    }
    let T = 0, C = 0;
    const k = { x: 0, y: 0 }, V = { x: false, y: false };
    let j = -1;
    for (; !(j++ > 10); ) {
      const { x: $, y: q, overflows: Y } = x(S);
      T += $, C += q, v.x += $, v.y += q;
      {
        const ne = Zl(S.anchor), ae = Y.x.before || Y.x.after, le = Y.y.before || Y.y.after;
        let Oe = false;
        if (["x", "y"].forEach((_e) => {
          if (_e === "x" && ae && !V.x || _e === "y" && le && !V.y) {
            const oe = { anchor: { ...S.anchor }, origin: { ...S.origin } }, ge = _e === "x" ? ne === "y" ? Ko : Zo : ne === "y" ? Zo : Ko;
            oe.anchor = ge(oe.anchor), oe.origin = ge(oe.origin);
            const { overflows: me } = x(oe);
            (me[_e].before <= Y[_e].before && me[_e].after <= Y[_e].after || me[_e].before + me[_e].after < (Y[_e].before + Y[_e].after) / 2) && (S = oe, Oe = V[_e] = true);
          }
        }), Oe) continue;
      }
      Y.x.before && (T += Y.x.before, v.x += Y.x.before), Y.x.after && (T -= Y.x.after, v.x -= Y.x.after), Y.y.before && (C += Y.y.before, v.y += Y.y.before), Y.y.after && (C -= Y.y.after, v.y -= Y.y.after);
      {
        const ne = Kl(v, w);
        k.x = w.width - ne.x.before - ne.x.after, k.y = w.height - ne.y.before - ne.y.after, T += ne.x.before, v.x += ne.x.before, C += ne.y.before, v.y += ne.y.before;
      }
      break;
    }
    const I = Zl(S.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: ve(ts(C)), left: e.isRtl.value ? void 0 : ve(ts(T)), right: e.isRtl.value ? ve(ts(-T)) : void 0, minWidth: ve(I === "y" ? Math.min(s.value, m.width) : s.value), maxWidth: ve(Ec(ti(k.x, s.value === 1 / 0 ? 0 : s.value, l.value))), maxHeight: ve(Ec(ti(k.y, a.value === 1 / 0 ? 0 : a.value, u.value))) }), { available: k, contentBox: v, flipped: V };
  }
  return te(() => [i.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => _()), ht(() => {
    const v = _();
    if (!v) return;
    const { available: y, contentBox: A } = v;
    A.height > y.y && requestAnimationFrame(() => {
      _(), requestAnimationFrame(() => {
        _();
      });
    });
  }), { updateLocation: _ };
}
function ts(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ec(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Os = true;
const to = [];
function By(e) {
  !Os || to.length ? (to.push(e), Vs()) : (Os = false, e(), Vs());
}
let kc = -1;
function Vs() {
  cancelAnimationFrame(kc), kc = requestAnimationFrame(() => {
    const e = to.shift();
    e && e(), to.length ? Vs() : Os = true;
  });
}
const Ud = { none: null, close: Wy, block: Gy, reposition: Uy }, jy = J({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Ud } }, "VOverlay-scroll-strategies");
function zy(e, t) {
  if (!Re) return;
  let n;
  sn(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Gr(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = Ud[e.scrollStrategy]) == null ? void 0 : _a2.call(Ud, t, e, n);
    }));
  }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Wy(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Zd(Ra(e.target.value, e.contentEl.value), t);
}
function Gy(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, r = Ra(e.target.value, e.contentEl.value), i = [.../* @__PURE__ */ new Set([...Ji(r, t.contained ? n : void 0), ...Ji(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, s = ((a) => Sa(a) && a)(n || document.documentElement);
  s && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((a, l) => {
    a.style.setProperty("--v-body-scroll-x", ve(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", ve(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", ve(o)), a.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    i.forEach((a, l) => {
      const u = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -u, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), s && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Uy(e, t, n) {
  let r = false, i = -1, o = -1;
  function s(a) {
    By(() => {
      var _a2, _b2;
      const l = performance.now();
      (_b2 = (_a2 = e.updateLocation).value) == null ? void 0 : _b2.call(_a2, a), r = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      Zd(Ra(e.target.value, e.contentEl.value), (a) => {
        r ? (cancelAnimationFrame(i), i = requestAnimationFrame(() => {
          i = requestAnimationFrame(() => {
            s(a);
          });
        })) : s(a);
      });
    });
  }), ct(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(i);
  });
}
function Ra(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Zd(e, t) {
  const n = [document, ...Ji(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, { passive: true });
  }), ct(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const Ds = Symbol.for("vuetify:v-menu"), Zy = J({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Ky(e, t) {
  let n = () => {
  };
  function r(s, a) {
    n == null ? void 0 : n();
    const l = s ? e.openDelay : e.closeDelay, u = Math.max((a == null ? void 0 : a.minDelay) ?? 0, Number(l ?? 0));
    return new Promise((c) => {
      n = u1(u, () => {
        t == null ? void 0 : t(s), c(s);
      });
    });
  }
  function i() {
    return r(true);
  }
  function o(s) {
    return r(false, s);
  }
  return { clearDelay: n, runOpenDelay: i, runCloseDelay: o };
}
const Yy = J({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Zy() }, "VOverlay-activator");
function qy(e, t) {
  let { isActive: n, isTop: r, contentEl: i } = t;
  const o = Ue("useActivator"), s = X();
  let a = false, l = false, u = true;
  const c = R(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = R(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: d, runCloseDelay: h } = Ky(e, (C) => {
    C === (e.openOnHover && a || c.value && l) && !(e.openOnHover && n.value && !r.value) && (n.value !== C && (u = true), n.value = C);
  }), b = X(), m = { onClick: (C) => {
    C.stopPropagation(), s.value = C.currentTarget || C.target, n.value || (b.value = [C.clientX, C.clientY]), n.value = !n.value;
  }, onMouseenter: (C) => {
    a = true, s.value = C.currentTarget || C.target, d();
  }, onMouseleave: (C) => {
    a = false, h();
  }, onFocus: (C) => {
    c1(C.target, ":focus-visible") !== false && (l = true, C.stopPropagation(), s.value = C.currentTarget || C.target, d());
  }, onBlur: (C) => {
    l = false, C.stopPropagation(), h({ minDelay: 1 });
  } }, _ = R(() => {
    const C = {};
    return f.value && (C.onClick = m.onClick), e.openOnHover && (C.onMouseenter = m.onMouseenter, C.onMouseleave = m.onMouseleave), c.value && (C.onFocus = m.onFocus, C.onBlur = m.onBlur), C;
  }), v = R(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      a = true, d();
    }, C.onMouseleave = () => {
      a = false, h();
    }), c.value && (C.onFocusin = (k) => {
      k.target.matches(":focus-visible") && (l = true, d());
    }, C.onFocusout = () => {
      l = false, h({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const k = ke(Ds, null);
      C.onClick = () => {
        n.value = false, k == null ? void 0 : k.closeParents();
      };
    }
    return C;
  }), y = R(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      u && (a = true, u = false, d());
    }, C.onMouseleave = () => {
      a = false, h();
    }), C;
  });
  te(r, (C) => {
    var _a2;
    C && (e.openOnHover && !a && (!c.value || !l) || c.value && !l && (!e.openOnHover || !a)) && !((_a2 = i.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), te(n, (C) => {
    C || setTimeout(() => {
      b.value = void 0;
    });
  }, { flush: "post" });
  const A = _s();
  sn(() => {
    A.value && ht(() => {
      s.value = A.el;
    });
  });
  const w = _s(), S = R(() => e.target === "cursor" && b.value ? b.value : w.value ? w.el : Kd(e.target, o) || s.value), x = R(() => Array.isArray(S.value) ? void 0 : S.value);
  let T;
  return te(() => !!e.activator, (C) => {
    C && Re ? (T = Gr(), T.run(() => {
      Xy(e, o, { activatorEl: s, activatorEvents: _ });
    })) : T && T.stop();
  }, { flush: "post", immediate: true }), ct(() => {
    T == null ? void 0 : T.stop();
  }), { activatorEl: s, activatorRef: A, target: S, targetEl: x, targetRef: w, activatorEvents: _, contentEvents: v, scrimEvents: y };
}
function Xy(e, t, n) {
  let { activatorEl: r, activatorEvents: i } = n;
  te(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = a(u);
      c && s(c);
    }
    l && ht(() => o());
  }, { immediate: true }), te(() => e.activatorProps, () => {
    o();
  }), ct(() => {
    s();
  });
  function o() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && g1(l, Te(i.value, u));
  }
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && v1(l, Te(i.value, u));
  }
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Kd(l, t);
    return r.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, r.value;
  }
}
function Kd(e, t) {
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
const Jy = J({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Ni = /* @__PURE__ */ new Map();
let Mc = 0;
function Tc(e) {
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
  const o = er(r).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const s = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(s)) {
    e.preventDefault();
    return;
  }
  const a = o[0], l = o[o.length - 1];
  e.shiftKey && (s === a || a.classList.contains("v-list") && a.contains(s)) && (e.preventDefault(), l.focus()), !e.shiftKey && (s === l || l.classList.contains("v-list") && l.contains(s)) && (e.preventDefault(), a.focus());
}
function Qy(e, t) {
  let { isActive: n, localTop: r, contentEl: i } = t;
  const o = Symbol("trap");
  let s = false, a = -1;
  async function l() {
    s = true, a = window.setTimeout(() => {
      s = false;
    }, 100);
  }
  async function u(d) {
    var _a2;
    const h = d.relatedTarget, b = d.target;
    document.removeEventListener("pointerdown", l), document.removeEventListener("keydown", c), await ht(), n.value && !s && h !== b && i.value && rt(r) && ![document, i.value].includes(b) && !i.value.contains(b) && ((_a2 = er(i.value)[0]) == null ? void 0 : _a2.focus());
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
  Re && (te(() => e.retainFocus, (d) => {
    d ? Ni.set(o, { isActive: n, contentEl: i }) : Ni.delete(o);
  }, { immediate: true }), te(f, (d) => {
    d ? (document.addEventListener("pointerdown", l), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, { immediate: true }), Mc++ < 1 && document.addEventListener("keydown", Tc)), ct(() => {
    Ni.delete(o), clearTimeout(a), document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Mc < 1 && document.removeEventListener("keydown", Tc);
  });
}
function e0() {
  if (!Re) return ce(false);
  const { ssr: e } = Md();
  if (e) {
    const t = ce(false);
    return Ot(() => {
      t.value = true;
    }), t;
  } else return ce(true);
}
const t0 = J({ eager: Boolean }, "lazy");
function n0(e, t) {
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
const Pc = Symbol.for("vuetify:stack"), Mr = Ke([]);
function r0(e, t, n) {
  const r = Ue("useStack"), i = !n, o = ke(Pc, void 0), s = Ke({ activeChildren: /* @__PURE__ */ new Set() });
  qe(Pc, s);
  const a = ce(Number(rt(t)));
  xi(e, () => {
    var _a2;
    const c = (_a2 = Mr.at(-1)) == null ? void 0 : _a2[1];
    a.value = c ? c + 10 : Number(rt(t)), i && Mr.push([r.uid, a.value]), o == null ? void 0 : o.activeChildren.add(r.uid), ct(() => {
      if (i) {
        const f = ee(Mr).findIndex((d) => d[0] === r.uid);
        Mr.splice(f, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(r.uid);
    });
  });
  const l = ce(true);
  return i && sn(() => {
    var _a2;
    const c = ((_a2 = Mr.at(-1)) == null ? void 0 : _a2[0]) === r.uid;
    setTimeout(() => l.value = c);
  }), { globalTop: rr(l), localTop: F(() => !s.activeChildren.size), stackStyles: F(() => ({ zIndex: a.value })) };
}
function i0(e) {
  return { teleportTarget: R(() => {
    const n = e();
    if (n === true || !Re) return;
    const r = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (r == null) return;
    let i = [...r.children].find((o) => o.matches(".v-overlay-container"));
    return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
  }) };
}
function o0() {
  return true;
}
function Yd(e, t, n) {
  if (!e || qd(e, n) === false) return false;
  const r = cd(t);
  if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && r.host === e.target) return false;
  const i = (typeof n.value == "object" && n.value.include || (() => []))();
  return i.push(t), !i.some((o) => o == null ? void 0 : o.contains(e.target));
}
function qd(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || o0)(e);
}
function s0(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Yd(e, t, n) && setTimeout(() => {
    qd(e, n) && r && r(e);
  }, 0);
}
function Ic(e, t) {
  const n = cd(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Rc = { mounted(e, t) {
  const n = (i) => s0(i, e, t), r = (i) => {
    e._clickOutside.lastMousedownWasOutside = Yd(i, e, t);
  };
  Ic(e, (i) => {
    i.addEventListener("click", n, true), i.addEventListener("mousedown", r, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: r };
}, beforeUnmount(e, t) {
  e._clickOutside && (Ic(e, (n) => {
    var _a2;
    if (!n || !((_a2 = e._clickOutside) == null ? void 0 : _a2[t.instance.$.uid])) return;
    const { onClick: r, onMousedown: i } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", r, true), n.removeEventListener("mousedown", i, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function a0(e) {
  const { modelValue: t, color: n, ...r } = e;
  return M(lr, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && P("div", Te({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, r), null)] });
}
const Va = J({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...Yy(), ...Ge(), ...wr(), ...t0(), ...Dy(), ...jy(), ...Jy(), ...Vt(), ...Id() }, "VOverlay"), no = Ae()({ name: "VOverlay", directives: { vClickOutside: Rc }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Dn(Va(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: r, emit: i } = t;
  const o = Ue("VOverlay"), s = X(), a = X(), l = X(), u = Zt(e, "modelValue"), c = R({ get: () => u.value, set: (E) => {
    E && e.disabled || (u.value = E);
  } }), { themeClasses: f } = Kt(e), { rtlClasses: d, isRtl: h } = Sr(), { hasContent: b, onAfterLeave: m } = n0(e, c), _ = Co(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: v, localTop: y, stackStyles: A } = r0(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: w, activatorRef: S, target: x, targetEl: T, targetRef: C, activatorEvents: k, contentEvents: V, scrimEvents: j } = qy(e, { isActive: c, isTop: y, contentEl: l }), { teleportTarget: I } = i0(() => {
    var _a2, _b2, _c2;
    const E = e.attach || e.contained;
    if (E) return E;
    const B = ((_a2 = w == null ? void 0 : w.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return B instanceof ShadowRoot ? B : false;
  }), { dimensionStyles: $ } = _r(e), q = e0(), { scopeId: Y } = Oa();
  te(() => e.disabled, (E) => {
    E && (c.value = false);
  });
  const { contentStyles: ne, updateLocation: ae } = Hy(e, { isRtl: h, contentEl: l, target: x, isActive: c });
  zy(e, { root: s, contentEl: l, targetEl: T, target: x, isActive: c, updateLocation: ae });
  function le(E) {
    i("click:outside", E), e.persistent ? je() : c.value = false;
  }
  function Oe(E) {
    return c.value && y.value && (!e.scrim || E.target === a.value || E instanceof MouseEvent && E.shadowTarget === a.value);
  }
  Qy(e, { isActive: c, localTop: y, contentEl: l }), Re && te(c, (E) => {
    E ? window.addEventListener("keydown", _e) : window.removeEventListener("keydown", _e);
  }, { immediate: true }), At(() => {
    Re && window.removeEventListener("keydown", _e);
  });
  function _e(E) {
    var _a2, _b2, _c2;
    E.key === "Escape" && v.value && (((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) || i("keydown", E), e.persistent ? je() : (c.value = false, ((_b2 = l.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = w.value) == null ? void 0 : _c2.focus())));
  }
  function oe(E) {
    E.key === "Escape" && !v.value || i("keydown", E);
  }
  const ge = Np();
  xi(() => e.closeOnBack, () => {
    Fp(ge, (E) => {
      v.value && c.value ? (E(false), e.persistent ? je() : c.value = false) : E();
    });
  });
  const me = X();
  te(() => c.value && (e.absolute || e.contained) && I.value == null, (E) => {
    if (E) {
      const B = U1(s.value);
      B && B !== document.scrollingElement && (me.value = B.scrollTop);
    }
  });
  function je() {
    e.noClickAnimation || l.value && Ln(l.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: xs });
  }
  function Ze() {
    i("afterEnter");
  }
  function $e() {
    m(), i("afterLeave");
  }
  return Fe(() => {
    var _a2;
    return P(ye, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: C, props: Te({ ref: S }, k.value, e.activatorProps) }), q.value && b.value && M(vm, { disabled: !I.value, to: I.value }, { default: () => [P("div", Te({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, f.value, d.value, e.class], style: [A.value, { "--v-overlay-opacity": e.opacity, top: ve(me.value) }, e.style], ref: s, onKeydown: oe }, Y, r), [M(a0, Te({ color: _, modelValue: c.value && !!e.scrim, ref: a }, j.value), null), M(Zn, { appear: true, persisted: true, transition: e.transition, target: x.value, onAfterEnter: Ze, onAfterLeave: $e }, { default: () => {
      var _a3;
      return [or(P("div", Te({ ref: l, class: ["v-overlay__content", e.contentClass], style: [$.value, ne.value] }, V.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[la, c.value], [Rc, { handler: le, closeConditional: Oe, include: () => [w.value] }]])];
    } })])] })]);
  }), { activatorEl: w, scrimEl: a, target: x, animateClick: je, contentEl: l, rootEl: s, globalTop: v, localTop: y, updateLocation: ae };
} }), l0 = J({ id: String, submenu: Boolean, ...Dn(Va({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: ny } }), ["absolute"]) }, "VMenu"), c0 = Ae()({ name: "VMenu", props: l0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Zt(e, "modelValue"), { scopeId: i } = Oa(), { isRtl: o } = Sr(), s = gr(), a = F(() => e.id || `v-menu-${s}`), l = X(), u = ke(Ds, null), c = ce(/* @__PURE__ */ new Set());
  qe(Ds, { register() {
    c.value.add(s);
  }, unregister() {
    c.value.delete(s);
  }, closeParents(m) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (m == null || ((_a2 = l.value) == null ? void 0 : _a2.contentEl) && !f1(m, l.value.contentEl)) && (r.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), At(() => u == null ? void 0 : u.unregister()), na(() => r.value = false), te(r, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function f(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function d(m) {
    var _a2, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !ed(er((_a2 = l.value) == null ? void 0 : _a2.contentEl, false), m.shiftKey ? "prev" : "next", (v) => v.tabIndex >= 0) && !e.retainFocus && (r.value = false, (_c2 = (_b2 = l.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (r.value = false, (_e = (_d2 = l.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function h(m) {
    var _a2;
    if (e.disabled) return;
    const _ = (_a2 = l.value) == null ? void 0 : _a2.contentEl;
    _ && r.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Br(_, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Br(_, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? r.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Br(_, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (r.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => h(m))));
  }
  const b = R(() => Te({ "aria-haspopup": "menu", "aria-expanded": String(r.value), "aria-controls": a.value, "aria-owns": a.value, onKeydown: h }, e.activatorProps));
  return Fe(() => {
    const m = no.filterProps(e);
    return M(no, Te({ ref: l, id: a.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: r.value, "onUpdate:modelValue": (_) => r.value = _, absolute: true, activatorProps: b.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": f, onKeydown: d }, i), { activator: n.activator, default: function() {
      for (var _ = arguments.length, v = new Array(_), y = 0; y < _; y++) v[y] = arguments[y];
      return M(Mt, { root: "VMenu" }, { default: () => {
        var _a2;
        return [(_a2 = n.default) == null ? void 0 : _a2.call(n, ...v)];
      } });
    } });
  }), Od({ id: a, \u03A8openChildren: c }, l);
} }), Dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t) n[r] = i;
  return n;
}, u0 = Xe({ __name: "AppBackground", setup(e) {
  const t = ua("AppBackground"), n = X(null), r = X(null), i = dv(), o = vr(), s = gv(i.gridInfo, o.worldOffsetDevicePx), a = vv(), l = pv(s), u = Sv(i.post);
  t1(i);
  function c(w) {
    return { ...w, edge: { ...w.edge } };
  }
  function f(w) {
    return w.map(c);
  }
  const d = fv({ onSetZones: (w) => i.post({ type: "set_zones", zones: f(w) }), onAddZone: (w) => i.post({ type: "add_zone", zone: c(w) }), onUpdateZone: (w) => i.post({ type: "update_zone", zone: c(w) }), onRemoveZone: (w) => i.post({ type: "remove_zone", id: w }), onClearZones: () => i.post({ type: "clear_zones" }) }), h = X(false), b = X(false), m = X({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: _ } = Nf();
  te(_, (w) => {
    i.post({ type: "set_theme", theme: w });
  });
  function v(w) {
    const S = Date.now(), x = m.value;
    return { id: crypto.randomUUID(), x1: w.x1, y1: w.y1, x2: w.x2, y2: w.y2, mode: x.mode, edge: { ...x.edge }, enabled: true, createdAt: S, updatedAt: S };
  }
  l.register("zone", { isEnabled: () => h.value, priority: 1, snapMajor: () => b.value, onCommit(w) {
    d.addZone(v(w));
  } });
  function y(w) {
    if (l.anyToolEnabled() || s.isInteractiveTarget(w.target)) return;
    const S = s.makeSnapshot();
    if (!S) return;
    const x = If(w.clientX, w.clientY, S), T = Kg(x, S);
    t.debug("Click \u2192", w.clientX, w.clientY, "\u2192 cell", T.cx, T.cy), i.post({ type: "toggle_cell", cx: T.cx, cy: T.cy, scrollCanvasPx: S.offsetY });
  }
  let A = null;
  return Ot(() => {
    const w = n.value, S = r.value;
    if (!w || !S) return;
    const { offscreen: x, gridPitch: T } = u.initialize(w, S);
    i.init(x, T, _.value), t.debug("Worker spawned, gridPitch", T.toFixed(2)), i.on("ready", (C) => {
      t.info(`${C.backend.toUpperCase()} renderer active`), i.post({ type: "set_theme", theme: _.value }), i.post({ type: "set_zones", zones: f(d.zones.value) });
      const k = o.worldOffsetDevicePx.value;
      i.post({ type: "camera", x: k.x, y: k.y });
    }), i.on("zones_state", (C) => d.syncFromWorker(C.zones)), i.on("zones_error", (C) => t.error("Zone update rejected:", C.message)), i.on("first_frame_painted", () => u.revealCanvas()), i.on("error", (C) => {
      C.phase === "gpu-init" ? t.debug(`GPU unavailable (${C.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${C.phase}]:`, C.message);
    }), xv(i), document.addEventListener("click", y), A = l.attachListeners(), a.start(() => i.post({ type: "frame" }));
  }), di(() => {
    a.stop(), u.teardown(), document.removeEventListener("click", y), A == null ? void 0 : A(), i.terminate();
  }), (w, S) => (se(), he(ye, null, [P("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [P("canvas", { ref_key: "canvasRef", ref: r, class: "app-bg" }, null, 512)], 512), ue(l).previewStyle.value ? (se(), he("div", { key: 0, class: "zone-preview-overlay", style: Ne(ue(l).previewStyle.value) }, null, 4)) : sr("", true), sr("", true)], 64));
} }), f0 = Dt(u0, [["__scopeId", "data-v-e3078bff"]]), d0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, h0 = { component: (e) => vn(hd, { ...e, class: "mdi" }) };
function m0() {
  return { svg: { component: Aa }, class: { component: hd } };
}
function g0(e) {
  const t = m0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = h0), pt({ defaultSet: n, sets: t, aliases: { ...d0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
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
function v0(e, t, n) {
  var _a2;
  const r = [];
  let i = [];
  const o = Xd(e), s = Jd(e), a = n ?? ((_a2 = Ai(t)) == null ? void 0 : _a2.firstDay) ?? 0, l = (o.getDay() - a + 7) % 7, u = (s.getDay() - a + 7) % 7;
  for (let c = 0; c < l; c++) {
    const f = new Date(o);
    f.setDate(f.getDate() - (l - c)), i.push(f);
  }
  for (let c = 1; c <= s.getDate(); c++) {
    const f = new Date(e.getFullYear(), e.getMonth(), c);
    i.push(f), i.length === 7 && (r.push(i), i = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const f = new Date(s);
    f.setDate(f.getDate() + c), i.push(f);
  }
  return i.length > 0 && r.push(i), r;
}
function jr(e, t, n) {
  var _a2;
  let r = (n ?? ((_a2 = Ai(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (r = 0);
  const i = new Date(e);
  for (; i.getDay() !== r; ) i.setDate(i.getDate() - 1);
  return i;
}
function p0(e, t) {
  var _a2;
  const n = new Date(e), r = ((((_a2 = Ai(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function Xd(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Jd(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function y0(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const b0 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Qd(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (b0.test(e)) return y0(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Oc = new Date(2e3, 0, 2);
function w0(e, t, n) {
  var _a2;
  const r = t ?? ((_a2 = Ai(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return qf(7).map((i) => {
    const o = new Date(Oc);
    return o.setDate(Oc.getDate() + r + i), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function _0(e, t, n, r) {
  const i = Qd(e) ?? /* @__PURE__ */ new Date(), o = r == null ? void 0 : r[t];
  if (typeof o == "function") return o(i, t, n);
  let s = {};
  switch (t) {
    case "fullDate":
      s = { year: "numeric", month: "short", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      s = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const a = i.getDate(), l = new Intl.DateTimeFormat(n, { month: "long" }).format(i);
      return `${a} ${l}`;
    case "normalDateWithWeekday":
      s = { weekday: "short", day: "numeric", month: "short" };
      break;
    case "shortDate":
      s = { month: "short", day: "numeric" };
      break;
    case "year":
      s = { year: "numeric" };
      break;
    case "month":
      s = { month: "long" };
      break;
    case "monthShort":
      s = { month: "short" };
      break;
    case "monthAndYear":
      s = { month: "long", year: "numeric" };
      break;
    case "monthAndDate":
      s = { month: "long", day: "numeric" };
      break;
    case "weekday":
      s = { weekday: "long" };
      break;
    case "weekdayShort":
      s = { weekday: "short" };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(i.getDate());
    case "hours12h":
      s = { hour: "numeric", hour12: true };
      break;
    case "hours24h":
      s = { hour: "numeric", hour12: false };
      break;
    case "minutes":
      s = { minute: "numeric" };
      break;
    case "seconds":
      s = { second: "numeric" };
      break;
    case "fullTime":
      s = { hour: "numeric", minute: "numeric" };
      break;
    case "fullTime12h":
      s = { hour: "numeric", minute: "numeric", hour12: true };
      break;
    case "fullTime24h":
      s = { hour: "numeric", minute: "numeric", hour12: false };
      break;
    case "fullDateTime":
      s = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
      break;
    case "fullDateTime12h":
      s = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true };
      break;
    case "fullDateTime24h":
      s = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: false };
      break;
    case "keyboardDate":
      s = { year: "numeric", month: "2-digit", day: "2-digit" };
      break;
    case "keyboardDateTime":
      return s = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric" }, new Intl.DateTimeFormat(n, s).format(i).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return s = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true }, new Intl.DateTimeFormat(n, s).format(i).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return s = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: false }, new Intl.DateTimeFormat(n, s).format(i).replace(/, /g, " ");
    default:
      s = o ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, s).format(i);
}
function S0(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), i = zl(String(n.getMonth() + 1), 2, "0"), o = zl(String(n.getDate()), 2, "0");
  return `${r}-${i}-${o}`;
}
function C0(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function x0(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function L0(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function In(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function A0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function E0(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ai(e) {
  return e.getFullYear();
}
function k0(e) {
  return e.getMonth();
}
function M0(e, t, n, r) {
  const i = Ai(t), o = n ?? (i == null ? void 0 : i.firstDay) ?? 0, s = (i == null ? void 0 : i.firstWeekSize) ?? 1;
  return r !== void 0 ? T0(e, t, o, r) : P0(e, t, o, s);
}
function T0(e, t, n, r) {
  const i = (7 + r - n) % 7, o = jr(e, t, n), s = In(o, 6);
  function a(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let l = ai(o);
  l < ai(s) && a(l + 1) <= i && l++;
  const u = new Date(l, 0, 1), c = a(l), f = c <= i ? In(u, -c) : In(u, 7 - c);
  return 1 + io(Da(o), li(f), "weeks");
}
function P0(e, t, n, r) {
  const i = jr(e, t, n), o = In(jr(e, t, n), 6);
  function s(f) {
    const d = new Date(f, 0, 1);
    return 7 - io(d, jr(d, t, n), "days");
  }
  let a = ai(i);
  a < ai(o) && s(a + 1) >= r && a++;
  const l = new Date(a, 0, 1), u = s(a), c = u >= r ? In(l, u - 7) : In(l, u);
  return 1 + io(Da(i), li(c), "weeks");
}
function I0(e) {
  return e.getDate();
}
function R0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function O0(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function V0(e) {
  return e.getHours();
}
function D0(e) {
  return e.getMinutes();
}
function H0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function N0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function F0(e, t) {
  return ro(e, t[0]) && j0(e, t[1]);
}
function $0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function ro(e, t) {
  return e.getTime() > t.getTime();
}
function B0(e, t) {
  return ro(li(e), li(t));
}
function j0(e, t) {
  return e.getTime() < t.getTime();
}
function Vc(e, t) {
  return e.getTime() === t.getTime();
}
function z0(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function W0(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function G0(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function io(e, t, n) {
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
function U0(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function Z0(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function K0(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Y0(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function q0(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function li(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Da(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class X0 {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Qd(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return S0(this, t);
  }
  parseISO(t) {
    return C0(t);
  }
  addMinutes(t, n) {
    return x0(t, n);
  }
  addHours(t, n) {
    return L0(t, n);
  }
  addDays(t, n) {
    return In(t, n);
  }
  addWeeks(t, n) {
    return A0(t, n);
  }
  addMonths(t, n) {
    return E0(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return v0(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return jr(t, this.locale, r);
  }
  endOfWeek(t) {
    return p0(t, this.locale);
  }
  startOfMonth(t) {
    return Xd(t);
  }
  endOfMonth(t) {
    return Jd(t);
  }
  format(t, n) {
    return _0(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Vc(t, n);
  }
  isValid(t) {
    return $0(t);
  }
  isWithinRange(t, n) {
    return F0(t, n);
  }
  isAfter(t, n) {
    return ro(t, n);
  }
  isAfterDay(t, n) {
    return B0(t, n);
  }
  isBefore(t, n) {
    return !ro(t, n) && !Vc(t, n);
  }
  isSameDay(t, n) {
    return z0(t, n);
  }
  isSameMonth(t, n) {
    return W0(t, n);
  }
  isSameYear(t, n) {
    return G0(t, n);
  }
  setMinutes(t, n) {
    return Z0(t, n);
  }
  setHours(t, n) {
    return U0(t, n);
  }
  setMonth(t, n) {
    return K0(t, n);
  }
  setDate(t, n) {
    return Y0(t, n);
  }
  setYear(t, n) {
    return q0(t, n);
  }
  getDiff(t, n, r) {
    return io(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return w0(this.locale, r, n);
  }
  getYear(t) {
    return ai(t);
  }
  getMonth(t) {
    return k0(t);
  }
  getWeek(t, n, r) {
    const i = n !== void 0 ? Number(n) : void 0, o = r !== void 0 ? Number(r) : void 0;
    return M0(t, this.locale, i, o);
  }
  getDate(t) {
    return I0(t);
  }
  getNextMonth(t) {
    return R0(t);
  }
  getPreviousMonth(t) {
    return O0(t);
  }
  getHours(t) {
    return V0(t);
  }
  getMinutes(t) {
    return D0(t);
  }
  startOfDay(t) {
    return li(t);
  }
  endOfDay(t) {
    return Da(t);
  }
  startOfYear(t) {
    return H0(t);
  }
  endOfYear(t) {
    return N0(t);
  }
}
const J0 = Symbol.for("vuetify:date-options"), Dc = Symbol.for("vuetify:date-adapter");
function Q0(e, t) {
  const n = pt({ adapter: X0, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: eb(n, t) };
}
function eb(e, t) {
  const n = Ke(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return te(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
const Hs = Symbol.for("vuetify:layout"), eh = Symbol.for("vuetify:layout-item"), Hc = 1e3, tb = J({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), nb = J({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function rb(e) {
  const t = ke(Hs);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${gr()}`, r = Ue("useLayoutItem");
  qe(eh, { id: n });
  const i = ce(false);
  na(() => i.value = true), Qu(() => i.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: s } = t.register(r, { ...e, active: R(() => i.value ? false : e.active.value), id: n });
  return At(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: s };
}
const ib = (e, t, n, r) => {
  let i = { top: 0, left: 0, right: 0, bottom: 0 };
  const o = [{ id: "", layer: { ...i } }];
  for (const s of e) {
    const a = t.get(s), l = n.get(s), u = r.get(s);
    if (!a || !l || !u) continue;
    const c = { ...i, [a.value]: parseInt(i[a.value], 10) + (u.value ? parseInt(l.value, 10) : 0) };
    o.push({ id: s, layer: c }), i = c;
  }
  return o;
};
function ob(e) {
  const t = ke(Hs, null), n = R(() => t ? t.rootZIndex.value - 100 : Hc), r = X([]), i = Ke(/* @__PURE__ */ new Map()), o = Ke(/* @__PURE__ */ new Map()), s = Ke(/* @__PURE__ */ new Map()), a = Ke(/* @__PURE__ */ new Map()), l = Ke(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = md(), f = R(() => {
    const x = /* @__PURE__ */ new Map(), T = e.overlaps ?? [];
    for (const C of T.filter((k) => k.includes(":"))) {
      const [k, V] = C.split(":");
      if (!r.value.includes(k) || !r.value.includes(V)) continue;
      const j = i.get(k), I = i.get(V), $ = o.get(k), q = o.get(V);
      !j || !I || !$ || !q || (x.set(V, { position: j.value, amount: parseInt($.value, 10) }), x.set(k, { position: I.value, amount: -parseInt(q.value, 10) }));
    }
    return x;
  }), d = R(() => {
    const x = [...new Set([...s.values()].map((C) => C.value))].sort((C, k) => C - k), T = [];
    for (const C of x) {
      const k = r.value.filter((V) => {
        var _a2;
        return ((_a2 = s.get(V)) == null ? void 0 : _a2.value) === C;
      });
      T.push(...k);
    }
    return ib(T, i, o, a);
  }), h = R(() => !Array.from(l.values()).some((x) => x.value)), b = R(() => d.value[d.value.length - 1].layer), m = F(() => ({ "--v-layout-left": ve(b.value.left), "--v-layout-right": ve(b.value.right), "--v-layout-top": ve(b.value.top), "--v-layout-bottom": ve(b.value.bottom), ...h.value ? void 0 : { transition: "none" } })), _ = R(() => d.value.slice(1).map((x, T) => {
    let { id: C } = x;
    const { layer: k } = d.value[T], V = o.get(C), j = i.get(C);
    return { id: C, ...k, size: Number(V.value), position: j.value };
  })), v = (x) => _.value.find((T) => T.id === x), y = Ue("createLayout"), A = ce(false);
  return Ot(() => {
    A.value = true;
  }), qe(Hs, { register: (x, T) => {
    let { id: C, order: k, position: V, layoutSize: j, elementSize: I, active: $, disableTransitions: q, absolute: Y } = T;
    s.set(C, k), i.set(C, V), o.set(C, j), a.set(C, $), q && l.set(C, q);
    const ae = Un(eh, y == null ? void 0 : y.vnode).indexOf(x);
    ae > -1 ? r.value.splice(ae, 0, C) : r.value.push(C);
    const le = R(() => _.value.findIndex((ge) => ge.id === C)), Oe = R(() => n.value + d.value.length * 2 - le.value * 2), _e = R(() => {
      const ge = V.value === "left" || V.value === "right", me = V.value === "right", je = V.value === "bottom", Ze = I.value ?? j.value, $e = Ze === 0 ? "%" : "px", E = { [V.value]: 0, zIndex: Oe.value, transform: `translate${ge ? "X" : "Y"}(${($.value ? 0 : -(Ze === 0 ? 100 : Ze)) * (me || je ? -1 : 1)}${$e})`, position: Y.value || n.value !== Hc ? "absolute" : "fixed", ...h.value ? void 0 : { transition: "none" } };
      if (!A.value) return E;
      const B = _.value[le.value], W = f.value.get(C);
      return W && (B[W.position] += W.amount), { ...E, height: ge ? `calc(100% - ${B.top}px - ${B.bottom}px)` : I.value ? `${I.value}px` : void 0, left: me ? void 0 : `${B.left}px`, right: me ? `${B.right}px` : void 0, top: V.value !== "bottom" ? `${B.top}px` : void 0, bottom: V.value !== "top" ? `${B.bottom}px` : void 0, width: ge ? I.value ? `${I.value}px` : void 0 : `calc(100% - ${B.left}px - ${B.right}px)` };
    }), oe = R(() => ({ zIndex: Oe.value - 1 }));
    return { layoutItemStyles: _e, layoutItemScrimStyles: oe, zIndex: Oe };
  }, unregister: (x) => {
    s.delete(x), i.delete(x), o.delete(x), a.delete(x), l.delete(x), r.value = r.value.filter((T) => T !== x);
  }, mainRect: b, mainStyles: m, getLayoutItem: v, items: _, layoutRect: c, rootZIndex: n }), { layoutClasses: F(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: F(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: v, items: _, layoutRect: c, layoutRef: u };
}
function th() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, r = pt(t, n), { aliases: i = {}, components: o = {}, directives: s = {} } = r, a = Gr();
  return a.run(() => {
    const l = F1(r.defaults), u = Qp(r.display, r.ssr), c = ip(r.theme), f = g0(r.icons), d = Mp(r.locale), h = Q0(r.date, d), b = ly(r.goTo, d);
    function m(v) {
      for (const A in s) v.directive(A, s[A]);
      for (const A in o) v.component(A, o[A]);
      for (const A in i) v.component(A, pr({ ...i[A], name: A, aliasName: i[A].name }));
      const y = Gr();
      if (y.run(() => {
        c.install(v);
      }), v.onUnmount(() => y.stop()), v.provide(ur, l), v.provide(Ts, u), v.provide(ri, c), v.provide(Ls, f), v.provide(As, d), v.provide(J0, h.options), v.provide(Dc, h.instance), v.provide(sy, b), Re && r.ssr) if (v.$nuxt) v.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: A } = v;
        v.mount = function() {
          const w = A(...arguments);
          return ht(() => u.update()), v.mount = A, w;
        };
      }
      v.mixin({ computed: { $vuetify() {
        return Ke({ defaults: jn.call(this, ur), display: jn.call(this, Ts), theme: jn.call(this, ri), icons: jn.call(this, Ls), locale: jn.call(this, As), date: jn.call(this, Dc) });
      } } });
    }
    function _() {
      a.stop();
    }
    return { install: m, unmount: _, defaults: l, display: u, theme: c, icons: f, locale: d, date: h, goTo: b };
  });
}
const sb = "3.12.1";
th.version = sb;
function jn(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
var ab = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", lb = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", cb = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", ub = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", fb = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", db = "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z", hb = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z", nh = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", mb = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z", rh = "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z", gb = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", vb = "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z", Nc = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z", pb = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z", Fc = "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z", $c = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Bc = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
const yb = J({ id: String, interactive: Boolean, text: String, ...Dn(Va({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), zr = Ae()({ name: "VTooltip", props: yb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Zt(e, "modelValue"), { scopeId: i } = Oa(), o = gr(), s = F(() => e.id || `v-tooltip-${o}`), a = X(), l = R(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = R(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = F(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = R(() => Te({ "aria-describedby": s.value }, e.activatorProps));
  return Fe(() => {
    const d = no.filterProps(e);
    return M(no, Te({ ref: a, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: s.value }, d, { modelValue: r.value, "onUpdate:modelValue": (h) => r.value = h, transition: c.value, absolute: true, location: l.value, origin: u.value, role: "tooltip", activatorProps: f.value, _disableGlobalStack: true }, i), { activator: n.activator, default: function() {
      var _a2;
      for (var h = arguments.length, b = new Array(h), m = 0; m < h; m++) b[m] = arguments[m];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...b)) ?? e.text;
    } });
  }), Od({}, a);
} }), bb = Xe({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = Nf();
  return (n, r) => (se(), On(vp, { modelValue: ue(t), "onUpdate:modelValue": r[0] || (r[0] = (i) => De(t) ? t.value = i : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Ve(() => [M(nr, { value: "light", icon: ue(Bc), size: "small" }, { default: Ve(() => [M(lt, { icon: ue(Bc) }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }, 8, ["icon"]), M(nr, { value: "system", icon: ue(Fc), size: "small" }, { default: Ve(() => [M(lt, { icon: ue(Fc) }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }, 8, ["icon"]), M(nr, { value: "dark", icon: ue($c), size: "small" }, { default: Ve(() => [M(lt, { icon: ue($c) }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 }, 8, ["icon"])]), _: 1 }, 8, ["modelValue"]));
} }), jc = Dt(bb, [["__scopeId", "data-v-8b2a7001"]]), ih = J({ text: String, ...Ge(), ..._t() }, "VToolbarTitle"), oh = Ae()({ name: "VToolbarTitle", props: ih(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => {
    const r = !!(n.default || n.text || e.text);
    return M(e.tag, { class: Le(["v-toolbar-title", e.class]), style: Ne(e.style) }, { default: () => {
      var _a2;
      return [r && P("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a2 = n.default) == null ? void 0 : _a2.call(n)])];
    } });
  }), {};
} }), wb = [null, "prominent", "default", "comfortable", "compact"], sh = J({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => wb.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...yr(), ...Ge(), ..._i(), ...yd(), ...Hn(), ..._t({ tag: "header" }), ...Vt() }, "VToolbar"), zc = Ae()({ name: "VToolbar", props: sh(), setup(e, t) {
  var _a2;
  let { slots: n } = t;
  const { backgroundColorClasses: r, backgroundColorStyles: i } = Co(() => e.color), { borderClasses: o } = br(e), { elevationClasses: s } = Si(e), { locationStyles: a } = bd(e), { roundedClasses: l } = Nn(e), { themeClasses: u } = Kt(e), { rtlClasses: c } = Sr(), f = ce(e.extended === null ? !!((_a2 = n.extension) == null ? void 0 : _a2.call(n)) : e.extended), d = R(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), h = R(() => f.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return So({ VBtn: { variant: "text" } }), Fe(() => {
    var _a3;
    const b = !!(e.title || n.title), m = !!(n.image || e.image), _ = (_a3 = n.extension) == null ? void 0 : _a3.call(n);
    return f.value = e.extended === null ? !!_ : e.extended, M(e.tag, { class: Le(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, r.value, o.value, s.value, l.value, u.value, c.value, e.class]), style: Ne([i.value, a.value, e.style]) }, { default: () => [m && P("div", { key: "image", class: "v-toolbar__image" }, [n.image ? M(Mt, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : M(Rd, { key: "image-img", cover: true, src: e.image }, null)]), M(Mt, { defaults: { VTabs: { height: ve(d.value) } } }, { default: () => {
      var _a4, _b2, _c2;
      return [P("div", { class: "v-toolbar__content", style: { height: ve(d.value) } }, [n.prepend && P("div", { class: "v-toolbar__prepend" }, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n)]), b && M(oh, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && P("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), M(Mt, { defaults: { VTabs: { height: ve(h.value) } } }, { default: () => [M(Td, null, { default: () => [f.value && P("div", { class: "v-toolbar__extension", style: { height: ve(h.value) } }, [_])] })] })] });
  }), { contentHeight: d, extensionHeight: h };
} }), _b = J({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function Sb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: r } = t;
  let i = 0, o = 0;
  const s = X(null), a = ce(0), l = ce(0), u = ce(0), c = ce(false), f = ce(false), d = ce(false), h = ce(false), b = ce(true), m = R(() => Number(e.scrollThreshold)), _ = R(() => ti((m.value - a.value) / m.value || 0));
  function v(S) {
    const x = "window" in S ? window.innerHeight : S.clientHeight, T = "window" in S ? document.documentElement.scrollHeight : S.scrollHeight;
    return { clientHeight: x, scrollHeight: T };
  }
  function y() {
    const S = s.value;
    if (!S) return;
    const { clientHeight: x, scrollHeight: T } = v(S), C = T - x, k = (r == null ? void 0 : r.value) || 0, V = m.value + k;
    b.value = C > V;
  }
  function A() {
    y();
  }
  function w() {
    const S = s.value;
    if (!S || n && !n.value) return;
    i = a.value, a.value = "window" in S ? S.pageYOffset : S.scrollTop;
    const x = S instanceof Window ? document.documentElement.scrollHeight : S.scrollHeight;
    o !== x && (x > o && y(), o = x), f.value = a.value < i, u.value = Math.abs(a.value - m.value);
    const { clientHeight: T, scrollHeight: C } = v(S), k = a.value + T >= C - 5;
    !f.value && k && a.value >= m.value && b.value && (h.value = true);
    const V = Math.abs(a.value - i) > 100, j = a.value <= 5;
    (f.value && i - a.value > 1 && !k || V && a.value < m.value || j) && (h.value = false), d.value = k;
  }
  return te(f, () => {
    l.value = l.value || a.value;
  }), te(c, () => {
    l.value = 0;
  }), Ot(() => {
    te(() => e.scrollTarget, (S) => {
      var _a2;
      const x = S ? document.querySelector(S) : window;
      x && x !== s.value && ((_a2 = s.value) == null ? void 0 : _a2.removeEventListener("scroll", w), s.value = x, s.value.addEventListener("scroll", w, { passive: true }), Promise.resolve().then(() => {
        y();
      }));
    }, { immediate: true }), window.addEventListener("resize", A, { passive: true });
  }), At(() => {
    var _a2;
    (_a2 = s.value) == null ? void 0 : _a2.removeEventListener("scroll", w), window.removeEventListener("resize", A);
  }), n && te(n, w, { immediate: true }), { scrollThreshold: m, currentScroll: a, currentThreshold: u, isScrollActive: c, scrollRatio: _, isScrollingUp: f, savedScroll: l, isAtBottom: d, reachedBottomWhileScrollingDown: h, hasEnoughScrollableSpace: b };
}
const Cb = J({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Dn(sh(), ["location"]), ...nb(), ..._b(), height: { type: [Number, String], default: 64 } }, "VAppBar"), xb = Ae()({ name: "VAppBar", props: Cb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = X(), i = Zt(e, "modelValue"), o = R(() => {
    var _a2;
    const x = new Set(((_a2 = e.scrollBehavior) == null ? void 0 : _a2.split(" ")) ?? []);
    return { hide: x.has("hide"), fullyHide: x.has("fully-hide"), inverted: x.has("inverted"), collapse: x.has("collapse"), elevate: x.has("elevate"), fadeImage: x.has("fade-image") };
  }), s = R(() => {
    const x = o.value;
    return x.hide || x.fullyHide || x.inverted || x.collapse || x.elevate || x.fadeImage || !i.value;
  }), a = R(() => {
    var _a2, _b2;
    const x = ((_a2 = r.value) == null ? void 0 : _a2.contentHeight) ?? 0, T = ((_b2 = r.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return x + T;
  }), { currentScroll: l, scrollThreshold: u, isScrollingUp: c, scrollRatio: f, isAtBottom: d, reachedBottomWhileScrollingDown: h, hasEnoughScrollableSpace: b } = Sb(e, { canScroll: s, layoutSize: a }), m = F(() => o.value.hide || o.value.fullyHide), _ = R(() => e.collapse || o.value.collapse && (o.value.inverted ? f.value > 0 : f.value === 0)), v = R(() => e.flat || o.value.fullyHide && !i.value || o.value.elevate && (o.value.inverted ? l.value > 0 : l.value === 0)), y = R(() => o.value.fadeImage ? o.value.inverted ? 1 - f.value : f.value : void 0), A = R(() => {
    var _a2, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const x = ((_a2 = r.value) == null ? void 0 : _a2.contentHeight) ?? 0, T = ((_b2 = r.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? l.value < u.value || o.value.fullyHide ? x + T : x : x + T;
  });
  xi(() => !!e.scrollBehavior, () => {
    sn(() => {
      if (!m.value) {
        i.value = true;
        return;
      }
      if (o.value.inverted) {
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
  const { ssrBootStyles: w } = jd(), { layoutItemStyles: S } = rb({ id: e.name, order: R(() => parseInt(e.order, 10)), position: F(() => e.location), layoutSize: A, elementSize: ce(void 0), active: i, absolute: F(() => e.absolute) });
  return Fe(() => {
    const x = Dn(zc.filterProps(e), ["location"]);
    return M(zc, Te({ ref: r, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...S.value, "--v-toolbar-image-opacity": y.value, height: void 0, ...w.value }, e.style] }, x, { collapse: _.value, flat: v.value }), n);
  }), {};
} }), Lb = Ae()({ name: "VAppBarTitle", props: ih(), setup(e, t) {
  let { slots: n } = t;
  return Fe(() => M(oh, Te(e, { class: "v-app-bar-title" }), n)), {};
} }), Ab = Xe({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", to: "/about" }, { label: "Demos", to: "/projects" }, { label: "Resume", to: "/resume" }, { label: "Contact", to: "/contact" }], { smAndDown: n } = Md(), r = X(false);
  return (i, o) => (se(), On(xb, { elevation: "0", color: "background", border: "b" }, { append: Ve(() => [ue(n) ? (se(), he(ye, { key: 0 }, [M(jc), M(c0, { modelValue: r.value, "onUpdate:modelValue": o[1] || (o[1] = (s) => r.value = s), location: "bottom end", offset: "10" }, { activator: Ve(({ props: s }) => [M(nr, Te(s, { icon: ue(gb), variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16, ["icon"])]), default: Ve(() => [M(Oy, { class: "header-menu-list", density: "compact" }, { default: Ve(() => [(se(), he(ye, null, dt(t, (s) => M(Rs, { key: s.label, to: s.to, title: s.label, onClick: o[0] || (o[0] = (a) => r.value = false) }, null, 8, ["to", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (se(), he(ye, { key: 1 }, [(se(), he(ye, null, dt(t, (s) => M(nr, { key: s.label, to: s.to, variant: "text", size: "default", class: "nav-ink" }, { default: Ve(() => [Jr(be(s.label), 1)]), _: 2 }, 1032, ["to"])), 64)), M(jc)], 64))]), default: Ve(() => [M(Lb, { class: "header-title" }, { default: Ve(() => [...o[2] || (o[2] = [P("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 }));
} });
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const Wn = typeof document < "u";
function ah(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Eb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ah(e.default);
}
const Ce = Object.assign;
function ns(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = Rt(i) ? i.map(e) : e(i);
  }
  return n;
}
const Wr = () => {
}, Rt = Array.isArray;
function Wc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const lh = /#/g, kb = /&/g, Mb = /\//g, Tb = /=/g, Pb = /\?/g, ch = /\+/g, Ib = /%5B/g, Rb = /%5D/g, uh = /%5E/g, Ob = /%60/g, fh = /%7B/g, Vb = /%7C/g, dh = /%7D/g, Db = /%20/g;
function Ha(e) {
  return e == null ? "" : encodeURI("" + e).replace(Vb, "|").replace(Ib, "[").replace(Rb, "]");
}
function Hb(e) {
  return Ha(e).replace(fh, "{").replace(dh, "}").replace(uh, "^");
}
function Ns(e) {
  return Ha(e).replace(ch, "%2B").replace(Db, "+").replace(lh, "%23").replace(kb, "%26").replace(Ob, "`").replace(fh, "{").replace(dh, "}").replace(uh, "^");
}
function Nb(e) {
  return Ns(e).replace(Tb, "%3D");
}
function Fb(e) {
  return Ha(e).replace(lh, "%23").replace(Pb, "%3F");
}
function $b(e) {
  return Fb(e).replace(Mb, "%2F");
}
function ci(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Bb = /\/$/, jb = (e) => e.replace(Bb, "");
function rs(e, t, n = "/") {
  let r, i = {}, o = "", s = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), o = t.slice(l, a > 0 ? a : t.length), i = e(o.slice(1))), a >= 0 && (r = r || t.slice(0, a), s = t.slice(a, t.length)), r = Ub(r ?? t, n), { fullPath: r + o + s, path: r, query: i, hash: ci(s) };
}
function zb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Gc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Wb(e, t, n) {
  const r = t.matched.length - 1, i = n.matched.length - 1;
  return r > -1 && r === i && dr(t.matched[r], n.matched[i]) && hh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function dr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function hh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!Gb(e[n], t[n])) return false;
  return true;
}
function Gb(e, t) {
  return Rt(e) ? Uc(e, t) : Rt(t) ? Uc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Uc(e, t) {
  return Rt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Ub(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let o = n.length - 1, s, a;
  for (s = 0; s < r.length; s++) if (a = r[s], a !== ".") if (a === "..") o > 1 && o--;
  else break;
  return n.slice(0, o).join("/") + "/" + r.slice(s).join("/");
}
const cn = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let Fs = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), is = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Zb(e) {
  if (!e) if (Wn) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), jb(e);
}
const Kb = /^[^#]+#/;
function Yb(e, t) {
  return e.replace(Kb, "#") + t;
}
function qb(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const Eo = () => ({ left: window.scrollX, top: window.scrollY });
function Xb(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = qb(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Zc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const $s = /* @__PURE__ */ new Map();
function Jb(e, t) {
  $s.set(e, t);
}
function Qb(e) {
  const t = $s.get(e);
  return $s.delete(e), t;
}
function e2(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function mh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Be = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const gh = Symbol("");
Be.MATCHER_NOT_FOUND + "", Be.NAVIGATION_GUARD_REDIRECT + "", Be.NAVIGATION_ABORTED + "", Be.NAVIGATION_CANCELLED + "", Be.NAVIGATION_DUPLICATED + "";
function hr(e, t) {
  return Ce(new Error(), { type: e, [gh]: true }, t);
}
function Xt(e, t) {
  return e instanceof Error && gh in e && (t == null || !!(e.type & t));
}
const t2 = ["params", "query", "hash"];
function n2(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of t2) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function r2(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(ch, " "), o = i.indexOf("="), s = ci(o < 0 ? i : i.slice(0, o)), a = o < 0 ? null : ci(i.slice(o + 1));
    if (s in t) {
      let l = t[s];
      Rt(l) || (l = t[s] = [l]), l.push(a);
    } else t[s] = a;
  }
  return t;
}
function Kc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Nb(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Rt(r) ? r.map((i) => i && Ns(i)) : [r && Ns(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function i2(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Rt(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return t;
}
const o2 = Symbol(""), Yc = Symbol(""), ko = Symbol(""), Na = Symbol(""), Bs = Symbol("");
function Tr() {
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
function hn(e, t, n, r, i, o = (s) => s()) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const u = (d) => {
      d === false ? l(hr(Be.NAVIGATION_ABORTED, { from: n, to: t })) : d instanceof Error ? l(d) : e2(d) ? l(hr(Be.NAVIGATION_GUARD_REDIRECT, { from: t, to: d })) : (s && r.enterCallbacks[i] === s && typeof d == "function" && s.push(d), a());
    }, c = o(() => e.call(r && r.instances[i], t, n, u));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
  });
}
function os(e, t, n, r, i = (o) => o()) {
  const o = [];
  for (const s of e) for (const a in s.components) {
    let l = s.components[a];
    if (!(t !== "beforeRouteEnter" && !s.instances[a])) if (ah(l)) {
      const u = (l.__vccOpts || l)[t];
      u && o.push(hn(u, n, r, s, a, i));
    } else {
      let u = l();
      o.push(() => u.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
        const f = Eb(c) ? c.default : c;
        s.mods[a] = c, s.components[a] = f;
        const d = (f.__vccOpts || f)[t];
        return d && hn(d, n, r, s, a, i)();
      }));
    }
  }
  return o;
}
function s2(e, t) {
  const n = [], r = [], i = [], o = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < o; s++) {
    const a = t.matched[s];
    a && (e.matched.find((u) => dr(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[s];
    l && (t.matched.find((u) => dr(u, l)) || i.push(l));
  }
  return [n, r, i];
}
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let a2 = () => location.protocol + "//" + location.host;
function vh(e, t) {
  const { pathname: n, search: r, hash: i } = t, o = e.indexOf("#");
  if (o > -1) {
    let s = i.includes(e.slice(o)) ? e.slice(o).length : 1, a = i.slice(s);
    return a[0] !== "/" && (a = "/" + a), Gc(a, "");
  }
  return Gc(n, e) + r + i;
}
function l2(e, t, n, r) {
  let i = [], o = [], s = null;
  const a = ({ state: d }) => {
    const h = vh(e, location), b = n.value, m = t.value;
    let _ = 0;
    if (d) {
      if (n.value = h, t.value = d, s && s === b) {
        s = null;
        return;
      }
      _ = m ? d.position - m.position : 0;
    } else r(h);
    i.forEach((v) => {
      v(n.value, b, { delta: _, type: Fs.pop, direction: _ ? _ > 0 ? is.forward : is.back : is.unknown });
    });
  };
  function l() {
    s = n.value;
  }
  function u(d) {
    i.push(d);
    const h = () => {
      const b = i.indexOf(d);
      b > -1 && i.splice(b, 1);
    };
    return o.push(h), h;
  }
  function c() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(Ce({}, d.state, { scroll: Eo() }), "");
    }
  }
  function f() {
    for (const d of o) d();
    o = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), { pauseListeners: l, listen: u, destroy: f };
}
function qc(e, t, n, r = false, i = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: i ? Eo() : null };
}
function c2(e) {
  const { history: t, location: n } = window, r = { value: vh(e, n) }, i = { value: t.state };
  i.value || o(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function o(l, u, c) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : a2() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), i.value = u;
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d);
    }
  }
  function s(l, u) {
    o(l, Ce({}, t.state, qc(i.value.back, l, i.value.forward, true), u, { position: i.value.position }), true), r.value = l;
  }
  function a(l, u) {
    const c = Ce({}, i.value, t.state, { forward: l, scroll: Eo() });
    o(c.current, c, true), o(l, Ce({}, qc(r.value, l, null), { position: c.position + 1 }, u), false), r.value = l;
  }
  return { location: r, state: i, push: a, replace: s };
}
function u2(e) {
  e = Zb(e);
  const t = c2(e), n = l2(e, t.state, t.location, t.replace);
  function r(o, s = true) {
    s || n.pauseListeners(), history.go(o);
  }
  const i = Ce({ location: "", base: e, go: r, createHref: Yb.bind(null, e) }, t, n);
  return Object.defineProperty(i, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(i, "state", { enumerable: true, get: () => t.state.value }), i;
}
let En = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var We = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(We || {});
const f2 = { type: En.Static, value: "" }, d2 = /[a-zA-Z0-9_]/;
function h2(e) {
  if (!e) return [[]];
  if (e === "/") return [[f2]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`);
  }
  let n = We.Static, r = n;
  const i = [];
  let o;
  function s() {
    o && i.push(o), o = [];
  }
  let a = 0, l, u = "", c = "";
  function f() {
    u && (n === We.Static ? o.push({ type: En.Static, value: u }) : n === We.Param || n === We.ParamRegExp || n === We.ParamRegExpEnd ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({ type: En.Param, value: u, regexp: c, repeatable: l === "*" || l === "+", optional: l === "*" || l === "?" })) : t("Invalid state to consume buffer"), u = "");
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
        l === "/" ? (u && f(), s()) : l === ":" ? (f(), n = We.Param) : d();
        break;
      case We.EscapeNext:
        d(), n = r;
        break;
      case We.Param:
        l === "(" ? n = We.ParamRegExp : d2.test(l) ? d() : (f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--);
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
  return n === We.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), s(), i;
}
const Xc = "[^/]+?", m2 = { sensitive: false, strict: false, start: true, end: true };
var ot = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(ot || {});
const g2 = /[.+*?^${}()[\]/\\]/g;
function v2(e, t) {
  const n = Ce({}, m2, t), r = [];
  let i = n.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const c = u.length ? [] : [ot.Root];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = ot.Segment + (n.sensitive ? ot.BonusCaseSensitive : 0);
      if (d.type === En.Static) f || (i += "/"), i += d.value.replace(g2, "\\$&"), h += ot.Static;
      else if (d.type === En.Param) {
        const { value: b, repeatable: m, optional: _, regexp: v } = d;
        o.push({ name: b, repeatable: m, optional: _ });
        const y = v || Xc;
        if (y !== Xc) {
          h += ot.BonusCustomRegExp;
          try {
            `${y}`;
          } catch (w) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${y}): ` + w.message);
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
  const s = new RegExp(i, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(s), f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || "", b = o[d - 1];
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
        const { value: b, repeatable: m, optional: _ } = h, v = b in u ? u[b] : "";
        if (Rt(v) && !m) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
        const y = Rt(v) ? v.join("/") : v;
        if (!y) if (_) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${b}"`);
        c += y;
      }
    }
    return c || "/";
  }
  return { re: s, score: r, keys: o, parse: a, stringify: l };
}
function p2(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === ot.Static + ot.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ot.Static + ot.Segment ? 1 : -1 : 0;
}
function ph(e, t) {
  let n = 0;
  const r = e.score, i = t.score;
  for (; n < r.length && n < i.length; ) {
    const o = p2(r[n], i[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Jc(r)) return 1;
    if (Jc(i)) return -1;
  }
  return i.length - r.length;
}
function Jc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const y2 = { strict: false, end: true, sensitive: false };
function b2(e, t, n) {
  const r = v2(h2(e.path), n), i = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function w2(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Wc(y2, t);
  function i(f) {
    return r.get(f);
  }
  function o(f, d, h) {
    const b = !h, m = eu(f);
    m.aliasOf = h && h.record;
    const _ = Wc(t, f), v = [m];
    if ("alias" in f) {
      const w = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const S of w) v.push(eu(Ce({}, m, { components: h ? h.record.components : m.components, path: S, aliasOf: h ? h.record : m })));
    }
    let y, A;
    for (const w of v) {
      const { path: S } = w;
      if (d && S[0] !== "/") {
        const x = d.record.path, T = x[x.length - 1] === "/" ? "" : "/";
        w.path = d.record.path + (S && T + S);
      }
      if (y = b2(w, d, _), h ? h.alias.push(y) : (A = A || y, A !== y && A.alias.push(y), b && f.name && !tu(y) && s(f.name)), yh(y) && l(y), m.children) {
        const x = m.children;
        for (let T = 0; T < x.length; T++) o(x[T], y, h && h.children[T]);
      }
      h = h || y;
    }
    return A ? () => {
      s(A);
    } : Wr;
  }
  function s(f) {
    if (mh(f)) {
      const d = r.get(f);
      d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(s), d.alias.forEach(s));
    } else {
      const d = n.indexOf(f);
      d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(s), f.alias.forEach(s));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = C2(f, n);
    n.splice(d, 0, f), f.record.name && !tu(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let h, b = {}, m, _;
    if ("name" in f && f.name) {
      if (h = r.get(f.name), !h) throw hr(Be.MATCHER_NOT_FOUND, { location: f });
      _ = h.record.name, b = Ce(Qc(d.params, h.keys.filter((A) => !A.optional).concat(h.parent ? h.parent.keys.filter((A) => A.optional) : []).map((A) => A.name)), f.params && Qc(f.params, h.keys.map((A) => A.name))), m = h.stringify(b);
    } else if (f.path != null) m = f.path, h = n.find((A) => A.re.test(m)), h && (b = h.parse(m), _ = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find((A) => A.re.test(d.path)), !h) throw hr(Be.MATCHER_NOT_FOUND, { location: f, currentLocation: d });
      _ = h.record.name, b = Ce({}, d.params, f.params), m = h.stringify(b);
    }
    const v = [];
    let y = h;
    for (; y; ) v.unshift(y.record), y = y.parent;
    return { name: _, path: m, params: b, matched: v, meta: S2(v) };
  }
  e.forEach((f) => o(f));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: o, resolve: u, removeRoute: s, clearRoutes: c, getRoutes: a, getRecordMatcher: i };
}
function Qc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function eu(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: _2(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function _2(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function tu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function S2(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function C2(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const o = n + r >> 1;
    ph(e, t[o]) < 0 ? r = o : n = o + 1;
  }
  const i = x2(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function x2(e) {
  let t = e;
  for (; t = t.parent; ) if (yh(t) && ph(e, t) === 0) return t;
}
function yh({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function nu(e) {
  const t = ke(ko), n = ke(Na), r = R(() => {
    const l = ue(e.to);
    return t.resolve(l);
  }), i = R(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const d = f.findIndex(dr.bind(null, c));
    if (d > -1) return d;
    const h = ru(l[u - 2]);
    return u > 1 && ru(c) === h && f[f.length - 1].path !== h ? f.findIndex(dr.bind(null, l[u - 2])) : d;
  }), o = R(() => i.value > -1 && M2(n.params, r.value.params)), s = R(() => i.value > -1 && i.value === n.matched.length - 1 && hh(n.params, r.value.params));
  function a(l = {}) {
    if (k2(l)) {
      const u = t[ue(e.replace) ? "replace" : "push"](ue(e.to)).catch(Wr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: r, href: R(() => r.value.href), isActive: o, isExactActive: s, navigate: a };
}
function L2(e) {
  return e.length === 1 ? e[0] : e;
}
const A2 = Xe({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: nu, setup(e, { slots: t }) {
  const n = Ke(nu(e)), { options: r } = ke(ko), i = R(() => ({ [iu(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [iu(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const o = t.default && L2(t.default(n));
    return e.custom ? o : vn("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: i.value }, o);
  };
} }), E2 = A2;
function k2(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function M2(e, t) {
  for (const n in t) {
    const r = t[n], i = e[n];
    if (typeof r == "string") {
      if (r !== i) return false;
    } else if (!Rt(i) || i.length !== r.length || r.some((o, s) => o.valueOf() !== i[s].valueOf())) return false;
  }
  return true;
}
function ru(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const iu = (e, t, n) => e ?? t ?? n, T2 = Xe({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = ke(Bs), i = R(() => e.route || r.value), o = ke(Yc, 0), s = R(() => {
    let u = ue(o);
    const { matched: c } = i.value;
    let f;
    for (; (f = c[u]) && !f.components; ) u++;
    return u;
  }), a = R(() => i.value.matched[s.value]);
  qe(Yc, R(() => s.value + 1)), qe(o2, a), qe(Bs, i);
  const l = X();
  return te(() => [l.value, a.value, e.name], ([u, c, f], [d, h, b]) => {
    c && (c.instances[f] = u, h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), u && c && (!h || !dr(c, h) || !d) && (c.enterCallbacks[f] || []).forEach((m) => m(u));
  }, { flush: "post" }), () => {
    const u = i.value, c = e.name, f = a.value, d = f && f.components[c];
    if (!d) return ou(n.default, { Component: d, route: u });
    const h = f.props[c], b = h ? h === true ? u.params : typeof h == "function" ? h(u) : h : null, _ = vn(d, Ce({}, b, t, { onVnodeUnmounted: (v) => {
      v.component.isUnmounted && (f.instances[c] = null);
    }, ref: l }));
    return ou(n.default, { Component: _, route: u }) || _;
  };
} });
function ou(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const P2 = T2;
function I2(e) {
  const t = w2(e.routes, e), n = e.parseQuery || r2, r = e.stringifyQuery || Kc, i = e.history, o = Tr(), s = Tr(), a = Tr(), l = ce(cn);
  let u = cn;
  Wn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = ns.bind(null, (E) => "" + E), f = ns.bind(null, $b), d = ns.bind(null, ci);
  function h(E, B) {
    let W, U;
    return mh(E) ? (W = t.getRecordMatcher(E), U = B) : U = E, t.addRoute(U, W);
  }
  function b(E) {
    const B = t.getRecordMatcher(E);
    B && t.removeRoute(B);
  }
  function m() {
    return t.getRoutes().map((E) => E.record);
  }
  function _(E) {
    return !!t.getRecordMatcher(E);
  }
  function v(E, B) {
    if (B = Ce({}, B || l.value), typeof E == "string") {
      const L = rs(n, E, B.path), O = t.resolve({ path: L.path }, B), H = i.createHref(L.fullPath);
      return Ce(L, O, { params: d(O.params), hash: ci(L.hash), redirectedFrom: void 0, href: H });
    }
    let W;
    if (E.path != null) W = Ce({}, E, { path: rs(n, E.path, B.path).path });
    else {
      const L = Ce({}, E.params);
      for (const O in L) L[O] == null && delete L[O];
      W = Ce({}, E, { params: f(L) }), B.params = f(B.params);
    }
    const U = t.resolve(W, B), pe = E.hash || "";
    U.params = c(d(U.params));
    const g = zb(r, Ce({}, E, { hash: Hb(pe), path: U.path })), p = i.createHref(g);
    return Ce({ fullPath: g, hash: pe, query: r === Kc ? i2(E.query) : E.query || {} }, U, { redirectedFrom: void 0, href: p });
  }
  function y(E) {
    return typeof E == "string" ? rs(n, E, l.value.path) : Ce({}, E);
  }
  function A(E, B) {
    if (u !== E) return hr(Be.NAVIGATION_CANCELLED, { from: B, to: E });
  }
  function w(E) {
    return T(E);
  }
  function S(E) {
    return w(Ce(y(E), { replace: true }));
  }
  function x(E, B) {
    const W = E.matched[E.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: U } = W;
      let pe = typeof U == "function" ? U(E, B) : U;
      return typeof pe == "string" && (pe = pe.includes("?") || pe.includes("#") ? pe = y(pe) : { path: pe }, pe.params = {}), Ce({ query: E.query, hash: E.hash, params: pe.path != null ? {} : E.params }, pe);
    }
  }
  function T(E, B) {
    const W = u = v(E), U = l.value, pe = E.state, g = E.force, p = E.replace === true, L = x(W, U);
    if (L) return T(Ce(y(L), { state: typeof L == "object" ? Ce({}, pe, L.state) : pe, force: g, replace: p }), B || W);
    const O = W;
    O.redirectedFrom = B;
    let H;
    return !g && Wb(r, U, W) && (H = hr(Be.NAVIGATION_DUPLICATED, { to: O, from: U }), oe(U, U, true, false)), (H ? Promise.resolve(H) : V(O, U)).catch((D) => Xt(D) ? Xt(D, Be.NAVIGATION_GUARD_REDIRECT) ? D : _e(D) : le(D, O, U)).then((D) => {
      if (D) {
        if (Xt(D, Be.NAVIGATION_GUARD_REDIRECT)) return T(Ce({ replace: p }, y(D.to), { state: typeof D.to == "object" ? Ce({}, pe, D.to.state) : pe, force: g }), B || O);
      } else D = I(O, U, true, p, pe);
      return j(O, U, D), D;
    });
  }
  function C(E, B) {
    const W = A(E, B);
    return W ? Promise.reject(W) : Promise.resolve();
  }
  function k(E) {
    const B = je.values().next().value;
    return B && typeof B.runWithContext == "function" ? B.runWithContext(E) : E();
  }
  function V(E, B) {
    let W;
    const [U, pe, g] = s2(E, B);
    W = os(U.reverse(), "beforeRouteLeave", E, B);
    for (const L of U) L.leaveGuards.forEach((O) => {
      W.push(hn(O, E, B));
    });
    const p = C.bind(null, E, B);
    return W.push(p), $e(W).then(() => {
      W = [];
      for (const L of o.list()) W.push(hn(L, E, B));
      return W.push(p), $e(W);
    }).then(() => {
      W = os(pe, "beforeRouteUpdate", E, B);
      for (const L of pe) L.updateGuards.forEach((O) => {
        W.push(hn(O, E, B));
      });
      return W.push(p), $e(W);
    }).then(() => {
      W = [];
      for (const L of g) if (L.beforeEnter) if (Rt(L.beforeEnter)) for (const O of L.beforeEnter) W.push(hn(O, E, B));
      else W.push(hn(L.beforeEnter, E, B));
      return W.push(p), $e(W);
    }).then(() => (E.matched.forEach((L) => L.enterCallbacks = {}), W = os(g, "beforeRouteEnter", E, B, k), W.push(p), $e(W))).then(() => {
      W = [];
      for (const L of s.list()) W.push(hn(L, E, B));
      return W.push(p), $e(W);
    }).catch((L) => Xt(L, Be.NAVIGATION_CANCELLED) ? L : Promise.reject(L));
  }
  function j(E, B, W) {
    a.list().forEach((U) => k(() => U(E, B, W)));
  }
  function I(E, B, W, U, pe) {
    const g = A(E, B);
    if (g) return g;
    const p = B === cn, L = Wn ? history.state : {};
    W && (U || p ? i.replace(E.fullPath, Ce({ scroll: p && L && L.scroll }, pe)) : i.push(E.fullPath, pe)), l.value = E, oe(E, B, W, p), _e();
  }
  let $;
  function q() {
    $ || ($ = i.listen((E, B, W) => {
      if (!Ze.listening) return;
      const U = v(E), pe = x(U, Ze.currentRoute.value);
      if (pe) {
        T(Ce(pe, { replace: true, force: true }), U).catch(Wr);
        return;
      }
      u = U;
      const g = l.value;
      Wn && Jb(Zc(g.fullPath, W.delta), Eo()), V(U, g).catch((p) => Xt(p, Be.NAVIGATION_ABORTED | Be.NAVIGATION_CANCELLED) ? p : Xt(p, Be.NAVIGATION_GUARD_REDIRECT) ? (T(Ce(y(p.to), { force: true }), U).then((L) => {
        Xt(L, Be.NAVIGATION_ABORTED | Be.NAVIGATION_DUPLICATED) && !W.delta && W.type === Fs.pop && i.go(-1, false);
      }).catch(Wr), Promise.reject()) : (W.delta && i.go(-W.delta, false), le(p, U, g))).then((p) => {
        p = p || I(U, g, false), p && (W.delta && !Xt(p, Be.NAVIGATION_CANCELLED) ? i.go(-W.delta, false) : W.type === Fs.pop && Xt(p, Be.NAVIGATION_ABORTED | Be.NAVIGATION_DUPLICATED) && i.go(-1, false)), j(U, g, p);
      }).catch(Wr);
    }));
  }
  let Y = Tr(), ne = Tr(), ae;
  function le(E, B, W) {
    _e(E);
    const U = ne.list();
    return U.length ? U.forEach((pe) => pe(E, B, W)) : console.error(E), Promise.reject(E);
  }
  function Oe() {
    return ae && l.value !== cn ? Promise.resolve() : new Promise((E, B) => {
      Y.add([E, B]);
    });
  }
  function _e(E) {
    return ae || (ae = !E, q(), Y.list().forEach(([B, W]) => E ? W(E) : B()), Y.reset()), E;
  }
  function oe(E, B, W, U) {
    const { scrollBehavior: pe } = e;
    if (!Wn || !pe) return Promise.resolve();
    const g = !W && Qb(Zc(E.fullPath, 0)) || (U || !W) && history.state && history.state.scroll || null;
    return ht().then(() => pe(E, B, g)).then((p) => p && Xb(p)).catch((p) => le(p, E, B));
  }
  const ge = (E) => i.go(E);
  let me;
  const je = /* @__PURE__ */ new Set(), Ze = { currentRoute: l, listening: true, addRoute: h, removeRoute: b, clearRoutes: t.clearRoutes, hasRoute: _, getRoutes: m, resolve: v, options: e, push: w, replace: S, go: ge, back: () => ge(-1), forward: () => ge(1), beforeEach: o.add, beforeResolve: s.add, afterEach: a.add, onError: ne.add, isReady: Oe, install(E) {
    E.component("RouterLink", E2), E.component("RouterView", P2), E.config.globalProperties.$router = Ze, Object.defineProperty(E.config.globalProperties, "$route", { enumerable: true, get: () => ue(l) }), Wn && !me && l.value === cn && (me = true, w(i.location).catch((U) => {
    }));
    const B = {};
    for (const U in cn) Object.defineProperty(B, U, { get: () => l.value[U], enumerable: true });
    E.provide(ko, Ze), E.provide(Na, Ru(B)), E.provide(Bs, l);
    const W = E.unmount;
    je.add(E), E.unmount = function() {
      je.delete(E), je.size < 1 && (u = cn, $ && $(), $ = null, l.value = cn, me = false, ae = false), W();
    };
  } };
  function $e(E) {
    return E.reduce((B, W) => B.then(() => k(W)), Promise.resolve());
  }
  return Ze;
}
function bh() {
  return ke(ko);
}
function wh(e) {
  return ke(Na);
}
const su = 1;
function R2(e, t) {
  const n = e.scrollTop <= su, r = e.scrollTop >= e.scrollHeight - e.clientHeight - su;
  return n && t < 0 ? -1 : r && t > 0 ? 1 : 0;
}
const oo = { dir: 0, amount: 0 };
function O2(e, t, n, r) {
  if (t === 0) return { acc: oo, fire: 0 };
  const i = (e.dir === t ? e.amount : 0) + Math.abs(n);
  return i >= r ? { acc: oo, fire: t } : { acc: { dir: t, amount: i }, fire: 0 };
}
function V2(e, t, n, r) {
  return Math.abs(e) < n && Math.abs(t) < n ? "none" : Math.abs(e) > Math.abs(t) * r ? "horizontal" : "vertical";
}
function D2(e, t, n) {
  return e + t * n;
}
function H2(e, t) {
  return e >= t ? 1 : e <= -t ? -1 : 0;
}
function N2(e) {
  const t = bh(), n = vr();
  let r = false, i = 0, o = 0, s = "none", a = 0, l = 0, u = oo, c = false, f = null;
  function d(m) {
    m && r && s === "horizontal" && !c && n.panTo(a, l), r = false, i = 0, o = 0, s = "none", u = oo, c = false, f !== null && (clearTimeout(f), f = null);
  }
  function h(m) {
    const _ = e.el.value;
    if (!e.isActive.value || n.isAnimating.value || !_) {
      d(false);
      return;
    }
    if (r || (r = true, a = n.camera.value.x, l = n.camera.value.y), i += m.deltaX, o += m.deltaY, f !== null && clearTimeout(f), f = window.setTimeout(() => d(true), Dv), s === "none" && (s = V2(i, o, Hv, Hl)), (s === "horizontal" || s === "none" && Math.abs(m.deltaX) > Math.abs(m.deltaY) * Hl) && m.preventDefault(), s === "horizontal") {
      if (c) return;
      n.snapTo(D2(a, i, Nv), l);
      const v = H2(i, Fv);
      if (v !== 0) {
        const y = Ev(e.waypointId, v);
        y && (c = true, t.push(y.route));
      }
    } else if (s === "vertical") {
      const v = R2({ scrollTop: _.scrollTop, scrollHeight: _.scrollHeight, clientHeight: _.clientHeight }, m.deltaY), y = O2(u, v, m.deltaY, Vv);
      if (u = y.acc, y.fire !== 0) {
        const A = Av(e.waypointId, y.fire);
        A && (c = true, t.push(A.route));
      }
    }
  }
  let b = null;
  Ot(() => {
    b = e.el.value, b == null ? void 0 : b.addEventListener("wheel", h, { passive: false });
  }), di(() => {
    b == null ? void 0 : b.removeEventListener("wheel", h), b = null, d(false);
  });
}
const F2 = ["id", "aria-current", "aria-label"], $2 = Xe({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = pi(t.waypointId), { camera: r, viewport: i, spacing: o, setCaptureScroll: s } = vr(), a = wh(), l = R(() => a.name === t.waypointId), u = R(() => wo(n, o.value)), c = R(() => {
    const b = Math.min(o.value.col, o.value.row) * Ov;
    return Pv(u.value, r.value, i.value, { radius: b, floor: Rv });
  }), f = R(() => {
    const b = Dl + (1 - Dl) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${b})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none", maxHeight: l.value ? `${i.value.h}px` : void 0 };
  }), d = X(null);
  function h() {
    l.value && d.value && s(d.value.scrollTop);
  }
  return te(l, (b) => {
    b && d.value && (d.value.scrollTop = 0, s(0));
  }), N2({ el: d, isActive: l, waypointId: t.waypointId }), (b, m) => (se(), he("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: d, class: Le(["world-panel", { "world-panel--scroll": l.value }]), style: Ne(f.value), "aria-current": l.value ? "page" : void 0, "aria-label": ue(n).label, tabindex: "-1", "data-grid-ignore-click": "true", onScroll: h }, [Mm(b.$slots, "default", {}, void 0)], 46, F2));
} }), Pr = Dt($2, [["__scopeId", "data-v-1a70f4b7"]]), st = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, _h = [{ label: "Location", icon: rh, href: "https://maps.google.com/?q=Bentonville,+AR", display: st.location }, { label: "Email", icon: db, href: `mailto:${st.email}`, display: st.email }, { label: "Phone", icon: vb, href: `tel:${st.phone.replace(/[^\d+]/g, "")}`, display: st.phone }, { label: "GitHub", icon: nh, href: st.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: mb, href: st.linkedin, display: "bits-for-bread" }], B2 = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], j2 = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], z2 = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], W2 = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], G2 = { id: "hero", class: "hero-section" }, U2 = { class: "hero-frame glass-panel glass-panel--strong" }, Z2 = { class: "hero-main" }, K2 = { class: "hero-kicker glass-chip section-kicker" }, Y2 = { class: "hero-name section-heading" }, q2 = { class: "hero-tagline" }, X2 = { class: "hero-bio" }, J2 = { class: "hero-actions" }, Q2 = { href: "#projects", class: "hero-link hero-link--primary" }, ew = { class: "hero-rail" }, tw = { class: "hero-note quiet-sheet" }, nw = { class: "skills-block" }, rw = { class: "skill-label" }, iw = { class: "skill-items" }, ow = { class: "hero-note quiet-sheet" }, sw = { class: "hero-links" }, aw = ["href"], lw = Xe({ __name: "HeroSection", setup(e) {
  const t = _h.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, r) => (se(), he("section", G2, [M(Li, { class: "hero-container" }, { default: Ve(() => [P("div", U2, [P("div", Z2, [P("span", K2, [M(lt, { icon: ue(rh), class: "hero-location-icon" }, null, 8, ["icon"]), Jr(be(ue(st).location), 1)]), P("h1", Y2, be(ue(st).name), 1), P("p", q2, be(ue(st).tagline), 1), P("p", X2, be(ue(st).bio), 1), P("div", J2, [P("a", Q2, [r[0] || (r[0] = Jr(" View selected work ", -1)), M(lt, { icon: ue(ab), class: "hero-link-icon" }, null, 8, ["icon"])]), r[1] || (r[1] = P("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), P("aside", ew, [P("section", tw, [r[2] || (r[2] = P("p", { class: "hero-note-label" }, "Capabilities", -1)), P("div", nw, [(se(true), he(ye, null, dt(ue(B2), (i) => (se(), he("div", { key: i.label, class: "skill-group" }, [P("span", rw, be(i.label), 1), P("span", iw, be(i.items.join("  \xB7  ")), 1)]))), 128))])]), P("section", ow, [r[3] || (r[3] = P("p", { class: "hero-note-label" }, "Elsewhere", -1)), P("div", sw, [(se(true), he(ye, null, dt(ue(t), (i) => (se(), he("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [M(lt, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), P("span", null, be(i.display ?? i.label), 1)], 8, aw))), 128))])])])])]), _: 1 })]));
} }), cw = Dt(lw, [["__scopeId", "data-v-5000fea6"]]), js = { demo: { ariaLabel: "Live demo", icon: Nc, label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: nh, label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: pb, label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: Nc, label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: hb, label: "Docs", priority: 4 } };
function uw(e, t) {
  return js[e].priority - js[t].priority;
}
function fw(e) {
  return [...e.links ?? []].sort((t, n) => uw(t.kind, n.kind)).map((t) => ({ ...t, ...js[t.kind] }));
}
function au(e, t) {
  const n = fw(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const dw = { id: "projects", class: "demos-section" }, hw = { key: 0, class: "project-feature glass-panel" }, mw = { class: "project-feature-body" }, gw = { class: "project-feature-title" }, vw = { class: "project-feature-blurb" }, pw = { class: "project-feature-tech" }, yw = { class: "project-feature-actions" }, bw = ["href", "aria-label"], ww = { class: "project-index" }, _w = { class: "project-item-head" }, Sw = { class: "project-item-title" }, Cw = { key: 0, class: "project-item-links", "aria-label": "Project links" }, xw = ["href", "aria-label"], Lw = { class: "project-item-blurb" }, Aw = { class: "project-item-tech" }, Ew = Xe({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = j2, r = t ? { ...t, visibleLinks: au(t, "featured") } : null, i = n.map((o) => ({ ...o, visibleLinks: au(o, "compact") }));
  return (o, s) => (se(), he("section", dw, [M(Li, { class: "projects-container" }, { default: Ve(() => [s[1] || (s[1] = P("div", { class: "projects-head" }, [P("div", { class: "projects-heading" }, [P("span", { class: "glass-chip section-kicker" }, "Selected work"), P("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), P("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), ue(r) ? (se(), he("article", hw, [P("div", mw, [s[0] || (s[0] = P("span", { class: "project-feature-label" }, "Featured project", -1)), P("h3", gw, be(ue(r).title), 1), P("p", vw, be(ue(r).blurb), 1), P("div", pw, [(se(true), he(ye, null, dt(ue(r).tech, (a) => (se(), he("span", { key: a, class: "project-tech-tag" }, be(a), 1))), 128))])]), P("div", yw, [(se(true), he(ye, null, dt(ue(r).visibleLinks, (a) => (se(), he("a", { key: a.kind, href: a.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-link", { "project-link--demo": a.kind === "demo" }]), "aria-label": a.ariaLabel }, [M(lt, { icon: a.icon }, null, 8, ["icon"]), P("span", null, be(a.label), 1), M(zr, { activator: "parent", location: "top", text: a.ariaLabel }, null, 8, ["text"])], 10, bw))), 128))])])) : sr("", true), P("div", ww, [(se(true), he(ye, null, dt(ue(i), (a) => (se(), he("article", { key: a.title, class: "project-item quiet-sheet" }, [P("header", _w, [P("h3", Sw, be(a.title), 1), a.visibleLinks.length ? (se(), he("div", Cw, [(se(true), he(ye, null, dt(a.visibleLinks, (l) => (se(), he("a", { key: l.kind, href: l.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-item-link", { "project-item-link--demo": l.kind === "demo" }]), "aria-label": l.ariaLabel }, [M(lt, { icon: l.icon }, null, 8, ["icon"]), M(zr, { activator: "parent", location: "top", text: l.ariaLabel }, null, 8, ["text"])], 10, xw))), 128))])) : sr("", true)]), P("p", Lw, be(a.blurb), 1), P("div", Aw, [(se(true), he(ye, null, dt(a.tech, (l) => (se(), he("span", { key: l, class: "project-tech-tag" }, be(l), 1))), 128))])]))), 128))])]), _: 1 })]));
} }), kw = Dt(Ew, [["__scopeId", "data-v-990854bd"]]), Mw = { id: "resume", class: "resume-section" }, Tw = { class: "timeline" }, Pw = { class: "entry-rail" }, Iw = { class: "entry-dates glass-chip" }, Rw = { class: "entry quiet-sheet" }, Ow = { class: "entry-head" }, Vw = { class: "entry-titleblock" }, Dw = { class: "entry-role" }, Hw = { class: "entry-subhead" }, Nw = { class: "entry-company" }, Fw = { class: "entry-work-location" }, $w = { class: "entry-bullets" }, Bw = { key: 0, class: "entry-tech" }, jw = { class: "entry-tech-items" }, zw = { class: "entry-head" }, Ww = { class: "entry-titleblock" }, Gw = { class: "entry-role" }, Uw = { class: "entry-company" }, Zw = { class: "entry-meta" }, Kw = { class: "entry-dates" }, Yw = { class: "entry-location" }, qw = { key: 0, class: "entry-focus" }, Xw = Xe({ __name: "ResumeSection", setup(e) {
  return (t, n) => (se(), he("section", Mw, [M(Li, { class: "resume-container" }, { default: Ve(() => [n[2] || (n[2] = P("div", { class: "resume-head" }, [P("div", { class: "resume-heading" }, [P("span", { class: "glass-chip section-kicker" }, "Resume"), P("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), P("ol", Tw, [(se(true), he(ye, null, dt(ue(z2), (r) => (se(), he("li", { key: `${r.company}-${r.dates}`, class: "timeline-row" }, [P("div", Pw, [P("span", Iw, be(r.dates), 1)]), P("article", Rw, [P("header", Ow, [P("div", Vw, [P("h3", Dw, be(r.role), 1), P("div", Hw, [P("p", Nw, be(r.company), 1), P("span", Fw, be(r.location), 1)])])]), P("ul", $w, [(se(true), he(ye, null, dt(r.highlights, (i, o) => (se(), he("li", { key: o }, be(i), 1))), 128))]), r.tech ? (se(), he("div", Bw, [n[0] || (n[0] = P("span", { class: "entry-tech-label" }, "Stack", -1)), P("span", jw, be(r.tech.join("  \xB7  ")), 1)])) : sr("", true)])]))), 128))]), n[3] || (n[3] = P("div", { class: "edu-head" }, [P("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (se(true), he(ye, null, dt(ue(W2), (r) => (se(), he("div", { key: `${r.school}-${r.degree}`, class: "education-card glass-panel" }, [P("header", zw, [P("div", Ww, [P("h3", Gw, be(r.degree) + " \u2014 " + be(r.field), 1), P("p", Uw, be(r.school), 1)]), P("div", Zw, [P("span", Kw, be(r.dates), 1), P("span", Yw, be(r.location), 1)])]), r.focus ? (se(), he("p", qw, [n[1] || (n[1] = P("span", { class: "entry-tech-label" }, "Focus", -1)), Jr(" " + be(r.focus), 1)])) : sr("", true)]))), 128))]), _: 1 })]));
} }), Jw = Dt(Xw, [["__scopeId", "data-v-72166a64"]]), Qw = ["href", "aria-label"], e_ = { class: "contact-text" }, t_ = Xe({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => (se(), he("div", { class: Le(["contact-strip", { "is-dense": e.dense }]) }, [(se(true), he(ye, null, dt(ue(_h), (r) => (se(), he("a", { key: r.label, href: r.href, "aria-label": r.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [M(lt, { icon: r.icon, class: "contact-icon" }, null, 8, ["icon"]), P("span", e_, be(r.display ?? r.label), 1)], 8, Qw))), 128))], 2));
} }), n_ = Dt(t_, [["__scopeId", "data-v-0c3dbac0"]]), r_ = { id: "contact", class: "contact-section" }, i_ = { class: "contact-band glass-panel" }, o_ = Xe({ __name: "ContactSection", setup(e) {
  return (t, n) => (se(), he("section", r_, [M(Li, { class: "contact-container" }, { default: Ve(() => [P("div", i_, [n[0] || (n[0] = P("div", { class: "contact-head" }, [P("span", { class: "glass-chip section-kicker" }, "Contact"), P("h2", { class: "contact-title" }, "Open to interesting problems."), P("p", { class: "contact-copy" })], -1)), M(n_, { class: "contact-strip-wrap" })])]), _: 1 })]));
} }), s_ = Dt(o_, [["__scopeId", "data-v-e54dfca1"]]), a_ = { class: "about-section" }, l_ = { class: "content-surface about-card" }, c_ = { class: "section-heading" }, u_ = { class: "about-tagline" }, f_ = { class: "section-intro" }, d_ = { class: "about-meta" }, h_ = Xe({ __name: "AboutSection", setup(e) {
  return (t, n) => (se(), he("section", a_, [M(Li, { class: "about-container" }, { default: Ve(() => [P("div", l_, [n[0] || (n[0] = P("p", { class: "section-kicker" }, "About", -1)), P("h2", c_, be(ue(st).name), 1), P("p", u_, be(ue(st).tagline), 1), P("p", f_, be(ue(st).bio), 1), P("p", d_, be(ue(st).location), 1)])]), _: 1 })]));
} }), m_ = Dt(h_, [["__scopeId", "data-v-6126ab28"]]), g_ = Xe({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n } = vr(), r = X(null);
  let i = null;
  return Ot(() => {
    const o = r.value;
    if (!o) return;
    const s = () => n(o.clientWidth, o.clientHeight);
    s(), i = new ResizeObserver(s), i.observe(o);
  }), di(() => i == null ? void 0 : i.disconnect()), (o, s) => (se(), he("div", { ref_key: "stageRef", ref: r, class: "world-stage" }, [P("div", { class: "world-plane", style: Ne(ue(t)) }, [M(Pr, { "waypoint-id": "hero" }, { default: Ve(() => [M(cw)]), _: 1 }), M(Pr, { "waypoint-id": "projects" }, { default: Ve(() => [M(kw)]), _: 1 }), M(Pr, { "waypoint-id": "resume" }, { default: Ve(() => [M(Jw)]), _: 1 }), M(Pr, { "waypoint-id": "contact" }, { default: Ve(() => [M(s_)]), _: 1 }), M(Pr, { "waypoint-id": "about" }, { default: Ve(() => [M(m_)]), _: 1 })], 4)], 512));
} }), v_ = Dt(g_, [["__scopeId", "data-v-7b9c1dde"]]), p_ = { class: "lane-compass", "aria-label": "Move to an adjacent section" }, y_ = Xe({ __name: "DirectionalNav", setup(e) {
  const t = [{ key: "west", dgx: -1, dgy: 0, icon: cb, edge: "left" }, { key: "east", dgx: 1, dgy: 0, icon: ub, edge: "right" }, { key: "north", dgx: 0, dgy: -1, icon: fb, edge: "top" }, { key: "south", dgx: 0, dgy: 1, icon: lb, edge: "bottom" }], n = wh(), r = bh(), i = R(() => $f(n.name)), o = R(() => t.flatMap((a) => {
    const l = da(i.value, a.dgx, a.dgy);
    return l ? [{ d: a, neighbour: l }] : [];
  }));
  function s(a) {
    r.push(a);
  }
  return (a, l) => (se(), he("nav", p_, [(se(true), he(ye, null, dt(o.value, ({ d: u, neighbour: c }) => (se(), On(nr, { key: u.key, icon: u.icon, "aria-label": `Go to ${c.label}`, title: c.label, variant: "flat", size: "small", class: Le(["lane-compass__btn", `lane-compass__btn--${u.edge}`]), onClick: (f) => s(c.route) }, null, 8, ["icon", "aria-label", "title", "class", "onClick"]))), 128))]));
} }), b_ = Dt(y_, [["__scopeId", "data-v-3828250c"]]), w_ = J({ ...Ge(), ...Dn(tb(), ["fullHeight"]), ...Vt() }, "VApp"), __ = Ae()({ name: "VApp", props: w_(), setup(e, t) {
  let { slots: n } = t;
  const r = Kt(e), { layoutClasses: i, getLayoutItem: o, items: s, layoutRef: a } = ob({ ...e, fullHeight: true }), { rtlClasses: l } = Sr();
  return Fe(() => {
    var _a2;
    return P("div", { ref: a, class: Le(["v-application", r.themeClasses.value, i.value, l.value, e.class]), style: Ne([e.style]) }, [P("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: o, items: s, theme: r };
} }), S_ = Xe({ __name: "App", setup(e) {
  return (t, n) => (se(), On(__, { class: "app-shell" }, { default: Ve(() => [M(f0), M(Ab), M(v_), M(b_)]), _: 1 }));
} }), C_ = { collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z", info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z", checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z", sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z", expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", subgroup: "svg:M7,10L12,15L17,10H7Z", dropdown: "svg:M7,10L12,15L17,10H7Z", radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z", radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12", first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z", last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z", unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z", file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z", plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", minus: "svg:M19,13H5V11H19V13Z", calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", treeviewCollapse: "svg:M7,10L12,15L17,10H7Z", treeviewExpand: "svg:M10,17L15,12L10,7V17Z", tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z", upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z", color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8", command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z", ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z", space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z", shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z", alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z", enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z", arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z", arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z", arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z", arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z", backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z", play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z", pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z", fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z", volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z", volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z", volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z", search: "svg:M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, x_ = { component: Aa }, L_ = th({ icons: { defaultSet: "mdi", aliases: C_, sets: { mdi: x_ } }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function A_(e) {
  const t = vr();
  let n = true, r = null;
  const i = (o) => {
    var _a2;
    (_a2 = document.getElementById(`panel-${o}`)) == null ? void 0 : _a2.focus({ preventScroll: true });
  };
  e.afterEach((o) => {
    const s = $f(o.name);
    t.panToWaypoint(s, { snap: n }), n || (t.isAnimating.value ? r = s : i(s)), n = false;
  }), te(t.isAnimating, (o) => {
    !o && r !== null && (i(r), r = null);
  });
}
const E_ = Xe({ name: "RouteCoordinate", render: () => null }), k_ = [...vi.map((e) => ({ path: e.route, name: e.id, component: E_ })), { path: "/:pathMatch(.*)*", redirect: "/" }], Fa = I2({ history: u2("/"), routes: k_ }), M_ = Wg(S_).use(L_).use(Fa);
A_(Fa);
Fa.isReady().then(() => M_.mount("#app"));
