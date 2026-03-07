var _a2;
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) l(a);
  new MutationObserver((a) => {
    for (const o of a) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
  }).observe(document, { childList: true, subtree: true });
  function n(a) {
    const o = {};
    return a.integrity && (o.integrity = a.integrity), a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? o.credentials = "include" : a.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function l(a) {
    if (a.ep) return;
    a.ep = true;
    const o = n(a);
    fetch(a.href, o);
  }
})();
/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const gt = {}, Ga = [], Kn = () => {
}, xm = () => false, wr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ec = (e) => e.startsWith("onUpdate:"), $t = Object.assign, tc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, eS = Object.prototype.hasOwnProperty, rt = (e, t) => eS.call(e, t), Oe = Array.isArray, Ya = (e) => vi(e) === "[object Map]", km = (e) => vi(e) === "[object Set]", tf = (e) => vi(e) === "[object Date]", We = (e) => typeof e == "function", xt = (e) => typeof e == "string", Xn = (e) => typeof e == "symbol", it = (e) => e !== null && typeof e == "object", wm = (e) => (it(e) || We(e)) && We(e.then) && We(e.catch), Cm = Object.prototype.toString, vi = (e) => Cm.call(e), tS = (e) => vi(e).slice(8, -1), _m = (e) => vi(e) === "[object Object]", Cr = (e) => xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mo = Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), _r = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, nS = /-\w/g, fn = _r((e) => e.replace(nS, (t) => t.slice(1).toUpperCase())), lS = /\B([A-Z])/g, ka = _r((e) => e.replace(lS, "-$1").toLowerCase()), el = _r((e) => e.charAt(0).toUpperCase() + e.slice(1)), ms = _r((e) => e ? `on${el(e)}` : ""), $l = (e, t) => !Object.is(e, t), Ui = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Vm = (e, t, n, l = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: l, value: n });
}, nc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, aS = (e) => {
  const t = xt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let nf;
const Vr = () => nf || (nf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ge(e) {
  if (Oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const l = e[n], a = xt(l) ? sS(l) : ge(l);
      if (a) for (const o in a) t[o] = a[o];
    }
    return t;
  } else if (xt(e) || it(e)) return e;
}
const oS = /;(?![^(]*\))/g, iS = /:([^]+)/, rS = /\/\*[^]*?\*\//g;
function sS(e) {
  const t = {};
  return e.replace(rS, "").split(oS).forEach((n) => {
    if (n) {
      const l = n.split(iS);
      l.length > 1 && (t[l[0].trim()] = l[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (xt(e)) t = e;
  else if (Oe(e)) for (let n = 0; n < e.length; n++) {
    const l = ne(e[n]);
    l && (t += l + " ");
  }
  else if (it(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function uS(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !xt(t) && (e.class = ne(t)), n && (e.style = ge(n)), e;
}
const cS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dS = Qu(cS);
function Im(e) {
  return !!e || e === "";
}
function fS(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let l = 0; n && l < e.length; l++) n = lc(e[l], t[l]);
  return n;
}
function lc(e, t) {
  if (e === t) return true;
  let n = tf(e), l = tf(t);
  if (n || l) return n && l ? e.getTime() === t.getTime() : false;
  if (n = Xn(e), l = Xn(t), n || l) return e === t;
  if (n = Oe(e), l = Oe(t), n || l) return n && l ? fS(e, t) : false;
  if (n = it(e), l = it(t), n || l) {
    if (!n || !l) return false;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !lc(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const Pm = (e) => !!(e && e.__v_isRef === true), Ee = (e) => xt(e) ? e : e == null ? "" : Oe(e) || it(e) && (e.toString === Cm || !We(e.toString)) ? Pm(e) ? Ee(e.value) : JSON.stringify(e, Tm, 2) : String(e), Tm = (e, t) => Pm(t) ? Tm(e, t.value) : Ya(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [l, a], o) => (n[gs(l, o) + " =>"] = a, n), {}) } : km(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => gs(n)) } : Xn(t) ? gs(t) : it(t) && !Oe(t) && !_m(t) ? String(t) : t, gs = (e, t = "") => {
  var n;
  return Xn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qt;
class Am {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = qt, !t && qt && (this.index = (qt.scopes || (qt.scopes = [])).push(this) - 1);
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
      const n = qt;
      try {
        return qt = this, t();
      } finally {
        qt = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = qt, qt = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (qt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, l;
      for (n = 0, l = this.effects.length; n < l; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, l = this.cleanups.length; n < l; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, l = this.scopes.length; n < l; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Za(e) {
  return new Am(e);
}
function Dm() {
  return qt;
}
function kt(e, t = false) {
  qt && qt.cleanups.push(e);
}
let bt;
const hs = /* @__PURE__ */ new WeakSet();
class Mm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qt && qt.active && qt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hs.has(this) && (hs.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bm(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, lf(this), $m(this);
    const t = bt, n = Mn;
    bt = this, Mn = true;
    try {
      return this.fn();
    } finally {
      Rm(this), bt = t, Mn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ic(t);
      this.deps = this.depsTail = void 0, lf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Us(this) && this.run();
  }
  get dirty() {
    return Us(this);
  }
}
let Em = 0, Eo, Bo;
function Bm(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Bo, Bo = e;
    return;
  }
  e.next = Eo, Eo = e;
}
function ac() {
  Em++;
}
function oc() {
  if (--Em > 0) return;
  if (Bo) {
    let t = Bo;
    for (Bo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Eo; ) {
    let t = Eo;
    for (Eo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (l) {
        e || (e = l);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function $m(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rm(e) {
  let t, n = e.depsTail, l = n;
  for (; l; ) {
    const a = l.prevDep;
    l.version === -1 ? (l === n && (n = a), ic(l), vS(l)) : t = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = a;
  }
  e.deps = t, e.depsTail = n;
}
function Us(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Fm(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Fm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wo) || (e.globalVersion = Wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Us(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = bt, l = Mn;
  bt = e, Mn = true;
  try {
    $m(e);
    const a = e.fn(e._value);
    (t.version === 0 || $l(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    bt = n, Mn = l, Rm(e), e.flags &= -3;
  }
}
function ic(e, t = false) {
  const { dep: n, prevSub: l, nextSub: a } = e;
  if (l && (l.nextSub = a, e.prevSub = void 0), a && (a.prevSub = l, e.nextSub = void 0), n.subs === e && (n.subs = l, !l && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) ic(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function vS(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Mn = true;
const Lm = [];
function vl() {
  Lm.push(Mn), Mn = false;
}
function ml() {
  const e = Lm.pop();
  Mn = e === void 0 ? true : e;
}
function lf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = bt;
    bt = void 0;
    try {
      t();
    } finally {
      bt = n;
    }
  }
}
let Wo = 0;
class mS {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rc {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!bt || !Mn || bt === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== bt) n = this.activeLink = new mS(bt, this), bt.deps ? (n.prevDep = bt.depsTail, bt.depsTail.nextDep = n, bt.depsTail = n) : bt.deps = bt.depsTail = n, Om(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const l = n.nextDep;
      l.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = l), n.prevDep = bt.depsTail, n.nextDep = void 0, bt.depsTail.nextDep = n, bt.depsTail = n, bt.deps === n && (bt.deps = l);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wo++, this.notify(t);
  }
  notify(t) {
    ac();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      oc();
    }
  }
}
function Om(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let l = t.deps; l; l = l.nextDep) Om(l);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const er = /* @__PURE__ */ new WeakMap(), ia = Symbol(""), Gs = Symbol(""), jo = Symbol("");
function Zt(e, t, n) {
  if (Mn && bt) {
    let l = er.get(e);
    l || er.set(e, l = /* @__PURE__ */ new Map());
    let a = l.get(n);
    a || (l.set(n, a = new rc()), a.map = l, a.key = n), a.track();
  }
}
function cl(e, t, n, l, a, o) {
  const i = er.get(e);
  if (!i) {
    Wo++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (ac(), t === "clear") i.forEach(r);
  else {
    const s = Oe(e), u = s && Cr(n);
    if (s && n === "length") {
      const c = Number(l);
      i.forEach((d, f) => {
        (f === "length" || f === jo || !Xn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get(jo)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(ia)), Ya(e) && r(i.get(Gs)));
        break;
      case "delete":
        s || (r(i.get(ia)), Ya(e) && r(i.get(Gs)));
        break;
      case "set":
        Ya(e) && r(i.get(ia));
        break;
    }
  }
  oc();
}
function gS(e, t) {
  const n = er.get(e);
  return n && n.get(t);
}
function $a(e) {
  const t = De(e);
  return t === e ? t : (Zt(t, "iterate", jo), kn(e) ? t : t.map($n));
}
function Ir(e) {
  return Zt(e = De(e), "iterate", jo), e;
}
function Ml(e, t) {
  return gl(e) ? Ja(Rl(e) ? $n(t) : t) : $n(t);
}
const hS = { __proto__: null, [Symbol.iterator]() {
  return ys(this, Symbol.iterator, (e) => Ml(this, e));
}, concat(...e) {
  return $a(this).concat(...e.map((t) => Oe(t) ? $a(t) : t));
}, entries() {
  return ys(this, "entries", (e) => (e[1] = Ml(this, e[1]), e));
}, every(e, t) {
  return ol(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return ol(this, "filter", e, t, (n) => n.map((l) => Ml(this, l)), arguments);
}, find(e, t) {
  return ol(this, "find", e, t, (n) => Ml(this, n), arguments);
}, findIndex(e, t) {
  return ol(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return ol(this, "findLast", e, t, (n) => Ml(this, n), arguments);
}, findLastIndex(e, t) {
  return ol(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return ol(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return bs(this, "includes", e);
}, indexOf(...e) {
  return bs(this, "indexOf", e);
}, join(e) {
  return $a(this).join(e);
}, lastIndexOf(...e) {
  return bs(this, "lastIndexOf", e);
}, map(e, t) {
  return ol(this, "map", e, t, void 0, arguments);
}, pop() {
  return xo(this, "pop");
}, push(...e) {
  return xo(this, "push", e);
}, reduce(e, ...t) {
  return af(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return af(this, "reduceRight", e, t);
}, shift() {
  return xo(this, "shift");
}, some(e, t) {
  return ol(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return xo(this, "splice", e);
}, toReversed() {
  return $a(this).toReversed();
}, toSorted(e) {
  return $a(this).toSorted(e);
}, toSpliced(...e) {
  return $a(this).toSpliced(...e);
}, unshift(...e) {
  return xo(this, "unshift", e);
}, values() {
  return ys(this, "values", (e) => Ml(this, e));
} };
function ys(e, t, n) {
  const l = Ir(e), a = l[t]();
  return l !== e && !kn(e) && (a._next = a.next, a.next = () => {
    const o = a._next();
    return o.done || (o.value = n(o.value)), o;
  }), a;
}
const yS = Array.prototype;
function ol(e, t, n, l, a, o) {
  const i = Ir(e), r = i !== e && !kn(e), s = i[t];
  if (s !== yS[t]) {
    const d = s.apply(e, o);
    return r ? $n(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, Ml(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, l);
  return r && a ? a(c) : c;
}
function af(e, t, n, l) {
  const a = Ir(e);
  let o = n;
  return a !== e && (kn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Ml(e, r), s, e);
  }), a[t](o, ...l);
}
function bs(e, t, n) {
  const l = De(e);
  Zt(l, "iterate", jo);
  const a = l[t](...n);
  return (a === -1 || a === false) && mi(n[0]) ? (n[0] = De(n[0]), l[t](...n)) : a;
}
function xo(e, t, n = []) {
  vl(), ac();
  const l = De(e)[t].apply(e, n);
  return oc(), ml(), l;
}
const bS = Qu("__proto__,__v_isRef,__isVue"), Nm = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xn));
function pS(e) {
  Xn(e) || (e = String(e));
  const t = De(this);
  return Zt(t, "has", e), t.hasOwnProperty(e);
}
class Hm {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, l) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !a;
    if (n === "__v_isReadonly") return a;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return l === (a ? o ? TS : Um : o ? jm : Wm).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(l) ? t : void 0;
    const i = Oe(t);
    if (!a) {
      let s;
      if (i && (s = hS[n])) return s;
      if (n === "hasOwnProperty") return pS;
    }
    const r = Reflect.get(t, n, Ct(t) ? t : l);
    if ((Xn(n) ? Nm.has(n) : bS(n)) || (a || Zt(t, "get", n), o)) return r;
    if (Ct(r)) {
      const s = i && Cr(n) ? r : r.value;
      return a && it(s) ? fa(s) : s;
    }
    return it(r) ? a ? fa(r) : Rt(r) : r;
  }
}
class zm extends Hm {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, l, a) {
    let o = t[n];
    const i = Oe(t) && Cr(n);
    if (!this._isShallow) {
      const u = gl(o);
      if (!kn(l) && !gl(l) && (o = De(o), l = De(l)), !i && Ct(o) && !Ct(l)) return u || (o.value = l), true;
    }
    const r = i ? Number(n) < t.length : rt(t, n), s = Reflect.set(t, n, l, Ct(t) ? t : a);
    return t === De(a) && (r ? $l(l, o) && cl(t, "set", n, l) : cl(t, "add", n, l)), s;
  }
  deleteProperty(t, n) {
    const l = rt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && l && cl(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const l = Reflect.has(t, n);
    return (!Xn(n) || !Nm.has(n)) && Zt(t, "has", n), l;
  }
  ownKeys(t) {
    return Zt(t, "iterate", Oe(t) ? "length" : ia), Reflect.ownKeys(t);
  }
}
class SS extends Hm {
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
const xS = new zm(), kS = new SS(), wS = new zm(true);
const Ys = (e) => e, Mi = (e) => Reflect.getPrototypeOf(e);
function CS(e, t, n) {
  return function(...l) {
    const a = this.__v_raw, o = De(a), i = Ya(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = a[e](...l), c = n ? Ys : t ? Ja : $n;
    return !t && Zt(o, "iterate", s ? Gs : ia), $t(Object.create(u), { next() {
      const { value: d, done: f } = u.next();
      return f ? { value: d, done: f } : { value: r ? [c(d[0]), c(d[1])] : c(d), done: f };
    } });
  };
}
function Ei(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function _S(e, t) {
  const n = { get(a) {
    const o = this.__v_raw, i = De(o), r = De(a);
    e || ($l(a, r) && Zt(i, "get", a), Zt(i, "get", r));
    const { has: s } = Mi(i), u = t ? Ys : e ? Ja : $n;
    if (s.call(i, a)) return u(o.get(a));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(a);
  }, get size() {
    const a = this.__v_raw;
    return !e && Zt(De(a), "iterate", ia), a.size;
  }, has(a) {
    const o = this.__v_raw, i = De(o), r = De(a);
    return e || ($l(a, r) && Zt(i, "has", a), Zt(i, "has", r)), a === r ? o.has(a) : o.has(a) || o.has(r);
  }, forEach(a, o) {
    const i = this, r = i.__v_raw, s = De(r), u = t ? Ys : e ? Ja : $n;
    return !e && Zt(s, "iterate", ia), r.forEach((c, d) => a.call(o, u(c), u(d), i));
  } };
  return $t(n, e ? { add: Ei("add"), set: Ei("set"), delete: Ei("delete"), clear: Ei("clear") } : { add(a) {
    !t && !kn(a) && !gl(a) && (a = De(a));
    const o = De(this);
    return Mi(o).has.call(o, a) || (o.add(a), cl(o, "add", a, a)), this;
  }, set(a, o) {
    !t && !kn(o) && !gl(o) && (o = De(o));
    const i = De(this), { has: r, get: s } = Mi(i);
    let u = r.call(i, a);
    u || (a = De(a), u = r.call(i, a));
    const c = s.call(i, a);
    return i.set(a, o), u ? $l(o, c) && cl(i, "set", a, o) : cl(i, "add", a, o), this;
  }, delete(a) {
    const o = De(this), { has: i, get: r } = Mi(o);
    let s = i.call(o, a);
    s || (a = De(a), s = i.call(o, a)), r && r.call(o, a);
    const u = o.delete(a);
    return s && cl(o, "delete", a, void 0), u;
  }, clear() {
    const a = De(this), o = a.size !== 0, i = a.clear();
    return o && cl(a, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    n[a] = CS(a, e, t);
  }), n;
}
function sc(e, t) {
  const n = _S(e, t);
  return (l, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? l : Reflect.get(rt(n, a) && a in l ? n : l, a, o);
}
const VS = { get: sc(false, false) }, IS = { get: sc(false, true) }, PS = { get: sc(true, false) };
const Wm = /* @__PURE__ */ new WeakMap(), jm = /* @__PURE__ */ new WeakMap(), Um = /* @__PURE__ */ new WeakMap(), TS = /* @__PURE__ */ new WeakMap();
function AS(e) {
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
function DS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : AS(tS(e));
}
function Rt(e) {
  return gl(e) ? e : uc(e, false, xS, VS, Wm);
}
function MS(e) {
  return uc(e, false, wS, IS, jm);
}
function fa(e) {
  return uc(e, true, kS, PS, Um);
}
function uc(e, t, n, l, a) {
  if (!it(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = DS(e);
  if (o === 0) return e;
  const i = a.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? l : n);
  return a.set(e, r), r;
}
function Rl(e) {
  return gl(e) ? Rl(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gl(e) {
  return !!(e && e.__v_isReadonly);
}
function kn(e) {
  return !!(e && e.__v_isShallow);
}
function mi(e) {
  return e ? !!e.__v_raw : false;
}
function De(e) {
  const t = e && e.__v_raw;
  return t ? De(t) : e;
}
function Gm(e) {
  return !rt(e, "__v_skip") && Object.isExtensible(e) && Vm(e, "__v_skip", true), e;
}
const $n = (e) => it(e) ? Rt(e) : e, Ja = (e) => it(e) ? fa(e) : e;
function Ct(e) {
  return e ? e.__v_isRef === true : false;
}
function H(e) {
  return Ym(e, false);
}
function re(e) {
  return Ym(e, true);
}
function Ym(e, t) {
  return Ct(e) ? e : new ES(e, t);
}
class ES {
  constructor(t, n) {
    this.dep = new rc(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : De(t), this._value = n ? t : $n(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, l = this.__v_isShallow || kn(t) || gl(t);
    t = l ? t : De(t), $l(t, n) && (this._rawValue = t, this._value = l ? t : $n(t), this.dep.trigger());
  }
}
function vt(e) {
  return Ct(e) ? e.value : e;
}
function st(e) {
  return We(e) ? e() : vt(e);
}
const BS = { get: (e, t, n) => t === "__v_raw" ? e : vt(Reflect.get(e, t, n)), set: (e, t, n, l) => {
  const a = e[t];
  return Ct(a) && !Ct(n) ? (a.value = n, true) : Reflect.set(e, t, n, l);
} };
function Km(e) {
  return Rl(e) ? e : new Proxy(e, BS);
}
function co(e) {
  const t = Oe(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Xm(e, n);
  return t;
}
class $S {
  constructor(t, n, l) {
    this._object = t, this._key = n, this._defaultValue = l, this.__v_isRef = true, this._value = void 0, this._raw = De(t);
    let a = true, o = t;
    if (!Oe(t) || !Cr(String(n))) do
      a = !mi(o) || kn(o);
    while (a && (o = o.__v_raw));
    this._shallow = a;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = vt(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && Ct(this._raw[this._key])) {
      const n = this._object[this._key];
      if (Ct(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return gS(this._raw, this._key);
  }
}
class RS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function $(e, t, n) {
  return Ct(e) ? e : We(e) ? new RS(e) : it(e) && arguments.length > 1 ? Xm(e, t, n) : H(e);
}
function Xm(e, t, n) {
  return new $S(e, t, n);
}
class FS {
  constructor(t, n, l) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new rc(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = l;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && bt !== this) return Bm(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Fm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function LS(e, t, n = false) {
  let l, a;
  return We(e) ? l = e : (l = e.get, a = e.set), new FS(l, a, n);
}
const Bi = {}, tr = /* @__PURE__ */ new WeakMap();
let na;
function OS(e, t = false, n = na) {
  if (n) {
    let l = tr.get(n);
    l || tr.set(n, l = []), l.push(e);
  }
}
function NS(e, t, n = gt) {
  const { immediate: l, deep: a, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (I) => a ? I : kn(I) || a === false || a === 0 ? dl(I, 1) : dl(I);
  let c, d, f, v, p = false, m = false;
  if (Ct(e) ? (d = () => e.value, p = kn(e)) : Rl(e) ? (d = () => u(e), p = true) : Oe(e) ? (m = true, p = e.some((I) => Rl(I) || kn(I)), d = () => e.map((I) => {
    if (Ct(I)) return I.value;
    if (Rl(I)) return u(I);
    if (We(I)) return s ? s(I, 2) : I();
  })) : We(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      vl();
      try {
        f();
      } finally {
        ml();
      }
    }
    const I = na;
    na = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      na = I;
    }
  } : d = Kn, t && a) {
    const I = d, k = a === true ? 1 / 0 : a;
    d = () => dl(I(), k);
  }
  const h = Dm(), b = () => {
    c.stop(), h && h.active && tc(h.effects, c);
  };
  if (o && t) {
    const I = t;
    t = (...k) => {
      I(...k), b();
    };
  }
  let x = m ? new Array(e.length).fill(Bi) : Bi;
  const V = (I) => {
    if (!(!(c.flags & 1) || !c.dirty && !I)) if (t) {
      const k = c.run();
      if (a || p || (m ? k.some((y, C) => $l(y, x[C])) : $l(k, x))) {
        f && f();
        const y = na;
        na = c;
        try {
          const C = [k, x === Bi ? void 0 : m && x[0] === Bi ? [] : x, v];
          x = k, s ? s(t, 3, C) : t(...C);
        } finally {
          na = y;
        }
      }
    } else c.run();
  };
  return r && r(V), c = new Mm(d), c.scheduler = i ? () => i(V, false) : V, v = (I) => OS(I, false, c), f = c.onStop = () => {
    const I = tr.get(c);
    if (I) {
      if (s) s(I, 4);
      else for (const k of I) k();
      tr.delete(c);
    }
  }, t ? l ? V(true) : x = c.run() : i ? i(V.bind(null, true), true) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b;
}
function dl(e, t = 1 / 0, n) {
  if (t <= 0 || !it(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, Ct(e)) dl(e.value, t, n);
  else if (Oe(e)) for (let l = 0; l < e.length; l++) dl(e[l], t, n);
  else if (km(e) || Ya(e)) e.forEach((l) => {
    dl(l, t, n);
  });
  else if (_m(e)) {
    for (const l in e) dl(e[l], t, n);
    for (const l of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, l) && dl(e[l], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gi(e, t, n, l) {
  try {
    return l ? e(...l) : e();
  } catch (a) {
    Pr(a, t, n);
  }
}
function Rn(e, t, n, l) {
  if (We(e)) {
    const a = gi(e, t, n, l);
    return a && wm(a) && a.catch((o) => {
      Pr(o, t, n);
    }), a;
  }
  if (Oe(e)) {
    const a = [];
    for (let o = 0; o < e.length; o++) a.push(Rn(e[o], t, n, l));
    return a;
  }
}
function Pr(e, t, n, l = true) {
  const a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || gt;
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
      vl(), gi(o, null, 10, [e, s, u]), ml();
      return;
    }
  }
  HS(e, n, a, l, i);
}
function HS(e, t, n, l = true, a = false) {
  if (a) throw e;
  console.error(e);
}
const un = [];
let jn = -1;
const Ka = [];
let El = null, Na = 0;
const qm = Promise.resolve();
let nr = null;
function Be(e) {
  const t = nr || qm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zS(e) {
  let t = jn + 1, n = un.length;
  for (; t < n; ) {
    const l = t + n >>> 1, a = un[l], o = Uo(a);
    o < e || o === e && a.flags & 2 ? t = l + 1 : n = l;
  }
  return t;
}
function cc(e) {
  if (!(e.flags & 1)) {
    const t = Uo(e), n = un[un.length - 1];
    !n || !(e.flags & 2) && t >= Uo(n) ? un.push(e) : un.splice(zS(t), 0, e), e.flags |= 1, Zm();
  }
}
function Zm() {
  nr || (nr = qm.then(Qm));
}
function WS(e) {
  Oe(e) ? Ka.push(...e) : El && e.id === -1 ? El.splice(Na + 1, 0, e) : e.flags & 1 || (Ka.push(e), e.flags |= 1), Zm();
}
function of(e, t, n = jn + 1) {
  for (; n < un.length; n++) {
    const l = un[n];
    if (l && l.flags & 2) {
      if (e && l.id !== e.uid) continue;
      un.splice(n, 1), n--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Jm(e) {
  if (Ka.length) {
    const t = [...new Set(Ka)].sort((n, l) => Uo(n) - Uo(l));
    if (Ka.length = 0, El) {
      El.push(...t);
      return;
    }
    for (El = t, Na = 0; Na < El.length; Na++) {
      const n = El[Na];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    El = null, Na = 0;
  }
}
const Uo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qm(e) {
  try {
    for (jn = 0; jn < un.length; jn++) {
      const t = un[jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jn < un.length; jn++) {
      const t = un[jn];
      t && (t.flags &= -2);
    }
    jn = -1, un.length = 0, Jm(), nr = null, (un.length || Ka.length) && Qm();
  }
}
let yn = null, eg = null;
function lr(e) {
  const t = yn;
  return yn = e, eg = e && e.type.__scopeId || null, t;
}
function ye(e, t = yn, n) {
  if (!t || e._n) return e;
  const l = (...a) => {
    l._d && ir(-1);
    const o = lr(t);
    let i;
    try {
      i = e(...a);
    } finally {
      lr(o), l._d && ir(1);
    }
    return i;
  };
  return l._n = true, l._c = true, l._d = true, l;
}
function nt(e, t) {
  if (yn === null) return e;
  const n = Br(yn), l = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, i, r, s = gt] = t[a];
    o && (We(o) && (o = { mounted: o, updated: o }), o.deep && dl(i), l.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Zl(e, t, n, l) {
  const a = e.dirs, o = t && t.dirs;
  for (let i = 0; i < a.length; i++) {
    const r = a[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[l];
    s && (vl(), Rn(s, n, 8, [e.el, r, e, t]), ml());
  }
}
function mt(e, t) {
  if (en) {
    let n = en.provides;
    const l = en.parent && en.parent.provides;
    l === n && (n = en.provides = Object.create(l)), n[e] = t;
  }
}
function Ue(e, t, n = false) {
  const l = yi();
  if (l || Xa) {
    let a = Xa ? Xa._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (a && e in a) return a[e];
    if (arguments.length > 1) return n && We(t) ? t.call(l && l.proxy) : t;
  }
}
const jS = Symbol.for("v-scx"), US = () => Ue(jS);
function ht(e, t) {
  return dc(e, null, t);
}
function se(e, t, n) {
  return dc(e, t, n);
}
function dc(e, t, n = gt) {
  const { immediate: l, deep: a, flush: o, once: i } = n, r = $t({}, n), s = t && l || !t && o !== "post";
  let u;
  if (Xo) {
    if (o === "sync") {
      const v = US();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Kn, v.resume = Kn, v.pause = Kn, v;
    }
  }
  const c = en;
  r.call = (v, p, m) => Rn(v, c, p, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    Xt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, p) => {
    p ? v() : cc(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = NS(e, t, r);
  return Xo && (u ? u.push(f) : s && f()), f;
}
function GS(e, t, n) {
  const l = this.proxy, a = xt(e) ? e.includes(".") ? tg(l, e) : () => l[e] : e.bind(l, l);
  let o;
  We(t) ? o = t : (o = t.handler, n = t);
  const i = bi(this), r = dc(a, o.bind(l), n);
  return i(), r;
}
function tg(e, t) {
  const n = t.split(".");
  return () => {
    let l = e;
    for (let a = 0; a < n.length && l; a++) l = l[n[a]];
    return l;
  };
}
const ng = Symbol("_vte"), lg = (e) => e.__isTeleport, $o = (e) => e && (e.disabled || e.disabled === ""), rf = (e) => e && (e.defer || e.defer === ""), sf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, uf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ks = (e, t) => {
  const n = e && e.to;
  return xt(n) ? t ? t(n) : null : n;
}, ag = { name: "Teleport", __isTeleport: true, process(e, t, n, l, a, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: p, createText: m, createComment: h } } = u, b = $o(t.props);
  let { shapeFlag: x, children: V, dynamicChildren: I } = t;
  if (e == null) {
    const k = t.el = m(""), y = t.anchor = m("");
    v(k, n, l), v(y, n, l);
    const C = (T, P) => {
      x & 16 && c(V, T, P, a, o, i, r, s);
    }, w = () => {
      const T = t.target = Ks(t.props, p), P = Xs(T, t, m, v);
      T && (i !== "svg" && sf(T) ? i = "svg" : i !== "mathml" && uf(T) && (i = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), b || (C(T, P), Gi(t, false)));
    };
    b && (C(n, y), Gi(t, true)), rf(t.props) ? (t.el.__isMounted = false, Xt(() => {
      w(), delete t.el.__isMounted;
    }, o)) : w();
  } else {
    if (rf(t.props) && e.el.__isMounted === false) {
      Xt(() => {
        ag.process(e, t, n, l, a, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const k = t.anchor = e.anchor, y = t.target = e.target, C = t.targetAnchor = e.targetAnchor, w = $o(e.props), T = w ? n : y, P = w ? k : C;
    if (i === "svg" || sf(y) ? i = "svg" : (i === "mathml" || uf(y)) && (i = "mathml"), I ? (f(e.dynamicChildren, I, T, a, o, i, r), hc(e, t, true)) : s || d(e, t, T, P, a, o, i, r, false), b) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $i(t, n, k, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const M = t.target = Ks(t.props, p);
      M && $i(t, M, null, u, 0);
    } else w && $i(t, y, C, u, 1);
    Gi(t, b);
  }
}, remove(e, t, n, { um: l, o: { remove: a } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (a(u), a(c)), o && a(s), i & 16) {
    const v = o || !$o(f);
    for (let p = 0; p < r.length; p++) {
      const m = r[p];
      l(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: $i, hydrate: YS };
function $i(e, t, n, { o: { insert: l }, m: a }, o = 2) {
  o === 0 && l(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && l(i, t, n), (!d || $o(c)) && s & 16) for (let f = 0; f < u.length; f++) a(u[f], t, n, 2);
  d && l(r, t, n);
}
function YS(e, t, n, l, a, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(h, b) {
    let x = b;
    for (; x; ) {
      if (x && x.nodeType === 8) {
        if (x.data === "teleport start anchor") t.targetStart = x;
        else if (x.data === "teleport anchor") {
          t.targetAnchor = x, h._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      x = i(x);
    }
  }
  function v(h, b) {
    b.anchor = d(i(h), b, r(h), n, l, a, o);
  }
  const p = t.target = Ks(t.props, s), m = $o(t.props);
  if (p) {
    const h = p._lpa || p.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(p, h), t.targetAnchor || Xs(p, t, c, u, r(e) === p ? e : null)) : (t.anchor = i(e), f(p, h), t.targetAnchor || Xs(p, t, c, u), d(h && i(h), t, p, n, l, a, o))), Gi(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const KS = ag;
function Gi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let l, a;
    for (t ? (l = e.el, a = e.anchor) : (l = e.targetStart, a = e.targetAnchor); l && l !== a; ) l.nodeType === 1 && l.setAttribute("data-v-owner", n.uid), l = l.nextSibling;
    n.ut();
  }
}
function Xs(e, t, n, l, a = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[ng] = i, e && (l(o, e, a), l(i, e, a)), i;
}
const Un = Symbol("_leaveCb"), ko = Symbol("_enterCb");
function og() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Tt(() => {
    e.isMounted = true;
  }), Yt(() => {
    e.isUnmounting = true;
  }), e;
}
const In = [Function, Array], ig = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: In, onEnter: In, onAfterEnter: In, onEnterCancelled: In, onBeforeLeave: In, onLeave: In, onAfterLeave: In, onLeaveCancelled: In, onBeforeAppear: In, onAppear: In, onAfterAppear: In, onAppearCancelled: In }, rg = (e) => {
  const t = e.subTree;
  return t.component ? rg(t.component) : t;
}, XS = { name: "BaseTransition", props: ig, setup(e, { slots: t }) {
  const n = yi(), l = og();
  return () => {
    const a = t.default && fc(t.default(), true);
    if (!a || !a.length) return;
    const o = sg(a), i = De(e), { mode: r } = i;
    if (l.isLeaving) return ps(o);
    const s = cf(o);
    if (!s) return ps(o);
    let u = Go(s, i, l, n, (d) => u = d);
    s.type !== Jt && va(s, u);
    let c = n.subTree && cf(n.subTree);
    if (c && c.type !== Jt && !aa(c, s) && rg(n).type !== Jt) {
      let d = Go(c, i, l, n);
      if (va(c, d), r === "out-in" && s.type !== Jt) return l.isLeaving = true, d.afterLeave = () => {
        l.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, ps(o);
      r === "in-out" && s.type !== Jt ? d.delayLeave = (f, v, p) => {
        const m = ug(l, c);
        m[String(c.key)] = c, f[Un] = () => {
          v(), f[Un] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          p(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function sg(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Jt) {
      t = n;
      break;
    }
  }
  return t;
}
const qS = XS;
function ug(e, t) {
  const { leavingVNodes: n } = e;
  let l = n.get(t.type);
  return l || (l = /* @__PURE__ */ Object.create(null), n.set(t.type, l)), l;
}
function Go(e, t, n, l, a) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: p, onLeaveCancelled: m, onBeforeAppear: h, onAppear: b, onAfterAppear: x, onAppearCancelled: V } = t, I = String(e.key), k = ug(n, e), y = (T, P) => {
    T && Rn(T, l, 9, P);
  }, C = (T, P) => {
    const M = P[1];
    y(T, P), Oe(T) ? T.every((D) => D.length <= 1) && M() : T.length <= 1 && M();
  }, w = { mode: i, persisted: r, beforeEnter(T) {
    let P = s;
    if (!n.isMounted) if (o) P = h || s;
    else return;
    T[Un] && T[Un](true);
    const M = k[I];
    M && aa(e, M) && M.el[Un] && M.el[Un](), y(P, [T]);
  }, enter(T) {
    if (k[I] === e) return;
    let P = u, M = c, D = d;
    if (!n.isMounted) if (o) P = b || u, M = x || c, D = V || d;
    else return;
    let E = false;
    T[ko] = (F) => {
      E || (E = true, F ? y(D, [T]) : y(M, [T]), w.delayedLeave && w.delayedLeave(), T[ko] = void 0);
    };
    const A = T[ko].bind(null, false);
    P ? C(P, [T, A]) : A();
  }, leave(T, P) {
    const M = String(e.key);
    if (T[ko] && T[ko](true), n.isUnmounting) return P();
    y(f, [T]);
    let D = false;
    T[Un] = (A) => {
      D || (D = true, P(), A ? y(m, [T]) : y(p, [T]), T[Un] = void 0, k[M] === e && delete k[M]);
    };
    const E = T[Un].bind(null, false);
    k[M] = e, v ? C(v, [T, E]) : E();
  }, clone(T) {
    const P = Go(T, t, n, l, a);
    return a && a(P), P;
  } };
  return w;
}
function ps(e) {
  if (Tr(e)) return e = yl(e), e.children = null, e;
}
function cf(e) {
  if (!Tr(e)) return lg(e.type) && e.children ? sg(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && We(n.default)) return n.default();
  }
}
function va(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, va(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fc(e, t = false, n) {
  let l = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && a++, l = l.concat(fc(i.children, t, r))) : (t || i.type !== Jt) && l.push(r != null ? yl(i, { key: r }) : i);
  }
  if (a > 1) for (let o = 0; o < l.length; o++) l[o].patchFlag = -2;
  return l;
}
function vn(e, t) {
  return We(e) ? $t({ name: e.name }, t, { setup: e }) : e;
}
function Ot() {
  const e = yi();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function cg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function df(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ar = /* @__PURE__ */ new WeakMap();
function Ro(e, t, n, l, a = false) {
  if (Oe(e)) {
    e.forEach((m, h) => Ro(m, t && (Oe(t) ? t[h] : t), n, l, a));
    return;
  }
  if (Fo(l) && !a) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && Ro(e, t, n, l.component.subTree);
    return;
  }
  const o = l.shapeFlag & 4 ? Br(l.component) : l.el, i = a ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === gt ? r.refs = {} : r.refs, d = r.setupState, f = De(d), v = d === gt ? xm : (m) => df(c, m) ? false : rt(f, m), p = (m, h) => !(h && df(c, h));
  if (u != null && u !== s) {
    if (ff(t), xt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (Ct(u)) {
      const m = t;
      p(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (We(s)) gi(s, r, 12, [i, c]);
  else {
    const m = xt(s), h = Ct(s);
    if (m || h) {
      const b = () => {
        if (e.f) {
          const x = m ? v(s) ? d[s] : c[s] : p() || !e.k ? s.value : c[e.k];
          if (a) Oe(x) && tc(x, o);
          else if (Oe(x)) x.includes(o) || x.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const V = [o];
            p(s, e.k) && (s.value = V), e.k && (c[e.k] = V);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : h && (p(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const x = () => {
          b(), ar.delete(e);
        };
        x.id = -1, ar.set(e, x), Xt(x, n);
      } else ff(e), b();
    }
  }
}
function ff(e) {
  const t = ar.get(e);
  t && (t.flags |= 8, ar.delete(e));
}
Vr().requestIdleCallback;
Vr().cancelIdleCallback;
const Fo = (e) => !!e.type.__asyncLoader, Tr = (e) => e.type.__isKeepAlive;
function dg(e, t) {
  fg(e, "a", t);
}
function vc(e, t) {
  fg(e, "da", t);
}
function fg(e, t, n = en) {
  const l = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated) return;
      a = a.parent;
    }
    return e();
  });
  if (Ar(t, l, n), n) {
    let a = n.parent;
    for (; a && a.parent; ) Tr(a.parent.vnode) && ZS(l, t, n, a), a = a.parent;
  }
}
function ZS(e, t, n, l) {
  const a = Ar(t, e, l, true);
  Mr(() => {
    tc(l[t], a);
  }, n);
}
function Ar(e, t, n = en, l = false) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      vl();
      const r = bi(n), s = Rn(t, n, e, i);
      return r(), ml(), s;
    });
    return l ? a.unshift(o) : a.push(o), o;
  }
}
const Sl = (e) => (t, n = en) => {
  (!Xo || e === "sp") && Ar(e, (...l) => t(...l), n);
}, fo = Sl("bm"), Tt = Sl("m"), vg = Sl("bu"), Dr = Sl("u"), Yt = Sl("bum"), Mr = Sl("um"), JS = Sl("sp"), QS = Sl("rtg"), ex = Sl("rtc");
function tx(e, t = en) {
  Ar("ec", e, t);
}
const mg = "components";
function Me(e, t) {
  return gg(mg, e, true, t) || e;
}
const nx = Symbol.for("v-ndc");
function lx(e) {
  return xt(e) && gg(mg, e, false) || e;
}
function gg(e, t, n = true, l = false) {
  const a = yn || en;
  if (a) {
    const o = a.type;
    {
      const r = Ox(o, false);
      if (r && (r === t || r === fn(t) || r === el(fn(t)))) return o;
    }
    const i = vf(a[e] || o[e], t) || vf(a.appContext[e], t);
    return !i && l ? o : i;
  }
}
function vf(e, t) {
  return e && (e[t] || e[fn(t)] || e[el(fn(t))]);
}
function hl(e, t, n, l) {
  let a;
  const o = n, i = Oe(e);
  if (i || xt(e)) {
    const r = i && Rl(e);
    let s = false, u = false;
    r && (s = !kn(e), u = gl(e), e = Ir(e)), a = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) a[c] = t(s ? u ? Ja($n(e[c])) : $n(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let r = 0; r < e; r++) a[r] = t(r + 1, r, void 0, o);
  } else if (it(e)) if (e[Symbol.iterator]) a = Array.from(e, (r, s) => t(r, s, void 0, o));
  else {
    const r = Object.keys(e);
    a = new Array(r.length);
    for (let s = 0, u = r.length; s < u; s++) {
      const c = r[s];
      a[s] = t(e[c], c, s, o);
    }
  }
  else a = [];
  return a;
}
const qs = (e) => e ? $g(e) ? Br(e) : qs(e.parent) : null, Lo = $t(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => qs(e.parent), $root: (e) => qs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => yg(e), $forceUpdate: (e) => e.f || (e.f = () => {
  cc(e.update);
}), $nextTick: (e) => e.n || (e.n = Be.bind(e.proxy)), $watch: (e) => GS.bind(e) }), Ss = (e, t) => e !== gt && !e.__isScriptSetup && rt(e, t), ax = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: l, data: a, props: o, accessCache: i, type: r, appContext: s } = e;
  if (t[0] !== "$") {
    const f = i[t];
    if (f !== void 0) switch (f) {
      case 1:
        return l[t];
      case 2:
        return a[t];
      case 4:
        return n[t];
      case 3:
        return o[t];
    }
    else {
      if (Ss(l, t)) return i[t] = 1, l[t];
      if (a !== gt && rt(a, t)) return i[t] = 2, a[t];
      if (rt(o, t)) return i[t] = 3, o[t];
      if (n !== gt && rt(n, t)) return i[t] = 4, n[t];
      Zs && (i[t] = 0);
    }
  }
  const u = Lo[t];
  let c, d;
  if (u) return t === "$attrs" && Zt(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== gt && rt(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, rt(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: l, setupState: a, ctx: o } = e;
  return Ss(a, t) ? (a[t] = n, true) : l !== gt && rt(l, t) ? (l[t] = n, true) : rt(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: l, appContext: a, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== gt && r[0] !== "$" && rt(e, r) || Ss(t, r) || rt(o, r) || rt(l, r) || rt(Lo, r) || rt(a.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : rt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function mf(e) {
  return Oe(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let Zs = true;
function ox(e) {
  const t = yg(e), n = e.proxy, l = e.ctx;
  Zs = false, t.beforeCreate && gf(t.beforeCreate, e, "bc");
  const { data: a, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: p, activated: m, deactivated: h, beforeDestroy: b, beforeUnmount: x, destroyed: V, unmounted: I, render: k, renderTracked: y, renderTriggered: C, errorCaptured: w, serverPrefetch: T, expose: P, inheritAttrs: M, components: D, directives: E, filters: A } = t;
  if (u && ix(u, l, null), i) for (const W in i) {
    const Y = i[W];
    We(Y) && (l[W] = Y.bind(n));
  }
  if (a) {
    const W = a.call(n, n);
    it(W) && (e.data = Rt(W));
  }
  if (Zs = true, o) for (const W in o) {
    const Y = o[W], N = We(Y) ? Y.bind(n, n) : We(Y.get) ? Y.get.bind(n, n) : Kn, R = !We(Y) && We(Y.set) ? Y.set.bind(n) : Kn, Z = _({ get: N, set: R });
    Object.defineProperty(l, W, { enumerable: true, configurable: true, get: () => Z.value, set: (z) => Z.value = z });
  }
  if (r) for (const W in r) hg(r[W], l, n, W);
  if (s) {
    const W = We(s) ? s.call(n) : s;
    Reflect.ownKeys(W).forEach((Y) => {
      mt(Y, W[Y]);
    });
  }
  c && gf(c, e, "c");
  function j(W, Y) {
    Oe(Y) ? Y.forEach((N) => W(N.bind(n))) : Y && W(Y.bind(n));
  }
  if (j(fo, d), j(Tt, f), j(vg, v), j(Dr, p), j(dg, m), j(vc, h), j(tx, w), j(ex, y), j(QS, C), j(Yt, x), j(Mr, I), j(JS, T), Oe(P)) if (P.length) {
    const W = e.exposed || (e.exposed = {});
    P.forEach((Y) => {
      Object.defineProperty(W, Y, { get: () => n[Y], set: (N) => n[Y] = N, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  k && e.render === Kn && (e.render = k), M != null && (e.inheritAttrs = M), D && (e.components = D), E && (e.directives = E), T && cg(e);
}
function ix(e, t, n = Kn) {
  Oe(e) && (e = Js(e));
  for (const l in e) {
    const a = e[l];
    let o;
    it(a) ? "default" in a ? o = Ue(a.from || l, a.default, true) : o = Ue(a.from || l) : o = Ue(a), Ct(o) ? Object.defineProperty(t, l, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[l] = o;
  }
}
function gf(e, t, n) {
  Rn(Oe(e) ? e.map((l) => l.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function hg(e, t, n, l) {
  let a = l.includes(".") ? tg(n, l) : () => n[l];
  if (xt(e)) {
    const o = t[e];
    We(o) && se(a, o);
  } else if (We(e)) se(a, e.bind(n));
  else if (it(e)) if (Oe(e)) e.forEach((o) => hg(o, t, n, l));
  else {
    const o = We(e.handler) ? e.handler.bind(n) : t[e.handler];
    We(o) && se(a, o, e);
  }
}
function yg(e) {
  const t = e.type, { mixins: n, extends: l } = t, { mixins: a, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !a.length && !n && !l ? s = t : (s = {}, a.length && a.forEach((u) => or(s, u, i, true)), or(s, t, i)), it(t) && o.set(t, s), s;
}
function or(e, t, n, l = false) {
  const { mixins: a, extends: o } = t;
  o && or(e, o, n, true), a && a.forEach((i) => or(e, i, n, true));
  for (const i in t) if (!(l && i === "expose")) {
    const r = rx[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const rx = { data: hf, props: yf, emits: yf, methods: Po, computed: Po, beforeCreate: rn, created: rn, beforeMount: rn, mounted: rn, beforeUpdate: rn, updated: rn, beforeDestroy: rn, beforeUnmount: rn, destroyed: rn, unmounted: rn, activated: rn, deactivated: rn, errorCaptured: rn, serverPrefetch: rn, components: Po, directives: Po, watch: ux, provide: hf, inject: sx };
function hf(e, t) {
  return t ? e ? function() {
    return $t(We(e) ? e.call(this, this) : e, We(t) ? t.call(this, this) : t);
  } : t : e;
}
function sx(e, t) {
  return Po(Js(e), Js(t));
}
function Js(e) {
  if (Oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function rn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Po(e, t) {
  return e ? $t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yf(e, t) {
  return e ? Oe(e) && Oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $t(/* @__PURE__ */ Object.create(null), mf(e), mf(t ?? {})) : t;
}
function ux(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = $t(/* @__PURE__ */ Object.create(null), e);
  for (const l in t) n[l] = rn(e[l], t[l]);
  return n;
}
function bg() {
  return { app: null, config: { isNativeTag: xm, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let cx = 0;
function dx(e, t) {
  return function(l, a = null) {
    We(l) || (l = $t({}, l)), a != null && !it(a) && (a = null);
    const o = bg(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: cx++, _component: l, _props: a, _container: null, _context: o, _instance: null, version: Hx, get config() {
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
        const v = u._ceVNode || g(l, a);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, Br(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && (Rn(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Xa;
      Xa = u;
      try {
        return c();
      } finally {
        Xa = d;
      }
    } };
    return u;
  };
}
let Xa = null;
const fx = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fn(t)}Modifiers`] || e[`${ka(t)}Modifiers`];
function vx(e, t, ...n) {
  if (e.isUnmounted) return;
  const l = e.vnode.props || gt;
  let a = n;
  const o = t.startsWith("update:"), i = o && fx(l, t.slice(7));
  i && (i.trim && (a = n.map((c) => xt(c) ? c.trim() : c)), i.number && (a = n.map(nc)));
  let r, s = l[r = ms(t)] || l[r = ms(fn(t))];
  !s && o && (s = l[r = ms(ka(t))]), s && Rn(s, e, 6, a);
  const u = l[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, Rn(u, e, 6, a);
  }
}
const mx = /* @__PURE__ */ new WeakMap();
function pg(e, t, n = false) {
  const l = n ? mx : t.emitsCache, a = l.get(e);
  if (a !== void 0) return a;
  const o = e.emits;
  let i = {}, r = false;
  if (!We(e)) {
    const s = (u) => {
      const c = pg(u, t, true);
      c && (r = true, $t(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (it(e) && l.set(e, null), null) : (Oe(o) ? o.forEach((s) => i[s] = null) : $t(i, o), it(e) && l.set(e, i), i);
}
function Er(e, t) {
  return !e || !wr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, ka(t)) || rt(e, t));
}
function bf(e) {
  const { type: t, vnode: n, proxy: l, withProxy: a, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: p, inheritAttrs: m } = e, h = lr(e);
  let b, x;
  try {
    if (n.shapeFlag & 4) {
      const I = a || l, k = I;
      b = Gn(u.call(k, I, c, d, v, f, p)), x = r;
    } else {
      const I = t;
      b = Gn(I.length > 1 ? I(d, { attrs: r, slots: i, emit: s }) : I(d, null)), x = t.props ? r : gx(r);
    }
  } catch (I) {
    Oo.length = 0, Pr(I, e, 1), b = g(Jt);
  }
  let V = b;
  if (x && m !== false) {
    const I = Object.keys(x), { shapeFlag: k } = V;
    I.length && k & 7 && (o && I.some(ec) && (x = hx(x, o)), V = yl(V, x, false, true));
  }
  return n.dirs && (V = yl(V, null, false, true), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && va(V, n.transition), b = V, lr(h), b;
}
const gx = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || wr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, hx = (e, t) => {
  const n = {};
  for (const l in e) (!ec(l) || !(l.slice(9) in t)) && (n[l] = e[l]);
  return n;
};
function yx(e, t, n) {
  const { props: l, children: a, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return l ? pf(l, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (Sg(i, l, f) && !Er(u, f)) return true;
      }
    }
  } else return (a || r) && (!r || !r.$stable) ? true : l === i ? false : l ? i ? pf(l, i, u) : true : !!i;
  return false;
}
function pf(e, t, n) {
  const l = Object.keys(t);
  if (l.length !== Object.keys(e).length) return true;
  for (let a = 0; a < l.length; a++) {
    const o = l[a];
    if (Sg(t, e, o) && !Er(n, o)) return true;
  }
  return false;
}
function Sg(e, t, n) {
  const l = e[n], a = t[n];
  return n === "style" && it(l) && it(a) ? !lc(l, a) : l !== a;
}
function bx({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const l = t.subTree;
    if (l.suspense && l.suspense.activeBranch === e && (l.el = e.el), l === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const xg = {}, kg = () => Object.create(xg), wg = (e) => Object.getPrototypeOf(e) === xg;
function px(e, t, n, l = false) {
  const a = {}, o = kg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cg(e, t, a, o);
  for (const i in e.propsOptions[0]) i in a || (a[i] = void 0);
  n ? e.props = l ? a : MS(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function Sx(e, t, n, l) {
  const { props: a, attrs: o, vnode: { patchFlag: i } } = e, r = De(a), [s] = e.propsOptions;
  let u = false;
  if ((l || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Er(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (rt(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const p = fn(f);
          a[p] = Qs(s, r, p, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    Cg(e, t, a, o) && (u = true);
    let c;
    for (const d in r) (!t || !rt(t, d) && ((c = ka(d)) === d || !rt(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (a[d] = Qs(s, r, d, void 0, e, true)) : delete a[d]);
    if (o !== r) for (const d in o) (!t || !rt(t, d)) && (delete o[d], u = true);
  }
  u && cl(e.attrs, "set", "");
}
function Cg(e, t, n, l) {
  const [a, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (Mo(s)) continue;
    const u = t[s];
    let c;
    a && rt(a, c = fn(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : Er(e.emitsOptions, s) || (!(s in l) || u !== l[s]) && (l[s] = u, i = true);
  }
  if (o) {
    const s = De(n), u = r || gt;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Qs(a, s, d, u[d], e, !rt(u, d));
    }
  }
  return i;
}
function Qs(e, t, n, l, a, o) {
  const i = e[n];
  if (i != null) {
    const r = rt(i, "default");
    if (r && l === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && We(s)) {
        const { propsDefaults: u } = a;
        if (n in u) l = u[n];
        else {
          const c = bi(a);
          l = u[n] = s.call(null, t), c();
        }
      } else l = s;
      a.ce && a.ce._setProp(n, l);
    }
    i[0] && (o && !r ? l = false : i[1] && (l === "" || l === ka(n)) && (l = true));
  }
  return l;
}
const xx = /* @__PURE__ */ new WeakMap();
function _g(e, t, n = false) {
  const l = n ? xx : t.propsCache, a = l.get(e);
  if (a) return a;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!We(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = _g(d, t, true);
      $t(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return it(e) && l.set(e, Ga), Ga;
  if (Oe(o)) for (let c = 0; c < o.length; c++) {
    const d = fn(o[c]);
    Sf(d) && (i[d] = gt);
  }
  else if (o) for (const c in o) {
    const d = fn(c);
    if (Sf(d)) {
      const f = o[c], v = i[d] = Oe(f) || We(f) ? { type: f } : $t({}, f), p = v.type;
      let m = false, h = true;
      if (Oe(p)) for (let b = 0; b < p.length; ++b) {
        const x = p[b], V = We(x) && x.name;
        if (V === "Boolean") {
          m = true;
          break;
        } else V === "String" && (h = false);
      }
      else m = We(p) && p.name === "Boolean";
      v[0] = m, v[1] = h, (m || rt(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return it(e) && l.set(e, u), u;
}
function Sf(e) {
  return e[0] !== "$" && !Mo(e);
}
const mc = (e) => e === "_" || e === "_ctx" || e === "$stable", gc = (e) => Oe(e) ? e.map(Gn) : [Gn(e)], kx = (e, t, n) => {
  if (t._n) return t;
  const l = ye((...a) => gc(t(...a)), n);
  return l._c = false, l;
}, Vg = (e, t, n) => {
  const l = e._ctx;
  for (const a in e) {
    if (mc(a)) continue;
    const o = e[a];
    if (We(o)) t[a] = kx(a, o, l);
    else if (o != null) {
      const i = gc(o);
      t[a] = () => i;
    }
  }
}, Ig = (e, t) => {
  const n = gc(t);
  e.slots.default = () => n;
}, Pg = (e, t, n) => {
  for (const l in t) (n || !mc(l)) && (e[l] = t[l]);
}, wx = (e, t, n) => {
  const l = e.slots = kg();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Pg(l, t, n), n && Vm(l, "_", a, true)) : Vg(t, l);
  } else t && Ig(e, t);
}, Cx = (e, t, n) => {
  const { vnode: l, slots: a } = e;
  let o = true, i = gt;
  if (l.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : Pg(a, t, n) : (o = !t.$stable, Vg(t, a)), i = t;
  } else t && (Ig(e, t), i = { default: 1 });
  if (o) for (const r in a) !mc(r) && i[r] == null && delete a[r];
}, Xt = Tx;
function _x(e) {
  return Vx(e);
}
function Vx(e, t) {
  const n = Vr();
  n.__VUE__ = true;
  const { insert: l, remove: a, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Kn, insertStaticContent: p } = e, m = (B, L, ee, de = null, oe = null, ue = null, Se = void 0, ve = null, X = !!L.dynamicChildren) => {
    if (B === L) return;
    B && !aa(B, L) && (de = K(B), z(B, oe, ue, true), B = null), L.patchFlag === -2 && (X = false, L.dynamicChildren = null);
    const { type: ae, ref: Ie, shapeFlag: Q } = L;
    switch (ae) {
      case hi:
        h(B, L, ee, de);
        break;
      case Jt:
        b(B, L, ee, de);
        break;
      case ks:
        B == null && x(L, ee, de, Se);
        break;
      case be:
        D(B, L, ee, de, oe, ue, Se, ve, X);
        break;
      default:
        Q & 1 ? k(B, L, ee, de, oe, ue, Se, ve, X) : Q & 6 ? E(B, L, ee, de, oe, ue, Se, ve, X) : (Q & 64 || Q & 128) && ae.process(B, L, ee, de, oe, ue, Se, ve, X, xe);
    }
    Ie != null && oe ? Ro(Ie, B && B.ref, ue, L || B, !L) : Ie == null && B && B.ref != null && Ro(B.ref, null, ue, B, true);
  }, h = (B, L, ee, de) => {
    if (B == null) l(L.el = r(L.children), ee, de);
    else {
      const oe = L.el = B.el;
      L.children !== B.children && u(oe, L.children);
    }
  }, b = (B, L, ee, de) => {
    B == null ? l(L.el = s(L.children || ""), ee, de) : L.el = B.el;
  }, x = (B, L, ee, de) => {
    [B.el, B.anchor] = p(B.children, L, ee, de, B.el, B.anchor);
  }, V = ({ el: B, anchor: L }, ee, de) => {
    let oe;
    for (; B && B !== L; ) oe = f(B), l(B, ee, de), B = oe;
    l(L, ee, de);
  }, I = ({ el: B, anchor: L }) => {
    let ee;
    for (; B && B !== L; ) ee = f(B), a(B), B = ee;
    a(L);
  }, k = (B, L, ee, de, oe, ue, Se, ve, X) => {
    if (L.type === "svg" ? Se = "svg" : L.type === "math" && (Se = "mathml"), B == null) y(L, ee, de, oe, ue, Se, ve, X);
    else {
      const ae = B.el && B.el._isVueCE ? B.el : null;
      try {
        ae && ae._beginPatch(), T(B, L, oe, ue, Se, ve, X);
      } finally {
        ae && ae._endPatch();
      }
    }
  }, y = (B, L, ee, de, oe, ue, Se, ve) => {
    let X, ae;
    const { props: Ie, shapeFlag: Q, transition: he, dirs: Ce } = B;
    if (X = B.el = i(B.type, ue, Ie && Ie.is, Ie), Q & 8 ? c(X, B.children) : Q & 16 && w(B.children, X, null, de, oe, xs(B, ue), Se, ve), Ce && Zl(B, null, de, "created"), C(X, B, B.scopeId, Se, de), Ie) {
      for (const Ae in Ie) Ae !== "value" && !Mo(Ae) && o(X, Ae, null, Ie[Ae], ue, de);
      "value" in Ie && o(X, "value", null, Ie.value, ue), (ae = Ie.onVnodeBeforeMount) && zn(ae, de, B);
    }
    Ce && Zl(B, null, de, "beforeMount");
    const _e = Ix(oe, he);
    _e && he.beforeEnter(X), l(X, L, ee), ((ae = Ie && Ie.onVnodeMounted) || _e || Ce) && Xt(() => {
      ae && zn(ae, de, B), _e && he.enter(X), Ce && Zl(B, null, de, "mounted");
    }, oe);
  }, C = (B, L, ee, de, oe) => {
    if (ee && v(B, ee), de) for (let ue = 0; ue < de.length; ue++) v(B, de[ue]);
    if (oe) {
      let ue = oe.subTree;
      if (L === ue || Dg(ue.type) && (ue.ssContent === L || ue.ssFallback === L)) {
        const Se = oe.vnode;
        C(B, Se, Se.scopeId, Se.slotScopeIds, oe.parent);
      }
    }
  }, w = (B, L, ee, de, oe, ue, Se, ve, X = 0) => {
    for (let ae = X; ae < B.length; ae++) {
      const Ie = B[ae] = ve ? sl(B[ae]) : Gn(B[ae]);
      m(null, Ie, L, ee, de, oe, ue, Se, ve);
    }
  }, T = (B, L, ee, de, oe, ue, Se) => {
    const ve = L.el = B.el;
    let { patchFlag: X, dynamicChildren: ae, dirs: Ie } = L;
    X |= B.patchFlag & 16;
    const Q = B.props || gt, he = L.props || gt;
    let Ce;
    if (ee && Jl(ee, false), (Ce = he.onVnodeBeforeUpdate) && zn(Ce, ee, L, B), Ie && Zl(L, B, ee, "beforeUpdate"), ee && Jl(ee, true), (Q.innerHTML && he.innerHTML == null || Q.textContent && he.textContent == null) && c(ve, ""), ae ? P(B.dynamicChildren, ae, ve, ee, de, xs(L, oe), ue) : Se || Y(B, L, ve, null, ee, de, xs(L, oe), ue, false), X > 0) {
      if (X & 16) M(ve, Q, he, ee, oe);
      else if (X & 2 && Q.class !== he.class && o(ve, "class", null, he.class, oe), X & 4 && o(ve, "style", Q.style, he.style, oe), X & 8) {
        const _e = L.dynamicProps;
        for (let Ae = 0; Ae < _e.length; Ae++) {
          const Re = _e[Ae], Ge = Q[Re], ze = he[Re];
          (ze !== Ge || Re === "value") && o(ve, Re, Ge, ze, oe, ee);
        }
      }
      X & 1 && B.children !== L.children && c(ve, L.children);
    } else !Se && ae == null && M(ve, Q, he, ee, oe);
    ((Ce = he.onVnodeUpdated) || Ie) && Xt(() => {
      Ce && zn(Ce, ee, L, B), Ie && Zl(L, B, ee, "updated");
    }, de);
  }, P = (B, L, ee, de, oe, ue, Se) => {
    for (let ve = 0; ve < L.length; ve++) {
      const X = B[ve], ae = L[ve], Ie = X.el && (X.type === be || !aa(X, ae) || X.shapeFlag & 198) ? d(X.el) : ee;
      m(X, ae, Ie, null, de, oe, ue, Se, true);
    }
  }, M = (B, L, ee, de, oe) => {
    if (L !== ee) {
      if (L !== gt) for (const ue in L) !Mo(ue) && !(ue in ee) && o(B, ue, L[ue], null, oe, de);
      for (const ue in ee) {
        if (Mo(ue)) continue;
        const Se = ee[ue], ve = L[ue];
        Se !== ve && ue !== "value" && o(B, ue, ve, Se, oe, de);
      }
      "value" in ee && o(B, "value", L.value, ee.value, oe);
    }
  }, D = (B, L, ee, de, oe, ue, Se, ve, X) => {
    const ae = L.el = B ? B.el : r(""), Ie = L.anchor = B ? B.anchor : r("");
    let { patchFlag: Q, dynamicChildren: he, slotScopeIds: Ce } = L;
    Ce && (ve = ve ? ve.concat(Ce) : Ce), B == null ? (l(ae, ee, de), l(Ie, ee, de), w(L.children || [], ee, Ie, oe, ue, Se, ve, X)) : Q > 0 && Q & 64 && he && B.dynamicChildren && B.dynamicChildren.length === he.length ? (P(B.dynamicChildren, he, ee, oe, ue, Se, ve), (L.key != null || oe && L === oe.subTree) && hc(B, L, true)) : Y(B, L, ee, Ie, oe, ue, Se, ve, X);
  }, E = (B, L, ee, de, oe, ue, Se, ve, X) => {
    L.slotScopeIds = ve, B == null ? L.shapeFlag & 512 ? oe.ctx.activate(L, ee, de, Se, X) : A(L, ee, de, oe, ue, Se, X) : F(B, L, X);
  }, A = (B, L, ee, de, oe, ue, Se) => {
    const ve = B.component = Bx(B, de, oe);
    if (Tr(B) && (ve.ctx.renderer = xe), $x(ve, false, Se), ve.asyncDep) {
      if (oe && oe.registerDep(ve, j, Se), !B.el) {
        const X = ve.subTree = g(Jt);
        b(null, X, L, ee), B.placeholder = X.el;
      }
    } else j(ve, B, L, ee, oe, ue, Se);
  }, F = (B, L, ee) => {
    const de = L.component = B.component;
    if (yx(B, L, ee)) if (de.asyncDep && !de.asyncResolved) {
      W(de, L, ee);
      return;
    } else de.next = L, de.update();
    else L.el = B.el, de.vnode = L;
  }, j = (B, L, ee, de, oe, ue, Se) => {
    const ve = () => {
      if (B.isMounted) {
        let { next: Q, bu: he, u: Ce, parent: _e, vnode: Ae } = B;
        {
          const at = Tg(B);
          if (at) {
            Q && (Q.el = Ae.el, W(B, Q, Se)), at.asyncDep.then(() => {
              Xt(() => {
                B.isUnmounted || ae();
              }, oe);
            });
            return;
          }
        }
        let Re = Q, Ge;
        Jl(B, false), Q ? (Q.el = Ae.el, W(B, Q, Se)) : Q = Ae, he && Ui(he), (Ge = Q.props && Q.props.onVnodeBeforeUpdate) && zn(Ge, _e, Q, Ae), Jl(B, true);
        const ze = bf(B), dt = B.subTree;
        B.subTree = ze, m(dt, ze, d(dt.el), K(dt), B, oe, ue), Q.el = ze.el, Re === null && bx(B, ze.el), Ce && Xt(Ce, oe), (Ge = Q.props && Q.props.onVnodeUpdated) && Xt(() => zn(Ge, _e, Q, Ae), oe);
      } else {
        let Q;
        const { el: he, props: Ce } = L, { bm: _e, m: Ae, parent: Re, root: Ge, type: ze } = B, dt = Fo(L);
        Jl(B, false), _e && Ui(_e), !dt && (Q = Ce && Ce.onVnodeBeforeMount) && zn(Q, Re, L), Jl(B, true);
        {
          Ge.ce && Ge.ce._hasShadowRoot() && Ge.ce._injectChildStyle(ze);
          const at = B.subTree = bf(B);
          m(null, at, ee, de, B, oe, ue), L.el = at.el;
        }
        if (Ae && Xt(Ae, oe), !dt && (Q = Ce && Ce.onVnodeMounted)) {
          const at = L;
          Xt(() => zn(Q, Re, at), oe);
        }
        (L.shapeFlag & 256 || Re && Fo(Re.vnode) && Re.vnode.shapeFlag & 256) && B.a && Xt(B.a, oe), B.isMounted = true, L = ee = de = null;
      }
    };
    B.scope.on();
    const X = B.effect = new Mm(ve);
    B.scope.off();
    const ae = B.update = X.run.bind(X), Ie = B.job = X.runIfDirty.bind(X);
    Ie.i = B, Ie.id = B.uid, X.scheduler = () => cc(Ie), Jl(B, true), ae();
  }, W = (B, L, ee) => {
    L.component = B;
    const de = B.vnode.props;
    B.vnode = L, B.next = null, Sx(B, L.props, de, ee), Cx(B, L.children, ee), vl(), of(B), ml();
  }, Y = (B, L, ee, de, oe, ue, Se, ve, X = false) => {
    const ae = B && B.children, Ie = B ? B.shapeFlag : 0, Q = L.children, { patchFlag: he, shapeFlag: Ce } = L;
    if (he > 0) {
      if (he & 128) {
        R(ae, Q, ee, de, oe, ue, Se, ve, X);
        return;
      } else if (he & 256) {
        N(ae, Q, ee, de, oe, ue, Se, ve, X);
        return;
      }
    }
    Ce & 8 ? (Ie & 16 && pe(ae, oe, ue), Q !== ae && c(ee, Q)) : Ie & 16 ? Ce & 16 ? R(ae, Q, ee, de, oe, ue, Se, ve, X) : pe(ae, oe, ue, true) : (Ie & 8 && c(ee, ""), Ce & 16 && w(Q, ee, de, oe, ue, Se, ve, X));
  }, N = (B, L, ee, de, oe, ue, Se, ve, X) => {
    B = B || Ga, L = L || Ga;
    const ae = B.length, Ie = L.length, Q = Math.min(ae, Ie);
    let he;
    for (he = 0; he < Q; he++) {
      const Ce = L[he] = X ? sl(L[he]) : Gn(L[he]);
      m(B[he], Ce, ee, null, oe, ue, Se, ve, X);
    }
    ae > Ie ? pe(B, oe, ue, true, false, Q) : w(L, ee, de, oe, ue, Se, ve, X, Q);
  }, R = (B, L, ee, de, oe, ue, Se, ve, X) => {
    let ae = 0;
    const Ie = L.length;
    let Q = B.length - 1, he = Ie - 1;
    for (; ae <= Q && ae <= he; ) {
      const Ce = B[ae], _e = L[ae] = X ? sl(L[ae]) : Gn(L[ae]);
      if (aa(Ce, _e)) m(Ce, _e, ee, null, oe, ue, Se, ve, X);
      else break;
      ae++;
    }
    for (; ae <= Q && ae <= he; ) {
      const Ce = B[Q], _e = L[he] = X ? sl(L[he]) : Gn(L[he]);
      if (aa(Ce, _e)) m(Ce, _e, ee, null, oe, ue, Se, ve, X);
      else break;
      Q--, he--;
    }
    if (ae > Q) {
      if (ae <= he) {
        const Ce = he + 1, _e = Ce < Ie ? L[Ce].el : de;
        for (; ae <= he; ) m(null, L[ae] = X ? sl(L[ae]) : Gn(L[ae]), ee, _e, oe, ue, Se, ve, X), ae++;
      }
    } else if (ae > he) for (; ae <= Q; ) z(B[ae], oe, ue, true), ae++;
    else {
      const Ce = ae, _e = ae, Ae = /* @__PURE__ */ new Map();
      for (ae = _e; ae <= he; ae++) {
        const ot = L[ae] = X ? sl(L[ae]) : Gn(L[ae]);
        ot.key != null && Ae.set(ot.key, ae);
      }
      let Re, Ge = 0;
      const ze = he - _e + 1;
      let dt = false, at = 0;
      const an = new Array(ze);
      for (ae = 0; ae < ze; ae++) an[ae] = 0;
      for (ae = Ce; ae <= Q; ae++) {
        const ot = B[ae];
        if (Ge >= ze) {
          z(ot, oe, ue, true);
          continue;
        }
        let on;
        if (ot.key != null) on = Ae.get(ot.key);
        else for (Re = _e; Re <= he; Re++) if (an[Re - _e] === 0 && aa(ot, L[Re])) {
          on = Re;
          break;
        }
        on === void 0 ? z(ot, oe, ue, true) : (an[on - _e] = ae + 1, on >= at ? at = on : dt = true, m(ot, L[on], ee, null, oe, ue, Se, ve, X), Ge++);
      }
      const Nn = dt ? Px(an) : Ga;
      for (Re = Nn.length - 1, ae = ze - 1; ae >= 0; ae--) {
        const ot = _e + ae, on = L[ot], Hn = L[ot + 1], Ea = ot + 1 < Ie ? Hn.el || Ag(Hn) : de;
        an[ae] === 0 ? m(null, on, ee, Ea, oe, ue, Se, ve, X) : dt && (Re < 0 || ae !== Nn[Re] ? Z(on, ee, Ea, 2) : Re--);
      }
    }
  }, Z = (B, L, ee, de, oe = null) => {
    const { el: ue, type: Se, transition: ve, children: X, shapeFlag: ae } = B;
    if (ae & 6) {
      Z(B.component.subTree, L, ee, de);
      return;
    }
    if (ae & 128) {
      B.suspense.move(L, ee, de);
      return;
    }
    if (ae & 64) {
      Se.move(B, L, ee, xe);
      return;
    }
    if (Se === be) {
      l(ue, L, ee);
      for (let Q = 0; Q < X.length; Q++) Z(X[Q], L, ee, de);
      l(B.anchor, L, ee);
      return;
    }
    if (Se === ks) {
      V(B, L, ee);
      return;
    }
    if (de !== 2 && ae & 1 && ve) if (de === 0) ve.beforeEnter(ue), l(ue, L, ee), Xt(() => ve.enter(ue), oe);
    else {
      const { leave: Q, delayLeave: he, afterLeave: Ce } = ve, _e = () => {
        B.ctx.isUnmounted ? a(ue) : l(ue, L, ee);
      }, Ae = () => {
        ue._isLeaving && ue[Un](true), Q(ue, () => {
          _e(), Ce && Ce();
        });
      };
      he ? he(ue, _e, Ae) : Ae();
    }
    else l(ue, L, ee);
  }, z = (B, L, ee, de = false, oe = false) => {
    const { type: ue, props: Se, ref: ve, children: X, dynamicChildren: ae, shapeFlag: Ie, patchFlag: Q, dirs: he, cacheIndex: Ce } = B;
    if (Q === -2 && (oe = false), ve != null && (vl(), Ro(ve, null, ee, B, true), ml()), Ce != null && (L.renderCache[Ce] = void 0), Ie & 256) {
      L.ctx.deactivate(B);
      return;
    }
    const _e = Ie & 1 && he, Ae = !Fo(B);
    let Re;
    if (Ae && (Re = Se && Se.onVnodeBeforeUnmount) && zn(Re, L, B), Ie & 6) ie(B.component, ee, de);
    else {
      if (Ie & 128) {
        B.suspense.unmount(ee, de);
        return;
      }
      _e && Zl(B, null, L, "beforeUnmount"), Ie & 64 ? B.type.remove(B, L, ee, xe, de) : ae && !ae.hasOnce && (ue !== be || Q > 0 && Q & 64) ? pe(ae, L, ee, false, true) : (ue === be && Q & 384 || !oe && Ie & 16) && pe(X, L, ee), de && O(B);
    }
    (Ae && (Re = Se && Se.onVnodeUnmounted) || _e) && Xt(() => {
      Re && zn(Re, L, B), _e && Zl(B, null, L, "unmounted");
    }, ee);
  }, O = (B) => {
    const { type: L, el: ee, anchor: de, transition: oe } = B;
    if (L === be) {
      G(ee, de);
      return;
    }
    if (L === ks) {
      I(B);
      return;
    }
    const ue = () => {
      a(ee), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if (B.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: Se, delayLeave: ve } = oe, X = () => Se(ee, ue);
      ve ? ve(B.el, ue, X) : X();
    } else ue();
  }, G = (B, L) => {
    let ee;
    for (; B !== L; ) ee = f(B), a(B), B = ee;
    a(L);
  }, ie = (B, L, ee) => {
    const { bum: de, scope: oe, job: ue, subTree: Se, um: ve, m: X, a: ae } = B;
    xf(X), xf(ae), de && Ui(de), oe.stop(), ue && (ue.flags |= 8, z(Se, B, L, ee)), ve && Xt(ve, L), Xt(() => {
      B.isUnmounted = true;
    }, L);
  }, pe = (B, L, ee, de = false, oe = false, ue = 0) => {
    for (let Se = ue; Se < B.length; Se++) z(B[Se], L, ee, de, oe);
  }, K = (B) => {
    if (B.shapeFlag & 6) return K(B.component.subTree);
    if (B.shapeFlag & 128) return B.suspense.next();
    const L = f(B.anchor || B.el), ee = L && L[ng];
    return ee ? f(ee) : L;
  };
  let fe = false;
  const Te = (B, L, ee) => {
    let de;
    B == null ? L._vnode && (z(L._vnode, null, null, true), de = L._vnode.component) : m(L._vnode || null, B, L, null, null, null, ee), L._vnode = B, fe || (fe = true, of(de), Jm(), fe = false);
  }, xe = { p: m, um: z, m: Z, r: O, mt: A, mc: w, pc: Y, pbc: P, n: K, o: e };
  return { render: Te, hydrate: void 0, createApp: dx(Te) };
}
function xs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jl({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ix(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hc(e, t, n = false) {
  const l = e.children, a = t.children;
  if (Oe(l) && Oe(a)) for (let o = 0; o < l.length; o++) {
    const i = l[o];
    let r = a[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = a[o] = sl(a[o]), r.el = i.el), !n && r.patchFlag !== -2 && hc(i, r)), r.type === hi && (r.patchFlag === -1 && (r = a[o] = sl(r)), r.el = i.el), r.type === Jt && !r.el && (r.el = i.el);
  }
}
function Px(e) {
  const t = e.slice(), n = [0];
  let l, a, o, i, r;
  const s = e.length;
  for (l = 0; l < s; l++) {
    const u = e[l];
    if (u !== 0) {
      if (a = n[n.length - 1], e[a] < u) {
        t[l] = a, n.push(l);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; ) r = o + i >> 1, e[n[r]] < u ? o = r + 1 : i = r;
      u < e[n[o]] && (o > 0 && (t[l] = n[o - 1]), n[o] = l);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
  return n;
}
function Tg(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Tg(t);
}
function xf(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ag(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Ag(t.subTree) : null;
}
const Dg = (e) => e.__isSuspense;
function Tx(e, t) {
  t && t.pendingBranch ? Oe(e) ? t.effects.push(...e) : t.effects.push(e) : WS(e);
}
const be = Symbol.for("v-fgt"), hi = Symbol.for("v-txt"), Jt = Symbol.for("v-cmt"), ks = Symbol.for("v-stc"), Oo = [];
let bn = null;
function Ne(e = false) {
  Oo.push(bn = e ? null : []);
}
function Ax() {
  Oo.pop(), bn = Oo[Oo.length - 1] || null;
}
let Yo = 1;
function ir(e, t = false) {
  Yo += e, e < 0 && bn && t && (bn.hasOnce = true);
}
function Mg(e) {
  return e.dynamicChildren = Yo > 0 ? bn || Ga : null, Ax(), Yo > 0 && bn && bn.push(e), e;
}
function Qe(e, t, n, l, a, o) {
  return Mg(S(e, t, n, l, a, o, true));
}
function Ut(e, t, n, l, a) {
  return Mg(g(e, t, n, l, a, true));
}
function Ko(e) {
  return e ? e.__v_isVNode === true : false;
}
function aa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Eg = ({ key: e }) => e ?? null, Yi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || Ct(e) || We(e) ? { i: yn, r: e, k: t, f: !!n } : e : null);
function S(e, t = null, n = null, l = 0, a = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && Eg(t), ref: t && Yi(t), scopeId: eg, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: l, dynamicProps: a, dynamicChildren: null, appContext: null, ctx: yn };
  return r ? (yc(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= xt(n) ? 8 : 16), Yo > 0 && !i && bn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && bn.push(s), s;
}
const g = Dx;
function Dx(e, t = null, n = null, l = 0, a = null, o = false) {
  if ((!e || e === nx) && (e = Jt), Ko(e)) {
    const r = yl(e, t, true);
    return n && yc(r, n), Yo > 0 && !o && bn && (r.shapeFlag & 6 ? bn[bn.indexOf(e)] = r : bn.push(r)), r.patchFlag = -2, r;
  }
  if (Nx(e) && (e = e.__vccOpts), t) {
    t = Bg(t);
    let { class: r, style: s } = t;
    r && !xt(r) && (t.class = ne(r)), it(s) && (mi(s) && !Oe(s) && (s = $t({}, s)), t.style = ge(s));
  }
  const i = xt(e) ? 1 : Dg(e) ? 128 : lg(e) ? 64 : it(e) ? 4 : We(e) ? 2 : 0;
  return S(e, t, n, l, a, i, o, true);
}
function Bg(e) {
  return e ? mi(e) || wg(e) ? $t({}, e) : e : null;
}
function yl(e, t, n = false, l = false) {
  const { props: a, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? J(a || {}, t) : a, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && Eg(u), ref: t && t.ref ? n && o ? Oe(o) ? o.concat(Yi(t)) : [o, Yi(t)] : Yi(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && yl(e.ssContent), ssFallback: e.ssFallback && yl(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && l && va(c, s.clone(c)), c;
}
function Le(e = " ", t = 0) {
  return g(hi, null, e, t);
}
function Qt(e = "", t = false) {
  return t ? (Ne(), Ut(Jt, null, e)) : g(Jt, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? g(Jt) : Oe(e) ? g(be, null, e.slice()) : Ko(e) ? sl(e) : g(hi, null, String(e));
}
function sl(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yl(e);
}
function yc(e, t) {
  let n = 0;
  const { shapeFlag: l } = e;
  if (t == null) t = null;
  else if (Oe(t)) n = 16;
  else if (typeof t == "object") if (l & 65) {
    const a = t.default;
    a && (a._c && (a._d = false), yc(e, a()), a._c && (a._d = true));
    return;
  } else {
    n = 32;
    const a = t._;
    !a && !wg(t) ? t._ctx = yn : a === 3 && yn && (yn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else We(t) ? (t = { default: t, _ctx: yn }, n = 32) : (t = String(t), l & 64 ? (n = 16, t = [Le(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function J(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    for (const a in l) if (a === "class") t.class !== l.class && (t.class = ne([t.class, l.class]));
    else if (a === "style") t.style = ge([t.style, l.style]);
    else if (wr(a)) {
      const o = t[a], i = l[a];
      i && o !== i && !(Oe(o) && o.includes(i)) && (t[a] = o ? [].concat(o, i) : i);
    } else a !== "" && (t[a] = l[a]);
  }
  return t;
}
function zn(e, t, n, l = null) {
  Rn(e, t, 7, [n, l]);
}
const Mx = bg();
let Ex = 0;
function Bx(e, t, n) {
  const l = e.type, a = (t ? t.appContext : e.appContext) || Mx, o = { uid: Ex++, vnode: e, type: l, parent: t, appContext: a, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Am(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(a.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: _g(l, a), emitsOptions: pg(l, a), emit: null, emitted: null, propsDefaults: gt, inheritAttrs: l.inheritAttrs, ctx: gt, data: gt, props: gt, attrs: gt, slots: gt, refs: gt, setupState: gt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = vx.bind(null, o), e.ce && e.ce(o), o;
}
let en = null;
const yi = () => en || yn;
let rr, eu;
{
  const e = Vr(), t = (n, l) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(l), (o) => {
      a.length > 1 ? a.forEach((i) => i(o)) : a[0](o);
    };
  };
  rr = t("__VUE_INSTANCE_SETTERS__", (n) => en = n), eu = t("__VUE_SSR_SETTERS__", (n) => Xo = n);
}
const bi = (e) => {
  const t = en;
  return rr(e), e.scope.on(), () => {
    e.scope.off(), rr(t);
  };
}, kf = () => {
  en && en.scope.off(), rr(null);
};
function $g(e) {
  return e.vnode.shapeFlag & 4;
}
let Xo = false;
function $x(e, t = false, n = false) {
  t && eu(t);
  const { props: l, children: a } = e.vnode, o = $g(e);
  px(e, l, o, t), wx(e, a, n || t);
  const i = o ? Rx(e, t) : void 0;
  return t && eu(false), i;
}
function Rx(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ax);
  const { setup: l } = n;
  if (l) {
    vl();
    const a = e.setupContext = l.length > 1 ? Lx(e) : null, o = bi(e), i = gi(l, e, 0, [e.props, a]), r = wm(i);
    if (ml(), o(), (r || e.sp) && !Fo(e) && cg(e), r) {
      if (i.then(kf, kf), t) return i.then((s) => {
        wf(e, s);
      }).catch((s) => {
        Pr(s, e, 0);
      });
      e.asyncDep = i;
    } else wf(e, i);
  } else Rg(e);
}
function wf(e, t, n) {
  We(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : it(t) && (e.setupState = Km(t)), Rg(e);
}
function Rg(e, t, n) {
  const l = e.type;
  e.render || (e.render = l.render || Kn);
  {
    const a = bi(e);
    vl();
    try {
      ox(e);
    } finally {
      ml(), a();
    }
  }
}
const Fx = { get(e, t) {
  return Zt(e, "get", ""), e[t];
} };
function Lx(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Fx), slots: e.slots, emit: e.emit, expose: t };
}
function Br(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Km(Gm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Lo) return Lo[n](e);
  }, has(t, n) {
    return n in t || n in Lo;
  } })) : e.proxy;
}
function Ox(e, t = true) {
  return We(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nx(e) {
  return We(e) && "__vccOpts" in e;
}
const _ = (e, t) => LS(e, t, Xo);
function xl(e, t, n) {
  try {
    ir(-1);
    const l = arguments.length;
    return l === 2 ? it(t) && !Oe(t) ? Ko(t) ? g(e, null, [t]) : g(e, t) : g(e, null, t) : (l > 3 ? n = Array.prototype.slice.call(arguments, 2) : l === 3 && Ko(n) && (n = [n]), g(e, t, n));
  } finally {
    ir(1);
  }
}
const Hx = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tu;
const Cf = typeof window < "u" && window.trustedTypes;
if (Cf) try {
  tu = Cf.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Fg = tu ? (e) => tu.createHTML(e) : (e) => e, zx = "http://www.w3.org/2000/svg", Wx = "http://www.w3.org/1998/Math/MathML", rl = typeof document < "u" ? document : null, _f = rl && rl.createElement("template"), jx = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, l) => {
  const a = t === "svg" ? rl.createElementNS(zx, e) : t === "mathml" ? rl.createElementNS(Wx, e) : n ? rl.createElement(e, { is: n }) : rl.createElement(e);
  return e === "select" && l && l.multiple != null && a.setAttribute("multiple", l.multiple), a;
}, createText: (e) => rl.createTextNode(e), createComment: (e) => rl.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => rl.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, l, a, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (a && (a === o || a.nextSibling)) for (; t.insertBefore(a.cloneNode(true), n), !(a === o || !(a = a.nextSibling)); ) ;
  else {
    _f.innerHTML = Fg(l === "svg" ? `<svg>${e}</svg>` : l === "mathml" ? `<math>${e}</math>` : e);
    const r = _f.content;
    if (l === "svg" || l === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Al = "transition", wo = "animation", Qa = Symbol("_vtc"), Lg = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Og = $t({}, ig, Lg), Ux = (e) => (e.displayName = "Transition", e.props = Og, e), Nl = Ux((e, { slots: t }) => xl(qS, Ng(e), t)), Ql = (e, t = []) => {
  Oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Vf = (e) => e ? Oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Ng(e) {
  const t = {};
  for (const D in e) D in Lg || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: l, duration: a, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, p = Gx(a), m = p && p[0], h = p && p[1], { onBeforeEnter: b, onEnter: x, onEnterCancelled: V, onLeave: I, onLeaveCancelled: k, onBeforeAppear: y = b, onAppear: C = x, onAppearCancelled: w = V } = t, T = (D, E, A, F) => {
    D._enterCancelled = F, Dl(D, E ? c : r), Dl(D, E ? u : i), A && A();
  }, P = (D, E) => {
    D._isLeaving = false, Dl(D, d), Dl(D, v), Dl(D, f), E && E();
  }, M = (D) => (E, A) => {
    const F = D ? C : x, j = () => T(E, D, A);
    Ql(F, [E, j]), If(() => {
      Dl(E, D ? s : o), Wn(E, D ? c : r), Vf(F) || Pf(E, l, m, j);
    });
  };
  return $t(t, { onBeforeEnter(D) {
    Ql(b, [D]), Wn(D, o), Wn(D, i);
  }, onBeforeAppear(D) {
    Ql(y, [D]), Wn(D, s), Wn(D, u);
  }, onEnter: M(false), onAppear: M(true), onLeave(D, E) {
    D._isLeaving = true;
    const A = () => P(D, E);
    Wn(D, d), D._enterCancelled ? (Wn(D, f), nu(D)) : (nu(D), Wn(D, f)), If(() => {
      D._isLeaving && (Dl(D, d), Wn(D, v), Vf(I) || Pf(D, l, h, A));
    }), Ql(I, [D, A]);
  }, onEnterCancelled(D) {
    T(D, false, void 0, true), Ql(V, [D]);
  }, onAppearCancelled(D) {
    T(D, true, void 0, true), Ql(w, [D]);
  }, onLeaveCancelled(D) {
    P(D), Ql(k, [D]);
  } });
}
function Gx(e) {
  if (e == null) return null;
  if (it(e)) return [ws(e.enter), ws(e.leave)];
  {
    const t = ws(e);
    return [t, t];
  }
}
function ws(e) {
  return aS(e);
}
function Wn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qa] || (e[Qa] = /* @__PURE__ */ new Set())).add(t);
}
function Dl(e, t) {
  t.split(/\s+/).forEach((l) => l && e.classList.remove(l));
  const n = e[Qa];
  n && (n.delete(t), n.size || (e[Qa] = void 0));
}
function If(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yx = 0;
function Pf(e, t, n, l) {
  const a = e._endId = ++Yx, o = () => {
    a === e._endId && l();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = Hg(e, t);
  if (!i) return l();
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
function Hg(e, t) {
  const n = window.getComputedStyle(e), l = (p) => (n[p] || "").split(", "), a = l(`${Al}Delay`), o = l(`${Al}Duration`), i = Tf(a, o), r = l(`${wo}Delay`), s = l(`${wo}Duration`), u = Tf(r, s);
  let c = null, d = 0, f = 0;
  t === Al ? i > 0 && (c = Al, d = i, f = o.length) : t === wo ? u > 0 && (c = wo, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? Al : wo : null, f = c ? c === Al ? o.length : s.length : 0);
  const v = c === Al && /\b(?:transform|all)(?:,|$)/.test(l(`${Al}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function Tf(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, l) => Af(n) + Af(e[l])));
}
function Af(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Kx(e, t, n) {
  const l = e[Qa];
  l && (t = (t ? [t, ...l] : [...l]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sr = Symbol("_vod"), zg = Symbol("_vsh"), On = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[sr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Co(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: l }) {
  !t != !n && (l ? t ? (l.beforeEnter(e), Co(e, true), l.enter(e)) : l.leave(e, () => {
    Co(e, false);
  }) : Co(e, t));
}, beforeUnmount(e, { value: t }) {
  Co(e, t);
} };
function Co(e, t) {
  e.style.display = t ? e[sr] : "none", e[zg] = !t;
}
const Xx = Symbol(""), qx = /(?:^|;)\s*display\s*:/;
function Zx(e, t, n) {
  const l = e.style, a = xt(n);
  let o = false;
  if (n && !a) {
    if (t) if (xt(t)) for (const i of t.split(";")) {
      const r = i.slice(0, i.indexOf(":")).trim();
      n[r] == null && Ki(l, r, "");
    }
    else for (const i in t) n[i] == null && Ki(l, i, "");
    for (const i in n) i === "display" && (o = true), Ki(l, i, n[i]);
  } else if (a) {
    if (t !== n) {
      const i = l[Xx];
      i && (n += ";" + i), l.cssText = n, o = qx.test(n);
    }
  } else t && e.removeAttribute("style");
  sr in e && (e[sr] = o ? l.display : "", e[zg] && (l.display = "none"));
}
const Df = /\s*!important$/;
function Ki(e, t, n) {
  if (Oe(n)) n.forEach((l) => Ki(e, t, l));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const l = Jx(e, t);
    Df.test(n) ? e.setProperty(ka(l), n.replace(Df, ""), "important") : e[l] = n;
  }
}
const Mf = ["Webkit", "Moz", "ms"], Cs = {};
function Jx(e, t) {
  const n = Cs[t];
  if (n) return n;
  let l = fn(t);
  if (l !== "filter" && l in e) return Cs[t] = l;
  l = el(l);
  for (let a = 0; a < Mf.length; a++) {
    const o = Mf[a] + l;
    if (o in e) return Cs[t] = o;
  }
  return t;
}
const Ef = "http://www.w3.org/1999/xlink";
function Bf(e, t, n, l, a, o = dS(t)) {
  l && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ef, t.slice(6, t.length)) : e.setAttributeNS(Ef, t, n) : n == null || o && !Im(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Xn(n) ? String(n) : n);
}
function $f(e, t, n, l, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fg(n) : n);
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
    r === "boolean" ? n = Im(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(a || t);
}
function Ha(e, t, n, l) {
  e.addEventListener(t, n, l);
}
function Qx(e, t, n, l) {
  e.removeEventListener(t, n, l);
}
const Rf = Symbol("_vei");
function e0(e, t, n, l, a = null) {
  const o = e[Rf] || (e[Rf] = {}), i = o[t];
  if (l && i) i.value = l;
  else {
    const [r, s] = t0(t);
    if (l) {
      const u = o[t] = a0(l, a);
      Ha(e, r, u, s);
    } else i && (Qx(e, r, i, s), o[t] = void 0);
  }
}
const Ff = /(?:Once|Passive|Capture)$/;
function t0(e) {
  let t;
  if (Ff.test(e)) {
    t = {};
    let l;
    for (; l = e.match(Ff); ) e = e.slice(0, e.length - l[0].length), t[l[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : ka(e.slice(2)), t];
}
let _s = 0;
const n0 = Promise.resolve(), l0 = () => _s || (n0.then(() => _s = 0), _s = Date.now());
function a0(e, t) {
  const n = (l) => {
    if (!l._vts) l._vts = Date.now();
    else if (l._vts <= n.attached) return;
    Rn(o0(l, n.value), t, 5, [l]);
  };
  return n.value = e, n.attached = l0(), n;
}
function o0(e, t) {
  if (Oe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((l) => (a) => !a._stopped && l && l(a));
  } else return t;
}
const Lf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, i0 = (e, t, n, l, a, o) => {
  const i = a === "svg";
  t === "class" ? Kx(e, l, i) : t === "style" ? Zx(e, n, l) : wr(t) ? ec(t) || e0(e, t, n, l, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : r0(e, t, l, i)) ? ($f(e, t, l), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bf(e, t, l, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !xt(l)) ? $f(e, fn(t), l, o, t) : (t === "true-value" ? e._trueValue = l : t === "false-value" && (e._falseValue = l), Bf(e, t, l, i));
};
function r0(e, t, n, l) {
  if (l) return !!(t === "innerHTML" || t === "textContent" || t in e && Lf(t) && We(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE") return false;
  }
  return Lf(t) && xt(n) ? false : t in e;
}
const Wg = /* @__PURE__ */ new WeakMap(), jg = /* @__PURE__ */ new WeakMap(), ur = Symbol("_moveCb"), Of = Symbol("_enterCb"), s0 = (e) => (delete e.props.mode, e), u0 = s0({ name: "TransitionGroup", props: $t({}, Og, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = yi(), l = og();
  let a, o;
  return Dr(() => {
    if (!a.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!v0(a[0].el, n.vnode.el, i)) {
      a = [];
      return;
    }
    a.forEach(c0), a.forEach(d0);
    const r = a.filter(f0);
    nu(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Wn(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[ur] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[ur] = null, Dl(u, i));
      };
      u.addEventListener("transitionend", d);
    }), a = [];
  }), () => {
    const i = De(e), r = Ng(i);
    let s = i.tag || be;
    if (a = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (a.push(c), va(c, Go(c, r, l, n)), Wg.set(c, Ug(c.el)));
    }
    o = t.default ? fc(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && va(c, Go(c, r, l, n));
    }
    return g(s, null, o);
  };
} }), bc = u0;
function c0(e) {
  const t = e.el;
  t[ur] && t[ur](), t[Of] && t[Of]();
}
function d0(e) {
  jg.set(e, Ug(e.el));
}
function f0(e) {
  const t = Wg.get(e), n = jg.get(e), l = t.left - n.left, a = t.top - n.top;
  if (l || a) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${l / s}px,${a / u}px)`, i.transitionDuration = "0s", e;
  }
}
function Ug(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function v0(e, t, n) {
  const l = e.cloneNode(), a = e[Qa];
  a && a.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && l.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && l.classList.add(r)), l.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(l);
  const { hasTransform: i } = Hg(l);
  return o.removeChild(l), i;
}
const Nf = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Oe(t) ? (n) => Ui(t, n) : t;
};
function m0(e) {
  e.target.composing = true;
}
function Hf(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const Vs = Symbol("_assign");
function zf(e, t, n) {
  return t && (e = e.trim()), n && (e = nc(e)), e;
}
const $r = { created(e, { modifiers: { lazy: t, trim: n, number: l } }, a) {
  e[Vs] = Nf(a);
  const o = l || a.props && a.props.type === "number";
  Ha(e, t ? "change" : "input", (i) => {
    i.target.composing || e[Vs](zf(e.value, n, o));
  }), (n || o) && Ha(e, "change", () => {
    e.value = zf(e.value, n, o);
  }), t || (Ha(e, "compositionstart", m0), Ha(e, "compositionend", Hf), Ha(e, "change", Hf));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: l, trim: a, number: o } }, i) {
  if (e[Vs] = Nf(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? nc(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (l && t === n || a && e.value.trim() === s) || (e.value = s));
} }, g0 = ["ctrl", "shift", "alt", "meta"], h0 = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => g0.some((n) => e[`${n}Key`] && !t.includes(n)) }, Ri = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), l = t.join(".");
  return n[l] || (n[l] = ((a, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = h0[t[i]];
      if (r && r(a, t)) return;
    }
    return e(a, ...o);
  }));
}, y0 = $t({ patchProp: i0 }, jx);
let Wf;
function Gg() {
  return Wf || (Wf = _x(y0));
}
const Yg = ((...e) => {
  Gg().render(...e);
}), b0 = ((...e) => {
  const t = Gg().createApp(...e), { mount: n } = t;
  return t.mount = (l) => {
    const a = S0(l);
    if (!a) return;
    const o = t._component;
    !We(o) && !o.render && !o.template && (o.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const i = n(a, false, p0(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), i;
  }, t;
});
function p0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function S0(e) {
  return xt(e) ? document.querySelector(e) : e;
}
const jf = () => {
};
function x0(e) {
  const t = `[${e}]`;
  return { debug: jf, info: jf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Uf = 5;
function Gf(e, t, n) {
  const l = t * n, a = Math.max(1, Math.round(e / (l * Uf)));
  return e / (a * Uf);
}
function Yf(e, t, n) {
  const l = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(l / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function k0(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, l = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: l };
}
function Kf(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function Is(e, t) {
  return e * t.gridPitch / t.dpr;
}
const pc = 1, Sc = `gol.gridBlankZones.v${pc}`, w0 = 128, C0 = /* @__PURE__ */ new Set(["minor", "major", "both"]), _0 = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function Ps(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Wa(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function V0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function I0(e) {
  return typeof e == "string" && C0.has(e) ? e : "both";
}
function P0(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && _0.has(t.style) ? t.style : "none", l = Ps(Wa(t.widthCells) ?? 1, 1, 4), a = typeof t.opacity == "number" ? t.opacity : 1, o = Ps(a, 0, 1), i = { style: n, widthCells: l, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = Ps(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, Wa(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function T0(e) {
  return typeof e == "boolean" ? e : true;
}
function Xf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function lu(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, l = Wa(n.x1), a = Wa(n.y1), o = Wa(n.x2), i = Wa(n.y2);
  if (l === null || a === null || o === null || i === null) return null;
  const r = Math.min(l, o), s = Math.max(l, o), u = Math.min(a, i), c = Math.max(a, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : V0(), x1: r, y1: u, x2: s, y2: c, mode: I0(n.mode), edge: P0(n.edge), enabled: T0(n.enabled), createdAt: Xf(n.createdAt, t), updatedAt: Xf(n.updatedAt, t) };
}
function xc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const l of e) {
    if (n.length >= w0) break;
    const a = lu(l, t);
    a && n.push(a);
  }
  return n;
}
function kc() {
  return typeof localStorage < "u";
}
function A0() {
  if (!kc()) return [];
  try {
    const e = localStorage.getItem(Sc);
    if (!e) return [];
    const t = JSON.parse(e);
    return t.version !== pc ? [] : xc(t.zones);
  } catch {
    return [];
  }
}
function D0(e) {
  if (!kc()) return;
  const t = { version: pc, zones: xc(e) };
  localStorage.setItem(Sc, JSON.stringify(t));
}
function M0() {
  kc() && localStorage.removeItem(Sc);
}
function E0(e = {}) {
  const t = H(A0());
  function n(u) {
    const c = xc(u);
    return t.value = c, D0(c), c;
  }
  function l(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetZones) == null ? void 0 : _a3.call(e, c);
  }
  function a(u) {
    var _a3;
    const c = lu(u);
    c && (n([...t.value, c]), (_a3 = e.onAddZone) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = lu(u);
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
    t.value.length !== 0 && (t.value = [], M0(), (_a3 = e.onClearZones) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { zones: t, setZones: l, addZone: a, updateZone: o, removeZone: i, clearZones: r, syncFromWorker: s };
}
const B0 = 32, wc = 1, Cc = `gol.decals.v${wc}`, sn = [0.49, 0.3, 1, 0.6], $0 = /* @__PURE__ */ new Set(["solid", "checkerboard", "stripes", "dots", "bitmap"]), R0 = /* @__PURE__ */ new Set(["alpha", "multiply", "screen"]);
function Bl(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function gn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function Fi(e) {
  const t = gn(e);
  return t === null ? null : Math.trunc(t);
}
function F0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function L0(e) {
  return typeof e == "string" && $0.has(e) ? e : "solid";
}
function O0(e) {
  return typeof e == "string" && R0.has(e) ? e : "alpha";
}
function N0(e) {
  const t = e && typeof e == "object" ? e : {}, n = L0(t.kind), l = { kind: n };
  return n === "solid" ? (l.coverage = Bl(gn(t.coverage) ?? 1, 0, 1), l.solidR = Bl(gn(t.solidR) ?? sn[0], 0, 1), l.solidG = Bl(gn(t.solidG) ?? sn[1], 0, 1), l.solidB = Bl(gn(t.solidB) ?? sn[2], 0, 1)) : n === "checkerboard" ? l.cellSize = Math.max(1, gn(t.cellSize) ?? 2) : n === "stripes" ? l.pitchCells = Math.max(2, gn(t.pitchCells) ?? 4) : n === "dots" && (l.dotRadius = Math.max(0.1, gn(t.dotRadius) ?? 0.4), l.dotSpacing = Math.max(2, gn(t.dotSpacing) ?? 3)), l;
}
function H0(e) {
  return !Array.isArray(e) || e.length < 4 ? [...sn] : [Bl(gn(e[0]) ?? sn[0], 0, 1), Bl(gn(e[1]) ?? sn[1], 0, 1), Bl(gn(e[2]) ?? sn[2], 0, 1), Bl(gn(e[3]) ?? sn[3], 0, 1)];
}
function z0(e) {
  return typeof e == "boolean" ? e : true;
}
function qf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function au(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, l = Fi(n.x1), a = Fi(n.y1), o = Fi(n.x2), i = Fi(n.y2);
  return l === null || a === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : F0(), x1: Math.min(l, o), y1: Math.min(a, i), x2: Math.max(l, o), y2: Math.max(a, i), pattern: N0(n.pattern), tint: H0(n.tint), blendMode: O0(n.blendMode), suppressCells: typeof n.suppressCells == "boolean" ? n.suppressCells : false, enabled: z0(n.enabled), createdAt: qf(n.createdAt, t), updatedAt: qf(n.updatedAt, t) };
}
function _c(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const l of e) {
    if (n.length >= B0) break;
    const a = au(l, t);
    a && n.push(a);
  }
  return n;
}
function Vc() {
  return typeof localStorage < "u";
}
function W0() {
  if (!Vc()) return [];
  try {
    const e = localStorage.getItem(Cc);
    if (!e) return [];
    const t = JSON.parse(e);
    return t.version !== wc ? [] : _c(t.decals);
  } catch {
    return [];
  }
}
function j0(e) {
  if (!Vc()) return;
  const t = { version: wc, decals: _c(e) };
  localStorage.setItem(Cc, JSON.stringify(t));
}
function U0() {
  Vc() && localStorage.removeItem(Cc);
}
function G0(e = {}) {
  const t = H(W0());
  function n(u) {
    const c = _c(u);
    return t.value = c, j0(c), c;
  }
  function l(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetDecals) == null ? void 0 : _a3.call(e, c);
  }
  function a(u) {
    var _a3;
    const c = au(u);
    c && (n([...t.value, c]), (_a3 = e.onAddDecal) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = au(u);
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
    t.value.length !== 0 && (t.value = [], U0(), (_a3 = e.onClearDecals) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { decals: t, setDecals: l, addDecal: a, updateDecal: o, removeDecal: i, clearDecals: r, syncFromWorker: s };
}
const eo = 4, Xi = 8, Kg = 2, Ic = "gol.hires";
function Li(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Y0() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Zf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function cr(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, l = Li(n.x1), a = Li(n.y1), o = Li(n.x2), i = Li(n.y2);
  return l === null || a === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Y0(), x1: Math.min(l, o), y1: Math.min(a, i), x2: Math.max(l, o), y2: Math.max(a, i), multiplier: eo, enabled: typeof n.enabled == "boolean" ? n.enabled : true, showGrid: typeof n.showGrid == "boolean" ? n.showGrid : true, showBaseGrid: typeof n.showBaseGrid == "boolean" ? n.showBaseGrid : true, showBorder: typeof n.showBorder == "boolean" ? n.showBorder : true, createdAt: Zf(n.createdAt, t), updatedAt: Zf(n.updatedAt, t) };
}
function K0(e, t) {
  return e.x1 <= t.x2 && e.x2 >= t.x1 && e.y1 <= t.y2 && e.y2 >= t.y1;
}
function Pc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const l of e) {
    if (n.length >= Xi) break;
    const a = cr(l, t);
    !a || n.some((i) => K0(i, a)) || n.push(a);
  }
  return n;
}
function Tc() {
  return typeof localStorage < "u";
}
const Jf = "gol.hires.v1";
function X0() {
  if (!Tc()) return [];
  try {
    let e = localStorage.getItem(Ic);
    if (e || (e = localStorage.getItem(Jf), e && localStorage.removeItem(Jf)), !e) return [];
    const t = JSON.parse(e);
    if (typeof t.version != "number" || t.version > Kg) return [];
    if (t.version === 1 && t.region) {
      const n = cr(t.region);
      return n ? [n] : [];
    }
    return Pc(t.regions);
  } catch {
    return [];
  }
}
function q0(e) {
  if (!Tc()) return;
  const t = { version: Kg, regions: Pc(e) };
  localStorage.setItem(Ic, JSON.stringify(t));
}
function Z0() {
  Tc() && localStorage.removeItem(Ic);
}
function J0(e = {}) {
  const t = H(X0());
  function n(s) {
    const u = Pc(s);
    t.value = u, q0(u);
  }
  function l(s) {
    var _a3;
    const u = cr(s);
    u && (n([...t.value.filter((c) => c.id !== u.id), u]), (_a3 = e.onAddRegion) == null ? void 0 : _a3.call(e, u));
  }
  function a(s) {
    var _a3;
    const u = cr(s);
    if (!u) return;
    const c = t.value.findIndex((f) => f.id === u.id);
    if (c < 0) return;
    const d = t.value.slice();
    d[c] = u, n(d), (_a3 = e.onUpdateRegion) == null ? void 0 : _a3.call(e, u);
  }
  function o(s) {
    var _a3;
    t.value.some((u) => u.id === s) && (n(t.value.filter((u) => u.id !== s)), (_a3 = e.onRemoveRegion) == null ? void 0 : _a3.call(e, s));
  }
  function i() {
    var _a3;
    t.value.length !== 0 && (t.value = [], Z0(), (_a3 = e.onClearRegions) == null ? void 0 : _a3.call(e));
  }
  function r(s) {
    n(s);
  }
  return { regions: t, addRegion: l, updateRegion: a, removeRegion: o, clearRegions: i, syncFromWorker: r };
}
const to = "#1a1a2e", qi = 8, Ac = 1, Dc = `gol.text.v${Ac}`, qo = "bold 24px monospace", Q0 = /* @__PURE__ */ new Set(["sdf", "cells", "both"]), ek = /^#[0-9a-fA-F]{6}$/;
function tk(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function Ts(e) {
  const t = tk(e);
  return t === null ? null : Math.trunc(t);
}
function nk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Qf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function ou(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e;
  if (typeof n.text != "string" || n.text.length === 0) return null;
  const l = Ts(n.cellX), a = Ts(n.cellY);
  if (l === null || a === null) return null;
  const o = Math.max(1, Ts(n.cellsWide) ?? 100), i = typeof n.renderMode == "string" && Q0.has(n.renderMode) ? n.renderMode : "cells";
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : nk(), text: n.text, font: typeof n.font == "string" && n.font.length > 0 ? n.font : qo, cellX: l, cellY: a, cellsWide: o, renderMode: i, color: typeof n.color == "string" && ek.test(n.color) ? n.color : to, enabled: typeof n.enabled == "boolean" ? n.enabled : true, createdAt: Qf(n.createdAt, t), updatedAt: Qf(n.updatedAt, t) };
}
function Mc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const l of e) {
    if (n.length >= qi) break;
    const a = ou(l, t);
    a && n.push(a);
  }
  return n;
}
function Ec() {
  return typeof localStorage < "u";
}
function lk() {
  if (!Ec()) return [];
  try {
    const e = localStorage.getItem(Dc);
    if (!e) return [];
    const t = JSON.parse(e);
    return typeof t.version != "number" || t.version > Ac ? [] : Mc(t.blocks);
  } catch {
    return [];
  }
}
function ak(e) {
  if (!Ec()) return;
  const t = { version: Ac, blocks: Mc(e) };
  localStorage.setItem(Dc, JSON.stringify(t));
}
function ok() {
  Ec() && localStorage.removeItem(Dc);
}
function ik(e = {}) {
  const t = H(lk());
  function n(u) {
    const c = Mc(u);
    return t.value = c, ak(c), c;
  }
  function l(u) {
    var _a3;
    const c = n(u);
    (_a3 = e.onSetBlocks) == null ? void 0 : _a3.call(e, c);
  }
  function a(u) {
    var _a3;
    const c = ou(u);
    c && (n([...t.value, c]), (_a3 = e.onAddBlock) == null ? void 0 : _a3.call(e, c));
  }
  function o(u) {
    var _a3;
    const c = ou(u);
    if (!c || !t.value.some((f) => f.id === c.id)) return;
    const d = t.value.map((f) => f.id === c.id ? c : f);
    n(d), (_a3 = e.onUpdateBlock) == null ? void 0 : _a3.call(e, c);
  }
  function i(u) {
    var _a3;
    if (!t.value.some((d) => d.id === u)) return;
    const c = t.value.filter((d) => d.id !== u);
    n(c), (_a3 = e.onRemoveBlock) == null ? void 0 : _a3.call(e, u);
  }
  function r() {
    var _a3;
    t.value.length !== 0 && (t.value = [], ok(), (_a3 = e.onClearBlocks) == null ? void 0 : _a3.call(e));
  }
  function s(u) {
    n(u);
  }
  return { blocks: t, setBlocks: l, addBlock: a, updateBlock: o, removeBlock: i, clearBlocks: r, syncFromWorker: s };
}
const rk = { key: 0, class: "zone-preview-text" }, sk = { class: "zone-list" }, uk = { class: "zone-text" }, ck = { class: "zone-coords" }, dk = { class: "zone-actions" }, fk = { key: 0, class: "zone-empty" }, vk = vn({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, l = t, a = H(false), o = H(false), i = H(0), r = H(0), s = H(4), u = H(4), c = H("both"), d = H("none"), f = H(1), v = H(1), p = H(0.6), m = H(2), h = H(false), b = _(() => n.zones.filter((M) => !!M && typeof M.id == "string" && M.id.length > 0 && typeof M.x1 == "number" && typeof M.y1 == "number" && typeof M.x2 == "number" && typeof M.y2 == "number" && typeof M.mode == "string" && !!M.edge && typeof M.edge.style == "string"));
  function x(M) {
    return M.id.slice(0, 6);
  }
  function V() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, v.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, p.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(m.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? h.value : void 0 };
  }
  const I = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], k = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function y() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const M = Date.now();
    l("add-zone", { id: y(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), mode: c.value, edge: V(), enabled: true, createdAt: M, updatedAt: M });
  }
  function w(M) {
    l("update-zone", { ...M, enabled: !M.enabled, updatedAt: Date.now() });
  }
  function T() {
    l("tool-change", { enabled: a.value, snapMajor: o.value });
  }
  function P() {
    l("draft-change", { mode: c.value, edge: V() });
  }
  return se(a, T, { immediate: true }), se(o, T, { immediate: true }), se([c, d, f, v, p, m, h], P, { immediate: true }), (M, D) => {
    const E = Me("v-switch"), A = Me("v-text-field"), F = Me("v-col"), j = Me("v-row"), W = Me("v-select"), Y = Me("v-btn"), N = Me("v-divider");
    return Ne(), Qe(be, null, [g(E, { modelValue: a.value, "onUpdate:modelValue": D[0] || (D[0] = (R) => a.value = R), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), g(E, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (R) => o.value = R), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (Ne(), Qe("div", rk, " Preview: (" + Ee(n.previewRect.x1) + "," + Ee(n.previewRect.y1) + ") \u2192 (" + Ee(n.previewRect.x2) + "," + Ee(n.previewRect.y2) + ") ", 1)) : Qt("", true), g(j, { dense: "" }, { default: ye(() => [g(F, { cols: "3" }, { default: ye(() => [g(A, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (R) => i.value = R), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(F, { cols: "3" }, { default: ye(() => [g(A, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (R) => r.value = R), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(F, { cols: "3" }, { default: ye(() => [g(A, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (R) => s.value = R), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(F, { cols: "3" }, { default: ye(() => [g(A, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (R) => u.value = R), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(j, { dense: "", class: "mt-2" }, { default: ye(() => [g(F, { cols: "6" }, { default: ye(() => [g(W, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (R) => c.value = R), items: I, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(F, { cols: "6" }, { default: ye(() => [g(W, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (R) => d.value = R), items: k, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(j, { dense: "", class: "mt-2" }, { default: ye(() => [g(F, { cols: "6" }, { default: ye(() => [g(A, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (R) => f.value = R), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(F, { cols: "6" }, { default: ye(() => [g(A, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = (R) => v.value = R), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (Ne(), Ut(j, { key: 1, dense: "", class: "mt-2" }, { default: ye(() => [g(F, { cols: "12" }, { default: ye(() => [g(A, { modelValue: p.value, "onUpdate:modelValue": D[10] || (D[10] = (R) => p.value = R), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), d.value === "noted" ? (Ne(), Ut(j, { key: 2, dense: "", class: "mt-2" }, { default: ye(() => [g(F, { cols: "12" }, { default: ye(() => [g(A, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = (R) => m.value = R), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), d.value === "bold-major" || d.value === "noted" ? (Ne(), Ut(j, { key: 3, dense: "", class: "mt-1" }, { default: ye(() => [g(F, { cols: "12" }, { default: ye(() => [g(E, { modelValue: h.value, "onUpdate:modelValue": D[12] || (D[12] = (R) => h.value = R), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), g(Y, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: ye(() => [...D[14] || (D[14] = [Le(" Add Zone ", -1)])]), _: 1 }), g(N, { class: "my-3" }), S("div", sk, [(Ne(true), Qe(be, null, hl(b.value, (R) => (Ne(), Qe("div", { key: R.id, class: "zone-row" }, [S("div", uk, [S("div", null, "#" + Ee(x(R)) + " \xB7 " + Ee(R.mode) + " \xB7 " + Ee(R.edge.style), 1), S("div", ck, "(" + Ee(R.x1) + "," + Ee(R.y1) + ") \u2192 (" + Ee(R.x2) + "," + Ee(R.y2) + ")", 1)]), S("div", dk, [g(Y, { size: "x-small", variant: "text", onClick: (Z) => w(R) }, { default: ye(() => [Le(Ee(R.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(Y, { size: "x-small", variant: "text", color: "error", onClick: (Z) => l("remove-zone", R.id) }, { default: ye(() => [...D[15] || (D[15] = [Le("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), b.value.length === 0 ? (Ne(), Qe("div", fk, "No zones.")) : Qt("", true)]), g(Y, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: b.value.length === 0, onClick: D[13] || (D[13] = (R) => l("clear-zones")) }, { default: ye(() => [...D[16] || (D[16] = [Le(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), Kl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t) n[l] = a;
  return n;
}, mk = Kl(vk, [["__scopeId", "data-v-223984b2"]]), gk = { class: "decal-list" }, hk = { class: "decal-text" }, yk = { class: "decal-coords" }, bk = { class: "decal-actions" }, pk = { key: 0, class: "decal-empty" }, Sk = vn({ __name: "GridDecalTab", props: { decals: {} }, emits: ["add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change"], setup(e, { emit: t }) {
  const n = e, l = t, a = H(false), o = H(false), i = H("solid"), r = H("alpha"), s = H(false), u = H(sn[0]), c = H(sn[1]), d = H(sn[2]), f = H(sn[3]), v = H(1), p = H(sn[0]), m = H(sn[1]), h = H(sn[2]), b = H(2), x = H(4), V = H(0.4), I = H(3), k = H(0), y = H(0), C = H(4), w = H(4), T = [{ title: "Solid", value: "solid" }, { title: "Checkerboard", value: "checkerboard" }, { title: "Stripes", value: "stripes" }, { title: "Dots", value: "dots" }], P = [{ title: "Alpha", value: "alpha" }, { title: "Multiply", value: "multiply" }, { title: "Screen", value: "screen" }], M = _(() => n.decals.filter((Y) => !!Y && typeof Y.id == "string" && Y.id.length > 0 && typeof Y.x1 == "number" && typeof Y.y1 == "number" && typeof Y.x2 == "number" && typeof Y.y2 == "number" && !!Y.pattern && typeof Y.pattern.kind == "string"));
  function D(Y) {
    return Y.id.slice(0, 6);
  }
  function E() {
    const Y = i.value;
    return Y === "solid" ? { kind: Y, coverage: Math.max(0, Math.min(1, v.value)), solidR: Math.max(0, Math.min(1, p.value)), solidG: Math.max(0, Math.min(1, m.value)), solidB: Math.max(0, Math.min(1, h.value)) } : Y === "checkerboard" ? { kind: Y, cellSize: Math.max(1, b.value) } : Y === "stripes" ? { kind: Y, pitchCells: Math.max(2, x.value) } : Y === "dots" ? { kind: Y, dotRadius: Math.max(0.1, V.value), dotSpacing: Math.max(2, I.value) } : { kind: Y };
  }
  function A() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function F() {
    const Y = Date.now();
    l("add-decal", { id: A(), x1: Math.min(Math.trunc(k.value), Math.trunc(C.value)), y1: Math.min(Math.trunc(y.value), Math.trunc(w.value)), x2: Math.max(Math.trunc(k.value), Math.trunc(C.value)), y2: Math.max(Math.trunc(y.value), Math.trunc(w.value)), pattern: E(), tint: [Math.max(0, Math.min(1, u.value)), Math.max(0, Math.min(1, c.value)), Math.max(0, Math.min(1, d.value)), Math.max(0, Math.min(1, f.value))], blendMode: r.value, suppressCells: s.value, enabled: true, createdAt: Y, updatedAt: Y });
  }
  function j(Y) {
    l("update-decal", { ...Y, enabled: !Y.enabled, updatedAt: Date.now() });
  }
  function W() {
    l("decal-tool-change", { enabled: a.value, snapMajor: o.value });
  }
  return se(a, W, { immediate: true }), se(o, W, { immediate: true }), (Y, N) => {
    const R = Me("v-switch"), Z = Me("v-select"), z = Me("v-col"), O = Me("v-row"), G = Me("v-text-field"), ie = Me("v-btn"), pe = Me("v-divider");
    return Ne(), Qe(be, null, [g(R, { modelValue: a.value, "onUpdate:modelValue": N[0] || (N[0] = (K) => a.value = K), class: "mt-2", inset: "", density: "compact", color: "primary", "hide-details": "", label: "Decal Tool (drag on page)" }, null, 8, ["modelValue"]), g(R, { modelValue: o.value, "onUpdate:modelValue": N[1] || (N[1] = (K) => o.value = K), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), g(O, { dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "6" }, { default: ye(() => [g(Z, { modelValue: i.value, "onUpdate:modelValue": N[2] || (N[2] = (K) => i.value = K), items: T, "item-title": "title", "item-value": "value", label: "Kind", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "6" }, { default: ye(() => [g(Z, { modelValue: r.value, "onUpdate:modelValue": N[3] || (N[3] = (K) => r.value = K), items: P, "item-title": "title", "item-value": "value", label: "Blend", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), i.value === "solid" ? (Ne(), Qe(be, { key: 0 }, [g(O, { dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "12" }, { default: ye(() => [g(G, { modelValue: v.value, "onUpdate:modelValue": N[4] || (N[4] = (K) => v.value = K), modelModifiers: { number: true }, label: "Coverage (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(O, { dense: "", class: "mt-1" }, { default: ye(() => [g(z, { cols: "4" }, { default: ye(() => [g(G, { modelValue: p.value, "onUpdate:modelValue": N[5] || (N[5] = (K) => p.value = K), modelModifiers: { number: true }, label: "R", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "4" }, { default: ye(() => [g(G, { modelValue: m.value, "onUpdate:modelValue": N[6] || (N[6] = (K) => m.value = K), modelModifiers: { number: true }, label: "G", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "4" }, { default: ye(() => [g(G, { modelValue: h.value, "onUpdate:modelValue": N[7] || (N[7] = (K) => h.value = K), modelModifiers: { number: true }, label: "B", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })], 64)) : i.value === "checkerboard" ? (Ne(), Ut(O, { key: 1, dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "12" }, { default: ye(() => [g(G, { modelValue: b.value, "onUpdate:modelValue": N[8] || (N[8] = (K) => b.value = K), modelModifiers: { number: true }, label: "Cell size (>=1)", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "stripes" ? (Ne(), Ut(O, { key: 2, dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "12" }, { default: ye(() => [g(G, { modelValue: x.value, "onUpdate:modelValue": N[9] || (N[9] = (K) => x.value = K), modelModifiers: { number: true }, label: "Pitch cells (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "dots" ? (Ne(), Ut(O, { key: 3, dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "6" }, { default: ye(() => [g(G, { modelValue: V.value, "onUpdate:modelValue": N[10] || (N[10] = (K) => V.value = K), modelModifiers: { number: true }, label: "Radius (>=0.1)", type: "number", min: "0.1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "6" }, { default: ye(() => [g(G, { modelValue: I.value, "onUpdate:modelValue": N[11] || (N[11] = (K) => I.value = K), modelModifiers: { number: true }, label: "Spacing (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Qt("", true), g(O, { dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: u.value, "onUpdate:modelValue": N[12] || (N[12] = (K) => u.value = K), modelModifiers: { number: true }, label: "TR", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: c.value, "onUpdate:modelValue": N[13] || (N[13] = (K) => c.value = K), modelModifiers: { number: true }, label: "TG", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: d.value, "onUpdate:modelValue": N[14] || (N[14] = (K) => d.value = K), modelModifiers: { number: true }, label: "TB", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: f.value, "onUpdate:modelValue": N[15] || (N[15] = (K) => f.value = K), modelModifiers: { number: true }, label: "TA", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(R, { modelValue: s.value, "onUpdate:modelValue": N[16] || (N[16] = (K) => s.value = K), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Suppress cells" }, null, 8, ["modelValue"]), g(O, { dense: "", class: "mt-2" }, { default: ye(() => [g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: k.value, "onUpdate:modelValue": N[17] || (N[17] = (K) => k.value = K), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: y.value, "onUpdate:modelValue": N[18] || (N[18] = (K) => y.value = K), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: C.value, "onUpdate:modelValue": N[19] || (N[19] = (K) => C.value = K), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(z, { cols: "3" }, { default: ye(() => [g(G, { modelValue: w.value, "onUpdate:modelValue": N[20] || (N[20] = (K) => w.value = K), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(ie, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: F }, { default: ye(() => [...N[22] || (N[22] = [Le(" Add Decal ", -1)])]), _: 1 }), g(pe, { class: "my-3" }), S("div", gk, [(Ne(true), Qe(be, null, hl(M.value, (K) => (Ne(), Qe("div", { key: K.id, class: "decal-row" }, [S("div", hk, [S("div", null, "#" + Ee(D(K)) + " \xB7 " + Ee(K.pattern.kind) + " \xB7 " + Ee(K.blendMode), 1), S("div", yk, "(" + Ee(K.x1) + "," + Ee(K.y1) + ") \u2192 (" + Ee(K.x2) + "," + Ee(K.y2) + ")", 1)]), S("div", bk, [g(ie, { size: "x-small", variant: "text", onClick: (fe) => j(K) }, { default: ye(() => [Le(Ee(K.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(ie, { size: "x-small", variant: "text", color: "error", onClick: (fe) => l("remove-decal", K.id) }, { default: ye(() => [...N[23] || (N[23] = [Le("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), M.value.length === 0 ? (Ne(), Qe("div", pk, "No decals.")) : Qt("", true)]), g(ie, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: M.value.length === 0, onClick: N[21] || (N[21] = (K) => l("clear-decals")) }, { default: ye(() => [...N[24] || (N[24] = [Le(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), xk = Kl(Sk, [["__scopeId", "data-v-83067205"]]), kk = { class: "hires-tab" }, wk = { class: "text-caption text-medium-emphasis mb-2" }, Ck = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, _k = { class: "region-list" }, Vk = { class: "d-flex align-center justify-space-between" }, Ik = { class: "text-body-2" }, Pk = { class: "text-caption text-medium-emphasis" }, Tk = { class: "d-flex align-center gap-2 mt-2 flex-wrap" }, Ak = { key: 0, class: "text-caption", style: { opacity: "0.7", padding: "6px 0" } }, Dk = vn({ __name: "GridHiResTab", props: { regions: {} }, emits: ["add-region", "update-region", "remove-region", "clear-regions", "hires-tool-change"], setup(e, { emit: t }) {
  const n = e, l = t, a = H(false), o = _(() => n.regions.length < Xi);
  function i() {
    a.value = !a.value, l("hires-tool-change", { enabled: a.value });
  }
  function r(f) {
    l("update-region", { ...f, enabled: !f.enabled, updatedAt: Date.now() });
  }
  function s(f) {
    l("update-region", { ...f, showGrid: !f.showGrid, updatedAt: Date.now() });
  }
  function u(f) {
    l("update-region", { ...f, showBaseGrid: !f.showBaseGrid, updatedAt: Date.now() });
  }
  function c(f) {
    l("update-region", { ...f, showBorder: !f.showBorder, updatedAt: Date.now() });
  }
  function d(f) {
    return f.id.slice(0, 6);
  }
  return (f, v) => {
    const p = Me("v-btn"), m = Me("v-divider"), h = Me("v-chip"), b = Me("v-card");
    return Ne(), Qe("div", kk, [S("p", wk, Ee(vt(eo)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), g(p, { color: a.value ? "primary" : void 0, variant: a.value ? "flat" : "tonal", disabled: !o.value && !a.value, size: "small", block: "", onClick: i }, { default: ye(() => [Le(Ee(a.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), e.regions.length >= vt(Xi) ? (Ne(), Qe("div", Ck, " Max " + Ee(vt(Xi)) + " regions reached. ", 1)) : Qt("", true), e.regions.length > 0 ? (Ne(), Ut(m, { key: 1, class: "my-3" })) : Qt("", true), S("div", _k, [(Ne(true), Qe(be, null, hl(e.regions, (x) => (Ne(), Ut(b, { key: x.id, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: ye(() => [S("div", Vk, [S("span", Ik, " #" + Ee(d(x)) + " (" + Ee(x.x1) + ", " + Ee(x.y1) + ") \u2014 (" + Ee(x.x2) + ", " + Ee(x.y2) + ") ", 1), g(h, { size: "x-small", color: x.enabled ? "success" : "grey", variant: "flat" }, { default: ye(() => [Le(Ee(x.enabled ? "Active" : "Paused"), 1)]), _: 2 }, 1032, ["color"])]), S("div", Pk, Ee(vt(eo)) + "x \xB7 " + Ee((x.x2 - x.x1 + 1) * (x.y2 - x.y1 + 1)) + " base cells ", 1), S("div", Tk, [g(p, { size: "x-small", variant: "tonal", onClick: (V) => r(x) }, { default: ye(() => [Le(Ee(x.enabled ? "Pause" : "Resume"), 1)]), _: 2 }, 1032, ["onClick"]), g(p, { size: "x-small", variant: "tonal", onClick: (V) => s(x) }, { default: ye(() => [Le(" Grid " + Ee(x.showGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(p, { size: "x-small", variant: "tonal", onClick: (V) => u(x) }, { default: ye(() => [Le(" Base " + Ee(x.showBaseGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(p, { size: "x-small", variant: "tonal", onClick: (V) => c(x) }, { default: ye(() => [Le(" Border " + Ee(x.showBorder ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(p, { size: "x-small", variant: "tonal", color: "error", onClick: (V) => f.$emit("remove-region", x.id) }, { default: ye(() => [...v[1] || (v[1] = [Le(" Delete ", -1)])]), _: 1 }, 8, ["onClick"])])]), _: 2 }, 1024))), 128)), e.regions.length === 0 ? (Ne(), Qe("div", Ak, " No hi-res regions. ")) : Qt("", true)]), e.regions.length > 0 ? (Ne(), Ut(p, { key: 2, class: "mt-2", size: "small", color: "error", variant: "text", onClick: v[0] || (v[0] = (x) => f.$emit("clear-regions")) }, { default: ye(() => [...v[2] || (v[2] = [Le(" Clear All ", -1)])]), _: 1 })) : Qt("", true)]);
  };
} }), Mk = Kl(Dk, [["__scopeId", "data-v-b95c28ab"]]), Ek = { class: "text-tab" }, Bk = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, $k = { class: "d-flex align-center ga-2" }, Rk = { class: "text-list" }, Fk = { class: "text-info" }, Lk = { class: "text-coords" }, Ok = { class: "text-actions" }, Nk = { key: 0, class: "text-empty" }, Hk = vn({ __name: "GridTextTab", props: { blocks: {} }, emits: ["add-text", "update-text", "remove-text", "clear-text", "text-tool-change"], setup(e, { emit: t }) {
  const n = e, l = t, a = H(false), o = H(qo), i = H("cells"), r = H(to), s = [{ title: "Cells (frozen)", value: "cells" }, { title: "SDF (visual)", value: "sdf" }, { title: "Both", value: "both" }], u = _(() => n.blocks.filter((m) => !!m && typeof m.id == "string" && m.id.length > 0 && typeof m.text == "string")), c = _(() => u.value.length < qi);
  function d() {
    return { enabled: a.value, font: o.value, renderMode: i.value, color: r.value };
  }
  function f() {
    a.value = !a.value, l("text-tool-change", d());
  }
  se([o, i, r], () => {
    a.value && l("text-tool-change", d());
  });
  function v(m) {
    return m.id.slice(0, 6);
  }
  function p(m) {
    l("update-text", { ...m, enabled: !m.enabled, updatedAt: Date.now() });
  }
  return (m, h) => {
    const b = Me("v-btn"), x = Me("v-text-field"), V = Me("v-select"), I = Me("v-col"), k = Me("v-row"), y = Me("v-divider");
    return Ne(), Qe("div", Ek, [h[7] || (h[7] = S("p", { class: "text-caption text-medium-emphasis mb-2" }, " Click & drag on the grid to set position and width ", -1)), g(b, { color: a.value ? "primary" : void 0, variant: a.value ? "flat" : "tonal", disabled: !c.value && !a.value, size: "small", block: "", onClick: f }, { default: ye(() => [Le(Ee(a.value ? "Drawing \u2014 click & drag on grid" : "Place Text Block"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), u.value.length >= vt(qi) ? (Ne(), Qe("div", Bk, " Max " + Ee(vt(qi)) + " blocks reached. ", 1)) : Qt("", true), g(x, { modelValue: o.value, "onUpdate:modelValue": h[0] || (h[0] = (C) => o.value = C), label: "Font (CSS)", density: "compact", "hide-details": "", class: "mt-3" }, null, 8, ["modelValue"]), g(k, { dense: "", class: "mt-2", align: "center" }, { default: ye(() => [g(I, { cols: "8" }, { default: ye(() => [g(V, { modelValue: i.value, "onUpdate:modelValue": h[1] || (h[1] = (C) => i.value = C), items: s, "item-title": "title", "item-value": "value", label: "Render Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(I, { cols: "4" }, { default: ye(() => [S("div", $k, [h[4] || (h[4] = S("label", { class: "text-caption", style: { "white-space": "nowrap" } }, "Ink", -1)), nt(S("input", { "onUpdate:modelValue": h[2] || (h[2] = (C) => r.value = C), type: "color", class: "color-swatch" }, null, 512), [[$r, r.value]])])]), _: 1 })]), _: 1 }), g(y, { class: "my-3" }), S("div", Rk, [(Ne(true), Qe(be, null, hl(u.value, (C) => (Ne(), Qe("div", { key: C.id, class: "text-row" }, [S("div", Fk, [S("div", null, "#" + Ee(v(C)) + ' \xB7 "' + Ee(C.text) + '" \xB7 ' + Ee(C.renderMode), 1), S("div", Lk, [S("span", { class: "color-dot", style: ge({ background: C.color || vt(to) }) }, null, 4), Le(" cell (" + Ee(C.cellX) + "," + Ee(C.cellY) + ") w=" + Ee(C.cellsWide), 1)])]), S("div", Ok, [g(b, { size: "x-small", variant: "text", onClick: (w) => p(C) }, { default: ye(() => [Le(Ee(C.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "text", color: "error", onClick: (w) => l("remove-text", C.id) }, { default: ye(() => [...h[5] || (h[5] = [Le("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), u.value.length === 0 ? (Ne(), Qe("div", Nk, "No text blocks.")) : Qt("", true)]), g(b, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: u.value.length === 0, onClick: h[3] || (h[3] = (C) => l("clear-text")) }, { default: ye(() => [...h[6] || (h[6] = [Le(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])]);
  };
} }), zk = Kl(Hk, [["__scopeId", "data-v-e8d4e84a"]]), Wk = { class: "hires-text-tab" }, jk = { class: "text-caption text-medium-emphasis mb-2" }, Uk = { class: "d-flex align-center ga-2" }, Gk = { class: "d-flex align-center gap-2 flex-wrap" }, Yk = vn({ __name: "GridHiResTextTab", emits: ["hires-text-tool-change"], setup(e, { emit: t }) {
  const n = t, l = H(false), a = H(qo), o = H("cells"), i = H(to), r = H(true), s = H(true), u = H(true), c = [{ title: "Cells (frozen)", value: "cells" }, { title: "SDF (visual)", value: "sdf" }, { title: "Both", value: "both" }];
  function d() {
    return { enabled: l.value, font: a.value, renderMode: o.value, color: i.value, showGrid: r.value, showBaseGrid: s.value, showBorder: u.value };
  }
  function f() {
    l.value = !l.value, n("hires-text-tool-change", d());
  }
  return se([a, o, i, r, s, u], () => {
    l.value && n("hires-text-tool-change", d());
  }), (v, p) => {
    const m = Me("v-btn"), h = Me("v-text-field"), b = Me("v-select"), x = Me("v-col"), V = Me("v-row"), I = Me("v-divider"), k = Me("v-checkbox");
    return Ne(), Qe("div", Wk, [S("p", jk, Ee(vt(eo)) + "x hi-res region with auto-fit text. Draw a region, type text (or leave empty for hi-res only). ", 1), g(m, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", size: "small", block: "", onClick: f }, { default: ye(() => [Le(Ee(l.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Text Region"), 1)]), _: 1 }, 8, ["color", "variant"]), g(h, { modelValue: a.value, "onUpdate:modelValue": p[0] || (p[0] = (y) => a.value = y), label: "Font (CSS)", density: "compact", "hide-details": "", class: "mt-3" }, null, 8, ["modelValue"]), g(V, { dense: "", class: "mt-2", align: "center" }, { default: ye(() => [g(x, { cols: "8" }, { default: ye(() => [g(b, { modelValue: o.value, "onUpdate:modelValue": p[1] || (p[1] = (y) => o.value = y), items: c, "item-title": "title", "item-value": "value", label: "Render Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(x, { cols: "4" }, { default: ye(() => [S("div", Uk, [p[6] || (p[6] = S("label", { class: "text-caption", style: { "white-space": "nowrap" } }, "Ink", -1)), nt(S("input", { "onUpdate:modelValue": p[2] || (p[2] = (y) => i.value = y), type: "color", class: "color-swatch" }, null, 512), [[$r, i.value]])])]), _: 1 })]), _: 1 }), g(I, { class: "my-3" }), p[7] || (p[7] = S("div", { class: "text-caption text-medium-emphasis mb-2" }, "Region defaults", -1)), S("div", Gk, [g(k, { modelValue: r.value, "onUpdate:modelValue": p[3] || (p[3] = (y) => r.value = y), label: "Grid", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"]), g(k, { modelValue: s.value, "onUpdate:modelValue": p[4] || (p[4] = (y) => s.value = y), label: "Base grid", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"]), g(k, { modelValue: u.value, "onUpdate:modelValue": p[5] || (p[5] = (y) => u.value = y), label: "Border", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"])])]);
  };
} }), Kk = Kl(Yk, [["__scopeId", "data-v-be6e20de"]]), Xk = vn({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, decals: {}, hiresRegions: {}, textBlocks: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change", "add-hires-region", "update-hires-region", "remove-hires-region", "clear-hires-regions", "hires-tool-change", "add-text", "update-text", "remove-text", "clear-text", "text-tool-change", "hires-text-tool-change"], setup(e) {
  const t = H("zones"), n = H(false);
  return (l, a) => {
    const o = Me("v-btn"), i = Me("v-card-title"), r = Me("v-tab"), s = Me("v-tabs"), u = Me("v-tabs-window-item"), c = Me("v-tabs-window"), d = Me("v-card-text"), f = Me("v-card");
    return Ne(), Qe("aside", { class: ne(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (Ne(), Ut(o, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: a[25] || (a[25] = (v) => n.value = false) }, { default: ye(() => [...a[33] || (a[33] = [Le(" Grid Tools ", -1)])]), _: 1 })) : (Ne(), Ut(f, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: ye(() => [g(i, { class: "zone-title" }, { default: ye(() => [a[27] || (a[27] = S("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), g(o, { size: "x-small", variant: "text", onClick: a[0] || (a[0] = (v) => n.value = true) }, { default: ye(() => [...a[26] || (a[26] = [Le("Collapse", -1)])]), _: 1 })]), _: 1 }), g(s, { modelValue: t.value, "onUpdate:modelValue": a[1] || (a[1] = (v) => t.value = v), density: "compact", grow: "" }, { default: ye(() => [g(r, { value: "zones" }, { default: ye(() => [...a[28] || (a[28] = [Le("Zones", -1)])]), _: 1 }), g(r, { value: "decals" }, { default: ye(() => [...a[29] || (a[29] = [Le("Decals", -1)])]), _: 1 }), g(r, { value: "hires" }, { default: ye(() => [...a[30] || (a[30] = [Le("Hi-Res", -1)])]), _: 1 }), g(r, { value: "text" }, { default: ye(() => [...a[31] || (a[31] = [Le("Text", -1)])]), _: 1 }), g(r, { value: "hires-text" }, { default: ye(() => [...a[32] || (a[32] = [Le("Hi-Res Text", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), g(d, { class: "pt-2" }, { default: ye(() => [g(c, { modelValue: t.value, "onUpdate:modelValue": a[24] || (a[24] = (v) => t.value = v) }, { default: ye(() => [g(u, { value: "zones" }, { default: ye(() => [g(mk, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: a[2] || (a[2] = (v) => l.$emit("add-zone", v)), onUpdateZone: a[3] || (a[3] = (v) => l.$emit("update-zone", v)), onRemoveZone: a[4] || (a[4] = (v) => l.$emit("remove-zone", v)), onClearZones: a[5] || (a[5] = (v) => l.$emit("clear-zones")), onToolChange: a[6] || (a[6] = (v) => l.$emit("tool-change", v)), onDraftChange: a[7] || (a[7] = (v) => l.$emit("draft-change", v)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), g(u, { value: "decals" }, { default: ye(() => [g(xk, { decals: e.decals, onAddDecal: a[8] || (a[8] = (v) => l.$emit("add-decal", v)), onUpdateDecal: a[9] || (a[9] = (v) => l.$emit("update-decal", v)), onRemoveDecal: a[10] || (a[10] = (v) => l.$emit("remove-decal", v)), onClearDecals: a[11] || (a[11] = (v) => l.$emit("clear-decals")), onDecalToolChange: a[12] || (a[12] = (v) => l.$emit("decal-tool-change", v)) }, null, 8, ["decals"])]), _: 1 }), g(u, { value: "hires" }, { default: ye(() => [g(Mk, { regions: e.hiresRegions, onAddRegion: a[13] || (a[13] = (v) => l.$emit("add-hires-region", v)), onUpdateRegion: a[14] || (a[14] = (v) => l.$emit("update-hires-region", v)), onRemoveRegion: a[15] || (a[15] = (v) => l.$emit("remove-hires-region", v)), onClearRegions: a[16] || (a[16] = (v) => l.$emit("clear-hires-regions")), onHiresToolChange: a[17] || (a[17] = (v) => l.$emit("hires-tool-change", v)) }, null, 8, ["regions"])]), _: 1 }), g(u, { value: "text" }, { default: ye(() => [g(zk, { blocks: e.textBlocks, onAddText: a[18] || (a[18] = (v) => l.$emit("add-text", v)), onUpdateText: a[19] || (a[19] = (v) => l.$emit("update-text", v)), onRemoveText: a[20] || (a[20] = (v) => l.$emit("remove-text", v)), onClearText: a[21] || (a[21] = (v) => l.$emit("clear-text")), onTextToolChange: a[22] || (a[22] = (v) => l.$emit("text-tool-change", v)) }, null, 8, ["blocks"])]), _: 1 }), g(u, { value: "hires-text" }, { default: ye(() => [g(Kk, { onHiresTextToolChange: a[23] || (a[23] = (v) => l.$emit("hires-text-tool-change", v)) })]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2);
  };
} }), qk = Kl(Xk, [["__scopeId", "data-v-751e1730"]]), _o = 5, ev = 19, tv = 10, Zk = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]', Jk = vn({ __name: "AppBackground", setup(e) {
  const t = x0("AppBackground"), n = H(null);
  let l = null, a = 0, o = null, i = 0, r = 0;
  const s = H(null), u = H(0);
  let c = null;
  function d(q) {
    return q instanceof Error ? q.message : String(q);
  }
  function f(q) {
    return { ...q, edge: { ...q.edge } };
  }
  function v(q) {
    return q.map((ke) => f(ke));
  }
  function p(q) {
    return { ...q, pattern: { ...q.pattern }, tint: [...q.tint] };
  }
  function m(q) {
    return q.map(p);
  }
  function h(q, ke) {
    if (l) try {
      ke && ke.length > 0 ? l.postMessage(q, ke) : l.postMessage(q);
    } catch (Xe) {
      t.error("Worker postMessage failed:", d(Xe));
    }
  }
  const b = E0({ onSetZones: (q) => h({ type: "set_zones", zones: v(q) }), onAddZone: (q) => h({ type: "add_zone", zone: f(q) }), onUpdateZone: (q) => h({ type: "update_zone", zone: f(q) }), onRemoveZone: (q) => h({ type: "remove_zone", id: q }), onClearZones: () => h({ type: "clear_zones" }) }), x = G0({ onSetDecals: (q) => h({ type: "set_decals", decals: m(q) }), onAddDecal: (q) => h({ type: "add_decal", decal: p(q) }), onUpdateDecal: (q) => h({ type: "update_decal", decal: p(q) }), onRemoveDecal: (q) => h({ type: "remove_decal", id: q }), onClearDecals: () => h({ type: "clear_decals" }) }), V = J0({ onAddRegion: (q) => h({ type: "add_hires", region: { ...q } }), onUpdateRegion: (q) => h({ type: "update_hires", region: { ...q } }), onRemoveRegion: (q) => h({ type: "remove_hires", id: q }), onClearRegions: () => h({ type: "clear_hires" }) }), I = ik({ onSetBlocks: (q) => h({ type: "set_text", blocks: q }), onAddBlock: (q) => h({ type: "add_text", block: q }), onUpdateBlock: (q) => h({ type: "update_text", block: q }), onRemoveBlock: (q) => h({ type: "remove_text", id: q }), onClearBlocks: () => h({ type: "clear_text" }) }), k = H(false), y = H(false), C = H({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), w = H(false), T = H(false), P = H(false), M = H(false), D = H(qo), E = H("cells"), A = H(to), F = H(false), j = H(""), W = H({}), Y = H(null);
  let N = null, R = 0, Z = 0;
  const z = H(false), O = H(qo), G = H("cells"), ie = H(to), pe = H(true), K = H(true), fe = H(true), Te = H(null), xe = H(null);
  let ce = null, B = null, L = null;
  function ee(q) {
    b.addZone(q);
  }
  function de(q) {
    b.updateZone(q);
  }
  function oe(q) {
    b.removeZone(q);
  }
  function ue() {
    b.clearZones();
  }
  function Se(q) {
    k.value = q.enabled, y.value = q.snapMajor, !q.enabled && B === "zone" && (ce = null, B = null, Te.value = null, xe.value = null);
  }
  function ve(q) {
    C.value = q;
  }
  function X(q) {
    w.value = q.enabled, T.value = q.snapMajor, q.enabled || B === "decal" && (ce = null, B = null, L = null, Te.value = null, xe.value = null);
  }
  function ae(q) {
    P.value = q.enabled, !q.enabled && B === "hires" && (ce = null, B = null, Te.value = null, xe.value = null);
  }
  function Ie(q) {
    x.addDecal(q);
  }
  function Q(q) {
    x.updateDecal(q);
  }
  function he(q) {
    x.removeDecal(q);
  }
  function Ce() {
    x.clearDecals();
  }
  function _e(q) {
    V.addRegion(q);
  }
  function Ae(q) {
    V.updateRegion(q);
  }
  function Re(q) {
    V.removeRegion(q);
  }
  function Ge() {
    V.clearRegions();
  }
  function ze(q) {
    I.addBlock(q);
  }
  function dt(q) {
    I.updateBlock(q);
  }
  function at(q) {
    I.removeBlock(q);
  }
  function an() {
    I.clearBlocks();
  }
  function Nn(q) {
    M.value = q.enabled, D.value = q.font, E.value = q.renderMode, A.value = q.color, q.enabled || (B === "text" && (ce = null, B = null, Te.value = null, xe.value = null), Hn());
  }
  function ot(q) {
    if (!N || !R) {
      W.value = {};
      return;
    }
    const ke = q ?? Pl();
    if (!ke) return;
    const Xe = Kf(N.cx, N.cy, ke), Ye = Is(R, ke);
    W.value = { position: "fixed", left: `${Xe.cssX}px`, top: `${Xe.cssY}px`, width: `${Ye}px`, "min-height": "2em", "z-index": "25" };
  }
  function on() {
    if (!N || !j.value.trim()) {
      Hn();
      return;
    }
    const q = Date.now();
    I.addBlock({ id: crypto.randomUUID(), text: j.value.trim(), font: D.value, cellX: N.cx, cellY: N.cy, cellsWide: R, renderMode: E.value, color: A.value, enabled: true, createdAt: q, updatedAt: q }), Ea();
  }
  function Hn() {
    Ea();
  }
  function Ea() {
    F.value = false, j.value = "", N = null, R = 0, Z = 0, ce = null, B = null, Te.value = null, xe.value = null;
  }
  function Yp(q) {
    q.key === "Enter" && !q.shiftKey ? (q.preventDefault(), z.value ? Gd() : on()) : q.key === "Escape" && (q.preventDefault(), Hn());
  }
  function Kp(q) {
    z.value = q.enabled, O.value = q.font, G.value = q.renderMode, ie.value = q.color, pe.value = q.showGrid, K.value = q.showBaseGrid, fe.value = q.showBorder, q.enabled || (B === "hires-text" && (ce = null, B = null, Te.value = null, xe.value = null), Hn());
  }
  function Gd() {
    if (!N) {
      Hn();
      return;
    }
    const q = Date.now(), ke = N, Xe = R, Ye = Math.max(1, Z), Bt = j.value.trim();
    V.addRegion({ id: crypto.randomUUID(), x1: ke.cx, y1: ke.cy, x2: ke.cx + Xe - 1, y2: ke.cy + Ye - 1, multiplier: eo, enabled: true, showGrid: pe.value, showBaseGrid: K.value, showBorder: fe.value, createdAt: q, updatedAt: q }), Bt && I.addBlock({ id: crypto.randomUUID(), text: Bt, font: O.value, cellX: ke.cx, cellY: ke.cy, cellsWide: Xe, renderMode: G.value, color: ie.value, enabled: true, createdAt: q, updatedAt: q }), Ea();
  }
  function Pl() {
    const q = s.value;
    return !q || q.gridPitch === 0 ? null : { gridPitch: q.gridPitch, scrollCanvasPx: u.value, dpr: devicePixelRatio, screenCols: q.screenCols, screenRows: q.screenRows };
  }
  const Xp = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]);
  function Yd(q) {
    if (!(q instanceof HTMLElement)) return false;
    if (q.closest(Zk)) return true;
    let ke = q;
    for (; ke; ) {
      if (Xp.has(ke.tagName) || ke.getAttribute("role") === "button") return true;
      ke = ke.parentElement;
    }
    return false;
  }
  function po(q, ke) {
    return { x1: Math.min(q.cx, ke.cx), y1: Math.min(q.cy, ke.cy), x2: Math.max(q.cx, ke.cx), y2: Math.max(q.cy, ke.cy) };
  }
  function qp(q, ke) {
    return (q % ke.screenCols + ke.screenCols) % ke.screenCols;
  }
  function fs(q) {
    const ke = Pl();
    if (!ke) return null;
    const Xe = Yf(q.clientX, q.clientY, ke);
    return { cx: qp(Xe.cx, ke), cy: Xe.cy };
  }
  function Kd(q, ke) {
    const Xe = (Bt) => Math.floor(Bt / _o) * _o, Ye = (Bt) => Xe(Bt) + (_o - 1);
    return { x1: Math.max(0, Math.min(ke.screenCols - 1, Xe(q.x1))), y1: Xe(q.y1), x2: Math.max(0, Math.min(ke.screenCols - 1, Ye(q.x2))), y2: Ye(q.y2) };
  }
  function Zp(q) {
    const ke = Date.now(), Xe = C.value;
    return { id: typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${ke}-${Math.random().toString(36).slice(2, 9)}`, x1: q.x1, y1: q.y1, x2: q.x2, y2: q.y2, mode: Xe.mode, edge: { ...Xe.edge }, enabled: true, createdAt: ke, updatedAt: ke };
  }
  function Jp(q) {
    const ke = Date.now();
    return { id: typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${ke}-${Math.random().toString(36).slice(2, 9)}`, x1: q.x1, y1: q.y1, x2: q.x2, y2: q.y2, pattern: { kind: "solid", coverage: 1, solidR: 0.49, solidG: 0.3, solidB: 1 }, tint: [1, 1, 1, 1], blendMode: "alpha", suppressCells: false, enabled: true, createdAt: ke, updatedAt: ke };
  }
  function So() {
    const q = Te.value, ke = Pl();
    if (!q || !ke) {
      xe.value = null;
      return;
    }
    const Xe = Kf(q.x1, q.y1, ke), Ye = Xe.cssX, Bt = Xe.cssY, Ba = Is(q.x2 - q.x1 + 1, ke), ft = Is(q.y2 - q.y1 + 1, ke);
    xe.value = { left: `${Ye}px`, top: `${Bt}px`, width: `${Ba}px`, height: `${ft}px` };
  }
  function Xd() {
    return k.value || w.value || P.value || M.value || z.value;
  }
  function qd() {
    return B === "decal" ? T.value : y.value;
  }
  function Zd(q) {
    if (F.value) {
      const Ye = Y.value;
      if (q.target !== Ye && !(Ye == null ? void 0 : Ye.contains(q.target))) {
        z.value ? Gd() : j.value.trim() ? on() : Hn();
        return;
      }
    }
    if (!Xd() || q.button !== 0 || Yd(q.target)) return;
    const ke = fs(q);
    if (!ke) return;
    B = z.value ? "hires-text" : P.value ? "hires" : w.value ? "decal" : M.value ? "text" : "zone", ce = ke;
    const Xe = { x1: ke.cx, y1: ke.cy, x2: ke.cx, y2: ke.cy };
    B === "decal" && (L = { ...Xe }), Te.value = Xe, So(), q.target instanceof Element && q.target.setPointerCapture(q.pointerId), q.preventDefault();
  }
  function Jd(q) {
    if (!B || !ce) return;
    const ke = fs(q), Xe = Pl();
    if (!(!ke || !Xe)) {
      if (B === "decal" && L) L.x1 = Math.min(L.x1, ke.cx), L.y1 = Math.min(L.y1, ke.cy), L.x2 = Math.max(L.x2, ke.cx), L.y2 = Math.max(L.y2, ke.cy), Te.value = { ...L };
      else {
        const Ye = po(ce, ke);
        Te.value = qd() ? Kd(Ye, Xe) : Ye;
      }
      So();
    }
  }
  function Qd(q) {
    if (!B || !ce || q.button !== 0) return;
    q.target instanceof Element && q.target.hasPointerCapture(q.pointerId) && q.target.releasePointerCapture(q.pointerId);
    const ke = fs(q), Xe = Pl();
    if (B === "hires-text" && ke) {
      const Ye = po(ce, ke), Bt = Math.max(tv, Ye.x2 - Ye.x1 + 1);
      N = { cx: Ye.x1, cy: Ye.y1 }, R = Bt, Z = Math.max(1, Ye.y2 - Ye.y1 + 1), j.value = "", F.value = true, ce = null, B = null, ot(Pl()), Be(() => {
        var _a3;
        return (_a3 = Y.value) == null ? void 0 : _a3.focus();
      });
      return;
    } else if (B === "hires" && ke) {
      const Ye = po(ce, ke), Bt = Date.now();
      V.addRegion({ id: crypto.randomUUID(), x1: Ye.x1, y1: Ye.y1, x2: Ye.x2, y2: Ye.y2, multiplier: eo, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, createdAt: Bt, updatedAt: Bt });
    } else if (B === "text" && ke) {
      const Ye = po(ce, ke), Bt = Math.max(tv, Ye.x2 - Ye.x1 + 1);
      N = { cx: Ye.x1, cy: Ye.y1 }, R = Bt, j.value = "", F.value = true, ce = null, B = null;
      const Ba = Pl();
      ot(Ba), Be(() => {
        var _a3;
        return (_a3 = Y.value) == null ? void 0 : _a3.focus();
      });
      return;
    } else if (B === "decal" && L) ke && (L.x1 = Math.min(L.x1, ke.cx), L.y1 = Math.min(L.y1, ke.cy), L.x2 = Math.max(L.x2, ke.cx), L.y2 = Math.max(L.y2, ke.cy)), x.addDecal(Jp(L));
    else if (ke && Xe) {
      const Ye = po(ce, ke), Bt = qd() ? Kd(Ye, Xe) : Ye;
      b.addZone(Zp(Bt));
    }
    ce = null, B = null, L = null, Te.value = null, xe.value = null;
  }
  function ef(q) {
    if (Xd() || ce || Yd(q.target)) return;
    const ke = Pl();
    if (!ke) return;
    const Xe = Yf(q.clientX, q.clientY, ke), Ye = k0(Xe, ke);
    t.debug("Click \u2192", q.clientX, q.clientY, "\u2192 cell", Ye.cx, Ye.cy), h({ type: "toggle_cell", cx: Ye.cx, cy: Ye.cy, scrollCanvasPx: ke.scrollCanvasPx });
  }
  return Tt(() => {
    const q = n.value;
    if (!q) return;
    i = Math.round(window.innerWidth * devicePixelRatio), r = Math.round(window.innerHeight * devicePixelRatio), q.width = i, q.height = r;
    const ke = q.transferControlToOffscreen();
    l = new Worker(new URL("/assets/backgroundRenderer-WQNR2VcP.js", import.meta.url), { type: "module" }), l.onmessage = (ft) => {
      switch (ft.data.type) {
        case "ready":
          t.info(`${ft.data.backend.toUpperCase()} renderer active`), s.value = ft.data.gridInfo, h({ type: "set_zones", zones: v(b.zones.value) }), h({ type: "set_decals", decals: m(x.decals.value) }), V.regions.value.length > 0 && h({ type: "set_hires_regions", regions: V.regions.value.map((Tl) => ({ ...Tl })) }), I.blocks.value.length > 0 && h({ type: "set_text", blocks: De(I.blocks.value).map((Tl) => ({ ...De(Tl) })) }), So();
          break;
        case "grid_info":
          s.value = ft.data.gridInfo, So();
          break;
        case "zones_state":
          b.syncFromWorker(ft.data.zones);
          break;
        case "zones_error":
          t.error("Zone update rejected:", ft.data.message);
          break;
        case "decals_state":
          x.syncFromWorker(ft.data.decals);
          break;
        case "decals_error":
          t.error("Decal update rejected:", ft.data.message);
          break;
        case "hires_state":
          V.syncFromWorker(ft.data.regions);
          break;
        case "text_state":
          I.syncFromWorker(ft.data.blocks);
          break;
        case "text_error":
          t.error("Text update rejected:", ft.data.message);
          break;
        case "error":
          ft.data.phase === "gpu-init" ? t.debug(`GPU unavailable (${ft.data.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${ft.data.phase}]:`, ft.data.message);
          break;
      }
    }, l.onerror = (ft) => {
      t.error("Worker uncaught exception:", ft.message, `at ${ft.filename}:${ft.lineno}`);
    }, document.addEventListener("click", ef), document.addEventListener("pointerdown", Zd), document.addEventListener("pointermove", Jd), document.addEventListener("pointerup", Qd);
    const Xe = Gf(i, ev, devicePixelRatio), Ye = 0.8 * Xe * _o / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${Ye.toFixed(1)}px`), h({ type: "init", canvas: ke, cellPx: Xe }, [ke]), t.debug("Worker spawned, init message sent, gridPitch", Xe.toFixed(2)), c = document.querySelector(".v-main");
    let Bt = -1;
    const Ba = () => {
      h({ type: "frame" });
      const ft = (c == null ? void 0 : c.scrollTop) || window.scrollY;
      ft !== Bt && (Bt = ft, u.value = ft * devicePixelRatio, h({ type: "scroll", scrollY: u.value }), So(), ot()), a = requestAnimationFrame(Ba);
    };
    a = requestAnimationFrame(Ba), o = new ResizeObserver(([ft]) => {
      const Tl = Math.round(ft.contentRect.width * devicePixelRatio), vs = Math.round(ft.contentRect.height * devicePixelRatio);
      if (Tl === i && vs === r) return;
      i = Tl, r = vs;
      const Qp = Gf(Tl, ev, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * Qp * _o / devicePixelRatio).toFixed(1)}px`), h({ type: "resize", width: Tl, height: vs });
    }), o.observe(q);
  }), Mr(() => {
    F.value && Hn(), cancelAnimationFrame(a), o == null ? void 0 : o.disconnect(), document.removeEventListener("click", ef), document.removeEventListener("pointerdown", Zd), document.removeEventListener("pointermove", Jd), document.removeEventListener("pointerup", Qd), h({ type: "stop" }), l == null ? void 0 : l.terminate(), l = null;
  }), (q, ke) => (Ne(), Qe(be, null, [S("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), xe.value ? (Ne(), Qe("div", { key: 0, class: "zone-preview-overlay", style: ge(xe.value) }, null, 4)) : Qt("", true), F.value ? nt((Ne(), Qe("textarea", { key: 1, ref_key: "textInputRef", ref: Y, "onUpdate:modelValue": ke[0] || (ke[0] = (Xe) => j.value = Xe), class: "text-placement-input", style: ge(W.value), placeholder: "Type text...", onKeydown: Yp }, null, 36)), [[$r, j.value]]) : Qt("", true), g(qk, { zones: vt(b).zones.value, "preview-rect": Te.value, decals: vt(x).decals.value, "hires-regions": vt(V).regions.value, "text-blocks": vt(I).blocks.value, onAddZone: ee, onUpdateZone: de, onRemoveZone: oe, onClearZones: ue, onToolChange: Se, onDraftChange: ve, onAddDecal: Ie, onUpdateDecal: Q, onRemoveDecal: he, onClearDecals: Ce, onDecalToolChange: X, onAddHiresRegion: _e, onUpdateHiresRegion: Ae, onRemoveHiresRegion: Re, onClearHiresRegions: Ge, onHiresToolChange: ae, onAddText: ze, onUpdateText: dt, onRemoveText: at, onClearText: an, onTextToolChange: Nn, onHiresTextToolChange: Kp }, null, 8, ["zones", "preview-rect", "decals", "hires-regions", "text-blocks"])], 64));
} }), Qk = Kl(Jk, [["__scopeId", "data-v-4763f429"]]), ew = vn({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (n, l) => {
    const a = Me("v-app-bar-title"), o = Me("v-btn"), i = Me("v-app-bar");
    return Ne(), Ut(i, { elevation: "0", color: "background", border: "b" }, { append: ye(() => [(Ne(), Qe(be, null, hl(t, (r) => g(o, { key: r.label, href: r.href, variant: "text", size: "default", class: "nav-ink" }, { default: ye(() => [Le(Ee(r.label), 1)]), _: 2 }, 1032, ["href"])), 64))]), default: ye(() => [g(a, null, { default: ye(() => [...l[0] || (l[0] = [S("span", { class: "title-ink font-weight-bold" }, "Anjin Byte (Work in progress...)", -1)])]), _: 1 })]), _: 1 });
  };
} }), tw = { class: "text-medium-emphasis text-caption" }, nw = vn({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, l) => {
    const a = Me("v-footer");
    return Ne(), Ut(a, { color: "background", border: "t", class: "justify-center" }, { default: ye(() => [S("span", tw, " \xA9 " + Ee(vt(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), lw = {}, aw = { id: "hero", class: "hero-section" };
function ow(e, t) {
  const n = Me("v-btn"), l = Me("v-container");
  return Ne(), Qe("section", aw, [g(l, { class: "hero-container" }, { default: ye(() => [t[2] || (t[2] = S("h1", { class: "text-h3 font-weight-bold text-white mb-2" }, "Taylor Hale", -1)), t[3] || (t[3] = S("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript ", -1)), g(n, { color: "primary", href: "#projects", size: "large", variant: "elevated" }, { default: ye(() => [...t[0] || (t[0] = [Le(" View Projects ", -1)])]), _: 1 }), g(n, { class: "ml-3", href: "#contact", size: "large", variant: "outlined", color: "secondary" }, { default: ye(() => [...t[1] || (t[1] = [Le(" Contact ", -1)])]), _: 1 })]), _: 1 })]);
}
const iw = Kl(lw, [["render", ow], ["__scopeId", "data-v-bd3b897d"]]), rw = { id: "about" }, sw = { class: "d-flex flex-wrap ga-2" }, uw = vn({ __name: "AboutSection", setup(e) {
  const t = ["Rust", "WebAssembly", "TypeScript", "Vue 3", "Vite", "C++", "Python", "Linux", "OpenGL / WGPU", "Git"];
  return (n, l) => {
    const a = Me("v-chip"), o = Me("v-col"), i = Me("v-row"), r = Me("v-container");
    return Ne(), Qe("section", rw, [g(r, { class: "py-16" }, { default: ye(() => [g(i, { justify: "center" }, { default: ye(() => [g(o, { cols: "12", md: "8" }, { default: ye(() => [l[0] || (l[0] = S("h2", { class: "text-h4 font-weight-bold mb-6" }, "About", -1)), l[1] || (l[1] = S("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " I build high-performance systems with Rust and WebAssembly, bringing low-level computation to the web without sacrificing developer experience. I care about clean architecture, rigorous testing, and shipping things that actually work. ", -1)), S("div", sw, [(Ne(), Qe(be, null, hl(t, (s) => g(a, { key: s, color: "primary", variant: "tonal", size: "small" }, { default: ye(() => [Le(Ee(s), 1)]), _: 2 }, 1024)), 64))])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }), cw = { id: "projects" }, dw = { class: "d-flex flex-wrap ga-1" }, fw = vn({ __name: "ProjectsSection", setup(e) {
  const t = [{ title: "Conway's Game of Life", description: "Classic cellular automaton implemented in Rust, compiled to WebAssembly, and rendered via the Canvas API. Cell state is read directly from WASM linear memory.", tags: ["Rust", "WebAssembly", "Canvas", "Vue 3"], href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }];
  return (n, l) => {
    const a = Me("v-card-title"), o = Me("v-card-text"), i = Me("v-chip"), r = Me("v-btn"), s = Me("v-card-actions"), u = Me("v-card"), c = Me("v-col"), d = Me("v-row"), f = Me("v-container");
    return Ne(), Qe("section", cw, [g(f, { class: "py-16" }, { default: ye(() => [l[1] || (l[1] = S("h2", { class: "text-h4 font-weight-bold mb-8" }, "Projects", -1)), g(d, null, { default: ye(() => [(Ne(), Qe(be, null, hl(t, (v) => g(c, { key: v.title, cols: "12", md: "6", lg: "4" }, { default: ye(() => [g(u, { color: "surface", border: "", height: "100%", class: "d-flex flex-column" }, { default: ye(() => [g(a, { class: "text-h6 pt-5 px-5" }, { default: ye(() => [Le(Ee(v.title), 1)]), _: 2 }, 1024), g(o, { class: "text-medium-emphasis flex-grow-1 px-5" }, { default: ye(() => [Le(Ee(v.description), 1)]), _: 2 }, 1024), g(o, { class: "pt-0 px-5" }, { default: ye(() => [S("div", dw, [(Ne(true), Qe(be, null, hl(v.tags, (p) => (Ne(), Ut(i, { key: p, size: "x-small", color: "secondary", variant: "tonal" }, { default: ye(() => [Le(Ee(p), 1)]), _: 2 }, 1024))), 128))])]), _: 2 }, 1024), v.href ? (Ne(), Ut(s, { key: 0, class: "px-5 pb-5" }, { default: ye(() => [g(r, { href: v.href, target: "_blank", variant: "text", color: "primary", size: "small", "append-icon": "mdi-open-in-new" }, { default: ye(() => [...l[0] || (l[0] = [Le(" View on GitHub ", -1)])]), _: 1 }, 8, ["href"])]), _: 2 }, 1024)) : Qt("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)), 64))]), _: 1 })]), _: 1 })]);
  };
} }), vw = { id: "contact" }, mw = { class: "d-flex justify-center flex-wrap ga-3" }, gw = vn({ __name: "ContactSection", setup(e) {
  const t = [{ label: "GitHub", icon: "mdi-github", href: "https://github.com/Anjin-Byte", color: "white" }, { label: "Email", icon: "mdi-email-outline", href: "mailto:thalesarkanzen@gmail.com", color: "secondary" }];
  return (n, l) => {
    const a = Me("v-btn"), o = Me("v-container");
    return Ne(), Qe("section", vw, [g(o, { class: "py-16 text-center" }, { default: ye(() => [l[0] || (l[0] = S("h2", { class: "text-h4 font-weight-bold mb-4" }, "Get in Touch", -1)), l[1] || (l[1] = S("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Open to interesting problems. Reach out anytime. ", -1)), S("div", mw, [(Ne(), Qe(be, null, hl(t, (i) => g(a, { key: i.label, href: i.href, color: i.color, "prepend-icon": i.icon, variant: "outlined", target: "_blank", size: "large" }, { default: ye(() => [Le(Ee(i.label), 1)]), _: 2 }, 1032, ["href", "color", "prepend-icon"])), 64))])]), _: 1 })]);
  };
} }), hw = vn({ __name: "App", setup(e) {
  return (t, n) => {
    const l = Me("v-main"), a = Me("v-app");
    return Ne(), Ut(a, null, { default: ye(() => [g(Qk), g(ew), g(l, null, { default: ye(() => [g(iw), g(uw), g(fw), g(gw)]), _: 1 }), g(nw)]), _: 1 });
  };
} });
function Xg(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const tt = typeof window < "u", Bc = tt && "IntersectionObserver" in window, yw = tt && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), nv = tt && "EyeDropper" in window, $c = tt && "matchMedia" in window && typeof window.matchMedia == "function", qn = () => $c && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function lv(e, t, n) {
  bw(e, t), t.set(e, n);
}
function bw(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function av(e, t, n) {
  return e.set(qg(e, t), n), n;
}
function il(e, t) {
  return e.get(qg(e, t));
}
function qg(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Zg(e, t, n) {
  const l = t.length - 1;
  if (l < 0) return e === void 0 ? n : e;
  for (let a = 0; a < l; a++) {
    if (e == null) return n;
    e = e[t[a]];
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]];
}
function ma(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Zg(e, t.split("."), n));
}
function wt(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const a = t(e, n);
    return typeof a > "u" ? n : a;
  }
  if (typeof t == "string") return ma(e, t, n);
  if (Array.isArray(t)) return Zg(e, t, n);
  if (typeof t != "function") return n;
  const l = t(e, n);
  return typeof l > "u" ? n : l;
}
function Yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, l) => t + l);
}
function me(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function ga(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function iu(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Rc(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const ru = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function Jg(e) {
  return Object.keys(e);
}
function oa(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function cn(e, t) {
  const n = {};
  for (const l of t) Object.prototype.hasOwnProperty.call(e, l) && (n[l] = e[l]);
  return n;
}
function su(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? l[o] = e[o] : a[o] = e[o];
  return [l, a];
}
function He(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const Qg = /^on[^a-z]/, Fc = (e) => Qg.test(e), pw = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Sw = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function xw(e) {
  return e.isComposing && Sw.includes(e.key);
}
function tl(e) {
  const [t, n] = su(e, [Qg]), l = He(t, pw), [a, o] = su(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(a, t), Object.assign(o, l), [a, o];
}
function ut(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function eh(e, t) {
  let n = 0;
  const l = function() {
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), vt(t));
  };
  return l.clear = () => {
    clearTimeout(n);
  }, l.immediate = e, l;
}
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ov(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function iv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function rv(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function kw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let l = 0;
  for (; l < e.length; ) n.push(e.substr(l, t)), l += t;
  return n;
}
function sv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let l = -1;
  for (; Math.abs(e) >= t && l < n.length - 1; ) e /= t, ++l;
  return `${e.toFixed(1)} ${n[l]}B`;
}
function jt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e) l[a] = e[a];
  for (const a in t) {
    const o = e[a], i = t[a];
    if (iu(o) && iu(i)) {
      l[a] = jt(o, i, n);
      continue;
    }
    if (n && Array.isArray(o) && Array.isArray(i)) {
      l[a] = n(o, i);
      continue;
    }
    l[a] = i;
  }
  return l;
}
function th(e) {
  return e.map((t) => t.type === be ? th(t.children) : t).flat();
}
function ra() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ra.cache.has(e)) return ra.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ra.cache.set(e, t), t;
}
ra.cache = /* @__PURE__ */ new Map();
function ja(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => ja(e, n)).flat(1);
  if (t.suspense) return ja(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => ja(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return ja(e, t.component.subTree).flat(1);
  }
  return [];
}
var Ra = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap();
class nh {
  constructor(t) {
    lv(this, Ra, []), lv(this, ea, 0), this.size = t;
  }
  get isFull() {
    return il(Ra, this).length === this.size;
  }
  push(t) {
    il(Ra, this)[il(ea, this)] = t, av(ea, this, (il(ea, this) + 1) % this.size);
  }
  values() {
    return il(Ra, this).slice(il(ea, this)).concat(il(Ra, this).slice(0, il(ea, this)));
  }
  clear() {
    il(Ra, this).length = 0, av(ea, this, 0);
  }
}
function ww(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function Lc(e) {
  const t = Rt({});
  ht(() => {
    const l = e();
    for (const a in l) t[a] = l[a];
  }, { flush: "sync" });
  const n = {};
  for (const l in t) n[l] = $(() => t[l]);
  return n;
}
function dr(e, t) {
  return e.includes(t);
}
function lh(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Nt = () => [Function, Array];
function uv(e, t) {
  return t = "on" + el(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function pi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
  if (Array.isArray(e)) for (const a of e) a(...n);
  else typeof e == "function" && e(...n);
}
function Fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let l;
  try {
    l = [...e.querySelectorAll(n)];
  } catch {
    return [];
  }
  return l.filter((a) => !a.closest("[inert]")).filter((a) => !!a.offsetParent || a.getClientRects().length > 0).filter((a) => {
    var _a3, _b2;
    return !((_a3 = a.parentElement) == null ? void 0 : _a3.closest("details:not([open])")) || a.tagName === "SUMMARY" && ((_b2 = a.parentElement) == null ? void 0 : _b2.tagName) === "DETAILS";
  });
}
function ah(e, t, n) {
  let l, a = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    a += o, l = e[a];
  while ((!l || l.offsetParent == null || !((n == null ? void 0 : n(l)) ?? true)) && a < e.length && a >= 0);
  return l;
}
function sa(e, t) {
  var _a3, _b2, _c2, _d2;
  const n = Fl(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a3 = n[0]) == null ? void 0 : _a3.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const l = ah(n, t);
    l ? l.focus() : sa(e, t === "next" ? "first" : "last");
  }
}
function To(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Rr() {
}
function no(e, t) {
  if (!(tt && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Fr(e) {
  return e.some((t) => Ko(t) ? t.type === Jt ? false : t.type !== be || Fr(t.children) : true) ? e : null;
}
function Oi(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function Cw(e, t) {
  if (!tt || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function _w(e, t) {
  const n = e.clientX, l = e.clientY, a = t.getBoundingClientRect(), o = a.left, i = a.top, r = a.right, s = a.bottom;
  return n >= o && n <= r && l >= i && l <= s;
}
function Zo() {
  const e = re(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => Rc(e.value) }), t;
}
function lo(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Hl(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function fr(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function Vw(e, t, n) {
  const l = new RegExp(`[\\d\\-${fr(n)}]`), a = e.split("").filter((i) => l.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return a.split(n)[0];
  const o = new RegExp(`${fr(n)}\\d`);
  if (t !== null && o.test(a)) {
    const i = a.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return a;
}
function Iw(e) {
  const t = {};
  for (const n in e) t[fn(n)] = e[n];
  return t;
}
function Pw(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [l, a] = n;
    return t.includes(l) ? !!a : a !== void 0;
  }));
}
function cv(e) {
  const t = (n) => Array.isArray(n) ? n.map((l) => t(l)) : Ct(n) || Rl(n) || mi(n) ? t(De(n)) : iu(n) ? Object.keys(n).reduce((l, a) => (l[a] = t(n[a]), l), {}) : n;
  return t(e);
}
const oh = ["top", "bottom"], Tw = ["start", "end", "left", "right"];
function uu(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = dr(oh, n) ? "start" : dr(Tw, n) ? "top" : "center"), { side: cu(n, t), align: cu(l, t) };
}
function cu(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function As(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Ds(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function dv(e) {
  return { side: e.align, align: e.side };
}
function fv(e) {
  return dr(oh, e.side) ? "y" : "x";
}
class Pn {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, l = t instanceof Element, a = l ? 1 + (1 - n) / n : 1, { x: o, y: i, width: r, height: s } = l ? t.getBoundingClientRect() : t;
    this.x = o * a, this.y = i * a, this.width = r * a, this.height = s * a;
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
function vv(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function ih(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new Pn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new Pn(e);
}
function Aw(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new Pn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new Pn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new Pn(e);
}
function Oc(e) {
  const t = new Pn(e), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let a, o, i, r, s;
    if (l.startsWith("matrix3d(")) a = l.slice(9, -1).split(/, /), o = Number(a[0]), i = Number(a[5]), r = Number(a[12]), s = Number(a[13]);
    else if (l.startsWith("matrix(")) a = l.slice(7, -1).split(/, /), o = Number(a[0]), i = Number(a[3]), r = Number(a[4]), s = Number(a[5]);
    else return new Pn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new Pn({ x: c, y: d, width: f, height: v });
  } else return new Pn(t);
}
function ul(e, t, n) {
  if (typeof e.animate > "u") return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return typeof l.finished > "u" && (l.finished = new Promise((a) => {
    l.onfinish = () => {
      a(l);
    };
  })), l;
}
const Zi = /* @__PURE__ */ new WeakMap();
function Dw(e, t) {
  Object.keys(t).forEach((n) => {
    if (Fc(n)) {
      const l = lh(n), a = Zi.get(e);
      if (t[n] == null) a == null ? void 0 : a.forEach((o) => {
        const [i, r] = o;
        i === l && (e.removeEventListener(l, r), a.delete(o));
      });
      else if (!a || ![...a].some((o) => o[0] === l && o[1] === t[n])) {
        e.addEventListener(l, t[n]);
        const o = a || /* @__PURE__ */ new Set();
        o.add([l, t[n]]), Zi.has(e) || Zi.set(e, o);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Mw(e, t) {
  Object.keys(t).forEach((n) => {
    if (Fc(n)) {
      const l = lh(n), a = Zi.get(e);
      a == null ? void 0 : a.forEach((o) => {
        const [i, r] = o;
        i === l && (e.removeEventListener(l, r), a.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Fa = 2.4, mv = 0.2126729, gv = 0.7151522, hv = 0.072175, Ew = 0.55, Bw = 0.58, $w = 0.57, Rw = 0.62, Ni = 0.03, yv = 1.45, Fw = 5e-4, Lw = 1.25, Ow = 1.25, bv = 0.078, pv = 12.82051282051282, Hi = 0.06, Sv = 1e-3;
function xv(e, t) {
  const n = (e.r / 255) ** Fa, l = (e.g / 255) ** Fa, a = (e.b / 255) ** Fa, o = (t.r / 255) ** Fa, i = (t.g / 255) ** Fa, r = (t.b / 255) ** Fa;
  let s = n * mv + l * gv + a * hv, u = o * mv + i * gv + r * hv;
  if (s <= Ni && (s += (Ni - s) ** yv), u <= Ni && (u += (Ni - u) ** yv), Math.abs(u - s) < Fw) return 0;
  let c;
  if (u > s) {
    const d = (u ** Ew - s ** Bw) * Lw;
    c = d < Sv ? 0 : d < bv ? d - d * pv * Hi : d - Hi;
  } else {
    const d = (u ** Rw - s ** $w) * Ow;
    c = d > -Sv ? 0 : d > -bv ? d - d * pv * Hi : d + Hi;
  }
  return c * 100;
}
const vr = 0.20689655172413793, Nw = (e) => e > vr ** 3 ? Math.cbrt(e) : e / (3 * vr ** 2) + 4 / 29, Hw = (e) => e > vr ? e ** 3 : 3 * vr ** 2 * (e - 4 / 29);
function rh(e) {
  const t = Nw, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function sh(e) {
  const t = Hw, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const zw = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Ww = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, jw = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Uw = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function uh(e) {
  const t = Array(3), n = Ww, l = zw;
  for (let a = 0; a < 3; ++a) t[a] = Math.round(et(n(l[a][0] * e[0] + l[a][1] * e[1] + l[a][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function Nc(e) {
  let { r: t, g: n, b: l } = e;
  const a = [0, 0, 0], o = Uw, i = jw;
  t = o(t / 255), n = o(n / 255), l = o(l / 255);
  for (let r = 0; r < 3; ++r) a[r] = i[r][0] * t + i[r][1] * n + i[r][2] * l;
  return a;
}
function du(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Gw(e) {
  return du(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const kv = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Yw = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => wv({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => wv({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => Zn({ h: e, s: t, v: n, a: l }) };
function pn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && kv.test(e)) {
    const { groups: t } = e.match(kv), { fn: n, values: l } = t, a = l.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return Yw[n](...a);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), vh(t);
  } else if (typeof e == "object") {
    if (oa(e, ["r", "g", "b"])) return e;
    if (oa(e, ["h", "s", "l"])) return Zn(Hc(e));
    if (oa(e, ["h", "s", "v"])) return Zn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Zn(e) {
  const { h: t, s: n, v: l, a } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return l - l * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a };
}
function wv(e) {
  return Zn(Hc(e));
}
function Si(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, l = e.b / 255, a = Math.max(t, n, l), o = Math.min(t, n, l);
  let i = 0;
  a !== o && (a === t ? i = 60 * (0 + (n - l) / (a - o)) : a === n ? i = 60 * (2 + (l - t) / (a - o)) : a === l && (i = 60 * (4 + (t - n) / (a - o)))), i < 0 && (i = i + 360);
  const r = a === 0 ? 0 : (a - o) / a, s = [i, r, a];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function fu(e) {
  const { h: t, s: n, v: l, a } = e, o = l - l * n / 2, i = o === 1 || o === 0 ? 0 : (l - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a };
}
function Hc(e) {
  const { h: t, s: n, l, a } = e, o = l + n * Math.min(l, 1 - l), i = o === 0 ? 0 : 2 - 2 * l / o;
  return { h: t, s: i, v: o, a };
}
function ch(e) {
  let { r: t, g: n, b: l, a } = e;
  return a === void 0 ? `rgb(${t}, ${n}, ${l})` : `rgba(${t}, ${n}, ${l}, ${a})`;
}
function dh(e) {
  return ch(Zn(e));
}
function zi(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function fh(e) {
  let { r: t, g: n, b: l, a } = e;
  return `#${[zi(t), zi(n), zi(l), a !== void 0 ? zi(Math.round(a * 255)) : ""].join("")}`;
}
function vh(e) {
  e = Xw(e);
  let [t, n, l, a] = kw(e, 2).map((o) => parseInt(o, 16));
  return a = a === void 0 ? a : a / 255, { r: t, g: n, b: l, a };
}
function Kw(e) {
  const t = vh(e);
  return Si(t);
}
function mh(e) {
  return fh(Zn(e));
}
function Xw(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = iv(iv(e, 6), 8, "F")), e;
}
function qw(e, t) {
  const n = rh(Nc(e));
  return n[0] = n[0] + t * 10, uh(sh(n));
}
function Zw(e, t) {
  const n = rh(Nc(e));
  return n[0] = n[0] - t * 10, uh(sh(n));
}
function vu(e) {
  const t = pn(e);
  return Nc(t)[1];
}
function Jw(e, t) {
  const n = vu(e), l = vu(t), a = Math.max(n, l), o = Math.min(n, l);
  return (a + 0.05) / (o + 0.05);
}
function gh(e) {
  const t = Math.abs(xv(pn(0), pn(e)));
  return Math.abs(xv(pn(16777215), pn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function U(e, t) {
  return (n) => Object.keys(e).reduce((l, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return n && a in n ? l[a] = { ...i, default: n[a] } : l[a] = i, t && !l[a].source && (l[a].source = t), l;
  }, {});
}
const we = U({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function _t(e, t) {
  const n = yi();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function nl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = _t(e).type;
  return ra((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Qw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _t("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const ao = Symbol.for("vuetify:defaults");
function e1(e) {
  return H(e);
}
function zc() {
  const e = Ue(ao);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pt(e, t) {
  const n = zc(), l = H(e), a = _(() => {
    if (vt(t == null ? void 0 : t.disabled)) return n.value;
    const i = vt(t == null ? void 0 : t.scoped), r = vt(t == null ? void 0 : t.reset), s = vt(t == null ? void 0 : t.root);
    if (l.value == null && !(i || r || s)) return n.value;
    let u = jt(l.value, { prev: n.value });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = jt(jt(u, { prev: u }), u[s])), u;
    }
    return u.prev ? jt(u.prev, u) : u;
  });
  return mt(ao, a), a;
}
function t1(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[ra(t)] < "u");
}
function n1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zc();
  const l = _t("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const a = _(() => {
    var _a3;
    return (_a3 = n.value) == null ? void 0 : _a3[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a3, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a3 = a.value) == null ? void 0 : _a3[u], c].filter((v) => v != null);
    if (t1(l.vnode, u)) return c;
    const d = (_b2 = a.value) == null ? void 0 : _b2[u];
    if (d !== void 0) return d;
    const f = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return f !== void 0 ? f : c;
  } }), i = re();
  ht(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else i.value = void 0;
  });
  function r() {
    const s = Qw(ao, l);
    mt(ao, _(() => i.value ? jt((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return { props: o, provideSubDefaults: r };
}
function nn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = U(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(l) {
      return cn(l, t);
    }, e.props._as = String, e.setup = function(l, a) {
      const o = zc();
      if (!o.value) return e._setup(l, a);
      const { props: i, provideSubDefaults: r } = n1(l, l._as ?? e.name, o), s = e._setup(i, a);
      return r(), s;
    };
  }
  return e;
}
function te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? nn : vn)(t);
}
function l1(e, t) {
  return t.props = e, t;
}
function kl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return te()({ name: n ?? el(fn(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...we() }, setup(l, a) {
    let { slots: o } = a;
    return () => {
      var _a3;
      return xl(l.tag, { class: [e, l.class], style: l.style }, (_a3 = o.default) == null ? void 0 : _a3.call(o));
    };
  } });
}
function a1(e, t, n, l) {
  if (!n || Hl(e) || Hl(t)) return;
  const a = n.get(e);
  if (a) a.set(t, l);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, l), n.set(e, o);
  }
}
function o1(e, t, n) {
  var _a3, _b2;
  if (!n || Hl(e) || Hl(t)) return null;
  const l = (_a3 = n.get(e)) == null ? void 0 : _a3.get(t);
  if (typeof l == "boolean") return l;
  const a = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof a == "boolean" ? a : null;
}
function Ft(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const l = Object.keys(e);
  if (l.length !== Object.keys(t).length) return false;
  const a = o1(e, t, n);
  return a || (a1(e, t, n, true), l.every((o) => Ft(e[o], t[o], n)));
}
function hh(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Jo = "cubic-bezier(0.4, 0, 0.2, 1)", Cv = "cubic-bezier(0.0, 0, 0.2, 1)", _v = "cubic-bezier(0.4, 0, 1, 1)", i1 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function Sn(e, t, n) {
  return Object.keys(e).filter((l) => Fc(l) && l.endsWith(t)).reduce((l, a) => (l[a.slice(0, -t.length)] = (o) => pi(e[a], o, n(o)), l), {});
}
function Lr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? r1(e) : Wc(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function mr(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Wc(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Wc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, l = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || l;
}
function r1(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function s1(e) {
  let { depth: t, isLast: n, isLastGroup: l, leafLinks: a, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!l || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...a ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function u1(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function le(e) {
  const t = _t("useRender");
  t.render = e;
}
function c1(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, l = 0, a = 0, o = false, i = 0;
  function r() {
    clearTimeout(l), o = false, i = 0;
  }
  const s = function() {
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++) c[d] = arguments[d];
    clearTimeout(l);
    const f = Date.now();
    i || (i = f);
    const v = f - Math.max(i, a);
    function p() {
      a = Date.now(), l = setTimeout(r, t), e(...c);
    }
    o ? v >= t ? p() : n.trailing && (l = setTimeout(p, t - v)) : (o = true, n.leading && p());
  };
  return s.clear = r, s.immediate = e, s;
}
const Pe = [String, Function, Object, Array], mu = Symbol.for("vuetify:icons"), Or = U({ icon: { type: Pe }, tag: { type: [String, Object, Function], required: true } }, "icon"), gu = te()({ name: "VComponentIcon", props: Or(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return g(e.tag, null, { default: () => {
      var _a3;
      return [e.icon ? g(l, null, null) : (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  };
} }), jc = nn({ name: "VSvgIcon", inheritAttrs: false, props: Or(), setup(e, t) {
  let { attrs: n } = t;
  return () => g(e.tag, J(n, { style: null }), { default: () => [S("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? S("path", { d: l[0], "fill-opacity": l[1] }, null) : S("path", { d: l }, null)) : S("path", { d: e.icon }, null)])] });
} }), d1 = nn({ name: "VLigatureIcon", props: Or(), setup(e) {
  return () => g(e.tag, null, { default: () => [e.icon] });
} }), Uc = nn({ name: "VClassIcon", props: Or(), setup(e) {
  return () => g(e.tag, { class: ne(e.icon) }, null);
} }), f1 = (e) => {
  const t = Ue(mu);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a3;
    const l = st(e);
    if (!l) return { component: gu };
    let a = l;
    if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (_a3 = t.aliases) == null ? void 0 : _a3[a.slice(1)])), Array.isArray(a)) return { component: jc, icon: a };
    if (typeof a != "string") return { component: gu, icon: a };
    const o = Object.keys(t.sets).find((s) => typeof a == "string" && a.startsWith(`${s}:`)), i = o ? a.slice(o.length + 1) : a;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, v1 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, m1 = { component: (e) => xl(Uc, { ...e, class: "mdi" }) };
function g1() {
  return { svg: { component: jc }, class: { component: Uc } };
}
function h1(e) {
  const t = g1(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = m1), jt({ defaultSet: n, sets: t, aliases: { ...v1, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Ht(e, t) {
  let n;
  function l() {
    n = Za(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), l();
    }) : t());
  }
  se(e, (a) => {
    a && !n ? l() : a || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), kt(() => {
    n == null ? void 0 : n.stop();
  });
}
function Ve(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const o = _t("useProxiedModel"), i = H(e[t] !== void 0 ? e[t] : n), r = ra(t), u = _(r !== t ? () => {
    var _a3, _b2, _c2, _d2;
    return e[t], !!((((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a3, _b2;
    return e[t], !!(((_a3 = o.vnode.props) == null ? void 0 : _a3.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  Ht(() => !u.value, () => {
    se(() => e[t], (d) => {
      i.value = d;
    });
  });
  const c = _({ get() {
    const d = e[t];
    return l(u.value ? d : i.value);
  }, set(d) {
    const f = a(d), v = De(u.value ? e[t] : i.value);
    v === f || l(v) === d || (i.value = f, o == null ? void 0 : o.emit(`update:${t}`, f));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : i.value }), c;
}
const y1 = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, Vv = "$vuetify.", Iv = (e, t) => e.replace(/\{(\d+)\}/g, (n, l) => String(t[Number(l)])), yh = (e, t, n) => function(l) {
  for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) o[i - 1] = arguments[i];
  if (!l.startsWith(Vv)) return Iv(l, o);
  const r = l.replace(Vv, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = ma(s, r, null);
  return c || (`${l}${e.value}`, c = ma(u, r, null)), c || (c = l), typeof c != "string" && (c = l), Iv(c, o);
};
function Gc(e, t) {
  return (n, l) => new Intl.NumberFormat([e.value, t.value], l).format(n);
}
function bh(e, t) {
  return Gc(e, t)(0.1).includes(",") ? "," : ".";
}
function Ms(e, t, n) {
  const l = Ve(e, t, e[t] ?? n.value);
  return l.value = e[t] ?? n.value, se(n, (a) => {
    e[t] == null && (l.value = n.value);
  }), l;
}
function ph(e) {
  return (t) => {
    const n = Ms(t, "locale", e.current), l = Ms(t, "fallback", e.fallback), a = Ms(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: l, messages: a, decimalSeparator: $(() => bh(n, l)), t: yh(n, l, a), n: Gc(n, l), provide: ph({ current: n, fallback: l, messages: a }) };
  };
}
function b1(e) {
  const t = re((e == null ? void 0 : e.locale) ?? "en"), n = re((e == null ? void 0 : e.fallback) ?? "en"), l = H({ en: y1, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: l, decimalSeparator: $(() => (e == null ? void 0 : e.decimalSeparator) ?? bh(t, n)), t: yh(t, n, l), n: Gc(t, n), provide: ph({ current: t, fallback: n, messages: l }) };
}
const oo = Symbol.for("vuetify:locale");
function p1(e) {
  return e.name != null;
}
function S1(e) {
  const t = (e == null ? void 0 : e.adapter) && p1(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : b1(e), n = k1(t, e);
  return { ...t, ...n };
}
function lt() {
  const e = Ue(oo);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Sh(e) {
  const t = Ue(oo);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), l = w1(n, t.rtl, e), a = { ...n, ...l };
  return mt(oo, a), a;
}
function x1() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function k1(e, t) {
  const n = H((t == null ? void 0 : t.rtl) ?? x1()), l = _(() => n.value[e.current.value] ?? false);
  return { isRtl: l, rtl: n, rtlClasses: $(() => `v-locale--is-${l.value ? "rtl" : "ltr"}`) };
}
function w1(e, t, n) {
  const l = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: l, rtl: t, rtlClasses: $(() => `v-locale--is-${l.value ? "rtl" : "ltr"}`) };
}
function At() {
  const e = Ue(oo);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
function xi(e) {
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
function C1(e, t, n) {
  var _a3;
  const l = [];
  let a = [];
  const o = xh(e), i = kh(e), r = n ?? ((_a3 = xi(t)) == null ? void 0 : _a3.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
  for (let c = 0; c < s; c++) {
    const d = new Date(o);
    d.setDate(d.getDate() - (s - c)), a.push(d);
  }
  for (let c = 1; c <= i.getDate(); c++) {
    const d = new Date(e.getFullYear(), e.getMonth(), c);
    a.push(d), a.length === 7 && (l.push(a), a = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const d = new Date(i);
    d.setDate(d.getDate() + c), a.push(d);
  }
  return a.length > 0 && l.push(a), l;
}
function No(e, t, n) {
  var _a3;
  let l = (n ?? ((_a3 = xi(t)) == null ? void 0 : _a3.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(l) || (l = 0);
  const a = new Date(e);
  for (; a.getDay() !== l; ) a.setDate(a.getDate() - 1);
  return a;
}
function _1(e, t) {
  var _a3;
  const n = new Date(e), l = ((((_a3 = xi(t)) == null ? void 0 : _a3.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== l; ) n.setDate(n.getDate() + 1);
  return n;
}
function xh(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function kh(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function V1(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const I1 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function wh(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (I1.test(e)) return V1(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Pv = new Date(2e3, 0, 2);
function P1(e, t, n) {
  var _a3;
  const l = t ?? ((_a3 = xi(e)) == null ? void 0 : _a3.firstDay) ?? 0;
  return Yn(7).map((a) => {
    const o = new Date(Pv);
    return o.setDate(Pv.getDate() + l + a), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function T1(e, t, n, l) {
  const a = wh(e) ?? /* @__PURE__ */ new Date(), o = l == null ? void 0 : l[t];
  if (typeof o == "function") return o(a, t, n);
  let i = {};
  switch (t) {
    case "fullDate":
      i = { year: "numeric", month: "short", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      i = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const r = a.getDate(), s = new Intl.DateTimeFormat(n, { month: "long" }).format(a);
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
      return new Intl.NumberFormat(n).format(a.getDate());
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
      return i = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric" }, new Intl.DateTimeFormat(n, i).format(a).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return i = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true }, new Intl.DateTimeFormat(n, i).format(a).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return i = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: false }, new Intl.DateTimeFormat(n, i).format(a).replace(/, /g, " ");
    default:
      i = o ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, i).format(a);
}
function A1(e, t) {
  const n = e.toJsDate(t), l = n.getFullYear(), a = rv(String(n.getMonth() + 1), 2, "0"), o = rv(String(n.getDate()), 2, "0");
  return `${l}-${a}-${o}`;
}
function D1(e) {
  const [t, n, l] = e.split("-").map(Number);
  return new Date(t, n - 1, l);
}
function M1(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function E1(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function ua(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function B1(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function $1(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function Qo(e) {
  return e.getFullYear();
}
function R1(e) {
  return e.getMonth();
}
function F1(e, t, n, l) {
  const a = xi(t), o = n ?? (a == null ? void 0 : a.firstDay) ?? 0, i = (a == null ? void 0 : a.firstWeekSize) ?? 1;
  return l !== void 0 ? L1(e, t, o, l) : O1(e, t, o, i);
}
function L1(e, t, n, l) {
  const a = (7 + l - n) % 7, o = No(e, t, n), i = ua(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = Qo(o);
  s < Qo(i) && r(s + 1) <= a && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= a ? ua(u, -c) : ua(u, 7 - c);
  return 1 + hr(Yc(o), ei(d), "weeks");
}
function O1(e, t, n, l) {
  const a = No(e, t, n), o = ua(No(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - hr(f, No(f, t, n), "days");
  }
  let r = Qo(a);
  r < Qo(o) && i(r + 1) >= l && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= l ? ua(s, u - 7) : ua(s, u);
  return 1 + hr(Yc(a), ei(c), "weeks");
}
function N1(e) {
  return e.getDate();
}
function H1(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function z1(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function W1(e) {
  return e.getHours();
}
function j1(e) {
  return e.getMinutes();
}
function U1(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function G1(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Y1(e, t) {
  return gr(e, t[0]) && q1(e, t[1]);
}
function K1(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function gr(e, t) {
  return e.getTime() > t.getTime();
}
function X1(e, t) {
  return gr(ei(e), ei(t));
}
function q1(e, t) {
  return e.getTime() < t.getTime();
}
function Tv(e, t) {
  return e.getTime() === t.getTime();
}
function Z1(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function J1(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Q1(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function hr(e, t, n) {
  const l = new Date(e), a = new Date(t);
  switch (n) {
    case "years":
      return l.getFullYear() - a.getFullYear();
    case "quarters":
      return Math.floor((l.getMonth() - a.getMonth() + (l.getFullYear() - a.getFullYear()) * 12) / 4);
    case "months":
      return l.getMonth() - a.getMonth() + (l.getFullYear() - a.getFullYear()) * 12;
    case "weeks":
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((l.getTime() - a.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((l.getTime() - a.getTime()) / 1e3);
    default:
      return l.getTime() - a.getTime();
  }
}
function eC(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function tC(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function nC(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function lC(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function aC(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function ei(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Yc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class oC {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return wh(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return A1(this, t);
  }
  parseISO(t) {
    return D1(t);
  }
  addMinutes(t, n) {
    return M1(t, n);
  }
  addHours(t, n) {
    return E1(t, n);
  }
  addDays(t, n) {
    return ua(t, n);
  }
  addWeeks(t, n) {
    return B1(t, n);
  }
  addMonths(t, n) {
    return $1(t, n);
  }
  getWeekArray(t, n) {
    const l = n !== void 0 ? Number(n) : void 0;
    return C1(t, this.locale, l);
  }
  startOfWeek(t, n) {
    const l = n !== void 0 ? Number(n) : void 0;
    return No(t, this.locale, l);
  }
  endOfWeek(t) {
    return _1(t, this.locale);
  }
  startOfMonth(t) {
    return xh(t);
  }
  endOfMonth(t) {
    return kh(t);
  }
  format(t, n) {
    return T1(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Tv(t, n);
  }
  isValid(t) {
    return K1(t);
  }
  isWithinRange(t, n) {
    return Y1(t, n);
  }
  isAfter(t, n) {
    return gr(t, n);
  }
  isAfterDay(t, n) {
    return X1(t, n);
  }
  isBefore(t, n) {
    return !gr(t, n) && !Tv(t, n);
  }
  isSameDay(t, n) {
    return Z1(t, n);
  }
  isSameMonth(t, n) {
    return J1(t, n);
  }
  isSameYear(t, n) {
    return Q1(t, n);
  }
  setMinutes(t, n) {
    return tC(t, n);
  }
  setHours(t, n) {
    return eC(t, n);
  }
  setMonth(t, n) {
    return nC(t, n);
  }
  setDate(t, n) {
    return lC(t, n);
  }
  setYear(t, n) {
    return aC(t, n);
  }
  getDiff(t, n, l) {
    return hr(t, n, l);
  }
  getWeekdays(t, n) {
    const l = t !== void 0 ? Number(t) : void 0;
    return P1(this.locale, l, n);
  }
  getYear(t) {
    return Qo(t);
  }
  getMonth(t) {
    return R1(t);
  }
  getWeek(t, n, l) {
    const a = n !== void 0 ? Number(n) : void 0, o = l !== void 0 ? Number(l) : void 0;
    return F1(t, this.locale, a, o);
  }
  getDate(t) {
    return N1(t);
  }
  getNextMonth(t) {
    return H1(t);
  }
  getPreviousMonth(t) {
    return z1(t);
  }
  getHours(t) {
    return W1(t);
  }
  getMinutes(t) {
    return j1(t);
  }
  startOfDay(t) {
    return ei(t);
  }
  endOfDay(t) {
    return Yc(t);
  }
  startOfYear(t) {
    return U1(t);
  }
  endOfYear(t) {
    return G1(t);
  }
}
const Ch = Symbol.for("vuetify:date-options"), Av = Symbol.for("vuetify:date-adapter");
function iC(e, t) {
  const n = jt({ adapter: oC, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Vh(n, t) };
}
function rC(e, t, n) {
  const l = _h(e, t, n), a = [t];
  for (let o = 1; o < l; o++) {
    const i = e.addDays(t, o);
    a.push(i);
  }
  return n && a.push(e.endOfDay(n)), a;
}
function _h(e, t, n) {
  const l = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(l[0], l[1], "days") : e.getDiff(e.date(l[0]), e.date(l[1]), "days");
}
function Vh(e, t) {
  const n = Rt(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return se(t.current, (l) => {
    n.locale = e.locale[l] ?? l ?? n.locale;
  }), n;
}
function wa() {
  const e = Ue(Ch);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = lt();
  return Vh(e, t);
}
const Nr = ["sm", "md", "lg", "xl", "xxl"], hu = Symbol.for("vuetify:display"), Dv = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, sC = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dv;
  return jt(Dv, e);
};
function Mv(e) {
  return tt && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Ev(e) {
  return tt && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Bv(e) {
  const t = tt && !e ? window.navigator.userAgent : "ssr";
  function n(p) {
    return !!t.match(p);
  }
  const l = n(/android/i), a = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: l, ios: a, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: yw, ssr: t === "ssr" };
}
function uC(e, t) {
  const { thresholds: n, mobileBreakpoint: l } = sC(e), a = re(Ev(t)), o = re(Bv(t)), i = Rt({}), r = re(Mv(t));
  function s() {
    a.value = Ev(), r.value = Mv();
  }
  function u() {
    s(), o.value = Bv();
  }
  return ht(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), p = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, h = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : p ? "xl" : "xxl", b = typeof l == "number" ? l : n[l], x = r.value < b;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = p, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || p || m), i.mdAndDown = !(v || p || m), i.lgAndDown = !(p || m), i.xlAndDown = !m, i.name = h, i.height = a.value, i.width = r.value, i.mobile = x, i.mobileBreakpoint = l, i.platform = o.value, i.thresholds = n;
  }), tt && (window.addEventListener("resize", s, { passive: true }), kt(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...co(i), update: u, ssr: !!t };
}
const Ca = U({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function Cn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  const n = Ue(hu);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const l = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: $(() => t ? { [`${t}--mobile`]: l.value } : {}), mobile: l };
}
const Ih = Symbol.for("vuetify:goto");
function Ph() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: i1 };
}
function cC(e) {
  return Kc(e) ?? (document.scrollingElement || document.body);
}
function Kc(e) {
  return typeof e == "string" ? document.querySelector(e) : Rc(e);
}
function Es(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let l = Kc(e), a = 0;
  for (; l; ) a += t ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
function dC(e, t) {
  return { rtl: t.isRtl, options: jt(Ph(), e) };
}
async function $v(e, t, n, l) {
  const a = n ? "scrollLeft" : "scrollTop", o = jt((l == null ? void 0 : l.options) ?? Ph(), t), i = l == null ? void 0 : l.rtl.value, r = (typeof e == "number" ? e : Kc(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : cC(o.container), u = qn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = Es(r, n, i);
  else if (c = Es(r, n, i) - Es(s, n, i), o.layout) {
    const p = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    p && (c -= parseInt(p, 10));
  }
  c += o.offset, c = vC(s, c, !!i, !!n);
  const d = s[a] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function p(m) {
    const b = (m - f) / o.duration, x = Math.floor(d + (c - d) * u(et(b, 0, 1)));
    if (s[a] = x, b >= 1 && Math.abs(x - s[a]) < 10) return v(c);
    if (b > 2) return v(s[a]);
    requestAnimationFrame(p);
  }));
}
function fC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Ue(Ih), { isRtl: n } = At();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const l = { ...t, rtl: $(() => t.rtl.value || n.value) };
  async function a(o, i) {
    return $v(o, jt(e, i), false, l);
  }
  return a.horizontal = async (o, i) => $v(o, jt(e, i), true, l), a;
}
function vC(e, t, n, l) {
  const { scrollWidth: a, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return l ? n ? (s = -(a - i), u = 0) : (s = 0, u = a - i) : (s = 0, u = o + -r), et(t, s, u);
}
const ti = Symbol.for("vuetify:theme"), Ke = U({ theme: String }, "theme");
function Rv() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function mC() {
  var _a3, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rv();
  const t = Rv();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [l, a] of Object.entries(e.themes ?? {})) {
    const o = a.dark || l === "dark" ? (_a3 = t.themes) == null ? void 0 : _a3.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[l] = jt(o, a);
  }
  return jt(t, { ...e, themes: n });
}
function ta(e, t, n, l) {
  e.push(`${bC(t, l)} {
`, ...n.map((a) => `  ${a};
`), `}
`);
}
function Fv(e, t) {
  const n = e.dark ? 2 : 1, l = e.dark ? 1 : 2, a = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = pn(i);
    a.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || a.push(`--${t}theme-${o}-overlay-multiplier: ${vu(i) > 0.18 ? n : l}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? pn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    a.push(`--${t}${o}: ${s ?? i}`);
  }
  return a;
}
function gC(e, t, n) {
  const l = {};
  if (n) for (const a of ["lighten", "darken"]) {
    const o = a === "lighten" ? qw : Zw;
    for (const i of Yn(n[a], 1)) l[`${e}-${a}-${i}`] = fh(o(pn(t), i));
  }
  return l;
}
function hC(e, t) {
  if (!t) return {};
  let n = {};
  for (const l of t.colors) {
    const a = e[l];
    a && (n = { ...n, ...gC(l, a, t) });
  }
  return n;
}
function yC(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const l = `on-${n}`, a = pn(e[n]);
    t[l] = gh(a);
  }
  return t;
}
function bC(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function pC(e, t, n) {
  const l = SC(e, t);
  l && (l.innerHTML = n);
}
function SC(e, t) {
  if (!tt) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function xC(e) {
  const t = mC(e), n = re(t.defaultTheme), l = H(t.themes), a = re("light"), o = _({ get() {
    return n.value === "system" ? a.value : n.value;
  }, set(b) {
    n.value = b;
  } }), i = _(() => {
    const b = {};
    for (const [x, V] of Object.entries(l.value)) {
      const I = { ...V.colors, ...hC(V.colors, t.variations) };
      b[x] = { ...V, colors: { ...I, ...yC(I) } };
    }
    return b;
  }), r = $(() => i.value[o.value]), s = $(() => n.value === "system"), u = _(() => {
    var _a3;
    const b = [], x = t.unimportant ? "" : " !important", V = t.scoped ? t.prefix : "";
    ((_a3 = r.value) == null ? void 0 : _a3.dark) && ta(b, ":root", ["color-scheme: dark"], t.scope), ta(b, ":root", Fv(r.value, t.prefix), t.scope);
    for (const [k, y] of Object.entries(i.value)) ta(b, `.${t.prefix}theme--${k}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...Fv(y, t.prefix)], t.scope);
    if (t.utilities) {
      const k = [], y = [], C = new Set(Object.values(i.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of C) w.startsWith("on-") ? ta(y, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${x}`], t.scope) : (ta(k, `.${V}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${x}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${x}`], t.scope), ta(y, `.${V}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${x}`], t.scope), ta(y, `.${V}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? b.push(`@layer background {
`, ...k.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...y.map((w) => `  ${w}`), `}
`) : b.push(...k, ...y);
    }
    let I = b.map((k, y) => y === 0 ? k : `    ${k}`).join("");
    return t.layers && (I = `@layer vuetify.theme {
` + b.map((k) => `  ${k}`).join("") + `
}`), I;
  }), c = $(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = $(() => Object.keys(i.value));
  if ($c) {
    let x = function() {
      a.value = b.matches ? "dark" : "light";
    };
    const b = window.matchMedia("(prefers-color-scheme: dark)");
    x(), b.addEventListener("change", x, { passive: true }), Dm() && kt(() => {
      b.removeEventListener("change", x);
    });
  }
  function f(b) {
    if (t.isDisabled) return;
    const x = b._context.provides.usehead;
    if (x) {
      let V = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (x.push) {
        const I = x.push(V);
        tt && se(u, () => {
          I.patch(V);
        });
      } else tt ? (x.addHeadObjs($(V)), ht(() => x.updateDOM())) : x.addHeadObjs(V());
    } else {
      let V = function() {
        pC(t.stylesheetId, t.cspNonce, u.value);
      };
      tt ? se(u, V, { immediate: true }) : V();
    }
  }
  function v(b) {
    b !== "system" && !d.value.includes(b) || (o.value = b);
  }
  function p() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const x = b.indexOf(o.value), V = x === -1 ? 0 : (x + 1) % b.length;
    v(b[V]);
  }
  function m() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    p(b);
  }
  const h = new Proxy(o, { get(b, x) {
    return Reflect.get(b, x);
  }, set(b, x, V) {
    return x === "value" && Xg(`theme.global.name.value = ${V}`, `theme.change('${V}')`), Reflect.set(b, x, V);
  } });
  return { install: f, change: v, cycle: p, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: l, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: h, current: r } };
}
function Ze(e) {
  _t("provideTheme");
  const t = Ue(ti, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = $(() => e.theme ?? t.name.value), o = { ...t, name: n, current: $(() => t.themes.value[n.value]), themeClasses: $(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return mt(ti, o), o;
}
function Hr() {
  _t("useTheme");
  const e = Ue(ti, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Zo(), l = H();
  if (tt) {
    const a = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, a), o.length && (t === "content" ? l.value = o[0].contentRect : l.value = o[0].target.getBoundingClientRect());
    });
    Yt(() => {
      a.disconnect();
    }), se(() => n.el, (o, i) => {
      i && (a.unobserve(i), l.value = void 0), o && a.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: fa(l) };
}
const ni = Symbol.for("vuetify:layout"), Th = Symbol.for("vuetify:layout-item"), Lv = 1e3, Ah = U({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), _a = U({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Dh() {
  const e = Ue(ni);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function Va(e) {
  const t = Ue(ni);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Ot()}`, l = _t("useLayoutItem");
  mt(Th, { id: n });
  const a = re(false);
  vc(() => a.value = true), dg(() => a.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(l, { ...e, active: _(() => a.value ? false : e.active.value), id: n });
  return Yt(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const kC = (e, t, n, l) => {
  let a = { top: 0, left: 0, right: 0, bottom: 0 };
  const o = [{ id: "", layer: { ...a } }];
  for (const i of e) {
    const r = t.get(i), s = n.get(i), u = l.get(i);
    if (!r || !s || !u) continue;
    const c = { ...a, [r.value]: parseInt(a[r.value], 10) + (u.value ? parseInt(s.value, 10) : 0) };
    o.push({ id: i, layer: c }), a = c;
  }
  return o;
};
function Mh(e) {
  const t = Ue(ni, null), n = _(() => t ? t.rootZIndex.value - 100 : Lv), l = H([]), a = Rt(/* @__PURE__ */ new Map()), o = Rt(/* @__PURE__ */ new Map()), i = Rt(/* @__PURE__ */ new Map()), r = Rt(/* @__PURE__ */ new Map()), s = Rt(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = Tn(), d = _(() => {
    const y = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const w of C.filter((T) => T.includes(":"))) {
      const [T, P] = w.split(":");
      if (!l.value.includes(T) || !l.value.includes(P)) continue;
      const M = a.get(T), D = a.get(P), E = o.get(T), A = o.get(P);
      !M || !D || !E || !A || (y.set(P, { position: M.value, amount: parseInt(E.value, 10) }), y.set(T, { position: D.value, amount: -parseInt(A.value, 10) }));
    }
    return y;
  }), f = _(() => {
    const y = [...new Set([...i.values()].map((w) => w.value))].sort((w, T) => w - T), C = [];
    for (const w of y) {
      const T = l.value.filter((P) => {
        var _a3;
        return ((_a3 = i.get(P)) == null ? void 0 : _a3.value) === w;
      });
      C.push(...T);
    }
    return kC(C, a, o, r);
  }), v = _(() => !Array.from(s.values()).some((y) => y.value)), p = _(() => f.value[f.value.length - 1].layer), m = $(() => ({ "--v-layout-left": me(p.value.left), "--v-layout-right": me(p.value.right), "--v-layout-top": me(p.value.top), "--v-layout-bottom": me(p.value.bottom), ...v.value ? void 0 : { transition: "none" } })), h = _(() => f.value.slice(1).map((y, C) => {
    let { id: w } = y;
    const { layer: T } = f.value[C], P = o.get(w), M = a.get(w);
    return { id: w, ...T, size: Number(P.value), position: M.value };
  })), b = (y) => h.value.find((C) => C.id === y), x = _t("createLayout"), V = re(false);
  return Tt(() => {
    V.value = true;
  }), mt(ni, { register: (y, C) => {
    let { id: w, order: T, position: P, layoutSize: M, elementSize: D, active: E, disableTransitions: A, absolute: F } = C;
    i.set(w, T), a.set(w, P), o.set(w, M), r.set(w, E), A && s.set(w, A);
    const W = ja(Th, x == null ? void 0 : x.vnode).indexOf(y);
    W > -1 ? l.value.splice(W, 0, w) : l.value.push(w);
    const Y = _(() => h.value.findIndex((z) => z.id === w)), N = _(() => n.value + f.value.length * 2 - Y.value * 2), R = _(() => {
      const z = P.value === "left" || P.value === "right", O = P.value === "right", G = P.value === "bottom", ie = D.value ?? M.value, pe = ie === 0 ? "%" : "px", K = { [P.value]: 0, zIndex: N.value, transform: `translate${z ? "X" : "Y"}(${(E.value ? 0 : -(ie === 0 ? 100 : ie)) * (O || G ? -1 : 1)}${pe})`, position: F.value || n.value !== Lv ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!V.value) return K;
      const fe = h.value[Y.value], Te = d.value.get(w);
      return Te && (fe[Te.position] += Te.amount), { ...K, height: z ? `calc(100% - ${fe.top}px - ${fe.bottom}px)` : D.value ? `${D.value}px` : void 0, left: O ? void 0 : `${fe.left}px`, right: O ? `${fe.right}px` : void 0, top: P.value !== "bottom" ? `${fe.top}px` : void 0, bottom: P.value !== "top" ? `${fe.bottom}px` : void 0, width: z ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${fe.left}px - ${fe.right}px)` };
    }), Z = _(() => ({ zIndex: N.value - 1 }));
    return { layoutItemStyles: R, layoutItemScrimStyles: Z, zIndex: N };
  }, unregister: (y) => {
    i.delete(y), a.delete(y), o.delete(y), r.delete(y), s.delete(y), l.value = l.value.filter((C) => C !== y);
  }, mainRect: p, mainStyles: m, getLayoutItem: b, items: h, layoutRect: c, rootZIndex: n }), { layoutClasses: $(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: $(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: b, items: h, layoutRect: c, layoutRef: u };
}
const wC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function Ov(e) {
  const t = e.toLowerCase();
  return wC[t] || t;
}
function Eh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const a = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), a.push(Ov(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), a.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), a.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : a.length === 0 && e ? { keys: [Ov(e)], separators: o } : { keys: a, separators: o };
}
function CC(e) {
  if (!e) return [];
  const t = e.startsWith("-") && !["---", "--+"].includes(e), n = e.endsWith("-") && !e.endsWith("+-") && !e.endsWith("_-") && e !== "-" && e !== "---";
  if (t || n) return [];
  const l = [];
  let a = "", o = 0;
  for (; o < e.length; ) {
    const u = e[o];
    if (u === "-") {
      const c = e[o - 1], d = o > 1 ? e[o - 2] : void 0;
      ["+", "_"].includes(c) && !["+", "/"].includes(d ?? "") ? (a += u, o++) : (a ? (l.push(a), a = "") : l.push("-"), o++);
    } else a += u, o++;
  }
  a && l.push(a);
  const i = [];
  let r = 0;
  for (const u of l) u === "-" ? (r % 2 === 0 && i.push("-"), r++) : (r = 0, i.push(u));
  return i.every((u) => Eh(u).keys.length > 0) ? i : [];
}
function Bh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, l = jt(t, n), { aliases: a = {}, components: o = {}, directives: i = {} } = l, r = Za();
  return r.run(() => {
    const s = e1(l.defaults), u = uC(l.display, l.ssr), c = xC(l.theme), d = h1(l.icons), f = S1(l.locale), v = iC(l.date, f), p = dC(l.goTo, f);
    function m(b) {
      for (const V in i) b.directive(V, i[V]);
      for (const V in o) b.component(V, o[V]);
      for (const V in a) b.component(V, nn({ ...a[V], name: V, aliasName: a[V].name }));
      const x = Za();
      if (x.run(() => {
        c.install(b);
      }), b.onUnmount(() => x.stop()), b.provide(ao, s), b.provide(hu, u), b.provide(ti, c), b.provide(mu, d), b.provide(oo, f), b.provide(Ch, v.options), b.provide(Av, v.instance), b.provide(Ih, p), tt && l.ssr) if (b.$nuxt) b.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: V } = b;
        b.mount = function() {
          const I = V(...arguments);
          return Be(() => u.update()), b.mount = V, I;
        };
      }
      b.mixin({ computed: { $vuetify() {
        return Rt({ defaults: La.call(this, ao), display: La.call(this, hu), theme: La.call(this, ti), icons: La.call(this, mu), locale: La.call(this, oo), date: La.call(this, Av) });
      } } });
    }
    function h() {
      r.stop();
    }
    return { install: m, unmount: h, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: p };
  });
}
const _C = "3.12.1";
Bh.version = _C;
function La(e) {
  var _a3, _b2;
  const t = this.$, n = ((_a3 = t.parent) == null ? void 0 : _a3.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const VC = U({ ...we(), ...He(Ah(), ["fullHeight"]), ...Ke() }, "VApp"), IC = te()({ name: "VApp", props: VC(), setup(e, t) {
  let { slots: n } = t;
  const l = Ze(e), { layoutClasses: a, getLayoutItem: o, items: i, layoutRef: r } = Mh({ ...e, fullHeight: true }), { rtlClasses: s } = At();
  return le(() => {
    var _a3;
    return S("div", { ref: r, class: ne(["v-application", l.themeClasses.value, a.value, s.value, e.class]), style: ge([e.style]) }, [S("div", { class: "v-application__wrap" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: l };
} }), $e = U({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), $h = U({ text: String, ...we(), ...$e() }, "VToolbarTitle"), Xc = te()({ name: "VToolbarTitle", props: $h(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const l = !!(n.default || n.text || e.text);
    return g(e.tag, { class: ne(["v-toolbar-title", e.class]), style: ge(e.style) }, { default: () => {
      var _a3;
      return [l && S("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)])];
    } });
  }), {};
} }), PC = U({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function _n(e, t, n) {
  return te()({ name: e, props: PC({ mode: n, origin: t }), setup(l, a) {
    let { slots: o } = a;
    const i = { onBeforeEnter(r) {
      l.origin && (r.style.transformOrigin = l.origin);
    }, onLeave(r) {
      if (l.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: u, offsetWidth: c, offsetHeight: d } = r;
        r._transitionInitialStyles = { position: r.style.position, top: r.style.top, left: r.style.left, width: r.style.width, height: r.style.height }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${u}px`, r.style.width = `${c}px`, r.style.height = `${d}px`;
      }
      l.hideOnLeave && r.style.setProperty("display", "none", "important");
    }, onAfterLeave(r) {
      if (l.leaveAbsolute && (r == null ? void 0 : r._transitionInitialStyles)) {
        const { position: s, top: u, left: c, width: d, height: f } = r._transitionInitialStyles;
        delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = u || "", r.style.left = c || "", r.style.width = d || "", r.style.height = f || "";
      }
    } };
    return () => {
      const r = l.group ? bc : Nl;
      return xl(r, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : i }, o.default);
    };
  } });
}
function qc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return te()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: qn() }, group: Boolean, hideOnLeave: Boolean }, setup(l, a) {
    let { slots: o } = a;
    const i = l.group ? bc : Nl;
    return () => xl(i, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : { ...t, onLeave: (r) => {
      var _a3;
      l.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a3 = t.onLeave) == null ? void 0 : _a3.call(t, r);
    } } }, o.default);
  } });
}
function Zc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, width: a.style.width, height: a.style.height };
  }, onEnter(a) {
    const o = a._initialStyle;
    if (!o) return;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const i = `${a.offsetWidth}px`, r = `${a.offsetHeight}px`;
    ["x", "both"].includes(t) && (a.style.width = "0"), ["y", "both"].includes(t) && (a.style.height = "0"), a.offsetHeight, a.style.transition = o.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (a.style.width = i), ["y", "both"].includes(t) && (a.style.height = r);
    });
  }, onAfterEnter: l, onEnterCancelled: l, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, width: a.style.width, height: a.style.height }, a.style.overflow = "hidden", ["x", "both"].includes(t) && (a.style.width = `${a.offsetWidth}px`), ["y", "both"].includes(t) && (a.style.height = `${a.offsetHeight}px`), a.offsetHeight, requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (a.style.width = "0"), ["y", "both"].includes(t) && (a.style.height = "0");
    });
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(a) {
    e && a._parent && a._parent.classList.remove(e), l(a);
  }
  function l(a) {
    if (!a._initialStyle) return;
    const { width: o, height: i } = a._initialStyle;
    a.style.overflow = a._initialStyle.overflow, o != null && ["x", "both"].includes(t) && (a.style.width = o), i != null && ["y", "both"].includes(t) && (a.style.height = i), delete a._initialStyle;
  }
}
const TC = U({ target: [Object, Array] }, "v-dialog-transition"), Bs = /* @__PURE__ */ new WeakMap(), zr = te()({ name: "VDialogTransition", props: TC(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), a.style.visibility = "";
    const i = Hv(e.target, a), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (Bs.set(a, i), qn()) ul(a, [{ opacity: 0 }, {}], { duration: 125 * d, easing: Cv }).finished.then(() => o());
    else {
      const f = ul(a, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: Cv });
      (_a3 = Nv(a)) == null ? void 0 : _a3.forEach((v) => {
        ul(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Jo });
      }), f.finished.then(() => o());
    }
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, o) {
    var _a3;
    await new Promise((f) => requestAnimationFrame(f));
    let i;
    !Bs.has(a) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = Hv(e.target, a) : i = Bs.get(a);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    qn() ? ul(a, [{}, { opacity: 0 }], { duration: 85 * d, easing: _v }).finished.then(() => o()) : (ul(a, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: _v }).finished.then(() => o()), (_a3 = Nv(a)) == null ? void 0 : _a3.forEach((v) => {
      ul(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Jo });
    }));
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? g(Nl, J({ name: "dialog-transition" }, l, { css: false }), n) : g(Nl, { name: "dialog-transition" }, n);
} });
function Nv(e) {
  var _a3;
  const t = (_a3 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a3.children;
  return t && [...t];
}
function Hv(e, t) {
  const n = ih(e), l = Oc(t), [a, o] = getComputedStyle(t).transformOrigin.split(" ").map((b) => parseFloat(b)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / l.width, d = n.height / l.height, f = Math.max(1, c, d), v = c / f || 0, p = d / f || 0, m = l.width * l.height / (window.innerWidth * window.innerHeight), h = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (a + l.left), y: u - (o + l.top), sx: v, sy: p, speed: h };
}
const AC = _n("fab-transition", "center center", "out-in"), DC = _n("dialog-bottom-transition"), MC = _n("dialog-top-transition"), li = _n("fade-transition"), Jc = _n("scale-transition"), EC = _n("scroll-x-transition"), BC = _n("scroll-x-reverse-transition"), $C = _n("scroll-y-transition"), RC = _n("scroll-y-reverse-transition"), FC = _n("slide-x-transition"), LC = _n("slide-x-reverse-transition"), Qc = _n("slide-y-transition"), OC = _n("slide-y-reverse-transition"), Wr = qc("expand-transition", Zc()), ed = qc("expand-x-transition", Zc("", "x")), NC = qc("expand-both-transition", Zc("", "both")), HC = U({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Fe = te(false)({ name: "VDefaultsProvider", props: HC(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: a, reset: o, root: i, scoped: r } = co(e);
  return pt(l, { reset: o, root: i, scoped: r, disabled: a }), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), Vt = U({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function It(e) {
  return { dimensionStyles: _(() => {
    const n = {}, l = me(e.height), a = me(e.maxHeight), o = me(e.maxWidth), i = me(e.minHeight), r = me(e.minWidth), s = me(e.width);
    return l != null && (n.height = l), a != null && (n.maxHeight = a), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function zC(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Rh = U({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...we(), ...Vt() }, "VResponsive"), yu = te()({ name: "VResponsive", props: Rh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = zC(e), { dimensionStyles: a } = It(e);
  return le(() => {
    var _a3;
    return S("div", { class: ne(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: ge([a.value, e.style]) }, [S("div", { class: "v-responsive__sizer", style: ge(l.value) }, null), (_a3 = n.additional) == null ? void 0 : _a3.call(n), n.default && S("div", { class: ne(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function td(e) {
  return Lc(() => {
    const { class: t, style: n } = Fh(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Lt(e) {
  const { colorClasses: t, colorStyles: n } = td(() => ({ text: st(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Je(e) {
  const { colorClasses: t, colorStyles: n } = td(() => ({ background: st(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function WC(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Fh(e) {
  const t = WC(st(e)), n = [], l = {};
  if (t.background) if (du(t.background)) {
    if (l.backgroundColor = t.background, !t.text && Gw(t.background)) {
      const a = pn(t.background);
      if (a.a == null || a.a === 1) {
        const o = gh(a);
        l.color = o, l.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (du(t.text) ? (l.color = t.text, l.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: l };
}
const ct = U({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function yt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  return { roundedClasses: _(() => {
    const l = Ct(e) ? e.value : e.rounded, a = Ct(e) ? false : e.tile, o = [];
    if (a || l === false) o.push("rounded-0");
    else if (l === true || l === "") o.push(`${t}--rounded`);
    else if (typeof l == "string" || l === 0) for (const i of String(l).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const wl = U({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), tn = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: a, group: o, ...i } = e, { component: r = o ? bc : Nl, ...s } = ga(l) ? l : {};
  let u;
  return ga(l) ? u = J(s, Pw({ disabled: a, group: o }), i) : u = J({ name: a || !l ? "" : l }, i), xl(r, u, n);
};
function zv(e, t) {
  if (!Bc) return;
  const n = t.modifiers || {}, l = t.value, { handler: a, options: o } = typeof l == "object" ? l : { handler: l, options: {} }, i = new IntersectionObserver(function() {
    var _a3;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    a && (!n.quiet || u.init) && (!n.once || c || u.init) && a(c, r, s), c && n.once ? bu(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function bu(e, t) {
  var _a3;
  const n = (_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Fn = { mounted: zv, unmounted: bu, updated: (e, t) => {
  var _a3;
  ((_a3 = e._observe) == null ? void 0 : _a3[t.instance.$.uid]) && (bu(e, t), zv(e, t));
} }, Lh = U({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Rh(), ...we(), ...ct(), ...wl() }, "VImg"), bl = te()({ name: "VImg", directives: { vIntersect: Fn }, props: Lh(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.color), { roundedClasses: i } = yt(e), r = _t("VImg"), s = re(""), u = H(), c = re(e.eager ? "loading" : "idle"), d = re(), f = re(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), p = _(() => v.value.aspect || d.value / f.value || 0);
  se(() => e.src, () => {
    m(c.value !== "idle");
  }), se(p, (D, E) => {
    !D && E && u.value && I(u.value);
  }), fo(() => m());
  function m(D) {
    if (!(e.eager && D) && !(Bc && !D && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const E = new Image();
        E.src = v.value.lazySrc, I(E, null);
      }
      v.value.src && Be(() => {
        var _a3;
        n("loadstart", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src), setTimeout(() => {
          var _a4;
          if (!r.isUnmounted) if ((_a4 = u.value) == null ? void 0 : _a4.complete) {
            if (u.value.naturalWidth || b(), c.value === "error") return;
            p.value || I(u.value, null), c.value === "loading" && h();
          } else p.value || I(u.value), x();
        });
      });
    }
  }
  function h() {
    var _a3;
    r.isUnmounted || (x(), I(u.value), c.value = "loaded", n("load", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function b() {
    var _a3;
    r.isUnmounted || (c.value = "error", n("error", ((_a3 = u.value) == null ? void 0 : _a3.currentSrc) || v.value.src));
  }
  function x() {
    const D = u.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let V = -1;
  Yt(() => {
    clearTimeout(V);
  });
  function I(D) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const A = () => {
      if (clearTimeout(V), r.isUnmounted) return;
      const { naturalHeight: F, naturalWidth: j } = D;
      F || j ? (d.value = j, f.value = F) : !D.complete && c.value === "loading" && E != null ? V = window.setTimeout(A, E) : (D.currentSrc.endsWith(".svg") || D.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, f.value = 1);
    };
    A();
  }
  const k = $(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), y = () => {
    var _a3;
    if (!v.value.src || c.value === "idle") return null;
    const D = S("img", { class: ne(["v-img__img", k.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: h, onError: b }, null), E = (_a3 = l.sources) == null ? void 0 : _a3.call(l);
    return g(tn, { transition: e.transition, appear: true }, { default: () => [nt(E ? S("picture", { class: "v-img__picture" }, [E, D]) : D, [[On, c.value === "loaded"]])] });
  }, C = () => g(tn, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && S("img", { class: ne(["v-img__img", "v-img__img--preload", k.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => l.placeholder ? g(tn, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !l.error) && S("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, T = () => l.error ? g(tn, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && S("div", { class: "v-img__error" }, [l.error()])] }) : null, P = () => e.gradient ? S("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, M = re(false);
  {
    const D = se(p, (E) => {
      E && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          M.value = true;
        });
      }), D());
    });
  }
  return le(() => {
    const D = yu.filterProps(e);
    return nt(g(yu, J({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !M.value, "v-img--fit-content": e.width === "fit-content" }, a.value, i.value, e.class], style: [{ width: me(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: p.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => S(be, null, [g(y, null, null), g(C, null, null), g(P, null, null), g(w, null, null), g(T, null, null)]), default: l.default }), [[Fn, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), Kt = U({ border: [Boolean, Number, String] }, "border");
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  return { borderClasses: _(() => {
    const l = e.border;
    return l === true || l === "" ? `${t}--border` : typeof l == "string" || l === 0 ? String(l).split(" ").map((a) => `border-${a}`) : [];
  }) };
}
const Pt = U({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function Mt(e) {
  return { elevationClasses: $(() => {
    const n = Ct(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const Wv = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, ll = U({ location: String }, "location");
function Xl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = At();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = uu(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[Wv[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[Wv[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const jC = [null, "prominent", "default", "comfortable", "compact"], Oh = U({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => jC.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Kt(), ...we(), ...Pt(), ...ll(), ...ct(), ...$e({ tag: "header" }), ...Ke() }, "VToolbar"), pu = te()({ name: "VToolbar", props: Oh(), setup(e, t) {
  var _a3;
  let { slots: n } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: a } = Je(() => e.color), { borderClasses: o } = ln(e), { elevationClasses: i } = Mt(e), { locationStyles: r } = Xl(e), { roundedClasses: s } = yt(e), { themeClasses: u } = Ze(e), { rtlClasses: c } = At(), d = re(e.extended === null ? !!((_a3 = n.extension) == null ? void 0 : _a3.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return pt({ VBtn: { variant: "text" } }), le(() => {
    var _a4;
    const p = !!(e.title || n.title), m = !!(n.image || e.image), h = (_a4 = n.extension) == null ? void 0 : _a4.call(n);
    return d.value = e.extended === null ? !!h : e.extended, g(e.tag, { class: ne(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, l.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: ge([a.value, r.value, e.style]) }, { default: () => [m && S("div", { key: "image", class: "v-toolbar__image" }, [n.image ? g(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : g(bl, { key: "image-img", cover: true, src: e.image }, null)]), g(Fe, { defaults: { VTabs: { height: me(f.value) } } }, { default: () => {
      var _a5, _b2, _c2;
      return [S("div", { class: "v-toolbar__content", style: { height: me(f.value) } }, [n.prepend && S("div", { class: "v-toolbar__prepend" }, [(_a5 = n.prepend) == null ? void 0 : _a5.call(n)]), p && g(Xc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && S("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), g(Fe, { defaults: { VTabs: { height: me(v.value) } } }, { default: () => [g(Wr, null, { default: () => [d.value && S("div", { class: "v-toolbar__extension", style: { height: me(v.value) } }, [h])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), UC = U({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function GC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: l } = t;
  let a = 0, o = 0;
  const i = H(null), r = re(0), s = re(0), u = re(0), c = re(false), d = re(false), f = re(false), v = re(false), p = re(true), m = _(() => Number(e.scrollThreshold)), h = _(() => et((m.value - r.value) / m.value || 0));
  function b(k) {
    const y = "window" in k ? window.innerHeight : k.clientHeight, C = "window" in k ? document.documentElement.scrollHeight : k.scrollHeight;
    return { clientHeight: y, scrollHeight: C };
  }
  function x() {
    const k = i.value;
    if (!k) return;
    const { clientHeight: y, scrollHeight: C } = b(k), w = C - y, T = (l == null ? void 0 : l.value) || 0, P = m.value + T;
    p.value = w > P;
  }
  function V() {
    x();
  }
  function I() {
    const k = i.value;
    if (!k || n && !n.value) return;
    a = r.value, r.value = "window" in k ? k.pageYOffset : k.scrollTop;
    const y = k instanceof Window ? document.documentElement.scrollHeight : k.scrollHeight;
    o !== y && (y > o && x(), o = y), d.value = r.value < a, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: w } = b(k), T = r.value + C >= w - 5;
    !d.value && T && r.value >= m.value && p.value && (v.value = true);
    const P = Math.abs(r.value - a) > 100, M = r.value <= 5;
    (d.value && a - r.value > 1 && !T || P && r.value < m.value || M) && (v.value = false), f.value = T;
  }
  return se(d, () => {
    s.value = s.value || r.value;
  }), se(c, () => {
    s.value = 0;
  }), Tt(() => {
    se(() => e.scrollTarget, (k) => {
      var _a3;
      const y = k ? document.querySelector(k) : window;
      y && y !== i.value && ((_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", I), i.value = y, i.value.addEventListener("scroll", I, { passive: true }), Promise.resolve().then(() => {
        x();
      }));
    }, { immediate: true }), window.addEventListener("resize", V, { passive: true });
  }), Yt(() => {
    var _a3;
    (_a3 = i.value) == null ? void 0 : _a3.removeEventListener("scroll", I), window.removeEventListener("resize", V);
  }), n && se(n, I, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: h, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: p };
}
function Ia() {
  const e = re(false);
  return Tt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: $(() => e.value ? void 0 : { transition: "none !important" }), isBooted: fa(e) };
}
const YC = U({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...He(Oh(), ["location"]), ..._a(), ...UC(), height: { type: [Number, String], default: 64 } }, "VAppBar"), KC = te()({ name: "VAppBar", props: YC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = H(), a = Ve(e, "modelValue"), o = _(() => {
    var _a3;
    const y = new Set(((_a3 = e.scrollBehavior) == null ? void 0 : _a3.split(" ")) ?? []);
    return { hide: y.has("hide"), fullyHide: y.has("fully-hide"), inverted: y.has("inverted"), collapse: y.has("collapse"), elevate: y.has("elevate"), fadeImage: y.has("fade-image") };
  }), i = _(() => {
    const y = o.value;
    return y.hide || y.fullyHide || y.inverted || y.collapse || y.elevate || y.fadeImage || !a.value;
  }), r = _(() => {
    var _a3, _b2;
    const y = ((_a3 = l.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = l.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return y + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: p } = GC(e, { canScroll: i, layoutSize: r }), m = $(() => o.value.hide || o.value.fullyHide), h = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), b = _(() => e.flat || o.value.fullyHide && !a.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), x = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), V = _(() => {
    var _a3, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const y = ((_a3 = l.value) == null ? void 0 : _a3.contentHeight) ?? 0, C = ((_b2 = l.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || o.value.fullyHide ? y + C : y : y + C;
  });
  Ht(() => !!e.scrollBehavior, () => {
    ht(() => {
      if (!m.value) {
        a.value = true;
        return;
      }
      if (o.value.inverted) {
        a.value = s.value > u.value;
        return;
      }
      if (!p.value) {
        a.value = true;
        return;
      }
      if (v.value) {
        a.value = false;
        return;
      }
      a.value = c.value && !f.value || s.value < u.value;
    });
  });
  const { ssrBootStyles: I } = Ia(), { layoutItemStyles: k } = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => e.location), layoutSize: V, elementSize: re(void 0), active: a, absolute: $(() => e.absolute) });
  return le(() => {
    const y = He(pu.filterProps(e), ["location"]);
    return g(pu, J({ ref: l, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...k.value, "--v-toolbar-image-opacity": x.value, height: void 0, ...I.value }, e.style] }, y, { collapse: h.value, flat: b.value }), n);
  }), {};
} }), XC = [null, "default", "comfortable", "compact"], St = U({ density: { type: String, default: "default", validator: (e) => XC.includes(e) } }, "density");
function Wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  return { densityClasses: $(() => `${t}--density-${e.density}`) };
}
const qC = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Cl(e, t) {
  return S(be, null, [e && S("span", { key: "overlay", class: ne(`${t}__overlay`) }, null), S("span", { key: "underlay", class: ne(`${t}__underlay`) }, null)]);
}
const Vn = U({ color: String, variant: { type: String, default: "elevated", validator: (e) => qC.includes(e) } }, "variant");
function _l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  const n = $(() => {
    const { variant: o } = st(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: l, colorStyles: a } = td(() => {
    const { variant: o, color: i } = st(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: l, colorStyles: a, variantClasses: n };
}
const Nh = U({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Kt(), ...we(), ...St(), ...Pt(), ...ct(), ...$e(), ...Ke(), ...Vn() }, "VBtnGroup"), Su = te()({ name: "VBtnGroup", props: Nh(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { densityClasses: a } = Wt(e), { borderClasses: o } = ln(e), { elevationClasses: i } = Mt(e), { roundedClasses: r } = yt(e);
  pt({ VBtn: { height: $(() => e.direction === "horizontal" ? "auto" : null), baseColor: $(() => e.baseColor), color: $(() => e.color), density: $(() => e.density), flat: true, variant: $(() => e.variant) } }), le(() => g(e.tag, { class: ne(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, l.value, o.value, a.value, i.value, r.value, e.class]), style: ge(e.style) }, n));
} }), Pa = U({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Ta = U({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function zl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const l = _t("useGroupItem");
  if (!l) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Ot();
  mt(Symbol.for(`${t.description}:id`), a);
  const o = Ue(t, null);
  if (!o) {
    if (!n) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const i = $(() => e.value), r = _(() => !!(o.disabled.value || e.disabled));
  function s() {
    o == null ? void 0 : o.register({ id: a, value: i, disabled: r }, l);
  }
  function u() {
    o == null ? void 0 : o.unregister(a);
  }
  s(), Yt(() => u());
  const c = _(() => o.isSelected(a)), d = _(() => o.items.value[0].id === a), f = _(() => o.items.value[o.items.value.length - 1].id === a), v = _(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return se(c, (p) => {
    l.emit("group:selected", { value: p });
  }, { flush: "sync" }), { id: a, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(a, !c.value), select: (p) => o.select(a, p), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function ql(e, t) {
  let n = false;
  const l = Rt([]), a = Ve(e, "modelValue", [], (f) => f === void 0 ? [] : Hh(l, f === null ? [null] : ut(f)), (f) => {
    const v = JC(l, f);
    return e.multiple ? v : v[0];
  }), o = _t("useGroup");
  function i(f, v) {
    const p = f, m = Symbol.for(`${t.description}:id`), b = ja(m, o == null ? void 0 : o.vnode).indexOf(v);
    vt(p.value) === void 0 && (p.value = b, p.useIndexAsValue = true), b > -1 ? l.splice(b, 0, p) : l.push(p);
  }
  function r(f) {
    if (n) return;
    s();
    const v = l.findIndex((p) => p.id === f);
    l.splice(v, 1);
  }
  function s() {
    const f = l.find((v) => !v.disabled);
    f && e.mandatory === "force" && !a.value.length && (a.value = [f.id]);
  }
  Tt(() => {
    s();
  }), Yt(() => {
    n = true;
  }), Dr(() => {
    for (let f = 0; f < l.length; f++) l[f].useIndexAsValue && (l[f].value = f);
  });
  function u(f, v) {
    const p = l.find((m) => m.id === f);
    if (!(v && (p == null ? void 0 : p.disabled))) if (e.multiple) {
      const m = a.value.slice(), h = m.findIndex((x) => x === f), b = ~h;
      if (v = v ?? !b, b && e.mandatory && m.length <= 1 || !b && e.max != null && m.length + 1 > e.max) return;
      h < 0 && v ? m.push(f) : h >= 0 && !v && m.splice(h, 1), a.value = m;
    } else {
      const m = a.value.includes(f);
      if (e.mandatory && m || !m && !v) return;
      a.value = v ?? !m ? [f] : [];
    }
  }
  function c(f) {
    if (e.multiple, a.value.length) {
      const v = a.value[0], p = l.findIndex((b) => b.id === v);
      let m = (p + f) % l.length, h = l[m];
      for (; h.disabled && m !== p; ) m = (m + f) % l.length, h = l[m];
      if (h.disabled) return;
      a.value = [l[m].id];
    } else {
      const v = l.find((p) => !p.disabled);
      v && (a.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: a, select: u, disabled: $(() => e.disabled), prev: () => c(l.length - 1), next: () => c(1), isSelected: (f) => a.value.includes(f), selectedClass: $(() => e.selectedClass), items: $(() => l), getItemIndex: (f) => ZC(l, f) };
  return mt(t, d), d;
}
function ZC(e, t) {
  const n = Hh(e, [t]);
  return n.length ? e.findIndex((l) => l.id === n[0]) : -1;
}
function Hh(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.find((i) => Ft(l, i.value)), o = e[l];
    (a == null ? void 0 : a.value) !== void 0 ? n.push(a.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function JC(e, t) {
  const n = [];
  return t.forEach((l) => {
    const a = e.findIndex((o) => o.id === l);
    if (~a) {
      const o = e[a];
      n.push(o.value !== void 0 ? o.value : a);
    }
  }), n;
}
const nd = Symbol.for("vuetify:v-btn-toggle"), QC = U({ ...Nh(), ...Pa() }, "VBtnToggle"), e_ = te()({ name: "VBtnToggle", props: QC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: a, prev: o, select: i, selected: r } = ql(e, nd);
  return le(() => {
    const s = Su.filterProps(e);
    return g(Su, J({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l, next: a, prev: o, select: i, selected: r })];
    } });
  }), { next: a, prev: o, select: i };
} }), t_ = ["x-small", "small", "default", "large", "x-large"], al = U({ size: { type: [String, Number], default: "default" } }, "size");
function vo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  return Lc(() => {
    const n = e.size;
    let l, a;
    return dr(t_, n) ? l = `${t}--size-${n}` : n && (a = { width: me(n), height: me(n) }), { sizeClasses: l, sizeStyles: a };
  });
}
const n_ = U({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Pe, opacity: [String, Number], ...we(), ...al(), ...$e({ tag: "i" }), ...Ke() }, "VIcon"), qe = te()({ name: "VIcon", props: n_(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = re(), { themeClasses: o } = Hr(), { iconData: i } = f1(() => a.value || e.icon), { sizeClasses: r } = vo(e), { textColorClasses: s, textColorStyles: u } = Lt(() => e.color);
  return le(() => {
    var _a3, _b2;
    const c = (_a3 = l.default) == null ? void 0 : _a3.call(l);
    c && (a.value = (_b2 = th(c).filter((f) => f.type === hi && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return g(i.value.component, { tag: e.tag, icon: i.value.icon, class: ne(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: ge([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: me(e.size), height: me(e.size), width: me(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function ki(e, t) {
  const n = H(), l = re(false);
  if (Bc) {
    const a = new IntersectionObserver((o) => {
      l.value = !!o.find((i) => i.isIntersecting);
    }, t);
    kt(() => {
      a.disconnect();
    }), se(n, (o, i) => {
      i && (a.unobserve(i), l.value = false), o && a.observe(o);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const l_ = U({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function a_(e) {
  const n = $(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), l = re(e.reveal ? "initial" : "disabled");
  return Tt(async () => {
    e.reveal && (l.value = "initial", await new Promise((a) => requestAnimationFrame(a)), l.value = "pending", await new Promise((a) => setTimeout(a, n.value)), l.value = "done");
  }), { duration: n, state: l };
}
const o_ = U({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...we(), ...l_(), ...al(), ...$e({ tag: "div" }), ...Ke() }, "VProgressCircular"), Wl = te()({ name: "VProgressCircular", props: o_(), setup(e, t) {
  let { slots: n } = t;
  const l = 20, a = 2 * Math.PI * l, o = H(), { themeClasses: i } = Ze(e), { sizeClasses: r, sizeStyles: s } = vo(e), { textColorClasses: u, textColorStyles: c } = Lt(() => e.color), { textColorClasses: d, textColorStyles: f } = Lt(() => e.bgColor), { intersectionRef: v, isIntersecting: p } = ki(), { resizeRef: m, contentRect: h } = Tn(), { state: b, duration: x } = a_(e), V = $(() => b.value === "initial" ? 0 : et(parseFloat(e.modelValue), 0, 100)), I = $(() => Number(e.width)), k = $(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(I.value, 32)), y = $(() => l / (1 - I.value / k.value) * 2), C = $(() => I.value / k.value * y.value), w = $(() => {
    const P = (100 - V.value) / 100 * a;
    return e.rounded && V.value > 0 && V.value < 100 ? me(Math.min(a - 0.01, P + C.value)) : me(P);
  }), T = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / a * 360 : P;
  });
  return ht(() => {
    v.value = o.value, m.value = o.value;
  }), le(() => g(e.tag, { ref: o, class: ne(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || qn()), "v-progress-circular--revealing": ["initial", "pending"].includes(b.value) }, i.value, r.value, u.value, e.class]), style: ge([s.value, c.value, { "--progress-reveal-duration": `${x.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : V.value }, { default: () => [S("svg", { style: { transform: `rotate(calc(-90deg + ${T.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${y.value} ${y.value}` }, [S("circle", { class: ne(["v-progress-circular__underlay", d.value]), style: ge(f.value), fill: "transparent", cx: "50%", cy: "50%", r: l, "stroke-width": C.value, "stroke-dasharray": a, "stroke-dashoffset": 0 }, null), S("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: l, "stroke-width": C.value, "stroke-dasharray": a, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && S("div", { class: "v-progress-circular__content" }, [n.default({ value: V.value })])] })), {};
} }), i_ = U({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function r_(e, t) {
  const n = $(() => !!e.chunkCount || !!e.chunkWidth), l = _(() => {
    const r = st(t);
    if (!r) return 0;
    if (!e.chunkCount) return Number(e.chunkWidth);
    const s = Number(e.chunkCount);
    return (r - Number(e.chunkGap) * (s - 1)) / s;
  }), a = $(() => Number(e.chunkGap)), o = _(() => {
    if (!n.value) return {};
    const r = me(a.value), s = me(l.value);
    return { maskRepeat: "repeat-x", maskImage: `linear-gradient(90deg, #000, #000 ${s}, transparent ${s}, transparent)`, maskSize: `calc(${s} + ${r}) 100%` };
  });
  function i(r) {
    const s = st(t);
    if (!s) return r;
    const u = 100 * a.value / s, c = 100 * (l.value + a.value) / s, d = Math.floor((r + u) / c);
    return et(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const s_ = U({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...i_(), ...we(), ...ll({ location: "top" }), ...ct(), ...$e(), ...Ke() }, "VProgressLinear"), jr = te()({ name: "VProgressLinear", props: s_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = H(), a = Ve(e, "modelValue"), { isRtl: o, rtlClasses: i } = At(), { themeClasses: r } = Ze(e), { locationStyles: s } = Xl(e), { textColorClasses: u, textColorStyles: c } = Lt(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Je(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: p } = Je(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: h } = Je(() => e.color), { roundedClasses: b } = yt(e), { intersectionRef: x, isIntersecting: V } = ki(), I = _(() => parseFloat(e.max)), k = _(() => parseFloat(e.height)), y = _(() => et(parseFloat(e.bufferValue) / I.value * 100, 0, 100)), C = _(() => et(parseFloat(a.value) / I.value * 100, 0, 100)), w = _(() => o.value !== e.reverse), T = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = re(0), { hasChunks: M, chunksMaskStyles: D, snapValueToChunk: E } = r_(e, P);
  Ht(M, () => {
    const { resizeRef: W } = Tn((Y) => P.value = Y[0].contentRect.width);
    ht(() => W.value = l.value);
  });
  const A = _(() => M.value ? E(y.value) : y.value), F = _(() => M.value ? E(C.value) : C.value);
  function j(W) {
    if (!x.value) return;
    const { left: Y, right: N, width: R } = x.value.getBoundingClientRect(), Z = w.value ? R - W.clientX + (N - R) : W.clientX - Y;
    a.value = Math.round(Z / R * I.value);
  }
  return ht(() => {
    x.value = l.value;
  }), le(() => g(e.tag, { ref: l, class: ne(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && V.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, b.value, r.value, i.value, e.class]), style: ge([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? me(k.value) : 0, "--v-progress-linear-height": me(k.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(a.value), I.value), onClick: e.clickable && j }, { default: () => [e.stream && S("div", { key: "stream", class: ne(["v-progress-linear__stream", u.value]), style: { ...c.value, [w.value ? "left" : "right"]: me(-k.value), borderTop: `${me(k.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${me(k.value / 4)})`, width: me(100 - y.value, "%"), "--v-progress-linear-stream-to": me(k.value * (w.value ? 1 : -1)) } }, null), S("div", { class: ne(["v-progress-linear__background", d.value]), style: ge([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), S("div", { class: ne(["v-progress-linear__buffer", v.value]), style: ge([p.value, { opacity: parseFloat(e.bufferOpacity), width: me(A.value, "%") }]) }, null), g(Nl, { name: T.value }, { default: () => [e.indeterminate ? S("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((W) => S("div", { key: W, class: ne(["v-progress-linear__indeterminate", W, m.value]), style: ge(h.value) }, null))]) : S("div", { class: ne(["v-progress-linear__determinate", m.value]), style: ge([h.value, { width: me(F.value, "%") }]) }, null)] }), n.default && S("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: y.value })])] })), {};
} }), Ur = U({ loading: [Boolean, String] }, "loader");
function wi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  return { loaderClasses: $(() => ({ [`${t}--loading`]: e.loading })) };
}
function Ci(e, t) {
  var _a3;
  let { slots: n } = t;
  return S("div", { class: ne(`${e.name}__loader`) }, [((_a3 = n.default) == null ? void 0 : _a3.call(n, { color: e.color, isActive: e.active })) || g(jr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const u_ = ["static", "relative", "fixed", "absolute", "sticky"], mo = U({ position: { type: String, validator: (e) => u_.includes(e) } }, "position");
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  return { positionClasses: $(() => e.position ? `${t}--${e.position}` : void 0) };
}
function c_() {
  const e = _t("useRoute");
  return _(() => {
    var _a3;
    return (_a3 = e == null ? void 0 : e.proxy) == null ? void 0 : _a3.$route;
  });
}
function zh() {
  var _a3, _b2;
  return (_b2 = (_a3 = _t("useRouter")) == null ? void 0 : _a3.proxy) == null ? void 0 : _b2.$router;
}
function _i(e, t) {
  const n = lx("RouterLink"), l = $(() => !!(e.href || e.to)), a = _(() => (l == null ? void 0 : l.value) || uv(t, "click") || uv(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = $(() => e.href);
    return { isLink: l, isRouterLink: $(() => false), isClickable: a, href: d, linkProps: Rt({ href: d }), route: $(() => {
    }), navigate: $(() => {
    }) };
  }
  const o = n.useLink({ to: $(() => e.to || ""), replace: $(() => e.replace) }), i = _(() => e.to ? o : void 0), r = c_(), s = _(() => {
    var _a3, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a3 = i.value.isExactActive) == null ? void 0 : _a3.value) && Ft(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = _(() => {
    var _a3;
    return e.to ? (_a3 = i.value) == null ? void 0 : _a3.route.value.href : e.href;
  });
  return { isLink: l, isRouterLink: $(() => !!e.to), isClickable: a, isActive: s, route: $(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.route.value;
  }), navigate: $(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.navigate;
  }), href: u, linkProps: Rt({ href: u, "aria-current": $(() => s.value ? "page" : void 0), "aria-disabled": $(() => e.disabled && l.value ? "true" : void 0), tabindex: $(() => e.disabled && l.value ? "-1" : void 0) }) };
}
const Vi = U({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let $s = false;
function d_(e, t) {
  let n = false, l, a;
  tt && (e == null ? void 0 : e.beforeEach) && (Be(() => {
    window.addEventListener("popstate", o), l = e.beforeEach((i, r, s) => {
      $s ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), $s = true;
    }), a = e == null ? void 0 : e.afterEach(() => {
      $s = false;
    });
  }), kt(() => {
    window.removeEventListener("popstate", o), l == null ? void 0 : l(), a == null ? void 0 : a();
  }));
  function o(i) {
    var _a3;
    ((_a3 = i.state) == null ? void 0 : _a3.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function f_(e, t) {
  se(() => {
    var _a3;
    return (_a3 = e.isActive) == null ? void 0 : _a3.value;
  }, (n) => {
    e.isLink.value && n != null && t && Be(() => {
      t(n);
    });
  }, { immediate: true });
}
const xu = Symbol("rippleStop"), v_ = 80;
function jv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ku(e) {
  return e.constructor.name === "TouchEvent";
}
function Wh(e) {
  return e.constructor.name === "KeyboardEvent";
}
const m_ = function(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!Wh(e)) {
    const d = t.getBoundingClientRect(), f = ku(e) ? e.touches[e.touches.length - 1] : e;
    l = f.clientX - d.left, a = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a3 = t._ripple) == null ? void 0 : _a3.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((l - o) ** 2 + (a - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${l - o}px`, c = n.center ? s : `${a - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, yr = { show(e, t) {
  var _a3;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a3 = t == null ? void 0 : t._ripple) == null ? void 0 : _a3.enabled)) return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = m_(e, t, n), d = `${o * 2}px`;
  a.className = "v-ripple__animation", a.style.width = d, a.style.height = d, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), jv(a, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), a.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), jv(a, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
  const l = performance.now() - Number(n.dataset.activated), a = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var _a4;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((_a4 = n.parentNode) == null ? void 0 : _a4.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, a);
} };
function jh(e) {
  return typeof e > "u" || !!e;
}
function ai(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[xu])) {
    if (e[xu] = true, ku(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Wh(e), n._ripple.class && (t.class = n._ripple.class), ku(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        yr.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a3;
        ((_a3 = n == null ? void 0 : n._ripple) == null ? void 0 : _a3.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, v_);
    } else yr.show(e, n, t);
  }
}
function br(e) {
  e[xu] = true;
}
function hn(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        hn(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), yr.hide(t);
  }
}
function Uh(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let oi = false;
function g_(e, t) {
  !oi && t.includes(e.key) && (oi = true, ai(e));
}
function Gh(e) {
  oi = false, hn(e);
}
function Yh(e) {
  oi && (oi = false, hn(e));
}
function Kh(e, t, n) {
  const { value: l, modifiers: a } = t, o = jh(l);
  o || yr.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = a.center, e._ripple.circle = a.circle;
  const i = ga(l) ? l : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => g_(s, r), o && !n) {
    if (a.stop) {
      e.addEventListener("touchstart", br, { passive: true }), e.addEventListener("mousedown", br);
      return;
    }
    e.addEventListener("touchstart", ai, { passive: true }), e.addEventListener("touchend", hn, { passive: true }), e.addEventListener("touchmove", Uh, { passive: true }), e.addEventListener("touchcancel", hn), e.addEventListener("mousedown", ai), e.addEventListener("mouseup", hn), e.addEventListener("mouseleave", hn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Gh), e.addEventListener("blur", Yh), e.addEventListener("dragstart", hn, { passive: true });
  } else !o && n && Xh(e);
}
function Xh(e) {
  var _a3;
  e.removeEventListener("touchstart", br), e.removeEventListener("mousedown", br), e.removeEventListener("touchstart", ai), e.removeEventListener("touchend", hn), e.removeEventListener("touchmove", Uh), e.removeEventListener("touchcancel", hn), e.removeEventListener("mousedown", ai), e.removeEventListener("mouseup", hn), e.removeEventListener("mouseleave", hn), ((_a3 = e._ripple) == null ? void 0 : _a3.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Gh), e.removeEventListener("blur", Yh), e.removeEventListener("dragstart", hn);
}
function h_(e, t) {
  Kh(e, t, false);
}
function y_(e) {
  Xh(e), delete e._ripple;
}
function b_(e, t) {
  if (t.value === t.oldValue) return;
  const n = jh(t.oldValue);
  Kh(e, t, n);
}
const zt = { mounted: h_, unmounted: y_, updated: b_ }, Gr = U({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: nd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Pe, appendIcon: Pe, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Kt(), ...we(), ...St(), ...Vt(), ...Pt(), ...Ta(), ...Ur(), ...ll(), ...mo(), ...ct(), ...Vi(), ...al(), ...$e({ tag: "button" }), ...Ke(), ...Vn({ variant: "elevated" }) }, "VBtn"), je = te()({ name: "VBtn", props: Gr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Ze(e), { borderClasses: o } = ln(e), { densityClasses: i } = Wt(e), { dimensionStyles: r } = It(e), { elevationClasses: s } = Mt(e), { loaderClasses: u } = wi(e), { locationStyles: c } = Xl(e), { positionClasses: d } = go(e), { roundedClasses: f } = yt(e), { sizeClasses: v, sizeStyles: p } = vo(e), m = zl(e, e.symbol, false), h = _i(e, n), b = _(() => {
    var _a3;
    return e.active !== void 0 ? e.active : h.isRouterLink.value ? (_a3 = h.isActive) == null ? void 0 : _a3.value : m == null ? void 0 : m.isSelected.value;
  }), x = $(() => b.value ? e.activeColor ?? e.color : e.color), V = _(() => {
    var _a3, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!h.isLink.value || ((_a3 = h.isActive) == null ? void 0 : _a3.value)) || !m || ((_b2 = h.isActive) == null ? void 0 : _b2.value) ? x.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: I, colorStyles: k, variantClasses: y } = _l(V), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), w = $(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(M) {
    var _a3, _b2;
    C.value || h.isLink.value && (M.metaKey || M.ctrlKey || M.shiftKey || M.button !== 0 || n.target === "_blank") || (h.isRouterLink.value ? (_b2 = (_a3 = h.navigate).value) == null ? void 0 : _b2.call(_a3, M) : m == null ? void 0 : m.toggle());
  }
  return f_(h, m == null ? void 0 : m.select), le(() => {
    const M = h.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || l.prepend), E = !!(e.appendIcon || l.append), A = !!(e.icon && e.icon !== true);
    return nt(g(M, J(h.linkProps, { type: M === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": b.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], a.value, o.value, I.value, i.value, s.value, u.value, d.value, f.value, v.value, y.value, e.class], style: [k.value, r.value, c.value, p.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && M !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: T.value }), { default: () => {
      var _a3;
      return [Cl(true, "v-btn"), !e.icon && D && S("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? g(Fe, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : g(qe, { key: "prepend-icon", icon: e.prependIcon }, null)]), S("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && A ? g(qe, { key: "content-icon", icon: e.icon }, null) : g(Fe, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a4;
        return [((_a4 = l.default) == null ? void 0 : _a4.call(l)) ?? Ee(e.text)];
      } })]), !e.icon && E && S("span", { key: "append", class: "v-btn__append" }, [l.append ? g(Fe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : g(qe, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && S("span", { key: "loader", class: "v-btn__loader" }, [((_a3 = l.loader) == null ? void 0 : _a3.call(l)) ?? g(Wl, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[zt, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), p_ = U({ ...He(Gr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), S_ = te()({ name: "VAppBarNavIcon", props: p_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(je, J(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), x_ = te()({ name: "VAppBarTitle", props: $h(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(Xc, J(e, { class: "v-app-bar-title" }), n)), {};
} }), qh = kl("v-alert-title"), Zh = U({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function Jh(e, t) {
  return { iconSize: _(() => {
    const l = new Map(e.iconSizes), a = e.iconSize ?? t() ?? "default";
    return l.has(a) ? l.get(a) : a;
  }) };
}
const k_ = ["success", "info", "warning", "error"], w_ = U({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Pe, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => k_.includes(e) }, ...we(), ...St(), ...Vt(), ...Pt(), ...Zh(), ...ll(), ...mo(), ...ct(), ...$e(), ...Ke(), ...Vn({ variant: "flat" }) }, "VAlert"), C_ = te()({ name: "VAlert", props: w_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = Ve(e, "modelValue"), o = $(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = Jh(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = Ze(e), { colorClasses: s, colorStyles: u, variantClasses: c } = _l(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Wt(e), { dimensionStyles: f } = It(e), { elevationClasses: v } = Mt(e), { locationStyles: p } = Xl(e), { positionClasses: m } = go(e), { roundedClasses: h } = yt(e), { textColorClasses: b, textColorStyles: x } = Lt(() => e.borderColor), { t: V } = lt(), I = $(() => ({ "aria-label": V(e.closeLabel), onClick(k) {
    a.value = false, n("click:close", k);
  } }));
  return () => {
    const k = !!(l.prepend || o.value), y = !!(l.title || e.title), C = !!(l.close || e.closable), w = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return a.value && g(e.tag, { class: ne(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, h.value, c.value, e.class]), style: ge([u.value, f.value, p.value, e.style]), role: "alert" }, { default: () => {
      var _a3, _b2;
      return [Cl(false, "v-alert"), e.border && S("div", { key: "border", class: ne(["v-alert__border", b.value]), style: ge(x.value) }, null), k && S("div", { key: "prepend", class: "v-alert__prepend" }, [l.prepend ? g(Fe, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...w } } }, l.prepend) : g(qe, J({ key: "prepend-icon" }, w), null)]), S("div", { class: "v-alert__content" }, [y && g(qh, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = l.title) == null ? void 0 : _a4.call(l)) ?? e.title];
      } }), ((_a3 = l.text) == null ? void 0 : _a3.call(l)) ?? e.text, (_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && S("div", { key: "append", class: "v-alert__append" }, [l.append()]), C && S("div", { key: "close", class: "v-alert__close" }, [l.close ? g(Fe, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a4;
        return [(_a4 = l.close) == null ? void 0 : _a4.call(l, { props: I.value })];
      } }) : g(je, J({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, I.value), null)])];
    } });
  };
} }), __ = U({ start: Boolean, end: Boolean, icon: Pe, image: String, text: String, ...Kt(), ...we(), ...St(), ...ct(), ...al(), ...$e(), ...Ke(), ...Vn({ variant: "flat" }) }, "VAvatar"), wn = te()({ name: "VAvatar", props: __(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { borderClasses: a } = ln(e), { colorClasses: o, colorStyles: i, variantClasses: r } = _l(e), { densityClasses: s } = Wt(e), { roundedClasses: u } = yt(e), { sizeClasses: c, sizeStyles: d } = vo(e);
  return le(() => g(e.tag, { class: ne(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: ge([i.value, d.value, e.style]) }, { default: () => [n.default ? g(Fe, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? g(bl, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? g(qe, { key: "icon", icon: e.icon }, null) : e.text, Cl(false, "v-avatar")] })), {};
} }), V_ = U({ text: String, onClick: Nt(), ...we(), ...Ke() }, "VLabel"), ho = te()({ name: "VLabel", props: V_(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var _a3;
    return S("label", { class: ne(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: ge(e.style), onClick: e.onClick }, [e.text, (_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Qh = Symbol.for("vuetify:selection-control-group"), ld = U({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Pe, trueIcon: Pe, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Ft }, ...we(), ...St(), ...Ke() }, "SelectionControlGroup"), I_ = U({ ...ld({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), ey = te()({ name: "VSelectionControlGroup", props: I_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), a = Ot(), o = $(() => e.id || `v-selection-control-group-${a}`), i = $(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return mt(Qh, { modelValue: l, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), kt(() => {
      r.delete(s);
    });
  } }), pt({ [e.defaultsTarget]: { color: $(() => e.color), disabled: $(() => e.disabled), density: $(() => e.density), error: $(() => e.error), inline: $(() => e.inline), modelValue: l, multiple: $(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: i, falseIcon: $(() => e.falseIcon), trueIcon: $(() => e.trueIcon), readonly: $(() => e.readonly), ripple: $(() => e.ripple), type: $(() => e.type), valueComparator: $(() => e.valueComparator) } }), le(() => {
    var _a3;
    return S("div", { class: ne(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: ge(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Yr = U({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...we(), ...ld() }, "VSelectionControl");
function P_(e) {
  const t = Ue(Qh, void 0), { densityClasses: n } = Wt(e), l = Ve(e, "modelValue"), a = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), r = _({ get() {
    const v = t ? t.modelValue.value : l.value;
    return i.value ? ut(v).some((p) => e.valueComparator(p, a.value)) : e.valueComparator(v, a.value);
  }, set(v) {
    if (e.readonly) return;
    const p = v ? a.value : o.value;
    let m = p;
    i.value && (m = v ? [...ut(l.value), p] : ut(l.value).filter((h) => !e.valueComparator(h, a.value))), t ? t.modelValue.value = m : l.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = Lt(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Je(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: a, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const jl = te()({ name: "VSelectionControl", directives: { vRipple: zt }, inheritAttrs: false, props: Yr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: a, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = P_(e), v = Ot(), p = re(false), m = re(false), h = H(), b = $(() => e.id || `input-${v}`), x = $(() => !e.disabled && !e.readonly);
  a == null ? void 0 : a.onForceUpdate(() => {
    h.value && (h.value.checked = r.value);
  });
  function V(C) {
    x.value && (p.value = true, no(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function I() {
    p.value = false, m.value = false;
  }
  function k(C) {
    C.stopPropagation();
  }
  function y(C) {
    if (!x.value) {
      h.value && (h.value.checked = r.value);
      return;
    }
    e.readonly && a && Be(() => a.forceUpdate()), r.value = C.target.checked;
  }
  return le(() => {
    var _a3, _b2;
    const C = l.label ? l.label({ label: e.label, props: { for: b.value } }) : e.label, [w, T] = tl(n), P = S("input", J({ ref: h, checked: r.value, disabled: !!e.disabled, id: b.value, onBlur: I, onFocus: V, onInput: y, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, T), null);
    return S("div", J({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": p.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, w, { style: e.style }), [S("div", { class: ne(["v-selection-control__wrapper", s.value]), style: ge(u.value) }, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { backgroundColorClasses: c, backgroundColorStyles: d }), nt(S("div", { class: ne(["v-selection-control__input"]) }, [((_b2 = l.input) == null ? void 0 : _b2.call(l, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: V, onBlur: I, id: b.value } })) ?? S(be, null, [i.value && g(qe, { key: "icon", icon: i.value }, null), P])]), [[zt, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && g(ho, { for: b.value, onClick: k }, { default: () => [C] })]);
  }), { isFocused: p, input: h };
} }), ty = U({ indeterminate: Boolean, indeterminateIcon: { type: Pe, default: "$checkboxIndeterminate" }, ...Yr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Ln = te()({ name: "VCheckboxBtn", props: ty(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "indeterminate"), a = Ve(e, "modelValue");
  function o(s) {
    l.value && (l.value = false);
  }
  const i = $(() => l.value ? e.indeterminateIcon : e.falseIcon), r = $(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return le(() => {
    const s = He(jl.filterProps(e), ["modelValue"]);
    return g(jl, J(s, { modelValue: a.value, "onUpdate:modelValue": [(u) => a.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": l.value ? "mixed" : void 0 }), n);
  }), {};
} });
function Ii(e) {
  const { t } = lt();
  function n(l) {
    let { name: a, color: o, ...i } = l;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[a], s = e[`onClick:${a}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), pi(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return g(qe, J({ icon: e[`${a}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const T_ = U({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...we(), ...wl({ transition: { component: Qc, leaveAbsolute: true, group: true } }) }, "VMessages"), ny = te()({ name: "VMessages", props: T_(), setup(e, t) {
  let { slots: n } = t;
  const l = _(() => ut(e.messages)), { textColorClasses: a, textColorStyles: o } = Lt(() => e.color);
  return le(() => g(tn, { transition: e.transition, tag: "div", class: ne(["v-messages", a.value, e.class]), style: ge([o.value, e.style]) }, { default: () => [e.active && l.value.map((i, r) => S("div", { class: "v-messages__message", key: `${r}-${l.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), Pi = U({ focused: Boolean, "onUpdate:focused": Nt() }, "focus");
function Vl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl();
  const n = Ve(e, "focused"), l = $(() => ({ [`${t}--focused`]: n.value }));
  function a() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: l, isFocused: n, focus: a, blur: o };
}
const ly = Symbol.for("vuetify:form"), A_ = U({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function D_(e) {
  const t = Ve(e, "modelValue"), n = $(() => e.disabled), l = $(() => e.readonly), a = re(false), o = H([]), i = H([]);
  async function r() {
    const c = [];
    let d = true;
    i.value = [], a.value = true;
    for (const f of o.value) {
      const v = await f.validate();
      if (v.length > 0 && (d = false, c.push({ id: f.id, errorMessages: v })), !d && e.fastFail) break;
    }
    return i.value = c, a.value = false, { valid: d, errors: i.value };
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
  }, { deep: true, flush: "post" }), mt(ly, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: p, resetValidation: m } = c;
    o.value.some((h) => h.id === d), o.value.push({ id: d, validate: v, reset: p, resetValidation: m, vm: Gm(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((p) => p.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: l, isValidating: a, isValid: t, items: o, validateOn: $(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: l, isValidating: a, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function yo(e) {
  const t = Ue(ly, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const M_ = Symbol.for("vuetify:rules");
function E_(e) {
  const t = Ue(M_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? $(e);
}
const ay = U({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Pi() }, "validation");
function oy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nl(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ot();
  const l = Ve(e, "modelValue"), a = _(() => e.validationValue === void 0 ? l.value : e.validationValue), o = yo(e), i = E_(() => e.rules), r = H([]), s = re(true), u = _(() => !!(ut(l.value === "" ? null : l.value).length || ut(a.value === "" ? null : a.value).length)), c = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? ut(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = _(() => {
    var _a3;
    let I = (e.validateOn ?? ((_a3 = o.validateOn) == null ? void 0 : _a3.value)) || "input";
    I === "lazy" && (I = "input lazy"), I === "eager" && (I = "input eager");
    const k = new Set((I == null ? void 0 : I.split(" ")) ?? []);
    return { input: k.has("input"), blur: k.has("blur") || k.has("input") || k.has("invalid-input"), invalidInput: k.has("invalid-input"), lazy: k.has("lazy"), eager: k.has("eager") };
  }), f = _(() => {
    var _a3;
    return e.error || ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = re(false), p = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = _t("validation"), h = _(() => e.name ?? vt(n));
  fo(() => {
    var _a3;
    (_a3 = o.register) == null ? void 0 : _a3.call(o, { id: h.value, vm: m, validate: V, reset: b, resetValidation: x });
  }), Yt(() => {
    var _a3;
    (_a3 = o.unregister) == null ? void 0 : _a3.call(o, h.value);
  }), Tt(async () => {
    var _a3;
    d.value.lazy || await V(!d.value.eager), (_a3 = o.update) == null ? void 0 : _a3.call(o, h.value, f.value, c.value);
  }), Ht(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    se(a, () => {
      if (a.value != null) V();
      else if (e.focused) {
        const I = se(() => e.focused, (k) => {
          k || V(), I();
        });
      }
    });
  }), Ht(() => d.value.blur, () => {
    se(() => e.focused, (I) => {
      I || V();
    });
  }), se([f, c], () => {
    var _a3;
    (_a3 = o.update) == null ? void 0 : _a3.call(o, h.value, f.value, c.value);
  });
  async function b() {
    l.value = null, await Be(), await x();
  }
  async function x() {
    s.value = true, d.value.lazy ? r.value = [] : await V(!d.value.eager);
  }
  async function V() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const k = [];
    v.value = true;
    for (const y of i.value) {
      if (k.length >= Number(e.maxErrors ?? 1)) break;
      const w = await (typeof y == "function" ? y : () => y)(a.value);
      if (w !== true) {
        if (w !== false && typeof w != "string") {
          console.warn(`${w} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        k.push(w || "");
      }
    }
    return r.value = k, v.value = false, s.value = I, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: b, resetValidation: x, validate: V, validationClasses: p };
}
const Il = U({ id: String, appendIcon: Pe, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Pe, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Nt(), "onClick:append": Nt(), ...we(), ...St(), ...cn(Vt(), ["maxWidth", "minWidth", "width"]), ...Ke(), ...ay() }, "VInput"), Gt = te()({ name: "VInput", props: { ...Il() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const { densityClasses: o } = Wt(e), { dimensionStyles: i } = It(e), { themeClasses: r } = Ze(e), { rtlClasses: s } = At(), { InputIcon: u } = Ii(e), c = Ot(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: p, isReadonly: m, isPristine: h, isValid: b, isValidating: x, reset: V, resetValidation: I, validate: k, validationClasses: y } = oy(e, "v-input", d), C = _(() => {
    var _a3;
    return ((_a3 = e.errorMessages) == null ? void 0 : _a3.length) || !h.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), w = $(() => C.value.length > 0), T = $(() => !e.hideDetails || e.hideDetails === "auto" && (w.value || !!l.details)), P = _(() => T.value ? `${d.value}-messages` : void 0), M = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: p, isReadonly: m, isPristine: h, isValid: b, isValidating: x, hasDetails: T, reset: V, resetValidation: I, validate: k })), D = $(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), E = $(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return le(() => {
    var _a3, _b2;
    const A = !!(l.prepend || e.prependIcon), F = !!(l.append || e.appendIcon);
    return S("div", { class: ne(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, y.value, e.class]), style: ge([i.value, e.style]) }, [A && S("div", { key: "prepend", class: "v-input__prepend" }, [l.prepend ? l.prepend(M.value) : e.prependIcon && g(u, { key: "prepend-icon", name: "prepend", color: E.value }, null)]), l.default && S("div", { class: "v-input__control" }, [(_a3 = l.default) == null ? void 0 : _a3.call(l, M.value)]), F && S("div", { key: "append", class: "v-input__append" }, [l.append ? l.append(M.value) : e.appendIcon && g(u, { key: "append-icon", name: "append", color: E.value }, null)]), T.value && S("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [g(ny, { active: w.value, messages: C.value }, { message: l.message }), (_b2 = l.details) == null ? void 0 : _b2.call(l, M.value)])]);
  }), { reset: V, resetValidation: I, validate: k, isValid: b, errorMessages: f };
} }), Rs = Symbol("Forwarded refs");
function Fs(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l) return l;
    n = Object.getPrototypeOf(n);
  }
}
function Et(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) n[l - 1] = arguments[l];
  return e[Rs] = n, new Proxy(e, { get(a, o) {
    if (Reflect.has(a, o)) return Reflect.get(a, o);
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const i of n) if (i.value && Reflect.has(i.value, o)) {
        const r = Reflect.get(i.value, o);
        return typeof r == "function" ? r.bind(i.value) : r;
      }
    }
  }, has(a, o) {
    if (Reflect.has(a, o)) return true;
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return false;
    for (const i of n) if (i.value && Reflect.has(i.value, o)) return true;
    return false;
  }, set(a, o, i) {
    if (Reflect.has(a, o)) return Reflect.set(a, o, i);
    if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return false;
    for (const r of n) if (r.value && Reflect.has(r.value, o)) return Reflect.set(r.value, o, i);
    return false;
  }, getOwnPropertyDescriptor(a, o) {
    var _a3;
    const i = Reflect.getOwnPropertyDescriptor(a, o);
    if (i) return i;
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const r of n) {
        if (!r.value) continue;
        const s = Fs(r.value, o) ?? ("_" in r.value ? Fs((_a3 = r.value._) == null ? void 0 : _a3.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[Rs];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = Fs(c.value, o);
          if (d) return d;
          const f = c.value && c.value[Rs];
          f && u.push(...f);
        }
      }
    }
  } });
}
const B_ = U({ ...He(Il(), ["direction"]), ...He(ty(), ["inline"]) }, "VCheckbox"), $_ = te()({ name: "VCheckbox", inheritAttrs: false, props: B_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = Ve(e, "modelValue"), { isFocused: o, focus: i, blur: r } = Vl(e), s = H(), u = Ot();
  return le(() => {
    const [c, d] = tl(n), f = Gt.filterProps(e), v = Ln.filterProps(e);
    return g(Gt, J({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: a.value, "onUpdate:modelValue": (p) => a.value = p, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...l, default: (p) => {
      let { id: m, messagesId: h, isDisabled: b, isReadonly: x, isValid: V } = p;
      return g(Ln, J(v, { id: m.value, "aria-describedby": h.value, disabled: b.value, readonly: x.value }, d, { error: V.value === false, modelValue: a.value, "onUpdate:modelValue": (I) => a.value = I, onFocus: i, onBlur: r }), l);
    } });
  }), Et({}, s);
} });
function R_(e) {
  let { selectedElement: t, containerElement: n, isRtl: l, isHorizontal: a } = e;
  const o = ii(a, n), i = iy(a, l, n), r = ii(a, t), s = ry(a, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function F_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: l } = e;
  const a = ii(l, n), o = ry(l, t), i = ii(l, t);
  return o - a / 2 + i / 2;
}
function Uv(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function L_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function iy(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: l, offsetWidth: a, scrollWidth: o } = n;
  return e ? t ? o - a + l : l : n.scrollTop;
}
function ii(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function ry(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const ad = Symbol.for("vuetify:v-slide-group"), od = U({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: ad }, nextIcon: { type: Pe, default: "$next" }, prevIcon: { type: Pe, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...we(), ...Ca({ mobile: null }), ...$e(), ...Pa({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), ri = te()({ name: "VSlideGroup", props: od(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: l } = At(), { displayClasses: a, mobile: o } = Cn(e), i = ql(e, e.symbol), r = re(false), s = re(0), u = re(0), c = re(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = Tn(), { resizeRef: p, contentRect: m } = Tn(), h = fC(), b = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), x = _(() => i.selected.value.length ? i.items.value.findIndex((z) => z.id === i.selected.value[0]) : -1), V = _(() => i.selected.value.length ? i.items.value.findIndex((z) => z.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (tt) {
    let z = -1;
    se(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(z), z = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const O = d.value ? "width" : "height";
          u.value = v.value[O], c.value = m.value[O], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && x.value >= 0 && p.el) {
          const O = p.el.children[V.value];
          k(O, e.centerActive);
        }
      });
    });
  }
  const I = re(false);
  function k(z, O) {
    let G = 0;
    O ? G = F_({ containerElement: f.el, isHorizontal: d.value, selectedElement: z }) : G = R_({ containerElement: f.el, isHorizontal: d.value, isRtl: l.value, selectedElement: z }), y(G);
  }
  function y(z) {
    if (!tt || !f.el) return;
    const O = ii(d.value, f.el), G = iy(d.value, l.value, f.el);
    if (!(Uv(d.value, f.el) <= O || Math.abs(z - G) < 16)) {
      if (d.value && l.value && f.el) {
        const { scrollWidth: pe, offsetWidth: K } = f.el;
        z = pe - K - z;
      }
      d.value ? h.horizontal(z, b.value) : h(z, b.value);
    }
  }
  function C(z) {
    const { scrollTop: O, scrollLeft: G } = z.target;
    s.value = d.value ? G : O;
  }
  function w(z) {
    if (I.value = true, !(!r.value || !p.el)) {
      for (const O of z.composedPath()) for (const G of p.el.children) if (G === O) {
        k(G);
        return;
      }
    }
  }
  function T(z) {
    I.value = false;
  }
  let P = false;
  function M(z) {
    var _a3;
    !P && !I.value && !(z.relatedTarget && ((_a3 = p.el) == null ? void 0 : _a3.contains(z.relatedTarget))) && F(), P = false;
  }
  function D() {
    P = true;
  }
  function E(z) {
    if (!p.el) return;
    function O(G) {
      z.preventDefault(), F(G);
    }
    d.value ? z.key === "ArrowRight" ? O(l.value ? "prev" : "next") : z.key === "ArrowLeft" && O(l.value ? "next" : "prev") : z.key === "ArrowDown" ? O("next") : z.key === "ArrowUp" && O("prev"), z.key === "Home" ? O("first") : z.key === "End" && O("last");
  }
  function A(z, O) {
    if (!z) return;
    let G = z;
    do
      G = G == null ? void 0 : G[O === "next" ? "nextElementSibling" : "previousElementSibling"];
    while (G == null ? void 0 : G.hasAttribute("disabled"));
    return G;
  }
  function F(z) {
    if (!p.el) return;
    let O;
    if (!z) O = Fl(p.el)[0];
    else if (z === "next") {
      if (O = A(p.el.querySelector(":focus"), z), !O) return F("first");
    } else if (z === "prev") {
      if (O = A(p.el.querySelector(":focus"), z), !O) return F("last");
    } else z === "first" ? (O = p.el.firstElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = A(O, "next"))) : z === "last" && (O = p.el.lastElementChild, (O == null ? void 0 : O.hasAttribute("disabled")) && (O = A(O, "prev")));
    O && O.focus({ preventScroll: true });
  }
  function j(z) {
    const O = d.value && l.value ? -1 : 1, G = (z === "prev" ? -O : O) * u.value;
    let ie = s.value + G;
    if (d.value && l.value && f.el) {
      const { scrollWidth: pe, offsetWidth: K } = f.el;
      ie += pe - K;
    }
    y(ie);
  }
  const W = _(() => ({ next: i.next, prev: i.prev, select: i.select, isSelected: i.isSelected })), Y = _(() => r.value || Math.abs(s.value) > 0), N = _(() => {
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
  }), R = _(() => Math.abs(s.value) > 1), Z = _(() => {
    if (!f.value || !Y.value) return false;
    const z = Uv(d.value, f.el), O = L_(d.value, f.el);
    return z - O - Math.abs(s.value) > 1;
  });
  return le(() => g(e.tag, { class: ne(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": N.value, "v-slide-group--is-overflowing": r.value }, a.value, e.class]), style: ge(e.style), tabindex: I.value || i.selected.value.length ? -1 : 0, onFocus: M }, { default: () => {
    var _a3, _b2, _c2;
    return [N.value && S("div", { key: "prev", class: ne(["v-slide-group__prev", { "v-slide-group__prev--disabled": !R.value }]), onMousedown: D, onClick: () => R.value && j("prev") }, [((_a3 = n.prev) == null ? void 0 : _a3.call(n, W.value)) ?? g(li, null, { default: () => [g(qe, { icon: l.value ? e.nextIcon : e.prevIcon }, null)] })]), S("div", { key: "container", ref: f, class: ne(["v-slide-group__container", e.contentClass]), onScroll: C }, [S("div", { ref: p, class: "v-slide-group__content", onFocusin: w, onFocusout: T, onKeydown: E }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, W.value)])]), N.value && S("div", { key: "next", class: ne(["v-slide-group__next", { "v-slide-group__next--disabled": !Z.value }]), onMousedown: D, onClick: () => Z.value && j("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, W.value)) ?? g(li, null, { default: () => [g(qe, { icon: l.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: j, scrollOffset: s, focus: F, hasPrev: R, hasNext: Z };
} }), sy = Symbol.for("vuetify:v-chip-group"), O_ = U({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Ft }, ...od({ scrollToActive: false }), ...we(), ...Pa({ selectedClass: "v-chip--selected" }), ...$e(), ...Ke(), ...Vn({ variant: "tonal" }) }, "VChipGroup"), N_ = te()({ name: "VChipGroup", props: O_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { isSelected: a, select: o, next: i, prev: r, selected: s } = ql(e, sy);
  return pt({ VChip: { baseColor: $(() => e.baseColor), color: $(() => e.color), disabled: $(() => e.disabled), filter: $(() => e.filter), variant: $(() => e.variant) } }), le(() => {
    const u = ri.filterProps(e);
    return g(ri, J(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }), { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), H_ = U({ activeClass: String, appendAvatar: String, appendIcon: Pe, baseColor: String, closable: Boolean, closeIcon: { type: Pe, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Pe, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Pe, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Nt(), onClickOnce: Nt(), ...Kt(), ...we(), ...St(), ...Pt(), ...Ta(), ...ct(), ...Vi(), ...al(), ...$e({ tag: "span" }), ...Ke(), ...Vn({ variant: "tonal" }) }, "VChip"), pl = te()({ name: "VChip", directives: { vRipple: zt }, props: H_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { t: o } = lt(), { borderClasses: i } = ln(e), { densityClasses: r } = Wt(e), { elevationClasses: s } = Mt(e), { roundedClasses: u } = yt(e), { sizeClasses: c } = vo(e), { themeClasses: d } = Ze(e), f = Ve(e, "modelValue"), v = zl(e, sy, false), p = zl(e, ad, false), m = _i(e, n), h = $(() => e.link !== false && m.isLink.value), b = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), x = $(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(w) {
    w.preventDefault(), w.stopPropagation(), f.value = false, l("click:close", w);
  } }));
  se(f, (w) => {
    w ? (v == null ? void 0 : v.register(), p == null ? void 0 : p.register()) : (v == null ? void 0 : v.unregister(), p == null ? void 0 : p.unregister());
  });
  const { colorClasses: V, colorStyles: I, variantClasses: k } = _l(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function y(w) {
    var _a3, _b2;
    l("click", w), b.value && ((_b2 = (_a3 = m.navigate).value) == null ? void 0 : _b2.call(_a3, w), v == null ? void 0 : v.toggle());
  }
  function C(w) {
    (w.key === "Enter" || w.key === " ") && (w.preventDefault(), y(w));
  }
  return () => {
    var _a3;
    const w = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), P = !!(T || a.append), M = !!(a.close || e.closable), D = !!(a.filter || e.filter) && v, E = !!(e.prependIcon || e.prependAvatar), A = !!(E || a.prepend);
    return f.value && nt(g(w, J(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": b.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a3 = m.isActive) == null ? void 0 : _a3.value) }, d.value, i.value, V.value, r.value, s.value, u.value, c.value, k.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [I.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: b.value ? 0 : void 0, onClick: y, onKeydown: b.value && !h.value && C }), { default: () => {
      var _a4;
      return [Cl(b.value, "v-chip"), D && g(ed, { key: "filter" }, { default: () => [nt(S("div", { class: "v-chip__filter" }, [a.filter ? g(Fe, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : g(qe, { key: "filter-icon", icon: e.filterIcon }, null)]), [[On, v.isSelected.value]])] }), A && S("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? g(Fe, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, a.prepend) : S(be, null, [e.prependIcon && g(qe, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && g(wn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), S("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a4 = a.default) == null ? void 0 : _a4.call(a, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Ee(e.text)]), P && S("div", { key: "append", class: "v-chip__append" }, [a.append ? g(Fe, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, a.append) : S(be, null, [e.appendIcon && g(qe, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && g(wn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), M && S("button", J({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, x.value), [a.close ? g(Fe, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : g(qe, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[zt, b.value && e.ripple, null]]);
  };
} }), z_ = ["dotted", "dashed", "solid", "double"], W_ = U({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => z_.includes(e) }, ...we(), ...Ke() }, "VDivider"), xn = te()({ name: "VDivider", props: W_(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Ze(e), { textColorClasses: o, textColorStyles: i } = Lt(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = me(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = me(e.thickness)), u;
  }), s = $(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? me(u) : void 0, marginInline: !e.vertical && u ? me(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${me(c)})` : void 0 };
  });
  return le(() => {
    const u = S("hr", { class: ne([{ "v-divider": true, "v-divider--gradient": e.gradient && !l.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, a.value, o.value, e.class]), style: ge([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return l.default ? S("div", { class: ne(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, S("div", { class: "v-divider__content", style: ge(s.value) }, [l.default()]), u]) : u;
  }), {};
} }), wu = Symbol.for("vuetify:list");
function uy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Ue(wu, { filterable: false, hasPrepend: re(false), updateHasPrepend: () => null, trackingIndex: re(-1), navigationStrategy: re("focus"), uid: "" }), { filterable: n, trackingIndex: l = t.trackingIndex, navigationStrategy: a = t.navigationStrategy, uid: o = t.uid || Ot() } = e, i = { filterable: t.filterable || n, hasPrepend: re(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: l, navigationStrategy: a, uid: o };
  return mt(wu, i), t;
}
function cy() {
  return Ue(wu, null);
}
const id = (e) => {
  const t = { activate: (n) => {
    let { id: l, value: a, activated: o } = n;
    return l = De(l), e && !a && o.size === 1 && o.has(l) || (a ? o.add(l) : o.delete(l)), o;
  }, in: (n, l, a) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of ut(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: l, parents: a });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, dy = (e) => {
  const t = id(e);
  return { activate: (l) => {
    let { activated: a, id: o, ...i } = l;
    o = De(o);
    const r = a.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
    return t.activate({ ...i, id: o, activated: r });
  }, in: (l, a, o) => {
    let i = /* @__PURE__ */ new Set();
    if (l != null) {
      const r = ut(l);
      r.length && (i = t.in(r.slice(0, 1), a, o));
    }
    return i;
  }, out: (l, a, o) => t.out(l, a, o) };
}, j_ = (e) => {
  const t = id(e);
  return { activate: (l) => {
    let { id: a, activated: o, children: i, ...r } = l;
    return a = De(a), i.has(a) ? o : t.activate({ id: a, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, U_ = (e) => {
  const t = dy(e);
  return { activate: (l) => {
    let { id: a, activated: o, children: i, ...r } = l;
    return a = De(a), i.has(a) ? o : t.activate({ id: a, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, G_ = { open: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = a.get(t);
    for (; i != null; ) o.add(i), i = a.get(i);
    return o;
  } else return l.delete(t), l;
}, select: () => null }, fy = { open: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (n) {
    let o = a.get(t);
    for (l.add(t); o != null && o !== t; ) l.add(o), o = a.get(o);
    return l;
  } else l.delete(t);
  return l;
}, select: () => null }, Y_ = { open: fy.open, select: (e) => {
  let { id: t, value: n, opened: l, parents: a } = e;
  if (!n) return l;
  const o = [];
  let i = a.get(t);
  for (; i != null; ) o.push(i), i = a.get(i);
  return new Set(o);
} }, rd = (e) => {
  const t = { select: (n) => {
    let { id: l, value: a, selected: o } = n;
    if (l = De(l), e && !a) {
      const i = Array.from(o.entries()).reduce((r, s) => {
        let [u, c] = s;
        return c === "on" && r.push(u), r;
      }, []);
      if (i.length === 1 && i[0] === l) return o;
    }
    return o.set(l, a ? "on" : "off"), o;
  }, in: (n, l, a, o) => {
    const i = /* @__PURE__ */ new Map();
    for (const r of n || []) t.select({ id: r, value: true, selected: i, children: l, parents: a, disabled: o });
    return i;
  }, out: (n) => {
    const l = [];
    for (const [a, o] of n.entries()) o === "on" && l.push(a);
    return l;
  } };
  return t;
}, vy = (e) => {
  const t = rd(e);
  return { select: (l) => {
    let { selected: a, id: o, ...i } = l;
    o = De(o);
    const r = a.has(o) ? /* @__PURE__ */ new Map([[o, a.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (l, a, o, i) => (l == null ? void 0 : l.length) ? t.in(l.slice(0, 1), a, o, i) : /* @__PURE__ */ new Map(), out: (l, a, o) => t.out(l, a, o) };
}, K_ = (e) => {
  const t = rd(e);
  return { select: (l) => {
    let { id: a, selected: o, children: i, ...r } = l;
    return a = De(a), i.has(a) ? o : t.select({ id: a, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, X_ = (e) => {
  const t = vy(e);
  return { select: (l) => {
    let { id: a, selected: o, children: i, ...r } = l;
    return a = De(a), i.has(a) ? o : t.select({ id: a, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, sd = (e) => {
  const t = { select: (n) => {
    let { id: l, value: a, selected: o, children: i, parents: r, disabled: s } = n;
    l = De(l);
    const u = new Map(o), c = [l];
    for (; c.length; ) {
      const f = c.shift();
      s.has(f) || o.set(De(f), a ? "on" : "off"), i.has(f) && c.push(...i.get(f));
    }
    let d = De(r.get(l));
    for (; d; ) {
      let f = true, v = true;
      for (const p of i.get(d)) {
        const m = De(p);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = De(r.get(d));
    }
    return e && !a && Array.from(o.entries()).reduce((v, p) => {
      let [m, h] = p;
      return h === "on" && v.push(m), v;
    }, []).length === 0 ? u : o;
  }, in: (n, l, a) => {
    let o = /* @__PURE__ */ new Map();
    for (const i of n || []) o = t.select({ id: i, value: true, selected: o, children: l, parents: a, disabled: /* @__PURE__ */ new Set() });
    return o;
  }, out: (n, l) => {
    const a = [];
    for (const [o, i] of n.entries()) i === "on" && !l.has(o) && a.push(o);
    return a;
  } };
  return t;
}, q_ = (e) => {
  const t = sd(e);
  return { select: t.select, in: t.in, out: (l, a, o) => {
    const i = [];
    for (const [r, s] of l.entries()) if (s === "on") {
      if (o.has(r)) {
        const u = o.get(r);
        if (l.get(u) === "on") continue;
      }
      i.push(r);
    }
    return i;
  } };
}, Z_ = (e) => {
  const n = { select: sd(e).select, in: (l, a, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of l || []) a.has(s) || (r = n.select({ id: s, value: true, selected: r, children: a, parents: o, disabled: i }));
    return r;
  }, out: (l) => {
    const a = [];
    for (const [o, i] of l.entries()) (i === "on" || i === "indeterminate") && a.push(o);
    return a;
  } };
  return n;
}, io = Symbol.for("vuetify:nested"), my = { id: re(), root: { itemsRegistration: H("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: H(/* @__PURE__ */ new Map()), parents: H(/* @__PURE__ */ new Map()), disabled: H(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: H(false), scrollToActive: H(false), selectable: H(false), opened: H(/* @__PURE__ */ new Set()), activated: H(/* @__PURE__ */ new Set()), selected: H(/* @__PURE__ */ new Map()), selectedValues: H([]), getPath: () => [] } }, J_ = U({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), Q_ = (e, t) => {
  let { items: n, returnObject: l, scrollToActive: a } = t, o = false;
  const i = re(/* @__PURE__ */ new Map()), r = re(/* @__PURE__ */ new Map()), s = re(/* @__PURE__ */ new Set()), u = Ve(e, "opened", e.opened, (k) => new Set(Array.isArray(k) ? k.map((y) => De(y)) : k), (k) => [...k.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return j_(e.mandatory);
      case "single-leaf":
        return U_(e.mandatory);
      case "independent":
        return id(e.mandatory);
      case "single-independent":
      default:
        return dy(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return X_(e.mandatory);
      case "leaf":
        return K_(e.mandatory);
      case "independent":
        return rd(e.mandatory);
      case "single-independent":
        return vy(e.mandatory);
      case "trunk":
        return q_(e.mandatory);
      case "branch":
        return Z_(e.mandatory);
      case "classic":
      default:
        return sd(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Y_;
      case "single":
        return G_;
      case "multiple":
      default:
        return fy;
    }
  }), v = Ve(e, "activated", e.activated, (k) => c.value.in(k, i.value, r.value), (k) => c.value.out(k, i.value, r.value)), p = Ve(e, "selected", e.selected, (k) => d.value.in(k, i.value, r.value, s.value), (k) => d.value.out(k, i.value, r.value));
  Yt(() => {
    o = true;
  });
  function m(k) {
    const y = [];
    let C = De(k);
    for (; C !== void 0; ) y.unshift(C), C = r.value.get(C);
    return y;
  }
  const h = _t("nested"), b = /* @__PURE__ */ new Set(), x = c1(() => {
    Be(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  se(() => [n.value, st(l)], () => {
    e.itemsRegistration === "props" && V();
  }, { immediate: true });
  function V() {
    const k = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), w = st(l) ? (M) => De(M.raw) : (M) => M.value, T = [...n.value];
    let P = 0;
    for (; P < T.length; ) {
      const M = T[P++], D = w(M);
      if (M.children) {
        const E = [];
        for (const A of M.children) {
          const F = w(A);
          k.set(F, D), E.push(F), T.push(A);
        }
        y.set(D, E);
      }
      M.props.disabled && C.add(D);
    }
    i.value = y, r.value = k, s.value = C;
  }
  const I = { id: re(), root: { opened: u, activatable: $(() => e.activatable), scrollToActive: $(() => st(a)), selectable: $(() => e.selectable), activated: v, selected: p, selectedValues: _(() => {
    const k = [];
    for (const [y, C] of p.value.entries()) C === "on" && k.push(y);
    return k;
  }), itemsRegistration: $(() => e.itemsRegistration), register: (k, y, C, w) => {
    if (b.has(k)) {
      m(k).map(String).join(" -> "), m(y).concat(k).map(String).join(" -> ");
      return;
    } else b.add(k);
    y && k !== y && r.value.set(k, y), C && s.value.add(k), w && i.value.set(k, []), y != null && i.value.set(y, [...i.value.get(y) || [], k]), x();
  }, unregister: (k) => {
    if (o) return;
    b.delete(k), i.value.delete(k), s.value.delete(k);
    const y = r.value.get(k);
    if (y) {
      const C = i.value.get(y) ?? [];
      i.value.set(y, C.filter((w) => w !== k));
    }
    r.value.delete(k), x();
  }, updateDisabled: (k, y) => {
    y ? s.value.add(k) : s.value.delete(k);
  }, open: (k, y, C) => {
    h.emit("click:open", { id: k, value: y, path: m(k), event: C });
    const w = f.value.open({ id: k, value: y, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    w && (u.value = w);
  }, openOnSelect: (k, y, C) => {
    const w = f.value.select({ id: k, value: y, selected: new Map(p.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    w && (u.value = w);
  }, select: (k, y, C) => {
    h.emit("click:select", { id: k, value: y, path: m(k), event: C });
    const w = d.value.select({ id: k, value: y, selected: new Map(p.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    w && (p.value = w), I.root.openOnSelect(k, y, C);
  }, activate: (k, y, C) => {
    if (!e.activatable) return I.root.select(k, true, C);
    h.emit("click:activate", { id: k, value: y, path: m(k), event: C });
    const w = c.value.activate({ id: k, value: y, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
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
  return mt(io, I), I.root;
}, gy = (e, t, n) => {
  const l = Ue(io, my), a = Symbol("nested item"), o = _(() => {
    const r = De(st(e));
    return r !== void 0 ? r : a;
  }), i = { ...l, id: o, open: (r, s) => l.root.open(o.value, r, s), openOnSelect: (r, s) => l.root.openOnSelect(o.value, r, s), isOpen: _(() => l.root.opened.value.has(o.value)), parent: _(() => l.root.parents.value.get(o.value)), activate: (r, s) => l.root.activate(o.value, r, s), isActivated: _(() => l.root.activated.value.has(o.value)), scrollToActive: l.root.scrollToActive, select: (r, s) => l.root.select(o.value, r, s), isSelected: _(() => l.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => l.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !l.root.children.value.get(o.value)), isGroupActivator: l.isGroupActivator };
  return fo(() => {
    l.isGroupActivator || l.root.itemsRegistration.value === "props" || Be(() => {
      l.root.register(o.value, l.id.value, st(t), n);
    });
  }), Yt(() => {
    l.isGroupActivator || l.root.itemsRegistration.value === "props" || l.root.unregister(o.value);
  }), se(o, (r, s) => {
    l.isGroupActivator || l.root.itemsRegistration.value === "props" || (l.root.unregister(s), Be(() => {
      l.root.register(r, l.id.value, st(t), n);
    }));
  }), se(() => st(t), (r) => {
    l.root.updateDisabled(o.value, r);
  }), n && mt(io, i), i;
}, eV = () => {
  const e = Ue(io, my);
  mt(io, { ...e, isGroupActivator: true });
}, tV = nn({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return eV(), () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), hy = U({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Pe, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Pe, default: "$expand" }, rawId: [String, Number], prependIcon: Pe, appendIcon: Pe, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...we(), ...$e() }, "VListGroup"), si = te()({ name: "VListGroup", props: hy(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: a, id: o } = gy(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = cy(), { isBooted: s } = Ia(), u = Ue(io), c = $(() => {
    var _a3;
    return ((_a3 = u == null ? void 0 : u.root) == null ? void 0 : _a3.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a3;
    ["INPUT", "TEXTAREA"].includes((_a3 = m.target) == null ? void 0 : _a3.tagName) || a(!l.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = _(() => l.value ? e.collapseIcon : e.expandIcon), p = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return le(() => g(e.tag, { class: ne(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class]), style: ge(e.style) }, { default: () => [n.activator && g(Fe, { defaults: p.value }, { default: () => [g(tV, null, { default: () => [n.activator({ props: f.value, isOpen: l.value })] })] }), g(tn, { transition: { component: Wr }, disabled: !s.value }, { default: () => {
    var _a3, _b2;
    return [c.value ? nt(S("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), [[On, l.value]]) : l.value && S("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: l };
} }), nV = U({ opacity: [Number, String], ...we(), ...$e() }, "VListItemSubtitle"), yy = te()({ name: "VListItemSubtitle", props: nV(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-list-item-subtitle", e.class]), style: ge([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), by = kl("v-list-item-title"), py = U({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Pe, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Pe, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Nt(), onClickOnce: Nt(), ...Kt(), ...we(), ...St(), ...Vt(), ...Pt(), ...ct(), ...Vi(), ...$e(), ...Ke(), ...Vn({ variant: "text" }) }, "VListItem"), An = te()({ name: "VListItem", directives: { vRipple: zt }, props: py(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const o = _i(e, n), i = H(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: p, root: m, parent: h, openOnSelect: b, scrollToActive: x, id: V } = gy(r, () => e.disabled, false), I = cy(), k = _(() => {
    var _a3;
    return e.active !== false && (e.active || ((_a3 = o.isActive) == null ? void 0 : _a3.value) || (m.activatable.value ? u.value : f.value));
  }), y = $(() => e.link !== false && o.isLink.value), C = _(() => !!I && (m.selectable.value || m.activatable.value || e.value != null)), w = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), T = _(() => I && I.navigationStrategy.value === "track" && e.index !== void 0 && I.trackingIndex.value === e.index), P = _(() => I ? y.value ? "link" : C.value ? "option" : "listitem" : void 0), M = _(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : k.value;
  }), D = $(() => e.rounded || e.nav), E = $(() => e.color ?? e.activeColor), A = $(() => ({ color: k.value ? E.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  se(() => {
    var _a3;
    return (_a3 = o.isActive) == null ? void 0 : _a3.value;
  }, (xe) => {
    xe && F();
  }), se(u, (xe) => {
    var _a3;
    !xe || !x || ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), se(T, (xe) => {
    var _a3;
    xe && ((_a3 = i.value) == null ? void 0 : _a3.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), fo(() => {
    var _a3;
    ((_a3 = o.isActive) == null ? void 0 : _a3.value) && Be(() => F());
  });
  function F() {
    h.value != null && m.open(h.value, true), b(true);
  }
  const { themeClasses: j } = Ze(e), { borderClasses: W } = ln(e), { colorClasses: Y, colorStyles: N, variantClasses: R } = _l(A), { densityClasses: Z } = Wt(e), { dimensionStyles: z } = It(e), { elevationClasses: O } = Mt(e), { roundedClasses: G } = yt(D), ie = $(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), pe = $(() => e.ripple !== void 0 && e.ripple && (I == null ? void 0 : I.filterable) ? { keys: ["Enter"] } : e.ripple), K = _(() => ({ isActive: k.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function fe(xe) {
    var _a3, _b2, _c2;
    a("click", xe), !["INPUT", "TEXTAREA"].includes((_a3 = xe.target) == null ? void 0 : _a3.tagName) && w.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, xe), !p && (m.activatable.value ? s(!u.value, xe) : (m.selectable.value || e.value != null && !y.value) && c(!f.value, xe)));
  }
  function Te(xe) {
    const ce = xe.target;
    ["INPUT", "TEXTAREA"].includes(ce.tagName) || (xe.key === "Enter" || xe.key === " " && !(I == null ? void 0 : I.filterable)) && (xe.preventDefault(), xe.stopPropagation(), xe.target.dispatchEvent(new MouseEvent("click", xe)));
  }
  return le(() => {
    const xe = y.value ? "a" : e.tag, ce = l.title || e.title != null, B = l.subtitle || e.subtitle != null, ee = !!(!!(e.appendAvatar || e.appendIcon) || l.append), oe = !!(!!(e.prependAvatar || e.prependIcon) || l.prepend);
    return I == null ? void 0 : I.updateHasPrepend(oe), e.activeColor && Xg("active-color", ["color", "base-color"]), nt(g(xe, J(o.linkProps, { ref: i, id: e.index !== void 0 && I ? `v-list-item-${I.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": k.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !oe && (I == null ? void 0 : I.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": T.value, [`${e.activeClass}`]: e.activeClass && k.value }, j.value, W.value, Y.value, Z.value, O.value, ie.value, G.value, R.value, e.class], style: [{ "--v-list-prepend-gap": me(e.prependGap) }, N.value, z.value, e.style], tabindex: e.tabindex ?? (w.value ? I ? -2 : 0 : void 0), "aria-selected": M.value, role: P.value, onClick: fe, onKeydown: w.value && !y.value && Te }), { default: () => {
      var _a3;
      return [Cl(w.value || k.value, "v-list-item"), oe && S("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? g(Fe, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = l.prepend) == null ? void 0 : _a4.call(l, K.value)];
      } }) : S(be, null, [e.prependAvatar && g(wn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(qe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), S("div", { class: "v-list-item__spacer" }, null)]), S("div", { class: "v-list-item__content", "data-no-activator": "" }, [ce && g(by, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = l.title) == null ? void 0 : _a4.call(l, { title: e.title })) ?? Ee(e.title)];
      } }), B && g(yy, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = l.subtitle) == null ? void 0 : _a4.call(l, { subtitle: e.subtitle })) ?? Ee(e.subtitle)];
      } }), (_a3 = l.default) == null ? void 0 : _a3.call(l, K.value)]), ee && S("div", { key: "append", class: "v-list-item__append" }, [l.append ? g(Fe, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a4;
        return [(_a4 = l.append) == null ? void 0 : _a4.call(l, K.value)];
      } }) : S(be, null, [e.appendIcon && g(qe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(wn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), S("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[zt, w.value && pe.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: p, isSelected: f, list: I, select: c, root: m, id: V, link: o };
} }), lV = U({ color: String, inset: Boolean, sticky: Boolean, title: String, ...we(), ...$e() }, "VListSubheader"), bo = te()({ name: "VListSubheader", props: lV(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Lt(() => e.color);
  return le(() => {
    const o = !!(n.default || e.title);
    return g(e.tag, { class: ne(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class]), style: ge([{ textColorStyles: a }, e.style]) }, { default: () => {
      var _a3;
      return [o && S("div", { class: "v-list-subheader__text" }, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title])];
    } });
  }), {};
} }), aV = U({ items: Array, returnObject: Boolean }, "VListChildren"), Sy = te()({ name: "VListChildren", props: aV(), setup(e, t) {
  let { slots: n } = t;
  return uy(), () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((l, a) => {
      var _a4, _b3;
      let { children: o, props: i, type: r, raw: s } = l;
      if (r === "divider") return ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: i })) ?? g(xn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? g(bo, i, null);
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
      } : void 0 }, c = si.filterProps(i);
      return o ? g(si, J(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = J(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : g(An, J(v, { index: a }), u);
      }, default: () => g(Sy, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: a } }) : g(An, J(i, { index: a, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), xy = U({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), oV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Dn(e, t) {
  const n = wt(t, e.itemTitle, t), l = wt(t, e.itemValue, n), a = wt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? He(t, ["children"]) : t : void 0 : wt(t, e.itemProps);
  let i = wt(t, e.itemType, "item");
  oV.has(i) || (i = "item");
  const r = { title: n, value: l, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(a) ? ky(e, a) : void 0, raw: t };
}
Dn.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function ky(e, t) {
  const n = cn(e, Dn.neededProps), l = [];
  for (const a of t) l.push(Dn(n, a));
  return l;
}
function ud(e) {
  const t = _(() => ky(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), l = re(/* @__PURE__ */ new Map()), a = re([]);
  ht(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (Hl(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    l.value = s, a.value = u;
  });
  function o(r) {
    const s = l.value, u = t.value, c = a.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, p = e.valueComparator || Ft, m = cn(e, Dn.neededProps), h = [];
    e: for (const b of r) {
      if (!d && b === null) continue;
      if (f && typeof b == "string") {
        h.push(Dn(m, b));
        continue;
      }
      const x = s.get(b);
      if (v || !x) {
        for (const V of v ? u : c) if (p(b, V.value)) {
          h.push(V);
          continue e;
        }
        h.push(Dn(m, b));
        continue;
      }
      h.push(...x);
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
const iV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function rV(e, t) {
  const n = Hl(t) ? t : wt(t, e.itemTitle), l = Hl(t) ? t : wt(t, e.itemValue, void 0), a = wt(t, e.itemChildren), o = e.itemProps === true ? He(t, ["children"]) : wt(t, e.itemProps);
  let i = wt(t, e.itemType, "item");
  iV.has(i) || (i = "item");
  const r = { title: n, value: l, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && a ? wy(e, a) : void 0, raw: t };
}
function wy(e, t) {
  const n = [];
  for (const l of t) n.push(rV(e, l));
  return n;
}
function Cy(e) {
  return { items: _(() => wy(e, e.items)) };
}
const _y = U({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Pe, collapseIcon: Pe, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Nt(), "onClick:select": Nt(), "onUpdate:opened": Nt(), ...J_({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Kt(), ...we(), ...St(), ...Vt(), ...Pt(), ...xy(), ...ct(), ...$e(), ...Ke(), ...Vn({ variant: "text" }) }, "VList"), ro = te()({ name: "VList", props: _y(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l, emit: a } = t;
  const { items: o } = Cy(e), { themeClasses: i } = Ze(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Je(() => e.bgColor), { borderClasses: u } = ln(e), { densityClasses: c } = Wt(e), { dimensionStyles: d } = It(e), { elevationClasses: f } = Mt(e), { roundedClasses: v } = yt(e), { children: p, open: m, parents: h, select: b, getPath: x } = Q_(e, { items: o, returnObject: $(() => e.returnObject), scrollToActive: $(() => e.navigationStrategy === "track") }), V = $(() => e.lines ? `v-list--${e.lines}-line` : void 0), I = $(() => e.activeColor), k = $(() => e.baseColor), y = $(() => e.color), C = $(() => e.selectable || e.activatable), w = Ve(e, "navigationIndex", -1, (Z) => Z ?? -1), T = Ot();
  uy({ filterable: e.filterable, trackingIndex: w, navigationStrategy: $(() => e.navigationStrategy), uid: T }), se(o, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), pt({ VListGroup: { activeColor: I, baseColor: k, color: y, expandIcon: $(() => e.expandIcon), collapseIcon: $(() => e.collapseIcon) }, VListItem: { activeClass: $(() => e.activeClass), activeColor: I, baseColor: k, color: y, density: $(() => e.density), disabled: $(() => e.disabled), lines: $(() => e.lines), nav: $(() => e.nav), slim: $(() => e.slim), variant: $(() => e.variant), tabindex: $(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = re(false), M = H();
  function D(Z) {
    P.value = true;
  }
  function E(Z) {
    P.value = false;
  }
  function A(Z) {
    var _a3;
    e.navigationStrategy === "track" ? ~w.value || (w.value = W("first")) : !P.value && !(Z.relatedTarget && ((_a3 = M.value) == null ? void 0 : _a3.contains(Z.relatedTarget))) && R();
  }
  function F() {
    e.navigationStrategy === "track" && (w.value = -1);
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
  function W(Z) {
    const z = o.value.length;
    if (z === 0) return -1;
    let O;
    Z === "first" ? O = 0 : Z === "last" ? O = z - 1 : (O = w.value + (Z === "next" ? 1 : -1), O < 0 && (O = z - 1), O >= z && (O = 0));
    const G = O;
    let ie = 0;
    for (; ie < z; ) {
      const pe = o.value[O];
      if (pe && pe.type !== "divider" && pe.type !== "subheader") return O;
      if (O += Z === "next" || Z === "first" ? 1 : -1, O < 0 && (O = z - 1), O >= z && (O = 0), O === G) return -1;
      ie++;
    }
    return -1;
  }
  function Y(Z) {
    const z = Z.target;
    if (!M.value || z.tagName === "INPUT" && ["Home", "End"].includes(Z.key) || z.tagName === "TEXTAREA") return;
    const O = j(Z.key);
    if (O !== null) if (Z.preventDefault(), e.navigationStrategy === "track") {
      const G = W(O);
      G !== -1 && (w.value = G);
    } else R(O);
  }
  function N(Z) {
    P.value = true;
  }
  function R(Z) {
    if (M.value) return sa(M.value, Z);
  }
  return le(() => {
    const Z = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), z = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return g(e.tag, { ref: M, class: ne(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, V.value, v.value, e.class]), style: ge([{ "--v-list-indent": me(Z), "--v-list-group-prepend": Z ? "0px" : void 0, "--v-list-prepend-gap": me(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${T}-${w.value}` : void 0, "aria-multiselectable": z, onFocusin: D, onFocusout: E, onFocus: A, onBlur: F, onKeydown: Y, onMousedown: N }, { default: () => [g(Sy, { items: o.value, returnObject: e.returnObject }, l)] });
  }), { open: m, select: b, focus: R, children: p, parents: h, getPath: x, navigationIndex: w };
} }), sV = kl("v-list-img"), uV = U({ start: Boolean, end: Boolean, ...we(), ...$e() }, "VListItemAction"), cd = te()({ name: "VListItemAction", props: uV(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: ge(e.style) }, n)), {};
} }), cV = U({ start: Boolean, end: Boolean, ...we(), ...$e() }, "VListItemMedia"), dV = te()({ name: "VListItemMedia", props: cV(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: ge(e.style) }, n)), {};
} });
function Ls(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function fV(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gv(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: l } = e, a = l === "left" ? 0 : l === "center" ? t.width / 2 : l === "right" ? t.width : l, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Ls({ x: a, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: l } = e, a = n === "left" ? 0 : n === "right" ? t.width : n, o = l === "top" ? 0 : l === "center" ? t.height / 2 : l === "bottom" ? t.height : l;
    return Ls({ x: a, y: o }, t);
  }
  return Ls({ x: t.width / 2, y: t.height / 2 }, t);
}
const Vy = { static: gV, connected: yV }, vV = U({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Vy }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function mV(e, t) {
  const n = H({}), l = H();
  tt && Ht(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a3, _b2;
    se(() => e.locationStrategy, r), kt(() => {
      window.removeEventListener("resize", a), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), l.value = void 0;
    }), window.addEventListener("resize", a, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? l.value = (_a3 = e.locationStrategy(t, e, n)) == null ? void 0 : _a3.updateLocation : l.value = (_b2 = Vy[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function a(r) {
    var _a3;
    (_a3 = l.value) == null ? void 0 : _a3.call(l, r);
  }
  function o(r) {
    var _a3;
    (_a3 = l.value) == null ? void 0 : _a3.call(l, r);
  }
  function i(r) {
    var _a3;
    (_a3 = l.value) == null ? void 0 : _a3.call(l, r);
  }
  return { contentStyles: n, updateLocation: l };
}
function gV() {
}
function hV(e, t) {
  const n = Oc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function yV(e, t, n) {
  (Array.isArray(e.target.value) || u1(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: a, preferredOrigin: o } = Lc(() => {
    const b = uu(t.location, e.isRtl.value), x = t.origin === "overlap" ? b : t.origin === "auto" ? As(b) : uu(t.origin, e.isRtl.value);
    return b.side === x.side && b.align === Ds(x).align ? { preferredAnchor: dv(b), preferredOrigin: dv(x) } : { preferredAnchor: b, preferredOrigin: x };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((b) => _(() => {
    const x = parseFloat(t[b]);
    return isNaN(x) ? 1 / 0 : x;
  })), c = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const b = t.offset.split(" ").map(parseFloat);
      return b.length < 2 && b.push(0), b;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new nh(4), p = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((x) => {
      x !== f && v.clear(), requestAnimationFrame((V) => {
        f = V;
      });
    }), v.isFull) {
      const x = v.values();
      if (Ft(x.at(-1), x.at(-3)) && !Ft(x.at(-1), x.at(-2))) return;
    }
    const b = h();
    b && v.push(b.flipped);
  });
  let m = new Pn({ x: 0, y: 0, width: 0, height: 0 });
  se(e.target, (b, x) => {
    x && !Array.isArray(x) && p.unobserve(x), Array.isArray(b) ? Ft(b, x) || h() : b && p.observe(b);
  }, { immediate: true }), se(e.contentEl, (b, x) => {
    x && p.unobserve(x), b && p.observe(b);
  }, { immediate: true }), kt(() => {
    p.disconnect();
  });
  function h() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = ih(e.target.value));
    const b = hV(e.contentEl.value, e.isRtl.value), x = mr(e.contentEl.value), V = Number(t.viewportMargin);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const I = x.reduce((E, A) => {
      const F = Aw(A);
      return E ? new Pn({ x: Math.max(E.left, F.left), y: Math.max(E.top, F.top), width: Math.min(E.right, F.right) - Math.max(E.left, F.left), height: Math.min(E.bottom, F.bottom) - Math.max(E.top, F.top) }) : F;
    }, void 0);
    t.stickToTarget ? (I.x += Math.min(V, m.x), I.y += Math.min(V, m.y), I.width = Math.max(I.width - V * 2, m.x + m.width - V), I.height = Math.max(I.height - V * 2, m.y + m.height - V)) : (I.x += V, I.y += V, I.width -= V * 2, I.height -= V * 2);
    let k = { anchor: a.value, origin: o.value };
    function y(E) {
      const A = new Pn(b), F = Gv(E.anchor, m), j = Gv(E.origin, A);
      let { x: W, y: Y } = fV(F, j);
      switch (E.anchor.side) {
        case "top":
          Y -= c.value[0];
          break;
        case "bottom":
          Y += c.value[0];
          break;
        case "left":
          W -= c.value[0];
          break;
        case "right":
          W += c.value[0];
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
          W -= c.value[1];
          break;
        case "right":
          W += c.value[1];
          break;
      }
      return A.x += W, A.y += Y, A.width = Math.min(A.width, s.value), A.height = Math.min(A.height, u.value), { overflows: vv(A, I), x: W, y: Y };
    }
    let C = 0, w = 0;
    const T = { x: 0, y: 0 }, P = { x: false, y: false };
    let M = -1;
    for (; !(M++ > 10); ) {
      const { x: E, y: A, overflows: F } = y(k);
      C += E, w += A, b.x += E, b.y += A;
      {
        const j = fv(k.anchor), W = F.x.before || F.x.after, Y = F.y.before || F.y.after;
        let N = false;
        if (["x", "y"].forEach((R) => {
          if (R === "x" && W && !P.x || R === "y" && Y && !P.y) {
            const Z = { anchor: { ...k.anchor }, origin: { ...k.origin } }, z = R === "x" ? j === "y" ? Ds : As : j === "y" ? As : Ds;
            Z.anchor = z(Z.anchor), Z.origin = z(Z.origin);
            const { overflows: O } = y(Z);
            (O[R].before <= F[R].before && O[R].after <= F[R].after || O[R].before + O[R].after < (F[R].before + F[R].after) / 2) && (k = Z, N = P[R] = true);
          }
        }), N) continue;
      }
      F.x.before && (C += F.x.before, b.x += F.x.before), F.x.after && (C -= F.x.after, b.x -= F.x.after), F.y.before && (w += F.y.before, b.y += F.y.before), F.y.after && (w -= F.y.after, b.y -= F.y.after);
      {
        const j = vv(b, I);
        T.x = I.width - j.x.before - j.x.after, T.y = I.height - j.y.before - j.y.after, C += j.x.before, b.x += j.x.before, w += j.y.before, b.y += j.y.before;
      }
      break;
    }
    const D = fv(k.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`, transformOrigin: `${k.origin.side} ${k.origin.align}`, top: me(Os(w)), left: e.isRtl.value ? void 0 : me(Os(C)), right: e.isRtl.value ? me(Os(-C)) : void 0, minWidth: me(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: me(Yv(et(T.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: me(Yv(et(T.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: T, contentBox: b, flipped: P };
  }
  return se(() => [a.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => h()), Be(() => {
    const b = h();
    if (!b) return;
    const { available: x, contentBox: V } = b;
    V.height > x.y && requestAnimationFrame(() => {
      h(), requestAnimationFrame(() => {
        h();
      });
    });
  }), { updateLocation: h };
}
function Os(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Yv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Cu = true;
const pr = [];
function bV(e) {
  !Cu || pr.length ? (pr.push(e), _u()) : (Cu = false, e(), _u());
}
let Kv = -1;
function _u() {
  cancelAnimationFrame(Kv), Kv = requestAnimationFrame(() => {
    const e = pr.shift();
    e && e(), pr.length ? _u() : Cu = true;
  });
}
const Iy = { none: null, close: xV, block: kV, reposition: wV }, pV = U({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Iy } }, "VOverlay-scroll-strategies");
function SV(e, t) {
  if (!tt) return;
  let n;
  ht(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Za(), await new Promise((l) => setTimeout(l)), n.active && n.run(() => {
      var _a3;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a3 = Iy[e.scrollStrategy]) == null ? void 0 : _a3.call(Iy, t, e, n);
    }));
  }), kt(() => {
    n == null ? void 0 : n.stop();
  });
}
function xV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Py(dd(e.target.value, e.contentEl.value), t);
}
function kV(e, t) {
  var _a3;
  const n = (_a3 = e.root.value) == null ? void 0 : _a3.offsetParent, l = dd(e.target.value, e.contentEl.value), a = [.../* @__PURE__ */ new Set([...mr(l, t.contained ? n : void 0), ...mr(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Wc(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", me(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", me(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", me(o)), r.classList.add("v-overlay-scroll-blocked");
  }), kt(() => {
    a.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function wV(e, t, n) {
  let l = false, a = -1, o = -1;
  function i(r) {
    bV(() => {
      var _a3, _b2;
      const s = performance.now();
      (_b2 = (_a3 = e.updateLocation).value) == null ? void 0 : _b2.call(_a3, r), l = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Py(dd(e.target.value, e.contentEl.value), (r) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), kt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(a);
  });
}
function dd(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Py(e, t) {
  const n = [document, ...mr(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: true });
  }), kt(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const Vu = Symbol.for("vuetify:v-menu"), fd = U({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function vd(e, t) {
  let n = () => {
  };
  function l(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = Cw(u, () => {
        t == null ? void 0 : t(i), c(i);
      });
    });
  }
  function a() {
    return l(true);
  }
  function o(i) {
    return l(false, i);
  }
  return { clearDelay: n, runOpenDelay: a, runCloseDelay: o };
}
const CV = U({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...fd() }, "VOverlay-activator");
function _V(e, t) {
  let { isActive: n, isTop: l, contentEl: a } = t;
  const o = _t("useActivator"), i = H();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = vd(e, (w) => {
    w === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !l.value) && (n.value !== w && (u = true), n.value = w);
  }), p = H(), m = { onClick: (w) => {
    w.stopPropagation(), i.value = w.currentTarget || w.target, n.value || (p.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    r = true, i.value = w.currentTarget || w.target, f();
  }, onMouseleave: (w) => {
    r = false, v();
  }, onFocus: (w) => {
    no(w.target, ":focus-visible") !== false && (s = true, w.stopPropagation(), i.value = w.currentTarget || w.target, f());
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
      const T = Ue(Vu, null);
      w.onClick = () => {
        n.value = false, T == null ? void 0 : T.closeParents();
      };
    }
    return w;
  }), x = _(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, w.onMouseleave = () => {
      r = false, v();
    }), w;
  });
  se(l, (w) => {
    var _a3;
    w && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a3 = a.value) == null ? void 0 : _a3.contains(document.activeElement)) && (n.value = false);
  }), se(n, (w) => {
    w || setTimeout(() => {
      p.value = void 0;
    });
  }, { flush: "post" });
  const V = Zo();
  ht(() => {
    V.value && Be(() => {
      i.value = V.el;
    });
  });
  const I = Zo(), k = _(() => e.target === "cursor" && p.value ? p.value : I.value ? I.el : Ty(e.target, o) || i.value), y = _(() => Array.isArray(k.value) ? void 0 : k.value);
  let C;
  return se(() => !!e.activator, (w) => {
    w && tt ? (C = Za(), C.run(() => {
      VV(e, o, { activatorEl: i, activatorEvents: h });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), kt(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: V, target: k, targetEl: y, targetRef: I, activatorEvents: h, contentEvents: b, scrimEvents: x };
}
function VV(e, t, n) {
  let { activatorEl: l, activatorEvents: a } = n;
  se(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Be(() => o());
  }, { immediate: true }), se(() => e.activatorProps, () => {
    o();
  }), kt(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Dw(s, J(a.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Mw(s, J(a.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Ty(s, t);
    return l.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, l.value;
  }
}
function Ty(e, t) {
  var _a3, _b2;
  if (!e) return;
  let n;
  if (e === "parent") {
    let l = (_b2 = (_a3 = t == null ? void 0 : t.proxy) == null ? void 0 : _a3.$el) == null ? void 0 : _b2.parentNode;
    for (; l == null ? void 0 : l.hasAttribute("data-no-activator"); ) l = l.parentNode;
    n = l;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
const Ay = U({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Ji = /* @__PURE__ */ new Map();
let Xv = 0;
function qv(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Ji.values()).filter((u) => {
    var _a3;
    let { isActive: c, contentEl: d } = u;
    return c.value && ((_a3 = d.value) == null ? void 0 : _a3.contains(t));
  }).map((u) => u.contentEl.value);
  let l, a = t.parentElement;
  for (; a; ) {
    if (n.includes(a)) {
      l = a;
      break;
    }
    a = a.parentElement;
  }
  if (!l) return;
  const o = Fl(l).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function Dy(e, t) {
  let { isActive: n, localTop: l, activatorEl: a, contentEl: o } = t;
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
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Be(), n.value && !r && p !== m && o.value && st(l) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a3 = Fl(o.value)[0]) == null ? void 0 : _a3.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const p = Fl(document.documentElement);
      if (v.shiftKey && v.target === p.at(0) || !v.shiftKey && v.target === p.at(-1)) {
        const m = Fl(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = $(() => n.value && e.captureFocus && !e.disableInitialFocus);
  tt && (se(() => e.retainFocus, (v) => {
    v ? Ji.set(i, { isActive: n, contentEl: o }) : Ji.delete(i);
  }, { immediate: true }), se(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), Xv++ < 1 && document.addEventListener("keydown", qv)), kt(() => {
    Ji.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --Xv < 1 && document.removeEventListener("keydown", qv);
  });
}
function My() {
  if (!tt) return re(false);
  const { ssr: e } = Cn();
  if (e) {
    const t = re(false);
    return Tt(() => {
      t.value = true;
    }), t;
  } else return re(true);
}
const md = U({ eager: Boolean }, "lazy");
function gd(e, t) {
  const n = re(false), l = $(() => n.value || e.eager || t.value);
  se(t, () => n.value = true);
  function a() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: l, onAfterLeave: a };
}
function Aa() {
  const t = _t("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Zv = Symbol.for("vuetify:stack"), Vo = Rt([]);
function IV(e, t, n) {
  const l = _t("useStack"), a = !n, o = Ue(Zv, void 0), i = Rt({ activeChildren: /* @__PURE__ */ new Set() });
  mt(Zv, i);
  const r = re(Number(st(t)));
  Ht(e, () => {
    var _a3;
    const c = (_a3 = Vo.at(-1)) == null ? void 0 : _a3[1];
    r.value = c ? c + 10 : Number(st(t)), a && Vo.push([l.uid, r.value]), o == null ? void 0 : o.activeChildren.add(l.uid), kt(() => {
      if (a) {
        const d = De(Vo).findIndex((f) => f[0] === l.uid);
        Vo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(l.uid);
    });
  });
  const s = re(true);
  return a && ht(() => {
    var _a3;
    const c = ((_a3 = Vo.at(-1)) == null ? void 0 : _a3[0]) === l.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: fa(s), localTop: $(() => !i.activeChildren.size), stackStyles: $(() => ({ zIndex: r.value })) };
}
function PV(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !tt) return;
    const l = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (l == null) return;
    let a = [...l.children].find((o) => o.matches(".v-overlay-container"));
    return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
  }) };
}
function TV() {
  return true;
}
function Ey(e, t, n) {
  if (!e || By(e, n) === false) return false;
  const l = hh(t);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target) return false;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(t), !a.some((o) => o == null ? void 0 : o.contains(e.target));
}
function By(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || TV)(e);
}
function AV(e, t, n) {
  const l = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Ey(e, t, n) && setTimeout(() => {
    By(e, n) && l && l(e);
  }, 0);
}
function Jv(e, t) {
  const n = hh(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Iu = { mounted(e, t) {
  const n = (a) => AV(a, e, t), l = (a) => {
    e._clickOutside.lastMousedownWasOutside = Ey(a, e, t);
  };
  Jv(e, (a) => {
    a.addEventListener("click", n, true), a.addEventListener("mousedown", l, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: l };
}, beforeUnmount(e, t) {
  e._clickOutside && (Jv(e, (n) => {
    var _a3;
    if (!n || !((_a3 = e._clickOutside) == null ? void 0 : _a3[t.instance.$.uid])) return;
    const { onClick: l, onMousedown: a } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", l, true), n.removeEventListener("mousedown", a, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function DV(e) {
  const { modelValue: t, color: n, ...l } = e;
  return g(Nl, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && S("div", J({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const Ti = U({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...CV(), ...we(), ...Vt(), ...md(), ...vV(), ...pV(), ...Ay(), ...Ke(), ...wl() }, "VOverlay"), Jn = te()({ name: "VOverlay", directives: { vClickOutside: Iu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...He(Ti(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: l, emit: a } = t;
  const o = _t("VOverlay"), i = H(), r = H(), s = H(), u = Ve(e, "modelValue"), c = _({ get: () => u.value, set: (K) => {
    K && e.disabled || (u.value = K);
  } }), { themeClasses: d } = Ze(e), { rtlClasses: f, isRtl: v } = At(), { hasContent: p, onAfterLeave: m } = gd(e, c), h = Je(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: b, localTop: x, stackStyles: V } = IV(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: I, activatorRef: k, target: y, targetEl: C, targetRef: w, activatorEvents: T, contentEvents: P, scrimEvents: M } = _V(e, { isActive: c, isTop: x, contentEl: s }), { teleportTarget: D } = PV(() => {
    var _a3, _b2, _c2;
    const K = e.attach || e.contained;
    if (K) return K;
    const fe = ((_a3 = I == null ? void 0 : I.value) == null ? void 0 : _a3.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return fe instanceof ShadowRoot ? fe : false;
  }), { dimensionStyles: E } = It(e), A = My(), { scopeId: F } = Aa();
  se(() => e.disabled, (K) => {
    K && (c.value = false);
  });
  const { contentStyles: j, updateLocation: W } = mV(e, { isRtl: v, contentEl: s, target: y, isActive: c });
  SV(e, { root: i, contentEl: s, targetEl: C, target: y, isActive: c, updateLocation: W });
  function Y(K) {
    a("click:outside", K), e.persistent ? G() : c.value = false;
  }
  function N(K) {
    return c.value && x.value && (!e.scrim || K.target === r.value || K instanceof MouseEvent && K.shadowTarget === r.value);
  }
  Dy(e, { isActive: c, localTop: x, contentEl: s, activatorEl: I }), tt && se(c, (K) => {
    K ? window.addEventListener("keydown", R) : window.removeEventListener("keydown", R);
  }, { immediate: true }), Yt(() => {
    tt && window.removeEventListener("keydown", R);
  });
  function R(K) {
    var _a3, _b2, _c2;
    K.key === "Escape" && b.value && (((_a3 = s.value) == null ? void 0 : _a3.contains(document.activeElement)) || a("keydown", K), e.persistent ? G() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = I.value) == null ? void 0 : _c2.focus())));
  }
  function Z(K) {
    K.key === "Escape" && !b.value || a("keydown", K);
  }
  const z = zh();
  Ht(() => e.closeOnBack, () => {
    d_(z, (K) => {
      b.value && c.value ? (K(false), e.persistent ? G() : c.value = false) : K();
    });
  });
  const O = H();
  se(() => c.value && (e.absolute || e.contained) && D.value == null, (K) => {
    if (K) {
      const fe = Lr(i.value);
      fe && fe !== document.scrollingElement && (O.value = fe.scrollTop);
    }
  });
  function G() {
    e.noClickAnimation || s.value && ul(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Jo });
  }
  function ie() {
    a("afterEnter");
  }
  function pe() {
    m(), a("afterLeave");
  }
  return le(() => {
    var _a3;
    return S(be, null, [(_a3 = n.activator) == null ? void 0 : _a3.call(n, { isActive: c.value, targetRef: w, props: J({ ref: k }, T.value, e.activatorProps) }), A.value && p.value && g(KS, { disabled: !D.value, to: D.value }, { default: () => [S("div", J({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [V.value, { "--v-overlay-opacity": e.opacity, top: me(O.value) }, e.style], ref: i, onKeydown: Z }, F, l), [g(DV, J({ color: h, modelValue: c.value && !!e.scrim, ref: r }, M.value), null), g(tn, { appear: true, persisted: true, transition: e.transition, target: y.value, onAfterEnter: ie, onAfterLeave: pe }, { default: () => {
      var _a4;
      return [nt(S("div", J({ ref: s, class: ["v-overlay__content", e.contentClass], style: [E.value, j.value] }, P.value, e.contentProps), [(_a4 = n.default) == null ? void 0 : _a4.call(n, { isActive: c })]), [[On, c.value], [Iu, { handler: Y, closeConditional: N, include: () => [I.value] }]])];
    } })])] })]);
  }), { activatorEl: I, scrimEl: r, target: y, animateClick: G, contentEl: s, rootEl: i, globalTop: b, localTop: x, updateLocation: W };
} }), $y = U({ id: String, submenu: Boolean, ...He(Ti({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: zr } }), ["absolute"]) }, "VMenu"), so = te()({ name: "VMenu", props: $y(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), { scopeId: a } = Aa(), { isRtl: o } = At(), i = Ot(), r = $(() => e.id || `v-menu-${i}`), s = H(), u = Ue(Vu, null), c = re(/* @__PURE__ */ new Set());
  mt(Vu, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a3;
      !c.value.size && !e.persistent && (m == null || ((_a3 = s.value) == null ? void 0 : _a3.contentEl) && !_w(m, s.value.contentEl)) && (l.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), Yt(() => u == null ? void 0 : u.unregister()), vc(() => l.value = false), se(l, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a3, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !ah(Fl((_a3 = s.value) == null ? void 0 : _a3.contentEl, false), m.shiftKey ? "prev" : "next", (b) => b.tabIndex >= 0) && !e.retainFocus && (l.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (l.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a3;
    if (e.disabled) return;
    const h = (_a3 = s.value) == null ? void 0 : _a3.contentEl;
    h && l.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), sa(h, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), sa(h, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? l.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), sa(h, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (l.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const p = _(() => J({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return le(() => {
    const m = Jn.filterProps(e);
    return g(Jn, J({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: l.value, "onUpdate:modelValue": (h) => l.value = h, absolute: true, activatorProps: p.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, a), { activator: n.activator, default: function() {
      for (var h = arguments.length, b = new Array(h), x = 0; x < h; x++) b[x] = arguments[x];
      return g(Fe, { root: "VMenu" }, { default: () => {
        var _a3;
        return [(_a3 = n.default) == null ? void 0 : _a3.call(n, ...b)];
      } });
    } });
  }), Et({ id: r, \u03A8openChildren: c }, s);
} }), hd = U({ color: String, ...Kt(), ...we(), ...Vt(), ...Pt(), ...ll(), ...mo(), ...ct(), ...$e(), ...Ke() }, "VSheet"), Ul = te()({ name: "VSheet", props: hd(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.color), { borderClasses: i } = ln(e), { dimensionStyles: r } = It(e), { elevationClasses: s } = Mt(e), { locationStyles: u } = Xl(e), { positionClasses: c } = go(e), { roundedClasses: d } = yt(e);
  return le(() => g(e.tag, { class: ne(["v-sheet", l.value, a.value, i.value, s.value, c.value, d.value, e.class]), style: ge([o.value, r.value, u.value, e.style]) }, n)), {};
} }), MV = U({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...we(), ...wl({ transition: { component: Qc } }) }, "VCounter"), Kr = te()({ name: "VCounter", functional: true, props: MV(), setup(e, t) {
  let { slots: n } = t;
  const l = $(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return le(() => g(tn, { transition: e.transition }, { default: () => [nt(S("div", { class: ne(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: ge(e.style) }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[On, e.active]])] })), {};
} }), EV = U({ floating: Boolean, ...we() }, "VFieldLabel"), Ao = te()({ name: "VFieldLabel", props: EV(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(ho, { class: ne(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: ge(e.style) }, n)), {};
} }), BV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ai = U({ appendInnerIcon: Pe, bgColor: String, clearable: Boolean, clearIcon: { type: Pe, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Pe, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => BV.includes(e) }, "onClick:clear": Nt(), "onClick:appendInner": Nt(), "onClick:prependInner": Nt(), ...we(), ...Ur(), ...ct(), ...Ke() }, "VField"), Gl = te()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...Pi(), ...Ai() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { themeClasses: o } = Ze(e), { loaderClasses: i } = wi(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = Vl(e), { InputIcon: d } = Ii(e), { roundedClasses: f } = yt(e), { rtlClasses: v } = At(), p = $(() => e.dirty || e.active), m = $(() => !!(e.label || a.label)), h = $(() => !e.singleLine && m.value), b = Ot(), x = _(() => e.id || `input-${b}`), V = $(() => e.details ? `${x.value}-messages` : void 0), I = H(), k = H(), y = H(), C = _(() => ["plain", "underlined"].includes(e.variant)), w = _(() => e.error || e.disabled ? void 0 : p.value && s.value ? e.color : e.baseColor), T = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? w.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: M } = Je(() => e.bgColor), { textColorClasses: D, textColorStyles: E } = Lt(w);
  se(p, (Y) => {
    if (h.value && !qn()) {
      const N = I.value.$el, R = k.value.$el;
      requestAnimationFrame(() => {
        const Z = Oc(N), z = R.getBoundingClientRect(), O = z.x - Z.x, G = z.y - Z.y - (Z.height / 2 - z.height / 2), ie = z.width / 0.75, pe = Math.abs(ie - Z.width) > 1 ? { maxWidth: me(ie) } : void 0, K = getComputedStyle(N), fe = getComputedStyle(R), Te = parseFloat(K.transitionDuration) * 1e3 || 150, xe = parseFloat(fe.getPropertyValue("--v-field-label-scale")), ce = fe.getPropertyValue("color");
        N.style.visibility = "visible", R.style.visibility = "hidden", ul(N, { transform: `translate(${O}px, ${G}px) scale(${xe})`, color: ce, ...pe }, { duration: Te, easing: Jo, direction: Y ? "normal" : "reverse" }).finished.then(() => {
          N.style.removeProperty("visibility"), R.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = _(() => ({ isActive: p, isFocused: s, controlRef: y, iconColor: T, blur: c, focus: u })), F = $(() => {
    const Y = !p.value;
    return { "aria-hidden": Y, for: Y ? void 0 : x.value };
  }), j = $(() => {
    const Y = h.value && p.value;
    return { "aria-hidden": Y, for: Y ? void 0 : x.value };
  });
  function W(Y) {
    Y.target !== document.activeElement && Y.preventDefault();
  }
  return le(() => {
    var _a3;
    const Y = e.variant === "outlined", N = !!(a["prepend-inner"] || e.prependInnerIcon), R = !!(e.clearable || a.clear) && !e.disabled, Z = !!(a["append-inner"] || e.appendInnerIcon || R), z = () => a.label ? a.label({ ...A.value, label: e.label, props: { for: x.value } }) : e.label;
    return S("div", J({ class: ["v-field", { "v-field--active": p.value, "v-field--appended": Z, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": N, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !z(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [M.value, e.style], onClick: W }, n), [S("div", { class: "v-field__overlay" }, null), g(Ci, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), N && S("div", { key: "prepend", class: "v-field__prepend-inner" }, [a["prepend-inner"] ? a["prepend-inner"](A.value) : e.prependInnerIcon && g(d, { key: "prepend-icon", name: "prependInner", color: T.value }, null)]), S("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && g(Ao, J({ key: "floating-label", ref: k, class: [D.value], floating: true }, F.value, { style: E.value }), { default: () => [z()] }), m.value && g(Ao, J({ key: "label", ref: I, id: e.labelId }, j.value), { default: () => [z()] }), ((_a3 = a.default) == null ? void 0 : _a3.call(a, { ...A.value, props: { id: x.value, class: "v-field__input", "aria-describedby": V.value }, focus: u, blur: c })) ?? S("div", { id: x.value, class: "v-field__input", "aria-describedby": V.value }, null)]), R && g(ed, { key: "clear" }, { default: () => [nt(S("div", { class: "v-field__clearable", onMousedown: (O) => {
      O.preventDefault(), O.stopPropagation();
    } }, [g(Fe, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [a.clear ? a.clear({ ...A.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : g(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[On, e.dirty]])] }), Z && S("div", { key: "append", class: "v-field__append-inner" }, [a["append-inner"] ? a["append-inner"](A.value) : e.appendInnerIcon && g(d, { key: "append-icon", name: "appendInner", color: T.value }, null)]), S("div", { class: ne(["v-field__outline", D.value]), style: ge(E.value) }, [Y && S(be, null, [S("div", { class: "v-field__outline__start" }, null), h.value && S("div", { class: "v-field__outline__notch" }, [g(Ao, J({ ref: k, floating: true }, F.value), { default: () => [z()] })]), S("div", { class: "v-field__outline__end" }, null)]), C.value && h.value && g(Ao, J({ ref: k, floating: true }, F.value), { default: () => [z()] })])]);
  }), { controlRef: y, fieldIconColor: T };
} }), Ry = U({ autocomplete: String }, "autocomplete");
function yd(e) {
  const t = Ot(), n = re(0), l = $(() => e.autocomplete === "suppress");
  return { isSuppressing: l, fieldAutocomplete: $(() => l.value ? "off" : e.autocomplete), fieldName: $(() => {
    if (e.name) return l.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Fy(e) {
  function t(n, l) {
    var _a3;
    if (!e.autofocus || !n) return;
    const a = l[0].target;
    (_a3 = a.matches("input,textarea") ? a : a.querySelector("input,textarea")) == null ? void 0 : _a3.focus();
  }
  return { onIntersect: t };
}
const $V = ["color", "file", "time", "date", "datetime-local", "week", "month"], Di = U({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Ry(), ...He(Il(), ["direction"]), ...Ai() }, "VTextField"), Qn = te()({ name: "VTextField", directives: { vIntersect: Fn }, inheritAttrs: false, props: Di(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const o = Ve(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = Vl(e), { onIntersect: u } = Fy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = H(), p = H(), m = H(), h = yd(e), b = _(() => $V.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function x() {
    h.isSuppressing.value && h.update(), i.value || r(), Be(() => {
      var _a3;
      m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus());
    });
  }
  function V(C) {
    l("mousedown:control", C), C.target !== m.value && (x(), C.preventDefault());
  }
  function I(C) {
    l("click:control", C);
  }
  function k(C, w) {
    C.stopPropagation(), x(), Be(() => {
      w(), pi(e["onClick:clear"], C);
    });
  }
  function y(C) {
    var _a3;
    const w = C.target;
    if (!(((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = w.value;
      return;
    }
    const T = w.value, P = w.selectionStart, M = w.selectionEnd;
    o.value = T, Be(() => {
      let D = 0;
      T.trimStart().length === w.value.length && (D = T.length - w.value.length), P != null && (w.selectionStart = P - D), M != null && (w.selectionEnd = M - D);
    });
  }
  return le(() => {
    const C = !!(a.counter || e.counter !== false && e.counter != null), w = !!(C || a.details), [T, P] = tl(n), { modelValue: M, ...D } = Gt.filterProps(e), E = Gl.filterProps(e);
    return g(Gt, J({ ref: v, modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, T, D, { centerAffix: !f.value, focused: i.value }), { ...a, default: (A) => {
      let { id: F, isDisabled: j, isDirty: W, isReadonly: Y, isValid: N, hasDetails: R, reset: Z } = A;
      return g(Gl, J({ ref: p, onMousedown: V, onClick: I, "onClick:clear": (z) => k(z, Z), role: e.role }, He(E, ["onClick:clear"]), { id: F.value, labelId: `${F.value}-label`, active: b.value || W.value, dirty: W.value || e.dirty, disabled: j.value, focused: i.value, details: R.value, error: N.value === false }), { ...a, default: (z) => {
        let { props: { class: O, ...G }, controlRef: ie } = z;
        const pe = S("input", J({ ref: (K) => m.value = ie.value = K, value: o.value, onInput: y, autofocus: e.autofocus, readonly: Y.value, disabled: j.value, name: h.fieldName.value, autocomplete: h.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${F.value}-label` }, G, P), null);
        return S(be, null, [e.prefix && S("span", { class: "v-text-field__prefix" }, [S("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), nt(a.default ? S("div", { class: ne(O), "data-no-activator": "" }, [a.default({ id: F }), pe]) : yl(pe, { class: O }), [[Fn, u, null, { once: true }]]), e.suffix && S("span", { class: "v-text-field__suffix" }, [S("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: w ? (A) => {
      var _a3;
      return S(be, null, [(_a3 = a.details) == null ? void 0 : _a3.call(a, A), C && S(be, null, [S("span", null, null), g(Kr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, a.counter)])]);
    } : void 0 });
  }), Et({}, v, p, m);
} }), RV = U({ renderless: Boolean, ...we() }, "VVirtualScrollItem"), Ly = te()({ name: "VVirtualScrollItem", inheritAttrs: false, props: RV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { resizeRef: o, contentRect: i } = Tn(void 0, "border");
  se(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, (r) => {
    r != null && l("update:height", r);
  }), le(() => {
    var _a3, _b2;
    return e.renderless ? S(be, null, [(_a3 = a.default) == null ? void 0 : _a3.call(a, { itemRef: o })]) : S("div", J({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = a.default) == null ? void 0 : _b2.call(a)]);
  });
} }), FV = -1, LV = 1, Ns = 100, Oy = U({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Ny(e, t) {
  const n = Cn(), l = re(0);
  ht(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = re(0), o = re(Math.ceil((parseInt(e.height) || n.height.value) / (l.value || 16)) || 1), i = re(0), r = re(0), s = H(), u = H();
  let c = 0;
  const { resizeRef: d, contentRect: f } = Tn();
  ht(() => {
    d.value = s.value;
  });
  const v = _(() => {
    var _a3;
    return s.value === document.documentElement ? n.height.value : ((_a3 = f.value) == null ? void 0 : _a3.height) || parseInt(e.height) || 0;
  }), p = _(() => !!(s.value && u.value && v.value && l.value));
  let m = Array.from({ length: t.value.length }), h = Array.from({ length: t.value.length });
  const b = re(0);
  let x = -1;
  function V(R) {
    return m[R] || l.value;
  }
  const I = eh(() => {
    const R = performance.now();
    h[0] = 0;
    const Z = t.value.length;
    for (let z = 1; z <= Z; z++) h[z] = (h[z - 1] || 0) + V(z - 1);
    b.value = Math.max(b.value, performance.now() - R);
  }, b), k = se(p, (R) => {
    R && (k(), c = u.value.offsetTop, I.immediate(), j(), ~x && Be(() => {
      tt && window.requestAnimationFrame(() => {
        Y(x), x = -1;
      });
    }));
  });
  kt(() => {
    I.clear();
  });
  function y(R, Z) {
    const z = m[R], O = l.value;
    l.value = O ? Math.min(l.value, Z) : Z, (z !== Z || O !== l.value) && (m[R] = Z, I());
  }
  function C(R) {
    R = et(R, 0, t.value.length);
    const Z = Math.floor(R), z = R % 1, O = Z + 1, G = h[Z] || 0, ie = h[O] || G;
    return G + (ie - G) * z;
  }
  function w(R) {
    return OV(h, R);
  }
  let T = 0, P = 0, M = 0;
  se(v, (R, Z) => {
    j(), R < Z && requestAnimationFrame(() => {
      P = 0, j();
    });
  });
  let D = -1;
  function E() {
    if (!s.value || !u.value) return;
    const R = s.value.scrollTop, Z = performance.now();
    Z - M > 500 ? (P = Math.sign(R - T), c = u.value.offsetTop) : P = R - T, T = R, M = Z, window.clearTimeout(D), D = window.setTimeout(A, 500), j();
  }
  function A() {
    !s.value || !u.value || (P = 0, M = 0, window.clearTimeout(D), j());
  }
  let F = -1;
  function j() {
    cancelAnimationFrame(F), F = requestAnimationFrame(W);
  }
  function W() {
    if (!s.value || !v.value || !l.value) return;
    const R = T - c, Z = Math.sign(P), z = Math.max(0, R - Ns), O = et(w(z), 0, t.value.length), G = R + v.value + Ns, ie = et(w(G) + 1, O + 1, t.value.length);
    if ((Z !== FV || O < a.value) && (Z !== LV || ie > o.value)) {
      const pe = C(a.value) - C(O), K = C(ie) - C(o.value);
      Math.max(pe, K) > Ns ? (a.value = O, o.value = ie) : (O <= 0 && (a.value = O), ie >= t.value.length && (o.value = ie));
    }
    i.value = C(a.value), r.value = C(t.value.length) - C(o.value);
  }
  function Y(R) {
    const Z = C(R);
    !s.value || R && !Z ? x = R : s.value.scrollTop = Z;
  }
  const N = _(() => t.value.slice(a.value, o.value).map((R, Z) => {
    const z = Z + a.value;
    return { raw: R, index: z, key: wt(R, e.itemKey, z) };
  }));
  return se(t, () => {
    m = Array.from({ length: t.value.length }), h = Array.from({ length: t.value.length }), I.immediate(), j();
  }, { deep: 1 }), { calculateVisibleItems: j, containerRef: s, markerRef: u, computedItems: N, paddingTop: i, paddingBottom: r, scrollToIndex: Y, handleScroll: E, handleScrollend: A, handleItemResize: y };
}
function OV(e, t) {
  let n = e.length - 1, l = 0, a = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; l <= n; ) if (a = l + n >> 1, o = e[a], o > t) n = a - 1;
  else if (o < t) i = a, l = a + 1;
  else return o === t ? a : l;
  return i;
}
const NV = U({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Oy(), ...we(), ...Vt() }, "VVirtualScroll"), Xr = te()({ name: "VVirtualScroll", props: NV(), setup(e, t) {
  let { slots: n } = t;
  const l = _t("VVirtualScroll"), { dimensionStyles: a } = It(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: p } = Ny(e, $(() => e.items));
  return Ht(() => e.renderless, () => {
    function m() {
      var _a3, _b2;
      const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[b]("scroll", s, { passive: true }), document[b]("scrollend", u)) : ((_a3 = i.value) == null ? void 0 : _a3[b]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[b]("scrollend", u));
    }
    Tt(() => {
      i.value = Lr(l.vnode.el, true), m(true);
    }), kt(m);
  }), le(() => {
    const m = p.value.map((h) => g(Ly, { key: h.key, renderless: e.renderless, "onUpdate:height": (b) => c(h.index, b) }, { default: (b) => {
      var _a3;
      return (_a3 = n.default) == null ? void 0 : _a3.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? S(be, null, [S("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: me(f.value) } }, null), m, S("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: me(v.value) } }, null)]) : S("div", { ref: i, class: ne(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: ge([a.value, e.style]) }, [S("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: me(f.value), paddingBottom: me(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function bd(e, t) {
  const n = re(false);
  let l;
  function a(r) {
    cancelAnimationFrame(l), n.value = true, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
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
  return { onScrollPassive: a, onKeydown: i };
}
function pd(e) {
  let { groups: t, onLeave: n } = e;
  function l(r) {
    var _a3;
    return r.type === "list" ? (_a3 = r.contentRef.value) == null ? void 0 : _a3.$el : r.contentRef.value;
  }
  function a(r) {
    const s = l(r);
    return s ? Fl(s) : [];
  }
  function o(r) {
    var _a3;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(a), d = t.map((v) => {
      var _a4;
      return v.type === "list" ? (_a4 = v.contentRef.value) == null ? void 0 : _a4.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = i(c, d, u, s);
    if (f === null) {
      const v = t[d], p = c[d];
      (v.type === "list" || (u === "forward" ? p.at(-1) === r.target : p.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && st(v.displayItemsCount) > 0) (_a3 = v.contentRef.value) == null ? void 0 : _a3.focus(0);
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
      if (r[p].length > 0 || m.type === "list" && st(m.displayItemsCount) > 0) return p;
    }
    return null;
  }
  return { onTabKeydown: o };
}
const HV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const l = [];
  let a = e.indexOf(t);
  for (; ~a; ) l.push([a, a + t.length]), a = e.indexOf(t, a + t.length);
  return l.length ? l : -1;
};
function Hs(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Da = U({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function zV(e, t, n) {
  var _a3, _b2;
  const l = [], a = (n == null ? void 0 : n.default) ?? HV, o = (n == null ? void 0 : n.filterKeys) ? ut(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return l;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = ut(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let p = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a3 = r.at(-1)) == null ? void 0 : _a3.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const b = o || Object.keys(c);
        p = b.length === i;
        for (const x of b) {
          const V = wt(c, x), I = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[x];
          if (v = I ? I(V, t, u) : a(V, t, u), v !== -1 && v !== false) I ? d[x] = Hs(v, t) : f[x] = Hs(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = a(u, t, u), v !== -1 && v !== false && (f.title = Hs(v, t));
      const m = Object.keys(f).length, h = Object.keys(d).length;
      if (!m && !h || (n == null ? void 0 : n.filterMode) === "union" && h !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (h !== i || !m && i > 0 && !p)) continue;
    }
    r.length && (l.push(...r), r = []), l.push({ index: s, matches: { ...f, ...d } });
  }
  return l;
}
function Ma(e, t, n, l) {
  const a = re([]), o = re(/* @__PURE__ */ new Map()), i = _(() => (l == null ? void 0 : l.transform) ? vt(t).map((s) => [s, l.transform(s)]) : vt(t));
  ht(() => {
    const s = typeof n == "function" ? n() : vt(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = zV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...vt(l == null ? void 0 : l.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = vt(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((p) => {
      let { index: m, matches: h } = p;
      const b = d[m];
      f.push(b), v.set(b.value, h);
    }), a.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: a, filteredMatches: o, getMatches: r };
}
function Sd(e, t, n) {
  return n == null || !n.length ? t : n.map((l, a) => {
    const o = a === 0 ? 0 : n[a - 1][1], i = [S("span", { class: ne(`${e}__unmask`) }, [t.slice(o, l[0])]), S("span", { class: ne(`${e}__mask`) }, [t.slice(l[0], l[1])])];
    return a === n.length - 1 && i.push(S("span", { class: ne(`${e}__unmask`) }, [t.slice(l[1])])), S(be, null, [i]);
  });
}
const WV = U({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function xd(e, t) {
  const n = Ot(), l = _(() => `menu-${n}`);
  return { menuId: l, ariaExpanded: $(() => st(t)), ariaControls: $(() => l.value) };
}
const kd = U({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Pe, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...WV(), ...xy({ itemChildren: false }) }, "Select"), jV = U({ search: String, ...Da({ filterKeys: ["title"] }), ...kd(), ...He(Di({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...wl({ transition: { component: zr } }) }, "VSelect"), wd = te()({ name: "VSelect", props: jV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = lt(), a = H(), o = H(), i = H(), r = H(), s = H(), { items: u, transformIn: c, transformOut: d } = ud(e), f = Ve(e, "search", ""), { filteredItems: v, getMatches: p } = Ma(e, u, () => f.value), m = Ve(e, "modelValue", [], (ce) => c(ce === null ? [null] : ut(ce)), (ce) => {
    const B = d(ce);
    return e.multiple ? B : B[0] ?? null;
  }), h = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), b = yo(e), x = yd(e), V = _(() => m.value.map((ce) => ce.value)), I = re(false), k = $(() => e.closableChips && !b.isReadonly.value && !b.isDisabled.value), { InputIcon: y } = Ii(e);
  let C = "", w = 0, T;
  const P = _(() => {
    const ce = f.value ? v.value : u.value;
    return e.hideSelected ? ce.filter((B) => !m.value.some((L) => (e.valueComparator || Ft)(L, B))) : ce;
  }), M = _(() => e.hideNoData && !P.value.length || b.isReadonly.value || b.isDisabled.value), D = Ve(e, "menu"), E = _({ get: () => D.value, set: (ce) => {
    var _a3;
    D.value && !ce && ((_a3 = o.value) == null ? void 0 : _a3.\u03A8openChildren.size) || ce && M.value || (D.value = ce);
  } }), { menuId: A, ariaExpanded: F, ariaControls: j } = xd(e, E), W = _(() => {
    var _a3;
    return { ...e.menuProps, activatorProps: { ...((_a3 = e.menuProps) == null ? void 0 : _a3.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Y = H(), N = bd(Y, a), { onTabKeydown: R } = pd({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Y, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a3;
    E.value = false, (_a3 = a.value) == null ? void 0 : _a3.focus();
  } });
  function Z(ce) {
    e.openOnClear && (E.value = true);
  }
  function z() {
    M.value || (E.value = !E.value);
  }
  function O(ce) {
    var _a3;
    ce.key === "Tab" && R(ce), ((_a3 = Y.value) == null ? void 0 : _a3.$el.contains(ce.target)) && lo(ce) && G(ce);
  }
  function G(ce) {
    var _a3, _b2, _c2;
    if (!ce.key || b.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ce.key) && ce.preventDefault(), ["Enter", "ArrowDown", " "].includes(ce.key) && (E.value = true), ["Escape", "Tab"].includes(ce.key) && (E.value = false), e.clearable && ce.key === "Backspace") {
      ce.preventDefault(), m.value = [], Z();
      return;
    }
    ce.key === "Home" ? (_a3 = Y.value) == null ? void 0 : _a3.focus("first") : ce.key === "End" && ((_b2 = Y.value) == null ? void 0 : _b2.focus("last"));
    const B = 1e3;
    if (!lo(ce)) return;
    const L = performance.now();
    L - T > B && (C = "", w = 0), C += ce.key.toLowerCase(), T = L;
    const ee = P.value;
    function de() {
      let X = oe();
      return X || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), w++, X = oe(), X) || (w = 0, X = oe(), X) ? X : (C = ce.key.toLowerCase(), oe());
    }
    function oe() {
      for (let X = w; X < ee.length; X++) {
        const ae = ee[X];
        if (ae.title.toLowerCase().startsWith(C)) return [ae, X];
      }
    }
    const ue = de();
    if (!ue) return;
    const [Se, ve] = ue;
    w = ve, (_c2 = Y.value) == null ? void 0 : _c2.focus(ve), e.multiple || (m.value = [Se]);
  }
  function ie(ce) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ce.props.disabled) if (e.multiple) {
      const L = m.value.findIndex((de) => (e.valueComparator || Ft)(de.value, ce.value)), ee = B ?? !~L;
      if (~L) {
        const de = ee ? [...m.value, ce] : [...m.value];
        de.splice(L, 1), m.value = de;
      } else ee && (m.value = [...m.value, ce]);
    } else {
      const L = B !== false;
      m.value = L ? [ce] : [], Be(() => {
        E.value = false;
      });
    }
  }
  function pe(ce) {
    var _a3;
    const B = ce.target;
    ((_a3 = a.value) == null ? void 0 : _a3.$el.contains(B)) || (E.value = false);
  }
  function K() {
    var _a3;
    e.eager && ((_a3 = s.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function fe() {
    var _a3;
    f.value = "", I.value && ((_a3 = a.value) == null ? void 0 : _a3.focus());
  }
  function Te(ce) {
    I.value = true;
  }
  function xe(ce) {
    if (ce == null) m.value = [];
    else if (no(a.value, ":autofill") || no(a.value, ":-webkit-autofill")) {
      const B = u.value.find((L) => L.title === ce);
      B && ie(B);
    } else a.value && (a.value.value = "");
  }
  return se(E, () => {
    if (!e.hideSelected && E.value && m.value.length) {
      const ce = P.value.findIndex((B) => m.value.some((L) => (e.valueComparator || Ft)(L.value, B.value)));
      tt && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a3;
        ce >= 0 && ((_a3 = s.value) == null ? void 0 : _a3.scrollToIndex(ce));
      });
    }
  }), se(u, (ce, B) => {
    E.value || I.value && e.hideNoData && !B.length && ce.length && (E.value = true);
  }), le(() => {
    const ce = !!(e.chips || n.chip), B = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), L = m.value.length > 0, ee = Qn.filterProps(e), de = L || !I.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, oe = { search: f, filteredItems: v.value };
    return g(Qn, J({ ref: a }, ee, { modelValue: m.value.map((ue) => ue.props.title).join(", "), name: void 0, "onUpdate:modelValue": xe, focused: I.value, "onUpdate:focused": (ue) => I.value = ue, validationValue: m.externalValue, counterValue: h.value, dirty: L, class: ["v-select", { "v-select--active-menu": E.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: de, "onClick:clear": Z, "onMousedown:control": z, onBlur: pe, onKeydown: G, "aria-expanded": F.value, "aria-controls": j.value }), { ...n, default: (ue) => {
      let { id: Se } = ue;
      return S(be, null, [S("select", { hidden: true, multiple: e.multiple, name: x.fieldName.value }, [u.value.map((ve) => S("option", { key: ve.value, value: ve.value, selected: V.value.includes(ve.value) }, null))]), g(so, J({ id: A.value, ref: o, modelValue: E.value, "onUpdate:modelValue": (ve) => E.value = ve, activator: "parent", contentClass: "v-select__content", disabled: M.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: K, onAfterLeave: fe }, W.value), { default: () => [g(Ul, { onFocusin: Te, onKeydown: O }, { default: () => [n["menu-header"] && S("header", { ref: i }, [n["menu-header"](oe)]), B && g(ro, J({ key: "select-list", ref: Y, selected: V.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${Se.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, N, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(An, { key: "no-data", title: l(e.noDataText) }, null)), g(Xr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (ve) => {
          var _a4, _b3, _c3;
          let { item: X, index: ae, itemRef: Ie } = ve;
          const Q = Iw(X.props), he = J(X.props, { ref: Ie, key: X.value, onClick: () => ie(X, null), "aria-posinset": ae + 1, "aria-setsize": P.value.length });
          return X.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: X.raw, index: ae })) ?? g(xn, J(X.props, { key: `divider-${ae}` }), null) : X.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: X.raw, index: ae })) ?? g(bo, J(X.props, { key: `subheader-${ae}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: X, index: ae, props: he })) ?? g(An, J(he, { role: "option" }), { prepend: (Ce) => {
            let { isSelected: _e } = Ce;
            return S(be, null, [e.multiple && !e.hideSelected ? g(Ln, { key: X.value, modelValue: _e, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ae) => Ae.preventDefault() }, null) : void 0, Q.prependAvatar && g(wn, { image: Q.prependAvatar }, null), Q.prependIcon && g(qe, { icon: Q.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return f.value ? Sd("v-select", X.title, (_a5 = p(X)) == null ? void 0 : _a5.title) : X.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && S("footer", { ref: r }, [n["menu-footer"](oe)])] })] }), m.value.map((ve, X) => {
        function ae(Ce) {
          Ce.stopPropagation(), Ce.preventDefault(), ie(ve, false);
        }
        const Ie = J(pl.filterProps(ve.props), { "onClick:close": ae, onKeydown(Ce) {
          Ce.key !== "Enter" && Ce.key !== " " || (Ce.preventDefault(), Ce.stopPropagation(), ae(Ce));
        }, onMousedown(Ce) {
          Ce.preventDefault(), Ce.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Q = ce ? !!n.chip : !!n.selection, he = Q ? Fr(ce ? n.chip({ item: ve, index: X, props: Ie }) : n.selection({ item: ve, index: X })) : void 0;
        if (!(Q && !he)) return S("div", { key: ve.value, class: "v-select__selection" }, [ce ? n.chip ? g(Fe, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: ve.title } } }, { default: () => [he] }) : g(pl, J({ key: "chip", closable: k.value, size: "small", text: ve.title, disabled: ve.props.disabled }, Ie), null) : he ?? S("span", { class: "v-select__selection-text" }, [ve.title, e.multiple && X < m.value.length - 1 && S("span", { class: "v-select__selection-comma" }, [Le(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var ue = arguments.length, Se = new Array(ue), ve = 0; ve < ue; ve++) Se[ve] = arguments[ve];
      return S(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Se), e.menuIcon ? g(qe, { class: "v-select__menu-icon", color: (_b2 = a.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && g(y, { key: "append-icon", name: "appendInner", color: Se[0].iconColor.value }, null)]);
    } });
  }), Et({ isFocused: I, menu: E, search: f, filteredItems: v, select: ie }, a);
} }), UV = U({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...Da({ filterKeys: ["title"] }), ...kd(), ...He(Di({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), GV = te()({ name: "VAutocomplete", props: UV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = lt(), a = H(), o = re(false), i = re(true), r = re(false), s = H(), u = H(), c = re(-1), d = re(null), { items: f, transformIn: v, transformOut: p } = ud(e), { textColorClasses: m, textColorStyles: h } = Lt(() => {
    var _a3;
    return (_a3 = a.value) == null ? void 0 : _a3.color;
  }), { InputIcon: b } = Ii(e), x = Ve(e, "search", ""), V = Ve(e, "modelValue", [], (X) => v(X === null ? [null] : ut(X)), (X) => {
    const ae = p(X);
    return e.multiple ? ae : ae[0] ?? null;
  }), I = _(() => typeof e.counterValue == "function" ? e.counterValue(V.value) : typeof e.counterValue == "number" ? e.counterValue : V.value.length), k = yo(e), { filteredItems: y, getMatches: C } = Ma(e, f, () => d.value ?? (i.value ? "" : x.value)), w = _(() => e.hideSelected && d.value === null ? y.value.filter((X) => !V.value.some((ae) => ae.value === X.value)) : y.value), T = $(() => e.closableChips && !k.isReadonly.value && !k.isDisabled.value), P = _(() => !!(e.chips || n.chip)), M = _(() => P.value || !!n.selection), D = _(() => V.value.map((X) => X.props.value)), E = _(() => w.value.find((X) => X.type === "item" && !X.props.disabled)), A = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && x.value === ((_a3 = E.value) == null ? void 0 : _a3.title)) && w.value.length > 0 && !i.value && !r.value;
  }), F = _(() => e.hideNoData && !w.value.length || k.isReadonly.value || k.isDisabled.value), j = Ve(e, "menu"), W = _({ get: () => j.value, set: (X) => {
    var _a3;
    j.value && !X && ((_a3 = s.value) == null ? void 0 : _a3.\u03A8openChildren.size) || X && F.value || (j.value = X);
  } }), { menuId: Y, ariaExpanded: N, ariaControls: R } = xd(e, W), Z = H(), z = H(), O = H(), G = bd(Z, a), { onTabKeydown: ie } = pd({ groups: [{ type: "element", contentRef: z }, { type: "list", contentRef: Z, displayItemsCount: () => w.value.length }, { type: "element", contentRef: O }], onLeave: () => {
    var _a3;
    W.value = false, (_a3 = a.value) == null ? void 0 : _a3.focus();
  } });
  function pe(X) {
    e.openOnClear && (W.value = true), x.value = "";
  }
  function K() {
    F.value || (W.value = true);
  }
  function fe(X) {
    F.value || (o.value && (X.preventDefault(), X.stopPropagation()), W.value = !W.value);
  }
  function Te(X) {
    var _a3, _b2;
    X.key === "Tab" && ie(X), ((_a3 = Z.value) == null ? void 0 : _a3.$el.contains(X.target)) && (lo(X) || X.key === "Backspace") && ((_b2 = a.value) == null ? void 0 : _b2.focus());
  }
  function xe(X) {
    var _a3, _b2, _c2, _d2, _e;
    if (k.isReadonly.value) return;
    const ae = (_a3 = a.value) == null ? void 0 : _a3.selectionStart, Ie = V.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (W.value = true), ["Escape"].includes(X.key) && (W.value = false), A.value && ["Enter", "Tab"].includes(X.key) && E.value && !V.value.some((Q) => {
      let { value: he } = Q;
      return he === E.value.value;
    }) && ve(E.value), X.key === "ArrowDown" && A.value && ((_b2 = Z.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(X.key)) {
      if (!e.multiple && M.value && V.value.length > 0 && !x.value) return ve(V.value[0], false);
      if (~c.value) {
        X.preventDefault();
        const Q = c.value;
        ve(V.value[c.value], false), c.value = Q >= Ie - 1 ? Ie - 2 : Q;
      } else X.key === "Backspace" && !x.value && (c.value = Ie - 1);
      return;
    }
    if (e.multiple) if (X.key === "ArrowLeft") {
      if (c.value < 0 && ae && ae > 0) return;
      const Q = c.value > -1 ? c.value - 1 : Ie - 1;
      if (V.value[Q]) c.value = Q;
      else {
        const he = ((_c2 = x.value) == null ? void 0 : _c2.length) ?? null;
        c.value = -1, (_d2 = a.value) == null ? void 0 : _d2.setSelectionRange(he, he);
      }
    } else if (X.key === "ArrowRight") {
      if (c.value < 0) return;
      const Q = c.value + 1;
      V.value[Q] ? c.value = Q : (c.value = -1, (_e = a.value) == null ? void 0 : _e.setSelectionRange(0, 0));
    } else ~c.value && lo(X) && (c.value = -1);
  }
  function ce(X) {
    if (no(a.value, ":autofill") || no(a.value, ":-webkit-autofill")) {
      const ae = f.value.find((Ie) => Ie.title === X.target.value);
      ae && ve(ae);
    }
  }
  function B() {
    var _a3;
    e.eager && ((_a3 = u.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function L() {
    var _a3;
    o.value && (i.value = true, (_a3 = a.value) == null ? void 0 : _a3.focus()), d.value = null;
  }
  function ee(X) {
    o.value = true, setTimeout(() => {
      r.value = true;
    });
  }
  function de(X) {
    r.value = false;
  }
  function oe(X) {
    (X == null || X === "" && !e.multiple && !M.value) && (V.value = []);
  }
  function ue(X) {
    var _a3, _b2;
    ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (o.value = true);
  }
  const Se = re(false);
  function ve(X) {
    let ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const Ie = V.value.findIndex((he) => (e.valueComparator || Ft)(he.value, X.value)), Q = ae ?? !~Ie;
      if (~Ie) {
        const he = Q ? [...V.value, X] : [...V.value];
        he.splice(Ie, 1), V.value = he;
      } else Q && (V.value = [...V.value, X]);
      e.clearOnSelect && (x.value = "");
    } else {
      const Ie = ae !== false;
      V.value = Ie ? [X] : [], d.value = i.value ? "" : x.value ?? "", x.value = Ie && !M.value ? X.title : "", Be(() => {
        W.value = false, i.value = true;
      });
    }
  }
  return se(o, (X, ae) => {
    var _a3;
    X !== ae && (X ? (Se.value = true, x.value = e.multiple || M.value ? "" : String(((_a3 = V.value.at(-1)) == null ? void 0 : _a3.props.title) ?? ""), i.value = true, Be(() => Se.value = false)) : (!e.multiple && x.value == null && (V.value = []), W.value = false, !i.value && x.value && (d.value = x.value), x.value = "", c.value = -1));
  }), se(x, (X) => {
    !o.value || Se.value || (X && (W.value = true), i.value = !X);
  }), se(W, (X) => {
    if (!e.hideSelected && X && V.value.length && i.value) {
      const ae = w.value.findIndex((Ie) => V.value.some((Q) => Ie.value === Q.value));
      tt && window.requestAnimationFrame(() => {
        var _a3;
        ae >= 0 && ((_a3 = u.value) == null ? void 0 : _a3.scrollToIndex(ae));
      });
    }
    X && (d.value = null);
  }), se(f, (X, ae) => {
    W.value || o.value && !ae.length && X.length && (W.value = true);
  }), le(() => {
    const X = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), ae = V.value.length > 0, Ie = Qn.filterProps(e), Q = { search: x, filteredItems: y.value };
    return g(Qn, J({ ref: a }, Ie, { modelValue: x.value, "onUpdate:modelValue": [(he) => x.value = he, oe], focused: o.value, "onUpdate:focused": (he) => o.value = he, validationValue: V.externalValue, counterValue: I.value, dirty: ae, onChange: ce, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": W.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!M.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: k.isReadonly.value, placeholder: ae ? void 0 : e.placeholder, "onClick:clear": pe, "onMousedown:control": K, onKeydown: xe, onBlur: ue, "aria-expanded": N.value, "aria-controls": R.value }), { ...n, default: (he) => {
      let { id: Ce } = he;
      return S(be, null, [g(so, J({ id: Y.value, ref: s, modelValue: W.value, "onUpdate:modelValue": (_e) => W.value = _e, activator: "parent", contentClass: "v-autocomplete__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: B, onAfterLeave: L }, e.menuProps), { default: () => [g(Ul, { onFocusin: ee, onKeydown: Te }, { default: () => [n["menu-header"] && S("header", { ref: z }, [n["menu-header"](Q)]), X && g(ro, J({ key: "autocomplete-list", ref: Z, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (_e) => _e.preventDefault(), onFocusout: de, tabindex: "-1", selectable: !!w.value.length, "aria-live": "polite", "aria-labelledby": `${Ce.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, G, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = n["prepend-item"]) == null ? void 0 : _a3.call(n), !w.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(An, { key: "no-data", title: l(e.noDataText) }, null)), g(Xr, { ref: u, renderless: true, items: w.value, itemKey: "value" }, { default: (_e) => {
          var _a4, _b3, _c3;
          let { item: Ae, index: Re, itemRef: Ge } = _e;
          const ze = J(Ae.props, { ref: Ge, key: Ae.value, active: A.value && Ae === E.value ? true : void 0, onClick: () => ve(Ae, null), "aria-posinset": Re + 1, "aria-setsize": w.value.length });
          return Ae.type === "divider" ? ((_a4 = n.divider) == null ? void 0 : _a4.call(n, { props: Ae.raw, index: Re })) ?? g(xn, J(Ae.props, { key: `divider-${Re}` }), null) : Ae.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Ae.raw, index: Re })) ?? g(bo, J(Ae.props, { key: `subheader-${Re}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Ae, index: Re, props: ze })) ?? g(An, J(ze, { role: "option" }), { prepend: (dt) => {
            let { isSelected: at } = dt;
            return S(be, null, [e.multiple && !e.hideSelected ? g(Ln, { key: Ae.value, modelValue: at, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (an) => an.preventDefault() }, null) : void 0, Ae.props.prependAvatar && g(wn, { image: Ae.props.prependAvatar }, null), Ae.props.prependIcon && g(qe, { icon: Ae.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return i.value ? Ae.title : Sd("v-autocomplete", Ae.title, (_a5 = C(Ae)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && S("footer", { ref: O }, [n["menu-footer"](Q)])] })] }), V.value.map((_e, Ae) => {
        function Re(at) {
          at.stopPropagation(), at.preventDefault(), ve(_e, false);
        }
        const Ge = J(pl.filterProps(_e.props), { "onClick:close": Re, onKeydown(at) {
          at.key !== "Enter" && at.key !== " " || (at.preventDefault(), at.stopPropagation(), Re(at));
        }, onMousedown(at) {
          at.preventDefault(), at.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), ze = P.value ? !!n.chip : !!n.selection, dt = ze ? Fr(P.value ? n.chip({ item: _e, index: Ae, props: Ge }) : n.selection({ item: _e, index: Ae })) : void 0;
        if (!(ze && !dt)) return S("div", { key: _e.value, class: ne(["v-autocomplete__selection", Ae === c.value && ["v-autocomplete__selection--selected", m.value]]), style: ge(Ae === c.value ? h.value : {}) }, [P.value ? n.chip ? g(Fe, { key: "chip-defaults", defaults: { VChip: { closable: T.value, size: "small", text: _e.title } } }, { default: () => [dt] }) : g(pl, J({ key: "chip", closable: T.value, size: "small", text: _e.title, disabled: _e.props.disabled }, Ge), null) : dt ?? S("span", { class: "v-autocomplete__selection-text" }, [_e.title, e.multiple && Ae < V.value.length - 1 && S("span", { class: "v-autocomplete__selection-comma" }, [Le(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var he = arguments.length, Ce = new Array(he), _e = 0; _e < he; _e++) Ce[_e] = arguments[_e];
      return S(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...Ce), e.menuIcon ? g(qe, { class: "v-autocomplete__menu-icon", color: (_b2 = a.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: Rr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(b, { key: "append-icon", name: "appendInner", color: Ce[0].iconColor.value }, null)]);
    } });
  }), Et({ isFocused: o, isPristine: i, menu: W, search: x, filteredItems: y, select: ve }, a);
} }), YV = U({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Pe, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...we(), ...ll({ location: "top end" }), ...ct(), ...$e(), ...Ke(), ...wl({ transition: "scale-rotate-transition" }), ...Vt() }, "VBadge"), Hy = te()({ name: "VBadge", inheritAttrs: false, props: YV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: l } = Je(() => e.color), { roundedClasses: a } = yt(e), { t: o } = lt(), { textColorClasses: i, textColorStyles: r } = Lt(() => e.textColor), { themeClasses: s } = Hr(), { locationStyles: u } = Xl(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = It(e);
  return le(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, p] = su(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return g(e.tag, J({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, p, { style: e.style }), { default: () => {
      var _a3, _b2;
      return [S("div", { class: "v-badge__wrapper" }, [(_b2 = (_a3 = t.slots).default) == null ? void 0 : _b2.call(_a3), g(tn, { transition: e.transition }, { default: () => {
        var _a4, _b3;
        return [nt(S("span", J({ class: ["v-badge__badge", s.value, n.value, a.value, i.value], style: [l.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a4 = t.slots).badge) == null ? void 0 : _b3.call(_a4) : e.icon ? g(qe, { icon: e.icon }, null) : f]), [[On, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), KV = U({ color: String, density: String, ...we() }, "VBannerActions"), zy = te()({ name: "VBannerActions", props: KV(), setup(e, t) {
  let { slots: n } = t;
  return pt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), le(() => {
    var _a3;
    return S("div", { class: ne(["v-banner-actions", e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), Wy = kl("v-banner-text"), XV = U({ avatar: String, bgColor: String, color: String, icon: Pe, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Kt(), ...we(), ...St(), ...Vt(), ...Ca({ mobile: null }), ...Pt(), ...ll(), ...mo(), ...ct(), ...$e(), ...Ke() }, "VBanner"), qV = te()({ name: "VBanner", props: XV(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: a } = Je(() => e.bgColor), { borderClasses: o } = ln(e), { densityClasses: i } = Wt(e), { displayClasses: r, mobile: s } = Cn(e), { dimensionStyles: u } = It(e), { elevationClasses: c } = Mt(e), { locationStyles: d } = Xl(e), { positionClasses: f } = go(e), { roundedClasses: v } = yt(e), { themeClasses: p } = Ze(e), m = $(() => e.color), h = $(() => e.density);
  pt({ VBannerActions: { color: m, density: h } }), le(() => {
    const b = !!(e.text || n.text), x = !!(e.avatar || e.icon), V = !!(x || n.prepend);
    return g(e.tag, { class: ne(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, p.value, l.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: ge([a.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a3;
      return [V && S("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? g(Fe, { key: "prepend-defaults", disabled: !x, defaults: { VAvatar: { color: m.value, density: h.value, icon: e.icon, image: e.avatar } } }, n.prepend) : g(wn, { key: "prepend-avatar", color: m.value, density: h.value, icon: e.icon, image: e.avatar }, null)]), S("div", { class: "v-banner__content" }, [b && g(Wy, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = n.text) == null ? void 0 : _a4.call(n)) ?? e.text];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(zy, { key: "actions" }, n.actions)];
    } });
  });
} }), ZV = U({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Kt(), ...we(), ...St(), ...Pt(), ...ct(), ..._a({ name: "bottom-navigation" }), ...$e({ tag: "header" }), ...Pa({ selectedClass: "v-btn--selected" }), ...Ke() }, "VBottomNavigation"), JV = te()({ name: "VBottomNavigation", props: ZV(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Hr(), { borderClasses: a } = ln(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Je(() => e.bgColor), { densityClasses: r } = Wt(e), { elevationClasses: s } = Mt(e), { roundedClasses: u } = yt(e), { ssrBootStyles: c } = Ia(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ve(e, "active", e.active), { layoutItemStyles: v } = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => "bottom"), layoutSize: $(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: $(() => e.absolute) });
  return ql(e, nd), pt({ VBtn: { baseColor: $(() => e.baseColor), color: $(() => e.color), density: $(() => e.density), stacked: $(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), le(() => g(e.tag, { class: ne(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, l.value, o.value, a.value, r.value, s.value, u.value, e.class]), style: ge([i.value, v.value, { height: me(d.value) }, c.value, e.style]) }, { default: () => [n.default && S("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), jy = U({ fullscreen: Boolean, scrollable: Boolean, ...He(Ti({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: zr }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), Pu = te()({ name: "VDialog", props: jy(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = Ve(e, "modelValue"), { scopeId: o } = Aa(), i = H();
  function r() {
    var _a3;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a3 = i.value) == null ? void 0 : _a3.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return se(a, async (u) => {
    var _a3;
    u || (await Be(), (_a3 = i.value.activatorEl) == null ? void 0 : _a3.focus({ preventScroll: true }));
  }), le(() => {
    const u = Jn.filterProps(e), c = J({ "aria-haspopup": "dialog" }, e.activatorProps), d = J({ tabindex: -1 }, e.contentProps);
    return g(Jn, J({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: a.value, "onUpdate:modelValue": (f) => a.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: l.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), p = 0; p < f; p++) v[p] = arguments[p];
      return g(Fe, { root: "VDialog" }, { default: () => {
        var _a3;
        return [(_a3 = l.default) == null ? void 0 : _a3.call(l, ...v)];
      } });
    } });
  }), Et({}, i);
} }), QV = U({ inset: Boolean, ...jy({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), eI = te()({ name: "VBottomSheet", props: QV(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue");
  return le(() => {
    const a = Pu.filterProps(e);
    return g(Pu, J(a, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: l.value, "onUpdate:modelValue": (o) => l.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), tI = U({ divider: [Number, String], ...we() }, "VBreadcrumbsDivider"), Uy = te()({ name: "VBreadcrumbsDivider", props: tI(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    var _a3;
    return S("li", { "aria-hidden": "true", class: ne(["v-breadcrumbs-divider", e.class]), style: ge(e.style) }, [((_a3 = n == null ? void 0 : n.default) == null ? void 0 : _a3.call(n)) ?? e.divider]);
  }), {};
} }), nI = U({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...we(), ...cn(Vt(), ["width", "maxWidth"]), ...Vi(), ...$e({ tag: "li" }) }, "VBreadcrumbsItem"), Gy = te()({ name: "VBreadcrumbsItem", props: nI(), setup(e, t) {
  let { slots: n, attrs: l } = t;
  const a = _i(e, l), o = _(() => {
    var _a3;
    return e.active || ((_a3 = a.isActive) == null ? void 0 : _a3.value);
  }), { dimensionStyles: i } = It(e), { textColorClasses: r, textColorStyles: s } = Lt(() => o.value ? e.activeColor : e.color);
  return le(() => g(e.tag, { class: ne(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: ge([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a3, _b2;
    return [a.isLink.value ? S("a", J({ class: "v-breadcrumbs-item--link", onClick: a.navigate.value }, a.linkProps), [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), lI = U({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Pe, items: { type: Array, default: () => [] }, ...we(), ...St(), ...ct(), ...$e({ tag: "ul" }) }, "VBreadcrumbs"), aI = te()({ name: "VBreadcrumbs", props: lI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: a } = Je(() => e.bgColor), { densityClasses: o } = Wt(e), { roundedClasses: i } = yt(e);
  pt({ VBreadcrumbsDivider: { divider: $(() => e.divider) }, VBreadcrumbsItem: { activeClass: $(() => e.activeClass), activeColor: $(() => e.activeColor), color: $(() => e.color), disabled: $(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return le(() => {
    const s = !!(n.prepend || e.icon);
    return g(e.tag, { class: ne(["v-breadcrumbs", l.value, o.value, i.value, e.class]), style: ge([a.value, e.style]) }, { default: () => {
      var _a3;
      return [s && S("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? g(Fe, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : g(qe, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a4;
        let { item: f, raw: v } = u;
        return S(be, null, [((_a4 = n.item) == null ? void 0 : _a4.call(n, { item: f, index: c })) ?? g(Gy, J({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a5;
          return (_a5 = n.title) == null ? void 0 : _a5.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && g(Uy, null, { default: n.divider ? () => {
          var _a5;
          return (_a5 = n.divider) == null ? void 0 : _a5.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } });
  }), {};
} }), oI = U({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Kt(), ...we(), ...Pt(), ...Zh(), ...ct(), ...$e({ tag: "button" }), ...Ke(), ...Vn({ variant: "flat" }) }, "VIconBtn"), Yy = te()({ name: "VIconBtn", props: oI(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = Ve(e, "active"), { themeClasses: o } = Ze(e), { borderClasses: i } = ln(e), { elevationClasses: r } = Mt(e), { roundedClasses: s } = yt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = _l(() => ({ color: (() => {
    if (!e.disabled) return a.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: a.value === void 0 ? e.variant : a.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || a.value === void 0 || e.tag === "a" && n.href || (a.value = !a.value);
  }
  return le(() => {
    const p = a.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, b = f.has(m) ? f.get(m) : m, x = e.height ?? b, V = e.width ?? b, { iconSize: I } = Jh(e, () => new Map(e.iconSizes).get(m)), k = { icon: p, size: I.value, color: e.iconColor, opacity: e.opacity };
    return g(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ne([{ "v-icon-btn": true, "v-icon-btn--active": a.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: ge([{ "--v-icon-btn-rotate": me(e.rotate, "deg"), "--v-icon-btn-height": me(x), "--v-icon-btn-width": me(V) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a3;
      return [Cl(!e.hideOverlay, "v-icon-btn"), S("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!l.default && p ? g(qe, J({ key: "content-icon" }, k), null) : g(Fe, { key: "content-defaults", disabled: !p, defaults: { VIcon: { ...k } } }, { default: () => {
        var _a4;
        return ((_a4 = l.default) == null ? void 0 : _a4.call(l)) ?? Ee(e.text);
      } })]), !!e.loading && S("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a3 = l.loader) == null ? void 0 : _a3.call(l)) ?? g(Wl, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: I.value }, null)])];
    } });
  }), {};
} });
function iI(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const Ky = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, Xy = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, rI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], sI = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], uI = 28, cI = 31, Cd = 12, qy = 1, qr = 1, Ll = 7, Qv = 60, dI = 59, fI = 1440, vI = 24, mI = 23, gI = 0, hI = 1e4, yI = 100, bI = 100, pI = 1e4;
function SI(e, t, n) {
  const l = dn(e);
  return nb(l, t[0], tb), En(l), n && ha(l, n, l.hasTime), l;
}
function xI(e, t, n) {
  const l = dn(e);
  return nb(l, t[t.length - 1]), En(l), n && ha(l, n, l.hasTime), l;
}
function Zy(e) {
  const t = dn(e);
  return t.day = qr, Zr(t), En(t), t;
}
function Jy(e) {
  const t = dn(e);
  return t.day = Vd(t.year, t.month), Zr(t), En(t), t;
}
function za(e) {
  return isFinite(parseInt(e));
}
function kI(e) {
  return typeof e == "number" && isFinite(e) || !!Xy.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function em(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = Xy.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function qa(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!Ky.exec(e) || e instanceof Date;
}
function fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = _d(e);
    return n && ha(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = Ky.exec(e);
  if (!l) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = { date: e, time: "", year: parseInt(l[1]), month: parseInt(l[2]), day: parseInt(l[4]) || 1, hour: parseInt(l[6]) || 0, minute: parseInt(l[8]) || 0, weekday: 0, hasDay: !!l[4], hasTime: !!(l[6] && l[8]), past: false, present: false, future: false };
  return Zr(a), En(a), n && ha(a, n, a.hasTime), a;
}
function _d(e) {
  return En({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Dt(e) {
  return e.year * hI + e.month * yI + e.day;
}
function Tu(e) {
  return e.hour * bI + e.minute;
}
function Yl(e) {
  return Dt(e) * pI + Tu(e);
}
function ha(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, l = Dt(t), a = Dt(e), o = l === a;
  return e.hasTime && n && o && (l = Tu(t), a = Tu(e), o = l === a), e.past = a < l, e.present = o, e.future = a > l, e;
}
function tm(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function nm(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = mI, e.minute = dI, e.time = eb(e))), e;
}
function Qy(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, Au(e, t), En(e), n && ha(e, n, true), e;
}
function Zr(e) {
  return e.weekday = wI(e), e;
}
function En(e) {
  return e.time = eb(e), e.date = CI(e), e;
}
function wI(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, l = (e.month + 9) % Cd + 1, a = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * l - 0.2) - 2 * a + o + t(o / 4) + t(a / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function Vd(e, t) {
  return iI(e) ? sI[t] : rI[t];
}
function dn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: l, month: a, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: l, month: a, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function ca(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function CI(e) {
  let t = `${ca(e.year, 4)}-${ca(e.month, 2)}`;
  return e.hasDay && (t += `-${ca(e.day, 2)}`), t;
}
function eb(e) {
  return e.hasTime ? `${ca(e.hour, 2)}:${ca(e.minute, 2)}` : "";
}
function Au(e, t) {
  for (e.minute += t; e.minute >= Qv; ) e.minute -= Qv, e.hour++, e.hour >= vI && (Ol(e), e.hour = gI);
  return e;
}
function Ol(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Ll, e.day > uI && e.day > Vd(e.year, e.month) && (e.day = qr, e.month++, e.month > Cd && (e.month = qy, e.year++)), e;
}
function tb(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Ll, e.day < qr && (e.month--, e.month < qy && (e.year--, e.month = Cd), e.day = Vd(e.year, e.month)), e;
}
function la(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ol, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function _I(e, t) {
  const n = (t.year - e.year) * 525600, l = (t.month - e.month) * 43800, a = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + l + a + o + i;
}
function nb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ol, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --l >= 0; ) n(e);
  return e;
}
function VI(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let l = 0; l < e.length; l++) n[e[l]] = 1;
  for (let l = 0; l < Ll; l++) {
    let a = 1;
    for (let o = 1; o < Ll; o++) {
      const i = (l + o) % Ll;
      if (n[i]) break;
      a++;
    }
    t[l] = n[l] * a;
  }
  return t;
}
function Du(e) {
  const t = `${ca(e.hour, 2)}:${ca(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function Sr(e, t, n, l) {
  let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Dt(t), r = [];
  let s = dn(e), u = 0, c = u === i;
  if (i < Dt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < a; ) {
    if (u = Dt(s), c = c || u === i, l[s.weekday] === 0) {
      s = Ol(s);
      continue;
    }
    const d = dn(s);
    En(d), ha(d, n), r.push(d), s = la(s, Ol, l[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function II(e, t, n, l, a) {
  const o = [];
  for (let i = 0; i < l; i++) {
    const r = t + i * n, s = dn(e);
    o.push(Qy(s, r, a));
  }
  return o;
}
function Ho(e, t) {
  const n = (l, a) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (l, a) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(l, a)).format(Du(l));
    } catch {
      return "";
    }
  };
}
function PI(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((a) => parseInt(a));
    if (t.length > Ll || t.length === 0) return false;
    const n = {};
    let l = false;
    for (let a = 0; a < t.length; a++) {
      const o = t[a];
      if (!isFinite(o) || o < 0 || o >= Ll) return false;
      if (a > 0) {
        const i = o - t[a - 1];
        if (i < 0) {
          if (l) return false;
          l = true;
        } else if (i === 0) return false;
      }
      if (n[o]) return false;
      n[o] = true;
    }
    return true;
  }
  return false;
}
function TI(e) {
  const t = Rt({ now: fl("0000-00-00 00:00", true), today: fl("0000-00-00", true) }), n = _(() => e.now && qa(e.now) ? fl(e.now, true) : null);
  function l() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function a() {
    return _d(/* @__PURE__ */ new Date());
  }
  function o(s, u) {
    s.date !== u.date && (u.year = s.year, u.month = s.month, u.day = s.day, u.weekday = s.weekday, u.date = s.date);
  }
  function i(s, u) {
    s.time !== u.time && (u.hour = s.hour, u.minute = s.minute, u.time = s.time);
  }
  function r() {
    const s = n.value || a();
    o(s, t.now), i(s, t.now), o(s, t.today);
  }
  return se(n, r), r(), l(), { times: t, parsedNow: n, updateTimes: r, setPresent: l, getNow: a, updateDay: o, updateTime: i };
}
const Jr = U({ start: { type: [String, Number, Date], validate: qa, default: () => _d(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: qa }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: PI }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: qa }, type: { type: String, default: "month" } }, "VCalendar-base");
function Id(e) {
  const { times: t, updateTimes: n } = TI({ now: e.now }), l = Sh(e), a = wa(), o = _(() => e.type === "month" ? Zy(fl(e.start, true)) : fl(e.start, true)), i = _(() => {
    const I = o.value, k = e.end && fl(e.end) || I, y = Yl(k) < Yl(I) ? I : k;
    return e.type === "month" ? Jy(y) : y;
  }), r = _(() => qa(e.modelValue) ? fl(e.modelValue, true) : o.value || t.today), s = _(() => {
    const I = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((y) => parseInt(y, 10)), k = a.toJsDate(a.startOfWeek(a.date(), e.firstDayOfWeek)).getDay();
    return [...I.toSorted().filter((y) => y >= k), ...I.toSorted().filter((y) => y < k)];
  }), u = _(() => {
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
  }), c = _(() => VI(s.value)), d = _(() => Sr(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : Ho(l.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : Ho(l.current.value, (I, k) => ({ timeZone: "UTC", weekday: k ? "short" : "long" })));
  function p(I) {
    return Fh(I);
  }
  function m(I) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": I.present, "v-past": I.past, "v-future": I.future, "v-outside": k };
  }
  function h(I) {
    return a.getWeek(a.date(I.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function b(I) {
    return SI(I, s.value, t.today);
  }
  function x(I) {
    return xI(I, s.value, t.today);
  }
  function V(I) {
    return Ho(l.current.value, () => I);
  }
  return { times: t, locale: l, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: p, getRelativeClasses: m, getWeekNumber: h, getStartOfWeek: b, getEndOfWeek: x, getFormatter: V, updateTimes: n };
}
const lb = U({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: za }, intervalWidth: { type: [Number, String], default: 60, validate: za }, intervalMinutes: { type: [Number, String], default: 60, validate: za }, firstInterval: { type: [Number, String], default: 0, validate: za }, firstTime: { type: [Number, String, Object], validate: kI }, intervalCount: { type: [Number, String], default: 24, validate: za }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function ab(e) {
  const t = Id(e), n = re(), l = _(() => parseInt(String(e.firstInterval || 0))), a = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => em(e.firstTime)), s = _(() => {
    const k = r.value;
    return k !== false && k >= 0 && k <= fI ? k : l.value * a.value;
  }), u = _(() => o.value * i.value), c = _(() => Sr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const k = c.value, y = s.value, C = a.value, w = o.value, T = t.times.now;
    return k.map((P) => II(P, y, C, w, T));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : Ho(t.locale.current.value, (k, y) => y ? k.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(k) {
    const y = d.value[0][0];
    return !(y.hour === k.hour && y.minute === k.minute);
  }
  function p(k) {
  }
  function m(k, y) {
    const C = dn(y), w = k.currentTarget.getBoundingClientRect(), T = s.value, P = k, M = k, D = P.changedTouches || P.touches, A = ((D && D[0] ? D[0].clientY : M.clientY) - w.top) / i.value, F = Math.floor(A * a.value), j = T + F;
    return Qy(C, j, t.times.now);
  }
  function h(k) {
    const y = dn(k);
    return y.timeToY = V, y.timeDelta = I, y.minutesToPixels = x, y.week = c.value, y.intervalRange = [s.value, s.value + o.value * a.value], y;
  }
  function b(k) {
    const y = V(k), C = n.value;
    return y === false || !C ? false : (C.scrollTop = y, true);
  }
  function x(k) {
    return k / a.value * i.value;
  }
  function V(k) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = y !== false;
    let T = I(k, typeof y != "boolean" ? y : void 0);
    return T === false || (T *= u.value, C ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function I(k, y) {
    let C = em(k);
    if (C === false) return false;
    const w = o.value * a.value;
    if (y && typeof k == "object" && "day" in k) {
      const P = Dt(k), M = Dt(y);
      C += (P - M) * w;
    }
    const T = s.value;
    return (C - T) / w;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: l, parsedIntervalMinutes: a, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: p, getTimestampAtEvent: m, getSlotScope: h, scrollToTime: b, minutesToPixels: x, timeToY: V, timeDelta: I };
}
function AI(e, t) {
  var _a3, _b2;
  const n = t.value, l = { passive: !((_a3 = t.modifiers) == null ? void 0 : _a3.active) };
  window.addEventListener("resize", n, l), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: l }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function DI(e, t) {
  var _a3;
  if (!((_a3 = e._onResize) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: l } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, l), delete e._onResize[t.instance.$.uid];
}
const ui = { mounted: AI, unmounted: DI }, Do = nn({ name: "VCalendarDaily", directives: { vResize: ui }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Jr(), ...lb() }, setup(e, t) {
  let { slots: n, attrs: l } = t;
  const a = H(0), o = H(), i = ab(e);
  function r() {
    Be(s);
  }
  function s() {
    a.value = u();
  }
  function u() {
    return i.scrollAreaRef.value && o.value ? i.scrollAreaRef.value.offsetWidth - o.value.offsetWidth : 0;
  }
  function c() {
    return S("div", { class: "v-calendar-daily__head", style: { marginRight: a.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a3;
    const E = me(e.intervalWidth);
    return S("div", { class: "v-calendar-daily__intervals-head", style: { width: E } }, [(_a3 = n["interval-header"]) == null ? void 0 : _a3.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(E, A) {
    const F = Sn(l, ":day", (j) => ({ nativeEvent: j, ...i.getSlotScope(E) }));
    return S("div", J({ key: E.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(E)] }, F), [m(E), h(E), p(E, A)]);
  }
  function p(E, A) {
    var _a3;
    return ((_a3 = n["day-header"]) == null ? void 0 : _a3.call(n, { week: i.days.value, ...E, index: A })) ?? [];
  }
  function m(E) {
    const A = E.present ? e.color : void 0;
    return S("div", J(i.getColorProps({ text: A }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(E, e.shortWeekdays)]);
  }
  function h(E) {
    var _a3;
    return S("div", { class: "v-calendar-daily_head-day-label" }, [((_a3 = n["day-label-header"]) == null ? void 0 : _a3.call(n, E)) ?? b(E)]);
  }
  function b(E) {
    const A = Sn(l, ":date", (F) => ({ nativeEvent: F, ...E }));
    return g(Yy, J({ active: E.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Rr }, A), { default: () => [i.dayFormatter.value(E, false)] });
  }
  function x() {
    return S("div", { class: "v-calendar-daily__body" }, [V()]);
  }
  function V() {
    return S("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [I()]);
  }
  function I() {
    return S("div", { ref: o, class: "v-calendar-daily__pane", style: { height: me(i.bodyHeight.value) } }, [k()]);
  }
  function k() {
    var _a3;
    return S("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a3 = n.days) == null ? void 0 : _a3.call(n)) ?? y()]);
  }
  function y() {
    return i.days.value.map((E, A) => {
      const F = Sn(l, ":time", (j) => ({ nativeEvent: j, ...i.getSlotScope(i.getTimestampAtEvent(j, E)) }));
      return S("div", J({ key: E.date, class: ["v-calendar-daily__day", i.getRelativeClasses(E)] }, F), [w(A), C(E)]);
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
    const A = me(e.intervalHeight), F = e.intervalStyle || i.intervalStyleDefault;
    return S("div", { class: "v-calendar-daily__day-interval", key: E.time, style: ge([{ height: A }, F(E)]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i.getSlotScope(E))]);
  }
  function P() {
    const E = me(e.intervalWidth), A = Sn(l, ":interval", (F) => ({ nativeEvent: F, ...i.getTimestampAtEvent(F, i.parsedStart.value) }));
    return S("div", J({ class: "v-calendar-daily__intervals-body", style: { width: E } }, A), [M()]);
  }
  function M() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(E) {
    const A = me(e.intervalHeight), F = e.shortIntervals, Y = (e.showIntervalLabel || i.showIntervalLabelDefault)(E) ? i.intervalFormatter.value(E, F) : void 0;
    return S("div", { key: E.time, class: "v-calendar-daily__interval", style: { height: A } }, [S("div", { class: "v-calendar-daily__interval-text" }, [Y])]);
  }
  return Tt(r), le(() => nt(S("div", { class: ne(["v-calendar-daily", l.class]), onDragstart: (E) => E.preventDefault() }, [e.hideHeader ? void 0 : c(), x()]), [[ui, s, void 0, { quiet: true }]])), { ...i, scrollPush: a, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function MI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function ob(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const l = typeof n.categoryName == "string" ? n.categoryName : MI(n, t);
    return { ...n, categoryName: l };
  }) : [];
}
const EI = nn({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Jr(), ...lb() }, setup(e, t) {
  let { slots: n, attrs: l } = t;
  const a = ab(e), o = _(() => ob(e.categories, e.categoryText));
  function i(h, b) {
    const x = typeof b == "object" && b && b.categoryName === e.categoryForInvalid ? null : b;
    return { ...h, category: x };
  }
  function r(h) {
    return S("div", { class: "v-calendar-category__columns" }, [o.value.map((b) => s(h, i(h, b)))]);
  }
  function s(h, b) {
    var _a3, _b2;
    const x = typeof b.category == "object" ? b.category.categoryName : b.category, V = Sn(l, ":dayCategory", () => i(a.getSlotScope(h) || h, b.category));
    return S("div", J({ class: "v-calendar-category__column-header" }, V), [((_a3 = n.category) == null ? void 0 : _a3.call(n, b)) ?? u(x), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, b)]);
  }
  function u(h) {
    return S("div", { class: "v-calendar-category__category" }, [h === null ? e.categoryForInvalid : h]);
  }
  function c() {
    const h = [];
    return a.days.value.forEach((b, x) => {
      const V = new Array(o.value.length || 1);
      V.fill(b), h.push(...V.map((I, k) => d(I, x, k)));
    }), h;
  }
  function d(h, b, x) {
    const V = o.value[x], I = Sn(l, ":time", (k) => a.getSlotScope(a.getTimestampAtEvent(k, h)));
    return S("div", J({ key: h.date + "-" + x, class: ["v-calendar-daily__day", a.getRelativeClasses(h)] }, I), [f(b, V), p(h, V)]);
  }
  function f(h, b) {
    return a.intervals.value[h].map((x) => v(x, b));
  }
  function v(h, b) {
    var _a3;
    const x = me(e.intervalHeight), V = e.intervalStyle || a.intervalStyleDefault;
    return S("div", { key: h.time, class: "v-calendar-daily__day-interval", style: ge([{ height: x }, V({ ...h, category: b })]) }, [(_a3 = n.interval) == null ? void 0 : _a3.call(n, i(a.getSlotScope(h), b))]);
  }
  function p(h, b) {
    return S("div", { class: "v-calendar-category__columns" }, [m(h, b)]);
  }
  function m(h, b) {
    var _a3;
    const x = Sn(l, ":timeCategory", (V) => i(a.getSlotScope(a.getTimestampAtEvent(V, h)), b));
    return S("div", J({ class: "v-calendar-category__column" }, x), [(_a3 = n["day-body"]) == null ? void 0 : _a3.call(n, i(a.getSlotScope(h), b))]);
  }
  return le(() => g(Do, J({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...a, parsedCategories: o };
} }), lm = nn({ name: "VCalendarWeekly", props: { minWeeks: { validate: za, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Jr() }, setup(e, t) {
  let { slots: n, attrs: l } = t;
  const a = Id(e), o = Hr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const k = i.value * a.parsedWeekdays.value.length, y = a.getStartOfWeek(a.parsedStart.value), C = a.getEndOfWeek(a.parsedEnd.value);
    return Sr(y, C, a.times.today, a.weekdaySkips.value, Number.MAX_SAFE_INTEGER, k);
  }), s = _(() => {
    const k = a.times.today, y = a.getStartOfWeek(k), C = a.getEndOfWeek(k);
    return Sr(y, C, k, a.weekdaySkips.value, a.parsedWeekdays.value.length, a.parsedWeekdays.value.length);
  }), u = _(() => e.monthFormat ? e.monthFormat : Ho(a.locale.current.value, (k, y) => ({ timeZone: "UTC", month: y ? "short" : "long" })));
  function c(k) {
    const y = Dt(k);
    return y < Dt(a.parsedStart.value) || y > Dt(a.parsedEnd.value);
  }
  function d() {
    return S("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const k = s.value.map(v);
    return e.showWeek && k.unshift(S("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), k;
  }
  function v(k, y) {
    const C = c(r.value[y]), w = k.present ? e.color : void 0;
    return S("div", J(a.getColorProps({ text: w }), { key: k.date, class: ["v-calendar-weekly__head-weekday", a.getRelativeClasses(k, C)], role: "columnheader" }), [a.weekdayFormatter.value(k, e.shortWeekdays)]);
  }
  function p() {
    const k = r.value, y = a.parsedWeekdays.value.length, C = [];
    for (let w = 0; w < k.length; w += y) C.push(m(k.slice(w, w + y), h(k[w])));
    return C;
  }
  function m(k, y) {
    const C = k.map((w, T) => x(w, T, k));
    return e.showWeek && C.unshift(b(y)), S("div", { key: k[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function h(k) {
    return a.getWeekNumber(k);
  }
  function b(k) {
    return S("div", { class: "v-calendar-weekly__weeknumber" }, [S("small", null, [String(k)])]);
  }
  function x(k, y, C) {
    var _a3;
    const w = c(k), T = Sn(l, ":day", (P) => ({ nativeEvent: P, ...k }));
    return S("div", J({ key: k.date, class: ["v-calendar-weekly__day", a.getRelativeClasses(k, w)], role: "cell" }, T), [V(k), (_a3 = n.day) == null ? void 0 : _a3.call(n, { outside: w, index: y, week: C, ...k })]);
  }
  function V(k) {
    var _a3;
    return S("div", { class: "v-calendar-weekly__day-label" }, [((_a3 = n["day-label"]) == null ? void 0 : _a3.call(n, k)) ?? I(k)]);
  }
  function I(k) {
    const y = k.day === 1 && e.showMonthOnFirst, C = Sn(l, ":date", (w) => ({ nativeEvent: w, ...k }));
    return g(Yy, J({ active: k.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Rr }, C), { default: () => [y ? u.value(k, e.shortMonths) + " " + a.dayFormatter.value(k, false) : a.dayFormatter.value(k, false)] });
  }
  return le(() => S("div", { class: ne(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (k) => k.preventDefault() }, [e.hideHeader ? void 0 : d(), p()])), { ...a, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), BI = 864e5;
function ib(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((l) => ({ event: l, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((l, a) => Math.max(t, l.event.startTimestampIdentifier) - Math.max(t, a.event.startTimestampIdentifier) || a.event.endTimestampIdentifier - l.event.endTimestampIdentifier), n;
}
function Bn(e, t, n, l) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= l || t <= n) : !(e > l || t < n);
}
function am(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function rb(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function sb(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function ub(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + BI, e.endTimestampIdentifier)];
}
function $I(e, t, n, l) {
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    let i = false;
    if (Bn(t, n, o.start, o.end, l)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = l ? rb(s.event) : sb(s.event);
      if (Bn(t, n, u, c, l)) {
        i = true;
        break;
      }
    }
    if (!i) return a;
  }
  return -1;
}
function cb(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, l, a) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Yl(n), r = ib(l, i);
    return r.forEach((s) => {
      const [u, c] = a ? rb(s.event) : sb(s.event);
      t.groups.length > 0 && !Bn(u, c, t.min, t.max, a) && (am(t.groups), t.reset());
      let d = $I(t.groups, u, c, a);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), am(t.groups), a && t.reset(), r;
  } };
  return t;
}
const om = 100, RI = (e, t, n) => {
  const l = cb(t);
  return (a, o, i, r) => {
    const s = l.getVisuals(a, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * om / u.columnCount, u.width = om / u.columnCount;
    }), s;
  };
}, Wi = 100, FI = 5, LI = 1.7, OI = (e, t, n) => {
  const l = cb(t);
  return (a, o, i, r) => {
    if (!i) return l.getVisuals(a, o, i, r);
    const s = Yl(a), u = ib(o, s), c = GI(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const p = YI(v, s), m = WI(p, f);
        if (m === false) {
          const h = jI(p, f);
          h && (p.parent = h, p.sibling = Bn(p.start, p.end, h.start, Qi(h.start, n)), p.index = h.index + 1, h.children.push(p));
        } else {
          const [h] = im(p, f, m - 1, m - 1), b = im(p, f, m + 1, m + f.length, true);
          p.children = b, p.index = m, h && (p.parent = h, p.sibling = Bn(p.start, p.end, h.start, Qi(h.start, n)), h.children.push(p));
          for (const x of b) x.parent === h && (x.parent = p), x.index - p.index <= 1 && p.sibling && Bn(p.start, Qi(p.start, n), x.start, x.end) && (x.sibling = true);
        }
        f.push(p);
      }
      NI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function NI(e, t) {
  for (const n of e) {
    const { visual: l, parent: a } = n, o = db(n) + 1, i = a ? a.visual.left : 0, r = Wi - i, s = Math.min(FI, Wi / o), u = HI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    a && (l.left = n.sibling ? i + c : i + s), l.width = UI(n, e, t) ? Wi - l.left : Math.min(Wi - l.left, d * LI);
  }
}
function HI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((a, o) => Math.min(a, o.index), n) - e.index;
}
function zI(e, t) {
  const n = [];
  for (const l of t) Bn(e.start, e.end, l.start, l.end) && n.push(l.index);
  return n;
}
function WI(e, t) {
  const n = zI(e, t);
  n.sort();
  for (let l = 0; l < n.length; l++) if (l < n[l]) return l;
  return false;
}
function im(e, t, n, l) {
  let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= l && Bn(e.start, e.end, i.start, i.end) && o.push(i);
  if (a && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function jI(e, t) {
  let n = null;
  for (const l of t) Bn(e.start, e.end, l.start, l.end) && (n === null || l.index > n.index) && (n = l);
  return n;
}
function UI(e, t, n) {
  for (const l of t) if (l !== e && l.index > e.index && Bn(e.start, Qi(e.start, n), l.start, l.end)) return false;
  return true;
}
function GI(e, t) {
  const n = [];
  for (const l of e) {
    const [a, o] = ub(l.event, t);
    let i = false;
    for (const r of n) if (Bn(a, o, r.start, r.end)) {
      r.visuals.push(l), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: a, end: o, visuals: [l] });
  }
  return n;
}
function YI(e, t) {
  const [n, l] = ub(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: l, children: [] };
}
function db(e) {
  let t = e.index;
  for (const n of e.children) {
    const l = db(n);
    l > t && (t = l);
  }
  return t;
}
function Qi(e, t) {
  const n = e % 100, l = n + t, a = Math.floor(l / 60), o = l % 60;
  return e - n + a * 100 + o;
}
const fb = { stack: OI, column: RI };
function KI(e, t, n, l) {
  let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[l], s = fl(i, true), u = r ? fl(r, true) : s, c = tm(i) ? nm(s, a) : s, d = tm(r) ? nm(u, a) : u, f = Dt(c), v = Yl(c), p = Dt(d), m = c.hasTime ? 0 : 2359, h = Yl(d) + m, b = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: p, endTimestampIdentifier: h, allDay: b, index: t, category: o };
}
function Pd(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function XI(e, t, n) {
  if (n) {
    const l = Au(dn(t), n[0]), a = Au(dn(t), n[1]), o = e.startTimestampIdentifier < Yl(a), i = e.endTimestampIdentifier > Yl(l);
    return o && i;
  }
  return Pd(e, Dt(t));
}
function qI(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function rm(e, t, n, l) {
  return n === e.startIdentifier || l === t.weekday && Pd(e, n);
}
function ZI(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const JI = 100, QI = 95, eP = U({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in fb || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function tP(e, t, n) {
  const l = Id(e), a = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (A) => !!A[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (A) => A[e.eventCategory]), s = _(() => e.events ? e.events.map((A, F) => KI(A, F, e.eventStart || "", e.eventEnd || "", i.value(A), o.value ? r.value(A) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (A, F) => A.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : fb[e.eventOverlapMode]), v = _(() => l.effectiveWeekdays.value);
  function p(A) {
    return typeof e.eventColor == "function" ? e.eventColor(A) : A.color || e.eventColor;
  }
  const m = H([]);
  function h() {
    if (a.value || !e.eventMore) return;
    const A = e.eventHeight || 0, F = b();
    for (const j in F) {
      const { parent: W, events: Y, more: N } = F[j];
      if (!N) break;
      const R = W.getBoundingClientRect(), Z = Y.length - 1, z = Y.map((G) => ({ event: G, bottom: G.getBoundingClientRect().bottom })).sort((G, ie) => G.bottom - ie.bottom);
      let O = 0;
      for (let G = 0; G <= Z; G++) {
        const ie = z[G].bottom;
        (G === Z ? ie > R.bottom : ie + A > R.bottom) && (z[G].event.style.display = "none", O++);
      }
      O ? (N.style.display = "", N.innerHTML = l.locale.t(e.eventMoreText, O)) : N.style.display = "none";
    }
  }
  function b() {
    const A = {}, F = m.value;
    return !F || !F.length || F.forEach((j) => {
      const W = j.getAttribute("data-date");
      j.parentElement && W && (W in A || (A[W] = { parent: j.parentElement, more: null, events: [] }), j.getAttribute("data-more") ? A[W].more = j : (A[W].events.push(j), j.style.display = ""));
    }), A;
  }
  function x(A, F) {
    let { event: j } = A;
    const W = e.eventHeight || 0, Y = e.eventMarginBottom || 0, N = Dt(F), R = F.week, Z = N === j.startIdentifier;
    let z = N === j.endIdentifier, O = QI;
    if (!o.value) for (let ie = F.index + 1; ie < R.length; ie++) {
      const pe = Dt(R[ie]);
      if (j.endIdentifier >= pe) O += JI, z = z || pe === j.endIdentifier;
      else {
        z = true;
        break;
      }
    }
    return I(j, { eventParsed: j, day: F, start: Z, end: z, timed: false }, false, { class: ["v-event", { "v-event-start": Z, "v-event-end": z }], style: { height: `${W}px`, width: `${O}%`, marginBottom: `${Y}px` }, "data-date": F.date });
  }
  function V(A, F) {
    let { event: j, left: W, width: Y } = A;
    const N = F.timeDelta(j.start, F), R = F.timeDelta(j.end, F);
    if (R === false || N === false || R < 0 || N >= 1 || qI(j, F)) return false;
    const Z = Dt(F), z = j.startIdentifier >= Z, O = j.endIdentifier > Z, G = F.timeToY(j.start, F), ie = F.timeToY(j.end, F), pe = Math.max(e.eventHeight || 0, ie - G);
    return I(j, { eventParsed: j, day: F, start: z, end: O, timed: true }, true, { class: "v-event-timed", style: { top: `${G}px`, height: `${pe}px`, left: `${W}%`, width: `${Y}%` } });
  }
  function I(A, F, j, W) {
    const Y = t.event, N = c.value(A.input), R = p(A.input), Z = A.start.hour < 12 && A.end.hour >= 12, z = _I(A.start, A.end) <= u.value, O = (fe, Te) => l.getFormatter({ timeZone: "UTC", hour: "numeric", minute: fe.minute > 0 ? "numeric" : void 0 })(fe, true), G = () => O(A.start) + " - " + O(A.end), ie = () => {
      const fe = d.value(A, j);
      if (A.start.hasTime) if (j) {
        const Te = G(), xe = z ? ", " : S("br", null, null);
        return S("span", { class: "v-event-summary" }, [S("strong", null, [fe]), xe, Te]);
      } else {
        const Te = O(A.start);
        return S("span", { class: "v-event-summary" }, [S("strong", null, [Te]), Le(" "), fe]);
      }
      return S("span", { class: "v-event-summary" }, [fe]);
    }, pe = { ...F, event: A.input, outside: F.day.outside, singline: z, overlapsNoon: Z, formatTime: O, timeSummary: G, eventSummary: ie }, K = Sn(n, ":event", (fe) => ({ ...pe, nativeEvent: fe }));
    return nt(S("div", J(l.getColorProps({ text: N, background: R }), K, W, { ref_for: true, ref: m }), [(Y == null ? void 0 : Y(pe)) ?? k(ie)]), [[zt, e.eventRipple ?? true]]);
  }
  function k(A) {
    return S("div", { class: "pl-1" }, [A()]);
  }
  function y(A) {
    const F = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return S("div", { style: { height: `${F}px` }, "data-date": A.date, ref_for: true, ref: m }, null);
  }
  function C(A) {
    const F = e.eventHeight || 0, j = e.eventMarginBottom || 0, W = Sn(n, ":more", (Y) => ({ nativeEvent: Y, ...A }));
    return nt(S("div", J({ class: ["v-event-more pl-1", { "v-outside": A.outside }], "data-date": A.date, "data-more": "1", style: { display: "none", height: `${F}px`, marginBottom: `${j}px` }, ref_for: true, ref: m }, W), null), [[zt, e.eventRipple ?? true]]);
  }
  function w() {
    const A = l.days.value, F = Dt(A[0]), j = Dt(A[A.length - 1]);
    return s.value.filter((W) => ZI(W, F, j));
  }
  function T(A, F) {
    return !o.value || typeof F == "object" && F.categoryName && F.categoryName === A.category || typeof A.category == "string" && F === A.category || typeof A.category != "string" && F === null;
  }
  function P(A) {
    const F = Dt(A), j = v.value[0];
    return s.value.filter((W) => rm(W, A, F, j));
  }
  function M(A) {
    const F = Dt(A), j = v.value[0];
    return s.value.filter((W) => W.allDay && (o.value ? Pd(W, F) : rm(W, A, F, j)) && T(W, A.category));
  }
  function D(A) {
    return s.value.filter((F) => !F.allDay && XI(F, A, A.intervalRange) && T(F, A.category));
  }
  function E() {
    if (a.value) return { ...t };
    const A = f.value(s.value, v.value[0], u.value), F = (W) => !!W, j = (W, Y, N, R) => {
      const Z = Y(W), z = A(W, Z, R, o.value);
      if (R) return z.map((G) => N(G, W)).filter(F);
      const O = [];
      return z.forEach((G, ie) => {
        for (; O.length < G.column; ) O.push(y(W));
        const pe = N(G, W);
        pe && O.push(pe);
      }), O;
    };
    return { ...t, day: (W) => {
      let Y = j(W, P, x, false);
      if (Y && Y.length > 0 && e.eventMore && Y.push(C(W)), t.day) {
        const N = t.day(W);
        N && (Y = Y ? Y.concat(N) : N);
      }
      return Y;
    }, "day-header": (W) => {
      let Y = j(W, M, x, false);
      if (t["day-header"]) {
        const N = t["day-header"](W);
        N && (Y = Y ? Y.concat(N) : N);
      }
      return Y;
    }, "day-body": (W) => {
      const Y = j(W, D, V, true);
      let N = [S("div", { class: "v-event-timed-container" }, [Y])];
      if (t["day-body"]) {
        const R = t["day-body"](W);
        R && (N = N.concat(R));
      }
      return N;
    } };
  }
  return { ...l, noEvents: a, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: p, eventsRef: m, updateEventVisibility: h, getEventsMap: b, genDayEvent: x, genTimedEvent: V, genEvent: I, genName: k, genPlaceholder: y, genMore: C, getVisibleEvents: w, isEventForCategory: T, getEventsForDay: P, getEventsForDayAll: M, getEventsForDayTimed: D, getScopedSlots: E };
}
const nP = te()({ name: "VCalendar", directives: { vResize: ui }, props: { modelValue: { type: [String, Number, Date], validate: qa }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Jr(), ...eP() }, setup(e, t) {
  let { slots: n, attrs: l, emit: a } = t;
  const o = H(), i = tP(e, n, l), r = H(null), s = H(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => ob(e.categories, e.categoryText)), d = _(() => {
    const y = i.parsedValue.value;
    let C = null, w = e.maxDays, T = c.value, P = y, M = y;
    switch (e.type) {
      case "month":
        C = lm, P = Zy(y), M = Jy(y);
        break;
      case "week":
        C = Do, P = i.getStartOfWeek(y), M = i.getEndOfWeek(y), w = 7;
        break;
      case "day":
        C = Do, w = 1;
        break;
      case "4day":
        C = Do, M = la(dn(M), Ol, 3), En(M), w = 4;
        break;
      case "custom-weekly":
        C = lm, P = i.parsedStart.value || y, M = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = Do, P = i.parsedStart.value || y, M = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = EI, M = la(dn(M), Ol, D), En(M), w = D, T = k(T);
        break;
      default:
        const E = e.type;
        throw new Error(`${E} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: M, maxDays: w, categories: T };
  }), f = _(() => i.effectiveWeekdays.value), v = _(() => e.type === "category"), p = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), h = _(() => {
    const { start: y, end: C } = d.value, w = y.year !== C.year, T = w || y.month !== C.month;
    return w ? m.value(y, true) + " " + y.year + " - " + m.value(C, true) + " " + C.year : T ? m.value(y, true) + " - " + m.value(C, true) + " " + C.year : p.value(y, false) + " " + y.year;
  });
  function b() {
    const { start: y, end: C } = d.value;
    (!r.value || !s.value || y.date !== r.value.date || C.date !== s.value.date) && (r.value = y, s.value = C, a("change", { start: y, end: C }));
  }
  function x() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = dn(i.parsedValue.value), w = y > 0, T = w ? Ol : tb, P = w ? cI : qr;
    let M = w ? y : -y;
    for (; --M >= 0; ) switch (e.type) {
      case "month":
        C.day = P, T(C);
        break;
      case "week":
        la(C, T, Ll);
        break;
      case "day":
        la(C, T, 1);
        break;
      case "4day":
        la(C, T, 4);
        break;
      case "category":
        la(C, T, u.value);
        break;
    }
    Zr(C), En(C), ha(C, i.times.now), e.modelValue instanceof Date ? a("update:modelValue", Du(C)) : typeof e.modelValue == "number" ? a("update:modelValue", Du(C).getTime()) : a("update:modelValue", C.date), a("moved", C);
  }
  function V() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(y);
  }
  function I() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    x(-y);
  }
  function k(y) {
    if (!i.noEvents.value) {
      const C = y.reduce((w, T, P) => (typeof T == "object" && T.categoryName ? w[T.categoryName] = { index: P, count: 0 } : typeof T == "string" && (w[T] = { index: P, count: 0 }), w), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let w = y.length;
        i.parsedEvents.value.forEach((T) => {
          let P = T.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: w++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const w in C) C[w].count === 0 && delete C[w];
      y = y.filter((w) => typeof w == "object" && w.categoryName ? C.hasOwnProperty(w.categoryName) : typeof w == "string" ? C.hasOwnProperty(w) : false);
    }
    return y;
  }
  return se(d, b), Tt(() => {
    i.updateEventVisibility(), b();
  }), Dr(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), le(() => {
    const { start: y, end: C, maxDays: w, component: T, categories: P } = d.value;
    return nt(g(T, J({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, T.filterProps(e), { start: y.date, end: C.date, maxDays: w, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (M, D) => {
      l["onUpdate:modelValue"] && a("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[ui, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Et({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: h, monthLongFormatter: p, monthShortFormatter: m, parsedCategories: c, checkChange: b, move: x, next: V, prev: I, getCategoryList: k }, o);
} }), lP = U({ ...we(), ...$e() }, "VCardActions"), vb = te()({ name: "VCardActions", props: lP(), setup(e, t) {
  let { slots: n } = t;
  return pt({ VBtn: { slim: true, variant: "text" } }), le(() => g(e.tag, { class: ne(["v-card-actions", e.class]), style: ge(e.style) }, n)), {};
} }), aP = U({ opacity: [Number, String], ...we(), ...$e() }, "VCardSubtitle"), mb = te()({ name: "VCardSubtitle", props: aP(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-card-subtitle", e.class]), style: ge([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), gb = kl("v-card-title"), oP = U({ appendAvatar: String, appendIcon: Pe, prependAvatar: String, prependIcon: Pe, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...we(), ...St(), ...$e() }, "VCardItem"), hb = te()({ name: "VCardItem", props: oP(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const l = !!(e.prependAvatar || e.prependIcon), a = !!(l || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return g(e.tag, { class: ne(["v-card-item", e.class]), style: ge(e.style) }, { default: () => {
      var _a3;
      return [a && S("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? g(Fe, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : S(be, null, [e.prependAvatar && g(wn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(qe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), S("div", { class: "v-card-item__content" }, [r && g(gb, { key: "title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? Ee(e.title)];
      } }), s && g(mb, { key: "subtitle" }, { default: () => {
        var _a4;
        return [((_a4 = n.subtitle) == null ? void 0 : _a4.call(n)) ?? Ee(e.subtitle)];
      } }), (_a3 = n.default) == null ? void 0 : _a3.call(n)]), i && S("div", { key: "append", class: "v-card-item__append" }, [n.append ? g(Fe, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : S(be, null, [e.appendIcon && g(qe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(wn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), iP = U({ opacity: [Number, String], ...we(), ...$e() }, "VCardText"), yb = te()({ name: "VCardText", props: iP(), setup(e, t) {
  let { slots: n } = t;
  return le(() => g(e.tag, { class: ne(["v-card-text", e.class]), style: ge([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), rP = U({ appendAvatar: String, appendIcon: Pe, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Pe, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Kt(), ...we(), ...St(), ...Vt(), ...Pt(), ...Ur(), ...ll(), ...mo(), ...ct(), ...Vi(), ...$e(), ...Ke(), ...Vn({ variant: "elevated" }) }, "VCard"), sP = te()({ name: "VCard", directives: { vRipple: zt }, props: rP(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: a } = Ze(e), { borderClasses: o } = ln(e), { colorClasses: i, colorStyles: r, variantClasses: s } = _l(e), { densityClasses: u } = Wt(e), { dimensionStyles: c } = It(e), { elevationClasses: d } = Mt(e), { loaderClasses: f } = wi(e), { locationStyles: v } = Xl(e), { positionClasses: p } = go(e), { roundedClasses: m } = yt(e), h = _i(e, n), b = re(void 0);
  return se(() => e.loading, (x, V) => {
    b.value = !x && typeof V == "string" ? V : typeof x == "boolean" ? void 0 : x;
  }, { immediate: true }), le(() => {
    const x = e.link !== false && h.isLink.value, V = !e.disabled && e.link !== false && (e.link || h.isClickable.value), I = x ? "a" : e.tag, k = !!(l.title || e.title != null), y = !!(l.subtitle || e.subtitle != null), C = k || y, w = !!(l.append || e.appendAvatar || e.appendIcon), T = !!(l.prepend || e.prependAvatar || e.prependIcon), P = !!(l.image || e.image), M = C || T || w, D = !!(l.text || e.text != null);
    return nt(g(I, J(h.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": V }, a.value, o.value, i.value, u.value, d.value, f.value, p.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": me(e.height) }, e.style], onClick: V && h.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a3;
      return [P && S("div", { key: "image", class: "v-card__image" }, [l.image ? g(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, l.image) : g(bl, { key: "image-img", cover: true, src: e.image }, null)]), g(Ci, { name: "v-card", active: !!e.loading, color: b.value }, { default: l.loader }), M && g(hb, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), D && g(yb, { key: "text" }, { default: () => {
        var _a4;
        return [((_a4 = l.text) == null ? void 0 : _a4.call(l)) ?? e.text];
      } }), (_a3 = l.default) == null ? void 0 : _a3.call(l), l.actions && g(vb, null, { default: l.actions }), Cl(V, "v-card")];
    } }), [[zt, V && e.ripple]]);
  }), {};
} }), uP = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: l, touchendY: a } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = a - l, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && a < l - i && e.up(e), e.down && a > l + i && e.down(e));
};
function cP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a3 = t.start) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function dP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a3 = t.end) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t }), uP(t);
}
function fP(e, t) {
  var _a3;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a3 = t.move) == null ? void 0 : _a3.call(t, { originalEvent: e, ...t });
}
function vP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => cP(n, t), touchend: (n) => dP(n, t), touchmove: (n) => fP(n, t) };
}
function mP(e, t) {
  var _a3;
  const n = t.value, l = (n == null ? void 0 : n.parent) ? e.parentElement : e, a = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a3 = t.instance) == null ? void 0 : _a3.$.uid;
  if (!l || o === void 0) return;
  const i = vP(t.value);
  l._touchHandlers = l._touchHandlers ?? /* @__PURE__ */ Object.create(null), l._touchHandlers[o] = i, Jg(i).forEach((r) => {
    l.addEventListener(r, i[r], a);
  });
}
function gP(e, t) {
  var _a3, _b2;
  const n = ((_a3 = t.value) == null ? void 0 : _a3.parent) ? e.parentElement : e, l = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || l === void 0) return;
  const a = n._touchHandlers[l];
  Jg(a).forEach((o) => {
    n.removeEventListener(o, a[o]);
  }), delete n._touchHandlers[l];
}
const xr = { mounted: mP, unmounted: gP }, bb = Symbol.for("vuetify:v-window"), pb = Symbol.for("vuetify:v-window-group"), Qr = U({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...we(), ...$e(), ...Ke() }, "VWindow"), ya = te()({ name: "VWindow", directives: { vTouch: xr }, props: Qr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { isRtl: a } = At(), { t: o } = lt(), i = ql(e, pb), r = H(), s = _(() => a.value ? !e.reverse : e.reverse), u = re(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const y = e.direction === "vertical" ? "y" : "x", w = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${y}${w}-transition`;
  }), d = re(0), f = H(void 0), v = _(() => i.items.value.findIndex((y) => i.selected.value.includes(y.id)));
  se(v, (y, C) => {
    let w;
    const T = { left: 0, top: 0 };
    tt && C >= 0 && (w = Lr(r.value), T.left = w == null ? void 0 : w.scrollLeft, T.top = w == null ? void 0 : w.scrollTop);
    const P = i.items.value.length, M = P - 1;
    P <= 2 ? u.value = y < C : y === M && C === 0 ? u.value = false : y === 0 && C === M ? u.value = true : u.value = y < C, Be(() => {
      if (!tt || !w) return;
      w.scrollTop !== T.top && w.scrollTo({ ...T, behavior: "instant" }), requestAnimationFrame(() => {
        if (!w) return;
        w.scrollTop !== T.top && w.scrollTo({ ...T, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), mt(bb, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const p = $(() => e.continuous || v.value !== 0), m = $(() => e.continuous || v.value !== i.items.value.length - 1);
  function h() {
    p.value && i.prev();
  }
  function b() {
    m.value && i.next();
  }
  const x = _(() => {
    const y = [], C = { icon: a.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    y.push(p.value ? n.prev ? n.prev({ props: C }) : g(je, C, null) : S("div", null, null));
    const w = { icon: a.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return y.push(m.value ? n.next ? n.next({ props: w }) : g(je, w, null) : S("div", null, null)), y;
  }), V = _(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? h() : b();
  }, right: () => {
    s.value ? b() : h();
  }, start: (C) => {
    let { originalEvent: w } = C;
    w.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function I(y) {
    (e.direction === "horizontal" && y.key === "ArrowLeft" || e.direction === "vertical" && y.key === "ArrowUp") && (y.preventDefault(), h(), Be(() => {
      p.value ? k(0) : k(1);
    })), (e.direction === "horizontal" && y.key === "ArrowRight" || e.direction === "vertical" && y.key === "ArrowDown") && (y.preventDefault(), b(), Be(() => {
      m.value ? k(1) : k(0);
    }));
  }
  function k(y) {
    var _a3;
    const C = x.value[y];
    if (!C) return;
    (_a3 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a3.focus();
  }
  return le(() => nt(g(e.tag, { ref: r, class: ne(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, l.value, e.class]), style: ge([e.style, { "--v-window-transition-duration": qn() ? null : me(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a3, _b2;
    return [S("div", { class: "v-window__container", style: { height: f.value } }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, { group: i }), e.showArrows !== false && S("div", { class: ne(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: I }, [x.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[xr, V.value]])), { group: i };
} }), hP = U({ color: String, cycle: Boolean, delimiterIcon: { type: Pe, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...Qr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), yP = te()({ name: "VCarousel", props: hP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), { t: a } = lt(), o = H();
  let i = -1;
  se(l, s), se(() => e.interval, s), se(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), Tt(r);
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
    const c = ya.filterProps(e);
    return g(ya, J({ ref: o }, c, { modelValue: l.value, "onUpdate:modelValue": (d) => l.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: me(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return S(be, null, [!e.hideDelimiters && S("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && g(Fe, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, p) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": a("$vuetify.carousel.ariaLabel.delimiter", p + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (h) => u(h, f) };
        return n.item ? n.item({ props: m, item: v }) : g(je, J(v, m), null);
      })] })]), e.progress && g(jr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(l.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), es = U({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...we(), ...Ta(), ...md() }, "VWindowItem"), ba = te()({ name: "VWindowItem", directives: { vTouch: xr }, props: es(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ue(bb), a = zl(e, pb), { isBooted: o } = Ia();
  if (!l || !a) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = re(false), r = _(() => o.value && (l.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !i.value || !l || (i.value = false, l.transitionCount.value > 0 && (l.transitionCount.value -= 1, l.transitionCount.value === 0 && (l.transitionHeight.value = void 0)));
  }
  function u() {
    var _a3;
    i.value || !l || (i.value = true, l.transitionCount.value === 0 && (l.transitionHeight.value = me((_a3 = l.rootRef.value) == null ? void 0 : _a3.clientHeight)), l.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(p) {
    i.value && Be(() => {
      !r.value || !i.value || !l || (l.transitionHeight.value = me(p.clientHeight));
    });
  }
  const f = _(() => {
    const p = l.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof p != "string" ? l.transition.value : p, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = gd(e, a.isSelected);
  return le(() => g(tn, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a3;
    return [nt(S("div", { class: ne(["v-window-item", a.selectedClass.value, e.class]), style: ge(e.style) }, [v.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n))]), [[On, a.isSelected.value]])];
  } })), { groupItem: a };
} }), bP = U({ ...Lh(), ...es() }, "VCarouselItem"), pP = te()({ name: "VCarouselItem", inheritAttrs: false, props: bP(), setup(e, t) {
  let { slots: n, attrs: l } = t;
  le(() => {
    const a = bl.filterProps(e), o = ba.filterProps(e);
    return g(ba, J({ class: ["v-carousel-item", e.class] }, o), { default: () => [g(bl, J(l, a), n)] });
  });
} }), SP = kl("v-code", "code"), xP = U({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...we() }, "VColorPickerCanvas"), kP = nn({ name: "VColorPickerCanvas", props: xP(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const l = re(false), a = H(), o = re(parseFloat(e.width)), i = re(parseFloat(e.height)), r = H({ x: 0, y: 0 }), s = $(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(b) {
    var _a3, _b2;
    if (!a.value) return;
    const { x, y: V } = b;
    r.value = b, n("update:color", { h: ((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0, s: et(x, 0, o.value) / o.value, v: 1 - et(V, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: b, y: x } = u.value, V = parseInt(e.dotSize, 10) / 2;
    return { width: me(e.dotSize), height: me(e.dotSize), transform: `translate(${me(b - V)}, ${me(x - V)})` };
  }), { resizeRef: d } = Tn((b) => {
    var _a3;
    if (!((_a3 = d.el) == null ? void 0 : _a3.offsetParent)) return;
    const { width: x, height: V } = b[0].contentRect;
    o.value = Math.round(x), i.value = Math.round(V);
  });
  function f(b, x, V) {
    const { left: I, top: k, width: y, height: C } = V;
    u.value = { x: et(b - I, 0, y), y: et(x - k, 0, C) };
  }
  function v(b) {
    b.type === "mousedown" && b.preventDefault(), s.value && (p(b), window.addEventListener("mousemove", p), window.addEventListener("mouseup", m), window.addEventListener("touchmove", p), window.addEventListener("touchend", m));
  }
  function p(b) {
    if (!s.value || !a.value) return;
    l.value = true;
    const x = ww(b);
    f(x.clientX, x.clientY, a.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", p), window.removeEventListener("touchend", m);
  }
  function h() {
    var _a3;
    if (!a.value) return;
    const b = a.value, x = b.getContext("2d");
    if (!x) return;
    const V = x.createLinearGradient(0, 0, b.width, 0);
    V.addColorStop(0, "hsla(0, 0%, 100%, 1)"), V.addColorStop(1, `hsla(${((_a3 = e.color) == null ? void 0 : _a3.h) ?? 0}, 100%, 50%, 1)`), x.fillStyle = V, x.fillRect(0, 0, b.width, b.height);
    const I = x.createLinearGradient(0, 0, 0, b.height);
    I.addColorStop(0, "hsla(0, 0%, 0%, 0)"), I.addColorStop(1, "hsla(0, 0%, 0%, 1)"), x.fillStyle = I, x.fillRect(0, 0, b.width, b.height);
  }
  return se(() => {
    var _a3;
    return (_a3 = e.color) == null ? void 0 : _a3.h;
  }, h, { immediate: true }), se(() => [o.value, i.value], (b, x) => {
    h(), r.value = { x: u.value.x * b[0] / x[0], y: u.value.y * b[1] / x[1] };
  }, { flush: "post" }), se(() => e.color, () => {
    if (l.value) {
      l.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), Tt(() => h()), le(() => S("div", { ref: d, class: ne(["v-color-picker-canvas", e.class]), style: ge(e.style), onMousedown: v, onTouchstartPassive: v }, [S("canvas", { ref: a, width: o.value, height: i.value }, null), e.color && S("div", { class: ne(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: ge(c.value) }, null)])), {};
} });
function wP(e, t) {
  if (t) {
    const { a: n, ...l } = e;
    return l;
  }
  return e;
}
function CP(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: a, g: o, b: i, a: r } = Zn(e);
      return `rgb(${a} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: a, s: o, l: i, a: r } = fu(e);
      return `hsl(${a} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const l = mh(e);
    return e.a === 1 ? l.slice(0, 7) : l;
  }
  if (typeof t == "object") {
    let n;
    return oa(t, ["r", "g", "b"]) ? n = Zn(e) : oa(t, ["h", "s", "l"]) ? n = fu(e) : oa(t, ["h", "s", "v"]) && (n = e), wP(n, !oa(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Ua = { h: 0, s: 0, v: 0, a: 1 }, Mu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Zn, from: Si }, _P = { ...Mu, inputs: (_a2 = Mu.inputs) == null ? void 0 : _a2.slice(0, 3) }, Eu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: fu, from: Hc }, VP = { ...Eu, inputs: Eu.inputs.slice(0, 3) }, Sb = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: mh, from: Kw }, IP = { ...Sb, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, da = { rgb: _P, rgba: Mu, hsl: VP, hsla: Eu, hex: IP, hexa: Sb }, PP = (e) => {
  let { label: t, ...n } = e;
  return S("div", { class: "v-color-picker-edit__input" }, [S("input", uS(Bg(n)), null), S("span", null, [t])]);
}, TP = U({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(da).includes(e) }, modes: { type: Array, default: () => Object.keys(da), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(da).includes(t)) }, ...we() }, "VColorPickerEdit"), AP = nn({ name: "VColorPickerEdit", props: TP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: l } = lt(), a = _(() => e.modes.map((i) => ({ ...da[i], name: i }))), o = _(() => {
    var _a3;
    const i = a.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a3 = i.inputs) == null ? void 0 : _a3.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: l(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const p = v.target;
        p && n("update:color", i.from(c(r ?? i.to(Ua), p.value)));
      } };
    });
  });
  return le(() => {
    var _a3;
    return S("div", { class: ne(["v-color-picker-edit", e.class]), style: ge(e.style) }, [(_a3 = o.value) == null ? void 0 : _a3.map((i) => g(PP, i, null)), a.value.length > 1 && g(je, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": l("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = a.value.findIndex((r) => r.name === e.mode);
      n("update:mode", a.value[(i + 1) % a.value.length].name);
    } }, null)]);
  }), {};
} }), Td = Symbol.for("vuetify:v-slider");
function Bu(e, t, n) {
  const l = n === "vertical", a = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return l ? o.clientY - (a.top + a.height / 2) : o.clientX - (a.left + a.width / 2);
}
function DP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const xb = U({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...ct(), ...Pt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), kb = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), l = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), a = _(() => Math.max(ov(l.value), ov(t.value)));
  function o(i) {
    if (i = parseFloat(i), l.value <= 0) return i;
    const r = et(i, t.value, n.value), s = t.value % l.value;
    let u = Math.round((r - s) / l.value) * l.value + s;
    return r > u && u + l.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(a.value));
  }
  return { min: t, max: n, step: l, decimals: a, roundValue: o };
}, wb = (e) => {
  let { props: t, steps: n, onSliderStart: l, onSliderMove: a, onSliderEnd: o, getActiveThumb: i } = e;
  const r = yo(t), { isRtl: s } = At(), u = $(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: v, step: p, decimals: m, roundValue: h } = n, b = _(() => parseInt(t.thumbSize, 10)), x = _(() => parseInt(t.tickSize, 10)), V = _(() => parseInt(t.trackSize, 10)), I = _(() => (v.value - f.value) / p.value), k = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), y = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), w = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = re(false), P = re(0), M = H(), D = H();
  function E(K) {
    var _a3;
    const fe = (_a3 = M.value) == null ? void 0 : _a3.$el;
    if (!fe) return;
    const Te = t.direction === "vertical", xe = Te ? "top" : "left", ce = Te ? "height" : "width", B = Te ? "clientY" : "clientX", { [xe]: L, [ce]: ee } = fe.getBoundingClientRect(), de = DP(K, B);
    let oe = et((de - L - P.value) / ee) || 0;
    return (Te ? d.value : d.value !== s.value) && (oe = 1 - oe), h(f.value + oe * (v.value - f.value));
  }
  const A = (K) => {
    const fe = E(K);
    fe != null && o({ value: fe }), T.value = false, P.value = 0;
  }, F = (K) => {
    const fe = E(K);
    D.value = i(K), D.value && (T.value = true, D.value.contains(K.target) ? P.value = Bu(K, D.value, t.direction) : (P.value = 0, fe != null && a({ value: fe })), fe != null && l({ value: fe }), Be(() => {
      var _a3;
      return (_a3 = D.value) == null ? void 0 : _a3.focus();
    }));
  }, j = { passive: true, capture: true };
  function W(K) {
    const fe = E(K);
    fe != null && a({ value: fe });
  }
  function Y(K) {
    K.stopPropagation(), K.preventDefault(), A(K), window.removeEventListener("mousemove", W, j), window.removeEventListener("mouseup", Y);
  }
  function N(K) {
    var _a3;
    A(K), window.removeEventListener("touchmove", W, j), (_a3 = K.target) == null ? void 0 : _a3.removeEventListener("touchend", N);
  }
  function R(K) {
    var _a3;
    F(K), window.addEventListener("touchmove", W, j), (_a3 = K.target) == null ? void 0 : _a3.addEventListener("touchend", N, { passive: false });
  }
  function Z(K) {
    K.button === 0 && (K.preventDefault(), F(K), window.addEventListener("mousemove", W, j), window.addEventListener("mouseup", Y, { passive: false }));
  }
  kt(() => {
    window.removeEventListener("touchmove", W), window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", Y);
  });
  const z = (K) => {
    const fe = (K - f.value) / (v.value - f.value) * 100;
    return et(isNaN(fe) ? 0 : fe, 0, 100);
  }, O = $(() => t.showTicks), G = _(() => O.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((K) => ({ value: K, position: z(K), label: K.toString() })) : Object.keys(t.ticks).map((K) => ({ value: parseFloat(K), position: z(parseFloat(K)), label: t.ticks[K] })) : I.value !== 1 / 0 ? Yn(I.value + 1).map((K) => {
    const fe = f.value + K * p.value;
    return { value: fe, position: z(fe) };
  }) : [] : []), ie = _(() => G.value.some((K) => {
    let { label: fe } = K;
    return !!fe;
  })), pe = { activeThumbRef: D, color: $(() => t.color), decimals: m, disabled: r.isDisabled, direction: $(() => t.direction), elevation: $(() => t.elevation), hasLabels: ie, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: T, noKeyboard: $(() => t.noKeyboard), numTicks: I, onSliderMousedown: Z, onSliderTouchstart: R, parsedTicks: G, parseMouseMove: E, position: z, readonly: r.isReadonly, rounded: $(() => t.rounded), roundValue: h, showTicks: O, startOffset: P, step: p, thumbSize: b, thumbColor: k, thumbLabelColor: y, thumbLabel: $(() => t.thumbLabel), ticks: $(() => t.ticks), tickSize: x, trackColor: C, trackContainerRef: M, trackFillColor: w, trackSize: V, vertical: c };
  return mt(Td, pe), pe;
}, MP = U({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...we() }, "VSliderThumb"), $u = te()({ name: "VSliderThumb", directives: { vRipple: zt }, props: MP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const a = Ue(Td), { isRtl: o, rtlClasses: i } = At();
  if (!a) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: p, direction: m, isReversed: h, vertical: b, readonly: x, elevation: V, mousePressed: I, decimals: k, indexFromEnd: y } = a, C = re(false), w = re(false), T = _(() => f.value ? void 0 : V.value), { elevationClasses: P } = Mt(T), { textColorClasses: M, textColorStyles: D } = Lt(u), { backgroundColorClasses: E, backgroundColorStyles: A } = Je(c), { pageup: F, pagedown: j, end: W, home: Y, left: N, right: R, down: Z, up: z } = ru, O = [F, j, W, Y, N, R, Z, z], G = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ie(K, fe) {
    if (e.noKeyboard || f.value || !O.includes(K.key)) return;
    K.preventDefault();
    const Te = d.value || 0.1, xe = (s.value - r.value) / Te;
    if ([N, R, Z, z].includes(K.key)) {
      const B = (b.value ? [o.value ? N : R, h.value ? Z : z] : y.value !== o.value ? [N, z] : [R, z]).includes(K.key) ? 1 : -1, L = K.shiftKey ? 2 : K.ctrlKey ? 1 : 0;
      B === -1 && fe === s.value && !L && !Number.isInteger(xe) ? fe = fe - xe % 1 * Te : fe = fe + B * Te * G.value[L];
    } else if (K.key === Y) fe = r.value;
    else if (K.key === W) fe = s.value;
    else {
      const ce = K.key === j ? 1 : -1;
      fe = fe - ce * Te * (xe > 100 ? xe / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, fe));
  }
  function pe(K) {
    const fe = ie(K, e.modelValue);
    fe != null && (w.value = false, l("update:modelValue", fe));
  }
  return se(() => e.focused, (K) => {
    K && (w.value = false);
  }), le(() => {
    const K = me(y.value ? 100 - e.position : e.position, "%"), fe = p.value === "always" || p.value === true && e.focused || p.value === "hover" && (C.value || e.focused && !w.value);
    return S("div", { class: ne(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && I.value }, e.class, i.value]), style: ge([{ "--v-slider-thumb-position": K, "--v-slider-thumb-size": me(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!x.value, "aria-orientation": m.value, onKeydown: x.value ? void 0 : pe, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, w.value = true;
    } }, [S("div", { class: ne(["v-slider-thumb__surface", M.value, P.value]), style: ge(D.value) }, null), nt(S("div", { class: ne(["v-slider-thumb__ripple", M.value]), style: ge(D.value) }, null), [[zt, e.ripple, null, { circle: true, center: true }]]), g(Jc, { origin: "bottom center" }, { default: () => {
      var _a3;
      return [nt(S("div", { class: "v-slider-thumb__label-container" }, [S("div", { class: ne(["v-slider-thumb__label", E.value]), style: ge(A.value) }, [S("div", null, [((_a3 = n["thumb-label"]) == null ? void 0 : _a3.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? k.value : 1)]), S("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[On, fe]])];
    } })]);
  }), {};
} }), EP = U({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...we() }, "VSliderTrack"), Cb = te()({ name: "VSliderTrack", props: EP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const l = Ue(Td);
  if (!l) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: a, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: p, indexFromEnd: m } = l, { roundedClasses: h } = yt(i), { backgroundColorClasses: b, backgroundColorStyles: x } = Je(c), { backgroundColorClasses: V, backgroundColorStyles: I } = Je(u), k = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), y = _(() => f.value ? "height" : "width"), C = _(() => ({ [k.value]: "0%", [y.value]: "100%" })), w = _(() => e.stop - e.start), T = _(() => ({ [k.value]: me(e.start, "%"), [y.value]: me(w.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, E) => {
    var _a3;
    const A = D.value !== v.value && D.value !== p.value ? me(D.position, "%") : void 0;
    return S("div", { key: D.value, class: ne(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === p.value }]), style: { [k.value]: A } }, [(D.label || n["tick-label"]) && S("div", { class: "v-slider-track__tick-label" }, [((_a3 = n["tick-label"]) == null ? void 0 : _a3.call(n, { tick: D, index: E })) ?? D.label])]);
  }) : []);
  return le(() => S("div", { class: ne(["v-slider-track", h.value, e.class]), style: ge([{ "--v-slider-track-size": me(d.value), "--v-slider-tick-size": me(s.value) }, e.style]) }, [S("div", { class: ne(["v-slider-track__background", V.value, { "v-slider-track__background--opacity": !!a.value || !c.value }]), style: { ...C.value, ...I.value } }, null), S("div", { class: ne(["v-slider-track__fill", b.value]), style: { ...T.value, ...x.value } }, null), r.value && S("div", { class: ne(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), BP = U({ ...Pi(), ...xb(), ...Il(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Ru = te()({ name: "VSlider", inheritAttrs: false, props: BP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: l, attrs: a } = t;
  const o = H(), i = H(), { rtlClasses: r } = At(), s = kb(e), u = Ve(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: p, onSliderTouchstart: m, trackContainerRef: h, position: b, hasLabels: x, disabled: V, readonly: I, noKeyboard: k } = wb({ props: e, steps: s, onSliderStart: () => {
    !V.value && !I.value && l("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: M } = P;
    const D = v(M);
    !V.value && !I.value && (u.value = D), l("end", D);
  }, onSliderMove: (P) => {
    let { value: M } = P;
    !V.value && !I.value && (u.value = v(M));
  }, getActiveThumb: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el;
  } }), { isFocused: y, focus: C, blur: w } = Vl(e), T = _(() => b(u.value));
  return le(() => {
    const P = Gt.filterProps(e), [M, D] = tl(a), E = !!(e.label || n.label || n.prepend);
    return g(Gt, J({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || x.value, "v-slider--focused": y.value, "v-slider--pressed": f.value, "v-slider--disabled": V.value }, r.value, e.class], style: e.style }, P, M, { focused: y.value }), { ...n, prepend: E ? (A) => {
      var _a3, _b2;
      return S(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, A)) ?? (e.label ? g(ho, { id: A.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, A)]);
    } : void 0, default: (A) => {
      let { id: F, messagesId: j } = A;
      return S("div", { class: "v-slider__container", onMousedown: I.value ? void 0 : p, onTouchstartPassive: I.value ? void 0 : m }, [S("input", { id: F.value, name: e.name || F.value, disabled: V.value, readonly: I.value, tabindex: "-1", value: u.value }, null), g(Cb, { ref: h, start: 0, stop: T.value }, { "tick-label": n["tick-label"] }), g($u, J({ ref: o, "aria-describedby": j.value, focused: y.value, noKeyboard: k.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (W) => u.value = W, position: T.value, elevation: e.elevation, onFocus: C, onBlur: w, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Et({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, i);
} }), _b = U({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Pe, default: "$eyeDropper" }, ...we() }, "VColorPickerPreview"), $P = nn({ name: "VColorPickerPreview", props: _b(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: l } = lt(), a = new AbortController(), o = $(() => !e.disabled && !e.readonly);
  Mr(() => a.abort());
  async function i() {
    if (!nv || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: a.signal }), u = Si(pn(s.sRGBHex));
      n("update:color", { ...e.color ?? Ua, ...u });
    } catch {
    }
  }
  return le(() => {
    var _a3, _b2;
    return S("div", { class: ne(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: ge(e.style) }, [nv && !e.hideEyeDropper && S("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [g(je, { "aria-label": l("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), S("div", { class: "v-color-picker-preview__dot" }, [S("div", { style: { background: dh(e.color ?? Ua) } }, null)]), S("div", { class: "v-color-picker-preview__sliders" }, [g(Ru, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": l("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a3 = e.color) == null ? void 0 : _a3.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Ua, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && g(Ru, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": l("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Ua, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), RP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, FP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, LP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, OP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, NP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, HP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, zP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, WP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, jP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, UP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, GP = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, YP = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, KP = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, XP = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, qP = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, ZP = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, JP = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, QP = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, eT = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, tT = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, nT = { red: RP, pink: FP, purple: LP, deepPurple: OP, indigo: NP, blue: HP, lightBlue: zP, cyan: WP, teal: jP, green: UP, lightGreen: GP, lime: YP, yellow: KP, amber: XP, orange: qP, deepOrange: ZP, brown: JP, blueGrey: QP, grey: eT, shades: tT }, lT = U({ swatches: { type: Array, default: () => aT(nT) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...we() }, "VColorPickerSwatches");
function aT(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const oT = nn({ name: "VColorPickerSwatches", props: lT(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const l = $(() => !e.disabled && !e.readonly);
  function a(o) {
    !l.value || !o || n("update:color", o);
  }
  return le(() => S("div", { class: ne(["v-color-picker-swatches", e.class]), style: ge([{ maxHeight: me(e.maxHeight) }, e.style]) }, [S("div", null, [e.swatches.map((o) => S("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = pn(i), s = Si(r), u = ch(r);
    return S("div", { class: ne(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => a(s) }, [S("div", { style: { background: u } }, [e.color && Ft(e.color, s) ? g(qe, { size: "x-small", icon: "$success", color: Jw(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), iT = kl("v-picker-title"), ts = U({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...hd() }, "VPicker"), uo = te()({ name: "VPicker", props: ts(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: a } = Je(() => e.color);
  return le(() => {
    const o = Ul.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return g(Ul, J(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a3;
      return [!e.hideHeader && S("div", { key: "header", class: ne(["v-picker__header-wrapper", l.value]), style: ge([a.value]) }, [i && g(iT, { key: "picker-title" }, { default: () => {
        var _a4;
        return [((_a4 = n.title) == null ? void 0 : _a4.call(n)) ?? e.title];
      } }), n.header && S("div", { class: "v-picker__header" }, [n.header()])]), S("div", { class: "v-picker__body" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), n.actions && g(Fe, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [S("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), rT = U({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(da).includes(e) }, modes: { type: Array, default: () => Object.keys(da), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(da).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...ts({ hideHeader: true }), ...cn(_b(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), sT = nn({ name: "VColorPicker", props: rT(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "mode"), a = H(null), o = Ve(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = Si(pn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? CP(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: a.value ?? o.value.h } : null), { rtlClasses: r } = At();
  let s = true;
  se(o, (c) => {
    if (!s) {
      s = true;
      return;
    }
    c && (a.value = c.h);
  }, { immediate: true });
  const u = (c) => {
    s = false, a.value = c.h, o.value = c;
  };
  return fo(() => {
    e.modes.includes(l.value) || (l.value = e.modes[0]);
  }), pt({ VSlider: { color: void 0, trackColor: void 0, trackFillColor: void 0 } }), le(() => {
    const c = uo.filterProps(e);
    return g(uo, J(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": dh({ ...i.value ?? Ua, a: 1 }) }, e.style] }), { ...n, default: () => S(be, null, [!e.hideCanvas && g(kP, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && S("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && g($P, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !l.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && g(AP, { key: "edit", modes: e.modes, mode: l.value, "onUpdate:mode": (d) => l.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && g(oT, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), uT = U({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...Da({ filterKeys: ["title"] }), ...kd({ hideNoData: true, returnObject: true }), ...He(Di({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), cT = te()({ name: "VCombobox", props: uT(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a3;
  let { emit: n, slots: l } = t;
  const { t: a } = lt(), o = H(), i = re(false), r = re(true), s = re(false), u = H(), c = H(), d = re(-1);
  let f = false;
  const { items: v, transformIn: p, transformOut: m } = ud(e), { textColorClasses: h, textColorStyles: b } = Lt(() => {
    var _a4;
    return (_a4 = o.value) == null ? void 0 : _a4.color;
  }), { InputIcon: x } = Ii(e), V = Ve(e, "modelValue", [], (Q) => p(ut(Q)), (Q) => {
    const he = m(Q);
    return e.multiple ? he : he[0] ?? null;
  }), I = yo(e), k = $(() => e.closableChips && !I.isReadonly.value && !I.isDisabled.value), y = _(() => !!(e.chips || l.chip)), C = _(() => y.value || !!l.selection), w = re(!e.multiple && !C.value ? ((_a3 = V.value[0]) == null ? void 0 : _a3.title) ?? "" : ""), T = re(null), P = _({ get: () => w.value, set: async (Q) => {
    var _a4;
    if (w.value = Q ?? "", Q === null || Q === "" && !e.multiple && !C.value ? V.value = [] : !e.multiple && !C.value && (V.value = [Dn(e, Q)], Be(() => {
      var _a5;
      return (_a5 = c.value) == null ? void 0 : _a5.scrollToIndex(0);
    })), Q && e.multiple && ((_a4 = e.delimiters) == null ? void 0 : _a4.length)) {
      const he = Se(Q);
      he.length > 1 && (ve(he), w.value = "");
    }
    Q || (d.value = -1), r.value = !Q;
  } }), M = _(() => typeof e.counterValue == "function" ? e.counterValue(V.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? V.value.length : P.value.length), { filteredItems: D, getMatches: E } = Ma(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), A = _(() => e.hideSelected && T.value === null ? D.value.filter((Q) => !V.value.some((he) => he.value === Q.value)) : D.value), F = _(() => e.hideNoData && !A.value.length || I.isReadonly.value || I.isDisabled.value), j = Ve(e, "menu"), W = _({ get: () => j.value, set: (Q) => {
    var _a4;
    j.value && !Q && ((_a4 = u.value) == null ? void 0 : _a4.\u03A8openChildren.size) || Q && F.value || (j.value = Q);
  } }), { menuId: Y, ariaExpanded: N, ariaControls: R } = xd(e, W);
  se(w, (Q) => {
    f ? Be(() => f = false) : i.value && !W.value && (W.value = true), n("update:search", Q);
  }), se(V, (Q) => {
    var _a4;
    !e.multiple && !C.value && (w.value = ((_a4 = Q[0]) == null ? void 0 : _a4.title) ?? "");
  });
  const Z = _(() => V.value.map((Q) => Q.value)), z = _(() => A.value.find((Q) => Q.type === "item" && !Q.props.disabled)), O = _(() => {
    var _a4;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a4 = z.value) == null ? void 0 : _a4.title)) && A.value.length > 0 && !r.value && !s.value;
  }), G = H(), ie = H(), pe = H(), K = bd(G, o), { onTabKeydown: fe } = pd({ groups: [{ type: "element", contentRef: ie }, { type: "list", contentRef: G, displayItemsCount: () => A.value.length }, { type: "element", contentRef: pe }], onLeave: () => {
    var _a4;
    W.value = false, (_a4 = o.value) == null ? void 0 : _a4.focus();
  } });
  function Te(Q) {
    f = true, Be(() => f = false), e.openOnClear && (W.value = true);
  }
  function xe() {
    F.value || (W.value = true);
  }
  function ce(Q) {
    F.value || (i.value && (Q.preventDefault(), Q.stopPropagation()), W.value = !W.value);
  }
  function B(Q) {
    var _a4, _b2;
    Q.key === "Tab" && fe(Q), ((_a4 = G.value) == null ? void 0 : _a4.$el.contains(Q.target)) && (lo(Q) || Q.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function L(Q) {
    var _a4, _b2, _c2, _d2;
    if (xw(Q) || I.isReadonly.value) return;
    const he = (_a4 = o.value) == null ? void 0 : _a4.selectionStart, Ce = V.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(Q.key) && Q.preventDefault(), ["Enter", "ArrowDown"].includes(Q.key) && (W.value = true), ["Escape"].includes(Q.key) && (W.value = false), O.value && ["Enter", "Tab"].includes(Q.key) && z.value && !V.value.some((_e) => {
      let { value: Ae } = _e;
      return Ae === z.value.value;
    }) && ue(z.value), Q.key === "ArrowDown" && O.value && ((_b2 = G.value) == null ? void 0 : _b2.focus("next")), Q.key === "Enter" && P.value && (ue(Dn(e, P.value), true, true), C.value && (w.value = "")), ["Backspace", "Delete"].includes(Q.key)) {
      if (!e.multiple && C.value && V.value.length > 0 && !P.value) return ue(V.value[0], false);
      if (~d.value) {
        Q.preventDefault();
        const _e = d.value;
        ue(V.value[d.value], false), d.value = _e >= Ce - 1 ? Ce - 2 : _e;
      } else Q.key === "Backspace" && !P.value && (d.value = Ce - 1);
      return;
    }
    if (e.multiple) if (Q.key === "ArrowLeft") {
      if (d.value < 0 && he && he > 0) return;
      const _e = d.value > -1 ? d.value - 1 : Ce - 1;
      V.value[_e] ? d.value = _e : (d.value = -1, (_c2 = o.value) == null ? void 0 : _c2.setSelectionRange(P.value.length, P.value.length));
    } else if (Q.key === "ArrowRight") {
      if (d.value < 0) return;
      const _e = d.value + 1;
      V.value[_e] ? d.value = _e : (d.value = -1, (_d2 = o.value) == null ? void 0 : _d2.setSelectionRange(0, 0));
    } else ~d.value && lo(Q) && (d.value = -1);
  }
  function ee(Q) {
    var _a4;
    const he = ((_a4 = Q == null ? void 0 : Q.clipboardData) == null ? void 0 : _a4.getData("Text")) ?? "", Ce = Se(he);
    Ce.length > 1 && e.multiple && (Q.preventDefault(), ve(Ce));
  }
  function de() {
    var _a4;
    e.eager && ((_a4 = c.value) == null ? void 0 : _a4.calculateVisibleItems());
  }
  function oe() {
    var _a4;
    i.value && ((_a4 = o.value) == null ? void 0 : _a4.focus()), r.value = true, T.value = null;
  }
  function ue(Q) {
    let he = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Ce = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!Q || Q.props.disabled)) if (e.multiple) {
      const _e = V.value.findIndex((Re) => (e.valueComparator || Ft)(Re.value, Q.value)), Ae = he ?? !~_e;
      if (~_e) {
        const Re = Ae ? [...V.value, Q] : [...V.value];
        Re.splice(_e, 1), V.value = Re;
      } else Ae && (V.value = [...V.value, Q]);
      e.clearOnSelect && (P.value = "");
    } else {
      const _e = he !== false;
      V.value = _e ? [Q] : [], (!r.value || e.alwaysFilter) && w.value && (T.value = w.value), w.value = _e && !C.value ? Q.title : "", Be(() => {
        W.value = Ce, r.value = true;
      });
    }
  }
  function Se(Q) {
    const Ce = [`
`, ...e.delimiters ?? []].map(fr).join("|");
    return Q.split(new RegExp(`(?:${Ce})+`));
  }
  async function ve(Q) {
    for (let he of Q) he = he.trim(), he && (ue(Dn(e, he)), await Be());
  }
  function X(Q) {
    i.value = true, setTimeout(() => {
      s.value = true;
    });
  }
  function ae(Q) {
    s.value = false;
  }
  function Ie(Q) {
    var _a4, _b2;
    ((_b2 = (_a4 = u.value) == null ? void 0 : _a4.contentEl) == null ? void 0 : _b2.contains(Q.relatedTarget)) && (i.value = true);
  }
  return se(i, (Q, he) => {
    if (!(Q || Q === he) && (d.value = -1, W.value = false, P.value)) {
      if (e.multiple) {
        ue(Dn(e, P.value));
        return;
      }
      if (!C.value) return;
      V.value.some((Ce) => {
        let { title: _e } = Ce;
        return _e === P.value;
      }) ? w.value = "" : ue(Dn(e, P.value));
    }
  }), se(W, (Q) => {
    if (!e.hideSelected && Q && V.value.length && r.value) {
      const he = A.value.findIndex((Ce) => V.value.some((_e) => (e.valueComparator || Ft)(_e.value, Ce.value)));
      tt && window.requestAnimationFrame(() => {
        var _a4;
        he >= 0 && ((_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(he));
      });
    }
    Q && (T.value = null);
  }), se(v, (Q, he) => {
    W.value || i.value && !he.length && Q.length && (W.value = true);
  }), le(() => {
    const Q = !!(!e.hideNoData || A.value.length || l["prepend-item"] || l["append-item"] || l["no-data"]), he = V.value.length > 0, Ce = Qn.filterProps(e), _e = { search: P, filteredItems: D.value };
    return g(Qn, J({ ref: o }, Ce, { modelValue: P.value, "onUpdate:modelValue": (Ae) => P.value = Ae, focused: i.value, "onUpdate:focused": (Ae) => i.value = Ae, validationValue: V.externalValue, counterValue: M.value, dirty: he, class: ["v-combobox", { "v-combobox--active-menu": W.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: I.isReadonly.value, placeholder: he ? void 0 : e.placeholder, "onClick:clear": Te, "onMousedown:control": xe, onKeydown: L, onPaste: ee, onBlur: Ie, "aria-expanded": N.value, "aria-controls": R.value }), { ...l, default: (Ae) => {
      let { id: Re } = Ae;
      return S(be, null, [g(so, J({ id: Y.value, ref: u, modelValue: W.value, "onUpdate:modelValue": (Ge) => W.value = Ge, activator: "parent", contentClass: "v-combobox__content", disabled: F.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: de, onAfterLeave: oe }, e.menuProps), { default: () => [g(Ul, { onFocusin: X, onKeydown: B }, { default: () => [l["menu-header"] && S("header", { ref: ie }, [l["menu-header"](_e)]), Q && g(ro, J({ key: "combobox-list", ref: G, filterable: true, selected: Z.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Ge) => Ge.preventDefault(), selectable: !!A.value.length, onFocusout: ae, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${Re.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, K, e.listProps), { default: () => {
        var _a4, _b2, _c2;
        return [(_a4 = l["prepend-item"]) == null ? void 0 : _a4.call(l), !A.value.length && !e.hideNoData && (((_b2 = l["no-data"]) == null ? void 0 : _b2.call(l)) ?? g(An, { key: "no-data", title: a(e.noDataText) }, null)), g(Xr, { ref: c, renderless: true, items: A.value, itemKey: "value" }, { default: (Ge) => {
          var _a5, _b3, _c3;
          let { item: ze, index: dt, itemRef: at } = Ge;
          const an = J(ze.props, { ref: at, key: ze.value, active: O.value && ze === z.value ? true : void 0, onClick: () => ue(ze, null), "aria-posinset": dt + 1, "aria-setsize": A.value.length });
          return ze.type === "divider" ? ((_a5 = l.divider) == null ? void 0 : _a5.call(l, { props: ze.raw, index: dt })) ?? g(xn, J(ze.props, { key: `divider-${dt}` }), null) : ze.type === "subheader" ? ((_b3 = l.subheader) == null ? void 0 : _b3.call(l, { props: ze.raw, index: dt })) ?? g(bo, J(ze.props, { key: `subheader-${dt}` }), null) : ((_c3 = l.item) == null ? void 0 : _c3.call(l, { item: ze, index: dt, props: an })) ?? g(An, J(an, { role: "option" }), { prepend: (Nn) => {
            let { isSelected: ot } = Nn;
            return S(be, null, [e.multiple && !e.hideSelected ? g(Ln, { key: ze.value, modelValue: ot, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (on) => on.preventDefault() }, null) : void 0, ze.props.prependAvatar && g(wn, { image: ze.props.prependAvatar }, null), ze.props.prependIcon && g(qe, { icon: ze.props.prependIcon }, null)]);
          }, title: () => {
            var _a6;
            return r.value ? ze.title : Sd("v-combobox", ze.title, (_a6 = E(ze)) == null ? void 0 : _a6.title);
          } });
        } }), (_c2 = l["append-item"]) == null ? void 0 : _c2.call(l)];
      } }), l["menu-footer"] && S("footer", { ref: pe }, [l["menu-footer"](_e)])] })] }), V.value.map((Ge, ze) => {
        function dt(ot) {
          ot.stopPropagation(), ot.preventDefault(), ue(Ge, false);
        }
        const at = J(pl.filterProps(Ge.props), { "onClick:close": dt, onKeydown(ot) {
          ot.key !== "Enter" && ot.key !== " " || (ot.preventDefault(), ot.stopPropagation(), dt(ot));
        }, onMousedown(ot) {
          ot.preventDefault(), ot.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), an = y.value ? !!l.chip : !!l.selection, Nn = an ? Fr(y.value ? l.chip({ item: Ge, index: ze, props: at }) : l.selection({ item: Ge, index: ze })) : void 0;
        if (!(an && !Nn)) return S("div", { key: Ge.value, class: ne(["v-combobox__selection", ze === d.value && ["v-combobox__selection--selected", h.value]]), style: ge(ze === d.value ? b.value : {}) }, [y.value ? l.chip ? g(Fe, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: Ge.title } } }, { default: () => [Nn] }) : g(pl, J({ key: "chip", closable: k.value, size: "small", text: Ge.title, disabled: Ge.props.disabled }, at), null) : Nn ?? S("span", { class: "v-combobox__selection-text" }, [Ge.title, e.multiple && ze < V.value.length - 1 && S("span", { class: "v-combobox__selection-comma" }, [Le(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a4, _b2;
      for (var Ae = arguments.length, Re = new Array(Ae), Ge = 0; Ge < Ae; Ge++) Re[Ge] = arguments[Ge];
      return S(be, null, [(_a4 = l["append-inner"]) == null ? void 0 : _a4.call(l, ...Re), (!e.hideNoData || e.items.length) && e.menuIcon ? g(qe, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ce, onClick: Rr, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(x, { key: "append-icon", name: "appendInner", color: Re[0].iconColor.value }, null)]);
    } });
  }), Et({ isFocused: i, isPristine: r, menu: W, search: P, selectionIndex: d, filteredItems: D, select: ue }, o);
} }), dT = U({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), fT = te()({ name: "VConfirmEdit", props: dT(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = Ve(e, "modelValue"), o = H();
  ht(() => {
    o.value = structuredClone(cv(a.value));
  });
  const { t: i } = lt(), r = _(() => Ft(a.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = _(() => s("save")), c = _(() => s("cancel"));
  function d() {
    a.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(cv(a.value)), n("cancel");
  }
  function v(m) {
    return S(be, null, [g(je, J({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), g(je, J({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let p = false;
  return le(() => {
    var _a3;
    return S(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return p = true, v;
    } }), !e.hideActions && !p && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), Vb = U({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), Ib = Symbol.for("vuetify:datatable:expanded");
function ns(e) {
  const t = $(() => e.expandOnClick), n = Ve(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function l(r, s) {
    const u = new Set(n.value), c = De(r.value);
    if (s) u.add(c);
    else {
      const d = [...n.value].find((f) => De(f) === c);
      u.delete(d);
    }
    n.value = u;
  }
  function a(r) {
    const s = De(r.value);
    return [...n.value].some((u) => De(u) === s);
  }
  function o(r) {
    l(r, !a(r));
  }
  const i = { expand: l, expanded: n, expandOnClick: t, isExpanded: a, toggleExpand: o };
  return mt(Ib, i), i;
}
function Pb() {
  const e = Ue(Ib);
  if (!e) throw new Error("foo");
  return e;
}
const Ad = U({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), Tb = Symbol.for("vuetify:data-table-group");
function Dd(e) {
  return { groupBy: Ve(e, "groupBy") };
}
function ls(e) {
  const { disableSort: t, groupBy: n, sortBy: l } = e, a = H(/* @__PURE__ */ new Set()), o = _(() => n.value.map((c) => ({ ...c, order: c.order ?? false })).concat((t == null ? void 0 : t.value) ? [] : l.value));
  function i(c) {
    return a.value.has(c.id);
  }
  function r(c) {
    const d = new Set(a.value);
    i(c) ? d.delete(c.id) : d.add(c.id), a.value = d;
  }
  function s(c) {
    function d(f) {
      const v = [];
      for (const p of f.items) "type" in p && p.type === "group" ? v.push(...d(p)) : v.push(p);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: a, groupBy: n, extractRows: s, isGroupOpen: i };
  return mt(Tb, u), u;
}
function Ab() {
  const e = Ue(Tb);
  if (!e) throw new Error("Missing group!");
  return e;
}
function vT(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const l of e) {
    const a = ma(l.raw, t);
    n.has(a) || n.set(a, []), n.get(a).push(l);
  }
  return n;
}
function Db(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const a = vT(e, t[0]), o = [], i = t.slice(1);
  return a.forEach((r, s) => {
    const u = t[0], c = `${l}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? Db(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function Mb(e, t, n) {
  const l = [];
  for (const a of e) "type" in a && a.type === "group" ? (a.value != null && l.push(a), (t.has(a.id) || a.value == null) && (l.push(...Mb(a.items, t, n)), n && l.push({ ...a, type: "group-summary" }))) : l.push(a);
  return l;
}
function as(e, t, n, l) {
  const a = _(() => t.value.length ? Db(st(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? Mb(a.value, n.value, st(l)) : st(e));
  return { groups: a, flatItems: o };
}
function os(e) {
  let { page: t, itemsPerPage: n, sortBy: l, groupBy: a, search: o } = e;
  const i = _t("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: l.value, groupBy: a.value, search: o.value });
  let s = null;
  se(r, (u) => {
    Ft(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const Md = U({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), Eb = Symbol.for("vuetify:data-table-pagination");
function Ed(e) {
  const t = Ve(e, "page", void 0, (l) => Number(l ?? 1)), n = Ve(e, "itemsPerPage", void 0, (l) => Number(l ?? 10));
  return { page: t, itemsPerPage: n };
}
function Bd(e) {
  const { page: t, itemsPerPage: n, itemsLength: l } = e, a = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = _(() => n.value === -1 ? l.value : Math.min(l.value, a.value + n.value)), i = _(() => n.value === -1 || l.value === 0 ? 1 : Math.ceil(l.value / n.value));
  se([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = et(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = et(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = et(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: a, stopIndex: o, pageCount: i, itemsLength: l, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return mt(Eb, d), d;
}
function mT() {
  const e = Ue(Eb);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Bb(e) {
  const t = _t("usePaginatedItems"), { items: n, startIndex: l, stopIndex: a, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? st(n) : st(n).slice(l.value, a.value));
  return se(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function gT(e) {
  const { sortedItems: t, paginate: n, group: l } = e, a = st(e.pageBy);
  if (a === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = l(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (a === "group") {
    const { flatItems: o, groups: i } = l(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((h) => h.type === "group" && h.id === d), p = o.value.findIndex((h) => h.type === "group" && h.id === f), m = o.value.findIndex((h, b) => b > p && h.type === "group" && h.depth === 0);
      return o.value.slice(v, m === -1 ? void 0 : m);
    });
    return { pageCount: s, setItemsPerPage: u, paginatedItems: c };
  }
  if (a === "any") {
    const { flatItems: o } = l(t), { paginatedItems: i, pageCount: r, setItemsPerPage: s } = n(o);
    return { pageCount: r, setItemsPerPage: s, paginatedItems: i };
  }
  throw new Error(`Unrecognized pagination target ${a}`);
}
const hT = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a3;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a3 = t[0]) == null ? void 0 : _a3.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, $b = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: l } = e;
  for (const a of t) n ? l.add(a.value) : l.delete(a.value);
  return l;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: l } = e;
  return $b.select({ items: n, value: t, selected: l });
} }, yT = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: l } = e;
  for (const a of t) n ? l.add(a.value) : l.delete(a.value);
  return l;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((l) => l.value) : []);
} }, Rb = U({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Fb = Symbol.for("vuetify:data-table-selection");
function is(e, t) {
  let { allItems: n, currentPage: l } = t;
  const a = Ve(e, "modelValue", e.modelValue, (x) => {
    const V = e.valueComparator;
    return V ? new Set(ut(x).map((I) => {
      var _a3;
      return ((_a3 = n.value.find((k) => V(I, k.value))) == null ? void 0 : _a3.value) ?? I;
    })) : new Set(ut(x).map((I) => {
      var _a3, _b2;
      return Hl(I) ? ((_a3 = n.value.find((k) => I === k.value)) == null ? void 0 : _a3.value) ?? I : ((_b2 = n.value.find((k) => Ft(I, k.value))) == null ? void 0 : _b2.value) ?? I;
    }));
  }, (x) => [...x.values()]), o = _(() => n.value.filter((x) => x.selectable)), i = _(() => st(l).filter((x) => x.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return hT;
      case "all":
        return yT;
      case "page":
      default:
        return $b;
    }
  }), s = re(null);
  function u(x) {
    return ut(x).every((V) => a.value.has(V.value));
  }
  function c(x) {
    return ut(x).some((V) => a.value.has(V.value));
  }
  function d(x, V) {
    const I = r.value.select({ items: x, value: V, selected: new Set(a.value) });
    a.value = I;
  }
  function f(x, V, I) {
    const k = [], y = st(l);
    if (V = V ?? y.findIndex((C) => C.value === x.value), e.selectStrategy !== "single" && (I == null ? void 0 : I.shiftKey) && s.value !== null) {
      const [C, w] = [s.value, V].sort((T, P) => T - P);
      k.push(...y.slice(C, w + 1).filter((T) => T.selectable));
    } else k.push(x), s.value = V;
    d(k, !u([x]));
  }
  function v(x) {
    const V = r.value.selectAll({ value: x, allItems: o.value, currentPage: i.value, selected: new Set(a.value) });
    a.value = V;
  }
  const p = _(() => a.value.size > 0), m = _(() => {
    const x = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!x.length && u(x);
  }), b = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: p, allSelected: m, showSelectAll: $(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return mt(Fb, b), b;
}
function rs() {
  const e = Ue(Fb);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Lb = U({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Ob = Symbol.for("vuetify:data-table-sort");
function ss(e) {
  const t = $(() => e.initialSortOrder), n = Ve(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: $(() => e.multiSort), mustSort: $(() => e.mustSort) };
}
function bT(e, t) {
  if (!ga(e)) return { active: !!e };
  const { key: n, mode: l, modifier: a } = e, o = a === "alt" && (t == null ? void 0 : t.altKey) || a === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? l === "append" ? "prepend" : "append" : l };
}
function us(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: l, multiSort: a, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, p = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === p ? l.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = p;
    else {
      const { active: m, mode: h } = bT(a.value, c);
      m ? h === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return mt(Ob, s), s;
}
function Nb() {
  const e = Ue(Ob);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function $d(e, t, n, l) {
  const a = lt();
  return { sortedItems: _(() => {
    var _a3, _b2;
    return n.value.length ? pT(t.value, n.value, a.current.value, { transform: l == null ? void 0 : l.transform, sortFunctions: { ...e.customKeySort, ...(_a3 = l == null ? void 0 : l.sortFunctions) == null ? void 0 : _a3.value }, sortRawFunctions: (_b2 = l == null ? void 0 : l.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function pT(e, t, n, l) {
  const a = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (l == null ? void 0 : l.transform) ? l.transform(i) : i]).sort((i, r) => {
    var _a3, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = ma(i[1], c), v = ma(r[1], c), p = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [p, m] = [m, p]), (_a3 = l == null ? void 0 : l.sortRawFunctions) == null ? void 0 : _a3[c]) {
        const h = l.sortRawFunctions[c](p, m);
        if (h == null) continue;
        if (u = true, h) return h;
      }
      if ((_b2 = l == null ? void 0 : l.sortFunctions) == null ? void 0 : _b2[c]) {
        const h = l.sortFunctions[c](f, v);
        if (h == null) continue;
        if (u = true, h) return h;
      }
      if (!u && (f instanceof Date && v instanceof Date && (f = f.getTime(), v = v.getTime()), [f, v] = [f, v].map((h) => h != null ? h.toString().toLocaleLowerCase() : h), f !== v)) return To(f) && To(v) ? 0 : To(f) ? -1 : To(v) ? 1 : !isNaN(f) && !isNaN(v) ? Number(f) - Number(v) : a.compare(f, v);
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const ST = U({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function xT(e, t) {
  const n = e.returnObject ? t : wt(t, e.itemValue), l = wt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: l, raw: t };
}
function kT(e, t) {
  const n = [];
  for (const l of t) n.push(xT(e, l));
  return n;
}
function wT(e) {
  return { items: _(() => kT(e, e.items)) };
}
const CT = U({ search: String, loading: Boolean, itemsLength: [Number, String], ...we(), ...ST(), ...Rb(), ...Lb(), ...Md({ itemsPerPage: 5 }), ...Vb(), ...Ad(), ...Da(), ...$e(), ...wl({ transition: { component: li, hideOnLeave: true } }) }, "VDataIterator"), _T = te()({ name: "VDataIterator", props: CT(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "groupBy"), a = $(() => e.search), { items: o } = wT(e), { filteredItems: i } = Ma(e, o, a, { transform: (G) => G.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = ss(e), { page: d, itemsPerPage: f } = Ed(e), { toggleSort: v } = us({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: p, opened: m, extractRows: h, isGroupOpen: b, toggleGroup: x } = ls({ groupBy: l, sortBy: s }), { sortedItems: V } = $d(e, i, p, { transform: (G) => G.raw }), { flatItems: I } = as(V, l, m, false), k = $(() => !To(e.itemsLength)), y = $(() => k.value ? Number(e.itemsLength) : I.value.length), { startIndex: C, stopIndex: w, pageCount: T, prevPage: P, nextPage: M, setItemsPerPage: D, setPage: E } = Bd({ page: d, itemsPerPage: f, itemsLength: y }), A = re([]), F = _(() => k.value ? I.value : A.value);
  Ht(() => !k.value, () => {
    const { paginatedItems: G } = Bb({ items: I, startIndex: C, stopIndex: w, itemsPerPage: f });
    ht(() => {
      A.value = G.value;
    });
  });
  const j = _(() => h(F.value)), { isSelected: W, select: Y, selectAll: N, toggleSelect: R } = is(e, { allItems: o, currentPage: j }), { isExpanded: Z, toggleExpand: z } = ns(e);
  os({ page: d, itemsPerPage: f, sortBy: s, groupBy: l, search: a });
  const O = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: T.value, toggleSort: v, prevPage: P, nextPage: M, setPage: E, setItemsPerPage: D, isSelected: W, select: Y, selectAll: N, toggleSelect: R, isExpanded: Z, toggleExpand: z, isGroupOpen: b, toggleGroup: x, items: j.value, itemsCount: i.value.length, groupedItems: F.value }));
  return le(() => g(e.tag, { class: ne(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: ge(e.style) }, { default: () => {
    var _a3, _b2;
    return [(_a3 = n.header) == null ? void 0 : _a3.call(n, O.value), g(tn, { transition: e.transition }, { default: () => {
      var _a4, _b3;
      return [e.loading ? g(Ci, { key: "loader", name: "v-data-iterator", active: true }, { default: (G) => {
        var _a5;
        return (_a5 = n.loader) == null ? void 0 : _a5.call(n, G);
      } }) : S("div", { key: "items" }, [F.value.length ? (_a4 = n.default) == null ? void 0 : _a4.call(n, O.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, O.value)];
  } })), {};
} });
function VT() {
  const e = H([]);
  vg(() => e.value = []);
  function t(n, l) {
    e.value[l] = n;
  }
  return { refs: e, updateRef: t };
}
const IT = U({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Pe, default: "$first" }, prevIcon: { type: Pe, default: "$prev" }, nextIcon: { type: Pe, default: "$next" }, lastIcon: { type: Pe, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Kt(), ...we(), ...St(), ...Pt(), ...ct(), ...al(), ...$e({ tag: "nav" }), ...Ke(), ...Vn({ variant: "text" }) }, "VPagination"), Fu = te()({ name: "VPagination", props: IT(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const a = Ve(e, "modelValue"), { t: o, n: i } = lt(), { isRtl: r } = At(), { themeClasses: s } = Ze(e), { width: u } = Cn(), c = re(-1);
  pt(void 0, { scoped: true });
  const { resizeRef: d } = Tn((w) => {
    if (!w.length) return;
    const { target: T, contentRect: P } = w[0], M = T.querySelector(".v-pagination__list > *");
    if (!M) return;
    const D = P.width, E = M.offsetWidth + parseFloat(getComputedStyle(M).marginRight) * 2;
    c.value = m(D, E);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), p = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(w, T) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((w - T * P) / T).toFixed(2))));
  }
  const h = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (p.value <= 0) return [];
    if (p.value === 1) return [a.value];
    if (f.value <= p.value) return Yn(f.value, v.value);
    const w = p.value % 2 === 0, T = w ? p.value / 2 : Math.floor(p.value / 2), P = w ? T : T + 1, M = f.value - T;
    if (P - a.value >= 0) return [...Yn(Math.max(1, p.value - 1), v.value), e.ellipsis, f.value];
    if (a.value - M >= (w ? 1 : 0)) {
      const D = p.value - 1, E = f.value - D + v.value;
      return [v.value, e.ellipsis, ...Yn(D, E)];
    } else {
      const D = Math.max(1, p.value - 2), E = D === 1 ? a.value : a.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...Yn(D, E), e.ellipsis, f.value];
    }
  });
  function b(w, T, P) {
    w.preventDefault(), a.value = T, P && l(P, T);
  }
  const { refs: x, updateRef: V } = VT();
  pt({ VPaginationBtn: { color: $(() => e.color), border: $(() => e.border), density: $(() => e.density), size: $(() => e.size), variant: $(() => e.variant), rounded: $(() => e.rounded), elevation: $(() => e.elevation) } });
  const I = _(() => h.value.map((w, T) => {
    const P = (M) => V(M, T);
    if (typeof w == "string") return { isActive: false, key: `ellipsis-${T}`, page: w, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const M = w === a.value;
      return { isActive: M, key: w, page: i(w), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: M ? e.activeColor : e.color, "aria-current": M, "aria-label": o(M ? e.currentPageAriaLabel : e.pageAriaLabel, w), onClick: (D) => b(D, w) } };
    }
  })), k = _(() => {
    const w = !!e.disabled || a.value <= v.value, T = !!e.disabled || a.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => b(P, v.value, "first"), disabled: w, "aria-label": o(e.firstAriaLabel), "aria-disabled": w } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => b(P, a.value - 1, "prev"), disabled: w, "aria-label": o(e.previousAriaLabel), "aria-disabled": w }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => b(P, a.value + 1, "next"), disabled: T, "aria-label": o(e.nextAriaLabel), "aria-disabled": T }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => b(P, v.value + f.value - 1, "last"), disabled: T, "aria-label": o(e.lastAriaLabel), "aria-disabled": T } : void 0 };
  });
  function y() {
    var _a3;
    const w = a.value - v.value;
    (_a3 = x.value[w]) == null ? void 0 : _a3.$el.focus();
  }
  function C(w) {
    w.key === ru.left && !e.disabled && a.value > Number(e.start) ? (a.value = a.value - 1, Be(y)) : w.key === ru.right && !e.disabled && a.value < v.value + f.value - 1 && (a.value = a.value + 1, Be(y));
  }
  return le(() => g(e.tag, { ref: d, class: ne(["v-pagination", s.value, e.class]), style: ge(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [S("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && S("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(k.value.first) : g(je, J({ _as: "VPaginationBtn" }, k.value.first), null)]), S("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(k.value.prev) : g(je, J({ _as: "VPaginationBtn" }, k.value.prev), null)]), I.value.map((w, T) => S("li", { key: w.key, class: ne(["v-pagination__item", { "v-pagination__item--is-active": w.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(w) : g(je, J({ _as: "VPaginationBtn" }, w.props), { default: () => [w.page] })])), S("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(k.value.next) : g(je, J({ _as: "VPaginationBtn" }, k.value.next), null)]), e.showFirstLastPage && S("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(k.value.last) : g(je, J({ _as: "VPaginationBtn" }, k.value.last), null)])])] })), {};
} }), Rd = U({ color: String, prevIcon: { type: Pe, default: "$prev" }, nextIcon: { type: Pe, default: "$next" }, firstIcon: { type: Pe, default: "$first" }, lastIcon: { type: Pe, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), ci = te()({ name: "VDataTableFooter", props: Rd(), setup(e, t) {
  let { slots: n } = t;
  const { t: l } = lt(), { page: a, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = mT(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? l("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? l(f.title) : f.title }));
  return le(() => {
    var _a3;
    const f = Fu.filterProps(e);
    return S("div", { class: "v-data-table-footer" }, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n), S("div", { class: "v-data-table-footer__items-per-page" }, [S("span", null, [l(e.itemsPerPageText)]), g(wd, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": l(e.itemsPerPageText), hideDetails: true }, null)]), S("div", { class: "v-data-table-footer__info" }, [S("div", null, [l(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), S("div", { class: "v-data-table-footer__pagination" }, [g(Fu, J({ modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, He(f, ["color"])), null)])]);
  }), {};
} }), di = l1({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const l = e.tag ?? "td", a = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return g(l, { class: ne(["v-data-table__td", { "v-data-table-column--fixed": a === "start", "v-data-table-column--fixed-end": a === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: me(e.height), width: me(e.width), maxWidth: me(e.maxWidth), left: a === "start" ? me(e.fixedOffset || null) : void 0, right: a === "end" ? me(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? me(e.indent) : void 0 } }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } });
}), PT = U({ headers: Array }, "DataTable-header"), Hb = Symbol.for("vuetify:data-table-headers"), zb = { title: "", sortable: false }, TT = { ...zb, width: 48 };
function AT() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({ element: n, priority: 0 }));
  return { enqueue: (n, l) => {
    let a = false;
    for (let o = 0; o < t.length; o++) if (t[o].priority > l) {
      t.splice(o, 0, { element: n, priority: l }), a = true;
      break;
    }
    a || t.push({ element: n, priority: l });
  }, size: () => t.length, count: () => {
    let n = 0;
    if (!t.length) return 0;
    const l = Math.floor(t[0].priority);
    for (let a = 0; a < t.length; a++) Math.floor(t[a].priority) === l && (n += 1);
    return n;
  }, dequeue: () => t.shift() };
}
function Lu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) Lu(n, t);
  return t;
}
function Wb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Wb(n.children, t);
  return t;
}
function DT(e) {
  if (e.key) {
    if (e.key === "data-table-group") return zb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return TT;
  }
}
function Fd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Fd(n, t + 1))) : t;
}
function MT(e) {
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
  let l = 0;
  for (let o = 0; o < e.length; o++) l = jb(e[o], l);
  let a = 0;
  for (let o = e.length - 1; o >= 0; o--) a = Ub(e[o], a);
}
function jb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = jb(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function Ub(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = Ub(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function ET(e, t) {
  const n = [];
  let l = 0;
  const a = AT(e);
  for (; a.size() > 0; ) {
    let i = a.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = a.dequeue(), d = t - l - Fd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? Lu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, l + 2);
        a.enqueue(f, l + d + v);
      }
      s += 1, i -= 1;
    }
    l += 1, n.push(r);
  }
  return { columns: e.map((i) => Lu(i)).flat(), headers: n };
}
function Gb(e) {
  const t = [];
  for (const n of e) {
    const l = { ...DT(n), ...n }, a = l.key ?? (typeof l.value == "string" ? l.value : null), o = l.value ?? a ?? null, i = { ...l, key: a, value: o, sortable: l.sortable ?? (l.key != null || !!l.sort), children: l.children ? Gb(l.children) : void 0 };
    t.push(i);
  }
  return t;
}
function Ld(e, t) {
  const n = H([]), l = H([]), a = H({}), o = H({}), i = H({});
  ht(() => {
    var _a3, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: el(m) }))).slice(), c = Wb(u);
    ((_a3 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a3.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = Gb(u);
    MT(d);
    const f = Math.max(...d.map((m) => Fd(m))) + 1, v = ET(d, f);
    n.value = v.headers, l.value = v.columns;
    const p = v.headers.flat(1);
    for (const m of p) m.key && (m.sortable && (m.sort && (a.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: l, sortFunctions: a, sortRawFunctions: o, filterFunctions: i };
  return mt(Hb, r), r;
}
function cs() {
  const e = Ue(Hb);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Yb = U({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Pe }, sortAscIcon: { type: Pe, default: "$sortAsc" }, sortDescIcon: { type: Pe, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...St(), ...Ca(), ...Ur() }, "VDataTableHeaders"), pa = te()({ name: "VDataTableHeaders", props: Yb(), setup(e, t) {
  let { slots: n } = t;
  const { t: l } = lt(), { toggleSort: a, sortBy: o, isSorted: i } = Nb(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = rs(), { columns: d, headers: f } = cs(), { loaderClasses: v } = wi(e);
  function p(T, P) {
    if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
    const M = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
    return { position: "sticky", left: M === "start" ? me(T.fixedOffset) : void 0, right: M === "end" ? me(T.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(T, P) {
    T.key === "Enter" && !e.disableSort && a(P, T);
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
  const { backgroundColorClasses: b, backgroundColorStyles: x } = Je(() => e.color), { displayClasses: V, mobile: I } = Cn(e), k = _(() => ({ headers: f.value, columns: d.value, toggleSort: a, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: h })), y = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, V.value, v.value]), C = (T) => {
    let { column: P, x: M, y: D } = T;
    const E = P.key === "data-table-select" || P.key === "data-table-expand", A = P.key === "data-table-group" && P.width === 0 && !P.title, F = J(e.headerProps ?? {}, P.headerProps ?? {});
    return g(di, J({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...y.value], style: { width: me(P.width), minWidth: me(P.minWidth), maxWidth: me(P.maxWidth), ...p(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: E, empty: A, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (j) => a(P, j) : void 0, onKeydown: P.sortable ? (j) => m(j, P) : void 0 }, F), { default: () => {
      var _a3;
      const j = `header.${P.key}`, W = { column: P, selectAll: u, isSorted: i, toggleSort: a, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: h };
      return n[j] ? n[j](W) : A ? "" : P.key === "data-table-select" ? ((_a3 = n["header.data-table-select"]) == null ? void 0 : _a3.call(n, W)) ?? (c.value && g(Ln, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : S("div", { class: "v-data-table-header__content" }, [S("span", null, [P.title]), P.sortable && !e.disableSort && g(qe, { key: "icon", class: "v-data-table-header__sort-icon", icon: h(P) }, null), e.multiSort && i(P) && S("div", { key: "badge", class: ne(["v-data-table-header__sort-badge", ...b.value]), style: ge(x.value) }, [o.value.findIndex((Y) => Y.key === P.key) + 1])]);
    } });
  }, w = () => {
    const T = _(() => d.value.filter((M) => (M == null ? void 0 : M.sortable) && !e.disableSort)), P = d.value.find((M) => M.key === "data-table-select");
    return g(di, J({ tag: "th", class: [...y.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [S("div", { class: "v-data-table-header__content" }, [g(wd, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: T.value, label: l("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => g(Ln, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (M) => {
      var _a3;
      return g(pl, { onClick: ((_a3 = M.item.raw) == null ? void 0 : _a3.sortable) ? () => a(M.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [M.item.title, g(qe, { class: ne(["v-data-table__td-sort-icon", i(M.item.raw) && "v-data-table__td-sort-icon-active"]), icon: h(M.item.raw), size: "small" }, null)] });
    } })])] });
  };
  le(() => I.value ? S("tr", null, [g(w, null, null)]) : S(be, null, [n.headers ? n.headers(k.value) : f.value.map((T, P) => S("tr", null, [T.map((M, D) => g(C, { column: M, x: D, y: P }, null))])), e.loading && S("tr", { class: "v-data-table-progress" }, [S("th", { colspan: d.value.length }, [g(Ci, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), Kb = U({ item: { type: Object, required: true }, groupCollapseIcon: { type: Pe, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Pe, default: "$tableGroupExpand" }, ...St() }, "VDataTableGroupHeaderRow"), BT = te()({ name: "VDataTableGroupHeaderRow", props: Kb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: l, toggleGroup: a, extractRows: o } = Ab(), { isSelected: i, isSomeSelected: r, select: s } = rs(), { columns: u } = cs(), c = _(() => o([e.item])), d = $(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => S("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a3, _b2;
    if (f.key === "data-table-group") {
      const v = l(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, p = () => a(e.item);
      return ((_a3 = n["data-table-group"]) == null ? void 0 : _a3.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: p } })) ?? g(di, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [g(je, { size: "small", variant: "text", icon: v, onClick: p }, null), S("span", null, [e.item.value]), S("span", null, [Le("("), c.value.length, Le(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((b) => b.selectable), p = v.length > 0 && i(v), m = r(v) && !p, h = (b) => s(v, b);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: p, indeterminate: m, "onUpdate:modelValue": h } })) ?? g(di, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [g(Ln, { density: e.density, disabled: v.length === 0, modelValue: p, indeterminate: m, "onUpdate:modelValue": h }, null)] });
    }
    return "";
  })]);
} }), Xb = U({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Pe, default: "$collapse" }, expandIcon: { type: Pe, default: "$expand" }, onClick: Nt(), onContextmenu: Nt(), onDblclick: Nt(), ...St(), ...Ca() }, "VDataTableRow"), Od = te()({ name: "VDataTableRow", props: Xb(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: l, mobile: a } = Cn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = rs(), { isExpanded: c, toggleExpand: d } = Pb(), { toggleSort: f, sortBy: v, isSorted: p } = Nb(), { columns: m } = cs();
  le(() => S("tr", { class: ne(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, l.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((h, b) => {
    const x = e.item, V = `item.${h.key}`, I = `header.${h.key}`, k = { index: e.index, item: x.raw, internalItem: x, value: ma(x.columns, h.key), column: h, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, y = { column: h, selectAll: u, isSorted: p, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value, column: h }) : e.cellProps, w = typeof h.cellProps == "function" ? h.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value }) : h.cellProps, T = h.key === "data-table-select" || h.key === "data-table-expand", P = h.key === "data-table-group" && h.width === 0 && !h.title;
    return g(di, J({ align: h.align, indent: h.indent, class: { "v-data-table__td--expanded-row": h.key === "data-table-expand", "v-data-table__td--select-row": h.key === "data-table-select" }, fixed: h.fixed, fixedOffset: h.fixedOffset, fixedEndOffset: h.fixedEndOffset, lastFixed: h.lastFixed, firstFixedEnd: h.firstFixedEnd, maxWidth: a.value ? void 0 : h.maxWidth, noPadding: T, empty: P, nowrap: h.nowrap, width: a.value ? void 0 : h.width }, C, w), { default: () => {
      var _a3, _b2, _c2, _d2;
      if (h.key === "data-table-select") return ((_a3 = n["item.data-table-select"]) == null ? void 0 : _a3.call(n, { ...k, props: { color: e.color, disabled: !x.selectable, modelValue: o([x]), onClick: Ri(() => i(x), ["stop"]) } })) ?? g(Ln, { color: e.color, disabled: !x.selectable, density: e.density, modelValue: o([x]), onClick: Ri((D) => i(x, e.index, D), ["stop"]) }, null);
      if (h.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...k, props: { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Ri(() => d(x), ["stop"]) } })) ?? g(je, { icon: c(x) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Ri(() => d(x), ["stop"]) }, null);
      if (n[V] && !a.value) return n[V](k);
      const M = Ee(k.value);
      return a.value ? S(be, null, [S("div", { class: "v-data-table__td-title" }, [((_c2 = n[I]) == null ? void 0 : _c2.call(n, y)) ?? h.title]), S("div", { class: "v-data-table__td-value" }, [((_d2 = n[V]) == null ? void 0 : _d2.call(n, k)) ?? M])]) : M;
    } });
  })]));
} }), qb = U({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...cn(Xb(), ["collapseIcon", "expandIcon", "density"]), ...cn(Kb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...Ca() }, "VDataTableRows"), Sa = te()({ name: "VDataTableRows", inheritAttrs: false, props: qb(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { columns: a } = cs(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = Pb(), { isSelected: s, toggleSelect: u } = rs(), { toggleGroup: c, isGroupOpen: d } = Ab(), { t: f } = lt(), { mobile: v } = Cn(e);
  return le(() => {
    var _a3, _b2;
    const p = cn(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || l.loading) ? S("tr", { class: "v-data-table-rows-loading", key: "loading" }, [S("td", { colspan: a.value.length }, [((_a3 = l.loading) == null ? void 0 : _a3.call(l)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? S("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [S("td", { colspan: a.value.length }, [((_b2 = l["no-data"]) == null ? void 0 : _b2.call(l)) ?? f(e.noDataText)])]) : S(be, null, [e.items.map((m, h) => {
      var _a4, _b3;
      if (m.type === "group") {
        const V = { index: h, item: m, columns: a.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return l["group-header"] ? l["group-header"](V) : g(BT, J({ key: `group-header_${m.id}`, item: m }, Sn(n, ":groupHeader", () => V), p), l);
      }
      if (m.type === "group-summary") {
        const V = { index: h, item: m, columns: a.value, toggleGroup: c };
        return ((_a4 = l["group-summary"]) == null ? void 0 : _a4.call(l, V)) ?? "";
      }
      const b = { index: m.virtualIndex ?? h, item: m.raw, internalItem: m, columns: a.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, x = { ...b, props: J({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: h, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, Sn(n, ":row", () => b), typeof e.rowProps == "function" ? e.rowProps({ item: b.item, index: b.index, internalItem: b.internalItem }) : e.rowProps) };
      return S(be, { key: x.props.key }, [l.item ? l.item(x) : g(Od, x.props, l), r(m) && ((_b3 = l["expanded-row"]) == null ? void 0 : _b3.call(l, b))]);
    })]);
  }), {};
} }), Zb = U({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...we(), ...St(), ...$e(), ...Ke() }, "VTable"), xa = te()({ name: "VTable", props: Zb(), setup(e, t) {
  let { slots: n, emit: l } = t;
  const { themeClasses: a } = Ze(e), { densityClasses: o } = Wt(e);
  return le(() => g(e.tag, { class: ne(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, a.value, o.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3, _b2, _c2;
    return [(_a3 = n.top) == null ? void 0 : _a3.call(n), n.default ? S("div", { class: "v-table__wrapper", style: { height: me(e.height) } }, [S("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), $T = U({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function RT(e, t, n, l) {
  const a = e.returnObject ? t : wt(t, e.itemValue), o = wt(t, e.itemSelectable, true), i = l.reduce((r, s) => (s.key != null && (r[s.key] = wt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? wt(t, e.itemValue) : a, index: n, value: a, selectable: o, columns: i, raw: t };
}
function FT(e, t, n) {
  return t.map((l, a) => RT(e, l, a, n));
}
function Nd(e, t) {
  return { items: _(() => FT(e, e.items, t.value)) };
}
const Hd = U({ ...qb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...Vb(), ...Ad(), ...PT(), ...$T(), ...Rb(), ...Lb(), ...He(Yb(), ["multiSort", "initialSortOrder"]), ...Zb() }, "DataTable"), LT = U({ ...Md(), ...Hd(), ...Da(), ...Rd() }, "VDataTable"), OT = te()({ name: "VDataTable", props: LT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { groupBy: a } = Dd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = ss(e), { page: u, itemsPerPage: c } = Ed(e), { disableSort: d } = co(e), { columns: f, headers: v, sortFunctions: p, sortRawFunctions: m, filterFunctions: h } = Ld(e, { groupBy: a, showSelect: $(() => e.showSelect), showExpand: $(() => e.showExpand) }), { items: b } = Nd(e, f), x = $(() => e.search), { filteredItems: V } = Ma(e, b, x, { transform: (ie) => ie.columns, customKeyFilter: h }), { toggleSort: I } = us({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: k, opened: y, extractRows: C, isGroupOpen: w, toggleGroup: T } = ls({ groupBy: a, sortBy: i, disableSort: d }), { sortedItems: P } = $d(e, V, k, { transform: (ie) => ({ ...ie.raw, ...ie.columns }), sortFunctions: p, sortRawFunctions: m }), M = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: E, paginatedItems: A } = gT({ pageBy: M, sortedItems: P, paginate: (ie) => {
    const pe = _(() => st(ie).length), { startIndex: K, stopIndex: fe, pageCount: Te, setItemsPerPage: xe } = Bd({ page: u, itemsPerPage: c, itemsLength: pe }), { paginatedItems: ce } = Bb({ items: ie, startIndex: K, stopIndex: fe, itemsPerPage: c });
    return { paginatedItems: ce, pageCount: Te, setItemsPerPage: xe };
  }, group: (ie) => as(ie, a, y, () => !!l["group-summary"]) }), F = _(() => C(A.value)), { isSelected: j, select: W, selectAll: Y, toggleSelect: N, someSelected: R, allSelected: Z } = is(e, { allItems: b, currentPage: F }), { isExpanded: z, toggleExpand: O } = ns(e);
  os({ page: u, itemsPerPage: c, sortBy: i, groupBy: a, search: x }), pt({ VDataTableRows: { hideNoData: $(() => e.hideNoData), noDataText: $(() => e.noDataText), loading: $(() => e.loading), loadingText: $(() => e.loadingText) } });
  const G = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: I, setItemsPerPage: E, someSelected: R.value, allSelected: Z.value, isSelected: j, select: W, selectAll: Y, toggleSelect: N, isExpanded: z, toggleExpand: O, isGroupOpen: w, toggleGroup: T, items: F.value.map((ie) => ie.raw), internalItems: F.value, groupedItems: A.value, columns: f.value, headers: v.value }));
  return le(() => {
    const ie = ci.filterProps(e), pe = pa.filterProps(He(e, ["multiSort"])), K = Sa.filterProps(e), fe = xa.filterProps(e);
    return g(xa, J({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, fe, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = l.top) == null ? void 0 : _a3.call(l, G.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return l.default ? l.default(G.value) : S(be, null, [(_a3 = l.colgroup) == null ? void 0 : _a3.call(l, G.value), !e.hideDefaultHeader && S("thead", { key: "thead" }, [g(pa, J(pe, { multiSort: !!e.multiSort }), l)]), (_b2 = l.thead) == null ? void 0 : _b2.call(l, G.value), !e.hideDefaultBody && S("tbody", null, [(_c2 = l["body.prepend"]) == null ? void 0 : _c2.call(l, G.value), l.body ? l.body(G.value) : g(Sa, J(n, K, { items: A.value }), l), (_d2 = l["body.append"]) == null ? void 0 : _d2.call(l, G.value)]), (_e = l.tbody) == null ? void 0 : _e.call(l, G.value), (_f2 = l.tfoot) == null ? void 0 : _f2.call(l, G.value)]);
    }, bottom: () => l.bottom ? l.bottom(G.value) : !e.hideDefaultFooter && S(be, null, [g(xn, null, null), g(ci, ie, { prepend: l["footer.prepend"] })]) });
  }), {};
} }), NT = U({ ...He(Hd(), ["hideDefaultFooter"]), ...Ad(), ...Oy(), ...Da() }, "VDataTableVirtual"), HT = te()({ name: "VDataTableVirtual", props: NT(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { groupBy: a } = Dd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = ss(e), { disableSort: u } = co(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: p } = Ld(e, { groupBy: a, showSelect: $(() => e.showSelect), showExpand: $(() => e.showExpand) }), { items: m } = Nd(e, c), h = $(() => e.search), { filteredItems: b } = Ma(e, m, h, { transform: (ce) => ce.columns, customKeyFilter: f }), { toggleSort: x } = us({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: V, opened: I, extractRows: k, isGroupOpen: y, toggleGroup: C } = ls({ groupBy: a, sortBy: i, disableSort: u }), { sortedItems: w } = $d(e, b, V, { transform: (ce) => ({ ...ce.raw, ...ce.columns }), sortFunctions: v, sortRawFunctions: p }), { flatItems: T } = as(w, a, I, () => !!l["group-summary"]), P = _(() => k(T.value)), { isSelected: M, select: D, selectAll: E, toggleSelect: A, someSelected: F, allSelected: j } = is(e, { allItems: P, currentPage: P }), { isExpanded: W, toggleExpand: Y } = ns(e), { containerRef: N, markerRef: R, paddingTop: Z, paddingBottom: z, computedItems: O, handleItemResize: G, handleScroll: ie, handleScrollend: pe, calculateVisibleItems: K, scrollToIndex: fe } = Ny(e, T), Te = _(() => O.value.map((ce) => ({ ...ce.raw, virtualIndex: ce.index })));
  os({ sortBy: i, page: re(1), itemsPerPage: re(-1), groupBy: a, search: h }), pt({ VDataTableRows: { hideNoData: $(() => e.hideNoData), noDataText: $(() => e.noDataText), loading: $(() => e.loading), loadingText: $(() => e.loadingText) } });
  const xe = _(() => ({ sortBy: i.value, toggleSort: x, someSelected: F.value, allSelected: j.value, isSelected: M, select: D, selectAll: E, toggleSelect: A, isExpanded: W, toggleExpand: Y, isGroupOpen: y, toggleGroup: C, items: P.value.map((ce) => ce.raw), internalItems: P.value, groupedItems: T.value, columns: c.value, headers: d.value }));
  return le(() => {
    const ce = pa.filterProps(He(e, ["multiSort"])), B = Sa.filterProps(e), L = xa.filterProps(e);
    return g(xa, J({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, L, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = l.top) == null ? void 0 : _a3.call(l, xe.value);
    }, wrapper: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return S("div", { ref: N, onScrollPassive: ie, onScrollend: pe, class: "v-table__wrapper", style: { height: me(e.height) } }, [S("table", null, [(_a3 = l.colgroup) == null ? void 0 : _a3.call(l, xe.value), !e.hideDefaultHeader && S("thead", { key: "thead" }, [g(pa, J(ce, { multiSort: !!e.multiSort }), l)]), (_b2 = l.thead) == null ? void 0 : _b2.call(l, xe.value), !e.hideDefaultBody && S("tbody", { key: "tbody" }, [S("tr", { ref: R, style: { height: me(Z.value), border: 0 } }, [S("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = l["body.prepend"]) == null ? void 0 : _c2.call(l, xe.value), g(Sa, J(n, B, { items: Te.value }), { ...l, item: (ee) => g(Ly, { key: ee.internalItem.index, renderless: true, "onUpdate:height": (de) => G(ee.internalItem.index, de) }, { default: (de) => {
        var _a4;
        let { itemRef: oe } = de;
        return ((_a4 = l.item) == null ? void 0 : _a4.call(l, { ...ee, itemRef: oe })) ?? g(Od, J(ee.props, { ref: oe, key: ee.internalItem.index, index: ee.index }), l);
      } }) }), (_d2 = l["body.append"]) == null ? void 0 : _d2.call(l, xe.value), S("tr", { style: { height: me(z.value), border: 0 } }, [S("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e = l.tbody) == null ? void 0 : _e.call(l, xe.value), (_f2 = l.tfoot) == null ? void 0 : _f2.call(l, xe.value)])]);
    }, bottom: () => {
      var _a3;
      return (_a3 = l.bottom) == null ? void 0 : _a3.call(l, xe.value);
    } });
  }), { calculateVisibleItems: K, scrollToIndex: fe };
} }), zT = U({ itemsLength: { type: [Number, String], required: true }, ...Md(), ...Hd(), ...Rd() }, "VDataTableServer"), WT = te()({ name: "VDataTableServer", props: zT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { groupBy: a } = Dd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = ss(e), { page: u, itemsPerPage: c } = Ed(e), { disableSort: d } = co(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: p } = Ld(e, { groupBy: a, showSelect: $(() => e.showSelect), showExpand: $(() => e.showExpand) }), { items: m } = Nd(e, v), { toggleSort: h } = us({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: b, isGroupOpen: x, toggleGroup: V, extractRows: I } = ls({ groupBy: a, sortBy: i, disableSort: d }), { pageCount: k, setItemsPerPage: y } = Bd({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = as(m, a, b, () => !!l["group-summary"]), { isSelected: w, select: T, selectAll: P, toggleSelect: M, someSelected: D, allSelected: E } = is(e, { allItems: m, currentPage: m }), { isExpanded: A, toggleExpand: F } = ns(e), j = _(() => I(m.value));
  os({ page: u, itemsPerPage: c, sortBy: i, groupBy: a, search: $(() => e.search) }), mt("v-data-table", { toggleSort: h, sortBy: i }), pt({ VDataTableRows: { hideNoData: $(() => e.hideNoData), noDataText: $(() => e.noDataText), loading: $(() => e.loading), loadingText: $(() => e.loadingText) } });
  const W = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: k.value, toggleSort: h, setItemsPerPage: y, someSelected: D.value, allSelected: E.value, isSelected: w, select: T, selectAll: P, toggleSelect: M, isExpanded: A, toggleExpand: F, isGroupOpen: x, toggleGroup: V, items: j.value.map((Y) => Y.raw), internalItems: j.value, groupedItems: C.value, columns: v.value, headers: p.value }));
  le(() => {
    const Y = ci.filterProps(e), N = pa.filterProps(He(e, ["multiSort"])), R = Sa.filterProps(e), Z = xa.filterProps(e);
    return g(xa, J({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, Z, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a3;
      return (_a3 = l.top) == null ? void 0 : _a3.call(l, W.value);
    }, default: () => {
      var _a3, _b2, _c2, _d2, _e, _f2;
      return l.default ? l.default(W.value) : S(be, null, [(_a3 = l.colgroup) == null ? void 0 : _a3.call(l, W.value), !e.hideDefaultHeader && S("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [g(pa, J(N, { multiSort: !!e.multiSort }), l)]), (_b2 = l.thead) == null ? void 0 : _b2.call(l, W.value), !e.hideDefaultBody && S("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = l["body.prepend"]) == null ? void 0 : _c2.call(l, W.value), l.body ? l.body(W.value) : g(Sa, J(n, R, { items: C.value }), l), (_d2 = l["body.append"]) == null ? void 0 : _d2.call(l, W.value)]), (_e = l.tbody) == null ? void 0 : _e.call(l, W.value), (_f2 = l.tfoot) == null ? void 0 : _f2.call(l, W.value)]);
    }, bottom: () => l.bottom ? l.bottom(W.value) : !e.hideDefaultFooter && S(be, null, [g(xn, null, null), g(ci, Y, { prepend: l["footer.prepend"] })]) });
  });
} }), jT = U({ fluid: { type: Boolean, default: false }, ...we(), ...Vt(), ...$e() }, "VContainer"), UT = te()({ name: "VContainer", props: jT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: l } = At(), { dimensionStyles: a } = It(e);
  return le(() => g(e.tag, { class: ne(["v-container", { "v-container--fluid": e.fluid }, l.value, e.class]), style: ge([a.value, e.style]) }, n)), {};
} }), Jb = Nr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Qb = Nr.reduce((e, t) => {
  const n = "offset" + el(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), ep = Nr.reduce((e, t) => {
  const n = "order" + el(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), sm = { col: Object.keys(Jb), offset: Object.keys(Qb), order: Object.keys(ep) };
function GT(e, t, n) {
  let l = e;
  if (!(n == null || n === false)) {
    if (t) {
      const a = t.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (n === "" || n === true) || (l += `-${n}`), l.toLowerCase();
  }
}
const YT = ["auto", "start", "end", "center", "baseline", "stretch"], KT = U({ cols: { type: [Boolean, String, Number], default: false }, ...Jb, offset: { type: [String, Number], default: null }, ...Qb, order: { type: [String, Number], default: null }, ...ep, alignSelf: { type: String, default: null, validator: (e) => YT.includes(e) }, ...we(), ...$e() }, "VCol"), XT = te()({ name: "VCol", props: KT(), setup(e, t) {
  let { slots: n } = t;
  const l = _(() => {
    const a = [];
    let o;
    for (o in sm) sm[o].forEach((r) => {
      const s = e[r], u = GT(o, r, s);
      u && a.push(u);
    });
    const i = a.some((r) => r.startsWith("v-col-"));
    return a.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), a;
  });
  return () => {
    var _a3;
    return xl(e.tag, { class: [l.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), zd = ["start", "end", "center"], tp = ["space-between", "space-around", "space-evenly"];
function Wd(e, t) {
  return Nr.reduce((n, l) => {
    const a = e + el(l);
    return n[a] = t(), n;
  }, {});
}
const qT = [...zd, "baseline", "stretch"], np = (e) => qT.includes(e), lp = Wd("align", () => ({ type: String, default: null, validator: np })), ZT = [...zd, ...tp], ap = (e) => ZT.includes(e), op = Wd("justify", () => ({ type: String, default: null, validator: ap })), JT = [...zd, ...tp, "stretch"], ip = (e) => JT.includes(e), rp = Wd("alignContent", () => ({ type: String, default: null, validator: ip })), um = { align: Object.keys(lp), justify: Object.keys(op), alignContent: Object.keys(rp) }, QT = { align: "align", justify: "justify", alignContent: "align-content" };
function eA(e, t, n) {
  let l = QT[e];
  if (n != null) {
    if (t) {
      const a = t.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${n}`, l.toLowerCase();
  }
}
const tA = U({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: np }, ...lp, justify: { type: String, default: null, validator: ap }, ...op, alignContent: { type: String, default: null, validator: ip }, ...rp, ...we(), ...$e() }, "VRow"), nA = te()({ name: "VRow", props: tA(), setup(e, t) {
  let { slots: n } = t;
  const l = _(() => {
    const a = [];
    let o;
    for (o in um) um[o].forEach((i) => {
      const r = e[i], s = eA(o, i, r);
      s && a.push(s);
    });
    return a.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), a;
  });
  return () => {
    var _a3;
    return xl(e.tag, { class: ["v-row", l.value, e.class], style: e.style }, (_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), Ou = kl("v-spacer", "div", "VSpacer"), sp = U({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Pe, default: "$next" }, prevIcon: { type: Pe, default: "$prev" }, modeIcon: { type: Pe, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), Nu = te()({ name: "VDatePickerControls", props: sp(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { t: a } = lt(), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
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
  function h() {
    n("click:month");
  }
  return le(() => {
    const b = { VBtn: { density: "comfortable", variant: "text" } }, x = g(je, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": a("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), V = g(je, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": a("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), I = g(je, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": a("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), k = g(je, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": a("$vuetify.datePicker.ariaLabel.nextYear"), onClick: p }, null), y = g(je, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": a("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: h }, null), C = g(je, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": a("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), w = g(je, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": a("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), T = S(be, null, [g(je, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": a("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: h }, null), g(je, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": a("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: h, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: p }, M = S(be, null, [e.noMonthPicker ? w : T, g(Ou, null, null), S("div", { class: "v-date-picker-controls__month" }, [x, V])]), D = S(be, null, [S("div", { class: "v-date-picker-controls__month" }, [x, y, V]), g(Ou, null, null), S("div", { class: "v-date-picker-controls__year" }, [I, C, k])]);
    return g(Fe, { defaults: b }, { default: () => {
      var _a3;
      return [S("div", { class: ne(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": me(e.controlHeight) } }, [((_a3 = l.default) == null ? void 0 : _a3.call(l, P)) ?? S(be, null, [e.controlVariant === "modal" && M, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), lA = U({ appendIcon: Pe, color: String, header: String, transition: String, onClick: Nt() }, "VDatePickerHeader"), Hu = te()({ name: "VDatePickerHeader", props: lA(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return le(() => {
    const s = !!(l.default || e.header), u = !!(l.append || e.appendIcon);
    return S("div", { class: ne(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, a.value]), style: ge(o.value), onClick: i }, [l.prepend && S("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [l.prepend()]), s && g(tn, { key: "content", name: e.transition }, { default: () => {
      var _a3;
      return [S("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a3 = l.default) == null ? void 0 : _a3.call(l)) ?? e.header])];
    } }), u && S("div", { class: "v-date-picker-header__append" }, [l.append ? g(Fe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a3;
      return [(_a3 = l.append) == null ? void 0 : _a3.call(l)];
    } }) : g(je, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), aA = U({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function oA(e) {
  const t = wa(), n = Ve(e, "modelValue", [], (m) => ut(m).map((h) => t.date(h))), l = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), a = Ve(e, "year", void 0, (m) => {
    const h = m != null ? Number(m) : t.getYear(l.value);
    return t.startOfYear(t.setYear(t.date(), h));
  }, (m) => t.getYear(m)), o = Ve(e, "month", void 0, (m) => {
    const h = m != null ? Number(m) : t.getMonth(l.value), b = t.setYear(t.startOfMonth(t.date()), t.getYear(a.value));
    return t.setMonth(b, h);
  }, (m) => t.getMonth(m)), i = _(() => {
    const m = t.toJsDate(t.startOfWeek(t.date(), e.firstDayOfWeek)).getDay();
    return t.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((h, b) => e.weekdays.includes((b + m) % 7));
  }), r = _(() => {
    const m = t.getWeekArray(o.value, e.firstDayOfWeek), h = m.flat(), b = 42;
    if (e.weeksInMonth === "static" && h.length < b) {
      const x = h[h.length - 1];
      let V = [];
      for (let I = 1; I <= b - h.length; I++) V.push(t.addDays(x, I)), I % 7 === 0 && (m.push(V), V = []);
    }
    return m;
  });
  function s(m, h) {
    return m.filter((b) => e.weekdays.includes(t.toJsDate(b).getDay())).map((b, x) => {
      const V = t.toISO(b), I = !t.isSameMonth(b, o.value), k = t.isSameDay(b, t.startOfMonth(o.value)), y = t.isSameDay(b, t.endOfMonth(o.value)), C = t.isSameDay(b, o.value), w = e.weekdays.length;
      return { date: b, formatted: t.format(b, "keyboardDate"), isAdjacent: I, isDisabled: p(b), isEnd: y, isHidden: I && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((T) => t.isSameDay(b, T)), isStart: k, isToday: t.isSameDay(b, h), isWeekEnd: x % w === w - 1, isWeekStart: x % w === 0, isoDate: V, localized: t.format(b, "dayOfMonth"), month: t.getMonth(b), year: t.getYear(b) };
    });
  }
  const u = _(() => {
    const m = t.startOfWeek(l.value, e.firstDayOfWeek), h = [];
    for (let x = 0; x <= 6; x++) h.push(t.addDays(m, x));
    const b = t.date();
    return s(h, b);
  }), c = _(() => {
    const m = r.value.flat(), h = t.date();
    return s(m, h);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = up(e);
  function p(m) {
    if (e.disabled) return true;
    const h = t.date(m);
    return f.value && t.isBefore(t.endOfDay(h), f.value) || v.value && t.isAfter(h, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((b) => t.isSameDay(t.date(b), h)) : typeof e.allowedDates == "function" ? !e.allowedDates(h) : false;
  }
  return { displayValue: l, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function up(e) {
  const t = wa(), n = _(() => {
    if (!e.min) return null;
    const i = t.date(e.min);
    return t.isValid(i) ? i : null;
  }), l = _(() => {
    if (!e.max) return null;
    const i = t.date(e.max);
    return t.isValid(i) ? i : null;
  });
  function a(i) {
    return n.value && t.isBefore(i, n.value) ? n.value : l.value && t.isAfter(i, l.value) ? l.value : i;
  }
  function o(i) {
    return (!n.value || t.isAfter(i, n.value)) && (!l.value || t.isBefore(i, l.value));
  }
  return { minDate: n, maxDate: l, clampDate: a, isInAllowedRange: o };
}
const cp = U({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...He(aA(), ["displayValue"]) }, "VDatePickerMonth"), zu = te()({ name: "VDatePickerMonth", props: cp(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = H(), { t: o } = lt(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = oA(e), c = wa(), d = re(), f = re(), v = re(false), p = $(() => v.value ? e.reverseTransition : e.transition);
  e.multiple === "range" && r.value.length > 0 && (d.value = r.value[0], r.value.length > 1 && (f.value = r.value[r.value.length - 1]));
  const m = _(() => {
    const y = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
    return r.value.length >= y;
  });
  se(i, (y, C) => {
    C && (v.value = c.isBefore(y[0].date, C[0].date));
  });
  function h(y) {
    const C = c.startOfDay(y);
    if (r.value.length === 0 ? d.value = void 0 : r.value.length === 1 && (d.value = r.value[0], f.value = void 0), !d.value) d.value = C, r.value = [d.value];
    else if (f.value) d.value = y, f.value = void 0, r.value = [d.value];
    else {
      if (c.isSameDay(C, d.value)) {
        d.value = void 0, r.value = [];
        return;
      } else c.isBefore(C, d.value) ? (f.value = c.endOfDay(d.value), d.value = C) : f.value = c.endOfDay(C);
      r.value = rC(c, d.value, f.value);
    }
  }
  function b(y) {
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
  function V(y) {
    e.multiple === "range" ? h(y) : e.multiple ? x(y) : r.value = [y];
  }
  function I(y) {
    const { events: C, eventColor: w } = e;
    let T, P = [];
    if (Array.isArray(C) ? T = C.includes(y) : C instanceof Function ? T = C(y) || false : C ? T = C[y] || false : T = false, T) T !== true ? P = ut(T) : typeof w == "string" ? P = [w] : typeof w == "function" ? P = ut(w(y)) : Array.isArray(w) ? P = w : typeof w == "object" && w !== null && (P = ut(w[y]));
    else return [];
    return P.length ? P.filter(Boolean).map((M) => typeof M == "string" ? M : "surface-variant") : ["surface-variant"];
  }
  function k(y) {
    const C = I(y);
    return C.length ? S("div", { class: "v-date-picker-month__events" }, [C.map((w) => g(Hy, { dot: true, color: w }, null))]) : null;
  }
  le(() => S("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && S("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && S("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Le("\xA0")]), s.value.map((y) => S("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [y]))]), g(tn, { name: p.value }, { default: () => {
    var _a3;
    return [S("div", { ref: a, key: (_a3 = i.value[0].date) == null ? void 0 : _a3.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((y) => S("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [y])), i.value.map((y, C) => {
      var _a4;
      const w = { props: { class: "v-date-picker-month__day-btn", color: y.isSelected || y.isToday ? e.color : void 0, disabled: y.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: y.isSelected ? "flat" : y.isToday ? "outlined" : "text", "aria-label": b(y), "aria-current": y.isToday ? "date" : void 0, onClick: () => V(y.date) }, item: y, i: C };
      return m.value && !y.isSelected && (y.isDisabled = true), S("div", { class: ne(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": y.isAdjacent, "v-date-picker-month__day--hide-adjacent": y.isHidden, "v-date-picker-month__day--selected": y.isSelected, "v-date-picker-month__day--week-end": y.isWeekEnd, "v-date-picker-month__day--week-start": y.isWeekStart }]), "data-v-date": y.isDisabled ? void 0 : y.isoDate }, [(e.showAdjacentMonths || !y.isAdjacent) && (((_a4 = l.day) == null ? void 0 : _a4.call(l, w)) ?? g(je, w.props, { default: () => [y.localized, k(y.isoDate)] }))]);
    })])];
  } })]));
} }), dp = U({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), Wu = te()({ name: "VDatePickerMonths", props: dp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = wa(), o = Ve(e, "modelValue"), i = _(() => {
    let s = a.startOfYear(a.date());
    return e.year && (s = a.setYear(s, e.year)), Yn(12).map((u) => {
      const c = a.format(s, "monthShort"), d = a.format(s, "month"), f = !!(!r(u) || e.min && a.isAfter(a.startOfMonth(a.date(e.min)), s) || e.max && a.isAfter(s, a.startOfMonth(a.date(e.max))));
      return s = a.getNextMonth(s), { isDisabled: f, text: c, label: d, value: u };
    });
  });
  ht(() => {
    o.value = o.value ?? a.getMonth(a.date());
  });
  function r(s) {
    return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : true;
  }
  return le(() => S("div", { class: "v-date-picker-months", style: { height: me(e.height) } }, [S("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a3;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a3 = l.month) == null ? void 0 : _a3.call(l, { month: s, i: u, props: c })) ?? g(je, J({ key: "month" }, c), null);
  })])])), {};
} }), fp = U({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), ju = te()({ name: "VDatePickerYears", props: fp(), directives: { vIntersect: Fn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = wa(), o = Ve(e, "modelValue"), i = re(false), r = _(() => {
    const f = a.getYear(a.date());
    let v = f - 100, p = f + 52;
    e.min && (v = a.getYear(a.date(e.min))), e.max && (p = a.getYear(a.date(e.max)));
    let m = a.startOfYear(a.date());
    return m = a.setYear(m, v), Yn(p - v + 1, v).map((h) => {
      const b = a.format(m, "year");
      return m = a.setYear(m, a.getYear(m) + 1), { text: b, value: h, isDisabled: !d(h) };
    });
  });
  ht(() => {
    o.value = o.value ?? a.getYear(a.date());
  });
  const s = Zo(), u = Zo();
  function c() {
    const f = s.el, v = u.el;
    if (!f || !v) return;
    const p = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - p.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return le(() => nt(S("div", { class: "v-date-picker-years", ref: s, style: { height: me(e.height) } }, [S("div", { class: "v-date-picker-years__content", onFocus: () => {
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
    return ((_a3 = l.year) == null ? void 0 : _a3.call(l, { year: f, i: v, props: p })) ?? g(je, J({ key: "month" }, p), null);
  })])]), [[Fn, { handler: c }, null, { once: true }]])), {};
} }), iA = U({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...He(sp(), ["active", "monthText", "yearText"]), ...cp({ weeksInMonth: "static" }), ...He(dp(), ["modelValue"]), ...He(fp(), ["modelValue"]), ...ts({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), rA = te()({ name: "VDatePicker", props: iA(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const a = wa(), { t: o } = lt(), { rtlClasses: i } = At(), r = Ve(e, "modelValue", void 0, (G) => ut(G).map((ie) => a.date(ie)), (G) => e.multiple ? G : G[0]), s = Ve(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = up(e), f = _(() => {
    var _a3;
    const G = a.date(), ie = ((_a3 = r.value) == null ? void 0 : _a3[0]) ? a.date(r.value[0]) : d(G);
    return ie && a.isValid(ie) ? ie : G;
  }), v = $(() => e.headerColor ?? e.color), p = Ve(e, "month"), m = _({ get: () => Number(p.value ?? a.getMonth(a.startOfMonth(f.value))), set: (G) => p.value = G }), h = Ve(e, "year"), b = _({ get: () => Number(h.value ?? a.getYear(a.startOfYear(a.setMonth(f.value, m.value)))), set: (G) => h.value = G }), x = re(false), V = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const G = r.value[0] && a.isValid(r.value[0]) ? a.format(a.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && G.split(" ").length === 3 ? G.replace(" ", `
`) : G;
  }), I = $(() => {
    let G = a.date();
    return G = a.setDate(G, 1), G = a.setMonth(G, m.value), G = a.setYear(G, b.value), G;
  }), k = $(() => a.format(I.value, "monthAndYear")), y = $(() => a.format(I.value, "monthShort")), C = $(() => a.format(I.value, "year")), w = $(() => `date-picker-header${x.value ? "-reverse" : ""}-transition`), T = _(() => {
    if (e.disabled) return true;
    const G = [];
    if (s.value !== "month") G.push("prev-month", "next-month", "prev-year", "next-year");
    else {
      let ie = a.date();
      if (ie = a.startOfMonth(ie), ie = a.setMonth(ie, m.value), ie = a.setYear(ie, b.value), u.value) {
        const pe = a.addDays(a.startOfMonth(ie), -1), K = a.addDays(a.startOfYear(ie), -1);
        a.isAfter(u.value, pe) && G.push("prev-month"), a.isAfter(u.value, K) && G.push("prev-year");
      }
      if (c.value) {
        const pe = a.addDays(a.endOfMonth(ie), 1), K = a.addDays(a.endOfYear(ie), 1);
        a.isAfter(pe, c.value) && G.push("next-month"), a.isAfter(K, c.value) && G.push("next-year");
      }
    }
    return G;
  }), P = _(() => e.allowedYears || E), M = _(() => e.allowedMonths || A);
  function D(G, ie) {
    const pe = e.allowedDates;
    if (typeof pe != "function") return true;
    const K = 1 + _h(a, G, ie);
    for (let fe = 0; fe < K; fe++) if (pe(a.addDays(G, fe))) return true;
    return false;
  }
  function E(G) {
    if (typeof e.allowedDates == "function") {
      const ie = a.parseISO(`${G}-01-01`);
      return D(ie, a.endOfYear(ie));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (a.getYear(a.date(ie)) === G) return true;
      return false;
    }
    return true;
  }
  function A(G) {
    if (typeof e.allowedDates == "function") {
      const ie = String(G + 1).padStart(2, "0"), pe = a.parseISO(`${b.value}-${ie}-01`);
      return D(pe, a.endOfMonth(pe));
    }
    if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
      for (const ie of e.allowedDates) if (a.getYear(a.date(ie)) === b.value && a.getMonth(a.date(ie)) === G) return true;
      return false;
    }
    return true;
  }
  function F() {
    m.value < 11 ? m.value++ : (b.value++, m.value = 0, O()), z();
  }
  function j() {
    m.value > 0 ? m.value-- : (b.value--, m.value = 11, O()), z();
  }
  function W() {
    if (b.value++, c.value) {
      const G = String(m.value + 1).padStart(2, "0"), ie = a.parseISO(`${b.value}-${G}-01`);
      a.isAfter(ie, c.value) && (m.value = a.getMonth(c.value));
    }
    O();
  }
  function Y() {
    if (b.value--, u.value) {
      const G = String(m.value + 1).padStart(2, "0"), ie = a.endOfMonth(a.parseISO(`${b.value}-${G}-01`));
      a.isAfter(u.value, ie) && (m.value = a.getMonth(u.value));
    }
    O();
  }
  function N() {
    s.value = "month";
  }
  function R() {
    s.value = s.value === "months" ? "month" : "months";
  }
  function Z() {
    s.value = s.value === "year" ? "month" : "year";
  }
  function z() {
    s.value === "months" && R();
  }
  function O() {
    s.value === "year" && Z();
  }
  return se(r, (G, ie) => {
    const pe = ut(ie), K = ut(G);
    if (!K.length) return;
    const fe = a.date(pe[pe.length - 1]), Te = a.date(K[K.length - 1]);
    if (a.isSameDay(fe, Te)) return;
    const xe = a.getMonth(Te), ce = a.getYear(Te);
    xe !== m.value && (m.value = xe, z()), ce !== b.value && (b.value = ce, O()), x.value = a.isBefore(fe, Te);
  }), le(() => {
    const G = uo.filterProps(e), ie = He(Nu.filterProps(e), ["viewMode"]), pe = Hu.filterProps(e), K = zu.filterProps(e), fe = He(Wu.filterProps(e), ["modelValue"]), Te = He(ju.filterProps(e), ["modelValue"]), xe = { color: v.value, header: V.value, transition: w.value };
    return g(uo, J(G, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": me(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a3;
      return ((_a3 = l.title) == null ? void 0 : _a3.call(l)) ?? S("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => l.header ? g(Fe, { defaults: { VDatePickerHeader: { ...xe } } }, { default: () => {
      var _a3;
      return [(_a3 = l.header) == null ? void 0 : _a3.call(l, xe)];
    } }) : g(Hu, J({ key: "header" }, pe, xe, { onClick: s.value !== "month" ? N : void 0 }), { prepend: l.prepend, append: l.append }), default: () => S(be, null, [g(Nu, J(ie, { disabled: T.value, viewMode: s.value, text: k.value, monthText: y.value, yearText: C.value, "onClick:next": F, "onClick:prev": j, "onClick:nextYear": W, "onClick:prevYear": Y, "onClick:month": R, "onClick:year": Z }), { default: l.controls }), g(li, { hideOnLeave: true }, { default: () => [s.value === "months" ? g(Wu, J({ key: "date-picker-months" }, fe, { modelValue: m.value, "onUpdate:modelValue": [(ce) => m.value = ce, z], min: u.value, max: c.value, year: b.value, allowedMonths: M.value }), { month: l.month }) : s.value === "year" ? g(ju, J({ key: "date-picker-years" }, Te, { modelValue: b.value, "onUpdate:modelValue": [(ce) => b.value = ce, O], min: u.value, max: c.value, allowedYears: P.value }), { year: l.year }) : g(zu, J({ key: "date-picker-month" }, K, { modelValue: r.value, "onUpdate:modelValue": (ce) => r.value = ce, month: m.value, "onUpdate:month": [(ce) => m.value = ce, z], year: b.value, "onUpdate:year": [(ce) => b.value = ce, O], min: u.value, max: c.value }), { day: l.day })] })]), actions: l.actions });
  }), {};
} }), sA = U({ actionText: String, bgColor: String, color: String, icon: Pe, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...we(), ...Vt(), ...al({ size: void 0 }), ...Ke() }, "VEmptyState"), uA = te()({ name: "VEmptyState", props: sA(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { themeClasses: a } = Ze(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Je(() => e.bgColor), { dimensionStyles: r } = It(e), { displayClasses: s } = Cn();
  function u(c) {
    n("click:action", c);
  }
  return le(() => {
    var _a3, _b2, _c2;
    const c = !!(l.actions || e.actionText), d = !!(l.headline || e.headline), f = !!(l.title || e.title), v = !!(l.text || e.text), p = !!(l.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return S("div", { class: ne(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, a.value, o.value, s.value, e.class]), style: ge([i.value, r.value, e.style]) }, [p && S("div", { key: "media", class: "v-empty-state__media" }, [l.media ? g(Fe, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [l.media()] }) : S(be, null, [e.image ? g(bl, { key: "image", src: e.image, height: m }, null) : e.icon ? g(qe, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && S("div", { key: "headline", class: "v-empty-state__headline" }, [((_a3 = l.headline) == null ? void 0 : _a3.call(l)) ?? e.headline]), f && S("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = l.title) == null ? void 0 : _b2.call(l)) ?? e.title]), v && S("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: me(e.textWidth) } }, [((_c2 = l.text) == null ? void 0 : _c2.call(l)) ?? e.text]), l.default && S("div", { key: "content", class: "v-empty-state__content" }, [l.default()]), c && S("div", { key: "actions", class: "v-empty-state__actions" }, [g(Fe, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a4;
      return [((_a4 = l.actions) == null ? void 0 : _a4.call(l, { props: { onClick: u } })) ?? g(je, { onClick: u }, null)];
    } })])]);
  }), {};
} }), fi = Symbol.for("vuetify:v-expansion-panel"), vp = U({ ...we(), ...md() }, "VExpansionPanelText"), Uu = te()({ name: "VExpansionPanelText", props: vp(), setup(e, t) {
  let { slots: n } = t;
  const l = Ue(fi);
  if (!l) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: a, onAfterLeave: o } = gd(e, l.isSelected);
  return le(() => g(Wr, { onAfterLeave: o }, { default: () => {
    var _a3;
    return [nt(S("div", { class: ne(["v-expansion-panel-text", e.class]), style: ge(e.style) }, [n.default && a.value && S("div", { class: "v-expansion-panel-text__wrapper" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)])]), [[On, l.isSelected.value]])];
  } })), {};
} }), mp = U({ color: String, expandIcon: { type: Pe, default: "$expand" }, collapseIcon: { type: Pe, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...we(), ...Vt() }, "VExpansionPanelTitle"), Gu = te()({ name: "VExpansionPanelTitle", directives: { vRipple: zt }, props: mp(), setup(e, t) {
  let { slots: n } = t;
  const l = Ue(fi);
  if (!l) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.color), { dimensionStyles: i } = It(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: l.disabled.value, expanded: l.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = $(() => l.isSelected.value ? e.collapseIcon : e.expandIcon);
  return le(() => {
    var _a3;
    return nt(S("button", { class: ne(["v-expansion-panel-title", { "v-expansion-panel-title--active": l.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, a.value, e.class]), style: ge([o.value, i.value, e.style]), type: "button", tabindex: l.disabled.value ? -1 : void 0, disabled: l.disabled.value, "aria-expanded": l.isSelected.value, onClick: e.readonly ? void 0 : l.toggle }, [S("span", { class: "v-expansion-panel-title__overlay" }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n, r.value), !e.hideActions && g(Fe, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a4;
      return [S("span", { class: "v-expansion-panel-title__icon" }, [((_a4 = n.actions) == null ? void 0 : _a4.call(n, r.value)) ?? g(qe, null, null)])];
    } })]), [[zt, e.ripple]]);
  }), {};
} }), gp = U({ title: String, text: String, bgColor: String, ...Pt(), ...Ta(), ...ct(), ...$e(), ...mp(), ...vp() }, "VExpansionPanel"), cA = te()({ name: "VExpansionPanel", props: gp(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = zl(e, fi), { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.bgColor), { elevationClasses: i } = Mt(e), { roundedClasses: r } = yt(e), s = $(() => (l == null ? void 0 : l.disabled.value) || e.disabled), u = _(() => l.group.items.value.reduce((f, v, p) => (l.group.selected.value.includes(v.id) && f.push(p), f), [])), c = _(() => {
    const f = l.group.items.value.findIndex((v) => v.id === l.id);
    return !l.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = l.group.items.value.findIndex((v) => v.id === l.id);
    return !l.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return mt(fi, l), le(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), p = Gu.filterProps(e), m = Uu.filterProps(e);
    return g(e.tag, { class: ne(["v-expansion-panel", { "v-expansion-panel--active": l.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, a.value, e.class]), style: ge([o.value, e.style]) }, { default: () => [S("div", { class: ne(["v-expansion-panel__shadow", ...i.value]) }, null), g(Fe, { defaults: { VExpansionPanelTitle: { ...p }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a3;
      return [v && g(Gu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && g(Uu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } })] });
  }), { groupItem: l };
} }), dA = ["default", "accordion", "inset", "popout"], fA = U({ flat: Boolean, ...Pa(), ...cn(gp(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ke(), ...we(), ...$e(), variant: { type: String, default: "default", validator: (e) => dA.includes(e) } }, "VExpansionPanels"), vA = te()({ name: "VExpansionPanels", props: fA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: l, prev: a } = ql(e, fi), { themeClasses: o } = Ze(e), i = $(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return pt({ VExpansionPanel: { bgColor: $(() => e.bgColor), collapseIcon: $(() => e.collapseIcon), color: $(() => e.color), eager: $(() => e.eager), elevation: $(() => e.elevation), expandIcon: $(() => e.expandIcon), focusable: $(() => e.focusable), hideActions: $(() => e.hideActions), readonly: $(() => e.readonly), ripple: $(() => e.ripple), rounded: $(() => e.rounded), static: $(() => e.static) } }), le(() => g(e.tag, { class: ne(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: a, next: l })];
  } })), { next: l, prev: a };
} }), mA = U({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...He(Gr({ active: true }), ["location", "spaced"]), ..._a(), ...ll(), ...wl({ transition: "fab-transition" }) }, "VFab"), gA = te()({ name: "VFab", props: mA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), a = re(56), o = H(), { resizeRef: i } = Tn((d) => {
    d.length && (a.value = d[0].target.clientHeight);
  }), r = $(() => e.app || e.absolute), s = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ").shift()) ?? "bottom" : false;
  }), u = _(() => {
    var _a3;
    return r.value ? ((_a3 = e.location) == null ? void 0 : _a3.split(" ")[1]) ?? "end" : false;
  });
  Ht(() => e.app, () => {
    const d = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? a.value + 24 : 0), elementSize: _(() => a.value + 24), active: _(() => e.app && l.value), absolute: $(() => e.absolute) });
    ht(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = H();
  return le(() => {
    const d = je.filterProps(e);
    return S("div", { ref: c, class: ne(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: ge([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [S("div", { class: "v-fab__container" }, [g(tn, { appear: e.appear, transition: e.transition }, { default: () => [nt(g(je, J({ ref: i }, d, { active: void 0, location: void 0 }), n), [[On, e.active]])] })])]);
  }), {};
} });
function hA() {
  function e(n) {
    var _a3, _b2;
    return [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((a) => a.kind === "file").map((a) => a.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a3, _b2;
    const l = [], a = [...((_a3 = n.dataTransfer) == null ? void 0 : _a3.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (a.length) for (const o of a) {
      const i = await hp(o, yp(".", o));
      l.push(...i.map((r) => r.file));
    }
    else l.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return l;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function hp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, l) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), l) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await hp(r, yp(t, r)));
      n(i);
    });
  });
}
function yp(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const yA = U({ filterByType: String }, "file-accept");
function bA(e) {
  const t = _(() => e.filterByType ? pA(e.filterByType) : null);
  function n(l) {
    if (t.value) {
      const a = l.filter(t.value);
      return { accepted: a, rejected: l.filter((o) => !a.includes(o)) };
    }
    return { accepted: l, rejected: [] };
  }
  return { filterAccepted: n };
}
function pA(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), l = t.filter((o) => o.endsWith("/*")), a = t.filter((o) => !n.includes(o) && !l.includes(o));
  return (o) => {
    var _a3, _b2;
    const i = ((_a3 = o.name.split(".").at(-1)) == null ? void 0 : _a3.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return a.includes(o.type) || n.includes(`.${i}`) || l.includes(`${r}/*`);
  };
}
const SA = U({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...He(Il({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ut(e).every((t) => t != null && typeof t == "object") }, ...yA(), ...Ai({ clearable: true }) }, "VFileInput"), xA = te()({ name: "VFileInput", inheritAttrs: false, props: SA(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { t: o } = lt(), { filterAccepted: i } = bA(e), r = Ve(e, "modelValue", e.modelValue, (N) => ut(N), (N) => !e.multiple && Array.isArray(N) ? N[0] : N), { isFocused: s, focus: u, blur: c } = Vl(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((N, R) => {
    let { size: Z = 0 } = R;
    return N + Z;
  }, 0)), v = _(() => sv(f.value, d.value)), p = _(() => (r.value ?? []).map((N) => {
    const { name: R = "", size: Z = 0 } = N, z = E(R);
    return e.showSize ? `${z} (${sv(Z, d.value)})` : z;
  })), m = _(() => {
    var _a3;
    const N = ((_a3 = r.value) == null ? void 0 : _a3.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, N, v.value) : o(e.counterString, N);
  }), h = H(), b = H(), x = H(), V = $(() => s.value || e.active), I = _(() => ["plain", "underlined"].includes(e.variant)), k = re(false), { handleDrop: y, hasFilesOrFolders: C } = hA();
  function w() {
    var _a3;
    x.value !== document.activeElement && ((_a3 = x.value) == null ? void 0 : _a3.focus()), s.value || u();
  }
  function T(N) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click();
  }
  function P(N) {
    l("mousedown:control", N);
  }
  function M(N) {
    var _a3;
    (_a3 = x.value) == null ? void 0 : _a3.click(), l("click:control", N);
  }
  function D(N) {
    N.stopPropagation(), w(), Be(() => {
      r.value = [], pi(e["onClick:clear"], N);
    });
  }
  function E(N) {
    if (N.length < Number(e.truncateLength)) return N;
    const R = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${N.slice(0, R)}\u2026${N.slice(N.length - R)}`;
  }
  function A(N) {
    N.preventDefault(), N.stopImmediatePropagation(), k.value = true;
  }
  function F(N) {
    N.preventDefault(), k.value = false;
  }
  async function j(N) {
    if (N.preventDefault(), N.stopImmediatePropagation(), k.value = false, !x.value || !C(N)) return;
    const R = await y(N);
    Y(R);
  }
  function W(N) {
    if (!(!N.target || N.repack)) if (e.filterByType) Y([...N.target.files]);
    else {
      const R = N.target;
      r.value = [...R.files ?? []];
    }
  }
  function Y(N) {
    const R = new DataTransfer(), { accepted: Z, rejected: z } = i(N);
    z.length && l("rejected", z);
    for (const G of Z) R.items.add(G);
    x.value.files = R.files, r.value = [...R.files];
    const O = new Event("change", { bubbles: true });
    O.repack = true, x.value.dispatchEvent(O);
  }
  return se(r, (N) => {
    (!Array.isArray(N) || !N.length) && x.value && (x.value.value = "");
  }), le(() => {
    const N = !!(a.counter || e.counter), R = !!(N || a.details), [Z, z] = tl(n), { modelValue: O, ...G } = Gt.filterProps(e), ie = { ...Gl.filterProps(e), "onClick:clear": D }, pe = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, K = n.accept ? String(n.accept) : void 0, fe = pe ? void 0 : e.filterByType ?? K;
    return g(Gt, J({ ref: h, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": k.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": I.value }, e.class], style: e.style, "onClick:prepend": T }, Z, G, { centerAffix: !I.value, focused: s.value }), { ...a, default: (Te) => {
      let { id: xe, isDisabled: ce, isDirty: B, isReadonly: L, isValid: ee, hasDetails: de } = Te;
      return g(Gl, J({ ref: b, prependIcon: e.prependIcon, onMousedown: P, onClick: M, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ie, { id: xe.value, active: V.value || B.value, dirty: B.value || e.dirty, disabled: ce.value, focused: s.value, details: de.value, error: ee.value === false, onDragover: A, onDrop: j }), { ...a, default: (oe) => {
        var _a3;
        let { props: { class: ue, ...Se }, controlRef: ve } = oe;
        return S(be, null, [S("input", J({ ref: (X) => x.value = ve.value = X, type: "file", accept: fe, readonly: L.value, disabled: ce.value, multiple: e.multiple, name: e.name, onClick: (X) => {
          X.stopPropagation(), L.value && X.preventDefault(), w();
        }, onChange: W, onDragleave: F, onFocus: w, onBlur: c }, Se, z), null), S("div", { class: ne(ue) }, [!!((_a3 = r.value) == null ? void 0 : _a3.length) && !e.hideInput && (a.selection ? a.selection({ fileNames: p.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? p.value.map((X) => g(pl, { key: X, size: "small", text: X }, null)) : p.value.join(", "))])]);
      } });
    }, details: R ? (Te) => {
      var _a3, _b2;
      return S(be, null, [(_a3 = a.details) == null ? void 0 : _a3.call(a, Te), N && S(be, null, [S("span", null, null), g(Kr, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, a.counter)])]);
    } : void 0 });
  }), Et({}, h, b, x);
} }), kA = U({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Kt(), ...we(), ...Pt(), ..._a(), ...ct(), ...$e({ tag: "footer" }), ...Ke() }, "VFooter"), wA = te()({ name: "VFooter", props: kA(), setup(e, t) {
  let { slots: n } = t;
  const l = H(), { themeClasses: a } = Ze(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Je(() => e.color), { borderClasses: r } = ln(e), { elevationClasses: s } = Mt(e), { roundedClasses: u } = yt(e), c = re(32), { resizeRef: d } = Tn((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return Ht(() => e.app, () => {
    const v = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: $(() => e.app), absolute: $(() => e.absolute) });
    ht(() => {
      l.value = v.layoutItemStyles.value;
    });
  }), le(() => g(e.tag, { ref: d, class: ne(["v-footer", a.value, o.value, r.value, s.value, u.value, e.class]), style: ge([i.value, e.app ? l.value : { height: me(e.height) }, e.style]) }, n)), {};
} }), CA = U({ ...we(), ...A_() }, "VForm"), _A = te()({ name: "VForm", props: CA(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const a = D_(e), o = H();
  function i(s) {
    s.preventDefault(), a.reset();
  }
  function r(s) {
    const u = s, c = a.validate();
    u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), l("submit", u), u.defaultPrevented || c.then((d) => {
      var _a3;
      let { valid: f } = d;
      f && ((_a3 = o.value) == null ? void 0 : _a3.submit());
    }), u.preventDefault();
  }
  return le(() => {
    var _a3;
    return S("form", { ref: o, class: ne(["v-form", e.class]), style: ge(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a3 = n.default) == null ? void 0 : _a3.call(n, a)]);
  }), Et(a, o);
} }), VA = U({ color: String, ...Kt(), ...we(), ...ct(), ...$e({ tag: "kbd" }), ...Ke(), ...Pt() }, "VKbd"), Yu = te()({ name: "VKbd", props: VA(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { borderClasses: a } = ln(e), { roundedClasses: o } = yt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Je(() => e.color), { elevationClasses: s } = Mt(e);
  return le(() => g(e.tag, { class: ne(["v-kbd", l.value, i.value, a.value, s.value, o.value, e.class]), style: ge([r.value, e.style]) }, n)), {};
} });
function bp(e, t, n) {
  const l = n && e.mac ? e.mac : e.default, a = t === "icon" && !l.icon || t === "symbol" && !l.symbol ? "text" : t;
  let o = l[a] ?? l.text;
  return a === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), a === "icon" ? ["icon", o] : [a, o];
}
const pp = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, IA = U({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => pp }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...we(), ...Ke(), ...Kt(), ...ct(), ...Pt(), color: String }, "VHotkey"), zs = Symbol("VHotkey:AND_DELINEATOR"), Ws = Symbol("VHotkey:SLASH_DELINEATOR"), cm = Symbol("VHotkey:THEN_DELINEATOR");
function PA(e, t, n) {
  const l = t.toLowerCase();
  if (l in e) {
    const a = bp(e[l], "text", n);
    return typeof a[1] == "string" ? a[1] : String(a[1]);
  }
  return t.toUpperCase();
}
function dm(e, t, n, l) {
  const a = n.toLowerCase();
  if (a in e) {
    const o = bp(e[a], t, l);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const TA = te()({ name: "VHotkey", props: IA(), setup(e) {
  const { t } = lt(), { themeClasses: n } = Ze(e), { rtlClasses: l } = At(), { borderClasses: a } = ln(e), { roundedClasses: o } = yt(e), { elevationClasses: i } = Mt(e), { colorClasses: r, colorStyles: s, variantClasses: u } = _l(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((b) => {
    const x = [], V = CC(b);
    for (let I = 0; I < V.length; I++) {
      const k = V[I];
      I > 0 && x.push(cm);
      const { keys: y, separators: C } = Eh(k);
      for (let w = 0; w < y.length; w++) {
        const T = y[w];
        w > 0 && x.push(C[w - 1] === "/" ? Ws : zs), x.push(dm(e.keyMap, e.displayMode, T, c.value));
      }
    }
    return x;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const x = d.value.map((V) => {
      const I = [];
      for (const k of V) if (Array.isArray(k)) {
        const y = k[0] === "icon" || k[0] === "symbol" ? dm(jt(pp, e.keyMap), "text", String(k[1]), c.value)[1] : k[1];
        I.push(v(y));
      } else k === zs ? I.push(t("$vuetify.hotkey.plus")) : k === Ws ? I.push(t("$vuetify.hotkey.or")) : k === cm && I.push(t("$vuetify.hotkey.then"));
      return I.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", x);
  });
  function v(b) {
    return b.startsWith("$vuetify.") ? t(b) : b;
  }
  function p(b) {
    if (e.displayMode === "text") return;
    const x = PA(e.keyMap, String(b[2]), c.value);
    return v(x);
  }
  function m(b, x) {
    const V = e.variant === "contained", I = V ? "kbd" : Yu, k = ["v-hotkey__key", `v-hotkey__key-${b[0]}`, ...V ? ["v-hotkey__key--nested"] : [a.value, o.value, i.value, r.value]];
    return g(I, { key: x, class: ne(k), style: ge(V ? void 0 : s.value), "aria-hidden": "true", title: p(b) }, { default: () => [b[0] === "icon" ? g(qe, { icon: b[1], "aria-hidden": "true" }, null) : v(b[1])] });
  }
  function h(b, x) {
    return S("span", { key: x, class: "v-hotkey__divider", "aria-hidden": "true" }, [b === zs ? "+" : b === Ws ? "/" : t("$vuetify.hotkey.then")]);
  }
  le(() => {
    const b = S(be, null, [e.prefix && S("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((x, V) => S("span", { class: "v-hotkey__combination", key: V }, [x.map((I, k) => Array.isArray(I) ? m(I, k) : h(I, k)), V < d.value.length - 1 && S("span", { "aria-hidden": "true" }, [Le("\xA0")])])), e.suffix && S("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return S("div", { class: ne(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, l.value, u.value, e.class]), style: ge(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? b : g(Yu, { key: "contained", class: ne(["v-hotkey__contained-wrapper", a.value, o.value, i.value, r.value]), style: ge(s.value), "aria-hidden": "true" }, { default: () => [b] })]);
  });
} }), AA = U({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...fd() }, "VHover"), DA = te()({ name: "VHover", props: AA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), { runOpenDelay: a, runCloseDelay: o } = vd(e, (i) => !e.disabled && (l.value = i));
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isHovering: l.value, props: { onMouseenter: a, onMouseleave: o } });
  };
} }), MA = U({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...Vt(), ...$e() }, "VInfiniteScroll"), fm = nn({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: l, isIntersecting: a } = ki();
  return se(a, async (o) => {
    n("intersect", e.side, o);
  }), le(() => S("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: l }, [Le("\xA0")])), {};
} }), EA = te()({ name: "VInfiniteScroll", props: MA(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const a = H(), o = re("ok"), i = re("ok"), r = _(() => me(e.margin)), s = re(false);
  function u(y) {
    if (!a.value) return;
    const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    a.value[C] = y;
  }
  function c() {
    if (!a.value) return 0;
    const y = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
    return a.value[y];
  }
  function d() {
    if (!a.value) return 0;
    const y = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
    return a.value[y];
  }
  function f() {
    if (!a.value) return 0;
    const y = e.direction === "vertical" ? "clientHeight" : "clientWidth";
    return a.value[y];
  }
  Tt(() => {
    a.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
  });
  function v(y, C) {
    y === "start" ? o.value = C : y === "end" ? i.value = C : y === "both" && (o.value = C, i.value = C);
  }
  function p(y) {
    return y === "start" ? o.value : i.value;
  }
  let m = 0;
  function h(y, C) {
    s.value = C, s.value && b(y);
  }
  function b(y) {
    if (e.mode !== "manual" && !s.value) return;
    const C = p(y);
    if (!a.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(y, "loading");
    function w(T) {
      v(y, T), Be(() => {
        T === "empty" || T === "error" || (T === "ok" && y === "start" && u(d() - m + c()), e.mode !== "manual" && Be(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                b(y);
              });
            });
          });
        }));
      });
    }
    l("load", { side: y, done: w });
  }
  const { t: x } = lt();
  function V(y, C) {
    var _a3, _b2, _c2, _d2, _e;
    if (e.side !== y && e.side !== "both") return;
    const w = () => b(y), T = { side: y, props: { onClick: w, color: e.color } };
    return C === "error" ? (_a3 = n.error) == null ? void 0 : _a3.call(n, T) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, T)) ?? S("div", null, [x(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, T)) ?? g(Wl, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, T)) ?? g(je, { variant: "outlined", color: e.color, onClick: w }, { default: () => [x(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, T)) ?? g(Wl, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: I } = It(e);
  le(() => {
    const y = e.tag, C = e.side === "start" || e.side === "both", w = e.side === "end" || e.side === "both", T = e.mode === "intersect";
    return g(y, { ref: a, class: ne(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": w }]), style: ge(I.value) }, { default: () => {
      var _a3;
      return [S("div", { class: "v-infinite-scroll__side" }, [V("start", o.value)]), C && T && g(fm, { key: "start", side: "start", onIntersect: h, rootMargin: r.value }, null), (_a3 = n.default) == null ? void 0 : _a3.call(n), w && T && g(fm, { key: "end", side: "end", onIntersect: h, rootMargin: r.value }, null), S("div", { class: "v-infinite-scroll__side" }, [V("end", i.value)])];
    } });
  });
  function k(y) {
    const C = y ?? e.side;
    v(C, "ok"), Be(() => {
      C !== "end" && u(d() - m + c()), e.mode !== "manual" && Be(() => {
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
  return { reset: k };
} }), Sp = Symbol.for("vuetify:v-item-group"), BA = U({ ...we(), ...Pa({ selectedClass: "v-item--selected" }), ...$e(), ...Ke() }, "VItemGroup"), $A = te()({ name: "VItemGroup", props: BA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { isSelected: a, select: o, next: i, prev: r, selected: s } = ql(e, Sp);
  return () => g(e.tag, { class: ne(["v-item-group", l.value, e.class]), style: ge(e.style) }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: a, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), RA = te()({ name: "VItem", props: Ta(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, select: a, toggle: o, selectedClass: i, value: r, disabled: s } = zl(e, Sp);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l.value, selectedClass: i.value, select: a, toggle: o, value: r.value, disabled: s.value });
  };
} }), FA = U({ ...we(), ...Vt(), ...Ah() }, "VLayout"), LA = te()({ name: "VLayout", props: FA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: l, layoutStyles: a, getLayoutItem: o, items: i, layoutRef: r } = Mh(e), { dimensionStyles: s } = It(e);
  return le(() => {
    var _a3;
    return S("div", { ref: r, class: ne([l.value, e.class]), style: ge([s.value, a.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), OA = U({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...we(), ..._a() }, "VLayoutItem"), NA = te()({ name: "VLayoutItem", props: OA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: l } = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: $(() => e.position), elementSize: $(() => e.size), layoutSize: $(() => e.size), active: $(() => e.modelValue), absolute: $(() => e.absolute) });
  return () => {
    var _a3;
    return S("div", { class: ne(["v-layout-item", e.class]), style: ge([l.value, e.style]) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  };
} }), HA = U({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...we(), ...Vt(), ...$e(), ...wl({ transition: "fade-transition" }) }, "VLazy"), zA = te()({ name: "VLazy", directives: { vIntersect: Fn }, props: HA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: l } = It(e), a = Ve(e, "modelValue");
  function o(i) {
    a.value || (a.value = i);
  }
  return le(() => nt(g(e.tag, { class: ne(["v-lazy", e.class]), style: ge([l.value, e.style]) }, { default: () => [a.value && g(tn, { transition: e.transition, appear: true }, { default: () => {
    var _a3;
    return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
  } })] }), [[Fn, { handler: o, options: e.options }, null]])), {};
} }), WA = U({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...we() }, "VLocaleProvider"), jA = te()({ name: "VLocaleProvider", props: WA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: l } = Sh(e);
  return le(() => {
    var _a3;
    return S("div", { class: ne(["v-locale-provider", l.value, e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), UA = U({ scrollable: Boolean, ...we(), ...Vt(), ...$e({ tag: "main" }) }, "VMain"), GA = te()({ name: "VMain", props: UA(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: l } = It(e), { mainStyles: a } = Dh(), { ssrBootStyles: o } = Ia();
  return le(() => g(e.tag, { class: ne(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: ge([a.value, o.value, l.value, e.style]) }, { default: () => {
    var _a3, _b2;
    return [e.scrollable ? S("div", { class: "v-main__scroller" }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function YA(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: l } = e;
  const a = re(false), o = re(0), i = _(() => {
    const u = typeof a.value == "boolean" ? "top" : a.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, a.value ? { [u]: me(o.value) } : { top: l.value.top }];
  });
  Tt(() => {
    se(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), Yt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(l.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, p = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (a.value = "top", o.value = d) : u === "up" && a.value === "bottom" || u === "down" && a.value === "top" ? (o.value = window.scrollY + c.top - p, a.value = true) : u === "down" && v <= 0 ? (o.value = 0, a.value = "bottom") : u === "up" && f <= 0 && (p ? a.value !== "top" && (o.value = -f + p + d, a.value = "top") : (o.value = c.top + f, a.value = "top")), r = window.scrollY;
  }
  return { isStuck: a, stickyStyles: i };
}
const KA = 100, XA = 20;
function vm(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function mm(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const l = vm(t), a = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (a - l) * Math.abs(a), n === e.length - 1 && (t *= 0.5);
  }
  return vm(t) * 1e3;
}
function qA() {
  const e = {};
  function t(a) {
    Array.from(a.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new nh(XA))).push([a.timeStamp, o]);
    });
  }
  function n(a) {
    Array.from(a.changedTouches).forEach((o) => {
      delete e[o.identifier];
    });
  }
  function l(a) {
    var _a3;
    const o = (_a3 = e[a]) == null ? void 0 : _a3.values().reverse();
    if (!o) throw new Error(`No samples for touch id ${a}`);
    const i = o[0], r = [], s = [];
    for (const u of o) {
      if (i[0] - u[0] > KA) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: mm(r), y: mm(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : ZA();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: l };
}
function ZA() {
  throw new Error();
}
function JA(e) {
  let { el: t, isActive: n, isTemporary: l, width: a, touchless: o, position: i } = e;
  Tt(() => {
    window.addEventListener("touchstart", x, { passive: true }), window.addEventListener("touchmove", V, { passive: false }), window.addEventListener("touchend", I, { passive: true });
  }), Yt(() => {
    window.removeEventListener("touchstart", x), window.removeEventListener("touchmove", V), window.removeEventListener("touchend", I);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = qA();
  let d = false;
  const f = re(false), v = re(0), p = re(0);
  let m;
  function h(y, C) {
    return (i.value === "left" ? y : i.value === "right" ? document.documentElement.clientWidth - y : i.value === "top" ? y : i.value === "bottom" ? document.documentElement.clientHeight - y : Oa()) - (C ? a.value : 0);
  }
  function b(y) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const w = i.value === "left" ? (y - p.value) / a.value : i.value === "right" ? (document.documentElement.clientWidth - y - p.value) / a.value : i.value === "top" ? (y - p.value) / a.value : i.value === "bottom" ? (document.documentElement.clientHeight - y - p.value) / a.value : Oa();
    return C ? et(w) : w;
  }
  function x(y) {
    if (o.value) return;
    const C = y.changedTouches[0].clientX, w = y.changedTouches[0].clientY, T = 25, P = i.value === "left" ? C < T : i.value === "right" ? C > document.documentElement.clientWidth - T : i.value === "top" ? w < T : i.value === "bottom" ? w > document.documentElement.clientHeight - T : Oa(), M = n.value && (i.value === "left" ? C < a.value : i.value === "right" ? C > document.documentElement.clientWidth - a.value : i.value === "top" ? w < a.value : i.value === "bottom" ? w > document.documentElement.clientHeight - a.value : Oa());
    (P || M || n.value && l.value) && (m = [C, w], p.value = h(r.value ? C : w, n.value), v.value = b(r.value ? C : w), d = p.value > -20 && p.value < 80, u(y), s(y));
  }
  function V(y) {
    const C = y.changedTouches[0].clientX, w = y.changedTouches[0].clientY;
    if (d) {
      if (!y.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), M = Math.abs(w - m[1]);
      (r.value ? P > M && P > 3 : M > P && M > 3) ? (f.value = true, d = false) : (r.value ? M : P) > 3 && (d = false);
    }
    if (!f.value) return;
    y.preventDefault(), s(y);
    const T = b(r.value ? C : w, false);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? p.value = h(r.value ? C : w, true) : T < 0 && (p.value = h(r.value ? C : w, false));
  }
  function I(y) {
    if (d = false, !f.value) return;
    s(y), f.value = false;
    const C = c(y.changedTouches[0].identifier), w = Math.abs(C.x), T = Math.abs(C.y);
    (r.value ? w > T && w > 400 : T > w && T > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || Oa()) : n.value = v.value > 0.5;
  }
  const k = _(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * a.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * a.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * a.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * a.value}px))` : Oa(), transition: "none" } : void 0);
  return Ht(f, () => {
    var _a3, _b2;
    const y = ((_a3 = t.value) == null ? void 0 : _a3.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    ht(() => {
      var _a4, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a4 = k.value) == null ? void 0 : _a4.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = k.value) == null ? void 0 : _c2.transition) || null);
    }), kt(() => {
      var _a4, _b3;
      (_a4 = t.value) == null ? void 0 : _a4.style.setProperty("transform", y), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: k };
}
function Oa() {
  throw new Error();
}
const QA = ["start", "end", "left", "right", "top", "bottom"], eD = U({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => QA.includes(e) }, sticky: Boolean, ...Kt(), ...we(), ...fd(), ...Ca({ mobile: null }), ...Pt(), ..._a(), ...ct(), ...He(Ay(), ["disableInitialFocus"]), ...$e({ tag: "nav" }), ...Ke() }, "VNavigationDrawer"), tD = te()({ name: "VNavigationDrawer", props: eD(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { isRtl: o } = At(), { themeClasses: i } = Ze(e), { borderClasses: r } = ln(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Je(() => e.color), { elevationClasses: c } = Mt(e), { displayClasses: d, mobile: f } = Cn(e), { roundedClasses: v } = yt(e), p = zh(), m = Ve(e, "modelValue", null, (R) => !!R), { ssrBootStyles: h } = Ia(), { scopeId: b } = Aa(), x = H(), V = re(false), { runOpenDelay: I, runCloseDelay: k } = vd(e, (R) => {
    V.value = R;
  }), y = _(() => e.rail && e.expandOnHover && V.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => cu(e.location, o.value)), w = $(() => e.persistent), T = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !T.value && C.value !== "bottom");
  Dy(e, { isActive: m, localTop: T, contentEl: x }), Ht(() => e.expandOnHover && e.rail != null, () => {
    se(V, (R) => l("update:rail", !R));
  }), Ht(() => !e.disableResizeWatcher, () => {
    se(T, (R) => !e.permanent && Be(() => m.value = !R));
  }), Ht(() => !e.disableRouteWatcher && !!p, () => {
    se(p.currentRoute, () => T.value && (m.value = false));
  }), se(() => e.permanent, (R) => {
    R && (m.value = true);
  }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
  const { isDragging: M, dragProgress: D } = JA({ el: x, isActive: m, isTemporary: T, width: y, touchless: $(() => e.touchless), position: C }), E = _(() => {
    const R = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : y.value;
    return M.value ? R * D.value : R;
  }), { layoutItemStyles: A, layoutItemScrimStyles: F } = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: E, elementSize: y, active: fa(m), disableTransitions: $(() => M.value), absolute: _(() => e.absolute || P.value && typeof j.value != "string") }), { isStuck: j, stickyStyles: W } = YA({ rootEl: x, isSticky: P, layoutItemStyles: A }), Y = Je(() => typeof e.scrim == "string" ? e.scrim : null), N = _(() => ({ ...M.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...F.value }));
  return pt({ VList: { bgColor: "transparent" } }), le(() => {
    const R = a.image || e.image;
    return S(be, null, [g(e.tag, J({ ref: x, onMouseenter: I, onMouseleave: k, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": V.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--persistent": w.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, A.value, h.value, W.value, e.style], inert: !m.value }, b, n), { default: () => {
      var _a3, _b2, _c2;
      return [R && S("div", { key: "image", class: "v-navigation-drawer__img" }, [a.image ? g(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, a.image) : g(bl, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), a.prepend && S("div", { class: "v-navigation-drawer__prepend" }, [(_a3 = a.prepend) == null ? void 0 : _a3.call(a)]), S("div", { class: "v-navigation-drawer__content" }, [(_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && S("div", { class: "v-navigation-drawer__append" }, [(_c2 = a.append) == null ? void 0 : _c2.call(a)])];
    } }), g(Nl, { name: "fade-transition" }, { default: () => [T.value && (M.value || m.value) && !!e.scrim && S("div", J({ class: ["v-navigation-drawer__scrim", Y.backgroundColorClasses.value], style: [N.value, Y.backgroundColorStyles.value], onClick: () => {
      w.value || (m.value = false);
    } }, b), null)] })]);
  }), { isStuck: j };
} }), nD = nn({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const l = My();
  return () => {
    var _a3;
    return l.value && ((_a3 = n.default) == null ? void 0 : _a3.call(n));
  };
} }), lD = 50, aD = 500;
function oD(e) {
  let { toggleUpDown: t } = e, n = -1, l = -1;
  kt(o);
  function a(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      l = window.setInterval(() => i(r), lD);
    }, aD);
  }
  function o() {
    window.clearTimeout(n), window.clearInterval(l), window.removeEventListener("pointerup", o), document.removeEventListener("blur", o);
  }
  kt(o);
  function i(r) {
    t(r === "up");
  }
  return { holdStart: a, holdStop: o };
}
const iD = U({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...He(Di(), ["modelValue", "validationValue"]) }, "VNumberInput"), rD = te()({ name: "VNumberInput", props: { ...iD() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = H(), { holdStart: a, holdStop: o } = oD({ toggleUpDown: M }), i = yo(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = re(e.focused), { decimalSeparator: u } = lt(), c = _(() => {
    var _a3;
    return ((_a3 = e.decimalSeparator) == null ? void 0 : _a3[0]) || u.value;
  });
  function d(O) {
    let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const pe = G == null ? String(O) : O.toFixed(G);
    if (s.value && ie) return Number(pe).toString().replace(".", c.value);
    if (e.minFractionDigits === null || G !== null && G < e.minFractionDigits) return pe.replace(".", c.value);
    let [K, fe] = pe.split(".");
    return fe = (fe ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [K, fe].filter(Boolean).join(c.value);
  }
  const f = Ve(e, "modelValue", null, (O) => O ?? null, (O) => O == null ? O ?? null : et(Number(O), e.min, e.max)), v = re(null), p = re(null);
  se(f, (O) => {
    var _a3;
    s.value && !r.value && Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, ".")) === O || (O == null ? (v.value = null, p.value = null) : isNaN(O) || (v.value = d(O), p.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set(O) {
    if (O === null || O === "") {
      f.value = null, v.value = null, p.value = null;
      return;
    }
    const G = Number(O.replace(c.value, "."));
    isNaN(G) || (v.value = O, p.value = G, G <= e.max && G >= e.min && (f.value = G));
  } }), h = _(() => {
    var _a3;
    if (p.value === null) return false;
    const O = Number((_a3 = v.value) == null ? void 0 : _a3.replace(c.value, "."));
    return O !== et(O, e.min, e.max);
  }), b = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), x = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), V = _(() => e.hideInput ? "stacked" : e.controlVariant), I = $(() => V.value === "split" ? "$plus" : "$collapse"), k = $(() => V.value === "split" ? "$minus" : "$expand"), y = $(() => V.value === "split" ? "default" : "small"), C = $(() => V.value === "stacked" ? "auto" : "100%"), w = { props: { onClick: A, onPointerup: F, onPointerdown: j, onPointercancel: F } }, T = { props: { onClick: A, onPointerup: F, onPointerdown: W, onPointercancel: F } };
  se(() => e.precision, () => N()), se(() => e.minFractionDigits, () => N()), Tt(() => {
    Y();
  });
  function P(O) {
    if (O == null) return 0;
    const G = O.toString(), ie = G.indexOf(".");
    return ~ie ? G.length - ie : 0;
  }
  function M() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    if (r.value) return;
    if (f.value == null) {
      m.value = d(et(0, e.min, e.max));
      return;
    }
    let G = Math.max(P(f.value), P(e.step));
    e.precision != null && (G = Math.max(G, e.precision)), O ? b.value && (m.value = d(f.value + e.step, G)) : x.value && (m.value = d(f.value - e.step, G));
  }
  function D(O) {
    var _a3;
    if (!O.data) return;
    const G = O.target, { value: ie, selectionStart: pe, selectionEnd: K } = G ?? {}, fe = ie ? ie.slice(0, pe) + O.data + ie.slice(K) : O.data, Te = Vw(fe, e.precision, c.value);
    if (new RegExp(`^-?\\d*${fr(c.value)}?\\d*$`).test(fe) || (O.preventDefault(), G.value = Te, Be(() => m.value = Te)), e.precision != null) {
      if (((_a3 = fe.split(c.value)[1]) == null ? void 0 : _a3.length) > e.precision) {
        O.preventDefault(), G.value = Te, Be(() => m.value = Te);
        const xe = (pe ?? 0) + O.data.length;
        G.setSelectionRange(xe, xe);
      }
      e.precision === 0 && fe.endsWith(c.value) && (O.preventDefault(), G.value = Te, Be(() => m.value = Te));
    }
  }
  async function E(O) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(O.key) || O.ctrlKey || ["ArrowDown", "ArrowUp"].includes(O.key) && (O.preventDefault(), O.stopPropagation(), Y(), await Be(), O.key === "ArrowDown" ? M(false) : M());
  }
  function A(O) {
    O.stopPropagation();
  }
  function F(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.releasePointerCapture(O.pointerId), O.preventDefault(), o();
  }
  function j(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), a("up");
  }
  function W(O) {
    var _a3;
    (_a3 = O.currentTarget) == null ? void 0 : _a3.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), a("down");
  }
  function Y() {
    if (r.value || !l.value) return;
    const O = l.value.value, G = Number(O.replace(c.value, "."));
    O && !isNaN(G) ? m.value = d(et(G, e.min, e.max)) : m.value = null;
  }
  function N() {
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
  function z() {
    Y();
  }
  return le(() => {
    const { modelValue: O, type: G, ...ie } = Qn.filterProps(e);
    function pe() {
      return n.increment ? g(Fe, { key: "increment-defaults", defaults: { VBtn: { disabled: !b.value, height: C.value, size: y.value, icon: I.value, variant: "text" } } }, { default: () => [n.increment(w)] }) : g(je, { "aria-hidden": "true", "data-testid": "increment", disabled: !b.value, height: C.value, icon: I.value, key: "increment-btn", onClick: A, onPointerdown: j, onPointerup: F, onPointercancel: F, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function K() {
      return n.decrement ? g(Fe, { key: "decrement-defaults", defaults: { VBtn: { disabled: !x.value, height: C.value, size: y.value, icon: k.value, variant: "text" } } }, { default: () => [n.decrement(T)] }) : g(je, { "aria-hidden": "true", "data-testid": "decrement", disabled: !x.value, height: C.value, icon: k.value, key: "decrement-btn", onClick: A, onPointerdown: W, onPointerup: F, onPointercancel: F, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function fe() {
      return S("div", { class: "v-number-input__control" }, [K(), g(xn, { vertical: V.value !== "stacked" }, null), pe()]);
    }
    function Te() {
      return !e.hideInput && !e.inset ? g(xn, { vertical: true }, null) : void 0;
    }
    const xe = V.value === "split" ? S("div", { class: "v-number-input__control" }, [g(xn, { vertical: true }, null), pe()]) : e.reverse || V.value === "hidden" ? void 0 : S(be, null, [Te(), fe()]), ce = n["append-inner"] || xe, B = V.value === "split" ? S("div", { class: "v-number-input__control" }, [K(), g(xn, { vertical: true }, null)]) : e.reverse && V.value !== "hidden" ? S(be, null, [fe(), Te()]) : void 0, L = n["prepend-inner"] || B;
    return g(Qn, J({ ref: l }, ie, { modelValue: m.value, "onUpdate:modelValue": (ee) => m.value = ee, focused: s.value, "onUpdate:focused": (ee) => s.value = ee, validationValue: f.value, error: e.error || h.value || void 0, onBeforeinput: D, onFocus: Z, onBlur: z, onKeydown: E, class: ["v-number-input", { "v-number-input--default": V.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": V.value === "split", "v-number-input--stacked": V.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ce ? function() {
      var _a3;
      for (var ee = arguments.length, de = new Array(ee), oe = 0; oe < ee; oe++) de[oe] = arguments[oe];
      return S(be, null, [(_a3 = n["append-inner"]) == null ? void 0 : _a3.call(n, ...de), xe]);
    } : void 0, "prepend-inner": L ? function() {
      var _a3;
      for (var ee = arguments.length, de = new Array(ee), oe = 0; oe < ee; oe++) de[oe] = arguments[oe];
      return S(be, null, [B, (_a3 = n["prepend-inner"]) == null ? void 0 : _a3.call(n, ...de)]);
    } : void 0 });
  }), Et({}, l);
} }), sD = U({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...St(), ...Vt(), ...Pi(), ...cn(Ai({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), uD = te()({ name: "VOtpInput", props: sD(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const { densityClasses: o } = Wt(e), { dimensionStyles: i } = It(e), { isFocused: r, focus: s, blur: u } = Vl(e), c = Ve(e, "modelValue", "", (M) => M == null ? [] : String(M).split(""), (M) => M.join("")), { t: d } = lt(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), p = H(-1), m = H(), h = H([]), b = _(() => h.value[p.value]);
  let x = false;
  Ht(() => e.autofocus, () => {
    const M = Za();
    M.run(() => {
      const { intersectionRef: D, isIntersecting: E } = ki();
      ht(() => {
        D.value = h.value[0];
      }), se(E, (A) => {
        var _a3;
        A && ((_a3 = D.value) == null ? void 0 : _a3.focus(), M.stop());
      });
    });
  });
  function V() {
    if (P(b.value.value)) {
      b.value.value = "";
      return;
    }
    if (x) return;
    const M = c.value.slice(), D = b.value.value;
    M[p.value] = D;
    let E = null;
    p.value > c.value.length ? E = c.value.length + 1 : p.value + 1 !== f.value && (E = "next"), c.value = M, E && sa(m.value, E);
  }
  function I() {
    x = false, V();
  }
  function k(M) {
    const D = c.value.slice(), E = p.value;
    let A = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(M.key) && (M.preventDefault(), M.key === "ArrowLeft" ? A = "prev" : M.key === "ArrowRight" ? A = "next" : ["Backspace", "Delete"].includes(M.key) && (D[p.value] = "", c.value = D, p.value > 0 && M.key === "Backspace" ? A = "prev" : requestAnimationFrame(() => {
      var _a3;
      (_a3 = h.value[E]) == null ? void 0 : _a3.select();
    })), requestAnimationFrame(() => {
      A != null && sa(m.value, A);
    }));
  }
  function y(M, D) {
    var _a3;
    D.preventDefault(), D.stopPropagation();
    const E = ((_a3 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a3.getData("Text").trim().slice(0, f.value)) ?? "", A = E.length - 1 === -1 ? M : E.length - 1;
    P(E) || (c.value = E.split(""), p.value = A);
  }
  function C() {
    c.value = [];
  }
  function w(M, D) {
    s(), p.value = D;
  }
  function T() {
    u(), p.value = -1;
  }
  function P(M) {
    return e.type === "number" && /[^0-9]/g.test(M);
  }
  return pt({ VField: { color: $(() => e.color), bgColor: $(() => e.color), baseColor: $(() => e.baseColor), disabled: $(() => e.disabled), error: $(() => e.error), variant: $(() => e.variant), rounded: $(() => e.rounded) } }, { scoped: true }), se(c, (M) => {
    M.length === f.value && l("finish", M.join(""));
  }, { deep: true }), se(p, (M) => {
    M < 0 || Be(() => {
      var _a3;
      (_a3 = h.value[M]) == null ? void 0 : _a3.select();
    });
  }), le(() => {
    var _a3;
    const [M, D] = tl(n);
    return S("div", J({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, M), [S("div", { ref: m, class: "v-otp-input__content", style: ge([i.value]) }, [v.value.map((E, A) => S(be, null, [e.divider && A !== 0 && S("span", { class: "v-otp-input__divider" }, [e.divider]), g(Gl, { focused: r.value && e.focusAll || p.value === A, key: A }, { ...a, loader: void 0, default: () => S("input", { ref: (F) => h.value[A] = F, "aria-label": d(e.label, A + 1), autofocus: A === 0 && e.autofocus, autocomplete: "one-time-code", class: ne(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: A === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[A], onInput: V, onFocus: (F) => w(F, A), onBlur: T, onKeydown: k, onCompositionstart: () => x = true, onCompositionend: I, onPaste: (F) => y(A, F) }, null) })])), S("input", J({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), g(Jn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a4;
      return [((_a4 = a.loader) == null ? void 0 : _a4.call(a)) ?? g(Wl, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a3 = a.default) == null ? void 0 : _a3.call(a)])]);
  }), { blur: () => {
    var _a3;
    (_a3 = h.value) == null ? void 0 : _a3.some((M) => M.blur());
  }, focus: () => {
    var _a3;
    (_a3 = h.value) == null ? void 0 : _a3[0].focus();
  }, reset: C, isFocused: r };
} });
function cD(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const dD = U({ scale: { type: [Number, String], default: 0.5 }, ...we() }, "VParallax"), fD = te()({ name: "VParallax", props: dD(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: l, isIntersecting: a } = ki(), { resizeRef: o, contentRect: i } = Tn(), { height: r } = Cn(), s = H();
  ht(() => {
    var _a3;
    l.value = o.value = (_a3 = s.value) == null ? void 0 : _a3.$el;
  });
  let u;
  se(a, (v) => {
    v ? (u = Lr(l.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), Yt(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), se(r, f), se(() => {
    var _a3;
    return (_a3 = i.value) == null ? void 0 : _a3.height;
  }, f);
  const c = _(() => 1 - et(Number(e.scale)));
  let d = -1;
  function f() {
    !a.value || qn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a3;
      const v = ((_a3 = s.value) == null ? void 0 : _a3.$el).querySelector(".v-img__img");
      if (!v) return;
      const p = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, h = l.value.getBoundingClientRect().top + m, b = i.value.height, x = h + (b - p) / 2, V = cD((m - x) * c.value), I = Math.max(1, (c.value * (p - b) + b) / b);
      v.style.setProperty("transform", `translateY(${V}px) scale(${I})`);
    }));
  }
  return le(() => g(bl, { class: ne(["v-parallax", { "v-parallax--active": a.value }, e.class]), style: ge(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), vD = U({ ...Yr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), mD = te()({ name: "VRadio", props: vD(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const l = jl.filterProps(e);
    return g(jl, J(l, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), gD = U({ height: { type: [Number, String], default: "auto" }, ...He(Il(), ["direction"]), ...He(ld(), ["multiple"]), trueIcon: { type: Pe, default: "$radioOn" }, falseIcon: { type: Pe, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), hD = te()({ name: "VRadioGroup", inheritAttrs: false, props: gD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = Ot(), o = _(() => e.id || `radio-group-${a}`), i = Ve(e, "modelValue"), r = H();
  return le(() => {
    const [s, u] = tl(n), c = Gt.filterProps(e), d = jl.filterProps(e), f = l.label ? l.label({ label: e.label, props: { for: o.value } }) : e.label;
    return g(Gt, J({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...l, default: (v) => {
      let { id: p, messagesId: m, isDisabled: h, isReadonly: b } = v;
      return S(be, null, [f && g(ho, { id: p.value }, { default: () => [f] }), g(ey, J(d, { id: p.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: h.value, readonly: b.value, "aria-labelledby": f ? p.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (x) => i.value = x }), l)]);
    } });
  }), Et({}, r);
} }), yD = U({ ...Pi(), ...Il(), ...xb(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), bD = te()({ name: "VRangeSlider", inheritAttrs: false, props: yD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: l, attrs: a } = t;
  const o = H(), i = H(), r = H(), { rtlClasses: s } = At();
  function u(D) {
    if (!o.value || !i.value) return;
    const E = Bu(D, o.value.$el, e.direction), A = Bu(D, i.value.$el, e.direction), F = Math.abs(E), j = Math.abs(A);
    return F < j || F === j && E < 0 ? o.value.$el : i.value.$el;
  }
  const c = kb(e), d = Ve(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((E) => c.roundValue(E)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: p, min: m, mousePressed: h, onSliderMousedown: b, onSliderTouchstart: x, position: V, trackContainerRef: I, disabled: k, readonly: y } = wb({ props: e, steps: c, onSliderStart: () => {
    var _a3;
    if (k.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    l("start", d.value);
  }, onSliderEnd: (D) => {
    var _a3, _b2;
    let { value: E } = D;
    if (k.value || y.value) (_a3 = f.value) == null ? void 0 : _a3.blur();
    else {
      const A = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [E, d.value[1]] : [d.value[0], E];
      !e.strict && A[0] < A[1] && (d.value = A);
    }
    l("end", d.value);
  }, onSliderMove: (D) => {
    var _a3, _b2, _c2, _d2, _e;
    let { value: E } = D;
    const [A, F] = d.value;
    if (k.value || y.value) {
      (_a3 = f.value) == null ? void 0 : _a3.blur();
      return;
    }
    !e.strict && A === F && A !== m.value && (f.value = E > A ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(E, F), F] : d.value = [A, Math.max(A, E)];
  }, getActiveThumb: u }), { isFocused: C, focus: w, blur: T } = Vl(e), P = _(() => V(d.value[0])), M = _(() => V(d.value[1]));
  return le(() => {
    const D = Gt.filterProps(e), [E, A] = tl(a), F = !!(e.label || n.label || n.prepend);
    return g(Gt, J({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": h.value, "v-slider--disabled": k.value }, s.value, e.class], style: e.style, ref: r }, D, E, { focused: C.value }), { ...n, prepend: F ? (j) => {
      var _a3, _b2;
      return S(be, null, [((_a3 = n.label) == null ? void 0 : _a3.call(n, j)) ?? (e.label ? g(ho, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, j)]);
    } : void 0, default: (j) => {
      var _a3, _b2;
      let { id: W, messagesId: Y } = j;
      return S("div", { class: "v-slider__container", onMousedown: y.value ? void 0 : b, onTouchstartPassive: y.value ? void 0 : x }, [S("input", { id: `${W.value}_start`, name: e.name || W.value, disabled: k.value, readonly: y.value, tabindex: "-1", value: d.value[0] }, null), S("input", { id: `${W.value}_stop`, name: e.name || W.value, disabled: k.value, readonly: y.value, tabindex: "-1", value: d.value[1] }, null), g(Cb, { ref: I, start: P.value, stop: M.value }, { "tick-label": n["tick-label"] }), g($u, J({ ref: o, "aria-describedby": Y.value, focused: C && f.value === ((_a3 = o.value) == null ? void 0 : _a3.$el), modelValue: d.value[0], "onUpdate:modelValue": (N) => d.value = [N, d.value[1]], onFocus: (N) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = o.value) == null ? void 0 : _a4.$el, p.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && N.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] }), g($u, J({ ref: i, "aria-describedby": Y.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (N) => d.value = [d.value[0], N], onFocus: (N) => {
        var _a4, _b3, _c2, _d2;
        w(), f.value = (_a4 = i.value) == null ? void 0 : _a4.$el, p.value !== m.value && d.value[0] === d.value[1] && d.value[0] === p.value && N.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: d.value[0], max: p.value, position: M.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Et({ focus: () => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.$el.focus();
  } }, r);
} }), pD = U({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Pe, default: "$ratingEmpty" }, fullIcon: { type: Pe, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...we(), ...St(), ...al(), ...$e(), ...Ke() }, "VRating"), SD = te()({ name: "VRating", props: pD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = lt(), { themeClasses: a } = Ze(e), o = H(), i = Ve(e, "modelValue"), r = _(() => et(parseFloat(i.value), 0, Number(e.length))), s = _(() => Yn(Number(e.length), 1)), u = _(() => s.value.flatMap((I) => e.halfIncrements ? [I - 0.5, I] : [I])), c = re(-1), d = _(() => u.value.map((I) => {
    const k = e.hover && c.value > -1, y = r.value >= I, C = c.value >= I, T = (k ? C : y) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, M = y || C ? P : e.color;
    return { isFilled: y, isHovered: C, icon: T, color: M };
  })), f = _(() => [0, ...u.value].map((I) => {
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
  })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function p() {
    var _a3, _b2;
    (_b2 = (_a3 = o.value) == null ? void 0 : _a3.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(I) {
    if (e.disabled || e.readonly || I.ctrlKey || I.altKey) return;
    const k = e.halfIncrements ? 0.5 : 1;
    if (I.key === "ArrowRight") {
      const y = Math.min(Number(e.length), Number(i.value ?? 0) + k);
      i.value = y, Be(() => p());
    }
    if (I.key === "ArrowLeft") {
      const y = Math.max(0, Number(i.value ?? 0) - k);
      i.value = y, Be(() => p());
    }
  }
  const h = Ot(), b = _(() => e.name ?? `v-rating-${h}`);
  function x(I) {
    var _a3, _b2;
    let { value: k, index: y, showStar: C = true } = I;
    const { onMouseenter: w, onMouseleave: T, onClick: P } = f.value[y + 1], M = `${b.value}-${String(k).replace(".", "-")}`, D = y === v.value, E = { color: (_a3 = d.value[y]) == null ? void 0 : _a3.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[y]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return S(be, null, [S("label", { for: M, class: ne({ "v-rating__item--half": e.halfIncrements && k % 1 > 0, "v-rating__item--full": e.halfIncrements && k % 1 === 0 }), onMouseenter: w, onMouseleave: T, onClick: P }, [S("span", { class: "v-rating__hidden" }, [l(e.itemAriaLabel, k, e.length)]), C ? n.item ? n.item({ ...d.value[y], props: E, value: k, index: y, rating: r.value }) : g(je, J({ "aria-label": l(e.itemAriaLabel, k, e.length) }, E), null) : void 0]), S("input", { class: "v-rating__hidden", name: b.value, id: M, type: "radio", value: k, checked: r.value === k, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function V(I) {
    return n["item-label"] ? n["item-label"](I) : I.label ? S("span", null, [I.label]) : S("span", null, [Le("\xA0")]);
  }
  return le(() => {
    var _a3;
    const I = !!((_a3 = e.itemLabels) == null ? void 0 : _a3.length) || n["item-label"];
    return g(e.tag, { class: ne(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, a.value, e.class]), style: ge(e.style), ref: o }, { default: () => [g(x, { value: 0, index: -1, showStar: false }, null), s.value.map((k, y) => {
      var _a4, _b2;
      return S("div", { class: "v-rating__wrapper" }, [I && e.itemLabelPosition === "top" ? V({ value: k, index: y, label: (_a4 = e.itemLabels) == null ? void 0 : _a4[y] }) : void 0, S("div", { class: "v-rating__item" }, [e.halfIncrements ? S(be, null, [g(x, { value: k - 0.5, index: y * 2 }, null), g(x, { value: k, index: y * 2 + 1 }, null)]) : g(x, { value: k, index: y }, null)]), I && e.itemLabelPosition === "bottom" ? V({ value: k, index: y, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[y] }) : void 0]);
    })] });
  }), {};
} }), xD = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function kD(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return S("div", { class: ne(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function gm(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => ds(t));
}
function ds(e) {
  let t = [];
  if (!e) return t;
  const n = xD[e];
  if (e !== n) {
    if (e.includes(",")) return hm(e);
    if (e.includes("@")) return gm(e);
    n.includes(",") ? t = hm(n) : n.includes("@") ? t = gm(n) : n && t.push(ds(n));
  }
  return [kD(e, t)];
}
function hm(e) {
  return e.replace(/\s/g, "").split(",").map(ds);
}
const wD = U({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...Vt(), ...Pt(), ...Ke() }, "VSkeletonLoader"), CD = te()({ name: "VSkeletonLoader", inheritAttrs: false, props: wD(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.color), { dimensionStyles: i } = It(e), { elevationClasses: r } = Mt(e), { themeClasses: s } = Ze(e), { t: u } = lt(), c = _(() => ds(ut(e.type).join(",")));
  return le(() => {
    var _a3;
    const d = !l.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? S("div", J({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, a.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : S(be, null, [(_a3 = l.default) == null ? void 0 : _a3.call(l)]);
  }), {};
} }), _D = te()({ name: "VSlideGroupItem", props: Ta(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = zl(e, ad);
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, { isSelected: l.isSelected.value, select: l.select, toggle: l.toggle, selectedClass: l.selectedClass.value });
  };
} });
function VD(e) {
  const t = re(e());
  let n = -1;
  function l() {
    clearInterval(n);
  }
  function a() {
    l(), Be(() => t.value = e());
  }
  function o(i) {
    const r = i ? getComputedStyle(i) : { transitionDuration: 0.2 }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (l(), t.value <= 0) return;
    const u = performance.now();
    n = window.setInterval(() => {
      const c = performance.now() - u + s;
      t.value = Math.max(e() - c, 0), t.value <= 0 && l();
    }, s);
  }
  return kt(l), { clear: l, time: t, start: o, reset: a };
}
const xp = U({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...ll({ location: "bottom" }), ...mo(), ...ct(), ...Vn(), ...Ke(), ...He(Ti({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), Ku = te()({ name: "VSnackbar", props: xp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), { positionClasses: a } = go(e), { scopeId: o } = Aa(), { themeClasses: i } = Ze(e), { colorClasses: r, colorStyles: s, variantClasses: u } = _l(e), { roundedClasses: c } = yt(e), d = VD(() => Number(e.timeout)), f = H(), v = H(), p = re(false), m = re(0), h = H(), b = Ue(ni, void 0);
  Ht(() => !!b, () => {
    const M = Dh();
    ht(() => {
      h.value = M.mainStyles.value;
    });
  }), se(l, V), se(() => e.timeout, V), Tt(() => {
    l.value && V();
  });
  let x = -1;
  function V() {
    d.reset(), window.clearTimeout(x);
    const M = Number(e.timeout);
    if (!l.value || M === -1) return;
    const D = Rc(v.value);
    d.start(D), x = window.setTimeout(() => {
      l.value = false;
    }, M);
  }
  function I() {
    d.reset(), window.clearTimeout(x);
  }
  function k() {
    p.value = true, I();
  }
  function y() {
    p.value = false, V();
  }
  function C(M) {
    m.value = M.touches[0].clientY;
  }
  function w(M) {
    Math.abs(m.value - M.changedTouches[0].clientY) > 50 && (l.value = false);
  }
  function T() {
    p.value && y();
  }
  const P = _(() => e.location.split(" ").reduce((M, D) => (M[`v-snackbar--${D}`] = true, M), {}));
  return le(() => {
    const M = Jn.filterProps(e), D = !!(n.default || n.text || e.text);
    return g(Jn, J({ ref: f, class: ["v-snackbar", { "v-snackbar--active": l.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, a.value, e.class], style: [h.value, e.style] }, M, { modelValue: l.value, "onUpdate:modelValue": (E) => l.value = E, contentProps: J({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: k, onPointerleave: y }, M.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: w, onAfterLeave: T }, o), { default: () => {
      var _a3, _b2;
      return [Cl(false, "v-snackbar"), e.timer && !p.value && S("div", { key: "timer", class: "v-snackbar__timer" }, [g(jr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && S("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && g(Fe, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [S("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: l })])] })];
    }, activator: n.activator });
  }), Et({}, f);
} }), ID = U({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...He(xp(), ["modelValue"]) }, "VSnackbarQueue"), PD = te()({ name: "VSnackbarQueue", props: ID(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { t: a } = lt(), o = re(false), i = re(false), r = re();
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
    n("update:modelValue", v), r.value = typeof f == "string" ? { text: f } : f, Be(() => {
      o.value = true;
    });
  }
  function c() {
    o.value = false;
  }
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: a(e.closeText) }));
  le(() => {
    const f = !!(e.closable || l.actions), { modelValue: v, ...p } = Ku.filterProps(e);
    return S(be, null, [i.value && !!r.value && (l.default ? g(Fe, { defaults: { VSnackbar: r.value } }, { default: () => [l.default({ item: r.value })] }) : g(Ku, J(p, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: l.text ? () => {
      var _a3;
      return (_a3 = l.text) == null ? void 0 : _a3.call(l, { item: r.value });
    } : void 0, actions: f ? () => S(be, null, [l.actions ? g(Fe, { defaults: { VBtn: d.value } }, { default: () => [l.actions({ item: r.value, props: { onClick: c } })] }) : g(je, J(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), kp = U({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), wp = U({ autoLineWidth: Boolean, ...kp() }, "VBarline"), ym = te()({ name: "VBarline", props: wp(), setup(e, t) {
  let { slots: n } = t;
  const l = Ot(), a = _(() => e.id || `barline-${l}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((h) => wt(h, e.itemValue, h)));
  function d(h, b) {
    const { minX: x, maxX: V, minY: I, maxY: k } = b, y = h.length;
    let C = e.max != null ? Number(e.max) : Math.max(...h), w = e.min != null ? Number(e.min) : Math.min(...h);
    w > 0 && e.min == null && (w = 0), C < 0 && e.max == null && (C = 0);
    const T = V / (y === 1 ? 2 : y), P = (k - I) / (C - w || 1), M = k - Math.abs(w * P);
    return h.map((D, E) => {
      const A = Math.abs(P * D);
      return { x: x + E * T, y: M - A + +(D < 0) * A, height: A, value: D };
    });
  }
  const f = _(() => {
    const h = [], b = d(c.value, u.value), x = b.length;
    for (let V = 0; h.length < x; V++) {
      const I = b[V];
      let k = e.labels[V];
      k || (k = typeof I == "object" ? I.value : I), h.push({ x: I.x, value: String(k) });
    }
    return h;
  }), v = _(() => d(c.value, u.value)), p = _(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  le(() => {
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return S("svg", { display: "block" }, [S("defs", null, [S("linearGradient", { id: a.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [h.map((b, x) => S("stop", { offset: x / Math.max(h.length - 1, 1), "stop-color": b || "currentColor" }, null))])]), S("clipPath", { id: `${a.value}-clip` }, [v.value.map((b) => S("rect", { x: b.x + p.value, y: b.y, width: r.value, height: b.height, rx: m.value, ry: m.value }, [e.autoDraw && !qn() && S(be, null, [S("animate", { attributeName: "y", from: b.y + b.height, to: b.y, dur: `${o.value}ms`, fill: "freeze" }, null), S("animate", { attributeName: "height", from: "0", to: b.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && S("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((b, x) => {
      var _a3;
      return S("text", { x: b.x + p.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: x, value: b.value })) ?? b.value]);
    })]), S("g", { "clip-path": `url(#${a.value}-clip)`, fill: `url(#${a.value})` }, [S("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function TD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const a = e.shift(), o = e[e.length - 1];
  return (n ? `M${a.x} ${l - a.x + 2} L${a.x} ${a.y}` : `M${a.x} ${a.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || a, c = s && AD(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(bm(u, i), bm(s, i)), v = d / 2 < t ? d / 2 : t, p = pm(u, i, v), m = pm(s, i, v);
    return `L${p.x} ${p.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${l - a.x + 2} Z` : "");
}
function ji(e) {
  return parseInt(e, 10);
}
function AD(e, t, n) {
  return ji(e.x + n.x) === ji(2 * t.x) && ji(e.y + n.y) === ji(2 * t.y);
}
function bm(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function pm(e, t, n) {
  const l = { x: e.x - t.x, y: e.y - t.y }, a = Math.sqrt(l.x * l.x + l.y * l.y), o = { x: l.x / a, y: l.y / a };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const Cp = U({ fill: Boolean, ...kp() }, "VTrendline"), Sm = te()({ name: "VTrendline", props: Cp(), setup(e, t) {
  let { slots: n } = t;
  const l = Ot(), a = _(() => e.id || `trendline-${l}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = H(0), r = H(null);
  function s(h, b) {
    const { minX: x, maxX: V, minY: I, maxY: k } = b;
    h.length === 1 && (h = [h[0], h[0]]);
    const y = h.length, C = e.max != null ? Number(e.max) : Math.max(...h), w = e.min != null ? Number(e.min) : Math.min(...h), T = (V - x) / (y - 1), P = (k - I) / (C - w || 1);
    return h.map((M, D) => ({ x: x + D * T, y: k - (M - w) * P, value: M }));
  }
  const u = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const h = Number(e.padding);
    return { minX: h, maxX: d.value - h, minY: h, maxY: parseInt(e.height, 10) - h };
  }), v = _(() => e.modelValue.map((h) => wt(h, e.itemValue, h))), p = _(() => {
    const h = [], b = s(v.value, f.value), x = b.length;
    for (let V = 0; h.length < x; V++) {
      const I = b[V];
      let k = e.labels[V];
      k || (k = typeof I == "object" ? I.value : I), h.push({ x: I.x, value: String(k) });
    }
    return h;
  });
  se(() => e.modelValue, async () => {
    if (await Be(), !e.autoDraw || !r.value || qn()) return;
    const h = r.value, b = h.getTotalLength();
    e.fill ? (h.style.transformOrigin = "bottom center", h.style.transition = "none", h.style.transform = "scaleY(0)", h.getBoundingClientRect(), h.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, h.style.transform = "scaleY(1)") : (h.style.strokeDasharray = `${b}`, h.style.strokeDashoffset = `${b}`, h.getBoundingClientRect(), h.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, h.style.strokeDashoffset = "0"), i.value = b;
  }, { immediate: true });
  function m(h) {
    const b = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return TD(s(v.value, f.value), b, h, parseInt(e.height, 10));
  }
  le(() => {
    var _a3;
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return S("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [S("defs", null, [S("linearGradient", { id: a.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [h.map((b, x) => S("stop", { offset: x / Math.max(h.length - 1, 1), "stop-color": b || "currentColor" }, null))])]), u.value && S("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [p.value.map((b, x) => {
      var _a4;
      return S("text", { x: b.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a4 = n.label) == null ? void 0 : _a4.call(n, { index: x, value: b.value })) ?? b.value]);
    })]), S("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${a.value})` : "none", stroke: e.fill ? "none" : `url(#${a.value})` }, null), e.fill && S("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a3 = e.gradient) == null ? void 0 : _a3[0]) }, null)]);
  });
} }), DD = U({ type: { type: String, default: "trend" }, ...wp(), ...Cp() }, "VSparkline"), MD = te()({ name: "VSparkline", props: DD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Lt(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  le(() => {
    const r = e.type === "trend" ? Sm : ym, s = e.type === "trend" ? Sm.filterProps(e) : ym.filterProps(e);
    return g(r, J({ key: e.type, class: l.value, style: a.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), ED = U({ ...we(), ...$y({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), BD = te()({ name: "VSpeedDial", props: ED(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), a = H(), o = _(() => {
    var _a3;
    const [r, s = "center"] = ((_a3 = e.location) == null ? void 0 : _a3.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return le(() => {
    const r = so.filterProps(e);
    return g(so, J(r, { modelValue: l.value, "onUpdate:modelValue": (s) => l.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: a, transition: "fade-transition" }), { ...n, default: (s) => g(Fe, { defaults: { VBtn: { size: "small" } } }, { default: () => [g(tn, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n, s)];
    } })] }) });
  }), {};
} }), jd = Symbol.for("vuetify:v-stepper"), _p = U({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), Vp = te()({ name: "VStepperActions", props: _p(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { t: a } = lt();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return le(() => {
    const r = { onClick: o }, s = { onClick: i };
    return S("div", { class: "v-stepper-actions" }, [g(Fe, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: a(e.prevText), variant: "text" } } }, { default: () => {
      var _a3;
      return [((_a3 = l.prev) == null ? void 0 : _a3.call(l, { props: r })) ?? g(je, r, null)];
    } }), g(Fe, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: a(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a3;
      return [((_a3 = l.next) == null ? void 0 : _a3.call(l, { props: s })) ?? g(je, s, null)];
    } })]);
  }), {};
} }), Ip = kl("v-stepper-header"), $D = U({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Pe, default: "$complete" }, editable: Boolean, editIcon: { type: Pe, default: "$edit" }, error: Boolean, errorIcon: { type: Pe, default: "$error" }, icon: Pe, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), RD = U({ ...$D(), ...Ta() }, "VStepperItem"), Pp = te()({ name: "VStepperItem", directives: { vRipple: zt }, props: RD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = zl(e, jd, true), a = _(() => (l == null ? void 0 : l.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : l.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: a.value, value: e.value }));
  return le(() => {
    var _a3, _b2, _c2;
    const f = (!l || l.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), p = !!(e.subtitle != null || n.subtitle);
    function m() {
      l == null ? void 0 : l.toggle();
    }
    return nt(S("button", { class: ne(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, l == null ? void 0 : l.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && Cl(true, "v-stepper-item"), g(wn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a4;
      return [((_a4 = n.icon) == null ? void 0 : _a4.call(n, d.value)) ?? (c.value ? g(qe, { icon: c.value }, null) : a.value)];
    } }), S("div", { class: "v-stepper-item__content" }, [v && S("div", { key: "title", class: "v-stepper-item__title" }, [((_a3 = n.title) == null ? void 0 : _a3.call(n, d.value)) ?? e.title]), p && S("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[zt, e.editable && e.ripple, null]]);
  }), {};
} }), FD = U({ ...He(Qr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), Tp = te()({ name: "VStepperWindow", props: FD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ue(jd, null), a = Ve(e, "modelValue"), o = _({ get() {
    var _a3;
    return a.value != null || !l ? a.value : (_a3 = l.items.value.find((i) => l.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    a.value = i;
  } });
  return le(() => {
    const i = ya.filterProps(e);
    return g(ya, J({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), LD = U({ ...es() }, "VStepperWindowItem"), Ap = te()({ name: "VStepperWindowItem", props: LD(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const l = ba.filterProps(e);
    return g(ba, J({ _as: "VStepperWindowItem" }, l, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), OD = U({ altLabels: Boolean, bgColor: String, completeIcon: Pe, editIcon: Pe, editable: Boolean, errorIcon: Pe, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...Ca() }, "Stepper"), ND = U({ ...OD(), ...Pa({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...hd(), ...cn(_p(), ["prevText", "nextText"]) }, "VStepper"), HD = te()({ name: "VStepper", props: ND(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: l, next: a, prev: o, selected: i } = ql(e, jd), { displayClasses: r, mobile: s } = Cn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: p, nextText: m } = co(e), h = _(() => e.items.map((V, I) => {
    const k = wt(V, e.itemTitle, V), y = wt(V, e.itemValue, I + 1), C = e.itemProps === true ? V : wt(V, e.itemProps), w = { title: k, value: y, ...C };
    return { title: w.title, value: w.value, props: w, raw: V };
  })), b = _(() => l.value.findIndex((V) => i.value.includes(V.id))), x = _(() => e.disabled ? e.disabled : b.value === 0 ? "prev" : b.value === l.value.length - 1 ? "next" : false);
  return pt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: p, nextText: m }, VStepperActions: { color: f, disabled: x, prevText: p, nextText: m } }), le(() => {
    const V = Ul.filterProps(e), I = !!(n.header || e.items.length), k = e.items.length > 0, y = !e.hideActions && !!(k || n.actions);
    return g(Ul, J(V, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a3, _b2;
      return [I && g(Ip, { key: "stepper-header" }, { default: () => [h.value.map((C, w) => {
        let { raw: T, ...P } = C;
        return S(be, null, [!!w && g(xn, null, null), g(Pp, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), k && g(Tp, { key: "stepper-window" }, { default: () => [h.value.map((C) => g(Ap, { value: C.value }, { default: () => {
        var _a4, _b3;
        return ((_a4 = n[`item.${C.value}`]) == null ? void 0 : _a4.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a3 = n.default) == null ? void 0 : _a3.call(n, { prev: o, next: a }), y && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: a, prev: o })) ?? g(Vp, { key: "stepper-actions", "onClick:prev": o, "onClick:next": a }, n))];
    } });
  }), { prev: o, next: a };
} }), zD = U({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Il(), ...Yr() }, "VSwitch"), WD = te()({ name: "VSwitch", inheritAttrs: false, props: zD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = Ve(e, "indeterminate"), o = Ve(e, "modelValue"), { loaderClasses: i } = wi(e), { isFocused: r, focus: s, blur: u } = Vl(e), c = H(), d = H(), f = $c && window.matchMedia("(forced-colors: active)").matches, v = $(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), p = Ot(), m = $(() => e.id || `switch-${p}`);
  function h() {
    a.value && (a.value = false);
  }
  function b(x) {
    var _a3, _b2;
    x.stopPropagation(), x.preventDefault(), (_b2 = (_a3 = c.value) == null ? void 0 : _a3.input) == null ? void 0 : _b2.click();
  }
  return le(() => {
    const [x, V] = tl(n), I = Gt.filterProps(e), k = jl.filterProps(e);
    return g(Gt, J({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, i.value, e.class] }, x, I, { modelValue: o.value, "onUpdate:modelValue": (y) => o.value = y, id: m.value, focused: r.value, style: e.style }), { ...l, default: (y) => {
      let { id: C, messagesId: w, isDisabled: T, isReadonly: P, isValid: M } = y;
      const D = { model: o, isValid: M };
      return g(jl, J({ ref: c }, k, { modelValue: o.value, "onUpdate:modelValue": [(E) => o.value = E, h], id: C.value, "aria-describedby": w.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: T.value, readonly: P.value, onFocus: s, onBlur: u }, V), { ...l, default: (E) => {
        let { backgroundColorClasses: A, backgroundColorStyles: F } = E;
        return S("div", { class: ne(["v-switch__track", f ? void 0 : A.value]), style: ge(F.value), onClick: b }, [l["track-true"] && S("div", { key: "prepend", class: "v-switch__track-true" }, [l["track-true"](D)]), l["track-false"] && S("div", { key: "append", class: "v-switch__track-false" }, [l["track-false"](D)])]);
      }, input: (E) => {
        let { inputNode: A, icon: F, backgroundColorClasses: j, backgroundColorStyles: W } = E;
        return S(be, null, [A, S("div", { class: ne(["v-switch__thumb", { "v-switch__thumb--filled": F || e.loading }, e.inset || f ? void 0 : j.value]), style: ge(e.inset ? void 0 : W.value) }, [l.thumb ? g(Fe, { defaults: { VIcon: { icon: F, size: "x-small" } } }, { default: () => [l.thumb({ ...D, icon: F })] }) : g(Jc, null, { default: () => [e.loading ? g(Ci, { name: "v-switch", active: true, color: M.value === false ? void 0 : v.value }, { default: (Y) => l.loader ? l.loader(Y) : g(Wl, { active: Y.isActive, color: Y.color, indeterminate: true, size: "16", width: "2" }, null) }) : F && g(qe, { key: String(F), icon: F, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Et({}, d);
} }), jD = U({ color: String, height: [Number, String], window: Boolean, ...we(), ...Pt(), ..._a(), ...ct(), ...$e(), ...Ke() }, "VSystemBar"), UD = te()({ name: "VSystemBar", props: jD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { backgroundColorClasses: a, backgroundColorStyles: o } = Je(() => e.color), { elevationClasses: i } = Mt(e), { roundedClasses: r } = yt(e), { ssrBootStyles: s } = Ia(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = Va({ id: e.name, order: _(() => parseInt(e.order, 10)), position: re("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: $(() => e.absolute) });
  return le(() => g(e.tag, { class: ne(["v-system-bar", { "v-system-bar--window": e.window }, l.value, a.value, i.value, r.value, e.class]), style: ge([o.value, c.value, s.value, e.style]) }, n)), {};
} }), Ud = Symbol.for("vuetify:v-tabs"), Dp = U({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...He(Gr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), Mp = te()({ name: "VTab", props: Dp(), setup(e, t) {
  let { slots: n, attrs: l } = t;
  const { textColorClasses: a, textColorStyles: o } = Lt(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Je(() => e.sliderColor), s = H(), u = H(), c = _(() => e.direction === "horizontal"), d = _(() => {
    var _a3, _b2;
    return ((_b2 = (_a3 = s.value) == null ? void 0 : _a3.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(h, b) {
    return { opacity: [0, 1] };
  }
  function v(h, b) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function p(h, b) {
    const x = b.getBoundingClientRect(), V = h.getBoundingClientRect(), I = c.value ? "x" : "y", k = c.value ? "X" : "Y", y = c.value ? "right" : "bottom", C = c.value ? "width" : "height", w = x[I], T = V[I], P = w > T ? x[y] - V[y] : x[I] - V[I], M = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", E = (Math.abs(P) + (Math.sign(P) < 0 ? x[C] : V[C])) / Math.max(x[C], V[C]) || 0, A = x[C] / V[C] || 0, F = 1.5;
    return { transform: [`translate${k}(${P}px) scale${k}(${A})`, `translate${k}(${P / F}px) scale${k}(${(E - 1) / F + 1})`, "none"], transformOrigin: Array(3).fill(M) };
  }
  function m(h) {
    var _a3, _b2;
    let { value: b } = h;
    if (b) {
      const x = (_b2 = (_a3 = s.value) == null ? void 0 : _a3.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), V = u.value;
      if (!x || !V) return;
      const I = getComputedStyle(x).backgroundColor, k = { fade: f, grow: v, shift: p }[e.sliderTransition ?? "shift"] ?? p, y = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      ul(V, { backgroundColor: [I, I], ...k(V, x) }, { duration: y, easing: Jo });
    }
  }
  return le(() => {
    const h = je.filterProps(e);
    return g(je, J({ symbol: Ud, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, h, l, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a3;
      return S(be, null, [((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? e.text, !e.hideSlider && S("div", { ref: u, class: ne(["v-tab__slider", e.inset ? i.value : a.value]), style: ge([o.value, e.inset ? r.value : a.value]) }, null)]);
    } });
  }), Et({}, s);
} }), GD = U({ ...He(Qr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), Ep = te()({ name: "VTabsWindow", props: GD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ue(Ud, null), a = Ve(e, "modelValue"), o = _({ get() {
    var _a3;
    return a.value != null || !l ? a.value : (_a3 = l.items.value.find((i) => l.selected.value.includes(i.id))) == null ? void 0 : _a3.value;
  }, set(i) {
    a.value = i;
  } });
  return le(() => {
    const i = ya.filterProps(e);
    return g(ya, J({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), YD = U({ ...es() }, "VTabsWindowItem"), Bp = te()({ name: "VTabsWindowItem", props: YD(), setup(e, t) {
  let { slots: n } = t;
  return le(() => {
    const l = ba.filterProps(e);
    return g(ba, J({ _as: "VTabsWindowItem" }, l, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function KD(e) {
  return e ? e.map((t) => ga(t) ? t : { text: t, value: t }) : [];
}
const XD = U({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...cn(Dp(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...od({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...St(), ...$e() }, "VTabs"), qD = te()({ name: "VTabs", props: XD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const a = Ve(e, "modelValue"), o = _(() => KD(e.items)), { densityClasses: i } = Wt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Je(() => e.bgColor), { scopeId: u } = Aa();
  return pt({ VTab: { color: $(e, "color"), direction: $(e, "direction"), stacked: $(e, "stacked"), fixed: $(e, "fixedTabs"), inset: $(e, "inset"), sliderColor: $(e, "sliderColor"), sliderTransition: $(e, "sliderTransition"), sliderTransitionDuration: $(e, "sliderTransitionDuration"), hideSlider: $(e, "hideSlider") } }), le(() => {
    const c = ri.filterProps(e), d = !!(l.window || e.items.length > 0);
    return S(be, null, [g(ri, J(c, { modelValue: a.value, "onUpdate:modelValue": (f) => a.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": me(e.height), "--v-tabs-inset-padding": e.inset ? me(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? me(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: Ud }, u, n), { default: l.default ?? (() => o.value.map((f) => {
      var _a3;
      return ((_a3 = l.tab) == null ? void 0 : _a3.call(l, { item: f })) ?? g(Mp, J(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: l[`tab.${f.value}`] ? () => {
        var _a4;
        return (_a4 = l[`tab.${f.value}`]) == null ? void 0 : _a4.call(l, { item: f });
      } : void 0 });
    })), prev: l.prev, next: l.next }), d && g(Ep, J({ modelValue: a.value, "onUpdate:modelValue": (f) => a.value = f, key: "tabs-window" }, u), { default: () => {
      var _a3;
      return [o.value.map((f) => {
        var _a4;
        return ((_a4 = l.item) == null ? void 0 : _a4.call(l, { item: f })) ?? g(Bp, { value: f.value }, { default: () => {
          var _a5;
          return (_a5 = l[`item.${f.value}`]) == null ? void 0 : _a5.call(l, { item: f });
        } });
      }), (_a3 = l.window) == null ? void 0 : _a3.call(l)];
    } })]);
  }), {};
} }), ZD = U({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Ry(), ...He(Il(), ["direction"]), ...Ai() }, "VTextarea"), JD = te()({ name: "VTextarea", directives: { vIntersect: Fn }, inheritAttrs: false, props: ZD(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: l, slots: a } = t;
  const o = Ve(e, "modelValue"), { isFocused: i, focus: r, blur: s } = Vl(e), { onIntersect: u } = Fy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = H(), v = H(), p = re(""), m = H(), h = H(0), { platform: b } = Cn(), x = yd(e), V = _(() => e.persistentPlaceholder || i.value || e.active);
  function I() {
    var _a3;
    x.isSuppressing.value && x.update(), m.value !== document.activeElement && ((_a3 = m.value) == null ? void 0 : _a3.focus()), i.value || r();
  }
  function k(A) {
    I(), l("click:control", A);
  }
  function y(A) {
    l("mousedown:control", A);
  }
  function C(A) {
    A.stopPropagation(), I(), Be(() => {
      o.value = "", pi(e["onClick:clear"], A);
    });
  }
  function w(A) {
    var _a3;
    const F = A.target;
    if (!((_a3 = e.modelModifiers) == null ? void 0 : _a3.trim)) {
      o.value = F.value;
      return;
    }
    const j = F.value, W = F.selectionStart, Y = F.selectionEnd;
    o.value = j, Be(() => {
      let N = 0;
      j.trimStart().length === F.value.length && (N = j.length - F.value.length), W != null && (F.selectionStart = W - N), Y != null && (F.selectionEnd = Y - N);
    });
  }
  const T = H(), P = H(Number(e.rows)), M = _(() => ["plain", "underlined"].includes(e.variant));
  ht(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Be(() => {
      if (!m.value) return;
      if (b.value.firefox) {
        h.value = 12;
        return;
      }
      const { offsetWidth: A, clientWidth: F } = m.value;
      h.value = Math.max(0, A - F);
    }), e.autoGrow && Be(() => {
      if (!T.value || !v.value) return;
      const A = getComputedStyle(T.value), F = getComputedStyle(v.value.$el), j = parseFloat(A.getPropertyValue("--v-field-padding-top")) + parseFloat(A.getPropertyValue("--v-input-padding-top")) + parseFloat(A.getPropertyValue("--v-field-padding-bottom")), W = T.value.scrollHeight, Y = parseFloat(A.lineHeight), N = Math.max(parseFloat(e.rows) * Y + j, parseFloat(F.getPropertyValue("--v-input-control-height"))), R = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Y + j || 1 / 0, Z = et(W ?? 0, N, R);
      P.value = Math.floor((Z - j) / Y), p.value = me(Z);
    });
  }
  Tt(D), se(o, D), se(() => e.rows, D), se(() => e.maxHeight, D), se(() => e.maxRows, D), se(() => e.density, D), se(P, (A) => {
    l("update:rows", A);
  });
  let E;
  return se(T, (A) => {
    A ? (E = new ResizeObserver(D), E.observe(T.value)) : E == null ? void 0 : E.disconnect();
  }), Yt(() => {
    E == null ? void 0 : E.disconnect();
  }), le(() => {
    const A = !!(a.counter || e.counter || e.counterValue), F = !!(A || a.details), [j, W] = tl(n), { modelValue: Y, ...N } = Gt.filterProps(e), R = { ...Gl.filterProps(e), "onClick:clear": C };
    return g(Gt, J({ ref: f, modelValue: o.value, "onUpdate:modelValue": (Z) => o.value = Z, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": M.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? me(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": me(h.value) }, e.style] }, j, N, { centerAffix: P.value === 1 && !M.value, focused: i.value }), { ...a, default: (Z) => {
      let { id: z, isDisabled: O, isDirty: G, isReadonly: ie, isValid: pe, hasDetails: K } = Z;
      return g(Gl, J({ ref: v, style: { "--v-textarea-control-height": p.value }, onClick: k, onMousedown: y, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, R, { id: z.value, active: V.value || G.value, labelId: `${z.value}-label`, centerAffix: P.value === 1 && !M.value, dirty: G.value || e.dirty, disabled: O.value, focused: i.value, details: K.value, error: pe.value === false }), { ...a, default: (fe) => {
        let { props: { class: Te, ...xe }, controlRef: ce } = fe;
        return S(be, null, [e.prefix && S("span", { class: "v-text-field__prefix" }, [e.prefix]), nt(S("textarea", J({ ref: (B) => m.value = ce.value = B, class: Te, value: o.value, onInput: w, autofocus: e.autofocus, readonly: ie.value, disabled: O.value, placeholder: e.placeholder, rows: e.rows, name: x.fieldName.value, autocomplete: x.fieldAutocomplete.value, onFocus: I, onBlur: s, "aria-labelledby": `${z.value}-label` }, xe, W), null), [[Fn, { handler: u }, null, { once: true }]]), e.autoGrow && nt(S("textarea", { class: ne([Te, "v-textarea__sizer"]), id: `${xe.id}-sizer`, "onUpdate:modelValue": (B) => o.value = B, ref: T, readonly: true, "aria-hidden": "true" }, null), [[$r, o.value]]), e.suffix && S("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: F ? (Z) => {
      var _a3;
      return S(be, null, [(_a3 = a.details) == null ? void 0 : _a3.call(a, Z), A && S(be, null, [S("span", null, null), g(Kr, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, a.counter)])]);
    } : void 0 });
  }), Et({}, f, v, m);
} }), QD = U({ withBackground: Boolean, ...we(), ...Ke(), ...$e() }, "VThemeProvider"), eM = te()({ name: "VThemeProvider", props: QD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e);
  return () => {
    var _a3;
    return e.withBackground ? g(e.tag, { class: ne(["v-theme-provider", l.value, e.class]), style: ge(e.style) }, { default: () => {
      var _a4;
      return [(_a4 = n.default) == null ? void 0 : _a4.call(n)];
    } }) : (_a3 = n.default) == null ? void 0 : _a3.call(n);
  };
} }), tM = U({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Pe, iconColor: String, lineColor: String, ...we(), ...ct(), ...al(), ...Pt() }, "VTimelineDivider"), nM = te()({ name: "VTimelineDivider", props: tM(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: l, sizeStyles: a } = vo(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Je(() => e.dotColor), { roundedClasses: r } = yt(e, "v-timeline-divider__dot"), { elevationClasses: s } = Mt(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Je(() => e.lineColor);
  return le(() => S("div", { class: ne(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: ge(e.style) }, [S("div", { class: ne(["v-timeline-divider__before", u.value]), style: ge(c.value) }, null), !e.hideDot && S("div", { key: "dot", class: ne(["v-timeline-divider__dot", s.value, r.value, l.value]), style: ge(a.value) }, [S("div", { class: ne(["v-timeline-divider__inner-dot", i.value, r.value]), style: ge(o.value) }, [n.default ? g(Fe, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : g(qe, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), S("div", { class: ne(["v-timeline-divider__after", u.value]), style: ge(c.value) }, null)])), {};
} }), $p = U({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Pe, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...we(), ...Vt(), ...Pt(), ...ct(), ...al(), ...$e() }, "VTimelineItem"), lM = te()({ name: "VTimelineItem", props: $p(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: l } = It(e), a = re(0), o = H();
  return se(o, (i) => {
    var _a3;
    i && (a.value = ((_a3 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a3.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), le(() => {
    var _a3, _b2;
    return S("div", { class: ne(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: ge([{ "--v-timeline-dot-size": me(a.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${me(e.lineInset)})` : me(0) }, e.style]) }, [S("div", { class: "v-timeline-item__body", style: ge(l.value) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]), g(nM, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && S("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), aM = U({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...cn($p({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...we(), ...St(), ...$e(), ...Ke() }, "VTimeline"), oM = te()({ name: "VTimeline", props: aM(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Ze(e), { densityClasses: a } = Wt(e), { rtlClasses: o } = At();
  pt({ VTimelineDivider: { lineColor: $(() => e.lineColor) }, VTimelineItem: { density: $(() => e.density), dotColor: $(() => e.dotColor), fillDot: $(() => e.fillDot), hideOpposite: $(() => e.hideOpposite), iconColor: $(() => e.iconColor), lineColor: $(() => e.lineColor), lineInset: $(() => e.lineInset), size: $(() => e.size) } });
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
  return le(() => g(e.tag, { class: ne(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, { "v-timeline--inset-line": !!e.lineInset }, l.value, a.value, i.value, o.value, e.class]), style: ge([{ "--v-timeline-line-thickness": me(e.lineThickness) }, e.style]) }, n)), {};
} }), iM = U({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), Xu = te()({ name: "VTimePickerClock", props: iM(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const l = H(null), a = H(null), o = H(void 0), i = H(false), r = H(null), s = H(null), u = eh((R) => n("change", R), 750), { textColorClasses: c, textColorStyles: d } = Lt(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Je(() => e.color), p = _(() => e.max - e.min + 1), m = _(() => e.double ? p.value / 2 : p.value), h = _(() => 360 / m.value), b = _(() => h.value * Math.PI / 180), x = _(() => e.modelValue == null ? e.min : e.modelValue), V = _(() => 0.62), I = _(() => {
    const R = [];
    for (let Z = e.min; Z <= e.max; Z = Z + e.step) R.push(Z);
    return R;
  });
  se(() => e.modelValue, (R) => {
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
    let z = x.value;
    do
      z = z + Z, z = (z - e.min + p.value) % p.value + e.min;
    while (!y(z) && z !== x.value);
    z !== e.displayedValue && k(z), u(z);
  }
  function w(R) {
    return e.double && R - e.min >= m.value;
  }
  function T(R) {
    return w(R) ? V.value : 1;
  }
  function P(R) {
    const Z = e.rotate * Math.PI / 180;
    return { x: Math.sin((R - e.min) * b.value + Z) * T(R), y: -Math.cos((R - e.min) * b.value + Z) * T(R) };
  }
  function M(R, Z) {
    const z = (Math.round(R / h.value) + (Z ? m.value : 0)) % p.value + e.min;
    return R < 360 - h.value / 2 ? z : Z ? e.max - m.value + 1 : e.min;
  }
  function D(R) {
    const { x: Z, y: z } = P(R);
    return { left: `${Math.round(50 + Z * 50)}%`, top: `${Math.round(50 + z * 50)}%` };
  }
  function E(R, Z) {
    const z = Z.x - R.x, O = Z.y - R.y;
    return Math.sqrt(z * z + O * O);
  }
  function A(R, Z) {
    const z = 2 * Math.atan2(Z.y - R.y - E(R, Z), Z.x - R.x);
    return Math.abs(z * 180 / Math.PI);
  }
  function F(R) {
    r.value === null && (r.value = R), s.value = R, k(R);
  }
  function j(R) {
    var _a3, _b2;
    if (R.preventDefault(), !i.value && R.type !== "click" || !l.value) return;
    const { width: Z, top: z, left: O } = (_a3 = l.value) == null ? void 0 : _a3.getBoundingClientRect(), { width: G } = ((_b2 = a.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ie, clientY: pe } = "touches" in R ? R.touches[0] : R, K = { x: Z / 2, y: -Z / 2 }, fe = { x: ie - O, y: z - pe }, Te = Math.round(A(K, fe) - e.rotate + 360) % 360, xe = e.double && E(K, fe) < (G + G * V.value) / 4, ce = Math.ceil(15 / h.value);
    let B;
    for (let L = 0; L < ce; L++) if (B = M(Te + L * h.value, xe), y(B) || (B = M(Te - L * h.value, xe), y(B))) return F(B);
  }
  function W(R) {
    e.disabled || (R.preventDefault(), window.addEventListener("mousemove", j), window.addEventListener("touchmove", j), window.addEventListener("mouseup", Y), window.addEventListener("touchend", Y), r.value = null, s.value = null, i.value = true, j(R));
  }
  function Y(R) {
    R.stopPropagation(), N(), i.value = false, s.value !== null && y(s.value) && n("change", s.value);
  }
  function N() {
    window.removeEventListener("mousemove", j), window.removeEventListener("touchmove", j), window.removeEventListener("mouseup", Y), window.removeEventListener("touchend", Y);
  }
  kt(N), le(() => S("div", { class: ne([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: W, onTouchstart: W, onWheel: C, ref: l }, [S("div", { class: "v-time-picker-clock__inner", ref: a }, [S("div", { class: ne([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": w(e.modelValue) }, c.value]), style: ge([{ transform: `rotate(${e.rotate + h.value * (x.value - e.min)}deg) scaleY(${T(x.value)})` }, d.value]) }, null), I.value.map((R) => {
    const Z = R === x.value;
    return S("div", { class: ne([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": Z, "v-time-picker-clock__item--disabled": e.disabled || !y(R) }, Z && f.value]), style: ge([D(R), Z && v.value]) }, [S("span", null, [e.format(R)])]);
  })])]));
} }), rM = U({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), js = te()({ name: "VTimePickerField", props: rM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: l, textColorStyles: a } = Lt(() => e.color), o = H(), i = re(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return le(() => g(Qn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ne(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? l.value : []]), style: ge(e.active ? a.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Et({}, o);
} });
function mn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function Rp(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function zo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function Io(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function sM(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function uM(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Fp = U({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function Lp(e) {
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
  }), l = _(() => {
    const [o, i, r] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [s, u, c] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], d = o * 3600 + i * 60 + (r || 0), f = s * 3600 + u * 60 + (c || 0);
    return (v, p, m) => {
      if (v !== null && p !== null) {
        const h = 3600 * v + 60 * p + m;
        if (h < d || h > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function a(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => l.value(s, u, v), d = o === "hour" ? (v) => sM(v, r).value : (v) => uM(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: l, findNextAllowed: a };
}
const cM = U({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Fp() }, "VTimePickerControls"), qu = te()({ name: "VTimePickerControls", props: cM(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: l } = lt(), { isAllowedHour: a, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = Lp(e), s = _(() => e.hour !== null ? e.ampm ? zo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
    var _a3;
    return e.hour === null ? true : ((_a3 = a.value) == null ? void 0 : _a3.call(a, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a3;
    return e.minute === null ? true : ((_a3 = o.value) == null ? void 0 : _a3.call(o, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a3;
    return e.second === null ? true : ((_a3 = i.value) == null ? void 0 : _a3.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (E) => {
    if (E == null || isNaN(Number(E))) return null;
    const A = Number(E);
    return e.ampm ? mn(Rp(A)) : mn(A);
  }, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const A = typeof E == "string" ? Io(E) : Number(E);
    return A === null ? null : e.ampm ? zo(A, e.period ?? "am") : et(A, 0, 23);
  } }, p = Ve(e, "hour", void 0, v.in, v.out), m = { in: (E) => E != null && !isNaN(Number(E)) ? mn(`${E}`) : null, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const A = typeof E == "string" ? Io(E) : Number(E);
    return A !== null ? et(A, 0, 59) : null;
  } }, h = Ve(e, "minute", void 0, m.in, m.out), b = Ve(e, "second", void 0, m.in, m.out);
  function x(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = e.period === "am", F = e.ampm ? zo(Number(p.value ?? 0), A ? "am" : "pm") : Number(p.value ?? 0), j = r("hour", F, E.key === "ArrowUp"), W = A && j >= 12 || !A && j < 12;
    e.ampm && W ? (n("update:period", e.period === "am" ? "pm" : "am"), Be(() => p.value = mn(j))) : p.value = mn(j);
  }
  function V(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = Number(h.value ?? 0), F = r("minute", A, E.key === "ArrowUp", s.value);
    h.value = mn(F);
  }
  function I(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = Number(b.value ?? 0), F = r("second", A, E.key === "ArrowUp", s.value, u.value);
    b.value = mn(F);
  }
  function k(E, A, F) {
    return (j) => {
      if (!j.data) return;
      const W = j.target, { value: Y, selectionStart: N, selectionEnd: R } = W ?? {};
      if (Io(j.data) === null) {
        j.preventDefault();
        return;
      }
      const Z = Y ? Y.slice(0, N) + j.data + Y.slice(R) : j.data;
      if (Z.length > 2) {
        if (N === R && R === 0 && j.data.trim().startsWith("0")) {
          j.preventDefault(), W.value = Z.trim().substring(0, 2), F(W.value), j.data.trim().length === 1 && W.setSelectionRange(1, 1);
          return;
        }
        if (N === R && R === 1 && Y.startsWith("0")) {
          j.preventDefault(), W.value = Z.trim().substring(0, 2), F(W.value);
          return;
        }
        const O = e.viewMode === "hour" ? e.ampm ? 12 : 23 : 59;
        if (Io(Z) > O) {
          j.preventDefault(), W.value = mn(String(Io(j.data)).substring(0, 2)), F(W.value);
          return;
        }
      }
      const z = E(Z);
      A(z) && j.preventDefault();
    };
  }
  function y(E) {
    n("update:period", E);
    const A = r("hour", E === "am" ? 23 : 11, true);
    Be(() => p.value = mn(A));
  }
  const C = H(), w = H(), T = H();
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
  const P = k(v.out, (E) => v.in(E) === p.value, (E) => p.value = E), M = k(m.out, (E) => m.in(E) === h.value, (E) => h.value = E), D = k(m.out, (E) => m.in(E) === b.value, (E) => b.value = E);
  return le(() => S("div", { class: "v-time-picker-controls" }, [S("div", { class: ne({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [g(js, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: l("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : l("$vuetify.timePicker.notAllowed"), modelValue: p.value, "onUpdate:modelValue": (E) => p.value = E, onKeydown: x, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), S("span", { class: "v-time-picker-controls__time__separator" }, [Le(":")]), g(js, { ref: w, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: l("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : l("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (E) => h.value = E, onKeydown: V, onBeforeinput: M, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && S("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Le(":")]), e.useSeconds && S(be, null, [g(js, { key: "secondsVal", ref: T, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: l("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : l("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (E) => b.value = E, onKeydown: I, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && S("div", { class: "v-time-picker-controls__ampm" }, [g(je, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: l("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? y("am") : null }, null), g(je, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: l("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? y("pm") : null }, null)])])])), {};
} }), dM = U({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Fp(), ...He(ts({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...St() }, "VTimePicker"), fM = te()({ name: "VTimePicker", props: dM(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const { t: a } = lt(), { densityClasses: o } = Wt(e), i = H(null), r = H(null), s = H(null), u = H(null), c = H(null), d = H(null), f = Ve(e, "period", "am"), v = Ve(e, "viewMode", "hour"), p = H(null), m = H(null), h = _(() => e.format === "ampm"), { isAllowedHour: b, isAllowedMinute: x, isAllowedSecond: V } = Lp(e), I = $(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function k() {
    const P = y();
    P !== null && P !== e.modelValue && n("update:modelValue", P), I.value && n("update:modelValue", null);
  }
  se(i, k), se(r, k), se(s, k), se(() => e.modelValue, (P) => C(P)), se(() => e.useSeconds, (P, M) => {
    M && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), Tt(() => {
    C(e.modelValue);
  });
  function y() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${mn(i.value)}:${mn(r.value)}` + (e.useSeconds ? `:${mn(s.value)}` : "") : null;
  }
  function C(P) {
    if (P == null || P === "") i.value = null, r.value = null, s.value = null;
    else if (P instanceof Date) i.value = P.getHours(), r.value = P.getMinutes(), s.value = P.getSeconds();
    else {
      const [M, , D, , E, A] = P.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
      i.value = A ? zo(parseInt(M, 10), A) : parseInt(M, 10), r.value = parseInt(D, 10), s.value = parseInt(E || 0, 10);
    }
    f.value = i.value == null || i.value < 12 ? "am" : "pm";
  }
  function w(P) {
    v.value === "hour" ? i.value = h.value ? zo(P, f.value) : P : v.value === "minute" ? r.value = P : s.value = P;
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
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || y() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), M && k());
  }
  le(() => {
    const P = He(uo.filterProps(e), ["hideHeader"]), M = qu.filterProps(e), D = Xu.filterProps(He(e, ["format", "modelValue", "min", "max"])), E = v.value === "hour" ? b.value : v.value === "minute" ? (A) => x.value(i.value, A) : (A) => V.value(i.value, r.value, A);
    return g(uo, J(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a3;
      return ((_a3 = l.title) == null ? void 0 : _a3.call(l)) ?? S("div", { class: "v-time-picker__title" }, [a(e.title)]);
    }, header: () => g(qu, J(M, { ampm: h.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (A) => i.value = A, "onUpdate:minute": (A) => r.value = A, "onUpdate:second": (A) => s.value = A, "onUpdate:period": (A) => f.value = A, "onUpdate:viewMode": (A) => v.value = A, ref: p }), null), default: () => g(Xu, J(D, { allowedValues: E, double: v.value === "hour" && !h.value, format: v.value === "hour" ? h.value ? Rp : (A) => A : (A) => mn(A, 2), max: v.value === "hour" ? h.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && h.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: T, onInput: w, ref: m }), null), actions: l.actions });
  });
} }), vM = U({ ...we(), ...Vn({ variant: "text" }) }, "VToolbarItems"), mM = te()({ name: "VToolbarItems", props: vM(), setup(e, t) {
  let { slots: n } = t;
  return pt({ VBtn: { color: $(() => e.color), height: "inherit", variant: $(() => e.variant) } }), le(() => {
    var _a3;
    return S("div", { class: ne(["v-toolbar-items", e.class]), style: ge(e.style) }, [(_a3 = n.default) == null ? void 0 : _a3.call(n)]);
  }), {};
} }), gM = U({ id: String, interactive: Boolean, text: String, ...He(Ti({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Op = te()({ name: "VTooltip", props: gM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = Ve(e, "modelValue"), { scopeId: a } = Aa(), o = Ot(), i = $(() => e.id || `v-tooltip-${o}`), r = H(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = $(() => e.transition != null ? e.transition : l.value ? "scale-transition" : "fade-transition"), d = _(() => J({ "aria-describedby": i.value }, e.activatorProps));
  return le(() => {
    const f = Jn.filterProps(e);
    return g(Jn, J({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, a), { activator: n.activator, default: function() {
      var _a3;
      for (var v = arguments.length, p = new Array(v), m = 0; m < v; m++) p[m] = arguments[m];
      return ((_a3 = n.default) == null ? void 0 : _a3.call(n, ...p)) ?? e.text;
    } });
  }), Et({}, r);
} }), hM = U({ ...He(hy({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Zu = te()({ name: "VTreeviewGroup", props: hM(), setup(e, t) {
  let { slots: n } = t;
  const l = H(), a = _(() => {
    var _a3;
    return ((_a3 = l.value) == null ? void 0 : _a3.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: a.value } }));
  return le(() => {
    const i = si.filterProps(e);
    return g(si, J(i, { ref: l, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => S(be, null, [g(Fe, { defaults: o.value }, { default: () => {
      var _a3;
      return [(_a3 = n.activator) == null ? void 0 : _a3.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), Np = Symbol.for("vuetify:v-treeview"), Hp = U({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Pe, ...py({ slim: true }) }, "VTreeviewItem"), Ju = te()({ name: "VTreeviewItem", props: Hp(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const a = Ue(Np, { visibleIds: H() }).visibleIds, o = H(), i = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = _(() => {
    var _a3, _b2;
    return ((_a3 = o.value) == null ? void 0 : _a3.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = _(() => {
    var _a3;
    return a.value && !a.value.has(De((_a3 = o.value) == null ? void 0 : _a3.id));
  });
  function c(f) {
    var _a3, _b2;
    s.value && i.value && ((_b2 = o.value) == null ? void 0 : _b2.activate(!((_a3 = o.value) == null ? void 0 : _a3.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), l("toggleExpand", f);
  }
  return le(() => {
    var _a3;
    const f = An.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return g(An, J({ ref: o }, f, { active: ((_a3 = o.value) == null ? void 0 : _a3.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (p) => {
      var _a4;
      return S(be, null, [e.indentLines && e.indentLines.length > 0 ? S("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => S("div", { class: ne(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && g(cd, { start: true }, { default: () => [e.toggleIcon ? S(be, null, [n.toggle ? g(Fe, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...p, loading: e.loading, props: { onClick: d } })] }) : g(je, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => g(Wl, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : S("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? g(Fe, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a5;
        return [(_a5 = n.prepend) == null ? void 0 : _a5.call(n, p)];
      } }) : S(be, null, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, p), e.prependAvatar && g(wn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(qe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Et({}, o);
} }), zp = U({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Pe, default: "$checkboxIndeterminate" }, falseIcon: Pe, trueIcon: Pe, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...cn(Hp(), ["hideActions"]), ...St() }, "VTreeviewChildren"), kr = te()({ name: "VTreeviewChildren", props: zp(), setup(e, t) {
  let { slots: n } = t;
  const l = Rt(/* @__PURE__ */ new Set()), a = H([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
  async function i(s) {
    var _a3, _b2;
    try {
      if (!((_a3 = e.items) == null ? void 0 : _a3.length) || !e.loadChildren) return;
      ((_b2 = s == null ? void 0 : s.children) == null ? void 0 : _b2.length) === 0 && (l.add(s.value), await e.loadChildren(s.raw));
    } finally {
      l.delete(s.value);
    }
  }
  function r(s, u) {
    e.selectable && s(u);
  }
  return () => {
    var _a3, _b2;
    return ((_a3 = n.default) == null ? void 0 : _a3.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((s, u, c) => {
      var _a4, _b3;
      const { children: d, props: f } = s, v = l.has(s.value), p = !!((_a4 = c.at(u + 1)) == null ? void 0 : _a4.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, h = c.length - 1 === u, b = { index: u, depth: m, isFirst: u === 0, isLast: h, path: [...e.path, u], hideAction: e.hideActions }, x = s1({ depth: m, isLast: h, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), V = { toggle: n.toggle ? (C) => {
        var _a5;
        return (_a5 = n.toggle) == null ? void 0 : _a5.call(n, { ...C, ...b, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a5;
        return S(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && g(cd, { start: true }, { default: () => [g(Ln, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (w) => r(C.select, w), onClick: (w) => w.stopPropagation(), onKeydown: (w) => {
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
      } : void 0 }, I = Zu.filterProps(f), k = kr.filterProps({ ...e, ...b }), y = { hideActions: e.hideActions, indentLines: x.footer };
      return d ? g(Zu, J(I, { value: e.returnObject ? s.raw : I == null ? void 0 : I.value, rawId: I == null ? void 0 : I.value }), { activator: (C) => {
        let { props: w, isOpen: T } = C;
        const P = { ...f, ...w, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: x.node, ariaExpanded: T, onToggleExpand: [() => i(s), w.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), w.onClick] : () => {
          var _a5, _b4;
          return r((_a5 = a.value[u]) == null ? void 0 : _a5.select, !((_b4 = a.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return Oi(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => g(Ju, J({ ref: (M) => a.value[u] = M }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), V));
      }, default: () => {
        var _a5;
        return S(be, null, [g(kr, J(k, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: x.children, isLastGroup: p, returnObject: e.returnObject }), n), (_a5 = n.footer) == null ? void 0 : _a5.call(n, { props: y, item: s.raw, internalItem: s, loading: v })]);
      } }) : Oi(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? Oi(n.divider, { props: s.raw }, () => g(xn, s.props, null)) : s.type === "subheader" ? Oi(n.subheader, { props: s.raw }, () => g(bo, s.props, null)) : g(Ju, J(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: x.leaf, value: e.returnObject ? De(s.raw) : f.value }), V));
    }));
  };
} });
function Wp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && Wp(n.children, t);
  return t;
}
const yM = U({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...Da({ filterKeys: ["title"] }), ...He(zp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...He(_y({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), bM = te()({ name: "VTreeview", props: yM(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: l } = t;
  const { t: a } = lt(), { items: o } = Cy(e), i = $(() => e.activeColor), r = $(() => e.baseColor), s = $(() => e.color), u = Ve(e, "activated"), c = Ve(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(I) {
    c.value = I, l("update:modelValue", I);
  } }), f = H(), v = _(() => e.openAll ? V(o.value) : e.opened), p = _(() => Wp(o.value)), m = $(() => e.search), { filteredItems: h } = Ma(e, p, m), b = _(() => {
    var _a3;
    if (!m.value) return null;
    const I = (_a3 = f.value) == null ? void 0 : _a3.getPath;
    return I ? new Set(h.value.flatMap((k) => {
      const y = e.returnObject ? k.raw : k.props.value;
      return [...I(y), ...x(y)].map(De);
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
  function V(I) {
    let k = [];
    for (const y of I) y.children && (k.push(e.returnObject ? De(y.raw) : y.value), y.children && (k = k.concat(V(y.children))));
    return k;
  }
  return mt(Np, { visibleIds: b }), pt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: $(() => e.collapseIcon), expandIcon: $(() => e.expandIcon) }, VTreeviewItem: { activeClass: $(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: $(() => e.density), disabled: $(() => e.disabled), lines: $(() => e.lines), variant: $(() => e.variant) } }), le(() => {
    const I = ro.filterProps(e), k = kr.filterProps(e), y = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return g(ro, J({ ref: f }, I, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a3, _b2;
      return [((_a3 = b.value) == null ? void 0 : _a3.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(An, { key: "no-data", title: a(e.noDataText) }, null)), g(kr, J(k, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: y }), n)];
    } });
  }), {};
} }), pM = te()({ name: "VValidation", props: ay(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const l = oy(e, "validation");
  return () => {
    var _a3;
    return (_a3 = n.default) == null ? void 0 : _a3.call(n, l);
  };
} }), SM = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: C_, VAlertTitle: qh, VApp: IC, VAppBar: KC, VAppBarNavIcon: S_, VAppBarTitle: x_, VAutocomplete: GV, VAvatar: wn, VBadge: Hy, VBanner: qV, VBannerActions: zy, VBannerText: Wy, VBottomNavigation: JV, VBottomSheet: eI, VBreadcrumbs: aI, VBreadcrumbsDivider: Uy, VBreadcrumbsItem: Gy, VBtn: je, VBtnGroup: Su, VBtnToggle: e_, VCalendar: nP, VCard: sP, VCardActions: vb, VCardItem: hb, VCardSubtitle: mb, VCardText: yb, VCardTitle: gb, VCarousel: yP, VCarouselItem: pP, VCheckbox: $_, VCheckboxBtn: Ln, VChip: pl, VChipGroup: N_, VClassIcon: Uc, VCode: SP, VCol: XT, VColorPicker: sT, VCombobox: cT, VComponentIcon: gu, VConfirmEdit: fT, VContainer: UT, VCounter: Kr, VDataIterator: _T, VDataTable: OT, VDataTableFooter: ci, VDataTableHeaders: pa, VDataTableRow: Od, VDataTableRows: Sa, VDataTableServer: WT, VDataTableVirtual: HT, VDatePicker: rA, VDatePickerControls: Nu, VDatePickerHeader: Hu, VDatePickerMonth: zu, VDatePickerMonths: Wu, VDatePickerYears: ju, VDefaultsProvider: Fe, VDialog: Pu, VDialogBottomTransition: DC, VDialogTopTransition: MC, VDialogTransition: zr, VDivider: xn, VEmptyState: uA, VExpandBothTransition: NC, VExpandTransition: Wr, VExpandXTransition: ed, VExpansionPanel: cA, VExpansionPanelText: Uu, VExpansionPanelTitle: Gu, VExpansionPanels: vA, VFab: gA, VFabTransition: AC, VFadeTransition: li, VField: Gl, VFieldLabel: Ao, VFileInput: xA, VFooter: wA, VForm: _A, VHotkey: TA, VHover: DA, VIcon: qe, VImg: bl, VInfiniteScroll: EA, VInput: Gt, VItem: RA, VItemGroup: $A, VKbd: Yu, VLabel: ho, VLayout: LA, VLayoutItem: NA, VLazy: zA, VLigatureIcon: d1, VList: ro, VListGroup: si, VListImg: sV, VListItem: An, VListItemAction: cd, VListItemMedia: dV, VListItemSubtitle: yy, VListItemTitle: by, VListSubheader: bo, VLocaleProvider: jA, VMain: GA, VMenu: so, VMessages: ny, VNavigationDrawer: tD, VNoSsr: nD, VNumberInput: rD, VOtpInput: uD, VOverlay: Jn, VPagination: Fu, VParallax: fD, VProgressCircular: Wl, VProgressLinear: jr, VRadio: mD, VRadioGroup: hD, VRangeSlider: bD, VRating: SD, VResponsive: yu, VRow: nA, VScaleTransition: Jc, VScrollXReverseTransition: BC, VScrollXTransition: EC, VScrollYReverseTransition: RC, VScrollYTransition: $C, VSelect: wd, VSelectionControl: jl, VSelectionControlGroup: ey, VSheet: Ul, VSkeletonLoader: CD, VSlideGroup: ri, VSlideGroupItem: _D, VSlideXReverseTransition: LC, VSlideXTransition: FC, VSlideYReverseTransition: OC, VSlideYTransition: Qc, VSlider: Ru, VSnackbar: Ku, VSnackbarQueue: PD, VSpacer: Ou, VSparkline: MD, VSpeedDial: BD, VStepper: HD, VStepperActions: Vp, VStepperHeader: Ip, VStepperItem: Pp, VStepperWindow: Tp, VStepperWindowItem: Ap, VSvgIcon: jc, VSwitch: WD, VSystemBar: UD, VTab: Mp, VTable: xa, VTabs: qD, VTabsWindow: Ep, VTabsWindowItem: Bp, VTextField: Qn, VTextarea: JD, VThemeProvider: eM, VTimePicker: fM, VTimePickerClock: Xu, VTimePickerControls: qu, VTimeline: oM, VTimelineItem: lM, VToolbar: pu, VToolbarItems: mM, VToolbarTitle: Xc, VTooltip: Op, VTreeview: bM, VTreeviewGroup: Zu, VTreeviewItem: Ju, VValidation: pM, VVirtualScroll: Xr, VWindow: ya, VWindowItem: ba }, Symbol.toStringTag, { value: "Module" }));
function xM(e, t) {
  const n = t.modifiers || {}, l = t.value, { once: a, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof l == "object" ? l : { handler: l, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), a && jp(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function jp(e, t) {
  var _a3;
  ((_a3 = e._mutate) == null ? void 0 : _a3[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const kM = { mounted: xM, unmounted: jp };
function Up(e, t) {
  const { self: n = false } = t.modifiers ?? {}, l = t.value, a = typeof l == "object" && l.options || { passive: true }, o = typeof l == "function" || "handleEvent" in l ? l : l.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, a), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: a, target: n ? void 0 : i });
}
function Gp(e, t) {
  var _a3;
  if (!((_a3 = e._onScroll) == null ? void 0 : _a3[t.instance.$.uid])) return;
  const { handler: n, options: l, target: a = e } = e._onScroll[t.instance.$.uid];
  a.removeEventListener("scroll", n, l), delete e._onScroll[t.instance.$.uid];
}
function wM(e, t) {
  t.value !== t.oldValue && (Gp(e, t), Up(e, t));
}
const CM = { mounted: Up, unmounted: Gp, updated: wM };
function _M(e, t) {
  const n = typeof e == "string" ? Me(e) : e, l = VM(n, t);
  return { mounted: l, updated: l, unmounted(a) {
    Yg(null, a);
  } };
}
function VM(e, t) {
  return function(n, l, a) {
    var _a3, _b2, _c2;
    const o = typeof t == "function" ? t(l) : t, i = ((_a3 = l.value) == null ? void 0 : _a3.text) ?? l.value ?? (o == null ? void 0 : o.text), r = ga(l.value) ? l.value : {}, s = () => i ?? n.textContent, u = (a.ctx === l.instance.$ ? (_b2 = IM(a, l.instance.$)) == null ? void 0 : _b2.provides : (_c2 = a.ctx) == null ? void 0 : _c2.provides) ?? l.instance.$.provides, c = xl(e, J(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), l.instance.$.appContext, { provides: u }), Yg(c, n);
  };
}
function IM(e, t) {
  const n = /* @__PURE__ */ new Set(), l = (o) => {
    var _a3, _b2;
    for (const i of o) {
      if (!i) continue;
      if (i === e || i.el && e.el && i.el === e.el) return true;
      n.add(i);
      let r;
      if (i.suspense ? r = l([i.ssContent]) : Array.isArray(i.children) ? r = l(i.children) : ((_a3 = i.component) == null ? void 0 : _a3.vnode) && (r = l([(_b2 = i.component) == null ? void 0 : _b2.subTree])), r) return r;
      n.delete(i);
    }
    return false;
  };
  if (!l([t.subTree])) return t;
  const a = Array.from(n).reverse();
  for (const o of a) if (o.component) return o.component;
  return t;
}
const PM = _M(Op, (e) => {
  var _a3;
  return { activator: (ga(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a3 = e.arg) == null ? void 0 : _a3.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), TM = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: Iu, Intersect: Fn, Mutate: kM, Resize: ui, Ripple: zt, Scroll: CM, Tooltip: PM, Touch: xr }, Symbol.toStringTag, { value: "Module" })), AM = Bh({ components: SM, directives: TM, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
b0(hw).use(AM).mount("#app");
