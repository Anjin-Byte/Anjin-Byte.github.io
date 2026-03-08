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
function Gu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const vt = {}, Ol = [], jn = () => {
}, Jv = () => false, mr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Yu = (e) => e.startsWith("onUpdate:"), Et = Object.assign, Ku = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rp = Object.prototype.hasOwnProperty, st = (e, t) => Rp.call(e, t), Le = Array.isArray, Nl = (e) => li(e) === "[object Map]", Qv = (e) => li(e) === "[object Set]", Dd = (e) => li(e) === "[object Date]", We = (e) => typeof e == "function", pt = (e) => typeof e == "string", Un = (e) => typeof e == "symbol", it = (e) => e !== null && typeof e == "object", em = (e) => (it(e) || We(e)) && We(e.then) && We(e.catch), tm = Object.prototype.toString, li = (e) => tm.call(e), Fp = (e) => li(e).slice(8, -1), nm = (e) => li(e) === "[object Object]", gr = (e) => pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wo = Gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), hr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Lp = /-\w/g, sn = hr((e) => e.replace(Lp, (t) => t.slice(1).toUpperCase())), Op = /\B([A-Z])/g, yl = hr((e) => e.replace(Op, "-$1").toLowerCase()), qn = hr((e) => e.charAt(0).toUpperCase() + e.slice(1)), us = hr((e) => e ? `on${qn(e)}` : ""), Aa = (e, t) => !Object.is(e, t), Fi = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, am = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Xu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Np = (e) => {
  const t = pt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Md;
const yr = () => Md || (Md = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function me(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = pt(a) ? jp(a) : me(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (pt(e) || it(e)) return e;
}
const Hp = /;(?![^(]*\))/g, zp = /:([^]+)/, Wp = /\/\*[^]*?\*\//g;
function jp(e) {
  const t = {};
  return e.replace(Wp, "").split(Hp).forEach((n) => {
    if (n) {
      const a = n.split(zp);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (pt(e)) t = e;
  else if (Le(e)) for (let n = 0; n < e.length; n++) {
    const a = ne(e[n]);
    a && (t += a + " ");
  }
  else if (it(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Up(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !pt(t) && (e.class = ne(t)), n && (e.style = me(n)), e;
}
const Gp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yp = Gu(Gp);
function lm(e) {
  return !!e || e === "";
}
function Kp(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = qu(e[a], t[a]);
  return n;
}
function qu(e, t) {
  if (e === t) return true;
  let n = Dd(e), a = Dd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Un(e), a = Un(t), n || a) return e === t;
  if (n = Le(e), a = Le(t), n || a) return n && a ? Kp(e, t) : false;
  if (n = it(e), a = it(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !qu(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const om = (e) => !!(e && e.__v_isRef === true), De = (e) => pt(e) ? e : e == null ? "" : Le(e) || it(e) && (e.toString === tm || !We(e.toString)) ? om(e) ? De(e.value) : JSON.stringify(e, im, 2) : String(e), im = (e, t) => om(t) ? im(e, t.value) : Nl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[cs(a, o) + " =>"] = l, n), {}) } : Qv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => cs(n)) } : Un(t) ? cs(t) : it(t) && !Le(t) && !nm(t) ? String(t) : t, cs = (e, t = "") => {
  var n;
  return Un(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Kt;
class rm {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Kt, !t && Kt && (this.index = (Kt.scopes || (Kt.scopes = [])).push(this) - 1);
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
      const n = Kt;
      try {
        return Kt = this, t();
      } finally {
        Kt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Kt, Kt = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (Kt = this.prevScope, this.prevScope = void 0);
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
function jl(e) {
  return new rm(e);
}
function sm() {
  return Kt;
}
function St(e, t = false) {
  Kt && Kt.cleanups.push(e);
}
let ht;
const ds = /* @__PURE__ */ new WeakSet();
class um {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Kt && Kt.active && Kt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || dm(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Ed(this), fm(this);
    const t = ht, n = An;
    ht = this, An = true;
    try {
      return this.fn();
    } finally {
      vm(this), ht = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Qu(t);
      this.deps = this.depsTail = void 0, Ed(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Hs(this) && this.run();
  }
  get dirty() {
    return Hs(this);
  }
}
let cm = 0, Co, _o;
function dm(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = _o, _o = e;
    return;
  }
  e.next = Co, Co = e;
}
function Zu() {
  cm++;
}
function Ju() {
  if (--cm > 0) return;
  if (_o) {
    let t = _o;
    for (_o = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Co; ) {
    let t = Co;
    for (Co = void 0; t; ) {
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
function fm(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vm(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), Qu(a), Xp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Hs(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (mm(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function mm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bo) || (e.globalVersion = Bo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hs(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = ht, a = An;
  ht = e, An = true;
  try {
    fm(e);
    const l = e.fn(e._value);
    (t.version === 0 || Aa(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    ht = n, An = a, vm(e), e.flags &= -3;
  }
}
function Qu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Qu(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = true;
const gm = [];
function ua() {
  gm.push(An), An = false;
}
function ca() {
  const e = gm.pop();
  An = e === void 0 ? true : e;
}
function Ed(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ht;
    ht = void 0;
    try {
      t();
    } finally {
      ht = n;
    }
  }
}
let Bo = 0;
class qp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ec {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!ht || !An || ht === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ht) n = this.activeLink = new qp(ht, this), ht.deps ? (n.prevDep = ht.depsTail, ht.depsTail.nextDep = n, ht.depsTail = n) : ht.deps = ht.depsTail = n, hm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = ht.depsTail, n.nextDep = void 0, ht.depsTail.nextDep = n, ht.depsTail = n, ht.deps === n && (ht.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bo++, this.notify(t);
  }
  notify(t) {
    Zu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ju();
    }
  }
}
function hm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) hm(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Gi = /* @__PURE__ */ new WeakMap(), tl = Symbol(""), zs = Symbol(""), $o = Symbol("");
function Xt(e, t, n) {
  if (An && ht) {
    let a = Gi.get(e);
    a || Gi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new ec()), l.map = a, l.key = n), l.track();
  }
}
function ia(e, t, n, a, l, o) {
  const i = Gi.get(e);
  if (!i) {
    Bo++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (Zu(), t === "clear") i.forEach(r);
  else {
    const s = Le(e), u = s && gr(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === $o || !Un(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get($o)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(tl)), Nl(e) && r(i.get(zs)));
        break;
      case "delete":
        s || (r(i.get(tl)), Nl(e) && r(i.get(zs)));
        break;
      case "set":
        Nl(e) && r(i.get(tl));
        break;
    }
  }
  Ju();
}
function Zp(e, t) {
  const n = Gi.get(e);
  return n && n.get(t);
}
function Pl(e) {
  const t = Me(e);
  return t === e ? t : (Xt(t, "iterate", $o), pn(e) ? t : t.map(En));
}
function br(e) {
  return Xt(e = Me(e), "iterate", $o), e;
}
function Ia(e, t) {
  return da(e) ? Ul(Da(e) ? En(t) : t) : En(t);
}
const Jp = { __proto__: null, [Symbol.iterator]() {
  return fs(this, Symbol.iterator, (e) => Ia(this, e));
}, concat(...e) {
  return Pl(this).concat(...e.map((t) => Le(t) ? Pl(t) : t));
}, entries() {
  return fs(this, "entries", (e) => (e[1] = Ia(this, e[1]), e));
}, every(e, t) {
  return ta(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return ta(this, "filter", e, t, (n) => n.map((a) => Ia(this, a)), arguments);
}, find(e, t) {
  return ta(this, "find", e, t, (n) => Ia(this, n), arguments);
}, findIndex(e, t) {
  return ta(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return ta(this, "findLast", e, t, (n) => Ia(this, n), arguments);
}, findLastIndex(e, t) {
  return ta(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return ta(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return vs(this, "includes", e);
}, indexOf(...e) {
  return vs(this, "indexOf", e);
}, join(e) {
  return Pl(this).join(e);
}, lastIndexOf(...e) {
  return vs(this, "lastIndexOf", e);
}, map(e, t) {
  return ta(this, "map", e, t, void 0, arguments);
}, pop() {
  return vo(this, "pop");
}, push(...e) {
  return vo(this, "push", e);
}, reduce(e, ...t) {
  return Bd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Bd(this, "reduceRight", e, t);
}, shift() {
  return vo(this, "shift");
}, some(e, t) {
  return ta(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return vo(this, "splice", e);
}, toReversed() {
  return Pl(this).toReversed();
}, toSorted(e) {
  return Pl(this).toSorted(e);
}, toSpliced(...e) {
  return Pl(this).toSpliced(...e);
}, unshift(...e) {
  return vo(this, "unshift", e);
}, values() {
  return fs(this, "values", (e) => Ia(this, e));
} };
function fs(e, t, n) {
  const a = br(e), l = a[t]();
  return a !== e && !pn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const Qp = Array.prototype;
function ta(e, t, n, a, l, o) {
  const i = br(e), r = i !== e && !pn(e), s = i[t];
  if (s !== Qp[t]) {
    const d = s.apply(e, o);
    return r ? En(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, Ia(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function Bd(e, t, n, a) {
  const l = br(e);
  let o = n;
  return l !== e && (pn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Ia(e, r), s, e);
  }), l[t](o, ...a);
}
function vs(e, t, n) {
  const a = Me(e);
  Xt(a, "iterate", $o);
  const l = a[t](...n);
  return (l === -1 || l === false) && oi(n[0]) ? (n[0] = Me(n[0]), a[t](...n)) : l;
}
function vo(e, t, n = []) {
  ua(), Zu();
  const a = Me(e)[t].apply(e, n);
  return Ju(), ca(), a;
}
const eS = Gu("__proto__,__v_isRef,__isVue"), ym = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Un));
function tS(e) {
  Un(e) || (e = String(e));
  const t = Me(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class bm {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? dS : km : o ? xm : Sm).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Le(t);
    if (!l) {
      let s;
      if (i && (s = Jp[n])) return s;
      if (n === "hasOwnProperty") return tS;
    }
    const r = Reflect.get(t, n, wt(t) ? t : a);
    if ((Un(n) ? ym.has(n) : eS(n)) || (l || Xt(t, "get", n), o)) return r;
    if (wt(r)) {
      const s = i && gr(n) ? r : r.value;
      return l && it(s) ? rl(s) : s;
    }
    return it(r) ? l ? rl(r) : Bt(r) : r;
  }
}
class pm extends bm {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = Le(t) && gr(n);
    if (!this._isShallow) {
      const u = da(o);
      if (!pn(a) && !da(a) && (o = Me(o), a = Me(a)), !i && wt(o) && !wt(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : st(t, n), s = Reflect.set(t, n, a, wt(t) ? t : l);
    return t === Me(l) && (r ? Aa(a, o) && ia(t, "set", n, a) : ia(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = st(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && ia(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Un(n) || !ym.has(n)) && Xt(t, "has", n), a;
  }
  ownKeys(t) {
    return Xt(t, "iterate", Le(t) ? "length" : tl), Reflect.ownKeys(t);
  }
}
class nS extends bm {
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
const aS = new pm(), lS = new nS(), oS = new pm(true);
const Ws = (e) => e, wi = (e) => Reflect.getPrototypeOf(e);
function iS(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Me(l), i = Nl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? Ws : t ? Ul : En;
    return !t && Xt(o, "iterate", s ? zs : tl), Et(Object.create(u), { next() {
      const { value: d, done: f } = u.next();
      return f ? { value: d, done: f } : { value: r ? [c(d[0]), c(d[1])] : c(d), done: f };
    } });
  };
}
function Ci(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function rS(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = Me(o), r = Me(l);
    e || (Aa(l, r) && Xt(i, "get", l), Xt(i, "get", r));
    const { has: s } = wi(i), u = t ? Ws : e ? Ul : En;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Xt(Me(l), "iterate", tl), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Me(o), r = Me(l);
    return e || (Aa(l, r) && Xt(i, "has", l), Xt(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Me(r), u = t ? Ws : e ? Ul : En;
    return !e && Xt(s, "iterate", tl), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return Et(n, e ? { add: Ci("add"), set: Ci("set"), delete: Ci("delete"), clear: Ci("clear") } : { add(l) {
    !t && !pn(l) && !da(l) && (l = Me(l));
    const o = Me(this);
    return wi(o).has.call(o, l) || (o.add(l), ia(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !pn(o) && !da(o) && (o = Me(o));
    const i = Me(this), { has: r, get: s } = wi(i);
    let u = r.call(i, l);
    u || (l = Me(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Aa(o, c) && ia(i, "set", l, o) : ia(i, "add", l, o), this;
  }, delete(l) {
    const o = Me(this), { has: i, get: r } = wi(o);
    let s = i.call(o, l);
    s || (l = Me(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && ia(o, "delete", l, void 0), u;
  }, clear() {
    const l = Me(this), o = l.size !== 0, i = l.clear();
    return o && ia(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = iS(l, e, t);
  }), n;
}
function tc(e, t) {
  const n = rS(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(st(n, l) && l in a ? n : a, l, o);
}
const sS = { get: tc(false, false) }, uS = { get: tc(false, true) }, cS = { get: tc(true, false) };
const Sm = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap(), km = /* @__PURE__ */ new WeakMap(), dS = /* @__PURE__ */ new WeakMap();
function fS(e) {
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
function vS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fS(Fp(e));
}
function Bt(e) {
  return da(e) ? e : nc(e, false, aS, sS, Sm);
}
function mS(e) {
  return nc(e, false, oS, uS, xm);
}
function rl(e) {
  return nc(e, true, lS, cS, km);
}
function nc(e, t, n, a, l) {
  if (!it(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = vS(e);
  if (o === 0) return e;
  const i = l.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? a : n);
  return l.set(e, r), r;
}
function Da(e) {
  return da(e) ? Da(e.__v_raw) : !!(e && e.__v_isReactive);
}
function da(e) {
  return !!(e && e.__v_isReadonly);
}
function pn(e) {
  return !!(e && e.__v_isShallow);
}
function oi(e) {
  return e ? !!e.__v_raw : false;
}
function Me(e) {
  const t = e && e.__v_raw;
  return t ? Me(t) : e;
}
function wm(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && am(e, "__v_skip", true), e;
}
const En = (e) => it(e) ? Bt(e) : e, Ul = (e) => it(e) ? rl(e) : e;
function wt(e) {
  return e ? e.__v_isRef === true : false;
}
function O(e) {
  return Cm(e, false);
}
function re(e) {
  return Cm(e, true);
}
function Cm(e, t) {
  return wt(e) ? e : new gS(e, t);
}
class gS {
  constructor(t, n) {
    this.dep = new ec(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Me(t), this._value = n ? t : En(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || pn(t) || da(t);
    t = a ? t : Me(t), Aa(t, n) && (this._rawValue = t, this._value = a ? t : En(t), this.dep.trigger());
  }
}
function Xe(e) {
  return wt(e) ? e.value : e;
}
function ut(e) {
  return We(e) ? e() : Xe(e);
}
const hS = { get: (e, t, n) => t === "__v_raw" ? e : Xe(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return wt(l) && !wt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function _m(e) {
  return Da(e) ? e : new Proxy(e, hS);
}
function ao(e) {
  const t = Le(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Vm(e, n);
  return t;
}
class yS {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Me(t);
    let l = true, o = t;
    if (!Le(t) || !gr(String(n))) do
      l = !oi(o) || pn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Xe(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && wt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (wt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Zp(this._raw, this._key);
  }
}
class bS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return wt(e) ? e : We(e) ? new bS(e) : it(e) && arguments.length > 1 ? Vm(e, t, n) : O(e);
}
function Vm(e, t, n) {
  return new yS(e, t, n);
}
class pS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ec(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && ht !== this) return dm(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return mm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function SS(e, t, n = false) {
  let a, l;
  return We(e) ? a = e : (a = e.get, l = e.set), new pS(a, l, n);
}
const _i = {}, Yi = /* @__PURE__ */ new WeakMap();
let Za;
function xS(e, t = false, n = Za) {
  if (n) {
    let a = Yi.get(n);
    a || Yi.set(n, a = []), a.push(e);
  }
}
function kS(e, t, n = vt) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (V) => l ? V : pn(V) || l === false || l === 0 ? ra(V, 1) : ra(V);
  let c, d, f, v, y = false, m = false;
  if (wt(e) ? (d = () => e.value, y = pn(e)) : Da(e) ? (d = () => u(e), y = true) : Le(e) ? (m = true, y = e.some((V) => Da(V) || pn(V)), d = () => e.map((V) => {
    if (wt(V)) return V.value;
    if (Da(V)) return u(V);
    if (We(V)) return s ? s(V, 2) : V();
  })) : We(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      ua();
      try {
        f();
      } finally {
        ca();
      }
    }
    const V = Za;
    Za = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Za = V;
    }
  } : d = jn, t && l) {
    const V = d, S = l === true ? 1 / 0 : l;
    d = () => ra(V(), S);
  }
  const h = sm(), b = () => {
    c.stop(), h && h.active && Ku(h.effects, c);
  };
  if (o && t) {
    const V = t;
    t = (...S) => {
      V(...S), b();
    };
  }
  let k = m ? new Array(e.length).fill(_i) : _i;
  const I = (V) => {
    if (!(!(c.flags & 1) || !c.dirty && !V)) if (t) {
      const S = c.run();
      if (l || y || (m ? S.some((p, C) => Aa(p, k[C])) : Aa(S, k))) {
        f && f();
        const p = Za;
        Za = c;
        try {
          const C = [S, k === _i ? void 0 : m && k[0] === _i ? [] : k, v];
          k = S, s ? s(t, 3, C) : t(...C);
        } finally {
          Za = p;
        }
      }
    } else c.run();
  };
  return r && r(I), c = new um(d), c.scheduler = i ? () => i(I, false) : I, v = (V) => xS(V, false, c), f = c.onStop = () => {
    const V = Yi.get(c);
    if (V) {
      if (s) s(V, 4);
      else for (const S of V) S();
      Yi.delete(c);
    }
  }, t ? a ? I(true) : k = c.run() : i ? i(I.bind(null, true), true) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b;
}
function ra(e, t = 1 / 0, n) {
  if (t <= 0 || !it(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, wt(e)) ra(e.value, t, n);
  else if (Le(e)) for (let a = 0; a < e.length; a++) ra(e[a], t, n);
  else if (Qv(e) || Nl(e)) e.forEach((a) => {
    ra(a, t, n);
  });
  else if (nm(e)) {
    for (const a in e) ra(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && ra(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ii(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    pr(l, t, n);
  }
}
function Bn(e, t, n, a) {
  if (We(e)) {
    const l = ii(e, t, n, a);
    return l && em(l) && l.catch((o) => {
      pr(o, t, n);
    }), l;
  }
  if (Le(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(Bn(e[o], t, n, a));
    return l;
  }
}
function pr(e, t, n, a = true) {
  const l = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || vt;
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
      ua(), ii(o, null, 10, [e, s, u]), ca();
      return;
    }
  }
  wS(e, n, l, a, i);
}
function wS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const ln = [];
let Nn = -1;
const Hl = [];
let Pa = null, El = 0;
const Im = Promise.resolve();
let Ki = null;
function Ee(e) {
  const t = Ki || Im;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function CS(e) {
  let t = Nn + 1, n = ln.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = ln[a], o = Ro(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function ac(e) {
  if (!(e.flags & 1)) {
    const t = Ro(e), n = ln[ln.length - 1];
    !n || !(e.flags & 2) && t >= Ro(n) ? ln.push(e) : ln.splice(CS(t), 0, e), e.flags |= 1, Pm();
  }
}
function Pm() {
  Ki || (Ki = Im.then(Am));
}
function _S(e) {
  Le(e) ? Hl.push(...e) : Pa && e.id === -1 ? Pa.splice(El + 1, 0, e) : e.flags & 1 || (Hl.push(e), e.flags |= 1), Pm();
}
function $d(e, t, n = Nn + 1) {
  for (; n < ln.length; n++) {
    const a = ln[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      ln.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Tm(e) {
  if (Hl.length) {
    const t = [...new Set(Hl)].sort((n, a) => Ro(n) - Ro(a));
    if (Hl.length = 0, Pa) {
      Pa.push(...t);
      return;
    }
    for (Pa = t, El = 0; El < Pa.length; El++) {
      const n = Pa[El];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pa = null, El = 0;
  }
}
const Ro = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Am(e) {
  try {
    for (Nn = 0; Nn < ln.length; Nn++) {
      const t = ln[Nn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ii(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nn < ln.length; Nn++) {
      const t = ln[Nn];
      t && (t.flags &= -2);
    }
    Nn = -1, ln.length = 0, Tm(), Ki = null, (ln.length || Hl.length) && Am();
  }
}
let mn = null, Dm = null;
function Xi(e) {
  const t = mn;
  return mn = e, Dm = e && e.type.__scopeId || null, t;
}
function he(e, t = mn, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && Ji(-1);
    const o = Xi(t);
    let i;
    try {
      i = e(...l);
    } finally {
      Xi(o), a._d && Ji(1);
    }
    return i;
  };
  return a._n = true, a._c = true, a._d = true, a;
}
function at(e, t) {
  if (mn === null) return e;
  const n = _r(mn), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = vt] = t[l];
    o && (We(o) && (o = { mounted: o, updated: o }), o.deep && ra(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Ga(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (ua(), Bn(s, n, 8, [e.el, r, e, t]), ca());
  }
}
function ft(e, t) {
  if (Jt) {
    let n = Jt.provides;
    const a = Jt.parent && Jt.parent.provides;
    a === n && (n = Jt.provides = Object.create(a)), n[e] = t;
  }
}
function Ge(e, t, n = false) {
  const a = si();
  if (a || zl) {
    let l = zl ? zl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && We(t) ? t.call(a && a.proxy) : t;
  }
}
const VS = Symbol.for("v-scx"), IS = () => Ge(VS);
function mt(e, t) {
  return lc(e, null, t);
}
function se(e, t, n) {
  return lc(e, t, n);
}
function lc(e, t, n = vt) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = Et({}, n), s = t && a || !t && o !== "post";
  let u;
  if (No) {
    if (o === "sync") {
      const v = IS();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = jn, v.resume = jn, v.pause = jn, v;
    }
  }
  const c = Jt;
  r.call = (v, y, m) => Bn(v, c, y, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    Yt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, y) => {
    y ? v() : ac(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = kS(e, t, r);
  return No && (u ? u.push(f) : s && f()), f;
}
function PS(e, t, n) {
  const a = this.proxy, l = pt(e) ? e.includes(".") ? Mm(a, e) : () => a[e] : e.bind(a, a);
  let o;
  We(t) ? o = t : (o = t.handler, n = t);
  const i = ui(this), r = lc(l, o.bind(a), n);
  return i(), r;
}
function Mm(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const Em = Symbol("_vte"), Bm = (e) => e.__isTeleport, Vo = (e) => e && (e.disabled || e.disabled === ""), Rd = (e) => e && (e.defer || e.defer === ""), Fd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ld = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, js = (e, t) => {
  const n = e && e.to;
  return pt(n) ? t ? t(n) : null : n;
}, $m = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: y, createText: m, createComment: h } } = u, b = Vo(t.props);
  let { shapeFlag: k, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const S = t.el = m(""), p = t.anchor = m("");
    v(S, n, a), v(p, n, a);
    const C = (T, P) => {
      k & 16 && c(I, T, P, l, o, i, r, s);
    }, w = () => {
      const T = t.target = js(t.props, y), P = Us(T, t, m, v);
      T && (i !== "svg" && Fd(T) ? i = "svg" : i !== "mathml" && Ld(T) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), b || (C(T, P), Li(t, false)));
    };
    b && (C(n, p), Li(t, true)), Rd(t.props) ? (t.el.__isMounted = false, Yt(() => {
      w(), delete t.el.__isMounted;
    }, o)) : w();
  } else {
    if (Rd(t.props) && e.el.__isMounted === false) {
      Yt(() => {
        $m.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const S = t.anchor = e.anchor, p = t.target = e.target, C = t.targetAnchor = e.targetAnchor, w = Vo(e.props), T = w ? n : p, P = w ? S : C;
    if (i === "svg" || Fd(p) ? i = "svg" : (i === "mathml" || Ld(p)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, T, l, o, i, r), uc(e, t, true)) : s || d(e, t, T, P, l, o, i, r, false), b) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Vi(t, n, S, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const M = t.target = js(t.props, y);
      M && Vi(t, M, null, u, 0);
    } else w && Vi(t, p, C, u, 1);
    Li(t, b);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const v = o || !Vo(f);
    for (let y = 0; y < r.length; y++) {
      const m = r[y];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: Vi, hydrate: TS };
function Vi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || Vo(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function TS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(h, b) {
    let k = b;
    for (; k; ) {
      if (k && k.nodeType === 8) {
        if (k.data === "teleport start anchor") t.targetStart = k;
        else if (k.data === "teleport anchor") {
          t.targetAnchor = k, h._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      k = i(k);
    }
  }
  function v(h, b) {
    b.anchor = d(i(h), b, r(h), n, a, l, o);
  }
  const y = t.target = js(t.props, s), m = Vo(t.props);
  if (y) {
    const h = y._lpa || y.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(y, h), t.targetAnchor || Us(y, t, c, u, r(e) === y ? e : null)) : (t.anchor = i(e), f(y, h), t.targetAnchor || Us(y, t, c, u), d(h && i(h), t, y, n, a, l, o))), Li(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const AS = $m;
function Li(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Us(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[Em] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Hn = Symbol("_leaveCb"), mo = Symbol("_enterCb");
function Rm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Pt(() => {
    e.isMounted = true;
  }), Ut(() => {
    e.isUnmounting = true;
  }), e;
}
const Cn = [Function, Array], Fm = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Cn, onEnter: Cn, onAfterEnter: Cn, onEnterCancelled: Cn, onBeforeLeave: Cn, onLeave: Cn, onAfterLeave: Cn, onLeaveCancelled: Cn, onBeforeAppear: Cn, onAppear: Cn, onAfterAppear: Cn, onAppearCancelled: Cn }, Lm = (e) => {
  const t = e.subTree;
  return t.component ? Lm(t.component) : t;
}, DS = { name: "BaseTransition", props: Fm, setup(e, { slots: t }) {
  const n = si(), a = Rm();
  return () => {
    const l = t.default && oc(t.default(), true);
    if (!l || !l.length) return;
    const o = Om(l), i = Me(e), { mode: r } = i;
    if (a.isLeaving) return ms(o);
    const s = Od(o);
    if (!s) return ms(o);
    let u = Fo(s, i, a, n, (d) => u = d);
    s.type !== qt && sl(s, u);
    let c = n.subTree && Od(n.subTree);
    if (c && c.type !== qt && !Qa(c, s) && Lm(n).type !== qt) {
      let d = Fo(c, i, a, n);
      if (sl(c, d), r === "out-in" && s.type !== qt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, ms(o);
      r === "in-out" && s.type !== qt ? d.delayLeave = (f, v, y) => {
        const m = Nm(a, c);
        m[String(c.key)] = c, f[Hn] = () => {
          v(), f[Hn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          y(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function Om(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== qt) {
      t = n;
      break;
    }
  }
  return t;
}
const MS = DS;
function Nm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function Fo(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: y, onLeaveCancelled: m, onBeforeAppear: h, onAppear: b, onAfterAppear: k, onAppearCancelled: I } = t, V = String(e.key), S = Nm(n, e), p = (T, P) => {
    T && Bn(T, a, 9, P);
  }, C = (T, P) => {
    const M = P[1];
    p(T, P), Le(T) ? T.every((D) => D.length <= 1) && M() : T.length <= 1 && M();
  }, w = { mode: i, persisted: r, beforeEnter(T) {
    let P = s;
    if (!n.isMounted) if (o) P = h || s;
    else return;
    T[Hn] && T[Hn](true);
    const M = S[V];
    M && Qa(e, M) && M.el[Hn] && M.el[Hn](), p(P, [T]);
  }, enter(T) {
    if (S[V] === e) return;
    let P = u, M = c, D = d;
    if (!n.isMounted) if (o) P = b || u, M = k || c, D = I || d;
    else return;
    let E = false;
    T[mo] = (R) => {
      E || (E = true, R ? p(D, [T]) : p(M, [T]), w.delayedLeave && w.delayedLeave(), T[mo] = void 0);
    };
    const A = T[mo].bind(null, false);
    P ? C(P, [T, A]) : A();
  }, leave(T, P) {
    const M = String(e.key);
    if (T[mo] && T[mo](true), n.isUnmounting) return P();
    p(f, [T]);
    let D = false;
    T[Hn] = (A) => {
      D || (D = true, P(), A ? p(m, [T]) : p(y, [T]), T[Hn] = void 0, S[M] === e && delete S[M]);
    };
    const E = T[Hn].bind(null, false);
    S[M] = e, v ? C(v, [T, E]) : E();
  }, clone(T) {
    const P = Fo(T, t, n, a, l);
    return l && l(P), P;
  } };
  return w;
}
function ms(e) {
  if (Sr(e)) return e = va(e), e.children = null, e;
}
function Od(e) {
  if (!Sr(e)) return Bm(e.type) && e.children ? Om(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && We(n.default)) return n.default();
  }
}
function sl(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, sl(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function oc(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && l++, a = a.concat(oc(i.children, t, r))) : (t || i.type !== qt) && a.push(r != null ? va(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function un(e, t) {
  return We(e) ? Et({ name: e.name }, t, { setup: e }) : e;
}
function Ft() {
  const e = si();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Hm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Nd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const qi = /* @__PURE__ */ new WeakMap();
function Io(e, t, n, a, l = false) {
  if (Le(e)) {
    e.forEach((m, h) => Io(m, t && (Le(t) ? t[h] : t), n, a, l));
    return;
  }
  if (Po(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Io(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? _r(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === vt ? r.refs = {} : r.refs, d = r.setupState, f = Me(d), v = d === vt ? Jv : (m) => Nd(c, m) ? false : st(f, m), y = (m, h) => !(h && Nd(c, h));
  if (u != null && u !== s) {
    if (Hd(t), pt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (wt(u)) {
      const m = t;
      y(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (We(s)) ii(s, r, 12, [i, c]);
  else {
    const m = pt(s), h = wt(s);
    if (m || h) {
      const b = () => {
        if (e.f) {
          const k = m ? v(s) ? d[s] : c[s] : y() || !e.k ? s.value : c[e.k];
          if (l) Le(k) && Ku(k, o);
          else if (Le(k)) k.includes(o) || k.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const I = [o];
            y(s, e.k) && (s.value = I), e.k && (c[e.k] = I);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : h && (y(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const k = () => {
          b(), qi.delete(e);
        };
        k.id = -1, qi.set(e, k), Yt(k, n);
      } else Hd(e), b();
    }
  }
}
function Hd(e) {
  const t = qi.get(e);
  t && (t.flags |= 8, qi.delete(e));
}
yr().requestIdleCallback;
yr().cancelIdleCallback;
const Po = (e) => !!e.type.__asyncLoader, Sr = (e) => e.type.__isKeepAlive;
function zm(e, t) {
  Wm(e, "a", t);
}
function ic(e, t) {
  Wm(e, "da", t);
}
function Wm(e, t, n = Jt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (xr(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) Sr(l.parent.vnode) && ES(a, t, n, l), l = l.parent;
  }
}
function ES(e, t, n, a) {
  const l = xr(t, e, a, true);
  wr(() => {
    Ku(a[t], l);
  }, n);
}
function xr(e, t, n = Jt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ua();
      const r = ui(n), s = Bn(t, n, e, i);
      return r(), ca(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const ha = (e) => (t, n = Jt) => {
  (!No || e === "sp") && xr(e, (...a) => t(...a), n);
}, lo = ha("bm"), Pt = ha("m"), jm = ha("bu"), kr = ha("u"), Ut = ha("bum"), wr = ha("um"), BS = ha("sp"), $S = ha("rtg"), RS = ha("rtc");
function FS(e, t = Jt) {
  xr("ec", e, t);
}
const Um = "components";
function Ae(e, t) {
  return Gm(Um, e, true, t) || e;
}
const LS = Symbol.for("v-ndc");
function OS(e) {
  return pt(e) && Gm(Um, e, false) || e;
}
function Gm(e, t, n = true, a = false) {
  const l = mn || Jt;
  if (l) {
    const o = l.type;
    {
      const r = xx(o, false);
      if (r && (r === t || r === sn(t) || r === qn(sn(t)))) return o;
    }
    const i = zd(l[e] || o[e], t) || zd(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function zd(e, t) {
  return e && (e[t] || e[sn(t)] || e[qn(sn(t))]);
}
function fa(e, t, n, a) {
  let l;
  const o = n, i = Le(e);
  if (i || pt(e)) {
    const r = i && Da(e);
    let s = false, u = false;
    r && (s = !pn(e), u = da(e), e = br(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Ul(En(e[c])) : En(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, o);
  } else if (it(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, o));
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
const Gs = (e) => e ? fg(e) ? _r(e) : Gs(e.parent) : null, To = Et(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Gs(e.parent), $root: (e) => Gs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Km(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ac(e.update);
}), $nextTick: (e) => e.n || (e.n = Ee.bind(e.proxy)), $watch: (e) => PS.bind(e) }), gs = (e, t) => e !== vt && !e.__isScriptSetup && st(e, t), NS = { get({ _: e }, t) {
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
      if (gs(a, t)) return i[t] = 1, a[t];
      if (l !== vt && st(l, t)) return i[t] = 2, l[t];
      if (st(o, t)) return i[t] = 3, o[t];
      if (n !== vt && st(n, t)) return i[t] = 4, n[t];
      Ys && (i[t] = 0);
    }
  }
  const u = To[t];
  let c, d;
  if (u) return t === "$attrs" && Xt(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== vt && st(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, st(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return gs(l, t) ? (l[t] = n, true) : a !== vt && st(a, t) ? (a[t] = n, true) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== vt && r[0] !== "$" && st(e, r) || gs(t, r) || st(o, r) || st(a, r) || st(To, r) || st(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : st(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Wd(e) {
  return Le(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Ys = true;
function HS(e) {
  const t = Km(e), n = e.proxy, a = e.ctx;
  Ys = false, t.beforeCreate && jd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: y, activated: m, deactivated: h, beforeDestroy: b, beforeUnmount: k, destroyed: I, unmounted: V, render: S, renderTracked: p, renderTriggered: C, errorCaptured: w, serverPrefetch: T, expose: P, inheritAttrs: M, components: D, directives: E, filters: A } = t;
  if (u && zS(u, a, null), i) for (const N in i) {
    const Y = i[N];
    We(Y) && (a[N] = Y.bind(n));
  }
  if (l) {
    const N = l.call(n, n);
    it(N) && (e.data = Bt(N));
  }
  if (Ys = true, o) for (const N in o) {
    const Y = o[N], H = We(Y) ? Y.bind(n, n) : We(Y.get) ? Y.get.bind(n, n) : jn, F = !We(Y) && We(Y.set) ? Y.set.bind(n) : jn, Z = _({ get: H, set: F });
    Object.defineProperty(a, N, { enumerable: true, configurable: true, get: () => Z.value, set: (W) => Z.value = W });
  }
  if (r) for (const N in r) Ym(r[N], a, n, N);
  if (s) {
    const N = We(s) ? s.call(n) : s;
    Reflect.ownKeys(N).forEach((Y) => {
      ft(Y, N[Y]);
    });
  }
  c && jd(c, e, "c");
  function G(N, Y) {
    Le(Y) ? Y.forEach((H) => N(H.bind(n))) : Y && N(Y.bind(n));
  }
  if (G(lo, d), G(Pt, f), G(jm, v), G(kr, y), G(zm, m), G(ic, h), G(FS, w), G(RS, p), G($S, C), G(Ut, k), G(wr, V), G(BS, T), Le(P)) if (P.length) {
    const N = e.exposed || (e.exposed = {});
    P.forEach((Y) => {
      Object.defineProperty(N, Y, { get: () => n[Y], set: (H) => n[Y] = H, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  S && e.render === jn && (e.render = S), M != null && (e.inheritAttrs = M), D && (e.components = D), E && (e.directives = E), T && Hm(e);
}
function zS(e, t, n = jn) {
  Le(e) && (e = Ks(e));
  for (const a in e) {
    const l = e[a];
    let o;
    it(l) ? "default" in l ? o = Ge(l.from || a, l.default, true) : o = Ge(l.from || a) : o = Ge(l), wt(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function jd(e, t, n) {
  Bn(Le(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ym(e, t, n, a) {
  let l = a.includes(".") ? Mm(n, a) : () => n[a];
  if (pt(e)) {
    const o = t[e];
    We(o) && se(l, o);
  } else if (We(e)) se(l, e.bind(n));
  else if (it(e)) if (Le(e)) e.forEach((o) => Ym(o, t, n, a));
  else {
    const o = We(e.handler) ? e.handler.bind(n) : t[e.handler];
    We(o) && se(l, o, e);
  }
}
function Km(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Zi(s, u, i, true)), Zi(s, t, i)), it(t) && o.set(t, s), s;
}
function Zi(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Zi(e, o, n, true), l && l.forEach((i) => Zi(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = WS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const WS = { data: Ud, props: Gd, emits: Gd, methods: po, computed: po, beforeCreate: nn, created: nn, beforeMount: nn, mounted: nn, beforeUpdate: nn, updated: nn, beforeDestroy: nn, beforeUnmount: nn, destroyed: nn, unmounted: nn, activated: nn, deactivated: nn, errorCaptured: nn, serverPrefetch: nn, components: po, directives: po, watch: US, provide: Ud, inject: jS };
function Ud(e, t) {
  return t ? e ? function() {
    return Et(We(e) ? e.call(this, this) : e, We(t) ? t.call(this, this) : t);
  } : t : e;
}
function jS(e, t) {
  return po(Ks(e), Ks(t));
}
function Ks(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function nn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function po(e, t) {
  return e ? Et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gd(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Et(/* @__PURE__ */ Object.create(null), Wd(e), Wd(t ?? {})) : t;
}
function US(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Et(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = nn(e[a], t[a]);
  return n;
}
function Xm() {
  return { app: null, config: { isNativeTag: Jv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let GS = 0;
function YS(e, t) {
  return function(a, l = null) {
    We(a) || (a = Et({}, a)), l != null && !it(l) && (l = null);
    const o = Xm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: GS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: wx, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...d) {
      return i.has(c) || (c && We(c.install) ? (i.add(c), c.install(u, ...d)) : We(c) && (i.add(c), c(u, ...d))), u;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), u;
    }, component(c, d) {
      return d ? (o.components[c] = d, u) : o.components[c];
    }, directive(c, d) {
      return d ? (o.directives[c] = d, u) : o.directives[c];
    }, mount(c, d, f) {
      if (!s) {
        const v = u._ceVNode || g(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, _r(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (Bn(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = zl;
      zl = u;
      try {
        return c();
      } finally {
        zl = d;
      }
    } };
    return u;
  };
}
let zl = null;
const KS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${sn(t)}Modifiers`] || e[`${yl(t)}Modifiers`];
function XS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || vt;
  let l = n;
  const o = t.startsWith("update:"), i = o && KS(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => pt(c) ? c.trim() : c)), i.number && (l = n.map(Xu)));
  let r, s = a[r = us(t)] || a[r = us(sn(t))];
  !s && o && (s = a[r = us(yl(t))]), s && Bn(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Bn(u, e, 6, l);
  }
}
const qS = /* @__PURE__ */ new WeakMap();
function qm(e, t, n = false) {
  const a = n ? qS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!We(e)) {
    const s = (u) => {
      const c = qm(u, t, true);
      c && (r = true, Et(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (it(e) && a.set(e, null), null) : (Le(o) ? o.forEach((s) => i[s] = null) : Et(i, o), it(e) && a.set(e, i), i);
}
function Cr(e, t) {
  return !e || !mr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, yl(t)) || st(e, t));
}
function Yd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: y, inheritAttrs: m } = e, h = Xi(e);
  let b, k;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, S = V;
      b = zn(u.call(S, V, c, d, v, f, y)), k = r;
    } else {
      const V = t;
      b = zn(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), k = t.props ? r : ZS(r);
    }
  } catch (V) {
    Ao.length = 0, pr(V, e, 1), b = g(qt);
  }
  let I = b;
  if (k && m !== false) {
    const V = Object.keys(k), { shapeFlag: S } = I;
    V.length && S & 7 && (o && V.some(Yu) && (k = JS(k, o)), I = va(I, k, false, true));
  }
  return n.dirs && (I = va(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && sl(I, n.transition), b = I, Xi(h), b;
}
const ZS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || mr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, JS = (e, t) => {
  const n = {};
  for (const a in e) (!Yu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function QS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Kd(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Zm(i, a, f) && !Cr(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Kd(a, i, u) : true : !!i;
  return false;
}
function Kd(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (Zm(t, e, o) && !Cr(n, o)) return true;
  }
  return false;
}
function Zm(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && it(a) && it(l) ? !qu(a, l) : a !== l;
}
function ex({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Jm = {}, Qm = () => Object.create(Jm), eg = (e) => Object.getPrototypeOf(e) === Jm;
function tx(e, t, n, a = false) {
  const l = {}, o = Qm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tg(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : mS(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function nx(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Me(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Cr(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (st(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const y = sn(f);
          l[y] = Xs(s, r, y, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    tg(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !st(t, d) && ((c = yl(d)) === d || !st(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Xs(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !st(t, d)) && (delete o[d], u = true);
  }
  u && ia(e.attrs, "set", "");
}
function tg(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (wo(s)) continue;
    const u = t[s];
    let c;
    l && st(l, c = sn(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : Cr(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = Me(n), u = r || vt;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Xs(l, s, d, u[d], e, !st(u, d));
    }
  }
  return i;
}
function Xs(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = st(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && We(s)) {
        const { propsDefaults: u } = l;
        if (n in u) a = u[n];
        else {
          const c = ui(l);
          a = u[n] = s.call(null, t), c();
        }
      } else a = s;
      l.ce && l.ce._setProp(n, a);
    }
    i[0] && (o && !r ? a = false : i[1] && (a === "" || a === yl(n)) && (a = true));
  }
  return a;
}
const ax = /* @__PURE__ */ new WeakMap();
function ng(e, t, n = false) {
  const a = n ? ax : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!We(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = ng(d, t, true);
      Et(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return it(e) && a.set(e, Ol), Ol;
  if (Le(o)) for (let c = 0; c < o.length; c++) {
    const d = sn(o[c]);
    Xd(d) && (i[d] = vt);
  }
  else if (o) for (const c in o) {
    const d = sn(c);
    if (Xd(d)) {
      const f = o[c], v = i[d] = Le(f) || We(f) ? { type: f } : Et({}, f), y = v.type;
      let m = false, h = true;
      if (Le(y)) for (let b = 0; b < y.length; ++b) {
        const k = y[b], I = We(k) && k.name;
        if (I === "Boolean") {
          m = true;
          break;
        } else I === "String" && (h = false);
      }
      else m = We(y) && y.name === "Boolean";
      v[0] = m, v[1] = h, (m || st(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return it(e) && a.set(e, u), u;
}
function Xd(e) {
  return e[0] !== "$" && !wo(e);
}
const rc = (e) => e === "_" || e === "_ctx" || e === "$stable", sc = (e) => Le(e) ? e.map(zn) : [zn(e)], lx = (e, t, n) => {
  if (t._n) return t;
  const a = he((...l) => sc(t(...l)), n);
  return a._c = false, a;
}, ag = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (rc(l)) continue;
    const o = e[l];
    if (We(o)) t[l] = lx(l, o, a);
    else if (o != null) {
      const i = sc(o);
      t[l] = () => i;
    }
  }
}, lg = (e, t) => {
  const n = sc(t);
  e.slots.default = () => n;
}, og = (e, t, n) => {
  for (const a in t) (n || !rc(a)) && (e[a] = t[a]);
}, ox = (e, t, n) => {
  const a = e.slots = Qm();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (og(a, t, n), n && am(a, "_", l, true)) : ag(t, a);
  } else t && lg(e, t);
}, ix = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = vt;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : og(l, t, n) : (o = !t.$stable, ag(t, l)), i = t;
  } else t && (lg(e, t), i = { default: 1 });
  if (o) for (const r in l) !rc(r) && i[r] == null && delete l[r];
}, Yt = dx;
function rx(e) {
  return sx(e);
}
function sx(e, t) {
  const n = yr();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = jn, insertStaticContent: y } = e, m = ($, z, Q, ce = null, oe = null, ue = null, pe = void 0, de = null, X = !!z.dynamicChildren) => {
    if ($ === z) return;
    $ && !Qa($, z) && (ce = K($), W($, oe, ue, true), $ = null), z.patchFlag === -2 && (X = false, z.dynamicChildren = null);
    const { type: le, ref: Ve, shapeFlag: J } = z;
    switch (le) {
      case ri:
        h($, z, Q, ce);
        break;
      case qt:
        b($, z, Q, ce);
        break;
      case ys:
        $ == null && k(z, Q, ce, pe);
        break;
      case be:
        D($, z, Q, ce, oe, ue, pe, de, X);
        break;
      default:
        J & 1 ? S($, z, Q, ce, oe, ue, pe, de, X) : J & 6 ? E($, z, Q, ce, oe, ue, pe, de, X) : (J & 64 || J & 128) && le.process($, z, Q, ce, oe, ue, pe, de, X, _e);
    }
    Ve != null && oe ? Io(Ve, $ && $.ref, ue, z || $, !z) : Ve == null && $ && $.ref != null && Io($.ref, null, ue, $, true);
  }, h = ($, z, Q, ce) => {
    if ($ == null) a(z.el = r(z.children), Q, ce);
    else {
      const oe = z.el = $.el;
      z.children !== $.children && u(oe, z.children);
    }
  }, b = ($, z, Q, ce) => {
    $ == null ? a(z.el = s(z.children || ""), Q, ce) : z.el = $.el;
  }, k = ($, z, Q, ce) => {
    [$.el, $.anchor] = y($.children, z, Q, ce, $.el, $.anchor);
  }, I = ({ el: $, anchor: z }, Q, ce) => {
    let oe;
    for (; $ && $ !== z; ) oe = f($), a($, Q, ce), $ = oe;
    a(z, Q, ce);
  }, V = ({ el: $, anchor: z }) => {
    let Q;
    for (; $ && $ !== z; ) Q = f($), l($), $ = Q;
    l(z);
  }, S = ($, z, Q, ce, oe, ue, pe, de, X) => {
    if (z.type === "svg" ? pe = "svg" : z.type === "math" && (pe = "mathml"), $ == null) p(z, Q, ce, oe, ue, pe, de, X);
    else {
      const le = $.el && $.el._isVueCE ? $.el : null;
      try {
        le && le._beginPatch(), T($, z, oe, ue, pe, de, X);
      } finally {
        le && le._endPatch();
      }
    }
  }, p = ($, z, Q, ce, oe, ue, pe, de) => {
    let X, le;
    const { props: Ve, shapeFlag: J, transition: ge, dirs: ke } = $;
    if (X = $.el = i($.type, ue, Ve && Ve.is, Ve), J & 8 ? c(X, $.children) : J & 16 && w($.children, X, null, ce, oe, hs($, ue), pe, de), ke && Ga($, null, ce, "created"), C(X, $, $.scopeId, pe, ce), Ve) {
      for (const Pe in Ve) Pe !== "value" && !wo(Pe) && o(X, Pe, null, Ve[Pe], ue, ce);
      "value" in Ve && o(X, "value", null, Ve.value, ue), (le = Ve.onVnodeBeforeMount) && Ln(le, ce, $);
    }
    ke && Ga($, null, ce, "beforeMount");
    const we = ux(oe, ge);
    we && ge.beforeEnter(X), a(X, z, Q), ((le = Ve && Ve.onVnodeMounted) || we || ke) && Yt(() => {
      le && Ln(le, ce, $), we && ge.enter(X), ke && Ga($, null, ce, "mounted");
    }, oe);
  }, C = ($, z, Q, ce, oe) => {
    if (Q && v($, Q), ce) for (let ue = 0; ue < ce.length; ue++) v($, ce[ue]);
    if (oe) {
      let ue = oe.subTree;
      if (z === ue || sg(ue.type) && (ue.ssContent === z || ue.ssFallback === z)) {
        const pe = oe.vnode;
        C($, pe, pe.scopeId, pe.slotScopeIds, oe.parent);
      }
    }
  }, w = ($, z, Q, ce, oe, ue, pe, de, X = 0) => {
    for (let le = X; le < $.length; le++) {
      const Ve = $[le] = de ? la($[le]) : zn($[le]);
      m(null, Ve, z, Q, ce, oe, ue, pe, de);
    }
  }, T = ($, z, Q, ce, oe, ue, pe) => {
    const de = z.el = $.el;
    let { patchFlag: X, dynamicChildren: le, dirs: Ve } = z;
    X |= $.patchFlag & 16;
    const J = $.props || vt, ge = z.props || vt;
    let ke;
    if (Q && Ya(Q, false), (ke = ge.onVnodeBeforeUpdate) && Ln(ke, Q, z, $), Ve && Ga(z, $, Q, "beforeUpdate"), Q && Ya(Q, true), (J.innerHTML && ge.innerHTML == null || J.textContent && ge.textContent == null) && c(de, ""), le ? P($.dynamicChildren, le, de, Q, ce, hs(z, oe), ue) : pe || Y($, z, de, null, Q, ce, hs(z, oe), ue, false), X > 0) {
      if (X & 16) M(de, J, ge, Q, oe);
      else if (X & 2 && J.class !== ge.class && o(de, "class", null, ge.class, oe), X & 4 && o(de, "style", J.style, ge.style, oe), X & 8) {
        const we = z.dynamicProps;
        for (let Pe = 0; Pe < we.length; Pe++) {
          const Be = we[Pe], je = J[Be], He = ge[Be];
          (He !== je || Be === "value") && o(de, Be, je, He, oe, Q);
        }
      }
      X & 1 && $.children !== z.children && c(de, z.children);
    } else !pe && le == null && M(de, J, ge, Q, oe);
    ((ke = ge.onVnodeUpdated) || Ve) && Yt(() => {
      ke && Ln(ke, Q, z, $), Ve && Ga(z, $, Q, "updated");
    }, ce);
  }, P = ($, z, Q, ce, oe, ue, pe) => {
    for (let de = 0; de < z.length; de++) {
      const X = $[de], le = z[de], Ve = X.el && (X.type === be || !Qa(X, le) || X.shapeFlag & 198) ? d(X.el) : Q;
      m(X, le, Ve, null, ce, oe, ue, pe, true);
    }
  }, M = ($, z, Q, ce, oe) => {
    if (z !== Q) {
      if (z !== vt) for (const ue in z) !wo(ue) && !(ue in Q) && o($, ue, z[ue], null, oe, ce);
      for (const ue in Q) {
        if (wo(ue)) continue;
        const pe = Q[ue], de = z[ue];
        pe !== de && ue !== "value" && o($, ue, de, pe, oe, ce);
      }
      "value" in Q && o($, "value", z.value, Q.value, oe);
    }
  }, D = ($, z, Q, ce, oe, ue, pe, de, X) => {
    const le = z.el = $ ? $.el : r(""), Ve = z.anchor = $ ? $.anchor : r("");
    let { patchFlag: J, dynamicChildren: ge, slotScopeIds: ke } = z;
    ke && (de = de ? de.concat(ke) : ke), $ == null ? (a(le, Q, ce), a(Ve, Q, ce), w(z.children || [], Q, Ve, oe, ue, pe, de, X)) : J > 0 && J & 64 && ge && $.dynamicChildren && $.dynamicChildren.length === ge.length ? (P($.dynamicChildren, ge, Q, oe, ue, pe, de), (z.key != null || oe && z === oe.subTree) && uc($, z, true)) : Y($, z, Q, Ve, oe, ue, pe, de, X);
  }, E = ($, z, Q, ce, oe, ue, pe, de, X) => {
    z.slotScopeIds = de, $ == null ? z.shapeFlag & 512 ? oe.ctx.activate(z, Q, ce, pe, X) : A(z, Q, ce, oe, ue, pe, X) : R($, z, X);
  }, A = ($, z, Q, ce, oe, ue, pe) => {
    const de = $.component = hx($, ce, oe);
    if (Sr($) && (de.ctx.renderer = _e), yx(de, false, pe), de.asyncDep) {
      if (oe && oe.registerDep(de, G, pe), !$.el) {
        const X = de.subTree = g(qt);
        b(null, X, z, Q), $.placeholder = X.el;
      }
    } else G(de, $, z, Q, oe, ue, pe);
  }, R = ($, z, Q) => {
    const ce = z.component = $.component;
    if (QS($, z, Q)) if (ce.asyncDep && !ce.asyncResolved) {
      N(ce, z, Q);
      return;
    } else ce.next = z, ce.update();
    else z.el = $.el, ce.vnode = z;
  }, G = ($, z, Q, ce, oe, ue, pe) => {
    const de = () => {
      if ($.isMounted) {
        let { next: J, bu: ge, u: ke, parent: we, vnode: Pe } = $;
        {
          const ot = ig($);
          if (ot) {
            J && (J.el = Pe.el, N($, J, pe)), ot.asyncDep.then(() => {
              Yt(() => {
                $.isUnmounted || le();
              }, oe);
            });
            return;
          }
        }
        let Be = J, je;
        Ya($, false), J ? (J.el = Pe.el, N($, J, pe)) : J = Pe, ge && Fi(ge), (je = J.props && J.props.onVnodeBeforeUpdate) && Ln(je, we, J, Pe), Ya($, true);
        const He = Yd($), rt = $.subTree;
        $.subTree = He, m(rt, He, d(rt.el), K(rt), $, oe, ue), J.el = He.el, Be === null && ex($, He.el), ke && Yt(ke, oe), (je = J.props && J.props.onVnodeUpdated) && Yt(() => Ln(je, we, J, Pe), oe);
      } else {
        let J;
        const { el: ge, props: ke } = z, { bm: we, m: Pe, parent: Be, root: je, type: He } = $, rt = Po(z);
        Ya($, false), we && Fi(we), !rt && (J = ke && ke.onVnodeBeforeMount) && Ln(J, Be, z), Ya($, true);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(He);
          const ot = $.subTree = Yd($);
          m(null, ot, Q, ce, $, oe, ue), z.el = ot.el;
        }
        if (Pe && Yt(Pe, oe), !rt && (J = ke && ke.onVnodeMounted)) {
          const ot = z;
          Yt(() => Ln(J, Be, ot), oe);
        }
        (z.shapeFlag & 256 || Be && Po(Be.vnode) && Be.vnode.shapeFlag & 256) && $.a && Yt($.a, oe), $.isMounted = true, z = Q = ce = null;
      }
    };
    $.scope.on();
    const X = $.effect = new um(de);
    $.scope.off();
    const le = $.update = X.run.bind(X), Ve = $.job = X.runIfDirty.bind(X);
    Ve.i = $, Ve.id = $.uid, X.scheduler = () => ac(Ve), Ya($, true), le();
  }, N = ($, z, Q) => {
    z.component = $;
    const ce = $.vnode.props;
    $.vnode = z, $.next = null, nx($, z.props, ce, Q), ix($, z.children, Q), ua(), $d($), ca();
  }, Y = ($, z, Q, ce, oe, ue, pe, de, X = false) => {
    const le = $ && $.children, Ve = $ ? $.shapeFlag : 0, J = z.children, { patchFlag: ge, shapeFlag: ke } = z;
    if (ge > 0) {
      if (ge & 128) {
        F(le, J, Q, ce, oe, ue, pe, de, X);
        return;
      } else if (ge & 256) {
        H(le, J, Q, ce, oe, ue, pe, de, X);
        return;
      }
    }
    ke & 8 ? (Ve & 16 && Se(le, oe, ue), J !== le && c(Q, J)) : Ve & 16 ? ke & 16 ? F(le, J, Q, ce, oe, ue, pe, de, X) : Se(le, oe, ue, true) : (Ve & 8 && c(Q, ""), ke & 16 && w(J, Q, ce, oe, ue, pe, de, X));
  }, H = ($, z, Q, ce, oe, ue, pe, de, X) => {
    $ = $ || Ol, z = z || Ol;
    const le = $.length, Ve = z.length, J = Math.min(le, Ve);
    let ge;
    for (ge = 0; ge < J; ge++) {
      const ke = z[ge] = X ? la(z[ge]) : zn(z[ge]);
      m($[ge], ke, Q, null, oe, ue, pe, de, X);
    }
    le > Ve ? Se($, oe, ue, true, false, J) : w(z, Q, ce, oe, ue, pe, de, X, J);
  }, F = ($, z, Q, ce, oe, ue, pe, de, X) => {
    let le = 0;
    const Ve = z.length;
    let J = $.length - 1, ge = Ve - 1;
    for (; le <= J && le <= ge; ) {
      const ke = $[le], we = z[le] = X ? la(z[le]) : zn(z[le]);
      if (Qa(ke, we)) m(ke, we, Q, null, oe, ue, pe, de, X);
      else break;
      le++;
    }
    for (; le <= J && le <= ge; ) {
      const ke = $[J], we = z[ge] = X ? la(z[ge]) : zn(z[ge]);
      if (Qa(ke, we)) m(ke, we, Q, null, oe, ue, pe, de, X);
      else break;
      J--, ge--;
    }
    if (le > J) {
      if (le <= ge) {
        const ke = ge + 1, we = ke < Ve ? z[ke].el : ce;
        for (; le <= ge; ) m(null, z[le] = X ? la(z[le]) : zn(z[le]), Q, we, oe, ue, pe, de, X), le++;
      }
    } else if (le > ge) for (; le <= J; ) W($[le], oe, ue, true), le++;
    else {
      const ke = le, we = le, Pe = /* @__PURE__ */ new Map();
      for (le = we; le <= ge; le++) {
        const ze = z[le] = X ? la(z[le]) : zn(z[le]);
        ze.key != null && Pe.set(ze.key, le);
      }
      let Be, je = 0;
      const He = ge - we + 1;
      let rt = false, ot = 0;
      const ee = new Array(He);
      for (le = 0; le < He; le++) ee[le] = 0;
      for (le = ke; le <= J; le++) {
        const ze = $[le];
        if (je >= He) {
          W(ze, oe, ue, true);
          continue;
        }
        let xt;
        if (ze.key != null) xt = Pe.get(ze.key);
        else for (Be = we; Be <= ge; Be++) if (ee[Be - we] === 0 && Qa(ze, z[Be])) {
          xt = Be;
          break;
        }
        xt === void 0 ? W(ze, oe, ue, true) : (ee[xt - we] = le + 1, xt >= ot ? ot = xt : rt = true, m(ze, z[xt], Q, null, oe, ue, pe, de, X), je++);
      }
      const Ye = rt ? cx(ee) : Ol;
      for (Be = Ye.length - 1, le = He - 1; le >= 0; le--) {
        const ze = we + le, xt = z[ze], Pn = z[ze + 1], Ze = ze + 1 < Ve ? Pn.el || rg(Pn) : ce;
        ee[le] === 0 ? m(null, xt, Q, Ze, oe, ue, pe, de, X) : rt && (Be < 0 || le !== Ye[Be] ? Z(xt, Q, Ze, 2) : Be--);
      }
    }
  }, Z = ($, z, Q, ce, oe = null) => {
    const { el: ue, type: pe, transition: de, children: X, shapeFlag: le } = $;
    if (le & 6) {
      Z($.component.subTree, z, Q, ce);
      return;
    }
    if (le & 128) {
      $.suspense.move(z, Q, ce);
      return;
    }
    if (le & 64) {
      pe.move($, z, Q, _e);
      return;
    }
    if (pe === be) {
      a(ue, z, Q);
      for (let J = 0; J < X.length; J++) Z(X[J], z, Q, ce);
      a($.anchor, z, Q);
      return;
    }
    if (pe === ys) {
      I($, z, Q);
      return;
    }
    if (ce !== 2 && le & 1 && de) if (ce === 0) de.beforeEnter(ue), a(ue, z, Q), Yt(() => de.enter(ue), oe);
    else {
      const { leave: J, delayLeave: ge, afterLeave: ke } = de, we = () => {
        $.ctx.isUnmounted ? l(ue) : a(ue, z, Q);
      }, Pe = () => {
        ue._isLeaving && ue[Hn](true), J(ue, () => {
          we(), ke && ke();
        });
      };
      ge ? ge(ue, we, Pe) : Pe();
    }
    else a(ue, z, Q);
  }, W = ($, z, Q, ce = false, oe = false) => {
    const { type: ue, props: pe, ref: de, children: X, dynamicChildren: le, shapeFlag: Ve, patchFlag: J, dirs: ge, cacheIndex: ke } = $;
    if (J === -2 && (oe = false), de != null && (ua(), Io(de, null, Q, $, true), ca()), ke != null && (z.renderCache[ke] = void 0), Ve & 256) {
      z.ctx.deactivate($);
      return;
    }
    const we = Ve & 1 && ge, Pe = !Po($);
    let Be;
    if (Pe && (Be = pe && pe.onVnodeBeforeUnmount) && Ln(Be, z, $), Ve & 6) ie($.component, Q, ce);
    else {
      if (Ve & 128) {
        $.suspense.unmount(Q, ce);
        return;
      }
      we && Ga($, null, z, "beforeUnmount"), Ve & 64 ? $.type.remove($, z, Q, _e, ce) : le && !le.hasOnce && (ue !== be || J > 0 && J & 64) ? Se(le, z, Q, false, true) : (ue === be && J & 384 || !oe && Ve & 16) && Se(X, z, Q), ce && L($);
    }
    (Pe && (Be = pe && pe.onVnodeUnmounted) || we) && Yt(() => {
      Be && Ln(Be, z, $), we && Ga($, null, z, "unmounted");
    }, Q);
  }, L = ($) => {
    const { type: z, el: Q, anchor: ce, transition: oe } = $;
    if (z === be) {
      U(Q, ce);
      return;
    }
    if (z === ys) {
      V($);
      return;
    }
    const ue = () => {
      l(Q), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if ($.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: pe, delayLeave: de } = oe, X = () => pe(Q, ue);
      de ? de($.el, ue, X) : X();
    } else ue();
  }, U = ($, z) => {
    let Q;
    for (; $ !== z; ) Q = f($), l($), $ = Q;
    l(z);
  }, ie = ($, z, Q) => {
    const { bum: ce, scope: oe, job: ue, subTree: pe, um: de, m: X, a: le } = $;
    qd(X), qd(le), ce && Fi(ce), oe.stop(), ue && (ue.flags |= 8, W(pe, $, z, Q)), de && Yt(de, z), Yt(() => {
      $.isUnmounted = true;
    }, z);
  }, Se = ($, z, Q, ce = false, oe = false, ue = 0) => {
    for (let pe = ue; pe < $.length; pe++) W($[pe], z, Q, ce, oe);
  }, K = ($) => {
    if ($.shapeFlag & 6) return K($.component.subTree);
    if ($.shapeFlag & 128) return $.suspense.next();
    const z = f($.anchor || $.el), Q = z && z[Em];
    return Q ? f(Q) : z;
  };
  let fe = false;
  const Te = ($, z, Q) => {
    let ce;
    $ == null ? z._vnode && (W(z._vnode, null, null, true), ce = z._vnode.component) : m(z._vnode || null, $, z, null, null, null, Q), z._vnode = $, fe || (fe = true, $d(ce), Tm(), fe = false);
  }, _e = { p: m, um: W, m: Z, r: L, mt: A, mc: w, pc: Y, pbc: P, n: K, o: e };
  return { render: Te, hydrate: void 0, createApp: YS(Te) };
}
function hs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ya({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ux(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function uc(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Le(a) && Le(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = la(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && uc(i, r)), r.type === ri && (r.patchFlag === -1 && (r = l[o] = la(r)), r.el = i.el), r.type === qt && !r.el && (r.el = i.el);
  }
}
function cx(e) {
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
function ig(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ig(t);
}
function qd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function rg(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? rg(t.subTree) : null;
}
const sg = (e) => e.__isSuspense;
function dx(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : _S(e);
}
const be = Symbol.for("v-fgt"), ri = Symbol.for("v-txt"), qt = Symbol.for("v-cmt"), ys = Symbol.for("v-stc"), Ao = [];
let gn = null;
function Oe(e = false) {
  Ao.push(gn = e ? null : []);
}
function fx() {
  Ao.pop(), gn = Ao[Ao.length - 1] || null;
}
let Lo = 1;
function Ji(e, t = false) {
  Lo += e, e < 0 && gn && t && (gn.hasOnce = true);
}
function ug(e) {
  return e.dynamicChildren = Lo > 0 ? gn || Ol : null, fx(), Lo > 0 && gn && gn.push(e), e;
}
function et(e, t, n, a, l, o) {
  return ug(x(e, t, n, a, l, o, true));
}
function Wt(e, t, n, a, l) {
  return ug(g(e, t, n, a, l, true));
}
function Oo(e) {
  return e ? e.__v_isVNode === true : false;
}
function Qa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cg = ({ key: e }) => e ?? null, Oi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? pt(e) || wt(e) || We(e) ? { i: mn, r: e, k: t, f: !!n } : e : null);
function x(e, t = null, n = null, a = 0, l = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && cg(t), ref: t && Oi(t), scopeId: Dm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: mn };
  return r ? (cc(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= pt(n) ? 8 : 16), Lo > 0 && !i && gn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && gn.push(s), s;
}
const g = vx;
function vx(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === LS) && (e = qt), Oo(e)) {
    const r = va(e, t, true);
    return n && cc(r, n), Lo > 0 && !o && gn && (r.shapeFlag & 6 ? gn[gn.indexOf(e)] = r : gn.push(r)), r.patchFlag = -2, r;
  }
  if (kx(e) && (e = e.__vccOpts), t) {
    t = dg(t);
    let { class: r, style: s } = t;
    r && !pt(r) && (t.class = ne(r)), it(s) && (oi(s) && !Le(s) && (s = Et({}, s)), t.style = me(s));
  }
  const i = pt(e) ? 1 : sg(e) ? 128 : Bm(e) ? 64 : it(e) ? 4 : We(e) ? 2 : 0;
  return x(e, t, n, a, l, i, o, true);
}
function dg(e) {
  return e ? oi(e) || eg(e) ? Et({}, e) : e : null;
}
function va(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? q(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && cg(u), ref: t && t.ref ? n && o ? Le(o) ? o.concat(Oi(t)) : [o, Oi(t)] : Oi(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && va(e.ssContent), ssFallback: e.ssFallback && va(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && sl(c, s.clone(c)), c;
}
function Fe(e = " ", t = 0) {
  return g(ri, null, e, t);
}
function Zt(e = "", t = false) {
  return t ? (Oe(), Wt(qt, null, e)) : g(qt, null, e);
}
function zn(e) {
  return e == null || typeof e == "boolean" ? g(qt) : Le(e) ? g(be, null, e.slice()) : Oo(e) ? la(e) : g(ri, null, String(e));
}
function la(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : va(e);
}
function cc(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Le(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), cc(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !eg(t) ? t._ctx = mn : l === 3 && mn && (mn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else We(t) ? (t = { default: t, _ctx: mn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Fe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function q(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ne([t.class, a.class]));
    else if (l === "style") t.style = me([t.style, a.style]);
    else if (mr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(Le(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Ln(e, t, n, a = null) {
  Bn(e, t, 7, [n, a]);
}
const mx = Xm();
let gx = 0;
function hx(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || mx, o = { uid: gx++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new rm(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: ng(a, l), emitsOptions: qm(a, l), emit: null, emitted: null, propsDefaults: vt, inheritAttrs: a.inheritAttrs, ctx: vt, data: vt, props: vt, attrs: vt, slots: vt, refs: vt, setupState: vt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = XS.bind(null, o), e.ce && e.ce(o), o;
}
let Jt = null;
const si = () => Jt || mn;
let Qi, qs;
{
  const e = yr(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Qi = t("__VUE_INSTANCE_SETTERS__", (n) => Jt = n), qs = t("__VUE_SSR_SETTERS__", (n) => No = n);
}
const ui = (e) => {
  const t = Jt;
  return Qi(e), e.scope.on(), () => {
    e.scope.off(), Qi(t);
  };
}, Zd = () => {
  Jt && Jt.scope.off(), Qi(null);
};
function fg(e) {
  return e.vnode.shapeFlag & 4;
}
let No = false;
function yx(e, t = false, n = false) {
  t && qs(t);
  const { props: a, children: l } = e.vnode, o = fg(e);
  tx(e, a, o, t), ox(e, l, n || t);
  const i = o ? bx(e, t) : void 0;
  return t && qs(false), i;
}
function bx(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, NS);
  const { setup: a } = n;
  if (a) {
    ua();
    const l = e.setupContext = a.length > 1 ? Sx(e) : null, o = ui(e), i = ii(a, e, 0, [e.props, l]), r = em(i);
    if (ca(), o(), (r || e.sp) && !Po(e) && Hm(e), r) {
      if (i.then(Zd, Zd), t) return i.then((s) => {
        Jd(e, s);
      }).catch((s) => {
        pr(s, e, 0);
      });
      e.asyncDep = i;
    } else Jd(e, i);
  } else vg(e);
}
function Jd(e, t, n) {
  We(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : it(t) && (e.setupState = _m(t)), vg(e);
}
function vg(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || jn);
  {
    const l = ui(e);
    ua();
    try {
      HS(e);
    } finally {
      ca(), l();
    }
  }
}
const px = { get(e, t) {
  return Xt(e, "get", ""), e[t];
} };
function Sx(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, px), slots: e.slots, emit: e.emit, expose: t };
}
function _r(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_m(wm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in To) return To[n](e);
  }, has(t, n) {
    return n in t || n in To;
  } })) : e.proxy;
}
function xx(e, t = true) {
  return We(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kx(e) {
  return We(e) && "__vccOpts" in e;
}
const _ = (e, t) => SS(e, t, No);
function ya(e, t, n) {
  try {
    Ji(-1);
    const a = arguments.length;
    return a === 2 ? it(t) && !Le(t) ? Oo(t) ? g(e, null, [t]) : g(e, t) : g(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Oo(n) && (n = [n]), g(e, t, n));
  } finally {
    Ji(1);
  }
}
const wx = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Zs;
const Qd = typeof window < "u" && window.trustedTypes;
if (Qd) try {
  Zs = Qd.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const mg = Zs ? (e) => Zs.createHTML(e) : (e) => e, Cx = "http://www.w3.org/2000/svg", _x = "http://www.w3.org/1998/Math/MathML", aa = typeof document < "u" ? document : null, ef = aa && aa.createElement("template"), Vx = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? aa.createElementNS(Cx, e) : t === "mathml" ? aa.createElementNS(_x, e) : n ? aa.createElement(e, { is: n }) : aa.createElement(e);
  return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
}, createText: (e) => aa.createTextNode(e), createComment: (e) => aa.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => aa.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, a, l, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (l && (l === o || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === o || !(l = l.nextSibling)); ) ;
  else {
    ef.innerHTML = mg(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = ef.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, _a = "transition", go = "animation", Gl = Symbol("_vtc"), gg = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, hg = Et({}, Fm, gg), Ix = (e) => (e.displayName = "Transition", e.props = hg, e), $a = Ix((e, { slots: t }) => ya(MS, yg(e), t)), Ka = (e, t = []) => {
  Le(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, tf = (e) => e ? Le(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function yg(e) {
  const t = {};
  for (const D in e) D in gg || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, y = Px(l), m = y && y[0], h = y && y[1], { onBeforeEnter: b, onEnter: k, onEnterCancelled: I, onLeave: V, onLeaveCancelled: S, onBeforeAppear: p = b, onAppear: C = k, onAppearCancelled: w = I } = t, T = (D, E, A, R) => {
    D._enterCancelled = R, Va(D, E ? c : r), Va(D, E ? u : i), A && A();
  }, P = (D, E) => {
    D._isLeaving = false, Va(D, d), Va(D, v), Va(D, f), E && E();
  }, M = (D) => (E, A) => {
    const R = D ? C : k, G = () => T(E, D, A);
    Ka(R, [E, G]), nf(() => {
      Va(E, D ? s : o), On(E, D ? c : r), tf(R) || af(E, a, m, G);
    });
  };
  return Et(t, { onBeforeEnter(D) {
    Ka(b, [D]), On(D, o), On(D, i);
  }, onBeforeAppear(D) {
    Ka(p, [D]), On(D, s), On(D, u);
  }, onEnter: M(false), onAppear: M(true), onLeave(D, E) {
    D._isLeaving = true;
    const A = () => P(D, E);
    On(D, d), D._enterCancelled ? (On(D, f), Js(D)) : (Js(D), On(D, f)), nf(() => {
      D._isLeaving && (Va(D, d), On(D, v), tf(V) || af(D, a, h, A));
    }), Ka(V, [D, A]);
  }, onEnterCancelled(D) {
    T(D, false, void 0, true), Ka(I, [D]);
  }, onAppearCancelled(D) {
    T(D, true, void 0, true), Ka(w, [D]);
  }, onLeaveCancelled(D) {
    P(D), Ka(S, [D]);
  } });
}
function Px(e) {
  if (e == null) return null;
  if (it(e)) return [bs(e.enter), bs(e.leave)];
  {
    const t = bs(e);
    return [t, t];
  }
}
function bs(e) {
  return Np(e);
}
function On(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Gl] || (e[Gl] = /* @__PURE__ */ new Set())).add(t);
}
function Va(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Gl];
  n && (n.delete(t), n.size || (e[Gl] = void 0));
}
function nf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tx = 0;
function af(e, t, n, a) {
  const l = e._endId = ++Tx, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = bg(e, t);
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
function bg(e, t) {
  const n = window.getComputedStyle(e), a = (y) => (n[y] || "").split(", "), l = a(`${_a}Delay`), o = a(`${_a}Duration`), i = lf(l, o), r = a(`${go}Delay`), s = a(`${go}Duration`), u = lf(r, s);
  let c = null, d = 0, f = 0;
  t === _a ? i > 0 && (c = _a, d = i, f = o.length) : t === go ? u > 0 && (c = go, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? _a : go : null, f = c ? c === _a ? o.length : s.length : 0);
  const v = c === _a && /\b(?:transform|all)(?:,|$)/.test(a(`${_a}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function lf(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => of(n) + of(e[a])));
}
function of(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Js(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ax(e, t, n) {
  const a = e[Gl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const er = Symbol("_vod"), pg = Symbol("_vsh"), Fn = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[er] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ho(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: a }) {
  !t != !n && (a ? t ? (a.beforeEnter(e), ho(e, true), a.enter(e)) : a.leave(e, () => {
    ho(e, false);
  }) : ho(e, t));
}, beforeUnmount(e, { value: t }) {
  ho(e, t);
} };
function ho(e, t) {
  e.style.display = t ? e[er] : "none", e[pg] = !t;
}
const Dx = Symbol(""), Mx = /(?:^|;)\s*display\s*:/;
function Ex(e, t, n) {
  const a = e.style, l = pt(n);
  let o = false;
  if (n && !l) {
    if (t) if (pt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Ni(a, r, "");
    }
    else for (const i in t) n[i] == null && Ni(a, i, "");
    for (const i in n) i === "display" && (o = true), Ni(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[Dx];
      i && (n += ";" + i), a.cssText = n, o = Mx.test(n);
    }
  } else t && e.removeAttribute("style");
  er in e && (e[er] = o ? a.display : "", e[pg] && (a.display = "none"));
}
const rf = /\s*!important$/;
function Ni(e, t, n) {
  if (Le(n)) n.forEach((a) => Ni(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = Bx(e, t);
    rf.test(n) ? e.setProperty(yl(a), n.replace(rf, ""), "important") : e[a] = n;
  }
}
const sf = ["Webkit", "Moz", "ms"], ps = {};
function Bx(e, t) {
  const n = ps[t];
  if (n) return n;
  let a = sn(t);
  if (a !== "filter" && a in e) return ps[t] = a;
  a = qn(a);
  for (let l = 0; l < sf.length; l++) {
    const o = sf[l] + a;
    if (o in e) return ps[t] = o;
  }
  return t;
}
const uf = "http://www.w3.org/1999/xlink";
function cf(e, t, n, a, l, o = Yp(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(uf, t.slice(6, t.length)) : e.setAttributeNS(uf, t, n) : n == null || o && !lm(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Un(n) ? String(n) : n);
}
function df(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? mg(n) : n);
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
    r === "boolean" ? n = lm(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(l || t);
}
function Bl(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function $x(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const ff = Symbol("_vei");
function Rx(e, t, n, a, l = null) {
  const o = e[ff] || (e[ff] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = Fx(t);
    if (a) {
      const u = o[t] = Nx(a, l);
      Bl(e, r, u, s);
    } else i && ($x(e, r, i, s), o[t] = void 0);
  }
}
const vf = /(?:Once|Passive|Capture)$/;
function Fx(e) {
  let t;
  if (vf.test(e)) {
    t = {};
    let a;
    for (; a = e.match(vf); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : yl(e.slice(2)), t];
}
let Ss = 0;
const Lx = Promise.resolve(), Ox = () => Ss || (Lx.then(() => Ss = 0), Ss = Date.now());
function Nx(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    Bn(Hx(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = Ox(), n;
}
function Hx(e, t) {
  if (Le(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zx = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? Ax(e, a, i) : t === "style" ? Ex(e, n, a) : mr(t) ? Yu(t) || Rx(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Wx(e, t, a, i)) ? (df(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cf(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pt(a)) ? df(e, sn(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), cf(e, t, a, i));
};
function Wx(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && We(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return mf(t) && pt(n) ? false : t in e;
}
const Sg = /* @__PURE__ */ new WeakMap(), xg = /* @__PURE__ */ new WeakMap(), tr = Symbol("_moveCb"), gf = Symbol("_enterCb"), jx = (e) => (delete e.props.mode, e), Ux = jx({ name: "TransitionGroup", props: Et({}, hg, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = si(), a = Rm();
  let l, o;
  return kr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!Xx(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(Gx), l.forEach(Yx);
    const r = l.filter(Kx);
    Js(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      On(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[tr] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[tr] = null, Va(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Me(e), r = yg(i);
    let s = i.tag || be;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), sl(c, Fo(c, r, a, n)), Sg.set(c, kg(c.el)));
    }
    o = t.default ? oc(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && sl(c, Fo(c, r, a, n));
    }
    return g(s, null, o);
  };
} }), dc = Ux;
function Gx(e) {
  const t = e.el;
  t[tr] && t[tr](), t[gf] && t[gf]();
}
function Yx(e) {
  xg.set(e, kg(e.el));
}
function Kx(e) {
  const t = Sg.get(e), n = xg.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function kg(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Xx(e, t, n) {
  const a = e.cloneNode(), l = e[Gl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = bg(a);
  return o.removeChild(a), i;
}
const hf = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Le(t) ? (n) => Fi(t, n) : t;
};
function qx(e) {
  e.target.composing = true;
}
function yf(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const xs = Symbol("_assign");
function bf(e, t, n) {
  return t && (e = e.trim()), n && (e = Xu(e)), e;
}
const Vr = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[xs] = hf(l);
  const o = a || l.props && l.props.type === "number";
  Bl(e, t ? "change" : "input", (i) => {
    i.target.composing || e[xs](bf(e.value, n, o));
  }), (n || o) && Bl(e, "change", () => {
    e.value = bf(e.value, n, o);
  }), t || (Bl(e, "compositionstart", qx), Bl(e, "compositionend", yf), Bl(e, "change", yf));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[xs] = hf(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Xu(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, Zx = ["ctrl", "shift", "alt", "meta"], Jx = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Zx.some((n) => e[`${n}Key`] && !t.includes(n)) }, Ii = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = Jx[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, Qx = Et({ patchProp: zx }, Vx);
let pf;
function wg() {
  return pf || (pf = rx(Qx));
}
const Cg = ((...e) => {
  wg().render(...e);
}), ek = ((...e) => {
  const t = wg().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = nk(a);
    if (!l) return;
    const o = t._component;
    !We(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, tk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function tk(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function nk(e) {
  return pt(e) ? document.querySelector(e) : e;
}
const Sf = () => {
};
function _g(e) {
  const t = `[${e}]`;
  return { debug: Sf, info: Sf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const xf = 5;
function kf(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * xf)));
  return e / (l * xf);
}
function Vg(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function ak(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
function lk(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function ok(e, t) {
  return e * t.gridPitch / t.dpr;
}
const Ig = 1, ik = `gol.gridBlankZones.v${Ig}`, rk = 128;
function fc(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const sk = /* @__PURE__ */ new Set(["minor", "major", "both"]), uk = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function ks(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Rl(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function ck() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function dk(e) {
  return typeof e == "string" && sk.has(e) ? e : "both";
}
function fk(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && uk.has(t.style) ? t.style : "none", a = ks(Rl(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = ks(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = ks(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, Rl(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function vk(e) {
  return typeof e == "boolean" ? e : true;
}
function wf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Pg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Rl(n.x1), l = Rl(n.y1), o = Rl(n.x2), i = Rl(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : ck(), x1: r, y1: u, x2: s, y2: c, mode: dk(n.mode), edge: fk(n.edge), enabled: vk(n.enabled), createdAt: wf(n.createdAt, t), updatedAt: wf(n.updatedAt, t) };
}
function Tg(e, t = Date.now()) {
  return fc(e, Pg, rk, t);
}
function ws() {
  return typeof localStorage < "u";
}
function Ir(e) {
  return { load() {
    if (!ws()) return [];
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
    if (!ws()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    ws() && localStorage.removeItem(e.key);
  } };
}
const vc = Ir({ key: ik, version: Ig, normalize: Tg, itemsKey: "zones" }), mk = vc.load, gk = vc.save, hk = vc.clear;
function Pr(e) {
  const t = O(e.storage.load());
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
function yk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Pr({ storage: { load: mk, save: gk, clear: hk }, normalize: Tg, normalizeOne: Pg, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const bk = 32, Ag = 1, pk = `gol.decals.v${Ag}`, an = [0.49, 0.3, 1, 0.6], Sk = /* @__PURE__ */ new Set(["solid", "checkerboard", "stripes", "dots", "bitmap"]), xk = /* @__PURE__ */ new Set(["alpha", "multiply", "screen"]);
function Ta(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function fn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function Pi(e) {
  const t = fn(e);
  return t === null ? null : Math.trunc(t);
}
function kk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function wk(e) {
  return typeof e == "string" && Sk.has(e) ? e : "solid";
}
function Ck(e) {
  return typeof e == "string" && xk.has(e) ? e : "alpha";
}
function _k(e) {
  const t = e && typeof e == "object" ? e : {}, n = wk(t.kind), a = { kind: n };
  return n === "solid" ? (a.coverage = Ta(fn(t.coverage) ?? 1, 0, 1), a.solidR = Ta(fn(t.solidR) ?? an[0], 0, 1), a.solidG = Ta(fn(t.solidG) ?? an[1], 0, 1), a.solidB = Ta(fn(t.solidB) ?? an[2], 0, 1)) : n === "checkerboard" ? a.cellSize = Math.max(1, fn(t.cellSize) ?? 2) : n === "stripes" ? a.pitchCells = Math.max(2, fn(t.pitchCells) ?? 4) : n === "dots" && (a.dotRadius = Math.max(0.1, fn(t.dotRadius) ?? 0.4), a.dotSpacing = Math.max(2, fn(t.dotSpacing) ?? 3)), a;
}
function Vk(e) {
  return !Array.isArray(e) || e.length < 4 ? [...an] : [Ta(fn(e[0]) ?? an[0], 0, 1), Ta(fn(e[1]) ?? an[1], 0, 1), Ta(fn(e[2]) ?? an[2], 0, 1), Ta(fn(e[3]) ?? an[3], 0, 1)];
}
function Ik(e) {
  return typeof e == "boolean" ? e : true;
}
function Cf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Dg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Pi(n.x1), l = Pi(n.y1), o = Pi(n.x2), i = Pi(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : kk(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), pattern: _k(n.pattern), tint: Vk(n.tint), blendMode: Ck(n.blendMode), suppressCells: typeof n.suppressCells == "boolean" ? n.suppressCells : false, enabled: Ik(n.enabled), createdAt: Cf(n.createdAt, t), updatedAt: Cf(n.updatedAt, t) };
}
function Mg(e, t = Date.now()) {
  return fc(e, Dg, bk, t);
}
const mc = Ir({ key: pk, version: Ag, normalize: Mg, itemsKey: "decals" }), Pk = mc.load, Tk = mc.save, Ak = mc.clear;
function Dk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Pr({ storage: { load: Pk, save: Tk, clear: Ak }, normalize: Mg, normalizeOne: Dg, onSet: e.onSetDecals, onAdd: e.onAddDecal, onUpdate: e.onUpdateDecal, onRemove: e.onRemoveDecal, onClear: e.onClearDecals });
  return { decals: t, setDecals: n, addDecal: a, updateDecal: l, removeDecal: o, clearDecals: i, syncFromWorker: r };
}
const Yl = 4, Hi = 8, Cs = 2, Mk = "gol.hires";
function Ti(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Ek() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function _f(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Tr(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Ti(n.x1), l = Ti(n.y1), o = Ti(n.x2), i = Ti(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Ek(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), multiplier: Yl, enabled: typeof n.enabled == "boolean" ? n.enabled : true, showGrid: typeof n.showGrid == "boolean" ? n.showGrid : true, showBaseGrid: typeof n.showBaseGrid == "boolean" ? n.showBaseGrid : true, showBorder: typeof n.showBorder == "boolean" ? n.showBorder : true, tickMultiplier: typeof n.tickMultiplier == "number" && Number.isFinite(n.tickMultiplier) && n.tickMultiplier >= 1 ? Math.trunc(n.tickMultiplier) : 1, createdAt: _f(n.createdAt, t), updatedAt: _f(n.updatedAt, t) };
}
function Bk(e, t) {
  return e.x1 <= t.x2 && e.x2 >= t.x1 && e.y1 <= t.y2 && e.y2 >= t.y1;
}
function gc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= Hi) break;
    const l = Tr(a, t);
    !l || n.some((i) => Bk(i, l)) || n.push(l);
  }
  return n;
}
const Vf = "gol.hires.v1", hc = Ir({ key: Mk, version: Cs, normalize: gc, itemsKey: "regions", migrate(e) {
  if (e.region && !e.regions) {
    const t = Tr(e.region);
    return { ...e, regions: t ? [t] : [], version: Cs };
  }
  return { ...e, version: Cs };
} }), $k = hc.load;
function Rk() {
  const e = $k();
  if (e.length > 0) return e;
  if (typeof localStorage > "u") return [];
  try {
    const t = localStorage.getItem(Vf);
    if (!t) return [];
    localStorage.removeItem(Vf);
    const n = JSON.parse(t);
    if (n.region) {
      const a = Tr(n.region);
      return a ? [a] : [];
    }
    return gc(n.regions);
  } catch {
    return [];
  }
}
const Fk = hc.save, Lk = hc.clear;
function Ok(e = {}) {
  const { items: t, addItem: n, updateItem: a, removeItem: l, clearItems: o, syncFromWorker: i } = Pr({ storage: { load: Rk, save: Fk, clear: Lk }, normalize: gc, normalizeOne: Tr, onSet: e.onSetRegions, onAdd: e.onAddRegion, onUpdate: e.onUpdateRegion, onRemove: e.onRemoveRegion, onClear: e.onClearRegions });
  return { regions: t, addRegion: n, updateRegion: a, removeRegion: l, clearRegions: o, syncFromWorker: i };
}
const Kl = "#1a1a2e", zi = 8, Eg = 1, Nk = `gol.text.v${Eg}`, Ho = "bold 24px monospace", Hk = /* @__PURE__ */ new Set(["sdf", "cells", "both"]), zk = /^#[0-9a-fA-F]{6}$/;
function Wk(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function Ai(e) {
  const t = Wk(e);
  return t === null ? null : Math.trunc(t);
}
function jk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function If(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Bg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e;
  if (typeof n.text != "string" || n.text.length === 0) return null;
  const a = Ai(n.cellX), l = Ai(n.cellY);
  if (a === null || l === null) return null;
  const o = Math.max(1, Ai(n.cellsWide) ?? 100), i = Ai(n.cellsHigh), r = i !== null && i >= 1 ? i : void 0, s = typeof n.renderMode == "string" && Hk.has(n.renderMode) ? n.renderMode : "cells";
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : jk(), text: n.text, font: typeof n.font == "string" && n.font.length > 0 ? n.font : Ho, cellX: a, cellY: l, cellsWide: o, ...r !== void 0 ? { cellsHigh: r } : {}, renderMode: s, color: typeof n.color == "string" && zk.test(n.color) ? n.color : Kl, enabled: typeof n.enabled == "boolean" ? n.enabled : true, createdAt: If(n.createdAt, t), updatedAt: If(n.updatedAt, t) };
}
function $g(e, t = Date.now()) {
  return fc(e, Bg, zi, t);
}
const yc = Ir({ key: Nk, version: Eg, normalize: $g, itemsKey: "blocks" }), Uk = yc.load, Gk = yc.save, Yk = yc.clear;
function Kk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Pr({ storage: { load: Uk, save: Gk, clear: Yk }, normalize: $g, normalizeOne: Bg, onSet: e.onSetBlocks, onAdd: e.onAddBlock, onUpdate: e.onUpdateBlock, onRemove: e.onRemoveBlock, onClear: e.onClearBlocks });
  return { blocks: t, setBlocks: n, addBlock: a, updateBlock: l, removeBlock: o, clearBlocks: i, syncFromWorker: r };
}
const Pf = _g("WorkerBridge");
function Xk() {
  let e = null;
  const t = O(null), n = /* @__PURE__ */ new Map();
  function a(s, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(s, u) : e.postMessage(s);
    } catch (c) {
      Pf.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
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
    const c = new Worker(new URL("/assets/backgroundRenderer-CNPACESS.js", import.meta.url), { type: "module" });
    c.onmessage = (d) => o(d.data), c.onerror = (d) => {
      Pf.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = c, a({ type: "init", canvas: s, cellPx: u }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const _s = 5, qk = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), Zk = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function Jk(e, t) {
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
    const c = Vg(s.clientX, s.clientY, u);
    return { cx: a(c.cx, u), cy: c.cy };
  }
  function o(s, u) {
    return { x1: Math.min(s.cx, u.cx), y1: Math.min(s.cy, u.cy), x2: Math.max(s.cx, u.cx), y2: Math.max(s.cy, u.cy) };
  }
  function i(s, u) {
    const c = (f) => Math.floor(f / _s) * _s, d = (f) => c(f) + (_s - 1);
    return { x1: Math.max(0, Math.min(u.screenCols - 1, c(s.x1))), y1: c(s.y1), x2: Math.max(0, Math.min(u.screenCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(Zk)) return true;
    let u = s;
    for (; u; ) {
      if (qk.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: lk, cellSpanToCssPx: ok, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToViewport: a };
}
function Qk() {
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
function e0(e) {
  const t = O(false), n = O(""), a = O({}), l = O(null);
  let o = null, i = 0, r = 0;
  function s(v) {
    if (!o || !i) {
      a.value = {};
      return;
    }
    const y = v ?? e.makeSnapshot();
    if (!y) return;
    const m = e.cellToScreen(o.cx, o.cy, y), h = e.cellSpanToCssPx(i, y);
    a.value = { position: "fixed", left: `${m.cssX}px`, top: `${m.cssY}px`, width: `${h}px`, "min-height": "2em", "z-index": "25" };
  }
  function u(v, y, m, h) {
    o = v, i = y, r = m, n.value = "", t.value = true, s(h), Ee(() => {
      var _a3;
      return (_a3 = l.value) == null ? void 0 : _a3.focus();
    });
  }
  function c() {
    t.value = false, n.value = "", o = null, i = 0, r = 0;
  }
  function d(v, y) {
    v.key === "Enter" && !v.shiftKey ? (v.preventDefault(), y()) : v.key === "Escape" && (v.preventDefault(), c());
  }
  function f(v) {
    const y = l.value;
    return v === y || ((y == null ? void 0 : y.contains(v)) ?? false);
  }
  return { state: { visible: t, value: n, style: a, inputRef: l }, get anchor() {
    return o;
  }, get cellsWide() {
    return i;
  }, get cellsHigh() {
    return r;
  }, show: u, updateStyle: s, cleanup: c, onKeydown: d, isInsideInput: f };
}
function t0(e) {
  const t = /* @__PURE__ */ new Map(), n = O(null), a = O(null), l = O(null);
  let o = null, i = null;
  function r(h, b) {
    t.set(h, b);
  }
  function s() {
    for (const h of t.values()) if (h.isEnabled()) return true;
    return false;
  }
  function u() {
    const h = a.value, b = e.makeSnapshot();
    if (!h || !b) {
      l.value = null;
      return;
    }
    const k = e.cellToScreen(h.x1, h.y1, b), I = e.cellSpanToCssPx(h.x2 - h.x1 + 1, b), V = e.cellSpanToCssPx(h.y2 - h.y1 + 1, b);
    l.value = { left: `${k.cssX}px`, top: `${k.cssY}px`, width: `${I}px`, height: `${V}px` };
  }
  function c() {
    o = null, n.value = null, i = null, a.value = null, l.value = null;
  }
  function d(h) {
    n.value === h && c();
  }
  function f(h) {
    if (h.button !== 0 || e.isInteractiveTarget(h.target)) return;
    let b = null;
    for (const V of t.entries()) V[1].isEnabled() && (!b || V[1].priority > b[1].priority) && (b = V);
    if (!b) return;
    const k = e.pointerToCell(h);
    if (!k) return;
    n.value = b[0], o = k;
    const I = { x1: k.cx, y1: k.cy, x2: k.cx, y2: k.cy };
    b[1].dragMode === "paint" && (i = { ...I }), a.value = I, u(), h.target instanceof Element && h.target.setPointerCapture(h.pointerId), h.preventDefault();
  }
  function v(h) {
    var _a3;
    if (!n.value || !o) return;
    const b = t.get(n.value);
    if (!b) return;
    const k = e.pointerToCell(h), I = e.makeSnapshot();
    if (!(!k || !I)) {
      if (b.dragMode === "paint" && i) i.x1 = Math.min(i.x1, k.cx), i.y1 = Math.min(i.y1, k.cy), i.x2 = Math.max(i.x2, k.cx), i.y2 = Math.max(i.y2, k.cy), a.value = { ...i };
      else {
        const V = e.normalizeRect(o, k);
        a.value = ((_a3 = b.snapMajor) == null ? void 0 : _a3.call(b)) ? e.snapRectToMajor(V, I) : V;
      }
      u();
    }
  }
  function y(h) {
    var _a3;
    if (!n.value || !o || h.button !== 0) return;
    h.target instanceof Element && h.target.hasPointerCapture(h.pointerId) && h.target.releasePointerCapture(h.pointerId);
    const b = t.get(n.value);
    if (!b) {
      c();
      return;
    }
    const k = e.pointerToCell(h), I = e.makeSnapshot();
    let V;
    if (b.dragMode === "paint" && i) k && (i.x1 = Math.min(i.x1, k.cx), i.y1 = Math.min(i.y1, k.cy), i.x2 = Math.max(i.x2, k.cx), i.y2 = Math.max(i.y2, k.cy)), V = i;
    else if (k) {
      const p = e.normalizeRect(o, k);
      V = ((_a3 = b.snapMajor) == null ? void 0 : _a3.call(b)) && I ? e.snapRectToMajor(p, I) : p;
    } else {
      c();
      return;
    }
    b.onCommit(V, I) === false || c();
  }
  function m() {
    return document.addEventListener("pointerdown", f), document.addEventListener("pointermove", v), document.addEventListener("pointerup", y), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", y);
    };
  }
  return { register: r, activeTool: n, previewRect: a, previewStyle: l, cancelActiveDrag: d, anyToolEnabled: s, attachListeners: m };
}
const n0 = { key: 0, class: "zone-preview-text" }, a0 = { class: "zone-list" }, l0 = { class: "zone-text" }, o0 = { class: "zone-coords" }, i0 = { class: "zone-actions" }, r0 = { key: 0, class: "zone-empty" }, s0 = un({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = O(false), i = O(0), r = O(0), s = O(4), u = O(4), c = O("both"), d = O("none"), f = O(1), v = O(1), y = O(0.6), m = O(2), h = O(false), b = _(() => n.zones.filter((M) => !!M && typeof M.id == "string" && M.id.length > 0 && typeof M.x1 == "number" && typeof M.y1 == "number" && typeof M.x2 == "number" && typeof M.y2 == "number" && typeof M.mode == "string" && !!M.edge && typeof M.edge.style == "string"));
  function k(M) {
    return M.id.slice(0, 6);
  }
  function I() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, v.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, y.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(m.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? h.value : void 0 };
  }
  const V = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], S = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function p() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const M = Date.now();
    a("add-zone", { id: p(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), mode: c.value, edge: I(), enabled: true, createdAt: M, updatedAt: M });
  }
  function w(M) {
    a("update-zone", { ...M, enabled: !M.enabled, updatedAt: Date.now() });
  }
  function T() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: c.value, edge: I() });
  }
  return se(l, T, { immediate: true }), se(o, T, { immediate: true }), se([c, d, f, v, y, m, h], P, { immediate: true }), (M, D) => {
    const E = Ae("v-switch"), A = Ae("v-text-field"), R = Ae("v-col"), G = Ae("v-row"), N = Ae("v-select"), Y = Ae("v-btn"), H = Ae("v-divider");
    return Oe(), et(be, null, [g(E, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = (F) => l.value = F), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), g(E, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (F) => o.value = F), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Oe(), et("div", n0, " Preview: (" + De(n.previewRect.x1) + "," + De(n.previewRect.y1) + ") \u2192 (" + De(n.previewRect.x2) + "," + De(n.previewRect.y2) + ") ", 1)) : Zt("", true), g(G, { dense: "" }, { default: he(() => [g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (F) => i.value = F), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (F) => r.value = F), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (F) => s.value = F), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (F) => u.value = F), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(G, { dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "6" }, { default: he(() => [g(N, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (F) => c.value = F), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "6" }, { default: he(() => [g(N, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (F) => d.value = F), items: S, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(G, { dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "6" }, { default: he(() => [g(A, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (F) => f.value = F), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "6" }, { default: he(() => [g(A, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = (F) => v.value = F), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Oe(), Wt(G, { key: 1, dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "12" }, { default: he(() => [g(A, { modelValue: y.value, "onUpdate:modelValue": D[10] || (D[10] = (F) => y.value = F), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), d.value === "noted" ? (Oe(), Wt(G, { key: 2, dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "12" }, { default: he(() => [g(A, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = (F) => m.value = F), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), d.value === "bold-major" || d.value === "noted" ? (Oe(), Wt(G, { key: 3, dense: "", class: "mt-1" }, { default: he(() => [g(R, { cols: "12" }, { default: he(() => [g(E, { modelValue: h.value, "onUpdate:modelValue": D[12] || (D[12] = (F) => h.value = F), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), g(Y, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: he(() => [...D[14] || (D[14] = [Fe(" Add Zone ", -1)])]), _: 1 }), g(H, { class: "my-3" }), x("div", a0, [(Oe(true), et(be, null, fa(b.value, (F) => (Oe(), et("div", { key: F.id, class: "zone-row" }, [x("div", l0, [x("div", null, "#" + De(k(F)) + " \xB7 " + De(F.mode) + " \xB7 " + De(F.edge.style), 1), x("div", o0, "(" + De(F.x1) + "," + De(F.y1) + ") \u2192 (" + De(F.x2) + "," + De(F.y2) + ")", 1)]), x("div", i0, [g(Y, { size: "x-small", variant: "text", onClick: (Z) => w(F) }, { default: he(() => [Fe(De(F.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(Y, { size: "x-small", variant: "text", color: "error", onClick: (Z) => a("remove-zone", F.id) }, { default: he(() => [...D[15] || (D[15] = [Fe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), b.value.length === 0 ? (Oe(), et("div", r0, "No zones.")) : Zt("", true)]), g(Y, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: b.value.length === 0, onClick: D[13] || (D[13] = (F) => a("clear-zones")) }, { default: he(() => [...D[16] || (D[16] = [Fe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Wa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, u0 = Wa(s0, [["__scopeId", "data-v-223984b2"]]), c0 = { class: "decal-list" }, d0 = { class: "decal-text" }, f0 = { class: "decal-coords" }, v0 = { class: "decal-actions" }, m0 = { key: 0, class: "decal-empty" }, g0 = un({ __name: "GridDecalTab", props: { decals: {} }, emits: ["add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = O(false), i = O("solid"), r = O("alpha"), s = O(false), u = O(an[0]), c = O(an[1]), d = O(an[2]), f = O(an[3]), v = O(1), y = O(an[0]), m = O(an[1]), h = O(an[2]), b = O(2), k = O(4), I = O(0.4), V = O(3), S = O(0), p = O(0), C = O(4), w = O(4), T = [{ title: "Solid", value: "solid" }, { title: "Checkerboard", value: "checkerboard" }, { title: "Stripes", value: "stripes" }, { title: "Dots", value: "dots" }], P = [{ title: "Alpha", value: "alpha" }, { title: "Multiply", value: "multiply" }, { title: "Screen", value: "screen" }], M = _(() => n.decals.filter((Y) => !!Y && typeof Y.id == "string" && Y.id.length > 0 && typeof Y.x1 == "number" && typeof Y.y1 == "number" && typeof Y.x2 == "number" && typeof Y.y2 == "number" && !!Y.pattern && typeof Y.pattern.kind == "string"));
  function D(Y) {
    return Y.id.slice(0, 6);
  }
  function E() {
    const Y = i.value;
    return Y === "solid" ? { kind: Y, coverage: Math.max(0, Math.min(1, v.value)), solidR: Math.max(0, Math.min(1, y.value)), solidG: Math.max(0, Math.min(1, m.value)), solidB: Math.max(0, Math.min(1, h.value)) } : Y === "checkerboard" ? { kind: Y, cellSize: Math.max(1, b.value) } : Y === "stripes" ? { kind: Y, pitchCells: Math.max(2, k.value) } : Y === "dots" ? { kind: Y, dotRadius: Math.max(0.1, I.value), dotSpacing: Math.max(2, V.value) } : { kind: Y };
  }
  function A() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function R() {
    const Y = Date.now();
    a("add-decal", { id: A(), x1: Math.min(Math.trunc(S.value), Math.trunc(C.value)), y1: Math.min(Math.trunc(p.value), Math.trunc(w.value)), x2: Math.max(Math.trunc(S.value), Math.trunc(C.value)), y2: Math.max(Math.trunc(p.value), Math.trunc(w.value)), pattern: E(), tint: [Math.max(0, Math.min(1, u.value)), Math.max(0, Math.min(1, c.value)), Math.max(0, Math.min(1, d.value)), Math.max(0, Math.min(1, f.value))], blendMode: r.value, suppressCells: s.value, enabled: true, createdAt: Y, updatedAt: Y });
  }
  function G(Y) {
    a("update-decal", { ...Y, enabled: !Y.enabled, updatedAt: Date.now() });
  }
  function N() {
    a("decal-tool-change", { enabled: l.value, snapMajor: o.value });
  }
  return se(l, N, { immediate: true }), se(o, N, { immediate: true }), (Y, H) => {
    const F = Ae("v-switch"), Z = Ae("v-select"), W = Ae("v-col"), L = Ae("v-row"), U = Ae("v-text-field"), ie = Ae("v-btn"), Se = Ae("v-divider");
    return Oe(), et(be, null, [g(F, { modelValue: l.value, "onUpdate:modelValue": H[0] || (H[0] = (K) => l.value = K), class: "mt-2", inset: "", density: "compact", color: "primary", "hide-details": "", label: "Decal Tool (drag on page)" }, null, 8, ["modelValue"]), g(F, { modelValue: o.value, "onUpdate:modelValue": H[1] || (H[1] = (K) => o.value = K), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "6" }, { default: he(() => [g(Z, { modelValue: i.value, "onUpdate:modelValue": H[2] || (H[2] = (K) => i.value = K), items: T, "item-title": "title", "item-value": "value", label: "Kind", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "6" }, { default: he(() => [g(Z, { modelValue: r.value, "onUpdate:modelValue": H[3] || (H[3] = (K) => r.value = K), items: P, "item-title": "title", "item-value": "value", label: "Blend", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), i.value === "solid" ? (Oe(), et(be, { key: 0 }, [g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "12" }, { default: he(() => [g(U, { modelValue: v.value, "onUpdate:modelValue": H[4] || (H[4] = (K) => v.value = K), modelModifiers: { number: true }, label: "Coverage (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(L, { dense: "", class: "mt-1" }, { default: he(() => [g(W, { cols: "4" }, { default: he(() => [g(U, { modelValue: y.value, "onUpdate:modelValue": H[5] || (H[5] = (K) => y.value = K), modelModifiers: { number: true }, label: "R", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "4" }, { default: he(() => [g(U, { modelValue: m.value, "onUpdate:modelValue": H[6] || (H[6] = (K) => m.value = K), modelModifiers: { number: true }, label: "G", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "4" }, { default: he(() => [g(U, { modelValue: h.value, "onUpdate:modelValue": H[7] || (H[7] = (K) => h.value = K), modelModifiers: { number: true }, label: "B", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })], 64)) : i.value === "checkerboard" ? (Oe(), Wt(L, { key: 1, dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "12" }, { default: he(() => [g(U, { modelValue: b.value, "onUpdate:modelValue": H[8] || (H[8] = (K) => b.value = K), modelModifiers: { number: true }, label: "Cell size (>=1)", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "stripes" ? (Oe(), Wt(L, { key: 2, dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "12" }, { default: he(() => [g(U, { modelValue: k.value, "onUpdate:modelValue": H[9] || (H[9] = (K) => k.value = K), modelModifiers: { number: true }, label: "Pitch cells (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "dots" ? (Oe(), Wt(L, { key: 3, dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "6" }, { default: he(() => [g(U, { modelValue: I.value, "onUpdate:modelValue": H[10] || (H[10] = (K) => I.value = K), modelModifiers: { number: true }, label: "Radius (>=0.1)", type: "number", min: "0.1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "6" }, { default: he(() => [g(U, { modelValue: V.value, "onUpdate:modelValue": H[11] || (H[11] = (K) => V.value = K), modelModifiers: { number: true }, label: "Spacing (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: u.value, "onUpdate:modelValue": H[12] || (H[12] = (K) => u.value = K), modelModifiers: { number: true }, label: "TR", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: c.value, "onUpdate:modelValue": H[13] || (H[13] = (K) => c.value = K), modelModifiers: { number: true }, label: "TG", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: d.value, "onUpdate:modelValue": H[14] || (H[14] = (K) => d.value = K), modelModifiers: { number: true }, label: "TB", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: f.value, "onUpdate:modelValue": H[15] || (H[15] = (K) => f.value = K), modelModifiers: { number: true }, label: "TA", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(F, { modelValue: s.value, "onUpdate:modelValue": H[16] || (H[16] = (K) => s.value = K), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Suppress cells" }, null, 8, ["modelValue"]), g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: S.value, "onUpdate:modelValue": H[17] || (H[17] = (K) => S.value = K), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: p.value, "onUpdate:modelValue": H[18] || (H[18] = (K) => p.value = K), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: C.value, "onUpdate:modelValue": H[19] || (H[19] = (K) => C.value = K), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: w.value, "onUpdate:modelValue": H[20] || (H[20] = (K) => w.value = K), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(ie, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: R }, { default: he(() => [...H[22] || (H[22] = [Fe(" Add Decal ", -1)])]), _: 1 }), g(Se, { class: "my-3" }), x("div", c0, [(Oe(true), et(be, null, fa(M.value, (K) => (Oe(), et("div", { key: K.id, class: "decal-row" }, [x("div", d0, [x("div", null, "#" + De(D(K)) + " \xB7 " + De(K.pattern.kind) + " \xB7 " + De(K.blendMode), 1), x("div", f0, "(" + De(K.x1) + "," + De(K.y1) + ") \u2192 (" + De(K.x2) + "," + De(K.y2) + ")", 1)]), x("div", v0, [g(ie, { size: "x-small", variant: "text", onClick: (fe) => G(K) }, { default: he(() => [Fe(De(K.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(ie, { size: "x-small", variant: "text", color: "error", onClick: (fe) => a("remove-decal", K.id) }, { default: he(() => [...H[23] || (H[23] = [Fe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), M.value.length === 0 ? (Oe(), et("div", m0, "No decals.")) : Zt("", true)]), g(ie, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: M.value.length === 0, onClick: H[21] || (H[21] = (K) => a("clear-decals")) }, { default: he(() => [...H[24] || (H[24] = [Fe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), h0 = Wa(g0, [["__scopeId", "data-v-83067205"]]), Tf = 210, y0 = { class: "hires-tab" }, b0 = { class: "text-caption text-medium-emphasis mb-2" }, p0 = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, S0 = { class: "region-list" }, x0 = { class: "d-flex align-center justify-space-between" }, k0 = { class: "text-body-2" }, w0 = { class: "text-caption text-medium-emphasis" }, C0 = { class: "d-flex align-center gap-2 mt-2 flex-wrap" }, _0 = { class: "mt-2" }, V0 = { class: "d-flex align-center justify-space-between" }, I0 = { class: "text-caption text-medium-emphasis" }, P0 = { key: 0, class: "text-caption", style: { opacity: "0.7", padding: "6px 0" } }, T0 = un({ __name: "GridHiResTab", props: { regions: {} }, emits: ["add-region", "update-region", "remove-region", "clear-regions", "hires-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = _(() => n.regions.length < Hi);
  function i() {
    l.value = !l.value, a("hires-tool-change", { enabled: l.value });
  }
  function r(y) {
    a("update-region", { ...y, enabled: !y.enabled, updatedAt: Date.now() });
  }
  function s(y) {
    a("update-region", { ...y, showGrid: !y.showGrid, updatedAt: Date.now() });
  }
  function u(y) {
    a("update-region", { ...y, showBaseGrid: !y.showBaseGrid, updatedAt: Date.now() });
  }
  function c(y) {
    a("update-region", { ...y, showBorder: !y.showBorder, updatedAt: Date.now() });
  }
  function d(y, m) {
    a("update-region", { ...y, tickMultiplier: m, updatedAt: Date.now() });
  }
  function f(y) {
    return y >= Tf ? "max" : y === 1 ? "1x" : `${y}x`;
  }
  function v(y) {
    return y.id.slice(0, 6);
  }
  return (y, m) => {
    const h = Ae("v-btn"), b = Ae("v-divider"), k = Ae("v-chip"), I = Ae("v-slider"), V = Ae("v-card");
    return Oe(), et("div", y0, [x("p", b0, De(Xe(Yl)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), g(h, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !o.value && !l.value, size: "small", block: "", onClick: i }, { default: he(() => [Fe(De(l.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), e.regions.length >= Xe(Hi) ? (Oe(), et("div", p0, " Max " + De(Xe(Hi)) + " regions reached. ", 1)) : Zt("", true), e.regions.length > 0 ? (Oe(), Wt(b, { key: 1, class: "my-3" })) : Zt("", true), x("div", S0, [(Oe(true), et(be, null, fa(e.regions, (S) => (Oe(), Wt(V, { key: S.id, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: he(() => [x("div", x0, [x("span", k0, " #" + De(v(S)) + " (" + De(S.x1) + ", " + De(S.y1) + ") \u2014 (" + De(S.x2) + ", " + De(S.y2) + ") ", 1), g(k, { size: "x-small", color: S.enabled ? "success" : "grey", variant: "flat" }, { default: he(() => [Fe(De(S.enabled ? "Active" : "Paused"), 1)]), _: 2 }, 1032, ["color"])]), x("div", w0, De(Xe(Yl)) + "x \xB7 " + De((S.x2 - S.x1 + 1) * (S.y2 - S.y1 + 1)) + " base cells ", 1), x("div", C0, [g(h, { size: "x-small", variant: "tonal", onClick: (p) => r(S) }, { default: he(() => [Fe(De(S.enabled ? "Pause" : "Resume"), 1)]), _: 2 }, 1032, ["onClick"]), g(h, { size: "x-small", variant: "tonal", onClick: (p) => s(S) }, { default: he(() => [Fe(" Grid " + De(S.showGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(h, { size: "x-small", variant: "tonal", onClick: (p) => u(S) }, { default: he(() => [Fe(" Base " + De(S.showBaseGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(h, { size: "x-small", variant: "tonal", onClick: (p) => c(S) }, { default: he(() => [Fe(" Border " + De(S.showBorder ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(h, { size: "x-small", variant: "tonal", color: "error", onClick: (p) => y.$emit("remove-region", S.id) }, { default: he(() => [...m[1] || (m[1] = [Fe(" Delete ", -1)])]), _: 1 }, 8, ["onClick"])]), x("div", _0, [x("div", V0, [m[2] || (m[2] = x("span", { class: "text-caption text-medium-emphasis" }, "Tick rate", -1)), x("span", I0, De(f(S.tickMultiplier ?? 1)), 1)]), g(I, { "model-value": S.tickMultiplier ?? 1, min: 1, max: Xe(Tf), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (p) => d(S, p) }, null, 8, ["model-value", "max", "onUpdate:modelValue"])])]), _: 2 }, 1024))), 128)), e.regions.length === 0 ? (Oe(), et("div", P0, " No hi-res regions. ")) : Zt("", true)]), e.regions.length > 0 ? (Oe(), Wt(h, { key: 2, class: "mt-2", size: "small", color: "error", variant: "text", onClick: m[0] || (m[0] = (S) => y.$emit("clear-regions")) }, { default: he(() => [...m[3] || (m[3] = [Fe(" Clear All ", -1)])]), _: 1 })) : Zt("", true)]);
  };
} }), A0 = Wa(T0, [["__scopeId", "data-v-5558c797"]]), D0 = { class: "text-tab" }, M0 = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, E0 = { class: "d-flex align-center ga-2" }, B0 = { class: "text-list" }, $0 = { class: "text-info" }, R0 = { class: "text-coords" }, F0 = { class: "text-actions" }, L0 = { key: 0, class: "text-empty" }, O0 = un({ __name: "GridTextTab", props: { blocks: {} }, emits: ["add-text", "update-text", "remove-text", "clear-text", "text-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = O(Ho), i = O("cells"), r = O(Kl), s = [{ title: "Cells (frozen)", value: "cells" }, { title: "SDF (visual)", value: "sdf" }, { title: "Both", value: "both" }], u = _(() => n.blocks.filter((m) => !!m && typeof m.id == "string" && m.id.length > 0 && typeof m.text == "string")), c = _(() => u.value.length < zi);
  function d() {
    return { enabled: l.value, font: o.value, renderMode: i.value, color: r.value };
  }
  function f() {
    l.value = !l.value, a("text-tool-change", d());
  }
  se([o, i, r], () => {
    l.value && a("text-tool-change", d());
  });
  function v(m) {
    return m.id.slice(0, 6);
  }
  function y(m) {
    a("update-text", { ...m, enabled: !m.enabled, updatedAt: Date.now() });
  }
  return (m, h) => {
    const b = Ae("v-btn"), k = Ae("v-text-field"), I = Ae("v-select"), V = Ae("v-col"), S = Ae("v-row"), p = Ae("v-divider");
    return Oe(), et("div", D0, [h[7] || (h[7] = x("p", { class: "text-caption text-medium-emphasis mb-2" }, " Click & drag on the grid to set position and width ", -1)), g(b, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !c.value && !l.value, size: "small", block: "", onClick: f }, { default: he(() => [Fe(De(l.value ? "Drawing \u2014 click & drag on grid" : "Place Text Block"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), u.value.length >= Xe(zi) ? (Oe(), et("div", M0, " Max " + De(Xe(zi)) + " blocks reached. ", 1)) : Zt("", true), g(k, { modelValue: o.value, "onUpdate:modelValue": h[0] || (h[0] = (C) => o.value = C), label: "Font (CSS)", density: "compact", "hide-details": "", class: "mt-3" }, null, 8, ["modelValue"]), g(S, { dense: "", class: "mt-2", align: "center" }, { default: he(() => [g(V, { cols: "8" }, { default: he(() => [g(I, { modelValue: i.value, "onUpdate:modelValue": h[1] || (h[1] = (C) => i.value = C), items: s, "item-title": "title", "item-value": "value", label: "Render Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(V, { cols: "4" }, { default: he(() => [x("div", E0, [h[4] || (h[4] = x("label", { class: "text-caption", style: { "white-space": "nowrap" } }, "Ink", -1)), at(x("input", { "onUpdate:modelValue": h[2] || (h[2] = (C) => r.value = C), type: "color", class: "color-swatch" }, null, 512), [[Vr, r.value]])])]), _: 1 })]), _: 1 }), g(p, { class: "my-3" }), x("div", B0, [(Oe(true), et(be, null, fa(u.value, (C) => (Oe(), et("div", { key: C.id, class: "text-row" }, [x("div", $0, [x("div", null, "#" + De(v(C)) + ' \xB7 "' + De(C.text) + '" \xB7 ' + De(C.renderMode), 1), x("div", R0, [x("span", { class: "color-dot", style: me({ background: C.color || Xe(Kl) }) }, null, 4), Fe(" cell (" + De(C.cellX) + "," + De(C.cellY) + ") w=" + De(C.cellsWide), 1)])]), x("div", F0, [g(b, { size: "x-small", variant: "text", onClick: (w) => y(C) }, { default: he(() => [Fe(De(C.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "text", color: "error", onClick: (w) => a("remove-text", C.id) }, { default: he(() => [...h[5] || (h[5] = [Fe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), u.value.length === 0 ? (Oe(), et("div", L0, "No text blocks.")) : Zt("", true)]), g(b, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: u.value.length === 0, onClick: h[3] || (h[3] = (C) => a("clear-text")) }, { default: he(() => [...h[6] || (h[6] = [Fe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])]);
  };
} }), N0 = Wa(O0, [["__scopeId", "data-v-e8d4e84a"]]), H0 = { class: "hires-text-tab" }, z0 = { class: "text-caption text-medium-emphasis mb-2" }, W0 = { class: "d-flex align-center ga-2" }, j0 = { class: "d-flex align-center gap-2 flex-wrap" }, U0 = un({ __name: "GridHiResTextTab", emits: ["hires-text-tool-change"], setup(e, { emit: t }) {
  const n = t, a = O(false), l = O(Ho), o = O("cells"), i = O(Kl), r = O(true), s = O(true), u = O(true), c = [{ title: "Cells (frozen)", value: "cells" }, { title: "SDF (visual)", value: "sdf" }, { title: "Both", value: "both" }];
  function d() {
    return { enabled: a.value, font: l.value, renderMode: o.value, color: i.value, showGrid: r.value, showBaseGrid: s.value, showBorder: u.value };
  }
  function f() {
    a.value = !a.value, n("hires-text-tool-change", d());
  }
  return se([l, o, i, r, s, u], () => {
    a.value && n("hires-text-tool-change", d());
  }), (v, y) => {
    const m = Ae("v-btn"), h = Ae("v-text-field"), b = Ae("v-select"), k = Ae("v-col"), I = Ae("v-row"), V = Ae("v-divider"), S = Ae("v-checkbox");
    return Oe(), et("div", H0, [x("p", z0, De(Xe(Yl)) + "x hi-res region with auto-fit text. Draw a region, type text (or leave empty for hi-res only). ", 1), g(m, { color: a.value ? "primary" : void 0, variant: a.value ? "flat" : "tonal", size: "small", block: "", onClick: f }, { default: he(() => [Fe(De(a.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Text Region"), 1)]), _: 1 }, 8, ["color", "variant"]), g(h, { modelValue: l.value, "onUpdate:modelValue": y[0] || (y[0] = (p) => l.value = p), label: "Font (CSS)", density: "compact", "hide-details": "", class: "mt-3" }, null, 8, ["modelValue"]), g(I, { dense: "", class: "mt-2", align: "center" }, { default: he(() => [g(k, { cols: "8" }, { default: he(() => [g(b, { modelValue: o.value, "onUpdate:modelValue": y[1] || (y[1] = (p) => o.value = p), items: c, "item-title": "title", "item-value": "value", label: "Render Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(k, { cols: "4" }, { default: he(() => [x("div", W0, [y[6] || (y[6] = x("label", { class: "text-caption", style: { "white-space": "nowrap" } }, "Ink", -1)), at(x("input", { "onUpdate:modelValue": y[2] || (y[2] = (p) => i.value = p), type: "color", class: "color-swatch" }, null, 512), [[Vr, i.value]])])]), _: 1 })]), _: 1 }), g(V, { class: "my-3" }), y[7] || (y[7] = x("div", { class: "text-caption text-medium-emphasis mb-2" }, "Region defaults", -1)), x("div", j0, [g(S, { modelValue: r.value, "onUpdate:modelValue": y[3] || (y[3] = (p) => r.value = p), label: "Grid", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"]), g(S, { modelValue: s.value, "onUpdate:modelValue": y[4] || (y[4] = (p) => s.value = p), label: "Base grid", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"]), g(S, { modelValue: u.value, "onUpdate:modelValue": y[5] || (y[5] = (p) => u.value = p), label: "Border", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"])])]);
  };
} }), G0 = Wa(U0, [["__scopeId", "data-v-be6e20de"]]), Y0 = un({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, decals: {}, hiresRegions: {}, textBlocks: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change", "add-hires-region", "update-hires-region", "remove-hires-region", "clear-hires-regions", "hires-tool-change", "add-text", "update-text", "remove-text", "clear-text", "text-tool-change", "hires-text-tool-change"], setup(e) {
  const t = O("zones"), n = O(false);
  return (a, l) => {
    const o = Ae("v-btn"), i = Ae("v-card-title"), r = Ae("v-tab"), s = Ae("v-tabs"), u = Ae("v-tabs-window-item"), c = Ae("v-tabs-window"), d = Ae("v-card-text"), f = Ae("v-card");
    return Oe(), et("aside", { class: ne(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Oe(), Wt(o, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: l[25] || (l[25] = (v) => n.value = false) }, { default: he(() => [...l[33] || (l[33] = [Fe(" Grid Tools ", -1)])]), _: 1 })) : (Oe(), Wt(f, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: he(() => [g(i, { class: "zone-title" }, { default: he(() => [l[27] || (l[27] = x("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), g(o, { size: "x-small", variant: "text", onClick: l[0] || (l[0] = (v) => n.value = true) }, { default: he(() => [...l[26] || (l[26] = [Fe("Collapse", -1)])]), _: 1 })]), _: 1 }), g(s, { modelValue: t.value, "onUpdate:modelValue": l[1] || (l[1] = (v) => t.value = v), density: "compact", grow: "" }, { default: he(() => [g(r, { value: "zones" }, { default: he(() => [...l[28] || (l[28] = [Fe("Zones", -1)])]), _: 1 }), g(r, { value: "decals" }, { default: he(() => [...l[29] || (l[29] = [Fe("Decals", -1)])]), _: 1 }), g(r, { value: "hires" }, { default: he(() => [...l[30] || (l[30] = [Fe("Hi-Res", -1)])]), _: 1 }), g(r, { value: "text" }, { default: he(() => [...l[31] || (l[31] = [Fe("Text", -1)])]), _: 1 }), g(r, { value: "hires-text" }, { default: he(() => [...l[32] || (l[32] = [Fe("Hi-Res Text", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), g(d, { class: "pt-2" }, { default: he(() => [g(c, { modelValue: t.value, "onUpdate:modelValue": l[24] || (l[24] = (v) => t.value = v) }, { default: he(() => [g(u, { value: "zones" }, { default: he(() => [g(u0, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: l[2] || (l[2] = (v) => a.$emit("add-zone", v)), onUpdateZone: l[3] || (l[3] = (v) => a.$emit("update-zone", v)), onRemoveZone: l[4] || (l[4] = (v) => a.$emit("remove-zone", v)), onClearZones: l[5] || (l[5] = (v) => a.$emit("clear-zones")), onToolChange: l[6] || (l[6] = (v) => a.$emit("tool-change", v)), onDraftChange: l[7] || (l[7] = (v) => a.$emit("draft-change", v)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), g(u, { value: "decals" }, { default: he(() => [g(h0, { decals: e.decals, onAddDecal: l[8] || (l[8] = (v) => a.$emit("add-decal", v)), onUpdateDecal: l[9] || (l[9] = (v) => a.$emit("update-decal", v)), onRemoveDecal: l[10] || (l[10] = (v) => a.$emit("remove-decal", v)), onClearDecals: l[11] || (l[11] = (v) => a.$emit("clear-decals")), onDecalToolChange: l[12] || (l[12] = (v) => a.$emit("decal-tool-change", v)) }, null, 8, ["decals"])]), _: 1 }), g(u, { value: "hires" }, { default: he(() => [g(A0, { regions: e.hiresRegions, onAddRegion: l[13] || (l[13] = (v) => a.$emit("add-hires-region", v)), onUpdateRegion: l[14] || (l[14] = (v) => a.$emit("update-hires-region", v)), onRemoveRegion: l[15] || (l[15] = (v) => a.$emit("remove-hires-region", v)), onClearRegions: l[16] || (l[16] = (v) => a.$emit("clear-hires-regions")), onHiresToolChange: l[17] || (l[17] = (v) => a.$emit("hires-tool-change", v)) }, null, 8, ["regions"])]), _: 1 }), g(u, { value: "text" }, { default: he(() => [g(N0, { blocks: e.textBlocks, onAddText: l[18] || (l[18] = (v) => a.$emit("add-text", v)), onUpdateText: l[19] || (l[19] = (v) => a.$emit("update-text", v)), onRemoveText: l[20] || (l[20] = (v) => a.$emit("remove-text", v)), onClearText: l[21] || (l[21] = (v) => a.$emit("clear-text")), onTextToolChange: l[22] || (l[22] = (v) => a.$emit("text-tool-change", v)) }, null, 8, ["blocks"])]), _: 1 }), g(u, { value: "hires-text" }, { default: he(() => [g(G0, { onHiresTextToolChange: l[23] || (l[23] = (v) => a.$emit("hires-text-tool-change", v)) })]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2);
  };
} }), K0 = Wa(Y0, [["__scopeId", "data-v-751e1730"]]), Af = 5, Df = 19, Mf = 10, X0 = un({ __name: "AppBackground", setup(e) {
  const t = _g("AppBackground"), n = O(null), a = O(0), l = Xk(), o = Jk(l.gridInfo, a), i = Qk(), r = e0(o), s = t0(o);
  function u(ee) {
    return { ...ee, edge: { ...ee.edge } };
  }
  function c(ee) {
    return ee.map(u);
  }
  function d(ee) {
    return { ...ee, pattern: { ...ee.pattern }, tint: [...ee.tint] };
  }
  function f(ee) {
    return ee.map(d);
  }
  const v = yk({ onSetZones: (ee) => l.post({ type: "set_zones", zones: c(ee) }), onAddZone: (ee) => l.post({ type: "add_zone", zone: u(ee) }), onUpdateZone: (ee) => l.post({ type: "update_zone", zone: u(ee) }), onRemoveZone: (ee) => l.post({ type: "remove_zone", id: ee }), onClearZones: () => l.post({ type: "clear_zones" }) }), y = Dk({ onSetDecals: (ee) => l.post({ type: "set_decals", decals: f(ee) }), onAddDecal: (ee) => l.post({ type: "add_decal", decal: d(ee) }), onUpdateDecal: (ee) => l.post({ type: "update_decal", decal: d(ee) }), onRemoveDecal: (ee) => l.post({ type: "remove_decal", id: ee }), onClearDecals: () => l.post({ type: "clear_decals" }) }), m = Ok({ onAddRegion: (ee) => l.post({ type: "add_hires", region: { ...ee } }), onUpdateRegion: (ee) => l.post({ type: "update_hires", region: { ...ee } }), onRemoveRegion: (ee) => l.post({ type: "remove_hires", id: ee }), onClearRegions: () => l.post({ type: "clear_hires" }) }), h = Kk({ onSetBlocks: (ee) => l.post({ type: "set_text", blocks: ee }), onAddBlock: (ee) => l.post({ type: "add_text", block: ee }), onUpdateBlock: (ee) => l.post({ type: "update_text", block: ee }), onRemoveBlock: (ee) => l.post({ type: "remove_text", id: ee }), onClearBlocks: () => l.post({ type: "clear_text" }) }), b = O(false), k = O(false), I = O(false), V = O(false), S = O(false), p = O(false), C = O({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), w = O(Ho), T = O("cells"), P = O(Kl), M = O(false), D = O(Ho), E = O("cells"), A = O(Kl), R = O(true), G = O(true), N = O(true);
  function Y(ee) {
    const Ye = Date.now(), ze = C.value;
    return { id: crypto.randomUUID(), x1: ee.x1, y1: ee.y1, x2: ee.x2, y2: ee.y2, mode: ze.mode, edge: { ...ze.edge }, enabled: true, createdAt: Ye, updatedAt: Ye };
  }
  function H(ee) {
    const Ye = Date.now();
    return { id: crypto.randomUUID(), x1: ee.x1, y1: ee.y1, x2: ee.x2, y2: ee.y2, pattern: { kind: "solid", coverage: 1, solidR: 0.49, solidG: 0.3, solidB: 1 }, tint: [1, 1, 1, 1], blendMode: "alpha", suppressCells: false, enabled: true, createdAt: Ye, updatedAt: Ye };
  }
  function F(ee, Ye, ze) {
    const xt = "Hgyjpq\xD1|", Ze = new OffscreenCanvas(ze, 1).getContext("2d");
    Ze.font = Ye;
    const cn = Ze.measureText(xt);
    let Ca;
    const fo = cn.fontBoundingBoxAscent, is = cn.fontBoundingBoxDescent;
    if (typeof fo == "number" && typeof is == "number" && isFinite(fo) && isFinite(is)) Ca = fo + is;
    else {
      const rs = cn.actualBoundingBoxAscent, ss = cn.actualBoundingBoxDescent;
      if (typeof rs == "number" && typeof ss == "number" && isFinite(rs) && isFinite(ss)) Ca = rs + ss;
      else {
        const Ad = Ye.match(/(\d+(?:\.\d+)?)px/);
        Ca = Ad ? parseFloat(Ad[1]) * 1.2 : 16;
      }
    }
    const Bp = Ze.measureText(ee), $p = Math.max(1, Bp.width);
    return Math.max(1, Math.ceil(ze * (Ca / $p) * 1.1));
  }
  function Z() {
    return M.value ? L : W;
  }
  function W() {
    if (!r.anchor || !r.state.value.value.trim()) {
      r.cleanup();
      return;
    }
    const ee = Date.now();
    h.addBlock({ id: crypto.randomUUID(), text: r.state.value.value.trim(), font: w.value, cellX: r.anchor.cx, cellY: r.anchor.cy, cellsWide: r.cellsWide, renderMode: T.value, color: P.value, enabled: true, createdAt: ee, updatedAt: ee }), r.cleanup();
  }
  function L() {
    if (!r.anchor) {
      r.cleanup();
      return;
    }
    const ee = Date.now(), Ye = r.anchor, ze = r.cellsWide, xt = Math.max(1, r.cellsHigh), Pn = r.state.value.value.trim(), Ze = Pn ? F(Pn, D.value, ze) : xt;
    m.addRegion({ id: crypto.randomUUID(), x1: Ye.cx, y1: Ye.cy, x2: Ye.cx + ze - 1, y2: Ye.cy + Ze - 1, multiplier: Yl, enabled: true, showGrid: R.value, showBaseGrid: G.value, showBorder: N.value, tickMultiplier: 1, createdAt: ee, updatedAt: ee }), Pn && h.addBlock({ id: crypto.randomUUID(), text: Pn, font: D.value, cellX: Ye.cx, cellY: Ye.cy, cellsWide: ze, renderMode: E.value, color: A.value, enabled: true, createdAt: ee, updatedAt: ee }), r.cleanup();
  }
  s.register("zone", { isEnabled: () => b.value, priority: 1, snapMajor: () => k.value, onCommit(ee) {
    v.addZone(Y(ee));
  } }), s.register("decal", { isEnabled: () => I.value, priority: 2, dragMode: "paint", snapMajor: () => V.value, onCommit(ee) {
    y.addDecal(H(ee));
  } }), s.register("hires", { isEnabled: () => S.value, priority: 3, onCommit(ee) {
    const Ye = Date.now();
    m.addRegion({ id: crypto.randomUUID(), x1: ee.x1, y1: ee.y1, x2: ee.x2, y2: ee.y2, multiplier: Yl, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1, createdAt: Ye, updatedAt: Ye });
  } }), s.register("text", { isEnabled: () => p.value, priority: 4, onCommit(ee) {
    const Ye = Math.max(Mf, ee.x2 - ee.x1 + 1);
    return r.show({ cx: ee.x1, cy: ee.y1 }, Ye, 0, o.makeSnapshot()), false;
  } }), s.register("hires-text", { isEnabled: () => M.value, priority: 5, onCommit(ee) {
    const Ye = Math.max(Mf, ee.x2 - ee.x1 + 1), ze = Math.max(1, ee.y2 - ee.y1 + 1);
    return r.show({ cx: ee.x1, cy: ee.y1 }, Ye, ze, o.makeSnapshot()), false;
  } });
  function U(ee) {
    v.addZone(ee);
  }
  function ie(ee) {
    v.updateZone(ee);
  }
  function Se(ee) {
    v.removeZone(ee);
  }
  function K() {
    v.clearZones();
  }
  function fe(ee) {
    y.addDecal(ee);
  }
  function Te(ee) {
    y.updateDecal(ee);
  }
  function _e(ee) {
    y.removeDecal(ee);
  }
  function ye() {
    y.clearDecals();
  }
  function $(ee) {
    m.addRegion(ee);
  }
  function z(ee) {
    m.updateRegion(ee);
  }
  function Q(ee) {
    m.removeRegion(ee);
  }
  function ce() {
    m.clearRegions();
  }
  function oe(ee) {
    h.addBlock(ee);
  }
  function ue(ee) {
    h.updateBlock(ee);
  }
  function pe(ee) {
    h.removeBlock(ee);
  }
  function de() {
    h.clearBlocks();
  }
  function X(ee) {
    C.value = ee;
  }
  function le(ee) {
    b.value = ee.enabled, k.value = ee.snapMajor, ee.enabled || s.cancelActiveDrag("zone");
  }
  function Ve(ee) {
    I.value = ee.enabled, V.value = ee.snapMajor, ee.enabled || s.cancelActiveDrag("decal");
  }
  function J(ee) {
    S.value = ee.enabled, ee.enabled || s.cancelActiveDrag("hires");
  }
  function ge(ee) {
    p.value = ee.enabled, w.value = ee.font, T.value = ee.renderMode, P.value = ee.color, ee.enabled || (s.cancelActiveDrag("text"), r.cleanup());
  }
  function ke(ee) {
    M.value = ee.enabled, D.value = ee.font, E.value = ee.renderMode, A.value = ee.color, R.value = ee.showGrid, G.value = ee.showBaseGrid, N.value = ee.showBorder, ee.enabled || (s.cancelActiveDrag("hires-text"), r.cleanup());
  }
  function we(ee) {
    if (s.anyToolEnabled() || o.isInteractiveTarget(ee.target)) return;
    const Ye = o.makeSnapshot();
    if (!Ye) return;
    const ze = Vg(ee.clientX, ee.clientY, Ye), xt = ak(ze, Ye);
    t.debug("Click \u2192", ee.clientX, ee.clientY, "\u2192 cell", xt.cx, xt.cy), l.post({ type: "toggle_cell", cx: xt.cx, cy: xt.cy, scrollCanvasPx: Ye.scrollCanvasPx });
  }
  function Pe(ee) {
    r.state.visible.value && !r.isInsideInput(ee.target) && (M.value ? L() : r.state.value.value.trim() ? W() : r.cleanup());
  }
  let Be = 0, je = 0, He = null, rt = null, ot = null;
  return Pt(() => {
    const ee = n.value;
    if (!ee) return;
    Be = Math.round(window.innerWidth * devicePixelRatio), je = Math.round(window.innerHeight * devicePixelRatio), ee.width = Be, ee.height = je;
    const Ye = ee.transferControlToOffscreen(), ze = kf(Be, Df, devicePixelRatio), xt = 0.8 * ze * Af / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${xt.toFixed(1)}px`), l.init(Ye, ze), t.debug("Worker spawned, gridPitch", ze.toFixed(2)), l.on("ready", (Ze) => {
      t.info(`${Ze.backend.toUpperCase()} renderer active`), l.post({ type: "set_zones", zones: c(v.zones.value) }), l.post({ type: "set_decals", decals: f(y.decals.value) }), m.regions.value.length > 0 && l.post({ type: "set_hires_regions", regions: m.regions.value.map((cn) => ({ ...cn })) }), h.blocks.value.length > 0 && l.post({ type: "set_text", blocks: Me(h.blocks.value).map((cn) => ({ ...Me(cn) })) });
    }), l.on("zones_state", (Ze) => v.syncFromWorker(Ze.zones)), l.on("zones_error", (Ze) => t.error("Zone update rejected:", Ze.message)), l.on("decals_state", (Ze) => y.syncFromWorker(Ze.decals)), l.on("decals_error", (Ze) => t.error("Decal update rejected:", Ze.message)), l.on("hires_state", (Ze) => m.syncFromWorker(Ze.regions)), l.on("text_state", (Ze) => h.syncFromWorker(Ze.blocks)), l.on("text_error", (Ze) => t.error("Text update rejected:", Ze.message)), l.on("error", (Ze) => {
      Ze.phase === "gpu-init" ? t.debug(`GPU unavailable (${Ze.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${Ze.phase}]:`, Ze.message);
    }), document.addEventListener("click", we), document.addEventListener("pointerdown", Pe), ot = s.attachListeners(), He = document.querySelector(".v-main");
    let Pn = -1;
    i.start(() => {
      l.post({ type: "frame" });
      const Ze = (He == null ? void 0 : He.scrollTop) || window.scrollY;
      Ze !== Pn && (Pn = Ze, a.value = Ze * devicePixelRatio, l.post({ type: "scroll", scrollY: a.value }), r.updateStyle());
    }), rt = new ResizeObserver(([Ze]) => {
      const cn = Math.round(Ze.contentRect.width * devicePixelRatio), Ca = Math.round(Ze.contentRect.height * devicePixelRatio);
      if (cn === Be && Ca === je) return;
      Be = cn, je = Ca;
      const fo = kf(cn, Df, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * fo * Af / devicePixelRatio).toFixed(1)}px`), l.post({ type: "resize", width: cn, height: Ca });
    }), rt.observe(ee);
  }), wr(() => {
    r.state.visible.value && r.cleanup(), i.stop(), rt == null ? void 0 : rt.disconnect(), document.removeEventListener("click", we), document.removeEventListener("pointerdown", Pe), ot == null ? void 0 : ot(), l.terminate();
  }), (ee, Ye) => (Oe(), et(be, null, [x("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), Xe(s).previewStyle.value ? (Oe(), et("div", { key: 0, class: "zone-preview-overlay", style: me(Xe(s).previewStyle.value) }, null, 4)) : Zt("", true), Xe(r).state.visible.value ? at((Oe(), et("textarea", { key: 1, ref: "textInput.state.inputRef", "onUpdate:modelValue": Ye[0] || (Ye[0] = (ze) => Xe(r).state.value.value = ze), class: "text-placement-input", style: me(Xe(r).state.style.value), placeholder: "Type text...", onKeydown: Ye[1] || (Ye[1] = (ze) => Xe(r).onKeydown(ze, Z())) }, null, 36)), [[Vr, Xe(r).state.value.value]]) : Zt("", true), g(K0, { zones: Xe(v).zones.value, "preview-rect": Xe(s).previewRect.value, decals: Xe(y).decals.value, "hires-regions": Xe(m).regions.value, "text-blocks": Xe(h).blocks.value, onAddZone: U, onUpdateZone: ie, onRemoveZone: Se, onClearZones: K, onToolChange: le, onDraftChange: X, onAddDecal: fe, onUpdateDecal: Te, onRemoveDecal: _e, onClearDecals: ye, onDecalToolChange: Ve, onAddHiresRegion: $, onUpdateHiresRegion: z, onRemoveHiresRegion: Q, onClearHiresRegions: ce, onHiresToolChange: J, onAddText: oe, onUpdateText: ue, onRemoveText: pe, onClearText: de, onTextToolChange: ge, onHiresTextToolChange: ke }, null, 8, ["zones", "preview-rect", "decals", "hires-regions", "text-blocks"])], 64));
} }), q0 = Wa(X0, [["__scopeId", "data-v-e72c0e52"]]), Z0 = un({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (n, a) => {
    const l = Ae("v-app-bar-title"), o = Ae("v-btn"), i = Ae("v-app-bar");
    return Oe(), Wt(i, { elevation: "0", color: "background", border: "b" }, { append: he(() => [(Oe(), et(be, null, fa(t, (r) => g(o, { key: r.label, href: r.href, variant: "text", size: "default", class: "nav-ink" }, { default: he(() => [Fe(De(r.label), 1)]), _: 2 }, 1032, ["href"])), 64))]), default: he(() => [g(l, null, { default: he(() => [...a[0] || (a[0] = [x("span", { class: "title-ink font-weight-bold" }, "Anjin Byte (Work in progress...)", -1)])]), _: 1 })]), _: 1 });
  };
} }), J0 = { class: "text-medium-emphasis text-caption" }, Q0 = un({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = Ae("v-footer");
    return Oe(), Wt(l, { color: "background", border: "t", class: "justify-center" }, { default: he(() => [x("span", J0, " \xA9 " + De(Xe(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), ew = {}, tw = { id: "hero", class: "hero-section" };
function nw(e, t) {
  const n = Ae("v-btn"), a = Ae("v-container");
  return Oe(), et("section", tw, [g(a, { class: "hero-container" }, { default: he(() => [t[2] || (t[2] = x("h1", { class: "text-h3 font-weight-bold text-white mb-2" }, "Taylor Hale", -1)), t[3] || (t[3] = x("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript ", -1)), g(n, { color: "primary", href: "#projects", size: "large", variant: "elevated" }, { default: he(() => [...t[0] || (t[0] = [Fe(" View Projects ", -1)])]), _: 1 }), g(n, { class: "ml-3", href: "#contact", size: "large", variant: "outlined", color: "secondary" }, { default: he(() => [...t[1] || (t[1] = [Fe(" Contact ", -1)])]), _: 1 })]), _: 1 })]);
}
const aw = Wa(ew, [["render", nw], ["__scopeId", "data-v-bd3b897d"]]), lw = { id: "about" }, ow = { class: "d-flex flex-wrap ga-2" }, iw = un({ __name: "AboutSection", setup(e) {
  const t = ["Rust", "WebAssembly", "TypeScript", "Vue 3", "Vite", "C++", "Python", "Linux", "OpenGL / WGPU", "Git"];
  return (n, a) => {
    const l = Ae("v-chip"), o = Ae("v-col"), i = Ae("v-row"), r = Ae("v-container");
    return Oe(), et("section", lw, [g(r, { class: "py-16" }, { default: he(() => [g(i, { justify: "center" }, { default: he(() => [g(o, { cols: "12", md: "8" }, { default: he(() => [a[0] || (a[0] = x("h2", { class: "text-h4 font-weight-bold mb-6" }, "About", -1)), a[1] || (a[1] = x("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " I build high-performance systems with Rust and WebAssembly, bringing low-level computation to the web without sacrificing developer experience. I care about clean architecture, rigorous testing, and shipping things that actually work. ", -1)), x("div", ow, [(Oe(), et(be, null, fa(t, (s) => g(l, { key: s, color: "primary", variant: "tonal", size: "small" }, { default: he(() => [Fe(De(s), 1)]), _: 2 }, 1024)), 64))])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }), rw = { id: "projects" }, sw = { class: "d-flex flex-wrap ga-1" }, uw = un({ __name: "ProjectsSection", setup(e) {
  const t = [{ title: "Conway's Game of Life", description: "Classic cellular automaton implemented in Rust, compiled to WebAssembly, and rendered via the Canvas API. Cell state is read directly from WASM linear memory.", tags: ["Rust", "WebAssembly", "Canvas", "Vue 3"], href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }];
  return (n, a) => {
    const l = Ae("v-card-title"), o = Ae("v-card-text"), i = Ae("v-chip"), r = Ae("v-btn"), s = Ae("v-card-actions"), u = Ae("v-card"), c = Ae("v-col"), d = Ae("v-row"), f = Ae("v-container");
    return Oe(), et("section", rw, [g(f, { class: "py-16" }, { default: he(() => [a[1] || (a[1] = x("h2", { class: "text-h4 font-weight-bold mb-8" }, "Projects", -1)), g(d, null, { default: he(() => [(Oe(), et(be, null, fa(t, (v) => g(c, { key: v.title, cols: "12", md: "6", lg: "4" }, { default: he(() => [g(u, { color: "surface", border: "", height: "100%", class: "d-flex flex-column" }, { default: he(() => [g(l, { class: "text-h6 pt-5 px-5" }, { default: he(() => [Fe(De(v.title), 1)]), _: 2 }, 1024), g(o, { class: "text-medium-emphasis flex-grow-1 px-5" }, { default: he(() => [Fe(De(v.description), 1)]), _: 2 }, 1024), g(o, { class: "pt-0 px-5" }, { default: he(() => [x("div", sw, [(Oe(true), et(be, null, fa(v.tags, (y) => (Oe(), Wt(i, { key: y, size: "x-small", color: "secondary", variant: "tonal" }, { default: he(() => [Fe(De(y), 1)]), _: 2 }, 1024))), 128))])]), _: 2 }, 1024), v.href ? (Oe(), Wt(s, { key: 0, class: "px-5 pb-5" }, { default: he(() => [g(r, { href: v.href, target: "_blank", variant: "text", color: "primary", size: "small", "append-icon": "mdi-open-in-new" }, { default: he(() => [...a[0] || (a[0] = [Fe(" View on GitHub ", -1)])]), _: 1 }, 8, ["href"])]), _: 2 }, 1024)) : Zt("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)), 64))]), _: 1 })]), _: 1 })]);
  };
} }), cw = { id: "contact" }, dw = { class: "d-flex justify-center flex-wrap ga-3" }, fw = un({ __name: "ContactSection", setup(e) {
  const t = [{ label: "GitHub", icon: "mdi-github", href: "https://github.com/Anjin-Byte", color: "white" }, { label: "Email", icon: "mdi-email-outline", href: "mailto:thalesarkanzen@gmail.com", color: "secondary" }];
  return (n, a) => {
    const l = Ae("v-btn"), o = Ae("v-container");
    return Oe(), et("section", cw, [g(o, { class: "py-16 text-center" }, { default: he(() => [a[0] || (a[0] = x("h2", { class: "text-h4 font-weight-bold mb-4" }, "Get in Touch", -1)), a[1] || (a[1] = x("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Open to interesting problems. Reach out anytime. ", -1)), x("div", dw, [(Oe(), et(be, null, fa(t, (i) => g(l, { key: i.label, href: i.href, color: i.color, "prepend-icon": i.icon, variant: "outlined", target: "_blank", size: "large" }, { default: he(() => [Fe(De(i.label), 1)]), _: 2 }, 1032, ["href", "color", "prepend-icon"])), 64))])]), _: 1 })]);
  };
} }), vw = un({ __name: "App", setup(e) {
  return (t, n) => {
    const a = Ae("v-main"), l = Ae("v-app");
    return Oe(), Wt(l, null, { default: he(() => [g(q0), g(Z0), g(a, null, { default: he(() => [g(aw), g(iw), g(uw), g(fw)]), _: 1 }), g(Q0)]), _: 1 });
  };
} });
function Rg(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const nt = typeof window < "u", bc = nt && "IntersectionObserver" in window, mw = nt && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Ef = nt && "EyeDropper" in window, pc = nt && "matchMedia" in window && typeof window.matchMedia == "function", Gn = () => pc && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Bf(e, t, n) {
  gw(e, t), t.set(e, n);
}
function gw(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $f(e, t, n) {
  return e.set(Fg(e, t), n), n;
}
function na(e, t) {
  return e.get(Fg(e, t));
}
function Fg(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Lg(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ul(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Lg(e, t.split("."), n));
}
function kt(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return ul(e, t, n);
  if (Array.isArray(t)) return Lg(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function cl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Qs(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Sc(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const eu = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Og(e) {
  return Object.keys(e);
}
function el(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function on(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function tu(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Ne(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const Ng = /^on[^a-z]/, xc = (e) => Ng.test(e), hw = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], yw = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function bw(e) {
  return e.isComposing && yw.includes(e.key);
}
function Zn(e) {
  const [t, n] = tu(e, [Ng]), a = Ne(t, hw), [l, o] = tu(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function ct(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Hg(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Xe(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Rf(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Ff(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Lf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function pw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function Of(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; ) e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function zt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (Qs(o) && Qs(i)) {
      a[l] = zt(o, i, n);
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
function zg(e) {
  return e.map((t) => t.type === be ? zg(t.children) : t).flat();
}
function nl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (nl.cache.has(e)) return nl.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return nl.cache.set(e, t), t;
}
nl.cache = /* @__PURE__ */ new Map();
function Fl(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Fl(e, n)).flat(1);
  if (t.suspense) return Fl(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Fl(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return Fl(e, t.component.subTree).flat(1);
  }
  return [];
}
var Tl = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap();
class Wg {
  constructor(t) {
    Bf(this, Tl, []), Bf(this, Xa, 0), this.size = t;
  }
  get isFull() {
    return na(Tl, this).length === this.size;
  }
  push(t) {
    na(Tl, this)[na(Xa, this)] = t, $f(Xa, this, (na(Xa, this) + 1) % this.size);
  }
  values() {
    return na(Tl, this).slice(na(Xa, this)).concat(na(Tl, this).slice(0, na(Xa, this)));
  }
  clear() {
    na(Tl, this).length = 0, $f(Xa, this, 0);
  }
}
function Sw(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function kc(e) {
  const t = Bt({});
  mt(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = B(() => t[a]);
  return n;
}
function nr(e, t) {
  return e.includes(t);
}
function jg(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Lt = () => [Function, Array];
function Nf(e, t) {
  return t = "on" + qn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ci(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const l of e) l(...n);
  else typeof e == "function" && e(...n);
}
function Ma(e) {
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
function Ug(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? true)) && l < e.length && l >= 0);
  return a;
}
function al(e, t) {
  var _a3, _b2, _c2, _d2;
  const n = Ma(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a3 = n[0]) == null ? void 0 : _a3.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const a = Ug(n, t);
    a ? a.focus() : al(e, t === "next" ? "first" : "last");
  }
}
function So(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Ar() {
}
function Xl(e, t) {
  if (!(nt && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Dr(e) {
  return e.some((t) => Oo(t) ? t.type === qt ? false : t.type !== be || Dr(t.children) : true) ? e : null;
}
function Di(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function xw(e, t) {
  if (!nt || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function kw(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function zo() {
  const e = re(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => Sc(e.value) }), t;
}
function ql(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Ra(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function ar(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function ww(e, t, n) {
  const a = new RegExp(`[\\d\\-${ar(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${ar(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function Cw(e) {
  const t = {};
  for (const n in e) t[sn(n)] = e[n];
  return t;
}
function _w(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function Hf(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : wt(n) || Da(n) || oi(n) ? t(Me(n)) : Qs(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Gg = ["top", "bottom"], Vw = ["start", "end", "left", "right"];
function nu(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = nr(Gg, n) ? "start" : nr(Vw, n) ? "top" : "center"), { side: au(n, t), align: au(a, t) };
}
function au(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Vs(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Is(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function zf(e) {
  return { side: e.align, align: e.side };
}
function Wf(e) {
  return nr(Gg, e.side) ? "y" : "x";
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
function jf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function Yg(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new _n({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new _n(e);
}
function Iw(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new _n({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new _n({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new _n(e);
}
function wc(e) {
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
function oa(e, t, n) {
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
const Wi = /* @__PURE__ */ new WeakMap();
function Pw(e, t) {
  Object.keys(t).forEach((n) => {
    if (xc(n)) {
      const a = jg(n), l = Wi.get(e);
      if (t[n] == null) l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, t[n]]), Wi.has(e) || Wi.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Tw(e, t) {
  Object.keys(t).forEach((n) => {
    if (xc(n)) {
      const a = jg(n), l = Wi.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Al = 2.4, Uf = 0.2126729, Gf = 0.7151522, Yf = 0.072175, Aw = 0.55, Dw = 0.58, Mw = 0.57, Ew = 0.62, Mi = 0.03, Kf = 1.45, Bw = 5e-4, $w = 1.25, Rw = 1.25, Xf = 0.078, qf = 12.82051282051282, Ei = 0.06, Zf = 1e-3;
function Jf(e, t) {
  const n = (e.r / 255) ** Al, a = (e.g / 255) ** Al, l = (e.b / 255) ** Al, o = (t.r / 255) ** Al, i = (t.g / 255) ** Al, r = (t.b / 255) ** Al;
  let s = n * Uf + a * Gf + l * Yf, u = o * Uf + i * Gf + r * Yf;
  if (s <= Mi && (s += (Mi - s) ** Kf), u <= Mi && (u += (Mi - u) ** Kf), Math.abs(u - s) < Bw) return 0;
  let c;
  if (u > s) {
    const d = (u ** Aw - s ** Dw) * $w;
    c = d < Zf ? 0 : d < Xf ? d - d * qf * Ei : d - Ei;
  } else {
    const d = (u ** Ew - s ** Mw) * Rw;
    c = d > -Zf ? 0 : d > -Xf ? d - d * qf * Ei : d + Ei;
  }
  return c * 100;
}
const lr = 0.20689655172413793, Fw = (e) => e > lr ** 3 ? Math.cbrt(e) : e / (3 * lr ** 2) + 4 / 29, Lw = (e) => e > lr ? e ** 3 : 3 * lr ** 2 * (e - 4 / 29);
function Kg(e) {
  const t = Fw, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Xg(e) {
  const t = Lw, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Ow = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Nw = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Hw = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], zw = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function qg(e) {
  const t = Array(3), n = Nw, a = Ow;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(tt(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function Cc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = zw, i = Hw;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function lu(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ww(e) {
  return lu(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Qf = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, jw = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => ev({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => ev({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => Yn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => Yn({ h: e, s: t, v: n, a }) };
function hn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Qf.test(e)) {
    const { groups: t } = e.match(Qf), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return jw[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), eh(t);
  } else if (typeof e == "object") {
    if (el(e, ["r", "g", "b"])) return e;
    if (el(e, ["h", "s", "l"])) return Yn(_c(e));
    if (el(e, ["h", "s", "v"])) return Yn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Yn(e) {
  const { h: t, s: n, v: a, a: l } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function ev(e) {
  return Yn(_c(e));
}
function di(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function ou(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function _c(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function Zg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Jg(e) {
  return Zg(Yn(e));
}
function Bi(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Qg(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[Bi(t), Bi(n), Bi(a), l !== void 0 ? Bi(Math.round(l * 255)) : ""].join("")}`;
}
function eh(e) {
  e = Gw(e);
  let [t, n, a, l] = pw(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function Uw(e) {
  const t = eh(e);
  return di(t);
}
function th(e) {
  return Qg(Yn(e));
}
function Gw(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Ff(Ff(e, 6), 8, "F")), e;
}
function Yw(e, t) {
  const n = Kg(Cc(e));
  return n[0] = n[0] + t * 10, qg(Xg(n));
}
function Kw(e, t) {
  const n = Kg(Cc(e));
  return n[0] = n[0] - t * 10, qg(Xg(n));
}
function iu(e) {
  const t = hn(e);
  return Cc(t)[1];
}
function Xw(e, t) {
  const n = iu(e), a = iu(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function nh(e) {
  const t = Math.abs(Jf(hn(0), hn(e)));
  return Math.abs(Jf(hn(16777215), hn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function j(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const xe = j({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function Ct(e, t) {
  const n = si();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Jn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ct(e).type;
  return nl((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function qw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Zl = Symbol.for("vuetify:defaults");
function Zw(e) {
  return O(e);
}
function Vc() {
  const e = Ge(Zl);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function yt(e, t) {
  const n = Vc(), a = O(e), l = _(() => {
    if (Xe(t == null ? void 0 : t.disabled)) return n.value;
    const i = Xe(t == null ? void 0 : t.scoped), r = Xe(t == null ? void 0 : t.reset), s = Xe(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let u = zt(a.value, { prev: n.value });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = zt(zt(u, { prev: u }), u[s])), u;
    }
    return u.prev ? zt(u.prev, u) : u;
  });
  return ft(Zl, l), l;
}
function Jw(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[nl(t)] < "u");
}
function Qw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vc();
  const a = Ct("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (Jw(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = re();
  mt(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else i.value = void 0;
  });
  function r() {
    const s = qw(Zl, a);
    ft(Zl, _(() => i.value ? zt((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function en(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = j(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return on(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = Vc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = Qw(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? en : un)(t);
}
function e1(e, t) {
  return t.props = e, t;
}
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return te()({ name: n ?? qn(sn(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...xe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return ya(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function t1(e, t, n, a) {
  if (!n || Ra(e) || Ra(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function n1(e, t, n) {
  var _a3, _b2;
  if (!n || Ra(e) || Ra(t)) return null;
  const a = (_a3 = n.get(e)) == null ? void 0 : _a3.get(t);
  if (typeof a == "boolean") return a;
  const l = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof l == "boolean" ? l : null;
}
function $t(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return false;
  const l = n1(e, t, n);
  return l || (t1(e, t, n, true), a.every((o) => $t(e[o], t[o], n)));
}
function ah(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Wo = "cubic-bezier(0.4, 0, 0.2, 1)", tv = "cubic-bezier(0.0, 0, 0.2, 1)", nv = "cubic-bezier(0.4, 0, 1, 1)", a1 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function yn(e, t, n) {
  return Object.keys(e).filter((a) => xc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ci(e[l], o, n(o)), a), {});
}
function Mr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? l1(e) : Ic(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function or(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Ic(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Ic(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function l1(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function o1(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function i1(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function ae(e) {
  const t = Ct("useRender");
  t.render = e;
}
function r1(e, t) {
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
    function y() {
      l = Date.now(), a = setTimeout(r, t), e(...c);
    }
    o ? v >= t ? y() : n.trailing && (a = setTimeout(y, t - v)) : (o = true, n.leading && y());
  };
  return s.clear = r, s.immediate = e, s;
}
const Ie = [String, Function, Object, Array], ru = Symbol.for("vuetify:icons"), Er = j({ icon: { type: Ie }, tag: { type: [String, Object, Function], required: true } }, "icon"), su = te()({ name: "VComponentIcon", props: Er(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return g(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? g(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), Pc = en({ name: "VSvgIcon", inheritAttrs: false, props: Er(), setup(e, t) {
  let { attrs: n } = t;
  return () => g(e.tag, q(n, { style: null }), { default: () => [x("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? x("path", { d: a[0], "fill-opacity": a[1] }, null) : x("path", { d: a }, null)) : x("path", { d: e.icon }, null)])] });
} }), s1 = en({ name: "VLigatureIcon", props: Er(), setup(e) {
  return () => g(e.tag, null, { default: () => [e.icon] });
} }), Tc = en({ name: "VClassIcon", props: Er(), setup(e) {
  return () => g(e.tag, { class: ne(e.icon) }, null);
} }), u1 = (e) => {
  const t = Ge(ru);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const a = ut(e);
    if (!a) return { component: su };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: Pc, icon: l };
    if (typeof l != "string") return { component: su, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, c1 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, d1 = { component: (e) => ya(Tc, { ...e, class: "mdi" }) };
function f1() {
  return { svg: { component: Pc }, class: { component: Tc } };
}
function v1(e) {
  const t = f1(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = d1), zt({ defaultSet: n, sets: t, aliases: { ...c1, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Ot(e, t) {
  let n;
  function a() {
    n = jl(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  se(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), St(() => {
    n == null ? void 0 : n.stop();
  });
}
function Ce(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = Ct("useProxiedModel"), i = O(e[t] !== void 0 ? e[t] : n), r = nl(t), u = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  Ot(() => !u.value, () => {
    se(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = _({ get() {
    const d = e[t];
    return a(u.value ? d : i.value);
  }, set(d) {
    const f = l(d), v = Me(u.value ? e[t] : i.value);
    v === f || a(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const m1 = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, av = "$vuetify.", lv = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), lh = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(av)) return lv(a, o);
  const r = a.replace(av, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ul(s, r, null);
  return c || (`${a}${e.value}`, c = ul(u, r, null)), c || (c = a), typeof c != "string" && (c = a), lv(c, o);
};
function Ac(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function oh(e, t) {
  return Ac(e, t)(0.1).includes(",") ? "," : ".";
}
function Ps(e, t, n) {
  const a = Ce(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, se(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function ih(e) {
  return (t) => {
    const n = Ps(t, "locale", e.current), a = Ps(t, "fallback", e.fallback), l = Ps(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => oh(n, a)), t: lh(n, a, l), n: Ac(n, a), provide: ih({ current: n, fallback: a, messages: l }) };
  };
}
function g1(e) {
  const t = re((e == null ? void 0 : e.locale) ?? "en"), n = re((e == null ? void 0 : e.fallback) ?? "en"), a = O({ en: m1, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? oh(t, n)), t: lh(t, n, a), n: Ac(t, n), provide: ih({ current: t, fallback: n, messages: a }) };
}
const Jl = Symbol.for("vuetify:locale");
function h1(e) {
  return e.name != null;
}
function y1(e) {
  const t = (e == null ? void 0 : e.adapter) && h1(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : g1(e), n = p1(t, e);
  return { ...t, ...n };
}
function lt() {
  const e = Ge(Jl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function rh(e) {
  const t = Ge(Jl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = S1(n, t.rtl, e), l = { ...n, ...a };
  return ft(Jl, l), l;
}
function b1() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function p1(e, t) {
  const n = O((t == null ? void 0 : t.rtl) ?? b1()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function S1(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function Tt() {
  const e = Ge(Jl);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function fi(e) {
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
function x1(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = sh(e), i = uh(e), r = n ?? ((_a3 = fi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
function Do(e, t, n) {
  var _a3;
  let a = (n ?? ((_a3 = fi(t)) == null ? void 0 : _a3.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
  return l;
}
function k1(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = fi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function sh(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function uh(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function w1(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const C1 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function ch(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (C1.test(e)) return w1(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const ov = new Date(2e3, 0, 2);
function _1(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = fi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Wn(7).map((l) => {
    const o = new Date(ov);
    return o.setDate(ov.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function V1(e, t, n, a) {
  const l = ch(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function I1(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Lf(String(n.getMonth() + 1), 2, "0"), o = Lf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function P1(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function T1(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function A1(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function ll(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function D1(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function M1(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function jo(e) {
  return e.getFullYear();
}
function E1(e) {
  return e.getMonth();
}
function B1(e, t, n, a) {
  const l = fi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? $1(e, t, o, a) : R1(e, t, o, i);
}
function $1(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Do(e, t, n), i = ll(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = jo(o);
  s < jo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? ll(u, -c) : ll(u, 7 - c);
  return 1 + rr(Dc(o), Uo(d), "weeks");
}
function R1(e, t, n, a) {
  const l = Do(e, t, n), o = ll(Do(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - rr(f, Do(f, t, n), "days");
  }
  let r = jo(l);
  r < jo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? ll(s, u - 7) : ll(s, u);
  return 1 + rr(Dc(l), Uo(c), "weeks");
}
function F1(e) {
  return e.getDate();
}
function L1(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function O1(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function N1(e) {
  return e.getHours();
}
function H1(e) {
  return e.getMinutes();
}
function z1(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function W1(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function j1(e, t) {
  return ir(e, t[0]) && Y1(e, t[1]);
}
function U1(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function ir(e, t) {
  return e.getTime() > t.getTime();
}
function G1(e, t) {
  return ir(Uo(e), Uo(t));
}
function Y1(e, t) {
  return e.getTime() < t.getTime();
}
function iv(e, t) {
  return e.getTime() === t.getTime();
}
function K1(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function X1(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function q1(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function rr(e, t, n) {
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
function Z1(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function J1(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function Q1(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function eC(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function tC(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Uo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Dc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class nC {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return ch(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return I1(this, t);
  }
  parseISO(t) {
    return P1(t);
  }
  addMinutes(t, n) {
    return T1(t, n);
  }
  addHours(t, n) {
    return A1(t, n);
  }
  addDays(t, n) {
    return ll(t, n);
  }
  addWeeks(t, n) {
    return D1(t, n);
  }
  addMonths(t, n) {
    return M1(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return x1(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Do(t, this.locale, a);
  }
  endOfWeek(t) {
    return k1(t, this.locale);
  }
  startOfMonth(t) {
    return sh(t);
  }
  endOfMonth(t) {
    return uh(t);
  }
  format(t, n) {
    return V1(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return iv(t, n);
  }
  isValid(t) {
    return U1(t);
  }
  isWithinRange(t, n) {
    return j1(t, n);
  }
  isAfter(t, n) {
    return ir(t, n);
  }
  isAfterDay(t, n) {
    return G1(t, n);
  }
  isBefore(t, n) {
    return !ir(t, n) && !iv(t, n);
  }
  isSameDay(t, n) {
    return K1(t, n);
  }
  isSameMonth(t, n) {
    return X1(t, n);
  }
  isSameYear(t, n) {
    return q1(t, n);
  }
  setMinutes(t, n) {
    return J1(t, n);
  }
  setHours(t, n) {
    return Z1(t, n);
  }
  setMonth(t, n) {
    return Q1(t, n);
  }
  setDate(t, n) {
    return eC(t, n);
  }
  setYear(t, n) {
    return tC(t, n);
  }
  getDiff(t, n, a) {
    return rr(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return _1(this.locale, a, n);
  }
  getYear(t) {
    return jo(t);
  }
  getMonth(t) {
    return E1(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return B1(t, this.locale, l, o);
  }
  getDate(t) {
    return F1(t);
  }
  getNextMonth(t) {
    return L1(t);
  }
  getPreviousMonth(t) {
    return O1(t);
  }
  getHours(t) {
    return N1(t);
  }
  getMinutes(t) {
    return H1(t);
  }
  startOfDay(t) {
    return Uo(t);
  }
  endOfDay(t) {
    return Dc(t);
  }
  startOfYear(t) {
    return z1(t);
  }
  endOfYear(t) {
    return W1(t);
  }
}
const dh = Symbol.for("vuetify:date-options"), rv = Symbol.for("vuetify:date-adapter");
function aC(e, t) {
  const n = zt({ adapter: nC, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: vh(n, t) };
}
function lC(e, t, n) {
  const a = fh(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function fh(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function vh(e, t) {
  const n = Bt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return se(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function bl() {
  const e = Ge(dh);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = lt();
  return vh(e, t);
}
const Br = ["sm", "md", "lg", "xl", "xxl"], uu = Symbol.for("vuetify:display"), sv = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, oC = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sv;
  return zt(sv, e);
};
function uv(e) {
  return nt && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function cv(e) {
  return nt && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function dv(e) {
  const t = nt && !e ? window.navigator.userAgent : "ssr";
  function n(y) {
    return !!t.match(y);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: mw, ssr: t === "ssr" };
}
function iC(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = oC(e), l = re(cv(t)), o = re(dv(t)), i = Bt({}), r = re(uv(t));
  function s() {
    l.value = cv(), r.value = uv();
  }
  function u() {
    s(), o.value = dv();
  }
  return mt(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), y = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, h = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : y ? "xl" : "xxl", b = typeof a == "number" ? a : n[a], k = r.value < b;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = y, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || y || m), i.mdAndDown = !(v || y || m), i.lgAndDown = !(y || m), i.xlAndDown = !m, i.name = h, i.height = l.value, i.width = r.value, i.mobile = k, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), nt && (window.addEventListener("resize", s, { passive: true }), St(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...ao(i), update: u, ssr: !!t };
}
const pl = j({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function xn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  const n = Ge(uu);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const mh = Symbol.for("vuetify:goto");
function gh() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: a1 };
}
function rC(e) {
  return Mc(e) ?? (document.scrollingElement || document.body);
}
function Mc(e) {
  return typeof e == "string" ? document.querySelector(e) : Sc(e);
}
function Ts(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = Mc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function sC(e, t) {
  return { rtl: t.isRtl, options: zt(gh(), e) };
}
async function fv(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = zt((a == null ? void 0 : a.options) ?? gh(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : Mc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : rC(o.container), u = Gn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = Ts(r, n, i);
  else if (c = Ts(r, n, i) - Ts(s, n, i), o.layout) {
    const y = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    y && (c -= parseInt(y, 10));
  }
  c += o.offset, c = cC(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function y(m) {
    const b = (m - f) / o.duration, k = Math.floor(d + (c - d) * u(tt(b, 0, 1)));
    if (s[l] = k, b >= 1 && Math.abs(k - s[l]) < 10) return v(c);
    if (b > 2) return v(s[l]);
    requestAnimationFrame(y);
  }));
}
function uC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Ge(mh), { isRtl: n } = Tt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return fv(o, zt(e, i), false, a);
  }
  return l.horizontal = async (o, i) => fv(o, zt(e, i), true, a), l;
}
function cC(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), tt(t, s, u);
}
const Go = Symbol.for("vuetify:theme"), Ke = j({ theme: String }, "theme");
function vv() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function dC() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vv();
  const t = vv();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = zt(o, l);
  }
  return zt(t, { ...e, themes: n });
}
function qa(e, t, n, a) {
  e.push(`${gC(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function mv(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = hn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${iu(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? hn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function fC(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? Yw : Kw;
    for (const i of Wn(n[l], 1)) a[`${e}-${l}-${i}`] = Qg(o(hn(t), i));
  }
  return a;
}
function vC(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...fC(a, l, t) });
  }
  return n;
}
function mC(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = hn(e[n]);
    t[a] = nh(l);
  }
  return t;
}
function gC(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function hC(e, t, n) {
  const a = yC(e, t);
  a && (a.innerHTML = n);
}
function yC(e, t) {
  if (!nt) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function bC(e) {
  const t = dC(e), n = re(t.defaultTheme), a = O(t.themes), l = re("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(b) {
    n.value = b;
  } }), i = _(() => {
    const b = {};
    for (const [k, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...vC(I.colors, t.variations) };
      b[k] = { ...I, colors: { ...V, ...mC(V) } };
    }
    return b;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = _(() => {
    var _a3;
    const b = [], k = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && qa(b, ":root", ["color-scheme: dark"], t.scope), qa(b, ":root", mv(r.value, t.prefix), t.scope);
    for (const [S, p] of Object.entries(i.value)) qa(b, `.${t.prefix}theme--${S}`, [`color-scheme: ${p.dark ? "dark" : "normal"}`, ...mv(p, t.prefix)], t.scope);
    if (t.utilities) {
      const S = [], p = [], C = new Set(Object.values(i.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of C) w.startsWith("on-") ? qa(p, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${k}`], t.scope) : (qa(S, `.${I}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${k}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${k}`], t.scope), qa(p, `.${I}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${k}`], t.scope), qa(p, `.${I}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? b.push(`@layer background {
`, ...S.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...p.map((w) => `  ${w}`), `}
`) : b.push(...S, ...p);
    }
    let V = b.map((S, p) => p === 0 ? S : `    ${S}`).join("");
    return t.layers && (V = `@layer vuetify.theme {
` + b.map((S) => `  ${S}`).join("") + `
}`), V;
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
  if (pc) {
    let k = function() {
      l.value = b.matches ? "dark" : "light";
    };
    const b = window.matchMedia("(prefers-color-scheme: dark)");
    k(), b.addEventListener("change", k, { passive: true }), sm() && St(() => {
      b.removeEventListener("change", k);
    });
  }
  function f(b) {
    if (t.isDisabled) return;
    const k = b._context.provides.usehead;
    if (k) {
      let I = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (k.push) {
        const V = k.push(I);
        nt && se(u, () => {
          V.patch(I);
        });
      } else nt ? (k.addHeadObjs(B(I)), mt(() => k.updateDOM())) : k.addHeadObjs(I());
    } else {
      let I = function() {
        hC(t.stylesheetId, t.cspNonce, u.value);
      };
      nt ? se(u, I, { immediate: true }) : I();
    }
  }
  function v(b) {
    b !== "system" && !d.value.includes(b) || (o.value = b);
  }
  function y() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const k = b.indexOf(o.value), I = k === -1 ? 0 : (k + 1) % b.length;
    v(b[I]);
  }
  function m() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    y(b);
  }
  const h = new Proxy(o, { get(b, k) {
    return Reflect.get(b, k);
  }, set(b, k, I) {
    return k === "value" && Rg(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(b, k, I);
  } });
  return { install: f, change: v, cycle: y, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: h, current: r } };
}
function Je(e) {
  Ct("provideTheme");
  const t = Ge(Go, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return ft(Go, o), o;
}
function $r() {
  Ct("useTheme");
  const e = Ge(Go, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = zo(), a = O();
  if (nt) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Ut(() => {
      l.disconnect();
    }), se(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: rl(a) };
}
const Yo = Symbol.for("vuetify:layout"), hh = Symbol.for("vuetify:layout-item"), gv = 1e3, yh = j({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), Sl = j({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function bh() {
  const e = Ge(Yo);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function xl(e) {
  const t = Ge(Yo);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Ft()}`, a = Ct("useLayoutItem");
  ft(hh, { id: n });
  const l = re(false);
  ic(() => l.value = true), zm(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return Ut(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const pC = (e, t, n, a) => {
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
function ph(e) {
  const t = Ge(Yo, null), n = _(() => t ? t.rootZIndex.value - 100 : gv), a = O([]), l = Bt(/* @__PURE__ */ new Map()), o = Bt(/* @__PURE__ */ new Map()), i = Bt(/* @__PURE__ */ new Map()), r = Bt(/* @__PURE__ */ new Map()), s = Bt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = Vn(), d = _(() => {
    const p = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const w of C.filter((T) => T.includes(":"))) {
      const [T, P] = w.split(":");
      if (!a.value.includes(T) || !a.value.includes(P)) continue;
      const M = l.get(T), D = l.get(P), E = o.get(T), A = o.get(P);
      !M || !D || !E || !A || (p.set(P, { position: M.value, amount: parseInt(E.value, 10) }), p.set(T, { position: D.value, amount: -parseInt(A.value, 10) }));
    }
    return p;
  }), f = _(() => {
    const p = [...new Set([...i.values()].map((w) => w.value))].sort((w, T) => w - T), C = [];
    for (const w of p) {
      const T = a.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === w;
      });
      C.push(...T);
    }
    return pC(C, l, o, r);
  }), v = _(() => !Array.from(s.values()).some((p) => p.value)), y = _(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": ve(y.value.left), "--v-layout-right": ve(y.value.right), "--v-layout-top": ve(y.value.top), "--v-layout-bottom": ve(y.value.bottom), ...v.value ? void 0 : { transition: "none" } })), h = _(() => f.value.slice(1).map((p, C) => {
    let { id: w } = p;
    const { layer: T } = f.value[C], P = o.get(w), M = l.get(w);
    return { id: w, ...T, size: Number(P.value), position: M.value };
  })), b = (p) => h.value.find((C) => C.id === p), k = Ct("createLayout"), I = re(false);
  return Pt(() => {
    I.value = true;
  }), ft(Yo, { register: (p, C) => {
    let { id: w, order: T, position: P, layoutSize: M, elementSize: D, active: E, disableTransitions: A, absolute: R } = C;
    i.set(w, T), l.set(w, P), o.set(w, M), r.set(w, E), A && s.set(w, A);
    const N = Fl(hh, k == null ? void 0 : k.vnode).indexOf(p);
    N > -1 ? a.value.splice(N, 0, w) : a.value.push(w);
    const Y = _(() => h.value.findIndex((W) => W.id === w)), H = _(() => n.value + f.value.length * 2 - Y.value * 2), F = _(() => {
      const W = P.value === "left" || P.value === "right", L = P.value === "right", U = P.value === "bottom", ie = D.value ?? M.value, Se = ie === 0 ? "%" : "px", K = { [P.value]: 0, zIndex: H.value, transform: `translate${W ? "X" : "Y"}(${(E.value ? 0 : -(ie === 0 ? 100 : ie)) * (L || U ? -1 : 1)}${Se})`, position: R.value || n.value !== gv ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!I.value) return K;
      const fe = h.value[Y.value], Te = d.value.get(w);
      return Te && (fe[Te.position] += Te.amount), { ...K, height: W ? `calc(100% - ${fe.top}px - ${fe.bottom}px)` : D.value ? `${D.value}px` : void 0, left: L ? void 0 : `${fe.left}px`, right: L ? `${fe.right}px` : void 0, top: P.value !== "bottom" ? `${fe.top}px` : void 0, bottom: P.value !== "top" ? `${fe.bottom}px` : void 0, width: W ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${fe.left}px - ${fe.right}px)` };
    }), Z = _(() => ({ zIndex: H.value - 1 }));
    return { layoutItemStyles: F, layoutItemScrimStyles: Z, zIndex: H };
  }, unregister: (p) => {
    i.delete(p), l.delete(p), o.delete(p), r.delete(p), s.delete(p), a.value = a.value.filter((C) => C !== p);
  }, mainRect: y, mainStyles: m, getLayoutItem: b, items: h, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: b, items: h, layoutRect: c, layoutRef: u };
}
const SC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function hv(e) {
  const t = e.toLowerCase();
  return SC[t] || t;
}
function Sh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(hv(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [hv(e)], separators: o } : { keys: l, separators: o };
}
function xC(e) {
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
  return i.every((u) => Sh(u).keys.length > 0) ? i : [];
}
function xh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = zt(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = jl();
  return r.run(() => {
    const s = Zw(a.defaults), u = iC(a.display, a.ssr), c = bC(a.theme), d = v1(a.icons), f = y1(a.locale), v = aC(a.date, f), y = sC(a.goTo, f);
    function m(b) {
      for (const I in i) b.directive(I, i[I]);
      for (const I in o) b.component(I, o[I]);
      for (const I in l) b.component(I, en({ ...l[I], name: I, aliasName: l[I].name }));
      const k = jl();
      if (k.run(() => {
        c.install(b);
      }), b.onUnmount(() => k.stop()), b.provide(Zl, s), b.provide(uu, u), b.provide(Go, c), b.provide(ru, d), b.provide(Jl, f), b.provide(dh, v.options), b.provide(rv, v.instance), b.provide(mh, y), nt && a.ssr) if (b.$nuxt) b.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: I } = b;
        b.mount = function() {
          const V = I(...arguments);
          return Ee(() => u.update()), b.mount = I, V;
        };
      }
      b.mixin({ computed: { $vuetify() {
        return Bt({ defaults: Dl.call(this, Zl), display: Dl.call(this, uu), theme: Dl.call(this, Go), icons: Dl.call(this, ru), locale: Dl.call(this, Jl), date: Dl.call(this, rv) });
      } } });
    }
    function h() {
      r.stop();
    }
    return { install: m, unmount: h, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: y };
  });
}
const kC = "3.12.1";
xh.version = kC;
function Dl(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const wC = j({ ...xe(), ...Ne(yh(), ["fullHeight"]), ...Ke() }, "VApp"), CC = te()({ name: "VApp", props: wC(), setup(e, t) {
  let { slots: n } = t;
  const a = Je(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = ph({ ...e, fullHeight: true }), { rtlClasses: s } = Tt();
  return ae(() => {
    var _a3;
    return x("div", { ref: r, class: ne(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: me([e.style]) }, [x("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), $e = j({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), kh = j({ text: String, ...xe(), ...$e() }, "VToolbarTitle"), Ec = te()({ name: "VToolbarTitle", props: kh(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = !!(n.default || n.text || e.text);
    return g(e.tag, { class: ne(["v-toolbar-title", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [a && x("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), _C = j({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function kn(e, t, n) {
  return te()({ name: e, props: _C({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? dc : $a;
      return ya(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function Bc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return te()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Gn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? dc : $a;
    return () => ya(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function $c() {
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
const VC = j({ target: [Object, Array] }, "v-dialog-transition"), As = /* @__PURE__ */ new WeakMap(), Rr = te()({ name: "VDialogTransition", props: VC(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = bv(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (As.set(l, i), Gn()) oa(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: tv }).finished.then(() => o());
    else {
      const f = oa(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: tv });
      (_a3 = yv(l)) == null ? void 0 : _a3.forEach((v) => {
        oa(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Wo });
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
    !As.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = bv(e.target, l) : i = As.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    Gn() ? oa(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: nv }).finished.then(() => o()) : (oa(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: nv }).finished.then(() => o()), (_a3 = yv(l)) == null ? void 0 : _a3.forEach((v) => {
      oa(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Wo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? g($a, q({ name: "dialog-transition" }, a, { css: false }), n) : g($a, { name: "dialog-transition" }, n);
} });
function yv(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function bv(e, t) {
  const n = Yg(e), a = wc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((b) => parseFloat(b)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, y = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), h = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: y, speed: h };
}
const IC = kn("fab-transition", "center center", "out-in"), PC = kn("dialog-bottom-transition"), TC = kn("dialog-top-transition"), Ko = kn("fade-transition"), Rc = kn("scale-transition"), AC = kn("scroll-x-transition"), DC = kn("scroll-x-reverse-transition"), MC = kn("scroll-y-transition"), EC = kn("scroll-y-reverse-transition"), BC = kn("slide-x-transition"), $C = kn("slide-x-reverse-transition"), Fc = kn("slide-y-transition"), RC = kn("slide-y-reverse-transition"), Fr = Bc("expand-transition", $c()), Lc = Bc("expand-x-transition", $c("", "x")), FC = Bc("expand-both-transition", $c("", "both")), LC = j({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Re = te(false)({ name: "VDefaultsProvider", props: LC(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = ao(e);
  return yt(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), _t = j({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Vt(e) {
  return { dimensionStyles: _(() => {
    const n = {}, a = ve(e.height), l = ve(e.maxHeight), o = ve(e.maxWidth), i = ve(e.minHeight), r = ve(e.minWidth), s = ve(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function OC(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const wh = j({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...xe(), ..._t() }, "VResponsive"), cu = te()({ name: "VResponsive", props: wh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = OC(e), { dimensionStyles: l } = Vt(e);
  return ae(() => {
    var _a3;
    return x("div", { class: ne(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: me([l.value, e.style]) }, [x("div", { class: "v-responsive__sizer", style: me(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && x("div", { class: ne(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function Oc(e) {
  return kc(() => {
    const { class: t, style: n } = Ch(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Rt(e) {
  const { colorClasses: t, colorStyles: n } = Oc(() => ({ text: ut(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Qe(e) {
  const { colorClasses: t, colorStyles: n } = Oc(() => ({ background: ut(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function NC(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Ch(e) {
  const t = NC(ut(e)), n = [], a = {};
  if (t.background) if (lu(t.background)) {
    if (a.backgroundColor = t.background, !t.text && Ww(t.background)) {
      const l = hn(t.background);
      if (l.a == null || l.a === 1) {
        const o = nh(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (lu(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const dt = j({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  return { roundedClasses: _(() => {
    const a = wt(e) ? e.value : e.rounded, l = wt(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const pa = j({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Qt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? dc : $a, ...s } = cl(a) ? a : {};
  let u;
  return cl(a) ? u = q(s, _w({ disabled: l, group: o }), i) : u = q({ name: l || !a ? "" : a }, i), ya(r, u, n);
};
function pv(e, t) {
  if (!bc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? du(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function du(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const $n = { mounted: pv, unmounted: du, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (du(e, t), pv(e, t));
} }, _h = j({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...wh(), ...xe(), ...dt(), ...pa() }, "VImg"), ma = te()({ name: "VImg", directives: { vIntersect: $n }, props: _h(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.color), { roundedClasses: i } = gt(e), r = Ct("VImg"), s = re(""), u = O(), c = re(e.eager ? "loading" : "idle"), d = re(), f = re(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = _(() => v.value.aspect || d.value / f.value || 0);
  se(() => e.src, () => {
    m(c.value !== "idle");
  }), se(y, (D, E) => {
    !D && E && u.value && V(u.value);
  }), lo(() => m());
  function m(D) {
    if (!(e.eager && D) && !(bc && !D && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const E = new Image();
        E.src = v.value.lazySrc, V(E, null);
      }
      v.value.src && Ee(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || b(), c.value === "error") return;
            y.value || V(u.value, null), c.value === "loading" && h();
          } else y.value || V(u.value), k();
        });
      });
    }
  }
  function h() {
    var _a3;
    r.isUnmounted || (k(), V(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function b() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function k() {
    const D = u.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let I = -1;
  Ut(() => {
    clearTimeout(I);
  });
  function V(D) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const A = () => {
      if (clearTimeout(I), r.isUnmounted) return;
      const { naturalHeight: R, naturalWidth: G } = D;
      R || G ? (d.value = G, f.value = R) : !D.complete && c.value === "loading" && E != null ? I = window.setTimeout(A, E) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    A();
  }
  const S = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), p = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const D = x("img", { class: ne(["v-img__img", S.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: h, onError: b }, null), E = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return g(Qt, { transition: e.transition, appear: true }, { default: () => [at(E ? x("picture", { class: "v-img__picture" }, [E, D]) : D, [[Fn, c.value === "loaded"]])] });
  }, C = () => g(Qt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && x("img", { class: ne(["v-img__img", "v-img__img--preload", S.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => a.placeholder ? g(Qt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && x("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, T = () => a.error ? g(Qt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && x("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? x("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, M = re(false);
  {
    const D = se(y, (E) => {
      E && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          M.value = true;
        });
      }), D());
    });
  }
  return ae(() => {
    const D = cu.filterProps(e);
    return at(g(cu, q({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !M.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ve(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => x(be, null, [g(p, null, null), g(C, null, null), g(P, null, null), g(w, null, null), g(T, null, null)]), default: a.default }), [[$n, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), Gt = j({ border: [Boolean, Number, String] }, "border");
function tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  return { borderClasses: _(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const It = j({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function Dt(e) {
  return { elevationClasses: B(() => {
    const n = wt(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const Sv = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Qn = j({ location: String }, "location");
function ja(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = Tt();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = nu(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[Sv[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[Sv[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const HC = [null, "prominent", "default", "comfortable", "compact"], Vh = j({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => HC.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Gt(), ...xe(), ...It(), ...Qn(), ...dt(), ...$e({ tag: "header" }), ...Ke() }, "VToolbar"), fu = te()({ name: "VToolbar", props: Vh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Qe(() => e.color), { borderClasses: o } = tn(e), { elevationClasses: i } = Dt(e), { locationStyles: r } = ja(e), { roundedClasses: s } = gt(e), { themeClasses: u } = Je(e), { rtlClasses: c } = Tt(), d = re(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return yt({ VBtn: { variant: "text" } }), ae(() => {
    var _a4;
    const y = !!(e.title || n.title), m = !!(n.image || e.image), h = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!h : e.extended, g(e.tag, { class: ne(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: me([l.value, r.value, e.style]) }, { default: () => [m && x("div", { key: "image", class: "v-toolbar__image" }, [n.image ? g(Re, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : g(ma, { key: "image-img", cover: true, src: e.image }, null)]), g(Re, { defaults: { VTabs: { height: ve(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [x("div", { class: "v-toolbar__content", style: { height: ve(f.value) } }, [n.prepend && x("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), y && g(Ec, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && x("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), g(Re, { defaults: { VTabs: { height: ve(v.value) } } }, { default: () => [g(Fr, null, { default: () => [d.value && x("div", { class: "v-toolbar__extension", style: { height: ve(v.value) } }, [h])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), zC = j({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function WC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = O(null), r = re(0), s = re(0), u = re(0), c = re(false), d = re(false), f = re(false), v = re(false), y = re(true), m = _(() => Number(e.scrollThreshold)), h = _(() => tt((m.value - r.value) / m.value || 0));
  function b(S) {
    const p = "window" in S ? window.innerHeight : S.clientHeight, C = "window" in S ? document.documentElement.scrollHeight : S.scrollHeight;
    return { clientHeight: p, scrollHeight: C };
  }
  function k() {
    const S = i.value;
    if (!S) return;
    const { clientHeight: p, scrollHeight: C } = b(S), w = C - p, T = (a == null ? void 0 : a.value) || 0, P = m.value + T;
    y.value = w > P;
  }
  function I() {
    k();
  }
  function V() {
    const S = i.value;
    if (!S || n && !n.value) return;
    l = r.value, r.value = "window" in S ? S.pageYOffset : S.scrollTop;
    const p = S instanceof Window ? document.documentElement.scrollHeight : S.scrollHeight;
    o !== p && (p > o && k(), o = p), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: w } = b(S), T = r.value + C >= w - 5;
    !d.value && T && r.value >= m.value && y.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, M = r.value <= 5;
    (d.value && l - r.value > 1 && !T || P && r.value < m.value || M) && (v.value = false), f.value = T;
  }
  return se(d, () => {
    s.value = s.value || r.value;
  }), se(c, () => {
    s.value = 0;
  }), Pt(() => {
    se(() => e.scrollTarget, (S) => {
      var _a3;
      const p = S ? document.querySelector(S) : window;
      p && p !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), i.value = p, i.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        k();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), Ut(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && se(n, V, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: h, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: y };
}
function kl() {
  const e = re(false);
  return Pt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: rl(e) };
}
const jC = j({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Ne(Vh(), ["location"]), ...Sl(), ...zC(), height: { type: [Number, String], default: 64 } }, "VAppBar"), UC = te()({ name: "VAppBar", props: jC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = O(), l = Ce(e, "modelValue"), o = _(() => {
    var _a3;
    const p = new Set(((_a3 = e.scrollBehavior) == null ? void 0 : _a3.split(" ")) ?? []);
    return { hide: p.has("hide"), fullyHide: p.has("fully-hide"), inverted: p.has("inverted"), collapse: p.has("collapse"), elevate: p.has("elevate"), fadeImage: p.has("fade-image") };
  }), i = _(() => {
    const p = o.value;
    return p.hide || p.fullyHide || p.inverted || p.collapse || p.elevate || p.fadeImage || !l.value;
  }), r = _(() => {
    var _a3, _b2;
    const p = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return p + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: y } = WC(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), h = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), b = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), k = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const p = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || o.value.fullyHide ? p + C : p : p + C;
  });
  Ot(() => !!e.scrollBehavior, () => {
    mt(() => {
      if (!m.value) {
        l.value = true;
        return;
      }
      if (o.value.inverted) {
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
  const { ssrBootStyles: V } = kl(), { layoutItemStyles: S } = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: I, elementSize: re(void 0), active: l, absolute: B(() => e.absolute) });
  return ae(() => {
    const p = Ne(fu.filterProps(e), ["location"]);
    return g(fu, q({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...S.value, "--v-toolbar-image-opacity": k.value, height: void 0, ...V.value }, e.style] }, p, { collapse: h.value, flat: b.value }), n);
  }), {};
} }), GC = [null, "default", "comfortable", "compact"], bt = j({ density: { type: String, default: "default", validator: (e) => GC.includes(e) } }, "density");
function Ht(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const YC = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Sa(e, t) {
  return x(be, null, [e && x("span", { key: "overlay", class: ne(`${t}__overlay`) }, null), x("span", { key: "underlay", class: ne(`${t}__underlay`) }, null)]);
}
const wn = j({ color: String, variant: { type: String, default: "elevated", validator: (e) => YC.includes(e) } }, "variant");
function xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  const n = B(() => {
    const { variant: o } = ut(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = Oc(() => {
    const { variant: o, color: i } = ut(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const Ih = j({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Gt(), ...xe(), ...bt(), ...It(), ...dt(), ...$e(), ...Ke(), ...wn() }, "VBtnGroup"), vu = te()({ name: "VBtnGroup", props: Ih(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { densityClasses: l } = Ht(e), { borderClasses: o } = tn(e), { elevationClasses: i } = Dt(e), { roundedClasses: r } = gt(e);
  yt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ae(() => g(e.tag, { class: ne(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: me(e.style) }, n));
} }), wl = j({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Cl = j({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Fa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = Ct("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ft();
  ft(Symbol.for(`${t.description}:id`), l);
  const o = Ge(t, null);
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
  s(), Ut(() => u());
  const c = _(() => o.isSelected(l)), d = _(() => o.items.value[0].id === l), f = _(() => o.items.value[o.items.value.length - 1].id === l), v = _(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return se(c, (y) => {
    a.emit("group:selected", { value: y });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (y) => o.select(l, y), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Ua(e, t) {
  let n = false;
  const a = Bt([]), l = Ce(e, "modelValue", [], (f) => f === void 0 ? [] : Ph(a, f === null ? [null] : ct(f)), (f) => {
    const v = XC(a, f);
    return e.multiple ? v : v[0];
  }), o = Ct("useGroup");
  function i(f, v) {
    const y = f, m = Symbol.for(`${t.description}:id`), b = Fl(m, o == null ? void 0 : o.vnode).indexOf(v);
    Xe(y.value) === void 0 && (y.value = b, y.useIndexAsValue = true), b > -1 ? a.splice(b, 0, y) : a.push(y);
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
  Pt(() => {
    s();
  }), Ut(() => {
    n = true;
  }), kr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const y = a.find((m) => m.id === f);
    if (!(v && (y == null ? void 0 : y.disabled))) if (e.multiple) {
      const m = l.value.slice(), h = m.findIndex((k) => k === f), b = ~h;
      if (v = v ?? !b, b && e.mandatory && m.length <= 1 || !b && e.max != null && m.length + 1 > e.max) return;
      h < 0 && v ? m.push(f) : h >= 0 && !v && m.splice(h, 1), l.value = m;
    } else {
      const m = l.value.includes(f);
      if (e.mandatory && m || !m && !v) return;
      l.value = v ?? !m ? [f] : [];
    }
  }
  function c(f) {
    if (e.multiple, l.value.length) {
      const v = l.value[0], y = a.findIndex((b) => b.id === v);
      let m = (y + f) % a.length, h = a[m];
      for (; h.disabled && m !== y; ) m = (m + f) % a.length, h = a[m];
      if (h.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((y) => !y.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => KC(a, f) };
  return ft(t, d), d;
}
function KC(e, t) {
  const n = Ph(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Ph(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => $t(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function XC(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Nc = Symbol.for("vuetify:v-btn-toggle"), qC = j({ ...Ih(), ...wl() }, "VBtnToggle"), ZC = te()({ name: "VBtnToggle", props: qC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Ua(e, Nc);
  return ae(() => {
    const s = vu.filterProps(e);
    return g(vu, q({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), JC = ["x-small", "small", "default", "large", "x-large"], ea = j({ size: { type: [String, Number], default: "default" } }, "size");
function oo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  return kc(() => {
    const n = e.size;
    let a, l;
    return nr(JC, n) ? a = `${t}--size-${n}` : n && (l = { width: ve(n), height: ve(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const QC = j({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ie, opacity: [String, Number], ...xe(), ...ea(), ...$e({ tag: "i" }), ...Ke() }, "VIcon"), qe = te()({ name: "VIcon", props: QC(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = re(), { themeClasses: o } = $r(), { iconData: i } = u1(() => l.value || e.icon), { sizeClasses: r } = oo(e), { textColorClasses: s, textColorStyles: u } = Rt(() => e.color);
  return ae(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = zg(c).filter((f) => f.type === ri && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return g(i.value.component, { tag: e.tag, icon: i.value.icon, class: ne(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: me([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function vi(e, t) {
  const n = O(), a = re(false);
  if (bc) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    St(() => {
      l.disconnect();
    }), se(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const e_ = j({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function t_(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = re(e.reveal ? "initial" : "disabled");
  return Pt(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const n_ = j({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...xe(), ...e_(), ...ea(), ...$e({ tag: "div" }), ...Ke() }, "VProgressCircular"), La = te()({ name: "VProgressCircular", props: n_(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = O(), { themeClasses: i } = Je(e), { sizeClasses: r, sizeStyles: s } = oo(e), { textColorClasses: u, textColorStyles: c } = Rt(() => e.color), { textColorClasses: d, textColorStyles: f } = Rt(() => e.bgColor), { intersectionRef: v, isIntersecting: y } = vi(), { resizeRef: m, contentRect: h } = Vn(), { state: b, duration: k } = t_(e), I = B(() => b.value === "initial" ? 0 : tt(parseFloat(e.modelValue), 0, 100)), V = B(() => Number(e.width)), S = B(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(V.value, 32)), p = B(() => a / (1 - V.value / S.value) * 2), C = B(() => V.value / S.value * p.value), w = B(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? ve(Math.min(l - 0.01, P + C.value)) : ve(P);
  }), T = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return mt(() => {
    v.value = o.value, m.value = o.value;
  }), ae(() => g(e.tag, { ref: o, class: ne(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": y.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Gn()), "v-progress-circular--revealing": ["initial", "pending"].includes(b.value) }, i.value, r.value, u.value, e.class]), style: me([s.value, c.value, { "--progress-reveal-duration": `${k.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [x("svg", { style: { transform: `rotate(calc(-90deg + ${T.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${p.value} ${p.value}` }, [x("circle", { class: ne(["v-progress-circular__underlay", d.value]), style: me(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), x("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && x("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), a_ = j({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function l_(e, t) {
  const n = B(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = ut(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), l = B(() => Number(e.chunkGap)), o = _(() => {
    if (!n.value) return {};
    const r = ve(l.value), s = ve(a.value);
    return { maskRepeat: "repeat-x", maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`, maskSize: `calc(${s} + ${r}) 100%` };
  });
  function i(r) {
    const s = ut(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return tt(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const o_ = j({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...a_(), ...xe(), ...Qn({ location: "top" }), ...dt(), ...$e(), ...Ke() }, "VProgressLinear"), Lr = te()({ name: "VProgressLinear", props: o_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = O(), l = Ce(e, "modelValue"), { isRtl: o, rtlClasses: i } = Tt(), { themeClasses: r } = Je(e), { locationStyles: s } = ja(e), { textColorClasses: u, textColorStyles: c } = Rt(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Qe(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: y } = Qe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: h } = Qe(() => e.color), { roundedClasses: b } = gt(e), { intersectionRef: k, isIntersecting: I } = vi(), V = _(() => parseFloat(e.max)), S = _(() => parseFloat(e.height)), p = _(() => tt(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => tt(parseFloat(l.value) / V.value * 100, 0, 100)), w = _(() => o.value !== e.reverse), T = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = re(0), { hasChunks: M, chunksMaskStyles: D, snapValueToChunk: E } = l_(e, P);
  Ot(M, () => {
    const { resizeRef: N } = Vn((Y) => P.value = Y[0].contentRect.width);
    mt(() => N.value = a.value);
  });
  const A = _(() => M.value ? E(p.value) : p.value), R = _(() => M.value ? E(C.value) : C.value);
  function G(N) {
    if (!k.value) return;
    const { left: Y, right: H, width: F } = k.value.getBoundingClientRect(), Z = w.value ? F - N.clientX + (H - F) : N.clientX - Y;
    l.value = Math.round(Z / F * V.value);
  }
  return mt(() => {
    k.value = a.value;
  }), ae(() => g(e.tag, { ref: a, class: ne(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, b.value, r.value, i.value, e.class]), style: me([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ve(S.value) : 0, "--v-progress-linear-height": ve(S.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && G }, { default: () => [e.stream && x("div", { key: "stream", class: ne(["v-progress-linear__stream", u.value]), style: { ...c.value, [w.value ? "left" : "right"]: ve(-S.value), borderTop: `${ve(S.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ve(S.value / 4)})`, width: ve(100 - p.value, "%"), "--v-progress-linear-stream-to": ve(S.value * (w.value ? 1 : -1)) } }, null), x("div", { class: ne(["v-progress-linear__background", d.value]), style: me([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), x("div", { class: ne(["v-progress-linear__buffer", v.value]), style: me([y.value, { opacity: parseFloat(e.bufferOpacity), width: ve(A.value, "%") }]) }, null), g($a, { name: T.value }, { default: () => [e.indeterminate ? x("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((N) => x("div", { key: N, class: ne(["v-progress-linear__indeterminate", N, m.value]), style: me(h.value) }, null))]) : x("div", { class: ne(["v-progress-linear__determinate", m.value]), style: me([h.value, { width: ve(R.value, "%") }]) }, null)] }), n.default && x("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: p.value })])] })), {};
} }), Or = j({ loading: [Boolean, String] }, "loader");
function mi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function gi(e, t) {
  var _a3;
  let { slots: n } = t;
  return x("div", { class: ne(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || g(Lr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const i_ = ["static", "relative", "fixed", "absolute", "sticky"], io = j({ position: { type: String, validator: (e) => i_.includes(e) } }, "position");
function ro(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function r_() {
  const e = Ct("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function Th() {
  var _a3, _b2;
  return (_b2 = (_a3 = Ct("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function hi(e, t) {
  const n = OS("RouterLink"), a = B(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || Nf(t, "click") || Nf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: Bt({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = _(() => e.to ? o : void 0), r = r_(), s = _(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && $t(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
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
  }), href: u, linkProps: Bt({ href: u, "aria-current": B(() => s.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && a.value ? "true" : void 0), tabindex: B(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const yi = j({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Ds = false;
function s_(e, t) {
  let n = false, a, l;
  nt && (e == null ? void 0 : e.beforeEach) && (Ee(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      Ds ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Ds = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Ds = false;
    });
  }), St(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function u_(e, t) {
  se(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ee(() => {
      t(n);
    });
  }, { immediate: true });
}
const mu = Symbol("rippleStop"), c_ = 80;
function xv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function gu(e) {
  return e.constructor.name === "TouchEvent";
}
function Ah(e) {
  return e.constructor.name === "KeyboardEvent";
}
const d_ = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Ah(e)) {
    const d = t.getBoundingClientRect(), f = gu(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, sr = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = d_(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), xv(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), xv(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function Dh(e) {
  return typeof e > "u" || !!e;
}
function Xo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[mu])) {
    if (e[mu] = true, gu(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Ah(e), n._ripple.class && (t.class = n._ripple.class), gu(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        sr.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, c_);
    } else sr.show(e, n, t);
  }
}
function ur(e) {
  e[mu] = true;
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
    }), sr.hide(t);
  }
}
function Mh(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let qo = false;
function f_(e, t) {
  !qo && t.includes(e.key) && (qo = true, Xo(e));
}
function Eh(e) {
  qo = false, vn(e);
}
function Bh(e) {
  qo && (qo = false, vn(e));
}
function $h(e, t, n) {
  const { value: a, modifiers: l } = t, o = Dh(a);
  o || sr.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = cl(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => f_(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", ur, { passive: true }), e.addEventListener("mousedown", ur);
      return;
    }
    e.addEventListener("touchstart", Xo, { passive: true }), e.addEventListener("touchend", vn, { passive: true }), e.addEventListener("touchmove", Mh, { passive: true }), e.addEventListener("touchcancel", vn), e.addEventListener("mousedown", Xo), e.addEventListener("mouseup", vn), e.addEventListener("mouseleave", vn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Eh), e.addEventListener("blur", Bh), e.addEventListener("dragstart", vn, { passive: true });
  } else !o && n && Rh(e);
}
function Rh(e) {
  var _a3;
  e.removeEventListener("touchstart", ur), e.removeEventListener("mousedown", ur), e.removeEventListener("touchstart", Xo), e.removeEventListener("touchend", vn), e.removeEventListener("touchmove", Mh), e.removeEventListener("touchcancel", vn), e.removeEventListener("mousedown", Xo), e.removeEventListener("mouseup", vn), e.removeEventListener("mouseleave", vn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Eh), e.removeEventListener("blur", Bh), e.removeEventListener("dragstart", vn);
}
function v_(e, t) {
  $h(e, t, false);
}
function m_(e) {
  Rh(e), delete e._ripple;
}
function g_(e, t) {
  if (t.value === t.oldValue) return;
  const n = Dh(t.oldValue);
  $h(e, t, n);
}
const Nt = { mounted: v_, unmounted: m_, updated: g_ }, Nr = j({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: Nc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ie, appendIcon: Ie, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Gt(), ...xe(), ...bt(), ..._t(), ...It(), ...Cl(), ...Or(), ...Qn(), ...io(), ...dt(), ...yi(), ...ea(), ...$e({ tag: "button" }), ...Ke(), ...wn({ variant: "elevated" }) }, "VBtn"), Ue = te()({ name: "VBtn", props: Nr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Je(e), { borderClasses: o } = tn(e), { densityClasses: i } = Ht(e), { dimensionStyles: r } = Vt(e), { elevationClasses: s } = Dt(e), { loaderClasses: u } = mi(e), { locationStyles: c } = ja(e), { positionClasses: d } = ro(e), { roundedClasses: f } = gt(e), { sizeClasses: v, sizeStyles: y } = oo(e), m = Fa(e, e.symbol, false), h = hi(e, n), b = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : h.isRouterLink.value ? (_a3 = h.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), k = B(() => b.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!h.isLink.value || ((_a3 = h.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = h.isActive) == null ? void 0 : _b2.value) ? k.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: S, variantClasses: p } = xa(I), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), w = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(M) {
    var _a3, _b2;
    C.value || h.isLink.value && (M.metaKey || M.ctrlKey || M.shiftKey || M.button !== 0 || n.target === "_blank") || (h.isRouterLink.value ? (_b2 = (_a3 = h.navigate).value) == null ? void 0 : _b2.call(_a3, M) : m == null ? void 0 : m.toggle());
  }
  return u_(h, m == null ? void 0 : m.select), ae(() => {
    const M = h.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), E = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== true);
    return at(g(M, q(h.linkProps, { type: M === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": b.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, u.value, d.value, f.value, v.value, p.value, e.class], style: [S.value, r.value, c.value, y.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && M !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: T.value }), { default: () => {
      var _a3;
      return [Sa(true, "v-btn"), !e.icon && D && x("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? g(Re, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : g(qe, { key: "prepend-icon", icon: e.prependIcon }, null)]), x("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && A ? g(qe, { key: "content-icon", icon: e.icon }, null) : g(Re, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? De(e.text)];
      } })]), !e.icon && E && x("span", { key: "append", class: "v-btn__append" }, [a.append ? g(Re, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : g(qe, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && x("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? g(La, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Nt, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), h_ = j({ ...Ne(Nr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), y_ = te()({ name: "VAppBarNavIcon", props: h_(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(Ue, q(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), b_ = te()({ name: "VAppBarTitle", props: kh(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(Ec, q(e, { class: "v-app-bar-title" }), n)), {};
} }), Fh = ba("v-alert-title"), Lh = j({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Oh(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const p_ = ["success", "info", "warning", "error"], S_ = j({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => p_.includes(e) }, ...xe(), ...bt(), ..._t(), ...It(), ...Lh(), ...Qn(), ...io(), ...dt(), ...$e(), ...Ke(), ...wn({ variant: "flat" }) }, "VAlert"), x_ = te()({ name: "VAlert", props: S_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = Oh(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Je(e), { colorClasses: s, colorStyles: u, variantClasses: c } = xa(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Ht(e), { dimensionStyles: f } = Vt(e), { elevationClasses: v } = Dt(e), { locationStyles: y } = ja(e), { positionClasses: m } = ro(e), { roundedClasses: h } = gt(e), { textColorClasses: b, textColorStyles: k } = Rt(() => e.borderColor), { t: I } = lt(), V = B(() => ({ "aria-label": I(e.closeLabel), onClick(S) {
    l.value = false, n("click:close", S);
  } }));
  return () => {
    const S = !!(a.prepend || o.value), p = !!(a.title || e.title), C = !!(a.close || e.closable), w = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && g(e.tag, { class: ne(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, h.value, c.value, e.class]), style: me([u.value, f.value, y.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [Sa(false, "v-alert"), e.border && x("div", { key: "border", class: ne(["v-alert__border", b.value]), style: me(k.value) }, null), S && x("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? g(Re, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...w } } }, a.prepend) : g(qe, q({ key: "prepend-icon" }, w), null)]), x("div", { class: "v-alert__content" }, [p && g(Fh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && x("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && x("div", { key: "close", class: "v-alert__close" }, [a.close ? g(Re, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : g(Ue, q({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), k_ = j({ start: Boolean, end: Boolean, icon: Ie, image: String, text: String, ...Gt(), ...xe(), ...bt(), ...dt(), ...ea(), ...$e(), ...Ke(), ...wn({ variant: "flat" }) }, "VAvatar"), Sn = te()({ name: "VAvatar", props: k_(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { borderClasses: l } = tn(e), { colorClasses: o, colorStyles: i, variantClasses: r } = xa(e), { densityClasses: s } = Ht(e), { roundedClasses: u } = gt(e), { sizeClasses: c, sizeStyles: d } = oo(e);
  return ae(() => g(e.tag, { class: ne(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: me([i.value, d.value, e.style]) }, { default: () => [n.default ? g(Re, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? g(ma, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? g(qe, { key: "icon", icon: e.icon }, null) : e.text, Sa(false, "v-avatar")] })), {};
} }), w_ = j({ text: String, onClick: Lt(), ...xe(), ...Ke() }, "VLabel"), so = te()({ name: "VLabel", props: w_(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var _a3;
    return x("label", { class: ne(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: me(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Nh = Symbol.for("vuetify:selection-control-group"), Hc = j({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ie, trueIcon: Ie, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: $t }, ...xe(), ...bt(), ...Ke() }, "SelectionControlGroup"), C_ = j({ ...Hc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), Hh = te()({ name: "VSelectionControlGroup", props: C_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = Ft(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return ft(Nh, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), St(() => {
      r.delete(s);
    });
  } }), yt({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), ae(() => {
    var _a3;
    return x("div", { class: ne(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: me(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Hr = j({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...xe(), ...Hc() }, "VSelectionControl");
function __(e) {
  const t = Ge(Nh, void 0), { densityClasses: n } = Ht(e), a = Ce(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? ct(v).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const y = v ? l.value : o.value;
    let m = y;
    i.value && (m = v ? [...ct(a.value), y] : ct(a.value).filter((h) => !e.valueComparator(h, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Rt(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Qe(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const Oa = te()({ name: "VSelectionControl", directives: { vRipple: Nt }, inheritAttrs: false, props: Hr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = __(e), v = Ft(), y = re(false), m = re(false), h = O(), b = B(() => e.id || `input-${v}`), k = B(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    h.value && (h.value.checked = r.value);
  });
  function I(C) {
    k.value && (y.value = true, Xl(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function V() {
    y.value = false, m.value = false;
  }
  function S(C) {
    C.stopPropagation();
  }
  function p(C) {
    if (!k.value) {
      h.value && (h.value.checked = r.value);
      return;
    }
    e.readonly && l && Ee(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return ae(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: b.value } }) : e.label, [w, T] = Zn(n), P = x("input", q({ ref: h, checked: r.value, disabled: !!e.disabled, id: b.value, onBlur: V, onFocus: I, onInput: p, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, T), null);
    return x("div", q({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": y.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, w, { style: e.style }), [x("div", { class: ne(["v-selection-control__wrapper", s.value]), style: me(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), at(x("div", { class: ne(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: b.value } })) ?? x(be, null, [i.value && g(qe, { key: "icon", icon: i.value }, null), P])]), [[Nt, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && g(so, { for: b.value, onClick: S }, { default: () => [C] })]);
  }), { isFocused: y, input: h };
} }), zh = j({ indeterminate: Boolean, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, ...Hr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Rn = te()({ name: "VCheckboxBtn", props: zh(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "indeterminate"), l = Ce(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return ae(() => {
    const s = Ne(Oa.filterProps(e), ["modelValue"]);
    return g(Oa, q(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function bi(e) {
  const { t } = lt();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ci(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return g(qe, q({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const V_ = j({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...xe(), ...pa({ transition: { component: Fc, leaveAbsolute: true, group: true } }) }, "VMessages"), Wh = te()({ name: "VMessages", props: V_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => ct(e.messages)), { textColorClasses: l, textColorStyles: o } = Rt(() => e.color);
  return ae(() => g(Qt, { transition: e.transition, tag: "div", class: ne(["v-messages", l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => x("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), pi = j({ focused: Boolean, "onUpdate:focused": Lt() }, "focus");
function ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn();
  const n = Ce(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const jh = Symbol.for("vuetify:form"), I_ = j({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function P_(e) {
  const t = Ce(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = re(false), o = O([]), i = O([]);
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
  return se(o, () => {
    let c = 0, d = 0;
    const f = [];
    for (const v of o.value) v.isValid === false ? (d++, f.push({ id: v.id, errorMessages: v.errorMessages })) : v.isValid === true && c++;
    i.value = f, t.value = d > 0 ? false : c === o.value.length ? true : null;
  }, { deep: true, flush: "post" }), ft(jh, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: y, resetValidation: m } = c;
    o.value.some((h) => h.id === d), o.value.push({ id: d, validate: v, reset: y, resetValidation: m, vm: wm(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((y) => y.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function uo(e) {
  const t = Ge(jh, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const T_ = Symbol.for("vuetify:rules");
function A_(e) {
  const t = Ge(T_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const Uh = j({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...pi() }, "validation");
function Gh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ft();
  const a = Ce(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = uo(e), i = A_(() => e.rules), r = O([]), s = re(true), u = _(() => !!(ct(a.value === "" ? null : a.value).length || ct(l.value === "" ? null : l.value).length)), c = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? ct(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = _(() => {
    var _a3;
    let V = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const S = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return { input: S.has("input"), blur: S.has("blur") || S.has("input") || S.has("invalid-input"), invalidInput: S.has("invalid-input"), lazy: S.has("lazy"), eager: S.has("eager") };
  }), f = _(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = re(false), y = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = Ct("validation"), h = _(() => e.name ?? Xe(n));
  lo(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: h.value, vm: m, validate: I, reset: b, resetValidation: k });
  }), Ut(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, h.value);
  }), Pt(async () => {
    var _a3;
    d.value.lazy || await I(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, h.value, f.value, c.value);
  }), Ot(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    se(l, () => {
      if (l.value != null) I();
      else if (e.focused) {
        const V = se(() => e.focused, (S) => {
          S || I(), V();
        });
      }
    });
  }), Ot(() => d.value.blur, () => {
    se(() => e.focused, (V) => {
      V || I();
    });
  }), se([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, h.value, f.value, c.value);
  });
  async function b() {
    a.value = null, await Ee(), await k();
  }
  async function k() {
    s.value = true, d.value.lazy ? r.value = [] : await I(!d.value.eager);
  }
  async function I() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const S = [];
    v.value = true;
    for (const p of i.value) {
      if (S.length >= Number(e.maxErrors ?? 1)) break;
      const w = await (typeof p == "function" ? p : () => p)(l.value);
      if (w !== true) {
        if (w !== false && typeof w != "string") {
          console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        S.push(w || "");
      }
    }
    return r.value = S, v.value = false, s.value = V, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: b, resetValidation: k, validate: I, validationClasses: y };
}
const wa = j({ id: String, appendIcon: Ie, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ie, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Lt(), "onClick:append": Lt(), ...xe(), ...bt(), ...on(_t(), ["maxWidth", "minWidth", "width"]), ...Ke(), ...Uh() }, "VInput"), jt = te()({ name: "VInput", props: { ...wa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Ht(e), { dimensionStyles: i } = Vt(e), { themeClasses: r } = Je(e), { rtlClasses: s } = Tt(), { InputIcon: u } = bi(e), c = Ft(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: y, isReadonly: m, isPristine: h, isValid: b, isValidating: k, reset: I, resetValidation: V, validate: S, validationClasses: p } = Gh(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !h.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), w = B(() => C.value.length > 0), T = B(() => !e.hideDetails || e.hideDetails === "auto" && (w.value || !!a.details)), P = _(() => T.value ? `${d.value}-messages` : void 0), M = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: y, isReadonly: m, isPristine: h, isValid: b, isValidating: k, hasDetails: T, reset: I, resetValidation: V, validate: S })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), E = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return ae(() => {
    var _a3, _b2;
    const A = !!(a.prepend || e.prependIcon), R = !!(a.append || e.appendIcon);
    return x("div", { class: ne(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, p.value, e.class]), style: me([i.value, e.style]) }, [A && x("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(M.value) : e.prependIcon && g(u, { key: "prepend-icon", name: "prepend", color: E.value }, null)]), a.default && x("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, M.value)]), R && x("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(M.value) : e.appendIcon && g(u, { key: "append-icon", name: "append", color: E.value }, null)]), T.value && x("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [g(Wh, { active: w.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, M.value)])]);
  }), { reset: I, resetValidation: V, validate: S, isValid: b, errorMessages: f };
} }), Ms = Symbol("Forwarded refs");
function Es(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Mt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[Ms] = n, new Proxy(e, { get(l, o) {
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
        const s = Es(r.value, o) ?? ("_" in r.value ? Es((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[Ms];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = Es(c.value, o);
          if (d) return d;
          const f = c.value && c.value[Ms];
          f && u.push(...f);
        }
      }
    }
  } });
}
const D_ = j({ ...Ne(wa(), ["direction"]), ...Ne(zh(), ["inline"]) }, "VCheckbox"), M_ = te()({ name: "VCheckbox", inheritAttrs: false, props: D_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: r } = ka(e), s = O(), u = Ft();
  return ae(() => {
    const [c, d] = Zn(n), f = jt.filterProps(e), v = Rn.filterProps(e);
    return g(jt, q({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (y) => l.value = y, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (y) => {
      let { id: m, messagesId: h, isDisabled: b, isReadonly: k, isValid: I } = y;
      return g(Rn, q(v, { id: m.value, "aria-describedby": h.value, disabled: b.value, readonly: k.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Mt({}, s);
} });
function E_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = Zo(l, n), i = Yh(l, a, n), r = Zo(l, t), s = Kh(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function B_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = Zo(a, n), o = Kh(a, t), i = Zo(a, t);
  return o - l / 2 + i / 2;
}
function kv(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function $_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function Yh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function Zo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function Kh(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const zc = Symbol.for("vuetify:v-slide-group"), Wc = j({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: zc }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...xe(), ...pl({ mobile: null }), ...$e(), ...wl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Jo = te()({ name: "VSlideGroup", props: Wc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = Tt(), { displayClasses: l, mobile: o } = xn(e), i = Ua(e, e.symbol), r = re(false), s = re(0), u = re(0), c = re(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = Vn(), { resizeRef: y, contentRect: m } = Vn(), h = uC(), b = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), k = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (nt) {
    let W = -1;
    se(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const L = d.value ? "width" : "height";
          u.value = v.value[L], c.value = m.value[L], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && k.value >= 0 && y.el) {
          const L = y.el.children[I.value];
          S(L, e.centerActive);
        }
      });
    });
  }
  const V = re(false);
  function S(W, L) {
    let U = 0;
    L ? U = B_({ containerElement: f.el, isHorizontal: d.value, selectedElement: W }) : U = E_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: W }), p(U);
  }
  function p(W) {
    if (!nt || !f.el) return;
    const L = Zo(d.value, f.el), U = Yh(d.value, a.value, f.el);
    if (!(kv(d.value, f.el) <= L || Math.abs(W - U) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: Se, offsetWidth: K } = f.el;
        W = Se - K - W;
      }
      d.value ? h.horizontal(W, b.value) : h(W, b.value);
    }
  }
  function C(W) {
    const { scrollTop: L, scrollLeft: U } = W.target;
    s.value = d.value ? U : L;
  }
  function w(W) {
    if (V.value = true, !(!r.value || !y.el)) {
      for (const L of W.composedPath()) for (const U of y.el.children) if (U === L) {
        S(U);
        return;
      }
    }
  }
  function T(W) {
    V.value = false;
  }
  let P = false;
  function M(W) {
    var _a3;
    !P && !V.value && !(W.relatedTarget && ((_a3 = y.el) == null ? void 0 : _a3.contains(W.relatedTarget))) && R(), P = false;
  }
  function D() {
    P = true;
  }
  function E(W) {
    if (!y.el) return;
    function L(U) {
      W.preventDefault(), R(U);
    }
    d.value ? W.key === "ArrowRight" ? L(a.value ? "prev" : "next") : W.key === "ArrowLeft" && L(a.value ? "next" : "prev") : W.key === "ArrowDown" ? L("next") : W.key === "ArrowUp" && L("prev"), W.key === "Home" ? L("first") : W.key === "End" && L("last");
  }
  function A(W, L) {
    if (!W) return;
    let U = W;
    do
      U = U == null ? void 0 : U[L === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (U == null ? void 0 : U.hasAttribute("disabled"));
    return U;
  }
  function R(W) {
    if (!y.el) return;
    let L;
    if (!W) L = Ma(y.el)[0];
    else if (W === "next") {
      if (L = A(y.el.querySelector(":focus"), W), !L) return R("first");
    } else if (W === "prev") {
      if (L = A(y.el.querySelector(":focus"), W), !L) return R("last");
    } else W === "first" ? (L = y.el.firstElementChild, (L == null ? void 0 : L.hasAttribute("disabled")) && (L = A(L, "next"))) : W === "last" && (L = y.el.lastElementChild, (L == null ? void 0 : L.hasAttribute("disabled")) && (L = A(L, "prev")));
    L && L.focus({ preventScroll: true });
  }
  function G(W) {
    const L = d.value && a.value ? -1 : 1, U = (W === "prev" ? -L : L) * u.value;
    let ie = s.value + U;
    if (d.value && a.value && f.el) {
      const { scrollWidth: Se, offsetWidth: K } = f.el;
      ie += Se - K;
    }
    p(ie);
  }
  const N = _(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Y = _(() => r.value || Math.abs(s.value) > 0), H = _(() => {
    switch (e.showArrows) {
      case "never":
        return false;
      case "always":
        return true;
      case "desktop":
        return !o.value;
      case true:
        return Y.value;
      case "mobile":
        return o.value || Y.value;
      default:
        return !o.value && Y.value;
    }
  }), F = _(() => Math.abs(s.value) > 1), Z = _(() => {
    if (!f.value || !Y.value) return false;
    const W = kv(d.value, f.el), L = $_(d.value, f.el);
    return W - L - Math.abs(s.value) > 1;
  });
  return ae(() => g(e.tag, { class: ne(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": H.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: me(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: M }, { default: () => {
    var _a3, _b2, _c2;
    return [H.value && x("div", { key: "prev", class: ne(["v-slide-group__prev", { "v-slide-group__prev--disabled": !F.value }]), onMousedown: D, onClick: () => F.value && G("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, N.value)) ?? g(Ko, null, { default: () => [g(qe, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), x("div", { key: "container", ref: f, class: ne(["v-slide-group__container", e.contentClass]), onScroll: C }, [x("div", { ref: y, class: "v-slide-group__content", onFocusin: w, onFocusout: T, onKeydown: E }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, N.value)])]), H.value && x("div", { key: "next", class: ne(["v-slide-group__next", { "v-slide-group__next--disabled": !Z.value }]), onMousedown: D, onClick: () => Z.value && G("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, N.value)) ?? g(Ko, null, { default: () => [g(qe, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: G, scrollOffset: s, focus: R, hasPrev: F, hasNext: Z };
} }), Xh = Symbol.for("vuetify:v-chip-group"), R_ = j({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: $t }, ...Wc({ scrollToActive: false }), ...xe(), ...wl({ selectedClass: "v-chip--selected" }), ...$e(), ...Ke(), ...wn({ variant: "tonal" }) }, "VChipGroup"), F_ = te()({ name: "VChipGroup", props: R_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ua(e, Xh);
  return yt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), ae(() => {
    const u = Jo.filterProps(e);
    return g(Jo, q(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), L_ = j({ activeClass: String, appendAvatar: String, appendIcon: Ie, baseColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ie, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Lt(), onClickOnce: Lt(), ...Gt(), ...xe(), ...bt(), ...It(), ...Cl(), ...dt(), ...yi(), ...ea(), ...$e({ tag: "span" }), ...Ke(), ...wn({ variant: "tonal" }) }, "VChip"), ga = te()({ name: "VChip", directives: { vRipple: Nt }, props: L_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = lt(), { borderClasses: i } = tn(e), { densityClasses: r } = Ht(e), { elevationClasses: s } = Dt(e), { roundedClasses: u } = gt(e), { sizeClasses: c } = oo(e), { themeClasses: d } = Je(e), f = Ce(e, "modelValue"), v = Fa(e, Xh, false), y = Fa(e, zc, false), m = hi(e, n), h = B(() => e.link !== false && m.isLink.value), b = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), k = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(w) {
    w.preventDefault(), w.stopPropagation(), f.value = false, a("click:close", w);
  } }));
  se(f, (w) => {
    w ? (v == null ? void 0 : v.register(), y == null ? void 0 : y.register()) : (v == null ? void 0 : v.unregister(), y == null ? void 0 : y.unregister());
  });
  const { colorClasses: I, colorStyles: V, variantClasses: S } = xa(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function p(w) {
    var _a3, _b2;
    a("click", w), b.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, w), v == null ? void 0 : v.toggle());
  }
  function C(w) {
    (w.key === "Enter" || w.key === " ") && (w.preventDefault(), p(w));
  }
  return () => {
    var _a3;
    const w = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), P = !!(T || l.append), M = !!(l.close || e.closable), D = !!(l.filter || e.filter) && v, E = !!(e.prependIcon || e.prependAvatar), A = !!(E || l.prepend);
    return f.value && at(g(w, q(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": b.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, I.value, r.value, s.value, u.value, c.value, S.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: b.value ? 0 : void 0, onClick: p, onKeydown: b.value && !h.value && C }), { default: () => {
      var _a4;
      return [Sa(b.value, "v-chip"), D && g(Lc, { key: "filter" }, { default: () => [at(x("div", { class: "v-chip__filter" }, [l.filter ? g(Re, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : g(qe, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Fn, v.isSelected.value]])] }), A && x("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? g(Re, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : x(be, null, [e.prependIcon && g(qe, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && g(Sn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), x("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? De(e.text)]), P && x("div", { key: "append", class: "v-chip__append" }, [l.append ? g(Re, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : x(be, null, [e.appendIcon && g(qe, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && g(Sn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), M && x("button", q({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, k.value), [l.close ? g(Re, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : g(qe, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Nt, b.value && e.ripple, null]]);
  };
} }), O_ = ["dotted", "dashed", "solid", "double"], N_ = j({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => O_.includes(e) }, ...xe(), ...Ke() }, "VDivider"), bn = te()({ name: "VDivider", props: N_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Je(e), { textColorClasses: o, textColorStyles: i } = Rt(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return ae(() => {
    const u = x("hr", { class: ne([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: me([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? x("div", { class: ne(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, x("div", { class: "v-divider__content", style: me(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), hu = Symbol.for("vuetify:list");
function qh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Ge(hu, { filterable: false, hasPrepend: re(false), updateHasPrepend: () => null, trackingIndex: re(-1), navigationStrategy: re("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Ft() } = e, i = { filterable: t.filterable || n, hasPrepend: re(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return ft(hu, i), t;
}
function Zh() {
  return Ge(hu, null);
}
const jc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Me(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of ct(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, Jh = (e) => {
  const t = jc(e);
  return { activate: (a) => {
    let { activated: l, id: o, ...i } = a;
    o = Me(o);
    const r = l.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
    return t.activate({ ...i, id: o, activated: r });
  }, in: (a, l, o) => {
    let i = /* @__PURE__ */ new Set();
    if (a != null) {
      const r = ct(a);
      r.length && (i = t.in(r.slice(0, 1), l, o));
    }
    return i;
  }, out: (a, l, o) => t.out(a, l, o) };
}, H_ = (e) => {
  const t = jc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, z_ = (e) => {
  const t = Jh(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, W_ = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, Qh = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, j_ = { open: Qh.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Uc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = Me(a), e && !l) {
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
}, ey = (e) => {
  const t = Uc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Me(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, U_ = (e) => {
  const t = Uc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, G_ = (e) => {
  const t = ey(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Gc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = Me(a);
    const u = new Map(o), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(Me(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = Me(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const y of i.get(d)) {
        const m = Me(y);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Me(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, y) => {
      let [m, h] = y;
      return h === "on" && v.push(m), v;
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
}, Y_ = (e) => {
  const t = Gc(e);
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
}, K_ = (e) => {
  const n = { select: Gc(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Ql = Symbol.for("vuetify:nested"), ty = { id: re(), root: { itemsRegistration: O("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: O(/* @__PURE__ */ new Map()), parents: O(/* @__PURE__ */ new Map()), disabled: O(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: O(false), scrollToActive: O(false), selectable: O(false), opened: O(/* @__PURE__ */ new Set()), activated: O(/* @__PURE__ */ new Set()), selected: O(/* @__PURE__ */ new Map()), selectedValues: O([]), getPath: () => [] } }, X_ = j({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), q_ = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = re(/* @__PURE__ */ new Map()), r = re(/* @__PURE__ */ new Map()), s = re(/* @__PURE__ */ new Set()), u = Ce(e, "opened", e.opened, (S) => new Set(Array.isArray(S) ? S.map((p) => Me(p)) : S), (S) => [...S.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return H_(e.mandatory);
      case "single-leaf":
        return z_(e.mandatory);
      case "independent":
        return jc(e.mandatory);
      case "single-independent":
      default:
        return Jh(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return G_(e.mandatory);
      case "leaf":
        return U_(e.mandatory);
      case "independent":
        return Uc(e.mandatory);
      case "single-independent":
        return ey(e.mandatory);
      case "trunk":
        return Y_(e.mandatory);
      case "branch":
        return K_(e.mandatory);
      case "classic":
      default:
        return Gc(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return j_;
      case "single":
        return W_;
      case "multiple":
      default:
        return Qh;
    }
  }), v = Ce(e, "activated", e.activated, (S) => c.value.in(S, i.value, r.value), (S) => c.value.out(S, i.value, r.value)), y = Ce(e, "selected", e.selected, (S) => d.value.in(S, i.value, r.value, s.value), (S) => d.value.out(S, i.value, r.value));
  Ut(() => {
    o = true;
  });
  function m(S) {
    const p = [];
    let C = Me(S);
    for (; C !== void 0; ) p.unshift(C), C = r.value.get(C);
    return p;
  }
  const h = Ct("nested"), b = /* @__PURE__ */ new Set(), k = r1(() => {
    Ee(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  se(() => [n.value, ut(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const S = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), w = ut(a) ? (M) => Me(M.raw) : (M) => M.value, T = [...n.value];
    let P = 0;
    for (; P < T.length; ) {
      const M = T[P++], D = w(M);
      if (M.children) {
        const E = [];
        for (const A of M.children) {
          const R = w(A);
          S.set(R, D), E.push(R), T.push(A);
        }
        p.set(D, E);
      }
      M.props.disabled && C.add(D);
    }
    i.value = p, r.value = S, s.value = C;
  }
  const V = { id: re(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => ut(l)), selectable: B(() => e.selectable), activated: v, selected: y, selectedValues: _(() => {
    const S = [];
    for (const [p, C] of y.value.entries()) C === "on" && S.push(p);
    return S;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (S, p, C, w) => {
    if (b.has(S)) {
      m(S).map(String).join(" -> "), m(p).concat(S).map(String).join(" -> ");
      return;
    } else b.add(S);
    p && S !== p && r.value.set(S, p), C && s.value.add(S), w && i.value.set(S, []), p != null && i.value.set(p, [...i.value.get(p) || [], S]), k();
  }, unregister: (S) => {
    if (o) return;
    b.delete(S), i.value.delete(S), s.value.delete(S);
    const p = r.value.get(S);
    if (p) {
      const C = i.value.get(p) ?? [];
      i.value.set(p, C.filter((w) => w !== S));
    }
    r.value.delete(S), k();
  }, updateDisabled: (S, p) => {
    p ? s.value.add(S) : s.value.delete(S);
  }, open: (S, p, C) => {
    h.emit("click:open", { id: S, value: p, path: m(S), event: C });
    const w = f.value.open({ id: S, value: p, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    w && (u.value = w);
  }, openOnSelect: (S, p, C) => {
    const w = f.value.select({ id: S, value: p, selected: new Map(y.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    w && (u.value = w);
  }, select: (S, p, C) => {
    h.emit("click:select", { id: S, value: p, path: m(S), event: C });
    const w = d.value.select({ id: S, value: p, selected: new Map(y.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    w && (y.value = w), V.root.openOnSelect(S, p, C);
  }, activate: (S, p, C) => {
    if (!e.activatable) return V.root.select(S, true, C);
    h.emit("click:activate", { id: S, value: p, path: m(S), event: C });
    const w = c.value.activate({ id: S, value: p, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
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
  }, children: i, parents: r, disabled: s, getPath: m } };
  return ft(Ql, V), V.root;
}, ny = (e, t, n) => {
  const a = Ge(Ql, ty), l = Symbol("nested item"), o = _(() => {
    const r = Me(ut(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return lo(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ee(() => {
      a.root.register(o.value, a.id.value, ut(t), n);
    });
  }), Ut(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), se(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ee(() => {
      a.root.register(r, a.id.value, ut(t), n);
    }));
  }), se(() => ut(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && ft(Ql, i), i;
}, Z_ = () => {
  const e = Ge(Ql, ty);
  ft(Ql, { ...e, isGroupActivator: true });
}, J_ = en({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return Z_(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), ay = j({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ie, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ie, default: "$expand" }, rawId: [String, Number], prependIcon: Ie, appendIcon: Ie, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...xe(), ...$e() }, "VListGroup"), Qo = te()({ name: "VListGroup", props: ay(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = ny(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Zh(), { isBooted: s } = kl(), u = Ge(Ql), c = B(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), y = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return ae(() => g(e.tag, { class: ne(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: me(e.style) }, { default: () => [n.activator && g(Re, { defaults: y.value }, { default: () => [g(J_, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), g(Qt, { transition: { component: Fr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? at(x("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[Fn, a.value]]) : a.value && x("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), Q_ = j({ opacity: [Number, String], ...xe(), ...$e() }, "VListItemSubtitle"), ly = te()({ name: "VListItemSubtitle", props: Q_(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-list-item-subtitle", e.class]), style: me([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), oy = ba("v-list-item-title"), iy = j({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ie, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Lt(), onClickOnce: Lt(), ...Gt(), ...xe(), ...bt(), ..._t(), ...It(), ...dt(), ...yi(), ...$e(), ...Ke(), ...wn({ variant: "text" }) }, "VListItem"), In = te()({ name: "VListItem", directives: { vRipple: Nt }, props: iy(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = hi(e, n), i = O(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: y, root: m, parent: h, openOnSelect: b, scrollToActive: k, id: I } = ny(r, () => e.disabled, false), V = Zh(), S = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), p = B(() => e.link !== false && o.isLink.value), C = _(() => !!V && (m.selectable.value || m.activatable.value || e.value != null)), w = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), T = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? p.value ? "link" : C.value ? "option" : "listitem" : void 0), M = _(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : S.value;
  }), D = B(() => e.rounded || e.nav), E = B(() => e.color ?? e.activeColor), A = B(() => ({ color: S.value ? E.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  se(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (_e) => {
    _e && R();
  }), se(u, (_e) => {
    var _a3;
    !_e || !k || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), se(T, (_e) => {
    var _a3;
    _e && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), lo(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Ee(() => R());
  });
  function R() {
    h.value != null && m.open(h.value, true), b(true);
  }
  const { themeClasses: G } = Je(e), { borderClasses: N } = tn(e), { colorClasses: Y, colorStyles: H, variantClasses: F } = xa(A), { densityClasses: Z } = Ht(e), { dimensionStyles: W } = Vt(e), { elevationClasses: L } = Dt(e), { roundedClasses: U } = gt(D), ie = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Se = B(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), K = _(() => ({ isActive: S.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function fe(_e) {
    var _a3, _b2, _c2;
    l("click", _e), !["INPUT", "TEXTAREA"].includes((_a3 = _e.target) == null ? void 0 : _a3.tagName) && w.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, _e), !y && (m.activatable.value ? s(!u.value, _e) : (m.selectable.value || e.value != null && !p.value) && c(!f.value, _e)));
  }
  function Te(_e) {
    const ye = _e.target;
    ["INPUT", "TEXTAREA"].includes(ye.tagName) || (_e.key === "Enter" || _e.key === " " && !(V == null ? void 0 : V.filterable)) && (_e.preventDefault(), _e.stopPropagation(), _e.target.dispatchEvent(new MouseEvent("click", _e)));
  }
  return ae(() => {
    const _e = p.value ? "a" : e.tag, ye = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, Q = !!(!!(e.appendAvatar || e.appendIcon) || a.append), oe = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(oe), e.activeColor && Rg("active-color", ["color", "base-color"]), at(g(_e, q(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": S.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !oe && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": T.value, [`${e.activeClass}`]: e.activeClass && S.value }, G.value, N.value, Y.value, Z.value, L.value, ie.value, U.value, F.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, H.value, W.value, e.style], tabindex: e.tabindex ?? (w.value ? V ? -2 : 0 : void 0), "aria-selected": M.value, role: P.value, onClick: fe, onKeydown: w.value && !p.value && Te }), { default: () => {
      var _a3;
      return [Sa(w.value || S.value, "v-list-item"), oe && x("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? g(Re, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, K.value)];
      } }) : x(be, null, [e.prependAvatar && g(Sn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(qe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), x("div", { class: "v-list-item__spacer" }, null)]), x("div", { class: "v-list-item__content", "data-no-activator": "" }, [ye && g(oy, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? De(e.title)];
      } }), $ && g(ly, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? De(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, K.value)]), Q && x("div", { key: "append", class: "v-list-item__append" }, [a.append ? g(Re, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, K.value)];
      } }) : x(be, null, [e.appendIcon && g(qe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(Sn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), x("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Nt, w.value && Se.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: y, isSelected: f, list: V, select: c, root: m, id: I, link: o };
} }), eV = j({ color: String, inset: Boolean, sticky: Boolean, title: String, ...xe(), ...$e() }, "VListSubheader"), co = te()({ name: "VListSubheader", props: eV(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Rt(() => e.color);
  return ae(() => {
    const o = !!(n.default || e.title);
    return g(e.tag, { class: ne(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: me([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && x("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), tV = j({ items: Array, returnObject: Boolean }, "VListChildren"), ry = te()({ name: "VListChildren", props: tV(), setup(e, t) {
  let { slots: n } = t;
  return qh(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? g(bn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? g(co, i, null);
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
      } : void 0 }, c = Qo.filterProps(i);
      return o ? g(Qo, q(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = q(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : g(In, q(v, { index: l }), u);
      }, default: () => g(ry, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : g(In, q(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), sy = j({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), nV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Tn(e, t) {
  const n = kt(t, e.itemTitle, t), a = kt(t, e.itemValue, n), l = kt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Ne(t, ["children"]) : t : void 0 : kt(t, e.itemProps);
  let i = kt(t, e.itemType, "item");
  nV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? uy(e, l) : void 0, raw: t };
}
Tn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function uy(e, t) {
  const n = on(e, Tn.neededProps), a = [];
  for (const l of t) a.push(Tn(n, l));
  return a;
}
function Yc(e) {
  const t = _(() => uy(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = re(/* @__PURE__ */ new Map()), l = re([]);
  mt(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (Ra(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    a.value = s, l.value = u;
  });
  function o(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, y = e.valueComparator || $t, m = on(e, Tn.neededProps), h = [];
    e: for (const b of r) {
      if (!d && b === null) continue;
      if (f && typeof b == "string") {
        h.push(Tn(m, b));
        continue;
      }
      const k = s.get(b);
      if (v || !k) {
        for (const I of v ? u : c) if (y(b, I.value)) {
          h.push(I);
          continue e;
        }
        h.push(Tn(m, b));
        continue;
      }
      h.push(...k);
    }
    return h;
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
const aV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function lV(e, t) {
  const n = Ra(t) ? t : kt(t, e.itemTitle), a = Ra(t) ? t : kt(t, e.itemValue, void 0), l = kt(t, e.itemChildren), o = e.itemProps === true ? Ne(t, ["children"]) : kt(t, e.itemProps);
  let i = kt(t, e.itemType, "item");
  aV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? cy(e, l) : void 0, raw: t };
}
function cy(e, t) {
  const n = [];
  for (const a of t) n.push(lV(e, a));
  return n;
}
function dy(e) {
  return { items: _(() => cy(e, e.items)) };
}
const fy = j({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ie, collapseIcon: Ie, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Lt(), "onClick:select": Lt(), "onUpdate:opened": Lt(), ...X_({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Gt(), ...xe(), ...bt(), ..._t(), ...It(), ...sy(), ...dt(), ...$e(), ...Ke(), ...wn({ variant: "text" }) }, "VList"), eo = te()({ name: "VList", props: fy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = dy(e), { themeClasses: i } = Je(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Qe(() => e.bgColor), { borderClasses: u } = tn(e), { densityClasses: c } = Ht(e), { dimensionStyles: d } = Vt(e), { elevationClasses: f } = Dt(e), { roundedClasses: v } = gt(e), { children: y, open: m, parents: h, select: b, getPath: k } = q_(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), I = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = B(() => e.activeColor), S = B(() => e.baseColor), p = B(() => e.color), C = B(() => e.selectable || e.activatable), w = Ce(e, "navigationIndex", -1, (Z) => Z ?? -1), T = Ft();
  qh({ filterable: e.filterable, trackingIndex: w, navigationStrategy: B(() => e.navigationStrategy), uid: T }), se(o, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), yt({ VListGroup: { activeColor: V, baseColor: S, color: p, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: V, baseColor: S, color: p, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = re(false), M = O();
  function D(Z) {
    P.value = true;
  }
  function E(Z) {
    P.value = false;
  }
  function A(Z) {
    var _a3;
    e.navigationStrategy === "track" ? ~w.value || (w.value = N("first")) : !P.value && !(Z.relatedTarget && ((_a3 = M.value) == null ? void 0 : _a3.contains(Z.relatedTarget))) && F();
  }
  function R() {
    e.navigationStrategy === "track" && (w.value = -1);
  }
  function G(Z) {
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
  function N(Z) {
    const W = o.value.length;
    if (W === 0) return -1;
    let L;
    Z === "first" ? L = 0 : Z === "last" ? L = W - 1 : (L = w.value + (Z === "next" ? 1 : -1), L < 0 && (L = W - 1), L >= W && (L = 0));
    const U = L;
    let ie = 0;
    for (; ie < W; ) {
      const Se = o.value[L];
      if (Se && Se.type !== "divider" && Se.type !== "subheader") return L;
      if (L += Z === "next" || Z === "first" ? 1 : -1, L < 0 && (L = W - 1), L >= W && (L = 0), L === U) return -1;
      ie++;
    }
    return -1;
  }
  function Y(Z) {
    const W = Z.target;
    if (!M.value || W.tagName === "INPUT" && ["Home", "End"].includes(Z.key) || W.tagName === "TEXTAREA") return;
    const L = G(Z.key);
    if (L !== null) if (Z.preventDefault(), e.navigationStrategy === "track") {
      const U = N(L);
      U !== -1 && (w.value = U);
    } else F(L);
  }
  function H(Z) {
    P.value = true;
  }
  function F(Z) {
    if (M.value) return al(M.value, Z);
  }
  return ae(() => {
    const Z = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), W = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return g(e.tag, { ref: M, class: ne(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, I.value, v.value, e.class]), style: me([{ "--v-list-indent": ve(Z), "--v-list-group-prepend": Z ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${T}-${w.value}` : void 0, "aria-multiselectable": W, onFocusin: D, onFocusout: E, onFocus: A, onBlur: R, onKeydown: Y, onMousedown: H }, { default: () => [g(ry, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: b, focus: F, children: y, parents: h, getPath: k, navigationIndex: w };
} }), oV = ba("v-list-img"), iV = j({ start: Boolean, end: Boolean, ...xe(), ...$e() }, "VListItemAction"), Kc = te()({ name: "VListItemAction", props: iV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} }), rV = j({ start: Boolean, end: Boolean, ...xe(), ...$e() }, "VListItemMedia"), sV = te()({ name: "VListItemMedia", props: rV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} });
function Bs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function uV(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wv(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Bs({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Bs({ x: l, y: o }, t);
  }
  return Bs({ x: t.width / 2, y: t.height / 2 }, t);
}
const vy = { static: fV, connected: mV }, cV = j({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in vy }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function dV(e, t) {
  const n = O({}), a = O();
  nt && Ot(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    se(() => e.locationStrategy, r), St(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = vy[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function fV() {
}
function vV(e, t) {
  const n = wc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function mV(e, t, n) {
  (Array.isArray(e.target.value) || i1(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = kc(() => {
    const b = nu(t.location, e.isRtl.value), k = t.origin === "overlap" ? b : t.origin === "auto" ? Vs(b) : nu(t.origin, e.isRtl.value);
    return b.side === k.side && b.align === Is(k).align ? { preferredAnchor: zf(b), preferredOrigin: zf(k) } : { preferredAnchor: b, preferredOrigin: k };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((b) => _(() => {
    const k = parseFloat(t[b]);
    return isNaN(k) ? 1 / 0 : k;
  })), c = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const b = t.offset.split(" ").map(parseFloat);
      return b.length < 2 && b.push(0), b;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new Wg(4), y = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((k) => {
      k !== f && v.clear(), requestAnimationFrame((I) => {
        f = I;
      });
    }), v.isFull) {
      const k = v.values();
      if ($t(k.at(-1), k.at(-3)) && !$t(k.at(-1), k.at(-2))) return;
    }
    const b = h();
    b && v.push(b.flipped);
  });
  let m = new _n({ x: 0, y: 0, width: 0, height: 0 });
  se(e.target, (b, k) => {
    k && !Array.isArray(k) && y.unobserve(k), Array.isArray(b) ? $t(b, k) || h() : b && y.observe(b);
  }, { immediate: true }), se(e.contentEl, (b, k) => {
    k && y.unobserve(k), b && y.observe(b);
  }, { immediate: true }), St(() => {
    y.disconnect();
  });
  function h() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = Yg(e.target.value));
    const b = vV(e.contentEl.value, e.isRtl.value), k = or(e.contentEl.value), I = Number(t.viewportMargin);
    k.length || (k.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = k.reduce((E, A) => {
      const R = Iw(A);
      return E ? new _n({ x: Math.max(E.left, R.left), y: Math.max(E.top, R.top), width: Math.min(E.right, R.right) - Math.max(E.left, R.left), height: Math.min(E.bottom, R.bottom) - Math.max(E.top, R.top) }) : R;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, m.x), V.y += Math.min(I, m.y), V.width = Math.max(V.width - I * 2, m.x + m.width - I), V.height = Math.max(V.height - I * 2, m.y + m.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let S = { anchor: l.value, origin: o.value };
    function p(E) {
      const A = new _n(b), R = wv(E.anchor, m), G = wv(E.origin, A);
      let { x: N, y: Y } = uV(R, G);
      switch (E.anchor.side) {
        case "top":
          Y -= c.value[0];
          break;
        case "bottom":
          Y += c.value[0];
          break;
        case "left":
          N -= c.value[0];
          break;
        case "right":
          N += c.value[0];
          break;
      }
      switch (E.anchor.align) {
        case "top":
          Y -= c.value[1];
          break;
        case "bottom":
          Y += c.value[1];
          break;
        case "left":
          N -= c.value[1];
          break;
        case "right":
          N += c.value[1];
          break;
      }
      return A.x += N, A.y += Y, A.width = Math.min(A.width, s.value), A.height = Math.min(A.height, u.value), { overflows: jf(A, V), x: N, y: Y };
    }
    let C = 0, w = 0;
    const T = { x: 0, y: 0 }, P = { x: false, y: false };
    let M = -1;
    for (; !(M++ > 10); ) {
      const { x: E, y: A, overflows: R } = p(S);
      C += E, w += A, b.x += E, b.y += A;
      {
        const G = Wf(S.anchor), N = R.x.before || R.x.after, Y = R.y.before || R.y.after;
        let H = false;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && N && !P.x || F === "y" && Y && !P.y) {
            const Z = { anchor: { ...S.anchor }, origin: { ...S.origin } }, W = F === "x" ? G === "y" ? Is : Vs : G === "y" ? Vs : Is;
            Z.anchor = W(Z.anchor), Z.origin = W(Z.origin);
            const { overflows: L } = p(Z);
            (L[F].before <= R[F].before && L[F].after <= R[F].after || L[F].before + L[F].after < (R[F].before + R[F].after) / 2) && (S = Z, H = P[F] = true);
          }
        }), H) continue;
      }
      R.x.before && (C += R.x.before, b.x += R.x.before), R.x.after && (C -= R.x.after, b.x -= R.x.after), R.y.before && (w += R.y.before, b.y += R.y.before), R.y.after && (w -= R.y.after, b.y -= R.y.after);
      {
        const G = jf(b, V);
        T.x = V.width - G.x.before - G.x.after, T.y = V.height - G.y.before - G.y.after, C += G.x.before, b.x += G.x.before, w += G.y.before, b.y += G.y.before;
      }
      break;
    }
    const D = Wf(S.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`, transformOrigin: `${S.origin.side} ${S.origin.align}`, top: ve($s(w)), left: e.isRtl.value ? void 0 : ve($s(C)), right: e.isRtl.value ? ve($s(-C)) : void 0, minWidth: ve(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ve(Cv(tt(T.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ve(Cv(tt(T.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: T, contentBox: b, flipped: P };
  }
  return se(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => h()), Ee(() => {
    const b = h();
    if (!b) return;
    const { available: k, contentBox: I } = b;
    I.height > k.y && requestAnimationFrame(() => {
      h(), requestAnimationFrame(() => {
        h();
      });
    });
  }), { updateLocation: h };
}
function $s(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Cv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let yu = true;
const cr = [];
function gV(e) {
  !yu || cr.length ? (cr.push(e), bu()) : (yu = false, e(), bu());
}
let _v = -1;
function bu() {
  cancelAnimationFrame(_v), _v = requestAnimationFrame(() => {
    const e = cr.shift();
    e && e(), cr.length ? bu() : yu = true;
  });
}
const my = { none: null, close: bV, block: pV, reposition: SV }, hV = j({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in my } }, "VOverlay-scroll-strategies");
function yV(e, t) {
  if (!nt) return;
  let n;
  mt(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = jl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = my[e.scrollStrategy]) == null ? void 0 : _a3.call(my, t, e, n);
    }));
  }), St(() => {
    n == null ? void 0 : n.stop();
  });
}
function bV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  gy(Xc(e.target.value, e.contentEl.value), t);
}
function pV(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = Xc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...or(a, t.contained ? n : void 0), ...or(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Ic(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ve(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ve(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ve(o)), r.classList.add("v-overlay-scroll-blocked");
  }), St(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function SV(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    gV(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      gy(Xc(e.target.value, e.contentEl.value), (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), St(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function Xc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function gy(e, t) {
  const n = [document, ...or(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), St(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const pu = Symbol.for("vuetify:v-menu"), qc = j({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Zc(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = xw(u, () => {
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
const xV = j({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...qc() }, "VOverlay-activator");
function kV(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = Ct("useActivator"), i = O();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = Zc(e, (w) => {
    w === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== w && (u = true), n.value = w);
  }), y = O(), m = { onClick: (w) => {
    w.stopPropagation(), i.value = w.currentTarget || w.target, n.value || (y.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    r = true, i.value = w.currentTarget || w.target, f();
  }, onMouseleave: (w) => {
    r = false, v();
  }, onFocus: (w) => {
    Xl(w.target, ":focus-visible") !== false && (s = true, w.stopPropagation(), i.value = w.currentTarget || w.target, f());
  }, onBlur: (w) => {
    s = false, w.stopPropagation(), v({ minDelay: 1 });
  } }, h = _(() => {
    const w = {};
    return d.value && (w.onClick = m.onClick), e.openOnHover && (w.onMouseenter = m.onMouseenter, w.onMouseleave = m.onMouseleave), c.value && (w.onFocus = m.onFocus, w.onBlur = m.onBlur), w;
  }), b = _(() => {
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
      const T = Ge(pu, null);
      w.onClick = () => {
        n.value = false, T == null ? void 0 : T.closeParents();
      };
    }
    return w;
  }), k = _(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, w.onMouseleave = () => {
      r = false, v();
    }), w;
  });
  se(a, (w) => {
    var _a3;
    w && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), se(n, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, { flush: "post" });
  const I = zo();
  mt(() => {
    I.value && Ee(() => {
      i.value = I.el;
    });
  });
  const V = zo(), S = _(() => e.target === "cursor" && y.value ? y.value : V.value ? V.el : hy(e.target, o) || i.value), p = _(() => Array.isArray(S.value) ? void 0 : S.value);
  let C;
  return se(() => !!e.activator, (w) => {
    w && nt ? (C = jl(), C.run(() => {
      wV(e, o, { activatorEl: i, activatorEvents: h });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), St(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: S, targetEl: p, targetRef: V, activatorEvents: h, contentEvents: b, scrimEvents: k };
}
function wV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  se(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Ee(() => o());
  }, { immediate: true }), se(() => e.activatorProps, () => {
    o();
  }), St(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Pw(s, q(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Tw(s, q(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = hy(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function hy(e, t) {
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
const yy = j({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), ji = /* @__PURE__ */ new Map();
let Vv = 0;
function Iv(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(ji.values()).filter((u) => {
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
  const o = Ma(a).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function by(e, t) {
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
    const y = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Ee(), n.value && !r && y !== m && o.value && ut(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Ma(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const y = Ma(document.documentElement);
      if (v.shiftKey && v.target === y.at(0) || !v.shiftKey && v.target === y.at(-1)) {
        const m = Ma(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  nt && (se(() => e.retainFocus, (v) => {
    v ? ji.set(i, { isActive: n, contentEl: o }) : ji.delete(i);
  }, { immediate: true }), se(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), Vv++ < 1 && document.addEventListener("keydown", Iv)), St(() => {
    ji.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --Vv < 1 && document.removeEventListener("keydown", Iv);
  });
}
function py() {
  if (!nt) return re(false);
  const { ssr: e } = xn();
  if (e) {
    const t = re(false);
    return Pt(() => {
      t.value = true;
    }), t;
  } else return re(true);
}
const Jc = j({ eager: Boolean }, "lazy");
function Qc(e, t) {
  const n = re(false), a = B(() => n.value || e.eager || t.value);
  se(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function _l() {
  const t = Ct("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Pv = Symbol.for("vuetify:stack"), yo = Bt([]);
function CV(e, t, n) {
  const a = Ct("useStack"), l = !n, o = Ge(Pv, void 0), i = Bt({ activeChildren: /* @__PURE__ */ new Set() });
  ft(Pv, i);
  const r = re(Number(ut(t)));
  Ot(e, () => {
    var _a3;
    const c = (_a3 = yo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(ut(t)), l && yo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), St(() => {
      if (l) {
        const d = Me(yo).findIndex((f) => f[0] === a.uid);
        yo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = re(true);
  return l && mt(() => {
    var _a3;
    const c = ((_a3 = yo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: rl(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function _V(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !nt) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function VV() {
  return true;
}
function Sy(e, t, n) {
  if (!e || xy(e, n) === false) return false;
  const a = ah(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function xy(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || VV)(e);
}
function IV(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Sy(e, t, n) && setTimeout(() => {
    xy(e, n) && a && a(e);
  }, 0);
}
function Tv(e, t) {
  const n = ah(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Su = { mounted(e, t) {
  const n = (l) => IV(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Sy(l, e, t);
  };
  Tv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (Tv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function PV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return g($a, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && x("div", q({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const Si = j({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...xV(), ...xe(), ..._t(), ...Jc(), ...cV(), ...hV(), ...yy(), ...Ke(), ...pa() }, "VOverlay"), Kn = te()({ name: "VOverlay", directives: { vClickOutside: Su }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Ne(Si(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = Ct("VOverlay"), i = O(), r = O(), s = O(), u = Ce(e, "modelValue"), c = _({ get: () => u.value, set: (K) => {
    K && e.disabled || (u.value = K);
  } }), { themeClasses: d } = Je(e), { rtlClasses: f, isRtl: v } = Tt(), { hasContent: y, onAfterLeave: m } = Qc(e, c), h = Qe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: b, localTop: k, stackStyles: I } = CV(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: S, target: p, targetEl: C, targetRef: w, activatorEvents: T, contentEvents: P, scrimEvents: M } = kV(e, { isActive: c, isTop: k, contentEl: s }), { teleportTarget: D } = _V(() => {
    var _a3, _b2, _c2;
    const K = e.attach || e.contained;
    if (K) return K;
    const fe = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return fe instanceof ShadowRoot ? fe : false;
  }), { dimensionStyles: E } = Vt(e), A = py(), { scopeId: R } = _l();
  se(() => e.disabled, (K) => {
    K && (c.value = false);
  });
  const { contentStyles: G, updateLocation: N } = dV(e, { isRtl: v, contentEl: s, target: p, isActive: c });
  yV(e, { root: i, contentEl: s, targetEl: C, target: p, isActive: c, updateLocation: N });
  function Y(K) {
    l("click:outside", K), e.persistent ? U() : c.value = false;
  }
  function H(K) {
    return c.value && k.value && (!e.scrim || K.target === r.value || K instanceof MouseEvent && K.shadowTarget === r.value);
  }
  by(e, { isActive: c, localTop: k, contentEl: s, activatorEl: V }), nt && se(c, (K) => {
    K ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
  }, { immediate: true }), Ut(() => {
    nt && window.removeEventListener("keydown", F);
  });
  function F(K) {
    var _a3, _b2, _c2;
    K.key === "Escape" && b.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", K), e.persistent ? U() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function Z(K) {
    K.key === "Escape" && !b.value || l("keydown", K);
  }
  const W = Th();
  Ot(() => e.closeOnBack, () => {
    s_(W, (K) => {
      b.value && c.value ? (K(false), e.persistent ? U() : c.value = false) : K();
    });
  });
  const L = O();
  se(() => c.value && (e.absolute || e.contained) && D.value == null, (K) => {
    if (K) {
      const fe = Mr(i.value);
      fe && fe !== document.scrollingElement && (L.value = fe.scrollTop);
    }
  });
  function U() {
    e.noClickAnimation || s.value && oa(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Wo });
  }
  function ie() {
    l("afterEnter");
  }
  function Se() {
    m(), l("afterLeave");
  }
  return ae(() => {
    var _a3;
    return x(be, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: w, props: q({ ref: S }, T.value, e.activatorProps) }), A.value && y.value && g(AS, { disabled: !D.value, to: D.value }, { default: () => [x("div", q({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: ve(L.value) }, e.style], ref: i, onKeydown: Z }, R, a), [g(PV, q({ color: h, modelValue: c.value && !!e.scrim, ref: r }, M.value), null), g(Qt, { appear: true, persisted: true, transition: e.transition, target: p.value, onAfterEnter: ie, onAfterLeave: Se }, { default: () => {
      var _a4;
      return [at(x("div", q({ ref: s, class: ["v-overlay__content", e.contentClass], style: [E.value, G.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[Fn, c.value], [Su, { handler: Y, closeConditional: H, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: p, animateClick: U, contentEl: s, rootEl: i, globalTop: b, localTop: k, updateLocation: N };
} }), ky = j({ id: String, submenu: Boolean, ...Ne(Si({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: Rr } }), ["absolute"]) }, "VMenu"), to = te()({ name: "VMenu", props: ky(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = _l(), { isRtl: o } = Tt(), i = Ft(), r = B(() => e.id || `v-menu-${i}`), s = O(), u = Ge(pu, null), c = re(/* @__PURE__ */ new Set());
  ft(pu, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !kw(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Ut(() => u == null ? void 0 : u.unregister()), ic(() => a.value = false), se(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !Ug(Ma((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (b) => b.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const h = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    h && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), al(h, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), al(h, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), al(h, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const y = _(() => q({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return ae(() => {
    const m = Kn.filterProps(e);
    return g(Kn, q({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, absolute: true, activatorProps: y.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var h = arguments.length, b = new Array(h), k = 0; k < h; k++) b[k] = arguments[k];
      return g(Re, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...b)];
      } });
    } });
  }), Mt({ id: r, \u03A8openChildren: c }, s);
} }), ed = j({ color: String, ...Gt(), ...xe(), ..._t(), ...It(), ...Qn(), ...io(), ...dt(), ...$e(), ...Ke() }, "VSheet"), Na = te()({ name: "VSheet", props: ed(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.color), { borderClasses: i } = tn(e), { dimensionStyles: r } = Vt(e), { elevationClasses: s } = Dt(e), { locationStyles: u } = ja(e), { positionClasses: c } = ro(e), { roundedClasses: d } = gt(e);
  return ae(() => g(e.tag, { class: ne(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: me([o.value, r.value, u.value, e.style]) }, n)), {};
} }), TV = j({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...xe(), ...pa({ transition: { component: Fc } }) }, "VCounter"), zr = te()({ name: "VCounter", functional: true, props: TV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ae(() => g(Qt, { transition: e.transition }, { default: () => [at(x("div", { class: ne(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: me(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Fn, e.active]])] })), {};
} }), AV = j({ floating: Boolean, ...xe() }, "VFieldLabel"), xo = te()({ name: "VFieldLabel", props: AV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(so, { class: ne(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: me(e.style) }, n)), {};
} }), DV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], xi = j({ appendInnerIcon: Ie, bgColor: String, clearable: Boolean, clearIcon: { type: Ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => DV.includes(e) }, "onClick:clear": Lt(), "onClick:appendInner": Lt(), "onClick:prependInner": Lt(), ...xe(), ...Or(), ...dt(), ...Ke() }, "VField"), Ha = te()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...pi(), ...xi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = Je(e), { loaderClasses: i } = mi(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = ka(e), { InputIcon: d } = bi(e), { roundedClasses: f } = gt(e), { rtlClasses: v } = Tt(), y = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), h = B(() => !e.singleLine && m.value), b = Ft(), k = _(() => e.id || `input-${b}`), I = B(() => e.details ? `${k.value}-messages` : void 0), V = O(), S = O(), p = O(), C = _(() => ["plain", "underlined"].includes(e.variant)), w = _(() => e.error || e.disabled ? void 0 : y.value && s.value ? e.color : e.baseColor), T = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? w.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: M } = Qe(() => e.bgColor), { textColorClasses: D, textColorStyles: E } = Rt(w);
  se(y, (Y) => {
    if (h.value && !Gn()) {
      const H = V.value.$el, F = S.value.$el;
      requestAnimationFrame(() => {
        const Z = wc(H), W = F.getBoundingClientRect(), L = W.x - Z.x, U = W.y - Z.y - (Z.height / 2 - W.height / 2), ie = W.width / 0.75, Se = Math.abs(ie - Z.width) > 1 ? { maxWidth: ve(ie) } : void 0, K = getComputedStyle(H), fe = getComputedStyle(F), Te = parseFloat(K.transitionDuration) * 1e3 || 150, _e = parseFloat(fe.getPropertyValue("--v-field-label-scale")), ye = fe.getPropertyValue("color");
        H.style.visibility = "visible", F.style.visibility = "hidden", oa(H, { transform: `translate(${L}px, ${U}px) scale(${_e})`, color: ye, ...Se }, { duration: Te, easing: Wo, direction: Y ? "normal" : "reverse" }).finished.then(() => {
          H.style.removeProperty("visibility"), F.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = _(() => ({ isActive: y, isFocused: s, controlRef: p, iconColor: T, blur: c, focus: u })), R = B(() => {
    const Y = !y.value;
    return { "aria-hidden": Y, for: Y ? void 0 : k.value };
  }), G = B(() => {
    const Y = h.value && y.value;
    return { "aria-hidden": Y, for: Y ? void 0 : k.value };
  });
  function N(Y) {
    Y.target !== document.activeElement && Y.preventDefault();
  }
  return ae(() => {
    var _a3;
    const Y = e.variant === "outlined", H = !!(l["prepend-inner"] || e.prependInnerIcon), F = !!(e.clearable || l.clear) && !e.disabled, Z = !!(l["append-inner"] || e.appendInnerIcon || F), W = () => l.label ? l.label({ ...A.value, label: e.label, props: { for: k.value } }) : e.label;
    return x("div", q({ class: ["v-field", { "v-field--active": y.value, "v-field--appended": Z, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": H, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !W(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [M.value, e.style], onClick: N }, n), [x("div", { class: "v-field__overlay" }, null), g(gi, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), H && x("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](A.value) : e.prependInnerIcon && g(d, { key: "prepend-icon", name: "prependInner", color: T.value }, null)]), x("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && g(xo, q({ key: "floating-label", ref: S, class: [D.value], floating: true }, R.value, { style: E.value }), { default: () => [W()] }), m.value && g(xo, q({ key: "label", ref: V, id: e.labelId }, G.value), { default: () => [W()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...A.value, props: { id: k.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? x("div", { id: k.value, class: "v-field__input", "aria-describedby": I.value }, null)]), F && g(Lc, { key: "clear" }, { default: () => [at(x("div", { class: "v-field__clearable", onMousedown: (L) => {
      L.preventDefault(), L.stopPropagation();
    } }, [g(Re, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...A.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : g(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Fn, e.dirty]])] }), Z && x("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](A.value) : e.appendInnerIcon && g(d, { key: "append-icon", name: "appendInner", color: T.value }, null)]), x("div", { class: ne(["v-field__outline", D.value]), style: me(E.value) }, [Y && x(be, null, [x("div", { class: "v-field__outline__start" }, null), h.value && x("div", { class: "v-field__outline__notch" }, [g(xo, q({ ref: S, floating: true }, R.value), { default: () => [W()] })]), x("div", { class: "v-field__outline__end" }, null)]), C.value && h.value && g(xo, q({ ref: S, floating: true }, R.value), { default: () => [W()] })])]);
  }), { controlRef: p, fieldIconColor: T };
} }), wy = j({ autocomplete: String }, "autocomplete");
function td(e) {
  const t = Ft(), n = re(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Cy(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const MV = ["color", "file", "time", "date", "datetime-local", "week", "month"], ki = j({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...wy(), ...Ne(wa(), ["direction"]), ...xi() }, "VTextField"), Xn = te()({ name: "VTextField", directives: { vIntersect: $n }, inheritAttrs: false, props: ki(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = ka(e), { onIntersect: u } = Cy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = O(), y = O(), m = O(), h = td(e), b = _(() => MV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function k() {
    h.isSuppressing.value && h.update(), i.value || r(), Ee(() => {
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
  function S(C, w) {
    C.stopPropagation(), k(), Ee(() => {
      w(), ci(e["onClick:clear"], C);
    });
  }
  function p(C) {
    var _a3;
    const w = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = w.value;
      return;
    }
    const T = w.value, P = w.selectionStart, M = w.selectionEnd;
    o.value = T, Ee(() => {
      let D = 0;
      T.trimStart().length === w.value.length && (D = T.length - w.value.length), P != null && (w.selectionStart = P - D), M != null && (w.selectionEnd = M - D);
    });
  }
  return ae(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), w = !!(C || l.details), [T, P] = Zn(n), { modelValue: M, ...D } = jt.filterProps(e), E = Ha.filterProps(e);
    return g(jt, q({ ref: v, modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, T, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (A) => {
      let { id: R, isDisabled: G, isDirty: N, isReadonly: Y, isValid: H, hasDetails: F, reset: Z } = A;
      return g(Ha, q({ ref: y, onMousedown: I, onClick: V, "onClick:clear": (W) => S(W, Z), role: e.role }, Ne(E, ["onClick:clear"]), { id: R.value, labelId: `${R.value}-label`, active: b.value || N.value, dirty: N.value || e.dirty, disabled: G.value, focused: i.value, details: F.value, error: H.value === false }), { ...l, default: (W) => {
        let { props: { class: L, ...U }, controlRef: ie } = W;
        const Se = x("input", q({ ref: (K) => m.value = ie.value = K, value: o.value, onInput: p, autofocus: e.autofocus, readonly: Y.value, disabled: G.value, name: h.fieldName.value, autocomplete: h.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${R.value}-label` }, U, P), null);
        return x(be, null, [e.prefix && x("span", { class: "v-text-field__prefix" }, [x("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), at(l.default ? x("div", { class: ne(L), "data-no-activator": "" }, [l.default({ id: R }), Se]) : va(Se, { class: L }), [[$n, u, null, { once: true }]]), e.suffix && x("span", { class: "v-text-field__suffix" }, [x("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: w ? (A) => {
      var _a3;
      return x(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, A), C && x(be, null, [x("span", null, null), g(zr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Mt({}, v, y, m);
} }), EV = j({ renderless: Boolean, ...xe() }, "VVirtualScrollItem"), _y = te()({ name: "VVirtualScrollItem", inheritAttrs: false, props: EV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = Vn(void 0, "border");
  se(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), ae(() => {
    var _a3, _b2;
    return e.renderless ? x(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : x("div", q({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), BV = -1, $V = 1, Rs = 100, Vy = j({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Iy(e, t) {
  const n = xn(), a = re(0);
  mt(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = re(0), o = re(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = re(0), r = re(0), s = O(), u = O();
  let c = 0;
  const { resizeRef: d, contentRect: f } = Vn();
  mt(() => {
    d.value = s.value;
  });
  const v = _(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), y = _(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), h = Array.from({ length: t.value.length });
  const b = re(0);
  let k = -1;
  function I(F) {
    return m[F] || a.value;
  }
  const V = Hg(() => {
    const F = performance.now();
    h[0] = 0;
    const Z = t.value.length;
    for (let W = 1; W <= Z; W++) h[W] = (h[W - 1] || 0) + I(W - 1);
    b.value = Math.max(b.value, performance.now() - F);
  }, b), S = se(y, (F) => {
    F && (S(), c = u.value.offsetTop, V.immediate(), G(), ~k && Ee(() => {
      nt && window.requestAnimationFrame(() => {
        Y(k), k = -1;
      });
    }));
  });
  St(() => {
    V.clear();
  });
  function p(F, Z) {
    const W = m[F], L = a.value;
    a.value = L ? Math.min(a.value, Z) : Z, (W !== Z || L !== a.value) && (m[F] = Z, V());
  }
  function C(F) {
    F = tt(F, 0, t.value.length);
    const Z = Math.floor(F), W = F % 1, L = Z + 1, U = h[Z] || 0, ie = h[L] || U;
    return U + (ie - U) * W;
  }
  function w(F) {
    return RV(h, F);
  }
  let T = 0, P = 0, M = 0;
  se(v, (F, Z) => {
    G(), F < Z && requestAnimationFrame(() => {
      P = 0, G();
    });
  });
  let D = -1;
  function E() {
    if (!s.value || !u.value) return;
    const F = s.value.scrollTop, Z = performance.now();
    Z - M > 500 ? (P = Math.sign(F - T), c = u.value.offsetTop) : P = F - T, T = F, M = Z, window.clearTimeout(D), D = window.setTimeout(A, 500), G();
  }
  function A() {
    !s.value || !u.value || (P = 0, M = 0, window.clearTimeout(D), G());
  }
  let R = -1;
  function G() {
    cancelAnimationFrame(R), R = requestAnimationFrame(N);
  }
  function N() {
    if (!s.value || !v.value || !a.value) return;
    const F = T - c, Z = Math.sign(P), W = Math.max(0, F - Rs), L = tt(w(W), 0, t.value.length), U = F + v.value + Rs, ie = tt(w(U) + 1, L + 1, t.value.length);
    if ((Z !== BV || L < l.value) && (Z !== $V || ie > o.value)) {
      const Se = C(l.value) - C(L), K = C(ie) - C(o.value);
      Math.max(Se, K) > Rs ? (l.value = L, o.value = ie) : (L <= 0 && (l.value = L), ie >= t.value.length && (o.value = ie));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Y(F) {
    const Z = C(F);
    !s.value || F && !Z ? k = F : s.value.scrollTop = Z;
  }
  const H = _(() => t.value.slice(l.value, o.value).map((F, Z) => {
    const W = Z + l.value;
    return { raw: F, index: W, key: kt(F, e.itemKey, W) };
  }));
  return se(t, () => {
    m = Array.from({ length: t.value.length }), h = Array.from({ length: t.value.length }), V.immediate(), G();
  }, { deep: 1 }), { calculateVisibleItems: G, containerRef: s, markerRef: u, computedItems: H, paddingTop: i, paddingBottom: r, scrollToIndex: Y, handleScroll: E, handleScrollend: A, handleItemResize: p };
}
function RV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const FV = j({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Vy(), ...xe(), ..._t() }, "VVirtualScroll"), Wr = te()({ name: "VVirtualScroll", props: FV(), setup(e, t) {
  let { slots: n } = t;
  const a = Ct("VVirtualScroll"), { dimensionStyles: l } = Vt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: y } = Iy(e, B(() => e.items));
  return Ot(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[b]("scroll", s, { passive: true }), document[b]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[b]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[b]("scrollend", u));
    }
    Pt(() => {
      i.value = Mr(a.vnode.el, true), m(true);
    }), St(m);
  }), ae(() => {
    const m = y.value.map((h) => g(_y, { key: h.key, renderless: e.renderless, "onUpdate:height": (b) => c(h.index, b) }, { default: (b) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? x(be, null, [x("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ve(f.value) } }, null), m, x("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ve(v.value) } }, null)]) : x("div", { ref: i, class: ne(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: me([l.value, e.style]) }, [x("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ve(f.value), paddingBottom: ve(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function nd(e, t) {
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
        const s = se(n, () => {
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
function ad(e) {
  let { groups: t, onLeave: n } = e;
  function a(r) {
    var _a3;
    return r.type === "list" ? (_a3 = r.contentRef.value) == null ? void 0 : _a3.$el : r.contentRef.value;
  }
  function l(r) {
    const s = a(r);
    return s ? Ma(s) : [];
  }
  function o(r) {
    var _a3;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(l), d = t.map((v) => {
      var _a4;
      return v.type === "list" ? (_a4 = v.contentRef.value) == null ? void 0 : _a4.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = i(c, d, u, s);
    if (f === null) {
      const v = t[d], y = c[d];
      (v.type === "list" || (u === "forward" ? y.at(-1) === r.target : y.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && ut(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
      else {
        const y = u === "forward";
        c[f].at(y ? 0 : -1).focus();
      }
    }
  }
  function i(r, s, u, c) {
    const d = t[s], f = r[s];
    if (d.type !== "list" && !(u === "forward" ? f.at(-1) === c : f.at(0) === c)) return null;
    const v = u === "forward" ? 1 : -1;
    for (let y = s + v; y >= 0 && y < t.length; y += v) {
      const m = t[y];
      if (r[y].length > 0 || m.type === "list" && ut(m.displayItemsCount) > 0) return y;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const LV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function Fs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Vl = j({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function OV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? LV, o = (n == null ? void 0 : n.filterKeys) ? ct(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = ct(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let y = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const b = o || Object.keys(c);
        y = b.length === i;
        for (const k of b) {
          const I = kt(c, k), V = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[k];
          if (v = V ? V(I, t, u) : l(I, t, u), v !== -1 && v !== false) V ? d[k] = Fs(v, t) : f[k] = Fs(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = Fs(v, t));
      const m = Object.keys(f).length, h = Object.keys(d).length;
      if (!m && !h || (n == null ? void 0 : n.filterMode) === "union" && h !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (h !== i || !m && i > 0 && !y)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function Il(e, t, n, a) {
  const l = re([]), o = re(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Xe(t).map((s) => [s, a.transform(s)]) : Xe(t));
  mt(() => {
    const s = typeof n == "function" ? n() : Xe(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = OV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Xe(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Xe(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((y) => {
      let { index: m, matches: h } = y;
      const b = d[m];
      f.push(b), v.set(b.value, h);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function ld(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [x("span", { class: ne(`${e}__unmask`) }, [t.slice(o, a[0])]), x("span", { class: ne(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(x("span", { class: ne(`${e}__unmask`) }, [t.slice(a[1])])), x(be, null, [i]);
  });
}
const NV = j({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function od(e, t) {
  const n = Ft(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => ut(t)), ariaControls: B(() => a.value) };
}
const id = j({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ie, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...NV(), ...sy({ itemChildren: false }) }, "Select"), HV = j({ search: String, ...Vl({ filterKeys: ["title"] }), ...id(), ...Ne(ki({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...pa({ transition: { component: Rr } }) }, "VSelect"), rd = te()({ name: "VSelect", props: HV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = lt(), l = O(), o = O(), i = O(), r = O(), s = O(), { items: u, transformIn: c, transformOut: d } = Yc(e), f = Ce(e, "search", ""), { filteredItems: v, getMatches: y } = Il(e, u, () => f.value), m = Ce(e, "modelValue", [], (ye) => c(ye === null ? [null] : ct(ye)), (ye) => {
    const $ = d(ye);
    return e.multiple ? $ : $[0] ?? null;
  }), h = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), b = uo(e), k = td(e), I = _(() => m.value.map((ye) => ye.value)), V = re(false), S = B(() => e.closableChips && !b.isReadonly.value && !b.isDisabled.value), { InputIcon: p } = bi(e);
  let C = "", w = 0, T;
  const P = _(() => {
    const ye = f.value ? v.value : u.value;
    return e.hideSelected ? ye.filter(($) => !m.value.some((z) => (e.valueComparator || $t)(z, $))) : ye;
  }), M = _(() => e.hideNoData && !P.value.length || b.isReadonly.value || b.isDisabled.value), D = Ce(e, "menu"), E = _({ get: () => D.value, set: (ye) => {
    var _a3;
    D.value && !ye && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ye && M.value || (D.value = ye);
  } }), { menuId: A, ariaExpanded: R, ariaControls: G } = od(e, E), N = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Y = O(), H = nd(Y, l), { onTabKeydown: F } = ad({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Y, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    E.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function Z(ye) {
    e.openOnClear && (E.value = true);
  }
  function W() {
    M.value || (E.value = !E.value);
  }
  function L(ye) {
    var _a3;
    ye.key === "Tab" && F(ye), ((_a3 = Y.value) == null ? void 0 : _a3.$el.contains(ye.target)) && ql(ye) && U(ye);
  }
  function U(ye) {
    var _a3, _b2, _c2;
    if (!ye.key || b.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ye.key) && ye.preventDefault(), ["Enter", "ArrowDown", " "].includes(ye.key) && (E.value = true), ["Escape", "Tab"].includes(ye.key) && (E.value = false), e.clearable && ye.key === "Backspace") {
      ye.preventDefault(), m.value = [], Z();
      return;
    }
    ye.key === "Home" ? (_a3 = Y.value) == null ? void 0 : _a3.focus("first") : ye.key === "End" && ((_b2 = Y.value) == null ? void 0 : _b2.focus("last"));
    const $ = 1e3;
    if (!ql(ye)) return;
    const z = performance.now();
    z - T > $ && (C = "", w = 0), C += ye.key.toLowerCase(), T = z;
    const Q = P.value;
    function ce() {
      let X = oe();
      return X || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), w++, X = oe(), X) || (w = 0, X = oe(), X) ? X : (C = ye.key.toLowerCase(), oe());
    }
    function oe() {
      for (let X = w; X < Q.length; X++) {
        const le = Q[X];
        if (le.title.toLowerCase().startsWith(C)) return [le, X];
      }
    }
    const ue = ce();
    if (!ue) return;
    const [pe, de] = ue;
    w = de, (_c2 = Y.value) == null ? void 0 : _c2.focus(de), e.multiple || (m.value = [pe]);
  }
  function ie(ye) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ye.props.disabled) if (e.multiple) {
      const z = m.value.findIndex((ce) => (e.valueComparator || $t)(ce.value, ye.value)), Q = $ ?? !~z;
      if (~z) {
        const ce = Q ? [...m.value, ye] : [...m.value];
        ce.splice(z, 1), m.value = ce;
      } else Q && (m.value = [...m.value, ye]);
    } else {
      const z = $ !== false;
      m.value = z ? [ye] : [], Ee(() => {
        E.value = false;
      });
    }
  }
  function Se(ye) {
    var _a3;
    const $ = ye.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains($)) || (E.value = false);
  }
  function K() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function fe() {
    var _a3;
    f.value = "", V.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function Te(ye) {
    V.value = true;
  }
  function _e(ye) {
    if (ye == null) m.value = [];
    else if (Xl(l.value, ":autofill") || Xl(l.value, ":-webkit-autofill")) {
      const $ = u.value.find((z) => z.title === ye);
      $ && ie($);
    } else l.value && (l.value.value = "");
  }
  return se(E, () => {
    if (!e.hideSelected && E.value && m.value.length) {
      const ye = P.value.findIndex(($) => m.value.some((z) => (e.valueComparator || $t)(z.value, $.value)));
      nt && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ye >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ye));
      });
    }
  }), se(u, (ye, $) => {
    E.value || V.value && e.hideNoData && !$.length && ye.length && (E.value = true);
  }), ae(() => {
    const ye = !!(e.chips || n.chip), $ = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), z = m.value.length > 0, Q = Xn.filterProps(e), ce = z || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, oe = { search: f, filteredItems: v.value };
    return g(Xn, q({ ref: l }, Q, { modelValue: m.value.map((ue) => ue.props.title).join(", "), name: void 0, "onUpdate:modelValue": _e, focused: V.value, "onUpdate:focused": (ue) => V.value = ue, validationValue: m.externalValue, counterValue: h.value, dirty: z, class: ["v-select", { "v-select--active-menu": E.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: ce, "onClick:clear": Z, "onMousedown:control": W, onBlur: Se, onKeydown: U, "aria-expanded": R.value, "aria-controls": G.value }), { ...n, default: (ue) => {
      let { id: pe } = ue;
      return x(be, null, [x("select", { hidden: true, multiple: e.multiple, name: k.fieldName.value }, [u.value.map((de) => x("option", { key: de.value, value: de.value, selected: I.value.includes(de.value) }, null))]), g(to, q({ id: A.value, ref: o, modelValue: E.value, "onUpdate:modelValue": (de) => E.value = de, activator: "parent", contentClass: "v-select__content", disabled: M.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: K, onAfterLeave: fe }, N.value), { default: () => [g(Na, { onFocusin: Te, onKeydown: L }, { default: () => [n["menu-header"] && x("header", { ref: i }, [n["menu-header"](oe)]), $ && g(eo, q({ key: "select-list", ref: Y, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${pe.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, H, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(In, { key: "no-data", title: a(e.noDataText) }, null)), g(Wr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (de) => {
          var _a4, _b3, _c3;
          let { item: X, index: le, itemRef: Ve } = de;
          const J = Cw(X.props), ge = q(X.props, { ref: Ve, key: X.value, onClick: () => ie(X, null), "aria-posinset": le + 1, "aria-setsize": P.value.length });
          return X.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: X.raw, index: le })) ?? g(bn, q(X.props, { key: `divider-${le}` }), null) : X.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: X.raw, index: le })) ?? g(co, q(X.props, { key: `subheader-${le}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: X, index: le, props: ge })) ?? g(In, q(ge, { role: "option" }), { prepend: (ke) => {
            let { isSelected: we } = ke;
            return x(be, null, [e.multiple && !e.hideSelected ? g(Rn, { key: X.value, modelValue: we, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Pe) => Pe.preventDefault() }, null) : void 0, J.prependAvatar && g(Sn, { image: J.prependAvatar }, null), J.prependIcon && g(qe, { icon: J.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? ld("v-select", X.title, (_a5 = y(X)) == null ? void 0 : _a5.title) : X.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && x("footer", { ref: r }, [n["menu-footer"](oe)])] })] }), m.value.map((de, X) => {
        function le(ke) {
          ke.stopPropagation(), ke.preventDefault(), ie(de, false);
        }
        const Ve = q(ga.filterProps(de.props), { "onClick:close": le, onKeydown(ke) {
          ke.key !== "Enter" && ke.key !== " " || (ke.preventDefault(), ke.stopPropagation(), le(ke));
        }, onMousedown(ke) {
          ke.preventDefault(), ke.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), J = ye ? !!n.chip : !!n.selection, ge = J ? Dr(ye ? n.chip({ item: de, index: X, props: Ve }) : n.selection({ item: de, index: X })) : void 0;
        if (!(J && !ge)) return x("div", { key: de.value, class: "v-select__selection" }, [ye ? n.chip ? g(Re, { key: "chip-defaults", defaults: { VChip: { closable: S.value, size: "small", text: de.title } } }, { default: () => [ge] }) : g(ga, q({ key: "chip", closable: S.value, size: "small", text: de.title, disabled: de.props.disabled }, Ve), null) : ge ?? x("span", { class: "v-select__selection-text" }, [de.title, e.multiple && X < m.value.length - 1 && x("span", { class: "v-select__selection-comma" }, [Fe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ue = arguments.length, pe = new Array(ue), de = 0; de < ue; de++) pe[de] = arguments[de];
      return x(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...pe), e.menuIcon ? g(qe, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && g(p, { key: "append-icon", name: "appendInner", color: pe[0].iconColor.value }, null)]);
    } });
  }), Mt({ isFocused: V, menu: E, search: f, filteredItems: v, select: ie }, l);
} }), zV = j({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...Vl({ filterKeys: ["title"] }), ...id(), ...Ne(ki({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), WV = te()({ name: "VAutocomplete", props: zV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = lt(), l = O(), o = re(false), i = re(true), r = re(false), s = O(), u = O(), c = re(-1), d = re(null), { items: f, transformIn: v, transformOut: y } = Yc(e), { textColorClasses: m, textColorStyles: h } = Rt(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: b } = bi(e), k = Ce(e, "search", ""), I = Ce(e, "modelValue", [], (X) => v(X === null ? [null] : ct(X)), (X) => {
    const le = y(X);
    return e.multiple ? le : le[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), S = uo(e), { filteredItems: p, getMatches: C } = Il(e, f, () => d.value ?? (i.value ? "" : k.value)), w = _(() => e.hideSelected && d.value === null ? p.value.filter((X) => !I.value.some((le) => le.value === X.value)) : p.value), T = B(() => e.closableChips && !S.isReadonly.value && !S.isDisabled.value), P = _(() => !!(e.chips || n.chip)), M = _(() => P.value || !!n.selection), D = _(() => I.value.map((X) => X.props.value)), E = _(() => w.value.find((X) => X.type === "item" && !X.props.disabled)), A = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && k.value === ((_a3 = E.value) == null ? void 0 : _a3.title)) && w.value.length > 0 && !i.value && !r.value;
  }), R = _(() => e.hideNoData && !w.value.length || S.isReadonly.value || S.isDisabled.value), G = Ce(e, "menu"), N = _({ get: () => G.value, set: (X) => {
    var _a3;
    G.value && !X && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || X && R.value || (G.value = X);
  } }), { menuId: Y, ariaExpanded: H, ariaControls: F } = od(e, N), Z = O(), W = O(), L = O(), U = nd(Z, l), { onTabKeydown: ie } = ad({ groups: [{ type: "element", contentRef: W }, { type: "list", contentRef: Z, displayItemsCount: () => w.value.length }, { type: "element", contentRef: L }], onLeave: () => {
    var _a3;
    N.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function Se(X) {
    e.openOnClear && (N.value = true), k.value = "";
  }
  function K() {
    R.value || (N.value = true);
  }
  function fe(X) {
    R.value || (o.value && (X.preventDefault(), X.stopPropagation()), N.value = !N.value);
  }
  function Te(X) {
    var _a3, _b2;
    X.key === "Tab" && ie(X), ((_a3 = Z.value) == null ? void 0 : _a3.$el.contains(X.target)) && (ql(X) || X.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function _e(X) {
    var _a3, _b2, _c2, _d2, _e2;
    if (S.isReadonly.value) return;
    const le = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, Ve = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (N.value = true), ["Escape"].includes(X.key) && (N.value = false), A.value && ["Enter", "Tab"].includes(X.key) && E.value && !I.value.some((J) => {
      let { value: ge } = J;
      return ge === E.value.value;
    }) && de(E.value), X.key === "ArrowDown" && A.value && ((_b2 = Z.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(X.key)) {
      if (!e.multiple && M.value && I.value.length > 0 && !k.value) return de(I.value[0], false);
      if (~c.value) {
        X.preventDefault();
        const J = c.value;
        de(I.value[c.value], false), c.value = J >= Ve - 1 ? Ve - 2 : J;
      } else X.key === "Backspace" && !k.value && (c.value = Ve - 1);
      return;
    }
    if (e.multiple) if (X.key === "ArrowLeft") {
      if (c.value < 0 && le && le > 0) return;
      const J = c.value > -1 ? c.value - 1 : Ve - 1;
      if (I.value[J]) c.value = J;
      else {
        const ge = ((_c2 = k.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(ge, ge);
      }
    } else if (X.key === "ArrowRight") {
      if (c.value < 0) return;
      const J = c.value + 1;
      I.value[J] ? c.value = J : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && ql(X) && (c.value = -1);
  }
  function ye(X) {
    if (Xl(l.value, ":autofill") || Xl(l.value, ":-webkit-autofill")) {
      const le = f.value.find((Ve) => Ve.title === X.target.value);
      le && de(le);
    }
  }
  function $() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function z() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function Q(X) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function ce(X) {
    r.value = false;
  }
  function oe(X) {
    (X == null || X === "" && !e.multiple && !M.value) && (I.value = []);
  }
  function ue(X) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (o.value = true);
  }
  const pe = re(false);
  function de(X) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const Ve = I.value.findIndex((ge) => (e.valueComparator || $t)(ge.value, X.value)), J = le ?? !~Ve;
      if (~Ve) {
        const ge = J ? [...I.value, X] : [...I.value];
        ge.splice(Ve, 1), I.value = ge;
      } else J && (I.value = [...I.value, X]);
      e.clearOnSelect && (k.value = "");
    } else {
      const Ve = le !== false;
      I.value = Ve ? [X] : [], d.value = i.value ? "" : k.value ?? "", k.value = Ve && !M.value ? X.title : "", Ee(() => {
        N.value = false, i.value = true;
      });
    }
  }
  return se(o, (X, le) => {
    var _a3;
    X !== le && (X ? (pe.value = true, k.value = e.multiple || M.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Ee(() => pe.value = false)) : (!e.multiple && k.value == null && (I.value = []), N.value = false, !i.value && k.value && (d.value = k.value), k.value = "", c.value = -1));
  }), se(k, (X) => {
    !o.value || pe.value || (X && (N.value = true), i.value = !X);
  }), se(N, (X) => {
    if (!e.hideSelected && X && I.value.length && i.value) {
      const le = w.value.findIndex((Ve) => I.value.some((J) => Ve.value === J.value));
      nt && window.requestAnimationFrame(() => {
        var _a3;
        le >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(le));
      });
    }
    X && (d.value = null);
  }), se(f, (X, le) => {
    N.value || o.value && !le.length && X.length && (N.value = true);
  }), ae(() => {
    const X = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), le = I.value.length > 0, Ve = Xn.filterProps(e), J = { search: k, filteredItems: p.value };
    return g(Xn, q({ ref: l }, Ve, { modelValue: k.value, "onUpdate:modelValue": [(ge) => k.value = ge, oe], focused: o.value, "onUpdate:focused": (ge) => o.value = ge, validationValue: I.externalValue, counterValue: V.value, dirty: le, onChange: ye, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": N.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!M.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: S.isReadonly.value, placeholder: le ? void 0 : e.placeholder, "onClick:clear": Se, "onMousedown:control": K, onKeydown: _e, onBlur: ue, "aria-expanded": H.value, "aria-controls": F.value }), { ...n, default: (ge) => {
      let { id: ke } = ge;
      return x(be, null, [g(to, q({ id: Y.value, ref: s, modelValue: N.value, "onUpdate:modelValue": (we) => N.value = we, activator: "parent", contentClass: "v-autocomplete__content", disabled: R.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: $, onAfterLeave: z }, e.menuProps), { default: () => [g(Na, { onFocusin: Q, onKeydown: Te }, { default: () => [n["menu-header"] && x("header", { ref: W }, [n["menu-header"](J)]), X && g(eo, q({ key: "autocomplete-list", ref: Z, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (we) => we.preventDefault(), onFocusout: ce, tabindex: "-1", selectable: !!w.value.length, "aria-live": "polite", "aria-labelledby": `${ke.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, U, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !w.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(In, { key: "no-data", title: a(e.noDataText) }, null)), g(Wr, { ref: u, renderless: true, items: w.value, itemKey: "value" }, { default: (we) => {
          var _a4, _b3, _c3;
          let { item: Pe, index: Be, itemRef: je } = we;
          const He = q(Pe.props, { ref: je, key: Pe.value, active: A.value && Pe === E.value ? true : void 0, onClick: () => de(Pe, null), "aria-posinset": Be + 1, "aria-setsize": w.value.length });
          return Pe.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Pe.raw, index: Be })) ?? g(bn, q(Pe.props, { key: `divider-${Be}` }), null) : Pe.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Pe.raw, index: Be })) ?? g(co, q(Pe.props, { key: `subheader-${Be}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Pe, index: Be, props: He })) ?? g(In, q(He, { role: "option" }), { prepend: (rt) => {
            let { isSelected: ot } = rt;
            return x(be, null, [e.multiple && !e.hideSelected ? g(Rn, { key: Pe.value, modelValue: ot, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (ee) => ee.preventDefault() }, null) : void 0, Pe.props.prependAvatar && g(Sn, { image: Pe.props.prependAvatar }, null), Pe.props.prependIcon && g(qe, { icon: Pe.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Pe.title : ld("v-autocomplete", Pe.title, (_a5 = C(Pe)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && x("footer", { ref: L }, [n["menu-footer"](J)])] })] }), I.value.map((we, Pe) => {
        function Be(ot) {
          ot.stopPropagation(), ot.preventDefault(), de(we, false);
        }
        const je = q(ga.filterProps(we.props), { "onClick:close": Be, onKeydown(ot) {
          ot.key !== "Enter" && ot.key !== " " || (ot.preventDefault(), ot.stopPropagation(), Be(ot));
        }, onMousedown(ot) {
          ot.preventDefault(), ot.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), He = P.value ? !!n.chip : !!n.selection, rt = He ? Dr(P.value ? n.chip({ item: we, index: Pe, props: je }) : n.selection({ item: we, index: Pe })) : void 0;
        if (!(He && !rt)) return x("div", { key: we.value, class: ne(["v-autocomplete__selection", Pe === c.value && ["v-autocomplete__selection--selected", m.value]]), style: me(Pe === c.value ? h.value : {}) }, [P.value ? n.chip ? g(Re, { key: "chip-defaults", defaults: { VChip: { closable: T.value, size: "small", text: we.title } } }, { default: () => [rt] }) : g(ga, q({ key: "chip", closable: T.value, size: "small", text: we.title, disabled: we.props.disabled }, je), null) : rt ?? x("span", { class: "v-autocomplete__selection-text" }, [we.title, e.multiple && Pe < I.value.length - 1 && x("span", { class: "v-autocomplete__selection-comma" }, [Fe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ge = arguments.length, ke = new Array(ge), we = 0; we < ge; we++) ke[we] = arguments[we];
      return x(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ke), e.menuIcon ? g(qe, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: Ar, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(b, { key: "append-icon", name: "appendInner", color: ke[0].iconColor.value }, null)]);
    } });
  }), Mt({ isFocused: o, isPristine: i, menu: N, search: k, filteredItems: p, select: de }, l);
} }), jV = j({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ie, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...xe(), ...Qn({ location: "top end" }), ...dt(), ...$e(), ...Ke(), ...pa({ transition: "scale-rotate-transition" }), ..._t() }, "VBadge"), Py = te()({ name: "VBadge", inheritAttrs: false, props: jV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Qe(() => e.color), { roundedClasses: l } = gt(e), { t: o } = lt(), { textColorClasses: i, textColorStyles: r } = Rt(() => e.textColor), { themeClasses: s } = $r(), { locationStyles: u } = ja(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = Vt(e);
  return ae(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, y] = tu(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return g(e.tag, q({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, y, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [x("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), g(Qt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [at(x("span", q({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? g(qe, { icon: e.icon }, null) : f]), [[Fn, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), UV = j({ color: String, density: String, ...xe() }, "VBannerActions"), Ty = te()({ name: "VBannerActions", props: UV(), setup(e, t) {
  let { slots: n } = t;
  return yt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), ae(() => {
    var _a3;
    return x("div", { class: ne(["v-banner-actions", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Ay = ba("v-banner-text"), GV = j({ avatar: String, bgColor: String, color: String, icon: Ie, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Gt(), ...xe(), ...bt(), ..._t(), ...pl({ mobile: null }), ...It(), ...Qn(), ...io(), ...dt(), ...$e(), ...Ke() }, "VBanner"), YV = te()({ name: "VBanner", props: GV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Qe(() => e.bgColor), { borderClasses: o } = tn(e), { densityClasses: i } = Ht(e), { displayClasses: r, mobile: s } = xn(e), { dimensionStyles: u } = Vt(e), { elevationClasses: c } = Dt(e), { locationStyles: d } = ja(e), { positionClasses: f } = ro(e), { roundedClasses: v } = gt(e), { themeClasses: y } = Je(e), m = B(() => e.color), h = B(() => e.density);
  yt({ VBannerActions: { color: m, density: h } }), ae(() => {
    const b = !!(e.text || n.text), k = !!(e.avatar || e.icon), I = !!(k || n.prepend);
    return g(e.tag, { class: ne(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, y.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: me([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && x("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? g(Re, { key: "prepend-defaults", disabled: !k, defaults: { VAvatar: { color: m.value, density: h.value, icon: e.icon, image: e.avatar } } }, n.prepend) : g(Sn, { key: "prepend-avatar", color: m.value, density: h.value, icon: e.icon, image: e.avatar }, null)]), x("div", { class: "v-banner__content" }, [b && g(Ay, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(Ty, { key: "actions" }, n.actions)];
    } });
  });
} }), KV = j({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Gt(), ...xe(), ...bt(), ...It(), ...dt(), ...Sl({ name: "bottom-navigation" }), ...$e({ tag: "header" }), ...wl({ selectedClass: "v-btn--selected" }), ...Ke() }, "VBottomNavigation"), XV = te()({ name: "VBottomNavigation", props: KV(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = $r(), { borderClasses: l } = tn(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Qe(() => e.bgColor), { densityClasses: r } = Ht(e), { elevationClasses: s } = Dt(e), { roundedClasses: u } = gt(e), { ssrBootStyles: c } = kl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ce(e, "active", e.active), { layoutItemStyles: v } = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Ua(e, Nc), yt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), ae(() => g(e.tag, { class: ne(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: me([i.value, v.value, { height: ve(d.value) }, c.value, e.style]) }, { default: () => [n.default && x("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), Dy = j({ fullscreen: Boolean, scrollable: Boolean, ...Ne(Si({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: Rr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), xu = te()({ name: "VDialog", props: Dy(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { scopeId: o } = _l(), i = O();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return se(l, async (u) => {
    var _a3;
    u || (await Ee(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), ae(() => {
    const u = Kn.filterProps(e), c = q({ "aria-haspopup": "dialog" }, e.activatorProps), d = q({ tabindex: -1 }, e.contentProps);
    return g(Kn, q({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), y = 0; y < f; y++) v[y] = arguments[y];
      return g(Re, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), Mt({}, i);
} }), qV = j({ inset: Boolean, ...Dy({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), ZV = te()({ name: "VBottomSheet", props: qV(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue");
  return ae(() => {
    const l = xu.filterProps(e);
    return g(xu, q(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), JV = j({ divider: [Number, String], ...xe() }, "VBreadcrumbsDivider"), My = te()({ name: "VBreadcrumbsDivider", props: JV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var _a3;
    return x("li", { "aria-hidden": "true", class: ne(["v-breadcrumbs-divider", e.class]), style: me(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), QV = j({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...xe(), ...on(_t(), ["width", "maxWidth"]), ...yi(), ...$e({ tag: "li" }) }, "VBreadcrumbsItem"), Ey = te()({ name: "VBreadcrumbsItem", props: QV(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = hi(e, a), o = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = Vt(e), { textColorClasses: r, textColorStyles: s } = Rt(() => o.value ? e.activeColor : e.color);
  return ae(() => g(e.tag, { class: ne(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: me([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? x("a", q({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), eI = j({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ie, items: { type: Array, default: () => [] }, ...xe(), ...bt(), ...dt(), ...$e({ tag: "ul" }) }, "VBreadcrumbs"), tI = te()({ name: "VBreadcrumbs", props: eI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Qe(() => e.bgColor), { densityClasses: o } = Ht(e), { roundedClasses: i } = gt(e);
  yt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return ae(() => {
    const s = !!(n.prepend || e.icon);
    return g(e.tag, { class: ne(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: me([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && x("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? g(Re, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : g(qe, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return x(be, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? g(Ey, q({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && g(My, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), nI = j({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Gt(), ...xe(), ...It(), ...Lh(), ...dt(), ...$e({ tag: "button" }), ...Ke(), ...wn({ variant: "flat" }) }, "VIconBtn"), By = te()({ name: "VIconBtn", props: nI(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "active"), { themeClasses: o } = Je(e), { borderClasses: i } = tn(e), { elevationClasses: r } = Dt(e), { roundedClasses: s } = gt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = xa(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return ae(() => {
    const y = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, b = f.has(m) ? f.get(m) : m, k = e.height ?? b, I = e.width ?? b, { iconSize: V } = Oh(e, () => new Map(e.iconSizes).get(m)), S = { icon: y, size: V.value, color: e.iconColor, opacity: e.opacity };
    return g(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ne([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: me([{ "--v-icon-btn-rotate": ve(e.rotate, "deg"), "--v-icon-btn-height": ve(k), "--v-icon-btn-width": ve(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [Sa(!e.hideOverlay, "v-icon-btn"), x("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && y ? g(qe, q({ key: "content-icon" }, S), null) : g(Re, { key: "content-defaults", disabled: !y, defaults: { VIcon: { ...S } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? De(e.text);
      } })]), !!e.loading && x("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? g(La, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function aI(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const $y = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, Ry = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, lI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], oI = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], iI = 28, rI = 31, sd = 12, Fy = 1, jr = 1, Ea = 7, Av = 60, sI = 59, uI = 1440, cI = 24, dI = 23, fI = 0, vI = 1e4, mI = 100, gI = 100, hI = 1e4;
function yI(e, t, n) {
  const a = rn(e);
  return Wy(a, t[0], zy), Dn(a), n && dl(a, n, a.hasTime), a;
}
function bI(e, t, n) {
  const a = rn(e);
  return Wy(a, t[t.length - 1]), Dn(a), n && dl(a, n, a.hasTime), a;
}
function Ly(e) {
  const t = rn(e);
  return t.day = jr, Ur(t), Dn(t), t;
}
function Oy(e) {
  const t = rn(e);
  return t.day = cd(t.year, t.month), Ur(t), Dn(t), t;
}
function $l(e) {
  return isFinite(parseInt(e));
}
function pI(e) {
  return typeof e == "number" && isFinite(e) || !!Ry.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function Dv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = Ry.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Wl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!$y.exec(e) || e instanceof Date;
}
function sa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = ud(e);
    return n && dl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = $y.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Ur(l), Dn(l), n && dl(l, n, l.hasTime), l;
}
function ud(e) {
  return Dn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function At(e) {
  return e.year * vI + e.month * mI + e.day;
}
function ku(e) {
  return e.hour * gI + e.minute;
}
function za(e) {
  return At(e) * hI + ku(e);
}
function dl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = At(t), l = At(e), o = a === l;
  return e.hasTime && n && o && (a = ku(t), l = ku(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function Mv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function Ev(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = dI, e.minute = sI, e.time = Hy(e))), e;
}
function Ny(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, wu(e, t), Dn(e), n && dl(e, n, true), e;
}
function Ur(e) {
  return e.weekday = SI(e), e;
}
function Dn(e) {
  return e.time = Hy(e), e.date = xI(e), e;
}
function SI(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % sd + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function cd(e, t) {
  return aI(e) ? oI[t] : lI[t];
}
function rn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function ol(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function xI(e) {
  let t = `${ol(e.year, 4)}-${ol(e.month, 2)}`;
  return e.hasDay && (t += `-${ol(e.day, 2)}`), t;
}
function Hy(e) {
  return e.hasTime ? `${ol(e.hour, 2)}:${ol(e.minute, 2)}` : "";
}
function wu(e, t) {
  for (e.minute += t; e.minute >= Av; ) e.minute -= Av, e.hour++, e.hour >= cI && (Ba(e), e.hour = fI);
  return e;
}
function Ba(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Ea, e.day > iI && e.day > cd(e.year, e.month) && (e.day = jr, e.month++, e.month > sd && (e.month = Fy, e.year++)), e;
}
function zy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Ea, e.day < jr && (e.month--, e.month < Fy && (e.year--, e.month = sd), e.day = cd(e.year, e.month)), e;
}
function Ja(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ba, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function kI(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Wy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ba, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function wI(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < Ea; a++) {
    let l = 1;
    for (let o = 1; o < Ea; o++) {
      const i = (a + o) % Ea;
      if (n[i]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function Cu(e) {
  const t = `${ol(e.hour, 2)}:${ol(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function dr(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = At(t), r = [];
  let s = rn(e), u = 0, c = u === i;
  if (i < At(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = At(s), c = c || u === i, a[s.weekday] === 0) {
      s = Ba(s);
      continue;
    }
    const d = rn(s);
    Dn(d), dl(d, n), r.push(d), s = Ja(s, Ba, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function CI(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = rn(e);
    o.push(Ny(s, r, l));
  }
  return o;
}
function Mo(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(Cu(a));
    } catch {
      return "";
    }
  };
}
function _I(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > Ea || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= Ea) return false;
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
function VI(e) {
  const t = Bt({ now: sa("0000-00-00 00:00", true), today: sa("0000-00-00", true) }), n = _(() => e.now && Wl(e.now) ? sa(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return ud(/* @__PURE__ */ new Date());
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
  return se(n, r), r(), a(), { times: t, parsedNow: n, updateTimes: r, setPresent: a, getNow: l, updateDay: o, updateTime: i };
}
const Gr = j({ start: { type: [String, Number, Date], validate: Wl, default: () => ud(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Wl }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: _I }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Wl }, type: { type: String, default: "month" } }, "VCalendar-base");
function dd(e) {
  const { times: t, updateTimes: n } = VI({ now: e.now }), a = rh(e), l = bl(), o = _(() => e.type === "month" ? Ly(sa(e.start, true)) : sa(e.start, true)), i = _(() => {
    const V = o.value, S = e.end && sa(e.end) || V, p = za(S) < za(V) ? V : S;
    return e.type === "month" ? Oy(p) : p;
  }), r = _(() => Wl(e.modelValue) ? sa(e.modelValue, true) : o.value || t.today), s = _(() => {
    const V = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((p) => parseInt(p, 10)), S = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...V.toSorted().filter((p) => p >= S), ...V.toSorted().filter((p) => p < S)];
  }), u = _(() => {
    const V = r.value, S = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [V.weekday];
      case "4day":
        return [V.weekday, (V.weekday + 1) % 7, (V.weekday + 2) % 7, (V.weekday + 3) % 7];
      case "category":
        return Array.from({ length: S }, (p, C) => (V.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = _(() => wI(s.value)), d = _(() => dr(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : Mo(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : Mo(a.current.value, (V, S) => ({ timeZone: "UTC", weekday: S ? "short" : "long" })));
  function y(V) {
    return Ch(V);
  }
  function m(V) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": S };
  }
  function h(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function b(V) {
    return yI(V, s.value, t.today);
  }
  function k(V) {
    return bI(V, s.value, t.today);
  }
  function I(V) {
    return Mo(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: y, getRelativeClasses: m, getWeekNumber: h, getStartOfWeek: b, getEndOfWeek: k, getFormatter: I, updateTimes: n };
}
const jy = j({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: $l }, intervalWidth: { type: [Number, String], default: 60, validate: $l }, intervalMinutes: { type: [Number, String], default: 60, validate: $l }, firstInterval: { type: [Number, String], default: 0, validate: $l }, firstTime: { type: [Number, String, Object], validate: pI }, intervalCount: { type: [Number, String], default: 24, validate: $l }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function Uy(e) {
  const t = dd(e), n = re(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => Dv(e.firstTime)), s = _(() => {
    const S = r.value;
    return S !== false && S >= 0 && S <= uI ? S : a.value * l.value;
  }), u = _(() => o.value * i.value), c = _(() => dr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const S = c.value, p = s.value, C = l.value, w = o.value, T = t.times.now;
    return S.map((P) => CI(P, p, C, w, T));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : Mo(t.locale.current.value, (S, p) => p ? S.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(S) {
    const p = d.value[0][0];
    return !(p.hour === S.hour && p.minute === S.minute);
  }
  function y(S) {
  }
  function m(S, p) {
    const C = rn(p), w = S.currentTarget.getBoundingClientRect(), T = s.value, P = S, M = S, D = P.changedTouches || P.touches, A = ((D && D[0] ? D[0].clientY : M.clientY) - w.top) / i.value, R = Math.floor(A * l.value), G = T + R;
    return Ny(C, G, t.times.now);
  }
  function h(S) {
    const p = rn(S);
    return p.timeToY = I, p.timeDelta = V, p.minutesToPixels = k, p.week = c.value, p.intervalRange = [s.value, s.value + o.value * l.value], p;
  }
  function b(S) {
    const p = I(S), C = n.value;
    return p === false || !C ? false : (C.scrollTop = p, true);
  }
  function k(S) {
    return S / l.value * i.value;
  }
  function I(S) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = p !== false;
    let T = V(S, typeof p != "boolean" ? p : void 0);
    return T === false || (T *= u.value, C ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function V(S, p) {
    let C = Dv(S);
    if (C === false) return false;
    const w = o.value * l.value;
    if (p && typeof S == "object" && "day" in S) {
      const P = At(S), M = At(p);
      C += (P - M) * w;
    }
    const T = s.value;
    return (C - T) / w;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: y, getTimestampAtEvent: m, getSlotScope: h, scrollToTime: b, minutesToPixels: k, timeToY: I, timeDelta: V };
}
function II(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function PI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const ei = { mounted: II, unmounted: PI }, ko = en({ name: "VCalendarDaily", directives: { vResize: ei }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Gr(), ...jy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = O(0), o = O(), i = Uy(e);
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
    return x("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const E = ve(e.intervalWidth);
    return x("div", { class: "v-calendar-daily__intervals-head", style: { width: E } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(E, A) {
    const R = yn(a, ":day", (G) => ({ nativeEvent: G, ...i.getSlotScope(E) }));
    return x("div", q({ key: E.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(E)] }, R), [m(E), h(E), y(E, A)]);
  }
  function y(E, A) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...E, index: A })) ?? [];
  }
  function m(E) {
    const A = E.present ? e.color : void 0;
    return x("div", q(i.getColorProps({ text: A }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(E, e.shortWeekdays)]);
  }
  function h(E) {
    var _a3;
    return x("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, E)) ?? b(E)]);
  }
  function b(E) {
    const A = yn(a, ":date", (R) => ({ nativeEvent: R, ...E }));
    return g(By, q({ active: E.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Ar }, A), { default: () => [i.dayFormatter.value(E, false)] });
  }
  function k() {
    return x("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return x("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return x("div", { ref: o, class: "v-calendar-daily__pane", style: { height: ve(i.bodyHeight.value) } }, [S()]);
  }
  function S() {
    var _a3;
    return x("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? p()]);
  }
  function p() {
    return i.days.value.map((E, A) => {
      const R = yn(a, ":time", (G) => ({ nativeEvent: G, ...i.getSlotScope(i.getTimestampAtEvent(G, E)) }));
      return x("div", q({ key: E.date, class: ["v-calendar-daily__day", i.getRelativeClasses(E)] }, R), [w(A), C(E)]);
    });
  }
  function C(E) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(E))) ?? [];
  }
  function w(E) {
    return i.intervals.value[E].map(T);
  }
  function T(E) {
    var _a3;
    const A = ve(e.intervalHeight), R = e.intervalStyle || i.intervalStyleDefault;
    return x("div", { class: "v-calendar-daily__day-interval", key: E.time, style: me([{ height: A }, R(E)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(E))]);
  }
  function P() {
    const E = ve(e.intervalWidth), A = yn(a, ":interval", (R) => ({ nativeEvent: R, ...i.getTimestampAtEvent(R, i.parsedStart.value) }));
    return x("div", q({ class: "v-calendar-daily__intervals-body", style: { width: E } }, A), [M()]);
  }
  function M() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(E) {
    const A = ve(e.intervalHeight), R = e.shortIntervals, Y = (e.showIntervalLabel || i.showIntervalLabelDefault)(E) ? i.intervalFormatter.value(E, R) : void 0;
    return x("div", { key: E.time, class: "v-calendar-daily__interval", style: { height: A } }, [x("div", { class: "v-calendar-daily__interval-text" }, [Y])]);
  }
  return Pt(r), ae(() => at(x("div", { class: ne(["v-calendar-daily", a.class]), onDragstart: (E) => E.preventDefault() }, [e.hideHeader ? void 0 : c(), k()]), [[ei, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function TI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function Gy(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : TI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const AI = en({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Gr(), ...jy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Uy(e), o = _(() => Gy(e.categories, e.categoryText));
  function i(h, b) {
    const k = typeof b == "object" && b && b.categoryName === e.categoryForInvalid ? null : b;
    return { ...h, category: k };
  }
  function r(h) {
    return x("div", { class: "v-calendar-category__columns" }, [o.value.map((b) => s(h, i(h, b)))]);
  }
  function s(h, b) {
    var _a3, _b2;
    const k = typeof b.category == "object" ? b.category.categoryName : b.category, I = yn(a, ":dayCategory", () => i(l.getSlotScope(h) || h, b.category));
    return x("div", q({ class: "v-calendar-category__column-header" }, I), [((_a3 = n.category) == null ? void 0 : _a3.call(n, b)) ?? u(k), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, b)]);
  }
  function u(h) {
    return x("div", { class: "v-calendar-category__category" }, [h === null ? e.categoryForInvalid : h]);
  }
  function c() {
    const h = [];
    return l.days.value.forEach((b, k) => {
      const I = new Array(o.value.length || 1);
      I.fill(b), h.push(...I.map((V, S) => d(V, k, S)));
    }), h;
  }
  function d(h, b, k) {
    const I = o.value[k], V = yn(a, ":time", (S) => l.getSlotScope(l.getTimestampAtEvent(S, h)));
    return x("div", q({ key: h.date + "-" + k, class: ["v-calendar-daily__day", l.getRelativeClasses(h)] }, V), [f(b, I), y(h, I)]);
  }
  function f(h, b) {
    return l.intervals.value[h].map((k) => v(k, b));
  }
  function v(h, b) {
    var _a3;
    const k = ve(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return x("div", { key: h.time, class: "v-calendar-daily__day-interval", style: me([{ height: k }, I({ ...h, category: b })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(h), b))]);
  }
  function y(h, b) {
    return x("div", { class: "v-calendar-category__columns" }, [m(h, b)]);
  }
  function m(h, b) {
    var _a3;
    const k = yn(a, ":timeCategory", (I) => i(l.getSlotScope(l.getTimestampAtEvent(I, h)), b));
    return x("div", q({ class: "v-calendar-category__column" }, k), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(h), b))]);
  }
  return ae(() => g(ko, q({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), Bv = en({ name: "VCalendarWeekly", props: { minWeeks: { validate: $l, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Gr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = dd(e), o = $r(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const S = i.value * l.parsedWeekdays.value.length, p = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return dr(p, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, S);
  }), s = _(() => {
    const S = l.times.today, p = l.getStartOfWeek(S), C = l.getEndOfWeek(S);
    return dr(p, C, S, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = _(() => e.monthFormat ? e.monthFormat : Mo(l.locale.current.value, (S, p) => ({ timeZone: "UTC", month: p ? "short" : "long" })));
  function c(S) {
    const p = At(S);
    return p < At(l.parsedStart.value) || p > At(l.parsedEnd.value);
  }
  function d() {
    return x("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const S = s.value.map(v);
    return e.showWeek && S.unshift(x("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), S;
  }
  function v(S, p) {
    const C = c(r.value[p]), w = S.present ? e.color : void 0;
    return x("div", q(l.getColorProps({ text: w }), { key: S.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(S, C)], role: "columnheader" }), [l.weekdayFormatter.value(S, e.shortWeekdays)]);
  }
  function y() {
    const S = r.value, p = l.parsedWeekdays.value.length, C = [];
    for (let w = 0; w < S.length; w += p) C.push(m(S.slice(w, w + p), h(S[w])));
    return C;
  }
  function m(S, p) {
    const C = S.map((w, T) => k(w, T, S));
    return e.showWeek && C.unshift(b(p)), x("div", { key: S[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function h(S) {
    return l.getWeekNumber(S);
  }
  function b(S) {
    return x("div", { class: "v-calendar-weekly__weeknumber" }, [x("small", null, [String(S)])]);
  }
  function k(S, p, C) {
    var _a3;
    const w = c(S), T = yn(a, ":day", (P) => ({ nativeEvent: P, ...S }));
    return x("div", q({ key: S.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(S, w)], role: "cell" }, T), [I(S), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: w, index: p, week: C, ...S })]);
  }
  function I(S) {
    var _a3;
    return x("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, S)) ?? V(S)]);
  }
  function V(S) {
    const p = S.day === 1 && e.showMonthOnFirst, C = yn(a, ":date", (w) => ({ nativeEvent: w, ...S }));
    return g(By, q({ active: S.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Ar }, C), { default: () => [p ? u.value(S, e.shortMonths) + " " + l.dayFormatter.value(S, false) : l.dayFormatter.value(S, false)] });
  }
  return ae(() => x("div", { class: ne(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (S) => S.preventDefault() }, [e.hideHeader ? void 0 : d(), y()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), DI = 864e5;
function Yy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function Mn(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function $v(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function Ky(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Xy(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function qy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + DI, e.endTimestampIdentifier)];
}
function MI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (Mn(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? Ky(s.event) : Xy(s.event);
      if (Mn(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function Zy(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = za(n), r = Yy(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? Ky(s.event) : Xy(s.event);
      t.groups.length > 0 && !Mn(u, c, t.min, t.max, l) && ($v(t.groups), t.reset());
      let d = MI(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), $v(t.groups), l && t.reset(), r;
  } };
  return t;
}
const Rv = 100, EI = (e, t, n) => {
  const a = Zy(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * Rv / u.columnCount, u.width = Rv / u.columnCount;
    }), s;
  };
}, $i = 100, BI = 5, $I = 1.7, RI = (e, t, n) => {
  const a = Zy(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = za(l), u = Yy(o, s), c = WI(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const y = jI(v, s), m = NI(y, f);
        if (m === false) {
          const h = HI(y, f);
          h && (y.parent = h, y.sibling = Mn(y.start, y.end, h.start, Ui(h.start, n)), y.index = h.index + 1, h.children.push(y));
        } else {
          const [h] = Fv(y, f, m - 1, m - 1), b = Fv(y, f, m + 1, m + f.length, true);
          y.children = b, y.index = m, h && (y.parent = h, y.sibling = Mn(y.start, y.end, h.start, Ui(h.start, n)), h.children.push(y));
          for (const k of b) k.parent === h && (k.parent = y), k.index - y.index <= 1 && y.sibling && Mn(y.start, Ui(y.start, n), k.start, k.end) && (k.sibling = true);
        }
        f.push(y);
      }
      FI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function FI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = Jy(n) + 1, i = l ? l.visual.left : 0, r = $i - i, s = Math.min(BI, $i / o), u = LI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = zI(n, e, t) ? $i - a.left : Math.min($i - a.left, d * $I);
  }
}
function LI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function OI(e, t) {
  const n = [];
  for (const a of t) Mn(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function NI(e, t) {
  const n = OI(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function Fv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && Mn(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function HI(e, t) {
  let n = null;
  for (const a of t) Mn(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function zI(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && Mn(e.start, Ui(e.start, n), a.start, a.end)) return false;
  return true;
}
function WI(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = qy(a.event, t);
    let i = false;
    for (const r of n) if (Mn(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function jI(e, t) {
  const [n, a] = qy(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function Jy(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = Jy(n);
    a > t && (t = a);
  }
  return t;
}
function Ui(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const Qy = { stack: RI, column: EI };
function UI(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = sa(i, true), u = r ? sa(r, true) : s, c = Mv(i) ? Ev(s, l) : s, d = Mv(r) ? Ev(u, l) : u, f = At(c), v = za(c), y = At(d), m = c.hasTime ? 0 : 2359, h = za(d) + m, b = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: y, endTimestampIdentifier: h, allDay: b, index: t, category: o };
}
function fd(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function GI(e, t, n) {
  if (n) {
    const a = wu(rn(t), n[0]), l = wu(rn(t), n[1]), o = e.startTimestampIdentifier < za(l), i = e.endTimestampIdentifier > za(a);
    return o && i;
  }
  return fd(e, At(t));
}
function YI(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function Lv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && fd(e, n);
}
function KI(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const XI = 100, qI = 95, ZI = j({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in Qy || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function JI(e, t, n) {
  const a = dd(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (A) => !!A[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (A) => A[e.eventCategory]), s = _(() => e.events ? e.events.map((A, R) => UI(A, R, e.eventStart || "", e.eventEnd || "", i.value(A), o.value ? r.value(A) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (A, R) => A.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : Qy[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
  function y(A) {
    return typeof e.eventColor == "function" ? e.eventColor(A) : A.color || e.eventColor;
  }
  const m = O([]);
  function h() {
    if (l.value || !e.eventMore) return;
    const A = e.eventHeight || 0, R = b();
    for (const G in R) {
      const { parent: N, events: Y, more: H } = R[G];
      if (!H) break;
      const F = N.getBoundingClientRect(), Z = Y.length - 1, W = Y.map((U) => ({ event: U, bottom: U.getBoundingClientRect().bottom })).sort((U, ie) => U.bottom - ie.bottom);
      let L = 0;
      for (let U = 0; U <= Z; U++) {
        const ie = W[U].bottom;
        (U === Z ? ie > F.bottom : ie + A > F.bottom) && (W[U].event.style.display = "none", L++);
      }
      L ? (H.style.display = "", H.innerHTML = a.locale.t(e.eventMoreText, L)) : H.style.display = "none";
    }
  }
  function b() {
    const A = {}, R = m.value;
    return !R || !R.length || R.forEach((G) => {
      const N = G.getAttribute("data-date");
      G.parentElement && N && (N in A || (A[N] = { parent: G.parentElement, more: null, events: [] }), G.getAttribute("data-more") ? A[N].more = G : (A[N].events.push(G), G.style.display = ""));
    }), A;
  }
  function k(A, R) {
    let { event: G } = A;
    const N = e.eventHeight || 0, Y = e.eventMarginBottom || 0, H = At(R), F = R.week, Z = H === G.startIdentifier;
    let W = H === G.endIdentifier, L = qI;
    if (!o.value) for (let ie = R.index + 1; ie < F.length; ie++) {
      const Se = At(F[ie]);
      if (G.endIdentifier >= Se) L += XI, W = W || Se === G.endIdentifier;
      else {
        W = true;
        break;
      }
    }
    return V(G, { eventParsed: G, day: R, start: Z, end: W, timed: false }, false, { class: ["v-event", { "v-event-start": Z, "v-event-end": W }], style: { height: `${N}px`, width: `${L}%`, marginBottom: `${Y}px` }, "data-date": R.date });
  }
  function I(A, R) {
    let { event: G, left: N, width: Y } = A;
    const H = R.timeDelta(G.start, R), F = R.timeDelta(G.end, R);
    if (F === false || H === false || F < 0 || H >= 1 || YI(G, R)) return false;
    const Z = At(R), W = G.startIdentifier >= Z, L = G.endIdentifier > Z, U = R.timeToY(G.start, R), ie = R.timeToY(G.end, R), Se = Math.max(e.eventHeight || 0, ie - U);
    return V(G, { eventParsed: G, day: R, start: W, end: L, timed: true }, true, { class: "v-event-timed", style: { top: `${U}px`, height: `${Se}px`, left: `${N}%`, width: `${Y}%` } });
  }
  function V(A, R, G, N) {
    const Y = t.event, H = c.value(A.input), F = y(A.input), Z = A.start.hour < 12 && A.end.hour >= 12, W = kI(A.start, A.end) <= u.value, L = (fe, Te) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: fe.minute > 0 ? "numeric" : void 0 })(fe, true), U = () => L(A.start) + " - " + L(A.end), ie = () => {
      const fe = d.value(A, G);
      if (A.start.hasTime) if (G) {
        const Te = U(), _e = W ? ", " : x("br", null, null);
        return x("span", { class: "v-event-summary" }, [x("strong", null, [fe]), _e, Te]);
      } else {
        const Te = L(A.start);
        return x("span", { class: "v-event-summary" }, [x("strong", null, [Te]), Fe(" "), fe]);
      }
      return x("span", { class: "v-event-summary" }, [fe]);
    }, Se = { ...R, event: A.input, outside: R.day.outside, singline: W, overlapsNoon: Z, formatTime: L, timeSummary: U, eventSummary: ie }, K = yn(n, ":event", (fe) => ({ ...Se, nativeEvent: fe }));
    return at(x("div", q(a.getColorProps({ text: H, background: F }), K, N, { ref_for: true, ref: m }), [(Y == null ? void 0 : Y(Se)) ?? S(ie)]), [[Nt, e.eventRipple ?? true]]);
  }
  function S(A) {
    return x("div", { class: "pl-1" }, [A()]);
  }
  function p(A) {
    const R = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return x("div", { style: { height: `${R}px` }, "data-date": A.date, ref_for: true, ref: m }, null);
  }
  function C(A) {
    const R = e.eventHeight || 0, G = e.eventMarginBottom || 0, N = yn(n, ":more", (Y) => ({ nativeEvent: Y, ...A }));
    return at(x("div", q({ class: ["v-event-more pl-1", { "v-outside": A.outside }], "data-date": A.date, "data-more": "1", style: { display: "none", height: `${R}px`, marginBottom: `${G}px` }, ref_for: true, ref: m }, N), null), [[Nt, e.eventRipple ?? true]]);
  }
  function w() {
    const A = a.days.value, R = At(A[0]), G = At(A[A.length - 1]);
    return s.value.filter((N) => KI(N, R, G));
  }
  function T(A, R) {
    return !o.value || typeof R == "object" && R.categoryName && R.categoryName === A.category || typeof A.category == "string" && R === A.category || typeof A.category != "string" && R === null;
  }
  function P(A) {
    const R = At(A), G = v.value[0];
    return s.value.filter((N) => Lv(N, A, R, G));
  }
  function M(A) {
    const R = At(A), G = v.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? fd(N, R) : Lv(N, A, R, G)) && T(N, A.category));
  }
  function D(A) {
    return s.value.filter((R) => !R.allDay && GI(R, A, A.intervalRange) && T(R, A.category));
  }
  function E() {
    if (l.value) return { ...t };
    const A = f.value(s.value, v.value[0], u.value), R = (N) => !!N, G = (N, Y, H, F) => {
      const Z = Y(N), W = A(N, Z, F, o.value);
      if (F) return W.map((U) => H(U, N)).filter(R);
      const L = [];
      return W.forEach((U, ie) => {
        for (; L.length < U.column; ) L.push(p(N));
        const Se = H(U, N);
        Se && L.push(Se);
      }), L;
    };
    return { ...t, day: (N) => {
      let Y = G(N, P, k, false);
      if (Y && Y.length > 0 && e.eventMore && Y.push(C(N)), t.day) {
        const H = t.day(N);
        H && (Y = Y ? Y.concat(H) : H);
      }
      return Y;
    }, "day-header": (N) => {
      let Y = G(N, M, k, false);
      if (t["day-header"]) {
        const H = t["day-header"](N);
        H && (Y = Y ? Y.concat(H) : H);
      }
      return Y;
    }, "day-body": (N) => {
      const Y = G(N, D, I, true);
      let H = [x("div", { class: "v-event-timed-container" }, [Y])];
      if (t["day-body"]) {
        const F = t["day-body"](N);
        F && (H = H.concat(F));
      }
      return H;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: y, eventsRef: m, updateEventVisibility: h, getEventsMap: b, genDayEvent: k, genTimedEvent: I, genEvent: V, genName: S, genPlaceholder: p, genMore: C, getVisibleEvents: w, isEventForCategory: T, getEventsForDay: P, getEventsForDayAll: M, getEventsForDayTimed: D, getScopedSlots: E };
}
const QI = te()({ name: "VCalendar", directives: { vResize: ei }, props: { modelValue: { type: [String, Number, Date], validate: Wl }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Gr(), ...ZI() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = O(), i = JI(e, n, a), r = O(null), s = O(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => Gy(e.categories, e.categoryText)), d = _(() => {
    const p = i.parsedValue.value;
    let C = null, w = e.maxDays, T = c.value, P = p, M = p;
    switch (e.type) {
      case "month":
        C = Bv, P = Ly(p), M = Oy(p);
        break;
      case "week":
        C = ko, P = i.getStartOfWeek(p), M = i.getEndOfWeek(p), w = 7;
        break;
      case "day":
        C = ko, w = 1;
        break;
      case "4day":
        C = ko, M = Ja(rn(M), Ba, 3), Dn(M), w = 4;
        break;
      case "custom-weekly":
        C = Bv, P = i.parsedStart.value || p, M = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = ko, P = i.parsedStart.value || p, M = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = AI, M = Ja(rn(M), Ba, D), Dn(M), w = D, T = S(T);
        break;
      default:
        const E = e.type;
        throw new Error(`${E} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: M, maxDays: w, categories: T };
  }), f = _(() => i.effectiveWeekdays.value), v = _(() => e.type === "category"), y = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), h = _(() => {
    const { start: p, end: C } = d.value, w = p.year !== C.year, T = w || p.month !== C.month;
    return w ? m.value(p, true) + " " + p.year + " - " + m.value(C, true) + " " + C.year : T ? m.value(p, true) + " - " + m.value(C, true) + " " + C.year : y.value(p, false) + " " + p.year;
  });
  function b() {
    const { start: p, end: C } = d.value;
    (!r.value || !s.value || p.date !== r.value.date || C.date !== s.value.date) && (r.value = p, s.value = C, l("change", { start: p, end: C }));
  }
  function k() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = rn(i.parsedValue.value), w = p > 0, T = w ? Ba : zy, P = w ? rI : jr;
    let M = w ? p : -p;
    for (; --M >= 0; ) switch (e.type) {
      case "month":
        C.day = P, T(C);
        break;
      case "week":
        Ja(C, T, Ea);
        break;
      case "day":
        Ja(C, T, 1);
        break;
      case "4day":
        Ja(C, T, 4);
        break;
      case "category":
        Ja(C, T, u.value);
        break;
    }
    Ur(C), Dn(C), dl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", Cu(C)) : typeof e.modelValue == "number" ? l("update:modelValue", Cu(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function I() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    k(p);
  }
  function V() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    k(-p);
  }
  function S(p) {
    if (!i.noEvents.value) {
      const C = p.reduce((w, T, P) => (typeof T == "object" && T.categoryName ? w[T.categoryName] = { index: P, count: 0 } : typeof T == "string" && (w[T] = { index: P, count: 0 }), w), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let w = p.length;
        i.parsedEvents.value.forEach((T) => {
          let P = T.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: w++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const w in C) C[w].count === 0 && delete C[w];
      p = p.filter((w) => typeof w == "object" && w.categoryName ? C.hasOwnProperty(w.categoryName) : typeof w == "string" ? C.hasOwnProperty(w) : false);
    }
    return p;
  }
  return se(d, b), Pt(() => {
    i.updateEventVisibility(), b();
  }), kr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), ae(() => {
    const { start: p, end: C, maxDays: w, component: T, categories: P } = d.value;
    return at(g(T, q({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, T.filterProps(e), { start: p.date, end: C.date, maxDays: w, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (M, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[ei, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Mt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: h, monthLongFormatter: y, monthShortFormatter: m, parsedCategories: c, checkChange: b, move: k, next: I, prev: V, getCategoryList: S }, o);
} }), eP = j({ ...xe(), ...$e() }, "VCardActions"), eb = te()({ name: "VCardActions", props: eP(), setup(e, t) {
  let { slots: n } = t;
  return yt({ VBtn: { slim: true, variant: "text" } }), ae(() => g(e.tag, { class: ne(["v-card-actions", e.class]), style: me(e.style) }, n)), {};
} }), tP = j({ opacity: [Number, String], ...xe(), ...$e() }, "VCardSubtitle"), tb = te()({ name: "VCardSubtitle", props: tP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-card-subtitle", e.class]), style: me([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), nb = ba("v-card-title"), nP = j({ appendAvatar: String, appendIcon: Ie, prependAvatar: String, prependIcon: Ie, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...xe(), ...bt(), ...$e() }, "VCardItem"), ab = te()({ name: "VCardItem", props: nP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return g(e.tag, { class: ne(["v-card-item", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [l && x("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? g(Re, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : x(be, null, [e.prependAvatar && g(Sn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(qe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), x("div", { class: "v-card-item__content" }, [r && g(nb, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? De(e.title)];
      } }), s && g(tb, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? De(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && x("div", { key: "append", class: "v-card-item__append" }, [n.append ? g(Re, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : x(be, null, [e.appendIcon && g(qe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(Sn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), aP = j({ opacity: [Number, String], ...xe(), ...$e() }, "VCardText"), lb = te()({ name: "VCardText", props: aP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-card-text", e.class]), style: me([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), lP = j({ appendAvatar: String, appendIcon: Ie, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Gt(), ...xe(), ...bt(), ..._t(), ...It(), ...Or(), ...Qn(), ...io(), ...dt(), ...yi(), ...$e(), ...Ke(), ...wn({ variant: "elevated" }) }, "VCard"), oP = te()({ name: "VCard", directives: { vRipple: Nt }, props: lP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Je(e), { borderClasses: o } = tn(e), { colorClasses: i, colorStyles: r, variantClasses: s } = xa(e), { densityClasses: u } = Ht(e), { dimensionStyles: c } = Vt(e), { elevationClasses: d } = Dt(e), { loaderClasses: f } = mi(e), { locationStyles: v } = ja(e), { positionClasses: y } = ro(e), { roundedClasses: m } = gt(e), h = hi(e, n), b = re(void 0);
  return se(() => e.loading, (k, I) => {
    b.value = !k && typeof I == "string" ? I : typeof k == "boolean" ? void 0 : k;
  }, { immediate: true }), ae(() => {
    const k = e.link !== false && h.isLink.value, I = !e.disabled && e.link !== false && (e.link || h.isClickable.value), V = k ? "a" : e.tag, S = !!(a.title || e.title != null), p = !!(a.subtitle || e.subtitle != null), C = S || p, w = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), M = C || T || w, D = !!(a.text || e.text != null);
    return at(g(V, q(h.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, u.value, d.value, f.value, y.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": ve(e.height) }, e.style], onClick: I && h.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && x("div", { key: "image", class: "v-card__image" }, [a.image ? g(Re, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : g(ma, { key: "image-img", cover: true, src: e.image }, null)]), g(gi, { name: "v-card", active: !!e.loading, color: b.value }, { default: a.loader }), M && g(ab, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && g(lb, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && g(eb, null, { default: a.actions }), Sa(I, "v-card")];
    } }), [[Nt, I && e.ripple]]);
  }), {};
} }), iP = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function rP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function sP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), iP(t);
}
function uP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function cP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => rP(n, t), touchend: (n) => sP(n, t), touchmove: (n) => uP(n, t) };
}
function dP(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = cP(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, Og(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function fP(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  Og(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const fr = { mounted: dP, unmounted: fP }, ob = Symbol.for("vuetify:v-window"), ib = Symbol.for("vuetify:v-window-group"), Yr = j({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...xe(), ...$e(), ...Ke() }, "VWindow"), fl = te()({ name: "VWindow", directives: { vTouch: fr }, props: Yr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { isRtl: l } = Tt(), { t: o } = lt(), i = Ua(e, ib), r = O(), s = _(() => l.value ? !e.reverse : e.reverse), u = re(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const p = e.direction === "vertical" ? "y" : "x", w = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${p}${w}-transition`;
  }), d = re(0), f = O(void 0), v = _(() => i.items.value.findIndex((p) => i.selected.value.includes(p.id)));
  se(v, (p, C) => {
    let w;
    const T = { left: 0, top: 0 };
    nt && C >= 0 && (w = Mr(r.value), T.left = w == null ? void 0 : w.scrollLeft, T.top = w == null ? void 0 : w.scrollTop);
    const P = i.items.value.length, M = P - 1;
    P <= 2 ? u.value = p < C : p === M && C === 0 ? u.value = false : p === 0 && C === M ? u.value = true : u.value = p < C, Ee(() => {
      if (!nt || !w) return;
      w.scrollTop !== T.top && w.scrollTo({ ...T, behavior: "instant" }), requestAnimationFrame(() => {
        if (!w) return;
        w.scrollTop !== T.top && w.scrollTo({ ...T, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), ft(ob, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const y = B(() => e.continuous || v.value !== 0), m = B(() => e.continuous || v.value !== i.items.value.length - 1);
  function h() {
    y.value && i.prev();
  }
  function b() {
    m.value && i.next();
  }
  const k = _(() => {
    const p = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    p.push(y.value ? n.prev ? n.prev({ props: C }) : g(Ue, C, null) : x("div", null, null));
    const w = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return p.push(m.value ? n.next ? n.next({ props: w }) : g(Ue, w, null) : x("div", null, null)), p;
  }), I = _(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? h() : b();
  }, right: () => {
    s.value ? b() : h();
  }, start: (C) => {
    let { originalEvent: w } = C;
    w.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function V(p) {
    (e.direction === "horizontal" && p.key === "ArrowLeft" || e.direction === "vertical" && p.key === "ArrowUp") && (p.preventDefault(), h(), Ee(() => {
      y.value ? S(0) : S(1);
    })), (e.direction === "horizontal" && p.key === "ArrowRight" || e.direction === "vertical" && p.key === "ArrowDown") && (p.preventDefault(), b(), Ee(() => {
      m.value ? S(1) : S(0);
    }));
  }
  function S(p) {
    var _a3;
    const C = k.value[p];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return ae(() => at(g(e.tag, { ref: r, class: ne(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: me([e.style, { "--v-window-transition-duration": Gn() ? null : ve(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [x("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && x("div", { class: ne(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [k.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[fr, I.value]])), { group: i };
} }), vP = j({ color: String, cycle: Boolean, delimiterIcon: { type: Ie, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Yr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), mP = te()({ name: "VCarousel", props: vP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { t: l } = lt(), o = O();
  let i = -1;
  se(a, s), se(() => e.interval, s), se(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), Pt(r);
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
  return ae(() => {
    const c = fl.filterProps(e);
    return g(fl, q({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ve(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return x(be, null, [!e.hideDelimiters && x("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && g(Re, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, y) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", y + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (h) => u(h, f) };
        return n.item ? n.item({ props: m, item: v }) : g(Ue, q(v, m), null);
      })] })]), e.progress && g(Lr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), Kr = j({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...xe(), ...Cl(), ...Jc() }, "VWindowItem"), vl = te()({ name: "VWindowItem", directives: { vTouch: fr }, props: Kr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(ob), l = Fa(e, ib), { isBooted: o } = kl();
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
  function d(y) {
    i.value && Ee(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ve(y.clientHeight));
    });
  }
  const f = _(() => {
    const y = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof y != "string" ? a.transition.value : y, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = Qc(e, l.isSelected);
  return ae(() => g(Qt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [at(x("div", { class: ne(["v-window-item", l.selectedClass.value, e.class]), style: me(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[Fn, l.isSelected.value]])];
  } })), { groupItem: l };
} }), gP = j({ ..._h(), ...Kr() }, "VCarouselItem"), hP = te()({ name: "VCarouselItem", inheritAttrs: false, props: gP(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  ae(() => {
    const l = ma.filterProps(e), o = vl.filterProps(e);
    return g(vl, q({ class: ["v-carousel-item", e.class] }, o), { default: () => [g(ma, q(a, l), n)] });
  });
} }), yP = ba("v-code", "code"), bP = j({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...xe() }, "VColorPickerCanvas"), pP = en({ name: "VColorPickerCanvas", props: bP(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = re(false), l = O(), o = re(parseFloat(e.width)), i = re(parseFloat(e.height)), r = O({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(b) {
    var _a3, _b2;
    if (!l.value) return;
    const { x: k, y: I } = b;
    r.value = b, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: tt(k, 0, o.value) / o.value, v: 1 - tt(I, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: b, y: k } = u.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: ve(e.dotSize), height: ve(e.dotSize), transform: `translate(${ve(b - I)}, ${ve(k - I)})` };
  }), { resizeRef: d } = Vn((b) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: k, height: I } = b[0].contentRect;
    o.value = Math.round(k), i.value = Math.round(I);
  });
  function f(b, k, I) {
    const { left: V, top: S, width: p, height: C } = I;
    u.value = { x: tt(b - V, 0, p), y: tt(k - S, 0, C) };
  }
  function v(b) {
    b.type === "mousedown" && b.preventDefault(), s.value && (y(b), window.addEventListener("mousemove", y), window.addEventListener("mouseup", m), window.addEventListener("touchmove", y), window.addEventListener("touchend", m));
  }
  function y(b) {
    if (!s.value || !l.value) return;
    a.value = true;
    const k = Sw(b);
    f(k.clientX, k.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", m);
  }
  function h() {
    var _a3;
    if (!l.value) return;
    const b = l.value, k = b.getContext("2d");
    if (!k) return;
    const I = k.createLinearGradient(0, 0, b.width, 0);
    I.addColorStop(0, "hsla(0, 0%, 100%, 1)"), I.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), k.fillStyle = I, k.fillRect(0, 0, b.width, b.height);
    const V = k.createLinearGradient(0, 0, 0, b.height);
    V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = V, k.fillRect(0, 0, b.width, b.height);
  }
  return se(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, h, { immediate: true }), se(() => [o.value, i.value], (b, k) => {
    h(), r.value = { x: u.value.x * b[0] / k[0], y: u.value.y * b[1] / k[1] };
  }, { flush: "post" }), se(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), Pt(() => h()), ae(() => x("div", { ref: d, class: ne(["v-color-picker-canvas", e.class]), style: me(e.style), onMousedown: v, onTouchstartPassive: v }, [x("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && x("div", { class: ne(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: me(c.value) }, null)])), {};
} });
function SP(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function xP(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = Yn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = ou(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = th(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return el(t, ["r", "g", "b"]) ? n = Yn(e) : el(t, ["h", "s", "l"]) ? n = ou(e) : el(t, ["h", "s", "v"]) && (n = e), SP(n, !el(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Ll = { h: 0, s: 0, v: 0, a: 1 }, _u = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Yn, from: di }, kP = { ..._u, inputs: (_a2 = _u.inputs) == null ? void 0 : _a2.slice(0, 3) }, Vu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: ou, from: _c }, wP = { ...Vu, inputs: Vu.inputs.slice(0, 3) }, rb = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: th, from: Uw }, CP = { ...rb, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, il = { rgb: kP, rgba: _u, hsl: wP, hsla: Vu, hex: CP, hexa: rb }, _P = (e) => {
  let { label: t, ...n } = e;
  return x("div", { class: "v-color-picker-edit__input" }, [x("input", Up(dg(n)), null), x("span", null, [t])]);
}, VP = j({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(il).includes(e) }, modes: { type: Array, default: () => Object.keys(il), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(il).includes(t)) }, ...xe() }, "VColorPickerEdit"), IP = en({ name: "VColorPickerEdit", props: VP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = lt(), l = _(() => e.modes.map((i) => ({ ...il[i], name: i }))), o = _(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const y = v.target;
        y && n("update:color", i.from(c(r ?? i.to(Ll), y.value)));
      } };
    });
  });
  return ae(() => {
    var _a3;
    return x("div", { class: ne(["v-color-picker-edit", e.class]), style: me(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => g(_P, i, null)), l.value.length > 1 && g(Ue, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), vd = Symbol.for("vuetify:v-slider");
function Iu(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function PP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const sb = j({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...dt(), ...It({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), ub = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(Rf(a.value), Rf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = tt(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, cb = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = uo(t), { isRtl: s } = Tt(), u = B(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: v, step: y, decimals: m, roundValue: h } = n, b = _(() => parseInt(t.thumbSize, 10)), k = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (v.value - f.value) / y.value), S = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), p = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), w = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = re(false), P = re(0), M = O(), D = O();
  function E(K) {
    var _a3;
    const fe = (_a3 = M.value) == null ? void 0 : _a3.$el;
    if (!fe) return;
    const Te = t.direction === "vertical", _e = Te ? "top" : "left", ye = Te ? "height" : "width", $ = Te ? "clientY" : "clientX", { [_e]: z, [ye]: Q } = fe.getBoundingClientRect(), ce = PP(K, $);
    let oe = tt((ce - z - P.value) / Q) || 0;
    return (Te ? d.value : d.value !== s.value) && (oe = 1 - oe), h(f.value + oe * (v.value - f.value));
  }
  const A = (K) => {
    const fe = E(K);
    fe != null && o({ value: fe }), T.value = false, P.value = 0;
  }, R = (K) => {
    const fe = E(K);
    D.value = i(K), D.value && (T.value = true, D.value.contains(K.target) ? P.value = Iu(K, D.value, t.direction) : (P.value = 0, fe != null && l({ value: fe })), fe != null && a({ value: fe }), Ee(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, G = { passive: true, capture: true };
  function N(K) {
    const fe = E(K);
    fe != null && l({ value: fe });
  }
  function Y(K) {
    K.stopPropagation(), K.preventDefault(), A(K), window.removeEventListener("mousemove", N, G), window.removeEventListener("mouseup", Y);
  }
  function H(K) {
    var _a3;
    A(K), window.removeEventListener("touchmove", N, G), (_a3 = K.target) == null ? void 0 : _a3.removeEventListener("touchend", H);
  }
  function F(K) {
    var _a3;
    R(K), window.addEventListener("touchmove", N, G), (_a3 = K.target) == null ? void 0 : _a3.addEventListener("touchend", H, { passive: false });
  }
  function Z(K) {
    K.button === 0 && (K.preventDefault(), R(K), window.addEventListener("mousemove", N, G), window.addEventListener("mouseup", Y, { passive: false }));
  }
  St(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", Y);
  });
  const W = (K) => {
    const fe = (K - f.value) / (v.value - f.value) * 100;
    return tt(isNaN(fe) ? 0 : fe, 0, 100);
  }, L = B(() => t.showTicks), U = _(() => L.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((K) => ({ value: K, position: W(K), label: K.toString() })) : Object.keys(t.ticks).map((K) => ({ value: parseFloat(K), position: W(parseFloat(K)), label: t.ticks[K] })) : V.value !== 1 / 0 ? Wn(V.value + 1).map((K) => {
    const fe = f.value + K * y.value;
    return { value: fe, position: W(fe) };
  }) : [] : []), ie = _(() => U.value.some((K) => {
    let { label: fe } = K;
    return !!fe;
  })), Se = { activeThumbRef: D, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: ie, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: T, noKeyboard: B(() => t.noKeyboard), numTicks: V, onSliderMousedown: Z, onSliderTouchstart: F, parsedTicks: U, parseMouseMove: E, position: W, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: h, showTicks: L, startOffset: P, step: y, thumbSize: b, thumbColor: S, thumbLabelColor: p, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: k, trackColor: C, trackContainerRef: M, trackFillColor: w, trackSize: I, vertical: c };
  return ft(vd, Se), Se;
}, TP = j({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...xe() }, "VSliderThumb"), Pu = te()({ name: "VSliderThumb", directives: { vRipple: Nt }, props: TP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ge(vd), { isRtl: o, rtlClasses: i } = Tt();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: y, direction: m, isReversed: h, vertical: b, readonly: k, elevation: I, mousePressed: V, decimals: S, indexFromEnd: p } = l, C = re(false), w = re(false), T = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = Dt(T), { textColorClasses: M, textColorStyles: D } = Rt(u), { backgroundColorClasses: E, backgroundColorStyles: A } = Qe(c), { pageup: R, pagedown: G, end: N, home: Y, left: H, right: F, down: Z, up: W } = eu, L = [R, G, N, Y, H, F, Z, W], U = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ie(K, fe) {
    if (e.noKeyboard || f.value || !L.includes(K.key)) return;
    K.preventDefault();
    const Te = d.value || 0.1, _e = (s.value - r.value) / Te;
    if ([H, F, Z, W].includes(K.key)) {
      const $ = (b.value ? [o.value ? H : F, h.value ? Z : W] : p.value !== o.value ? [H, W] : [F, W]).includes(K.key) ? 1 : -1, z = K.shiftKey ? 2 : K.ctrlKey ? 1 : 0;
      $ === -1 && fe === s.value && !z && !Number.isInteger(_e) ? fe = fe - _e % 1 * Te : fe = fe + $ * Te * U.value[z];
    } else if (K.key === Y) fe = r.value;
    else if (K.key === N) fe = s.value;
    else {
      const ye = K.key === G ? 1 : -1;
      fe = fe - ye * Te * (_e > 100 ? _e / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, fe));
  }
  function Se(K) {
    const fe = ie(K, e.modelValue);
    fe != null && (w.value = false, a("update:modelValue", fe));
  }
  return se(() => e.focused, (K) => {
    K && (w.value = false);
  }), ae(() => {
    const K = ve(p.value ? 100 - e.position : e.position, "%"), fe = y.value === "always" || y.value === true && e.focused || y.value === "hover" && (C.value || e.focused && !w.value);
    return x("div", { class: ne(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: me([{ "--v-slider-thumb-position": K, "--v-slider-thumb-size": ve(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!k.value, "aria-orientation": m.value, onKeydown: k.value ? void 0 : Se, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, w.value = true;
    } }, [x("div", { class: ne(["v-slider-thumb__surface", M.value, P.value]), style: me(D.value) }, null), at(x("div", { class: ne(["v-slider-thumb__ripple", M.value]), style: me(D.value) }, null), [[Nt, e.ripple, null, { circle: true, center: true }]]), g(Rc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [at(x("div", { class: "v-slider-thumb__label-container" }, [x("div", { class: ne(["v-slider-thumb__label", E.value]), style: me(A.value) }, [x("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? S.value : 1)]), x("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Fn, fe]])];
    } })]);
  }), {};
} }), AP = j({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...xe() }, "VSliderTrack"), db = te()({ name: "VSliderTrack", props: AP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(vd);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: y, indexFromEnd: m } = a, { roundedClasses: h } = gt(i), { backgroundColorClasses: b, backgroundColorStyles: k } = Qe(c), { backgroundColorClasses: I, backgroundColorStyles: V } = Qe(u), S = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), p = _(() => f.value ? "height" : "width"), C = _(() => ({ [S.value]: "0%", [p.value]: "100%" })), w = _(() => e.stop - e.start), T = _(() => ({ [S.value]: ve(e.start, "%"), [p.value]: ve(w.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, E) => {
    var _a3;
    const A = D.value !== v.value && D.value !== y.value ? ve(D.position, "%") : void 0;
    return x("div", { key: D.value, class: ne(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === y.value }]), style: { [S.value]: A } }, [(D.label || n["tick-label"]) && x("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: E })) ?? D.label])]);
  }) : []);
  return ae(() => x("div", { class: ne(["v-slider-track", h.value, e.class]), style: me([{ "--v-slider-track-size": ve(d.value), "--v-slider-tick-size": ve(s.value) }, e.style]) }, [x("div", { class: ne(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), x("div", { class: ne(["v-slider-track__fill", b.value]), style: { ...T.value, ...k.value } }, null), r.value && x("div", { class: ne(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), DP = j({ ...pi(), ...sb(), ...wa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Tu = te()({ name: "VSlider", inheritAttrs: false, props: DP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = O(), i = O(), { rtlClasses: r } = Tt(), s = ub(e), u = Ce(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: y, onSliderTouchstart: m, trackContainerRef: h, position: b, hasLabels: k, disabled: I, readonly: V, noKeyboard: S } = cb({ props: e, steps: s, onSliderStart: () => {
    !I.value && !V.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: M } = P;
    const D = v(M);
    !I.value && !V.value && (u.value = D), a("end", D);
  }, onSliderMove: (P) => {
    let { value: M } = P;
    !I.value && !V.value && (u.value = v(M));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: p, focus: C, blur: w } = ka(e), T = _(() => b(u.value));
  return ae(() => {
    const P = jt.filterProps(e), [M, D] = Zn(l), E = !!(e.label || n.label || n.prepend);
    return g(jt, q({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || k.value, "v-slider--focused": p.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, M, { focused: p.value }), { ...n, prepend: E ? (A) => {
      var _a3, _b2;
      return x(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, A)) ?? (e.label ? g(so, { id: A.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, A)]);
    } : void 0, default: (A) => {
      let { id: R, messagesId: G } = A;
      return x("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : y, onTouchstartPassive: V.value ? void 0 : m }, [x("input", { id: R.value, name: e.name || R.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), g(db, { ref: h, start: 0, stop: T.value }, { "tick-label": n["tick-label"] }), g(Pu, q({ ref: o, "aria-describedby": G.value, focused: p.value, noKeyboard: S.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (N) => u.value = N, position: T.value, elevation: e.elevation, onFocus: C, onBlur: w, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Mt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), fb = j({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ie, default: "$eyeDropper" }, ...xe() }, "VColorPickerPreview"), MP = en({ name: "VColorPickerPreview", props: fb(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = lt(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  wr(() => l.abort());
  async function i() {
    if (!Ef || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = di(hn(s.sRGBHex));
      n("update:color", { ...e.color ?? Ll, ...u });
    } catch {
    }
  }
  return ae(() => {
    var _a3, _b2;
    return x("div", { class: ne(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: me(e.style) }, [Ef && !e.hideEyeDropper && x("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [g(Ue, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), x("div", { class: "v-color-picker-preview__dot" }, [x("div", { style: { background: Jg(e.color ?? Ll) } }, null)]), x("div", { class: "v-color-picker-preview__sliders" }, [g(Tu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Ll, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && g(Tu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Ll, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), EP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, BP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, $P = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, RP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, FP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, LP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, OP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, NP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, HP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, zP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, WP = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, jP = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, UP = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, GP = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, YP = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, KP = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, XP = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, qP = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, ZP = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, JP = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, QP = { red: EP, pink: BP, purple: $P, deepPurple: RP, indigo: FP, blue: LP, lightBlue: OP, cyan: NP, teal: HP, green: zP, lightGreen: WP, lime: jP, yellow: UP, amber: GP, orange: YP, deepOrange: KP, brown: XP, blueGrey: qP, grey: ZP, shades: JP }, eT = j({ swatches: { type: Array, default: () => tT(QP) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...xe() }, "VColorPickerSwatches");
function tT(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const nT = en({ name: "VColorPickerSwatches", props: eT(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return ae(() => x("div", { class: ne(["v-color-picker-swatches", e.class]), style: me([{ maxHeight: ve(e.maxHeight) }, e.style]) }, [x("div", null, [e.swatches.map((o) => x("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = hn(i), s = di(r), u = Zg(r);
    return x("div", { class: ne(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [x("div", { style: { background: u } }, [e.color && $t(e.color, s) ? g(qe, { size: "x-small", icon: "$success", color: Xw(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), aT = ba("v-picker-title"), Xr = j({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...ed() }, "VPicker"), no = te()({ name: "VPicker", props: Xr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Qe(() => e.color);
  return ae(() => {
    const o = Na.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return g(Na, q(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && x("div", { key: "header", class: ne(["v-picker__header-wrapper", a.value]), style: me([l.value]) }, [i && g(aT, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && x("div", { class: "v-picker__header" }, [n.header()])]), x("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(Re, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [x("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), lT = j({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(il).includes(e) }, modes: { type: Array, default: () => Object.keys(il), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(il).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Xr({ hideHeader: true }), ...on(fb(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), oT = en({ name: "VColorPicker", props: lT(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "mode"), l = O(null), o = Ce(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = di(hn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? xP(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = Tt();
  let s = true;
  se(o, (c) => {
    if (!s) {
      s = true;
      return;
    }
    c && (l.value = c.h);
  }, { immediate: true });
  const u = (c) => {
    s = false, l.value = c.h, o.value = c;
  };
  return lo(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), yt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), ae(() => {
    const c = no.filterProps(e);
    return g(no, q(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Jg({ ...i.value ?? Ll, a: 1 }) }, e.style] }), { ...n, default: () => x(be, null, [!e.hideCanvas && g(pP, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && x("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && g(MP, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && g(IP, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && g(nT, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), iT = j({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...Vl({ filterKeys: ["title"] }), ...id({ hideNoData: true, returnObject: true }), ...Ne(ki({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), rT = te()({ name: "VCombobox", props: iT(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = lt(), o = O(), i = re(false), r = re(true), s = re(false), u = O(), c = O(), d = re(-1);
  let f = false;
  const { items: v, transformIn: y, transformOut: m } = Yc(e), { textColorClasses: h, textColorStyles: b } = Rt(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: k } = bi(e), I = Ce(e, "modelValue", [], (J) => y(ct(J)), (J) => {
    const ge = m(J);
    return e.multiple ? ge : ge[0] ?? null;
  }), V = uo(e), S = B(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), p = _(() => !!(e.chips || a.chip)), C = _(() => p.value || !!a.selection), w = re(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), T = re(null), P = _({ get: () => w.value, set: async (J) => {
    var _a4;
    if (w.value = J ?? "", J === null || J === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [Tn(e, J)], Ee(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), J && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const ge = pe(J);
      ge.length > 1 && (de(ge), w.value = "");
    }
    J || (d.value = -1), r.value = !J;
  } }), M = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: E } = Il(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), A = _(() => e.hideSelected && T.value === null ? D.value.filter((J) => !I.value.some((ge) => ge.value === J.value)) : D.value), R = _(() => e.hideNoData && !A.value.length || V.isReadonly.value || V.isDisabled.value), G = Ce(e, "menu"), N = _({ get: () => G.value, set: (J) => {
    var _a4;
    G.value && !J && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || J && R.value || (G.value = J);
  } }), { menuId: Y, ariaExpanded: H, ariaControls: F } = od(e, N);
  se(w, (J) => {
    f ? Ee(() => f = false) : i.value && !N.value && (N.value = true), n("update:search", J);
  }), se(I, (J) => {
    var _a4;
    !e.multiple && !C.value && (w.value = ((_a4 = J[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const Z = _(() => I.value.map((J) => J.value)), W = _(() => A.value.find((J) => J.type === "item" && !J.props.disabled)), L = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = W.value) == null ? void 0 : _a4.title)) && A.value.length > 0 && !r.value && !s.value;
  }), U = O(), ie = O(), Se = O(), K = nd(U, o), { onTabKeydown: fe } = ad({ groups: [{ type: "element", contentRef: ie }, { type: "list", contentRef: U, displayItemsCount: () => A.value.length }, { type: "element", contentRef: Se }], onLeave: () => {
    var _a4;
    N.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function Te(J) {
    f = true, Ee(() => f = false), e.openOnClear && (N.value = true);
  }
  function _e() {
    R.value || (N.value = true);
  }
  function ye(J) {
    R.value || (i.value && (J.preventDefault(), J.stopPropagation()), N.value = !N.value);
  }
  function $(J) {
    var _a4, _b2;
    J.key === "Tab" && fe(J), ((_a4 = U.value) == null ? void 0 : _a4.$el.contains(J.target)) && (ql(J) || J.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function z(J) {
    var _a4, _b2, _c2, _d2;
    if (bw(J) || V.isReadonly.value) return;
    const ge = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, ke = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(J.key) && J.preventDefault(), ["Enter", "ArrowDown"].includes(J.key) && (N.value = true), ["Escape"].includes(J.key) && (N.value = false), L.value && ["Enter", "Tab"].includes(J.key) && W.value && !I.value.some((we) => {
      let { value: Pe } = we;
      return Pe === W.value.value;
    }) && ue(W.value), J.key === "ArrowDown" && L.value && ((_b2 = U.value) == null ? void 0 : _b2.focus("next")), J.key === "Enter" && P.value && (ue(Tn(e, P.value), true, true), C.value && (w.value = "")), ["Backspace", "Delete"].includes(J.key)) {
      if (!e.multiple && C.value && I.value.length > 0 && !P.value) return ue(I.value[0], false);
      if (~d.value) {
        J.preventDefault();
        const we = d.value;
        ue(I.value[d.value], false), d.value = we >= ke - 1 ? ke - 2 : we;
      } else J.key === "Backspace" && !P.value && (d.value = ke - 1);
      return;
    }
    if (e.multiple) if (J.key === "ArrowLeft") {
      if (d.value < 0 && ge && ge > 0) return;
      const we = d.value > -1 ? d.value - 1 : ke - 1;
      I.value[we] ? d.value = we : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (J.key === "ArrowRight") {
      if (d.value < 0) return;
      const we = d.value + 1;
      I.value[we] ? d.value = we : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && ql(J) && (d.value = -1);
  }
  function Q(J) {
    var _a4;
    const ge = ((_a4 = J == null ? void 0 : J.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", ke = pe(ge);
    ke.length > 1 && e.multiple && (J.preventDefault(), de(ke));
  }
  function ce() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function oe() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, T.value = null;
  }
  function ue(J) {
    let ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!J || J.props.disabled)) if (e.multiple) {
      const we = I.value.findIndex((Be) => (e.valueComparator || $t)(Be.value, J.value)), Pe = ge ?? !~we;
      if (~we) {
        const Be = Pe ? [...I.value, J] : [...I.value];
        Be.splice(we, 1), I.value = Be;
      } else Pe && (I.value = [...I.value, J]);
      e.clearOnSelect && (P.value = "");
    } else {
      const we = ge !== false;
      I.value = we ? [J] : [], (!r.value || e.alwaysFilter) && w.value && (T.value = w.value), w.value = we && !C.value ? J.title : "", Ee(() => {
        N.value = ke, r.value = true;
      });
    }
  }
  function pe(J) {
    const ke = [`
`, ...e.delimiters ?? []].map(ar).join("|");
    return J.split(new RegExp(`(?:${ke})+`));
  }
  async function de(J) {
    for (let ge of J) ge = ge.trim(), ge && (ue(Tn(e, ge)), await Ee());
  }
  function X(J) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function le(J) {
    s.value = false;
  }
  function Ve(J) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(J.relatedTarget)) && (i.value = true);
  }
  return se(i, (J, ge) => {
    if (!(J || J === ge) && (d.value = -1, N.value = false, P.value)) {
      if (e.multiple) {
        ue(Tn(e, P.value));
        return;
      }
      if (!C.value) return;
      I.value.some((ke) => {
        let { title: we } = ke;
        return we === P.value;
      }) ? w.value = "" : ue(Tn(e, P.value));
    }
  }), se(N, (J) => {
    if (!e.hideSelected && J && I.value.length && r.value) {
      const ge = A.value.findIndex((ke) => I.value.some((we) => (e.valueComparator || $t)(we.value, ke.value)));
      nt && window.requestAnimationFrame(() => {
        var _a4;
        ge >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(ge));
      });
    }
    J && (T.value = null);
  }), se(v, (J, ge) => {
    N.value || i.value && !ge.length && J.length && (N.value = true);
  }), ae(() => {
    const J = !!(!e.hideNoData || A.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ge = I.value.length > 0, ke = Xn.filterProps(e), we = { search: P, filteredItems: D.value };
    return g(Xn, q({ ref: o }, ke, { modelValue: P.value, "onUpdate:modelValue": (Pe) => P.value = Pe, focused: i.value, "onUpdate:focused": (Pe) => i.value = Pe, validationValue: I.externalValue, counterValue: M.value, dirty: ge, class: ["v-combobox", { "v-combobox--active-menu": N.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: ge ? void 0 : e.placeholder, "onClick:clear": Te, "onMousedown:control": _e, onKeydown: z, onPaste: Q, onBlur: Ve, "aria-expanded": H.value, "aria-controls": F.value }), { ...a, default: (Pe) => {
      let { id: Be } = Pe;
      return x(be, null, [g(to, q({ id: Y.value, ref: u, modelValue: N.value, "onUpdate:modelValue": (je) => N.value = je, activator: "parent", contentClass: "v-combobox__content", disabled: R.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: ce, onAfterLeave: oe }, e.menuProps), { default: () => [g(Na, { onFocusin: X, onKeydown: $ }, { default: () => [a["menu-header"] && x("header", { ref: ie }, [a["menu-header"](we)]), J && g(eo, q({ key: "combobox-list", ref: U, filterable: true, selected: Z.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (je) => je.preventDefault(), selectable: !!A.value.length, onFocusout: le, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Be.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, K, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !A.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? g(In, { key: "no-data", title: l(e.noDataText) }, null)), g(Wr, { ref: c, renderless: true, items: A.value, itemKey: "value" }, { default: (je) => {
          var _a5, _b3, _c3;
          let { item: He, index: rt, itemRef: ot } = je;
          const ee = q(He.props, { ref: ot, key: He.value, active: L.value && He === W.value ? true : void 0, onClick: () => ue(He, null), "aria-posinset": rt + 1, "aria-setsize": A.value.length });
          return He.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: He.raw, index: rt })) ?? g(bn, q(He.props, { key: `divider-${rt}` }), null) : He.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: He.raw, index: rt })) ?? g(co, q(He.props, { key: `subheader-${rt}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: He, index: rt, props: ee })) ?? g(In, q(ee, { role: "option" }), { prepend: (Ye) => {
            let { isSelected: ze } = Ye;
            return x(be, null, [e.multiple && !e.hideSelected ? g(Rn, { key: He.value, modelValue: ze, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (xt) => xt.preventDefault() }, null) : void 0, He.props.prependAvatar && g(Sn, { image: He.props.prependAvatar }, null), He.props.prependIcon && g(qe, { icon: He.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? He.title : ld("v-combobox", He.title, (_a6 = E(He)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && x("footer", { ref: Se }, [a["menu-footer"](we)])] })] }), I.value.map((je, He) => {
        function rt(ze) {
          ze.stopPropagation(), ze.preventDefault(), ue(je, false);
        }
        const ot = q(ga.filterProps(je.props), { "onClick:close": rt, onKeydown(ze) {
          ze.key !== "Enter" && ze.key !== " " || (ze.preventDefault(), ze.stopPropagation(), rt(ze));
        }, onMousedown(ze) {
          ze.preventDefault(), ze.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), ee = p.value ? !!a.chip : !!a.selection, Ye = ee ? Dr(p.value ? a.chip({ item: je, index: He, props: ot }) : a.selection({ item: je, index: He })) : void 0;
        if (!(ee && !Ye)) return x("div", { key: je.value, class: ne(["v-combobox__selection", He === d.value && ["v-combobox__selection--selected", h.value]]), style: me(He === d.value ? b.value : {}) }, [p.value ? a.chip ? g(Re, { key: "chip-defaults", defaults: { VChip: { closable: S.value, size: "small", text: je.title } } }, { default: () => [Ye] }) : g(ga, q({ key: "chip", closable: S.value, size: "small", text: je.title, disabled: je.props.disabled }, ot), null) : Ye ?? x("span", { class: "v-combobox__selection-text" }, [je.title, e.multiple && He < I.value.length - 1 && x("span", { class: "v-combobox__selection-comma" }, [Fe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Pe = arguments.length, Be = new Array(Pe), je = 0; je < Pe; je++) Be[je] = arguments[je];
      return x(be, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...Be), (!e.hideNoData || e.items.length) && e.menuIcon ? g(qe, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ye, onClick: Ar, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(k, { key: "append-icon", name: "appendInner", color: Be[0].iconColor.value }, null)]);
    } });
  }), Mt({ isFocused: i, isPristine: r, menu: N, search: P, selectionIndex: d, filteredItems: D, select: ue }, o);
} }), sT = j({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), uT = te()({ name: "VConfirmEdit", props: sT(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = O();
  mt(() => {
    o.value = structuredClone(Hf(l.value));
  });
  const { t: i } = lt(), r = _(() => $t(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = _(() => s("save")), c = _(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(Hf(l.value)), n("cancel");
  }
  function v(m) {
    return x(be, null, [g(Ue, q({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), g(Ue, q({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let y = false;
  return ae(() => {
    var _a3;
    return x(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return y = true, v;
    } }), !e.hideActions && !y && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), vb = j({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), mb = Symbol.for("vuetify:datatable:expanded");
function qr(e) {
  const t = B(() => e.expandOnClick), n = Ce(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const u = new Set(n.value), c = Me(r.value);
    if (s) u.add(c);
    else {
      const d = [...n.value].find((f) => Me(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function l(r) {
    const s = Me(r.value);
    return [...n.value].some((u) => Me(u) === s);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: o };
  return ft(mb, i), i;
}
function gb() {
  const e = Ge(mb);
  if (!e) throw new Error("foo");
  return e;
}
const md = j({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), hb = Symbol.for("vuetify:data-table-group");
function gd(e) {
  return { groupBy: Ce(e, "groupBy") };
}
function Zr(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = O(/* @__PURE__ */ new Set()), o = _(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
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
      for (const y of f.items) "type" in y && y.type === "group" ? v.push(...d(y)) : v.push(y);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return ft(hb, u), u;
}
function yb() {
  const e = Ge(hb);
  if (!e) throw new Error("Missing group!");
  return e;
}
function cT(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ul(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function bb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = cT(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? bb(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function pb(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...pb(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Jr(e, t, n, a) {
  const l = _(() => t.value.length ? bb(ut(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? pb(l.value, n.value, ut(a)) : ut(e));
  return { groups: l, flatItems: o };
}
function Qr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = Ct("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  se(r, (u) => {
    $t(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const hd = j({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Sb = Symbol.for("vuetify:data-table-pagination");
function yd(e) {
  const t = Ce(e, "page", void 0, (a) => Number(a ?? 1)), n = Ce(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function bd(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  se([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = tt(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = tt(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = tt(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: o, pageCount: i, itemsLength: a, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return ft(Sb, d), d;
}
function dT() {
  const e = Ge(Sb);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function xb(e) {
  const t = Ct("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? ut(n) : ut(n).slice(a.value, l.value));
  return se(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function fT(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = ut(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((h) => h.type === "group" && h.id === d), y = o.value.findIndex((h) => h.type === "group" && h.id === f), m = o.value.findIndex((h, b) => b > y && h.type === "group" && h.depth === 0);
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
const vT = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, kb = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return kb.select({ items: n, value: t, selected: a });
} }, mT = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, wb = j({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Cb = Symbol.for("vuetify:data-table-selection");
function es(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = Ce(e, "modelValue", e.modelValue, (k) => {
    const I = e.valueComparator;
    return I ? new Set(ct(k).map((V) => {
      var _a3;
      return ((_a3 = n.value.find((S) => I(V, S.value))) == null ? void 0 : _a3.value) ?? V;
    })) : new Set(ct(k).map((V) => {
      var _a3, _b2;
      return Ra(V) ? ((_a3 = n.value.find((S) => V === S.value)) == null ? void 0 : _a3.value) ?? V : ((_b2 = n.value.find((S) => $t(V, S.value))) == null ? void 0 : _b2.value) ?? V;
    }));
  }, (k) => [...k.values()]), o = _(() => n.value.filter((k) => k.selectable)), i = _(() => ut(a).filter((k) => k.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return vT;
      case "all":
        return mT;
      case "page":
      default:
        return kb;
    }
  }), s = re(null);
  function u(k) {
    return ct(k).every((I) => l.value.has(I.value));
  }
  function c(k) {
    return ct(k).some((I) => l.value.has(I.value));
  }
  function d(k, I) {
    const V = r.value.select({ items: k, value: I, selected: new Set(l.value) });
    l.value = V;
  }
  function f(k, I, V) {
    const S = [], p = ut(a);
    if (I = I ?? p.findIndex((C) => C.value === k.value), e.selectStrategy !== "single" && (V == null ? void 0 : V.shiftKey) && s.value !== null) {
      const [C, w] = [s.value, I].sort((T, P) => T - P);
      S.push(...p.slice(C, w + 1).filter((T) => T.selectable));
    } else S.push(k), s.value = I;
    d(S, !u([k]));
  }
  function v(k) {
    const I = r.value.selectAll({ value: k, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = I;
  }
  const y = _(() => l.value.size > 0), m = _(() => {
    const k = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!k.length && u(k);
  }), b = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: y, allSelected: m, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return ft(Cb, b), b;
}
function ts() {
  const e = Ge(Cb);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const _b = j({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Vb = Symbol.for("vuetify:data-table-sort");
function ns(e) {
  const t = B(() => e.initialSortOrder), n = Ce(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function gT(e, t) {
  if (!cl(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function as(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, y = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === y ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = y;
    else {
      const { active: m, mode: h } = gT(l.value, c);
      m ? h === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return ft(Vb, s), s;
}
function Ib() {
  const e = Ge(Vb);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function pd(e, t, n, a) {
  const l = lt();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? hT(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function hT(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ul(i[1], c), v = ul(r[1], c), y = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [y, m] = [m, y]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const h = a.sortRawFunctions[c](y, m);
        if (h == null) continue;
        if (u = true, h) return h;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[c]) {
        const h = a.sortFunctions[c](f, v);
        if (h == null) continue;
        if (u = true, h) return h;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((h) => h != null ? h.toString().toLocaleLowerCase() : h), f !== v)) return So(f) && So(v) ? 0 : So(f) ? -1 : So(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const yT = j({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function bT(e, t) {
  const n = e.returnObject ? t : kt(t, e.itemValue), a = kt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function pT(e, t) {
  const n = [];
  for (const a of t) n.push(bT(e, a));
  return n;
}
function ST(e) {
  return { items: _(() => pT(e, e.items)) };
}
const xT = j({ search: String, loading: Boolean, itemsLength: [Number, String], ...xe(), ...yT(), ...wb(), ..._b(), ...hd({ itemsPerPage: 5 }), ...vb(), ...md(), ...Vl(), ...$e(), ...pa({ transition: { component: Ko, hideOnLeave: true } }) }, "VDataIterator"), kT = te()({ name: "VDataIterator", props: xT(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "groupBy"), l = B(() => e.search), { items: o } = ST(e), { filteredItems: i } = Il(e, o, l, { transform: (U) => U.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = ns(e), { page: d, itemsPerPage: f } = yd(e), { toggleSort: v } = as({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: y, opened: m, extractRows: h, isGroupOpen: b, toggleGroup: k } = Zr({ groupBy: a, sortBy: s }), { sortedItems: I } = pd(e, i, y, { transform: (U) => U.raw }), { flatItems: V } = Jr(I, a, m, false), S = B(() => !So(e.itemsLength)), p = B(() => S.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: w, pageCount: T, prevPage: P, nextPage: M, setItemsPerPage: D, setPage: E } = bd({ page: d, itemsPerPage: f, itemsLength: p }), A = re([]), R = _(() => S.value ? V.value : A.value);
  Ot(() => !S.value, () => {
    const { paginatedItems: U } = xb({ items: V, startIndex: C, stopIndex: w, itemsPerPage: f });
    mt(() => {
      A.value = U.value;
    });
  });
  const G = _(() => h(R.value)), { isSelected: N, select: Y, selectAll: H, toggleSelect: F } = es(e, { allItems: o, currentPage: G }), { isExpanded: Z, toggleExpand: W } = qr(e);
  Qr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const L = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: T.value, toggleSort: v, prevPage: P, nextPage: M, setPage: E, setItemsPerPage: D, isSelected: N, select: Y, selectAll: H, toggleSelect: F, isExpanded: Z, toggleExpand: W, isGroupOpen: b, toggleGroup: k, items: G.value, itemsCount: i.value.length, groupedItems: R.value }));
  return ae(() => g(e.tag, { class: ne(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, L.value), g(Qt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? g(gi, { key: "loader", name: "v-data-iterator", active: true }, { default: (U) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, U);
      } }) : x("div", { key: "items" }, [R.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, L.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, L.value)];
  } })), {};
} });
function wT() {
  const e = O([]);
  jm(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const CT = j({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ie, default: "$first" }, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, lastIcon: { type: Ie, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Gt(), ...xe(), ...bt(), ...It(), ...dt(), ...ea(), ...$e({ tag: "nav" }), ...Ke(), ...wn({ variant: "text" }) }, "VPagination"), Au = te()({ name: "VPagination", props: CT(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ce(e, "modelValue"), { t: o, n: i } = lt(), { isRtl: r } = Tt(), { themeClasses: s } = Je(e), { width: u } = xn(), c = re(-1);
  yt(void 0, { scoped: true });
  const { resizeRef: d } = Vn((w) => {
    if (!w.length) return;
    const { target: T, contentRect: P } = w[0], M = T.querySelector(".v-pagination__list > *");
    if (!M) return;
    const D = P.width, E = M.offsetWidth + parseFloat(getComputedStyle(M).marginRight) * 2;
    c.value = m(D, E);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), y = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(w, T) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((w - T * P) / T).toFixed(2))));
  }
  const h = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (y.value <= 0) return [];
    if (y.value === 1) return [l.value];
    if (f.value <= y.value) return Wn(f.value, v.value);
    const w = y.value % 2 === 0, T = w ? y.value / 2 : Math.floor(y.value / 2), P = w ? T : T + 1, M = f.value - T;
    if (P - l.value >= 0) return [...Wn(Math.max(1, y.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - M >= (w ? 1 : 0)) {
      const D = y.value - 1, E = f.value - D + v.value;
      return [v.value, e.ellipsis, ...Wn(D, E)];
    } else {
      const D = Math.max(1, y.value - 2), E = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...Wn(D, E), e.ellipsis, f.value];
    }
  });
  function b(w, T, P) {
    w.preventDefault(), l.value = T, P && a(P, T);
  }
  const { refs: k, updateRef: I } = wT();
  yt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const V = _(() => h.value.map((w, T) => {
    const P = (M) => I(M, T);
    if (typeof w == "string") return { isActive: false, key: `ellipsis-${T}`, page: w, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const M = w === l.value;
      return { isActive: M, key: w, page: i(w), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: M ? e.activeColor : e.color, "aria-current": M, "aria-label": o(M ? e.currentPageAriaLabel : e.pageAriaLabel, w), onClick: (D) => b(D, w) } };
    }
  })), S = _(() => {
    const w = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => b(P, v.value, "first"), disabled: w, "aria-label": o(e.firstAriaLabel), "aria-disabled": w } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => b(P, l.value - 1, "prev"), disabled: w, "aria-label": o(e.previousAriaLabel), "aria-disabled": w }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => b(P, l.value + 1, "next"), disabled: T, "aria-label": o(e.nextAriaLabel), "aria-disabled": T }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => b(P, v.value + f.value - 1, "last"), disabled: T, "aria-label": o(e.lastAriaLabel), "aria-disabled": T } : void 0 };
  });
  function p() {
    var _a3;
    const w = l.value - v.value;
    (_a3 = k.value[w]) == null ? void 0 : _a3.$el.focus();
  }
  function C(w) {
    w.key === eu.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ee(p)) : w.key === eu.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Ee(p));
  }
  return ae(() => g(e.tag, { ref: d, class: ne(["v-pagination", s.value, e.class]), style: me(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [x("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && x("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(S.value.first) : g(Ue, q({ _as: "VPaginationBtn" }, S.value.first), null)]), x("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(S.value.prev) : g(Ue, q({ _as: "VPaginationBtn" }, S.value.prev), null)]), V.value.map((w, T) => x("li", { key: w.key, class: ne(["v-pagination__item", { "v-pagination__item--is-active": w.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(w) : g(Ue, q({ _as: "VPaginationBtn" }, w.props), { default: () => [w.page] })])), x("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(S.value.next) : g(Ue, q({ _as: "VPaginationBtn" }, S.value.next), null)]), e.showFirstLastPage && x("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(S.value.last) : g(Ue, q({ _as: "VPaginationBtn" }, S.value.last), null)])])] })), {};
} }), Sd = j({ color: String, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, firstIcon: { type: Ie, default: "$first" }, lastIcon: { type: Ie, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), ti = te()({ name: "VDataTableFooter", props: Sd(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = lt(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = dT(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return ae(() => {
    var _a3;
    const f = Au.filterProps(e);
    return x("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), x("div", { class: "v-data-table-footer__items-per-page" }, [x("span", null, [a(e.itemsPerPageText)]), g(rd, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), x("div", { class: "v-data-table-footer__info" }, [x("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), x("div", { class: "v-data-table-footer__pagination" }, [g(Au, q({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Ne(f, ["color"])), null)])]);
  }), {};
} }), ni = e1({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return g(a, { class: ne(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ve(e.height), width: ve(e.width), maxWidth: ve(e.maxWidth), left: l === "start" ? ve(e.fixedOffset || null) : void 0, right: l === "end" ? ve(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ve(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), _T = j({ headers: Array }, "DataTable-header"), Pb = Symbol.for("vuetify:data-table-headers"), Tb = { title: "", sortable: false }, VT = { ...Tb, width: 48 };
function IT() {
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
function Du(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) Du(n, t);
  return t;
}
function Ab(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Ab(n.children, t);
  return t;
}
function PT(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Tb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return VT;
  }
}
function xd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => xd(n, t + 1))) : t;
}
function TT(e) {
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
  for (let o = 0; o < e.length; o++) a = Db(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = Mb(e[o], l);
}
function Db(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = Db(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function Mb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = Mb(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function AT(e, t) {
  const n = [];
  let a = 0;
  const l = IT(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - xd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? Du(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => Du(i)).flat(), headers: n };
}
function Eb(e) {
  const t = [];
  for (const n of e) {
    const a = { ...PT(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? Eb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function kd(e, t) {
  const n = O([]), a = O([]), l = O({}), o = O({}), i = O({});
  mt(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: qn(m) }))).slice(), c = Ab(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = Eb(u);
    TT(d);
    const f = Math.max(...d.map((m) => xd(m))) + 1, v = AT(d, f);
    n.value = v.headers, a.value = v.columns;
    const y = v.headers.flat(1);
    for (const m of y) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return ft(Pb, r), r;
}
function ls() {
  const e = Ge(Pb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Bb = j({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ie }, sortAscIcon: { type: Ie, default: "$sortAsc" }, sortDescIcon: { type: Ie, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...bt(), ...pl(), ...Or() }, "VDataTableHeaders"), ml = te()({ name: "VDataTableHeaders", props: Bb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = lt(), { toggleSort: l, sortBy: o, isSorted: i } = Ib(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = ts(), { columns: d, headers: f } = ls(), { loaderClasses: v } = mi(e);
  function y(T, P) {
    if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
    const M = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
    return { position: "sticky", left: M === "start" ? ve(T.fixedOffset) : void 0, right: M === "end" ? ve(T.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(T, P) {
    T.key === "Enter" && !e.disableSort && l(P, T);
  }
  function h(T) {
    var _a3;
    switch ((_a3 = o.value.find((M) => M.key === T.key)) == null ? void 0 : _a3.order) {
      case "asc":
        return e.sortAscIcon;
      case "desc":
        return e.sortDescIcon;
      default:
        return e.sortIcon || (e.initialSortOrder === "asc" ? e.sortAscIcon : e.sortDescIcon);
    }
  }
  const { backgroundColorClasses: b, backgroundColorStyles: k } = Qe(() => e.color), { displayClasses: I, mobile: V } = xn(e), S = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: h })), p = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, v.value]), C = (T) => {
    let { column: P, x: M, y: D } = T;
    const E = P.key === "data-table-select" || P.key === "data-table-expand", A = P.key === "data-table-group" && P.width === 0 && !P.title, R = q(e.headerProps ?? {}, P.headerProps ?? {});
    return g(ni, q({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...p.value], style: { width: ve(P.width), minWidth: ve(P.minWidth), maxWidth: ve(P.maxWidth), ...y(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: E, empty: A, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (G) => l(P, G) : void 0, onKeydown: P.sortable ? (G) => m(G, P) : void 0 }, R), { default: () => {
      var _a3;
      const G = `header.${P.key}`, N = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: h };
      return n[G] ? n[G](N) : A ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, N)) ?? (c.value && g(Rn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : x("div", { class: "v-data-table-header__content" }, [x("span", null, [P.title]), P.sortable && !e.disableSort && g(qe, { key: "icon", class: "v-data-table-header__sort-icon", icon: h(P) }, null), e.multiSort && i(P) && x("div", { key: "badge", class: ne(["v-data-table-header__sort-badge", ...b.value]), style: me(k.value) }, [o.value.findIndex((Y) => Y.key === P.key) + 1])]);
    } });
  }, w = () => {
    const T = _(() => d.value.filter((M) => (M == null ? void 0 : M.sortable) && !e.disableSort)), P = d.value.find((M) => M.key === "data-table-select");
    return g(ni, q({ tag: "th", class: [...p.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [x("div", { class: "v-data-table-header__content" }, [g(rd, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: T.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => g(Rn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (M) => {
      var _a3;
      return g(ga, { onClick: ((_a3 = M.item.raw) == null ? void 0 : _a3.sortable) ? () => l(M.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [M.item.title, g(qe, { class: ne(["v-data-table__td-sort-icon", i(M.item.raw) && "v-data-table__td-sort-icon-active"]), icon: h(M.item.raw), size: "small" }, null)] });
    } })])] });
  };
  ae(() => V.value ? x("tr", null, [g(w, null, null)]) : x(be, null, [n.headers ? n.headers(S.value) : f.value.map((T, P) => x("tr", null, [T.map((M, D) => g(C, { column: M, x: D, y: P }, null))])), e.loading && x("tr", { class: "v-data-table-progress" }, [x("th", { colspan: d.value.length }, [g(gi, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), $b = j({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ie, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ie, default: "$tableGroupExpand" }, ...bt() }, "VDataTableGroupHeaderRow"), DT = te()({ name: "VDataTableGroupHeaderRow", props: $b(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = yb(), { isSelected: i, isSomeSelected: r, select: s } = ts(), { columns: u } = ls(), c = _(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => x("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, y = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: y } })) ?? g(ni, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [g(Ue, { size: "small", variant: "text", icon: v, onClick: y }, null), x("span", null, [e.item.value]), x("span", null, [Fe("("), c.value.length, Fe(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((b) => b.selectable), y = v.length > 0 && i(v), m = r(v) && !y, h = (b) => s(v, b);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: y, indeterminate: m, "onUpdate:modelValue": h } })) ?? g(ni, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [g(Rn, { density: e.density, disabled: v.length === 0, modelValue: y, indeterminate: m, "onUpdate:modelValue": h }, null)] });
    }
    return "";
  })]);
} }), Rb = j({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ie, default: "$collapse" }, expandIcon: { type: Ie, default: "$expand" }, onClick: Lt(), onContextmenu: Lt(), onDblclick: Lt(), ...bt(), ...pl() }, "VDataTableRow"), wd = te()({ name: "VDataTableRow", props: Rb(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = xn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = ts(), { isExpanded: c, toggleExpand: d } = gb(), { toggleSort: f, sortBy: v, isSorted: y } = Ib(), { columns: m } = ls();
  ae(() => x("tr", { class: ne(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((h, b) => {
    const k = e.item, I = `item.${h.key}`, V = `header.${h.key}`, S = { index: e.index, item: k.raw, internalItem: k, value: ul(k.columns, h.key), column: h, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, p = { column: h, selectAll: u, isSorted: y, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: S.index, item: S.item, internalItem: S.internalItem, value: S.value, column: h }) : e.cellProps, w = typeof h.cellProps == "function" ? h.cellProps({ index: S.index, item: S.item, internalItem: S.internalItem, value: S.value }) : h.cellProps, T = h.key === "data-table-select" || h.key === "data-table-expand", P = h.key === "data-table-group" && h.width === 0 && !h.title;
    return g(ni, q({ align: h.align, indent: h.indent, class: { "v-data-table__td--expanded-row": h.key === "data-table-expand", "v-data-table__td--select-row": h.key === "data-table-select" }, fixed: h.fixed, fixedOffset: h.fixedOffset, fixedEndOffset: h.fixedEndOffset, lastFixed: h.lastFixed, firstFixedEnd: h.firstFixedEnd, maxWidth: l.value ? void 0 : h.maxWidth, noPadding: T, empty: P, nowrap: h.nowrap, width: l.value ? void 0 : h.width }, C, w), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (h.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...S, props: { color: e.color, disabled: !k.selectable, modelValue: o([k]), onClick: Ii(() => i(k), ["stop"]) } })) ?? g(Rn, { color: e.color, disabled: !k.selectable, density: e.density, modelValue: o([k]), onClick: Ii((D) => i(k, e.index, D), ["stop"]) }, null);
      if (h.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...S, props: { icon: c(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Ii(() => d(k), ["stop"]) } })) ?? g(Ue, { icon: c(k) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Ii(() => d(k), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](S);
      const M = De(S.value);
      return l.value ? x(be, null, [x("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, p)) ?? h.title]), x("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, S)) ?? M])]) : M;
    } });
  })]));
} }), Fb = j({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...on(Rb(), ["collapseIcon", "expandIcon", "density"]), ...on($b(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...pl() }, "VDataTableRows"), gl = te()({ name: "VDataTableRows", inheritAttrs: false, props: Fb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = ls(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = gb(), { isSelected: s, toggleSelect: u } = ts(), { toggleGroup: c, isGroupOpen: d } = yb(), { t: f } = lt(), { mobile: v } = xn(e);
  return ae(() => {
    var _a3, _b2;
    const y = on(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? x("tr", { class: "v-data-table-rows-loading", key: "loading" }, [x("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? x("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [x("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : x(be, null, [e.items.map((m, h) => {
      var _a4, _b3;
      if (m.type === "group") {
        const I = { index: h, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : g(DT, q({ key: `group-header_${m.id}`, item: m }, yn(n, ":groupHeader", () => I), y), a);
      }
      if (m.type === "group-summary") {
        const I = { index: h, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const b = { index: m.virtualIndex ?? h, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, k = { ...b, props: q({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: h, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, yn(n, ":row", () => b), typeof e.rowProps == "function" ? e.rowProps({ item: b.item, index: b.index, internalItem: b.internalItem }) : e.rowProps) };
      return x(be, { key: k.props.key }, [a.item ? a.item(k) : g(wd, k.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, b))]);
    })]);
  }), {};
} }), Lb = j({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...xe(), ...bt(), ...$e(), ...Ke() }, "VTable"), hl = te()({ name: "VTable", props: Lb(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = Je(e), { densityClasses: o } = Ht(e);
  return ae(() => g(e.tag, { class: ne(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? x("div", { class: "v-table__wrapper", style: { height: ve(e.height) } }, [x("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), MT = j({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function ET(e, t, n, a) {
  const l = e.returnObject ? t : kt(t, e.itemValue), o = kt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = kt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? kt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function BT(e, t, n) {
  return t.map((a, l) => ET(e, a, l, n));
}
function Cd(e, t) {
  return { items: _(() => BT(e, e.items, t.value)) };
}
const _d = j({ ...Fb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...vb(), ...md(), ..._T(), ...MT(), ...wb(), ..._b(), ...Ne(Bb(), ["multiSort", "initialSortOrder"]), ...Lb() }, "DataTable"), $T = j({ ...hd(), ..._d(), ...Vl(), ...Sd() }, "VDataTable"), RT = te()({ name: "VDataTable", props: $T(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = gd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = ns(e), { page: u, itemsPerPage: c } = yd(e), { disableSort: d } = ao(e), { columns: f, headers: v, sortFunctions: y, sortRawFunctions: m, filterFunctions: h } = kd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: b } = Cd(e, f), k = B(() => e.search), { filteredItems: I } = Il(e, b, k, { transform: (ie) => ie.columns, customKeyFilter: h }), { toggleSort: V } = as({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: S, opened: p, extractRows: C, isGroupOpen: w, toggleGroup: T } = Zr({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = pd(e, I, S, { transform: (ie) => ({ ...ie.raw, ...ie.columns }), sortFunctions: y, sortRawFunctions: m }), M = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: E, paginatedItems: A } = fT({ pageBy: M, sortedItems: P, paginate: (ie) => {
    const Se = _(() => ut(ie).length), { startIndex: K, stopIndex: fe, pageCount: Te, setItemsPerPage: _e } = bd({ page: u, itemsPerPage: c, itemsLength: Se }), { paginatedItems: ye } = xb({ items: ie, startIndex: K, stopIndex: fe, itemsPerPage: c });
    return { paginatedItems: ye, pageCount: Te, setItemsPerPage: _e };
  }, group: (ie) => Jr(ie, l, p, () => !!a["group-summary"]) }), R = _(() => C(A.value)), { isSelected: G, select: N, selectAll: Y, toggleSelect: H, someSelected: F, allSelected: Z } = es(e, { allItems: b, currentPage: R }), { isExpanded: W, toggleExpand: L } = qr(e);
  Qr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: k }), yt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const U = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: E, someSelected: F.value, allSelected: Z.value, isSelected: G, select: N, selectAll: Y, toggleSelect: H, isExpanded: W, toggleExpand: L, isGroupOpen: w, toggleGroup: T, items: R.value.map((ie) => ie.raw), internalItems: R.value, groupedItems: A.value, columns: f.value, headers: v.value }));
  return ae(() => {
    const ie = ti.filterProps(e), Se = ml.filterProps(Ne(e, ["multiSort"])), K = gl.filterProps(e), fe = hl.filterProps(e);
    return g(hl, q({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, fe, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, U.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(U.value) : x(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, U.value), !e.hideDefaultHeader && x("thead", { key: "thead" }, [g(ml, q(Se, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, U.value), !e.hideDefaultBody && x("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, U.value), a.body ? a.body(U.value) : g(gl, q(n, K, { items: A.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, U.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, U.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, U.value)]);
    }, bottom: () => a.bottom ? a.bottom(U.value) : !e.hideDefaultFooter && x(be, null, [g(bn, null, null), g(ti, ie, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), FT = j({ ...Ne(_d(), ["hideDefaultFooter"]), ...md(), ...Vy(), ...Vl() }, "VDataTableVirtual"), LT = te()({ name: "VDataTableVirtual", props: FT(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = gd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = ns(e), { disableSort: u } = ao(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: y } = kd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = Cd(e, c), h = B(() => e.search), { filteredItems: b } = Il(e, m, h, { transform: (ye) => ye.columns, customKeyFilter: f }), { toggleSort: k } = as({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: S, isGroupOpen: p, toggleGroup: C } = Zr({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: w } = pd(e, b, I, { transform: (ye) => ({ ...ye.raw, ...ye.columns }), sortFunctions: v, sortRawFunctions: y }), { flatItems: T } = Jr(w, l, V, () => !!a["group-summary"]), P = _(() => S(T.value)), { isSelected: M, select: D, selectAll: E, toggleSelect: A, someSelected: R, allSelected: G } = es(e, { allItems: P, currentPage: P }), { isExpanded: N, toggleExpand: Y } = qr(e), { containerRef: H, markerRef: F, paddingTop: Z, paddingBottom: W, computedItems: L, handleItemResize: U, handleScroll: ie, handleScrollend: Se, calculateVisibleItems: K, scrollToIndex: fe } = Iy(e, T), Te = _(() => L.value.map((ye) => ({ ...ye.raw, virtualIndex: ye.index })));
  Qr({ sortBy: i, page: re(1), itemsPerPage: re(-1), groupBy: l, search: h }), yt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const _e = _(() => ({ sortBy: i.value, toggleSort: k, someSelected: R.value, allSelected: G.value, isSelected: M, select: D, selectAll: E, toggleSelect: A, isExpanded: N, toggleExpand: Y, isGroupOpen: p, toggleGroup: C, items: P.value.map((ye) => ye.raw), internalItems: P.value, groupedItems: T.value, columns: c.value, headers: d.value }));
  return ae(() => {
    const ye = ml.filterProps(Ne(e, ["multiSort"])), $ = gl.filterProps(e), z = hl.filterProps(e);
    return g(hl, q({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, z, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, _e.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return x("div", { ref: H, onScrollPassive: ie, onScrollend: Se, class: "v-table__wrapper", style: { height: ve(e.height) } }, [x("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, _e.value), !e.hideDefaultHeader && x("thead", { key: "thead" }, [g(ml, q(ye, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, _e.value), !e.hideDefaultBody && x("tbody", { key: "tbody" }, [x("tr", { ref: F, style: { height: ve(Z.value), border: 0 } }, [x("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, _e.value), g(gl, q(n, $, { items: Te.value }), { ...a, item: (Q) => g(_y, { key: Q.internalItem.index, renderless: true, "onUpdate:height": (ce) => U(Q.internalItem.index, ce) }, { default: (ce) => {
        var _a4;
        let { itemRef: oe } = ce;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...Q, itemRef: oe })) ?? g(wd, q(Q.props, { ref: oe, key: Q.internalItem.index, index: Q.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, _e.value), x("tr", { style: { height: ve(W.value), border: 0 } }, [x("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, _e.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, _e.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, _e.value);
    } });
  }), { calculateVisibleItems: K, scrollToIndex: fe };
} }), OT = j({ itemsLength: { type: [Number, String], required: true }, ...hd(), ..._d(), ...Sd() }, "VDataTableServer"), NT = te()({ name: "VDataTableServer", props: OT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = gd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = ns(e), { page: u, itemsPerPage: c } = yd(e), { disableSort: d } = ao(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: y } = kd(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = Cd(e, v), { toggleSort: h } = as({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: b, isGroupOpen: k, toggleGroup: I, extractRows: V } = Zr({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: S, setItemsPerPage: p } = bd({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Jr(m, l, b, () => !!a["group-summary"]), { isSelected: w, select: T, selectAll: P, toggleSelect: M, someSelected: D, allSelected: E } = es(e, { allItems: m, currentPage: m }), { isExpanded: A, toggleExpand: R } = qr(e), G = _(() => V(m.value));
  Qr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), ft("v-data-table", { toggleSort: h, sortBy: i }), yt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const N = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: S.value, toggleSort: h, setItemsPerPage: p, someSelected: D.value, allSelected: E.value, isSelected: w, select: T, selectAll: P, toggleSelect: M, isExpanded: A, toggleExpand: R, isGroupOpen: k, toggleGroup: I, items: G.value.map((Y) => Y.raw), internalItems: G.value, groupedItems: C.value, columns: v.value, headers: y.value }));
  ae(() => {
    const Y = ti.filterProps(e), H = ml.filterProps(Ne(e, ["multiSort"])), F = gl.filterProps(e), Z = hl.filterProps(e);
    return g(hl, q({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, Z, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, N.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(N.value) : x(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, N.value), !e.hideDefaultHeader && x("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [g(ml, q(H, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, N.value), !e.hideDefaultBody && x("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, N.value), a.body ? a.body(N.value) : g(gl, q(n, F, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, N.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, N.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, N.value)]);
    }, bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && x(be, null, [g(bn, null, null), g(ti, Y, { prepend: a["footer.prepend"] })]) });
  });
} }), HT = j({ fluid: { type: Boolean, default: false }, ...xe(), ..._t(), ...$e() }, "VContainer"), zT = te()({ name: "VContainer", props: HT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Tt(), { dimensionStyles: l } = Vt(e);
  return ae(() => g(e.tag, { class: ne(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: me([l.value, e.style]) }, n)), {};
} }), Ob = Br.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Nb = Br.reduce((e, t) => {
  const n = "offset" + qn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Hb = Br.reduce((e, t) => {
  const n = "order" + qn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), Ov = { col: Object.keys(Ob), offset: Object.keys(Nb), order: Object.keys(Hb) };
function WT(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const jT = ["auto", "start", "end", "center", "baseline", "stretch"], UT = j({ cols: { type: [Boolean, String, Number], default: false }, ...Ob, offset: { type: [String, Number], default: null }, ...Nb, order: { type: [String, Number], default: null }, ...Hb, alignSelf: { type: String, default: null, validator: (e) => jT.includes(e) }, ...xe(), ...$e() }, "VCol"), GT = te()({ name: "VCol", props: UT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Ov) Ov[o].forEach((r) => {
      const s = e[r], u = WT(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return ya(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), Vd = ["start", "end", "center"], zb = ["space-between", "space-around", "space-evenly"];
function Id(e, t) {
  return Br.reduce((n, a) => {
    const l = e + qn(a);
    return n[l] = t(), n;
  }, {});
}
const YT = [...Vd, "baseline", "stretch"], Wb = (e) => YT.includes(e), jb = Id("align", () => ({ type: String, default: null, validator: Wb })), KT = [...Vd, ...zb], Ub = (e) => KT.includes(e), Gb = Id("justify", () => ({ type: String, default: null, validator: Ub })), XT = [...Vd, ...zb, "stretch"], Yb = (e) => XT.includes(e), Kb = Id("alignContent", () => ({ type: String, default: null, validator: Yb })), Nv = { align: Object.keys(jb), justify: Object.keys(Gb), alignContent: Object.keys(Kb) }, qT = { align: "align", justify: "justify", alignContent: "align-content" };
function ZT(e, t, n) {
  let a = qT[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const JT = j({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Wb }, ...jb, justify: { type: String, default: null, validator: Ub }, ...Gb, alignContent: { type: String, default: null, validator: Yb }, ...Kb, ...xe(), ...$e() }, "VRow"), QT = te()({ name: "VRow", props: JT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Nv) Nv[o].forEach((i) => {
      const r = e[i], s = ZT(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return ya(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), Mu = ba("v-spacer", "div", "VSpacer"), Xb = j({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, modeIcon: { type: Ie, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), Eu = te()({ name: "VDatePickerControls", props: Xb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = lt(), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
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
  function h() {
    n("click:month");
  }
  return ae(() => {
    const b = { VBtn: { density: "comfortable", variant: "text" } }, k = g(Ue, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = g(Ue, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = g(Ue, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), S = g(Ue, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: y }, null), p = g(Ue, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: h }, null), C = g(Ue, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), w = g(Ue, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), T = x(be, null, [g(Ue, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: h }, null), g(Ue, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: h, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: y }, M = x(be, null, [e.noMonthPicker ? w : T, g(Mu, null, null), x("div", { class: "v-date-picker-controls__month" }, [k, I])]), D = x(be, null, [x("div", { class: "v-date-picker-controls__month" }, [k, p, I]), g(Mu, null, null), x("div", { class: "v-date-picker-controls__year" }, [V, C, S])]);
    return g(Re, { defaults: b }, { default: () => {
      var _a3;
      return [x("div", { class: ne(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ve(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? x(be, null, [e.controlVariant === "modal" && M, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), eA = j({ appendIcon: Ie, color: String, header: String, transition: String, onClick: Lt() }, "VDatePickerHeader"), Bu = te()({ name: "VDatePickerHeader", props: eA(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return ae(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return x("div", { class: ne(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: me(o.value), onClick: i }, [a.prepend && x("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && g(Qt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [x("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && x("div", { class: "v-date-picker-header__append" }, [a.append ? g(Re, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : g(Ue, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), tA = j({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function nA(e) {
  const t = bl(), n = Ce(e, "modelValue", [], (m) => ct(m).map((h) => t.date(h))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = Ce(e, "year", void 0, (m) => {
    const h = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), h));
  }, (m) => t.getYear(m)), o = Ce(e, "month", void 0, (m) => {
    const h = m != null ? Number(m) : t.getMonth(a.value), b = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(b, h);
  }, (m) => t.getMonth(m)), i = _(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((h, b) => e.weekdays.includes((b + m) % 7));
  }), r = _(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), h = m.flat(), b = 42;
    if (e.weeksInMonth === "static" && h.length < b) {
      const k = h[h.length - 1];
      let I = [];
      for (let V = 1; V <= b - h.length; V++) I.push(t.addDays(k, V)), V % 7 === 0 && (m.push(I), I = []);
    }
    return m;
  });
  function s(m, h) {
    return m.filter((b) => e.weekdays.includes(t.toJsDate(b).getDay())).map((b, k) => {
      const I = t.toISO(b), V = !t.isSameMonth(b, o.value), S = t.isSameDay(b, t.startOfMonth(o.value)), p = t.isSameDay(b, t.endOfMonth(o.value)), C = t.isSameDay(b, o.value), w = e.weekdays.length;
      return { date: b, formatted: t.format(b, "keyboardDate"), isAdjacent: V, isDisabled: y(b), isEnd: p, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((T) => t.isSameDay(b, T)), isStart: S, isToday: t.isSameDay(b, h), isWeekEnd: k % w === w - 1, isWeekStart: k % w === 0, isoDate: I, localized: t.format(b, "dayOfMonth"), month: t.getMonth(b), year: t.getYear(b) };
    });
  }
  const u = _(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), h = [];
    for (let k = 0; k <= 6; k++) h.push(t.addDays(m, k));
    const b = t.date();
    return s(h, b);
  }), c = _(() => {
    const m = r.value.flat(), h = t.date();
    return s(m, h);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = qb(e);
  function y(m) {
    if (e.disabled) return true;
    const h = t.date(m);
    return f.value && t.isBefore(t.endOfDay(h), f.value) || v.value && t.isAfter(h, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((b) => t.isSameDay(t.date(b), h)) : typeof e.allowedDates == "function" ? !e.allowedDates(h) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function qb(e) {
  const t = bl(), n = _(() => {
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
const Zb = j({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Ne(tA(), ["displayValue"]) }, "VDatePickerMonth"), $u = te()({ name: "VDatePickerMonth", props: Zb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = O(), { t: o } = lt(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = nA(e), c = bl(), d = re(), f = re(), v = re(false), y = B(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = _(() => {
    const p = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= p;
  });
  se(i, (p, C) => {
    C && (v.value = c.isBefore(p[0].date, C[0].date));
  });
  function h(p) {
    const C = c.startOfDay(p);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = p, f.value = void 0, r.value = [d.value];
    else {
      if (c.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else c.isBefore(C, d.value) ? (f.value = c.endOfDay(d.value), d.value = C) : f.value = c.endOfDay(C);
      r.value = lC(c, d.value, f.value);
    }
  }
  function b(p) {
    const C = c.format(p.date, "fullDateWithWeekday"), w = p.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${w}`, C);
  }
  function k(p) {
    const C = r.value.findIndex((w) => c.isSameDay(w, p));
    if (C === -1) r.value = [...r.value, p];
    else {
      const w = [...r.value];
      w.splice(C, 1), r.value = w;
    }
  }
  function I(p) {
    e.multiple === "range" ? h(p) : e.multiple ? k(p) : r.value = [p];
  }
  function V(p) {
    const { events: C, eventColor: w } = e;
    let T, P = [];
    if (Array.isArray(C) ? T = C.includes(p) : C instanceof Function ? T = C(p) || false : C ? T = C[p] || false : T = false, T) T !== true ? P = ct(T) : typeof w == "string" ? P = [w] : typeof w == "function" ? P = ct(w(p)) : Array.isArray(w) ? P = w : typeof w == "object" && w !== null && (P = ct(w[p]));
    else return [];
    return P.length ? P.filter(Boolean).map((M) => typeof M == "string" ? M : "surface-variant") : ["surface-variant"];
  }
  function S(p) {
    const C = V(p);
    return C.length ? x("div", { class: "v-date-picker-month__events" }, [C.map((w) => g(Py, { dot: true, color: w }, null))]) : null;
  }
  ae(() => x("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && x("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && x("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Fe("\xA0")]), s.value.map((p) => x("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [p]))]), g(Qt, { name: y.value }, { default: () => {
    var _a3;
    return [x("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((p) => x("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [p])), i.value.map((p, C) => {
      var _a4;
      const w = { props: { class: "v-date-picker-month__day-btn", color: p.isSelected || p.isToday ? e.color : void 0, disabled: p.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: p.isSelected ? "flat" : p.isToday ? "outlined" : "text", "aria-label": b(p), "aria-current": p.isToday ? "date" : void 0, onClick: () => I(p.date) }, item: p, i: C };
      return m.value && !p.isSelected && (p.isDisabled = true), x("div", { class: ne(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": p.isAdjacent, "v-date-picker-month__day--hide-adjacent": p.isHidden, "v-date-picker-month__day--selected": p.isSelected, "v-date-picker-month__day--week-end": p.isWeekEnd, "v-date-picker-month__day--week-start": p.isWeekStart }]), "data-v-date": p.isDisabled ? void 0 : p.isoDate }, [(e.showAdjacentMonths || !p.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, w)) ?? g(Ue, w.props, { default: () => [p.localized, S(p.isoDate)] }))]);
    })])];
  } })]));
} }), Jb = j({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), Ru = te()({ name: "VDatePickerMonths", props: Jb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = bl(), o = Ce(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Wn(12).map((u) => {
      const c = l.format(s, "monthShort"), d = l.format(s, "month"), f = !!(!r(u) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
      return s = l.getNextMonth(s), { isDisabled: f, text: c, label: d, value: u };
    });
  });
  mt(() => {
    o.value = o.value ?? l.getMonth(l.date());
  });
  function r(s) {
    return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : true;
  }
  return ae(() => x("div", { class: "v-date-picker-months", style: { height: ve(e.height) } }, [x("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? g(Ue, q({ key: "month" }, c), null);
  })])])), {};
} }), Qb = j({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), Fu = te()({ name: "VDatePickerYears", props: Qb(), directives: { vIntersect: $n }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = bl(), o = Ce(e, "modelValue"), i = re(false), r = _(() => {
    const f = l.getYear(l.date());
    let v = f - 100, y = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (y = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), Wn(y - v + 1, v).map((h) => {
      const b = l.format(m, "year");
      return m = l.setYear(m, l.getYear(m) + 1), { text: b, value: h, isDisabled: !d(h) };
    });
  });
  mt(() => {
    o.value = o.value ?? l.getYear(l.date());
  });
  const s = zo(), u = zo();
  function c() {
    const f = s.el, v = u.el;
    if (!f || !v) return;
    const y = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - y.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return ae(() => at(x("div", { class: "v-date-picker-years", ref: s, style: { height: ve(e.height) } }, [x("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a3;
    return (_a3 = u.el) == null ? void 0 : _a3.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a3;
    const y = { ref: o.value === f.value ? u : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: y })) ?? g(Ue, q({ key: "month" }, y), null);
  })])]), [[$n, { handler: c }, null, { once: true }]])), {};
} }), aA = j({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Ne(Xb(), ["active", "monthText", "yearText"]), ...Zb({ weeksInMonth: "static" }), ...Ne(Jb(), ["modelValue"]), ...Ne(Qb(), ["modelValue"]), ...Xr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), lA = te()({ name: "VDatePicker", props: aA(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = bl(), { t: o } = lt(), { rtlClasses: i } = Tt(), r = Ce(e, "modelValue", void 0, (U) => ct(U).map((ie) => l.date(ie)), (U) => e.multiple ? U : U[0]), s = Ce(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = qb(e), f = _(() => {
    var _a3;
    const U = l.date(), ie = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(U);
    return ie && l.isValid(ie) ? ie : U;
  }), v = B(() => e.headerColor ?? e.color), y = Ce(e, "month"), m = _({ get: () => Number(y.value ?? l.getMonth(l.startOfMonth(f.value))), set: (U) => y.value = U }), h = Ce(e, "year"), b = _({ get: () => Number(h.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (U) => h.value = U }), k = re(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const U = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && U.split(" ").length === 3 ? U.replace(" ", `
`) : U;
  }), V = B(() => {
    let U = l.date();
    return U = l.setDate(U, 1), U = l.setMonth(U, m.value), U = l.setYear(U, b.value), U;
  }), S = B(() => l.format(V.value, "monthAndYear")), p = B(() => l.format(V.value, "monthShort")), C = B(() => l.format(V.value, "year")), w = B(() => `date-picker-header${k.value ? "-reverse" : ""}-transition`), T = _(() => {
    if (e.disabled) return true;
    const U = [];
    if (s.value !== "month") U.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ie = l.date();
      if (ie = l.startOfMonth(ie), ie = l.setMonth(ie, m.value), ie = l.setYear(ie, b.value), u.value) {
        const Se = l.addDays(l.startOfMonth(ie), -1), K = l.addDays(l.startOfYear(ie), -1);
        l.isAfter(u.value, Se) && U.push("prev-month"), l.isAfter(u.value, K) && U.push("prev-year");
      }
      if (c.value) {
        const Se = l.addDays(l.endOfMonth(ie), 1), K = l.addDays(l.endOfYear(ie), 1);
        l.isAfter(Se, c.value) && U.push("next-month"), l.isAfter(K, c.value) && U.push("next-year");
      }
    }
    return U;
  }), P = _(() => e.allowedYears || E), M = _(() => e.allowedMonths || A);
  function D(U, ie) {
    const Se = e.allowedDates;
    if (typeof Se != "function") return true;
    const K = 1 + fh(l, U, ie);
    for (let fe = 0; fe < K; fe++) if (Se(l.addDays(U, fe))) return true;
    return false;
  }
  function E(U) {
    if (typeof e.allowedDates == "function") {
      const ie = l.parseISO(`${U}-01-01`);
      return D(ie, l.endOfYear(ie));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (l.getYear(l.date(ie)) === U) return true;
      return false;
    }
    return true;
  }
  function A(U) {
    if (typeof e.allowedDates == "function") {
      const ie = String(U + 1).padStart(2, "0"), Se = l.parseISO(`${b.value}-${ie}-01`);
      return D(Se, l.endOfMonth(Se));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (l.getYear(l.date(ie)) === b.value && l.getMonth(l.date(ie)) === U) return true;
      return false;
    }
    return true;
  }
  function R() {
    m.value < 11 ? m.value++ : (b.value++, m.value = 0, L()), W();
  }
  function G() {
    m.value > 0 ? m.value-- : (b.value--, m.value = 11, L()), W();
  }
  function N() {
    if (b.value++, c.value) {
      const U = String(m.value + 1).padStart(2, "0"), ie = l.parseISO(`${b.value}-${U}-01`);
      l.isAfter(ie, c.value) && (m.value = l.getMonth(c.value));
    }
    L();
  }
  function Y() {
    if (b.value--, u.value) {
      const U = String(m.value + 1).padStart(2, "0"), ie = l.endOfMonth(l.parseISO(`${b.value}-${U}-01`));
      l.isAfter(u.value, ie) && (m.value = l.getMonth(u.value));
    }
    L();
  }
  function H() {
    s.value = "month";
  }
  function F() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function Z() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function W() {
    s.value === "months" && F();
  }
  function L() {
    s.value === "year" && Z();
  }
  return se(r, (U, ie) => {
    const Se = ct(ie), K = ct(U);
    if (!K.length) return;
    const fe = l.date(Se[Se.length - 1]), Te = l.date(K[K.length - 1]);
    if (l.isSameDay(fe, Te)) return;
    const _e = l.getMonth(Te), ye = l.getYear(Te);
    _e !== m.value && (m.value = _e, W()), ye !== b.value && (b.value = ye, L()), k.value = l.isBefore(fe, Te);
  }), ae(() => {
    const U = no.filterProps(e), ie = Ne(Eu.filterProps(e), ["viewMode"]), Se = Bu.filterProps(e), K = $u.filterProps(e), fe = Ne(Ru.filterProps(e), ["modelValue"]), Te = Ne(Fu.filterProps(e), ["modelValue"]), _e = { color: v.value, header: I.value, transition: w.value };
    return g(no, q(U, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ve(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? x("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? g(Re, { defaults: { VDatePickerHeader: { ..._e } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, _e)];
    } }) : g(Bu, q({ key: "header" }, Se, _e, { onClick: s.value !== "month" ? H : void 0 }), { prepend: a.prepend, append: a.append }), default: () => x(be, null, [g(Eu, q(ie, { disabled: T.value, viewMode: s.value, text: S.value, monthText: p.value, yearText: C.value, "onClick:next": R, "onClick:prev": G, "onClick:nextYear": N, "onClick:prevYear": Y, "onClick:month": F, "onClick:year": Z }), { default: a.controls }), g(Ko, { hideOnLeave: true }, { default: () => [s.value === "months" ? g(Ru, q({ key: "date-picker-months" }, fe, { modelValue: m.value, "onUpdate:modelValue": [(ye) => m.value = ye, W], min: u.value, max: c.value, year: b.value, allowedMonths: M.value }), { month: a.month }) : s.value === "year" ? g(Fu, q({ key: "date-picker-years" }, Te, { modelValue: b.value, "onUpdate:modelValue": [(ye) => b.value = ye, L], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : g($u, q({ key: "date-picker-month" }, K, { modelValue: r.value, "onUpdate:modelValue": (ye) => r.value = ye, month: m.value, "onUpdate:month": [(ye) => m.value = ye, W], year: b.value, "onUpdate:year": [(ye) => b.value = ye, L], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), oA = j({ actionText: String, bgColor: String, color: String, icon: Ie, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...xe(), ..._t(), ...ea({ size: void 0 }), ...Ke() }, "VEmptyState"), iA = te()({ name: "VEmptyState", props: oA(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = Je(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Qe(() => e.bgColor), { dimensionStyles: r } = Vt(e), { displayClasses: s } = xn();
  function u(c) {
    n("click:action", c);
  }
  return ae(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), y = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return x("div", { class: ne(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: me([i.value, r.value, e.style]) }, [y && x("div", { key: "media", class: "v-empty-state__media" }, [a.media ? g(Re, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : x(be, null, [e.image ? g(ma, { key: "image", src: e.image, height: m }, null) : e.icon ? g(qe, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && x("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && x("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && x("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ve(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && x("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && x("div", { key: "actions", class: "v-empty-state__actions" }, [g(Re, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? g(Ue, { onClick: u }, null)];
    } })])]);
  }), {};
} }), ai = Symbol.for("vuetify:v-expansion-panel"), ep = j({ ...xe(), ...Jc() }, "VExpansionPanelText"), Lu = te()({ name: "VExpansionPanelText", props: ep(), setup(e, t) {
  let { slots: n } = t;
  const a = Ge(ai);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = Qc(e, a.isSelected);
  return ae(() => g(Fr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [at(x("div", { class: ne(["v-expansion-panel-text", e.class]), style: me(e.style) }, [n.default && l.value && x("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[Fn, a.isSelected.value]])];
  } })), {};
} }), tp = j({ color: String, expandIcon: { type: Ie, default: "$expand" }, collapseIcon: { type: Ie, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...xe(), ..._t() }, "VExpansionPanelTitle"), Ou = te()({ name: "VExpansionPanelTitle", directives: { vRipple: Nt }, props: tp(), setup(e, t) {
  let { slots: n } = t;
  const a = Ge(ai);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.color), { dimensionStyles: i } = Vt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return ae(() => {
    var _a3;
    return at(x("button", { class: ne(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: me([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [x("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && g(Re, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [x("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? g(qe, null, null)])];
    } })]), [[Nt, e.ripple]]);
  }), {};
} }), np = j({ title: String, text: String, bgColor: String, ...It(), ...Cl(), ...dt(), ...$e(), ...tp(), ...ep() }, "VExpansionPanel"), rA = te()({ name: "VExpansionPanel", props: np(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Fa(e, ai), { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.bgColor), { elevationClasses: i } = Dt(e), { roundedClasses: r } = gt(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, v, y) => (a.group.selected.value.includes(v.id) && f.push(y), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return ft(ai, a), ae(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), y = Ou.filterProps(e), m = Lu.filterProps(e);
    return g(e.tag, { class: ne(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [x("div", { class: ne(["v-expansion-panel__shadow", ...i.value]) }, null), g(Re, { defaults: { VExpansionPanelTitle: { ...y }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && g(Ou, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && g(Lu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), sA = ["default", "accordion", "inset", "popout"], uA = j({ flat: Boolean, ...wl(), ...on(np(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ke(), ...xe(), ...$e(), variant: { type: String, default: "default", validator: (e) => sA.includes(e) } }, "VExpansionPanels"), cA = te()({ name: "VExpansionPanels", props: uA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Ua(e, ai), { themeClasses: o } = Je(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return yt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), ae(() => g(e.tag, { class: ne(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), dA = j({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Ne(Nr({ active: true }), ["location", "spaced"]), ...Sl(), ...Qn(), ...pa({ transition: "fab-transition" }) }, "VFab"), fA = te()({ name: "VFab", props: dA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = re(56), o = O(), { resizeRef: i } = Vn((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = B(() => e.app || e.absolute), s = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  Ot(() => e.app, () => {
    const d = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? l.value + 24 : 0), elementSize: _(() => l.value + 24), active: _(() => e.app && a.value), absolute: B(() => e.absolute) });
    mt(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = O();
  return ae(() => {
    const d = Ue.filterProps(e);
    return x("div", { ref: c, class: ne(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: me([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [x("div", { class: "v-fab__container" }, [g(Qt, { appear: e.appear, transition: e.transition }, { default: () => [at(g(Ue, q({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Fn, e.active]])] })])]);
  }), {};
} });
function vA() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await ap(o, lp(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function ap(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await ap(r, lp(t, r)));
      n(i);
    });
  });
}
function lp(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const mA = j({ filterByType: String }, "file-accept");
function gA(e) {
  const t = _(() => e.filterByType ? hA(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function hA(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const yA = j({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Ne(wa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ct(e).every((t) => t != null && typeof t == "object") }, ...mA(), ...xi({ clearable: true }) }, "VFileInput"), bA = te()({ name: "VFileInput", inheritAttrs: false, props: yA(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = lt(), { filterAccepted: i } = gA(e), r = Ce(e, "modelValue", e.modelValue, (H) => ct(H), (H) => !e.multiple && Array.isArray(H) ? H[0] : H), { isFocused: s, focus: u, blur: c } = ka(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((H, F) => {
    let { size: Z = 0 } = F;
    return H + Z;
  }, 0)), v = _(() => Of(f.value, d.value)), y = _(() => (r.value ?? []).map((H) => {
    const { name: F = "", size: Z = 0 } = H, W = E(F);
    return e.showSize ? `${W} (${Of(Z, d.value)})` : W;
  })), m = _(() => {
    var _a3;
    const H = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, H, v.value) : o(e.counterString, H);
  }), h = O(), b = O(), k = O(), I = B(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), S = re(false), { handleDrop: p, hasFilesOrFolders: C } = vA();
  function w() {
    var _a3;
    k.value !== document.activeElement && ((_a3 = k.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function T(H) {
    var _a3;
    (_a3 = k.value) == null ? void 0 : _a3.click();
  }
  function P(H) {
    a("mousedown:control", H);
  }
  function M(H) {
    var _a3;
    (_a3 = k.value) == null ? void 0 : _a3.click(), a("click:control", H);
  }
  function D(H) {
    H.stopPropagation(), w(), Ee(() => {
      r.value = [], ci(e["onClick:clear"], H);
    });
  }
  function E(H) {
    if (H.length < Number(e.truncateLength)) return H;
    const F = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${H.slice(0, F)}\u2026${H.slice(H.length - F)}`;
  }
  function A(H) {
    H.preventDefault(), H.stopImmediatePropagation(), S.value = true;
  }
  function R(H) {
    H.preventDefault(), S.value = false;
  }
  async function G(H) {
    if (H.preventDefault(), H.stopImmediatePropagation(), S.value = false, !k.value || !C(H)) return;
    const F = await p(H);
    Y(F);
  }
  function N(H) {
    if (!(!H.target || H.repack)) if (e.filterByType) Y([...H.target.files]);
    else {
      const F = H.target;
      r.value = [...F.files ?? []];
    }
  }
  function Y(H) {
    const F = new DataTransfer(), { accepted: Z, rejected: W } = i(H);
    W.length && a("rejected", W);
    for (const U of Z) F.items.add(U);
    k.value.files = F.files, r.value = [...F.files];
    const L = new Event("change", { bubbles: true });
    L.repack = true, k.value.dispatchEvent(L);
  }
  return se(r, (H) => {
    (!Array.isArray(H) || !H.length) && k.value && (k.value.value = "");
  }), ae(() => {
    const H = !!(l.counter || e.counter), F = !!(H || l.details), [Z, W] = Zn(n), { modelValue: L, ...U } = jt.filterProps(e), ie = { ...Ha.filterProps(e), "onClick:clear": D }, Se = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, K = n.accept ? String(n.accept) : void 0, fe = Se ? void 0 : e.filterByType ?? K;
    return g(jt, q({ ref: h, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": S.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": T }, Z, U, { centerAffix: !V.value, focused: s.value }), { ...l, default: (Te) => {
      let { id: _e, isDisabled: ye, isDirty: $, isReadonly: z, isValid: Q, hasDetails: ce } = Te;
      return g(Ha, q({ ref: b, prependIcon: e.prependIcon, onMousedown: P, onClick: M, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ie, { id: _e.value, active: I.value || $.value, dirty: $.value || e.dirty, disabled: ye.value, focused: s.value, details: ce.value, error: Q.value === false, onDragover: A, onDrop: G }), { ...l, default: (oe) => {
        var _a3;
        let { props: { class: ue, ...pe }, controlRef: de } = oe;
        return x(be, null, [x("input", q({ ref: (X) => k.value = de.value = X, type: "file", accept: fe, readonly: z.value, disabled: ye.value, multiple: e.multiple, name: e.name, onClick: (X) => {
          X.stopPropagation(), z.value && X.preventDefault(), w();
        }, onChange: N, onDragleave: R, onFocus: w, onBlur: c }, pe, W), null), x("div", { class: ne(ue) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: y.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? y.value.map((X) => g(ga, { key: X, size: "small", text: X }, null)) : y.value.join(", "))])]);
      } });
    }, details: F ? (Te) => {
      var _a3, _b2;
      return x(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Te), H && x(be, null, [x("span", null, null), g(zr, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Mt({}, h, b, k);
} }), pA = j({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Gt(), ...xe(), ...It(), ...Sl(), ...dt(), ...$e({ tag: "footer" }), ...Ke() }, "VFooter"), SA = te()({ name: "VFooter", props: pA(), setup(e, t) {
  let { slots: n } = t;
  const a = O(), { themeClasses: l } = Je(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Qe(() => e.color), { borderClasses: r } = tn(e), { elevationClasses: s } = Dt(e), { roundedClasses: u } = gt(e), c = re(32), { resizeRef: d } = Vn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return Ot(() => e.app, () => {
    const v = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    mt(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), ae(() => g(e.tag, { ref: d, class: ne(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: me([i.value, e.app ? a.value : { height: ve(e.height) }, e.style]) }, n)), {};
} }), xA = j({ ...xe(), ...I_() }, "VForm"), kA = te()({ name: "VForm", props: xA(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = P_(e), o = O();
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
    return x("form", { ref: o, class: ne(["v-form", e.class]), style: me(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Mt(l, o);
} }), wA = j({ color: String, ...Gt(), ...xe(), ...dt(), ...$e({ tag: "kbd" }), ...Ke(), ...It() }, "VKbd"), Nu = te()({ name: "VKbd", props: wA(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { borderClasses: l } = tn(e), { roundedClasses: o } = gt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Qe(() => e.color), { elevationClasses: s } = Dt(e);
  return ae(() => g(e.tag, { class: ne(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: me([r.value, e.style]) }, n)), {};
} });
function op(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const ip = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, CA = j({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => ip }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...xe(), ...Ke(), ...Gt(), ...dt(), ...It(), color: String }, "VHotkey"), Ls = Symbol("VHotkey:AND_DELINEATOR"), Os = Symbol("VHotkey:SLASH_DELINEATOR"), Hv = Symbol("VHotkey:THEN_DELINEATOR");
function _A(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = op(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function zv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = op(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const VA = te()({ name: "VHotkey", props: CA(), setup(e) {
  const { t } = lt(), { themeClasses: n } = Je(e), { rtlClasses: a } = Tt(), { borderClasses: l } = tn(e), { roundedClasses: o } = gt(e), { elevationClasses: i } = Dt(e), { colorClasses: r, colorStyles: s, variantClasses: u } = xa(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((b) => {
    const k = [], I = xC(b);
    for (let V = 0; V < I.length; V++) {
      const S = I[V];
      V > 0 && k.push(Hv);
      const { keys: p, separators: C } = Sh(S);
      for (let w = 0; w < p.length; w++) {
        const T = p[w];
        w > 0 && k.push(C[w - 1] === "/" ? Os : Ls), k.push(zv(e.keyMap, e.displayMode, T, c.value));
      }
    }
    return k;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const k = d.value.map((I) => {
      const V = [];
      for (const S of I) if (Array.isArray(S)) {
        const p = S[0] === "icon" || S[0] === "symbol" ? zv(zt(ip, e.keyMap), "text", String(S[1]), c.value)[1] : S[1];
        V.push(v(p));
      } else S === Ls ? V.push(t("$vuetify.hotkey.plus")) : S === Os ? V.push(t("$vuetify.hotkey.or")) : S === Hv && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", k);
  });
  function v(b) {
    return b.startsWith("$vuetify.") ? t(b) : b;
  }
  function y(b) {
    if (e.displayMode === "text") return;
    const k = _A(e.keyMap, String(b[2]), c.value);
    return v(k);
  }
  function m(b, k) {
    const I = e.variant === "contained", V = I ? "kbd" : Nu, S = ["v-hotkey__key", `v-hotkey__key-${b[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return g(V, { key: k, class: ne(S), style: me(I ? void 0 : s.value), "aria-hidden": "true", title: y(b) }, { default: () => [b[0] === "icon" ? g(qe, { icon: b[1], "aria-hidden": "true" }, null) : v(b[1])] });
  }
  function h(b, k) {
    return x("span", { key: k, class: "v-hotkey__divider", "aria-hidden": "true" }, [b === Ls ? "+" : b === Os ? "/" : t("$vuetify.hotkey.then")]);
  }
  ae(() => {
    const b = x(be, null, [e.prefix && x("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((k, I) => x("span", { class: "v-hotkey__combination", key: I }, [k.map((V, S) => Array.isArray(V) ? m(V, S) : h(V, S)), I < d.value.length - 1 && x("span", { "aria-hidden": "true" }, [Fe("\xA0")])])), e.suffix && x("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return x("div", { class: ne(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: me(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? b : g(Nu, { key: "contained", class: ne(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: me(s.value), "aria-hidden": "true" }, { default: () => [b] })]);
  });
} }), IA = j({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...qc() }, "VHover"), PA = te()({ name: "VHover", props: IA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Zc(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), TA = j({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ..._t(), ...$e() }, "VInfiniteScroll"), Wv = en({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = vi();
  return se(l, async (o) => {
    n("intersect", e.side, o);
  }), ae(() => x("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Fe("\xA0")])), {};
} }), AA = te()({ name: "VInfiniteScroll", props: TA(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = O(), o = re("ok"), i = re("ok"), r = _(() => ve(e.margin)), s = re(false);
  function u(p) {
    if (!l.value) return;
    const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    l.value[C] = p;
  }
  function c() {
    if (!l.value) return 0;
    const p = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    return l.value[p];
  }
  function d() {
    if (!l.value) return 0;
    const p = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
    return l.value[p];
  }
  function f() {
    if (!l.value) return 0;
    const p = e.direction === "vertical" ? "clientHeight" : "clientWidth";
    return l.value[p];
  }
  Pt(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function v(p, C) {
    p === "start" ? o.value = C : p === "end" ? i.value = C : p === "both" && (o.value = C, i.value = C);
  }
  function y(p) {
    return p === "start" ? o.value : i.value;
  }
  let m = 0;
  function h(p, C) {
    s.value = C, s.value && b(p);
  }
  function b(p) {
    if (e.mode !== "manual" && !s.value) return;
    const C = y(p);
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(p, "loading");
    function w(T) {
      v(p, T), Ee(() => {
        T === "empty" || T === "error" || (T === "ok" && p === "start" && u(d() - m + c()), e.mode !== "manual" && Ee(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                b(p);
              });
            });
          });
        }));
      });
    }
    a("load", { side: p, done: w });
  }
  const { t: k } = lt();
  function I(p, C) {
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== p && e.side !== "both") return;
    const w = () => b(p), T = { side: p, props: { onClick: w, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, T) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, T)) ?? x("div", null, [k(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, T)) ?? g(La, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, T)) ?? g(Ue, { variant: "outlined", color: e.color, onClick: w }, { default: () => [k(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, T)) ?? g(La, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = Vt(e);
  ae(() => {
    const p = e.tag, C = e.side === "start" || e.side === "both", w = e.side === "end" || e.side === "both", T = e.mode === "intersect";
    return g(p, { ref: l, class: ne(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": w }]), style: me(V.value) }, { default: () => {
      var _a3;
      return [x("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && T && g(Wv, { key: "start", side: "start", onIntersect: h, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), w && T && g(Wv, { key: "end", side: "end", onIntersect: h, rootMargin: r.value }, null), x("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
    } });
  });
  function S(p) {
    const C = p ?? e.side;
    v(C, "ok"), Ee(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && Ee(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              C === "both" ? (b("start"), b("end")) : b(C);
            });
          });
        });
      });
    });
  }
  return { reset: S };
} }), rp = Symbol.for("vuetify:v-item-group"), DA = j({ ...xe(), ...wl({ selectedClass: "v-item--selected" }), ...$e(), ...Ke() }, "VItemGroup"), MA = te()({ name: "VItemGroup", props: DA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ua(e, rp);
  return () => g(e.tag, { class: ne(["v-item-group", a.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), EA = te()({ name: "VItem", props: Cl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Fa(e, rp);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), BA = j({ ...xe(), ..._t(), ...yh() }, "VLayout"), $A = te()({ name: "VLayout", props: BA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = ph(e), { dimensionStyles: s } = Vt(e);
  return ae(() => {
    var _a3;
    return x("div", { ref: r, class: ne([a.value, e.class]), style: me([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), RA = j({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...xe(), ...Sl() }, "VLayoutItem"), FA = te()({ name: "VLayoutItem", props: RA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return x("div", { class: ne(["v-layout-item", e.class]), style: me([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), LA = j({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...xe(), ..._t(), ...$e(), ...pa({ transition: "fade-transition" }) }, "VLazy"), OA = te()({ name: "VLazy", directives: { vIntersect: $n }, props: LA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = Vt(e), l = Ce(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return ae(() => at(g(e.tag, { class: ne(["v-lazy", e.class]), style: me([a.value, e.style]) }, { default: () => [l.value && g(Qt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[$n, { handler: o, options: e.options }, null]])), {};
} }), NA = j({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...xe() }, "VLocaleProvider"), HA = te()({ name: "VLocaleProvider", props: NA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = rh(e);
  return ae(() => {
    var _a3;
    return x("div", { class: ne(["v-locale-provider", a.value, e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), zA = j({ scrollable: Boolean, ...xe(), ..._t(), ...$e({ tag: "main" }) }, "VMain"), WA = te()({ name: "VMain", props: zA(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = Vt(e), { mainStyles: l } = bh(), { ssrBootStyles: o } = kl();
  return ae(() => g(e.tag, { class: ne(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: me([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? x("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function jA(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = re(false), o = re(0), i = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: ve(o.value) } : { top: a.value.top }];
  });
  Pt(() => {
    se(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Ut(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, y = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - y, l.value = true) : u === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (y ? l.value !== "top" && (o.value = -f + y + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const UA = 100, GA = 20;
function jv(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Uv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = jv(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return jv(t) * 1e3;
}
function YA() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Wg(GA))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > UA) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Uv(r), y: Uv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : KA();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function KA() {
  throw new Error();
}
function XA(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  Pt(() => {
    window.addEventListener("touchstart", k, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Ut(() => {
    window.removeEventListener("touchstart", k), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = YA();
  let d = false;
  const f = re(false), v = re(0), y = re(0);
  let m;
  function h(p, C) {
    return (i.value === "left" ? p : i.value === "right" ? document.documentElement.clientWidth - p : i.value === "top" ? p : i.value === "bottom" ? document.documentElement.clientHeight - p : Ml()) - (C ? l.value : 0);
  }
  function b(p) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const w = i.value === "left" ? (p - y.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - p - y.value) / l.value : i.value === "top" ? (p - y.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - p - y.value) / l.value : Ml();
    return C ? tt(w) : w;
  }
  function k(p) {
    if (o.value) return;
    const C = p.changedTouches[0].clientX, w = p.changedTouches[0].clientY, T = 25, P = i.value === "left" ? C < T : i.value === "right" ? C > document.documentElement.clientWidth - T : i.value === "top" ? w < T : i.value === "bottom" ? w > document.documentElement.clientHeight - T : Ml(), M = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? w < l.value : i.value === "bottom" ? w > document.documentElement.clientHeight - l.value : Ml());
    (P || M || n.value && a.value) && (m = [C, w], y.value = h(r.value ? C : w, n.value), v.value = b(r.value ? C : w), d = y.value > -20 && y.value < 80, u(p), s(p));
  }
  function I(p) {
    const C = p.changedTouches[0].clientX, w = p.changedTouches[0].clientY;
    if (d) {
      if (!p.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), M = Math.abs(w - m[1]);
      (r.value ? P > M && P > 3 : M > P && M > 3) ? (f.value = true, d = false) : (r.value ? M : P) > 3 && (d = false);
    }
    if (!f.value) return;
    p.preventDefault(), s(p);
    const T = b(r.value ? C : w, false);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? y.value = h(r.value ? C : w, true) : T < 0 && (y.value = h(r.value ? C : w, false));
  }
  function V(p) {
    if (d = false, !f.value) return;
    s(p), f.value = false;
    const C = c(p.changedTouches[0].identifier), w = Math.abs(C.x), T = Math.abs(C.y);
    (r.value ? w > T && w > 400 : T > w && T > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Ml()) : n.value = v.value > 0.5;
  }
  const S = _(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Ml(), transition: "none" } : void 0);
  return Ot(f, () => {
    var _a3, _b2;
    const p = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    mt(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = S.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = S.value) == null ? void 0 : _c2.transition) || null);
    }), St(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", p), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: S };
}
function Ml() {
  throw new Error();
}
const qA = ["start", "end", "left", "right", "top", "bottom"], ZA = j({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => qA.includes(e) }, sticky: Boolean, ...Gt(), ...xe(), ...qc(), ...pl({ mobile: null }), ...It(), ...Sl(), ...dt(), ...Ne(yy(), ["disableInitialFocus"]), ...$e({ tag: "nav" }), ...Ke() }, "VNavigationDrawer"), JA = te()({ name: "VNavigationDrawer", props: ZA(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = Tt(), { themeClasses: i } = Je(e), { borderClasses: r } = tn(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Qe(() => e.color), { elevationClasses: c } = Dt(e), { displayClasses: d, mobile: f } = xn(e), { roundedClasses: v } = gt(e), y = Th(), m = Ce(e, "modelValue", null, (F) => !!F), { ssrBootStyles: h } = kl(), { scopeId: b } = _l(), k = O(), I = re(false), { runOpenDelay: V, runCloseDelay: S } = Zc(e, (F) => {
    I.value = F;
  }), p = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => au(e.location, o.value)), w = B(() => e.persistent), T = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !T.value && C.value !== "bottom");
  by(e, { isActive: m, localTop: T, contentEl: k }), Ot(() => e.expandOnHover && e.rail != null, () => {
    se(I, (F) => a("update:rail", !F));
  }), Ot(() => !e.disableResizeWatcher, () => {
    se(T, (F) => !e.permanent && Ee(() => m.value = !F));
  }), Ot(() => !e.disableRouteWatcher && !!y, () => {
    se(y.currentRoute, () => T.value && (m.value = false));
  }), se(() => e.permanent, (F) => {
    F && (m.value = true);
  }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
  const { isDragging: M, dragProgress: D } = XA({ el: k, isActive: m, isTemporary: T, width: p, touchless: B(() => e.touchless), position: C }), E = _(() => {
    const F = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : p.value;
    return M.value ? F * D.value : F;
  }), { layoutItemStyles: A, layoutItemScrimStyles: R } = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: E, elementSize: p, active: rl(m), disableTransitions: B(() => M.value), absolute: _(() => e.absolute || P.value && typeof G.value != "string") }), { isStuck: G, stickyStyles: N } = jA({ rootEl: k, isSticky: P, layoutItemStyles: A }), Y = Qe(() => typeof e.scrim == "string" ? e.scrim : null), H = _(() => ({ ...M.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...R.value }));
  return yt({ VList: { bgColor: "transparent" } }), ae(() => {
    const F = l.image || e.image;
    return x(be, null, [g(e.tag, q({ ref: k, onMouseenter: V, onMouseleave: S, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--persistent": w.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, A.value, h.value, N.value, e.style], inert: !m.value }, b, n), { default: () => {
      var _a3, _b2, _c2;
      return [F && x("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? g(Re, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : g(ma, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && x("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), x("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && x("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), g($a, { name: "fade-transition" }, { default: () => [T.value && (M.value || m.value) && !!e.scrim && x("div", q({ class: ["v-navigation-drawer__scrim", Y.backgroundColorClasses.value], style: [H.value, Y.backgroundColorStyles.value], onClick: () => {
      w.value || (m.value = false);
    } }, b), null)] })]);
  }), { isStuck: G };
} }), QA = en({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = py();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), eD = 50, tD = 500;
function nD(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  St(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), eD);
    }, tD);
  }
  function o() {
    window.clearTimeout(n), window.clearInterval(a), window.removeEventListener("pointerup", o), document.removeEventListener("blur", o);
  }
  St(o);
  function i(r) {
    t(r === "up");
  }
  return { holdStart: l, holdStop: o };
}
const aD = j({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Ne(ki(), ["modelValue", "validationValue"]) }, "VNumberInput"), lD = te()({ name: "VNumberInput", props: { ...aD() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = O(), { holdStart: l, holdStop: o } = nD({ toggleUpDown: M }), i = uo(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = re(e.focused), { decimalSeparator: u } = lt(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(L) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const Se = U == null ? String(L) : L.toFixed(U);
    if (s.value && ie) return Number(Se).toString().replace(".", c.value);
    if (e.minFractionDigits === null || U !== null && U < e.minFractionDigits) return Se.replace(".", c.value);
    let [K, fe] = Se.split(".");
    return fe = (fe ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [K, fe].filter(Boolean).join(c.value);
  }
  const f = Ce(e, "modelValue", null, (L) => L ?? null, (L) => L == null ? L ?? null : tt(Number(L), e.min, e.max)), v = re(null), y = re(null);
  se(f, (L) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === L || (L == null ? (v.value = null, y.value = null) : isNaN(L) || (v.value = d(L), y.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set(L) {
    if (L === null || L === "") {
      f.value = null, v.value = null, y.value = null;
      return;
    }
    const U = Number(L.replace(c.value, "."));
    isNaN(U) || (v.value = L, y.value = U, U <= e.max && U >= e.min && (f.value = U));
  } }), h = _(() => {
    var _a3;
    if (y.value === null) return false;
    const L = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return L !== tt(L, e.min, e.max);
  }), b = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), k = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = B(() => I.value === "split" ? "$plus" : "$collapse"), S = B(() => I.value === "split" ? "$minus" : "$expand"), p = B(() => I.value === "split" ? "default" : "small"), C = B(() => I.value === "stacked" ? "auto" : "100%"), w = { props: { onClick: A, onPointerup: R, onPointerdown: G, onPointercancel: R } }, T = { props: { onClick: A, onPointerup: R, onPointerdown: N, onPointercancel: R } };
  se(() => e.precision, () => H()), se(() => e.minFractionDigits, () => H()), Pt(() => {
    Y();
  });
  function P(L) {
    if (L == null) return 0;
    const U = L.toString(), ie = U.indexOf(".");
    return ~ie ? U.length - ie : 0;
  }
  function M() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(tt(0, e.min, e.max));
      return;
    }
    let U = Math.max(P(f.value), P(e.step));
    e.precision != null && (U = Math.max(U, e.precision)), L ? b.value && (m.value = d(f.value + e.step, U)) : k.value && (m.value = d(f.value - e.step, U));
  }
  function D(L) {
    var _a3;
    if (!L.data) return;
    const U = L.target, { value: ie, selectionStart: Se, selectionEnd: K } = U ?? {}, fe = ie ? ie.slice(0, Se) + L.data + ie.slice(K) : L.data, Te = ww(fe, e.precision, c.value);
    if (new RegExp(`^-?\\d*${ar(c.value)}?\\d*$`).test(fe) || (L.preventDefault(), U.value = Te, Ee(() => m.value = Te)), e.precision != null) {
      if (((_a3 = fe.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        L.preventDefault(), U.value = Te, Ee(() => m.value = Te);
        const _e = (Se ?? 0) + L.data.length;
        U.setSelectionRange(_e, _e);
      }
      e.precision === 0 && fe.endsWith(c.value) && (L.preventDefault(), U.value = Te, Ee(() => m.value = Te));
    }
  }
  async function E(L) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(L.key) || L.ctrlKey || ["ArrowDown", "ArrowUp"].includes(L.key) && (L.preventDefault(), L.stopPropagation(), Y(), await Ee(), L.key === "ArrowDown" ? M(false) : M());
  }
  function A(L) {
    L.stopPropagation();
  }
  function R(L) {
    var _a3;
    (_a3 = L.currentTarget) == null ? void 0 : _a3.releasePointerCapture(L.pointerId), L.preventDefault(), o();
  }
  function G(L) {
    var _a3;
    (_a3 = L.currentTarget) == null ? void 0 : _a3.setPointerCapture(L.pointerId), L.preventDefault(), L.stopPropagation(), l("up");
  }
  function N(L) {
    var _a3;
    (_a3 = L.currentTarget) == null ? void 0 : _a3.setPointerCapture(L.pointerId), L.preventDefault(), L.stopPropagation(), l("down");
  }
  function Y() {
    if (r.value || !a.value) return;
    const L = a.value.value, U = Number(L.replace(c.value, "."));
    L && !isNaN(U) ? m.value = d(tt(U, e.min, e.max)) : m.value = null;
  }
  function H() {
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
  function Z() {
    F();
  }
  function W() {
    Y();
  }
  return ae(() => {
    const { modelValue: L, type: U, ...ie } = Xn.filterProps(e);
    function Se() {
      return n.increment ? g(Re, { key: "increment-defaults", defaults: { VBtn: { disabled: !b.value, height: C.value, size: p.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(w)] }) : g(Ue, { "aria-hidden": "true", "data-testid": "increment", disabled: !b.value, height: C.value, icon: V.value, key: "increment-btn", onClick: A, onPointerdown: G, onPointerup: R, onPointercancel: R, size: p.value, variant: "text", tabindex: "-1" }, null);
    }
    function K() {
      return n.decrement ? g(Re, { key: "decrement-defaults", defaults: { VBtn: { disabled: !k.value, height: C.value, size: p.value, icon: S.value, variant: "text" } } }, { default: () => [n.decrement(T)] }) : g(Ue, { "aria-hidden": "true", "data-testid": "decrement", disabled: !k.value, height: C.value, icon: S.value, key: "decrement-btn", onClick: A, onPointerdown: N, onPointerup: R, onPointercancel: R, size: p.value, variant: "text", tabindex: "-1" }, null);
    }
    function fe() {
      return x("div", { class: "v-number-input__control" }, [K(), g(bn, { vertical: I.value !== "stacked" }, null), Se()]);
    }
    function Te() {
      return !e.hideInput && !e.inset ? g(bn, { vertical: true }, null) : void 0;
    }
    const _e = I.value === "split" ? x("div", { class: "v-number-input__control" }, [g(bn, { vertical: true }, null), Se()]) : e.reverse || I.value === "hidden" ? void 0 : x(be, null, [Te(), fe()]), ye = n["append-inner"] || _e, $ = I.value === "split" ? x("div", { class: "v-number-input__control" }, [K(), g(bn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? x(be, null, [fe(), Te()]) : void 0, z = n["prepend-inner"] || $;
    return g(Xn, q({ ref: a }, ie, { modelValue: m.value, "onUpdate:modelValue": (Q) => m.value = Q, focused: s.value, "onUpdate:focused": (Q) => s.value = Q, validationValue: f.value, error: e.error || h.value || void 0, onBeforeinput: D, onFocus: Z, onBlur: W, onKeydown: E, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ye ? function() {
      var _a3;
      for (var Q = arguments.length, ce = new Array(Q), oe = 0; oe < Q; oe++) ce[oe] = arguments[oe];
      return x(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...ce), _e]);
    } : void 0, "prepend-inner": z ? function() {
      var _a3;
      for (var Q = arguments.length, ce = new Array(Q), oe = 0; oe < Q; oe++) ce[oe] = arguments[oe];
      return x(be, null, [$, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...ce)]);
    } : void 0 });
  }), Mt({}, a);
} }), oD = j({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...bt(), ..._t(), ...pi(), ...on(xi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), iD = te()({ name: "VOtpInput", props: oD(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Ht(e), { dimensionStyles: i } = Vt(e), { isFocused: r, focus: s, blur: u } = ka(e), c = Ce(e, "modelValue", "", (M) => M == null ? [] : String(M).split(""), (M) => M.join("")), { t: d } = lt(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), y = O(-1), m = O(), h = O([]), b = _(() => h.value[y.value]);
  let k = false;
  Ot(() => e.autofocus, () => {
    const M = jl();
    M.run(() => {
      const { intersectionRef: D, isIntersecting: E } = vi();
      mt(() => {
        D.value = h.value[0];
      }), se(E, (A) => {
        var _a3;
        A && ((_a3 = D.value) == null ? void 0 : _a3.focus(), M.stop());
      });
    });
  });
  function I() {
    if (P(b.value.value)) {
      b.value.value = "";
      return;
    }
    if (k) return;
    const M = c.value.slice(), D = b.value.value;
    M[y.value] = D;
    let E = null;
    y.value > c.value.length ? E = c.value.length + 1 : y.value + 1 !== f.value && (E = "next"), c.value = M, E && al(m.value, E);
  }
  function V() {
    k = false, I();
  }
  function S(M) {
    const D = c.value.slice(), E = y.value;
    let A = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(M.key) && (M.preventDefault(), M.key === "ArrowLeft" ? A = "prev" : M.key === "ArrowRight" ? A = "next" : ["Backspace", "Delete"].includes(M.key) && (D[y.value] = "", c.value = D, y.value > 0 && M.key === "Backspace" ? A = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = h.value[E]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      A != null && al(m.value, A);
    }));
  }
  function p(M, D) {
    var _a3;
    D.preventDefault(), D.stopPropagation();
    const E = ((_a3 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", A = E.length - 1 === -1 ? M : E.length - 1;
    P(E) || (c.value = E.split(""), y.value = A);
  }
  function C() {
    c.value = [];
  }
  function w(M, D) {
    s(), y.value = D;
  }
  function T() {
    u(), y.value = -1;
  }
  function P(M) {
    return e.type === "number" && /[^0-9]/g.test(M);
  }
  return yt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), se(c, (M) => {
    M.length === f.value && a("finish", M.join(""));
  }, { deep: true }), se(y, (M) => {
    M < 0 || Ee(() => {
      var _a3;
      (_a3 = h.value[M]) == null ? void 0 : _a3.select();
    });
  }), ae(() => {
    var _a3;
    const [M, D] = Zn(n);
    return x("div", q({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, M), [x("div", { ref: m, class: "v-otp-input__content", style: me([i.value]) }, [v.value.map((E, A) => x(be, null, [e.divider && A !== 0 && x("span", { class: "v-otp-input__divider" }, [e.divider]), g(Ha, { focused: r.value && e.focusAll || y.value === A, key: A }, { ...l, loader: void 0, default: () => x("input", { ref: (R) => h.value[A] = R, "aria-label": d(e.label, A + 1), autofocus: A === 0 && e.autofocus, autocomplete: "one-time-code", class: ne(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: A === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[A], onInput: I, onFocus: (R) => w(R, A), onBlur: T, onKeydown: S, onCompositionstart: () => k = true, onCompositionend: V, onPaste: (R) => p(A, R) }, null) })])), x("input", q({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), g(Kn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = l.loader) == null ? void 0 : _a4.call(l)) ?? g(La, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = l.default) == null ? void 0 : _a3.call(l)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = h.value) == null ? void 0 : _a3.some((M) => M.blur());
  }, focus: () => {
    var _a3;
    (_a3 = h.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function rD(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const sD = j({ scale: { type: [Number, String], default: 0.5 }, ...xe() }, "VParallax"), uD = te()({ name: "VParallax", props: sD(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = vi(), { resizeRef: o, contentRect: i } = Vn(), { height: r } = xn(), s = O();
  mt(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  se(l, (v) => {
    v ? (u = Mr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Ut(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), se(r, f), se(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = _(() => 1 - tt(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || Gn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const y = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, h = a.value.getBoundingClientRect().top + m, b = i.value.height, k = h + (b - y) / 2, I = rD((m - k) * c.value), V = Math.max(1, (c.value * (y - b) + b) / b);
      v.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return ae(() => g(ma, { class: ne(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: me(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), cD = j({ ...Hr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), dD = te()({ name: "VRadio", props: cD(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = Oa.filterProps(e);
    return g(Oa, q(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), fD = j({ height: { type: [Number, String], default: "auto" }, ...Ne(wa(), ["direction"]), ...Ne(Hc(), ["multiple"]), trueIcon: { type: Ie, default: "$radioOn" }, falseIcon: { type: Ie, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), vD = te()({ name: "VRadioGroup", inheritAttrs: false, props: fD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ft(), o = _(() => e.id || `radio-group-${l}`), i = Ce(e, "modelValue"), r = O();
  return ae(() => {
    const [s, u] = Zn(n), c = jt.filterProps(e), d = Oa.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return g(jt, q({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: y, messagesId: m, isDisabled: h, isReadonly: b } = v;
      return x(be, null, [f && g(so, { id: y.value }, { default: () => [f] }), g(Hh, q(d, { id: y.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: h.value, readonly: b.value, "aria-labelledby": f ? y.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (k) => i.value = k }), a)]);
    } });
  }), Mt({}, r);
} }), mD = j({ ...pi(), ...wa(), ...sb(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), gD = te()({ name: "VRangeSlider", inheritAttrs: false, props: mD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = O(), i = O(), r = O(), { rtlClasses: s } = Tt();
  function u(D) {
    if (!o.value || !i.value) return;
    const E = Iu(D, o.value.$el, e.direction), A = Iu(D, i.value.$el, e.direction), R = Math.abs(E), G = Math.abs(A);
    return R < G || R === G && E < 0 ? o.value.$el : i.value.$el;
  }
  const c = ub(e), d = Ce(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((E) => c.roundValue(E)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: y, min: m, mousePressed: h, onSliderMousedown: b, onSliderTouchstart: k, position: I, trackContainerRef: V, disabled: S, readonly: p } = cb({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (S.value || p.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (D) => {
    var _a3, _b2;
    let { value: E } = D;
    if (S.value || p.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const A = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [E, d.value[1]] : [d.value[0], E];
      !e.strict && A[0] < A[1] && (d.value = A);
    }
    a("end", d.value);
  }, onSliderMove: (D) => {
    var _a3, _b2, _c2, _d2, _e;
    let { value: E } = D;
    const [A, R] = d.value;
    if (S.value || p.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && A === R && A !== m.value && (f.value = E > A ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(E, R), R] : d.value = [A, Math.max(A, E)];
  }, getActiveThumb: u }), { isFocused: C, focus: w, blur: T } = ka(e), P = _(() => I(d.value[0])), M = _(() => I(d.value[1]));
  return ae(() => {
    const D = jt.filterProps(e), [E, A] = Zn(l), R = !!(e.label || n.label || n.prepend);
    return g(jt, q({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": h.value, "v-slider--disabled": S.value }, s.value, e.class], style: e.style, ref: r }, D, E, { focused: C.value }), { ...n, prepend: R ? (G) => {
      var _a3, _b2;
      return x(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, G)) ?? (e.label ? g(so, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, G)]);
    } : void 0, default: (G) => {
      var _a3, _b2;
      let { id: N, messagesId: Y } = G;
      return x("div", { class: "v-slider__container", onMousedown: p.value ? void 0 : b, onTouchstartPassive: p.value ? void 0 : k }, [x("input", { id: `${N.value}_start`, name: e.name || N.value, disabled: S.value, readonly: p.value, tabindex: "-1", value: d.value[0] }, null), x("input", { id: `${N.value}_stop`, name: e.name || N.value, disabled: S.value, readonly: p.value, tabindex: "-1", value: d.value[1] }, null), g(db, { ref: V, start: P.value, stop: M.value }, { "tick-label": n["tick-label"] }), g(Pu, q({ ref: o, "aria-describedby": Y.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (H) => d.value = [H, d.value[1]], onFocus: (H) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, y.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && H.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] }), g(Pu, q({ ref: i, "aria-describedby": Y.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (H) => d.value = [d.value[0], H], onFocus: (H) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, y.value !== m.value && d.value[0] === d.value[1] && d.value[0] === y.value && H.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: d.value[0], max: y.value, position: M.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Mt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), hD = j({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ie, default: "$ratingEmpty" }, fullIcon: { type: Ie, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...xe(), ...bt(), ...ea(), ...$e(), ...Ke() }, "VRating"), yD = te()({ name: "VRating", props: hD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = lt(), { themeClasses: l } = Je(e), o = O(), i = Ce(e, "modelValue"), r = _(() => tt(parseFloat(i.value), 0, Number(e.length))), s = _(() => Wn(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = re(-1), d = _(() => u.value.map((V) => {
    const S = e.hover && c.value > -1, p = r.value >= V, C = c.value >= V, T = (S ? C : p) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, M = p || C ? P : e.color;
    return { isFilled: p, isHovered: C, icon: T, color: M };
  })), f = _(() => [0, ...u.value].map((V) => {
    function S() {
      c.value = V;
    }
    function p() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === V && e.clearable ? 0 : V);
    }
    return { onMouseenter: e.hover ? S : void 0, onMouseleave: e.hover ? p : void 0, onClick: C };
  })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function y() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(V) {
    if (e.disabled || e.readonly || V.ctrlKey || V.altKey) return;
    const S = e.halfIncrements ? 0.5 : 1;
    if (V.key === "ArrowRight") {
      const p = Math.min(Number(e.length), Number(i.value ?? 0) + S);
      i.value = p, Ee(() => y());
    }
    if (V.key === "ArrowLeft") {
      const p = Math.max(0, Number(i.value ?? 0) - S);
      i.value = p, Ee(() => y());
    }
  }
  const h = Ft(), b = _(() => e.name ?? `v-rating-${h}`);
  function k(V) {
    var _a3, _b2;
    let { value: S, index: p, showStar: C = true } = V;
    const { onMouseenter: w, onMouseleave: T, onClick: P } = f.value[p + 1], M = `${b.value}-${String(S).replace(".", "-")}`, D = p === v.value, E = { color: (_a3 = d.value[p]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[p]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return x(be, null, [x("label", { for: M, class: ne({ "v-rating__item--half": e.halfIncrements && S % 1 > 0, "v-rating__item--full": e.halfIncrements && S % 1 === 0 }), onMouseenter: w, onMouseleave: T, onClick: P }, [x("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, S, e.length)]), C ? n.item ? n.item({ ...d.value[p], props: E, value: S, index: p, rating: r.value }) : g(Ue, q({ "aria-label": a(e.itemAriaLabel, S, e.length) }, E), null) : void 0]), x("input", { class: "v-rating__hidden", name: b.value, id: M, type: "radio", value: S, checked: r.value === S, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? x("span", null, [V.label]) : x("span", null, [Fe("\xA0")]);
  }
  return ae(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return g(e.tag, { class: ne(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: me(e.style), ref: o }, { default: () => [g(k, { value: 0, index: -1, showStar: false }, null), s.value.map((S, p) => {
      var _a4, _b2;
      return x("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: S, index: p, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[p] }) : void 0, x("div", { class: "v-rating__item" }, [e.halfIncrements ? x(be, null, [g(k, { value: S - 0.5, index: p * 2 }, null), g(k, { value: S, index: p * 2 + 1 }, null)]) : g(k, { value: S, index: p }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: S, index: p, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[p] }) : void 0]);
    })] });
  }), {};
} }), bD = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function pD(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return x("div", { class: ne(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Gv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => os(t));
}
function os(e) {
  let t = [];
  if (!e) return t;
  const n = bD[e];
  if (e !== n) {
    if (e.includes(",")) return Yv(e);
    if (e.includes("@")) return Gv(e);
    n.includes(",") ? t = Yv(n) : n.includes("@") ? t = Gv(n) : n && t.push(os(n));
  }
  return [pD(e, t)];
}
function Yv(e) {
  return e.replace(/\s/g, "").split(",").map(os);
}
const SD = j({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ..._t(), ...It(), ...Ke() }, "VSkeletonLoader"), xD = te()({ name: "VSkeletonLoader", inheritAttrs: false, props: SD(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.color), { dimensionStyles: i } = Vt(e), { elevationClasses: r } = Dt(e), { themeClasses: s } = Je(e), { t: u } = lt(), c = _(() => os(ct(e.type).join(",")));
  return ae(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? x("div", q({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : x(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), kD = te()({ name: "VSlideGroupItem", props: Cl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Fa(e, zc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function wD(e) {
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
  return St(a), { clear: a, time: t, start: o, reset: l };
}
const sp = j({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...Qn({ location: "bottom" }), ...io(), ...dt(), ...wn(), ...Ke(), ...Ne(Si({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Hu = te()({ name: "VSnackbar", props: sp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { positionClasses: l } = ro(e), { scopeId: o } = _l(), { themeClasses: i } = Je(e), { colorClasses: r, colorStyles: s, variantClasses: u } = xa(e), { roundedClasses: c } = gt(e), d = wD(() => Number(e.timeout)), f = O(), v = O(), y = re(false), m = re(0), h = O(), b = Ge(Yo, void 0);
  Ot(() => !!b, () => {
    const M = bh();
    mt(() => {
      h.value = M.mainStyles.value;
    });
  }), se(a, I), se(() => e.timeout, I), Pt(() => {
    a.value && I();
  });
  let k = -1;
  function I() {
    d.reset(), window.clearTimeout(k);
    const M = Number(e.timeout);
    if (!a.value || M === -1) return;
    const D = Sc(v.value);
    d.start(D), k = window.setTimeout(() => {
      a.value = false;
    }, M);
  }
  function V() {
    d.reset(), window.clearTimeout(k);
  }
  function S() {
    y.value = true, V();
  }
  function p() {
    y.value = false, I();
  }
  function C(M) {
    m.value = M.touches[0].clientY;
  }
  function w(M) {
    Math.abs(m.value - M.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function T() {
    y.value && p();
  }
  const P = _(() => e.location.split(" ").reduce((M, D) => (M[`v-snackbar--${D}`] = true, M), {}));
  return ae(() => {
    const M = Kn.filterProps(e), D = !!(n.default || n.text || e.text);
    return g(Kn, q({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [h.value, e.style] }, M, { modelValue: a.value, "onUpdate:modelValue": (E) => a.value = E, contentProps: q({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: S, onPointerleave: p }, M.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: w, onAfterLeave: T }, o), { default: () => {
      var _a3, _b2;
      return [Sa(false, "v-snackbar"), e.timer && !y.value && x("div", { key: "timer", class: "v-snackbar__timer" }, [g(Lr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && x("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && g(Re, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [x("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Mt({}, f);
} }), CD = j({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Ne(sp(), ["modelValue"]) }, "VSnackbarQueue"), _D = te()({ name: "VSnackbarQueue", props: CD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = lt(), o = re(false), i = re(false), r = re();
  se(() => e.modelValue.length, (f, v) => {
    !i.value && f > v && u();
  }), se(o, (f) => {
    f && (i.value = true);
  });
  function s() {
    e.modelValue.length ? u() : (r.value = void 0, i.value = false);
  }
  function u() {
    const [f, ...v] = e.modelValue;
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Ee(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  ae(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...y } = Hu.filterProps(e);
    return x(be, null, [i.value && !!r.value && (a.default ? g(Re, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : g(Hu, q(y, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => x(be, null, [a.actions ? g(Re, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : g(Ue, q(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), up = j({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), cp = j({ autoLineWidth: Boolean, ...up() }, "VBarline"), Kv = te()({ name: "VBarline", props: cp(), setup(e, t) {
  let { slots: n } = t;
  const a = Ft(), l = _(() => e.id || `barline-${a}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((h) => kt(h, e.itemValue, h)));
  function d(h, b) {
    const { minX: k, maxX: I, minY: V, maxY: S } = b, p = h.length;
    let C = e.max != null ? Number(e.max) : Math.max(...h), w = e.min != null ? Number(e.min) : Math.min(...h);
    w > 0 && e.min == null && (w = 0), C < 0 && e.max == null && (C = 0);
    const T = I / (p === 1 ? 2 : p), P = (S - V) / (C - w || 1), M = S - Math.abs(w * P);
    return h.map((D, E) => {
      const A = Math.abs(P * D);
      return { x: k + E * T, y: M - A + +(D < 0) * A, height: A, value: D };
    });
  }
  const f = _(() => {
    const h = [], b = d(c.value, u.value), k = b.length;
    for (let I = 0; h.length < k; I++) {
      const V = b[I];
      let S = e.labels[I];
      S || (S = typeof V == "object" ? V.value : V), h.push({ x: V.x, value: String(S) });
    }
    return h;
  }), v = _(() => d(c.value, u.value)), y = _(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  ae(() => {
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return x("svg", { display: "block" }, [x("defs", null, [x("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [h.map((b, k) => x("stop", { offset: k / Math.max(h.length - 1, 1), "stop-color": b || "currentColor" }, null))])]), x("clipPath", { id: `${l.value}-clip` }, [v.value.map((b) => x("rect", { x: b.x + y.value, y: b.y, width: r.value, height: b.height, rx: m.value, ry: m.value }, [e.autoDraw && !Gn() && x(be, null, [x("animate", { attributeName: "y", from: b.y + b.height, to: b.y, dur: `${o.value}ms`, fill: "freeze" }, null), x("animate", { attributeName: "height", from: "0", to: b.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && x("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((b, k) => {
      var _a3;
      return x("text", { x: b.x + y.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: k, value: b.value })) ?? b.value]);
    })]), x("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [x("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function VD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && ID(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(Xv(u, i), Xv(s, i)), v = d / 2 < t ? d / 2 : t, y = qv(u, i, v), m = qv(s, i, v);
    return `L${y.x} ${y.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Ri(e) {
  return parseInt(e, 10);
}
function ID(e, t, n) {
  return Ri(e.x + n.x) === Ri(2 * t.x) && Ri(e.y + n.y) === Ri(2 * t.y);
}
function Xv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function qv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const dp = j({ fill: Boolean, ...up() }, "VTrendline"), Zv = te()({ name: "VTrendline", props: dp(), setup(e, t) {
  let { slots: n } = t;
  const a = Ft(), l = _(() => e.id || `trendline-${a}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = O(0), r = O(null);
  function s(h, b) {
    const { minX: k, maxX: I, minY: V, maxY: S } = b;
    h.length === 1 && (h = [h[0], h[0]]);
    const p = h.length, C = e.max != null ? Number(e.max) : Math.max(...h), w = e.min != null ? Number(e.min) : Math.min(...h), T = (I - k) / (p - 1), P = (S - V) / (C - w || 1);
    return h.map((M, D) => ({ x: k + D * T, y: S - (M - w) * P, value: M }));
  }
  const u = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const h = Number(e.padding);
    return { minX: h, maxX: d.value - h, minY: h, maxY: parseInt(e.height, 10) - h };
  }), v = _(() => e.modelValue.map((h) => kt(h, e.itemValue, h))), y = _(() => {
    const h = [], b = s(v.value, f.value), k = b.length;
    for (let I = 0; h.length < k; I++) {
      const V = b[I];
      let S = e.labels[I];
      S || (S = typeof V == "object" ? V.value : V), h.push({ x: V.x, value: String(S) });
    }
    return h;
  });
  se(() => e.modelValue, async () => {
    if (await Ee(), !e.autoDraw || !r.value || Gn()) return;
    const h = r.value, b = h.getTotalLength();
    e.fill ? (h.style.transformOrigin = "bottom center", h.style.transition = "none", h.style.transform = "scaleY(0)", h.getBoundingClientRect(), h.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, h.style.transform = "scaleY(1)") : (h.style.strokeDasharray = `${b}`, h.style.strokeDashoffset = `${b}`, h.getBoundingClientRect(), h.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, h.style.strokeDashoffset = "0"), i.value = b;
  }, { immediate: true });
  function m(h) {
    const b = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return VD(s(v.value, f.value), b, h, parseInt(e.height, 10));
  }
  ae(() => {
    var _a3;
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return x("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [x("defs", null, [x("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [h.map((b, k) => x("stop", { offset: k / Math.max(h.length - 1, 1), "stop-color": b || "currentColor" }, null))])]), u.value && x("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [y.value.map((b, k) => {
      var _a4;
      return x("text", { x: b.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: k, value: b.value })) ?? b.value]);
    })]), x("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && x("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), PD = j({ type: { type: String, default: "trend" }, ...cp(), ...dp() }, "VSparkline"), TD = te()({ name: "VSparkline", props: PD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Rt(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  ae(() => {
    const r = e.type === "trend" ? Zv : Kv, s = e.type === "trend" ? Zv.filterProps(e) : Kv.filterProps(e);
    return g(r, q({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), AD = j({ ...xe(), ...ky({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), DD = te()({ name: "VSpeedDial", props: AD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = O(), o = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return ae(() => {
    const r = to.filterProps(e);
    return g(to, q(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => g(Re, { defaults: { VBtn: { size: "small" } } }, { default: () => [g(Qt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), Pd = Symbol.for("vuetify:v-stepper"), fp = j({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), vp = te()({ name: "VStepperActions", props: fp(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = lt();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return ae(() => {
    const r = { onClick: o }, s = { onClick: i };
    return x("div", { class: "v-stepper-actions" }, [g(Re, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? g(Ue, r, null)];
    } }), g(Re, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? g(Ue, s, null)];
    } })]);
  }), {};
} }), mp = ba("v-stepper-header"), MD = j({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ie, default: "$complete" }, editable: Boolean, editIcon: { type: Ie, default: "$edit" }, error: Boolean, errorIcon: { type: Ie, default: "$error" }, icon: Ie, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), ED = j({ ...MD(), ...Cl() }, "VStepperItem"), gp = te()({ name: "VStepperItem", directives: { vRipple: Nt }, props: ED(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Fa(e, Pd, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return ae(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), y = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return at(x("button", { class: ne(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && Sa(true, "v-stepper-item"), g(Sn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? g(qe, { icon: c.value }, null) : l.value)];
    } }), x("div", { class: "v-stepper-item__content" }, [v && x("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), y && x("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Nt, e.editable && e.ripple, null]]);
  }), {};
} }), BD = j({ ...Ne(Yr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), hp = te()({ name: "VStepperWindow", props: BD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(Pd, null), l = Ce(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ae(() => {
    const i = fl.filterProps(e);
    return g(fl, q({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), $D = j({ ...Kr() }, "VStepperWindowItem"), yp = te()({ name: "VStepperWindowItem", props: $D(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = vl.filterProps(e);
    return g(vl, q({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), RD = j({ altLabels: Boolean, bgColor: String, completeIcon: Ie, editIcon: Ie, editable: Boolean, errorIcon: Ie, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...pl() }, "Stepper"), FD = j({ ...RD(), ...wl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...ed(), ...on(fp(), ["prevText", "nextText"]) }, "VStepper"), LD = te()({ name: "VStepper", props: FD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Ua(e, Pd), { displayClasses: r, mobile: s } = xn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: y, nextText: m } = ao(e), h = _(() => e.items.map((I, V) => {
    const S = kt(I, e.itemTitle, I), p = kt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : kt(I, e.itemProps), w = { title: S, value: p, ...C };
    return { title: w.title, value: w.value, props: w, raw: I };
  })), b = _(() => a.value.findIndex((I) => i.value.includes(I.id))), k = _(() => e.disabled ? e.disabled : b.value === 0 ? "prev" : b.value === a.value.length - 1 ? "next" : false);
  return yt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: y, nextText: m }, VStepperActions: { color: f, disabled: k, prevText: y, nextText: m } }), ae(() => {
    const I = Na.filterProps(e), V = !!(n.header || e.items.length), S = e.items.length > 0, p = !e.hideActions && !!(S || n.actions);
    return g(Na, q(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && g(mp, { key: "stepper-header" }, { default: () => [h.value.map((C, w) => {
        let { raw: T, ...P } = C;
        return x(be, null, [!!w && g(bn, null, null), g(gp, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), S && g(hp, { key: "stepper-window" }, { default: () => [h.value.map((C) => g(yp, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), p && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? g(vp, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), OD = j({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...wa(), ...Hr() }, "VSwitch"), ND = te()({ name: "VSwitch", inheritAttrs: false, props: OD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "indeterminate"), o = Ce(e, "modelValue"), { loaderClasses: i } = mi(e), { isFocused: r, focus: s, blur: u } = ka(e), c = O(), d = O(), f = pc && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), y = Ft(), m = B(() => e.id || `switch-${y}`);
  function h() {
    l.value && (l.value = false);
  }
  function b(k) {
    var _a3, _b2;
    k.stopPropagation(), k.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return ae(() => {
    const [k, I] = Zn(n), V = jt.filterProps(e), S = Oa.filterProps(e);
    return g(jt, q({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, k, V, { modelValue: o.value, "onUpdate:modelValue": (p) => o.value = p, id: m.value, focused: r.value, style: e.style }), { ...a, default: (p) => {
      let { id: C, messagesId: w, isDisabled: T, isReadonly: P, isValid: M } = p;
      const D = { model: o, isValid: M };
      return g(Oa, q({ ref: c }, S, { modelValue: o.value, "onUpdate:modelValue": [(E) => o.value = E, h], id: C.value, "aria-describedby": w.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: T.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (E) => {
        let { backgroundColorClasses: A, backgroundColorStyles: R } = E;
        return x("div", { class: ne(["v-switch__track", f ? void 0 : A.value]), style: me(R.value), onClick: b }, [a["track-true"] && x("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && x("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (E) => {
        let { inputNode: A, icon: R, backgroundColorClasses: G, backgroundColorStyles: N } = E;
        return x(be, null, [A, x("div", { class: ne(["v-switch__thumb", { "v-switch__thumb--filled": R || e.loading }, e.inset || f ? void 0 : G.value]), style: me(e.inset ? void 0 : N.value) }, [a.thumb ? g(Re, { defaults: { VIcon: { icon: R, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: R })] }) : g(Rc, null, { default: () => [e.loading ? g(gi, { name: "v-switch", active: true, color: M.value === false ? void 0 : v.value }, { default: (Y) => a.loader ? a.loader(Y) : g(La, { active: Y.isActive, color: Y.color, indeterminate: true, size: "16", width: "2" }, null) }) : R && g(qe, { key: String(R), icon: R, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Mt({}, d);
} }), HD = j({ color: String, height: [Number, String], window: Boolean, ...xe(), ...It(), ...Sl(), ...dt(), ...$e(), ...Ke() }, "VSystemBar"), zD = te()({ name: "VSystemBar", props: HD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Qe(() => e.color), { elevationClasses: i } = Dt(e), { roundedClasses: r } = gt(e), { ssrBootStyles: s } = kl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = xl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: re("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: B(() => e.absolute) });
  return ae(() => g(e.tag, { class: ne(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: me([o.value, c.value, s.value, e.style]) }, n)), {};
} }), Td = Symbol.for("vuetify:v-tabs"), bp = j({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Ne(Nr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), pp = te()({ name: "VTab", props: bp(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Rt(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Qe(() => e.sliderColor), s = O(), u = O(), c = _(() => e.direction === "horizontal"), d = _(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(h, b) {
    return { opacity: [0, 1] };
  }
  function v(h, b) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function y(h, b) {
    const k = b.getBoundingClientRect(), I = h.getBoundingClientRect(), V = c.value ? "x" : "y", S = c.value ? "X" : "Y", p = c.value ? "right" : "bottom", C = c.value ? "width" : "height", w = k[V], T = I[V], P = w > T ? k[p] - I[p] : k[V] - I[V], M = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", E = (Math.abs(P) + (Math.sign(P) < 0 ? k[C] : I[C])) / Math.max(k[C], I[C]) || 0, A = k[C] / I[C] || 0, R = 1.5;
    return { transform: [`translate${S}(${P}px) scale${S}(${A})`, `translate${S}(${P / R}px) scale${S}(${(E - 1) / R + 1})`, "none"], transformOrigin: Array(3).fill(M) };
  }
  function m(h) {
    var _a3, _b2;
    let { value: b } = h;
    if (b) {
      const k = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!k || !I) return;
      const V = getComputedStyle(k).backgroundColor, S = { fade: f, grow: v, shift: y }[e.sliderTransition ?? "shift"] ?? y, p = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      oa(I, { backgroundColor: [V, V], ...S(I, k) }, { duration: p, easing: Wo });
    }
  }
  return ae(() => {
    const h = Ue.filterProps(e);
    return g(Ue, q({ symbol: Td, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, h, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return x(be, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && x("div", { ref: u, class: ne(["v-tab__slider", e.inset ? i.value : l.value]), style: me([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Mt({}, s);
} }), WD = j({ ...Ne(Yr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Sp = te()({ name: "VTabsWindow", props: WD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(Td, null), l = Ce(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ae(() => {
    const i = fl.filterProps(e);
    return g(fl, q({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), jD = j({ ...Kr() }, "VTabsWindowItem"), xp = te()({ name: "VTabsWindowItem", props: jD(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = vl.filterProps(e);
    return g(vl, q({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function UD(e) {
  return e ? e.map((t) => cl(t) ? t : { text: t, value: t }) : [];
}
const GD = j({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...on(bp(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...Wc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...bt(), ...$e() }, "VTabs"), YD = te()({ name: "VTabs", props: GD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = _(() => UD(e.items)), { densityClasses: i } = Ht(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Qe(() => e.bgColor), { scopeId: u } = _l();
  return yt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), ae(() => {
    const c = Jo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return x(be, null, [g(Jo, q(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ve(e.height), "--v-tabs-inset-padding": e.inset ? ve(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ve(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: Td }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? g(pp, q(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && g(Sp, q({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? g(xp, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), KD = j({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...wy(), ...Ne(wa(), ["direction"]), ...xi() }, "VTextarea"), XD = te()({ name: "VTextarea", directives: { vIntersect: $n }, inheritAttrs: false, props: KD(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue"), { isFocused: i, focus: r, blur: s } = ka(e), { onIntersect: u } = Cy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = O(), v = O(), y = re(""), m = O(), h = O(0), { platform: b } = xn(), k = td(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _a3;
    k.isSuppressing.value && k.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function S(A) {
    V(), a("click:control", A);
  }
  function p(A) {
    a("mousedown:control", A);
  }
  function C(A) {
    A.stopPropagation(), V(), Ee(() => {
      o.value = "", ci(e["onClick:clear"], A);
    });
  }
  function w(A) {
    var _a3;
    const R = A.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = R.value;
      return;
    }
    const G = R.value, N = R.selectionStart, Y = R.selectionEnd;
    o.value = G, Ee(() => {
      let H = 0;
      G.trimStart().length === R.value.length && (H = G.length - R.value.length), N != null && (R.selectionStart = N - H), Y != null && (R.selectionEnd = Y - H);
    });
  }
  const T = O(), P = O(Number(e.rows)), M = _(() => ["plain", "underlined"].includes(e.variant));
  mt(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Ee(() => {
      if (!m.value) return;
      if (b.value.firefox) {
        h.value = 12;
        return;
      }
      const { offsetWidth: A, clientWidth: R } = m.value;
      h.value = Math.max(0, A - R);
    }), e.autoGrow && Ee(() => {
      if (!T.value || !v.value) return;
      const A = getComputedStyle(T.value), R = getComputedStyle(v.value.$el), G = parseFloat(A.getPropertyValue("--v-field-padding-top")) + parseFloat(A.getPropertyValue("--v-input-padding-top")) + parseFloat(A.getPropertyValue("--v-field-padding-bottom")), N = T.value.scrollHeight, Y = parseFloat(A.lineHeight), H = Math.max(parseFloat(e.rows) * Y + G, parseFloat(R.getPropertyValue("--v-input-control-height"))), F = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Y + G || 1 / 0, Z = tt(N ?? 0, H, F);
      P.value = Math.floor((Z - G) / Y), y.value = ve(Z);
    });
  }
  Pt(D), se(o, D), se(() => e.rows, D), se(() => e.maxHeight, D), se(() => e.maxRows, D), se(() => e.density, D), se(P, (A) => {
    a("update:rows", A);
  });
  let E;
  return se(T, (A) => {
    A ? (E = new ResizeObserver(D), E.observe(T.value)) : E == null ? void 0 : E.disconnect();
  }), Ut(() => {
    E == null ? void 0 : E.disconnect();
  }), ae(() => {
    const A = !!(l.counter || e.counter || e.counterValue), R = !!(A || l.details), [G, N] = Zn(n), { modelValue: Y, ...H } = jt.filterProps(e), F = { ...Ha.filterProps(e), "onClick:clear": C };
    return g(jt, q({ ref: f, modelValue: o.value, "onUpdate:modelValue": (Z) => o.value = Z, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": M.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ve(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ve(h.value) }, e.style] }, G, H, { centerAffix: P.value === 1 && !M.value, focused: i.value }), { ...l, default: (Z) => {
      let { id: W, isDisabled: L, isDirty: U, isReadonly: ie, isValid: Se, hasDetails: K } = Z;
      return g(Ha, q({ ref: v, style: { "--v-textarea-control-height": y.value }, onClick: S, onMousedown: p, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, F, { id: W.value, active: I.value || U.value, labelId: `${W.value}-label`, centerAffix: P.value === 1 && !M.value, dirty: U.value || e.dirty, disabled: L.value, focused: i.value, details: K.value, error: Se.value === false }), { ...l, default: (fe) => {
        let { props: { class: Te, ..._e }, controlRef: ye } = fe;
        return x(be, null, [e.prefix && x("span", { class: "v-text-field__prefix" }, [e.prefix]), at(x("textarea", q({ ref: ($) => m.value = ye.value = $, class: Te, value: o.value, onInput: w, autofocus: e.autofocus, readonly: ie.value, disabled: L.value, placeholder: e.placeholder, rows: e.rows, name: k.fieldName.value, autocomplete: k.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${W.value}-label` }, _e, N), null), [[$n, { handler: u }, null, { once: true }]]), e.autoGrow && at(x("textarea", { class: ne([Te, "v-textarea__sizer"]), id: `${_e.id}-sizer`, "onUpdate:modelValue": ($) => o.value = $, ref: T, readonly: true, "aria-hidden": "true" }, null), [[Vr, o.value]]), e.suffix && x("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: R ? (Z) => {
      var _a3;
      return x(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Z), A && x(be, null, [x("span", null, null), g(zr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Mt({}, f, v, m);
} }), qD = j({ withBackground: Boolean, ...xe(), ...Ke(), ...$e() }, "VThemeProvider"), ZD = te()({ name: "VThemeProvider", props: qD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e);
  return () => {
    var _a3;
    return e.withBackground ? g(e.tag, { class: ne(["v-theme-provider", a.value, e.class]), style: me(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), JD = j({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ie, iconColor: String, lineColor: String, ...xe(), ...dt(), ...ea(), ...It() }, "VTimelineDivider"), QD = te()({ name: "VTimelineDivider", props: JD(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = oo(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Qe(() => e.dotColor), { roundedClasses: r } = gt(e, "v-timeline-divider__dot"), { elevationClasses: s } = Dt(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Qe(() => e.lineColor);
  return ae(() => x("div", { class: ne(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: me(e.style) }, [x("div", { class: ne(["v-timeline-divider__before", u.value]), style: me(c.value) }, null), !e.hideDot && x("div", { key: "dot", class: ne(["v-timeline-divider__dot", s.value, r.value, a.value]), style: me(l.value) }, [x("div", { class: ne(["v-timeline-divider__inner-dot", i.value, r.value]), style: me(o.value) }, [n.default ? g(Re, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : g(qe, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), x("div", { class: ne(["v-timeline-divider__after", u.value]), style: me(c.value) }, null)])), {};
} }), kp = j({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ie, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...xe(), ..._t(), ...It(), ...dt(), ...ea(), ...$e() }, "VTimelineItem"), eM = te()({ name: "VTimelineItem", props: kp(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = Vt(e), l = re(0), o = O();
  return se(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), ae(() => {
    var _a3, _b2;
    return x("div", { class: ne(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: me([{ "--v-timeline-dot-size": ve(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ve(e.lineInset)})` : ve(0) }, e.style]) }, [x("div", { class: "v-timeline-item__body", style: me(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), g(QD, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && x("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), tM = j({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...on(kp({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...xe(), ...bt(), ...$e(), ...Ke() }, "VTimeline"), nM = te()({ name: "VTimeline", props: tM(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Je(e), { densityClasses: l } = Ht(e), { rtlClasses: o } = Tt();
  yt({ VTimelineDivider: { lineColor: B(() => e.lineColor) }, VTimelineItem: { density: B(() => e.density), dotColor: B(() => e.dotColor), fillDot: B(() => e.fillDot), hideOpposite: B(() => e.hideOpposite), iconColor: B(() => e.iconColor), lineColor: B(() => e.lineColor), lineInset: B(() => e.lineInset), size: B(() => e.size) } });
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
  return ae(() => g(e.tag, { class: ne(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: me([{ "--v-timeline-line-thickness": ve(e.lineThickness) }, e.style]) }, n)), {};
} }), aM = j({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), zu = te()({ name: "VTimePickerClock", props: aM(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = O(null), l = O(null), o = O(void 0), i = O(false), r = O(null), s = O(null), u = Hg((F) => n("change", F), 750), { textColorClasses: c, textColorStyles: d } = Rt(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Qe(() => e.color), y = _(() => e.max - e.min + 1), m = _(() => e.double ? y.value / 2 : y.value), h = _(() => 360 / m.value), b = _(() => h.value * Math.PI / 180), k = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const F = [];
    for (let Z = e.min; Z <= e.max; Z = Z + e.step) F.push(Z);
    return F;
  });
  se(() => e.modelValue, (F) => {
    o.value = F;
  });
  function S(F) {
    o.value !== F && (o.value = F), n("input", F);
  }
  function p(F) {
    return !e.allowedValues || e.allowedValues(F);
  }
  function C(F) {
    if (!e.scrollable || e.disabled) return;
    F.preventDefault();
    const Z = Math.sign(-F.deltaY || 1);
    let W = k.value;
    do
      W = W + Z, W = (W - e.min + y.value) % y.value + e.min;
    while (!p(W) && W !== k.value);
    W !== e.displayedValue && S(W), u(W);
  }
  function w(F) {
    return e.double && F - e.min >= m.value;
  }
  function T(F) {
    return w(F) ? I.value : 1;
  }
  function P(F) {
    const Z = e.rotate * Math.PI / 180;
    return { x: Math.sin((F - e.min) * b.value + Z) * T(F), y: -Math.cos((F - e.min) * b.value + Z) * T(F) };
  }
  function M(F, Z) {
    const W = (Math.round(F / h.value) + (Z ? m.value : 0)) % y.value + e.min;
    return F < 360 - h.value / 2 ? W : Z ? e.max - m.value + 1 : e.min;
  }
  function D(F) {
    const { x: Z, y: W } = P(F);
    return { left: `${Math.round(50 + Z * 50)}%`, top: `${Math.round(50 + W * 50)}%` };
  }
  function E(F, Z) {
    const W = Z.x - F.x, L = Z.y - F.y;
    return Math.sqrt(W * W + L * L);
  }
  function A(F, Z) {
    const W = 2 * Math.atan2(Z.y - F.y - E(F, Z), Z.x - F.x);
    return Math.abs(W * 180 / Math.PI);
  }
  function R(F) {
    r.value === null && (r.value = F), s.value = F, S(F);
  }
  function G(F) {
    var _a3, _b2;
    if (F.preventDefault(), !i.value && F.type !== "click" || !a.value) return;
    const { width: Z, top: W, left: L } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: U } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ie, clientY: Se } = "touches" in F ? F.touches[0] : F, K = { x: Z / 2, y: -Z / 2 }, fe = { x: ie - L, y: W - Se }, Te = Math.round(A(K, fe) - e.rotate + 360) % 360, _e = e.double && E(K, fe) < (U + U * I.value) / 4, ye = Math.ceil(15 / h.value);
    let $;
    for (let z = 0; z < ye; z++) if ($ = M(Te + z * h.value, _e), p($) || ($ = M(Te - z * h.value, _e), p($))) return R($);
  }
  function N(F) {
    e.disabled || (F.preventDefault(), window.addEventListener("mousemove", G), window.addEventListener("touchmove", G), window.addEventListener("mouseup", Y), window.addEventListener("touchend", Y), r.value = null, s.value = null, i.value = true, G(F));
  }
  function Y(F) {
    F.stopPropagation(), H(), i.value = false, s.value !== null && p(s.value) && n("change", s.value);
  }
  function H() {
    window.removeEventListener("mousemove", G), window.removeEventListener("touchmove", G), window.removeEventListener("mouseup", Y), window.removeEventListener("touchend", Y);
  }
  St(H), ae(() => x("div", { class: ne([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: N, onTouchstart: N, onWheel: C, ref: a }, [x("div", { class: "v-time-picker-clock__inner", ref: l }, [x("div", { class: ne([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": w(e.modelValue) }, c.value]), style: me([{ transform: `rotate(${e.rotate + h.value * (k.value - e.min)}deg) scaleY(${T(k.value)})` }, d.value]) }, null), V.value.map((F) => {
    const Z = F === k.value;
    return x("div", { class: ne([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": Z, "v-time-picker-clock__item--disabled": e.disabled || !p(F) }, Z && f.value]), style: me([D(F), Z && v.value]) }, [x("span", null, [e.format(F)])]);
  })])]));
} }), lM = j({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), Ns = te()({ name: "VTimePickerField", props: lM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Rt(() => e.color), o = O(), i = re(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return ae(() => g(Xn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ne(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: me(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Mt({}, o);
} });
function dn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function wp(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Eo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function bo(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function oM(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function iM(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Cp = j({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function _p(e) {
  const t = _(() => {
    const o = e.min ? Number(e.min.split(":")[0]) : 0, i = e.max ? Number(e.max.split(":")[0]) : 23;
    return (r) => r < o || r > i ? false : Array.isArray(e.allowedHours) ? e.allowedHours.includes(r) : typeof e.allowedHours == "function" ? e.allowedHours(r) : true;
  }), n = _(() => {
    const [o, i] = e.min ? e.min.split(":").map(Number) : [0, 0], [r, s] = e.max ? e.max.split(":").map(Number) : [23, 59], u = o * 60 + i, c = r * 60 + s;
    return (d, f) => {
      if (d !== null) {
        const v = 60 * d + f;
        if (v < u || v > c) return false;
      }
      return Array.isArray(e.allowedMinutes) ? e.allowedMinutes.includes(f) : typeof e.allowedMinutes == "function" ? e.allowedMinutes(f) : true;
    };
  }), a = _(() => {
    const [o, i, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, u, c] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = o * 3600 + i * 60 + (r || 0), f = s * 3600 + u * 60 + (c || 0);
    return (v, y, m) => {
      if (v !== null && y !== null) {
        const h = 3600 * v + 60 * y + m;
        if (h < d || h > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => oM(v, r).value : (v) => iM(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const rM = j({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Cp() }, "VTimePickerControls"), Wu = te()({ name: "VTimePickerControls", props: rM(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = lt(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = _p(e), s = _(() => e.hour !== null ? e.ampm ? Eo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (E) => {
    if (E == null || isNaN(Number(E))) return null;
    const A = Number(E);
    return e.ampm ? dn(wp(A)) : dn(A);
  }, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const A = typeof E == "string" ? bo(E) : Number(E);
    return A === null ? null : e.ampm ? Eo(A, e.period ?? "am") : tt(A, 0, 23);
  } }, y = Ce(e, "hour", void 0, v.in, v.out), m = { in: (E) => E != null && !isNaN(Number(E)) ? dn(`${E}`) : null, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const A = typeof E == "string" ? bo(E) : Number(E);
    return A !== null ? tt(A, 0, 59) : null;
  } }, h = Ce(e, "minute", void 0, m.in, m.out), b = Ce(e, "second", void 0, m.in, m.out);
  function k(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = e.period === "am", R = e.ampm ? Eo(Number(y.value ?? 0), A ? "am" : "pm") : Number(y.value ?? 0), G = r("hour", R, E.key === "ArrowUp"), N = A && G >= 12 || !A && G < 12;
    e.ampm && N ? (n("update:period", e.period === "am" ? "pm" : "am"), Ee(() => y.value = dn(G))) : y.value = dn(G);
  }
  function I(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = Number(h.value ?? 0), R = r("minute", A, E.key === "ArrowUp", s.value);
    h.value = dn(R);
  }
  function V(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = Number(b.value ?? 0), R = r("second", A, E.key === "ArrowUp", s.value, u.value);
    b.value = dn(R);
  }
  function S(E, A, R) {
    return (G) => {
      if (!G.data) return;
      const N = G.target, { value: Y, selectionStart: H, selectionEnd: F } = N ?? {};
      if (bo(G.data) === null) {
        G.preventDefault();
        return;
      }
      const Z = Y ? Y.slice(0, H) + G.data + Y.slice(F) : G.data;
      if (Z.length > 2) {
        if (H === F && F === 0 && G.data.trim().startsWith("0")) {
          G.preventDefault(), N.value = Z.trim().substring(0, 2), R(N.value), G.data.trim().length === 1 && N.setSelectionRange(1, 1);
          return;
        }
        if (H === F && F === 1 && Y.startsWith("0")) {
          G.preventDefault(), N.value = Z.trim().substring(0, 2), R(N.value);
          return;
        }
        const L = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (bo(Z) > L) {
          G.preventDefault(), N.value = dn(String(bo(G.data)).substring(0, 2)), R(N.value);
          return;
        }
      }
      const W = E(Z);
      A(W) && G.preventDefault();
    };
  }
  function p(E) {
    n("update:period", E);
    const A = r("hour", E === "am" ? 23 : 11, true);
    Ee(() => y.value = dn(A));
  }
  const C = O(), w = O(), T = O();
  se(() => e.viewMode, (E, A) => {
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
  const P = S(v.out, (E) => v.in(E) === y.value, (E) => y.value = E), M = S(m.out, (E) => m.in(E) === h.value, (E) => h.value = E), D = S(m.out, (E) => m.in(E) === b.value, (E) => b.value = E);
  return ae(() => x("div", { class: "v-time-picker-controls" }, [x("div", { class: ne({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [g(Ns, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (E) => y.value = E, onKeydown: k, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), x("span", { class: "v-time-picker-controls__time__separator" }, [Fe(":")]), g(Ns, { ref: w, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (E) => h.value = E, onKeydown: I, onBeforeinput: M, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && x("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Fe(":")]), e.useSeconds && x(be, null, [g(Ns, { key: "secondsVal", ref: T, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (E) => b.value = E, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && x("div", { class: "v-time-picker-controls__ampm" }, [g(Ue, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? p("am") : null }, null), g(Ue, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? p("pm") : null }, null)])])])), {};
} }), sM = j({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Cp(), ...Ne(Xr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...bt() }, "VTimePicker"), uM = te()({ name: "VTimePicker", props: sM(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = lt(), { densityClasses: o } = Ht(e), i = O(null), r = O(null), s = O(null), u = O(null), c = O(null), d = O(null), f = Ce(e, "period", "am"), v = Ce(e, "viewMode", "hour"), y = O(null), m = O(null), h = _(() => e.format === "ampm"), { isAllowedHour: b, isAllowedMinute: k, isAllowedSecond: I } = _p(e), V = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function S() {
    const P = p();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  se(i, S), se(r, S), se(s, S), se(() => e.modelValue, (P) => C(P)), se(() => e.useSeconds, (P, M) => {
    M && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), Pt(() => {
    C(e.modelValue);
  });
  function p() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${dn(i.value)}:${dn(r.value)}` + (e.useSeconds ? `:${dn(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") i.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) i.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [M, , D, , E, A] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = A ? Eo(parseInt(M, 10), A) : parseInt(M, 10), r.value = parseInt(D, 10), s.value = parseInt(E || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function w(P) {
    v.value === "hour" ? i.value = h.value ? Eo(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
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
    const M = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || p() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), M && S());
  }
  ae(() => {
    const P = Ne(no.filterProps(e), ["hideHeader"]), M = Wu.filterProps(e), D = zu.filterProps(Ne(e, ["format", "modelValue", "min", "max"])), E = v.value === "hour" ? b.value : v.value === "minute" ? (A) => k.value(i.value, A) : (A) => I.value(i.value, r.value, A);
    return g(no, q(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? x("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => g(Wu, q(M, { ampm: h.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (A) => i.value = A, "onUpdate:minute": (A) => r.value = A, "onUpdate:second": (A) => s.value = A, "onUpdate:period": (A) => f.value = A, "onUpdate:viewMode": (A) => v.value = A, ref: y }), null), default: () => g(zu, q(D, { allowedValues: E, double: v.value === "hour" && !h.value, format: v.value === "hour" ? h.value ? wp : (A) => A : (A) => dn(A, 2), max: v.value === "hour" ? h.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && h.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: T, onInput: w, ref: m }), null), actions: a.actions });
  });
} }), cM = j({ ...xe(), ...wn({ variant: "text" }) }, "VToolbarItems"), dM = te()({ name: "VToolbarItems", props: cM(), setup(e, t) {
  let { slots: n } = t;
  return yt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), ae(() => {
    var _a3;
    return x("div", { class: ne(["v-toolbar-items", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), fM = j({ id: String, interactive: Boolean, text: String, ...Ne(Si({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Vp = te()({ name: "VTooltip", props: fM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = _l(), o = Ft(), i = B(() => e.id || `v-tooltip-${o}`), r = O(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => q({ "aria-describedby": i.value }, e.activatorProps));
  return ae(() => {
    const f = Kn.filterProps(e);
    return g(Kn, q({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, y = new Array(v), m = 0; m < v; m++) y[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...y)) ?? e.text;
    } });
  }), Mt({}, r);
} }), vM = j({ ...Ne(ay({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), ju = te()({ name: "VTreeviewGroup", props: vM(), setup(e, t) {
  let { slots: n } = t;
  const a = O(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return ae(() => {
    const i = Qo.filterProps(e);
    return g(Qo, q(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => x(be, null, [g(Re, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), Ip = Symbol.for("vuetify:v-treeview"), Pp = j({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ie, ...iy({ slim: true }) }, "VTreeviewItem"), Uu = te()({ name: "VTreeviewItem", props: Pp(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ge(Ip, { visibleIds: O() }).visibleIds, o = O(), i = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = _(() => {
    var _a3;
    return l.value && !l.value.has(Me((_a3 = o.value) == null ? void 0 : _a3.id));
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
    const f = In.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return g(In, q({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (y) => {
      var _a4;
      return x(be, null, [e.indentLines && e.indentLines.length > 0 ? x("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => x("div", { class: ne(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && g(Kc, { start: true }, { default: () => [e.toggleIcon ? x(be, null, [n.toggle ? g(Re, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...y, loading: e.loading, props: { onClick: d } })] }) : g(Ue, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => g(La, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : x("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? g(Re, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, y)];
      } }) : x(be, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, y), e.prependAvatar && g(Sn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(qe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Mt({}, o);
} }), Tp = j({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, falseIcon: Ie, trueIcon: Ie, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...on(Pp(), ["hideActions"]), ...bt() }, "VTreeviewChildren"), vr = te()({ name: "VTreeviewChildren", props: Tp(), setup(e, t) {
  let { slots: n } = t;
  const a = Bt(/* @__PURE__ */ new Set()), l = O([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, v = a.has(s.value), y = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, h = c.length - 1 === u, b = { index: u, depth: m, isFirst: u === 0, isLast: h, path: [...e.path, u], hideAction: e.hideActions }, k = o1({ depth: m, isLast: h, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...b, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return x(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && g(Kc, { start: true }, { default: () => [g(Rn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (w) => r(C.select, w), onClick: (w) => w.stopPropagation(), onKeydown: (w) => {
          ["Enter", "Space"].includes(w.key) && (w.stopPropagation(), r(C.select, C.isSelected));
        } }, null)] }), (_a5 = n.prepend) == null ? void 0 : _a5.call(n, { ...C, ...b, item: s.raw, internalItem: s })]);
      }, append: n.append ? (C) => {
        var _a5;
        return (_a5 = n.append) == null ? void 0 : _a5.call(n, { ...C, ...b, item: s.raw, internalItem: s });
      } : void 0, title: n.title ? (C) => {
        var _a5;
        return (_a5 = n.title) == null ? void 0 : _a5.call(n, { ...C, item: s.raw, internalItem: s });
      } : void 0, subtitle: n.subtitle ? (C) => {
        var _a5;
        return (_a5 = n.subtitle) == null ? void 0 : _a5.call(n, { ...C, item: s.raw, internalItem: s });
      } : void 0 }, V = ju.filterProps(f), S = vr.filterProps({ ...e, ...b }), p = { hideActions: e.hideActions, indentLines: k.footer };
      return d ? g(ju, q(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: w, isOpen: T } = C;
        const P = { ...f, ...w, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: k.node, ariaExpanded: T, onToggleExpand: [() => i(s), w.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), w.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return Di(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => g(Uu, q({ ref: (M) => l.value[u] = M }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), I));
      }, default: () => {
        var _a5;
        return x(be, null, [g(vr, q(S, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: k.children, isLastGroup: y, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: p, item: s.raw, internalItem: s, loading: v })]);
      } }) : Di(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? Di(n.divider, { props: s.raw }, () => g(bn, s.props, null)) : s.type === "subheader" ? Di(n.subheader, { props: s.raw }, () => g(co, s.props, null)) : g(Uu, q(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: k.leaf, value: e.returnObject ? Me(s.raw) : f.value }), I));
    }));
  };
} });
function Ap(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && Ap(n.children, t);
  return t;
}
const mM = j({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...Vl({ filterKeys: ["title"] }), ...Ne(Tp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Ne(fy({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), gM = te()({ name: "VTreeview", props: mM(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = lt(), { items: o } = dy(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = Ce(e, "activated"), c = Ce(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = O(), v = _(() => e.openAll ? I(o.value) : e.opened), y = _(() => Ap(o.value)), m = B(() => e.search), { filteredItems: h } = Il(e, y, m), b = _(() => {
    var _a3;
    if (!m.value) return null;
    const V = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return V ? new Set(h.value.flatMap((S) => {
      const p = e.returnObject ? S.raw : S.props.value;
      return [...V(p), ...k(p)].map(Me);
    })) : null;
  });
  function k(V) {
    var _a3, _b2;
    const S = [], p = (((_a3 = f.value) == null ? void 0 : _a3.children.get(V)) ?? []).slice();
    for (; p.length; ) {
      const C = p.shift();
      C && (S.push(C), p.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return S;
  }
  function I(V) {
    let S = [];
    for (const p of V) p.children && (S.push(e.returnObject ? Me(p.raw) : p.value), p.children && (S = S.concat(I(p.children))));
    return S;
  }
  return ft(Ip, { visibleIds: b }), yt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), ae(() => {
    const V = eo.filterProps(e), S = vr.filterProps(e), p = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return g(eo, q({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = b.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(In, { key: "no-data", title: l(e.noDataText) }, null)), g(vr, q(S, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: p }), n)];
    } });
  }), {};
} }), hM = te()({ name: "VValidation", props: Uh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Gh(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), yM = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: x_, VAlertTitle: Fh, VApp: CC, VAppBar: UC, VAppBarNavIcon: y_, VAppBarTitle: b_, VAutocomplete: WV, VAvatar: Sn, VBadge: Py, VBanner: YV, VBannerActions: Ty, VBannerText: Ay, VBottomNavigation: XV, VBottomSheet: ZV, VBreadcrumbs: tI, VBreadcrumbsDivider: My, VBreadcrumbsItem: Ey, VBtn: Ue, VBtnGroup: vu, VBtnToggle: ZC, VCalendar: QI, VCard: oP, VCardActions: eb, VCardItem: ab, VCardSubtitle: tb, VCardText: lb, VCardTitle: nb, VCarousel: mP, VCarouselItem: hP, VCheckbox: M_, VCheckboxBtn: Rn, VChip: ga, VChipGroup: F_, VClassIcon: Tc, VCode: yP, VCol: GT, VColorPicker: oT, VCombobox: rT, VComponentIcon: su, VConfirmEdit: uT, VContainer: zT, VCounter: zr, VDataIterator: kT, VDataTable: RT, VDataTableFooter: ti, VDataTableHeaders: ml, VDataTableRow: wd, VDataTableRows: gl, VDataTableServer: NT, VDataTableVirtual: LT, VDatePicker: lA, VDatePickerControls: Eu, VDatePickerHeader: Bu, VDatePickerMonth: $u, VDatePickerMonths: Ru, VDatePickerYears: Fu, VDefaultsProvider: Re, VDialog: xu, VDialogBottomTransition: PC, VDialogTopTransition: TC, VDialogTransition: Rr, VDivider: bn, VEmptyState: iA, VExpandBothTransition: FC, VExpandTransition: Fr, VExpandXTransition: Lc, VExpansionPanel: rA, VExpansionPanelText: Lu, VExpansionPanelTitle: Ou, VExpansionPanels: cA, VFab: fA, VFabTransition: IC, VFadeTransition: Ko, VField: Ha, VFieldLabel: xo, VFileInput: bA, VFooter: SA, VForm: kA, VHotkey: VA, VHover: PA, VIcon: qe, VImg: ma, VInfiniteScroll: AA, VInput: jt, VItem: EA, VItemGroup: MA, VKbd: Nu, VLabel: so, VLayout: $A, VLayoutItem: FA, VLazy: OA, VLigatureIcon: s1, VList: eo, VListGroup: Qo, VListImg: oV, VListItem: In, VListItemAction: Kc, VListItemMedia: sV, VListItemSubtitle: ly, VListItemTitle: oy, VListSubheader: co, VLocaleProvider: HA, VMain: WA, VMenu: to, VMessages: Wh, VNavigationDrawer: JA, VNoSsr: QA, VNumberInput: lD, VOtpInput: iD, VOverlay: Kn, VPagination: Au, VParallax: uD, VProgressCircular: La, VProgressLinear: Lr, VRadio: dD, VRadioGroup: vD, VRangeSlider: gD, VRating: yD, VResponsive: cu, VRow: QT, VScaleTransition: Rc, VScrollXReverseTransition: DC, VScrollXTransition: AC, VScrollYReverseTransition: EC, VScrollYTransition: MC, VSelect: rd, VSelectionControl: Oa, VSelectionControlGroup: Hh, VSheet: Na, VSkeletonLoader: xD, VSlideGroup: Jo, VSlideGroupItem: kD, VSlideXReverseTransition: $C, VSlideXTransition: BC, VSlideYReverseTransition: RC, VSlideYTransition: Fc, VSlider: Tu, VSnackbar: Hu, VSnackbarQueue: _D, VSpacer: Mu, VSparkline: TD, VSpeedDial: DD, VStepper: LD, VStepperActions: vp, VStepperHeader: mp, VStepperItem: gp, VStepperWindow: hp, VStepperWindowItem: yp, VSvgIcon: Pc, VSwitch: ND, VSystemBar: zD, VTab: pp, VTable: hl, VTabs: YD, VTabsWindow: Sp, VTabsWindowItem: xp, VTextField: Xn, VTextarea: XD, VThemeProvider: ZD, VTimePicker: uM, VTimePickerClock: zu, VTimePickerControls: Wu, VTimeline: nM, VTimelineItem: eM, VToolbar: fu, VToolbarItems: dM, VToolbarTitle: Ec, VTooltip: Vp, VTreeview: gM, VTreeviewGroup: ju, VTreeviewItem: Uu, VValidation: hM, VVirtualScroll: Wr, VWindow: fl, VWindowItem: vl }, Symbol.toStringTag, { value: "Module" }));
function bM(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && Dp(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function Dp(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const pM = { mounted: bM, unmounted: Dp };
function Mp(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function Ep(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function SM(e, t) {
  t.value !== t.oldValue && (Ep(e, t), Mp(e, t));
}
const xM = { mounted: Mp, unmounted: Ep, updated: SM };
function kM(e, t) {
  const n = typeof e == "string" ? Ae(e) : e, a = wM(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    Cg(null, l);
  } };
}
function wM(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = cl(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = CM(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ya(e, q(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), Cg(c, n);
  };
}
function CM(e, t) {
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
const _M = kM(Vp, (e) => {
  var _a3;
  return { activator: (cl(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), VM = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: Su, Intersect: $n, Mutate: pM, Resize: ei, Ripple: Nt, Scroll: xM, Tooltip: _M, Touch: fr }, Symbol.toStringTag, { value: "Module" })), IM = xh({ components: yM, directives: VM, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
ek(vw).use(IM).mount("#app");
