var _a;
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
function Xu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const vt = {}, Nl = [], Un = () => {
}, tm = () => false, yr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qu = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, Zu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Op = Object.prototype.hasOwnProperty, rt = (e, t) => Op.call(e, t), Ne = Array.isArray, Hl = (e) => li(e) === "[object Map]", nm = (e) => li(e) === "[object Set]", Bd = (e) => li(e) === "[object Date]", je = (e) => typeof e == "function", pt = (e) => typeof e == "string", Gn = (e) => typeof e == "symbol", it = (e) => e !== null && typeof e == "object", am = (e) => (it(e) || je(e)) && je(e.then) && je(e.catch), lm = Object.prototype.toString, li = (e) => lm.call(e), Np = (e) => li(e).slice(8, -1), om = (e) => li(e) === "[object Object]", br = (e) => pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wo = Xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), pr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Hp = /-\w/g, sn = pr((e) => e.replace(Hp, (t) => t.slice(1).toUpperCase())), zp = /\B([A-Z])/g, bl = pr((e) => e.replace(zp, "-$1").toLowerCase()), Zn = pr((e) => e.charAt(0).toUpperCase() + e.slice(1)), fs = pr((e) => e ? `on${Zn(e)}` : ""), Da = (e, t) => !Object.is(e, t), Fi = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, im = (e, t, n, a = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: a, value: n });
}, Ju = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wp = (e) => {
  const t = pt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $d;
const Sr = () => $d || ($d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function me(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = pt(a) ? Yp(a) : me(a);
      if (l) for (const o in l) t[o] = l[o];
    }
    return t;
  } else if (pt(e) || it(e)) return e;
}
const jp = /;(?![^(]*\))/g, Up = /:([^]+)/, Gp = /\/\*[^]*?\*\//g;
function Yp(e) {
  const t = {};
  return e.replace(Gp, "").split(jp).forEach((n) => {
    if (n) {
      const a = n.split(Up);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (pt(e)) t = e;
  else if (Ne(e)) for (let n = 0; n < e.length; n++) {
    const a = ne(e[n]);
    a && (t += a + " ");
  }
  else if (it(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Kp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !pt(t) && (e.class = ne(t)), n && (e.style = me(n)), e;
}
const Xp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qp = Xu(Xp);
function rm(e) {
  return !!e || e === "";
}
function Zp(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let a = 0; n && a < e.length; a++) n = Qu(e[a], t[a]);
  return n;
}
function Qu(e, t) {
  if (e === t) return true;
  let n = Bd(e), a = Bd(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : false;
  if (n = Gn(e), a = Gn(t), n || a) return e === t;
  if (n = Ne(e), a = Ne(t), n || a) return n && a ? Zp(e, t) : false;
  if (n = it(e), a = it(t), n || a) {
    if (!n || !a) return false;
    const l = Object.keys(e).length, o = Object.keys(t).length;
    if (l !== o) return false;
    for (const i in e) {
      const r = e.hasOwnProperty(i), s = t.hasOwnProperty(i);
      if (r && !s || !r && s || !Qu(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
const sm = (e) => !!(e && e.__v_isRef === true), Te = (e) => pt(e) ? e : e == null ? "" : Ne(e) || it(e) && (e.toString === lm || !je(e.toString)) ? sm(e) ? Te(e.value) : JSON.stringify(e, um, 2) : String(e), um = (e, t) => sm(t) ? um(e, t.value) : Hl(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, l], o) => (n[vs(a, o) + " =>"] = l, n), {}) } : nm(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => vs(n)) } : Gn(t) ? vs(t) : it(t) && !Ne(t) && !om(t) ? String(t) : t, vs = (e, t = "") => {
  var n;
  return Gn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Kt;
class cm {
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
function Ul(e) {
  return new cm(e);
}
function dm() {
  return Kt;
}
function St(e, t = false) {
  Kt && Kt.cleanups.push(e);
}
let ht;
const ms = /* @__PURE__ */ new WeakSet();
class fm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Kt && Kt.active && Kt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ms.has(this) && (ms.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mm(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Rd(this), gm(this);
    const t = ht, n = Dn;
    ht = this, Dn = true;
    try {
      return this.fn();
    } finally {
      hm(this), ht = t, Dn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) nc(t);
      this.deps = this.depsTail = void 0, Rd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    js(this) && this.run();
  }
  get dirty() {
    return js(this);
  }
}
let vm = 0, Co, _o;
function mm(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = _o, _o = e;
    return;
  }
  e.next = Co, Co = e;
}
function ec() {
  vm++;
}
function tc() {
  if (--vm > 0) return;
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
function gm(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function hm(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), nc(a), Jp(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function js(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ym(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function ym(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bo) || (e.globalVersion = Bo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !js(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = ht, a = Dn;
  ht = e, Dn = true;
  try {
    gm(e);
    const l = e.fn(e._value);
    (t.version === 0 || Da(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    ht = n, Dn = a, hm(e), e.flags &= -3;
  }
}
function nc(e, t = false) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) nc(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Jp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Dn = true;
const bm = [];
function ca() {
  bm.push(Dn), Dn = false;
}
function da() {
  const e = bm.pop();
  Dn = e === void 0 ? true : e;
}
function Rd(e) {
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
class Qp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ac {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!ht || !Dn || ht === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ht) n = this.activeLink = new Qp(ht, this), ht.deps ? (n.prevDep = ht.depsTail, ht.depsTail.nextDep = n, ht.depsTail = n) : ht.deps = ht.depsTail = n, pm(n);
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
    ec();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      tc();
    }
  }
}
function pm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) pm(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Gi = /* @__PURE__ */ new WeakMap(), nl = Symbol(""), Us = Symbol(""), $o = Symbol("");
function Xt(e, t, n) {
  if (Dn && ht) {
    let a = Gi.get(e);
    a || Gi.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new ac()), l.map = a, l.key = n), l.track();
  }
}
function ra(e, t, n, a, l, o) {
  const i = Gi.get(e);
  if (!i) {
    Bo++;
    return;
  }
  const r = (s) => {
    s && s.trigger();
  };
  if (ec(), t === "clear") i.forEach(r);
  else {
    const s = Ne(e), u = s && br(n);
    if (s && n === "length") {
      const c = Number(a);
      i.forEach((d, f) => {
        (f === "length" || f === $o || !Gn(f) && f >= c) && r(d);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), u && r(i.get($o)), t) {
      case "add":
        s ? u && r(i.get("length")) : (r(i.get(nl)), Hl(e) && r(i.get(Us)));
        break;
      case "delete":
        s || (r(i.get(nl)), Hl(e) && r(i.get(Us)));
        break;
      case "set":
        Hl(e) && r(i.get(nl));
        break;
    }
  }
  tc();
}
function eS(e, t) {
  const n = Gi.get(e);
  return n && n.get(t);
}
function Tl(e) {
  const t = Me(e);
  return t === e ? t : (Xt(t, "iterate", $o), Sn(e) ? t : t.map(Bn));
}
function xr(e) {
  return Xt(e = Me(e), "iterate", $o), e;
}
function Pa(e, t) {
  return fa(e) ? Gl(Ma(e) ? Bn(t) : t) : Bn(t);
}
const tS = { __proto__: null, [Symbol.iterator]() {
  return gs(this, Symbol.iterator, (e) => Pa(this, e));
}, concat(...e) {
  return Tl(this).concat(...e.map((t) => Ne(t) ? Tl(t) : t));
}, entries() {
  return gs(this, "entries", (e) => (e[1] = Pa(this, e[1]), e));
}, every(e, t) {
  return na(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return na(this, "filter", e, t, (n) => n.map((a) => Pa(this, a)), arguments);
}, find(e, t) {
  return na(this, "find", e, t, (n) => Pa(this, n), arguments);
}, findIndex(e, t) {
  return na(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return na(this, "findLast", e, t, (n) => Pa(this, n), arguments);
}, findLastIndex(e, t) {
  return na(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return na(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return hs(this, "includes", e);
}, indexOf(...e) {
  return hs(this, "indexOf", e);
}, join(e) {
  return Tl(this).join(e);
}, lastIndexOf(...e) {
  return hs(this, "lastIndexOf", e);
}, map(e, t) {
  return na(this, "map", e, t, void 0, arguments);
}, pop() {
  return vo(this, "pop");
}, push(...e) {
  return vo(this, "push", e);
}, reduce(e, ...t) {
  return Fd(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Fd(this, "reduceRight", e, t);
}, shift() {
  return vo(this, "shift");
}, some(e, t) {
  return na(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return vo(this, "splice", e);
}, toReversed() {
  return Tl(this).toReversed();
}, toSorted(e) {
  return Tl(this).toSorted(e);
}, toSpliced(...e) {
  return Tl(this).toSpliced(...e);
}, unshift(...e) {
  return vo(this, "unshift", e);
}, values() {
  return gs(this, "values", (e) => Pa(this, e));
} };
function gs(e, t, n) {
  const a = xr(e), l = a[t]();
  return a !== e && !Sn(e) && (l._next = l.next, l.next = () => {
    const o = l._next();
    return o.done || (o.value = n(o.value)), o;
  }), l;
}
const nS = Array.prototype;
function na(e, t, n, a, l, o) {
  const i = xr(e), r = i !== e && !Sn(e), s = i[t];
  if (s !== nS[t]) {
    const d = s.apply(e, o);
    return r ? Bn(d) : d;
  }
  let u = n;
  i !== e && (r ? u = function(d, f) {
    return n.call(this, Pa(e, d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = s.call(i, u, a);
  return r && l ? l(c) : c;
}
function Fd(e, t, n, a) {
  const l = xr(e);
  let o = n;
  return l !== e && (Sn(e) ? n.length > 3 && (o = function(i, r, s) {
    return n.call(this, i, r, s, e);
  }) : o = function(i, r, s) {
    return n.call(this, i, Pa(e, r), s, e);
  }), l[t](o, ...a);
}
function hs(e, t, n) {
  const a = Me(e);
  Xt(a, "iterate", $o);
  const l = a[t](...n);
  return (l === -1 || l === false) && oi(n[0]) ? (n[0] = Me(n[0]), a[t](...n)) : l;
}
function vo(e, t, n = []) {
  ca(), ec();
  const a = Me(e)[t].apply(e, n);
  return tc(), da(), a;
}
const aS = Xu("__proto__,__v_isRef,__isVue"), Sm = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Gn));
function lS(e) {
  Gn(e) || (e = String(e));
  const t = Me(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class xm {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !l;
    if (n === "__v_isReadonly") return l;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return a === (l ? o ? mS : _m : o ? Cm : wm).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const i = Ne(t);
    if (!l) {
      let s;
      if (i && (s = tS[n])) return s;
      if (n === "hasOwnProperty") return lS;
    }
    const r = Reflect.get(t, n, kt(t) ? t : a);
    if ((Gn(n) ? Sm.has(n) : aS(n)) || (l || Xt(t, "get", n), o)) return r;
    if (kt(r)) {
      const s = i && br(n) ? r : r.value;
      return l && it(s) ? sl(s) : s;
    }
    return it(r) ? l ? sl(r) : Et(r) : r;
  }
}
class km extends xm {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, a, l) {
    let o = t[n];
    const i = Ne(t) && br(n);
    if (!this._isShallow) {
      const u = fa(o);
      if (!Sn(a) && !fa(a) && (o = Me(o), a = Me(a)), !i && kt(o) && !kt(a)) return u || (o.value = a), true;
    }
    const r = i ? Number(n) < t.length : rt(t, n), s = Reflect.set(t, n, a, kt(t) ? t : l);
    return t === Me(l) && (r ? Da(a, o) && ra(t, "set", n, a) : ra(t, "add", n, a)), s;
  }
  deleteProperty(t, n) {
    const a = rt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && ra(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Gn(n) || !Sm.has(n)) && Xt(t, "has", n), a;
  }
  ownKeys(t) {
    return Xt(t, "iterate", Ne(t) ? "length" : nl), Reflect.ownKeys(t);
  }
}
class oS extends xm {
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
const iS = new km(), rS = new oS(), sS = new km(true);
const Gs = (e) => e, wi = (e) => Reflect.getPrototypeOf(e);
function uS(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, o = Me(l), i = Hl(o), r = e === "entries" || e === Symbol.iterator && i, s = e === "keys" && i, u = l[e](...a), c = n ? Gs : t ? Gl : Bn;
    return !t && Xt(o, "iterate", s ? Us : nl), Mt(Object.create(u), { next() {
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
function cS(e, t) {
  const n = { get(l) {
    const o = this.__v_raw, i = Me(o), r = Me(l);
    e || (Da(l, r) && Xt(i, "get", l), Xt(i, "get", r));
    const { has: s } = wi(i), u = t ? Gs : e ? Gl : Bn;
    if (s.call(i, l)) return u(o.get(l));
    if (s.call(i, r)) return u(o.get(r));
    o !== i && o.get(l);
  }, get size() {
    const l = this.__v_raw;
    return !e && Xt(Me(l), "iterate", nl), l.size;
  }, has(l) {
    const o = this.__v_raw, i = Me(o), r = Me(l);
    return e || (Da(l, r) && Xt(i, "has", l), Xt(i, "has", r)), l === r ? o.has(l) : o.has(l) || o.has(r);
  }, forEach(l, o) {
    const i = this, r = i.__v_raw, s = Me(r), u = t ? Gs : e ? Gl : Bn;
    return !e && Xt(s, "iterate", nl), r.forEach((c, d) => l.call(o, u(c), u(d), i));
  } };
  return Mt(n, e ? { add: Ci("add"), set: Ci("set"), delete: Ci("delete"), clear: Ci("clear") } : { add(l) {
    !t && !Sn(l) && !fa(l) && (l = Me(l));
    const o = Me(this);
    return wi(o).has.call(o, l) || (o.add(l), ra(o, "add", l, l)), this;
  }, set(l, o) {
    !t && !Sn(o) && !fa(o) && (o = Me(o));
    const i = Me(this), { has: r, get: s } = wi(i);
    let u = r.call(i, l);
    u || (l = Me(l), u = r.call(i, l));
    const c = s.call(i, l);
    return i.set(l, o), u ? Da(o, c) && ra(i, "set", l, o) : ra(i, "add", l, o), this;
  }, delete(l) {
    const o = Me(this), { has: i, get: r } = wi(o);
    let s = i.call(o, l);
    s || (l = Me(l), s = i.call(o, l)), r && r.call(o, l);
    const u = o.delete(l);
    return s && ra(o, "delete", l, void 0), u;
  }, clear() {
    const l = Me(this), o = l.size !== 0, i = l.clear();
    return o && ra(l, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    n[l] = uS(l, e, t);
  }), n;
}
function lc(e, t) {
  const n = cS(e, t);
  return (a, l, o) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(rt(n, l) && l in a ? n : a, l, o);
}
const dS = { get: lc(false, false) }, fS = { get: lc(false, true) }, vS = { get: lc(true, false) };
const wm = /* @__PURE__ */ new WeakMap(), Cm = /* @__PURE__ */ new WeakMap(), _m = /* @__PURE__ */ new WeakMap(), mS = /* @__PURE__ */ new WeakMap();
function gS(e) {
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
function hS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gS(Np(e));
}
function Et(e) {
  return fa(e) ? e : oc(e, false, iS, dS, wm);
}
function yS(e) {
  return oc(e, false, sS, fS, Cm);
}
function sl(e) {
  return oc(e, true, rS, vS, _m);
}
function oc(e, t, n, a, l) {
  if (!it(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = hS(e);
  if (o === 0) return e;
  const i = l.get(e);
  if (i) return i;
  const r = new Proxy(e, o === 2 ? a : n);
  return l.set(e, r), r;
}
function Ma(e) {
  return fa(e) ? Ma(e.__v_raw) : !!(e && e.__v_isReactive);
}
function fa(e) {
  return !!(e && e.__v_isReadonly);
}
function Sn(e) {
  return !!(e && e.__v_isShallow);
}
function oi(e) {
  return e ? !!e.__v_raw : false;
}
function Me(e) {
  const t = e && e.__v_raw;
  return t ? Me(t) : e;
}
function Vm(e) {
  return !rt(e, "__v_skip") && Object.isExtensible(e) && im(e, "__v_skip", true), e;
}
const Bn = (e) => it(e) ? Et(e) : e, Gl = (e) => it(e) ? sl(e) : e;
function kt(e) {
  return e ? e.__v_isRef === true : false;
}
function O(e) {
  return Im(e, false);
}
function re(e) {
  return Im(e, true);
}
function Im(e, t) {
  return kt(e) ? e : new bS(e, t);
}
class bS {
  constructor(t, n) {
    this.dep = new ac(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Me(t), this._value = n ? t : Bn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || Sn(t) || fa(t);
    t = a ? t : Me(t), Da(t, n) && (this._rawValue = t, this._value = a ? t : Bn(t), this.dep.trigger());
  }
}
function Ke(e) {
  return kt(e) ? e.value : e;
}
function st(e) {
  return je(e) ? e() : Ke(e);
}
const pS = { get: (e, t, n) => t === "__v_raw" ? e : Ke(Reflect.get(e, t, n)), set: (e, t, n, a) => {
  const l = e[t];
  return kt(l) && !kt(n) ? (l.value = n, true) : Reflect.set(e, t, n, a);
} };
function Pm(e) {
  return Ma(e) ? e : new Proxy(e, pS);
}
function ao(e) {
  const t = Ne(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Tm(e, n);
  return t;
}
class SS {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = true, this._value = void 0, this._raw = Me(t);
    let l = true, o = t;
    if (!Ne(t) || !br(String(n))) do
      l = !oi(o) || Sn(o);
    while (l && (o = o.__v_raw));
    this._shallow = l;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ke(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && kt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (kt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return eS(this._raw, this._key);
  }
}
class xS {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return kt(e) ? e : je(e) ? new xS(e) : it(e) && arguments.length > 1 ? Tm(e, t, n) : O(e);
}
function Tm(e, t, n) {
  return new SS(e, t, n);
}
class kS {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ac(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && ht !== this) return mm(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return ym(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function wS(e, t, n = false) {
  let a, l;
  return je(e) ? a = e : (a = e.get, l = e.set), new kS(a, l, n);
}
const _i = {}, Yi = /* @__PURE__ */ new WeakMap();
let Ja;
function CS(e, t = false, n = Ja) {
  if (n) {
    let a = Yi.get(n);
    a || Yi.set(n, a = []), a.push(e);
  }
}
function _S(e, t, n = vt) {
  const { immediate: a, deep: l, once: o, scheduler: i, augmentJob: r, call: s } = n, u = (V) => l ? V : Sn(V) || l === false || l === 0 ? sa(V, 1) : sa(V);
  let c, d, f, v, p = false, m = false;
  if (kt(e) ? (d = () => e.value, p = Sn(e)) : Ma(e) ? (d = () => u(e), p = true) : Ne(e) ? (m = true, p = e.some((V) => Ma(V) || Sn(V)), d = () => e.map((V) => {
    if (kt(V)) return V.value;
    if (Ma(V)) return u(V);
    if (je(V)) return s ? s(V, 2) : V();
  })) : je(e) ? t ? d = s ? () => s(e, 2) : e : d = () => {
    if (f) {
      ca();
      try {
        f();
      } finally {
        da();
      }
    }
    const V = Ja;
    Ja = c;
    try {
      return s ? s(e, 3, [v]) : e(v);
    } finally {
      Ja = V;
    }
  } : d = Un, t && l) {
    const V = d, k = l === true ? 1 / 0 : l;
    d = () => sa(V(), k);
  }
  const h = dm(), b = () => {
    c.stop(), h && h.active && Zu(h.effects, c);
  };
  if (o && t) {
    const V = t;
    t = (...k) => {
      V(...k), b();
    };
  }
  let w = m ? new Array(e.length).fill(_i) : _i;
  const I = (V) => {
    if (!(!(c.flags & 1) || !c.dirty && !V)) if (t) {
      const k = c.run();
      if (l || p || (m ? k.some((y, C) => Da(y, w[C])) : Da(k, w))) {
        f && f();
        const y = Ja;
        Ja = c;
        try {
          const C = [k, w === _i ? void 0 : m && w[0] === _i ? [] : w, v];
          w = k, s ? s(t, 3, C) : t(...C);
        } finally {
          Ja = y;
        }
      }
    } else c.run();
  };
  return r && r(I), c = new fm(d), c.scheduler = i ? () => i(I, false) : I, v = (V) => CS(V, false, c), f = c.onStop = () => {
    const V = Yi.get(c);
    if (V) {
      if (s) s(V, 4);
      else for (const k of V) k();
      Yi.delete(c);
    }
  }, t ? a ? I(true) : w = c.run() : i ? i(I.bind(null, true), true) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b;
}
function sa(e, t = 1 / 0, n) {
  if (t <= 0 || !it(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, kt(e)) sa(e.value, t, n);
  else if (Ne(e)) for (let a = 0; a < e.length; a++) sa(e[a], t, n);
  else if (nm(e) || Hl(e)) e.forEach((a) => {
    sa(a, t, n);
  });
  else if (om(e)) {
    for (const a in e) sa(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && sa(e[a], t, n);
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
    kr(l, t, n);
  }
}
function $n(e, t, n, a) {
  if (je(e)) {
    const l = ii(e, t, n, a);
    return l && am(l) && l.catch((o) => {
      kr(o, t, n);
    }), l;
  }
  if (Ne(e)) {
    const l = [];
    for (let o = 0; o < e.length; o++) l.push($n(e[o], t, n, a));
    return l;
  }
}
function kr(e, t, n, a = true) {
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
      ca(), ii(o, null, 10, [e, s, u]), da();
      return;
    }
  }
  VS(e, n, l, a, i);
}
function VS(e, t, n, a = true, l = false) {
  if (l) throw e;
  console.error(e);
}
const ln = [];
let Hn = -1;
const zl = [];
let Ta = null, Bl = 0;
const Am = Promise.resolve();
let Ki = null;
function Be(e) {
  const t = Ki || Am;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function IS(e) {
  let t = Hn + 1, n = ln.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = ln[a], o = Ro(l);
    o < e || o === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function ic(e) {
  if (!(e.flags & 1)) {
    const t = Ro(e), n = ln[ln.length - 1];
    !n || !(e.flags & 2) && t >= Ro(n) ? ln.push(e) : ln.splice(IS(t), 0, e), e.flags |= 1, Dm();
  }
}
function Dm() {
  Ki || (Ki = Am.then(Em));
}
function PS(e) {
  Ne(e) ? zl.push(...e) : Ta && e.id === -1 ? Ta.splice(Bl + 1, 0, e) : e.flags & 1 || (zl.push(e), e.flags |= 1), Dm();
}
function Ld(e, t, n = Hn + 1) {
  for (; n < ln.length; n++) {
    const a = ln[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      ln.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Mm(e) {
  if (zl.length) {
    const t = [...new Set(zl)].sort((n, a) => Ro(n) - Ro(a));
    if (zl.length = 0, Ta) {
      Ta.push(...t);
      return;
    }
    for (Ta = t, Bl = 0; Bl < Ta.length; Bl++) {
      const n = Ta[Bl];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ta = null, Bl = 0;
  }
}
const Ro = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Em(e) {
  try {
    for (Hn = 0; Hn < ln.length; Hn++) {
      const t = ln[Hn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ii(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Hn < ln.length; Hn++) {
      const t = ln[Hn];
      t && (t.flags &= -2);
    }
    Hn = -1, ln.length = 0, Mm(), Ki = null, (ln.length || zl.length) && Em();
  }
}
let gn = null, Bm = null;
function Xi(e) {
  const t = gn;
  return gn = e, Bm = e && e.type.__scopeId || null, t;
}
function he(e, t = gn, n) {
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
function lt(e, t) {
  if (gn === null) return e;
  const n = Pr(gn), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, r, s = vt] = t[l];
    o && (je(o) && (o = { mounted: o, updated: o }), o.deep && sa(i), a.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: r, modifiers: s }));
  }
  return e;
}
function Ya(e, t, n, a) {
  const l = e.dirs, o = t && t.dirs;
  for (let i = 0; i < l.length; i++) {
    const r = l[i];
    o && (r.oldValue = o[i].value);
    let s = r.dir[a];
    s && (ca(), $n(s, n, 8, [e.el, r, e, t]), da());
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
  if (a || Wl) {
    let l = Wl ? Wl._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l) return l[e];
    if (arguments.length > 1) return n && je(t) ? t.call(a && a.proxy) : t;
  }
}
const TS = Symbol.for("v-scx"), AS = () => Ge(TS);
function mt(e, t) {
  return rc(e, null, t);
}
function se(e, t, n) {
  return rc(e, t, n);
}
function rc(e, t, n = vt) {
  const { immediate: a, deep: l, flush: o, once: i } = n, r = Mt({}, n), s = t && a || !t && o !== "post";
  let u;
  if (No) {
    if (o === "sync") {
      const v = AS();
      u = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!s) {
      const v = () => {
      };
      return v.stop = Un, v.resume = Un, v.pause = Un, v;
    }
  }
  const c = Jt;
  r.call = (v, p, m) => $n(v, c, p, m);
  let d = false;
  o === "post" ? r.scheduler = (v) => {
    Yt(v, c && c.suspense);
  } : o !== "sync" && (d = true, r.scheduler = (v, p) => {
    p ? v() : ic(v);
  }), r.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, c && (v.id = c.uid, v.i = c));
  };
  const f = _S(e, t, r);
  return No && (u ? u.push(f) : s && f()), f;
}
function DS(e, t, n) {
  const a = this.proxy, l = pt(e) ? e.includes(".") ? $m(a, e) : () => a[e] : e.bind(a, a);
  let o;
  je(t) ? o = t : (o = t.handler, n = t);
  const i = ui(this), r = rc(l, o.bind(a), n);
  return i(), r;
}
function $m(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++) a = a[n[l]];
    return a;
  };
}
const Rm = Symbol("_vte"), Fm = (e) => e.__isTeleport, Vo = (e) => e && (e.disabled || e.disabled === ""), Od = (e) => e && (e.defer || e.defer === ""), Nd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Hd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ys = (e, t) => {
  const n = e && e.to;
  return pt(n) ? t ? t(n) : null : n;
}, Lm = { name: "Teleport", __isTeleport: true, process(e, t, n, a, l, o, i, r, s, u) {
  const { mc: c, pc: d, pbc: f, o: { insert: v, querySelector: p, createText: m, createComment: h } } = u, b = Vo(t.props);
  let { shapeFlag: w, children: I, dynamicChildren: V } = t;
  if (e == null) {
    const k = t.el = m(""), y = t.anchor = m("");
    v(k, n, a), v(y, n, a);
    const C = (T, P) => {
      w & 16 && c(I, T, P, l, o, i, r, s);
    }, x = () => {
      const T = t.target = Ys(t.props, p), P = Ks(T, t, m, v);
      T && (i !== "svg" && Nd(T) ? i = "svg" : i !== "mathml" && Hd(T) && (i = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), b || (C(T, P), Li(t, false)));
    };
    b && (C(n, y), Li(t, true)), Od(t.props) ? (t.el.__isMounted = false, Yt(() => {
      x(), delete t.el.__isMounted;
    }, o)) : x();
  } else {
    if (Od(t.props) && e.el.__isMounted === false) {
      Yt(() => {
        Lm.process(e, t, n, a, l, o, i, r, s, u);
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const k = t.anchor = e.anchor, y = t.target = e.target, C = t.targetAnchor = e.targetAnchor, x = Vo(e.props), T = x ? n : y, P = x ? k : C;
    if (i === "svg" || Nd(y) ? i = "svg" : (i === "mathml" || Hd(y)) && (i = "mathml"), V ? (f(e.dynamicChildren, V, T, l, o, i, r), fc(e, t, true)) : s || d(e, t, T, P, l, o, i, r, false), b) x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Vi(t, n, k, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const M = t.target = Ys(t.props, p);
      M && Vi(t, M, null, u, 0);
    } else x && Vi(t, y, C, u, 1);
    Li(t, b);
  }
}, remove(e, t, n, { um: a, o: { remove: l } }, o) {
  const { shapeFlag: i, children: r, anchor: s, targetStart: u, targetAnchor: c, target: d, props: f } = e;
  if (d && (l(u), l(c)), o && l(s), i & 16) {
    const v = o || !Vo(f);
    for (let p = 0; p < r.length; p++) {
      const m = r[p];
      a(m, t, n, v, !!m.dynamicChildren);
    }
  }
}, move: Vi, hydrate: MS };
function Vi(e, t, n, { o: { insert: a }, m: l }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: s, children: u, props: c } = e, d = o === 2;
  if (d && a(i, t, n), (!d || Vo(c)) && s & 16) for (let f = 0; f < u.length; f++) l(u[f], t, n, 2);
  d && a(r, t, n);
}
function MS(e, t, n, a, l, o, { o: { nextSibling: i, parentNode: r, querySelector: s, insert: u, createText: c } }, d) {
  function f(h, b) {
    let w = b;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor") t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, h._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      w = i(w);
    }
  }
  function v(h, b) {
    b.anchor = d(i(h), b, r(h), n, a, l, o);
  }
  const p = t.target = Ys(t.props, s), m = Vo(t.props);
  if (p) {
    const h = p._lpa || p.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), f(p, h), t.targetAnchor || Ks(p, t, c, u, r(e) === p ? e : null)) : (t.anchor = i(e), f(p, h), t.targetAnchor || Ks(p, t, c, u), d(h && i(h), t, p, n, a, l, o))), Li(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const ES = Lm;
function Li(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; ) a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function Ks(e, t, n, a, l = null) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[Rm] = i, e && (a(o, e, l), a(i, e, l)), i;
}
const zn = Symbol("_leaveCb"), mo = Symbol("_enterCb");
function Om() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return It(() => {
    e.isMounted = true;
  }), jt(() => {
    e.isUnmounting = true;
  }), e;
}
const _n = [Function, Array], Nm = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: _n, onEnter: _n, onAfterEnter: _n, onEnterCancelled: _n, onBeforeLeave: _n, onLeave: _n, onAfterLeave: _n, onLeaveCancelled: _n, onBeforeAppear: _n, onAppear: _n, onAfterAppear: _n, onAppearCancelled: _n }, Hm = (e) => {
  const t = e.subTree;
  return t.component ? Hm(t.component) : t;
}, BS = { name: "BaseTransition", props: Nm, setup(e, { slots: t }) {
  const n = si(), a = Om();
  return () => {
    const l = t.default && sc(t.default(), true);
    if (!l || !l.length) return;
    const o = zm(l), i = Me(e), { mode: r } = i;
    if (a.isLeaving) return ys(o);
    const s = zd(o);
    if (!s) return ys(o);
    let u = Fo(s, i, a, n, (d) => u = d);
    s.type !== qt && ul(s, u);
    let c = n.subTree && zd(n.subTree);
    if (c && c.type !== qt && !el(c, s) && Hm(n).type !== qt) {
      let d = Fo(c, i, a, n);
      if (ul(c, d), r === "out-in" && s.type !== qt) return a.isLeaving = true, d.afterLeave = () => {
        a.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
      }, ys(o);
      r === "in-out" && s.type !== qt ? d.delayLeave = (f, v, p) => {
        const m = Wm(a, c);
        m[String(c.key)] = c, f[zn] = () => {
          v(), f[zn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          p(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function zm(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== qt) {
      t = n;
      break;
    }
  }
  return t;
}
const $S = BS;
function Wm(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function Fo(e, t, n, a, l) {
  const { appear: o, mode: i, persisted: r = false, onBeforeEnter: s, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: v, onAfterLeave: p, onLeaveCancelled: m, onBeforeAppear: h, onAppear: b, onAfterAppear: w, onAppearCancelled: I } = t, V = String(e.key), k = Wm(n, e), y = (T, P) => {
    T && $n(T, a, 9, P);
  }, C = (T, P) => {
    const M = P[1];
    y(T, P), Ne(T) ? T.every((D) => D.length <= 1) && M() : T.length <= 1 && M();
  }, x = { mode: i, persisted: r, beforeEnter(T) {
    let P = s;
    if (!n.isMounted) if (o) P = h || s;
    else return;
    T[zn] && T[zn](true);
    const M = k[V];
    M && el(e, M) && M.el[zn] && M.el[zn](), y(P, [T]);
  }, enter(T) {
    if (k[V] === e) return;
    let P = u, M = c, D = d;
    if (!n.isMounted) if (o) P = b || u, M = w || c, D = I || d;
    else return;
    let E = false;
    T[mo] = (R) => {
      E || (E = true, R ? y(D, [T]) : y(M, [T]), x.delayedLeave && x.delayedLeave(), T[mo] = void 0);
    };
    const A = T[mo].bind(null, false);
    P ? C(P, [T, A]) : A();
  }, leave(T, P) {
    const M = String(e.key);
    if (T[mo] && T[mo](true), n.isUnmounting) return P();
    y(f, [T]);
    let D = false;
    T[zn] = (A) => {
      D || (D = true, P(), A ? y(m, [T]) : y(p, [T]), T[zn] = void 0, k[M] === e && delete k[M]);
    };
    const E = T[zn].bind(null, false);
    k[M] = e, v ? C(v, [T, E]) : E();
  }, clone(T) {
    const P = Fo(T, t, n, a, l);
    return l && l(P), P;
  } };
  return x;
}
function ys(e) {
  if (wr(e)) return e = ma(e), e.children = null, e;
}
function zd(e) {
  if (!wr(e)) return Fm(e.type) && e.children ? zm(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && je(n.default)) return n.default();
  }
}
function ul(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ul(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sc(e, t = false, n) {
  let a = [], l = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === be ? (i.patchFlag & 128 && l++, a = a.concat(sc(i.children, t, r))) : (t || i.type !== qt) && a.push(r != null ? ma(i, { key: r }) : i);
  }
  if (l > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function un(e, t) {
  return je(e) ? Mt({ name: e.name }, t, { setup: e }) : e;
}
function Rt() {
  const e = si();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function jm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Wd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const qi = /* @__PURE__ */ new WeakMap();
function Io(e, t, n, a, l = false) {
  if (Ne(e)) {
    e.forEach((m, h) => Io(m, t && (Ne(t) ? t[h] : t), n, a, l));
    return;
  }
  if (Po(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Io(e, t, n, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? Pr(a.component) : a.el, i = l ? null : o, { i: r, r: s } = e, u = t && t.r, c = r.refs === vt ? r.refs = {} : r.refs, d = r.setupState, f = Me(d), v = d === vt ? tm : (m) => Wd(c, m) ? false : rt(f, m), p = (m, h) => !(h && Wd(c, h));
  if (u != null && u !== s) {
    if (jd(t), pt(u)) c[u] = null, v(u) && (d[u] = null);
    else if (kt(u)) {
      const m = t;
      p(u, m.k) && (u.value = null), m.k && (c[m.k] = null);
    }
  }
  if (je(s)) ii(s, r, 12, [i, c]);
  else {
    const m = pt(s), h = kt(s);
    if (m || h) {
      const b = () => {
        if (e.f) {
          const w = m ? v(s) ? d[s] : c[s] : p() || !e.k ? s.value : c[e.k];
          if (l) Ne(w) && Zu(w, o);
          else if (Ne(w)) w.includes(o) || w.push(o);
          else if (m) c[s] = [o], v(s) && (d[s] = c[s]);
          else {
            const I = [o];
            p(s, e.k) && (s.value = I), e.k && (c[e.k] = I);
          }
        } else m ? (c[s] = i, v(s) && (d[s] = i)) : h && (p(s, e.k) && (s.value = i), e.k && (c[e.k] = i));
      };
      if (i) {
        const w = () => {
          b(), qi.delete(e);
        };
        w.id = -1, qi.set(e, w), Yt(w, n);
      } else jd(e), b();
    }
  }
}
function jd(e) {
  const t = qi.get(e);
  t && (t.flags |= 8, qi.delete(e));
}
Sr().requestIdleCallback;
Sr().cancelIdleCallback;
const Po = (e) => !!e.type.__asyncLoader, wr = (e) => e.type.__isKeepAlive;
function Um(e, t) {
  Gm(e, "a", t);
}
function uc(e, t) {
  Gm(e, "da", t);
}
function Gm(e, t, n = Jt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated) return;
      l = l.parent;
    }
    return e();
  });
  if (Cr(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; ) wr(l.parent.vnode) && RS(a, t, n, l), l = l.parent;
  }
}
function RS(e, t, n, a) {
  const l = Cr(t, e, a, true);
  Vr(() => {
    Zu(a[t], l);
  }, n);
}
function Cr(e, t, n = Jt, a = false) {
  if (n) {
    const l = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      ca();
      const r = ui(n), s = $n(t, n, e, i);
      return r(), da(), s;
    });
    return a ? l.unshift(o) : l.push(o), o;
  }
}
const ya = (e) => (t, n = Jt) => {
  (!No || e === "sp") && Cr(e, (...a) => t(...a), n);
}, lo = ya("bm"), It = ya("m"), Ym = ya("bu"), _r = ya("u"), jt = ya("bum"), Vr = ya("um"), FS = ya("sp"), LS = ya("rtg"), OS = ya("rtc");
function NS(e, t = Jt) {
  Cr("ec", e, t);
}
const Km = "components";
function Ae(e, t) {
  return Xm(Km, e, true, t) || e;
}
const HS = Symbol.for("v-ndc");
function zS(e) {
  return pt(e) && Xm(Km, e, false) || e;
}
function Xm(e, t, n = true, a = false) {
  const l = gn || Jt;
  if (l) {
    const o = l.type;
    {
      const r = Cx(o, false);
      if (r && (r === t || r === sn(t) || r === Zn(sn(t)))) return o;
    }
    const i = Ud(l[e] || o[e], t) || Ud(l.appContext[e], t);
    return !i && a ? o : i;
  }
}
function Ud(e, t) {
  return e && (e[t] || e[sn(t)] || e[Zn(sn(t))]);
}
function va(e, t, n, a) {
  let l;
  const o = n, i = Ne(e);
  if (i || pt(e)) {
    const r = i && Ma(e);
    let s = false, u = false;
    r && (s = !Sn(e), u = fa(e), e = xr(e)), l = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++) l[c] = t(s ? u ? Gl(Bn(e[c])) : Bn(e[c]) : e[c], c, void 0, o);
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
const Xs = (e) => e ? gg(e) ? Pr(e) : Xs(e.parent) : null, To = Mt(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Xs(e.parent), $root: (e) => Xs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Zm(e), $forceUpdate: (e) => e.f || (e.f = () => {
  ic(e.update);
}), $nextTick: (e) => e.n || (e.n = Be.bind(e.proxy)), $watch: (e) => DS.bind(e) }), bs = (e, t) => e !== vt && !e.__isScriptSetup && rt(e, t), WS = { get({ _: e }, t) {
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
      if (bs(a, t)) return i[t] = 1, a[t];
      if (l !== vt && rt(l, t)) return i[t] = 2, l[t];
      if (rt(o, t)) return i[t] = 3, o[t];
      if (n !== vt && rt(n, t)) return i[t] = 4, n[t];
      qs && (i[t] = 0);
    }
  }
  const u = To[t];
  let c, d;
  if (u) return t === "$attrs" && Xt(e.attrs, "get", ""), u(e);
  if ((c = r.__cssModules) && (c = c[t])) return c;
  if (n !== vt && rt(n, t)) return i[t] = 4, n[t];
  if (d = s.config.globalProperties, rt(d, t)) return d[t];
}, set({ _: e }, t, n) {
  const { data: a, setupState: l, ctx: o } = e;
  return bs(l, t) ? (l[t] = n, true) : a !== vt && rt(a, t) ? (a[t] = n, true) : rt(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: o, type: i } }, r) {
  let s;
  return !!(n[r] || e !== vt && r[0] !== "$" && rt(e, r) || bs(t, r) || rt(o, r) || rt(a, r) || rt(To, r) || rt(l.config.globalProperties, r) || (s = i.__cssModules) && s[r]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : rt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Gd(e) {
  return Ne(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let qs = true;
function jS(e) {
  const t = Zm(e), n = e.proxy, a = e.ctx;
  qs = false, t.beforeCreate && Yd(t.beforeCreate, e, "bc");
  const { data: l, computed: o, methods: i, watch: r, provide: s, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: v, updated: p, activated: m, deactivated: h, beforeDestroy: b, beforeUnmount: w, destroyed: I, unmounted: V, render: k, renderTracked: y, renderTriggered: C, errorCaptured: x, serverPrefetch: T, expose: P, inheritAttrs: M, components: D, directives: E, filters: A } = t;
  if (u && US(u, a, null), i) for (const N in i) {
    const Y = i[N];
    je(Y) && (a[N] = Y.bind(n));
  }
  if (l) {
    const N = l.call(n, n);
    it(N) && (e.data = Et(N));
  }
  if (qs = true, o) for (const N in o) {
    const Y = o[N], H = je(Y) ? Y.bind(n, n) : je(Y.get) ? Y.get.bind(n, n) : Un, F = !je(Y) && je(Y.set) ? Y.set.bind(n) : Un, Z = _({ get: H, set: F });
    Object.defineProperty(a, N, { enumerable: true, configurable: true, get: () => Z.value, set: (W) => Z.value = W });
  }
  if (r) for (const N in r) qm(r[N], a, n, N);
  if (s) {
    const N = je(s) ? s.call(n) : s;
    Reflect.ownKeys(N).forEach((Y) => {
      ft(Y, N[Y]);
    });
  }
  c && Yd(c, e, "c");
  function G(N, Y) {
    Ne(Y) ? Y.forEach((H) => N(H.bind(n))) : Y && N(Y.bind(n));
  }
  if (G(lo, d), G(It, f), G(Ym, v), G(_r, p), G(Um, m), G(uc, h), G(NS, x), G(OS, y), G(LS, C), G(jt, w), G(Vr, V), G(FS, T), Ne(P)) if (P.length) {
    const N = e.exposed || (e.exposed = {});
    P.forEach((Y) => {
      Object.defineProperty(N, Y, { get: () => n[Y], set: (H) => n[Y] = H, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  k && e.render === Un && (e.render = k), M != null && (e.inheritAttrs = M), D && (e.components = D), E && (e.directives = E), T && jm(e);
}
function US(e, t, n = Un) {
  Ne(e) && (e = Zs(e));
  for (const a in e) {
    const l = e[a];
    let o;
    it(l) ? "default" in l ? o = Ge(l.from || a, l.default, true) : o = Ge(l.from || a) : o = Ge(l), kt(o) ? Object.defineProperty(t, a, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[a] = o;
  }
}
function Yd(e, t, n) {
  $n(Ne(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function qm(e, t, n, a) {
  let l = a.includes(".") ? $m(n, a) : () => n[a];
  if (pt(e)) {
    const o = t[e];
    je(o) && se(l, o);
  } else if (je(e)) se(l, e.bind(n));
  else if (it(e)) if (Ne(e)) e.forEach((o) => qm(o, t, n, a));
  else {
    const o = je(e.handler) ? e.handler.bind(n) : t[e.handler];
    je(o) && se(l, o, e);
  }
}
function Zm(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: l, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, r = o.get(t);
  let s;
  return r ? s = r : !l.length && !n && !a ? s = t : (s = {}, l.length && l.forEach((u) => Zi(s, u, i, true)), Zi(s, t, i)), it(t) && o.set(t, s), s;
}
function Zi(e, t, n, a = false) {
  const { mixins: l, extends: o } = t;
  o && Zi(e, o, n, true), l && l.forEach((i) => Zi(e, i, n, true));
  for (const i in t) if (!(a && i === "expose")) {
    const r = GS[i] || n && n[i];
    e[i] = r ? r(e[i], t[i]) : t[i];
  }
  return e;
}
const GS = { data: Kd, props: Xd, emits: Xd, methods: po, computed: po, beforeCreate: nn, created: nn, beforeMount: nn, mounted: nn, beforeUpdate: nn, updated: nn, beforeDestroy: nn, beforeUnmount: nn, destroyed: nn, unmounted: nn, activated: nn, deactivated: nn, errorCaptured: nn, serverPrefetch: nn, components: po, directives: po, watch: KS, provide: Kd, inject: YS };
function Kd(e, t) {
  return t ? e ? function() {
    return Mt(je(e) ? e.call(this, this) : e, je(t) ? t.call(this, this) : t);
  } : t : e;
}
function YS(e, t) {
  return po(Zs(e), Zs(t));
}
function Zs(e) {
  if (Ne(e)) {
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
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xd(e, t) {
  return e ? Ne(e) && Ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(/* @__PURE__ */ Object.create(null), Gd(e), Gd(t ?? {})) : t;
}
function KS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t) n[a] = nn(e[a], t[a]);
  return n;
}
function Jm() {
  return { app: null, config: { isNativeTag: tm, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let XS = 0;
function qS(e, t) {
  return function(a, l = null) {
    je(a) || (a = Mt({}, a)), l != null && !it(l) && (l = null);
    const o = Jm(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let s = false;
    const u = o.app = { _uid: XS++, _component: a, _props: l, _container: null, _context: o, _instance: null, version: Vx, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...d) {
      return i.has(c) || (c && je(c.install) ? (i.add(c), c.install(u, ...d)) : je(c) && (i.add(c), c(u, ...d))), u;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), u;
    }, component(c, d) {
      return d ? (o.components[c] = d, u) : o.components[c];
    }, directive(c, d) {
      return d ? (o.directives[c] = d, u) : o.directives[c];
    }, mount(c, d, f) {
      if (!s) {
        const v = u._ceVNode || g(a, l);
        return v.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(v, c, f), s = true, u._container = c, c.__vue_app__ = u, Pr(v.component);
      }
    }, onUnmount(c) {
      r.push(c);
    }, unmount() {
      s && ($n(r, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, d) {
      return o.provides[c] = d, u;
    }, runWithContext(c) {
      const d = Wl;
      Wl = u;
      try {
        return c();
      } finally {
        Wl = d;
      }
    } };
    return u;
  };
}
let Wl = null;
const ZS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${sn(t)}Modifiers`] || e[`${bl(t)}Modifiers`];
function JS(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || vt;
  let l = n;
  const o = t.startsWith("update:"), i = o && ZS(a, t.slice(7));
  i && (i.trim && (l = n.map((c) => pt(c) ? c.trim() : c)), i.number && (l = n.map(Ju)));
  let r, s = a[r = fs(t)] || a[r = fs(sn(t))];
  !s && o && (s = a[r = fs(bl(t))]), s && $n(s, e, 6, l);
  const u = a[r + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    e.emitted[r] = true, $n(u, e, 6, l);
  }
}
const QS = /* @__PURE__ */ new WeakMap();
function Qm(e, t, n = false) {
  const a = n ? QS : t.emitsCache, l = a.get(e);
  if (l !== void 0) return l;
  const o = e.emits;
  let i = {}, r = false;
  if (!je(e)) {
    const s = (u) => {
      const c = Qm(u, t, true);
      c && (r = true, Mt(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !r ? (it(e) && a.set(e, null), null) : (Ne(o) ? o.forEach((s) => i[s] = null) : Mt(i, o), it(e) && a.set(e, i), i);
}
function Ir(e, t) {
  return !e || !yr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, bl(t)) || rt(e, t));
}
function qd(e) {
  const { type: t, vnode: n, proxy: a, withProxy: l, propsOptions: [o], slots: i, attrs: r, emit: s, render: u, renderCache: c, props: d, data: f, setupState: v, ctx: p, inheritAttrs: m } = e, h = Xi(e);
  let b, w;
  try {
    if (n.shapeFlag & 4) {
      const V = l || a, k = V;
      b = Wn(u.call(k, V, c, d, v, f, p)), w = r;
    } else {
      const V = t;
      b = Wn(V.length > 1 ? V(d, { attrs: r, slots: i, emit: s }) : V(d, null)), w = t.props ? r : ex(r);
    }
  } catch (V) {
    Ao.length = 0, kr(V, e, 1), b = g(qt);
  }
  let I = b;
  if (w && m !== false) {
    const V = Object.keys(w), { shapeFlag: k } = I;
    V.length && k & 7 && (o && V.some(qu) && (w = tx(w, o)), I = ma(I, w, false, true));
  }
  return n.dirs && (I = ma(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && ul(I, n.transition), b = I, Xi(h), b;
}
const ex = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || yr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tx = (e, t) => {
  const n = {};
  for (const a in e) (!qu(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function nx(e, t, n) {
  const { props: a, children: l, component: o } = e, { props: i, children: r, patchFlag: s } = t, u = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && s >= 0) {
    if (s & 1024) return true;
    if (s & 16) return a ? Zd(a, i, u) : !!i;
    if (s & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (eg(i, a, f) && !Ir(u, f)) return true;
      }
    }
  } else return (l || r) && (!r || !r.$stable) ? true : a === i ? false : a ? i ? Zd(a, i, u) : true : !!i;
  return false;
}
function Zd(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return true;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (eg(t, e, o) && !Ir(n, o)) return true;
  }
  return false;
}
function eg(e, t, n) {
  const a = e[n], l = t[n];
  return n === "style" && it(a) && it(l) ? !Qu(a, l) : a !== l;
}
function ax({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const tg = {}, ng = () => Object.create(tg), ag = (e) => Object.getPrototypeOf(e) === tg;
function lx(e, t, n, a = false) {
  const l = {}, o = ng();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lg(e, t, l, o);
  for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
  n ? e.props = a ? l : yS(l) : e.type.props ? e.props = l : e.props = o, e.attrs = o;
}
function ox(e, t, n, a) {
  const { props: l, attrs: o, vnode: { patchFlag: i } } = e, r = Me(l), [s] = e.propsOptions;
  let u = false;
  if ((a || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Ir(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s) if (rt(o, f)) v !== o[f] && (o[f] = v, u = true);
        else {
          const p = sn(f);
          l[p] = Js(s, r, p, v, e, false);
        }
        else v !== o[f] && (o[f] = v, u = true);
      }
    }
  } else {
    lg(e, t, l, o) && (u = true);
    let c;
    for (const d in r) (!t || !rt(t, d) && ((c = bl(d)) === d || !rt(t, c))) && (s ? n && (n[d] !== void 0 || n[c] !== void 0) && (l[d] = Js(s, r, d, void 0, e, true)) : delete l[d]);
    if (o !== r) for (const d in o) (!t || !rt(t, d)) && (delete o[d], u = true);
  }
  u && ra(e.attrs, "set", "");
}
function lg(e, t, n, a) {
  const [l, o] = e.propsOptions;
  let i = false, r;
  if (t) for (let s in t) {
    if (wo(s)) continue;
    const u = t[s];
    let c;
    l && rt(l, c = sn(s)) ? !o || !o.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : Ir(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, i = true);
  }
  if (o) {
    const s = Me(n), u = r || vt;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Js(l, s, d, u[d], e, !rt(u, d));
    }
  }
  return i;
}
function Js(e, t, n, a, l, o) {
  const i = e[n];
  if (i != null) {
    const r = rt(i, "default");
    if (r && a === void 0) {
      const s = i.default;
      if (i.type !== Function && !i.skipFactory && je(s)) {
        const { propsDefaults: u } = l;
        if (n in u) a = u[n];
        else {
          const c = ui(l);
          a = u[n] = s.call(null, t), c();
        }
      } else a = s;
      l.ce && l.ce._setProp(n, a);
    }
    i[0] && (o && !r ? a = false : i[1] && (a === "" || a === bl(n)) && (a = true));
  }
  return a;
}
const ix = /* @__PURE__ */ new WeakMap();
function og(e, t, n = false) {
  const a = n ? ix : t.propsCache, l = a.get(e);
  if (l) return l;
  const o = e.props, i = {}, r = [];
  let s = false;
  if (!je(e)) {
    const c = (d) => {
      s = true;
      const [f, v] = og(d, t, true);
      Mt(i, f), v && r.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !s) return it(e) && a.set(e, Nl), Nl;
  if (Ne(o)) for (let c = 0; c < o.length; c++) {
    const d = sn(o[c]);
    Jd(d) && (i[d] = vt);
  }
  else if (o) for (const c in o) {
    const d = sn(c);
    if (Jd(d)) {
      const f = o[c], v = i[d] = Ne(f) || je(f) ? { type: f } : Mt({}, f), p = v.type;
      let m = false, h = true;
      if (Ne(p)) for (let b = 0; b < p.length; ++b) {
        const w = p[b], I = je(w) && w.name;
        if (I === "Boolean") {
          m = true;
          break;
        } else I === "String" && (h = false);
      }
      else m = je(p) && p.name === "Boolean";
      v[0] = m, v[1] = h, (m || rt(v, "default")) && r.push(d);
    }
  }
  const u = [i, r];
  return it(e) && a.set(e, u), u;
}
function Jd(e) {
  return e[0] !== "$" && !wo(e);
}
const cc = (e) => e === "_" || e === "_ctx" || e === "$stable", dc = (e) => Ne(e) ? e.map(Wn) : [Wn(e)], rx = (e, t, n) => {
  if (t._n) return t;
  const a = he((...l) => dc(t(...l)), n);
  return a._c = false, a;
}, ig = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (cc(l)) continue;
    const o = e[l];
    if (je(o)) t[l] = rx(l, o, a);
    else if (o != null) {
      const i = dc(o);
      t[l] = () => i;
    }
  }
}, rg = (e, t) => {
  const n = dc(t);
  e.slots.default = () => n;
}, sg = (e, t, n) => {
  for (const a in t) (n || !cc(a)) && (e[a] = t[a]);
}, sx = (e, t, n) => {
  const a = e.slots = ng();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (sg(a, t, n), n && im(a, "_", l, true)) : ig(t, a);
  } else t && rg(e, t);
}, ux = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let o = true, i = vt;
  if (a.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? o = false : sg(l, t, n) : (o = !t.$stable, ig(t, l)), i = t;
  } else t && (rg(e, t), i = { default: 1 });
  if (o) for (const r in l) !cc(r) && i[r] == null && delete l[r];
}, Yt = mx;
function cx(e) {
  return dx(e);
}
function dx(e, t) {
  const n = Sr();
  n.__VUE__ = true;
  const { insert: a, remove: l, patchProp: o, createElement: i, createText: r, createComment: s, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: v = Un, insertStaticContent: p } = e, m = ($, z, Q, ce = null, oe = null, ue = null, pe = void 0, de = null, X = !!z.dynamicChildren) => {
    if ($ === z) return;
    $ && !el($, z) && (ce = K($), W($, oe, ue, true), $ = null), z.patchFlag === -2 && (X = false, z.dynamicChildren = null);
    const { type: le, ref: Ve, shapeFlag: J } = z;
    switch (le) {
      case ri:
        h($, z, Q, ce);
        break;
      case qt:
        b($, z, Q, ce);
        break;
      case Ss:
        $ == null && w(z, Q, ce, pe);
        break;
      case be:
        D($, z, Q, ce, oe, ue, pe, de, X);
        break;
      default:
        J & 1 ? k($, z, Q, ce, oe, ue, pe, de, X) : J & 6 ? E($, z, Q, ce, oe, ue, pe, de, X) : (J & 64 || J & 128) && le.process($, z, Q, ce, oe, ue, pe, de, X, _e);
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
  }, w = ($, z, Q, ce) => {
    [$.el, $.anchor] = p($.children, z, Q, ce, $.el, $.anchor);
  }, I = ({ el: $, anchor: z }, Q, ce) => {
    let oe;
    for (; $ && $ !== z; ) oe = f($), a($, Q, ce), $ = oe;
    a(z, Q, ce);
  }, V = ({ el: $, anchor: z }) => {
    let Q;
    for (; $ && $ !== z; ) Q = f($), l($), $ = Q;
    l(z);
  }, k = ($, z, Q, ce, oe, ue, pe, de, X) => {
    if (z.type === "svg" ? pe = "svg" : z.type === "math" && (pe = "mathml"), $ == null) y(z, Q, ce, oe, ue, pe, de, X);
    else {
      const le = $.el && $.el._isVueCE ? $.el : null;
      try {
        le && le._beginPatch(), T($, z, oe, ue, pe, de, X);
      } finally {
        le && le._endPatch();
      }
    }
  }, y = ($, z, Q, ce, oe, ue, pe, de) => {
    let X, le;
    const { props: Ve, shapeFlag: J, transition: ge, dirs: ke } = $;
    if (X = $.el = i($.type, ue, Ve && Ve.is, Ve), J & 8 ? c(X, $.children) : J & 16 && x($.children, X, null, ce, oe, ps($, ue), pe, de), ke && Ya($, null, ce, "created"), C(X, $, $.scopeId, pe, ce), Ve) {
      for (const Pe in Ve) Pe !== "value" && !wo(Pe) && o(X, Pe, null, Ve[Pe], ue, ce);
      "value" in Ve && o(X, "value", null, Ve.value, ue), (le = Ve.onVnodeBeforeMount) && On(le, ce, $);
    }
    ke && Ya($, null, ce, "beforeMount");
    const we = fx(oe, ge);
    we && ge.beforeEnter(X), a(X, z, Q), ((le = Ve && Ve.onVnodeMounted) || we || ke) && Yt(() => {
      le && On(le, ce, $), we && ge.enter(X), ke && Ya($, null, ce, "mounted");
    }, oe);
  }, C = ($, z, Q, ce, oe) => {
    if (Q && v($, Q), ce) for (let ue = 0; ue < ce.length; ue++) v($, ce[ue]);
    if (oe) {
      let ue = oe.subTree;
      if (z === ue || dg(ue.type) && (ue.ssContent === z || ue.ssFallback === z)) {
        const pe = oe.vnode;
        C($, pe, pe.scopeId, pe.slotScopeIds, oe.parent);
      }
    }
  }, x = ($, z, Q, ce, oe, ue, pe, de, X = 0) => {
    for (let le = X; le < $.length; le++) {
      const Ve = $[le] = de ? oa($[le]) : Wn($[le]);
      m(null, Ve, z, Q, ce, oe, ue, pe, de);
    }
  }, T = ($, z, Q, ce, oe, ue, pe) => {
    const de = z.el = $.el;
    let { patchFlag: X, dynamicChildren: le, dirs: Ve } = z;
    X |= $.patchFlag & 16;
    const J = $.props || vt, ge = z.props || vt;
    let ke;
    if (Q && Ka(Q, false), (ke = ge.onVnodeBeforeUpdate) && On(ke, Q, z, $), Ve && Ya(z, $, Q, "beforeUpdate"), Q && Ka(Q, true), (J.innerHTML && ge.innerHTML == null || J.textContent && ge.textContent == null) && c(de, ""), le ? P($.dynamicChildren, le, de, Q, ce, ps(z, oe), ue) : pe || Y($, z, de, null, Q, ce, ps(z, oe), ue, false), X > 0) {
      if (X & 16) M(de, J, ge, Q, oe);
      else if (X & 2 && J.class !== ge.class && o(de, "class", null, ge.class, oe), X & 4 && o(de, "style", J.style, ge.style, oe), X & 8) {
        const we = z.dynamicProps;
        for (let Pe = 0; Pe < we.length; Pe++) {
          const $e = we[Pe], We = J[$e], Le = ge[$e];
          (Le !== We || $e === "value") && o(de, $e, We, Le, oe, Q);
        }
      }
      X & 1 && $.children !== z.children && c(de, z.children);
    } else !pe && le == null && M(de, J, ge, Q, oe);
    ((ke = ge.onVnodeUpdated) || Ve) && Yt(() => {
      ke && On(ke, Q, z, $), Ve && Ya(z, $, Q, "updated");
    }, ce);
  }, P = ($, z, Q, ce, oe, ue, pe) => {
    for (let de = 0; de < z.length; de++) {
      const X = $[de], le = z[de], Ve = X.el && (X.type === be || !el(X, le) || X.shapeFlag & 198) ? d(X.el) : Q;
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
    ke && (de = de ? de.concat(ke) : ke), $ == null ? (a(le, Q, ce), a(Ve, Q, ce), x(z.children || [], Q, Ve, oe, ue, pe, de, X)) : J > 0 && J & 64 && ge && $.dynamicChildren && $.dynamicChildren.length === ge.length ? (P($.dynamicChildren, ge, Q, oe, ue, pe, de), (z.key != null || oe && z === oe.subTree) && fc($, z, true)) : Y($, z, Q, Ve, oe, ue, pe, de, X);
  }, E = ($, z, Q, ce, oe, ue, pe, de, X) => {
    z.slotScopeIds = de, $ == null ? z.shapeFlag & 512 ? oe.ctx.activate(z, Q, ce, pe, X) : A(z, Q, ce, oe, ue, pe, X) : R($, z, X);
  }, A = ($, z, Q, ce, oe, ue, pe) => {
    const de = $.component = px($, ce, oe);
    if (wr($) && (de.ctx.renderer = _e), Sx(de, false, pe), de.asyncDep) {
      if (oe && oe.registerDep(de, G, pe), !$.el) {
        const X = de.subTree = g(qt);
        b(null, X, z, Q), $.placeholder = X.el;
      }
    } else G(de, $, z, Q, oe, ue, pe);
  }, R = ($, z, Q) => {
    const ce = z.component = $.component;
    if (nx($, z, Q)) if (ce.asyncDep && !ce.asyncResolved) {
      N(ce, z, Q);
      return;
    } else ce.next = z, ce.update();
    else z.el = $.el, ce.vnode = z;
  }, G = ($, z, Q, ce, oe, ue, pe) => {
    const de = () => {
      if ($.isMounted) {
        let { next: J, bu: ge, u: ke, parent: we, vnode: Pe } = $;
        {
          const Qe = ug($);
          if (Qe) {
            J && (J.el = Pe.el, N($, J, pe)), Qe.asyncDep.then(() => {
              Yt(() => {
                $.isUnmounted || le();
              }, oe);
            });
            return;
          }
        }
        let $e = J, We;
        Ka($, false), J ? (J.el = Pe.el, N($, J, pe)) : J = Pe, ge && Fi(ge), (We = J.props && J.props.onVnodeBeforeUpdate) && On(We, we, J, Pe), Ka($, true);
        const Le = qd($), ut = $.subTree;
        $.subTree = Le, m(ut, Le, d(ut.el), K(ut), $, oe, ue), J.el = Le.el, $e === null && ax($, Le.el), ke && Yt(ke, oe), (We = J.props && J.props.onVnodeUpdated) && Yt(() => On(We, we, J, Pe), oe);
      } else {
        let J;
        const { el: ge, props: ke } = z, { bm: we, m: Pe, parent: $e, root: We, type: Le } = $, ut = Po(z);
        Ka($, false), we && Fi(we), !ut && (J = ke && ke.onVnodeBeforeMount) && On(J, $e, z), Ka($, true);
        {
          We.ce && We.ce._hasShadowRoot() && We.ce._injectChildStyle(Le);
          const Qe = $.subTree = qd($);
          m(null, Qe, Q, ce, $, oe, ue), z.el = Qe.el;
        }
        if (Pe && Yt(Pe, oe), !ut && (J = ke && ke.onVnodeMounted)) {
          const Qe = z;
          Yt(() => On(J, $e, Qe), oe);
        }
        (z.shapeFlag & 256 || $e && Po($e.vnode) && $e.vnode.shapeFlag & 256) && $.a && Yt($.a, oe), $.isMounted = true, z = Q = ce = null;
      }
    };
    $.scope.on();
    const X = $.effect = new fm(de);
    $.scope.off();
    const le = $.update = X.run.bind(X), Ve = $.job = X.runIfDirty.bind(X);
    Ve.i = $, Ve.id = $.uid, X.scheduler = () => ic(Ve), Ka($, true), le();
  }, N = ($, z, Q) => {
    z.component = $;
    const ce = $.vnode.props;
    $.vnode = z, $.next = null, ox($, z.props, ce, Q), ux($, z.children, Q), ca(), Ld($), da();
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
    ke & 8 ? (Ve & 16 && Se(le, oe, ue), J !== le && c(Q, J)) : Ve & 16 ? ke & 16 ? F(le, J, Q, ce, oe, ue, pe, de, X) : Se(le, oe, ue, true) : (Ve & 8 && c(Q, ""), ke & 16 && x(J, Q, ce, oe, ue, pe, de, X));
  }, H = ($, z, Q, ce, oe, ue, pe, de, X) => {
    $ = $ || Nl, z = z || Nl;
    const le = $.length, Ve = z.length, J = Math.min(le, Ve);
    let ge;
    for (ge = 0; ge < J; ge++) {
      const ke = z[ge] = X ? oa(z[ge]) : Wn(z[ge]);
      m($[ge], ke, Q, null, oe, ue, pe, de, X);
    }
    le > Ve ? Se($, oe, ue, true, false, J) : x(z, Q, ce, oe, ue, pe, de, X, J);
  }, F = ($, z, Q, ce, oe, ue, pe, de, X) => {
    let le = 0;
    const Ve = z.length;
    let J = $.length - 1, ge = Ve - 1;
    for (; le <= J && le <= ge; ) {
      const ke = $[le], we = z[le] = X ? oa(z[le]) : Wn(z[le]);
      if (el(ke, we)) m(ke, we, Q, null, oe, ue, pe, de, X);
      else break;
      le++;
    }
    for (; le <= J && le <= ge; ) {
      const ke = $[J], we = z[ge] = X ? oa(z[ge]) : Wn(z[ge]);
      if (el(ke, we)) m(ke, we, Q, null, oe, ue, pe, de, X);
      else break;
      J--, ge--;
    }
    if (le > J) {
      if (le <= ge) {
        const ke = ge + 1, we = ke < Ve ? z[ke].el : ce;
        for (; le <= ge; ) m(null, z[le] = X ? oa(z[le]) : Wn(z[le]), Q, we, oe, ue, pe, de, X), le++;
      }
    } else if (le > ge) for (; le <= J; ) W($[le], oe, ue, true), le++;
    else {
      const ke = le, we = le, Pe = /* @__PURE__ */ new Map();
      for (le = we; le <= ge; le++) {
        const Ee = z[le] = X ? oa(z[le]) : Wn(z[le]);
        Ee.key != null && Pe.set(Ee.key, le);
      }
      let $e, We = 0;
      const Le = ge - we + 1;
      let ut = false, Qe = 0;
      const Gt = new Array(Le);
      for (le = 0; le < Le; le++) Gt[le] = 0;
      for (le = ke; le <= J; le++) {
        const Ee = $[le];
        if (We >= Le) {
          W(Ee, oe, ue, true);
          continue;
        }
        let Ze;
        if (Ee.key != null) Ze = Pe.get(Ee.key);
        else for ($e = we; $e <= ge; $e++) if (Gt[$e - we] === 0 && el(Ee, z[$e])) {
          Ze = $e;
          break;
        }
        Ze === void 0 ? W(Ee, oe, ue, true) : (Gt[Ze - we] = le + 1, Ze >= Qe ? Qe = Ze : ut = true, m(Ee, z[Ze], Q, null, oe, ue, pe, de, X), We++);
      }
      const te = ut ? vx(Gt) : Nl;
      for ($e = te.length - 1, le = Le - 1; le >= 0; le--) {
        const Ee = we + le, Ze = z[Ee], cn = z[Ee + 1], Tn = Ee + 1 < Ve ? cn.el || cg(cn) : ce;
        Gt[le] === 0 ? m(null, Ze, Q, Tn, oe, ue, pe, de, X) : ut && ($e < 0 || le !== te[$e] ? Z(Ze, Q, Tn, 2) : $e--);
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
    if (pe === Ss) {
      I($, z, Q);
      return;
    }
    if (ce !== 2 && le & 1 && de) if (ce === 0) de.beforeEnter(ue), a(ue, z, Q), Yt(() => de.enter(ue), oe);
    else {
      const { leave: J, delayLeave: ge, afterLeave: ke } = de, we = () => {
        $.ctx.isUnmounted ? l(ue) : a(ue, z, Q);
      }, Pe = () => {
        ue._isLeaving && ue[zn](true), J(ue, () => {
          we(), ke && ke();
        });
      };
      ge ? ge(ue, we, Pe) : Pe();
    }
    else a(ue, z, Q);
  }, W = ($, z, Q, ce = false, oe = false) => {
    const { type: ue, props: pe, ref: de, children: X, dynamicChildren: le, shapeFlag: Ve, patchFlag: J, dirs: ge, cacheIndex: ke } = $;
    if (J === -2 && (oe = false), de != null && (ca(), Io(de, null, Q, $, true), da()), ke != null && (z.renderCache[ke] = void 0), Ve & 256) {
      z.ctx.deactivate($);
      return;
    }
    const we = Ve & 1 && ge, Pe = !Po($);
    let $e;
    if (Pe && ($e = pe && pe.onVnodeBeforeUnmount) && On($e, z, $), Ve & 6) ie($.component, Q, ce);
    else {
      if (Ve & 128) {
        $.suspense.unmount(Q, ce);
        return;
      }
      we && Ya($, null, z, "beforeUnmount"), Ve & 64 ? $.type.remove($, z, Q, _e, ce) : le && !le.hasOnce && (ue !== be || J > 0 && J & 64) ? Se(le, z, Q, false, true) : (ue === be && J & 384 || !oe && Ve & 16) && Se(X, z, Q), ce && L($);
    }
    (Pe && ($e = pe && pe.onVnodeUnmounted) || we) && Yt(() => {
      $e && On($e, z, $), we && Ya($, null, z, "unmounted");
    }, Q);
  }, L = ($) => {
    const { type: z, el: Q, anchor: ce, transition: oe } = $;
    if (z === be) {
      U(Q, ce);
      return;
    }
    if (z === Ss) {
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
    Qd(X), Qd(le), ce && Fi(ce), oe.stop(), ue && (ue.flags |= 8, W(pe, $, z, Q)), de && Yt(de, z), Yt(() => {
      $.isUnmounted = true;
    }, z);
  }, Se = ($, z, Q, ce = false, oe = false, ue = 0) => {
    for (let pe = ue; pe < $.length; pe++) W($[pe], z, Q, ce, oe);
  }, K = ($) => {
    if ($.shapeFlag & 6) return K($.component.subTree);
    if ($.shapeFlag & 128) return $.suspense.next();
    const z = f($.anchor || $.el), Q = z && z[Rm];
    return Q ? f(Q) : z;
  };
  let fe = false;
  const De = ($, z, Q) => {
    let ce;
    $ == null ? z._vnode && (W(z._vnode, null, null, true), ce = z._vnode.component) : m(z._vnode || null, $, z, null, null, null, Q), z._vnode = $, fe || (fe = true, Ld(ce), Mm(), fe = false);
  }, _e = { p: m, um: W, m: Z, r: L, mt: A, mc: x, pc: Y, pbc: P, n: K, o: e };
  return { render: De, hydrate: void 0, createApp: qS(De) };
}
function ps({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ka({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fx(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fc(e, t, n = false) {
  const a = e.children, l = t.children;
  if (Ne(a) && Ne(l)) for (let o = 0; o < a.length; o++) {
    const i = a[o];
    let r = l[o];
    r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[o] = oa(l[o]), r.el = i.el), !n && r.patchFlag !== -2 && fc(i, r)), r.type === ri && (r.patchFlag === -1 && (r = l[o] = oa(r)), r.el = i.el), r.type === qt && !r.el && (r.el = i.el);
  }
}
function vx(e) {
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
function ug(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ug(t);
}
function Qd(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function cg(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? cg(t.subTree) : null;
}
const dg = (e) => e.__isSuspense;
function mx(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : PS(e);
}
const be = Symbol.for("v-fgt"), ri = Symbol.for("v-txt"), qt = Symbol.for("v-cmt"), Ss = Symbol.for("v-stc"), Ao = [];
let hn = null;
function He(e = false) {
  Ao.push(hn = e ? null : []);
}
function gx() {
  Ao.pop(), hn = Ao[Ao.length - 1] || null;
}
let Lo = 1;
function Ji(e, t = false) {
  Lo += e, e < 0 && hn && t && (hn.hasOnce = true);
}
function fg(e) {
  return e.dynamicChildren = Lo > 0 ? hn || Nl : null, gx(), Lo > 0 && hn && hn.push(e), e;
}
function tt(e, t, n, a, l, o) {
  return fg(S(e, t, n, a, l, o, true));
}
function zt(e, t, n, a, l) {
  return fg(g(e, t, n, a, l, true));
}
function Oo(e) {
  return e ? e.__v_isVNode === true : false;
}
function el(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vg = ({ key: e }) => e ?? null, Oi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? pt(e) || kt(e) || je(e) ? { i: gn, r: e, k: t, f: !!n } : e : null);
function S(e, t = null, n = null, a = 0, l = null, o = e === be ? 0 : 1, i = false, r = false) {
  const s = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && vg(t), ref: t && Oi(t), scopeId: Bm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: a, dynamicProps: l, dynamicChildren: null, appContext: null, ctx: gn };
  return r ? (vc(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= pt(n) ? 8 : 16), Lo > 0 && !i && hn && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && hn.push(s), s;
}
const g = hx;
function hx(e, t = null, n = null, a = 0, l = null, o = false) {
  if ((!e || e === HS) && (e = qt), Oo(e)) {
    const r = ma(e, t, true);
    return n && vc(r, n), Lo > 0 && !o && hn && (r.shapeFlag & 6 ? hn[hn.indexOf(e)] = r : hn.push(r)), r.patchFlag = -2, r;
  }
  if (_x(e) && (e = e.__vccOpts), t) {
    t = mg(t);
    let { class: r, style: s } = t;
    r && !pt(r) && (t.class = ne(r)), it(s) && (oi(s) && !Ne(s) && (s = Mt({}, s)), t.style = me(s));
  }
  const i = pt(e) ? 1 : dg(e) ? 128 : Fm(e) ? 64 : it(e) ? 4 : je(e) ? 2 : 0;
  return S(e, t, n, a, l, i, o, true);
}
function mg(e) {
  return e ? oi(e) || ag(e) ? Mt({}, e) : e : null;
}
function ma(e, t, n = false, a = false) {
  const { props: l, ref: o, patchFlag: i, children: r, transition: s } = e, u = t ? q(l || {}, t) : l, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && vg(u), ref: t && t.ref ? n && o ? Ne(o) ? o.concat(Oi(t)) : [o, Oi(t)] : Oi(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: s, component: e.component, suspense: e.suspense, ssContent: e.ssContent && ma(e.ssContent), ssFallback: e.ssFallback && ma(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return s && a && ul(c, s.clone(c)), c;
}
function Oe(e = " ", t = 0) {
  return g(ri, null, e, t);
}
function Zt(e = "", t = false) {
  return t ? (He(), zt(qt, null, e)) : g(qt, null, e);
}
function Wn(e) {
  return e == null || typeof e == "boolean" ? g(qt) : Ne(e) ? g(be, null, e.slice()) : Oo(e) ? oa(e) : g(ri, null, String(e));
}
function oa(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ma(e);
}
function vc(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (Ne(t)) n = 16;
  else if (typeof t == "object") if (a & 65) {
    const l = t.default;
    l && (l._c && (l._d = false), vc(e, l()), l._c && (l._d = true));
    return;
  } else {
    n = 32;
    const l = t._;
    !l && !ag(t) ? t._ctx = gn : l === 3 && gn && (gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else je(t) ? (t = { default: t, _ctx: gn }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [Oe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function q(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a) if (l === "class") t.class !== a.class && (t.class = ne([t.class, a.class]));
    else if (l === "style") t.style = me([t.style, a.style]);
    else if (yr(l)) {
      const o = t[l], i = a[l];
      i && o !== i && !(Ne(o) && o.includes(i)) && (t[l] = o ? [].concat(o, i) : i);
    } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function On(e, t, n, a = null) {
  $n(e, t, 7, [n, a]);
}
const yx = Jm();
let bx = 0;
function px(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || yx, o = { uid: bx++, vnode: e, type: a, parent: t, appContext: l, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new cm(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(l.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: og(a, l), emitsOptions: Qm(a, l), emit: null, emitted: null, propsDefaults: vt, inheritAttrs: a.inheritAttrs, ctx: vt, data: vt, props: vt, attrs: vt, slots: vt, refs: vt, setupState: vt, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = JS.bind(null, o), e.ce && e.ce(o), o;
}
let Jt = null;
const si = () => Jt || gn;
let Qi, Qs;
{
  const e = Sr(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (o) => {
      l.length > 1 ? l.forEach((i) => i(o)) : l[0](o);
    };
  };
  Qi = t("__VUE_INSTANCE_SETTERS__", (n) => Jt = n), Qs = t("__VUE_SSR_SETTERS__", (n) => No = n);
}
const ui = (e) => {
  const t = Jt;
  return Qi(e), e.scope.on(), () => {
    e.scope.off(), Qi(t);
  };
}, ef = () => {
  Jt && Jt.scope.off(), Qi(null);
};
function gg(e) {
  return e.vnode.shapeFlag & 4;
}
let No = false;
function Sx(e, t = false, n = false) {
  t && Qs(t);
  const { props: a, children: l } = e.vnode, o = gg(e);
  lx(e, a, o, t), sx(e, l, n || t);
  const i = o ? xx(e, t) : void 0;
  return t && Qs(false), i;
}
function xx(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, WS);
  const { setup: a } = n;
  if (a) {
    ca();
    const l = e.setupContext = a.length > 1 ? wx(e) : null, o = ui(e), i = ii(a, e, 0, [e.props, l]), r = am(i);
    if (da(), o(), (r || e.sp) && !Po(e) && jm(e), r) {
      if (i.then(ef, ef), t) return i.then((s) => {
        tf(e, s);
      }).catch((s) => {
        kr(s, e, 0);
      });
      e.asyncDep = i;
    } else tf(e, i);
  } else hg(e);
}
function tf(e, t, n) {
  je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : it(t) && (e.setupState = Pm(t)), hg(e);
}
function hg(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Un);
  {
    const l = ui(e);
    ca();
    try {
      jS(e);
    } finally {
      da(), l();
    }
  }
}
const kx = { get(e, t) {
  return Xt(e, "get", ""), e[t];
} };
function wx(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, kx), slots: e.slots, emit: e.emit, expose: t };
}
function Pr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pm(Vm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in To) return To[n](e);
  }, has(t, n) {
    return n in t || n in To;
  } })) : e.proxy;
}
function Cx(e, t = true) {
  return je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _x(e) {
  return je(e) && "__vccOpts" in e;
}
const _ = (e, t) => wS(e, t, No);
function ba(e, t, n) {
  try {
    Ji(-1);
    const a = arguments.length;
    return a === 2 ? it(t) && !Ne(t) ? Oo(t) ? g(e, null, [t]) : g(e, t) : g(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Oo(n) && (n = [n]), g(e, t, n));
  } finally {
    Ji(1);
  }
}
const Vx = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let eu;
const nf = typeof window < "u" && window.trustedTypes;
if (nf) try {
  eu = nf.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const yg = eu ? (e) => eu.createHTML(e) : (e) => e, Ix = "http://www.w3.org/2000/svg", Px = "http://www.w3.org/1998/Math/MathML", la = typeof document < "u" ? document : null, af = la && la.createElement("template"), Tx = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, a) => {
  const l = t === "svg" ? la.createElementNS(Ix, e) : t === "mathml" ? la.createElementNS(Px, e) : n ? la.createElement(e, { is: n }) : la.createElement(e);
  return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
}, createText: (e) => la.createTextNode(e), createComment: (e) => la.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => la.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, a, l, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (l && (l === o || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === o || !(l = l.nextSibling)); ) ;
  else {
    af.innerHTML = yg(a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e);
    const r = af.content;
    if (a === "svg" || a === "mathml") {
      const s = r.firstChild;
      for (; s.firstChild; ) r.appendChild(s.firstChild);
      r.removeChild(s);
    }
    t.insertBefore(r, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Va = "transition", go = "animation", Yl = Symbol("_vtc"), bg = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, pg = Mt({}, Nm, bg), Ax = (e) => (e.displayName = "Transition", e.props = pg, e), Ra = Ax((e, { slots: t }) => ba($S, Sg(e), t)), Xa = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, lf = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Sg(e) {
  const t = {};
  for (const D in e) D in bg || (t[D] = e[D]);
  if (e.css === false) return t;
  const { name: n = "v", type: a, duration: l, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = i, appearToClass: c = r, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, p = Dx(l), m = p && p[0], h = p && p[1], { onBeforeEnter: b, onEnter: w, onEnterCancelled: I, onLeave: V, onLeaveCancelled: k, onBeforeAppear: y = b, onAppear: C = w, onAppearCancelled: x = I } = t, T = (D, E, A, R) => {
    D._enterCancelled = R, Ia(D, E ? c : r), Ia(D, E ? u : i), A && A();
  }, P = (D, E) => {
    D._isLeaving = false, Ia(D, d), Ia(D, v), Ia(D, f), E && E();
  }, M = (D) => (E, A) => {
    const R = D ? C : w, G = () => T(E, D, A);
    Xa(R, [E, G]), of(() => {
      Ia(E, D ? s : o), Nn(E, D ? c : r), lf(R) || rf(E, a, m, G);
    });
  };
  return Mt(t, { onBeforeEnter(D) {
    Xa(b, [D]), Nn(D, o), Nn(D, i);
  }, onBeforeAppear(D) {
    Xa(y, [D]), Nn(D, s), Nn(D, u);
  }, onEnter: M(false), onAppear: M(true), onLeave(D, E) {
    D._isLeaving = true;
    const A = () => P(D, E);
    Nn(D, d), D._enterCancelled ? (Nn(D, f), tu(D)) : (tu(D), Nn(D, f)), of(() => {
      D._isLeaving && (Ia(D, d), Nn(D, v), lf(V) || rf(D, a, h, A));
    }), Xa(V, [D, A]);
  }, onEnterCancelled(D) {
    T(D, false, void 0, true), Xa(I, [D]);
  }, onAppearCancelled(D) {
    T(D, true, void 0, true), Xa(x, [D]);
  }, onLeaveCancelled(D) {
    P(D), Xa(k, [D]);
  } });
}
function Dx(e) {
  if (e == null) return null;
  if (it(e)) return [xs(e.enter), xs(e.leave)];
  {
    const t = xs(e);
    return [t, t];
  }
}
function xs(e) {
  return Wp(e);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yl] || (e[Yl] = /* @__PURE__ */ new Set())).add(t);
}
function Ia(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Yl];
  n && (n.delete(t), n.size || (e[Yl] = void 0));
}
function of(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Mx = 0;
function rf(e, t, n, a) {
  const l = e._endId = ++Mx, o = () => {
    l === e._endId && a();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: r, propCount: s } = xg(e, t);
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
function xg(e, t) {
  const n = window.getComputedStyle(e), a = (p) => (n[p] || "").split(", "), l = a(`${Va}Delay`), o = a(`${Va}Duration`), i = sf(l, o), r = a(`${go}Delay`), s = a(`${go}Duration`), u = sf(r, s);
  let c = null, d = 0, f = 0;
  t === Va ? i > 0 && (c = Va, d = i, f = o.length) : t === go ? u > 0 && (c = go, d = u, f = s.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? Va : go : null, f = c ? c === Va ? o.length : s.length : 0);
  const v = c === Va && /\b(?:transform|all)(?:,|$)/.test(a(`${Va}Property`).toString());
  return { type: c, timeout: d, propCount: f, hasTransform: v };
}
function sf(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => uf(n) + uf(e[a])));
}
function uf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ex(e, t, n) {
  const a = e[Yl];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const er = Symbol("_vod"), kg = Symbol("_vsh"), Ln = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
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
  e.style.display = t ? e[er] : "none", e[kg] = !t;
}
const Bx = Symbol(""), $x = /(?:^|;)\s*display\s*:/;
function Rx(e, t, n) {
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
      const i = a[Bx];
      i && (n += ";" + i), a.cssText = n, o = $x.test(n);
    }
  } else t && e.removeAttribute("style");
  er in e && (e[er] = o ? a.display : "", e[kg] && (a.display = "none"));
}
const cf = /\s*!important$/;
function Ni(e, t, n) {
  if (Ne(n)) n.forEach((a) => Ni(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const a = Fx(e, t);
    cf.test(n) ? e.setProperty(bl(a), n.replace(cf, ""), "important") : e[a] = n;
  }
}
const df = ["Webkit", "Moz", "ms"], ks = {};
function Fx(e, t) {
  const n = ks[t];
  if (n) return n;
  let a = sn(t);
  if (a !== "filter" && a in e) return ks[t] = a;
  a = Zn(a);
  for (let l = 0; l < df.length; l++) {
    const o = df[l] + a;
    if (o in e) return ks[t] = o;
  }
  return t;
}
const ff = "http://www.w3.org/1999/xlink";
function vf(e, t, n, a, l, o = qp(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ff, t.slice(6, t.length)) : e.setAttributeNS(ff, t, n) : n == null || o && !rm(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Gn(n) ? String(n) : n);
}
function mf(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yg(n) : n);
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
    r === "boolean" ? n = rm(n) : n == null && r === "string" ? (n = "", i = true) : r === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(l || t);
}
function $l(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Lx(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const gf = Symbol("_vei");
function Ox(e, t, n, a, l = null) {
  const o = e[gf] || (e[gf] = {}), i = o[t];
  if (a && i) i.value = a;
  else {
    const [r, s] = Nx(t);
    if (a) {
      const u = o[t] = Wx(a, l);
      $l(e, r, u, s);
    } else i && (Lx(e, r, i, s), o[t] = void 0);
  }
}
const hf = /(?:Once|Passive|Capture)$/;
function Nx(e) {
  let t;
  if (hf.test(e)) {
    t = {};
    let a;
    for (; a = e.match(hf); ) e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : bl(e.slice(2)), t];
}
let ws = 0;
const Hx = Promise.resolve(), zx = () => ws || (Hx.then(() => ws = 0), ws = Date.now());
function Wx(e, t) {
  const n = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= n.attached) return;
    $n(jx(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = zx(), n;
}
function jx(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((a) => (l) => !l._stopped && a && a(l));
  } else return t;
}
const yf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ux = (e, t, n, a, l, o) => {
  const i = l === "svg";
  t === "class" ? Ex(e, a, i) : t === "style" ? Rx(e, n, a) : yr(t) ? qu(t) || Ox(e, t, n, a, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Gx(e, t, a, i)) ? (mf(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vf(e, t, a, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pt(a)) ? mf(e, sn(t), a, o, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), vf(e, t, a, i));
};
function Gx(e, t, n, a) {
  if (a) return !!(t === "innerHTML" || t === "textContent" || t in e && yf(t) && je(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
  }
  return yf(t) && pt(n) ? false : t in e;
}
const wg = /* @__PURE__ */ new WeakMap(), Cg = /* @__PURE__ */ new WeakMap(), tr = Symbol("_moveCb"), bf = Symbol("_enterCb"), Yx = (e) => (delete e.props.mode, e), Kx = Yx({ name: "TransitionGroup", props: Mt({}, pg, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = si(), a = Om();
  let l, o;
  return _r(() => {
    if (!l.length) return;
    const i = e.moveClass || `${e.name || "v"}-move`;
    if (!Jx(l[0].el, n.vnode.el, i)) {
      l = [];
      return;
    }
    l.forEach(Xx), l.forEach(qx);
    const r = l.filter(Zx);
    tu(n.vnode.el), r.forEach((s) => {
      const u = s.el, c = u.style;
      Nn(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
      const d = u[tr] = (f) => {
        f && f.target !== u || (!f || f.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[tr] = null, Ia(u, i));
      };
      u.addEventListener("transitionend", d);
    }), l = [];
  }), () => {
    const i = Me(e), r = Sg(i);
    let s = i.tag || be;
    if (l = [], o) for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.el && c.el instanceof Element && (l.push(c), ul(c, Fo(c, r, a, n)), wg.set(c, _g(c.el)));
    }
    o = t.default ? sc(t.default()) : [];
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      c.key != null && ul(c, Fo(c, r, a, n));
    }
    return g(s, null, o);
  };
} }), mc = Kx;
function Xx(e) {
  const t = e.el;
  t[tr] && t[tr](), t[bf] && t[bf]();
}
function qx(e) {
  Cg.set(e, _g(e.el));
}
function Zx(e) {
  const t = wg.get(e), n = Cg.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const o = e.el, i = o.style, r = o.getBoundingClientRect();
    let s = 1, u = 1;
    return o.offsetWidth && (s = r.width / o.offsetWidth), o.offsetHeight && (u = r.height / o.offsetHeight), (!Number.isFinite(s) || s === 0) && (s = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(s - 1) < 0.01 && (s = 1), Math.abs(u - 1) < 0.01 && (u = 1), i.transform = i.webkitTransform = `translate(${a / s}px,${l / u}px)`, i.transitionDuration = "0s", e;
  }
}
function _g(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function Jx(e, t, n) {
  const a = e.cloneNode(), l = e[Yl];
  l && l.forEach((r) => {
    r.split(/\s+/).forEach((s) => s && a.classList.remove(s));
  }), n.split(/\s+/).forEach((r) => r && a.classList.add(r)), a.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: i } = xg(a);
  return o.removeChild(a), i;
}
const pf = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return Ne(t) ? (n) => Fi(t, n) : t;
};
function Qx(e) {
  e.target.composing = true;
}
function Sf(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const Cs = Symbol("_assign");
function xf(e, t, n) {
  return t && (e = e.trim()), n && (e = Ju(e)), e;
}
const Tr = { created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
  e[Cs] = pf(l);
  const o = a || l.props && l.props.type === "number";
  $l(e, t ? "change" : "input", (i) => {
    i.target.composing || e[Cs](xf(e.value, n, o));
  }), (n || o) && $l(e, "change", () => {
    e.value = xf(e.value, n, o);
  }), t || ($l(e, "compositionstart", Qx), $l(e, "compositionend", Sf), $l(e, "change", Sf));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: o } }, i) {
  if (e[Cs] = pf(i), e.composing) return;
  const r = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ju(e.value) : e.value, s = t ?? "";
  r !== s && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === s) || (e.value = s));
} }, ek = ["ctrl", "shift", "alt", "meta"], tk = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => ek.some((n) => e[`${n}Key`] && !t.includes(n)) }, Ii = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const r = tk[t[i]];
      if (r && r(l, t)) return;
    }
    return e(l, ...o);
  }));
}, nk = Mt({ patchProp: Ux }, Tx);
let kf;
function Vg() {
  return kf || (kf = cx(nk));
}
const Ig = ((...e) => {
  Vg().render(...e);
}), ak = ((...e) => {
  const t = Vg().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = ok(a);
    if (!l) return;
    const o = t._component;
    !je(o) && !o.render && !o.template && (o.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const i = n(l, false, lk(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i;
  }, t;
});
function lk(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ok(e) {
  return pt(e) ? document.querySelector(e) : e;
}
const wf = () => {
};
function Pg(e) {
  const t = `[${e}]`;
  return { debug: wf, info: wf, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Cf = 5;
function _f(e, t, n) {
  const a = t * n, l = Math.max(1, Math.round(e / (a * Cf)));
  return e / (l * Cf);
}
function Tg(e, t, n) {
  const a = e * n.dpr, o = t * n.dpr + n.scrollCanvasPx, i = Math.floor(a / n.gridPitch), r = Math.floor(o / n.gridPitch);
  return { cx: i, cy: r };
}
function ik(e, t) {
  const n = (e.cx % t.screenCols + t.screenCols) % t.screenCols, a = (e.cy % t.screenRows + t.screenRows) % t.screenRows;
  return { cx: n, cy: a };
}
function rk(e, t, n) {
  return { cssX: e * n.gridPitch / n.dpr, cssY: (t * n.gridPitch - n.scrollCanvasPx) / n.dpr };
}
function sk(e, t) {
  return e * t.gridPitch / t.dpr;
}
const Ag = 1, uk = `gol.gridBlankZones.v${Ag}`, ck = 128;
function gc(e, t, n, a) {
  if (!Array.isArray(e)) return [];
  const l = a ?? Date.now(), o = [];
  for (const i of e) {
    if (o.length >= n) break;
    const r = t(i, l);
    r && o.push(r);
  }
  return o;
}
const dk = /* @__PURE__ */ new Set(["minor", "major", "both"]), fk = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function _s(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Fl(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function vk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function mk(e) {
  return typeof e == "string" && dk.has(e) ? e : "both";
}
function gk(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && fk.has(t.style) ? t.style : "none", a = _s(Fl(t.widthCells) ?? 1, 1, 4), l = typeof t.opacity == "number" ? t.opacity : 1, o = _s(l, 0, 1), i = { style: n, widthCells: a, opacity: o };
  if (n === "fade") {
    const r = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    i.fadeStrength = _s(r, 0, 1);
  }
  return n === "noted" && (i.notePitchCells = Math.max(1, Fl(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (i.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), i;
}
function hk(e) {
  return typeof e == "boolean" ? e : true;
}
function Vf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Dg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Fl(n.x1), l = Fl(n.y1), o = Fl(n.x2), i = Fl(n.y2);
  if (a === null || l === null || o === null || i === null) return null;
  const r = Math.min(a, o), s = Math.max(a, o), u = Math.min(l, i), c = Math.max(l, i);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : vk(), x1: r, y1: u, x2: s, y2: c, mode: mk(n.mode), edge: gk(n.edge), enabled: hk(n.enabled), createdAt: Vf(n.createdAt, t), updatedAt: Vf(n.updatedAt, t) };
}
function Mg(e, t = Date.now()) {
  return gc(e, Dg, ck, t);
}
function Vs() {
  return typeof localStorage < "u";
}
function Ar(e) {
  return { load() {
    if (!Vs()) return [];
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
    if (!Vs()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    Vs() && localStorage.removeItem(e.key);
  } };
}
const hc = Ar({ key: uk, version: Ag, normalize: Mg, itemsKey: "zones" }), yk = hc.load, bk = hc.save, pk = hc.clear;
function Dr(e) {
  const t = O(e.storage.load());
  function n(u) {
    const c = e.normalize(u);
    return t.value = c, e.storage.save(c), c;
  }
  function a(u) {
    var _a2;
    const c = n(u);
    (_a2 = e.onSet) == null ? void 0 : _a2.call(e, c);
  }
  function l(u) {
    var _a2;
    const c = e.normalizeOne(u);
    c && (n([...t.value.filter((d) => d.id !== c.id), c]), (_a2 = e.onAdd) == null ? void 0 : _a2.call(e, c));
  }
  function o(u) {
    var _a2;
    const c = e.normalizeOne(u);
    if (!c || !t.value.some((f) => f.id === c.id)) return;
    const d = t.value.map((f) => f.id === c.id ? c : f);
    n(d), (_a2 = e.onUpdate) == null ? void 0 : _a2.call(e, c);
  }
  function i(u) {
    var _a2;
    t.value.some((c) => c.id === u) && (n(t.value.filter((c) => c.id !== u)), (_a2 = e.onRemove) == null ? void 0 : _a2.call(e, u));
  }
  function r() {
    var _a2;
    t.value.length !== 0 && (t.value = [], e.storage.clear(), (_a2 = e.onClear) == null ? void 0 : _a2.call(e));
  }
  function s(u) {
    n(u);
  }
  return { items: t, setItems: a, addItem: l, updateItem: o, removeItem: i, clearItems: r, syncFromWorker: s };
}
function Sk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Dr({ storage: { load: yk, save: bk, clear: pk }, normalize: Mg, normalizeOne: Dg, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: a, updateZone: l, removeZone: o, clearZones: i, syncFromWorker: r };
}
const xk = 32, Eg = 1, kk = `gol.decals.v${Eg}`, an = [0.49, 0.3, 1, 0.6], wk = /* @__PURE__ */ new Set(["solid", "checkerboard", "stripes", "dots", "bitmap"]), Ck = /* @__PURE__ */ new Set(["alpha", "multiply", "screen"]);
function Aa(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function vn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function Pi(e) {
  const t = vn(e);
  return t === null ? null : Math.trunc(t);
}
function _k() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Vk(e) {
  return typeof e == "string" && wk.has(e) ? e : "solid";
}
function Ik(e) {
  return typeof e == "string" && Ck.has(e) ? e : "alpha";
}
function Pk(e) {
  const t = e && typeof e == "object" ? e : {}, n = Vk(t.kind), a = { kind: n };
  return n === "solid" ? (a.coverage = Aa(vn(t.coverage) ?? 1, 0, 1), a.solidR = Aa(vn(t.solidR) ?? an[0], 0, 1), a.solidG = Aa(vn(t.solidG) ?? an[1], 0, 1), a.solidB = Aa(vn(t.solidB) ?? an[2], 0, 1)) : n === "checkerboard" ? a.cellSize = Math.max(1, vn(t.cellSize) ?? 2) : n === "stripes" ? a.pitchCells = Math.max(2, vn(t.pitchCells) ?? 4) : n === "dots" && (a.dotRadius = Math.max(0.1, vn(t.dotRadius) ?? 0.4), a.dotSpacing = Math.max(2, vn(t.dotSpacing) ?? 3)), a;
}
function Tk(e) {
  return !Array.isArray(e) || e.length < 4 ? [...an] : [Aa(vn(e[0]) ?? an[0], 0, 1), Aa(vn(e[1]) ?? an[1], 0, 1), Aa(vn(e[2]) ?? an[2], 0, 1), Aa(vn(e[3]) ?? an[3], 0, 1)];
}
function Ak(e) {
  return typeof e == "boolean" ? e : true;
}
function If(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Bg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Pi(n.x1), l = Pi(n.y1), o = Pi(n.x2), i = Pi(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : _k(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), pattern: Pk(n.pattern), tint: Tk(n.tint), blendMode: Ik(n.blendMode), suppressCells: typeof n.suppressCells == "boolean" ? n.suppressCells : false, enabled: Ak(n.enabled), createdAt: If(n.createdAt, t), updatedAt: If(n.updatedAt, t) };
}
function $g(e, t = Date.now()) {
  return gc(e, Bg, xk, t);
}
const yc = Ar({ key: kk, version: Eg, normalize: $g, itemsKey: "decals" }), Dk = yc.load, Mk = yc.save, Ek = yc.clear;
function Bk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Dr({ storage: { load: Dk, save: Mk, clear: Ek }, normalize: $g, normalizeOne: Bg, onSet: e.onSetDecals, onAdd: e.onAddDecal, onUpdate: e.onUpdateDecal, onRemove: e.onRemoveDecal, onClear: e.onClearDecals });
  return { decals: t, setDecals: n, addDecal: a, updateDecal: l, removeDecal: o, clearDecals: i, syncFromWorker: r };
}
const nr = 4, ar = 2, lr = 8, Hi = 8, Is = 2, $k = "gol.hires";
function Ti(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function Rk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `hires-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Pf(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Mr(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, a = Ti(n.x1), l = Ti(n.y1), o = Ti(n.x2), i = Ti(n.y2);
  return a === null || l === null || o === null || i === null ? null : { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Rk(), x1: Math.min(a, o), y1: Math.min(l, i), x2: Math.max(a, o), y2: Math.max(l, i), multiplier: typeof n.multiplier == "number" && Number.isFinite(n.multiplier) ? Math.trunc(Math.max(ar, Math.min(lr, n.multiplier))) : nr, enabled: typeof n.enabled == "boolean" ? n.enabled : true, showGrid: typeof n.showGrid == "boolean" ? n.showGrid : true, showBaseGrid: typeof n.showBaseGrid == "boolean" ? n.showBaseGrid : true, showBorder: typeof n.showBorder == "boolean" ? n.showBorder : true, tickMultiplier: typeof n.tickMultiplier == "number" && Number.isFinite(n.tickMultiplier) && n.tickMultiplier >= 1 ? Math.trunc(n.tickMultiplier) : 1, createdAt: Pf(n.createdAt, t), updatedAt: Pf(n.updatedAt, t) };
}
function Fk(e, t) {
  return e.x1 <= t.x2 && e.x2 >= t.x1 && e.y1 <= t.y2 && e.y2 >= t.y1;
}
function bc(e, t = Date.now()) {
  if (!Array.isArray(e)) return [];
  const n = [];
  for (const a of e) {
    if (n.length >= Hi) break;
    const l = Mr(a, t);
    !l || n.some((i) => Fk(i, l)) || n.push(l);
  }
  return n;
}
const Tf = "gol.hires.v1", pc = Ar({ key: $k, version: Is, normalize: bc, itemsKey: "regions", migrate(e) {
  if (e.region && !e.regions) {
    const t = Mr(e.region);
    return { ...e, regions: t ? [t] : [], version: Is };
  }
  return { ...e, version: Is };
} }), Lk = pc.load;
function Ok() {
  const e = Lk();
  if (e.length > 0) return e;
  if (typeof localStorage > "u") return [];
  try {
    const t = localStorage.getItem(Tf);
    if (!t) return [];
    localStorage.removeItem(Tf);
    const n = JSON.parse(t);
    if (n.region) {
      const a = Mr(n.region);
      return a ? [a] : [];
    }
    return bc(n.regions);
  } catch {
    return [];
  }
}
const Nk = pc.save, Hk = pc.clear;
function zk(e = {}) {
  const { items: t, addItem: n, updateItem: a, removeItem: l, clearItems: o, syncFromWorker: i } = Dr({ storage: { load: Ok, save: Nk, clear: Hk }, normalize: bc, normalizeOne: Mr, onSet: e.onSetRegions, onAdd: e.onAddRegion, onUpdate: e.onUpdateRegion, onRemove: e.onRemoveRegion, onClear: e.onClearRegions });
  return { regions: t, addRegion: n, updateRegion: a, removeRegion: l, clearRegions: o, syncFromWorker: i };
}
const Kl = "#1a1a2e", zi = 8, Rg = 1, Wk = `gol.text.v${Rg}`, Ho = "bold 24px monospace", jk = /* @__PURE__ */ new Set(["sdf", "cells", "both"]), Uk = /^#[0-9a-fA-F]{6}$/;
function Gk(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : e;
}
function Ai(e) {
  const t = Gk(e);
  return t === null ? null : Math.trunc(t);
}
function Yk() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `text-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Af(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Fg(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e;
  if (typeof n.text != "string" || n.text.length === 0) return null;
  const a = Ai(n.cellX), l = Ai(n.cellY);
  if (a === null || l === null) return null;
  const o = Math.max(1, Ai(n.cellsWide) ?? 100), i = Ai(n.cellsHigh), r = i !== null && i >= 1 ? i : void 0, s = typeof n.renderMode == "string" && jk.has(n.renderMode) ? n.renderMode : "cells";
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : Yk(), text: n.text, font: typeof n.font == "string" && n.font.length > 0 ? n.font : Ho, cellX: a, cellY: l, cellsWide: o, ...r !== void 0 ? { cellsHigh: r } : {}, renderMode: s, color: typeof n.color == "string" && Uk.test(n.color) ? n.color : Kl, enabled: typeof n.enabled == "boolean" ? n.enabled : true, createdAt: Af(n.createdAt, t), updatedAt: Af(n.updatedAt, t) };
}
function Lg(e, t = Date.now()) {
  return gc(e, Fg, zi, t);
}
const Sc = Ar({ key: Wk, version: Rg, normalize: Lg, itemsKey: "blocks" }), Kk = Sc.load, Xk = Sc.save, qk = Sc.clear;
function Zk(e = {}) {
  const { items: t, setItems: n, addItem: a, updateItem: l, removeItem: o, clearItems: i, syncFromWorker: r } = Dr({ storage: { load: Kk, save: Xk, clear: qk }, normalize: Lg, normalizeOne: Fg, onSet: e.onSetBlocks, onAdd: e.onAddBlock, onUpdate: e.onUpdateBlock, onRemove: e.onRemoveBlock, onClear: e.onClearBlocks });
  return { blocks: t, setBlocks: n, addBlock: a, updateBlock: l, removeBlock: o, clearBlocks: i, syncFromWorker: r };
}
const Df = Pg("WorkerBridge");
function Jk() {
  let e = null;
  const t = O(null), n = /* @__PURE__ */ new Map();
  function a(s, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(s, u) : e.postMessage(s);
    } catch (c) {
      Df.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
    }
  }
  function l(s, u) {
    return n.has(s) || n.set(s, /* @__PURE__ */ new Set()), n.get(s).add(u), () => {
      var _a2;
      return (_a2 = n.get(s)) == null ? void 0 : _a2.delete(u);
    };
  }
  function o(s) {
    (s.type === "ready" || s.type === "grid_info") && (t.value = s.gridInfo);
    const u = n.get(s.type);
    if (u) for (const c of u) c(s);
  }
  function i(s, u) {
    const c = new Worker(new URL("/assets/backgroundRenderer-CQKOreA-.js", import.meta.url), { type: "module" });
    c.onmessage = (d) => o(d.data), c.onerror = (d) => {
      Df.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = c, a({ type: "init", canvas: s, cellPx: u }, [s]);
  }
  function r() {
    a({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: a, on: l, init: i, terminate: r };
}
const Ps = 5, Qk = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), ew = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function tw(e, t) {
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
    const c = Tg(s.clientX, s.clientY, u);
    return { cx: a(c.cx, u), cy: c.cy };
  }
  function o(s, u) {
    return { x1: Math.min(s.cx, u.cx), y1: Math.min(s.cy, u.cy), x2: Math.max(s.cx, u.cx), y2: Math.max(s.cy, u.cy) };
  }
  function i(s, u) {
    const c = (f) => Math.floor(f / Ps) * Ps, d = (f) => c(f) + (Ps - 1);
    return { x1: Math.max(0, Math.min(u.screenCols - 1, c(s.x1))), y1: c(s.y1), x2: Math.max(0, Math.min(u.screenCols - 1, d(s.x2))), y2: d(s.y2) };
  }
  function r(s) {
    if (!(s instanceof HTMLElement)) return false;
    if (s.closest(ew)) return true;
    let u = s;
    for (; u; ) {
      if (Qk.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: l, cellToScreen: rk, cellSpanToCssPx: sk, normalizeRect: o, snapRectToMajor: i, isInteractiveTarget: r, wrapXToViewport: a };
}
function nw() {
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
function aw(e) {
  const t = O(false), n = O(""), a = O({}), l = O(null);
  let o = null, i = 0, r = 0;
  function s(v) {
    if (!o || !i) {
      a.value = {};
      return;
    }
    const p = v ?? e.makeSnapshot();
    if (!p) return;
    const m = e.cellToScreen(o.cx, o.cy, p), h = e.cellSpanToCssPx(i, p);
    a.value = { position: "fixed", left: `${m.cssX}px`, top: `${m.cssY}px`, width: `${h}px`, "min-height": "2em", "z-index": "25" };
  }
  function u(v, p, m, h) {
    o = v, i = p, r = m, n.value = "", t.value = true, s(h), Be(() => {
      var _a2;
      return (_a2 = l.value) == null ? void 0 : _a2.focus();
    });
  }
  function c() {
    t.value = false, n.value = "", o = null, i = 0, r = 0;
  }
  function d(v, p) {
    v.key === "Enter" && !v.shiftKey ? (v.preventDefault(), p()) : v.key === "Escape" && (v.preventDefault(), c());
  }
  function f(v) {
    const p = l.value;
    return v === p || ((p == null ? void 0 : p.contains(v)) ?? false);
  }
  return { state: { visible: t, value: n, style: a, inputRef: l }, get anchor() {
    return o;
  }, get cellsWide() {
    return i;
  }, get cellsHigh() {
    return r;
  }, show: u, updateStyle: s, cleanup: c, onKeydown: d, isInsideInput: f };
}
function lw(e) {
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
    const w = e.cellToScreen(h.x1, h.y1, b), I = e.cellSpanToCssPx(h.x2 - h.x1 + 1, b), V = e.cellSpanToCssPx(h.y2 - h.y1 + 1, b);
    l.value = { left: `${w.cssX}px`, top: `${w.cssY}px`, width: `${I}px`, height: `${V}px` };
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
    const w = e.pointerToCell(h);
    if (!w) return;
    n.value = b[0], o = w;
    const I = { x1: w.cx, y1: w.cy, x2: w.cx, y2: w.cy };
    b[1].dragMode === "paint" && (i = { ...I }), a.value = I, u(), h.target instanceof Element && h.target.setPointerCapture(h.pointerId), h.preventDefault();
  }
  function v(h) {
    var _a2;
    if (!n.value || !o) return;
    const b = t.get(n.value);
    if (!b) return;
    const w = e.pointerToCell(h), I = e.makeSnapshot();
    if (!(!w || !I)) {
      if (b.dragMode === "paint" && i) i.x1 = Math.min(i.x1, w.cx), i.y1 = Math.min(i.y1, w.cy), i.x2 = Math.max(i.x2, w.cx), i.y2 = Math.max(i.y2, w.cy), a.value = { ...i };
      else {
        const V = e.normalizeRect(o, w);
        a.value = ((_a2 = b.snapMajor) == null ? void 0 : _a2.call(b)) ? e.snapRectToMajor(V, I) : V;
      }
      u();
    }
  }
  function p(h) {
    var _a2;
    if (!n.value || !o || h.button !== 0) return;
    h.target instanceof Element && h.target.hasPointerCapture(h.pointerId) && h.target.releasePointerCapture(h.pointerId);
    const b = t.get(n.value);
    if (!b) {
      c();
      return;
    }
    const w = e.pointerToCell(h), I = e.makeSnapshot();
    let V;
    if (b.dragMode === "paint" && i) w && (i.x1 = Math.min(i.x1, w.cx), i.y1 = Math.min(i.y1, w.cy), i.x2 = Math.max(i.x2, w.cx), i.y2 = Math.max(i.y2, w.cy)), V = i;
    else if (w) {
      const y = e.normalizeRect(o, w);
      V = ((_a2 = b.snapMajor) == null ? void 0 : _a2.call(b)) && I ? e.snapRectToMajor(y, I) : y;
    } else {
      c();
      return;
    }
    b.onCommit(V, I) === false || c();
  }
  function m() {
    return document.addEventListener("pointerdown", f), document.addEventListener("pointermove", v), document.addEventListener("pointerup", p), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", p);
    };
  }
  return { register: r, activeTool: n, previewRect: a, previewStyle: l, cancelActiveDrag: d, anyToolEnabled: s, attachListeners: m };
}
const ow = { key: 0, class: "zone-preview-text" }, iw = { class: "zone-list" }, rw = { class: "zone-text" }, sw = { class: "zone-coords" }, uw = { class: "zone-actions" }, cw = { key: 0, class: "zone-empty" }, dw = un({ __name: "GridZoneTab", props: { zones: {}, previewRect: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = O(false), i = O(0), r = O(0), s = O(4), u = O(4), c = O("both"), d = O("none"), f = O(1), v = O(1), p = O(0.6), m = O(2), h = O(false), b = _(() => n.zones.filter((M) => !!M && typeof M.id == "string" && M.id.length > 0 && typeof M.x1 == "number" && typeof M.y1 == "number" && typeof M.x2 == "number" && typeof M.y2 == "number" && typeof M.mode == "string" && !!M.edge && typeof M.edge.style == "string"));
  function w(M) {
    return M.id.slice(0, 6);
  }
  function I() {
    return { style: d.value, widthCells: Math.max(1, Math.min(4, Math.trunc(f.value))), opacity: Math.max(0, Math.min(1, v.value)), fadeStrength: d.value === "fade" ? Math.max(0, Math.min(1, p.value)) : void 0, notePitchCells: d.value === "noted" ? Math.max(1, Math.trunc(m.value)) : void 0, hideInteriorBorder: d.value === "bold-major" || d.value === "noted" ? h.value : void 0 };
  }
  const V = [{ title: "Both", value: "both" }, { title: "Minor only", value: "minor" }, { title: "Major only", value: "major" }], k = [{ title: "None", value: "none" }, { title: "Bold Major", value: "bold-major" }, { title: "Fade", value: "fade" }, { title: "Noted", value: "noted" }];
  function y() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function C() {
    const M = Date.now();
    a("add-zone", { id: y(), x1: Math.min(Math.trunc(i.value), Math.trunc(s.value)), y1: Math.min(Math.trunc(r.value), Math.trunc(u.value)), x2: Math.max(Math.trunc(i.value), Math.trunc(s.value)), y2: Math.max(Math.trunc(r.value), Math.trunc(u.value)), mode: c.value, edge: I(), enabled: true, createdAt: M, updatedAt: M });
  }
  function x(M) {
    a("update-zone", { ...M, enabled: !M.enabled, updatedAt: Date.now() });
  }
  function T() {
    a("tool-change", { enabled: l.value, snapMajor: o.value });
  }
  function P() {
    a("draft-change", { mode: c.value, edge: I() });
  }
  return se(l, T, { immediate: true }), se(o, T, { immediate: true }), se([c, d, f, v, p, m, h], P, { immediate: true }), (M, D) => {
    const E = Ae("v-switch"), A = Ae("v-text-field"), R = Ae("v-col"), G = Ae("v-row"), N = Ae("v-select"), Y = Ae("v-btn"), H = Ae("v-divider");
    return He(), tt(be, null, [g(E, { modelValue: l.value, "onUpdate:modelValue": D[0] || (D[0] = (F) => l.value = F), inset: "", density: "compact", color: "primary", "hide-details": "", label: "Zone Tool (drag on page)" }, null, 8, ["modelValue"]), g(E, { modelValue: o.value, "onUpdate:modelValue": D[1] || (D[1] = (F) => o.value = F), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), n.previewRect ? (He(), tt("div", ow, " Preview: (" + Te(n.previewRect.x1) + "," + Te(n.previewRect.y1) + ") \u2192 (" + Te(n.previewRect.x2) + "," + Te(n.previewRect.y2) + ") ", 1)) : Zt("", true), g(G, { dense: "" }, { default: he(() => [g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: i.value, "onUpdate:modelValue": D[2] || (D[2] = (F) => i.value = F), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: r.value, "onUpdate:modelValue": D[3] || (D[3] = (F) => r.value = F), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: s.value, "onUpdate:modelValue": D[4] || (D[4] = (F) => s.value = F), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "3" }, { default: he(() => [g(A, { modelValue: u.value, "onUpdate:modelValue": D[5] || (D[5] = (F) => u.value = F), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(G, { dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "6" }, { default: he(() => [g(N, { modelValue: c.value, "onUpdate:modelValue": D[6] || (D[6] = (F) => c.value = F), items: V, "item-title": "title", "item-value": "value", label: "Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "6" }, { default: he(() => [g(N, { modelValue: d.value, "onUpdate:modelValue": D[7] || (D[7] = (F) => d.value = F), items: k, "item-title": "title", "item-value": "value", label: "Edge", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(G, { dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "6" }, { default: he(() => [g(A, { modelValue: f.value, "onUpdate:modelValue": D[8] || (D[8] = (F) => f.value = F), modelModifiers: { number: true }, label: "Edge width", type: "number", min: "1", max: "4", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(R, { cols: "6" }, { default: he(() => [g(A, { modelValue: v.value, "onUpdate:modelValue": D[9] || (D[9] = (F) => v.value = F), modelModifiers: { number: true }, label: "Opacity (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), d.value === "fade" ? (He(), zt(G, { key: 1, dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "12" }, { default: he(() => [g(A, { modelValue: p.value, "onUpdate:modelValue": D[10] || (D[10] = (F) => p.value = F), modelModifiers: { number: true }, label: "Fade strength (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), d.value === "noted" ? (He(), zt(G, { key: 2, dense: "", class: "mt-2" }, { default: he(() => [g(R, { cols: "12" }, { default: he(() => [g(A, { modelValue: m.value, "onUpdate:modelValue": D[11] || (D[11] = (F) => m.value = F), modelModifiers: { number: true }, label: "Note pitch cells", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), d.value === "bold-major" || d.value === "noted" ? (He(), zt(G, { key: 3, dense: "", class: "mt-1" }, { default: he(() => [g(R, { cols: "12" }, { default: he(() => [g(E, { modelValue: h.value, "onUpdate:modelValue": D[12] || (D[12] = (F) => h.value = F), inset: "", density: "compact", "hide-details": "", label: "Hide borders inside adjacent zones" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), g(Y, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: C }, { default: he(() => [...D[14] || (D[14] = [Oe(" Add Zone ", -1)])]), _: 1 }), g(H, { class: "my-3" }), S("div", iw, [(He(true), tt(be, null, va(b.value, (F) => (He(), tt("div", { key: F.id, class: "zone-row" }, [S("div", rw, [S("div", null, "#" + Te(w(F)) + " \xB7 " + Te(F.mode) + " \xB7 " + Te(F.edge.style), 1), S("div", sw, "(" + Te(F.x1) + "," + Te(F.y1) + ") \u2192 (" + Te(F.x2) + "," + Te(F.y2) + ")", 1)]), S("div", uw, [g(Y, { size: "x-small", variant: "text", onClick: (Z) => x(F) }, { default: he(() => [Oe(Te(F.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(Y, { size: "x-small", variant: "text", color: "error", onClick: (Z) => a("remove-zone", F.id) }, { default: he(() => [...D[15] || (D[15] = [Oe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), b.value.length === 0 ? (He(), tt("div", cw, "No zones.")) : Zt("", true)]), g(Y, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: b.value.length === 0, onClick: D[13] || (D[13] = (F) => a("clear-zones")) }, { default: he(() => [...D[16] || (D[16] = [Oe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), ja = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t) n[a] = l;
  return n;
}, fw = ja(dw, [["__scopeId", "data-v-223984b2"]]), vw = { class: "decal-list" }, mw = { class: "decal-text" }, gw = { class: "decal-coords" }, hw = { class: "decal-actions" }, yw = { key: 0, class: "decal-empty" }, bw = un({ __name: "GridDecalTab", props: { decals: {} }, emits: ["add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = O(false), i = O("solid"), r = O("alpha"), s = O(false), u = O(an[0]), c = O(an[1]), d = O(an[2]), f = O(an[3]), v = O(1), p = O(an[0]), m = O(an[1]), h = O(an[2]), b = O(2), w = O(4), I = O(0.4), V = O(3), k = O(0), y = O(0), C = O(4), x = O(4), T = [{ title: "Solid", value: "solid" }, { title: "Checkerboard", value: "checkerboard" }, { title: "Stripes", value: "stripes" }, { title: "Dots", value: "dots" }], P = [{ title: "Alpha", value: "alpha" }, { title: "Multiply", value: "multiply" }, { title: "Screen", value: "screen" }], M = _(() => n.decals.filter((Y) => !!Y && typeof Y.id == "string" && Y.id.length > 0 && typeof Y.x1 == "number" && typeof Y.y1 == "number" && typeof Y.x2 == "number" && typeof Y.y2 == "number" && !!Y.pattern && typeof Y.pattern.kind == "string"));
  function D(Y) {
    return Y.id.slice(0, 6);
  }
  function E() {
    const Y = i.value;
    return Y === "solid" ? { kind: Y, coverage: Math.max(0, Math.min(1, v.value)), solidR: Math.max(0, Math.min(1, p.value)), solidG: Math.max(0, Math.min(1, m.value)), solidB: Math.max(0, Math.min(1, h.value)) } : Y === "checkerboard" ? { kind: Y, cellSize: Math.max(1, b.value) } : Y === "stripes" ? { kind: Y, pitchCells: Math.max(2, w.value) } : Y === "dots" ? { kind: Y, dotRadius: Math.max(0.1, I.value), dotSpacing: Math.max(2, V.value) } : { kind: Y };
  }
  function A() {
    return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `decal-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function R() {
    const Y = Date.now();
    a("add-decal", { id: A(), x1: Math.min(Math.trunc(k.value), Math.trunc(C.value)), y1: Math.min(Math.trunc(y.value), Math.trunc(x.value)), x2: Math.max(Math.trunc(k.value), Math.trunc(C.value)), y2: Math.max(Math.trunc(y.value), Math.trunc(x.value)), pattern: E(), tint: [Math.max(0, Math.min(1, u.value)), Math.max(0, Math.min(1, c.value)), Math.max(0, Math.min(1, d.value)), Math.max(0, Math.min(1, f.value))], blendMode: r.value, suppressCells: s.value, enabled: true, createdAt: Y, updatedAt: Y });
  }
  function G(Y) {
    a("update-decal", { ...Y, enabled: !Y.enabled, updatedAt: Date.now() });
  }
  function N() {
    a("decal-tool-change", { enabled: l.value, snapMajor: o.value });
  }
  return se(l, N, { immediate: true }), se(o, N, { immediate: true }), (Y, H) => {
    const F = Ae("v-switch"), Z = Ae("v-select"), W = Ae("v-col"), L = Ae("v-row"), U = Ae("v-text-field"), ie = Ae("v-btn"), Se = Ae("v-divider");
    return He(), tt(be, null, [g(F, { modelValue: l.value, "onUpdate:modelValue": H[0] || (H[0] = (K) => l.value = K), class: "mt-2", inset: "", density: "compact", color: "primary", "hide-details": "", label: "Decal Tool (drag on page)" }, null, 8, ["modelValue"]), g(F, { modelValue: o.value, "onUpdate:modelValue": H[1] || (H[1] = (K) => o.value = K), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Snap to major blocks (5x5)" }, null, 8, ["modelValue"]), g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "6" }, { default: he(() => [g(Z, { modelValue: i.value, "onUpdate:modelValue": H[2] || (H[2] = (K) => i.value = K), items: T, "item-title": "title", "item-value": "value", label: "Kind", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "6" }, { default: he(() => [g(Z, { modelValue: r.value, "onUpdate:modelValue": H[3] || (H[3] = (K) => r.value = K), items: P, "item-title": "title", "item-value": "value", label: "Blend", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), i.value === "solid" ? (He(), tt(be, { key: 0 }, [g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "12" }, { default: he(() => [g(U, { modelValue: v.value, "onUpdate:modelValue": H[4] || (H[4] = (K) => v.value = K), modelModifiers: { number: true }, label: "Coverage (0-1)", type: "number", min: "0", max: "1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(L, { dense: "", class: "mt-1" }, { default: he(() => [g(W, { cols: "4" }, { default: he(() => [g(U, { modelValue: p.value, "onUpdate:modelValue": H[5] || (H[5] = (K) => p.value = K), modelModifiers: { number: true }, label: "R", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "4" }, { default: he(() => [g(U, { modelValue: m.value, "onUpdate:modelValue": H[6] || (H[6] = (K) => m.value = K), modelModifiers: { number: true }, label: "G", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "4" }, { default: he(() => [g(U, { modelValue: h.value, "onUpdate:modelValue": H[7] || (H[7] = (K) => h.value = K), modelModifiers: { number: true }, label: "B", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })], 64)) : i.value === "checkerboard" ? (He(), zt(L, { key: 1, dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "12" }, { default: he(() => [g(U, { modelValue: b.value, "onUpdate:modelValue": H[8] || (H[8] = (K) => b.value = K), modelModifiers: { number: true }, label: "Cell size (>=1)", type: "number", min: "1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "stripes" ? (He(), zt(L, { key: 2, dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "12" }, { default: he(() => [g(U, { modelValue: w.value, "onUpdate:modelValue": H[9] || (H[9] = (K) => w.value = K), modelModifiers: { number: true }, label: "Pitch cells (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : i.value === "dots" ? (He(), zt(L, { key: 3, dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "6" }, { default: he(() => [g(U, { modelValue: I.value, "onUpdate:modelValue": H[10] || (H[10] = (K) => I.value = K), modelModifiers: { number: true }, label: "Radius (>=0.1)", type: "number", min: "0.1", step: "0.1", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "6" }, { default: he(() => [g(U, { modelValue: V.value, "onUpdate:modelValue": H[11] || (H[11] = (K) => V.value = K), modelModifiers: { number: true }, label: "Spacing (>=2)", type: "number", min: "2", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })) : Zt("", true), g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: u.value, "onUpdate:modelValue": H[12] || (H[12] = (K) => u.value = K), modelModifiers: { number: true }, label: "TR", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: c.value, "onUpdate:modelValue": H[13] || (H[13] = (K) => c.value = K), modelModifiers: { number: true }, label: "TG", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: d.value, "onUpdate:modelValue": H[14] || (H[14] = (K) => d.value = K), modelModifiers: { number: true }, label: "TB", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: f.value, "onUpdate:modelValue": H[15] || (H[15] = (K) => f.value = K), modelModifiers: { number: true }, label: "TA", type: "number", min: "0", max: "1", step: "0.05", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(F, { modelValue: s.value, "onUpdate:modelValue": H[16] || (H[16] = (K) => s.value = K), class: "mt-1", inset: "", density: "compact", "hide-details": "", label: "Suppress cells" }, null, 8, ["modelValue"]), g(L, { dense: "", class: "mt-2" }, { default: he(() => [g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: k.value, "onUpdate:modelValue": H[17] || (H[17] = (K) => k.value = K), modelModifiers: { number: true }, label: "x1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: y.value, "onUpdate:modelValue": H[18] || (H[18] = (K) => y.value = K), modelModifiers: { number: true }, label: "y1", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: C.value, "onUpdate:modelValue": H[19] || (H[19] = (K) => C.value = K), modelModifiers: { number: true }, label: "x2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(W, { cols: "3" }, { default: he(() => [g(U, { modelValue: x.value, "onUpdate:modelValue": H[20] || (H[20] = (K) => x.value = K), modelModifiers: { number: true }, label: "y2", type: "number", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), g(ie, { class: "mt-3", size: "small", color: "primary", variant: "tonal", onClick: R }, { default: he(() => [...H[22] || (H[22] = [Oe(" Add Decal ", -1)])]), _: 1 }), g(Se, { class: "my-3" }), S("div", vw, [(He(true), tt(be, null, va(M.value, (K) => (He(), tt("div", { key: K.id, class: "decal-row" }, [S("div", mw, [S("div", null, "#" + Te(D(K)) + " \xB7 " + Te(K.pattern.kind) + " \xB7 " + Te(K.blendMode), 1), S("div", gw, "(" + Te(K.x1) + "," + Te(K.y1) + ") \u2192 (" + Te(K.x2) + "," + Te(K.y2) + ")", 1)]), S("div", hw, [g(ie, { size: "x-small", variant: "text", onClick: (fe) => G(K) }, { default: he(() => [Oe(Te(K.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(ie, { size: "x-small", variant: "text", color: "error", onClick: (fe) => a("remove-decal", K.id) }, { default: he(() => [...H[23] || (H[23] = [Oe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), M.value.length === 0 ? (He(), tt("div", yw, "No decals.")) : Zt("", true)]), g(ie, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: M.value.length === 0, onClick: H[21] || (H[21] = (K) => a("clear-decals")) }, { default: he(() => [...H[24] || (H[24] = [Oe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])], 64);
  };
} }), pw = ja(bw, [["__scopeId", "data-v-83067205"]]), Mf = 210, Sw = { class: "hires-tab" }, xw = { class: "text-caption text-medium-emphasis mb-2" }, kw = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, ww = { class: "region-list" }, Cw = { class: "d-flex align-center justify-space-between" }, _w = { class: "text-body-2" }, Vw = { class: "text-caption text-medium-emphasis" }, Iw = { class: "d-flex align-center gap-2 mt-2 flex-wrap" }, Pw = { class: "mt-2" }, Tw = { class: "d-flex align-center justify-space-between" }, Aw = { class: "text-caption text-medium-emphasis" }, Dw = { class: "mt-2" }, Mw = { class: "d-flex align-center justify-space-between" }, Ew = { class: "text-caption text-medium-emphasis" }, Bw = { key: 0, class: "text-caption", style: { opacity: "0.7", padding: "6px 0" } }, $w = un({ __name: "GridHiResTab", props: { regions: {} }, emits: ["add-region", "update-region", "remove-region", "clear-regions", "hires-tool-change"], setup(e, { emit: t }) {
  const n = e, a = t, l = O(false), o = _(() => n.regions.length < Hi);
  function i() {
    l.value = !l.value, a("hires-tool-change", { enabled: l.value });
  }
  function r(m) {
    a("update-region", { ...m, enabled: !m.enabled, updatedAt: Date.now() });
  }
  function s(m) {
    a("update-region", { ...m, showGrid: !m.showGrid, updatedAt: Date.now() });
  }
  function u(m) {
    a("update-region", { ...m, showBaseGrid: !m.showBaseGrid, updatedAt: Date.now() });
  }
  function c(m) {
    a("update-region", { ...m, showBorder: !m.showBorder, updatedAt: Date.now() });
  }
  function d(m, h) {
    a("update-region", { ...m, tickMultiplier: h, updatedAt: Date.now() });
  }
  function f(m, h) {
    a("update-region", { ...m, multiplier: h, updatedAt: Date.now() });
  }
  function v(m) {
    return m >= Mf ? "max" : m === 1 ? "1x" : `${m}x`;
  }
  function p(m) {
    return m.id.slice(0, 6);
  }
  return (m, h) => {
    const b = Ae("v-btn"), w = Ae("v-divider"), I = Ae("v-chip"), V = Ae("v-slider"), k = Ae("v-card");
    return He(), tt("div", Sw, [S("p", xw, Te(Ke(ar)) + "\u2013" + Te(Ke(lr)) + "x multiplier \u2014 click and drag on the grid to place a region ", 1), g(b, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !o.value && !l.value, size: "small", block: "", onClick: i }, { default: he(() => [Oe(Te(l.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Region"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), e.regions.length >= Ke(Hi) ? (He(), tt("div", kw, " Max " + Te(Ke(Hi)) + " regions reached. ", 1)) : Zt("", true), e.regions.length > 0 ? (He(), zt(w, { key: 1, class: "my-3" })) : Zt("", true), S("div", ww, [(He(true), tt(be, null, va(e.regions, (y) => (He(), zt(k, { key: y.id, variant: "outlined", density: "compact", class: "pa-2 mb-2" }, { default: he(() => [S("div", Cw, [S("span", _w, " #" + Te(p(y)) + " (" + Te(y.x1) + ", " + Te(y.y1) + ") \u2014 (" + Te(y.x2) + ", " + Te(y.y2) + ") ", 1), g(I, { size: "x-small", color: y.enabled ? "success" : "grey", variant: "flat" }, { default: he(() => [Oe(Te(y.enabled ? "Active" : "Paused"), 1)]), _: 2 }, 1032, ["color"])]), S("div", Vw, Te(y.multiplier) + "x \xB7 " + Te((y.x2 - y.x1 + 1) * (y.y2 - y.y1 + 1)) + " base cells ", 1), S("div", Iw, [g(b, { size: "x-small", variant: "tonal", onClick: (C) => r(y) }, { default: he(() => [Oe(Te(y.enabled ? "Pause" : "Resume"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "tonal", onClick: (C) => s(y) }, { default: he(() => [Oe(" Grid " + Te(y.showGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "tonal", onClick: (C) => u(y) }, { default: he(() => [Oe(" Base " + Te(y.showBaseGrid ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "tonal", onClick: (C) => c(y) }, { default: he(() => [Oe(" Border " + Te(y.showBorder ? "On" : "Off"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "tonal", color: "error", onClick: (C) => m.$emit("remove-region", y.id) }, { default: he(() => [...h[1] || (h[1] = [Oe(" Delete ", -1)])]), _: 1 }, 8, ["onClick"])]), S("div", Pw, [S("div", Tw, [h[2] || (h[2] = S("span", { class: "text-caption text-medium-emphasis" }, "Resolution", -1)), S("span", Aw, Te(y.multiplier) + "x", 1)]), g(V, { "model-value": y.multiplier, min: Ke(ar), max: Ke(lr), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => f(y, C) }, null, 8, ["model-value", "min", "max", "onUpdate:modelValue"])]), S("div", Dw, [S("div", Mw, [h[3] || (h[3] = S("span", { class: "text-caption text-medium-emphasis" }, "Tick rate", -1)), S("span", Ew, Te(v(y.tickMultiplier ?? 1)), 1)]), g(V, { "model-value": y.tickMultiplier ?? 1, min: 1, max: Ke(Mf), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3", "onUpdate:modelValue": (C) => d(y, C) }, null, 8, ["model-value", "max", "onUpdate:modelValue"])])]), _: 2 }, 1024))), 128)), e.regions.length === 0 ? (He(), tt("div", Bw, " No hi-res regions. ")) : Zt("", true)]), e.regions.length > 0 ? (He(), zt(b, { key: 2, class: "mt-2", size: "small", color: "error", variant: "text", onClick: h[0] || (h[0] = (y) => m.$emit("clear-regions")) }, { default: he(() => [...h[4] || (h[4] = [Oe(" Clear All ", -1)])]), _: 1 })) : Zt("", true)]);
  };
} }), Rw = ja($w, [["__scopeId", "data-v-7b5a643b"]]), Fw = { class: "text-tab" }, Lw = { key: 0, class: "text-caption mt-1", style: { opacity: "0.7" } }, Ow = { class: "d-flex align-center ga-2" }, Nw = { class: "text-list" }, Hw = { class: "text-info" }, zw = { class: "text-coords" }, Ww = { class: "text-actions" }, jw = { key: 0, class: "text-empty" }, Uw = un({ __name: "GridTextTab", props: { blocks: {} }, emits: ["add-text", "update-text", "remove-text", "clear-text", "text-tool-change"], setup(e, { emit: t }) {
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
  function p(m) {
    a("update-text", { ...m, enabled: !m.enabled, updatedAt: Date.now() });
  }
  return (m, h) => {
    const b = Ae("v-btn"), w = Ae("v-text-field"), I = Ae("v-select"), V = Ae("v-col"), k = Ae("v-row"), y = Ae("v-divider");
    return He(), tt("div", Fw, [h[7] || (h[7] = S("p", { class: "text-caption text-medium-emphasis mb-2" }, " Click & drag on the grid to set position and width ", -1)), g(b, { color: l.value ? "primary" : void 0, variant: l.value ? "flat" : "tonal", disabled: !c.value && !l.value, size: "small", block: "", onClick: f }, { default: he(() => [Oe(Te(l.value ? "Drawing \u2014 click & drag on grid" : "Place Text Block"), 1)]), _: 1 }, 8, ["color", "variant", "disabled"]), u.value.length >= Ke(zi) ? (He(), tt("div", Lw, " Max " + Te(Ke(zi)) + " blocks reached. ", 1)) : Zt("", true), g(w, { modelValue: o.value, "onUpdate:modelValue": h[0] || (h[0] = (C) => o.value = C), label: "Font (CSS)", density: "compact", "hide-details": "", class: "mt-3" }, null, 8, ["modelValue"]), g(k, { dense: "", class: "mt-2", align: "center" }, { default: he(() => [g(V, { cols: "8" }, { default: he(() => [g(I, { modelValue: i.value, "onUpdate:modelValue": h[1] || (h[1] = (C) => i.value = C), items: s, "item-title": "title", "item-value": "value", label: "Render Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(V, { cols: "4" }, { default: he(() => [S("div", Ow, [h[4] || (h[4] = S("label", { class: "text-caption", style: { "white-space": "nowrap" } }, "Ink", -1)), lt(S("input", { "onUpdate:modelValue": h[2] || (h[2] = (C) => r.value = C), type: "color", class: "color-swatch" }, null, 512), [[Tr, r.value]])])]), _: 1 })]), _: 1 }), g(y, { class: "my-3" }), S("div", Nw, [(He(true), tt(be, null, va(u.value, (C) => (He(), tt("div", { key: C.id, class: "text-row" }, [S("div", Hw, [S("div", null, "#" + Te(v(C)) + ' \xB7 "' + Te(C.text) + '" \xB7 ' + Te(C.renderMode), 1), S("div", zw, [S("span", { class: "color-dot", style: me({ background: C.color || Ke(Kl) }) }, null, 4), Oe(" cell (" + Te(C.cellX) + "," + Te(C.cellY) + ") w=" + Te(C.cellsWide), 1)])]), S("div", Ww, [g(b, { size: "x-small", variant: "text", onClick: (x) => p(C) }, { default: he(() => [Oe(Te(C.enabled ? "Disable" : "Enable"), 1)]), _: 2 }, 1032, ["onClick"]), g(b, { size: "x-small", variant: "text", color: "error", onClick: (x) => a("remove-text", C.id) }, { default: he(() => [...h[5] || (h[5] = [Oe("Delete", -1)])]), _: 1 }, 8, ["onClick"])])]))), 128)), u.value.length === 0 ? (He(), tt("div", jw, "No text blocks.")) : Zt("", true)]), g(b, { class: "mt-3", size: "small", color: "error", variant: "text", disabled: u.value.length === 0, onClick: h[3] || (h[3] = (C) => a("clear-text")) }, { default: he(() => [...h[6] || (h[6] = [Oe(" Clear All ", -1)])]), _: 1 }, 8, ["disabled"])]);
  };
} }), Gw = ja(Uw, [["__scopeId", "data-v-e8d4e84a"]]), Yw = { class: "hires-text-tab" }, Kw = { class: "d-flex align-center ga-2" }, Xw = { class: "mt-3" }, qw = { class: "d-flex align-center justify-space-between" }, Zw = { class: "text-caption text-medium-emphasis" }, Jw = { class: "d-flex align-center gap-2 flex-wrap" }, Qw = un({ __name: "GridHiResTextTab", emits: ["hires-text-tool-change"], setup(e, { emit: t }) {
  const n = t, a = O(false), l = O(Ho), o = O("cells"), i = O(Kl), r = O(nr), s = O(true), u = O(true), c = O(true), d = [{ title: "Cells (frozen)", value: "cells" }, { title: "SDF (visual)", value: "sdf" }, { title: "Both", value: "both" }];
  function f() {
    return { enabled: a.value, font: l.value, renderMode: o.value, color: i.value, multiplier: r.value, showGrid: s.value, showBaseGrid: u.value, showBorder: c.value };
  }
  function v() {
    a.value = !a.value, n("hires-text-tool-change", f());
  }
  return se([l, o, i, r, s, u, c], () => {
    a.value && n("hires-text-tool-change", f());
  }), (p, m) => {
    const h = Ae("v-btn"), b = Ae("v-text-field"), w = Ae("v-select"), I = Ae("v-col"), V = Ae("v-row"), k = Ae("v-slider"), y = Ae("v-divider"), C = Ae("v-checkbox");
    return He(), tt("div", Yw, [m[9] || (m[9] = S("p", { class: "text-caption text-medium-emphasis mb-2" }, " Hi-res region with auto-fit text. Draw a region, type text (or leave empty for hi-res only). ", -1)), g(h, { color: a.value ? "primary" : void 0, variant: a.value ? "flat" : "tonal", size: "small", block: "", onClick: v }, { default: he(() => [Oe(Te(a.value ? "Drawing \u2014 click & drag on grid" : "Draw Hi-Res Text Region"), 1)]), _: 1 }, 8, ["color", "variant"]), g(b, { modelValue: l.value, "onUpdate:modelValue": m[0] || (m[0] = (x) => l.value = x), label: "Font (CSS)", density: "compact", "hide-details": "", class: "mt-3" }, null, 8, ["modelValue"]), g(V, { dense: "", class: "mt-2", align: "center" }, { default: he(() => [g(I, { cols: "8" }, { default: he(() => [g(w, { modelValue: o.value, "onUpdate:modelValue": m[1] || (m[1] = (x) => o.value = x), items: d, "item-title": "title", "item-value": "value", label: "Render Mode", density: "compact", "hide-details": "" }, null, 8, ["modelValue"])]), _: 1 }), g(I, { cols: "4" }, { default: he(() => [S("div", Kw, [m[7] || (m[7] = S("label", { class: "text-caption", style: { "white-space": "nowrap" } }, "Ink", -1)), lt(S("input", { "onUpdate:modelValue": m[2] || (m[2] = (x) => i.value = x), type: "color", class: "color-swatch" }, null, 512), [[Tr, i.value]])])]), _: 1 })]), _: 1 }), S("div", Xw, [S("div", qw, [m[8] || (m[8] = S("span", { class: "text-caption text-medium-emphasis" }, "Resolution", -1)), S("span", Zw, Te(r.value) + "x", 1)]), g(k, { modelValue: r.value, "onUpdate:modelValue": m[3] || (m[3] = (x) => r.value = x), min: Ke(ar), max: Ke(lr), step: 1, density: "compact", "hide-details": "", "thumb-size": "14", "track-size": "3" }, null, 8, ["modelValue", "min", "max"])]), g(y, { class: "my-3" }), m[10] || (m[10] = S("div", { class: "text-caption text-medium-emphasis mb-2" }, "Region defaults", -1)), S("div", Jw, [g(C, { modelValue: s.value, "onUpdate:modelValue": m[4] || (m[4] = (x) => s.value = x), label: "Grid", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"]), g(C, { modelValue: u.value, "onUpdate:modelValue": m[5] || (m[5] = (x) => u.value = x), label: "Base grid", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"]), g(C, { modelValue: c.value, "onUpdate:modelValue": m[6] || (m[6] = (x) => c.value = x), label: "Border", density: "compact", "hide-details": "", class: "flex-grow-0" }, null, 8, ["modelValue"])])]);
  };
} }), e0 = ja(Qw, [["__scopeId", "data-v-48e46341"]]), t0 = un({ __name: "GridBlankZonePanel", props: { zones: {}, previewRect: {}, decals: {}, hiresRegions: {}, textBlocks: {} }, emits: ["add-zone", "update-zone", "remove-zone", "clear-zones", "tool-change", "draft-change", "add-decal", "update-decal", "remove-decal", "clear-decals", "decal-tool-change", "add-hires-region", "update-hires-region", "remove-hires-region", "clear-hires-regions", "hires-tool-change", "add-text", "update-text", "remove-text", "clear-text", "text-tool-change", "hires-text-tool-change"], setup(e) {
  const t = O("zones"), n = O(false);
  return (a, l) => {
    const o = Ae("v-btn"), i = Ae("v-card-title"), r = Ae("v-tab"), s = Ae("v-tabs"), u = Ae("v-tabs-window-item"), c = Ae("v-tabs-window"), d = Ae("v-card-text"), f = Ae("v-card");
    return He(), tt("aside", { class: ne(["zone-panel", { "is-collapsed": n.value }]), "data-grid-ignore-click": "true" }, [n.value ? (He(), zt(o, { key: 1, class: "zone-expand-btn", size: "small", color: "primary", variant: "tonal", onClick: l[25] || (l[25] = (v) => n.value = false) }, { default: he(() => [...l[33] || (l[33] = [Oe(" Grid Tools ", -1)])]), _: 1 })) : (He(), zt(f, { key: 0, elevation: "6", rounded: "lg", class: "zone-card" }, { default: he(() => [g(i, { class: "zone-title" }, { default: he(() => [l[27] || (l[27] = S("span", { class: "text-subtitle-1" }, "Grid Tools", -1)), g(o, { size: "x-small", variant: "text", onClick: l[0] || (l[0] = (v) => n.value = true) }, { default: he(() => [...l[26] || (l[26] = [Oe("Collapse", -1)])]), _: 1 })]), _: 1 }), g(s, { modelValue: t.value, "onUpdate:modelValue": l[1] || (l[1] = (v) => t.value = v), density: "compact", grow: "" }, { default: he(() => [g(r, { value: "zones" }, { default: he(() => [...l[28] || (l[28] = [Oe("Zones", -1)])]), _: 1 }), g(r, { value: "decals" }, { default: he(() => [...l[29] || (l[29] = [Oe("Decals", -1)])]), _: 1 }), g(r, { value: "hires" }, { default: he(() => [...l[30] || (l[30] = [Oe("Hi-Res", -1)])]), _: 1 }), g(r, { value: "text" }, { default: he(() => [...l[31] || (l[31] = [Oe("Text", -1)])]), _: 1 }), g(r, { value: "hires-text" }, { default: he(() => [...l[32] || (l[32] = [Oe("Hi-Res Text", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"]), g(d, { class: "pt-2" }, { default: he(() => [g(c, { modelValue: t.value, "onUpdate:modelValue": l[24] || (l[24] = (v) => t.value = v) }, { default: he(() => [g(u, { value: "zones" }, { default: he(() => [g(fw, { zones: e.zones, "preview-rect": e.previewRect, onAddZone: l[2] || (l[2] = (v) => a.$emit("add-zone", v)), onUpdateZone: l[3] || (l[3] = (v) => a.$emit("update-zone", v)), onRemoveZone: l[4] || (l[4] = (v) => a.$emit("remove-zone", v)), onClearZones: l[5] || (l[5] = (v) => a.$emit("clear-zones")), onToolChange: l[6] || (l[6] = (v) => a.$emit("tool-change", v)), onDraftChange: l[7] || (l[7] = (v) => a.$emit("draft-change", v)) }, null, 8, ["zones", "preview-rect"])]), _: 1 }), g(u, { value: "decals" }, { default: he(() => [g(pw, { decals: e.decals, onAddDecal: l[8] || (l[8] = (v) => a.$emit("add-decal", v)), onUpdateDecal: l[9] || (l[9] = (v) => a.$emit("update-decal", v)), onRemoveDecal: l[10] || (l[10] = (v) => a.$emit("remove-decal", v)), onClearDecals: l[11] || (l[11] = (v) => a.$emit("clear-decals")), onDecalToolChange: l[12] || (l[12] = (v) => a.$emit("decal-tool-change", v)) }, null, 8, ["decals"])]), _: 1 }), g(u, { value: "hires" }, { default: he(() => [g(Rw, { regions: e.hiresRegions, onAddRegion: l[13] || (l[13] = (v) => a.$emit("add-hires-region", v)), onUpdateRegion: l[14] || (l[14] = (v) => a.$emit("update-hires-region", v)), onRemoveRegion: l[15] || (l[15] = (v) => a.$emit("remove-hires-region", v)), onClearRegions: l[16] || (l[16] = (v) => a.$emit("clear-hires-regions")), onHiresToolChange: l[17] || (l[17] = (v) => a.$emit("hires-tool-change", v)) }, null, 8, ["regions"])]), _: 1 }), g(u, { value: "text" }, { default: he(() => [g(Gw, { blocks: e.textBlocks, onAddText: l[18] || (l[18] = (v) => a.$emit("add-text", v)), onUpdateText: l[19] || (l[19] = (v) => a.$emit("update-text", v)), onRemoveText: l[20] || (l[20] = (v) => a.$emit("remove-text", v)), onClearText: l[21] || (l[21] = (v) => a.$emit("clear-text")), onTextToolChange: l[22] || (l[22] = (v) => a.$emit("text-tool-change", v)) }, null, 8, ["blocks"])]), _: 1 }), g(u, { value: "hires-text" }, { default: he(() => [g(e0, { onHiresTextToolChange: l[23] || (l[23] = (v) => a.$emit("hires-text-tool-change", v)) })]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }))], 2);
  };
} }), n0 = ja(t0, [["__scopeId", "data-v-751e1730"]]), Ef = 5, Bf = 19, $f = 10, a0 = un({ __name: "AppBackground", setup(e) {
  const t = Pg("AppBackground"), n = O(null), a = O(0), l = Jk(), o = tw(l.gridInfo, a), i = nw(), r = aw(o), s = lw(o);
  function u(te) {
    return { ...te, edge: { ...te.edge } };
  }
  function c(te) {
    return te.map(u);
  }
  function d(te) {
    return { ...te, pattern: { ...te.pattern }, tint: [...te.tint] };
  }
  function f(te) {
    return te.map(d);
  }
  const v = Sk({ onSetZones: (te) => l.post({ type: "set_zones", zones: c(te) }), onAddZone: (te) => l.post({ type: "add_zone", zone: u(te) }), onUpdateZone: (te) => l.post({ type: "update_zone", zone: u(te) }), onRemoveZone: (te) => l.post({ type: "remove_zone", id: te }), onClearZones: () => l.post({ type: "clear_zones" }) }), p = Bk({ onSetDecals: (te) => l.post({ type: "set_decals", decals: f(te) }), onAddDecal: (te) => l.post({ type: "add_decal", decal: d(te) }), onUpdateDecal: (te) => l.post({ type: "update_decal", decal: d(te) }), onRemoveDecal: (te) => l.post({ type: "remove_decal", id: te }), onClearDecals: () => l.post({ type: "clear_decals" }) }), m = zk({ onAddRegion: (te) => l.post({ type: "add_hires", region: { ...te } }), onUpdateRegion: (te) => l.post({ type: "update_hires", region: { ...te } }), onRemoveRegion: (te) => l.post({ type: "remove_hires", id: te }), onClearRegions: () => l.post({ type: "clear_hires" }) }), h = Zk({ onSetBlocks: (te) => l.post({ type: "set_text", blocks: te }), onAddBlock: (te) => l.post({ type: "add_text", block: te }), onUpdateBlock: (te) => l.post({ type: "update_text", block: te }), onRemoveBlock: (te) => l.post({ type: "remove_text", id: te }), onClearBlocks: () => l.post({ type: "clear_text" }) }), b = O(false), w = O(false), I = O(false), V = O(false), k = O(false), y = O(false), C = O({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), x = O(Ho), T = O("cells"), P = O(Kl), M = O(false), D = O(Ho), E = O("cells"), A = O(Kl), R = O(nr), G = O(true), N = O(true), Y = O(true);
  function H(te) {
    const Ee = Date.now(), Ze = C.value;
    return { id: crypto.randomUUID(), x1: te.x1, y1: te.y1, x2: te.x2, y2: te.y2, mode: Ze.mode, edge: { ...Ze.edge }, enabled: true, createdAt: Ee, updatedAt: Ee };
  }
  function F(te) {
    const Ee = Date.now();
    return { id: crypto.randomUUID(), x1: te.x1, y1: te.y1, x2: te.x2, y2: te.y2, pattern: { kind: "solid", coverage: 1, solidR: 0.49, solidG: 0.3, solidB: 1 }, tint: [1, 1, 1, 1], blendMode: "alpha", suppressCells: false, enabled: true, createdAt: Ee, updatedAt: Ee };
  }
  function Z(te, Ee, Ze) {
    const cn = "Hgyjpq\xD1|", et = new OffscreenCanvas(Ze, 1).getContext("2d");
    et.font = Ee;
    const dn = et.measureText(cn);
    let _a2;
    const fo = dn.fontBoundingBoxAscent, us = dn.fontBoundingBoxDescent;
    if (typeof fo == "number" && typeof us == "number" && isFinite(fo) && isFinite(us)) _a2 = fo + us;
    else {
      const cs = dn.actualBoundingBoxAscent, ds = dn.actualBoundingBoxDescent;
      if (typeof cs == "number" && typeof ds == "number" && isFinite(cs) && isFinite(ds)) _a2 = cs + ds;
      else {
        const Ed = Ee.match(/(\d+(?:\.\d+)?)px/);
        _a2 = Ed ? parseFloat(Ed[1]) * 1.2 : 16;
      }
    }
    const Fp = et.measureText(te), Lp = Math.max(1, Fp.width);
    return Math.max(1, Math.ceil(Ze * (_a2 / Lp) * 1.1));
  }
  function W() {
    return M.value ? U : L;
  }
  function L() {
    if (!r.anchor || !r.state.value.value.trim()) {
      r.cleanup();
      return;
    }
    const te = Date.now();
    h.addBlock({ id: crypto.randomUUID(), text: r.state.value.value.trim(), font: x.value, cellX: r.anchor.cx, cellY: r.anchor.cy, cellsWide: r.cellsWide, renderMode: T.value, color: P.value, enabled: true, createdAt: te, updatedAt: te }), r.cleanup();
  }
  function U() {
    if (!r.anchor) {
      r.cleanup();
      return;
    }
    const te = Date.now(), Ee = r.anchor, Ze = r.cellsWide, cn = Math.max(1, r.cellsHigh), Tn = r.state.value.value.trim(), et = Tn ? Z(Tn, D.value, Ze) : cn;
    m.addRegion({ id: crypto.randomUUID(), x1: Ee.cx, y1: Ee.cy, x2: Ee.cx + Ze - 1, y2: Ee.cy + et - 1, multiplier: R.value, enabled: true, showGrid: G.value, showBaseGrid: N.value, showBorder: Y.value, tickMultiplier: 1, createdAt: te, updatedAt: te }), Tn && h.addBlock({ id: crypto.randomUUID(), text: Tn, font: D.value, cellX: Ee.cx, cellY: Ee.cy, cellsWide: Ze, renderMode: E.value, color: A.value, enabled: true, createdAt: te, updatedAt: te }), r.cleanup();
  }
  s.register("zone", { isEnabled: () => b.value, priority: 1, snapMajor: () => w.value, onCommit(te) {
    v.addZone(H(te));
  } }), s.register("decal", { isEnabled: () => I.value, priority: 2, dragMode: "paint", snapMajor: () => V.value, onCommit(te) {
    p.addDecal(F(te));
  } }), s.register("hires", { isEnabled: () => k.value, priority: 3, onCommit(te) {
    const Ee = Date.now();
    m.addRegion({ id: crypto.randomUUID(), x1: te.x1, y1: te.y1, x2: te.x2, y2: te.y2, multiplier: nr, enabled: true, showGrid: true, showBaseGrid: true, showBorder: true, tickMultiplier: 1, createdAt: Ee, updatedAt: Ee });
  } }), s.register("text", { isEnabled: () => y.value, priority: 4, onCommit(te) {
    const Ee = Math.max($f, te.x2 - te.x1 + 1);
    return r.show({ cx: te.x1, cy: te.y1 }, Ee, 0, o.makeSnapshot()), false;
  } }), s.register("hires-text", { isEnabled: () => M.value, priority: 5, onCommit(te) {
    const Ee = Math.max($f, te.x2 - te.x1 + 1), Ze = Math.max(1, te.y2 - te.y1 + 1);
    return r.show({ cx: te.x1, cy: te.y1 }, Ee, Ze, o.makeSnapshot()), false;
  } });
  function ie(te) {
    v.addZone(te);
  }
  function Se(te) {
    v.updateZone(te);
  }
  function K(te) {
    v.removeZone(te);
  }
  function fe() {
    v.clearZones();
  }
  function De(te) {
    p.addDecal(te);
  }
  function _e(te) {
    p.updateDecal(te);
  }
  function ye(te) {
    p.removeDecal(te);
  }
  function $() {
    p.clearDecals();
  }
  function z(te) {
    m.addRegion(te);
  }
  function Q(te) {
    m.updateRegion(te);
  }
  function ce(te) {
    m.removeRegion(te);
  }
  function oe() {
    m.clearRegions();
  }
  function ue(te) {
    h.addBlock(te);
  }
  function pe(te) {
    h.updateBlock(te);
  }
  function de(te) {
    h.removeBlock(te);
  }
  function X() {
    h.clearBlocks();
  }
  function le(te) {
    C.value = te;
  }
  function Ve(te) {
    b.value = te.enabled, w.value = te.snapMajor, te.enabled || s.cancelActiveDrag("zone");
  }
  function J(te) {
    I.value = te.enabled, V.value = te.snapMajor, te.enabled || s.cancelActiveDrag("decal");
  }
  function ge(te) {
    k.value = te.enabled, te.enabled || s.cancelActiveDrag("hires");
  }
  function ke(te) {
    y.value = te.enabled, x.value = te.font, T.value = te.renderMode, P.value = te.color, te.enabled || (s.cancelActiveDrag("text"), r.cleanup());
  }
  function we(te) {
    M.value = te.enabled, D.value = te.font, E.value = te.renderMode, A.value = te.color, R.value = te.multiplier, G.value = te.showGrid, N.value = te.showBaseGrid, Y.value = te.showBorder, te.enabled || (s.cancelActiveDrag("hires-text"), r.cleanup());
  }
  function Pe(te) {
    if (s.anyToolEnabled() || o.isInteractiveTarget(te.target)) return;
    const Ee = o.makeSnapshot();
    if (!Ee) return;
    const Ze = Tg(te.clientX, te.clientY, Ee), cn = ik(Ze, Ee);
    t.debug("Click \u2192", te.clientX, te.clientY, "\u2192 cell", cn.cx, cn.cy), l.post({ type: "toggle_cell", cx: cn.cx, cy: cn.cy, scrollCanvasPx: Ee.scrollCanvasPx });
  }
  function $e(te) {
    r.state.visible.value && !r.isInsideInput(te.target) && (M.value ? U() : r.state.value.value.trim() ? L() : r.cleanup());
  }
  let We = 0, Le = 0, ut = null, Qe = null, Gt = null;
  return It(() => {
    const te = n.value;
    if (!te) return;
    We = Math.round(window.innerWidth * devicePixelRatio), Le = Math.round(window.innerHeight * devicePixelRatio), te.width = We, te.height = Le;
    const Ee = te.transferControlToOffscreen(), Ze = _f(We, Bf, devicePixelRatio), cn = 0.8 * Ze * Ef / devicePixelRatio;
    document.documentElement.style.setProperty("--grid-margin", `${cn.toFixed(1)}px`), l.init(Ee, Ze), t.debug("Worker spawned, gridPitch", Ze.toFixed(2)), l.on("ready", (et) => {
      t.info(`${et.backend.toUpperCase()} renderer active`), l.post({ type: "set_zones", zones: c(v.zones.value) }), l.post({ type: "set_decals", decals: f(p.decals.value) }), m.regions.value.length > 0 && l.post({ type: "set_hires_regions", regions: m.regions.value.map((dn) => ({ ...dn })) }), h.blocks.value.length > 0 && l.post({ type: "set_text", blocks: Me(h.blocks.value).map((dn) => ({ ...Me(dn) })) });
    }), l.on("zones_state", (et) => v.syncFromWorker(et.zones)), l.on("zones_error", (et) => t.error("Zone update rejected:", et.message)), l.on("decals_state", (et) => p.syncFromWorker(et.decals)), l.on("decals_error", (et) => t.error("Decal update rejected:", et.message)), l.on("hires_state", (et) => m.syncFromWorker(et.regions)), l.on("text_state", (et) => h.syncFromWorker(et.blocks)), l.on("text_error", (et) => t.error("Text update rejected:", et.message)), l.on("error", (et) => {
      et.phase === "gpu-init" ? t.debug(`GPU unavailable (${et.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${et.phase}]:`, et.message);
    }), document.addEventListener("click", Pe), document.addEventListener("pointerdown", $e), Gt = s.attachListeners(), ut = document.querySelector(".v-main");
    let Tn = -1;
    i.start(() => {
      l.post({ type: "frame" });
      const et = (ut == null ? void 0 : ut.scrollTop) || window.scrollY;
      et !== Tn && (Tn = et, a.value = et * devicePixelRatio, l.post({ type: "scroll", scrollY: a.value }), r.updateStyle());
    }), Qe = new ResizeObserver(([et]) => {
      const dn = Math.round(et.contentRect.width * devicePixelRatio), _a2 = Math.round(et.contentRect.height * devicePixelRatio);
      if (dn === We && _a2 === Le) return;
      We = dn, Le = _a2;
      const fo = _f(dn, Bf, devicePixelRatio);
      document.documentElement.style.setProperty("--grid-margin", `${(0.8 * fo * Ef / devicePixelRatio).toFixed(1)}px`), l.post({ type: "resize", width: dn, height: _a2 });
    }), Qe.observe(te);
  }), Vr(() => {
    r.state.visible.value && r.cleanup(), i.stop(), Qe == null ? void 0 : Qe.disconnect(), document.removeEventListener("click", Pe), document.removeEventListener("pointerdown", $e), Gt == null ? void 0 : Gt(), l.terminate();
  }), (te, Ee) => (He(), tt(be, null, [S("canvas", { ref_key: "canvasRef", ref: n, class: "app-bg" }, null, 512), Ke(s).previewStyle.value ? (He(), tt("div", { key: 0, class: "zone-preview-overlay", style: me(Ke(s).previewStyle.value) }, null, 4)) : Zt("", true), Ke(r).state.visible.value ? lt((He(), tt("textarea", { key: 1, ref: "textInput.state.inputRef", "onUpdate:modelValue": Ee[0] || (Ee[0] = (Ze) => Ke(r).state.value.value = Ze), class: "text-placement-input", style: me(Ke(r).state.style.value), placeholder: "Type text...", onKeydown: Ee[1] || (Ee[1] = (Ze) => Ke(r).onKeydown(Ze, W())) }, null, 36)), [[Tr, Ke(r).state.value.value]]) : Zt("", true), g(n0, { zones: Ke(v).zones.value, "preview-rect": Ke(s).previewRect.value, decals: Ke(p).decals.value, "hires-regions": Ke(m).regions.value, "text-blocks": Ke(h).blocks.value, onAddZone: ie, onUpdateZone: Se, onRemoveZone: K, onClearZones: fe, onToolChange: Ve, onDraftChange: le, onAddDecal: De, onUpdateDecal: _e, onRemoveDecal: ye, onClearDecals: $, onDecalToolChange: J, onAddHiresRegion: z, onUpdateHiresRegion: Q, onRemoveHiresRegion: ce, onClearHiresRegions: oe, onHiresToolChange: ge, onAddText: ue, onUpdateText: pe, onRemoveText: de, onClearText: X, onTextToolChange: ke, onHiresTextToolChange: we }, null, 8, ["zones", "preview-rect", "decals", "hires-regions", "text-blocks"])], 64));
} }), l0 = ja(a0, [["__scopeId", "data-v-9f9bd407"]]), o0 = un({ __name: "AppHeader", setup(e) {
  const t = [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" }];
  return (n, a) => {
    const l = Ae("v-app-bar-title"), o = Ae("v-btn"), i = Ae("v-app-bar");
    return He(), zt(i, { elevation: "0", color: "background", border: "b" }, { append: he(() => [(He(), tt(be, null, va(t, (r) => g(o, { key: r.label, href: r.href, variant: "text", size: "default", class: "nav-ink" }, { default: he(() => [Oe(Te(r.label), 1)]), _: 2 }, 1032, ["href"])), 64))]), default: he(() => [g(l, null, { default: he(() => [...a[0] || (a[0] = [S("span", { class: "title-ink font-weight-bold" }, "Anjin Byte (Work in progress...)", -1)])]), _: 1 })]), _: 1 });
  };
} }), i0 = { class: "text-medium-emphasis text-caption" }, r0 = un({ __name: "AppFooter", setup(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return (n, a) => {
    const l = Ae("v-footer");
    return He(), zt(l, { color: "background", border: "t", class: "justify-center" }, { default: he(() => [S("span", i0, " \xA9 " + Te(Ke(t)) + " Taylor Hale. Built with Rust, WebAssembly, and Vue 3. ", 1)]), _: 1 });
  };
} }), s0 = {}, u0 = { id: "hero", class: "hero-section" };
function c0(e, t) {
  const n = Ae("v-btn"), a = Ae("v-container");
  return He(), tt("section", u0, [g(a, { class: "hero-container" }, { default: he(() => [t[2] || (t[2] = S("h1", { class: "text-h3 font-weight-bold text-white mb-2" }, "Taylor Hale", -1)), t[3] || (t[3] = S("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Systems Engineer \xB7 Rust \xB7 WebAssembly \xB7 TypeScript ", -1)), g(n, { color: "primary", href: "#projects", size: "large", variant: "elevated" }, { default: he(() => [...t[0] || (t[0] = [Oe(" View Projects ", -1)])]), _: 1 }), g(n, { class: "ml-3", href: "#contact", size: "large", variant: "outlined", color: "secondary" }, { default: he(() => [...t[1] || (t[1] = [Oe(" Contact ", -1)])]), _: 1 })]), _: 1 })]);
}
const d0 = ja(s0, [["render", c0], ["__scopeId", "data-v-bd3b897d"]]), f0 = { id: "about" }, v0 = { class: "d-flex flex-wrap ga-2" }, m0 = un({ __name: "AboutSection", setup(e) {
  const t = ["Rust", "WebAssembly", "TypeScript", "Vue 3", "Vite", "C++", "Python", "Linux", "OpenGL / WGPU", "Git"];
  return (n, a) => {
    const l = Ae("v-chip"), o = Ae("v-col"), i = Ae("v-row"), r = Ae("v-container");
    return He(), tt("section", f0, [g(r, { class: "py-16" }, { default: he(() => [g(i, { justify: "center" }, { default: he(() => [g(o, { cols: "12", md: "8" }, { default: he(() => [a[0] || (a[0] = S("h2", { class: "text-h4 font-weight-bold mb-6" }, "About", -1)), a[1] || (a[1] = S("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " I build high-performance systems with Rust and WebAssembly, bringing low-level computation to the web without sacrificing developer experience. I care about clean architecture, rigorous testing, and shipping things that actually work. ", -1)), S("div", v0, [(He(), tt(be, null, va(t, (s) => g(l, { key: s, color: "primary", variant: "tonal", size: "small" }, { default: he(() => [Oe(Te(s), 1)]), _: 2 }, 1024)), 64))])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }), g0 = { id: "projects" }, h0 = { class: "d-flex flex-wrap ga-1" }, y0 = un({ __name: "ProjectsSection", setup(e) {
  const t = [{ title: "Conway's Game of Life", description: "Classic cellular automaton implemented in Rust, compiled to WebAssembly, and rendered via the Canvas API. Cell state is read directly from WASM linear memory.", tags: ["Rust", "WebAssembly", "Canvas", "Vue 3"], href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }];
  return (n, a) => {
    const l = Ae("v-card-title"), o = Ae("v-card-text"), i = Ae("v-chip"), r = Ae("v-btn"), s = Ae("v-card-actions"), u = Ae("v-card"), c = Ae("v-col"), d = Ae("v-row"), f = Ae("v-container");
    return He(), tt("section", g0, [g(f, { class: "py-16" }, { default: he(() => [a[1] || (a[1] = S("h2", { class: "text-h4 font-weight-bold mb-8" }, "Projects", -1)), g(d, null, { default: he(() => [(He(), tt(be, null, va(t, (v) => g(c, { key: v.title, cols: "12", md: "6", lg: "4" }, { default: he(() => [g(u, { color: "surface", border: "", height: "100%", class: "d-flex flex-column" }, { default: he(() => [g(l, { class: "text-h6 pt-5 px-5" }, { default: he(() => [Oe(Te(v.title), 1)]), _: 2 }, 1024), g(o, { class: "text-medium-emphasis flex-grow-1 px-5" }, { default: he(() => [Oe(Te(v.description), 1)]), _: 2 }, 1024), g(o, { class: "pt-0 px-5" }, { default: he(() => [S("div", h0, [(He(true), tt(be, null, va(v.tags, (p) => (He(), zt(i, { key: p, size: "x-small", color: "secondary", variant: "tonal" }, { default: he(() => [Oe(Te(p), 1)]), _: 2 }, 1024))), 128))])]), _: 2 }, 1024), v.href ? (He(), zt(s, { key: 0, class: "px-5 pb-5" }, { default: he(() => [g(r, { href: v.href, target: "_blank", variant: "text", color: "primary", size: "small", "append-icon": "mdi-open-in-new" }, { default: he(() => [...a[0] || (a[0] = [Oe(" View on GitHub ", -1)])]), _: 1 }, 8, ["href"])]), _: 2 }, 1024)) : Zt("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)), 64))]), _: 1 })]), _: 1 })]);
  };
} }), b0 = { id: "contact" }, p0 = { class: "d-flex justify-center flex-wrap ga-3" }, S0 = un({ __name: "ContactSection", setup(e) {
  const t = [{ label: "GitHub", icon: "mdi-github", href: "https://github.com/Anjin-Byte", color: "white" }, { label: "Email", icon: "mdi-email-outline", href: "mailto:thalesarkanzen@gmail.com", color: "secondary" }];
  return (n, a) => {
    const l = Ae("v-btn"), o = Ae("v-container");
    return He(), tt("section", b0, [g(o, { class: "py-16 text-center" }, { default: he(() => [a[0] || (a[0] = S("h2", { class: "text-h4 font-weight-bold mb-4" }, "Get in Touch", -1)), a[1] || (a[1] = S("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Open to interesting problems. Reach out anytime. ", -1)), S("div", p0, [(He(), tt(be, null, va(t, (i) => g(l, { key: i.label, href: i.href, color: i.color, "prepend-icon": i.icon, variant: "outlined", target: "_blank", size: "large" }, { default: he(() => [Oe(Te(i.label), 1)]), _: 2 }, 1032, ["href", "color", "prepend-icon"])), 64))])]), _: 1 })]);
  };
} }), x0 = un({ __name: "App", setup(e) {
  return (t, n) => {
    const a = Ae("v-main"), l = Ae("v-app");
    return He(), zt(l, null, { default: he(() => [g(l0), g(o0), g(a, null, { default: he(() => [g(d0), g(m0), g(y0), g(S0)]), _: 1 }), g(r0)]), _: 1 });
  };
} });
function Og(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const at = typeof window < "u", xc = at && "IntersectionObserver" in window, k0 = at && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Rf = at && "EyeDropper" in window, kc = at && "matchMedia" in window && typeof window.matchMedia == "function", Yn = () => kc && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Ff(e, t, n) {
  w0(e, t), t.set(e, n);
}
function w0(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Lf(e, t, n) {
  return e.set(Ng(e, t), n), n;
}
function aa(e, t) {
  return e.get(Ng(e, t));
}
function Ng(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Hg(e, t, n) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null) return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function cl(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Hg(e, t.split("."), n));
}
function xt(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string") return cl(e, t, n);
  if (Array.isArray(t)) return Hg(e, t, n);
  if (typeof t != "function") return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, a) => t + a);
}
function ve(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function dl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function nu(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function wc(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const au = Object.freeze({ enter: "Enter", tab: "Tab", delete: "Delete", esc: "Escape", space: "Space", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", end: "End", home: "Home", del: "Delete", backspace: "Backspace", insert: "Insert", pageup: "PageUp", pagedown: "PageDown", shift: "Shift" });
function zg(e) {
  return Object.keys(e);
}
function tl(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function on(e, t) {
  const n = {};
  for (const a of t) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
  return n;
}
function lu(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e) t.some((i) => i instanceof RegExp ? i.test(o) : i === o) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function ze(e, t) {
  const n = { ...e };
  return t.forEach((a) => delete n[a]), n;
}
const Wg = /^on[^a-z]/, Cc = (e) => Wg.test(e), C0 = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], _0 = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function V0(e) {
  return e.isComposing && _0.includes(e.key);
}
function Jn(e) {
  const [t, n] = lu(e, [Wg]), a = ze(t, C0), [l, o] = lu(n, ["class", "style", "id", "inert", /^data-/]);
  return Object.assign(l, t), Object.assign(o, a), [l, o];
}
function ct(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function jg(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++) o[i] = arguments[i];
    clearTimeout(n), n = setTimeout(() => e(...o), Ke(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Of(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function Nf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Hf(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function I0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; ) n.push(e.substr(a, t)), a += t;
  return n;
}
function zf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t) return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; ) e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function Ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e) a[l] = e[l];
  for (const l in t) {
    const o = e[l], i = t[l];
    if (nu(o) && nu(i)) {
      a[l] = Ht(o, i, n);
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
function Ug(e) {
  return e.map((t) => t.type === be ? Ug(t.children) : t).flat();
}
function al() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (al.cache.has(e)) return al.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return al.cache.set(e, t), t;
}
al.cache = /* @__PURE__ */ new Map();
function Ll(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Ll(e, n)).flat(1);
  if (t.suspense) return Ll(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Ll(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return Ll(e, t.component.subTree).flat(1);
  }
  return [];
}
var Al = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap();
class Gg {
  constructor(t) {
    Ff(this, Al, []), Ff(this, qa, 0), this.size = t;
  }
  get isFull() {
    return aa(Al, this).length === this.size;
  }
  push(t) {
    aa(Al, this)[aa(qa, this)] = t, Lf(qa, this, (aa(qa, this) + 1) % this.size);
  }
  values() {
    return aa(Al, this).slice(aa(qa, this)).concat(aa(Al, this).slice(0, aa(qa, this)));
  }
  clear() {
    aa(Al, this).length = 0, Lf(qa, this, 0);
  }
}
function P0(e) {
  return "touches" in e ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } : { clientX: e.clientX, clientY: e.clientY };
}
function _c(e) {
  const t = Et({});
  mt(() => {
    const a = e();
    for (const l in a) t[l] = a[l];
  }, { flush: "sync" });
  const n = {};
  for (const a in t) n[a] = B(() => t[a]);
  return n;
}
function or(e, t) {
  return e.includes(t);
}
function Yg(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ft = () => [Function, Array];
function Wf(e, t) {
  return t = "on" + Zn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ci(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const l of e) l(...n);
  else typeof e == "function" && e(...n);
}
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let a;
  try {
    a = [...e.querySelectorAll(n)];
  } catch {
    return [];
  }
  return a.filter((l) => !l.closest("[inert]")).filter((l) => !!l.offsetParent || l.getClientRects().length > 0).filter((l) => {
    var _a2, _b2;
    return !((_a2 = l.parentElement) == null ? void 0 : _a2.closest("details:not([open])")) || l.tagName === "SUMMARY" && ((_b2 = l.parentElement) == null ? void 0 : _b2.tagName) === "DETAILS";
  });
}
function Kg(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? true)) && l < e.length && l >= 0);
  return a;
}
function ll(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = Ea(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const a = Kg(n, t);
    a ? a.focus() : ll(e, t === "next" ? "first" : "last");
  }
}
function So(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Er() {
}
function Xl(e, t) {
  if (!(at && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Br(e) {
  return e.some((t) => Oo(t) ? t.type === qt ? false : t.type !== be || Br(t.children) : true) ? e : null;
}
function Di(e, t, n) {
  return (e == null ? void 0 : e(t)) ?? (n == null ? void 0 : n(t));
}
function T0(e, t) {
  if (!at || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function A0(e, t) {
  const n = e.clientX, a = e.clientY, l = t.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return n >= o && n <= r && a >= i && a <= s;
}
function zo() {
  const e = re(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => wc(e.value) }), t;
}
function ql(e) {
  const t = e.key.length === 1, n = !e.ctrlKey && !e.metaKey && !e.altKey;
  return t && n;
}
function Fa(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function ir(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function D0(e, t, n) {
  const a = new RegExp(`[\\d\\-${ir(n)}]`), l = e.split("").filter((i) => a.test(i)).filter((i, r, s) => r === 0 && /[-]/.test(i) || i === n && r === s.indexOf(i) || /\d/.test(i)).join("");
  if (t === 0) return l.split(n)[0];
  const o = new RegExp(`${ir(n)}\\d`);
  if (t !== null && o.test(l)) {
    const i = l.split(n);
    return [i[0], i[1].substring(0, t)].join(n);
  }
  return l;
}
function M0(e) {
  const t = {};
  for (const n in e) t[sn(n)] = e[n];
  return t;
}
function E0(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [a, l] = n;
    return t.includes(a) ? !!l : l !== void 0;
  }));
}
function jf(e) {
  const t = (n) => Array.isArray(n) ? n.map((a) => t(a)) : kt(n) || Ma(n) || oi(n) ? t(Me(n)) : nu(n) ? Object.keys(n).reduce((a, l) => (a[l] = t(n[l]), a), {}) : n;
  return t(e);
}
const Xg = ["top", "bottom"], B0 = ["start", "end", "left", "right"];
function ou(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = or(Xg, n) ? "start" : or(B0, n) ? "top" : "center"), { side: iu(n, t), align: iu(a, t) };
}
function iu(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Ts(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function As(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Uf(e) {
  return { side: e.align, align: e.side };
}
function Gf(e) {
  return or(Xg, e.side) ? "y" : "x";
}
class Vn {
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
function Yf(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function qg(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new Vn({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new Vn(e);
}
function $0(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new Vn({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new Vn({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new Vn(e);
}
function Vc(e) {
  const t = new Vn(e), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d(")) l = a.slice(9, -1).split(/, /), o = Number(l[0]), i = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix(")) l = a.slice(7, -1).split(/, /), o = Number(l[0]), i = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else return new Vn(t);
    const u = n.transformOrigin, c = t.x - r - (1 - o) * parseFloat(u), d = t.y - s - (1 - i) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = i ? t.height / i : e.offsetHeight + 1;
    return new Vn({ x: c, y: d, width: f, height: v });
  } else return new Vn(t);
}
function ia(e, t, n) {
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
function R0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Cc(n)) {
      const a = Yg(n), l = Wi.get(e);
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
function F0(e, t) {
  Object.keys(t).forEach((n) => {
    if (Cc(n)) {
      const a = Yg(n), l = Wi.get(e);
      l == null ? void 0 : l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else e.removeAttribute(n);
  });
}
const Dl = 2.4, Kf = 0.2126729, Xf = 0.7151522, qf = 0.072175, L0 = 0.55, O0 = 0.58, N0 = 0.57, H0 = 0.62, Mi = 0.03, Zf = 1.45, z0 = 5e-4, W0 = 1.25, j0 = 1.25, Jf = 0.078, Qf = 12.82051282051282, Ei = 0.06, ev = 1e-3;
function tv(e, t) {
  const n = (e.r / 255) ** Dl, a = (e.g / 255) ** Dl, l = (e.b / 255) ** Dl, o = (t.r / 255) ** Dl, i = (t.g / 255) ** Dl, r = (t.b / 255) ** Dl;
  let s = n * Kf + a * Xf + l * qf, u = o * Kf + i * Xf + r * qf;
  if (s <= Mi && (s += (Mi - s) ** Zf), u <= Mi && (u += (Mi - u) ** Zf), Math.abs(u - s) < z0) return 0;
  let c;
  if (u > s) {
    const d = (u ** L0 - s ** O0) * W0;
    c = d < ev ? 0 : d < Jf ? d - d * Qf * Ei : d - Ei;
  } else {
    const d = (u ** H0 - s ** N0) * j0;
    c = d > -ev ? 0 : d > -Jf ? d - d * Qf * Ei : d + Ei;
  }
  return c * 100;
}
const rr = 0.20689655172413793, U0 = (e) => e > rr ** 3 ? Math.cbrt(e) : e / (3 * rr ** 2) + 4 / 29, G0 = (e) => e > rr ? e ** 3 : 3 * rr ** 2 * (e - 4 / 29);
function Zg(e) {
  const t = U0, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function Jg(e) {
  const t = G0, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Y0 = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], K0 = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, X0 = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], q0 = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Qg(e) {
  const t = Array(3), n = K0, a = Y0;
  for (let l = 0; l < 3; ++l) t[l] = Math.round(nt(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function Ic(e) {
  let { r: t, g: n, b: a } = e;
  const l = [0, 0, 0], o = q0, i = X0;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r) l[r] = i[r][0] * t + i[r][1] * n + i[r][2] * a;
  return l;
}
function ru(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Z0(e) {
  return ru(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const nv = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, J0 = { rgb: (e, t, n, a) => ({ r: e, g: t, b: n, a }), rgba: (e, t, n, a) => ({ r: e, g: t, b: n, a }), hsl: (e, t, n, a) => av({ h: e, s: t, l: n, a }), hsla: (e, t, n, a) => av({ h: e, s: t, l: n, a }), hsv: (e, t, n, a) => Kn({ h: e, s: t, v: n, a }), hsva: (e, t, n, a) => Kn({ h: e, s: t, v: n, a }) };
function yn(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && nv.test(e)) {
    const { groups: t } = e.match(nv), { fn: n, values: a } = t, l = a.split(/,\s*|\s*\/\s*|\s+/).map((o, i) => o.endsWith("%") || i > 0 && i < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
    return J0[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), ah(t);
  } else if (typeof e == "object") {
    if (tl(e, ["r", "g", "b"])) return e;
    if (tl(e, ["h", "s", "l"])) return Kn(Pc(e));
    if (tl(e, ["h", "s", "v"])) return Kn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Kn(e) {
  const { h: t, s: n, v: a, a: l } = e, o = (r) => {
    const s = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return { r: i[0], g: i[1], b: i[2], a: l };
}
function av(e) {
  return Kn(Pc(e));
}
function di(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), o = Math.min(t, n, a);
  let i = 0;
  l !== o && (l === t ? i = 60 * (0 + (n - a) / (l - o)) : l === n ? i = 60 * (2 + (a - t) / (l - o)) : l === a && (i = 60 * (4 + (t - n) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return { h: s[0], s: s[1], v: s[2], a: e.a };
}
function su(e) {
  const { h: t, s: n, v: a, a: l } = e, o = a - a * n / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s: i, l: o, a: l };
}
function Pc(e) {
  const { h: t, s: n, l: a, a: l } = e, o = a + n * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return { h: t, s: i, v: o, a: l };
}
function eh(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function th(e) {
  return eh(Kn(e));
}
function Bi(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function nh(e) {
  let { r: t, g: n, b: a, a: l } = e;
  return `#${[Bi(t), Bi(n), Bi(a), l !== void 0 ? Bi(Math.round(l * 255)) : ""].join("")}`;
}
function ah(e) {
  e = e1(e);
  let [t, n, a, l] = I0(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, { r: t, g: n, b: a, a: l };
}
function Q0(e) {
  const t = ah(e);
  return di(t);
}
function lh(e) {
  return nh(Kn(e));
}
function e1(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Nf(Nf(e, 6), 8, "F")), e;
}
function t1(e, t) {
  const n = Zg(Ic(e));
  return n[0] = n[0] + t * 10, Qg(Jg(n));
}
function n1(e, t) {
  const n = Zg(Ic(e));
  return n[0] = n[0] - t * 10, Qg(Jg(n));
}
function uu(e) {
  const t = yn(e);
  return Ic(t)[1];
}
function a1(e, t) {
  const n = uu(e), a = uu(t), l = Math.max(n, a), o = Math.min(n, a);
  return (l + 0.05) / (o + 0.05);
}
function oh(e) {
  const t = Math.abs(tv(yn(0), yn(e)));
  return Math.abs(tv(yn(16777215), yn(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function j(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : { type: e[l] };
    return n && l in n ? a[l] = { ...i, default: n[l] } : a[l] = i, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const xe = j({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function wt(e, t) {
  const n = si();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Qn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = wt(e).type;
  return al((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function l1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const Zl = Symbol.for("vuetify:defaults");
function o1(e) {
  return O(e);
}
function Tc() {
  const e = Ge(Zl);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function yt(e, t) {
  const n = Tc(), a = O(e), l = _(() => {
    if (Ke(t == null ? void 0 : t.disabled)) return n.value;
    const i = Ke(t == null ? void 0 : t.scoped), r = Ke(t == null ? void 0 : t.reset), s = Ke(t == null ? void 0 : t.root);
    if (a.value == null && !(i || r || s)) return n.value;
    let u = Ht(a.value, { prev: n.value });
    if (i) return u;
    if (r || s) {
      const c = Number(r || 1 / 0);
      for (let d = 0; d <= c && !(!u || !("prev" in u)); d++) u = u.prev;
      return u && typeof s == "string" && s in u && (u = Ht(Ht(u, { prev: u }), u[s])), u;
    }
    return u.prev ? Ht(u.prev, u) : u;
  });
  return ft(Zl, l), l;
}
function i1(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[al(t)] < "u");
}
function r1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tc();
  const a = wt("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const l = _(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), o = new Proxy(e, { get(s, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(s, u);
    if (u === "class" || u === "style") return [(_a2 = l.value) == null ? void 0 : _a2[u], c].filter((v) => v != null);
    if (i1(a.vnode, u)) return c;
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
    const s = l1(Zl, a);
    ft(Zl, _(() => i.value ? Ht((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
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
      const o = Tc();
      if (!o.value) return e._setup(a, l);
      const { props: i, provideSubDefaults: r } = r1(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? en : un)(t);
}
function s1(e, t) {
  return t.props = e, t;
}
function pa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({ name: n ?? Zn(sn(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...xe() }, setup(a, l) {
    let { slots: o } = l;
    return () => {
      var _a2;
      return ba(a.tag, { class: [e, a.class], style: a.style }, (_a2 = o.default) == null ? void 0 : _a2.call(o));
    };
  } });
}
function u1(e, t, n, a) {
  if (!n || Fa(e) || Fa(t)) return;
  const l = n.get(e);
  if (l) l.set(t, a);
  else {
    const o = /* @__PURE__ */ new WeakMap();
    o.set(t, a), n.set(e, o);
  }
}
function c1(e, t, n) {
  var _a2, _b2;
  if (!n || Fa(e) || Fa(t)) return null;
  const a = (_a2 = n.get(e)) == null ? void 0 : _a2.get(t);
  if (typeof a == "boolean") return a;
  const l = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof l == "boolean" ? l : null;
}
function Bt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const a = Object.keys(e);
  if (a.length !== Object.keys(t).length) return false;
  const l = c1(e, t, n);
  return l || (u1(e, t, n, true), a.every((o) => Bt(e[o], t[o], n)));
}
function ih(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Wo = "cubic-bezier(0.4, 0, 0.2, 1)", lv = "cubic-bezier(0.0, 0, 0.2, 1)", ov = "cubic-bezier(0.4, 0, 1, 1)", d1 = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function bn(e, t, n) {
  return Object.keys(e).filter((a) => Cc(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (o) => ci(e[l], o, n(o)), a), {});
}
function $r(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? f1(e) : Ac(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function sr(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Ac(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function Ac(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, a = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || a;
}
function f1(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function v1(e) {
  let { depth: t, isLast: n, isLastGroup: a, leafLinks: l, separateRoots: o, parentIndentLines: i, variant: r } = e;
  const s = n && (!a || o || t > 1);
  return !i || !t ? { leaf: void 0, node: void 0, children: i, footer: i && (!s || r === "simple") ? [...i, o ? "none" : "line"] : ["none"] } : r === "simple" ? { leaf: [...i, "line"], node: [...i, "line"], children: [...i, "line"], footer: [...i, "line", "line"] } : { leaf: [...i, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []], node: [...i, s ? "last-leaf" : "leaf"], children: [...i, s ? "none" : "line"], footer: [...i, s ? "none" : "line"] };
}
function m1(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function ae(e) {
  const t = wt("useRender");
  t.render = e;
}
function g1(e, t) {
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
const Ie = [String, Function, Object, Array], cu = Symbol.for("vuetify:icons"), Rr = j({ icon: { type: Ie }, tag: { type: [String, Object, Function], required: true } }, "icon"), du = ee()({ name: "VComponentIcon", props: Rr(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const a = e.icon;
    return g(e.tag, null, { default: () => {
      var _a2;
      return [e.icon ? g(a, null, null) : (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  };
} }), Dc = en({ name: "VSvgIcon", inheritAttrs: false, props: Rr(), setup(e, t) {
  let { attrs: n } = t;
  return () => g(e.tag, q(n, { style: null }), { default: () => [S("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? S("path", { d: a[0], "fill-opacity": a[1] }, null) : S("path", { d: a }, null)) : S("path", { d: e.icon }, null)])] });
} }), h1 = en({ name: "VLigatureIcon", props: Rr(), setup(e) {
  return () => g(e.tag, null, { default: () => [e.icon] });
} }), Mc = en({ name: "VClassIcon", props: Rr(), setup(e) {
  return () => g(e.tag, { class: ne(e.icon) }, null);
} }), y1 = (e) => {
  const t = Ge(cu);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: _(() => {
    var _a2;
    const a = st(e);
    if (!a) return { component: du };
    let l = a;
    if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (_a2 = t.aliases) == null ? void 0 : _a2[l.slice(1)])), Array.isArray(l)) return { component: Dc, icon: l };
    if (typeof l != "string") return { component: du, icon: l };
    const o = Object.keys(t.sets).find((s) => typeof l == "string" && l.startsWith(`${s}:`)), i = o ? l.slice(o.length + 1) : l;
    return { component: t.sets[o ?? t.defaultSet].component, icon: i };
  }) };
}, b1 = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, p1 = { component: (e) => ba(Mc, { ...e, class: "mdi" }) };
function S1() {
  return { svg: { component: Dc }, class: { component: Mc } };
}
function x1(e) {
  const t = S1(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = p1), Ht({ defaultSet: n, sets: t, aliases: { ...b1, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function Lt(e, t) {
  let n;
  function a() {
    n = Ul(), n.run(() => t.length ? t(() => {
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
  const o = wt("useProxiedModel"), i = O(e[t] !== void 0 ? e[t] : n), r = al(t), u = _(r !== t ? () => {
    var _a2, _b2, _c2, _d2;
    return e[t], !!((((_a2 = o.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) || ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(r))) && (((_c2 = o.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = o.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${r}`))));
  } : () => {
    var _a2, _b2;
    return e[t], !!(((_a2 = o.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) && ((_b2 = o.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  Lt(() => !u.value, () => {
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
const k1 = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, iv = "$vuetify.", rv = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[Number(a)])), rh = (e, t, n) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) o[i - 1] = arguments[i];
  if (!a.startsWith(iv)) return rv(a, o);
  const r = a.replace(iv, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = cl(s, r, null);
  return c || (`${a}${e.value}`, c = cl(u, r, null)), c || (c = a), typeof c != "string" && (c = a), rv(c, o);
};
function Ec(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function sh(e, t) {
  return Ec(e, t)(0.1).includes(",") ? "," : ".";
}
function Ds(e, t, n) {
  const a = Ce(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, se(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function uh(e) {
  return (t) => {
    const n = Ds(t, "locale", e.current), a = Ds(t, "fallback", e.fallback), l = Ds(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: a, messages: l, decimalSeparator: B(() => sh(n, a)), t: rh(n, a, l), n: Ec(n, a), provide: uh({ current: n, fallback: a, messages: l }) };
  };
}
function w1(e) {
  const t = re((e == null ? void 0 : e.locale) ?? "en"), n = re((e == null ? void 0 : e.fallback) ?? "en"), a = O({ en: k1, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: a, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? sh(t, n)), t: rh(t, n, a), n: Ec(t, n), provide: uh({ current: t, fallback: n, messages: a }) };
}
const Jl = Symbol.for("vuetify:locale");
function C1(e) {
  return e.name != null;
}
function _1(e) {
  const t = (e == null ? void 0 : e.adapter) && C1(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : w1(e), n = I1(t, e);
  return { ...t, ...n };
}
function ot() {
  const e = Ge(Jl);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ch(e) {
  const t = Ge(Jl);
  if (!t) throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = P1(n, t.rtl, e), l = { ...n, ...a };
  return ft(Jl, l), l;
}
function V1() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function I1(e, t) {
  const n = O((t == null ? void 0 : t.rtl) ?? V1()), a = _(() => n.value[e.current.value] ?? false);
  return { isRtl: a, rtl: n, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function P1(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? false);
  return { isRtl: a, rtl: t, rtlClasses: B(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`) };
}
function Pt() {
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
function T1(e, t, n) {
  var _a2;
  const a = [];
  let l = [];
  const o = dh(e), i = fh(e), r = n ?? ((_a2 = fi(t)) == null ? void 0 : _a2.firstDay) ?? 0, s = (o.getDay() - r + 7) % 7, u = (i.getDay() - r + 7) % 7;
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
  var _a2;
  let a = (n ?? ((_a2 = fi(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(a) || (a = 0);
  const l = new Date(e);
  for (; l.getDay() !== a; ) l.setDate(l.getDate() - 1);
  return l;
}
function A1(e, t) {
  var _a2;
  const n = new Date(e), a = ((((_a2 = fi(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== a; ) n.setDate(n.getDate() + 1);
  return n;
}
function dh(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function fh(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function D1(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const M1 = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function vh(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (M1.test(e)) return D1(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const sv = new Date(2e3, 0, 2);
function E1(e, t, n) {
  var _a2;
  const a = t ?? ((_a2 = fi(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return jn(7).map((l) => {
    const o = new Date(sv);
    return o.setDate(sv.getDate() + a + l), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(o);
  });
}
function B1(e, t, n, a) {
  const l = vh(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[t];
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
function $1(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = Hf(String(n.getMonth() + 1), 2, "0"), o = Hf(String(n.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function R1(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function F1(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function L1(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function ol(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function O1(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function N1(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function jo(e) {
  return e.getFullYear();
}
function H1(e) {
  return e.getMonth();
}
function z1(e, t, n, a) {
  const l = fi(t), o = n ?? (l == null ? void 0 : l.firstDay) ?? 0, i = (l == null ? void 0 : l.firstWeekSize) ?? 1;
  return a !== void 0 ? W1(e, t, o, a) : j1(e, t, o, i);
}
function W1(e, t, n, a) {
  const l = (7 + a - n) % 7, o = Do(e, t, n), i = ol(o, 6);
  function r(f) {
    return (7 + new Date(f, 0, 1).getDay() - n) % 7;
  }
  let s = jo(o);
  s < jo(i) && r(s + 1) <= l && s++;
  const u = new Date(s, 0, 1), c = r(s), d = c <= l ? ol(u, -c) : ol(u, 7 - c);
  return 1 + cr(Bc(o), Uo(d), "weeks");
}
function j1(e, t, n, a) {
  const l = Do(e, t, n), o = ol(Do(e, t, n), 6);
  function i(d) {
    const f = new Date(d, 0, 1);
    return 7 - cr(f, Do(f, t, n), "days");
  }
  let r = jo(l);
  r < jo(o) && i(r + 1) >= a && r++;
  const s = new Date(r, 0, 1), u = i(r), c = u >= a ? ol(s, u - 7) : ol(s, u);
  return 1 + cr(Bc(l), Uo(c), "weeks");
}
function U1(e) {
  return e.getDate();
}
function G1(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Y1(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function K1(e) {
  return e.getHours();
}
function X1(e) {
  return e.getMinutes();
}
function q1(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Z1(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function J1(e, t) {
  return ur(e, t[0]) && tC(e, t[1]);
}
function Q1(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function ur(e, t) {
  return e.getTime() > t.getTime();
}
function eC(e, t) {
  return ur(Uo(e), Uo(t));
}
function tC(e, t) {
  return e.getTime() < t.getTime();
}
function uv(e, t) {
  return e.getTime() === t.getTime();
}
function nC(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function aC(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function lC(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function cr(e, t, n) {
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
function oC(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function iC(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function rC(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function sC(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function uC(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function Uo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Bc(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class cC {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return vh(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return $1(this, t);
  }
  parseISO(t) {
    return R1(t);
  }
  addMinutes(t, n) {
    return F1(t, n);
  }
  addHours(t, n) {
    return L1(t, n);
  }
  addDays(t, n) {
    return ol(t, n);
  }
  addWeeks(t, n) {
    return O1(t, n);
  }
  addMonths(t, n) {
    return N1(t, n);
  }
  getWeekArray(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return T1(t, this.locale, a);
  }
  startOfWeek(t, n) {
    const a = n !== void 0 ? Number(n) : void 0;
    return Do(t, this.locale, a);
  }
  endOfWeek(t) {
    return A1(t, this.locale);
  }
  startOfMonth(t) {
    return dh(t);
  }
  endOfMonth(t) {
    return fh(t);
  }
  format(t, n) {
    return B1(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return uv(t, n);
  }
  isValid(t) {
    return Q1(t);
  }
  isWithinRange(t, n) {
    return J1(t, n);
  }
  isAfter(t, n) {
    return ur(t, n);
  }
  isAfterDay(t, n) {
    return eC(t, n);
  }
  isBefore(t, n) {
    return !ur(t, n) && !uv(t, n);
  }
  isSameDay(t, n) {
    return nC(t, n);
  }
  isSameMonth(t, n) {
    return aC(t, n);
  }
  isSameYear(t, n) {
    return lC(t, n);
  }
  setMinutes(t, n) {
    return iC(t, n);
  }
  setHours(t, n) {
    return oC(t, n);
  }
  setMonth(t, n) {
    return rC(t, n);
  }
  setDate(t, n) {
    return sC(t, n);
  }
  setYear(t, n) {
    return uC(t, n);
  }
  getDiff(t, n, a) {
    return cr(t, n, a);
  }
  getWeekdays(t, n) {
    const a = t !== void 0 ? Number(t) : void 0;
    return E1(this.locale, a, n);
  }
  getYear(t) {
    return jo(t);
  }
  getMonth(t) {
    return H1(t);
  }
  getWeek(t, n, a) {
    const l = n !== void 0 ? Number(n) : void 0, o = a !== void 0 ? Number(a) : void 0;
    return z1(t, this.locale, l, o);
  }
  getDate(t) {
    return U1(t);
  }
  getNextMonth(t) {
    return G1(t);
  }
  getPreviousMonth(t) {
    return Y1(t);
  }
  getHours(t) {
    return K1(t);
  }
  getMinutes(t) {
    return X1(t);
  }
  startOfDay(t) {
    return Uo(t);
  }
  endOfDay(t) {
    return Bc(t);
  }
  startOfYear(t) {
    return q1(t);
  }
  endOfYear(t) {
    return Z1(t);
  }
}
const mh = Symbol.for("vuetify:date-options"), cv = Symbol.for("vuetify:date-adapter");
function dC(e, t) {
  const n = Ht({ adapter: cC, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: hh(n, t) };
}
function fC(e, t, n) {
  const a = gh(e, t, n), l = [t];
  for (let o = 1; o < a; o++) {
    const i = e.addDays(t, o);
    l.push(i);
  }
  return n && l.push(e.endOfDay(n)), l;
}
function gh(e, t, n) {
  const a = [`${e.toISO(n ?? t).split("T")[0]}T00:00:00Z`, `${e.toISO(t).split("T")[0]}T00:00:00Z`];
  return typeof e.date() == "string" ? e.getDiff(a[0], a[1], "days") : e.getDiff(e.date(a[0]), e.date(a[1]), "days");
}
function hh(e, t) {
  const n = Et(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return se(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function pl() {
  const e = Ge(mh);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const t = ot();
  return hh(e, t);
}
const Fr = ["sm", "md", "lg", "xl", "xxl"], fu = Symbol.for("vuetify:display"), dv = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, vC = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dv;
  return Ht(dv, e);
};
function fv(e) {
  return at && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function vv(e) {
  return at && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function mv(e) {
  const t = at && !e ? window.navigator.userAgent : "ssr";
  function n(p) {
    return !!t.match(p);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), o = n(/cordova/i), i = n(/electron/i), r = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), d = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return { android: a, ios: l, cordova: o, electron: i, chrome: r, edge: s, firefox: u, opera: c, win: d, mac: f, linux: v, touch: k0, ssr: t === "ssr" };
}
function mC(e, t) {
  const { thresholds: n, mobileBreakpoint: a } = vC(e), l = re(vv(t)), o = re(mv(t)), i = Et({}), r = re(fv(t));
  function s() {
    l.value = vv(), r.value = fv();
  }
  function u() {
    s(), o.value = mv();
  }
  return mt(() => {
    const c = r.value < n.sm, d = r.value < n.md && !c, f = r.value < n.lg && !(d || c), v = r.value < n.xl && !(f || d || c), p = r.value < n.xxl && !(v || f || d || c), m = r.value >= n.xxl, h = c ? "xs" : d ? "sm" : f ? "md" : v ? "lg" : p ? "xl" : "xxl", b = typeof a == "number" ? a : n[a], w = r.value < b;
    i.xs = c, i.sm = d, i.md = f, i.lg = v, i.xl = p, i.xxl = m, i.smAndUp = !c, i.mdAndUp = !(c || d), i.lgAndUp = !(c || d || f), i.xlAndUp = !(c || d || f || v), i.smAndDown = !(f || v || p || m), i.mdAndDown = !(v || p || m), i.lgAndDown = !(p || m), i.xlAndDown = !m, i.name = h, i.height = l.value, i.width = r.value, i.mobile = w, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = n;
  }), at && (window.addEventListener("resize", s, { passive: true }), St(() => {
    window.removeEventListener("resize", s);
  }, true)), { ...ao(i), update: u, ssr: !!t };
}
const Sl = j({ mobile: { type: Boolean, default: false }, mobileBreakpoint: [Number, String] }, "display");
function kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  const n = Ge(fu);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const a = _(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: a.value } : {}), mobile: a };
}
const yh = Symbol.for("vuetify:goto");
function bh() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: d1 };
}
function gC(e) {
  return $c(e) ?? (document.scrollingElement || document.body);
}
function $c(e) {
  return typeof e == "string" ? document.querySelector(e) : wc(e);
}
function Ms(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let a = $c(e), l = 0;
  for (; a; ) l += t ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function hC(e, t) {
  return { rtl: t.isRtl, options: Ht(bh(), e) };
}
async function gv(e, t, n, a) {
  const l = n ? "scrollLeft" : "scrollTop", o = Ht((a == null ? void 0 : a.options) ?? bh(), t), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : $c(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : gC(o.container), u = Yn() ? o.patterns.instant : typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let c;
  if (typeof r == "number") c = Ms(r, n, i);
  else if (c = Ms(r, n, i) - Ms(s, n, i), o.layout) {
    const p = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    p && (c -= parseInt(p, 10));
  }
  c += o.offset, c = bC(s, c, !!i, !!n);
  const d = s[l] ?? 0;
  if (c === d) return Promise.resolve(c);
  const f = performance.now();
  return new Promise((v) => requestAnimationFrame(function p(m) {
    const b = (m - f) / o.duration, w = Math.floor(d + (c - d) * u(nt(b, 0, 1)));
    if (s[l] = w, b >= 1 && Math.abs(w - s[l]) < 10) return v(c);
    if (b > 2) return v(s[l]);
    requestAnimationFrame(p);
  }));
}
function yC() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = Ge(yh), { isRtl: n } = Pt();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: B(() => t.rtl.value || n.value) };
  async function l(o, i) {
    return gv(o, Ht(e, i), false, a);
  }
  return l.horizontal = async (o, i) => gv(o, Ht(e, i), true, a), l;
}
function bC(e, t, n, a) {
  const { scrollWidth: l, scrollHeight: o } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, u;
  return a ? n ? (s = -(l - i), u = 0) : (s = 0, u = l - i) : (s = 0, u = o + -r), nt(t, s, u);
}
const Go = Symbol.for("vuetify:theme"), Ye = j({ theme: String }, "theme");
function hv() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function pC() {
  var _a2, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hv();
  const t = hv();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [a, l] of Object.entries(e.themes ?? {})) {
    const o = l.dark || a === "dark" ? (_a2 = t.themes) == null ? void 0 : _a2.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[a] = Ht(o, l);
  }
  return Ht(t, { ...e, themes: n });
}
function Za(e, t, n, a) {
  e.push(`${wC(t, a)} {
`, ...n.map((l) => `  ${l};
`), `}
`);
}
function yv(e, t) {
  const n = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [o, i] of Object.entries(e.colors)) {
    const r = yn(i);
    l.push(`--${t}theme-${o}: ${r.r},${r.g},${r.b}`), o.startsWith("on-") || l.push(`--${t}theme-${o}-overlay-multiplier: ${uu(i) > 0.18 ? n : a}`);
  }
  for (const [o, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? yn(i) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${t}${o}: ${s ?? i}`);
  }
  return l;
}
function SC(e, t, n) {
  const a = {};
  if (n) for (const l of ["lighten", "darken"]) {
    const o = l === "lighten" ? t1 : n1;
    for (const i of jn(n[l], 1)) a[`${e}-${l}-${i}`] = nh(o(yn(t), i));
  }
  return a;
}
function xC(e, t) {
  if (!t) return {};
  let n = {};
  for (const a of t.colors) {
    const l = e[a];
    l && (n = { ...n, ...SC(a, l, t) });
  }
  return n;
}
function kC(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const a = `on-${n}`, l = yn(e[n]);
    t[a] = oh(l);
  }
  return t;
}
function wC(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function CC(e, t, n) {
  const a = _C(e, t);
  a && (a.innerHTML = n);
}
function _C(e, t) {
  if (!at) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function VC(e) {
  const t = pC(e), n = re(t.defaultTheme), a = O(t.themes), l = re("light"), o = _({ get() {
    return n.value === "system" ? l.value : n.value;
  }, set(b) {
    n.value = b;
  } }), i = _(() => {
    const b = {};
    for (const [w, I] of Object.entries(a.value)) {
      const V = { ...I.colors, ...xC(I.colors, t.variations) };
      b[w] = { ...I, colors: { ...V, ...kC(V) } };
    }
    return b;
  }), r = B(() => i.value[o.value]), s = B(() => n.value === "system"), u = _(() => {
    var _a2;
    const b = [], w = t.unimportant ? "" : " !important", I = t.scoped ? t.prefix : "";
    ((_a2 = r.value) == null ? void 0 : _a2.dark) && Za(b, ":root", ["color-scheme: dark"], t.scope), Za(b, ":root", yv(r.value, t.prefix), t.scope);
    for (const [k, y] of Object.entries(i.value)) Za(b, `.${t.prefix}theme--${k}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...yv(y, t.prefix)], t.scope);
    if (t.utilities) {
      const k = [], y = [], C = new Set(Object.values(i.value).flatMap((x) => Object.keys(x.colors)));
      for (const x of C) x.startsWith("on-") ? Za(y, `.${x}`, [`color: rgb(var(--${t.prefix}theme-${x}))${w}`], t.scope) : (Za(k, `.${I}bg-${x}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${x}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${x}))${w}`, `color: rgb(var(--${t.prefix}theme-on-${x}))${w}`], t.scope), Za(y, `.${I}text-${x}`, [`color: rgb(var(--${t.prefix}theme-${x}))${w}`], t.scope), Za(y, `.${I}border-${x}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${x})`], t.scope));
      t.layers ? b.push(`@layer background {
`, ...k.map((x) => `  ${x}`), `}
`, `@layer foreground {
`, ...y.map((x) => `  ${x}`), `}
`) : b.push(...k, ...y);
    }
    let V = b.map((k, y) => y === 0 ? k : `    ${k}`).join("");
    return t.layers && (V = `@layer vuetify.theme {
` + b.map((k) => `  ${k}`).join("") + `
}`), V;
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${o.value}`), d = B(() => Object.keys(i.value));
  if (kc) {
    let w = function() {
      l.value = b.matches ? "dark" : "light";
    };
    const b = window.matchMedia("(prefers-color-scheme: dark)");
    w(), b.addEventListener("change", w, { passive: true }), dm() && St(() => {
      b.removeEventListener("change", w);
    });
  }
  function f(b) {
    if (t.isDisabled) return;
    const w = b._context.provides.usehead;
    if (w) {
      let I = function() {
        return { style: [{ textContent: u.value, id: t.stylesheetId, nonce: t.cspNonce || false }] };
      };
      if (w.push) {
        const V = w.push(I);
        at && se(u, () => {
          V.patch(I);
        });
      } else at ? (w.addHeadObjs(B(I)), mt(() => w.updateDOM())) : w.addHeadObjs(I());
    } else {
      let I = function() {
        CC(t.stylesheetId, t.cspNonce, u.value);
      };
      at ? se(u, I, { immediate: true }) : I();
    }
  }
  function v(b) {
    b !== "system" && !d.value.includes(b) || (o.value = b);
  }
  function p() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d.value;
    const w = b.indexOf(o.value), I = w === -1 ? 0 : (w + 1) % b.length;
    v(b[I]);
  }
  function m() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    p(b);
  }
  const h = new Proxy(o, { get(b, w) {
    return Reflect.get(b, w);
  }, set(b, w, I) {
    return w === "value" && Og(`theme.global.name.value = ${I}`, `theme.change('${I}')`), Reflect.set(b, w, I);
  } });
  return { install: f, change: v, cycle: p, toggle: m, isDisabled: t.isDisabled, isSystem: s, name: o, themes: a, current: r, computedThemes: i, prefix: t.prefix, themeClasses: c, styles: u, global: { name: h, current: r } };
}
function qe(e) {
  wt("provideTheme");
  const t = Ge(Go, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), o = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return ft(Go, o), o;
}
function Lr() {
  wt("useTheme");
  const e = Ge(Go, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = zo(), a = O();
  if (at) {
    const l = new ResizeObserver((o) => {
      e == null ? void 0 : e(o, l), o.length && (t === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    jt(() => {
      l.disconnect();
    }), se(() => n.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: sl(a) };
}
const Yo = Symbol.for("vuetify:layout"), ph = Symbol.for("vuetify:layout-item"), bv = 1e3, Sh = j({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), xl = j({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function xh() {
  const e = Ge(Yo);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return { getLayoutItem: e.getLayoutItem, mainRect: e.mainRect, mainStyles: e.mainStyles };
}
function kl(e) {
  const t = Ge(Yo);
  if (!t) throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${Rt()}`, a = wt("useLayoutItem");
  ft(ph, { id: n });
  const l = re(false);
  uc(() => l.value = true), Um(() => l.value = false);
  const { layoutItemStyles: o, layoutItemScrimStyles: i } = t.register(a, { ...e, active: _(() => l.value ? false : e.active.value), id: n });
  return jt(() => t.unregister(n)), { layoutItemStyles: o, layoutRect: t.layoutRect, layoutItemScrimStyles: i };
}
const IC = (e, t, n, a) => {
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
function kh(e) {
  const t = Ge(Yo, null), n = _(() => t ? t.rootZIndex.value - 100 : bv), a = O([]), l = Et(/* @__PURE__ */ new Map()), o = Et(/* @__PURE__ */ new Map()), i = Et(/* @__PURE__ */ new Map()), r = Et(/* @__PURE__ */ new Map()), s = Et(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = In(), d = _(() => {
    const y = /* @__PURE__ */ new Map(), C = e.overlaps ?? [];
    for (const x of C.filter((T) => T.includes(":"))) {
      const [T, P] = x.split(":");
      if (!a.value.includes(T) || !a.value.includes(P)) continue;
      const M = l.get(T), D = l.get(P), E = o.get(T), A = o.get(P);
      !M || !D || !E || !A || (y.set(P, { position: M.value, amount: parseInt(E.value, 10) }), y.set(T, { position: D.value, amount: -parseInt(A.value, 10) }));
    }
    return y;
  }), f = _(() => {
    const y = [...new Set([...i.values()].map((x) => x.value))].sort((x, T) => x - T), C = [];
    for (const x of y) {
      const T = a.value.filter((P) => {
        var _a2;
        return ((_a2 = i.get(P)) == null ? void 0 : _a2.value) === x;
      });
      C.push(...T);
    }
    return IC(C, l, o, r);
  }), v = _(() => !Array.from(s.values()).some((y) => y.value)), p = _(() => f.value[f.value.length - 1].layer), m = B(() => ({ "--v-layout-left": ve(p.value.left), "--v-layout-right": ve(p.value.right), "--v-layout-top": ve(p.value.top), "--v-layout-bottom": ve(p.value.bottom), ...v.value ? void 0 : { transition: "none" } })), h = _(() => f.value.slice(1).map((y, C) => {
    let { id: x } = y;
    const { layer: T } = f.value[C], P = o.get(x), M = l.get(x);
    return { id: x, ...T, size: Number(P.value), position: M.value };
  })), b = (y) => h.value.find((C) => C.id === y), w = wt("createLayout"), I = re(false);
  return It(() => {
    I.value = true;
  }), ft(Yo, { register: (y, C) => {
    let { id: x, order: T, position: P, layoutSize: M, elementSize: D, active: E, disableTransitions: A, absolute: R } = C;
    i.set(x, T), l.set(x, P), o.set(x, M), r.set(x, E), A && s.set(x, A);
    const N = Ll(ph, w == null ? void 0 : w.vnode).indexOf(y);
    N > -1 ? a.value.splice(N, 0, x) : a.value.push(x);
    const Y = _(() => h.value.findIndex((W) => W.id === x)), H = _(() => n.value + f.value.length * 2 - Y.value * 2), F = _(() => {
      const W = P.value === "left" || P.value === "right", L = P.value === "right", U = P.value === "bottom", ie = D.value ?? M.value, Se = ie === 0 ? "%" : "px", K = { [P.value]: 0, zIndex: H.value, transform: `translate${W ? "X" : "Y"}(${(E.value ? 0 : -(ie === 0 ? 100 : ie)) * (L || U ? -1 : 1)}${Se})`, position: R.value || n.value !== bv ? "absolute" : "fixed", ...v.value ? void 0 : { transition: "none" } };
      if (!I.value) return K;
      const fe = h.value[Y.value], De = d.value.get(x);
      return De && (fe[De.position] += De.amount), { ...K, height: W ? `calc(100% - ${fe.top}px - ${fe.bottom}px)` : D.value ? `${D.value}px` : void 0, left: L ? void 0 : `${fe.left}px`, right: L ? `${fe.right}px` : void 0, top: P.value !== "bottom" ? `${fe.top}px` : void 0, bottom: P.value !== "top" ? `${fe.bottom}px` : void 0, width: W ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${fe.left}px - ${fe.right}px)` };
    }), Z = _(() => ({ zIndex: H.value - 1 }));
    return { layoutItemStyles: F, layoutItemScrimStyles: Z, zIndex: H };
  }, unregister: (y) => {
    i.delete(y), l.delete(y), o.delete(y), r.delete(y), s.delete(y), a.value = a.value.filter((C) => C !== y);
  }, mainRect: p, mainStyles: m, getLayoutItem: b, items: h, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: b, items: h, layoutRect: c, layoutRef: u };
}
const PC = { control: "ctrl", command: "cmd", option: "alt", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", esc: "escape", spacebar: " ", space: " ", return: "enter", del: "delete", minus: "-", hyphen: "-" };
function pv(e) {
  const t = e.toLowerCase();
  return PC[t] || t;
}
function wh(e) {
  const t = { keys: [], separators: [] };
  if (!e || e.length > 1 && ["+", "/", "_"].some((u) => e.startsWith(u)) && !["++", "//", "__"].some((u) => e.startsWith(u)) || e.includes("++") || e.includes("__") || e === "+" || e === "_" || e.length > 1 && (e.endsWith("+") || e.endsWith("_")) && e.at(-2) !== e.at(-1) || e === "++" || e === "--" || e === "__") return t;
  const l = [], o = [];
  let i = "";
  const r = (u) => {
    i && (u && o.push(u), l.push(pv(i)), i = "");
  };
  for (let u = 0; u < e.length; u++) {
    const c = e[u], d = e[u + 1];
    ["+", "/", "_", "-"].includes(c) ? c === d ? (r(c), l.push(c), u++) : ["+", "/", "_"].includes(c) ? r(c) : i += c : i += c;
  }
  return r(), l.some((u) => u.length > 1 && u.includes("-") && u !== "--") ? t : l.length === 0 && e ? { keys: [pv(e)], separators: o } : { keys: l, separators: o };
}
function TC(e) {
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
  return i.every((u) => wh(u).keys.length > 0) ? i : [];
}
function Ch() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, a = Ht(t, n), { aliases: l = {}, components: o = {}, directives: i = {} } = a, r = Ul();
  return r.run(() => {
    const s = o1(a.defaults), u = mC(a.display, a.ssr), c = VC(a.theme), d = x1(a.icons), f = _1(a.locale), v = dC(a.date, f), p = hC(a.goTo, f);
    function m(b) {
      for (const I in i) b.directive(I, i[I]);
      for (const I in o) b.component(I, o[I]);
      for (const I in l) b.component(I, en({ ...l[I], name: I, aliasName: l[I].name }));
      const w = Ul();
      if (w.run(() => {
        c.install(b);
      }), b.onUnmount(() => w.stop()), b.provide(Zl, s), b.provide(fu, u), b.provide(Go, c), b.provide(cu, d), b.provide(Jl, f), b.provide(mh, v.options), b.provide(cv, v.instance), b.provide(yh, p), at && a.ssr) if (b.$nuxt) b.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: I } = b;
        b.mount = function() {
          const V = I(...arguments);
          return Be(() => u.update()), b.mount = I, V;
        };
      }
      b.mixin({ computed: { $vuetify() {
        return Et({ defaults: Ml.call(this, Zl), display: Ml.call(this, fu), theme: Ml.call(this, Go), icons: Ml.call(this, cu), locale: Ml.call(this, Jl), date: Ml.call(this, cv) });
      } } });
    }
    function h() {
      r.stop();
    }
    return { install: m, unmount: h, defaults: s, display: u, theme: c, icons: d, locale: f, date: v, goTo: p };
  });
}
const AC = "3.12.1";
Ch.version = AC;
function Ml(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const DC = j({ ...xe(), ...ze(Sh(), ["fullHeight"]), ...Ye() }, "VApp"), MC = ee()({ name: "VApp", props: DC(), setup(e, t) {
  let { slots: n } = t;
  const a = qe(e), { layoutClasses: l, getLayoutItem: o, items: i, layoutRef: r } = kh({ ...e, fullHeight: true }), { rtlClasses: s } = Pt();
  return ae(() => {
    var _a2;
    return S("div", { ref: r, class: ne(["v-application", a.themeClasses.value, l.value, s.value, e.class]), style: me([e.style]) }, [S("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: o, items: i, theme: a };
} }), Re = j({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), _h = j({ text: String, ...xe(), ...Re() }, "VToolbarTitle"), Rc = ee()({ name: "VToolbarTitle", props: _h(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = !!(n.default || n.text || e.text);
    return g(e.tag, { class: ne(["v-toolbar-title", e.class]), style: me(e.style) }, { default: () => {
      var _a2;
      return [a && S("div", { class: "v-toolbar-title__placeholder" }, [n.text ? n.text() : e.text, (_a2 = n.default) == null ? void 0 : _a2.call(n)])];
    } });
  }), {};
} }), EC = j({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function wn(e, t, n) {
  return ee()({ name: e, props: EC({ mode: n, origin: t }), setup(a, l) {
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
      const r = a.group ? mc : Ra;
      return ba(r, { name: a.disabled ? "" : e, css: !a.disabled, ...a.group ? void 0 : { mode: a.mode }, ...a.disabled ? {} : i }, o.default);
    };
  } });
}
function Fc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Yn() }, group: Boolean, hideOnLeave: Boolean }, setup(a, l) {
    let { slots: o } = l;
    const i = a.group ? mc : Ra;
    return () => ba(i, { name: a.disabled ? "" : e, css: !a.disabled, ...a.disabled ? {} : { ...t, onLeave: (r) => {
      var _a2;
      a.hideOnLeave ? r.style.setProperty("display", "none", "important") : (_a2 = t.onLeave) == null ? void 0 : _a2.call(t, r);
    } } }, o.default);
  } });
}
function Lc() {
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
const BC = j({ target: [Object, Array] }, "v-dialog-transition"), Es = /* @__PURE__ */ new WeakMap(), Or = ee()({ name: "VDialogTransition", props: BC(), setup(e, t) {
  let { slots: n } = t;
  const a = { onBeforeEnter(l) {
    l.style.pointerEvents = "none", l.style.visibility = "hidden";
  }, async onEnter(l, o) {
    var _a2;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), l.style.visibility = "";
    const i = xv(e.target, l), { x: r, y: s, sx: u, sy: c, speed: d } = i;
    if (Es.set(l, i), Yn()) ia(l, [{ opacity: 0 }, {}], { duration: 125 * d, easing: lv }).finished.then(() => o());
    else {
      const f = ia(l, [{ transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * d, easing: lv });
      (_a2 = Sv(l)) == null ? void 0 : _a2.forEach((v) => {
        ia(v, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * d, easing: Wo });
      }), f.finished.then(() => o());
    }
  }, onAfterEnter(l) {
    l.style.removeProperty("pointer-events");
  }, onBeforeLeave(l) {
    l.style.pointerEvents = "none";
  }, async onLeave(l, o) {
    var _a2;
    await new Promise((f) => requestAnimationFrame(f));
    let i;
    !Es.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? i = xv(e.target, l) : i = Es.get(l);
    const { x: r, y: s, sx: u, sy: c, speed: d } = i;
    Yn() ? ia(l, [{}, { opacity: 0 }], { duration: 85 * d, easing: ov }).finished.then(() => o()) : (ia(l, [{}, { transform: `translate(${r}px, ${s}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * d, easing: ov }).finished.then(() => o()), (_a2 = Sv(l)) == null ? void 0 : _a2.forEach((v) => {
      ia(v, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * d, easing: Wo });
    }));
  }, onAfterLeave(l) {
    l.style.removeProperty("pointer-events");
  } };
  return () => e.target ? g(Ra, q({ name: "dialog-transition" }, a, { css: false }), n) : g(Ra, { name: "dialog-transition" }, n);
} });
function Sv(e) {
  var _a2;
  const t = (_a2 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a2.children;
  return t && [...t];
}
function xv(e, t) {
  const n = qg(e), a = Vc(t), [l, o] = getComputedStyle(t).transformOrigin.split(" ").map((b) => parseFloat(b)), [i, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  i === "left" || r === "left" ? s -= n.width / 2 : (i === "right" || r === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  i === "top" || r === "top" ? u -= n.height / 2 : (i === "bottom" || r === "bottom") && (u += n.height / 2);
  const c = n.width / a.width, d = n.height / a.height, f = Math.max(1, c, d), v = c / f || 0, p = d / f || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), h = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return { x: s - (l + a.left), y: u - (o + a.top), sx: v, sy: p, speed: h };
}
const $C = wn("fab-transition", "center center", "out-in"), RC = wn("dialog-bottom-transition"), FC = wn("dialog-top-transition"), Ko = wn("fade-transition"), Oc = wn("scale-transition"), LC = wn("scroll-x-transition"), OC = wn("scroll-x-reverse-transition"), NC = wn("scroll-y-transition"), HC = wn("scroll-y-reverse-transition"), zC = wn("slide-x-transition"), WC = wn("slide-x-reverse-transition"), Nc = wn("slide-y-transition"), jC = wn("slide-y-reverse-transition"), Nr = Fc("expand-transition", Lc()), Hc = Fc("expand-x-transition", Lc("", "x")), UC = Fc("expand-both-transition", Lc("", "both")), GC = j({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Fe = ee(false)({ name: "VDefaultsProvider", props: GC(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: a, disabled: l, reset: o, root: i, scoped: r } = ao(e);
  return yt(a, { reset: o, root: i, scoped: r, disabled: l }), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), Ct = j({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function _t(e) {
  return { dimensionStyles: _(() => {
    const n = {}, a = ve(e.height), l = ve(e.maxHeight), o = ve(e.maxWidth), i = ve(e.minHeight), r = ve(e.minWidth), s = ve(e.width);
    return a != null && (n.height = a), l != null && (n.maxHeight = l), o != null && (n.maxWidth = o), i != null && (n.minHeight = i), r != null && (n.minWidth = r), s != null && (n.width = s), n;
  }) };
}
function YC(e) {
  return { aspectStyles: _(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Vh = j({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...xe(), ...Ct() }, "VResponsive"), vu = ee()({ name: "VResponsive", props: Vh(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: a } = YC(e), { dimensionStyles: l } = _t(e);
  return ae(() => {
    var _a2;
    return S("div", { class: ne(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: me([l.value, e.style]) }, [S("div", { class: "v-responsive__sizer", style: me(a.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && S("div", { class: ne(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} });
function zc(e) {
  return _c(() => {
    const { class: t, style: n } = Ih(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function $t(e) {
  const { colorClasses: t, colorStyles: n } = zc(() => ({ text: st(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Je(e) {
  const { colorClasses: t, colorStyles: n } = zc(() => ({ background: st(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function KC(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function Ih(e) {
  const t = KC(st(e)), n = [], a = {};
  if (t.background) if (ru(t.background)) {
    if (a.backgroundColor = t.background, !t.text && Z0(t.background)) {
      const l = yn(t.background);
      if (l.a == null || l.a === 1) {
        const o = oh(l);
        a.color = o, a.caretColor = o;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (ru(t.text) ? (a.color = t.text, a.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: a };
}
const dt = j({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function gt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  return { roundedClasses: _(() => {
    const a = kt(e) ? e.value : e.rounded, l = kt(e) ? false : e.tile, o = [];
    if (l || a === false) o.push("rounded-0");
    else if (a === true || a === "") o.push(`${t}--rounded`);
    else if (typeof a == "string" || a === 0) for (const i of String(a).split(" ")) o.push(`rounded-${i}`);
    return o;
  }) };
}
const Sa = j({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Qt = (e, t) => {
  let { slots: n } = t;
  const { transition: a, disabled: l, group: o, ...i } = e, { component: r = o ? mc : Ra, ...s } = dl(a) ? a : {};
  let u;
  return dl(a) ? u = q(s, E0({ disabled: l, group: o }), i) : u = q({ name: l || !a ? "" : a }, i), ba(r, u, n);
};
function kv(e, t) {
  if (!xc) return;
  const n = t.modifiers || {}, a = t.value, { handler: l, options: o } = typeof a == "object" ? a : { handler: a, options: {} }, i = new IntersectionObserver(function() {
    var _a2;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
    if (!u) return;
    const c = r.some((d) => d.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || c || u.init) && l(c, r, s), c && n.once ? mu(e, t) : u.init = true;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: i }, i.observe(e);
}
function mu(e, t) {
  var _a2;
  const n = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Rn = { mounted: kv, unmounted: mu, updated: (e, t) => {
  var _a2;
  ((_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid]) && (mu(e, t), kv(e, t));
} }, Ph = j({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Vh(), ...xe(), ...dt(), ...Sa() }, "VImg"), ga = ee()({ name: "VImg", directives: { vIntersect: Rn }, props: Ph(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.color), { roundedClasses: i } = gt(e), r = wt("VImg"), s = re(""), u = O(), c = re(e.eager ? "loading" : "idle"), d = re(), f = re(), v = _(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), p = _(() => v.value.aspect || d.value / f.value || 0);
  se(() => e.src, () => {
    m(c.value !== "idle");
  }), se(p, (D, E) => {
    !D && E && u.value && V(u.value);
  }), lo(() => m());
  function m(D) {
    if (!(e.eager && D) && !(xc && !D && !e.eager)) {
      if (c.value = "loading", v.value.lazySrc) {
        const E = new Image();
        E.src = v.value.lazySrc, V(E, null);
      }
      v.value.src && Be(() => {
        var _a2;
        n("loadstart", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || v.value.src), setTimeout(() => {
          var _a3;
          if (!r.isUnmounted) if ((_a3 = u.value) == null ? void 0 : _a3.complete) {
            if (u.value.naturalWidth || b(), c.value === "error") return;
            p.value || V(u.value, null), c.value === "loading" && h();
          } else p.value || V(u.value), w();
        });
      });
    }
  }
  function h() {
    var _a2;
    r.isUnmounted || (w(), V(u.value), c.value = "loaded", n("load", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || v.value.src));
  }
  function b() {
    var _a2;
    r.isUnmounted || (c.value = "error", n("error", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || v.value.src));
  }
  function w() {
    const D = u.value;
    D && (s.value = D.currentSrc || D.src);
  }
  let I = -1;
  jt(() => {
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
  const k = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), y = () => {
    var _a2;
    if (!v.value.src || c.value === "idle") return null;
    const D = S("img", { class: ne(["v-img__img", k.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.src, srcset: v.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: h, onError: b }, null), E = (_a2 = a.sources) == null ? void 0 : _a2.call(a);
    return g(Qt, { transition: e.transition, appear: true }, { default: () => [lt(E ? S("picture", { class: "v-img__picture" }, [E, D]) : D, [[Ln, c.value === "loaded"]])] });
  }, C = () => g(Qt, { transition: e.transition }, { default: () => [v.value.lazySrc && c.value !== "loaded" && S("img", { class: ne(["v-img__img", "v-img__img--preload", k.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: v.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), x = () => a.placeholder ? g(Qt, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !a.error) && S("div", { class: "v-img__placeholder" }, [a.placeholder()])] }) : null, T = () => a.error ? g(Qt, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && S("div", { class: "v-img__error" }, [a.error()])] }) : null, P = () => e.gradient ? S("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, M = re(false);
  {
    const D = se(p, (E) => {
      E && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          M.value = true;
        });
      }), D());
    });
  }
  return ae(() => {
    const D = vu.filterProps(e);
    return lt(g(vu, q({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !M.value, "v-img--fit-content": e.width === "fit-content" }, l.value, i.value, e.class], style: [{ width: ve(e.width === "auto" ? d.value : e.width) }, o.value, e.style] }, D, { aspectRatio: p.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => S(be, null, [g(y, null, null), g(C, null, null), g(P, null, null), g(x, null, null), g(T, null, null)]), default: a.default }), [[Rn, { handler: m, options: e.options }, null, { once: true }]]);
  }), { currentSrc: s, image: u, state: c, naturalWidth: d, naturalHeight: f };
} }), Ut = j({ border: [Boolean, Number, String] }, "border");
function tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  return { borderClasses: _(() => {
    const a = e.border;
    return a === true || a === "" ? `${t}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
  }) };
}
const Vt = j({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function At(e) {
  return { elevationClasses: B(() => {
    const n = kt(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const wv = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, ea = j({ location: String }, "location");
function Ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: a } = Pt();
  return { locationStyles: _(() => {
    if (!e.location) return {};
    const { side: o, align: i } = ou(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
    function r(u) {
      return n ? n(u) : 0;
    }
    const s = {};
    return o !== "center" && (t ? s[wv[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? t ? s[wv[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[o]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[o]), s;
  }) };
}
const XC = [null, "prominent", "default", "comfortable", "compact"], Th = j({ absolute: Boolean, collapse: Boolean, collapsePosition: { type: String, default: "start" }, color: String, density: { type: String, default: "default", validator: (e) => XC.includes(e) }, extended: { type: Boolean, default: null }, extensionHeight: { type: [Number, String], default: 48 }, flat: Boolean, floating: Boolean, height: { type: [Number, String], default: 64 }, image: String, title: String, ...Ut(), ...xe(), ...Vt(), ...ea(), ...dt(), ...Re({ tag: "header" }), ...Ye() }, "VToolbar"), gu = ee()({ name: "VToolbar", props: Th(), setup(e, t) {
  var _a2;
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Je(() => e.color), { borderClasses: o } = tn(e), { elevationClasses: i } = At(e), { locationStyles: r } = Ua(e), { roundedClasses: s } = gt(e), { themeClasses: u } = qe(e), { rtlClasses: c } = Pt(), d = re(e.extended === null ? !!((_a2 = n.extension) == null ? void 0 : _a2.call(n)) : e.extended), f = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = _(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
  return yt({ VBtn: { variant: "text" } }), ae(() => {
    var _a3;
    const p = !!(e.title || n.title), m = !!(n.image || e.image), h = (_a3 = n.extension) == null ? void 0 : _a3.call(n);
    return d.value = e.extended === null ? !!h : e.extended, g(e.tag, { class: ne(["v-toolbar", `v-toolbar--collapse-${e.collapsePosition}`, { "v-toolbar--absolute": e.absolute, "v-toolbar--collapse": e.collapse, "v-toolbar--flat": e.flat, "v-toolbar--floating": e.floating, [`v-toolbar--density-${e.density}`]: true }, a.value, o.value, i.value, s.value, u.value, c.value, e.class]), style: me([l.value, r.value, e.style]) }, { default: () => [m && S("div", { key: "image", class: "v-toolbar__image" }, [n.image ? g(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, n.image) : g(ga, { key: "image-img", cover: true, src: e.image }, null)]), g(Fe, { defaults: { VTabs: { height: ve(f.value) } } }, { default: () => {
      var _a4, _b2, _c2;
      return [S("div", { class: "v-toolbar__content", style: { height: ve(f.value) } }, [n.prepend && S("div", { class: "v-toolbar__prepend" }, [(_a4 = n.prepend) == null ? void 0 : _a4.call(n)]), p && g(Rc, { key: "title", text: e.title }, { text: n.title }), (_b2 = n.default) == null ? void 0 : _b2.call(n), n.append && S("div", { class: "v-toolbar__append" }, [(_c2 = n.append) == null ? void 0 : _c2.call(n)])])];
    } }), g(Fe, { defaults: { VTabs: { height: ve(v.value) } } }, { default: () => [g(Nr, null, { default: () => [d.value && S("div", { class: "v-toolbar__extension", style: { height: ve(v.value) } }, [h])] })] })] });
  }), { contentHeight: f, extensionHeight: v };
} }), qC = j({ scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } }, "scroll");
function ZC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n, layoutSize: a } = t;
  let l = 0, o = 0;
  const i = O(null), r = re(0), s = re(0), u = re(0), c = re(false), d = re(false), f = re(false), v = re(false), p = re(true), m = _(() => Number(e.scrollThreshold)), h = _(() => nt((m.value - r.value) / m.value || 0));
  function b(k) {
    const y = "window" in k ? window.innerHeight : k.clientHeight, C = "window" in k ? document.documentElement.scrollHeight : k.scrollHeight;
    return { clientHeight: y, scrollHeight: C };
  }
  function w() {
    const k = i.value;
    if (!k) return;
    const { clientHeight: y, scrollHeight: C } = b(k), x = C - y, T = (a == null ? void 0 : a.value) || 0, P = m.value + T;
    p.value = x > P;
  }
  function I() {
    w();
  }
  function V() {
    const k = i.value;
    if (!k || n && !n.value) return;
    l = r.value, r.value = "window" in k ? k.pageYOffset : k.scrollTop;
    const y = k instanceof Window ? document.documentElement.scrollHeight : k.scrollHeight;
    o !== y && (y > o && w(), o = y), d.value = r.value < l, u.value = Math.abs(r.value - m.value);
    const { clientHeight: C, scrollHeight: x } = b(k), T = r.value + C >= x - 5;
    !d.value && T && r.value >= m.value && p.value && (v.value = true);
    const P = Math.abs(r.value - l) > 100, M = r.value <= 5;
    (d.value && l - r.value > 1 && !T || P && r.value < m.value || M) && (v.value = false), f.value = T;
  }
  return se(d, () => {
    s.value = s.value || r.value;
  }), se(c, () => {
    s.value = 0;
  }), It(() => {
    se(() => e.scrollTarget, (k) => {
      var _a2;
      const y = k ? document.querySelector(k) : window;
      y && y !== i.value && ((_a2 = i.value) == null ? void 0 : _a2.removeEventListener("scroll", V), i.value = y, i.value.addEventListener("scroll", V, { passive: true }), Promise.resolve().then(() => {
        w();
      }));
    }, { immediate: true }), window.addEventListener("resize", I, { passive: true });
  }), jt(() => {
    var _a2;
    (_a2 = i.value) == null ? void 0 : _a2.removeEventListener("scroll", V), window.removeEventListener("resize", I);
  }), n && se(n, V, { immediate: true }), { scrollThreshold: m, currentScroll: r, currentThreshold: u, isScrollActive: c, scrollRatio: h, isScrollingUp: d, savedScroll: s, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: p };
}
function wl() {
  const e = re(false);
  return It(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: sl(e) };
}
const JC = j({ scrollBehavior: String, modelValue: { type: Boolean, default: true }, location: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ...ze(Th(), ["location"]), ...xl(), ...qC(), height: { type: [Number, String], default: 64 } }, "VAppBar"), QC = ee()({ name: "VAppBar", props: JC(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = O(), l = Ce(e, "modelValue"), o = _(() => {
    var _a2;
    const y = new Set(((_a2 = e.scrollBehavior) == null ? void 0 : _a2.split(" ")) ?? []);
    return { hide: y.has("hide"), fullyHide: y.has("fully-hide"), inverted: y.has("inverted"), collapse: y.has("collapse"), elevate: y.has("elevate"), fadeImage: y.has("fade-image") };
  }), i = _(() => {
    const y = o.value;
    return y.hide || y.fullyHide || y.inverted || y.collapse || y.elevate || y.fadeImage || !l.value;
  }), r = _(() => {
    var _a2, _b2;
    const y = ((_a2 = a.value) == null ? void 0 : _a2.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return y + C;
  }), { currentScroll: s, scrollThreshold: u, isScrollingUp: c, scrollRatio: d, isAtBottom: f, reachedBottomWhileScrollingDown: v, hasEnoughScrollableSpace: p } = ZC(e, { canScroll: i, layoutSize: r }), m = B(() => o.value.hide || o.value.fullyHide), h = _(() => e.collapse || o.value.collapse && (o.value.inverted ? d.value > 0 : d.value === 0)), b = _(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? s.value > 0 : s.value === 0)), w = _(() => o.value.fadeImage ? o.value.inverted ? 1 - d.value : d.value : void 0), I = _(() => {
    var _a2, _b2;
    if (o.value.hide && o.value.inverted) return 0;
    const y = ((_a2 = a.value) == null ? void 0 : _a2.contentHeight) ?? 0, C = ((_b2 = a.value) == null ? void 0 : _b2.extensionHeight) ?? 0;
    return m.value ? s.value < u.value || o.value.fullyHide ? y + C : y : y + C;
  });
  Lt(() => !!e.scrollBehavior, () => {
    mt(() => {
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
  const { ssrBootStyles: V } = wl(), { layoutItemStyles: k } = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.location), layoutSize: I, elementSize: re(void 0), active: l, absolute: B(() => e.absolute) });
  return ae(() => {
    const y = ze(gu.filterProps(e), ["location"]);
    return g(gu, q({ ref: a, class: ["v-app-bar", { "v-app-bar--bottom": e.location === "bottom" }, e.class], style: [{ ...k.value, "--v-toolbar-image-opacity": w.value, height: void 0, ...V.value }, e.style] }, y, { collapse: h.value, flat: b.value }), n);
  }), {};
} }), e_ = [null, "default", "comfortable", "compact"], bt = j({ density: { type: String, default: "default", validator: (e) => e_.includes(e) } }, "density");
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const t_ = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function xa(e, t) {
  return S(be, null, [e && S("span", { key: "overlay", class: ne(`${t}__overlay`) }, null), S("span", { key: "underlay", class: ne(`${t}__underlay`) }, null)]);
}
const Cn = j({ color: String, variant: { type: String, default: "elevated", validator: (e) => t_.includes(e) } }, "variant");
function ka(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  const n = B(() => {
    const { variant: o } = st(e);
    return `${t}--variant-${o}`;
  }), { colorClasses: a, colorStyles: l } = zc(() => {
    const { variant: o, color: i } = st(e);
    return { [["elevated", "flat"].includes(o) ? "background" : "text"]: i };
  });
  return { colorClasses: a, colorStyles: l, variantClasses: n };
}
const Ah = j({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...Ut(), ...xe(), ...bt(), ...Vt(), ...dt(), ...Re(), ...Ye(), ...Cn() }, "VBtnGroup"), hu = ee()({ name: "VBtnGroup", props: Ah(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Nt(e), { borderClasses: o } = tn(e), { elevationClasses: i } = At(e), { roundedClasses: r } = gt(e);
  yt({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ae(() => g(e.tag, { class: ne(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, a.value, o.value, l.value, i.value, r.value, e.class]), style: me(e.style) }, n));
} }), Cl = j({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), _l = j({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function La(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const a = wt("useGroupItem");
  if (!a) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Rt();
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
  s(), jt(() => u());
  const c = _(() => o.isSelected(l)), d = _(() => o.items.value[0].id === l), f = _(() => o.items.value[o.items.value.length - 1].id === l), v = _(() => c.value && [o.selectedClass.value, e.selectedClass]);
  return se(c, (p) => {
    a.emit("group:selected", { value: p });
  }, { flush: "sync" }), { id: l, isSelected: c, isFirst: d, isLast: f, toggle: () => o.select(l, !c.value), select: (p) => o.select(l, p), selectedClass: v, value: i, disabled: r, group: o, register: s, unregister: u };
}
function Ga(e, t) {
  let n = false;
  const a = Et([]), l = Ce(e, "modelValue", [], (f) => f === void 0 ? [] : Dh(a, f === null ? [null] : ct(f)), (f) => {
    const v = a_(a, f);
    return e.multiple ? v : v[0];
  }), o = wt("useGroup");
  function i(f, v) {
    const p = f, m = Symbol.for(`${t.description}:id`), b = Ll(m, o == null ? void 0 : o.vnode).indexOf(v);
    Ke(p.value) === void 0 && (p.value = b, p.useIndexAsValue = true), b > -1 ? a.splice(b, 0, p) : a.push(p);
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
  It(() => {
    s();
  }), jt(() => {
    n = true;
  }), _r(() => {
    for (let f = 0; f < a.length; f++) a[f].useIndexAsValue && (a[f].value = f);
  });
  function u(f, v) {
    const p = a.find((m) => m.id === f);
    if (!(v && (p == null ? void 0 : p.disabled))) if (e.multiple) {
      const m = l.value.slice(), h = m.findIndex((w) => w === f), b = ~h;
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
      const v = l.value[0], p = a.findIndex((b) => b.id === v);
      let m = (p + f) % a.length, h = a[m];
      for (; h.disabled && m !== p; ) m = (m + f) % a.length, h = a[m];
      if (h.disabled) return;
      l.value = [a[m].id];
    } else {
      const v = a.find((p) => !p.disabled);
      v && (l.value = [v.id]);
    }
  }
  const d = { register: i, unregister: r, selected: l, select: u, disabled: B(() => e.disabled), prev: () => c(a.length - 1), next: () => c(1), isSelected: (f) => l.value.includes(f), selectedClass: B(() => e.selectedClass), items: B(() => a), getItemIndex: (f) => n_(a, f) };
  return ft(t, d), d;
}
function n_(e, t) {
  const n = Dh(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Dh(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((i) => Bt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) !== void 0 ? n.push(l.id) : (o == null ? void 0 : o.useIndexAsValue) && n.push(o.id);
  }), n;
}
function a_(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      n.push(o.value !== void 0 ? o.value : l);
    }
  }), n;
}
const Wc = Symbol.for("vuetify:v-btn-toggle"), l_ = j({ ...Ah(), ...Cl() }, "VBtnToggle"), o_ = ee()({ name: "VBtnToggle", props: l_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, next: l, prev: o, select: i, selected: r } = Ga(e, Wc);
  return ae(() => {
    const s = hu.filterProps(e);
    return g(hu, q({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: a, next: l, prev: o, select: i, selected: r })];
    } });
  }), { next: l, prev: o, select: i };
} }), i_ = ["x-small", "small", "default", "large", "x-large"], ta = j({ size: { type: [String, Number], default: "default" } }, "size");
function oo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  return _c(() => {
    const n = e.size;
    let a, l;
    return or(i_, n) ? a = `${t}--size-${n}` : n && (l = { width: ve(n), height: ve(n) }), { sizeClasses: a, sizeStyles: l };
  });
}
const r_ = j({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: Ie, opacity: [String, Number], ...xe(), ...ta(), ...Re({ tag: "i" }), ...Ye() }, "VIcon"), Xe = ee()({ name: "VIcon", props: r_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = re(), { themeClasses: o } = Lr(), { iconData: i } = y1(() => l.value || e.icon), { sizeClasses: r } = oo(e), { textColorClasses: s, textColorStyles: u } = $t(() => e.color);
  return ae(() => {
    var _a2, _b2;
    const c = (_a2 = a.default) == null ? void 0 : _a2.call(a);
    c && (l.value = (_b2 = Ug(c).filter((f) => f.type === ri && f.children && typeof f.children == "string")[0]) == null ? void 0 : _b2.children);
    const d = !!(n.onClick || n.onClickOnce);
    return g(i.value.component, { tag: e.tag, icon: i.value.icon, class: ne(["v-icon", "notranslate", o.value, r.value, s.value, { "v-icon--clickable": d, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: me([{ "--v-icon-opacity": e.opacity }, r.value ? void 0 : { fontSize: ve(e.size), height: ve(e.size), width: ve(e.size) }, u.value, e.style]), role: d ? "button" : void 0, "aria-hidden": !d, tabindex: d ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function vi(e, t) {
  const n = O(), a = re(false);
  if (xc) {
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
const s_ = j({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function u_(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), a = re(e.reveal ? "initial" : "disabled");
  return It(async () => {
    e.reveal && (a.value = "initial", await new Promise((l) => requestAnimationFrame(l)), a.value = "pending", await new Promise((l) => setTimeout(l, n.value)), a.value = "done");
  }), { duration: n, state: a };
}
const c_ = j({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...xe(), ...s_(), ...ta(), ...Re({ tag: "div" }), ...Ye() }, "VProgressCircular"), Oa = ee()({ name: "VProgressCircular", props: c_(), setup(e, t) {
  let { slots: n } = t;
  const a = 20, l = 2 * Math.PI * a, o = O(), { themeClasses: i } = qe(e), { sizeClasses: r, sizeStyles: s } = oo(e), { textColorClasses: u, textColorStyles: c } = $t(() => e.color), { textColorClasses: d, textColorStyles: f } = $t(() => e.bgColor), { intersectionRef: v, isIntersecting: p } = vi(), { resizeRef: m, contentRect: h } = In(), { state: b, duration: w } = u_(e), I = B(() => b.value === "initial" ? 0 : nt(parseFloat(e.modelValue), 0, 100)), V = B(() => Number(e.width)), k = B(() => s.value ? Number(e.size) : h.value ? h.value.width : Math.max(V.value, 32)), y = B(() => a / (1 - V.value / k.value) * 2), C = B(() => V.value / k.value * y.value), x = B(() => {
    const P = (100 - I.value) / 100 * l;
    return e.rounded && I.value > 0 && I.value < 100 ? ve(Math.min(l - 0.01, P + C.value)) : ve(P);
  }), T = _(() => {
    const P = Number(e.rotate);
    return e.rounded ? P + C.value / 2 / l * 360 : P;
  });
  return mt(() => {
    v.value = o.value, m.value = o.value;
  }), ae(() => g(e.tag, { ref: o, class: ne(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": p.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Yn()), "v-progress-circular--revealing": ["initial", "pending"].includes(b.value) }, i.value, r.value, u.value, e.class]), style: me([s.value, c.value, { "--progress-reveal-duration": `${w.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : I.value }, { default: () => [S("svg", { style: { transform: `rotate(calc(-90deg + ${T.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${y.value} ${y.value}` }, [S("circle", { class: ne(["v-progress-circular__underlay", d.value]), style: me(f.value), fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), S("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: a, "stroke-width": C.value, "stroke-dasharray": l, "stroke-dashoffset": x.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && S("div", { class: "v-progress-circular__content" }, [n.default({ value: I.value })])] })), {};
} }), d_ = j({ chunkCount: { type: [Number, String], default: null }, chunkWidth: { type: [Number, String], default: null }, chunkGap: { type: [Number, String], default: 4 } }, "chunks");
function f_(e, t) {
  const n = B(() => !!e.chunkCount || !!e.chunkWidth), a = _(() => {
    const r = st(t);
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
    const s = st(t);
    if (!s) return r;
    const u = 100 * l.value / s, c = 100 * (a.value + l.value) / s, d = Math.floor((r + u) / c);
    return nt(0, d * c - u / 2, 100);
  }
  return { hasChunks: n, chunksMaskStyles: o, snapValueToChunk: i };
}
const v_ = j({ absolute: Boolean, active: { type: Boolean, default: true }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, bufferColor: String, bufferOpacity: [Number, String], clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, opacity: [Number, String], reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...d_(), ...xe(), ...ea({ location: "top" }), ...dt(), ...Re(), ...Ye() }, "VProgressLinear"), Hr = ee()({ name: "VProgressLinear", props: v_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = O(), l = Ce(e, "modelValue"), { isRtl: o, rtlClasses: i } = Pt(), { themeClasses: r } = qe(e), { locationStyles: s } = Ua(e), { textColorClasses: u, textColorStyles: c } = $t(() => e.color), { backgroundColorClasses: d, backgroundColorStyles: f } = Je(() => e.bgColor || e.color), { backgroundColorClasses: v, backgroundColorStyles: p } = Je(() => e.bufferColor || e.bgColor || e.color), { backgroundColorClasses: m, backgroundColorStyles: h } = Je(() => e.color), { roundedClasses: b } = gt(e), { intersectionRef: w, isIntersecting: I } = vi(), V = _(() => parseFloat(e.max)), k = _(() => parseFloat(e.height)), y = _(() => nt(parseFloat(e.bufferValue) / V.value * 100, 0, 100)), C = _(() => nt(parseFloat(l.value) / V.value * 100, 0, 100)), x = _(() => o.value !== e.reverse), T = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = re(0), { hasChunks: M, chunksMaskStyles: D, snapValueToChunk: E } = f_(e, P);
  Lt(M, () => {
    const { resizeRef: N } = In((Y) => P.value = Y[0].contentRect.width);
    mt(() => N.value = a.value);
  });
  const A = _(() => M.value ? E(y.value) : y.value), R = _(() => M.value ? E(C.value) : C.value);
  function G(N) {
    if (!w.value) return;
    const { left: Y, right: H, width: F } = w.value.getBoundingClientRect(), Z = x.value ? F - N.clientX + (H - F) : N.clientX - Y;
    l.value = Math.round(Z / F * V.value);
  }
  return mt(() => {
    w.value = a.value;
  }), ae(() => g(e.tag, { ref: a, class: ne(["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && I.value, "v-progress-linear--reverse": x.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped, "v-progress-linear--clickable": e.clickable }, b.value, r.value, i.value, e.class]), style: me([{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ve(k.value) : 0, "--v-progress-linear-height": ve(k.value), ...e.absolute ? s.value : {} }, D.value, e.style]), role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(l.value), V.value), onClick: e.clickable && G }, { default: () => [e.stream && S("div", { key: "stream", class: ne(["v-progress-linear__stream", u.value]), style: { ...c.value, [x.value ? "left" : "right"]: ve(-k.value), borderTop: `${ve(k.value / 2)} dotted`, opacity: parseFloat(e.bufferOpacity), top: `calc(50% - ${ve(k.value / 4)})`, width: ve(100 - y.value, "%"), "--v-progress-linear-stream-to": ve(k.value * (x.value ? 1 : -1)) } }, null), S("div", { class: ne(["v-progress-linear__background", d.value]), style: me([f.value, { opacity: parseFloat(e.bgOpacity), width: e.stream ? 0 : void 0 }]) }, null), S("div", { class: ne(["v-progress-linear__buffer", v.value]), style: me([p.value, { opacity: parseFloat(e.bufferOpacity), width: ve(A.value, "%") }]) }, null), g(Ra, { name: T.value }, { default: () => [e.indeterminate ? S("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((N) => S("div", { key: N, class: ne(["v-progress-linear__indeterminate", N, m.value]), style: me(h.value) }, null))]) : S("div", { class: ne(["v-progress-linear__determinate", m.value]), style: me([h.value, { width: ve(R.value, "%") }]) }, null)] }), n.default && S("div", { class: "v-progress-linear__content" }, [n.default({ value: C.value, buffer: y.value })])] })), {};
} }), zr = j({ loading: [Boolean, String] }, "loader");
function mi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
function gi(e, t) {
  var _a2;
  let { slots: n } = t;
  return S("div", { class: ne(`${e.name}__loader`) }, [((_a2 = n.default) == null ? void 0 : _a2.call(n, { color: e.color, isActive: e.active })) || g(Hr, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: true }, null)]);
}
const m_ = ["static", "relative", "fixed", "absolute", "sticky"], io = j({ position: { type: String, validator: (e) => m_.includes(e) } }, "position");
function ro(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function g_() {
  const e = wt("useRoute");
  return _(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function Mh() {
  var _a2, _b2;
  return (_b2 = (_a2 = wt("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function hi(e, t) {
  const n = zS("RouterLink"), a = B(() => !!(e.href || e.to)), l = _(() => (a == null ? void 0 : a.value) || Wf(t, "click") || Wf(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const d = B(() => e.href);
    return { isLink: a, isRouterLink: B(() => false), isClickable: l, href: d, linkProps: Et({ href: d }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const o = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), i = _(() => e.to ? o : void 0), r = g_(), s = _(() => {
    var _a2, _b2, _c2;
    return i.value ? e.exact ? r.value ? ((_a2 = i.value.isExactActive) == null ? void 0 : _a2.value) && Bt(i.value.route.value.query, r.value.query) : ((_b2 = i.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = i.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = _(() => {
    var _a2;
    return e.to ? (_a2 = i.value) == null ? void 0 : _a2.route.value.href : e.href;
  });
  return { isLink: a, isRouterLink: B(() => !!e.to), isClickable: l, isActive: s, route: B(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.route.value;
  }), navigate: B(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.navigate;
  }), href: u, linkProps: Et({ href: u, "aria-current": B(() => s.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && a.value ? "true" : void 0), tabindex: B(() => e.disabled && a.value ? "-1" : void 0) }) };
}
const yi = j({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Bs = false;
function h_(e, t) {
  let n = false, a, l;
  at && (e == null ? void 0 : e.beforeEach) && (Be(() => {
    window.addEventListener("popstate", o), a = e.beforeEach((i, r, s) => {
      Bs ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Bs = true;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Bs = false;
    });
  }), St(() => {
    window.removeEventListener("popstate", o), a == null ? void 0 : a(), l == null ? void 0 : l();
  }));
  function o(i) {
    var _a2;
    ((_a2 = i.state) == null ? void 0 : _a2.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function y_(e, t) {
  se(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && Be(() => {
      t(n);
    });
  }, { immediate: true });
}
const yu = Symbol("rippleStop"), b_ = 80;
function Cv(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function bu(e) {
  return e.constructor.name === "TouchEvent";
}
function Eh(e) {
  return e.constructor.name === "KeyboardEvent";
}
const p_ = function(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Eh(e)) {
    const d = t.getBoundingClientRect(), f = bu(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - d.left, l = f.clientY - d.top;
  }
  let o = 0, i = 0.3;
  ((_a2 = t._ripple) == null ? void 0 : _a2.circle) ? (i = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? r : `${a - o}px`, c = n.center ? s : `${l - o}px`;
  return { radius: o, scale: i, x: u, y: c, centerX: r, centerY: s };
}, dr = { show(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a2 = t == null ? void 0 : t._ripple) == null ? void 0 : _a2.enabled)) return;
  const a = document.createElement("span"), l = document.createElement("span");
  a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
  const { radius: o, scale: i, x: r, y: s, centerX: u, centerY: c } = p_(e, t, n), d = `${o * 2}px`;
  l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, t.appendChild(a);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Cv(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Cv(l, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
  const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var _a3;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((_a3 = n.parentNode) == null ? void 0 : _a3.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, l);
} };
function Bh(e) {
  return typeof e > "u" || !!e;
}
function Xo(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[yu])) {
    if (e[yu] = true, bu(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Eh(e), n._ripple.class && (t.class = n._ripple.class), bu(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        dr.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a2;
        ((_a2 = n == null ? void 0 : n._ripple) == null ? void 0 : _a2.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, b_);
    } else dr.show(e, n, t);
  }
}
function fr(e) {
  e[yu] = true;
}
function mn(e) {
  const t = e.currentTarget;
  if (t == null ? void 0 : t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        mn(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = false);
    }), dr.hide(t);
  }
}
function $h(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let qo = false;
function S_(e, t) {
  !qo && t.includes(e.key) && (qo = true, Xo(e));
}
function Rh(e) {
  qo = false, mn(e);
}
function Fh(e) {
  qo && (qo = false, mn(e));
}
function Lh(e, t, n) {
  const { value: a, modifiers: l } = t, o = Bh(a);
  o || dr.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const i = dl(a) ? a : {};
  i.class && (e._ripple.class = i.class);
  const r = i.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => S_(s, r), o && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", fr, { passive: true }), e.addEventListener("mousedown", fr);
      return;
    }
    e.addEventListener("touchstart", Xo, { passive: true }), e.addEventListener("touchend", mn, { passive: true }), e.addEventListener("touchmove", $h, { passive: true }), e.addEventListener("touchcancel", mn), e.addEventListener("mousedown", Xo), e.addEventListener("mouseup", mn), e.addEventListener("mouseleave", mn), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Rh), e.addEventListener("blur", Fh), e.addEventListener("dragstart", mn, { passive: true });
  } else !o && n && Oh(e);
}
function Oh(e) {
  var _a2;
  e.removeEventListener("touchstart", fr), e.removeEventListener("mousedown", fr), e.removeEventListener("touchstart", Xo), e.removeEventListener("touchend", mn), e.removeEventListener("touchmove", $h), e.removeEventListener("touchcancel", mn), e.removeEventListener("mousedown", Xo), e.removeEventListener("mouseup", mn), e.removeEventListener("mouseleave", mn), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Rh), e.removeEventListener("blur", Fh), e.removeEventListener("dragstart", mn);
}
function x_(e, t) {
  Lh(e, t, false);
}
function k_(e) {
  Oh(e), delete e._ripple;
}
function w_(e, t) {
  if (t.value === t.oldValue) return;
  const n = Bh(t.oldValue);
  Lh(e, t, n);
}
const Ot = { mounted: x_, unmounted: k_, updated: w_ }, Wr = j({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: Wc }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ie, appendIcon: Ie, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ut(), ...xe(), ...bt(), ...Ct(), ...Vt(), ..._l(), ...zr(), ...ea(), ...io(), ...dt(), ...yi(), ...ta(), ...Re({ tag: "button" }), ...Ye(), ...Cn({ variant: "elevated" }) }, "VBtn"), Ue = ee()({ name: "VBtn", props: Wr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = tn(e), { densityClasses: i } = Nt(e), { dimensionStyles: r } = _t(e), { elevationClasses: s } = At(e), { loaderClasses: u } = mi(e), { locationStyles: c } = Ua(e), { positionClasses: d } = ro(e), { roundedClasses: f } = gt(e), { sizeClasses: v, sizeStyles: p } = oo(e), m = La(e, e.symbol, false), h = hi(e, n), b = _(() => {
    var _a2;
    return e.active !== void 0 ? e.active : h.isRouterLink.value ? (_a2 = h.isActive) == null ? void 0 : _a2.value : m == null ? void 0 : m.isSelected.value;
  }), w = B(() => b.value ? e.activeColor ?? e.color : e.color), I = _(() => {
    var _a2, _b2;
    return { color: (m == null ? void 0 : m.isSelected.value) && (!h.isLink.value || ((_a2 = h.isActive) == null ? void 0 : _a2.value)) || !m || ((_b2 = h.isActive) == null ? void 0 : _b2.value) ? w.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: V, colorStyles: k, variantClasses: y } = ka(I), C = _(() => (m == null ? void 0 : m.disabled.value) || e.disabled), x = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = _(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(M) {
    var _a2, _b2;
    C.value || h.isLink.value && (M.metaKey || M.ctrlKey || M.shiftKey || M.button !== 0 || n.target === "_blank") || (h.isRouterLink.value ? (_b2 = (_a2 = h.navigate).value) == null ? void 0 : _b2.call(_a2, M) : m == null ? void 0 : m.toggle());
  }
  return y_(h, m == null ? void 0 : m.select), ae(() => {
    const M = h.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), E = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== true);
    return lt(g(M, q(h.linkProps, { type: M === "a" ? void 0 : "button", class: ["v-btn", m == null ? void 0 : m.selectedClass.value, { "v-btn--active": b.value, "v-btn--block": e.block, "v-btn--disabled": C.value, "v-btn--elevated": x.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], l.value, o.value, V.value, i.value, s.value, u.value, d.value, f.value, v.value, y.value, e.class], style: [k.value, r.value, c.value, p.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: C.value && M !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: P, value: T.value }), { default: () => {
      var _a2;
      return [xa(true, "v-btn"), !e.icon && D && S("span", { key: "prepend", class: "v-btn__prepend" }, [a.prepend ? g(Fe, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, a.prepend) : g(Xe, { key: "prepend-icon", icon: e.prependIcon }, null)]), S("span", { class: "v-btn__content", "data-no-activator": "" }, [!a.default && A ? g(Xe, { key: "content-icon", icon: e.icon }, null) : g(Fe, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? Te(e.text)];
      } })]), !e.icon && E && S("span", { key: "append", class: "v-btn__append" }, [a.append ? g(Fe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, a.append) : g(Xe, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && S("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = a.loader) == null ? void 0 : _a2.call(a)) ?? g(Oa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Ot, !C.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: m };
} }), C_ = j({ ...ze(Wr({ icon: "$menu", variant: "text" }), ["spaced"]) }, "VAppBarNavIcon"), __ = ee()({ name: "VAppBarNavIcon", props: C_(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(Ue, q(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
} }), V_ = ee()({ name: "VAppBarTitle", props: _h(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(Rc, q(e, { class: "v-app-bar-title" }), n)), {};
} }), Nh = pa("v-alert-title"), Hh = j({ iconSize: [Number, String], iconSizes: { type: Array, default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]] } }, "iconSize");
function zh(e, t) {
  return { iconSize: _(() => {
    const a = new Map(e.iconSizes), l = e.iconSize ?? t() ?? "default";
    return a.has(l) ? a.get(l) : l;
  }) };
}
const I_ = ["success", "info", "warning", "error"], P_ = j({ border: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e) }, borderColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$close" }, closeLabel: { type: String, default: "$vuetify.close" }, icon: { type: [Boolean, String, Function, Object], default: null }, modelValue: { type: Boolean, default: true }, prominent: Boolean, title: String, text: String, type: { type: String, validator: (e) => I_.includes(e) }, ...xe(), ...bt(), ...Ct(), ...Vt(), ...Hh(), ...ea(), ...io(), ...dt(), ...Re(), ...Ye(), ...Cn({ variant: "flat" }) }, "VAlert"), T_ = ee()({ name: "VAlert", props: P_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = B(() => {
    if (e.icon !== false) return e.type ? e.icon ?? `$${e.type}` : e.icon;
  }), { iconSize: i } = zh(e, () => e.prominent ? 44 : void 0), { themeClasses: r } = qe(e), { colorClasses: s, colorStyles: u, variantClasses: c } = ka(() => ({ color: e.color ?? e.type, variant: e.variant })), { densityClasses: d } = Nt(e), { dimensionStyles: f } = _t(e), { elevationClasses: v } = At(e), { locationStyles: p } = Ua(e), { positionClasses: m } = ro(e), { roundedClasses: h } = gt(e), { textColorClasses: b, textColorStyles: w } = $t(() => e.borderColor), { t: I } = ot(), V = B(() => ({ "aria-label": I(e.closeLabel), onClick(k) {
    l.value = false, n("click:close", k);
  } }));
  return () => {
    const k = !!(a.prepend || o.value), y = !!(a.title || e.title), C = !!(a.close || e.closable), x = { density: e.density, icon: o.value, size: e.iconSize || e.prominent ? i.value : void 0 };
    return l.value && g(e.tag, { class: ne(["v-alert", e.border && { "v-alert--border": !!e.border, [`v-alert--border-${e.border === true ? "start" : e.border}`]: true }, { "v-alert--prominent": e.prominent }, r.value, s.value, d.value, v.value, m.value, h.value, c.value, e.class]), style: me([u.value, f.value, p.value, e.style]), role: "alert" }, { default: () => {
      var _a2, _b2;
      return [xa(false, "v-alert"), e.border && S("div", { key: "border", class: ne(["v-alert__border", b.value]), style: me(w.value) }, null), k && S("div", { key: "prepend", class: "v-alert__prepend" }, [a.prepend ? g(Fe, { key: "prepend-defaults", disabled: !o.value, defaults: { VIcon: { ...x } } }, a.prepend) : g(Xe, q({ key: "prepend-icon" }, x), null)]), S("div", { class: "v-alert__content" }, [y && g(Nh, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = a.title) == null ? void 0 : _a3.call(a)) ?? e.title];
      } }), ((_a2 = a.text) == null ? void 0 : _a2.call(a)) ?? e.text, (_b2 = a.default) == null ? void 0 : _b2.call(a)]), a.append && S("div", { key: "append", class: "v-alert__append" }, [a.append()]), C && S("div", { key: "close", class: "v-alert__close" }, [a.close ? g(Fe, { key: "close-defaults", defaults: { VBtn: { icon: e.closeIcon, size: "x-small", variant: "text" } } }, { default: () => {
        var _a3;
        return [(_a3 = a.close) == null ? void 0 : _a3.call(a, { props: V.value })];
      } }) : g(Ue, q({ key: "close-btn", icon: e.closeIcon, size: "x-small", variant: "text" }, V.value), null)])];
    } });
  };
} }), A_ = j({ start: Boolean, end: Boolean, icon: Ie, image: String, text: String, ...Ut(), ...xe(), ...bt(), ...dt(), ...ta(), ...Re(), ...Ye(), ...Cn({ variant: "flat" }) }, "VAvatar"), xn = ee()({ name: "VAvatar", props: A_(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = tn(e), { colorClasses: o, colorStyles: i, variantClasses: r } = ka(e), { densityClasses: s } = Nt(e), { roundedClasses: u } = gt(e), { sizeClasses: c, sizeStyles: d } = oo(e);
  return ae(() => g(e.tag, { class: ne(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, a.value, l.value, o.value, s.value, u.value, c.value, r.value, e.class]), style: me([i.value, d.value, e.style]) }, { default: () => [n.default ? g(Fe, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? g(ga, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? g(Xe, { key: "icon", icon: e.icon }, null) : e.text, xa(false, "v-avatar")] })), {};
} }), D_ = j({ text: String, onClick: Ft(), ...xe(), ...Ye() }, "VLabel"), so = ee()({ name: "VLabel", props: D_(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var _a2;
    return S("label", { class: ne(["v-label", { "v-label--clickable": !!e.onClick }, e.class]), style: me(e.style), onClick: e.onClick }, [e.text, (_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  }), {};
} }), Wh = Symbol.for("vuetify:selection-control-group"), jc = j({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ie, trueIcon: Ie, ripple: { type: [Boolean, Object], default: true }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Bt }, ...xe(), ...bt(), ...Ye() }, "SelectionControlGroup"), M_ = j({ ...jc({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup"), jh = ee()({ name: "VSelectionControlGroup", props: M_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = Rt(), o = B(() => e.id || `v-selection-control-group-${l}`), i = B(() => e.name || o.value), r = /* @__PURE__ */ new Set();
  return ft(Wh, { modelValue: a, forceUpdate: () => {
    r.forEach((s) => s());
  }, onForceUpdate: (s) => {
    r.add(s), St(() => {
      r.delete(s);
    });
  } }), yt({ [e.defaultsTarget]: { color: B(() => e.color), disabled: B(() => e.disabled), density: B(() => e.density), error: B(() => e.error), inline: B(() => e.inline), modelValue: a, multiple: B(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), name: i, falseIcon: B(() => e.falseIcon), trueIcon: B(() => e.trueIcon), readonly: B(() => e.readonly), ripple: B(() => e.ripple), type: B(() => e.type), valueComparator: B(() => e.valueComparator) } }), ae(() => {
    var _a2;
    return S("div", { class: ne(["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class]), style: me(e.style), role: e.type === "radio" ? "radiogroup" : void 0 }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  }), {};
} }), jr = j({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...xe(), ...jc() }, "VSelectionControl");
function E_(e) {
  const t = Ge(Wh, void 0), { densityClasses: n } = Nt(e), a = Ce(e, "modelValue"), l = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : true), o = _(() => e.falseValue !== void 0 ? e.falseValue : false), i = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = _({ get() {
    const v = t ? t.modelValue.value : a.value;
    return i.value ? ct(v).some((p) => e.valueComparator(p, l.value)) : e.valueComparator(v, l.value);
  }, set(v) {
    if (e.readonly) return;
    const p = v ? l.value : o.value;
    let m = p;
    i.value && (m = v ? [...ct(a.value), p] : ct(a.value).filter((h) => !e.valueComparator(h, l.value))), t ? t.modelValue.value = m : a.value = m;
  } }), { textColorClasses: s, textColorStyles: u } = $t(() => {
    if (!(e.error || e.disabled)) return r.value ? e.color : e.baseColor;
  }), { backgroundColorClasses: c, backgroundColorStyles: d } = Je(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), f = _(() => r.value ? e.trueIcon : e.falseIcon);
  return { group: t, densityClasses: n, trueValue: l, falseValue: o, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, icon: f };
}
const Na = ee()({ name: "VSelectionControl", directives: { vRipple: Ot }, inheritAttrs: false, props: jr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { group: l, densityClasses: o, icon: i, model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, trueValue: f } = E_(e), v = Rt(), p = re(false), m = re(false), h = O(), b = B(() => e.id || `input-${v}`), w = B(() => !e.disabled && !e.readonly);
  l == null ? void 0 : l.onForceUpdate(() => {
    h.value && (h.value.checked = r.value);
  });
  function I(C) {
    w.value && (p.value = true, Xl(C.target, ":focus-visible") !== false && (m.value = true));
  }
  function V() {
    p.value = false, m.value = false;
  }
  function k(C) {
    C.stopPropagation();
  }
  function y(C) {
    if (!w.value) {
      h.value && (h.value.checked = r.value);
      return;
    }
    e.readonly && l && Be(() => l.forceUpdate()), r.value = C.target.checked;
  }
  return ae(() => {
    var _a2, _b2;
    const C = a.label ? a.label({ label: e.label, props: { for: b.value } }) : e.label, [x, T] = Jn(n), P = S("input", q({ ref: h, checked: r.value, disabled: !!e.disabled, id: b.value, onBlur: V, onFocus: I, onInput: y, "aria-disabled": !!e.disabled, "aria-label": e.label, type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? r.value : void 0 }, T), null);
    return S("div", q({ class: ["v-selection-control", { "v-selection-control--dirty": r.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": p.value, "v-selection-control--focus-visible": m.value, "v-selection-control--inline": e.inline }, o.value, e.class] }, x, { style: e.style }), [S("div", { class: ne(["v-selection-control__wrapper", s.value]), style: me(u.value) }, [(_a2 = a.default) == null ? void 0 : _a2.call(a, { backgroundColorClasses: c, backgroundColorStyles: d }), lt(S("div", { class: ne(["v-selection-control__input"]) }, [((_b2 = a.input) == null ? void 0 : _b2.call(a, { model: r, textColorClasses: s, textColorStyles: u, backgroundColorClasses: c, backgroundColorStyles: d, inputNode: P, icon: i.value, props: { onFocus: I, onBlur: V, id: b.value } })) ?? S(be, null, [i.value && g(Xe, { key: "icon", icon: i.value }, null), P])]), [[Ot, !e.disabled && !e.readonly && e.ripple, null, { center: true, circle: true }]])]), C && g(so, { for: b.value, onClick: k }, { default: () => [C] })]);
  }), { isFocused: p, input: h };
} }), Uh = j({ indeterminate: Boolean, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, ...jr({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Fn = ee()({ name: "VCheckboxBtn", props: Uh(), emits: { "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "indeterminate"), l = Ce(e, "modelValue");
  function o(s) {
    a.value && (a.value = false);
  }
  const i = B(() => a.value ? e.indeterminateIcon : e.falseIcon), r = B(() => a.value ? e.indeterminateIcon : e.trueIcon);
  return ae(() => {
    const s = ze(Na.filterProps(e), ["modelValue"]);
    return g(Na, q(s, { modelValue: l.value, "onUpdate:modelValue": [(u) => l.value = u, o], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: r.value, "aria-checked": a.value ? "mixed" : void 0 }), n);
  }), {};
} });
function bi(e) {
  const { t } = ot();
  function n(a) {
    let { name: l, color: o, ...i } = a;
    const r = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], s = e[`onClick:${l}`];
    function u(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), ci(s, new PointerEvent("click", d)));
    }
    const c = s && r ? t(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return g(Xe, q({ icon: e[`${l}Icon`], "aria-label": c, onClick: s, onKeydown: u, color: o }, i), null);
  }
  return { InputIcon: n };
}
const B_ = j({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...xe(), ...Sa({ transition: { component: Nc, leaveAbsolute: true, group: true } }) }, "VMessages"), Gh = ee()({ name: "VMessages", props: B_(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => ct(e.messages)), { textColorClasses: l, textColorStyles: o } = $t(() => e.color);
  return ae(() => g(Qt, { transition: e.transition, tag: "div", class: ne(["v-messages", l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [e.active && a.value.map((i, r) => S("div", { class: "v-messages__message", key: `${r}-${a.value}` }, [n.message ? n.message({ message: i }) : i]))] })), {};
} }), pi = j({ focused: Boolean, "onUpdate:focused": Ft() }, "focus");
function wa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn();
  const n = Ce(e, "focused"), a = B(() => ({ [`${t}--focused`]: n.value }));
  function l() {
    n.value = true;
  }
  function o() {
    n.value = false;
  }
  return { focusClasses: a, isFocused: n, focus: l, blur: o };
}
const Yh = Symbol.for("vuetify:form"), $_ = j({ disabled: Boolean, fastFail: Boolean, readonly: Boolean, modelValue: { type: Boolean, default: null }, validateOn: { type: String, default: "input" } }, "form");
function R_(e) {
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
  }, { deep: true, flush: "post" }), ft(Yh, { register: (c) => {
    let { id: d, vm: f, validate: v, reset: p, resetValidation: m } = c;
    o.value.some((h) => h.id === d), o.value.push({ id: d, validate: v, reset: p, resetValidation: m, vm: Vm(f), isValid: null, errorMessages: [] });
  }, unregister: (c) => {
    o.value = o.value.filter((d) => d.id !== c);
  }, update: (c, d, f) => {
    const v = o.value.find((p) => p.id === c);
    v && (v.isValid = d, v.errorMessages = f);
  }, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validateOn: B(() => e.validateOn) }), { errors: i, isDisabled: n, isReadonly: a, isValidating: l, isValid: t, items: o, validate: r, reset: s, resetValidation: u };
}
function uo(e) {
  const t = Ge(Yh, null);
  return { ...t, isReadonly: _(() => !!((e == null ? void 0 : e.readonly) ?? (t == null ? void 0 : t.isReadonly.value))), isDisabled: _(() => !!((e == null ? void 0 : e.disabled) ?? (t == null ? void 0 : t.isDisabled.value))) };
}
const F_ = Symbol.for("vuetify:rules");
function L_(e) {
  const t = Ge(F_, null);
  if (!e) {
    if (!t) throw new Error("Could not find Vuetify rules injection");
    return t.aliases;
  }
  return (t == null ? void 0 : t.resolve(e)) ?? B(e);
}
const Kh = j({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...pi() }, "validation");
function Xh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rt();
  const a = Ce(e, "modelValue"), l = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = uo(e), i = L_(() => e.rules), r = O([]), s = re(true), u = _(() => !!(ct(a.value === "" ? null : a.value).length || ct(l.value === "" ? null : l.value).length)), c = _(() => {
    var _a2;
    return ((_a2 = e.errorMessages) == null ? void 0 : _a2.length) ? ct(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = _(() => {
    var _a2;
    let V = (e.validateOn ?? ((_a2 = o.validateOn) == null ? void 0 : _a2.value)) || "input";
    V === "lazy" && (V = "input lazy"), V === "eager" && (V = "input eager");
    const k = new Set((V == null ? void 0 : V.split(" ")) ?? []);
    return { input: k.has("input"), blur: k.has("blur") || k.has("input") || k.has("invalid-input"), invalidInput: k.has("invalid-input"), lazy: k.has("lazy"), eager: k.has("eager") };
  }), f = _(() => {
    var _a2;
    return e.error || ((_a2 = e.errorMessages) == null ? void 0 : _a2.length) ? false : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : true : !r.value.length : true;
  }), v = re(false), p = _(() => ({ [`${t}--error`]: f.value === false, [`${t}--dirty`]: u.value, [`${t}--disabled`]: o.isDisabled.value, [`${t}--readonly`]: o.isReadonly.value })), m = wt("validation"), h = _(() => e.name ?? Ke(n));
  lo(() => {
    var _a2;
    (_a2 = o.register) == null ? void 0 : _a2.call(o, { id: h.value, vm: m, validate: I, reset: b, resetValidation: w });
  }), jt(() => {
    var _a2;
    (_a2 = o.unregister) == null ? void 0 : _a2.call(o, h.value);
  }), It(async () => {
    var _a2;
    d.value.lazy || await I(!d.value.eager), (_a2 = o.update) == null ? void 0 : _a2.call(o, h.value, f.value, c.value);
  }), Lt(() => d.value.input || d.value.invalidInput && f.value === false, () => {
    se(l, () => {
      if (l.value != null) I();
      else if (e.focused) {
        const V = se(() => e.focused, (k) => {
          k || I(), V();
        });
      }
    });
  }), Lt(() => d.value.blur, () => {
    se(() => e.focused, (V) => {
      V || I();
    });
  }), se([f, c], () => {
    var _a2;
    (_a2 = o.update) == null ? void 0 : _a2.call(o, h.value, f.value, c.value);
  });
  async function b() {
    a.value = null, await Be(), await w();
  }
  async function w() {
    s.value = true, d.value.lazy ? r.value = [] : await I(!d.value.eager);
  }
  async function I() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const k = [];
    v.value = true;
    for (const y of i.value) {
      if (k.length >= Number(e.maxErrors ?? 1)) break;
      const x = await (typeof y == "function" ? y : () => y)(l.value);
      if (x !== true) {
        if (x !== false && typeof x != "string") {
          console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        k.push(x || "");
      }
    }
    return r.value = k, v.value = false, s.value = V, r.value;
  }
  return { errorMessages: c, isDirty: u, isDisabled: o.isDisabled, isReadonly: o.isReadonly, isPristine: s, isValid: f, isValidating: v, reset: b, resetValidation: w, validate: I, validationClasses: p };
}
const Ca = j({ id: String, appendIcon: Ie, baseColor: String, centerAffix: { type: Boolean, default: true }, color: String, glow: Boolean, iconColor: [Boolean, String], prependIcon: Ie, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ft(), "onClick:append": Ft(), ...xe(), ...bt(), ...on(Ct(), ["maxWidth", "minWidth", "width"]), ...Ye(), ...Kh() }, "VInput"), Wt = ee()({ name: "VInput", props: { ...Ca() }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { densityClasses: o } = Nt(e), { dimensionStyles: i } = _t(e), { themeClasses: r } = qe(e), { rtlClasses: s } = Pt(), { InputIcon: u } = bi(e), c = Rt(), d = _(() => e.id || `input-${c}`), { errorMessages: f, isDirty: v, isDisabled: p, isReadonly: m, isPristine: h, isValid: b, isValidating: w, reset: I, resetValidation: V, validate: k, validationClasses: y } = Xh(e, "v-input", d), C = _(() => {
    var _a2;
    return ((_a2 = e.errorMessages) == null ? void 0 : _a2.length) || !h.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  }), x = B(() => C.value.length > 0), T = B(() => !e.hideDetails || e.hideDetails === "auto" && (x.value || !!a.details)), P = _(() => T.value ? `${d.value}-messages` : void 0), M = _(() => ({ id: d, messagesId: P, isDirty: v, isDisabled: p, isReadonly: m, isPristine: h, isValid: b, isValidating: w, hasDetails: T, reset: I, resetValidation: V, validate: k })), D = B(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), E = B(() => {
    if (e.iconColor) return e.iconColor === true ? D.value : e.iconColor;
  });
  return ae(() => {
    var _a2, _b2;
    const A = !!(a.prepend || e.prependIcon), R = !!(a.append || e.appendIcon);
    return S("div", { class: ne(["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--focused": e.focused, "v-input--glow": e.glow, "v-input--hide-spin-buttons": e.hideSpinButtons }, o.value, r.value, s.value, y.value, e.class]), style: me([i.value, e.style]) }, [A && S("div", { key: "prepend", class: "v-input__prepend" }, [a.prepend ? a.prepend(M.value) : e.prependIcon && g(u, { key: "prepend-icon", name: "prepend", color: E.value }, null)]), a.default && S("div", { class: "v-input__control" }, [(_a2 = a.default) == null ? void 0 : _a2.call(a, M.value)]), R && S("div", { key: "append", class: "v-input__append" }, [a.append ? a.append(M.value) : e.appendIcon && g(u, { key: "append-icon", name: "append", color: E.value }, null)]), T.value && S("div", { id: P.value, class: "v-input__details", role: "alert", "aria-live": "polite" }, [g(Gh, { active: x.value, messages: C.value }, { message: a.message }), (_b2 = a.details) == null ? void 0 : _b2.call(a, M.value)])]);
  }), { reset: I, resetValidation: V, validate: k, isValid: b, errorMessages: f };
} }), $s = Symbol("Forwarded refs");
function Rs(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a) return a;
    n = Object.getPrototypeOf(n);
  }
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
  return e[$s] = n, new Proxy(e, { get(l, o) {
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
    var _a2;
    const i = Reflect.getOwnPropertyDescriptor(l, o);
    if (i) return i;
    if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
      for (const r of n) {
        if (!r.value) continue;
        const s = Rs(r.value, o) ?? ("_" in r.value ? Rs((_a2 = r.value._) == null ? void 0 : _a2.setupState, o) : void 0);
        if (s) return s;
      }
      for (const r of n) {
        const s = r.value && r.value[$s];
        if (!s) continue;
        const u = s.slice();
        for (; u.length; ) {
          const c = u.shift(), d = Rs(c.value, o);
          if (d) return d;
          const f = c.value && c.value[$s];
          f && u.push(...f);
        }
      }
    }
  } });
}
const O_ = j({ ...ze(Ca(), ["direction"]), ...ze(Uh(), ["inline"]) }, "VCheckbox"), N_ = ee()({ name: "VCheckbox", inheritAttrs: false, props: O_(), emits: { "update:modelValue": (e) => true, "update:focused": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { isFocused: o, focus: i, blur: r } = wa(e), s = O(), u = Rt();
  return ae(() => {
    const [c, d] = Jn(n), f = Wt.filterProps(e), v = Fn.filterProps(e);
    return g(Wt, q({ ref: s, class: ["v-checkbox", e.class] }, c, f, { modelValue: l.value, "onUpdate:modelValue": (p) => l.value = p, id: e.id || `checkbox-${u}`, focused: o.value, style: e.style }), { ...a, default: (p) => {
      let { id: m, messagesId: h, isDisabled: b, isReadonly: w, isValid: I } = p;
      return g(Fn, q(v, { id: m.value, "aria-describedby": h.value, disabled: b.value, readonly: w.value }, d, { error: I.value === false, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, onFocus: i, onBlur: r }), a);
    } });
  }), Dt({}, s);
} });
function H_(e) {
  let { selectedElement: t, containerElement: n, isRtl: a, isHorizontal: l } = e;
  const o = Zo(l, n), i = qh(l, a, n), r = Zo(l, t), s = Zh(l, t), u = r * 0.4;
  return i > s ? s - u : i + o < s + r ? s - o + r + u : i;
}
function z_(e) {
  let { selectedElement: t, containerElement: n, isHorizontal: a } = e;
  const l = Zo(a, n), o = Zh(a, t), i = Zo(a, t);
  return o - l / 2 + i / 2;
}
function _v(e, t) {
  return (t == null ? void 0 : t[e ? "scrollWidth" : "scrollHeight"]) || 0;
}
function W_(e, t) {
  return (t == null ? void 0 : t[e ? "clientWidth" : "clientHeight"]) || 0;
}
function qh(e, t, n) {
  if (!n) return 0;
  const { scrollLeft: a, offsetWidth: l, scrollWidth: o } = n;
  return e ? t ? o - l + a : a : n.scrollTop;
}
function Zo(e, t) {
  return (t == null ? void 0 : t[e ? "offsetWidth" : "offsetHeight"]) || 0;
}
function Zh(e, t) {
  return (t == null ? void 0 : t[e ? "offsetLeft" : "offsetTop"]) || 0;
}
const Uc = Symbol.for("vuetify:v-slide-group"), Gc = j({ centerActive: Boolean, scrollToActive: { type: Boolean, default: true }, contentClass: null, direction: { type: String, default: "horizontal" }, symbol: { type: null, default: Uc }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e) }, ...xe(), ...Sl({ mobile: null }), ...Re(), ...Cl({ selectedClass: "v-slide-group-item--active" }) }, "VSlideGroup"), Jo = ee()({ name: "VSlideGroup", props: Gc(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isRtl: a } = Pt(), { displayClasses: l, mobile: o } = kn(e), i = Ga(e, e.symbol), r = re(false), s = re(0), u = re(0), c = re(0), d = _(() => e.direction === "horizontal"), { resizeRef: f, contentRect: v } = In(), { resizeRef: p, contentRect: m } = In(), h = yC(), b = _(() => ({ container: f.el, duration: 200, easing: "easeOutQuart" })), w = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[0]) : -1), I = _(() => i.selected.value.length ? i.items.value.findIndex((W) => W.id === i.selected.value[i.selected.value.length - 1]) : -1);
  if (at) {
    let W = -1;
    se(() => [i.selected.value, v.value, m.value, d.value], () => {
      cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        if (v.value && m.value) {
          const L = d.value ? "width" : "height";
          u.value = v.value[L], c.value = m.value[L], r.value = u.value + 1 < c.value;
        }
        if (e.scrollToActive && w.value >= 0 && p.el) {
          const L = p.el.children[I.value];
          k(L, e.centerActive);
        }
      });
    });
  }
  const V = re(false);
  function k(W, L) {
    let U = 0;
    L ? U = z_({ containerElement: f.el, isHorizontal: d.value, selectedElement: W }) : U = H_({ containerElement: f.el, isHorizontal: d.value, isRtl: a.value, selectedElement: W }), y(U);
  }
  function y(W) {
    if (!at || !f.el) return;
    const L = Zo(d.value, f.el), U = qh(d.value, a.value, f.el);
    if (!(_v(d.value, f.el) <= L || Math.abs(W - U) < 16)) {
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
  function x(W) {
    if (V.value = true, !(!r.value || !p.el)) {
      for (const L of W.composedPath()) for (const U of p.el.children) if (U === L) {
        k(U);
        return;
      }
    }
  }
  function T(W) {
    V.value = false;
  }
  let P = false;
  function M(W) {
    var _a2;
    !P && !V.value && !(W.relatedTarget && ((_a2 = p.el) == null ? void 0 : _a2.contains(W.relatedTarget))) && R(), P = false;
  }
  function D() {
    P = true;
  }
  function E(W) {
    if (!p.el) return;
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
    if (!p.el) return;
    let L;
    if (!W) L = Ea(p.el)[0];
    else if (W === "next") {
      if (L = A(p.el.querySelector(":focus"), W), !L) return R("first");
    } else if (W === "prev") {
      if (L = A(p.el.querySelector(":focus"), W), !L) return R("last");
    } else W === "first" ? (L = p.el.firstElementChild, (L == null ? void 0 : L.hasAttribute("disabled")) && (L = A(L, "next"))) : W === "last" && (L = p.el.lastElementChild, (L == null ? void 0 : L.hasAttribute("disabled")) && (L = A(L, "prev")));
    L && L.focus({ preventScroll: true });
  }
  function G(W) {
    const L = d.value && a.value ? -1 : 1, U = (W === "prev" ? -L : L) * u.value;
    let ie = s.value + U;
    if (d.value && a.value && f.el) {
      const { scrollWidth: Se, offsetWidth: K } = f.el;
      ie += Se - K;
    }
    y(ie);
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
    const W = _v(d.value, f.el), L = W_(d.value, f.el);
    return W - L - Math.abs(s.value) > 1;
  });
  return ae(() => g(e.tag, { class: ne(["v-slide-group", { "v-slide-group--vertical": !d.value, "v-slide-group--has-affixes": H.value, "v-slide-group--is-overflowing": r.value }, l.value, e.class]), style: me(e.style), tabindex: V.value || i.selected.value.length ? -1 : 0, onFocus: M }, { default: () => {
    var _a2, _b2, _c2;
    return [H.value && S("div", { key: "prev", class: ne(["v-slide-group__prev", { "v-slide-group__prev--disabled": !F.value }]), onMousedown: D, onClick: () => F.value && G("prev") }, [((_a2 = n.prev) == null ? void 0 : _a2.call(n, N.value)) ?? g(Ko, null, { default: () => [g(Xe, { icon: a.value ? e.nextIcon : e.prevIcon }, null)] })]), S("div", { key: "container", ref: f, class: ne(["v-slide-group__container", e.contentClass]), onScroll: C }, [S("div", { ref: p, class: "v-slide-group__content", onFocusin: x, onFocusout: T, onKeydown: E }, [(_b2 = n.default) == null ? void 0 : _b2.call(n, N.value)])]), H.value && S("div", { key: "next", class: ne(["v-slide-group__next", { "v-slide-group__next--disabled": !Z.value }]), onMousedown: D, onClick: () => Z.value && G("next") }, [((_c2 = n.next) == null ? void 0 : _c2.call(n, N.value)) ?? g(Ko, null, { default: () => [g(Xe, { icon: a.value ? e.prevIcon : e.nextIcon }, null)] })])];
  } })), { selected: i.selected, scrollTo: G, scrollOffset: s, focus: R, hasPrev: F, hasNext: Z };
} }), Jh = Symbol.for("vuetify:v-chip-group"), j_ = j({ baseColor: String, column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Bt }, ...Gc({ scrollToActive: false }), ...xe(), ...Cl({ selectedClass: "v-chip--selected" }), ...Re(), ...Ye(), ...Cn({ variant: "tonal" }) }, "VChipGroup"), U_ = ee()({ name: "VChipGroup", props: j_(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ga(e, Jh);
  return yt({ VChip: { baseColor: B(() => e.baseColor), color: B(() => e.color), disabled: B(() => e.disabled), filter: B(() => e.filter), variant: B(() => e.variant) } }), ae(() => {
    const u = Jo.filterProps(e);
    return g(Jo, q(u, { class: ["v-chip-group", { "v-chip-group--column": e.column }, a.value, e.class], style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
    } });
  }), {};
} }), G_ = j({ activeClass: String, appendAvatar: String, appendIcon: Ie, baseColor: String, closable: Boolean, closeIcon: { type: Ie, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: Ie, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, modelValue: { type: Boolean, default: true }, onClick: Ft(), onClickOnce: Ft(), ...Ut(), ...xe(), ...bt(), ...Vt(), ..._l(), ...dt(), ...yi(), ...ta(), ...Re({ tag: "span" }), ...Ye(), ...Cn({ variant: "tonal" }) }, "VChip"), ha = ee()({ name: "VChip", directives: { vRipple: Ot }, props: G_(), emits: { "click:close": (e) => true, "update:modelValue": (e) => true, "group:selected": (e) => true, click: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = ot(), { borderClasses: i } = tn(e), { densityClasses: r } = Nt(e), { elevationClasses: s } = At(e), { roundedClasses: u } = gt(e), { sizeClasses: c } = oo(e), { themeClasses: d } = qe(e), f = Ce(e, "modelValue"), v = La(e, Jh, false), p = La(e, Uc, false), m = hi(e, n), h = B(() => e.link !== false && m.isLink.value), b = _(() => !e.disabled && e.link !== false && (!!v || e.link || m.isClickable.value)), w = B(() => ({ "aria-label": o(e.closeLabel), disabled: e.disabled, onClick(x) {
    x.preventDefault(), x.stopPropagation(), f.value = false, a("click:close", x);
  } }));
  se(f, (x) => {
    x ? (v == null ? void 0 : v.register(), p == null ? void 0 : p.register()) : (v == null ? void 0 : v.unregister(), p == null ? void 0 : p.unregister());
  });
  const { colorClasses: I, colorStyles: V, variantClasses: k } = ka(() => ({ color: !v || v.isSelected.value ? e.color ?? e.baseColor : e.baseColor, variant: e.variant }));
  function y(x) {
    var _a2, _b2;
    a("click", x), b.value && ((_b2 = (_a2 = m.navigate).value) == null ? void 0 : _b2.call(_a2, x), v == null ? void 0 : v.toggle());
  }
  function C(x) {
    (x.key === "Enter" || x.key === " ") && (x.preventDefault(), y(x));
  }
  return () => {
    var _a2;
    const x = m.isLink.value ? "a" : e.tag, T = !!(e.appendIcon || e.appendAvatar), P = !!(T || l.append), M = !!(l.close || e.closable), D = !!(l.filter || e.filter) && v, E = !!(e.prependIcon || e.prependAvatar), A = !!(E || l.prepend);
    return f.value && lt(g(x, q(m.linkProps, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": b.value, "v-chip--filter": D, "v-chip--pill": e.pill, [`${e.activeClass}`]: e.activeClass && ((_a2 = m.isActive) == null ? void 0 : _a2.value) }, d.value, i.value, I.value, r.value, s.value, u.value, c.value, k.value, v == null ? void 0 : v.selectedClass.value, e.class], style: [V.value, e.style], disabled: e.disabled || void 0, draggable: e.draggable, tabindex: b.value ? 0 : void 0, onClick: y, onKeydown: b.value && !h.value && C }), { default: () => {
      var _a3;
      return [xa(b.value, "v-chip"), D && g(Hc, { key: "filter" }, { default: () => [lt(S("div", { class: "v-chip__filter" }, [l.filter ? g(Fe, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, l.filter) : g(Xe, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Ln, v.isSelected.value]])] }), A && S("div", { key: "prepend", class: "v-chip__prepend" }, [l.prepend ? g(Fe, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: true }, VIcon: { icon: e.prependIcon, start: true } } }, l.prepend) : S(be, null, [e.prependIcon && g(Xe, { key: "prepend-icon", icon: e.prependIcon, start: true }, null), e.prependAvatar && g(xn, { key: "prepend-avatar", image: e.prependAvatar, start: true }, null)])]), S("div", { class: "v-chip__content", "data-no-activator": "" }, [((_a3 = l.default) == null ? void 0 : _a3.call(l, { isSelected: v == null ? void 0 : v.isSelected.value, selectedClass: v == null ? void 0 : v.selectedClass.value, select: v == null ? void 0 : v.select, toggle: v == null ? void 0 : v.toggle, value: v == null ? void 0 : v.value.value, disabled: e.disabled })) ?? Te(e.text)]), P && S("div", { key: "append", class: "v-chip__append" }, [l.append ? g(Fe, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: true, image: e.appendAvatar }, VIcon: { end: true, icon: e.appendIcon } } }, l.append) : S(be, null, [e.appendIcon && g(Xe, { key: "append-icon", end: true, icon: e.appendIcon }, null), e.appendAvatar && g(xn, { key: "append-avatar", end: true, image: e.appendAvatar }, null)])]), M && S("button", q({ key: "close", class: "v-chip__close", type: "button", "data-testid": "close-chip" }, w.value), [l.close ? g(Fe, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, l.close) : g(Xe, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[Ot, b.value && e.ripple, null]]);
  };
} }), Y_ = ["dotted", "dashed", "solid", "double"], K_ = j({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => Y_.includes(e) }, ...xe(), ...Ye() }, "VDivider"), pn = ee()({ name: "VDivider", props: K_(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { textColorClasses: o, textColorStyles: i } = $t(() => e.color), r = _(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = ve(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ve(e.thickness)), u;
  }), s = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? ve(u) : void 0, marginInline: !e.vertical && u ? ve(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${ve(c)})` : void 0 };
  });
  return ae(() => {
    const u = S("hr", { class: ne([{ "v-divider": true, "v-divider--gradient": e.gradient && !a.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class]), style: me([r.value, i.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return a.default ? S("div", { class: ne(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, S("div", { class: "v-divider__content", style: me(s.value) }, [a.default()]), u]) : u;
  }), {};
} }), pu = Symbol.for("vuetify:list");
function Qh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Ge(pu, { filterable: false, hasPrepend: re(false), updateHasPrepend: () => null, trackingIndex: re(-1), navigationStrategy: re("focus"), uid: "" }), { filterable: n, trackingIndex: a = t.trackingIndex, navigationStrategy: l = t.navigationStrategy, uid: o = t.uid || Rt() } = e, i = { filterable: t.filterable || n, hasPrepend: re(false), updateHasPrepend: (r) => {
    r && (i.hasPrepend.value = r);
  }, trackingIndex: a, navigationStrategy: l, uid: o };
  return ft(pu, i), t;
}
function ey() {
  return Ge(pu, null);
}
const Yc = (e) => {
  const t = { activate: (n) => {
    let { id: a, value: l, activated: o } = n;
    return a = Me(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
  }, in: (n, a, l) => {
    let o = /* @__PURE__ */ new Set();
    if (n != null) for (const i of ct(n)) o = t.activate({ id: i, value: true, activated: new Set(o), children: a, parents: l });
    return o;
  }, out: (n) => Array.from(n) };
  return t;
}, ty = (e) => {
  const t = Yc(e);
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
}, X_ = (e) => {
  const t = Yc(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, q_ = (e) => {
  const t = ty(e);
  return { activate: (a) => {
    let { id: l, activated: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.activate({ id: l, activated: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Z_ = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    const o = /* @__PURE__ */ new Set();
    o.add(t);
    let i = l.get(t);
    for (; i != null; ) o.add(i), i = l.get(i);
    return o;
  } else return a.delete(t), a;
}, select: () => null }, ny = { open: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (n) {
    let o = l.get(t);
    for (a.add(t); o != null && o !== t; ) a.add(o), o = l.get(o);
    return a;
  } else a.delete(t);
  return a;
}, select: () => null }, J_ = { open: ny.open, select: (e) => {
  let { id: t, value: n, opened: a, parents: l } = e;
  if (!n) return a;
  const o = [];
  let i = l.get(t);
  for (; i != null; ) o.push(i), i = l.get(i);
  return new Set(o);
} }, Kc = (e) => {
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
}, ay = (e) => {
  const t = Kc(e);
  return { select: (a) => {
    let { selected: l, id: o, ...i } = a;
    o = Me(o);
    const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...i, id: o, selected: r });
  }, in: (a, l, o, i) => (a == null ? void 0 : a.length) ? t.in(a.slice(0, 1), l, o, i) : /* @__PURE__ */ new Map(), out: (a, l, o) => t.out(a, l, o) };
}, Q_ = (e) => {
  const t = Kc(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, eV = (e) => {
  const t = ay(e);
  return { select: (a) => {
    let { id: l, selected: o, children: i, ...r } = a;
    return l = Me(l), i.has(l) ? o : t.select({ id: l, selected: o, children: i, ...r });
  }, in: t.in, out: t.out };
}, Xc = (e) => {
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
      for (const p of i.get(d)) {
        const m = Me(p);
        if (!s.has(m) && (o.get(m) !== "on" && (f = false), o.has(m) && o.get(m) !== "off" && (v = false), !f && !v)) break;
      }
      o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = Me(r.get(d));
    }
    return e && !l && Array.from(o.entries()).reduce((v, p) => {
      let [m, h] = p;
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
}, tV = (e) => {
  const t = Xc(e);
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
}, nV = (e) => {
  const n = { select: Xc(e).select, in: (a, l, o, i) => {
    let r = /* @__PURE__ */ new Map();
    for (const s of a || []) l.has(s) || (r = n.select({ id: s, value: true, selected: r, children: l, parents: o, disabled: i }));
    return r;
  }, out: (a) => {
    const l = [];
    for (const [o, i] of a.entries()) (i === "on" || i === "indeterminate") && l.push(o);
    return l;
  } };
  return n;
}, Ql = Symbol.for("vuetify:nested"), ly = { id: re(), root: { itemsRegistration: O("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: O(/* @__PURE__ */ new Map()), parents: O(/* @__PURE__ */ new Map()), disabled: O(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: O(false), scrollToActive: O(false), selectable: O(false), opened: O(/* @__PURE__ */ new Set()), activated: O(/* @__PURE__ */ new Set()), selected: O(/* @__PURE__ */ new Map()), selectedValues: O([]), getPath: () => [] } }, aV = j({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), lV = (e, t) => {
  let { items: n, returnObject: a, scrollToActive: l } = t, o = false;
  const i = re(/* @__PURE__ */ new Map()), r = re(/* @__PURE__ */ new Map()), s = re(/* @__PURE__ */ new Set()), u = Ce(e, "opened", e.opened, (k) => new Set(Array.isArray(k) ? k.map((y) => Me(y)) : k), (k) => [...k.values()]), c = _(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return X_(e.mandatory);
      case "single-leaf":
        return q_(e.mandatory);
      case "independent":
        return Yc(e.mandatory);
      case "single-independent":
      default:
        return ty(e.mandatory);
    }
  }), d = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return eV(e.mandatory);
      case "leaf":
        return Q_(e.mandatory);
      case "independent":
        return Kc(e.mandatory);
      case "single-independent":
        return ay(e.mandatory);
      case "trunk":
        return tV(e.mandatory);
      case "branch":
        return nV(e.mandatory);
      case "classic":
      default:
        return Xc(e.mandatory);
    }
  }), f = _(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return J_;
      case "single":
        return Z_;
      case "multiple":
      default:
        return ny;
    }
  }), v = Ce(e, "activated", e.activated, (k) => c.value.in(k, i.value, r.value), (k) => c.value.out(k, i.value, r.value)), p = Ce(e, "selected", e.selected, (k) => d.value.in(k, i.value, r.value, s.value), (k) => d.value.out(k, i.value, r.value));
  jt(() => {
    o = true;
  });
  function m(k) {
    const y = [];
    let C = Me(k);
    for (; C !== void 0; ) y.unshift(C), C = r.value.get(C);
    return y;
  }
  const h = wt("nested"), b = /* @__PURE__ */ new Set(), w = g1(() => {
    Be(() => {
      i.value = new Map(i.value), r.value = new Map(r.value);
    });
  }, 100);
  se(() => [n.value, st(a)], () => {
    e.itemsRegistration === "props" && I();
  }, { immediate: true });
  function I() {
    const k = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), x = st(a) ? (M) => Me(M.raw) : (M) => M.value, T = [...n.value];
    let P = 0;
    for (; P < T.length; ) {
      const M = T[P++], D = x(M);
      if (M.children) {
        const E = [];
        for (const A of M.children) {
          const R = x(A);
          k.set(R, D), E.push(R), T.push(A);
        }
        y.set(D, E);
      }
      M.props.disabled && C.add(D);
    }
    i.value = y, r.value = k, s.value = C;
  }
  const V = { id: re(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => st(l)), selectable: B(() => e.selectable), activated: v, selected: p, selectedValues: _(() => {
    const k = [];
    for (const [y, C] of p.value.entries()) C === "on" && k.push(y);
    return k;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (k, y, C, x) => {
    if (b.has(k)) {
      m(k).map(String).join(" -> "), m(y).concat(k).map(String).join(" -> ");
      return;
    } else b.add(k);
    y && k !== y && r.value.set(k, y), C && s.value.add(k), x && i.value.set(k, []), y != null && i.value.set(y, [...i.value.get(y) || [], k]), w();
  }, unregister: (k) => {
    if (o) return;
    b.delete(k), i.value.delete(k), s.value.delete(k);
    const y = r.value.get(k);
    if (y) {
      const C = i.value.get(y) ?? [];
      i.value.set(y, C.filter((x) => x !== k));
    }
    r.value.delete(k), w();
  }, updateDisabled: (k, y) => {
    y ? s.value.add(k) : s.value.delete(k);
  }, open: (k, y, C) => {
    h.emit("click:open", { id: k, value: y, path: m(k), event: C });
    const x = f.value.open({ id: k, value: y, opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    x && (u.value = x);
  }, openOnSelect: (k, y, C) => {
    const x = f.value.select({ id: k, value: y, selected: new Map(p.value), opened: new Set(u.value), children: i.value, parents: r.value, event: C });
    x && (u.value = x);
  }, select: (k, y, C) => {
    h.emit("click:select", { id: k, value: y, path: m(k), event: C });
    const x = d.value.select({ id: k, value: y, selected: new Map(p.value), children: i.value, parents: r.value, disabled: s.value, event: C });
    x && (p.value = x), V.root.openOnSelect(k, y, C);
  }, activate: (k, y, C) => {
    if (!e.activatable) return V.root.select(k, true, C);
    h.emit("click:activate", { id: k, value: y, path: m(k), event: C });
    const x = c.value.activate({ id: k, value: y, activated: new Set(v.value), children: i.value, parents: r.value, event: C });
    if (x.size !== v.value.size) v.value = x;
    else {
      for (const T of x) if (!v.value.has(T)) {
        v.value = x;
        return;
      }
      for (const T of v.value) if (!x.has(T)) {
        v.value = x;
        return;
      }
    }
  }, children: i, parents: r, disabled: s, getPath: m } };
  return ft(Ql, V), V.root;
}, oy = (e, t, n) => {
  const a = Ge(Ql, ly), l = Symbol("nested item"), o = _(() => {
    const r = Me(st(e));
    return r !== void 0 ? r : l;
  }), i = { ...a, id: o, open: (r, s) => a.root.open(o.value, r, s), openOnSelect: (r, s) => a.root.openOnSelect(o.value, r, s), isOpen: _(() => a.root.opened.value.has(o.value)), parent: _(() => a.root.parents.value.get(o.value)), activate: (r, s) => a.root.activate(o.value, r, s), isActivated: _(() => a.root.activated.value.has(o.value)), scrollToActive: a.root.scrollToActive, select: (r, s) => a.root.select(o.value, r, s), isSelected: _(() => a.root.selected.value.get(o.value) === "on"), isIndeterminate: _(() => a.root.selected.value.get(o.value) === "indeterminate"), isLeaf: _(() => !a.root.children.value.get(o.value)), isGroupActivator: a.isGroupActivator };
  return lo(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || Be(() => {
      a.root.register(o.value, a.id.value, st(t), n);
    });
  }), jt(() => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || a.root.unregister(o.value);
  }), se(o, (r, s) => {
    a.isGroupActivator || a.root.itemsRegistration.value === "props" || (a.root.unregister(s), Be(() => {
      a.root.register(r, a.id.value, st(t), n);
    }));
  }), se(() => st(t), (r) => {
    a.root.updateDisabled(o.value, r);
  }), n && ft(Ql, i), i;
}, oV = () => {
  const e = Ge(Ql, ly);
  ft(Ql, { ...e, isGroupActivator: true });
}, iV = en({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return oV(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), iy = j({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ie, default: "$collapse" }, disabled: Boolean, expandIcon: { type: Ie, default: "$expand" }, rawId: [String, Number], prependIcon: Ie, appendIcon: Ie, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...xe(), ...Re() }, "VListGroup"), Qo = ee()({ name: "VListGroup", props: iy(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: a, open: l, id: o } = oy(() => e.value, () => e.disabled, true), i = _(() => `v-list-group--id-${String(e.rawId ?? o.value)}`), r = ey(), { isBooted: s } = wl(), u = Ge(Ql), c = B(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function d(m) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = m.target) == null ? void 0 : _a2.tagName) || l(!a.value, m);
  }
  const f = _(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = _(() => a.value ? e.collapseIcon : e.expandIcon), p = _(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return ae(() => g(e.tag, { class: ne(["v-list-group", { "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": a.value }, e.class]), style: me(e.style) }, { default: () => [n.activator && g(Fe, { defaults: p.value }, { default: () => [g(iV, null, { default: () => [n.activator({ props: f.value, isOpen: a.value })] })] }), g(Qt, { transition: { component: Nr }, disabled: !s.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? lt(S("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[Ln, a.value]]) : a.value && S("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: a };
} }), rV = j({ opacity: [Number, String], ...xe(), ...Re() }, "VListItemSubtitle"), ry = ee()({ name: "VListItemSubtitle", props: rV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-list-item-subtitle", e.class]), style: me([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), sy = pa("v-list-item-title"), uy = j({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ie, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Ft(), onClickOnce: Ft(), ...Ut(), ...xe(), ...bt(), ...Ct(), ...Vt(), ...dt(), ...yi(), ...Re(), ...Ye(), ...Cn({ variant: "text" }) }, "VListItem"), Pn = ee()({ name: "VListItem", directives: { vRipple: Ot }, props: uy(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const o = hi(e, n), i = O(), r = _(() => e.value === void 0 ? o.href.value : e.value), { activate: s, isActivated: u, select: c, isOpen: d, isSelected: f, isIndeterminate: v, isGroupActivator: p, root: m, parent: h, openOnSelect: b, scrollToActive: w, id: I } = oy(r, () => e.disabled, false), V = ey(), k = _(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = o.isActive) == null ? void 0 : _a2.value) || (m.activatable.value ? u.value : f.value));
  }), y = B(() => e.link !== false && o.isLink.value), C = _(() => !!V && (m.selectable.value || m.activatable.value || e.value != null)), x = _(() => !e.disabled && e.link !== false && (e.link || o.isClickable.value || C.value)), T = _(() => V && V.navigationStrategy.value === "track" && e.index !== void 0 && V.trackingIndex.value === e.index), P = _(() => V ? y.value ? "link" : C.value ? "option" : "listitem" : void 0), M = _(() => {
    if (C.value) return m.activatable.value ? u.value : m.selectable.value ? f.value : k.value;
  }), D = B(() => e.rounded || e.nav), E = B(() => e.color ?? e.activeColor), A = B(() => ({ color: k.value ? E.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  se(() => {
    var _a2;
    return (_a2 = o.isActive) == null ? void 0 : _a2.value;
  }, (_e) => {
    _e && R();
  }), se(u, (_e) => {
    var _a2;
    !_e || !w || ((_a2 = i.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), se(T, (_e) => {
    var _a2;
    _e && ((_a2 = i.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), lo(() => {
    var _a2;
    ((_a2 = o.isActive) == null ? void 0 : _a2.value) && Be(() => R());
  });
  function R() {
    h.value != null && m.open(h.value, true), b(true);
  }
  const { themeClasses: G } = qe(e), { borderClasses: N } = tn(e), { colorClasses: Y, colorStyles: H, variantClasses: F } = ka(A), { densityClasses: Z } = Nt(e), { dimensionStyles: W } = _t(e), { elevationClasses: L } = At(e), { roundedClasses: U } = gt(D), ie = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Se = B(() => e.ripple !== void 0 && e.ripple && (V == null ? void 0 : V.filterable) ? { keys: ["Enter"] } : e.ripple), K = _(() => ({ isActive: k.value, select: c, isOpen: d.value, isSelected: f.value, isIndeterminate: v.value, isDisabled: e.disabled }));
  function fe(_e) {
    var _a2, _b2, _c2;
    l("click", _e), !["INPUT", "TEXTAREA"].includes((_a2 = _e.target) == null ? void 0 : _a2.tagName) && x.value && ((_c2 = (_b2 = o.navigate).value) == null ? void 0 : _c2.call(_b2, _e), !p && (m.activatable.value ? s(!u.value, _e) : (m.selectable.value || e.value != null && !y.value) && c(!f.value, _e)));
  }
  function De(_e) {
    const ye = _e.target;
    ["INPUT", "TEXTAREA"].includes(ye.tagName) || (_e.key === "Enter" || _e.key === " " && !(V == null ? void 0 : V.filterable)) && (_e.preventDefault(), _e.stopPropagation(), _e.target.dispatchEvent(new MouseEvent("click", _e)));
  }
  return ae(() => {
    const _e = y.value ? "a" : e.tag, ye = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, Q = !!(!!(e.appendAvatar || e.appendIcon) || a.append), oe = !!(!!(e.prependAvatar || e.prependIcon) || a.prepend);
    return V == null ? void 0 : V.updateHasPrepend(oe), e.activeColor && Og("active-color", ["color", "base-color"]), lt(g(_e, q(o.linkProps, { ref: i, id: e.index !== void 0 && V ? `v-list-item-${V.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": k.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !oe && (V == null ? void 0 : V.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": T.value, [`${e.activeClass}`]: e.activeClass && k.value }, G.value, N.value, Y.value, Z.value, L.value, ie.value, U.value, F.value, e.class], style: [{ "--v-list-prepend-gap": ve(e.prependGap) }, H.value, W.value, e.style], tabindex: e.tabindex ?? (x.value ? V ? -2 : 0 : void 0), "aria-selected": M.value, role: P.value, onClick: fe, onKeydown: x.value && !y.value && De }), { default: () => {
      var _a2;
      return [xa(x.value || k.value, "v-list-item"), oe && S("div", { key: "prepend", class: "v-list-item__prepend" }, [a.prepend ? g(Fe, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = a.prepend) == null ? void 0 : _a3.call(a, K.value)];
      } }) : S(be, null, [e.prependAvatar && g(xn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(Xe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), S("div", { class: "v-list-item__spacer" }, null)]), S("div", { class: "v-list-item__content", "data-no-activator": "" }, [ye && g(sy, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = a.title) == null ? void 0 : _a3.call(a, { title: e.title })) ?? Te(e.title)];
      } }), $ && g(ry, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = a.subtitle) == null ? void 0 : _a3.call(a, { subtitle: e.subtitle })) ?? Te(e.subtitle)];
      } }), (_a2 = a.default) == null ? void 0 : _a2.call(a, K.value)]), Q && S("div", { key: "append", class: "v-list-item__append" }, [a.append ? g(Fe, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = a.append) == null ? void 0 : _a3.call(a, K.value)];
      } }) : S(be, null, [e.appendIcon && g(Xe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(xn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), S("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Ot, x.value && Se.value]]);
  }), { activate: s, isActivated: u, isGroupActivator: p, isSelected: f, list: V, select: c, root: m, id: I, link: o };
} }), sV = j({ color: String, inset: Boolean, sticky: Boolean, title: String, ...xe(), ...Re() }, "VListSubheader"), co = ee()({ name: "VListSubheader", props: sV(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = $t(() => e.color);
  return ae(() => {
    const o = !!(n.default || e.title);
    return g(e.tag, { class: ne(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, a.value, e.class]), style: me([{ textColorStyles: l }, e.style]) }, { default: () => {
      var _a2;
      return [o && S("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), uV = j({ items: Array, returnObject: Boolean }, "VListChildren"), cy = ee()({ name: "VListChildren", props: uV(), setup(e, t) {
  let { slots: n } = t;
  return Qh(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((a, l) => {
      var _a3, _b3;
      let { children: o, props: i, type: r, raw: s } = a;
      if (r === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: i })) ?? g(pn, i, null);
      if (r === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: i })) ?? g(co, i, null);
      const u = { subtitle: n.subtitle ? (d) => {
        var _a4;
        return (_a4 = n.subtitle) == null ? void 0 : _a4.call(n, { ...d, item: s });
      } : void 0, prepend: n.prepend ? (d) => {
        var _a4;
        return (_a4 = n.prepend) == null ? void 0 : _a4.call(n, { ...d, item: s });
      } : void 0, append: n.append ? (d) => {
        var _a4;
        return (_a4 = n.append) == null ? void 0 : _a4.call(n, { ...d, item: s });
      } : void 0, title: n.title ? (d) => {
        var _a4;
        return (_a4 = n.title) == null ? void 0 : _a4.call(n, { ...d, item: s });
      } : void 0 }, c = Qo.filterProps(i);
      return o ? g(Qo, q(c, { value: e.returnObject ? s : i == null ? void 0 : i.value, rawId: i == null ? void 0 : i.value }), { activator: (d) => {
        let { props: f } = d;
        const v = q(i, f, { value: e.returnObject ? s : i.value });
        return n.header ? n.header({ props: v }) : g(Pn, q(v, { index: l }), u);
      }, default: () => g(cy, { items: o, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...i, index: l } }) : g(Pn, q(i, { index: l, value: e.returnObject ? s : i.value }), u);
    }));
  };
} }), dy = j({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), cV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function An(e, t) {
  const n = xt(t, e.itemTitle, t), a = xt(t, e.itemValue, n), l = xt(t, e.itemChildren), o = e.itemProps === true ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? ze(t, ["children"]) : t : void 0 : xt(t, e.itemProps);
  let i = xt(t, e.itemType, "item");
  cV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: String(r.title ?? ""), value: r.value, props: r, children: i === "item" && Array.isArray(l) ? fy(e, l) : void 0, raw: t };
}
An.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function fy(e, t) {
  const n = on(e, An.neededProps), a = [];
  for (const l of t) a.push(An(n, l));
  return a;
}
function qc(e) {
  const t = _(() => fy(e, e.items)), n = _(() => t.value.some((r) => r.value === null)), a = re(/* @__PURE__ */ new Map()), l = re([]);
  mt(() => {
    const r = t.value, s = /* @__PURE__ */ new Map(), u = [];
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      if (Fa(d.value) || d.value === null) {
        let f = s.get(d.value);
        f || (f = [], s.set(d.value, f)), f.push(d);
      } else u.push(d);
    }
    a.value = s, l.value = u;
  });
  function o(r) {
    const s = a.value, u = t.value, c = l.value, d = n.value, f = e.returnObject, v = !!e.valueComparator, p = e.valueComparator || Bt, m = on(e, An.neededProps), h = [];
    e: for (const b of r) {
      if (!d && b === null) continue;
      if (f && typeof b == "string") {
        h.push(An(m, b));
        continue;
      }
      const w = s.get(b);
      if (v || !w) {
        for (const I of v ? u : c) if (p(b, I.value)) {
          h.push(I);
          continue e;
        }
        h.push(An(m, b));
        continue;
      }
      h.push(...w);
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
const dV = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function fV(e, t) {
  const n = Fa(t) ? t : xt(t, e.itemTitle), a = Fa(t) ? t : xt(t, e.itemValue, void 0), l = xt(t, e.itemChildren), o = e.itemProps === true ? ze(t, ["children"]) : xt(t, e.itemProps);
  let i = xt(t, e.itemType, "item");
  dV.has(i) || (i = "item");
  const r = { title: n, value: a, ...o };
  return { type: i, title: r.title, value: r.value, props: r, children: i === "item" && l ? vy(e, l) : void 0, raw: t };
}
function vy(e, t) {
  const n = [];
  for (const a of t) n.push(fV(e, a));
  return n;
}
function my(e) {
  return { items: _(() => vy(e, e.items)) };
}
const gy = j({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: Ie, collapseIcon: Ie, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Ft(), "onClick:select": Ft(), "onUpdate:opened": Ft(), ...aV({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ut(), ...xe(), ...bt(), ...Ct(), ...Vt(), ...dy(), ...dt(), ...Re(), ...Ye(), ...Cn({ variant: "text" }) }, "VList"), eo = ee()({ name: "VList", props: gy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a, emit: l } = t;
  const { items: o } = my(e), { themeClasses: i } = qe(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Je(() => e.bgColor), { borderClasses: u } = tn(e), { densityClasses: c } = Nt(e), { dimensionStyles: d } = _t(e), { elevationClasses: f } = At(e), { roundedClasses: v } = gt(e), { children: p, open: m, parents: h, select: b, getPath: w } = lV(e, { items: o, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), I = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), V = B(() => e.activeColor), k = B(() => e.baseColor), y = B(() => e.color), C = B(() => e.selectable || e.activatable), x = Ce(e, "navigationIndex", -1, (Z) => Z ?? -1), T = Rt();
  Qh({ filterable: e.filterable, trackingIndex: x, navigationStrategy: B(() => e.navigationStrategy), uid: T }), se(o, () => {
    e.navigationStrategy === "track" && (x.value = -1);
  }), yt({ VListGroup: { activeColor: V, baseColor: k, color: y, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: V, baseColor: k, color: y, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const P = re(false), M = O();
  function D(Z) {
    P.value = true;
  }
  function E(Z) {
    P.value = false;
  }
  function A(Z) {
    var _a2;
    e.navigationStrategy === "track" ? ~x.value || (x.value = N("first")) : !P.value && !(Z.relatedTarget && ((_a2 = M.value) == null ? void 0 : _a2.contains(Z.relatedTarget))) && F();
  }
  function R() {
    e.navigationStrategy === "track" && (x.value = -1);
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
    Z === "first" ? L = 0 : Z === "last" ? L = W - 1 : (L = x.value + (Z === "next" ? 1 : -1), L < 0 && (L = W - 1), L >= W && (L = 0));
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
      U !== -1 && (x.value = U);
    } else F(L);
  }
  function H(Z) {
    P.value = true;
  }
  function F(Z) {
    if (M.value) return ll(M.value, Z);
  }
  return ae(() => {
    const Z = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), W = C.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return g(e.tag, { ref: M, class: ne(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, i.value, r.value, u.value, c.value, f.value, I.value, v.value, e.class]), style: me([{ "--v-list-indent": ve(Z), "--v-list-group-prepend": Z ? "0px" : void 0, "--v-list-prepend-gap": ve(e.prependGap) }, s.value, d.value, e.style]), tabindex: e.disabled ? -1 : 0, role: C.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && x.value >= 0 ? `v-list-item-${T}-${x.value}` : void 0, "aria-multiselectable": W, onFocusin: D, onFocusout: E, onFocus: A, onBlur: R, onKeydown: Y, onMousedown: H }, { default: () => [g(cy, { items: o.value, returnObject: e.returnObject }, a)] });
  }), { open: m, select: b, focus: F, children: p, parents: h, getPath: w, navigationIndex: x };
} }), vV = pa("v-list-img"), mV = j({ start: Boolean, end: Boolean, ...xe(), ...Re() }, "VListItemAction"), Zc = ee()({ name: "VListItemAction", props: mV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-list-item-action", { "v-list-item-action--start": e.start, "v-list-item-action--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} }), gV = j({ start: Boolean, end: Boolean, ...xe(), ...Re() }, "VListItemMedia"), hV = ee()({ name: "VListItemMedia", props: gV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-list-item-media", { "v-list-item-media--start": e.start, "v-list-item-media--end": e.end }, e.class]), style: me(e.style) }, n)), {};
} });
function Fs(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function yV(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vv(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: a } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Fs({ x: l, y: o }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: a } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Fs({ x: l, y: o }, t);
  }
  return Fs({ x: t.width / 2, y: t.height / 2 }, t);
}
const hy = { static: SV, connected: kV }, bV = j({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in hy }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function pV(e, t) {
  const n = O({}), a = O();
  at && Lt(() => !!(t.isActive.value && e.locationStrategy), (r) => {
    var _a2, _b2;
    se(() => e.locationStrategy, r), St(() => {
      window.removeEventListener("resize", l), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", o), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", i), a.value = void 0;
    }), window.addEventListener("resize", l, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", o, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", i, { passive: true }), typeof e.locationStrategy == "function" ? a.value = (_a2 = e.locationStrategy(t, e, n)) == null ? void 0 : _a2.updateLocation : a.value = (_b2 = hy[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function l(r) {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.call(a, r);
  }
  function o(r) {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.call(a, r);
  }
  function i(r) {
    var _a2;
    (_a2 = a.value) == null ? void 0 : _a2.call(a, r);
  }
  return { contentStyles: n, updateLocation: a };
}
function SV() {
}
function xV(e, t) {
  const n = Vc(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function kV(e, t, n) {
  (Array.isArray(e.target.value) || m1(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = _c(() => {
    const b = ou(t.location, e.isRtl.value), w = t.origin === "overlap" ? b : t.origin === "auto" ? Ts(b) : ou(t.origin, e.isRtl.value);
    return b.side === w.side && b.align === As(w).align ? { preferredAnchor: Uf(b), preferredOrigin: Uf(w) } : { preferredAnchor: b, preferredOrigin: w };
  }), [i, r, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((b) => _(() => {
    const w = parseFloat(t[b]);
    return isNaN(w) ? 1 / 0 : w;
  })), c = _(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const b = t.offset.split(" ").map(parseFloat);
      return b.length < 2 && b.push(0), b;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let d = false, f = -1;
  const v = new Gg(4), p = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((w) => {
      w !== f && v.clear(), requestAnimationFrame((I) => {
        f = I;
      });
    }), v.isFull) {
      const w = v.values();
      if (Bt(w.at(-1), w.at(-3)) && !Bt(w.at(-1), w.at(-2))) return;
    }
    const b = h();
    b && v.push(b.flipped);
  });
  let m = new Vn({ x: 0, y: 0, width: 0, height: 0 });
  se(e.target, (b, w) => {
    w && !Array.isArray(w) && p.unobserve(w), Array.isArray(b) ? Bt(b, w) || h() : b && p.observe(b);
  }, { immediate: true }), se(e.contentEl, (b, w) => {
    w && p.unobserve(w), b && p.observe(b);
  }, { immediate: true }), St(() => {
    p.disconnect();
  });
  function h() {
    if (d = false, requestAnimationFrame(() => d = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (m = qg(e.target.value));
    const b = xV(e.contentEl.value, e.isRtl.value), w = sr(e.contentEl.value), I = Number(t.viewportMargin);
    w.length || (w.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const V = w.reduce((E, A) => {
      const R = $0(A);
      return E ? new Vn({ x: Math.max(E.left, R.left), y: Math.max(E.top, R.top), width: Math.min(E.right, R.right) - Math.max(E.left, R.left), height: Math.min(E.bottom, R.bottom) - Math.max(E.top, R.top) }) : R;
    }, void 0);
    t.stickToTarget ? (V.x += Math.min(I, m.x), V.y += Math.min(I, m.y), V.width = Math.max(V.width - I * 2, m.x + m.width - I), V.height = Math.max(V.height - I * 2, m.y + m.height - I)) : (V.x += I, V.y += I, V.width -= I * 2, V.height -= I * 2);
    let k = { anchor: l.value, origin: o.value };
    function y(E) {
      const A = new Vn(b), R = Vv(E.anchor, m), G = Vv(E.origin, A);
      let { x: N, y: Y } = yV(R, G);
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
      return A.x += N, A.y += Y, A.width = Math.min(A.width, s.value), A.height = Math.min(A.height, u.value), { overflows: Yf(A, V), x: N, y: Y };
    }
    let C = 0, x = 0;
    const T = { x: 0, y: 0 }, P = { x: false, y: false };
    let M = -1;
    for (; !(M++ > 10); ) {
      const { x: E, y: A, overflows: R } = y(k);
      C += E, x += A, b.x += E, b.y += A;
      {
        const G = Gf(k.anchor), N = R.x.before || R.x.after, Y = R.y.before || R.y.after;
        let H = false;
        if (["x", "y"].forEach((F) => {
          if (F === "x" && N && !P.x || F === "y" && Y && !P.y) {
            const Z = { anchor: { ...k.anchor }, origin: { ...k.origin } }, W = F === "x" ? G === "y" ? As : Ts : G === "y" ? Ts : As;
            Z.anchor = W(Z.anchor), Z.origin = W(Z.origin);
            const { overflows: L } = y(Z);
            (L[F].before <= R[F].before && L[F].after <= R[F].after || L[F].before + L[F].after < (R[F].before + R[F].after) / 2) && (k = Z, H = P[F] = true);
          }
        }), H) continue;
      }
      R.x.before && (C += R.x.before, b.x += R.x.before), R.x.after && (C -= R.x.after, b.x -= R.x.after), R.y.before && (x += R.y.before, b.y += R.y.before), R.y.after && (x -= R.y.after, b.y -= R.y.after);
      {
        const G = Yf(b, V);
        T.x = V.width - G.x.before - G.x.after, T.y = V.height - G.y.before - G.y.after, C += G.x.before, b.x += G.x.before, x += G.y.before, b.y += G.y.before;
      }
      break;
    }
    const D = Gf(k.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${k.anchor.side} ${k.anchor.align}`, transformOrigin: `${k.origin.side} ${k.origin.align}`, top: ve(Ls(x)), left: e.isRtl.value ? void 0 : ve(Ls(C)), right: e.isRtl.value ? ve(Ls(-C)) : void 0, minWidth: ve(D === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ve(Iv(nt(T.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ve(Iv(nt(T.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: T, contentBox: b, flipped: P };
  }
  return se(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => h()), Be(() => {
    const b = h();
    if (!b) return;
    const { available: w, contentBox: I } = b;
    I.height > w.y && requestAnimationFrame(() => {
      h(), requestAnimationFrame(() => {
        h();
      });
    });
  }), { updateLocation: h };
}
function Ls(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Iv(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Su = true;
const vr = [];
function wV(e) {
  !Su || vr.length ? (vr.push(e), xu()) : (Su = false, e(), xu());
}
let Pv = -1;
function xu() {
  cancelAnimationFrame(Pv), Pv = requestAnimationFrame(() => {
    const e = vr.shift();
    e && e(), vr.length ? xu() : Su = true;
  });
}
const yy = { none: null, close: VV, block: IV, reposition: PV }, CV = j({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in yy } }, "VOverlay-scroll-strategies");
function _V(e, t) {
  if (!at) return;
  let n;
  mt(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Ul(), await new Promise((a) => setTimeout(a)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = yy[e.scrollStrategy]) == null ? void 0 : _a2.call(yy, t, e, n);
    }));
  }), St(() => {
    n == null ? void 0 : n.stop();
  });
}
function VV(e) {
  function t(n) {
    e.isActive.value = false;
  }
  by(Jc(e.target.value, e.contentEl.value), t);
}
function IV(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, a = Jc(e.target.value, e.contentEl.value), l = [.../* @__PURE__ */ new Set([...sr(a, t.contained ? n : void 0), ...sr(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Ac(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", ve(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ve(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ve(o)), r.classList.add("v-overlay-scroll-blocked");
  }), St(() => {
    l.forEach((r, s) => {
      const u = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -u, r.scrollTop = -c, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function PV(e, t, n) {
  let a = false, l = -1, o = -1;
  function i(r) {
    wV(() => {
      var _a2, _b2;
      const s = performance.now();
      (_b2 = (_a2 = e.updateLocation).value) == null ? void 0 : _b2.call(_a2, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      by(Jc(e.target.value, e.contentEl.value), (r) => {
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
function Jc(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function by(e, t) {
  const n = [document, ...sr(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, { passive: true });
  }), St(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const ku = Symbol.for("vuetify:v-menu"), Qc = j({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function ed(e, t) {
  let n = () => {
  };
  function a(i, r) {
    n == null ? void 0 : n();
    const s = i ? e.openDelay : e.closeDelay, u = Math.max((r == null ? void 0 : r.minDelay) ?? 0, Number(s ?? 0));
    return new Promise((c) => {
      n = T0(u, () => {
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
const TV = j({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Qc() }, "VOverlay-activator");
function AV(e, t) {
  let { isActive: n, isTop: a, contentEl: l } = t;
  const o = wt("useActivator"), i = O();
  let r = false, s = false, u = true;
  const c = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: f, runCloseDelay: v } = ed(e, (x) => {
    x === (e.openOnHover && r || c.value && s) && !(e.openOnHover && n.value && !a.value) && (n.value !== x && (u = true), n.value = x);
  }), p = O(), m = { onClick: (x) => {
    x.stopPropagation(), i.value = x.currentTarget || x.target, n.value || (p.value = [x.clientX, x.clientY]), n.value = !n.value;
  }, onMouseenter: (x) => {
    r = true, i.value = x.currentTarget || x.target, f();
  }, onMouseleave: (x) => {
    r = false, v();
  }, onFocus: (x) => {
    Xl(x.target, ":focus-visible") !== false && (s = true, x.stopPropagation(), i.value = x.currentTarget || x.target, f());
  }, onBlur: (x) => {
    s = false, x.stopPropagation(), v({ minDelay: 1 });
  } }, h = _(() => {
    const x = {};
    return d.value && (x.onClick = m.onClick), e.openOnHover && (x.onMouseenter = m.onMouseenter, x.onMouseleave = m.onMouseleave), c.value && (x.onFocus = m.onFocus, x.onBlur = m.onBlur), x;
  }), b = _(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      r = true, f();
    }, x.onMouseleave = () => {
      r = false, v();
    }), c.value && (x.onFocusin = (T) => {
      T.target.matches(":focus-visible") && (s = true, f());
    }, x.onFocusout = () => {
      s = false, v({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const T = Ge(ku, null);
      x.onClick = () => {
        n.value = false, T == null ? void 0 : T.closeParents();
      };
    }
    return x;
  }), w = _(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      u && (r = true, u = false, f());
    }, x.onMouseleave = () => {
      r = false, v();
    }), x;
  });
  se(a, (x) => {
    var _a2;
    x && (e.openOnHover && !r && (!c.value || !s) || c.value && !s && (!e.openOnHover || !r)) && !((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), se(n, (x) => {
    x || setTimeout(() => {
      p.value = void 0;
    });
  }, { flush: "post" });
  const I = zo();
  mt(() => {
    I.value && Be(() => {
      i.value = I.el;
    });
  });
  const V = zo(), k = _(() => e.target === "cursor" && p.value ? p.value : V.value ? V.el : py(e.target, o) || i.value), y = _(() => Array.isArray(k.value) ? void 0 : k.value);
  let C;
  return se(() => !!e.activator, (x) => {
    x && at ? (C = Ul(), C.run(() => {
      DV(e, o, { activatorEl: i, activatorEvents: h });
    })) : C && C.stop();
  }, { flush: "post", immediate: true }), St(() => {
    C == null ? void 0 : C.stop();
  }), { activatorEl: i, activatorRef: I, target: k, targetEl: y, targetRef: V, activatorEvents: h, contentEvents: b, scrimEvents: w };
}
function DV(e, t, n) {
  let { activatorEl: a, activatorEvents: l } = n;
  se(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const c = r(u);
      c && i(c);
    }
    s && Be(() => o());
  }, { immediate: true }), se(() => e.activatorProps, () => {
    o();
  }), St(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && R0(s, q(l.value, u));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && F0(s, q(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = py(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function py(e, t) {
  var _a2, _b2;
  if (!e) return;
  let n;
  if (e === "parent") {
    let a = (_b2 = (_a2 = t == null ? void 0 : t.proxy) == null ? void 0 : _a2.$el) == null ? void 0 : _b2.parentNode;
    for (; a == null ? void 0 : a.hasAttribute("data-no-activator"); ) a = a.parentNode;
    n = a;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
const Sy = j({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), ji = /* @__PURE__ */ new Map();
let Tv = 0;
function Av(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(ji.values()).filter((u) => {
    var _a2;
    let { isActive: c, contentEl: d } = u;
    return c.value && ((_a2 = d.value) == null ? void 0 : _a2.contains(t));
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
  const o = Ea(a).filter((u) => u.tabIndex >= 0);
  if (!o.length) return;
  const i = document.activeElement;
  if (o.length === 1 && o[0].classList.contains("v-list") && o[0].contains(i)) {
    e.preventDefault();
    return;
  }
  const r = o[0], s = o[o.length - 1];
  e.shiftKey && (i === r || r.classList.contains("v-list") && r.contains(i)) && (e.preventDefault(), s.focus()), !e.shiftKey && (i === s || s.classList.contains("v-list") && s.contains(i)) && (e.preventDefault(), r.focus());
}
function xy(e, t) {
  let { isActive: n, localTop: a, activatorEl: l, contentEl: o } = t;
  const i = Symbol("trap");
  let r = false, s = -1;
  async function u() {
    r = true, s = window.setTimeout(() => {
      r = false;
    }, 100);
  }
  async function c(v) {
    var _a2;
    const p = v.relatedTarget, m = v.target;
    document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", d), await Be(), n.value && !r && p !== m && o.value && st(a) && ![document, o.value].includes(m) && !o.value.contains(m) && ((_a2 = Ea(o.value)[0]) == null ? void 0 : _a2.focus());
  }
  function d(v) {
    if (v.key === "Tab" && (document.removeEventListener("keydown", d), n.value && o.value && v.target && !o.value.contains(v.target))) {
      const p = Ea(document.documentElement);
      if (v.shiftKey && v.target === p.at(0) || !v.shiftKey && v.target === p.at(-1)) {
        const m = Ea(o.value);
        m.length > 0 && (v.preventDefault(), m[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  at && (se(() => e.retainFocus, (v) => {
    v ? ji.set(i, { isActive: n, contentEl: o }) : ji.delete(i);
  }, { immediate: true }), se(f, (v) => {
    v ? (document.addEventListener("pointerdown", u), document.addEventListener("focusin", c, { once: true }), document.addEventListener("keydown", d)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d));
  }, { immediate: true }), Tv++ < 1 && document.addEventListener("keydown", Av)), St(() => {
    ji.delete(i), clearTimeout(s), document.removeEventListener("pointerdown", u), document.removeEventListener("focusin", c), document.removeEventListener("keydown", d), --Tv < 1 && document.removeEventListener("keydown", Av);
  });
}
function ky() {
  if (!at) return re(false);
  const { ssr: e } = kn();
  if (e) {
    const t = re(false);
    return It(() => {
      t.value = true;
    }), t;
  } else return re(true);
}
const td = j({ eager: Boolean }, "lazy");
function nd(e, t) {
  const n = re(false), a = B(() => n.value || e.eager || t.value);
  se(t, () => n.value = true);
  function l() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: a, onAfterLeave: l };
}
function Vl() {
  const t = wt("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Dv = Symbol.for("vuetify:stack"), yo = Et([]);
function MV(e, t, n) {
  const a = wt("useStack"), l = !n, o = Ge(Dv, void 0), i = Et({ activeChildren: /* @__PURE__ */ new Set() });
  ft(Dv, i);
  const r = re(Number(st(t)));
  Lt(e, () => {
    var _a2;
    const c = (_a2 = yo.at(-1)) == null ? void 0 : _a2[1];
    r.value = c ? c + 10 : Number(st(t)), l && yo.push([a.uid, r.value]), o == null ? void 0 : o.activeChildren.add(a.uid), St(() => {
      if (l) {
        const d = Me(yo).findIndex((f) => f[0] === a.uid);
        yo.splice(d, 1);
      }
      o == null ? void 0 : o.activeChildren.delete(a.uid);
    });
  });
  const s = re(true);
  return l && mt(() => {
    var _a2;
    const c = ((_a2 = yo.at(-1)) == null ? void 0 : _a2[0]) === a.uid;
    setTimeout(() => s.value = c);
  }), { globalTop: sl(s), localTop: B(() => !i.activeChildren.size), stackStyles: B(() => ({ zIndex: r.value })) };
}
function EV(e) {
  return { teleportTarget: _(() => {
    const n = e();
    if (n === true || !at) return;
    const a = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (a == null) return;
    let l = [...a.children].find((o) => o.matches(".v-overlay-container"));
    return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
  }) };
}
function BV() {
  return true;
}
function wy(e, t, n) {
  if (!e || Cy(e, n) === false) return false;
  const a = ih(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return false;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function Cy(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || BV)(e);
}
function $V(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && wy(e, t, n) && setTimeout(() => {
    Cy(e, n) && a && a(e);
  }, 0);
}
function Mv(e, t) {
  const n = ih(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const wu = { mounted(e, t) {
  const n = (l) => $V(l, e, t), a = (l) => {
    e._clickOutside.lastMousedownWasOutside = wy(l, e, t);
  };
  Mv(e, (l) => {
    l.addEventListener("click", n, true), l.addEventListener("mousedown", a, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: a };
}, beforeUnmount(e, t) {
  e._clickOutside && (Mv(e, (n) => {
    var _a2;
    if (!n || !((_a2 = e._clickOutside) == null ? void 0 : _a2[t.instance.$.uid])) return;
    const { onClick: a, onMousedown: l } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", a, true), n.removeEventListener("mousedown", l, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function RV(e) {
  const { modelValue: t, color: n, ...a } = e;
  return g(Ra, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && S("div", q({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, a), null)] });
}
const Si = j({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...TV(), ...xe(), ...Ct(), ...td(), ...bV(), ...CV(), ...Sy(), ...Ye(), ...Sa() }, "VOverlay"), Xn = ee()({ name: "VOverlay", directives: { vClickOutside: wu }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...ze(Si(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = wt("VOverlay"), i = O(), r = O(), s = O(), u = Ce(e, "modelValue"), c = _({ get: () => u.value, set: (K) => {
    K && e.disabled || (u.value = K);
  } }), { themeClasses: d } = qe(e), { rtlClasses: f, isRtl: v } = Pt(), { hasContent: p, onAfterLeave: m } = nd(e, c), h = Je(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: b, localTop: w, stackStyles: I } = MV(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: V, activatorRef: k, target: y, targetEl: C, targetRef: x, activatorEvents: T, contentEvents: P, scrimEvents: M } = AV(e, { isActive: c, isTop: w, contentEl: s }), { teleportTarget: D } = EV(() => {
    var _a2, _b2, _c2;
    const K = e.attach || e.contained;
    if (K) return K;
    const fe = ((_a2 = V == null ? void 0 : V.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = o.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return fe instanceof ShadowRoot ? fe : false;
  }), { dimensionStyles: E } = _t(e), A = ky(), { scopeId: R } = Vl();
  se(() => e.disabled, (K) => {
    K && (c.value = false);
  });
  const { contentStyles: G, updateLocation: N } = pV(e, { isRtl: v, contentEl: s, target: y, isActive: c });
  _V(e, { root: i, contentEl: s, targetEl: C, target: y, isActive: c, updateLocation: N });
  function Y(K) {
    l("click:outside", K), e.persistent ? U() : c.value = false;
  }
  function H(K) {
    return c.value && w.value && (!e.scrim || K.target === r.value || K instanceof MouseEvent && K.shadowTarget === r.value);
  }
  xy(e, { isActive: c, localTop: w, contentEl: s, activatorEl: V }), at && se(c, (K) => {
    K ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
  }, { immediate: true }), jt(() => {
    at && window.removeEventListener("keydown", F);
  });
  function F(K) {
    var _a2, _b2, _c2;
    K.key === "Escape" && b.value && (((_a2 = s.value) == null ? void 0 : _a2.contains(document.activeElement)) || l("keydown", K), e.persistent ? U() : (c.value = false, ((_b2 = s.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = V.value) == null ? void 0 : _c2.focus())));
  }
  function Z(K) {
    K.key === "Escape" && !b.value || l("keydown", K);
  }
  const W = Mh();
  Lt(() => e.closeOnBack, () => {
    h_(W, (K) => {
      b.value && c.value ? (K(false), e.persistent ? U() : c.value = false) : K();
    });
  });
  const L = O();
  se(() => c.value && (e.absolute || e.contained) && D.value == null, (K) => {
    if (K) {
      const fe = $r(i.value);
      fe && fe !== document.scrollingElement && (L.value = fe.scrollTop);
    }
  });
  function U() {
    e.noClickAnimation || s.value && ia(s.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Wo });
  }
  function ie() {
    l("afterEnter");
  }
  function Se() {
    m(), l("afterLeave");
  }
  return ae(() => {
    var _a2;
    return S(be, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: x, props: q({ ref: k }, T.value, e.activatorProps) }), A.value && p.value && g(ES, { disabled: !D.value, to: D.value }, { default: () => [S("div", q({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, d.value, f.value, e.class], style: [I.value, { "--v-overlay-opacity": e.opacity, top: ve(L.value) }, e.style], ref: i, onKeydown: Z }, R, a), [g(RV, q({ color: h, modelValue: c.value && !!e.scrim, ref: r }, M.value), null), g(Qt, { appear: true, persisted: true, transition: e.transition, target: y.value, onAfterEnter: ie, onAfterLeave: Se }, { default: () => {
      var _a3;
      return [lt(S("div", q({ ref: s, class: ["v-overlay__content", e.contentClass], style: [E.value, G.value] }, P.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[Ln, c.value], [wu, { handler: Y, closeConditional: H, include: () => [V.value] }]])];
    } })])] })]);
  }), { activatorEl: V, scrimEl: r, target: y, animateClick: U, contentEl: s, rootEl: i, globalTop: b, localTop: w, updateLocation: N };
} }), _y = j({ id: String, submenu: Boolean, ...ze(Si({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: Or } }), ["absolute"]) }, "VMenu"), to = ee()({ name: "VMenu", props: _y(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = Vl(), { isRtl: o } = Pt(), i = Rt(), r = B(() => e.id || `v-menu-${i}`), s = O(), u = Ge(ku, null), c = re(/* @__PURE__ */ new Set());
  ft(ku, { register() {
    c.value.add(i);
  }, unregister() {
    c.value.delete(i);
  }, closeParents(m) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (m == null || ((_a2 = s.value) == null ? void 0 : _a2.contentEl) && !A0(m, s.value.contentEl)) && (a.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), jt(() => u == null ? void 0 : u.unregister()), uc(() => a.value = false), se(a, (m) => {
    m ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function d(m) {
    u == null ? void 0 : u.closeParents(m);
  }
  function f(m) {
    var _a2, _b2, _c2, _d2, _e;
    if (!e.disabled) if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
      if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
      m.key === "Enter" && m.preventDefault(), !Kg(Ea((_a2 = s.value) == null ? void 0 : _a2.contentEl, false), m.shiftKey ? "prev" : "next", (b) => b.tabIndex >= 0) && !e.retainFocus && (a.value = false, (_c2 = (_b2 = s.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && m.key === (o.value ? "ArrowRight" : "ArrowLeft") && (a.value = false, (_e = (_d2 = s.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function v(m) {
    var _a2;
    if (e.disabled) return;
    const h = (_a2 = s.value) == null ? void 0 : _a2.contentEl;
    h && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), ll(h, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), ll(h, "prev")) : e.submenu && (m.key === (o.value ? "ArrowRight" : "ArrowLeft") ? a.value = false : m.key === (o.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), ll(h, "first"))) : (e.submenu ? m.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = true, m.preventDefault(), setTimeout(() => setTimeout(() => v(m))));
  }
  const p = _(() => q({ "aria-haspopup": "menu", "aria-expanded": String(a.value), "aria-controls": r.value, "aria-owns": r.value, onKeydown: v }, e.activatorProps));
  return ae(() => {
    const m = Xn.filterProps(e);
    return g(Xn, q({ ref: s, id: r.value, class: ["v-menu", e.class], style: e.style }, m, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, absolute: true, activatorProps: p.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": d, onKeydown: f }, l), { activator: n.activator, default: function() {
      for (var h = arguments.length, b = new Array(h), w = 0; w < h; w++) b[w] = arguments[w];
      return g(Fe, { root: "VMenu" }, { default: () => {
        var _a2;
        return [(_a2 = n.default) == null ? void 0 : _a2.call(n, ...b)];
      } });
    } });
  }), Dt({ id: r, \u03A8openChildren: c }, s);
} }), ad = j({ color: String, ...Ut(), ...xe(), ...Ct(), ...Vt(), ...ea(), ...io(), ...dt(), ...Re(), ...Ye() }, "VSheet"), Ha = ee()({ name: "VSheet", props: ad(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.color), { borderClasses: i } = tn(e), { dimensionStyles: r } = _t(e), { elevationClasses: s } = At(e), { locationStyles: u } = Ua(e), { positionClasses: c } = ro(e), { roundedClasses: d } = gt(e);
  return ae(() => g(e.tag, { class: ne(["v-sheet", a.value, l.value, i.value, s.value, c.value, d.value, e.class]), style: me([o.value, r.value, u.value, e.style]) }, n)), {};
} }), FV = j({ active: Boolean, disabled: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...xe(), ...Sa({ transition: { component: Nc } }) }, "VCounter"), Ur = ee()({ name: "VCounter", functional: true, props: FV(), setup(e, t) {
  let { slots: n } = t;
  const a = B(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ae(() => g(Qt, { transition: e.transition }, { default: () => [lt(S("div", { class: ne(["v-counter", { "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max) }, e.class]), style: me(e.style) }, [n.default ? n.default({ counter: a.value, max: e.max, value: e.value }) : a.value]), [[Ln, e.active]])] })), {};
} }), LV = j({ floating: Boolean, ...xe() }, "VFieldLabel"), xo = ee()({ name: "VFieldLabel", props: LV(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(so, { class: ne(["v-field-label", { "v-field-label--floating": e.floating }, e.class]), style: me(e.style) }, n)), {};
} }), OV = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], xi = j({ appendInnerIcon: Ie, bgColor: String, clearable: Boolean, clearIcon: { type: Ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, glow: Boolean, error: Boolean, flat: Boolean, iconColor: [Boolean, String], label: String, persistentClear: Boolean, prependInnerIcon: Ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => OV.includes(e) }, "onClick:clear": Ft(), "onClick:appendInner": Ft(), "onClick:prependInner": Ft(), ...xe(), ...zr(), ...dt(), ...Ye() }, "VField"), za = ee()({ name: "VField", inheritAttrs: false, props: { id: String, details: Boolean, labelId: String, ...pi(), ...xi() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { themeClasses: o } = qe(e), { loaderClasses: i } = mi(e), { focusClasses: r, isFocused: s, focus: u, blur: c } = wa(e), { InputIcon: d } = bi(e), { roundedClasses: f } = gt(e), { rtlClasses: v } = Pt(), p = B(() => e.dirty || e.active), m = B(() => !!(e.label || l.label)), h = B(() => !e.singleLine && m.value), b = Rt(), w = _(() => e.id || `input-${b}`), I = B(() => e.details ? `${w.value}-messages` : void 0), V = O(), k = O(), y = O(), C = _(() => ["plain", "underlined"].includes(e.variant)), x = _(() => e.error || e.disabled ? void 0 : p.value && s.value ? e.color : e.baseColor), T = _(() => {
    if (!(!e.iconColor || e.glow && !s.value)) return e.iconColor === true ? x.value : e.iconColor;
  }), { backgroundColorClasses: P, backgroundColorStyles: M } = Je(() => e.bgColor), { textColorClasses: D, textColorStyles: E } = $t(x);
  se(p, (Y) => {
    if (h.value && !Yn()) {
      const H = V.value.$el, F = k.value.$el;
      requestAnimationFrame(() => {
        const Z = Vc(H), W = F.getBoundingClientRect(), L = W.x - Z.x, U = W.y - Z.y - (Z.height / 2 - W.height / 2), ie = W.width / 0.75, Se = Math.abs(ie - Z.width) > 1 ? { maxWidth: ve(ie) } : void 0, K = getComputedStyle(H), fe = getComputedStyle(F), De = parseFloat(K.transitionDuration) * 1e3 || 150, _e = parseFloat(fe.getPropertyValue("--v-field-label-scale")), ye = fe.getPropertyValue("color");
        H.style.visibility = "visible", F.style.visibility = "hidden", ia(H, { transform: `translate(${L}px, ${U}px) scale(${_e})`, color: ye, ...Se }, { duration: De, easing: Wo, direction: Y ? "normal" : "reverse" }).finished.then(() => {
          H.style.removeProperty("visibility"), F.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const A = _(() => ({ isActive: p, isFocused: s, controlRef: y, iconColor: T, blur: c, focus: u })), R = B(() => {
    const Y = !p.value;
    return { "aria-hidden": Y, for: Y ? void 0 : w.value };
  }), G = B(() => {
    const Y = h.value && p.value;
    return { "aria-hidden": Y, for: Y ? void 0 : w.value };
  });
  function N(Y) {
    Y.target !== document.activeElement && Y.preventDefault();
  }
  return ae(() => {
    var _a2;
    const Y = e.variant === "outlined", H = !!(l["prepend-inner"] || e.prependInnerIcon), F = !!(e.clearable || l.clear) && !e.disabled, Z = !!(l["append-inner"] || e.appendInnerIcon || F), W = () => l.label ? l.label({ ...A.value, label: e.label, props: { for: w.value } }) : e.label;
    return S("div", q({ class: ["v-field", { "v-field--active": p.value, "v-field--appended": Z, "v-field--center-affix": e.centerAffix ?? !C.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--glow": e.glow, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": H, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !W(), [`v-field--variant-${e.variant}`]: true }, o.value, P.value, r.value, i.value, f.value, v.value, e.class], style: [M.value, e.style], onClick: N }, n), [S("div", { class: "v-field__overlay" }, null), g(gi, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: l.loader }), H && S("div", { key: "prepend", class: "v-field__prepend-inner" }, [l["prepend-inner"] ? l["prepend-inner"](A.value) : e.prependInnerIcon && g(d, { key: "prepend-icon", name: "prependInner", color: T.value }, null)]), S("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && g(xo, q({ key: "floating-label", ref: k, class: [D.value], floating: true }, R.value, { style: E.value }), { default: () => [W()] }), m.value && g(xo, q({ key: "label", ref: V, id: e.labelId }, G.value), { default: () => [W()] }), ((_a2 = l.default) == null ? void 0 : _a2.call(l, { ...A.value, props: { id: w.value, class: "v-field__input", "aria-describedby": I.value }, focus: u, blur: c })) ?? S("div", { id: w.value, class: "v-field__input", "aria-describedby": I.value }, null)]), F && g(Hc, { key: "clear" }, { default: () => [lt(S("div", { class: "v-field__clearable", onMousedown: (L) => {
      L.preventDefault(), L.stopPropagation();
    } }, [g(Fe, { defaults: { VIcon: { icon: e.clearIcon } } }, { default: () => [l.clear ? l.clear({ ...A.value, props: { onFocus: u, onBlur: c, onClick: e["onClick:clear"], tabindex: -1 } }) : g(d, { name: "clear", onFocus: u, onBlur: c, tabindex: -1 }, null)] })]), [[Ln, e.dirty]])] }), Z && S("div", { key: "append", class: "v-field__append-inner" }, [l["append-inner"] ? l["append-inner"](A.value) : e.appendInnerIcon && g(d, { key: "append-icon", name: "appendInner", color: T.value }, null)]), S("div", { class: ne(["v-field__outline", D.value]), style: me(E.value) }, [Y && S(be, null, [S("div", { class: "v-field__outline__start" }, null), h.value && S("div", { class: "v-field__outline__notch" }, [g(xo, q({ ref: k, floating: true }, R.value), { default: () => [W()] })]), S("div", { class: "v-field__outline__end" }, null)]), C.value && h.value && g(xo, q({ ref: k, floating: true }, R.value), { default: () => [W()] })])]);
  }), { controlRef: y, fieldIconColor: T };
} }), Vy = j({ autocomplete: String }, "autocomplete");
function ld(e) {
  const t = Rt(), n = re(0), a = B(() => e.autocomplete === "suppress");
  return { isSuppressing: a, fieldAutocomplete: B(() => a.value ? "off" : e.autocomplete), fieldName: B(() => {
    if (e.name) return a.value ? `${e.name}-${t}-${n.value}` : e.name;
  }), update: () => n.value = (/* @__PURE__ */ new Date()).getTime() };
}
function Iy(e) {
  function t(n, a) {
    var _a2;
    if (!e.autofocus || !n) return;
    const l = a[0].target;
    (_a2 = l.matches("input,textarea") ? l : l.querySelector("input,textarea")) == null ? void 0 : _a2.focus();
  }
  return { onIntersect: t };
}
const NV = ["color", "file", "time", "date", "datetime-local", "week", "month"], ki = j({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Vy(), ...ze(Ca(), ["direction"]), ...xi() }, "VTextField"), qn = ee()({ name: "VTextField", directives: { vIntersect: Rn }, inheritAttrs: false, props: ki(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue", void 0, (C) => Object.is(C, -0) ? "-0" : C), { isFocused: i, focus: r, blur: s } = wa(e), { onIntersect: u } = Iy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = _(() => ["plain", "underlined"].includes(e.variant)), v = O(), p = O(), m = O(), h = ld(e), b = _(() => NV.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function w() {
    h.isSuppressing.value && h.update(), i.value || r(), Be(() => {
      var _a2;
      m.value !== document.activeElement && ((_a2 = m.value) == null ? void 0 : _a2.focus());
    });
  }
  function I(C) {
    a("mousedown:control", C), C.target !== m.value && (w(), C.preventDefault());
  }
  function V(C) {
    a("click:control", C);
  }
  function k(C, x) {
    C.stopPropagation(), w(), Be(() => {
      x(), ci(e["onClick:clear"], C);
    });
  }
  function y(C) {
    var _a2;
    const x = C.target;
    if (!(((_a2 = e.modelModifiers) == null ? void 0 : _a2.trim) && ["text", "search", "password", "tel", "url"].includes(e.type))) {
      o.value = x.value;
      return;
    }
    const T = x.value, P = x.selectionStart, M = x.selectionEnd;
    o.value = T, Be(() => {
      let D = 0;
      T.trimStart().length === x.value.length && (D = T.length - x.value.length), P != null && (x.selectionStart = P - D), M != null && (x.selectionEnd = M - D);
    });
  }
  return ae(() => {
    const C = !!(l.counter || e.counter !== false && e.counter != null), x = !!(C || l.details), [T, P] = Jn(n), { modelValue: M, ...D } = Wt.filterProps(e), E = za.filterProps(e);
    return g(Wt, q({ ref: v, modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, T, D, { centerAffix: !f.value, focused: i.value }), { ...l, default: (A) => {
      let { id: R, isDisabled: G, isDirty: N, isReadonly: Y, isValid: H, hasDetails: F, reset: Z } = A;
      return g(za, q({ ref: p, onMousedown: I, onClick: V, "onClick:clear": (W) => k(W, Z), role: e.role }, ze(E, ["onClick:clear"]), { id: R.value, labelId: `${R.value}-label`, active: b.value || N.value, dirty: N.value || e.dirty, disabled: G.value, focused: i.value, details: F.value, error: H.value === false }), { ...l, default: (W) => {
        let { props: { class: L, ...U }, controlRef: ie } = W;
        const Se = S("input", q({ ref: (K) => m.value = ie.value = K, value: o.value, onInput: y, autofocus: e.autofocus, readonly: Y.value, disabled: G.value, name: h.fieldName.value, autocomplete: h.fieldAutocomplete.value, placeholder: e.placeholder, size: 1, role: e.role, type: e.type, onFocus: r, onBlur: s, "aria-labelledby": `${R.value}-label` }, U, P), null);
        return S(be, null, [e.prefix && S("span", { class: "v-text-field__prefix" }, [S("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), lt(l.default ? S("div", { class: ne(L), "data-no-activator": "" }, [l.default({ id: R }), Se]) : ma(Se, { class: L }), [[Rn, u, null, { once: true }]]), e.suffix && S("span", { class: "v-text-field__suffix" }, [S("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: x ? (A) => {
      var _a2;
      return S(be, null, [(_a2 = l.details) == null ? void 0 : _a2.call(l, A), C && S(be, null, [S("span", null, null), g(Ur, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Dt({}, v, p, m);
} }), HV = j({ renderless: Boolean, ...xe() }, "VVirtualScrollItem"), Py = ee()({ name: "VVirtualScrollItem", inheritAttrs: false, props: HV(), emits: { "update:height": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { resizeRef: o, contentRect: i } = In(void 0, "border");
  se(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.height;
  }, (r) => {
    r != null && a("update:height", r);
  }), ae(() => {
    var _a2, _b2;
    return e.renderless ? S(be, null, [(_a2 = l.default) == null ? void 0 : _a2.call(l, { itemRef: o })]) : S("div", q({ ref: o, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(_b2 = l.default) == null ? void 0 : _b2.call(l)]);
  });
} }), zV = -1, WV = 1, Os = 100, Ty = j({ itemHeight: { type: [Number, String], default: null }, itemKey: { type: [String, Array, Function], default: null }, height: [Number, String] }, "virtual");
function Ay(e, t) {
  const n = kn(), a = re(0);
  mt(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = re(0), o = re(Math.ceil((parseInt(e.height) || n.height.value) / (a.value || 16)) || 1), i = re(0), r = re(0), s = O(), u = O();
  let c = 0;
  const { resizeRef: d, contentRect: f } = In();
  mt(() => {
    d.value = s.value;
  });
  const v = _(() => {
    var _a2;
    return s.value === document.documentElement ? n.height.value : ((_a2 = f.value) == null ? void 0 : _a2.height) || parseInt(e.height) || 0;
  }), p = _(() => !!(s.value && u.value && v.value && a.value));
  let m = Array.from({ length: t.value.length }), h = Array.from({ length: t.value.length });
  const b = re(0);
  let w = -1;
  function I(F) {
    return m[F] || a.value;
  }
  const V = jg(() => {
    const F = performance.now();
    h[0] = 0;
    const Z = t.value.length;
    for (let W = 1; W <= Z; W++) h[W] = (h[W - 1] || 0) + I(W - 1);
    b.value = Math.max(b.value, performance.now() - F);
  }, b), k = se(p, (F) => {
    F && (k(), c = u.value.offsetTop, V.immediate(), G(), ~w && Be(() => {
      at && window.requestAnimationFrame(() => {
        Y(w), w = -1;
      });
    }));
  });
  St(() => {
    V.clear();
  });
  function y(F, Z) {
    const W = m[F], L = a.value;
    a.value = L ? Math.min(a.value, Z) : Z, (W !== Z || L !== a.value) && (m[F] = Z, V());
  }
  function C(F) {
    F = nt(F, 0, t.value.length);
    const Z = Math.floor(F), W = F % 1, L = Z + 1, U = h[Z] || 0, ie = h[L] || U;
    return U + (ie - U) * W;
  }
  function x(F) {
    return jV(h, F);
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
    const F = T - c, Z = Math.sign(P), W = Math.max(0, F - Os), L = nt(x(W), 0, t.value.length), U = F + v.value + Os, ie = nt(x(U) + 1, L + 1, t.value.length);
    if ((Z !== zV || L < l.value) && (Z !== WV || ie > o.value)) {
      const Se = C(l.value) - C(L), K = C(ie) - C(o.value);
      Math.max(Se, K) > Os ? (l.value = L, o.value = ie) : (L <= 0 && (l.value = L), ie >= t.value.length && (o.value = ie));
    }
    i.value = C(l.value), r.value = C(t.value.length) - C(o.value);
  }
  function Y(F) {
    const Z = C(F);
    !s.value || F && !Z ? w = F : s.value.scrollTop = Z;
  }
  const H = _(() => t.value.slice(l.value, o.value).map((F, Z) => {
    const W = Z + l.value;
    return { raw: F, index: W, key: xt(F, e.itemKey, W) };
  }));
  return se(t, () => {
    m = Array.from({ length: t.value.length }), h = Array.from({ length: t.value.length }), V.immediate(), G();
  }, { deep: 1 }), { calculateVisibleItems: G, containerRef: s, markerRef: u, computedItems: H, paddingTop: i, paddingBottom: r, scrollToIndex: Y, handleScroll: E, handleScrollend: A, handleItemResize: y };
}
function jV(e, t) {
  let n = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[n] < t) return n;
  for (; a <= n; ) if (l = a + n >> 1, o = e[l], o > t) n = l - 1;
  else if (o < t) i = l, a = l + 1;
  else return o === t ? l : a;
  return i;
}
const UV = j({ items: { type: Array, default: () => [] }, renderless: Boolean, ...Ty(), ...xe(), ...Ct() }, "VVirtualScroll"), Gr = ee()({ name: "VVirtualScroll", props: UV(), setup(e, t) {
  let { slots: n } = t;
  const a = wt("VVirtualScroll"), { dimensionStyles: l } = _t(e), { calculateVisibleItems: o, containerRef: i, markerRef: r, handleScroll: s, handleScrollend: u, handleItemResize: c, scrollToIndex: d, paddingTop: f, paddingBottom: v, computedItems: p } = Ay(e, B(() => e.items));
  return Lt(() => e.renderless, () => {
    function m() {
      var _a2, _b2;
      const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[b]("scroll", s, { passive: true }), document[b]("scrollend", u)) : ((_a2 = i.value) == null ? void 0 : _a2[b]("scroll", s, { passive: true }), (_b2 = i.value) == null ? void 0 : _b2[b]("scrollend", u));
    }
    It(() => {
      i.value = $r(a.vnode.el, true), m(true);
    }), St(m);
  }), ae(() => {
    const m = p.value.map((h) => g(Py, { key: h.key, renderless: e.renderless, "onUpdate:height": (b) => c(h.index, b) }, { default: (b) => {
      var _a2;
      return (_a2 = n.default) == null ? void 0 : _a2.call(n, { item: h.raw, index: h.index, ...b });
    } }));
    return e.renderless ? S(be, null, [S("div", { ref: r, class: "v-virtual-scroll__spacer", style: { paddingTop: ve(f.value) } }, null), m, S("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ve(v.value) } }, null)]) : S("div", { ref: i, class: ne(["v-virtual-scroll", e.class]), onScrollPassive: s, onScrollend: u, style: me([l.value, e.style]) }, [S("div", { ref: r, class: "v-virtual-scroll__container", style: { paddingTop: ve(f.value), paddingBottom: ve(v.value) } }, [m])]);
  }), { calculateVisibleItems: o, scrollToIndex: d };
} });
function od(e, t) {
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
    var _a2, _b2;
    if (r.key === "Tab" && ((_a2 = t.value) == null ? void 0 : _a2.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
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
function id(e) {
  let { groups: t, onLeave: n } = e;
  function a(r) {
    var _a2;
    return r.type === "list" ? (_a2 = r.contentRef.value) == null ? void 0 : _a2.$el : r.contentRef.value;
  }
  function l(r) {
    const s = a(r);
    return s ? Ea(s) : [];
  }
  function o(r) {
    var _a2;
    const s = r.target, u = r.shiftKey ? "backward" : "forward", c = t.map(l), d = t.map((v) => {
      var _a3;
      return v.type === "list" ? (_a3 = v.contentRef.value) == null ? void 0 : _a3.$el : v.contentRef.value;
    }).findIndex((v) => v == null ? void 0 : v.contains(s)), f = i(c, d, u, s);
    if (f === null) {
      const v = t[d], p = c[d];
      (v.type === "list" || (u === "forward" ? p.at(-1) === r.target : p.at(0) === r.target)) && n();
    } else {
      r.preventDefault(), r.stopImmediatePropagation();
      const v = t[f];
      if (v.type === "list" && st(v.displayItemsCount) > 0) (_a2 = v.contentRef.value) == null ? void 0 : _a2.focus(0);
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
const GV = (e, t, n) => {
  if (e == null || t == null) return -1;
  if (!t.length) return 0;
  e = e.toString().toLocaleLowerCase(), t = t.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(t);
  for (; ~l; ) a.push([l, l + t.length]), l = e.indexOf(t, l + t.length);
  return a.length ? a : -1;
};
function Ns(e, t) {
  if (!(e == null || typeof e == "boolean" || e === -1)) return typeof e == "number" ? [[e, e + t.length]] : Array.isArray(e[0]) ? e : [e];
}
const Il = j({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function YV(e, t, n) {
  var _a2, _b2;
  const a = [], l = (n == null ? void 0 : n.default) ?? GV, o = (n == null ? void 0 : n.filterKeys) ? ct(n.filterKeys) : false, i = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e == null ? void 0 : e.length)) return a;
  let r = [];
  e: for (let s = 0; s < e.length; s++) {
    const [u, c = u] = ct(e[s]), d = {}, f = {};
    let v = -1;
    if ((t || i > 0) && !(n == null ? void 0 : n.noFilter)) {
      let p = false;
      if (typeof u == "object") {
        if (u.type === "divider" || u.type === "subheader") {
          (((_a2 = r.at(-1)) == null ? void 0 : _a2.type) !== "divider" || u.type !== "subheader") && (r = []), r.push({ index: s, matches: {}, type: u.type });
          continue;
        }
        const b = o || Object.keys(c);
        p = b.length === i;
        for (const w of b) {
          const I = xt(c, w), V = (_b2 = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : _b2[w];
          if (v = V ? V(I, t, u) : l(I, t, u), v !== -1 && v !== false) V ? d[w] = Ns(v, t) : f[w] = Ns(v, t);
          else if ((n == null ? void 0 : n.filterMode) === "every") continue e;
        }
      } else v = l(u, t, u), v !== -1 && v !== false && (f.title = Ns(v, t));
      const m = Object.keys(f).length, h = Object.keys(d).length;
      if (!m && !h || (n == null ? void 0 : n.filterMode) === "union" && h !== i && !m || (n == null ? void 0 : n.filterMode) === "intersection" && (h !== i || !m && i > 0 && !p)) continue;
    }
    r.length && (a.push(...r), r = []), a.push({ index: s, matches: { ...f, ...d } });
  }
  return a;
}
function Pl(e, t, n, a) {
  const l = re([]), o = re(/* @__PURE__ */ new Map()), i = _(() => (a == null ? void 0 : a.transform) ? Ke(t).map((s) => [s, a.transform(s)]) : Ke(t));
  mt(() => {
    const s = typeof n == "function" ? n() : Ke(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), c = YV(i.value, u, { customKeyFilter: { ...e.customKeyFilter, ...Ke(a == null ? void 0 : a.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), d = Ke(t), f = [], v = /* @__PURE__ */ new Map();
    c.forEach((p) => {
      let { index: m, matches: h } = p;
      const b = d[m];
      f.push(b), v.set(b.value, h);
    }), l.value = f, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return { filteredItems: l, filteredMatches: o, getMatches: r };
}
function rd(e, t, n) {
  return n == null || !n.length ? t : n.map((a, l) => {
    const o = l === 0 ? 0 : n[l - 1][1], i = [S("span", { class: ne(`${e}__unmask`) }, [t.slice(o, a[0])]), S("span", { class: ne(`${e}__mask`) }, [t.slice(a[0], a[1])])];
    return l === n.length - 1 && i.push(S("span", { class: ne(`${e}__unmask`) }, [t.slice(a[1])])), S(be, null, [i]);
  });
}
const KV = j({ closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" } }, "autocomplete");
function sd(e, t) {
  const n = Rt(), a = _(() => `menu-${n}`);
  return { menuId: a, ariaExpanded: B(() => st(t)), ariaControls: B(() => a.value) };
}
const ud = j({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, listProps: { type: Object }, menu: Boolean, menuIcon: { type: Ie, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, noAutoScroll: Boolean, ...KV(), ...dy({ itemChildren: false }) }, "Select"), XV = j({ search: String, ...Il({ filterKeys: ["title"] }), ...ud(), ...ze(ki({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]), ...Sa({ transition: { component: Or } }) }, "VSelect"), cd = ee()({ name: "VSelect", props: XV(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true, "update:search": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = ot(), l = O(), o = O(), i = O(), r = O(), s = O(), { items: u, transformIn: c, transformOut: d } = qc(e), f = Ce(e, "search", ""), { filteredItems: v, getMatches: p } = Pl(e, u, () => f.value), m = Ce(e, "modelValue", [], (ye) => c(ye === null ? [null] : ct(ye)), (ye) => {
    const $ = d(ye);
    return e.multiple ? $ : $[0] ?? null;
  }), h = _(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), b = uo(e), w = ld(e), I = _(() => m.value.map((ye) => ye.value)), V = re(false), k = B(() => e.closableChips && !b.isReadonly.value && !b.isDisabled.value), { InputIcon: y } = bi(e);
  let C = "", x = 0, T;
  const P = _(() => {
    const ye = f.value ? v.value : u.value;
    return e.hideSelected ? ye.filter(($) => !m.value.some((z) => (e.valueComparator || Bt)(z, $))) : ye;
  }), M = _(() => e.hideNoData && !P.value.length || b.isReadonly.value || b.isDisabled.value), D = Ce(e, "menu"), E = _({ get: () => D.value, set: (ye) => {
    var _a2;
    D.value && !ye && ((_a2 = o.value) == null ? void 0 : _a2.\u03A8openChildren.size) || ye && M.value || (D.value = ye);
  } }), { menuId: A, ariaExpanded: R, ariaControls: G } = sd(e, E), N = _(() => {
    var _a2;
    return { ...e.menuProps, activatorProps: { ...((_a2 = e.menuProps) == null ? void 0 : _a2.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), Y = O(), H = od(Y, l), { onTabKeydown: F } = id({ groups: [{ type: "element", contentRef: i }, { type: "list", contentRef: Y, displayItemsCount: () => P.value.length }, { type: "element", contentRef: r }], onLeave: () => {
    var _a2;
    E.value = false, (_a2 = l.value) == null ? void 0 : _a2.focus();
  } });
  function Z(ye) {
    e.openOnClear && (E.value = true);
  }
  function W() {
    M.value || (E.value = !E.value);
  }
  function L(ye) {
    var _a2;
    ye.key === "Tab" && F(ye), ((_a2 = Y.value) == null ? void 0 : _a2.$el.contains(ye.target)) && ql(ye) && U(ye);
  }
  function U(ye) {
    var _a2, _b2, _c2;
    if (!ye.key || b.isReadonly.value) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(ye.key) && ye.preventDefault(), ["Enter", "ArrowDown", " "].includes(ye.key) && (E.value = true), ["Escape", "Tab"].includes(ye.key) && (E.value = false), e.clearable && ye.key === "Backspace") {
      ye.preventDefault(), m.value = [], Z();
      return;
    }
    ye.key === "Home" ? (_a2 = Y.value) == null ? void 0 : _a2.focus("first") : ye.key === "End" && ((_b2 = Y.value) == null ? void 0 : _b2.focus("last"));
    const $ = 1e3;
    if (!ql(ye)) return;
    const z = performance.now();
    z - T > $ && (C = "", x = 0), C += ye.key.toLowerCase(), T = z;
    const Q = P.value;
    function ce() {
      let X = oe();
      return X || C.at(-1) === C.at(-2) && (C = C.slice(0, -1), x++, X = oe(), X) || (x = 0, X = oe(), X) ? X : (C = ye.key.toLowerCase(), oe());
    }
    function oe() {
      for (let X = x; X < Q.length; X++) {
        const le = Q[X];
        if (le.title.toLowerCase().startsWith(C)) return [le, X];
      }
    }
    const ue = ce();
    if (!ue) return;
    const [pe, de] = ue;
    x = de, (_c2 = Y.value) == null ? void 0 : _c2.focus(de), e.multiple || (m.value = [pe]);
  }
  function ie(ye) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!ye.props.disabled) if (e.multiple) {
      const z = m.value.findIndex((ce) => (e.valueComparator || Bt)(ce.value, ye.value)), Q = $ ?? !~z;
      if (~z) {
        const ce = Q ? [...m.value, ye] : [...m.value];
        ce.splice(z, 1), m.value = ce;
      } else Q && (m.value = [...m.value, ye]);
    } else {
      const z = $ !== false;
      m.value = z ? [ye] : [], Be(() => {
        E.value = false;
      });
    }
  }
  function Se(ye) {
    var _a2;
    const $ = ye.target;
    ((_a2 = l.value) == null ? void 0 : _a2.$el.contains($)) || (E.value = false);
  }
  function K() {
    var _a2;
    e.eager && ((_a2 = s.value) == null ? void 0 : _a2.calculateVisibleItems());
  }
  function fe() {
    var _a2;
    f.value = "", V.value && ((_a2 = l.value) == null ? void 0 : _a2.focus());
  }
  function De(ye) {
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
      const ye = P.value.findIndex(($) => m.value.some((z) => (e.valueComparator || Bt)(z.value, $.value)));
      at && !e.noAutoScroll && window.requestAnimationFrame(() => {
        var _a2;
        ye >= 0 && ((_a2 = s.value) == null ? void 0 : _a2.scrollToIndex(ye));
      });
    }
  }), se(u, (ye, $) => {
    E.value || V.value && e.hideNoData && !$.length && ye.length && (E.value = true);
  }), ae(() => {
    const ye = !!(e.chips || n.chip), $ = !!(!e.hideNoData || P.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), z = m.value.length > 0, Q = qn.filterProps(e), ce = z || !V.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder, oe = { search: f, filteredItems: v.value };
    return g(qn, q({ ref: l }, Q, { modelValue: m.value.map((ue) => ue.props.title).join(", "), name: void 0, "onUpdate:modelValue": _e, focused: V.value, "onUpdate:focused": (ue) => V.value = ue, validationValue: m.externalValue, counterValue: h.value, dirty: z, class: ["v-select", { "v-select--active-menu": E.value, "v-select--chips": !!e.chips, [`v-select--${e.multiple ? "multiple" : "single"}`]: true, "v-select--selected": m.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: ce, "onClick:clear": Z, "onMousedown:control": W, onBlur: Se, onKeydown: U, "aria-expanded": R.value, "aria-controls": G.value }), { ...n, default: (ue) => {
      let { id: pe } = ue;
      return S(be, null, [S("select", { hidden: true, multiple: e.multiple, name: w.fieldName.value }, [u.value.map((de) => S("option", { key: de.value, value: de.value, selected: I.value.includes(de.value) }, null))]), g(to, q({ id: A.value, ref: o, modelValue: E.value, "onUpdate:modelValue": (de) => E.value = de, activator: "parent", contentClass: "v-select__content", disabled: M.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, transition: e.transition, onAfterEnter: K, onAfterLeave: fe }, N.value), { default: () => [g(Ha, { onFocusin: De, onKeydown: L }, { default: () => [n["menu-header"] && S("header", { ref: i }, [n["menu-header"](oe)]), $ && g(eo, q({ key: "select-list", ref: Y, selected: I.value, selectStrategy: e.multiple ? "independent" : "single-independent", tabindex: "-1", selectable: !!P.value.length, "aria-live": "polite", "aria-labelledby": `${pe.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, H, e.listProps), { default: () => {
        var _a2, _b2, _c2;
        return [(_a2 = n["prepend-item"]) == null ? void 0 : _a2.call(n), !P.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(Pn, { key: "no-data", title: a(e.noDataText) }, null)), g(Gr, { ref: s, renderless: true, items: P.value, itemKey: "value" }, { default: (de) => {
          var _a3, _b3, _c3;
          let { item: X, index: le, itemRef: Ve } = de;
          const J = M0(X.props), ge = q(X.props, { ref: Ve, key: X.value, onClick: () => ie(X, null), "aria-posinset": le + 1, "aria-setsize": P.value.length });
          return X.type === "divider" ? ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: X.raw, index: le })) ?? g(pn, q(X.props, { key: `divider-${le}` }), null) : X.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: X.raw, index: le })) ?? g(co, q(X.props, { key: `subheader-${le}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: X, index: le, props: ge })) ?? g(Pn, q(ge, { role: "option" }), { prepend: (ke) => {
            let { isSelected: we } = ke;
            return S(be, null, [e.multiple && !e.hideSelected ? g(Fn, { key: X.value, modelValue: we, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Pe) => Pe.preventDefault() }, null) : void 0, J.prependAvatar && g(xn, { image: J.prependAvatar }, null), J.prependIcon && g(Xe, { icon: J.prependIcon }, null)]);
          }, title: () => {
            var _a4;
            return f.value ? rd("v-select", X.title, (_a4 = p(X)) == null ? void 0 : _a4.title) : X.title;
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && S("footer", { ref: r }, [n["menu-footer"](oe)])] })] }), m.value.map((de, X) => {
        function le(ke) {
          ke.stopPropagation(), ke.preventDefault(), ie(de, false);
        }
        const Ve = q(ha.filterProps(de.props), { "onClick:close": le, onKeydown(ke) {
          ke.key !== "Enter" && ke.key !== " " || (ke.preventDefault(), ke.stopPropagation(), le(ke));
        }, onMousedown(ke) {
          ke.preventDefault(), ke.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), J = ye ? !!n.chip : !!n.selection, ge = J ? Br(ye ? n.chip({ item: de, index: X, props: Ve }) : n.selection({ item: de, index: X })) : void 0;
        if (!(J && !ge)) return S("div", { key: de.value, class: "v-select__selection" }, [ye ? n.chip ? g(Fe, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: de.title } } }, { default: () => [ge] }) : g(ha, q({ key: "chip", closable: k.value, size: "small", text: de.title, disabled: de.props.disabled }, Ve), null) : ge ?? S("span", { class: "v-select__selection-text" }, [de.title, e.multiple && X < m.value.length - 1 && S("span", { class: "v-select__selection-comma" }, [Oe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a2, _b2;
      for (var ue = arguments.length, pe = new Array(ue), de = 0; de < ue; de++) pe[de] = arguments[de];
      return S(be, null, [(_a2 = n["append-inner"]) == null ? void 0 : _a2.call(n, ...pe), e.menuIcon ? g(Xe, { class: "v-select__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, "aria-hidden": true }, null) : void 0, e.appendInnerIcon && g(y, { key: "append-icon", name: "appendInner", color: pe[0].iconColor.value }, null)]);
    } });
  }), Dt({ isFocused: V, menu: E, search: f, filteredItems: v, select: ie }, l);
} }), qV = j({ autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: Boolean, search: String, ...Il({ filterKeys: ["title"] }), ...ud(), ...ze(ki({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VAutocomplete"), ZV = ee()({ name: "VAutocomplete", props: qV(), emits: { "update:focused": (e) => true, "update:search": (e) => true, "update:modelValue": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = ot(), l = O(), o = re(false), i = re(true), r = re(false), s = O(), u = O(), c = re(-1), d = re(null), { items: f, transformIn: v, transformOut: p } = qc(e), { textColorClasses: m, textColorStyles: h } = $t(() => {
    var _a2;
    return (_a2 = l.value) == null ? void 0 : _a2.color;
  }), { InputIcon: b } = bi(e), w = Ce(e, "search", ""), I = Ce(e, "modelValue", [], (X) => v(X === null ? [null] : ct(X)), (X) => {
    const le = p(X);
    return e.multiple ? le : le[0] ?? null;
  }), V = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), k = uo(e), { filteredItems: y, getMatches: C } = Pl(e, f, () => d.value ?? (i.value ? "" : w.value)), x = _(() => e.hideSelected && d.value === null ? y.value.filter((X) => !I.value.some((le) => le.value === X.value)) : y.value), T = B(() => e.closableChips && !k.isReadonly.value && !k.isDisabled.value), P = _(() => !!(e.chips || n.chip)), M = _(() => P.value || !!n.selection), D = _(() => I.value.map((X) => X.props.value)), E = _(() => x.value.find((X) => X.type === "item" && !X.props.disabled)), A = _(() => {
    var _a2;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && w.value === ((_a2 = E.value) == null ? void 0 : _a2.title)) && x.value.length > 0 && !i.value && !r.value;
  }), R = _(() => e.hideNoData && !x.value.length || k.isReadonly.value || k.isDisabled.value), G = Ce(e, "menu"), N = _({ get: () => G.value, set: (X) => {
    var _a2;
    G.value && !X && ((_a2 = s.value) == null ? void 0 : _a2.\u03A8openChildren.size) || X && R.value || (G.value = X);
  } }), { menuId: Y, ariaExpanded: H, ariaControls: F } = sd(e, N), Z = O(), W = O(), L = O(), U = od(Z, l), { onTabKeydown: ie } = id({ groups: [{ type: "element", contentRef: W }, { type: "list", contentRef: Z, displayItemsCount: () => x.value.length }, { type: "element", contentRef: L }], onLeave: () => {
    var _a2;
    N.value = false, (_a2 = l.value) == null ? void 0 : _a2.focus();
  } });
  function Se(X) {
    e.openOnClear && (N.value = true), w.value = "";
  }
  function K() {
    R.value || (N.value = true);
  }
  function fe(X) {
    R.value || (o.value && (X.preventDefault(), X.stopPropagation()), N.value = !N.value);
  }
  function De(X) {
    var _a2, _b2;
    X.key === "Tab" && ie(X), ((_a2 = Z.value) == null ? void 0 : _a2.$el.contains(X.target)) && (ql(X) || X.key === "Backspace") && ((_b2 = l.value) == null ? void 0 : _b2.focus());
  }
  function _e(X) {
    var _a2, _b2, _c2, _d2, _e2;
    if (k.isReadonly.value) return;
    const le = (_a2 = l.value) == null ? void 0 : _a2.selectionStart, Ve = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(X.key) && X.preventDefault(), ["Enter", "ArrowDown"].includes(X.key) && (N.value = true), ["Escape"].includes(X.key) && (N.value = false), A.value && ["Enter", "Tab"].includes(X.key) && E.value && !I.value.some((J) => {
      let { value: ge } = J;
      return ge === E.value.value;
    }) && de(E.value), X.key === "ArrowDown" && A.value && ((_b2 = Z.value) == null ? void 0 : _b2.focus("next")), ["Backspace", "Delete"].includes(X.key)) {
      if (!e.multiple && M.value && I.value.length > 0 && !w.value) return de(I.value[0], false);
      if (~c.value) {
        X.preventDefault();
        const J = c.value;
        de(I.value[c.value], false), c.value = J >= Ve - 1 ? Ve - 2 : J;
      } else X.key === "Backspace" && !w.value && (c.value = Ve - 1);
      return;
    }
    if (e.multiple) if (X.key === "ArrowLeft") {
      if (c.value < 0 && le && le > 0) return;
      const J = c.value > -1 ? c.value - 1 : Ve - 1;
      if (I.value[J]) c.value = J;
      else {
        const ge = ((_c2 = w.value) == null ? void 0 : _c2.length) ?? null;
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
    var _a2;
    e.eager && ((_a2 = u.value) == null ? void 0 : _a2.calculateVisibleItems());
  }
  function z() {
    var _a2;
    o.value && (i.value = true, (_a2 = l.value) == null ? void 0 : _a2.focus()), d.value = null;
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
    var _a2, _b2;
    ((_b2 = (_a2 = s.value) == null ? void 0 : _a2.contentEl) == null ? void 0 : _b2.contains(X.relatedTarget)) && (o.value = true);
  }
  const pe = re(false);
  function de(X) {
    let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (!(!X || X.props.disabled)) if (e.multiple) {
      const Ve = I.value.findIndex((ge) => (e.valueComparator || Bt)(ge.value, X.value)), J = le ?? !~Ve;
      if (~Ve) {
        const ge = J ? [...I.value, X] : [...I.value];
        ge.splice(Ve, 1), I.value = ge;
      } else J && (I.value = [...I.value, X]);
      e.clearOnSelect && (w.value = "");
    } else {
      const Ve = le !== false;
      I.value = Ve ? [X] : [], d.value = i.value ? "" : w.value ?? "", w.value = Ve && !M.value ? X.title : "", Be(() => {
        N.value = false, i.value = true;
      });
    }
  }
  return se(o, (X, le) => {
    var _a2;
    X !== le && (X ? (pe.value = true, w.value = e.multiple || M.value ? "" : String(((_a2 = I.value.at(-1)) == null ? void 0 : _a2.props.title) ?? ""), i.value = true, Be(() => pe.value = false)) : (!e.multiple && w.value == null && (I.value = []), N.value = false, !i.value && w.value && (d.value = w.value), w.value = "", c.value = -1));
  }), se(w, (X) => {
    !o.value || pe.value || (X && (N.value = true), i.value = !X);
  }), se(N, (X) => {
    if (!e.hideSelected && X && I.value.length && i.value) {
      const le = x.value.findIndex((Ve) => I.value.some((J) => Ve.value === J.value));
      at && window.requestAnimationFrame(() => {
        var _a2;
        le >= 0 && ((_a2 = u.value) == null ? void 0 : _a2.scrollToIndex(le));
      });
    }
    X && (d.value = null);
  }), se(f, (X, le) => {
    N.value || o.value && !le.length && X.length && (N.value = true);
  }), ae(() => {
    const X = !!(!e.hideNoData || x.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), le = I.value.length > 0, Ve = qn.filterProps(e), J = { search: w, filteredItems: y.value };
    return g(qn, q({ ref: l }, Ve, { modelValue: w.value, "onUpdate:modelValue": [(ge) => w.value = ge, oe], focused: o.value, "onUpdate:focused": (ge) => o.value = ge, validationValue: I.externalValue, counterValue: V.value, dirty: le, onChange: ye, class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, { "v-autocomplete--active-menu": N.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!M.value, "v-autocomplete--selecting-index": c.value > -1 }, e.class], style: e.style, readonly: k.isReadonly.value, placeholder: le ? void 0 : e.placeholder, "onClick:clear": Se, "onMousedown:control": K, onKeydown: _e, onBlur: ue, "aria-expanded": H.value, "aria-controls": F.value }), { ...n, default: (ge) => {
      let { id: ke } = ge;
      return S(be, null, [g(to, q({ id: Y.value, ref: s, modelValue: N.value, "onUpdate:modelValue": (we) => N.value = we, activator: "parent", contentClass: "v-autocomplete__content", disabled: R.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: $, onAfterLeave: z }, e.menuProps), { default: () => [g(Ha, { onFocusin: Q, onKeydown: De }, { default: () => [n["menu-header"] && S("header", { ref: W }, [n["menu-header"](J)]), X && g(eo, q({ key: "autocomplete-list", ref: Z, filterable: true, selected: D.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (we) => we.preventDefault(), onFocusout: ce, tabindex: "-1", selectable: !!x.value.length, "aria-live": "polite", "aria-labelledby": `${ke.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, U, e.listProps), { default: () => {
        var _a2, _b2, _c2;
        return [(_a2 = n["prepend-item"]) == null ? void 0 : _a2.call(n), !x.value.length && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(Pn, { key: "no-data", title: a(e.noDataText) }, null)), g(Gr, { ref: u, renderless: true, items: x.value, itemKey: "value" }, { default: (we) => {
          var _a3, _b3, _c3;
          let { item: Pe, index: $e, itemRef: We } = we;
          const Le = q(Pe.props, { ref: We, key: Pe.value, active: A.value && Pe === E.value ? true : void 0, onClick: () => de(Pe, null), "aria-posinset": $e + 1, "aria-setsize": x.value.length });
          return Pe.type === "divider" ? ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: Pe.raw, index: $e })) ?? g(pn, q(Pe.props, { key: `divider-${$e}` }), null) : Pe.type === "subheader" ? ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: Pe.raw, index: $e })) ?? g(co, q(Pe.props, { key: `subheader-${$e}` }), null) : ((_c3 = n.item) == null ? void 0 : _c3.call(n, { item: Pe, index: $e, props: Le })) ?? g(Pn, q(Le, { role: "option" }), { prepend: (ut) => {
            let { isSelected: Qe } = ut;
            return S(be, null, [e.multiple && !e.hideSelected ? g(Fn, { key: Pe.value, modelValue: Qe, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Gt) => Gt.preventDefault() }, null) : void 0, Pe.props.prependAvatar && g(xn, { image: Pe.props.prependAvatar }, null), Pe.props.prependIcon && g(Xe, { icon: Pe.props.prependIcon }, null)]);
          }, title: () => {
            var _a4;
            return i.value ? Pe.title : rd("v-autocomplete", Pe.title, (_a4 = C(Pe)) == null ? void 0 : _a4.title);
          } });
        } }), (_c2 = n["append-item"]) == null ? void 0 : _c2.call(n)];
      } }), n["menu-footer"] && S("footer", { ref: L }, [n["menu-footer"](J)])] })] }), I.value.map((we, Pe) => {
        function $e(Qe) {
          Qe.stopPropagation(), Qe.preventDefault(), de(we, false);
        }
        const We = q(ha.filterProps(we.props), { "onClick:close": $e, onKeydown(Qe) {
          Qe.key !== "Enter" && Qe.key !== " " || (Qe.preventDefault(), Qe.stopPropagation(), $e(Qe));
        }, onMousedown(Qe) {
          Qe.preventDefault(), Qe.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Le = P.value ? !!n.chip : !!n.selection, ut = Le ? Br(P.value ? n.chip({ item: we, index: Pe, props: We }) : n.selection({ item: we, index: Pe })) : void 0;
        if (!(Le && !ut)) return S("div", { key: we.value, class: ne(["v-autocomplete__selection", Pe === c.value && ["v-autocomplete__selection--selected", m.value]]), style: me(Pe === c.value ? h.value : {}) }, [P.value ? n.chip ? g(Fe, { key: "chip-defaults", defaults: { VChip: { closable: T.value, size: "small", text: we.title } } }, { default: () => [ut] }) : g(ha, q({ key: "chip", closable: T.value, size: "small", text: we.title, disabled: we.props.disabled }, We), null) : ut ?? S("span", { class: "v-autocomplete__selection-text" }, [we.title, e.multiple && Pe < I.value.length - 1 && S("span", { class: "v-autocomplete__selection-comma" }, [Oe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a2, _b2;
      for (var ge = arguments.length, ke = new Array(ge), we = 0; we < ge; we++) ke[we] = arguments[we];
      return S(be, null, [(_a2 = n["append-inner"]) == null ? void 0 : _a2.call(n, ...ke), e.menuIcon ? g(Xe, { class: "v-autocomplete__menu-icon", color: (_b2 = l.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: fe, onClick: Er, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(b, { key: "append-icon", name: "appendInner", color: ke[0].iconColor.value }, null)]);
    } });
  }), Dt({ isFocused: o, isPristine: i, menu: N, search: w, filteredItems: y, select: de }, l);
} }), JV = j({ bordered: Boolean, color: String, content: [Number, String], dot: Boolean, floating: Boolean, icon: Ie, inline: Boolean, label: { type: String, default: "$vuetify.badge" }, max: [Number, String], modelValue: { type: Boolean, default: true }, offsetX: [Number, String], offsetY: [Number, String], textColor: String, ...xe(), ...ea({ location: "top end" }), ...dt(), ...Re(), ...Ye(), ...Sa({ transition: "scale-rotate-transition" }), ...Ct() }, "VBadge"), Dy = ee()({ name: "VBadge", inheritAttrs: false, props: JV(), setup(e, t) {
  const { backgroundColorClasses: n, backgroundColorStyles: a } = Je(() => e.color), { roundedClasses: l } = gt(e), { t: o } = ot(), { textColorClasses: i, textColorStyles: r } = $t(() => e.textColor), { themeClasses: s } = Lr(), { locationStyles: u } = Ua(e, true, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), { dimensionStyles: c } = _t(e);
  return ae(() => {
    const d = Number(e.content), f = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [v, p] = lu(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
    return g(e.tag, q({ class: ["v-badge", { "v-badge--bordered": e.bordered, "v-badge--dot": e.dot, "v-badge--floating": e.floating, "v-badge--inline": e.inline }, e.class] }, p, { style: e.style }), { default: () => {
      var _a2, _b2;
      return [S("div", { class: "v-badge__wrapper" }, [(_b2 = (_a2 = t.slots).default) == null ? void 0 : _b2.call(_a2), g(Qt, { transition: e.transition }, { default: () => {
        var _a3, _b3;
        return [lt(S("span", q({ class: ["v-badge__badge", s.value, n.value, l.value, i.value], style: [a.value, r.value, c.value, e.inline ? {} : u.value], "aria-atomic": "true", "aria-label": o(e.label, d), "aria-live": "polite", role: "status" }, v), [e.dot ? void 0 : t.slots.badge ? (_b3 = (_a3 = t.slots).badge) == null ? void 0 : _b3.call(_a3) : e.icon ? g(Xe, { icon: e.icon }, null) : f]), [[Ln, e.modelValue]])];
      } })])];
    } });
  }), {};
} }), QV = j({ color: String, density: String, ...xe() }, "VBannerActions"), My = ee()({ name: "VBannerActions", props: QV(), setup(e, t) {
  let { slots: n } = t;
  return yt({ VBtn: { color: e.color, density: e.density, slim: true, variant: "text" } }), ae(() => {
    var _a2;
    return S("div", { class: ne(["v-banner-actions", e.class]), style: me(e.style) }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  }), {};
} }), Ey = pa("v-banner-text"), eI = j({ avatar: String, bgColor: String, color: String, icon: Ie, lines: String, stacked: Boolean, sticky: Boolean, text: String, ...Ut(), ...xe(), ...bt(), ...Ct(), ...Sl({ mobile: null }), ...Vt(), ...ea(), ...io(), ...dt(), ...Re(), ...Ye() }, "VBanner"), tI = ee()({ name: "VBanner", props: eI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Je(() => e.bgColor), { borderClasses: o } = tn(e), { densityClasses: i } = Nt(e), { displayClasses: r, mobile: s } = kn(e), { dimensionStyles: u } = _t(e), { elevationClasses: c } = At(e), { locationStyles: d } = Ua(e), { positionClasses: f } = ro(e), { roundedClasses: v } = gt(e), { themeClasses: p } = qe(e), m = B(() => e.color), h = B(() => e.density);
  yt({ VBannerActions: { color: m, density: h } }), ae(() => {
    const b = !!(e.text || n.text), w = !!(e.avatar || e.icon), I = !!(w || n.prepend);
    return g(e.tag, { class: ne(["v-banner", { "v-banner--stacked": e.stacked || s.value, "v-banner--sticky": e.sticky, [`v-banner--${e.lines}-line`]: !!e.lines }, p.value, a.value, o.value, i.value, r.value, c.value, f.value, v.value, e.class]), style: me([l.value, u.value, d.value, e.style]), role: "banner" }, { default: () => {
      var _a2;
      return [I && S("div", { key: "prepend", class: "v-banner__prepend" }, [n.prepend ? g(Fe, { key: "prepend-defaults", disabled: !w, defaults: { VAvatar: { color: m.value, density: h.value, icon: e.icon, image: e.avatar } } }, n.prepend) : g(xn, { key: "prepend-avatar", color: m.value, density: h.value, icon: e.icon, image: e.avatar }, null)]), S("div", { class: "v-banner__content" }, [b && g(Ey, { key: "text" }, { default: () => {
        var _a3;
        return [((_a3 = n.text) == null ? void 0 : _a3.call(n)) ?? e.text];
      } }), (_a2 = n.default) == null ? void 0 : _a2.call(n)]), n.actions && g(My, { key: "actions" }, n.actions)];
    } });
  });
} }), nI = j({ baseColor: String, bgColor: String, color: String, grow: Boolean, mode: { type: String, validator: (e) => !e || ["horizontal", "shift"].includes(e) }, height: { type: [Number, String], default: 56 }, active: { type: Boolean, default: true }, ...Ut(), ...xe(), ...bt(), ...Vt(), ...dt(), ...xl({ name: "bottom-navigation" }), ...Re({ tag: "header" }), ...Cl({ selectedClass: "v-btn--selected" }), ...Ye() }, "VBottomNavigation"), aI = ee()({ name: "VBottomNavigation", props: nI(), emits: { "update:active": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = Lr(), { borderClasses: l } = tn(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Je(() => e.bgColor), { densityClasses: r } = Nt(e), { elevationClasses: s } = At(e), { roundedClasses: u } = gt(e), { ssrBootStyles: c } = wl(), d = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = Ce(e, "active", e.active), { layoutItemStyles: v } = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: B(() => f.value ? d.value : 0), elementSize: d, active: f, absolute: B(() => e.absolute) });
  return Ga(e, Wc), yt({ VBtn: { baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), stacked: B(() => e.mode !== "horizontal"), variant: "text" } }, { scoped: true }), ae(() => g(e.tag, { class: ne(["v-bottom-navigation", { "v-bottom-navigation--active": f.value, "v-bottom-navigation--grow": e.grow, "v-bottom-navigation--shift": e.mode === "shift" }, a.value, o.value, l.value, r.value, s.value, u.value, e.class]), style: me([i.value, v.value, { height: ve(d.value) }, c.value, e.style]) }, { default: () => [n.default && S("div", { class: "v-bottom-navigation__content" }, [n.default()])] })), {};
} }), By = j({ fullscreen: Boolean, scrollable: Boolean, ...ze(Si({ captureFocus: true, origin: "center center", scrollStrategy: "block", transition: { component: Or }, zIndex: 2400, retainFocus: true }), ["disableInitialFocus"]) }, "VDialog"), Cu = ee()({ name: "VDialog", props: By(), emits: { "update:modelValue": (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), { scopeId: o } = Vl(), i = O();
  function r() {
    var _a2;
    n("afterEnter"), (e.scrim || e.retainFocus) && ((_a2 = i.value) == null ? void 0 : _a2.contentEl) && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({ preventScroll: true });
  }
  function s() {
    n("afterLeave");
  }
  return se(l, async (u) => {
    var _a2;
    u || (await Be(), (_a2 = i.value.activatorEl) == null ? void 0 : _a2.focus({ preventScroll: true }));
  }), ae(() => {
    const u = Xn.filterProps(e), c = q({ "aria-haspopup": "dialog" }, e.activatorProps), d = q({ tabindex: -1 }, e.contentProps);
    return g(Xn, q({ ref: i, class: ["v-dialog", { "v-dialog--fullscreen": e.fullscreen, "v-dialog--scrollable": e.scrollable }, e.class], style: e.style }, u, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, "aria-modal": "true", activatorProps: c, contentProps: d, height: e.fullscreen ? void 0 : e.height, width: e.fullscreen ? void 0 : e.width, maxHeight: e.fullscreen ? void 0 : e.maxHeight, maxWidth: e.fullscreen ? void 0 : e.maxWidth, role: "dialog", onAfterEnter: r, onAfterLeave: s }, o), { activator: a.activator, default: function() {
      for (var f = arguments.length, v = new Array(f), p = 0; p < f; p++) v[p] = arguments[p];
      return g(Fe, { root: "VDialog" }, { default: () => {
        var _a2;
        return [(_a2 = a.default) == null ? void 0 : _a2.call(a, ...v)];
      } });
    } });
  }), Dt({}, i);
} }), lI = j({ inset: Boolean, ...By({ transition: "bottom-sheet-transition" }) }, "VBottomSheet"), oI = ee()({ name: "VBottomSheet", props: lI(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue");
  return ae(() => {
    const l = Cu.filterProps(e);
    return g(Cu, q(l, { contentClass: ["v-bottom-sheet__content", e.contentClass], modelValue: a.value, "onUpdate:modelValue": (o) => a.value = o, class: ["v-bottom-sheet", { "v-bottom-sheet--inset": e.inset }, e.class], style: e.style }), n);
  }), {};
} }), iI = j({ divider: [Number, String], ...xe() }, "VBreadcrumbsDivider"), $y = ee()({ name: "VBreadcrumbsDivider", props: iI(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    var _a2;
    return S("li", { "aria-hidden": "true", class: ne(["v-breadcrumbs-divider", e.class]), style: me(e.style) }, [((_a2 = n == null ? void 0 : n.default) == null ? void 0 : _a2.call(n)) ?? e.divider]);
  }), {};
} }), rI = j({ active: Boolean, activeClass: String, activeColor: String, color: String, disabled: Boolean, title: String, ...xe(), ...on(Ct(), ["width", "maxWidth"]), ...yi(), ...Re({ tag: "li" }) }, "VBreadcrumbsItem"), Ry = ee()({ name: "VBreadcrumbsItem", props: rI(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = hi(e, a), o = _(() => {
    var _a2;
    return e.active || ((_a2 = l.isActive) == null ? void 0 : _a2.value);
  }), { dimensionStyles: i } = _t(e), { textColorClasses: r, textColorStyles: s } = $t(() => o.value ? e.activeColor : e.color);
  return ae(() => g(e.tag, { class: ne(["v-breadcrumbs-item", { "v-breadcrumbs-item--active": o.value, "v-breadcrumbs-item--disabled": e.disabled, [`${e.activeClass}`]: o.value && e.activeClass }, r.value, e.class]), style: me([s.value, i.value, e.style]), "aria-current": o.value ? "page" : void 0 }, { default: () => {
    var _a2, _b2;
    return [l.isLink.value ? S("a", q({ class: "v-breadcrumbs-item--link", onClick: l.navigate.value }, l.linkProps), [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title]) : ((_b2 = n.default) == null ? void 0 : _b2.call(n)) ?? e.title];
  } })), {};
} }), sI = j({ activeClass: String, activeColor: String, bgColor: String, color: String, disabled: Boolean, divider: { type: String, default: "/" }, icon: Ie, items: { type: Array, default: () => [] }, ...xe(), ...bt(), ...dt(), ...Re({ tag: "ul" }) }, "VBreadcrumbs"), uI = ee()({ name: "VBreadcrumbs", props: sI(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Je(() => e.bgColor), { densityClasses: o } = Nt(e), { roundedClasses: i } = gt(e);
  yt({ VBreadcrumbsDivider: { divider: B(() => e.divider) }, VBreadcrumbsItem: { activeClass: B(() => e.activeClass), activeColor: B(() => e.activeColor), color: B(() => e.color), disabled: B(() => e.disabled) } });
  const r = _(() => e.items.map((s) => typeof s == "string" ? { item: { title: s }, raw: s } : { item: s, raw: s }));
  return ae(() => {
    const s = !!(n.prepend || e.icon);
    return g(e.tag, { class: ne(["v-breadcrumbs", a.value, o.value, i.value, e.class]), style: me([l.value, e.style]) }, { default: () => {
      var _a2;
      return [s && S("li", { key: "prepend", class: "v-breadcrumbs__prepend" }, [n.prepend ? g(Fe, { key: "prepend-defaults", disabled: !e.icon, defaults: { VIcon: { icon: e.icon, start: true } } }, n.prepend) : g(Xe, { key: "prepend-icon", start: true, icon: e.icon }, null)]), r.value.map((u, c, d) => {
        var _a3;
        let { item: f, raw: v } = u;
        return S(be, null, [((_a3 = n.item) == null ? void 0 : _a3.call(n, { item: f, index: c })) ?? g(Ry, q({ key: c, disabled: c >= d.length - 1 }, typeof f == "string" ? { title: f } : f), { default: n.title ? () => {
          var _a4;
          return (_a4 = n.title) == null ? void 0 : _a4.call(n, { item: f, index: c });
        } : void 0 }), c < d.length - 1 && g($y, null, { default: n.divider ? () => {
          var _a4;
          return (_a4 = n.divider) == null ? void 0 : _a4.call(n, { item: v, index: c });
        } : void 0 })]);
      }), (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  }), {};
} }), cI = j({ active: { type: Boolean, default: void 0 }, activeColor: String, activeIcon: [String, Function, Object], activeVariant: String, baseVariant: { type: String, default: "tonal" }, disabled: Boolean, height: [Number, String], width: [Number, String], hideOverlay: Boolean, icon: [String, Function, Object], iconColor: String, loading: Boolean, opacity: [Number, String], readonly: Boolean, rotate: [Number, String], size: { type: [Number, String], default: "default" }, sizes: { type: Array, default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]] }, text: { type: [String, Number, Boolean], default: void 0 }, ...Ut(), ...xe(), ...Vt(), ...Hh(), ...dt(), ...Re({ tag: "button" }), ...Ye(), ...Cn({ variant: "flat" }) }, "VIconBtn"), Fy = ee()({ name: "VIconBtn", props: cI(), emits: { "update:active": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "active"), { themeClasses: o } = qe(e), { borderClasses: i } = tn(e), { elevationClasses: r } = At(e), { roundedClasses: s } = gt(e), { colorClasses: u, colorStyles: c, variantClasses: d } = ka(() => ({ color: (() => {
    if (!e.disabled) return l.value ? e.activeColor ?? e.color ?? "surface-variant" : e.color;
  })(), variant: l.value === void 0 ? e.variant : l.value ? e.activeVariant ?? e.variant : e.baseVariant ?? e.variant })), f = new Map(e.sizes);
  function v() {
    e.disabled || e.readonly || l.value === void 0 || e.tag === "a" && n.href || (l.value = !l.value);
  }
  return ae(() => {
    const p = l.value ? e.activeIcon ?? e.icon : e.icon, m = e.size, b = f.has(m) ? f.get(m) : m, w = e.height ?? b, I = e.width ?? b, { iconSize: V } = zh(e, () => new Map(e.iconSizes).get(m)), k = { icon: p, size: V.value, color: e.iconColor, opacity: e.opacity };
    return g(e.tag, { type: e.tag === "button" ? "button" : void 0, class: ne([{ "v-icon-btn": true, "v-icon-btn--active": l.value, "v-icon-btn--disabled": e.disabled, "v-icon-btn--loading": e.loading, "v-icon-btn--readonly": e.readonly, [`v-icon-btn--${e.size}`]: true }, o.value, u.value, i.value, r.value, s.value, d.value, e.class]), style: me([{ "--v-icon-btn-rotate": ve(e.rotate, "deg"), "--v-icon-btn-height": ve(w), "--v-icon-btn-width": ve(I) }, c.value, e.style]), tabindex: e.disabled || e.readonly ? -1 : 0, onClick: v }, { default: () => {
      var _a2;
      return [xa(!e.hideOverlay, "v-icon-btn"), S("div", { class: "v-icon-btn__content", "data-no-activator": "" }, [!a.default && p ? g(Xe, q({ key: "content-icon" }, k), null) : g(Fe, { key: "content-defaults", disabled: !p, defaults: { VIcon: { ...k } } }, { default: () => {
        var _a3;
        return ((_a3 = a.default) == null ? void 0 : _a3.call(a)) ?? Te(e.text);
      } })]), !!e.loading && S("span", { key: "loader", class: "v-icon-btn__loader" }, [((_a2 = a.loader) == null ? void 0 : _a2.call(a)) ?? g(Oa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: "disable-shrink", width: "2", size: V.value }, null)])];
    } });
  }), {};
} });
function dI(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
const Ly = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/, Oy = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/, fI = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], vI = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mI = 28, gI = 31, dd = 12, Ny = 1, Yr = 1, Ba = 7, Ev = 60, hI = 59, yI = 1440, bI = 24, pI = 23, SI = 0, xI = 1e4, kI = 100, wI = 100, CI = 1e4;
function _I(e, t, n) {
  const a = rn(e);
  return Gy(a, t[0], Uy), Mn(a), n && fl(a, n, a.hasTime), a;
}
function VI(e, t, n) {
  const a = rn(e);
  return Gy(a, t[t.length - 1]), Mn(a), n && fl(a, n, a.hasTime), a;
}
function Hy(e) {
  const t = rn(e);
  return t.day = Yr, Kr(t), Mn(t), t;
}
function zy(e) {
  const t = rn(e);
  return t.day = vd(t.year, t.month), Kr(t), Mn(t), t;
}
function Rl(e) {
  return isFinite(parseInt(e));
}
function II(e) {
  return typeof e == "number" && isFinite(e) || !!Oy.exec(e) || typeof e == "object" && isFinite(e.hour) && isFinite(e.minute);
}
function Bv(e) {
  if (typeof e == "number") return e;
  if (typeof e == "string") {
    const t = Oy.exec(e);
    return t ? parseInt(t[1]) * 60 + parseInt(t[3] || 0) : false;
  } else return typeof e == "object" ? typeof e.hour != "number" || typeof e.minute != "number" ? false : e.hour * 60 + e.minute : false;
}
function jl(e) {
  return typeof e == "number" && isFinite(e) || typeof e == "string" && !!Ly.exec(e) || e instanceof Date;
}
function ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  if (typeof e == "number" && isFinite(e) && (e = new Date(e)), e instanceof Date) {
    const o = fd(e);
    return n && fl(o, n, o.hasTime), o;
  }
  if (typeof e != "string") {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const a = Ly.exec(e);
  if (!a) {
    if (t) throw new Error(`${e} is not a valid timestamp. It must be a Date, number of milliseconds since Epoch, or a string in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored.`);
    return null;
  }
  const l = { date: e, time: "", year: parseInt(a[1]), month: parseInt(a[2]), day: parseInt(a[4]) || 1, hour: parseInt(a[6]) || 0, minute: parseInt(a[8]) || 0, weekday: 0, hasDay: !!a[4], hasTime: !!(a[6] && a[8]), past: false, present: false, future: false };
  return Kr(l), Mn(l), n && fl(l, n, l.hasTime), l;
}
function fd(e) {
  return Mn({ date: "", time: "", year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate(), weekday: e.getDay(), hour: e.getHours(), minute: e.getMinutes(), hasDay: true, hasTime: true, past: false, present: true, future: false });
}
function Tt(e) {
  return e.year * xI + e.month * kI + e.day;
}
function _u(e) {
  return e.hour * wI + e.minute;
}
function Wa(e) {
  return Tt(e) * CI + _u(e);
}
function fl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = Tt(t), l = Tt(e), o = a === l;
  return e.hasTime && n && o && (a = _u(t), l = _u(e), o = a === l), e.past = l < a, e.present = o, e.future = l > a, e;
}
function $v(e) {
  return e instanceof Date || typeof e == "number" && isFinite(e);
}
function Rv(e, t, n) {
  return e.hasTime !== t && (e.hasTime = t, t || (e.hour = pI, e.minute = hI, e.time = jy(e))), e;
}
function Wy(e, t, n) {
  return e.hasTime = true, e.hour = 0, e.minute = 0, Vu(e, t), Mn(e), n && fl(e, n, true), e;
}
function Kr(e) {
  return e.weekday = PI(e), e;
}
function Mn(e) {
  return e.time = jy(e), e.date = TI(e), e;
}
function PI(e) {
  if (e.hasDay) {
    const t = Math.floor, n = e.day, a = (e.month + 9) % dd + 1, l = t(e.year / 100), o = e.year % 100 - (e.month <= 2 ? 1 : 0);
    return ((n + t(2.6 * a - 0.2) - 2 * l + o + t(o / 4) + t(l / 4)) % 7 + 7) % 7;
  }
  return e.weekday;
}
function vd(e, t) {
  return dI(e) ? vI[t] : fI[t];
}
function rn(e) {
  if (e == null) return null;
  const { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v } = e;
  return { date: t, time: n, year: a, month: l, day: o, weekday: i, hour: r, minute: s, hasDay: u, hasTime: c, past: d, present: f, future: v };
}
function il(e, t) {
  let n = String(e);
  for (; n.length < t; ) n = "0" + n;
  return n;
}
function TI(e) {
  let t = `${il(e.year, 4)}-${il(e.month, 2)}`;
  return e.hasDay && (t += `-${il(e.day, 2)}`), t;
}
function jy(e) {
  return e.hasTime ? `${il(e.hour, 2)}:${il(e.minute, 2)}` : "";
}
function Vu(e, t) {
  for (e.minute += t; e.minute >= Ev; ) e.minute -= Ev, e.hour++, e.hour >= bI && ($a(e), e.hour = SI);
  return e;
}
function $a(e) {
  return e.day++, e.weekday = (e.weekday + 1) % Ba, e.day > mI && e.day > vd(e.year, e.month) && (e.day = Yr, e.month++, e.month > dd && (e.month = Ny, e.year++)), e;
}
function Uy(e) {
  return e.day--, e.weekday = (e.weekday + 6) % Ba, e.day < Yr && (e.month--, e.month < Ny && (e.year--, e.month = dd), e.day = vd(e.year, e.month)), e;
}
function Qa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $a, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  for (; --n >= 0; ) t(e);
  return e;
}
function AI(e, t) {
  const n = (t.year - e.year) * 525600, a = (t.month - e.month) * 43800, l = (t.day - e.day) * 1440, o = (t.hour - e.hour) * 60, i = t.minute - e.minute;
  return n + a + l + o + i;
}
function Gy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $a, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 6;
  for (; e.weekday !== t && --a >= 0; ) n(e);
  return e;
}
function DI(e) {
  const t = [1, 1, 1, 1, 1, 1, 1], n = [0, 0, 0, 0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) n[e[a]] = 1;
  for (let a = 0; a < Ba; a++) {
    let l = 1;
    for (let o = 1; o < Ba; o++) {
      const i = (a + o) % Ba;
      if (n[i]) break;
      l++;
    }
    t[a] = n[a] * l;
  }
  return t;
}
function Iu(e) {
  const t = `${il(e.hour, 2)}:${il(e.minute, 2)}`, n = e.date;
  return /* @__PURE__ */ new Date(`${n}T${t}:00+00:00`);
}
function mr(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 42, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  const i = Tt(t), r = [];
  let s = rn(e), u = 0, c = u === i;
  if (i < Tt(e)) throw new Error("End date is earlier than start date.");
  for (; (!c || r.length < o) && r.length < l; ) {
    if (u = Tt(s), c = c || u === i, a[s.weekday] === 0) {
      s = $a(s);
      continue;
    }
    const d = rn(s);
    Mn(d), fl(d, n), r.push(d), s = Qa(s, $a, a[s.weekday]);
  }
  if (!r.length) throw new Error("No dates found using specified start date, end date, and weekdays.");
  return r;
}
function MI(e, t, n, a, l) {
  const o = [];
  for (let i = 0; i < a; i++) {
    const r = t + i * n, s = rn(e);
    o.push(Wy(s, r, l));
  }
  return o;
}
function Mo(e, t) {
  const n = (a, l) => "";
  return typeof Intl > "u" || typeof Intl.DateTimeFormat > "u" ? n : (a, l) => {
    try {
      return new Intl.DateTimeFormat(e || void 0, t(a, l)).format(Iu(a));
    } catch {
      return "";
    }
  };
}
function EI(e) {
  if (typeof e == "string" && (e = e.split(",")), Array.isArray(e)) {
    const t = e.map((l) => parseInt(l));
    if (t.length > Ba || t.length === 0) return false;
    const n = {};
    let a = false;
    for (let l = 0; l < t.length; l++) {
      const o = t[l];
      if (!isFinite(o) || o < 0 || o >= Ba) return false;
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
function BI(e) {
  const t = Et({ now: ua("0000-00-00 00:00", true), today: ua("0000-00-00", true) }), n = _(() => e.now && jl(e.now) ? ua(e.now, true) : null);
  function a() {
    t.now.present = t.today.present = true, t.now.past = t.today.past = false, t.now.future = t.today.future = false;
  }
  function l() {
    return fd(/* @__PURE__ */ new Date());
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
const Xr = j({ start: { type: [String, Number, Date], validate: jl, default: () => fd(/* @__PURE__ */ new Date()).date }, end: { type: [String, Number, Date], validate: jl }, weekdays: { type: [Array, String], default: () => [0, 1, 2, 3, 4, 5, 6], validate: EI }, firstDayOfWeek: [Number, String], firstDayOfYear: [Number, String], weekdayFormat: { type: Function, default: null }, dayFormat: { type: Function, default: null }, locale: String, now: { type: String, validator: jl }, type: { type: String, default: "month" } }, "VCalendar-base");
function md(e) {
  const { times: t, updateTimes: n } = BI({ now: e.now }), a = ch(e), l = pl(), o = _(() => e.type === "month" ? Hy(ua(e.start, true)) : ua(e.start, true)), i = _(() => {
    const V = o.value, k = e.end && ua(e.end) || V, y = Wa(k) < Wa(V) ? V : k;
    return e.type === "month" ? zy(y) : y;
  }), r = _(() => jl(e.modelValue) ? ua(e.modelValue, true) : o.value || t.today), s = _(() => {
    const V = Array.isArray(e.weekdays) ? e.weekdays : (e.weekdays || "").split(",").map((y) => parseInt(y, 10)), k = l.toJsDate(l.startOfWeek(l.date(), e.firstDayOfWeek)).getDay();
    return [...V.toSorted().filter((y) => y >= k), ...V.toSorted().filter((y) => y < k)];
  }), u = _(() => {
    const V = r.value, k = parseInt(String(e.categoryDays)) || 1;
    switch (e.type) {
      case "day":
        return [V.weekday];
      case "4day":
        return [V.weekday, (V.weekday + 1) % 7, (V.weekday + 2) % 7, (V.weekday + 3) % 7];
      case "category":
        return Array.from({ length: k }, (y, C) => (V.weekday + C) % 7);
      default:
        return s.value;
    }
  }), c = _(() => DI(s.value)), d = _(() => mr(o.value, i.value, t.today, c.value)), f = _(() => e.dayFormat ? e.dayFormat : Mo(a.current.value, () => ({ timeZone: "UTC", day: "numeric" }))), v = _(() => e.weekdayFormat ? e.weekdayFormat : Mo(a.current.value, (V, k) => ({ timeZone: "UTC", weekday: k ? "short" : "long" })));
  function p(V) {
    return Ih(V);
  }
  function m(V) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return { "v-present": V.present, "v-past": V.past, "v-future": V.future, "v-outside": k };
  }
  function h(V) {
    return l.getWeek(l.date(V.date), e.firstDayOfWeek, e.firstDayOfYear);
  }
  function b(V) {
    return _I(V, s.value, t.today);
  }
  function w(V) {
    return VI(V, s.value, t.today);
  }
  function I(V) {
    return Mo(a.current.value, () => V);
  }
  return { times: t, locale: a, parsedValue: r, parsedWeekdays: s, effectiveWeekdays: u, weekdaySkips: c, parsedStart: o, parsedEnd: i, days: d, dayFormatter: f, weekdayFormatter: v, getColorProps: p, getRelativeClasses: m, getWeekNumber: h, getStartOfWeek: b, getEndOfWeek: w, getFormatter: I, updateTimes: n };
}
const Yy = j({ maxDays: { type: Number, default: 7 }, intervalHeight: { type: [Number, String], default: 48, validate: Rl }, intervalWidth: { type: [Number, String], default: 60, validate: Rl }, intervalMinutes: { type: [Number, String], default: 60, validate: Rl }, firstInterval: { type: [Number, String], default: 0, validate: Rl }, firstTime: { type: [Number, String, Object], validate: II }, intervalCount: { type: [Number, String], default: 24, validate: Rl }, intervalFormat: { type: Function, default: null }, intervalStyle: { type: Function, default: null }, showIntervalLabel: { type: Function, default: null } }, "VCalendar-intervals");
function Ky(e) {
  const t = md(e), n = re(), a = _(() => parseInt(String(e.firstInterval || 0))), l = _(() => parseInt(String(e.intervalMinutes || 60))), o = _(() => parseInt(String(e.intervalCount || 24))), i = _(() => parseFloat(String(e.intervalHeight || 48))), r = _(() => Bv(e.firstTime)), s = _(() => {
    const k = r.value;
    return k !== false && k >= 0 && k <= yI ? k : a.value * l.value;
  }), u = _(() => o.value * i.value), c = _(() => mr(t.parsedStart.value, t.parsedEnd.value, t.times.today, t.weekdaySkips.value, e.maxDays)), d = _(() => {
    const k = c.value, y = s.value, C = l.value, x = o.value, T = t.times.now;
    return k.map((P) => MI(P, y, C, x, T));
  }), f = _(() => e.intervalFormat ? e.intervalFormat : Mo(t.locale.current.value, (k, y) => y ? k.minute === 0 ? { timeZone: "UTC", hour: "numeric" } : { timeZone: "UTC", hour: "numeric", minute: "2-digit" } : { timeZone: "UTC", hour: "2-digit", minute: "2-digit" }));
  function v(k) {
    const y = d.value[0][0];
    return !(y.hour === k.hour && y.minute === k.minute);
  }
  function p(k) {
  }
  function m(k, y) {
    const C = rn(y), x = k.currentTarget.getBoundingClientRect(), T = s.value, P = k, M = k, D = P.changedTouches || P.touches, A = ((D && D[0] ? D[0].clientY : M.clientY) - x.top) / i.value, R = Math.floor(A * l.value), G = T + R;
    return Wy(C, G, t.times.now);
  }
  function h(k) {
    const y = rn(k);
    return y.timeToY = I, y.timeDelta = V, y.minutesToPixels = w, y.week = c.value, y.intervalRange = [s.value, s.value + o.value * l.value], y;
  }
  function b(k) {
    const y = I(k), C = n.value;
    return y === false || !C ? false : (C.scrollTop = y, true);
  }
  function w(k) {
    return k / l.value * i.value;
  }
  function I(k) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const C = y !== false;
    let T = V(k, typeof y != "boolean" ? y : void 0);
    return T === false || (T *= u.value, C ? T < 0 ? T = 0 : T > u.value && (T = u.value) : T < 0 ? T = T + u.value : T > u.value && (T = T - u.value)), T;
  }
  function V(k, y) {
    let C = Bv(k);
    if (C === false) return false;
    const x = o.value * l.value;
    if (y && typeof k == "object" && "day" in k) {
      const P = Tt(k), M = Tt(y);
      C += (P - M) * x;
    }
    const T = s.value;
    return (C - T) / x;
  }
  return { ...t, scrollAreaRef: n, parsedFirstInterval: a, parsedIntervalMinutes: l, parsedIntervalCount: o, parsedIntervalHeight: i, parsedFirstTime: r, firstMinute: s, bodyHeight: u, days: c, intervals: d, intervalFormatter: f, showIntervalLabelDefault: v, intervalStyleDefault: p, getTimestampAtEvent: m, getSlotScope: h, scrollToTime: b, minutesToPixels: w, timeToY: I, timeDelta: V };
}
function $I(e, t) {
  var _a2, _b2;
  const n = t.value, a = { passive: !((_a2 = t.modifiers) == null ? void 0 : _a2.active) };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = { handler: n, options: a }, ((_b2 = t.modifiers) == null ? void 0 : _b2.quiet) || n();
}
function RI(e, t) {
  var _a2;
  if (!((_a2 = e._onResize) == null ? void 0 : _a2[t.instance.$.uid])) return;
  const { handler: n, options: a } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const ei = { mounted: $I, unmounted: RI }, ko = en({ name: "VCalendarDaily", directives: { vResize: ei }, props: { color: String, shortWeekdays: { type: Boolean, default: true }, shortIntervals: { type: Boolean, default: true }, hideHeader: Boolean, ...Xr(), ...Yy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = O(0), o = O(), i = Ky(e);
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
    return S("div", { class: "v-calendar-daily__head", style: { marginRight: l.value + "px" } }, [d(), f()]);
  }
  function d() {
    var _a2;
    const E = ve(e.intervalWidth);
    return S("div", { class: "v-calendar-daily__intervals-head", style: { width: E } }, [(_a2 = n["interval-header"]) == null ? void 0 : _a2.call(n)]);
  }
  function f() {
    return i.days.value.map(v);
  }
  function v(E, A) {
    const R = bn(a, ":day", (G) => ({ nativeEvent: G, ...i.getSlotScope(E) }));
    return S("div", q({ key: E.date, class: ["v-calendar-daily_head-day", i.getRelativeClasses(E)] }, R), [m(E), h(E), p(E, A)]);
  }
  function p(E, A) {
    var _a2;
    return ((_a2 = n["day-header"]) == null ? void 0 : _a2.call(n, { week: i.days.value, ...E, index: A })) ?? [];
  }
  function m(E) {
    const A = E.present ? e.color : void 0;
    return S("div", q(i.getColorProps({ text: A }), { class: "v-calendar-daily_head-weekday" }), [i.weekdayFormatter.value(E, e.shortWeekdays)]);
  }
  function h(E) {
    var _a2;
    return S("div", { class: "v-calendar-daily_head-day-label" }, [((_a2 = n["day-label-header"]) == null ? void 0 : _a2.call(n, E)) ?? b(E)]);
  }
  function b(E) {
    const A = bn(a, ":date", (R) => ({ nativeEvent: R, ...E }));
    return g(Fy, q({ active: E.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Er }, A), { default: () => [i.dayFormatter.value(E, false)] });
  }
  function w() {
    return S("div", { class: "v-calendar-daily__body" }, [I()]);
  }
  function I() {
    return S("div", { ref: i.scrollAreaRef, class: "v-calendar-daily__scroll-area" }, [V()]);
  }
  function V() {
    return S("div", { ref: o, class: "v-calendar-daily__pane", style: { height: ve(i.bodyHeight.value) } }, [k()]);
  }
  function k() {
    var _a2;
    return S("div", { class: "v-calendar-daily__day-container" }, [P(), ((_a2 = n.days) == null ? void 0 : _a2.call(n)) ?? y()]);
  }
  function y() {
    return i.days.value.map((E, A) => {
      const R = bn(a, ":time", (G) => ({ nativeEvent: G, ...i.getSlotScope(i.getTimestampAtEvent(G, E)) }));
      return S("div", q({ key: E.date, class: ["v-calendar-daily__day", i.getRelativeClasses(E)] }, R), [x(A), C(E)]);
    });
  }
  function C(E) {
    var _a2;
    return ((_a2 = n["day-body"]) == null ? void 0 : _a2.call(n, i.getSlotScope(E))) ?? [];
  }
  function x(E) {
    return i.intervals.value[E].map(T);
  }
  function T(E) {
    var _a2;
    const A = ve(e.intervalHeight), R = e.intervalStyle || i.intervalStyleDefault;
    return S("div", { class: "v-calendar-daily__day-interval", key: E.time, style: me([{ height: A }, R(E)]) }, [(_a2 = n.interval) == null ? void 0 : _a2.call(n, i.getSlotScope(E))]);
  }
  function P() {
    const E = ve(e.intervalWidth), A = bn(a, ":interval", (R) => ({ nativeEvent: R, ...i.getTimestampAtEvent(R, i.parsedStart.value) }));
    return S("div", q({ class: "v-calendar-daily__intervals-body", style: { width: E } }, A), [M()]);
  }
  function M() {
    return i.intervals.value.length ? i.intervals.value[0].map(D) : null;
  }
  function D(E) {
    const A = ve(e.intervalHeight), R = e.shortIntervals, Y = (e.showIntervalLabel || i.showIntervalLabelDefault)(E) ? i.intervalFormatter.value(E, R) : void 0;
    return S("div", { key: E.time, class: "v-calendar-daily__interval", style: { height: A } }, [S("div", { class: "v-calendar-daily__interval-text" }, [Y])]);
  }
  return It(r), ae(() => lt(S("div", { class: ne(["v-calendar-daily", a.class]), onDragstart: (E) => E.preventDefault() }, [e.hideHeader ? void 0 : c(), w()]), [[ei, s, void 0, { quiet: true }]])), { ...i, scrollPush: l, pane: o, init: r, onResize: s, getScrollPush: u };
} });
function FI(e, t) {
  return typeof t == "function" ? t(e) : typeof t == "string" && typeof e == "object" && e ? e[t] : typeof e == "string" ? e : "";
}
function Xy(e, t) {
  return typeof e == "string" ? e.split(/\s*,\s/) : Array.isArray(e) ? e.map((n) => {
    if (typeof n == "string") return n;
    const a = typeof n.categoryName == "string" ? n.categoryName : FI(n, t);
    return { ...n, categoryName: a };
  }) : [];
}
const LI = en({ name: "VCalendarCategory", props: { categories: { type: [Array, String], default: "" }, categoryText: [String, Function], categoryForInvalid: { type: String, default: "" }, ...Xr(), ...Yy() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = Ky(e), o = _(() => Xy(e.categories, e.categoryText));
  function i(h, b) {
    const w = typeof b == "object" && b && b.categoryName === e.categoryForInvalid ? null : b;
    return { ...h, category: w };
  }
  function r(h) {
    return S("div", { class: "v-calendar-category__columns" }, [o.value.map((b) => s(h, i(h, b)))]);
  }
  function s(h, b) {
    var _a2, _b2;
    const w = typeof b.category == "object" ? b.category.categoryName : b.category, I = bn(a, ":dayCategory", () => i(l.getSlotScope(h) || h, b.category));
    return S("div", q({ class: "v-calendar-category__column-header" }, I), [((_a2 = n.category) == null ? void 0 : _a2.call(n, b)) ?? u(w), (_b2 = n["day-header"]) == null ? void 0 : _b2.call(n, b)]);
  }
  function u(h) {
    return S("div", { class: "v-calendar-category__category" }, [h === null ? e.categoryForInvalid : h]);
  }
  function c() {
    const h = [];
    return l.days.value.forEach((b, w) => {
      const I = new Array(o.value.length || 1);
      I.fill(b), h.push(...I.map((V, k) => d(V, w, k)));
    }), h;
  }
  function d(h, b, w) {
    const I = o.value[w], V = bn(a, ":time", (k) => l.getSlotScope(l.getTimestampAtEvent(k, h)));
    return S("div", q({ key: h.date + "-" + w, class: ["v-calendar-daily__day", l.getRelativeClasses(h)] }, V), [f(b, I), p(h, I)]);
  }
  function f(h, b) {
    return l.intervals.value[h].map((w) => v(w, b));
  }
  function v(h, b) {
    var _a2;
    const w = ve(e.intervalHeight), I = e.intervalStyle || l.intervalStyleDefault;
    return S("div", { key: h.time, class: "v-calendar-daily__day-interval", style: me([{ height: w }, I({ ...h, category: b })]) }, [(_a2 = n.interval) == null ? void 0 : _a2.call(n, i(l.getSlotScope(h), b))]);
  }
  function p(h, b) {
    return S("div", { class: "v-calendar-category__columns" }, [m(h, b)]);
  }
  function m(h, b) {
    var _a2;
    const w = bn(a, ":timeCategory", (I) => i(l.getSlotScope(l.getTimestampAtEvent(I, h)), b));
    return S("div", q({ class: "v-calendar-category__column" }, w), [(_a2 = n["day-body"]) == null ? void 0 : _a2.call(n, i(l.getSlotScope(h), b))]);
  }
  return ae(() => g(ko, q({ class: ["v-calendar-daily", "v-calendar-category"] }, e), { ...n, days: c, "day-header": r })), { ...l, parsedCategories: o };
} }), Fv = en({ name: "VCalendarWeekly", props: { minWeeks: { validate: Rl, default: 1 }, monthFormat: Function, showWeek: Boolean, color: String, shortWeekdays: { type: Boolean, default: true }, showMonthOnFirst: { type: Boolean, default: true }, shortMonths: { type: Boolean, default: true }, hideHeader: Boolean, ...Xr() }, setup(e, t) {
  let { slots: n, attrs: a } = t;
  const l = md(e), o = Lr(), i = _(() => parseInt(String(e.minWeeks))), r = _(() => {
    const k = i.value * l.parsedWeekdays.value.length, y = l.getStartOfWeek(l.parsedStart.value), C = l.getEndOfWeek(l.parsedEnd.value);
    return mr(y, C, l.times.today, l.weekdaySkips.value, Number.MAX_SAFE_INTEGER, k);
  }), s = _(() => {
    const k = l.times.today, y = l.getStartOfWeek(k), C = l.getEndOfWeek(k);
    return mr(y, C, k, l.weekdaySkips.value, l.parsedWeekdays.value.length, l.parsedWeekdays.value.length);
  }), u = _(() => e.monthFormat ? e.monthFormat : Mo(l.locale.current.value, (k, y) => ({ timeZone: "UTC", month: y ? "short" : "long" })));
  function c(k) {
    const y = Tt(k);
    return y < Tt(l.parsedStart.value) || y > Tt(l.parsedEnd.value);
  }
  function d() {
    return S("div", { class: "v-calendar-weekly__head", role: "row" }, [f()]);
  }
  function f() {
    const k = s.value.map(v);
    return e.showWeek && k.unshift(S("div", { class: "v-calendar-weekly__head-weeknumber" }, null)), k;
  }
  function v(k, y) {
    const C = c(r.value[y]), x = k.present ? e.color : void 0;
    return S("div", q(l.getColorProps({ text: x }), { key: k.date, class: ["v-calendar-weekly__head-weekday", l.getRelativeClasses(k, C)], role: "columnheader" }), [l.weekdayFormatter.value(k, e.shortWeekdays)]);
  }
  function p() {
    const k = r.value, y = l.parsedWeekdays.value.length, C = [];
    for (let x = 0; x < k.length; x += y) C.push(m(k.slice(x, x + y), h(k[x])));
    return C;
  }
  function m(k, y) {
    const C = k.map((x, T) => w(x, T, k));
    return e.showWeek && C.unshift(b(y)), S("div", { key: k[0].date, class: "v-calendar-weekly__week", role: "row" }, [C]);
  }
  function h(k) {
    return l.getWeekNumber(k);
  }
  function b(k) {
    return S("div", { class: "v-calendar-weekly__weeknumber" }, [S("small", null, [String(k)])]);
  }
  function w(k, y, C) {
    var _a2;
    const x = c(k), T = bn(a, ":day", (P) => ({ nativeEvent: P, ...k }));
    return S("div", q({ key: k.date, class: ["v-calendar-weekly__day", l.getRelativeClasses(k, x)], role: "cell" }, T), [I(k), (_a2 = n.day) == null ? void 0 : _a2.call(n, { outside: x, index: y, week: C, ...k })]);
  }
  function I(k) {
    var _a2;
    return S("div", { class: "v-calendar-weekly__day-label" }, [((_a2 = n["day-label"]) == null ? void 0 : _a2.call(n, k)) ?? V(k)]);
  }
  function V(k) {
    const y = k.day === 1 && e.showMonthOnFirst, C = bn(a, ":date", (x) => ({ nativeEvent: x, ...k }));
    return g(Fy, q({ active: k.present, activeColor: e.color, variant: "outlined", baseVariant: "text", "onUpdate:active": Er }, C), { default: () => [y ? u.value(k, e.shortMonths) + " " + l.dayFormatter.value(k, false) : l.dayFormatter.value(k, false)] });
  }
  return ae(() => S("div", { class: ne(["v-calendar-weekly", o.themeClasses.value]), onDragstart: (k) => k.preventDefault() }, [e.hideHeader ? void 0 : d(), p()])), { ...l, days: r, todayWeek: s, monthFormatter: u, isOutside: c };
} }), OI = 864e5;
function qy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const n = e.map((a) => ({ event: a, columnCount: 0, column: 0, left: 0, width: 100 }));
  return n.sort((a, l) => Math.max(t, a.event.startTimestampIdentifier) - Math.max(t, l.event.startTimestampIdentifier) || l.event.endTimestampIdentifier - a.event.endTimestampIdentifier), n;
}
function En(e, t, n, a) {
  return (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true) ? !(e >= a || t <= n) : !(e > a || t < n);
}
function Lv(e) {
  e.forEach((t) => {
    t.visuals.forEach((n) => {
      n.columnCount = e.length;
    });
  });
}
function Zy(e) {
  return [e.startTimestampIdentifier, e.endTimestampIdentifier];
}
function Jy(e) {
  return [e.startIdentifier, e.endIdentifier];
}
function Qy(e, t) {
  return [Math.max(t, e.startTimestampIdentifier), Math.min(t + OI, e.endTimestampIdentifier)];
}
function NI(e, t, n, a) {
  for (let l = 0; l < e.length; l++) {
    const o = e[l];
    let i = false;
    if (En(t, n, o.start, o.end, a)) for (let r = 0; r < o.visuals.length; r++) {
      const s = o.visuals[r], [u, c] = a ? Zy(s.event) : Jy(s.event);
      if (En(t, n, u, c, a)) {
        i = true;
        break;
      }
    }
    if (!i) return l;
  }
  return -1;
}
function eb(e) {
  const t = { groups: [], min: -1, max: -1, reset: () => {
    t.groups = [], t.min = t.max = -1;
  }, getVisuals: function(n, a, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    (n.weekday === e || o) && t.reset();
    const i = Wa(n), r = qy(a, i);
    return r.forEach((s) => {
      const [u, c] = l ? Zy(s.event) : Jy(s.event);
      t.groups.length > 0 && !En(u, c, t.min, t.max, l) && (Lv(t.groups), t.reset());
      let d = NI(t.groups, u, c, l);
      d === -1 && (d = t.groups.length, t.groups.push({ start: u, end: c, visuals: [] }));
      const f = t.groups[d];
      f.visuals.push(s), f.start = Math.min(f.start, u), f.end = Math.max(f.end, c), s.column = d, t.min === -1 ? (t.min = u, t.max = c) : (t.min = Math.min(t.min, u), t.max = Math.max(t.max, c));
    }), Lv(t.groups), l && t.reset(), r;
  } };
  return t;
}
const Ov = 100, HI = (e, t, n) => {
  const a = eb(t);
  return (l, o, i, r) => {
    const s = a.getVisuals(l, o, i, r);
    return i && s.forEach((u) => {
      u.left = u.column * Ov / u.columnCount, u.width = Ov / u.columnCount;
    }), s;
  };
}, $i = 100, zI = 5, WI = 1.7, jI = (e, t, n) => {
  const a = eb(t);
  return (l, o, i, r) => {
    if (!i) return a.getVisuals(l, o, i, r);
    const s = Wa(l), u = qy(o, s), c = ZI(u, s);
    for (const d of c) {
      const f = [];
      for (const v of d.visuals) {
        const p = JI(v, s), m = KI(p, f);
        if (m === false) {
          const h = XI(p, f);
          h && (p.parent = h, p.sibling = En(p.start, p.end, h.start, Ui(h.start, n)), p.index = h.index + 1, h.children.push(p));
        } else {
          const [h] = Nv(p, f, m - 1, m - 1), b = Nv(p, f, m + 1, m + f.length, true);
          p.children = b, p.index = m, h && (p.parent = h, p.sibling = En(p.start, p.end, h.start, Ui(h.start, n)), h.children.push(p));
          for (const w of b) w.parent === h && (w.parent = p), w.index - p.index <= 1 && p.sibling && En(p.start, Ui(p.start, n), w.start, w.end) && (w.sibling = true);
        }
        f.push(p);
      }
      UI(f, n);
    }
    return u.sort((d, f) => d.left - f.left || d.event.startTimestampIdentifier - f.event.startTimestampIdentifier), u;
  };
};
function UI(e, t) {
  for (const n of e) {
    const { visual: a, parent: l } = n, o = tb(n) + 1, i = l ? l.visual.left : 0, r = $i - i, s = Math.min(zI, $i / o), u = GI(n, e), c = r / (o - n.index + 1), d = r / (o - n.index + (n.sibling ? 1 : 0)) * u;
    l && (a.left = n.sibling ? i + c : i + s), a.width = qI(n, e, t) ? $i - a.left : Math.min($i - a.left, d * WI);
  }
}
function GI(e, t) {
  if (!e.children.length) return 1;
  const n = e.index + t.length;
  return e.children.reduce((l, o) => Math.min(l, o.index), n) - e.index;
}
function YI(e, t) {
  const n = [];
  for (const a of t) En(e.start, e.end, a.start, a.end) && n.push(a.index);
  return n;
}
function KI(e, t) {
  const n = YI(e, t);
  n.sort();
  for (let a = 0; a < n.length; a++) if (a < n[a]) return a;
  return false;
}
function Nv(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const o = [];
  for (const i of t) i.index >= n && i.index <= a && En(e.start, e.end, i.start, i.end) && o.push(i);
  if (l && o.length > 0) {
    const i = o.reduce((r, s) => Math.min(r, s.index), o[0].index);
    return o.filter((r) => r.index === i);
  }
  return o;
}
function XI(e, t) {
  let n = null;
  for (const a of t) En(e.start, e.end, a.start, a.end) && (n === null || a.index > n.index) && (n = a);
  return n;
}
function qI(e, t, n) {
  for (const a of t) if (a !== e && a.index > e.index && En(e.start, Ui(e.start, n), a.start, a.end)) return false;
  return true;
}
function ZI(e, t) {
  const n = [];
  for (const a of e) {
    const [l, o] = Qy(a.event, t);
    let i = false;
    for (const r of n) if (En(l, o, r.start, r.end)) {
      r.visuals.push(a), r.end = Math.max(r.end, o), i = true;
      break;
    }
    i || n.push({ start: l, end: o, visuals: [a] });
  }
  return n;
}
function JI(e, t) {
  const [n, a] = Qy(e.event, t);
  return { parent: null, sibling: true, index: 0, visual: e, start: n, end: a, children: [] };
}
function tb(e) {
  let t = e.index;
  for (const n of e.children) {
    const a = tb(n);
    a > t && (t = a);
  }
  return t;
}
function Ui(e, t) {
  const n = e % 100, a = n + t, l = Math.floor(a / 60), o = a % 60;
  return e - n + l * 100 + o;
}
const nb = { stack: jI, column: HI };
function QI(e, t, n, a) {
  let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  const i = e[n], r = e[a], s = ua(i, true), u = r ? ua(r, true) : s, c = $v(i) ? Rv(s, l) : s, d = $v(r) ? Rv(u, l) : u, f = Tt(c), v = Wa(c), p = Tt(d), m = c.hasTime ? 0 : 2359, h = Wa(d) + m, b = !c.hasTime;
  return { input: e, start: c, startIdentifier: f, startTimestampIdentifier: v, end: d, endIdentifier: p, endTimestampIdentifier: h, allDay: b, index: t, category: o };
}
function gd(e, t) {
  return t >= e.startIdentifier && t <= e.endIdentifier;
}
function eP(e, t, n) {
  if (n) {
    const a = Vu(rn(t), n[0]), l = Vu(rn(t), n[1]), o = e.startTimestampIdentifier < Wa(l), i = e.endTimestampIdentifier > Wa(a);
    return o && i;
  }
  return gd(e, Tt(t));
}
function tP(e, t) {
  return e.end.time === "00:00" && e.end.date === t.date && e.start.date !== t.date;
}
function Hv(e, t, n, a) {
  return n === e.startIdentifier || a === t.weekday && gd(e, n);
}
function nP(e, t, n) {
  return t <= e.endIdentifier && n >= e.startIdentifier;
}
const aP = 100, lP = 95, oP = j({ events: { type: Array, default: () => [] }, eventStart: { type: String, default: "start" }, eventEnd: { type: String, default: "end" }, eventTimed: { type: [String, Function], default: "timed" }, eventCategory: { type: [String, Function], default: "category" }, eventHeight: { type: Number, default: 20 }, eventColor: { type: [String, Function], default: "primary" }, eventTextColor: { type: [String, Function] }, eventName: { type: [String, Function], default: "name" }, eventOverlapThreshold: { type: [String, Number], default: 60 }, eventOverlapMode: { type: [String, Function], default: "stack", validate: (e) => e in nb || typeof e == "function" }, eventMore: { type: Boolean, default: true }, eventMoreText: { type: String, default: "$vuetify.calendar.moreEvents" }, eventRipple: { type: [Boolean, Object], default: null }, eventMarginBottom: { type: Number, default: 1 } }, "VCalendar-events");
function iP(e, t, n) {
  const a = md(e), l = _(() => !Array.isArray(e.events) || e.events.length === 0), o = _(() => e.type === "category"), i = _(() => typeof e.eventTimed == "function" ? e.eventTimed : (A) => !!A[e.eventTimed]), r = _(() => typeof e.eventCategory == "function" ? e.eventCategory : (A) => A[e.eventCategory]), s = _(() => e.events ? e.events.map((A, R) => QI(A, R, e.eventStart || "", e.eventEnd || "", i.value(A), o.value ? r.value(A) : false)) : []), u = _(() => parseInt(String(e.eventOverlapThreshold || 0))), c = _(() => typeof e.eventTextColor == "function" ? e.eventTextColor : () => e.eventTextColor), d = _(() => typeof e.eventName == "function" ? e.eventName : (A, R) => A.input[e.eventName] || ""), f = _(() => typeof e.eventOverlapMode == "function" ? e.eventOverlapMode : nb[e.eventOverlapMode]), v = _(() => a.effectiveWeekdays.value);
  function p(A) {
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
  function w(A, R) {
    let { event: G } = A;
    const N = e.eventHeight || 0, Y = e.eventMarginBottom || 0, H = Tt(R), F = R.week, Z = H === G.startIdentifier;
    let W = H === G.endIdentifier, L = lP;
    if (!o.value) for (let ie = R.index + 1; ie < F.length; ie++) {
      const Se = Tt(F[ie]);
      if (G.endIdentifier >= Se) L += aP, W = W || Se === G.endIdentifier;
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
    if (F === false || H === false || F < 0 || H >= 1 || tP(G, R)) return false;
    const Z = Tt(R), W = G.startIdentifier >= Z, L = G.endIdentifier > Z, U = R.timeToY(G.start, R), ie = R.timeToY(G.end, R), Se = Math.max(e.eventHeight || 0, ie - U);
    return V(G, { eventParsed: G, day: R, start: W, end: L, timed: true }, true, { class: "v-event-timed", style: { top: `${U}px`, height: `${Se}px`, left: `${N}%`, width: `${Y}%` } });
  }
  function V(A, R, G, N) {
    const Y = t.event, H = c.value(A.input), F = p(A.input), Z = A.start.hour < 12 && A.end.hour >= 12, W = AI(A.start, A.end) <= u.value, L = (fe, De) => a.getFormatter({ timeZone: "UTC", hour: "numeric", minute: fe.minute > 0 ? "numeric" : void 0 })(fe, true), U = () => L(A.start) + " - " + L(A.end), ie = () => {
      const fe = d.value(A, G);
      if (A.start.hasTime) if (G) {
        const De = U(), _e = W ? ", " : S("br", null, null);
        return S("span", { class: "v-event-summary" }, [S("strong", null, [fe]), _e, De]);
      } else {
        const De = L(A.start);
        return S("span", { class: "v-event-summary" }, [S("strong", null, [De]), Oe(" "), fe]);
      }
      return S("span", { class: "v-event-summary" }, [fe]);
    }, Se = { ...R, event: A.input, outside: R.day.outside, singline: W, overlapsNoon: Z, formatTime: L, timeSummary: U, eventSummary: ie }, K = bn(n, ":event", (fe) => ({ ...Se, nativeEvent: fe }));
    return lt(S("div", q(a.getColorProps({ text: H, background: F }), K, N, { ref_for: true, ref: m }), [(Y == null ? void 0 : Y(Se)) ?? k(ie)]), [[Ot, e.eventRipple ?? true]]);
  }
  function k(A) {
    return S("div", { class: "pl-1" }, [A()]);
  }
  function y(A) {
    const R = (e.eventHeight || 0) + (e.eventMarginBottom || 0);
    return S("div", { style: { height: `${R}px` }, "data-date": A.date, ref_for: true, ref: m }, null);
  }
  function C(A) {
    const R = e.eventHeight || 0, G = e.eventMarginBottom || 0, N = bn(n, ":more", (Y) => ({ nativeEvent: Y, ...A }));
    return lt(S("div", q({ class: ["v-event-more pl-1", { "v-outside": A.outside }], "data-date": A.date, "data-more": "1", style: { display: "none", height: `${R}px`, marginBottom: `${G}px` }, ref_for: true, ref: m }, N), null), [[Ot, e.eventRipple ?? true]]);
  }
  function x() {
    const A = a.days.value, R = Tt(A[0]), G = Tt(A[A.length - 1]);
    return s.value.filter((N) => nP(N, R, G));
  }
  function T(A, R) {
    return !o.value || typeof R == "object" && R.categoryName && R.categoryName === A.category || typeof A.category == "string" && R === A.category || typeof A.category != "string" && R === null;
  }
  function P(A) {
    const R = Tt(A), G = v.value[0];
    return s.value.filter((N) => Hv(N, A, R, G));
  }
  function M(A) {
    const R = Tt(A), G = v.value[0];
    return s.value.filter((N) => N.allDay && (o.value ? gd(N, R) : Hv(N, A, R, G)) && T(N, A.category));
  }
  function D(A) {
    return s.value.filter((R) => !R.allDay && eP(R, A, A.intervalRange) && T(R, A.category));
  }
  function E() {
    if (l.value) return { ...t };
    const A = f.value(s.value, v.value[0], u.value), R = (N) => !!N, G = (N, Y, H, F) => {
      const Z = Y(N), W = A(N, Z, F, o.value);
      if (F) return W.map((U) => H(U, N)).filter(R);
      const L = [];
      return W.forEach((U, ie) => {
        for (; L.length < U.column; ) L.push(y(N));
        const Se = H(U, N);
        Se && L.push(Se);
      }), L;
    };
    return { ...t, day: (N) => {
      let Y = G(N, P, w, false);
      if (Y && Y.length > 0 && e.eventMore && Y.push(C(N)), t.day) {
        const H = t.day(N);
        H && (Y = Y ? Y.concat(H) : H);
      }
      return Y;
    }, "day-header": (N) => {
      let Y = G(N, M, w, false);
      if (t["day-header"]) {
        const H = t["day-header"](N);
        H && (Y = Y ? Y.concat(H) : H);
      }
      return Y;
    }, "day-body": (N) => {
      const Y = G(N, D, I, true);
      let H = [S("div", { class: "v-event-timed-container" }, [Y])];
      if (t["day-body"]) {
        const F = t["day-body"](N);
        F && (H = H.concat(F));
      }
      return H;
    } };
  }
  return { ...a, noEvents: l, parsedEvents: s, parsedEventOverlapThreshold: u, eventTimedFunction: i, eventCategoryFunction: r, eventTextColorFunction: c, eventNameFunction: d, eventModeFunction: f, eventWeekdays: v, categoryMode: o, eventColorFunction: p, eventsRef: m, updateEventVisibility: h, getEventsMap: b, genDayEvent: w, genTimedEvent: I, genEvent: V, genName: k, genPlaceholder: y, genMore: C, getVisibleEvents: x, isEventForCategory: T, getEventsForDay: P, getEventsForDayAll: M, getEventsForDayTimed: D, getScopedSlots: E };
}
const rP = ee()({ name: "VCalendar", directives: { vResize: ei }, props: { modelValue: { type: [String, Number, Date], validate: jl }, categoryDays: { type: [Number, String], default: 1, validate: (e) => isFinite(parseInt(e)) && parseInt(e) > 0 }, categories: { type: [Array, String], default: "" }, categoryText: { type: [String, Function] }, maxDays: { type: Number, default: 7 }, categoryHideDynamic: { type: Boolean }, categoryShowAll: { type: Boolean }, categoryForInvalid: { type: String, default: "" }, ...Xr(), ...oP() }, setup(e, t) {
  let { slots: n, attrs: a, emit: l } = t;
  const o = O(), i = iP(e, n, a), r = O(null), s = O(null), u = _(() => parseInt(String(e.categoryDays)) || 1), c = _(() => Xy(e.categories, e.categoryText)), d = _(() => {
    const y = i.parsedValue.value;
    let C = null, x = e.maxDays, T = c.value, P = y, M = y;
    switch (e.type) {
      case "month":
        C = Fv, P = Hy(y), M = zy(y);
        break;
      case "week":
        C = ko, P = i.getStartOfWeek(y), M = i.getEndOfWeek(y), x = 7;
        break;
      case "day":
        C = ko, x = 1;
        break;
      case "4day":
        C = ko, M = Qa(rn(M), $a, 3), Mn(M), x = 4;
        break;
      case "custom-weekly":
        C = Fv, P = i.parsedStart.value || y, M = i.parsedEnd.value;
        break;
      case "custom-daily":
        C = ko, P = i.parsedStart.value || y, M = i.parsedEnd.value;
        break;
      case "category":
        const D = u.value;
        C = LI, M = Qa(rn(M), $a, D), Mn(M), x = D, T = k(T);
        break;
      default:
        const E = e.type;
        throw new Error(`${E} is not a valid Calendar type`);
    }
    return { component: C, start: P, end: M, maxDays: x, categories: T };
  }), f = _(() => i.effectiveWeekdays.value), v = _(() => e.type === "category"), p = _(() => i.getFormatter({ timeZone: "UTC", month: "long" })), m = _(() => i.getFormatter({ timeZone: "UTC", month: "short" })), h = _(() => {
    const { start: y, end: C } = d.value, x = y.year !== C.year, T = x || y.month !== C.month;
    return x ? m.value(y, true) + " " + y.year + " - " + m.value(C, true) + " " + C.year : T ? m.value(y, true) + " - " + m.value(C, true) + " " + C.year : p.value(y, false) + " " + y.year;
  });
  function b() {
    const { start: y, end: C } = d.value;
    (!r.value || !s.value || y.date !== r.value.date || C.date !== s.value.date) && (r.value = y, s.value = C, l("change", { start: y, end: C }));
  }
  function w() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const C = rn(i.parsedValue.value), x = y > 0, T = x ? $a : Uy, P = x ? gI : Yr;
    let M = x ? y : -y;
    for (; --M >= 0; ) switch (e.type) {
      case "month":
        C.day = P, T(C);
        break;
      case "week":
        Qa(C, T, Ba);
        break;
      case "day":
        Qa(C, T, 1);
        break;
      case "4day":
        Qa(C, T, 4);
        break;
      case "category":
        Qa(C, T, u.value);
        break;
    }
    Kr(C), Mn(C), fl(C, i.times.now), e.modelValue instanceof Date ? l("update:modelValue", Iu(C)) : typeof e.modelValue == "number" ? l("update:modelValue", Iu(C).getTime()) : l("update:modelValue", C.date), l("moved", C);
  }
  function I() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    w(y);
  }
  function V() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    w(-y);
  }
  function k(y) {
    if (!i.noEvents.value) {
      const C = y.reduce((x, T, P) => (typeof T == "object" && T.categoryName ? x[T.categoryName] = { index: P, count: 0 } : typeof T == "string" && (x[T] = { index: P, count: 0 }), x), {});
      if (!e.categoryHideDynamic || !e.categoryShowAll) {
        let x = y.length;
        i.parsedEvents.value.forEach((T) => {
          let P = T.category;
          typeof P != "string" && (P = e.categoryForInvalid), P && (P in C ? C[P].count++ : e.categoryHideDynamic || (C[P] = { index: x++, count: 1 }));
        });
      }
      if (!e.categoryShowAll) for (const x in C) C[x].count === 0 && delete C[x];
      y = y.filter((x) => typeof x == "object" && x.categoryName ? C.hasOwnProperty(x.categoryName) : typeof x == "string" ? C.hasOwnProperty(x) : false);
    }
    return y;
  }
  return se(d, b), It(() => {
    i.updateEventVisibility(), b();
  }), _r(() => {
    window.requestAnimationFrame(i.updateEventVisibility);
  }), ae(() => {
    const { start: y, end: C, maxDays: x, component: T, categories: P } = d.value;
    return lt(g(T, q({ ref: o, class: ["v-calendar", { "v-calendar-events": !i.noEvents.value }], role: "grid" }, T.filterProps(e), { start: y.date, end: C.date, maxDays: x, weekdays: i.effectiveWeekdays.value, categories: P, "onClick:date": (M, D) => {
      a["onUpdate:modelValue"] && l("update:modelValue", D.date);
    } }), i.getScopedSlots()), [[ei, i.updateEventVisibility, void 0, { quiet: true }]]);
  }), Dt({ ...i, lastStart: r, lastEnd: s, parsedCategoryDays: u, renderProps: d, eventWeekdays: f, categoryMode: v, title: h, monthLongFormatter: p, monthShortFormatter: m, parsedCategories: c, checkChange: b, move: w, next: I, prev: V, getCategoryList: k }, o);
} }), sP = j({ ...xe(), ...Re() }, "VCardActions"), ab = ee()({ name: "VCardActions", props: sP(), setup(e, t) {
  let { slots: n } = t;
  return yt({ VBtn: { slim: true, variant: "text" } }), ae(() => g(e.tag, { class: ne(["v-card-actions", e.class]), style: me(e.style) }, n)), {};
} }), uP = j({ opacity: [Number, String], ...xe(), ...Re() }, "VCardSubtitle"), lb = ee()({ name: "VCardSubtitle", props: uP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-card-subtitle", e.class]), style: me([{ "--v-card-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), ob = pa("v-card-title"), cP = j({ appendAvatar: String, appendIcon: Ie, prependAvatar: String, prependIcon: Ie, subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...xe(), ...bt(), ...Re() }, "VCardItem"), ib = ee()({ name: "VCardItem", props: cP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || n.append), r = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
    return g(e.tag, { class: ne(["v-card-item", e.class]), style: me(e.style) }, { default: () => {
      var _a2;
      return [l && S("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? g(Fe, { key: "prepend-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon } } }, n.prepend) : S(be, null, [e.prependAvatar && g(xn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(Xe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), S("div", { class: "v-card-item__content" }, [r && g(ob, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = n.title) == null ? void 0 : _a3.call(n)) ?? Te(e.title)];
      } }), s && g(lb, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = n.subtitle) == null ? void 0 : _a3.call(n)) ?? Te(e.subtitle)];
      } }), (_a2 = n.default) == null ? void 0 : _a2.call(n)]), i && S("div", { key: "append", class: "v-card-item__append" }, [n.append ? g(Fe, { key: "append-defaults", disabled: !o, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon } } }, n.append) : S(be, null, [e.appendIcon && g(Xe, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && g(xn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } });
  }), {};
} }), dP = j({ opacity: [Number, String], ...xe(), ...Re() }, "VCardText"), rb = ee()({ name: "VCardText", props: dP(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => g(e.tag, { class: ne(["v-card-text", e.class]), style: me([{ "--v-card-text-opacity": e.opacity }, e.style]) }, n)), {};
} }), fP = j({ appendAvatar: String, appendIcon: Ie, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ie, ripple: { type: [Boolean, Object], default: true }, subtitle: { type: [String, Number, Boolean], default: void 0 }, text: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, ...Ut(), ...xe(), ...bt(), ...Ct(), ...Vt(), ...zr(), ...ea(), ...io(), ...dt(), ...yi(), ...Re(), ...Ye(), ...Cn({ variant: "elevated" }) }, "VCard"), vP = ee()({ name: "VCard", directives: { vRipple: Ot }, props: fP(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { borderClasses: o } = tn(e), { colorClasses: i, colorStyles: r, variantClasses: s } = ka(e), { densityClasses: u } = Nt(e), { dimensionStyles: c } = _t(e), { elevationClasses: d } = At(e), { loaderClasses: f } = mi(e), { locationStyles: v } = Ua(e), { positionClasses: p } = ro(e), { roundedClasses: m } = gt(e), h = hi(e, n), b = re(void 0);
  return se(() => e.loading, (w, I) => {
    b.value = !w && typeof I == "string" ? I : typeof w == "boolean" ? void 0 : w;
  }, { immediate: true }), ae(() => {
    const w = e.link !== false && h.isLink.value, I = !e.disabled && e.link !== false && (e.link || h.isClickable.value), V = w ? "a" : e.tag, k = !!(a.title || e.title != null), y = !!(a.subtitle || e.subtitle != null), C = k || y, x = !!(a.append || e.appendAvatar || e.appendIcon), T = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), M = C || T || x, D = !!(a.text || e.text != null);
    return lt(g(V, q(h.linkProps, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": I }, l.value, o.value, i.value, u.value, d.value, f.value, p.value, m.value, s.value, e.class], style: [r.value, c.value, v.value, { "--v-card-height": ve(e.height) }, e.style], onClick: I && h.navigate.value, tabindex: e.disabled ? -1 : void 0 }), { default: () => {
      var _a2;
      return [P && S("div", { key: "image", class: "v-card__image" }, [a.image ? g(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: true, src: e.image } } }, a.image) : g(ga, { key: "image-img", cover: true, src: e.image }, null)]), g(gi, { name: "v-card", active: !!e.loading, color: b.value }, { default: a.loader }), M && g(ib, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: a.item, prepend: a.prepend, title: a.title, subtitle: a.subtitle, append: a.append }), D && g(rb, { key: "text" }, { default: () => {
        var _a3;
        return [((_a3 = a.text) == null ? void 0 : _a3.call(a)) ?? e.text];
      } }), (_a2 = a.default) == null ? void 0 : _a2.call(a), a.actions && g(ab, null, { default: a.actions }), xa(I, "v-card")];
    } }), [[Ot, I && e.ripple]]);
  }), {};
} }), mP = (e) => {
  const { touchstartX: t, touchendX: n, touchstartY: a, touchendY: l } = e, o = 0.5, i = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - i && e.left(e), e.right && n > t + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function gP(e, t) {
  var _a2;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (_a2 = t.start) == null ? void 0 : _a2.call(t, { originalEvent: e, ...t });
}
function hP(e, t) {
  var _a2;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (_a2 = t.end) == null ? void 0 : _a2.call(t, { originalEvent: e, ...t }), mP(t);
}
function yP(e, t) {
  var _a2;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (_a2 = t.move) == null ? void 0 : _a2.call(t, { originalEvent: e, ...t });
}
function bP() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = { touchstartX: 0, touchstartY: 0, touchendX: 0, touchendY: 0, touchmoveX: 0, touchmoveY: 0, offsetX: 0, offsetY: 0, left: e.left, right: e.right, up: e.up, down: e.down, start: e.start, move: e.move, end: e.end };
  return { touchstart: (n) => gP(n, t), touchend: (n) => hP(n, t), touchmove: (n) => yP(n, t) };
}
function pP(e, t) {
  var _a2;
  const n = t.value, a = (n == null ? void 0 : n.parent) ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? { passive: true }, o = (_a2 = t.instance) == null ? void 0 : _a2.$.uid;
  if (!a || o === void 0) return;
  const i = bP(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, zg(i).forEach((r) => {
    a.addEventListener(r, i[r], l);
  });
}
function SP(e, t) {
  var _a2, _b2;
  const n = ((_a2 = t.value) == null ? void 0 : _a2.parent) ? e.parentElement : e, a = (_b2 = t.instance) == null ? void 0 : _b2.$.uid;
  if (!(n == null ? void 0 : n._touchHandlers) || a === void 0) return;
  const l = n._touchHandlers[a];
  zg(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const gr = { mounted: pP, unmounted: SP }, sb = Symbol.for("vuetify:v-window"), ub = Symbol.for("vuetify:v-window-group"), qr = j({ continuous: Boolean, nextIcon: { type: [Boolean, String, Function, Object], default: "$next" }, prevIcon: { type: [Boolean, String, Function, Object], default: "$prev" }, reverse: Boolean, showArrows: { type: [Boolean, String], validator: (e) => typeof e == "boolean" || e === "hover" }, verticalArrows: [Boolean, String], touch: { type: [Object, Boolean], default: void 0 }, direction: { type: String, default: "horizontal" }, modelValue: null, disabled: Boolean, selectedClass: { type: String, default: "v-window-item--active" }, mandatory: { type: [Boolean, String], default: "force" }, crossfade: Boolean, transitionDuration: Number, ...xe(), ...Re(), ...Ye() }, "VWindow"), vl = ee()({ name: "VWindow", directives: { vTouch: gr }, props: qr(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isRtl: l } = Pt(), { t: o } = ot(), i = Ga(e, ub), r = O(), s = _(() => l.value ? !e.reverse : e.reverse), u = re(false), c = _(() => {
    if (e.crossfade) return "v-window-crossfade-transition";
    const y = e.direction === "vertical" ? "y" : "x", x = (s.value ? !u.value : u.value) ? "-reverse" : "";
    return `v-window-${y}${x}-transition`;
  }), d = re(0), f = O(void 0), v = _(() => i.items.value.findIndex((y) => i.selected.value.includes(y.id)));
  se(v, (y, C) => {
    let x;
    const T = { left: 0, top: 0 };
    at && C >= 0 && (x = $r(r.value), T.left = x == null ? void 0 : x.scrollLeft, T.top = x == null ? void 0 : x.scrollTop);
    const P = i.items.value.length, M = P - 1;
    P <= 2 ? u.value = y < C : y === M && C === 0 ? u.value = false : y === 0 && C === M ? u.value = true : u.value = y < C, Be(() => {
      if (!at || !x) return;
      x.scrollTop !== T.top && x.scrollTo({ ...T, behavior: "instant" }), requestAnimationFrame(() => {
        if (!x) return;
        x.scrollTop !== T.top && x.scrollTo({ ...T, behavior: "instant" });
      });
    });
  }, { flush: "sync" }), ft(sb, { transition: c, isReversed: u, transitionCount: d, transitionHeight: f, rootRef: r });
  const p = B(() => e.continuous || v.value !== 0), m = B(() => e.continuous || v.value !== i.items.value.length - 1);
  function h() {
    p.value && i.prev();
  }
  function b() {
    m.value && i.next();
  }
  const w = _(() => {
    const y = [], C = { icon: l.value ? e.nextIcon : e.prevIcon, class: `v-window__${s.value ? "right" : "left"}`, onClick: i.prev, "aria-label": o("$vuetify.carousel.prev") };
    y.push(p.value ? n.prev ? n.prev({ props: C }) : g(Ue, C, null) : S("div", null, null));
    const x = { icon: l.value ? e.prevIcon : e.nextIcon, class: `v-window__${s.value ? "left" : "right"}`, onClick: i.next, "aria-label": o("$vuetify.carousel.next") };
    return y.push(m.value ? n.next ? n.next({ props: x }) : g(Ue, x, null) : S("div", null, null)), y;
  }), I = _(() => e.touch === false ? e.touch : { ...{ left: () => {
    s.value ? h() : b();
  }, right: () => {
    s.value ? b() : h();
  }, start: (C) => {
    let { originalEvent: x } = C;
    x.stopPropagation();
  } }, ...e.touch === true ? {} : e.touch });
  function V(y) {
    (e.direction === "horizontal" && y.key === "ArrowLeft" || e.direction === "vertical" && y.key === "ArrowUp") && (y.preventDefault(), h(), Be(() => {
      p.value ? k(0) : k(1);
    })), (e.direction === "horizontal" && y.key === "ArrowRight" || e.direction === "vertical" && y.key === "ArrowDown") && (y.preventDefault(), b(), Be(() => {
      m.value ? k(1) : k(0);
    }));
  }
  function k(y) {
    var _a2;
    const C = w.value[y];
    if (!C) return;
    (_a2 = (Array.isArray(C) ? C[0] : C).el) == null ? void 0 : _a2.focus();
  }
  return ae(() => lt(g(e.tag, { ref: r, class: ne(["v-window", { "v-window--show-arrows-on-hover": e.showArrows === "hover", "v-window--vertical-arrows": !!e.verticalArrows, "v-window--crossfade": !!e.crossfade }, a.value, e.class]), style: me([e.style, { "--v-window-transition-duration": Yn() ? null : ve(e.transitionDuration, "ms") }]) }, { default: () => {
    var _a2, _b2;
    return [S("div", { class: "v-window__container", style: { height: f.value } }, [(_a2 = n.default) == null ? void 0 : _a2.call(n, { group: i }), e.showArrows !== false && S("div", { class: ne(["v-window__controls", { "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === true }, { "v-window__controls--right": e.verticalArrows === "right" }]), onKeydown: V }, [w.value])]), (_b2 = n.additional) == null ? void 0 : _b2.call(n, { group: i })];
  } }), [[gr, I.value]])), { group: i };
} }), xP = j({ color: String, cycle: Boolean, delimiterIcon: { type: Ie, default: "$delimiter" }, height: { type: [Number, String], default: 500 }, hideDelimiters: Boolean, hideDelimiterBackground: Boolean, interval: { type: [Number, String], default: 6e3, validator: (e) => Number(e) > 0 }, progress: [Boolean, String], verticalDelimiters: [Boolean, String], ...qr({ continuous: true, mandatory: "force", showArrows: true }) }, "VCarousel"), kP = ee()({ name: "VCarousel", props: xP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { t: l } = ot(), o = O();
  let i = -1;
  se(a, s), se(() => e.interval, s), se(() => e.cycle, (c) => {
    c ? s() : window.clearTimeout(i);
  }), It(r);
  function r() {
    !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
  }
  function s() {
    window.clearTimeout(i), window.requestAnimationFrame(r);
  }
  function u(c, d) {
    (e.direction === "horizontal" && c.key === "ArrowLeft" || e.direction === "vertical" && c.key === "ArrowUp") && (c.preventDefault(), d.prev(), Be(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = o.value) == null ? void 0 : _a2.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    })), (e.direction === "horizontal" && c.key === "ArrowRight" || e.direction === "vertical" && c.key === "ArrowDown") && (c.preventDefault(), d.next(), Be(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = o.value) == null ? void 0 : _a2.$el.querySelector(".v-btn--active")) == null ? void 0 : _b2.focus();
    }));
  }
  return ae(() => {
    const c = vl.filterProps(e);
    return g(vl, q({ ref: o }, c, { modelValue: a.value, "onUpdate:modelValue": (d) => a.value = d, class: ["v-carousel", { "v-carousel--hide-delimiter-background": e.hideDelimiterBackground, "v-carousel--vertical-delimiters": e.verticalDelimiters }, e.class], style: [{ height: ve(e.height) }, e.style] }), { default: n.default, additional: (d) => {
      let { group: f } = d;
      return S(be, null, [!e.hideDelimiters && S("div", { class: "v-carousel__controls", style: { left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto", right: e.verticalDelimiters === "right" ? 0 : "auto" } }, [f.items.value.length > 0 && g(Fe, { defaults: { VBtn: { color: e.color, icon: e.delimiterIcon, size: "x-small", variant: "text" } }, scoped: true }, { default: () => [f.items.value.map((v, p) => {
        const m = { id: `carousel-item-${v.id}`, "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", p + 1, f.items.value.length), class: ["v-carousel__controls__item", f.isSelected(v.id) && "v-btn--active"], onClick: () => f.select(v.id, true), onKeydown: (h) => u(h, f) };
        return n.item ? n.item({ props: m, item: v }) : g(Ue, q(v, m), null);
      })] })]), e.progress && g(Hr, { absolute: true, class: "v-carousel__progress", color: typeof e.progress == "string" ? e.progress : void 0, modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100 }, null)]);
    }, prev: n.prev, next: n.next });
  }), {};
} }), Zr = j({ reverseTransition: { type: [Boolean, String], default: void 0 }, transition: { type: [Boolean, String], default: void 0 }, ...xe(), ..._l(), ...td() }, "VWindowItem"), ml = ee()({ name: "VWindowItem", directives: { vTouch: gr }, props: Zr(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(sb), l = La(e, ub), { isBooted: o } = wl();
  if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
  const i = re(false), r = _(() => o.value && (a.isReversed.value ? e.reverseTransition !== false : e.transition !== false));
  function s() {
    !i.value || !a || (i.value = false, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
  }
  function u() {
    var _a2;
    i.value || !a || (i.value = true, a.transitionCount.value === 0 && (a.transitionHeight.value = ve((_a2 = a.rootRef.value) == null ? void 0 : _a2.clientHeight)), a.transitionCount.value += 1);
  }
  function c() {
    s();
  }
  function d(p) {
    i.value && Be(() => {
      !r.value || !i.value || !a || (a.transitionHeight.value = ve(p.clientHeight));
    });
  }
  const f = _(() => {
    const p = a.isReversed.value ? e.reverseTransition : e.transition;
    return r.value ? { name: typeof p != "string" ? a.transition.value : p, onBeforeEnter: u, onAfterEnter: s, onEnterCancelled: c, onBeforeLeave: u, onAfterLeave: s, onLeaveCancelled: c, onEnter: d } : false;
  }), { hasContent: v } = nd(e, l.isSelected);
  return ae(() => g(Qt, { transition: f.value, disabled: !o.value }, { default: () => {
    var _a2;
    return [lt(S("div", { class: ne(["v-window-item", l.selectedClass.value, e.class]), style: me(e.style) }, [v.value && ((_a2 = n.default) == null ? void 0 : _a2.call(n))]), [[Ln, l.isSelected.value]])];
  } })), { groupItem: l };
} }), wP = j({ ...Ph(), ...Zr() }, "VCarouselItem"), CP = ee()({ name: "VCarouselItem", inheritAttrs: false, props: wP(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  ae(() => {
    const l = ga.filterProps(e), o = ml.filterProps(e);
    return g(ml, q({ class: ["v-carousel-item", e.class] }, o), { default: () => [g(ga, q(a, l), n)] });
  });
} }), _P = pa("v-code", "code"), VP = j({ color: { type: Object }, disabled: Boolean, readonly: Boolean, dotSize: { type: [Number, String], default: 10 }, height: { type: [Number, String], default: 150 }, width: { type: [Number, String], default: 300 }, ...xe() }, "VColorPickerCanvas"), IP = en({ name: "VColorPickerCanvas", props: VP(), emits: { "update:color": (e) => true, "update:position": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = re(false), l = O(), o = re(parseFloat(e.width)), i = re(parseFloat(e.height)), r = O({ x: 0, y: 0 }), s = B(() => !e.disabled && !e.readonly), u = _({ get: () => r.value, set(b) {
    var _a2, _b2;
    if (!l.value) return;
    const { x: w, y: I } = b;
    r.value = b, n("update:color", { h: ((_a2 = e.color) == null ? void 0 : _a2.h) ?? 0, s: nt(w, 0, o.value) / o.value, v: 1 - nt(I, 0, i.value) / i.value, a: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1 });
  } }), c = _(() => {
    const { x: b, y: w } = u.value, I = parseInt(e.dotSize, 10) / 2;
    return { width: ve(e.dotSize), height: ve(e.dotSize), transform: `translate(${ve(b - I)}, ${ve(w - I)})` };
  }), { resizeRef: d } = In((b) => {
    var _a2;
    if (!((_a2 = d.el) == null ? void 0 : _a2.offsetParent)) return;
    const { width: w, height: I } = b[0].contentRect;
    o.value = Math.round(w), i.value = Math.round(I);
  });
  function f(b, w, I) {
    const { left: V, top: k, width: y, height: C } = I;
    u.value = { x: nt(b - V, 0, y), y: nt(w - k, 0, C) };
  }
  function v(b) {
    b.type === "mousedown" && b.preventDefault(), s.value && (p(b), window.addEventListener("mousemove", p), window.addEventListener("mouseup", m), window.addEventListener("touchmove", p), window.addEventListener("touchend", m));
  }
  function p(b) {
    if (!s.value || !l.value) return;
    a.value = true;
    const w = P0(b);
    f(w.clientX, w.clientY, l.value.getBoundingClientRect());
  }
  function m() {
    window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m), window.removeEventListener("touchmove", p), window.removeEventListener("touchend", m);
  }
  function h() {
    var _a2;
    if (!l.value) return;
    const b = l.value, w = b.getContext("2d");
    if (!w) return;
    const I = w.createLinearGradient(0, 0, b.width, 0);
    I.addColorStop(0, "hsla(0, 0%, 100%, 1)"), I.addColorStop(1, `hsla(${((_a2 = e.color) == null ? void 0 : _a2.h) ?? 0}, 100%, 50%, 1)`), w.fillStyle = I, w.fillRect(0, 0, b.width, b.height);
    const V = w.createLinearGradient(0, 0, 0, b.height);
    V.addColorStop(0, "hsla(0, 0%, 0%, 0)"), V.addColorStop(1, "hsla(0, 0%, 0%, 1)"), w.fillStyle = V, w.fillRect(0, 0, b.width, b.height);
  }
  return se(() => {
    var _a2;
    return (_a2 = e.color) == null ? void 0 : _a2.h;
  }, h, { immediate: true }), se(() => [o.value, i.value], (b, w) => {
    h(), r.value = { x: u.value.x * b[0] / w[0], y: u.value.y * b[1] / w[1] };
  }, { flush: "post" }), se(() => e.color, () => {
    if (a.value) {
      a.value = false;
      return;
    }
    r.value = e.color ? { x: e.color.s * o.value, y: (1 - e.color.v) * i.value } : { x: 0, y: 0 };
  }, { deep: true, immediate: true }), It(() => h()), ae(() => S("div", { ref: d, class: ne(["v-color-picker-canvas", e.class]), style: me(e.style), onMousedown: v, onTouchstartPassive: v }, [S("canvas", { ref: l, width: o.value, height: i.value }, null), e.color && S("div", { class: ne(["v-color-picker-canvas__dot", { "v-color-picker-canvas__dot--disabled": e.disabled }]), style: me(c.value) }, null)])), {};
} });
function PP(e, t) {
  if (t) {
    const { a: n, ...a } = e;
    return a;
  }
  return e;
}
function TP(e, t) {
  if (t == null || typeof t == "string") {
    const n = typeof e.a == "number" && e.a < 1;
    if (t == null ? void 0 : t.startsWith("rgb(")) {
      const { r: l, g: o, b: i, a: r } = Kn(e);
      return `rgb(${l} ${o} ${i}` + (n ? ` / ${r})` : ")");
    } else if (t == null ? void 0 : t.startsWith("hsl(")) {
      const { h: l, s: o, l: i, a: r } = su(e);
      return `hsl(${l} ${Math.round(o * 100)} ${Math.round(i * 100)}` + (n ? ` / ${r})` : ")");
    }
    const a = lh(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof t == "object") {
    let n;
    return tl(t, ["r", "g", "b"]) ? n = Kn(e) : tl(t, ["h", "s", "l"]) ? n = su(e) : tl(t, ["h", "s", "v"]) && (n = e), PP(n, !tl(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Ol = { h: 0, s: 0, v: 0, a: 1 }, Pu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "R", max: 255, step: 1, getValue: (e) => Math.round(e.r), getColor: (e, t) => ({ ...e, r: Number(t) }), localeKey: "redInput" }, { label: "G", max: 255, step: 1, getValue: (e) => Math.round(e.g), getColor: (e, t) => ({ ...e, g: Number(t) }), localeKey: "greenInput" }, { label: "B", max: 255, step: 1, getValue: (e) => Math.round(e.b), getColor: (e, t) => ({ ...e, b: Number(t) }), localeKey: "blueInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: Kn, from: di }, AP = { ...Pu, inputs: (_a = Pu.inputs) == null ? void 0 : _a.slice(0, 3) }, Tu = { inputProps: { type: "number", min: 0 }, inputs: [{ label: "H", max: 360, step: 1, getValue: (e) => Math.round(e.h), getColor: (e, t) => ({ ...e, h: Number(t) }), localeKey: "hueInput" }, { label: "S", max: 1, step: 0.01, getValue: (e) => Math.round(e.s * 100) / 100, getColor: (e, t) => ({ ...e, s: Number(t) }), localeKey: "saturationInput" }, { label: "L", max: 1, step: 0.01, getValue: (e) => Math.round(e.l * 100) / 100, getColor: (e, t) => ({ ...e, l: Number(t) }), localeKey: "lightnessInput" }, { label: "A", max: 1, step: 0.01, getValue: (e) => {
  let { a: t } = e;
  return t != null ? Math.round(t * 100) / 100 : 1;
}, getColor: (e, t) => ({ ...e, a: Number(t) }), localeKey: "alphaInput" }], to: su, from: Pc }, DP = { ...Tu, inputs: Tu.inputs.slice(0, 3) }, cb = { inputProps: { type: "text" }, inputs: [{ label: "HEXA", getValue: (e) => e, getColor: (e, t) => t, localeKey: "hexaInput" }], to: lh, from: Q0 }, MP = { ...cb, inputs: [{ label: "HEX", getValue: (e) => e.slice(0, 7), getColor: (e, t) => t, localeKey: "hexInput" }] }, rl = { rgb: AP, rgba: Pu, hsl: DP, hsla: Tu, hex: MP, hexa: cb }, EP = (e) => {
  let { label: t, ...n } = e;
  return S("div", { class: "v-color-picker-edit__input" }, [S("input", Kp(mg(n)), null), S("span", null, [t])]);
}, BP = j({ color: Object, disabled: Boolean, readonly: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(rl).includes(e) }, modes: { type: Array, default: () => Object.keys(rl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(rl).includes(t)) }, ...xe() }, "VColorPickerEdit"), $P = en({ name: "VColorPickerEdit", props: BP(), emits: { "update:color": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = ot(), l = _(() => e.modes.map((i) => ({ ...rl[i], name: i }))), o = _(() => {
    var _a2;
    const i = l.value.find((s) => s.name === e.mode);
    if (!i) return [];
    const r = e.color ? i.to(e.color) : null;
    return (_a2 = i.inputs) == null ? void 0 : _a2.map((s) => {
      let { getValue: u, getColor: c, localeKey: d, ...f } = s;
      return { ...i.inputProps, ...f, ariaLabel: a(`$vuetify.colorPicker.ariaLabel.${d}`), disabled: e.disabled, readonly: e.readonly, value: r && u(r), onChange: (v) => {
        const p = v.target;
        p && n("update:color", i.from(c(r ?? i.to(Ol), p.value)));
      } };
    });
  });
  return ae(() => {
    var _a2;
    return S("div", { class: ne(["v-color-picker-edit", e.class]), style: me(e.style) }, [(_a2 = o.value) == null ? void 0 : _a2.map((i) => g(EP, i, null)), l.value.length > 1 && g(Ue, { icon: "$unfold", size: "x-small", variant: "plain", "aria-label": a("$vuetify.colorPicker.ariaLabel.changeFormat"), onClick: () => {
      const i = l.value.findIndex((r) => r.name === e.mode);
      n("update:mode", l.value[(i + 1) % l.value.length].name);
    } }, null)]);
  }), {};
} }), hd = Symbol.for("vuetify:v-slider");
function Au(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function RP(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const db = j({ disabled: { type: Boolean, default: null }, error: Boolean, readonly: { type: Boolean, default: null }, max: { type: [Number, String], default: 100 }, min: { type: [Number, String], default: 0 }, step: { type: [Number, String], default: 0 }, thumbColor: String, thumbLabel: { type: [Boolean, String], default: void 0, validator: (e) => typeof e == "boolean" || e === "always" || e === "hover" }, thumbSize: { type: [Number, String], default: 20 }, showTicks: { type: [Boolean, String], default: false, validator: (e) => typeof e == "boolean" || e === "always" }, ticks: { type: [Array, Object] }, tickSize: { type: [Number, String], default: 2 }, color: String, trackColor: String, trackFillColor: String, trackSize: { type: [Number, String], default: 4 }, direction: { type: String, default: "horizontal", validator: (e) => ["vertical", "horizontal"].includes(e) }, reverse: Boolean, noKeyboard: Boolean, ...dt(), ...Vt({ elevation: 2 }), ripple: { type: Boolean, default: true } }, "Slider"), fb = (e) => {
  const t = _(() => parseFloat(e.min)), n = _(() => parseFloat(e.max)), a = _(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = _(() => Math.max(Of(a.value), Of(t.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = nt(i, t.value, n.value), s = t.value % a.value;
    let u = Math.round((r - s) / a.value) * a.value + s;
    return r > u && u + a.value > n.value && (u = n.value), parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return { min: t, max: n, step: a, decimals: l, roundValue: o };
}, vb = (e) => {
  let { props: t, steps: n, onSliderStart: a, onSliderMove: l, onSliderEnd: o, getActiveThumb: i } = e;
  const r = uo(t), { isRtl: s } = Pt(), u = B(() => t.reverse), c = _(() => t.direction === "vertical"), d = _(() => c.value !== u.value), { min: f, max: v, step: p, decimals: m, roundValue: h } = n, b = _(() => parseInt(t.thumbSize, 10)), w = _(() => parseInt(t.tickSize, 10)), I = _(() => parseInt(t.trackSize, 10)), V = _(() => (v.value - f.value) / p.value), k = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor ?? t.color), y = _(() => t.error || r.isDisabled.value ? void 0 : t.thumbColor), C = _(() => t.error || r.isDisabled.value ? void 0 : t.trackColor ?? t.color), x = _(() => t.error || r.isDisabled.value ? void 0 : t.trackFillColor ?? t.color), T = re(false), P = re(0), M = O(), D = O();
  function E(K) {
    var _a2;
    const fe = (_a2 = M.value) == null ? void 0 : _a2.$el;
    if (!fe) return;
    const De = t.direction === "vertical", _e = De ? "top" : "left", ye = De ? "height" : "width", $ = De ? "clientY" : "clientX", { [_e]: z, [ye]: Q } = fe.getBoundingClientRect(), ce = RP(K, $);
    let oe = nt((ce - z - P.value) / Q) || 0;
    return (De ? d.value : d.value !== s.value) && (oe = 1 - oe), h(f.value + oe * (v.value - f.value));
  }
  const A = (K) => {
    const fe = E(K);
    fe != null && o({ value: fe }), T.value = false, P.value = 0;
  }, R = (K) => {
    const fe = E(K);
    D.value = i(K), D.value && (T.value = true, D.value.contains(K.target) ? P.value = Au(K, D.value, t.direction) : (P.value = 0, fe != null && l({ value: fe })), fe != null && a({ value: fe }), Be(() => {
      var _a2;
      return (_a2 = D.value) == null ? void 0 : _a2.focus();
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
    var _a2;
    A(K), window.removeEventListener("touchmove", N, G), (_a2 = K.target) == null ? void 0 : _a2.removeEventListener("touchend", H);
  }
  function F(K) {
    var _a2;
    R(K), window.addEventListener("touchmove", N, G), (_a2 = K.target) == null ? void 0 : _a2.addEventListener("touchend", H, { passive: false });
  }
  function Z(K) {
    K.button === 0 && (K.preventDefault(), R(K), window.addEventListener("mousemove", N, G), window.addEventListener("mouseup", Y, { passive: false }));
  }
  St(() => {
    window.removeEventListener("touchmove", N), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", Y);
  });
  const W = (K) => {
    const fe = (K - f.value) / (v.value - f.value) * 100;
    return nt(isNaN(fe) ? 0 : fe, 0, 100);
  }, L = B(() => t.showTicks), U = _(() => L.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((K) => ({ value: K, position: W(K), label: K.toString() })) : Object.keys(t.ticks).map((K) => ({ value: parseFloat(K), position: W(parseFloat(K)), label: t.ticks[K] })) : V.value !== 1 / 0 ? jn(V.value + 1).map((K) => {
    const fe = f.value + K * p.value;
    return { value: fe, position: W(fe) };
  }) : [] : []), ie = _(() => U.value.some((K) => {
    let { label: fe } = K;
    return !!fe;
  })), Se = { activeThumbRef: D, color: B(() => t.color), decimals: m, disabled: r.isDisabled, direction: B(() => t.direction), elevation: B(() => t.elevation), hasLabels: ie, isReversed: u, indexFromEnd: d, min: f, max: v, mousePressed: T, noKeyboard: B(() => t.noKeyboard), numTicks: V, onSliderMousedown: Z, onSliderTouchstart: F, parsedTicks: U, parseMouseMove: E, position: W, readonly: r.isReadonly, rounded: B(() => t.rounded), roundValue: h, showTicks: L, startOffset: P, step: p, thumbSize: b, thumbColor: k, thumbLabelColor: y, thumbLabel: B(() => t.thumbLabel), ticks: B(() => t.ticks), tickSize: w, trackColor: C, trackContainerRef: M, trackFillColor: x, trackSize: I, vertical: c };
  return ft(hd, Se), Se;
}, FP = j({ focused: Boolean, max: { type: Number, required: true }, min: { type: Number, required: true }, modelValue: { type: Number, required: true }, position: { type: Number, required: true }, ripple: { type: [Boolean, Object], default: true }, name: String, noKeyboard: Boolean, ...xe() }, "VSliderThumb"), Du = ee()({ name: "VSliderThumb", directives: { vRipple: Ot }, props: FP(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ge(hd), { isRtl: o, rtlClasses: i } = Pt();
  if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
  const { min: r, max: s, thumbColor: u, thumbLabelColor: c, step: d, disabled: f, thumbSize: v, thumbLabel: p, direction: m, isReversed: h, vertical: b, readonly: w, elevation: I, mousePressed: V, decimals: k, indexFromEnd: y } = l, C = re(false), x = re(false), T = _(() => f.value ? void 0 : I.value), { elevationClasses: P } = At(T), { textColorClasses: M, textColorStyles: D } = $t(u), { backgroundColorClasses: E, backgroundColorStyles: A } = Je(c), { pageup: R, pagedown: G, end: N, home: Y, left: H, right: F, down: Z, up: W } = au, L = [R, G, N, Y, H, F, Z, W], U = _(() => d.value ? [1, 2, 3] : [1, 5, 10]);
  function ie(K, fe) {
    if (e.noKeyboard || f.value || !L.includes(K.key)) return;
    K.preventDefault();
    const De = d.value || 0.1, _e = (s.value - r.value) / De;
    if ([H, F, Z, W].includes(K.key)) {
      const $ = (b.value ? [o.value ? H : F, h.value ? Z : W] : y.value !== o.value ? [H, W] : [F, W]).includes(K.key) ? 1 : -1, z = K.shiftKey ? 2 : K.ctrlKey ? 1 : 0;
      $ === -1 && fe === s.value && !z && !Number.isInteger(_e) ? fe = fe - _e % 1 * De : fe = fe + $ * De * U.value[z];
    } else if (K.key === Y) fe = r.value;
    else if (K.key === N) fe = s.value;
    else {
      const ye = K.key === G ? 1 : -1;
      fe = fe - ye * De * (_e > 100 ? _e / 10 : 10);
    }
    return Math.max(e.min, Math.min(e.max, fe));
  }
  function Se(K) {
    const fe = ie(K, e.modelValue);
    fe != null && (x.value = false, a("update:modelValue", fe));
  }
  return se(() => e.focused, (K) => {
    K && (x.value = false);
  }), ae(() => {
    const K = ve(y.value ? 100 - e.position : e.position, "%"), fe = p.value === "always" || p.value === true && e.focused || p.value === "hover" && (C.value || e.focused && !x.value);
    return S("div", { class: ne(["v-slider-thumb", { "v-slider-thumb--focused": e.focused, "v-slider-thumb--pressed": e.focused && V.value }, e.class, i.value]), style: me([{ "--v-slider-thumb-position": K, "--v-slider-thumb-size": ve(v.value) }, e.style]), role: "slider", tabindex: f.value ? -1 : 0, "aria-label": e.name, "aria-valuemin": r.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, "aria-readonly": !!w.value, "aria-orientation": m.value, onKeydown: w.value ? void 0 : Se, onMouseenter: () => {
      C.value = true;
    }, onMouseleave: () => {
      C.value = false, x.value = true;
    } }, [S("div", { class: ne(["v-slider-thumb__surface", M.value, P.value]), style: me(D.value) }, null), lt(S("div", { class: ne(["v-slider-thumb__ripple", M.value]), style: me(D.value) }, null), [[Ot, e.ripple, null, { circle: true, center: true }]]), g(Oc, { origin: "bottom center" }, { default: () => {
      var _a2;
      return [lt(S("div", { class: "v-slider-thumb__label-container" }, [S("div", { class: ne(["v-slider-thumb__label", E.value]), style: me(A.value) }, [S("div", null, [((_a2 = n["thumb-label"]) == null ? void 0 : _a2.call(n, { modelValue: e.modelValue })) ?? e.modelValue.toFixed(d.value ? k.value : 1)]), S("div", { class: "v-slider-thumb__label-wedge" }, null)])]), [[Ln, fe]])];
    } })]);
  }), {};
} }), LP = j({ start: { type: Number, required: true }, stop: { type: Number, required: true }, ...xe() }, "VSliderTrack"), mb = ee()({ name: "VSliderTrack", props: LP(), emits: {}, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(hd);
  if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
  const { color: l, parsedTicks: o, rounded: i, showTicks: r, tickSize: s, trackColor: u, trackFillColor: c, trackSize: d, vertical: f, min: v, max: p, indexFromEnd: m } = a, { roundedClasses: h } = gt(i), { backgroundColorClasses: b, backgroundColorStyles: w } = Je(c), { backgroundColorClasses: I, backgroundColorStyles: V } = Je(u), k = _(() => `inset-${f.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), y = _(() => f.value ? "height" : "width"), C = _(() => ({ [k.value]: "0%", [y.value]: "100%" })), x = _(() => e.stop - e.start), T = _(() => ({ [k.value]: ve(e.start, "%"), [y.value]: ve(x.value, "%") })), P = _(() => r.value ? (f.value ? o.value.slice().reverse() : o.value).map((D, E) => {
    var _a2;
    const A = D.value !== v.value && D.value !== p.value ? ve(D.position, "%") : void 0;
    return S("div", { key: D.value, class: ne(["v-slider-track__tick", { "v-slider-track__tick--filled": D.position >= e.start && D.position <= e.stop, "v-slider-track__tick--first": D.value === v.value, "v-slider-track__tick--last": D.value === p.value }]), style: { [k.value]: A } }, [(D.label || n["tick-label"]) && S("div", { class: "v-slider-track__tick-label" }, [((_a2 = n["tick-label"]) == null ? void 0 : _a2.call(n, { tick: D, index: E })) ?? D.label])]);
  }) : []);
  return ae(() => S("div", { class: ne(["v-slider-track", h.value, e.class]), style: me([{ "--v-slider-track-size": ve(d.value), "--v-slider-tick-size": ve(s.value) }, e.style]) }, [S("div", { class: ne(["v-slider-track__background", I.value, { "v-slider-track__background--opacity": !!l.value || !c.value }]), style: { ...C.value, ...V.value } }, null), S("div", { class: ne(["v-slider-track__fill", b.value]), style: { ...T.value, ...w.value } }, null), r.value && S("div", { class: ne(["v-slider-track__ticks", { "v-slider-track__ticks--always-show": r.value === "always" }]) }, [P.value])])), {};
} }), OP = j({ ...pi(), ...db(), ...Ca(), modelValue: { type: [Number, String], default: 0 } }, "VSlider"), Mu = ee()({ name: "VSlider", inheritAttrs: false, props: OP(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, start: (e) => true, end: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = O(), i = O(), { rtlClasses: r } = Pt(), s = fb(e), u = Ce(e, "modelValue", void 0, (P) => s.roundValue(P ?? s.min.value)), { min: c, max: d, mousePressed: f, roundValue: v, onSliderMousedown: p, onSliderTouchstart: m, trackContainerRef: h, position: b, hasLabels: w, disabled: I, readonly: V, noKeyboard: k } = vb({ props: e, steps: s, onSliderStart: () => {
    !I.value && !V.value && a("start", u.value);
  }, onSliderEnd: (P) => {
    let { value: M } = P;
    const D = v(M);
    !I.value && !V.value && (u.value = D), a("end", D);
  }, onSliderMove: (P) => {
    let { value: M } = P;
    !I.value && !V.value && (u.value = v(M));
  }, getActiveThumb: () => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.$el;
  } }), { isFocused: y, focus: C, blur: x } = wa(e), T = _(() => b(u.value));
  return ae(() => {
    const P = Wt.filterProps(e), [M, D] = Jn(l), E = !!(e.label || n.label || n.prepend);
    return g(Wt, q({ ref: i, class: ["v-slider", { "v-slider--has-labels": !!n["tick-label"] || w.value, "v-slider--focused": y.value, "v-slider--pressed": f.value, "v-slider--disabled": I.value }, r.value, e.class], style: e.style }, P, M, { focused: y.value }), { ...n, prepend: E ? (A) => {
      var _a2, _b2;
      return S(be, null, [((_a2 = n.label) == null ? void 0 : _a2.call(n, A)) ?? (e.label ? g(so, { id: A.id.value, class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, A)]);
    } : void 0, default: (A) => {
      let { id: R, messagesId: G } = A;
      return S("div", { class: "v-slider__container", onMousedown: V.value ? void 0 : p, onTouchstartPassive: V.value ? void 0 : m }, [S("input", { id: R.value, name: e.name || R.value, disabled: I.value, readonly: V.value, tabindex: "-1", value: u.value }, null), g(mb, { ref: h, start: 0, stop: T.value }, { "tick-label": n["tick-label"] }), g(Du, q({ ref: o, "aria-describedby": G.value, focused: y.value, noKeyboard: k.value, min: c.value, max: d.value, modelValue: u.value, "onUpdate:modelValue": (N) => u.value = N, position: T.value, elevation: e.elevation, onFocus: C, onBlur: x, ripple: e.ripple, name: e.name }, D), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Dt({ focus: () => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.$el.focus();
  } }, i);
} }), gb = j({ color: { type: Object }, disabled: Boolean, readonly: Boolean, hideAlpha: Boolean, hideEyeDropper: Boolean, eyeDropperIcon: { type: Ie, default: "$eyeDropper" }, ...xe() }, "VColorPickerPreview"), NP = en({ name: "VColorPickerPreview", props: gb(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = ot(), l = new AbortController(), o = B(() => !e.disabled && !e.readonly);
  Vr(() => l.abort());
  async function i() {
    if (!Rf || !o.value) return;
    const r = new window.EyeDropper();
    try {
      const s = await r.open({ signal: l.signal }), u = di(yn(s.sRGBHex));
      n("update:color", { ...e.color ?? Ol, ...u });
    } catch {
    }
  }
  return ae(() => {
    var _a2, _b2;
    return S("div", { class: ne(["v-color-picker-preview", { "v-color-picker-preview--hide-alpha": e.hideAlpha }, e.class]), style: me(e.style) }, [Rf && !e.hideEyeDropper && S("div", { class: "v-color-picker-preview__eye-dropper", key: "eyeDropper" }, [g(Ue, { "aria-label": a("$vuetify.colorPicker.ariaLabel.eyedropper"), density: "comfortable", disabled: e.disabled, readonly: e.readonly, icon: e.eyeDropperIcon, variant: "plain", onClick: i }, null)]), S("div", { class: "v-color-picker-preview__dot" }, [S("div", { style: { background: th(e.color ?? Ol) } }, null)]), S("div", { class: "v-color-picker-preview__sliders" }, [g(Mu, { class: "v-color-picker-preview__track v-color-picker-preview__hue", "aria-label": a("$vuetify.colorPicker.ariaLabel.hueSlider"), modelValue: (_a2 = e.color) == null ? void 0 : _a2.h, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Ol, h: r }), step: 1, min: 0, max: 360, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null), !e.hideAlpha && g(Mu, { class: "v-color-picker-preview__track v-color-picker-preview__alpha", "aria-label": a("$vuetify.colorPicker.ariaLabel.alphaSlider"), modelValue: ((_b2 = e.color) == null ? void 0 : _b2.a) ?? 1, "onUpdate:modelValue": (r) => n("update:color", { ...e.color ?? Ol, a: r }), step: 0.01, min: 0, max: 1, disabled: e.disabled, readonly: e.readonly, thumbSize: 14, trackSize: 8, trackFillColor: "white", hideDetails: true }, null)])]);
  }), {};
} }), HP = { base: "#f44336", lighten5: "#ffebee", lighten4: "#ffcdd2", lighten3: "#ef9a9a", lighten2: "#e57373", lighten1: "#ef5350", darken1: "#e53935", darken2: "#d32f2f", darken3: "#c62828", darken4: "#b71c1c", accent1: "#ff8a80", accent2: "#ff5252", accent3: "#ff1744", accent4: "#d50000" }, zP = { base: "#e91e63", lighten5: "#fce4ec", lighten4: "#f8bbd0", lighten3: "#f48fb1", lighten2: "#f06292", lighten1: "#ec407a", darken1: "#d81b60", darken2: "#c2185b", darken3: "#ad1457", darken4: "#880e4f", accent1: "#ff80ab", accent2: "#ff4081", accent3: "#f50057", accent4: "#c51162" }, WP = { base: "#9c27b0", lighten5: "#f3e5f5", lighten4: "#e1bee7", lighten3: "#ce93d8", lighten2: "#ba68c8", lighten1: "#ab47bc", darken1: "#8e24aa", darken2: "#7b1fa2", darken3: "#6a1b9a", darken4: "#4a148c", accent1: "#ea80fc", accent2: "#e040fb", accent3: "#d500f9", accent4: "#aa00ff" }, jP = { base: "#673ab7", lighten5: "#ede7f6", lighten4: "#d1c4e9", lighten3: "#b39ddb", lighten2: "#9575cd", lighten1: "#7e57c2", darken1: "#5e35b1", darken2: "#512da8", darken3: "#4527a0", darken4: "#311b92", accent1: "#b388ff", accent2: "#7c4dff", accent3: "#651fff", accent4: "#6200ea" }, UP = { base: "#3f51b5", lighten5: "#e8eaf6", lighten4: "#c5cae9", lighten3: "#9fa8da", lighten2: "#7986cb", lighten1: "#5c6bc0", darken1: "#3949ab", darken2: "#303f9f", darken3: "#283593", darken4: "#1a237e", accent1: "#8c9eff", accent2: "#536dfe", accent3: "#3d5afe", accent4: "#304ffe" }, GP = { base: "#2196f3", lighten5: "#e3f2fd", lighten4: "#bbdefb", lighten3: "#90caf9", lighten2: "#64b5f6", lighten1: "#42a5f5", darken1: "#1e88e5", darken2: "#1976d2", darken3: "#1565c0", darken4: "#0d47a1", accent1: "#82b1ff", accent2: "#448aff", accent3: "#2979ff", accent4: "#2962ff" }, YP = { base: "#03a9f4", lighten5: "#e1f5fe", lighten4: "#b3e5fc", lighten3: "#81d4fa", lighten2: "#4fc3f7", lighten1: "#29b6f6", darken1: "#039be5", darken2: "#0288d1", darken3: "#0277bd", darken4: "#01579b", accent1: "#80d8ff", accent2: "#40c4ff", accent3: "#00b0ff", accent4: "#0091ea" }, KP = { base: "#00bcd4", lighten5: "#e0f7fa", lighten4: "#b2ebf2", lighten3: "#80deea", lighten2: "#4dd0e1", lighten1: "#26c6da", darken1: "#00acc1", darken2: "#0097a7", darken3: "#00838f", darken4: "#006064", accent1: "#84ffff", accent2: "#18ffff", accent3: "#00e5ff", accent4: "#00b8d4" }, XP = { base: "#009688", lighten5: "#e0f2f1", lighten4: "#b2dfdb", lighten3: "#80cbc4", lighten2: "#4db6ac", lighten1: "#26a69a", darken1: "#00897b", darken2: "#00796b", darken3: "#00695c", darken4: "#004d40", accent1: "#a7ffeb", accent2: "#64ffda", accent3: "#1de9b6", accent4: "#00bfa5" }, qP = { base: "#4caf50", lighten5: "#e8f5e9", lighten4: "#c8e6c9", lighten3: "#a5d6a7", lighten2: "#81c784", lighten1: "#66bb6a", darken1: "#43a047", darken2: "#388e3c", darken3: "#2e7d32", darken4: "#1b5e20", accent1: "#b9f6ca", accent2: "#69f0ae", accent3: "#00e676", accent4: "#00c853" }, ZP = { base: "#8bc34a", lighten5: "#f1f8e9", lighten4: "#dcedc8", lighten3: "#c5e1a5", lighten2: "#aed581", lighten1: "#9ccc65", darken1: "#7cb342", darken2: "#689f38", darken3: "#558b2f", darken4: "#33691e", accent1: "#ccff90", accent2: "#b2ff59", accent3: "#76ff03", accent4: "#64dd17" }, JP = { base: "#cddc39", lighten5: "#f9fbe7", lighten4: "#f0f4c3", lighten3: "#e6ee9c", lighten2: "#dce775", lighten1: "#d4e157", darken1: "#c0ca33", darken2: "#afb42b", darken3: "#9e9d24", darken4: "#827717", accent1: "#f4ff81", accent2: "#eeff41", accent3: "#c6ff00", accent4: "#aeea00" }, QP = { base: "#ffeb3b", lighten5: "#fffde7", lighten4: "#fff9c4", lighten3: "#fff59d", lighten2: "#fff176", lighten1: "#ffee58", darken1: "#fdd835", darken2: "#fbc02d", darken3: "#f9a825", darken4: "#f57f17", accent1: "#ffff8d", accent2: "#ffff00", accent3: "#ffea00", accent4: "#ffd600" }, eT = { base: "#ffc107", lighten5: "#fff8e1", lighten4: "#ffecb3", lighten3: "#ffe082", lighten2: "#ffd54f", lighten1: "#ffca28", darken1: "#ffb300", darken2: "#ffa000", darken3: "#ff8f00", darken4: "#ff6f00", accent1: "#ffe57f", accent2: "#ffd740", accent3: "#ffc400", accent4: "#ffab00" }, tT = { base: "#ff9800", lighten5: "#fff3e0", lighten4: "#ffe0b2", lighten3: "#ffcc80", lighten2: "#ffb74d", lighten1: "#ffa726", darken1: "#fb8c00", darken2: "#f57c00", darken3: "#ef6c00", darken4: "#e65100", accent1: "#ffd180", accent2: "#ffab40", accent3: "#ff9100", accent4: "#ff6d00" }, nT = { base: "#ff5722", lighten5: "#fbe9e7", lighten4: "#ffccbc", lighten3: "#ffab91", lighten2: "#ff8a65", lighten1: "#ff7043", darken1: "#f4511e", darken2: "#e64a19", darken3: "#d84315", darken4: "#bf360c", accent1: "#ff9e80", accent2: "#ff6e40", accent3: "#ff3d00", accent4: "#dd2c00" }, aT = { base: "#795548", lighten5: "#efebe9", lighten4: "#d7ccc8", lighten3: "#bcaaa4", lighten2: "#a1887f", lighten1: "#8d6e63", darken1: "#6d4c41", darken2: "#5d4037", darken3: "#4e342e", darken4: "#3e2723" }, lT = { base: "#607d8b", lighten5: "#eceff1", lighten4: "#cfd8dc", lighten3: "#b0bec5", lighten2: "#90a4ae", lighten1: "#78909c", darken1: "#546e7a", darken2: "#455a64", darken3: "#37474f", darken4: "#263238" }, oT = { base: "#9e9e9e", lighten5: "#fafafa", lighten4: "#f5f5f5", lighten3: "#eeeeee", lighten2: "#e0e0e0", lighten1: "#bdbdbd", darken1: "#757575", darken2: "#616161", darken3: "#424242", darken4: "#212121" }, iT = { black: "#000000", white: "#ffffff", transparent: "#ffffff00" }, rT = { red: HP, pink: zP, purple: WP, deepPurple: jP, indigo: UP, blue: GP, lightBlue: YP, cyan: KP, teal: XP, green: qP, lightGreen: ZP, lime: JP, yellow: QP, amber: eT, orange: tT, deepOrange: nT, brown: aT, blueGrey: lT, grey: oT, shades: iT }, sT = j({ swatches: { type: Array, default: () => uT(rT) }, disabled: Boolean, readonly: Boolean, color: Object, maxHeight: [Number, String], ...xe() }, "VColorPickerSwatches");
function uT(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const cT = en({ name: "VColorPickerSwatches", props: sT(), emits: { "update:color": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = B(() => !e.disabled && !e.readonly);
  function l(o) {
    !a.value || !o || n("update:color", o);
  }
  return ae(() => S("div", { class: ne(["v-color-picker-swatches", e.class]), style: me([{ maxHeight: ve(e.maxHeight) }, e.style]) }, [S("div", null, [e.swatches.map((o) => S("div", { class: "v-color-picker-swatches__swatch" }, [o.map((i) => {
    const r = yn(i), s = di(r), u = eh(r);
    return S("div", { class: ne(["v-color-picker-swatches__color", { "v-color-picker-swatches__color--disabled": e.disabled }]), onClick: () => l(s) }, [S("div", { style: { background: u } }, [e.color && Bt(e.color, s) ? g(Xe, { size: "x-small", icon: "$success", color: a1(i, "#FFFFFF") > 2 ? "white" : "black" }, null) : void 0])]);
  })]))])])), {};
} }), dT = pa("v-picker-title"), Jr = j({ bgColor: String, divided: Boolean, landscape: Boolean, title: String, hideHeader: Boolean, hideTitle: Boolean, ...ad() }, "VPicker"), no = ee()({ name: "VPicker", props: Jr(), setup(e, t) {
  let { slots: n } = t;
  const { backgroundColorClasses: a, backgroundColorStyles: l } = Je(() => e.color);
  return ae(() => {
    const o = Ha.filterProps(e), i = !e.hideTitle && !!(e.title || n.title);
    return g(Ha, q(o, { color: e.bgColor, class: ["v-picker", { "v-picker--divided": e.divided, "v-picker--landscape": e.landscape, "v-picker--with-actions": !!n.actions }, e.class], style: e.style }), { default: () => {
      var _a2;
      return [!e.hideHeader && S("div", { key: "header", class: ne(["v-picker__header-wrapper", a.value]), style: me([l.value]) }, [i && g(dT, { key: "picker-title" }, { default: () => {
        var _a3;
        return [((_a3 = n.title) == null ? void 0 : _a3.call(n)) ?? e.title];
      } }), n.header && S("div", { class: "v-picker__header" }, [n.header()])]), S("div", { class: "v-picker__body" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), n.actions && g(Fe, { defaults: { VBtn: { slim: true, variant: "text" } } }, { default: () => [S("div", { class: "v-picker__actions" }, [n.actions()])] })];
    } });
  }), {};
} }), fT = j({ canvasHeight: { type: [String, Number], default: 150 }, disabled: Boolean, dotSize: { type: [Number, String], default: 10 }, hideCanvas: Boolean, hideSliders: Boolean, hideInputs: Boolean, mode: { type: String, default: "rgba", validator: (e) => Object.keys(rl).includes(e) }, modes: { type: Array, default: () => Object.keys(rl), validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(rl).includes(t)) }, showSwatches: Boolean, readonly: Boolean, swatches: Array, swatchesMaxHeight: { type: [Number, String], default: 150 }, modelValue: { type: [Object, String] }, ...Jr({ hideHeader: true }), ...on(gb(), ["hideEyeDropper", "eyeDropperIcon"]) }, "VColorPicker"), vT = en({ name: "VColorPicker", props: fT(), emits: { "update:modelValue": (e) => true, "update:mode": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "mode"), l = O(null), o = Ce(e, "modelValue", void 0, (c) => {
    if (c == null || c === "") return null;
    let d;
    try {
      d = di(yn(c));
    } catch {
      return null;
    }
    return d;
  }, (c) => c ? TP(c, e.modelValue) : null), i = _(() => o.value ? { ...o.value, h: l.value ?? o.value.h } : null), { rtlClasses: r } = Pt();
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
    return g(no, q(c, { class: ["v-color-picker", r.value, e.class], style: [{ "--v-color-picker-color-hsv": th({ ...i.value ?? Ol, a: 1 }) }, e.style] }), { ...n, default: () => S(be, null, [!e.hideCanvas && g(IP, { key: "canvas", color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly, dotSize: e.dotSize, width: e.width, height: e.canvasHeight }, null), (!e.hideSliders || !e.hideInputs) && S("div", { key: "controls", class: "v-color-picker__controls" }, [!e.hideSliders && g(NP, { key: "preview", color: i.value, "onUpdate:color": u, hideAlpha: !a.value.endsWith("a"), disabled: e.disabled, readonly: e.readonly, hideEyeDropper: e.hideEyeDropper, eyeDropperIcon: e.eyeDropperIcon }, null), !e.hideInputs && g($P, { key: "edit", modes: e.modes, mode: a.value, "onUpdate:mode": (d) => a.value = d, color: i.value, "onUpdate:color": u, disabled: e.disabled, readonly: e.readonly }, null)]), e.showSwatches && g(cT, { key: "swatches", color: i.value, "onUpdate:color": u, maxHeight: e.swatchesMaxHeight, swatches: e.swatches, disabled: e.disabled, readonly: e.readonly }, null)]) });
  }), {};
} }), mT = j({ alwaysFilter: Boolean, autoSelectFirst: { type: [Boolean, String] }, clearOnSelect: { type: Boolean, default: true }, delimiters: Array, ...Il({ filterKeys: ["title"] }), ...ud({ hideNoData: true, returnObject: true }), ...ze(ki({ modelValue: null, role: "combobox" }), ["validationValue", "dirty"]) }, "VCombobox"), gT = ee()({ name: "VCombobox", props: mT(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:search": (e) => true, "update:menu": (e) => true }, setup(e, t) {
  var _a2;
  let { emit: n, slots: a } = t;
  const { t: l } = ot(), o = O(), i = re(false), r = re(true), s = re(false), u = O(), c = O(), d = re(-1);
  let f = false;
  const { items: v, transformIn: p, transformOut: m } = qc(e), { textColorClasses: h, textColorStyles: b } = $t(() => {
    var _a3;
    return (_a3 = o.value) == null ? void 0 : _a3.color;
  }), { InputIcon: w } = bi(e), I = Ce(e, "modelValue", [], (J) => p(ct(J)), (J) => {
    const ge = m(J);
    return e.multiple ? ge : ge[0] ?? null;
  }), V = uo(e), k = B(() => e.closableChips && !V.isReadonly.value && !V.isDisabled.value), y = _(() => !!(e.chips || a.chip)), C = _(() => y.value || !!a.selection), x = re(!e.multiple && !C.value ? ((_a2 = I.value[0]) == null ? void 0 : _a2.title) ?? "" : ""), T = re(null), P = _({ get: () => x.value, set: async (J) => {
    var _a3;
    if (x.value = J ?? "", J === null || J === "" && !e.multiple && !C.value ? I.value = [] : !e.multiple && !C.value && (I.value = [An(e, J)], Be(() => {
      var _a4;
      return (_a4 = c.value) == null ? void 0 : _a4.scrollToIndex(0);
    })), J && e.multiple && ((_a3 = e.delimiters) == null ? void 0 : _a3.length)) {
      const ge = pe(J);
      ge.length > 1 && (de(ge), x.value = "");
    }
    J || (d.value = -1), r.value = !J;
  } }), M = _(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? I.value.length : P.value.length), { filteredItems: D, getMatches: E } = Pl(e, v, () => T.value ?? (e.alwaysFilter || !r.value ? P.value : "")), A = _(() => e.hideSelected && T.value === null ? D.value.filter((J) => !I.value.some((ge) => ge.value === J.value)) : D.value), R = _(() => e.hideNoData && !A.value.length || V.isReadonly.value || V.isDisabled.value), G = Ce(e, "menu"), N = _({ get: () => G.value, set: (J) => {
    var _a3;
    G.value && !J && ((_a3 = u.value) == null ? void 0 : _a3.\u03A8openChildren.size) || J && R.value || (G.value = J);
  } }), { menuId: Y, ariaExpanded: H, ariaControls: F } = sd(e, N);
  se(x, (J) => {
    f ? Be(() => f = false) : i.value && !N.value && (N.value = true), n("update:search", J);
  }), se(I, (J) => {
    var _a3;
    !e.multiple && !C.value && (x.value = ((_a3 = J[0]) == null ? void 0 : _a3.title) ?? "");
  });
  const Z = _(() => I.value.map((J) => J.value)), W = _(() => A.value.find((J) => J.type === "item" && !J.props.disabled)), L = _(() => {
    var _a3;
    return (e.autoSelectFirst === true || e.autoSelectFirst === "exact" && P.value === ((_a3 = W.value) == null ? void 0 : _a3.title)) && A.value.length > 0 && !r.value && !s.value;
  }), U = O(), ie = O(), Se = O(), K = od(U, o), { onTabKeydown: fe } = id({ groups: [{ type: "element", contentRef: ie }, { type: "list", contentRef: U, displayItemsCount: () => A.value.length }, { type: "element", contentRef: Se }], onLeave: () => {
    var _a3;
    N.value = false, (_a3 = o.value) == null ? void 0 : _a3.focus();
  } });
  function De(J) {
    f = true, Be(() => f = false), e.openOnClear && (N.value = true);
  }
  function _e() {
    R.value || (N.value = true);
  }
  function ye(J) {
    R.value || (i.value && (J.preventDefault(), J.stopPropagation()), N.value = !N.value);
  }
  function $(J) {
    var _a3, _b2;
    J.key === "Tab" && fe(J), ((_a3 = U.value) == null ? void 0 : _a3.$el.contains(J.target)) && (ql(J) || J.key === "Backspace") && ((_b2 = o.value) == null ? void 0 : _b2.focus());
  }
  function z(J) {
    var _a3, _b2, _c2, _d2;
    if (V0(J) || V.isReadonly.value) return;
    const ge = (_a3 = o.value) == null ? void 0 : _a3.selectionStart, ke = I.value.length;
    if (["Enter", "ArrowDown", "ArrowUp"].includes(J.key) && J.preventDefault(), ["Enter", "ArrowDown"].includes(J.key) && (N.value = true), ["Escape"].includes(J.key) && (N.value = false), L.value && ["Enter", "Tab"].includes(J.key) && W.value && !I.value.some((we) => {
      let { value: Pe } = we;
      return Pe === W.value.value;
    }) && ue(W.value), J.key === "ArrowDown" && L.value && ((_b2 = U.value) == null ? void 0 : _b2.focus("next")), J.key === "Enter" && P.value && (ue(An(e, P.value), true, true), C.value && (x.value = "")), ["Backspace", "Delete"].includes(J.key)) {
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
    var _a3;
    const ge = ((_a3 = J == null ? void 0 : J.clipboardData) == null ? void 0 : _a3.getData("Text")) ?? "", ke = pe(ge);
    ke.length > 1 && e.multiple && (J.preventDefault(), de(ke));
  }
  function ce() {
    var _a3;
    e.eager && ((_a3 = c.value) == null ? void 0 : _a3.calculateVisibleItems());
  }
  function oe() {
    var _a3;
    i.value && ((_a3 = o.value) == null ? void 0 : _a3.focus()), r.value = true, T.value = null;
  }
  function ue(J) {
    let ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!(!J || J.props.disabled)) if (e.multiple) {
      const we = I.value.findIndex(($e) => (e.valueComparator || Bt)($e.value, J.value)), Pe = ge ?? !~we;
      if (~we) {
        const $e = Pe ? [...I.value, J] : [...I.value];
        $e.splice(we, 1), I.value = $e;
      } else Pe && (I.value = [...I.value, J]);
      e.clearOnSelect && (P.value = "");
    } else {
      const we = ge !== false;
      I.value = we ? [J] : [], (!r.value || e.alwaysFilter) && x.value && (T.value = x.value), x.value = we && !C.value ? J.title : "", Be(() => {
        N.value = ke, r.value = true;
      });
    }
  }
  function pe(J) {
    const ke = [`
`, ...e.delimiters ?? []].map(ir).join("|");
    return J.split(new RegExp(`(?:${ke})+`));
  }
  async function de(J) {
    for (let ge of J) ge = ge.trim(), ge && (ue(An(e, ge)), await Be());
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
    var _a3, _b2;
    ((_b2 = (_a3 = u.value) == null ? void 0 : _a3.contentEl) == null ? void 0 : _b2.contains(J.relatedTarget)) && (i.value = true);
  }
  return se(i, (J, ge) => {
    if (!(J || J === ge) && (d.value = -1, N.value = false, P.value)) {
      if (e.multiple) {
        ue(An(e, P.value));
        return;
      }
      if (!C.value) return;
      I.value.some((ke) => {
        let { title: we } = ke;
        return we === P.value;
      }) ? x.value = "" : ue(An(e, P.value));
    }
  }), se(N, (J) => {
    if (!e.hideSelected && J && I.value.length && r.value) {
      const ge = A.value.findIndex((ke) => I.value.some((we) => (e.valueComparator || Bt)(we.value, ke.value)));
      at && window.requestAnimationFrame(() => {
        var _a3;
        ge >= 0 && ((_a3 = c.value) == null ? void 0 : _a3.scrollToIndex(ge));
      });
    }
    J && (T.value = null);
  }), se(v, (J, ge) => {
    N.value || i.value && !ge.length && J.length && (N.value = true);
  }), ae(() => {
    const J = !!(!e.hideNoData || A.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ge = I.value.length > 0, ke = qn.filterProps(e), we = { search: P, filteredItems: D.value };
    return g(qn, q({ ref: o }, ke, { modelValue: P.value, "onUpdate:modelValue": (Pe) => P.value = Pe, focused: i.value, "onUpdate:focused": (Pe) => i.value = Pe, validationValue: I.externalValue, counterValue: M.value, dirty: ge, class: ["v-combobox", { "v-combobox--active-menu": N.value, "v-combobox--chips": !!e.chips, "v-combobox--selection-slot": !!C.value, "v-combobox--selecting-index": d.value > -1, [`v-combobox--${e.multiple ? "multiple" : "single"}`]: true }, e.class], style: e.style, readonly: V.isReadonly.value, placeholder: ge ? void 0 : e.placeholder, "onClick:clear": De, "onMousedown:control": _e, onKeydown: z, onPaste: Q, onBlur: Ve, "aria-expanded": H.value, "aria-controls": F.value }), { ...a, default: (Pe) => {
      let { id: $e } = Pe;
      return S(be, null, [g(to, q({ id: Y.value, ref: u, modelValue: N.value, "onUpdate:modelValue": (We) => N.value = We, activator: "parent", contentClass: "v-combobox__content", disabled: R.value, eager: e.eager, maxHeight: 310, openOnClick: false, closeOnContentClick: false, onAfterEnter: ce, onAfterLeave: oe }, e.menuProps), { default: () => [g(Ha, { onFocusin: X, onKeydown: $ }, { default: () => [a["menu-header"] && S("header", { ref: ie }, [a["menu-header"](we)]), J && g(eo, q({ key: "combobox-list", ref: U, filterable: true, selected: Z.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (We) => We.preventDefault(), selectable: !!A.value.length, onFocusout: le, tabindex: "-1", "aria-live": "polite", "aria-labelledby": `${$e.value}-label`, "aria-multiselectable": e.multiple, color: e.itemColor ?? e.color }, K, e.listProps), { default: () => {
        var _a3, _b2, _c2;
        return [(_a3 = a["prepend-item"]) == null ? void 0 : _a3.call(a), !A.value.length && !e.hideNoData && (((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? g(Pn, { key: "no-data", title: l(e.noDataText) }, null)), g(Gr, { ref: c, renderless: true, items: A.value, itemKey: "value" }, { default: (We) => {
          var _a4, _b3, _c3;
          let { item: Le, index: ut, itemRef: Qe } = We;
          const Gt = q(Le.props, { ref: Qe, key: Le.value, active: L.value && Le === W.value ? true : void 0, onClick: () => ue(Le, null), "aria-posinset": ut + 1, "aria-setsize": A.value.length });
          return Le.type === "divider" ? ((_a4 = a.divider) == null ? void 0 : _a4.call(a, { props: Le.raw, index: ut })) ?? g(pn, q(Le.props, { key: `divider-${ut}` }), null) : Le.type === "subheader" ? ((_b3 = a.subheader) == null ? void 0 : _b3.call(a, { props: Le.raw, index: ut })) ?? g(co, q(Le.props, { key: `subheader-${ut}` }), null) : ((_c3 = a.item) == null ? void 0 : _c3.call(a, { item: Le, index: ut, props: Gt })) ?? g(Pn, q(Gt, { role: "option" }), { prepend: (te) => {
            let { isSelected: Ee } = te;
            return S(be, null, [e.multiple && !e.hideSelected ? g(Fn, { key: Le.value, modelValue: Ee, ripple: false, tabindex: "-1", "aria-hidden": true, onClick: (Ze) => Ze.preventDefault() }, null) : void 0, Le.props.prependAvatar && g(xn, { image: Le.props.prependAvatar }, null), Le.props.prependIcon && g(Xe, { icon: Le.props.prependIcon }, null)]);
          }, title: () => {
            var _a5;
            return r.value ? Le.title : rd("v-combobox", Le.title, (_a5 = E(Le)) == null ? void 0 : _a5.title);
          } });
        } }), (_c2 = a["append-item"]) == null ? void 0 : _c2.call(a)];
      } }), a["menu-footer"] && S("footer", { ref: Se }, [a["menu-footer"](we)])] })] }), I.value.map((We, Le) => {
        function ut(Ee) {
          Ee.stopPropagation(), Ee.preventDefault(), ue(We, false);
        }
        const Qe = q(ha.filterProps(We.props), { "onClick:close": ut, onKeydown(Ee) {
          Ee.key !== "Enter" && Ee.key !== " " || (Ee.preventDefault(), Ee.stopPropagation(), ut(Ee));
        }, onMousedown(Ee) {
          Ee.preventDefault(), Ee.stopPropagation();
        }, modelValue: true, "onUpdate:modelValue": void 0 }), Gt = y.value ? !!a.chip : !!a.selection, te = Gt ? Br(y.value ? a.chip({ item: We, index: Le, props: Qe }) : a.selection({ item: We, index: Le })) : void 0;
        if (!(Gt && !te)) return S("div", { key: We.value, class: ne(["v-combobox__selection", Le === d.value && ["v-combobox__selection--selected", h.value]]), style: me(Le === d.value ? b.value : {}) }, [y.value ? a.chip ? g(Fe, { key: "chip-defaults", defaults: { VChip: { closable: k.value, size: "small", text: We.title } } }, { default: () => [te] }) : g(ha, q({ key: "chip", closable: k.value, size: "small", text: We.title, disabled: We.props.disabled }, Qe), null) : te ?? S("span", { class: "v-combobox__selection-text" }, [We.title, e.multiple && Le < I.value.length - 1 && S("span", { class: "v-combobox__selection-comma" }, [Oe(",")])])]);
      })]);
    }, "append-inner": function() {
      var _a3, _b2;
      for (var Pe = arguments.length, $e = new Array(Pe), We = 0; We < Pe; We++) $e[We] = arguments[We];
      return S(be, null, [(_a3 = a["append-inner"]) == null ? void 0 : _a3.call(a, ...$e), (!e.hideNoData || e.items.length) && e.menuIcon ? g(Xe, { class: "v-combobox__menu-icon", color: (_b2 = o.value) == null ? void 0 : _b2.fieldIconColor, icon: e.menuIcon, onMousedown: ye, onClick: Er, "aria-hidden": true, tabindex: "-1" }, null) : void 0, e.appendInnerIcon && g(w, { key: "append-icon", name: "appendInner", color: $e[0].iconColor.value }, null)]);
    } });
  }), Dt({ isFocused: i, isPristine: r, menu: N, search: P, selectionIndex: d, filteredItems: D, select: ue }, o);
} }), hT = j({ modelValue: null, color: String, cancelText: { type: String, default: "$vuetify.confirmEdit.cancel" }, okText: { type: String, default: "$vuetify.confirmEdit.ok" }, disabled: { type: [Boolean, Array], default: void 0 }, hideActions: Boolean }, "VConfirmEdit"), yT = ee()({ name: "VConfirmEdit", props: hT(), emits: { cancel: () => true, save: (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = O();
  mt(() => {
    o.value = structuredClone(jf(l.value));
  });
  const { t: i } = ot(), r = _(() => Bt(l.value, o.value));
  function s(m) {
    return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(m) : r.value;
  }
  const u = _(() => s("save")), c = _(() => s("cancel"));
  function d() {
    l.value = o.value, n("save", o.value);
  }
  function f() {
    o.value = structuredClone(jf(l.value)), n("cancel");
  }
  function v(m) {
    return S(be, null, [g(Ue, q({ disabled: c.value, variant: "text", color: e.color, onClick: f, text: i(e.cancelText) }, m), null), g(Ue, q({ disabled: u.value, variant: "text", color: e.color, onClick: d, text: i(e.okText) }, m), null)]);
  }
  let p = false;
  return ae(() => {
    var _a2;
    return S(be, null, [(_a2 = a.default) == null ? void 0 : _a2.call(a, { model: o, save: d, cancel: f, isPristine: r.value, get actions() {
      return p = true, v;
    } }), !e.hideActions && !p && v()]);
  }), { save: d, cancel: f, isPristine: r };
} }), hb = j({ expandOnClick: Boolean, showExpand: Boolean, expanded: { type: Array, default: () => [] } }, "DataTable-expand"), yb = Symbol.for("vuetify:datatable:expanded");
function Qr(e) {
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
  return ft(yb, i), i;
}
function bb() {
  const e = Ge(yb);
  if (!e) throw new Error("foo");
  return e;
}
const yd = j({ groupBy: { type: Array, default: () => [] } }, "DataTable-group"), pb = Symbol.for("vuetify:data-table-group");
function bd(e) {
  return { groupBy: Ce(e, "groupBy") };
}
function es(e) {
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
      for (const p of f.items) "type" in p && p.type === "group" ? v.push(...d(p)) : v.push(p);
      return [...new Set(v)];
    }
    return d({ items: c });
  }
  const u = { sortByWithGroups: o, toggleGroup: r, opened: l, groupBy: n, extractRows: s, isGroupOpen: i };
  return ft(pb, u), u;
}
function Sb() {
  const e = Ge(pb);
  if (!e) throw new Error("Missing group!");
  return e;
}
function bT(e, t) {
  if (!e.length) return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = cl(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function xb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length) return [];
  const l = bT(e, t[0]), o = [], i = t.slice(1);
  return l.forEach((r, s) => {
    const u = t[0], c = `${a}_${u}_${s}`;
    o.push({ depth: n, id: c, key: u, value: s, items: i.length ? xb(r, i, n + 1, c) : r, type: "group" });
  }), o;
}
function kb(e, t, n) {
  const a = [];
  for (const l of e) "type" in l && l.type === "group" ? (l.value != null && a.push(l), (t.has(l.id) || l.value == null) && (a.push(...kb(l.items, t, n)), n && a.push({ ...l, type: "group-summary" }))) : a.push(l);
  return a;
}
function ts(e, t, n, a) {
  const l = _(() => t.value.length ? xb(st(e), t.value.map((i) => i.key)) : []), o = _(() => t.value.length ? kb(l.value, n.value, st(a)) : st(e));
  return { groups: l, flatItems: o };
}
function ns(e) {
  let { page: t, itemsPerPage: n, sortBy: a, groupBy: l, search: o } = e;
  const i = wt("VDataTable"), r = () => ({ page: t.value, itemsPerPage: n.value, sortBy: a.value, groupBy: l.value, search: o.value });
  let s = null;
  se(r, (u) => {
    Bt(s, u) || (s && s.search !== u.search && (t.value = 1), i.emit("update:options", u), s = u);
  }, { deep: true, immediate: true });
}
const pd = j({ page: { type: [Number, String], default: 1 }, itemsPerPage: { type: [Number, String], default: 10 }, pageBy: { type: String, default: "any" } }, "DataTable-paginate"), wb = Symbol.for("vuetify:data-table-pagination");
function Sd(e) {
  const t = Ce(e, "page", void 0, (a) => Number(a ?? 1)), n = Ce(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return { page: t, itemsPerPage: n };
}
function xd(e) {
  const { page: t, itemsPerPage: n, itemsLength: a } = e, l = _(() => n.value === -1 ? 0 : n.value * (t.value - 1)), o = _(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), i = _(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  se([t, i], () => {
    t.value > i.value && (t.value = i.value);
  });
  function r(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = nt(t.value + 1, 1, i.value);
  }
  function u() {
    t.value = nt(t.value - 1, 1, i.value);
  }
  function c(f) {
    t.value = nt(f, 1, i.value);
  }
  const d = { page: t, itemsPerPage: n, startIndex: l, stopIndex: o, pageCount: i, itemsLength: a, nextPage: s, prevPage: u, setPage: c, setItemsPerPage: r };
  return ft(wb, d), d;
}
function pT() {
  const e = Ge(wb);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Cb(e) {
  const t = wt("usePaginatedItems"), { items: n, startIndex: a, stopIndex: l, itemsPerPage: o } = e, i = _(() => o.value <= 0 ? st(n) : st(n).slice(a.value, l.value));
  return se(i, (r) => {
    t.emit("update:currentItems", r);
  }, { immediate: true }), { paginatedItems: i };
}
function ST(e) {
  const { sortedItems: t, paginate: n, group: a } = e, l = st(e.pageBy);
  if (l === "item") {
    const { paginatedItems: o, pageCount: i, setItemsPerPage: r } = n(t), { flatItems: s } = a(o);
    return { pageCount: i, setItemsPerPage: r, paginatedItems: s };
  }
  if (l === "group") {
    const { flatItems: o, groups: i } = a(t), { paginatedItems: r, pageCount: s, setItemsPerPage: u } = n(i), c = _(() => {
      if (!r.value.length) return [];
      const d = r.value.at(0).id, f = r.value.at(-1).id, v = o.value.findIndex((h) => h.type === "group" && h.id === d), p = o.value.findIndex((h) => h.type === "group" && h.id === f), m = o.value.findIndex((h, b) => b > p && h.type === "group" && h.depth === 0);
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
const xT = { showSelectAll: false, allSelected: () => [], select: (e) => {
  var _a2;
  let { items: t, value: n } = e;
  return new Set(n ? [(_a2 = t[0]) == null ? void 0 : _a2.value] : []);
}, selectAll: (e) => {
  let { selected: t } = e;
  return t;
} }, _b = { showSelectAll: true, allSelected: (e) => {
  let { currentPage: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, currentPage: n, selected: a } = e;
  return _b.select({ items: n, value: t, selected: a });
} }, kT = { showSelectAll: true, allSelected: (e) => {
  let { allItems: t } = e;
  return t;
}, select: (e) => {
  let { items: t, value: n, selected: a } = e;
  for (const l of t) n ? a.add(l.value) : a.delete(l.value);
  return a;
}, selectAll: (e) => {
  let { value: t, allItems: n } = e;
  return new Set(t ? n.map((a) => a.value) : []);
} }, Vb = j({ showSelect: Boolean, selectStrategy: { type: [String, Object], default: "page" }, modelValue: { type: Array, default: () => [] }, valueComparator: Function }, "DataTable-select"), Ib = Symbol.for("vuetify:data-table-selection");
function as(e, t) {
  let { allItems: n, currentPage: a } = t;
  const l = Ce(e, "modelValue", e.modelValue, (w) => {
    const I = e.valueComparator;
    return I ? new Set(ct(w).map((V) => {
      var _a2;
      return ((_a2 = n.value.find((k) => I(V, k.value))) == null ? void 0 : _a2.value) ?? V;
    })) : new Set(ct(w).map((V) => {
      var _a2, _b2;
      return Fa(V) ? ((_a2 = n.value.find((k) => V === k.value)) == null ? void 0 : _a2.value) ?? V : ((_b2 = n.value.find((k) => Bt(V, k.value))) == null ? void 0 : _b2.value) ?? V;
    }));
  }, (w) => [...w.values()]), o = _(() => n.value.filter((w) => w.selectable)), i = _(() => st(a).filter((w) => w.selectable)), r = _(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return xT;
      case "all":
        return kT;
      case "page":
      default:
        return _b;
    }
  }), s = re(null);
  function u(w) {
    return ct(w).every((I) => l.value.has(I.value));
  }
  function c(w) {
    return ct(w).some((I) => l.value.has(I.value));
  }
  function d(w, I) {
    const V = r.value.select({ items: w, value: I, selected: new Set(l.value) });
    l.value = V;
  }
  function f(w, I, V) {
    const k = [], y = st(a);
    if (I = I ?? y.findIndex((C) => C.value === w.value), e.selectStrategy !== "single" && (V == null ? void 0 : V.shiftKey) && s.value !== null) {
      const [C, x] = [s.value, I].sort((T, P) => T - P);
      k.push(...y.slice(C, x + 1).filter((T) => T.selectable));
    } else k.push(w), s.value = I;
    d(k, !u([w]));
  }
  function v(w) {
    const I = r.value.selectAll({ value: w, allItems: o.value, currentPage: i.value, selected: new Set(l.value) });
    l.value = I;
  }
  const p = _(() => l.value.size > 0), m = _(() => {
    const w = r.value.allSelected({ allItems: o.value, currentPage: i.value });
    return !!w.length && u(w);
  }), b = { toggleSelect: f, select: d, selectAll: v, isSelected: u, isSomeSelected: c, someSelected: p, allSelected: m, showSelectAll: B(() => r.value.showSelectAll), lastSelectedIndex: s, selectStrategy: r };
  return ft(Ib, b), b;
}
function ls() {
  const e = Ge(Ib);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Pb = j({ initialSortOrder: { type: String, default: "asc", validator: (e) => !e || ["asc", "desc"].includes(e) }, sortBy: { type: Array, default: () => [] }, customKeySort: Object, multiSort: { type: [Boolean, Object], default: false }, mustSort: Boolean }, "DataTable-sort"), Tb = Symbol.for("vuetify:data-table-sort");
function os(e) {
  const t = B(() => e.initialSortOrder), n = Ce(e, "sortBy");
  return { initialSortOrder: t, sortBy: n, multiSort: B(() => e.multiSort), mustSort: B(() => e.mustSort) };
}
function wT(e, t) {
  if (!dl(e)) return { active: !!e };
  const { key: n, mode: a, modifier: l } = e, o = l === "alt" && (t == null ? void 0 : t.altKey) || l === "shift" && (t == null ? void 0 : t.shiftKey);
  return { active: !n || (t == null ? void 0 : t.ctrlKey) || (t == null ? void 0 : t.metaKey) || false, mode: o ? a === "append" ? "prepend" : "append" : a };
}
function is(e) {
  const { initialSortOrder: t, sortBy: n, mustSort: a, multiSort: l, page: o } = e, i = (u, c) => {
    if (u.key == null) return;
    let d = n.value.map((m) => ({ ...m })) ?? [];
    const f = d.find((m) => m.key === u.key), v = t.value, p = t.value === "desc" ? "asc" : "desc";
    if (f) f.order === p ? a.value && d.length === 1 ? f.order = t.value : d = d.filter((m) => m.key !== u.key) : f.order = p;
    else {
      const { active: m, mode: h } = wT(l.value, c);
      m ? h === "prepend" ? d.unshift({ key: u.key, order: v }) : d.push({ key: u.key, order: v }) : d = [{ key: u.key, order: v }];
    }
    n.value = d, o && (o.value = 1);
  };
  function r(u) {
    return !!n.value.find((c) => c.key === u.key);
  }
  const s = { sortBy: n, toggleSort: i, isSorted: r };
  return ft(Tb, s), s;
}
function Ab() {
  const e = Ge(Tb);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function kd(e, t, n, a) {
  const l = ot();
  return { sortedItems: _(() => {
    var _a2, _b2;
    return n.value.length ? CT(t.value, n.value, l.current.value, { transform: a == null ? void 0 : a.transform, sortFunctions: { ...e.customKeySort, ...(_a2 = a == null ? void 0 : a.sortFunctions) == null ? void 0 : _a2.value }, sortRawFunctions: (_b2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _b2.value }) : t.value;
  }) };
}
function CT(e, t, n, a) {
  const l = new Intl.Collator(n, { sensitivity: "accent", usage: "sort" });
  return e.map((i) => [i, (a == null ? void 0 : a.transform) ? a.transform(i) : i]).sort((i, r) => {
    var _a2, _b2;
    for (let s = 0; s < t.length; s++) {
      let u = false;
      const c = t[s].key, d = t[s].order ?? "asc";
      if (d === false) continue;
      let f = cl(i[1], c), v = cl(r[1], c), p = i[0].raw, m = r[0].raw;
      if (d === "desc" && ([f, v] = [v, f], [p, m] = [m, p]), (_a2 = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : _a2[c]) {
        const h = a.sortRawFunctions[c](p, m);
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
const _T = j({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, returnObject: Boolean }, "DataIterator-items");
function VT(e, t) {
  const n = e.returnObject ? t : xt(t, e.itemValue), a = xt(t, e.itemSelectable, true);
  return { type: "item", value: n, selectable: a, raw: t };
}
function IT(e, t) {
  const n = [];
  for (const a of t) n.push(VT(e, a));
  return n;
}
function PT(e) {
  return { items: _(() => IT(e, e.items)) };
}
const TT = j({ search: String, loading: Boolean, itemsLength: [Number, String], ...xe(), ..._T(), ...Vb(), ...Pb(), ...pd({ itemsPerPage: 5 }), ...hb(), ...yd(), ...Il(), ...Re(), ...Sa({ transition: { component: Ko, hideOnLeave: true } }) }, "VDataIterator"), AT = ee()({ name: "VDataIterator", props: TT(), emits: { "update:modelValue": (e) => true, "update:groupBy": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "groupBy"), l = B(() => e.search), { items: o } = PT(e), { filteredItems: i } = Pl(e, o, l, { transform: (U) => U.raw }), { initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c } = os(e), { page: d, itemsPerPage: f } = Sd(e), { toggleSort: v } = is({ initialSortOrder: r, sortBy: s, multiSort: u, mustSort: c, page: d }), { sortByWithGroups: p, opened: m, extractRows: h, isGroupOpen: b, toggleGroup: w } = es({ groupBy: a, sortBy: s }), { sortedItems: I } = kd(e, i, p, { transform: (U) => U.raw }), { flatItems: V } = ts(I, a, m, false), k = B(() => !So(e.itemsLength)), y = B(() => k.value ? Number(e.itemsLength) : V.value.length), { startIndex: C, stopIndex: x, pageCount: T, prevPage: P, nextPage: M, setItemsPerPage: D, setPage: E } = xd({ page: d, itemsPerPage: f, itemsLength: y }), A = re([]), R = _(() => k.value ? V.value : A.value);
  Lt(() => !k.value, () => {
    const { paginatedItems: U } = Cb({ items: V, startIndex: C, stopIndex: x, itemsPerPage: f });
    mt(() => {
      A.value = U.value;
    });
  });
  const G = _(() => h(R.value)), { isSelected: N, select: Y, selectAll: H, toggleSelect: F } = as(e, { allItems: o, currentPage: G }), { isExpanded: Z, toggleExpand: W } = Qr(e);
  ns({ page: d, itemsPerPage: f, sortBy: s, groupBy: a, search: l });
  const L = _(() => ({ page: d.value, itemsPerPage: f.value, sortBy: s.value, pageCount: T.value, toggleSort: v, prevPage: P, nextPage: M, setPage: E, setItemsPerPage: D, isSelected: N, select: Y, selectAll: H, toggleSelect: F, isExpanded: Z, toggleExpand: W, isGroupOpen: b, toggleGroup: w, items: G.value, itemsCount: i.value.length, groupedItems: R.value }));
  return ae(() => g(e.tag, { class: ne(["v-data-iterator", { "v-data-iterator--loading": e.loading }, e.class]), style: me(e.style) }, { default: () => {
    var _a2, _b2;
    return [(_a2 = n.header) == null ? void 0 : _a2.call(n, L.value), g(Qt, { transition: e.transition }, { default: () => {
      var _a3, _b3;
      return [e.loading ? g(gi, { key: "loader", name: "v-data-iterator", active: true }, { default: (U) => {
        var _a4;
        return (_a4 = n.loader) == null ? void 0 : _a4.call(n, U);
      } }) : S("div", { key: "items" }, [R.value.length ? (_a3 = n.default) == null ? void 0 : _a3.call(n, L.value) : (_b3 = n["no-data"]) == null ? void 0 : _b3.call(n)])];
    } }), (_b2 = n.footer) == null ? void 0 : _b2.call(n, L.value)];
  } })), {};
} });
function DT() {
  const e = O([]);
  Ym(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return { refs: e, updateRef: t };
}
const MT = j({ activeColor: String, start: { type: [Number, String], default: 1 }, modelValue: { type: Number, default: (e) => e.start }, disabled: Boolean, length: { type: [Number, String], default: 1, validator: (e) => e % 1 === 0 }, totalVisible: [Number, String], firstIcon: { type: Ie, default: "$first" }, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, lastIcon: { type: Ie, default: "$last" }, ariaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.root" }, pageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.page" }, currentPageAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.currentPage" }, firstAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.first" }, previousAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.previous" }, nextAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.next" }, lastAriaLabel: { type: String, default: "$vuetify.pagination.ariaLabel.last" }, ellipsis: { type: String, default: "..." }, showFirstLastPage: Boolean, ...Ut(), ...xe(), ...bt(), ...Vt(), ...dt(), ...ta(), ...Re({ tag: "nav" }), ...Ye(), ...Cn({ variant: "text" }) }, "VPagination"), Eu = ee()({ name: "VPagination", props: MT(), emits: { "update:modelValue": (e) => true, first: (e) => true, prev: (e) => true, next: (e) => true, last: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ce(e, "modelValue"), { t: o, n: i } = ot(), { isRtl: r } = Pt(), { themeClasses: s } = qe(e), { width: u } = kn(), c = re(-1);
  yt(void 0, { scoped: true });
  const { resizeRef: d } = In((x) => {
    if (!x.length) return;
    const { target: T, contentRect: P } = x[0], M = T.querySelector(".v-pagination__list > *");
    if (!M) return;
    const D = P.width, E = M.offsetWidth + parseFloat(getComputedStyle(M).marginRight) * 2;
    c.value = m(D, E);
  }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), p = _(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : m(u.value, 58));
  function m(x, T) {
    const P = e.showFirstLastPage ? 5 : 3;
    return Math.max(0, Math.floor(Number(((x - T * P) / T).toFixed(2))));
  }
  const h = _(() => {
    if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER) return [];
    if (p.value <= 0) return [];
    if (p.value === 1) return [l.value];
    if (f.value <= p.value) return jn(f.value, v.value);
    const x = p.value % 2 === 0, T = x ? p.value / 2 : Math.floor(p.value / 2), P = x ? T : T + 1, M = f.value - T;
    if (P - l.value >= 0) return [...jn(Math.max(1, p.value - 1), v.value), e.ellipsis, f.value];
    if (l.value - M >= (x ? 1 : 0)) {
      const D = p.value - 1, E = f.value - D + v.value;
      return [v.value, e.ellipsis, ...jn(D, E)];
    } else {
      const D = Math.max(1, p.value - 2), E = D === 1 ? l.value : l.value - Math.ceil(D / 2) + v.value;
      return [v.value, e.ellipsis, ...jn(D, E), e.ellipsis, f.value];
    }
  });
  function b(x, T, P) {
    x.preventDefault(), l.value = T, P && a(P, T);
  }
  const { refs: w, updateRef: I } = DT();
  yt({ VPaginationBtn: { color: B(() => e.color), border: B(() => e.border), density: B(() => e.density), size: B(() => e.size), variant: B(() => e.variant), rounded: B(() => e.rounded), elevation: B(() => e.elevation) } });
  const V = _(() => h.value.map((x, T) => {
    const P = (M) => I(M, T);
    if (typeof x == "string") return { isActive: false, key: `ellipsis-${T}`, page: x, props: { ref: P, ellipsis: true, icon: true, disabled: true } };
    {
      const M = x === l.value;
      return { isActive: M, key: x, page: i(x), props: { ref: P, ellipsis: false, icon: true, disabled: !!e.disabled || Number(e.length) < 2, color: M ? e.activeColor : e.color, "aria-current": M, "aria-label": o(M ? e.currentPageAriaLabel : e.pageAriaLabel, x), onClick: (D) => b(D, x) } };
    }
  })), k = _(() => {
    const x = !!e.disabled || l.value <= v.value, T = !!e.disabled || l.value >= v.value + f.value - 1;
    return { first: e.showFirstLastPage ? { icon: r.value ? e.lastIcon : e.firstIcon, onClick: (P) => b(P, v.value, "first"), disabled: x, "aria-label": o(e.firstAriaLabel), "aria-disabled": x } : void 0, prev: { icon: r.value ? e.nextIcon : e.prevIcon, onClick: (P) => b(P, l.value - 1, "prev"), disabled: x, "aria-label": o(e.previousAriaLabel), "aria-disabled": x }, next: { icon: r.value ? e.prevIcon : e.nextIcon, onClick: (P) => b(P, l.value + 1, "next"), disabled: T, "aria-label": o(e.nextAriaLabel), "aria-disabled": T }, last: e.showFirstLastPage ? { icon: r.value ? e.firstIcon : e.lastIcon, onClick: (P) => b(P, v.value + f.value - 1, "last"), disabled: T, "aria-label": o(e.lastAriaLabel), "aria-disabled": T } : void 0 };
  });
  function y() {
    var _a2;
    const x = l.value - v.value;
    (_a2 = w.value[x]) == null ? void 0 : _a2.$el.focus();
  }
  function C(x) {
    x.key === au.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Be(y)) : x.key === au.right && !e.disabled && l.value < v.value + f.value - 1 && (l.value = l.value + 1, Be(y));
  }
  return ae(() => g(e.tag, { ref: d, class: ne(["v-pagination", s.value, e.class]), style: me(e.style), role: "navigation", "aria-label": o(e.ariaLabel), onKeydown: C, "data-test": "v-pagination-root" }, { default: () => [S("ul", { class: "v-pagination__list" }, [e.showFirstLastPage && S("li", { key: "first", class: "v-pagination__first", "data-test": "v-pagination-first" }, [n.first ? n.first(k.value.first) : g(Ue, q({ _as: "VPaginationBtn" }, k.value.first), null)]), S("li", { key: "prev", class: "v-pagination__prev", "data-test": "v-pagination-prev" }, [n.prev ? n.prev(k.value.prev) : g(Ue, q({ _as: "VPaginationBtn" }, k.value.prev), null)]), V.value.map((x, T) => S("li", { key: x.key, class: ne(["v-pagination__item", { "v-pagination__item--is-active": x.isActive }]), "data-test": "v-pagination-item" }, [n.item ? n.item(x) : g(Ue, q({ _as: "VPaginationBtn" }, x.props), { default: () => [x.page] })])), S("li", { key: "next", class: "v-pagination__next", "data-test": "v-pagination-next" }, [n.next ? n.next(k.value.next) : g(Ue, q({ _as: "VPaginationBtn" }, k.value.next), null)]), e.showFirstLastPage && S("li", { key: "last", class: "v-pagination__last", "data-test": "v-pagination-last" }, [n.last ? n.last(k.value.last) : g(Ue, q({ _as: "VPaginationBtn" }, k.value.last), null)])])] })), {};
} }), wd = j({ color: String, prevIcon: { type: Ie, default: "$prev" }, nextIcon: { type: Ie, default: "$next" }, firstIcon: { type: Ie, default: "$first" }, lastIcon: { type: Ie, default: "$last" }, itemsPerPageText: { type: String, default: "$vuetify.dataFooter.itemsPerPageText" }, pageText: { type: String, default: "$vuetify.dataFooter.pageText" }, firstPageLabel: { type: String, default: "$vuetify.dataFooter.firstPage" }, prevPageLabel: { type: String, default: "$vuetify.dataFooter.prevPage" }, nextPageLabel: { type: String, default: "$vuetify.dataFooter.nextPage" }, lastPageLabel: { type: String, default: "$vuetify.dataFooter.lastPage" }, itemsPerPageOptions: { type: Array, default: () => [{ value: 10, title: "10" }, { value: 25, title: "25" }, { value: 50, title: "50" }, { value: 100, title: "100" }, { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" }] }, showCurrentPage: Boolean }, "VDataTableFooter"), ti = ee()({ name: "VDataTableFooter", props: wd(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = ot(), { page: l, pageCount: o, startIndex: i, stopIndex: r, itemsLength: s, itemsPerPage: u, setItemsPerPage: c } = pT(), d = _(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? { value: f, title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f) } : { ...f, title: isNaN(Number(f.title)) ? a(f.title) : f.title }));
  return ae(() => {
    var _a2;
    const f = Eu.filterProps(e);
    return S("div", { class: "v-data-table-footer" }, [(_a2 = n.prepend) == null ? void 0 : _a2.call(n), S("div", { class: "v-data-table-footer__items-per-page" }, [S("span", null, [a(e.itemsPerPageText)]), g(cd, { items: d.value, itemColor: e.color, modelValue: u.value, "onUpdate:modelValue": (v) => c(Number(v)), density: "compact", variant: "outlined", "aria-label": a(e.itemsPerPageText), hideDetails: true }, null)]), S("div", { class: "v-data-table-footer__info" }, [S("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), S("div", { class: "v-data-table-footer__pagination" }, [g(Eu, q({ modelValue: l.value, "onUpdate:modelValue": (v) => l.value = v, density: "comfortable", firstAriaLabel: e.firstPageLabel, lastAriaLabel: e.lastPageLabel, length: o.value, nextAriaLabel: e.nextPageLabel, previousAriaLabel: e.prevPageLabel, rounded: true, showFirstLastPage: true, totalVisible: e.showCurrentPage ? 1 : 0, variant: "plain" }, ze(f, ["color"])), null)])]);
  }), {};
} }), ni = s1({ align: { type: String, default: "start" }, fixed: { type: [Boolean, String], default: false }, fixedOffset: [Number, String], fixedEndOffset: [Number, String], height: [Number, String], lastFixed: Boolean, firstFixedEnd: Boolean, noPadding: Boolean, indent: [Number, String], empty: Boolean, tag: String, width: [Number, String], maxWidth: [Number, String], nowrap: Boolean }, (e, t) => {
  let { slots: n } = t;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return g(a, { class: ne(["v-data-table__td", { "v-data-table-column--fixed": l === "start", "v-data-table-column--fixed-end": l === "end", "v-data-table-column--last-fixed": e.lastFixed, "v-data-table-column--first-fixed-end": e.firstFixedEnd, "v-data-table-column--no-padding": e.noPadding, "v-data-table-column--nowrap": e.nowrap, "v-data-table-column--empty": e.empty }, `v-data-table-column--align-${e.align}`]), style: { height: ve(e.height), width: ve(e.width), maxWidth: ve(e.maxWidth), left: l === "start" ? ve(e.fixedOffset || null) : void 0, right: l === "end" ? ve(e.fixedEndOffset || null) : void 0, paddingInlineStart: e.indent ? ve(e.indent) : void 0 } }, { default: () => {
    var _a2;
    return [(_a2 = n.default) == null ? void 0 : _a2.call(n)];
  } });
}), ET = j({ headers: Array }, "DataTable-header"), Db = Symbol.for("vuetify:data-table-headers"), Mb = { title: "", sortable: false }, BT = { ...Mb, width: 48 };
function $T() {
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
function Bu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children) t.push(e);
  else for (const n of e.children) Bu(n, t);
  return t;
}
function Eb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e) n.key && t.add(n.key), n.children && Eb(n.children, t);
  return t;
}
function RT(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Mb;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return BT;
  }
}
function Cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Cd(n, t + 1))) : t;
}
function FT(e) {
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
  for (let o = 0; o < e.length; o++) a = Bb(e[o], a);
  let l = 0;
  for (let o = e.length - 1; o >= 0; o--) l = $b(e[o], l);
}
function Bb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedOffset = t;
    for (const n of e.children) t = Bb(n, t);
  } else e.fixed && e.fixed !== "end" && (e.fixedOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function $b(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!e) return t;
  if (e.children) {
    e.fixedEndOffset = t;
    for (const n of e.children) t = $b(n, t);
  } else e.fixed === "end" && (e.fixedEndOffset = t, t += parseFloat(e.width || "0") || 0);
  return t;
}
function LT(e, t) {
  const n = [];
  let a = 0;
  const l = $T(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const { element: u, priority: c } = l.dequeue(), d = t - a - Cd(u);
      if (r.push({ ...u, rowspan: d ?? 1, colspan: u.children ? Bu(u).length : 1 }), u.children) for (const f of u.children) {
        const v = c % 1 + s / Math.pow(10, a + 2);
        l.enqueue(f, a + d + v);
      }
      s += 1, i -= 1;
    }
    a += 1, n.push(r);
  }
  return { columns: e.map((i) => Bu(i)).flat(), headers: n };
}
function Rb(e) {
  const t = [];
  for (const n of e) {
    const a = { ...RT(n), ...n }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = { ...a, key: l, value: o, sortable: a.sortable ?? (a.key != null || !!a.sort), children: a.children ? Rb(a.children) : void 0 };
    t.push(i);
  }
  return t;
}
function _d(e, t) {
  const n = O([]), a = O([]), l = O({}), o = O({}), i = O({});
  mt(() => {
    var _a2, _b2, _c2;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((m) => ({ key: m, title: Zn(m) }))).slice(), c = Eb(u);
    ((_a2 = t == null ? void 0 : t.groupBy) == null ? void 0 : _a2.value.length) && !c.has("data-table-group") && u.unshift({ key: "data-table-group", title: "Group" }), ((_b2 = t == null ? void 0 : t.showSelect) == null ? void 0 : _b2.value) && !c.has("data-table-select") && u.unshift({ key: "data-table-select" }), ((_c2 = t == null ? void 0 : t.showExpand) == null ? void 0 : _c2.value) && !c.has("data-table-expand") && u.push({ key: "data-table-expand" });
    const d = Rb(u);
    FT(d);
    const f = Math.max(...d.map((m) => Cd(m))) + 1, v = LT(d, f);
    n.value = v.headers, a.value = v.columns;
    const p = v.headers.flat(1);
    for (const m of p) m.key && (m.sortable && (m.sort && (l.value[m.key] = m.sort), m.sortRaw && (o.value[m.key] = m.sortRaw)), m.filter && (i.value[m.key] = m.filter));
  });
  const r = { headers: n, columns: a, sortFunctions: l, sortRawFunctions: o, filterFunctions: i };
  return ft(Db, r), r;
}
function rs() {
  const e = Ge(Db);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Fb = j({ color: String, disableSort: Boolean, fixedHeader: Boolean, multiSort: Boolean, initialSortOrder: String, sortIcon: { type: Ie }, sortAscIcon: { type: Ie, default: "$sortAsc" }, sortDescIcon: { type: Ie, default: "$sortDesc" }, headerProps: { type: Object }, sticky: Boolean, ...bt(), ...Sl(), ...zr() }, "VDataTableHeaders"), gl = ee()({ name: "VDataTableHeaders", props: Fb(), setup(e, t) {
  let { slots: n } = t;
  const { t: a } = ot(), { toggleSort: l, sortBy: o, isSorted: i } = Ab(), { someSelected: r, allSelected: s, selectAll: u, showSelectAll: c } = ls(), { columns: d, headers: f } = rs(), { loaderClasses: v } = mi(e);
  function p(T, P) {
    if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
    const M = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
    return { position: "sticky", left: M === "start" ? ve(T.fixedOffset) : void 0, right: M === "end" ? ve(T.fixedEndOffset) : void 0, top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0 };
  }
  function m(T, P) {
    T.key === "Enter" && !e.disableSort && l(P, T);
  }
  function h(T) {
    var _a2;
    switch ((_a2 = o.value.find((M) => M.key === T.key)) == null ? void 0 : _a2.order) {
      case "asc":
        return e.sortAscIcon;
      case "desc":
        return e.sortDescIcon;
      default:
        return e.sortIcon || (e.initialSortOrder === "asc" ? e.sortAscIcon : e.sortDescIcon);
    }
  }
  const { backgroundColorClasses: b, backgroundColorStyles: w } = Je(() => e.color), { displayClasses: I, mobile: V } = kn(e), k = _(() => ({ headers: f.value, columns: d.value, toggleSort: l, isSorted: i, sortBy: o.value, someSelected: r.value, allSelected: s.value, selectAll: u, getSortIcon: h })), y = _(() => ["v-data-table__th", { "v-data-table__th--sticky": e.sticky || e.fixedHeader }, I.value, v.value]), C = (T) => {
    let { column: P, x: M, y: D } = T;
    const E = P.key === "data-table-select" || P.key === "data-table-expand", A = P.key === "data-table-group" && P.width === 0 && !P.title, R = q(e.headerProps ?? {}, P.headerProps ?? {});
    return g(ni, q({ tag: "th", align: P.align, class: [{ "v-data-table__th--sortable": P.sortable && !e.disableSort, "v-data-table__th--sorted": i(P), "v-data-table__th--fixed": P.fixed }, ...y.value], style: { width: ve(P.width), minWidth: ve(P.minWidth), maxWidth: ve(P.maxWidth), ...p(P, D) }, colspan: P.colspan, rowspan: P.rowspan, fixed: P.fixed, nowrap: P.nowrap, lastFixed: P.lastFixed, firstFixedEnd: P.firstFixedEnd, noPadding: E, empty: A, tabindex: P.sortable ? 0 : void 0, onClick: P.sortable ? (G) => l(P, G) : void 0, onKeydown: P.sortable ? (G) => m(G, P) : void 0 }, R), { default: () => {
      var _a2;
      const G = `header.${P.key}`, N = { column: P, selectAll: u, isSorted: i, toggleSort: l, sortBy: o.value, someSelected: r.value, allSelected: s.value, getSortIcon: h };
      return n[G] ? n[G](N) : A ? "" : P.key === "data-table-select" ? ((_a2 = n["header.data-table-select"]) == null ? void 0 : _a2.call(n, N)) ?? (c.value && g(Fn, { color: e.color, density: e.density, modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": u }, null)) : S("div", { class: "v-data-table-header__content" }, [S("span", null, [P.title]), P.sortable && !e.disableSort && g(Xe, { key: "icon", class: "v-data-table-header__sort-icon", icon: h(P) }, null), e.multiSort && i(P) && S("div", { key: "badge", class: ne(["v-data-table-header__sort-badge", ...b.value]), style: me(w.value) }, [o.value.findIndex((Y) => Y.key === P.key) + 1])]);
    } });
  }, x = () => {
    const T = _(() => d.value.filter((M) => (M == null ? void 0 : M.sortable) && !e.disableSort)), P = d.value.find((M) => M.key === "data-table-select");
    return g(ni, q({ tag: "th", class: [...y.value], colspan: f.value.length + 1 }, e.headerProps), { default: () => [S("div", { class: "v-data-table-header__content" }, [g(cd, { chips: true, color: e.color, class: "v-data-table__td-sort-select", clearable: true, density: "default", items: T.value, label: a("$vuetify.dataTable.sortBy"), multiple: e.multiSort, variant: "underlined", "onClick:clear": () => o.value = [] }, { append: P ? () => g(Fn, { color: e.color, density: "compact", modelValue: s.value, indeterminate: r.value && !s.value, "onUpdate:modelValue": () => u(!s.value) }, null) : void 0, chip: (M) => {
      var _a2;
      return g(ha, { onClick: ((_a2 = M.item.raw) == null ? void 0 : _a2.sortable) ? () => l(M.item.raw) : void 0, onMousedown: (D) => {
        D.preventDefault(), D.stopPropagation();
      } }, { default: () => [M.item.title, g(Xe, { class: ne(["v-data-table__td-sort-icon", i(M.item.raw) && "v-data-table__td-sort-icon-active"]), icon: h(M.item.raw), size: "small" }, null)] });
    } })])] });
  };
  ae(() => V.value ? S("tr", null, [g(x, null, null)]) : S(be, null, [n.headers ? n.headers(k.value) : f.value.map((T, P) => S("tr", null, [T.map((M, D) => g(C, { column: M, x: D, y: P }, null))])), e.loading && S("tr", { class: "v-data-table-progress" }, [S("th", { colspan: d.value.length }, [g(gi, { name: "v-data-table-progress", absolute: true, active: true, color: typeof e.loading == "boolean" || e.loading === "true" ? e.color : e.loading, indeterminate: true }, { default: n.loader })])])]));
} }), Lb = j({ item: { type: Object, required: true }, groupCollapseIcon: { type: Ie, default: "$tableGroupCollapse" }, groupExpandIcon: { type: Ie, default: "$tableGroupExpand" }, ...bt() }, "VDataTableGroupHeaderRow"), OT = ee()({ name: "VDataTableGroupHeaderRow", props: Lb(), setup(e, t) {
  let { slots: n } = t;
  const { isGroupOpen: a, toggleGroup: l, extractRows: o } = Sb(), { isSelected: i, isSomeSelected: r, select: s } = ls(), { columns: u } = rs(), c = _(() => o([e.item])), d = B(() => u.value.length - (u.value.some((f) => f.key === "data-table-select") ? 1 : 0));
  return () => S("tr", { class: "v-data-table-group-header-row", style: { "--v-data-table-group-header-row-depth": e.item.depth } }, [u.value.map((f) => {
    var _a2, _b2;
    if (f.key === "data-table-group") {
      const v = a(e.item) ? e.groupCollapseIcon : e.groupExpandIcon, p = () => l(e.item);
      return ((_a2 = n["data-table-group"]) == null ? void 0 : _a2.call(n, { item: e.item, count: c.value.length, props: { icon: v, onClick: p } })) ?? g(ni, { class: "v-data-table-group-header-row__column", colspan: d.value }, { default: () => [g(Ue, { size: "small", variant: "text", icon: v, onClick: p }, null), S("span", null, [e.item.value]), S("span", null, [Oe("("), c.value.length, Oe(")")])] });
    } else if (f.key === "data-table-select") {
      const v = c.value.filter((b) => b.selectable), p = v.length > 0 && i(v), m = r(v) && !p, h = (b) => s(v, b);
      return ((_b2 = n["data-table-select"]) == null ? void 0 : _b2.call(n, { props: { modelValue: p, indeterminate: m, "onUpdate:modelValue": h } })) ?? g(ni, { class: "v-data-table__td--select-row", noPadding: true }, { default: () => [g(Fn, { density: e.density, disabled: v.length === 0, modelValue: p, indeterminate: m, "onUpdate:modelValue": h }, null)] });
    }
    return "";
  })]);
} }), Ob = j({ color: String, index: Number, item: Object, cellProps: [Object, Function], collapseIcon: { type: Ie, default: "$collapse" }, expandIcon: { type: Ie, default: "$expand" }, onClick: Ft(), onContextmenu: Ft(), onDblclick: Ft(), ...bt(), ...Sl() }, "VDataTableRow"), Vd = ee()({ name: "VDataTableRow", props: Ob(), setup(e, t) {
  let { slots: n } = t;
  const { displayClasses: a, mobile: l } = kn(e, "v-data-table__tr"), { isSelected: o, toggleSelect: i, someSelected: r, allSelected: s, selectAll: u } = ls(), { isExpanded: c, toggleExpand: d } = bb(), { toggleSort: f, sortBy: v, isSorted: p } = Ab(), { columns: m } = rs();
  ae(() => S("tr", { class: ne(["v-data-table__tr", { "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick) }, a.value]), onClick: e.onClick, onContextmenu: e.onContextmenu, onDblclick: e.onDblclick }, [e.item && m.value.map((h, b) => {
    const w = e.item, I = `item.${h.key}`, V = `header.${h.key}`, k = { index: e.index, item: w.raw, internalItem: w, value: cl(w.columns, h.key), column: h, isSelected: o, toggleSelect: i, isExpanded: c, toggleExpand: d }, y = { column: h, selectAll: u, isSorted: p, toggleSort: f, sortBy: v.value, someSelected: r.value, allSelected: s.value, getSortIcon: () => "" }, C = typeof e.cellProps == "function" ? e.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value, column: h }) : e.cellProps, x = typeof h.cellProps == "function" ? h.cellProps({ index: k.index, item: k.item, internalItem: k.internalItem, value: k.value }) : h.cellProps, T = h.key === "data-table-select" || h.key === "data-table-expand", P = h.key === "data-table-group" && h.width === 0 && !h.title;
    return g(ni, q({ align: h.align, indent: h.indent, class: { "v-data-table__td--expanded-row": h.key === "data-table-expand", "v-data-table__td--select-row": h.key === "data-table-select" }, fixed: h.fixed, fixedOffset: h.fixedOffset, fixedEndOffset: h.fixedEndOffset, lastFixed: h.lastFixed, firstFixedEnd: h.firstFixedEnd, maxWidth: l.value ? void 0 : h.maxWidth, noPadding: T, empty: P, nowrap: h.nowrap, width: l.value ? void 0 : h.width }, C, x), { default: () => {
      var _a2, _b2, _c2, _d2;
      if (h.key === "data-table-select") return ((_a2 = n["item.data-table-select"]) == null ? void 0 : _a2.call(n, { ...k, props: { color: e.color, disabled: !w.selectable, modelValue: o([w]), onClick: Ii(() => i(w), ["stop"]) } })) ?? g(Fn, { color: e.color, disabled: !w.selectable, density: e.density, modelValue: o([w]), onClick: Ii((D) => i(w, e.index, D), ["stop"]) }, null);
      if (h.key === "data-table-expand") return ((_b2 = n["item.data-table-expand"]) == null ? void 0 : _b2.call(n, { ...k, props: { icon: c(w) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Ii(() => d(w), ["stop"]) } })) ?? g(Ue, { icon: c(w) ? e.collapseIcon : e.expandIcon, size: "small", variant: "text", onClick: Ii(() => d(w), ["stop"]) }, null);
      if (n[I] && !l.value) return n[I](k);
      const M = Te(k.value);
      return l.value ? S(be, null, [S("div", { class: "v-data-table__td-title" }, [((_c2 = n[V]) == null ? void 0 : _c2.call(n, y)) ?? h.title]), S("div", { class: "v-data-table__td-value" }, [((_d2 = n[I]) == null ? void 0 : _d2.call(n, k)) ?? M])]) : M;
    } });
  })]));
} }), Nb = j({ color: String, loading: [Boolean, String], loadingText: { type: String, default: "$vuetify.dataIterator.loadingText" }, hideNoData: Boolean, items: { type: Array, default: () => [] }, noDataText: { type: String, default: "$vuetify.noDataText" }, rowProps: [Object, Function], cellProps: [Object, Function], ...on(Ob(), ["collapseIcon", "expandIcon", "density"]), ...on(Lb(), ["groupCollapseIcon", "groupExpandIcon", "density"]), ...Sl() }, "VDataTableRows"), hl = ee()({ name: "VDataTableRows", inheritAttrs: false, props: Nb(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { columns: l } = rs(), { expandOnClick: o, toggleExpand: i, isExpanded: r } = bb(), { isSelected: s, toggleSelect: u } = ls(), { toggleGroup: c, isGroupOpen: d } = Sb(), { t: f } = ot(), { mobile: v } = kn(e);
  return ae(() => {
    var _a2, _b2;
    const p = on(e, ["groupCollapseIcon", "groupExpandIcon", "density"]);
    return e.loading && (!e.items.length || a.loading) ? S("tr", { class: "v-data-table-rows-loading", key: "loading" }, [S("td", { colspan: l.value.length }, [((_a2 = a.loading) == null ? void 0 : _a2.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? S("tr", { class: "v-data-table-rows-no-data", key: "no-data" }, [S("td", { colspan: l.value.length }, [((_b2 = a["no-data"]) == null ? void 0 : _b2.call(a)) ?? f(e.noDataText)])]) : S(be, null, [e.items.map((m, h) => {
      var _a3, _b3;
      if (m.type === "group") {
        const I = { index: h, item: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u, toggleGroup: c, isGroupOpen: d };
        return a["group-header"] ? a["group-header"](I) : g(OT, q({ key: `group-header_${m.id}`, item: m }, bn(n, ":groupHeader", () => I), p), a);
      }
      if (m.type === "group-summary") {
        const I = { index: h, item: m, columns: l.value, toggleGroup: c };
        return ((_a3 = a["group-summary"]) == null ? void 0 : _a3.call(a, I)) ?? "";
      }
      const b = { index: m.virtualIndex ?? h, item: m.raw, internalItem: m, columns: l.value, isExpanded: r, toggleExpand: i, isSelected: s, toggleSelect: u }, w = { ...b, props: q({ key: `item_${m.key ?? m.index}`, onClick: o.value ? () => {
        i(m);
      } : void 0, index: h, item: m, color: e.color, cellProps: e.cellProps, collapseIcon: e.collapseIcon, expandIcon: e.expandIcon, density: e.density, mobile: v.value }, bn(n, ":row", () => b), typeof e.rowProps == "function" ? e.rowProps({ item: b.item, index: b.index, internalItem: b.internalItem }) : e.rowProps) };
      return S(be, { key: w.props.key }, [a.item ? a.item(w) : g(Vd, w.props, a), r(m) && ((_b3 = a["expanded-row"]) == null ? void 0 : _b3.call(a, b))]);
    })]);
  }), {};
} }), Hb = j({ fixedHeader: Boolean, fixedFooter: Boolean, height: [Number, String], hover: Boolean, striped: { type: String, default: null, validator: (e) => ["even", "odd"].includes(e) }, ...xe(), ...bt(), ...Re(), ...Ye() }, "VTable"), yl = ee()({ name: "VTable", props: Hb(), setup(e, t) {
  let { slots: n, emit: a } = t;
  const { themeClasses: l } = qe(e), { densityClasses: o } = Nt(e);
  return ae(() => g(e.tag, { class: ne(["v-table", { "v-table--fixed-height": !!e.height, "v-table--fixed-header": e.fixedHeader, "v-table--fixed-footer": e.fixedFooter, "v-table--has-top": !!n.top, "v-table--has-bottom": !!n.bottom, "v-table--hover": e.hover, "v-table--striped-even": e.striped === "even", "v-table--striped-odd": e.striped === "odd" }, l.value, o.value, e.class]), style: me(e.style) }, { default: () => {
    var _a2, _b2, _c2;
    return [(_a2 = n.top) == null ? void 0 : _a2.call(n), n.default ? S("div", { class: "v-table__wrapper", style: { height: ve(e.height) } }, [S("table", null, [n.default()])]) : (_b2 = n.wrapper) == null ? void 0 : _b2.call(n), (_c2 = n.bottom) == null ? void 0 : _c2.call(n)];
  } })), {};
} }), NT = j({ items: { type: Array, default: () => [] }, itemValue: { type: [String, Array, Function], default: "id" }, itemSelectable: { type: [String, Array, Function], default: null }, rowProps: [Object, Function], cellProps: [Object, Function], returnObject: Boolean }, "DataTable-items");
function HT(e, t, n, a) {
  const l = e.returnObject ? t : xt(t, e.itemValue), o = xt(t, e.itemSelectable, true), i = a.reduce((r, s) => (s.key != null && (r[s.key] = xt(t, s.value)), r), {});
  return { type: "item", key: e.returnObject ? xt(t, e.itemValue) : l, index: n, value: l, selectable: o, columns: i, raw: t };
}
function zT(e, t, n) {
  return t.map((a, l) => HT(e, a, l, n));
}
function Id(e, t) {
  return { items: _(() => zT(e, e.items, t.value)) };
}
const Pd = j({ ...Nb(), hideDefaultBody: Boolean, hideDefaultFooter: Boolean, hideDefaultHeader: Boolean, width: [String, Number], search: String, ...hb(), ...yd(), ...ET(), ...NT(), ...Vb(), ...Pb(), ...ze(Fb(), ["multiSort", "initialSortOrder"]), ...Hb() }, "DataTable"), WT = j({ ...pd(), ...Pd(), ...Il(), ...wd() }, "VDataTable"), jT = ee()({ name: "VDataTable", props: WT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true, "update:currentItems": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = bd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = os(e), { page: u, itemsPerPage: c } = Sd(e), { disableSort: d } = ao(e), { columns: f, headers: v, sortFunctions: p, sortRawFunctions: m, filterFunctions: h } = _d(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: b } = Id(e, f), w = B(() => e.search), { filteredItems: I } = Pl(e, b, w, { transform: (ie) => ie.columns, customKeyFilter: h }), { toggleSort: V } = is({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { sortByWithGroups: k, opened: y, extractRows: C, isGroupOpen: x, toggleGroup: T } = es({ groupBy: l, sortBy: i, disableSort: d }), { sortedItems: P } = kd(e, I, k, { transform: (ie) => ({ ...ie.raw, ...ie.columns }), sortFunctions: p, sortRawFunctions: m }), M = _(() => e.pageBy === "auto" ? e.groupBy.length ? "group" : "item" : e.pageBy), { pageCount: D, setItemsPerPage: E, paginatedItems: A } = ST({ pageBy: M, sortedItems: P, paginate: (ie) => {
    const Se = _(() => st(ie).length), { startIndex: K, stopIndex: fe, pageCount: De, setItemsPerPage: _e } = xd({ page: u, itemsPerPage: c, itemsLength: Se }), { paginatedItems: ye } = Cb({ items: ie, startIndex: K, stopIndex: fe, itemsPerPage: c });
    return { paginatedItems: ye, pageCount: De, setItemsPerPage: _e };
  }, group: (ie) => ts(ie, l, y, () => !!a["group-summary"]) }), R = _(() => C(A.value)), { isSelected: G, select: N, selectAll: Y, toggleSelect: H, someSelected: F, allSelected: Z } = as(e, { allItems: b, currentPage: R }), { isExpanded: W, toggleExpand: L } = Qr(e);
  ns({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: w }), yt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const U = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: D.value, toggleSort: V, setItemsPerPage: E, someSelected: F.value, allSelected: Z.value, isSelected: G, select: N, selectAll: Y, toggleSelect: H, isExpanded: W, toggleExpand: L, isGroupOpen: x, toggleGroup: T, items: R.value.map((ie) => ie.raw), internalItems: R.value, groupedItems: A.value, columns: f.value, headers: v.value }));
  return ae(() => {
    const ie = ti.filterProps(e), Se = gl.filterProps(ze(e, ["multiSort"])), K = hl.filterProps(e), fe = yl.filterProps(e);
    return g(yl, q({ class: ["v-data-table", { "v-data-table--show-select": e.showSelect, "v-data-table--loading": e.loading }, e.class], style: e.style }, fe, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a2;
      return (_a2 = a.top) == null ? void 0 : _a2.call(a, U.value);
    }, default: () => {
      var _a2, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(U.value) : S(be, null, [(_a2 = a.colgroup) == null ? void 0 : _a2.call(a, U.value), !e.hideDefaultHeader && S("thead", { key: "thead" }, [g(gl, q(Se, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, U.value), !e.hideDefaultBody && S("tbody", null, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, U.value), a.body ? a.body(U.value) : g(hl, q(n, K, { items: A.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, U.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, U.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, U.value)]);
    }, bottom: () => a.bottom ? a.bottom(U.value) : !e.hideDefaultFooter && S(be, null, [g(pn, null, null), g(ti, ie, { prepend: a["footer.prepend"] })]) });
  }), {};
} }), UT = j({ ...ze(Pd(), ["hideDefaultFooter"]), ...yd(), ...Ty(), ...Il() }, "VDataTableVirtual"), GT = ee()({ name: "VDataTableVirtual", props: UT(), emits: { "update:modelValue": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:groupBy": (e) => true, "update:expanded": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = bd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = os(e), { disableSort: u } = ao(e), { columns: c, headers: d, filterFunctions: f, sortFunctions: v, sortRawFunctions: p } = _d(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = Id(e, c), h = B(() => e.search), { filteredItems: b } = Pl(e, m, h, { transform: (ye) => ye.columns, customKeyFilter: f }), { toggleSort: w } = is({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s }), { sortByWithGroups: I, opened: V, extractRows: k, isGroupOpen: y, toggleGroup: C } = es({ groupBy: l, sortBy: i, disableSort: u }), { sortedItems: x } = kd(e, b, I, { transform: (ye) => ({ ...ye.raw, ...ye.columns }), sortFunctions: v, sortRawFunctions: p }), { flatItems: T } = ts(x, l, V, () => !!a["group-summary"]), P = _(() => k(T.value)), { isSelected: M, select: D, selectAll: E, toggleSelect: A, someSelected: R, allSelected: G } = as(e, { allItems: P, currentPage: P }), { isExpanded: N, toggleExpand: Y } = Qr(e), { containerRef: H, markerRef: F, paddingTop: Z, paddingBottom: W, computedItems: L, handleItemResize: U, handleScroll: ie, handleScrollend: Se, calculateVisibleItems: K, scrollToIndex: fe } = Ay(e, T), De = _(() => L.value.map((ye) => ({ ...ye.raw, virtualIndex: ye.index })));
  ns({ sortBy: i, page: re(1), itemsPerPage: re(-1), groupBy: l, search: h }), yt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const _e = _(() => ({ sortBy: i.value, toggleSort: w, someSelected: R.value, allSelected: G.value, isSelected: M, select: D, selectAll: E, toggleSelect: A, isExpanded: N, toggleExpand: Y, isGroupOpen: y, toggleGroup: C, items: P.value.map((ye) => ye.raw), internalItems: P.value, groupedItems: T.value, columns: c.value, headers: d.value }));
  return ae(() => {
    const ye = gl.filterProps(ze(e, ["multiSort"])), $ = hl.filterProps(e), z = yl.filterProps(e);
    return g(yl, q({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, z, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a2;
      return (_a2 = a.top) == null ? void 0 : _a2.call(a, _e.value);
    }, wrapper: () => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      return S("div", { ref: H, onScrollPassive: ie, onScrollend: Se, class: "v-table__wrapper", style: { height: ve(e.height) } }, [S("table", null, [(_a2 = a.colgroup) == null ? void 0 : _a2.call(a, _e.value), !e.hideDefaultHeader && S("thead", { key: "thead" }, [g(gl, q(ye, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, _e.value), !e.hideDefaultBody && S("tbody", { key: "tbody" }, [S("tr", { ref: F, style: { height: ve(Z.value), border: 0 } }, [S("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)]), (_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, _e.value), g(hl, q(n, $, { items: De.value }), { ...a, item: (Q) => g(Py, { key: Q.internalItem.index, renderless: true, "onUpdate:height": (ce) => U(Q.internalItem.index, ce) }, { default: (ce) => {
        var _a3;
        let { itemRef: oe } = ce;
        return ((_a3 = a.item) == null ? void 0 : _a3.call(a, { ...Q, itemRef: oe })) ?? g(Vd, q(Q.props, { ref: oe, key: Q.internalItem.index, index: Q.index }), a);
      } }) }), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, _e.value), S("tr", { style: { height: ve(W.value), border: 0 } }, [S("td", { colspan: c.value.length, style: { height: 0, border: 0 } }, null)])]), (_e2 = a.tbody) == null ? void 0 : _e2.call(a, _e.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, _e.value)])]);
    }, bottom: () => {
      var _a2;
      return (_a2 = a.bottom) == null ? void 0 : _a2.call(a, _e.value);
    } });
  }), { calculateVisibleItems: K, scrollToIndex: fe };
} }), YT = j({ itemsLength: { type: [Number, String], required: true }, ...pd(), ...Pd(), ...wd() }, "VDataTableServer"), KT = ee()({ name: "VDataTableServer", props: YT(), emits: { "update:modelValue": (e) => true, "update:page": (e) => true, "update:itemsPerPage": (e) => true, "update:sortBy": (e) => true, "update:options": (e) => true, "update:expanded": (e) => true, "update:groupBy": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { groupBy: l } = bd(e), { initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s } = os(e), { page: u, itemsPerPage: c } = Sd(e), { disableSort: d } = ao(e), f = _(() => parseInt(e.itemsLength, 10)), { columns: v, headers: p } = _d(e, { groupBy: l, showSelect: B(() => e.showSelect), showExpand: B(() => e.showExpand) }), { items: m } = Id(e, v), { toggleSort: h } = is({ initialSortOrder: o, sortBy: i, multiSort: r, mustSort: s, page: u }), { opened: b, isGroupOpen: w, toggleGroup: I, extractRows: V } = es({ groupBy: l, sortBy: i, disableSort: d }), { pageCount: k, setItemsPerPage: y } = xd({ page: u, itemsPerPage: c, itemsLength: f }), { flatItems: C } = ts(m, l, b, () => !!a["group-summary"]), { isSelected: x, select: T, selectAll: P, toggleSelect: M, someSelected: D, allSelected: E } = as(e, { allItems: m, currentPage: m }), { isExpanded: A, toggleExpand: R } = Qr(e), G = _(() => V(m.value));
  ns({ page: u, itemsPerPage: c, sortBy: i, groupBy: l, search: B(() => e.search) }), ft("v-data-table", { toggleSort: h, sortBy: i }), yt({ VDataTableRows: { hideNoData: B(() => e.hideNoData), noDataText: B(() => e.noDataText), loading: B(() => e.loading), loadingText: B(() => e.loadingText) } });
  const N = _(() => ({ page: u.value, itemsPerPage: c.value, sortBy: i.value, pageCount: k.value, toggleSort: h, setItemsPerPage: y, someSelected: D.value, allSelected: E.value, isSelected: x, select: T, selectAll: P, toggleSelect: M, isExpanded: A, toggleExpand: R, isGroupOpen: w, toggleGroup: I, items: G.value.map((Y) => Y.raw), internalItems: G.value, groupedItems: C.value, columns: v.value, headers: p.value }));
  ae(() => {
    const Y = ti.filterProps(e), H = gl.filterProps(ze(e, ["multiSort"])), F = hl.filterProps(e), Z = yl.filterProps(e);
    return g(yl, q({ class: ["v-data-table", { "v-data-table--loading": e.loading }, e.class], style: e.style }, Z, { fixedHeader: e.fixedHeader || e.sticky }), { top: () => {
      var _a2;
      return (_a2 = a.top) == null ? void 0 : _a2.call(a, N.value);
    }, default: () => {
      var _a2, _b2, _c2, _d2, _e, _f2;
      return a.default ? a.default(N.value) : S(be, null, [(_a2 = a.colgroup) == null ? void 0 : _a2.call(a, N.value), !e.hideDefaultHeader && S("thead", { key: "thead", class: "v-data-table__thead", role: "rowgroup" }, [g(gl, q(H, { multiSort: !!e.multiSort }), a)]), (_b2 = a.thead) == null ? void 0 : _b2.call(a, N.value), !e.hideDefaultBody && S("tbody", { class: "v-data-table__tbody", role: "rowgroup" }, [(_c2 = a["body.prepend"]) == null ? void 0 : _c2.call(a, N.value), a.body ? a.body(N.value) : g(hl, q(n, F, { items: C.value }), a), (_d2 = a["body.append"]) == null ? void 0 : _d2.call(a, N.value)]), (_e = a.tbody) == null ? void 0 : _e.call(a, N.value), (_f2 = a.tfoot) == null ? void 0 : _f2.call(a, N.value)]);
    }, bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && S(be, null, [g(pn, null, null), g(ti, Y, { prepend: a["footer.prepend"] })]) });
  });
} }), XT = j({ fluid: { type: Boolean, default: false }, ...xe(), ...Ct(), ...Re() }, "VContainer"), qT = ee()({ name: "VContainer", props: XT(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = Pt(), { dimensionStyles: l } = _t(e);
  return ae(() => g(e.tag, { class: ne(["v-container", { "v-container--fluid": e.fluid }, a.value, e.class]), style: me([l.value, e.style]) }, n)), {};
} }), zb = Fr.reduce((e, t) => (e[t] = { type: [Boolean, String, Number], default: false }, e), {}), Wb = Fr.reduce((e, t) => {
  const n = "offset" + Zn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), jb = Fr.reduce((e, t) => {
  const n = "order" + Zn(t);
  return e[n] = { type: [String, Number], default: null }, e;
}, {}), zv = { col: Object.keys(zb), offset: Object.keys(Wb), order: Object.keys(jb) };
function ZT(e, t, n) {
  let a = e;
  if (!(n == null || n === false)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === true) || (a += `-${n}`), a.toLowerCase();
  }
}
const JT = ["auto", "start", "end", "center", "baseline", "stretch"], QT = j({ cols: { type: [Boolean, String, Number], default: false }, ...zb, offset: { type: [String, Number], default: null }, ...Wb, order: { type: [String, Number], default: null }, ...jb, alignSelf: { type: String, default: null, validator: (e) => JT.includes(e) }, ...xe(), ...Re() }, "VCol"), eA = ee()({ name: "VCol", props: QT(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in zv) zv[o].forEach((r) => {
      const s = e[r], u = ZT(o, r, s);
      u && l.push(u);
    });
    const i = l.some((r) => r.startsWith("v-col-"));
    return l.push({ "v-col": !i || !e.cols, [`v-col-${e.cols}`]: e.cols, [`offset-${e.offset}`]: e.offset, [`order-${e.order}`]: e.order, [`align-self-${e.alignSelf}`]: e.alignSelf }), l;
  });
  return () => {
    var _a2;
    return ba(e.tag, { class: [a.value, e.class], style: e.style }, (_a2 = n.default) == null ? void 0 : _a2.call(n));
  };
} }), Td = ["start", "end", "center"], Ub = ["space-between", "space-around", "space-evenly"];
function Ad(e, t) {
  return Fr.reduce((n, a) => {
    const l = e + Zn(a);
    return n[l] = t(), n;
  }, {});
}
const tA = [...Td, "baseline", "stretch"], Gb = (e) => tA.includes(e), Yb = Ad("align", () => ({ type: String, default: null, validator: Gb })), nA = [...Td, ...Ub], Kb = (e) => nA.includes(e), Xb = Ad("justify", () => ({ type: String, default: null, validator: Kb })), aA = [...Td, ...Ub, "stretch"], qb = (e) => aA.includes(e), Zb = Ad("alignContent", () => ({ type: String, default: null, validator: qb })), Wv = { align: Object.keys(Yb), justify: Object.keys(Xb), alignContent: Object.keys(Zb) }, lA = { align: "align", justify: "justify", alignContent: "align-content" };
function oA(e, t, n) {
  let a = lA[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const iA = j({ dense: Boolean, noGutters: Boolean, align: { type: String, default: null, validator: Gb }, ...Yb, justify: { type: String, default: null, validator: Kb }, ...Xb, alignContent: { type: String, default: null, validator: qb }, ...Zb, ...xe(), ...Re() }, "VRow"), rA = ee()({ name: "VRow", props: iA(), setup(e, t) {
  let { slots: n } = t;
  const a = _(() => {
    const l = [];
    let o;
    for (o in Wv) Wv[o].forEach((i) => {
      const r = e[i], s = oA(o, i, r);
      s && l.push(s);
    });
    return l.push({ "v-row--no-gutters": e.noGutters, "v-row--dense": e.dense, [`align-${e.align}`]: e.align, [`justify-${e.justify}`]: e.justify, [`align-content-${e.alignContent}`]: e.alignContent }), l;
  });
  return () => {
    var _a2;
    return ba(e.tag, { class: ["v-row", a.value, e.class], style: e.style }, (_a2 = n.default) == null ? void 0 : _a2.call(n));
  };
} }), $u = pa("v-spacer", "div", "VSpacer"), Jb = j({ active: { type: [String, Array], default: void 0 }, controlHeight: [Number, String], controlVariant: { type: String, default: "docked" }, noMonthPicker: Boolean, disabled: { type: [Boolean, String, Array], default: null }, nextIcon: { type: Ie, default: "$next" }, prevIcon: { type: Ie, default: "$prev" }, modeIcon: { type: Ie, default: "$subgroup" }, text: String, monthText: String, yearText: String, viewMode: { type: String, default: "month" } }, "VDatePickerControls"), Ru = ee()({ name: "VDatePickerControls", props: Jb(), emits: { "click:year": () => true, "click:month": () => true, "click:prev": () => true, "click:next": () => true, "click:prev-year": () => true, "click:next-year": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = ot(), o = _(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), i = _(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), r = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-month") : !!e.disabled), s = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-month") : !!e.disabled), u = _(() => Array.isArray(e.disabled) ? e.disabled.includes("prev-year") : !!e.disabled), c = _(() => Array.isArray(e.disabled) ? e.disabled.includes("next-year") : !!e.disabled);
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
  return ae(() => {
    const b = { VBtn: { density: "comfortable", variant: "text" } }, w = g(Ue, { "data-testid": "prev-month", disabled: r.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousMonth"), onClick: d }, null), I = g(Ue, { "data-testid": "next-month", disabled: s.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextMonth"), onClick: f }, null), V = g(Ue, { "data-testid": "prev-year", disabled: u.value, icon: e.prevIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.previousYear"), onClick: v }, null), k = g(Ue, { "data-testid": "next-year", disabled: c.value, icon: e.nextIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.nextYear"), onClick: p }, null), y = g(Ue, { class: "v-date-picker-controls__only-month-btn", "data-testid": "month-btn", density: "default", disabled: o.value, text: e.monthText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: h }, null), C = g(Ue, { class: "v-date-picker-controls__only-year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.yearText, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), x = g(Ue, { class: "v-date-picker-controls__year-btn", "data-testid": "year-btn", density: "default", disabled: i.value, text: e.text, appendIcon: e.modeIcon, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null), T = S(be, null, [g(Ue, { class: "v-date-picker-controls__month-btn", "data-testid": "month-btn", height: "36", disabled: o.value, text: e.text, rounded: true, "aria-label": l("$vuetify.datePicker.ariaLabel.selectMonth"), onClick: h }, null), g(Ue, { class: "v-date-picker-controls__mode-btn", "data-testid": "year-btn", disabled: i.value, icon: e.modeIcon, "aria-label": l("$vuetify.datePicker.ariaLabel.selectYear"), onClick: m }, null)]), P = { viewMode: e.viewMode, disabled: Array.isArray(e.disabled) ? e.disabled : [], monthYearText: e.text ?? "", monthText: e.monthText ?? "", yearText: e.yearText ?? "", openMonths: h, openYears: m, prevMonth: d, nextMonth: f, prevYear: v, nextYear: p }, M = S(be, null, [e.noMonthPicker ? x : T, g($u, null, null), S("div", { class: "v-date-picker-controls__month" }, [w, I])]), D = S(be, null, [S("div", { class: "v-date-picker-controls__month" }, [w, y, I]), g($u, null, null), S("div", { class: "v-date-picker-controls__year" }, [V, C, k])]);
    return g(Fe, { defaults: b }, { default: () => {
      var _a2;
      return [S("div", { class: ne(["v-date-picker-controls", `v-date-picker-controls--variant-${e.controlVariant}`]), style: { "--v-date-picker-controls-height": ve(e.controlHeight) } }, [((_a2 = a.default) == null ? void 0 : _a2.call(a, P)) ?? S(be, null, [e.controlVariant === "modal" && M, e.controlVariant === "docked" && D])])];
    } });
  }), {};
} }), sA = j({ appendIcon: Ie, color: String, header: String, transition: String, onClick: Ft() }, "VDatePickerHeader"), Fu = ee()({ name: "VDatePickerHeader", props: sA(), emits: { click: () => true, "click:append": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.color);
  function i() {
    n("click");
  }
  function r() {
    n("click:append");
  }
  return ae(() => {
    const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
    return S("div", { class: ne(["v-date-picker-header", { "v-date-picker-header--clickable": !!e.onClick }, l.value]), style: me(o.value), onClick: i }, [a.prepend && S("div", { key: "prepend", class: "v-date-picker-header__prepend" }, [a.prepend()]), s && g(Qt, { key: "content", name: e.transition }, { default: () => {
      var _a2;
      return [S("div", { key: e.header, class: "v-date-picker-header__content" }, [((_a2 = a.default) == null ? void 0 : _a2.call(a)) ?? e.header])];
    } }), u && S("div", { class: "v-date-picker-header__append" }, [a.append ? g(Fe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VBtn: { icon: e.appendIcon, variant: "text" } } }, { default: () => {
      var _a2;
      return [(_a2 = a.append) == null ? void 0 : _a2.call(a)];
    } }) : g(Ue, { key: "append-btn", icon: e.appendIcon, variant: "text", onClick: r }, null)])]);
  }), {};
} }), uA = j({ allowedDates: [Array, Function], disabled: { type: Boolean, default: null }, displayValue: null, modelValue: Array, month: [Number, String], max: null, min: null, showAdjacentMonths: Boolean, year: [Number, String], weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] }, weeksInMonth: { type: String, default: "dynamic" }, firstDayOfWeek: { type: [Number, String], default: void 0 }, firstDayOfYear: { type: [Number, String], default: void 0 }, weekdayFormat: String }, "calendar");
function cA(e) {
  const t = pl(), n = Ce(e, "modelValue", [], (m) => ct(m).map((h) => t.date(h))), a = _(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = Ce(e, "year", void 0, (m) => {
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
      const w = h[h.length - 1];
      let I = [];
      for (let V = 1; V <= b - h.length; V++) I.push(t.addDays(w, V)), V % 7 === 0 && (m.push(I), I = []);
    }
    return m;
  });
  function s(m, h) {
    return m.filter((b) => e.weekdays.includes(t.toJsDate(b).getDay())).map((b, w) => {
      const I = t.toISO(b), V = !t.isSameMonth(b, o.value), k = t.isSameDay(b, t.startOfMonth(o.value)), y = t.isSameDay(b, t.endOfMonth(o.value)), C = t.isSameDay(b, o.value), x = e.weekdays.length;
      return { date: b, formatted: t.format(b, "keyboardDate"), isAdjacent: V, isDisabled: p(b), isEnd: y, isHidden: V && !e.showAdjacentMonths, isSame: C, isSelected: n.value.some((T) => t.isSameDay(b, T)), isStart: k, isToday: t.isSameDay(b, h), isWeekEnd: w % x === x - 1, isWeekStart: w % x === 0, isoDate: I, localized: t.format(b, "dayOfMonth"), month: t.getMonth(b), year: t.getYear(b) };
    });
  }
  const u = _(() => {
    const m = t.startOfWeek(a.value, e.firstDayOfWeek), h = [];
    for (let w = 0; w <= 6; w++) h.push(t.addDays(m, w));
    const b = t.date();
    return s(h, b);
  }), c = _(() => {
    const m = r.value.flat(), h = t.date();
    return s(m, h);
  }), d = _(() => r.value.map((m) => m.length ? t.getWeek(m[0], e.firstDayOfWeek, e.firstDayOfYear) : null)), { minDate: f, maxDate: v } = Qb(e);
  function p(m) {
    if (e.disabled) return true;
    const h = t.date(m);
    return f.value && t.isBefore(t.endOfDay(h), f.value) || v.value && t.isAfter(h, v.value) ? true : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((b) => t.isSameDay(t.date(b), h)) : typeof e.allowedDates == "function" ? !e.allowedDates(h) : false;
  }
  return { displayValue: a, daysInMonth: c, daysInWeek: u, genDays: s, model: n, weeksInMonth: r, weekdayLabels: i, weekNumbers: d };
}
function Qb(e) {
  const t = pl(), n = _(() => {
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
const ep = j({ color: String, hideWeekdays: Boolean, multiple: [Boolean, Number, String], showWeek: Boolean, readonly: Boolean, transition: { type: String, default: "picker-transition" }, reverseTransition: { type: String, default: "picker-reverse-transition" }, events: { type: [Array, Function, Object], default: () => null }, eventColor: { type: [Array, Function, Object, String], default: () => null }, ...ze(uA(), ["displayValue"]) }, "VDatePickerMonth"), Lu = ee()({ name: "VDatePickerMonth", props: ep(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = O(), { t: o } = ot(), { daysInMonth: i, model: r, weekNumbers: s, weekdayLabels: u } = cA(e), c = pl(), d = re(), f = re(), v = re(false), p = B(() => v.value ? e.reverseTransition : e.transition);
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
      r.value = fC(c, d.value, f.value);
    }
  }
  function b(y) {
    const C = c.format(y.date, "fullDateWithWeekday"), x = y.isToday ? "currentDate" : "selectDate";
    return o(`$vuetify.datePicker.ariaLabel.${x}`, C);
  }
  function w(y) {
    const C = r.value.findIndex((x) => c.isSameDay(x, y));
    if (C === -1) r.value = [...r.value, y];
    else {
      const x = [...r.value];
      x.splice(C, 1), r.value = x;
    }
  }
  function I(y) {
    e.multiple === "range" ? h(y) : e.multiple ? w(y) : r.value = [y];
  }
  function V(y) {
    const { events: C, eventColor: x } = e;
    let T, P = [];
    if (Array.isArray(C) ? T = C.includes(y) : C instanceof Function ? T = C(y) || false : C ? T = C[y] || false : T = false, T) T !== true ? P = ct(T) : typeof x == "string" ? P = [x] : typeof x == "function" ? P = ct(x(y)) : Array.isArray(x) ? P = x : typeof x == "object" && x !== null && (P = ct(x[y]));
    else return [];
    return P.length ? P.filter(Boolean).map((M) => typeof M == "string" ? M : "surface-variant") : ["surface-variant"];
  }
  function k(y) {
    const C = V(y);
    return C.length ? S("div", { class: "v-date-picker-month__events" }, [C.map((x) => g(Dy, { dot: true, color: x }, null))]) : null;
  }
  ae(() => S("div", { class: "v-date-picker-month", style: { "--v-date-picker-days-in-week": e.weekdays.length } }, [e.showWeek && S("div", { key: "weeks", class: "v-date-picker-month__weeks" }, [!e.hideWeekdays && S("div", { key: "hide-week-days", class: "v-date-picker-month__day" }, [Oe("\xA0")]), s.value.map((y) => S("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]) }, [y]))]), g(Qt, { name: p.value }, { default: () => {
    var _a2;
    return [S("div", { ref: l, key: (_a2 = i.value[0].date) == null ? void 0 : _a2.toString(), class: "v-date-picker-month__days" }, [!e.hideWeekdays && u.value.map((y) => S("div", { class: ne(["v-date-picker-month__day", "v-date-picker-month__weekday"]) }, [y])), i.value.map((y, C) => {
      var _a3;
      const x = { props: { class: "v-date-picker-month__day-btn", color: y.isSelected || y.isToday ? e.color : void 0, disabled: y.isDisabled, readonly: e.readonly, icon: true, ripple: false, variant: y.isSelected ? "flat" : y.isToday ? "outlined" : "text", "aria-label": b(y), "aria-current": y.isToday ? "date" : void 0, onClick: () => I(y.date) }, item: y, i: C };
      return m.value && !y.isSelected && (y.isDisabled = true), S("div", { class: ne(["v-date-picker-month__day", { "v-date-picker-month__day--adjacent": y.isAdjacent, "v-date-picker-month__day--hide-adjacent": y.isHidden, "v-date-picker-month__day--selected": y.isSelected, "v-date-picker-month__day--week-end": y.isWeekEnd, "v-date-picker-month__day--week-start": y.isWeekStart }]), "data-v-date": y.isDisabled ? void 0 : y.isoDate }, [(e.showAdjacentMonths || !y.isAdjacent) && (((_a3 = a.day) == null ? void 0 : _a3.call(a, x)) ?? g(Ue, x.props, { default: () => [y.localized, k(y.isoDate)] }))]);
    })])];
  } })]));
} }), tp = j({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, year: Number, allowedMonths: [Array, Function] }, "VDatePickerMonths"), Ou = ee()({ name: "VDatePickerMonths", props: tp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = pl(), o = Ce(e, "modelValue"), i = _(() => {
    let s = l.startOfYear(l.date());
    return e.year && (s = l.setYear(s, e.year)), jn(12).map((u) => {
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
  return ae(() => S("div", { class: "v-date-picker-months", style: { height: ve(e.height) } }, [S("div", { class: "v-date-picker-months__content" }, [i.value.map((s, u) => {
    var _a2;
    const c = { active: o.value === u, ariaLabel: s.label, color: o.value === u ? e.color : void 0, disabled: s.isDisabled, rounded: true, text: s.text, variant: o.value === s.value ? "flat" : "text", onClick: () => d(u) };
    function d(f) {
      if (o.value === f) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f;
    }
    return ((_a2 = a.month) == null ? void 0 : _a2.call(a, { month: s, i: u, props: c })) ?? g(Ue, q({ key: "month" }, c), null);
  })])])), {};
} }), np = j({ color: String, height: [String, Number], min: null, max: null, modelValue: Number, allowedYears: [Array, Function] }, "VDatePickerYears"), Nu = ee()({ name: "VDatePickerYears", props: np(), directives: { vIntersect: Rn }, emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = pl(), o = Ce(e, "modelValue"), i = re(false), r = _(() => {
    const f = l.getYear(l.date());
    let v = f - 100, p = f + 52;
    e.min && (v = l.getYear(l.date(e.min))), e.max && (p = l.getYear(l.date(e.max)));
    let m = l.startOfYear(l.date());
    return m = l.setYear(m, v), jn(p - v + 1, v).map((h) => {
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
    const p = f.getBoundingClientRect(), m = v.getBoundingClientRect();
    f.scrollTop += m.top - p.top - f.clientHeight / 2 + m.height / 2;
  }
  function d(f) {
    return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(f) : typeof e.allowedYears == "function" ? e.allowedYears(f) : true;
  }
  return ae(() => lt(S("div", { class: "v-date-picker-years", ref: s, style: { height: ve(e.height) } }, [S("div", { class: "v-date-picker-years__content", onFocus: () => {
    var _a2;
    return (_a2 = u.el) == null ? void 0 : _a2.focus();
  }, onFocusin: () => i.value = true, onFocusout: () => i.value = false, tabindex: i.value ? -1 : 0 }, [r.value.map((f, v) => {
    var _a2;
    const p = { ref: o.value === f.value ? u : void 0, active: o.value === f.value, color: o.value === f.value ? e.color : void 0, rounded: true, text: f.text, disabled: f.isDisabled, variant: o.value === f.value ? "flat" : "text", onClick: () => {
      if (o.value === f.value) {
        n("update:modelValue", o.value);
        return;
      }
      o.value = f.value;
    } };
    return ((_a2 = a.year) == null ? void 0 : _a2.call(a, { year: f, i: v, props: p })) ?? g(Ue, q({ key: "month" }, p), null);
  })])]), [[Rn, { handler: c }, null, { once: true }]])), {};
} }), dA = j({ header: { type: String, default: "$vuetify.datePicker.header" }, headerColor: String, headerDateFormat: { type: String, default: "normalDateWithWeekday" }, landscapeHeaderWidth: [Number, String], ...ze(Jb(), ["active", "monthText", "yearText"]), ...ep({ weeksInMonth: "static" }), ...ze(tp(), ["modelValue"]), ...ze(np(), ["modelValue"]), ...Jr({ title: "$vuetify.datePicker.title" }), modelValue: null }, "VDatePicker"), fA = ee()({ name: "VDatePicker", props: dA(), emits: { "update:modelValue": (e) => true, "update:month": (e) => true, "update:year": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const l = pl(), { t: o } = ot(), { rtlClasses: i } = Pt(), r = Ce(e, "modelValue", void 0, (U) => ct(U).map((ie) => l.date(ie)), (U) => e.multiple ? U : U[0]), s = Ce(e, "viewMode"), { minDate: u, maxDate: c, clampDate: d } = Qb(e), f = _(() => {
    var _a2;
    const U = l.date(), ie = ((_a2 = r.value) == null ? void 0 : _a2[0]) ? l.date(r.value[0]) : d(U);
    return ie && l.isValid(ie) ? ie : U;
  }), v = B(() => e.headerColor ?? e.color), p = Ce(e, "month"), m = _({ get: () => Number(p.value ?? l.getMonth(l.startOfMonth(f.value))), set: (U) => p.value = U }), h = Ce(e, "year"), b = _({ get: () => Number(h.value ?? l.getYear(l.startOfYear(l.setMonth(f.value, m.value)))), set: (U) => h.value = U }), w = re(false), I = _(() => {
    if (e.multiple && r.value.length > 1) return o("$vuetify.datePicker.itemsSelected", r.value.length);
    const U = r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), e.headerDateFormat) : o(e.header);
    return e.landscape && U.split(" ").length === 3 ? U.replace(" ", `
`) : U;
  }), V = B(() => {
    let U = l.date();
    return U = l.setDate(U, 1), U = l.setMonth(U, m.value), U = l.setYear(U, b.value), U;
  }), k = B(() => l.format(V.value, "monthAndYear")), y = B(() => l.format(V.value, "monthShort")), C = B(() => l.format(V.value, "year")), x = B(() => `date-picker-header${w.value ? "-reverse" : ""}-transition`), T = _(() => {
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
    const K = 1 + gh(l, U, ie);
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
    const fe = l.date(Se[Se.length - 1]), De = l.date(K[K.length - 1]);
    if (l.isSameDay(fe, De)) return;
    const _e = l.getMonth(De), ye = l.getYear(De);
    _e !== m.value && (m.value = _e, W()), ye !== b.value && (b.value = ye, L()), w.value = l.isBefore(fe, De);
  }), ae(() => {
    const U = no.filterProps(e), ie = ze(Ru.filterProps(e), ["viewMode"]), Se = Fu.filterProps(e), K = Lu.filterProps(e), fe = ze(Ou.filterProps(e), ["modelValue"]), De = ze(Nu.filterProps(e), ["modelValue"]), _e = { color: v.value, header: I.value, transition: x.value };
    return g(no, q(U, { color: v.value, class: ["v-date-picker", `v-date-picker--${s.value}`, { "v-date-picker--show-week": e.showWeek }, i.value, e.class], style: [{ "--v-date-picker-landscape-header-width": ve(e.landscapeHeaderWidth) }, e.style] }), { title: () => {
      var _a2;
      return ((_a2 = a.title) == null ? void 0 : _a2.call(a)) ?? S("div", { class: "v-date-picker__title" }, [o(e.title)]);
    }, header: () => a.header ? g(Fe, { defaults: { VDatePickerHeader: { ..._e } } }, { default: () => {
      var _a2;
      return [(_a2 = a.header) == null ? void 0 : _a2.call(a, _e)];
    } }) : g(Fu, q({ key: "header" }, Se, _e, { onClick: s.value !== "month" ? H : void 0 }), { prepend: a.prepend, append: a.append }), default: () => S(be, null, [g(Ru, q(ie, { disabled: T.value, viewMode: s.value, text: k.value, monthText: y.value, yearText: C.value, "onClick:next": R, "onClick:prev": G, "onClick:nextYear": N, "onClick:prevYear": Y, "onClick:month": F, "onClick:year": Z }), { default: a.controls }), g(Ko, { hideOnLeave: true }, { default: () => [s.value === "months" ? g(Ou, q({ key: "date-picker-months" }, fe, { modelValue: m.value, "onUpdate:modelValue": [(ye) => m.value = ye, W], min: u.value, max: c.value, year: b.value, allowedMonths: M.value }), { month: a.month }) : s.value === "year" ? g(Nu, q({ key: "date-picker-years" }, De, { modelValue: b.value, "onUpdate:modelValue": [(ye) => b.value = ye, L], min: u.value, max: c.value, allowedYears: P.value }), { year: a.year }) : g(Lu, q({ key: "date-picker-month" }, K, { modelValue: r.value, "onUpdate:modelValue": (ye) => r.value = ye, month: m.value, "onUpdate:month": [(ye) => m.value = ye, W], year: b.value, "onUpdate:year": [(ye) => b.value = ye, L], min: u.value, max: c.value }), { day: a.day })] })]), actions: a.actions });
  }), {};
} }), vA = j({ actionText: String, bgColor: String, color: String, icon: Ie, image: String, justify: { type: String, default: "center" }, headline: String, title: String, text: String, textWidth: { type: [Number, String], default: 500 }, href: String, to: String, ...xe(), ...Ct(), ...ta({ size: void 0 }), ...Ye() }, "VEmptyState"), mA = ee()({ name: "VEmptyState", props: vA(), emits: { "click:action": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Je(() => e.bgColor), { dimensionStyles: r } = _t(e), { displayClasses: s } = kn();
  function u(c) {
    n("click:action", c);
  }
  return ae(() => {
    var _a2, _b2, _c2;
    const c = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), f = !!(a.title || e.title), v = !!(a.text || e.text), p = !!(a.media || e.image || e.icon), m = e.size || (e.image ? 200 : 96);
    return S("div", { class: ne(["v-empty-state", { [`v-empty-state--${e.justify}`]: true }, l.value, o.value, s.value, e.class]), style: me([i.value, r.value, e.style]) }, [p && S("div", { key: "media", class: "v-empty-state__media" }, [a.media ? g(Fe, { key: "media-defaults", defaults: { VImg: { src: e.image, height: m }, VIcon: { size: m, icon: e.icon } } }, { default: () => [a.media()] }) : S(be, null, [e.image ? g(ga, { key: "image", src: e.image, height: m }, null) : e.icon ? g(Xe, { key: "icon", color: e.color, size: m, icon: e.icon }, null) : void 0])]), d && S("div", { key: "headline", class: "v-empty-state__headline" }, [((_a2 = a.headline) == null ? void 0 : _a2.call(a)) ?? e.headline]), f && S("div", { key: "title", class: "v-empty-state__title" }, [((_b2 = a.title) == null ? void 0 : _b2.call(a)) ?? e.title]), v && S("div", { key: "text", class: "v-empty-state__text", style: { maxWidth: ve(e.textWidth) } }, [((_c2 = a.text) == null ? void 0 : _c2.call(a)) ?? e.text]), a.default && S("div", { key: "content", class: "v-empty-state__content" }, [a.default()]), c && S("div", { key: "actions", class: "v-empty-state__actions" }, [g(Fe, { defaults: { VBtn: { class: "v-empty-state__action-btn", color: e.color ?? "surface-variant", href: e.href, text: e.actionText, to: e.to } } }, { default: () => {
      var _a3;
      return [((_a3 = a.actions) == null ? void 0 : _a3.call(a, { props: { onClick: u } })) ?? g(Ue, { onClick: u }, null)];
    } })])]);
  }), {};
} }), ai = Symbol.for("vuetify:v-expansion-panel"), ap = j({ ...xe(), ...td() }, "VExpansionPanelText"), Hu = ee()({ name: "VExpansionPanelText", props: ap(), setup(e, t) {
  let { slots: n } = t;
  const a = Ge(ai);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
  const { hasContent: l, onAfterLeave: o } = nd(e, a.isSelected);
  return ae(() => g(Nr, { onAfterLeave: o }, { default: () => {
    var _a2;
    return [lt(S("div", { class: ne(["v-expansion-panel-text", e.class]), style: me(e.style) }, [n.default && l.value && S("div", { class: "v-expansion-panel-text__wrapper" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]), [[Ln, a.isSelected.value]])];
  } })), {};
} }), lp = j({ color: String, expandIcon: { type: Ie, default: "$expand" }, collapseIcon: { type: Ie, default: "$collapse" }, hideActions: Boolean, focusable: Boolean, static: Boolean, ripple: { type: [Boolean, Object], default: false }, readonly: Boolean, ...xe(), ...Ct() }, "VExpansionPanelTitle"), zu = ee()({ name: "VExpansionPanelTitle", directives: { vRipple: Ot }, props: lp(), setup(e, t) {
  let { slots: n } = t;
  const a = Ge(ai);
  if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.color), { dimensionStyles: i } = _t(e), r = _(() => ({ collapseIcon: e.collapseIcon, disabled: a.disabled.value, expanded: a.isSelected.value, expandIcon: e.expandIcon, readonly: e.readonly })), s = B(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
  return ae(() => {
    var _a2;
    return lt(S("button", { class: ne(["v-expansion-panel-title", { "v-expansion-panel-title--active": a.isSelected.value, "v-expansion-panel-title--focusable": e.focusable, "v-expansion-panel-title--static": e.static }, l.value, e.class]), style: me([o.value, i.value, e.style]), type: "button", tabindex: a.disabled.value ? -1 : void 0, disabled: a.disabled.value, "aria-expanded": a.isSelected.value, onClick: e.readonly ? void 0 : a.toggle }, [S("span", { class: "v-expansion-panel-title__overlay" }, null), (_a2 = n.default) == null ? void 0 : _a2.call(n, r.value), !e.hideActions && g(Fe, { defaults: { VIcon: { icon: s.value } } }, { default: () => {
      var _a3;
      return [S("span", { class: "v-expansion-panel-title__icon" }, [((_a3 = n.actions) == null ? void 0 : _a3.call(n, r.value)) ?? g(Xe, null, null)])];
    } })]), [[Ot, e.ripple]]);
  }), {};
} }), op = j({ title: String, text: String, bgColor: String, ...Vt(), ..._l(), ...dt(), ...Re(), ...lp(), ...ap() }, "VExpansionPanel"), gA = ee()({ name: "VExpansionPanel", props: op(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = La(e, ai), { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.bgColor), { elevationClasses: i } = At(e), { roundedClasses: r } = gt(e), s = B(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, v, p) => (a.group.selected.value.includes(v.id) && f.push(p), f), [])), c = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === 1);
  }), d = _(() => {
    const f = a.group.items.value.findIndex((v) => v.id === a.id);
    return !a.isSelected.value && u.value.some((v) => v - f === -1);
  });
  return ft(ai, a), ae(() => {
    const f = !!(n.text || e.text), v = !!(n.title || e.title), p = zu.filterProps(e), m = Hu.filterProps(e);
    return g(e.tag, { class: ne(["v-expansion-panel", { "v-expansion-panel--active": a.isSelected.value, "v-expansion-panel--before-active": c.value, "v-expansion-panel--after-active": d.value, "v-expansion-panel--disabled": s.value }, r.value, l.value, e.class]), style: me([o.value, e.style]) }, { default: () => [S("div", { class: ne(["v-expansion-panel__shadow", ...i.value]) }, null), g(Fe, { defaults: { VExpansionPanelTitle: { ...p }, VExpansionPanelText: { ...m } } }, { default: () => {
      var _a2;
      return [v && g(zu, { key: "title" }, { default: () => [n.title ? n.title() : e.title] }), f && g(Hu, { key: "text" }, { default: () => [n.text ? n.text() : e.text] }), (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } })] });
  }), { groupItem: a };
} }), hA = ["default", "accordion", "inset", "popout"], yA = j({ flat: Boolean, ...Cl(), ...on(op(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]), ...Ye(), ...xe(), ...Re(), variant: { type: String, default: "default", validator: (e) => hA.includes(e) } }, "VExpansionPanels"), bA = ee()({ name: "VExpansionPanels", props: yA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { next: a, prev: l } = Ga(e, ai), { themeClasses: o } = qe(e), i = B(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
  return yt({ VExpansionPanel: { bgColor: B(() => e.bgColor), collapseIcon: B(() => e.collapseIcon), color: B(() => e.color), eager: B(() => e.eager), elevation: B(() => e.elevation), expandIcon: B(() => e.expandIcon), focusable: B(() => e.focusable), hideActions: B(() => e.hideActions), readonly: B(() => e.readonly), ripple: B(() => e.ripple), rounded: B(() => e.rounded), static: B(() => e.static) } }), ae(() => g(e.tag, { class: ne(["v-expansion-panels", { "v-expansion-panels--flat": e.flat, "v-expansion-panels--tile": e.tile }, o.value, i.value, e.class]), style: me(e.style) }, { default: () => {
    var _a2;
    return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { prev: l, next: a })];
  } })), { next: a, prev: l };
} }), pA = j({ app: Boolean, appear: Boolean, extended: Boolean, layout: Boolean, offset: Boolean, modelValue: { type: Boolean, default: true }, ...ze(Wr({ active: true }), ["location", "spaced"]), ...xl(), ...ea(), ...Sa({ transition: "fab-transition" }) }, "VFab"), SA = ee()({ name: "VFab", props: pA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = re(56), o = O(), { resizeRef: i } = In((d) => {
    d.length && (l.value = d[0].target.clientHeight);
  }), r = B(() => e.app || e.absolute), s = _(() => {
    var _a2;
    return r.value ? ((_a2 = e.location) == null ? void 0 : _a2.split(" ").shift()) ?? "bottom" : false;
  }), u = _(() => {
    var _a2;
    return r.value ? ((_a2 = e.location) == null ? void 0 : _a2.split(" ")[1]) ?? "end" : false;
  });
  Lt(() => e.app, () => {
    const d = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: s, layoutSize: _(() => e.layout ? l.value + 24 : 0), elementSize: _(() => l.value + 24), active: _(() => e.app && a.value), absolute: B(() => e.absolute) });
    mt(() => {
      o.value = d.layoutItemStyles.value;
    });
  });
  const c = O();
  return ae(() => {
    const d = Ue.filterProps(e);
    return S("div", { ref: c, class: ne(["v-fab", { "v-fab--absolute": e.absolute, "v-fab--app": !!e.app, "v-fab--extended": e.extended, "v-fab--offset": e.offset, [`v-fab--${s.value}`]: r.value, [`v-fab--${u.value}`]: r.value }, e.class]), style: me([e.app ? { ...o.value } : { height: e.absolute ? "100%" : "inherit" }, e.style]) }, [S("div", { class: "v-fab__container" }, [g(Qt, { appear: e.appear, transition: e.transition }, { default: () => [lt(g(Ue, q({ ref: i }, d, { active: void 0, location: void 0 }), n), [[Ln, e.active]])] })])]);
  }), {};
} });
function xA() {
  function e(n) {
    var _a2, _b2;
    return [...((_a2 = n.dataTransfer) == null ? void 0 : _a2.items) ?? []].filter((l) => l.kind === "file").map((l) => l.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []].length > 0;
  }
  async function t(n) {
    var _a2, _b2;
    const a = [], l = [...((_a2 = n.dataTransfer) == null ? void 0 : _a2.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean);
    if (l.length) for (const o of l) {
      const i = await ip(o, rp(".", o));
      a.push(...i.map((r) => r.file));
    }
    else a.push(...((_b2 = n.dataTransfer) == null ? void 0 : _b2.files) ?? []);
    return a;
  }
  return { handleDrop: t, hasFilesOrFolders: e };
}
function ip(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((n, a) => {
    e.isFile ? e.file((o) => n([{ file: o, path: t }]), a) : e.isDirectory && e.createReader().readEntries(async (o) => {
      const i = [];
      for (const r of o) i.push(...await ip(r, rp(t, r)));
      n(i);
    });
  });
}
function rp(e, t) {
  return t.isDirectory ? `${e}/${t.name}` : e;
}
const kA = j({ filterByType: String }, "file-accept");
function wA(e) {
  const t = _(() => e.filterByType ? CA(e.filterByType) : null);
  function n(a) {
    if (t.value) {
      const l = a.filter(t.value);
      return { accepted: l, rejected: a.filter((o) => !l.includes(o)) };
    }
    return { accepted: a, rejected: [] };
  }
  return { filterAccepted: n };
}
function CA(e) {
  const t = e.split(",").map((o) => o.trim().toLowerCase()), n = t.filter((o) => o.startsWith(".")), a = t.filter((o) => o.endsWith("/*")), l = t.filter((o) => !n.includes(o) && !a.includes(o));
  return (o) => {
    var _a2, _b2;
    const i = ((_a2 = o.name.split(".").at(-1)) == null ? void 0 : _a2.toLowerCase()) ?? "", r = ((_b2 = o.type.split("/").at(0)) == null ? void 0 : _b2.toLowerCase()) ?? "";
    return l.includes(o.type) || n.includes(`.${i}`) || a.includes(`${r}/*`);
  };
}
const _A = j({ chips: Boolean, counter: Boolean, counterSizeString: { type: String, default: "$vuetify.fileInput.counterSize" }, counterString: { type: String, default: "$vuetify.fileInput.counter" }, hideInput: Boolean, multiple: Boolean, showSize: { type: [Boolean, Number, String], default: false, validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e)) }, truncateLength: { type: [Number, String], default: 22 }, ...ze(Ca({ prependIcon: "$file" }), ["direction"]), modelValue: { type: [Array, Object], default: (e) => e.multiple ? [] : null, validator: (e) => ct(e).every((t) => t != null && typeof t == "object") }, ...kA(), ...xi({ clearable: true }) }, "VFileInput"), VA = ee()({ name: "VFileInput", inheritAttrs: false, props: _A(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, rejected: (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { t: o } = ot(), { filterAccepted: i } = wA(e), r = Ce(e, "modelValue", e.modelValue, (H) => ct(H), (H) => !e.multiple && Array.isArray(H) ? H[0] : H), { isFocused: s, focus: u, blur: c } = wa(e), d = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = _(() => (r.value ?? []).reduce((H, F) => {
    let { size: Z = 0 } = F;
    return H + Z;
  }, 0)), v = _(() => zf(f.value, d.value)), p = _(() => (r.value ?? []).map((H) => {
    const { name: F = "", size: Z = 0 } = H, W = E(F);
    return e.showSize ? `${W} (${zf(Z, d.value)})` : W;
  })), m = _(() => {
    var _a2;
    const H = ((_a2 = r.value) == null ? void 0 : _a2.length) ?? 0;
    return e.showSize ? o(e.counterSizeString, H, v.value) : o(e.counterString, H);
  }), h = O(), b = O(), w = O(), I = B(() => s.value || e.active), V = _(() => ["plain", "underlined"].includes(e.variant)), k = re(false), { handleDrop: y, hasFilesOrFolders: C } = xA();
  function x() {
    var _a2;
    w.value !== document.activeElement && ((_a2 = w.value) == null ? void 0 : _a2.focus()), s.value || u();
  }
  function T(H) {
    var _a2;
    (_a2 = w.value) == null ? void 0 : _a2.click();
  }
  function P(H) {
    a("mousedown:control", H);
  }
  function M(H) {
    var _a2;
    (_a2 = w.value) == null ? void 0 : _a2.click(), a("click:control", H);
  }
  function D(H) {
    H.stopPropagation(), x(), Be(() => {
      r.value = [], ci(e["onClick:clear"], H);
    });
  }
  function E(H) {
    if (H.length < Number(e.truncateLength)) return H;
    const F = Math.floor((Number(e.truncateLength) - 1) / 2);
    return `${H.slice(0, F)}\u2026${H.slice(H.length - F)}`;
  }
  function A(H) {
    H.preventDefault(), H.stopImmediatePropagation(), k.value = true;
  }
  function R(H) {
    H.preventDefault(), k.value = false;
  }
  async function G(H) {
    if (H.preventDefault(), H.stopImmediatePropagation(), k.value = false, !w.value || !C(H)) return;
    const F = await y(H);
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
    w.value.files = F.files, r.value = [...F.files];
    const L = new Event("change", { bubbles: true });
    L.repack = true, w.value.dispatchEvent(L);
  }
  return se(r, (H) => {
    (!Array.isArray(H) || !H.length) && w.value && (w.value.value = "");
  }), ae(() => {
    const H = !!(l.counter || e.counter), F = !!(H || l.details), [Z, W] = Jn(n), { modelValue: L, ...U } = Wt.filterProps(e), ie = { ...za.filterProps(e), "onClick:clear": D }, Se = n.webkitdirectory !== void 0 && n.webkitdirectory !== false, K = n.accept ? String(n.accept) : void 0, fe = Se ? void 0 : e.filterByType ?? K;
    return g(Wt, q({ ref: h, modelValue: e.multiple ? r.value : r.value[0], class: ["v-file-input", { "v-file-input--chips": !!e.chips, "v-file-input--dragging": k.value, "v-file-input--hide": e.hideInput, "v-input--plain-underlined": V.value }, e.class], style: e.style, "onClick:prepend": T }, Z, U, { centerAffix: !V.value, focused: s.value }), { ...l, default: (De) => {
      let { id: _e, isDisabled: ye, isDirty: $, isReadonly: z, isValid: Q, hasDetails: ce } = De;
      return g(za, q({ ref: b, prependIcon: e.prependIcon, onMousedown: P, onClick: M, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, ie, { id: _e.value, active: I.value || $.value, dirty: $.value || e.dirty, disabled: ye.value, focused: s.value, details: ce.value, error: Q.value === false, onDragover: A, onDrop: G }), { ...l, default: (oe) => {
        var _a2;
        let { props: { class: ue, ...pe }, controlRef: de } = oe;
        return S(be, null, [S("input", q({ ref: (X) => w.value = de.value = X, type: "file", accept: fe, readonly: z.value, disabled: ye.value, multiple: e.multiple, name: e.name, onClick: (X) => {
          X.stopPropagation(), z.value && X.preventDefault(), x();
        }, onChange: N, onDragleave: R, onFocus: x, onBlur: c }, pe, W), null), S("div", { class: ne(ue) }, [!!((_a2 = r.value) == null ? void 0 : _a2.length) && !e.hideInput && (l.selection ? l.selection({ fileNames: p.value, totalBytes: f.value, totalBytesReadable: v.value }) : e.chips ? p.value.map((X) => g(ha, { key: X, size: "small", text: X }, null)) : p.value.join(", "))])]);
      } });
    }, details: F ? (De) => {
      var _a2, _b2;
      return S(be, null, [(_a2 = l.details) == null ? void 0 : _a2.call(l, De), H && S(be, null, [S("span", null, null), g(Ur, { active: !!((_b2 = r.value) == null ? void 0 : _b2.length), value: m.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Dt({}, h, b, w);
} }), IA = j({ app: Boolean, color: String, height: { type: [Number, String], default: "auto" }, ...Ut(), ...xe(), ...Vt(), ...xl(), ...dt(), ...Re({ tag: "footer" }), ...Ye() }, "VFooter"), PA = ee()({ name: "VFooter", props: IA(), setup(e, t) {
  let { slots: n } = t;
  const a = O(), { themeClasses: l } = qe(e), { backgroundColorClasses: o, backgroundColorStyles: i } = Je(() => e.color), { borderClasses: r } = tn(e), { elevationClasses: s } = At(e), { roundedClasses: u } = gt(e), c = re(32), { resizeRef: d } = In((v) => {
    v.length && (c.value = v[0].target.clientHeight);
  }), f = _(() => e.height === "auto" ? c.value : parseInt(e.height, 10));
  return Lt(() => e.app, () => {
    const v = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => "bottom"), layoutSize: f, elementSize: _(() => e.height === "auto" ? void 0 : f.value), active: B(() => e.app), absolute: B(() => e.absolute) });
    mt(() => {
      a.value = v.layoutItemStyles.value;
    });
  }), ae(() => g(e.tag, { ref: d, class: ne(["v-footer", l.value, o.value, r.value, s.value, u.value, e.class]), style: me([i.value, e.app ? a.value : { height: ve(e.height) }, e.style]) }, n)), {};
} }), TA = j({ ...xe(), ...$_() }, "VForm"), AA = ee()({ name: "VForm", props: TA(), emits: { "update:modelValue": (e) => true, submit: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = R_(e), o = O();
  function i(s) {
    s.preventDefault(), l.reset();
  }
  function r(s) {
    const u = s, c = l.validate();
    u.then = c.then.bind(c), u.catch = c.catch.bind(c), u.finally = c.finally.bind(c), a("submit", u), u.defaultPrevented || c.then((d) => {
      var _a2;
      let { valid: f } = d;
      f && ((_a2 = o.value) == null ? void 0 : _a2.submit());
    }), u.preventDefault();
  }
  return ae(() => {
    var _a2;
    return S("form", { ref: o, class: ne(["v-form", e.class]), style: me(e.style), novalidate: true, onReset: i, onSubmit: r }, [(_a2 = n.default) == null ? void 0 : _a2.call(n, l)]);
  }), Dt(l, o);
} }), DA = j({ color: String, ...Ut(), ...xe(), ...dt(), ...Re({ tag: "kbd" }), ...Ye(), ...Vt() }, "VKbd"), Wu = ee()({ name: "VKbd", props: DA(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { borderClasses: l } = tn(e), { roundedClasses: o } = gt(e), { backgroundColorClasses: i, backgroundColorStyles: r } = Je(() => e.color), { elevationClasses: s } = At(e);
  return ae(() => g(e.tag, { class: ne(["v-kbd", a.value, i.value, l.value, s.value, o.value, e.class]), style: me([r.value, e.style]) }, n)), {};
} });
function sp(e, t, n) {
  const a = n && e.mac ? e.mac : e.default, l = t === "icon" && !a.icon || t === "symbol" && !a.symbol ? "text" : t;
  let o = a[l] ?? a.text;
  return l === "text" && typeof o == "string" && o.startsWith("$") && !o.startsWith("$vuetify.") && (o = o.slice(1).toUpperCase()), l === "icon" ? ["icon", o] : [l, o];
}
const up = { ctrl: { mac: { symbol: "\u2303", icon: "$ctrl", text: "$vuetify.hotkey.ctrl" }, default: { text: "Ctrl" } }, meta: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, cmd: { mac: { symbol: "\u2318", icon: "$command", text: "$vuetify.hotkey.command" }, default: { text: "Ctrl" } }, shift: { mac: { symbol: "\u21E7", icon: "$shift", text: "$vuetify.hotkey.shift" }, default: { text: "Shift" } }, alt: { mac: { symbol: "\u2325", icon: "$alt", text: "$vuetify.hotkey.option" }, default: { text: "Alt" } }, enter: { default: { symbol: "\u21B5", icon: "$enter", text: "$vuetify.hotkey.enter" } }, arrowup: { default: { symbol: "\u2191", icon: "$arrowup", text: "$vuetify.hotkey.upArrow" } }, arrowdown: { default: { symbol: "\u2193", icon: "$arrowdown", text: "$vuetify.hotkey.downArrow" } }, arrowleft: { default: { symbol: "\u2190", icon: "$arrowleft", text: "$vuetify.hotkey.leftArrow" } }, arrowright: { default: { symbol: "\u2192", icon: "$arrowright", text: "$vuetify.hotkey.rightArrow" } }, backspace: { default: { symbol: "\u232B", icon: "$backspace", text: "$vuetify.hotkey.backspace" } }, escape: { default: { text: "$vuetify.hotkey.escape" } }, " ": { mac: { symbol: "\u2423", icon: "$space", text: "$vuetify.hotkey.space" }, default: { text: "$vuetify.hotkey.space" } }, "-": { default: { text: "-" } } }, MA = j({ keys: String, displayMode: { type: String, default: "icon" }, keyMap: { type: Object, default: () => up }, platform: { type: String, default: "auto" }, inline: Boolean, disabled: Boolean, prefix: String, suffix: String, variant: { type: String, default: "elevated", validator: (e) => ["elevated", "flat", "tonal", "outlined", "text", "plain", "contained"].includes(e) }, ...xe(), ...Ye(), ...Ut(), ...dt(), ...Vt(), color: String }, "VHotkey"), Hs = Symbol("VHotkey:AND_DELINEATOR"), zs = Symbol("VHotkey:SLASH_DELINEATOR"), jv = Symbol("VHotkey:THEN_DELINEATOR");
function EA(e, t, n) {
  const a = t.toLowerCase();
  if (a in e) {
    const l = sp(e[a], "text", n);
    return typeof l[1] == "string" ? l[1] : String(l[1]);
  }
  return t.toUpperCase();
}
function Uv(e, t, n, a) {
  const l = n.toLowerCase();
  if (l in e) {
    const o = sp(e[l], t, a);
    return o[0] === "text" && typeof o[1] == "string" && o[1].startsWith("$") && !o[1].startsWith("$vuetify.") ? ["text", o[1].replace("$", "").toUpperCase(), n] : [...o, n];
  }
  return ["text", n.toUpperCase(), n];
}
const BA = ee()({ name: "VHotkey", props: MA(), setup(e) {
  const { t } = ot(), { themeClasses: n } = qe(e), { rtlClasses: a } = Pt(), { borderClasses: l } = tn(e), { roundedClasses: o } = gt(e), { elevationClasses: i } = At(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ka(() => ({ color: e.color, variant: e.variant === "contained" ? "elevated" : e.variant })), c = _(() => e.platform === "auto" ? typeof navigator < "u" && /macintosh/i.test(navigator.userAgent) : e.platform === "mac"), d = _(() => e.keys ? e.keys.split(" ").map((b) => {
    const w = [], I = TC(b);
    for (let V = 0; V < I.length; V++) {
      const k = I[V];
      V > 0 && w.push(jv);
      const { keys: y, separators: C } = wh(k);
      for (let x = 0; x < y.length; x++) {
        const T = y[x];
        x > 0 && w.push(C[x - 1] === "/" ? zs : Hs), w.push(Uv(e.keyMap, e.displayMode, T, c.value));
      }
    }
    return w;
  }) : []), f = _(() => {
    if (!e.keys) return "";
    const w = d.value.map((I) => {
      const V = [];
      for (const k of I) if (Array.isArray(k)) {
        const y = k[0] === "icon" || k[0] === "symbol" ? Uv(Ht(up, e.keyMap), "text", String(k[1]), c.value)[1] : k[1];
        V.push(v(y));
      } else k === Hs ? V.push(t("$vuetify.hotkey.plus")) : k === zs ? V.push(t("$vuetify.hotkey.or")) : k === jv && V.push(t("$vuetify.hotkey.then"));
      return V.join(" ");
    }).join(", ");
    return t("$vuetify.hotkey.shortcut", w);
  });
  function v(b) {
    return b.startsWith("$vuetify.") ? t(b) : b;
  }
  function p(b) {
    if (e.displayMode === "text") return;
    const w = EA(e.keyMap, String(b[2]), c.value);
    return v(w);
  }
  function m(b, w) {
    const I = e.variant === "contained", V = I ? "kbd" : Wu, k = ["v-hotkey__key", `v-hotkey__key-${b[0]}`, ...I ? ["v-hotkey__key--nested"] : [l.value, o.value, i.value, r.value]];
    return g(V, { key: w, class: ne(k), style: me(I ? void 0 : s.value), "aria-hidden": "true", title: p(b) }, { default: () => [b[0] === "icon" ? g(Xe, { icon: b[1], "aria-hidden": "true" }, null) : v(b[1])] });
  }
  function h(b, w) {
    return S("span", { key: w, class: "v-hotkey__divider", "aria-hidden": "true" }, [b === Hs ? "+" : b === zs ? "/" : t("$vuetify.hotkey.then")]);
  }
  ae(() => {
    const b = S(be, null, [e.prefix && S("span", { key: "prefix", class: "v-hotkey__prefix" }, [e.prefix]), d.value.map((w, I) => S("span", { class: "v-hotkey__combination", key: I }, [w.map((V, k) => Array.isArray(V) ? m(V, k) : h(V, k)), I < d.value.length - 1 && S("span", { "aria-hidden": "true" }, [Oe("\xA0")])])), e.suffix && S("span", { key: "suffix", class: "v-hotkey__suffix" }, [e.suffix])]);
    return S("div", { class: ne(["v-hotkey", { "v-hotkey--disabled": e.disabled, "v-hotkey--inline": e.inline, "v-hotkey--contained": e.variant === "contained" }, n.value, a.value, u.value, e.class]), style: me(e.style), role: "img", "aria-label": f.value }, [e.variant !== "contained" ? b : g(Wu, { key: "contained", class: ne(["v-hotkey__contained-wrapper", l.value, o.value, i.value, r.value]), style: me(s.value), "aria-hidden": "true" }, { default: () => [b] })]);
  });
} }), $A = j({ disabled: Boolean, modelValue: { type: Boolean, default: null }, ...Qc() }, "VHover"), RA = ee()({ name: "VHover", props: $A(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { runOpenDelay: l, runCloseDelay: o } = ed(e, (i) => !e.disabled && (a.value = i));
  return () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n, { isHovering: a.value, props: { onMouseenter: l, onMouseleave: o } });
  };
} }), FA = j({ color: String, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, side: { type: String, default: "end", validator: (e) => ["start", "end", "both"].includes(e) }, mode: { type: String, default: "intersect", validator: (e) => ["intersect", "manual"].includes(e) }, margin: [Number, String], loadMoreText: { type: String, default: "$vuetify.infiniteScroll.loadMore" }, emptyText: { type: String, default: "$vuetify.infiniteScroll.empty" }, ...Ct(), ...Re() }, "VInfiniteScroll"), Gv = en({ name: "VInfiniteScrollIntersect", props: { side: { type: String, required: true }, rootMargin: String }, emits: { intersect: (e, t) => true }, setup(e, t) {
  let { emit: n } = t;
  const { intersectionRef: a, isIntersecting: l } = vi();
  return se(l, async (o) => {
    n("intersect", e.side, o);
  }), ae(() => S("div", { class: "v-infinite-scroll-intersect", style: { "--v-infinite-margin-size": e.rootMargin }, ref: a }, [Oe("\xA0")])), {};
} }), LA = ee()({ name: "VInfiniteScroll", props: FA(), emits: { load: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = O(), o = re("ok"), i = re("ok"), r = _(() => ve(e.margin)), s = re(false);
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
  It(() => {
    l.value && (e.side === "start" ? u(d()) : e.side === "both" && u(d() / 2 - f() / 2));
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
    if (!l.value || ["empty", "loading"].includes(C)) return;
    m = d(), v(y, "loading");
    function x(T) {
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
    a("load", { side: y, done: x });
  }
  const { t: w } = ot();
  function I(y, C) {
    var _a2, _b2, _c2, _d2, _e;
    if (e.side !== y && e.side !== "both") return;
    const x = () => b(y), T = { side: y, props: { onClick: x, color: e.color } };
    return C === "error" ? (_a2 = n.error) == null ? void 0 : _a2.call(n, T) : C === "empty" ? ((_b2 = n.empty) == null ? void 0 : _b2.call(n, T)) ?? S("div", null, [w(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((_c2 = n.loading) == null ? void 0 : _c2.call(n, T)) ?? g(Oa, { indeterminate: true, color: e.color }, null) : ((_d2 = n["load-more"]) == null ? void 0 : _d2.call(n, T)) ?? g(Ue, { variant: "outlined", color: e.color, onClick: x }, { default: () => [w(e.loadMoreText)] }) : ((_e = n.loading) == null ? void 0 : _e.call(n, T)) ?? g(Oa, { indeterminate: true, color: e.color }, null);
  }
  const { dimensionStyles: V } = _t(e);
  ae(() => {
    const y = e.tag, C = e.side === "start" || e.side === "both", x = e.side === "end" || e.side === "both", T = e.mode === "intersect";
    return g(y, { ref: l, class: ne(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, { "v-infinite-scroll--start": C, "v-infinite-scroll--end": x }]), style: me(V.value) }, { default: () => {
      var _a2;
      return [S("div", { class: "v-infinite-scroll__side" }, [I("start", o.value)]), C && T && g(Gv, { key: "start", side: "start", onIntersect: h, rootMargin: r.value }, null), (_a2 = n.default) == null ? void 0 : _a2.call(n), x && T && g(Gv, { key: "end", side: "end", onIntersect: h, rootMargin: r.value }, null), S("div", { class: "v-infinite-scroll__side" }, [I("end", i.value)])];
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
} }), cp = Symbol.for("vuetify:v-item-group"), OA = j({ ...xe(), ...Cl({ selectedClass: "v-item--selected" }), ...Re(), ...Ye() }, "VItemGroup"), NA = ee()({ name: "VItemGroup", props: OA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { isSelected: l, select: o, next: i, prev: r, selected: s } = Ga(e, cp);
  return () => g(e.tag, { class: ne(["v-item-group", a.value, e.class]), style: me(e.style) }, { default: () => {
    var _a2;
    return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: l, select: o, next: i, prev: r, selected: s.value })];
  } });
} }), HA = ee()({ name: "VItem", props: _l(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: a, select: l, toggle: o, selectedClass: i, value: r, disabled: s } = La(e, cp);
  return () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: a.value, selectedClass: i.value, select: l, toggle: o, value: r.value, disabled: s.value });
  };
} }), zA = j({ ...xe(), ...Ct(), ...Sh() }, "VLayout"), WA = ee()({ name: "VLayout", props: zA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutClasses: a, layoutStyles: l, getLayoutItem: o, items: i, layoutRef: r } = kh(e), { dimensionStyles: s } = _t(e);
  return ae(() => {
    var _a2;
    return S("div", { ref: r, class: ne([a.value, e.class]), style: me([s.value, l.value, e.style]) }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  }), { getLayoutItem: o, items: i };
} }), jA = j({ position: { type: String, required: true }, size: { type: [Number, String], default: 300 }, modelValue: Boolean, ...xe(), ...xl() }, "VLayoutItem"), UA = ee()({ name: "VLayoutItem", props: jA(), setup(e, t) {
  let { slots: n } = t;
  const { layoutItemStyles: a } = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: B(() => e.position), elementSize: B(() => e.size), layoutSize: B(() => e.size), active: B(() => e.modelValue), absolute: B(() => e.absolute) });
  return () => {
    var _a2;
    return S("div", { class: ne(["v-layout-item", e.class]), style: me([a.value, e.style]) }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  };
} }), GA = j({ modelValue: Boolean, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, ...xe(), ...Ct(), ...Re(), ...Sa({ transition: "fade-transition" }) }, "VLazy"), YA = ee()({ name: "VLazy", directives: { vIntersect: Rn }, props: GA(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = _t(e), l = Ce(e, "modelValue");
  function o(i) {
    l.value || (l.value = i);
  }
  return ae(() => lt(g(e.tag, { class: ne(["v-lazy", e.class]), style: me([a.value, e.style]) }, { default: () => [l.value && g(Qt, { transition: e.transition, appear: true }, { default: () => {
    var _a2;
    return [(_a2 = n.default) == null ? void 0 : _a2.call(n)];
  } })] }), [[Rn, { handler: o, options: e.options }, null]])), {};
} }), KA = j({ locale: String, fallbackLocale: String, messages: Object, rtl: { type: Boolean, default: void 0 }, ...xe() }, "VLocaleProvider"), XA = ee()({ name: "VLocaleProvider", props: KA(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: a } = ch(e);
  return ae(() => {
    var _a2;
    return S("div", { class: ne(["v-locale-provider", a.value, e.class]), style: me(e.style) }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  }), {};
} }), qA = j({ scrollable: Boolean, ...xe(), ...Ct(), ...Re({ tag: "main" }) }, "VMain"), ZA = ee()({ name: "VMain", props: qA(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = _t(e), { mainStyles: l } = xh(), { ssrBootStyles: o } = wl();
  return ae(() => g(e.tag, { class: ne(["v-main", { "v-main--scrollable": e.scrollable }, e.class]), style: me([l.value, o.value, a.value, e.style]) }, { default: () => {
    var _a2, _b2;
    return [e.scrollable ? S("div", { class: "v-main__scroller" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]) : (_b2 = n.default) == null ? void 0 : _b2.call(n)];
  } })), {};
} });
function JA(e) {
  let { rootEl: t, isSticky: n, layoutItemStyles: a } = e;
  const l = re(false), o = re(0), i = _(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, l.value ? { [u]: ve(o.value) } : { top: a.value.top }];
  });
  It(() => {
    se(n, (u) => {
      u ? window.addEventListener("scroll", s, { passive: true }) : window.removeEventListener("scroll", s);
    }, { immediate: true });
  }), jt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const u = r > window.scrollY ? "up" : "down", c = t.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - d), v = c.height + Math.max(o.value, d) - window.scrollY - window.innerHeight, p = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    c.height < window.innerHeight - d ? (l.value = "top", o.value = d) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (o.value = window.scrollY + c.top - p, l.value = true) : u === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (p ? l.value !== "top" && (o.value = -f + p + d, l.value = "top") : (o.value = c.top + f, l.value = "top")), r = window.scrollY;
  }
  return { isStuck: l, stickyStyles: i };
}
const QA = 100, eD = 20;
function Yv(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Kv(e) {
  if (e.length < 2) return 0;
  if (e.length === 2) return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const a = Yv(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return Yv(t) * 1e3;
}
function tD() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Gg(eD))).push([l.timeStamp, o]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((o) => {
      delete e[o.identifier];
    });
  }
  function a(l) {
    var _a2;
    const o = (_a2 = e[l]) == null ? void 0 : _a2.values().reverse();
    if (!o) throw new Error(`No samples for touch id ${l}`);
    const i = o[0], r = [], s = [];
    for (const u of o) {
      if (i[0] - u[0] > QA) break;
      r.push({ t: u[0], d: u[1].clientX }), s.push({ t: u[0], d: u[1].clientY });
    }
    return { x: Kv(r), y: Kv(s), get direction() {
      const { x: u, y: c } = this, [d, f] = [Math.abs(u), Math.abs(c)];
      return d > f && u >= 0 ? "right" : d > f && u <= 0 ? "left" : f > d && c >= 0 ? "down" : f > d && c <= 0 ? "up" : nD();
    } };
  }
  return { addMovement: t, endTouch: n, getVelocity: a };
}
function nD() {
  throw new Error();
}
function aD(e) {
  let { el: t, isActive: n, isTemporary: a, width: l, touchless: o, position: i } = e;
  It(() => {
    window.addEventListener("touchstart", w, { passive: true }), window.addEventListener("touchmove", I, { passive: false }), window.addEventListener("touchend", V, { passive: true });
  }), jt(() => {
    window.removeEventListener("touchstart", w), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", V);
  });
  const r = _(() => ["left", "right"].includes(i.value)), { addMovement: s, endTouch: u, getVelocity: c } = tD();
  let d = false;
  const f = re(false), v = re(0), p = re(0);
  let m;
  function h(y, C) {
    return (i.value === "left" ? y : i.value === "right" ? document.documentElement.clientWidth - y : i.value === "top" ? y : i.value === "bottom" ? document.documentElement.clientHeight - y : El()) - (C ? l.value : 0);
  }
  function b(y) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const x = i.value === "left" ? (y - p.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - y - p.value) / l.value : i.value === "top" ? (y - p.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - y - p.value) / l.value : El();
    return C ? nt(x) : x;
  }
  function w(y) {
    if (o.value) return;
    const C = y.changedTouches[0].clientX, x = y.changedTouches[0].clientY, T = 25, P = i.value === "left" ? C < T : i.value === "right" ? C > document.documentElement.clientWidth - T : i.value === "top" ? x < T : i.value === "bottom" ? x > document.documentElement.clientHeight - T : El(), M = n.value && (i.value === "left" ? C < l.value : i.value === "right" ? C > document.documentElement.clientWidth - l.value : i.value === "top" ? x < l.value : i.value === "bottom" ? x > document.documentElement.clientHeight - l.value : El());
    (P || M || n.value && a.value) && (m = [C, x], p.value = h(r.value ? C : x, n.value), v.value = b(r.value ? C : x), d = p.value > -20 && p.value < 80, u(y), s(y));
  }
  function I(y) {
    const C = y.changedTouches[0].clientX, x = y.changedTouches[0].clientY;
    if (d) {
      if (!y.cancelable) {
        d = false;
        return;
      }
      const P = Math.abs(C - m[0]), M = Math.abs(x - m[1]);
      (r.value ? P > M && P > 3 : M > P && M > 3) ? (f.value = true, d = false) : (r.value ? M : P) > 3 && (d = false);
    }
    if (!f.value) return;
    y.preventDefault(), s(y);
    const T = b(r.value ? C : x, false);
    v.value = Math.max(0, Math.min(1, T)), T > 1 ? p.value = h(r.value ? C : x, true) : T < 0 && (p.value = h(r.value ? C : x, false));
  }
  function V(y) {
    if (d = false, !f.value) return;
    s(y), f.value = false;
    const C = c(y.changedTouches[0].identifier), x = Math.abs(C.x), T = Math.abs(C.y);
    (r.value ? x > T && x > 400 : T > x && T > 3) ? n.value = C.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || El()) : n.value = v.value > 0.5;
  }
  const k = _(() => f.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : El(), transition: "none" } : void 0);
  return Lt(f, () => {
    var _a2, _b2;
    const y = ((_a2 = t.value) == null ? void 0 : _a2.style.transform) ?? null, C = ((_b2 = t.value) == null ? void 0 : _b2.style.transition) ?? null;
    mt(() => {
      var _a3, _b3, _c2, _d2;
      (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transform", ((_a3 = k.value) == null ? void 0 : _a3.transform) || "none"), (_d2 = t.value) == null ? void 0 : _d2.style.setProperty("transition", ((_c2 = k.value) == null ? void 0 : _c2.transition) || null);
    }), St(() => {
      var _a3, _b3;
      (_a3 = t.value) == null ? void 0 : _a3.style.setProperty("transform", y), (_b3 = t.value) == null ? void 0 : _b3.style.setProperty("transition", C);
    });
  }), { isDragging: f, dragProgress: v, dragStyles: k };
}
function El() {
  throw new Error();
}
const lD = ["start", "end", "left", "right", "top", "bottom"], oD = j({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: true }, image: String, temporary: Boolean, persistent: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => lD.includes(e) }, sticky: Boolean, ...Ut(), ...xe(), ...Qc(), ...Sl({ mobile: null }), ...Vt(), ...xl(), ...dt(), ...ze(Sy(), ["disableInitialFocus"]), ...Re({ tag: "nav" }), ...Ye() }, "VNavigationDrawer"), iD = ee()({ name: "VNavigationDrawer", props: oD(), emits: { "update:modelValue": (e) => true, "update:rail": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { isRtl: o } = Pt(), { themeClasses: i } = qe(e), { borderClasses: r } = tn(e), { backgroundColorClasses: s, backgroundColorStyles: u } = Je(() => e.color), { elevationClasses: c } = At(e), { displayClasses: d, mobile: f } = kn(e), { roundedClasses: v } = gt(e), p = Mh(), m = Ce(e, "modelValue", null, (F) => !!F), { ssrBootStyles: h } = wl(), { scopeId: b } = Vl(), w = O(), I = re(false), { runOpenDelay: V, runCloseDelay: k } = ed(e, (F) => {
    I.value = F;
  }), y = _(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), C = _(() => iu(e.location, o.value)), x = B(() => e.persistent), T = _(() => !e.permanent && (f.value || e.temporary)), P = _(() => e.sticky && !T.value && C.value !== "bottom");
  xy(e, { isActive: m, localTop: T, contentEl: w }), Lt(() => e.expandOnHover && e.rail != null, () => {
    se(I, (F) => a("update:rail", !F));
  }), Lt(() => !e.disableResizeWatcher, () => {
    se(T, (F) => !e.permanent && Be(() => m.value = !F));
  }), Lt(() => !e.disableRouteWatcher && !!p, () => {
    se(p.currentRoute, () => T.value && (m.value = false));
  }), se(() => e.permanent, (F) => {
    F && (m.value = true);
  }), e.modelValue == null && !T.value && (m.value = e.permanent || !f.value);
  const { isDragging: M, dragProgress: D } = aD({ el: w, isActive: m, isTemporary: T, width: y, touchless: B(() => e.touchless), position: C }), E = _(() => {
    const F = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : y.value;
    return M.value ? F * D.value : F;
  }), { layoutItemStyles: A, layoutItemScrimStyles: R } = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: C, layoutSize: E, elementSize: y, active: sl(m), disableTransitions: B(() => M.value), absolute: _(() => e.absolute || P.value && typeof G.value != "string") }), { isStuck: G, stickyStyles: N } = JA({ rootEl: w, isSticky: P, layoutItemStyles: A }), Y = Je(() => typeof e.scrim == "string" ? e.scrim : null), H = _(() => ({ ...M.value ? { opacity: D.value * 0.2, transition: "none" } : void 0, ...R.value }));
  return yt({ VList: { bgColor: "transparent" } }), ae(() => {
    const F = l.image || e.image;
    return S(be, null, [g(e.tag, q({ ref: w, onMouseenter: V, onMouseleave: k, class: ["v-navigation-drawer", `v-navigation-drawer--${C.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": I.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": T.value, "v-navigation-drawer--persistent": x.value, "v-navigation-drawer--active": m.value, "v-navigation-drawer--sticky": P.value }, i.value, s.value, r.value, d.value, c.value, v.value, e.class], style: [u.value, A.value, h.value, N.value, e.style], inert: !m.value }, b, n), { default: () => {
      var _a2, _b2, _c2;
      return [F && S("div", { key: "image", class: "v-navigation-drawer__img" }, [l.image ? g(Fe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { alt: "", cover: true, height: "inherit", src: e.image } } }, l.image) : g(ga, { key: "image-img", alt: "", cover: true, height: "inherit", src: e.image }, null)]), l.prepend && S("div", { class: "v-navigation-drawer__prepend" }, [(_a2 = l.prepend) == null ? void 0 : _a2.call(l)]), S("div", { class: "v-navigation-drawer__content" }, [(_b2 = l.default) == null ? void 0 : _b2.call(l)]), l.append && S("div", { class: "v-navigation-drawer__append" }, [(_c2 = l.append) == null ? void 0 : _c2.call(l)])];
    } }), g(Ra, { name: "fade-transition" }, { default: () => [T.value && (M.value || m.value) && !!e.scrim && S("div", q({ class: ["v-navigation-drawer__scrim", Y.backgroundColorClasses.value], style: [H.value, Y.backgroundColorStyles.value], onClick: () => {
      x.value || (m.value = false);
    } }, b), null)] })]);
  }), { isStuck: G };
} }), rD = en({ name: "VNoSsr", setup(e, t) {
  let { slots: n } = t;
  const a = ky();
  return () => {
    var _a2;
    return a.value && ((_a2 = n.default) == null ? void 0 : _a2.call(n));
  };
} }), sD = 50, uD = 500;
function cD(e) {
  let { toggleUpDown: t } = e, n = -1, a = -1;
  St(o);
  function l(r) {
    o(), i(r), window.addEventListener("pointerup", o), document.addEventListener("blur", o), n = window.setTimeout(() => {
      a = window.setInterval(() => i(r), sD);
    }, uD);
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
const dD = j({ controlVariant: { type: String, default: "default" }, inset: Boolean, hideInput: Boolean, modelValue: { type: Number, default: null }, min: { type: Number, default: Number.MIN_SAFE_INTEGER }, max: { type: Number, default: Number.MAX_SAFE_INTEGER }, step: { type: Number, default: 1 }, precision: { type: Number, default: 0 }, minFractionDigits: { type: Number, default: null }, decimalSeparator: { type: String, validator: (e) => !e || e.length === 1 }, ...ze(ki(), ["modelValue", "validationValue"]) }, "VNumberInput"), fD = ee()({ name: "VNumberInput", props: { ...dD() }, emits: { "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = O(), { holdStart: l, holdStop: o } = cD({ toggleUpDown: M }), i = uo(e), r = _(() => i.isDisabled.value || i.isReadonly.value), s = re(e.focused), { decimalSeparator: u } = ot(), c = _(() => {
    var _a2;
    return ((_a2 = e.decimalSeparator) == null ? void 0 : _a2[0]) || u.value;
  });
  function d(L) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, ie = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const Se = U == null ? String(L) : L.toFixed(U);
    if (s.value && ie) return Number(Se).toString().replace(".", c.value);
    if (e.minFractionDigits === null || U !== null && U < e.minFractionDigits) return Se.replace(".", c.value);
    let [K, fe] = Se.split(".");
    return fe = (fe ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0+$`, "g"), ""), [K, fe].filter(Boolean).join(c.value);
  }
  const f = Ce(e, "modelValue", null, (L) => L ?? null, (L) => L == null ? L ?? null : nt(Number(L), e.min, e.max)), v = re(null), p = re(null);
  se(f, (L) => {
    var _a2;
    s.value && !r.value && Number((_a2 = v.value) == null ? void 0 : _a2.replace(c.value, ".")) === L || (L == null ? (v.value = null, p.value = null) : isNaN(L) || (v.value = d(L), p.value = Number(v.value.replace(c.value, "."))));
  }, { immediate: true });
  const m = _({ get: () => v.value, set(L) {
    if (L === null || L === "") {
      f.value = null, v.value = null, p.value = null;
      return;
    }
    const U = Number(L.replace(c.value, "."));
    isNaN(U) || (v.value = L, p.value = U, U <= e.max && U >= e.min && (f.value = U));
  } }), h = _(() => {
    var _a2;
    if (p.value === null) return false;
    const L = Number((_a2 = v.value) == null ? void 0 : _a2.replace(c.value, "."));
    return L !== nt(L, e.min, e.max);
  }), b = _(() => r.value ? false : (f.value ?? 0) + e.step <= e.max), w = _(() => r.value ? false : (f.value ?? 0) - e.step >= e.min), I = _(() => e.hideInput ? "stacked" : e.controlVariant), V = B(() => I.value === "split" ? "$plus" : "$collapse"), k = B(() => I.value === "split" ? "$minus" : "$expand"), y = B(() => I.value === "split" ? "default" : "small"), C = B(() => I.value === "stacked" ? "auto" : "100%"), x = { props: { onClick: A, onPointerup: R, onPointerdown: G, onPointercancel: R } }, T = { props: { onClick: A, onPointerup: R, onPointerdown: N, onPointercancel: R } };
  se(() => e.precision, () => H()), se(() => e.minFractionDigits, () => H()), It(() => {
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
      m.value = d(nt(0, e.min, e.max));
      return;
    }
    let U = Math.max(P(f.value), P(e.step));
    e.precision != null && (U = Math.max(U, e.precision)), L ? b.value && (m.value = d(f.value + e.step, U)) : w.value && (m.value = d(f.value - e.step, U));
  }
  function D(L) {
    var _a2;
    if (!L.data) return;
    const U = L.target, { value: ie, selectionStart: Se, selectionEnd: K } = U ?? {}, fe = ie ? ie.slice(0, Se) + L.data + ie.slice(K) : L.data, De = D0(fe, e.precision, c.value);
    if (new RegExp(`^-?\\d*${ir(c.value)}?\\d*$`).test(fe) || (L.preventDefault(), U.value = De, Be(() => m.value = De)), e.precision != null) {
      if (((_a2 = fe.split(c.value)[1]) == null ? void 0 : _a2.length) > e.precision) {
        L.preventDefault(), U.value = De, Be(() => m.value = De);
        const _e = (Se ?? 0) + L.data.length;
        U.setSelectionRange(_e, _e);
      }
      e.precision === 0 && fe.endsWith(c.value) && (L.preventDefault(), U.value = De, Be(() => m.value = De));
    }
  }
  async function E(L) {
    ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(L.key) || L.ctrlKey || ["ArrowDown", "ArrowUp"].includes(L.key) && (L.preventDefault(), L.stopPropagation(), Y(), await Be(), L.key === "ArrowDown" ? M(false) : M());
  }
  function A(L) {
    L.stopPropagation();
  }
  function R(L) {
    var _a2;
    (_a2 = L.currentTarget) == null ? void 0 : _a2.releasePointerCapture(L.pointerId), L.preventDefault(), o();
  }
  function G(L) {
    var _a2;
    (_a2 = L.currentTarget) == null ? void 0 : _a2.setPointerCapture(L.pointerId), L.preventDefault(), L.stopPropagation(), l("up");
  }
  function N(L) {
    var _a2;
    (_a2 = L.currentTarget) == null ? void 0 : _a2.setPointerCapture(L.pointerId), L.preventDefault(), L.stopPropagation(), l("down");
  }
  function Y() {
    if (r.value || !a.value) return;
    const L = a.value.value, U = Number(L.replace(c.value, "."));
    L && !isNaN(U) ? m.value = d(nt(U, e.min, e.max)) : m.value = null;
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
    const { modelValue: L, type: U, ...ie } = qn.filterProps(e);
    function Se() {
      return n.increment ? g(Fe, { key: "increment-defaults", defaults: { VBtn: { disabled: !b.value, height: C.value, size: y.value, icon: V.value, variant: "text" } } }, { default: () => [n.increment(x)] }) : g(Ue, { "aria-hidden": "true", "data-testid": "increment", disabled: !b.value, height: C.value, icon: V.value, key: "increment-btn", onClick: A, onPointerdown: G, onPointerup: R, onPointercancel: R, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function K() {
      return n.decrement ? g(Fe, { key: "decrement-defaults", defaults: { VBtn: { disabled: !w.value, height: C.value, size: y.value, icon: k.value, variant: "text" } } }, { default: () => [n.decrement(T)] }) : g(Ue, { "aria-hidden": "true", "data-testid": "decrement", disabled: !w.value, height: C.value, icon: k.value, key: "decrement-btn", onClick: A, onPointerdown: N, onPointerup: R, onPointercancel: R, size: y.value, variant: "text", tabindex: "-1" }, null);
    }
    function fe() {
      return S("div", { class: "v-number-input__control" }, [K(), g(pn, { vertical: I.value !== "stacked" }, null), Se()]);
    }
    function De() {
      return !e.hideInput && !e.inset ? g(pn, { vertical: true }, null) : void 0;
    }
    const _e = I.value === "split" ? S("div", { class: "v-number-input__control" }, [g(pn, { vertical: true }, null), Se()]) : e.reverse || I.value === "hidden" ? void 0 : S(be, null, [De(), fe()]), ye = n["append-inner"] || _e, $ = I.value === "split" ? S("div", { class: "v-number-input__control" }, [K(), g(pn, { vertical: true }, null)]) : e.reverse && I.value !== "hidden" ? S(be, null, [fe(), De()]) : void 0, z = n["prepend-inner"] || $;
    return g(qn, q({ ref: a }, ie, { modelValue: m.value, "onUpdate:modelValue": (Q) => m.value = Q, focused: s.value, "onUpdate:focused": (Q) => s.value = Q, validationValue: f.value, error: e.error || h.value || void 0, onBeforeinput: D, onFocus: Z, onBlur: W, onKeydown: E, class: ["v-number-input", { "v-number-input--default": I.value === "default", "v-number-input--hide-input": e.hideInput, "v-number-input--inset": e.inset, "v-number-input--reverse": e.reverse, "v-number-input--split": I.value === "split", "v-number-input--stacked": I.value === "stacked" }, e.class], style: e.style, inputmode: "decimal" }), { ...n, "append-inner": ye ? function() {
      var _a2;
      for (var Q = arguments.length, ce = new Array(Q), oe = 0; oe < Q; oe++) ce[oe] = arguments[oe];
      return S(be, null, [(_a2 = n["append-inner"]) == null ? void 0 : _a2.call(n, ...ce), _e]);
    } : void 0, "prepend-inner": z ? function() {
      var _a2;
      for (var Q = arguments.length, ce = new Array(Q), oe = 0; oe < Q; oe++) ce[oe] = arguments[oe];
      return S(be, null, [$, (_a2 = n["prepend-inner"]) == null ? void 0 : _a2.call(n, ...ce)]);
    } : void 0 });
  }), Dt({}, a);
} }), vD = j({ autofocus: Boolean, divider: String, focusAll: Boolean, label: { type: String, default: "$vuetify.input.otp" }, length: { type: [Number, String], default: 6 }, masked: Boolean, modelValue: { type: [Number, String], default: void 0 }, placeholder: String, type: { type: String, default: "number" }, ...bt(), ...Ct(), ...pi(), ...on(xi({ variant: "outlined" }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"]) }, "VOtpInput"), mD = ee()({ name: "VOtpInput", props: vD(), emits: { finish: (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const { densityClasses: o } = Nt(e), { dimensionStyles: i } = _t(e), { isFocused: r, focus: s, blur: u } = wa(e), c = Ce(e, "modelValue", "", (M) => M == null ? [] : String(M).split(""), (M) => M.join("")), { t: d } = ot(), f = _(() => Number(e.length)), v = _(() => Array(f.value).fill(0)), p = O(-1), m = O(), h = O([]), b = _(() => h.value[p.value]);
  let w = false;
  Lt(() => e.autofocus, () => {
    const M = Ul();
    M.run(() => {
      const { intersectionRef: D, isIntersecting: E } = vi();
      mt(() => {
        D.value = h.value[0];
      }), se(E, (A) => {
        var _a2;
        A && ((_a2 = D.value) == null ? void 0 : _a2.focus(), M.stop());
      });
    });
  });
  function I() {
    if (P(b.value.value)) {
      b.value.value = "";
      return;
    }
    if (w) return;
    const M = c.value.slice(), D = b.value.value;
    M[p.value] = D;
    let E = null;
    p.value > c.value.length ? E = c.value.length + 1 : p.value + 1 !== f.value && (E = "next"), c.value = M, E && ll(m.value, E);
  }
  function V() {
    w = false, I();
  }
  function k(M) {
    const D = c.value.slice(), E = p.value;
    let A = null;
    ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(M.key) && (M.preventDefault(), M.key === "ArrowLeft" ? A = "prev" : M.key === "ArrowRight" ? A = "next" : ["Backspace", "Delete"].includes(M.key) && (D[p.value] = "", c.value = D, p.value > 0 && M.key === "Backspace" ? A = "prev" : requestAnimationFrame(() => {
      var _a2;
      (_a2 = h.value[E]) == null ? void 0 : _a2.select();
    })), requestAnimationFrame(() => {
      A != null && ll(m.value, A);
    }));
  }
  function y(M, D) {
    var _a2;
    D.preventDefault(), D.stopPropagation();
    const E = ((_a2 = D == null ? void 0 : D.clipboardData) == null ? void 0 : _a2.getData("Text").trim().slice(0, f.value)) ?? "", A = E.length - 1 === -1 ? M : E.length - 1;
    P(E) || (c.value = E.split(""), p.value = A);
  }
  function C() {
    c.value = [];
  }
  function x(M, D) {
    s(), p.value = D;
  }
  function T() {
    u(), p.value = -1;
  }
  function P(M) {
    return e.type === "number" && /[^0-9]/g.test(M);
  }
  return yt({ VField: { color: B(() => e.color), bgColor: B(() => e.color), baseColor: B(() => e.baseColor), disabled: B(() => e.disabled), error: B(() => e.error), variant: B(() => e.variant), rounded: B(() => e.rounded) } }, { scoped: true }), se(c, (M) => {
    M.length === f.value && a("finish", M.join(""));
  }, { deep: true }), se(p, (M) => {
    M < 0 || Be(() => {
      var _a2;
      (_a2 = h.value[M]) == null ? void 0 : _a2.select();
    });
  }), ae(() => {
    var _a2;
    const [M, D] = Jn(n);
    return S("div", q({ class: ["v-otp-input", { "v-otp-input--divided": !!e.divider }, o.value, e.class], style: [e.style] }, M), [S("div", { ref: m, class: "v-otp-input__content", style: me([i.value]) }, [v.value.map((E, A) => S(be, null, [e.divider && A !== 0 && S("span", { class: "v-otp-input__divider" }, [e.divider]), g(za, { focused: r.value && e.focusAll || p.value === A, key: A }, { ...l, loader: void 0, default: () => S("input", { ref: (R) => h.value[A] = R, "aria-label": d(e.label, A + 1), autofocus: A === 0 && e.autofocus, autocomplete: "one-time-code", class: ne(["v-otp-input__field"]), disabled: e.disabled, inputmode: e.type === "number" ? "numeric" : "text", min: e.type === "number" ? 0 : void 0, maxlength: A === 0 ? f.value : "1", placeholder: e.placeholder, type: e.masked ? "password" : e.type === "number" ? "text" : e.type, value: c.value[A], onInput: I, onFocus: (R) => x(R, A), onBlur: T, onKeydown: k, onCompositionstart: () => w = true, onCompositionend: V, onPaste: (R) => y(A, R) }, null) })])), S("input", q({ class: "v-otp-input-input", type: "hidden" }, D, { value: c.value.join("") }), null), g(Xn, { contained: true, contentClass: "v-otp-input__loader", modelValue: !!e.loading, persistent: true }, { default: () => {
      var _a3;
      return [((_a3 = l.loader) == null ? void 0 : _a3.call(l)) ?? g(Oa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, size: "24", width: "2" }, null)];
    } }), (_a2 = l.default) == null ? void 0 : _a2.call(l)])]);
  }), { blur: () => {
    var _a2;
    (_a2 = h.value) == null ? void 0 : _a2.some((M) => M.blur());
  }, focus: () => {
    var _a2;
    (_a2 = h.value) == null ? void 0 : _a2[0].focus();
  }, reset: C, isFocused: r };
} });
function gD(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const hD = j({ scale: { type: [Number, String], default: 0.5 }, ...xe() }, "VParallax"), yD = ee()({ name: "VParallax", props: hD(), setup(e, t) {
  let { slots: n } = t;
  const { intersectionRef: a, isIntersecting: l } = vi(), { resizeRef: o, contentRect: i } = In(), { height: r } = kn(), s = O();
  mt(() => {
    var _a2;
    a.value = o.value = (_a2 = s.value) == null ? void 0 : _a2.$el;
  });
  let u;
  se(l, (v) => {
    v ? (u = $r(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, { passive: true }), f()) : u.removeEventListener("scroll", f);
  }), jt(() => {
    u == null ? void 0 : u.removeEventListener("scroll", f);
  }), se(r, f), se(() => {
    var _a2;
    return (_a2 = i.value) == null ? void 0 : _a2.height;
  }, f);
  const c = _(() => 1 - nt(Number(e.scale)));
  let d = -1;
  function f() {
    !l.value || Yn() || (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var _a2;
      const v = ((_a2 = s.value) == null ? void 0 : _a2.$el).querySelector(".v-img__img");
      if (!v) return;
      const p = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, m = u instanceof Document ? window.scrollY : u.scrollTop, h = a.value.getBoundingClientRect().top + m, b = i.value.height, w = h + (b - p) / 2, I = gD((m - w) * c.value), V = Math.max(1, (c.value * (p - b) + b) / b);
      v.style.setProperty("transform", `translateY(${I}px) scale(${V})`);
    }));
  }
  return ae(() => g(ga, { class: ne(["v-parallax", { "v-parallax--active": l.value }, e.class]), style: me(e.style), ref: s, cover: true, onLoadstart: f, onLoad: f }, n)), {};
} }), bD = j({ ...jr({ falseIcon: "$radioOff", trueIcon: "$radioOn" }) }, "VRadio"), pD = ee()({ name: "VRadio", props: bD(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = Na.filterProps(e);
    return g(Na, q(a, { class: ["v-radio", e.class], style: e.style, type: "radio" }), n);
  }), {};
} }), SD = j({ height: { type: [Number, String], default: "auto" }, ...ze(Ca(), ["direction"]), ...ze(jc(), ["multiple"]), trueIcon: { type: Ie, default: "$radioOn" }, falseIcon: { type: Ie, default: "$radioOff" }, type: { type: String, default: "radio" } }, "VRadioGroup"), xD = ee()({ name: "VRadioGroup", inheritAttrs: false, props: SD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Rt(), o = _(() => e.id || `radio-group-${l}`), i = Ce(e, "modelValue"), r = O();
  return ae(() => {
    const [s, u] = Jn(n), c = Wt.filterProps(e), d = Na.filterProps(e), f = a.label ? a.label({ label: e.label, props: { for: o.value } }) : e.label;
    return g(Wt, q({ ref: r, class: ["v-radio-group", e.class], style: e.style }, s, c, { modelValue: i.value, "onUpdate:modelValue": (v) => i.value = v, id: o.value }), { ...a, default: (v) => {
      let { id: p, messagesId: m, isDisabled: h, isReadonly: b } = v;
      return S(be, null, [f && g(so, { id: p.value }, { default: () => [f] }), g(jh, q(d, { id: p.value, "aria-describedby": m.value, defaultsTarget: "VRadio", trueIcon: e.trueIcon, falseIcon: e.falseIcon, type: e.type, disabled: h.value, readonly: b.value, "aria-labelledby": f ? p.value : void 0, multiple: false }, u, { modelValue: i.value, "onUpdate:modelValue": (w) => i.value = w }), a)]);
    } });
  }), Dt({}, r);
} }), kD = j({ ...pi(), ...Ca(), ...db(), strict: Boolean, modelValue: { type: Array, default: () => [0, 0] } }, "VRangeSlider"), wD = ee()({ name: "VRangeSlider", inheritAttrs: false, props: kD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, end: (e) => true, start: (e) => true }, setup(e, t) {
  let { slots: n, emit: a, attrs: l } = t;
  const o = O(), i = O(), r = O(), { rtlClasses: s } = Pt();
  function u(D) {
    if (!o.value || !i.value) return;
    const E = Au(D, o.value.$el, e.direction), A = Au(D, i.value.$el, e.direction), R = Math.abs(E), G = Math.abs(A);
    return R < G || R === G && E < 0 ? o.value.$el : i.value.$el;
  }
  const c = fb(e), d = Ce(e, "modelValue", void 0, (D) => (D == null ? void 0 : D.length) ? D.map((E) => c.roundValue(E)) : [0, 0]), { activeThumbRef: f, hasLabels: v, max: p, min: m, mousePressed: h, onSliderMousedown: b, onSliderTouchstart: w, position: I, trackContainerRef: V, disabled: k, readonly: y } = vb({ props: e, steps: c, onSliderStart: () => {
    var _a2;
    if (k.value || y.value) {
      (_a2 = f.value) == null ? void 0 : _a2.blur();
      return;
    }
    a("start", d.value);
  }, onSliderEnd: (D) => {
    var _a2, _b2;
    let { value: E } = D;
    if (k.value || y.value) (_a2 = f.value) == null ? void 0 : _a2.blur();
    else {
      const A = f.value === ((_b2 = o.value) == null ? void 0 : _b2.$el) ? [E, d.value[1]] : [d.value[0], E];
      !e.strict && A[0] < A[1] && (d.value = A);
    }
    a("end", d.value);
  }, onSliderMove: (D) => {
    var _a2, _b2, _c2, _d2, _e;
    let { value: E } = D;
    const [A, R] = d.value;
    if (k.value || y.value) {
      (_a2 = f.value) == null ? void 0 : _a2.blur();
      return;
    }
    !e.strict && A === R && A !== m.value && (f.value = E > A ? (_b2 = i.value) == null ? void 0 : _b2.$el : (_c2 = o.value) == null ? void 0 : _c2.$el, (_d2 = f.value) == null ? void 0 : _d2.focus()), f.value === ((_e = o.value) == null ? void 0 : _e.$el) ? d.value = [Math.min(E, R), R] : d.value = [A, Math.max(A, E)];
  }, getActiveThumb: u }), { isFocused: C, focus: x, blur: T } = wa(e), P = _(() => I(d.value[0])), M = _(() => I(d.value[1]));
  return ae(() => {
    const D = Wt.filterProps(e), [E, A] = Jn(l), R = !!(e.label || n.label || n.prepend);
    return g(Wt, q({ class: ["v-slider", "v-range-slider", { "v-slider--has-labels": !!n["tick-label"] || v.value, "v-slider--focused": C.value, "v-slider--pressed": h.value, "v-slider--disabled": k.value }, s.value, e.class], style: e.style, ref: r }, D, E, { focused: C.value }), { ...n, prepend: R ? (G) => {
      var _a2, _b2;
      return S(be, null, [((_a2 = n.label) == null ? void 0 : _a2.call(n, G)) ?? (e.label ? g(so, { class: "v-slider__label", text: e.label }, null) : void 0), (_b2 = n.prepend) == null ? void 0 : _b2.call(n, G)]);
    } : void 0, default: (G) => {
      var _a2, _b2;
      let { id: N, messagesId: Y } = G;
      return S("div", { class: "v-slider__container", onMousedown: y.value ? void 0 : b, onTouchstartPassive: y.value ? void 0 : w }, [S("input", { id: `${N.value}_start`, name: e.name || N.value, disabled: k.value, readonly: y.value, tabindex: "-1", value: d.value[0] }, null), S("input", { id: `${N.value}_stop`, name: e.name || N.value, disabled: k.value, readonly: y.value, tabindex: "-1", value: d.value[1] }, null), g(mb, { ref: V, start: P.value, stop: M.value }, { "tick-label": n["tick-label"] }), g(Du, q({ ref: o, "aria-describedby": Y.value, focused: C && f.value === ((_a2 = o.value) == null ? void 0 : _a2.$el), modelValue: d.value[0], "onUpdate:modelValue": (H) => d.value = [H, d.value[1]], onFocus: (H) => {
        var _a3, _b3, _c2, _d2;
        x(), f.value = (_a3 = o.value) == null ? void 0 : _a3.$el, p.value !== m.value && d.value[0] === d.value[1] && d.value[1] === m.value && H.relatedTarget !== ((_b3 = i.value) == null ? void 0 : _b3.$el) && ((_c2 = o.value) == null ? void 0 : _c2.$el.blur(), (_d2 = i.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: m.value, max: d.value[1], position: P.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] }), g(Du, q({ ref: i, "aria-describedby": Y.value, focused: C && f.value === ((_b2 = i.value) == null ? void 0 : _b2.$el), modelValue: d.value[1], "onUpdate:modelValue": (H) => d.value = [d.value[0], H], onFocus: (H) => {
        var _a3, _b3, _c2, _d2;
        x(), f.value = (_a3 = i.value) == null ? void 0 : _a3.$el, p.value !== m.value && d.value[0] === d.value[1] && d.value[0] === p.value && H.relatedTarget !== ((_b3 = o.value) == null ? void 0 : _b3.$el) && ((_c2 = i.value) == null ? void 0 : _c2.$el.blur(), (_d2 = o.value) == null ? void 0 : _d2.$el.focus());
      }, onBlur: () => {
        T(), f.value = void 0;
      }, min: d.value[0], max: p.value, position: M.value, ripple: e.ripple }, A), { "thumb-label": n["thumb-label"] })]);
    } });
  }), Dt({ focus: () => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.$el.focus();
  } }, r);
} }), CD = j({ name: String, itemAriaLabel: { type: String, default: "$vuetify.rating.ariaLabel.item" }, activeColor: String, color: String, clearable: Boolean, disabled: Boolean, emptyIcon: { type: Ie, default: "$ratingEmpty" }, fullIcon: { type: Ie, default: "$ratingFull" }, halfIncrements: Boolean, hover: Boolean, length: { type: [Number, String], default: 5 }, readonly: Boolean, modelValue: { type: [Number, String], default: 0 }, itemLabels: Array, itemLabelPosition: { type: String, default: "top", validator: (e) => ["top", "bottom"].includes(e) }, ripple: Boolean, ...xe(), ...bt(), ...ta(), ...Re(), ...Ye() }, "VRating"), _D = ee()({ name: "VRating", props: CD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { t: a } = ot(), { themeClasses: l } = qe(e), o = O(), i = Ce(e, "modelValue"), r = _(() => nt(parseFloat(i.value), 0, Number(e.length))), s = _(() => jn(Number(e.length), 1)), u = _(() => s.value.flatMap((V) => e.halfIncrements ? [V - 0.5, V] : [V])), c = re(-1), d = _(() => u.value.map((V) => {
    const k = e.hover && c.value > -1, y = r.value >= V, C = c.value >= V, T = (k ? C : y) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, M = y || C ? P : e.color;
    return { isFilled: y, isHovered: C, icon: T, color: M };
  })), f = _(() => [0, ...u.value].map((V) => {
    function k() {
      c.value = V;
    }
    function y() {
      c.value = -1;
    }
    function C() {
      e.disabled || e.readonly || (i.value = r.value === V && e.clearable ? 0 : V);
    }
    return { onMouseenter: e.hover ? k : void 0, onMouseleave: e.hover ? y : void 0, onClick: C };
  })), v = _(() => e.halfIncrements ? 1 + Math.floor(Math.max(0, Number(i.value ?? 0) - 0.5)) * 2 : Math.floor(Math.max(0, Number(i.value ?? 0) - 1)));
  function p() {
    var _a2, _b2;
    (_b2 = (_a2 = o.value) == null ? void 0 : _a2.querySelector('[tabindex="0"]')) == null ? void 0 : _b2.focus();
  }
  function m(V) {
    if (e.disabled || e.readonly || V.ctrlKey || V.altKey) return;
    const k = e.halfIncrements ? 0.5 : 1;
    if (V.key === "ArrowRight") {
      const y = Math.min(Number(e.length), Number(i.value ?? 0) + k);
      i.value = y, Be(() => p());
    }
    if (V.key === "ArrowLeft") {
      const y = Math.max(0, Number(i.value ?? 0) - k);
      i.value = y, Be(() => p());
    }
  }
  const h = Rt(), b = _(() => e.name ?? `v-rating-${h}`);
  function w(V) {
    var _a2, _b2;
    let { value: k, index: y, showStar: C = true } = V;
    const { onMouseenter: x, onMouseleave: T, onClick: P } = f.value[y + 1], M = `${b.value}-${String(k).replace(".", "-")}`, D = y === v.value, E = { color: (_a2 = d.value[y]) == null ? void 0 : _a2.color, density: e.density, disabled: e.disabled, icon: (_b2 = d.value[y]) == null ? void 0 : _b2.icon, ripple: e.ripple, size: e.size, variant: "plain", tabindex: D ? 0 : -1, onKeydown: m };
    return S(be, null, [S("label", { for: M, class: ne({ "v-rating__item--half": e.halfIncrements && k % 1 > 0, "v-rating__item--full": e.halfIncrements && k % 1 === 0 }), onMouseenter: x, onMouseleave: T, onClick: P }, [S("span", { class: "v-rating__hidden" }, [a(e.itemAriaLabel, k, e.length)]), C ? n.item ? n.item({ ...d.value[y], props: E, value: k, index: y, rating: r.value }) : g(Ue, q({ "aria-label": a(e.itemAriaLabel, k, e.length) }, E), null) : void 0]), S("input", { class: "v-rating__hidden", name: b.value, id: M, type: "radio", value: k, checked: r.value === k, tabindex: -1, readonly: e.readonly, disabled: e.disabled }, null)]);
  }
  function I(V) {
    return n["item-label"] ? n["item-label"](V) : V.label ? S("span", null, [V.label]) : S("span", null, [Oe("\xA0")]);
  }
  return ae(() => {
    var _a2;
    const V = !!((_a2 = e.itemLabels) == null ? void 0 : _a2.length) || n["item-label"];
    return g(e.tag, { class: ne(["v-rating", { "v-rating--hover": e.hover, "v-rating--readonly": e.readonly }, l.value, e.class]), style: me(e.style), ref: o }, { default: () => [g(w, { value: 0, index: -1, showStar: false }, null), s.value.map((k, y) => {
      var _a3, _b2;
      return S("div", { class: "v-rating__wrapper" }, [V && e.itemLabelPosition === "top" ? I({ value: k, index: y, label: (_a3 = e.itemLabels) == null ? void 0 : _a3[y] }) : void 0, S("div", { class: "v-rating__item" }, [e.halfIncrements ? S(be, null, [g(w, { value: k - 0.5, index: y * 2 }, null), g(w, { value: k, index: y * 2 + 1 }, null)]) : g(w, { value: k, index: y }, null)]), V && e.itemLabelPosition === "bottom" ? I({ value: k, index: y, label: (_b2 = e.itemLabels) == null ? void 0 : _b2[y] }) : void 0]);
    })] });
  }), {};
} }), VD = { actions: "button@2", article: "heading, paragraph", avatar: "avatar", button: "button", card: "image, heading", "card-avatar": "image, list-item-avatar", chip: "chip", "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions", "date-picker-options": "text, avatar@2", "date-picker-days": "avatar@28", divider: "divider", heading: "heading", image: "image", "list-item": "text", "list-item-avatar": "avatar, text", "list-item-two-line": "sentences", "list-item-avatar-two-line": "avatar, sentences", "list-item-three-line": "paragraph", "list-item-avatar-three-line": "avatar, paragraph", ossein: "ossein", paragraph: "text@3", sentences: "text@2", subtitle: "text", table: "table-heading, table-thead, table-tbody, table-tfoot", "table-heading": "chip, text", "table-thead": "heading@6", "table-tbody": "table-row-divider@6", "table-row-divider": "table-row, divider", "table-row": "text@6", "table-tfoot": "text@2, avatar@2", text: "text" };
function ID(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return S("div", { class: ne(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]) }, [t]);
}
function Xv(e) {
  const [t, n] = e.split("@");
  return Array.from({ length: n }).map(() => ss(t));
}
function ss(e) {
  let t = [];
  if (!e) return t;
  const n = VD[e];
  if (e !== n) {
    if (e.includes(",")) return qv(e);
    if (e.includes("@")) return Xv(e);
    n.includes(",") ? t = qv(n) : n.includes("@") ? t = Xv(n) : n && t.push(ss(n));
  }
  return [ID(e, t)];
}
function qv(e) {
  return e.replace(/\s/g, "").split(",").map(ss);
}
const PD = j({ boilerplate: Boolean, color: String, loading: Boolean, loadingText: { type: String, default: "$vuetify.loading" }, type: { type: [String, Array], default: "ossein" }, ...Ct(), ...Vt(), ...Ye() }, "VSkeletonLoader"), TD = ee()({ name: "VSkeletonLoader", inheritAttrs: false, props: PD(), setup(e, t) {
  let { attrs: n, slots: a } = t;
  const { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.color), { dimensionStyles: i } = _t(e), { elevationClasses: r } = At(e), { themeClasses: s } = qe(e), { t: u } = ot(), c = _(() => ss(ct(e.type).join(",")));
  return ae(() => {
    var _a2;
    const d = !a.default || e.loading, f = e.boilerplate || !d ? {} : { ariaLive: "polite", ariaLabel: u(e.loadingText), role: "alert" };
    return d ? S("div", q({ class: ["v-skeleton-loader", { "v-skeleton-loader--boilerplate": e.boilerplate }, s.value, l.value, r.value], style: [o.value, i.value] }, f, n), [c.value]) : S(be, null, [(_a2 = a.default) == null ? void 0 : _a2.call(a)]);
  }), {};
} }), AD = ee()({ name: "VSlideGroupItem", props: _l(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = La(e, Uc);
  return () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: a.isSelected.value, select: a.select, toggle: a.toggle, selectedClass: a.selectedClass.value });
  };
} });
function DD(e) {
  const t = re(e());
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
  return St(a), { clear: a, time: t, start: o, reset: l };
}
const dp = j({ multiLine: Boolean, text: String, timer: [Boolean, String], timeout: { type: [Number, String], default: 5e3 }, vertical: Boolean, ...ea({ location: "bottom" }), ...io(), ...dt(), ...Cn(), ...Ye(), ...ze(Si({ transition: "v-snackbar-transition" }), ["persistent", "noClickAnimation", "retainFocus", "captureFocus", "disableInitialFocus", "scrim", "scrollStrategy", "stickToTarget", "viewportMargin"]) }, "VSnackbar"), ju = ee()({ name: "VSnackbar", props: dp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { positionClasses: l } = ro(e), { scopeId: o } = Vl(), { themeClasses: i } = qe(e), { colorClasses: r, colorStyles: s, variantClasses: u } = ka(e), { roundedClasses: c } = gt(e), d = DD(() => Number(e.timeout)), f = O(), v = O(), p = re(false), m = re(0), h = O(), b = Ge(Yo, void 0);
  Lt(() => !!b, () => {
    const M = xh();
    mt(() => {
      h.value = M.mainStyles.value;
    });
  }), se(a, I), se(() => e.timeout, I), It(() => {
    a.value && I();
  });
  let w = -1;
  function I() {
    d.reset(), window.clearTimeout(w);
    const M = Number(e.timeout);
    if (!a.value || M === -1) return;
    const D = wc(v.value);
    d.start(D), w = window.setTimeout(() => {
      a.value = false;
    }, M);
  }
  function V() {
    d.reset(), window.clearTimeout(w);
  }
  function k() {
    p.value = true, V();
  }
  function y() {
    p.value = false, I();
  }
  function C(M) {
    m.value = M.touches[0].clientY;
  }
  function x(M) {
    Math.abs(m.value - M.changedTouches[0].clientY) > 50 && (a.value = false);
  }
  function T() {
    p.value && y();
  }
  const P = _(() => e.location.split(" ").reduce((M, D) => (M[`v-snackbar--${D}`] = true, M), {}));
  return ae(() => {
    const M = Xn.filterProps(e), D = !!(n.default || n.text || e.text);
    return g(Xn, q({ ref: f, class: ["v-snackbar", { "v-snackbar--active": a.value, "v-snackbar--multi-line": e.multiLine && !e.vertical, "v-snackbar--timer": !!e.timer, "v-snackbar--vertical": e.vertical }, P.value, l.value, e.class], style: [h.value, e.style] }, M, { modelValue: a.value, "onUpdate:modelValue": (E) => a.value = E, contentProps: q({ class: ["v-snackbar__wrapper", i.value, r.value, c.value, u.value], style: [s.value], onPointerenter: k, onPointerleave: y }, M.contentProps), persistent: true, noClickAnimation: true, scrim: false, scrollStrategy: "none", _disableGlobalStack: true, onTouchstartPassive: C, onTouchend: x, onAfterLeave: T }, o), { default: () => {
      var _a2, _b2;
      return [xa(false, "v-snackbar"), e.timer && !p.value && S("div", { key: "timer", class: "v-snackbar__timer" }, [g(Hr, { ref: v, color: typeof e.timer == "string" ? e.timer : "info", max: e.timeout, modelValue: d.time.value }, null)]), D && S("div", { key: "content", class: "v-snackbar__content", role: "status", "aria-live": "polite" }, [((_a2 = n.text) == null ? void 0 : _a2.call(n)) ?? e.text, (_b2 = n.default) == null ? void 0 : _b2.call(n)]), n.actions && g(Fe, { defaults: { VBtn: { variant: "text", ripple: false, slim: true } } }, { default: () => [S("div", { class: "v-snackbar__actions" }, [n.actions({ isActive: a })])] })];
    }, activator: n.activator });
  }), Dt({}, f);
} }), MD = j({ closable: [Boolean, String], closeText: { type: String, default: "$vuetify.dismiss" }, modelValue: { type: Array, default: () => [] }, ...ze(dp(), ["modelValue"]) }, "VSnackbarQueue"), ED = ee()({ name: "VSnackbarQueue", props: MD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = ot(), o = re(false), i = re(false), r = re();
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
  const d = _(() => ({ color: typeof e.closable == "string" ? e.closable : void 0, text: l(e.closeText) }));
  ae(() => {
    const f = !!(e.closable || a.actions), { modelValue: v, ...p } = ju.filterProps(e);
    return S(be, null, [i.value && !!r.value && (a.default ? g(Fe, { defaults: { VSnackbar: r.value } }, { default: () => [a.default({ item: r.value })] }) : g(ju, q(p, r.value, { modelValue: o.value, "onUpdate:modelValue": (m) => o.value = m, onAfterLeave: s }), { text: a.text ? () => {
      var _a2;
      return (_a2 = a.text) == null ? void 0 : _a2.call(a, { item: r.value });
    } : void 0, actions: f ? () => S(be, null, [a.actions ? g(Fe, { defaults: { VBtn: d.value } }, { default: () => [a.actions({ item: r.value, props: { onClick: c } })] }) : g(Ue, q(d.value, { onClick: c }), null)]) : void 0 }))]);
  });
} }), fp = j({ autoDraw: Boolean, autoDrawDuration: [Number, String], autoDrawEasing: { type: String, default: "ease" }, color: String, gradient: { type: Array, default: () => [] }, gradientDirection: { type: String, validator: (e) => ["top", "bottom", "left", "right"].includes(e), default: "top" }, height: { type: [String, Number], default: 75 }, labels: { type: Array, default: () => [] }, labelSize: { type: [Number, String], default: 7 }, lineWidth: { type: [String, Number], default: 4 }, id: String, itemValue: { type: String, default: "value" }, modelValue: { type: Array, default: () => [] }, min: [String, Number], max: [String, Number], padding: { type: [String, Number], default: 8 }, showLabels: Boolean, smooth: [Boolean, String, Number], width: { type: [Number, String], default: 300 } }, "Line"), vp = j({ autoLineWidth: Boolean, ...fp() }, "VBarline"), Zv = ee()({ name: "VBarline", props: vp(), setup(e, t) {
  let { slots: n } = t;
  const a = Rt(), l = _(() => e.id || `barline-${a}`), o = _(() => Number(e.autoDrawDuration) || 500), i = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), r = _(() => parseFloat(e.lineWidth) || 4), s = _(() => Math.max(e.modelValue.length * r.value, Number(e.width))), u = _(() => ({ minX: 0, maxX: s.value, minY: 0, maxY: parseInt(e.height, 10) })), c = _(() => e.modelValue.map((h) => xt(h, e.itemValue, h)));
  function d(h, b) {
    const { minX: w, maxX: I, minY: V, maxY: k } = b, y = h.length;
    let C = e.max != null ? Number(e.max) : Math.max(...h), x = e.min != null ? Number(e.min) : Math.min(...h);
    x > 0 && e.min == null && (x = 0), C < 0 && e.max == null && (C = 0);
    const T = I / (y === 1 ? 2 : y), P = (k - V) / (C - x || 1), M = k - Math.abs(x * P);
    return h.map((D, E) => {
      const A = Math.abs(P * D);
      return { x: w + E * T, y: M - A + +(D < 0) * A, height: A, value: D };
    });
  }
  const f = _(() => {
    const h = [], b = d(c.value, u.value), w = b.length;
    for (let I = 0; h.length < w; I++) {
      const V = b[I];
      let k = e.labels[I];
      k || (k = typeof V == "object" ? V.value : V), h.push({ x: V.x, value: String(k) });
    }
    return h;
  }), v = _(() => d(c.value, u.value)), p = _(() => v.value.length === 1 ? (u.value.maxX - r.value) / 2 : (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2), m = _(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
  ae(() => {
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return S("svg", { display: "block" }, [S("defs", null, [S("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [h.map((b, w) => S("stop", { offset: w / Math.max(h.length - 1, 1), "stop-color": b || "currentColor" }, null))])]), S("clipPath", { id: `${l.value}-clip` }, [v.value.map((b) => S("rect", { x: b.x + p.value, y: b.y, width: r.value, height: b.height, rx: m.value, ry: m.value }, [e.autoDraw && !Yn() && S(be, null, [S("animate", { attributeName: "y", from: b.y + b.height, to: b.y, dur: `${o.value}ms`, fill: "freeze" }, null), S("animate", { attributeName: "height", from: "0", to: b.height, dur: `${o.value}ms`, fill: "freeze" }, null)])]))]), i.value && S("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [f.value.map((b, w) => {
      var _a2;
      return S("text", { x: b.x + p.value + r.value / 2, y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a2 = n.label) == null ? void 0 : _a2.call(n, { index: w, value: b.value })) ?? b.value]);
    })]), S("g", { "clip-path": `url(#${l.value}-clip)`, fill: `url(#${l.value})` }, [S("rect", { x: 0, y: 0, width: Math.max(e.modelValue.length * r.value, Number(e.width)), height: e.height }, null)])]);
  });
} });
function BD(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (n ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], u = e[r - 1] || l, c = s && $D(s, i, u);
    if (!s || c) return `L${i.x} ${i.y}`;
    const d = Math.min(Jv(u, i), Jv(s, i)), v = d / 2 < t ? d / 2 : t, p = Qv(u, i, v), m = Qv(s, i, v);
    return `L${p.x} ${p.y}S${i.x} ${i.y} ${m.x} ${m.y}`;
  }).join("") + (n ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Ri(e) {
  return parseInt(e, 10);
}
function $D(e, t, n) {
  return Ri(e.x + n.x) === Ri(2 * t.x) && Ri(e.y + n.y) === Ri(2 * t.y);
}
function Jv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Qv(e, t, n) {
  const a = { x: e.x - t.x, y: e.y - t.y }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = { x: a.x / l, y: a.y / l };
  return { x: t.x + o.x * n, y: t.y + o.y * n };
}
const mp = j({ fill: Boolean, ...fp() }, "VTrendline"), em = ee()({ name: "VTrendline", props: mp(), setup(e, t) {
  let { slots: n } = t;
  const a = Rt(), l = _(() => e.id || `trendline-${a}`), o = _(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = O(0), r = O(null);
  function s(h, b) {
    const { minX: w, maxX: I, minY: V, maxY: k } = b;
    h.length === 1 && (h = [h[0], h[0]]);
    const y = h.length, C = e.max != null ? Number(e.max) : Math.max(...h), x = e.min != null ? Number(e.min) : Math.min(...h), T = (I - w) / (y - 1), P = (k - V) / (C - x || 1);
    return h.map((M, D) => ({ x: w + D * T, y: k - (M - x) * P, value: M }));
  }
  const u = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), c = _(() => parseFloat(e.lineWidth) || 4), d = _(() => Number(e.width)), f = _(() => {
    const h = Number(e.padding);
    return { minX: h, maxX: d.value - h, minY: h, maxY: parseInt(e.height, 10) - h };
  }), v = _(() => e.modelValue.map((h) => xt(h, e.itemValue, h))), p = _(() => {
    const h = [], b = s(v.value, f.value), w = b.length;
    for (let I = 0; h.length < w; I++) {
      const V = b[I];
      let k = e.labels[I];
      k || (k = typeof V == "object" ? V.value : V), h.push({ x: V.x, value: String(k) });
    }
    return h;
  });
  se(() => e.modelValue, async () => {
    if (await Be(), !e.autoDraw || !r.value || Yn()) return;
    const h = r.value, b = h.getTotalLength();
    e.fill ? (h.style.transformOrigin = "bottom center", h.style.transition = "none", h.style.transform = "scaleY(0)", h.getBoundingClientRect(), h.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, h.style.transform = "scaleY(1)") : (h.style.strokeDasharray = `${b}`, h.style.strokeDashoffset = `${b}`, h.getBoundingClientRect(), h.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, h.style.strokeDashoffset = "0"), i.value = b;
  }, { immediate: true });
  function m(h) {
    const b = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
    return BD(s(v.value, f.value), b, h, parseInt(e.height, 10));
  }
  ae(() => {
    var _a2;
    const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
    return S("svg", { display: "block", "stroke-width": parseFloat(e.lineWidth) ?? 4 }, [S("defs", null, [S("linearGradient", { id: l.value, gradientUnits: "userSpaceOnUse", x1: e.gradientDirection === "left" ? "100%" : "0", y1: e.gradientDirection === "top" ? "100%" : "0", x2: e.gradientDirection === "right" ? "100%" : "0", y2: e.gradientDirection === "bottom" ? "100%" : "0" }, [h.map((b, w) => S("stop", { offset: w / Math.max(h.length - 1, 1), "stop-color": b || "currentColor" }, null))])]), u.value && S("g", { key: "labels", style: { textAnchor: "middle", dominantBaseline: "mathematical", fill: "currentColor" } }, [p.value.map((b, w) => {
      var _a3;
      return S("text", { x: b.x + c.value / 2 + c.value / 2, y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75), "font-size": Number(e.labelSize) || 7 }, [((_a3 = n.label) == null ? void 0 : _a3.call(n, { index: w, value: b.value })) ?? b.value]);
    })]), S("path", { ref: r, d: m(e.fill), fill: e.fill ? `url(#${l.value})` : "none", stroke: e.fill ? "none" : `url(#${l.value})` }, null), e.fill && S("path", { d: m(false), fill: "none", stroke: e.color ?? ((_a2 = e.gradient) == null ? void 0 : _a2[0]) }, null)]);
  });
} }), RD = j({ type: { type: String, default: "trend" }, ...vp(), ...mp() }, "VSparkline"), FD = ee()({ name: "VSparkline", props: RD(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: a, textColorStyles: l } = $t(() => e.color), o = _(() => !!(e.showLabels || e.labels.length > 0 || (n == null ? void 0 : n.label))), i = _(() => {
    let r = parseInt(e.height, 10);
    return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
  });
  ae(() => {
    const r = e.type === "trend" ? em : Zv, s = e.type === "trend" ? em.filterProps(e) : Zv.filterProps(e);
    return g(r, q({ key: e.type, class: a.value, style: l.value, viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}` }, s), n);
  });
} }), LD = j({ ...xe(), ..._y({ offset: 8, minWidth: 0, openDelay: 0, closeDelay: 100, location: "top center", transition: "scale-transition" }) }, "VSpeedDial"), OD = ee()({ name: "VSpeedDial", props: LD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), l = O(), o = _(() => {
    var _a2;
    const [r, s = "center"] = ((_a2 = e.location) == null ? void 0 : _a2.split(" ")) ?? [];
    return `${r} ${s}`;
  }), i = _(() => ({ [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: true }));
  return ae(() => {
    const r = to.filterProps(e);
    return g(to, q(r, { modelValue: a.value, "onUpdate:modelValue": (s) => a.value = s, class: e.class, style: e.style, contentClass: ["v-speed-dial__content", i.value, e.contentClass], location: o.value, ref: l, transition: "fade-transition" }), { ...n, default: (s) => g(Fe, { defaults: { VBtn: { size: "small" } } }, { default: () => [g(Qt, { appear: true, group: true, transition: e.transition }, { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, s)];
    } })] }) });
  }), {};
} }), Dd = Symbol.for("vuetify:v-stepper"), gp = j({ color: String, disabled: { type: [Boolean, String], default: false }, prevText: { type: String, default: "$vuetify.stepper.prev" }, nextText: { type: String, default: "$vuetify.stepper.next" } }, "VStepperActions"), hp = ee()({ name: "VStepperActions", props: gp(), emits: { "click:prev": () => true, "click:next": () => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = ot();
  function o() {
    n("click:prev");
  }
  function i() {
    n("click:next");
  }
  return ae(() => {
    const r = { onClick: o }, s = { onClick: i };
    return S("div", { class: "v-stepper-actions" }, [g(Fe, { defaults: { VBtn: { disabled: ["prev", true].includes(e.disabled), text: l(e.prevText), variant: "text" } } }, { default: () => {
      var _a2;
      return [((_a2 = a.prev) == null ? void 0 : _a2.call(a, { props: r })) ?? g(Ue, r, null)];
    } }), g(Fe, { defaults: { VBtn: { color: e.color, disabled: ["next", true].includes(e.disabled), text: l(e.nextText), variant: "tonal" } } }, { default: () => {
      var _a2;
      return [((_a2 = a.next) == null ? void 0 : _a2.call(a, { props: s })) ?? g(Ue, s, null)];
    } })]);
  }), {};
} }), yp = pa("v-stepper-header"), ND = j({ color: String, title: String, subtitle: String, complete: Boolean, completeIcon: { type: Ie, default: "$complete" }, editable: Boolean, editIcon: { type: Ie, default: "$edit" }, error: Boolean, errorIcon: { type: Ie, default: "$error" }, icon: Ie, ripple: { type: [Boolean, Object], default: true }, rules: { type: Array, default: () => [] } }, "StepperItem"), HD = j({ ...ND(), ..._l() }, "VStepperItem"), bp = ee()({ name: "VStepperItem", directives: { vRipple: Ot }, props: HD(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = La(e, Dd, true), l = _(() => (a == null ? void 0 : a.value.value) ?? e.value), o = _(() => e.rules.every((f) => f() === true)), i = _(() => !e.disabled && e.editable), r = _(() => !e.disabled && e.editable), s = _(() => e.error || !o.value), u = _(() => e.complete || e.rules.length > 0 && o.value), c = _(() => s.value ? e.errorIcon : u.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = _(() => ({ canEdit: r.value, hasError: s.value, hasCompleted: u.value, title: e.title, subtitle: e.subtitle, step: l.value, value: e.value }));
  return ae(() => {
    var _a2, _b2, _c2;
    const f = (!a || a.isSelected.value || u.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || n.title), p = !!(e.subtitle != null || n.subtitle);
    function m() {
      a == null ? void 0 : a.toggle();
    }
    return lt(S("button", { class: ne(["v-stepper-item", { "v-stepper-item--complete": u.value, "v-stepper-item--disabled": e.disabled, "v-stepper-item--error": s.value }, a == null ? void 0 : a.selectedClass.value]), disabled: !e.editable, type: "button", onClick: m }, [i.value && xa(true, "v-stepper-item"), g(xn, { key: "stepper-avatar", class: "v-stepper-item__avatar", color: f ? e.color : void 0, size: 24 }, { default: () => {
      var _a3;
      return [((_a3 = n.icon) == null ? void 0 : _a3.call(n, d.value)) ?? (c.value ? g(Xe, { icon: c.value }, null) : l.value)];
    } }), S("div", { class: "v-stepper-item__content" }, [v && S("div", { key: "title", class: "v-stepper-item__title" }, [((_a2 = n.title) == null ? void 0 : _a2.call(n, d.value)) ?? e.title]), p && S("div", { key: "subtitle", class: "v-stepper-item__subtitle" }, [((_b2 = n.subtitle) == null ? void 0 : _b2.call(n, d.value)) ?? e.subtitle]), (_c2 = n.default) == null ? void 0 : _c2.call(n, d.value)])]), [[Ot, e.editable && e.ripple, null]]);
  }), {};
} }), zD = j({ ...ze(qr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VStepperWindow"), pp = ee()({ name: "VStepperWindow", props: zD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(Dd, null), l = Ce(e, "modelValue"), o = _({ get() {
    var _a2;
    return l.value != null || !a ? l.value : (_a2 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a2.value;
  }, set(i) {
    l.value = i;
  } });
  return ae(() => {
    const i = vl.filterProps(e);
    return g(vl, q({ _as: "VStepperWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-stepper-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), WD = j({ ...Zr() }, "VStepperWindowItem"), Sp = ee()({ name: "VStepperWindowItem", props: WD(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = ml.filterProps(e);
    return g(ml, q({ _as: "VStepperWindowItem" }, a, { class: ["v-stepper-window-item", e.class], style: e.style }), n);
  }), {};
} }), jD = j({ altLabels: Boolean, bgColor: String, completeIcon: Ie, editIcon: Ie, editable: Boolean, errorIcon: Ie, hideActions: Boolean, items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, nonLinear: Boolean, flat: Boolean, ...Sl() }, "Stepper"), UD = j({ ...jD(), ...Cl({ mandatory: "force", selectedClass: "v-stepper-item--selected" }), ...ad(), ...on(gp(), ["prevText", "nextText"]) }, "VStepper"), GD = ee()({ name: "VStepper", props: UD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { items: a, next: l, prev: o, selected: i } = Ga(e, Dd), { displayClasses: r, mobile: s } = kn(e), { completeIcon: u, editIcon: c, errorIcon: d, color: f, editable: v, prevText: p, nextText: m } = ao(e), h = _(() => e.items.map((I, V) => {
    const k = xt(I, e.itemTitle, I), y = xt(I, e.itemValue, V + 1), C = e.itemProps === true ? I : xt(I, e.itemProps), x = { title: k, value: y, ...C };
    return { title: x.title, value: x.value, props: x, raw: I };
  })), b = _(() => a.value.findIndex((I) => i.value.includes(I.id))), w = _(() => e.disabled ? e.disabled : b.value === 0 ? "prev" : b.value === a.value.length - 1 ? "next" : false);
  return yt({ VStepperItem: { editable: v, errorIcon: d, completeIcon: u, editIcon: c, prevText: p, nextText: m }, VStepperActions: { color: f, disabled: w, prevText: p, nextText: m } }), ae(() => {
    const I = Ha.filterProps(e), V = !!(n.header || e.items.length), k = e.items.length > 0, y = !e.hideActions && !!(k || n.actions);
    return g(Ha, q(I, { color: e.bgColor, class: ["v-stepper", { "v-stepper--alt-labels": e.altLabels, "v-stepper--flat": e.flat, "v-stepper--non-linear": e.nonLinear, "v-stepper--mobile": s.value }, r.value, e.class], style: e.style }), { default: () => {
      var _a2, _b2;
      return [V && g(yp, { key: "stepper-header" }, { default: () => [h.value.map((C, x) => {
        let { raw: T, ...P } = C;
        return S(be, null, [!!x && g(pn, null, null), g(bp, P.props, { default: n[`header-item.${P.value}`] ?? n.header, icon: n.icon, title: n.title, subtitle: n.subtitle })]);
      })] }), k && g(pp, { key: "stepper-window" }, { default: () => [h.value.map((C) => g(Sp, { value: C.value }, { default: () => {
        var _a3, _b3;
        return ((_a3 = n[`item.${C.value}`]) == null ? void 0 : _a3.call(n, C)) ?? ((_b3 = n.item) == null ? void 0 : _b3.call(n, C));
      } }))] }), (_a2 = n.default) == null ? void 0 : _a2.call(n, { prev: o, next: l }), y && (((_b2 = n.actions) == null ? void 0 : _b2.call(n, { next: l, prev: o })) ?? g(hp, { key: "stepper-actions", "onClick:prev": o, "onClick:next": l }, n))];
    } });
  }), { prev: o, next: l };
} }), YD = j({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: false }, ...Ca(), ...jr() }, "VSwitch"), KD = ee()({ name: "VSwitch", inheritAttrs: false, props: YD(), emits: { "update:focused": (e) => true, "update:modelValue": (e) => true, "update:indeterminate": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "indeterminate"), o = Ce(e, "modelValue"), { loaderClasses: i } = mi(e), { isFocused: r, focus: s, blur: u } = wa(e), c = O(), d = O(), f = kc && window.matchMedia("(forced-colors: active)").matches, v = B(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), p = Rt(), m = B(() => e.id || `switch-${p}`);
  function h() {
    l.value && (l.value = false);
  }
  function b(w) {
    var _a2, _b2;
    w.stopPropagation(), w.preventDefault(), (_b2 = (_a2 = c.value) == null ? void 0 : _a2.input) == null ? void 0 : _b2.click();
  }
  return ae(() => {
    const [w, I] = Jn(n), V = Wt.filterProps(e), k = Na.filterProps(e);
    return g(Wt, q({ ref: d, class: ["v-switch", { "v-switch--flat": e.flat }, { "v-switch--inset": e.inset }, { "v-switch--indeterminate": l.value }, i.value, e.class] }, w, V, { modelValue: o.value, "onUpdate:modelValue": (y) => o.value = y, id: m.value, focused: r.value, style: e.style }), { ...a, default: (y) => {
      let { id: C, messagesId: x, isDisabled: T, isReadonly: P, isValid: M } = y;
      const D = { model: o, isValid: M };
      return g(Na, q({ ref: c }, k, { modelValue: o.value, "onUpdate:modelValue": [(E) => o.value = E, h], id: C.value, "aria-describedby": x.value, type: "checkbox", "aria-checked": l.value ? "mixed" : void 0, disabled: T.value, readonly: P.value, onFocus: s, onBlur: u }, I), { ...a, default: (E) => {
        let { backgroundColorClasses: A, backgroundColorStyles: R } = E;
        return S("div", { class: ne(["v-switch__track", f ? void 0 : A.value]), style: me(R.value), onClick: b }, [a["track-true"] && S("div", { key: "prepend", class: "v-switch__track-true" }, [a["track-true"](D)]), a["track-false"] && S("div", { key: "append", class: "v-switch__track-false" }, [a["track-false"](D)])]);
      }, input: (E) => {
        let { inputNode: A, icon: R, backgroundColorClasses: G, backgroundColorStyles: N } = E;
        return S(be, null, [A, S("div", { class: ne(["v-switch__thumb", { "v-switch__thumb--filled": R || e.loading }, e.inset || f ? void 0 : G.value]), style: me(e.inset ? void 0 : N.value) }, [a.thumb ? g(Fe, { defaults: { VIcon: { icon: R, size: "x-small" } } }, { default: () => [a.thumb({ ...D, icon: R })] }) : g(Oc, null, { default: () => [e.loading ? g(gi, { name: "v-switch", active: true, color: M.value === false ? void 0 : v.value }, { default: (Y) => a.loader ? a.loader(Y) : g(Oa, { active: Y.isActive, color: Y.color, indeterminate: true, size: "16", width: "2" }, null) }) : R && g(Xe, { key: String(R), icon: R, size: "x-small" }, null)] })])]);
      } });
    } });
  }), Dt({}, d);
} }), XD = j({ color: String, height: [Number, String], window: Boolean, ...xe(), ...Vt(), ...xl(), ...dt(), ...Re(), ...Ye() }, "VSystemBar"), qD = ee()({ name: "VSystemBar", props: XD(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { backgroundColorClasses: l, backgroundColorStyles: o } = Je(() => e.color), { elevationClasses: i } = At(e), { roundedClasses: r } = gt(e), { ssrBootStyles: s } = wl(), u = _(() => e.height ?? (e.window ? 32 : 24)), { layoutItemStyles: c } = kl({ id: e.name, order: _(() => parseInt(e.order, 10)), position: re("top"), layoutSize: u, elementSize: u, active: _(() => true), absolute: B(() => e.absolute) });
  return ae(() => g(e.tag, { class: ne(["v-system-bar", { "v-system-bar--window": e.window }, a.value, l.value, i.value, r.value, e.class]), style: me([o.value, c.value, s.value, e.style]) }, n)), {};
} }), Md = Symbol.for("vuetify:v-tabs"), xp = j({ fixed: Boolean, sliderColor: String, sliderTransition: String, sliderTransitionDuration: [String, Number], hideSlider: Boolean, inset: Boolean, direction: { type: String, default: "horizontal" }, ...ze(Wr({ selectedClass: "v-tab--selected", variant: "text" }), ["active", "block", "flat", "location", "position", "symbol"]) }, "VTab"), kp = ee()({ name: "VTab", props: xp(), setup(e, t) {
  let { slots: n, attrs: a } = t;
  const { textColorClasses: l, textColorStyles: o } = $t(() => e.sliderColor), { backgroundColorClasses: i, backgroundColorStyles: r } = Je(() => e.sliderColor), s = O(), u = O(), c = _(() => e.direction === "horizontal"), d = _(() => {
    var _a2, _b2;
    return ((_b2 = (_a2 = s.value) == null ? void 0 : _a2.group) == null ? void 0 : _b2.isSelected.value) ?? false;
  });
  function f(h, b) {
    return { opacity: [0, 1] };
  }
  function v(h, b) {
    return e.direction === "vertical" ? { transform: ["scaleY(0)", "scaleY(1)"] } : { transform: ["scaleX(0)", "scaleX(1)"] };
  }
  function p(h, b) {
    const w = b.getBoundingClientRect(), I = h.getBoundingClientRect(), V = c.value ? "x" : "y", k = c.value ? "X" : "Y", y = c.value ? "right" : "bottom", C = c.value ? "width" : "height", x = w[V], T = I[V], P = x > T ? w[y] - I[y] : w[V] - I[V], M = Math.sign(P) > 0 ? c.value ? "right" : "bottom" : Math.sign(P) < 0 ? c.value ? "left" : "top" : "center", E = (Math.abs(P) + (Math.sign(P) < 0 ? w[C] : I[C])) / Math.max(w[C], I[C]) || 0, A = w[C] / I[C] || 0, R = 1.5;
    return { transform: [`translate${k}(${P}px) scale${k}(${A})`, `translate${k}(${P / R}px) scale${k}(${(E - 1) / R + 1})`, "none"], transformOrigin: Array(3).fill(M) };
  }
  function m(h) {
    var _a2, _b2;
    let { value: b } = h;
    if (b) {
      const w = (_b2 = (_a2 = s.value) == null ? void 0 : _a2.$el.parentElement) == null ? void 0 : _b2.querySelector(".v-tab--selected .v-tab__slider"), I = u.value;
      if (!w || !I) return;
      const V = getComputedStyle(w).backgroundColor, k = { fade: f, grow: v, shift: p }[e.sliderTransition ?? "shift"] ?? p, y = Number(e.sliderTransitionDuration) || ({ fade: 400, grow: 350, shift: 225 }[e.sliderTransition ?? "shift"] ?? 225);
      ia(I, { backgroundColor: [V, V], ...k(I, w) }, { duration: y, easing: Wo });
    }
  }
  return ae(() => {
    const h = Ue.filterProps(e);
    return g(Ue, q({ symbol: Md, ref: s, class: ["v-tab", e.class, d.value && e.inset ? i.value : []], style: [e.style, d.value && e.inset ? r.value : [], { backgroundColor: d.value && e.inset ? "transparent !important" : void 0 }], tabindex: d.value ? 0 : -1, role: "tab", "aria-selected": String(d.value), active: false }, h, a, { block: e.fixed, maxWidth: e.fixed ? 300 : void 0, "onGroup:selected": m }), { ...n, default: () => {
      var _a2;
      return S(be, null, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.text, !e.hideSlider && S("div", { ref: u, class: ne(["v-tab__slider", e.inset ? i.value : l.value]), style: me([o.value, e.inset ? r.value : l.value]) }, null)]);
    } });
  }), Dt({}, s);
} }), ZD = j({ ...ze(qr(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"]) }, "VTabsWindow"), wp = ee()({ name: "VTabsWindow", props: ZD(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ge(Md, null), l = Ce(e, "modelValue"), o = _({ get() {
    var _a2;
    return l.value != null || !a ? l.value : (_a2 = a.items.value.find((i) => a.selected.value.includes(i.id))) == null ? void 0 : _a2.value;
  }, set(i) {
    l.value = i;
  } });
  return ae(() => {
    const i = vl.filterProps(e);
    return g(vl, q({ _as: "VTabsWindow" }, i, { modelValue: o.value, "onUpdate:modelValue": (r) => o.value = r, class: ["v-tabs-window", e.class], style: e.style, mandatory: false, touch: false }), n);
  }), {};
} }), JD = j({ ...Zr() }, "VTabsWindowItem"), Cp = ee()({ name: "VTabsWindowItem", props: JD(), setup(e, t) {
  let { slots: n } = t;
  return ae(() => {
    const a = ml.filterProps(e);
    return g(ml, q({ _as: "VTabsWindowItem" }, a, { class: ["v-tabs-window-item", e.class], style: e.style }), n);
  }), {};
} });
function QD(e) {
  return e ? e.map((t) => dl(t) ? t : { text: t, value: t }) : [];
}
const eM = j({ alignTabs: { type: String, default: "start" }, color: String, fixedTabs: Boolean, items: { type: Array, default: () => [] }, stacked: Boolean, bgColor: String, grow: Boolean, height: { type: [Number, String], default: void 0 }, hideSlider: Boolean, inset: Boolean, insetPadding: [String, Number], insetRadius: [String, Number], sliderColor: String, ...on(xp(), ["spaced", "sliderTransition", "sliderTransitionDuration"]), ...Gc({ mandatory: "force", selectedClass: "v-tab-item--selected" }), ...bt(), ...Re() }, "VTabs"), tM = ee()({ name: "VTabs", props: eM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { attrs: n, slots: a } = t;
  const l = Ce(e, "modelValue"), o = _(() => QD(e.items)), { densityClasses: i } = Nt(e), { backgroundColorClasses: r, backgroundColorStyles: s } = Je(() => e.bgColor), { scopeId: u } = Vl();
  return yt({ VTab: { color: B(e, "color"), direction: B(e, "direction"), stacked: B(e, "stacked"), fixed: B(e, "fixedTabs"), inset: B(e, "inset"), sliderColor: B(e, "sliderColor"), sliderTransition: B(e, "sliderTransition"), sliderTransitionDuration: B(e, "sliderTransitionDuration"), hideSlider: B(e, "hideSlider") } }), ae(() => {
    const c = Jo.filterProps(e), d = !!(a.window || e.items.length > 0);
    return S(be, null, [g(Jo, q(c, { modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, { "v-tabs--fixed-tabs": e.fixedTabs, "v-tabs--grow": e.grow, "v-tabs--inset": e.inset, "v-tabs--stacked": e.stacked }, i.value, r.value, e.class], style: [{ "--v-tabs-height": ve(e.height), "--v-tabs-inset-padding": e.inset ? ve(e.insetPadding) : void 0, "--v-tabs-inset-radius": e.inset ? ve(e.insetRadius) : void 0 }, s.value, e.style], role: "tablist", symbol: Md }, u, n), { default: a.default ?? (() => o.value.map((f) => {
      var _a2;
      return ((_a2 = a.tab) == null ? void 0 : _a2.call(a, { item: f })) ?? g(kp, q(f, { key: f.text, value: f.value, spaced: e.spaced }), { default: a[`tab.${f.value}`] ? () => {
        var _a3;
        return (_a3 = a[`tab.${f.value}`]) == null ? void 0 : _a3.call(a, { item: f });
      } : void 0 });
    })), prev: a.prev, next: a.next }), d && g(wp, q({ modelValue: l.value, "onUpdate:modelValue": (f) => l.value = f, key: "tabs-window" }, u), { default: () => {
      var _a2;
      return [o.value.map((f) => {
        var _a3;
        return ((_a3 = a.item) == null ? void 0 : _a3.call(a, { item: f })) ?? g(Cp, { value: f.value }, { default: () => {
          var _a4;
          return (_a4 = a[`item.${f.value}`]) == null ? void 0 : _a4.call(a, { item: f });
        } });
      }), (_a2 = a.window) == null ? void 0 : _a2.call(a)];
    } })]);
  }), {};
} }), nM = j({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxHeight: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Vy(), ...ze(Ca(), ["direction"]), ...xi() }, "VTextarea"), aM = ee()({ name: "VTextarea", directives: { vIntersect: Rn }, inheritAttrs: false, props: nM(), emits: { "click:control": (e) => true, "mousedown:control": (e) => true, "update:focused": (e) => true, "update:modelValue": (e) => true, "update:rows": (e) => true }, setup(e, t) {
  let { attrs: n, emit: a, slots: l } = t;
  const o = Ce(e, "modelValue"), { isFocused: i, focus: r, blur: s } = wa(e), { onIntersect: u } = Iy(e), c = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
    if (n.maxlength) return n.maxlength;
    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter;
  }), f = O(), v = O(), p = re(""), m = O(), h = O(0), { platform: b } = kn(), w = ld(e), I = _(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _a2;
    w.isSuppressing.value && w.update(), m.value !== document.activeElement && ((_a2 = m.value) == null ? void 0 : _a2.focus()), i.value || r();
  }
  function k(A) {
    V(), a("click:control", A);
  }
  function y(A) {
    a("mousedown:control", A);
  }
  function C(A) {
    A.stopPropagation(), V(), Be(() => {
      o.value = "", ci(e["onClick:clear"], A);
    });
  }
  function x(A) {
    var _a2;
    const R = A.target;
    if (!((_a2 = e.modelModifiers) == null ? void 0 : _a2.trim)) {
      o.value = R.value;
      return;
    }
    const G = R.value, N = R.selectionStart, Y = R.selectionEnd;
    o.value = G, Be(() => {
      let H = 0;
      G.trimStart().length === R.value.length && (H = G.length - R.value.length), N != null && (R.selectionStart = N - H), Y != null && (R.selectionEnd = Y - H);
    });
  }
  const T = O(), P = O(Number(e.rows)), M = _(() => ["plain", "underlined"].includes(e.variant));
  mt(() => {
    e.autoGrow || (P.value = Number(e.rows));
  });
  function D() {
    Be(() => {
      if (!m.value) return;
      if (b.value.firefox) {
        h.value = 12;
        return;
      }
      const { offsetWidth: A, clientWidth: R } = m.value;
      h.value = Math.max(0, A - R);
    }), e.autoGrow && Be(() => {
      if (!T.value || !v.value) return;
      const A = getComputedStyle(T.value), R = getComputedStyle(v.value.$el), G = parseFloat(A.getPropertyValue("--v-field-padding-top")) + parseFloat(A.getPropertyValue("--v-input-padding-top")) + parseFloat(A.getPropertyValue("--v-field-padding-bottom")), N = T.value.scrollHeight, Y = parseFloat(A.lineHeight), H = Math.max(parseFloat(e.rows) * Y + G, parseFloat(R.getPropertyValue("--v-input-control-height"))), F = e.maxHeight ? parseFloat(e.maxHeight) : parseFloat(e.maxRows) * Y + G || 1 / 0, Z = nt(N ?? 0, H, F);
      P.value = Math.floor((Z - G) / Y), p.value = ve(Z);
    });
  }
  It(D), se(o, D), se(() => e.rows, D), se(() => e.maxHeight, D), se(() => e.maxRows, D), se(() => e.density, D), se(P, (A) => {
    a("update:rows", A);
  });
  let E;
  return se(T, (A) => {
    A ? (E = new ResizeObserver(D), E.observe(T.value)) : E == null ? void 0 : E.disconnect();
  }), jt(() => {
    E == null ? void 0 : E.disconnect();
  }), ae(() => {
    const A = !!(l.counter || e.counter || e.counterValue), R = !!(A || l.details), [G, N] = Jn(n), { modelValue: Y, ...H } = Wt.filterProps(e), F = { ...za.filterProps(e), "onClick:clear": C };
    return g(Wt, q({ ref: f, modelValue: o.value, "onUpdate:modelValue": (Z) => o.value = Z, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": M.value }, e.class], style: [{ "--v-textarea-max-height": e.maxHeight ? ve(e.maxHeight) : void 0, "--v-textarea-scroll-bar-width": ve(h.value) }, e.style] }, G, H, { centerAffix: P.value === 1 && !M.value, focused: i.value }), { ...l, default: (Z) => {
      let { id: W, isDisabled: L, isDirty: U, isReadonly: ie, isValid: Se, hasDetails: K } = Z;
      return g(za, q({ ref: v, style: { "--v-textarea-control-height": p.value }, onClick: k, onMousedown: y, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, F, { id: W.value, active: I.value || U.value, labelId: `${W.value}-label`, centerAffix: P.value === 1 && !M.value, dirty: U.value || e.dirty, disabled: L.value, focused: i.value, details: K.value, error: Se.value === false }), { ...l, default: (fe) => {
        let { props: { class: De, ..._e }, controlRef: ye } = fe;
        return S(be, null, [e.prefix && S("span", { class: "v-text-field__prefix" }, [e.prefix]), lt(S("textarea", q({ ref: ($) => m.value = ye.value = $, class: De, value: o.value, onInput: x, autofocus: e.autofocus, readonly: ie.value, disabled: L.value, placeholder: e.placeholder, rows: e.rows, name: w.fieldName.value, autocomplete: w.fieldAutocomplete.value, onFocus: V, onBlur: s, "aria-labelledby": `${W.value}-label` }, _e, N), null), [[Rn, { handler: u }, null, { once: true }]]), e.autoGrow && lt(S("textarea", { class: ne([De, "v-textarea__sizer"]), id: `${_e.id}-sizer`, "onUpdate:modelValue": ($) => o.value = $, ref: T, readonly: true, "aria-hidden": "true" }, null), [[Tr, o.value]]), e.suffix && S("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: R ? (Z) => {
      var _a2;
      return S(be, null, [(_a2 = l.details) == null ? void 0 : _a2.call(l, Z), A && S(be, null, [S("span", null, null), g(Ur, { active: e.persistentCounter || i.value, value: c.value, max: d.value, disabled: e.disabled }, l.counter)])]);
    } : void 0 });
  }), Dt({}, f, v, m);
} }), lM = j({ withBackground: Boolean, ...xe(), ...Ye(), ...Re() }, "VThemeProvider"), oM = ee()({ name: "VThemeProvider", props: lM(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e);
  return () => {
    var _a2;
    return e.withBackground ? g(e.tag, { class: ne(["v-theme-provider", a.value, e.class]), style: me(e.style) }, { default: () => {
      var _a3;
      return [(_a3 = n.default) == null ? void 0 : _a3.call(n)];
    } }) : (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), iM = j({ dotColor: String, fillDot: Boolean, hideDot: Boolean, icon: Ie, iconColor: String, lineColor: String, ...xe(), ...dt(), ...ta(), ...Vt() }, "VTimelineDivider"), rM = ee()({ name: "VTimelineDivider", props: iM(), setup(e, t) {
  let { slots: n } = t;
  const { sizeClasses: a, sizeStyles: l } = oo(e, "v-timeline-divider__dot"), { backgroundColorStyles: o, backgroundColorClasses: i } = Je(() => e.dotColor), { roundedClasses: r } = gt(e, "v-timeline-divider__dot"), { elevationClasses: s } = At(e), { backgroundColorClasses: u, backgroundColorStyles: c } = Je(() => e.lineColor);
  return ae(() => S("div", { class: ne(["v-timeline-divider", { "v-timeline-divider--fill-dot": e.fillDot }, e.class]), style: me(e.style) }, [S("div", { class: ne(["v-timeline-divider__before", u.value]), style: me(c.value) }, null), !e.hideDot && S("div", { key: "dot", class: ne(["v-timeline-divider__dot", s.value, r.value, a.value]), style: me(l.value) }, [S("div", { class: ne(["v-timeline-divider__inner-dot", i.value, r.value]), style: me(o.value) }, [n.default ? g(Fe, { key: "icon-defaults", disabled: !e.icon, defaults: { VIcon: { color: e.iconColor, icon: e.icon, size: e.size } } }, n.default) : g(Xe, { key: "icon", color: e.iconColor, icon: e.icon, size: e.size }, null)])]), S("div", { class: ne(["v-timeline-divider__after", u.value]), style: me(c.value) }, null)])), {};
} }), _p = j({ density: String, dotColor: String, fillDot: Boolean, hideDot: Boolean, hideOpposite: { type: Boolean, default: void 0 }, icon: Ie, iconColor: String, lineInset: [Number, String], side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, ...xe(), ...Ct(), ...Vt(), ...dt(), ...ta(), ...Re() }, "VTimelineItem"), sM = ee()({ name: "VTimelineItem", props: _p(), setup(e, t) {
  let { slots: n } = t;
  const { dimensionStyles: a } = _t(e), l = re(0), o = O();
  return se(o, (i) => {
    var _a2;
    i && (l.value = ((_a2 = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : _a2.getBoundingClientRect().width) ?? 0);
  }, { flush: "post" }), ae(() => {
    var _a2, _b2;
    return S("div", { class: ne(["v-timeline-item", { "v-timeline-item--fill-dot": e.fillDot, "v-timeline-item--side-start": e.side === "start", "v-timeline-item--side-end": e.side === "end" }, e.class]), style: me([{ "--v-timeline-dot-size": ve(l.value), "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ve(e.lineInset)})` : ve(0) }, e.style]) }, [S("div", { class: "v-timeline-item__body", style: me(a.value) }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), g(rM, { ref: o, hideDot: e.hideDot, icon: e.icon, iconColor: e.iconColor, size: e.size, elevation: e.elevation, dotColor: e.dotColor, fillDot: e.fillDot, rounded: e.rounded }, { default: n.icon }), e.density !== "compact" && S("div", { class: "v-timeline-item__opposite" }, [!e.hideOpposite && ((_b2 = n.opposite) == null ? void 0 : _b2.call(n))])]);
  }), {};
} }), uM = j({ align: { type: String, default: "center", validator: (e) => ["center", "start"].includes(e) }, direction: { type: String, default: "vertical", validator: (e) => ["vertical", "horizontal"].includes(e) }, justify: { type: String, default: "auto", validator: (e) => ["auto", "center"].includes(e) }, side: { type: String, validator: (e) => e == null || ["start", "end"].includes(e) }, lineThickness: { type: [String, Number], default: 2 }, lineColor: String, truncateLine: { type: String, validator: (e) => ["start", "end", "both"].includes(e) }, ...on(_p({ lineInset: 0 }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]), ...xe(), ...bt(), ...Re(), ...Ye() }, "VTimeline"), cM = ee()({ name: "VTimeline", props: uM(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: a } = qe(e), { densityClasses: l } = Nt(e), { rtlClasses: o } = Pt();
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
} }), dM = j({ allowedValues: Function, ampm: Boolean, color: String, disabled: Boolean, displayedValue: null, double: Boolean, format: { type: Function, default: (e) => e }, max: { type: Number, required: true }, min: { type: Number, required: true }, scrollable: Boolean, readonly: Boolean, rotate: { type: Number, default: 0 }, step: { type: Number, default: 1 }, modelValue: { type: Number } }, "VTimePickerClock"), Uu = ee()({ name: "VTimePickerClock", props: dM(), emits: { change: (e) => true, input: (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const a = O(null), l = O(null), o = O(void 0), i = O(false), r = O(null), s = O(null), u = jg((F) => n("change", F), 750), { textColorClasses: c, textColorStyles: d } = $t(() => e.color), { backgroundColorClasses: f, backgroundColorStyles: v } = Je(() => e.color), p = _(() => e.max - e.min + 1), m = _(() => e.double ? p.value / 2 : p.value), h = _(() => 360 / m.value), b = _(() => h.value * Math.PI / 180), w = _(() => e.modelValue == null ? e.min : e.modelValue), I = _(() => 0.62), V = _(() => {
    const F = [];
    for (let Z = e.min; Z <= e.max; Z = Z + e.step) F.push(Z);
    return F;
  });
  se(() => e.modelValue, (F) => {
    o.value = F;
  });
  function k(F) {
    o.value !== F && (o.value = F), n("input", F);
  }
  function y(F) {
    return !e.allowedValues || e.allowedValues(F);
  }
  function C(F) {
    if (!e.scrollable || e.disabled) return;
    F.preventDefault();
    const Z = Math.sign(-F.deltaY || 1);
    let W = w.value;
    do
      W = W + Z, W = (W - e.min + p.value) % p.value + e.min;
    while (!y(W) && W !== w.value);
    W !== e.displayedValue && k(W), u(W);
  }
  function x(F) {
    return e.double && F - e.min >= m.value;
  }
  function T(F) {
    return x(F) ? I.value : 1;
  }
  function P(F) {
    const Z = e.rotate * Math.PI / 180;
    return { x: Math.sin((F - e.min) * b.value + Z) * T(F), y: -Math.cos((F - e.min) * b.value + Z) * T(F) };
  }
  function M(F, Z) {
    const W = (Math.round(F / h.value) + (Z ? m.value : 0)) % p.value + e.min;
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
    r.value === null && (r.value = F), s.value = F, k(F);
  }
  function G(F) {
    var _a2, _b2;
    if (F.preventDefault(), !i.value && F.type !== "click" || !a.value) return;
    const { width: Z, top: W, left: L } = (_a2 = a.value) == null ? void 0 : _a2.getBoundingClientRect(), { width: U } = ((_b2 = l.value) == null ? void 0 : _b2.getBoundingClientRect()) ?? { width: 0 }, { clientX: ie, clientY: Se } = "touches" in F ? F.touches[0] : F, K = { x: Z / 2, y: -Z / 2 }, fe = { x: ie - L, y: W - Se }, De = Math.round(A(K, fe) - e.rotate + 360) % 360, _e = e.double && E(K, fe) < (U + U * I.value) / 4, ye = Math.ceil(15 / h.value);
    let $;
    for (let z = 0; z < ye; z++) if ($ = M(De + z * h.value, _e), y($) || ($ = M(De - z * h.value, _e), y($))) return R($);
  }
  function N(F) {
    e.disabled || (F.preventDefault(), window.addEventListener("mousemove", G), window.addEventListener("touchmove", G), window.addEventListener("mouseup", Y), window.addEventListener("touchend", Y), r.value = null, s.value = null, i.value = true, G(F));
  }
  function Y(F) {
    F.stopPropagation(), H(), i.value = false, s.value !== null && y(s.value) && n("change", s.value);
  }
  function H() {
    window.removeEventListener("mousemove", G), window.removeEventListener("touchmove", G), window.removeEventListener("mouseup", Y), window.removeEventListener("touchend", Y);
  }
  St(H), ae(() => S("div", { class: ne([{ "v-time-picker-clock": true, "v-time-picker-clock--indeterminate": e.modelValue == null, "v-time-picker-clock--readonly": e.readonly }]), onMousedown: N, onTouchstart: N, onWheel: C, ref: a }, [S("div", { class: "v-time-picker-clock__inner", ref: l }, [S("div", { class: ne([{ "v-time-picker-clock__hand": true, "v-time-picker-clock__hand--inner": x(e.modelValue) }, c.value]), style: me([{ transform: `rotate(${e.rotate + h.value * (w.value - e.min)}deg) scaleY(${T(w.value)})` }, d.value]) }, null), V.value.map((F) => {
    const Z = F === w.value;
    return S("div", { class: ne([{ "v-time-picker-clock__item": true, "v-time-picker-clock__item--active": Z, "v-time-picker-clock__item--disabled": e.disabled || !y(F) }, Z && f.value]), style: me([D(F), Z && v.value]) }, [S("span", null, [e.format(F)])]);
  })])]));
} }), fM = j({ active: Boolean, color: String, disabled: Boolean, label: String, modelValue: String, error: String, showHint: Boolean, readonly: Boolean }, "VTimePickerField"), Ws = ee()({ name: "VTimePickerField", props: fM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { textColorClasses: a, textColorStyles: l } = $t(() => e.color), o = O(), i = re(false);
  function r(s) {
    if (["Backspace", "Delete"].includes(s.key)) {
      s.preventDefault();
      const u = s.target;
      u.value = "", n("update:modelValue", null);
    }
  }
  return ae(() => g(qn, { ref: o, _as: "VTimePickerField", autocomplete: "off", class: ne(["v-time-picker-controls__time__field", { "v-time-picker-controls__time__field--active": e.active }, e.active ? a.value : []]), style: me(e.active ? l.value : []), disabled: e.disabled, variant: "solo-filled", inputmode: "numeric", hideDetails: "auto", "aria-label": e.label, "aria-invalid": !!e.error, "aria-errormessage": e.error, error: !!e.error, hint: e.showHint ? e.label : void 0, persistentHint: true, flat: true, modelValue: e.modelValue ?? (i.value ? "" : "--"), "onUpdate:modelValue": (s) => n("update:modelValue", s), onKeydown: r, onFocus: () => i.value = true, onBlur: () => i.value = false }, null)), Dt({}, o);
} });
function fn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(t, "0");
}
function Vp(e) {
  return e ? (e - 1) % 12 + 1 : 12;
}
function Eo(e, t) {
  return e % 12 + (t === "pm" ? 12 : 0);
}
function bo(e) {
  const t = e.replaceAll(/\D/g, "");
  return t.length > 0 ? Number(t) : null;
}
function vM(e, t, n) {
  {
    if (e === 23 && t) return { value: 0 };
    if (e === 0 && !t) return { value: 23 };
  }
  return { value: e + (t ? 1 : -1) };
}
function mM(e, t) {
  return e === 59 && t ? 0 : e === 0 && !t ? 59 : e + (t ? 1 : -1);
}
const Ip = j({ allowedHours: [Function, Array], allowedMinutes: [Function, Array], allowedSeconds: [Function, Array], max: String, min: String }, "time-validation");
function Pp(e) {
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
    return (v, p, m) => {
      if (v !== null && p !== null) {
        const h = 3600 * v + 60 * p + m;
        if (h < d || h > f) return false;
      }
      return Array.isArray(e.allowedSeconds) ? e.allowedSeconds.includes(m) : typeof e.allowedSeconds == "function" ? e.allowedSeconds(m) : true;
    };
  });
  function l(o, i, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const c = o === "hour" ? t.value : o === "minute" ? (v) => n.value(s, v) : (v) => a.value(s, u, v), d = o === "hour" ? (v) => vM(v, r).value : (v) => mM(v, r), f = o === "hour" ? 24 : 60;
    for (let v = 1; v <= f && (i = d(i), !c(i)); v++) ;
    return i;
  }
  return { isAllowedHour: t, isAllowedMinute: n, isAllowedSecond: a, findNextAllowed: l };
}
const gM = j({ ampm: Boolean, color: String, disabled: Boolean, inputHints: Boolean, hour: [Number, String], minute: [Number, String], second: [Number, String], period: String, readonly: Boolean, useSeconds: Boolean, value: Number, viewMode: String, ...Ip() }, "VTimePickerControls"), Gu = ee()({ name: "VTimePickerControls", props: gM(), emits: { "update:period": (e) => true, "update:viewMode": (e) => true, "update:hour": (e) => true, "update:minute": (e) => true, "update:second": (e) => true }, setup(e, t) {
  let { emit: n } = t;
  const { t: a } = ot(), { isAllowedHour: l, isAllowedMinute: o, isAllowedSecond: i, findNextAllowed: r } = Pp(e), s = _(() => e.hour !== null ? e.ampm ? Eo(Number(e.hour), e.period ?? "am") : Number(e.hour) : null), u = _(() => e.minute !== null ? Number(e.minute) : null), c = _(() => {
    var _a2;
    return e.hour === null ? true : ((_a2 = l.value) == null ? void 0 : _a2.call(l, Number(s.value))) ?? true;
  }), d = _(() => {
    var _a2;
    return e.minute === null ? true : ((_a2 = o.value) == null ? void 0 : _a2.call(o, s.value, Number(e.minute))) ?? true;
  }), f = _(() => {
    var _a2;
    return e.second === null ? true : ((_a2 = i.value) == null ? void 0 : _a2.call(i, s.value, u.value, Number(e.second))) ?? true;
  }), v = { in: (E) => {
    if (E == null || isNaN(Number(E))) return null;
    const A = Number(E);
    return e.ampm ? fn(Vp(A)) : fn(A);
  }, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const A = typeof E == "string" ? bo(E) : Number(E);
    return A === null ? null : e.ampm ? Eo(A, e.period ?? "am") : nt(A, 0, 23);
  } }, p = Ce(e, "hour", void 0, v.in, v.out), m = { in: (E) => E != null && !isNaN(Number(E)) ? fn(`${E}`) : null, out: (E) => {
    if (isNaN(Number(E)) || E == null || E === "") return null;
    const A = typeof E == "string" ? bo(E) : Number(E);
    return A !== null ? nt(A, 0, 59) : null;
  } }, h = Ce(e, "minute", void 0, m.in, m.out), b = Ce(e, "second", void 0, m.in, m.out);
  function w(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = e.period === "am", R = e.ampm ? Eo(Number(p.value ?? 0), A ? "am" : "pm") : Number(p.value ?? 0), G = r("hour", R, E.key === "ArrowUp"), N = A && G >= 12 || !A && G < 12;
    e.ampm && N ? (n("update:period", e.period === "am" ? "pm" : "am"), Be(() => p.value = fn(G))) : p.value = fn(G);
  }
  function I(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = Number(h.value ?? 0), R = r("minute", A, E.key === "ArrowUp", s.value);
    h.value = fn(R);
  }
  function V(E) {
    if (!["ArrowUp", "ArrowDown"].includes(E.key)) return;
    E.preventDefault(), E.stopPropagation();
    const A = Number(b.value ?? 0), R = r("second", A, E.key === "ArrowUp", s.value, u.value);
    b.value = fn(R);
  }
  function k(E, A, R) {
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
          G.preventDefault(), N.value = fn(String(bo(G.data)).substring(0, 2)), R(N.value);
          return;
        }
      }
      const W = E(Z);
      A(W) && G.preventDefault();
    };
  }
  function y(E) {
    n("update:period", E);
    const A = r("hour", E === "am" ? 23 : 11, true);
    Be(() => p.value = fn(A));
  }
  const C = O(), x = O(), T = O();
  se(() => e.viewMode, (E, A) => {
    switch (A) {
      case "hour":
        C.value.blur();
        break;
      case "minute":
        x.value.blur();
        break;
      case "second":
        T.value.blur();
        break;
    }
  });
  const P = k(v.out, (E) => v.in(E) === p.value, (E) => p.value = E), M = k(m.out, (E) => m.in(E) === h.value, (E) => h.value = E), D = k(m.out, (E) => m.in(E) === b.value, (E) => b.value = E);
  return ae(() => S("div", { class: "v-time-picker-controls" }, [S("div", { class: ne({ "v-time-picker-controls__time": true, "v-time-picker-controls__time--with-ampm": e.ampm, "v-time-picker-controls__time--with-seconds": e.useSeconds }) }, [g(Ws, { ref: C, active: e.viewMode === "hour", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.hour"), showHint: e.inputHints, error: c.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: p.value, "onUpdate:modelValue": (E) => p.value = E, onKeydown: w, onBeforeinput: P, onFocus: () => n("update:viewMode", "hour") }, null), S("span", { class: "v-time-picker-controls__time__separator" }, [Oe(":")]), g(Ws, { ref: x, active: e.viewMode === "minute", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.minute"), showHint: e.inputHints, error: d.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: h.value, "onUpdate:modelValue": (E) => h.value = E, onKeydown: I, onBeforeinput: M, onFocus: () => n("update:viewMode", "minute") }, null), e.useSeconds && S("span", { key: "secondsDivider", class: "v-time-picker-controls__time__separator" }, [Oe(":")]), e.useSeconds && S(be, null, [g(Ws, { key: "secondsVal", ref: T, active: e.viewMode === "second", color: e.color, disabled: e.disabled, label: a("$vuetify.timePicker.second"), showHint: e.inputHints, error: f.value ? void 0 : a("$vuetify.timePicker.notAllowed"), modelValue: b.value, "onUpdate:modelValue": (E) => b.value = E, onKeydown: V, onBeforeinput: D, onFocus: () => n("update:viewMode", "second") }, null)]), e.ampm && S("div", { class: "v-time-picker-controls__ampm" }, [g(Ue, { active: e.period === "am", color: e.period === "am" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__am": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "am" }), disabled: e.disabled, text: a("$vuetify.timePicker.am"), variant: e.disabled && e.period === "am" ? "elevated" : "tonal", onClick: () => e.period !== "am" ? y("am") : null }, null), g(Ue, { active: e.period === "pm", color: e.period === "pm" ? e.color : void 0, class: ne({ "v-time-picker-controls__ampm__pm": true, "v-time-picker-controls__ampm__btn": true, "v-time-picker-controls__ampm__btn__active": e.period === "pm" }), disabled: e.disabled, text: a("$vuetify.timePicker.pm"), variant: e.disabled && e.period === "pm" ? "elevated" : "tonal", onClick: () => e.period !== "pm" ? y("pm") : null }, null)])])])), {};
} }), hM = j({ disabled: Boolean, format: { type: String, default: "ampm" }, viewMode: { type: String, default: "hour" }, period: { type: String, default: "am", validator: (e) => ["am", "pm"].includes(e) }, modelValue: null, readonly: Boolean, scrollable: Boolean, useSeconds: Boolean, variant: { type: String, default: "dial" }, ...Ip(), ...ze(Jr({ title: "$vuetify.timePicker.title" }), ["landscape"]), ...bt() }, "VTimePicker"), yM = ee()({ name: "VTimePicker", props: hM(), emits: { "update:hour": (e) => true, "update:minute": (e) => true, "update:period": (e) => true, "update:second": (e) => true, "update:modelValue": (e) => true, "update:viewMode": (e) => true }, setup(e, t) {
  let { emit: n, slots: a } = t;
  const { t: l } = ot(), { densityClasses: o } = Nt(e), i = O(null), r = O(null), s = O(null), u = O(null), c = O(null), d = O(null), f = Ce(e, "period", "am"), v = Ce(e, "viewMode", "hour"), p = O(null), m = O(null), h = _(() => e.format === "ampm"), { isAllowedHour: b, isAllowedMinute: w, isAllowedSecond: I } = Pp(e), V = B(() => e.modelValue !== null && i.value === null && r.value === null && (!e.useSeconds || s.value === null));
  function k() {
    const P = y();
    P !== null && P !== e.modelValue && n("update:modelValue", P), V.value && n("update:modelValue", null);
  }
  se(i, k), se(r, k), se(s, k), se(() => e.modelValue, (P) => C(P)), se(() => e.useSeconds, (P, M) => {
    M && !P && v.value === "second" && (v.value = "minute"), !P && s.value !== null && (s.value = null);
  }), It(() => {
    C(e.modelValue);
  });
  function y() {
    return i.value != null && r.value != null && (!e.useSeconds || s.value != null) ? `${fn(i.value)}:${fn(r.value)}` + (e.useSeconds ? `:${fn(s.value)}` : "") : null;
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
  function x(P) {
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
    v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === u.value && r.value === c.value && (!e.useSeconds || s.value === d.value) || y() === null) && (u.value = i.value, c.value = r.value, e.useSeconds && (d.value = s.value), M && k());
  }
  ae(() => {
    const P = ze(no.filterProps(e), ["hideHeader"]), M = Gu.filterProps(e), D = Uu.filterProps(ze(e, ["format", "modelValue", "min", "max"])), E = v.value === "hour" ? b.value : v.value === "minute" ? (A) => w.value(i.value, A) : (A) => I.value(i.value, r.value, A);
    return g(no, q(P, { color: void 0, class: ["v-time-picker", `v-time-picker--variant-${e.variant}`, e.class, o.value], hideHeader: e.hideHeader && e.variant !== "input", style: e.style }), { title: () => {
      var _a2;
      return ((_a2 = a.title) == null ? void 0 : _a2.call(a)) ?? S("div", { class: "v-time-picker__title" }, [l(e.title)]);
    }, header: () => g(Gu, q(M, { ampm: h.value, hour: i.value, minute: r.value, period: f.value, second: s.value, viewMode: v.value, inputHints: e.variant === "input", "onUpdate:hour": (A) => i.value = A, "onUpdate:minute": (A) => r.value = A, "onUpdate:second": (A) => s.value = A, "onUpdate:period": (A) => f.value = A, "onUpdate:viewMode": (A) => v.value = A, ref: p }), null), default: () => g(Uu, q(D, { allowedValues: E, double: v.value === "hour" && !h.value, format: v.value === "hour" ? h.value ? Vp : (A) => A : (A) => fn(A, 2), max: v.value === "hour" ? h.value && f.value === "am" ? 11 : 23 : 59, min: v.value === "hour" && h.value && f.value === "pm" ? 12 : 0, size: 20, step: v.value === "hour" ? 1 : 5, modelValue: v.value === "hour" ? i.value : v.value === "minute" ? r.value : s.value, onChange: T, onInput: x, ref: m }), null), actions: a.actions });
  });
} }), bM = j({ ...xe(), ...Cn({ variant: "text" }) }, "VToolbarItems"), pM = ee()({ name: "VToolbarItems", props: bM(), setup(e, t) {
  let { slots: n } = t;
  return yt({ VBtn: { color: B(() => e.color), height: "inherit", variant: B(() => e.variant) } }), ae(() => {
    var _a2;
    return S("div", { class: ne(["v-toolbar-items", e.class]), style: me(e.style) }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]);
  }), {};
} }), SM = j({ id: String, interactive: Boolean, text: String, ...ze(Si({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Tp = ee()({ name: "VTooltip", props: SM(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Ce(e, "modelValue"), { scopeId: l } = Vl(), o = Rt(), i = B(() => e.id || `v-tooltip-${o}`), r = O(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = _(() => q({ "aria-describedby": i.value }, e.activatorProps));
  return ae(() => {
    const f = Xn.filterProps(e);
    return g(Xn, q({ ref: r, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: i.value }, f, { modelValue: a.value, "onUpdate:modelValue": (v) => a.value = v, transition: c.value, absolute: true, location: s.value, origin: u.value, role: "tooltip", activatorProps: d.value, _disableGlobalStack: true }, l), { activator: n.activator, default: function() {
      var _a2;
      for (var v = arguments.length, p = new Array(v), m = 0; m < v; m++) p[m] = arguments[m];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...p)) ?? e.text;
    } });
  }), Dt({}, r);
} }), xM = j({ ...ze(iy({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand" }), ["subgroup"]) }, "VTreeviewGroup"), Yu = ee()({ name: "VTreeviewGroup", props: xM(), setup(e, t) {
  let { slots: n } = t;
  const a = O(), l = _(() => {
    var _a2;
    return ((_a2 = a.value) == null ? void 0 : _a2.isOpen) ? e.collapseIcon : e.expandIcon;
  }), o = _(() => ({ VTreeviewItem: { prependIcon: void 0, appendIcon: void 0, toggleIcon: l.value } }));
  return ae(() => {
    const i = Qo.filterProps(e);
    return g(Qo, q(i, { ref: a, class: ["v-treeview-group", e.class], subgroup: true }), { ...n, activator: n.activator ? (r) => S(be, null, [g(Fe, { defaults: o.value }, { default: () => {
      var _a2;
      return [(_a2 = n.activator) == null ? void 0 : _a2.call(n, r)];
    } })]) : void 0 });
  }), {};
} }), Ap = Symbol.for("vuetify:v-treeview"), Dp = j({ loading: Boolean, hideActions: Boolean, hasCustomPrepend: Boolean, indentLines: Array, toggleIcon: Ie, ...uy({ slim: true }) }, "VTreeviewItem"), Ku = ee()({ name: "VTreeviewItem", props: Dp(), emits: { toggleExpand: (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const l = Ge(Ap, { visibleIds: O() }).visibleIds, o = O(), i = _(() => {
    var _a2, _b2;
    return ((_a2 = o.value) == null ? void 0 : _a2.root.activatable.value) && ((_b2 = o.value) == null ? void 0 : _b2.isGroupActivator);
  }), r = _(() => {
    var _a2, _b2;
    return ((_a2 = o.value) == null ? void 0 : _a2.link.isClickable.value) || e.value != null && !!((_b2 = o.value) == null ? void 0 : _b2.list);
  }), s = _(() => !e.disabled && e.link !== false && (e.link || r.value || i.value)), u = _(() => {
    var _a2;
    return l.value && !l.value.has(Me((_a2 = o.value) == null ? void 0 : _a2.id));
  });
  function c(f) {
    var _a2, _b2;
    s.value && i.value && ((_b2 = o.value) == null ? void 0 : _b2.activate(!((_a2 = o.value) == null ? void 0 : _a2.isActivated), f));
  }
  function d(f) {
    f.preventDefault(), f.stopPropagation(), a("toggleExpand", f);
  }
  return ae(() => {
    var _a2;
    const f = Pn.filterProps(e), v = n.prepend || e.toggleIcon || e.indentLines || e.prependIcon || e.prependAvatar;
    return g(Pn, q({ ref: o }, f, { active: ((_a2 = o.value) == null ? void 0 : _a2.isActivated) || void 0, class: ["v-treeview-item", { "v-treeview-item--activatable-group-activator": i.value, "v-treeview-item--filtered": u.value }, e.class], role: "treeitem", ripple: false, onClick: c }), { ...n, prepend: v ? (p) => {
      var _a3;
      return S(be, null, [e.indentLines && e.indentLines.length > 0 ? S("div", { key: "indent-lines", class: "v-treeview-indent-lines", style: { "--v-indent-parts": e.indentLines.length } }, [e.indentLines.map((m) => S("div", { class: ne(`v-treeview-indent-line v-treeview-indent-line--${m}`) }, null))]) : "", !e.hideActions && g(Zc, { start: true }, { default: () => [e.toggleIcon ? S(be, null, [n.toggle ? g(Fe, { key: "prepend-defaults", defaults: { VBtn: { density: "compact", icon: e.toggleIcon, variant: "text", loading: e.loading }, VProgressCircular: { indeterminate: "disable-shrink", size: 20, width: 2 } } }, { default: () => [n.toggle({ ...p, loading: e.loading, props: { onClick: d } })] }) : g(Ue, { key: "prepend-toggle", density: "compact", icon: e.toggleIcon, loading: e.loading, variant: "text", onClick: d }, { loader: () => g(Oa, { indeterminate: "disable-shrink", size: "20", width: "2" }, null) })]) : S("div", { class: "v-treeview-item__level" }, null)] }), e.hasCustomPrepend ? g(Fe, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { start: true } } }, { default: () => {
        var _a4;
        return [(_a4 = n.prepend) == null ? void 0 : _a4.call(n, p)];
      } }) : S(be, null, [(_a3 = n.prepend) == null ? void 0 : _a3.call(n, p), e.prependAvatar && g(xn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && g(Xe, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]);
    } : void 0 });
  }), Dt({}, o);
} }), Mp = j({ fluid: Boolean, disabled: Boolean, loadChildren: Function, loadingIcon: { type: String, default: "$loading" }, items: Array, openOnClick: { type: Boolean, default: void 0 }, indeterminateIcon: { type: Ie, default: "$checkboxIndeterminate" }, falseIcon: Ie, trueIcon: Ie, returnObject: Boolean, activatable: Boolean, selectable: Boolean, selectedColor: String, selectStrategy: [String, Function, Object], index: Number, isLastGroup: Boolean, separateRoots: Boolean, parentIndentLines: Array, indentLinesVariant: String, path: { type: Array, default: () => [] }, ...on(Dp(), ["hideActions"]), ...bt() }, "VTreeviewChildren"), hr = ee()({ name: "VTreeviewChildren", props: Mp(), setup(e, t) {
  let { slots: n } = t;
  const a = Et(/* @__PURE__ */ new Set()), l = O([]), o = _(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
  async function i(s) {
    var _a2, _b2;
    try {
      if (!((_a2 = e.items) == null ? void 0 : _a2.length) || !e.loadChildren) return;
      ((_b2 = s == null ? void 0 : s.children) == null ? void 0 : _b2.length) === 0 && (a.add(s.value), await e.loadChildren(s.raw));
    } finally {
      a.delete(s.value);
    }
  }
  function r(s, u) {
    e.selectable && s(u);
  }
  return () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((s, u, c) => {
      var _a3, _b3;
      const { children: d, props: f } = s, v = a.has(s.value), p = !!((_a3 = c.at(u + 1)) == null ? void 0 : _a3.children), m = ((_b3 = e.path) == null ? void 0 : _b3.length) ?? 0, h = c.length - 1 === u, b = { index: u, depth: m, isFirst: u === 0, isLast: h, path: [...e.path, u], hideAction: e.hideActions }, w = v1({ depth: m, isLast: h, isLastGroup: e.isLastGroup, leafLinks: !e.hideActions && !e.fluid, separateRoots: e.separateRoots, parentIndentLines: e.parentIndentLines, variant: e.indentLinesVariant }), I = { toggle: n.toggle ? (C) => {
        var _a4;
        return (_a4 = n.toggle) == null ? void 0 : _a4.call(n, { ...C, ...b, item: s.raw, internalItem: s, loading: v });
      } : void 0, prepend: (C) => {
        var _a4;
        return S(be, null, [e.selectable && (!d || d && !["leaf", "single-leaf"].includes(e.selectStrategy)) && g(Zc, { start: true }, { default: () => [g(Fn, { key: s.value, modelValue: C.isSelected, disabled: e.disabled || f.disabled, loading: v, color: e.selectedColor, density: e.density, indeterminate: C.isIndeterminate, indeterminateIcon: e.indeterminateIcon, falseIcon: e.falseIcon, trueIcon: e.trueIcon, "onUpdate:modelValue": (x) => r(C.select, x), onClick: (x) => x.stopPropagation(), onKeydown: (x) => {
          ["Enter", "Space"].includes(x.key) && (x.stopPropagation(), r(C.select, C.isSelected));
        } }, null)] }), (_a4 = n.prepend) == null ? void 0 : _a4.call(n, { ...C, ...b, item: s.raw, internalItem: s })]);
      }, append: n.append ? (C) => {
        var _a4;
        return (_a4 = n.append) == null ? void 0 : _a4.call(n, { ...C, ...b, item: s.raw, internalItem: s });
      } : void 0, title: n.title ? (C) => {
        var _a4;
        return (_a4 = n.title) == null ? void 0 : _a4.call(n, { ...C, item: s.raw, internalItem: s });
      } : void 0, subtitle: n.subtitle ? (C) => {
        var _a4;
        return (_a4 = n.subtitle) == null ? void 0 : _a4.call(n, { ...C, item: s.raw, internalItem: s });
      } : void 0 }, V = Yu.filterProps(f), k = hr.filterProps({ ...e, ...b }), y = { hideActions: e.hideActions, indentLines: w.footer };
      return d ? g(Yu, q(V, { value: e.returnObject ? s.raw : V == null ? void 0 : V.value, rawId: V == null ? void 0 : V.value }), { activator: (C) => {
        let { props: x, isOpen: T } = C;
        const P = { ...f, ...x, value: f == null ? void 0 : f.value, hideActions: e.hideActions, indentLines: w.node, ariaExpanded: T, onToggleExpand: [() => i(s), x.onClick], onClick: e.disabled || f.disabled ? void 0 : o.value ? [() => i(s), x.onClick] : () => {
          var _a4, _b4;
          return r((_a4 = l.value[u]) == null ? void 0 : _a4.select, !((_b4 = l.value[u]) == null ? void 0 : _b4.isSelected));
        } };
        return Di(n.header, { props: P, item: s.raw, internalItem: s, loading: v }, () => g(Ku, q({ ref: (M) => l.value[u] = M }, P, { hasCustomPrepend: !!n.prepend, value: e.returnObject ? s.raw : f.value, loading: v }), I));
      }, default: () => {
        var _a4;
        return S(be, null, [g(hr, q(k, { items: d, indentLinesVariant: e.indentLinesVariant, parentIndentLines: w.children, isLastGroup: p, returnObject: e.returnObject }), n), (_a4 = n.footer) == null ? void 0 : _a4.call(n, { props: y, item: s.raw, internalItem: s, loading: v })]);
      } }) : Di(n.item, { props: f, item: s.raw, internalItem: s }, () => s.type === "divider" ? Di(n.divider, { props: s.raw }, () => g(pn, s.props, null)) : s.type === "subheader" ? Di(n.subheader, { props: s.raw }, () => g(co, s.props, null)) : g(Ku, q(f, { hasCustomPrepend: !!n.prepend, hideActions: e.hideActions, indentLines: w.leaf, value: e.returnObject ? Me(s.raw) : f.value }), I));
    }));
  };
} });
function Ep(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const n of e) t.push(n), n.children && Ep(n.children, t);
  return t;
}
const kM = j({ openAll: Boolean, indentLines: [Boolean, String], indentLinesColor: String, indentLinesOpacity: [String, Number], search: String, hideNoData: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, ...Il({ filterKeys: ["title"] }), ...ze(Mp(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]), ...ze(gy({ collapseIcon: "$treeviewCollapse", expandIcon: "$treeviewExpand", slim: true }), ["nav", "openStrategy"]), modelValue: Array }, "VTreeview"), wM = ee()({ name: "VTreeview", props: kM(), emits: { "update:opened": (e) => true, "update:activated": (e) => true, "update:selected": (e) => true, "update:modelValue": (e) => true, "click:open": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { slots: n, emit: a } = t;
  const { t: l } = ot(), { items: o } = my(e), i = B(() => e.activeColor), r = B(() => e.baseColor), s = B(() => e.color), u = Ce(e, "activated"), c = Ce(e, "selected"), d = _({ get: () => e.modelValue ?? c.value, set(V) {
    c.value = V, a("update:modelValue", V);
  } }), f = O(), v = _(() => e.openAll ? I(o.value) : e.opened), p = _(() => Ep(o.value)), m = B(() => e.search), { filteredItems: h } = Pl(e, p, m), b = _(() => {
    var _a2;
    if (!m.value) return null;
    const V = (_a2 = f.value) == null ? void 0 : _a2.getPath;
    return V ? new Set(h.value.flatMap((k) => {
      const y = e.returnObject ? k.raw : k.props.value;
      return [...V(y), ...w(y)].map(Me);
    })) : null;
  });
  function w(V) {
    var _a2, _b2;
    const k = [], y = (((_a2 = f.value) == null ? void 0 : _a2.children.get(V)) ?? []).slice();
    for (; y.length; ) {
      const C = y.shift();
      C && (k.push(C), y.push(...(((_b2 = f.value) == null ? void 0 : _b2.children.get(C)) ?? []).slice()));
    }
    return k;
  }
  function I(V) {
    let k = [];
    for (const y of V) y.children && (k.push(e.returnObject ? Me(y.raw) : y.value), y.children && (k = k.concat(I(y.children))));
    return k;
  }
  return ft(Ap, { visibleIds: b }), yt({ VTreeviewGroup: { activeColor: i, baseColor: r, color: s, collapseIcon: B(() => e.collapseIcon), expandIcon: B(() => e.expandIcon) }, VTreeviewItem: { activeClass: B(() => e.activeClass), activeColor: i, baseColor: r, color: s, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), variant: B(() => e.variant) } }), ae(() => {
    const V = eo.filterProps(e), k = hr.filterProps(e), y = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
    return g(eo, q({ ref: f }, V, { class: ["v-treeview", { "v-treeview--fluid": e.fluid }, e.class], role: "tree", openStrategy: "multiple", style: [{ "--v-treeview-indent-line-color": e.indentLinesColor, "--v-treeview-indent-line-opacity": e.indentLinesOpacity }, e.style], opened: v.value, activated: u.value, "onUpdate:activated": (C) => u.value = C, selected: d.value, "onUpdate:selected": (C) => d.value = C }), { default: () => {
      var _a2, _b2;
      return [((_a2 = b.value) == null ? void 0 : _a2.size) === 0 && !e.hideNoData && (((_b2 = n["no-data"]) == null ? void 0 : _b2.call(n)) ?? g(Pn, { key: "no-data", title: l(e.noDataText) }, null)), g(hr, q(k, { density: e.density, returnObject: e.returnObject, items: o.value, parentIndentLines: e.indentLines ? [] : void 0, indentLinesVariant: y }), n)];
    } });
  }), {};
} }), CM = ee()({ name: "VValidation", props: Kh(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const a = Xh(e, "validation");
  return () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n, a);
  };
} }), _M = Object.freeze(Object.defineProperty({ __proto__: null, VAlert: T_, VAlertTitle: Nh, VApp: MC, VAppBar: QC, VAppBarNavIcon: __, VAppBarTitle: V_, VAutocomplete: ZV, VAvatar: xn, VBadge: Dy, VBanner: tI, VBannerActions: My, VBannerText: Ey, VBottomNavigation: aI, VBottomSheet: oI, VBreadcrumbs: uI, VBreadcrumbsDivider: $y, VBreadcrumbsItem: Ry, VBtn: Ue, VBtnGroup: hu, VBtnToggle: o_, VCalendar: rP, VCard: vP, VCardActions: ab, VCardItem: ib, VCardSubtitle: lb, VCardText: rb, VCardTitle: ob, VCarousel: kP, VCarouselItem: CP, VCheckbox: N_, VCheckboxBtn: Fn, VChip: ha, VChipGroup: U_, VClassIcon: Mc, VCode: _P, VCol: eA, VColorPicker: vT, VCombobox: gT, VComponentIcon: du, VConfirmEdit: yT, VContainer: qT, VCounter: Ur, VDataIterator: AT, VDataTable: jT, VDataTableFooter: ti, VDataTableHeaders: gl, VDataTableRow: Vd, VDataTableRows: hl, VDataTableServer: KT, VDataTableVirtual: GT, VDatePicker: fA, VDatePickerControls: Ru, VDatePickerHeader: Fu, VDatePickerMonth: Lu, VDatePickerMonths: Ou, VDatePickerYears: Nu, VDefaultsProvider: Fe, VDialog: Cu, VDialogBottomTransition: RC, VDialogTopTransition: FC, VDialogTransition: Or, VDivider: pn, VEmptyState: mA, VExpandBothTransition: UC, VExpandTransition: Nr, VExpandXTransition: Hc, VExpansionPanel: gA, VExpansionPanelText: Hu, VExpansionPanelTitle: zu, VExpansionPanels: bA, VFab: SA, VFabTransition: $C, VFadeTransition: Ko, VField: za, VFieldLabel: xo, VFileInput: VA, VFooter: PA, VForm: AA, VHotkey: BA, VHover: RA, VIcon: Xe, VImg: ga, VInfiniteScroll: LA, VInput: Wt, VItem: HA, VItemGroup: NA, VKbd: Wu, VLabel: so, VLayout: WA, VLayoutItem: UA, VLazy: YA, VLigatureIcon: h1, VList: eo, VListGroup: Qo, VListImg: vV, VListItem: Pn, VListItemAction: Zc, VListItemMedia: hV, VListItemSubtitle: ry, VListItemTitle: sy, VListSubheader: co, VLocaleProvider: XA, VMain: ZA, VMenu: to, VMessages: Gh, VNavigationDrawer: iD, VNoSsr: rD, VNumberInput: fD, VOtpInput: mD, VOverlay: Xn, VPagination: Eu, VParallax: yD, VProgressCircular: Oa, VProgressLinear: Hr, VRadio: pD, VRadioGroup: xD, VRangeSlider: wD, VRating: _D, VResponsive: vu, VRow: rA, VScaleTransition: Oc, VScrollXReverseTransition: OC, VScrollXTransition: LC, VScrollYReverseTransition: HC, VScrollYTransition: NC, VSelect: cd, VSelectionControl: Na, VSelectionControlGroup: jh, VSheet: Ha, VSkeletonLoader: TD, VSlideGroup: Jo, VSlideGroupItem: AD, VSlideXReverseTransition: WC, VSlideXTransition: zC, VSlideYReverseTransition: jC, VSlideYTransition: Nc, VSlider: Mu, VSnackbar: ju, VSnackbarQueue: ED, VSpacer: $u, VSparkline: FD, VSpeedDial: OD, VStepper: GD, VStepperActions: hp, VStepperHeader: yp, VStepperItem: bp, VStepperWindow: pp, VStepperWindowItem: Sp, VSvgIcon: Dc, VSwitch: KD, VSystemBar: qD, VTab: kp, VTable: yl, VTabs: tM, VTabsWindow: wp, VTabsWindowItem: Cp, VTextField: qn, VTextarea: aM, VThemeProvider: oM, VTimePicker: yM, VTimePickerClock: Uu, VTimePickerControls: Gu, VTimeline: cM, VTimelineItem: sM, VToolbar: gu, VToolbarItems: pM, VToolbarTitle: Rc, VTooltip: Tp, VTreeview: wM, VTreeviewGroup: Yu, VTreeviewItem: Ku, VValidation: CM, VVirtualScroll: Gr, VWindow: vl, VWindowItem: ml }, Symbol.toStringTag, { value: "Module" }));
function VM(e, t) {
  const n = t.modifiers || {}, a = t.value, { once: l, immediate: o, ...i } = n, r = !Object.keys(i).length, { handler: s, options: u } = typeof a == "object" ? a : { handler: a, options: { attributes: (i == null ? void 0 : i.attr) ?? r, characterData: (i == null ? void 0 : i.char) ?? r, childList: (i == null ? void 0 : i.child) ?? r, subtree: (i == null ? void 0 : i.sub) ?? r } }, c = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null ? void 0 : s(d, f), l && Bp(e, t);
  });
  o && (s == null ? void 0 : s([], c)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = { observer: c }, c.observe(e, u);
}
function Bp(e, t) {
  var _a2;
  ((_a2 = e._mutate) == null ? void 0 : _a2[t.instance.$.uid]) && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const IM = { mounted: VM, unmounted: Bp };
function $p(e, t) {
  const { self: n = false } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || { passive: true }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = n ? e : t.arg ? document.querySelector(t.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = { handler: o, options: l, target: n ? void 0 : i });
}
function Rp(e, t) {
  var _a2;
  if (!((_a2 = e._onScroll) == null ? void 0 : _a2[t.instance.$.uid])) return;
  const { handler: n, options: a, target: l = e } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function PM(e, t) {
  t.value !== t.oldValue && (Rp(e, t), $p(e, t));
}
const TM = { mounted: $p, unmounted: Rp, updated: PM };
function AM(e, t) {
  const n = typeof e == "string" ? Ae(e) : e, a = DM(n, t);
  return { mounted: a, updated: a, unmounted(l) {
    Ig(null, l);
  } };
}
function DM(e, t) {
  return function(n, a, l) {
    var _a2, _b2, _c2;
    const o = typeof t == "function" ? t(a) : t, i = ((_a2 = a.value) == null ? void 0 : _a2.text) ?? a.value ?? (o == null ? void 0 : o.text), r = dl(a.value) ? a.value : {}, s = () => i ?? n.textContent, u = (l.ctx === a.instance.$ ? (_b2 = MM(l, a.instance.$)) == null ? void 0 : _b2.provides : (_c2 = l.ctx) == null ? void 0 : _c2.provides) ?? a.instance.$.provides, c = ba(e, q(o, r), s);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, { provides: u }), Ig(c, n);
  };
}
function MM(e, t) {
  const n = /* @__PURE__ */ new Set(), a = (o) => {
    var _a2, _b2;
    for (const i of o) {
      if (!i) continue;
      if (i === e || i.el && e.el && i.el === e.el) return true;
      n.add(i);
      let r;
      if (i.suspense ? r = a([i.ssContent]) : Array.isArray(i.children) ? r = a(i.children) : ((_a2 = i.component) == null ? void 0 : _a2.vnode) && (r = a([(_b2 = i.component) == null ? void 0 : _b2.subTree])), r) return r;
      n.delete(i);
    }
    return false;
  };
  if (!a([t.subTree])) return t;
  const l = Array.from(n).reverse();
  for (const o of l) if (o.component) return o.component;
  return t;
}
const EM = AM(Tp, (e) => {
  var _a2;
  return { activator: (dl(e.value) ? !e.value.text : ["", false, null].includes(e.value)) ? null : "parent", location: (_a2 = e.arg) == null ? void 0 : _a2.replace("-", " "), text: typeof e.value == "boolean" ? void 0 : e.value };
}), BM = Object.freeze(Object.defineProperty({ __proto__: null, ClickOutside: wu, Intersect: Rn, Mutate: IM, Resize: ei, Ripple: Ot, Scroll: TM, Tooltip: EM, Touch: gr }, Symbol.toStringTag, { value: "Module" })), $M = Ch({ components: _M, directives: BM, icons: { defaultSet: "mdi" }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
ak(x0).use($M).mount("#app");
