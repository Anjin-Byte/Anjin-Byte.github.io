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
}, Vv = () => false, nr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Tu = (e) => e.startsWith("onUpdate:"), At = Object.assign, Du = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ip = Object.prototype.hasOwnProperty, et = (e, t) => ip.call(e, t), Be = Array.isArray, Fl = (e) => Zo(e) === "[object Map]", Iv = (e) => Zo(e) === "[object Set]", cd = (e) => Zo(e) === "[object Date]", Oe = (e) => typeof e == "function", yt = (e) => typeof e == "string", zn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Pv = (e) => (Qe(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), Av = Object.prototype.toString, Zo = (e) => Av.call(e), rp = (e) => Zo(e).slice(8, -1), Tv = (e) => Zo(e) === "[object Object]", ar = (e) => yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, go = Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), lr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, sp = /-\w/g, tn = lr((e) => e.replace(sp, (t) => t.slice(1).toUpperCase())), up = /\B([A-Z])/g, vl = lr((e) => e.replace(up, "-$1").toLowerCase()), Gn = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)), jr = lr((e) => e ? `on${Gn(e)}` : ""), Va = (e, t) => !Object.is(e, t), Ii = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Dv = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Eu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, cp = (e) => {
  const t = yt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let dd;
const or = () => dd || (dd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ge(e) {
  if (Be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = yt(a) ? mp(a) : ge(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (yt(e) || Qe(e)) return e;
}
const dp = /;(?![^(]*\))/g, fp = /:([^]+)/, vp = /\/\*[^]*?\*\//g;
function mp(e) {
  const t = {};
  return e.replace(vp, "").split(dp).forEach((n) => {
    if (n) {
      const a = n.split(fp);
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
function hp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !yt(t) && (e.class = te(t)), n && (e.style = ge(n)), e;
}
const gp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yp = Au(gp);
function Ev(e) {
  return !!e || e === "";
}
function bp(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Mu(e[a], t[a]);
  return n;
}
function Mu(e, t) {
  if (e === t) return true;
  let n = cd(e), a = cd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = zn(e), a = zn(t), n || a) return e === t;
  if (n = Be(e), a = Be(t), n || a) return n && a ? bp(e, t) : false;
  if (n = Qe(e), a = Qe(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !Mu(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const Mv = (e) => !!(e && e.__v_isRef === true), Fe = (e) => yt(e) ? e : e == null ? "" : Be(e) || Qe(e) && (e.toString === Av || !Oe(e.toString)) ? Mv(e) ? Fe(e.value) : JSON.stringify(e, Bv, 2) : String(e), Bv = (e, t) => Mv(t) ? Bv(e, t.value) : Fl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[Ur(a, o) + " =>"] = l, n), {}) } : Iv(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ur(n)) } : zn(t) ? Ur(t) : Qe(t) && !Be(t) && !Tv(t) ? String(t) : t, Ur = (e, t = "") => {
  var n;
  return zn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wt;
class $v {
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
  return new $v(e);
}
function Fv() {
  return Wt;
}
function bt(e, t = false) {
  Wt && Wt.cleanups.push(e);
}
let vt;
const Yr = /* @__PURE__ */ new WeakSet();
class Lv {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ov(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, fd(this), Nv(this);
    const t = vt, n = _n;
    vt = this, _n = true;
    try {
      return this.fn();
    } finally {
      Hv(this), vt = t, _n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Fu(t);
      this.deps = this.depsTail = void 0, fd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ws(this) && this.run();
  }
  get dirty() {
    return ws(this);
  }
}
let Rv = 0, yo, bo;
function Ov(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = bo, bo = e;
    return;
  }
  e.next = yo, yo = e;
}
function Bu() {
  Rv++;
}
function $u() {
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
function Nv(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hv(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), Fu(a), pp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function ws(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (zv(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function zv(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io) || (e.globalVersion = Io, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ws(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = vt, a = _n;
  vt = e, _n = true;
  try {
    Nv(e);
    const l = e.fn(e._value);
    (t.version === 0 || Va(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    vt = n, _n = a, Hv(e), e.flags &= -3;
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
function pp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _n = true;
const Wv = [];
function ra() {
  Wv.push(_n), _n = false;
}
function sa() {
  const e = Wv.pop();
  _n = e === void 0 ? true : e;
}
function fd(e) {
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
class Sp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Lu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!vt || !_n || vt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== vt) n = this.activeLink = new Sp(vt, this), vt.deps ? (n.prevDep = vt.depsTail, vt.depsTail.nextDep = n, vt.depsTail = n) : vt.deps = vt.depsTail = n, jv(n);
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
    Bu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      $u();
    }
  }
}
function jv(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) jv(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Bi = /* @__PURE__ */ new WeakMap(), Za = Symbol(""), xs = Symbol(""), Po = Symbol("");
function jt(e, t, n) {
  if (_n && vt) {
    let a = Bi.get(e);
    a || Bi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new Lu()), l.map = a, l.key = n), l.track();
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
  if (Bu(), t === "clear") i.forEach(r);
  else {
    const s = Be(e), u = s && ar(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === Po || !zn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(Po)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(Za)), Fl(e) && r(i.get(xs)));
        break;
      case "delete":
        s || (r(i.get(Za)), Fl(e) && r(i.get(xs)));
        break;
      case "set":
        Fl(e) && r(i.get(Za));
        break;
    }
  }
  $u();
}
function kp(e, t) {
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
const wp = { __proto__: null, [Symbol.iterator]() {
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
  return vd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return vd(this, "reduceRight", e, t);
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
const xp = Array.prototype;
function Qn(e, t, n, a, l, o) {
  const i = ir(e), r = i !== e && !fn(e), s = i[t];
  if (s !== xp[t]) {
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
function vd(e, t, n, a) {
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
  ra(), Bu();
  const a = Pe(e)[t].apply(e, n);
  return $u(), sa(), a;
}
const Cp = Au("__proto__,__v_isRef,__isVue"), Uv = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(zn));
function _p(e) {
  zn(e) || (e = String(e));
  const t = Pe(this);
  return jt(t, "has", e), t.hasOwnProperty(e);
}
class Yv {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? $p : Xv : o ? qv : Kv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Be(t);
    if (!l) {
      let s;
      if (i && (s = wp[n])) return s;
      if (n === "hasOwnProperty") return _p;
    }
    const r = Reflect.get(t, n, gt(t) ? t : a);
    if ((zn(n) ? Uv.has(n) : Cp(n)) || (l || jt(t, "get", n), o)) return r;
    if (gt(r)) {
      const s = i && ar(n) ? r : r.value;
      return l && Qe(s) ? al(s) : s;
    }
    return Qe(r) ? l ? al(r) : Tt(r) : r;
  }
}
class Gv extends Yv {
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
    return (!zn(n) || !Uv.has(n)) && jt(t, "has", n), a;
  }
  ownKeys(t) {
    return jt(t, "iterate", Be(t) ? "length" : Za), Reflect.ownKeys(t);
  }
}
class Vp extends Yv {
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
const Ip = new Gv(), Pp = new Vp(), Ap = new Gv(true);
const Cs = (e) => e, gi = (e) => Reflect.getPrototypeOf(e);
function Tp(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Pe(l), i = Fl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? Cs : t ? Hl : Pn;
    return !t && jt(o, "iterate", s ? xs : Za), At(Object.create(u), { next() {
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
function Dp(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = Pe(o), r = Pe(l);
    e || (Va(l, r) && jt(i, "get", l), jt(i, "get", r));
    const { has: s } = gi(i), u = t ? Cs : e ? Hl : Pn;
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
    const i = this, r = i.__v_raw, s = Pe(r), u = t ? Cs : e ? Hl : Pn;
    return !e && jt(s, "iterate", Za), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return At(n, e ? { add: yi("add"), set: yi("set"), delete: yi("delete"), clear: yi("clear") } : { add(l) {
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
    n[l] = Tp(l, e, t);
  }), n;
}
function Ru(e, t) {
  const n = Dp(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(et(n, l) && l in a ? n : a, l, o);
}
const Ep = { get: Ru(false, false) }, Mp = { get: Ru(false, true) }, Bp = { get: Ru(true, false) };
const Kv = /* @__PURE__ */ new WeakMap(), qv = /* @__PURE__ */ new WeakMap(), Xv = /* @__PURE__ */ new WeakMap(), $p = /* @__PURE__ */ new WeakMap();
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
function Lp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fp(rp(e));
}
function Tt(e) {
  return ua(e) ? e : Ou(e, false, Ip, Ep, Kv);
}
function Rp(e) {
  return Ou(e, false, Ap, Mp, qv);
}
function al(e) {
  return Ou(e, true, Pp, Bp, Xv);
}
function Ou(e, t, n, a, l) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = Lp(e);
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
function Zv(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && Dv(e, "__v_skip", true), e;
}
const Pn = (e) => Qe(e) ? Tt(e) : e, Hl = (e) => Qe(e) ? al(e) : e;
function gt(e) {
  return e ? e.__v_isRef === true : false;
}
function K(e) {
  return Jv(e, false);
}
function ue(e) {
  return Jv(e, true);
}
function Jv(e, t) {
  return gt(e) ? e : new Op(e, t);
}
class Op {
  constructor(t, n) {
    this.dep = new Lu(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Pe(t), this._value = n ? t : Pn(t), this.__v_isShallow = n;
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
  return Oe(e) ? e() : Ue(e);
}
const Np = { get: (e, t, n) => t === "__v_raw" ? e : Ue(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return gt(l) && !gt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function Qv(e) {
  return Ia(e) ? e : new Proxy(e, Np);
}
function Zl(e) {
  const t = Be(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = em(e, n);
  return t;
}
class Hp {
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
    return kp(this._raw, this._key);
  }
}
class zp {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return gt(e) ? e : Oe(e) ? new zp(e) : Qe(e) && arguments.length > 1 ? em(e, t, n) : K(e);
}
function em(e, t, n) {
  return new Hp(e, t, n);
}
class Wp {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Lu(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && vt !== this) return Ov(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return zv(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function jp(e, t, n = false) {
  let a, l;
  return Oe(e) ? a = e : (a = e.get, l = e.set), new Wp(a, l, n);
}
const bi = {}, $i = /* @__PURE__ */ new WeakMap();
let Ga;
function Up(e, t = false, n = Ga) {
  if (n) {
    let a = $i.get(n);
    a || $i.set(n, a = []), a.push(e);
  }
}
function Yp(e, t, n = st) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (V) => l ? V : fn(V) || l === false || l === 0 ? oa(V, 1) : oa(V);
  let c, d, f, v, S = false, m = false;
  if (gt(e) ? (d = () => e.value, S = fn(e)) : Ia(e) ? (d = () => u(e), S = true) : Be(e) ? (m = true, S = e.some((V) => Ia(V) || fn(V)), d = () => e.map((V) => {
    if (gt(V)) return V.value;
    if (Ia(V)) return u(V);
    if (Oe(V)) return s ? s(V, 2) : V();
  })) : Oe(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
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
    c.stop(), y && y.active && Du(y.effects, c);
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
  return r && r(I), c = new Lv(d), c.scheduler = i ? () => i(I, false) : I, v = (V) => Up(V, false, c), f = c.onStop = () => {
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
  else if (Iv(e) || Fl(e)) e.forEach((a) => {
    oa(a, t, n);
  });
  else if (Tv(e)) {
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
function An(e, t, n, a) {
  if (Oe(e)) {
    const l = Qo(e, t, n, a);
    return l && Pv(l) && l.catch((o) => {
      rr(o, t, n);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push(An(e[o], t, n, a));
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
  Gp(e, n, l, a, i);
}
function Gp(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const Zt = [];
let Fn = -1;
const Ll = [];
let _a = null, Al = 0;
const tm = Promise.resolve();
let Fi = null;
function Ae(e) {
  const t = Fi || tm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kp(e) {
  let t = Fn + 1, n = Zt.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = Zt[a], o = Ao(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function Nu(e) {
  if (!(e.flags & 1)) {
    const t = Ao(e), n = Zt[Zt.length - 1];
    !n || !(e.flags & 2) && t >= Ao(n) ? Zt.push(e) : Zt.splice(Kp(t), 0, e), e.flags |= 1, nm();
  }
}
function nm() {
  Fi || (Fi = tm.then(lm));
}
function qp(e) {
  Be(e) ? Ll.push(...e) : _a && e.id === -1 ? _a.splice(Al + 1, 0, e) : e.flags & 1 || (Ll.push(e), e.flags |= 1), nm();
}
function md(e, t, n = Fn + 1) {
  for (; n < Zt.length; n++) {
    const a = Zt[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      Zt.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function am(e) {
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
function lm(e) {
  try {
    for (Fn = 0; Fn < Zt.length; Fn++) {
      const t = Zt[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qo(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < Zt.length; Fn++) {
      const t = Zt[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, Zt.length = 0, am(), Fi = null, (Zt.length || Ll.length) && lm();
  }
}
let rn = null, om = null;
function Li(e) {
  const t = rn;
  return rn = e, om = e && e.type.__scopeId || null, t;
}
function Ee(e, t = rn, n) {
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
function nt(e, t) {
  if (rn === null) return e;
  const n = vr(rn), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = st] = t[l];
    o && (Oe(o) && (o = { mounted: o, updated: o }), o.deep && oa(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Ha(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (ra(), An(s, n, 8, [e.el, r, e, t]), sa());
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
  if (a || Rl) {
    let l = Rl ? Rl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && Oe(t) ? t.call(a && a.proxy) : t;
  }
}
const Xp = Symbol.for("v-scx"), Zp = () => He(Xp);
function ct(e, t) {
  return Hu(e, null, t);
}
function ce(e, t, n) {
  return Hu(e, t, n);
}
function Hu(e, t, n = st) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = At({}, n), s = t && a || !t && o !== "post";
  let u;
  if (Mo) {
    if (o === "sync") {
      const v = Zp();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Nn, v.resume = Nn, v.pause = Nn, v;
    }
  }
  const c = Yt;
  r.call = (v, S, m) => An(v, c, S, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    zt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, S) => {
    S ? v() : Nu(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = Yp(e, t, r);
  return Mo && (u ? u.push(f) : s && f()), f;
}
function Jp(e, t, n) {
  const a = this.proxy, l = yt(e) ? e.includes(".") ? im(a, e) : () => a[e] : e.bind(a, a);
  let o;
  Oe(t) ? o = t : (o = t.handler, n = t);
  const i = ni(this), r = Hu(l, o.bind(a), n);
  return i(), r;
}
function im(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const rm = Symbol("_vte"), sm = (e) => e.__isTeleport, po = (e) => e && (e.disabled || e.disabled === ""), hd = (e) => e && (e.defer || e.defer === ""), gd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, yd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, _s = (e, t) => {
  const n = e && e.to;
  return yt(n) ? t ? t(n) : null : n;
}, um = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: S, createText: m, createComment: y } } = u, h = po(t.props);
  let { shapeFlag: w, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const x = t.el = m(""), g = t.anchor = m("");
    v(x, n, a), v(g, n, a);
    const C = (A, P) => {
      w & 16 && c(I, A, P, l, o, i, r, s);
    }, k = () => {
      const A = t.target = _s(t.props, S), P = Vs(A, t, m, v);
      A && (i !== "svg" && gd(A) ? i = "svg" : i !== "mathml" && yd(A) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), h || (C(A, P), Pi(t, false)));
    };
    h && (C(n, g), Pi(t, true)), hd(t.props) ? (t.el.__isMounted = false, zt(() => {
      k(), delete t.el.__isMounted;
    }, o)) : k();
  } else {
    if (hd(t.props) && e.el.__isMounted === false) {
      zt(() => {
        um.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, g = t.target = e.target, C = t.targetAnchor = e.targetAnchor, k = po(e.props), A = k ? n : g, P = k ? x : C;
    if (i === "svg" || gd(g) ? i = "svg" : (i === "mathml" || yd(g)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, A, l, o, i, r), Yu(e, t, true)) : s || d(e, t, A, P, l, o, i, r, false), h) k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pi(t, n, x, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const E = t.target = _s(t.props, S);
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
}, move: pi, hydrate: Qp };
function pi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || po(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function Qp(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
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
  const S = t.target = _s(t.props, s), m = po(t.props);
  if (S) {
    const y = S._lpa || S.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(S, y), t.targetAnchor || Vs(S, t, c, u, r(e) === S ? e : null)) : (t.anchor = i(e), f(S, y), t.targetAnchor || Vs(S, t, c, u), d(y && i(y), t, S, n, a, l, o))), Pi(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const eS = um;
function Pi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Vs(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[rm] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const Ln = Symbol("_leaveCb"), io = Symbol("_enterCb");
function cm() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Ct(() => {
    e.isMounted = true;
  }), Nt(() => {
    e.isUnmounting = true;
  }), e;
}
const bn = [Function, Array], dm = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: bn, onEnter: bn, onAfterEnter: bn, onEnterCancelled: bn, onBeforeLeave: bn, onLeave: bn, onAfterLeave: bn, onLeaveCancelled: bn, onBeforeAppear: bn, onAppear: bn, onAfterAppear: bn, onAppearCancelled: bn }, fm = (e) => {
  const t = e.subTree;
  return t.component ? fm(t.component) : t;
}, tS = { name: "BaseTransition", props: dm, setup(e, { slots: t }) {
  const n = ti(), a = cm();
  return () => {
    const l = t.default && zu(t.default(), true);
    if (!l || !l.length) return;
    const o = vm(l), i = Pe(e), { mode: r } = i;
    if (a.isLeaving) return qr(o);
    const s = bd(o);
    if (!s) return qr(o);
    let u = To(s, i, a, n, (d) => u = d);
    s.type !== Ut && ll(s, u);
    let c = n.subTree && bd(n.subTree);
    if (c && c.type !== Ut && !qa(c, s) && fm(n).type !== Ut) {
      let d = To(c, i, a, n);
      if (ll(c, d), r === "out-in" && s.type !== Ut) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, qr(o);
      r === "in-out" && s.type !== Ut ? d.delayLeave = (f, v, S) => {
        const m = mm(a, c);
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
function vm(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Ut) {
      t = n;
      break;
    }
  }
  return t;
}
const nS = tS;
function mm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function To(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: S, onLeaveCancelled: m, onBeforeAppear: y, onAppear: h, onAfterAppear: w, onAppearCancelled: I } = t, V = String(e.key), x = mm(n, e), g = (A, P) => {
    A && An(A, a, 9, P);
  }, C = (A, P) => {
    const E = P[1];
    g(A, P), Be(A) ? A.every((D) => D.length <= 1) && E() : A.length <= 1 && E();
  }, k = { mode: i, persisted: r, beforeEnter(A) {
    let P = s;
    if (!n.isMounted) if (o) P = y || s;
    else return;
    A[Ln] && A[Ln](true);
    const E = x[V];
    E && qa(e, E) && E.el[Ln] && E.el[Ln](), g(P, [A]);
  }, enter(A) {
    if (x[V] === e) return;
    let P = u, E = c, D = d;
    if (!n.isMounted) if (o) P = h || u, E = w || c, D = I || d;
    else return;
    let M = false;
    A[io] = (F) => {
      M || (M = true, F ? g(D, [A]) : g(E, [A]), k.delayedLeave && k.delayedLeave(), A[io] = void 0);
    };
    const T = A[io].bind(null, false);
    P ? C(P, [A, T]) : T();
  }, leave(A, P) {
    const E = String(e.key);
    if (A[io] && A[io](true), n.isUnmounting) return P();
    g(f, [A]);
    let D = false;
    A[Ln] = (T) => {
      D || (D = true, P(), T ? g(m, [A]) : g(S, [A]), A[Ln] = void 0, x[E] === e && delete x[E]);
    };
    const M = A[Ln].bind(null, false);
    x[E] = e, v ? C(v, [A, M]) : M();
  }, clone(A) {
    const P = To(A, t, n, a, l);
    return l && l(P), P;
  } };
  return k;
}
function qr(e) {
  if (sr(e)) return e = ca(e), e.children = null, e;
}
function bd(e) {
  if (!sr(e)) return sm(e.type) && e.children ? vm(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && Oe(n.default)) return n.default();
  }
}
function ll(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ll(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zu(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && l++, a = a.concat(zu(i.children, t, r))) : (t || i.type !== Ut) && a.push(r != null ? ca(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function mn(e, t) {
  return Oe(e) ? At({ name: e.name }, t, { setup: e }) : e;
}
function Mt() {
  const e = ti();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function hm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ri = /* @__PURE__ */ new WeakMap();
function So(e, t, n, a, l = false) {
  if (Be(e)) {
    e.forEach((m, y) => So(m, t && (Be(t) ? t[y] : t), n, a, l));
    return;
  }
  if (ko(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && So(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? vr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === st ? r.refs = {} : r.refs, d = r.setupState, f = Pe(d), v = d === st ? Vv : (m) => pd(c, m) ? false : et(f, m), S = (m, y) => !(y && pd(c, y));
  if (u != null && u !== s) {
    if (Sd(t), yt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (gt(u)) {
      const m = t;
      S(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (Oe(s)) Qo(s, r, 12, [i, c]);
  else {
    const m = yt(s), y = gt(s);
    if (m || y) {
      const h = () => {
        if (e.f) {
          const w = m ? v(s) ? d[s] : c[s] : S() || !e.k ? s.value : c[e.k];
          if (l) Be(w) && Du(w, o);
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
          h(), Ri.delete(e);
        };
        w.id = -1, Ri.set(e, w), zt(w, n);
      } else Sd(e), h();
    }
  }
}
function Sd(e) {
  const t = Ri.get(e);
  t && (t.flags |= 8, Ri.delete(e));
}
or().requestIdleCallback;
or().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function gm(e, t) {
  ym(e, "a", t);
}
function Wu(e, t) {
  ym(e, "da", t);
}
function ym(e, t, n = Yt) {
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
    for (; l && l.parent; ) sr(l.parent.vnode) && aS(a, t, n, l), l = l.parent;
  }
}
function aS(e, t, n, a) {
  const l = ur(t, e, a, true);
  dr(() => {
    Du(a[t], l);
  }, n);
}
function ur(e, t, n = Yt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ra();
      const r = ni(n), s = An(t, n, e, i);
      return r(), sa(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const va = (e) => (t, n = Yt) => {
  (!Mo || e === "sp") && ur(e, (...a) => t(...a), n);
}, Jl = va("bm"), Ct = va("m"), bm = va("bu"), cr = va("u"), Nt = va("bum"), dr = va("um"), lS = va("sp"), oS = va("rtg"), iS = va("rtc");
function rS(e, t = Yt) {
  ur("ec", e, t);
}
const pm = "components";
function Ye(e, t) {
  return Sm(pm, e, true, t) || e;
}
const sS = Symbol.for("v-ndc");
function uS(e) {
  return yt(e) && Sm(pm, e, false) || e;
}
function Sm(e, t, n = true, a = false) {
  const l = rn || Yt;
  if (l) {
    const o = l.type;
    {
      const r = US(o, false);
      if (r && (r === t || r === tn(t) || r === Gn(tn(t)))) return o;
    }
    const i = kd(l[e] || o[e], t) || kd(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function kd(e, t) {
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
const Is = (e) => e ? Nm(e) ? vr(e) : Is(e.parent) : null, wo = At(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Is(e.parent), $root: (e) => Is(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => wm(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Nu(e.update);
}), $nextTick: (e) => e.n || (e.n = Ae.bind(e.proxy)), $watch: (e) => Jp.bind(e) }), Xr = (e, t) => e !== st && !e.__isScriptSetup && et(e, t), cS = { get({ _: e }, t) {
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
      Ps && (i[t] = 0);
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
function wd(e) {
  return Be(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Ps = true;
function dS(e) {
  const t = wm(e), n = e.proxy, a = e.ctx;
  Ps = false, t.beforeCreate && xd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: S, activated: m, deactivated: y, beforeDestroy: h, beforeUnmount: w, destroyed: I, unmounted: V, render: x, renderTracked: g, renderTriggered: C, errorCaptured: k, serverPrefetch: A, expose: P, inheritAttrs: E, components: D, directives: M, filters: T } = t;
  if (u && fS(u, a, null), i) for (const N in i) {
    const X = i[N];
    Oe(X) && (a[N] = X.bind(n));
  }
  if (l) {
    const N = l.call(n, n);
    Qe(N) && (e.data = Tt(N));
  }
  if (Ps = true, o) for (const N in o) {
    const X = o[N], Z = Oe(X) ? X.bind(n, n) : Oe(X.get) ? X.get.bind(n, n) : Nn, L = !Oe(X) && Oe(X.set) ? X.set.bind(n) : Nn, G = _({ get: Z, set: L });
    Object.defineProperty(a, N, { enumerable: true, configurable: true, get: () => G.value, set: (W) => G.value = W });
  }
  if (r) for (const N in r) km(r[N], a, n, N);
  if (s) {
    const N = Oe(s) ? s.call(n) : s;
    Reflect.ownKeys(N).forEach((X) => {
      it(X, N[X]);
    });
  }
  c && xd(c, e, "c");
  function z(N, X) {
    Be(X) ? X.forEach((Z) => N(Z.bind(n))) : X && N(X.bind(n));
  }
  if (z(Jl, d), z(Ct, f), z(bm, v), z(cr, S), z(gm, m), z(Wu, y), z(rS, k), z(iS, g), z(oS, C), z(Nt, w), z(dr, V), z(lS, A), Be(P)) if (P.length) {
    const N = e.exposed || (e.exposed = {});
    P.forEach((X) => {
      Object.defineProperty(N, X, { get: () => n[X], set: (Z) => n[X] = Z, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === Nn && (e.render = x), E != null && (e.inheritAttrs = E), D && (e.components = D), M && (e.directives = M), A && hm(e);
}
function fS(e, t, n = Nn) {
  Be(e) && (e = As(e));
  for (const a in e) {
    const l = e[a];
    let o;
    Qe(l) ? "default" in l ? o = He(l.from || a, l.default, true) : o = He(l.from || a) : o = He(l), gt(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function xd(e, t, n) {
  An(Be(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function km(e, t, n, a) {
  let l = a.includes(".") ? im(n, a) : () => n[a];
  if (yt(e)) {
    const o = t[e];
    Oe(o) && ce(l, o);
  } else if (Oe(e)) ce(l, e.bind(n));
  else if (Qe(e)) if (Be(e)) e.forEach((o) => km(o, t, n, a));
  else {
    const o = Oe(e.handler) ? e.handler.bind(n) : t[e.handler];
    Oe(o) && ce(l, o, e);
  }
}
function wm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Oi(s, u, i, true)), Oi(s, t, i)), Qe(t) && o.set(t, s), s;
}
function Oi(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Oi(e, o, n, true), l && l.forEach((i) => Oi(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = vS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const vS = { data: Cd, props: _d, emits: _d, methods: fo, computed: fo, beforeCreate: Xt, created: Xt, beforeMount: Xt, mounted: Xt, beforeUpdate: Xt, updated: Xt, beforeDestroy: Xt, beforeUnmount: Xt, destroyed: Xt, unmounted: Xt, activated: Xt, deactivated: Xt, errorCaptured: Xt, serverPrefetch: Xt, components: fo, directives: fo, watch: hS, provide: Cd, inject: mS };
function Cd(e, t) {
  return t ? e ? function() {
    return At(Oe(e) ? e.call(this, this) : e, Oe(t) ? t.call(this, this) : t);
  } : t : e;
}
function mS(e, t) {
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
  return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _d(e, t) {
  return e ? Be(e) && Be(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(/* @__PURE__ */ Object.create(null), wd(e), wd(t ?? {})) : t;
}
function hS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = Xt(e[a], t[a]);
  return n;
}
function xm() {
  return { app: null, config: { isNativeTag: Vv, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let gS = 0;
function yS(e, t) {
  return function(a, l = null) {
    Oe(a) || (a = At({}, a)), l != null && !Qe(l) && (l = null);
    const o = xm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: gS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: GS, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...d) {
      return i.has(c) || (c && Oe(c.install) ? (i.add(c), c.install(u, ...d)) : Oe(c) && (i.add(c), c(u, ...d))), u;
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
      s && (An(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
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
const bS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tn(t)}Modifiers`] || e[`${vl(t)}Modifiers`];
function pS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || st;
  let l = n;
  const o = t.startsWith("update:"), i = o && bS(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => yt(c) ? c.trim() : c)), i.number && (l = n.map(Eu)));
  let r, s = a[r = jr(t)] || a[r = jr(tn(t))];
  !s && o && (s = a[r = jr(vl(t))]), s && An(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, An(u, e, 6, l);
  }
}
const SS = /* @__PURE__ */ new WeakMap();
function Cm(e, t, n = false) {
  const a = n ? SS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!Oe(e)) {
    const s = (u) => {
      const c = Cm(u, t, true);
      c && (r = true, At(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (Qe(e) && a.set(e, null), null) : (Be(o) ? o.forEach((s) => i[s] = null) : At(i, o), Qe(e) && a.set(e, i), i);
}
function fr(e, t) {
  return !e || !nr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), et(e, t[0].toLowerCase() + t.slice(1)) || et(e, vl(t)) || et(e, t));
}
function Vd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: S, inheritAttrs: m } = e, y = Li(e);
  let h, w;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, x = V;
      h = Rn(u.call(x, V, c, d, v, f, S)), w = r;
    } else {
      const V = t;
      h = Rn(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), w = t.props ? r : kS(r);
    }
  } catch (V) {
    xo.length = 0, rr(V, e, 1), h = b(Ut);
  }
  let I = h;
  if (w && m !== false) {
    const V = Object.keys(w), { shapeFlag: x } = I;
    V.length && x & 7 && (o && V.some(Tu) && (w = wS(w, o)), I = ca(I, w, false, true));
  }
  return n.dirs && (I = ca(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ll(I, n.transition), h = I, Li(y), h;
}
const kS = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || nr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wS = (e, t) => {
  const n = {};
  for (const a in e) (!Tu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function xS(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Id(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (_m(i, a, f) && !fr(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Id(a, i, u) : true : !!i;
  return false;
}
function Id(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (_m(t, e, o) && !fr(n, o)) return true;
  }
  return false;
}
function _m(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && Qe(a) && Qe(l) ? !Mu(a, l) : a !== l;
}
function CS({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Vm = {}, Im = () => Object.create(Vm), Pm = (e) => Object.getPrototypeOf(e) === Vm;
function _S(e, t, n, a = false) {
  const l = {}, o = Im();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Am(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : Rp(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function VS(e, t, n, a) {
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
          l[S] = Ts(s, r, S, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    Am(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !et(t, d) && ((c = vl(d)) === d || !et(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Ts(s, r, d, void 0, e, true)) : delete l[d]);
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
      n[d] = Ts(l, s, d, u[d], e, !et(u, d));
    }
  }
  return i;
}
function Ts(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = et(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && Oe(s)) {
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
const IS = /* @__PURE__ */ new WeakMap();
function Tm(e, t, n = false) {
  const a = n ? IS : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!Oe(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = Tm(d, t, true);
      At(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return Qe(e) && a.set(e, $l), $l;
  if (Be(o)) for (let c = 0; c < o.length; c++) {
    const d = tn(o[c]);
    Pd(d) && (i[d] = st);
  }
  else if (o) for (const c in o) {
    const d = tn(c);
    if (Pd(d)) {
      const f = o[c], v = i[d] = Be(f) || Oe(f) ? { type: f } : At({}, f), S = v.type;
      let m = false, y = true;
      if (Be(S)) for (let h = 0; h < S.length; ++h) {
        const w = S[h], I = Oe(w) && w.name;
        if (I === "Boolean") {
          m = true;
          break;
        } else I === "String" && (y = false);
      }
      else m = Oe(S) && S.name === "Boolean";
      v[0] = m, v[1] = y, (m || et(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return Qe(e) && a.set(e, u), u;
}
function Pd(e) {
  return e[0] !== "$" && !go(e);
}
const ju = (e) => e === "_" || e === "_ctx" || e === "$stable", Uu = (e) => Be(e) ? e.map(Rn) : [Rn(e)], PS = (e, t, n) => {
  if (t._n) return t;
  const a = Ee((...l) => Uu(t(...l)), n);
  return a._c = false, a;
}, Dm = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (ju(l)) continue;
    const o = e[l];
    if (Oe(o)) t[l] = PS(l, o, a);
    else if (o != null) {
      const i = Uu(o);
      t[l] = () => i;
    }
  }
}, Em = (e, t) => {
  const n = Uu(t);
  e.slots.default = () => n;
}, Mm = (e, t, n) => {
  for (const a in t) (n || !ju(a)) && (e[a] = t[a]);
}, AS = (e, t, n) => {
  const a = e.slots = Im();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Mm(a, t, n), n && Dv(a, "_", l, true)) : Dm(t, a);
  } else t && Em(e, t);
}, TS = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = st;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : Mm(l, t, n) : (o = !t.$stable, Dm(t, l)), i = t;
  } else t && (Em(e, t), i = { default: 1 });
  if (o) for (const r in l) !ju(r) && i[r] == null && delete l[r];
}, zt = $S;
function DS(e) {
  return ES(e);
}
function ES(e, t) {
  const n = or();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Nn, insertStaticContent: S } = e, m = ($, R, J, re = null, Q = null, le = null, pe = void 0, de = null, U = !!R.dynamicChildren) => {
    if ($ === R) return;
    $ && !qa($, R) && (re = ae($), W($, Q, le, true), $ = null), R.patchFlag === -2 && (U = false, R.dynamicChildren = null);
    const { type: oe, ref: Ve, shapeFlag: q } = R;
    switch (oe) {
      case ei:
        y($, R, J, re);
        break;
      case Ut:
        h($, R, J, re);
        break;
      case Jr:
        $ == null && w(R, J, re, pe);
        break;
      case be:
        D($, R, J, re, Q, le, pe, de, U);
        break;
      default:
        q & 1 ? x($, R, J, re, Q, le, pe, de, U) : q & 6 ? M($, R, J, re, Q, le, pe, de, U) : (q & 64 || q & 128) && oe.process($, R, J, re, Q, le, pe, de, U, he);
    }
    Ve != null && Q ? So(Ve, $ && $.ref, le, R || $, !R) : Ve == null && $ && $.ref != null && So($.ref, null, le, $, true);
  }, y = ($, R, J, re) => {
    if ($ == null) a(R.el = r(R.children), J, re);
    else {
      const Q = R.el = $.el;
      R.children !== $.children && u(Q, R.children);
    }
  }, h = ($, R, J, re) => {
    $ == null ? a(R.el = s(R.children || ""), J, re) : R.el = $.el;
  }, w = ($, R, J, re) => {
    [$.el, $.anchor] = S($.children, R, J, re, $.el, $.anchor);
  }, I = ({ el: $, anchor: R }, J, re) => {
    let Q;
    for (; $ && $ !== R; ) Q = f($), a($, J, re), $ = Q;
    a(R, J, re);
  }, V = ({ el: $, anchor: R }) => {
    let J;
    for (; $ && $ !== R; ) J = f($), l($), $ = J;
    l(R);
  }, x = ($, R, J, re, Q, le, pe, de, U) => {
    if (R.type === "svg" ? pe = "svg" : R.type === "math" && (pe = "mathml"), $ == null) g(R, J, re, Q, le, pe, de, U);
    else {
      const oe = $.el && $.el._isVueCE ? $.el : null;
      try {
        oe && oe._beginPatch(), A($, R, Q, le, pe, de, U);
      } finally {
        oe && oe._endPatch();
      }
    }
  }, g = ($, R, J, re, Q, le, pe, de) => {
    let U, oe;
    const { props: Ve, shapeFlag: q, transition: ye, dirs: we } = $;
    if (U = $.el = i($.type, le, Ve && Ve.is, Ve), q & 8 ? c(U, $.children) : q & 16 && k($.children, U, null, re, Q, Zr($, le), pe, de), we && Ha($, null, re, "created"), C(U, $, $.scopeId, pe, re), Ve) {
      for (const Ie in Ve) Ie !== "value" && !go(Ie) && o(U, Ie, null, Ve[Ie], le, re);
      "value" in Ve && o(U, "value", null, Ve.value, le), (oe = Ve.onVnodeBeforeMount) && Mn(oe, re, $);
    }
    we && Ha($, null, re, "beforeMount");
    const xe = MS(Q, ye);
    xe && ye.beforeEnter(U), a(U, R, J), ((oe = Ve && Ve.onVnodeMounted) || xe || we) && zt(() => {
      oe && Mn(oe, re, $), xe && ye.enter(U), we && Ha($, null, re, "mounted");
    }, Q);
  }, C = ($, R, J, re, Q) => {
    if (J && v($, J), re) for (let le = 0; le < re.length; le++) v($, re[le]);
    if (Q) {
      let le = Q.subTree;
      if (R === le || Fm(le.type) && (le.ssContent === R || le.ssFallback === R)) {
        const pe = Q.vnode;
        C($, pe, pe.scopeId, pe.slotScopeIds, Q.parent);
      }
    }
  }, k = ($, R, J, re, Q, le, pe, de, U = 0) => {
    for (let oe = U; oe < $.length; oe++) {
      const Ve = $[oe] = de ? na($[oe]) : Rn($[oe]);
      m(null, Ve, R, J, re, Q, le, pe, de);
    }
  }, A = ($, R, J, re, Q, le, pe) => {
    const de = R.el = $.el;
    let { patchFlag: U, dynamicChildren: oe, dirs: Ve } = R;
    U |= $.patchFlag & 16;
    const q = $.props || st, ye = R.props || st;
    let we;
    if (J && za(J, false), (we = ye.onVnodeBeforeUpdate) && Mn(we, J, R, $), Ve && Ha(R, $, J, "beforeUpdate"), J && za(J, true), (q.innerHTML && ye.innerHTML == null || q.textContent && ye.textContent == null) && c(de, ""), oe ? P($.dynamicChildren, oe, de, J, re, Zr(R, Q), le) : pe || X($, R, de, null, J, re, Zr(R, Q), le, false), U > 0) {
      if (U & 16) E(de, q, ye, J, Q);
      else if (U & 2 && q.class !== ye.class && o(de, "class", null, ye.class, Q), U & 4 && o(de, "style", q.style, ye.style, Q), U & 8) {
        const xe = R.dynamicProps;
        for (let Ie = 0; Ie < xe.length; Ie++) {
          const $e = xe[Ie], je = q[$e], Re = ye[$e];
          (Re !== je || $e === "value") && o(de, $e, je, Re, Q, J);
        }
      }
      U & 1 && $.children !== R.children && c(de, R.children);
    } else !pe && oe == null && E(de, q, ye, J, Q);
    ((we = ye.onVnodeUpdated) || Ve) && zt(() => {
      we && Mn(we, J, R, $), Ve && Ha(R, $, J, "updated");
    }, re);
  }, P = ($, R, J, re, Q, le, pe) => {
    for (let de = 0; de < R.length; de++) {
      const U = $[de], oe = R[de], Ve = U.el && (U.type === be || !qa(U, oe) || U.shapeFlag & 198) ? d(U.el) : J;
      m(U, oe, Ve, null, re, Q, le, pe, true);
    }
  }, E = ($, R, J, re, Q) => {
    if (R !== J) {
      if (R !== st) for (const le in R) !go(le) && !(le in J) && o($, le, R[le], null, Q, re);
      for (const le in J) {
        if (go(le)) continue;
        const pe = J[le], de = R[le];
        pe !== de && le !== "value" && o($, le, de, pe, Q, re);
      }
      "value" in J && o($, "value", R.value, J.value, Q);
    }
  }, D = ($, R, J, re, Q, le, pe, de, U) => {
    const oe = R.el = $ ? $.el : r(""), Ve = R.anchor = $ ? $.anchor : r("");
    let { patchFlag: q, dynamicChildren: ye, slotScopeIds: we } = R;
    we && (de = de ? de.concat(we) : we), $ == null ? (a(oe, J, re), a(Ve, J, re), k(R.children || [], J, Ve, Q, le, pe, de, U)) : q > 0 && q & 64 && ye && $.dynamicChildren && $.dynamicChildren.length === ye.length ? (P($.dynamicChildren, ye, J, Q, le, pe, de), (R.key != null || Q && R === Q.subTree) && Yu($, R, true)) : X($, R, J, Ve, Q, le, pe, de, U);
  }, M = ($, R, J, re, Q, le, pe, de, U) => {
    R.slotScopeIds = de, $ == null ? R.shapeFlag & 512 ? Q.ctx.activate(R, J, re, pe, U) : T(R, J, re, Q, le, pe, U) : F($, R, U);
  }, T = ($, R, J, re, Q, le, pe) => {
    const de = $.component = NS($, re, Q);
    if (sr($) && (de.ctx.renderer = he), HS(de, false, pe), de.asyncDep) {
      if (Q && Q.registerDep(de, z, pe), !$.el) {
        const U = de.subTree = b(Ut);
        h(null, U, R, J), $.placeholder = U.el;
      }
    } else z(de, $, R, J, Q, le, pe);
  }, F = ($, R, J) => {
    const re = R.component = $.component;
    if (xS($, R, J)) if (re.asyncDep && !re.asyncResolved) {
      N(re, R, J);
      return;
    } else re.next = R, re.update();
    else R.el = $.el, re.vnode = R;
  }, z = ($, R, J, re, Q, le, pe) => {
    const de = () => {
      if ($.isMounted) {
        let { next: q, bu: ye, u: we, parent: xe, vnode: Ie } = $;
        {
          const at = Bm($);
          if (at) {
            q && (q.el = Ie.el, N($, q, pe)), at.asyncDep.then(() => {
              zt(() => {
                $.isUnmounted || oe();
              }, Q);
            });
            return;
          }
        }
        let $e = q, je;
        za($, false), q ? (q.el = Ie.el, N($, q, pe)) : q = Ie, ye && Ii(ye), (je = q.props && q.props.onVnodeBeforeUpdate) && Mn(je, xe, q, Ie), za($, true);
        const Re = Vd($), ft = $.subTree;
        $.subTree = Re, m(ft, Re, d(ft.el), ae(ft), $, Q, le), q.el = Re.el, $e === null && CS($, Re.el), we && zt(we, Q), (je = q.props && q.props.onVnodeUpdated) && zt(() => Mn(je, xe, q, Ie), Q);
      } else {
        let q;
        const { el: ye, props: we } = R, { bm: xe, m: Ie, parent: $e, root: je, type: Re } = $, ft = ko(R);
        za($, false), xe && Ii(xe), !ft && (q = we && we.onVnodeBeforeMount) && Mn(q, $e, R), za($, true);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(Re);
          const at = $.subTree = Vd($);
          m(null, at, J, re, $, Q, le), R.el = at.el;
        }
        if (Ie && zt(Ie, Q), !ft && (q = we && we.onVnodeMounted)) {
          const at = R;
          zt(() => Mn(q, $e, at), Q);
        }
        (R.shapeFlag & 256 || $e && ko($e.vnode) && $e.vnode.shapeFlag & 256) && $.a && zt($.a, Q), $.isMounted = true, R = J = re = null;
      }
    };
    $.scope.on();
    const U = $.effect = new Lv(de);
    $.scope.off();
    const oe = $.update = U.run.bind(U), Ve = $.job = U.runIfDirty.bind(U);
    Ve.i = $, Ve.id = $.uid, U.scheduler = () => Nu(Ve), za($, true), oe();
  }, N = ($, R, J) => {
    R.component = $;
    const re = $.vnode.props;
    $.vnode = R, $.next = null, VS($, R.props, re, J), TS($, R.children, J), ra(), md($), sa();
  }, X = ($, R, J, re, Q, le, pe, de, U = false) => {
    const oe = $ && $.children, Ve = $ ? $.shapeFlag : 0, q = R.children, { patchFlag: ye, shapeFlag: we } = R;
    if (ye > 0) {
      if (ye & 128) {
        L(oe, q, J, re, Q, le, pe, de, U);
        return;
      } else if (ye & 256) {
        Z(oe, q, J, re, Q, le, pe, de, U);
        return;
      }
    }
    we & 8 ? (Ve & 16 && Se(oe, Q, le), q !== oe && c(J, q)) : Ve & 16 ? we & 16 ? L(oe, q, J, re, Q, le, pe, de, U) : Se(oe, Q, le, true) : (Ve & 8 && c(J, ""), we & 16 && k(q, J, re, Q, le, pe, de, U));
  }, Z = ($, R, J, re, Q, le, pe, de, U) => {
    $ = $ || $l, R = R || $l;
    const oe = $.length, Ve = R.length, q = Math.min(oe, Ve);
    let ye;
    for (ye = 0; ye < q; ye++) {
      const we = R[ye] = U ? na(R[ye]) : Rn(R[ye]);
      m($[ye], we, J, null, Q, le, pe, de, U);
    }
    oe > Ve ? Se($, Q, le, true, false, q) : k(R, J, re, Q, le, pe, de, U, q);
  }, L = ($, R, J, re, Q, le, pe, de, U) => {
    let oe = 0;
    const Ve = R.length;
    let q = $.length - 1, ye = Ve - 1;
    for (; oe <= q && oe <= ye; ) {
      const we = $[oe], xe = R[oe] = U ? na(R[oe]) : Rn(R[oe]);
      if (qa(we, xe)) m(we, xe, J, null, Q, le, pe, de, U);
      else break;
      oe++;
    }
    for (; oe <= q && oe <= ye; ) {
      const we = $[q], xe = R[ye] = U ? na(R[ye]) : Rn(R[ye]);
      if (qa(we, xe)) m(we, xe, J, null, Q, le, pe, de, U);
      else break;
      q--, ye--;
    }
    if (oe > q) {
      if (oe <= ye) {
        const we = ye + 1, xe = we < Ve ? R[we].el : re;
        for (; oe <= ye; ) m(null, R[oe] = U ? na(R[oe]) : Rn(R[oe]), J, xe, Q, le, pe, de, U), oe++;
      }
    } else if (oe > ye) for (; oe <= q; ) W($[oe], Q, le, true), oe++;
    else {
      const we = oe, xe = oe, Ie = /* @__PURE__ */ new Map();
      for (oe = xe; oe <= ye; oe++) {
        const rt = R[oe] = U ? na(R[oe]) : Rn(R[oe]);
        rt.key != null && Ie.set(rt.key, oe);
      }
      let $e, je = 0;
      const Re = ye - xe + 1;
      let ft = false, at = 0;
      const an = new Array(Re);
      for (oe = 0; oe < Re; oe++) an[oe] = 0;
      for (oe = we; oe <= q; oe++) {
        const rt = $[oe];
        if (je >= Re) {
          W(rt, Q, le, true);
          continue;
        }
        let yn;
        if (rt.key != null) yn = Ie.get(rt.key);
        else for ($e = xe; $e <= ye; $e++) if (an[$e - xe] === 0 && qa(rt, R[$e])) {
          yn = $e;
          break;
        }
        yn === void 0 ? W(rt, Q, le, true) : (an[yn - xe] = oe + 1, yn >= at ? at = yn : ft = true, m(rt, R[yn], J, null, Q, le, pe, de, U), je++);
      }
      const ka = ft ? BS(an) : $l;
      for ($e = ka.length - 1, oe = Re - 1; oe >= 0; oe--) {
        const rt = xe + oe, yn = R[rt], sd = R[rt + 1], ud = rt + 1 < Ve ? sd.el || $m(sd) : re;
        an[oe] === 0 ? m(null, yn, J, ud, Q, le, pe, de, U) : ft && ($e < 0 || oe !== ka[$e] ? G(yn, J, ud, 2) : $e--);
      }
    }
  }, G = ($, R, J, re, Q = null) => {
    const { el: le, type: pe, transition: de, children: U, shapeFlag: oe } = $;
    if (oe & 6) {
      G($.component.subTree, R, J, re);
      return;
    }
    if (oe & 128) {
      $.suspense.move(R, J, re);
      return;
    }
    if (oe & 64) {
      pe.move($, R, J, he);
      return;
    }
    if (pe === be) {
      a(le, R, J);
      for (let q = 0; q < U.length; q++) G(U[q], R, J, re);
      a($.anchor, R, J);
      return;
    }
    if (pe === Jr) {
      I($, R, J);
      return;
    }
    if (re !== 2 && oe & 1 && de) if (re === 0) de.beforeEnter(le), a(le, R, J), zt(() => de.enter(le), Q);
    else {
      const { leave: q, delayLeave: ye, afterLeave: we } = de, xe = () => {
        $.ctx.isUnmounted ? l(le) : a(le, R, J);
      }, Ie = () => {
        le._isLeaving && le[Ln](true), q(le, () => {
          xe(), we && we();
        });
      };
      ye ? ye(le, xe, Ie) : Ie();
    }
    else a(le, R, J);
  }, W = ($, R, J, re = false, Q = false) => {
    const { type: le, props: pe, ref: de, children: U, dynamicChildren: oe, shapeFlag: Ve, patchFlag: q, dirs: ye, cacheIndex: we } = $;
    if (q === -2 && (Q = false), de != null && (ra(), So(de, null, J, $, true), sa()), we != null && (R.renderCache[we] = void 0), Ve & 256) {
      R.ctx.deactivate($);
      return;
    }
    const xe = Ve & 1 && ye, Ie = !ko($);
    let $e;
    if (Ie && ($e = pe && pe.onVnodeBeforeUnmount) && Mn($e, R, $), Ve & 6) se($.component, J, re);
    else {
      if (Ve & 128) {
        $.suspense.unmount(J, re);
        return;
      }
      xe && Ha($, null, R, "beforeUnmount"), Ve & 64 ? $.type.remove($, R, J, he, re) : oe && !oe.hasOnce && (le !== be || q > 0 && q & 64) ? Se(oe, R, J, false, true) : (le === be && q & 384 || !Q && Ve & 16) && Se(U, R, J), re && O($);
    }
    (Ie && ($e = pe && pe.onVnodeUnmounted) || xe) && zt(() => {
      $e && Mn($e, R, $), xe && Ha($, null, R, "unmounted");
    }, J);
  }, O = ($) => {
    const { type: R, el: J, anchor: re, transition: Q } = $;
    if (R === be) {
      j(J, re);
      return;
    }
    if (R === Jr) {
      V($);
      return;
    }
    const le = () => {
      l(J), Q && !Q.persisted && Q.afterLeave && Q.afterLeave();
    };
    if ($.shapeFlag & 1 && Q && !Q.persisted) {
      const { leave: pe, delayLeave: de } = Q, U = () => pe(J, le);
      de ? de($.el, le, U) : U();
    } else le();
  }, j = ($, R) => {
    let J;
    for (; $ !== R; ) J = f($), l($), $ = J;
    l(R);
  }, se = ($, R, J) => {
    const { bum: re, scope: Q, job: le, subTree: pe, um: de, m: U, a: oe } = $;
    Ad(U), Ad(oe), re && Ii(re), Q.stop(), le && (le.flags |= 8, W(pe, $, R, J)), de && zt(de, R), zt(() => {
      $.isUnmounted = true;
    }, R);
  }, Se = ($, R, J, re = false, Q = false, le = 0) => {
    for (let pe = le; pe < $.length; pe++) W($[pe], R, J, re, Q);
  }, ae = ($) => {
    if ($.shapeFlag & 6) return ae($.component.subTree);
    if ($.shapeFlag & 128) return $.suspense.next();
    const R = f($.anchor || $.el), J = R && R[rm];
    return J ? f(J) : R;
  };
  let me = false;
  const ie = ($, R, J) => {
    let re;
    $ == null ? R._vnode && (W(R._vnode, null, null, true), re = R._vnode.component) : m(R._vnode || null, $, R, null, null, null, J), R._vnode = $, me || (me = true, md(re), am(), me = false);
  }, he = { p: m, um: W, m: G, r: O, mt: T, mc: k, pc: X, pbc: P, n: ae, o: e };
  return { render: ie, hydrate: void 0, createApp: yS(ie) };
}
function Zr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function za({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function MS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yu(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Be(a) && Be(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = na(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && Yu(i, r)), r.type === ei && (r.patchFlag === -1 && (r = l[o] = na(r)), r.el = i.el), r.type === Ut && !r.el && (r.el = i.el);
  }
}
function BS(e) {
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
function Bm(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Bm(t);
}
function Ad(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function $m(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? $m(t.subTree) : null;
}
const Fm = (e) => e.__isSuspense;
function $S(e, t) {
  t && t.pendingBranch ? Be(e) ? t.effects.push(...e) : t.effects.push(e) : qp(e);
}
const be = Symbol.for("v-fgt"), ei = Symbol.for("v-txt"), Ut = Symbol.for("v-cmt"), Jr = Symbol.for("v-stc"), xo = [];
let sn = null;
function Te(e = false) {
  xo.push(sn = e ? null : []);
}
function FS() {
  xo.pop(), sn = xo[xo.length - 1] || null;
}
let Do = 1;
function Ni(e, t = false) {
  Do += e, e < 0 && sn && t && (sn.hasOnce = true);
}
function Lm(e) {
  return e.dynamicChildren = Do > 0 ? sn || $l : null, FS(), Do > 0 && sn && sn.push(e), e;
}
function ze(e, t, n, a, l, o) {
  return Lm(p(e, t, n, a, l, o, true));
}
function Hn(e, t, n, a, l) {
  return Lm(b(e, t, n, a, l, true));
}
function Eo(e) {
  return e ? e.__v_isVNode === true : false;
}
function qa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rm = ({ key: e }) => e ?? null, Ai = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? yt(e) || gt(e) || Oe(e) ? { i: rn, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, a = 0, l = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Rm(t), ref: t && Ai(t), scopeId: om, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: rn };
  return r ? (Gu(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= yt(n) ? 8 : 16), Do > 0 && !i && sn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && sn.push(s), s;
}
const b = LS;
function LS(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === sS) && (e = Ut), Eo(e)) {
    const r = ca(e, t, true);
    return n && Gu(r, n), Do > 0 && !o && sn && (r.shapeFlag & 6 ? sn[sn.indexOf(e)] = r : sn.push(r)), r.patchFlag = -2, r;
  }
  if (YS(e) && (e = e.__vccOpts), t) {
    t = Om(t);
    let { class: r, style: s } = t;
    r && !yt(r) && (t.class = te(r)), Qe(s) && (Jo(s) && !Be(s) && (s = At({}, s)), t.style = ge(s));
  }
  const i = yt(e) ? 1 : Fm(e) ? 128 : sm(e) ? 64 : Qe(e) ? 4 : Oe(e) ? 2 : 0;
  return p(e, t, n, a, l, i, o, true);
}
function Om(e) {
  return e ? Jo(e) || Pm(e) ? At({}, e) : e : null;
}
function ca(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? Y(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Rm(u), ref: t && t.ref ? n && o ? Be(o) ? o.concat(Ai(t)) : [o, Ai(t)] : Ai(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ca(e.ssContent), ssFallback: e.ssFallback && ca(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ll(c, s.clone(c)), c;
}
function ut(e = " ", t = 0) {
  return b(ei, null, e, t);
}
function xn(e = "", t = false) {
  return t ? (Te(), Hn(Ut, null, e)) : b(Ut, null, e);
}
function Rn(e) {
  return e == null || typeof e == "boolean" ? b(Ut) : Be(e) ? b(be, null, e.slice()) : Eo(e) ? na(e) : b(ei, null, String(e));
}
function na(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ca(e);
}
function Gu(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Be(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), Gu(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !Pm(t) ? t._ctx = rn : l === 3 && rn && (rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else Oe(t) ? (t = { default: t, _ctx: rn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [ut(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Y(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = te([t.class, a.class]));
    else if (l === "style") t.style = ge([t.style, a.style]);
    else if (nr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(Be(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Mn(e, t, n, a = null) {
  An(e, t, 7, [n, a]);
}
const RS = xm();
let OS = 0;
function NS(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || RS, o = { uid: OS++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new $v(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Tm(a, l), emitsOptions: Cm(a, l), emit: null, emitted: null, propsDefaults: st, inheritAttrs: a.inheritAttrs, ctx: st, data: st, props: st, attrs: st, slots: st, refs: st, setupState: st, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = pS.bind(null, o), e.ce && e.ce(o), o;
}
let Yt = null;
const ti = () => Yt || rn;
let Hi, Ds;
{
  const e = or(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Hi = t("__VUE_INSTANCE_SETTERS__", (n) => Yt = n), Ds = t("__VUE_SSR_SETTERS__", (n) => Mo = n);
}
const ni = (e) => {
  const t = Yt;
  return Hi(e), e.scope.on(), () => {
    e.scope.off(), Hi(t);
  };
}, Td = () => {
  Yt && Yt.scope.off(), Hi(null);
};
function Nm(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = false;
function HS(e, t = false, n = false) {
  t && Ds(t);
  const { props: a, children: l } = e.vnode, o = Nm(e);
  _S(e, a, o, t), AS(e, l, n || t);
  const i = o ? zS(e, t) : void 0;
  return t && Ds(false), i;
}
function zS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cS);
  const { setup: a } = n;
  if (a) {
    ra();
    const l = e.setupContext = a.length > 1 ? jS(e) : null, o = ni(e), i = Qo(a, e, 0, [e.props, l]), r = Pv(i);
    if (sa(), o(), (r || e.sp) && !ko(e) && hm(e), r) {
      if (i.then(Td, Td), t) return i.then((s) => {
        Dd(e, s);
      }).catch((s) => {
        rr(s, e, 0);
      });
      e.asyncDep = i;
    } else Dd(e, i);
  } else Hm(e);
}
function Dd(e, t, n) {
  Oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = Qv(t)), Hm(e);
}
function Hm(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Nn);
  {
    const l = ni(e);
    ra();
    try {
      dS(e);
    } finally {
      sa(), l();
    }
  }
}
const WS = { get(e, t) {
  return jt(e, "get", ""), e[t];
} };
function jS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, WS), slots: e.slots, emit: e.emit, expose: t };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qv(Zv(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in wo) return wo[n](e);
  }, has(t, n) {
    return n in t || n in wo;
  } })) : e.proxy;
}
function US(e, t = true) {
  return Oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function YS(e) {
  return Oe(e) && "__vccOpts" in e;
}
const _ = (e, t) => jp(e, t, Mo);
function ma(e, t, n) {
  try {
    Ni(-1);
    const a = arguments.length;
    return a === 2 ? Qe(t) && !Be(t) ? Eo(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Eo(n) && (n = [n]), b(e, t, n));
  } finally {
    Ni(1);
  }
}
const GS = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Es;
const Ed = typeof window < "u" && window.trustedTypes;
if (Ed) try {
  Es = Ed.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const zm = Es ? (e) => Es.createHTML(e) : (e) => e, KS = "http://www.w3.org/2000/svg", qS = "http://www.w3.org/1998/Math/MathML", ta = typeof document < "u" ? document : null, Md = ta && ta.createElement("template"), XS = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? ta.createElementNS(KS, e) : t === "mathml" ? ta.createElementNS(qS, e) : n ? ta.createElement(e, { is: n }) : ta.createElement(e);
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
    Md.innerHTML = zm(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = Md.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, wa = "transition", ro = "animation", zl = Symbol("_vtc"), Wm = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, jm = At({}, dm, Wm), ZS = (e) => (e.displayName = "Transition", e.props = jm, e), Da = ZS((e, { slots: t }) => ma(nS, Um(e), t)), Wa = (e, t = []) => {
  Be(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Bd = (e) => e ? Be(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Um(e) {
  const t = {};
  for (const D in e) D in Wm || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, S = JS(l), m = S && S[0], y = S && S[1], { onBeforeEnter: h, onEnter: w, onEnterCancelled: I, onLeave: V, onLeaveCancelled: x, onBeforeAppear: g = h, onAppear: C = w, onAppearCancelled: k = I } = t, A = (D, M, T, F) => {
    D._enterCancelled = F, xa(D, M ? c : r), xa(D, M ? u : i), T && T();
  }, P = (D, M) => {
    D._isLeaving = false, xa(D, d), xa(D, v), xa(D, f), M && M();
  }, E = (D) => (M, T) => {
    const F = D ? C : w, z = () => A(M, D, T);
    Wa(F, [M, z]), $d(() => {
      xa(M, D ? s : o), $n(M, D ? c : r), Bd(F) || Fd(M, a, m, z);
    });
  };
  return At(t, { onBeforeEnter(D) {
    Wa(h, [D]), $n(D, o), $n(D, i);
  }, onBeforeAppear(D) {
    Wa(g, [D]), $n(D, s), $n(D, u);
  }, onEnter: E(false), onAppear: E(true), onLeave(D, M) {
    D._isLeaving = true;
    const T = () => P(D, M);
    $n(D, d), D._enterCancelled ? ($n(D, f), Ms(D)) : (Ms(D), $n(D, f)), $d(() => {
      D._isLeaving && (xa(D, d), $n(D, v), Bd(V) || Fd(D, a, y, T));
    }), Wa(V, [D, T]);
  }, onEnterCancelled(D) {
    A(D, false, void 0, true), Wa(I, [D]);
  }, onAppearCancelled(D) {
    A(D, true, void 0, true), Wa(k, [D]);
  }, onLeaveCancelled(D) {
    P(D), Wa(x, [D]);
  } });
}
function JS(e) {
  if (e == null) return null;
  if (Qe(e)) return [Qr(e.enter), Qr(e.leave)];
  {
    const t = Qr(e);
    return [t, t];
  }
}
function Qr(e) {
  return cp(e);
}
function $n(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[zl] || (e[zl] = /* @__PURE__ */ new Set())).add(t);
}
function xa(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[zl];
  n && (n.delete(t), n.size || (e[zl] = void 0));
}
function $d(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let QS = 0;
function Fd(e, t, n, a) {
  const l = e._endId = ++QS, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = Ym(e, t);
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
function Ym(e, t) {
  const n = window.getComputedStyle(e), a = (S) => (n[S] || "").split(", "), l = a(`${wa}Delay`), o = a(`${wa}Duration`), i = Ld(l, o), r = a(`${ro}Delay`), s = a(`${ro}Duration`), u = Ld(r, s);
  let c = null, d = 0, f = 0;
  t === wa ? i > 0 && (c = wa, d = i, f = o.length) : t === ro ? u > 0 && (c = ro, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? wa : ro : null, f = c ? c === wa ? o.length : s.length : 0);
  const v = c === wa && /\b(?:transform|all)(?:,|$)/.test(a(`${wa}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function Ld(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Rd(n) + Rd(e[a])));
}
function Rd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ms(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ek(e, t, n) {
  const a = e[zl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zi = Symbol("_vod"), Gm = Symbol("_vsh"), En = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
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
  e.style.display = t ? e[zi] : "none", e[Gm] = !t;
}
const tk = Symbol(""), nk = /(?:^|;)\s*display\s*:/;
function ak(e, t, n) {
  const a = e.style, l = yt(n);
  let o = false;
  if (n && !l) {
    if (t) if (yt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Ti(a, r, "");
    }
    else for (const i in t) n[i] == null && Ti(a, i, "");
    for (const i in n) i === "display" && (o = true), Ti(a, i, n[i]);
  } else if (l) {
    if (t !== n) {
      const i = a[tk];
      i && (n += ";" + i), a.cssText = n, o = nk.test(n);
    }
  } else t && e.removeAttribute("style");
  zi in e && (e[zi] = o ? a.display : "", e[Gm] && (a.display = "none"));
}
const Od = /\s*!important$/;
function Ti(e, t, n) {
  if (Be(n)) n.forEach((a) => Ti(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = lk(e, t);
    Od.test(n) ? e.setProperty(vl(a), n.replace(Od, ""), "important") : e[a] = n;
  }
}
const Nd = ["Webkit", "Moz", "ms"], es = {};
function lk(e, t) {
  const n = es[t];
  if (n) return n;
  let a = tn(t);
  if (a !== "filter" && a in e) return es[t] = a;
  a = Gn(a);
  for (let l = 0; l < Nd.length; l++) {
    const o = Nd[l] + a;
    if (o in e) return es[t] = o;
  }
  return t;
}
const Hd = "http://www.w3.org/1999/xlink";
function zd(e, t, n, a, l, o = yp(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hd, t.slice(6, t.length)) : e.setAttributeNS(Hd, t, n) : n == null || o && !Ev(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : zn(n) ? String(n) : n);
}
function Wd(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zm(n) : n);
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
    r === "boolean" ? n = Ev(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
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
function ok(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const jd = Symbol("_vei");
function ik(e, t, n, a, l = null) {
  const o = e[jd] || (e[jd] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = rk(t);
    if (a) {
      const u = o[t] = ck(a, l);
      Tl(e, r, u, s);
    } else i && (ok(e, r, i, s), o[t] = void 0);
  }
}
const Ud = /(?:Once|Passive|Capture)$/;
function rk(e) {
  let t;
  if (Ud.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Ud); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : vl(e.slice(2)), t];
}
let ts = 0;
const sk = Promise.resolve(), uk = () => ts || (sk.then(() => ts = 0), ts = Date.now());
function ck(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    An(dk(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = uk(), n;
}
function dk(e, t) {
  if (Be(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const Yd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fk = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? ek(e, a, i) : t === "style" ? ak(e, n, a) : nr(t) ? Tu(t) || ik(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : vk(e, t, a, i)) ? (Wd(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zd(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !yt(a)) ? Wd(e, tn(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), zd(e, t, a, i));
};
function vk(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && Yd(t) && Oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return Yd(t) && yt(n) ? false : t in e;
}
const Km = /* @__PURE__ */ new WeakMap(), qm = /* @__PURE__ */ new WeakMap(), Wi = Symbol("_moveCb"), Gd = Symbol("_enterCb"), mk = (e) => (delete e.props.mode, e), hk = mk({ name: "TransitionGroup", props: At({}, jm, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ti(), a = cm();
  let l, o;
  return cr(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!pk(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(gk), l.forEach(yk);
    const r = l.filter(bk);
    Ms(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      $n(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[Wi] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Wi] = null, xa(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Pe(e), r = Um(i);
    let s = i.tag || be;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), ll(c, To(c, r, a, n)), Km.set(c, Xm(c.el)));
    }
    o = t.default ? zu(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && ll(c, To(c, r, a, n));
    }
    return b(s, null, o);
  };
} }), Ku = hk;
function gk(e) {
  const t = e.el;
  t[Wi] && t[Wi](), t[Gd] && t[Gd]();
}
function yk(e) {
  qm.set(e, Xm(e.el));
}
function bk(e) {
  const t = Km.get(e), n = qm.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function Xm(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function pk(e, t, n) {
  const a = e.cloneNode(), l = e[zl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = Ym(a);
  return o.removeChild(a), i;
}
const Kd = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Be(t) ? (n) => Ii(t, n) : t;
};
function Sk(e) {
  e.target.composing = true;
}
function qd(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function Xd(e, t, n) {
  return t && (e = e.trim()), n && (e = Eu(e)), e;
}
const kk = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[ns] = Kd(l);
  const o = a || l.props && l.props.type === "number";
  Tl(e, t ? "change" : "input", (i) => {
    i.target.composing || e[ns](Xd(e.value, n, o));
  }), (n || o) && Tl(e, "change", () => {
    e.value = Xd(e.value, n, o);
  }), t || (Tl(e, "compositionstart", Sk), Tl(e, "compositionend", qd), Tl(e, "change", qd));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[ns] = Kd(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Eu(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, wk = ["ctrl", "shift", "alt", "meta"], xk = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => wk.some((n) => e[`${n}Key`] && !t.includes(n)) }, Si = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = xk[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, Ck = At({ patchProp: fk }, XS);
let Zd;
function Zm() {
  return Zd || (Zd = DS(Ck));
}
const Jm = ((...e) => {
  Zm().render(...e);
}), _k = ((...e) => {
  const t = Zm().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = Ik(a);
    if (!l) return;
    const o = t._component;
    !Oe(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, Vk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function Vk(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Ik(e) {
  return yt(e) ? document.querySelector(e) : e;
}
const Jd = () => {
};
function Qm(e) {
  const t = `[${e}]`;
  return { debug: Jd, info: Jd, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Qd = 5;
function Pk(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * Qd)));
  return e / (l * Qd);
}
function eh(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function Ak(e, t) {
  const n = (e.cx % t.worldCols + t.worldCols) % t.worldCols, a = (e.cy % t.worldRows + t.worldRows) % t.worldRows;
  return { cx: n, cy: a };
}
function Tk(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function Dk(e, t) {
  return e * t.gridPitch / t.dpr;
}
const th = 1, Ek = `gol.gridBlankZones.v${th}`, Mk = 128;
function Bk(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const $k = /* @__PURE__ */ new Set(["minor", "major", "both"]), Fk = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function as(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function El(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Lk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Rk(e) {
  return typeof e == "string" && $k.has(e) ? e : "both";
}
function Ok(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && Fk.has(t.style) ? t.style : "none", a = as(El(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = as(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = as(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, El(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function Nk(e) {
  return typeof e == "boolean" ? e : true;
}
function ef(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function nh(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = El(n.x1), l = El(n.y1), o = El(n.x2), i = El(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Lk(), x1: r, y1: u, x2: s, y2: c, mode: Rk(n.mode), edge: Ok(n.edge), enabled: Nk(n.enabled), createdAt: ef(n.createdAt, t), updatedAt: ef(n.updatedAt, t) };
}
function ah(e, t = Date.now()) {
  return Bk(e, nh, Mk, t);
}
function ls() {
  return typeof localStorage < "u";
}
function Hk(e) {
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
const qu = Hk({ key: Ek, version: th, normalize: ah, itemsKey: "zones" }), zk = qu.load, Wk = qu.save, jk = qu.clear;
function Uk(e) {
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
function Yk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Uk({ storage: { load: zk, save: Wk, clear: jk }, normalize: ah, normalizeOne: nh, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const tf = Qm("WorkerBridge");
function Gk() {
  let e = null;
  const t = K(null), n = /* @__PURE__ */ new Map();
  function a(s, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(s, u) : e.postMessage(s);
    } catch (c) {
      tf.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
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
    const c = new Worker(new URL("/assets/backgroundRenderer-DNKz6CFe.js", import.meta.url), { type: "module" });
    c.onmessage = (d) => o(d.data), c.onerror = (d) => {
      tf.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = c, a({ type: "init", canvas: s, cellPx: u }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const os = 5, Kk = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), qk = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function Xk(e, t) {
  function n() {
    const s = e.value;
    return !s || s.gridPitch === 0 ? null : { gridPitch: s.gridPitch, scrollCanvasPx: t.value, dpr: devicePixelRatio, worldCols: s.worldCols, worldRows: s.worldRows };
  }
  function a(s, u) {
    return (s % u.worldCols + u.worldCols) % u.worldCols;
  }
  function l(s) {
    const u = n();
    if (!u) return null;
    const c = eh(s.clientX, s.clientY, u);
    return { cx: a(c.cx, u), cy: c.cy };
  }
  function o(s, u) {
    return { x1: Math.min(s.cx, u.cx), y1: Math.min(s.cy, u.cy), x2: Math.max(s.cx, u.cx), y2: Math.max(s.cy, u.cy) };
  }
  function i(s, u) {
    const c = (f) => Math.floor(f / os) * os, d = (f) => c(f) + (os - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(s.x1))), y1: c(s.y1), x2: Math.max(0, Math.min(u.worldCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(qk)) return true;
    let u = s;
    for (; u; ) {
      if (Kk.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: Tk, cellSpanToCssPx: Dk, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToWorld: a };
}
function Zk() {
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
function Jk(e) {
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
const nf = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, af = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
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
const lh = "theme-preference";
function Qk() {
  var _a3;
  if (typeof window > "u") return "light";
  const e = (_a3 = window.localStorage) == null ? void 0 : _a3.getItem(lh);
  return e === "light" || e === "dark" || e === "system" ? e : "light";
}
const Bo = K(Qk()), oh = K(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    oh.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
ce(Bo, (e) => {
  var _a3;
  typeof window < "u" && ((_a3 = window.localStorage) == null ? void 0 : _a3.setItem(lh, e));
});
const Bs = _(() => Bo.value === "light" ? nf : Bo.value === "dark" || oh.value ? af : nf);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, a = (l, o) => {
      n.style.setProperty(l, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", a("--theme-surface", Bn(t.surface)), a("--theme-ink", Bn(t.ink)), a("--theme-ink-secondary", Bn(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-ink-tertiary", Bn(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-text-primary", Bn(t.ink)), a("--theme-text-secondary", Bn(ja(t.surface, t.ink, t.ink_secondary_t))), a("--theme-text-tertiary", Bn(ja(t.surface, t.ink, t.ink_tertiary_t))), a("--theme-grid-minor", Bn(ja(t.surface, t.ink, t.minor_t))), a("--theme-grid-major", Bn(ja(t.surface, t.ink, t.major_t))), a("--theme-grid-border", Bn(ja(t.surface, t.ink, t.border_t))), a("--theme-accent", is(t.accent, t.accent_chroma_scale)), a("--theme-accent-ring", is(t.accent, t.accent_chroma_scale, 0.45)), a("--theme-selection-bg", is(t.accent, t.accent_chroma_scale, 0.2)), a("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
  };
  e(Bs.value), ce(Bs, e);
}
function ih() {
  return { preference: Bo, theme: Bs, setPreference(e) {
    Bo.value = e;
  } };
}
const ew = { key: 0, class: "zone-preview-text" }, tw = { class: "zone-list" }, nw = { class: "zone-text" }, aw = { class: "zone-coords" }, lw = { class: "zone-actions" }, ow = { key: 0, class: "zone-empty" }, iw = mn({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
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
  function A() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: c.value, edge: I() });
  }
  return ce(l, A, { immediate: true }), ce(o, A, { immediate: true }), ce([c, d, f, v, S, m, y], P, { immediate: true }), (E, D) => {
    const M = Ye("v-switch"), T = Ye("v-text-field"), F = Ye("v-col"), z = Ye("v-row"), N = Ye("v-select"), X = Ye("v-btn"), Z = Ye("v-divider");
    return Te(), ze(be, null, [b(M, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = (L) => l.value = L), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), b(M, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (L) => o.value = L), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Te(), ze("div", ew, " Preview: (" + Fe(n.previewRect.x1) + "," + Fe(n.previewRect.y1) + ") \u2192 (" + Fe(n.previewRect.x2) + "," + Fe(n.previewRect.y2) + ") ", 1)) : xn("", true), b(z, { dense: "" }, { default: Ee(() => [b(F, { cols: "3" }, { default: Ee(() => [b(T, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (L) => i.value = L), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(F, { cols: "3" }, { default: Ee(() => [b(T, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (L) => r.value = L), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(F, { cols: "3" }, { default: Ee(() => [b(T, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (L) => s.value = L), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(F, { cols: "3" }, { default: Ee(() => [b(T, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (L) => u.value = L), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), b(z, { dense: "", class: "mt-2" }, { default: Ee(() => [b(F, { cols: "6" }, { default: Ee(() => [b(N, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (L) => c.value = L), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(F, { cols: "6" }, { default: Ee(() => [b(N, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (L) => d.value = L), items: x, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), b(z, { dense: "", class: "mt-2" }, { default: Ee(() => [b(F, { cols: "6" }, { default: Ee(() => [b(T, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (L) => f.value = L), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), b(F, { cols: "6" }, { default: Ee(() => [b(T, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = (L) => v.value = L), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Te(), Hn(z, { key: 1, dense: "", class: "mt-2" }, { default: Ee(() => [b(F, { cols: "12" }, { default: Ee(() => [b(T, { modelValue: S.value, "onUpdate:modelValue": D[10] || (D[10] = (L) => S.value = L), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : xn("", true), d.value === "noted" ? (Te(), Hn(z, { key: 2, dense: "", class: "mt-2" }, { default: Ee(() => [b(F, { cols: "12" }, { default: Ee(() => [b(T, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = (L) => m.value = L), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : xn("", true), d.value === "bold-major" || d.value === "noted" ? (Te(), Hn(z, { key: 3, dense: "", class: "mt-1" }, { default: Ee(() => [b(F, { cols: "12" }, { default: Ee(() => [b(M, { modelValue: y.value, "onUpdate:modelValue": D[12] || (D[12] = (L) => y.value = L), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : xn("", true), b(X, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: Ee(() => [...D[14] || (D[14] = [ut(" Add Zone ", -1)])]), _: 1 }), b(Z, { class: "my-3" }), p("div", tw, [(Te(true), ze(be, null, Qt(h.value, (L) => (Te(), ze("div", { key: L.id, class: "zone-row" }, [p("div", nw, [p("div", null, "#" + Fe(w(L)) + " \xB7 " + Fe(L.mode) + " \xB7 " + Fe(L.edge.style), 1), p("div", aw, "(" + Fe(L.x1) + "," + Fe(L.y1) + ") \u2192 (" + Fe(L.x2) + "," + Fe(L.y2) + ")", 1)]), p("div", lw, [b(X, { size: "x-small", variant: "text", onClick: (G) => k(L) }, { default: Ee(() => [ut(Fe(L.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), b(X, { size: "x-small", variant: "text", color: "error", onClick: (G) => a("remove-zone", L.id) }, { default: Ee(() => [...D[15] || (D[15] = [ut("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), h.value.length === 0 ? (Te(), ze("div", ow, "No zones.")) : xn("", true)]), b(X, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: h.value.length === 0, onClick: D[13] || (D[13] = (L) => a("clear-zones")) }, { default: Ee(() => [...D[16] || (D[16] = [ut(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, rw = Kn(iw, [["__scopeId", "data-v-223984b2"]]), sw = mn({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e) {
  const t = K("zones"), n = K(false), a = false;
  return (l, o) => {
    const i = Ye("v-btn"), r = Ye("v-card-title"), s = Ye("v-tab"), u = Ye("v-tabs"), c = Ye("v-tabs-window-item"), d = Ye("v-tabs-window"), f = Ye("v-card-text"), v = Ye("v-card");
    return Ue(a) ? (Te(), ze("aside", { key: 0, class: te(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Te(), Hn(i, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: o[9] || (o[9] = (S) => n.value = false) }, { default: Ee(() => [...o[13] || (o[13] = [ut(" Grid Tools ", -1)])]), _: 1 })) : (Te(), Hn(v, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: Ee(() => [b(r, { class: "zone-title" }, { default: Ee(() => [o[11] || (o[11] = p("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), b(i, { size: "x-small", variant: "text", onClick: o[0] || (o[0] = (S) => n.value = true) }, { default: Ee(() => [...o[10] || (o[10] = [ut("Collapse", -1)])]), _: 1 })]), _: 1 }), b(u, { modelValue: t.value, "onUpdate:modelValue": o[1] || (o[1] = (S) => t.value = S), density: "compact", grow: "" }, { default: Ee(() => [b(s, { value: "zones" }, { default: Ee(() => [...o[12] || (o[12] = [ut("Zones", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), b(f, { class: "pt-2" }, { default: Ee(() => [b(d, { modelValue: t.value, "onUpdate:modelValue": o[8] || (o[8] = (S) => t.value = S) }, { default: Ee(() => [b(c, { value: "zones" }, { default: Ee(() => [b(rw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: o[2] || (o[2] = (S) => l.$emit("add-zone", S)), onUpdateZone: o[3] || (o[3] = (S) => l.$emit("update-zone", S)), onRemoveZone: o[4] || (o[4] = (S) => l.$emit("remove-zone", S)), onClearZones: o[5] || (o[5] = (S) => l.$emit("clear-zones")), onToolChange: o[6] || (o[6] = (S) => l.$emit("tool-change", S)), onDraftChange: o[7] || (o[7] = (S) => l.$emit("draft-change", S)) }, null, 8, ["zones", "preview-rect"])]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2)) : xn("", true);
  };
} }), uw = Kn(sw, [["__scopeId", "data-v-f4e0bbcb"]]), cw = 5, dw = 16, fw = 2160, vw = 0.3, mw = 0.12, hw = mn({ __name: "AppBackground", setup(e) {
  const t = Qm("AppBackground"), n = K(null), a = K(null), l = K(0), o = Gk(), i = Xk(o.gridInfo, l), r = Zk(), s = Jk(i);
  function u(ie) {
    return { ...ie, edge: { ...ie.edge } };
  }
  function c(ie) {
    return ie.map(u);
  }
  const d = Yk({ onSetZones: (ie) => o.post({ type: "set_zones", zones: c(ie) }), onAddZone: (ie) => o.post({ type: "add_zone", zone: u(ie) }), onUpdateZone: (ie) => o.post({ type: "update_zone", zone: u(ie) }), onRemoveZone: (ie) => o.post({ type: "remove_zone", id: ie }), onClearZones: () => o.post({ type: "clear_zones" }) }), f = K(false), v = K(false), S = K({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: m } = ih();
  ce(m, (ie) => {
    o.post({ type: "set_theme", theme: ie });
  });
  function y(ie) {
    const he = Date.now(), fe = S.value;
    return { id: crypto.randomUUID(), x1: ie.x1, y1: ie.y1, x2: ie.x2, y2: ie.y2, mode: fe.mode, edge: { ...fe.edge }, enabled: true, createdAt: he, updatedAt: he };
  }
  s.register("zone", { isEnabled: () => f.value, priority: 1, snapMajor: () => v.value, onCommit(ie) {
    d.addZone(y(ie));
  } });
  function h(ie) {
    d.addZone(ie);
  }
  function w(ie) {
    d.updateZone(ie);
  }
  function I(ie) {
    d.removeZone(ie);
  }
  function V() {
    d.clearZones();
  }
  function x(ie) {
    S.value = ie;
  }
  function g(ie) {
    f.value = ie.enabled, v.value = ie.snapMajor, ie.enabled || s.cancelActiveDrag("zone");
  }
  function C(ie) {
    if (s.anyToolEnabled() || i.isInteractiveTarget(ie.target)) return;
    const he = i.makeSnapshot();
    if (!he) return;
    const fe = eh(ie.clientX, ie.clientY, he), $ = Ak(fe, he);
    t.debug("Click \u2192", ie.clientX, ie.clientY, "\u2192 cell", $.cx, $.cy), o.post({ type: "toggle_cell", cx: $.cx, cy: $.cy, scrollCanvasPx: he.scrollCanvasPx });
  }
  let k = 0, A = 0, P = null, E = null, D = null, M = null, T = 0, F = null, z = null, N = false;
  function X(ie) {
    const he = ie.getBoundingClientRect();
    return { width: Math.max(1, Math.round(he.width * devicePixelRatio)), height: Math.max(1, Math.round(he.height * devicePixelRatio)) };
  }
  function Z(ie) {
    var _a3, _b2;
    const he = (_b2 = (_a3 = ie.devicePixelContentBoxSize) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.inlineSize;
    return typeof he == "number" && he > 0 ? he : Math.max(1, Math.round(ie.contentRect.width * devicePixelRatio));
  }
  function L(ie) {
    const he = Math.round(screen.height * devicePixelRatio);
    return Math.max(ie, he, fw);
  }
  function G() {
    const ie = document.createElement("div");
    ie.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(ie);
    const he = ie.getBoundingClientRect().width;
    return ie.remove(), Math.abs(he - 100) > 0.1;
  }
  function W(ie) {
    return Pk(ie, dw, devicePixelRatio);
  }
  function O(ie, he, fe) {
    const $ = he / devicePixelRatio, R = fe / devicePixelRatio;
    let J = $, re = R;
    if (N) {
      const Q = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      Q > 0 && Q !== 1 && (J = $ / Q, re = R / Q);
    }
    ie.style.width = `${J.toFixed(2)}px`, ie.style.height = `${re.toFixed(2)}px`;
  }
  function j(ie) {
    ie.classList.add("app-bg--hidden"), D !== null && clearTimeout(D), D = window.setTimeout(() => {
      D = null, ie.classList.remove("app-bg--hidden");
    }, 120);
  }
  function se(ie) {
    const he = W(ie);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * he * cw / devicePixelRatio).toFixed(1)}px`);
  }
  function Se(ie, he) {
    k = he, O(ie, k, A), j(ie), se(k), o.post({ type: "resize", width: k, height: A });
  }
  function ae(ie) {
    F === null && (F = requestAnimationFrame(() => {
      F = null, !(T === 0 || T === k) && Se(ie, T);
    }));
  }
  function me(ie) {
    let he = false;
    const fe = () => {
      if (he) return;
      const $ = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), R = () => {
        he || (ie(), fe());
      };
      $.addEventListener("change", R, { once: true });
    };
    return fe(), () => {
      he = true;
    };
  }
  return Ct(() => {
    const ie = n.value, he = a.value;
    if (!ie || !he) return;
    N = G();
    const fe = X(ie);
    k = fe.width, A = L(fe.height), he.width = k, he.height = A, O(he, k, A);
    const $ = he.transferControlToOffscreen(), R = W(k);
    se(k), o.init($, R), t.debug("Worker spawned, gridPitch", R.toFixed(2)), o.on("ready", (Q) => {
      t.info(`${Q.backend.toUpperCase()} renderer active`), o.post({ type: "set_theme", theme: m.value }), o.post({ type: "set_zones", zones: c(d.zones.value) });
    }), o.on("zones_state", (Q) => d.syncFromWorker(Q.zones)), o.on("zones_error", (Q) => t.error("Zone update rejected:", Q.message)), o.on("startup_breakdown", (Q) => {
      const le = (U) => `${U.toFixed(0)}ms`, pe = ["Startup breakdown:", `  total            ${le(Q.phases.total)}`, `  gpu_probe        ${le(Q.phases.gpuProbe)}`, `  wasm_import      ${le(Q.phases.wasmImport)}`, `  new_offscreen    ${le(Q.phases.newOffscreen)}`, `  ready_post       ${le(Q.phases.readyPost)}`], de = Q.phases.newOffscreenPhases;
      de && (pe.push("  new_offscreen sub-phases:"), pe.push(`    device_request   ${le(de.deviceRequest)}`), pe.push(`    panel_init       ${le(de.panelInit)}`), pe.push(`    seeding          ${le(de.seeding)}`), pe.push(`    simulation_init  ${le(de.simulationInit)}`), pe.push(`    renderer_init    ${le(de.rendererInit)}`));
    }), o.on("gpu_pass_breakdown", (Q) => {
      const le = (de) => de === null ? "\u2014" : `${de.toFixed(2)}ms`, pe = Q.durations;
      t.info(`GPU pass breakdown (frame ${Q.frame}):
  compute_tick   ${le(pe.computeTickMs)}
  xor_edit       ${le(pe.xorEditMs)}
  or_edit        ${le(pe.orEditMs)}
  render_pass    ${le(pe.renderPassMs)}`);
    }), o.on("error", (Q) => {
      Q.phase === "gpu-init" ? t.debug(`GPU unavailable (${Q.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${Q.phase}]:`, Q.message);
    }), document.addEventListener("click", C), M = s.attachListeners(), P = document.querySelector(".v-main");
    let J = 0, re = 0;
    r.start(() => {
      o.post({ type: "frame" }), J = ((P == null ? void 0 : P.scrollTop) || window.scrollY) * vw * devicePixelRatio, re += (J - re) * mw, Math.abs(re - l.value) > 0.1 && (l.value = re, o.post({ type: "scroll", scrollY: re }));
    }), E = new ResizeObserver(([Q]) => {
      if (!a.value) return;
      const le = Z(Q);
      le <= 0 || le === k || (T = le, ae(a.value));
    }), E.observe(ie), z = me(() => {
      if (!n.value || !a.value) return;
      N = G();
      const Q = Math.round(n.value.getBoundingClientRect().height * devicePixelRatio);
      A = L(Q), Se(a.value, k);
    });
  }), dr(() => {
    r.stop(), E == null ? void 0 : E.disconnect(), z == null ? void 0 : z(), D !== null && (clearTimeout(D), D = null), F !== null && (cancelAnimationFrame(F), F = null), document.removeEventListener("click", C), M == null ? void 0 : M(), o.terminate();
  }), (ie, he) => (Te(), ze(be, null, [p("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [p("canvas", { ref_key: "canvasRef", ref: a, class: "app-bg" }, null, 512)], 512), Ue(s).previewStyle.value ? (Te(), ze("div", { key: 0, class: "zone-preview-overlay", style: ge(Ue(s).previewStyle.value) }, null, 4)) : xn("", true), b(uw, { zones: Ue(d).zones.value, "preview-rect": Ue(s).previewRect.value, onAddZone: h, onUpdateZone: w, onRemoveZone: I, onClearZones: V, onToolChange: g, onDraftChange: x }, null, 8, ["zones", "preview-rect"])], 64));
} }), gw = Kn(hw, [["__scopeId", "data-v-f27a45f4"]]);
function rh(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ze = typeof window < "u", Xu = Ze && "IntersectionObserver" in window, yw = Ze && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), lf = Ze && "EyeDropper" in window, Zu = Ze && "matchMedia" in window && typeof window.matchMedia == "function", Wn = () => Zu && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function of(e, t, n) {
  bw(e, t), t.set(e, n);
}
function bw(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function rf(e, t, n) {
  return e.set(sh(e, t), n), n;
}
function ea(e, t) {
  return e.get(sh(e, t));
}
function sh(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function uh(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function ol(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), uh(e, t.split("."), n));
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
  if (Array.isArray(t)) return uh(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function On(e) {
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
function $s(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Ju(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const Fs = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function ch(e) {
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
function Ls(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function Le(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const dh = /^on[^a-z]/, Qu = (e) => dh.test(e), pw = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Sw = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function kw(e) {
  return e.isComposing && Sw.includes(e.key);
}
function qn(e) {
  const [t, n] = Ls(e, [dh]), a = Le(t, pw), [l, o] = Ls(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function lt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function fh(e, t) {
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
function sf(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function uf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function cf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function ww(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function df(e) {
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
    if ($s(o) && $s(i)) {
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
function vh(e) {
  return e.map((t) => t.type === be ? vh(t.children) : t).flat();
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
class mh {
  constructor(t) {
    of(this, _l, []), of(this, Ua, 0), this.size = t;
  }
  get isFull() {
    return ea(_l, this).length === this.size;
  }
  push(t) {
    ea(_l, this)[ea(Ua, this)] = t, rf(Ua, this, (ea(Ua, this) + 1) % this.size);
  }
  values() {
    return ea(_l, this).slice(ea(Ua, this)).concat(ea(_l, this).slice(0, ea(Ua, this)));
  }
  clear() {
    ea(_l, this).length = 0, rf(Ua, this, 0);
  }
}
function xw(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function ec(e) {
  const t = Tt({});
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
function hh(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Bt = () => [Function, Array];
function ff(e, t) {
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
function gh(e, t, n) {
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
    const a = gh(n, t);
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
  return e.some((t) => Eo(t) ? t.type === Ut ? false : t.type !== be || hr(t.children) : true) ? e : null;
}
function ki(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function Cw(e, t) {
  if (!Ze || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function _w(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function $o() {
  const e = ue(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => Ju(e.value) }), t;
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
function Vw(e, t, n) {
  const a = new RegExp(`[\\d\\-${Ui(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${Ui(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function Iw(e) {
  const t = {};
  for (const n in e) t[tn(n)] = e[n];
  return t;
}
function Pw(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function vf(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : gt(n) || Ia(n) || Jo(n) ? t(Pe(n)) : $s(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const yh = ["top", "bottom"], Aw = ["start", "end", "left", "right"];
function Rs(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = ji(yh, n) ? "start" : ji(Aw, n) ? "top" : "center"), { side: Os(n, t), align: Os(a, t) };
}
function Os(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function rs(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function ss(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function mf(e) {
  return { side: e.align, align: e.side };
}
function hf(e) {
  return ji(yh, e.side) ? "y" : "x";
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
function gf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function bh(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new pn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new pn(e);
}
function Tw(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new pn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new pn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new pn(e);
}
function tc(e) {
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
function Dw(e, t) {
  Object.keys(t).forEach((n) => {
    if (Qu(n)) {
      const a = hh(n), l = Di.get(e);
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
function Ew(e, t) {
  Object.keys(t).forEach((n) => {
    if (Qu(n)) {
      const a = hh(n), l = Di.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Vl = 2.4, yf = 0.2126729, bf = 0.7151522, pf = 0.072175, Mw = 0.55, Bw = 0.58, $w = 0.57, Fw = 0.62, wi = 0.03, Sf = 1.45, Lw = 5e-4, Rw = 1.25, Ow = 1.25, kf = 0.078, wf = 12.82051282051282, xi = 0.06, xf = 1e-3;
function Cf(e, t) {
  const n = (e.r / 255) ** Vl, a = (e.g / 255) ** Vl, l = (e.b / 255) ** Vl, o = (t.r / 255) ** Vl, i = (t.g / 255) ** Vl, r = (t.b / 255) ** Vl;
  let s = n * yf + a * bf + l * pf, u = o * yf + i * bf + r * pf;
  if (s <= wi && (s += (wi - s) ** Sf), u <= wi && (u += (wi - u) ** Sf), Math.abs(u - s) < Lw) return 0;
  let c;
  if (u > s) {
    const d = (u ** Mw - s ** Bw) * Rw;
    c = d < xf ? 0 : d < kf ? d - d * wf * xi : d - xi;
  } else {
    const d = (u ** Fw - s ** $w) * Ow;
    c = d > -xf ? 0 : d > -kf ? d - d * wf * xi : d + xi;
  }
  return c * 100;
}
const Yi = 0.20689655172413793, Nw = (e) => e > Yi ** 3 ? Math.cbrt(e) : e / (3 * Yi ** 2) + 4 / 29, Hw = (e) => e > Yi ? e ** 3 : 3 * Yi ** 2 * (e - 4 / 29);
function ph(e) {
  const t = Nw, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Sh(e) {
  const t = Hw, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const zw = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Ww = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, jw = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Uw = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function kh(e) {
  const t = Array(3), n = Ww, a = zw;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(Xe(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function nc(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = Uw, i = jw;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function Ns(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Yw(e) {
  return Ns(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const _f = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Gw = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => Vf({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => Vf({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => jn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => jn({ h: e, s: t, v: n, a }) };
function un(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && _f.test(e)) {
    const { groups: t } = e.match(_f), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return Gw[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), _h(t);
  } else if (typeof e == "object") {
    if (Xa(e, ["r", "g", "b"])) return e;
    if (Xa(e, ["h", "s", "l"])) return jn(ac(e));
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
function Vf(e) {
  return jn(ac(e));
}
function li(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function Hs(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function ac(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function wh(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function xh(e) {
  return wh(jn(e));
}
function Ci(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Ch(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[Ci(t), Ci(n), Ci(a), l !== void 0 ? Ci(Math.round(l * 255)) : ""].join("")}`;
}
function _h(e) {
  e = qw(e);
  let [t, n, a, l] = ww(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function Kw(e) {
  const t = _h(e);
  return li(t);
}
function Vh(e) {
  return Ch(jn(e));
}
function qw(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = uf(uf(e, 6), 8, "F")), e;
}
function Xw(e, t) {
  const n = ph(nc(e));
  return n[0] = n[0] + t * 10, kh(Sh(n));
}
function Zw(e, t) {
  const n = ph(nc(e));
  return n[0] = n[0] - t * 10, kh(Sh(n));
}
function zs(e) {
  const t = un(e);
  return nc(t)[1];
}
function Jw(e, t) {
  const n = zs(e), a = zs(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function Ih(e) {
  const t = Math.abs(Cf(un(0), un(e)));
  return Math.abs(Cf(un(16777215), un(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function H(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const ke = H({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
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
function Qw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : St("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Ul = Symbol.for("vuetify:defaults");
function e0(e) {
  return K(e);
}
function lc() {
  const e = He(Ul);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function mt(e, t) {
  const n = lc(), a = K(e), l = _(() => {
    if (Ue(t == null ? void 0 : t.disabled)) return n.value;
    const i = Ue(t == null ? void 0 : t.scoped), r = Ue(t == null ? void 0 : t.reset), s = Ue(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let u = Rt(a.value, { prev: n.value });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = Rt(Rt(u, { prev: u }), u[s])), u;
    }
    return u.prev ? Rt(u.prev, u) : u;
  });
  return it(Ul, l), l;
}
function t0(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Ja(t)] < "u");
}
function n0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : lc();
  const a = St("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = l.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (t0(a.vnode, u)) return c;
    const d = (_b2 = l.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = ue();
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
    const s = Qw(Ul, a);
    it(Ul, _(() => i.value ? Rt((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
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
      const o = lc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = n0(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? Kt : mn)(t);
}
function a0(e, t) {
  return t.props = e, t;
}
function ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({ name: n ?? Gn(tn(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...ke() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a3;
      return ma(a.tag, { class: [e, a.class], style: a.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function l0(e, t, n, a) {
  if (!n || Ea(e) || Ea(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function o0(e, t, n) {
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
  const l = o0(e, t, n);
  return l || (l0(e, t, n, true), a.every((o) => Dt(e[o], t[o], n)));
}
function Ph(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Fo = "cubic-bezier(0.4, 0, 0.2, 1)", If = "cubic-bezier(0.0, 0, 0.2, 1)", Pf = "cubic-bezier(0.4, 0, 1, 1)", i0 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function cn(e, t, n) {
  return Object.keys(e).filter((a) => Qu(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ai(e[l], o, n(o)), a), {});
}
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? r0(e) : oc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Gi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (oc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function oc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function r0(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function s0(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function u0(e) {
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
function c0(e, t) {
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
const _e = [String, Function, Object, Array], Ws = Symbol.for("vuetify:icons"), yr = H({ icon: { type: _e }, tag: { type: [String, Object, Function], required: true } }, "icon"), js = ee()({ name: "VComponentIcon", props: yr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return b(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? b(a, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), ic = Kt({ name: "VSvgIcon", inheritAttrs: false, props: yr(), setup(e, t) {
  let { attrs: n } = t;
  return () => b(e.tag, Y(n, { style: null }), { default: () => [p("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? p("path", { d: a[0], "fill-opacity": a[1] }, null) : p("path", { d: a }, null)) : p("path", { d: e.icon }, null)])] });
} }), d0 = Kt({ name: "VLigatureIcon", props: yr(), setup(e) {
  return () => b(e.tag, null, { default: () => [e.icon] });
} }), rc = Kt({ name: "VClassIcon", props: yr(), setup(e) {
  return () => b(e.tag, { class: te(e.icon) }, null);
} }), f0 = (e) => {
  const t = He(Ws);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const a = tt(e);
    if (!a) return { component: js };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a3 = t.aliases) == null ? void 0 : _a3[l.slice(1)])), Array.isArray(l)) return { component: ic, icon: l };
    if (typeof l != "string") return { component: js, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, v0 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, m0 = { component: (e) => ma(rc, { ...e, class: "mdi" }) };
function h0() {
  return { svg: { component: ic }, class: { component: rc } };
}
function g0(e) {
  const t = h0(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = m0), Rt({ defaultSet: n, sets: t, aliases: { ...v0, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
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
function Ce(e, t, n) {
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
const y0 = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Af = "$vuetify.", Tf = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), Ah = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(Af)) return Tf(a, o);
  const r = a.replace(Af, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ol(s, r, null);
  return c || (`${a}${e.value}`, c = ol(u, r, null)), c || (c = a), typeof c != "string" && (c = a), Tf(c, o);
};
function sc(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Th(e, t) {
  return sc(e, t)(0.1).includes(",") ? "," : ".";
}
function us(e, t, n) {
  const a = Ce(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, ce(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function Dh(e) {
  return (t) => {
    const n = us(t, "locale", e.current), a = us(t, "fallback", e.fallback), l = us(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => Th(n, a)), t: Ah(n, a, l), n: sc(n, a), provide: Dh({ current: n, fallback: a, messages: l }) };
  };
}
function b0(e) {
  const t = ue((e == null ? void 0 : e.locale) ?? "en"), n = ue((e == null ? void 0 : e.fallback) ?? "en"), a = K({ en: y0, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Th(t, n)), t: Ah(t, n, a), n: sc(t, n), provide: Dh({ current: t, fallback: n, messages: a }) };
}
const Yl = Symbol.for("vuetify:locale");
function p0(e) {
  return e.name != null;
}
function S0(e) {
  const t = (e == null ? void 0 : e.adapter) && p0(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : b0(e), n = w0(t, e);
  return { ...t, ...n };
}
function Je() {
  const e = He(Yl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Eh(e) {
  const t = He(Yl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = x0(n, t.rtl, e), l = { ...n, ...a };
  return it(Yl, l), l;
}
function k0() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function w0(e, t) {
  const n = K((t == null ? void 0 : t.rtl) ?? k0()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function x0(e, t, n) {
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
function C0(e, t, n) {
  var _a3;
  const a = [];
  let l = [];
  const o = Mh(e), i = Bh(e), r = n ?? ((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
function _0(e, t) {
  var _a3;
  const n = new Date(e), a = ((((_a3 = oi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function Mh(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Bh(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function V0(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const I0 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function $h(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (I0.test(e)) return V0(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Df = new Date(2e3, 0, 2);
function P0(e, t, n) {
  var _a3;
  const a = t ?? ((_a3 = oi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return On(7).map((l) => {
    const o = new Date(Df);
    return o.setDate(Df.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function A0(e, t, n, a) {
  const l = $h(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function T0(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = cf(String(n.getMonth() + 1), 2, "0"), o = cf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function D0(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function E0(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function M0(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function el(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function B0(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function $0(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Lo(e) {
  return e.getFullYear();
}
function F0(e) {
  return e.getMonth();
}
function L0(e, t, n, a) {
  const l = oi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? R0(e, t, o, a) : O0(e, t, o, i);
}
function R0(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Co(e, t, n), i = el(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Lo(o);
  s < Lo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? el(u, -c) : el(u, 7 - c);
  return 1 + qi(uc(o), Ro(d), "weeks");
}
function O0(e, t, n, a) {
  const l = Co(e, t, n), o = el(Co(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - qi(f, Co(f, t, n), "days");
  }
  let r = Lo(l);
  r < Lo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? el(s, u - 7) : el(s, u);
  return 1 + qi(uc(l), Ro(c), "weeks");
}
function N0(e) {
  return e.getDate();
}
function H0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function z0(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function W0(e) {
  return e.getHours();
}
function j0(e) {
  return e.getMinutes();
}
function U0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Y0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function G0(e, t) {
  return Ki(e, t[0]) && X0(e, t[1]);
}
function K0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Ki(e, t) {
  return e.getTime() > t.getTime();
}
function q0(e, t) {
  return Ki(Ro(e), Ro(t));
}
function X0(e, t) {
  return e.getTime() < t.getTime();
}
function Ef(e, t) {
  return e.getTime() === t.getTime();
}
function Z0(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function J0(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Q0(e, t) {
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
function ex(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function tx(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function nx(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function ax(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function lx(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Ro(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function uc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class ox {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return $h(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return T0(this, t);
  }
  parseISO(t) {
    return D0(t);
  }
  addMinutes(t, n) {
    return E0(t, n);
  }
  addHours(t, n) {
    return M0(t, n);
  }
  addDays(t, n) {
    return el(t, n);
  }
  addWeeks(t, n) {
    return B0(t, n);
  }
  addMonths(t, n) {
    return $0(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return C0(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Co(t, this.locale, a);
  }
  endOfWeek(t) {
    return _0(t, this.locale);
  }
  startOfMonth(t) {
    return Mh(t);
  }
  endOfMonth(t) {
    return Bh(t);
  }
  format(t, n) {
    return A0(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Ef(t, n);
  }
  isValid(t) {
    return K0(t);
  }
  isWithinRange(t, n) {
    return G0(t, n);
  }
  isAfter(t, n) {
    return Ki(t, n);
  }
  isAfterDay(t, n) {
    return q0(t, n);
  }
  isBefore(t, n) {
    return !Ki(t, n) && !Ef(t, n);
  }
  isSameDay(t, n) {
    return Z0(t, n);
  }
  isSameMonth(t, n) {
    return J0(t, n);
  }
  isSameYear(t, n) {
    return Q0(t, n);
  }
  setMinutes(t, n) {
    return tx(t, n);
  }
  setHours(t, n) {
    return ex(t, n);
  }
  setMonth(t, n) {
    return nx(t, n);
  }
  setDate(t, n) {
    return ax(t, n);
  }
  setYear(t, n) {
    return lx(t, n);
  }
  getDiff(t, n, a) {
    return qi(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return P0(this.locale, a, n);
  }
  getYear(t) {
    return Lo(t);
  }
  getMonth(t) {
    return F0(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return L0(t, this.locale, l, o);
  }
  getDate(t) {
    return N0(t);
  }
  getNextMonth(t) {
    return H0(t);
  }
  getPreviousMonth(t) {
    return z0(t);
  }
  getHours(t) {
    return W0(t);
  }
  getMinutes(t) {
    return j0(t);
  }
  startOfDay(t) {
    return Ro(t);
  }
  endOfDay(t) {
    return uc(t);
  }
  startOfYear(t) {
    return U0(t);
  }
  endOfYear(t) {
    return Y0(t);
  }
}
const Fh = Symbol.for("vuetify:date-options"), Mf = Symbol.for("vuetify:date-adapter");
function ix(e, t) {
  const n = Rt({ adapter: ox, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Rh(n, t) };
}
function rx(e, t, n) {
  const a = Lh(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function Lh(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function Rh(e, t) {
  const n = Tt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
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
const br = ["sm", "md", "lg", "xl", "xxl"], Us = Symbol.for("vuetify:display"), Bf = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, sx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bf;
  return Rt(Bf, e);
};
function $f(e) {
  return Ze && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Ff(e) {
  return Ze && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Lf(e) {
  const t = Ze && !e ? window.navigator.userAgent : "ssr";
  function n(S) {
    return !!t.match(S);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: yw, ssr: t === "ssr" };
}
function ux(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = sx(e), l = ue(Ff(t)), o = ue(Lf(t)), i = Tt({}), r = ue($f(t));
  function s() {
    l.value = Ff(), r.value = $f();
  }
  function u() {
    s(), o.value = Lf();
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
  const n = He(Us);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const Oh = Symbol.for("vuetify:goto");
function Nh() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: i0 };
}
function cx(e) {
  return cc(e) ?? (document.scrollingElement || document.body);
}
function cc(e) {
  return typeof e == "string" ? document.querySelector(e) : Ju(e);
}
function cs(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = cc(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function dx(e, t) {
  return { rtl: t.isRtl, options: Rt(Nh(), e) };
}
async function Rf(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Rt((a == null ? void 0 : a.options) ?? Nh(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : cc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : cx(o.container), u = Wn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = cs(r, n, i);
  else if (c = cs(r, n, i) - cs(s, n, i), o.layout) {
    const S = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    S && (c -= parseInt(S, 10));
  }
  c += o.offset, c = vx(s, c, !!i, !!n);
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
function fx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = He(Oh), { isRtl: n } = _t();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return Rf(o, Rt(e, i), false, a);
  }
  return l.horizontal = async (o, i) => Rf(o, Rt(e, i), true, a), l;
}
function vx(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), Xe(t, s, u);
}
const Oo = Symbol.for("vuetify:theme"), We = H({ theme: String }, "theme");
function Of() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function mx() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Of();
  const t = Of();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Rt(o, l);
  }
  return Rt(t, { ...e, themes: n });
}
function Ya(e, t, n, a) {
  e.push(`${bx(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function Nf(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = un(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${zs(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? un(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function hx(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? Xw : Zw;
    for (const i of On(n[l], 1)) a[`${e}-${l}-${i}`] = Ch(o(un(t), i));
  }
  return a;
}
function gx(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...hx(a, l, t) });
  }
  return n;
}
function yx(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = un(e[n]);
    t[a] = Ih(l);
  }
  return t;
}
function bx(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function px(e, t, n) {
  const a = Sx(e, t);
  a && (a.innerHTML = n);
}
function Sx(e, t) {
  if (!Ze) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function kx(e) {
  const t = mx(e), n = ue(t.defaultTheme), a = K(t.themes), l = ue("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(h) {
    n.value = h;
  } }), i = _(() => {
    const h = {};
    for (const [w, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...gx(I.colors, t.variations) };
      h[w] = { ...I, colors: { ...V, ...yx(V) } };
    }
    return h;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = _(() => {
    var _a3;
    const h = [], w = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && Ya(h, ":root", ["color-scheme: dark"], t.scope), Ya(h, ":root", Nf(r.value, t.prefix), t.scope);
    for (const [x, g] of Object.entries(i.value)) Ya(h, `.${t.prefix}theme--${x}`, [`color-scheme: ${g.dark ? "dark" : "normal"}`, ...Nf(g, t.prefix)], t.scope);
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
  if (Zu) {
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
        px(t.stylesheetId, t.cspNonce, u.value);
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
    return w === "value" && rh(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(h, w, I);
  } });
  return { install: f, change: v, cycle: S, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: y, current: r } };
}
function Ke(e) {
  St("provideTheme");
  const t = He(Oo, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return it(Oo, o), o;
}
function pr() {
  St("useTheme");
  const e = He(Oo, null);
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
const No = Symbol.for("vuetify:layout"), Hh = Symbol.for("vuetify:layout-item"), Hf = 1e3, zh = H({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), gl = H({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Wh() {
  const e = He(No);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function yl(e) {
  const t = He(No);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Mt()}`, a = St("useLayoutItem");
  it(Hh, { id: n });
  const l = ue(false);
  Wu(() => l.value = true), gm(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return Nt(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const wx = (e, t, n, a) => {
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
function jh(e) {
  const t = He(No, null), n = _(() => t ? t.rootZIndex.value - 100 : Hf), a = K([]), l = Tt(/* @__PURE__ */ new Map()), o = Tt(/* @__PURE__ */ new Map()), i = Tt(/* @__PURE__ */ new Map()), r = Tt(/* @__PURE__ */ new Map()), s = Tt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = Sn(), d = _(() => {
    const g = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const k of C.filter((A) => A.includes(":"))) {
      const [A, P] = k.split(":");
      if (!a.value.includes(A) || !a.value.includes(P)) continue;
      const E = l.get(A), D = l.get(P), M = o.get(A), T = o.get(P);
      !E || !D || !M || !T || (g.set(P, { position: E.value, amount: parseInt(M.value, 10) }), g.set(A, { position: D.value, amount: -parseInt(T.value, 10) }));
    }
    return g;
  }), f = _(() => {
    const g = [...new Set([...i.values()].map((k) => k.value))].sort((k, A) => k - A), C = [];
    for (const k of g) {
      const A = a.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === k;
      });
      C.push(...A);
    }
    return wx(C, l, o, r);
  }), v = _(() => !Array.from(s.values()).some((g) => g.value)), S = _(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": ve(S.value.left), "--v-layout-right": ve(S.value.right), "--v-layout-top": ve(S.value.top), "--v-layout-bottom": ve(S.value.bottom), ...v.value ? void 0 : { transition: "none" } })), y = _(() => f.value.slice(1).map((g, C) => {
    let { id: k } = g;
    const { layer: A } = f.value[C], P = o.get(k), E = l.get(k);
    return { id: k, ...A, size: Number(P.value), position: E.value };
  })), h = (g) => y.value.find((C) => C.id === g), w = St("createLayout"), I = ue(false);
  return Ct(() => {
    I.value = true;
  }), it(No, { register: (g, C) => {
    let { id: k, order: A, position: P, layoutSize: E, elementSize: D, active: M, disableTransitions: T, absolute: F } = C;
    i.set(k, A), l.set(k, P), o.set(k, E), r.set(k, M), T && s.set(k, T);
    const N = Ml(Hh, w == null ? void 0 : w.vnode).indexOf(g);
    N > -1 ? a.value.splice(N, 0, k) : a.value.push(k);
    const X = _(() => y.value.findIndex((W) => W.id === k)), Z = _(() => n.value + f.value.length * 2 - X.value * 2), L = _(() => {
      const W = P.value === "left" || P.value === "right", O = P.value === "right", j = P.value === "bottom", se = D.value ?? E.value, Se = se === 0 ? "%" : "px", ae = { [P.value]: 0, zIndex: Z.value, transform: `translate${W ? "X" : "Y"}(${(M.value ? 0 : -(se === 0 ? 100 : se)) * (O || j ? -1 : 1)}${Se})`, position: F.value || n.value !== Hf ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!I.value) return ae;
      const me = y.value[X.value], ie = d.value.get(k);
      return ie && (me[ie.position] += ie.amount), { ...ae, height: W ? `calc(100% - ${me.top}px - ${me.bottom}px)` : D.value ? `${D.value}px` : void 0, left: O ? void 0 : `${me.left}px`, right: O ? `${me.right}px` : void 0, top: P.value !== "bottom" ? `${me.top}px` : void 0, bottom: P.value !== "top" ? `${me.bottom}px` : void 0, width: W ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${me.left}px - ${me.right}px)` };
    }), G = _(() => ({ zIndex: Z.value - 1 }));
    return { layoutItemStyles: L, layoutItemScrimStyles: G, zIndex: Z };
  }, unregister: (g) => {
    i.delete(g), l.delete(g), o.delete(g), r.delete(g), s.delete(g), a.value = a.value.filter((C) => C !== g);
  }, mainRect: S, mainStyles: m, getLayoutItem: h, items: y, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: h, items: y, layoutRect: c, layoutRef: u };
}
const xx = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function zf(e) {
  const t = e.toLowerCase();
  return xx[t] || t;
}
function Uh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(zf(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [zf(e)], separators: o } : { keys: l, separators: o };
}
function Cx(e) {
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
  return i.every((u) => Uh(u).keys.length > 0) ? i : [];
}
function Yh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Rt(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Nl();
  return r.run(() => {
    const s = e0(a.defaults), u = ux(a.display, a.ssr), c = kx(a.theme), d = g0(a.icons), f = S0(a.locale), v = ix(a.date, f), S = dx(a.goTo, f);
    function m(h) {
      for (const I in i) h.directive(I, i[I]);
      for (const I in o) h.component(I, o[I]);
      for (const I in l) h.component(I, Kt({ ...l[I], name: I, aliasName: l[I].name }));
      const w = Nl();
      if (w.run(() => {
        c.install(h);
      }), h.onUnmount(() => w.stop()), h.provide(Ul, s), h.provide(Us, u), h.provide(Oo, c), h.provide(Ws, d), h.provide(Yl, f), h.provide(Fh, v.options), h.provide(Mf, v.instance), h.provide(Oh, S), Ze && a.ssr) if (h.$nuxt) h.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: I } = h;
        h.mount = function() {
          const V = I(...arguments);
          return Ae(() => u.update()), h.mount = I, V;
        };
      }
      h.mixin({ computed: { $vuetify() {
        return Tt({ defaults: Il.call(this, Ul), display: Il.call(this, Us), theme: Il.call(this, Oo), icons: Il.call(this, Ws), locale: Il.call(this, Yl), date: Il.call(this, Mf) });
      } } });
    }
    function y() {
      r.stop();
    }
    return { install: m, unmount: y, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: S };
  });
}
const _x = "3.12.1";
Yh.version = _x;
function Il(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const Vx = mn({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = ih();
  return (n, a) => {
    const l = Ye("v-icon"), o = Ye("v-tooltip"), i = Ye("v-btn"), r = Ye("v-btn-toggle");
    return Te(), Hn(r, { modelValue: Ue(t), "onUpdate:modelValue": a[0] || (a[0] = (s) => gt(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Ee(() => [b(i, { value: "light", icon: "mdi-weather-sunny", size: "small" }, { default: Ee(() => [b(l, null, { default: Ee(() => [...a[1] || (a[1] = [ut("mdi-weather-sunny", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }), b(i, { value: "system", icon: "mdi-theme-light-dark", size: "small" }, { default: Ee(() => [b(l, null, { default: Ee(() => [...a[2] || (a[2] = [ut("mdi-theme-light-dark", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }), b(i, { value: "dark", icon: "mdi-weather-night", size: "small" }, { default: Ee(() => [b(l, null, { default: Ee(() => [...a[3] || (a[3] = [ut("mdi-weather-night", -1)])]), _: 1 }), b(o, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 })]), _: 1 }, 8, ["modelValue"]);
  };
} }), Wf = Kn(Vx, [["__scopeId", "data-v-c9886728"]]), Ix = mn({ __name: "AppHeader", setup(e) {
  const t = [{ label: "Demos", href: "#projects" }, { label: "Resume", href: "#resume" }, { label: "Contact", href: "#contact" }], { smAndDown: n } = nn(), a = K(false);
  return (l, o) => {
    const i = Ye("v-app-bar-title"), r = Ye("v-btn"), s = Ye("v-list-item"), u = Ye("v-list"), c = Ye("v-menu"), d = Ye("v-app-bar");
    return Te(), Hn(d, { elevation: "0", color: "background", border: "b" }, { append: Ee(() => [Ue(n) ? (Te(), ze(be, { key: 0 }, [b(Wf), b(c, { modelValue: a.value, "onUpdate:modelValue": o[1] || (o[1] = (f) => a.value = f), location: "bottom end", offset: "10" }, { activator: Ee(({ props: f }) => [b(r, Y(f, { icon: "mdi-menu", variant: "text", size: "small", class: "menu-ink", "aria-label": "Open navigation menu" }), null, 16)]), default: Ee(() => [b(u, { class: "header-menu-list", density: "compact" }, { default: Ee(() => [(Te(), ze(be, null, Qt(t, (f) => b(s, { key: f.label, href: f.href, title: f.label, onClick: o[0] || (o[0] = (v) => a.value = false) }, null, 8, ["href", "title"])), 64))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64)) : (Te(), ze(be, { key: 1 }, [(Te(), ze(be, null, Qt(t, (f) => b(r, { key: f.label, href: f.href, variant: "text", size: "default", class: "nav-ink" }, { default: Ee(() => [ut(Fe(f.label), 1)]), _: 2 }, 1032, ["href"])), 64)), b(Wf)], 64))]), default: Ee(() => [b(i, { class: "header-title" }, { default: Ee(() => [...o[2] || (o[2] = [p("span", { class: "title-ink font-weight-bold" }, null, -1)])]), _: 1 })]), _: 1 });
  };
} }), Px = { class: "text-medium-emphasis text-caption" }, Ax = mn({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = Ye("v-footer");
    return Te(), Hn(l, { color: "background", border: "t", class: "app-footer justify-center" }, { default: Ee(() => [p("span", Px, " \xA9 " + Fe(Ue(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), Tx = Kn(Ax, [["__scopeId", "data-v-ddd3c1d7"]]), wn = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, Gh = [{ label: "Location", icon: "mdi-map-marker-outline", href: "https://maps.google.com/?q=Bentonville,+AR", display: wn.location }, { label: "Email", icon: "mdi-email-outline", href: `mailto:${wn.email}`, display: wn.email }, { label: "Phone", icon: "mdi-phone-outline", href: `tel:${wn.phone.replace(/[^\d+]/g, "")}`, display: wn.phone }, { label: "GitHub", icon: "mdi-github", href: wn.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: "mdi-linkedin", href: wn.linkedin, display: "bits-for-bread" }], Dx = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], Ex = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], Mx = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], Bx = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], $x = { id: "hero", class: "hero-section" }, Fx = { class: "hero-frame glass-panel glass-panel--strong" }, Lx = { class: "hero-main" }, Rx = { class: "hero-kicker glass-chip section-kicker" }, Ox = { class: "hero-name section-heading" }, Nx = { class: "hero-tagline" }, Hx = { class: "hero-bio" }, zx = { class: "hero-actions" }, Wx = { href: "#projects", class: "hero-link hero-link--primary" }, jx = { class: "hero-rail" }, Ux = { class: "hero-note quiet-sheet" }, Yx = { class: "skills-block" }, Gx = { class: "skill-label" }, Kx = { class: "skill-items" }, qx = { class: "hero-note quiet-sheet" }, Xx = { class: "hero-links" }, Zx = ["href"], Jx = mn({ __name: "HeroSection", setup(e) {
  const t = Gh.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, a) => {
    const l = Ye("v-icon"), o = Ye("v-container");
    return Te(), ze("section", $x, [b(o, { class: "hero-container" }, { default: Ee(() => [p("div", Fx, [p("div", Lx, [p("span", Rx, [b(l, { icon: "mdi-map-marker-outline", class: "hero-location-icon" }), ut(Fe(Ue(wn).location), 1)]), p("h1", Ox, Fe(Ue(wn).name), 1), p("p", Nx, Fe(Ue(wn).tagline), 1), p("p", Hx, Fe(Ue(wn).bio), 1), p("div", zx, [p("a", Wx, [a[0] || (a[0] = ut(" View selected work ", -1)), b(l, { icon: "mdi-arrow-right", class: "hero-link-icon" })]), a[1] || (a[1] = p("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), p("aside", jx, [p("section", Ux, [a[2] || (a[2] = p("p", { class: "hero-note-label" }, "Capabilities", -1)), p("div", Yx, [(Te(true), ze(be, null, Qt(Ue(Dx), (i) => (Te(), ze("div", { key: i.label, class: "skill-group" }, [p("span", Gx, Fe(i.label), 1), p("span", Kx, Fe(i.items.join("  \xB7  ")), 1)]))), 128))])]), p("section", qx, [a[3] || (a[3] = p("p", { class: "hero-note-label" }, "Elsewhere", -1)), p("div", Xx, [(Te(true), ze(be, null, Qt(Ue(t), (i) => (Te(), ze("a", { key: i.label, href: i.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [b(l, { icon: i.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), p("span", null, Fe(i.display ?? i.label), 1)], 8, Zx))), 128))])])])])]), _: 1 })]);
  };
} }), Qx = Kn(Jx, [["__scopeId", "data-v-156c5ed8"]]), Ys = { demo: { ariaLabel: "Live demo", icon: "mdi-play-circle-outline", label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: "mdi-github", label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: "mdi-text-box-outline", label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: "mdi-play-circle-outline", label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: "mdi-file-document-outline", label: "Docs", priority: 4 } };
function eC(e, t) {
  return Ys[e].priority - Ys[t].priority;
}
function tC(e) {
  return [...e.links ?? []].sort((t, n) => eC(t.kind, n.kind)).map((t) => ({ ...t, ...Ys[t.kind] }));
}
function jf(e, t) {
  const n = tC(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const nC = { id: "projects", class: "demos-section" }, aC = { key: 0, class: "project-feature glass-panel" }, lC = { class: "project-feature-body" }, oC = { class: "project-feature-title" }, iC = { class: "project-feature-blurb" }, rC = { class: "project-feature-tech" }, sC = { class: "project-feature-actions" }, uC = ["href", "aria-label"], cC = { class: "project-index" }, dC = { class: "project-item-head" }, fC = { class: "project-item-title" }, vC = { key: 0, class: "project-item-links", "aria-label": "Project links" }, mC = ["href", "aria-label"], hC = { class: "project-item-blurb" }, gC = { class: "project-item-tech" }, yC = mn({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = Ex, a = t ? { ...t, visibleLinks: jf(t, "featured") } : null, l = n.map((o) => ({ ...o, visibleLinks: jf(o, "compact") }));
  return (o, i) => {
    const r = Ye("v-icon"), s = Ye("v-tooltip"), u = Ye("v-container");
    return Te(), ze("section", nC, [b(u, { class: "projects-container" }, { default: Ee(() => [i[1] || (i[1] = p("div", { class: "projects-head" }, [p("div", { class: "projects-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Selected work"), p("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), p("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), Ue(a) ? (Te(), ze("article", aC, [p("div", lC, [i[0] || (i[0] = p("span", { class: "project-feature-label" }, "Featured project", -1)), p("h3", oC, Fe(Ue(a).title), 1), p("p", iC, Fe(Ue(a).blurb), 1), p("div", rC, [(Te(true), ze(be, null, Qt(Ue(a).tech, (c) => (Te(), ze("span", { key: c, class: "project-tech-tag" }, Fe(c), 1))), 128))])]), p("div", sC, [(Te(true), ze(be, null, Qt(Ue(a).visibleLinks, (c) => (Te(), ze("a", { key: c.kind, href: c.href, target: "_blank", rel: "noopener noreferrer", class: te(["project-link", { "project-link--demo": c.kind === "demo" }]), "aria-label": c.ariaLabel }, [b(r, { icon: c.icon }, null, 8, ["icon"]), p("span", null, Fe(c.label), 1), b(s, { activator: "parent", location: "top", text: c.ariaLabel }, null, 8, ["text"])], 10, uC))), 128))])])) : xn("", true), p("div", cC, [(Te(true), ze(be, null, Qt(Ue(l), (c) => (Te(), ze("article", { key: c.title, class: "project-item quiet-sheet" }, [p("header", dC, [p("h3", fC, Fe(c.title), 1), c.visibleLinks.length ? (Te(), ze("div", vC, [(Te(true), ze(be, null, Qt(c.visibleLinks, (d) => (Te(), ze("a", { key: d.kind, href: d.href, target: "_blank", rel: "noopener noreferrer", class: te(["project-item-link", { "project-item-link--demo": d.kind === "demo" }]), "aria-label": d.ariaLabel }, [b(r, { icon: d.icon }, null, 8, ["icon"]), b(s, { activator: "parent", location: "top", text: d.ariaLabel }, null, 8, ["text"])], 10, mC))), 128))])) : xn("", true)]), p("p", hC, Fe(c.blurb), 1), p("div", gC, [(Te(true), ze(be, null, Qt(c.tech, (d) => (Te(), ze("span", { key: d, class: "project-tech-tag" }, Fe(d), 1))), 128))])]))), 128))])]), _: 1 })]);
  };
} }), bC = Kn(yC, [["__scopeId", "data-v-990854bd"]]), pC = { id: "resume", class: "resume-section" }, SC = { class: "timeline" }, kC = { class: "entry-rail" }, wC = { class: "entry-dates glass-chip" }, xC = { class: "entry quiet-sheet" }, CC = { class: "entry-head" }, _C = { class: "entry-titleblock" }, VC = { class: "entry-role" }, IC = { class: "entry-subhead" }, PC = { class: "entry-company" }, AC = { class: "entry-work-location" }, TC = { class: "entry-bullets" }, DC = { key: 0, class: "entry-tech" }, EC = { class: "entry-tech-items" }, MC = { class: "entry-head" }, BC = { class: "entry-titleblock" }, $C = { class: "entry-role" }, FC = { class: "entry-company" }, LC = { class: "entry-meta" }, RC = { class: "entry-dates" }, OC = { class: "entry-location" }, NC = { key: 0, class: "entry-focus" }, HC = mn({ __name: "ResumeSection", setup(e) {
  return (t, n) => {
    const a = Ye("v-container");
    return Te(), ze("section", pC, [b(a, { class: "resume-container" }, { default: Ee(() => [n[2] || (n[2] = p("div", { class: "resume-head" }, [p("div", { class: "resume-heading" }, [p("span", { class: "glass-chip section-kicker" }, "Resume"), p("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), p("ol", SC, [(Te(true), ze(be, null, Qt(Ue(Mx), (l) => (Te(), ze("li", { key: `${l.company}-${l.dates}`, class: "timeline-row" }, [p("div", kC, [p("span", wC, Fe(l.dates), 1)]), p("article", xC, [p("header", CC, [p("div", _C, [p("h3", VC, Fe(l.role), 1), p("div", IC, [p("p", PC, Fe(l.company), 1), p("span", AC, Fe(l.location), 1)])])]), p("ul", TC, [(Te(true), ze(be, null, Qt(l.highlights, (o, i) => (Te(), ze("li", { key: i }, Fe(o), 1))), 128))]), l.tech ? (Te(), ze("div", DC, [n[0] || (n[0] = p("span", { class: "entry-tech-label" }, "Stack", -1)), p("span", EC, Fe(l.tech.join("  \xB7  ")), 1)])) : xn("", true)])]))), 128))]), n[3] || (n[3] = p("div", { class: "edu-head" }, [p("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (Te(true), ze(be, null, Qt(Ue(Bx), (l) => (Te(), ze("div", { key: `${l.school}-${l.degree}`, class: "education-card glass-panel" }, [p("header", MC, [p("div", BC, [p("h3", $C, Fe(l.degree) + " \u2014 " + Fe(l.field), 1), p("p", FC, Fe(l.school), 1)]), p("div", LC, [p("span", RC, Fe(l.dates), 1), p("span", OC, Fe(l.location), 1)])]), l.focus ? (Te(), ze("p", NC, [n[1] || (n[1] = p("span", { class: "entry-tech-label" }, "Focus", -1)), ut(" " + Fe(l.focus), 1)])) : xn("", true)]))), 128))]), _: 1 })]);
  };
} }), zC = Kn(HC, [["__scopeId", "data-v-72166a64"]]), WC = ["href", "aria-label"], jC = { class: "contact-text" }, UC = mn({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => {
    const a = Ye("v-icon");
    return Te(), ze("div", { class: te(["contact-strip", { "is-dense": e.dense }]) }, [(Te(true), ze(be, null, Qt(Ue(Gh), (l) => (Te(), ze("a", { key: l.label, href: l.href, "aria-label": l.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [b(a, { icon: l.icon, class: "contact-icon" }, null, 8, ["icon"]), p("span", jC, Fe(l.display ?? l.label), 1)], 8, WC))), 128))], 2);
  };
} }), YC = Kn(UC, [["__scopeId", "data-v-0c3dbac0"]]), GC = { id: "contact", class: "contact-section" }, KC = { class: "contact-band glass-panel" }, qC = mn({ __name: "ContactSection", setup(e) {
  return (t, n) => {
    const a = Ye("v-container");
    return Te(), ze("section", GC, [b(a, { class: "contact-container" }, { default: Ee(() => [p("div", KC, [n[0] || (n[0] = p("div", { class: "contact-head" }, [p("span", { class: "glass-chip section-kicker" }, "Contact"), p("h2", { class: "contact-title" }, "Open to interesting problems."), p("p", { class: "contact-copy" })], -1)), b(YC, { class: "contact-strip-wrap" })])]), _: 1 })]);
  };
} }), XC = Kn(qC, [["__scopeId", "data-v-e54dfca1"]]), ZC = mn({ __name: "App", setup(e) {
  return (t, n) => {
    const a = Ye("v-main"), l = Ye("v-app");
    return Te(), Hn(l, { class: "app-shell" }, { default: Ee(() => [b(gw), b(Ix), b(a, { class: "app-main" }, { default: Ee(() => [b(Qx), b(bC), b(zC), b(XC)]), _: 1 }), b(Tx)]), _: 1 });
  };
} }), JC = H({ ...ke(), ...Le(zh(), ["fullHeight"]), ...We() }, "VApp"), QC = ee()({ name: "VApp", props: JC(), setup(e, t) {
  let { slots: n } = t;
  const a = Ke(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = jh({ ...e, fullHeight: true }), { rtlClasses: s } = _t();
  return ne(() => {
    var _a3;
    return p("div", { ref: r, class: te(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: ge([e.style]) }, [p("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), De = H({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Kh = H({ text: String, ...ke(), ...De() }, "VToolbarTitle"), dc = ee()({ name: "VToolbarTitle", props: Kh(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = !!(n.default || n.text || e.text);
    return b(e.tag, { class: te(["v-toolbar-title", e.class]), style: ge(e.style) }, { default: () => {
      var _a3;
      return [a && p("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), e1 = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function hn(e, t, n) {
  return ee()({ name: e, props: e1({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? Ku : Da;
      return ma(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function fc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Wn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? Ku : Da;
    return () => ma(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function vc() {
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
const t1 = H({ target: [Object, Array] }, "v-dialog-transition"), ds = /* @__PURE__ */ new WeakMap(), Sr = ee()({ name: "VDialogTransition", props: t1(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = Yf(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (ds.set(l, i), Wn()) aa(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: If }).finished.then(() => o());
    else {
      const f = aa(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: If });
      (_a3 = Uf(l)) == null ? void 0 : _a3.forEach((v) => {
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
    !ds.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = Yf(e.target, l) : i = ds.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    Wn() ? aa(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: Pf }).finished.then(() => o()) : (aa(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: Pf }).finished.then(() => o()), (_a3 = Uf(l)) == null ? void 0 : _a3.forEach((v) => {
      aa(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Fo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? b(Da, Y({ name: "dialog-transition" }, a, { css: false }), n) : b(Da, { name: "dialog-transition" }, n);
} });
function Uf(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function Yf(e, t) {
  const n = bh(e), a = tc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((h) => parseFloat(h)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, S = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), y = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: S, speed: y };
}
const n1 = hn("fab-transition", "center center", "out-in"), a1 = hn("dialog-bottom-transition"), l1 = hn("dialog-top-transition"), Ho = hn("fade-transition"), mc = hn("scale-transition"), o1 = hn("scroll-x-transition"), i1 = hn("scroll-x-reverse-transition"), r1 = hn("scroll-y-transition"), s1 = hn("scroll-y-reverse-transition"), u1 = hn("slide-x-transition"), c1 = hn("slide-x-reverse-transition"), hc = hn("slide-y-transition"), d1 = hn("slide-y-reverse-transition"), kr = fc("expand-transition", vc()), gc = fc("expand-x-transition", vc("", "x")), f1 = fc("expand-both-transition", vc("", "both")), v1 = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Me = ee(false)({ name: "VDefaultsProvider", props: v1(), setup(e, t) {
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
function m1(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const qh = H({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...ke(), ...kt() }, "VResponsive"), Gs = ee()({ name: "VResponsive", props: qh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = m1(e), { dimensionStyles: l } = wt(e);
  return ne(() => {
    var _a3;
    return p("div", { class: te(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: ge([l.value, e.style]) }, [p("div", { class: "v-responsive__sizer", style: ge(a.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && p("div", { class: te(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function yc(e) {
  return ec(() => {
    const { class: t, style: n } = Xh(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Et(e) {
  const { colorClasses: t, colorStyles: n } = yc(() => ({ text: tt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function qe(e) {
  const { colorClasses: t, colorStyles: n } = yc(() => ({ background: tt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function h1(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Xh(e) {
  const t = h1(tt(e)), n = [], a = {};
  if (t.background) if (Ns(t.background)) {
    if (a.backgroundColor = t.background, !t.text && Yw(t.background)) {
      const l = un(t.background);
      if (l.a == null || l.a === 1) {
        const o = Ih(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (Ns(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
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
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? Ku : Da, ...s } = il(a) ? a : {};
  let u;
  return il(a) ? u = Y(s, Pw({ disabled: l, group: o }), i) : u = Y({ name: l || !a ? "" : a }, i), ma(r, u, n);
};
function Gf(e, t) {
  if (!Xu) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? Ks(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function Ks(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Tn = { mounted: Gf, unmounted: Ks, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (Ks(e, t), Gf(e, t));
} }, Zh = H({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...qh(), ...ke(), ...ot(), ...ga() }, "VImg"), da = ee()({ name: "VImg", directives: { vIntersect: Tn }, props: Zh(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { roundedClasses: i } = dt(e), r = St("VImg"), s = ue(""), u = K(), c = ue(e.eager ? "loading" : "idle"), d = ue(), f = ue(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), S = _(() => v.value.aspect || d.value / f.value || 0);
  ce(() => e.src, () => {
    m(c.value !== "idle");
  }), ce(S, (D, M) => {
    !D && M && u.value && V(u.value);
  }), Jl(() => m());
  function m(D) {
    if (!(e.eager && D) && !(Xu && !D && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const M = new Image();
        M.src = v.value.lazySrc, V(M, null);
      }
      v.value.src && Ae(() => {
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
    const T = () => {
      if (clearTimeout(I), r.isUnmounted) return;
      const { naturalHeight: F, naturalWidth: z } = D;
      F || z ? (d.value = z, f.value = F) : !D.complete && c.value === "loading" && M != null ? I = window.setTimeout(T, M) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    T();
  }
  const x = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), g = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const D = p("img", { class: te(["v-img__img", x.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: y, onError: h }, null), M = (_a3 = a.sources) == null ? void 0 : _a3.call(a);
    return b(Gt, { transition: e.transition, appear: true }, { default: () => [nt(M ? p("picture", { class: "v-img__picture" }, [M, D]) : D, [[En, c.value === "loaded"]])] });
  }, C = () => b(Gt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && p("img", { class: te(["v-img__img", "v-img__img--preload", x.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), k = () => a.placeholder ? b(Gt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && p("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, A = () => a.error ? b(Gt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && p("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? p("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = ue(false);
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
    const D = Gs.filterProps(e);
    return nt(b(Gs, Y({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !E.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ve(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: S.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => p(be, null, [b(g, null, null), b(C, null, null), b(P, null, null), b(k, null, null), b(A, null, null)]), default: a.default }), [[Tn, { handler: m, options: e.options }, null, { once: true }]]);
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
const Kf = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Zn = H({ location: String }, "location");
function Oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = _t();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = Rs(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[Kf[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[Kf[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const g1 = [null, "prominent", "default", "comfortable", "compact"], Jh = H({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => g1.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Ht(), ...ke(), ...xt(), ...Zn(), ...ot(), ...De({ tag: "header" }), ...We() }, "VToolbar"), qs = ee()({ name: "VToolbar", props: Jh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.color), { borderClasses: o } = qt(e), { elevationClasses: i } = It(e), { locationStyles: r } = Oa(e), { roundedClasses: s } = dt(e), { themeClasses: u } = Ke(e), { rtlClasses: c } = _t(), d = ue(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return mt({ VBtn: { variant: "text" } }), ne(() => {
    var _a4;
    const S = !!(e.title || n.title), m = !!(n.image || e.image), y = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!y : e.extended, b(e.tag, { class: te(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: ge([l.value, r.value, e.style]) }, { default: () => [m && p("div", { key: "image", class: "v-toolbar__image" }, [n.image ? b(Me, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : b(da, { key: "image-img", cover: true, src: e.image }, null)]), b(Me, { defaults: { VTabs: { height: ve(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [p("div", { class: "v-toolbar__content", style: { height: ve(f.value) } }, [n.prepend && p("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), S && b(dc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && p("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), b(Me, { defaults: { VTabs: { height: ve(v.value) } } }, { default: () => [b(kr, null, { default: () => [d.value && p("div", { class: "v-toolbar__extension", style: { height: ve(v.value) } }, [y])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), y1 = H({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function b1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = K(null), r = ue(0), s = ue(0), u = ue(0), c = ue(false), d = ue(false), f = ue(false), v = ue(false), S = ue(true), m = _(() => Number(e.scrollThreshold)), y = _(() => Xe((m.value - r.value) / m.value || 0));
  function h(x) {
    const g = "window" in x ? window.innerHeight : x.clientHeight, C = "window" in x ? document.documentElement.scrollHeight : x.scrollHeight;
    return { clientHeight: g, scrollHeight: C };
  }
  function w() {
    const x = i.value;
    if (!x) return;
    const { clientHeight: g, scrollHeight: C } = h(x), k = C - g, A = (a == null ? void 0 : a.value) || 0, P = m.value + A;
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
    const { clientHeight: C, scrollHeight: k } = h(x), A = r.value + C >= k - 5;
    !d.value && A && r.value >= m.value && S.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, E = r.value <= 5;
    (d.value && l - r.value > 1 && !A || P && r.value < m.value || E) && (v.value = false), f.value = A;
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
  const e = ue(false);
  return Ct(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: al(e) };
}
const p1 = H({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...Le(Jh(), ["location"]), ...gl(), ...y1(), height: { type: [Number, String], default: 64 } }, "VAppBar"), S1 = ee()({ name: "VAppBar", props: p1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = Ce(e, "modelValue"), o = _(() => {
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
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: S } = b1(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), y = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), h = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), w = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
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
  const { ssrBootStyles: V } = bl(), { layoutItemStyles: x } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: I, elementSize: ue(void 0), active: l, absolute: B(() => e.absolute) });
  return ne(() => {
    const g = Le(qs.filterProps(e), ["location"]);
    return b(qs, Y({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...x.value, "--v-toolbar-image-opacity": w.value, height: void 0, ...V.value }, e.style] }, g, { collapse: y.value, flat: h.value }), n);
  }), {};
} }), k1 = [null, "default", "comfortable", "compact"], ht = H({ density: { type: String, default: "default", validator: (e) => k1.includes(e) } }, "density");
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const w1 = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function ya(e, t) {
  return p(be, null, [e && p("span", { key: "overlay", class: te(`${t}__overlay`) }, null), p("span", { key: "underlay", class: te(`${t}__underlay`) }, null)]);
}
const gn = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => w1.includes(e) } }, "variant");
function ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = B(() => {
    const { variant: o } = tt(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = yc(() => {
    const { variant: o, color: i } = tt(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const Qh = H({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Ht(), ...ke(), ...ht(), ...xt(), ...ot(), ...De(), ...We(), ...gn() }, "VBtnGroup"), Xs = ee()({ name: "VBtnGroup", props: Qh(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { densityClasses: l } = Lt(e), { borderClasses: o } = qt(e), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e);
  mt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ne(() => b(e.tag, { class: te(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: ge(e.style) }, n));
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
  const a = Tt([]), l = Ce(e, "modelValue", [], (f) => f === void 0 ? [] : eg(a, f === null ? [null] : lt(f)), (f) => {
    const v = C1(a, f);
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
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => x1(a, f) };
  return it(t, d), d;
}
function x1(e, t) {
  const n = eg(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function eg(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Dt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function C1(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const bc = Symbol.for("vuetify:v-btn-toggle"), _1 = H({ ...Qh(), ...pl() }, "VBtnToggle"), V1 = ee()({ name: "VBtnToggle", props: _1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Na(e, bc);
  return ne(() => {
    const s = Xs.filterProps(e);
    return b(Xs, Y({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), I1 = ["x-small", "small", "default", "large", "x-large"], Jn = H({ size: { type: [String, Number], default: "default" } }, "size");
function Ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return ec(() => {
    const n = e.size;
    let a, l;
    return ji(I1, n) ? a = `${t}--size-${n}` : n && (l = { width: ve(n), height: ve(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const P1 = H({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: _e, opacity: [String, Number], ...ke(), ...Jn(), ...De({ tag: "i" }), ...We() }, "VIcon"), Ge = ee()({ name: "VIcon", props: P1(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = ue(), { themeClasses: o } = pr(), { iconData: i } = f0(() => l.value || e.icon), { sizeClasses: r } = Ql(e), { textColorClasses: s, textColorStyles: u } = Et(() => e.color);
  return ne(() => {
    var _a3, _b2;
    const c = (_a3 = a.default) == null ? void 0 : _a3.call(a);
    c && (l.value = (_b2 = vh(c).filter((f) => f.type === ei && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return b(i.value.component, { tag: e.tag, icon: i.value.icon, class: te(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: ge([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function ii(e, t) {
  const n = K(), a = ue(false);
  if (Xu) {
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
const A1 = H({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function T1(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = ue(e.reveal ? "initial" : "disabled");
  return Ct(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const D1 = H({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ke(), ...A1(), ...Jn(), ...De({ tag: "div" }), ...We() }, "VProgressCircular"), Ba = ee()({ name: "VProgressCircular", props: D1(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = K(), { themeClasses: i } = Ke(e), { sizeClasses: r, sizeStyles: s } = Ql(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { textColorClasses: d, textColorStyles: f } = Et(() => e.bgColor), { intersectionRef: v, isIntersecting: S } = ii(), { resizeRef: m, contentRect: y } = Sn(), { state: h, duration: w } = T1(e), I = B(() => h.value === "initial" ? 0 : Xe(parseFloat(e.modelValue), 0, 100)), V = B(() => Number(e.width)), x = B(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(V.value, 32)), g = B(() => a / (1 - V.value / x.value) * 2), C = B(() => V.value / x.value * g.value), k = B(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? ve(Math.min(l - 0.01, P + C.value)) : ve(P);
  }), A = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return ct(() => {
    v.value = o.value, m.value = o.value;
  }), ne(() => b(e.tag, { ref: o, class: te(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": S.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Wn()), "v-progress-circular--revealing": ["initial", "pending"].includes(h.value) }, i.value, r.value, u.value, e.class]), style: ge([s.value, c.value, { "--progress-reveal-duration": `${w.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [p("svg", { style: { transform: `rotate(calc(-90deg + ${A.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${g.value} ${g.value}` }, [p("circle", { class: te(["v-progress-circular__underlay", d.value]), style: ge(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), p("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": k.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && p("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), E1 = H({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function M1(e, t) {
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
const B1 = H({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...E1(), ...ke(), ...Zn({ location: "top" }), ...ot(), ...De(), ...We() }, "VProgressLinear"), wr = ee()({ name: "VProgressLinear", props: B1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = Ce(e, "modelValue"), { isRtl: o, rtlClasses: i } = _t(), { themeClasses: r } = Ke(e), { locationStyles: s } = Oa(e), { textColorClasses: u, textColorStyles: c } = Et(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = qe(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: S } = qe(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: y } = qe(() => e.color), { roundedClasses: h } = dt(e), { intersectionRef: w, isIntersecting: I } = ii(), V = _(() => parseFloat(e.max)), x = _(() => parseFloat(e.height)), g = _(() => Xe(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => Xe(parseFloat(l.value) / V.value * 100, 0, 100)), k = _(() => o.value !== e.reverse), A = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = ue(0), { hasChunks: E, chunksMaskStyles: D, snapValueToChunk: M } = M1(e, P);
  $t(E, () => {
    const { resizeRef: N } = Sn((X) => P.value = X[0].contentRect.width);
    ct(() => N.value = a.value);
  });
  const T = _(() => E.value ? M(g.value) : g.value), F = _(() => E.value ? M(C.value) : C.value);
  function z(N) {
    if (!w.value) return;
    const { left: X, right: Z, width: L } = w.value.getBoundingClientRect(), G = k.value ? L - N.clientX + (Z - L) : N.clientX - X;
    l.value = Math.round(G / L * V.value);
  }
  return ct(() => {
    w.value = a.value;
  }), ne(() => b(e.tag, { ref: a, class: te(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": k.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, h.value, r.value, i.value, e.class]), style: ge([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ve(x.value) : 0, "--v-progress-linear-height": ve(x.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && z }, { default: () => [e.stream && p("div", { key: "stream", class: te(["v-progress-linear__stream", u.value]), style: { ...c.value, [k.value ? "left" : "right"]: ve(-x.value), borderTop: `${ve(x.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ve(x.value / 4)})`, width: ve(100 - g.value, "%"), "--v-progress-linear-stream-to": ve(x.value * (k.value ? 1 : -1)) } }, null), p("div", { class: te(["v-progress-linear__background", d.value]), style: ge([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), p("div", { class: te(["v-progress-linear__buffer", v.value]), style: ge([S.value, { opacity: parseFloat(e.bufferOpacity), width: ve(T.value, "%") }]) }, null), b(Da, { name: A.value }, { default: () => [e.indeterminate ? p("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((N) => p("div", { key: N, class: te(["v-progress-linear__indeterminate", N, m.value]), style: ge(y.value) }, null))]) : p("div", { class: te(["v-progress-linear__determinate", m.value]), style: ge([y.value, { width: ve(F.value, "%") }]) }, null)] }), n.default && p("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: g.value })])] })), {};
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
const $1 = ["static", "relative", "fixed", "absolute", "sticky"], eo = H({ position: { type: String, validator: (e) => $1.includes(e) } }, "position");
function to(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function F1() {
  const e = St("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function tg() {
  var _a3, _b2;
  return (_b2 = (_a3 = St("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function ui(e, t) {
  const n = uS("RouterLink"), a = B(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || ff(t, "click") || ff(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: Tt({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = _(() => e.to ? o : void 0), r = F1(), s = _(() => {
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
const ci = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let fs = false;
function L1(e, t) {
  let n = false, a, l;
  Ze && (e == null ? void 0 : e.beforeEach) && (Ae(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      fs ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), fs = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      fs = false;
    });
  }), bt(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function R1(e, t) {
  ce(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Ae(() => {
      t(n);
    });
  }, { immediate: true });
}
const Zs = Symbol("rippleStop"), O1 = 80;
function qf(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Js(e) {
  return e.constructor.name === "TouchEvent";
}
function ng(e) {
  return e.constructor.name === "KeyboardEvent";
}
const N1 = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!ng(e)) {
    const d = t.getBoundingClientRect(), f = Js(e) ? e.touches[e.touches.length - 1] : e;
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
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = N1(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), qf(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), qf(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function ag(e) {
  return typeof e > "u" || !!e;
}
function zo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Zs])) {
    if (e[Zs] = true, Js(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || ng(e), n._ripple.class && (t.class = n._ripple.class), Js(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Xi.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, O1);
    } else Xi.show(e, n, t);
  }
}
function Zi(e) {
  e[Zs] = true;
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
function lg(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Wo = false;
function H1(e, t) {
  !Wo && t.includes(e.key) && (Wo = true, zo(e));
}
function og(e) {
  Wo = false, on(e);
}
function ig(e) {
  Wo && (Wo = false, on(e));
}
function rg(e, t, n) {
  const { value: a, modifiers: l } = t, o = ag(a);
  o || Xi.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = il(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => H1(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Zi, { passive: true }), e.addEventListener("mousedown", Zi);
      return;
    }
    e.addEventListener("touchstart", zo, { passive: true }), e.addEventListener("touchend", on, { passive: true }), e.addEventListener("touchmove", lg, { passive: true }), e.addEventListener("touchcancel", on), e.addEventListener("mousedown", zo), e.addEventListener("mouseup", on), e.addEventListener("mouseleave", on), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", og), e.addEventListener("blur", ig), e.addEventListener("dragstart", on, { passive: true });
  } else !o && n && sg(e);
}
function sg(e) {
  var _a3;
  e.removeEventListener("touchstart", Zi), e.removeEventListener("mousedown", Zi), e.removeEventListener("touchstart", zo), e.removeEventListener("touchend", on), e.removeEventListener("touchmove", lg), e.removeEventListener("touchcancel", on), e.removeEventListener("mousedown", zo), e.removeEventListener("mouseup", on), e.removeEventListener("mouseleave", on), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", og), e.removeEventListener("blur", ig), e.removeEventListener("dragstart", on);
}
function z1(e, t) {
  rg(e, t, false);
}
function W1(e) {
  sg(e), delete e._ripple;
}
function j1(e, t) {
  if (t.value === t.oldValue) return;
  const n = ag(t.oldValue);
  rg(e, t, n);
}
const Ft = { mounted: z1, unmounted: W1, updated: j1 }, Cr = H({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: bc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: _e, appendIcon: _e, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...ke(), ...ht(), ...kt(), ...xt(), ...Sl(), ...xr(), ...Zn(), ...eo(), ...ot(), ...ci(), ...Jn(), ...De({ tag: "button" }), ...We(), ...gn({ variant: "elevated" }) }, "VBtn"), Ne = ee()({ name: "VBtn", props: Cr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { borderClasses: o } = qt(e), { densityClasses: i } = Lt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { loaderClasses: u } = ri(e), { locationStyles: c } = Oa(e), { positionClasses: d } = to(e), { roundedClasses: f } = dt(e), { sizeClasses: v, sizeStyles: S } = Ql(e), m = Ma(e, e.symbol, false), y = ui(e, n), h = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : y.isRouterLink.value ? (_a3 = y.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), w = B(() => h.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!y.isLink.value || ((_a3 = y.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = y.isActive) == null ? void 0 : _b2.value) ? w.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: x, variantClasses: g } = ba(I), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), k = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(E) {
    var _a3, _b2;
    C.value || y.isLink.value && (E.metaKey || E.ctrlKey || E.shiftKey || E.button !== 0 || n.target === "_blank") || (y.isRouterLink.value ? (_b2 = (_a3 = y.navigate).value) == null ? void 0 : _b2.call(_a3, E) : m == null ? void 0 : m.toggle());
  }
  return R1(y, m == null ? void 0 : m.select), ne(() => {
    const E = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== true);
    return nt(b(E, Y(y.linkProps, { type: E === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": h.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": k.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, u.value, d.value, f.value, v.value, g.value, e.class], style: [x.value, r.value, c.value, S.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && E !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: A.value }), { default: () => {
      var _a3;
      return [ya(true, "v-btn"), !e.icon && D && p("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? b(Me, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : b(Ge, { key: "prepend-icon", icon: e.prependIcon }, null)]), p("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && T ? b(Ge, { key: "content-icon", icon: e.icon }, null) : b(Me, { key: "content-defaults", disabled: !T, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Fe(e.text)];
      } })]), !e.icon && M && p("span", { key: "append", class: "v-btn__append" }, [a.append ? b(Me, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : b(Ge, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && p("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Ft, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), U1 = H({ ...Le(Cr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), Y1 = ee()({ name: "VAppBarNavIcon", props: U1(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(Ne, Y(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), G1 = ee()({ name: "VAppBarTitle", props: Kh(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(dc, Y(e, { class: "v-app-bar-title" }), n)), {};
} }), ug = ha("v-alert-title"), cg = H({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function dg(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const K1 = ["success", "info", "warning", "error"], q1 = H({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: _e, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => K1.includes(e) }, ...ke(), ...ht(), ...kt(), ...xt(), ...cg(), ...Zn(), ...eo(), ...ot(), ...De(), ...We(), ...gn({ variant: "flat" }) }, "VAlert"), X1 = ee()({ name: "VAlert", props: q1(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = dg(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Ke(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ba(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Lt(e), { dimensionStyles: f } = wt(e), { elevationClasses: v } = It(e), { locationStyles: S } = Oa(e), { positionClasses: m } = to(e), { roundedClasses: y } = dt(e), { textColorClasses: h, textColorStyles: w } = Et(() => e.borderColor), { t: I } = Je(), V = B(() => ({ "aria-label": I(e.closeLabel), onClick(x) {
    l.value = false, n("click:close", x);
  } }));
  return () => {
    const x = !!(a.prepend || o.value), g = !!(a.title || e.title), C = !!(a.close || e.closable), k = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && b(e.tag, { class: te(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, y.value, c.value, e.class]), style: ge([u.value, f.value, S.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [ya(false, "v-alert"), e.border && p("div", { key: "border", class: te(["v-alert__border", h.value]), style: ge(w.value) }, null), x && p("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? b(Me, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...k } } }, a.prepend) : b(Ge, Y({ key: "prepend-icon" }, k), null)]), p("div", { class: "v-alert__content" }, [g && b(ug, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a)) ?? e.title];
      } }), ((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && p("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && p("div", { key: "close", class: "v-alert__close" }, [a.close ? b(Me, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = a.close) == null ? void 0 : _a4.call(a, { props: V.value })];
      } }) : b(Ne, Y({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), Z1 = H({ start: Boolean, end: Boolean, icon: _e, image: String, text: String, ...Ht(), ...ke(), ...ht(), ...ot(), ...Jn(), ...De(), ...We(), ...gn({ variant: "flat" }) }, "VAvatar"), vn = ee()({ name: "VAvatar", props: Z1(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { borderClasses: l } = qt(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ba(e), { densityClasses: s } = Lt(e), { roundedClasses: u } = dt(e), { sizeClasses: c, sizeStyles: d } = Ql(e);
  return ne(() => b(e.tag, { class: te(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: ge([i.value, d.value, e.style]) }, { default: () => [n.default ? b(Me, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? b(da, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? b(Ge, { key: "icon", icon: e.icon }, null) : e.text, ya(false, "v-avatar")] })), {};
} }), J1 = H({ text: String, onClick: Bt(), ...ke(), ...We() }, "VLabel"), no = ee()({ name: "VLabel", props: J1(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var _a3;
    return p("label", { class: te(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: ge(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), fg = Symbol.for("vuetify:selection-control-group"), pc = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: _e, trueIcon: _e, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Dt }, ...ke(), ...ht(), ...We() }, "SelectionControlGroup"), Q1 = H({ ...pc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), vg = ee()({ name: "VSelectionControlGroup", props: Q1(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = Mt(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return it(fg, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), bt(() => {
      r.delete(s);
    });
  } }), mt({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), ne(() => {
    var _a3;
    return p("div", { class: te(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: ge(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), _r = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ke(), ...pc() }, "VSelectionControl");
function e_(e) {
  const t = He(fg, void 0), { densityClasses: n } = Lt(e), a = Ce(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
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
const $a = ee()({ name: "VSelectionControl", directives: { vRipple: Ft }, inheritAttrs: false, props: _r(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = e_(e), v = Mt(), S = ue(false), m = ue(false), y = K(), h = B(() => e.id || `input-${v}`), w = B(() => !e.disabled && !e.readonly);
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
    e.readonly && l && Ae(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return ne(() => {
    var _a3, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: h.value } }) : e.label, [k, A] = qn(n), P = p("input", Y({ ref: y, checked: r.value, disabled: !!e.disabled, id: h.value, onBlur: V, onFocus: I, onInput: g, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, A), null);
    return p("div", Y({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": S.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, k, { style: e.style }), [p("div", { class: te(["v-selection-control__wrapper", s.value]), style: ge(u.value) }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), nt(p("div", { class: te(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: h.value } })) ?? p(be, null, [i.value && b(Ge, { key: "icon", icon: i.value }, null), P])]), [[Ft, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && b(no, { for: h.value, onClick: x }, { default: () => [C] })]);
  }), { isFocused: S, input: y };
} }), mg = H({ indeterminate: Boolean, indeterminateIcon: { type: _e, default: "$checkboxIndeterminate" }, ..._r({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Dn = ee()({ name: "VCheckboxBtn", props: mg(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "indeterminate"), l = Ce(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return ne(() => {
    const s = Le($a.filterProps(e), ["modelValue"]);
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
const t_ = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ke(), ...ga({ transition: { component: hc, leaveAbsolute: true, group: true } }) }, "VMessages"), hg = ee()({ name: "VMessages", props: t_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => lt(e.messages)), { textColorClasses: l, textColorStyles: o } = Et(() => e.color);
  return ne(() => b(Gt, { transition: e.transition, tag: "div", class: te(["v-messages", l.value, e.class]), style: ge([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => p("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), fi = H({ focused: Boolean, "onUpdate:focused": Bt() }, "focus");
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn();
  const n = Ce(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const gg = Symbol.for("vuetify:form"), n_ = H({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function a_(e) {
  const t = Ce(e, "modelValue"), n = B(() => e.disabled), a = B(() => e.readonly), l = ue(false), o = K([]), i = K([]);
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
  }, { deep: true, flush: "post" }), it(gg, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: S, resetValidation: m } = c;
    o.value.some((y) => y.id === d), o.value.push({ id: d, validate: v, reset: S, resetValidation: m, vm: Zv(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((S) => S.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function ao(e) {
  const t = He(gg, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const l_ = Symbol.for("vuetify:rules");
function o_(e) {
  const t = He(l_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const yg = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...fi() }, "validation");
function bg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt();
  const a = Ce(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = ao(e), i = o_(() => e.rules), r = K([]), s = ue(true), u = _(() => !!(lt(a.value === "" ? null : a.value).length || lt(l.value === "" ? null : l.value).length)), c = _(() => {
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
  }), v = ue(false), S = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = St("validation"), y = _(() => e.name ?? Ue(n));
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
    a.value = null, await Ae(), await w();
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
const Sa = H({ id: String, appendIcon: _e, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: _e, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Bt(), "onClick:append": Bt(), ...ke(), ...ht(), ...Jt(kt(), ["maxWidth", "minWidth", "width"]), ...We(), ...yg() }, "VInput"), Ot = ee()({ name: "VInput", props: { ...Sa() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { themeClasses: r } = Ke(e), { rtlClasses: s } = _t(), { InputIcon: u } = di(e), c = Mt(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: S, isReadonly: m, isPristine: y, isValid: h, isValidating: w, reset: I, resetValidation: V, validate: x, validationClasses: g } = bg(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), k = B(() => C.value.length > 0), A = B(() => !e.hideDetails || e.hideDetails === "auto" && (k.value || !!a.details)), P = _(() => A.value ? `${d.value}-messages` : void 0), E = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: S, isReadonly: m, isPristine: y, isValid: h, isValidating: w, hasDetails: A, reset: I, resetValidation: V, validate: x })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), M = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return ne(() => {
    var _a3, _b2;
    const T = !!(a.prepend || e.prependIcon), F = !!(a.append || e.appendIcon);
    return p("div", { class: te(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, g.value, e.class]), style: ge([i.value, e.style]) }, [T && p("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(E.value) : e.prependIcon && b(u, { key: "prepend-icon", name: "prepend", color: M.value }, null)]), a.default && p("div", { class: "v-input__control" }, [(_a3 = a.default) == null ? void 0 : _a3.call(a, E.value)]), F && p("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(E.value) : e.appendIcon && b(u, { key: "append-icon", name: "append", color: M.value }, null)]), A.value && p("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [b(hg, { active: k.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, E.value)])]);
  }), { reset: I, resetValidation: V, validate: x, isValid: h, errorMessages: f };
} }), vs = Symbol("Forwarded refs");
function ms(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[vs] = n, new Proxy(e, { get(l, o) {
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
        const s = ms(r.value, o) ?? ("_" in r.value ? ms((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[vs];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = ms(c.value, o);
          if (d) return d;
          const f = c.value && c.value[vs];
          f && u.push(...f);
        }
      }
    }
  } });
}
const i_ = H({ ...Le(Sa(), ["direction"]), ...Le(mg(), ["inline"]) }, "VCheckbox"), r_ = ee()({ name: "VCheckbox", inheritAttrs: false, props: i_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: r } = pa(e), s = K(), u = Mt();
  return ne(() => {
    const [c, d] = qn(n), f = Ot.filterProps(e), v = Dn.filterProps(e);
    return b(Ot, Y({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (S) => l.value = S, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (S) => {
      let { id: m, messagesId: y, isDisabled: h, isReadonly: w, isValid: I } = S;
      return b(Dn, Y(v, { id: m.value, "aria-describedby": y.value, disabled: h.value, readonly: w.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Pt({}, s);
} });
function s_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = jo(l, n), i = pg(l, a, n), r = jo(l, t), s = Sg(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function u_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = jo(a, n), o = Sg(a, t), i = jo(a, t);
  return o - l / 2 + i / 2;
}
function Xf(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function c_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function pg(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function jo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function Sg(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Sc = Symbol.for("vuetify:v-slide-group"), kc = H({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Sc }, nextIcon: { type: _e, default: "$next" }, prevIcon: { type: _e, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...ke(), ...hl({ mobile: null }), ...De(), ...pl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Uo = ee()({ name: "VSlideGroup", props: kc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = _t(), { displayClasses: l, mobile: o } = nn(e), i = Na(e, e.symbol), r = ue(false), s = ue(0), u = ue(0), c = ue(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = Sn(), { resizeRef: S, contentRect: m } = Sn(), y = fx(), h = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), w = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (Ze) {
    let W = -1;
    ce(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const O = d.value ? "width" : "height";
          u.value = v.value[O], c.value = m.value[O], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && w.value >= 0 && S.el) {
          const O = S.el.children[I.value];
          x(O, e.centerActive);
        }
      });
    });
  }
  const V = ue(false);
  function x(W, O) {
    let j = 0;
    O ? j = u_({ containerElement: f.el, isHorizontal: d.value, selectedElement: W }) : j = s_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: W }), g(j);
  }
  function g(W) {
    if (!Ze || !f.el) return;
    const O = jo(d.value, f.el), j = pg(d.value, a.value, f.el);
    if (!(Xf(d.value, f.el) <= O || Math.abs(W - j) < 16)) {
      if (d.value && a.value && f.el) {
        const { scrollWidth: Se, offsetWidth: ae } = f.el;
        W = Se - ae - W;
      }
      d.value ? y.horizontal(W, h.value) : y(W, h.value);
    }
  }
  function C(W) {
    const { scrollTop: O, scrollLeft: j } = W.target;
    s.value = d.value ? j : O;
  }
  function k(W) {
    if (V.value = true, !(!r.value || !S.el)) {
      for (const O of W.composedPath()) for (const j of S.el.children) if (j === O) {
        x(j);
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
    !P && !V.value && !(W.relatedTarget && ((_a3 = S.el) == null ? void 0 : _a3.contains(W.relatedTarget))) && F(), P = false;
  }
  function D() {
    P = true;
  }
  function M(W) {
    if (!S.el) return;
    function O(j) {
      W.preventDefault(), F(j);
    }
    d.value ? W.key === "ArrowRight" ? O(a.value ? "prev" : "next") : W.key === "ArrowLeft" && O(a.value ? "next" : "prev") : W.key === "ArrowDown" ? O("next") : W.key === "ArrowUp" && O("prev"), W.key === "Home" ? O("first") : W.key === "End" && O("last");
  }
  function T(W, O) {
    if (!W) return;
    let j = W;
    do
      j = j == null ? void 0 : j[O === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (j == null ? void 0 : j.hasAttribute("disabled"));
    return j;
  }
  function F(W) {
    if (!S.el) return;
    let O;
    if (!W) O = Pa(S.el)[0];
    else if (W === "next") {
      if (O = T(S.el.querySelector(":focus"), W), !O) return F("first");
    } else if (W === "prev") {
      if (O = T(S.el.querySelector(":focus"), W), !O) return F("last");
    } else W === "first" ? (O = S.el.firstElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = T(O, "next"))) : W === "last" && (O = S.el.lastElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = T(O, "prev")));
    O && O.focus({ preventScroll: true });
  }
  function z(W) {
    const O = d.value && a.value ? -1 : 1, j = (W === "prev" ? -O : O) * u.value;
    let se = s.value + j;
    if (d.value && a.value && f.el) {
      const { scrollWidth: Se, offsetWidth: ae } = f.el;
      se += Se - ae;
    }
    g(se);
  }
  const N = _(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), X = _(() => r.value || Math.abs(s.value) > 0), Z = _(() => {
    switch (e.showArrows) {
      case "never":
        return false;
      case "always":
        return true;
      case "desktop":
        return !o.value;
      case true:
        return X.value;
      case "mobile":
        return o.value || X.value;
      default:
        return !o.value && X.value;
    }
  }), L = _(() => Math.abs(s.value) > 1), G = _(() => {
    if (!f.value || !X.value) return false;
    const W = Xf(d.value, f.el), O = c_(d.value, f.el);
    return W - O - Math.abs(s.value) > 1;
  });
  return ne(() => b(e.tag, { class: te(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": Z.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: ge(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: E }, { default: () => {
    var _a3, _b2, _c2;
    return [Z.value && p("div", { key: "prev", class: te(["v-slide-group__prev", { "v-slide-group__prev--disabled": !L.value }]), onMousedown: D, onClick: () => L.value && z("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, N.value)) ?? b(Ho, null, { default: () => [b(Ge, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), p("div", { key: "container", ref: f, class: te(["v-slide-group__container", e.contentClass]), onScroll: C }, [p("div", { ref: S, class: "v-slide-group__content", onFocusin: k, onFocusout: A, onKeydown: M }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, N.value)])]), Z.value && p("div", { key: "next", class: te(["v-slide-group__next", { "v-slide-group__next--disabled": !G.value }]), onMousedown: D, onClick: () => G.value && z("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, N.value)) ?? b(Ho, null, { default: () => [b(Ge, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: z, scrollOffset: s, focus: F, hasPrev: L, hasNext: G };
} }), kg = Symbol.for("vuetify:v-chip-group"), d_ = H({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dt }, ...kc({ scrollToActive: false }), ...ke(), ...pl({ selectedClass: "v-chip--selected" }), ...De(), ...We(), ...gn({ variant: "tonal" }) }, "VChipGroup"), f_ = ee()({ name: "VChipGroup", props: d_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, kg);
  return mt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), ne(() => {
    const u = Uo.filterProps(e);
    return b(Uo, Y(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), v_ = H({ activeClass: String, appendAvatar: String, appendIcon: _e, baseColor: String, closable: Boolean, closeIcon: { type: _e, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: _e, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...ke(), ...ht(), ...xt(), ...Sl(), ...ot(), ...ci(), ...Jn(), ...De({ tag: "span" }), ...We(), ...gn({ variant: "tonal" }) }, "VChip"), fa = ee()({ name: "VChip", directives: { vRipple: Ft }, props: v_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Je(), { borderClasses: i } = qt(e), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { sizeClasses: c } = Ql(e), { themeClasses: d } = Ke(e), f = Ce(e, "modelValue"), v = Ma(e, kg, false), S = Ma(e, Sc, false), m = ui(e, n), y = B(() => e.link !== false && m.isLink.value), h = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), w = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(k) {
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
    const k = m.isLink.value ? "a" : e.tag, A = !!(e.appendIcon || e.appendAvatar), P = !!(A || l.append), E = !!(l.close || e.closable), D = !!(l.filter || e.filter) && v, M = !!(e.prependIcon || e.prependAvatar), T = !!(M || l.prepend);
    return f.value && nt(b(k, Y(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": h.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, I.value, r.value, s.value, u.value, c.value, x.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: h.value ? 0 : void 0, onClick: g, onKeydown: h.value && !y.value && C }), { default: () => {
      var _a4;
      return [ya(h.value, "v-chip"), D && b(gc, { key: "filter" }, { default: () => [nt(p("div", { class: "v-chip__filter" }, [l.filter ? b(Me, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : b(Ge, { key: "filter-icon", icon: e.filterIcon }, null)]), [[En, v.isSelected.value]])] }), T && p("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? b(Me, { key: "prepend-defaults", disabled: !M, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : p(be, null, [e.prependIcon && b(Ge, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && b(vn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), p("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = l.default) == null ? void 0 : _a4.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Fe(e.text)]), P && p("div", { key: "append", class: "v-chip__append" }, [l.append ? b(Me, { key: "append-defaults", disabled: !A, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : p(be, null, [e.appendIcon && b(Ge, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && b(vn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), E && p("button", Y({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, w.value), [l.close ? b(Me, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : b(Ge, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ft, h.value && e.ripple, null]]);
  };
} }), m_ = ["dotted", "dashed", "solid", "double"], h_ = H({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => m_.includes(e) }, ...ke(), ...We() }, "VDivider"), dn = ee()({ name: "VDivider", props: h_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { textColorClasses: o, textColorStyles: i } = Et(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return ne(() => {
    const u = p("hr", { class: te([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: ge([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? p("div", { class: te(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, p("div", { class: "v-divider__content", style: ge(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), Qs = Symbol.for("vuetify:list");
function wg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = He(Qs, { filterable: false, hasPrepend: ue(false), updateHasPrepend: () => null, trackingIndex: ue(-1), navigationStrategy: ue("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Mt() } = e, i = { filterable: t.filterable || n, hasPrepend: ue(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return it(Qs, i), t;
}
function xg() {
  return He(Qs, null);
}
const wc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Pe(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of lt(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, Cg = (e) => {
  const t = wc(e);
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
}, g_ = (e) => {
  const t = wc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, y_ = (e) => {
  const t = Cg(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, b_ = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, _g = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, p_ = { open: _g.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, xc = (e) => {
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
}, Vg = (e) => {
  const t = xc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Pe(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, S_ = (e) => {
  const t = xc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, k_ = (e) => {
  const t = Vg(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Pe(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Cc = (e) => {
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
}, w_ = (e) => {
  const t = Cc(e);
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
}, x_ = (e) => {
  const n = { select: Cc(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Gl = Symbol.for("vuetify:nested"), Ig = { id: ue(), root: { itemsRegistration: K("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: K(/* @__PURE__ */ new Map()), parents: K(/* @__PURE__ */ new Map()), disabled: K(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: K(false), scrollToActive: K(false), selectable: K(false), opened: K(/* @__PURE__ */ new Set()), activated: K(/* @__PURE__ */ new Set()), selected: K(/* @__PURE__ */ new Map()), selectedValues: K([]), getPath: () => [] } }, C_ = H({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), __ = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = ue(/* @__PURE__ */ new Map()), r = ue(/* @__PURE__ */ new Map()), s = ue(/* @__PURE__ */ new Set()), u = Ce(e, "opened", e.opened, (x) => new Set(Array.isArray(x) ? x.map((g) => Pe(g)) : x), (x) => [...x.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return g_(e.mandatory);
      case "single-leaf":
        return y_(e.mandatory);
      case "independent":
        return wc(e.mandatory);
      case "single-independent":
      default:
        return Cg(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return k_(e.mandatory);
      case "leaf":
        return S_(e.mandatory);
      case "independent":
        return xc(e.mandatory);
      case "single-independent":
        return Vg(e.mandatory);
      case "trunk":
        return w_(e.mandatory);
      case "branch":
        return x_(e.mandatory);
      case "classic":
      default:
        return Cc(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return p_;
      case "single":
        return b_;
      case "multiple":
      default:
        return _g;
    }
  }), v = Ce(e, "activated", e.activated, (x) => c.value.in(x, i.value, r.value), (x) => c.value.out(x, i.value, r.value)), S = Ce(e, "selected", e.selected, (x) => d.value.in(x, i.value, r.value, s.value), (x) => d.value.out(x, i.value, r.value));
  Nt(() => {
    o = true;
  });
  function m(x) {
    const g = [];
    let C = Pe(x);
    for (; C !== void 0; ) g.unshift(C), C = r.value.get(C);
    return g;
  }
  const y = St("nested"), h = /* @__PURE__ */ new Set(), w = c0(() => {
    Ae(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  ce(() => [n.value, tt(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), k = tt(a) ? (E) => Pe(E.raw) : (E) => E.value, A = [...n.value];
    let P = 0;
    for (; P < A.length; ) {
      const E = A[P++], D = k(E);
      if (E.children) {
        const M = [];
        for (const T of E.children) {
          const F = k(T);
          x.set(F, D), M.push(F), A.push(T);
        }
        g.set(D, M);
      }
      E.props.disabled && C.add(D);
    }
    i.value = g, r.value = x, s.value = C;
  }
  const V = { id: ue(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => tt(l)), selectable: B(() => e.selectable), activated: v, selected: S, selectedValues: _(() => {
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
      for (const A of k) if (!v.value.has(A)) {
        v.value = k;
        return;
      }
      for (const A of v.value) if (!k.has(A)) {
        v.value = k;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: m } };
  return it(Gl, V), V.root;
}, Pg = (e, t, n) => {
  const a = He(Gl, Ig), l = Symbol("nested item"), o = _(() => {
    const r = Pe(tt(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return Jl(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Ae(() => {
      a.root.register(o.value, a.id.value, tt(t), n);
    });
  }), Nt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), ce(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Ae(() => {
      a.root.register(r, a.id.value, tt(t), n);
    }));
  }), ce(() => tt(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && it(Gl, i), i;
}, V_ = () => {
  const e = He(Gl, Ig);
  it(Gl, { ...e, isGroupActivator: true });
}, I_ = Kt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return V_(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Ag = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: _e, default: "$collapse" }, disabled: Boolean, expandIcon: { type: _e, default: "$expand" }, rawId: [String, Number], prependIcon: _e, appendIcon: _e, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ke(), ...De() }, "VListGroup"), Yo = ee()({ name: "VListGroup", props: Ag(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = Pg(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = xg(), { isBooted: s } = bl(), u = He(Gl), c = B(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || l(!a.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), S = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return ne(() => b(e.tag, { class: te(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: ge(e.style) }, { default: () => [n.activator && b(Me, { defaults: S.value }, { default: () => [b(I_, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), b(Gt, { transition: { component: kr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? nt(p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[En, a.value]]) : a.value && p("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), P_ = H({ opacity: [Number, String], ...ke(), ...De() }, "VListItemSubtitle"), Tg = ee()({ name: "VListItemSubtitle", props: P_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-list-item-subtitle", e.class]), style: ge([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Dg = ha("v-list-item-title"), Eg = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: _e, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Bt(), onClickOnce: Bt(), ...Ht(), ...ke(), ...ht(), ...kt(), ...xt(), ...ot(), ...ci(), ...De(), ...We(), ...gn({ variant: "text" }) }, "VListItem"), kn = ee()({ name: "VListItem", directives: { vRipple: Ft }, props: Eg(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = ui(e, n), i = K(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: S, root: m, parent: y, openOnSelect: h, scrollToActive: w, id: I } = Pg(r, () => e.disabled, false), V = xg(), x = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), g = B(() => e.link !== false && o.isLink.value), C = _(() => !!V && (m.selectable.value || m.activatable.value || e.value != null)), k = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), A = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? g.value ? "link" : C.value ? "option" : "listitem" : void 0), E = _(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : x.value;
  }), D = B(() => e.rounded || e.nav), M = B(() => e.color ?? e.activeColor), T = B(() => ({ color: x.value ? M.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ce(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (he) => {
    he && F();
  }), ce(u, (he) => {
    var _a3;
    !he || !w || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ce(A, (he) => {
    var _a3;
    he && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), Jl(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Ae(() => F());
  });
  function F() {
    y.value != null && m.open(y.value, true), h(true);
  }
  const { themeClasses: z } = Ke(e), { borderClasses: N } = qt(e), { colorClasses: X, colorStyles: Z, variantClasses: L } = ba(T), { densityClasses: G } = Lt(e), { dimensionStyles: W } = wt(e), { elevationClasses: O } = It(e), { roundedClasses: j } = dt(D), se = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Se = B(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), ae = _(() => ({ isActive: x.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function me(he) {
    var _a3, _b2, _c2;
    l("click", he), !["INPUT", "TEXTAREA"].includes((_a3 = he.target) == null ? void 0 : _a3.tagName) && k.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, he), !S && (m.activatable.value ? s(!u.value, he) : (m.selectable.value || e.value != null && !g.value) && c(!f.value, he)));
  }
  function ie(he) {
    const fe = he.target;
    ["INPUT", "TEXTAREA"].includes(fe.tagName) || (he.key === "Enter" || he.key === " " && !(V == null ? void 0 : V.filterable)) && (he.preventDefault(), he.stopPropagation(), he.target.dispatchEvent(new MouseEvent("click", he)));
  }
  return ne(() => {
    const he = g.value ? "a" : e.tag, fe = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, J = !!(!!(e.appendAvatar || e.appendIcon) || a.append), Q = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(Q), e.activeColor && rh("active-color", ["color", "base-color"]), nt(b(he, Y(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": k.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !Q && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": A.value, [`${e.activeClass}`]: e.activeClass && x.value }, z.value, N.value, X.value, G.value, O.value, se.value, j.value, L.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, Z.value, W.value, e.style], tabindex: e.tabindex ?? (k.value ? V ? -2 : 0 : void 0), "aria-selected": E.value, role: P.value, onClick: me, onKeydown: k.value && !g.value && ie }), { default: () => {
      var _a3;
      return [ya(k.value || x.value, "v-list-item"), Q && p("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? b(Me, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.prepend) == null ? void 0 : _a4.call(a, ae.value)];
      } }) : p(be, null, [e.prependAvatar && b(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), p("div", { class: "v-list-item__spacer" }, null)]), p("div", { class: "v-list-item__content", "data-no-activator": "" }, [fe && b(Dg, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = a.title) == null ? void 0 : _a4.call(a, { title: e.title })) ?? Fe(e.title)];
      } }), $ && b(Tg, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = a.subtitle) == null ? void 0 : _a4.call(a, { subtitle: e.subtitle })) ?? Fe(e.subtitle)];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a, ae.value)]), J && p("div", { key: "append", class: "v-list-item__append" }, [a.append ? b(Me, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = a.append) == null ? void 0 : _a4.call(a, ae.value)];
      } }) : p(be, null, [e.appendIcon && b(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && b(vn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), p("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Ft, k.value && Se.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: S, isSelected: f, list: V, select: c, root: m, id: I, link: o };
} }), A_ = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ke(), ...De() }, "VListSubheader"), lo = ee()({ name: "VListSubheader", props: A_(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color);
  return ne(() => {
    const o = !!(n.default || e.title);
    return b(e.tag, { class: te(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: ge([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a3;
      return [o && p("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), T_ = H({ items: Array, returnObject: Boolean }, "VListChildren"), Mg = ee()({ name: "VListChildren", props: T_(), setup(e, t) {
  let { slots: n } = t;
  return wg(), () => {
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
      }, default: () => b(Mg, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : b(kn, Y(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), Bg = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), D_ = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Cn(e, t) {
  const n = pt(t, e.itemTitle, t), a = pt(t, e.itemValue, n), l = pt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Le(t, ["children"]) : t : void 0 : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  D_.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? $g(e, l) : void 0, raw: t };
}
Cn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function $g(e, t) {
  const n = Jt(e, Cn.neededProps), a = [];
  for (const l of t) a.push(Cn(n, l));
  return a;
}
function _c(e) {
  const t = _(() => $g(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = ue(/* @__PURE__ */ new Map()), l = ue([]);
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
const E_ = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function M_(e, t) {
  const n = Ea(t) ? t : pt(t, e.itemTitle), a = Ea(t) ? t : pt(t, e.itemValue, void 0), l = pt(t, e.itemChildren), o = e.itemProps === true ? Le(t, ["children"]) : pt(t, e.itemProps);
  let i = pt(t, e.itemType, "item");
  E_.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? Fg(e, l) : void 0, raw: t };
}
function Fg(e, t) {
  const n = [];
  for (const a of t) n.push(M_(e, a));
  return n;
}
function Lg(e) {
  return { items: _(() => Fg(e, e.items)) };
}
const Rg = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: _e, collapseIcon: _e, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Bt(), "onClick:select": Bt(), "onUpdate:opened": Bt(), ...C_({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ht(), ...ke(), ...ht(), ...kt(), ...xt(), ...Bg(), ...ot(), ...De(), ...We(), ...gn({ variant: "text" }) }, "VList"), Kl = ee()({ name: "VList", props: Rg(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = Lg(e), { themeClasses: i } = Ke(e), { backgroundColorClasses: r, backgroundColorStyles: s } = qe(() => e.bgColor), { borderClasses: u } = qt(e), { densityClasses: c } = Lt(e), { dimensionStyles: d } = wt(e), { elevationClasses: f } = It(e), { roundedClasses: v } = dt(e), { children: S, open: m, parents: y, select: h, getPath: w } = __(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), I = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = B(() => e.activeColor), x = B(() => e.baseColor), g = B(() => e.color), C = B(() => e.selectable || e.activatable), k = Ce(e, "navigationIndex", -1, (G) => G ?? -1), A = Mt();
  wg({ filterable: e.filterable, trackingIndex: k, navigationStrategy: B(() => e.navigationStrategy), uid: A }), ce(o, () => {
    e.navigationStrategy === "track" && (k.value = -1);
  }), mt({ VListGroup: { activeColor: V, baseColor: x, color: g, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: V, baseColor: x, color: g, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = ue(false), E = K();
  function D(G) {
    P.value = true;
  }
  function M(G) {
    P.value = false;
  }
  function T(G) {
    var _a3;
    e.navigationStrategy === "track" ? ~k.value || (k.value = N("first")) : !P.value && !(G.relatedTarget && ((_a3 = E.value) == null ? void 0 : _a3.contains(G.relatedTarget))) && L();
  }
  function F() {
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
    let O;
    G === "first" ? O = 0 : G === "last" ? O = W - 1 : (O = k.value + (G === "next" ? 1 : -1), O < 0 && (O = W - 1), O >= W && (O = 0));
    const j = O;
    let se = 0;
    for (; se < W; ) {
      const Se = o.value[O];
      if (Se && Se.type !== "divider" && Se.type !== "subheader") return O;
      if (O += G === "next" || G === "first" ? 1 : -1, O < 0 && (O = W - 1), O >= W && (O = 0), O === j) return -1;
      se++;
    }
    return -1;
  }
  function X(G) {
    const W = G.target;
    if (!E.value || W.tagName === "INPUT" && ["Home", "End"].includes(G.key) || W.tagName === "TEXTAREA") return;
    const O = z(G.key);
    if (O !== null) if (G.preventDefault(), e.navigationStrategy === "track") {
      const j = N(O);
      j !== -1 && (k.value = j);
    } else L(O);
  }
  function Z(G) {
    P.value = true;
  }
  function L(G) {
    if (E.value) return Qa(E.value, G);
  }
  return ne(() => {
    const G = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), W = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return b(e.tag, { ref: E, class: te(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, I.value, v.value, e.class]), style: ge([{ "--v-list-indent": ve(G), "--v-list-group-prepend": G ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && k.value >= 0 ? `v-list-item-${A}-${k.value}` : void 0, "aria-multiselectable": W, onFocusin: D, onFocusout: M, onFocus: T, onBlur: F, onKeydown: X, onMousedown: Z }, { default: () => [b(Mg, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: h, focus: L, children: S, parents: y, getPath: w, navigationIndex: k };
} }), B_ = ha("v-list-img"), $_ = H({ start: Boolean, end: Boolean, ...ke(), ...De() }, "VListItemAction"), Vc = ee()({ name: "VListItemAction", props: $_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: ge(e.style) }, n)), {};
} }), F_ = H({ start: Boolean, end: Boolean, ...ke(), ...De() }, "VListItemMedia"), L_ = ee()({ name: "VListItemMedia", props: F_(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: ge(e.style) }, n)), {};
} });
function hs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function R_(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Zf(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return hs({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return hs({ x: l, y: o }, t);
  }
  return hs({ x: t.width / 2, y: t.height / 2 }, t);
}
const Og = { static: H_, connected: W_ }, O_ = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Og }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function N_(e, t) {
  const n = K({}), a = K();
  Ze && $t(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    ce(() => e.locationStrategy, r), bt(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : a.value = (_b2 = Og[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function H_() {
}
function z_(e, t) {
  const n = tc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function W_(e, t, n) {
  (Array.isArray(e.target.value) || u0(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = ec(() => {
    const h = Rs(t.location, e.isRtl.value), w = t.origin === "overlap" ? h : t.origin === "auto" ? rs(h) : Rs(t.origin, e.isRtl.value);
    return h.side === w.side && h.align === ss(w).align ? { preferredAnchor: mf(h), preferredOrigin: mf(w) } : { preferredAnchor: h, preferredOrigin: w };
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
  const v = new mh(4), S = new ResizeObserver(() => {
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
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = bh(e.target.value));
    const h = z_(e.contentEl.value, e.isRtl.value), w = Gi(e.contentEl.value), I = Number(t.viewportMargin);
    w.length || (w.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = w.reduce((M, T) => {
      const F = Tw(T);
      return M ? new pn({ x: Math.max(M.left, F.left), y: Math.max(M.top, F.top), width: Math.min(M.right, F.right) - Math.max(M.left, F.left), height: Math.min(M.bottom, F.bottom) - Math.max(M.top, F.top) }) : F;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, m.x), V.y += Math.min(I, m.y), V.width = Math.max(V.width - I * 2, m.x + m.width - I), V.height = Math.max(V.height - I * 2, m.y + m.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let x = { anchor: l.value, origin: o.value };
    function g(M) {
      const T = new pn(h), F = Zf(M.anchor, m), z = Zf(M.origin, T);
      let { x: N, y: X } = R_(F, z);
      switch (M.anchor.side) {
        case "top":
          X -= c.value[0];
          break;
        case "bottom":
          X += c.value[0];
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
          X -= c.value[1];
          break;
        case "bottom":
          X += c.value[1];
          break;
        case "left":
          N -= c.value[1];
          break;
        case "right":
          N += c.value[1];
          break;
      }
      return T.x += N, T.y += X, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), { overflows: gf(T, V), x: N, y: X };
    }
    let C = 0, k = 0;
    const A = { x: 0, y: 0 }, P = { x: false, y: false };
    let E = -1;
    for (; !(E++ > 10); ) {
      const { x: M, y: T, overflows: F } = g(x);
      C += M, k += T, h.x += M, h.y += T;
      {
        const z = hf(x.anchor), N = F.x.before || F.x.after, X = F.y.before || F.y.after;
        let Z = false;
        if (["x", "y"].forEach((L) => {
          if (L === "x" && N && !P.x || L === "y" && X && !P.y) {
            const G = { anchor: { ...x.anchor }, origin: { ...x.origin } }, W = L === "x" ? z === "y" ? ss : rs : z === "y" ? rs : ss;
            G.anchor = W(G.anchor), G.origin = W(G.origin);
            const { overflows: O } = g(G);
            (O[L].before <= F[L].before && O[L].after <= F[L].after || O[L].before + O[L].after < (F[L].before + F[L].after) / 2) && (x = G, Z = P[L] = true);
          }
        }), Z) continue;
      }
      F.x.before && (C += F.x.before, h.x += F.x.before), F.x.after && (C -= F.x.after, h.x -= F.x.after), F.y.before && (k += F.y.before, h.y += F.y.before), F.y.after && (k -= F.y.after, h.y -= F.y.after);
      {
        const z = gf(h, V);
        A.x = V.width - z.x.before - z.x.after, A.y = V.height - z.y.before - z.y.after, C += z.x.before, h.x += z.x.before, k += z.y.before, h.y += z.y.before;
      }
      break;
    }
    const D = hf(x.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: ve(gs(k)), left: e.isRtl.value ? void 0 : ve(gs(C)), right: e.isRtl.value ? ve(gs(-C)) : void 0, minWidth: ve(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ve(Jf(Xe(A.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ve(Jf(Xe(A.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: A, contentBox: h, flipped: P };
  }
  return ce(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => y()), Ae(() => {
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
function gs(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Jf(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let eu = true;
const Ji = [];
function j_(e) {
  !eu || Ji.length ? (Ji.push(e), tu()) : (eu = false, e(), tu());
}
let Qf = -1;
function tu() {
  cancelAnimationFrame(Qf), Qf = requestAnimationFrame(() => {
    const e = Ji.shift();
    e && e(), Ji.length ? tu() : eu = true;
  });
}
const Ng = { none: null, close: G_, block: K_, reposition: q_ }, U_ = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Ng } }, "VOverlay-scroll-strategies");
function Y_(e, t) {
  if (!Ze) return;
  let n;
  ct(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Nl(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = Ng[e.scrollStrategy]) == null ? void 0 : _a3.call(Ng, t, e, n);
    }));
  }), bt(() => {
    n == null ? void 0 : n.stop();
  });
}
function G_(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Hg(Ic(e.target.value, e.contentEl.value), t);
}
function K_(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, a = Ic(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...Gi(a, t.contained ? n : void 0), ...Gi(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => oc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ve(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ve(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ve(o)), r.classList.add("v-overlay-scroll-blocked");
  }), bt(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function q_(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    j_(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Hg(Ic(e.target.value, e.contentEl.value), (r) => {
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
function Ic(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Hg(e, t) {
  const n = [document, ...Gi(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), bt(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const nu = Symbol.for("vuetify:v-menu"), Pc = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Ac(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Cw(u, () => {
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
const X_ = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Pc() }, "VOverlay-activator");
function Z_(e, t) {
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
    }), c.value && (k.onFocusin = (A) => {
      A.target.matches(":focus-visible") && (s = true, f());
    }, k.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const A = He(nu, null);
      k.onClick = () => {
        n.value = false, A == null ? void 0 : A.closeParents();
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
    I.value && Ae(() => {
      i.value = I.el;
    });
  });
  const V = $o(), x = _(() => e.target === "cursor" && S.value ? S.value : V.value ? V.el : zg(e.target, o) || i.value), g = _(() => Array.isArray(x.value) ? void 0 : x.value);
  let C;
  return ce(() => !!e.activator, (k) => {
    k && Ze ? (C = Nl(), C.run(() => {
      J_(e, o, { activatorEl: i, activatorEvents: y });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), bt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: x, targetEl: g, targetRef: V, activatorEvents: y, contentEvents: h, scrimEvents: w };
}
function J_(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  ce(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Ae(() => o());
  }, { immediate: true }), ce(() => e.activatorProps, () => {
    o();
  }), bt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Dw(s, Y(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Ew(s, Y(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = zg(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function zg(e, t) {
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
const Wg = H({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Ei = /* @__PURE__ */ new Map();
let ev = 0;
function tv(e) {
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
function jg(e, t) {
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
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Ae(), n.value && !r && S !== m && o.value && tt(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Pa(o.value)[0]) == null ? void 0 : _a3.focus());
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
  }, { immediate: true }), ev++ < 1 && document.addEventListener("keydown", tv)), bt(() => {
    Ei.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --ev < 1 && document.removeEventListener("keydown", tv);
  });
}
function Ug() {
  if (!Ze) return ue(false);
  const { ssr: e } = nn();
  if (e) {
    const t = ue(false);
    return Ct(() => {
      t.value = true;
    }), t;
  } else return ue(true);
}
const Tc = H({ eager: Boolean }, "lazy");
function Dc(e, t) {
  const n = ue(false), a = B(() => n.value || e.eager || t.value);
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
const nv = Symbol.for("vuetify:stack"), uo = Tt([]);
function Q_(e, t, n) {
  const a = St("useStack"), l = !n, o = He(nv, void 0), i = Tt({ activeChildren: /* @__PURE__ */ new Set() });
  it(nv, i);
  const r = ue(Number(tt(t)));
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
  const s = ue(true);
  return l && ct(() => {
    var _a3;
    const c = ((_a3 = uo.at(-1)) == null ? void 0 : _a3[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: al(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function eV(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !Ze) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function tV() {
  return true;
}
function Yg(e, t, n) {
  if (!e || Gg(e, n) === false) return false;
  const a = Ph(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function Gg(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || tV)(e);
}
function nV(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Yg(e, t, n) && setTimeout(() => {
    Gg(e, n) && a && a(e);
  }, 0);
}
function av(e, t) {
  const n = Ph(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const au = { mounted(e, t) {
  const n = (l) => nV(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = Yg(l, e, t);
  };
  av(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (av(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function aV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return b(Da, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && p("div", Y({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const vi = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...X_(), ...ke(), ...kt(), ...Tc(), ...O_(), ...U_(), ...Wg(), ...We(), ...ga() }, "VOverlay"), Un = ee()({ name: "VOverlay", directives: { vClickOutside: au }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...Le(vi(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = St("VOverlay"), i = K(), r = K(), s = K(), u = Ce(e, "modelValue"), c = _({ get: () => u.value, set: (ae) => {
    ae && e.disabled || (u.value = ae);
  } }), { themeClasses: d } = Ke(e), { rtlClasses: f, isRtl: v } = _t(), { hasContent: S, onAfterLeave: m } = Dc(e, c), y = qe(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: h, localTop: w, stackStyles: I } = Q_(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: x, target: g, targetEl: C, targetRef: k, activatorEvents: A, contentEvents: P, scrimEvents: E } = Z_(e, { isActive: c, isTop: w, contentEl: s }), { teleportTarget: D } = eV(() => {
    var _a3, _b2, _c2;
    const ae = e.attach || e.contained;
    if (ae) return ae;
    const me = ((_a3 = V == null ? void 0 : V.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return me instanceof ShadowRoot ? me : false;
  }), { dimensionStyles: M } = wt(e), T = Ug(), { scopeId: F } = kl();
  ce(() => e.disabled, (ae) => {
    ae && (c.value = false);
  });
  const { contentStyles: z, updateLocation: N } = N_(e, { isRtl: v, contentEl: s, target: g, isActive: c });
  Y_(e, { root: i, contentEl: s, targetEl: C, target: g, isActive: c, updateLocation: N });
  function X(ae) {
    l("click:outside", ae), e.persistent ? j() : c.value = false;
  }
  function Z(ae) {
    return c.value && w.value && (!e.scrim || ae.target === r.value || ae instanceof MouseEvent && ae.shadowTarget === r.value);
  }
  jg(e, { isActive: c, localTop: w, contentEl: s, activatorEl: V }), Ze && ce(c, (ae) => {
    ae ? window.addEventListener("keydown", L) : window.removeEventListener("keydown", L);
  }, { immediate: true }), Nt(() => {
    Ze && window.removeEventListener("keydown", L);
  });
  function L(ae) {
    var _a3, _b2, _c2;
    ae.key === "Escape" && h.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || l("keydown", ae), e.persistent ? j() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function G(ae) {
    ae.key === "Escape" && !h.value || l("keydown", ae);
  }
  const W = tg();
  $t(() => e.closeOnBack, () => {
    L1(W, (ae) => {
      h.value && c.value ? (ae(false), e.persistent ? j() : c.value = false) : ae();
    });
  });
  const O = K();
  ce(() => c.value && (e.absolute || e.contained) && D.value == null, (ae) => {
    if (ae) {
      const me = gr(i.value);
      me && me !== document.scrollingElement && (O.value = me.scrollTop);
    }
  });
  function j() {
    e.noClickAnimation || s.value && aa(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Fo });
  }
  function se() {
    l("afterEnter");
  }
  function Se() {
    m(), l("afterLeave");
  }
  return ne(() => {
    var _a3;
    return p(be, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: k, props: Y({ ref: x }, A.value, e.activatorProps) }), T.value && S.value && b(eS, { disabled: !D.value, to: D.value }, { default: () => [p("div", Y({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: ve(O.value) }, e.style], ref: i, onKeydown: G }, F, a), [b(aV, Y({ color: y, modelValue: c.value && !!e.scrim, ref: r }, E.value), null), b(Gt, { appear: true, persisted: true, transition: e.transition, target: g.value, onAfterEnter: se, onAfterLeave: Se }, { default: () => {
      var _a4;
      return [nt(p("div", Y({ ref: s, class: ["v-overlay__content", e.contentClass], style: [M.value, z.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[En, c.value], [au, { handler: X, closeConditional: Z, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: g, animateClick: j, contentEl: s, rootEl: i, globalTop: h, localTop: w, updateLocation: N };
} }), Kg = H({ id: String, submenu: Boolean, ...Le(vi({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: Sr } }), ["absolute"]) }, "VMenu"), ql = ee()({ name: "VMenu", props: Kg(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = kl(), { isRtl: o } = _t(), i = Mt(), r = B(() => e.id || `v-menu-${i}`), s = K(), u = He(nu, null), c = ue(/* @__PURE__ */ new Set());
  it(nu, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !_w(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Nt(() => u == null ? void 0 : u.unregister()), Wu(() => a.value = false), ce(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e2;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !gh(Pa((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (h) => h.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e2 = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e2.focus());
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
} }), Ec = H({ color: String, ...Ht(), ...ke(), ...kt(), ...xt(), ...Zn(), ...eo(), ...ot(), ...De(), ...We() }, "VSheet"), Fa = ee()({ name: "VSheet", props: Ec(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { borderClasses: i } = qt(e), { dimensionStyles: r } = wt(e), { elevationClasses: s } = It(e), { locationStyles: u } = Oa(e), { positionClasses: c } = to(e), { roundedClasses: d } = dt(e);
  return ne(() => b(e.tag, { class: te(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: ge([o.value, r.value, u.value, e.style]) }, n)), {};
} }), lV = H({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ke(), ...ga({ transition: { component: hc } }) }, "VCounter"), Vr = ee()({ name: "VCounter", functional: true, props: lV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ne(() => b(Gt, { transition: e.transition }, { default: () => [nt(p("div", { class: te(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: ge(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[En, e.active]])] })), {};
} }), oV = H({ floating: Boolean, ...ke() }, "VFieldLabel"), mo = ee()({ name: "VFieldLabel", props: oV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(no, { class: te(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: ge(e.style) }, n)), {};
} }), iV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], mi = H({ appendInnerIcon: _e, bgColor: String, clearable: Boolean, clearIcon: { type: _e, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: _e, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => iV.includes(e) }, "onClick:clear": Bt(), "onClick:appendInner": Bt(), "onClick:prependInner": Bt(), ...ke(), ...xr(), ...ot(), ...We() }, "VField"), La = ee()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...fi(), ...mi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = Ke(e), { loaderClasses: i } = ri(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = pa(e), { InputIcon: d } = di(e), { roundedClasses: f } = dt(e), { rtlClasses: v } = _t(), S = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), y = B(() => !e.singleLine && m.value), h = Mt(), w = _(() => e.id || `input-${h}`), I = B(() => e.details ? `${w.value}-messages` : void 0), V = K(), x = K(), g = K(), C = _(() => ["plain", "underlined"].includes(e.variant)), k = _(() => e.error || e.disabled ? void 0 : S.value && s.value ? e.color : e.baseColor), A = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? k.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: E } = qe(() => e.bgColor), { textColorClasses: D, textColorStyles: M } = Et(k);
  ce(S, (X) => {
    if (y.value && !Wn()) {
      const Z = V.value.$el, L = x.value.$el;
      requestAnimationFrame(() => {
        const G = tc(Z), W = L.getBoundingClientRect(), O = W.x - G.x, j = W.y - G.y - (G.height / 2 - W.height / 2), se = W.width / 0.75, Se = Math.abs(se - G.width) > 1 ? { maxWidth: ve(se) } : void 0, ae = getComputedStyle(Z), me = getComputedStyle(L), ie = parseFloat(ae.transitionDuration) * 1e3 || 150, he = parseFloat(me.getPropertyValue("--v-field-label-scale")), fe = me.getPropertyValue("color");
        Z.style.visibility = "visible", L.style.visibility = "hidden", aa(Z, { transform: `translate(${O}px, ${j}px) scale(${he})`, color: fe, ...Se }, { duration: ie, easing: Fo, direction: X ? "normal" : "reverse" }).finished.then(() => {
          Z.style.removeProperty("visibility"), L.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const T = _(() => ({ isActive: S, isFocused: s, controlRef: g, iconColor: A, blur: c, focus: u })), F = B(() => {
    const X = !S.value;
    return { "aria-hidden": X, for: X ? void 0 : w.value };
  }), z = B(() => {
    const X = y.value && S.value;
    return { "aria-hidden": X, for: X ? void 0 : w.value };
  });
  function N(X) {
    X.target !== document.activeElement && X.preventDefault();
  }
  return ne(() => {
    var _a3;
    const X = e.variant === "outlined", Z = !!(l["prepend-inner"] || e.prependInnerIcon), L = !!(e.clearable || l.clear) && !e.disabled, G = !!(l["append-inner"] || e.appendInnerIcon || L), W = () => l.label ? l.label({ ...T.value, label: e.label, props: { for: w.value } }) : e.label;
    return p("div", Y({ class: ["v-field", { "v-field--active": S.value, "v-field--appended": G, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": Z, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !W(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [E.value, e.style], onClick: N }, n), [p("div", { class: "v-field__overlay" }, null), b(si, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), Z && p("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](T.value) : e.prependInnerIcon && b(d, { key: "prepend-icon", name: "prependInner", color: A.value }, null)]), p("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && b(mo, Y({ key: "floating-label", ref: x, class: [D.value], floating: true }, F.value, { style: M.value }), { default: () => [W()] }), m.value && b(mo, Y({ key: "label", ref: V, id: e.labelId }, z.value), { default: () => [W()] }), ((_a3 = l.default) == null ? void 0 : _a3.call(l, { ...T.value, props: { id: w.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? p("div", { id: w.value, class: "v-field__input", "aria-describedby": I.value }, null)]), L && b(gc, { key: "clear" }, { default: () => [nt(p("div", { class: "v-field__clearable", onMousedown: (O) => {
      O.preventDefault(), O.stopPropagation();
    } }, [b(Me, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...T.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : b(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[En, e.dirty]])] }), G && p("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](T.value) : e.appendInnerIcon && b(d, { key: "append-icon", name: "appendInner", color: A.value }, null)]), p("div", { class: te(["v-field__outline", D.value]), style: ge(M.value) }, [X && p(be, null, [p("div", { class: "v-field__outline__start" }, null), y.value && p("div", { class: "v-field__outline__notch" }, [b(mo, Y({ ref: x, floating: true }, F.value), { default: () => [W()] })]), p("div", { class: "v-field__outline__end" }, null)]), C.value && y.value && b(mo, Y({ ref: x, floating: true }, F.value), { default: () => [W()] })])]);
  }), { controlRef: g, fieldIconColor: A };
} }), qg = H({ autocomplete: String }, "autocomplete");
function Mc(e) {
  const t = Mt(), n = ue(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Xg(e) {
  function t(n, a) {
    var _a3;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a3 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const rV = ["color", "file", "time", "date", "datetime-local", "week", "month"], hi = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...qg(), ...Le(Sa(), ["direction"]), ...mi() }, "VTextField"), Yn = ee()({ name: "VTextField", directives: { vIntersect: Tn }, inheritAttrs: false, props: hi(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = Xg(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = K(), S = K(), m = K(), y = Mc(e), h = _(() => rV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function w() {
    y.isSuppressing.value && y.update(), i.value || r(), Ae(() => {
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
    C.stopPropagation(), w(), Ae(() => {
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
    const A = k.value, P = k.selectionStart, E = k.selectionEnd;
    o.value = A, Ae(() => {
      let D = 0;
      A.trimStart().length === k.value.length && (D = A.length - k.value.length), P != null && (k.selectionStart = P - D), E != null && (k.selectionEnd = E - D);
    });
  }
  return ne(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), k = !!(C || l.details), [A, P] = qn(n), { modelValue: E, ...D } = Ot.filterProps(e), M = La.filterProps(e);
    return b(Ot, Y({ ref: v, modelValue: o.value, "onUpdate:modelValue": (T) => o.value = T, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, A, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (T) => {
      let { id: F, isDisabled: z, isDirty: N, isReadonly: X, isValid: Z, hasDetails: L, reset: G } = T;
      return b(La, Y({ ref: S, onMousedown: I, onClick: V, "onClick:clear": (W) => x(W, G), role: e.role }, Le(M, ["onClick:clear"]), { id: F.value, labelId: `${F.value}-label`, active: h.value || N.value, dirty: N.value || e.dirty, disabled: z.value, focused: i.value, details: L.value, error: Z.value === false }), { ...l, default: (W) => {
        let { props: { class: O, ...j }, controlRef: se } = W;
        const Se = p("input", Y({ ref: (ae) => m.value = se.value = ae, value: o.value, onInput: g, autofocus: e.autofocus, readonly: X.value, disabled: z.value, name: y.fieldName.value, autocomplete: y.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${F.value}-label` }, j, P), null);
        return p(be, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [p("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), nt(l.default ? p("div", { class: te(O), "data-no-activator": "" }, [l.default({ id: F }), Se]) : ca(Se, { class: O }), [[Tn, u, null, { once: true }]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [p("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: k ? (T) => {
      var _a3;
      return p(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, T), C && p(be, null, [p("span", null, null), b(Vr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, v, S, m);
} }), sV = H({ renderless: Boolean, ...ke() }, "VVirtualScrollItem"), Zg = ee()({ name: "VVirtualScrollItem", inheritAttrs: false, props: sV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = Sn(void 0, "border");
  ce(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), ne(() => {
    var _a3, _b2;
    return e.renderless ? p(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { itemRef: o })]) : p("div", Y({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), uV = -1, cV = 1, ys = 100, Jg = H({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Qg(e, t) {
  const n = nn(), a = ue(0);
  ct(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ue(0), o = ue(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = ue(0), r = ue(0), s = K(), u = K();
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
  const h = ue(0);
  let w = -1;
  function I(L) {
    return m[L] || a.value;
  }
  const V = fh(() => {
    const L = performance.now();
    y[0] = 0;
    const G = t.value.length;
    for (let W = 1; W <= G; W++) y[W] = (y[W - 1] || 0) + I(W - 1);
    h.value = Math.max(h.value, performance.now() - L);
  }, h), x = ce(S, (L) => {
    L && (x(), c = u.value.offsetTop, V.immediate(), z(), ~w && Ae(() => {
      Ze && window.requestAnimationFrame(() => {
        X(w), w = -1;
      });
    }));
  });
  bt(() => {
    V.clear();
  });
  function g(L, G) {
    const W = m[L], O = a.value;
    a.value = O ? Math.min(a.value, G) : G, (W !== G || O !== a.value) && (m[L] = G, V());
  }
  function C(L) {
    L = Xe(L, 0, t.value.length);
    const G = Math.floor(L), W = L % 1, O = G + 1, j = y[G] || 0, se = y[O] || j;
    return j + (se - j) * W;
  }
  function k(L) {
    return dV(y, L);
  }
  let A = 0, P = 0, E = 0;
  ce(v, (L, G) => {
    z(), L < G && requestAnimationFrame(() => {
      P = 0, z();
    });
  });
  let D = -1;
  function M() {
    if (!s.value || !u.value) return;
    const L = s.value.scrollTop, G = performance.now();
    G - E > 500 ? (P = Math.sign(L - A), c = u.value.offsetTop) : P = L - A, A = L, E = G, window.clearTimeout(D), D = window.setTimeout(T, 500), z();
  }
  function T() {
    !s.value || !u.value || (P = 0, E = 0, window.clearTimeout(D), z());
  }
  let F = -1;
  function z() {
    cancelAnimationFrame(F), F = requestAnimationFrame(N);
  }
  function N() {
    if (!s.value || !v.value || !a.value) return;
    const L = A - c, G = Math.sign(P), W = Math.max(0, L - ys), O = Xe(k(W), 0, t.value.length), j = L + v.value + ys, se = Xe(k(j) + 1, O + 1, t.value.length);
    if ((G !== uV || O < l.value) && (G !== cV || se > o.value)) {
      const Se = C(l.value) - C(O), ae = C(se) - C(o.value);
      Math.max(Se, ae) > ys ? (l.value = O, o.value = se) : (O <= 0 && (l.value = O), se >= t.value.length && (o.value = se));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function X(L) {
    const G = C(L);
    !s.value || L && !G ? w = L : s.value.scrollTop = G;
  }
  const Z = _(() => t.value.slice(l.value, o.value).map((L, G) => {
    const W = G + l.value;
    return { raw: L, index: W, key: pt(L, e.itemKey, W) };
  }));
  return ce(t, () => {
    m = Array.from({ length: t.value.length }), y = Array.from({ length: t.value.length }), V.immediate(), z();
  }, { deep: 1 }), { calculateVisibleItems: z, containerRef: s, markerRef: u, computedItems: Z, paddingTop: i, paddingBottom: r, scrollToIndex: X, handleScroll: M, handleScrollend: T, handleItemResize: g };
}
function dV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const fV = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Jg(), ...ke(), ...kt() }, "VVirtualScroll"), Ir = ee()({ name: "VVirtualScroll", props: fV(), setup(e, t) {
  let { slots: n } = t;
  const a = St("VVirtualScroll"), { dimensionStyles: l } = wt(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: S } = Qg(e, B(() => e.items));
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
    const m = S.value.map((y) => b(Zg, { key: y.key, renderless: e.renderless, "onUpdate:height": (h) => c(y.index, h) }, { default: (h) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: y.raw, index: y.index, ...h });
    } }));
    return e.renderless ? p(be, null, [p("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ve(f.value) } }, null), m, p("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ve(v.value) } }, null)]) : p("div", { ref: i, class: te(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: ge([l.value, e.style]) }, [p("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ve(f.value), paddingBottom: ve(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function Bc(e, t) {
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
function $c(e) {
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
const vV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function bs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const wl = H({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function mV(e, t, n) {
  var _a3, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? vV, o = (n == null ? void 0 : n.filterKeys) ? lt(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
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
          if (v = V ? V(I, t, u) : l(I, t, u), v !== -1 && v !== false) V ? d[w] = bs(v, t) : f[w] = bs(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = bs(v, t));
      const m = Object.keys(f).length, y = Object.keys(d).length;
      if (!m && !y || (n == null ? void 0 : n.filterMode) === "union" && y !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (y !== i || !m && i > 0 && !S)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function xl(e, t, n, a) {
  const l = ue([]), o = ue(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Ue(t).map((s) => [s, a.transform(s)]) : Ue(t));
  ct(() => {
    const s = typeof n == "function" ? n() : Ue(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = mV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Ue(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Ue(t), f = [], v = /* @__PURE__ */ new Map();
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
    return l === n.length - 1 && i.push(p("span", { class: te(`${e}__unmask`) }, [t.slice(a[1])])), p(be, null, [i]);
  });
}
const hV = H({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function Lc(e, t) {
  const n = Mt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => tt(t)), ariaControls: B(() => a.value) };
}
const Rc = H({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: _e, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...hV(), ...Bg({ itemChildren: false }) }, "Select"), gV = H({ search: String, ...wl({ filterKeys: ["title"] }), ...Rc(), ...Le(hi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...ga({ transition: { component: Sr } }) }, "VSelect"), Oc = ee()({ name: "VSelect", props: gV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), l = K(), o = K(), i = K(), r = K(), s = K(), { items: u, transformIn: c, transformOut: d } = _c(e), f = Ce(e, "search", ""), { filteredItems: v, getMatches: S } = xl(e, u, () => f.value), m = Ce(e, "modelValue", [], (fe) => c(fe === null ? [null] : lt(fe)), (fe) => {
    const $ = d(fe);
    return e.multiple ? $ : $[0] ?? null;
  }), y = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), h = ao(e), w = Mc(e), I = _(() => m.value.map((fe) => fe.value)), V = ue(false), x = B(() => e.closableChips && !h.isReadonly.value && !h.isDisabled.value), { InputIcon: g } = di(e);
  let C = "", k = 0, A;
  const P = _(() => {
    const fe = f.value ? v.value : u.value;
    return e.hideSelected ? fe.filter(($) => !m.value.some((R) => (e.valueComparator || Dt)(R, $))) : fe;
  }), E = _(() => e.hideNoData && !P.value.length || h.isReadonly.value || h.isDisabled.value), D = Ce(e, "menu"), M = _({ get: () => D.value, set: (fe) => {
    var _a3;
    D.value && !fe && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || fe && E.value || (D.value = fe);
  } }), { menuId: T, ariaExpanded: F, ariaControls: z } = Lc(e, M), N = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), X = K(), Z = Bc(X, l), { onTabKeydown: L } = $c({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: X, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    M.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function G(fe) {
    e.openOnClear && (M.value = true);
  }
  function W() {
    E.value || (M.value = !M.value);
  }
  function O(fe) {
    var _a3;
    fe.key === "Tab" && L(fe), ((_a3 = X.value) == null ? void 0 : _a3.$el.contains(fe.target)) && jl(fe) && j(fe);
  }
  function j(fe) {
    var _a3, _b2, _c2;
    if (!fe.key || h.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(fe.key) && fe.preventDefault(), ["Enter", "ArrowDown", " "].includes(fe.key) && (M.value = true), ["Escape", "Tab"].includes(fe.key) && (M.value = false), e.clearable && fe.key === "Backspace") {
      fe.preventDefault(), m.value = [], G();
      return;
    }
    fe.key === "Home" ? (_a3 = X.value) == null ? void 0 : _a3.focus("first") : fe.key === "End" && ((_b2 = X.value) == null ? void 0 : _b2.focus("last"));
    const $ = 1e3;
    if (!jl(fe)) return;
    const R = performance.now();
    R - A > $ && (C = "", k = 0), C += fe.key.toLowerCase(), A = R;
    const J = P.value;
    function re() {
      let U = Q();
      return U || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), k++, U = Q(), U) || (k = 0, U = Q(), U) ? U : (C = fe.key.toLowerCase(), Q());
    }
    function Q() {
      for (let U = k; U < J.length; U++) {
        const oe = J[U];
        if (oe.title.toLowerCase().startsWith(C)) return [oe, U];
      }
    }
    const le = re();
    if (!le) return;
    const [pe, de] = le;
    k = de, (_c2 = X.value) == null ? void 0 : _c2.focus(de), e.multiple || (m.value = [pe]);
  }
  function se(fe) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!fe.props.disabled) if (e.multiple) {
      const R = m.value.findIndex((re) => (e.valueComparator || Dt)(re.value, fe.value)), J = $ ?? !~R;
      if (~R) {
        const re = J ? [...m.value, fe] : [...m.value];
        re.splice(R, 1), m.value = re;
      } else J && (m.value = [...m.value, fe]);
    } else {
      const R = $ !== false;
      m.value = R ? [fe] : [], Ae(() => {
        M.value = false;
      });
    }
  }
  function Se(fe) {
    var _a3;
    const $ = fe.target;
    ((_a3 = l.value) == null ? void 0 : _a3.$el.contains($)) || (M.value = false);
  }
  function ae() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function me() {
    var _a3;
    f.value = "", V.value && ((_a3 = l.value) == null ? void 0 : _a3.focus());
  }
  function ie(fe) {
    V.value = true;
  }
  function he(fe) {
    if (fe == null) m.value = [];
    else if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const $ = u.value.find((R) => R.title === fe);
      $ && se($);
    } else l.value && (l.value.value = "");
  }
  return ce(M, () => {
    if (!e.hideSelected && M.value && m.value.length) {
      const fe = P.value.findIndex(($) => m.value.some((R) => (e.valueComparator || Dt)(R.value, $.value)));
      Ze && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        fe >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(fe));
      });
    }
  }), ce(u, (fe, $) => {
    M.value || V.value && e.hideNoData && !$.length && fe.length && (M.value = true);
  }), ne(() => {
    const fe = !!(e.chips || n.chip), $ = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), R = m.value.length > 0, J = Yn.filterProps(e), re = R || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, Q = { search: f, filteredItems: v.value };
    return b(Yn, Y({ ref: l }, J, { modelValue: m.value.map((le) => le.props.title).join(", "), name: void 0, "onUpdate:modelValue": he, focused: V.value, "onUpdate:focused": (le) => V.value = le, validationValue: m.externalValue, counterValue: y.value, dirty: R, class: ["v-select", { "v-select--active-menu": M.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: re, "onClick:clear": G, "onMousedown:control": W, onBlur: Se, onKeydown: j, "aria-expanded": F.value, "aria-controls": z.value }), { ...n, default: (le) => {
      let { id: pe } = le;
      return p(be, null, [p("select", { hidden: true, multiple: e.multiple, name: w.fieldName.value }, [u.value.map((de) => p("option", { key: de.value, value: de.value, selected: I.value.includes(de.value) }, null))]), b(ql, Y({ id: T.value, ref: o, modelValue: M.value, "onUpdate:modelValue": (de) => M.value = de, activator: "parent", contentClass: "v-select__content", disabled: E.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: ae, onAfterLeave: me }, N.value), { default: () => [b(Fa, { onFocusin: ie, onKeydown: O }, { default: () => [n["menu-header"] && p("header", { ref: i }, [n["menu-header"](Q)]), $ && b(Kl, Y({ key: "select-list", ref: X, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${pe.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, Z, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(kn, { key: "no-data", title: a(e.noDataText) }, null)), b(Ir, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (de) => {
          var _a4, _b3, _c3;
          let { item: U, index: oe, itemRef: Ve } = de;
          const q = Iw(U.props), ye = Y(U.props, { ref: Ve, key: U.value, onClick: () => se(U, null), "aria-posinset": oe + 1, "aria-setsize": P.value.length });
          return U.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: U.raw, index: oe })) ?? b(dn, Y(U.props, { key: `divider-${oe}` }), null) : U.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: U.raw, index: oe })) ?? b(lo, Y(U.props, { key: `subheader-${oe}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: U, index: oe, props: ye })) ?? b(kn, Y(ye, { role: "option" }), { prepend: (we) => {
            let { isSelected: xe } = we;
            return p(be, null, [e.multiple && !e.hideSelected ? b(Dn, { key: U.value, modelValue: xe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ie) => Ie.preventDefault() }, null) : void 0, q.prependAvatar && b(vn, { image: q.prependAvatar }, null), q.prependIcon && b(Ge, { icon: q.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Fc("v-select", U.title, (_a5 = S(U)) == null ? void 0 : _a5.title) : U.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: r }, [n["menu-footer"](Q)])] })] }), m.value.map((de, U) => {
        function oe(we) {
          we.stopPropagation(), we.preventDefault(), se(de, false);
        }
        const Ve = Y(fa.filterProps(de.props), { "onClick:close": oe, onKeydown(we) {
          we.key !== "Enter" && we.key !== " " || (we.preventDefault(), we.stopPropagation(), oe(we));
        }, onMousedown(we) {
          we.preventDefault(), we.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), q = fe ? !!n.chip : !!n.selection, ye = q ? hr(fe ? n.chip({ item: de, index: U, props: Ve }) : n.selection({ item: de, index: U })) : void 0;
        if (!(q && !ye)) return p("div", { key: de.value, class: "v-select__selection" }, [fe ? n.chip ? b(Me, { key: "chip-defaults", defaults: { VChip: { closable: x.value, size: "small", text: de.title } } }, { default: () => [ye] }) : b(fa, Y({ key: "chip", closable: x.value, size: "small", text: de.title, disabled: de.props.disabled }, Ve), null) : ye ?? p("span", { class: "v-select__selection-text" }, [de.title, e.multiple && U < m.value.length - 1 && p("span", { class: "v-select__selection-comma" }, [ut(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var le = arguments.length, pe = new Array(le), de = 0; de < le; de++) pe[de] = arguments[de];
      return p(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...pe), e.menuIcon ? b(Ge, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && b(g, { key: "append-icon", name: "appendInner", color: pe[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: V, menu: M, search: f, filteredItems: v, select: se }, l);
} }), yV = H({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...wl({ filterKeys: ["title"] }), ...Rc(), ...Le(hi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), bV = ee()({ name: "VAutocomplete", props: yV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), l = K(), o = ue(false), i = ue(true), r = ue(false), s = K(), u = K(), c = ue(-1), d = ue(null), { items: f, transformIn: v, transformOut: S } = _c(e), { textColorClasses: m, textColorStyles: y } = Et(() => {
    var _a3;
    return (_a3 = l.value) == null ? void 0 : _a3.color;
  }), { InputIcon: h } = di(e), w = Ce(e, "search", ""), I = Ce(e, "modelValue", [], (U) => v(U === null ? [null] : lt(U)), (U) => {
    const oe = S(U);
    return e.multiple ? oe : oe[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), x = ao(e), { filteredItems: g, getMatches: C } = xl(e, f, () => d.value ?? (i.value ? "" : w.value)), k = _(() => e.hideSelected && d.value === null ? g.value.filter((U) => !I.value.some((oe) => oe.value === U.value)) : g.value), A = B(() => e.closableChips && !x.isReadonly.value && !x.isDisabled.value), P = _(() => !!(e.chips || n.chip)), E = _(() => P.value || !!n.selection), D = _(() => I.value.map((U) => U.props.value)), M = _(() => k.value.find((U) => U.type === "item" && !U.props.disabled)), T = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && w.value === ((_a3 = M.value) == null ? void 0 : _a3.title)) && k.value.length > 0 && !i.value && !r.value;
  }), F = _(() => e.hideNoData && !k.value.length || x.isReadonly.value || x.isDisabled.value), z = Ce(e, "menu"), N = _({ get: () => z.value, set: (U) => {
    var _a3;
    z.value && !U && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || U && F.value || (z.value = U);
  } }), { menuId: X, ariaExpanded: Z, ariaControls: L } = Lc(e, N), G = K(), W = K(), O = K(), j = Bc(G, l), { onTabKeydown: se } = $c({ groups: [{ type: "element", contentRef: W }, { type: "list", contentRef: G, displayItemsCount: () => k.value.length }, { type: "element", contentRef: O }], onLeave: () => {
    var _a3;
    N.value = false, (_a3 = l.value) == null ? void 0 : _a3.focus();
  } });
  function Se(U) {
    e.openOnClear && (N.value = true), w.value = "";
  }
  function ae() {
    F.value || (N.value = true);
  }
  function me(U) {
    F.value || (o.value && (U.preventDefault(), U.stopPropagation()), N.value = !N.value);
  }
  function ie(U) {
    var _a3, _b2;
    U.key === "Tab" && se(U), ((_a3 = G.value) == null ? void 0 : _a3.$el.contains(U.target)) && (jl(U) || U.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function he(U) {
    var _a3, _b2, _c2, _d2, _e2;
    if (x.isReadonly.value) return;
    const oe = (_a3 = l.value) == null ? void 0 : _a3.selectionStart, Ve = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(U.key) && U.preventDefault(), ["Enter", "ArrowDown"].includes(U.key) && (N.value = true), ["Escape"].includes(U.key) && (N.value = false), T.value && ["Enter", "Tab"].includes(U.key) && M.value && !I.value.some((q) => {
      let { value: ye } = q;
      return ye === M.value.value;
    }) && de(M.value), U.key === "ArrowDown" && T.value && ((_b2 = G.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(U.key)) {
      if (!e.multiple && E.value && I.value.length > 0 && !w.value) return de(I.value[0], false);
      if (~c.value) {
        U.preventDefault();
        const q = c.value;
        de(I.value[c.value], false), c.value = q >= Ve - 1 ? Ve - 2 : q;
      } else U.key === "Backspace" && !w.value && (c.value = Ve - 1);
      return;
    }
    if (e.multiple) if (U.key === "ArrowLeft") {
      if (c.value < 0 && oe && oe > 0) return;
      const q = c.value > -1 ? c.value - 1 : Ve - 1;
      if (I.value[q]) c.value = q;
      else {
        const ye = ((_c2 = w.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = l.value) == null ? void 0 : _d2.setSelectionRange(ye, ye);
      }
    } else if (U.key === "ArrowRight") {
      if (c.value < 0) return;
      const q = c.value + 1;
      I.value[q] ? c.value = q : (c.value = -1, (_e2 = l.value) == null ? void 0 : _e2.setSelectionRange(0, 0));
    } else ~c.value && jl(U) && (c.value = -1);
  }
  function fe(U) {
    if (Wl(l.value, ":autofill") || Wl(l.value, ":-webkit-autofill")) {
      const oe = f.value.find((Ve) => Ve.title === U.target.value);
      oe && de(oe);
    }
  }
  function $() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function R() {
    var _a3;
    o.value && (i.value = true, (_a3 = l.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function J(U) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function re(U) {
    r.value = false;
  }
  function Q(U) {
    (U == null || U === "" && !e.multiple && !E.value) && (I.value = []);
  }
  function le(U) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(U.relatedTarget)) && (o.value = true);
  }
  const pe = ue(false);
  function de(U) {
    let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!U || U.props.disabled)) if (e.multiple) {
      const Ve = I.value.findIndex((ye) => (e.valueComparator || Dt)(ye.value, U.value)), q = oe ?? !~Ve;
      if (~Ve) {
        const ye = q ? [...I.value, U] : [...I.value];
        ye.splice(Ve, 1), I.value = ye;
      } else q && (I.value = [...I.value, U]);
      e.clearOnSelect && (w.value = "");
    } else {
      const Ve = oe !== false;
      I.value = Ve ? [U] : [], d.value = i.value ? "" : w.value ?? "", w.value = Ve && !E.value ? U.title : "", Ae(() => {
        N.value = false, i.value = true;
      });
    }
  }
  return ce(o, (U, oe) => {
    var _a3;
    U !== oe && (U ? (pe.value = true, w.value = e.multiple || E.value ? "" : String(((_a3 = I.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Ae(() => pe.value = false)) : (!e.multiple && w.value == null && (I.value = []), N.value = false, !i.value && w.value && (d.value = w.value), w.value = "", c.value = -1));
  }), ce(w, (U) => {
    !o.value || pe.value || (U && (N.value = true), i.value = !U);
  }), ce(N, (U) => {
    if (!e.hideSelected && U && I.value.length && i.value) {
      const oe = k.value.findIndex((Ve) => I.value.some((q) => Ve.value === q.value));
      Ze && window.requestAnimationFrame(() => {
        var _a3;
        oe >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(oe));
      });
    }
    U && (d.value = null);
  }), ce(f, (U, oe) => {
    N.value || o.value && !oe.length && U.length && (N.value = true);
  }), ne(() => {
    const U = !!(!e.hideNoData || k.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), oe = I.value.length > 0, Ve = Yn.filterProps(e), q = { search: w, filteredItems: g.value };
    return b(Yn, Y({ ref: l }, Ve, { modelValue: w.value, "onUpdate:modelValue": [(ye) => w.value = ye, Q], focused: o.value, "onUpdate:focused": (ye) => o.value = ye, validationValue: I.externalValue, counterValue: V.value, dirty: oe, onChange: fe, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": N.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!E.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: x.isReadonly.value, placeholder: oe ? void 0 : e.placeholder, "onClick:clear": Se, "onMousedown:control": ae, onKeydown: he, onBlur: le, "aria-expanded": Z.value, "aria-controls": L.value }), { ...n, default: (ye) => {
      let { id: we } = ye;
      return p(be, null, [b(ql, Y({ id: X.value, ref: s, modelValue: N.value, "onUpdate:modelValue": (xe) => N.value = xe, activator: "parent", contentClass: "v-autocomplete__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: $, onAfterLeave: R }, e.menuProps), { default: () => [b(Fa, { onFocusin: J, onKeydown: ie }, { default: () => [n["menu-header"] && p("header", { ref: W }, [n["menu-header"](q)]), U && b(Kl, Y({ key: "autocomplete-list", ref: G, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (xe) => xe.preventDefault(), onFocusout: re, tabindex: "-1", selectable: !!k.value.length, "aria-live": "polite", "aria-labelledby": `${we.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, j, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !k.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(kn, { key: "no-data", title: a(e.noDataText) }, null)), b(Ir, { ref: u, renderless: true, items: k.value, itemKey: "value" }, { default: (xe) => {
          var _a4, _b3, _c3;
          let { item: Ie, index: $e, itemRef: je } = xe;
          const Re = Y(Ie.props, { ref: je, key: Ie.value, active: T.value && Ie === M.value ? true : void 0, onClick: () => de(Ie, null), "aria-posinset": $e + 1, "aria-setsize": k.value.length });
          return Ie.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ie.raw, index: $e })) ?? b(dn, Y(Ie.props, { key: `divider-${$e}` }), null) : Ie.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ie.raw, index: $e })) ?? b(lo, Y(Ie.props, { key: `subheader-${$e}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ie, index: $e, props: Re })) ?? b(kn, Y(Re, { role: "option" }), { prepend: (ft) => {
            let { isSelected: at } = ft;
            return p(be, null, [e.multiple && !e.hideSelected ? b(Dn, { key: Ie.value, modelValue: at, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (an) => an.preventDefault() }, null) : void 0, Ie.props.prependAvatar && b(vn, { image: Ie.props.prependAvatar }, null), Ie.props.prependIcon && b(Ge, { icon: Ie.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ie.title : Fc("v-autocomplete", Ie.title, (_a5 = C(Ie)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && p("footer", { ref: O }, [n["menu-footer"](q)])] })] }), I.value.map((xe, Ie) => {
        function $e(at) {
          at.stopPropagation(), at.preventDefault(), de(xe, false);
        }
        const je = Y(fa.filterProps(xe.props), { "onClick:close": $e, onKeydown(at) {
          at.key !== "Enter" && at.key !== " " || (at.preventDefault(), at.stopPropagation(), $e(at));
        }, onMousedown(at) {
          at.preventDefault(), at.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Re = P.value ? !!n.chip : !!n.selection, ft = Re ? hr(P.value ? n.chip({ item: xe, index: Ie, props: je }) : n.selection({ item: xe, index: Ie })) : void 0;
        if (!(Re && !ft)) return p("div", { key: xe.value, class: te(["v-autocomplete__selection", Ie === c.value && ["v-autocomplete__selection--selected", m.value]]), style: ge(Ie === c.value ? y.value : {}) }, [P.value ? n.chip ? b(Me, { key: "chip-defaults", defaults: { VChip: { closable: A.value, size: "small", text: xe.title } } }, { default: () => [ft] }) : b(fa, Y({ key: "chip", closable: A.value, size: "small", text: xe.title, disabled: xe.props.disabled }, je), null) : ft ?? p("span", { class: "v-autocomplete__selection-text" }, [xe.title, e.multiple && Ie < I.value.length - 1 && p("span", { class: "v-autocomplete__selection-comma" }, [ut(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ye = arguments.length, we = new Array(ye), xe = 0; xe < ye; xe++) we[xe] = arguments[xe];
      return p(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...we), e.menuIcon ? b(Ge, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: me, onClick: mr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && b(h, { key: "append-icon", name: "appendInner", color: we[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: o, isPristine: i, menu: N, search: w, filteredItems: g, select: de }, l);
} }), pV = H({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: _e, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...ke(), ...Zn({ location: "top end" }), ...ot(), ...De(), ...We(), ...ga({ transition: "scale-rotate-transition" }), ...kt() }, "VBadge"), ey = ee()({ name: "VBadge", inheritAttrs: false, props: pV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = qe(() => e.color), { roundedClasses: l } = dt(e), { t: o } = Je(), { textColorClasses: i, textColorStyles: r } = Et(() => e.textColor), { themeClasses: s } = pr(), { locationStyles: u } = Oa(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = wt(e);
  return ne(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, S] = Ls(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return b(e.tag, Y({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, S, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [p("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), b(Gt, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [nt(p("span", Y({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? b(Ge, { icon: e.icon }, null) : f]), [[En, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), SV = H({ color: String, density: String, ...ke() }, "VBannerActions"), ty = ee()({ name: "VBannerActions", props: SV(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), ne(() => {
    var _a3;
    return p("div", { class: te(["v-banner-actions", e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), ny = ha("v-banner-text"), kV = H({ avatar: String, bgColor: String, color: String, icon: _e, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Ht(), ...ke(), ...ht(), ...kt(), ...hl({ mobile: null }), ...xt(), ...Zn(), ...eo(), ...ot(), ...De(), ...We() }, "VBanner"), wV = ee()({ name: "VBanner", props: kV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.bgColor), { borderClasses: o } = qt(e), { densityClasses: i } = Lt(e), { displayClasses: r, mobile: s } = nn(e), { dimensionStyles: u } = wt(e), { elevationClasses: c } = It(e), { locationStyles: d } = Oa(e), { positionClasses: f } = to(e), { roundedClasses: v } = dt(e), { themeClasses: S } = Ke(e), m = B(() => e.color), y = B(() => e.density);
  mt({ VBannerActions: { color: m, density: y } }), ne(() => {
    const h = !!(e.text || n.text), w = !!(e.avatar || e.icon), I = !!(w || n.prepend);
    return b(e.tag, { class: te(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, S.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: ge([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [I && p("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? b(Me, { key: "prepend-defaults", disabled: !w, defaults: { VAvatar: { color: m.value, density: y.value, icon: e.icon, image: e.avatar } } }, n.prepend) : b(vn, { key: "prepend-avatar", color: m.value, density: y.value, icon: e.icon, image: e.avatar }, null)]), p("div", { class: "v-banner__content" }, [h && b(ny, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && b(ty, { key: "actions" }, n.actions)];
    } });
  });
} }), xV = H({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Ht(), ...ke(), ...ht(), ...xt(), ...ot(), ...gl({ name: "bottom-navigation" }), ...De({ tag: "header" }), ...pl({ selectedClass: "v-btn--selected" }), ...We() }, "VBottomNavigation"), CV = ee()({ name: "VBottomNavigation", props: xV(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = pr(), { borderClasses: l } = qt(e), { backgroundColorClasses: o, backgroundColorStyles: i } = qe(() => e.bgColor), { densityClasses: r } = Lt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), { ssrBootStyles: c } = bl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ce(e, "active", e.active), { layoutItemStyles: v } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Na(e, bc), mt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), ne(() => b(e.tag, { class: te(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: ge([i.value, v.value, { height: ve(d.value) }, c.value, e.style]) }, { default: () => [n.default && p("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), ay = H({ fullscreen: Boolean, scrollable: Boolean, ...Le(vi({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: Sr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), lu = ee()({ name: "VDialog", props: ay(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { scopeId: o } = kl(), i = K();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return ce(l, async (u) => {
    var _a3;
    u || (await Ae(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
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
} }), _V = H({ inset: Boolean, ...ay({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), VV = ee()({ name: "VBottomSheet", props: _V(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue");
  return ne(() => {
    const l = lu.filterProps(e);
    return b(lu, Y(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), IV = H({ divider: [Number, String], ...ke() }, "VBreadcrumbsDivider"), ly = ee()({ name: "VBreadcrumbsDivider", props: IV(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    var _a3;
    return p("li", { "aria-hidden": "true", class: te(["v-breadcrumbs-divider", e.class]), style: ge(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), PV = H({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...ke(), ...Jt(kt(), ["width", "maxWidth"]), ...ci(), ...De({ tag: "li" }) }, "VBreadcrumbsItem"), oy = ee()({ name: "VBreadcrumbsItem", props: PV(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = ui(e, a), o = _(() => {
    var _a3;
    return e.active || ((_a3 = l.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = wt(e), { textColorClasses: r, textColorStyles: s } = Et(() => o.value ? e.activeColor : e.color);
  return ne(() => b(e.tag, { class: te(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: ge([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [l.isLink.value ? p("a", Y({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), AV = H({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: _e, items: { type: Array, default: () => [] }, ...ke(), ...ht(), ...ot(), ...De({ tag: "ul" }) }, "VBreadcrumbs"), TV = ee()({ name: "VBreadcrumbs", props: AV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.bgColor), { densityClasses: o } = Lt(e), { roundedClasses: i } = dt(e);
  mt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return ne(() => {
    const s = !!(n.prepend || e.icon);
    return b(e.tag, { class: te(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: ge([l.value, e.style]) }, { default: () => {
      var _a3;
      return [s && p("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? b(Me, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : b(Ge, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return p(be, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? b(oy, Y({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && b(ly, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), DV = H({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...ke(), ...xt(), ...cg(), ...ot(), ...De({ tag: "button" }), ...We(), ...gn({ variant: "flat" }) }, "VIconBtn"), iy = ee()({ name: "VIconBtn", props: DV(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "active"), { themeClasses: o } = Ke(e), { borderClasses: i } = qt(e), { elevationClasses: r } = It(e), { roundedClasses: s } = dt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ba(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return ne(() => {
    const S = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, h = f.has(m) ? f.get(m) : m, w = e.height ?? h, I = e.width ?? h, { iconSize: V } = dg(e, () => new Map(e.iconSizes).get(m)), x = { icon: S, size: V.value, color: e.iconColor, opacity: e.opacity };
    return b(e.tag, { type: e.tag === "button" ? "button" : void 0, class: te([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: ge([{ "--v-icon-btn-rotate": ve(e.rotate, "deg"), "--v-icon-btn-height": ve(w), "--v-icon-btn-width": ve(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [ya(!e.hideOverlay, "v-icon-btn"), p("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && S ? b(Ge, Y({ key: "content-icon" }, x), null) : b(Me, { key: "content-defaults", disabled: !S, defaults: { VIcon: { ...x } } }, { default: () => {
        var _a4;
        return ((_a4 = a.default) == null ? void 0 : _a4.call(a)) ?? Fe(e.text);
      } })]), !!e.loading && p("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = a.loader) == null ? void 0 : _a3.call(a)) ?? b(Ba, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function EV(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const ry = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, sy = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, MV = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], BV = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], $V = 28, FV = 31, Nc = 12, uy = 1, Pr = 1, Aa = 7, lv = 60, LV = 59, RV = 1440, OV = 24, NV = 23, HV = 0, zV = 1e4, WV = 100, jV = 100, UV = 1e4;
function YV(e, t, n) {
  const a = en(e);
  return hy(a, t[0], my), Vn(a), n && rl(a, n, a.hasTime), a;
}
function GV(e, t, n) {
  const a = en(e);
  return hy(a, t[t.length - 1]), Vn(a), n && rl(a, n, a.hasTime), a;
}
function cy(e) {
  const t = en(e);
  return t.day = Pr, Ar(t), Vn(t), t;
}
function dy(e) {
  const t = en(e);
  return t.day = zc(t.year, t.month), Ar(t), Vn(t), t;
}
function Dl(e) {
  return isFinite(parseInt(e));
}
function KV(e) {
  return typeof e == "number" && isFinite(e) || !!sy.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function ov(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = sy.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function Ol(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!ry.exec(e) || e instanceof Date;
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = Hc(e);
    return n && rl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = ry.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Ar(l), Vn(l), n && rl(l, n, l.hasTime), l;
}
function Hc(e) {
  return Vn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Vt(e) {
  return e.year * zV + e.month * WV + e.day;
}
function ou(e) {
  return e.hour * jV + e.minute;
}
function Ra(e) {
  return Vt(e) * UV + ou(e);
}
function rl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Vt(t), l = Vt(e), o = a === l;
  return e.hasTime && n && o && (a = ou(t), l = ou(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function iv(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function rv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = NV, e.minute = LV, e.time = vy(e))), e;
}
function fy(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, iu(e, t), Vn(e), n && rl(e, n, true), e;
}
function Ar(e) {
  return e.weekday = qV(e), e;
}
function Vn(e) {
  return e.time = vy(e), e.date = XV(e), e;
}
function qV(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % Nc + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function zc(e, t) {
  return EV(e) ? BV[t] : MV[t];
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
function XV(e) {
  let t = `${tl(e.year, 4)}-${tl(e.month, 2)}`;
  return e.hasDay && (t += `-${tl(e.day, 2)}`), t;
}
function vy(e) {
  return e.hasTime ? `${tl(e.hour, 2)}:${tl(e.minute, 2)}` : "";
}
function iu(e, t) {
  for (e.minute += t; e.minute >= lv; ) e.minute -= lv, e.hour++, e.hour >= OV && (Ta(e), e.hour = HV);
  return e;
}
function Ta(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Aa, e.day > $V && e.day > zc(e.year, e.month) && (e.day = Pr, e.month++, e.month > Nc && (e.month = uy, e.year++)), e;
}
function my(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Aa, e.day < Pr && (e.month--, e.month < uy && (e.year--, e.month = Nc), e.day = zc(e.year, e.month)), e;
}
function Ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ta, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function ZV(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function hy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ta, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function JV(e) {
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
function ru(e) {
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
      s = Ta(s);
      continue;
    }
    const d = en(s);
    Vn(d), rl(d, n), r.push(d), s = Ka(s, Ta, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function QV(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = en(e);
    o.push(fy(s, r, l));
  }
  return o;
}
function _o(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(ru(a));
    } catch {
      return "";
    }
  };
}
function eI(e) {
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
function tI(e) {
  const t = Tt({ now: ia("0000-00-00 00:00", true), today: ia("0000-00-00", true) }), n = _(() => e.now && Ol(e.now) ? ia(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return Hc(/* @__PURE__ */ new Date());
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
const Tr = H({ start: { type: [String, Number, Date], validate: Ol, default: () => Hc(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: Ol }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: eI }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: Ol }, type: { type: String, default: "month" } }, "VCalendar-base");
function Wc(e) {
  const { times: t, updateTimes: n } = tI({ now: e.now }), a = Eh(e), l = ml(), o = _(() => e.type === "month" ? cy(ia(e.start, true)) : ia(e.start, true)), i = _(() => {
    const V = o.value, x = e.end && ia(e.end) || V, g = Ra(x) < Ra(V) ? V : x;
    return e.type === "month" ? dy(g) : g;
  }), r = _(() => Ol(e.modelValue) ? ia(e.modelValue, true) : o.value || t.today), s = _(() => {
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
  }), c = _(() => JV(s.value)), d = _(() => Qi(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : _o(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : _o(a.current.value, (V, x) => ({ timeZone: "UTC", weekday: x ? "short" : "long" })));
  function S(V) {
    return Xh(V);
  }
  function m(V) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": x };
  }
  function y(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function h(V) {
    return YV(V, s.value, t.today);
  }
  function w(V) {
    return GV(V, s.value, t.today);
  }
  function I(V) {
    return _o(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: S, getRelativeClasses: m, getWeekNumber: y, getStartOfWeek: h, getEndOfWeek: w, getFormatter: I, updateTimes: n };
}
const gy = H({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Dl }, intervalWidth: { type: [Number, String], default: 60, validate: Dl }, intervalMinutes: { type: [Number, String], default: 60, validate: Dl }, firstInterval: { type: [Number, String], default: 0, validate: Dl }, firstTime: { type: [Number, String, Object], validate: KV }, intervalCount: { type: [Number, String], default: 24, validate: Dl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function yy(e) {
  const t = Wc(e), n = ue(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => ov(e.firstTime)), s = _(() => {
    const x = r.value;
    return x !== false && x >= 0 && x <= RV ? x : a.value * l.value;
  }), u = _(() => o.value * i.value), c = _(() => Qi(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const x = c.value, g = s.value, C = l.value, k = o.value, A = t.times.now;
    return x.map((P) => QV(P, g, C, k, A));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : _o(t.locale.current.value, (x, g) => g ? x.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(x) {
    const g = d.value[0][0];
    return !(g.hour === x.hour && g.minute === x.minute);
  }
  function S(x) {
  }
  function m(x, g) {
    const C = en(g), k = x.currentTarget.getBoundingClientRect(), A = s.value, P = x, E = x, D = P.changedTouches || P.touches, T = ((D && D[0] ? D[0].clientY : E.clientY) - k.top) / i.value, F = Math.floor(T * l.value), z = A + F;
    return fy(C, z, t.times.now);
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
    let A = V(x, typeof g != "boolean" ? g : void 0);
    return A === false || (A *= u.value, C ? A < 0 ? A = 0 : A > u.value && (A = u.value) : A < 0 ? A = A + u.value : A > u.value && (A = A - u.value)), A;
  }
  function V(x, g) {
    let C = ov(x);
    if (C === false) return false;
    const k = o.value * l.value;
    if (g && typeof x == "object" && "day" in x) {
      const P = Vt(x), E = Vt(g);
      C += (P - E) * k;
    }
    const A = s.value;
    return (C - A) / k;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: S, getTimestampAtEvent: m, getSlotScope: y, scrollToTime: h, minutesToPixels: w, timeToY: I, timeDelta: V };
}
function nI(e, t) {
  var _a3, _b2;
  const n = t.value, a = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function aI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const Go = { mounted: nI, unmounted: aI }, ho = Kt({ name: "VCalendarDaily", directives: { vResize: Go }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Tr(), ...gy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = K(0), o = K(), i = yy(e);
  function r() {
    Ae(s);
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
  function v(M, T) {
    const F = cn(a, ":day", (z) => ({ nativeEvent: z, ...i.getSlotScope(M) }));
    return p("div", Y({ key: M.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(M)] }, F), [m(M), y(M), S(M, T)]);
  }
  function S(M, T) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...M, index: T })) ?? [];
  }
  function m(M) {
    const T = M.present ? e.color : void 0;
    return p("div", Y(i.getColorProps({ text: T }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(M, e.shortWeekdays)]);
  }
  function y(M) {
    var _a3;
    return p("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, M)) ?? h(M)]);
  }
  function h(M) {
    const T = cn(a, ":date", (F) => ({ nativeEvent: F, ...M }));
    return b(iy, Y({ active: M.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": mr }, T), { default: () => [i.dayFormatter.value(M, false)] });
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
    return i.days.value.map((M, T) => {
      const F = cn(a, ":time", (z) => ({ nativeEvent: z, ...i.getSlotScope(i.getTimestampAtEvent(z, M)) }));
      return p("div", Y({ key: M.date, class: ["v-calendar-daily__day", i.getRelativeClasses(M)] }, F), [k(T), C(M)]);
    });
  }
  function C(M) {
    var _a3;
    return ((_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i.getSlotScope(M))) ?? [];
  }
  function k(M) {
    return i.intervals.value[M].map(A);
  }
  function A(M) {
    var _a3;
    const T = ve(e.intervalHeight), F = e.intervalStyle || i.intervalStyleDefault;
    return p("div", { class: "v-calendar-daily__day-interval", key: M.time, style: ge([{ height: T }, F(M)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(M))]);
  }
  function P() {
    const M = ve(e.intervalWidth), T = cn(a, ":interval", (F) => ({ nativeEvent: F, ...i.getTimestampAtEvent(F, i.parsedStart.value) }));
    return p("div", Y({ class: "v-calendar-daily__intervals-body", style: { width: M } }, T), [E()]);
  }
  function E() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(M) {
    const T = ve(e.intervalHeight), F = e.shortIntervals, X = (e.showIntervalLabel || i.showIntervalLabelDefault)(M) ? i.intervalFormatter.value(M, F) : void 0;
    return p("div", { key: M.time, class: "v-calendar-daily__interval", style: { height: T } }, [p("div", { class: "v-calendar-daily__interval-text" }, [X])]);
  }
  return Ct(r), ne(() => nt(p("div", { class: te(["v-calendar-daily", a.class]), onDragstart: (M) => M.preventDefault() }, [e.hideHeader ? void 0 : c(), w()]), [[Go, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function lI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function by(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : lI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const oI = Kt({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Tr(), ...gy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = yy(e), o = _(() => by(e.categories, e.categoryText));
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
    return p("div", { key: y.time, class: "v-calendar-daily__day-interval", style: ge([{ height: w }, I({ ...y, category: h })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(l.getSlotScope(y), h))]);
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
} }), sv = Kt({ name: "VCalendarWeekly", props: { minWeeks: { validate: Dl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Tr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Wc(e), o = pr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
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
    const C = x.map((k, A) => w(k, A, x));
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
    const k = c(x), A = cn(a, ":day", (P) => ({ nativeEvent: P, ...x }));
    return p("div", Y({ key: x.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(x, k)], role: "cell" }, A), [I(x), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: k, index: g, week: C, ...x })]);
  }
  function I(x) {
    var _a3;
    return p("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, x)) ?? V(x)]);
  }
  function V(x) {
    const g = x.day === 1 && e.showMonthOnFirst, C = cn(a, ":date", (k) => ({ nativeEvent: k, ...x }));
    return b(iy, Y({ active: x.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": mr }, C), { default: () => [g ? u.value(x, e.shortMonths) + " " + l.dayFormatter.value(x, false) : l.dayFormatter.value(x, false)] });
  }
  return ne(() => p("div", { class: te(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (x) => x.preventDefault() }, [e.hideHeader ? void 0 : d(), S()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), iI = 864e5;
function py(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function In(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function uv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function Sy(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function ky(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function wy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + iI, e.endTimestampIdentifier)];
}
function rI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (In(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? Sy(s.event) : ky(s.event);
      if (In(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function xy(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Ra(n), r = py(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? Sy(s.event) : ky(s.event);
      t.groups.length > 0 && !In(u, c, t.min, t.max, l) && (uv(t.groups), t.reset());
      let d = rI(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), uv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const cv = 100, sI = (e, t, n) => {
  const a = xy(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * cv / u.columnCount, u.width = cv / u.columnCount;
    }), s;
  };
}, _i = 100, uI = 5, cI = 1.7, dI = (e, t, n) => {
  const a = xy(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Ra(l), u = py(o, s), c = bI(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const S = pI(v, s), m = hI(S, f);
        if (m === false) {
          const y = gI(S, f);
          y && (S.parent = y, S.sibling = In(S.start, S.end, y.start, Mi(y.start, n)), S.index = y.index + 1, y.children.push(S));
        } else {
          const [y] = dv(S, f, m - 1, m - 1), h = dv(S, f, m + 1, m + f.length, true);
          S.children = h, S.index = m, y && (S.parent = y, S.sibling = In(S.start, S.end, y.start, Mi(y.start, n)), y.children.push(S));
          for (const w of h) w.parent === y && (w.parent = S), w.index - S.index <= 1 && S.sibling && In(S.start, Mi(S.start, n), w.start, w.end) && (w.sibling = true);
        }
        f.push(S);
      }
      fI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function fI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = Cy(n) + 1, i = l ? l.visual.left : 0, r = _i - i, s = Math.min(uI, _i / o), u = vI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = yI(n, e, t) ? _i - a.left : Math.min(_i - a.left, d * cI);
  }
}
function vI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function mI(e, t) {
  const n = [];
  for (const a of t) In(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function hI(e, t) {
  const n = mI(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function dv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && In(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function gI(e, t) {
  let n = null;
  for (const a of t) In(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function yI(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && In(e.start, Mi(e.start, n), a.start, a.end)) return false;
  return true;
}
function bI(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = wy(a.event, t);
    let i = false;
    for (const r of n) if (In(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function pI(e, t) {
  const [n, a] = wy(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function Cy(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = Cy(n);
    a > t && (t = a);
  }
  return t;
}
function Mi(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const _y = { stack: dI, column: sI };
function SI(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = ia(i, true), u = r ? ia(r, true) : s, c = iv(i) ? rv(s, l) : s, d = iv(r) ? rv(u, l) : u, f = Vt(c), v = Ra(c), S = Vt(d), m = c.hasTime ? 0 : 2359, y = Ra(d) + m, h = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: S, endTimestampIdentifier: y, allDay: h, index: t, category: o };
}
function jc(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function kI(e, t, n) {
  if (n) {
    const a = iu(en(t), n[0]), l = iu(en(t), n[1]), o = e.startTimestampIdentifier < Ra(l), i = e.endTimestampIdentifier > Ra(a);
    return o && i;
  }
  return jc(e, Vt(t));
}
function wI(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function fv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && jc(e, n);
}
function xI(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const CI = 100, _I = 95, VI = H({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in _y || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function II(e, t, n) {
  const a = Wc(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (T) => !!T[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (T) => T[e.eventCategory]), s = _(() => e.events ? e.events.map((T, F) => SI(T, F, e.eventStart || "", e.eventEnd || "", i.value(T), o.value ? r.value(T) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (T, F) => T.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : _y[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
  function S(T) {
    return typeof e.eventColor == "function" ? e.eventColor(T) : T.color || e.eventColor;
  }
  const m = K([]);
  function y() {
    if (l.value || !e.eventMore) return;
    const T = e.eventHeight || 0, F = h();
    for (const z in F) {
      const { parent: N, events: X, more: Z } = F[z];
      if (!Z) break;
      const L = N.getBoundingClientRect(), G = X.length - 1, W = X.map((j) => ({ event: j, bottom: j.getBoundingClientRect().bottom })).sort((j, se) => j.bottom - se.bottom);
      let O = 0;
      for (let j = 0; j <= G; j++) {
        const se = W[j].bottom;
        (j === G ? se > L.bottom : se + T > L.bottom) && (W[j].event.style.display = "none", O++);
      }
      O ? (Z.style.display = "", Z.innerHTML = a.locale.t(e.eventMoreText, O)) : Z.style.display = "none";
    }
  }
  function h() {
    const T = {}, F = m.value;
    return !F || !F.length || F.forEach((z) => {
      const N = z.getAttribute("data-date");
      z.parentElement && N && (N in T || (T[N] = { parent: z.parentElement, more: null, events: [] }), z.getAttribute("data-more") ? T[N].more = z : (T[N].events.push(z), z.style.display = ""));
    }), T;
  }
  function w(T, F) {
    let { event: z } = T;
    const N = e.eventHeight || 0, X = e.eventMarginBottom || 0, Z = Vt(F), L = F.week, G = Z === z.startIdentifier;
    let W = Z === z.endIdentifier, O = _I;
    if (!o.value) for (let se = F.index + 1; se < L.length; se++) {
      const Se = Vt(L[se]);
      if (z.endIdentifier >= Se) O += CI, W = W || Se === z.endIdentifier;
      else {
        W = true;
        break;
      }
    }
    return V(z, { eventParsed: z, day: F, start: G, end: W, timed: false }, false, { class: ["v-event", { "v-event-start": G, "v-event-end": W }], style: { height: `${N}px`, width: `${O}%`, marginBottom: `${X}px` }, "data-date": F.date });
  }
  function I(T, F) {
    let { event: z, left: N, width: X } = T;
    const Z = F.timeDelta(z.start, F), L = F.timeDelta(z.end, F);
    if (L === false || Z === false || L < 0 || Z >= 1 || wI(z, F)) return false;
    const G = Vt(F), W = z.startIdentifier >= G, O = z.endIdentifier > G, j = F.timeToY(z.start, F), se = F.timeToY(z.end, F), Se = Math.max(e.eventHeight || 0, se - j);
    return V(z, { eventParsed: z, day: F, start: W, end: O, timed: true }, true, { class: "v-event-timed", style: { top: `${j}px`, height: `${Se}px`, left: `${N}%`, width: `${X}%` } });
  }
  function V(T, F, z, N) {
    const X = t.event, Z = c.value(T.input), L = S(T.input), G = T.start.hour < 12 && T.end.hour >= 12, W = ZV(T.start, T.end) <= u.value, O = (me, ie) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: me.minute > 0 ? "numeric" : void 0 })(me, true), j = () => O(T.start) + " - " + O(T.end), se = () => {
      const me = d.value(T, z);
      if (T.start.hasTime) if (z) {
        const ie = j(), he = W ? ", " : p("br", null, null);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [me]), he, ie]);
      } else {
        const ie = O(T.start);
        return p("span", { class: "v-event-summary" }, [p("strong", null, [ie]), ut(" "), me]);
      }
      return p("span", { class: "v-event-summary" }, [me]);
    }, Se = { ...F, event: T.input, outside: F.day.outside, singline: W, overlapsNoon: G, formatTime: O, timeSummary: j, eventSummary: se }, ae = cn(n, ":event", (me) => ({ ...Se, nativeEvent: me }));
    return nt(p("div", Y(a.getColorProps({ text: Z, background: L }), ae, N, { ref_for: true, ref: m }), [(X == null ? void 0 : X(Se)) ?? x(se)]), [[Ft, e.eventRipple ?? true]]);
  }
  function x(T) {
    return p("div", { class: "pl-1" }, [T()]);
  }
  function g(T) {
    const F = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return p("div", { style: { height: `${F}px` }, "data-date": T.date, ref_for: true, ref: m }, null);
  }
  function C(T) {
    const F = e.eventHeight || 0, z = e.eventMarginBottom || 0, N = cn(n, ":more", (X) => ({ nativeEvent: X, ...T }));
    return nt(p("div", Y({ class: ["v-event-more pl-1", { "v-outside": T.outside }], "data-date": T.date, "data-more": "1", style: { display: "none", height: `${F}px`, marginBottom: `${z}px` }, ref_for: true, ref: m }, N), null), [[Ft, e.eventRipple ?? true]]);
  }
  function k() {
    const T = a.days.value, F = Vt(T[0]), z = Vt(T[T.length - 1]);
    return s.value.filter((N) => xI(N, F, z));
  }
  function A(T, F) {
    return !o.value || typeof F == "object" && F.categoryName && F.categoryName === T.category || typeof T.category == "string" && F === T.category || typeof T.category != "string" && F === null;
  }
  function P(T) {
    const F = Vt(T), z = v.value[0];
    return s.value.filter((N) => fv(N, T, F, z));
  }
  function E(T) {
    const F = Vt(T), z = v.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? jc(N, F) : fv(N, T, F, z)) && A(N, T.category));
  }
  function D(T) {
    return s.value.filter((F) => !F.allDay && kI(F, T, T.intervalRange) && A(F, T.category));
  }
  function M() {
    if (l.value) return { ...t };
    const T = f.value(s.value, v.value[0], u.value), F = (N) => !!N, z = (N, X, Z, L) => {
      const G = X(N), W = T(N, G, L, o.value);
      if (L) return W.map((j) => Z(j, N)).filter(F);
      const O = [];
      return W.forEach((j, se) => {
        for (; O.length < j.column; ) O.push(g(N));
        const Se = Z(j, N);
        Se && O.push(Se);
      }), O;
    };
    return { ...t, day: (N) => {
      let X = z(N, P, w, false);
      if (X && X.length > 0 && e.eventMore && X.push(C(N)), t.day) {
        const Z = t.day(N);
        Z && (X = X ? X.concat(Z) : Z);
      }
      return X;
    }, "day-header": (N) => {
      let X = z(N, E, w, false);
      if (t["day-header"]) {
        const Z = t["day-header"](N);
        Z && (X = X ? X.concat(Z) : Z);
      }
      return X;
    }, "day-body": (N) => {
      const X = z(N, D, I, true);
      let Z = [p("div", { class: "v-event-timed-container" }, [X])];
      if (t["day-body"]) {
        const L = t["day-body"](N);
        L && (Z = Z.concat(L));
      }
      return Z;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: S, eventsRef: m, updateEventVisibility: y, getEventsMap: h, genDayEvent: w, genTimedEvent: I, genEvent: V, genName: x, genPlaceholder: g, genMore: C, getVisibleEvents: k, isEventForCategory: A, getEventsForDay: P, getEventsForDayAll: E, getEventsForDayTimed: D, getScopedSlots: M };
}
const PI = ee()({ name: "VCalendar", directives: { vResize: Go }, props: { modelValue: { type: [String, Number, Date], validate: Ol }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Tr(), ...VI() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = K(), i = II(e, n, a), r = K(null), s = K(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => by(e.categories, e.categoryText)), d = _(() => {
    const g = i.parsedValue.value;
    let C = null, k = e.maxDays, A = c.value, P = g, E = g;
    switch (e.type) {
      case "month":
        C = sv, P = cy(g), E = dy(g);
        break;
      case "week":
        C = ho, P = i.getStartOfWeek(g), E = i.getEndOfWeek(g), k = 7;
        break;
      case "day":
        C = ho, k = 1;
        break;
      case "4day":
        C = ho, E = Ka(en(E), Ta, 3), Vn(E), k = 4;
        break;
      case "custom-weekly":
        C = sv, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = ho, P = i.parsedStart.value || g, E = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = oI, E = Ka(en(E), Ta, D), Vn(E), k = D, A = x(A);
        break;
      default:
        const M = e.type;
        throw new Error(`${M} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: E, maxDays: k, categories: A };
  }), f = _(() => i.effectiveWeekdays.value), v = _(() => e.type === "category"), S = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), y = _(() => {
    const { start: g, end: C } = d.value, k = g.year !== C.year, A = k || g.month !== C.month;
    return k ? m.value(g, true) + " " + g.year + " - " + m.value(C, true) + " " + C.year : A ? m.value(g, true) + " - " + m.value(C, true) + " " + C.year : S.value(g, false) + " " + g.year;
  });
  function h() {
    const { start: g, end: C } = d.value;
    (!r.value || !s.value || g.date !== r.value.date || C.date !== s.value.date) && (r.value = g, s.value = C, l("change", { start: g, end: C }));
  }
  function w() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = en(i.parsedValue.value), k = g > 0, A = k ? Ta : my, P = k ? FV : Pr;
    let E = k ? g : -g;
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
    Ar(C), Vn(C), rl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", ru(C)) : typeof e.modelValue == "number" ? l("update:modelValue", ru(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
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
      const C = g.reduce((k, A, P) => (typeof A == "object" && A.categoryName ? k[A.categoryName] = { index: P, count: 0 } : typeof A == "string" && (k[A] = { index: P, count: 0 }), k), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let k = g.length;
        i.parsedEvents.value.forEach((A) => {
          let P = A.category;
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
    const { start: g, end: C, maxDays: k, component: A, categories: P } = d.value;
    return nt(b(A, Y({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, A.filterProps(e), { start: g.date, end: C.date, maxDays: k, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (E, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[Go, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Pt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: y, monthLongFormatter: S, monthShortFormatter: m, parsedCategories: c, checkChange: h, move: w, next: I, prev: V, getCategoryList: x }, o);
} }), AI = H({ ...ke(), ...De() }, "VCardActions"), Vy = ee()({ name: "VCardActions", props: AI(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { slim: true, variant: "text" } }), ne(() => b(e.tag, { class: te(["v-card-actions", e.class]), style: ge(e.style) }, n)), {};
} }), TI = H({ opacity: [Number, String], ...ke(), ...De() }, "VCardSubtitle"), Iy = ee()({ name: "VCardSubtitle", props: TI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-card-subtitle", e.class]), style: ge([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Py = ha("v-card-title"), DI = H({ appendAvatar: String, appendIcon: _e, prependAvatar: String, prependIcon: _e, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...ke(), ...ht(), ...De() }, "VCardItem"), Ay = ee()({ name: "VCardItem", props: DI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return b(e.tag, { class: te(["v-card-item", e.class]), style: ge(e.style) }, { default: () => {
      var _a3;
      return [l && p("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? b(Me, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : p(be, null, [e.prependAvatar && b(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), p("div", { class: "v-card-item__content" }, [r && b(Py, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Fe(e.title)];
      } }), s && b(Iy, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Fe(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && p("div", { key: "append", class: "v-card-item__append" }, [n.append ? b(Me, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : p(be, null, [e.appendIcon && b(Ge, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && b(vn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), EI = H({ opacity: [Number, String], ...ke(), ...De() }, "VCardText"), Ty = ee()({ name: "VCardText", props: EI(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => b(e.tag, { class: te(["v-card-text", e.class]), style: ge([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), MI = H({ appendAvatar: String, appendIcon: _e, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: _e, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Ht(), ...ke(), ...ht(), ...kt(), ...xt(), ...xr(), ...Zn(), ...eo(), ...ot(), ...ci(), ...De(), ...We(), ...gn({ variant: "elevated" }) }, "VCard"), BI = ee()({ name: "VCard", directives: { vRipple: Ft }, props: MI(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { borderClasses: o } = qt(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ba(e), { densityClasses: u } = Lt(e), { dimensionStyles: c } = wt(e), { elevationClasses: d } = It(e), { loaderClasses: f } = ri(e), { locationStyles: v } = Oa(e), { positionClasses: S } = to(e), { roundedClasses: m } = dt(e), y = ui(e, n), h = ue(void 0);
  return ce(() => e.loading, (w, I) => {
    h.value = !w && typeof I == "string" ? I : typeof w == "boolean" ? void 0 : w;
  }, { immediate: true }), ne(() => {
    const w = e.link !== false && y.isLink.value, I = !e.disabled && e.link !== false && (e.link || y.isClickable.value), V = w ? "a" : e.tag, x = !!(a.title || e.title != null), g = !!(a.subtitle || e.subtitle != null), C = x || g, k = !!(a.append || e.appendAvatar || e.appendIcon), A = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), E = C || A || k, D = !!(a.text || e.text != null);
    return nt(b(V, Y(y.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, u.value, d.value, f.value, S.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": ve(e.height) }, e.style], onClick: I && y.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && p("div", { key: "image", class: "v-card__image" }, [a.image ? b(Me, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : b(da, { key: "image-img", cover: true, src: e.image }, null)]), b(si, { name: "v-card", active: !!e.loading, color: h.value }, { default: a.loader }), E && b(Ay, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && b(Ty, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = a.text) == null ? void 0 : _a4.call(a)) ?? e.text];
      } }), (_a3 = a.default) == null ? void 0 : _a3.call(a), a.actions && b(Vy, null, { default: a.actions }), ya(I, "v-card")];
    } }), [[Ft, I && e.ripple]]);
  }), {};
} }), $I = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function FI(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function LI(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), $I(t);
}
function RI(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function OI() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => FI(n, t), touchend: (n) => LI(n, t), touchmove: (n) => RI(n, t) };
}
function NI(e, t) {
  var _a3;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!a || o === void 0) return;
  const i = OI(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, ch(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function HI(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  ch(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const er = { mounted: NI, unmounted: HI }, Dy = Symbol.for("vuetify:v-window"), Ey = Symbol.for("vuetify:v-window-group"), Dr = H({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...ke(), ...De(), ...We() }, "VWindow"), sl = ee()({ name: "VWindow", directives: { vTouch: er }, props: Dr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isRtl: l } = _t(), { t: o } = Je(), i = Na(e, Ey), r = K(), s = _(() => l.value ? !e.reverse : e.reverse), u = ue(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const g = e.direction === "vertical" ? "y" : "x", k = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${g}${k}-transition`;
  }), d = ue(0), f = K(void 0), v = _(() => i.items.value.findIndex((g) => i.selected.value.includes(g.id)));
  ce(v, (g, C) => {
    let k;
    const A = { left: 0, top: 0 };
    Ze && C >= 0 && (k = gr(r.value), A.left = k == null ? void 0 : k.scrollLeft, A.top = k == null ? void 0 : k.scrollTop);
    const P = i.items.value.length, E = P - 1;
    P <= 2 ? u.value = g < C : g === E && C === 0 ? u.value = false : g === 0 && C === E ? u.value = true : u.value = g < C, Ae(() => {
      if (!Ze || !k) return;
      k.scrollTop !== A.top && k.scrollTo({ ...A, behavior: "instant" }), requestAnimationFrame(() => {
        if (!k) return;
        k.scrollTop !== A.top && k.scrollTo({ ...A, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), it(Dy, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
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
    (e.direction === "horizontal" && g.key === "ArrowLeft" || e.direction === "vertical" && g.key === "ArrowUp") && (g.preventDefault(), y(), Ae(() => {
      S.value ? x(0) : x(1);
    })), (e.direction === "horizontal" && g.key === "ArrowRight" || e.direction === "vertical" && g.key === "ArrowDown") && (g.preventDefault(), h(), Ae(() => {
      m.value ? x(1) : x(0);
    }));
  }
  function x(g) {
    var _a3;
    const C = w.value[g];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return ne(() => nt(b(e.tag, { ref: r, class: te(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: ge([e.style, { "--v-window-transition-duration": Wn() ? null : ve(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [p("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && p("div", { class: te(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [w.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[er, I.value]])), { group: i };
} }), zI = H({ color: String, cycle: Boolean, delimiterIcon: { type: _e, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Dr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), WI = ee()({ name: "VCarousel", props: zI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { t: l } = Je(), o = K();
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
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Ae(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Ae(() => {
      var _a3, _b2;
      return (_b2 = (_a3 = o.value) == null ? void 0 : _a3.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return ne(() => {
    const c = sl.filterProps(e);
    return b(sl, Y({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ve(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return p(be, null, [!e.hideDelimiters && p("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && b(Me, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, S) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", S + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (y) => u(y, f) };
        return n.item ? n.item({ props: m, item: v }) : b(Ne, Y(v, m), null);
      })] })]), e.progress && b(wr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), Er = H({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...ke(), ...Sl(), ...Tc() }, "VWindowItem"), ul = ee()({ name: "VWindowItem", directives: { vTouch: er }, props: Er(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(Dy), l = Ma(e, Ey), { isBooted: o } = bl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = ue(false), r = _(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
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
    i.value && Ae(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ve(S.clientHeight));
    });
  }
  const f = _(() => {
    const S = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof S != "string" ? a.transition.value : S, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = Dc(e, l.isSelected);
  return ne(() => b(Gt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [nt(p("div", { class: te(["v-window-item", l.selectedClass.value, e.class]), style: ge(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[En, l.isSelected.value]])];
  } })), { groupItem: l };
} }), jI = H({ ...Zh(), ...Er() }, "VCarouselItem"), UI = ee()({ name: "VCarouselItem", inheritAttrs: false, props: jI(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  ne(() => {
    const l = da.filterProps(e), o = ul.filterProps(e);
    return b(ul, Y({ class: ["v-carousel-item", e.class] }, o), { default: () => [b(da, Y(a, l), n)] });
  });
} }), YI = ha("v-code", "code"), GI = H({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...ke() }, "VColorPickerCanvas"), KI = Kt({ name: "VColorPickerCanvas", props: GI(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = ue(false), l = K(), o = ue(parseFloat(e.width)), i = ue(parseFloat(e.height)), r = K({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(h) {
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
    const w = xw(h);
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
  }, { deep: true, immediate: true }), Ct(() => y()), ne(() => p("div", { ref: d, class: te(["v-color-picker-canvas", e.class]), style: ge(e.style), onMousedown: v, onTouchstartPassive: v }, [p("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && p("div", { class: te(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: ge(c.value) }, null)])), {};
} });
function qI(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function XI(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = jn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = Hs(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = Vh(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return Xa(t, ["r", "g", "b"]) ? n = jn(e) : Xa(t, ["h", "s", "l"]) ? n = Hs(e) : Xa(t, ["h", "s", "v"]) && (n = e), qI(n, !Xa(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Bl = { h: 0, s: 0, v: 0, a: 1 }, su = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: jn, from: li }, ZI = { ...su, inputs: (_a2 = su.inputs) == null ? void 0 : _a2.slice(0, 3) }, uu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Hs, from: ac }, JI = { ...uu, inputs: uu.inputs.slice(0, 3) }, My = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: Vh, from: Kw }, QI = { ...My, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, nl = { rgb: ZI, rgba: su, hsl: JI, hsla: uu, hex: QI, hexa: My }, eP = (e) => {
  let { label: t, ...n } = e;
  return p("div", { class: "v-color-picker-edit__input" }, [p("input", hp(Om(n)), null), p("span", null, [t])]);
}, tP = H({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, ...ke() }, "VColorPickerEdit"), nP = Kt({ name: "VColorPickerEdit", props: tP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
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
    return p("div", { class: te(["v-color-picker-edit", e.class]), style: ge(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => b(eP, i, null)), l.value.length > 1 && b(Ne, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), Uc = Symbol.for("vuetify:v-slider");
function cu(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function aP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const By = H({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...ot(), ...xt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), $y = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(sf(a.value), sf(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = Xe(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, Fy = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = ao(t), { isRtl: s } = _t(), u = B(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: v, step: S, decimals: m, roundValue: y } = n, h = _(() => parseInt(t.thumbSize, 10)), w = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (v.value - f.value) / S.value), x = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), g = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), k = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), A = ue(false), P = ue(0), E = K(), D = K();
  function M(ae) {
    var _a3;
    const me = (_a3 = E.value) == null ? void 0 : _a3.$el;
    if (!me) return;
    const ie = t.direction === "vertical", he = ie ? "top" : "left", fe = ie ? "height" : "width", $ = ie ? "clientY" : "clientX", { [he]: R, [fe]: J } = me.getBoundingClientRect(), re = aP(ae, $);
    let Q = Xe((re - R - P.value) / J) || 0;
    return (ie ? d.value : d.value !== s.value) && (Q = 1 - Q), y(f.value + Q * (v.value - f.value));
  }
  const T = (ae) => {
    const me = M(ae);
    me != null && o({ value: me }), A.value = false, P.value = 0;
  }, F = (ae) => {
    const me = M(ae);
    D.value = i(ae), D.value && (A.value = true, D.value.contains(ae.target) ? P.value = cu(ae, D.value, t.direction) : (P.value = 0, me != null && l({ value: me })), me != null && a({ value: me }), Ae(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, z = { passive: true, capture: true };
  function N(ae) {
    const me = M(ae);
    me != null && l({ value: me });
  }
  function X(ae) {
    ae.stopPropagation(), ae.preventDefault(), T(ae), window.removeEventListener("mousemove", N, z), window.removeEventListener("mouseup", X);
  }
  function Z(ae) {
    var _a3;
    T(ae), window.removeEventListener("touchmove", N, z), (_a3 = ae.target) == null ? void 0 : _a3.removeEventListener("touchend", Z);
  }
  function L(ae) {
    var _a3;
    F(ae), window.addEventListener("touchmove", N, z), (_a3 = ae.target) == null ? void 0 : _a3.addEventListener("touchend", Z, { passive: false });
  }
  function G(ae) {
    ae.button === 0 && (ae.preventDefault(), F(ae), window.addEventListener("mousemove", N, z), window.addEventListener("mouseup", X, { passive: false }));
  }
  bt(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", X);
  });
  const W = (ae) => {
    const me = (ae - f.value) / (v.value - f.value) * 100;
    return Xe(isNaN(me) ? 0 : me, 0, 100);
  }, O = B(() => t.showTicks), j = _(() => O.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((ae) => ({ value: ae, position: W(ae), label: ae.toString() })) : Object.keys(t.ticks).map((ae) => ({ value: parseFloat(ae), position: W(parseFloat(ae)), label: t.ticks[ae] })) : V.value !== 1 / 0 ? On(V.value + 1).map((ae) => {
    const me = f.value + ae * S.value;
    return { value: me, position: W(me) };
  }) : [] : []), se = _(() => j.value.some((ae) => {
    let { label: me } = ae;
    return !!me;
  })), Se = { activeThumbRef: D, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: se, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: A, noKeyboard: B(() => t.noKeyboard), numTicks: V, onSliderMousedown: G, onSliderTouchstart: L, parsedTicks: j, parseMouseMove: M, position: W, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: y, showTicks: O, startOffset: P, step: S, thumbSize: h, thumbColor: x, thumbLabelColor: g, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: w, trackColor: C, trackContainerRef: E, trackFillColor: k, trackSize: I, vertical: c };
  return it(Uc, Se), Se;
}, lP = H({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...ke() }, "VSliderThumb"), du = ee()({ name: "VSliderThumb", directives: { vRipple: Ft }, props: lP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = He(Uc), { isRtl: o, rtlClasses: i } = _t();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: S, direction: m, isReversed: y, vertical: h, readonly: w, elevation: I, mousePressed: V, decimals: x, indexFromEnd: g } = l, C = ue(false), k = ue(false), A = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = It(A), { textColorClasses: E, textColorStyles: D } = Et(u), { backgroundColorClasses: M, backgroundColorStyles: T } = qe(c), { pageup: F, pagedown: z, end: N, home: X, left: Z, right: L, down: G, up: W } = Fs, O = [F, z, N, X, Z, L, G, W], j = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function se(ae, me) {
    if (e.noKeyboard || f.value || !O.includes(ae.key)) return;
    ae.preventDefault();
    const ie = d.value || 0.1, he = (s.value - r.value) / ie;
    if ([Z, L, G, W].includes(ae.key)) {
      const $ = (h.value ? [o.value ? Z : L, y.value ? G : W] : g.value !== o.value ? [Z, W] : [L, W]).includes(ae.key) ? 1 : -1, R = ae.shiftKey ? 2 : ae.ctrlKey ? 1 : 0;
      $ === -1 && me === s.value && !R && !Number.isInteger(he) ? me = me - he % 1 * ie : me = me + $ * ie * j.value[R];
    } else if (ae.key === X) me = r.value;
    else if (ae.key === N) me = s.value;
    else {
      const fe = ae.key === z ? 1 : -1;
      me = me - fe * ie * (he > 100 ? he / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, me));
  }
  function Se(ae) {
    const me = se(ae, e.modelValue);
    me != null && (k.value = false, a("update:modelValue", me));
  }
  return ce(() => e.focused, (ae) => {
    ae && (k.value = false);
  }), ne(() => {
    const ae = ve(g.value ? 100 - e.position : e.position, "%"), me = S.value === "always" || S.value === true && e.focused || S.value === "hover" && (C.value || e.focused && !k.value);
    return p("div", { class: te(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: ge([{ "--v-slider-thumb-position": ae, "--v-slider-thumb-size": ve(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!w.value, "aria-orientation": m.value, onKeydown: w.value ? void 0 : Se, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, k.value = true;
    } }, [p("div", { class: te(["v-slider-thumb__surface", E.value, P.value]), style: ge(D.value) }, null), nt(p("div", { class: te(["v-slider-thumb__ripple", E.value]), style: ge(D.value) }, null), [[Ft, e.ripple, null, { circle: true, center: true }]]), b(mc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [nt(p("div", { class: "v-slider-thumb__label-container" }, [p("div", { class: te(["v-slider-thumb__label", M.value]), style: ge(T.value) }, [p("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? x.value : 1)]), p("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[En, me]])];
    } })]);
  }), {};
} }), oP = H({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...ke() }, "VSliderTrack"), Ly = ee()({ name: "VSliderTrack", props: oP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = He(Uc);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: S, indexFromEnd: m } = a, { roundedClasses: y } = dt(i), { backgroundColorClasses: h, backgroundColorStyles: w } = qe(c), { backgroundColorClasses: I, backgroundColorStyles: V } = qe(u), x = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), g = _(() => f.value ? "height" : "width"), C = _(() => ({ [x.value]: "0%", [g.value]: "100%" })), k = _(() => e.stop - e.start), A = _(() => ({ [x.value]: ve(e.start, "%"), [g.value]: ve(k.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, M) => {
    var _a3;
    const T = D.value !== v.value && D.value !== S.value ? ve(D.position, "%") : void 0;
    return p("div", { key: D.value, class: te(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === S.value }]), style: { [x.value]: T } }, [(D.label || n["tick-label"]) && p("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: M })) ?? D.label])]);
  }) : []);
  return ne(() => p("div", { class: te(["v-slider-track", y.value, e.class]), style: ge([{ "--v-slider-track-size": ve(d.value), "--v-slider-tick-size": ve(s.value) }, e.style]) }, [p("div", { class: te(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), p("div", { class: te(["v-slider-track__fill", h.value]), style: { ...A.value, ...w.value } }, null), r.value && p("div", { class: te(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), iP = H({ ...fi(), ...By(), ...Sa(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), fu = ee()({ name: "VSlider", inheritAttrs: false, props: iP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), { rtlClasses: r } = _t(), s = $y(e), u = Ce(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: S, onSliderTouchstart: m, trackContainerRef: y, position: h, hasLabels: w, disabled: I, readonly: V, noKeyboard: x } = Fy({ props: e, steps: s, onSliderStart: () => {
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
  } }), { isFocused: g, focus: C, blur: k } = pa(e), A = _(() => h(u.value));
  return ne(() => {
    const P = Ot.filterProps(e), [E, D] = qn(l), M = !!(e.label || n.label || n.prepend);
    return b(Ot, Y({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || w.value, "v-slider--focused": g.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, E, { focused: g.value }), { ...n, prepend: M ? (T) => {
      var _a3, _b2;
      return p(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, T)) ?? (e.label ? b(no, { id: T.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, T)]);
    } : void 0, default: (T) => {
      let { id: F, messagesId: z } = T;
      return p("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : S, onTouchstartPassive: V.value ? void 0 : m }, [p("input", { id: F.value, name: e.name || F.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), b(Ly, { ref: y, start: 0, stop: A.value }, { "tick-label": n["tick-label"] }), b(du, Y({ ref: o, "aria-describedby": z.value, focused: g.value, noKeyboard: x.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (N) => u.value = N, position: A.value, elevation: e.elevation, onFocus: C, onBlur: k, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), Ry = H({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: _e, default: "$eyeDropper" }, ...ke() }, "VColorPickerPreview"), rP = Kt({ name: "VColorPickerPreview", props: Ry(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Je(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  dr(() => l.abort());
  async function i() {
    if (!lf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = li(un(s.sRGBHex));
      n("update:color", { ...e.color ?? Bl, ...u });
    } catch {
    }
  }
  return ne(() => {
    var _a3, _b2;
    return p("div", { class: te(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: ge(e.style) }, [lf && !e.hideEyeDropper && p("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [b(Ne, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), p("div", { class: "v-color-picker-preview__dot" }, [p("div", { style: { background: xh(e.color ?? Bl) } }, null)]), p("div", { class: "v-color-picker-preview__sliders" }, [b(fu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && b(fu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Bl, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), sP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, uP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, cP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, dP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, fP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, vP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, mP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, hP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, gP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, yP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, bP = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, pP = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, SP = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, kP = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, wP = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, xP = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, CP = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, _P = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, VP = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, IP = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, PP = { red: sP, pink: uP, purple: cP, deepPurple: dP, indigo: fP, blue: vP, lightBlue: mP, cyan: hP, teal: gP, green: yP, lightGreen: bP, lime: pP, yellow: SP, amber: kP, orange: wP, deepOrange: xP, brown: CP, blueGrey: _P, grey: VP, shades: IP }, AP = H({ swatches: { type: Array, default: () => TP(PP) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...ke() }, "VColorPickerSwatches");
function TP(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const DP = Kt({ name: "VColorPickerSwatches", props: AP(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return ne(() => p("div", { class: te(["v-color-picker-swatches", e.class]), style: ge([{ maxHeight: ve(e.maxHeight) }, e.style]) }, [p("div", null, [e.swatches.map((o) => p("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = un(i), s = li(r), u = wh(r);
    return p("div", { class: te(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [p("div", { style: { background: u } }, [e.color && Dt(e.color, s) ? b(Ge, { size: "x-small", icon: "$success", color: Jw(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), EP = ha("v-picker-title"), Mr = H({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...Ec() }, "VPicker"), Xl = ee()({ name: "VPicker", props: Mr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = qe(() => e.color);
  return ne(() => {
    const o = Fa.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return b(Fa, Y(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && p("div", { key: "header", class: te(["v-picker__header-wrapper", a.value]), style: ge([l.value]) }, [i && b(EP, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && p("div", { class: "v-picker__header" }, [n.header()])]), p("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && b(Me, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [p("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), MP = H({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(nl).includes(e) }, modes: { type: Array, default: () => Object.keys(nl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(nl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Mr({ hideHeader: true }), ...Jt(Ry(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), BP = Kt({ name: "VColorPicker", props: MP(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "mode"), l = K(null), o = Ce(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = li(un(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? XI(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = _t();
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
    return b(Xl, Y(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": xh({ ...i.value ?? Bl, a: 1 }) }, e.style] }), { ...n, default: () => p(be, null, [!e.hideCanvas && b(KI, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && p("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && b(rP, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && b(nP, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && b(DP, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), $P = H({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...wl({ filterKeys: ["title"] }), ...Rc({ hideNoData: true, returnObject: true }), ...Le(hi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), FP = ee()({ name: "VCombobox", props: $P(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), o = K(), i = ue(false), r = ue(true), s = ue(false), u = K(), c = K(), d = ue(-1);
  let f = false;
  const { items: v, transformIn: S, transformOut: m } = _c(e), { textColorClasses: y, textColorStyles: h } = Et(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: w } = di(e), I = Ce(e, "modelValue", [], (q) => S(lt(q)), (q) => {
    const ye = m(q);
    return e.multiple ? ye : ye[0] ?? null;
  }), V = ao(e), x = B(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), g = _(() => !!(e.chips || a.chip)), C = _(() => g.value || !!a.selection), k = ue(!e.multiple && !C.value ? ((_a3 = I.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), A = ue(null), P = _({ get: () => k.value, set: async (q) => {
    var _a4;
    if (k.value = q ?? "", q === null || q === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [Cn(e, q)], Ae(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), q && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const ye = pe(q);
      ye.length > 1 && (de(ye), k.value = "");
    }
    q || (d.value = -1), r.value = !q;
  } }), E = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: M } = xl(e, v, () => A.value ?? (e.alwaysFilter || !r.value ? P.value : "")), T = _(() => e.hideSelected && A.value === null ? D.value.filter((q) => !I.value.some((ye) => ye.value === q.value)) : D.value), F = _(() => e.hideNoData && !T.value.length || V.isReadonly.value || V.isDisabled.value), z = Ce(e, "menu"), N = _({ get: () => z.value, set: (q) => {
    var _a4;
    z.value && !q && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || q && F.value || (z.value = q);
  } }), { menuId: X, ariaExpanded: Z, ariaControls: L } = Lc(e, N);
  ce(k, (q) => {
    f ? Ae(() => f = false) : i.value && !N.value && (N.value = true), n("update:search", q);
  }), ce(I, (q) => {
    var _a4;
    !e.multiple && !C.value && (k.value = ((_a4 = q[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const G = _(() => I.value.map((q) => q.value)), W = _(() => T.value.find((q) => q.type === "item" && !q.props.disabled)), O = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = W.value) == null ? void 0 : _a4.title)) && T.value.length > 0 && !r.value && !s.value;
  }), j = K(), se = K(), Se = K(), ae = Bc(j, o), { onTabKeydown: me } = $c({ groups: [{ type: "element", contentRef: se }, { type: "list", contentRef: j, displayItemsCount: () => T.value.length }, { type: "element", contentRef: Se }], onLeave: () => {
    var _a4;
    N.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function ie(q) {
    f = true, Ae(() => f = false), e.openOnClear && (N.value = true);
  }
  function he() {
    F.value || (N.value = true);
  }
  function fe(q) {
    F.value || (i.value && (q.preventDefault(), q.stopPropagation()), N.value = !N.value);
  }
  function $(q) {
    var _a4, _b2;
    q.key === "Tab" && me(q), ((_a4 = j.value) == null ? void 0 : _a4.$el.contains(q.target)) && (jl(q) || q.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function R(q) {
    var _a4, _b2, _c2, _d2;
    if (kw(q) || V.isReadonly.value) return;
    const ye = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, we = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(q.key) && q.preventDefault(), ["Enter", "ArrowDown"].includes(q.key) && (N.value = true), ["Escape"].includes(q.key) && (N.value = false), O.value && ["Enter", "Tab"].includes(q.key) && W.value && !I.value.some((xe) => {
      let { value: Ie } = xe;
      return Ie === W.value.value;
    }) && le(W.value), q.key === "ArrowDown" && O.value && ((_b2 = j.value) == null ? void 0 : _b2.focus("next")), q.key === "Enter" && P.value && (le(Cn(e, P.value), true, true), C.value && (k.value = "")), ["Backspace", "Delete"].includes(q.key)) {
      if (!e.multiple && C.value && I.value.length > 0 && !P.value) return le(I.value[0], false);
      if (~d.value) {
        q.preventDefault();
        const xe = d.value;
        le(I.value[d.value], false), d.value = xe >= we - 1 ? we - 2 : xe;
      } else q.key === "Backspace" && !P.value && (d.value = we - 1);
      return;
    }
    if (e.multiple) if (q.key === "ArrowLeft") {
      if (d.value < 0 && ye && ye > 0) return;
      const xe = d.value > -1 ? d.value - 1 : we - 1;
      I.value[xe] ? d.value = xe : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (q.key === "ArrowRight") {
      if (d.value < 0) return;
      const xe = d.value + 1;
      I.value[xe] ? d.value = xe : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && jl(q) && (d.value = -1);
  }
  function J(q) {
    var _a4;
    const ye = ((_a4 = q == null ? void 0 : q.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", we = pe(ye);
    we.length > 1 && e.multiple && (q.preventDefault(), de(we));
  }
  function re() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function Q() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, A.value = null;
  }
  function le(q) {
    let ye = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, we = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!q || q.props.disabled)) if (e.multiple) {
      const xe = I.value.findIndex(($e) => (e.valueComparator || Dt)($e.value, q.value)), Ie = ye ?? !~xe;
      if (~xe) {
        const $e = Ie ? [...I.value, q] : [...I.value];
        $e.splice(xe, 1), I.value = $e;
      } else Ie && (I.value = [...I.value, q]);
      e.clearOnSelect && (P.value = "");
    } else {
      const xe = ye !== false;
      I.value = xe ? [q] : [], (!r.value || e.alwaysFilter) && k.value && (A.value = k.value), k.value = xe && !C.value ? q.title : "", Ae(() => {
        N.value = we, r.value = true;
      });
    }
  }
  function pe(q) {
    const we = [`
`, ...e.delimiters ?? []].map(Ui).join("|");
    return q.split(new RegExp(`(?:${we})+`));
  }
  async function de(q) {
    for (let ye of q) ye = ye.trim(), ye && (le(Cn(e, ye)), await Ae());
  }
  function U(q) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function oe(q) {
    s.value = false;
  }
  function Ve(q) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(q.relatedTarget)) && (i.value = true);
  }
  return ce(i, (q, ye) => {
    if (!(q || q === ye) && (d.value = -1, N.value = false, P.value)) {
      if (e.multiple) {
        le(Cn(e, P.value));
        return;
      }
      if (!C.value) return;
      I.value.some((we) => {
        let { title: xe } = we;
        return xe === P.value;
      }) ? k.value = "" : le(Cn(e, P.value));
    }
  }), ce(N, (q) => {
    if (!e.hideSelected && q && I.value.length && r.value) {
      const ye = T.value.findIndex((we) => I.value.some((xe) => (e.valueComparator || Dt)(xe.value, we.value)));
      Ze && window.requestAnimationFrame(() => {
        var _a4;
        ye >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(ye));
      });
    }
    q && (A.value = null);
  }), ce(v, (q, ye) => {
    N.value || i.value && !ye.length && q.length && (N.value = true);
  }), ne(() => {
    const q = !!(!e.hideNoData || T.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ye = I.value.length > 0, we = Yn.filterProps(e), xe = { search: P, filteredItems: D.value };
    return b(Yn, Y({ ref: o }, we, { modelValue: P.value, "onUpdate:modelValue": (Ie) => P.value = Ie, focused: i.value, "onUpdate:focused": (Ie) => i.value = Ie, validationValue: I.externalValue, counterValue: E.value, dirty: ye, class: ["v-combobox", { "v-combobox--active-menu": N.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: ye ? void 0 : e.placeholder, "onClick:clear": ie, "onMousedown:control": he, onKeydown: R, onPaste: J, onBlur: Ve, "aria-expanded": Z.value, "aria-controls": L.value }), { ...a, default: (Ie) => {
      let { id: $e } = Ie;
      return p(be, null, [b(ql, Y({ id: X.value, ref: u, modelValue: N.value, "onUpdate:modelValue": (je) => N.value = je, activator: "parent", contentClass: "v-combobox__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: re, onAfterLeave: Q }, e.menuProps), { default: () => [b(Fa, { onFocusin: U, onKeydown: $ }, { default: () => [a["menu-header"] && p("header", { ref: se }, [a["menu-header"](xe)]), q && b(Kl, Y({ key: "combobox-list", ref: j, filterable: true, selected: G.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (je) => je.preventDefault(), selectable: !!T.value.length, onFocusout: oe, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${$e.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, ae, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = a["prepend-item"]) == null ? void 0 : _a4.call(a), !T.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? b(kn, { key: "no-data", title: l(e.noDataText) }, null)), b(Ir, { ref: c, renderless: true, items: T.value, itemKey: "value" }, { default: (je) => {
          var _a5, _b3, _c3;
          let { item: Re, index: ft, itemRef: at } = je;
          const an = Y(Re.props, { ref: at, key: Re.value, active: O.value && Re === W.value ? true : void 0, onClick: () => le(Re, null), "aria-posinset": ft + 1, "aria-setsize": T.value.length });
          return Re.type === "divider" ? ((_a5 = a.divider) == null ? void 0 : _a5.call(a, { props: Re.raw, index: ft })) ?? b(dn, Y(Re.props, { key: `divider-${ft}` }), null) : Re.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Re.raw, index: ft })) ?? b(lo, Y(Re.props, { key: `subheader-${ft}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Re, index: ft, props: an })) ?? b(kn, Y(an, { role: "option" }), { prepend: (ka) => {
            let { isSelected: rt } = ka;
            return p(be, null, [e.multiple && !e.hideSelected ? b(Dn, { key: Re.value, modelValue: rt, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (yn) => yn.preventDefault() }, null) : void 0, Re.props.prependAvatar && b(vn, { image: Re.props.prependAvatar }, null), Re.props.prependIcon && b(Ge, { icon: Re.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? Re.title : Fc("v-combobox", Re.title, (_a6 = M(Re)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && p("footer", { ref: Se }, [a["menu-footer"](xe)])] })] }), I.value.map((je, Re) => {
        function ft(rt) {
          rt.stopPropagation(), rt.preventDefault(), le(je, false);
        }
        const at = Y(fa.filterProps(je.props), { "onClick:close": ft, onKeydown(rt) {
          rt.key !== "Enter" && rt.key !== " " || (rt.preventDefault(), rt.stopPropagation(), ft(rt));
        }, onMousedown(rt) {
          rt.preventDefault(), rt.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), an = g.value ? !!a.chip : !!a.selection, ka = an ? hr(g.value ? a.chip({ item: je, index: Re, props: at }) : a.selection({ item: je, index: Re })) : void 0;
        if (!(an && !ka)) return p("div", { key: je.value, class: te(["v-combobox__selection", Re === d.value && ["v-combobox__selection--selected", y.value]]), style: ge(Re === d.value ? h.value : {}) }, [g.value ? a.chip ? b(Me, { key: "chip-defaults", defaults: { VChip: { closable: x.value, size: "small", text: je.title } } }, { default: () => [ka] }) : b(fa, Y({ key: "chip", closable: x.value, size: "small", text: je.title, disabled: je.props.disabled }, at), null) : ka ?? p("span", { class: "v-combobox__selection-text" }, [je.title, e.multiple && Re < I.value.length - 1 && p("span", { class: "v-combobox__selection-comma" }, [ut(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ie = arguments.length, $e = new Array(Ie), je = 0; je < Ie; je++) $e[je] = arguments[je];
      return p(be, null, [(_a4 = a["append-inner"]) == null ? void 0 : _a4.call(a, ...$e), (!e.hideNoData || e.items.length) && e.menuIcon ? b(Ge, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: mr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && b(w, { key: "append-icon", name: "appendInner", color: $e[0].iconColor.value }, null)]);
    } });
  }), Pt({ isFocused: i, isPristine: r, menu: N, search: P, selectionIndex: d, filteredItems: D, select: le }, o);
} }), LP = H({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), RP = ee()({ name: "VConfirmEdit", props: LP(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = K();
  ct(() => {
    o.value = structuredClone(vf(l.value));
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
    o.value = structuredClone(vf(l.value)), n("cancel");
  }
  function v(m) {
    return p(be, null, [b(Ne, Y({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), b(Ne, Y({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let S = false;
  return ne(() => {
    var _a3;
    return p(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return S = true, v;
    } }), !e.hideActions && !S && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), Oy = H({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Ny = Symbol.for("vuetify:datatable:expanded");
function Br(e) {
  const t = B(() => e.expandOnClick), n = Ce(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
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
  return it(Ny, i), i;
}
function Hy() {
  const e = He(Ny);
  if (!e) throw new Error("foo");
  return e;
}
const Yc = H({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), zy = Symbol.for("vuetify:data-table-group");
function Gc(e) {
  return { groupBy: Ce(e, "groupBy") };
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
  return it(zy, u), u;
}
function Wy() {
  const e = He(zy);
  if (!e) throw new Error("Missing group!");
  return e;
}
function OP(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = ol(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function jy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = OP(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? jy(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function Uy(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...Uy(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function Fr(e, t, n, a) {
  const l = _(() => t.value.length ? jy(tt(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? Uy(l.value, n.value, tt(a)) : tt(e));
  return { groups: l, flatItems: o };
}
function Lr(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = St("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  ce(r, (u) => {
    Dt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const Kc = H({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Yy = Symbol.for("vuetify:data-table-pagination");
function qc(e) {
  const t = Ce(e, "page", void 0, (a) => Number(a ?? 1)), n = Ce(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function Xc(e) {
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
  return it(Yy, d), d;
}
function NP() {
  const e = He(Yy);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Gy(e) {
  const t = St("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? tt(n) : tt(n).slice(a.value, l.value));
  return ce(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function HP(e) {
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
const zP = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, Ky = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return Ky.select({ items: n, value: t, selected: a });
} }, WP = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, qy = H({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Xy = Symbol.for("vuetify:data-table-selection");
function Rr(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = Ce(e, "modelValue", e.modelValue, (w) => {
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
        return zP;
      case "all":
        return WP;
      case "page":
      default:
        return Ky;
    }
  }), s = ue(null);
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
      const [C, k] = [s.value, I].sort((A, P) => A - P);
      x.push(...g.slice(C, k + 1).filter((A) => A.selectable));
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
  return it(Xy, h), h;
}
function Or() {
  const e = He(Xy);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Zy = H({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Jy = Symbol.for("vuetify:data-table-sort");
function Nr(e) {
  const t = B(() => e.initialSortOrder), n = Ce(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function jP(e, t) {
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
      const { active: m, mode: y } = jP(l.value, c);
      m ? y === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return it(Jy, s), s;
}
function Qy() {
  const e = He(Jy);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Zc(e, t, n, a) {
  const l = Je();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? UP(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function UP(e, t, n, a) {
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
const YP = H({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function GP(e, t) {
  const n = e.returnObject ? t : pt(t, e.itemValue), a = pt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function KP(e, t) {
  const n = [];
  for (const a of t) n.push(GP(e, a));
  return n;
}
function qP(e) {
  return { items: _(() => KP(e, e.items)) };
}
const XP = H({ search: String, loading: Boolean, itemsLength: [Number, String], ...ke(), ...YP(), ...qy(), ...Zy(), ...Kc({ itemsPerPage: 5 }), ...Oy(), ...Yc(), ...wl(), ...De(), ...ga({ transition: { component: Ho, hideOnLeave: true } }) }, "VDataIterator"), ZP = ee()({ name: "VDataIterator", props: XP(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "groupBy"), l = B(() => e.search), { items: o } = qP(e), { filteredItems: i } = xl(e, o, l, { transform: (j) => j.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = Nr(e), { page: d, itemsPerPage: f } = qc(e), { toggleSort: v } = Hr({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: S, opened: m, extractRows: y, isGroupOpen: h, toggleGroup: w } = $r({ groupBy: a, sortBy: s }), { sortedItems: I } = Zc(e, i, S, { transform: (j) => j.raw }), { flatItems: V } = Fr(I, a, m, false), x = B(() => !vo(e.itemsLength)), g = B(() => x.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: k, pageCount: A, prevPage: P, nextPage: E, setItemsPerPage: D, setPage: M } = Xc({ page: d, itemsPerPage: f, itemsLength: g }), T = ue([]), F = _(() => x.value ? V.value : T.value);
  $t(() => !x.value, () => {
    const { paginatedItems: j } = Gy({ items: V, startIndex: C, stopIndex: k, itemsPerPage: f });
    ct(() => {
      T.value = j.value;
    });
  });
  const z = _(() => y(F.value)), { isSelected: N, select: X, selectAll: Z, toggleSelect: L } = Rr(e, { allItems: o, currentPage: z }), { isExpanded: G, toggleExpand: W } = Br(e);
  Lr({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const O = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: A.value, toggleSort: v, prevPage: P, nextPage: E, setPage: M, setItemsPerPage: D, isSelected: N, select: X, selectAll: Z, toggleSelect: L, isExpanded: G, toggleExpand: W, isGroupOpen: h, toggleGroup: w, items: z.value, itemsCount: i.value.length, groupedItems: F.value }));
  return ne(() => b(e.tag, { class: te(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: ge(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, O.value), b(Gt, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? b(si, { key: "loader", name: "v-data-iterator", active: true }, { default: (j) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, j);
      } }) : p("div", { key: "items" }, [F.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, O.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, O.value)];
  } })), {};
} });
function JP() {
  const e = K([]);
  bm(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const QP = H({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: _e, default: "$first" }, prevIcon: { type: _e, default: "$prev" }, nextIcon: { type: _e, default: "$next" }, lastIcon: { type: _e, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Ht(), ...ke(), ...ht(), ...xt(), ...ot(), ...Jn(), ...De({ tag: "nav" }), ...We(), ...gn({ variant: "text" }) }, "VPagination"), vu = ee()({ name: "VPagination", props: QP(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ce(e, "modelValue"), { t: o, n: i } = Je(), { isRtl: r } = _t(), { themeClasses: s } = Ke(e), { width: u } = nn(), c = ue(-1);
  mt(void 0, { scoped: true });
  const { resizeRef: d } = Sn((k) => {
    if (!k.length) return;
    const { target: A, contentRect: P } = k[0], E = A.querySelector(".v-pagination__list > *");
    if (!E) return;
    const D = P.width, M = E.offsetWidth + parseFloat(getComputedStyle(E).marginRight) * 2;
    c.value = m(D, M);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), S = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(k, A) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((k - A * P) / A).toFixed(2))));
  }
  const y = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (S.value <= 0) return [];
    if (S.value === 1) return [l.value];
    if (f.value <= S.value) return On(f.value, v.value);
    const k = S.value % 2 === 0, A = k ? S.value / 2 : Math.floor(S.value / 2), P = k ? A : A + 1, E = f.value - A;
    if (P - l.value >= 0) return [...On(Math.max(1, S.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - E >= (k ? 1 : 0)) {
      const D = S.value - 1, M = f.value - D + v.value;
      return [v.value, e.ellipsis, ...On(D, M)];
    } else {
      const D = Math.max(1, S.value - 2), M = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...On(D, M), e.ellipsis, f.value];
    }
  });
  function h(k, A, P) {
    k.preventDefault(), l.value = A, P && a(P, A);
  }
  const { refs: w, updateRef: I } = JP();
  mt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const V = _(() => y.value.map((k, A) => {
    const P = (E) => I(E, A);
    if (typeof k == "string") return { isActive: false, key: `ellipsis-${A}`, page: k, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const E = k === l.value;
      return { isActive: E, key: k, page: i(k), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: E ? e.activeColor : e.color, "aria-current": E, "aria-label": o(E ? e.currentPageAriaLabel : e.pageAriaLabel, k), onClick: (D) => h(D, k) } };
    }
  })), x = _(() => {
    const k = !!e.disabled || l.value <= v.value, A = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => h(P, v.value, "first"), disabled: k, "aria-label": o(e.firstAriaLabel), "aria-disabled": k } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => h(P, l.value - 1, "prev"), disabled: k, "aria-label": o(e.previousAriaLabel), "aria-disabled": k }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => h(P, l.value + 1, "next"), disabled: A, "aria-label": o(e.nextAriaLabel), "aria-disabled": A }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => h(P, v.value + f.value - 1, "last"), disabled: A, "aria-label": o(e.lastAriaLabel), "aria-disabled": A } : void 0 };
  });
  function g() {
    var _a3;
    const k = l.value - v.value;
    (_a3 = w.value[k]) == null ? void 0 : _a3.$el.focus();
  }
  function C(k) {
    k.key === Fs.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Ae(g)) : k.key === Fs.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Ae(g));
  }
  return ne(() => b(e.tag, { ref: d, class: te(["v-pagination", s.value, e.class]), style: ge(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [p("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && p("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(x.value.first) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.first), null)]), p("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(x.value.prev) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.prev), null)]), V.value.map((k, A) => p("li", { key: k.key, class: te(["v-pagination__item", { "v-pagination__item--is-active": k.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(k) : b(Ne, Y({ _as: "VPaginationBtn" }, k.props), { default: () => [k.page] })])), p("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(x.value.next) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.next), null)]), e.showFirstLastPage && p("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(x.value.last) : b(Ne, Y({ _as: "VPaginationBtn" }, x.value.last), null)])])] })), {};
} }), Jc = H({ color: String, prevIcon: { type: _e, default: "$prev" }, nextIcon: { type: _e, default: "$next" }, firstIcon: { type: _e, default: "$first" }, lastIcon: { type: _e, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), Ko = ee()({ name: "VDataTableFooter", props: Jc(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = NP(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return ne(() => {
    var _a3;
    const f = vu.filterProps(e);
    return p("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), p("div", { class: "v-data-table-footer__items-per-page" }, [p("span", null, [a(e.itemsPerPageText)]), b(Oc, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), p("div", { class: "v-data-table-footer__info" }, [p("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), p("div", { class: "v-data-table-footer__pagination" }, [b(vu, Y({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, Le(f, ["color"])), null)])]);
  }), {};
} }), qo = a0({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return b(a, { class: te(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ve(e.height), width: ve(e.width), maxWidth: ve(e.maxWidth), left: l === "start" ? ve(e.fixedOffset || null) : void 0, right: l === "end" ? ve(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ve(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), eA = H({ headers: Array }, "DataTable-header"), eb = Symbol.for("vuetify:data-table-headers"), tb = { title: "", sortable: false }, tA = { ...tb, width: 48 };
function nA() {
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
function mu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) mu(n, t);
  return t;
}
function nb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && nb(n.children, t);
  return t;
}
function aA(e) {
  if (e.key) {
    if (e.key === "data-table-group") return tb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return tA;
  }
}
function Qc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Qc(n, t + 1))) : t;
}
function lA(e) {
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
  for (let o = 0; o < e.length; o++) a = ab(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = lb(e[o], l);
}
function ab(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = ab(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function lb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = lb(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function oA(e, t) {
  const n = [];
  let a = 0;
  const l = nA(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - Qc(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? mu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => mu(i)).flat(), headers: n };
}
function ob(e) {
  const t = [];
  for (const n of e) {
    const a = { ...aA(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? ob(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function ed(e, t) {
  const n = K([]), a = K([]), l = K({}), o = K({}), i = K({});
  ct(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Gn(m) }))).slice(), c = nb(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = ob(u);
    lA(d);
    const f = Math.max(...d.map((m) => Qc(m))) + 1, v = oA(d, f);
    n.value = v.headers, a.value = v.columns;
    const S = v.headers.flat(1);
    for (const m of S) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return it(eb, r), r;
}
function zr() {
  const e = He(eb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const ib = H({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: _e }, sortAscIcon: { type: _e, default: "$sortAsc" }, sortDescIcon: { type: _e, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...ht(), ...hl(), ...xr() }, "VDataTableHeaders"), cl = ee()({ name: "VDataTableHeaders", props: ib(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), { toggleSort: l, sortBy: o, isSorted: i } = Qy(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = Or(), { columns: d, headers: f } = zr(), { loaderClasses: v } = ri(e);
  function S(A, P) {
    if (!(e.sticky || e.fixedHeader) && !A.fixed) return;
    const E = typeof A.fixed == "string" ? A.fixed : A.fixed ? "start" : "none";
    return { position: "sticky", left: E === "start" ? ve(A.fixedOffset) : void 0, right: E === "end" ? ve(A.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
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
  const { backgroundColorClasses: h, backgroundColorStyles: w } = qe(() => e.color), { displayClasses: I, mobile: V } = nn(e), x = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: y })), g = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, v.value]), C = (A) => {
    let { column: P, x: E, y: D } = A;
    const M = P.key === "data-table-select" || P.key === "data-table-expand", T = P.key === "data-table-group" && P.width === 0 && !P.title, F = Y(e.headerProps ?? {}, P.headerProps ?? {});
    return b(qo, Y({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...g.value], style: { width: ve(P.width), minWidth: ve(P.minWidth), maxWidth: ve(P.maxWidth), ...S(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: M, empty: T, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (z) => l(P, z) : void 0, onKeydown: P.sortable ? (z) => m(z, P) : void 0 }, F), { default: () => {
      var _a3;
      const z = `header.${P.key}`, N = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: y };
      return n[z] ? n[z](N) : T ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, N)) ?? (c.value && b(Dn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : p("div", { class: "v-data-table-header__content" }, [p("span", null, [P.title]), P.sortable && !e.disableSort && b(Ge, { key: "icon", class: "v-data-table-header__sort-icon", icon: y(P) }, null), e.multiSort && i(P) && p("div", { key: "badge", class: te(["v-data-table-header__sort-badge", ...h.value]), style: ge(w.value) }, [o.value.findIndex((X) => X.key === P.key) + 1])]);
    } });
  }, k = () => {
    const A = _(() => d.value.filter((E) => (E == null ? void 0 : E.sortable) && !e.disableSort)), P = d.value.find((E) => E.key === "data-table-select");
    return b(qo, Y({ tag: "th", class: [...g.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [p("div", { class: "v-data-table-header__content" }, [b(Oc, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: A.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => b(Dn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (E) => {
      var _a3;
      return b(fa, { onClick: ((_a3 = E.item.raw) == null ? void 0 : _a3.sortable) ? () => l(E.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [E.item.title, b(Ge, { class: te(["v-data-table__td-sort-icon", i(E.item.raw) && "v-data-table__td-sort-icon-active"]), icon: y(E.item.raw), size: "small" }, null)] });
    } })])] });
  };
  ne(() => V.value ? p("tr", null, [b(k, null, null)]) : p(be, null, [n.headers ? n.headers(x.value) : f.value.map((A, P) => p("tr", null, [A.map((E, D) => b(C, { column: E, x: D, y: P }, null))])), e.loading && p("tr", { class: "v-data-table-progress" }, [p("th", { colspan: d.value.length }, [b(si, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), rb = H({ item: { type: Object, required: true }, groupCollapseIcon: { type: _e, default: "$tableGroupCollapse" }, groupExpandIcon: { type: _e, default: "$tableGroupExpand" }, ...ht() }, "VDataTableGroupHeaderRow"), iA = ee()({ name: "VDataTableGroupHeaderRow", props: rb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = Wy(), { isSelected: i, isSomeSelected: r, select: s } = Or(), { columns: u } = zr(), c = _(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
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
} }), sb = H({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: _e, default: "$collapse" }, expandIcon: { type: _e, default: "$expand" }, onClick: Bt(), onContextmenu: Bt(), onDblclick: Bt(), ...ht(), ...hl() }, "VDataTableRow"), td = ee()({ name: "VDataTableRow", props: sb(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = nn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = Or(), { isExpanded: c, toggleExpand: d } = Hy(), { toggleSort: f, sortBy: v, isSorted: S } = Qy(), { columns: m } = zr();
  ne(() => p("tr", { class: te(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((y, h) => {
    const w = e.item, I = `item.${y.key}`, V = `header.${y.key}`, x = { index: e.index, item: w.raw, internalItem: w, value: ol(w.columns, y.key), column: y, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, g = { column: y, selectAll: u, isSorted: S, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: x.index, item: x.item, internalItem: x.internalItem, value: x.value, column: y }) : e.cellProps, k = typeof y.cellProps == "function" ? y.cellProps({ index: x.index, item: x.item, internalItem: x.internalItem, value: x.value }) : y.cellProps, A = y.key === "data-table-select" || y.key === "data-table-expand", P = y.key === "data-table-group" && y.width === 0 && !y.title;
    return b(qo, Y({ align: y.align, indent: y.indent, class: { "v-data-table__td--expanded-row": y.key === "data-table-expand", "v-data-table__td--select-row": y.key === "data-table-select" }, fixed: y.fixed, fixedOffset: y.fixedOffset, fixedEndOffset: y.fixedEndOffset, lastFixed: y.lastFixed, firstFixedEnd: y.firstFixedEnd, maxWidth: l.value ? void 0 : y.maxWidth, noPadding: A, empty: P, nowrap: y.nowrap, width: l.value ? void 0 : y.width }, C, k), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (y.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...x, props: { color: e.color, disabled: !w.selectable, modelValue: o([w]), onClick: Si(() => i(w), ["stop"]) } })) ?? b(Dn, { color: e.color, disabled: !w.selectable, density: e.density, modelValue: o([w]), onClick: Si((D) => i(w, e.index, D), ["stop"]) }, null);
      if (y.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...x, props: { icon: c(w) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(w), ["stop"]) } })) ?? b(Ne, { icon: c(w) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Si(() => d(w), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](x);
      const E = Fe(x.value);
      return l.value ? p(be, null, [p("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, g)) ?? y.title]), p("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, x)) ?? E])]) : E;
    } });
  })]));
} }), ub = H({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...Jt(sb(), ["collapseIcon", "expandIcon", "density"]), ...Jt(rb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...hl() }, "VDataTableRows"), dl = ee()({ name: "VDataTableRows", inheritAttrs: false, props: ub(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = zr(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = Hy(), { isSelected: s, toggleSelect: u } = Or(), { toggleGroup: c, isGroupOpen: d } = Wy(), { t: f } = Je(), { mobile: v } = nn(e);
  return ne(() => {
    var _a3, _b2;
    const S = Jt(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? p("tr", { class: "v-data-table-rows-loading", key: "loading" }, [p("td", { colspan: l.value.length }, [((_a3 = a.loading) == null ? void 0 : _a3.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? p("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [p("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : p(be, null, [e.items.map((m, y) => {
      var _a4, _b3;
      if (m.type === "group") {
        const I = { index: y, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : b(iA, Y({ key: `group-header_${m.id}`, item: m }, cn(n, ":groupHeader", () => I), S), a);
      }
      if (m.type === "group-summary") {
        const I = { index: y, item: m, columns: l.value, toggleGroup: c };
        return ((_a4 = a["group-summary"]) == null ? void 0 : _a4.call(a, I)) ?? "";
      }
      const h = { index: m.virtualIndex ?? y, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, w = { ...h, props: Y({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: y, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, cn(n, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({ item: h.item, index: h.index, internalItem: h.internalItem }) : e.rowProps) };
      return p(be, { key: w.props.key }, [a.item ? a.item(w) : b(td, w.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, h))]);
    })]);
  }), {};
} }), cb = H({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...ke(), ...ht(), ...De(), ...We() }, "VTable"), fl = ee()({ name: "VTable", props: cb(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = Ke(e), { densityClasses: o } = Lt(e);
  return ne(() => b(e.tag, { class: te(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? p("div", { class: "v-table__wrapper", style: { height: ve(e.height) } }, [p("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), rA = H({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function sA(e, t, n, a) {
  const l = e.returnObject ? t : pt(t, e.itemValue), o = pt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = pt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? pt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function uA(e, t, n) {
  return t.map((a, l) => sA(e, a, l, n));
}
function nd(e, t) {
  return { items: _(() => uA(e, e.items, t.value)) };
}
const ad = H({ ...ub(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...Oy(), ...Yc(), ...eA(), ...rA(), ...qy(), ...Zy(), ...Le(ib(), ["multiSort", "initialSortOrder"]), ...cb() }, "DataTable"), cA = H({ ...Kc(), ...ad(), ...wl(), ...Jc() }, "VDataTable"), dA = ee()({ name: "VDataTable", props: cA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Gc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { page: u, itemsPerPage: c } = qc(e), { disableSort: d } = Zl(e), { columns: f, headers: v, sortFunctions: S, sortRawFunctions: m, filterFunctions: y } = ed(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: h } = nd(e, f), w = B(() => e.search), { filteredItems: I } = xl(e, h, w, { transform: (se) => se.columns, customKeyFilter: y }), { toggleSort: V } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: x, opened: g, extractRows: C, isGroupOpen: k, toggleGroup: A } = $r({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = Zc(e, I, x, { transform: (se) => ({ ...se.raw, ...se.columns }), sortFunctions: S, sortRawFunctions: m }), E = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: M, paginatedItems: T } = HP({ pageBy: E, sortedItems: P, paginate: (se) => {
    const Se = _(() => tt(se).length), { startIndex: ae, stopIndex: me, pageCount: ie, setItemsPerPage: he } = Xc({ page: u, itemsPerPage: c, itemsLength: Se }), { paginatedItems: fe } = Gy({ items: se, startIndex: ae, stopIndex: me, itemsPerPage: c });
    return { paginatedItems: fe, pageCount: ie, setItemsPerPage: he };
  }, group: (se) => Fr(se, l, g, () => !!a["group-summary"]) }), F = _(() => C(T.value)), { isSelected: z, select: N, selectAll: X, toggleSelect: Z, someSelected: L, allSelected: G } = Rr(e, { allItems: h, currentPage: F }), { isExpanded: W, toggleExpand: O } = Br(e);
  Lr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: w }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const j = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: M, someSelected: L.value, allSelected: G.value, isSelected: z, select: N, selectAll: X, toggleSelect: Z, isExpanded: W, toggleExpand: O, isGroupOpen: k, toggleGroup: A, items: F.value.map((se) => se.raw), internalItems: F.value, groupedItems: T.value, columns: f.value, headers: v.value }));
  return ne(() => {
    const se = Ko.filterProps(e), Se = cl.filterProps(Le(e, ["multiSort"])), ae = dl.filterProps(e), me = fl.filterProps(e);
    return b(fl, Y({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, me, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, j.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return a.default ? a.default(j.value) : p(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, j.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [b(cl, Y(Se, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, j.value), !e.hideDefaultBody && p("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, j.value), a.body ? a.body(j.value) : b(dl, Y(n, ae, { items: T.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, j.value)]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, j.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, j.value)]);
    }, bottom: () => a.bottom ? a.bottom(j.value) : !e.hideDefaultFooter && p(be, null, [b(dn, null, null), b(Ko, se, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), fA = H({ ...Le(ad(), ["hideDefaultFooter"]), ...Yc(), ...Jg(), ...wl() }, "VDataTableVirtual"), vA = ee()({ name: "VDataTableVirtual", props: fA(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Gc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { disableSort: u } = Zl(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: S } = ed(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = nd(e, c), y = B(() => e.search), { filteredItems: h } = xl(e, m, y, { transform: (fe) => fe.columns, customKeyFilter: f }), { toggleSort: w } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: x, isGroupOpen: g, toggleGroup: C } = $r({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: k } = Zc(e, h, I, { transform: (fe) => ({ ...fe.raw, ...fe.columns }), sortFunctions: v, sortRawFunctions: S }), { flatItems: A } = Fr(k, l, V, () => !!a["group-summary"]), P = _(() => x(A.value)), { isSelected: E, select: D, selectAll: M, toggleSelect: T, someSelected: F, allSelected: z } = Rr(e, { allItems: P, currentPage: P }), { isExpanded: N, toggleExpand: X } = Br(e), { containerRef: Z, markerRef: L, paddingTop: G, paddingBottom: W, computedItems: O, handleItemResize: j, handleScroll: se, handleScrollend: Se, calculateVisibleItems: ae, scrollToIndex: me } = Qg(e, A), ie = _(() => O.value.map((fe) => ({ ...fe.raw, virtualIndex: fe.index })));
  Lr({ sortBy: i, page: ue(1), itemsPerPage: ue(-1), groupBy: l, search: y }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const he = _(() => ({ sortBy: i.value, toggleSort: w, someSelected: F.value, allSelected: z.value, isSelected: E, select: D, selectAll: M, toggleSelect: T, isExpanded: N, toggleExpand: X, isGroupOpen: g, toggleGroup: C, items: P.value.map((fe) => fe.raw), internalItems: P.value, groupedItems: A.value, columns: c.value, headers: d.value }));
  return ne(() => {
    const fe = cl.filterProps(Le(e, ["multiSort"])), $ = dl.filterProps(e), R = fl.filterProps(e);
    return b(fl, Y({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, R, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, he.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return p("div", { ref: Z, onScrollPassive: se, onScrollend: Se, class: "v-table__wrapper", style: { height: ve(e.height) } }, [p("table", null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, he.value), !e.hideDefaultHeader && p("thead", { key: "thead" }, [b(cl, Y(fe, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, he.value), !e.hideDefaultBody && p("tbody", { key: "tbody" }, [p("tr", { ref: L, style: { height: ve(G.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, he.value), b(dl, Y(n, $, { items: ie.value }), { ...a, item: (J) => b(Zg, { key: J.internalItem.index, renderless: true, "onUpdate:height": (re) => j(J.internalItem.index, re) }, { default: (re) => {
        var _a4;
        let { itemRef: Q } = re;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { ...J, itemRef: Q })) ?? b(td, Y(J.props, { ref: Q, key: J.internalItem.index, index: J.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, he.value), p("tr", { style: { height: ve(W.value), border: 0 } }, [p("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, he.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, he.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = a.bottom) == null ? void 0 : _a3.call(a, he.value);
    } });
  }), { calculateVisibleItems: ae, scrollToIndex: me };
} }), mA = H({ itemsLength: { type: [Number, String], required: true }, ...Kc(), ...ad(), ...Jc() }, "VDataTableServer"), hA = ee()({ name: "VDataTableServer", props: mA(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = Gc(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = Nr(e), { page: u, itemsPerPage: c } = qc(e), { disableSort: d } = Zl(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: S } = ed(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = nd(e, v), { toggleSort: y } = Hr({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: h, isGroupOpen: w, toggleGroup: I, extractRows: V } = $r({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: x, setItemsPerPage: g } = Xc({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = Fr(m, l, h, () => !!a["group-summary"]), { isSelected: k, select: A, selectAll: P, toggleSelect: E, someSelected: D, allSelected: M } = Rr(e, { allItems: m, currentPage: m }), { isExpanded: T, toggleExpand: F } = Br(e), z = _(() => V(m.value));
  Lr({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), it("v-data-table", { toggleSort: y, sortBy: i }), mt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const N = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: x.value, toggleSort: y, setItemsPerPage: g, someSelected: D.value, allSelected: M.value, isSelected: k, select: A, selectAll: P, toggleSelect: E, isExpanded: T, toggleExpand: F, isGroupOpen: w, toggleGroup: I, items: z.value.map((X) => X.raw), internalItems: z.value, groupedItems: C.value, columns: v.value, headers: S.value }));
  ne(() => {
    const X = Ko.filterProps(e), Z = cl.filterProps(Le(e, ["multiSort"])), L = dl.filterProps(e), G = fl.filterProps(e);
    return b(fl, Y({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, G, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = a.top) == null ? void 0 : _a3.call(a, N.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e2, _f2;
      return a.default ? a.default(N.value) : p(be, null, [(_a3 = a.colgroup) == null ? void 0 : _a3.call(a, N.value), !e.hideDefaultHeader && p("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [b(cl, Y(Z, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, N.value), !e.hideDefaultBody && p("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, N.value), a.body ? a.body(N.value) : b(dl, Y(n, L, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, N.value)]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, N.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, N.value)]);
    }, bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && p(be, null, [b(dn, null, null), b(Ko, X, { prepend: a["footer.prepend"] })]) });
  });
} }), gA = H({ fluid: { type: Boolean, default: false }, ...ke(), ...kt(), ...De() }, "VContainer"), yA = ee()({ name: "VContainer", props: gA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = _t(), { dimensionStyles: l } = wt(e);
  return ne(() => b(e.tag, { class: te(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: ge([l.value, e.style]) }, n)), {};
} }), db = br.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), fb = br.reduce((e, t) => {
  const n = "offset" + Gn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), vb = br.reduce((e, t) => {
  const n = "order" + Gn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), vv = { col: Object.keys(db), offset: Object.keys(fb), order: Object.keys(vb) };
function bA(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const pA = ["auto", "start", "end", "center", "baseline", "stretch"], SA = H({ cols: { type: [Boolean, String, Number], default: false }, ...db, offset: { type: [String, Number], default: null }, ...fb, order: { type: [String, Number], default: null }, ...vb, alignSelf: { type: String, default: null, validator: (e) => pA.includes(e) }, ...ke(), ...De() }, "VCol"), kA = ee()({ name: "VCol", props: SA(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in vv) vv[o].forEach((r) => {
      const s = e[r], u = bA(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: [a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), ld = ["start", "end", "center"], mb = ["space-between", "space-around", "space-evenly"];
function od(e, t) {
  return br.reduce((n, a) => {
    const l = e + Gn(a);
    return n[l] = t(), n;
  }, {});
}
const wA = [...ld, "baseline", "stretch"], hb = (e) => wA.includes(e), gb = od("align", () => ({ type: String, default: null, validator: hb })), xA = [...ld, ...mb], yb = (e) => xA.includes(e), bb = od("justify", () => ({ type: String, default: null, validator: yb })), CA = [...ld, ...mb, "stretch"], pb = (e) => CA.includes(e), Sb = od("alignContent", () => ({ type: String, default: null, validator: pb })), mv = { align: Object.keys(gb), justify: Object.keys(bb), alignContent: Object.keys(Sb) }, _A = { align: "align", justify: "justify", alignContent: "align-content" };
function VA(e, t, n) {
  let a = _A[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const IA = H({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: hb }, ...gb, justify: { type: String, default: null, validator: yb }, ...bb, alignContent: { type: String, default: null, validator: pb }, ...Sb, ...ke(), ...De() }, "VRow"), PA = ee()({ name: "VRow", props: IA(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in mv) mv[o].forEach((i) => {
      const r = e[i], s = VA(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a3;
    return ma(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), hu = ha("v-spacer", "div", "VSpacer"), kb = H({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: _e, default: "$next" }, prevIcon: { type: _e, default: "$prev" }, modeIcon: { type: _e, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), gu = ee()({ name: "VDatePickerControls", props: kb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
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
    const h = { VBtn: { density: "comfortable", variant: "text" } }, w = b(Ne, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = b(Ne, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = b(Ne, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), x = b(Ne, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: S }, null), g = b(Ne, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), C = b(Ne, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), k = b(Ne, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), A = p(be, null, [b(Ne, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: y }, null), b(Ne, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: y, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: S }, E = p(be, null, [e.noMonthPicker ? k : A, b(hu, null, null), p("div", { class: "v-date-picker-controls__month" }, [w, I])]), D = p(be, null, [p("div", { class: "v-date-picker-controls__month" }, [w, g, I]), b(hu, null, null), p("div", { class: "v-date-picker-controls__year" }, [V, C, x])]);
    return b(Me, { defaults: h }, { default: () => {
      var _a3;
      return [p("div", { class: te(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ve(e.controlHeight) } }, [((_a3 = a.default) == null ? void 0 : _a3.call(a, P)) ?? p(be, null, [e.controlVariant === "modal" && E, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), AA = H({ appendIcon: _e, color: String, header: String, transition: String, onClick: Bt() }, "VDatePickerHeader"), yu = ee()({ name: "VDatePickerHeader", props: AA(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
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
    return p("div", { class: te(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: ge(o.value), onClick: i }, [a.prepend && p("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && b(Gt, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [p("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? e.header])];
    } }), u && p("div", { class: "v-date-picker-header__append" }, [a.append ? b(Me, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = a.append) == null ? void 0 : _a3.call(a)];
    } }) : b(Ne, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), TA = H({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function DA(e) {
  const t = ml(), n = Ce(e, "modelValue", [], (m) => lt(m).map((y) => t.date(y))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = Ce(e, "year", void 0, (m) => {
    const y = m != null ? Number(m) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), y));
  }, (m) => t.getYear(m)), o = Ce(e, "month", void 0, (m) => {
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
      return { date: h, formatted: t.format(h, "keyboardDate"), isAdjacent: V, isDisabled: S(h), isEnd: g, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((A) => t.isSameDay(h, A)), isStart: x, isToday: t.isSameDay(h, y), isWeekEnd: w % k === k - 1, isWeekStart: w % k === 0, isoDate: I, localized: t.format(h, "dayOfMonth"), month: t.getMonth(h), year: t.getYear(h) };
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
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = wb(e);
  function S(m) {
    if (e.disabled) return true;
    const y = t.date(m);
    return f.value && t.isBefore(t.endOfDay(y), f.value) || v.value && t.isAfter(y, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => t.isSameDay(t.date(h), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function wb(e) {
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
const xb = H({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...Le(TA(), ["displayValue"]) }, "VDatePickerMonth"), bu = ee()({ name: "VDatePickerMonth", props: xb(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = K(), { t: o } = Je(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = DA(e), c = ml(), d = ue(), f = ue(), v = ue(false), S = B(() => v.value ? e.reverseTransition : e.transition);
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
      r.value = rx(c, d.value, f.value);
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
    let A, P = [];
    if (Array.isArray(C) ? A = C.includes(g) : C instanceof Function ? A = C(g) || false : C ? A = C[g] || false : A = false, A) A !== true ? P = lt(A) : typeof k == "string" ? P = [k] : typeof k == "function" ? P = lt(k(g)) : Array.isArray(k) ? P = k : typeof k == "object" && k !== null && (P = lt(k[g]));
    else return [];
    return P.length ? P.filter(Boolean).map((E) => typeof E == "string" ? E : "surface-variant") : ["surface-variant"];
  }
  function x(g) {
    const C = V(g);
    return C.length ? p("div", { class: "v-date-picker-month__events" }, [C.map((k) => b(ey, { dot: true, color: k }, null))]) : null;
  }
  ne(() => p("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && p("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && p("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [ut("\xA0")]), s.value.map((g) => p("div", { class: te(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [g]))]), b(Gt, { name: S.value }, { default: () => {
    var _a3;
    return [p("div", { ref: l, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((g) => p("div", { class: te(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [g])), i.value.map((g, C) => {
      var _a4;
      const k = { props: { class: "v-date-picker-month__day-btn", color: g.isSelected || g.isToday ? e.color : void 0, disabled: g.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: g.isSelected ? "flat" : g.isToday ? "outlined" : "text", "aria-label": h(g), "aria-current": g.isToday ? "date" : void 0, onClick: () => I(g.date) }, item: g, i: C };
      return m.value && !g.isSelected && (g.isDisabled = true), p("div", { class: te(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": g.isAdjacent, "v-date-picker-month__day--hide-adjacent": g.isHidden, "v-date-picker-month__day--selected": g.isSelected, "v-date-picker-month__day--week-end": g.isWeekEnd, "v-date-picker-month__day--week-start": g.isWeekStart }]), "data-v-date": g.isDisabled ? void 0 : g.isoDate }, [(e.showAdjacentMonths || !g.isAdjacent) && (((_a4 = a.day) == null ? void 0 : _a4.call(a, k)) ?? b(Ne, k.props, { default: () => [g.localized, x(g.isoDate)] }))]);
    })])];
  } })]));
} }), Cb = H({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), pu = ee()({ name: "VDatePickerMonths", props: Cb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = Ce(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), On(12).map((u) => {
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
} }), _b = H({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), Su = ee()({ name: "VDatePickerYears", props: _b(), directives: { vIntersect: Tn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), o = Ce(e, "modelValue"), i = ue(false), r = _(() => {
    const f = l.getYear(l.date());
    let v = f - 100, S = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (S = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), On(S - v + 1, v).map((y) => {
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
  })])]), [[Tn, { handler: c }, null, { once: true }]])), {};
} }), EA = H({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...Le(kb(), ["active", "monthText", "yearText"]), ...xb({ weeksInMonth: "static" }), ...Le(Cb(), ["modelValue"]), ...Le(_b(), ["modelValue"]), ...Mr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), MA = ee()({ name: "VDatePicker", props: EA(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = ml(), { t: o } = Je(), { rtlClasses: i } = _t(), r = Ce(e, "modelValue", void 0, (j) => lt(j).map((se) => l.date(se)), (j) => e.multiple ? j : j[0]), s = Ce(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = wb(e), f = _(() => {
    var _a3;
    const j = l.date(), se = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? l.date(r.value[0]) : d(j);
    return se && l.isValid(se) ? se : j;
  }), v = B(() => e.headerColor ?? e.color), S = Ce(e, "month"), m = _({ get: () => Number(S.value ?? l.getMonth(l.startOfMonth(f.value))), set: (j) => S.value = j }), y = Ce(e, "year"), h = _({ get: () => Number(y.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (j) => y.value = j }), w = ue(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const j = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && j.split(" ").length === 3 ? j.replace(" ", `
`) : j;
  }), V = B(() => {
    let j = l.date();
    return j = l.setDate(j, 1), j = l.setMonth(j, m.value), j = l.setYear(j, h.value), j;
  }), x = B(() => l.format(V.value, "monthAndYear")), g = B(() => l.format(V.value, "monthShort")), C = B(() => l.format(V.value, "year")), k = B(() => `date-picker-header${w.value ? "-reverse" : ""}-transition`), A = _(() => {
    if (e.disabled) return true;
    const j = [];
    if (s.value !== "month") j.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let se = l.date();
      if (se = l.startOfMonth(se), se = l.setMonth(se, m.value), se = l.setYear(se, h.value), u.value) {
        const Se = l.addDays(l.startOfMonth(se), -1), ae = l.addDays(l.startOfYear(se), -1);
        l.isAfter(u.value, Se) && j.push("prev-month"), l.isAfter(u.value, ae) && j.push("prev-year");
      }
      if (c.value) {
        const Se = l.addDays(l.endOfMonth(se), 1), ae = l.addDays(l.endOfYear(se), 1);
        l.isAfter(Se, c.value) && j.push("next-month"), l.isAfter(ae, c.value) && j.push("next-year");
      }
    }
    return j;
  }), P = _(() => e.allowedYears || M), E = _(() => e.allowedMonths || T);
  function D(j, se) {
    const Se = e.allowedDates;
    if (typeof Se != "function") return true;
    const ae = 1 + Lh(l, j, se);
    for (let me = 0; me < ae; me++) if (Se(l.addDays(j, me))) return true;
    return false;
  }
  function M(j) {
    if (typeof e.allowedDates == "function") {
      const se = l.parseISO(`${j}-01-01`);
      return D(se, l.endOfYear(se));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const se of e.allowedDates) if (l.getYear(l.date(se)) === j) return true;
      return false;
    }
    return true;
  }
  function T(j) {
    if (typeof e.allowedDates == "function") {
      const se = String(j + 1).padStart(2, "0"), Se = l.parseISO(`${h.value}-${se}-01`);
      return D(Se, l.endOfMonth(Se));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const se of e.allowedDates) if (l.getYear(l.date(se)) === h.value && l.getMonth(l.date(se)) === j) return true;
      return false;
    }
    return true;
  }
  function F() {
    m.value < 11 ? m.value++ : (h.value++, m.value = 0, O()), W();
  }
  function z() {
    m.value > 0 ? m.value-- : (h.value--, m.value = 11, O()), W();
  }
  function N() {
    if (h.value++, c.value) {
      const j = String(m.value + 1).padStart(2, "0"), se = l.parseISO(`${h.value}-${j}-01`);
      l.isAfter(se, c.value) && (m.value = l.getMonth(c.value));
    }
    O();
  }
  function X() {
    if (h.value--, u.value) {
      const j = String(m.value + 1).padStart(2, "0"), se = l.endOfMonth(l.parseISO(`${h.value}-${j}-01`));
      l.isAfter(u.value, se) && (m.value = l.getMonth(u.value));
    }
    O();
  }
  function Z() {
    s.value = "month";
  }
  function L() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function G() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function W() {
    s.value === "months" && L();
  }
  function O() {
    s.value === "year" && G();
  }
  return ce(r, (j, se) => {
    const Se = lt(se), ae = lt(j);
    if (!ae.length) return;
    const me = l.date(Se[Se.length - 1]), ie = l.date(ae[ae.length - 1]);
    if (l.isSameDay(me, ie)) return;
    const he = l.getMonth(ie), fe = l.getYear(ie);
    he !== m.value && (m.value = he, W()), fe !== h.value && (h.value = fe, O()), w.value = l.isBefore(me, ie);
  }), ne(() => {
    const j = Xl.filterProps(e), se = Le(gu.filterProps(e), ["viewMode"]), Se = yu.filterProps(e), ae = bu.filterProps(e), me = Le(pu.filterProps(e), ["modelValue"]), ie = Le(Su.filterProps(e), ["modelValue"]), he = { color: v.value, header: I.value, transition: k.value };
    return b(Xl, Y(j, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ve(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? b(Me, { defaults: { VDatePickerHeader: { ...he } } }, { default: () => {
      var _a3;
      return [(_a3 = a.header) == null ? void 0 : _a3.call(a, he)];
    } }) : b(yu, Y({ key: "header" }, Se, he, { onClick: s.value !== "month" ? Z : void 0 }), { prepend: a.prepend, append: a.append }), default: () => p(be, null, [b(gu, Y(se, { disabled: A.value, viewMode: s.value, text: x.value, monthText: g.value, yearText: C.value, "onClick:next": F, "onClick:prev": z, "onClick:nextYear": N, "onClick:prevYear": X, "onClick:month": L, "onClick:year": G }), { default: a.controls }), b(Ho, { hideOnLeave: true }, { default: () => [s.value === "months" ? b(pu, Y({ key: "date-picker-months" }, me, { modelValue: m.value, "onUpdate:modelValue": [(fe) => m.value = fe, W], min: u.value, max: c.value, year: h.value, allowedMonths: E.value }), { month: a.month }) : s.value === "year" ? b(Su, Y({ key: "date-picker-years" }, ie, { modelValue: h.value, "onUpdate:modelValue": [(fe) => h.value = fe, O], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : b(bu, Y({ key: "date-picker-month" }, ae, { modelValue: r.value, "onUpdate:modelValue": (fe) => r.value = fe, month: m.value, "onUpdate:month": [(fe) => m.value = fe, W], year: h.value, "onUpdate:year": [(fe) => h.value = fe, O], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), BA = H({ actionText: String, bgColor: String, color: String, icon: _e, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...ke(), ...kt(), ...Jn({ size: void 0 }), ...We() }, "VEmptyState"), $A = ee()({ name: "VEmptyState", props: BA(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = Ke(e), { backgroundColorClasses: o, backgroundColorStyles: i } = qe(() => e.bgColor), { dimensionStyles: r } = wt(e), { displayClasses: s } = nn();
  function u(c) {
    n("click:action", c);
  }
  return ne(() => {
    var _a3, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), S = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return p("div", { class: te(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: ge([i.value, r.value, e.style]) }, [S && p("div", { key: "media", class: "v-empty-state__media" }, [a.media ? b(Me, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : p(be, null, [e.image ? b(da, { key: "image", src: e.image, height: m }, null) : e.icon ? b(Ge, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && p("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = a.headline) == null ? void 0 : _a3.call(a)) ?? e.headline]), f && p("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && p("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ve(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && p("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && p("div", { key: "actions", class: "v-empty-state__actions" }, [b(Me, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = a.actions) == null ? void 0 : _a4.call(a, { props: { onClick: u } })) ?? b(Ne, { onClick: u }, null)];
    } })])]);
  }), {};
} }), Xo = Symbol.for("vuetify:v-expansion-panel"), Vb = H({ ...ke(), ...Tc() }, "VExpansionPanelText"), ku = ee()({ name: "VExpansionPanelText", props: Vb(), setup(e, t) {
  let { slots: n } = t;
  const a = He(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = Dc(e, a.isSelected);
  return ne(() => b(kr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [nt(p("div", { class: te(["v-expansion-panel-text", e.class]), style: ge(e.style) }, [n.default && l.value && p("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[En, a.isSelected.value]])];
  } })), {};
} }), Ib = H({ color: String, expandIcon: { type: _e, default: "$expand" }, collapseIcon: { type: _e, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...ke(), ...kt() }, "VExpansionPanelTitle"), wu = ee()({ name: "VExpansionPanelTitle", directives: { vRipple: Ft }, props: Ib(), setup(e, t) {
  let { slots: n } = t;
  const a = He(Xo);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { dimensionStyles: i } = wt(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return ne(() => {
    var _a3;
    return nt(p("button", { class: te(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: ge([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [p("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && b(Me, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [p("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? b(Ge, null, null)])];
    } })]), [[Ft, e.ripple]]);
  }), {};
} }), Pb = H({ title: String, text: String, bgColor: String, ...xt(), ...Sl(), ...ot(), ...De(), ...Ib(), ...Vb() }, "VExpansionPanel"), FA = ee()({ name: "VExpansionPanel", props: Pb(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Xo), { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.bgColor), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, v, S) => (a.group.selected.value.includes(v.id) && f.push(S), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return it(Xo, a), ne(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), S = wu.filterProps(e), m = ku.filterProps(e);
    return b(e.tag, { class: te(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: ge([o.value, e.style]) }, { default: () => [p("div", { class: te(["v-expansion-panel__shadow", ...i.value]) }, null), b(Me, { defaults: { VExpansionPanelTitle: { ...S }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && b(wu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && b(ku, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: a };
} }), LA = ["default", "accordion", "inset", "popout"], RA = H({ flat: Boolean, ...pl(), ...Jt(Pb(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...We(), ...ke(), ...De(), variant: { type: String, default: "default", validator: (e) => LA.includes(e) } }, "VExpansionPanels"), OA = ee()({ name: "VExpansionPanels", props: RA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Na(e, Xo), { themeClasses: o } = Ke(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return mt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), ne(() => b(e.tag, { class: te(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), NA = H({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...Le(Cr({ active: true }), ["location", "spaced"]), ...gl(), ...Zn(), ...ga({ transition: "fab-transition" }) }, "VFab"), HA = ee()({ name: "VFab", props: NA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = ue(56), o = K(), { resizeRef: i } = Sn((d) => {
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
    return p("div", { ref: c, class: te(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: ge([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [p("div", { class: "v-fab__container" }, [b(Gt, { appear: e.appear, transition: e.transition }, { default: () => [nt(b(Ne, Y({ ref: i }, d, { active: void 0, location: void 0 }), n), [[En, e.active]])] })])]);
  }), {};
} });
function zA() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const a = [], l = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await Ab(o, Tb(".", o));
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
      for (const r of o) i.push(...await Ab(r, Tb(t, r)));
      n(i);
    });
  });
}
function Tb(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const WA = H({ filterByType: String }, "file-accept");
function jA(e) {
  const t = _(() => e.filterByType ? UA(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function UA(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const YA = H({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...Le(Sa({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => lt(e).every((t) => t != null && typeof t == "object") }, ...WA(), ...mi({ clearable: true }) }, "VFileInput"), GA = ee()({ name: "VFileInput", inheritAttrs: false, props: YA(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = Je(), { filterAccepted: i } = jA(e), r = Ce(e, "modelValue", e.modelValue, (Z) => lt(Z), (Z) => !e.multiple && Array.isArray(Z) ? Z[0] : Z), { isFocused: s, focus: u, blur: c } = pa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((Z, L) => {
    let { size: G = 0 } = L;
    return Z + G;
  }, 0)), v = _(() => df(f.value, d.value)), S = _(() => (r.value ?? []).map((Z) => {
    const { name: L = "", size: G = 0 } = Z, W = M(L);
    return e.showSize ? `${W} (${df(G, d.value)})` : W;
  })), m = _(() => {
    var _a3;
    const Z = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, Z, v.value) : o(e.counterString, Z);
  }), y = K(), h = K(), w = K(), I = B(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), x = ue(false), { handleDrop: g, hasFilesOrFolders: C } = zA();
  function k() {
    var _a3;
    w.value !== document.activeElement && ((_a3 = w.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function A(Z) {
    var _a3;
    (_a3 = w.value) == null ? void 0 : _a3.click();
  }
  function P(Z) {
    a("mousedown:control", Z);
  }
  function E(Z) {
    var _a3;
    (_a3 = w.value) == null ? void 0 : _a3.click(), a("click:control", Z);
  }
  function D(Z) {
    Z.stopPropagation(), k(), Ae(() => {
      r.value = [], ai(e["onClick:clear"], Z);
    });
  }
  function M(Z) {
    if (Z.length < Number(e.truncateLength)) return Z;
    const L = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${Z.slice(0, L)}\u2026${Z.slice(Z.length - L)}`;
  }
  function T(Z) {
    Z.preventDefault(), Z.stopImmediatePropagation(), x.value = true;
  }
  function F(Z) {
    Z.preventDefault(), x.value = false;
  }
  async function z(Z) {
    if (Z.preventDefault(), Z.stopImmediatePropagation(), x.value = false, !w.value || !C(Z)) return;
    const L = await g(Z);
    X(L);
  }
  function N(Z) {
    if (!(!Z.target || Z.repack)) if (e.filterByType) X([...Z.target.files]);
    else {
      const L = Z.target;
      r.value = [...L.files ?? []];
    }
  }
  function X(Z) {
    const L = new DataTransfer(), { accepted: G, rejected: W } = i(Z);
    W.length && a("rejected", W);
    for (const j of G) L.items.add(j);
    w.value.files = L.files, r.value = [...L.files];
    const O = new Event("change", { bubbles: true });
    O.repack = true, w.value.dispatchEvent(O);
  }
  return ce(r, (Z) => {
    (!Array.isArray(Z) || !Z.length) && w.value && (w.value.value = "");
  }), ne(() => {
    const Z = !!(l.counter || e.counter), L = !!(Z || l.details), [G, W] = qn(n), { modelValue: O, ...j } = Ot.filterProps(e), se = { ...La.filterProps(e), "onClick:clear": D }, Se = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, ae = n.accept ? String(n.accept) : void 0, me = Se ? void 0 : e.filterByType ?? ae;
    return b(Ot, Y({ ref: y, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": x.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": A }, G, j, { centerAffix: !V.value, focused: s.value }), { ...l, default: (ie) => {
      let { id: he, isDisabled: fe, isDirty: $, isReadonly: R, isValid: J, hasDetails: re } = ie;
      return b(La, Y({ ref: h, prependIcon: e.prependIcon, onMousedown: P, onClick: E, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, se, { id: he.value, active: I.value || $.value, dirty: $.value || e.dirty, disabled: fe.value, focused: s.value, details: re.value, error: J.value === false, onDragover: T, onDrop: z }), { ...l, default: (Q) => {
        var _a3;
        let { props: { class: le, ...pe }, controlRef: de } = Q;
        return p(be, null, [p("input", Y({ ref: (U) => w.value = de.value = U, type: "file", accept: me, readonly: R.value, disabled: fe.value, multiple: e.multiple, name: e.name, onClick: (U) => {
          U.stopPropagation(), R.value && U.preventDefault(), k();
        }, onChange: N, onDragleave: F, onFocus: k, onBlur: c }, pe, W), null), p("div", { class: te(le) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: S.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? S.value.map((U) => b(fa, { key: U, size: "small", text: U }, null)) : S.value.join(", "))])]);
      } });
    }, details: L ? (ie) => {
      var _a3, _b2;
      return p(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, ie), Z && p(be, null, [p("span", null, null), b(Vr, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, y, h, w);
} }), KA = H({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Ht(), ...ke(), ...xt(), ...gl(), ...ot(), ...De({ tag: "footer" }), ...We() }, "VFooter"), qA = ee()({ name: "VFooter", props: KA(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), { themeClasses: l } = Ke(e), { backgroundColorClasses: o, backgroundColorStyles: i } = qe(() => e.color), { borderClasses: r } = qt(e), { elevationClasses: s } = It(e), { roundedClasses: u } = dt(e), c = ue(32), { resizeRef: d } = Sn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return $t(() => e.app, () => {
    const v = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    ct(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), ne(() => b(e.tag, { ref: d, class: te(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: ge([i.value, e.app ? a.value : { height: ve(e.height) }, e.style]) }, n)), {};
} }), XA = H({ ...ke(), ...n_() }, "VForm"), ZA = ee()({ name: "VForm", props: XA(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = a_(e), o = K();
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
    return p("form", { ref: o, class: te(["v-form", e.class]), style: ge(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, l)]);
  }), Pt(l, o);
} }), JA = H({ color: String, ...Ht(), ...ke(), ...ot(), ...De({ tag: "kbd" }), ...We(), ...xt() }, "VKbd"), xu = ee()({ name: "VKbd", props: JA(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { borderClasses: l } = qt(e), { roundedClasses: o } = dt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = qe(() => e.color), { elevationClasses: s } = It(e);
  return ne(() => b(e.tag, { class: te(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: ge([r.value, e.style]) }, n)), {};
} });
function Db(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const Eb = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, QA = H({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => Eb }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...ke(), ...We(), ...Ht(), ...ot(), ...xt(), color: String }, "VHotkey"), ps = Symbol("VHotkey:AND_DELINEATOR"), Ss = Symbol("VHotkey:SLASH_DELINEATOR"), hv = Symbol("VHotkey:THEN_DELINEATOR");
function eT(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = Db(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function gv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = Db(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const tT = ee()({ name: "VHotkey", props: QA(), setup(e) {
  const { t } = Je(), { themeClasses: n } = Ke(e), { rtlClasses: a } = _t(), { borderClasses: l } = qt(e), { roundedClasses: o } = dt(e), { elevationClasses: i } = It(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((h) => {
    const w = [], I = Cx(h);
    for (let V = 0; V < I.length; V++) {
      const x = I[V];
      V > 0 && w.push(hv);
      const { keys: g, separators: C } = Uh(x);
      for (let k = 0; k < g.length; k++) {
        const A = g[k];
        k > 0 && w.push(C[k - 1] === "/" ? Ss : ps), w.push(gv(e.keyMap, e.displayMode, A, c.value));
      }
    }
    return w;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const w = d.value.map((I) => {
      const V = [];
      for (const x of I) if (Array.isArray(x)) {
        const g = x[0] === "icon" || x[0] === "symbol" ? gv(Rt(Eb, e.keyMap), "text", String(x[1]), c.value)[1] : x[1];
        V.push(v(g));
      } else x === ps ? V.push(t("$vuetify.hotkey.plus")) : x === Ss ? V.push(t("$vuetify.hotkey.or")) : x === hv && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", w);
  });
  function v(h) {
    return h.startsWith("$vuetify.") ? t(h) : h;
  }
  function S(h) {
    if (e.displayMode === "text") return;
    const w = eT(e.keyMap, String(h[2]), c.value);
    return v(w);
  }
  function m(h, w) {
    const I = e.variant === "contained", V = I ? "kbd" : xu, x = ["v-hotkey__key", `v-hotkey__key-${h[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return b(V, { key: w, class: te(x), style: ge(I ? void 0 : s.value), "aria-hidden": "true", title: S(h) }, { default: () => [h[0] === "icon" ? b(Ge, { icon: h[1], "aria-hidden": "true" }, null) : v(h[1])] });
  }
  function y(h, w) {
    return p("span", { key: w, class: "v-hotkey__divider", "aria-hidden": "true" }, [h === ps ? "+" : h === Ss ? "/" : t("$vuetify.hotkey.then")]);
  }
  ne(() => {
    const h = p(be, null, [e.prefix && p("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((w, I) => p("span", { class: "v-hotkey__combination", key: I }, [w.map((V, x) => Array.isArray(V) ? m(V, x) : y(V, x)), I < d.value.length - 1 && p("span", { "aria-hidden": "true" }, [ut("\xA0")])])), e.suffix && p("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return p("div", { class: te(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: ge(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? h : b(xu, { key: "contained", class: te(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: ge(s.value), "aria-hidden": "true" }, { default: () => [h] })]);
  });
} }), nT = H({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Pc() }, "VHover"), aT = ee()({ name: "VHover", props: nT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = Ac(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), lT = H({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...kt(), ...De() }, "VInfiniteScroll"), yv = Kt({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = ii();
  return ce(l, async (o) => {
    n("intersect", e.side, o);
  }), ne(() => p("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [ut("\xA0")])), {};
} }), oT = ee()({ name: "VInfiniteScroll", props: lT(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = K(), o = ue("ok"), i = ue("ok"), r = _(() => ve(e.margin)), s = ue(false);
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
    function k(A) {
      v(g, A), Ae(() => {
        A === "empty" || A === "error" || (A === "ok" && g === "start" && u(d() - m + c()), e.mode !== "manual" && Ae(() => {
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
    var _a3, _b2, _c2, _d2, _e2;
    if (e.side !== g && e.side !== "both") return;
    const k = () => h(g), A = { side: g, props: { onClick: k, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, A) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, A)) ?? p("div", null, [w(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, A)) ?? b(Ba, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, A)) ?? b(Ne, { variant: "outlined", color: e.color, onClick: k }, { default: () => [w(e.loadMoreText)] }) : ((_e2 = n.loading) == null ? void 0 : _e2.call(n, A)) ?? b(Ba, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = wt(e);
  ne(() => {
    const g = e.tag, C = e.side === "start" || e.side === "both", k = e.side === "end" || e.side === "both", A = e.mode === "intersect";
    return b(g, { ref: l, class: te(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": k }]), style: ge(V.value) }, { default: () => {
      var _a3;
      return [p("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && A && b(yv, { key: "start", side: "start", onIntersect: y, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), k && A && b(yv, { key: "end", side: "end", onIntersect: y, rootMargin: r.value }, null), p("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
    } });
  });
  function x(g) {
    const C = g ?? e.side;
    v(C, "ok"), Ae(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && Ae(() => {
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
} }), Mb = Symbol.for("vuetify:v-item-group"), iT = H({ ...ke(), ...pl({ selectedClass: "v-item--selected" }), ...De(), ...We() }, "VItemGroup"), rT = ee()({ name: "VItemGroup", props: iT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Na(e, Mb);
  return () => b(e.tag, { class: te(["v-item-group", a.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), sT = ee()({ name: "VItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = Ma(e, Mb);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), uT = H({ ...ke(), ...kt(), ...zh() }, "VLayout"), cT = ee()({ name: "VLayout", props: uT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = jh(e), { dimensionStyles: s } = wt(e);
  return ne(() => {
    var _a3;
    return p("div", { ref: r, class: te([a.value, e.class]), style: ge([s.value, l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), dT = H({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...ke(), ...gl() }, "VLayoutItem"), fT = ee()({ name: "VLayoutItem", props: dT(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a3;
    return p("div", { class: te(["v-layout-item", e.class]), style: ge([a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), vT = H({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...ke(), ...kt(), ...De(), ...ga({ transition: "fade-transition" }) }, "VLazy"), mT = ee()({ name: "VLazy", directives: { vIntersect: Tn }, props: vT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = Ce(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return ne(() => nt(b(e.tag, { class: te(["v-lazy", e.class]), style: ge([a.value, e.style]) }, { default: () => [l.value && b(Gt, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Tn, { handler: o, options: e.options }, null]])), {};
} }), hT = H({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...ke() }, "VLocaleProvider"), gT = ee()({ name: "VLocaleProvider", props: hT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Eh(e);
  return ne(() => {
    var _a3;
    return p("div", { class: te(["v-locale-provider", a.value, e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), yT = H({ scrollable: Boolean, ...ke(), ...kt(), ...De({ tag: "main" }) }, "VMain"), bT = ee()({ name: "VMain", props: yT(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), { mainStyles: l } = Wh(), { ssrBootStyles: o } = bl();
  return ne(() => b(e.tag, { class: te(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: ge([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? p("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function pT(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = ue(false), o = ue(0), i = _(() => {
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
const ST = 100, kT = 20;
function bv(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function pv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = bv(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return bv(t) * 1e3;
}
function wT() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new mh(kT))).push([l.timeStamp, o]);
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
      if (i[0] - u[0] > ST) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: pv(r), y: pv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : xT();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function xT() {
  throw new Error();
}
function CT(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  Ct(() => {
    window.addEventListener("touchstart", w, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), Nt(() => {
    window.removeEventListener("touchstart", w), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = wT();
  let d = false;
  const f = ue(false), v = ue(0), S = ue(0);
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
    const C = g.changedTouches[0].clientX, k = g.changedTouches[0].clientY, A = 25, P = i.value === "left" ? C < A : i.value === "right" ? C > document.documentElement.clientWidth - A : i.value === "top" ? k < A : i.value === "bottom" ? k > document.documentElement.clientHeight - A : Pl(), E = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? k < l.value : i.value === "bottom" ? k > document.documentElement.clientHeight - l.value : Pl());
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
    const A = h(r.value ? C : k, false);
    v.value = Math.max(0, Math.min(1, A)), A > 1 ? S.value = y(r.value ? C : k, true) : A < 0 && (S.value = y(r.value ? C : k, false));
  }
  function V(g) {
    if (d = false, !f.value) return;
    s(g), f.value = false;
    const C = c(g.changedTouches[0].identifier), k = Math.abs(C.x), A = Math.abs(C.y);
    (r.value ? k > A && k > 400 : A > k && A > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Pl()) : n.value = v.value > 0.5;
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
const _T = ["start", "end", "left", "right", "top", "bottom"], VT = H({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => _T.includes(e) }, sticky: Boolean, ...Ht(), ...ke(), ...Pc(), ...hl({ mobile: null }), ...xt(), ...gl(), ...ot(), ...Le(Wg(), ["disableInitialFocus"]), ...De({ tag: "nav" }), ...We() }, "VNavigationDrawer"), IT = ee()({ name: "VNavigationDrawer", props: VT(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = _t(), { themeClasses: i } = Ke(e), { borderClasses: r } = qt(e), { backgroundColorClasses: s, backgroundColorStyles: u } = qe(() => e.color), { elevationClasses: c } = It(e), { displayClasses: d, mobile: f } = nn(e), { roundedClasses: v } = dt(e), S = tg(), m = Ce(e, "modelValue", null, (L) => !!L), { ssrBootStyles: y } = bl(), { scopeId: h } = kl(), w = K(), I = ue(false), { runOpenDelay: V, runCloseDelay: x } = Ac(e, (L) => {
    I.value = L;
  }), g = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => Os(e.location, o.value)), k = B(() => e.persistent), A = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !A.value && C.value !== "bottom");
  jg(e, { isActive: m, localTop: A, contentEl: w }), $t(() => e.expandOnHover && e.rail != null, () => {
    ce(I, (L) => a("update:rail", !L));
  }), $t(() => !e.disableResizeWatcher, () => {
    ce(A, (L) => !e.permanent && Ae(() => m.value = !L));
  }), $t(() => !e.disableRouteWatcher && !!S, () => {
    ce(S.currentRoute, () => A.value && (m.value = false));
  }), ce(() => e.permanent, (L) => {
    L && (m.value = true);
  }), e.modelValue == null && !A.value && (m.value = e.permanent || !f.value);
  const { isDragging: E, dragProgress: D } = CT({ el: w, isActive: m, isTemporary: A, width: g, touchless: B(() => e.touchless), position: C }), M = _(() => {
    const L = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : g.value;
    return E.value ? L * D.value : L;
  }), { layoutItemStyles: T, layoutItemScrimStyles: F } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: M, elementSize: g, active: al(m), disableTransitions: B(() => E.value), absolute: _(() => e.absolute || P.value && typeof z.value != "string") }), { isStuck: z, stickyStyles: N } = pT({ rootEl: w, isSticky: P, layoutItemStyles: T }), X = qe(() => typeof e.scrim == "string" ? e.scrim : null), Z = _(() => ({ ...E.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...F.value }));
  return mt({ VList: { bgColor: "transparent" } }), ne(() => {
    const L = l.image || e.image;
    return p(be, null, [b(e.tag, Y({ ref: w, onMouseenter: V, onMouseleave: x, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": A.value, "v-navigation-drawer--persistent": k.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, T.value, y.value, N.value, e.style], inert: !m.value }, h, n), { default: () => {
      var _a3, _b2, _c2;
      return [L && p("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? b(Me, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : b(da, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && p("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = l.prepend) == null ? void 0 : _a3.call(l)]), p("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && p("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), b(Da, { name: "fade-transition" }, { default: () => [A.value && (E.value || m.value) && !!e.scrim && p("div", Y({ class: ["v-navigation-drawer__scrim", X.backgroundColorClasses.value], style: [Z.value, X.backgroundColorStyles.value], onClick: () => {
      k.value || (m.value = false);
    } }, h), null)] })]);
  }), { isStuck: z };
} }), PT = Kt({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = Ug();
  return () => {
    var _a3;
    return a.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), AT = 50, TT = 500;
function DT(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  bt(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), AT);
    }, TT);
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
const ET = H({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...Le(hi(), ["modelValue", "validationValue"]) }, "VNumberInput"), MT = ee()({ name: "VNumberInput", props: { ...ET() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = K(), { holdStart: l, holdStop: o } = DT({ toggleUpDown: E }), i = ao(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = ue(e.focused), { decimalSeparator: u } = Je(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(O) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const Se = j == null ? String(O) : O.toFixed(j);
    if (s.value && se) return Number(Se).toString().replace(".", c.value);
    if (e.minFractionDigits === null || j !== null && j < e.minFractionDigits) return Se.replace(".", c.value);
    let [ae, me] = Se.split(".");
    return me = (me ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [ae, me].filter(Boolean).join(c.value);
  }
  const f = Ce(e, "modelValue", null, (O) => O ?? null, (O) => O == null ? O ?? null : Xe(Number(O), e.min, e.max)), v = ue(null), S = ue(null);
  ce(f, (O) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === O || (O == null ? (v.value = null, S.value = null) : isNaN(O) || (v.value = d(O), S.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set(O) {
    if (O === null || O === "") {
      f.value = null, v.value = null, S.value = null;
      return;
    }
    const j = Number(O.replace(c.value, "."));
    isNaN(j) || (v.value = O, S.value = j, j <= e.max && j >= e.min && (f.value = j));
  } }), y = _(() => {
    var _a3;
    if (S.value === null) return false;
    const O = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return O !== Xe(O, e.min, e.max);
  }), h = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), w = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = B(() => I.value === "split" ? "$plus" : "$collapse"), x = B(() => I.value === "split" ? "$minus" : "$expand"), g = B(() => I.value === "split" ? "default" : "small"), C = B(() => I.value === "stacked" ? "auto" : "100%"), k = { props: { onClick: T, onPointerup: F, onPointerdown: z, onPointercancel: F } }, A = { props: { onClick: T, onPointerup: F, onPointerdown: N, onPointercancel: F } };
  ce(() => e.precision, () => Z()), ce(() => e.minFractionDigits, () => Z()), Ct(() => {
    X();
  });
  function P(O) {
    if (O == null) return 0;
    const j = O.toString(), se = j.indexOf(".");
    return ~se ? j.length - se : 0;
  }
  function E() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(Xe(0, e.min, e.max));
      return;
    }
    let j = Math.max(P(f.value), P(e.step));
    e.precision != null && (j = Math.max(j, e.precision)), O ? h.value && (m.value = d(f.value + e.step, j)) : w.value && (m.value = d(f.value - e.step, j));
  }
  function D(O) {
    var _a3;
    if (!O.data) return;
    const j = O.target, { value: se, selectionStart: Se, selectionEnd: ae } = j ?? {}, me = se ? se.slice(0, Se) + O.data + se.slice(ae) : O.data, ie = Vw(me, e.precision, c.value);
    if (new RegExp(`^-?\\d*${Ui(c.value)}?\\d*$`).test(me) || (O.preventDefault(), j.value = ie, Ae(() => m.value = ie)), e.precision != null) {
      if (((_a3 = me.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        O.preventDefault(), j.value = ie, Ae(() => m.value = ie);
        const he = (Se ?? 0) + O.data.length;
        j.setSelectionRange(he, he);
      }
      e.precision === 0 && me.endsWith(c.value) && (O.preventDefault(), j.value = ie, Ae(() => m.value = ie));
    }
  }
  async function M(O) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(O.key) || O.ctrlKey || ["ArrowDown", "ArrowUp"].includes(O.key) && (O.preventDefault(), O.stopPropagation(), X(), await Ae(), O.key === "ArrowDown" ? E(false) : E());
  }
  function T(O) {
    O.stopPropagation();
  }
  function F(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.releasePointerCapture(O.pointerId), O.preventDefault(), o();
  }
  function z(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("up");
  }
  function N(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("down");
  }
  function X() {
    if (r.value || !a.value) return;
    const O = a.value.value, j = Number(O.replace(c.value, "."));
    O && !isNaN(j) ? m.value = d(Xe(j, e.min, e.max)) : m.value = null;
  }
  function Z() {
    r.value || (m.value = f.value !== null && !isNaN(f.value) ? d(f.value, e.precision, false) : null);
  }
  function L() {
    if (!r.value) {
      if (f.value === null || isNaN(f.value)) {
        m.value = null;
        return;
      }
      m.value = f.value.toString().replace(".", c.value);
    }
  }
  function G() {
    L();
  }
  function W() {
    X();
  }
  return ne(() => {
    const { modelValue: O, type: j, ...se } = Yn.filterProps(e);
    function Se() {
      return n.increment ? b(Me, { key: "increment-defaults", defaults: { VBtn: { disabled: !h.value, height: C.value, size: g.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(k)] }) : b(Ne, { "aria-hidden": "true", "data-testid": "increment", disabled: !h.value, height: C.value, icon: V.value, key: "increment-btn", onClick: T, onPointerdown: z, onPointerup: F, onPointercancel: F, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function ae() {
      return n.decrement ? b(Me, { key: "decrement-defaults", defaults: { VBtn: { disabled: !w.value, height: C.value, size: g.value, icon: x.value, variant: "text" } } }, { default: () => [n.decrement(A)] }) : b(Ne, { "aria-hidden": "true", "data-testid": "decrement", disabled: !w.value, height: C.value, icon: x.value, key: "decrement-btn", onClick: T, onPointerdown: N, onPointerup: F, onPointercancel: F, size: g.value, variant: "text", tabindex: "-1" }, null);
    }
    function me() {
      return p("div", { class: "v-number-input__control" }, [ae(), b(dn, { vertical: I.value !== "stacked" }, null), Se()]);
    }
    function ie() {
      return !e.hideInput && !e.inset ? b(dn, { vertical: true }, null) : void 0;
    }
    const he = I.value === "split" ? p("div", { class: "v-number-input__control" }, [b(dn, { vertical: true }, null), Se()]) : e.reverse || I.value === "hidden" ? void 0 : p(be, null, [ie(), me()]), fe = n["append-inner"] || he, $ = I.value === "split" ? p("div", { class: "v-number-input__control" }, [ae(), b(dn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? p(be, null, [me(), ie()]) : void 0, R = n["prepend-inner"] || $;
    return b(Yn, Y({ ref: a }, se, { modelValue: m.value, "onUpdate:modelValue": (J) => m.value = J, focused: s.value, "onUpdate:focused": (J) => s.value = J, validationValue: f.value, error: e.error || y.value || void 0, onBeforeinput: D, onFocus: G, onBlur: W, onKeydown: M, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": fe ? function() {
      var _a3;
      for (var J = arguments.length, re = new Array(J), Q = 0; Q < J; Q++) re[Q] = arguments[Q];
      return p(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...re), he]);
    } : void 0, "prepend-inner": R ? function() {
      var _a3;
      for (var J = arguments.length, re = new Array(J), Q = 0; Q < J; Q++) re[Q] = arguments[Q];
      return p(be, null, [$, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...re)]);
    } : void 0 });
  }), Pt({}, a);
} }), BT = H({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...ht(), ...kt(), ...fi(), ...Jt(mi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), $T = ee()({ name: "VOtpInput", props: BT(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Lt(e), { dimensionStyles: i } = wt(e), { isFocused: r, focus: s, blur: u } = pa(e), c = Ce(e, "modelValue", "", (E) => E == null ? [] : String(E).split(""), (E) => E.join("")), { t: d } = Je(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), S = K(-1), m = K(), y = K([]), h = _(() => y.value[S.value]);
  let w = false;
  $t(() => e.autofocus, () => {
    const E = Nl();
    E.run(() => {
      const { intersectionRef: D, isIntersecting: M } = ii();
      ct(() => {
        D.value = y.value[0];
      }), ce(M, (T) => {
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
    let T = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(E.key) && (E.preventDefault(), E.key === "ArrowLeft" ? T = "prev" : E.key === "ArrowRight" ? T = "next" : ["Backspace", "Delete"].includes(E.key) && (D[S.value] = "", c.value = D, S.value > 0 && E.key === "Backspace" ? T = "prev" : requestAnimationFrame(() => {
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
    P(M) || (c.value = M.split(""), S.value = T);
  }
  function C() {
    c.value = [];
  }
  function k(E, D) {
    s(), S.value = D;
  }
  function A() {
    u(), S.value = -1;
  }
  function P(E) {
    return e.type === "number" && /[^0-9]/g.test(E);
  }
  return mt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), ce(c, (E) => {
    E.length === f.value && a("finish", E.join(""));
  }, { deep: true }), ce(S, (E) => {
    E < 0 || Ae(() => {
      var _a3;
      (_a3 = y.value[E]) == null ? void 0 : _a3.select();
    });
  }), ne(() => {
    var _a3;
    const [E, D] = qn(n);
    return p("div", Y({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, E), [p("div", { ref: m, class: "v-otp-input__content", style: ge([i.value]) }, [v.value.map((M, T) => p(be, null, [e.divider && T !== 0 && p("span", { class: "v-otp-input__divider" }, [e.divider]), b(La, { focused: r.value && e.focusAll || S.value === T, key: T }, { ...l, loader: void 0, default: () => p("input", { ref: (F) => y.value[T] = F, "aria-label": d(e.label, T + 1), autofocus: T === 0 && e.autofocus, autocomplete: "one-time-code", class: te(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: T === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[T], onInput: I, onFocus: (F) => k(F, T), onBlur: A, onKeydown: x, onCompositionstart: () => w = true, onCompositionend: V, onPaste: (F) => g(T, F) }, null) })])), p("input", Y({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), b(Un, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
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
function FT(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const LT = H({ scale: { type: [Number, String], default: 0.5 }, ...ke() }, "VParallax"), RT = ee()({ name: "VParallax", props: LT(), setup(e, t) {
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
      const S = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + m, h = i.value.height, w = y + (h - S) / 2, I = FT((m - w) * c.value), V = Math.max(1, (c.value * (S - h) + h) / h);
      v.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return ne(() => b(da, { class: te(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: ge(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), OT = H({ ..._r({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), NT = ee()({ name: "VRadio", props: OT(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = $a.filterProps(e);
    return b($a, Y(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), HT = H({ height: { type: [Number, String], default: "auto" }, ...Le(Sa(), ["direction"]), ...Le(pc(), ["multiple"]), trueIcon: { type: _e, default: "$radioOn" }, falseIcon: { type: _e, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), zT = ee()({ name: "VRadioGroup", inheritAttrs: false, props: HT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Mt(), o = _(() => e.id || `radio-group-${l}`), i = Ce(e, "modelValue"), r = K();
  return ne(() => {
    const [s, u] = qn(n), c = Ot.filterProps(e), d = $a.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return b(Ot, Y({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: S, messagesId: m, isDisabled: y, isReadonly: h } = v;
      return p(be, null, [f && b(no, { id: S.value }, { default: () => [f] }), b(vg, Y(d, { id: S.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: y.value, readonly: h.value, "aria-labelledby": f ? S.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (w) => i.value = w }), a)]);
    } });
  }), Pt({}, r);
} }), WT = H({ ...fi(), ...Sa(), ...By(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), jT = ee()({ name: "VRangeSlider", inheritAttrs: false, props: WT(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = K(), i = K(), r = K(), { rtlClasses: s } = _t();
  function u(D) {
    if (!o.value || !i.value) return;
    const M = cu(D, o.value.$el, e.direction), T = cu(D, i.value.$el, e.direction), F = Math.abs(M), z = Math.abs(T);
    return F < z || F === z && M < 0 ? o.value.$el : i.value.$el;
  }
  const c = $y(e), d = Ce(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((M) => c.roundValue(M)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: S, min: m, mousePressed: y, onSliderMousedown: h, onSliderTouchstart: w, position: I, trackContainerRef: V, disabled: x, readonly: g } = Fy({ props: e, steps: c, onSliderStart: () => {
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
      const T = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [M, d.value[1]] : [d.value[0], M];
      !e.strict && T[0] < T[1] && (d.value = T);
    }
    a("end", d.value);
  }, onSliderMove: (D) => {
    var _a3, _b2, _c2, _d2, _e2;
    let { value: M } = D;
    const [T, F] = d.value;
    if (x.value || g.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && T === F && T !== m.value && (f.value = M > T ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e2 = o.value) == null ? void 0 : _e2.$el) ? d.value = [Math.min(M, F), F] : d.value = [T, Math.max(T, M)];
  }, getActiveThumb: u }), { isFocused: C, focus: k, blur: A } = pa(e), P = _(() => I(d.value[0])), E = _(() => I(d.value[1]));
  return ne(() => {
    const D = Ot.filterProps(e), [M, T] = qn(l), F = !!(e.label || n.label || n.prepend);
    return b(Ot, Y({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": y.value, "v-slider--disabled": x.value }, s.value, e.class], style: e.style, ref: r }, D, M, { focused: C.value }), { ...n, prepend: F ? (z) => {
      var _a3, _b2;
      return p(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, z)) ?? (e.label ? b(no, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, z)]);
    } : void 0, default: (z) => {
      var _a3, _b2;
      let { id: N, messagesId: X } = z;
      return p("div", { class: "v-slider__container", onMousedown: g.value ? void 0 : h, onTouchstartPassive: g.value ? void 0 : w }, [p("input", { id: `${N.value}_start`, name: e.name || N.value, disabled: x.value, readonly: g.value, tabindex: "-1", value: d.value[0] }, null), p("input", { id: `${N.value}_stop`, name: e.name || N.value, disabled: x.value, readonly: g.value, tabindex: "-1", value: d.value[1] }, null), b(Ly, { ref: V, start: P.value, stop: E.value }, { "tick-label": n["tick-label"] }), b(du, Y({ ref: o, "aria-describedby": X.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (Z) => d.value = [Z, d.value[1]], onFocus: (Z) => {
        var _a4, _b3, _c2, _d2;
        k(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && Z.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] }), b(du, Y({ ref: i, "aria-describedby": X.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (Z) => d.value = [d.value[0], Z], onFocus: (Z) => {
        var _a4, _b3, _c2, _d2;
        k(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, S.value !== m.value && d.value[0] === d.value[1] && d.value[0] === S.value && Z.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        A(), f.value = void 0;
      }, min: d.value[0], max: S.value, position: E.value, ripple: e.ripple }, T), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Pt({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), UT = H({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: _e, default: "$ratingEmpty" }, fullIcon: { type: _e, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...ke(), ...ht(), ...Jn(), ...De(), ...We() }, "VRating"), YT = ee()({ name: "VRating", props: UT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = Je(), { themeClasses: l } = Ke(e), o = K(), i = Ce(e, "modelValue"), r = _(() => Xe(parseFloat(i.value), 0, Number(e.length))), s = _(() => On(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = ue(-1), d = _(() => u.value.map((V) => {
    const x = e.hover && c.value > -1, g = r.value >= V, C = c.value >= V, A = (x ? C : g) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, E = g || C ? P : e.color;
    return { isFilled: g, isHovered: C, icon: A, color: E };
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
      i.value = g, Ae(() => S());
    }
    if (V.key === "ArrowLeft") {
      const g = Math.max(0, Number(i.value ?? 0) - x);
      i.value = g, Ae(() => S());
    }
  }
  const y = Mt(), h = _(() => e.name ?? `v-rating-${y}`);
  function w(V) {
    var _a3, _b2;
    let { value: x, index: g, showStar: C = true } = V;
    const { onMouseenter: k, onMouseleave: A, onClick: P } = f.value[g + 1], E = `${h.value}-${String(x).replace(".", "-")}`, D = g === v.value, M = { color: (_a3 = d.value[g]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[g]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return p(be, null, [p("label", { for: E, class: te({ "v-rating__item--half": e.halfIncrements && x % 1 > 0, "v-rating__item--full": e.halfIncrements && x % 1 === 0 }), onMouseenter: k, onMouseleave: A, onClick: P }, [p("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, x, e.length)]), C ? n.item ? n.item({ ...d.value[g], props: M, value: x, index: g, rating: r.value }) : b(Ne, Y({ "aria-label": a(e.itemAriaLabel, x, e.length) }, M), null) : void 0]), p("input", { class: "v-rating__hidden", name: h.value, id: E, type: "radio", value: x, checked: r.value === x, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? p("span", null, [V.label]) : p("span", null, [ut("\xA0")]);
  }
  return ne(() => {
    var _a3;
    const V = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return b(e.tag, { class: te(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: ge(e.style), ref: o }, { default: () => [b(w, { value: 0, index: -1, showStar: false }, null), s.value.map((x, g) => {
      var _a4, _b2;
      return p("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: x, index: g, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[g] }) : void 0, p("div", { class: "v-rating__item" }, [e.halfIncrements ? p(be, null, [b(w, { value: x - 0.5, index: g * 2 }, null), b(w, { value: x, index: g * 2 + 1 }, null)]) : b(w, { value: x, index: g }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: x, index: g, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[g] }) : void 0]);
    })] });
  }), {};
} }), GT = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function KT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return p("div", { class: te(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Sv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => Wr(t));
}
function Wr(e) {
  let t = [];
  if (!e) return t;
  const n = GT[e];
  if (e !== n) {
    if (e.includes(",")) return kv(e);
    if (e.includes("@")) return Sv(e);
    n.includes(",") ? t = kv(n) : n.includes("@") ? t = Sv(n) : n && t.push(Wr(n));
  }
  return [KT(e, t)];
}
function kv(e) {
  return e.replace(/\s/g, "").split(",").map(Wr);
}
const qT = H({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...kt(), ...xt(), ...We() }, "VSkeletonLoader"), XT = ee()({ name: "VSkeletonLoader", inheritAttrs: false, props: qT(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { dimensionStyles: i } = wt(e), { elevationClasses: r } = It(e), { themeClasses: s } = Ke(e), { t: u } = Je(), c = _(() => Wr(lt(e.type).join(",")));
  return ne(() => {
    var _a3;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? p("div", Y({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : p(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a)]);
  }), {};
} }), ZT = ee()({ name: "VSlideGroupItem", props: Sl(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, Sc);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function JT(e) {
  const t = ue(e());
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Ae(() => t.value = e());
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
const Bb = H({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...Zn({ location: "bottom" }), ...eo(), ...ot(), ...gn(), ...We(), ...Le(vi({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Cu = ee()({ name: "VSnackbar", props: Bb(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { positionClasses: l } = to(e), { scopeId: o } = kl(), { themeClasses: i } = Ke(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ba(e), { roundedClasses: c } = dt(e), d = JT(() => Number(e.timeout)), f = K(), v = K(), S = ue(false), m = ue(0), y = K(), h = He(No, void 0);
  $t(() => !!h, () => {
    const E = Wh();
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
    const D = Ju(v.value);
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
  function A() {
    S.value && g();
  }
  const P = _(() => e.location.split(" ").reduce((E, D) => (E[`v-snackbar--${D}`] = true, E), {}));
  return ne(() => {
    const E = Un.filterProps(e), D = !!(n.default || n.text || e.text);
    return b(Un, Y({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [y.value, e.style] }, E, { modelValue: a.value, "onUpdate:modelValue": (M) => a.value = M, contentProps: Y({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: x, onPointerleave: g }, E.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: k, onAfterLeave: A }, o), { default: () => {
      var _a3, _b2;
      return [ya(false, "v-snackbar"), e.timer && !S.value && p("div", { key: "timer", class: "v-snackbar__timer" }, [b(wr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && p("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && b(Me, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [p("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Pt({}, f);
} }), QT = H({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...Le(Bb(), ["modelValue"]) }, "VSnackbarQueue"), eD = ee()({ name: "VSnackbarQueue", props: QT(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), o = ue(false), i = ue(false), r = ue();
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
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Ae(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  ne(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...S } = Cu.filterProps(e);
    return p(be, null, [i.value && !!r.value && (a.default ? b(Me, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : b(Cu, Y(S, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a3;
      return (_a3 = a.text) == null ? void 0 : _a3.call(a, { item: r.value });
    } : void 0, actions: f ? () => p(be, null, [a.actions ? b(Me, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : b(Ne, Y(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), $b = H({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), Fb = H({ autoLineWidth: Boolean, ...$b() }, "VBarline"), wv = ee()({ name: "VBarline", props: Fb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `barline-${a}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((y) => pt(y, e.itemValue, y)));
  function d(y, h) {
    const { minX: w, maxX: I, minY: V, maxY: x } = h, g = y.length;
    let C = e.max != null ? Number(e.max) : Math.max(...y), k = e.min != null ? Number(e.min) : Math.min(...y);
    k > 0 && e.min == null && (k = 0), C < 0 && e.max == null && (C = 0);
    const A = I / (g === 1 ? 2 : g), P = (x - V) / (C - k || 1), E = x - Math.abs(k * P);
    return y.map((D, M) => {
      const T = Math.abs(P * D);
      return { x: w + M * A, y: E - T + +(D < 0) * T, height: T, value: D };
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
    return p("svg", { display: "block" }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, w) => p("stop", { offset: w / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), p("clipPath", { id: `${l.value}-clip` }, [v.value.map((h) => p("rect", { x: h.x + S.value, y: h.y, width: r.value, height: h.height, rx: m.value, ry: m.value }, [e.autoDraw && !Wn() && p(be, null, [p("animate", { attributeName: "y", from: h.y + h.height, to: h.y, dur: `${o.value}ms`, fill: "freeze" }, null), p("animate", { attributeName: "height", from: "0", to: h.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((h, w) => {
      var _a3;
      return p("text", { x: h.x + S.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: w, value: h.value })) ?? h.value]);
    })]), p("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [p("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function tD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && nD(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(xv(u, i), xv(s, i)), v = d / 2 < t ? d / 2 : t, S = Cv(u, i, v), m = Cv(s, i, v);
    return `L${S.x} ${S.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Vi(e) {
  return parseInt(e, 10);
}
function nD(e, t, n) {
  return Vi(e.x + n.x) === Vi(2 * t.x) && Vi(e.y + n.y) === Vi(2 * t.y);
}
function xv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Cv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const Lb = H({ fill: Boolean, ...$b() }, "VTrendline"), _v = ee()({ name: "VTrendline", props: Lb(), setup(e, t) {
  let { slots: n } = t;
  const a = Mt(), l = _(() => e.id || `trendline-${a}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = K(0), r = K(null);
  function s(y, h) {
    const { minX: w, maxX: I, minY: V, maxY: x } = h;
    y.length === 1 && (y = [y[0], y[0]]);
    const g = y.length, C = e.max != null ? Number(e.max) : Math.max(...y), k = e.min != null ? Number(e.min) : Math.min(...y), A = (I - w) / (g - 1), P = (x - V) / (C - k || 1);
    return y.map((E, D) => ({ x: w + D * A, y: x - (E - k) * P, value: E }));
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
    if (await Ae(), !e.autoDraw || !r.value || Wn()) return;
    const y = r.value, h = y.getTotalLength();
    e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${h}`, y.style.strokeDashoffset = `${h}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), i.value = h;
  }, { immediate: true });
  function m(y) {
    const h = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return tD(s(v.value, f.value), h, y, parseInt(e.height, 10));
  }
  ne(() => {
    var _a3;
    const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return p("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [p("defs", null, [p("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [y.map((h, w) => p("stop", { offset: w / Math.max(y.length - 1, 1), "stop-color": h || "currentColor" }, null))])]), u.value && p("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [S.value.map((h, w) => {
      var _a4;
      return p("text", { x: h.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: w, value: h.value })) ?? h.value]);
    })]), p("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && p("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), aD = H({ type: { type: String, default: "trend" }, ...Fb(), ...Lb() }, "VSparkline"), lD = ee()({ name: "VSparkline", props: aD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  ne(() => {
    const r = e.type === "trend" ? _v : wv, s = e.type === "trend" ? _v.filterProps(e) : wv.filterProps(e);
    return b(r, Y({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), oD = H({ ...ke(), ...Kg({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), iD = ee()({ name: "VSpeedDial", props: oD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = K(), o = _(() => {
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
} }), id = Symbol.for("vuetify:v-stepper"), Rb = H({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), Ob = ee()({ name: "VStepperActions", props: Rb(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
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
} }), Nb = ha("v-stepper-header"), rD = H({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: _e, default: "$complete" }, editable: Boolean, editIcon: { type: _e, default: "$edit" }, error: Boolean, errorIcon: { type: _e, default: "$error" }, icon: _e, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), sD = H({ ...rD(), ...Sl() }, "VStepperItem"), Hb = ee()({ name: "VStepperItem", directives: { vRipple: Ft }, props: sD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ma(e, id, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return ne(() => {
    var _a3, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), S = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return nt(p("button", { class: te(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && ya(true, "v-stepper-item"), b(vn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? b(Ge, { icon: c.value }, null) : l.value)];
    } }), p("div", { class: "v-stepper-item__content" }, [v && p("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), S && p("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Ft, e.editable && e.ripple, null]]);
  }), {};
} }), uD = H({ ...Le(Dr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), zb = ee()({ name: "VStepperWindow", props: uD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(id, null), l = Ce(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ne(() => {
    const i = sl.filterProps(e);
    return b(sl, Y({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), cD = H({ ...Er() }, "VStepperWindowItem"), Wb = ee()({ name: "VStepperWindowItem", props: cD(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = ul.filterProps(e);
    return b(ul, Y({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), dD = H({ altLabels: Boolean, bgColor: String, completeIcon: _e, editIcon: _e, editable: Boolean, errorIcon: _e, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...hl() }, "Stepper"), fD = H({ ...dD(), ...pl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...Ec(), ...Jt(Rb(), ["prevText", "nextText"]) }, "VStepper"), vD = ee()({ name: "VStepper", props: fD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Na(e, id), { displayClasses: r, mobile: s } = nn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: S, nextText: m } = Zl(e), y = _(() => e.items.map((I, V) => {
    const x = pt(I, e.itemTitle, I), g = pt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : pt(I, e.itemProps), k = { title: x, value: g, ...C };
    return { title: k.title, value: k.value, props: k, raw: I };
  })), h = _(() => a.value.findIndex((I) => i.value.includes(I.id))), w = _(() => e.disabled ? e.disabled : h.value === 0 ? "prev" : h.value === a.value.length - 1 ? "next" : false);
  return mt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: S, nextText: m }, VStepperActions: { color: f, disabled: w, prevText: S, nextText: m } }), ne(() => {
    const I = Fa.filterProps(e), V = !!(n.header || e.items.length), x = e.items.length > 0, g = !e.hideActions && !!(x || n.actions);
    return b(Fa, Y(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [V && b(Nb, { key: "stepper-header" }, { default: () => [y.value.map((C, k) => {
        let { raw: A, ...P } = C;
        return p(be, null, [!!k && b(dn, null, null), b(Hb, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), x && b(zb, { key: "stepper-window" }, { default: () => [y.value.map((C) => b(Wb, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: l }), g && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? b(Ob, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), mD = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Sa(), ..._r() }, "VSwitch"), hD = ee()({ name: "VSwitch", inheritAttrs: false, props: mD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "indeterminate"), o = Ce(e, "modelValue"), { loaderClasses: i } = ri(e), { isFocused: r, focus: s, blur: u } = pa(e), c = K(), d = K(), f = Zu && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), S = Mt(), m = B(() => e.id || `switch-${S}`);
  function y() {
    l.value && (l.value = false);
  }
  function h(w) {
    var _a3, _b2;
    w.stopPropagation(), w.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return ne(() => {
    const [w, I] = qn(n), V = Ot.filterProps(e), x = $a.filterProps(e);
    return b(Ot, Y({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, w, V, { modelValue: o.value, "onUpdate:modelValue": (g) => o.value = g, id: m.value, focused: r.value, style: e.style }), { ...a, default: (g) => {
      let { id: C, messagesId: k, isDisabled: A, isReadonly: P, isValid: E } = g;
      const D = { model: o, isValid: E };
      return b($a, Y({ ref: c }, x, { modelValue: o.value, "onUpdate:modelValue": [(M) => o.value = M, y], id: C.value, "aria-describedby": k.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: A.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (M) => {
        let { backgroundColorClasses: T, backgroundColorStyles: F } = M;
        return p("div", { class: te(["v-switch__track", f ? void 0 : T.value]), style: ge(F.value), onClick: h }, [a["track-true"] && p("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && p("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (M) => {
        let { inputNode: T, icon: F, backgroundColorClasses: z, backgroundColorStyles: N } = M;
        return p(be, null, [T, p("div", { class: te(["v-switch__thumb", { "v-switch__thumb--filled": F || e.loading }, e.inset || f ? void 0 : z.value]), style: ge(e.inset ? void 0 : N.value) }, [a.thumb ? b(Me, { defaults: { VIcon: { icon: F, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: F })] }) : b(mc, null, { default: () => [e.loading ? b(si, { name: "v-switch", active: true, color: E.value === false ? void 0 : v.value }, { default: (X) => a.loader ? a.loader(X) : b(Ba, { active: X.isActive, color: X.color, indeterminate: true, size: "16", width: "2" }, null) }) : F && b(Ge, { key: String(F), icon: F, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Pt({}, d);
} }), gD = H({ color: String, height: [Number, String], window: Boolean, ...ke(), ...xt(), ...gl(), ...ot(), ...De(), ...We() }, "VSystemBar"), yD = ee()({ name: "VSystemBar", props: gD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { backgroundColorClasses: l, backgroundColorStyles: o } = qe(() => e.color), { elevationClasses: i } = It(e), { roundedClasses: r } = dt(e), { ssrBootStyles: s } = bl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = yl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: ue("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: B(() => e.absolute) });
  return ne(() => b(e.tag, { class: te(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: ge([o.value, c.value, s.value, e.style]) }, n)), {};
} }), rd = Symbol.for("vuetify:v-tabs"), jb = H({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...Le(Cr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), Ub = ee()({ name: "VTab", props: jb(), setup(e, t) {
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
    const w = h.getBoundingClientRect(), I = y.getBoundingClientRect(), V = c.value ? "x" : "y", x = c.value ? "X" : "Y", g = c.value ? "right" : "bottom", C = c.value ? "width" : "height", k = w[V], A = I[V], P = k > A ? w[g] - I[g] : w[V] - I[V], E = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", M = (Math.abs(P) + (Math.sign(P) < 0 ? w[C] : I[C])) / Math.max(w[C], I[C]) || 0, T = w[C] / I[C] || 0, F = 1.5;
    return { transform: [`translate${x}(${P}px) scale${x}(${T})`, `translate${x}(${P / F}px) scale${x}(${(M - 1) / F + 1})`, "none"], transformOrigin: Array(3).fill(E) };
  }
  function m(y) {
    var _a3, _b2;
    let { value: h } = y;
    if (h) {
      const w = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!w || !I) return;
      const V = getComputedStyle(w).backgroundColor, x = { fade: f, grow: v, shift: S }[e.sliderTransition ?? "shift"] ?? S, g = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      aa(I, { backgroundColor: [V, V], ...x(I, w) }, { duration: g, easing: Fo });
    }
  }
  return ne(() => {
    const y = Ne.filterProps(e);
    return b(Ne, Y({ symbol: rd, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, y, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return p(be, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && p("div", { ref: u, class: te(["v-tab__slider", e.inset ? i.value : l.value]), style: ge([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Pt({}, s);
} }), bD = H({ ...Le(Dr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Yb = ee()({ name: "VTabsWindow", props: bD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = He(rd, null), l = Ce(e, "modelValue"), o = _({ get() {
    var _a3;
    return l.value != null || !a ? l.value : (_a3 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    l.value = i;
  } });
  return ne(() => {
    const i = sl.filterProps(e);
    return b(sl, Y({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), pD = H({ ...Er() }, "VTabsWindowItem"), Gb = ee()({ name: "VTabsWindowItem", props: pD(), setup(e, t) {
  let { slots: n } = t;
  return ne(() => {
    const a = ul.filterProps(e);
    return b(ul, Y({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function SD(e) {
  return e ? e.map((t) => il(t) ? t : { text: t, value: t }) : [];
}
const kD = H({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...Jt(jb(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...kc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...ht(), ...De() }, "VTabs"), wD = ee()({ name: "VTabs", props: kD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = _(() => SD(e.items)), { densityClasses: i } = Lt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = qe(() => e.bgColor), { scopeId: u } = kl();
  return mt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), ne(() => {
    const c = Uo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return p(be, null, [b(Uo, Y(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ve(e.height), "--v-tabs-inset-padding": e.inset ? ve(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ve(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: rd }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = a.tab) == null ? void 0 : _a3.call(a, { item: f })) ?? b(Ub, Y(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = a[`tab.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && b(Yb, Y({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = a.item) == null ? void 0 : _a4.call(a, { item: f })) ?? b(Gb, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = a[`item.${f.value}`]) == null ? void 0 : _a5.call(a, { item: f });
        } });
      }), (_a3 = a.window) == null ? void 0 : _a3.call(a)];
    } })]);
  }), {};
} }), xD = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...qg(), ...Le(Sa(), ["direction"]), ...mi() }, "VTextarea"), CD = ee()({ name: "VTextarea", directives: { vIntersect: Tn }, inheritAttrs: false, props: xD(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue"), { isFocused: i, focus: r, blur: s } = pa(e), { onIntersect: u } = Xg(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = K(), v = K(), S = ue(""), m = K(), y = K(0), { platform: h } = nn(), w = Mc(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _a3;
    w.isSuppressing.value && w.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function x(T) {
    V(), a("click:control", T);
  }
  function g(T) {
    a("mousedown:control", T);
  }
  function C(T) {
    T.stopPropagation(), V(), Ae(() => {
      o.value = "", ai(e["onClick:clear"], T);
    });
  }
  function k(T) {
    var _a3;
    const F = T.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = F.value;
      return;
    }
    const z = F.value, N = F.selectionStart, X = F.selectionEnd;
    o.value = z, Ae(() => {
      let Z = 0;
      z.trimStart().length === F.value.length && (Z = z.length - F.value.length), N != null && (F.selectionStart = N - Z), X != null && (F.selectionEnd = X - Z);
    });
  }
  const A = K(), P = K(Number(e.rows)), E = _(() => ["plain", "underlined"].includes(e.variant));
  ct(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Ae(() => {
      if (!m.value) return;
      if (h.value.firefox) {
        y.value = 12;
        return;
      }
      const { offsetWidth: T, clientWidth: F } = m.value;
      y.value = Math.max(0, T - F);
    }), e.autoGrow && Ae(() => {
      if (!A.value || !v.value) return;
      const T = getComputedStyle(A.value), F = getComputedStyle(v.value.$el), z = parseFloat(T.getPropertyValue("--v-field-padding-top")) + parseFloat(T.getPropertyValue("--v-input-padding-top")) + parseFloat(T.getPropertyValue("--v-field-padding-bottom")), N = A.value.scrollHeight, X = parseFloat(T.lineHeight), Z = Math.max(parseFloat(e.rows) * X + z, parseFloat(F.getPropertyValue("--v-input-control-height"))), L = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * X + z || 1 / 0, G = Xe(N ?? 0, Z, L);
      P.value = Math.floor((G - z) / X), S.value = ve(G);
    });
  }
  Ct(D), ce(o, D), ce(() => e.rows, D), ce(() => e.maxHeight, D), ce(() => e.maxRows, D), ce(() => e.density, D), ce(P, (T) => {
    a("update:rows", T);
  });
  let M;
  return ce(A, (T) => {
    T ? (M = new ResizeObserver(D), M.observe(A.value)) : M == null ? void 0 : M.disconnect();
  }), Nt(() => {
    M == null ? void 0 : M.disconnect();
  }), ne(() => {
    const T = !!(l.counter || e.counter || e.counterValue), F = !!(T || l.details), [z, N] = qn(n), { modelValue: X, ...Z } = Ot.filterProps(e), L = { ...La.filterProps(e), "onClick:clear": C };
    return b(Ot, Y({ ref: f, modelValue: o.value, "onUpdate:modelValue": (G) => o.value = G, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ve(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ve(y.value) }, e.style] }, z, Z, { centerAffix: P.value === 1 && !E.value, focused: i.value }), { ...l, default: (G) => {
      let { id: W, isDisabled: O, isDirty: j, isReadonly: se, isValid: Se, hasDetails: ae } = G;
      return b(La, Y({ ref: v, style: { "--v-textarea-control-height": S.value }, onClick: x, onMousedown: g, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, L, { id: W.value, active: I.value || j.value, labelId: `${W.value}-label`, centerAffix: P.value === 1 && !E.value, dirty: j.value || e.dirty, disabled: O.value, focused: i.value, details: ae.value, error: Se.value === false }), { ...l, default: (me) => {
        let { props: { class: ie, ...he }, controlRef: fe } = me;
        return p(be, null, [e.prefix && p("span", { class: "v-text-field__prefix" }, [e.prefix]), nt(p("textarea", Y({ ref: ($) => m.value = fe.value = $, class: ie, value: o.value, onInput: k, autofocus: e.autofocus, readonly: se.value, disabled: O.value, placeholder: e.placeholder, rows: e.rows, name: w.fieldName.value, autocomplete: w.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${W.value}-label` }, he, N), null), [[Tn, { handler: u }, null, { once: true }]]), e.autoGrow && nt(p("textarea", { class: te([ie, "v-textarea__sizer"]), id: `${he.id}-sizer`, "onUpdate:modelValue": ($) => o.value = $, ref: A, readonly: true, "aria-hidden": "true" }, null), [[kk, o.value]]), e.suffix && p("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: F ? (G) => {
      var _a3;
      return p(be, null, [(_a3 = l.details) == null ? void 0 : _a3.call(l, G), T && p(be, null, [p("span", null, null), b(Vr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Pt({}, f, v, m);
} }), _D = H({ withBackground: Boolean, ...ke(), ...We(), ...De() }, "VThemeProvider"), VD = ee()({ name: "VThemeProvider", props: _D(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e);
  return () => {
    var _a3;
    return e.withBackground ? b(e.tag, { class: te(["v-theme-provider", a.value, e.class]), style: ge(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), ID = H({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: _e, iconColor: String, lineColor: String, ...ke(), ...ot(), ...Jn(), ...xt() }, "VTimelineDivider"), PD = ee()({ name: "VTimelineDivider", props: ID(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = Ql(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = qe(() => e.dotColor), { roundedClasses: r } = dt(e, "v-timeline-divider__dot"), { elevationClasses: s } = It(e), { backgroundColorClasses: u, backgroundColorStyles: c } = qe(() => e.lineColor);
  return ne(() => p("div", { class: te(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: ge(e.style) }, [p("div", { class: te(["v-timeline-divider__before", u.value]), style: ge(c.value) }, null), !e.hideDot && p("div", { key: "dot", class: te(["v-timeline-divider__dot", s.value, r.value, a.value]), style: ge(l.value) }, [p("div", { class: te(["v-timeline-divider__inner-dot", i.value, r.value]), style: ge(o.value) }, [n.default ? b(Me, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : b(Ge, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), p("div", { class: te(["v-timeline-divider__after", u.value]), style: ge(c.value) }, null)])), {};
} }), Kb = H({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: _e, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...ke(), ...kt(), ...xt(), ...ot(), ...Jn(), ...De() }, "VTimelineItem"), AD = ee()({ name: "VTimelineItem", props: Kb(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = wt(e), l = ue(0), o = K();
  return ce(o, (i) => {
    var _a3;
    i && (l.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), ne(() => {
    var _a3, _b2;
    return p("div", { class: te(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: ge([{ "--v-timeline-dot-size": ve(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ve(e.lineInset)})` : ve(0) }, e.style]) }, [p("div", { class: "v-timeline-item__body", style: ge(a.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), b(PD, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && p("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), TD = H({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...Jt(Kb({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...ke(), ...ht(), ...De(), ...We() }, "VTimeline"), DD = ee()({ name: "VTimeline", props: TD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Ke(e), { densityClasses: l } = Lt(e), { rtlClasses: o } = _t();
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
  return ne(() => b(e.tag, { class: te(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, a.value, l.value, i.value, o.value, e.class]), style: ge([{ "--v-timeline-line-thickness": ve(e.lineThickness) }, e.style]) }, n)), {};
} }), ED = H({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), _u = ee()({ name: "VTimePickerClock", props: ED(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = K(null), l = K(null), o = K(void 0), i = K(false), r = K(null), s = K(null), u = fh((L) => n("change", L), 750), { textColorClasses: c, textColorStyles: d } = Et(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = qe(() => e.color), S = _(() => e.max - e.min + 1), m = _(() => e.double ? S.value / 2 : S.value), y = _(() => 360 / m.value), h = _(() => y.value * Math.PI / 180), w = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const L = [];
    for (let G = e.min; G <= e.max; G = G + e.step) L.push(G);
    return L;
  });
  ce(() => e.modelValue, (L) => {
    o.value = L;
  });
  function x(L) {
    o.value !== L && (o.value = L), n("input", L);
  }
  function g(L) {
    return !e.allowedValues || e.allowedValues(L);
  }
  function C(L) {
    if (!e.scrollable || e.disabled) return;
    L.preventDefault();
    const G = Math.sign(-L.deltaY || 1);
    let W = w.value;
    do
      W = W + G, W = (W - e.min + S.value) % S.value + e.min;
    while (!g(W) && W !== w.value);
    W !== e.displayedValue && x(W), u(W);
  }
  function k(L) {
    return e.double && L - e.min >= m.value;
  }
  function A(L) {
    return k(L) ? I.value : 1;
  }
  function P(L) {
    const G = e.rotate * Math.PI / 180;
    return { x: Math.sin((L - e.min) * h.value + G) * A(L), y: -Math.cos((L - e.min) * h.value + G) * A(L) };
  }
  function E(L, G) {
    const W = (Math.round(L / y.value) + (G ? m.value : 0)) % S.value + e.min;
    return L < 360 - y.value / 2 ? W : G ? e.max - m.value + 1 : e.min;
  }
  function D(L) {
    const { x: G, y: W } = P(L);
    return { left: `${Math.round(50 + G * 50)}%`, top: `${Math.round(50 + W * 50)}%` };
  }
  function M(L, G) {
    const W = G.x - L.x, O = G.y - L.y;
    return Math.sqrt(W * W + O * O);
  }
  function T(L, G) {
    const W = 2 * Math.atan2(G.y - L.y - M(L, G), G.x - L.x);
    return Math.abs(W * 180 / Math.PI);
  }
  function F(L) {
    r.value === null && (r.value = L), s.value = L, x(L);
  }
  function z(L) {
    var _a3, _b2;
    if (L.preventDefault(), !i.value && L.type !== "click" || !a.value) return;
    const { width: G, top: W, left: O } = (_a3 = a.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: j } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: se, clientY: Se } = "touches" in L ? L.touches[0] : L, ae = { x: G / 2, y: -G / 2 }, me = { x: se - O, y: W - Se }, ie = Math.round(T(ae, me) - e.rotate + 360) % 360, he = e.double && M(ae, me) < (j + j * I.value) / 4, fe = Math.ceil(15 / y.value);
    let $;
    for (let R = 0; R < fe; R++) if ($ = E(ie + R * y.value, he), g($) || ($ = E(ie - R * y.value, he), g($))) return F($);
  }
  function N(L) {
    e.disabled || (L.preventDefault(), window.addEventListener("mousemove", z), window.addEventListener("touchmove", z), window.addEventListener("mouseup", X), window.addEventListener("touchend", X), r.value = null, s.value = null, i.value = true, z(L));
  }
  function X(L) {
    L.stopPropagation(), Z(), i.value = false, s.value !== null && g(s.value) && n("change", s.value);
  }
  function Z() {
    window.removeEventListener("mousemove", z), window.removeEventListener("touchmove", z), window.removeEventListener("mouseup", X), window.removeEventListener("touchend", X);
  }
  bt(Z), ne(() => p("div", { class: te([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: N, onTouchstart: N, onWheel: C, ref: a }, [p("div", { class: "v-time-picker-clock__inner", ref: l }, [p("div", { class: te([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": k(e.modelValue) }, c.value]), style: ge([{ transform: `rotate(${e.rotate + y.value * (w.value - e.min)}deg) scaleY(${A(w.value)})` }, d.value]) }, null), V.value.map((L) => {
    const G = L === w.value;
    return p("div", { class: te([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": G, "v-time-picker-clock__item--disabled": e.disabled || !g(L) }, G && f.value]), style: ge([D(L), G && v.value]) }, [p("span", null, [e.format(L)])]);
  })])]));
} }), MD = H({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), ks = ee()({ name: "VTimePickerField", props: MD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = Et(() => e.color), o = K(), i = ue(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return ne(() => b(Yn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: te(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: ge(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Pt({}, o);
} });
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function qb(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Vo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function co(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function BD(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function $D(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Xb = H({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function Zb(e) {
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
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => BD(v, r).value : (v) => $D(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const FD = H({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Xb() }, "VTimePickerControls"), Vu = ee()({ name: "VTimePickerControls", props: FD(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = Je(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = Zb(e), s = _(() => e.hour !== null ? e.ampm ? Vo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
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
    const T = Number(M);
    return e.ampm ? ln(qb(T)) : ln(T);
  }, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T === null ? null : e.ampm ? Vo(T, e.period ?? "am") : Xe(T, 0, 23);
  } }, S = Ce(e, "hour", void 0, v.in, v.out), m = { in: (M) => M != null && !isNaN(Number(M)) ? ln(`${M}`) : null, out: (M) => {
    if (isNaN(Number(M)) || M == null || M === "") return null;
    const T = typeof M == "string" ? co(M) : Number(M);
    return T !== null ? Xe(T, 0, 59) : null;
  } }, y = Ce(e, "minute", void 0, m.in, m.out), h = Ce(e, "second", void 0, m.in, m.out);
  function w(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = e.period === "am", F = e.ampm ? Vo(Number(S.value ?? 0), T ? "am" : "pm") : Number(S.value ?? 0), z = r("hour", F, M.key === "ArrowUp"), N = T && z >= 12 || !T && z < 12;
    e.ampm && N ? (n("update:period", e.period === "am" ? "pm" : "am"), Ae(() => S.value = ln(z))) : S.value = ln(z);
  }
  function I(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(y.value ?? 0), F = r("minute", T, M.key === "ArrowUp", s.value);
    y.value = ln(F);
  }
  function V(M) {
    if (!["ArrowUp", "ArrowDown"].includes(M.key)) return;
    M.preventDefault(), M.stopPropagation();
    const T = Number(h.value ?? 0), F = r("second", T, M.key === "ArrowUp", s.value, u.value);
    h.value = ln(F);
  }
  function x(M, T, F) {
    return (z) => {
      if (!z.data) return;
      const N = z.target, { value: X, selectionStart: Z, selectionEnd: L } = N ?? {};
      if (co(z.data) === null) {
        z.preventDefault();
        return;
      }
      const G = X ? X.slice(0, Z) + z.data + X.slice(L) : z.data;
      if (G.length > 2) {
        if (Z === L && L === 0 && z.data.trim().startsWith("0")) {
          z.preventDefault(), N.value = G.trim().substring(0, 2), F(N.value), z.data.trim().length === 1 && N.setSelectionRange(1, 1);
          return;
        }
        if (Z === L && L === 1 && X.startsWith("0")) {
          z.preventDefault(), N.value = G.trim().substring(0, 2), F(N.value);
          return;
        }
        const O = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (co(G) > O) {
          z.preventDefault(), N.value = ln(String(co(z.data)).substring(0, 2)), F(N.value);
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
    Ae(() => S.value = ln(T));
  }
  const C = K(), k = K(), A = K();
  ce(() => e.viewMode, (M, T) => {
    switch (T) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        k.value.blur();
        break;
      case "second":
        A.value.blur();
        break;
    }
  });
  const P = x(v.out, (M) => v.in(M) === S.value, (M) => S.value = M), E = x(m.out, (M) => m.in(M) === y.value, (M) => y.value = M), D = x(m.out, (M) => m.in(M) === h.value, (M) => h.value = M);
  return ne(() => p("div", { class: "v-time-picker-controls" }, [p("div", { class: te({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [b(ks, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: S.value, "onUpdate:modelValue": (M) => S.value = M, onKeydown: w, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), p("span", { class: "v-time-picker-controls__time__separator" }, [ut(":")]), b(ks, { ref: k, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: y.value, "onUpdate:modelValue": (M) => y.value = M, onKeydown: I, onBeforeinput: E, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && p("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [ut(":")]), e.useSeconds && p(be, null, [b(ks, { key: "secondsVal", ref: A, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (M) => h.value = M, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && p("div", { class: "v-time-picker-controls__ampm" }, [b(Ne, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: te({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? g("am") : null }, null), b(Ne, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: te({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? g("pm") : null }, null)])])])), {};
} }), LD = H({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Xb(), ...Le(Mr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...ht() }, "VTimePicker"), RD = ee()({ name: "VTimePicker", props: LD(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = Je(), { densityClasses: o } = Lt(e), i = K(null), r = K(null), s = K(null), u = K(null), c = K(null), d = K(null), f = Ce(e, "period", "am"), v = Ce(e, "viewMode", "hour"), S = K(null), m = K(null), y = _(() => e.format === "ampm"), { isAllowedHour: h, isAllowedMinute: w, isAllowedSecond: I } = Zb(e), V = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
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
      const [E, , D, , M, T] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = T ? Vo(parseInt(E, 10), T) : parseInt(E, 10), r.value = parseInt(D, 10), s.value = parseInt(M || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function k(P) {
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
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || g() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), E && x());
  }
  ne(() => {
    const P = Le(Xl.filterProps(e), ["hideHeader"]), E = Vu.filterProps(e), D = _u.filterProps(Le(e, ["format", "modelValue", "min", "max"])), M = v.value === "hour" ? h.value : v.value === "minute" ? (T) => w.value(i.value, T) : (T) => I.value(i.value, r.value, T);
    return b(Xl, Y(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? p("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => b(Vu, Y(E, { ampm: y.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (T) => i.value = T, "onUpdate:minute": (T) => r.value = T, "onUpdate:second": (T) => s.value = T, "onUpdate:period": (T) => f.value = T, "onUpdate:viewMode": (T) => v.value = T, ref: S }), null), default: () => b(_u, Y(D, { allowedValues: M, double: v.value === "hour" && !y.value, format: v.value === "hour" ? y.value ? qb : (T) => T : (T) => ln(T, 2), max: v.value === "hour" ? y.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && y.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: A, onInput: k, ref: m }), null), actions: a.actions });
  });
} }), OD = H({ ...ke(), ...gn({ variant: "text" }) }, "VToolbarItems"), ND = ee()({ name: "VToolbarItems", props: OD(), setup(e, t) {
  let { slots: n } = t;
  return mt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), ne(() => {
    var _a3;
    return p("div", { class: te(["v-toolbar-items", e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), HD = H({ id: String, interactive: Boolean, text: String, ...Le(vi({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Jb = ee()({ name: "VTooltip", props: HD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = kl(), o = Mt(), i = B(() => e.id || `v-tooltip-${o}`), r = K(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => Y({ "aria-describedby": i.value }, e.activatorProps));
  return ne(() => {
    const f = Un.filterProps(e);
    return b(Un, Y({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, S = new Array(v), m = 0; m < v; m++) S[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...S)) ?? e.text;
    } });
  }), Pt({}, r);
} }), zD = H({ ...Le(Ag({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Iu = ee()({ name: "VTreeviewGroup", props: zD(), setup(e, t) {
  let { slots: n } = t;
  const a = K(), l = _(() => {
    var _a3;
    return ((_a3 = a.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return ne(() => {
    const i = Yo.filterProps(e);
    return b(Yo, Y(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => p(be, null, [b(Me, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), Qb = Symbol.for("vuetify:v-treeview"), ep = H({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: _e, ...Eg({ slim: true }) }, "VTreeviewItem"), Pu = ee()({ name: "VTreeviewItem", props: ep(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = He(Qb, { visibleIds: K() }).visibleIds, o = K(), i = _(() => {
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
      return p(be, null, [e.indentLines && e.indentLines.length > 0 ? p("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => p("div", { class: te(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && b(Vc, { start: true }, { default: () => [e.toggleIcon ? p(be, null, [n.toggle ? b(Me, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...S, loading: e.loading, props: { onClick: d } })] }) : b(Ne, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => b(Ba, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : p("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? b(Me, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, S)];
      } }) : p(be, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, S), e.prependAvatar && b(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && b(Ge, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Pt({}, o);
} }), tp = H({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: _e, default: "$checkboxIndeterminate" }, falseIcon: _e, trueIcon: _e, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...Jt(ep(), ["hideActions"]), ...ht() }, "VTreeviewChildren"), tr = ee()({ name: "VTreeviewChildren", props: tp(), setup(e, t) {
  let { slots: n } = t;
  const a = Tt(/* @__PURE__ */ new Set()), l = K([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
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
      const { children: d, props: f } = s, v = a.has(s.value), S = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, y = c.length - 1 === u, h = { index: u, depth: m, isFirst: u === 0, isLast: y, path: [...e.path, u], hideAction: e.hideActions }, w = s0({ depth: m, isLast: y, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...h, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return p(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && b(Vc, { start: true }, { default: () => [b(Dn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (k) => r(C.select, k), onClick: (k) => k.stopPropagation(), onKeydown: (k) => {
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
      } : void 0 }, V = Iu.filterProps(f), x = tr.filterProps({ ...e, ...h }), g = { hideActions: e.hideActions, indentLines: w.footer };
      return d ? b(Iu, Y(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: k, isOpen: A } = C;
        const P = { ...f, ...k, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: w.node, ariaExpanded: A, onToggleExpand: [() => i(s), k.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), k.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = l.value[u]) == null ? void 0 : _a5.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return ki(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => b(Pu, Y({ ref: (E) => l.value[u] = E }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), I));
      }, default: () => {
        var _a5;
        return p(be, null, [b(tr, Y(x, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: w.children, isLastGroup: S, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: g, item: s.raw, internalItem: s, loading: v })]);
      } }) : ki(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? ki(n.divider, { props: s.raw }, () => b(dn, s.props, null)) : s.type === "subheader" ? ki(n.subheader, { props: s.raw }, () => b(lo, s.props, null)) : b(Pu, Y(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: w.leaf, value: e.returnObject ? Pe(s.raw) : f.value }), I));
    }));
  };
} });
function np(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && np(n.children, t);
  return t;
}
const WD = H({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...wl({ filterKeys: ["title"] }), ...Le(tp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...Le(Rg({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), jD = ee()({ name: "VTreeview", props: WD(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = Je(), { items: o } = Lg(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = Ce(e, "activated"), c = Ce(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = K(), v = _(() => e.openAll ? I(o.value) : e.opened), S = _(() => np(o.value)), m = B(() => e.search), { filteredItems: y } = xl(e, S, m), h = _(() => {
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
  return it(Qb, { visibleIds: h }), mt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), ne(() => {
    const V = Kl.filterProps(e), x = tr.filterProps(e), g = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return b(Kl, Y({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = h.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? b(kn, { key: "no-data", title: l(e.noDataText) }, null)), b(tr, Y(x, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: g }), n)];
    } });
  }), {};
} }), UD = ee()({ name: "VValidation", props: yg(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = bg(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, a);
  };
} }), YD = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: X1, VAlertTitle: ug, VApp: QC, VAppBar: S1, VAppBarNavIcon: Y1, VAppBarTitle: G1, VAutocomplete: bV, VAvatar: vn, VBadge: ey, VBanner: wV, VBannerActions: ty, VBannerText: ny, VBottomNavigation: CV, VBottomSheet: VV, VBreadcrumbs: TV, VBreadcrumbsDivider: ly, VBreadcrumbsItem: oy, VBtn: Ne, VBtnGroup: Xs, VBtnToggle: V1, VCalendar: PI, VCard: BI, VCardActions: Vy, VCardItem: Ay, VCardSubtitle: Iy, VCardText: Ty, VCardTitle: Py, VCarousel: WI, VCarouselItem: UI, VCheckbox: r_, VCheckboxBtn: Dn, VChip: fa, VChipGroup: f_, VClassIcon: rc, VCode: YI, VCol: kA, VColorPicker: BP, VCombobox: FP, VComponentIcon: js, VConfirmEdit: RP, VContainer: yA, VCounter: Vr, VDataIterator: ZP, VDataTable: dA, VDataTableFooter: Ko, VDataTableHeaders: cl, VDataTableRow: td, VDataTableRows: dl, VDataTableServer: hA, VDataTableVirtual: vA, VDatePicker: MA, VDatePickerControls: gu, VDatePickerHeader: yu, VDatePickerMonth: bu, VDatePickerMonths: pu, VDatePickerYears: Su, VDefaultsProvider: Me, VDialog: lu, VDialogBottomTransition: a1, VDialogTopTransition: l1, VDialogTransition: Sr, VDivider: dn, VEmptyState: $A, VExpandBothTransition: f1, VExpandTransition: kr, VExpandXTransition: gc, VExpansionPanel: FA, VExpansionPanelText: ku, VExpansionPanelTitle: wu, VExpansionPanels: OA, VFab: HA, VFabTransition: n1, VFadeTransition: Ho, VField: La, VFieldLabel: mo, VFileInput: GA, VFooter: qA, VForm: ZA, VHotkey: tT, VHover: aT, VIcon: Ge, VImg: da, VInfiniteScroll: oT, VInput: Ot, VItem: sT, VItemGroup: rT, VKbd: xu, VLabel: no, VLayout: cT, VLayoutItem: fT, VLazy: mT, VLigatureIcon: d0, VList: Kl, VListGroup: Yo, VListImg: B_, VListItem: kn, VListItemAction: Vc, VListItemMedia: L_, VListItemSubtitle: Tg, VListItemTitle: Dg, VListSubheader: lo, VLocaleProvider: gT, VMain: bT, VMenu: ql, VMessages: hg, VNavigationDrawer: IT, VNoSsr: PT, VNumberInput: MT, VOtpInput: $T, VOverlay: Un, VPagination: vu, VParallax: RT, VProgressCircular: Ba, VProgressLinear: wr, VRadio: NT, VRadioGroup: zT, VRangeSlider: jT, VRating: YT, VResponsive: Gs, VRow: PA, VScaleTransition: mc, VScrollXReverseTransition: i1, VScrollXTransition: o1, VScrollYReverseTransition: s1, VScrollYTransition: r1, VSelect: Oc, VSelectionControl: $a, VSelectionControlGroup: vg, VSheet: Fa, VSkeletonLoader: XT, VSlideGroup: Uo, VSlideGroupItem: ZT, VSlideXReverseTransition: c1, VSlideXTransition: u1, VSlideYReverseTransition: d1, VSlideYTransition: hc, VSlider: fu, VSnackbar: Cu, VSnackbarQueue: eD, VSpacer: hu, VSparkline: lD, VSpeedDial: iD, VStepper: vD, VStepperActions: Ob, VStepperHeader: Nb, VStepperItem: Hb, VStepperWindow: zb, VStepperWindowItem: Wb, VSvgIcon: ic, VSwitch: hD, VSystemBar: yD, VTab: Ub, VTable: fl, VTabs: wD, VTabsWindow: Yb, VTabsWindowItem: Gb, VTextField: Yn, VTextarea: CD, VThemeProvider: VD, VTimePicker: RD, VTimePickerClock: _u, VTimePickerControls: Vu, VTimeline: DD, VTimelineItem: AD, VToolbar: qs, VToolbarItems: ND, VToolbarTitle: dc, VTooltip: Jb, VTreeview: jD, VTreeviewGroup: Iu, VTreeviewItem: Pu, VValidation: UD, VVirtualScroll: Ir, VWindow: sl, VWindowItem: ul }, Symbol.toStringTag, { value: "Module" }));
function GD(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && ap(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function ap(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const KD = { mounted: GD, unmounted: ap };
function lp(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function op(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function qD(e, t) {
  t.value !== t.oldValue && (op(e, t), lp(e, t));
}
const XD = { mounted: lp, unmounted: op, updated: qD };
function ZD(e, t) {
  const n = typeof e == "string" ? Ye(e) : e, a = JD(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    Jm(null, l);
  } };
}
function JD(e, t) {
  return function(n, a, l) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a3 = a.value) == null ? void 0 : _a3.text) ?? a.value ?? (o == null ? void 0 : o.text), r = il(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = QD(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ma(e, Y(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), Jm(c, n);
  };
}
function QD(e, t) {
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
const eE = ZD(Jb, (e) => {
  var _a3;
  return { activator: (il(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), tE = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: au, Intersect: Tn, Mutate: KD, Resize: Go, Ripple: Ft, Scroll: XD, Tooltip: eE, Touch: er }, Symbol.toStringTag, { value: "Module" })), nE = Yh({ components: YD, directives: tE, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
_k(ZC).use(nE).mount("#app");
