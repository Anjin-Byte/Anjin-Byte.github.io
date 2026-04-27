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
function Au(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const st = {}, $l = [], Nn = () => {
}, Iv = () => false, nr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Du = (e) => e.startsWith("onUpdate:"), Tt = Object.assign, Eu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rp = Object.prototype.hasOwnProperty, et = (e, t) => rp.call(e, t), Be = Array.isArray, Ll = (e) => Zo(e) === "[object Map]", Pv = (e) => Zo(e) === "[object Set]", dd = (e) => Zo(e) === "[object Date]", Re = (e) => typeof e == "function", yt = (e) => typeof e == "string", zn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Tv = (e) => (Qe(e) || Re(e)) && Re(e.then) && Re(e.catch), Av = Object.prototype.toString, Zo = (e) => Av.call(e), sp = (e) => Zo(e).slice(8, -1), Dv = (e) => Zo(e) === "[object Object]", ar = (e) => yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, go = Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), lr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, up = /-\w/g, tn = lr((e) => e.replace(up, (t) => t.slice(1).toUpperCase())), cp = /\B([A-Z])/g, vl = lr((e) => e.replace(cp, "-$1").toLowerCase()), Gn = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)), jr = lr((e) => e ? `on${Gn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Ii = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Ev = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Mu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, dp = (e) => {
  const t = yt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fd;
const or = () => fd || (fd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function me(e) {
  if (Be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = yt(a) ? hp(a) : me(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (yt(e) || Qe(e)) return e;
}
const fp = /;(?![^(]*\))/g, vp = /:([^]+)/, mp = /\/\*[^]*?\*\//g;
function hp(e) {
  const t = {};
  return e.replace(mp, "").split(fp).forEach((n) => {
    if (n) {
      const a = n.split(vp);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function te(e) {
  let t = "";
  if (yt(e)) t = e;
  else if (Be(e)) for (let n = 0; n < e.length; n++) {
    const a = te(e[n]);
    a && (t += a + " ");
  }
  else if (Qe(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function gp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !yt(t) && (e.class = te(t)), n && (e.style = me(n)), e;
}
const yp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bp = Au(yp);
function Mv(e) {
  return !!e || e === "";
}
function pp(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Bu(e[a], t[a]);
  return n;
}
function Bu(e, t) {
  if (e === t) return true;
  let n = dd(e), a = dd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = zn(e), a = zn(t), n || a) return e === t;
  if (n = Be(e), a = Be(t), n || a) return n && a ? pp(e, t) : false;
  if (n = Qe(e), a = Qe(t), n || a) {
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
const Bv = (e) => !!(e && e.__v_isRef === true), Le = (e) => yt(e) ? e : e == null ? "" : Be(e) || Qe(e) && (e.toString === Av || !Re(e.toString)) ? Bv(e) ? Le(e.value) : JSON.stringify(e, $v, 2) : String(e), $v = (e, t) => Bv(t) ? $v(e, t.value) : Ll(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Ur(a, o) + " =>"] = l, n), {}) } : Pv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ur(n)) } : zn(t) ? Ur(t) : Qe(t) && !Be(t) && !Dv(t) ? String(t) : t, Ur = (e, t = "") => {
  var n;
  return zn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wt;
class Lv {
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
  return new Lv(e);
}
function Fv() {
  return Wt;
}
function bt(e, t = false) {
  Wt && Wt.cleanups.push(e);
}
let vt;
const Yr = /* @__PURE__ */ new WeakSet();
class Ov {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Wt && Wt.active && Wt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yr.has(this) && (Yr.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nv(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, vd(this), Hv(this);
    const t = vt, n = _n;
    vt = this, _n = true;
    try {
      return this.fn();
    } finally {
      zv(this), vt = t, _n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Fu(t);
      this.deps = this.depsTail = void 0, vd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    xs(this) && this.run();
  }
  get dirty() {
    return xs(this);
  }
}
let Rv = 0, yo, bo;
function Nv(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function $u() {
  Rv++;
}
function Lu() {
  if (--Rv > 0) return;
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
function Hv(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zv(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), Fu(a), Sp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function xs(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Wv(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Wv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io) || (e.globalVersion = Io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xs(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = vt, a = _n;
  vt = e, _n = true;
  try {
    Hv(e);
    const l = e.fn(e._value);
    (t.version === 0 || Va(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    vt = n, _n = a, zv(e), e.flags &= -3;
  }
}
function Fu(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Fu(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Sp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _n = true;
const jv = [];
function ra() {
  jv.push(_n), _n = false;
}
function sa() {
  const e = jv.pop();
  _n = e === void 0 ? true : e;
}
function vd(e) {
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
class kp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ou {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!vt || !_n || vt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== vt) n = this.activeLink = new kp(vt, this), vt.deps ? (n.prevDep = vt.depsTail, vt.depsTail.nextDep = n, vt.depsTail = n) : vt.deps = vt.depsTail = n, Uv(n);
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
    $u();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Lu();
    }
  }
}
function Uv(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) Uv(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), Za = Symbol(""), Cs = Symbol(""), Po = Symbol("");
function jt(e, t, n) {
  if (_n && vt) {
    let a = Bi.get(e);
    a || Bi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Ou()), l.map = a, l.key = n), l.track();
  }
}
function la(e, t, n, a, l, o) {
  const i = Bi.get(e);
  if (!i) {
    Io++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if ($u(), t === "clear") i.forEach(r);
  else {
    const s = Be(e), u = s && ar(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !zn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(Po)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(Za)), Ll(e) && r(i.get(Cs)));
        break;
      case "delete":
        s || (r(i.get(Za)), Ll(e) && r(i.get(Cs)));
        break;
      case "set":
        Ll(e) && r(i.get(Za));
        break;
    }
  }
  Lu();
}
function wp(e, t) {
  const n = Bi.get(e);
  return n && n.get(t);
}
function Cl(e) {
  const t = Pe(e);
  return t === e ? t : (jt(t, "iterate", Po), fn(e) ? t : t.map(Pn));
}
function ir(e) {
  return jt(e = Pe(e), "iterate", Po), e;
}
function Ca(e, t) {
  return ua(e) ? Hl(Ia(e) ? Pn(t) : t) : Pn(t);
}
const xp = { __proto__: null, [Symbol.iterator]() {
  return Gr(this, Symbol.iterator, (e) => Ca(this, e));
}, concat(...e) {
  return Cl(this).concat(...e.map((t) => Be(t) ? Cl(t) : t));
}, entries() {
  return Gr(this, "entries", (e) => (e[1] = Ca(this, e[1]), e));
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
  return Kr(this, "includes", e);
}, indexOf(...e) {
  return Kr(this, "indexOf", e);
}, join(e) {
  return Cl(this).join(e);
}, lastIndexOf(...e) {
  return Kr(this, "lastIndexOf", e);
}, map(e, t) {
  return Qn(this, "map", e, t, void 0, arguments);
}, pop() {
  return oo(this, "pop");
}, push(...e) {
  return oo(this, "push", e);
}, reduce(e, ...t) {
  return md(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return md(this, "reduceRight", e, t);
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
  return Gr(this, "values", (e) => Ca(this, e));
} };
function Gr(e, t, n) {
  const a = ir(e), l = a[t]();
  return a !== e && !fn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const Cp = Array.prototype;
function Qn(e, t, n, a, l, o) {
  const i = ir(e), r = i !== e && !fn(e), s = i[t];
  if (s !== Cp[t]) {
    const d = s.apply(e, o);
    return r ? Pn(d) : d;
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
function md(e, t, n, a) {
  const l = ir(e);
  let o = n;
  return l !== e && (fn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Ca(e, r), s, e);
  }), l[t](o, ...a);
}
function Kr(e, t, n) {
  const a = Pe(e);
  jt(a, "iterate", Po);
  const l = a[t](...n);
  return (l === -1 || l === false) && Jo(n[0]) ? (n[0] = Pe(n[0]), a[t](...n)) : l;
}
function oo(e, t, n = []) {
  ra(), $u();
  const a = Pe(e)[t].apply(e, n);
  return Lu(), sa(), a;
}
const _p = Au("__proto__,__v_isRef,__isVue"), Yv = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zn));
function Vp(e) {
  zn(e) || (e = String(e));
  const t = Pe(this);
  return jt(t, "has", e), t.hasOwnProperty(e);
}
class Gv {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? Lp : Zv : o ? Xv : qv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Be(t);
    if (!l) {
      let s;
      if (i && (s = xp[n])) return s;
      if (n === "hasOwnProperty") return Vp;
    }
    const r = Reflect.get(t, n, gt(t) ? t : a);
    if ((zn(n) ? Yv.has(n) : _p(n)) || (l || jt(t, "get", n), o)) return r;
    if (gt(r)) {
      const s = i && ar(n) ? r : r.value;
      return l && Qe(s) ? al(s) : s;
    }
    return Qe(r) ? l ? al(r) : At(r) : r;
  }
}
class Kv extends Gv {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = Be(t) && ar(n);
    if (!this._isShallow) {
      const u = ua(o);
      if (!fn(a) && !ua(a) && (o = Pe(o), a = Pe(a)), !i && gt(o) && !gt(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : et(t, n), s = Reflect.set(t, n, a, gt(t) ? t : l);
    return t === Pe(l) && (r ? Va(a, o) && la(t, "set", n, a) : la(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = et(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && la(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!zn(n) || !Yv.has(n)) && jt(t, "has", n), a;
  }
  ownKeys(t) {
    return jt(t, "iterate", Be(t) ? "length" : Za), Reflect.ownKeys(t);
  }
}
class Ip extends Gv {
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
const Pp = new Kv(), Tp = new Ip(), Ap = new Kv(true);
const _s = (e) => e, gi = (e) => Reflect.getPrototypeOf(e);
function Dp(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Pe(l), i = Ll(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? _s : t ? Hl : Pn;
    return !t && jt(o, "iterate", s ? Cs : Za), Tt(Object.create(u), { next() {
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
    const o = this.__v_raw, i = Pe(o), r = Pe(l);
    e || (Va(l, r) && jt(i, "get", l), jt(i, "get", r));
    const { has: s } = gi(i), u = t ? _s : e ? Hl : Pn;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && jt(Pe(l), "iterate", Za), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Pe(o), r = Pe(l);
    return e || (Va(l, r) && jt(i, "has", l), jt(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Pe(r), u = t ? _s : e ? Hl : Pn;
    return !e && jt(s, "iterate", Za), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return Tt(n, e ? { add: yi("add"), set: yi("set"), delete: yi("delete"), clear: yi("clear") } : { add(l) {
    !t && !fn(l) && !ua(l) && (l = Pe(l));
    const o = Pe(this);
    return gi(o).has.call(o, l) || (o.add(l), la(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !fn(o) && !ua(o) && (o = Pe(o));
    const i = Pe(this), { has: r, get: s } = gi(i);
    let u = r.call(i, l);
    u || (l = Pe(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Va(o, c) && la(i, "set", l, o) : la(i, "add", l, o), this;
  }, delete(l) {
    const o = Pe(this), { has: i, get: r } = gi(o);
    let s = i.call(o, l);
    s || (l = Pe(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && la(o, "delete", l, void 0), u;
  }, clear() {
    const l = Pe(this), o = l.size !== 0, i = l.clear();
    return o && la(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = Dp(l, e, t);
  }), n;
}
function Ru(e, t) {
  const n = Ep(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(et(n, l) && l in a ? n : a, l, o);
}
const Mp = { get: Ru(false, false) }, Bp = { get: Ru(false, true) }, $p = { get: Ru(true, false) };
const qv = /* @__PURE__ */ new WeakMap(), Xv = /* @__PURE__ */ new WeakMap(), Zv = /* @__PURE__ */ new WeakMap(), Lp = /* @__PURE__ */ new WeakMap();
function Fp(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fp(sp(e));
}
function At(e) {
  return ua(e) ? e : Nu(e, false, Pp, Mp, qv);
}
function Rp(e) {
  return Nu(e, false, Ap, Bp, Xv);
}
function al(e) {
  return Nu(e, true, Tp, $p, Zv);
}
function Nu(e, t, n, a, l) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = Op(e);
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
function fn(e) {
  return !!(e && e.__v_isShallow);
}
function Jo(e) {
  return e ? !!e.__v_raw : false;
}
function Pe(e) {
  const t = e && e.__v_raw;
  return t ? Pe(t) : e;
}
function Jv(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && Ev(e, "__v_skip", true), e;
}
const Pn = (e) => Qe(e) ? At(e) : e, Hl = (e) => Qe(e) ? al(e) : e;
function gt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return Qv(e, false);
}
function re(e) {
  return Qv(e, true);
}
function Qv(e, t) {
  return gt(e) ? e : new Np(e, t);
}
class Np {
  constructor(t, n) {
    this.dep = new Ou(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Pe(t), this._value = n ? t : Pn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || fn(t) || ua(t);
    t = a ? t : Pe(t), Va(t, n) && (this._rawValue = t, this._value = a ? t : Pn(t), this.dep.trigger());
  }
}
function Ue(e) {
  return gt(e) ? e.value : e;
}
function tt(e) {
  return Re(e) ? e() : Ue(e);
}
const Hp = { get: (e, t, n) => t === "__v_raw" ? e : Ue(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return gt(l) && !gt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function em(e) {
  return Ia(e) ? e : new Proxy(e, Hp);
}
function Zl(e) {
  const t = Be(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = tm(e, n);
  return t;
}
class zp {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Pe(t);
    let l = true, o = t;
    if (!Be(t) || !ar(String(n))) do
      l = !Jo(o) || fn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ue(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && gt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (gt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return wp(this._raw, this._key);
  }
}
class Wp {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return gt(e) ? e : Re(e) ? new Wp(e) : Qe(e) && arguments.length > 1 ? tm(e, t, n) : K(e);
}
function tm(e, t, n) {
  return new zp(e, t, n);
}
class jp {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ou(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && vt !== this) return Nv(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Wv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Up(e, t, n = false) {
  let a, l;
  return Re(e) ? a = e : (a = e.get, l = e.set), new jp(a, l, n);
}
const bi = {}, $i = /* @__PURE__ */ new WeakMap();
let Ga;
function Yp(e, t = false, n = Ga) {
  if (n) {
    let a = $i.get(n);
    a || $i.set(n, a = []), a.push(e);
  }
}
function Gp(e, t, n = st) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (V) => l ? V : fn(V) || l === false || l === 0 ? oa(V, 1) : oa(V);
  let c, d, f, v, S = false, m = false;
  if (gt(e) ? (d = () => e.value, S = fn(e)) : Ia(e) ? (d = () => u(e), S = true) : Be(e) ? (m = true, S = e.some((V) => Ia(V) || fn(V)), d = () => e.map((V) => {
    if (gt(V)) return V.value;
    if (Ia(V)) return u(V);
    if (Re(V)) return s ? s(V, 2) : V();
  })) : Re(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      ra();
      try {
        f();
      } finally {
        sa();
      }
    }
    const V = Ga;
    Ga = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Ga = V;
    }
  } : d = Nn, t && l) {
    const V = d, x = l === true ? 1 / 0 : l;
    d = () => oa(V(), x);
  }
  const y = Fv(), h = () => {
    c.stop(), y && y.active && Eu(y.effects, c);
  };
  if (o && t) {
    const V = t;
    t = (...x) => {
      V(...x), h();
    };
  }
  let w = m ? new Array(e.length).fill(bi) : bi;
  const I = (V) => {
    if (!(!(c.flags & 1) || !c.dirty && !V)) if (t) {
      const x = c.run();
      if (l || S || (m ? x.some((g, C) => Va(g, w[C])) : Va(x, w))) {
        f && f();
        const g = Ga;
        Ga = c;
        try {
          const C = [x, w === bi ? void 0 : m && w[0] === bi ? [] : w, v];
          w = x, s ? s(t, 3, C) : t(...C);
        } finally {
          Ga = g;
        }
      }
    } else c.run();
  };
  return r && r(I), c = new Ov(d), c.scheduler = i ? () => i(I, false) : I, v = (V) => Yp(V, false, c), f = c.onStop = () => {
    const V = $i.get(c);
    if (V) {
      if (s) s(V, 4);
      else for (const x of V) x();
      $i.delete(c);
    }
  }, t ? a ? I(true) : w = c.run() : i ? i(I.bind(null, true), true) : c.run(), h.pause = c.pause.bind(c), h.resume = c.resume.bind(c), h.stop = h, h;
}
function oa(e, t = 1 / 0, n) {
  if (t <= 0 || !Qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, gt(e)) oa(e.value, t, n);
  else if (Be(e)) for (let a = 0; a < e.length; a++) oa(e[a], t, n);
  else if (Pv(e) || Ll(e)) e.forEach((a) => {
    oa(a, t, n);
  });
  else if (Dv(e)) {
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
    rr(l, t, n);
  }
}
function Tn(e, t, n, a) {
  if (Re(e)) {
    const l = Qo(e, t, n, a);
    return l && Tv(l) && l.catch((o) => {
      rr(o, t, n);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(Tn(e[o], t, n, a));
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
      ra(), Qo(o, null, 10, [e, s, u]), sa();
      return;
    }
  }
  Kp(e, n, l, a, i);
}
function Kp(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Zt = [];
let Ln = -1;
const Fl = [];
let _a = null, Tl = 0;
const nm = Promise.resolve();
let Li = null;
function Te(e) {
  const t = Li || nm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qp(e) {
  let t = Ln + 1, n = Zt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Zt[a], o = To(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Hu(e) {
  if (!(e.flags & 1)) {
    const t = To(e), n = Zt[Zt.length - 1];
    !n || !(e.flags & 2) && t >= To(n) ? Zt.push(e) : Zt.splice(qp(t), 0, e), e.flags |= 1, am();
  }
}
function am() {
  Li || (Li = nm.then(om));
}
function Xp(e) {
  Be(e) ? Fl.push(...e) : _a && e.id === -1 ? _a.splice(Tl + 1, 0, e) : e.flags & 1 || (Fl.push(e), e.flags |= 1), am();
}
function hd(e, t, n = Ln + 1) {
  for (; n < Zt.length; n++) {
    const a = Zt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Zt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function lm(e) {
  if (Fl.length) {
    const t = [...new Set(Fl)].sort((n, a) => To(n) - To(a));
    if (Fl.length = 0, _a) {
      _a.push(...t);
      return;
    }
    for (_a = t, Tl = 0; Tl < _a.length; Tl++) {
      const n = _a[Tl];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    _a = null, Tl = 0;
  }
}
const To = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function om(e) {
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
    Ln = -1, Zt.length = 0, lm(), Li = null, (Zt.length || Fl.length) && om();
  }
}
let rn = null, im = null;
function Fi(e) {
  const t = rn;
  return rn = e, im = e && e.type.__scopeId || null, t;
}
function Ee(e, t = rn, n) {
  if (!t || e._n) return e;
  const a = (...l) => {
    a._d && Ni(-1);
    const o = Fi(t);
    let i;
    try {
      i = e(...l);
    } finally {
      Fi(o), a._d && Ni(1);
    }
    return i;
  };
  return a._n = true, a._c = true, a._d = true, a;
}
function nt(e, t) {
  if (rn === null) return e;
  const n = vr(rn), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = st] = t[l];
    o && (Re(o) && (o = { mounted: o, updated: o }), o.deep && oa(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
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
function it(e, t) {
  if (Yt) {
    let n = Yt.provides;
    const a = Yt.parent && Yt.parent.provides;
    a === n && (n = Yt.provides = Object.create(a)), n[e] = t;
  }
}
function He(e, t, n = false) {
  const a = ti();
  if (a || Ol) {
    let l = Ol ? Ol._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Re(t) ? t.call(a && a.proxy) : t;
  }
}
const Zp = Symbol.for("v-scx"), Jp = () => He(Zp);
function ct(e, t) {
  return zu(e, null, t);
}
function ce(e, t, n) {
  return zu(e, t, n);
}
function zu(e, t, n = st) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = Tt({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Mo) {
    if (o === "sync") {
      const v = Jp();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Nn, v.resume = Nn, v.pause = Nn, v;
    }
  }
  const c = Yt;
  r.call = (v, S, m) => Tn(v, c, S, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    zt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, S) => {
    S ? v() : Hu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = Gp(e, t, r);
  return Mo && (u ? u.push(f) : s && f()), f;
}
function Qp(e, t, n) {
  const a = this.proxy, l = yt(e) ? e.includes(".") ? rm(a, e) : () => a[e] : e.bind(a, a);
  let o;
  Re(t) ? o = t : (o = t.handler, n = t);
  const i = ni(this), r = zu(l, o.bind(a), n);
  return i(), r;
}
function rm(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const sm = Symbol("_vte"), um = (e) => e.__isTeleport, po = (e) => e && (e.disabled || e.disabled === ""), gd = (e) => e && (e.defer || e.defer === ""), yd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, bd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Vs = (e, t) => {
  const n = e && e.to;
  return yt(n) ? t ? t(n) : null : n;
}, cm = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: S, createText: m, createComment: y } } = u, h = po(t.props);
  let { shapeFlag: w, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const x = t.el = m(""), g = t.anchor = m("");
    v(x, n, a), v(g, n, a);
    const C = (T, P) => {
      w & 16 && c(I, T, P, l, o, i, r, s);
    }, k = () => {
      const T = t.target = Vs(t.props, S), P = Is(T, t, m, v);
      T && (i !== "svg" && yd(T) ? i = "svg" : i !== "mathml" && bd(T) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), h || (C(T, P), Pi(t, false)));
    };
    h && (C(n, g), Pi(t, true)), gd(t.props) ? (t.el.__isMounted = false, zt(() => {
      k(), delete t.el.__isMounted;
    }, o)) : k();
  } else {
    if (gd(t.props) && e.el.__isMounted === false) {
      zt(() => {
        cm.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, g = t.target = e.target, C = t.targetAnchor = e.targetAnchor, k = po(e.props), T = k ? n : g, P = k ? x : C;
    if (i === "svg" || yd(g) ? i = "svg" : (i === "mathml" || bd(g)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, T, l, o, i, r), Gu(e, t, true)) : s || d(e, t, T, P, l, o, i, r, false), h) k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pi(t, n, x, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = Vs(t.props, S);
      E && pi(t, E, null, u, 0);
    } else k && pi(t, g, C, u, 1);
    Pi(t, h);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const v = o || !po(f);
    for (let S = 0; S < r.length; S++) {
      const m = r[S];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: pi, hydrate: eS };
function pi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || po(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function eS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(y, h) {
    let w = h;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor") t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, y._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      w = i(w);
    }
  }
  function v(y, h) {
    h.anchor = d(i(y), h, r(y), n, a, l, o);
  }
  const S = t.target = Vs(t.props, s), m = po(t.props);
  if (S) {
    const y = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(S, y), t.targetAnchor || Is(S, t, c, u, r(e) === S ? e : null)) : (t.anchor = i(e), f(S, y), t.targetAnchor || Is(S, t, c, u), d(y && i(y), t, S, n, a, l, o))), Pi(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const tS = cm;
function Pi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Is(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[sm] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Fn = Symbol("_leaveCb"), io = Symbol("_enterCb");
function dm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Ct(() => {
    e.isMounted = true;
  }), Nt(() => {
    e.isUnmounting = true;
  }), e;
}
const bn = [Function, Array], fm = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: bn, onEnter: bn, onAfterEnter: bn, onEnterCancelled: bn, onBeforeLeave: bn, onLeave: bn, onAfterLeave: bn, onLeaveCancelled: bn, onBeforeAppear: bn, onAppear: bn, onAfterAppear: bn, onAppearCancelled: bn }, vm = (e) => {
  const t = e.subTree;
  return t.component ? vm(t.component) : t;
}, nS = { name: "BaseTransition", props: fm, setup(e, { slots: t }) {
  const n = ti(), a = dm();
  return () => {
    const l = t.default && Wu(t.default(), true);
    if (!l || !l.length) return;
    const o = mm(l), i = Pe(e), { mode: r } = i;
    if (a.isLeaving) return qr(o);
    const s = pd(o);
    if (!s) return qr(o);
    let u = Ao(s, i, a, n, (d) => u = d);
    s.type !== Ut && ll(s, u);
    let c = n.subTree && pd(n.subTree);
    if (c && c.type !== Ut && !qa(c, s) && vm(n).type !== Ut) {
      let d = Ao(c, i, a, n);
      if (ll(c, d), r === "out-in" && s.type !== Ut) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, qr(o);
      r === "in-out" && s.type !== Ut ? d.delayLeave = (f, v, S) => {
        const m = hm(a, c);
        m[String(c.key)] = c, f[Fn] = () => {
          v(), f[Fn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          S(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function mm(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Ut) {
      t = n;
      break;
    }
  }
  return t;
}
const aS = nS;
function hm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function Ao(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: S, onLeaveCancelled: m, onBeforeAppear: y, onAppear: h, onAfterAppear: w, onAppearCancelled: I } = t, V = String(e.key), x = hm(n, e), g = (T, P) => {
    T && Tn(T, a, 9, P);
  }, C = (T, P) => {
    const E = P[1];
    g(T, P), Be(T) ? T.every((D) => D.length <= 1) && E() : T.length <= 1 && E();
  }, k = { mode: i, persisted: r, beforeEnter(T) {
    let P = s;
    if (!n.isMounted) if (o) P = y || s;
    else return;
    T[Fn] && T[Fn](true);
    const E = x[V];
    E && qa(e, E) && E.el[Fn] && E.el[Fn](), g(P, [T]);
  }, enter(T) {
    if (x[V] === e) return;
    let P = u, E = c, D = d;
    if (!n.isMounted) if (o) P = h || u, E = w || c, D = I || d;
    else return;
    let M = false;
    T[io] = (L) => {
      M || (M = true, L ? g(D, [T]) : g(E, [T]), k.delayedLeave && k.delayedLeave(), T[io] = void 0);
    };
    const A = T[io].bind(null, false);
    P ? C(P, [T, A]) : A();
  }, leave(T, P) {
    const E = String(e.key);
    if (T[io] && T[io](true), n.isUnmounting) return P();
    g(f, [T]);
    let D = false;
    T[Fn] = (A) => {
      D || (D = true, P(), A ? g(m, [T]) : g(S, [T]), T[Fn] = void 0, x[E] === e && delete x[E]);
    };
    const M = T[Fn].bind(null, false);
    x[E] = e, v ? C(v, [T, M]) : M();
  }, clone(T) {
    const P = Ao(T, t, n, a, l);
    return l && l(P), P;
  } };
  return k;
}
function qr(e) {
  if (sr(e)) return e = ca(e), e.children = null, e;
}
function pd(e) {
  if (!sr(e)) return um(e.type) && e.children ? mm(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Re(n.default)) return n.default();
  }
}
function ll(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ll(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wu(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ge ? (i.patchFlag & 128 && l++, a = a.concat(Wu(i.children, t, r))) : (t || i.type !== Ut) && a.push(r != null ? ca(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function mn(e, t) {
  return Re(e) ? Tt({ name: e.name }, t, { setup: e }) : e;
}
function Mt() {
  const e = ti();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function gm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Sd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Oi = /* @__PURE__ */ new WeakMap();
function So(e, t, n, a, l = false) {
  if (Be(e)) {
    e.forEach((m, y) => So(m, t && (Be(t) ? t[y] : t), n, a, l));
    return;
  }
  if (ko(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && So(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? vr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === st ? r.refs = {} : r.refs, d = r.setupState, f = Pe(d), v = d === st ? Iv : (m) => Sd(c, m) ? false : et(f, m), S = (m, y) => !(y && Sd(c, y));
  if (u != null && u !== s) {
    if (kd(t), yt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (gt(u)) {
      const m = t;
      S(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (Re(s)) Qo(s, r, 12, [i, c]);
  else {
    const m = yt(s), y = gt(s);
    if (m || y) {
      const h = () => {
        if (e.f) {
          const w = m ? v(s) ? d[s] : c[s] : S() || !e.k ? s.value : c[e.k];
          if (l) Be(w) && Eu(w, o);
          else if (Be(w)) w.includes(o) || w.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const I = [o];
            S(s, e.k) && (s.value = I), e.k && (c[e.k] = I);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : y && (S(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const w = () => {
          h(), Oi.delete(e);
        };
        w.id = -1, Oi.set(e, w), zt(w, n);
      } else kd(e), h();
    }
  }
}
function kd(e) {
  const t = Oi.get(e);
  t && (t.flags |= 8, Oi.delete(e));
}
or().requestIdleCallback;
or().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function ym(e, t) {
  bm(e, "a", t);
}
function ju(e, t) {
  bm(e, "da", t);
}
function bm(e, t, n = Yt) {
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
    for (; l && l.parent; ) sr(l.parent.vnode) && lS(a, t, n, l), l = l.parent;
  }
}
function lS(e, t, n, a) {
  const l = ur(t, e, a, true);
  dr(() => {
    Eu(a[t], l);
  }, n);
}
function ur(e, t, n = Yt, a = false) {
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
  (!Mo || e === "sp") && ur(e, (...a) => t(...a), n);
}, Jl = va("bm"), Ct = va("m"), pm = va("bu"), cr = va("u"), Nt = va("bum"), dr = va("um"), oS = va("sp"), iS = va("rtg"), rS = va("rtc");
function sS(e, t = Yt) {
  ur("ec", e, t);
}
const Sm = "components";
function Ye(e, t) {
  return km(Sm, e, true, t) || e;
}
const uS = Symbol.for("v-ndc");
function cS(e) {
  return yt(e) && km(Sm, e, false) || e;
}
function km(e, t, n = true, a = false) {
  const l = rn || Yt;
  if (l) {
    const o = l.type;
    {
      const r = YS(o, false);
      if (r && (r === t || r === tn(t) || r === Gn(tn(t)))) return o;
    }
    const i = wd(l[e] || o[e], t) || wd(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function wd(e, t) {
  return e && (e[t] || e[tn(t)] || e[Gn(tn(t))]);
}
function Qt(e, t, n, a) {
  let l;
  const o = n, i = Be(e);
  if (i || yt(e)) {
    const r = i && Ia(e);
    let s = false, u = false;
    r && (s = !fn(e), u = ua(e), e = ir(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Hl(Pn(e[c])) : Pn(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let r = 0; r < e; r++) l[r] = t(r + 1, r, void 0, o);
  } else if (Qe(e)) if (e[Symbol.iterator]) l = Array.from(e, (r, s) => t(r, s, void 0, o));
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
const Ps = (e) => e ? Hm(e) ? vr(e) : Ps(e.parent) : null, wo = Tt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Ps(e.parent), $root: (e) => Ps(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => xm(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Hu(e.update);
}), $nextTick: (e) => e.n || (e.n = Te.bind(e.proxy)), $watch: (e) => Qp.bind(e) }), Xr = (e, t) => e !== st && !e.__isScriptSetup && et(e, t), dS = { get({ _: e }, t) {
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
      if (l !== st && et(l, t)) return i[t] = 2, l[t];
      if (et(o, t)) return i[t] = 3, o[t];
      if (n !== st && et(n, t)) return i[t] = 4, n[t];
      Ts && (i[t] = 0);
    }
  }
  const u = wo[t];
  let c, d;
  if (u) return t === "$attrs" && jt(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== st && et(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, et(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return Xr(l, t) ? (l[t] = n, true) : a !== st && et(a, t) ? (a[t] = n, true) : et(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== st && r[0] !== "$" && et(e, r) || Xr(t, r) || et(o, r) || et(a, r) || et(wo, r) || et(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : et(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function xd(e) {
  return Be(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Ts = true;
function fS(e) {
  const t = xm(e), n = e.proxy, a = e.ctx;
  Ts = false, t.beforeCreate && Cd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: S, activated: m, deactivated: y, beforeDestroy: h, beforeUnmount: w, destroyed: I, unmounted: V, render: x, renderTracked: g, renderTriggered: C, errorCaptured: k, serverPrefetch: T, expose: P, inheritAttrs: E, components: D, directives: M, filters: A } = t;
  if (u && vS(u, a, null), i) for (const N in i) {
    const Z = i[N];
    Re(Z) && (a[N] = Z.bind(n));
  }
  if (l) {
    const N = l.call(n, n);
    Qe(N) && (e.data = At(N));
  }
  if (Ts = true, o) for (const N in o) {
    const Z = o[N], J = Re(Z) ? Z.bind(n, n) : Re(Z.get) ? Z.get.bind(n, n) : Nn, F = !Re(Z) && Re(Z.set) ? Z.set.bind(n) : Nn, G = _({ get: J, set: F });
    Object.defineProperty(a, N, { enumerable: true, configurable: true, get: () => G.value, set: (W) => G.value = W });
  }
  if (r) for (const N in r) wm(r[N], a, n, N);
  if (s) {
    const N = Re(s) ? s.call(n) : s;
    Reflect.ownKeys(N).forEach((Z) => {
      it(Z, N[Z]);
    });
  }
  c && Cd(c, e, "c");
  function z(N, Z) {
    Be(Z) ? Z.forEach((J) => N(J.bind(n))) : Z && N(Z.bind(n));
  }
  if (z(Jl, d), z(Ct, f), z(pm, v), z(cr, S), z(ym, m), z(ju, y), z(sS, k), z(rS, g), z(iS, C), z(Nt, w), z(dr, V), z(oS, T), Be(P)) if (P.length) {
    const N = e.exposed || (e.exposed = {});
    P.forEach((Z) => {
      Object.defineProperty(N, Z, { get: () => n[Z], set: (J) => n[Z] = J, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === Nn && (e.render = x), E != null && (e.inheritAttrs = E), D && (e.components = D), M && (e.directives = M), T && gm(e);
}
function vS(e, t, n = Nn) {
  Be(e) && (e = As(e));
  for (const a in e) {
    const l = e[a];
    let o;
    Qe(l) ? "default" in l ? o = He(l.from || a, l.default, true) : o = He(l.from || a) : o = He(l), gt(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function Cd(e, t, n) {
  Tn(Be(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function wm(e, t, n, a) {
  let l = a.includes(".") ? rm(n, a) : () => n[a];
  if (yt(e)) {
    const o = t[e];
    Re(o) && ce(l, o);
  } else if (Re(e)) ce(l, e.bind(n));
  else if (Qe(e)) if (Be(e)) e.forEach((o) => wm(o, t, n, a));
  else {
    const o = Re(e.handler) ? e.handler.bind(n) : t[e.handler];
    Re(o) && ce(l, o, e);
  }
}
function xm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Ri(s, u, i, true)), Ri(s, t, i)), Qe(t) && o.set(t, s), s;
}
function Ri(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Ri(e, o, n, true), l && l.forEach((i) => Ri(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = mS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const mS = { data: _d, props: Vd, emits: Vd, methods: fo, computed: fo, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: fo, directives: fo, watch: gS, provide: _d, inject: hS };
function _d(e, t) {
  return t ? e ? function() {
    return Tt(Re(e) ? e.call(this, this) : e, Re(t) ? t.call(this, this) : t);
  } : t : e;
}
function hS(e, t) {
  return fo(As(e), As(t));
}
function As(e) {
  if (Be(e)) {
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
  return e ? Tt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Vd(e, t) {
  return e ? Be(e) && Be(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Tt(/* @__PURE__ */ Object.create(null), xd(e), xd(t ?? {})) : t;
}
function gS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Tt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = Xt(e[a], t[a]);
  return n;
}
function Cm() {
  return { app: null, config: { isNativeTag: Iv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let yS = 0;
function bS(e, t) {
  return function(a, l = null) {
    Re(a) || (a = Tt({}, a)), l != null && !Qe(l) && (l = null);
    const o = Cm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: yS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: KS, get config() {
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
        const v = u._ceVNode || b(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, vr(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (Tn(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Ol;
      Ol = u;
      try {
        return c();
      } finally {
        Ol = d;
      }
    } };
    return u;
  };
}
let Ol = null;
const pS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tn(t)}Modifiers`] || e[`${vl(t)}Modifiers`];
function SS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || st;
  let l = n;
  const o = t.startsWith("update:"), i = o && pS(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => yt(c) ? c.trim() : c)), i.number && (l = n.map(Mu)));
  let r, s = a[r = jr(t)] || a[r = jr(tn(t))];
  !s && o && (s = a[r = jr(vl(t))]), s && Tn(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Tn(u, e, 6, l);
  }
}
const kS = /* @__PURE__ */ new WeakMap();
function _m(e, t, n = false) {
  const a = n ? kS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!Re(e)) {
    const s = (u) => {
      const c = _m(u, t, true);
      c && (r = true, Tt(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (Qe(e) && a.set(e, null), null) : (Be(o) ? o.forEach((s) => i[s] = null) : Tt(i, o), Qe(e) && a.set(e, i), i);
}
function fr(e, t) {
  return !e || !nr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), et(e, t[0].toLowerCase() + t.slice(1)) || et(e, vl(t)) || et(e, t));
}
function Id(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: S, inheritAttrs: m } = e, y = Fi(e);
  let h, w;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, x = V;
      h = On(u.call(x, V, c, d, v, f, S)), w = r;
    } else {
      const V = t;
      h = On(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), w = t.props ? r : wS(r);
    }
  } catch (V) {
    xo.length = 0, rr(V, e, 1), h = b(Ut);
  }
  let I = h;
  if (w && m !== false) {
    const V = Object.keys(w), { shapeFlag: x } = I;
    V.length && x & 7 && (o && V.some(Du) && (w = xS(w, o)), I = ca(I, w, false, true));
  }
  return n.dirs && (I = ca(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ll(I, n.transition), h = I, Fi(y), h;
}
const wS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || nr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xS = (e, t) => {
  const n = {};
  for (const a in e) (!Du(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function CS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Pd(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Vm(i, a, f) && !fr(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Pd(a, i, u) : true : !!i;
  return false;
}
function Pd(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (Vm(t, e, o) && !fr(n, o)) return true;
  }
  return false;
}
function Vm(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && Qe(a) && Qe(l) ? !Bu(a, l) : a !== l;
}
function _S({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Im = {}, Pm = () => Object.create(Im), Tm = (e) => Object.getPrototypeOf(e) === Im;
function VS(e, t, n, a = false) {
  const l = {}, o = Pm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Am(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : Rp(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function IS(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Pe(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (fr(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (et(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const S = tn(f);
          l[S] = Ds(s, r, S, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    Am(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !et(t, d) && ((c = vl(d)) === d || !et(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Ds(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !et(t, d)) && (delete o[d], u = true);
  }
  u && la(e.attrs, "set", "");
}
function Am(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (go(s)) continue;
    const u = t[s];
    let c;
    l && et(l, c = tn(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : fr(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = Pe(n), u = r || st;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Ds(l, s, d, u[d], e, !et(u, d));
    }
  }
  return i;
}
function Ds(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = et(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && Re(s)) {
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
const PS = /* @__PURE__ */ new WeakMap();
function Dm(e, t, n = false) {
  const a = n ? PS : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!Re(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = Dm(d, t, true);
      Tt(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return Qe(e) && a.set(e, $l), $l;
  if (Be(o)) for (let c = 0; c < o.length; c++) {
    const d = tn(o[c]);
    Td(d) && (i[d] = st);
  }
  else if (o) for (const c in o) {
    const d = tn(c);
    if (Td(d)) {
      const f = o[c], v = i[d] = Be(f) || Re(f) ? { type: f } : Tt({}, f), S = v.type;
      let m = false, y = true;
      if (Be(S)) for (let h = 0; h < S.length; ++h) {
        const w = S[h], I = Re(w) && w.name;
        if (I === "Boolean") {
          m = true;
          break;
        } else I === "String" && (y = false);
      }
      else m = Re(S) && S.name === "Boolean";
      v[0] = m, v[1] = y, (m || et(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return Qe(e) && a.set(e, u), u;
}
function Td(e) {
  return e[0] !== "$" && !go(e);
}
const Uu = (e) => e === "_" || e === "_ctx" || e === "$stable", Yu = (e) => Be(e) ? e.map(On) : [On(e)], TS = (e, t, n) => {
  if (t._n) return t;
  const a = Ee((...l) => Yu(t(...l)), n);
  return a._c = false, a;
}, Em = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Uu(l)) continue;
    const o = e[l];
    if (Re(o)) t[l] = TS(l, o, a);
    else if (o != null) {
      const i = Yu(o);
      t[l] = () => i;
    }
  }
}, Mm = (e, t) => {
  const n = Yu(t);
  e.slots.default = () => n;
}, Bm = (e, t, n) => {
  for (const a in t) (n || !Uu(a)) && (e[a] = t[a]);
}, AS = (e, t, n) => {
  const a = e.slots = Pm();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Bm(a, t, n), n && Ev(a, "_", l, true)) : Em(t, a);
  } else t && Mm(e, t);
}, DS = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = st;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : Bm(l, t, n) : (o = !t.$stable, Em(t, l)), i = t;
  } else t && (Mm(e, t), i = { default: 1 });
  if (o) for (const r in l) !Uu(r) && i[r] == null && delete l[r];
}, zt = LS;
function ES(e) {
  return MS(e);
}
function MS(e, t) {
  const n = or();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Nn, insertStaticContent: S } = e, m = ($, O, X, se = null, le = null, ue = null, be = void 0, fe = null, U = !!O.dynamicChildren) => {
    if ($ === O) return;
    $ && !qa($, O) && (se = Q($), W($, le, ue, true), $ = null), O.patchFlag === -2 && (U = false, O.dynamicChildren = null);
    const { type: oe, ref: _e, shapeFlag: q } = O;
    switch (oe) {
      case ei:
        y($, O, X, se);
        break;
      case Ut:
        h($, O, X, se);
        break;
      case Jr:
        $ == null && w(O, X, se, be);
        break;
      case ge:
        D($, O, X, se, le, ue, be, fe, U);
        break;
      default:
        q & 1 ? x($, O, X, se, le, ue, be, fe, U) : q & 6 ? M($, O, X, se, le, ue, be, fe, U) : (q & 64 || q & 128) && oe.process($, O, X, se, le, ue, be, fe, U, ke);
    }
    _e != null && le ? So(_e, $ && $.ref, ue, O || $, !O) : _e == null && $ && $.ref != null && So($.ref, null, ue, $, true);
  }, y = ($, O, X, se) => {
    if ($ == null) a(O.el = r(O.children), X, se);
    else {
      const le = O.el = $.el;
      O.children !== $.children && u(le, O.children);
    }
  }, h = ($, O, X, se) => {
    $ == null ? a(O.el = s(O.children || ""), X, se) : O.el = $.el;
  }, w = ($, O, X, se) => {
    [$.el, $.anchor] = S($.children, O, X, se, $.el, $.anchor);
  }, I = ({ el: $, anchor: O }, X, se) => {
    let le;
    for (; $ && $ !== O; ) le = f($), a($, X, se), $ = le;
    a(O, X, se);
  }, V = ({ el: $, anchor: O }) => {
    let X;
    for (; $ && $ !== O; ) X = f($), l($), $ = X;
    l(O);
  }, x = ($, O, X, se, le, ue, be, fe, U) => {
    if (O.type === "svg" ? be = "svg" : O.type === "math" && (be = "mathml"), $ == null) g(O, X, se, le, ue, be, fe, U);
    else {
      const oe = $.el && $.el._isVueCE ? $.el : null;
      try {
        oe && oe._beginPatch(), T($, O, le, ue, be, fe, U);
      } finally {
        oe && oe._endPatch();
      }
    }
  }, g = ($, O, X, se, le, ue, be, fe) => {
    let U, oe;
    const { props: _e, shapeFlag: q, transition: he, dirs: Se } = $;
    if (U = $.el = i($.type, ue, _e && _e.is, _e), q & 8 ? c(U, $.children) : q & 16 && k($.children, U, null, se, le, Zr($, ue), be, fe), Se && Ha($, null, se, "created"), C(U, $, $.scopeId, be, se), _e) {
      for (const Ie in _e) Ie !== "value" && !go(Ie) && o(U, Ie, null, _e[Ie], ue, se);
      "value" in _e && o(U, "value", null, _e.value, ue), (oe = _e.onVnodeBeforeMount) && Mn(oe, se, $);
    }
    Se && Ha($, null, se, "beforeMount");
    const we = BS(le, he);
    we && he.beforeEnter(U), a(U, O, X), ((oe = _e && _e.onVnodeMounted) || we || Se) && zt(() => {
      oe && Mn(oe, se, $), we && he.enter(U), Se && Ha($, null, se, "mounted");
    }, le);
  }, C = ($, O, X, se, le) => {
    if (X && v($, X), se) for (let ue = 0; ue < se.length; ue++) v($, se[ue]);
    if (le) {
      let ue = le.subTree;
      if (O === ue || Fm(ue.type) && (ue.ssContent === O || ue.ssFallback === O)) {
        const be = le.vnode;
        C($, be, be.scopeId, be.slotScopeIds, le.parent);
      }
    }
  }, k = ($, O, X, se, le, ue, be, fe, U = 0) => {
    for (let oe = U; oe < $.length; oe++) {
      const _e = $[oe] = fe ? na($[oe]) : On($[oe]);
      m(null, _e, O, X, se, le, ue, be, fe);
    }
  }, T = ($, O, X, se, le, ue, be) => {
    const fe = O.el = $.el;
    let { patchFlag: U, dynamicChildren: oe, dirs: _e } = O;
    U |= $.patchFlag & 16;
    const q = $.props || st, he = O.props || st;
    let Se;
    if (X && za(X, false), (Se = he.onVnodeBeforeUpdate) && Mn(Se, X, O, $), _e && Ha(O, $, X, "beforeUpdate"), X && za(X, true), (q.innerHTML && he.innerHTML == null || q.textContent && he.textContent == null) && c(fe, ""), oe ? P($.dynamicChildren, oe, fe, X, se, Zr(O, le), ue) : be || Z($, O, fe, null, X, se, Zr(O, le), ue, false), U > 0) {
      if (U & 16) E(fe, q, he, X, le);
      else if (U & 2 && q.class !== he.class && o(fe, "class", null, he.class, le), U & 4 && o(fe, "style", q.style, he.style, le), U & 8) {
        const we = O.dynamicProps;
        for (let Ie = 0; Ie < we.length; Ie++) {
          const $e = we[Ie], je = q[$e], Oe = he[$e];
          (Oe !== je || $e === "value") && o(fe, $e, je, Oe, le, X);
        }
      }
      U & 1 && $.children !== O.children && c(fe, O.children);
    } else !be && oe == null && E(fe, q, he, X, le);
    ((Se = he.onVnodeUpdated) || _e) && zt(() => {
      Se && Mn(Se, X, O, $), _e && Ha(O, $, X, "updated");
    }, se);
  }, P = ($, O, X, se, le, ue, be) => {
    for (let fe = 0; fe < O.length; fe++) {
      const U = $[fe], oe = O[fe], _e = U.el && (U.type === ge || !qa(U, oe) || U.shapeFlag & 198) ? d(U.el) : X;
      m(U, oe, _e, null, se, le, ue, be, true);
    }
  }, E = ($, O, X, se, le) => {
    if (O !== X) {
      if (O !== st) for (const ue in O) !go(ue) && !(ue in X) && o($, ue, O[ue], null, le, se);
      for (const ue in X) {
        if (go(ue)) continue;
        const be = X[ue], fe = O[ue];
        be !== fe && ue !== "value" && o($, ue, fe, be, le, se);
      }
      "value" in X && o($, "value", O.value, X.value, le);
    }
  }, D = ($, O, X, se, le, ue, be, fe, U) => {
    const oe = O.el = $ ? $.el : r(""), _e = O.anchor = $ ? $.anchor : r("");
    let { patchFlag: q, dynamicChildren: he, slotScopeIds: Se } = O;
    Se && (fe = fe ? fe.concat(Se) : Se), $ == null ? (a(oe, X, se), a(_e, X, se), k(O.children || [], X, _e, le, ue, be, fe, U)) : q > 0 && q & 64 && he && $.dynamicChildren && $.dynamicChildren.length === he.length ? (P($.dynamicChildren, he, X, le, ue, be, fe), (O.key != null || le && O === le.subTree) && Gu($, O, true)) : Z($, O, X, _e, le, ue, be, fe, U);
  }, M = ($, O, X, se, le, ue, be, fe, U) => {
    O.slotScopeIds = fe, $ == null ? O.shapeFlag & 512 ? le.ctx.activate(O, X, se, be, U) : A(O, X, se, le, ue, be, U) : L($, O, U);
  }, A = ($, O, X, se, le, ue, be) => {
    const fe = $.component = HS($, se, le);
    if (sr($) && (fe.ctx.renderer = ke), zS(fe, false, be), fe.asyncDep) {
      if (le && le.registerDep(fe, z, be), !$.el) {
        const U = fe.subTree = b(Ut);
        h(null, U, O, X), $.placeholder = U.el;
      }
    } else z(fe, $, O, X, le, ue, be);
  }, L = ($, O, X) => {
    const se = O.component = $.component;
    if (CS($, O, X)) if (se.asyncDep && !se.asyncResolved) {
      N(se, O, X);
      return;
    } else se.next = O, se.update();
    else O.el = $.el, se.vnode = O;
  }, z = ($, O, X, se, le, ue, be) => {
    const fe = () => {
      if ($.isMounted) {
        let { next: q, bu: he, u: Se, parent: we, vnode: Ie } = $;
        {
          const at = $m($);
          if (at) {
            q && (q.el = Ie.el, N($, q, be)), at.asyncDep.then(() => {
              zt(() => {
                $.isUnmounted || oe();
              }, le);
            });
            return;
          }
        }
        let $e = q, je;
        za($, false), q ? (q.el = Ie.el, N($, q, be)) : q = Ie, he && Ii(he), (je = q.props && q.props.onVnodeBeforeUpdate) && Mn(je, we, q, Ie), za($, true);
        const Oe = Id($), ft = $.subTree;
        $.subTree = Oe, m(ft, Oe, d(ft.el), Q(ft), $, le, ue), q.el = Oe.el, $e === null && _S($, Oe.el), Se && zt(Se, le), (je = q.props && q.props.onVnodeUpdated) && zt(() => Mn(je, we, q, Ie), le);
      } else {
        let q;
        const { el: he, props: Se } = O, { bm: we, m: Ie, parent: $e, root: je, type: Oe } = $, ft = ko(O);
        za($, false), we && Ii(we), !ft && (q = Se && Se.onVnodeBeforeMount) && Mn(q, $e, O), za($, true);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(Oe);
          const at = $.subTree = Id($);
          m(null, at, X, se, $, le, ue), O.el = at.el;
        }
        if (Ie && zt(Ie, le), !ft && (q = Se && Se.onVnodeMounted)) {
          const at = O;
          zt(() => Mn(q, $e, at), le);
        }
        (O.shapeFlag & 256 || $e && ko($e.vnode) && $e.vnode.shapeFlag & 256) && $.a && zt($.a, le), $.isMounted = true, O = X = se = null;
      }
    };
    $.scope.on();
    const U = $.effect = new Ov(fe);
    $.scope.off();
    const oe = $.update = U.run.bind(U), _e = $.job = U.runIfDirty.bind(U);
    _e.i = $, _e.id = $.uid, U.scheduler = () => Hu(_e), za($, true), oe();
  }, N = ($, O, X) => {
    O.component = $;
    const se = $.vnode.props;
    $.vnode = O, $.next = null, IS($, O.props, se, X), DS($, O.children, X), ra(), hd($), sa();
  }, Z = ($, O, X, se, le, ue, be, fe, U = false) => {
    const oe = $ && $.children, _e = $ ? $.shapeFlag : 0, q = O.children, { patchFlag: he, shapeFlag: Se } = O;
    if (he > 0) {
      if (he & 128) {
        F(oe, q, X, se, le, ue, be, fe, U);
        return;
      } else if (he & 256) {
        J(oe, q, X, se, le, ue, be, fe, U);
        return;
      }
    }
    Se & 8 ? (_e & 16 && ae(oe, le, ue), q !== oe && c(X, q)) : _e & 16 ? Se & 16 ? F(oe, q, X, se, le, ue, be, fe, U) : ae(oe, le, ue, true) : (_e & 8 && c(X, ""), Se & 16 && k(q, X, se, le, ue, be, fe, U));
  }, J = ($, O, X, se, le, ue, be, fe, U) => {
    $ = $ || $l, O = O || $l;
    const oe = $.length, _e = O.length, q = Math.min(oe, _e);
    let he;
    for (he = 0; he < q; he++) {
      const Se = O[he] = U ? na(O[he]) : On(O[he]);
      m($[he], Se, X, null, le, ue, be, fe, U);
    }
    oe > _e ? ae($, le, ue, true, false, q) : k(O, X, se, le, ue, be, fe, U, q);
  }, F = ($, O, X, se, le, ue, be, fe, U) => {
    let oe = 0;
    const _e = O.length;
    let q = $.length - 1, he = _e - 1;
    for (; oe <= q && oe <= he; ) {
      const Se = $[oe], we = O[oe] = U ? na(O[oe]) : On(O[oe]);
      if (qa(Se, we)) m(Se, we, X, null, le, ue, be, fe, U);
      else break;
      oe++;
    }
    for (; oe <= q && oe <= he; ) {
      const Se = $[q], we = O[he] = U ? na(O[he]) : On(O[he]);
      if (qa(Se, we)) m(Se, we, X, null, le, ue, be, fe, U);
      else break;
      q--, he--;
    }
    if (oe > q) {
      if (oe <= he) {
        const Se = he + 1, we = Se < _e ? O[Se].el : se;
        for (; oe <= he; ) m(null, O[oe] = U ? na(O[oe]) : On(O[oe]), X, we, le, ue, be, fe, U), oe++;
      }
    } else if (oe > he) for (; oe <= q; ) W($[oe], le, ue, true), oe++;
    else {
      const Se = oe, we = oe, Ie = /* @__PURE__ */ new Map();
      for (oe = we; oe <= he; oe++) {
        const rt = O[oe] = U ? na(O[oe]) : On(O[oe]);
        rt.key != null && Ie.set(rt.key, oe);
      }
      let $e, je = 0;
      const Oe = he - we + 1;
      let ft = false, at = 0;
      const an = new Array(Oe);
      for (oe = 0; oe < Oe; oe++) an[oe] = 0;
      for (oe = Se; oe <= q; oe++) {
        const rt = $[oe];
        if (je >= Oe) {
          W(rt, le, ue, true);
          continue;
        }
        let yn;
        if (rt.key != null) yn = Ie.get(rt.key);
        else for ($e = we; $e <= he; $e++) if (an[$e - we] === 0 && qa(rt, O[$e])) {
          yn = $e;
          break;
        }
        yn === void 0 ? W(rt, le, ue, true) : (an[yn - we] = oe + 1, yn >= at ? at = yn : ft = true, m(rt, O[yn], X, null, le, ue, be, fe, U), je++);
      }
      const ka = ft ? $S(an) : $l;
      for ($e = ka.length - 1, oe = Oe - 1; oe >= 0; oe--) {
        const rt = we + oe, yn = O[rt], ud = O[rt + 1], cd = rt + 1 < _e ? ud.el || Lm(ud) : se;
        an[oe] === 0 ? m(null, yn, X, cd, le, ue, be, fe, U) : ft && ($e < 0 || oe !== ka[$e] ? G(yn, X, cd, 2) : $e--);
      }
    }
  }, G = ($, O, X, se, le = null) => {
    const { el: ue, type: be, transition: fe, children: U, shapeFlag: oe } = $;
    if (oe & 6) {
      G($.component.subTree, O, X, se);
      return;
    }
    if (oe & 128) {
      $.suspense.move(O, X, se);
      return;
    }
    if (oe & 64) {
      be.move($, O, X, ke);
      return;
    }
    if (be === ge) {
      a(ue, O, X);
      for (let q = 0; q < U.length; q++) G(U[q], O, X, se);
      a($.anchor, O, X);
      return;
    }
    if (be === Jr) {
      I($, O, X);
      return;
    }
    if (se !== 2 && oe & 1 && fe) if (se === 0) fe.beforeEnter(ue), a(ue, O, X), zt(() => fe.enter(ue), le);
    else {
      const { leave: q, delayLeave: he, afterLeave: Se } = fe, we = () => {
        $.ctx.isUnmounted ? l(ue) : a(ue, O, X);
      }, Ie = () => {
        ue._isLeaving && ue[Fn](true), q(ue, () => {
          we(), Se && Se();
        });
      };
      he ? he(ue, we, Ie) : Ie();
    }
    else a(ue, O, X);
  }, W = ($, O, X, se = false, le = false) => {
    const { type: ue, props: be, ref: fe, children: U, dynamicChildren: oe, shapeFlag: _e, patchFlag: q, dirs: he, cacheIndex: Se } = $;
    if (q === -2 && (le = false), fe != null && (ra(), So(fe, null, X, $, true), sa()), Se != null && (O.renderCache[Se] = void 0), _e & 256) {
      O.ctx.deactivate($);
      return;
    }
    const we = _e & 1 && he, Ie = !ko($);
    let $e;
    if (Ie && ($e = be && be.onVnodeBeforeUnmount) && Mn($e, O, $), _e & 6) ie($.component, X, se);
    else {
      if (_e & 128) {
        $.suspense.unmount(X, se);
        return;
      }
      we && Ha($, null, O, "beforeUnmount"), _e & 64 ? $.type.remove($, O, X, ke, se) : oe && !oe.hasOnce && (ue !== ge || q > 0 && q & 64) ? ae(oe, O, X, false, true) : (ue === ge && q & 384 || !le && _e & 16) && ae(U, O, X), se && R($);
    }
    (Ie && ($e = be && be.onVnodeUnmounted) || we) && zt(() => {
      $e && Mn($e, O, $), we && Ha($, null, O, "unmounted");
    }, X);
  }, R = ($) => {
    const { type: O, el: X, anchor: se, transition: le } = $;
    if (O === ge) {
      j(X, se);
      return;
    }
    if (O === Jr) {
      V($);
      return;
    }
    const ue = () => {
      l(X), le && !le.persisted && le.afterLeave && le.afterLeave();
    };
    if ($.shapeFlag & 1 && le && !le.persisted) {
      const { leave: be, delayLeave: fe } = le, U = () => be(X, ue);
      fe ? fe($.el, ue, U) : U();
    } else ue();
  }, j = ($, O) => {
    let X;
    for (; $ !== O; ) X = f($), l($), $ = X;
    l(O);
  }, ie = ($, O, X) => {
    const { bum: se, scope: le, job: ue, subTree: be, um: fe, m: U, a: oe } = $;
    Ad(U), Ad(oe), se && Ii(se), le.stop(), ue && (ue.flags |= 8, W(be, $, O, X)), fe && zt(fe, O), zt(() => {
      $.isUnmounted = true;
    }, O);
  }, ae = ($, O, X, se = false, le = false, ue = 0) => {
    for (let be = ue; be < $.length; be++) W($[be], O, X, se, le);
  }, Q = ($) => {
    if ($.shapeFlag & 6) return Q($.component.subTree);
    if ($.shapeFlag & 128) return $.suspense.next();
    const O = f($.anchor || $.el), X = O && O[sm];
    return X ? f(X) : O;
  };
  let de = false;
  const Ve = ($, O, X) => {
    let se;
    $ == null ? O._vnode && (W(O._vnode, null, null, true), se = O._vnode.component) : m(O._vnode || null, $, O, null, null, null, X), O._vnode = $, de || (de = true, hd(se), lm(), de = false);
  }, ke = { p: m, um: W, m: G, r: R, mt: A, mc: k, pc: Z, pbc: P, n: Q, o: e };
  return { render: Ve, hydrate: void 0, createApp: bS(Ve) };
}
function Zr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function za({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function BS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gu(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Be(a) && Be(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = na(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Gu(i, r)), r.type === ei && (r.patchFlag === -1 && (r = l[o] = na(r)), r.el = i.el), r.type === Ut && !r.el && (r.el = i.el);
  }
}
function $S(e) {
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
function $m(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : $m(t);
}
function Ad(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Lm(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Lm(t.subTree) : null;
}
const Fm = (e) => e.__isSuspense;
function LS(e, t) {
  t && t.pendingBranch ? Be(e) ? t.effects.push(...e) : t.effects.push(e) : Xp(e);
}
const ge = Symbol.for("v-fgt"), ei = Symbol.for("v-txt"), Ut = Symbol.for("v-cmt"), Jr = Symbol.for("v-stc"), xo = [];
let sn = null;
function Ae(e = false) {
  xo.push(sn = e ? null : []);
}
function FS() {
  xo.pop(), sn = xo[xo.length - 1] || null;
}
let Do = 1;
function Ni(e, t = false) {
  Do += e, e < 0 && sn && t && (sn.hasOnce = true);
}
function Om(e) {
  return e.dynamicChildren = Do > 0 ? sn || $l : null, FS(), Do > 0 && sn && sn.push(e), e;
}
function ze(e, t, n, a, l, o) {
  return Om(p(e, t, n, a, l, o, true));
}
function Hn(e, t, n, a, l) {
  return Om(b(e, t, n, a, l, true));
}
function Eo(e) {
  return e ? e.__v_isVNode === true : false;
}
function qa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rm = ({ key: e }) => e ?? null, Ti = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? yt(e) || gt(e) || Re(e) ? { i: rn, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, a = 0, l = null, o = e === ge ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Rm(t), ref: t && Ti(t), scopeId: im, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: rn };
  return r ? (Ku(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= yt(n) ? 8 : 16), Do > 0 && !i && sn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && sn.push(s), s;
}
const b = OS;
function OS(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === uS) && (e = Ut), Eo(e)) {
    const r = ca(e, t, true);
    return n && Ku(r, n), Do > 0 && !o && sn && (r.shapeFlag & 6 ? sn[sn.indexOf(e)] = r : sn.push(r)), r.patchFlag = -2, r;
  }
  if (GS(e) && (e = e.__vccOpts), t) {
    t = Nm(t);
    let { class: r, style: s } = t;
    r && !yt(r) && (t.class = te(r)), Qe(s) && (Jo(s) && !Be(s) && (s = Tt({}, s)), t.style = me(s));
  }
  const i = yt(e) ? 1 : Fm(e) ? 128 : um(e) ? 64 : Qe(e) ? 4 : Re(e) ? 2 : 0;
  return p(e, t, n, a, l, i, o, true);
}
function Nm(e) {
  return e ? Jo(e) || Tm(e) ? Tt({}, e) : e : null;
}
function ca(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? Y(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Rm(u), ref: t && t.ref ? n && o ? Be(o) ? o.concat(Ti(t)) : [o, Ti(t)] : Ti(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ca(e.ssContent), ssFallback: e.ssFallback && ca(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ll(c, s.clone(c)), c;
}
function ut(e = " ", t = 0) {
  return b(ei, null, e, t);
}
function xn(e = "", t = false) {
  return t ? (Ae(), Hn(Ut, null, e)) : b(Ut, null, e);
}
function On(e) {
  return e == null || typeof e == "boolean" ? b(Ut) : Be(e) ? b(ge, null, e.slice()) : Eo(e) ? na(e) : b(ei, null, String(e));
}
function na(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ca(e);
}
function Ku(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Be(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Ku(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Tm(t) ? t._ctx = rn : l === 3 && rn && (rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Re(t) ? (t = { default: t, _ctx: rn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [ut(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Y(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = te([t.class, a.class]));
    else if (l === "style") t.style = me([t.style, a.style]);
    else if (nr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(Be(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Mn(e, t, n, a = null) {
  Tn(e, t, 7, [n, a]);
}
const RS = Cm();
let NS = 0;
function HS(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || RS, o = { uid: NS++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Lv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Dm(a, l), emitsOptions: _m(a, l), emit: null, emitted: null, propsDefaults: st, inheritAttrs: a.inheritAttrs, ctx: st, data: st, props: st, attrs: st, slots: st, refs: st, setupState: st, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = SS.bind(null, o), e.ce && e.ce(o), o;
}
let Yt = null;
const ti = () => Yt || rn;
let Hi, Es;
{
  const e = or(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Hi = t("__VUE_INSTANCE_SETTERS__", (n) => Yt = n), Es = t("__VUE_SSR_SETTERS__", (n) => Mo = n);
}
const ni = (e) => {
  const t = Yt;
  return Hi(e), e.scope.on(), () => {
    e.scope.off(), Hi(t);
  };
}, Dd = () => {
  Yt && Yt.scope.off(), Hi(null);
};
function Hm(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = false;
function zS(e, t = false, n = false) {
  t && Es(t);
  const { props: a, children: l } = e.vnode, o = Hm(e);
  VS(e, a, o, t), AS(e, l, n || t);
  const i = o ? WS(e, t) : void 0;
  return t && Es(false), i;
}
function WS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dS);
  const { setup: a } = n;
  if (a) {
    ra();
    const l = e.setupContext = a.length > 1 ? US(e) : null, o = ni(e), i = Qo(a, e, 0, [e.props, l]), r = Tv(i);
    if (sa(), o(), (r || e.sp) && !ko(e) && gm(e), r) {
      if (i.then(Dd, Dd), t) return i.then((s) => {
        Ed(e, s);
      }).catch((s) => {
        rr(s, e, 0);
      });
      e.asyncDep = i;
    } else Ed(e, i);
  } else zm(e);
}
function Ed(e, t, n) {
  Re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = em(t)), zm(e);
}
function zm(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Nn);
  {
    const l = ni(e);
    ra();
    try {
      fS(e);
    } finally {
      sa(), l();
    }
  }
}
const jS = { get(e, t) {
  return jt(e, "get", ""), e[t];
} };
function US(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, jS), slots: e.slots, emit: e.emit, expose: t };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(em(Jv(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in wo) return wo[n](e);
  }, has(t, n) {
    return n in t || n in wo;
  } })) : e.proxy;
}
function YS(e, t = true) {
  return Re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function GS(e) {
  return Re(e) && "__vccOpts" in e;
}
const _ = (e, t) => Up(e, t, Mo);
function ma(e, t, n) {
  try {
    Ni(-1);
    const a = arguments.length;
    return a === 2 ? Qe(t) && !Be(t) ? Eo(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Eo(n) && (n = [n]), b(e, t, n));
  } finally {
    Ni(1);
  }
}
const KS = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ms;
const Md = typeof window < "u" && window.trustedTypes;
if (Md) try {
  Ms = Md.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Wm = Ms ? (e) => Ms.createHTML(e) : (e) => e, qS = "http://www.w3.org/2000/svg", XS = "http://www.w3.org/1998/Math/MathML", ta = typeof document < "u" ? document : null, Bd = ta && ta.createElement("template"), ZS = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? ta.createElementNS(qS, e) : t === "mathml" ? ta.createElementNS(XS, e) : n ? ta.createElement(e, { is: n }) : ta.createElement(e);
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
    Bd.innerHTML = Wm(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = Bd.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, wa = "transition", ro = "animation", zl = Symbol("_vtc"), jm = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Um = Tt({}, fm, jm), JS = (e) => (e.displayName = "Transition", e.props = Um, e), Da = JS((e, { slots: t }) => ma(aS, Ym(e), t)), Wa = (e, t = []) => {
  Be(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, $d = (e) => e ? Be(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Ym(e) {
  const t = {};
  for (const D in e) D in jm || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, S = QS(l), m = S && S[0], y = S && S[1], { onBeforeEnter: h, onEnter: w, onEnterCancelled: I, onLeave: V, onLeaveCancelled: x, onBeforeAppear: g = h, onAppear: C = w, onAppearCancelled: k = I } = t, T = (D, M, A, L) => {
    D._enterCancelled = L, xa(D, M ? c : r), xa(D, M ? u : i), A && A();
  }, P = (D, M) => {
    D._isLeaving = false, xa(D, d), xa(D, v), xa(D, f), M && M();
  }, E = (D) => (M, A) => {
    const L = D ? C : w, z = () => T(M, D, A);
    Wa(L, [M, z]), Ld(() => {
      xa(M, D ? s : o), $n(M, D ? c : r), $d(L) || Fd(M, a, m, z);
    });
  };
  return Tt(t, { onBeforeEnter(D) {
    Wa(h, [D]), $n(D, o), $n(D, i);
  }, onBeforeAppear(D) {
    Wa(g, [D]), $n(D, s), $n(D, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(D, M) {
    D._isLeaving = true;
    const A = () => P(D, M);
    $n(D, d), D._enterCancelled ? ($n(D, f), Bs(D)) : (Bs(D), $n(D, f)), Ld(() => {
      D._isLeaving && (xa(D, d), $n(D, v), $d(V) || Fd(D, a, y, A));
    }), Wa(V, [D, A]);
  }, onEnterCancelled(D) {
    T(D, false, void 0, true), Wa(I, [D]);
  }, onAppearCancelled(D) {
    T(D, true, void 0, true), Wa(k, [D]);
  }, onLeaveCancelled(D) {
    P(D), Wa(x, [D]);
  } });
}
function QS(e) {
  if (e == null) return null;
  if (Qe(e)) return [Qr(e.enter), Qr(e.leave)];
  {
    const t = Qr(e);
    return [t, t];
  }
}
function Qr(e) {
  return dp(e);
}
function $n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[zl] || (e[zl] = /* @__PURE__ */ new Set())).add(t);
}
function xa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[zl];
  n && (n.delete(t), n.size || (e[zl] = void 0));
}
function Ld(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ek = 0;
function Fd(e, t, n, a) {
  const l = e._endId = ++ek, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = Gm(e, t);
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
function Gm(e, t) {
  const n = window.getComputedStyle(e), a = (S) => (n[S] || "").split(", "), l = a(`${wa}Delay`), o = a(`${wa}Duration`), i = Od(l, o), r = a(`${ro}Delay`), s = a(`${ro}Duration`), u = Od(r, s);
  let c = null, d = 0, f = 0;
  t === wa ? i > 0 && (c = wa, d = i, f = o.length) : t === ro ? u > 0 && (c = ro, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? wa : ro : null, f = c ? c === wa ? o.length : s.length : 0);
  const v = c === wa && /\b(?:transform|all)(?:,|$)/.test(a(`${wa}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function Od(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Rd(n) + Rd(e[a])));
}
function Rd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bs(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function tk(e, t, n) {
  const a = e[zl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zi = Symbol("_vod"), Km = Symbol("_vsh"), En = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[zi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : so(e, t);
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
  e.style.display = t ? e[zi] : "none", e[Km] = !t;
}
const nk = Symbol(""), ak = /(?:^|;)\s*display\s*:/;
function lk(e, t, n) {
  const a = e.style, l = yt(n);
  let o = false;
  if (n && !l) {
    if (t) if (yt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Ai(a, r, "");
    }
    else for (const i in t) n[i] == null && Ai(a, i, "");
    for (const i in n) i === "display" && (o = true), Ai(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[nk];
      i && (n += ";" + i), a.cssText = n, o = ak.test(n);
    }
  } else t && e.removeAttribute("style");
  zi in e && (e[zi] = o ? a.display : "", e[Km] && (a.display = "none"));
}
const Nd = /\s*!important$/;
function Ai(e, t, n) {
  if (Be(n)) n.forEach((a) => Ai(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = ok(e, t);
    Nd.test(n) ? e.setProperty(vl(a), n.replace(Nd, ""), "important") : e[a] = n;
  }
}
const Hd = ["Webkit", "Moz", "ms"], es = {};
function ok(e, t) {
  const n = es[t];
  if (n) return n;
  let a = tn(t);
  if (a !== "filter" && a in e) return es[t] = a;
  a = Gn(a);
  for (let l = 0; l < Hd.length; l++) {
    const o = Hd[l] + a;
    if (o in e) return es[t] = o;
  }
  return t;
}
const zd = "http://www.w3.org/1999/xlink";
function Wd(e, t, n, a, l, o = bp(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(zd, t.slice(6, t.length)) : e.setAttributeNS(zd, t, n) : n == null || o && !Mv(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : zn(n) ? String(n) : n);
}
function jd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Wm(n) : n);
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
    r === "boolean" ? n = Mv(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
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
function ik(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const Ud = Symbol("_vei");
function rk(e, t, n, a, l = null) {
  const o = e[Ud] || (e[Ud] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = sk(t);
    if (a) {
      const u = o[t] = dk(a, l);
      Al(e, r, u, s);
    } else i && (ik(e, r, i, s), o[t] = void 0);
  }
}
const Yd = /(?:Once|Passive|Capture)$/;
function sk(e) {
  let t;
  if (Yd.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Yd); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : vl(e.slice(2)), t];
}
let ts = 0;
const uk = Promise.resolve(), ck = () => ts || (uk.then(() => ts = 0), ts = Date.now());
function dk(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    Tn(fk(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = ck(), n;
}
function fk(e, t) {
  if (Be(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const Gd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vk = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? tk(e, a, i) : t === "style" ? lk(e, n, a) : nr(t) ? Du(t) || rk(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : mk(e, t, a, i)) ? (jd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !yt(a)) ? jd(e, tn(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), Wd(e, t, a, i));
};
function mk(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && Gd(t) && Re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Gd(t) && yt(n) ? false : t in e;
}
const qm = /* @__PURE__ */ new WeakMap(), Xm = /* @__PURE__ */ new WeakMap(), Wi = Symbol("_moveCb"), Kd = Symbol("_enterCb"), hk = (e) => (delete e.props.mode, e), gk = hk({ name: "TransitionGroup", props: Tt({}, Um, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ti(), a = dm();
  let l, o;
  return cr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!Sk(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(yk), l.forEach(bk);
    const r = l.filter(pk);
    Bs(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      $n(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Wi] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Wi] = null, xa(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Pe(e), r = Ym(i);
    let s = i.tag || ge;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), ll(c, Ao(c, r, a, n)), qm.set(c, Zm(c.el)));
    }
    o = t.default ? Wu(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && ll(c, Ao(c, r, a, n));
    }
    return b(s, null, o);
  };
} }), qu = gk;
function yk(e) {
  const t = e.el;
  t[Wi] && t[Wi](), t[Kd] && t[Kd]();
}
function bk(e) {
  Xm.set(e, Zm(e.el));
}
function pk(e) {
  const t = qm.get(e), n = Xm.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function Zm(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Sk(e, t, n) {
  const a = e.cloneNode(), l = e[zl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = Gm(a);
  return o.removeChild(a), i;
}
const qd = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Be(t) ? (n) => Ii(t, n) : t;
};
function kk(e) {
  e.target.composing = true;
}
function Xd(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function Zd(e, t, n) {
  return t && (e = e.trim()), n && (e = Mu(e)), e;
}
const wk = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[ns] = qd(l);
  const o = a || l.props && l.props.type === "number";
  Al(e, t ? "change" : "input", (i) => {
    i.target.composing || e[ns](Zd(e.value, n, o));
  }), (n || o) && Al(e, "change", () => {
    e.value = Zd(e.value, n, o);
  }), t || (Al(e, "compositionstart", kk), Al(e, "compositionend", Xd), Al(e, "change", Xd));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[ns] = qd(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Mu(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, xk = ["ctrl", "shift", "alt", "meta"], Ck = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => xk.some((n) => e[`${n}Key`] && !t.includes(n)) }, Si = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = Ck[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, _k = Tt({ patchProp: vk }, ZS);
let Jd;
function Jm() {
  return Jd || (Jd = ES(_k));
}
const Qm = ((...e) => {
  Jm().render(...e);
}), Vk = ((...e) => {
  const t = Jm().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = Pk(a);
    if (!l) return;
    const o = t._component;
    !Re(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, Ik(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function Ik(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Pk(e) {
  return yt(e) ? document.querySelector(e) : e;
}
const Qd = () => {
};
function eh(e) {
  const t = `[${e}]`;
  return { debug: Qd, info: Qd, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const ef = 5;
function Tk(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * ef)));
  return e / (l * ef);
}
function th(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function Ak(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
function Dk(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function Ek(e, t) {
  return e * t.gridPitch / t.dpr;
}
const nh = 1, Mk = `gol.gridBlankZones.v${nh}`, Bk = 128;
function $k(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const Lk = /* @__PURE__ */ new Set(["minor", "major", "both"]), Fk = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function as(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function El(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Ok() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Rk(e) {
  return typeof e == "string" && Lk.has(e) ? e : "both";
}
function Nk(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && Fk.has(t.style) ? t.style : "none", a = as(El(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = as(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = as(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, El(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function Hk(e) {
  return typeof e == "boolean" ? e : true;
}
function tf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function ah(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = El(n.x1), l = El(n.y1), o = El(n.x2), i = El(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Ok(), x1: r, y1: u, x2: s, y2: c, mode: Rk(n.mode), edge: Nk(n.edge), enabled: Hk(n.enabled), createdAt: tf(n.createdAt, t), updatedAt: tf(n.updatedAt, t) };
}
function lh(e, t = Date.now()) {
  return $k(e, ah, Bk, t);
}
function ls() {
  return typeof localStorage < "u";
}
function zk(e) {
  return { load() {
    if (!ls()) return [];
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
    if (!ls()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    ls() && localStorage.removeItem(e.key);
  } };
}
const Xu = zk({ key: Mk, version: nh, normalize: lh, itemsKey: "zones" }), Wk = Xu.load, jk = Xu.save, Uk = Xu.clear;
function Yk(e) {
  const t = K(e.storage.load());
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
function Gk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Yk({ storage: { load: Wk, save: jk, clear: Uk }, normalize: lh, normalizeOne: ah, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const nf = eh("WorkerBridge");
function Kk() {
  let e = null;
  const t = K(null), n = /* @__PURE__ */ new Map();
  function a(s, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(s, u) : e.postMessage(s);
    } catch (c) {
      nf.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
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
    const c = new Worker(new URL("/assets/backgroundRenderer-BGvR_rno.js", import.meta.url), { type: "module" });
    c.onmessage = (d) => o(d.data), c.onerror = (d) => {
      nf.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = c, a({ type: "init", canvas: s, cellPx: u }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const os = 5, qk = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), Xk = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function Zk(e, t) {
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
    const c = th(s.clientX, s.clientY, u);
    return { cx: a(c.cx, u), cy: c.cy };
  }
  function o(s, u) {
    return { x1: Math.min(s.cx, u.cx), y1: Math.min(s.cy, u.cy), x2: Math.max(s.cx, u.cx), y2: Math.max(s.cy, u.cy) };
  }
  function i(s, u) {
    const c = (f) => Math.floor(f / os) * os, d = (f) => c(f) + (os - 1);
    return { x1: Math.max(0, Math.min(u.screenCols - 1, c(s.x1))), y1: c(s.y1), x2: Math.max(0, Math.min(u.screenCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(Xk)) return true;
    let u = s;
    for (; u; ) {
      if (qk.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: Dk, cellSpanToCssPx: Ek, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToViewport: a };
}
function Jk() {
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
function Qk(e) {
  const t = /* @__PURE__ */ new Map(), n = K(null), a = K(null), l = K(null);
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
    const w = e.cellToScreen(y.x1, y.y1, h), I = e.cellSpanToCssPx(y.x2 - y.x1 + 1, h), V = e.cellSpanToCssPx(y.y2 - y.y1 + 1, h);
    l.value = { left: `${w.cssX}px`, top: `${w.cssY}px`, width: `${I}px`, height: `${V}px` };
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
    const w = e.pointerToCell(y);
    if (!w) return;
    n.value = h[0], o = w;
    const I = { x1: w.cx, y1: w.cy, x2: w.cx, y2: w.cy };
    h[1].dragMode === "paint" && (i = { ...I }), a.value = I, u(), y.target instanceof Element && y.target.setPointerCapture(y.pointerId), y.preventDefault();
  }
  function v(y) {
    var _a3;
    if (!n.value || !o) return;
    const h = t.get(n.value);
    if (!h) return;
    const w = e.pointerToCell(y), I = e.makeSnapshot();
    if (!(!w || !I)) {
      if (h.dragMode === "paint" && i) i.x1 = Math.min(i.x1, w.cx), i.y1 = Math.min(i.y1, w.cy), i.x2 = Math.max(i.x2, w.cx), i.y2 = Math.max(i.y2, w.cy), a.value = { ...i };
      else {
        const V = e.normalizeRect(o, w);
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
    const w = e.pointerToCell(y), I = e.makeSnapshot();
    let V;
    if (h.dragMode === "paint" && i) w && (i.x1 = Math.min(i.x1, w.cx), i.y1 = Math.min(i.y1, w.cy), i.x2 = Math.max(i.x2, w.cx), i.y2 = Math.max(i.y2, w.cy)), V = i;
    else if (w) {
      const g = e.normalizeRect(o, w);
      V = ((_a3 = h.snapMajor) == null ? void 0 : _a3.call(h)) && I ? e.snapRectToMajor(g, I) : g;
    } else {
      c();
      return;
    }
    h.onCommit(V, I) === false || c();
  }
  function m() {
    return document.addEventListener("pointerdown", f), document.addEventListener("pointermove", v), document.addEventListener("pointerup", S), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", S);
    };
  }
  return { register: r, activeTool: n, previewRect: a, previewStyle: l, cancelActiveDrag: d, anyToolEnabled: s, attachListeners: m };
}
const af = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, lf = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function ja(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Bn([e, t, n], a = 1) {
  return a === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${a.toFixed(3)})`;
}
function is([e, t, n], a = 1, l = 1) {
  const o = t * a;
  return l === 1 ? `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${o.toFixed(4)} ${n.toFixed(2)} / ${l.toFixed(3)})`;
}
const oh = "theme-preference";
function ew() {
  var _a3;
  if (typeof window > "u") return "light";
  const e = (_a3 = window.localStorage) == null ? void 0 : _a3.getItem(oh);
  return e === "light" || e === "dark" || e === "system" ? e : "light";
}
const Bo = K(ew()), ih = K(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    ih.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
ce(Bo, (e) => {
  var _a3;
  typeof window < "u" && ((_a3 = window.localStorage) == null ? void 0 : _a3.setItem(oh, e));
});
const $s = _(() => Bo.value === "light" ? af : Bo.value === "dark" || ih.value ? lf : af);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, a = (l, o) => {
      n.style.setProperty(l, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", a("--theme-surface", Bn(t.surface)), a("--theme-ink", Bn(t.ink)), a("--theme-ink-secondary", Bn(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-ink-tertiary", Bn(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-text-primary", Bn(t.ink)), a("--theme-text-secondary", Bn(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-text-tertiary", Bn(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-grid-minor", Bn(ja(t.surface, t.ink, t.minor_t))), a("--theme-grid-major", Bn(ja(t.surface, t.ink, t.major_t))), a("--theme-grid-border", Bn(ja(t.surface, t.ink, t.border_t))), a("--theme-accent", is(t.accent, t.accent_chroma_scale)), a("--theme-accent-ring", is(t.accent, t.accent_chroma_scale, 0.45)), a("--theme-selection-bg", is(t.accent, t.accent_chroma_scale, 0.2)), a("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
  };
  e($s.value), ce($s, e);
}
function rh() {
  return { preference: Bo, theme: $s, setPreference(e) {
    Bo.value = e;
  } };
}
const tw = { key: 0, class: "zone-preview-text" }, nw = { class: "zone-list" }, aw = { class: "zone-text" }, lw = { class: "zone-coords" }, ow = { class: "zone-actions" }, iw = { key: 0, class: "zone-empty" }, rw = mn({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = K(false), o = K(false), i = K(0), r = K(0), s = K(4), u = K(4), c = K("both"), d = K("none"), f = K(1), v = K(1), S = K(0.6), m = K(2), y = K(false), h = _(() => n.zones.filter((E) => !!E && typeof E.id == "string" && E.id.length > 0 && typeof E.x1 == "number" && typeof E.y1 == "number" && typeof E.x2 == "number" && typeof E.y2 == "number" && typeof E.mode == "string" && !!E.edge && typeof E.edge.style == "string"));
  function w(E) {
    return E.id.slice(0, 6);
  }
  function I() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, v.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, S.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(m.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? y.value : void 0 };
  }
  const V = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], x = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function g() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const E = Date.now();
    a("add-zone", { id: g(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), mode: c.value, edge: I(), enabled: true, createdAt: E, updatedAt: E });
  }
  function k(E) {
    a("update-zone", { ...E, enabled: !E.enabled, updatedAt: Date.now() });
  }
  function T() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: c.value, edge: I() });
  }
  return ce(l, T, { immediate: true }), ce(o, T, { immediate: true }), ce([c, d, f, v, S, m, y], P, { immediate: true }), (E, D) => {
    const M = Ye("v-switch"), A = Ye("v-text-field"), L = Ye("v-col"), z = Ye("v-row"), N = Ye("v-select"), Z = Ye("v-btn"), J = Ye("v-divider");
    return Ae(), ze(ge, null, [b(M, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = (F) => l.value = F), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), b(M, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (F) => o.value = F), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Ae(), ze("div", tw, " Preview: (" + Le(n.previewRect.x1) + "," + Le(n.previewRect.y1) + ") \u2192 (" + Le(n.previewRect.x2) + "," + Le(n.previewRect.y2) + ") ", 1)) : xn("", true), b(z, { dense: "" }, { default: Ee(() => [b(L, { cols: "3" }, { default: Ee(() => [b(A, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (F) => i.value = F), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "3" }, { default: Ee(() => [b(A, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (F) => r.value = F), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "3" }, { default: Ee(() => [b(A, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (F) => s.value = F), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "3" }, { default: Ee(() => [b(A, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (F) => u.value = F), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), b(z, { dense: "", class: "mt-2" }, { default: Ee(() => [b(L, { cols: "6" }, { default: Ee(() => [b(N, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (F) => c.value = F), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "6" }, { default: Ee(() => [b(N, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (F) => d.value = F), items: x, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), b(z, { dense: "", class: "mt-2" }, { default: Ee(() => [b(L, { cols: "6" }, { default: Ee(() => [b(A, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (F) => f.value = F), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(L, { cols: "6" }, { default: Ee(() => [b(A, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = (F) => v.value = F), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Ae(), Hn(z, { key: 1, dense: "", class: "mt-2" }, { default: Ee(() => [b(L, { cols: "12" }, { default: Ee(() => [b(A, { modelValue: S.value, "onUpdate:modelValue": D[10] || (D[10] = (F) => S.value = F), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : xn("", true), d.value === "noted" ? (Ae(), Hn(z, { key: 2, dense: "", class: "mt-2" }, { default: Ee(() => [b(L, { cols: "12" }, { default: Ee(() => [b(A, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = (F) => m.value = F), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : xn("", true), d.value === "bold-major" || d.value === "noted" ? (Ae(), Hn(z, { key: 3, dense: "", class: "mt-1" }, { default: Ee(() => [b(L, { cols: "12" }, { default: Ee(() => [b(M, { modelValue: y.value, "onUpdate:modelValue": D[12] || (D[12] = (F) => y.value = F), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : xn("", true), b(Z, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: Ee(() => [...D[14] || (D[14] = [ut(" Add Zone ", -1)])]), _: 1 }), b(J, { class: "my-3" }), p("div", nw, [(Ae(true), ze(ge, null, Qt(h.value, (F) => (Ae(), ze("div", { key: F.id, class: "zone-row" }, [p("div", aw, [p("div", null, "#" + Le(w(F)) + " \xB7 " + Le(F.mode) + " \xB7 " + Le(F.edge.style), 1), p("div", lw, "(" + Le(F.x1) + "," + Le(F.y1) + ") \u2192 (" + Le(F.x2) + "," + Le(F.y2) + ")", 1)]), p("div", ow, [b(Z, { size: "x-small", variant: "text", onClick: (G) => k(F) }, { default: Ee(() => [ut(Le(F.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), b(Z, { size: "x-small", variant: "text", color: "error", onClick: (G) => a("remove-zone", F.id) }, { default: Ee(() => [...D[15] || (D[15] = [ut("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), h.value.length === 0 ? (Ae(), ze("div", iw, "No zones.")) : xn("", true)]), b(Z, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: h.value.length === 0, onClick: D[13] || (D[13] = (F) => a("clear-zones")) }, { default: Ee(() => [...D[16] || (D[16] = [ut(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, sw = Kn(rw, [["__scopeId", "data-v-223984b2"]]), uw = mn({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e) {
  const t = K("zones"), n = K(false), a = false;
  return (l, o) => {
    const i = Ye("v-btn"), r = Ye("v-card-title"), s = Ye("v-tab"), u = Ye("v-tabs"), c = Ye("v-tabs-window-item"), d = Ye("v-tabs-window"), f = Ye("v-card-text"), v = Ye("v-card");
    return Ue(a) ? (Ae(), ze("aside", { key: 0, class: te(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Ae(), Hn(i, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: o[9] || (o[9] = (S) => n.value = false) }, { default: Ee(() => [...o[13] || (o[13] = [ut(" Grid Tools ", -1)])]), _: 1 })) : (Ae(), Hn(v, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: Ee(() => [b(r, { class: "zone-title" }, { default: Ee(() => [o[11] || (o[11] = p("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), b(i, { size: "x-small", variant: "text", onClick: o[0] || (o[0] = (S) => n.value = true) }, { default: Ee(() => [...o[10] || (o[10] = [ut("Collapse", -1)])]), _: 1 })]), _: 1 }), b(u, { modelValue: t.value, "onUpdate:modelValue": o[1] || (o[1] = (S) => t.value = S), density: "compact", grow: "" }, { default: Ee(() => [b(s, { value: "zones" }, { default: Ee(() => [...o[12] || (o[12] = [ut("Zones", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), b(f, { class: "pt-2" }, { default: Ee(() => [b(d, { modelValue: t.value, "onUpdate:modelValue": o[8] || (o[8] = (S) => t.value = S) }, { default: Ee(() => [b(c, { value: "zones" }, { default: Ee(() => [b(sw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: o[2] || (o[2] = (S) => l.$emit("add-zone", S)), onUpdateZone: o[3] || (o[3] = (S) => l.$emit("update-zone", S)), onRemoveZone: o[4] || (o[4] = (S) => l.$emit("remove-zone", S)), onClearZones: o[5] || (o[5] = (S) => l.$emit("clear-zones")), onToolChange: o[6] || (o[6] = (S) => l.$emit("tool-change", S)), onDraftChange: o[7] || (o[7] = (S) => l.$emit("draft-change", S)) }, null, 8, ["zones", "preview-rect"])]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2)) : xn("", true);
  };
} }), cw = Kn(uw, [["__scopeId", "data-v-f4e0bbcb"]]), rs = 5, dw = 16, fw = 6, vw = 0, mw = 300, hw = 0.3, gw = 0.12, yw = mn({ __name: "AppBackground", setup(e) {
  const t = eh("AppBackground"), n = K(null), a = K(null), l = K(0), o = Kk(), i = Zk(o.gridInfo, l), r = Jk(), s = Qk(i);
  function u(ae) {
    return { ...ae, edge: { ...ae.edge } };
  }
  function c(ae) {
    return ae.map(u);
  }
  const d = Gk({ onSetZones: (ae) => o.post({ type: "set_zones", zones: c(ae) }), onAddZone: (ae) => o.post({ type: "add_zone", zone: u(ae) }), onUpdateZone: (ae) => o.post({ type: "update_zone", zone: u(ae) }), onRemoveZone: (ae) => o.post({ type: "remove_zone", id: ae }), onClearZones: () => o.post({ type: "clear_zones" }) }), f = K(false), v = K(false), S = K({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: m } = rh();
  ce(m, (ae) => {
    o.post({ type: "set_theme", theme: ae });
  });
  function y(ae) {
    const Q = Date.now(), de = S.value;
    return { id: crypto.randomUUID(), x1: ae.x1, y1: ae.y1, x2: ae.x2, y2: ae.y2, mode: de.mode, edge: { ...de.edge }, enabled: true, createdAt: Q, updatedAt: Q };
  }
  s.register("zone", { isEnabled: () => f.value, priority: 1, snapMajor: () => v.value, onCommit(ae) {
    d.addZone(y(ae));
  } });
  function h(ae) {
    d.addZone(ae);
  }
  function w(ae) {
    d.updateZone(ae);
  }
  function I(ae) {
    d.removeZone(ae);
  }
  function V() {
    d.clearZones();
  }
  function x(ae) {
    S.value = ae;
  }
  function g(ae) {
    f.value = ae.enabled, v.value = ae.snapMajor, ae.enabled || s.cancelActiveDrag("zone");
  }
  function C(ae) {
    if (s.anyToolEnabled() || i.isInteractiveTarget(ae.target)) return;
    const Q = i.makeSnapshot();
    if (!Q) return;
    const de = th(ae.clientX, ae.clientY, Q), Ve = Ak(de, Q);
    t.debug("Click \u2192", ae.clientX, ae.clientY, "\u2192 cell", Ve.cx, Ve.cy), o.post({ type: "toggle_cell", cx: Ve.cx, cy: Ve.cy, scrollCanvasPx: Q.scrollCanvasPx });
  }
  let k = 0, T = 0, P = 0, E = 0, D = null, M = null, A = null, L = null, z = null, N = 0, Z = 0;
  function J(ae) {
    const Q = ae.getBoundingClientRect();
    return { width: Math.max(1, Math.round(Q.width * devicePixelRatio)), height: Math.max(1, Math.round(Q.height * devicePixelRatio)) };
  }
  function F(ae) {
    return Tk(ae, dw, devicePixelRatio);
  }
  function G(ae) {
    return Math.round(F(ae) * rs * fw);
  }
  function W(ae, Q, de) {
    ae.style.width = `${(Q / devicePixelRatio).toFixed(2)}px`, ae.style.height = `${(de / devicePixelRatio).toFixed(2)}px`;
  }
  function R(ae) {
    ae.classList.add("app-bg--hidden"), A !== null && clearTimeout(A), A = window.setTimeout(() => {
      A = null, ae.classList.remove("app-bg--hidden");
    }, 120);
  }
  function j(ae, Q, de) {
    P = Math.max(P, de), k = Q, T = P + G(Q), W(ae, k, T), R(ae);
    const Ve = F(Q);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * Ve * rs / devicePixelRatio).toFixed(1)}px`), o.post({ type: "resize", width: k, height: T });
  }
  function ie() {
    L !== null && clearTimeout(L), L = window.setTimeout(() => {
      if (L = null, !a.value || E <= 0) return;
      if (performance.now() - Z < mw) {
        ie();
        return;
      }
      P = E, j(a.value, k, P), E = 0;
    }, vw);
  }
  return Ct(() => {
    const ae = n.value, Q = a.value;
    if (!ae || !Q) return;
    const de = J(ae);
    k = de.width, P = de.height, T = P + G(k), Q.width = k, Q.height = T, W(Q, k, T);
    const Ve = Q.transferControlToOffscreen(), ke = F(k), ye = 0.8 * ke * rs / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${ye.toFixed(1)}px`), o.init(Ve, ke), t.debug("Worker spawned, gridPitch", ke.toFixed(2)), o.on("ready", (X) => {
      t.info(`${X.backend.toUpperCase()} renderer active`), o.post({ type: "set_theme", theme: m.value }), o.post({ type: "set_zones", zones: c(d.zones.value) });
    }), o.on("zones_state", (X) => d.syncFromWorker(X.zones)), o.on("zones_error", (X) => t.error("Zone update rejected:", X.message)), o.on("error", (X) => {
      X.phase === "gpu-init" ? t.debug(`GPU unavailable (${X.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${X.phase}]:`, X.message);
    }), document.addEventListener("click", C), z = s.attachListeners(), D = document.querySelector(".v-main");
    let $ = 0, O = 0;
    r.start(() => {
      o.post({ type: "frame" });
      const X = (D == null ? void 0 : D.scrollTop) || window.scrollY;
      Math.abs(X - N) > 0.5 && (N = X, Z = performance.now()), $ = X * hw * devicePixelRatio, O += ($ - O) * gw, Math.abs(O - l.value) > 0.1 && (l.value = O, o.post({ type: "scroll", scrollY: O }));
    }), M = new ResizeObserver(([X]) => {
      if (!a.value) return;
      const se = Math.round(X.contentRect.width * devicePixelRatio), le = Math.round(X.contentRect.height * devicePixelRatio);
      if (se <= 0 || le <= 0) return;
      const ue = a.value, be = se !== k, fe = le > P, U = le < P;
      if (be) {
        L !== null && (clearTimeout(L), L = null), E = 0, P = le, j(ue, se, le);
        return;
      }
      if (fe) {
        L !== null && (clearTimeout(L), L = null), E = 0, j(ue, se, le);
        return;
      }
      U && (E = le, ie());
    }), M.observe(ae);
  }), dr(() => {
    r.stop(), M == null ? void 0 : M.disconnect(), A !== null && (clearTimeout(A), A = null), L !== null && (clearTimeout(L), L = null), document.removeEventListener("click", C), z == null ? void 0 : z(), o.terminate();
  }), (ae, Q) => (Ae(), ze(ge, null, [p("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [p("canvas", { ref_key: "canvasRef", ref: a, class: "app-bg" }, null, 512)], 512), Ue(s).previewStyle.value ? (Ae(), ze("div", { key: 0, class: "zone-preview-overlay", style: me(Ue(s).previewStyle.value) }, null, 4)) : xn("", true), b(cw, { zones: Ue(d).zones.value, "preview-rect": Ue(s).previewRect.value, onAddZone: h, onUpdateZone: w, onRemoveZone: I, onClearZones: V, onToolChange: g, onDraftChange: x }, null, 8, ["zones", "preview-rect"])], 64));
} }), bw = Kn(yw, [["__scopeId", "data-v-18a8a3b9"]]);
function sh(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ze = typeof window < "u", Zu = Ze && "IntersectionObserver" in window, pw = Ze && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), of = Ze && "EyeDropper" in window, Ju = Ze && "matchMedia" in window && typeof window.matchMedia == "function", Wn = () => Ju && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function rf(e, t, n) {
  Sw(e, t), t.set(e, n);
}
function Sw(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function sf(e, t, n) {
  return e.set(uh(e, t), n), n;
}
function ea(e, t) {
  return e.get(uh(e, t));
}
function uh(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function ch(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ol(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), ch(e, t.split("."), n));
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
  if (Array.isArray(t)) return ch(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function Rn(e) {
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
function Ls(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Qu(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Fs = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function dh(e) {
  return Object.keys(e);
}
function Xa(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Jt(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function Os(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Fe(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const fh = /^on[^a-z]/, ec = (e) => fh.test(e), kw = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], ww = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function xw(e) {
  return e.isComposing && ww.includes(e.key);
}
function qn(e) {
  const [t, n] = Os(e, [fh]), a = Fe(t, kw), [l, o] = Os(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function lt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function vh(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Ue(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Xe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function uf(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function cf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function df(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Cw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function ff(e) {
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
function mh(e) {
  return e.map((t) => t.type === ge ? mh(t.children) : t).flat();
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
class hh {
  constructor(t) {
    rf(this, _l, []), rf(this, Ua, 0), this.size = t;
  }
  get isFull() {
    return ea(_l, this).length === this.size;
  }
  push(t) {
    ea(_l, this)[ea(Ua, this)] = t, sf(Ua, this, (ea(Ua, this) + 1) % this.size);
  }
  values() {
    return ea(_l, this).slice(ea(Ua, this)).concat(ea(_l, this).slice(0, ea(Ua, this)));
  }
  clear() {
    ea(_l, this).length = 0, sf(Ua, this, 0);
  }
}
function _w(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function tc(e) {
  const t = At({});
  ct(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = B(() => t[a]);
  return n;
}
function ji(e, t) {
  return e.includes(t);
}
function gh(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Bt = () => [Function, Array];
function vf(e, t) {
  return t = "on" + Gn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
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
function yh(e, t, n) {
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
    const a = yh(n, t);
    a ? a.focus() : Qa(e, t === "next" ? "first" : "last");
  }
}
function vo(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function mr() {
}
function Wl(e, t) {
  if (!(Ze && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function hr(e) {
  return e.some((t) => Eo(t) ? t.type === Ut ? false : t.type !== ge || hr(t.children) : true) ? e : null;
}
function ki(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function Vw(e, t) {
  if (!Ze || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function Iw(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function $o() {
  const e = re(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => Qu(e.value) }), t;
}
function jl(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Ea(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Ui(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function Pw(e, t, n) {
  const a = new RegExp(`[\\d\\-${Ui(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${Ui(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function Tw(e) {
  const t = {};
  for (const n in e) t[tn(n)] = e[n];
  return t;
}
function Aw(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function mf(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : gt(n) || Ia(n) || Jo(n) ? t(Pe(n)) : Ls(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const bh = ["top", "bottom"], Dw = ["start", "end", "left", "right"];
function Rs(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = ji(bh, n) ? "start" : ji(Dw, n) ? "top" : "center"), { side: Ns(n, t), align: Ns(a, t) };
}
function Ns(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ss(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function us(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function hf(e) {
  return { side: e.align, align: e.side };
}
function gf(e) {
  return ji(bh, e.side) ? "y" : "x";
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
function yf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function ph(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new pn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new pn(e);
}
function Ew(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new pn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new pn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new pn(e);
}
function nc(e) {
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
const Di = /* @__PURE__ */ new WeakMap();
function Mw(e, t) {
  Object.keys(t).forEach((n) => {
    if (ec(n)) {
      const a = gh(n), l = Di.get(e);
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
function Bw(e, t) {
  Object.keys(t).forEach((n) => {
    if (ec(n)) {
      const a = gh(n), l = Di.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Vl = 2.4, bf = 0.2126729, pf = 0.7151522, Sf = 0.072175, $w = 0.55, Lw = 0.58, Fw = 0.57, Ow = 0.62, wi = 0.03, kf = 1.45, Rw = 5e-4, Nw = 1.25, Hw = 1.25, wf = 0.078, xf = 12.82051282051282, xi = 0.06, Cf = 1e-3;
function _f(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * bf + a * pf + l * Sf, u = o * bf + i * pf + r * Sf;
  if (s <= wi && (s += (wi - s) ** kf), u <= wi && (u += (wi - u) ** kf), Math.abs(u - s) < Rw) return 0;
  let c;
  if (u > s) {
    const d = (u ** $w - s ** Lw) * Nw;
    c = d < Cf ? 0 : d < wf ? d - d * xf * xi : d - xi;
  } else {
    const d = (u ** Ow - s ** Fw) * Hw;
    c = d > -Cf ? 0 : d > -wf ? d - d * xf * xi : d + xi;
  }
  return c * 100;
}
const Yi = 0.20689655172413793, zw = (e) => e > Yi ** 3 ? Math.cbrt(e) : e / (3 * Yi ** 2) + 4 / 29, Ww = (e) => e > Yi ? e ** 3 : 3 * Yi ** 2 * (e - 4 / 29);
function Sh(e) {
  const t = zw, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function kh(e) {
  const t = Ww, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const jw = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Uw = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Yw = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Gw = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function wh(e) {
  const t = Array(3), n = Uw, a = jw;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Xe(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function ac(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = Gw, i = Yw;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Hs(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Kw(e) {
  return Hs(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Vf = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, qw = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => If({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => If({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => jn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => jn({ h: e, s: t, v: n, a }) };
function un(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Vf.test(e)) {
    const { groups: t } = e.match(Vf), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return qw[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Vh(t);
  } else if (typeof e == "object") {
    if (Xa(e, ["r", "g", "b"])) return e;
    if (Xa(e, ["h", "s", "l"])) return jn(lc(e));
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
function If(e) {
  return jn(lc(e));
}
function li(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function zs(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function lc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function xh(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Ch(e) {
  return xh(jn(e));
}
function Ci(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function _h(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[Ci(t), Ci(n), Ci(a), l !== void 0 ? Ci(Math.round(l * 255)) : ""].join("")}`;
}
function Vh(e) {
  e = Zw(e);
  let [t, n, a, l] = Cw(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function Xw(e) {
  const t = Vh(e);
  return li(t);
}
function Ih(e) {
  return _h(jn(e));
}
function Zw(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = cf(cf(e, 6), 8, "F")), e;
}
function Jw(e, t) {
  const n = Sh(ac(e));
  return n[0] = n[0] + t * 10, wh(kh(n));
}
function Qw(e, t) {
  const n = Sh(ac(e));
  return n[0] = n[0] - t * 10, wh(kh(n));
}
function Ws(e) {
  const t = un(e);
  return ac(t)[1];
}
function e0(e, t) {
  const n = Ws(e), a = Ws(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function Ph(e) {
  const t = Math.abs(_f(un(0), un(e)));
  return Math.abs(_f(un(16777215), un(e))) > Math.min(t, 50) ? "#fff" : "#000";
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
function t0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : St("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Ul = Symbol.for("vuetify:defaults");
function n0(e) {
  return K(e);
}
function oc() {
  const e = He(Ul);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function mt(e, t) {
  const n = oc(), a = K(e), l = _(() => {
    if (Ue(t == null ? void 0 : t.disabled)) return n.value;
    const i = Ue(t == null ? void 0 : t.scoped), r = Ue(t == null ? void 0 : t.reset), s = Ue(t == null ? void 0 : t.root);
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
  return it(Ul, l), l;
}
function a0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Ja(t)] < "u");
}
function l0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oc();
  const a = St("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (a0(a.vnode, u)) return c;
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
    const s = t0(Ul, a);
    it(Ul, _(() => i.value ? Ot((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function Kt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return Jt(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = oc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = l0(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? Kt : mn)(t);
}
function o0(e, t) {
  return t.props = e, t;
}
function ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({ name: n ?? Gn(tn(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...pe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return ma(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function i0(e, t, n, a) {
  if (!n || Ea(e) || Ea(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function r0(e, t, n) {
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
  const l = r0(e, t, n);
  return l || (i0(e, t, n, true), a.every((o) => Dt(e[o], t[o], n)));
}
function Th(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Lo = "cubic-bezier(0.4, 0, 0.2, 1)", Pf = "cubic-bezier(0.0, 0, 0.2, 1)", Tf = "cubic-bezier(0.4, 0, 1, 1)", s0 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function cn(e, t, n) {
  return Object.keys(e).filter((a) => ec(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ai(e[l], o, n(o)), a), {});
}
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? u0(e) : ic(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Gi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (ic(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function ic(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function u0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function c0(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function d0(e) {
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
function f0(e, t) {
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
const Ce = [String, Function, Object, Array], js = Symbol.for("vuetify:icons"), yr = H({ icon: { type: Ce }, tag: { type: [String, Object, Function], required: true } }, "icon"), Us = ee()({ name: "VComponentIcon", props: yr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return b(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? b(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), rc = Kt({ name: "VSvgIcon", inheritAttrs: false, props: yr(), setup(e, t) {
  let { attrs: n } = t;
  return () => b(e.tag, Y(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? p("path", { d: a[0], "fill-opacity": a[1] }, null) : p("path", { d: a }, null)) : p("path", { d: e.icon }, null)])] });
} }), v0 = Kt({ name: "VLigatureIcon", props: yr(), setup(e) {
  return () => b(e.tag, null, { default: () => [e.icon] });
} }), sc = Kt({ name: "VClassIcon", props: yr(), setup(e) {
  return () => b(e.tag, { class: te(e.icon) }, null);
} }), m0 = (e) => {
  const t = He(js);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const a = tt(e);
    if (!a) return { component: Us };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: rc, icon: l };
    if (typeof l != "string") return { component: Us, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, h0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, g0 = { component: (e) => ma(sc, { ...e, class: "mdi" }) };
function y0() {
  return { svg: { component: rc }, class: { component: sc } };
}
function b0(e) {
  const t = y0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = g0), Ot({ defaultSet: n, sets: t, aliases: { ...h0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function $t(e, t) {
  let n;
  function a() {
    n = Nl(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), a();
    }) : t());
  }
  ce(e, (l) => {
    l && !n ? a() : l || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function xe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = St("useProxiedModel"), i = K(e[t] !== void 0 ? e[t] : n), r = Ja(t), u = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  $t(() => !u.value, () => {
    ce(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = _({ get() {
    const d = e[t];
    return a(u.value ? d : i.value);
  }, set(d) {
    const f = l(d), v = Pe(u.value ? e[t] : i.value);
    v === f || a(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const p0 = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Af = "$vuetify.", Df = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Ah = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Af)) return Df(a, o);
  const r = a.replace(Af, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ol(s, r, null);
  return c || (`${a}${e.value}`, c = ol(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Df(c, o);
};
function uc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Dh(e, t) {
  return uc(e, t)(0.1).includes(",") ? "," : ".";
}
function cs(e, t, n) {
  const a = xe(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ce(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Eh(e) {
  return (t) => {
    const n = cs(t, "locale", e.current), a = cs(t, "fallback", e.fallback), l = cs(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => Dh(n, a)), t: Ah(n, a, l), n: uc(n, a), provide: Eh({ current: n, fallback: a, messages: l }) };
  };
}
function S0(e) {
  const t = re((e == null ? void 0 : e.locale) ?? "en"), n = re((e == null ? void 0 : e.fallback) ?? "en"), a = K({ en: p0, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Dh(t, n)), t: Ah(t, n, a), n: uc(t, n), provide: Eh({ current: t, fallback: n, messages: a }) };
}
const Yl = Symbol.for("vuetify:locale");
function k0(e) {
  return e.name != null;
}
function w0(e) {
  const t = (e == null ? void 0 : e.adapter) && k0(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : S0(e), n = C0(t, e);
  return { ...t, ...n };
}
function Je() {
  const e = He(Yl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Mh(e) {
  const t = He(Yl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = _0(n, t.rtl, e), l = { ...n, ...a };
  return it(Yl, l), l;
}
function x0() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function C0(e, t) {
  const n = K((t == null ? void 0 : t.rtl) ?? x0()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function _0(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function _t() {
  const e = He(Yl);
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
function V0(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Bh(e), i = $h(e), r = n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
function I0(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function Bh(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function $h(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function P0(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const T0 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Lh(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (T0.test(e)) return P0(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Ef = new Date(2e3, 0, 2);
function A0(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = oi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Rn(7).map((l) => {
    const o = new Date(Ef);
    return o.setDate(Ef.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function D0(e, t, n, a) {
  const l = Lh(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function E0(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = df(String(n.getMonth() + 1), 2, "0"), o = df(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function M0(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function B0(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function $0(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function el(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function L0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function F0(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Fo(e) {
  return e.getFullYear();
}
function O0(e) {
  return e.getMonth();
}
function R0(e, t, n, a) {
  const l = oi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? N0(e, t, o, a) : H0(e, t, o, i);
}
function N0(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = el(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Fo(o);
  s < Fo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? el(u, -c) : el(u, 7 - c);
  return 1 + qi(cc(o), Oo(d), "weeks");
}
function H0(e, t, n, a) {
  const l = Co(e, t, n), o = el(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - qi(f, Co(f, t, n), "days");
  }
  let r = Fo(l);
  r < Fo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? el(s, u - 7) : el(s, u);
  return 1 + qi(cc(l), Oo(c), "weeks");
}
function z0(e) {
  return e.getDate();
}
function W0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function j0(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function U0(e) {
  return e.getHours();
}
function Y0(e) {
  return e.getMinutes();
}
function G0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function K0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function q0(e, t) {
  return Ki(e, t[0]) && J0(e, t[1]);
}
function X0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ki(e, t) {
  return e.getTime() > t.getTime();
}
function Z0(e, t) {
  return Ki(Oo(e), Oo(t));
}
function J0(e, t) {
  return e.getTime() < t.getTime();
}
function Mf(e, t) {
  return e.getTime() === t.getTime();
}
function Q0(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function ex(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function tx(e, t) {
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
function nx(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function ax(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function lx(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function ox(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function ix(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Oo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function cc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class rx {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Lh(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return E0(this, t);
  }
  parseISO(t) {
    return M0(t);
  }
  addMinutes(t, n) {
    return B0(t, n);
  }
  addHours(t, n) {
    return $0(t, n);
  }
  addDays(t, n) {
    return el(t, n);
  }
  addWeeks(t, n) {
    return L0(t, n);
  }
  addMonths(t, n) {
    return F0(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return V0(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return I0(t, this.locale);
  }
  startOfMonth(t) {
    return Bh(t);
  }
  endOfMonth(t) {
    return $h(t);
  }
  format(t, n) {
    return D0(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Mf(t, n);
  }
  isValid(t) {
    return X0(t);
  }
  isWithinRange(t, n) {
    return q0(t, n);
  }
  isAfter(t, n) {
    return Ki(t, n);
  }
  isAfterDay(t, n) {
    return Z0(t, n);
  }
  isBefore(t, n) {
    return !Ki(t, n) && !Mf(t, n);
  }
  isSameDay(t, n) {
    return Q0(t, n);
  }
  isSameMonth(t, n) {
    return ex(t, n);
  }
  isSameYear(t, n) {
    return tx(t, n);
  }
  setMinutes(t, n) {
    return ax(t, n);
  }
  setHours(t, n) {
    return nx(t, n);
  }
  setMonth(t, n) {
    return lx(t, n);
  }
  setDate(t, n) {
    return ox(t, n);
  }
  setYear(t, n) {
    return ix(t, n);
  }
  getDiff(t, n, a) {
    return qi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return A0(this.locale, a, n);
  }
  getYear(t) {
    return Fo(t);
  }
  getMonth(t) {
    return O0(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return R0(t, this.locale, l, o);
  }
  getDate(t) {
    return z0(t);
  }
  getNextMonth(t) {
    return W0(t);
  }
  getPreviousMonth(t) {
    return j0(t);
  }
  getHours(t) {
    return U0(t);
  }
  getMinutes(t) {
    return Y0(t);
  }
  startOfDay(t) {
    return Oo(t);
  }
  endOfDay(t) {
    return cc(t);
  }
  startOfYear(t) {
    return G0(t);
  }
  endOfYear(t) {
    return K0(t);
  }
}
const Fh = Symbol.for("vuetify:date-options"), Bf = Symbol.for("vuetify:date-adapter");
function sx(e, t) {
  const n = Ot({ adapter: rx, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Rh(n, t) };
}
function ux(e, t, n) {
  const a = Oh(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Oh(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Rh(e, t) {
  const n = At(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return ce(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function ml() {
  const e = He(Fh);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = Je();
  return Rh(e, t);
}
const br = ["sm", "md", "lg", "xl", "xxl"], Ys = Symbol.for("vuetify:display"), $f = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, cx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $f;
  return Ot($f, e);
};
function Lf(e) {
  return Ze && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Ff(e) {
  return Ze && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Of(e) {
  const t = Ze && !e ? window.navigator.userAgent : "ssr";
  function n(S) {
    return !!t.match(S);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: pw, ssr: t === "ssr" };
}
function dx(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = cx(e), l = re(Ff(t)), o = re(Of(t)), i = At({}), r = re(Lf(t));
  function s() {
    l.value = Ff(), r.value = Lf();
  }
  function u() {
    s(), o.value = Of();
  }
  return ct(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), S = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, y = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : S ? "xl" : "xxl", h = typeof a == "number" ? a : n[a], w = r.value < h;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = S, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || S || m), i.mdAndDown = !(v || S || m), i.lgAndDown = !(S || m), i.xlAndDown = !m, i.name = y, i.height = l.value, i.width = r.value, i.mobile = w, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), Ze && (window.addEventListener("resize", s, { passive: true }), bt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...Zl(i), update: u, ssr: !!t };
}
const hl = H({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function nn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = He(Ys);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const Nh = Symbol.for("vuetify:goto");
function Hh() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: s0 };
}
function fx(e) {
  return dc(e) ?? (document.scrollingElement || document.body);
}
function dc(e) {
  return typeof e == "string" ? document.querySelector(e) : Qu(e);
}
function ds(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = dc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function vx(e, t) {
  return { rtl: t.isRtl, options: Ot(Hh(), e) };
}
async function Rf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Ot((a == null ? void 0 : a.options) ?? Hh(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : dc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : fx(o.container), u = Wn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = ds(r, n, i);
  else if (c = ds(r, n, i) - ds(s, n, i), o.layout) {
    const S = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    S && (c -= parseInt(S, 10));
  }
  c += o.offset, c = hx(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function S(m) {
    const h = (m - f) / o.duration, w = Math.floor(d + (c - d) * u(Xe(h, 0, 1)));
    if (s[l] = w, h >= 1 && Math.abs(w - s[l]) < 10) return v(c);
    if (h > 2) return v(s[l]);
    requestAnimationFrame(S);
  }));
}
function mx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = He(Nh), { isRtl: n } = _t();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Rf(o, Ot(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Rf(o, Ot(e, i), true, a), l;
}
function hx(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Xe(t, s, u);
}
const Ro = Symbol.for("vuetify:theme"), We = H({ theme: String }, "theme");
function Nf() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function gx() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nf();
  const t = Nf();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Ot(o, l);
  }
  return Ot(t, { ...e, themes: n });
}
function Ya(e, t, n, a) {
  e.push(`${Sx(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function Hf(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = un(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${Ws(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? un(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function yx(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? Jw : Qw;
    for (const i of Rn(n[l], 1)) a[`${e}-${l}-${i}`] = _h(o(un(t), i));
  }
  return a;
}
function bx(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...yx(a, l, t) });
  }
  return n;
}
function px(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = un(e[n]);
    t[a] = Ph(l);
  }
  return t;
}
function Sx(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function kx(e, t, n) {
  const a = wx(e, t);
  a && (a.innerHTML = n);
}
function wx(e, t) {
  if (!Ze) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function xx(e) {
  const t = gx(e), n = re(t.defaultTheme), a = K(t.themes), l = re("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = _(() => {
    const h = {};
    for (const [w, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...bx(I.colors, t.variations) };
      h[w] = { ...I, colors: { ...V, ...px(V) } };
    }
    return h;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = _(() => {
    var _a3;
    const h = [], w = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && Ya(h, ":root", ["color-scheme: dark"], t.scope), Ya(h, ":root", Hf(r.value, t.prefix), t.scope);
    for (const [x, g] of Object.entries(i.value)) Ya(h, `.${t.prefix}theme--${x}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...Hf(g, t.prefix)], t.scope);
    if (t.utilities) {
      const x = [], g = [], C = new Set(Object.values(i.value).flatMap((k) => Object.keys(k.colors)));
      for (const k of C) k.startsWith("on-") ? Ya(g, `.${k}`, [`color: rgb(var(--${t.prefix}theme-${k}))${w}`], t.scope) : (Ya(x, `.${I}bg-${k}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${k}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${k}))${w}`, `color: rgb(var(--${t.prefix}theme-on-${k}))${w}`], t.scope), Ya(g, `.${I}text-${k}`, [`color: rgb(var(--${t.prefix}theme-${k}))${w}`], t.scope), Ya(g, `.${I}border-${k}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${k})`], t.scope));
      t.layers ? h.push(`@layer background {
`, ...x.map((k) => `  ${k}`), `}
`, `@layer foreground {
`, ...g.map((k) => `  ${k}`), `}
`) : h.push(...x, ...g);
    }
    let V = h.map((x, g) => g === 0 ? x : `    ${x}`).join("");
    return t.layers && (V = `@layer vuetify.theme {
` + h.map((x) => `  ${x}`).join("") + `
}`), V;
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
  if (Ju) {
    let w = function() {
      l.value = h.matches ? "dark" : "light";
    };
    const h = window.matchMedia("(prefers-color-scheme: dark)");
    w(), h.addEventListener("change", w, { passive: true }), Fv() && bt(() => {
      h.removeEventListener("change", w);
    });
  }
  function f(h) {
    if (t.isDisabled) return;
    const w = h._context.provides.usehead;
    if (w) {
      let I = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (w.push) {
        const V = w.push(I);
        Ze && ce(u, () => {
          V.patch(I);
        });
      } else Ze ? (w.addHeadObjs(B(I)), ct(() => w.updateDOM())) : w.addHeadObjs(I());
    } else {
      let I = function() {
        kx(t.stylesheetId, t.cspNonce, u.value);
      };
      Ze ? ce(u, I, { immediate: true }) : I();
    }
  }
  function v(h) {
    h !== "system" && !d.value.includes(h) || (o.value = h);
  }
  function S() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const w = h.indexOf(o.value), I = w === -1 ? 0 : (w + 1) % h.length;
    v(h[I]);
  }
  function m() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    S(h);
  }
  const y = new Proxy(o, { get(h, w) {
    return Reflect.get(h, w);
  }, set(h, w, I) {
    return w === "value" && sh(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(h, w, I);
  } });
  return { install: f, change: v, cycle: S, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: y, current: r } };
}
function Ke(e) {
  St("provideTheme");
  const t = He(Ro, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return it(Ro, o), o;
}
function pr() {
  St("useTheme");
  const e = He(Ro, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = $o(), a = K();
  if (Ze) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    Nt(() => {
      l.disconnect();
    }), ce(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: al(a) };
}
const No = Symbol.for("vuetify:layout"), zh = Symbol.for("vuetify:layout-item"), zf = 1e3, Wh = H({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), gl = H({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function jh() {
  const e = He(No);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function yl(e) {
  const t = He(No);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Mt()}`, a = St("useLayoutItem");
  it(zh, { id: n });
  const l = re(false);
  ju(() => l.value = true), ym(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return Nt(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const Cx = (e, t, n, a) => {
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
function Uh(e) {
  const t = He(No, null), n = _(() => t ? t.rootZIndex.value - 100 : zf), a = K([]), l = At(/* @__PURE__ */ new Map()), o = At(/* @__PURE__ */ new Map()), i = At(/* @__PURE__ */ new Map()), r = At(/* @__PURE__ */ new Map()), s = At(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = Sn(), d = _(() => {
    const g = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const k of C.filter((T) => T.includes(":"))) {
      const [T, P] = k.split(":");
      if (!a.value.includes(T) || !a.value.includes(P)) continue;
      const E = l.get(T), D = l.get(P), M = o.get(T), A = o.get(P);
      !E || !D || !M || !A || (g.set(P, { position: E.value, amount: parseInt(M.value, 10) }), g.set(T, { position: D.value, amount: -parseInt(A.value, 10) }));
    }
    return g;
  }), f = _(() => {
    const g = [...new Set([...i.values()].map((k) => k.value))].sort((k, T) => k - T), C = [];
    for (const k of g) {
      const T = a.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === k;
      });
      C.push(...T);
    }
    return Cx(C, l, o, r);
  }), v = _(() => !Array.from(s.values()).some((g) => g.value)), S = _(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": ve(S.value.left), "--v-layout-right": ve(S.value.right), "--v-layout-top": ve(S.value.top), "--v-layout-bottom": ve(S.value.bottom), ...v.value ? void 0 : { transition: "none" } })), y = _(() => f.value.slice(1).map((g, C) => {
    let { id: k } = g;
    const { layer: T } = f.value[C], P = o.get(k), E = l.get(k);
    return { id: k, ...T, size: Number(P.value), position: E.value };
  })), h = (g) => y.value.find((C) => C.id === g), w = St("createLayout"), I = re(false);
  return Ct(() => {
    I.value = true;
  }), it(No, { register: (g, C) => {
    let { id: k, order: T, position: P, layoutSize: E, elementSize: D, active: M, disableTransitions: A, absolute: L } = C;
    i.set(k, T), l.set(k, P), o.set(k, E), r.set(k, M), A && s.set(k, A);
    const N = Ml(zh, w == null ? void 0 : w.vnode).indexOf(g);
    N > -1 ? a.value.splice(N, 0, k) : a.value.push(k);
    const Z = _(() => y.value.findIndex((W) => W.id === k)), J = _(() => n.value + f.value.length * 2 - Z.value * 2), F = _(() => {
      const W = P.value === "left" || P.value === "right", R = P.value === "right", j = P.value === "bottom", ie = D.value ?? E.value, ae = ie === 0 ? "%" : "px", Q = { [P.value]: 0, zIndex: J.value, transform: `translate${W ? "X" : "Y"}(${(M.value ? 0 : -(ie === 0 ? 100 : ie)) * (R || j ? -1 : 1)}${ae})`, position: L.value || n.value !== zf ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!I.value) return Q;
      const de = y.value[Z.value], Ve = d.value.get(k);
      return Ve && (de[Ve.position] += Ve.amount), { ...Q, height: W ? `calc(100% - ${de.top}px - ${de.bottom}px)` : D.value ? `${D.value}px` : void 0, left: R ? void 0 : `${de.left}px`, right: R ? `${de.right}px` : void 0, top: P.value !== "bottom" ? `${de.top}px` : void 0, bottom: P.value !== "top" ? `${de.bottom}px` : void 0, width: W ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${de.left}px - ${de.right}px)` };
    }), G = _(() => ({ zIndex: J.value - 1 }));
    return { layoutItemStyles: F, layoutItemScrimStyles: G, zIndex: J };
  }, unregister: (g) => {
    i.delete(g), l.delete(g), o.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((C) => C !== g);
  }, mainRect: S, mainStyles: m, getLayoutItem: h, items: y, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: y, layoutRect: c, layoutRef: u };
}
const _x = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function Wf(e) {
  const t = e.toLowerCase();
  return _x[t] || t;
}
function Yh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(Wf(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [Wf(e)], separators: o } : { keys: l, separators: o };
}
function Vx(e) {
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
  return i.every((u) => Yh(u).keys.length > 0) ? i : [];
}
function Gh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Ot(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Nl();
  return r.run(() => {
    const s = n0(a.defaults), u = dx(a.display, a.ssr), c = xx(a.theme), d = b0(a.icons), f = w0(a.locale), v = sx(a.date, f), S = vx(a.goTo, f);
    function m(h) {
      for (const I in i) h.directive(I, i[I]);
      for (const I in o) h.component(I, o[I]);
      for (const I in l) h.component(I, Kt({ ...l[I], name: I, aliasName: l[I].name }));
      const w = Nl();
      if (w.run(() => {
        c.install(h);
      }), h.onUnmount(() => w.stop()), h.provide(Ul, s), h.provide(Ys, u), h.provide(Ro, c), h.provide(js, d), h.provide(Yl, f), h.provide(Fh, v.options), h.provide(Bf, v.instance), h.provide(Nh, S), Ze && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
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
        return At({ defaults: Il.call(this, Ul), display: Il.call(this, Ys), theme: Il.call(this, Ro), icons: Il.call(this, js), locale: Il.call(this, Yl), date: Il.call(this, Bf) });
      } } });
    }
    function y() {
      r.stop();
    }
    return { install: m, unmount: y, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: S };
  });
}
const Ix = "3.12.1";
Gh.version = Ix;
function Il(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const Px = mn({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = rh();
  return (n, a) => {
    const l = Ye("v-icon"), o = Ye("v-tooltip"), i = Ye("v-btn"), r = Ye("v-btn-toggle");
    return Ae(), Hn(r, { modelValue: Ue(t), "onUpdate:modelValue": a[0] || (a[0] = (s) => gt(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Ee(() => [b(i, { value: "light", icon: "mdi-weather-sunny", size: "small" }, { default: Ee(() => [b(l, null, { default: Ee(() => [...a[1] || (a[1] = [ut("mdi-weather-sunny", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }), b(i, { value: "system", icon: "mdi-theme-light-dark", size: "small" }, { default: Ee(() => [b(l, null, { default: Ee(() => [...a[2] || (a[2] = [ut("mdi-theme-light-dark", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }), b(i, { value: "dark", icon: "mdi-weather-night", size: "small" }, { default: Ee(() => [b(l, null, { default: Ee(() => [...a[3] || (a[3] = [ut("mdi-weather-night", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 })]), _: 1 }, 8, ["modelValue"]);
  };
} }), jf = Kn(Px, [["__scopeId", "data-v-c9886728"]]), Tx = mn({ __name: "AppHeader", setup(e) {
  const t = [{ label: "Demos", href: "#projects" }, { label: "Resume", href: "#resume" }, { label: "Contact", href: "#contact" }], { smAndDown: n } = nn(), a = K(false);
  return (l, o) => {
    const i = Ye("v-app-bar-title"), r = Ye("v-btn"), s = Ye("v-list-item"), u = Ye("v-list"), c = Ye("v-menu"), d = Ye("v-app-bar");
    return Ae(), Hn(d, { elevation: "0", color: "background", border: "b" }, { append: Ee(() => [Ue(n) ? (Ae(), ze(ge, { key: 0 }, [b(jf), b(c, { modelValue: a.value, "onUpdate:modelValue": o[1] || (o[1] = (f) => a.value = f), location: "bottom end", offset: "10" }, { activator: Ee(({ props: f }) => [b(r, Y(f, { icon: "mdi-menu", variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16)]), default: Ee(() => [b(u, { class: "header-menu-list", density: "compact" }, { default: Ee(() => [(Ae(), ze(ge, null, Qt(t, (f) => b(s, { key: f.label, href: f.href, title: f.label, onClick: o[0] || (o[0] = (v) => a.value = false) }, null, 8, ["href", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (Ae(), ze(ge, { key: 1 }, [(Ae(), ze(ge, null, Qt(t, (f) => b(r, { key: f.label, href: f.href, variant: "text", size: "default", class: "nav-ink" }, { default: Ee(() => [ut(Le(f.label), 1)]), _: 2 }, 1032, ["href"])), 64)), b(jf)], 64))]), default: Ee(() => [b(i, { class: "header-title" }, { default: Ee(() => [...o[2] || (o[2] = [p("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 });
  };
} }), Ax = { class: "text-medium-emphasis text-caption" }, Dx = mn({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = Ye("v-footer");
    return Ae(), Hn(l, { color: "background", border: "t", class: "app-footer justify-center" }, { default: Ee(() => [p("span", Ax, " \xA9 " + Le(Ue(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), Ex = Kn(Dx, [["__scopeId", "data-v-ddd3c1d7"]]), wn = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, Kh = [{ label: "Location", icon: "mdi-map-marker-outline", href: "https://maps.google.com/?q=Bentonville,+AR", display: wn.location }, { label: "Email", icon: "mdi-email-outline", href: `mailto:${wn.email}`, display: wn.email }, { label: "Phone", icon: "mdi-phone-outline", href: `tel:${wn.phone.replace(/[^\d+]/g, "")}`, display: wn.phone }, { label: "GitHub", icon: "mdi-github", href: wn.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: "mdi-linkedin", href: wn.linkedin, display: "bits-for-bread" }], Mx = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], Bx = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], $x = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], Lx = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], Fx = { id: "hero", class: "hero-section" }, Ox = { class: "hero-frame glass-panel glass-panel--strong" }, Rx = { class: "hero-main" }, Nx = { class: "hero-kicker glass-chip section-kicker" }, Hx = { class: "hero-name section-heading" }, zx = { class: "hero-tagline" }, Wx = { class: "hero-bio" }, jx = { class: "hero-actions" }, Ux = { href: "#projects", class: "hero-link hero-link--primary" }, Yx = { class: "hero-rail" }, Gx = { class: "hero-note quiet-sheet" }, Kx = { class: "skills-block" }, qx = { class: "skill-label" }, Xx = { class: "skill-items" }, Zx = { class: "hero-note quiet-sheet" }, Jx = { class: "hero-links" }, Qx = ["href"], eC = mn({ __name: "HeroSection", setup(e) {
  const t = Kh.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, a) => {
    const l = Ye("v-icon"), o = Ye("v-container");
    return Ae(), ze("section", Fx, [b(o, { class: "hero-container" }, { default: Ee(() => [p("div", Ox, [p("div", Rx, [p("span", Nx, [b(l, { icon: "mdi-map-marker-outline", class: "hero-location-icon" }), ut(Le(Ue(wn).location), 1)]), p("h1", Hx, Le(Ue(wn).name), 1), p("p", zx, Le(Ue(wn).tagline), 1), p("p", Wx, Le(Ue(wn).bio), 1), p("div", jx, [p("a", Ux, [a[0] || (a[0] = ut(" View selected work ", -1)), b(l, { icon: "mdi-arrow-right", class: "hero-link-icon" })]), a[1] || (a[1] = p("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), p("aside", Yx, [p("section", Gx, [a[2] || (a[2] = p("p", { class: "hero-note-label" }, "Capabilities", -1)), p("div", Kx, [(Ae(true), ze(ge, null, Qt(Ue(Mx), (i) => (Ae(), ze("div", { key: i.label, class: "skill-group" }, [p("span", qx, Le(i.label), 1), p("span", Xx, Le(i.items.join("  \xB7  ")), 1)]))), 128))])]), p("section", Zx, [a[3] || (a[3] = p("p", { class: "hero-note-label" }, "Elsewhere", -1)), p("div", Jx, [(Ae(true), ze(ge, null, Qt(Ue(t), (i) => (Ae(), ze("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [b(l, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), p("span", null, Le(i.display ?? i.label), 1)], 8, Qx))), 128))])])])])]), _: 1 })]);
  };
} }), tC = Kn(eC, [["__scopeId", "data-v-156c5ed8"]]), Gs = { demo: { ariaLabel: "Live demo", icon: "mdi-play-circle-outline", label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: "mdi-github", label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: "mdi-text-box-outline", label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: "mdi-play-circle-outline", label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: "mdi-file-document-outline", label: "Docs", priority: 4 } };
function nC(e, t) {
  return Gs[e].priority - Gs[t].priority;
}
function aC(e) {
  return [...e.links ?? []].sort((t, n) => nC(t.kind, n.kind)).map((t) => ({ ...t, ...Gs[t.kind] }));
}
function Uf(e, t) {
  const n = aC(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const lC = { id: "projects", class: "demos-section" }, oC = { key: 0, class: "project-feature glass-panel" }, iC = { class: "project-feature-body" }, rC = { class: "project-feature-title" }, sC = { class: "project-feature-blurb" }, uC = { class: "project-feature-tech" }, cC = { class: "project-feature-actions" }, dC = ["href", "aria-label"], fC = { class: "project-index" }, vC = { class: "project-item-head" }, mC = { class: "project-item-title" }, hC = { key: 0, class: "project-item-links", "aria-label": "Project links" }, gC = ["href", "aria-label"], yC = { class: "project-item-blurb" }, bC = { class: "project-item-tech" }, pC = mn({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = Bx, a = t ? { ...t, visibleLinks: Uf(t, "featured") } : null, l = n.map((o) => ({ ...o, visibleLinks: Uf(o, "compact") }));
  return (o, i) => {
    const r = Ye("v-icon"), s = Ye("v-tooltip"), u = Ye("v-container");
    return Ae(), ze("section", lC, [b(u, { class: "projects-container" }, { default: Ee(() => [i[1] || (i[1] = p("div", { class: "projects-head" }, [p("div", { class: "projects-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Selected work"), p("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), p("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), Ue(a) ? (Ae(), ze("article", oC, [p("div", iC, [i[0] || (i[0] = p("span", { class: "project-feature-label" }, "Featured project", -1)), p("h3", rC, Le(Ue(a).title), 1), p("p", sC, Le(Ue(a).blurb), 1), p("div", uC, [(Ae(true), ze(ge, null, Qt(Ue(a).tech, (c) => (Ae(), ze("span", { key: c, class: "project-tech-tag" }, Le(c), 1))), 128))])]), p("div", cC, [(Ae(true), ze(ge, null, Qt(Ue(a).visibleLinks, (c) => (Ae(), ze("a", { key: c.kind, href: c.href, target: "_blank", rel: "noopener noreferrer", class: te(["project-link", { "project-link--demo": c.kind === "demo" }]), "aria-label": c.ariaLabel }, [b(r, { icon: c.icon }, null, 8, ["icon"]), p("span", null, Le(c.label), 1), b(s, { activator: "parent", location: "top", text: c.ariaLabel }, null, 8, ["text"])], 10, dC))), 128))])])) : xn("", true), p("div", fC, [(Ae(true), ze(ge, null, Qt(Ue(l), (c) => (Ae(), ze("article", { key: c.title, class: "project-item quiet-sheet" }, [p("header", vC, [p("h3", mC, Le(c.title), 1), c.visibleLinks.length ? (Ae(), ze("div", hC, [(Ae(true), ze(ge, null, Qt(c.visibleLinks, (d) => (Ae(), ze("a", { key: d.kind, href: d.href, target: "_blank", rel: "noopener noreferrer", class: te(["project-item-link", { "project-item-link--demo": d.kind === "demo" }]), "aria-label": d.ariaLabel }, [b(r, { icon: d.icon }, null, 8, ["icon"]), b(s, { activator: "parent", location: "top", text: d.ariaLabel }, null, 8, ["text"])], 10, gC))), 128))])) : xn("", true)]), p("p", yC, Le(c.blurb), 1), p("div", bC, [(Ae(true), ze(ge, null, Qt(c.tech, (d) => (Ae(), ze("span", { key: d, class: "project-tech-tag" }, Le(d), 1))), 128))])]))), 128))])]), _: 1 })]);
  };
} }), SC = Kn(pC, [["__scopeId", "data-v-990854bd"]]), kC = { id: "resume", class: "resume-section" }, wC = { class: "timeline" }, xC = { class: "entry-rail" }, CC = { class: "entry-dates glass-chip" }, _C = { class: "entry quiet-sheet" }, VC = { class: "entry-head" }, IC = { class: "entry-titleblock" }, PC = { class: "entry-role" }, TC = { class: "entry-subhead" }, AC = { class: "entry-company" }, DC = { class: "entry-work-location" }, EC = { class: "entry-bullets" }, MC = { key: 0, class: "entry-tech" }, BC = { class: "entry-tech-items" }, $C = { class: "entry-head" }, LC = { class: "entry-titleblock" }, FC = { class: "entry-role" }, OC = { class: "entry-company" }, RC = { class: "entry-meta" }, NC = { class: "entry-dates" }, HC = { class: "entry-location" }, zC = { key: 0, class: "entry-focus" }, WC = mn({ __name: "ResumeSection", setup(e) {
  return (t, n) => {
    const a = Ye("v-container");
    return Ae(), ze("section", kC, [b(a, { class: "resume-container" }, { default: Ee(() => [n[2] || (n[2] = p("div", { class: "resume-head" }, [p("div", { class: "resume-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Resume"), p("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), p("ol", wC, [(Ae(true), ze(ge, null, Qt(Ue($x), (l) => (Ae(), ze("li", { key: `${l.company}-${l.dates}`, class: "timeline-row" }, [p("div", xC, [p("span", CC, Le(l.dates), 1)]), p("article", _C, [p("header", VC, [p("div", IC, [p("h3", PC, Le(l.role), 1), p("div", TC, [p("p", AC, Le(l.company), 1), p("span", DC, Le(l.location), 1)])])]), p("ul", EC, [(Ae(true), ze(ge, null, Qt(l.highlights, (o, i) => (Ae(), ze("li", { key: i }, Le(o), 1))), 128))]), l.tech ? (Ae(), ze("div", MC, [n[0] || (n[0] = p("span", { class: "entry-tech-label" }, "Stack", -1)), p("span", BC, Le(l.tech.join("  \xB7  ")), 1)])) : xn("", true)])]))), 128))]), n[3] || (n[3] = p("div", { class: "edu-head" }, [p("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (Ae(true), ze(ge, null, Qt(Ue(Lx), (l) => (Ae(), ze("div", { key: `${l.school}-${l.degree}`, class: "education-card glass-panel" }, [p("header", $C, [p("div", LC, [p("h3", FC, Le(l.degree) + " \u2014 " + Le(l.field), 1), p("p", OC, Le(l.school), 1)]), p("div", RC, [p("span", NC, Le(l.dates), 1), p("span", HC, Le(l.location), 1)])]), l.focus ? (Ae(), ze("p", zC, [n[1] || (n[1] = p("span", { class: "entry-tech-label" }, "Focus", -1)), ut(" " + Le(l.focus), 1)])) : xn("", true)]))), 128))]), _: 1 })]);
  };
} }), jC = Kn(WC, [["__scopeId", "data-v-72166a64"]]), UC = ["href", "aria-label"], YC = { class: "contact-text" }, GC = mn({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => {
    const a = Ye("v-icon");
    return Ae(), ze("div", { class: te(["contact-strip", { "is-dense": e.dense }]) }, [(Ae(true), ze(ge, null, Qt(Ue(Kh), (l) => (Ae(), ze("a", { key: l.label, href: l.href, "aria-label": l.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [b(a, { icon: l.icon, class: "contact-icon" }, null, 8, ["icon"]), p("span", YC, Le(l.display ?? l.label), 1)], 8, UC))), 128))], 2);
  };
} }), KC = Kn(GC, [["__scopeId", "data-v-0c3dbac0"]]), qC = { id: "contact", class: "contact-section" }, XC = { class: "contact-band glass-panel" }, ZC = mn({ __name: "ContactSection", setup(e) {
  return (t, n) => {
    const a = Ye("v-container");
    return Ae(), ze("section", qC, [b(a, { class: "contact-container" }, { default: Ee(() => [p("div", XC, [n[0] || (n[0] = p("div", { class: "contact-head" }, [p("span", { class: "glass-chip section-kicker" }, "Contact"), p("h2", { class: "contact-title" }, "Open to interesting problems."), p("p", { class: "contact-copy" })], -1)), b(KC, { class: "contact-strip-wrap" })])]), _: 1 })]);
  };
} }), JC = Kn(ZC, [["__scopeId", "data-v-e54dfca1"]]), QC = mn({ __name: "App", setup(e) {
  return (t, n) => {
    const a = Ye("v-main"), l = Ye("v-app");
    return Ae(), Hn(l, { class: "app-shell" }, { default: Ee(() => [b(bw), b(Tx), b(a, { class: "app-main" }, { default: Ee(() => [b(tC), b(SC), b(jC), b(JC)]), _: 1 }), b(Ex)]), _: 1 });
  };
} }), e1 = H({ ...pe(), ...Fe(Wh(), ["fullHeight"]), ...We() }, "VApp"), t1 = ee()({ name: "VApp", props: e1(), setup(e, t) {
  let { slots: n } = t;
  const a = Ke(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = Uh({ ...e, fullHeight: true }), { rtlClasses: s } = _t();
  return ne(() => {
    var _a3;
    return p("div", { ref: r, class: te(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: me([e.style]) }, [p("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), De = H({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), qh = H({ text: String, ...pe(), ...De() }, "VToolbarTitle"), fc = ee()({ name: "VToolbarTitle", props: qh(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = !!(n.default || n.text || e.text);
    return b(e.tag, { class: te(["v-toolbar-title", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [a && p("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), n1 = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function hn(e, t, n) {
  return ee()({ name: e, props: n1({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? qu : Da;
      return ma(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function vc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Wn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? qu : Da;
    return () => ma(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function mc() {
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
const a1 = H({ target: [Object, Array] }, "v-dialog-transition"), fs = /* @__PURE__ */ new WeakMap(), Sr = ee()({ name: "VDialogTransition", props: a1(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = Gf(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (fs.set(l, i), Wn()) aa(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Pf }).finished.then(() => o());
    else {
      const f = aa(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Pf });
      (_a3 = Yf(l)) == null ? void 0 : _a3.forEach((v) => {
        aa(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Lo });
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
    !fs.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = Gf(e.target, l) : i = fs.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    Wn() ? aa(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: Tf }).finished.then(() => o()) : (aa(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: Tf }).finished.then(() => o()), (_a3 = Yf(l)) == null ? void 0 : _a3.forEach((v) => {
      aa(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Lo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? b(Da, Y({ name: "dialog-transition" }, a, { css: false }), n) : b(Da, { name: "dialog-transition" }, n);
} });
function Yf(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function Gf(e, t) {
  const n = ph(e), a = nc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, S = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), y = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: S, speed: y };
}
const l1 = hn("fab-transition", "center center", "out-in"), o1 = hn("dialog-bottom-transition"), i1 = hn("dialog-top-transition"), Ho = hn("fade-transition"), hc = hn("scale-transition"), r1 = hn("scroll-x-transition"), s1 = hn("scroll-x-reverse-transition"), u1 = hn("scroll-y-transition"), c1 = hn("scroll-y-reverse-transition"), d1 = hn("slide-x-transition"), f1 = hn("slide-x-reverse-transition"), gc = hn("slide-y-transition"), v1 = hn("slide-y-reverse-transition"), kr = vc("expand-transition", mc()), yc = vc("expand-x-transition", mc("", "x")), m1 = vc("expand-both-transition", mc("", "both")), h1 = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Me = ee(false)({ name: "VDefaultsProvider", props: h1(), setup(e, t) {
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
function g1(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Xh = H({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...pe(), ...kt() }, "VResponsive"), Ks = ee()({ name: "VResponsive", props: Xh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = g1(e), { dimensionStyles: l } = wt(e);
  return ne(() => {
    var _a3;
    return p("div", { class: te(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: me([l.value, e.style]) }, [p("div", { class: "v-responsive__sizer", style: me(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && p("div", { class: te(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function bc(e) {
  return tc(() => {
    const { class: t, style: n } = Zh(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Et(e) {
  const { colorClasses: t, colorStyles: n } = bc(() => ({ text: tt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function qe(e) {
  const { colorClasses: t, colorStyles: n } = bc(() => ({ background: tt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function y1(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Zh(e) {
  const t = y1(tt(e)), n = [], a = {};
  if (t.background) if (Hs(t.background)) {
    if (a.backgroundColor = t.background, !t.text && Kw(t.background)) {
      const l = un(t.background);
      if (l.a == null || l.a === 1) {
        const o = Ph(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Hs(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const ot = H({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { roundedClasses: _(() => {
    const a = gt(e) ? e.value : e.rounded, l = gt(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const ga = H({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Gt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? qu : Da, ...s } = il(a) ? a : {};
  let u;
  return il(a) ? u = Y(s, Aw({ disabled: l, group: o }), i) : u = Y({ name: l || !a ? "" : a }, i), ma(r, u, n);
};
function Kf(e, t) {
  if (!Zu) return;
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
const An = { mounted: Kf, unmounted: qs, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (qs(e, t), Kf(e, t));
} }, Jh = H({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Xh(), ...pe(), ...ot(), ...ga() }, "VImg"), da = ee()({ name: "VImg", directives: { vIntersect: An }, props: Jh(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { roundedClasses: i } = dt(e), r = St("VImg"), s = re(""), u = K(), c = re(e.eager ? "loading" : "idle"), d = re(), f = re(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), S = _(() => v.value.aspect || d.value / f.value || 0);
  ce(() => e.src, () => {
    m(c.value !== "idle");
  }), ce(S, (D, M) => {
    !D && M && u.value && V(u.value);
  }), Jl(() => m());
  function m(D) {
    if (!(e.eager && D) && !(Zu && !D && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const M = new Image();
        M.src = v.value.lazySrc, V(M, null);
      }
      v.value.src && Te(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || h(), c.value === "error") return;
            S.value || V(u.value, null), c.value === "loading" && y();
          } else S.value || V(u.value), w();
        });
      });
    }
  }
  function y() {
    var _a3;
    r.isUnmounted || (w(), V(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function h() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function w() {
    const D = u.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let I = -1;
  Nt(() => {
    clearTimeout(I);
  });
  function V(D) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const A = () => {
      if (clearTimeout(I), r.isUnmounted) return;
      const { naturalHeight: L, naturalWidth: z } = D;
      L || z ? (d.value = z, f.value = L) : !D.complete && c.value === "loading" && M != null ? I = window.setTimeout(A, M) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    A();
  }
  const x = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), g = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const D = p("img", { class: te(["v-img__img", x.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: y, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return b(Gt, { transition: e.transition, appear: true }, { default: () => [nt(M ? p("picture", { class: "v-img__picture" }, [M, D]) : D, [[En, c.value === "loaded"]])] });
  }, C = () => b(Gt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && p("img", { class: te(["v-img__img", "v-img__img--preload", x.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), k = () => a.placeholder ? b(Gt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && p("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, T = () => a.error ? b(Gt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && p("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = re(false);
  {
    const D = ce(S, (M) => {
      M && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = true;
        });
      }), D());
    });
  }
  return ne(() => {
    const D = Ks.filterProps(e);
    return nt(b(Ks, Y({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ve(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: S.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(ge, null, [b(g, null, null), b(C, null, null), b(P, null, null), b(k, null, null), b(T, null, null)]), default: a.default }), [[An, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), Ht = H({ border: [Boolean, Number, String] }, "border");
function qt(e) {
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
  return { elevationClasses: B(() => {
    const n = gt(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const qf = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Zn = H({ location: String }, "location");
function Ra(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = _t();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = Rs(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[qf[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[qf[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const b1 = [null, "prominent", "default", "comfortable", "compact"], Qh = H({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => b1.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Ht(), ...pe(), ...xt(), ...Zn(), ...ot(), ...De({ tag: "header" }), ...We() }, "VToolbar"), Xs = ee()({ name: "VToolbar", props: Qh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.color), { borderClasses: o } = qt(e), { elevationClasses: i } = It(e), { locationStyles: r } = Ra(e), { roundedClasses: s } = dt(e), { themeClasses: u } = Ke(e), { rtlClasses: c } = _t(), d = re(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return mt({ VBtn: { variant: "text" } }), ne(() => {
    var _a4;
    const S = !!(e.title || n.title), m = !!(n.image || e.image), y = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!y : e.extended, b(e.tag, { class: te(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: me([l.value, r.value, e.style]) }, { default: () => [m && p("div", { key: "image", class: "v-toolbar__image" }, [n.image ? b(Me, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : b(da, { key: "image-img", cover: true, src: e.image }, null)]), b(Me, { defaults: { VTabs: { height: ve(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [p("div", { class: "v-toolbar__content", style: { height: ve(f.value) } }, [n.prepend && p("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), S && b(fc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && p("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), b(Me, { defaults: { VTabs: { height: ve(v.value) } } }, { default: () => [b(kr, null, { default: () => [d.value && p("div", { class: "v-toolbar__extension", style: { height: ve(v.value) } }, [y])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), p1 = H({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function S1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = K(null), r = re(0), s = re(0), u = re(0), c = re(false), d = re(false), f = re(false), v = re(false), S = re(true), m = _(() => Number(e.scrollThreshold)), y = _(() => Xe((m.value - r.value) / m.value || 0));
  function h(x) {
    const g = "window" in x ? window.innerHeight : x.clientHeight, C = "window" in x ? document.documentElement.scrollHeight : x.scrollHeight;
    return { clientHeight: g, scrollHeight: C };
  }
  function w() {
    const x = i.value;
    if (!x) return;
    const { clientHeight: g, scrollHeight: C } = h(x), k = C - g, T = (a == null ? void 0 : a.value) || 0, P = m.value + T;
    S.value = k > P;
  }
  function I() {
    w();
  }
  function V() {
    const x = i.value;
    if (!x || n && !n.value) return;
    l = r.value, r.value = "window" in x ? x.pageYOffset : x.scrollTop;
    const g = x instanceof Window ? document.documentElement.scrollHeight : x.scrollHeight;
    o !== g && (g > o && w(), o = g), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: k } = h(x), T = r.value + C >= k - 5;
    !d.value && T && r.value >= m.value && S.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !T || P && r.value < m.value || E) && (v.value = false), f.value = T;
  }
  return ce(d, () => {
    s.value = s.value || r.value;
  }), ce(c, () => {
    s.value = 0;
  }), Ct(() => {
    ce(() => e.scrollTarget, (x) => {
      var _a3;
      const g = x ? document.querySelector(x) : window;
      g && g !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), i.value = g, i.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        w();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), Nt(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && ce(n, V, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: y, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S };
}
function bl() {
  const e = re(false);
  return Ct(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: al(e) };
}
const k1 = H({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Fe(Qh(), ["location"]), ...gl(), ...p1(), height: { type: [Number, String], default: 64 } }, "VAppBar"), w1 = ee()({ name: "VAppBar", props: k1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = xe(e, "modelValue"), o = _(() => {
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
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S } = S1(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), y = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), w = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const g = ((_a3 = a.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || o.value.fullyHide ? g + C : g : g + C;
  });
  $t(() => !!e.scrollBehavior, () => {
    ct(() => {
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
  const { ssrBootStyles: V } = bl(), { layoutItemStyles: x } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: I, elementSize: re(void 0), active: l, absolute: B(() => e.absolute) });
  return ne(() => {
    const g = Fe(Xs.filterProps(e), ["location"]);
    return b(Xs, Y({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...x.value, "--v-toolbar-image-opacity": w.value, height: void 0, ...V.value }, e.style] }, g, { collapse: y.value, flat: h.value }), n);
  }), {};
} }), x1 = [null, "default", "comfortable", "compact"], ht = H({ density: { type: String, default: "default", validator: (e) => x1.includes(e) } }, "density");
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const C1 = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ya(e, t) {
  return p(ge, null, [e && p("span", { key: "overlay", class: te(`${t}__overlay`) }, null), p("span", { key: "underlay", class: te(`${t}__underlay`) }, null)]);
}
const gn = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => C1.includes(e) } }, "variant");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = B(() => {
    const { variant: o } = tt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = bc(() => {
    const { variant: o, color: i } = tt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const eg = H({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Ht(), ...pe(), ...ht(), ...xt(), ...ot(), ...De(), ...We(), ...gn() }, "VBtnGroup"), Zs = ee()({ name: "VBtnGroup", props: eg(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { densityClasses: l } = Ft(e), { borderClasses: o } = qt(e), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e);
  mt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ne(() => b(e.tag, { class: te(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: me(e.style) }, n));
} }), pl = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Sl = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Ma(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = St("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Mt();
  it(Symbol.for(`${t.description}:id`), l);
  const o = He(t, null);
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
  s(), Nt(() => u());
  const c = _(() => o.isSelected(l)), d = _(() => o.items.value[0].id === l), f = _(() => o.items.value[o.items.value.length - 1].id === l), v = _(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return ce(c, (S) => {
    a.emit("group:selected", { value: S });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (S) => o.select(l, S), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Na(e, t) {
  let n = false;
  const a = At([]), l = xe(e, "modelValue", [], (f) => f === void 0 ? [] : tg(a, f === null ? [null] : lt(f)), (f) => {
    const v = V1(a, f);
    return e.multiple ? v : v[0];
  }), o = St("useGroup");
  function i(f, v) {
    const S = f, m = Symbol.for(`${t.description}:id`), h = Ml(m, o == null ? void 0 : o.vnode).indexOf(v);
    Ue(S.value) === void 0 && (S.value = h, S.useIndexAsValue = true), h > -1 ? a.splice(h, 0, S) : a.push(S);
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
  }), cr(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const S = a.find((m) => m.id === f);
    if (!(v && (S == null ? void 0 : S.disabled))) if (e.multiple) {
      const m = l.value.slice(), y = m.findIndex((w) => w === f), h = ~y;
      if (v = v ?? !h, h && e.mandatory && m.length <= 1 || !h && e.max != null && m.length + 1 > e.max) return;
      y < 0 && v ? m.push(f) : y >= 0 && !v && m.splice(y, 1), l.value = m;
    } else {
      const m = l.value.includes(f);
      if (e.mandatory && m || !m && !v) return;
      l.value = v ?? !m ? [f] : [];
    }
  }
  function c(f) {
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
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => _1(a, f) };
  return it(t, d), d;
}
function _1(e, t) {
  const n = tg(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function tg(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Dt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function V1(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const pc = Symbol.for("vuetify:v-btn-toggle"), I1 = H({ ...eg(), ...pl() }, "VBtnToggle"), P1 = ee()({ name: "VBtnToggle", props: I1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Na(e, pc);
  return ne(() => {
    const s = Zs.filterProps(e);
    return b(Zs, Y({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), T1 = ["x-small", "small", "default", "large", "x-large"], Jn = H({ size: { type: [String, Number], default: "default" } }, "size");
function Ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return tc(() => {
    const n = e.size;
    let a, l;
    return ji(T1, n) ? a = `${t}--size-${n}` : n && (l = { width: ve(n), height: ve(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const A1 = H({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ce, opacity: [String, Number], ...pe(), ...Jn(), ...De({ tag: "i" }), ...We() }, "VIcon"), Ge = ee()({ name: "VIcon", props: A1(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = re(), { themeClasses: o } = pr(), { iconData: i } = m0(() => l.value || e.icon), { sizeClasses: r } = Ql(e), { textColorClasses: s, textColorStyles: u } = Et(() => e.color);
  return ne(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = mh(c).filter((f) => f.type === ei && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return b(i.value.component, { tag: e.tag, icon: i.value.icon, class: te(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: me([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function ii(e, t) {
  const n = K(), a = re(false);
  if (Zu) {
    const l = new IntersectionObserver((o) => {
      a.value = !!o.find((i) => i.isIntersecting);
    }, t);
    bt(() => {
      l.disconnect();
    }), ce(n, (o, i) => {
      i && (l.unobserve(i), a.value = false), o && l.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: a };
}
const D1 = H({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function E1(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = re(e.reveal ? "initial" : "disabled");
  return Ct(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const M1 = H({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...pe(), ...D1(), ...Jn(), ...De({ tag: "div" }), ...We() }, "VProgressCircular"), Ba = ee()({ name: "VProgressCircular", props: M1(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = K(), { themeClasses: i } = Ke(e), { sizeClasses: r, sizeStyles: s } = Ql(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { textColorClasses: d, textColorStyles: f } = Et(() => e.bgColor), { intersectionRef: v, isIntersecting: S } = ii(), { resizeRef: m, contentRect: y } = Sn(), { state: h, duration: w } = E1(e), I = B(() => h.value === "initial" ? 0 : Xe(parseFloat(e.modelValue), 0, 100)), V = B(() => Number(e.width)), x = B(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(V.value, 32)), g = B(() => a / (1 - V.value / x.value) * 2), C = B(() => V.value / x.value * g.value), k = B(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? ve(Math.min(l - 0.01, P + C.value)) : ve(P);
  }), T = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ct(() => {
    v.value = o.value, m.value = o.value;
  }), ne(() => b(e.tag, { ref: o, class: te(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": S.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Wn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: me([s.value, c.value, { "--progress-reveal-duration": `${w.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${T.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [p("circle", { class: te(["v-progress-circular__underlay", d.value]), style: me(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": k.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), B1 = H({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function $1(e, t) {
  const n = B(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = tt(t);
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
    const s = tt(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return Xe(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const L1 = H({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...B1(), ...pe(), ...Zn({ location: "top" }), ...ot(), ...De(), ...We() }, "VProgressLinear"), wr = ee()({ name: "VProgressLinear", props: L1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = xe(e, "modelValue"), { isRtl: o, rtlClasses: i } = _t(), { themeClasses: r } = Ke(e), { locationStyles: s } = Ra(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = qe(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: S } = qe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: y } = qe(() => e.color), { roundedClasses: h } = dt(e), { intersectionRef: w, isIntersecting: I } = ii(), V = _(() => parseFloat(e.max)), x = _(() => parseFloat(e.height)), g = _(() => Xe(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => Xe(parseFloat(l.value) / V.value * 100, 0, 100)), k = _(() => o.value !== e.reverse), T = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = re(0), { hasChunks: E, chunksMaskStyles: D, snapValueToChunk: M } = $1(e, P);
  $t(E, () => {
    const { resizeRef: N } = Sn((Z) => P.value = Z[0].contentRect.width);
    ct(() => N.value = a.value);
  });
  const A = _(() => E.value ? M(g.value) : g.value), L = _(() => E.value ? M(C.value) : C.value);
  function z(N) {
    if (!w.value) return;
    const { left: Z, right: J, width: F } = w.value.getBoundingClientRect(), G = k.value ? F - N.clientX + (J - F) : N.clientX - Z;
    l.value = Math.round(G / F * V.value);
  }
  return ct(() => {
    w.value = a.value;
  }), ne(() => b(e.tag, { ref: a, class: te(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": k.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: me([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ve(x.value) : 0, "--v-progress-linear-height": ve(x.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && z }, { default: () => [e.stream && p("div", { key: "stream", class: te(["v-progress-linear__stream", u.value]), style: { ...c.value, [k.value ? "left" : "right"]: ve(-x.value), borderTop: `${ve(x.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ve(x.value / 4)})`, width: ve(100 - g.value, "%"), "--v-progress-linear-stream-to": ve(x.value * (k.value ? 1 : -1)) } }, null), p("div", { class: te(["v-progress-linear__background", d.value]), style: me([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), p("div", { class: te(["v-progress-linear__buffer", v.value]), style: me([S.value, { opacity: parseFloat(e.bufferOpacity), width: ve(A.value, "%") }]) }, null), b(Da, { name: T.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((N) => p("div", { key: N, class: te(["v-progress-linear__indeterminate", N, m.value]), style: me(y.value) }, null))]) : p("div", { class: te(["v-progress-linear__determinate", m.value]), style: me([y.value, { width: ve(L.value, "%") }]) }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: g.value })])] })), {};
} }), xr = H({ loading: [Boolean, String] }, "loader");
function ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function si(e, t) {
  var _a3;
  let { slots: n } = t;
  return p("div", { class: te(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || b(wr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const F1 = ["static", "relative", "fixed", "absolute", "sticky"], eo = H({ position: { type: String, validator: (e) => F1.includes(e) } }, "position");
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function O1() {
  const e = St("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function ng() {
  var _a3, _b2;
  return (_b2 = (_a3 = St("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function ui(e, t) {
  const n = cS("RouterLink"), a = B(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || vf(t, "click") || vf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: At({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = _(() => e.to ? o : void 0), r = O1(), s = _(() => {
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
  }), href: u, linkProps: At({ href: u, "aria-current": B(() => s.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && a.value ? "true" : void 0), tabindex: B(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const ci = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let vs = false;
function R1(e, t) {
  let n = false, a, l;
  Ze && (e == null ? void 0 : e.beforeEach) && (Te(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      vs ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), vs = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      vs = false;
    });
  }), bt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function N1(e, t) {
  ce(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Te(() => {
      t(n);
    });
  }, { immediate: true });
}
const Js = Symbol("rippleStop"), H1 = 80;
function Xf(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Qs(e) {
  return e.constructor.name === "TouchEvent";
}
function ag(e) {
  return e.constructor.name === "KeyboardEvent";
}
const z1 = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!ag(e)) {
    const d = t.getBoundingClientRect(), f = Qs(e) ? e.touches[e.touches.length - 1] : e;
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
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = z1(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Xf(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Xf(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function lg(e) {
  return typeof e > "u" || !!e;
}
function zo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Js])) {
    if (e[Js] = true, Qs(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || ag(e), n._ripple.class && (t.class = n._ripple.class), Qs(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Xi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, H1);
    } else Xi.show(e, n, t);
  }
}
function Zi(e) {
  e[Js] = true;
}
function on(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        on(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), Xi.hide(t);
  }
}
function og(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Wo = false;
function W1(e, t) {
  !Wo && t.includes(e.key) && (Wo = true, zo(e));
}
function ig(e) {
  Wo = false, on(e);
}
function rg(e) {
  Wo && (Wo = false, on(e));
}
function sg(e, t, n) {
  const { value: a, modifiers: l } = t, o = lg(a);
  o || Xi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = il(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => W1(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Zi, { passive: true }), e.addEventListener("mousedown", Zi);
      return;
    }
    e.addEventListener("touchstart", zo, { passive: true }), e.addEventListener("touchend", on, { passive: true }), e.addEventListener("touchmove", og, { passive: true }), e.addEventListener("touchcancel", on), e.addEventListener("mousedown", zo), e.addEventListener("mouseup", on), e.addEventListener("mouseleave", on), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", ig), e.addEventListener("blur", rg), e.addEventListener("dragstart", on, { passive: true });
  } else !o && n && ug(e);
}
function ug(e) {
  var _a3;
  e.removeEventListener("touchstart", Zi), e.removeEventListener("mousedown", Zi), e.removeEventListener("touchstart", zo), e.removeEventListener("touchend", on), e.removeEventListener("touchmove", og), e.removeEventListener("touchcancel", on), e.removeEventListener("mousedown", zo), e.removeEventListener("mouseup", on), e.removeEventListener("mouseleave", on), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", ig), e.removeEventListener("blur", rg), e.removeEventListener("dragstart", on);
}
function j1(e, t) {
  sg(e, t, false);
}
function U1(e) {
  ug(e), delete e._ripple;
}
function Y1(e, t) {
  if (t.value === t.oldValue) return;
  const n = lg(t.oldValue);
  sg(e, t, n);
}
const Lt = { mounted: j1, unmounted: U1, updated: Y1 }, Cr = H({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: pc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ce, appendIcon: Ce, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...pe(), ...ht(), ...kt(), ...xt(), ...Sl(), ...xr(), ...Zn(), ...eo(), ...ot(), ...ci(), ...Jn(), ...De({ tag: "button" }), ...We(), ...gn({ variant: "elevated" }) }, "VBtn"), Ne = ee()({ name: "VBtn", props: Cr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { borderClasses: o } = qt(e), { densityClasses: i } = Ft(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { loaderClasses: u } = ri(e), { locationStyles: c } = Ra(e), { positionClasses: d } = to(e), { roundedClasses: f } = dt(e), { sizeClasses: v, sizeStyles: S } = Ql(e), m = Ma(e, e.symbol, false), y = ui(e, n), h = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : y.isRouterLink.value ? (_a3 = y.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), w = B(() => h.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!y.isLink.value || ((_a3 = y.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = y.isActive) == null ? void 0 : _b2.value) ? w.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: x, variantClasses: g } = ba(I), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), k = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || y.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? (_b2 = (_a3 = y.navigate).value) == null ? void 0 : _b2.call(_a3, E) : m == null ? void 0 : m.toggle());
  }
  return N1(y, m == null ? void 0 : m.select), ne(() => {
    const E = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== true);
    return nt(b(E, Y(y.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": k.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, u.value, d.value, f.value, v.value, g.value, e.class], style: [x.value, r.value, c.value, S.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: T.value }), { default: () => {
      var _a3;
      return [ya(true, "v-btn"), !e.icon && D && p("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? b(Me, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : b(Ge, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && A ? b(Ge, { key: "content-icon", icon: e.icon }, null) : b(Me, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Le(e.text)];
      } })]), !e.icon && M && p("span", { key: "append", class: "v-btn__append" }, [a.append ? b(Me, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : b(Ge, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Lt, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), G1 = H({ ...Fe(Cr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), K1 = ee()({ name: "VAppBarNavIcon", props: G1(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(Ne, Y(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), q1 = ee()({ name: "VAppBarTitle", props: qh(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(fc, Y(e, { class: "v-app-bar-title" }), n)), {};
} }), cg = ha("v-alert-title"), dg = H({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function fg(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const X1 = ["success", "info", "warning", "error"], Z1 = H({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => X1.includes(e) }, ...pe(), ...ht(), ...kt(), ...xt(), ...dg(), ...Zn(), ...eo(), ...ot(), ...De(), ...We(), ...gn({ variant: "flat" }) }, "VAlert"), J1 = ee()({ name: "VAlert", props: Z1(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = xe(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = fg(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Ke(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ba(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Ft(e), { dimensionStyles: f } = wt(e), { elevationClasses: v } = It(e), { locationStyles: S } = Ra(e), { positionClasses: m } = to(e), { roundedClasses: y } = dt(e), { textColorClasses: h, textColorStyles: w } = Et(() => e.borderColor), { t: I } = Je(), V = B(() => ({ "aria-label": I(e.closeLabel), onClick(x) {
    l.value = false, n("click:close", x);
  } }));
  return () => {
    const x = !!(a.prepend || o.value), g = !!(a.title || e.title), C = !!(a.close || e.closable), k = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && b(e.tag, { class: te(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, y.value, c.value, e.class]), style: me([u.value, f.value, S.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ya(false, "v-alert"), e.border && p("div", { key: "border", class: te(["v-alert__border", h.value]), style: me(w.value) }, null), x && p("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? b(Me, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...k } } }, a.prepend) : b(Ge, Y({ key: "prepend-icon" }, k), null)]), p("div", { class: "v-alert__content" }, [g && b(cg, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && p("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && p("div", { key: "close", class: "v-alert__close" }, [a.close ? b(Me, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : b(Ne, Y({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), Q1 = H({ start: Boolean, end: Boolean, icon: Ce, image: String, text: String, ...Ht(), ...pe(), ...ht(), ...ot(), ...Jn(), ...De(), ...We(), ...gn({ variant: "flat" }) }, "VAvatar"), vn = ee()({ name: "VAvatar", props: Q1(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { borderClasses: l } = qt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ba(e), { densityClasses: s } = Ft(e), { roundedClasses: u } = dt(e), { sizeClasses: c, sizeStyles: d } = Ql(e);
  return ne(() => b(e.tag, { class: te(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: me([i.value, d.value, e.style]) }, { default: () => [n.default ? b(Me, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? b(da, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? b(Ge, { key: "icon", icon: e.icon }, null) : e.text, ya(false, "v-avatar")] })), {};
} }), e_ = H({ text: String, onClick: Bt(), ...pe(), ...We() }, "VLabel"), no = ee()({ name: "VLabel", props: e_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var _a3;
    return p("label", { class: te(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: me(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), vg = Symbol.for("vuetify:selection-control-group"), Sc = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ce, trueIcon: Ce, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Dt }, ...pe(), ...ht(), ...We() }, "SelectionControlGroup"), t_ = H({ ...Sc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), mg = ee()({ name: "VSelectionControlGroup", props: t_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), l = Mt(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return it(vg, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), bt(() => {
      r.delete(s);
    });
  } }), mt({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), ne(() => {
    var _a3;
    return p("div", { class: te(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: me(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), _r = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...pe(), ...Sc() }, "VSelectionControl");
function n_(e) {
  const t = He(vg, void 0), { densityClasses: n } = Ft(e), a = xe(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? lt(v).some((S) => e.valueComparator(S, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const S = v ? l.value : o.value;
    let m = S;
    i.value && (m = v ? [...lt(a.value), S] : lt(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Et(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = qe(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const $a = ee()({ name: "VSelectionControl", directives: { vRipple: Lt }, inheritAttrs: false, props: _r(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = n_(e), v = Mt(), S = re(false), m = re(false), y = K(), h = B(() => e.id || `input-${v}`), w = B(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    y.value && (y.value.checked = r.value);
  });
  function I(C) {
    w.value && (S.value = true, Wl(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function V() {
    S.value = false, m.value = false;
  }
  function x(C) {
    C.stopPropagation();
  }
  function g(C) {
    if (!w.value) {
      y.value && (y.value.checked = r.value);
      return;
    }
    e.readonly && l && Te(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return ne(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [k, T] = qn(n), P = p("input", Y({ ref: y, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: V, onFocus: I, onInput: g, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, T), null);
    return p("div", Y({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": S.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, k, { style: e.style }), [p("div", { class: te(["v-selection-control__wrapper", s.value]), style: me(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), nt(p("div", { class: te(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: h.value } })) ?? p(ge, null, [i.value && b(Ge, { key: "icon", icon: i.value }, null), P])]), [[Lt, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && b(no, { for: h.value, onClick: x }, { default: () => [C] })]);
  }), { isFocused: S, input: y };
} }), hg = H({ indeterminate: Boolean, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, ..._r({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Dn = ee()({ name: "VCheckboxBtn", props: hg(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "indeterminate"), l = xe(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return ne(() => {
    const s = Fe($a.filterProps(e), ["modelValue"]);
    return b($a, Y(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function di(e) {
  const { t } = Je();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ai(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return b(Ge, Y({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const a_ = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...pe(), ...ga({ transition: { component: gc, leaveAbsolute: true, group: true } }) }, "VMessages"), gg = ee()({ name: "VMessages", props: a_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => lt(e.messages)), { textColorClasses: l, textColorStyles: o } = Et(() => e.color);
  return ne(() => b(Gt, { transition: e.transition, tag: "div", class: te(["v-messages", l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => p("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), fi = H({ focused: Boolean, "onUpdate:focused": Bt() }, "focus");
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = xe(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const yg = Symbol.for("vuetify:form"), l_ = H({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function o_(e) {
  const t = xe(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = re(false), o = K([]), i = K([]);
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
  }, { deep: true, flush: "post" }), it(yg, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: S, resetValidation: m } = c;
    o.value.some((y) => y.id === d), o.value.push({ id: d, validate: v, reset: S, resetValidation: m, vm: Jv(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((S) => S.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function ao(e) {
  const t = He(yg, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const i_ = Symbol.for("vuetify:rules");
function r_(e) {
  const t = He(i_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const bg = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...fi() }, "validation");
function pg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const a = xe(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = ao(e), i = r_(() => e.rules), r = K([]), s = re(true), u = _(() => !!(lt(a.value === "" ? null : a.value).length || lt(l.value === "" ? null : l.value).length)), c = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? lt(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = _(() => {
    var _a3;
    let V = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const x = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return { input: x.has("input"), blur: x.has("blur") || x.has("input") || x.has("invalid-input"), invalidInput: x.has("invalid-input"), lazy: x.has("lazy"), eager: x.has("eager") };
  }), f = _(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = re(false), S = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = St("validation"), y = _(() => e.name ?? Ue(n));
  Jl(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: y.value, vm: m, validate: I, reset: h, resetValidation: w });
  }), Nt(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, y.value);
  }), Ct(async () => {
    var _a3;
    d.value.lazy || await I(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, y.value, f.value, c.value);
  }), $t(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    ce(l, () => {
      if (l.value != null) I();
      else if (e.focused) {
        const V = ce(() => e.focused, (x) => {
          x || I(), V();
        });
      }
    });
  }), $t(() => d.value.blur, () => {
    ce(() => e.focused, (V) => {
      V || I();
    });
  }), ce([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, y.value, f.value, c.value);
  });
  async function h() {
    a.value = null, await Te(), await w();
  }
  async function w() {
    s.value = true, d.value.lazy ? r.value = [] : await I(!d.value.eager);
  }
  async function I() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const x = [];
    v.value = true;
    for (const g of i.value) {
      if (x.length >= Number(e.maxErrors ?? 1)) break;
      const k = await (typeof g == "function" ? g : () => g)(l.value);
      if (k !== true) {
        if (k !== false && typeof k != "string") {
          console.warn(`${k} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        x.push(k || "");
      }
    }
    return r.value = x, v.value = false, s.value = V, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: h, resetValidation: w, validate: I, validationClasses: S };
}
const Sa = H({ id: String, appendIcon: Ce, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...pe(), ...ht(), ...Jt(kt(), ["maxWidth", "minWidth", "width"]), ...We(), ...bg() }, "VInput"), Rt = ee()({ name: "VInput", props: { ...Sa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Ft(e), { dimensionStyles: i } = wt(e), { themeClasses: r } = Ke(e), { rtlClasses: s } = _t(), { InputIcon: u } = di(e), c = Mt(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: S, isReadonly: m, isPristine: y, isValid: h, isValidating: w, reset: I, resetValidation: V, validate: x, validationClasses: g } = pg(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), k = B(() => C.value.length > 0), T = B(() => !e.hideDetails || e.hideDetails === "auto" && (k.value || !!a.details)), P = _(() => T.value ? `${d.value}-messages` : void 0), E = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: S, isReadonly: m, isPristine: y, isValid: h, isValidating: w, hasDetails: T, reset: I, resetValidation: V, validate: x })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return ne(() => {
    var _a3, _b2;
    const A = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
    return p("div", { class: te(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, g.value, e.class]), style: me([i.value, e.style]) }, [A && p("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && b(u, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && p("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), L && p("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && b(u, { key: "append-icon", name: "append", color: M.value }, null)]), T.value && p("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [b(gg, { active: k.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: I, resetValidation: V, validate: x, isValid: h, errorMessages: f };
} }), ms = Symbol("Forwarded refs");
function hs(e, t) {
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
        const s = hs(r.value, o) ?? ("_" in r.value ? hs((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[ms];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = hs(c.value, o);
          if (d) return d;
          const f = c.value && c.value[ms];
          f && u.push(...f);
        }
      }
    }
  } });
}
const s_ = H({ ...Fe(Sa(), ["direction"]), ...Fe(hg(), ["inline"]) }, "VCheckbox"), u_ = ee()({ name: "VCheckbox", inheritAttrs: false, props: s_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = xe(e, "modelValue"), { isFocused: o, focus: i, blur: r } = pa(e), s = K(), u = Mt();
  return ne(() => {
    const [c, d] = qn(n), f = Rt.filterProps(e), v = Dn.filterProps(e);
    return b(Rt, Y({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (S) => {
      let { id: m, messagesId: y, isDisabled: h, isReadonly: w, isValid: I } = S;
      return b(Dn, Y(v, { id: m.value, "aria-describedby": y.value, disabled: h.value, readonly: w.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Pt({}, s);
} });
function c_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = jo(l, n), i = Sg(l, a, n), r = jo(l, t), s = kg(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function d_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = jo(a, n), o = kg(a, t), i = jo(a, t);
  return o - l / 2 + i / 2;
}
function Zf(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function f_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function Sg(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function jo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function kg(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const kc = Symbol.for("vuetify:v-slide-group"), wc = H({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: kc }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...pe(), ...hl({ mobile: null }), ...De(), ...pl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Uo = ee()({ name: "VSlideGroup", props: wc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = _t(), { displayClasses: l, mobile: o } = nn(e), i = Na(e, e.symbol), r = re(false), s = re(0), u = re(0), c = re(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = Sn(), { resizeRef: S, contentRect: m } = Sn(), y = mx(), h = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), w = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Ze) {
    let W = -1;
    ce(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const R = d.value ? "width" : "height";
          u.value = v.value[R], c.value = m.value[R], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && w.value >= 0 && S.el) {
          const R = S.el.children[I.value];
          x(R, e.centerActive);
        }
      });
    });
  }
  const V = re(false);
  function x(W, R) {
    let j = 0;
    R ? j = d_({ containerElement: f.el, isHorizontal: d.value, selectedElement: W }) : j = c_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: W }), g(j);
  }
  function g(W) {
    if (!Ze || !f.el) return;
    const R = jo(d.value, f.el), j = Sg(d.value, a.value, f.el);
    if (!(Zf(d.value, f.el) <= R || Math.abs(W - j) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: ae, offsetWidth: Q } = f.el;
        W = ae - Q - W;
      }
      d.value ? y.horizontal(W, h.value) : y(W, h.value);
    }
  }
  function C(W) {
    const { scrollTop: R, scrollLeft: j } = W.target;
    s.value = d.value ? j : R;
  }
  function k(W) {
    if (V.value = true, !(!r.value || !S.el)) {
      for (const R of W.composedPath()) for (const j of S.el.children) if (j === R) {
        x(j);
        return;
      }
    }
  }
  function T(W) {
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
    function R(j) {
      W.preventDefault(), L(j);
    }
    d.value ? W.key === "ArrowRight" ? R(a.value ? "prev" : "next") : W.key === "ArrowLeft" && R(a.value ? "next" : "prev") : W.key === "ArrowDown" ? R("next") : W.key === "ArrowUp" && R("prev"), W.key === "Home" ? R("first") : W.key === "End" && R("last");
  }
  function A(W, R) {
    if (!W) return;
    let j = W;
    do
      j = j == null ? void 0 : j[R === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (j == null ? void 0 : j.hasAttribute("disabled"));
    return j;
  }
  function L(W) {
    if (!S.el) return;
    let R;
    if (!W) R = Pa(S.el)[0];
    else if (W === "next") {
      if (R = A(S.el.querySelector(":focus"), W), !R) return L("first");
    } else if (W === "prev") {
      if (R = A(S.el.querySelector(":focus"), W), !R) return L("last");
    } else W === "first" ? (R = S.el.firstElementChild, (R == null ? void 0 : R.hasAttribute("disabled")) && (R = A(R, "next"))) : W === "last" && (R = S.el.lastElementChild, (R == null ? void 0 : R.hasAttribute("disabled")) && (R = A(R, "prev")));
    R && R.focus({ preventScroll: true });
  }
  function z(W) {
    const R = d.value && a.value ? -1 : 1, j = (W === "prev" ? -R : R) * u.value;
    let ie = s.value + j;
    if (d.value && a.value && f.el) {
      const { scrollWidth: ae, offsetWidth: Q } = f.el;
      ie += ae - Q;
    }
    g(ie);
  }
  const N = _(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Z = _(() => r.value || Math.abs(s.value) > 0), J = _(() => {
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
    const W = Zf(d.value, f.el), R = f_(d.value, f.el);
    return W - R - Math.abs(s.value) > 1;
  });
  return ne(() => b(e.tag, { class: te(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": J.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: me(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [J.value && p("div", { key: "prev", class: te(["v-slide-group__prev", { "v-slide-group__prev--disabled": !F.value }]), onMousedown: D, onClick: () => F.value && z("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, N.value)) ?? b(Ho, null, { default: () => [b(Ge, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), p("div", { key: "container", ref: f, class: te(["v-slide-group__container", e.contentClass]), onScroll: C }, [p("div", { ref: S, class: "v-slide-group__content", onFocusin: k, onFocusout: T, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, N.value)])]), J.value && p("div", { key: "next", class: te(["v-slide-group__next", { "v-slide-group__next--disabled": !G.value }]), onMousedown: D, onClick: () => G.value && z("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, N.value)) ?? b(Ho, null, { default: () => [b(Ge, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: z, scrollOffset: s, focus: L, hasPrev: F, hasNext: G };
} }), wg = Symbol.for("vuetify:v-chip-group"), v_ = H({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dt }, ...wc({ scrollToActive: false }), ...pe(), ...pl({ selectedClass: "v-chip--selected" }), ...De(), ...We(), ...gn({ variant: "tonal" }) }, "VChipGroup"), m_ = ee()({ name: "VChipGroup", props: v_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, wg);
  return mt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), ne(() => {
    const u = Uo.filterProps(e);
    return b(Uo, Y(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), h_ = H({ activeClass: String, appendAvatar: String, appendIcon: Ce, baseColor: String, closable: Boolean, closeIcon: { type: Ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ce, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...pe(), ...ht(), ...xt(), ...Sl(), ...ot(), ...ci(), ...Jn(), ...De({ tag: "span" }), ...We(), ...gn({ variant: "tonal" }) }, "VChip"), fa = ee()({ name: "VChip", directives: { vRipple: Lt }, props: h_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Je(), { borderClasses: i } = qt(e), { densityClasses: r } = Ft(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { sizeClasses: c } = Ql(e), { themeClasses: d } = Ke(e), f = xe(e, "modelValue"), v = Ma(e, wg, false), S = Ma(e, kc, false), m = ui(e, n), y = B(() => e.link !== false && m.isLink.value), h = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), w = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(k) {
    k.preventDefault(), k.stopPropagation(), f.value = false, a("click:close", k);
  } }));
  ce(f, (k) => {
    k ? (v == null ? void 0 : v.register(), S == null ? void 0 : S.register()) : (v == null ? void 0 : v.unregister(), S == null ? void 0 : S.unregister());
  });
  const { colorClasses: I, colorStyles: V, variantClasses: x } = ba(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function g(k) {
    var _a3, _b2;
    a("click", k), h.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, k), v == null ? void 0 : v.toggle());
  }
  function C(k) {
    (k.key === "Enter" || k.key === " ") && (k.preventDefault(), g(k));
  }
  return () => {
    var _a3;
    const k = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), P = !!(T || l.append), E = !!(l.close || e.closable), D = !!(l.filter || e.filter) && v, M = !!(e.prependIcon || e.prependAvatar), A = !!(M || l.prepend);
    return f.value && nt(b(k, Y(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, I.value, r.value, s.value, u.value, c.value, x.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: g, onKeydown: h.value && !y.value && C }), { default: () => {
      var _a4;
      return [ya(h.value, "v-chip"), D && b(yc, { key: "filter" }, { default: () => [nt(p("div", { class: "v-chip__filter" }, [l.filter ? b(Me, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : b(Ge, { key: "filter-icon", icon: e.filterIcon }, null)]), [[En, v.isSelected.value]])] }), A && p("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? b(Me, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : p(ge, null, [e.prependIcon && b(Ge, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && b(vn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), p("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Le(e.text)]), P && p("div", { key: "append", class: "v-chip__append" }, [l.append ? b(Me, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : p(ge, null, [e.appendIcon && b(Ge, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && b(vn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && p("button", Y({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, w.value), [l.close ? b(Me, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : b(Ge, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Lt, h.value && e.ripple, null]]);
  };
} }), g_ = ["dotted", "dashed", "solid", "double"], y_ = H({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => g_.includes(e) }, ...pe(), ...We() }, "VDivider"), dn = ee()({ name: "VDivider", props: y_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { textColorClasses: o, textColorStyles: i } = Et(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return ne(() => {
    const u = p("hr", { class: te([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: me([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? p("div", { class: te(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, p("div", { class: "v-divider__content", style: me(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), eu = Symbol.for("vuetify:list");
function xg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = He(eu, { filterable: false, hasPrepend: re(false), updateHasPrepend: () => null, trackingIndex: re(-1), navigationStrategy: re("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Mt() } = e, i = { filterable: t.filterable || n, hasPrepend: re(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return it(eu, i), t;
}
function Cg() {
  return He(eu, null);
}
const xc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Pe(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of lt(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, _g = (e) => {
  const t = xc(e);
  return { activate: (a) => {
    let { activated: l, id: o, ...i } = a;
    o = Pe(o);
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
}, b_ = (e) => {
  const t = xc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, p_ = (e) => {
  const t = _g(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, S_ = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, Vg = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, k_ = { open: Vg.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Cc = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o } = n;
    if (a = Pe(a), e && !l) {
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
}, Ig = (e) => {
  const t = Cc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Pe(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, w_ = (e) => {
  const t = Cc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, x_ = (e) => {
  const t = Ig(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, _c = (e) => {
  const t = { select: (n) => {
    let { id: a, value: l, selected: o, children: i, parents: r, disabled: s } = n;
    a = Pe(a);
    const u = new Map(o), c = [a];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(Pe(f), l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = Pe(r.get(a));
    for (; d; ) {
      let f = true, v = true;
      for (const S of i.get(d)) {
        const m = Pe(S);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Pe(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, S) => {
      let [m, y] = S;
      return y === "on" && v.push(m), v;
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
}, C_ = (e) => {
  const t = _c(e);
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
}, __ = (e) => {
  const n = { select: _c(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Gl = Symbol.for("vuetify:nested"), Pg = { id: re(), root: { itemsRegistration: K("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: K(/* @__PURE__ */ new Map()), parents: K(/* @__PURE__ */ new Map()), disabled: K(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: K(false), scrollToActive: K(false), selectable: K(false), opened: K(/* @__PURE__ */ new Set()), activated: K(/* @__PURE__ */ new Set()), selected: K(/* @__PURE__ */ new Map()), selectedValues: K([]), getPath: () => [] } }, V_ = H({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), I_ = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = re(/* @__PURE__ */ new Map()), r = re(/* @__PURE__ */ new Map()), s = re(/* @__PURE__ */ new Set()), u = xe(e, "opened", e.opened, (x) => new Set(Array.isArray(x) ? x.map((g) => Pe(g)) : x), (x) => [...x.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return b_(e.mandatory);
      case "single-leaf":
        return p_(e.mandatory);
      case "independent":
        return xc(e.mandatory);
      case "single-independent":
      default:
        return _g(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return x_(e.mandatory);
      case "leaf":
        return w_(e.mandatory);
      case "independent":
        return Cc(e.mandatory);
      case "single-independent":
        return Ig(e.mandatory);
      case "trunk":
        return C_(e.mandatory);
      case "branch":
        return __(e.mandatory);
      case "classic":
      default:
        return _c(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return k_;
      case "single":
        return S_;
      case "multiple":
      default:
        return Vg;
    }
  }), v = xe(e, "activated", e.activated, (x) => c.value.in(x, i.value, r.value), (x) => c.value.out(x, i.value, r.value)), S = xe(e, "selected", e.selected, (x) => d.value.in(x, i.value, r.value, s.value), (x) => d.value.out(x, i.value, r.value));
  Nt(() => {
    o = true;
  });
  function m(x) {
    const g = [];
    let C = Pe(x);
    for (; C !== void 0; ) g.unshift(C), C = r.value.get(C);
    return g;
  }
  const y = St("nested"), h = /* @__PURE__ */ new Set(), w = f0(() => {
    Te(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  ce(() => [n.value, tt(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), k = tt(a) ? (E) => Pe(E.raw) : (E) => E.value, T = [...n.value];
    let P = 0;
    for (; P < T.length; ) {
      const E = T[P++], D = k(E);
      if (E.children) {
        const M = [];
        for (const A of E.children) {
          const L = k(A);
          x.set(L, D), M.push(L), T.push(A);
        }
        g.set(D, M);
      }
      E.props.disabled && C.add(D);
    }
    i.value = g, r.value = x, s.value = C;
  }
  const V = { id: re(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => tt(l)), selectable: B(() => e.selectable), activated: v, selected: S, selectedValues: _(() => {
    const x = [];
    for (const [g, C] of S.value.entries()) C === "on" && x.push(g);
    return x;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (x, g, C, k) => {
    if (h.has(x)) {
      m(x).map(String).join(" -> "), m(g).concat(x).map(String).join(" -> ");
      return;
    } else h.add(x);
    g && x !== g && r.value.set(x, g), C && s.value.add(x), k && i.value.set(x, []), g != null && i.value.set(g, [...i.value.get(g) || [], x]), w();
  }, unregister: (x) => {
    if (o) return;
    h.delete(x), i.value.delete(x), s.value.delete(x);
    const g = r.value.get(x);
    if (g) {
      const C = i.value.get(g) ?? [];
      i.value.set(g, C.filter((k) => k !== x));
    }
    r.value.delete(x), w();
  }, updateDisabled: (x, g) => {
    g ? s.value.add(x) : s.value.delete(x);
  }, open: (x, g, C) => {
    y.emit("click:open", { id: x, value: g, path: m(x), event: C });
    const k = f.value.open({ id: x, value: g, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    k && (u.value = k);
  }, openOnSelect: (x, g, C) => {
    const k = f.value.select({ id: x, value: g, selected: new Map(S.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    k && (u.value = k);
  }, select: (x, g, C) => {
    y.emit("click:select", { id: x, value: g, path: m(x), event: C });
    const k = d.value.select({ id: x, value: g, selected: new Map(S.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    k && (S.value = k), V.root.openOnSelect(x, g, C);
  }, activate: (x, g, C) => {
    if (!e.activatable) return V.root.select(x, true, C);
    y.emit("click:activate", { id: x, value: g, path: m(x), event: C });
    const k = c.value.activate({ id: x, value: g, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
    if (k.size !== v.value.size) v.value = k;
    else {
      for (const T of k) if (!v.value.has(T)) {
        v.value = k;
        return;
      }
      for (const T of v.value) if (!k.has(T)) {
        v.value = k;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: m } };
  return it(Gl, V), V.root;
}, Tg = (e, t, n) => {
  const a = He(Gl, Pg), l = Symbol("nested item"), o = _(() => {
    const r = Pe(tt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Jl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Te(() => {
      a.root.register(o.value, a.id.value, tt(t), n);
    });
  }), Nt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), ce(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Te(() => {
      a.root.register(r, a.id.value, tt(t), n);
    }));
  }), ce(() => tt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && it(Gl, i), i;
}, P_ = () => {
  const e = He(Gl, Pg);
  it(Gl, { ...e, isGroupActivator: true });
}, T_ = Kt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return P_(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Ag = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ce, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ce, default: "$expand" }, rawId: [String, Number], prependIcon: Ce, appendIcon: Ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...pe(), ...De() }, "VListGroup"), Yo = ee()({ name: "VListGroup", props: Ag(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = Tg(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = Cg(), { isBooted: s } = bl(), u = He(Gl), c = B(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), S = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return ne(() => b(e.tag, { class: te(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: me(e.style) }, { default: () => [n.activator && b(Me, { defaults: S.value }, { default: () => [b(T_, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), b(Gt, { transition: { component: kr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? nt(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[En, a.value]]) : a.value && p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), A_ = H({ opacity: [Number, String], ...pe(), ...De() }, "VListItemSubtitle"), Dg = ee()({ name: "VListItemSubtitle", props: A_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-list-item-subtitle", e.class]), style: me([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Eg = ha("v-list-item-title"), Mg = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ce, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...pe(), ...ht(), ...kt(), ...xt(), ...ot(), ...ci(), ...De(), ...We(), ...gn({ variant: "text" }) }, "VListItem"), kn = ee()({ name: "VListItem", directives: { vRipple: Lt }, props: Mg(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = ui(e, n), i = K(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: S, root: m, parent: y, openOnSelect: h, scrollToActive: w, id: I } = Tg(r, () => e.disabled, false), V = Cg(), x = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), g = B(() => e.link !== false && o.isLink.value), C = _(() => !!V && (m.selectable.value || m.activatable.value || e.value != null)), k = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), T = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? g.value ? "link" : C.value ? "option" : "listitem" : void 0), E = _(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : x.value;
  }), D = B(() => e.rounded || e.nav), M = B(() => e.color ?? e.activeColor), A = B(() => ({ color: x.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ce(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (ke) => {
    ke && L();
  }), ce(u, (ke) => {
    var _a3;
    !ke || !w || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ce(T, (ke) => {
    var _a3;
    ke && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Jl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Te(() => L());
  });
  function L() {
    y.value != null && m.open(y.value, true), h(true);
  }
  const { themeClasses: z } = Ke(e), { borderClasses: N } = qt(e), { colorClasses: Z, colorStyles: J, variantClasses: F } = ba(A), { densityClasses: G } = Ft(e), { dimensionStyles: W } = wt(e), { elevationClasses: R } = It(e), { roundedClasses: j } = dt(D), ie = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ae = B(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), Q = _(() => ({ isActive: x.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function de(ke) {
    var _a3, _b2, _c2;
    l("click", ke), !["INPUT", "TEXTAREA"].includes((_a3 = ke.target) == null ? void 0 : _a3.tagName) && k.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, ke), !S && (m.activatable.value ? s(!u.value, ke) : (m.selectable.value || e.value != null && !g.value) && c(!f.value, ke)));
  }
  function Ve(ke) {
    const ye = ke.target;
    ["INPUT", "TEXTAREA"].includes(ye.tagName) || (ke.key === "Enter" || ke.key === " " && !(V == null ? void 0 : V.filterable)) && (ke.preventDefault(), ke.stopPropagation(), ke.target.dispatchEvent(new MouseEvent("click", ke)));
  }
  return ne(() => {
    const ke = g.value ? "a" : e.tag, ye = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, X = !!(!!(e.appendAvatar || e.appendIcon) || a.append), le = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(le), e.activeColor && sh("active-color", ["color", "base-color"]), nt(b(ke, Y(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": k.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !le && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": T.value, [`${e.activeClass}`]: e.activeClass && x.value }, z.value, N.value, Z.value, G.value, R.value, ie.value, j.value, F.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, J.value, W.value, e.style], tabindex: e.tabindex ?? (k.value ? V ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: de, onKeydown: k.value && !g.value && Ve }), { default: () => {
      var _a3;
      return [ya(k.value || x.value, "v-list-item"), le && p("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? b(Me, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, Q.value)];
      } }) : p(ge, null, [e.prependAvatar && b(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), p("div", { class: "v-list-item__spacer" }, null)]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [ye && b(Eg, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Le(e.title)];
      } }), $ && b(Dg, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Le(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, Q.value)]), X && p("div", { key: "append", class: "v-list-item__append" }, [a.append ? b(Me, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, Q.value)];
      } }) : p(ge, null, [e.appendIcon && b(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && b(vn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), p("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Lt, k.value && ae.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: S, isSelected: f, list: V, select: c, root: m, id: I, link: o };
} }), D_ = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...pe(), ...De() }, "VListSubheader"), lo = ee()({ name: "VListSubheader", props: D_(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color);
  return ne(() => {
    const o = !!(n.default || e.title);
    return b(e.tag, { class: te(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: me([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && p("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), E_ = H({ items: Array, returnObject: Boolean }, "VListChildren"), Bg = ee()({ name: "VListChildren", props: E_(), setup(e, t) {
  let { slots: n } = t;
  return xg(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? b(dn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? b(lo, i, null);
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
      } : void 0 }, c = Yo.filterProps(i);
      return o ? b(Yo, Y(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = Y(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : b(kn, Y(v, { index: l }), u);
      }, default: () => b(Bg, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : b(kn, Y(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), $g = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), M_ = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Cn(e, t) {
  const n = pt(t, e.itemTitle, t), a = pt(t, e.itemValue, n), l = pt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Fe(t, ["children"]) : t : void 0 : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  M_.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? Lg(e, l) : void 0, raw: t };
}
Cn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Lg(e, t) {
  const n = Jt(e, Cn.neededProps), a = [];
  for (const l of t) a.push(Cn(n, l));
  return a;
}
function Vc(e) {
  const t = _(() => Lg(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = re(/* @__PURE__ */ new Map()), l = re([]);
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
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, S = e.valueComparator || Dt, m = Jt(e, Cn.neededProps), y = [];
    e: for (const h of r) {
      if (!d && h === null) continue;
      if (f && typeof h == "string") {
        y.push(Cn(m, h));
        continue;
      }
      const w = s.get(h);
      if (v || !w) {
        for (const I of v ? u : c) if (S(h, I.value)) {
          y.push(I);
          continue e;
        }
        y.push(Cn(m, h));
        continue;
      }
      y.push(...w);
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
const B_ = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function $_(e, t) {
  const n = Ea(t) ? t : pt(t, e.itemTitle), a = Ea(t) ? t : pt(t, e.itemValue, void 0), l = pt(t, e.itemChildren), o = e.itemProps === true ? Fe(t, ["children"]) : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  B_.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Fg(e, l) : void 0, raw: t };
}
function Fg(e, t) {
  const n = [];
  for (const a of t) n.push($_(e, a));
  return n;
}
function Og(e) {
  return { items: _(() => Fg(e, e.items)) };
}
const Rg = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ce, collapseIcon: Ce, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...V_({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ht(), ...pe(), ...ht(), ...kt(), ...xt(), ...$g(), ...ot(), ...De(), ...We(), ...gn({ variant: "text" }) }, "VList"), Kl = ee()({ name: "VList", props: Rg(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = Og(e), { themeClasses: i } = Ke(e), { backgroundColorClasses: r, backgroundColorStyles: s } = qe(() => e.bgColor), { borderClasses: u } = qt(e), { densityClasses: c } = Ft(e), { dimensionStyles: d } = wt(e), { elevationClasses: f } = It(e), { roundedClasses: v } = dt(e), { children: S, open: m, parents: y, select: h, getPath: w } = I_(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), I = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = B(() => e.activeColor), x = B(() => e.baseColor), g = B(() => e.color), C = B(() => e.selectable || e.activatable), k = xe(e, "navigationIndex", -1, (G) => G ?? -1), T = Mt();
  xg({ filterable: e.filterable, trackingIndex: k, navigationStrategy: B(() => e.navigationStrategy), uid: T }), ce(o, () => {
    e.navigationStrategy === "track" && (k.value = -1);
  }), mt({ VListGroup: { activeColor: V, baseColor: x, color: g, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: V, baseColor: x, color: g, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = re(false), E = K();
  function D(G) {
    P.value = true;
  }
  function M(G) {
    P.value = false;
  }
  function A(G) {
    var _a3;
    e.navigationStrategy === "track" ? ~k.value || (k.value = N("first")) : !P.value && !(G.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(G.relatedTarget))) && F();
  }
  function L() {
    e.navigationStrategy === "track" && (k.value = -1);
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
  function N(G) {
    const W = o.value.length;
    if (W === 0) return -1;
    let R;
    G === "first" ? R = 0 : G === "last" ? R = W - 1 : (R = k.value + (G === "next" ? 1 : -1), R < 0 && (R = W - 1), R >= W && (R = 0));
    const j = R;
    let ie = 0;
    for (; ie < W; ) {
      const ae = o.value[R];
      if (ae && ae.type !== "divider" && ae.type !== "subheader") return R;
      if (R += G === "next" || G === "first" ? 1 : -1, R < 0 && (R = W - 1), R >= W && (R = 0), R === j) return -1;
      ie++;
    }
    return -1;
  }
  function Z(G) {
    const W = G.target;
    if (!E.value || W.tagName === "INPUT" && ["Home", "End"].includes(G.key) || W.tagName === "TEXTAREA") return;
    const R = z(G.key);
    if (R !== null) if (G.preventDefault(), e.navigationStrategy === "track") {
      const j = N(R);
      j !== -1 && (k.value = j);
    } else F(R);
  }
  function J(G) {
    P.value = true;
  }
  function F(G) {
    if (E.value) return Qa(E.value, G);
  }
  return ne(() => {
    const G = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), W = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return b(e.tag, { ref: E, class: te(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, I.value, v.value, e.class]), style: me([{ "--v-list-indent": ve(G), "--v-list-group-prepend": G ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && k.value >= 0 ? `v-list-item-${T}-${k.value}` : void 0, "aria-multiselectable": W, onFocusin: D, onFocusout: M, onFocus: A, onBlur: L, onKeydown: Z, onMousedown: J }, { default: () => [b(Bg, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: F, children: S, parents: y, getPath: w, navigationIndex: k };
} }), L_ = ha("v-list-img"), F_ = H({ start: Boolean, end: Boolean, ...pe(), ...De() }, "VListItemAction"), Ic = ee()({ name: "VListItemAction", props: F_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} }), O_ = H({ start: Boolean, end: Boolean, ...pe(), ...De() }, "VListItemMedia"), R_ = ee()({ name: "VListItemMedia", props: O_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} });
function gs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function N_(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Jf(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return gs({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return gs({ x: l, y: o }, t);
  }
  return gs({ x: t.width / 2, y: t.height / 2 }, t);
}
const Ng = { static: W_, connected: U_ }, H_ = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ng }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function z_(e, t) {
  const n = K({}), a = K();
  Ze && $t(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    ce(() => e.locationStrategy, r), bt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = Ng[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function W_() {
}
function j_(e, t) {
  const n = nc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function U_(e, t, n) {
  (Array.isArray(e.target.value) || d0(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = tc(() => {
    const h = Rs(t.location, e.isRtl.value), w = t.origin === "overlap" ? h : t.origin === "auto" ? ss(h) : Rs(t.origin, e.isRtl.value);
    return h.side === w.side && h.align === us(w).align ? { preferredAnchor: hf(h), preferredOrigin: hf(w) } : { preferredAnchor: h, preferredOrigin: w };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => _(() => {
    const w = parseFloat(t[h]);
    return isNaN(w) ? 1 / 0 : w;
  })), c = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const h = t.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new hh(4), S = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((w) => {
      w !== f && v.clear(), requestAnimationFrame((I) => {
        f = I;
      });
    }), v.isFull) {
      const w = v.values();
      if (Dt(w.at(-1), w.at(-3)) && !Dt(w.at(-1), w.at(-2))) return;
    }
    const h = y();
    h && v.push(h.flipped);
  });
  let m = new pn({ x: 0, y: 0, width: 0, height: 0 });
  ce(e.target, (h, w) => {
    w && !Array.isArray(w) && S.unobserve(w), Array.isArray(h) ? Dt(h, w) || y() : h && S.observe(h);
  }, { immediate: true }), ce(e.contentEl, (h, w) => {
    w && S.unobserve(w), h && S.observe(h);
  }, { immediate: true }), bt(() => {
    S.disconnect();
  });
  function y() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = ph(e.target.value));
    const h = j_(e.contentEl.value, e.isRtl.value), w = Gi(e.contentEl.value), I = Number(t.viewportMargin);
    w.length || (w.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = w.reduce((M, A) => {
      const L = Ew(A);
      return M ? new pn({ x: Math.max(M.left, L.left), y: Math.max(M.top, L.top), width: Math.min(M.right, L.right) - Math.max(M.left, L.left), height: Math.min(M.bottom, L.bottom) - Math.max(M.top, L.top) }) : L;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, m.x), V.y += Math.min(I, m.y), V.width = Math.max(V.width - I * 2, m.x + m.width - I), V.height = Math.max(V.height - I * 2, m.y + m.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let x = { anchor: l.value, origin: o.value };
    function g(M) {
      const A = new pn(h), L = Jf(M.anchor, m), z = Jf(M.origin, A);
      let { x: N, y: Z } = N_(L, z);
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
      return A.x += N, A.y += Z, A.width = Math.min(A.width, s.value), A.height = Math.min(A.height, u.value), { overflows: yf(A, V), x: N, y: Z };
    }
    let C = 0, k = 0;
    const T = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: A, overflows: L } = g(x);
      C += M, k += A, h.x += M, h.y += A;
      {
        const z = gf(x.anchor), N = L.x.before || L.x.after, Z = L.y.before || L.y.after;
        let J = false;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && N && !P.x || F === "y" && Z && !P.y) {
            const G = { anchor: { ...x.anchor }, origin: { ...x.origin } }, W = F === "x" ? z === "y" ? us : ss : z === "y" ? ss : us;
            G.anchor = W(G.anchor), G.origin = W(G.origin);
            const { overflows: R } = g(G);
            (R[F].before <= L[F].before && R[F].after <= L[F].after || R[F].before + R[F].after < (L[F].before + L[F].after) / 2) && (x = G, J = P[F] = true);
          }
        }), J) continue;
      }
      L.x.before && (C += L.x.before, h.x += L.x.before), L.x.after && (C -= L.x.after, h.x -= L.x.after), L.y.before && (k += L.y.before, h.y += L.y.before), L.y.after && (k -= L.y.after, h.y -= L.y.after);
      {
        const z = yf(h, V);
        T.x = V.width - z.x.before - z.x.after, T.y = V.height - z.y.before - z.y.after, C += z.x.before, h.x += z.x.before, k += z.y.before, h.y += z.y.before;
      }
      break;
    }
    const D = gf(x.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: ve(ys(k)), left: e.isRtl.value ? void 0 : ve(ys(C)), right: e.isRtl.value ? ve(ys(-C)) : void 0, minWidth: ve(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ve(Qf(Xe(T.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ve(Qf(Xe(T.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: T, contentBox: h, flipped: P };
  }
  return ce(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Te(() => {
    const h = y();
    if (!h) return;
    const { available: w, contentBox: I } = h;
    I.height > w.y && requestAnimationFrame(() => {
      y(), requestAnimationFrame(() => {
        y();
      });
    });
  }), { updateLocation: y };
}
function ys(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Qf(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let tu = true;
const Ji = [];
function Y_(e) {
  !tu || Ji.length ? (Ji.push(e), nu()) : (tu = false, e(), nu());
}
let ev = -1;
function nu() {
  cancelAnimationFrame(ev), ev = requestAnimationFrame(() => {
    const e = Ji.shift();
    e && e(), Ji.length ? nu() : tu = true;
  });
}
const Hg = { none: null, close: q_, block: X_, reposition: Z_ }, G_ = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Hg } }, "VOverlay-scroll-strategies");
function K_(e, t) {
  if (!Ze) return;
  let n;
  ct(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Nl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = Hg[e.scrollStrategy]) == null ? void 0 : _a3.call(Hg, t, e, n);
    }));
  }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function q_(e) {
  function t(n) {
    e.isActive.value = false;
  }
  zg(Pc(e.target.value, e.contentEl.value), t);
}
function X_(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = Pc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Gi(a, t.contained ? n : void 0), ...Gi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => ic(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ve(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ve(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ve(o)), r.classList.add("v-overlay-scroll-blocked");
  }), bt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Z_(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    Y_(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      zg(Pc(e.target.value, e.contentEl.value), (r) => {
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
function Pc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function zg(e, t) {
  const n = [document, ...Gi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), bt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const au = Symbol.for("vuetify:v-menu"), Tc = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Ac(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Vw(u, () => {
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
const J_ = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Tc() }, "VOverlay-activator");
function Q_(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = St("useActivator"), i = K();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = Ac(e, (k) => {
    k === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== k && (u = true), n.value = k);
  }), S = K(), m = { onClick: (k) => {
    k.stopPropagation(), i.value = k.currentTarget || k.target, n.value || (S.value = [k.clientX, k.clientY]), n.value = !n.value;
  }, onMouseenter: (k) => {
    r = true, i.value = k.currentTarget || k.target, f();
  }, onMouseleave: (k) => {
    r = false, v();
  }, onFocus: (k) => {
    Wl(k.target, ":focus-visible") !== false && (s = true, k.stopPropagation(), i.value = k.currentTarget || k.target, f());
  }, onBlur: (k) => {
    s = false, k.stopPropagation(), v({ minDelay: 1 });
  } }, y = _(() => {
    const k = {};
    return d.value && (k.onClick = m.onClick), e.openOnHover && (k.onMouseenter = m.onMouseenter, k.onMouseleave = m.onMouseleave), c.value && (k.onFocus = m.onFocus, k.onBlur = m.onBlur), k;
  }), h = _(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      r = true, f();
    }, k.onMouseleave = () => {
      r = false, v();
    }), c.value && (k.onFocusin = (T) => {
      T.target.matches(":focus-visible") && (s = true, f());
    }, k.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const T = He(au, null);
      k.onClick = () => {
        n.value = false, T == null ? void 0 : T.closeParents();
      };
    }
    return k;
  }), w = _(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, k.onMouseleave = () => {
      r = false, v();
    }), k;
  });
  ce(a, (k) => {
    var _a3;
    k && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = l.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), ce(n, (k) => {
    k || setTimeout(() => {
      S.value = void 0;
    });
  }, { flush: "post" });
  const I = $o();
  ct(() => {
    I.value && Te(() => {
      i.value = I.el;
    });
  });
  const V = $o(), x = _(() => e.target === "cursor" && S.value ? S.value : V.value ? V.el : Wg(e.target, o) || i.value), g = _(() => Array.isArray(x.value) ? void 0 : x.value);
  let C;
  return ce(() => !!e.activator, (k) => {
    k && Ze ? (C = Nl(), C.run(() => {
      eV(e, o, { activatorEl: i, activatorEvents: y });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), bt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: x, targetEl: g, targetRef: V, activatorEvents: y, contentEvents: h, scrimEvents: w };
}
function eV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  ce(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Te(() => o());
  }, { immediate: true }), ce(() => e.activatorProps, () => {
    o();
  }), bt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Mw(s, Y(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Bw(s, Y(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Wg(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function Wg(e, t) {
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
const jg = H({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Ei = /* @__PURE__ */ new Map();
let tv = 0;
function nv(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Ei.values()).filter((u) => {
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
function Ug(e, t) {
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
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Te(), n.value && !r && S !== m && o.value && tt(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Pa(o.value)[0]) == null ? void 0 : _a3.focus());
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
  Ze && (ce(() => e.retainFocus, (v) => {
    v ? Ei.set(i, { isActive: n, contentEl: o }) : Ei.delete(i);
  }, { immediate: true }), ce(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), tv++ < 1 && document.addEventListener("keydown", nv)), bt(() => {
    Ei.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --tv < 1 && document.removeEventListener("keydown", nv);
  });
}
function Yg() {
  if (!Ze) return re(false);
  const { ssr: e } = nn();
  if (e) {
    const t = re(false);
    return Ct(() => {
      t.value = true;
    }), t;
  } else return re(true);
}
const Dc = H({ eager: Boolean }, "lazy");
function Ec(e, t) {
  const n = re(false), a = B(() => n.value || e.eager || t.value);
  ce(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function kl() {
  const t = St("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const av = Symbol.for("vuetify:stack"), uo = At([]);
function tV(e, t, n) {
  const a = St("useStack"), l = !n, o = He(av, void 0), i = At({ activeChildren: /* @__PURE__ */ new Set() });
  it(av, i);
  const r = re(Number(tt(t)));
  $t(e, () => {
    var _a3;
    const c = (_a3 = uo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(tt(t)), l && uo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), bt(() => {
      if (l) {
        const d = Pe(uo).findIndex((f) => f[0] === a.uid);
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
  }), { globalTop: al(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function nV(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !Ze) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function aV() {
  return true;
}
function Gg(e, t, n) {
  if (!e || Kg(e, n) === false) return false;
  const a = Th(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function Kg(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || aV)(e);
}
function lV(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Gg(e, t, n) && setTimeout(() => {
    Kg(e, n) && a && a(e);
  }, 0);
}
function lv(e, t) {
  const n = Th(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const lu = { mounted(e, t) {
  const n = (l) => lV(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Gg(l, e, t);
  };
  lv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (lv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function oV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return b(Da, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && p("div", Y({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const vi = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...J_(), ...pe(), ...kt(), ...Dc(), ...H_(), ...G_(), ...jg(), ...We(), ...ga() }, "VOverlay"), Un = ee()({ name: "VOverlay", directives: { vClickOutside: lu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Fe(vi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = St("VOverlay"), i = K(), r = K(), s = K(), u = xe(e, "modelValue"), c = _({ get: () => u.value, set: (Q) => {
    Q && e.disabled || (u.value = Q);
  } }), { themeClasses: d } = Ke(e), { rtlClasses: f, isRtl: v } = _t(), { hasContent: S, onAfterLeave: m } = Ec(e, c), y = qe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: w, stackStyles: I } = tV(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: x, target: g, targetEl: C, targetRef: k, activatorEvents: T, contentEvents: P, scrimEvents: E } = Q_(e, { isActive: c, isTop: w, contentEl: s }), { teleportTarget: D } = nV(() => {
    var _a3, _b2, _c2;
    const Q = e.attach || e.contained;
    if (Q) return Q;
    const de = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return de instanceof ShadowRoot ? de : false;
  }), { dimensionStyles: M } = wt(e), A = Yg(), { scopeId: L } = kl();
  ce(() => e.disabled, (Q) => {
    Q && (c.value = false);
  });
  const { contentStyles: z, updateLocation: N } = z_(e, { isRtl: v, contentEl: s, target: g, isActive: c });
  K_(e, { root: i, contentEl: s, targetEl: C, target: g, isActive: c, updateLocation: N });
  function Z(Q) {
    l("click:outside", Q), e.persistent ? j() : c.value = false;
  }
  function J(Q) {
    return c.value && w.value && (!e.scrim || Q.target === r.value || Q instanceof MouseEvent && Q.shadowTarget === r.value);
  }
  Ug(e, { isActive: c, localTop: w, contentEl: s, activatorEl: V }), Ze && ce(c, (Q) => {
    Q ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
  }, { immediate: true }), Nt(() => {
    Ze && window.removeEventListener("keydown", F);
  });
  function F(Q) {
    var _a3, _b2, _c2;
    Q.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", Q), e.persistent ? j() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function G(Q) {
    Q.key === "Escape" && !h.value || l("keydown", Q);
  }
  const W = ng();
  $t(() => e.closeOnBack, () => {
    R1(W, (Q) => {
      h.value && c.value ? (Q(false), e.persistent ? j() : c.value = false) : Q();
    });
  });
  const R = K();
  ce(() => c.value && (e.absolute || e.contained) && D.value == null, (Q) => {
    if (Q) {
      const de = gr(i.value);
      de && de !== document.scrollingElement && (R.value = de.scrollTop);
    }
  });
  function j() {
    e.noClickAnimation || s.value && aa(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Lo });
  }
  function ie() {
    l("afterEnter");
  }
  function ae() {
    m(), l("afterLeave");
  }
  return ne(() => {
    var _a3;
    return p(ge, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: k, props: Y({ ref: x }, T.value, e.activatorProps) }), A.value && S.value && b(tS, { disabled: !D.value, to: D.value }, { default: () => [p("div", Y({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: ve(R.value) }, e.style], ref: i, onKeydown: G }, L, a), [b(oV, Y({ color: y, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), b(Gt, { appear: true, persisted: true, transition: e.transition, target: g.value, onAfterEnter: ie, onAfterLeave: ae }, { default: () => {
      var _a4;
      return [nt(p("div", Y({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, z.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[En, c.value], [lu, { handler: Z, closeConditional: J, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: g, animateClick: j, contentEl: s, rootEl: i, globalTop: h, localTop: w, updateLocation: N };
} }), qg = H({ id: String, submenu: Boolean, ...Fe(vi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: Sr } }), ["absolute"]) }, "VMenu"), ql = ee()({ name: "VMenu", props: qg(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), { scopeId: l } = kl(), { isRtl: o } = _t(), i = Mt(), r = B(() => e.id || `v-menu-${i}`), s = K(), u = He(au, null), c = re(/* @__PURE__ */ new Set());
  it(au, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !Iw(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Nt(() => u == null ? void 0 : u.unregister()), ju(() => a.value = false), ce(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !yh(Pa((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const y = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    y && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), Qa(y, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), Qa(y, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), Qa(y, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const S = _(() => Y({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return ne(() => {
    const m = Un.filterProps(e);
    return b(Un, Y({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (y) => a.value = y, absolute: true, activatorProps: S.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var y = arguments.length, h = new Array(y), w = 0; w < y; w++) h[w] = arguments[w];
      return b(Me, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...h)];
      } });
    } });
  }), Pt({ id: r, \u03A8openChildren: c }, s);
} }), Mc = H({ color: String, ...Ht(), ...pe(), ...kt(), ...xt(), ...Zn(), ...eo(), ...ot(), ...De(), ...We() }, "VSheet"), La = ee()({ name: "VSheet", props: Mc(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { borderClasses: i } = qt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { locationStyles: u } = Ra(e), { positionClasses: c } = to(e), { roundedClasses: d } = dt(e);
  return ne(() => b(e.tag, { class: te(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: me([o.value, r.value, u.value, e.style]) }, n)), {};
} }), iV = H({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...pe(), ...ga({ transition: { component: gc } }) }, "VCounter"), Vr = ee()({ name: "VCounter", functional: true, props: iV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ne(() => b(Gt, { transition: e.transition }, { default: () => [nt(p("div", { class: te(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: me(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[En, e.active]])] })), {};
} }), rV = H({ floating: Boolean, ...pe() }, "VFieldLabel"), mo = ee()({ name: "VFieldLabel", props: rV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(no, { class: te(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: me(e.style) }, n)), {};
} }), sV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mi = H({ appendInnerIcon: Ce, bgColor: String, clearable: Boolean, clearIcon: { type: Ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => sV.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...pe(), ...xr(), ...ot(), ...We() }, "VField"), Fa = ee()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...fi(), ...mi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = Ke(e), { loaderClasses: i } = ri(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = pa(e), { InputIcon: d } = di(e), { roundedClasses: f } = dt(e), { rtlClasses: v } = _t(), S = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), y = B(() => !e.singleLine && m.value), h = Mt(), w = _(() => e.id || `input-${h}`), I = B(() => e.details ? `${w.value}-messages` : void 0), V = K(), x = K(), g = K(), C = _(() => ["plain", "underlined"].includes(e.variant)), k = _(() => e.error || e.disabled ? void 0 : S.value && s.value ? e.color : e.baseColor), T = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? k.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = qe(() => e.bgColor), { textColorClasses: D, textColorStyles: M } = Et(k);
  ce(S, (Z) => {
    if (y.value && !Wn()) {
      const J = V.value.$el, F = x.value.$el;
      requestAnimationFrame(() => {
        const G = nc(J), W = F.getBoundingClientRect(), R = W.x - G.x, j = W.y - G.y - (G.height / 2 - W.height / 2), ie = W.width / 0.75, ae = Math.abs(ie - G.width) > 1 ? { maxWidth: ve(ie) } : void 0, Q = getComputedStyle(J), de = getComputedStyle(F), Ve = parseFloat(Q.transitionDuration) * 1e3 || 150, ke = parseFloat(de.getPropertyValue("--v-field-label-scale")), ye = de.getPropertyValue("color");
        J.style.visibility = "visible", F.style.visibility = "hidden", aa(J, { transform: `translate(${R}px, ${j}px) scale(${ke})`, color: ye, ...ae }, { duration: Ve, easing: Lo, direction: Z ? "normal" : "reverse" }).finished.then(() => {
          J.style.removeProperty("visibility"), F.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = _(() => ({ isActive: S, isFocused: s, controlRef: g, iconColor: T, blur: c, focus: u })), L = B(() => {
    const Z = !S.value;
    return { "aria-hidden": Z, for: Z ? void 0 : w.value };
  }), z = B(() => {
    const Z = y.value && S.value;
    return { "aria-hidden": Z, for: Z ? void 0 : w.value };
  });
  function N(Z) {
    Z.target !== document.activeElement && Z.preventDefault();
  }
  return ne(() => {
    var _a3;
    const Z = e.variant === "outlined", J = !!(l["prepend-inner"] || e.prependInnerIcon), F = !!(e.clearable || l.clear) && !e.disabled, G = !!(l["append-inner"] || e.appendInnerIcon || F), W = () => l.label ? l.label({ ...A.value, label: e.label, props: { for: w.value } }) : e.label;
    return p("div", Y({ class: ["v-field", { "v-field--active": S.value, "v-field--appended": G, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": J, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !W(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [E.value, e.style], onClick: N }, n), [p("div", { class: "v-field__overlay" }, null), b(si, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), J && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](A.value) : e.prependInnerIcon && b(d, { key: "prepend-icon", name: "prependInner", color: T.value }, null)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && b(mo, Y({ key: "floating-label", ref: x, class: [D.value], floating: true }, L.value, { style: M.value }), { default: () => [W()] }), m.value && b(mo, Y({ key: "label", ref: V, id: e.labelId }, z.value), { default: () => [W()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...A.value, props: { id: w.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? p("div", { id: w.value, class: "v-field__input", "aria-describedby": I.value }, null)]), F && b(yc, { key: "clear" }, { default: () => [nt(p("div", { class: "v-field__clearable", onMousedown: (R) => {
      R.preventDefault(), R.stopPropagation();
    } }, [b(Me, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...A.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : b(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[En, e.dirty]])] }), G && p("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](A.value) : e.appendInnerIcon && b(d, { key: "append-icon", name: "appendInner", color: T.value }, null)]), p("div", { class: te(["v-field__outline", D.value]), style: me(M.value) }, [Z && p(ge, null, [p("div", { class: "v-field__outline__start" }, null), y.value && p("div", { class: "v-field__outline__notch" }, [b(mo, Y({ ref: x, floating: true }, L.value), { default: () => [W()] })]), p("div", { class: "v-field__outline__end" }, null)]), C.value && y.value && b(mo, Y({ ref: x, floating: true }, L.value), { default: () => [W()] })])]);
  }), { controlRef: g, fieldIconColor: T };
} }), Xg = H({ autocomplete: String }, "autocomplete");
function Bc(e) {
  const t = Mt(), n = re(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Zg(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const uV = ["color", "file", "time", "date", "datetime-local", "week", "month"], hi = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Xg(), ...Fe(Sa(), ["direction"]), ...mi() }, "VTextField"), Yn = ee()({ name: "VTextField", directives: { vIntersect: An }, inheritAttrs: false, props: hi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = xe(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = Zg(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = K(), S = K(), m = K(), y = Bc(e), h = _(() => uV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function w() {
    y.isSuppressing.value && y.update(), i.value || r(), Te(() => {
      var _a3;
      m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus());
    });
  }
  function I(C) {
    a("mousedown:control", C), C.target !== m.value && (w(), C.preventDefault());
  }
  function V(C) {
    a("click:control", C);
  }
  function x(C, k) {
    C.stopPropagation(), w(), Te(() => {
      k(), ai(e["onClick:clear"], C);
    });
  }
  function g(C) {
    var _a3;
    const k = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = k.value;
      return;
    }
    const T = k.value, P = k.selectionStart, E = k.selectionEnd;
    o.value = T, Te(() => {
      let D = 0;
      T.trimStart().length === k.value.length && (D = T.length - k.value.length), P != null && (k.selectionStart = P - D), E != null && (k.selectionEnd = E - D);
    });
  }
  return ne(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), k = !!(C || l.details), [T, P] = qn(n), { modelValue: E, ...D } = Rt.filterProps(e), M = Fa.filterProps(e);
    return b(Rt, Y({ ref: v, modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, T, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (A) => {
      let { id: L, isDisabled: z, isDirty: N, isReadonly: Z, isValid: J, hasDetails: F, reset: G } = A;
      return b(Fa, Y({ ref: S, onMousedown: I, onClick: V, "onClick:clear": (W) => x(W, G), role: e.role }, Fe(M, ["onClick:clear"]), { id: L.value, labelId: `${L.value}-label`, active: h.value || N.value, dirty: N.value || e.dirty, disabled: z.value, focused: i.value, details: F.value, error: J.value === false }), { ...l, default: (W) => {
        let { props: { class: R, ...j }, controlRef: ie } = W;
        const ae = p("input", Y({ ref: (Q) => m.value = ie.value = Q, value: o.value, onInput: g, autofocus: e.autofocus, readonly: Z.value, disabled: z.value, name: y.fieldName.value, autocomplete: y.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${L.value}-label` }, j, P), null);
        return p(ge, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), nt(l.default ? p("div", { class: te(R), "data-no-activator": "" }, [l.default({ id: L }), ae]) : ca(ae, { class: R }), [[An, u, null, { once: true }]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: k ? (A) => {
      var _a3;
      return p(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, A), C && p(ge, null, [p("span", null, null), b(Vr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, v, S, m);
} }), cV = H({ renderless: Boolean, ...pe() }, "VVirtualScrollItem"), Jg = ee()({ name: "VVirtualScrollItem", inheritAttrs: false, props: cV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = Sn(void 0, "border");
  ce(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), ne(() => {
    var _a3, _b2;
    return e.renderless ? p(ge, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : p("div", Y({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), dV = -1, fV = 1, bs = 100, Qg = H({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function ey(e, t) {
  const n = nn(), a = re(0);
  ct(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = re(0), o = re(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = re(0), r = re(0), s = K(), u = K();
  let c = 0;
  const { resizeRef: d, contentRect: f } = Sn();
  ct(() => {
    d.value = s.value;
  });
  const v = _(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), S = _(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length });
  const h = re(0);
  let w = -1;
  function I(F) {
    return m[F] || a.value;
  }
  const V = vh(() => {
    const F = performance.now();
    y[0] = 0;
    const G = t.value.length;
    for (let W = 1; W <= G; W++) y[W] = (y[W - 1] || 0) + I(W - 1);
    h.value = Math.max(h.value, performance.now() - F);
  }, h), x = ce(S, (F) => {
    F && (x(), c = u.value.offsetTop, V.immediate(), z(), ~w && Te(() => {
      Ze && window.requestAnimationFrame(() => {
        Z(w), w = -1;
      });
    }));
  });
  bt(() => {
    V.clear();
  });
  function g(F, G) {
    const W = m[F], R = a.value;
    a.value = R ? Math.min(a.value, G) : G, (W !== G || R !== a.value) && (m[F] = G, V());
  }
  function C(F) {
    F = Xe(F, 0, t.value.length);
    const G = Math.floor(F), W = F % 1, R = G + 1, j = y[G] || 0, ie = y[R] || j;
    return j + (ie - j) * W;
  }
  function k(F) {
    return vV(y, F);
  }
  let T = 0, P = 0, E = 0;
  ce(v, (F, G) => {
    z(), F < G && requestAnimationFrame(() => {
      P = 0, z();
    });
  });
  let D = -1;
  function M() {
    if (!s.value || !u.value) return;
    const F = s.value.scrollTop, G = performance.now();
    G - E > 500 ? (P = Math.sign(F - T), c = u.value.offsetTop) : P = F - T, T = F, E = G, window.clearTimeout(D), D = window.setTimeout(A, 500), z();
  }
  function A() {
    !s.value || !u.value || (P = 0, E = 0, window.clearTimeout(D), z());
  }
  let L = -1;
  function z() {
    cancelAnimationFrame(L), L = requestAnimationFrame(N);
  }
  function N() {
    if (!s.value || !v.value || !a.value) return;
    const F = T - c, G = Math.sign(P), W = Math.max(0, F - bs), R = Xe(k(W), 0, t.value.length), j = F + v.value + bs, ie = Xe(k(j) + 1, R + 1, t.value.length);
    if ((G !== dV || R < l.value) && (G !== fV || ie > o.value)) {
      const ae = C(l.value) - C(R), Q = C(ie) - C(o.value);
      Math.max(ae, Q) > bs ? (l.value = R, o.value = ie) : (R <= 0 && (l.value = R), ie >= t.value.length && (o.value = ie));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Z(F) {
    const G = C(F);
    !s.value || F && !G ? w = F : s.value.scrollTop = G;
  }
  const J = _(() => t.value.slice(l.value, o.value).map((F, G) => {
    const W = G + l.value;
    return { raw: F, index: W, key: pt(F, e.itemKey, W) };
  }));
  return ce(t, () => {
    m = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length }), V.immediate(), z();
  }, { deep: 1 }), { calculateVisibleItems: z, containerRef: s, markerRef: u, computedItems: J, paddingTop: i, paddingBottom: r, scrollToIndex: Z, handleScroll: M, handleScrollend: A, handleItemResize: g };
}
function vV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const mV = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Qg(), ...pe(), ...kt() }, "VVirtualScroll"), Ir = ee()({ name: "VVirtualScroll", props: mV(), setup(e, t) {
  let { slots: n } = t;
  const a = St("VVirtualScroll"), { dimensionStyles: l } = wt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: S } = ey(e, B(() => e.items));
  return $t(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[h]("scroll", s, { passive: true }), document[h]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[h]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[h]("scrollend", u));
    }
    Ct(() => {
      i.value = gr(a.vnode.el, true), m(true);
    }), bt(m);
  }), ne(() => {
    const m = S.value.map((y) => b(Jg, { key: y.key, renderless: e.renderless, "onUpdate:height": (h) => c(y.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: y.raw, index: y.index, ...h });
    } }));
    return e.renderless ? p(ge, null, [p("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ve(f.value) } }, null), m, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ve(v.value) } }, null)]) : p("div", { ref: i, class: te(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: me([l.value, e.style]) }, [p("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ve(f.value), paddingBottom: ve(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function $c(e, t) {
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
function Lc(e) {
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
      if (v.type === "list" && tt(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
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
      if (r[S].length > 0 || m.type === "list" && tt(m.displayItemsCount) > 0) return S;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const hV = (e, t, n) => {
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
const wl = H({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function gV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? hV, o = (n == null ? void 0 : n.filterKeys) ? lt(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = lt(e[s]), d = {}, f = {};
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
        for (const w of h) {
          const I = pt(c, w), V = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[w];
          if (v = V ? V(I, t, u) : l(I, t, u), v !== -1 && v !== false) V ? d[w] = ps(v, t) : f[w] = ps(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = ps(v, t));
      const m = Object.keys(f).length, y = Object.keys(d).length;
      if (!m && !y || (n == null ? void 0 : n.filterMode) === "union" && y !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (y !== i || !m && i > 0 && !S)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function xl(e, t, n, a) {
  const l = re([]), o = re(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Ue(t).map((s) => [s, a.transform(s)]) : Ue(t));
  ct(() => {
    const s = typeof n == "function" ? n() : Ue(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = gV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Ue(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Ue(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((S) => {
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
function Fc(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [p("span", { class: te(`${e}__unmask`) }, [t.slice(o, a[0])]), p("span", { class: te(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(p("span", { class: te(`${e}__unmask`) }, [t.slice(a[1])])), p(ge, null, [i]);
  });
}
const yV = H({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Oc(e, t) {
  const n = Mt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => tt(t)), ariaControls: B(() => a.value) };
}
const Rc = H({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...yV(), ...$g({ itemChildren: false }) }, "Select"), bV = H({ search: String, ...wl({ filterKeys: ["title"] }), ...Rc(), ...Fe(hi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ga({ transition: { component: Sr } }) }, "VSelect"), Nc = ee()({ name: "VSelect", props: bV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), l = K(), o = K(), i = K(), r = K(), s = K(), { items: u, transformIn: c, transformOut: d } = Vc(e), f = xe(e, "search", ""), { filteredItems: v, getMatches: S } = xl(e, u, () => f.value), m = xe(e, "modelValue", [], (ye) => c(ye === null ? [null] : lt(ye)), (ye) => {
    const $ = d(ye);
    return e.multiple ? $ : $[0] ?? null;
  }), y = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = ao(e), w = Bc(e), I = _(() => m.value.map((ye) => ye.value)), V = re(false), x = B(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: g } = di(e);
  let C = "", k = 0, T;
  const P = _(() => {
    const ye = f.value ? v.value : u.value;
    return e.hideSelected ? ye.filter(($) => !m.value.some((O) => (e.valueComparator || Dt)(O, $))) : ye;
  }), E = _(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), D = xe(e, "menu"), M = _({ get: () => D.value, set: (ye) => {
    var _a3;
    D.value && !ye && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ye && E.value || (D.value = ye);
  } }), { menuId: A, ariaExpanded: L, ariaControls: z } = Oc(e, M), N = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Z = K(), J = $c(Z, l), { onTabKeydown: F } = Lc({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Z, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    M.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function G(ye) {
    e.openOnClear && (M.value = true);
  }
  function W() {
    E.value || (M.value = !M.value);
  }
  function R(ye) {
    var _a3;
    ye.key === "Tab" && F(ye), ((_a3 = Z.value) == null ? void 0 : _a3.$el.contains(ye.target)) && jl(ye) && j(ye);
  }
  function j(ye) {
    var _a3, _b2, _c2;
    if (!ye.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ye.key) && ye.preventDefault(), ["Enter", "ArrowDown", " "].includes(ye.key) && (M.value = true), ["Escape", "Tab"].includes(ye.key) && (M.value = false), e.clearable && ye.key === "Backspace") {
      ye.preventDefault(), m.value = [], G();
      return;
    }
    ye.key === "Home" ? (_a3 = Z.value) == null ? void 0 : _a3.focus("first") : ye.key === "End" && ((_b2 = Z.value) == null ? void 0 : _b2.focus("last"));
    const $ = 1e3;
    if (!jl(ye)) return;
    const O = performance.now();
    O - T > $ && (C = "", k = 0), C += ye.key.toLowerCase(), T = O;
    const X = P.value;
    function se() {
      let U = le();
      return U || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), k++, U = le(), U) || (k = 0, U = le(), U) ? U : (C = ye.key.toLowerCase(), le());
    }
    function le() {
      for (let U = k; U < X.length; U++) {
        const oe = X[U];
        if (oe.title.toLowerCase().startsWith(C)) return [oe, U];
      }
    }
    const ue = se();
    if (!ue) return;
    const [be, fe] = ue;
    k = fe, (_c2 = Z.value) == null ? void 0 : _c2.focus(fe), e.multiple || (m.value = [be]);
  }
  function ie(ye) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ye.props.disabled) if (e.multiple) {
      const O = m.value.findIndex((se) => (e.valueComparator || Dt)(se.value, ye.value)), X = $ ?? !~O;
      if (~O) {
        const se = X ? [...m.value, ye] : [...m.value];
        se.splice(O, 1), m.value = se;
      } else X && (m.value = [...m.value, ye]);
    } else {
      const O = $ !== false;
      m.value = O ? [ye] : [], Te(() => {
        M.value = false;
      });
    }
  }
  function ae(ye) {
    var _a3;
    const $ = ye.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains($)) || (M.value = false);
  }
  function Q() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function de() {
    var _a3;
    f.value = "", V.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function Ve(ye) {
    V.value = true;
  }
  function ke(ye) {
    if (ye == null) m.value = [];
    else if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const $ = u.value.find((O) => O.title === ye);
      $ && ie($);
    } else l.value && (l.value.value = "");
  }
  return ce(M, () => {
    if (!e.hideSelected && M.value && m.value.length) {
      const ye = P.value.findIndex(($) => m.value.some((O) => (e.valueComparator || Dt)(O.value, $.value)));
      Ze && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ye >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ye));
      });
    }
  }), ce(u, (ye, $) => {
    M.value || V.value && e.hideNoData && !$.length && ye.length && (M.value = true);
  }), ne(() => {
    const ye = !!(e.chips || n.chip), $ = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), O = m.value.length > 0, X = Yn.filterProps(e), se = O || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, le = { search: f, filteredItems: v.value };
    return b(Yn, Y({ ref: l }, X, { modelValue: m.value.map((ue) => ue.props.title).join(", "), name: void 0, "onUpdate:modelValue": ke, focused: V.value, "onUpdate:focused": (ue) => V.value = ue, validationValue: m.externalValue, counterValue: y.value, dirty: O, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: se, "onClick:clear": G, "onMousedown:control": W, onBlur: ae, onKeydown: j, "aria-expanded": L.value, "aria-controls": z.value }), { ...n, default: (ue) => {
      let { id: be } = ue;
      return p(ge, null, [p("select", { hidden: true, multiple: e.multiple, name: w.fieldName.value }, [u.value.map((fe) => p("option", { key: fe.value, value: fe.value, selected: I.value.includes(fe.value) }, null))]), b(ql, Y({ id: A.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (fe) => M.value = fe, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: Q, onAfterLeave: de }, N.value), { default: () => [b(La, { onFocusin: Ve, onKeydown: R }, { default: () => [n["menu-header"] && p("header", { ref: i }, [n["menu-header"](le)]), $ && b(Kl, Y({ key: "select-list", ref: Z, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${be.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, J, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(kn, { key: "no-data", title: a(e.noDataText) }, null)), b(Ir, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (fe) => {
          var _a4, _b3, _c3;
          let { item: U, index: oe, itemRef: _e } = fe;
          const q = Tw(U.props), he = Y(U.props, { ref: _e, key: U.value, onClick: () => ie(U, null), "aria-posinset": oe + 1, "aria-setsize": P.value.length });
          return U.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: U.raw, index: oe })) ?? b(dn, Y(U.props, { key: `divider-${oe}` }), null) : U.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: U.raw, index: oe })) ?? b(lo, Y(U.props, { key: `subheader-${oe}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: U, index: oe, props: he })) ?? b(kn, Y(he, { role: "option" }), { prepend: (Se) => {
            let { isSelected: we } = Se;
            return p(ge, null, [e.multiple && !e.hideSelected ? b(Dn, { key: U.value, modelValue: we, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ie) => Ie.preventDefault() }, null) : void 0, q.prependAvatar && b(vn, { image: q.prependAvatar }, null), q.prependIcon && b(Ge, { icon: q.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Fc("v-select", U.title, (_a5 = S(U)) == null ? void 0 : _a5.title) : U.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: r }, [n["menu-footer"](le)])] })] }), m.value.map((fe, U) => {
        function oe(Se) {
          Se.stopPropagation(), Se.preventDefault(), ie(fe, false);
        }
        const _e = Y(fa.filterProps(fe.props), { "onClick:close": oe, onKeydown(Se) {
          Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), oe(Se));
        }, onMousedown(Se) {
          Se.preventDefault(), Se.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), q = ye ? !!n.chip : !!n.selection, he = q ? hr(ye ? n.chip({ item: fe, index: U, props: _e }) : n.selection({ item: fe, index: U })) : void 0;
        if (!(q && !he)) return p("div", { key: fe.value, class: "v-select__selection" }, [ye ? n.chip ? b(Me, { key: "chip-defaults", defaults: { VChip: { closable: x.value, size: "small", text: fe.title } } }, { default: () => [he] }) : b(fa, Y({ key: "chip", closable: x.value, size: "small", text: fe.title, disabled: fe.props.disabled }, _e), null) : he ?? p("span", { class: "v-select__selection-text" }, [fe.title, e.multiple && U < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [ut(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ue = arguments.length, be = new Array(ue), fe = 0; fe < ue; fe++) be[fe] = arguments[fe];
      return p(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...be), e.menuIcon ? b(Ge, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && b(g, { key: "append-icon", name: "appendInner", color: be[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: V, menu: M, search: f, filteredItems: v, select: ie }, l);
} }), pV = H({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...wl({ filterKeys: ["title"] }), ...Rc(), ...Fe(hi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), SV = ee()({ name: "VAutocomplete", props: pV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), l = K(), o = re(false), i = re(true), r = re(false), s = K(), u = K(), c = re(-1), d = re(null), { items: f, transformIn: v, transformOut: S } = Vc(e), { textColorClasses: m, textColorStyles: y } = Et(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = di(e), w = xe(e, "search", ""), I = xe(e, "modelValue", [], (U) => v(U === null ? [null] : lt(U)), (U) => {
    const oe = S(U);
    return e.multiple ? oe : oe[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), x = ao(e), { filteredItems: g, getMatches: C } = xl(e, f, () => d.value ?? (i.value ? "" : w.value)), k = _(() => e.hideSelected && d.value === null ? g.value.filter((U) => !I.value.some((oe) => oe.value === U.value)) : g.value), T = B(() => e.closableChips && !x.isReadonly.value && !x.isDisabled.value), P = _(() => !!(e.chips || n.chip)), E = _(() => P.value || !!n.selection), D = _(() => I.value.map((U) => U.props.value)), M = _(() => k.value.find((U) => U.type === "item" && !U.props.disabled)), A = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && w.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && k.value.length > 0 && !i.value && !r.value;
  }), L = _(() => e.hideNoData && !k.value.length || x.isReadonly.value || x.isDisabled.value), z = xe(e, "menu"), N = _({ get: () => z.value, set: (U) => {
    var _a3;
    z.value && !U && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || U && L.value || (z.value = U);
  } }), { menuId: Z, ariaExpanded: J, ariaControls: F } = Oc(e, N), G = K(), W = K(), R = K(), j = $c(G, l), { onTabKeydown: ie } = Lc({ groups: [{ type: "element", contentRef: W }, { type: "list", contentRef: G, displayItemsCount: () => k.value.length }, { type: "element", contentRef: R }], onLeave: () => {
    var _a3;
    N.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function ae(U) {
    e.openOnClear && (N.value = true), w.value = "";
  }
  function Q() {
    L.value || (N.value = true);
  }
  function de(U) {
    L.value || (o.value && (U.preventDefault(), U.stopPropagation()), N.value = !N.value);
  }
  function Ve(U) {
    var _a3, _b2;
    U.key === "Tab" && ie(U), ((_a3 = G.value) == null ? void 0 : _a3.$el.contains(U.target)) && (jl(U) || U.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function ke(U) {
    var _a3, _b2, _c2, _d2, _e2;
    if (x.isReadonly.value) return;
    const oe = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, _e = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(U.key) && U.preventDefault(), ["Enter", "ArrowDown"].includes(U.key) && (N.value = true), ["Escape"].includes(U.key) && (N.value = false), A.value && ["Enter", "Tab"].includes(U.key) && M.value && !I.value.some((q) => {
      let { value: he } = q;
      return he === M.value.value;
    }) && fe(M.value), U.key === "ArrowDown" && A.value && ((_b2 = G.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(U.key)) {
      if (!e.multiple && E.value && I.value.length > 0 && !w.value) return fe(I.value[0], false);
      if (~c.value) {
        U.preventDefault();
        const q = c.value;
        fe(I.value[c.value], false), c.value = q >= _e - 1 ? _e - 2 : q;
      } else U.key === "Backspace" && !w.value && (c.value = _e - 1);
      return;
    }
    if (e.multiple) if (U.key === "ArrowLeft") {
      if (c.value < 0 && oe && oe > 0) return;
      const q = c.value > -1 ? c.value - 1 : _e - 1;
      if (I.value[q]) c.value = q;
      else {
        const he = ((_c2 = w.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(he, he);
      }
    } else if (U.key === "ArrowRight") {
      if (c.value < 0) return;
      const q = c.value + 1;
      I.value[q] ? c.value = q : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && jl(U) && (c.value = -1);
  }
  function ye(U) {
    if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const oe = f.value.find((_e) => _e.title === U.target.value);
      oe && fe(oe);
    }
  }
  function $() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function O() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function X(U) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function se(U) {
    r.value = false;
  }
  function le(U) {
    (U == null || U === "" && !e.multiple && !E.value) && (I.value = []);
  }
  function ue(U) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(U.relatedTarget)) && (o.value = true);
  }
  const be = re(false);
  function fe(U) {
    let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!U || U.props.disabled)) if (e.multiple) {
      const _e = I.value.findIndex((he) => (e.valueComparator || Dt)(he.value, U.value)), q = oe ?? !~_e;
      if (~_e) {
        const he = q ? [...I.value, U] : [...I.value];
        he.splice(_e, 1), I.value = he;
      } else q && (I.value = [...I.value, U]);
      e.clearOnSelect && (w.value = "");
    } else {
      const _e = oe !== false;
      I.value = _e ? [U] : [], d.value = i.value ? "" : w.value ?? "", w.value = _e && !E.value ? U.title : "", Te(() => {
        N.value = false, i.value = true;
      });
    }
  }
  return ce(o, (U, oe) => {
    var _a3;
    U !== oe && (U ? (be.value = true, w.value = e.multiple || E.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Te(() => be.value = false)) : (!e.multiple && w.value == null && (I.value = []), N.value = false, !i.value && w.value && (d.value = w.value), w.value = "", c.value = -1));
  }), ce(w, (U) => {
    !o.value || be.value || (U && (N.value = true), i.value = !U);
  }), ce(N, (U) => {
    if (!e.hideSelected && U && I.value.length && i.value) {
      const oe = k.value.findIndex((_e) => I.value.some((q) => _e.value === q.value));
      Ze && window.requestAnimationFrame(() => {
        var _a3;
        oe >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(oe));
      });
    }
    U && (d.value = null);
  }), ce(f, (U, oe) => {
    N.value || o.value && !oe.length && U.length && (N.value = true);
  }), ne(() => {
    const U = !!(!e.hideNoData || k.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), oe = I.value.length > 0, _e = Yn.filterProps(e), q = { search: w, filteredItems: g.value };
    return b(Yn, Y({ ref: l }, _e, { modelValue: w.value, "onUpdate:modelValue": [(he) => w.value = he, le], focused: o.value, "onUpdate:focused": (he) => o.value = he, validationValue: I.externalValue, counterValue: V.value, dirty: oe, onChange: ye, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": N.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: x.isReadonly.value, placeholder: oe ? void 0 : e.placeholder, "onClick:clear": ae, "onMousedown:control": Q, onKeydown: ke, onBlur: ue, "aria-expanded": J.value, "aria-controls": F.value }), { ...n, default: (he) => {
      let { id: Se } = he;
      return p(ge, null, [b(ql, Y({ id: Z.value, ref: s, modelValue: N.value, "onUpdate:modelValue": (we) => N.value = we, activator: "parent", contentClass: "v-autocomplete__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: $, onAfterLeave: O }, e.menuProps), { default: () => [b(La, { onFocusin: X, onKeydown: Ve }, { default: () => [n["menu-header"] && p("header", { ref: W }, [n["menu-header"](q)]), U && b(Kl, Y({ key: "autocomplete-list", ref: G, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (we) => we.preventDefault(), onFocusout: se, tabindex: "-1", selectable: !!k.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, j, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !k.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(kn, { key: "no-data", title: a(e.noDataText) }, null)), b(Ir, { ref: u, renderless: true, items: k.value, itemKey: "value" }, { default: (we) => {
          var _a4, _b3, _c3;
          let { item: Ie, index: $e, itemRef: je } = we;
          const Oe = Y(Ie.props, { ref: je, key: Ie.value, active: A.value && Ie === M.value ? true : void 0, onClick: () => fe(Ie, null), "aria-posinset": $e + 1, "aria-setsize": k.value.length });
          return Ie.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ie.raw, index: $e })) ?? b(dn, Y(Ie.props, { key: `divider-${$e}` }), null) : Ie.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ie.raw, index: $e })) ?? b(lo, Y(Ie.props, { key: `subheader-${$e}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ie, index: $e, props: Oe })) ?? b(kn, Y(Oe, { role: "option" }), { prepend: (ft) => {
            let { isSelected: at } = ft;
            return p(ge, null, [e.multiple && !e.hideSelected ? b(Dn, { key: Ie.value, modelValue: at, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (an) => an.preventDefault() }, null) : void 0, Ie.props.prependAvatar && b(vn, { image: Ie.props.prependAvatar }, null), Ie.props.prependIcon && b(Ge, { icon: Ie.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ie.title : Fc("v-autocomplete", Ie.title, (_a5 = C(Ie)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: R }, [n["menu-footer"](q)])] })] }), I.value.map((we, Ie) => {
        function $e(at) {
          at.stopPropagation(), at.preventDefault(), fe(we, false);
        }
        const je = Y(fa.filterProps(we.props), { "onClick:close": $e, onKeydown(at) {
          at.key !== "Enter" && at.key !== " " || (at.preventDefault(), at.stopPropagation(), $e(at));
        }, onMousedown(at) {
          at.preventDefault(), at.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Oe = P.value ? !!n.chip : !!n.selection, ft = Oe ? hr(P.value ? n.chip({ item: we, index: Ie, props: je }) : n.selection({ item: we, index: Ie })) : void 0;
        if (!(Oe && !ft)) return p("div", { key: we.value, class: te(["v-autocomplete__selection", Ie === c.value && ["v-autocomplete__selection--selected", m.value]]), style: me(Ie === c.value ? y.value : {}) }, [P.value ? n.chip ? b(Me, { key: "chip-defaults", defaults: { VChip: { closable: T.value, size: "small", text: we.title } } }, { default: () => [ft] }) : b(fa, Y({ key: "chip", closable: T.value, size: "small", text: we.title, disabled: we.props.disabled }, je), null) : ft ?? p("span", { class: "v-autocomplete__selection-text" }, [we.title, e.multiple && Ie < I.value.length - 1 && p("span", { class: "v-autocomplete__selection-comma" }, [ut(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var he = arguments.length, Se = new Array(he), we = 0; we < he; we++) Se[we] = arguments[we];
      return p(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? b(Ge, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: de, onClick: mr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && b(h, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: o, isPristine: i, menu: N, search: w, filteredItems: g, select: fe }, l);
} }), kV = H({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ce, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...pe(), ...Zn({ location: "top end" }), ...ot(), ...De(), ...We(), ...ga({ transition: "scale-rotate-transition" }), ...kt() }, "VBadge"), ty = ee()({ name: "VBadge", inheritAttrs: false, props: kV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = qe(() => e.color), { roundedClasses: l } = dt(e), { t: o } = Je(), { textColorClasses: i, textColorStyles: r } = Et(() => e.textColor), { themeClasses: s } = pr(), { locationStyles: u } = Ra(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = wt(e);
  return ne(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, S] = Os(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return b(e.tag, Y({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, S, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [p("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), b(Gt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [nt(p("span", Y({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? b(Ge, { icon: e.icon }, null) : f]), [[En, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), wV = H({ color: String, density: String, ...pe() }, "VBannerActions"), ny = ee()({ name: "VBannerActions", props: wV(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), ne(() => {
    var _a3;
    return p("div", { class: te(["v-banner-actions", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), ay = ha("v-banner-text"), xV = H({ avatar: String, bgColor: String, color: String, icon: Ce, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Ht(), ...pe(), ...ht(), ...kt(), ...hl({ mobile: null }), ...xt(), ...Zn(), ...eo(), ...ot(), ...De(), ...We() }, "VBanner"), CV = ee()({ name: "VBanner", props: xV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.bgColor), { borderClasses: o } = qt(e), { densityClasses: i } = Ft(e), { displayClasses: r, mobile: s } = nn(e), { dimensionStyles: u } = wt(e), { elevationClasses: c } = It(e), { locationStyles: d } = Ra(e), { positionClasses: f } = to(e), { roundedClasses: v } = dt(e), { themeClasses: S } = Ke(e), m = B(() => e.color), y = B(() => e.density);
  mt({ VBannerActions: { color: m, density: y } }), ne(() => {
    const h = !!(e.text || n.text), w = !!(e.avatar || e.icon), I = !!(w || n.prepend);
    return b(e.tag, { class: te(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, S.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: me([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && p("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? b(Me, { key: "prepend-defaults", disabled: !w, defaults: { VAvatar: { color: m.value, density: y.value, icon: e.icon, image: e.avatar } } }, n.prepend) : b(vn, { key: "prepend-avatar", color: m.value, density: y.value, icon: e.icon, image: e.avatar }, null)]), p("div", { class: "v-banner__content" }, [h && b(ay, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && b(ny, { key: "actions" }, n.actions)];
    } });
  });
} }), _V = H({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Ht(), ...pe(), ...ht(), ...xt(), ...ot(), ...gl({ name: "bottom-navigation" }), ...De({ tag: "header" }), ...pl({ selectedClass: "v-btn--selected" }), ...We() }, "VBottomNavigation"), VV = ee()({ name: "VBottomNavigation", props: _V(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = pr(), { borderClasses: l } = qt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = qe(() => e.bgColor), { densityClasses: r } = Ft(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { ssrBootStyles: c } = bl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = xe(e, "active", e.active), { layoutItemStyles: v } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Na(e, pc), mt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), ne(() => b(e.tag, { class: te(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: me([i.value, v.value, { height: ve(d.value) }, c.value, e.style]) }, { default: () => [n.default && p("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), ly = H({ fullscreen: Boolean, scrollable: Boolean, ...Fe(vi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: Sr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), ou = ee()({ name: "VDialog", props: ly(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = xe(e, "modelValue"), { scopeId: o } = kl(), i = K();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return ce(l, async (u) => {
    var _a3;
    u || (await Te(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), ne(() => {
    const u = Un.filterProps(e), c = Y({ "aria-haspopup": "dialog" }, e.activatorProps), d = Y({ tabindex: -1 }, e.contentProps);
    return b(Un, Y({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), S = 0; S < f; S++) v[S] = arguments[S];
      return b(Me, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = a.default) == null ? void 0 : _a3.call(a, ...v)];
      } });
    } });
  }), Pt({}, i);
} }), IV = H({ inset: Boolean, ...ly({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), PV = ee()({ name: "VBottomSheet", props: IV(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue");
  return ne(() => {
    const l = ou.filterProps(e);
    return b(ou, Y(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), TV = H({ divider: [Number, String], ...pe() }, "VBreadcrumbsDivider"), oy = ee()({ name: "VBreadcrumbsDivider", props: TV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var _a3;
    return p("li", { "aria-hidden": "true", class: te(["v-breadcrumbs-divider", e.class]), style: me(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), AV = H({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...pe(), ...Jt(kt(), ["width", "maxWidth"]), ...ci(), ...De({ tag: "li" }) }, "VBreadcrumbsItem"), iy = ee()({ name: "VBreadcrumbsItem", props: AV(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ui(e, a), o = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = wt(e), { textColorClasses: r, textColorStyles: s } = Et(() => o.value ? e.activeColor : e.color);
  return ne(() => b(e.tag, { class: te(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: me([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? p("a", Y({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), DV = H({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ce, items: { type: Array, default: () => [] }, ...pe(), ...ht(), ...ot(), ...De({ tag: "ul" }) }, "VBreadcrumbs"), EV = ee()({ name: "VBreadcrumbs", props: DV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.bgColor), { densityClasses: o } = Ft(e), { roundedClasses: i } = dt(e);
  mt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return ne(() => {
    const s = !!(n.prepend || e.icon);
    return b(e.tag, { class: te(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: me([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && p("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? b(Me, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : b(Ge, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return p(ge, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? b(iy, Y({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && b(oy, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), MV = H({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...pe(), ...xt(), ...dg(), ...ot(), ...De({ tag: "button" }), ...We(), ...gn({ variant: "flat" }) }, "VIconBtn"), ry = ee()({ name: "VIconBtn", props: MV(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = xe(e, "active"), { themeClasses: o } = Ke(e), { borderClasses: i } = qt(e), { elevationClasses: r } = It(e), { roundedClasses: s } = dt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ba(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return ne(() => {
    const S = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, w = e.height ?? h, I = e.width ?? h, { iconSize: V } = fg(e, () => new Map(e.iconSizes).get(m)), x = { icon: S, size: V.value, color: e.iconColor, opacity: e.opacity };
    return b(e.tag, { type: e.tag === "button" ? "button" : void 0, class: te([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: me([{ "--v-icon-btn-rotate": ve(e.rotate, "deg"), "--v-icon-btn-height": ve(w), "--v-icon-btn-width": ve(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ya(!e.hideOverlay, "v-icon-btn"), p("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && S ? b(Ge, Y({ key: "content-icon" }, x), null) : b(Me, { key: "content-defaults", disabled: !S, defaults: { VIcon: { ...x } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Le(e.text);
      } })]), !!e.loading && p("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function BV(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const sy = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, uy = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, $V = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], LV = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], FV = 28, OV = 31, Hc = 12, cy = 1, Pr = 1, Ta = 7, ov = 60, RV = 59, NV = 1440, HV = 24, zV = 23, WV = 0, jV = 1e4, UV = 100, YV = 100, GV = 1e4;
function KV(e, t, n) {
  const a = en(e);
  return gy(a, t[0], hy), Vn(a), n && rl(a, n, a.hasTime), a;
}
function qV(e, t, n) {
  const a = en(e);
  return gy(a, t[t.length - 1]), Vn(a), n && rl(a, n, a.hasTime), a;
}
function dy(e) {
  const t = en(e);
  return t.day = Pr, Tr(t), Vn(t), t;
}
function fy(e) {
  const t = en(e);
  return t.day = Wc(t.year, t.month), Tr(t), Vn(t), t;
}
function Dl(e) {
  return isFinite(parseInt(e));
}
function XV(e) {
  return typeof e == "number" && isFinite(e) || !!uy.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function iv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = uy.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Rl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!sy.exec(e) || e instanceof Date;
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = zc(e);
    return n && rl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = sy.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Tr(l), Vn(l), n && rl(l, n, l.hasTime), l;
}
function zc(e) {
  return Vn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * jV + e.month * UV + e.day;
}
function iu(e) {
  return e.hour * YV + e.minute;
}
function Oa(e) {
  return Vt(e) * GV + iu(e);
}
function rl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = iu(t), l = iu(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function rv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function sv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = zV, e.minute = RV, e.time = my(e))), e;
}
function vy(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, ru(e, t), Vn(e), n && rl(e, n, true), e;
}
function Tr(e) {
  return e.weekday = ZV(e), e;
}
function Vn(e) {
  return e.time = my(e), e.date = JV(e), e;
}
function ZV(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Hc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Wc(e, t) {
  return BV(e) ? LV[t] : $V[t];
}
function en(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function tl(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function JV(e) {
  let t = `${tl(e.year, 4)}-${tl(e.month, 2)}`;
  return e.hasDay && (t += `-${tl(e.day, 2)}`), t;
}
function my(e) {
  return e.hasTime ? `${tl(e.hour, 2)}:${tl(e.minute, 2)}` : "";
}
function ru(e, t) {
  for (e.minute += t; e.minute >= ov; ) e.minute -= ov, e.hour++, e.hour >= HV && (Aa(e), e.hour = WV);
  return e;
}
function Aa(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Ta, e.day > FV && e.day > Wc(e.year, e.month) && (e.day = Pr, e.month++, e.month > Hc && (e.month = cy, e.year++)), e;
}
function hy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Ta, e.day < Pr && (e.month--, e.month < cy && (e.year--, e.month = Hc), e.day = Wc(e.year, e.month)), e;
}
function Ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Aa, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function QV(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function gy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Aa, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function eI(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < Ta; a++) {
    let l = 1;
    for (let o = 1; o < Ta; o++) {
      const i = (a + o) % Ta;
      if (n[i]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function su(e) {
  const t = `${tl(e.hour, 2)}:${tl(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Qi(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Vt(t), r = [];
  let s = en(e), u = 0, c = u === i;
  if (i < Vt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = Vt(s), c = c || u === i, a[s.weekday] === 0) {
      s = Aa(s);
      continue;
    }
    const d = en(s);
    Vn(d), rl(d, n), r.push(d), s = Ka(s, Aa, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function tI(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = en(e);
    o.push(vy(s, r, l));
  }
  return o;
}
function _o(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(su(a));
    } catch {
      return "";
    }
  };
}
function nI(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > Ta || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= Ta) return false;
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
function aI(e) {
  const t = At({ now: ia("0000-00-00 00:00", true), today: ia("0000-00-00", true) }), n = _(() => e.now && Rl(e.now) ? ia(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return zc(/* @__PURE__ */ new Date());
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
const Ar = H({ start: { type: [String, Number, Date], validate: Rl, default: () => zc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Rl }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: nI }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Rl }, type: { type: String, default: "month" } }, "VCalendar-base");
function jc(e) {
  const { times: t, updateTimes: n } = aI({ now: e.now }), a = Mh(e), l = ml(), o = _(() => e.type === "month" ? dy(ia(e.start, true)) : ia(e.start, true)), i = _(() => {
    const V = o.value, x = e.end && ia(e.end) || V, g = Oa(x) < Oa(V) ? V : x;
    return e.type === "month" ? fy(g) : g;
  }), r = _(() => Rl(e.modelValue) ? ia(e.modelValue, true) : o.value || t.today), s = _(() => {
    const V = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((g) => parseInt(g, 10)), x = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...V.toSorted().filter((g) => g >= x), ...V.toSorted().filter((g) => g < x)];
  }), u = _(() => {
    const V = r.value, x = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [V.weekday];
      case "4day":
        return [V.weekday, (V.weekday + 1) % 7, (V.weekday + 2) % 7, (V.weekday + 3) % 7];
      case "category":
        return Array.from({ length: x }, (g, C) => (V.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = _(() => eI(s.value)), d = _(() => Qi(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : _o(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : _o(a.current.value, (V, x) => ({ timeZone: "UTC", weekday: x ? "short" : "long" })));
  function S(V) {
    return Zh(V);
  }
  function m(V) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": x };
  }
  function y(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(V) {
    return KV(V, s.value, t.today);
  }
  function w(V) {
    return qV(V, s.value, t.today);
  }
  function I(V) {
    return _o(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: S, getRelativeClasses: m, getWeekNumber: y, getStartOfWeek: h, getEndOfWeek: w, getFormatter: I, updateTimes: n };
}
const yy = H({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Dl }, intervalWidth: { type: [Number, String], default: 60, validate: Dl }, intervalMinutes: { type: [Number, String], default: 60, validate: Dl }, firstInterval: { type: [Number, String], default: 0, validate: Dl }, firstTime: { type: [Number, String, Object], validate: XV }, intervalCount: { type: [Number, String], default: 24, validate: Dl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function by(e) {
  const t = jc(e), n = re(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => iv(e.firstTime)), s = _(() => {
    const x = r.value;
    return x !== false && x >= 0 && x <= NV ? x : a.value * l.value;
  }), u = _(() => o.value * i.value), c = _(() => Qi(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const x = c.value, g = s.value, C = l.value, k = o.value, T = t.times.now;
    return x.map((P) => tI(P, g, C, k, T));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : _o(t.locale.current.value, (x, g) => g ? x.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(x) {
    const g = d.value[0][0];
    return !(g.hour === x.hour && g.minute === x.minute);
  }
  function S(x) {
  }
  function m(x, g) {
    const C = en(g), k = x.currentTarget.getBoundingClientRect(), T = s.value, P = x, E = x, D = P.changedTouches || P.touches, A = ((D && D[0] ? D[0].clientY : E.clientY) - k.top) / i.value, L = Math.floor(A * l.value), z = T + L;
    return vy(C, z, t.times.now);
  }
  function y(x) {
    const g = en(x);
    return g.timeToY = I, g.timeDelta = V, g.minutesToPixels = w, g.week = c.value, g.intervalRange = [s.value, s.value + o.value * l.value], g;
  }
  function h(x) {
    const g = I(x), C = n.value;
    return g === false || !C ? false : (C.scrollTop = g, true);
  }
  function w(x) {
    return x / l.value * i.value;
  }
  function I(x) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = g !== false;
    let T = V(x, typeof g != "boolean" ? g : void 0);
    return T === false || (T *= u.value, C ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function V(x, g) {
    let C = iv(x);
    if (C === false) return false;
    const k = o.value * l.value;
    if (g && typeof x == "object" && "day" in x) {
      const P = Vt(x), E = Vt(g);
      C += (P - E) * k;
    }
    const T = s.value;
    return (C - T) / k;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: S, getTimestampAtEvent: m, getSlotScope: y, scrollToTime: h, minutesToPixels: w, timeToY: I, timeDelta: V };
}
function lI(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function oI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Go = { mounted: lI, unmounted: oI }, ho = Kt({ name: "VCalendarDaily", directives: { vResize: Go }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Ar(), ...yy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = K(0), o = K(), i = by(e);
  function r() {
    Te(s);
  }
  function s() {
    l.value = u();
  }
  function u() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function c() {
    return p("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const M = ve(e.intervalWidth);
    return p("div", { class: "v-calendar-daily__intervals-head", style: { width: M } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(M, A) {
    const L = cn(a, ":day", (z) => ({ nativeEvent: z, ...i.getSlotScope(M) }));
    return p("div", Y({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, L), [m(M), y(M), S(M, A)]);
  }
  function S(M, A) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: A })) ?? [];
  }
  function m(M) {
    const A = M.present ? e.color : void 0;
    return p("div", Y(i.getColorProps({ text: A }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function y(M) {
    var _a3;
    return p("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const A = cn(a, ":date", (L) => ({ nativeEvent: L, ...M }));
    return b(ry, Y({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": mr }, A), { default: () => [i.dayFormatter.value(M, false)] });
  }
  function w() {
    return p("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return p("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return p("div", { ref: o, class: "v-calendar-daily__pane", style: { height: ve(i.bodyHeight.value) } }, [x()]);
  }
  function x() {
    var _a3;
    return p("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? g()]);
  }
  function g() {
    return i.days.value.map((M, A) => {
      const L = cn(a, ":time", (z) => ({ nativeEvent: z, ...i.getSlotScope(i.getTimestampAtEvent(z, M)) }));
      return p("div", Y({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, L), [k(A), C(M)]);
    });
  }
  function C(M) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(M))) ?? [];
  }
  function k(M) {
    return i.intervals.value[M].map(T);
  }
  function T(M) {
    var _a3;
    const A = ve(e.intervalHeight), L = e.intervalStyle || i.intervalStyleDefault;
    return p("div", { class: "v-calendar-daily__day-interval", key: M.time, style: me([{ height: A }, L(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function P() {
    const M = ve(e.intervalWidth), A = cn(a, ":interval", (L) => ({ nativeEvent: L, ...i.getTimestampAtEvent(L, i.parsedStart.value) }));
    return p("div", Y({ class: "v-calendar-daily__intervals-body", style: { width: M } }, A), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(M) {
    const A = ve(e.intervalHeight), L = e.shortIntervals, Z = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, L) : void 0;
    return p("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: A } }, [p("div", { class: "v-calendar-daily__interval-text" }, [Z])]);
  }
  return Ct(r), ne(() => nt(p("div", { class: te(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : c(), w()]), [[Go, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function iI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function py(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : iI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const rI = Kt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Ar(), ...yy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = by(e), o = _(() => py(e.categories, e.categoryText));
  function i(y, h) {
    const w = typeof h == "object" && h && h.categoryName === e.categoryForInvalid ? null : h;
    return { ...y, category: w };
  }
  function r(y) {
    return p("div", { class: "v-calendar-category__columns" }, [o.value.map((h) => s(y, i(y, h)))]);
  }
  function s(y, h) {
    var _a3, _b2;
    const w = typeof h.category == "object" ? h.category.categoryName : h.category, I = cn(a, ":dayCategory", () => i(l.getSlotScope(y) || y, h.category));
    return p("div", Y({ class: "v-calendar-category__column-header" }, I), [((_a3 = n.category) == null ? void 0 : _a3.call(n, h)) ?? u(w), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, h)]);
  }
  function u(y) {
    return p("div", { class: "v-calendar-category__category" }, [y === null ? e.categoryForInvalid : y]);
  }
  function c() {
    const y = [];
    return l.days.value.forEach((h, w) => {
      const I = new Array(o.value.length || 1);
      I.fill(h), y.push(...I.map((V, x) => d(V, w, x)));
    }), y;
  }
  function d(y, h, w) {
    const I = o.value[w], V = cn(a, ":time", (x) => l.getSlotScope(l.getTimestampAtEvent(x, y)));
    return p("div", Y({ key: y.date + "-" + w, class: ["v-calendar-daily__day", l.getRelativeClasses(y)] }, V), [f(h, I), S(y, I)]);
  }
  function f(y, h) {
    return l.intervals.value[y].map((w) => v(w, h));
  }
  function v(y, h) {
    var _a3;
    const w = ve(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return p("div", { key: y.time, class: "v-calendar-daily__day-interval", style: me([{ height: w }, I({ ...y, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  function S(y, h) {
    return p("div", { class: "v-calendar-category__columns" }, [m(y, h)]);
  }
  function m(y, h) {
    var _a3;
    const w = cn(a, ":timeCategory", (I) => i(l.getSlotScope(l.getTimestampAtEvent(I, y)), h));
    return p("div", Y({ class: "v-calendar-category__column" }, w), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
  }
  return ne(() => b(ho, Y({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), uv = Kt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Dl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Ar() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = jc(e), o = pr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const x = i.value * l.parsedWeekdays.value.length, g = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return Qi(g, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, x);
  }), s = _(() => {
    const x = l.times.today, g = l.getStartOfWeek(x), C = l.getEndOfWeek(x);
    return Qi(g, C, x, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = _(() => e.monthFormat ? e.monthFormat : _o(l.locale.current.value, (x, g) => ({ timeZone: "UTC", month: g ? "short" : "long" })));
  function c(x) {
    const g = Vt(x);
    return g < Vt(l.parsedStart.value) || g > Vt(l.parsedEnd.value);
  }
  function d() {
    return p("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const x = s.value.map(v);
    return e.showWeek && x.unshift(p("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), x;
  }
  function v(x, g) {
    const C = c(r.value[g]), k = x.present ? e.color : void 0;
    return p("div", Y(l.getColorProps({ text: k }), { key: x.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(x, C)], role: "columnheader" }), [l.weekdayFormatter.value(x, e.shortWeekdays)]);
  }
  function S() {
    const x = r.value, g = l.parsedWeekdays.value.length, C = [];
    for (let k = 0; k < x.length; k += g) C.push(m(x.slice(k, k + g), y(x[k])));
    return C;
  }
  function m(x, g) {
    const C = x.map((k, T) => w(k, T, x));
    return e.showWeek && C.unshift(h(g)), p("div", { key: x[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function y(x) {
    return l.getWeekNumber(x);
  }
  function h(x) {
    return p("div", { class: "v-calendar-weekly__weeknumber" }, [p("small", null, [String(x)])]);
  }
  function w(x, g, C) {
    var _a3;
    const k = c(x), T = cn(a, ":day", (P) => ({ nativeEvent: P, ...x }));
    return p("div", Y({ key: x.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(x, k)], role: "cell" }, T), [I(x), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: k, index: g, week: C, ...x })]);
  }
  function I(x) {
    var _a3;
    return p("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, x)) ?? V(x)]);
  }
  function V(x) {
    const g = x.day === 1 && e.showMonthOnFirst, C = cn(a, ":date", (k) => ({ nativeEvent: k, ...x }));
    return b(ry, Y({ active: x.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": mr }, C), { default: () => [g ? u.value(x, e.shortMonths) + " " + l.dayFormatter.value(x, false) : l.dayFormatter.value(x, false)] });
  }
  return ne(() => p("div", { class: te(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (x) => x.preventDefault() }, [e.hideHeader ? void 0 : d(), S()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), sI = 864e5;
function Sy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function In(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function cv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function ky(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function wy(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function xy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + sI, e.endTimestampIdentifier)];
}
function uI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (In(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? ky(s.event) : wy(s.event);
      if (In(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function Cy(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Oa(n), r = Sy(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? ky(s.event) : wy(s.event);
      t.groups.length > 0 && !In(u, c, t.min, t.max, l) && (cv(t.groups), t.reset());
      let d = uI(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), cv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const dv = 100, cI = (e, t, n) => {
  const a = Cy(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * dv / u.columnCount, u.width = dv / u.columnCount;
    }), s;
  };
}, _i = 100, dI = 5, fI = 1.7, vI = (e, t, n) => {
  const a = Cy(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Oa(l), u = Sy(o, s), c = SI(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const S = kI(v, s), m = yI(S, f);
        if (m === false) {
          const y = bI(S, f);
          y && (S.parent = y, S.sibling = In(S.start, S.end, y.start, Mi(y.start, n)), S.index = y.index + 1, y.children.push(S));
        } else {
          const [y] = fv(S, f, m - 1, m - 1), h = fv(S, f, m + 1, m + f.length, true);
          S.children = h, S.index = m, y && (S.parent = y, S.sibling = In(S.start, S.end, y.start, Mi(y.start, n)), y.children.push(S));
          for (const w of h) w.parent === y && (w.parent = S), w.index - S.index <= 1 && S.sibling && In(S.start, Mi(S.start, n), w.start, w.end) && (w.sibling = true);
        }
        f.push(S);
      }
      mI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function mI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = _y(n) + 1, i = l ? l.visual.left : 0, r = _i - i, s = Math.min(dI, _i / o), u = hI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = pI(n, e, t) ? _i - a.left : Math.min(_i - a.left, d * fI);
  }
}
function hI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function gI(e, t) {
  const n = [];
  for (const a of t) In(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function yI(e, t) {
  const n = gI(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function fv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && In(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function bI(e, t) {
  let n = null;
  for (const a of t) In(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function pI(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && In(e.start, Mi(e.start, n), a.start, a.end)) return false;
  return true;
}
function SI(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = xy(a.event, t);
    let i = false;
    for (const r of n) if (In(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function kI(e, t) {
  const [n, a] = xy(e.event, t);
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
function Mi(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const Vy = { stack: vI, column: cI };
function wI(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = ia(i, true), u = r ? ia(r, true) : s, c = rv(i) ? sv(s, l) : s, d = rv(r) ? sv(u, l) : u, f = Vt(c), v = Oa(c), S = Vt(d), m = c.hasTime ? 0 : 2359, y = Oa(d) + m, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: S, endTimestampIdentifier: y, allDay: h, index: t, category: o };
}
function Uc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function xI(e, t, n) {
  if (n) {
    const a = ru(en(t), n[0]), l = ru(en(t), n[1]), o = e.startTimestampIdentifier < Oa(l), i = e.endTimestampIdentifier > Oa(a);
    return o && i;
  }
  return Uc(e, Vt(t));
}
function CI(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function vv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && Uc(e, n);
}
function _I(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const VI = 100, II = 95, PI = H({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in Vy || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function TI(e, t, n) {
  const a = jc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (A) => !!A[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (A) => A[e.eventCategory]), s = _(() => e.events ? e.events.map((A, L) => wI(A, L, e.eventStart || "", e.eventEnd || "", i.value(A), o.value ? r.value(A) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (A, L) => A.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : Vy[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
  function S(A) {
    return typeof e.eventColor == "function" ? e.eventColor(A) : A.color || e.eventColor;
  }
  const m = K([]);
  function y() {
    if (l.value || !e.eventMore) return;
    const A = e.eventHeight || 0, L = h();
    for (const z in L) {
      const { parent: N, events: Z, more: J } = L[z];
      if (!J) break;
      const F = N.getBoundingClientRect(), G = Z.length - 1, W = Z.map((j) => ({ event: j, bottom: j.getBoundingClientRect().bottom })).sort((j, ie) => j.bottom - ie.bottom);
      let R = 0;
      for (let j = 0; j <= G; j++) {
        const ie = W[j].bottom;
        (j === G ? ie > F.bottom : ie + A > F.bottom) && (W[j].event.style.display = "none", R++);
      }
      R ? (J.style.display = "", J.innerHTML = a.locale.t(e.eventMoreText, R)) : J.style.display = "none";
    }
  }
  function h() {
    const A = {}, L = m.value;
    return !L || !L.length || L.forEach((z) => {
      const N = z.getAttribute("data-date");
      z.parentElement && N && (N in A || (A[N] = { parent: z.parentElement, more: null, events: [] }), z.getAttribute("data-more") ? A[N].more = z : (A[N].events.push(z), z.style.display = ""));
    }), A;
  }
  function w(A, L) {
    let { event: z } = A;
    const N = e.eventHeight || 0, Z = e.eventMarginBottom || 0, J = Vt(L), F = L.week, G = J === z.startIdentifier;
    let W = J === z.endIdentifier, R = II;
    if (!o.value) for (let ie = L.index + 1; ie < F.length; ie++) {
      const ae = Vt(F[ie]);
      if (z.endIdentifier >= ae) R += VI, W = W || ae === z.endIdentifier;
      else {
        W = true;
        break;
      }
    }
    return V(z, { eventParsed: z, day: L, start: G, end: W, timed: false }, false, { class: ["v-event", { "v-event-start": G, "v-event-end": W }], style: { height: `${N}px`, width: `${R}%`, marginBottom: `${Z}px` }, "data-date": L.date });
  }
  function I(A, L) {
    let { event: z, left: N, width: Z } = A;
    const J = L.timeDelta(z.start, L), F = L.timeDelta(z.end, L);
    if (F === false || J === false || F < 0 || J >= 1 || CI(z, L)) return false;
    const G = Vt(L), W = z.startIdentifier >= G, R = z.endIdentifier > G, j = L.timeToY(z.start, L), ie = L.timeToY(z.end, L), ae = Math.max(e.eventHeight || 0, ie - j);
    return V(z, { eventParsed: z, day: L, start: W, end: R, timed: true }, true, { class: "v-event-timed", style: { top: `${j}px`, height: `${ae}px`, left: `${N}%`, width: `${Z}%` } });
  }
  function V(A, L, z, N) {
    const Z = t.event, J = c.value(A.input), F = S(A.input), G = A.start.hour < 12 && A.end.hour >= 12, W = QV(A.start, A.end) <= u.value, R = (de, Ve) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: de.minute > 0 ? "numeric" : void 0 })(de, true), j = () => R(A.start) + " - " + R(A.end), ie = () => {
      const de = d.value(A, z);
      if (A.start.hasTime) if (z) {
        const Ve = j(), ke = W ? ", " : p("br", null, null);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [de]), ke, Ve]);
      } else {
        const Ve = R(A.start);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [Ve]), ut(" "), de]);
      }
      return p("span", { class: "v-event-summary" }, [de]);
    }, ae = { ...L, event: A.input, outside: L.day.outside, singline: W, overlapsNoon: G, formatTime: R, timeSummary: j, eventSummary: ie }, Q = cn(n, ":event", (de) => ({ ...ae, nativeEvent: de }));
    return nt(p("div", Y(a.getColorProps({ text: J, background: F }), Q, N, { ref_for: true, ref: m }), [(Z == null ? void 0 : Z(ae)) ?? x(ie)]), [[Lt, e.eventRipple ?? true]]);
  }
  function x(A) {
    return p("div", { class: "pl-1" }, [A()]);
  }
  function g(A) {
    const L = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return p("div", { style: { height: `${L}px` }, "data-date": A.date, ref_for: true, ref: m }, null);
  }
  function C(A) {
    const L = e.eventHeight || 0, z = e.eventMarginBottom || 0, N = cn(n, ":more", (Z) => ({ nativeEvent: Z, ...A }));
    return nt(p("div", Y({ class: ["v-event-more pl-1", { "v-outside": A.outside }], "data-date": A.date, "data-more": "1", style: { display: "none", height: `${L}px`, marginBottom: `${z}px` }, ref_for: true, ref: m }, N), null), [[Lt, e.eventRipple ?? true]]);
  }
  function k() {
    const A = a.days.value, L = Vt(A[0]), z = Vt(A[A.length - 1]);
    return s.value.filter((N) => _I(N, L, z));
  }
  function T(A, L) {
    return !o.value || typeof L == "object" && L.categoryName && L.categoryName === A.category || typeof A.category == "string" && L === A.category || typeof A.category != "string" && L === null;
  }
  function P(A) {
    const L = Vt(A), z = v.value[0];
    return s.value.filter((N) => vv(N, A, L, z));
  }
  function E(A) {
    const L = Vt(A), z = v.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? Uc(N, L) : vv(N, A, L, z)) && T(N, A.category));
  }
  function D(A) {
    return s.value.filter((L) => !L.allDay && xI(L, A, A.intervalRange) && T(L, A.category));
  }
  function M() {
    if (l.value) return { ...t };
    const A = f.value(s.value, v.value[0], u.value), L = (N) => !!N, z = (N, Z, J, F) => {
      const G = Z(N), W = A(N, G, F, o.value);
      if (F) return W.map((j) => J(j, N)).filter(L);
      const R = [];
      return W.forEach((j, ie) => {
        for (; R.length < j.column; ) R.push(g(N));
        const ae = J(j, N);
        ae && R.push(ae);
      }), R;
    };
    return { ...t, day: (N) => {
      let Z = z(N, P, w, false);
      if (Z && Z.length > 0 && e.eventMore && Z.push(C(N)), t.day) {
        const J = t.day(N);
        J && (Z = Z ? Z.concat(J) : J);
      }
      return Z;
    }, "day-header": (N) => {
      let Z = z(N, E, w, false);
      if (t["day-header"]) {
        const J = t["day-header"](N);
        J && (Z = Z ? Z.concat(J) : J);
      }
      return Z;
    }, "day-body": (N) => {
      const Z = z(N, D, I, true);
      let J = [p("div", { class: "v-event-timed-container" }, [Z])];
      if (t["day-body"]) {
        const F = t["day-body"](N);
        F && (J = J.concat(F));
      }
      return J;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: S, eventsRef: m, updateEventVisibility: y, getEventsMap: h, genDayEvent: w, genTimedEvent: I, genEvent: V, genName: x, genPlaceholder: g, genMore: C, getVisibleEvents: k, isEventForCategory: T, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: D, getScopedSlots: M };
}
const AI = ee()({ name: "VCalendar", directives: { vResize: Go }, props: { modelValue: { type: [String, Number, Date], validate: Rl }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Ar(), ...PI() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = K(), i = TI(e, n, a), r = K(null), s = K(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => py(e.categories, e.categoryText)), d = _(() => {
    const g = i.parsedValue.value;
    let C = null, k = e.maxDays, T = c.value, P = g, E = g;
    switch (e.type) {
      case "month":
        C = uv, P = dy(g), E = fy(g);
        break;
      case "week":
        C = ho, P = i.getStartOfWeek(g), E = i.getEndOfWeek(g), k = 7;
        break;
      case "day":
        C = ho, k = 1;
        break;
      case "4day":
        C = ho, E = Ka(en(E), Aa, 3), Vn(E), k = 4;
        break;
      case "custom-weekly":
        C = uv, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = ho, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = rI, E = Ka(en(E), Aa, D), Vn(E), k = D, T = x(T);
        break;
      default:
        const M = e.type;
        throw new Error(`${M} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: E, maxDays: k, categories: T };
  }), f = _(() => i.effectiveWeekdays.value), v = _(() => e.type === "category"), S = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), y = _(() => {
    const { start: g, end: C } = d.value, k = g.year !== C.year, T = k || g.month !== C.month;
    return k ? m.value(g, true) + " " + g.year + " - " + m.value(C, true) + " " + C.year : T ? m.value(g, true) + " - " + m.value(C, true) + " " + C.year : S.value(g, false) + " " + g.year;
  });
  function h() {
    const { start: g, end: C } = d.value;
    (!r.value || !s.value || g.date !== r.value.date || C.date !== s.value.date) && (r.value = g, s.value = C, l("change", { start: g, end: C }));
  }
  function w() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = en(i.parsedValue.value), k = g > 0, T = k ? Aa : hy, P = k ? OV : Pr;
    let E = k ? g : -g;
    for (; --E >= 0; ) switch (e.type) {
      case "month":
        C.day = P, T(C);
        break;
      case "week":
        Ka(C, T, Ta);
        break;
      case "day":
        Ka(C, T, 1);
        break;
      case "4day":
        Ka(C, T, 4);
        break;
      case "category":
        Ka(C, T, u.value);
        break;
    }
    Tr(C), Vn(C), rl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", su(C)) : typeof e.modelValue == "number" ? l("update:modelValue", su(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function I() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    w(g);
  }
  function V() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    w(-g);
  }
  function x(g) {
    if (!i.noEvents.value) {
      const C = g.reduce((k, T, P) => (typeof T == "object" && T.categoryName ? k[T.categoryName] = { index: P, count: 0 } : typeof T == "string" && (k[T] = { index: P, count: 0 }), k), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let k = g.length;
        i.parsedEvents.value.forEach((T) => {
          let P = T.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: k++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const k in C) C[k].count === 0 && delete C[k];
      g = g.filter((k) => typeof k == "object" && k.categoryName ? C.hasOwnProperty(k.categoryName) : typeof k == "string" ? C.hasOwnProperty(k) : false);
    }
    return g;
  }
  return ce(d, h), Ct(() => {
    i.updateEventVisibility(), h();
  }), cr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), ne(() => {
    const { start: g, end: C, maxDays: k, component: T, categories: P } = d.value;
    return nt(b(T, Y({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, T.filterProps(e), { start: g.date, end: C.date, maxDays: k, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (E, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[Go, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Pt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: y, monthLongFormatter: S, monthShortFormatter: m, parsedCategories: c, checkChange: h, move: w, next: I, prev: V, getCategoryList: x }, o);
} }), DI = H({ ...pe(), ...De() }, "VCardActions"), Iy = ee()({ name: "VCardActions", props: DI(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { slim: true, variant: "text" } }), ne(() => b(e.tag, { class: te(["v-card-actions", e.class]), style: me(e.style) }, n)), {};
} }), EI = H({ opacity: [Number, String], ...pe(), ...De() }, "VCardSubtitle"), Py = ee()({ name: "VCardSubtitle", props: EI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-card-subtitle", e.class]), style: me([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Ty = ha("v-card-title"), MI = H({ appendAvatar: String, appendIcon: Ce, prependAvatar: String, prependIcon: Ce, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...pe(), ...ht(), ...De() }, "VCardItem"), Ay = ee()({ name: "VCardItem", props: MI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return b(e.tag, { class: te(["v-card-item", e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [l && p("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? b(Me, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : p(ge, null, [e.prependAvatar && b(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-card-item__content" }, [r && b(Ty, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Le(e.title)];
      } }), s && b(Py, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Le(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && p("div", { key: "append", class: "v-card-item__append" }, [n.append ? b(Me, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : p(ge, null, [e.appendIcon && b(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && b(vn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), BI = H({ opacity: [Number, String], ...pe(), ...De() }, "VCardText"), Dy = ee()({ name: "VCardText", props: BI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-card-text", e.class]), style: me([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), $I = H({ appendAvatar: String, appendIcon: Ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...pe(), ...ht(), ...kt(), ...xt(), ...xr(), ...Zn(), ...eo(), ...ot(), ...ci(), ...De(), ...We(), ...gn({ variant: "elevated" }) }, "VCard"), LI = ee()({ name: "VCard", directives: { vRipple: Lt }, props: $I(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { borderClasses: o } = qt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ba(e), { densityClasses: u } = Ft(e), { dimensionStyles: c } = wt(e), { elevationClasses: d } = It(e), { loaderClasses: f } = ri(e), { locationStyles: v } = Ra(e), { positionClasses: S } = to(e), { roundedClasses: m } = dt(e), y = ui(e, n), h = re(void 0);
  return ce(() => e.loading, (w, I) => {
    h.value = !w && typeof I == "string" ? I : typeof w == "boolean" ? void 0 : w;
  }, { immediate: true }), ne(() => {
    const w = e.link !== false && y.isLink.value, I = !e.disabled && e.link !== false && (e.link || y.isClickable.value), V = w ? "a" : e.tag, x = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), C = x || g, k = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || T || k, D = !!(a.text || e.text != null);
    return nt(b(V, Y(y.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, u.value, d.value, f.value, S.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": ve(e.height) }, e.style], onClick: I && y.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && p("div", { key: "image", class: "v-card__image" }, [a.image ? b(Me, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : b(da, { key: "image-img", cover: true, src: e.image }, null)]), b(si, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && b(Ay, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && b(Dy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && b(Iy, null, { default: a.actions }), ya(I, "v-card")];
    } }), [[Lt, I && e.ripple]]);
  }), {};
} }), FI = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function OI(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function RI(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), FI(t);
}
function NI(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function HI() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => OI(n, t), touchend: (n) => RI(n, t), touchmove: (n) => NI(n, t) };
}
function zI(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = HI(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, dh(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function WI(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  dh(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const er = { mounted: zI, unmounted: WI }, Ey = Symbol.for("vuetify:v-window"), My = Symbol.for("vuetify:v-window-group"), Dr = H({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...pe(), ...De(), ...We() }, "VWindow"), sl = ee()({ name: "VWindow", directives: { vTouch: er }, props: Dr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isRtl: l } = _t(), { t: o } = Je(), i = Na(e, My), r = K(), s = _(() => l.value ? !e.reverse : e.reverse), u = re(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const g = e.direction === "vertical" ? "y" : "x", k = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${g}${k}-transition`;
  }), d = re(0), f = K(void 0), v = _(() => i.items.value.findIndex((g) => i.selected.value.includes(g.id)));
  ce(v, (g, C) => {
    let k;
    const T = { left: 0, top: 0 };
    Ze && C >= 0 && (k = gr(r.value), T.left = k == null ? void 0 : k.scrollLeft, T.top = k == null ? void 0 : k.scrollTop);
    const P = i.items.value.length, E = P - 1;
    P <= 2 ? u.value = g < C : g === E && C === 0 ? u.value = false : g === 0 && C === E ? u.value = true : u.value = g < C, Te(() => {
      if (!Ze || !k) return;
      k.scrollTop !== T.top && k.scrollTo({ ...T, behavior: "instant" }), requestAnimationFrame(() => {
        if (!k) return;
        k.scrollTop !== T.top && k.scrollTo({ ...T, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), it(Ey, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const S = B(() => e.continuous || v.value !== 0), m = B(() => e.continuous || v.value !== i.items.value.length - 1);
  function y() {
    S.value && i.prev();
  }
  function h() {
    m.value && i.next();
  }
  const w = _(() => {
    const g = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    g.push(S.value ? n.prev ? n.prev({ props: C }) : b(Ne, C, null) : p("div", null, null));
    const k = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return g.push(m.value ? n.next ? n.next({ props: k }) : b(Ne, k, null) : p("div", null, null)), g;
  }), I = _(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? y() : h();
  }, right: () => {
    s.value ? h() : y();
  }, start: (C) => {
    let { originalEvent: k } = C;
    k.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function V(g) {
    (e.direction === "horizontal" && g.key === "ArrowLeft" || e.direction === "vertical" && g.key === "ArrowUp") && (g.preventDefault(), y(), Te(() => {
      S.value ? x(0) : x(1);
    })), (e.direction === "horizontal" && g.key === "ArrowRight" || e.direction === "vertical" && g.key === "ArrowDown") && (g.preventDefault(), h(), Te(() => {
      m.value ? x(1) : x(0);
    }));
  }
  function x(g) {
    var _a3;
    const C = w.value[g];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return ne(() => nt(b(e.tag, { ref: r, class: te(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: me([e.style, { "--v-window-transition-duration": Wn() ? null : ve(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [p("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && p("div", { class: te(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [w.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[er, I.value]])), { group: i };
} }), jI = H({ color: String, cycle: Boolean, delimiterIcon: { type: Ce, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Dr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), UI = ee()({ name: "VCarousel", props: jI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), { t: l } = Je(), o = K();
  let i = -1;
  ce(a, s), ce(() => e.interval, s), ce(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), Ct(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Te(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Te(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return ne(() => {
    const c = sl.filterProps(e);
    return b(sl, Y({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ve(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return p(ge, null, [!e.hideDelimiters && p("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && b(Me, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, S) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", S + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (y) => u(y, f) };
        return n.item ? n.item({ props: m, item: v }) : b(Ne, Y(v, m), null);
      })] })]), e.progress && b(wr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), Er = H({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...pe(), ...Sl(), ...Dc() }, "VWindowItem"), ul = ee()({ name: "VWindowItem", directives: { vTouch: er }, props: Er(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(Ey), l = Ma(e, My), { isBooted: o } = bl();
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
    i.value && Te(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ve(S.clientHeight));
    });
  }
  const f = _(() => {
    const S = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof S != "string" ? a.transition.value : S, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = Ec(e, l.isSelected);
  return ne(() => b(Gt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [nt(p("div", { class: te(["v-window-item", l.selectedClass.value, e.class]), style: me(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[En, l.isSelected.value]])];
  } })), { groupItem: l };
} }), YI = H({ ...Jh(), ...Er() }, "VCarouselItem"), GI = ee()({ name: "VCarouselItem", inheritAttrs: false, props: YI(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  ne(() => {
    const l = da.filterProps(e), o = ul.filterProps(e);
    return b(ul, Y({ class: ["v-carousel-item", e.class] }, o), { default: () => [b(da, Y(a, l), n)] });
  });
} }), KI = ha("v-code", "code"), qI = H({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...pe() }, "VColorPickerCanvas"), XI = Kt({ name: "VColorPickerCanvas", props: qI(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = re(false), l = K(), o = re(parseFloat(e.width)), i = re(parseFloat(e.height)), r = K({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(h) {
    var _a3, _b2;
    if (!l.value) return;
    const { x: w, y: I } = h;
    r.value = h, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: Xe(w, 0, o.value) / o.value, v: 1 - Xe(I, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: h, y: w } = u.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: ve(e.dotSize), height: ve(e.dotSize), transform: `translate(${ve(h - I)}, ${ve(w - I)})` };
  }), { resizeRef: d } = Sn((h) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: w, height: I } = h[0].contentRect;
    o.value = Math.round(w), i.value = Math.round(I);
  });
  function f(h, w, I) {
    const { left: V, top: x, width: g, height: C } = I;
    u.value = { x: Xe(h - V, 0, g), y: Xe(w - x, 0, C) };
  }
  function v(h) {
    h.type === "mousedown" && h.preventDefault(), s.value && (S(h), window.addEventListener("mousemove", S), window.addEventListener("mouseup", m), window.addEventListener("touchmove", S), window.addEventListener("touchend", m));
  }
  function S(h) {
    if (!s.value || !l.value) return;
    a.value = true;
    const w = _w(h);
    f(w.clientX, w.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", m);
  }
  function y() {
    var _a3;
    if (!l.value) return;
    const h = l.value, w = h.getContext("2d");
    if (!w) return;
    const I = w.createLinearGradient(0, 0, h.width, 0);
    I.addColorStop(0, "hsla(0, 0%, 100%, 1)"), I.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), w.fillStyle = I, w.fillRect(0, 0, h.width, h.height);
    const V = w.createLinearGradient(0, 0, 0, h.height);
    V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), w.fillStyle = V, w.fillRect(0, 0, h.width, h.height);
  }
  return ce(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, y, { immediate: true }), ce(() => [o.value, i.value], (h, w) => {
    y(), r.value = { x: u.value.x * h[0] / w[0], y: u.value.y * h[1] / w[1] };
  }, { flush: "post" }), ce(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), Ct(() => y()), ne(() => p("div", { ref: d, class: te(["v-color-picker-canvas", e.class]), style: me(e.style), onMousedown: v, onTouchstartPassive: v }, [p("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && p("div", { class: te(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: me(c.value) }, null)])), {};
} });
function ZI(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function JI(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = jn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = zs(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Ih(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Xa(t, ["r", "g", "b"]) ? n = jn(e) : Xa(t, ["h", "s", "l"]) ? n = zs(e) : Xa(t, ["h", "s", "v"]) && (n = e), ZI(n, !Xa(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Bl = { h: 0, s: 0, v: 0, a: 1 }, uu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: jn, from: li }, QI = { ...uu, inputs: (_a2 = uu.inputs) == null ? void 0 : _a2.slice(0, 3) }, cu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: zs, from: lc }, eP = { ...cu, inputs: cu.inputs.slice(0, 3) }, By = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Ih, from: Xw }, tP = { ...By, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, nl = { rgb: QI, rgba: uu, hsl: eP, hsla: cu, hex: tP, hexa: By }, nP = (e) => {
  let { label: t, ...n } = e;
  return p("div", { class: "v-color-picker-edit__input" }, [p("input", gp(Nm(n)), null), p("span", null, [t])]);
}, aP = H({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, ...pe() }, "VColorPickerEdit"), lP = Kt({ name: "VColorPickerEdit", props: aP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Je(), l = _(() => e.modes.map((i) => ({ ...nl[i], name: i }))), o = _(() => {
    var _a3;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const S = v.target;
        S && n("update:color", i.from(c(r ?? i.to(Bl), S.value)));
      } };
    });
  });
  return ne(() => {
    var _a3;
    return p("div", { class: te(["v-color-picker-edit", e.class]), style: me(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => b(nP, i, null)), l.value.length > 1 && b(Ne, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Yc = Symbol.for("vuetify:v-slider");
function du(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function oP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const $y = H({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...ot(), ...xt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), Ly = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(uf(a.value), uf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Xe(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Fy = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = ao(t), { isRtl: s } = _t(), u = B(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: v, step: S, decimals: m, roundValue: y } = n, h = _(() => parseInt(t.thumbSize, 10)), w = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (v.value - f.value) / S.value), x = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), k = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = re(false), P = re(0), E = K(), D = K();
  function M(Q) {
    var _a3;
    const de = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!de) return;
    const Ve = t.direction === "vertical", ke = Ve ? "top" : "left", ye = Ve ? "height" : "width", $ = Ve ? "clientY" : "clientX", { [ke]: O, [ye]: X } = de.getBoundingClientRect(), se = oP(Q, $);
    let le = Xe((se - O - P.value) / X) || 0;
    return (Ve ? d.value : d.value !== s.value) && (le = 1 - le), y(f.value + le * (v.value - f.value));
  }
  const A = (Q) => {
    const de = M(Q);
    de != null && o({ value: de }), T.value = false, P.value = 0;
  }, L = (Q) => {
    const de = M(Q);
    D.value = i(Q), D.value && (T.value = true, D.value.contains(Q.target) ? P.value = du(Q, D.value, t.direction) : (P.value = 0, de != null && l({ value: de })), de != null && a({ value: de }), Te(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, z = { passive: true, capture: true };
  function N(Q) {
    const de = M(Q);
    de != null && l({ value: de });
  }
  function Z(Q) {
    Q.stopPropagation(), Q.preventDefault(), A(Q), window.removeEventListener("mousemove", N, z), window.removeEventListener("mouseup", Z);
  }
  function J(Q) {
    var _a3;
    A(Q), window.removeEventListener("touchmove", N, z), (_a3 = Q.target) == null ? void 0 : _a3.removeEventListener("touchend", J);
  }
  function F(Q) {
    var _a3;
    L(Q), window.addEventListener("touchmove", N, z), (_a3 = Q.target) == null ? void 0 : _a3.addEventListener("touchend", J, { passive: false });
  }
  function G(Q) {
    Q.button === 0 && (Q.preventDefault(), L(Q), window.addEventListener("mousemove", N, z), window.addEventListener("mouseup", Z, { passive: false }));
  }
  bt(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", Z);
  });
  const W = (Q) => {
    const de = (Q - f.value) / (v.value - f.value) * 100;
    return Xe(isNaN(de) ? 0 : de, 0, 100);
  }, R = B(() => t.showTicks), j = _(() => R.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((Q) => ({ value: Q, position: W(Q), label: Q.toString() })) : Object.keys(t.ticks).map((Q) => ({ value: parseFloat(Q), position: W(parseFloat(Q)), label: t.ticks[Q] })) : V.value !== 1 / 0 ? Rn(V.value + 1).map((Q) => {
    const de = f.value + Q * S.value;
    return { value: de, position: W(de) };
  }) : [] : []), ie = _(() => j.value.some((Q) => {
    let { label: de } = Q;
    return !!de;
  })), ae = { activeThumbRef: D, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: ie, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: T, noKeyboard: B(() => t.noKeyboard), numTicks: V, onSliderMousedown: G, onSliderTouchstart: F, parsedTicks: j, parseMouseMove: M, position: W, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: y, showTicks: R, startOffset: P, step: S, thumbSize: h, thumbColor: x, thumbLabelColor: g, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: w, trackColor: C, trackContainerRef: E, trackFillColor: k, trackSize: I, vertical: c };
  return it(Yc, ae), ae;
}, iP = H({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...pe() }, "VSliderThumb"), fu = ee()({ name: "VSliderThumb", directives: { vRipple: Lt }, props: iP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = He(Yc), { isRtl: o, rtlClasses: i } = _t();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: S, direction: m, isReversed: y, vertical: h, readonly: w, elevation: I, mousePressed: V, decimals: x, indexFromEnd: g } = l, C = re(false), k = re(false), T = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = It(T), { textColorClasses: E, textColorStyles: D } = Et(u), { backgroundColorClasses: M, backgroundColorStyles: A } = qe(c), { pageup: L, pagedown: z, end: N, home: Z, left: J, right: F, down: G, up: W } = Fs, R = [L, z, N, Z, J, F, G, W], j = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ie(Q, de) {
    if (e.noKeyboard || f.value || !R.includes(Q.key)) return;
    Q.preventDefault();
    const Ve = d.value || 0.1, ke = (s.value - r.value) / Ve;
    if ([J, F, G, W].includes(Q.key)) {
      const $ = (h.value ? [o.value ? J : F, y.value ? G : W] : g.value !== o.value ? [J, W] : [F, W]).includes(Q.key) ? 1 : -1, O = Q.shiftKey ? 2 : Q.ctrlKey ? 1 : 0;
      $ === -1 && de === s.value && !O && !Number.isInteger(ke) ? de = de - ke % 1 * Ve : de = de + $ * Ve * j.value[O];
    } else if (Q.key === Z) de = r.value;
    else if (Q.key === N) de = s.value;
    else {
      const ye = Q.key === z ? 1 : -1;
      de = de - ye * Ve * (ke > 100 ? ke / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, de));
  }
  function ae(Q) {
    const de = ie(Q, e.modelValue);
    de != null && (k.value = false, a("update:modelValue", de));
  }
  return ce(() => e.focused, (Q) => {
    Q && (k.value = false);
  }), ne(() => {
    const Q = ve(g.value ? 100 - e.position : e.position, "%"), de = S.value === "always" || S.value === true && e.focused || S.value === "hover" && (C.value || e.focused && !k.value);
    return p("div", { class: te(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: me([{ "--v-slider-thumb-position": Q, "--v-slider-thumb-size": ve(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!w.value, "aria-orientation": m.value, onKeydown: w.value ? void 0 : ae, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, k.value = true;
    } }, [p("div", { class: te(["v-slider-thumb__surface", E.value, P.value]), style: me(D.value) }, null), nt(p("div", { class: te(["v-slider-thumb__ripple", E.value]), style: me(D.value) }, null), [[Lt, e.ripple, null, { circle: true, center: true }]]), b(hc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [nt(p("div", { class: "v-slider-thumb__label-container" }, [p("div", { class: te(["v-slider-thumb__label", M.value]), style: me(A.value) }, [p("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? x.value : 1)]), p("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[En, de]])];
    } })]);
  }), {};
} }), rP = H({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...pe() }, "VSliderTrack"), Oy = ee()({ name: "VSliderTrack", props: rP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = He(Yc);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: S, indexFromEnd: m } = a, { roundedClasses: y } = dt(i), { backgroundColorClasses: h, backgroundColorStyles: w } = qe(c), { backgroundColorClasses: I, backgroundColorStyles: V } = qe(u), x = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), C = _(() => ({ [x.value]: "0%", [g.value]: "100%" })), k = _(() => e.stop - e.start), T = _(() => ({ [x.value]: ve(e.start, "%"), [g.value]: ve(k.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, M) => {
    var _a3;
    const A = D.value !== v.value && D.value !== S.value ? ve(D.position, "%") : void 0;
    return p("div", { key: D.value, class: te(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === S.value }]), style: { [x.value]: A } }, [(D.label || n["tick-label"]) && p("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: M })) ?? D.label])]);
  }) : []);
  return ne(() => p("div", { class: te(["v-slider-track", y.value, e.class]), style: me([{ "--v-slider-track-size": ve(d.value), "--v-slider-tick-size": ve(s.value) }, e.style]) }, [p("div", { class: te(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), p("div", { class: te(["v-slider-track__fill", h.value]), style: { ...T.value, ...w.value } }, null), r.value && p("div", { class: te(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), sP = H({ ...fi(), ...$y(), ...Sa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), vu = ee()({ name: "VSlider", inheritAttrs: false, props: sP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), { rtlClasses: r } = _t(), s = Ly(e), u = xe(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: S, onSliderTouchstart: m, trackContainerRef: y, position: h, hasLabels: w, disabled: I, readonly: V, noKeyboard: x } = Fy({ props: e, steps: s, onSliderStart: () => {
    !I.value && !V.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: E } = P;
    const D = v(E);
    !I.value && !V.value && (u.value = D), a("end", D);
  }, onSliderMove: (P) => {
    let { value: E } = P;
    !I.value && !V.value && (u.value = v(E));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: g, focus: C, blur: k } = pa(e), T = _(() => h(u.value));
  return ne(() => {
    const P = Rt.filterProps(e), [E, D] = qn(l), M = !!(e.label || n.label || n.prepend);
    return b(Rt, Y({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || w.value, "v-slider--focused": g.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, E, { focused: g.value }), { ...n, prepend: M ? (A) => {
      var _a3, _b2;
      return p(ge, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, A)) ?? (e.label ? b(no, { id: A.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, A)]);
    } : void 0, default: (A) => {
      let { id: L, messagesId: z } = A;
      return p("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : S, onTouchstartPassive: V.value ? void 0 : m }, [p("input", { id: L.value, name: e.name || L.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), b(Oy, { ref: y, start: 0, stop: T.value }, { "tick-label": n["tick-label"] }), b(fu, Y({ ref: o, "aria-describedby": z.value, focused: g.value, noKeyboard: x.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (N) => u.value = N, position: T.value, elevation: e.elevation, onFocus: C, onBlur: k, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), Ry = H({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ce, default: "$eyeDropper" }, ...pe() }, "VColorPickerPreview"), uP = Kt({ name: "VColorPickerPreview", props: Ry(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Je(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  dr(() => l.abort());
  async function i() {
    if (!of || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = li(un(s.sRGBHex));
      n("update:color", { ...e.color ?? Bl, ...u });
    } catch {
    }
  }
  return ne(() => {
    var _a3, _b2;
    return p("div", { class: te(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: me(e.style) }, [of && !e.hideEyeDropper && p("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [b(Ne, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), p("div", { class: "v-color-picker-preview__dot" }, [p("div", { style: { background: Ch(e.color ?? Bl) } }, null)]), p("div", { class: "v-color-picker-preview__sliders" }, [b(vu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && b(vu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), cP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, dP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, fP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, vP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, mP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, hP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, gP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, yP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, bP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, pP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, SP = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, kP = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, wP = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, xP = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, CP = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, _P = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, VP = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, IP = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, PP = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, TP = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, AP = { red: cP, pink: dP, purple: fP, deepPurple: vP, indigo: mP, blue: hP, lightBlue: gP, cyan: yP, teal: bP, green: pP, lightGreen: SP, lime: kP, yellow: wP, amber: xP, orange: CP, deepOrange: _P, brown: VP, blueGrey: IP, grey: PP, shades: TP }, DP = H({ swatches: { type: Array, default: () => EP(AP) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...pe() }, "VColorPickerSwatches");
function EP(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const MP = Kt({ name: "VColorPickerSwatches", props: DP(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return ne(() => p("div", { class: te(["v-color-picker-swatches", e.class]), style: me([{ maxHeight: ve(e.maxHeight) }, e.style]) }, [p("div", null, [e.swatches.map((o) => p("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = un(i), s = li(r), u = xh(r);
    return p("div", { class: te(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [p("div", { style: { background: u } }, [e.color && Dt(e.color, s) ? b(Ge, { size: "x-small", icon: "$success", color: e0(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), BP = ha("v-picker-title"), Mr = H({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Mc() }, "VPicker"), Xl = ee()({ name: "VPicker", props: Mr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.color);
  return ne(() => {
    const o = La.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return b(La, Y(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && p("div", { key: "header", class: te(["v-picker__header-wrapper", a.value]), style: me([l.value]) }, [i && b(BP, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && p("div", { class: "v-picker__header" }, [n.header()])]), p("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && b(Me, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [p("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), $P = H({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Mr({ hideHeader: true }), ...Jt(Ry(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), LP = Kt({ name: "VColorPicker", props: $P(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "mode"), l = K(null), o = xe(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = li(un(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? JI(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = _t();
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
  return Jl(() => {
    e.modes.includes(a.value) || (a.value = e.modes[0]);
  }), mt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), ne(() => {
    const c = Xl.filterProps(e);
    return b(Xl, Y(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": Ch({ ...i.value ?? Bl, a: 1 }) }, e.style] }), { ...n, default: () => p(ge, null, [!e.hideCanvas && b(XI, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && p("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && b(uP, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && b(lP, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && b(MP, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), FP = H({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...wl({ filterKeys: ["title"] }), ...Rc({ hideNoData: true, returnObject: true }), ...Fe(hi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), OP = ee()({ name: "VCombobox", props: FP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), o = K(), i = re(false), r = re(true), s = re(false), u = K(), c = K(), d = re(-1);
  let f = false;
  const { items: v, transformIn: S, transformOut: m } = Vc(e), { textColorClasses: y, textColorStyles: h } = Et(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: w } = di(e), I = xe(e, "modelValue", [], (q) => S(lt(q)), (q) => {
    const he = m(q);
    return e.multiple ? he : he[0] ?? null;
  }), V = ao(e), x = B(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), g = _(() => !!(e.chips || a.chip)), C = _(() => g.value || !!a.selection), k = re(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), T = re(null), P = _({ get: () => k.value, set: async (q) => {
    var _a4;
    if (k.value = q ?? "", q === null || q === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [Cn(e, q)], Te(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), q && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const he = be(q);
      he.length > 1 && (fe(he), k.value = "");
    }
    q || (d.value = -1), r.value = !q;
  } }), E = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: M } = xl(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), A = _(() => e.hideSelected && T.value === null ? D.value.filter((q) => !I.value.some((he) => he.value === q.value)) : D.value), L = _(() => e.hideNoData && !A.value.length || V.isReadonly.value || V.isDisabled.value), z = xe(e, "menu"), N = _({ get: () => z.value, set: (q) => {
    var _a4;
    z.value && !q && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || q && L.value || (z.value = q);
  } }), { menuId: Z, ariaExpanded: J, ariaControls: F } = Oc(e, N);
  ce(k, (q) => {
    f ? Te(() => f = false) : i.value && !N.value && (N.value = true), n("update:search", q);
  }), ce(I, (q) => {
    var _a4;
    !e.multiple && !C.value && (k.value = ((_a4 = q[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const G = _(() => I.value.map((q) => q.value)), W = _(() => A.value.find((q) => q.type === "item" && !q.props.disabled)), R = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = W.value) == null ? void 0 : _a4.title)) && A.value.length > 0 && !r.value && !s.value;
  }), j = K(), ie = K(), ae = K(), Q = $c(j, o), { onTabKeydown: de } = Lc({ groups: [{ type: "element", contentRef: ie }, { type: "list", contentRef: j, displayItemsCount: () => A.value.length }, { type: "element", contentRef: ae }], onLeave: () => {
    var _a4;
    N.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function Ve(q) {
    f = true, Te(() => f = false), e.openOnClear && (N.value = true);
  }
  function ke() {
    L.value || (N.value = true);
  }
  function ye(q) {
    L.value || (i.value && (q.preventDefault(), q.stopPropagation()), N.value = !N.value);
  }
  function $(q) {
    var _a4, _b2;
    q.key === "Tab" && de(q), ((_a4 = j.value) == null ? void 0 : _a4.$el.contains(q.target)) && (jl(q) || q.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function O(q) {
    var _a4, _b2, _c2, _d2;
    if (xw(q) || V.isReadonly.value) return;
    const he = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, Se = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(q.key) && q.preventDefault(), ["Enter", "ArrowDown"].includes(q.key) && (N.value = true), ["Escape"].includes(q.key) && (N.value = false), R.value && ["Enter", "Tab"].includes(q.key) && W.value && !I.value.some((we) => {
      let { value: Ie } = we;
      return Ie === W.value.value;
    }) && ue(W.value), q.key === "ArrowDown" && R.value && ((_b2 = j.value) == null ? void 0 : _b2.focus("next")), q.key === "Enter" && P.value && (ue(Cn(e, P.value), true, true), C.value && (k.value = "")), ["Backspace", "Delete"].includes(q.key)) {
      if (!e.multiple && C.value && I.value.length > 0 && !P.value) return ue(I.value[0], false);
      if (~d.value) {
        q.preventDefault();
        const we = d.value;
        ue(I.value[d.value], false), d.value = we >= Se - 1 ? Se - 2 : we;
      } else q.key === "Backspace" && !P.value && (d.value = Se - 1);
      return;
    }
    if (e.multiple) if (q.key === "ArrowLeft") {
      if (d.value < 0 && he && he > 0) return;
      const we = d.value > -1 ? d.value - 1 : Se - 1;
      I.value[we] ? d.value = we : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (q.key === "ArrowRight") {
      if (d.value < 0) return;
      const we = d.value + 1;
      I.value[we] ? d.value = we : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && jl(q) && (d.value = -1);
  }
  function X(q) {
    var _a4;
    const he = ((_a4 = q == null ? void 0 : q.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", Se = be(he);
    Se.length > 1 && e.multiple && (q.preventDefault(), fe(Se));
  }
  function se() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function le() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, T.value = null;
  }
  function ue(q) {
    let he = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!q || q.props.disabled)) if (e.multiple) {
      const we = I.value.findIndex(($e) => (e.valueComparator || Dt)($e.value, q.value)), Ie = he ?? !~we;
      if (~we) {
        const $e = Ie ? [...I.value, q] : [...I.value];
        $e.splice(we, 1), I.value = $e;
      } else Ie && (I.value = [...I.value, q]);
      e.clearOnSelect && (P.value = "");
    } else {
      const we = he !== false;
      I.value = we ? [q] : [], (!r.value || e.alwaysFilter) && k.value && (T.value = k.value), k.value = we && !C.value ? q.title : "", Te(() => {
        N.value = Se, r.value = true;
      });
    }
  }
  function be(q) {
    const Se = [`
`, ...e.delimiters ?? []].map(Ui).join("|");
    return q.split(new RegExp(`(?:${Se})+`));
  }
  async function fe(q) {
    for (let he of q) he = he.trim(), he && (ue(Cn(e, he)), await Te());
  }
  function U(q) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function oe(q) {
    s.value = false;
  }
  function _e(q) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(q.relatedTarget)) && (i.value = true);
  }
  return ce(i, (q, he) => {
    if (!(q || q === he) && (d.value = -1, N.value = false, P.value)) {
      if (e.multiple) {
        ue(Cn(e, P.value));
        return;
      }
      if (!C.value) return;
      I.value.some((Se) => {
        let { title: we } = Se;
        return we === P.value;
      }) ? k.value = "" : ue(Cn(e, P.value));
    }
  }), ce(N, (q) => {
    if (!e.hideSelected && q && I.value.length && r.value) {
      const he = A.value.findIndex((Se) => I.value.some((we) => (e.valueComparator || Dt)(we.value, Se.value)));
      Ze && window.requestAnimationFrame(() => {
        var _a4;
        he >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(he));
      });
    }
    q && (T.value = null);
  }), ce(v, (q, he) => {
    N.value || i.value && !he.length && q.length && (N.value = true);
  }), ne(() => {
    const q = !!(!e.hideNoData || A.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), he = I.value.length > 0, Se = Yn.filterProps(e), we = { search: P, filteredItems: D.value };
    return b(Yn, Y({ ref: o }, Se, { modelValue: P.value, "onUpdate:modelValue": (Ie) => P.value = Ie, focused: i.value, "onUpdate:focused": (Ie) => i.value = Ie, validationValue: I.externalValue, counterValue: E.value, dirty: he, class: ["v-combobox", { "v-combobox--active-menu": N.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: he ? void 0 : e.placeholder, "onClick:clear": Ve, "onMousedown:control": ke, onKeydown: O, onPaste: X, onBlur: _e, "aria-expanded": J.value, "aria-controls": F.value }), { ...a, default: (Ie) => {
      let { id: $e } = Ie;
      return p(ge, null, [b(ql, Y({ id: Z.value, ref: u, modelValue: N.value, "onUpdate:modelValue": (je) => N.value = je, activator: "parent", contentClass: "v-combobox__content", disabled: L.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: se, onAfterLeave: le }, e.menuProps), { default: () => [b(La, { onFocusin: U, onKeydown: $ }, { default: () => [a["menu-header"] && p("header", { ref: ie }, [a["menu-header"](we)]), q && b(Kl, Y({ key: "combobox-list", ref: j, filterable: true, selected: G.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (je) => je.preventDefault(), selectable: !!A.value.length, onFocusout: oe, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${$e.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, Q, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !A.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? b(kn, { key: "no-data", title: l(e.noDataText) }, null)), b(Ir, { ref: c, renderless: true, items: A.value, itemKey: "value" }, { default: (je) => {
          var _a5, _b3, _c3;
          let { item: Oe, index: ft, itemRef: at } = je;
          const an = Y(Oe.props, { ref: at, key: Oe.value, active: R.value && Oe === W.value ? true : void 0, onClick: () => ue(Oe, null), "aria-posinset": ft + 1, "aria-setsize": A.value.length });
          return Oe.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Oe.raw, index: ft })) ?? b(dn, Y(Oe.props, { key: `divider-${ft}` }), null) : Oe.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Oe.raw, index: ft })) ?? b(lo, Y(Oe.props, { key: `subheader-${ft}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Oe, index: ft, props: an })) ?? b(kn, Y(an, { role: "option" }), { prepend: (ka) => {
            let { isSelected: rt } = ka;
            return p(ge, null, [e.multiple && !e.hideSelected ? b(Dn, { key: Oe.value, modelValue: rt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (yn) => yn.preventDefault() }, null) : void 0, Oe.props.prependAvatar && b(vn, { image: Oe.props.prependAvatar }, null), Oe.props.prependIcon && b(Ge, { icon: Oe.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Oe.title : Fc("v-combobox", Oe.title, (_a6 = M(Oe)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && p("footer", { ref: ae }, [a["menu-footer"](we)])] })] }), I.value.map((je, Oe) => {
        function ft(rt) {
          rt.stopPropagation(), rt.preventDefault(), ue(je, false);
        }
        const at = Y(fa.filterProps(je.props), { "onClick:close": ft, onKeydown(rt) {
          rt.key !== "Enter" && rt.key !== " " || (rt.preventDefault(), rt.stopPropagation(), ft(rt));
        }, onMousedown(rt) {
          rt.preventDefault(), rt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), an = g.value ? !!a.chip : !!a.selection, ka = an ? hr(g.value ? a.chip({ item: je, index: Oe, props: at }) : a.selection({ item: je, index: Oe })) : void 0;
        if (!(an && !ka)) return p("div", { key: je.value, class: te(["v-combobox__selection", Oe === d.value && ["v-combobox__selection--selected", y.value]]), style: me(Oe === d.value ? h.value : {}) }, [g.value ? a.chip ? b(Me, { key: "chip-defaults", defaults: { VChip: { closable: x.value, size: "small", text: je.title } } }, { default: () => [ka] }) : b(fa, Y({ key: "chip", closable: x.value, size: "small", text: je.title, disabled: je.props.disabled }, at), null) : ka ?? p("span", { class: "v-combobox__selection-text" }, [je.title, e.multiple && Oe < I.value.length - 1 && p("span", { class: "v-combobox__selection-comma" }, [ut(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ie = arguments.length, $e = new Array(Ie), je = 0; je < Ie; je++) $e[je] = arguments[je];
      return p(ge, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...$e), (!e.hideNoData || e.items.length) && e.menuIcon ? b(Ge, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ye, onClick: mr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && b(w, { key: "append-icon", name: "appendInner", color: $e[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: i, isPristine: r, menu: N, search: P, selectionIndex: d, filteredItems: D, select: ue }, o);
} }), RP = H({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), NP = ee()({ name: "VConfirmEdit", props: RP(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = xe(e, "modelValue"), o = K();
  ct(() => {
    o.value = structuredClone(mf(l.value));
  });
  const { t: i } = Je(), r = _(() => Dt(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = _(() => s("save")), c = _(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(mf(l.value)), n("cancel");
  }
  function v(m) {
    return p(ge, null, [b(Ne, Y({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), b(Ne, Y({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let S = false;
  return ne(() => {
    var _a3;
    return p(ge, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return S = true, v;
    } }), !e.hideActions && !S && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), Ny = H({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Hy = Symbol.for("vuetify:datatable:expanded");
function Br(e) {
  const t = B(() => e.expandOnClick), n = xe(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  function o(r) {
    a(r, !l(r));
  }
  const i = { expand: a, expanded: n, expandOnClick: t, isExpanded: l, toggleExpand: o };
  return it(Hy, i), i;
}
function zy() {
  const e = He(Hy);
  if (!e) throw new Error("foo");
  return e;
}
const Gc = H({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Wy = Symbol.for("vuetify:data-table-group");
function Kc(e) {
  return { groupBy: xe(e, "groupBy") };
}
function $r(e) {
  const { disableSort: t, groupBy: n, sortBy: a } = e, l = K(/* @__PURE__ */ new Set()), o = _(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : a.value));
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
  return it(Wy, u), u;
}
function jy() {
  const e = He(Wy);
  if (!e) throw new Error("Missing group!");
  return e;
}
function HP(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ol(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function Uy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = HP(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? Uy(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function Yy(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...Yy(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Lr(e, t, n, a) {
  const l = _(() => t.value.length ? Uy(tt(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? Yy(l.value, n.value, tt(a)) : tt(e));
  return { groups: l, flatItems: o };
}
function Fr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = St("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  ce(r, (u) => {
    Dt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const qc = H({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Gy = Symbol.for("vuetify:data-table-pagination");
function Xc(e) {
  const t = xe(e, "page", void 0, (a) => Number(a ?? 1)), n = xe(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function Zc(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  ce([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = Xe(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = Xe(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = Xe(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: o, pageCount: i, itemsLength: a, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return it(Gy, d), d;
}
function zP() {
  const e = He(Gy);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Ky(e) {
  const t = St("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? tt(n) : tt(n).slice(a.value, l.value));
  return ce(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function WP(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = tt(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((y) => y.type === "group" && y.id === d), S = o.value.findIndex((y) => y.type === "group" && y.id === f), m = o.value.findIndex((y, h) => h > S && y.type === "group" && y.depth === 0);
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
const jP = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, qy = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return qy.select({ items: n, value: t, selected: a });
} }, UP = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, Xy = H({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Zy = Symbol.for("vuetify:data-table-selection");
function Or(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = xe(e, "modelValue", e.modelValue, (w) => {
    const I = e.valueComparator;
    return I ? new Set(lt(w).map((V) => {
      var _a3;
      return ((_a3 = n.value.find((x) => I(V, x.value))) == null ? void 0 : _a3.value) ?? V;
    })) : new Set(lt(w).map((V) => {
      var _a3, _b2;
      return Ea(V) ? ((_a3 = n.value.find((x) => V === x.value)) == null ? void 0 : _a3.value) ?? V : ((_b2 = n.value.find((x) => Dt(V, x.value))) == null ? void 0 : _b2.value) ?? V;
    }));
  }, (w) => [...w.values()]), o = _(() => n.value.filter((w) => w.selectable)), i = _(() => tt(a).filter((w) => w.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return jP;
      case "all":
        return UP;
      case "page":
      default:
        return qy;
    }
  }), s = re(null);
  function u(w) {
    return lt(w).every((I) => l.value.has(I.value));
  }
  function c(w) {
    return lt(w).some((I) => l.value.has(I.value));
  }
  function d(w, I) {
    const V = r.value.select({ items: w, value: I, selected: new Set(l.value) });
    l.value = V;
  }
  function f(w, I, V) {
    const x = [], g = tt(a);
    if (I = I ?? g.findIndex((C) => C.value === w.value), e.selectStrategy !== "single" && (V == null ? void 0 : V.shiftKey) && s.value !== null) {
      const [C, k] = [s.value, I].sort((T, P) => T - P);
      x.push(...g.slice(C, k + 1).filter((T) => T.selectable));
    } else x.push(w), s.value = I;
    d(x, !u([w]));
  }
  function v(w) {
    const I = r.value.selectAll({ value: w, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = I;
  }
  const S = _(() => l.value.size > 0), m = _(() => {
    const w = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!w.length && u(w);
  }), h = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: S, allSelected: m, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return it(Zy, h), h;
}
function Rr() {
  const e = He(Zy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Jy = H({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Qy = Symbol.for("vuetify:data-table-sort");
function Nr(e) {
  const t = B(() => e.initialSortOrder), n = xe(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function YP(e, t) {
  if (!il(e)) return { active: !!e };
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
      const { active: m, mode: y } = YP(l.value, c);
      m ? y === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return it(Qy, s), s;
}
function eb() {
  const e = He(Qy);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Jc(e, t, n, a) {
  const l = Je();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? GP(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function GP(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ol(i[1], c), v = ol(r[1], c), S = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [S, m] = [m, S]), (_a3 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const y = a.sortRawFunctions[c](S, m);
        if (y == null) continue;
        if (u = true, y) return y;
      }
      if ((_b2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _b2[c]) {
        const y = a.sortFunctions[c](f, v);
        if (y == null) continue;
        if (u = true, y) return y;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((y) => y != null ? y.toString().toLocaleLowerCase() : y), f !== v)) return vo(f) && vo(v) ? 0 : vo(f) ? -1 : vo(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : l.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const KP = H({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function qP(e, t) {
  const n = e.returnObject ? t : pt(t, e.itemValue), a = pt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function XP(e, t) {
  const n = [];
  for (const a of t) n.push(qP(e, a));
  return n;
}
function ZP(e) {
  return { items: _(() => XP(e, e.items)) };
}
const JP = H({ search: String, loading: Boolean, itemsLength: [Number, String], ...pe(), ...KP(), ...Xy(), ...Jy(), ...qc({ itemsPerPage: 5 }), ...Ny(), ...Gc(), ...wl(), ...De(), ...ga({ transition: { component: Ho, hideOnLeave: true } }) }, "VDataIterator"), QP = ee()({ name: "VDataIterator", props: JP(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "groupBy"), l = B(() => e.search), { items: o } = ZP(e), { filteredItems: i } = xl(e, o, l, { transform: (j) => j.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = Nr(e), { page: d, itemsPerPage: f } = Xc(e), { toggleSort: v } = Hr({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: S, opened: m, extractRows: y, isGroupOpen: h, toggleGroup: w } = $r({ groupBy: a, sortBy: s }), { sortedItems: I } = Jc(e, i, S, { transform: (j) => j.raw }), { flatItems: V } = Lr(I, a, m, false), x = B(() => !vo(e.itemsLength)), g = B(() => x.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: k, pageCount: T, prevPage: P, nextPage: E, setItemsPerPage: D, setPage: M } = Zc({ page: d, itemsPerPage: f, itemsLength: g }), A = re([]), L = _(() => x.value ? V.value : A.value);
  $t(() => !x.value, () => {
    const { paginatedItems: j } = Ky({ items: V, startIndex: C, stopIndex: k, itemsPerPage: f });
    ct(() => {
      A.value = j.value;
    });
  });
  const z = _(() => y(L.value)), { isSelected: N, select: Z, selectAll: J, toggleSelect: F } = Or(e, { allItems: o, currentPage: z }), { isExpanded: G, toggleExpand: W } = Br(e);
  Fr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const R = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: T.value, toggleSort: v, prevPage: P, nextPage: E, setPage: M, setItemsPerPage: D, isSelected: N, select: Z, selectAll: J, toggleSelect: F, isExpanded: G, toggleExpand: W, isGroupOpen: h, toggleGroup: w, items: z.value, itemsCount: i.value.length, groupedItems: L.value }));
  return ne(() => b(e.tag, { class: te(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, R.value), b(Gt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? b(si, { key: "loader", name: "v-data-iterator", active: true }, { default: (j) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, j);
      } }) : p("div", { key: "items" }, [L.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, R.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, R.value)];
  } })), {};
} });
function eT() {
  const e = K([]);
  pm(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const tT = H({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ce, default: "$first" }, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, lastIcon: { type: Ce, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Ht(), ...pe(), ...ht(), ...xt(), ...ot(), ...Jn(), ...De({ tag: "nav" }), ...We(), ...gn({ variant: "text" }) }, "VPagination"), mu = ee()({ name: "VPagination", props: tT(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = xe(e, "modelValue"), { t: o, n: i } = Je(), { isRtl: r } = _t(), { themeClasses: s } = Ke(e), { width: u } = nn(), c = re(-1);
  mt(void 0, { scoped: true });
  const { resizeRef: d } = Sn((k) => {
    if (!k.length) return;
    const { target: T, contentRect: P } = k[0], E = T.querySelector(".v-pagination__list > *");
    if (!E) return;
    const D = P.width, M = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    c.value = m(D, M);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), S = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(k, T) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((k - T * P) / T).toFixed(2))));
  }
  const y = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (S.value <= 0) return [];
    if (S.value === 1) return [l.value];
    if (f.value <= S.value) return Rn(f.value, v.value);
    const k = S.value % 2 === 0, T = k ? S.value / 2 : Math.floor(S.value / 2), P = k ? T : T + 1, E = f.value - T;
    if (P - l.value >= 0) return [...Rn(Math.max(1, S.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - E >= (k ? 1 : 0)) {
      const D = S.value - 1, M = f.value - D + v.value;
      return [v.value, e.ellipsis, ...Rn(D, M)];
    } else {
      const D = Math.max(1, S.value - 2), M = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...Rn(D, M), e.ellipsis, f.value];
    }
  });
  function h(k, T, P) {
    k.preventDefault(), l.value = T, P && a(P, T);
  }
  const { refs: w, updateRef: I } = eT();
  mt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const V = _(() => y.value.map((k, T) => {
    const P = (E) => I(E, T);
    if (typeof k == "string") return { isActive: false, key: `ellipsis-${T}`, page: k, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const E = k === l.value;
      return { isActive: E, key: k, page: i(k), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": o(E ? e.currentPageAriaLabel : e.pageAriaLabel, k), onClick: (D) => h(D, k) } };
    }
  })), x = _(() => {
    const k = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, v.value, "first"), disabled: k, "aria-label": o(e.firstAriaLabel), "aria-disabled": k } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: k, "aria-label": o(e.previousAriaLabel), "aria-disabled": k }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: T, "aria-label": o(e.nextAriaLabel), "aria-disabled": T }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, v.value + f.value - 1, "last"), disabled: T, "aria-label": o(e.lastAriaLabel), "aria-disabled": T } : void 0 };
  });
  function g() {
    var _a3;
    const k = l.value - v.value;
    (_a3 = w.value[k]) == null ? void 0 : _a3.$el.focus();
  }
  function C(k) {
    k.key === Fs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Te(g)) : k.key === Fs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Te(g));
  }
  return ne(() => b(e.tag, { ref: d, class: te(["v-pagination", s.value, e.class]), style: me(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [p("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && p("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(x.value.first) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.first), null)]), p("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(x.value.prev) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.prev), null)]), V.value.map((k, T) => p("li", { key: k.key, class: te(["v-pagination__item", { "v-pagination__item--is-active": k.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(k) : b(Ne, Y({ _as: "VPaginationBtn" }, k.props), { default: () => [k.page] })])), p("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(x.value.next) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.next), null)]), e.showFirstLastPage && p("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(x.value.last) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.last), null)])])] })), {};
} }), Qc = H({ color: String, prevIcon: { type: Ce, default: "$prev" }, nextIcon: { type: Ce, default: "$next" }, firstIcon: { type: Ce, default: "$first" }, lastIcon: { type: Ce, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Ko = ee()({ name: "VDataTableFooter", props: Qc(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = zP(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return ne(() => {
    var _a3;
    const f = mu.filterProps(e);
    return p("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), p("div", { class: "v-data-table-footer__items-per-page" }, [p("span", null, [a(e.itemsPerPageText)]), b(Nc, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), p("div", { class: "v-data-table-footer__info" }, [p("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), p("div", { class: "v-data-table-footer__pagination" }, [b(mu, Y({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Fe(f, ["color"])), null)])]);
  }), {};
} }), qo = o0({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return b(a, { class: te(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ve(e.height), width: ve(e.width), maxWidth: ve(e.maxWidth), left: l === "start" ? ve(e.fixedOffset || null) : void 0, right: l === "end" ? ve(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ve(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), nT = H({ headers: Array }, "DataTable-header"), tb = Symbol.for("vuetify:data-table-headers"), nb = { title: "", sortable: false }, aT = { ...nb, width: 48 };
function lT() {
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
function hu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) hu(n, t);
  return t;
}
function ab(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && ab(n.children, t);
  return t;
}
function oT(e) {
  if (e.key) {
    if (e.key === "data-table-group") return nb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return aT;
  }
}
function ed(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => ed(n, t + 1))) : t;
}
function iT(e) {
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
  for (let o = 0; o < e.length; o++) a = lb(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = ob(e[o], l);
}
function lb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = lb(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function ob(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = ob(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function rT(e, t) {
  const n = [];
  let a = 0;
  const l = lT(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - ed(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? hu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => hu(i)).flat(), headers: n };
}
function ib(e) {
  const t = [];
  for (const n of e) {
    const a = { ...oT(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? ib(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function td(e, t) {
  const n = K([]), a = K([]), l = K({}), o = K({}), i = K({});
  ct(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Gn(m) }))).slice(), c = ab(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = ib(u);
    iT(d);
    const f = Math.max(...d.map((m) => ed(m))) + 1, v = rT(d, f);
    n.value = v.headers, a.value = v.columns;
    const S = v.headers.flat(1);
    for (const m of S) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return it(tb, r), r;
}
function zr() {
  const e = He(tb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const rb = H({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ce }, sortAscIcon: { type: Ce, default: "$sortAsc" }, sortDescIcon: { type: Ce, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...ht(), ...hl(), ...xr() }, "VDataTableHeaders"), cl = ee()({ name: "VDataTableHeaders", props: rb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), { toggleSort: l, sortBy: o, isSorted: i } = eb(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = Rr(), { columns: d, headers: f } = zr(), { loaderClasses: v } = ri(e);
  function S(T, P) {
    if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
    const E = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? ve(T.fixedOffset) : void 0, right: E === "end" ? ve(T.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(T, P) {
    T.key === "Enter" && !e.disableSort && l(P, T);
  }
  function y(T) {
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
  const { backgroundColorClasses: h, backgroundColorStyles: w } = qe(() => e.color), { displayClasses: I, mobile: V } = nn(e), x = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: y })), g = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, v.value]), C = (T) => {
    let { column: P, x: E, y: D } = T;
    const M = P.key === "data-table-select" || P.key === "data-table-expand", A = P.key === "data-table-group" && P.width === 0 && !P.title, L = Y(e.headerProps ?? {}, P.headerProps ?? {});
    return b(qo, Y({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...g.value], style: { width: ve(P.width), minWidth: ve(P.minWidth), maxWidth: ve(P.maxWidth), ...S(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: M, empty: A, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (z) => l(P, z) : void 0, onKeydown: P.sortable ? (z) => m(z, P) : void 0 }, L), { default: () => {
      var _a3;
      const z = `header.${P.key}`, N = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: y };
      return n[z] ? n[z](N) : A ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, N)) ?? (c.value && b(Dn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : p("div", { class: "v-data-table-header__content" }, [p("span", null, [P.title]), P.sortable && !e.disableSort && b(Ge, { key: "icon", class: "v-data-table-header__sort-icon", icon: y(P) }, null), e.multiSort && i(P) && p("div", { key: "badge", class: te(["v-data-table-header__sort-badge", ...h.value]), style: me(w.value) }, [o.value.findIndex((Z) => Z.key === P.key) + 1])]);
    } });
  }, k = () => {
    const T = _(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return b(qo, Y({ tag: "th", class: [...g.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [p("div", { class: "v-data-table-header__content" }, [b(Nc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: T.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => b(Dn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return b(fa, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [E.item.title, b(Ge, { class: te(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: y(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  ne(() => V.value ? p("tr", null, [b(k, null, null)]) : p(ge, null, [n.headers ? n.headers(x.value) : f.value.map((T, P) => p("tr", null, [T.map((E, D) => b(C, { column: E, x: D, y: P }, null))])), e.loading && p("tr", { class: "v-data-table-progress" }, [p("th", { colspan: d.value.length }, [b(si, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), sb = H({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ce, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ce, default: "$tableGroupExpand" }, ...ht() }, "VDataTableGroupHeaderRow"), sT = ee()({ name: "VDataTableGroupHeaderRow", props: sb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = jy(), { isSelected: i, isSomeSelected: r, select: s } = Rr(), { columns: u } = zr(), c = _(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => p("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, S = () => l(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: S } })) ?? b(qo, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [b(Ne, { size: "small", variant: "text", icon: v, onClick: S }, null), p("span", null, [e.item.value]), p("span", null, [ut("("), c.value.length, ut(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((h) => h.selectable), S = v.length > 0 && i(v), m = r(v) && !S, y = (h) => s(v, h);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: S, indeterminate: m, "onUpdate:modelValue": y } })) ?? b(qo, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [b(Dn, { density: e.density, disabled: v.length === 0, modelValue: S, indeterminate: m, "onUpdate:modelValue": y }, null)] });
    }
    return "";
  })]);
} }), ub = H({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ce, default: "$collapse" }, expandIcon: { type: Ce, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...ht(), ...hl() }, "VDataTableRow"), nd = ee()({ name: "VDataTableRow", props: ub(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = nn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = Rr(), { isExpanded: c, toggleExpand: d } = zy(), { toggleSort: f, sortBy: v, isSorted: S } = eb(), { columns: m } = zr();
  ne(() => p("tr", { class: te(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((y, h) => {
    const w = e.item, I = `item.${y.key}`, V = `header.${y.key}`, x = { index: e.index, item: w.raw, internalItem: w, value: ol(w.columns, y.key), column: y, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, g = { column: y, selectAll: u, isSorted: S, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: x.index, item: x.item, internalItem: x.internalItem, value: x.value, column: y }) : e.cellProps, k = typeof y.cellProps == "function" ? y.cellProps({ index: x.index, item: x.item, internalItem: x.internalItem, value: x.value }) : y.cellProps, T = y.key === "data-table-select" || y.key === "data-table-expand", P = y.key === "data-table-group" && y.width === 0 && !y.title;
    return b(qo, Y({ align: y.align, indent: y.indent, class: { "v-data-table__td--expanded-row": y.key === "data-table-expand", "v-data-table__td--select-row": y.key === "data-table-select" }, fixed: y.fixed, fixedOffset: y.fixedOffset, fixedEndOffset: y.fixedEndOffset, lastFixed: y.lastFixed, firstFixedEnd: y.firstFixedEnd, maxWidth: l.value ? void 0 : y.maxWidth, noPadding: T, empty: P, nowrap: y.nowrap, width: l.value ? void 0 : y.width }, C, k), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (y.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...x, props: { color: e.color, disabled: !w.selectable, modelValue: o([w]), onClick: Si(() => i(w), ["stop"]) } })) ?? b(Dn, { color: e.color, disabled: !w.selectable, density: e.density, modelValue: o([w]), onClick: Si((D) => i(w, e.index, D), ["stop"]) }, null);
      if (y.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...x, props: { icon: c(w) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(w), ["stop"]) } })) ?? b(Ne, { icon: c(w) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(w), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](x);
      const E = Le(x.value);
      return l.value ? p(ge, null, [p("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, g)) ?? y.title]), p("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, x)) ?? E])]) : E;
    } });
  })]));
} }), cb = H({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...Jt(ub(), ["collapseIcon", "expandIcon", "density"]), ...Jt(sb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...hl() }, "VDataTableRows"), dl = ee()({ name: "VDataTableRows", inheritAttrs: false, props: cb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = zr(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = zy(), { isSelected: s, toggleSelect: u } = Rr(), { toggleGroup: c, isGroupOpen: d } = jy(), { t: f } = Je(), { mobile: v } = nn(e);
  return ne(() => {
    var _a3, _b2;
    const S = Jt(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? p("tr", { class: "v-data-table-rows-loading", key: "loading" }, [p("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? p("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [p("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : p(ge, null, [e.items.map((m, y) => {
      var _a4, _b3;
      if (m.type === "group") {
        const I = { index: y, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : b(sT, Y({ key: `group-header_${m.id}`, item: m }, cn(n, ":groupHeader", () => I), S), a);
      }
      if (m.type === "group-summary") {
        const I = { index: y, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const h = { index: m.virtualIndex ?? y, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, w = { ...h, props: Y({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: y, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, cn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return p(ge, { key: w.props.key }, [a.item ? a.item(w) : b(nd, w.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), db = H({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...pe(), ...ht(), ...De(), ...We() }, "VTable"), fl = ee()({ name: "VTable", props: db(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = Ke(e), { densityClasses: o } = Ft(e);
  return ne(() => b(e.tag, { class: te(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? p("div", { class: "v-table__wrapper", style: { height: ve(e.height) } }, [p("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), uT = H({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function cT(e, t, n, a) {
  const l = e.returnObject ? t : pt(t, e.itemValue), o = pt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = pt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? pt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function dT(e, t, n) {
  return t.map((a, l) => cT(e, a, l, n));
}
function ad(e, t) {
  return { items: _(() => dT(e, e.items, t.value)) };
}
const ld = H({ ...cb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...Ny(), ...Gc(), ...nT(), ...uT(), ...Xy(), ...Jy(), ...Fe(rb(), ["multiSort", "initialSortOrder"]), ...db() }, "DataTable"), fT = H({ ...qc(), ...ld(), ...wl(), ...Qc() }, "VDataTable"), vT = ee()({ name: "VDataTable", props: fT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Kc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { page: u, itemsPerPage: c } = Xc(e), { disableSort: d } = Zl(e), { columns: f, headers: v, sortFunctions: S, sortRawFunctions: m, filterFunctions: y } = td(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: h } = ad(e, f), w = B(() => e.search), { filteredItems: I } = xl(e, h, w, { transform: (ie) => ie.columns, customKeyFilter: y }), { toggleSort: V } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: x, opened: g, extractRows: C, isGroupOpen: k, toggleGroup: T } = $r({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = Jc(e, I, x, { transform: (ie) => ({ ...ie.raw, ...ie.columns }), sortFunctions: S, sortRawFunctions: m }), E = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: M, paginatedItems: A } = WP({ pageBy: E, sortedItems: P, paginate: (ie) => {
    const ae = _(() => tt(ie).length), { startIndex: Q, stopIndex: de, pageCount: Ve, setItemsPerPage: ke } = Zc({ page: u, itemsPerPage: c, itemsLength: ae }), { paginatedItems: ye } = Ky({ items: ie, startIndex: Q, stopIndex: de, itemsPerPage: c });
    return { paginatedItems: ye, pageCount: Ve, setItemsPerPage: ke };
  }, group: (ie) => Lr(ie, l, g, () => !!a["group-summary"]) }), L = _(() => C(A.value)), { isSelected: z, select: N, selectAll: Z, toggleSelect: J, someSelected: F, allSelected: G } = Or(e, { allItems: h, currentPage: L }), { isExpanded: W, toggleExpand: R } = Br(e);
  Fr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: w }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const j = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: M, someSelected: F.value, allSelected: G.value, isSelected: z, select: N, selectAll: Z, toggleSelect: J, isExpanded: W, toggleExpand: R, isGroupOpen: k, toggleGroup: T, items: L.value.map((ie) => ie.raw), internalItems: L.value, groupedItems: A.value, columns: f.value, headers: v.value }));
  return ne(() => {
    const ie = Ko.filterProps(e), ae = cl.filterProps(Fe(e, ["multiSort"])), Q = dl.filterProps(e), de = fl.filterProps(e);
    return b(fl, Y({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, de, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, j.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(j.value) : p(ge, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, j.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [b(cl, Y(ae, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, j.value), !e.hideDefaultBody && p("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, j.value), a.body ? a.body(j.value) : b(dl, Y(n, Q, { items: A.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, j.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, j.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, j.value)]);
    }, bottom: () => a.bottom ? a.bottom(j.value) : !e.hideDefaultFooter && p(ge, null, [b(dn, null, null), b(Ko, ie, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), mT = H({ ...Fe(ld(), ["hideDefaultFooter"]), ...Gc(), ...Qg(), ...wl() }, "VDataTableVirtual"), hT = ee()({ name: "VDataTableVirtual", props: mT(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Kc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { disableSort: u } = Zl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: S } = td(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = ad(e, c), y = B(() => e.search), { filteredItems: h } = xl(e, m, y, { transform: (ye) => ye.columns, customKeyFilter: f }), { toggleSort: w } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: x, isGroupOpen: g, toggleGroup: C } = $r({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: k } = Jc(e, h, I, { transform: (ye) => ({ ...ye.raw, ...ye.columns }), sortFunctions: v, sortRawFunctions: S }), { flatItems: T } = Lr(k, l, V, () => !!a["group-summary"]), P = _(() => x(T.value)), { isSelected: E, select: D, selectAll: M, toggleSelect: A, someSelected: L, allSelected: z } = Or(e, { allItems: P, currentPage: P }), { isExpanded: N, toggleExpand: Z } = Br(e), { containerRef: J, markerRef: F, paddingTop: G, paddingBottom: W, computedItems: R, handleItemResize: j, handleScroll: ie, handleScrollend: ae, calculateVisibleItems: Q, scrollToIndex: de } = ey(e, T), Ve = _(() => R.value.map((ye) => ({ ...ye.raw, virtualIndex: ye.index })));
  Fr({ sortBy: i, page: re(1), itemsPerPage: re(-1), groupBy: l, search: y }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const ke = _(() => ({ sortBy: i.value, toggleSort: w, someSelected: L.value, allSelected: z.value, isSelected: E, select: D, selectAll: M, toggleSelect: A, isExpanded: N, toggleExpand: Z, isGroupOpen: g, toggleGroup: C, items: P.value.map((ye) => ye.raw), internalItems: P.value, groupedItems: T.value, columns: c.value, headers: d.value }));
  return ne(() => {
    const ye = cl.filterProps(Fe(e, ["multiSort"])), $ = dl.filterProps(e), O = fl.filterProps(e);
    return b(fl, Y({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, O, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, ke.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return p("div", { ref: J, onScrollPassive: ie, onScrollend: ae, class: "v-table__wrapper", style: { height: ve(e.height) } }, [p("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, ke.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [b(cl, Y(ye, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, ke.value), !e.hideDefaultBody && p("tbody", { key: "tbody" }, [p("tr", { ref: F, style: { height: ve(G.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, ke.value), b(dl, Y(n, $, { items: Ve.value }), { ...a, item: (X) => b(Jg, { key: X.internalItem.index, renderless: true, "onUpdate:height": (se) => j(X.internalItem.index, se) }, { default: (se) => {
        var _a4;
        let { itemRef: le } = se;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...X, itemRef: le })) ?? b(nd, Y(X.props, { ref: le, key: X.internalItem.index, index: X.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, ke.value), p("tr", { style: { height: ve(W.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = a.tbody) == null ? void 0 : _e.call(a, ke.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, ke.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, ke.value);
    } });
  }), { calculateVisibleItems: Q, scrollToIndex: de };
} }), gT = H({ itemsLength: { type: [Number, String], required: true }, ...qc(), ...ld(), ...Qc() }, "VDataTableServer"), yT = ee()({ name: "VDataTableServer", props: gT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Kc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { page: u, itemsPerPage: c } = Xc(e), { disableSort: d } = Zl(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: S } = td(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = ad(e, v), { toggleSort: y } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: w, toggleGroup: I, extractRows: V } = $r({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: x, setItemsPerPage: g } = Zc({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Lr(m, l, h, () => !!a["group-summary"]), { isSelected: k, select: T, selectAll: P, toggleSelect: E, someSelected: D, allSelected: M } = Or(e, { allItems: m, currentPage: m }), { isExpanded: A, toggleExpand: L } = Br(e), z = _(() => V(m.value));
  Fr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), it("v-data-table", { toggleSort: y, sortBy: i }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const N = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: x.value, toggleSort: y, setItemsPerPage: g, someSelected: D.value, allSelected: M.value, isSelected: k, select: T, selectAll: P, toggleSelect: E, isExpanded: A, toggleExpand: L, isGroupOpen: w, toggleGroup: I, items: z.value.map((Z) => Z.raw), internalItems: z.value, groupedItems: C.value, columns: v.value, headers: S.value }));
  ne(() => {
    const Z = Ko.filterProps(e), J = cl.filterProps(Fe(e, ["multiSort"])), F = dl.filterProps(e), G = fl.filterProps(e);
    return b(fl, Y({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, G, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, N.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(N.value) : p(ge, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, N.value), !e.hideDefaultHeader && p("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [b(cl, Y(J, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, N.value), !e.hideDefaultBody && p("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, N.value), a.body ? a.body(N.value) : b(dl, Y(n, F, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, N.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, N.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, N.value)]);
    }, bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && p(ge, null, [b(dn, null, null), b(Ko, Z, { prepend: a["footer.prepend"] })]) });
  });
} }), bT = H({ fluid: { type: Boolean, default: false }, ...pe(), ...kt(), ...De() }, "VContainer"), pT = ee()({ name: "VContainer", props: bT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = _t(), { dimensionStyles: l } = wt(e);
  return ne(() => b(e.tag, { class: te(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: me([l.value, e.style]) }, n)), {};
} }), fb = br.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), vb = br.reduce((e, t) => {
  const n = "offset" + Gn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), mb = br.reduce((e, t) => {
  const n = "order" + Gn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), mv = { col: Object.keys(fb), offset: Object.keys(vb), order: Object.keys(mb) };
function ST(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const kT = ["auto", "start", "end", "center", "baseline", "stretch"], wT = H({ cols: { type: [Boolean, String, Number], default: false }, ...fb, offset: { type: [String, Number], default: null }, ...vb, order: { type: [String, Number], default: null }, ...mb, alignSelf: { type: String, default: null, validator: (e) => kT.includes(e) }, ...pe(), ...De() }, "VCol"), xT = ee()({ name: "VCol", props: wT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in mv) mv[o].forEach((r) => {
      const s = e[r], u = ST(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), od = ["start", "end", "center"], hb = ["space-between", "space-around", "space-evenly"];
function id(e, t) {
  return br.reduce((n, a) => {
    const l = e + Gn(a);
    return n[l] = t(), n;
  }, {});
}
const CT = [...od, "baseline", "stretch"], gb = (e) => CT.includes(e), yb = id("align", () => ({ type: String, default: null, validator: gb })), _T = [...od, ...hb], bb = (e) => _T.includes(e), pb = id("justify", () => ({ type: String, default: null, validator: bb })), VT = [...od, ...hb, "stretch"], Sb = (e) => VT.includes(e), kb = id("alignContent", () => ({ type: String, default: null, validator: Sb })), hv = { align: Object.keys(yb), justify: Object.keys(pb), alignContent: Object.keys(kb) }, IT = { align: "align", justify: "justify", alignContent: "align-content" };
function PT(e, t, n) {
  let a = IT[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const TT = H({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: gb }, ...yb, justify: { type: String, default: null, validator: bb }, ...pb, alignContent: { type: String, default: null, validator: Sb }, ...kb, ...pe(), ...De() }, "VRow"), AT = ee()({ name: "VRow", props: TT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in hv) hv[o].forEach((i) => {
      const r = e[i], s = PT(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), gu = ha("v-spacer", "div", "VSpacer"), wb = H({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ce, default: "$next" }, prevIcon: { type: Ce, default: "$prev" }, modeIcon: { type: Ce, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), yu = ee()({ name: "VDatePickerControls", props: wb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
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
  return ne(() => {
    const h = { VBtn: { density: "comfortable", variant: "text" } }, w = b(Ne, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = b(Ne, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = b(Ne, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), x = b(Ne, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: S }, null), g = b(Ne, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), C = b(Ne, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), k = b(Ne, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), T = p(ge, null, [b(Ne, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), b(Ne, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: y, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: S }, E = p(ge, null, [e.noMonthPicker ? k : T, b(gu, null, null), p("div", { class: "v-date-picker-controls__month" }, [w, I])]), D = p(ge, null, [p("div", { class: "v-date-picker-controls__month" }, [w, g, I]), b(gu, null, null), p("div", { class: "v-date-picker-controls__year" }, [V, C, x])]);
    return b(Me, { defaults: h }, { default: () => {
      var _a3;
      return [p("div", { class: te(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ve(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? p(ge, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), DT = H({ appendIcon: Ce, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), bu = ee()({ name: "VDatePickerHeader", props: DT(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return ne(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return p("div", { class: te(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: me(o.value), onClick: i }, [a.prepend && p("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && b(Gt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [p("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && p("div", { class: "v-date-picker-header__append" }, [a.append ? b(Me, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : b(Ne, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), ET = H({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function MT(e) {
  const t = ml(), n = xe(e, "modelValue", [], (m) => lt(m).map((y) => t.date(y))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = xe(e, "year", void 0, (m) => {
    const y = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), y));
  }, (m) => t.getYear(m)), o = xe(e, "month", void 0, (m) => {
    const y = m != null ? Number(m) : t.getMonth(a.value), h = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(h, y);
  }, (m) => t.getMonth(m)), i = _(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((y, h) => e.weekdays.includes((h + m) % 7));
  }), r = _(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), y = m.flat(), h = 42;
    if (e.weeksInMonth === "static" && y.length < h) {
      const w = y[y.length - 1];
      let I = [];
      for (let V = 1; V <= h - y.length; V++) I.push(t.addDays(w, V)), V % 7 === 0 && (m.push(I), I = []);
    }
    return m;
  });
  function s(m, y) {
    return m.filter((h) => e.weekdays.includes(t.toJsDate(h).getDay())).map((h, w) => {
      const I = t.toISO(h), V = !t.isSameMonth(h, o.value), x = t.isSameDay(h, t.startOfMonth(o.value)), g = t.isSameDay(h, t.endOfMonth(o.value)), C = t.isSameDay(h, o.value), k = e.weekdays.length;
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: V, isDisabled: S(h), isEnd: g, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((T) => t.isSameDay(h, T)), isStart: x, isToday: t.isSameDay(h, y), isWeekEnd: w % k === k - 1, isWeekStart: w % k === 0, isoDate: I, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
    });
  }
  const u = _(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let w = 0; w <= 6; w++) y.push(t.addDays(m, w));
    const h = t.date();
    return s(y, h);
  }), c = _(() => {
    const m = r.value.flat(), y = t.date();
    return s(m, y);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = xb(e);
  function S(m) {
    if (e.disabled) return true;
    const y = t.date(m);
    return f.value && t.isBefore(t.endOfDay(y), f.value) || v.value && t.isAfter(y, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function xb(e) {
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
const Cb = H({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Fe(ET(), ["displayValue"]) }, "VDatePickerMonth"), pu = ee()({ name: "VDatePickerMonth", props: Cb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = K(), { t: o } = Je(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = MT(e), c = ml(), d = re(), f = re(), v = re(false), S = B(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = _(() => {
    const g = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= g;
  });
  ce(i, (g, C) => {
    C && (v.value = c.isBefore(g[0].date, C[0].date));
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
      r.value = ux(c, d.value, f.value);
    }
  }
  function h(g) {
    const C = c.format(g.date, "fullDateWithWeekday"), k = g.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${k}`, C);
  }
  function w(g) {
    const C = r.value.findIndex((k) => c.isSameDay(k, g));
    if (C === -1) r.value = [...r.value, g];
    else {
      const k = [...r.value];
      k.splice(C, 1), r.value = k;
    }
  }
  function I(g) {
    e.multiple === "range" ? y(g) : e.multiple ? w(g) : r.value = [g];
  }
  function V(g) {
    const { events: C, eventColor: k } = e;
    let T, P = [];
    if (Array.isArray(C) ? T = C.includes(g) : C instanceof Function ? T = C(g) || false : C ? T = C[g] || false : T = false, T) T !== true ? P = lt(T) : typeof k == "string" ? P = [k] : typeof k == "function" ? P = lt(k(g)) : Array.isArray(k) ? P = k : typeof k == "object" && k !== null && (P = lt(k[g]));
    else return [];
    return P.length ? P.filter(Boolean).map((E) => typeof E == "string" ? E : "surface-variant") : ["surface-variant"];
  }
  function x(g) {
    const C = V(g);
    return C.length ? p("div", { class: "v-date-picker-month__events" }, [C.map((k) => b(ty, { dot: true, color: k }, null))]) : null;
  }
  ne(() => p("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && p("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && p("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [ut("\xA0")]), s.value.map((g) => p("div", { class: te(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [g]))]), b(Gt, { name: S.value }, { default: () => {
    var _a3;
    return [p("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((g) => p("div", { class: te(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [g])), i.value.map((g, C) => {
      var _a4;
      const k = { props: { class: "v-date-picker-month__day-btn", color: g.isSelected || g.isToday ? e.color : void 0, disabled: g.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text", "aria-label": h(g), "aria-current": g.isToday ? "date" : void 0, onClick: () => I(g.date) }, item: g, i: C };
      return m.value && !g.isSelected && (g.isDisabled = true), p("div", { class: te(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": g.isAdjacent, "v-date-picker-month__day--hide-adjacent": g.isHidden, "v-date-picker-month__day--selected": g.isSelected, "v-date-picker-month__day--week-end": g.isWeekEnd, "v-date-picker-month__day--week-start": g.isWeekStart }]), "data-v-date": g.isDisabled ? void 0 : g.isoDate }, [(e.showAdjacentMonths || !g.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, k)) ?? b(Ne, k.props, { default: () => [g.localized, x(g.isoDate)] }))]);
    })])];
  } })]));
} }), _b = H({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), Su = ee()({ name: "VDatePickerMonths", props: _b(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = xe(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), Rn(12).map((u) => {
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
  return ne(() => p("div", { class: "v-date-picker-months", style: { height: ve(e.height) } }, [p("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = a.month) == null ? void 0 : _a3.call(a, { month: s, i: u, props: c })) ?? b(Ne, Y({ key: "month" }, c), null);
  })])])), {};
} }), Vb = H({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), ku = ee()({ name: "VDatePickerYears", props: Vb(), directives: { vIntersect: An }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = xe(e, "modelValue"), i = re(false), r = _(() => {
    const f = l.getYear(l.date());
    let v = f - 100, S = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (S = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), Rn(S - v + 1, v).map((y) => {
      const h = l.format(m, "year");
      return m = l.setYear(m, l.getYear(m) + 1), { text: h, value: y, isDisabled: !d(y) };
    });
  });
  ct(() => {
    o.value = o.value ?? l.getYear(l.date());
  });
  const s = $o(), u = $o();
  function c() {
    const f = s.el, v = u.el;
    if (!f || !v) return;
    const S = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - S.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return ne(() => nt(p("div", { class: "v-date-picker-years", ref: s, style: { height: ve(e.height) } }, [p("div", { class: "v-date-picker-years__content", onFocus: () => {
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
    return ((_a3 = a.year) == null ? void 0 : _a3.call(a, { year: f, i: v, props: S })) ?? b(Ne, Y({ key: "month" }, S), null);
  })])]), [[An, { handler: c }, null, { once: true }]])), {};
} }), BT = H({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Fe(wb(), ["active", "monthText", "yearText"]), ...Cb({ weeksInMonth: "static" }), ...Fe(_b(), ["modelValue"]), ...Fe(Vb(), ["modelValue"]), ...Mr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), $T = ee()({ name: "VDatePicker", props: BT(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), { t: o } = Je(), { rtlClasses: i } = _t(), r = xe(e, "modelValue", void 0, (j) => lt(j).map((ie) => l.date(ie)), (j) => e.multiple ? j : j[0]), s = xe(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = xb(e), f = _(() => {
    var _a3;
    const j = l.date(), ie = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(j);
    return ie && l.isValid(ie) ? ie : j;
  }), v = B(() => e.headerColor ?? e.color), S = xe(e, "month"), m = _({ get: () => Number(S.value ?? l.getMonth(l.startOfMonth(f.value))), set: (j) => S.value = j }), y = xe(e, "year"), h = _({ get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (j) => y.value = j }), w = re(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const j = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && j.split(" ").length === 3 ? j.replace(" ", `
`) : j;
  }), V = B(() => {
    let j = l.date();
    return j = l.setDate(j, 1), j = l.setMonth(j, m.value), j = l.setYear(j, h.value), j;
  }), x = B(() => l.format(V.value, "monthAndYear")), g = B(() => l.format(V.value, "monthShort")), C = B(() => l.format(V.value, "year")), k = B(() => `date-picker-header${w.value ? "-reverse" : ""}-transition`), T = _(() => {
    if (e.disabled) return true;
    const j = [];
    if (s.value !== "month") j.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ie = l.date();
      if (ie = l.startOfMonth(ie), ie = l.setMonth(ie, m.value), ie = l.setYear(ie, h.value), u.value) {
        const ae = l.addDays(l.startOfMonth(ie), -1), Q = l.addDays(l.startOfYear(ie), -1);
        l.isAfter(u.value, ae) && j.push("prev-month"), l.isAfter(u.value, Q) && j.push("prev-year");
      }
      if (c.value) {
        const ae = l.addDays(l.endOfMonth(ie), 1), Q = l.addDays(l.endOfYear(ie), 1);
        l.isAfter(ae, c.value) && j.push("next-month"), l.isAfter(Q, c.value) && j.push("next-year");
      }
    }
    return j;
  }), P = _(() => e.allowedYears || M), E = _(() => e.allowedMonths || A);
  function D(j, ie) {
    const ae = e.allowedDates;
    if (typeof ae != "function") return true;
    const Q = 1 + Oh(l, j, ie);
    for (let de = 0; de < Q; de++) if (ae(l.addDays(j, de))) return true;
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
  function A(j) {
    if (typeof e.allowedDates == "function") {
      const ie = String(j + 1).padStart(2, "0"), ae = l.parseISO(`${h.value}-${ie}-01`);
      return D(ae, l.endOfMonth(ae));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (l.getYear(l.date(ie)) === h.value && l.getMonth(l.date(ie)) === j) return true;
      return false;
    }
    return true;
  }
  function L() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, R()), W();
  }
  function z() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, R()), W();
  }
  function N() {
    if (h.value++, c.value) {
      const j = String(m.value + 1).padStart(2, "0"), ie = l.parseISO(`${h.value}-${j}-01`);
      l.isAfter(ie, c.value) && (m.value = l.getMonth(c.value));
    }
    R();
  }
  function Z() {
    if (h.value--, u.value) {
      const j = String(m.value + 1).padStart(2, "0"), ie = l.endOfMonth(l.parseISO(`${h.value}-${j}-01`));
      l.isAfter(u.value, ie) && (m.value = l.getMonth(u.value));
    }
    R();
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
  function R() {
    s.value === "year" && G();
  }
  return ce(r, (j, ie) => {
    const ae = lt(ie), Q = lt(j);
    if (!Q.length) return;
    const de = l.date(ae[ae.length - 1]), Ve = l.date(Q[Q.length - 1]);
    if (l.isSameDay(de, Ve)) return;
    const ke = l.getMonth(Ve), ye = l.getYear(Ve);
    ke !== m.value && (m.value = ke, W()), ye !== h.value && (h.value = ye, R()), w.value = l.isBefore(de, Ve);
  }), ne(() => {
    const j = Xl.filterProps(e), ie = Fe(yu.filterProps(e), ["viewMode"]), ae = bu.filterProps(e), Q = pu.filterProps(e), de = Fe(Su.filterProps(e), ["modelValue"]), Ve = Fe(ku.filterProps(e), ["modelValue"]), ke = { color: v.value, header: I.value, transition: k.value };
    return b(Xl, Y(j, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ve(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? b(Me, { defaults: { VDatePickerHeader: { ...ke } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, ke)];
    } }) : b(bu, Y({ key: "header" }, ae, ke, { onClick: s.value !== "month" ? J : void 0 }), { prepend: a.prepend, append: a.append }), default: () => p(ge, null, [b(yu, Y(ie, { disabled: T.value, viewMode: s.value, text: x.value, monthText: g.value, yearText: C.value, "onClick:next": L, "onClick:prev": z, "onClick:nextYear": N, "onClick:prevYear": Z, "onClick:month": F, "onClick:year": G }), { default: a.controls }), b(Ho, { hideOnLeave: true }, { default: () => [s.value === "months" ? b(Su, Y({ key: "date-picker-months" }, de, { modelValue: m.value, "onUpdate:modelValue": [(ye) => m.value = ye, W], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? b(ku, Y({ key: "date-picker-years" }, Ve, { modelValue: h.value, "onUpdate:modelValue": [(ye) => h.value = ye, R], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : b(pu, Y({ key: "date-picker-month" }, Q, { modelValue: r.value, "onUpdate:modelValue": (ye) => r.value = ye, month: m.value, "onUpdate:month": [(ye) => m.value = ye, W], year: h.value, "onUpdate:year": [(ye) => h.value = ye, R], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), LT = H({ actionText: String, bgColor: String, color: String, icon: Ce, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...pe(), ...kt(), ...Jn({ size: void 0 }), ...We() }, "VEmptyState"), FT = ee()({ name: "VEmptyState", props: LT(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { backgroundColorClasses: o, backgroundColorStyles: i } = qe(() => e.bgColor), { dimensionStyles: r } = wt(e), { displayClasses: s } = nn();
  function u(c) {
    n("click:action", c);
  }
  return ne(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), S = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return p("div", { class: te(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: me([i.value, r.value, e.style]) }, [S && p("div", { key: "media", class: "v-empty-state__media" }, [a.media ? b(Me, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : p(ge, null, [e.image ? b(da, { key: "image", src: e.image, height: m }, null) : e.icon ? b(Ge, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && p("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && p("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && p("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ve(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && p("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && p("div", { key: "actions", class: "v-empty-state__actions" }, [b(Me, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? b(Ne, { onClick: u }, null)];
    } })])]);
  }), {};
} }), Xo = Symbol.for("vuetify:v-expansion-panel"), Ib = H({ ...pe(), ...Dc() }, "VExpansionPanelText"), wu = ee()({ name: "VExpansionPanelText", props: Ib(), setup(e, t) {
  let { slots: n } = t;
  const a = He(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = Ec(e, a.isSelected);
  return ne(() => b(kr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [nt(p("div", { class: te(["v-expansion-panel-text", e.class]), style: me(e.style) }, [n.default && l.value && p("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[En, a.isSelected.value]])];
  } })), {};
} }), Pb = H({ color: String, expandIcon: { type: Ce, default: "$expand" }, collapseIcon: { type: Ce, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...pe(), ...kt() }, "VExpansionPanelTitle"), xu = ee()({ name: "VExpansionPanelTitle", directives: { vRipple: Lt }, props: Pb(), setup(e, t) {
  let { slots: n } = t;
  const a = He(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { dimensionStyles: i } = wt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return ne(() => {
    var _a3;
    return nt(p("button", { class: te(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: me([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [p("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && b(Me, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [p("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? b(Ge, null, null)])];
    } })]), [[Lt, e.ripple]]);
  }), {};
} }), Tb = H({ title: String, text: String, bgColor: String, ...xt(), ...Sl(), ...ot(), ...De(), ...Pb(), ...Ib() }, "VExpansionPanel"), OT = ee()({ name: "VExpansionPanel", props: Tb(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Xo), { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.bgColor), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, v, S) => (a.group.selected.value.includes(v.id) && f.push(S), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return it(Xo, a), ne(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), S = xu.filterProps(e), m = wu.filterProps(e);
    return b(e.tag, { class: te(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [p("div", { class: te(["v-expansion-panel__shadow", ...i.value]) }, null), b(Me, { defaults: { VExpansionPanelTitle: { ...S }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && b(xu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && b(wu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), RT = ["default", "accordion", "inset", "popout"], NT = H({ flat: Boolean, ...pl(), ...Jt(Tb(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...We(), ...pe(), ...De(), variant: { type: String, default: "default", validator: (e) => RT.includes(e) } }, "VExpansionPanels"), HT = ee()({ name: "VExpansionPanels", props: NT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Na(e, Xo), { themeClasses: o } = Ke(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return mt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), ne(() => b(e.tag, { class: te(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), zT = H({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Fe(Cr({ active: true }), ["location", "spaced"]), ...gl(), ...Zn(), ...ga({ transition: "fab-transition" }) }, "VFab"), WT = ee()({ name: "VFab", props: zT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), l = re(56), o = K(), { resizeRef: i } = Sn((d) => {
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
  const c = K();
  return ne(() => {
    const d = Ne.filterProps(e);
    return p("div", { ref: c, class: te(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: me([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [p("div", { class: "v-fab__container" }, [b(Gt, { appear: e.appear, transition: e.transition }, { default: () => [nt(b(Ne, Y({ ref: i }, d, { active: void 0, location: void 0 }), n), [[En, e.active]])] })])]);
  }), {};
} });
function jT() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await Ab(o, Db(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function Ab(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await Ab(r, Db(t, r)));
      n(i);
    });
  });
}
function Db(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const UT = H({ filterByType: String }, "file-accept");
function YT(e) {
  const t = _(() => e.filterByType ? GT(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function GT(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const KT = H({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Fe(Sa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => lt(e).every((t) => t != null && typeof t == "object") }, ...UT(), ...mi({ clearable: true }) }, "VFileInput"), qT = ee()({ name: "VFileInput", inheritAttrs: false, props: KT(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Je(), { filterAccepted: i } = YT(e), r = xe(e, "modelValue", e.modelValue, (J) => lt(J), (J) => !e.multiple && Array.isArray(J) ? J[0] : J), { isFocused: s, focus: u, blur: c } = pa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((J, F) => {
    let { size: G = 0 } = F;
    return J + G;
  }, 0)), v = _(() => ff(f.value, d.value)), S = _(() => (r.value ?? []).map((J) => {
    const { name: F = "", size: G = 0 } = J, W = M(F);
    return e.showSize ? `${W} (${ff(G, d.value)})` : W;
  })), m = _(() => {
    var _a3;
    const J = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, J, v.value) : o(e.counterString, J);
  }), y = K(), h = K(), w = K(), I = B(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), x = re(false), { handleDrop: g, hasFilesOrFolders: C } = jT();
  function k() {
    var _a3;
    w.value !== document.activeElement && ((_a3 = w.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function T(J) {
    var _a3;
    (_a3 = w.value) == null ? void 0 : _a3.click();
  }
  function P(J) {
    a("mousedown:control", J);
  }
  function E(J) {
    var _a3;
    (_a3 = w.value) == null ? void 0 : _a3.click(), a("click:control", J);
  }
  function D(J) {
    J.stopPropagation(), k(), Te(() => {
      r.value = [], ai(e["onClick:clear"], J);
    });
  }
  function M(J) {
    if (J.length < Number(e.truncateLength)) return J;
    const F = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${J.slice(0, F)}\u2026${J.slice(J.length - F)}`;
  }
  function A(J) {
    J.preventDefault(), J.stopImmediatePropagation(), x.value = true;
  }
  function L(J) {
    J.preventDefault(), x.value = false;
  }
  async function z(J) {
    if (J.preventDefault(), J.stopImmediatePropagation(), x.value = false, !w.value || !C(J)) return;
    const F = await g(J);
    Z(F);
  }
  function N(J) {
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
    w.value.files = F.files, r.value = [...F.files];
    const R = new Event("change", { bubbles: true });
    R.repack = true, w.value.dispatchEvent(R);
  }
  return ce(r, (J) => {
    (!Array.isArray(J) || !J.length) && w.value && (w.value.value = "");
  }), ne(() => {
    const J = !!(l.counter || e.counter), F = !!(J || l.details), [G, W] = qn(n), { modelValue: R, ...j } = Rt.filterProps(e), ie = { ...Fa.filterProps(e), "onClick:clear": D }, ae = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, Q = n.accept ? String(n.accept) : void 0, de = ae ? void 0 : e.filterByType ?? Q;
    return b(Rt, Y({ ref: y, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": x.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": T }, G, j, { centerAffix: !V.value, focused: s.value }), { ...l, default: (Ve) => {
      let { id: ke, isDisabled: ye, isDirty: $, isReadonly: O, isValid: X, hasDetails: se } = Ve;
      return b(Fa, Y({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ie, { id: ke.value, active: I.value || $.value, dirty: $.value || e.dirty, disabled: ye.value, focused: s.value, details: se.value, error: X.value === false, onDragover: A, onDrop: z }), { ...l, default: (le) => {
        var _a3;
        let { props: { class: ue, ...be }, controlRef: fe } = le;
        return p(ge, null, [p("input", Y({ ref: (U) => w.value = fe.value = U, type: "file", accept: de, readonly: O.value, disabled: ye.value, multiple: e.multiple, name: e.name, onClick: (U) => {
          U.stopPropagation(), O.value && U.preventDefault(), k();
        }, onChange: N, onDragleave: L, onFocus: k, onBlur: c }, be, W), null), p("div", { class: te(ue) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: S.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? S.value.map((U) => b(fa, { key: U, size: "small", text: U }, null)) : S.value.join(", "))])]);
      } });
    }, details: F ? (Ve) => {
      var _a3, _b2;
      return p(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, Ve), J && p(ge, null, [p("span", null, null), b(Vr, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, y, h, w);
} }), XT = H({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Ht(), ...pe(), ...xt(), ...gl(), ...ot(), ...De({ tag: "footer" }), ...We() }, "VFooter"), ZT = ee()({ name: "VFooter", props: XT(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), { themeClasses: l } = Ke(e), { backgroundColorClasses: o, backgroundColorStyles: i } = qe(() => e.color), { borderClasses: r } = qt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), c = re(32), { resizeRef: d } = Sn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return $t(() => e.app, () => {
    const v = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    ct(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), ne(() => b(e.tag, { ref: d, class: te(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: me([i.value, e.app ? a.value : { height: ve(e.height) }, e.style]) }, n)), {};
} }), JT = H({ ...pe(), ...l_() }, "VForm"), QT = ee()({ name: "VForm", props: JT(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = o_(e), o = K();
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
    return p("form", { ref: o, class: te(["v-form", e.class]), style: me(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Pt(l, o);
} }), eA = H({ color: String, ...Ht(), ...pe(), ...ot(), ...De({ tag: "kbd" }), ...We(), ...xt() }, "VKbd"), Cu = ee()({ name: "VKbd", props: eA(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { borderClasses: l } = qt(e), { roundedClasses: o } = dt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = qe(() => e.color), { elevationClasses: s } = It(e);
  return ne(() => b(e.tag, { class: te(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: me([r.value, e.style]) }, n)), {};
} });
function Eb(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const Mb = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, tA = H({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => Mb }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...pe(), ...We(), ...Ht(), ...ot(), ...xt(), color: String }, "VHotkey"), Ss = Symbol("VHotkey:AND_DELINEATOR"), ks = Symbol("VHotkey:SLASH_DELINEATOR"), gv = Symbol("VHotkey:THEN_DELINEATOR");
function nA(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = Eb(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function yv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = Eb(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const aA = ee()({ name: "VHotkey", props: tA(), setup(e) {
  const { t } = Je(), { themeClasses: n } = Ke(e), { rtlClasses: a } = _t(), { borderClasses: l } = qt(e), { roundedClasses: o } = dt(e), { elevationClasses: i } = It(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
    const w = [], I = Vx(h);
    for (let V = 0; V < I.length; V++) {
      const x = I[V];
      V > 0 && w.push(gv);
      const { keys: g, separators: C } = Yh(x);
      for (let k = 0; k < g.length; k++) {
        const T = g[k];
        k > 0 && w.push(C[k - 1] === "/" ? ks : Ss), w.push(yv(e.keyMap, e.displayMode, T, c.value));
      }
    }
    return w;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const w = d.value.map((I) => {
      const V = [];
      for (const x of I) if (Array.isArray(x)) {
        const g = x[0] === "icon" || x[0] === "symbol" ? yv(Ot(Mb, e.keyMap), "text", String(x[1]), c.value)[1] : x[1];
        V.push(v(g));
      } else x === Ss ? V.push(t("$vuetify.hotkey.plus")) : x === ks ? V.push(t("$vuetify.hotkey.or")) : x === gv && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", w);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function S(h) {
    if (e.displayMode === "text") return;
    const w = nA(e.keyMap, String(h[2]), c.value);
    return v(w);
  }
  function m(h, w) {
    const I = e.variant === "contained", V = I ? "kbd" : Cu, x = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return b(V, { key: w, class: te(x), style: me(I ? void 0 : s.value), "aria-hidden": "true", title: S(h) }, { default: () => [h[0] === "icon" ? b(Ge, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function y(h, w) {
    return p("span", { key: w, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === Ss ? "+" : h === ks ? "/" : t("$vuetify.hotkey.then")]);
  }
  ne(() => {
    const h = p(ge, null, [e.prefix && p("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((w, I) => p("span", { class: "v-hotkey__combination", key: I }, [w.map((V, x) => Array.isArray(V) ? m(V, x) : y(V, x)), I < d.value.length - 1 && p("span", { "aria-hidden": "true" }, [ut("\xA0")])])), e.suffix && p("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return p("div", { class: te(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: me(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : b(Cu, { key: "contained", class: te(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: me(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), lA = H({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Tc() }, "VHover"), oA = ee()({ name: "VHover", props: lA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Ac(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), iA = H({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...kt(), ...De() }, "VInfiniteScroll"), bv = Kt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii();
  return ce(l, async (o) => {
    n("intersect", e.side, o);
  }), ne(() => p("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [ut("\xA0")])), {};
} }), rA = ee()({ name: "VInfiniteScroll", props: iA(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = K(), o = re("ok"), i = re("ok"), r = _(() => ve(e.margin)), s = re(false);
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
    function k(T) {
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
    a("load", { side: g, done: k });
  }
  const { t: w } = Je();
  function I(g, C) {
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== g && e.side !== "both") return;
    const k = () => h(g), T = { side: g, props: { onClick: k, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, T) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, T)) ?? p("div", null, [w(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, T)) ?? b(Ba, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, T)) ?? b(Ne, { variant: "outlined", color: e.color, onClick: k }, { default: () => [w(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, T)) ?? b(Ba, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = wt(e);
  ne(() => {
    const g = e.tag, C = e.side === "start" || e.side === "both", k = e.side === "end" || e.side === "both", T = e.mode === "intersect";
    return b(g, { ref: l, class: te(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": k }]), style: me(V.value) }, { default: () => {
      var _a3;
      return [p("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && T && b(bv, { key: "start", side: "start", onIntersect: y, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), k && T && b(bv, { key: "end", side: "end", onIntersect: y, rootMargin: r.value }, null), p("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
    } });
  });
  function x(g) {
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
  return { reset: x };
} }), Bb = Symbol.for("vuetify:v-item-group"), sA = H({ ...pe(), ...pl({ selectedClass: "v-item--selected" }), ...De(), ...We() }, "VItemGroup"), uA = ee()({ name: "VItemGroup", props: sA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Bb);
  return () => b(e.tag, { class: te(["v-item-group", a.value, e.class]), style: me(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), cA = ee()({ name: "VItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, Bb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), dA = H({ ...pe(), ...kt(), ...Wh() }, "VLayout"), fA = ee()({ name: "VLayout", props: dA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = Uh(e), { dimensionStyles: s } = wt(e);
  return ne(() => {
    var _a3;
    return p("div", { ref: r, class: te([a.value, e.class]), style: me([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), vA = H({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...pe(), ...gl() }, "VLayoutItem"), mA = ee()({ name: "VLayoutItem", props: vA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return p("div", { class: te(["v-layout-item", e.class]), style: me([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), hA = H({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...pe(), ...kt(), ...De(), ...ga({ transition: "fade-transition" }) }, "VLazy"), gA = ee()({ name: "VLazy", directives: { vIntersect: An }, props: hA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = xe(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return ne(() => nt(b(e.tag, { class: te(["v-lazy", e.class]), style: me([a.value, e.style]) }, { default: () => [l.value && b(Gt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[An, { handler: o, options: e.options }, null]])), {};
} }), yA = H({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...pe() }, "VLocaleProvider"), bA = ee()({ name: "VLocaleProvider", props: yA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Mh(e);
  return ne(() => {
    var _a3;
    return p("div", { class: te(["v-locale-provider", a.value, e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), pA = H({ scrollable: Boolean, ...pe(), ...kt(), ...De({ tag: "main" }) }, "VMain"), SA = ee()({ name: "VMain", props: pA(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), { mainStyles: l } = jh(), { ssrBootStyles: o } = bl();
  return ne(() => b(e.tag, { class: te(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: me([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? p("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function kA(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = re(false), o = re(0), i = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: ve(o.value) } : { top: a.value.top }];
  });
  Ct(() => {
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
const wA = 100, xA = 20;
function pv(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Sv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = pv(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return pv(t) * 1e3;
}
function CA() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new hh(xA))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > wA) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Sv(r), y: Sv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : _A();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function _A() {
  throw new Error();
}
function VA(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  Ct(() => {
    window.addEventListener("touchstart", w, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Nt(() => {
    window.removeEventListener("touchstart", w), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = CA();
  let d = false;
  const f = re(false), v = re(0), S = re(0);
  let m;
  function y(g, C) {
    return (i.value === "left" ? g : i.value === "right" ? document.documentElement.clientWidth - g : i.value === "top" ? g : i.value === "bottom" ? document.documentElement.clientHeight - g : Pl()) - (C ? l.value : 0);
  }
  function h(g) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const k = i.value === "left" ? (g - S.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - g - S.value) / l.value : i.value === "top" ? (g - S.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - g - S.value) / l.value : Pl();
    return C ? Xe(k) : k;
  }
  function w(g) {
    if (o.value) return;
    const C = g.changedTouches[0].clientX, k = g.changedTouches[0].clientY, T = 25, P = i.value === "left" ? C < T : i.value === "right" ? C > document.documentElement.clientWidth - T : i.value === "top" ? k < T : i.value === "bottom" ? k > document.documentElement.clientHeight - T : Pl(), E = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? k < l.value : i.value === "bottom" ? k > document.documentElement.clientHeight - l.value : Pl());
    (P || E || n.value && a.value) && (m = [C, k], S.value = y(r.value ? C : k, n.value), v.value = h(r.value ? C : k), d = S.value > -20 && S.value < 80, u(g), s(g));
  }
  function I(g) {
    const C = g.changedTouches[0].clientX, k = g.changedTouches[0].clientY;
    if (d) {
      if (!g.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), E = Math.abs(k - m[1]);
      (r.value ? P > E && P > 3 : E > P && E > 3) ? (f.value = true, d = false) : (r.value ? E : P) > 3 && (d = false);
    }
    if (!f.value) return;
    g.preventDefault(), s(g);
    const T = h(r.value ? C : k, false);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? S.value = y(r.value ? C : k, true) : T < 0 && (S.value = y(r.value ? C : k, false));
  }
  function V(g) {
    if (d = false, !f.value) return;
    s(g), f.value = false;
    const C = c(g.changedTouches[0].identifier), k = Math.abs(C.x), T = Math.abs(C.y);
    (r.value ? k > T && k > 400 : T > k && T > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Pl()) : n.value = v.value > 0.5;
  }
  const x = _(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Pl(), transition: "none" } : void 0);
  return $t(f, () => {
    var _a3, _b2;
    const g = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    ct(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = x.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = x.value) == null ? void 0 : _c2.transition) || null);
    }), bt(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", g), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: x };
}
function Pl() {
  throw new Error();
}
const IA = ["start", "end", "left", "right", "top", "bottom"], PA = H({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => IA.includes(e) }, sticky: Boolean, ...Ht(), ...pe(), ...Tc(), ...hl({ mobile: null }), ...xt(), ...gl(), ...ot(), ...Fe(jg(), ["disableInitialFocus"]), ...De({ tag: "nav" }), ...We() }, "VNavigationDrawer"), TA = ee()({ name: "VNavigationDrawer", props: PA(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = _t(), { themeClasses: i } = Ke(e), { borderClasses: r } = qt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = qe(() => e.color), { elevationClasses: c } = It(e), { displayClasses: d, mobile: f } = nn(e), { roundedClasses: v } = dt(e), S = ng(), m = xe(e, "modelValue", null, (F) => !!F), { ssrBootStyles: y } = bl(), { scopeId: h } = kl(), w = K(), I = re(false), { runOpenDelay: V, runCloseDelay: x } = Ac(e, (F) => {
    I.value = F;
  }), g = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => Ns(e.location, o.value)), k = B(() => e.persistent), T = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !T.value && C.value !== "bottom");
  Ug(e, { isActive: m, localTop: T, contentEl: w }), $t(() => e.expandOnHover && e.rail != null, () => {
    ce(I, (F) => a("update:rail", !F));
  }), $t(() => !e.disableResizeWatcher, () => {
    ce(T, (F) => !e.permanent && Te(() => m.value = !F));
  }), $t(() => !e.disableRouteWatcher && !!S, () => {
    ce(S.currentRoute, () => T.value && (m.value = false));
  }), ce(() => e.permanent, (F) => {
    F && (m.value = true);
  }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: D } = VA({ el: w, isActive: m, isTemporary: T, width: g, touchless: B(() => e.touchless), position: C }), M = _(() => {
    const F = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
    return E.value ? F * D.value : F;
  }), { layoutItemStyles: A, layoutItemScrimStyles: L } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: g, active: al(m), disableTransitions: B(() => E.value), absolute: _(() => e.absolute || P.value && typeof z.value != "string") }), { isStuck: z, stickyStyles: N } = kA({ rootEl: w, isSticky: P, layoutItemStyles: A }), Z = qe(() => typeof e.scrim == "string" ? e.scrim : null), J = _(() => ({ ...E.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...L.value }));
  return mt({ VList: { bgColor: "transparent" } }), ne(() => {
    const F = l.image || e.image;
    return p(ge, null, [b(e.tag, Y({ ref: w, onMouseenter: V, onMouseleave: x, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--persistent": k.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, A.value, y.value, N.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [F && p("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? b(Me, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : b(da, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && p("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), p("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && p("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), b(Da, { name: "fade-transition" }, { default: () => [T.value && (E.value || m.value) && !!e.scrim && p("div", Y({ class: ["v-navigation-drawer__scrim", Z.backgroundColorClasses.value], style: [J.value, Z.backgroundColorStyles.value], onClick: () => {
      k.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: z };
} }), AA = Kt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = Yg();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), DA = 50, EA = 500;
function MA(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  bt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), DA);
    }, EA);
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
const BA = H({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Fe(hi(), ["modelValue", "validationValue"]) }, "VNumberInput"), $A = ee()({ name: "VNumberInput", props: { ...BA() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), { holdStart: l, holdStop: o } = MA({ toggleUpDown: E }), i = ao(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = re(e.focused), { decimalSeparator: u } = Je(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(R) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const ae = j == null ? String(R) : R.toFixed(j);
    if (s.value && ie) return Number(ae).toString().replace(".", c.value);
    if (e.minFractionDigits === null || j !== null && j < e.minFractionDigits) return ae.replace(".", c.value);
    let [Q, de] = ae.split(".");
    return de = (de ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [Q, de].filter(Boolean).join(c.value);
  }
  const f = xe(e, "modelValue", null, (R) => R ?? null, (R) => R == null ? R ?? null : Xe(Number(R), e.min, e.max)), v = re(null), S = re(null);
  ce(f, (R) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === R || (R == null ? (v.value = null, S.value = null) : isNaN(R) || (v.value = d(R), S.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set(R) {
    if (R === null || R === "") {
      f.value = null, v.value = null, S.value = null;
      return;
    }
    const j = Number(R.replace(c.value, "."));
    isNaN(j) || (v.value = R, S.value = j, j <= e.max && j >= e.min && (f.value = j));
  } }), y = _(() => {
    var _a3;
    if (S.value === null) return false;
    const R = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return R !== Xe(R, e.min, e.max);
  }), h = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), w = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = B(() => I.value === "split" ? "$plus" : "$collapse"), x = B(() => I.value === "split" ? "$minus" : "$expand"), g = B(() => I.value === "split" ? "default" : "small"), C = B(() => I.value === "stacked" ? "auto" : "100%"), k = { props: { onClick: A, onPointerup: L, onPointerdown: z, onPointercancel: L } }, T = { props: { onClick: A, onPointerup: L, onPointerdown: N, onPointercancel: L } };
  ce(() => e.precision, () => J()), ce(() => e.minFractionDigits, () => J()), Ct(() => {
    Z();
  });
  function P(R) {
    if (R == null) return 0;
    const j = R.toString(), ie = j.indexOf(".");
    return ~ie ? j.length - ie : 0;
  }
  function E() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(Xe(0, e.min, e.max));
      return;
    }
    let j = Math.max(P(f.value), P(e.step));
    e.precision != null && (j = Math.max(j, e.precision)), R ? h.value && (m.value = d(f.value + e.step, j)) : w.value && (m.value = d(f.value - e.step, j));
  }
  function D(R) {
    var _a3;
    if (!R.data) return;
    const j = R.target, { value: ie, selectionStart: ae, selectionEnd: Q } = j ?? {}, de = ie ? ie.slice(0, ae) + R.data + ie.slice(Q) : R.data, Ve = Pw(de, e.precision, c.value);
    if (new RegExp(`^-?\\d*${Ui(c.value)}?\\d*$`).test(de) || (R.preventDefault(), j.value = Ve, Te(() => m.value = Ve)), e.precision != null) {
      if (((_a3 = de.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        R.preventDefault(), j.value = Ve, Te(() => m.value = Ve);
        const ke = (ae ?? 0) + R.data.length;
        j.setSelectionRange(ke, ke);
      }
      e.precision === 0 && de.endsWith(c.value) && (R.preventDefault(), j.value = Ve, Te(() => m.value = Ve));
    }
  }
  async function M(R) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(R.key) || R.ctrlKey || ["ArrowDown", "ArrowUp"].includes(R.key) && (R.preventDefault(), R.stopPropagation(), Z(), await Te(), R.key === "ArrowDown" ? E(false) : E());
  }
  function A(R) {
    R.stopPropagation();
  }
  function L(R) {
    var _a3;
    (_a3 = R.currentTarget) == null ? void 0 : _a3.releasePointerCapture(R.pointerId), R.preventDefault(), o();
  }
  function z(R) {
    var _a3;
    (_a3 = R.currentTarget) == null ? void 0 : _a3.setPointerCapture(R.pointerId), R.preventDefault(), R.stopPropagation(), l("up");
  }
  function N(R) {
    var _a3;
    (_a3 = R.currentTarget) == null ? void 0 : _a3.setPointerCapture(R.pointerId), R.preventDefault(), R.stopPropagation(), l("down");
  }
  function Z() {
    if (r.value || !a.value) return;
    const R = a.value.value, j = Number(R.replace(c.value, "."));
    R && !isNaN(j) ? m.value = d(Xe(j, e.min, e.max)) : m.value = null;
  }
  function J() {
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
  function G() {
    F();
  }
  function W() {
    Z();
  }
  return ne(() => {
    const { modelValue: R, type: j, ...ie } = Yn.filterProps(e);
    function ae() {
      return n.increment ? b(Me, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: g.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(k)] }) : b(Ne, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: V.value, key: "increment-btn", onClick: A, onPointerdown: z, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function Q() {
      return n.decrement ? b(Me, { key: "decrement-defaults", defaults: { VBtn: { disabled: !w.value, height: C.value, size: g.value, icon: x.value, variant: "text" } } }, { default: () => [n.decrement(T)] }) : b(Ne, { "aria-hidden": "true", "data-testid": "decrement", disabled: !w.value, height: C.value, icon: x.value, key: "decrement-btn", onClick: A, onPointerdown: N, onPointerup: L, onPointercancel: L, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function de() {
      return p("div", { class: "v-number-input__control" }, [Q(), b(dn, { vertical: I.value !== "stacked" }, null), ae()]);
    }
    function Ve() {
      return !e.hideInput && !e.inset ? b(dn, { vertical: true }, null) : void 0;
    }
    const ke = I.value === "split" ? p("div", { class: "v-number-input__control" }, [b(dn, { vertical: true }, null), ae()]) : e.reverse || I.value === "hidden" ? void 0 : p(ge, null, [Ve(), de()]), ye = n["append-inner"] || ke, $ = I.value === "split" ? p("div", { class: "v-number-input__control" }, [Q(), b(dn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? p(ge, null, [de(), Ve()]) : void 0, O = n["prepend-inner"] || $;
    return b(Yn, Y({ ref: a }, ie, { modelValue: m.value, "onUpdate:modelValue": (X) => m.value = X, focused: s.value, "onUpdate:focused": (X) => s.value = X, validationValue: f.value, error: e.error || y.value || void 0, onBeforeinput: D, onFocus: G, onBlur: W, onKeydown: M, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ye ? function() {
      var _a3;
      for (var X = arguments.length, se = new Array(X), le = 0; le < X; le++) se[le] = arguments[le];
      return p(ge, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...se), ke]);
    } : void 0, "prepend-inner": O ? function() {
      var _a3;
      for (var X = arguments.length, se = new Array(X), le = 0; le < X; le++) se[le] = arguments[le];
      return p(ge, null, [$, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...se)]);
    } : void 0 });
  }), Pt({}, a);
} }), LA = H({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...ht(), ...kt(), ...fi(), ...Jt(mi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), FA = ee()({ name: "VOtpInput", props: LA(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Ft(e), { dimensionStyles: i } = wt(e), { isFocused: r, focus: s, blur: u } = pa(e), c = xe(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Je(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), S = K(-1), m = K(), y = K([]), h = _(() => y.value[S.value]);
  let w = false;
  $t(() => e.autofocus, () => {
    const E = Nl();
    E.run(() => {
      const { intersectionRef: D, isIntersecting: M } = ii();
      ct(() => {
        D.value = y.value[0];
      }), ce(M, (A) => {
        var _a3;
        A && ((_a3 = D.value) == null ? void 0 : _a3.focus(), E.stop());
      });
    });
  });
  function I() {
    if (P(h.value.value)) {
      h.value.value = "";
      return;
    }
    if (w) return;
    const E = c.value.slice(), D = h.value.value;
    E[S.value] = D;
    let M = null;
    S.value > c.value.length ? M = c.value.length + 1 : S.value + 1 !== f.value && (M = "next"), c.value = E, M && Qa(m.value, M);
  }
  function V() {
    w = false, I();
  }
  function x(E) {
    const D = c.value.slice(), M = S.value;
    let A = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? A = "prev" : E.key === "ArrowRight" ? A = "next" : ["Backspace", "Delete"].includes(E.key) && (D[S.value] = "", c.value = D, S.value > 0 && E.key === "Backspace" ? A = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = y.value[M]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      A != null && Qa(m.value, A);
    }));
  }
  function g(E, D) {
    var _a3;
    D.preventDefault(), D.stopPropagation();
    const M = ((_a3 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", A = M.length - 1 === -1 ? E : M.length - 1;
    P(M) || (c.value = M.split(""), S.value = A);
  }
  function C() {
    c.value = [];
  }
  function k(E, D) {
    s(), S.value = D;
  }
  function T() {
    u(), S.value = -1;
  }
  function P(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return mt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), ce(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), ce(S, (E) => {
    E < 0 || Te(() => {
      var _a3;
      (_a3 = y.value[E]) == null ? void 0 : _a3.select();
    });
  }), ne(() => {
    var _a3;
    const [E, D] = qn(n);
    return p("div", Y({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [p("div", { ref: m, class: "v-otp-input__content", style: me([i.value]) }, [v.value.map((M, A) => p(ge, null, [e.divider && A !== 0 && p("span", { class: "v-otp-input__divider" }, [e.divider]), b(Fa, { focused: r.value && e.focusAll || S.value === A, key: A }, { ...l, loader: void 0, default: () => p("input", { ref: (L) => y.value[A] = L, "aria-label": d(e.label, A + 1), autofocus: A === 0 && e.autofocus, autocomplete: "one-time-code", class: te(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: A === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[A], onInput: I, onFocus: (L) => k(L, A), onBlur: T, onKeydown: x, onCompositionstart: () => w = true, onCompositionend: V, onPaste: (L) => g(A, L) }, null) })])), p("input", Y({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), b(Un, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
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
function OA(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const RA = H({ scale: { type: [Number, String], default: 0.5 }, ...pe() }, "VParallax"), NA = ee()({ name: "VParallax", props: RA(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii(), { resizeRef: o, contentRect: i } = Sn(), { height: r } = nn(), s = K();
  ct(() => {
    var _a3;
    a.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  ce(l, (v) => {
    v ? (u = gr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Nt(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), ce(r, f), ce(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = _(() => 1 - Xe(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || Wn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const S = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + m, h = i.value.height, w = y + (h - S) / 2, I = OA((m - w) * c.value), V = Math.max(1, (c.value * (S - h) + h) / h);
      v.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return ne(() => b(da, { class: te(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: me(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), HA = H({ ..._r({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), zA = ee()({ name: "VRadio", props: HA(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = $a.filterProps(e);
    return b($a, Y(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), WA = H({ height: { type: [Number, String], default: "auto" }, ...Fe(Sa(), ["direction"]), ...Fe(Sc(), ["multiple"]), trueIcon: { type: Ce, default: "$radioOn" }, falseIcon: { type: Ce, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), jA = ee()({ name: "VRadioGroup", inheritAttrs: false, props: WA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Mt(), o = _(() => e.id || `radio-group-${l}`), i = xe(e, "modelValue"), r = K();
  return ne(() => {
    const [s, u] = qn(n), c = Rt.filterProps(e), d = $a.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return b(Rt, Y({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: S, messagesId: m, isDisabled: y, isReadonly: h } = v;
      return p(ge, null, [f && b(no, { id: S.value }, { default: () => [f] }), b(mg, Y(d, { id: S.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: y.value, readonly: h.value, "aria-labelledby": f ? S.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (w) => i.value = w }), a)]);
    } });
  }), Pt({}, r);
} }), UA = H({ ...fi(), ...Sa(), ...$y(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), YA = ee()({ name: "VRangeSlider", inheritAttrs: false, props: UA(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), r = K(), { rtlClasses: s } = _t();
  function u(D) {
    if (!o.value || !i.value) return;
    const M = du(D, o.value.$el, e.direction), A = du(D, i.value.$el, e.direction), L = Math.abs(M), z = Math.abs(A);
    return L < z || L === z && M < 0 ? o.value.$el : i.value.$el;
  }
  const c = Ly(e), d = xe(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((M) => c.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: S, min: m, mousePressed: y, onSliderMousedown: h, onSliderTouchstart: w, position: I, trackContainerRef: V, disabled: x, readonly: g } = Fy({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (x.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (D) => {
    var _a3, _b2;
    let { value: M } = D;
    if (x.value || g.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const A = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [M, d.value[1]] : [d.value[0], M];
      !e.strict && A[0] < A[1] && (d.value = A);
    }
    a("end", d.value);
  }, onSliderMove: (D) => {
    var _a3, _b2, _c2, _d2, _e;
    let { value: M } = D;
    const [A, L] = d.value;
    if (x.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && A === L && A !== m.value && (f.value = M > A ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(M, L), L] : d.value = [A, Math.max(A, M)];
  }, getActiveThumb: u }), { isFocused: C, focus: k, blur: T } = pa(e), P = _(() => I(d.value[0])), E = _(() => I(d.value[1]));
  return ne(() => {
    const D = Rt.filterProps(e), [M, A] = qn(l), L = !!(e.label || n.label || n.prepend);
    return b(Rt, Y({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": y.value, "v-slider--disabled": x.value }, s.value, e.class], style: e.style, ref: r }, D, M, { focused: C.value }), { ...n, prepend: L ? (z) => {
      var _a3, _b2;
      return p(ge, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, z)) ?? (e.label ? b(no, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, z)]);
    } : void 0, default: (z) => {
      var _a3, _b2;
      let { id: N, messagesId: Z } = z;
      return p("div", { class: "v-slider__container", onMousedown: g.value ? void 0 : h, onTouchstartPassive: g.value ? void 0 : w }, [p("input", { id: `${N.value}_start`, name: e.name || N.value, disabled: x.value, readonly: g.value, tabindex: "-1", value: d.value[0] }, null), p("input", { id: `${N.value}_stop`, name: e.name || N.value, disabled: x.value, readonly: g.value, tabindex: "-1", value: d.value[1] }, null), b(Oy, { ref: V, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), b(fu, Y({ ref: o, "aria-describedby": Z.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (J) => d.value = [J, d.value[1]], onFocus: (J) => {
        var _a4, _b3, _c2, _d2;
        k(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && J.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] }), b(fu, Y({ ref: i, "aria-describedby": Z.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (J) => d.value = [d.value[0], J], onFocus: (J) => {
        var _a4, _b3, _c2, _d2;
        k(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[0] === S.value && J.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: d.value[0], max: S.value, position: E.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), GA = H({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ce, default: "$ratingEmpty" }, fullIcon: { type: Ce, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...pe(), ...ht(), ...Jn(), ...De(), ...We() }, "VRating"), KA = ee()({ name: "VRating", props: GA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), { themeClasses: l } = Ke(e), o = K(), i = xe(e, "modelValue"), r = _(() => Xe(parseFloat(i.value), 0, Number(e.length))), s = _(() => Rn(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = re(-1), d = _(() => u.value.map((V) => {
    const x = e.hover && c.value > -1, g = r.value >= V, C = c.value >= V, T = (x ? C : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, E = g || C ? P : e.color;
    return { isFilled: g, isHovered: C, icon: T, color: E };
  })), f = _(() => [0, ...u.value].map((V) => {
    function x() {
      c.value = V;
    }
    function g() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === V && e.clearable ? 0 : V);
    }
    return { onMouseenter: e.hover ? x : void 0, onMouseleave: e.hover ? g : void 0, onClick: C };
  })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function S() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(V) {
    if (e.disabled || e.readonly || V.ctrlKey || V.altKey) return;
    const x = e.halfIncrements ? 0.5 : 1;
    if (V.key === "ArrowRight") {
      const g = Math.min(Number(e.length), Number(i.value ?? 0) + x);
      i.value = g, Te(() => S());
    }
    if (V.key === "ArrowLeft") {
      const g = Math.max(0, Number(i.value ?? 0) - x);
      i.value = g, Te(() => S());
    }
  }
  const y = Mt(), h = _(() => e.name ?? `v-rating-${y}`);
  function w(V) {
    var _a3, _b2;
    let { value: x, index: g, showStar: C = true } = V;
    const { onMouseenter: k, onMouseleave: T, onClick: P } = f.value[g + 1], E = `${h.value}-${String(x).replace(".", "-")}`, D = g === v.value, M = { color: (_a3 = d.value[g]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[g]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return p(ge, null, [p("label", { for: E, class: te({ "v-rating__item--half": e.halfIncrements && x % 1 > 0, "v-rating__item--full": e.halfIncrements && x % 1 === 0 }), onMouseenter: k, onMouseleave: T, onClick: P }, [p("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, x, e.length)]), C ? n.item ? n.item({ ...d.value[g], props: M, value: x, index: g, rating: r.value }) : b(Ne, Y({ "aria-label": a(e.itemAriaLabel, x, e.length) }, M), null) : void 0]), p("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: x, checked: r.value === x, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? p("span", null, [V.label]) : p("span", null, [ut("\xA0")]);
  }
  return ne(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return b(e.tag, { class: te(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: me(e.style), ref: o }, { default: () => [b(w, { value: 0, index: -1, showStar: false }, null), s.value.map((x, g) => {
      var _a4, _b2;
      return p("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: x, index: g, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[g] }) : void 0, p("div", { class: "v-rating__item" }, [e.halfIncrements ? p(ge, null, [b(w, { value: x - 0.5, index: g * 2 }, null), b(w, { value: x, index: g * 2 + 1 }, null)]) : b(w, { value: x, index: g }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: x, index: g, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[g] }) : void 0]);
    })] });
  }), {};
} }), qA = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function XA(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return p("div", { class: te(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function kv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Wr(t));
}
function Wr(e) {
  let t = [];
  if (!e) return t;
  const n = qA[e];
  if (e !== n) {
    if (e.includes(",")) return wv(e);
    if (e.includes("@")) return kv(e);
    n.includes(",") ? t = wv(n) : n.includes("@") ? t = kv(n) : n && t.push(Wr(n));
  }
  return [XA(e, t)];
}
function wv(e) {
  return e.replace(/\s/g, "").split(",").map(Wr);
}
const ZA = H({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...kt(), ...xt(), ...We() }, "VSkeletonLoader"), JA = ee()({ name: "VSkeletonLoader", inheritAttrs: false, props: ZA(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { dimensionStyles: i } = wt(e), { elevationClasses: r } = It(e), { themeClasses: s } = Ke(e), { t: u } = Je(), c = _(() => Wr(lt(e.type).join(",")));
  return ne(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? p("div", Y({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : p(ge, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), QA = ee()({ name: "VSlideGroupItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, kc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function eD(e) {
  const t = re(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Te(() => t.value = e());
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
const $b = H({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...Zn({ location: "bottom" }), ...eo(), ...ot(), ...gn(), ...We(), ...Fe(vi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), _u = ee()({ name: "VSnackbar", props: $b(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), { positionClasses: l } = to(e), { scopeId: o } = kl(), { themeClasses: i } = Ke(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(e), { roundedClasses: c } = dt(e), d = eD(() => Number(e.timeout)), f = K(), v = K(), S = re(false), m = re(0), y = K(), h = He(No, void 0);
  $t(() => !!h, () => {
    const E = jh();
    ct(() => {
      y.value = E.mainStyles.value;
    });
  }), ce(a, I), ce(() => e.timeout, I), Ct(() => {
    a.value && I();
  });
  let w = -1;
  function I() {
    d.reset(), window.clearTimeout(w);
    const E = Number(e.timeout);
    if (!a.value || E === -1) return;
    const D = Qu(v.value);
    d.start(D), w = window.setTimeout(() => {
      a.value = false;
    }, E);
  }
  function V() {
    d.reset(), window.clearTimeout(w);
  }
  function x() {
    S.value = true, V();
  }
  function g() {
    S.value = false, I();
  }
  function C(E) {
    m.value = E.touches[0].clientY;
  }
  function k(E) {
    Math.abs(m.value - E.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function T() {
    S.value && g();
  }
  const P = _(() => e.location.split(" ").reduce((E, D) => (E[`v-snackbar--${D}`] = true, E), {}));
  return ne(() => {
    const E = Un.filterProps(e), D = !!(n.default || n.text || e.text);
    return b(Un, Y({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [y.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: Y({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: x, onPointerleave: g }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: k, onAfterLeave: T }, o), { default: () => {
      var _a3, _b2;
      return [ya(false, "v-snackbar"), e.timer && !S.value && p("div", { key: "timer", class: "v-snackbar__timer" }, [b(wr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && p("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && b(Me, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [p("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Pt({}, f);
} }), tD = H({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Fe($b(), ["modelValue"]) }, "VSnackbarQueue"), nD = ee()({ name: "VSnackbarQueue", props: tD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), o = re(false), i = re(false), r = re();
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
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Te(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  ne(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...S } = _u.filterProps(e);
    return p(ge, null, [i.value && !!r.value && (a.default ? b(Me, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : b(_u, Y(S, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => p(ge, null, [a.actions ? b(Me, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : b(Ne, Y(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), Lb = H({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Fb = H({ autoLineWidth: Boolean, ...Lb() }, "VBarline"), xv = ee()({ name: "VBarline", props: Fb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `barline-${a}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y)));
  function d(y, h) {
    const { minX: w, maxX: I, minY: V, maxY: x } = h, g = y.length;
    let C = e.max != null ? Number(e.max) : Math.max(...y), k = e.min != null ? Number(e.min) : Math.min(...y);
    k > 0 && e.min == null && (k = 0), C < 0 && e.max == null && (C = 0);
    const T = I / (g === 1 ? 2 : g), P = (x - V) / (C - k || 1), E = x - Math.abs(k * P);
    return y.map((D, M) => {
      const A = Math.abs(P * D);
      return { x: w + M * T, y: E - A + +(D < 0) * A, height: A, value: D };
    });
  }
  const f = _(() => {
    const y = [], h = d(c.value, u.value), w = h.length;
    for (let I = 0; y.length < w; I++) {
      const V = h[I];
      let x = e.labels[I];
      x || (x = typeof V == "object" ? V.value : V), y.push({ x: V.x, value: String(x) });
    }
    return y;
  }), v = _(() => d(c.value, u.value)), S = _(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  ne(() => {
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block" }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, w) => p("stop", { offset: w / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), p("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => p("rect", { x: h.x + S.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !Wn() && p(ge, null, [p("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), p("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, w) => {
      var _a3;
      return p("text", { x: h.x + S.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: w, value: h.value })) ?? h.value]);
    })]), p("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [p("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function aD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && lD(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(Cv(u, i), Cv(s, i)), v = d / 2 < t ? d / 2 : t, S = _v(u, i, v), m = _v(s, i, v);
    return `L${S.x} ${S.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Vi(e) {
  return parseInt(e, 10);
}
function lD(e, t, n) {
  return Vi(e.x + n.x) === Vi(2 * t.x) && Vi(e.y + n.y) === Vi(2 * t.y);
}
function Cv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function _v(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const Ob = H({ fill: Boolean, ...Lb() }, "VTrendline"), Vv = ee()({ name: "VTrendline", props: Ob(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `trendline-${a}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = K(0), r = K(null);
  function s(y, h) {
    const { minX: w, maxX: I, minY: V, maxY: x } = h;
    y.length === 1 && (y = [y[0], y[0]]);
    const g = y.length, C = e.max != null ? Number(e.max) : Math.max(...y), k = e.min != null ? Number(e.min) : Math.min(...y), T = (I - w) / (g - 1), P = (x - V) / (C - k || 1);
    return y.map((E, D) => ({ x: w + D * T, y: x - (E - k) * P, value: E }));
  }
  const u = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const y = Number(e.padding);
    return { minX: y, maxX: d.value - y, minY: y, maxY: parseInt(e.height, 10) - y };
  }), v = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y))), S = _(() => {
    const y = [], h = s(v.value, f.value), w = h.length;
    for (let I = 0; y.length < w; I++) {
      const V = h[I];
      let x = e.labels[I];
      x || (x = typeof V == "object" ? V.value : V), y.push({ x: V.x, value: String(x) });
    }
    return y;
  });
  ce(() => e.modelValue, async () => {
    if (await Te(), !e.autoDraw || !r.value || Wn()) return;
    const y = r.value, h = y.getTotalLength();
    e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${h}`, y.style.strokeDashoffset = `${h}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function m(y) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return aD(s(v.value, f.value), h, y, parseInt(e.height, 10));
  }
  ne(() => {
    var _a3;
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, w) => p("stop", { offset: w / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [S.value.map((h, w) => {
      var _a4;
      return p("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: w, value: h.value })) ?? h.value]);
    })]), p("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && p("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), oD = H({ type: { type: String, default: "trend" }, ...Fb(), ...Ob() }, "VSparkline"), iD = ee()({ name: "VSparkline", props: oD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  ne(() => {
    const r = e.type === "trend" ? Vv : xv, s = e.type === "trend" ? Vv.filterProps(e) : xv.filterProps(e);
    return b(r, Y({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), rD = H({ ...pe(), ...qg({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), sD = ee()({ name: "VSpeedDial", props: rD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), l = K(), o = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return ne(() => {
    const r = ql.filterProps(e);
    return b(ql, Y(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => b(Me, { defaults: { VBtn: { size: "small" } } }, { default: () => [b(Gt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), rd = Symbol.for("vuetify:v-stepper"), Rb = H({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), Nb = ee()({ name: "VStepperActions", props: Rb(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Je();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return ne(() => {
    const r = { onClick: o }, s = { onClick: i };
    return p("div", { class: "v-stepper-actions" }, [b(Me, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.prev) == null ? void 0 : _a3.call(a, { props: r })) ?? b(Ne, r, null)];
    } }), b(Me, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = a.next) == null ? void 0 : _a3.call(a, { props: s })) ?? b(Ne, s, null)];
    } })]);
  }), {};
} }), Hb = ha("v-stepper-header"), uD = H({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ce, default: "$complete" }, editable: Boolean, editIcon: { type: Ce, default: "$edit" }, error: Boolean, errorIcon: { type: Ce, default: "$error" }, icon: Ce, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), cD = H({ ...uD(), ...Sl() }, "VStepperItem"), zb = ee()({ name: "VStepperItem", directives: { vRipple: Lt }, props: cD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, rd, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return ne(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), S = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return nt(p("button", { class: te(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && ya(true, "v-stepper-item"), b(vn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? b(Ge, { icon: c.value }, null) : l.value)];
    } }), p("div", { class: "v-stepper-item__content" }, [v && p("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), S && p("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Lt, e.editable && e.ripple, null]]);
  }), {};
} }), dD = H({ ...Fe(Dr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), Wb = ee()({ name: "VStepperWindow", props: dD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(rd, null), l = xe(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ne(() => {
    const i = sl.filterProps(e);
    return b(sl, Y({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), fD = H({ ...Er() }, "VStepperWindowItem"), jb = ee()({ name: "VStepperWindowItem", props: fD(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = ul.filterProps(e);
    return b(ul, Y({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), vD = H({ altLabels: Boolean, bgColor: String, completeIcon: Ce, editIcon: Ce, editable: Boolean, errorIcon: Ce, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...hl() }, "Stepper"), mD = H({ ...vD(), ...pl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Mc(), ...Jt(Rb(), ["prevText", "nextText"]) }, "VStepper"), hD = ee()({ name: "VStepper", props: mD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Na(e, rd), { displayClasses: r, mobile: s } = nn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: S, nextText: m } = Zl(e), y = _(() => e.items.map((I, V) => {
    const x = pt(I, e.itemTitle, I), g = pt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : pt(I, e.itemProps), k = { title: x, value: g, ...C };
    return { title: k.title, value: k.value, props: k, raw: I };
  })), h = _(() => a.value.findIndex((I) => i.value.includes(I.id))), w = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return mt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: S, nextText: m }, VStepperActions: { color: f, disabled: w, prevText: S, nextText: m } }), ne(() => {
    const I = La.filterProps(e), V = !!(n.header || e.items.length), x = e.items.length > 0, g = !e.hideActions && !!(x || n.actions);
    return b(La, Y(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && b(Hb, { key: "stepper-header" }, { default: () => [y.value.map((C, k) => {
        let { raw: T, ...P } = C;
        return p(ge, null, [!!k && b(dn, null, null), b(zb, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), x && b(Wb, { key: "stepper-window" }, { default: () => [y.value.map((C) => b(jb, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), g && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? b(Nb, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), gD = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Sa(), ..._r() }, "VSwitch"), yD = ee()({ name: "VSwitch", inheritAttrs: false, props: gD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = xe(e, "indeterminate"), o = xe(e, "modelValue"), { loaderClasses: i } = ri(e), { isFocused: r, focus: s, blur: u } = pa(e), c = K(), d = K(), f = Ju && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), S = Mt(), m = B(() => e.id || `switch-${S}`);
  function y() {
    l.value && (l.value = false);
  }
  function h(w) {
    var _a3, _b2;
    w.stopPropagation(), w.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return ne(() => {
    const [w, I] = qn(n), V = Rt.filterProps(e), x = $a.filterProps(e);
    return b(Rt, Y({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, w, V, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: m.value, focused: r.value, style: e.style }), { ...a, default: (g) => {
      let { id: C, messagesId: k, isDisabled: T, isReadonly: P, isValid: E } = g;
      const D = { model: o, isValid: E };
      return b($a, Y({ ref: c }, x, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, y], id: C.value, "aria-describedby": k.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: T.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (M) => {
        let { backgroundColorClasses: A, backgroundColorStyles: L } = M;
        return p("div", { class: te(["v-switch__track", f ? void 0 : A.value]), style: me(L.value), onClick: h }, [a["track-true"] && p("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && p("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (M) => {
        let { inputNode: A, icon: L, backgroundColorClasses: z, backgroundColorStyles: N } = M;
        return p(ge, null, [A, p("div", { class: te(["v-switch__thumb", { "v-switch__thumb--filled": L || e.loading }, e.inset || f ? void 0 : z.value]), style: me(e.inset ? void 0 : N.value) }, [a.thumb ? b(Me, { defaults: { VIcon: { icon: L, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: L })] }) : b(hc, null, { default: () => [e.loading ? b(si, { name: "v-switch", active: true, color: E.value === false ? void 0 : v.value }, { default: (Z) => a.loader ? a.loader(Z) : b(Ba, { active: Z.isActive, color: Z.color, indeterminate: true, size: "16", width: "2" }, null) }) : L && b(Ge, { key: String(L), icon: L, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Pt({}, d);
} }), bD = H({ color: String, height: [Number, String], window: Boolean, ...pe(), ...xt(), ...gl(), ...ot(), ...De(), ...We() }, "VSystemBar"), pD = ee()({ name: "VSystemBar", props: bD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), { ssrBootStyles: s } = bl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: re("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: B(() => e.absolute) });
  return ne(() => b(e.tag, { class: te(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: me([o.value, c.value, s.value, e.style]) }, n)), {};
} }), sd = Symbol.for("vuetify:v-tabs"), Ub = H({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Fe(Cr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), Yb = ee()({ name: "VTab", props: Ub(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = Et(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = qe(() => e.sliderColor), s = K(), u = K(), c = _(() => e.direction === "horizontal"), d = _(() => {
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
    const w = h.getBoundingClientRect(), I = y.getBoundingClientRect(), V = c.value ? "x" : "y", x = c.value ? "X" : "Y", g = c.value ? "right" : "bottom", C = c.value ? "width" : "height", k = w[V], T = I[V], P = k > T ? w[g] - I[g] : w[V] - I[V], E = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", M = (Math.abs(P) + (Math.sign(P) < 0 ? w[C] : I[C])) / Math.max(w[C], I[C]) || 0, A = w[C] / I[C] || 0, L = 1.5;
    return { transform: [`translate${x}(${P}px) scale${x}(${A})`, `translate${x}(${P / L}px) scale${x}(${(M - 1) / L + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function m(y) {
    var _a3, _b2;
    let { value: h } = y;
    if (h) {
      const w = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!w || !I) return;
      const V = getComputedStyle(w).backgroundColor, x = { fade: f, grow: v, shift: S }[e.sliderTransition ?? "shift"] ?? S, g = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      aa(I, { backgroundColor: [V, V], ...x(I, w) }, { duration: g, easing: Lo });
    }
  }
  return ne(() => {
    const y = Ne.filterProps(e);
    return b(Ne, Y({ symbol: sd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, y, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return p(ge, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && p("div", { ref: u, class: te(["v-tab__slider", e.inset ? i.value : l.value]), style: me([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Pt({}, s);
} }), SD = H({ ...Fe(Dr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Gb = ee()({ name: "VTabsWindow", props: SD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(sd, null), l = xe(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ne(() => {
    const i = sl.filterProps(e);
    return b(sl, Y({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), kD = H({ ...Er() }, "VTabsWindowItem"), Kb = ee()({ name: "VTabsWindowItem", props: kD(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = ul.filterProps(e);
    return b(ul, Y({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function wD(e) {
  return e ? e.map((t) => il(t) ? t : { text: t, value: t }) : [];
}
const xD = H({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...Jt(Ub(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...wc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...ht(), ...De() }, "VTabs"), CD = ee()({ name: "VTabs", props: xD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = xe(e, "modelValue"), o = _(() => wD(e.items)), { densityClasses: i } = Ft(e), { backgroundColorClasses: r, backgroundColorStyles: s } = qe(() => e.bgColor), { scopeId: u } = kl();
  return mt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), ne(() => {
    const c = Uo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return p(ge, null, [b(Uo, Y(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ve(e.height), "--v-tabs-inset-padding": e.inset ? ve(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ve(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: sd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? b(Yb, Y(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && b(Gb, Y({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? b(Kb, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), _D = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Xg(), ...Fe(Sa(), ["direction"]), ...mi() }, "VTextarea"), VD = ee()({ name: "VTextarea", directives: { vIntersect: An }, inheritAttrs: false, props: _D(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = xe(e, "modelValue"), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = Zg(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = K(), v = K(), S = re(""), m = K(), y = K(0), { platform: h } = nn(), w = Bc(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _a3;
    w.isSuppressing.value && w.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function x(A) {
    V(), a("click:control", A);
  }
  function g(A) {
    a("mousedown:control", A);
  }
  function C(A) {
    A.stopPropagation(), V(), Te(() => {
      o.value = "", ai(e["onClick:clear"], A);
    });
  }
  function k(A) {
    var _a3;
    const L = A.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = L.value;
      return;
    }
    const z = L.value, N = L.selectionStart, Z = L.selectionEnd;
    o.value = z, Te(() => {
      let J = 0;
      z.trimStart().length === L.value.length && (J = z.length - L.value.length), N != null && (L.selectionStart = N - J), Z != null && (L.selectionEnd = Z - J);
    });
  }
  const T = K(), P = K(Number(e.rows)), E = _(() => ["plain", "underlined"].includes(e.variant));
  ct(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Te(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        y.value = 12;
        return;
      }
      const { offsetWidth: A, clientWidth: L } = m.value;
      y.value = Math.max(0, A - L);
    }), e.autoGrow && Te(() => {
      if (!T.value || !v.value) return;
      const A = getComputedStyle(T.value), L = getComputedStyle(v.value.$el), z = parseFloat(A.getPropertyValue("--v-field-padding-top")) + parseFloat(A.getPropertyValue("--v-input-padding-top")) + parseFloat(A.getPropertyValue("--v-field-padding-bottom")), N = T.value.scrollHeight, Z = parseFloat(A.lineHeight), J = Math.max(parseFloat(e.rows) * Z + z, parseFloat(L.getPropertyValue("--v-input-control-height"))), F = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Z + z || 1 / 0, G = Xe(N ?? 0, J, F);
      P.value = Math.floor((G - z) / Z), S.value = ve(G);
    });
  }
  Ct(D), ce(o, D), ce(() => e.rows, D), ce(() => e.maxHeight, D), ce(() => e.maxRows, D), ce(() => e.density, D), ce(P, (A) => {
    a("update:rows", A);
  });
  let M;
  return ce(T, (A) => {
    A ? (M = new ResizeObserver(D), M.observe(T.value)) : M == null ? void 0 : M.disconnect();
  }), Nt(() => {
    M == null ? void 0 : M.disconnect();
  }), ne(() => {
    const A = !!(l.counter || e.counter || e.counterValue), L = !!(A || l.details), [z, N] = qn(n), { modelValue: Z, ...J } = Rt.filterProps(e), F = { ...Fa.filterProps(e), "onClick:clear": C };
    return b(Rt, Y({ ref: f, modelValue: o.value, "onUpdate:modelValue": (G) => o.value = G, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ve(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ve(y.value) }, e.style] }, z, J, { centerAffix: P.value === 1 && !E.value, focused: i.value }), { ...l, default: (G) => {
      let { id: W, isDisabled: R, isDirty: j, isReadonly: ie, isValid: ae, hasDetails: Q } = G;
      return b(Fa, Y({ ref: v, style: { "--v-textarea-control-height": S.value }, onClick: x, onMousedown: g, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, F, { id: W.value, active: I.value || j.value, labelId: `${W.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: j.value || e.dirty, disabled: R.value, focused: i.value, details: Q.value, error: ae.value === false }), { ...l, default: (de) => {
        let { props: { class: Ve, ...ke }, controlRef: ye } = de;
        return p(ge, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), nt(p("textarea", Y({ ref: ($) => m.value = ye.value = $, class: Ve, value: o.value, onInput: k, autofocus: e.autofocus, readonly: ie.value, disabled: R.value, placeholder: e.placeholder, rows: e.rows, name: w.fieldName.value, autocomplete: w.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${W.value}-label` }, ke, N), null), [[An, { handler: u }, null, { once: true }]]), e.autoGrow && nt(p("textarea", { class: te([Ve, "v-textarea__sizer"]), id: `${ke.id}-sizer`, "onUpdate:modelValue": ($) => o.value = $, ref: T, readonly: true, "aria-hidden": "true" }, null), [[wk, o.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: L ? (G) => {
      var _a3;
      return p(ge, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, G), A && p(ge, null, [p("span", null, null), b(Vr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, f, v, m);
} }), ID = H({ withBackground: Boolean, ...pe(), ...We(), ...De() }, "VThemeProvider"), PD = ee()({ name: "VThemeProvider", props: ID(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e);
  return () => {
    var _a3;
    return e.withBackground ? b(e.tag, { class: te(["v-theme-provider", a.value, e.class]), style: me(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), TD = H({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ce, iconColor: String, lineColor: String, ...pe(), ...ot(), ...Jn(), ...xt() }, "VTimelineDivider"), AD = ee()({ name: "VTimelineDivider", props: TD(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Ql(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = qe(() => e.dotColor), { roundedClasses: r } = dt(e, "v-timeline-divider__dot"), { elevationClasses: s } = It(e), { backgroundColorClasses: u, backgroundColorStyles: c } = qe(() => e.lineColor);
  return ne(() => p("div", { class: te(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: me(e.style) }, [p("div", { class: te(["v-timeline-divider__before", u.value]), style: me(c.value) }, null), !e.hideDot && p("div", { key: "dot", class: te(["v-timeline-divider__dot", s.value, r.value, a.value]), style: me(l.value) }, [p("div", { class: te(["v-timeline-divider__inner-dot", i.value, r.value]), style: me(o.value) }, [n.default ? b(Me, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : b(Ge, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), p("div", { class: te(["v-timeline-divider__after", u.value]), style: me(c.value) }, null)])), {};
} }), qb = H({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ce, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...pe(), ...kt(), ...xt(), ...ot(), ...Jn(), ...De() }, "VTimelineItem"), DD = ee()({ name: "VTimelineItem", props: qb(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = re(0), o = K();
  return ce(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), ne(() => {
    var _a3, _b2;
    return p("div", { class: te(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: me([{ "--v-timeline-dot-size": ve(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ve(e.lineInset)})` : ve(0) }, e.style]) }, [p("div", { class: "v-timeline-item__body", style: me(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), b(AD, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && p("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), ED = H({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...Jt(qb({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...pe(), ...ht(), ...De(), ...We() }, "VTimeline"), MD = ee()({ name: "VTimeline", props: ED(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { densityClasses: l } = Ft(e), { rtlClasses: o } = _t();
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
  return ne(() => b(e.tag, { class: te(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: me([{ "--v-timeline-line-thickness": ve(e.lineThickness) }, e.style]) }, n)), {};
} }), BD = H({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), Vu = ee()({ name: "VTimePickerClock", props: BD(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = K(null), l = K(null), o = K(void 0), i = K(false), r = K(null), s = K(null), u = vh((F) => n("change", F), 750), { textColorClasses: c, textColorStyles: d } = Et(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = qe(() => e.color), S = _(() => e.max - e.min + 1), m = _(() => e.double ? S.value / 2 : S.value), y = _(() => 360 / m.value), h = _(() => y.value * Math.PI / 180), w = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const F = [];
    for (let G = e.min; G <= e.max; G = G + e.step) F.push(G);
    return F;
  });
  ce(() => e.modelValue, (F) => {
    o.value = F;
  });
  function x(F) {
    o.value !== F && (o.value = F), n("input", F);
  }
  function g(F) {
    return !e.allowedValues || e.allowedValues(F);
  }
  function C(F) {
    if (!e.scrollable || e.disabled) return;
    F.preventDefault();
    const G = Math.sign(-F.deltaY || 1);
    let W = w.value;
    do
      W = W + G, W = (W - e.min + S.value) % S.value + e.min;
    while (!g(W) && W !== w.value);
    W !== e.displayedValue && x(W), u(W);
  }
  function k(F) {
    return e.double && F - e.min >= m.value;
  }
  function T(F) {
    return k(F) ? I.value : 1;
  }
  function P(F) {
    const G = e.rotate * Math.PI / 180;
    return { x: Math.sin((F - e.min) * h.value + G) * T(F), y: -Math.cos((F - e.min) * h.value + G) * T(F) };
  }
  function E(F, G) {
    const W = (Math.round(F / y.value) + (G ? m.value : 0)) % S.value + e.min;
    return F < 360 - y.value / 2 ? W : G ? e.max - m.value + 1 : e.min;
  }
  function D(F) {
    const { x: G, y: W } = P(F);
    return { left: `${Math.round(50 + G * 50)}%`, top: `${Math.round(50 + W * 50)}%` };
  }
  function M(F, G) {
    const W = G.x - F.x, R = G.y - F.y;
    return Math.sqrt(W * W + R * R);
  }
  function A(F, G) {
    const W = 2 * Math.atan2(G.y - F.y - M(F, G), G.x - F.x);
    return Math.abs(W * 180 / Math.PI);
  }
  function L(F) {
    r.value === null && (r.value = F), s.value = F, x(F);
  }
  function z(F) {
    var _a3, _b2;
    if (F.preventDefault(), !i.value && F.type !== "click" || !a.value) return;
    const { width: G, top: W, left: R } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: j } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ie, clientY: ae } = "touches" in F ? F.touches[0] : F, Q = { x: G / 2, y: -G / 2 }, de = { x: ie - R, y: W - ae }, Ve = Math.round(A(Q, de) - e.rotate + 360) % 360, ke = e.double && M(Q, de) < (j + j * I.value) / 4, ye = Math.ceil(15 / y.value);
    let $;
    for (let O = 0; O < ye; O++) if ($ = E(Ve + O * y.value, ke), g($) || ($ = E(Ve - O * y.value, ke), g($))) return L($);
  }
  function N(F) {
    e.disabled || (F.preventDefault(), window.addEventListener("mousemove", z), window.addEventListener("touchmove", z), window.addEventListener("mouseup", Z), window.addEventListener("touchend", Z), r.value = null, s.value = null, i.value = true, z(F));
  }
  function Z(F) {
    F.stopPropagation(), J(), i.value = false, s.value !== null && g(s.value) && n("change", s.value);
  }
  function J() {
    window.removeEventListener("mousemove", z), window.removeEventListener("touchmove", z), window.removeEventListener("mouseup", Z), window.removeEventListener("touchend", Z);
  }
  bt(J), ne(() => p("div", { class: te([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: N, onTouchstart: N, onWheel: C, ref: a }, [p("div", { class: "v-time-picker-clock__inner", ref: l }, [p("div", { class: te([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": k(e.modelValue) }, c.value]), style: me([{ transform: `rotate(${e.rotate + y.value * (w.value - e.min)}deg) scaleY(${T(w.value)})` }, d.value]) }, null), V.value.map((F) => {
    const G = F === w.value;
    return p("div", { class: te([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": G, "v-time-picker-clock__item--disabled": e.disabled || !g(F) }, G && f.value]), style: me([D(F), G && v.value]) }, [p("span", null, [e.format(F)])]);
  })])]));
} }), $D = H({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), ws = ee()({ name: "VTimePickerField", props: $D(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = K(), i = re(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return ne(() => b(Yn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: te(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: me(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Pt({}, o);
} });
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function Xb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Vo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function co(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function LD(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function FD(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Zb = H({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function Jb(e) {
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
    return (v, S, m) => {
      if (v !== null && S !== null) {
        const y = 3600 * v + 60 * S + m;
        if (y < d || y > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => LD(v, r).value : (v) => FD(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const OD = H({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Zb() }, "VTimePickerControls"), Iu = ee()({ name: "VTimePickerControls", props: OD(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Je(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = Jb(e), s = _(() => e.hour !== null ? e.ampm ? Vo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = l.value) == null ? void 0 : _a3.call(l, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (M) => {
    if (M == null || isNaN(Number(M))) return null;
    const A = Number(M);
    return e.ampm ? ln(Xb(A)) : ln(A);
  }, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const A = typeof M == "string" ? co(M) : Number(M);
    return A === null ? null : e.ampm ? Vo(A, e.period ?? "am") : Xe(A, 0, 23);
  } }, S = xe(e, "hour", void 0, v.in, v.out), m = { in: (M) => M != null && !isNaN(Number(M)) ? ln(`${M}`) : null, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const A = typeof M == "string" ? co(M) : Number(M);
    return A !== null ? Xe(A, 0, 59) : null;
  } }, y = xe(e, "minute", void 0, m.in, m.out), h = xe(e, "second", void 0, m.in, m.out);
  function w(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const A = e.period === "am", L = e.ampm ? Vo(Number(S.value ?? 0), A ? "am" : "pm") : Number(S.value ?? 0), z = r("hour", L, M.key === "ArrowUp"), N = A && z >= 12 || !A && z < 12;
    e.ampm && N ? (n("update:period", e.period === "am" ? "pm" : "am"), Te(() => S.value = ln(z))) : S.value = ln(z);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const A = Number(y.value ?? 0), L = r("minute", A, M.key === "ArrowUp", s.value);
    y.value = ln(L);
  }
  function V(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const A = Number(h.value ?? 0), L = r("second", A, M.key === "ArrowUp", s.value, u.value);
    h.value = ln(L);
  }
  function x(M, A, L) {
    return (z) => {
      if (!z.data) return;
      const N = z.target, { value: Z, selectionStart: J, selectionEnd: F } = N ?? {};
      if (co(z.data) === null) {
        z.preventDefault();
        return;
      }
      const G = Z ? Z.slice(0, J) + z.data + Z.slice(F) : z.data;
      if (G.length > 2) {
        if (J === F && F === 0 && z.data.trim().startsWith("0")) {
          z.preventDefault(), N.value = G.trim().substring(0, 2), L(N.value), z.data.trim().length === 1 && N.setSelectionRange(1, 1);
          return;
        }
        if (J === F && F === 1 && Z.startsWith("0")) {
          z.preventDefault(), N.value = G.trim().substring(0, 2), L(N.value);
          return;
        }
        const R = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(G) > R) {
          z.preventDefault(), N.value = ln(String(co(z.data)).substring(0, 2)), L(N.value);
          return;
        }
      }
      const W = M(G);
      A(W) && z.preventDefault();
    };
  }
  function g(M) {
    n("update:period", M);
    const A = r("hour", M === "am" ? 23 : 11, true);
    Te(() => S.value = ln(A));
  }
  const C = K(), k = K(), T = K();
  ce(() => e.viewMode, (M, A) => {
    switch (A) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        k.value.blur();
        break;
      case "second":
        T.value.blur();
        break;
    }
  });
  const P = x(v.out, (M) => v.in(M) === S.value, (M) => S.value = M), E = x(m.out, (M) => m.in(M) === y.value, (M) => y.value = M), D = x(m.out, (M) => m.in(M) === h.value, (M) => h.value = M);
  return ne(() => p("div", { class: "v-time-picker-controls" }, [p("div", { class: te({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [b(ws, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: S.value, "onUpdate:modelValue": (M) => S.value = M, onKeydown: w, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), p("span", { class: "v-time-picker-controls__time__separator" }, [ut(":")]), b(ws, { ref: k, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (M) => y.value = M, onKeydown: I, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && p("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [ut(":")]), e.useSeconds && p(ge, null, [b(ws, { key: "secondsVal", ref: T, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && p("div", { class: "v-time-picker-controls__ampm" }, [b(Ne, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: te({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? g("am") : null }, null), b(Ne, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: te({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? g("pm") : null }, null)])])])), {};
} }), RD = H({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Zb(), ...Fe(Mr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...ht() }, "VTimePicker"), ND = ee()({ name: "VTimePicker", props: RD(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), { densityClasses: o } = Ft(e), i = K(null), r = K(null), s = K(null), u = K(null), c = K(null), d = K(null), f = xe(e, "period", "am"), v = xe(e, "viewMode", "hour"), S = K(null), m = K(null), y = _(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: w, isAllowedSecond: I } = Jb(e), V = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function x() {
    const P = g();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  ce(i, x), ce(r, x), ce(s, x), ce(() => e.modelValue, (P) => C(P)), ce(() => e.useSeconds, (P, E) => {
    E && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), Ct(() => {
    C(e.modelValue);
  });
  function g() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${ln(i.value)}:${ln(r.value)}` + (e.useSeconds ? `:${ln(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") i.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) i.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [E, , D, , M, A] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = A ? Vo(parseInt(E, 10), A) : parseInt(E, 10), r.value = parseInt(D, 10), s.value = parseInt(M || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function k(P) {
    v.value === "hour" ? i.value = y.value ? Vo(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
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
    const E = i.value !== null && r.value !== null && (e.useSeconds ? s.value !== null : true);
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || g() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), E && x());
  }
  ne(() => {
    const P = Fe(Xl.filterProps(e), ["hideHeader"]), E = Iu.filterProps(e), D = Vu.filterProps(Fe(e, ["format", "modelValue", "min", "max"])), M = v.value === "hour" ? h.value : v.value === "minute" ? (A) => w.value(i.value, A) : (A) => I.value(i.value, r.value, A);
    return b(Xl, Y(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => b(Iu, Y(E, { ampm: y.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (A) => i.value = A, "onUpdate:minute": (A) => r.value = A, "onUpdate:second": (A) => s.value = A, "onUpdate:period": (A) => f.value = A, "onUpdate:viewMode": (A) => v.value = A, ref: S }), null), default: () => b(Vu, Y(D, { allowedValues: M, double: v.value === "hour" && !y.value, format: v.value === "hour" ? y.value ? Xb : (A) => A : (A) => ln(A, 2), max: v.value === "hour" ? y.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && y.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: T, onInput: k, ref: m }), null), actions: a.actions });
  });
} }), HD = H({ ...pe(), ...gn({ variant: "text" }) }, "VToolbarItems"), zD = ee()({ name: "VToolbarItems", props: HD(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), ne(() => {
    var _a3;
    return p("div", { class: te(["v-toolbar-items", e.class]), style: me(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), WD = H({ id: String, interactive: Boolean, text: String, ...Fe(vi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Qb = ee()({ name: "VTooltip", props: WD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = xe(e, "modelValue"), { scopeId: l } = kl(), o = Mt(), i = B(() => e.id || `v-tooltip-${o}`), r = K(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => Y({ "aria-describedby": i.value }, e.activatorProps));
  return ne(() => {
    const f = Un.filterProps(e);
    return b(Un, Y({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, S = new Array(v), m = 0; m < v; m++) S[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...S)) ?? e.text;
    } });
  }), Pt({}, r);
} }), jD = H({ ...Fe(Ag({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Pu = ee()({ name: "VTreeviewGroup", props: jD(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return ne(() => {
    const i = Yo.filterProps(e);
    return b(Yo, Y(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => p(ge, null, [b(Me, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), ep = Symbol.for("vuetify:v-treeview"), tp = H({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ce, ...Mg({ slim: true }) }, "VTreeviewItem"), Tu = ee()({ name: "VTreeviewItem", props: tp(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = He(ep, { visibleIds: K() }).visibleIds, o = K(), i = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = _(() => {
    var _a3;
    return l.value && !l.value.has(Pe((_a3 = o.value) == null ? void 0 : _a3.id));
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
    const f = kn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return b(kn, Y({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (S) => {
      var _a4;
      return p(ge, null, [e.indentLines && e.indentLines.length > 0 ? p("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => p("div", { class: te(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && b(Ic, { start: true }, { default: () => [e.toggleIcon ? p(ge, null, [n.toggle ? b(Me, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...S, loading: e.loading, props: { onClick: d } })] }) : b(Ne, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => b(Ba, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : p("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? b(Me, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, S)];
      } }) : p(ge, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, S), e.prependAvatar && b(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Pt({}, o);
} }), np = H({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, falseIcon: Ce, trueIcon: Ce, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...Jt(tp(), ["hideActions"]), ...ht() }, "VTreeviewChildren"), tr = ee()({ name: "VTreeviewChildren", props: np(), setup(e, t) {
  let { slots: n } = t;
  const a = At(/* @__PURE__ */ new Set()), l = K([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, v = a.has(s.value), S = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, y = c.length - 1 === u, h = { index: u, depth: m, isFirst: u === 0, isLast: y, path: [...e.path, u], hideAction: e.hideActions }, w = c0({ depth: m, isLast: y, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return p(ge, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && b(Ic, { start: true }, { default: () => [b(Dn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (k) => r(C.select, k), onClick: (k) => k.stopPropagation(), onKeydown: (k) => {
          ["Enter", "Space"].includes(k.key) && (k.stopPropagation(), r(C.select, C.isSelected));
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
      } : void 0 }, V = Pu.filterProps(f), x = tr.filterProps({ ...e, ...h }), g = { hideActions: e.hideActions, indentLines: w.footer };
      return d ? b(Pu, Y(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: k, isOpen: T } = C;
        const P = { ...f, ...k, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: w.node, ariaExpanded: T, onToggleExpand: [() => i(s), k.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), k.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return ki(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => b(Tu, Y({ ref: (E) => l.value[u] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), I));
      }, default: () => {
        var _a5;
        return p(ge, null, [b(tr, Y(x, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: w.children, isLastGroup: S, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: g, item: s.raw, internalItem: s, loading: v })]);
      } }) : ki(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? ki(n.divider, { props: s.raw }, () => b(dn, s.props, null)) : s.type === "subheader" ? ki(n.subheader, { props: s.raw }, () => b(lo, s.props, null)) : b(Tu, Y(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: w.leaf, value: e.returnObject ? Pe(s.raw) : f.value }), I));
    }));
  };
} });
function ap(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && ap(n.children, t);
  return t;
}
const UD = H({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...wl({ filterKeys: ["title"] }), ...Fe(np(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Fe(Rg({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), YD = ee()({ name: "VTreeview", props: UD(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Je(), { items: o } = Og(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = xe(e, "activated"), c = xe(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = K(), v = _(() => e.openAll ? I(o.value) : e.opened), S = _(() => ap(o.value)), m = B(() => e.search), { filteredItems: y } = xl(e, S, m), h = _(() => {
    var _a3;
    if (!m.value) return null;
    const V = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return V ? new Set(y.value.flatMap((x) => {
      const g = e.returnObject ? x.raw : x.props.value;
      return [...V(g), ...w(g)].map(Pe);
    })) : null;
  });
  function w(V) {
    var _a3, _b2;
    const x = [], g = (((_a3 = f.value) == null ? void 0 : _a3.children.get(V)) ?? []).slice();
    for (; g.length; ) {
      const C = g.shift();
      C && (x.push(C), g.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return x;
  }
  function I(V) {
    let x = [];
    for (const g of V) g.children && (x.push(e.returnObject ? Pe(g.raw) : g.value), g.children && (x = x.concat(I(g.children))));
    return x;
  }
  return it(ep, { visibleIds: h }), mt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), ne(() => {
    const V = Kl.filterProps(e), x = tr.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return b(Kl, Y({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(kn, { key: "no-data", title: l(e.noDataText) }, null)), b(tr, Y(x, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: g }), n)];
    } });
  }), {};
} }), GD = ee()({ name: "VValidation", props: bg(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = pg(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), KD = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: J1, VAlertTitle: cg, VApp: t1, VAppBar: w1, VAppBarNavIcon: K1, VAppBarTitle: q1, VAutocomplete: SV, VAvatar: vn, VBadge: ty, VBanner: CV, VBannerActions: ny, VBannerText: ay, VBottomNavigation: VV, VBottomSheet: PV, VBreadcrumbs: EV, VBreadcrumbsDivider: oy, VBreadcrumbsItem: iy, VBtn: Ne, VBtnGroup: Zs, VBtnToggle: P1, VCalendar: AI, VCard: LI, VCardActions: Iy, VCardItem: Ay, VCardSubtitle: Py, VCardText: Dy, VCardTitle: Ty, VCarousel: UI, VCarouselItem: GI, VCheckbox: u_, VCheckboxBtn: Dn, VChip: fa, VChipGroup: m_, VClassIcon: sc, VCode: KI, VCol: xT, VColorPicker: LP, VCombobox: OP, VComponentIcon: Us, VConfirmEdit: NP, VContainer: pT, VCounter: Vr, VDataIterator: QP, VDataTable: vT, VDataTableFooter: Ko, VDataTableHeaders: cl, VDataTableRow: nd, VDataTableRows: dl, VDataTableServer: yT, VDataTableVirtual: hT, VDatePicker: $T, VDatePickerControls: yu, VDatePickerHeader: bu, VDatePickerMonth: pu, VDatePickerMonths: Su, VDatePickerYears: ku, VDefaultsProvider: Me, VDialog: ou, VDialogBottomTransition: o1, VDialogTopTransition: i1, VDialogTransition: Sr, VDivider: dn, VEmptyState: FT, VExpandBothTransition: m1, VExpandTransition: kr, VExpandXTransition: yc, VExpansionPanel: OT, VExpansionPanelText: wu, VExpansionPanelTitle: xu, VExpansionPanels: HT, VFab: WT, VFabTransition: l1, VFadeTransition: Ho, VField: Fa, VFieldLabel: mo, VFileInput: qT, VFooter: ZT, VForm: QT, VHotkey: aA, VHover: oA, VIcon: Ge, VImg: da, VInfiniteScroll: rA, VInput: Rt, VItem: cA, VItemGroup: uA, VKbd: Cu, VLabel: no, VLayout: fA, VLayoutItem: mA, VLazy: gA, VLigatureIcon: v0, VList: Kl, VListGroup: Yo, VListImg: L_, VListItem: kn, VListItemAction: Ic, VListItemMedia: R_, VListItemSubtitle: Dg, VListItemTitle: Eg, VListSubheader: lo, VLocaleProvider: bA, VMain: SA, VMenu: ql, VMessages: gg, VNavigationDrawer: TA, VNoSsr: AA, VNumberInput: $A, VOtpInput: FA, VOverlay: Un, VPagination: mu, VParallax: NA, VProgressCircular: Ba, VProgressLinear: wr, VRadio: zA, VRadioGroup: jA, VRangeSlider: YA, VRating: KA, VResponsive: Ks, VRow: AT, VScaleTransition: hc, VScrollXReverseTransition: s1, VScrollXTransition: r1, VScrollYReverseTransition: c1, VScrollYTransition: u1, VSelect: Nc, VSelectionControl: $a, VSelectionControlGroup: mg, VSheet: La, VSkeletonLoader: JA, VSlideGroup: Uo, VSlideGroupItem: QA, VSlideXReverseTransition: f1, VSlideXTransition: d1, VSlideYReverseTransition: v1, VSlideYTransition: gc, VSlider: vu, VSnackbar: _u, VSnackbarQueue: nD, VSpacer: gu, VSparkline: iD, VSpeedDial: sD, VStepper: hD, VStepperActions: Nb, VStepperHeader: Hb, VStepperItem: zb, VStepperWindow: Wb, VStepperWindowItem: jb, VSvgIcon: rc, VSwitch: yD, VSystemBar: pD, VTab: Yb, VTable: fl, VTabs: CD, VTabsWindow: Gb, VTabsWindowItem: Kb, VTextField: Yn, VTextarea: VD, VThemeProvider: PD, VTimePicker: ND, VTimePickerClock: Vu, VTimePickerControls: Iu, VTimeline: MD, VTimelineItem: DD, VToolbar: Xs, VToolbarItems: zD, VToolbarTitle: fc, VTooltip: Qb, VTreeview: YD, VTreeviewGroup: Pu, VTreeviewItem: Tu, VValidation: GD, VVirtualScroll: Ir, VWindow: sl, VWindowItem: ul }, Symbol.toStringTag, { value: "Module" }));
function qD(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && lp(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function lp(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const XD = { mounted: qD, unmounted: lp };
function op(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function ip(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function ZD(e, t) {
  t.value !== t.oldValue && (ip(e, t), op(e, t));
}
const JD = { mounted: op, unmounted: ip, updated: ZD };
function QD(e, t) {
  const n = typeof e == "string" ? Ye(e) : e, a = eE(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    Qm(null, l);
  } };
}
function eE(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = il(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = tE(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ma(e, Y(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), Qm(c, n);
  };
}
function tE(e, t) {
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
const nE = QD(Qb, (e) => {
  var _a3;
  return { activator: (il(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), aE = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: lu, Intersect: An, Mutate: XD, Resize: Go, Ripple: Lt, Scroll: JD, Tooltip: nE, Touch: er }, Symbol.toStringTag, { value: "Module" })), lE = Gh({ components: KD, directives: aE, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
Vk(QC).use(lE).mount("#app");
