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
const Ee = {}, Gn = [], jt = () => {
}, cu = () => false, is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zo = (e) => e.startsWith("onUpdate:"), je = Object.assign, Go = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gm = Object.prototype.hasOwnProperty, xe = (e, t) => gm.call(e, t), se = Array.isArray, Un = (e) => si(e) === "[object Map]", uu = (e) => si(e) === "[object Set]", Wa = (e) => si(e) === "[object Date]", ue = (e) => typeof e == "function", De = (e) => typeof e == "string", kt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", fu = (e) => (Se(e) || ue(e)) && ue(e.then) && ue(e.catch), du = Object.prototype.toString, si = (e) => du.call(e), vm = (e) => si(e).slice(8, -1), mu = (e) => si(e) === "[object Object]", ss = (e) => De(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tr = Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, pm = /-\w/g, _t = os((e) => e.replace(pm, (t) => t.slice(1).toUpperCase())), ym = /\B([A-Z])/g, Vn = os((e) => e.replace(ym, "-$1").toLowerCase()), dr = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = os((e) => e ? `on${dr(e)}` : ""), dn = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, hu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, bm = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _m = (e) => {
  const t = De(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let za;
const as = () => za || (za = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function He(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = De(r) ? xm(r) : He(r);
      if (i) for (const s in i) t[s] = i[s];
    }
    return t;
  } else if (De(e) || Se(e)) return e;
}
const wm = /;(?![^(]*\))/g, Sm = /:([^]+)/, Cm = /\/\*[^]*?\*\//g;
function xm(e) {
  const t = {};
  return e.replace(Cm, "").split(wm).forEach((n) => {
    if (n) {
      const r = n.split(Sm);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Le(e) {
  let t = "";
  if (De(e)) t = e;
  else if (se(e)) for (let n = 0; n < e.length; n++) {
    const r = Le(e[n]);
    r && (t += r + " ");
  }
  else if (Se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Am = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lm = Wo(Am);
function gu(e) {
  return !!e || e === "";
}
function Em(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let r = 0; n && r < e.length; r++) n = Uo(e[r], t[r]);
  return n;
}
function Uo(e, t) {
  if (e === t) return true;
  let n = Wa(e), r = Wa(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : false;
  if (n = kt(e), r = kt(t), n || r) return e === t;
  if (n = se(e), r = se(t), n || r) return n && r ? Em(e, t) : false;
  if (n = Se(e), r = Se(t), n || r) {
    if (!n || !r) return false;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s) return false;
    for (const o in e) {
      const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (a && !l || !a && l || !Uo(e[o], t[o])) return false;
    }
  }
  return String(e) === String(t);
}
const vu = (e) => !!(e && e.__v_isRef === true), ye = (e) => De(e) ? e : e == null ? "" : se(e) || Se(e) && (e.toString === du || !ue(e.toString)) ? vu(e) ? ye(e.value) : JSON.stringify(e, pu, 2) : String(e), pu = (e, t) => vu(t) ? pu(e, t.value) : Un(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], s) => (n[Ms(r, s) + " =>"] = i, n), {}) } : uu(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ms(n)) } : kt(t) ? Ms(t) : Se(t) && !se(t) && !mu(t) ? String(t) : t, Ms = (e, t = "") => {
  var n;
  return kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Je;
class yu {
  constructor(t = false) {
    this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = Je, !t && Je && (this.index = (Je.scopes || (Je.scopes = [])).push(this) - 1);
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
      const n = Je;
      try {
        return Je = this, t();
      } finally {
        Je = n;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Je, Je = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (Je = this.prevScope, this.prevScope = void 0);
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
function jr(e) {
  return new yu(e);
}
function bu() {
  return Je;
}
function ct(e, t = false) {
  Je && Je.cleanups.push(e);
}
let Te;
const Ts = /* @__PURE__ */ new WeakSet();
class _u {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && Je.active && Je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ts.has(this) && (Ts.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Su(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Ga(this), Cu(this);
    const t = Te, n = Et;
    Te = this, Et = true;
    try {
      return this.fn();
    } finally {
      xu(this), Te = t, Et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Yo(t);
      this.deps = this.depsTail = void 0, Ga(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    io(this) && this.run();
  }
  get dirty() {
    return io(this);
  }
}
let wu = 0, Pr, Rr;
function Su(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Rr, Rr = e;
    return;
  }
  e.next = Pr, Pr = e;
}
function Zo() {
  wu++;
}
function Ko() {
  if (--wu > 0) return;
  if (Rr) {
    let t = Rr;
    for (Rr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Pr; ) {
    let t = Pr;
    for (Pr = void 0; t; ) {
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
function Cu(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xu(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Yo(r), km(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function io(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Au(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function Au(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wr) || (e.globalVersion = Wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !io(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = Te, r = Et;
  Te = e, Et = true;
  try {
    Cu(e);
    const i = e.fn(e._value);
    (t.version === 0 || dn(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Te = n, Et = r, xu(e), e.flags &= -3;
  }
}
function Yo(e, t = false) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Yo(s, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function km(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Et = true;
const Lu = [];
function en() {
  Lu.push(Et), Et = false;
}
function tn() {
  const e = Lu.pop();
  Et = e === void 0 ? true : e;
}
function Ga(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Te;
    Te = void 0;
    try {
      t();
    } finally {
      Te = n;
    }
  }
}
let Wr = 0;
class Mm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!Te || !Et || Te === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Te) n = this.activeLink = new Mm(Te, this), Te.deps ? (n.prevDep = Te.depsTail, Te.depsTail.nextDep = n, Te.depsTail = n) : Te.deps = Te.depsTail = n, Eu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Te.depsTail, n.nextDep = void 0, Te.depsTail.nextDep = n, Te.depsTail = n, Te.deps === n && (Te.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wr++, this.notify(t);
  }
  notify(t) {
    Zo();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ko();
    }
  }
}
function Eu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Eu(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Hi = /* @__PURE__ */ new WeakMap(), kn = Symbol(""), so = Symbol(""), zr = Symbol("");
function et(e, t, n) {
  if (Et && Te) {
    let r = Hi.get(e);
    r || Hi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new qo()), i.map = r, i.key = n), i.track();
  }
}
function Xt(e, t, n, r, i, s) {
  const o = Hi.get(e);
  if (!o) {
    Wr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Zo(), t === "clear") o.forEach(a);
  else {
    const l = se(e), u = l && ss(n);
    if (l && n === "length") {
      const c = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === zr || !kt(d) && d >= c) && a(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(zr)), t) {
      case "add":
        l ? u && a(o.get("length")) : (a(o.get(kn)), Un(e) && a(o.get(so)));
        break;
      case "delete":
        l || (a(o.get(kn)), Un(e) && a(o.get(so)));
        break;
      case "set":
        Un(e) && a(o.get(kn));
        break;
    }
  }
  Ko();
}
function Tm(e, t) {
  const n = Hi.get(e);
  return n && n.get(t);
}
function Dn(e) {
  const t = te(e);
  return t === e ? t : (et(t, "iterate", zr), bt(e) ? t : t.map(Mt));
}
function ls(e) {
  return et(e = te(e), "iterate", zr), e;
}
function cn(e, t) {
  return nn(e) ? tr(Mn(e) ? Mt(t) : t) : Mt(t);
}
const Pm = { __proto__: null, [Symbol.iterator]() {
  return Ps(this, Symbol.iterator, (e) => cn(this, e));
}, concat(...e) {
  return Dn(this).concat(...e.map((t) => se(t) ? Dn(t) : t));
}, entries() {
  return Ps(this, "entries", (e) => (e[1] = cn(this, e[1]), e));
}, every(e, t) {
  return Ut(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Ut(this, "filter", e, t, (n) => n.map((r) => cn(this, r)), arguments);
}, find(e, t) {
  return Ut(this, "find", e, t, (n) => cn(this, n), arguments);
}, findIndex(e, t) {
  return Ut(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Ut(this, "findLast", e, t, (n) => cn(this, n), arguments);
}, findLastIndex(e, t) {
  return Ut(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Ut(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Rs(this, "includes", e);
}, indexOf(...e) {
  return Rs(this, "indexOf", e);
}, join(e) {
  return Dn(this).join(e);
}, lastIndexOf(...e) {
  return Rs(this, "lastIndexOf", e);
}, map(e, t) {
  return Ut(this, "map", e, t, void 0, arguments);
}, pop() {
  return wr(this, "pop");
}, push(...e) {
  return wr(this, "push", e);
}, reduce(e, ...t) {
  return Ua(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Ua(this, "reduceRight", e, t);
}, shift() {
  return wr(this, "shift");
}, some(e, t) {
  return Ut(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return wr(this, "splice", e);
}, toReversed() {
  return Dn(this).toReversed();
}, toSorted(e) {
  return Dn(this).toSorted(e);
}, toSpliced(...e) {
  return Dn(this).toSpliced(...e);
}, unshift(...e) {
  return wr(this, "unshift", e);
}, values() {
  return Ps(this, "values", (e) => cn(this, e));
} };
function Ps(e, t, n) {
  const r = ls(e), i = r[t]();
  return r !== e && !bt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const Rm = Array.prototype;
function Ut(e, t, n, r, i, s) {
  const o = ls(e), a = o !== e && !bt(e), l = o[t];
  if (l !== Rm[t]) {
    const f = l.apply(e, s);
    return a ? Mt(f) : f;
  }
  let u = n;
  o !== e && (a ? u = function(f, d) {
    return n.call(this, cn(e, f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const c = l.call(o, u, r);
  return a && i ? i(c) : c;
}
function Ua(e, t, n, r) {
  const i = ls(e);
  let s = n;
  return i !== e && (bt(e) ? n.length > 3 && (s = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : s = function(o, a, l) {
    return n.call(this, o, cn(e, a), l, e);
  }), i[t](s, ...r);
}
function Rs(e, t, n) {
  const r = te(e);
  et(r, "iterate", zr);
  const i = r[t](...n);
  return (i === -1 || i === false) && cs(n[0]) ? (n[0] = te(n[0]), r[t](...n)) : i;
}
function wr(e, t, n = []) {
  en(), Zo();
  const r = te(e)[t].apply(e, n);
  return Ko(), tn(), r;
}
const Im = Wo("__proto__,__v_isRef,__isVue"), ku = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kt));
function Om(e) {
  kt(e) || (e = String(e));
  const t = te(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class Mu {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw") return r === (i ? s ? zm : Iu : s ? Ru : Pu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = se(t);
    if (!i) {
      let l;
      if (o && (l = Pm[n])) return l;
      if (n === "hasOwnProperty") return Om;
    }
    const a = Reflect.get(t, n, Ve(t) ? t : r);
    if ((kt(n) ? ku.has(n) : Im(n)) || (i || et(t, "get", n), s)) return a;
    if (Ve(a)) {
      const l = o && ss(n) ? a : a.value;
      return i && Se(l) ? er(l) : l;
    }
    return Se(a) ? i ? er(a) : Ue(a) : a;
  }
}
class Tu extends Mu {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = se(t) && ss(n);
    if (!this._isShallow) {
      const u = nn(s);
      if (!bt(r) && !nn(r) && (s = te(s), r = te(r)), !o && Ve(s) && !Ve(r)) return u || (s.value = r), true;
    }
    const a = o ? Number(n) < t.length : xe(t, n), l = Reflect.set(t, n, r, Ve(t) ? t : i);
    return t === te(i) && (a ? dn(r, s) && Xt(t, "set", n, r) : Xt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = xe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Xt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!kt(n) || !ku.has(n)) && et(t, "has", n), r;
  }
  ownKeys(t) {
    return et(t, "iterate", se(t) ? "length" : kn), Reflect.ownKeys(t);
  }
}
class Vm extends Mu {
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
const Dm = new Tu(), Hm = new Vm(), Nm = new Tu(true);
const oo = (e) => e, Si = (e) => Reflect.getPrototypeOf(e);
function Fm(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = te(i), o = Un(s), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), c = n ? oo : t ? tr : Mt;
    return !t && et(s, "iterate", l ? so : kn), je(Object.create(u), { next() {
      const { value: f, done: d } = u.next();
      return d ? { value: f, done: d } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
    } });
  };
}
function Ci(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function $m(e, t) {
  const n = { get(i) {
    const s = this.__v_raw, o = te(s), a = te(i);
    e || (dn(i, a) && et(o, "get", i), et(o, "get", a));
    const { has: l } = Si(o), u = t ? oo : e ? tr : Mt;
    if (l.call(o, i)) return u(s.get(i));
    if (l.call(o, a)) return u(s.get(a));
    s !== o && s.get(i);
  }, get size() {
    const i = this.__v_raw;
    return !e && et(te(i), "iterate", kn), i.size;
  }, has(i) {
    const s = this.__v_raw, o = te(s), a = te(i);
    return e || (dn(i, a) && et(o, "has", i), et(o, "has", a)), i === a ? s.has(i) : s.has(i) || s.has(a);
  }, forEach(i, s) {
    const o = this, a = o.__v_raw, l = te(a), u = t ? oo : e ? tr : Mt;
    return !e && et(l, "iterate", kn), a.forEach((c, f) => i.call(s, u(c), u(f), o));
  } };
  return je(n, e ? { add: Ci("add"), set: Ci("set"), delete: Ci("delete"), clear: Ci("clear") } : { add(i) {
    !t && !bt(i) && !nn(i) && (i = te(i));
    const s = te(this);
    return Si(s).has.call(s, i) || (s.add(i), Xt(s, "add", i, i)), this;
  }, set(i, s) {
    !t && !bt(s) && !nn(s) && (s = te(s));
    const o = te(this), { has: a, get: l } = Si(o);
    let u = a.call(o, i);
    u || (i = te(i), u = a.call(o, i));
    const c = l.call(o, i);
    return o.set(i, s), u ? dn(s, c) && Xt(o, "set", i, s) : Xt(o, "add", i, s), this;
  }, delete(i) {
    const s = te(this), { has: o, get: a } = Si(s);
    let l = o.call(s, i);
    l || (i = te(i), l = o.call(s, i)), a && a.call(s, i);
    const u = s.delete(i);
    return l && Xt(s, "delete", i, void 0), u;
  }, clear() {
    const i = te(this), s = i.size !== 0, o = i.clear();
    return s && Xt(i, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = Fm(i, e, t);
  }), n;
}
function Xo(e, t) {
  const n = $m(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(xe(n, i) && i in r ? n : r, i, s);
}
const Bm = { get: Xo(false, false) }, jm = { get: Xo(false, true) }, Wm = { get: Xo(true, false) };
const Pu = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), zm = /* @__PURE__ */ new WeakMap();
function Gm(e) {
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
function Um(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gm(vm(e));
}
function Ue(e) {
  return nn(e) ? e : Jo(e, false, Dm, Bm, Pu);
}
function Ou(e) {
  return Jo(e, false, Nm, jm, Ru);
}
function er(e) {
  return Jo(e, true, Hm, Wm, Iu);
}
function Jo(e, t, n, r, i) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const s = Um(e);
  if (s === 0) return e;
  const o = i.get(e);
  if (o) return o;
  const a = new Proxy(e, s === 2 ? r : n);
  return i.set(e, a), a;
}
function Mn(e) {
  return nn(e) ? Mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nn(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function cs(e) {
  return e ? !!e.__v_raw : false;
}
function te(e) {
  const t = e && e.__v_raw;
  return t ? te(t) : e;
}
function Zm(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && hu(e, "__v_skip", true), e;
}
const Mt = (e) => Se(e) ? Ue(e) : e, tr = (e) => Se(e) ? er(e) : e;
function Ve(e) {
  return e ? e.__v_isRef === true : false;
}
function X(e) {
  return Vu(e, false);
}
function ve(e) {
  return Vu(e, true);
}
function Vu(e, t) {
  return Ve(e) ? e : new Km(e, t);
}
class Km {
  constructor(t, n) {
    this.dep = new qo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : te(t), this._value = n ? t : Mt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || bt(t) || nn(t);
    t = r ? t : te(t), dn(t, n) && (this._rawValue = t, this._value = r ? t : Mt(t), this.dep.trigger());
  }
}
function re(e) {
  return Ve(e) ? e.value : e;
}
function rt(e) {
  return ue(e) ? e() : re(e);
}
const Ym = { get: (e, t, n) => t === "__v_raw" ? e : re(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const i = e[t];
  return Ve(i) && !Ve(n) ? (i.value = n, true) : Reflect.set(e, t, n, r);
} };
function Du(e) {
  return Mn(e) ? e : new Proxy(e, Ym);
}
function Hu(e) {
  const t = se(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Nu(e, n);
  return t;
}
class qm {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = te(t);
    let i = true, s = t;
    if (!se(t) || !ss(String(n))) do
      i = !cs(s) || bt(s);
    while (i && (s = s.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = re(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && Ve(this._raw[this._key])) {
      const n = this._object[this._key];
      if (Ve(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Tm(this._raw, this._key);
  }
}
class Xm {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return Ve(e) ? e : ue(e) ? new Xm(e) : Se(e) && arguments.length > 1 ? Nu(e, t, n) : X(e);
}
function Nu(e, t, n) {
  return new qm(e, t, n);
}
class Jm {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Te !== this) return Su(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return Au(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Qm(e, t, n = false) {
  let r, i;
  return ue(e) ? r = e : (r = e.get, i = e.set), new Jm(r, i, n);
}
const xi = {}, Ni = /* @__PURE__ */ new WeakMap();
let xn;
function eh(e, t = false, n = xn) {
  if (n) {
    let r = Ni.get(n);
    r || Ni.set(n, r = []), r.push(e);
  }
}
function th(e, t, n = Ee) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: a, call: l } = n, u = (_) => i ? _ : bt(_) || i === false || i === 0 ? Jt(_, 1) : Jt(_);
  let c, f, d, m, b = false, g = false;
  if (Ve(e) ? (f = () => e.value, b = bt(e)) : Mn(e) ? (f = () => u(e), b = true) : se(e) ? (g = true, b = e.some((_) => Mn(_) || bt(_)), f = () => e.map((_) => {
    if (Ve(_)) return _.value;
    if (Mn(_)) return u(_);
    if (ue(_)) return l ? l(_, 2) : _();
  })) : ue(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (d) {
      en();
      try {
        d();
      } finally {
        tn();
      }
    }
    const _ = xn;
    xn = c;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      xn = _;
    }
  } : f = jt, t && i) {
    const _ = f, x = i === true ? 1 / 0 : i;
    f = () => Jt(_(), x);
  }
  const S = bu(), v = () => {
    c.stop(), S && S.active && Go(S.effects, c);
  };
  if (s && t) {
    const _ = t;
    t = (...x) => {
      _(...x), v();
    };
  }
  let y = g ? new Array(e.length).fill(xi) : xi;
  const A = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_)) if (t) {
      const x = c.run();
      if (i || b || (g ? x.some((E, T) => dn(E, y[T])) : dn(x, y))) {
        d && d();
        const E = xn;
        xn = c;
        try {
          const T = [x, y === xi ? void 0 : g && y[0] === xi ? [] : y, m];
          y = x, l ? l(t, 3, T) : t(...T);
        } finally {
          xn = E;
        }
      }
    } else c.run();
  };
  return a && a(A), c = new _u(f), c.scheduler = o ? () => o(A, false) : A, m = (_) => eh(_, false, c), d = c.onStop = () => {
    const _ = Ni.get(c);
    if (_) {
      if (l) l(_, 4);
      else for (const x of _) x();
      Ni.delete(c);
    }
  }, t ? r ? A(true) : y = c.run() : o ? o(A.bind(null, true), true) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Jt(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, Ve(e)) Jt(e.value, t, n);
  else if (se(e)) for (let r = 0; r < e.length; r++) Jt(e[r], t, n);
  else if (uu(e) || Un(e)) e.forEach((r) => {
    Jt(r, t, n);
  });
  else if (mu(e)) {
    for (const r in e) Jt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Jt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oi(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    us(i, t, n);
  }
}
function Tt(e, t, n, r) {
  if (ue(e)) {
    const i = oi(e, t, n, r);
    return i && fu(i) && i.catch((s) => {
      us(s, t, n);
    }), i;
  }
  if (se(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++) i.push(Tt(e[s], t, n, r));
    return i;
  }
}
function us(e, t, n, r = true) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ee;
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
      en(), oi(s, null, 10, [e, l, u]), tn();
      return;
    }
  }
  nh(e, n, i, r, o);
}
function nh(e, t, n, r = true, i = false) {
  if (i) throw e;
  console.error(e);
}
const lt = [];
let Nt = -1;
const Zn = [];
let un = null, $n = 0;
const Fu = Promise.resolve();
let Fi = null;
function dt(e) {
  const t = Fi || Fu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rh(e) {
  let t = Nt + 1, n = lt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = lt[r], s = Gr(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Qo(e) {
  if (!(e.flags & 1)) {
    const t = Gr(e), n = lt[lt.length - 1];
    !n || !(e.flags & 2) && t >= Gr(n) ? lt.push(e) : lt.splice(rh(t), 0, e), e.flags |= 1, $u();
  }
}
function $u() {
  Fi || (Fi = Fu.then(ju));
}
function ih(e) {
  se(e) ? Zn.push(...e) : un && e.id === -1 ? un.splice($n + 1, 0, e) : e.flags & 1 || (Zn.push(e), e.flags |= 1), $u();
}
function Za(e, t, n = Nt + 1) {
  for (; n < lt.length; n++) {
    const r = lt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      lt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Bu(e) {
  if (Zn.length) {
    const t = [...new Set(Zn)].sort((n, r) => Gr(n) - Gr(r));
    if (Zn.length = 0, un) {
      un.push(...t);
      return;
    }
    for (un = t, $n = 0; $n < un.length; $n++) {
      const n = un[$n];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    un = null, $n = 0;
  }
}
const Gr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ju(e) {
  try {
    for (Nt = 0; Nt < lt.length; Nt++) {
      const t = lt[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), oi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nt < lt.length; Nt++) {
      const t = lt[Nt];
      t && (t.flags &= -2);
    }
    Nt = -1, lt.length = 0, Bu(), Fi = null, (lt.length || Zn.length) && ju();
  }
}
let Ke = null, Wu = null;
function $i(e) {
  const t = Ke;
  return Ke = e, Wu = e && e.type.__scopeId || null, t;
}
function $e(e, t = Ke, n) {
  if (!t || e._n) return e;
  const r = (...i) => {
    r._d && Wi(-1);
    const s = $i(t);
    let o;
    try {
      o = e(...i);
    } finally {
      $i(s), r._d && Wi(1);
    }
    return o;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function nr(e, t) {
  if (Ke === null) return e;
  const n = gs(Ke), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, a, l = Ee] = t[i];
    s && (ue(s) && (s = { mounted: s, updated: s }), s.deep && Jt(o), r.push({ dir: s, instance: n, value: o, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function yn(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (en(), Tt(l, n, 8, [e.el, a, e, t]), tn());
  }
}
function it(e, t) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), n[e] = t;
  }
}
function ke(e, t, n = false) {
  const r = ci();
  if (r || Yn) {
    let i = Yn ? Yn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && ue(t) ? t.call(r && r.proxy) : t;
  }
}
const sh = Symbol.for("v-scx"), oh = () => ke(sh);
function gn(e, t) {
  return ea(e, null, t);
}
function le(e, t, n) {
  return ea(e, t, n);
}
function ea(e, t, n = Ee) {
  const { immediate: r, deep: i, flush: s, once: o } = n, a = je({}, n), l = t && r || !t && s !== "post";
  let u;
  if (Yr) {
    if (s === "sync") {
      const m = oh();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = jt, m.resume = jt, m.pause = jt, m;
    }
  }
  const c = nt;
  a.call = (m, b, g) => Tt(m, c, b, g);
  let f = false;
  s === "post" ? a.scheduler = (m) => {
    Xe(m, c && c.suspense);
  } : s !== "sync" && (f = true, a.scheduler = (m, b) => {
    b ? m() : Qo(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const d = th(e, t, a);
  return Yr && (u ? u.push(d) : l && d()), d;
}
function ah(e, t, n) {
  const r = this.proxy, i = De(e) ? e.includes(".") ? zu(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ue(t) ? s = t : (s = t.handler, n = t);
  const o = ui(this), a = ea(i, s.bind(r), n);
  return o(), a;
}
function zu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r;
  };
}
const Gu = Symbol("_vte"), Uu = (e) => e.__isTeleport, Ir = (e) => e && (e.disabled || e.disabled === ""), Ka = (e) => e && (e.defer || e.defer === ""), Ya = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ao = (e, t) => {
  const n = e && e.to;
  return De(n) ? t ? t(n) : null : n;
}, Zu = { name: "Teleport", __isTeleport: true, process(e, t, n, r, i, s, o, a, l, u) {
  const { mc: c, pc: f, pbc: d, o: { insert: m, querySelector: b, createText: g, createComment: S } } = u, v = Ir(t.props);
  let { shapeFlag: y, children: A, dynamicChildren: _ } = t;
  if (e == null) {
    const x = t.el = g(""), E = t.anchor = g("");
    m(x, n, r), m(E, n, r);
    const T = (D, R) => {
      y & 16 && c(A, D, R, i, s, o, a, l);
    }, w = () => {
      const D = t.target = ao(t.props, b), R = lo(D, t, g, m);
      D && (o !== "svg" && Ya(D) ? o = "svg" : o !== "mathml" && qa(D) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(D), v || (T(D, R), Pi(t, false)));
    };
    v && (T(n, E), Pi(t, true)), Ka(t.props) ? (t.el.__isMounted = false, Xe(() => {
      w(), delete t.el.__isMounted;
    }, s)) : w();
  } else {
    if (Ka(t.props) && e.el.__isMounted === false) {
      Xe(() => {
        Zu.process(e, t, n, r, i, s, o, a, l, u);
      }, s);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, E = t.target = e.target, T = t.targetAnchor = e.targetAnchor, w = Ir(e.props), D = w ? n : E, R = w ? x : T;
    if (o === "svg" || Ya(E) ? o = "svg" : (o === "mathml" || qa(E)) && (o = "mathml"), _ ? (d(e.dynamicChildren, _, D, i, s, o, a), sa(e, t, true)) : l || f(e, t, D, R, i, s, o, a, false), v) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ai(t, n, x, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const F = t.target = ao(t.props, b);
      F && Ai(t, F, null, u, 0);
    } else w && Ai(t, E, T, u, 1);
    Pi(t, v);
  }
}, remove(e, t, n, { um: r, o: { remove: i } }, s) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
  if (f && (i(u), i(c)), s && i(l), o & 16) {
    const m = s || !Ir(d);
    for (let b = 0; b < a.length; b++) {
      const g = a[b];
      r(g, t, n, m, !!g.dynamicChildren);
    }
  }
}, move: Ai, hydrate: lh };
function Ai(e, t, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(o, t, n), (!f || Ir(c)) && l & 16) for (let d = 0; d < u.length; d++) i(u[d], t, n, 2);
  f && r(a, t, n);
}
function lh(e, t, n, r, i, s, { o: { nextSibling: o, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
  function d(S, v) {
    let y = v;
    for (; y; ) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor") t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, S._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      y = o(y);
    }
  }
  function m(S, v) {
    v.anchor = f(o(S), v, a(S), n, r, i, s);
  }
  const b = t.target = ao(t.props, l), g = Ir(t.props);
  if (b) {
    const S = b._lpa || b.firstChild;
    t.shapeFlag & 16 && (g ? (m(e, t), d(b, S), t.targetAnchor || lo(b, t, c, u, a(e) === b ? e : null)) : (t.anchor = o(e), d(b, S), t.targetAnchor || lo(b, t, c, u), f(S && o(S), t, b, n, r, i, s))), Pi(t, g);
  } else g && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const ch = Zu;
function Pi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function lo(e, t, n, r, i = null) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[Gu] = o, e && (r(s, e, i), r(o, e, i)), o;
}
const Ft = Symbol("_leaveCb"), Sr = Symbol("_enterCb");
function Ku() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Wt(() => {
    e.isMounted = true;
  }), zt(() => {
    e.isUnmounting = true;
  }), e;
}
const St = [Function, Array], Yu = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: St, onEnter: St, onAfterEnter: St, onEnterCancelled: St, onBeforeLeave: St, onLeave: St, onAfterLeave: St, onLeaveCancelled: St, onBeforeAppear: St, onAppear: St, onAfterAppear: St, onAppearCancelled: St }, qu = (e) => {
  const t = e.subTree;
  return t.component ? qu(t.component) : t;
}, uh = { name: "BaseTransition", props: Yu, setup(e, { slots: t }) {
  const n = ci(), r = Ku();
  return () => {
    const i = t.default && ta(t.default(), true);
    if (!i || !i.length) return;
    const s = Xu(i), o = te(e), { mode: a } = o;
    if (r.isLeaving) return Is(s);
    const l = Xa(s);
    if (!l) return Is(s);
    let u = Ur(l, o, r, n, (f) => u = f);
    l.type !== tt && In(l, u);
    let c = n.subTree && Xa(n.subTree);
    if (c && c.type !== tt && !Ln(c, l) && qu(n).type !== tt) {
      let f = Ur(c, o, r, n);
      if (In(c, f), a === "out-in" && l.type !== tt) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, Is(s);
      a === "in-out" && l.type !== tt ? f.delayLeave = (d, m, b) => {
        const g = Ju(r, c);
        g[String(c.key)] = c, d[Ft] = () => {
          m(), d[Ft] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          b(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return s;
  };
} };
function Xu(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== tt) {
      t = n;
      break;
    }
  }
  return t;
}
const fh = uh;
function Ju(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ur(e, t, n, r, i) {
  const { appear: s, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: m, onAfterLeave: b, onLeaveCancelled: g, onBeforeAppear: S, onAppear: v, onAfterAppear: y, onAppearCancelled: A } = t, _ = String(e.key), x = Ju(n, e), E = (D, R) => {
    D && Tt(D, r, 9, R);
  }, T = (D, R) => {
    const F = R[1];
    E(D, R), se(D) ? D.every((P) => P.length <= 1) && F() : D.length <= 1 && F();
  }, w = { mode: o, persisted: a, beforeEnter(D) {
    let R = l;
    if (!n.isMounted) if (s) R = S || l;
    else return;
    D[Ft] && D[Ft](true);
    const F = x[_];
    F && Ln(e, F) && F.el[Ft] && F.el[Ft](), E(R, [D]);
  }, enter(D) {
    if (x[_] === e) return;
    let R = u, F = c, P = f;
    if (!n.isMounted) if (s) R = v || u, F = y || c, P = A || f;
    else return;
    let H = false;
    D[Sr] = (z) => {
      H || (H = true, z ? E(P, [D]) : E(F, [D]), w.delayedLeave && w.delayedLeave(), D[Sr] = void 0);
    };
    const Y = D[Sr].bind(null, false);
    R ? T(R, [D, Y]) : Y();
  }, leave(D, R) {
    const F = String(e.key);
    if (D[Sr] && D[Sr](true), n.isUnmounting) return R();
    E(d, [D]);
    let P = false;
    D[Ft] = (Y) => {
      P || (P = true, R(), Y ? E(g, [D]) : E(b, [D]), D[Ft] = void 0, x[F] === e && delete x[F]);
    };
    const H = D[Ft].bind(null, false);
    x[F] = e, m ? T(m, [D, H]) : H();
  }, clone(D) {
    const R = Ur(D, t, n, r, i);
    return i && i(R), R;
  } };
  return w;
}
function Is(e) {
  if (fs(e)) return e = hn(e), e.children = null, e;
}
function Xa(e) {
  if (!fs(e)) return Uu(e.type) && e.children ? Xu(e.children) : e;
  if (e.component) return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ue(n.default)) return n.default();
  }
}
function In(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, In(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ta(e, t = false, n) {
  let r = [], i = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === _e ? (o.patchFlag & 128 && i++, r = r.concat(ta(o.children, t, a))) : (t || o.type !== tt) && r.push(a != null ? hn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function Ye(e, t) {
  return ue(e) ? je({ name: e.name }, t, { setup: e }) : e;
}
function ai() {
  const e = ci();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Qu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ja(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Bi = /* @__PURE__ */ new WeakMap();
function Or(e, t, n, r, i = false) {
  if (se(e)) {
    e.forEach((g, S) => Or(g, t && (se(t) ? t[S] : t), n, r, i));
    return;
  }
  if (Kn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Or(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? gs(r.component) : r.el, o = i ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === Ee ? a.refs = {} : a.refs, f = a.setupState, d = te(f), m = f === Ee ? cu : (g) => Ja(c, g) ? false : xe(d, g), b = (g, S) => !(S && Ja(c, S));
  if (u != null && u !== l) {
    if (Qa(t), De(u)) c[u] = null, m(u) && (f[u] = null);
    else if (Ve(u)) {
      const g = t;
      b(u, g.k) && (u.value = null), g.k && (c[g.k] = null);
    }
  }
  if (ue(l)) oi(l, a, 12, [o, c]);
  else {
    const g = De(l), S = Ve(l);
    if (g || S) {
      const v = () => {
        if (e.f) {
          const y = g ? m(l) ? f[l] : c[l] : b() || !e.k ? l.value : c[e.k];
          if (i) se(y) && Go(y, s);
          else if (se(y)) y.includes(s) || y.push(s);
          else if (g) c[l] = [s], m(l) && (f[l] = c[l]);
          else {
            const A = [s];
            b(l, e.k) && (l.value = A), e.k && (c[e.k] = A);
          }
        } else g ? (c[l] = o, m(l) && (f[l] = o)) : S && (b(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          v(), Bi.delete(e);
        };
        y.id = -1, Bi.set(e, y), Xe(y, n);
      } else Qa(e), v();
    }
  }
}
function Qa(e) {
  const t = Bi.get(e);
  t && (t.flags |= 8, Bi.delete(e));
}
as().requestIdleCallback;
as().cancelIdleCallback;
const Kn = (e) => !!e.type.__asyncLoader, fs = (e) => e.type.__isKeepAlive;
function dh(e, t) {
  tf(e, "a", t);
}
function ef(e, t) {
  tf(e, "da", t);
}
function tf(e, t, n = nt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return e();
  });
  if (ds(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) fs(i.parent.vnode) && mh(r, t, n, i), i = i.parent;
  }
}
function mh(e, t, n, r) {
  const i = ds(t, e, r, true);
  On(() => {
    Go(r[t], i);
  }, n);
}
function ds(e, t, n = nt, r = false) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      en();
      const a = ui(n), l = Tt(t, n, e, o);
      return a(), tn(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const rn = (e) => (t, n = nt) => {
  (!Yr || e === "sp") && ds(e, (...r) => t(...r), n);
}, ms = rn("bm"), Wt = rn("m"), hh = rn("bu"), na = rn("u"), zt = rn("bum"), On = rn("um"), gh = rn("sp"), vh = rn("rtg"), ph = rn("rtc");
function yh(e, t = nt) {
  ds("ec", e, t);
}
const nf = "components";
function rf(e, t) {
  return sf(nf, e, true, t) || e;
}
const bh = Symbol.for("v-ndc");
function _h(e) {
  return De(e) && sf(nf, e, false) || e;
}
function sf(e, t, n = true, r = false) {
  const i = Ke || nt;
  if (i) {
    const s = i.type;
    {
      const a = i1(s, false);
      if (a && (a === t || a === _t(t) || a === dr(_t(t)))) return s;
    }
    const o = el(i[e] || s[e], t) || el(i.appContext[e], t);
    return !o && r ? s : o;
  }
}
function el(e, t) {
  return e && (e[t] || e[_t(t)] || e[dr(_t(t))]);
}
function ht(e, t, n, r) {
  let i;
  const s = n, o = se(e);
  if (o || De(e)) {
    const a = o && Mn(e);
    let l = false, u = false;
    a && (l = !bt(e), u = nn(e), e = ls(e)), i = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++) i[c] = t(l ? u ? tr(Mt(e[c])) : Mt(e[c]) : e[c], c, void 0, s);
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
function wh(e, t, n = {}, r, i) {
  if (Ke.ce || Ke.parent && Kn(Ke.parent) && Ke.parent.ce) {
    const u = Object.keys(n).length > 0;
    return ce(), rr(_e, null, [M("slot", n, r)], u ? -2 : 64);
  }
  let s = e[t];
  s && s._c && (s._d = false), ce();
  const o = s && of(s(n)), a = n.key || o && o.key, l = rr(_e, { key: (a && !kt(a) ? a : `_${t}`) + (!o && r ? "_fb" : "") }, o || [], o && e._ === 1 ? 64 : -2);
  return s && s._c && (s._d = true), l;
}
function of(e) {
  return e.some((t) => Kr(t) ? !(t.type === tt || t.type === _e && !of(t.children)) : true) ? e : null;
}
const co = (e) => e ? Af(e) ? gs(e) : co(e.parent) : null, Vr = je(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => co(e.parent), $root: (e) => co(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => lf(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Qo(e.update);
}), $nextTick: (e) => e.n || (e.n = dt.bind(e.proxy)), $watch: (e) => ah.bind(e) }), Os = (e, t) => e !== Ee && !e.__isScriptSetup && xe(e, t), Sh = { get({ _: e }, t) {
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
      if (Os(r, t)) return o[t] = 1, r[t];
      if (i !== Ee && xe(i, t)) return o[t] = 2, i[t];
      if (xe(s, t)) return o[t] = 3, s[t];
      if (n !== Ee && xe(n, t)) return o[t] = 4, n[t];
      uo && (o[t] = 0);
    }
  }
  const u = Vr[t];
  let c, f;
  if (u) return t === "$attrs" && et(e.attrs, "get", ""), u(e);
  if ((c = a.__cssModules) && (c = c[t])) return c;
  if (n !== Ee && xe(n, t)) return o[t] = 4, n[t];
  if (f = l.config.globalProperties, xe(f, t)) return f[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: i, ctx: s } = e;
  return Os(i, t) ? (i[t] = n, true) : r !== Ee && xe(r, t) ? (r[t] = n, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o } }, a) {
  let l;
  return !!(n[a] || e !== Ee && a[0] !== "$" && xe(e, a) || Os(t, a) || xe(s, a) || xe(r, a) || xe(Vr, a) || xe(i.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function tl(e) {
  return se(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let uo = true;
function Ch(e) {
  const t = lf(e), n = e.proxy, r = e.ctx;
  uo = false, t.beforeCreate && nl(t.beforeCreate, e, "bc");
  const { data: i, computed: s, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: b, activated: g, deactivated: S, beforeDestroy: v, beforeUnmount: y, destroyed: A, unmounted: _, render: x, renderTracked: E, renderTriggered: T, errorCaptured: w, serverPrefetch: D, expose: R, inheritAttrs: F, components: P, directives: H, filters: Y } = t;
  if (u && xh(u, r, null), o) for (const Q in o) {
    const oe = o[Q];
    ue(oe) && (r[Q] = oe.bind(n));
  }
  if (i) {
    const Q = i.call(n, n);
    Se(Q) && (e.data = Ue(Q));
  }
  if (uo = true, s) for (const Q in s) {
    const oe = s[Q], Oe = ue(oe) ? oe.bind(n, n) : ue(oe.get) ? oe.get.bind(n, n) : jt, we = !ue(oe) && ue(oe.set) ? oe.set.bind(n) : jt, ae = N({ get: Oe, set: we });
    Object.defineProperty(r, Q, { enumerable: true, configurable: true, get: () => ae.value, set: (he) => ae.value = he });
  }
  if (a) for (const Q in a) af(a[Q], r, n, Q);
  if (l) {
    const Q = ue(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((oe) => {
      it(oe, Q[oe]);
    });
  }
  c && nl(c, e, "c");
  function J(Q, oe) {
    se(oe) ? oe.forEach((Oe) => Q(Oe.bind(n))) : oe && Q(oe.bind(n));
  }
  if (J(ms, f), J(Wt, d), J(hh, m), J(na, b), J(dh, g), J(ef, S), J(yh, w), J(ph, E), J(vh, T), J(zt, y), J(On, _), J(gh, D), se(R)) if (R.length) {
    const Q = e.exposed || (e.exposed = {});
    R.forEach((oe) => {
      Object.defineProperty(Q, oe, { get: () => n[oe], set: (Oe) => n[oe] = Oe, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === jt && (e.render = x), F != null && (e.inheritAttrs = F), P && (e.components = P), H && (e.directives = H), D && Qu(e);
}
function xh(e, t, n = jt) {
  se(e) && (e = fo(e));
  for (const r in e) {
    const i = e[r];
    let s;
    Se(i) ? "default" in i ? s = ke(i.from || r, i.default, true) : s = ke(i.from || r) : s = ke(i), Ve(s) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : t[r] = s;
  }
}
function nl(e, t, n) {
  Tt(se(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function af(e, t, n, r) {
  let i = r.includes(".") ? zu(n, r) : () => n[r];
  if (De(e)) {
    const s = t[e];
    ue(s) && le(i, s);
  } else if (ue(e)) le(i, e.bind(n));
  else if (Se(e)) if (se(e)) e.forEach((s) => af(s, t, n, r));
  else {
    const s = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
    ue(s) && le(i, s, e);
  }
}
function lf(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: s, config: { optionMergeStrategies: o } } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach((u) => ji(l, u, o, true)), ji(l, t, o)), Se(t) && s.set(t, l), l;
}
function ji(e, t, n, r = false) {
  const { mixins: i, extends: s } = t;
  s && ji(e, s, n, true), i && i.forEach((o) => ji(e, o, n, true));
  for (const o in t) if (!(r && o === "expose")) {
    const a = Ah[o] || n && n[o];
    e[o] = a ? a(e[o], t[o]) : t[o];
  }
  return e;
}
const Ah = { data: rl, props: il, emits: il, methods: Mr, computed: Mr, beforeCreate: ot, created: ot, beforeMount: ot, mounted: ot, beforeUpdate: ot, updated: ot, beforeDestroy: ot, beforeUnmount: ot, destroyed: ot, unmounted: ot, activated: ot, deactivated: ot, errorCaptured: ot, serverPrefetch: ot, components: Mr, directives: Mr, watch: Eh, provide: rl, inject: Lh };
function rl(e, t) {
  return t ? e ? function() {
    return je(ue(e) ? e.call(this, this) : e, ue(t) ? t.call(this, this) : t);
  } : t : e;
}
function Lh(e, t) {
  return Mr(fo(e), fo(t));
}
function fo(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mr(e, t) {
  return e ? je(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function il(e, t) {
  return e ? se(e) && se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : je(/* @__PURE__ */ Object.create(null), tl(e), tl(t ?? {})) : t;
}
function Eh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = je(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = ot(e[r], t[r]);
  return n;
}
function cf() {
  return { app: null, config: { isNativeTag: cu, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let kh = 0;
function Mh(e, t) {
  return function(r, i = null) {
    ue(r) || (r = je({}, r)), i != null && !Se(i) && (i = null);
    const s = cf(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const u = s.app = { _uid: kh++, _component: r, _props: i, _container: null, _context: s, _instance: null, version: o1, get config() {
      return s.config;
    }, set config(c) {
    }, use(c, ...f) {
      return o.has(c) || (c && ue(c.install) ? (o.add(c), c.install(u, ...f)) : ue(c) && (o.add(c), c(u, ...f))), u;
    }, mixin(c) {
      return s.mixins.includes(c) || s.mixins.push(c), u;
    }, component(c, f) {
      return f ? (s.components[c] = f, u) : s.components[c];
    }, directive(c, f) {
      return f ? (s.directives[c] = f, u) : s.directives[c];
    }, mount(c, f, d) {
      if (!l) {
        const m = u._ceVNode || M(r, i);
        return m.appContext = s, d === true ? d = "svg" : d === false && (d = void 0), e(m, c, d), l = true, u._container = c, c.__vue_app__ = u, gs(m.component);
      }
    }, onUnmount(c) {
      a.push(c);
    }, unmount() {
      l && (Tt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, f) {
      return s.provides[c] = f, u;
    }, runWithContext(c) {
      const f = Yn;
      Yn = u;
      try {
        return c();
      } finally {
        Yn = f;
      }
    } };
    return u;
  };
}
let Yn = null;
const Th = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];
function Ph(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ee;
  let i = n;
  const s = t.startsWith("update:"), o = s && Th(r, t.slice(7));
  o && (o.trim && (i = n.map((c) => De(c) ? c.trim() : c)), o.number && (i = n.map(bm)));
  let a, l = r[a = Es(t)] || r[a = Es(_t(t))];
  !l && s && (l = r[a = Es(Vn(t))]), l && Tt(l, e, 6, i);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = true, Tt(u, e, 6, i);
  }
}
const Rh = /* @__PURE__ */ new WeakMap();
function uf(e, t, n = false) {
  const r = n ? Rh : t.emitsCache, i = r.get(e);
  if (i !== void 0) return i;
  const s = e.emits;
  let o = {}, a = false;
  if (!ue(e)) {
    const l = (u) => {
      const c = uf(u, t, true);
      c && (a = true, je(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (Se(e) && r.set(e, null), null) : (se(s) ? s.forEach((l) => o[l] = null) : je(o, s), Se(e) && r.set(e, o), o);
}
function hs(e, t) {
  return !e || !is(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Vn(t)) || xe(e, t));
}
function sl(e) {
  const { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: m, ctx: b, inheritAttrs: g } = e, S = $i(e);
  let v, y;
  try {
    if (n.shapeFlag & 4) {
      const _ = i || r, x = _;
      v = $t(u.call(x, _, c, f, m, d, b)), y = a;
    } else {
      const _ = t;
      v = $t(_.length > 1 ? _(f, { attrs: a, slots: o, emit: l }) : _(f, null)), y = t.props ? a : Ih(a);
    }
  } catch (_) {
    Dr.length = 0, us(_, e, 1), v = M(tt);
  }
  let A = v;
  if (y && g !== false) {
    const _ = Object.keys(y), { shapeFlag: x } = A;
    _.length && x & 7 && (s && _.some(zo) && (y = Oh(y, s)), A = hn(A, y, false, true));
  }
  return n.dirs && (A = hn(A, null, false, true), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && In(A, n.transition), v = A, $i(S), v;
}
const Ih = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || is(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Oh = (e, t) => {
  const n = {};
  for (const r in e) (!zo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Vh(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: a, patchFlag: l } = t, u = s.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return r ? ol(r, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (ff(o, r, d) && !hs(u, d)) return true;
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
    if (ff(t, e, s) && !hs(n, s)) return true;
  }
  return false;
}
function ff(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Se(r) && Se(i) ? !Uo(r, i) : r !== i;
}
function Dh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const df = {}, mf = () => Object.create(df), hf = (e) => Object.getPrototypeOf(e) === df;
function Hh(e, t, n, r = false) {
  const i = {}, s = mf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gf(e, t, i, s);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? e.props = r ? i : Ou(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function Nh(e, t, n, r) {
  const { props: i, attrs: s, vnode: { patchFlag: o } } = e, a = te(i), [l] = e.propsOptions;
  let u = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (hs(e.emitsOptions, d)) continue;
        const m = t[d];
        if (l) if (xe(s, d)) m !== s[d] && (s[d] = m, u = true);
        else {
          const b = _t(d);
          i[b] = mo(l, a, b, m, e, false);
        }
        else m !== s[d] && (s[d] = m, u = true);
      }
    }
  } else {
    gf(e, t, i, s) && (u = true);
    let c;
    for (const f in a) (!t || !xe(t, f) && ((c = Vn(f)) === f || !xe(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = mo(l, a, f, void 0, e, true)) : delete i[f]);
    if (s !== a) for (const f in s) (!t || !xe(t, f)) && (delete s[f], u = true);
  }
  u && Xt(e.attrs, "set", "");
}
function gf(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = false, a;
  if (t) for (let l in t) {
    if (Tr(l)) continue;
    const u = t[l];
    let c;
    i && xe(i, c = _t(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : hs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = true);
  }
  if (s) {
    const l = te(n), u = a || Ee;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = mo(i, l, f, u[f], e, !xe(u, f));
    }
  }
  return o;
}
function mo(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const a = xe(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ue(l)) {
        const { propsDefaults: u } = i;
        if (n in u) r = u[n];
        else {
          const c = ui(i);
          r = u[n] = l.call(null, t), c();
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r);
    }
    o[0] && (s && !a ? r = false : o[1] && (r === "" || r === Vn(n)) && (r = true));
  }
  return r;
}
const Fh = /* @__PURE__ */ new WeakMap();
function vf(e, t, n = false) {
  const r = n ? Fh : t.propsCache, i = r.get(e);
  if (i) return i;
  const s = e.props, o = {}, a = [];
  let l = false;
  if (!ue(e)) {
    const c = (f) => {
      l = true;
      const [d, m] = vf(f, t, true);
      je(o, d), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l) return Se(e) && r.set(e, Gn), Gn;
  if (se(s)) for (let c = 0; c < s.length; c++) {
    const f = _t(s[c]);
    al(f) && (o[f] = Ee);
  }
  else if (s) for (const c in s) {
    const f = _t(c);
    if (al(f)) {
      const d = s[c], m = o[f] = se(d) || ue(d) ? { type: d } : je({}, d), b = m.type;
      let g = false, S = true;
      if (se(b)) for (let v = 0; v < b.length; ++v) {
        const y = b[v], A = ue(y) && y.name;
        if (A === "Boolean") {
          g = true;
          break;
        } else A === "String" && (S = false);
      }
      else g = ue(b) && b.name === "Boolean";
      m[0] = g, m[1] = S, (g || xe(m, "default")) && a.push(f);
    }
  }
  const u = [o, a];
  return Se(e) && r.set(e, u), u;
}
function al(e) {
  return e[0] !== "$" && !Tr(e);
}
const ra = (e) => e === "_" || e === "_ctx" || e === "$stable", ia = (e) => se(e) ? e.map($t) : [$t(e)], $h = (e, t, n) => {
  if (t._n) return t;
  const r = $e((...i) => ia(t(...i)), n);
  return r._c = false, r;
}, pf = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ra(i)) continue;
    const s = e[i];
    if (ue(s)) t[i] = $h(i, s, r);
    else if (s != null) {
      const o = ia(s);
      t[i] = () => o;
    }
  }
}, yf = (e, t) => {
  const n = ia(t);
  e.slots.default = () => n;
}, bf = (e, t, n) => {
  for (const r in t) (n || !ra(r)) && (e[r] = t[r]);
}, Bh = (e, t, n) => {
  const r = e.slots = mf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (bf(r, t, n), n && hu(r, "_", i, true)) : pf(t, r);
  } else t && yf(e, t);
}, jh = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = true, o = Ee;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? s = false : bf(i, t, n) : (s = !t.$stable, pf(t, i)), o = t;
  } else t && (yf(e, t), o = { default: 1 });
  if (s) for (const a in i) !ra(a) && o[a] == null && delete i[a];
}, Xe = Zh;
function Wh(e) {
  return zh(e);
}
function zh(e, t) {
  const n = as();
  n.__VUE__ = true;
  const { insert: r, remove: i, patchProp: s, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m = jt, insertStaticContent: b } = e, g = (h, p, C, I = null, V = null, O = null, K = void 0, U = null, W = !!p.dynamicChildren) => {
    if (h === p) return;
    h && !Ln(h, p) && (I = L(h), he(h, V, O, true), h = null), p.patchFlag === -2 && (W = false, p.dynamicChildren = null);
    const { type: $, ref: ie, shapeFlag: q } = p;
    switch ($) {
      case li:
        S(h, p, C, I);
        break;
      case tt:
        v(h, p, C, I);
        break;
      case Ds:
        h == null && y(p, C, I, K);
        break;
      case _e:
        P(h, p, C, I, V, O, K, U, W);
        break;
      default:
        q & 1 ? x(h, p, C, I, V, O, K, U, W) : q & 6 ? H(h, p, C, I, V, O, K, U, W) : (q & 64 || q & 128) && $.process(h, p, C, I, V, O, K, U, W, Z);
    }
    ie != null && V ? Or(ie, h && h.ref, O, p || h, !p) : ie == null && h && h.ref != null && Or(h.ref, null, O, h, true);
  }, S = (h, p, C, I) => {
    if (h == null) r(p.el = a(p.children), C, I);
    else {
      const V = p.el = h.el;
      p.children !== h.children && u(V, p.children);
    }
  }, v = (h, p, C, I) => {
    h == null ? r(p.el = l(p.children || ""), C, I) : p.el = h.el;
  }, y = (h, p, C, I) => {
    [h.el, h.anchor] = b(h.children, p, C, I, h.el, h.anchor);
  }, A = ({ el: h, anchor: p }, C, I) => {
    let V;
    for (; h && h !== p; ) V = d(h), r(h, C, I), h = V;
    r(p, C, I);
  }, _ = ({ el: h, anchor: p }) => {
    let C;
    for (; h && h !== p; ) C = d(h), i(h), h = C;
    i(p);
  }, x = (h, p, C, I, V, O, K, U, W) => {
    if (p.type === "svg" ? K = "svg" : p.type === "math" && (K = "mathml"), h == null) E(p, C, I, V, O, K, U, W);
    else {
      const $ = h.el && h.el._isVueCE ? h.el : null;
      try {
        $ && $._beginPatch(), D(h, p, V, O, K, U, W);
      } finally {
        $ && $._endPatch();
      }
    }
  }, E = (h, p, C, I, V, O, K, U) => {
    let W, $;
    const { props: ie, shapeFlag: q, transition: ee, dirs: fe } = h;
    if (W = h.el = o(h.type, O, ie && ie.is, ie), q & 8 ? c(W, h.children) : q & 16 && w(h.children, W, null, I, V, Vs(h, O), K, U), fe && yn(h, null, I, "created"), T(W, h, h.scopeId, K, I), ie) {
      for (const Me in ie) Me !== "value" && !Tr(Me) && s(W, Me, null, ie[Me], O, I);
      "value" in ie && s(W, "value", null, ie.value, O), ($ = ie.onVnodeBeforeMount) && Dt($, I, h);
    }
    fe && yn(h, null, I, "beforeMount");
    const be = Gh(V, ee);
    be && ee.beforeEnter(W), r(W, p, C), (($ = ie && ie.onVnodeMounted) || be || fe) && Xe(() => {
      $ && Dt($, I, h), be && ee.enter(W), fe && yn(h, null, I, "mounted");
    }, V);
  }, T = (h, p, C, I, V) => {
    if (C && m(h, C), I) for (let O = 0; O < I.length; O++) m(h, I[O]);
    if (V) {
      let O = V.subTree;
      if (p === O || Sf(O.type) && (O.ssContent === p || O.ssFallback === p)) {
        const K = V.vnode;
        T(h, K, K.scopeId, K.slotScopeIds, V.parent);
      }
    }
  }, w = (h, p, C, I, V, O, K, U, W = 0) => {
    for (let $ = W; $ < h.length; $++) {
      const ie = h[$] = U ? qt(h[$]) : $t(h[$]);
      g(null, ie, p, C, I, V, O, K, U);
    }
  }, D = (h, p, C, I, V, O, K) => {
    const U = p.el = h.el;
    let { patchFlag: W, dynamicChildren: $, dirs: ie } = p;
    W |= h.patchFlag & 16;
    const q = h.props || Ee, ee = p.props || Ee;
    let fe;
    if (C && bn(C, false), (fe = ee.onVnodeBeforeUpdate) && Dt(fe, C, p, h), ie && yn(p, h, C, "beforeUpdate"), C && bn(C, true), (q.innerHTML && ee.innerHTML == null || q.textContent && ee.textContent == null) && c(U, ""), $ ? R(h.dynamicChildren, $, U, C, I, Vs(p, V), O) : K || oe(h, p, U, null, C, I, Vs(p, V), O, false), W > 0) {
      if (W & 16) F(U, q, ee, C, V);
      else if (W & 2 && q.class !== ee.class && s(U, "class", null, ee.class, V), W & 4 && s(U, "style", q.style, ee.style, V), W & 8) {
        const be = p.dynamicProps;
        for (let Me = 0; Me < be.length; Me++) {
          const Ae = be[Me], ut = q[Ae], ft = ee[Ae];
          (ft !== ut || Ae === "value") && s(U, Ae, ut, ft, V, C);
        }
      }
      W & 1 && h.children !== p.children && c(U, p.children);
    } else !K && $ == null && F(U, q, ee, C, V);
    ((fe = ee.onVnodeUpdated) || ie) && Xe(() => {
      fe && Dt(fe, C, p, h), ie && yn(p, h, C, "updated");
    }, I);
  }, R = (h, p, C, I, V, O, K) => {
    for (let U = 0; U < p.length; U++) {
      const W = h[U], $ = p[U], ie = W.el && (W.type === _e || !Ln(W, $) || W.shapeFlag & 198) ? f(W.el) : C;
      g(W, $, ie, null, I, V, O, K, true);
    }
  }, F = (h, p, C, I, V) => {
    if (p !== C) {
      if (p !== Ee) for (const O in p) !Tr(O) && !(O in C) && s(h, O, p[O], null, V, I);
      for (const O in C) {
        if (Tr(O)) continue;
        const K = C[O], U = p[O];
        K !== U && O !== "value" && s(h, O, U, K, V, I);
      }
      "value" in C && s(h, "value", p.value, C.value, V);
    }
  }, P = (h, p, C, I, V, O, K, U, W) => {
    const $ = p.el = h ? h.el : a(""), ie = p.anchor = h ? h.anchor : a("");
    let { patchFlag: q, dynamicChildren: ee, slotScopeIds: fe } = p;
    fe && (U = U ? U.concat(fe) : fe), h == null ? (r($, C, I), r(ie, C, I), w(p.children || [], C, ie, V, O, K, U, W)) : q > 0 && q & 64 && ee && h.dynamicChildren && h.dynamicChildren.length === ee.length ? (R(h.dynamicChildren, ee, C, V, O, K, U), (p.key != null || V && p === V.subTree) && sa(h, p, true)) : oe(h, p, C, ie, V, O, K, U, W);
  }, H = (h, p, C, I, V, O, K, U, W) => {
    p.slotScopeIds = U, h == null ? p.shapeFlag & 512 ? V.ctx.activate(p, C, I, K, W) : Y(p, C, I, V, O, K, W) : z(h, p, W);
  }, Y = (h, p, C, I, V, O, K) => {
    const U = h.component = Qh(h, I, V);
    if (fs(h) && (U.ctx.renderer = Z), e1(U, false, K), U.asyncDep) {
      if (V && V.registerDep(U, J, K), !h.el) {
        const W = U.subTree = M(tt);
        v(null, W, p, C), h.placeholder = W.el;
      }
    } else J(U, h, p, C, V, O, K);
  }, z = (h, p, C) => {
    const I = p.component = h.component;
    if (Vh(h, p, C)) if (I.asyncDep && !I.asyncResolved) {
      Q(I, p, C);
      return;
    } else I.next = p, I.update();
    else p.el = h.el, I.vnode = p;
  }, J = (h, p, C, I, V, O, K) => {
    const U = () => {
      if (h.isMounted) {
        let { next: q, bu: ee, u: fe, parent: be, vnode: Me } = h;
        {
          const Ot = _f(h);
          if (Ot) {
            q && (q.el = Me.el, Q(h, q, K)), Ot.asyncDep.then(() => {
              Xe(() => {
                h.isUnmounted || $();
              }, V);
            });
            return;
          }
        }
        let Ae = q, ut;
        bn(h, false), q ? (q.el = Me.el, Q(h, q, K)) : q = Me, ee && ks(ee), (ut = q.props && q.props.onVnodeBeforeUpdate) && Dt(ut, be, q, Me), bn(h, true);
        const ft = sl(h), It = h.subTree;
        h.subTree = ft, g(It, ft, f(It.el), L(It), h, V, O), q.el = ft.el, Ae === null && Dh(h, ft.el), fe && Xe(fe, V), (ut = q.props && q.props.onVnodeUpdated) && Xe(() => Dt(ut, be, q, Me), V);
      } else {
        let q;
        const { el: ee, props: fe } = p, { bm: be, m: Me, parent: Ae, root: ut, type: ft } = h, It = Kn(p);
        bn(h, false), be && ks(be), !It && (q = fe && fe.onVnodeBeforeMount) && Dt(q, Ae, p), bn(h, true);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(ft);
          const Ot = h.subTree = sl(h);
          g(null, Ot, C, I, h, V, O), p.el = Ot.el;
        }
        if (Me && Xe(Me, V), !It && (q = fe && fe.onVnodeMounted)) {
          const Ot = p;
          Xe(() => Dt(q, Ae, Ot), V);
        }
        (p.shapeFlag & 256 || Ae && Kn(Ae.vnode) && Ae.vnode.shapeFlag & 256) && h.a && Xe(h.a, V), h.isMounted = true, p = C = I = null;
      }
    };
    h.scope.on();
    const W = h.effect = new _u(U);
    h.scope.off();
    const $ = h.update = W.run.bind(W), ie = h.job = W.runIfDirty.bind(W);
    ie.i = h, ie.id = h.uid, W.scheduler = () => Qo(ie), bn(h, true), $();
  }, Q = (h, p, C) => {
    p.component = h;
    const I = h.vnode.props;
    h.vnode = p, h.next = null, Nh(h, p.props, I, C), jh(h, p.children, C), en(), Za(h), tn();
  }, oe = (h, p, C, I, V, O, K, U, W = false) => {
    const $ = h && h.children, ie = h ? h.shapeFlag : 0, q = p.children, { patchFlag: ee, shapeFlag: fe } = p;
    if (ee > 0) {
      if (ee & 128) {
        we($, q, C, I, V, O, K, U, W);
        return;
      } else if (ee & 256) {
        Oe($, q, C, I, V, O, K, U, W);
        return;
      }
    }
    fe & 8 ? (ie & 16 && Ne($, V, O), q !== $ && c(C, q)) : ie & 16 ? fe & 16 ? we($, q, C, I, V, O, K, U, W) : Ne($, V, O, true) : (ie & 8 && c(C, ""), fe & 16 && w(q, C, I, V, O, K, U, W));
  }, Oe = (h, p, C, I, V, O, K, U, W) => {
    h = h || Gn, p = p || Gn;
    const $ = h.length, ie = p.length, q = Math.min($, ie);
    let ee;
    for (ee = 0; ee < q; ee++) {
      const fe = p[ee] = W ? qt(p[ee]) : $t(p[ee]);
      g(h[ee], fe, C, null, V, O, K, U, W);
    }
    $ > ie ? Ne(h, V, O, true, false, q) : w(p, C, I, V, O, K, U, W, q);
  }, we = (h, p, C, I, V, O, K, U, W) => {
    let $ = 0;
    const ie = p.length;
    let q = h.length - 1, ee = ie - 1;
    for (; $ <= q && $ <= ee; ) {
      const fe = h[$], be = p[$] = W ? qt(p[$]) : $t(p[$]);
      if (Ln(fe, be)) g(fe, be, C, null, V, O, K, U, W);
      else break;
      $++;
    }
    for (; $ <= q && $ <= ee; ) {
      const fe = h[q], be = p[ee] = W ? qt(p[ee]) : $t(p[ee]);
      if (Ln(fe, be)) g(fe, be, C, null, V, O, K, U, W);
      else break;
      q--, ee--;
    }
    if ($ > q) {
      if ($ <= ee) {
        const fe = ee + 1, be = fe < ie ? p[fe].el : I;
        for (; $ <= ee; ) g(null, p[$] = W ? qt(p[$]) : $t(p[$]), C, be, V, O, K, U, W), $++;
      }
    } else if ($ > ee) for (; $ <= q; ) he(h[$], V, O, true), $++;
    else {
      const fe = $, be = $, Me = /* @__PURE__ */ new Map();
      for ($ = be; $ <= ee; $++) {
        const mt = p[$] = W ? qt(p[$]) : $t(p[$]);
        mt.key != null && Me.set(mt.key, $);
      }
      let Ae, ut = 0;
      const ft = ee - be + 1;
      let It = false, Ot = 0;
      const _r = new Array(ft);
      for ($ = 0; $ < ft; $++) _r[$] = 0;
      for ($ = fe; $ <= q; $++) {
        const mt = h[$];
        if (ut >= ft) {
          he(mt, V, O, true);
          continue;
        }
        let Vt;
        if (mt.key != null) Vt = Me.get(mt.key);
        else for (Ae = be; Ae <= ee; Ae++) if (_r[Ae - be] === 0 && Ln(mt, p[Ae])) {
          Vt = Ae;
          break;
        }
        Vt === void 0 ? he(mt, V, O, true) : (_r[Vt - be] = $ + 1, Vt >= Ot ? Ot = Vt : It = true, g(mt, p[Vt], C, null, V, O, K, U, W), ut++);
      }
      const $a = It ? Uh(_r) : Gn;
      for (Ae = $a.length - 1, $ = ft - 1; $ >= 0; $--) {
        const mt = be + $, Vt = p[mt], Ba = p[mt + 1], ja = mt + 1 < ie ? Ba.el || wf(Ba) : I;
        _r[$] === 0 ? g(null, Vt, C, ja, V, O, K, U, W) : It && (Ae < 0 || $ !== $a[Ae] ? ae(Vt, C, ja, 2) : Ae--);
      }
    }
  }, ae = (h, p, C, I, V = null) => {
    const { el: O, type: K, transition: U, children: W, shapeFlag: $ } = h;
    if ($ & 6) {
      ae(h.component.subTree, p, C, I);
      return;
    }
    if ($ & 128) {
      h.suspense.move(p, C, I);
      return;
    }
    if ($ & 64) {
      K.move(h, p, C, Z);
      return;
    }
    if (K === _e) {
      r(O, p, C);
      for (let q = 0; q < W.length; q++) ae(W[q], p, C, I);
      r(h.anchor, p, C);
      return;
    }
    if (K === Ds) {
      A(h, p, C);
      return;
    }
    if (I !== 2 && $ & 1 && U) if (I === 0) U.beforeEnter(O), r(O, p, C), Xe(() => U.enter(O), V);
    else {
      const { leave: q, delayLeave: ee, afterLeave: fe } = U, be = () => {
        h.ctx.isUnmounted ? i(O) : r(O, p, C);
      }, Me = () => {
        O._isLeaving && O[Ft](true), q(O, () => {
          be(), fe && fe();
        });
      };
      ee ? ee(O, be, Me) : Me();
    }
    else r(O, p, C);
  }, he = (h, p, C, I = false, V = false) => {
    const { type: O, props: K, ref: U, children: W, dynamicChildren: $, shapeFlag: ie, patchFlag: q, dirs: ee, cacheIndex: fe } = h;
    if (q === -2 && (V = false), U != null && (en(), Or(U, null, C, h, true), tn()), fe != null && (p.renderCache[fe] = void 0), ie & 256) {
      p.ctx.deactivate(h);
      return;
    }
    const be = ie & 1 && ee, Me = !Kn(h);
    let Ae;
    if (Me && (Ae = K && K.onVnodeBeforeUnmount) && Dt(Ae, p, h), ie & 6) Ge(h.component, C, I);
    else {
      if (ie & 128) {
        h.suspense.unmount(C, I);
        return;
      }
      be && yn(h, null, p, "beforeUnmount"), ie & 64 ? h.type.remove(h, p, C, Z, I) : $ && !$.hasOnce && (O !== _e || q > 0 && q & 64) ? Ne($, p, C, false, true) : (O === _e && q & 384 || !V && ie & 16) && Ne(W, p, C), I && de(h);
    }
    (Me && (Ae = K && K.onVnodeUnmounted) || be) && Xe(() => {
      Ae && Dt(Ae, p, h), be && yn(h, null, p, "unmounted");
    }, C);
  }, de = (h) => {
    const { type: p, el: C, anchor: I, transition: V } = h;
    if (p === _e) {
      Be(C, I);
      return;
    }
    if (p === Ds) {
      _(h);
      return;
    }
    const O = () => {
      i(C), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (h.shapeFlag & 1 && V && !V.persisted) {
      const { leave: K, delayLeave: U } = V, W = () => K(C, O);
      U ? U(h.el, O, W) : W();
    } else O();
  }, Be = (h, p) => {
    let C;
    for (; h !== p; ) C = d(h), i(h), h = C;
    i(p);
  }, Ge = (h, p, C) => {
    const { bum: I, scope: V, job: O, subTree: K, um: U, m: W, a: $ } = h;
    ll(W), ll($), I && ks(I), V.stop(), O && (O.flags |= 8, he(K, h, p, C)), U && Xe(U, p), Xe(() => {
      h.isUnmounted = true;
    }, p);
  }, Ne = (h, p, C, I = false, V = false, O = 0) => {
    for (let K = O; K < h.length; K++) he(h[K], p, C, I, V);
  }, L = (h) => {
    if (h.shapeFlag & 6) return L(h.component.subTree);
    if (h.shapeFlag & 128) return h.suspense.next();
    const p = d(h.anchor || h.el), C = p && p[Gu];
    return C ? d(C) : p;
  };
  let j = false;
  const G = (h, p, C) => {
    let I;
    h == null ? p._vnode && (he(p._vnode, null, null, true), I = p._vnode.component) : g(p._vnode || null, h, p, null, null, null, C), p._vnode = h, j || (j = true, Za(I), Bu(), j = false);
  }, Z = { p: g, um: he, m: ae, r: de, mt: Y, mc: w, pc: oe, pbc: R, n: L, o: e };
  return { render: G, hydrate: void 0, createApp: Mh(G) };
}
function Vs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Gh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sa(e, t, n = false) {
  const r = e.children, i = t.children;
  if (se(r) && se(i)) for (let s = 0; s < r.length; s++) {
    const o = r[s];
    let a = i[s];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = qt(i[s]), a.el = o.el), !n && a.patchFlag !== -2 && sa(o, a)), a.type === li && (a.patchFlag === -1 && (a = i[s] = qt(a)), a.el = o.el), a.type === tt && !a.el && (a.el = o.el);
  }
}
function Uh(e) {
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
function _f(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : _f(t);
}
function ll(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function wf(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? wf(t.subTree) : null;
}
const Sf = (e) => e.__isSuspense;
function Zh(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : ih(e);
}
const _e = Symbol.for("v-fgt"), li = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), Ds = Symbol.for("v-stc"), Dr = [];
let vt = null;
function ce(e = false) {
  Dr.push(vt = e ? null : []);
}
function Kh() {
  Dr.pop(), vt = Dr[Dr.length - 1] || null;
}
let Zr = 1;
function Wi(e, t = false) {
  Zr += e, e < 0 && vt && t && (vt.hasOnce = true);
}
function Cf(e) {
  return e.dynamicChildren = Zr > 0 ? vt || Gn : null, Kh(), Zr > 0 && vt && vt.push(e), e;
}
function me(e, t, n, r, i, s) {
  return Cf(k(e, t, n, r, i, s, true));
}
function rr(e, t, n, r, i) {
  return Cf(M(e, t, n, r, i, true));
}
function Kr(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xf = ({ key: e }) => e ?? null, Ri = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? De(e) || Ve(e) || ue(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, r = 0, i = null, s = e === _e ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && xf(t), ref: t && Ri(t), scopeId: Wu, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: r, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Ke };
  return a ? (oa(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= De(n) ? 8 : 16), Zr > 0 && !o && vt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && vt.push(l), l;
}
const M = Yh;
function Yh(e, t = null, n = null, r = 0, i = null, s = false) {
  if ((!e || e === bh) && (e = tt), Kr(e)) {
    const a = hn(e, t, true);
    return n && oa(a, n), Zr > 0 && !s && vt && (a.shapeFlag & 6 ? vt[vt.indexOf(e)] = a : vt.push(a)), a.patchFlag = -2, a;
  }
  if (s1(e) && (e = e.__vccOpts), t) {
    t = qh(t);
    let { class: a, style: l } = t;
    a && !De(a) && (t.class = Le(a)), Se(l) && (cs(l) && !se(l) && (l = je({}, l)), t.style = He(l));
  }
  const o = De(e) ? 1 : Sf(e) ? 128 : Uu(e) ? 64 : Se(e) ? 4 : ue(e) ? 2 : 0;
  return k(e, t, n, r, i, o, s, true);
}
function qh(e) {
  return e ? cs(e) || hf(e) ? je({}, e) : e : null;
}
function hn(e, t, n = false, r = false) {
  const { props: i, ref: s, patchFlag: o, children: a, transition: l } = e, u = t ? Re(i || {}, t) : i, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && xf(u), ref: t && t.ref ? n && s ? se(s) ? s.concat(Ri(t)) : [s, Ri(t)] : Ri(t) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && hn(e.ssContent), ssFallback: e.ssFallback && hn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && r && In(c, l.clone(c)), c;
}
function qn(e = " ", t = 0) {
  return M(li, null, e, t);
}
function ir(e = "", t = false) {
  return t ? (ce(), rr(tt, null, e)) : M(tt, null, e);
}
function $t(e) {
  return e == null || typeof e == "boolean" ? M(tt) : se(e) ? M(_e, null, e.slice()) : Kr(e) ? qt(e) : M(li, null, String(e));
}
function qt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : hn(e);
}
function oa(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (se(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const i = t.default;
    i && (i._c && (i._d = false), oa(e, i()), i._c && (i._d = true));
    return;
  } else {
    n = 32;
    const i = t._;
    !i && !hf(t) ? t._ctx = Ke : i === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else ue(t) ? (t = { default: t, _ctx: Ke }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [qn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Re(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r) if (i === "class") t.class !== r.class && (t.class = Le([t.class, r.class]));
    else if (i === "style") t.style = He([t.style, r.style]);
    else if (is(i)) {
      const s = t[i], o = r[i];
      o && s !== o && !(se(s) && s.includes(o)) && (t[i] = s ? [].concat(s, o) : o);
    } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Dt(e, t, n, r = null) {
  Tt(e, t, 7, [n, r]);
}
const Xh = cf();
let Jh = 0;
function Qh(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Xh, s = { uid: Jh++, vnode: e, type: r, parent: t, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new yu(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(i.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: vf(r, i), emitsOptions: uf(r, i), emit: null, emitted: null, propsDefaults: Ee, inheritAttrs: r.inheritAttrs, ctx: Ee, data: Ee, props: Ee, attrs: Ee, slots: Ee, refs: Ee, setupState: Ee, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ph.bind(null, s), e.ce && e.ce(s), s;
}
let nt = null;
const ci = () => nt || Ke;
let zi, ho;
{
  const e = as(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  zi = t("__VUE_INSTANCE_SETTERS__", (n) => nt = n), ho = t("__VUE_SSR_SETTERS__", (n) => Yr = n);
}
const ui = (e) => {
  const t = nt;
  return zi(e), e.scope.on(), () => {
    e.scope.off(), zi(t);
  };
}, cl = () => {
  nt && nt.scope.off(), zi(null);
};
function Af(e) {
  return e.vnode.shapeFlag & 4;
}
let Yr = false;
function e1(e, t = false, n = false) {
  t && ho(t);
  const { props: r, children: i } = e.vnode, s = Af(e);
  Hh(e, r, s, t), Bh(e, i, n || t);
  const o = s ? t1(e, t) : void 0;
  return t && ho(false), o;
}
function t1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sh);
  const { setup: r } = n;
  if (r) {
    en();
    const i = e.setupContext = r.length > 1 ? r1(e) : null, s = ui(e), o = oi(r, e, 0, [e.props, i]), a = fu(o);
    if (tn(), s(), (a || e.sp) && !Kn(e) && Qu(e), a) {
      if (o.then(cl, cl), t) return o.then((l) => {
        ul(e, l);
      }).catch((l) => {
        us(l, e, 0);
      });
      e.asyncDep = o;
    } else ul(e, o);
  } else Lf(e);
}
function ul(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Du(t)), Lf(e);
}
function Lf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || jt);
  {
    const i = ui(e);
    en();
    try {
      Ch(e);
    } finally {
      tn(), i();
    }
  }
}
const n1 = { get(e, t) {
  return et(e, "get", ""), e[t];
} };
function r1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, n1), slots: e.slots, emit: e.emit, expose: t };
}
function gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Du(Zm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Vr) return Vr[n](e);
  }, has(t, n) {
    return n in t || n in Vr;
  } })) : e.proxy;
}
function i1(e, t = true) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function s1(e) {
  return ue(e) && "__vccOpts" in e;
}
const N = (e, t) => Qm(e, t, Yr);
function vn(e, t, n) {
  try {
    Wi(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !se(t) ? Kr(t) ? M(e, null, [t]) : M(e, t) : M(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Kr(n) && (n = [n]), M(e, t, n));
  } finally {
    Wi(1);
  }
}
const o1 = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let go;
const fl = typeof window < "u" && window.trustedTypes;
if (fl) try {
  go = fl.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Ef = go ? (e) => go.createHTML(e) : (e) => e, a1 = "http://www.w3.org/2000/svg", l1 = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, dl = Yt && Yt.createElement("template"), c1 = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const i = t === "svg" ? Yt.createElementNS(a1, e) : t === "mathml" ? Yt.createElementNS(l1, e) : n ? Yt.createElement(e, { is: n }) : Yt.createElement(e);
  return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
}, createText: (e) => Yt.createTextNode(e), createComment: (e) => Yt.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Yt.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, i, s) {
  const o = n ? n.previousSibling : t.lastChild;
  if (i && (i === s || i.nextSibling)) for (; t.insertBefore(i.cloneNode(true), n), !(i === s || !(i = i.nextSibling)); ) ;
  else {
    dl.innerHTML = Ef(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const a = dl.content;
    if (r === "svg" || r === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    t.insertBefore(a, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, on = "transition", Cr = "animation", sr = Symbol("_vtc"), kf = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Mf = je({}, Yu, kf), u1 = (e) => (e.displayName = "Transition", e.props = Mf, e), or = u1((e, { slots: t }) => vn(fh, Tf(e), t)), _n = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ml = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Tf(e) {
  const t = {};
  for (const P in e) P in kf || (t[P] = e[P]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: i, enterFromClass: s = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, b = f1(i), g = b && b[0], S = b && b[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: A, onLeave: _, onLeaveCancelled: x, onBeforeAppear: E = v, onAppear: T = y, onAppearCancelled: w = A } = t, D = (P, H, Y, z) => {
    P._enterCancelled = z, ln(P, H ? c : a), ln(P, H ? u : o), Y && Y();
  }, R = (P, H) => {
    P._isLeaving = false, ln(P, f), ln(P, m), ln(P, d), H && H();
  }, F = (P) => (H, Y) => {
    const z = P ? T : y, J = () => D(H, P, Y);
    _n(z, [H, J]), hl(() => {
      ln(H, P ? l : s), Ht(H, P ? c : a), ml(z) || gl(H, r, g, J);
    });
  };
  return je(t, { onBeforeEnter(P) {
    _n(v, [P]), Ht(P, s), Ht(P, o);
  }, onBeforeAppear(P) {
    _n(E, [P]), Ht(P, l), Ht(P, u);
  }, onEnter: F(false), onAppear: F(true), onLeave(P, H) {
    P._isLeaving = true;
    const Y = () => R(P, H);
    Ht(P, f), P._enterCancelled ? (Ht(P, d), vo(P)) : (vo(P), Ht(P, d)), hl(() => {
      P._isLeaving && (ln(P, f), Ht(P, m), ml(_) || gl(P, r, S, Y));
    }), _n(_, [P, Y]);
  }, onEnterCancelled(P) {
    D(P, false, void 0, true), _n(A, [P]);
  }, onAppearCancelled(P) {
    D(P, true, void 0, true), _n(w, [P]);
  }, onLeaveCancelled(P) {
    R(P), _n(x, [P]);
  } });
}
function f1(e) {
  if (e == null) return null;
  if (Se(e)) return [Hs(e.enter), Hs(e.leave)];
  {
    const t = Hs(e);
    return [t, t];
  }
}
function Hs(e) {
  return _m(e);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sr] || (e[sr] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[sr];
  n && (n.delete(t), n.size || (e[sr] = void 0));
}
function hl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let d1 = 0;
function gl(e, t, n, r) {
  const i = e._endId = ++d1, s = () => {
    i === e._endId && r();
  };
  if (n != null) return setTimeout(s, n);
  const { type: o, timeout: a, propCount: l } = Pf(e, t);
  if (!o) return r();
  const u = o + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, d), s();
  }, d = (m) => {
    m.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, d);
}
function Pf(e, t) {
  const n = window.getComputedStyle(e), r = (b) => (n[b] || "").split(", "), i = r(`${on}Delay`), s = r(`${on}Duration`), o = vl(i, s), a = r(`${Cr}Delay`), l = r(`${Cr}Duration`), u = vl(a, l);
  let c = null, f = 0, d = 0;
  t === on ? o > 0 && (c = on, f = o, d = s.length) : t === Cr ? u > 0 && (c = Cr, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? on : Cr : null, d = c ? c === on ? s.length : l.length : 0);
  const m = c === on && /\b(?:transform|all)(?:,|$)/.test(r(`${on}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: m };
}
function vl(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => pl(n) + pl(e[r])));
}
function pl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function m1(e, t, n) {
  const r = e[sr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gi = Symbol("_vod"), Rf = Symbol("_vsh"), aa = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[Gi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : xr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), xr(e, true), r.enter(e)) : r.leave(e, () => {
    xr(e, false);
  }) : xr(e, t));
}, beforeUnmount(e, { value: t }) {
  xr(e, t);
} };
function xr(e, t) {
  e.style.display = t ? e[Gi] : "none", e[Rf] = !t;
}
const h1 = Symbol(""), g1 = /(?:^|;)\s*display\s*:/;
function v1(e, t, n) {
  const r = e.style, i = De(n);
  let s = false;
  if (n && !i) {
    if (t) if (De(t)) for (const o of t.split(";")) {
      const a = o.slice(0, o.indexOf(":")).trim();
      n[a] == null && Ii(r, a, "");
    }
    else for (const o in t) n[o] == null && Ii(r, o, "");
    for (const o in n) o === "display" && (s = true), Ii(r, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = r[h1];
      o && (n += ";" + o), r.cssText = n, s = g1.test(n);
    }
  } else t && e.removeAttribute("style");
  Gi in e && (e[Gi] = s ? r.display : "", e[Rf] && (r.display = "none"));
}
const yl = /\s*!important$/;
function Ii(e, t, n) {
  if (se(n)) n.forEach((r) => Ii(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = p1(e, t);
    yl.test(n) ? e.setProperty(Vn(r), n.replace(yl, ""), "important") : e[r] = n;
  }
}
const bl = ["Webkit", "Moz", "ms"], Ns = {};
function p1(e, t) {
  const n = Ns[t];
  if (n) return n;
  let r = _t(t);
  if (r !== "filter" && r in e) return Ns[t] = r;
  r = dr(r);
  for (let i = 0; i < bl.length; i++) {
    const s = bl[i] + r;
    if (s in e) return Ns[t] = s;
  }
  return t;
}
const _l = "http://www.w3.org/1999/xlink";
function wl(e, t, n, r, i, s = Lm(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_l, t.slice(6, t.length)) : e.setAttributeNS(_l, t, n) : n == null || s && !gu(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : kt(n) ? String(n) : n);
}
function Sl(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ef(n) : n);
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
    a === "boolean" ? n = gu(n) : n == null && a === "string" ? (n = "", o = true) : a === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function y1(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function b1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Cl = Symbol("_vei");
function _1(e, t, n, r, i = null) {
  const s = e[Cl] || (e[Cl] = {}), o = s[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = w1(t);
    if (r) {
      const u = s[t] = x1(r, i);
      y1(e, a, u, l);
    } else o && (b1(e, a, o, l), s[t] = void 0);
  }
}
const xl = /(?:Once|Passive|Capture)$/;
function w1(e) {
  let t;
  if (xl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(xl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : Vn(e.slice(2)), t];
}
let Fs = 0;
const S1 = Promise.resolve(), C1 = () => Fs || (S1.then(() => Fs = 0), Fs = Date.now());
function x1(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Tt(A1(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = C1(), n;
}
function A1(e, t) {
  if (se(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (i) => !i._stopped && r && r(i));
  } else return t;
}
const Al = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, L1 = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? m1(e, r, o) : t === "style" ? v1(e, n, r) : is(t) ? zo(t) || _1(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : E1(e, t, r, o)) ? (Sl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wl(e, t, r, o, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !De(r)) ? Sl(e, _t(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), wl(e, t, r, o));
};
function E1(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Al(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return false;
  }
  return Al(t) && De(n) ? false : t in e;
}
const If = /* @__PURE__ */ new WeakMap(), Of = /* @__PURE__ */ new WeakMap(), Ui = Symbol("_moveCb"), Ll = Symbol("_enterCb"), k1 = (e) => (delete e.props.mode, e), M1 = k1({ name: "TransitionGroup", props: je({}, Mf, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = ci(), r = Ku();
  let i, s;
  return na(() => {
    if (!i.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!I1(i[0].el, n.vnode.el, o)) {
      i = [];
      return;
    }
    i.forEach(T1), i.forEach(P1);
    const a = i.filter(R1);
    vo(n.vnode.el), a.forEach((l) => {
      const u = l.el, c = u.style;
      Ht(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = u[Ui] = (d) => {
        d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Ui] = null, ln(u, o));
      };
      u.addEventListener("transitionend", f);
    }), i = [];
  }), () => {
    const o = te(e), a = Tf(o);
    let l = o.tag || _e;
    if (i = [], s) for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.el && c.el instanceof Element && (i.push(c), In(c, Ur(c, a, r, n)), If.set(c, Vf(c.el)));
    }
    s = t.default ? ta(t.default()) : [];
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.key != null && In(c, Ur(c, a, r, n));
    }
    return M(l, null, s);
  };
} }), la = M1;
function T1(e) {
  const t = e.el;
  t[Ui] && t[Ui](), t[Ll] && t[Ll]();
}
function P1(e) {
  Of.set(e, Vf(e.el));
}
function R1(e) {
  const t = If.get(e), n = Of.get(e), r = t.left - n.left, i = t.top - n.top;
  if (r || i) {
    const s = e.el, o = s.style, a = s.getBoundingClientRect();
    let l = 1, u = 1;
    return s.offsetWidth && (l = a.width / s.offsetWidth), s.offsetHeight && (u = a.height / s.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${r / l}px,${i / u}px)`, o.transitionDuration = "0s", e;
  }
}
function Vf(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function I1(e, t, n) {
  const r = e.cloneNode(), i = e[sr];
  i && i.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: o } = Pf(r);
  return s.removeChild(r), o;
}
const O1 = je({ patchProp: L1 }, c1);
let El;
function V1() {
  return El || (El = Wh(O1));
}
const D1 = ((...e) => {
  const t = V1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = N1(r);
    if (!i) return;
    const s = t._component;
    !ue(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, false, H1(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function H1(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function N1(e) {
  return De(e) ? document.querySelector(e) : e;
}
const kl = () => {
};
function ca(e) {
  const t = `[${e}]`;
  return { debug: kl, info: kl, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Ml = 5;
function F1(e, t, n) {
  const r = t * n, i = Math.max(1, Math.round(e / (r * Ml)));
  return e / (i * Ml);
}
function Df(e, t, n) {
  const r = e * n.dpr, i = t * n.dpr, s = r + n.offsetX, o = i + n.offsetY, a = Math.floor(s / n.gridPitch), l = Math.floor(o / n.gridPitch);
  return { cx: a, cy: l };
}
function $1(e, t) {
  const n = (e.cx % t.worldCols + t.worldCols) % t.worldCols, r = (e.cy % t.worldRows + t.worldRows) % t.worldRows;
  return { cx: n, cy: r };
}
function B1(e, t, n) {
  return { cssX: (e * n.gridPitch - n.offsetX) / n.dpr, cssY: (t * n.gridPitch - n.offsetY) / n.dpr };
}
function j1(e, t) {
  return e * t.gridPitch / t.dpr;
}
const Hf = 1, W1 = `gol.gridBlankZones.v${Hf}`, z1 = 128;
function G1(e, t, n, r) {
  if (!Array.isArray(e)) return [];
  const i = r ?? Date.now(), s = [];
  for (const o of e) {
    if (s.length >= n) break;
    const a = t(o, i);
    a && s.push(a);
  }
  return s;
}
const U1 = /* @__PURE__ */ new Set(["minor", "major", "both"]), Z1 = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function $s(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function jn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function K1() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function Y1(e) {
  return typeof e == "string" && U1.has(e) ? e : "both";
}
function q1(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && Z1.has(t.style) ? t.style : "none", r = $s(jn(t.widthCells) ?? 1, 1, 4), i = typeof t.opacity == "number" ? t.opacity : 1, s = $s(i, 0, 1), o = { style: n, widthCells: r, opacity: s };
  if (n === "fade") {
    const a = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    o.fadeStrength = $s(a, 0, 1);
  }
  return n === "noted" && (o.notePitchCells = Math.max(1, jn(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (o.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), o;
}
function X1(e) {
  return typeof e == "boolean" ? e : true;
}
function Tl(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Nf(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, r = jn(n.x1), i = jn(n.y1), s = jn(n.x2), o = jn(n.y2);
  if (r === null || i === null || s === null || o === null) return null;
  const a = Math.min(r, s), l = Math.max(r, s), u = Math.min(i, o), c = Math.max(i, o);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : K1(), x1: a, y1: u, x2: l, y2: c, mode: Y1(n.mode), edge: q1(n.edge), enabled: X1(n.enabled), createdAt: Tl(n.createdAt, t), updatedAt: Tl(n.updatedAt, t) };
}
function Ff(e, t = Date.now()) {
  return G1(e, Nf, z1, t);
}
function Bs() {
  return typeof localStorage < "u";
}
function J1(e) {
  return { load() {
    if (!Bs()) return [];
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
    if (!Bs()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    Bs() && localStorage.removeItem(e.key);
  } };
}
const ua = J1({ key: W1, version: Hf, normalize: Ff, itemsKey: "zones" }), Q1 = ua.load, eg = ua.save, tg = ua.clear;
function ng(e) {
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
function rg(e = {}) {
  const { items: t, setItems: n, addItem: r, updateItem: i, removeItem: s, clearItems: o, syncFromWorker: a } = ng({ storage: { load: Q1, save: eg, clear: tg }, normalize: Ff, normalizeOne: Nf, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: r, updateZone: i, removeZone: s, clearZones: o, syncFromWorker: a };
}
const Pl = ca("WorkerBridge");
function ig() {
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
  function s(l) {
    (l.type === "ready" || l.type === "grid_info") && (t.value = l.gridInfo);
    const u = n.get(l.type);
    if (u) for (const c of u) c(l);
  }
  function o(l, u, c) {
    const f = new Worker(new URL("/assets/backgroundRenderer-DBvns1f7.js", import.meta.url), { type: "module" });
    f.onmessage = (d) => s(d.data), f.onerror = (d) => {
      Pl.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = f, r({ type: "init", canvas: l, cellPx: u, theme: c }, [l]);
  }
  function a() {
    r({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: r, on: i, init: o, terminate: a };
}
const js = 5, sg = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), og = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function ag(e, t) {
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
    const c = Df(l.clientX, l.clientY, u);
    return { cx: r(c.cx, u), cy: c.cy };
  }
  function s(l, u) {
    return { x1: Math.min(l.cx, u.cx), y1: Math.min(l.cy, u.cy), x2: Math.max(l.cx, u.cx), y2: Math.max(l.cy, u.cy) };
  }
  function o(l, u) {
    const c = (d) => Math.floor(d / js) * js, f = (d) => c(d) + (js - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(l.x1))), y1: c(l.y1), x2: Math.max(0, Math.min(u.worldCols - 1, f(l.x2))), y2: f(l.y2) };
  }
  function a(l) {
    if (!(l instanceof HTMLElement)) return false;
    if (l.closest(og)) return true;
    let u = l;
    for (; u; ) {
      if (sg.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: i, cellToScreen: B1, cellSpanToCssPx: j1, normalizeRect: s, snapRectToMajor: o, isInteractiveTarget: a, wrapXToWorld: r };
}
function lg() {
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
function cg(e) {
  const t = /* @__PURE__ */ new Map(), n = X(null), r = X(null), i = X(null);
  let s = null, o = null;
  function a(S, v) {
    t.set(S, v);
  }
  function l() {
    for (const S of t.values()) if (S.isEnabled()) return true;
    return false;
  }
  function u() {
    const S = r.value, v = e.makeSnapshot();
    if (!S || !v) {
      i.value = null;
      return;
    }
    const y = e.cellToScreen(S.x1, S.y1, v), A = e.cellSpanToCssPx(S.x2 - S.x1 + 1, v), _ = e.cellSpanToCssPx(S.y2 - S.y1 + 1, v);
    i.value = { left: `${y.cssX}px`, top: `${y.cssY}px`, width: `${A}px`, height: `${_}px` };
  }
  function c() {
    s = null, n.value = null, o = null, r.value = null, i.value = null;
  }
  function f(S) {
    n.value === S && c();
  }
  function d(S) {
    if (S.button !== 0 || e.isInteractiveTarget(S.target)) return;
    let v = null;
    for (const _ of t.entries()) _[1].isEnabled() && (!v || _[1].priority > v[1].priority) && (v = _);
    if (!v) return;
    const y = e.pointerToCell(S);
    if (!y) return;
    n.value = v[0], s = y;
    const A = { x1: y.cx, y1: y.cy, x2: y.cx, y2: y.cy };
    v[1].dragMode === "paint" && (o = { ...A }), r.value = A, u(), S.target instanceof Element && S.target.setPointerCapture(S.pointerId), S.preventDefault();
  }
  function m(S) {
    var _a2;
    if (!n.value || !s) return;
    const v = t.get(n.value);
    if (!v) return;
    const y = e.pointerToCell(S), A = e.makeSnapshot();
    if (!(!y || !A)) {
      if (v.dragMode === "paint" && o) o.x1 = Math.min(o.x1, y.cx), o.y1 = Math.min(o.y1, y.cy), o.x2 = Math.max(o.x2, y.cx), o.y2 = Math.max(o.y2, y.cy), r.value = { ...o };
      else {
        const _ = e.normalizeRect(s, y);
        r.value = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) ? e.snapRectToMajor(_, A) : _;
      }
      u();
    }
  }
  function b(S) {
    var _a2;
    if (!n.value || !s || S.button !== 0) return;
    S.target instanceof Element && S.target.hasPointerCapture(S.pointerId) && S.target.releasePointerCapture(S.pointerId);
    const v = t.get(n.value);
    if (!v) {
      c();
      return;
    }
    const y = e.pointerToCell(S), A = e.makeSnapshot();
    let _;
    if (v.dragMode === "paint" && o) y && (o.x1 = Math.min(o.x1, y.cx), o.y1 = Math.min(o.y1, y.cy), o.x2 = Math.max(o.x2, y.cx), o.y2 = Math.max(o.y2, y.cy)), _ = o;
    else if (y) {
      const E = e.normalizeRect(s, y);
      _ = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) && A ? e.snapRectToMajor(E, A) : E;
    } else {
      c();
      return;
    }
    v.onCommit(_, A) === false || c();
  }
  function g() {
    return document.addEventListener("pointerdown", d), document.addEventListener("pointermove", m), document.addEventListener("pointerup", b), () => {
      document.removeEventListener("pointerdown", d), document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", b);
    };
  }
  return { register: a, activeTool: n, previewRect: r, previewStyle: i, cancelActiveDrag: f, anyToolEnabled: l, attachListeners: g };
}
const Rl = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, Il = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.6, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function wn(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Lt([e, t, n], r = 1) {
  return r === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${r.toFixed(3)})`;
}
function Ws([e, t, n], r = 1, i = 1) {
  const s = t * r;
  return i === 1 ? `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)} / ${i.toFixed(3)})`;
}
const $f = "theme-preference";
function ug() {
  var _a2;
  if (typeof window > "u") return "system";
  const e = (_a2 = window.localStorage) == null ? void 0 : _a2.getItem($f);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const qr = X(ug()), Bf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    Bf.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
le(qr, (e) => {
  var _a2;
  typeof window < "u" && ((_a2 = window.localStorage) == null ? void 0 : _a2.setItem($f, e));
});
const po = N(() => qr.value === "light" ? Rl : qr.value === "dark" || Bf.value ? Il : Rl);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, r = (s, o) => {
      n.style.setProperty(s, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", r("--theme-surface", Lt(t.surface)), r("--theme-ink", Lt(t.ink)), r("--theme-ink-secondary", Lt(wn(t.surface, t.ink, t.ink_secondary_t))), r("--theme-ink-tertiary", Lt(wn(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-text-primary", Lt(t.ink)), r("--theme-text-secondary", Lt(wn(t.surface, t.ink, t.ink_secondary_t))), r("--theme-text-tertiary", Lt(wn(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-grid-minor", Lt(wn(t.surface, t.ink, t.minor_t))), r("--theme-grid-major", Lt(wn(t.surface, t.ink, t.major_t))), r("--theme-grid-border", Lt(wn(t.surface, t.ink, t.border_t))), r("--theme-accent", Ws(t.accent, t.accent_chroma_scale)), r("--theme-accent-ring", Ws(t.accent, t.accent_chroma_scale, 0.45)), r("--theme-selection-bg", Ws(t.accent, t.accent_chroma_scale, 0.2)), r("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const i = document.querySelector('meta[name="theme-color"]');
    i && i.setAttribute("content", Lt(t.surface));
  };
  e(po.value), le(po, e);
}
function jf() {
  return { preference: qr, theme: po, setPreference(e) {
    qr.value = e;
  } };
}
const fg = 5, dg = 16, mg = 2160;
function hg(e) {
  let t = null, n = 0, r = 0, i = null, s = null, o = 0, a = null, l = null, u = null, c = false, f = false;
  function d(R) {
    const F = R.getBoundingClientRect();
    return { width: Math.max(1, Math.round(F.width * devicePixelRatio)), height: Math.max(1, Math.round(F.height * devicePixelRatio)) };
  }
  function m(R) {
    var _a2, _b2;
    const F = (_b2 = (_a2 = R.devicePixelContentBoxSize) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.inlineSize;
    return typeof F == "number" && F > 0 ? F : Math.max(1, Math.round(R.contentRect.width * devicePixelRatio));
  }
  function b(R) {
    const F = Math.round(screen.height * devicePixelRatio);
    return Math.max(R, F, mg);
  }
  function g() {
    const R = document.createElement("div");
    R.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(R);
    const F = R.getBoundingClientRect().width;
    return R.remove(), Math.abs(F - 100) > 0.1;
  }
  function S(R) {
    return F1(R, dg, devicePixelRatio);
  }
  function v(R, F, P) {
    const H = F / devicePixelRatio, Y = P / devicePixelRatio;
    let z = H, J = Y;
    if (c) {
      const Q = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      Q > 0 && Q !== 1 && (z = H / Q, J = Y / Q);
    }
    R.style.width = `${z.toFixed(2)}px`, R.style.height = `${J.toFixed(2)}px`;
  }
  function y(R) {
    R.classList.add("app-bg--hidden"), s !== null && clearTimeout(s), s = window.setTimeout(() => {
      s = null, R.classList.remove("app-bg--hidden");
    }, 120);
  }
  function A(R) {
    const F = S(R);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * F * fg / devicePixelRatio).toFixed(1)}px`);
  }
  function _(R, F) {
    n = F, v(R, n, r), y(R), A(n), l !== null && clearTimeout(l), l = window.setTimeout(() => {
      l = null, e({ type: "resize", width: n, height: r }), y(R);
    }, 90);
  }
  function x(R) {
    a === null && (a = requestAnimationFrame(() => {
      a = null, !(o === 0 || o === n) && _(R, o);
    }));
  }
  function E(R) {
    let F = false;
    const P = () => {
      if (F) return;
      const H = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), Y = () => {
        F || (R(), P());
      };
      H.addEventListener("change", Y, { once: true });
    };
    return P(), () => {
      F = true;
    };
  }
  function T(R, F) {
    t = F, c = g();
    const P = d(R);
    n = P.width, r = b(P.height), F.width = n, F.height = r, v(F, n, r);
    const H = F.transferControlToOffscreen(), Y = S(n);
    return A(n), i = new ResizeObserver(([z]) => {
      if (!t) return;
      const J = m(z);
      J <= 0 || J === n || (o = J, x(t));
    }), i.observe(R), u = E(() => {
      if (!t) return;
      c = g();
      const z = Math.round(R.getBoundingClientRect().height * devicePixelRatio);
      r = b(z), _(t, n);
    }), { offscreen: H, gridPitch: Y };
  }
  function w() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      f || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 1100));
  }
  function D() {
    f = true, i == null ? void 0 : i.disconnect(), u == null ? void 0 : u(), s !== null && (clearTimeout(s), s = null), a !== null && (cancelAnimationFrame(a), a = null), l !== null && (clearTimeout(l), l = null), t = null;
  }
  return { initialize: T, revealCanvas: w, teardown: D };
}
const gg = ca("AppBackground");
function vg(e) {
  e.on("startup_breakdown", (t) => {
    const n = (s) => `${s.toFixed(0)}ms`, r = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], i = t.phases.newOffscreenPhases;
    i && (r.push("  new_offscreen sub-phases:"), r.push(`    device_request   ${n(i.deviceRequest)}`), r.push(`    panel_init       ${n(i.panelInit)}`), r.push(`    seeding          ${n(i.seeding)}`), r.push(`    simulation_init  ${n(i.simulationInit)}`), r.push(`    renderer_init    ${n(i.rendererInit)}`));
  }), e.on("gpu_pass_breakdown", (t) => {
    const n = (i) => i === null ? "\u2014" : `${i.toFixed(2)}ms`, r = t.durations;
    gg.info(`GPU pass breakdown (frame ${t.frame}):
  compute_tick   ${n(r.computeTickMs)}
  xor_edit       ${n(r.xorEditMs)}
  or_edit        ${n(r.orEditMs)}
  render_pass    ${n(r.renderPassMs)}`);
  });
}
var pg = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z", yg = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Wf = "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z", bg = "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M13 13C13 14.1 12.1 15 11 15S9 14.1 9 13 9.9 11 11 11 13 11.9 13 13M15 18V19H7V18C7 16.67 9.67 16 11 16S15 16.67 15 18Z", _g = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z", zf = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", wg = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z", Sg = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z", Gf = "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z", Cg = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", xg = "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z", Ol = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z", Ag = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z", Vl = "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z", Lg = "M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z", Dl = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Hl = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
const mr = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0, icon: wg }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0, icon: Lg }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0, icon: bg }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1, icon: Wf }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1, icon: pg }], vs = mr[0], Uf = new Map(mr.map((e) => [e.id, e]));
new Map(mr.map((e) => [e.route, e]));
function ps(e) {
  return Uf.get(e) ?? vs;
}
function Eg(e) {
  return typeof e == "string" && Uf.has(e) ? e : vs.id;
}
function kg(e, t) {
  return Math.min(e.w, t);
}
function Nl(e, t, n, r) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + r;
}
function Mg(e, t) {
  const n = t.zoom, r = kg(e, t.panelMaxWidth), i = t.panelHeight ?? e.h;
  return { col: Nl(e.w, r, n, t.gutterX), row: Nl(e.h, i, n, t.gutterY) };
}
function fi(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function Zf(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function Tg(e, t, n, r) {
  const i = Zf(e, t, n), s = Math.hypot(i.x - n.w / 2, i.y - n.h / 2), o = Math.min(1, s / Math.max(r.radius, 1e-6)), a = o * o * (3 - 2 * o);
  return r.floor + (1 - r.floor) * (1 - a);
}
const Pg = 1200, Fl = 0.55, Rg = 0.7, Ig = 0.7, $l = 0.5, Bl = 40, Og = 240, Vg = 0.14, Dg = 0.7, Hg = 6, Li = 18, Ng = 0.01;
function Fg(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function $g(e, t, n = Ng) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function Bg(e, t) {
  const n = t.w / 2, r = t.h / 2;
  return `translate(${n}px, ${r}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function jg(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const Wg = 0.18, zg = 1;
function Kf(e) {
  return Mg(e, { panelMaxWidth: Pg, gutterX: Fl * e.w, gutterY: Fl * e.h, zoom: 1 });
}
const di = X({ w: 1, h: 1 });
function Yf() {
  const e = ps(vs.id), t = fi(e, Kf(di.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const Ct = X(Yf()), Xn = X(Yf()), ys = X(false), fa = X(vs.id), da = X(0), qf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    qf.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const ma = N(() => Kf(di.value));
let Tn = 0;
function Xf() {
  if (Ct.value = Fg(Ct.value, Xn.value, Wg), $g(Ct.value, Xn.value)) {
    Ct.value = { ...Xn.value }, ys.value = false, Tn = 0;
    return;
  }
  Tn = requestAnimationFrame(Xf);
}
function Gg() {
  Tn === 0 && (ys.value = true, Tn = requestAnimationFrame(Xf));
}
function Ug() {
  Tn !== 0 && (cancelAnimationFrame(Tn), Tn = 0), ys.value = false;
}
function ha(e, t, n) {
  Ug();
  const r = n ?? Ct.value.zoom;
  Ct.value = { x: e, y: t, zoom: r }, Xn.value = { x: e, y: t, zoom: r };
}
function Jf(e, t, n = {}) {
  const r = n.zoom ?? Xn.value.zoom;
  if (Xn.value = { x: e, y: t, zoom: r }, n.snap || qf.value) {
    ha(e, t, r);
    return;
  }
  Gg();
}
function Zg(e, t = {}) {
  fa.value = e, da.value = 0;
  const n = ps(e), r = fi(n, ma.value);
  Jf(r.x, r.y, { zoom: n.zoom, snap: t.snap });
}
function Kg() {
  fa.value = null;
}
function Yg(e, t) {
  di.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function qg(e) {
  da.value = Math.max(0, e);
}
le(ma, (e) => {
  const t = fa.value;
  if (t === null) return;
  const n = ps(t), r = fi(n, e);
  ha(r.x, r.y, n.zoom ?? Ct.value.zoom);
});
const Xg = N(() => ({ transform: Bg(Ct.value, di.value) })), Jg = N(() => jg({ x: Ct.value.x, y: Ct.value.y + da.value, zoom: Ct.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, zg));
function hr() {
  return { camera: Ct, isAnimating: ys, viewport: di, spacing: ma, cameraStyle: Xg, worldOffsetDevicePx: Jg, panTo: Jf, panToWaypoint: Zg, snapTo: ha, releaseAnchor: Kg, setViewport: Yg, setCaptureScroll: qg };
}
const jl = 0.1;
function Qg(e) {
  const { worldOffsetDevicePx: t } = hr();
  let n = Number.NaN, r = Number.NaN;
  le(t, ({ x: i, y: s }) => {
    Math.abs(i - n) < jl && Math.abs(s - r) < jl || (n = i, r = s, e.post({ type: "camera", x: i, y: s }));
  });
}
function Qf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ie = typeof window < "u", ga = Ie && "IntersectionObserver" in window, ev = Ie && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), ed = Ie && "matchMedia" in window && typeof window.matchMedia == "function", Zi = () => ed && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Wl(e, t, n) {
  tv(e, t), t.set(e, n);
}
function tv(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function zl(e, t, n) {
  return e.set(td(e, t), n), n;
}
function Zt(e, t) {
  return e.get(td(e, t));
}
function td(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function nd(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let i = 0; i < r; i++) {
    if (e == null) return n;
    e = e[t[i]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function yo(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), nd(e, t.split("."), n));
}
function Ar(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const i = t(e, n);
    return typeof i > "u" ? n : i;
  }
  if (typeof t == "string") return yo(e, t, n);
  if (Array.isArray(t)) return nd(e, t, n);
  if (typeof t != "function") return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}
function rd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, r) => t + r);
}
function pe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function bo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Gl(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function nv(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function zs(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function rv(e, t) {
  const n = {};
  for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function mi(e, t) {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}
const iv = /^on[^a-z]/, id = (e) => iv.test(e);
function va(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ki(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Ul(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function Zl(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function sv(e) {
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
    if (Gl(s) && Gl(o)) {
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
function sd(e) {
  return e.map((t) => t.type === _e ? sd(t.children) : t).flat();
}
function Pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Pn.cache.has(e)) return Pn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Pn.cache.set(e, t), t;
}
Pn.cache = /* @__PURE__ */ new Map();
function Wn(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => Wn(e, n)).flat(1);
  if (t.suspense) return Wn(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => Wn(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return Wn(e, t.component.subTree).flat(1);
  }
  return [];
}
var Hn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap();
class ov {
  constructor(t) {
    Wl(this, Hn, []), Wl(this, Sn, 0), this.size = t;
  }
  get isFull() {
    return Zt(Hn, this).length === this.size;
  }
  push(t) {
    Zt(Hn, this)[Zt(Sn, this)] = t, zl(Sn, this, (Zt(Sn, this) + 1) % this.size);
  }
  values() {
    return Zt(Hn, this).slice(Zt(Sn, this)).concat(Zt(Hn, this).slice(0, Zt(Sn, this)));
  }
  clear() {
    Zt(Hn, this).length = 0, zl(Sn, this, 0);
  }
}
function pa(e) {
  const t = Ue({});
  gn(() => {
    const r = e();
    for (const i in r) t[i] = r[i];
  }, { flush: "sync" });
  const n = {};
  for (const r in t) n[r] = B(() => t[r]);
  return n;
}
function Yi(e, t) {
  return e.includes(t);
}
function od(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Hr = () => [Function, Array];
function Kl(e, t) {
  return t = "on" + dr(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Jn(e) {
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
function ad(e, t, n) {
  let r, i = e.indexOf(document.activeElement);
  const s = t === "next" ? 1 : -1;
  do
    i += s, r = e[i];
  while ((!r || r.offsetParent == null || !((n == null ? void 0 : n(r)) ?? true)) && i < e.length && i >= 0);
  return r;
}
function Nr(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = Jn(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const r = ad(n, t);
    r ? r.focus() : Nr(e, t === "next" ? "first" : "last");
  }
}
function av(e, t) {
  if (!(Ie && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function lv(e, t) {
  if (!Ie || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function cv(e, t) {
  const n = e.clientX, r = e.clientY, i = t.getBoundingClientRect(), s = i.left, o = i.top, a = i.right, l = i.bottom;
  return n >= s && n <= a && r >= o && r <= l;
}
function _o() {
  const e = ve(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => nv(e.value) }), t;
}
function ar(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function uv(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, i] = n;
    return t.includes(r) ? !!i : i !== void 0;
  }));
}
const ld = ["top", "bottom"], fv = ["start", "end", "left", "right"];
function wo(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = Yi(ld, n) ? "start" : Yi(fv, n) ? "top" : "center"), { side: Yl(n, t), align: Yl(r, t) };
}
function Yl(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Gs(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Us(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function ql(e) {
  return { side: e.align, align: e.side };
}
function Xl(e) {
  return Yi(ld, e.side) ? "y" : "x";
}
class xt {
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
function Jl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function cd(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new xt({ x: e[0] * n, y: e[1] * n, width: 0 * n, height: 0 * n });
  } else return new xt(e);
}
function dv(e) {
  if (e === document.documentElement) if (visualViewport) {
    const t = document.body.currentCSSZoom ?? 1;
    return new xt({ x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft, y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop, width: visualViewport.width * visualViewport.scale / t, height: visualViewport.height * visualViewport.scale / t });
  } else return new xt({ x: 0, y: 0, width: document.documentElement.clientWidth, height: document.documentElement.clientHeight });
  else return new xt(e);
}
function ud(e) {
  const t = new xt(e), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, s, o, a, l;
    if (r.startsWith("matrix3d(")) i = r.slice(9, -1).split(/, /), s = Number(i[0]), o = Number(i[5]), a = Number(i[12]), l = Number(i[13]);
    else if (r.startsWith("matrix(")) i = r.slice(7, -1).split(/, /), s = Number(i[0]), o = Number(i[3]), a = Number(i[4]), l = Number(i[5]);
    else return new xt(t);
    const u = n.transformOrigin, c = t.x - a - (1 - s) * parseFloat(u), f = t.y - l - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = s ? t.width / s : e.offsetWidth + 1, m = o ? t.height / o : e.offsetHeight + 1;
    return new xt({ x: c, y: f, width: d, height: m });
  } else return new xt(t);
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
const Oi = /* @__PURE__ */ new WeakMap();
function mv(e, t) {
  Object.keys(t).forEach((n) => {
    if (id(n)) {
      const r = od(n), i = Oi.get(e);
      if (t[n] == null) i == null ? void 0 : i.forEach((s) => {
        const [o, a] = s;
        o === r && (e.removeEventListener(r, a), i.delete(s));
      });
      else if (!i || ![...i].some((s) => s[0] === r && s[1] === t[n])) {
        e.addEventListener(r, t[n]);
        const s = i || /* @__PURE__ */ new Set();
        s.add([r, t[n]]), Oi.has(e) || Oi.set(e, s);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function hv(e, t) {
  Object.keys(t).forEach((n) => {
    if (id(n)) {
      const r = od(n), i = Oi.get(e);
      i == null ? void 0 : i.forEach((s) => {
        const [o, a] = s;
        o === r && (e.removeEventListener(r, a), i.delete(s));
      });
    } else e.removeAttribute(n);
  });
}
const Nn = 2.4, Ql = 0.2126729, ec = 0.7151522, tc = 0.072175, gv = 0.55, vv = 0.58, pv = 0.57, yv = 0.62, Ei = 0.03, nc = 1.45, bv = 5e-4, _v = 1.25, wv = 1.25, rc = 0.078, ic = 12.82051282051282, ki = 0.06, sc = 1e-3;
function oc(e, t) {
  const n = (e.r / 255) ** Nn, r = (e.g / 255) ** Nn, i = (e.b / 255) ** Nn, s = (t.r / 255) ** Nn, o = (t.g / 255) ** Nn, a = (t.b / 255) ** Nn;
  let l = n * Ql + r * ec + i * tc, u = s * Ql + o * ec + a * tc;
  if (l <= Ei && (l += (Ei - l) ** nc), u <= Ei && (u += (Ei - u) ** nc), Math.abs(u - l) < bv) return 0;
  let c;
  if (u > l) {
    const f = (u ** gv - l ** vv) * _v;
    c = f < sc ? 0 : f < rc ? f - f * ic * ki : f - ki;
  } else {
    const f = (u ** yv - l ** pv) * wv;
    c = f > -sc ? 0 : f > -rc ? f - f * ic * ki : f + ki;
  }
  return c * 100;
}
const qi = 0.20689655172413793, Sv = (e) => e > qi ** 3 ? Math.cbrt(e) : e / (3 * qi ** 2) + 4 / 29, Cv = (e) => e > qi ? e ** 3 : 3 * qi ** 2 * (e - 4 / 29);
function fd(e) {
  const t = Sv, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function dd(e) {
  const t = Cv, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const xv = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Av = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Lv = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ev = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function md(e) {
  const t = Array(3), n = Av, r = xv;
  for (let i = 0; i < 3; ++i) t[i] = Math.round(Ki(n(r[i][0] * e[0] + r[i][1] * e[1] + r[i][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function ya(e) {
  let { r: t, g: n, b: r } = e;
  const i = [0, 0, 0], s = Ev, o = Lv;
  t = s(t / 255), n = s(n / 255), r = s(r / 255);
  for (let a = 0; a < 3; ++a) i[a] = o[a][0] * t + o[a][1] * n + o[a][2] * r;
  return i;
}
function So(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function kv(e) {
  return So(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const ac = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Mv = { rgb: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), rgba: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), hsl: (e, t, n, r) => lc({ h: e, s: t, l: n, a: r }), hsla: (e, t, n, r) => lc({ h: e, s: t, l: n, a: r }), hsv: (e, t, n, r) => Xr({ h: e, s: t, v: n, a: r }), hsva: (e, t, n, r) => Xr({ h: e, s: t, v: n, a: r }) };
function Bt(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && ac.test(e)) {
    const { groups: t } = e.match(ac), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((s, o) => s.endsWith("%") || o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return Mv[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Pv(t);
  } else if (typeof e == "object") {
    if (zs(e, ["r", "g", "b"])) return e;
    if (zs(e, ["h", "s", "l"])) return Xr(hd(e));
    if (zs(e, ["h", "s", "v"])) return Xr(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Xr(e) {
  const { h: t, s: n, v: r, a: i } = e, s = (a) => {
    const l = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0);
  }, o = [s(5), s(3), s(1)].map((a) => Math.round(a * 255));
  return { r: o[0], g: o[1], b: o[2], a: i };
}
function lc(e) {
  return Xr(hd(e));
}
function hd(e) {
  const { h: t, s: n, l: r, a: i } = e, s = r + n * Math.min(r, 1 - r), o = s === 0 ? 0 : 2 - 2 * r / s;
  return { h: t, s: o, v: s, a: i };
}
function Mi(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Tv(e) {
  let { r: t, g: n, b: r, a: i } = e;
  return `#${[Mi(t), Mi(n), Mi(r), i !== void 0 ? Mi(Math.round(i * 255)) : ""].join("")}`;
}
function Pv(e) {
  e = Rv(e);
  let [t, n, r, i] = sv(e, 2).map((s) => parseInt(s, 16));
  return i = i === void 0 ? i : i / 255, { r: t, g: n, b: r, a: i };
}
function Rv(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Ul(Ul(e, 6), 8, "F")), e;
}
function Iv(e, t) {
  const n = fd(ya(e));
  return n[0] = n[0] + t * 10, md(dd(n));
}
function Ov(e, t) {
  const n = fd(ya(e));
  return n[0] = n[0] - t * 10, md(dd(n));
}
function Vv(e) {
  const t = Bt(e);
  return ya(t)[1];
}
function gd(e) {
  const t = Math.abs(oc(Bt(0), Bt(e)));
  return Math.abs(oc(Bt(16777215), Bt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function ne(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const o = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : { type: e[i] };
    return n && i in n ? r[i] = { ...o, default: n[i] } : r[i] = o, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const qe = ne({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function Ze(e, t) {
  const n = ci();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ze(e).type;
  return Pn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Dv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ze("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const lr = Symbol.for("vuetify:defaults");
function Hv(e) {
  return X(e);
}
function ba() {
  const e = ke(lr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function _a(e, t) {
  const n = ba(), r = X(e), i = N(() => {
    if (re(t == null ? void 0 : t.disabled)) return n.value;
    const o = re(t == null ? void 0 : t.scoped), a = re(t == null ? void 0 : t.reset), l = re(t == null ? void 0 : t.root);
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
  return it(lr, i), i;
}
function Nv(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Pn(t)] < "u");
}
function Fv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ba();
  const r = Ze("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const i = N(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), s = new Proxy(e, { get(l, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(l, u);
    if (u === "class" || u === "style") return [(_a2 = i.value) == null ? void 0 : _a2[u], c].filter((m) => m != null);
    if (Nv(r.vnode, u)) return c;
    const f = (_b2 = i.value) == null ? void 0 : _b2[u];
    if (f !== void 0) return f;
    const d = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return d !== void 0 ? d : c;
  } }), o = ve();
  gn(() => {
    if (i.value) {
      const l = Object.entries(i.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = l.length ? Object.fromEntries(l) : void 0;
    } else o.value = void 0;
  });
  function a() {
    const l = Dv(lr, r);
    it(lr, N(() => o.value ? pt((l == null ? void 0 : l.value) ?? {}, o.value) : l == null ? void 0 : l.value));
  }
  return { props: s, provideSubDefaults: a };
}
function gr(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = ne(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return rv(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const s = ba();
      if (!s.value) return e._setup(r, i);
      const { props: o, provideSubDefaults: a } = Fv(r, r._as ?? e.name, s), l = e._setup(o, i);
      return a(), l;
    };
  }
  return e;
}
function Pe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? gr : Ye)(t);
}
function $v(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Pe()({ name: n ?? dr(_t(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...qe() }, setup(r, i) {
    let { slots: s } = i;
    return () => {
      var _a2;
      return vn(r.tag, { class: [e, r.class], style: r.style }, (_a2 = s.default) == null ? void 0 : _a2.call(s));
    };
  } });
}
function Bv(e, t, n, r) {
  if (!n || ar(e) || ar(t)) return;
  const i = n.get(e);
  if (i) i.set(t, r);
  else {
    const s = /* @__PURE__ */ new WeakMap();
    s.set(t, r), n.set(e, s);
  }
}
function jv(e, t, n) {
  var _a2, _b2;
  if (!n || ar(e) || ar(t)) return null;
  const r = (_a2 = n.get(e)) == null ? void 0 : _a2.get(t);
  if (typeof r == "boolean") return r;
  const i = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof i == "boolean" ? i : null;
}
function Qn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return false;
  const i = jv(e, t, n);
  return i || (Bv(e, t, n, true), r.every((s) => Qn(e[s], t[s], n)));
}
function vd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Co = "cubic-bezier(0.4, 0, 0.2, 1)", cc = "cubic-bezier(0.0, 0, 0.2, 1)", uc = "cubic-bezier(0.4, 0, 1, 1)", Wv = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function zv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? Gv(e) : wa(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Xi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (wa(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function wa(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, r = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || r;
}
function Gv(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Uv(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed") return true;
    e = e.offsetParent;
  }
  return false;
}
function ze(e) {
  const t = Ze("useRender");
  t.render = e;
}
function Zv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, r = 0, i = 0, s = false, o = 0;
  function a() {
    clearTimeout(r), s = false, o = 0;
  }
  const l = function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++) c[f] = arguments[f];
    clearTimeout(r);
    const d = Date.now();
    o || (o = d);
    const m = d - Math.max(o, i);
    function b() {
      i = Date.now(), r = setTimeout(a, t), e(...c);
    }
    s ? m >= t ? b() : n.trailing && (r = setTimeout(b, t - m)) : (s = true, n.leading && b());
  };
  return l.clear = a, l.immediate = e, l;
}
const hi = ne({ border: [Boolean, Number, String] }, "border");
function gi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { borderClasses: N(() => {
    const r = e.border;
    return r === true || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((i) => `border-${i}`) : [];
  }) };
}
const Kv = [null, "default", "comfortable", "compact"], vi = ne({ density: { type: String, default: "default", validator: (e) => Kv.includes(e) } }, "density");
function pi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const bs = ne({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function _s(e) {
  return { elevationClasses: B(() => {
    const n = Ve(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const vr = ne({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function pr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { roundedClasses: N(() => {
    const r = Ve(e) ? e.value : e.rounded, i = Ve(e) ? false : e.tile, s = [];
    if (i || r === false) s.push("rounded-0");
    else if (r === true || r === "") s.push(`${t}--rounded`);
    else if (typeof r == "string" || r === 0) for (const o of String(r).split(" ")) s.push(`rounded-${o}`);
    return s;
  }) };
}
const Rt = ne({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Jr = Symbol.for("vuetify:theme"), Gt = ne({ theme: String }, "theme");
function fc() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Yv() {
  var _a2, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fc();
  const t = fc();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [r, i] of Object.entries(e.themes ?? {})) {
    const s = i.dark || r === "dark" ? (_a2 = t.themes) == null ? void 0 : _a2.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[r] = pt(s, i);
  }
  return pt(t, { ...e, themes: n });
}
function Cn(e, t, n, r) {
  e.push(`${Qv(t, r)} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function dc(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, i = [];
  for (const [s, o] of Object.entries(e.colors)) {
    const a = Bt(o);
    i.push(`--${t}theme-${s}: ${a.r},${a.g},${a.b}`), s.startsWith("on-") || i.push(`--${t}theme-${s}-overlay-multiplier: ${Vv(o) > 0.18 ? n : r}`);
  }
  for (const [s, o] of Object.entries(e.variables)) {
    const a = typeof o == "string" && o.startsWith("#") ? Bt(o) : void 0, l = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    i.push(`--${t}${s}: ${l ?? o}`);
  }
  return i;
}
function qv(e, t, n) {
  const r = {};
  if (n) for (const i of ["lighten", "darken"]) {
    const s = i === "lighten" ? Iv : Ov;
    for (const o of rd(n[i], 1)) r[`${e}-${i}-${o}`] = Tv(s(Bt(t), o));
  }
  return r;
}
function Xv(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const i = e[r];
    i && (n = { ...n, ...qv(r, i, t) });
  }
  return n;
}
function Jv(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, i = Bt(e[n]);
    t[r] = gd(i);
  }
  return t;
}
function Qv(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function ep(e, t, n) {
  const r = tp(e, t);
  r && (r.innerHTML = n);
}
function tp(e, t) {
  if (!Ie) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function np(e) {
  const t = Yv(e), n = ve(t.defaultTheme), r = X(t.themes), i = ve("light"), s = N({ get() {
    return n.value === "system" ? i.value : n.value;
  }, set(v) {
    n.value = v;
  } }), o = N(() => {
    const v = {};
    for (const [y, A] of Object.entries(r.value)) {
      const _ = { ...A.colors, ...Xv(A.colors, t.variations) };
      v[y] = { ...A, colors: { ..._, ...Jv(_) } };
    }
    return v;
  }), a = B(() => o.value[s.value]), l = B(() => n.value === "system"), u = N(() => {
    var _a2;
    const v = [], y = t.unimportant ? "" : " !important", A = t.scoped ? t.prefix : "";
    ((_a2 = a.value) == null ? void 0 : _a2.dark) && Cn(v, ":root", ["color-scheme: dark"], t.scope), Cn(v, ":root", dc(a.value, t.prefix), t.scope);
    for (const [x, E] of Object.entries(o.value)) Cn(v, `.${t.prefix}theme--${x}`, [`color-scheme: ${E.dark ? "dark" : "normal"}`, ...dc(E, t.prefix)], t.scope);
    if (t.utilities) {
      const x = [], E = [], T = new Set(Object.values(o.value).flatMap((w) => Object.keys(w.colors)));
      for (const w of T) w.startsWith("on-") ? Cn(E, `.${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${y}`], t.scope) : (Cn(x, `.${A}bg-${w}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${w}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${w}))${y}`, `color: rgb(var(--${t.prefix}theme-on-${w}))${y}`], t.scope), Cn(E, `.${A}text-${w}`, [`color: rgb(var(--${t.prefix}theme-${w}))${y}`], t.scope), Cn(E, `.${A}border-${w}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${w})`], t.scope));
      t.layers ? v.push(`@layer background {
`, ...x.map((w) => `  ${w}`), `}
`, `@layer foreground {
`, ...E.map((w) => `  ${w}`), `}
`) : v.push(...x, ...E);
    }
    let _ = v.map((x, E) => E === 0 ? x : `    ${x}`).join("");
    return t.layers && (_ = `@layer vuetify.theme {
` + v.map((x) => `  ${x}`).join("") + `
}`), _;
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${s.value}`), f = B(() => Object.keys(o.value));
  if (ed) {
    let y = function() {
      i.value = v.matches ? "dark" : "light";
    };
    const v = window.matchMedia("(prefers-color-scheme: dark)");
    y(), v.addEventListener("change", y, { passive: true }), bu() && ct(() => {
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
        const _ = y.push(A);
        Ie && le(u, () => {
          _.patch(A);
        });
      } else Ie ? (y.addHeadObjs(B(A)), gn(() => y.updateDOM())) : y.addHeadObjs(A());
    } else {
      let A = function() {
        ep(t.stylesheetId, t.cspNonce, u.value);
      };
      Ie ? le(u, A, { immediate: true }) : A();
    }
  }
  function m(v) {
    v !== "system" && !f.value.includes(v) || (s.value = v);
  }
  function b() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    const y = v.indexOf(s.value), A = y === -1 ? 0 : (y + 1) % v.length;
    m(v[A]);
  }
  function g() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    b(v);
  }
  const S = new Proxy(s, { get(v, y) {
    return Reflect.get(v, y);
  }, set(v, y, A) {
    return y === "value" && Qf(`theme.global.name.value = ${A}`, `theme.change('${A}')`), Reflect.set(v, y, A);
  } });
  return { install: d, change: m, cycle: b, toggle: g, isDisabled: t.isDisabled, isSystem: l, name: s, themes: r, current: a, computedThemes: o, prefix: t.prefix, themeClasses: c, styles: u, global: { name: S, current: a } };
}
function sn(e) {
  Ze("provideTheme");
  const t = ke(Jr, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), s = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return it(Jr, s), s;
}
function rp() {
  Ze("useTheme");
  const e = ke(Jr, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Sa(e) {
  return pa(() => {
    const { class: t, style: n } = sp(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Qr(e) {
  const { colorClasses: t, colorStyles: n } = Sa(() => ({ text: rt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Ca(e) {
  const { colorClasses: t, colorStyles: n } = Sa(() => ({ background: rt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function ip(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function sp(e) {
  const t = ip(rt(e)), n = [], r = {};
  if (t.background) if (So(t.background)) {
    if (r.backgroundColor = t.background, !t.text && kv(t.background)) {
      const i = Bt(t.background);
      if (i.a == null || i.a === 1) {
        const s = gd(i);
        r.color = s, r.caretColor = s;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (So(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: r };
}
const op = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function xa(e, t) {
  return k(_e, null, [e && k("span", { key: "overlay", class: Le(`${t}__overlay`) }, null), k("span", { key: "underlay", class: Le(`${t}__underlay`) }, null)]);
}
const yi = ne({ color: String, variant: { type: String, default: "elevated", validator: (e) => op.includes(e) } }, "variant");
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = B(() => {
    const { variant: s } = rt(e);
    return `${t}--variant-${s}`;
  }), { colorClasses: r, colorStyles: i } = Sa(() => {
    const { variant: s, color: o } = rt(e);
    return { [["elevated", "flat"].includes(s) ? "background" : "text"]: o };
  });
  return { colorClasses: r, colorStyles: i, variantClasses: n };
}
const pd = ne({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...hi(), ...qe(), ...vi(), ...bs(), ...vr(), ...Rt(), ...Gt(), ...yi() }, "VBtnGroup"), mc = Pe()({ name: "VBtnGroup", props: pd(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = sn(e), { densityClasses: i } = pi(e), { borderClasses: s } = gi(e), { elevationClasses: o } = _s(e), { roundedClasses: a } = pr(e);
  _a({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ze(() => M(e.tag, { class: Le(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, r.value, s.value, i.value, o.value, a.value, e.class]), style: He(e.style) }, n));
} });
function ws(e, t) {
  let n;
  function r() {
    n = jr(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), r();
    }) : t());
  }
  le(e, (i) => {
    i && !n ? r() : i || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Qt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const s = Ze("useProxiedModel"), o = X(e[t] !== void 0 ? e[t] : n), a = Pn(t), u = N(a !== t ? () => {
    var _a2, _b2, _c2, _d2;
    return e[t], !!((((_a2 = s.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) || ((_b2 = s.vnode.props) == null ? void 0 : _b2.hasOwnProperty(a))) && (((_c2 = s.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = s.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${a}`))));
  } : () => {
    var _a2, _b2;
    return e[t], !!(((_a2 = s.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) && ((_b2 = s.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  ws(() => !u.value, () => {
    le(() => e[t], (f) => {
      o.value = f;
    });
  });
  const c = N({ get() {
    const f = e[t];
    return r(u.value ? f : o.value);
  }, set(f) {
    const d = i(f), m = te(u.value ? e[t] : o.value);
    m === d || r(m) === f || (o.value = d, s == null ? void 0 : s.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : o.value }), c;
}
const ap = ne({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), lp = ne({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function cp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const r = Ze("useGroupItem");
  if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const i = ai();
  it(Symbol.for(`${t.description}:id`), i);
  const s = ke(t, null);
  if (!s) {
    if (!n) return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = B(() => e.value), a = N(() => !!(s.disabled.value || e.disabled));
  function l() {
    s == null ? void 0 : s.register({ id: i, value: o, disabled: a }, r);
  }
  function u() {
    s == null ? void 0 : s.unregister(i);
  }
  l(), zt(() => u());
  const c = N(() => s.isSelected(i)), f = N(() => s.items.value[0].id === i), d = N(() => s.items.value[s.items.value.length - 1].id === i), m = N(() => c.value && [s.selectedClass.value, e.selectedClass]);
  return le(c, (b) => {
    r.emit("group:selected", { value: b });
  }, { flush: "sync" }), { id: i, isSelected: c, isFirst: f, isLast: d, toggle: () => s.select(i, !c.value), select: (b) => s.select(i, b), selectedClass: m, value: o, disabled: a, group: s, register: l, unregister: u };
}
function up(e, t) {
  let n = false;
  const r = Ue([]), i = Qt(e, "modelValue", [], (d) => d === void 0 ? [] : yd(r, d === null ? [null] : va(d)), (d) => {
    const m = dp(r, d);
    return e.multiple ? m : m[0];
  }), s = Ze("useGroup");
  function o(d, m) {
    const b = d, g = Symbol.for(`${t.description}:id`), v = Wn(g, s == null ? void 0 : s.vnode).indexOf(m);
    re(b.value) === void 0 && (b.value = v, b.useIndexAsValue = true), v > -1 ? r.splice(v, 0, b) : r.push(b);
  }
  function a(d) {
    if (n) return;
    l();
    const m = r.findIndex((b) => b.id === d);
    r.splice(m, 1);
  }
  function l() {
    const d = r.find((m) => !m.disabled);
    d && e.mandatory === "force" && !i.value.length && (i.value = [d.id]);
  }
  Wt(() => {
    l();
  }), zt(() => {
    n = true;
  }), na(() => {
    for (let d = 0; d < r.length; d++) r[d].useIndexAsValue && (r[d].value = d);
  });
  function u(d, m) {
    const b = r.find((g) => g.id === d);
    if (!(m && (b == null ? void 0 : b.disabled))) if (e.multiple) {
      const g = i.value.slice(), S = g.findIndex((y) => y === d), v = ~S;
      if (m = m ?? !v, v && e.mandatory && g.length <= 1 || !v && e.max != null && g.length + 1 > e.max) return;
      S < 0 && m ? g.push(d) : S >= 0 && !m && g.splice(S, 1), i.value = g;
    } else {
      const g = i.value.includes(d);
      if (e.mandatory && g || !g && !m) return;
      i.value = m ?? !g ? [d] : [];
    }
  }
  function c(d) {
    if (e.multiple, i.value.length) {
      const m = i.value[0], b = r.findIndex((v) => v.id === m);
      let g = (b + d) % r.length, S = r[g];
      for (; S.disabled && g !== b; ) g = (g + d) % r.length, S = r[g];
      if (S.disabled) return;
      i.value = [r[g].id];
    } else {
      const m = r.find((b) => !b.disabled);
      m && (i.value = [m.id]);
    }
  }
  const f = { register: o, unregister: a, selected: i, select: u, disabled: B(() => e.disabled), prev: () => c(r.length - 1), next: () => c(1), isSelected: (d) => i.value.includes(d), selectedClass: B(() => e.selectedClass), items: B(() => r), getItemIndex: (d) => fp(r, d) };
  return it(t, f), f;
}
function fp(e, t) {
  const n = yd(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function yd(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.find((o) => Qn(r, o.value)), s = e[r];
    (i == null ? void 0 : i.value) !== void 0 ? n.push(i.id) : (s == null ? void 0 : s.useIndexAsValue) && n.push(s.id);
  }), n;
}
function dp(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.findIndex((s) => s.id === r);
    if (~i) {
      const s = e[i];
      n.push(s.value !== void 0 ? s.value : i);
    }
  }), n;
}
const bd = Symbol.for("vuetify:v-btn-toggle"), mp = ne({ ...pd(), ...ap() }, "VBtnToggle"), hp = Pe()({ name: "VBtnToggle", props: mp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: r, next: i, prev: s, select: o, selected: a } = up(e, bd);
  return ze(() => {
    const l = mc.filterProps(e);
    return M(mc, Re({ class: ["v-btn-toggle", e.class] }, l, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: r, next: i, prev: s, select: o, selected: a })];
    } });
  }), { next: i, prev: s, select: o };
} }), gp = ne({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), mn = Pe(false)({ name: "VDefaultsProvider", props: gp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: r, disabled: i, reset: s, root: o, scoped: a } = Hu(e);
  return _a(r, { reset: s, root: o, scoped: a, disabled: i }), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), yt = [String, Function, Object, Array], xo = Symbol.for("vuetify:icons"), Ss = ne({ icon: { type: yt }, tag: { type: [String, Object, Function], required: true } }, "icon"), hc = Pe()({ name: "VComponentIcon", props: Ss(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const r = e.icon;
    return M(e.tag, null, { default: () => {
      var _a2;
      return [e.icon ? M(r, null, null) : (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  };
} }), La = gr({ name: "VSvgIcon", inheritAttrs: false, props: Ss(), setup(e, t) {
  let { attrs: n } = t;
  return () => M(e.tag, Re(n, { style: null }), { default: () => [k("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? k("path", { d: r[0], "fill-opacity": r[1] }, null) : k("path", { d: r }, null)) : k("path", { d: e.icon }, null)])] });
} });
gr({ name: "VLigatureIcon", props: Ss(), setup(e) {
  return () => M(e.tag, null, { default: () => [e.icon] });
} });
const _d = gr({ name: "VClassIcon", props: Ss(), setup(e) {
  return () => M(e.tag, { class: Le(e.icon) }, null);
} }), vp = (e) => {
  const t = ke(xo);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: N(() => {
    var _a2;
    const r = rt(e);
    if (!r) return { component: hc };
    let i = r;
    if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (_a2 = t.aliases) == null ? void 0 : _a2[i.slice(1)])), Array.isArray(i)) return { component: La, icon: i };
    if (typeof i != "string") return { component: hc, icon: i };
    const s = Object.keys(t.sets).find((l) => typeof i == "string" && i.startsWith(`${l}:`)), o = s ? i.slice(s.length + 1) : i;
    return { component: t.sets[s ?? t.defaultSet].component, icon: o };
  }) };
}, pp = ["x-small", "small", "default", "large", "x-large"], Cs = ne({ size: { type: [String, Number], default: "default" } }, "size");
function xs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return pa(() => {
    const n = e.size;
    let r, i;
    return Yi(pp, n) ? r = `${t}--size-${n}` : n && (i = { width: pe(n), height: pe(n) }), { sizeClasses: r, sizeStyles: i };
  });
}
const yp = ne({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: yt, opacity: [String, Number], ...qe(), ...Cs(), ...Rt({ tag: "i" }), ...Gt() }, "VIcon"), st = Pe()({ name: "VIcon", props: yp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const i = ve(), { themeClasses: s } = rp(), { iconData: o } = vp(() => i.value || e.icon), { sizeClasses: a } = xs(e), { textColorClasses: l, textColorStyles: u } = Qr(() => e.color);
  return ze(() => {
    var _a2, _b2;
    const c = (_a2 = r.default) == null ? void 0 : _a2.call(r);
    c && (i.value = (_b2 = sd(c).filter((d) => d.type === li && d.children && typeof d.children == "string")[0]) == null ? void 0 : _b2.children);
    const f = !!(n.onClick || n.onClickOnce);
    return M(o.value.component, { tag: e.tag, icon: o.value.icon, class: Le(["v-icon", "notranslate", s.value, a.value, l.value, { "v-icon--clickable": f, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: He([{ "--v-icon-opacity": e.opacity }, a.value ? void 0 : { fontSize: pe(e.size), height: pe(e.size), width: pe(e.size) }, u.value, e.style]), role: f ? "button" : void 0, "aria-hidden": !f, tabindex: f ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function bp(e, t) {
  const n = X(), r = ve(false);
  if (ga) {
    const i = new IntersectionObserver((s) => {
      r.value = !!s.find((o) => o.isIntersecting);
    }, t);
    ct(() => {
      i.disconnect();
    }), le(n, (s, o) => {
      o && (i.unobserve(o), r.value = false), s && i.observe(s);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: r };
}
function wd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = _o(), r = X();
  if (Ie) {
    const i = new ResizeObserver((s) => {
      s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    zt(() => {
      i.disconnect();
    }), le(() => n.el, (s, o) => {
      o && (i.unobserve(o), r.value = void 0), s && i.observe(s);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: er(r) };
}
const _p = ne({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function wp(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = ve(e.reveal ? "initial" : "disabled");
  return Wt(async () => {
    e.reveal && (r.value = "initial", await new Promise((i) => requestAnimationFrame(i)), r.value = "pending", await new Promise((i) => setTimeout(i, n.value)), r.value = "done");
  }), { duration: n, state: r };
}
const Sp = ne({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...qe(), ..._p(), ...Cs(), ...Rt({ tag: "div" }), ...Gt() }, "VProgressCircular"), Cp = Pe()({ name: "VProgressCircular", props: Sp(), setup(e, t) {
  let { slots: n } = t;
  const r = 20, i = 2 * Math.PI * r, s = X(), { themeClasses: o } = sn(e), { sizeClasses: a, sizeStyles: l } = xs(e), { textColorClasses: u, textColorStyles: c } = Qr(() => e.color), { textColorClasses: f, textColorStyles: d } = Qr(() => e.bgColor), { intersectionRef: m, isIntersecting: b } = bp(), { resizeRef: g, contentRect: S } = wd(), { state: v, duration: y } = wp(e), A = B(() => v.value === "initial" ? 0 : Ki(parseFloat(e.modelValue), 0, 100)), _ = B(() => Number(e.width)), x = B(() => l.value ? Number(e.size) : S.value ? S.value.width : Math.max(_.value, 32)), E = B(() => r / (1 - _.value / x.value) * 2), T = B(() => _.value / x.value * E.value), w = B(() => {
    const R = (100 - A.value) / 100 * i;
    return e.rounded && A.value > 0 && A.value < 100 ? pe(Math.min(i - 0.01, R + T.value)) : pe(R);
  }), D = N(() => {
    const R = Number(e.rotate);
    return e.rounded ? R + T.value / 2 / i * 360 : R;
  });
  return gn(() => {
    m.value = s.value, g.value = s.value;
  }), ze(() => M(e.tag, { ref: s, class: Le(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": b.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Zi()), "v-progress-circular--revealing": ["initial", "pending"].includes(v.value) }, o.value, a.value, u.value, e.class]), style: He([l.value, c.value, { "--progress-reveal-duration": `${y.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : A.value }, { default: () => [k("svg", { style: { transform: `rotate(calc(-90deg + ${D.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${E.value} ${E.value}` }, [k("circle", { class: Le(["v-progress-circular__underlay", f.value]), style: He(d.value), fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": 0 }, null), k("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && k("div", { class: "v-progress-circular__content" }, [n.default({ value: A.value })])] })), {};
} }), yr = ne({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function br(e) {
  return { dimensionStyles: N(() => {
    const n = {}, r = pe(e.height), i = pe(e.maxHeight), s = pe(e.maxWidth), o = pe(e.minHeight), a = pe(e.minWidth), l = pe(e.width);
    return r != null && (n.height = r), i != null && (n.maxHeight = i), s != null && (n.maxWidth = s), o != null && (n.minHeight = o), a != null && (n.minWidth = a), l != null && (n.width = l), n;
  }) };
}
const xp = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, gc = "$vuetify.", vc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), Sd = (e, t, n) => function(r) {
  for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
  if (!r.startsWith(gc)) return vc(r, s);
  const a = r.replace(gc, ""), l = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = yo(l, a, null);
  return c || (`${r}${e.value}`, c = yo(u, a, null)), c || (c = r), typeof c != "string" && (c = r), vc(c, s);
};
function Ea(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function Cd(e, t) {
  return Ea(e, t)(0.1).includes(",") ? "," : ".";
}
function Zs(e, t, n) {
  const r = Qt(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, le(n, (i) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function xd(e) {
  return (t) => {
    const n = Zs(t, "locale", e.current), r = Zs(t, "fallback", e.fallback), i = Zs(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: r, messages: i, decimalSeparator: B(() => Cd(n, r)), t: Sd(n, r, i), n: Ea(n, r), provide: xd({ current: n, fallback: r, messages: i }) };
  };
}
function Ap(e) {
  const t = ve((e == null ? void 0 : e.locale) ?? "en"), n = ve((e == null ? void 0 : e.fallback) ?? "en"), r = X({ en: xp, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: r, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Cd(t, n)), t: Sd(t, n, r), n: Ea(t, n), provide: xd({ current: t, fallback: n, messages: r }) };
}
const Ao = Symbol.for("vuetify:locale");
function Lp(e) {
  return e.name != null;
}
function Ep(e) {
  const t = (e == null ? void 0 : e.adapter) && Lp(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Ap(e), n = Mp(t, e);
  return { ...t, ...n };
}
function kp() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function Mp(e, t) {
  const n = X((t == null ? void 0 : t.rtl) ?? kp()), r = N(() => n.value[e.current.value] ?? false);
  return { isRtl: r, rtl: n, rtlClasses: B(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`) };
}
function bi() {
  const e = ke(Ao);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const pc = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Tp = ne({ location: String }, "location");
function Pp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: r } = bi();
  return { locationStyles: N(() => {
    if (!e.location) return {};
    const { side: s, align: o } = wo(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
    function a(u) {
      return n ? n(u) : 0;
    }
    const l = {};
    return s !== "center" && (t ? l[pc[s]] = `calc(100% - ${a(s)}px)` : l[s] = 0), o !== "center" ? t ? l[pc[o]] = `calc(100% - ${a(o)}px)` : l[o] = 0 : (s === "center" ? l.top = l.left = "50%" : l[{ top: "left", bottom: "left", left: "top", right: "top" }[s]] = "50%", l.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[s]), l;
  }) };
}
const Rp = ne({ loading: [Boolean, String] }, "loader");
function Ip(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
const Op = ["static", "relative", "fixed", "absolute", "sticky"], Vp = ne({ position: { type: String, validator: (e) => Op.includes(e) } }, "position");
function Dp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Hp() {
  const e = Ze("useRoute");
  return N(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function Np() {
  var _a2, _b2;
  return (_b2 = (_a2 = Ze("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function Ad(e, t) {
  const n = _h("RouterLink"), r = B(() => !!(e.href || e.to)), i = N(() => (r == null ? void 0 : r.value) || Kl(t, "click") || Kl(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = B(() => e.href);
    return { isLink: r, isRouterLink: B(() => false), isClickable: i, href: f, linkProps: Ue({ href: f }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const s = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), o = N(() => e.to ? s : void 0), a = Hp(), l = N(() => {
    var _a2, _b2, _c2;
    return o.value ? e.exact ? a.value ? ((_a2 = o.value.isExactActive) == null ? void 0 : _a2.value) && Qn(o.value.route.value.query, a.value.query) : ((_b2 = o.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = o.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = N(() => {
    var _a2;
    return e.to ? (_a2 = o.value) == null ? void 0 : _a2.route.value.href : e.href;
  });
  return { isLink: r, isRouterLink: B(() => !!e.to), isClickable: i, isActive: l, route: B(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.route.value;
  }), navigate: B(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.navigate;
  }), href: u, linkProps: Ue({ href: u, "aria-current": B(() => l.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && r.value ? "true" : void 0), tabindex: B(() => e.disabled && r.value ? "-1" : void 0) }) };
}
const Ld = ne({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Ks = false;
function Fp(e, t) {
  let n = false, r, i;
  Ie && (e == null ? void 0 : e.beforeEach) && (dt(() => {
    window.addEventListener("popstate", s), r = e.beforeEach((o, a, l) => {
      Ks ? n ? t(l) : l() : setTimeout(() => n ? t(l) : l()), Ks = true;
    }), i = e == null ? void 0 : e.afterEach(() => {
      Ks = false;
    });
  }), ct(() => {
    window.removeEventListener("popstate", s), r == null ? void 0 : r(), i == null ? void 0 : i();
  }));
  function s(o) {
    var _a2;
    ((_a2 = o.state) == null ? void 0 : _a2.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function $p(e, t) {
  le(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && dt(() => {
      t(n);
    });
  }, { immediate: true });
}
const Lo = Symbol("rippleStop"), Bp = 80;
function yc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Eo(e) {
  return e.constructor.name === "TouchEvent";
}
function Ed(e) {
  return e.constructor.name === "KeyboardEvent";
}
const jp = function(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!Ed(e)) {
    const f = t.getBoundingClientRect(), d = Eo(e) ? e.touches[e.touches.length - 1] : e;
    r = d.clientX - f.left, i = d.clientY - f.top;
  }
  let s = 0, o = 0.3;
  ((_a2 = t._ripple) == null ? void 0 : _a2.circle) ? (o = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((r - s) ** 2 + (i - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const a = `${(t.clientWidth - s * 2) / 2}px`, l = `${(t.clientHeight - s * 2) / 2}px`, u = n.center ? a : `${r - s}px`, c = n.center ? l : `${i - s}px`;
  return { radius: s, scale: o, x: u, y: c, centerX: a, centerY: l };
}, Ji = { show(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a2 = t == null ? void 0 : t._ripple) == null ? void 0 : _a2.enabled)) return;
  const r = document.createElement("span"), i = document.createElement("span");
  r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
  const { radius: s, scale: o, x: a, y: l, centerX: u, centerY: c } = jp(e, t, n), f = `${s * 2}px`;
  i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
  const d = window.getComputedStyle(t);
  d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), yc(i, `translate(${a}, ${l}) scale3d(${o},${o},${o})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), yc(i, `translate(${u}, ${c}) scale3d(1,1,1)`);
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
function ei(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Lo])) {
    if (e[Lo] = true, Eo(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Ed(e), n._ripple.class && (t.class = n._ripple.class), Eo(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Ji.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a2;
        ((_a2 = n == null ? void 0 : n._ripple) == null ? void 0 : _a2.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Bp);
    } else Ji.show(e, n, t);
  }
}
function Qi(e) {
  e[Lo] = true;
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
    }), Ji.hide(t);
  }
}
function Md(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let ti = false;
function Wp(e, t) {
  !ti && t.includes(e.key) && (ti = true, ei(e));
}
function Td(e) {
  ti = false, gt(e);
}
function Pd(e) {
  ti && (ti = false, gt(e));
}
function Rd(e, t, n) {
  const { value: r, modifiers: i } = t, s = kd(r);
  s || Ji.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = i.center, e._ripple.circle = i.circle;
  const o = bo(r) ? r : {};
  o.class && (e._ripple.class = o.class);
  const a = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (l) => Wp(l, a), s && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", Qi, { passive: true }), e.addEventListener("mousedown", Qi);
      return;
    }
    e.addEventListener("touchstart", ei, { passive: true }), e.addEventListener("touchend", gt, { passive: true }), e.addEventListener("touchmove", Md, { passive: true }), e.addEventListener("touchcancel", gt), e.addEventListener("mousedown", ei), e.addEventListener("mouseup", gt), e.addEventListener("mouseleave", gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Td), e.addEventListener("blur", Pd), e.addEventListener("dragstart", gt, { passive: true });
  } else !s && n && Id(e);
}
function Id(e) {
  var _a2;
  e.removeEventListener("touchstart", Qi), e.removeEventListener("mousedown", Qi), e.removeEventListener("touchstart", ei), e.removeEventListener("touchend", gt), e.removeEventListener("touchmove", Md), e.removeEventListener("touchcancel", gt), e.removeEventListener("mousedown", ei), e.removeEventListener("mouseup", gt), e.removeEventListener("mouseleave", gt), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Td), e.removeEventListener("blur", Pd), e.removeEventListener("dragstart", gt);
}
function zp(e, t) {
  Rd(e, t, false);
}
function Gp(e) {
  Id(e), delete e._ripple;
}
function Up(e, t) {
  if (t.value === t.oldValue) return;
  const n = kd(t.oldValue);
  Rd(e, t, n);
}
const ko = { mounted: zp, unmounted: Gp, updated: Up }, Zp = ne({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: bd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: yt, appendIcon: yt, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...hi(), ...qe(), ...vi(), ...yr(), ...bs(), ...lp(), ...Rp(), ...Tp(), ...Vp(), ...vr(), ...Ld(), ...Cs(), ...Rt({ tag: "button" }), ...Gt(), ...yi({ variant: "elevated" }) }, "VBtn"), Vi = Pe()({ name: "VBtn", props: Zp(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = sn(e), { borderClasses: s } = gi(e), { densityClasses: o } = pi(e), { dimensionStyles: a } = br(e), { elevationClasses: l } = _s(e), { loaderClasses: u } = Ip(e), { locationStyles: c } = Pp(e), { positionClasses: f } = Dp(e), { roundedClasses: d } = pr(e), { sizeClasses: m, sizeStyles: b } = xs(e), g = cp(e, e.symbol, false), S = Ad(e, n), v = N(() => {
    var _a2;
    return e.active !== void 0 ? e.active : S.isRouterLink.value ? (_a2 = S.isActive) == null ? void 0 : _a2.value : g == null ? void 0 : g.isSelected.value;
  }), y = B(() => v.value ? e.activeColor ?? e.color : e.color), A = N(() => {
    var _a2, _b2;
    return { color: (g == null ? void 0 : g.isSelected.value) && (!S.isLink.value || ((_a2 = S.isActive) == null ? void 0 : _a2.value)) || !g || ((_b2 = S.isActive) == null ? void 0 : _b2.value) ? y.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: _, colorStyles: x, variantClasses: E } = Aa(A), T = N(() => (g == null ? void 0 : g.disabled.value) || e.disabled), w = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), D = N(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function R(F) {
    var _a2, _b2;
    T.value || S.isLink.value && (F.metaKey || F.ctrlKey || F.shiftKey || F.button !== 0 || n.target === "_blank") || (S.isRouterLink.value ? (_b2 = (_a2 = S.navigate).value) == null ? void 0 : _b2.call(_a2, F) : g == null ? void 0 : g.toggle());
  }
  return $p(S, g == null ? void 0 : g.select), ze(() => {
    const F = S.isLink.value ? "a" : e.tag, P = !!(e.prependIcon || r.prepend), H = !!(e.appendIcon || r.append), Y = !!(e.icon && e.icon !== true);
    return nr(M(F, Re(S.linkProps, { type: F === "a" ? void 0 : "button", class: ["v-btn", g == null ? void 0 : g.selectedClass.value, { "v-btn--active": v.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], i.value, s.value, _.value, o.value, l.value, u.value, f.value, d.value, m.value, E.value, e.class], style: [x.value, a.value, c.value, b.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: T.value && F !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: R, value: D.value }), { default: () => {
      var _a2;
      return [xa(true, "v-btn"), !e.icon && P && k("span", { key: "prepend", class: "v-btn__prepend" }, [r.prepend ? M(mn, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, r.prepend) : M(st, { key: "prepend-icon", icon: e.prependIcon }, null)]), k("span", { class: "v-btn__content", "data-no-activator": "" }, [!r.default && Y ? M(st, { key: "content-icon", icon: e.icon }, null) : M(mn, { key: "content-defaults", disabled: !Y, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = r.default) == null ? void 0 : _a3.call(r)) ?? ye(e.text)];
      } })]), !e.icon && H && k("span", { key: "append", class: "v-btn__append" }, [r.append ? M(mn, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, r.append) : M(st, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && k("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = r.loader) == null ? void 0 : _a2.call(r)) ?? M(Cp, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[ko, !T.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: g };
} }), Kp = ["dotted", "dashed", "solid", "double"], Yp = ne({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => Kp.includes(e) }, ...qe(), ...Gt() }, "VDivider"), qp = Pe()({ name: "VDivider", props: Yp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = sn(e), { textColorClasses: s, textColorStyles: o } = Qr(() => e.color), a = N(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = pe(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = pe(e.thickness)), u;
  }), l = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? pe(u) : void 0, marginInline: !e.vertical && u ? pe(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${pe(c)})` : void 0 };
  });
  return ze(() => {
    const u = k("hr", { class: Le([{ "v-divider": true, "v-divider--gradient": e.gradient && !r.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, i.value, s.value, e.class]), style: He([a.value, o.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return r.default ? k("div", { class: Le(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, k("div", { class: "v-divider__content", style: He(l.value) }, [r.default()]), u]) : u;
  }), {};
} }), Xp = ne({ fluid: { type: Boolean, default: false }, ...qe(), ...yr(), ...Rt() }, "VContainer"), _i = Pe()({ name: "VContainer", props: Xp(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: r } = bi(), { dimensionStyles: i } = br(e);
  return ze(() => M(e.tag, { class: Le(["v-container", { "v-container--fluid": e.fluid }, r.value, e.class]), style: He([i.value, e.style]) }, n)), {};
} }), Mo = Symbol.for("vuetify:display"), bc = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, Jp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bc;
  return pt(bc, e);
};
function _c(e) {
  return Ie && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function wc(e) {
  return Ie && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Sc(e) {
  const t = Ie && !e ? window.navigator.userAgent : "ssr";
  function n(b) {
    return !!t.match(b);
  }
  const r = n(/android/i), i = n(/iphone|ipad|ipod/i), s = n(/cordova/i), o = n(/electron/i), a = n(/chrome/i), l = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), m = n(/linux/i);
  return { android: r, ios: i, cordova: s, electron: o, chrome: a, edge: l, firefox: u, opera: c, win: f, mac: d, linux: m, touch: ev, ssr: t === "ssr" };
}
function Qp(e, t) {
  const { thresholds: n, mobileBreakpoint: r } = Jp(e), i = ve(wc(t)), s = ve(Sc(t)), o = Ue({}), a = ve(_c(t));
  function l() {
    i.value = wc(), a.value = _c();
  }
  function u() {
    l(), s.value = Sc();
  }
  return gn(() => {
    const c = a.value < n.sm, f = a.value < n.md && !c, d = a.value < n.lg && !(f || c), m = a.value < n.xl && !(d || f || c), b = a.value < n.xxl && !(m || d || f || c), g = a.value >= n.xxl, S = c ? "xs" : f ? "sm" : d ? "md" : m ? "lg" : b ? "xl" : "xxl", v = typeof r == "number" ? r : n[r], y = a.value < v;
    o.xs = c, o.sm = f, o.md = d, o.lg = m, o.xl = b, o.xxl = g, o.smAndUp = !c, o.mdAndUp = !(c || f), o.lgAndUp = !(c || f || d), o.xlAndUp = !(c || f || d || m), o.smAndDown = !(d || m || b || g), o.mdAndDown = !(m || b || g), o.lgAndDown = !(b || g), o.xlAndDown = !g, o.name = S, o.height = i.value, o.width = a.value, o.mobile = y, o.mobileBreakpoint = r, o.platform = s.value, o.thresholds = n;
  }), Ie && (window.addEventListener("resize", l, { passive: true }), ct(() => {
    window.removeEventListener("resize", l);
  }, true)), { ...Hu(o), update: u, ssr: !!t };
}
function ey() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = ke(Mo);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = N(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: r.value } : {}), mobile: r };
}
const ty = ne({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function wt(e, t, n) {
  return Pe()({ name: e, props: ty({ mode: n, origin: t }), setup(r, i) {
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
      const a = r.group ? la : or;
      return vn(a, { name: r.disabled ? "" : e, css: !r.disabled, ...r.group ? void 0 : { mode: r.mode }, ...r.disabled ? {} : o }, s.default);
    };
  } });
}
function ka(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Pe()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Zi() }, group: Boolean, hideOnLeave: Boolean }, setup(r, i) {
    let { slots: s } = i;
    const o = r.group ? la : or;
    return () => vn(o, { name: r.disabled ? "" : e, css: !r.disabled, ...r.disabled ? {} : { ...t, onLeave: (a) => {
      var _a2;
      r.hideOnLeave ? a.style.setProperty("display", "none", "important") : (_a2 = t.onLeave) == null ? void 0 : _a2.call(t, a);
    } } }, s.default);
  } });
}
function Ma() {
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
const ny = ne({ target: [Object, Array] }, "v-dialog-transition"), Ys = /* @__PURE__ */ new WeakMap(), ry = Pe()({ name: "VDialogTransition", props: ny(), setup(e, t) {
  let { slots: n } = t;
  const r = { onBeforeEnter(i) {
    i.style.pointerEvents = "none", i.style.visibility = "hidden";
  }, async onEnter(i, s) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), i.style.visibility = "";
    const o = xc(e.target, i), { x: a, y: l, sx: u, sy: c, speed: f } = o;
    if (Ys.set(i, o), Zi()) An(i, [{ opacity: 0 }, {}], { duration: 125 * f, easing: cc }).finished.then(() => s());
    else {
      const d = An(i, [{ transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * f, easing: cc });
      (_a2 = Cc(i)) == null ? void 0 : _a2.forEach((m) => {
        An(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * f, easing: Co });
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
    !Ys.has(i) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = xc(e.target, i) : o = Ys.get(i);
    const { x: a, y: l, sx: u, sy: c, speed: f } = o;
    Zi() ? An(i, [{}, { opacity: 0 }], { duration: 85 * f, easing: uc }).finished.then(() => s()) : (An(i, [{}, { transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * f, easing: uc }).finished.then(() => s()), (_a2 = Cc(i)) == null ? void 0 : _a2.forEach((m) => {
      An(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * f, easing: Co });
    }));
  }, onAfterLeave(i) {
    i.style.removeProperty("pointer-events");
  } };
  return () => e.target ? M(or, Re({ name: "dialog-transition" }, r, { css: false }), n) : M(or, { name: "dialog-transition" }, n);
} });
function Cc(e) {
  var _a2;
  const t = (_a2 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a2.children;
  return t && [...t];
}
function xc(e, t) {
  const n = cd(e), r = ud(t), [i, s] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [o, a] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let l = n.left + n.width / 2;
  o === "left" || a === "left" ? l -= n.width / 2 : (o === "right" || a === "right") && (l += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || a === "top" ? u -= n.height / 2 : (o === "bottom" || a === "bottom") && (u += n.height / 2);
  const c = n.width / r.width, f = n.height / r.height, d = Math.max(1, c, f), m = c / d || 0, b = f / d || 0, g = r.width * r.height / (window.innerWidth * window.innerHeight), S = g > 0.12 ? Math.min(1.5, (g - 0.12) * 10 + 1) : 1;
  return { x: l - (i + r.left), y: u - (s + r.top), sx: m, sy: b, speed: S };
}
wt("fab-transition", "center center", "out-in");
wt("dialog-bottom-transition");
wt("dialog-top-transition");
wt("fade-transition");
wt("scale-transition");
wt("scroll-x-transition");
wt("scroll-x-reverse-transition");
wt("scroll-y-transition");
wt("scroll-y-reverse-transition");
wt("slide-x-transition");
wt("slide-x-reverse-transition");
wt("slide-y-transition");
wt("slide-y-reverse-transition");
const iy = ka("expand-transition", Ma());
ka("expand-x-transition", Ma("", "x"));
ka("expand-both-transition", Ma("", "both"));
function sy(e) {
  return { aspectStyles: N(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Od = ne({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...qe(), ...yr() }, "VResponsive"), Ac = Pe()({ name: "VResponsive", props: Od(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: r } = sy(e), { dimensionStyles: i } = br(e);
  return ze(() => {
    var _a2;
    return k("div", { class: Le(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: He([i.value, e.style]) }, [k("div", { class: "v-responsive__sizer", style: He(r.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && k("div", { class: Le(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} }), Vd = ne({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), zn = (e, t) => {
  let { slots: n } = t;
  const { transition: r, disabled: i, group: s, ...o } = e, { component: a = s ? la : or, ...l } = bo(r) ? r : {};
  let u;
  return bo(r) ? u = Re(l, uv({ disabled: i, group: s }), o) : u = Re({ name: i || !r ? "" : r }, o), vn(a, u, n);
};
function Lc(e, t) {
  if (!ga) return;
  const n = t.modifiers || {}, r = t.value, { handler: i, options: s } = typeof r == "object" ? r : { handler: r, options: {} }, o = new IntersectionObserver(function() {
    var _a2;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
    if (!u) return;
    const c = a.some((f) => f.isIntersecting);
    i && (!n.quiet || u.init) && (!n.once || c || u.init) && i(c, a, l), c && n.once ? To(e, t) : u.init = true;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: o }, o.observe(e);
}
function To(e, t) {
  var _a2;
  const n = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Ec = { mounted: Lc, unmounted: To, updated: (e, t) => {
  var _a2;
  ((_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid]) && (To(e, t), Lc(e, t));
} }, oy = ne({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Od(), ...qe(), ...vr(), ...Vd() }, "VImg"), ay = Pe()({ name: "VImg", directives: { vIntersect: Ec }, props: oy(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: r } = t;
  const { backgroundColorClasses: i, backgroundColorStyles: s } = Ca(() => e.color), { roundedClasses: o } = pr(e), a = Ze("VImg"), l = ve(""), u = X(), c = ve(e.eager ? "loading" : "idle"), f = ve(), d = ve(), m = N(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), b = N(() => m.value.aspect || f.value / d.value || 0);
  le(() => e.src, () => {
    g(c.value !== "idle");
  }), le(b, (P, H) => {
    !P && H && u.value && _(u.value);
  }), ms(() => g());
  function g(P) {
    if (!(e.eager && P) && !(ga && !P && !e.eager)) {
      if (c.value = "loading", m.value.lazySrc) {
        const H = new Image();
        H.src = m.value.lazySrc, _(H, null);
      }
      m.value.src && dt(() => {
        var _a2;
        n("loadstart", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src), setTimeout(() => {
          var _a3;
          if (!a.isUnmounted) if ((_a3 = u.value) == null ? void 0 : _a3.complete) {
            if (u.value.naturalWidth || v(), c.value === "error") return;
            b.value || _(u.value, null), c.value === "loading" && S();
          } else b.value || _(u.value), y();
        });
      });
    }
  }
  function S() {
    var _a2;
    a.isUnmounted || (y(), _(u.value), c.value = "loaded", n("load", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src));
  }
  function v() {
    var _a2;
    a.isUnmounted || (c.value = "error", n("error", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src));
  }
  function y() {
    const P = u.value;
    P && (l.value = P.currentSrc || P.src);
  }
  let A = -1;
  zt(() => {
    clearTimeout(A);
  });
  function _(P) {
    let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const Y = () => {
      if (clearTimeout(A), a.isUnmounted) return;
      const { naturalHeight: z, naturalWidth: J } = P;
      z || J ? (f.value = J, d.value = z) : !P.complete && c.value === "loading" && H != null ? A = window.setTimeout(Y, H) : (P.currentSrc.endsWith(".svg") || P.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
    };
    Y();
  }
  const x = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), E = () => {
    var _a2;
    if (!m.value.src || c.value === "idle") return null;
    const P = k("img", { class: Le(["v-img__img", x.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.src, srcset: m.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: S, onError: v }, null), H = (_a2 = r.sources) == null ? void 0 : _a2.call(r);
    return M(zn, { transition: e.transition, appear: true }, { default: () => [nr(H ? k("picture", { class: "v-img__picture" }, [H, P]) : P, [[aa, c.value === "loaded"]])] });
  }, T = () => M(zn, { transition: e.transition }, { default: () => [m.value.lazySrc && c.value !== "loaded" && k("img", { class: Le(["v-img__img", "v-img__img--preload", x.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => r.placeholder ? M(zn, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !r.error) && k("div", { class: "v-img__placeholder" }, [r.placeholder()])] }) : null, D = () => r.error ? M(zn, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && k("div", { class: "v-img__error" }, [r.error()])] }) : null, R = () => e.gradient ? k("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, F = ve(false);
  {
    const P = le(b, (H) => {
      H && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          F.value = true;
        });
      }), P());
    });
  }
  return ze(() => {
    const P = Ac.filterProps(e);
    return nr(M(Ac, Re({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !F.value, "v-img--fit-content": e.width === "fit-content" }, i.value, o.value, e.class], style: [{ width: pe(e.width === "auto" ? f.value : e.width) }, s.value, e.style] }, P, { aspectRatio: b.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => k(_e, null, [M(E, null, null), M(T, null, null), M(R, null, null), M(w, null, null), M(D, null, null)]), default: r.default }), [[Ec, { handler: g, options: e.options }, null, { once: true }]]);
  }), { currentSrc: l, image: u, state: c, naturalWidth: f, naturalHeight: d };
} }), ly = ne({ start: Boolean, end: Boolean, icon: yt, image: String, text: String, ...hi(), ...qe(), ...vi(), ...vr(), ...Cs(), ...Rt(), ...Gt(), ...yi({ variant: "flat" }) }, "VAvatar"), kc = Pe()({ name: "VAvatar", props: ly(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = sn(e), { borderClasses: i } = gi(e), { colorClasses: s, colorStyles: o, variantClasses: a } = Aa(e), { densityClasses: l } = pi(e), { roundedClasses: u } = pr(e), { sizeClasses: c, sizeStyles: f } = xs(e);
  return ze(() => M(e.tag, { class: Le(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, r.value, i.value, s.value, l.value, u.value, c.value, a.value, e.class]), style: He([o.value, f.value, e.style]) }, { default: () => [n.default ? M(mn, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? M(ay, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? M(st, { key: "icon", icon: e.icon }, null) : e.text, xa(false, "v-avatar")] })), {};
} }), qs = Symbol("Forwarded refs");
function Xs(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function Dd(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return e[qs] = n, new Proxy(e, { get(i, s) {
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
        const l = Xs(a.value, s) ?? ("_" in a.value ? Xs((_a2 = a.value._) == null ? void 0 : _a2.setupState, s) : void 0);
        if (l) return l;
      }
      for (const a of n) {
        const l = a.value && a.value[qs];
        if (!l) continue;
        const u = l.slice();
        for (; u.length; ) {
          const c = u.shift(), f = Xs(c.value, s);
          if (f) return f;
          const d = c.value && c.value[qs];
          d && u.push(...d);
        }
      }
    }
  } });
}
const cy = Symbol.for("vuetify:goto");
function uy() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: Wv };
}
function fy(e, t) {
  return { rtl: t.isRtl, options: pt(uy(), e) };
}
const Po = Symbol.for("vuetify:list");
function Hd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = ke(Po, { filterable: false, hasPrepend: ve(false), updateHasPrepend: () => null, trackingIndex: ve(-1), navigationStrategy: ve("focus"), uid: "" }), { filterable: n, trackingIndex: r = t.trackingIndex, navigationStrategy: i = t.navigationStrategy, uid: s = t.uid || ai() } = e, o = { filterable: t.filterable || n, hasPrepend: ve(false), updateHasPrepend: (a) => {
    a && (o.hasPrepend.value = a);
  }, trackingIndex: r, navigationStrategy: i, uid: s };
  return it(Po, o), t;
}
function Nd() {
  return ke(Po, null);
}
const Ta = (e) => {
  const t = { activate: (n) => {
    let { id: r, value: i, activated: s } = n;
    return r = te(r), e && !i && s.size === 1 && s.has(r) || (i ? s.add(r) : s.delete(r)), s;
  }, in: (n, r, i) => {
    let s = /* @__PURE__ */ new Set();
    if (n != null) for (const o of va(n)) s = t.activate({ id: o, value: true, activated: new Set(s), children: r, parents: i });
    return s;
  }, out: (n) => Array.from(n) };
  return t;
}, Fd = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { activated: i, id: s, ...o } = r;
    s = te(s);
    const a = i.has(s) ? /* @__PURE__ */ new Set([s]) : /* @__PURE__ */ new Set();
    return t.activate({ ...o, id: s, activated: a });
  }, in: (r, i, s) => {
    let o = /* @__PURE__ */ new Set();
    if (r != null) {
      const a = va(r);
      a.length && (o = t.in(a.slice(0, 1), i, s));
    }
    return o;
  }, out: (r, i, s) => t.out(r, i, s) };
}, dy = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, my = (e) => {
  const t = Fd(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, hy = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    const s = /* @__PURE__ */ new Set();
    s.add(t);
    let o = i.get(t);
    for (; o != null; ) s.add(o), o = i.get(o);
    return s;
  } else return r.delete(t), r;
}, select: () => null }, $d = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    let s = i.get(t);
    for (r.add(t); s != null && s !== t; ) r.add(s), s = i.get(s);
    return r;
  } else r.delete(t);
  return r;
}, select: () => null }, gy = { open: $d.open, select: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (!n) return r;
  const s = [];
  let o = i.get(t);
  for (; o != null; ) s.push(o), o = i.get(o);
  return new Set(s);
} }, Pa = (e) => {
  const t = { select: (n) => {
    let { id: r, value: i, selected: s } = n;
    if (r = te(r), e && !i) {
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
}, Bd = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { selected: i, id: s, ...o } = r;
    s = te(s);
    const a = i.has(s) ? /* @__PURE__ */ new Map([[s, i.get(s)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...o, id: s, selected: a });
  }, in: (r, i, s, o) => (r == null ? void 0 : r.length) ? t.in(r.slice(0, 1), i, s, o) : /* @__PURE__ */ new Map(), out: (r, i, s) => t.out(r, i, s) };
}, vy = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, py = (e) => {
  const t = Bd(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, Ra = (e) => {
  const t = { select: (n) => {
    let { id: r, value: i, selected: s, children: o, parents: a, disabled: l } = n;
    r = te(r);
    const u = new Map(s), c = [r];
    for (; c.length; ) {
      const d = c.shift();
      l.has(d) || s.set(te(d), i ? "on" : "off"), o.has(d) && c.push(...o.get(d));
    }
    let f = te(a.get(r));
    for (; f; ) {
      let d = true, m = true;
      for (const b of o.get(f)) {
        const g = te(b);
        if (!l.has(g) && (s.get(g) !== "on" && (d = false), s.has(g) && s.get(g) !== "off" && (m = false), !d && !m)) break;
      }
      s.set(f, d ? "on" : m ? "off" : "indeterminate"), f = te(a.get(f));
    }
    return e && !i && Array.from(s.entries()).reduce((m, b) => {
      let [g, S] = b;
      return S === "on" && m.push(g), m;
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
}, yy = (e) => {
  const t = Ra(e);
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
}, by = (e) => {
  const n = { select: Ra(e).select, in: (r, i, s, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const l of r || []) i.has(l) || (a = n.select({ id: l, value: true, selected: a, children: i, parents: s, disabled: o }));
    return a;
  }, out: (r) => {
    const i = [];
    for (const [s, o] of r.entries()) (o === "on" || o === "indeterminate") && i.push(s);
    return i;
  } };
  return n;
}, cr = Symbol.for("vuetify:nested"), jd = { id: ve(), root: { itemsRegistration: X("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: X(/* @__PURE__ */ new Map()), parents: X(/* @__PURE__ */ new Map()), disabled: X(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: X(false), scrollToActive: X(false), selectable: X(false), opened: X(/* @__PURE__ */ new Set()), activated: X(/* @__PURE__ */ new Set()), selected: X(/* @__PURE__ */ new Map()), selectedValues: X([]), getPath: () => [] } }, _y = ne({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), wy = (e, t) => {
  let { items: n, returnObject: r, scrollToActive: i } = t, s = false;
  const o = ve(/* @__PURE__ */ new Map()), a = ve(/* @__PURE__ */ new Map()), l = ve(/* @__PURE__ */ new Set()), u = Qt(e, "opened", e.opened, (x) => new Set(Array.isArray(x) ? x.map((E) => te(E)) : x), (x) => [...x.values()]), c = N(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return dy(e.mandatory);
      case "single-leaf":
        return my(e.mandatory);
      case "independent":
        return Ta(e.mandatory);
      case "single-independent":
      default:
        return Fd(e.mandatory);
    }
  }), f = N(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return py(e.mandatory);
      case "leaf":
        return vy(e.mandatory);
      case "independent":
        return Pa(e.mandatory);
      case "single-independent":
        return Bd(e.mandatory);
      case "trunk":
        return yy(e.mandatory);
      case "branch":
        return by(e.mandatory);
      case "classic":
      default:
        return Ra(e.mandatory);
    }
  }), d = N(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return gy;
      case "single":
        return hy;
      case "multiple":
      default:
        return $d;
    }
  }), m = Qt(e, "activated", e.activated, (x) => c.value.in(x, o.value, a.value), (x) => c.value.out(x, o.value, a.value)), b = Qt(e, "selected", e.selected, (x) => f.value.in(x, o.value, a.value, l.value), (x) => f.value.out(x, o.value, a.value));
  zt(() => {
    s = true;
  });
  function g(x) {
    const E = [];
    let T = te(x);
    for (; T !== void 0; ) E.unshift(T), T = a.value.get(T);
    return E;
  }
  const S = Ze("nested"), v = /* @__PURE__ */ new Set(), y = Zv(() => {
    dt(() => {
      o.value = new Map(o.value), a.value = new Map(a.value);
    });
  }, 100);
  le(() => [n.value, rt(r)], () => {
    e.itemsRegistration === "props" && A();
  }, { immediate: true });
  function A() {
    const x = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), w = rt(r) ? (F) => te(F.raw) : (F) => F.value, D = [...n.value];
    let R = 0;
    for (; R < D.length; ) {
      const F = D[R++], P = w(F);
      if (F.children) {
        const H = [];
        for (const Y of F.children) {
          const z = w(Y);
          x.set(z, P), H.push(z), D.push(Y);
        }
        E.set(P, H);
      }
      F.props.disabled && T.add(P);
    }
    o.value = E, a.value = x, l.value = T;
  }
  const _ = { id: ve(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => rt(i)), selectable: B(() => e.selectable), activated: m, selected: b, selectedValues: N(() => {
    const x = [];
    for (const [E, T] of b.value.entries()) T === "on" && x.push(E);
    return x;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (x, E, T, w) => {
    if (v.has(x)) {
      g(x).map(String).join(" -> "), g(E).concat(x).map(String).join(" -> ");
      return;
    } else v.add(x);
    E && x !== E && a.value.set(x, E), T && l.value.add(x), w && o.value.set(x, []), E != null && o.value.set(E, [...o.value.get(E) || [], x]), y();
  }, unregister: (x) => {
    if (s) return;
    v.delete(x), o.value.delete(x), l.value.delete(x);
    const E = a.value.get(x);
    if (E) {
      const T = o.value.get(E) ?? [];
      o.value.set(E, T.filter((w) => w !== x));
    }
    a.value.delete(x), y();
  }, updateDisabled: (x, E) => {
    E ? l.value.add(x) : l.value.delete(x);
  }, open: (x, E, T) => {
    S.emit("click:open", { id: x, value: E, path: g(x), event: T });
    const w = d.value.open({ id: x, value: E, opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    w && (u.value = w);
  }, openOnSelect: (x, E, T) => {
    const w = d.value.select({ id: x, value: E, selected: new Map(b.value), opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    w && (u.value = w);
  }, select: (x, E, T) => {
    S.emit("click:select", { id: x, value: E, path: g(x), event: T });
    const w = f.value.select({ id: x, value: E, selected: new Map(b.value), children: o.value, parents: a.value, disabled: l.value, event: T });
    w && (b.value = w), _.root.openOnSelect(x, E, T);
  }, activate: (x, E, T) => {
    if (!e.activatable) return _.root.select(x, true, T);
    S.emit("click:activate", { id: x, value: E, path: g(x), event: T });
    const w = c.value.activate({ id: x, value: E, activated: new Set(m.value), children: o.value, parents: a.value, event: T });
    if (w.size !== m.value.size) m.value = w;
    else {
      for (const D of w) if (!m.value.has(D)) {
        m.value = w;
        return;
      }
      for (const D of m.value) if (!w.has(D)) {
        m.value = w;
        return;
      }
    }
  }, children: o, parents: a, disabled: l, getPath: g } };
  return it(cr, _), _.root;
}, Wd = (e, t, n) => {
  const r = ke(cr, jd), i = Symbol("nested item"), s = N(() => {
    const a = te(rt(e));
    return a !== void 0 ? a : i;
  }), o = { ...r, id: s, open: (a, l) => r.root.open(s.value, a, l), openOnSelect: (a, l) => r.root.openOnSelect(s.value, a, l), isOpen: N(() => r.root.opened.value.has(s.value)), parent: N(() => r.root.parents.value.get(s.value)), activate: (a, l) => r.root.activate(s.value, a, l), isActivated: N(() => r.root.activated.value.has(s.value)), scrollToActive: r.root.scrollToActive, select: (a, l) => r.root.select(s.value, a, l), isSelected: N(() => r.root.selected.value.get(s.value) === "on"), isIndeterminate: N(() => r.root.selected.value.get(s.value) === "indeterminate"), isLeaf: N(() => !r.root.children.value.get(s.value)), isGroupActivator: r.isGroupActivator };
  return ms(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || dt(() => {
      r.root.register(s.value, r.id.value, rt(t), n);
    });
  }), zt(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || r.root.unregister(s.value);
  }), le(s, (a, l) => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || (r.root.unregister(l), dt(() => {
      r.root.register(a, r.id.value, rt(t), n);
    }));
  }), le(() => rt(t), (a) => {
    r.root.updateDisabled(s.value, a);
  }), n && it(cr, o), o;
}, Sy = () => {
  const e = ke(cr, jd);
  it(cr, { ...e, isGroupActivator: true });
};
function Cy() {
  const e = ve(false);
  return Wt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: er(e) };
}
const xy = gr({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return Sy(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), Ay = ne({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: yt, default: "$collapse" }, disabled: Boolean, expandIcon: { type: yt, default: "$expand" }, rawId: [String, Number], prependIcon: yt, appendIcon: yt, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...qe(), ...Rt() }, "VListGroup"), Mc = Pe()({ name: "VListGroup", props: Ay(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: r, open: i, id: s } = Wd(() => e.value, () => e.disabled, true), o = N(() => `v-list-group--id-${String(e.rawId ?? s.value)}`), a = Nd(), { isBooted: l } = Cy(), u = ke(cr), c = B(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function f(g) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = g.target) == null ? void 0 : _a2.tagName) || i(!r.value, g);
  }
  const d = N(() => ({ onClick: f, class: "v-list-group__header", id: o.value })), m = N(() => r.value ? e.collapseIcon : e.expandIcon), b = N(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return ze(() => M(e.tag, { class: Le(["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": r.value }, e.class]), style: He(e.style) }, { default: () => [n.activator && M(mn, { defaults: b.value }, { default: () => [M(xy, null, { default: () => [n.activator({ props: d.value, isOpen: r.value })] })] }), M(zn, { transition: { component: iy }, disabled: !l.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? nr(k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[aa, r.value]]) : r.value && k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: r };
} }), Ly = ne({ opacity: [Number, String], ...qe(), ...Rt() }, "VListItemSubtitle"), Ey = Pe()({ name: "VListItemSubtitle", props: Ly(), setup(e, t) {
  let { slots: n } = t;
  return ze(() => M(e.tag, { class: Le(["v-list-item-subtitle", e.class]), style: He([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), ky = $v("v-list-item-title"), My = ne({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: yt, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: yt, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Hr(), onClickOnce: Hr(), ...hi(), ...qe(), ...vi(), ...yr(), ...bs(), ...vr(), ...Ld(), ...Rt(), ...Gt(), ...yi({ variant: "text" }) }, "VListItem"), Ro = Pe()({ name: "VListItem", directives: { vRipple: ko }, props: My(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const s = Ad(e, n), o = X(), a = N(() => e.value === void 0 ? s.href.value : e.value), { activate: l, isActivated: u, select: c, isOpen: f, isSelected: d, isIndeterminate: m, isGroupActivator: b, root: g, parent: S, openOnSelect: v, scrollToActive: y, id: A } = Wd(a, () => e.disabled, false), _ = Nd(), x = N(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = s.isActive) == null ? void 0 : _a2.value) || (g.activatable.value ? u.value : d.value));
  }), E = B(() => e.link !== false && s.isLink.value), T = N(() => !!_ && (g.selectable.value || g.activatable.value || e.value != null)), w = N(() => !e.disabled && e.link !== false && (e.link || s.isClickable.value || T.value)), D = N(() => _ && _.navigationStrategy.value === "track" && e.index !== void 0 && _.trackingIndex.value === e.index), R = N(() => _ ? E.value ? "link" : T.value ? "option" : "listitem" : void 0), F = N(() => {
    if (T.value) return g.activatable.value ? u.value : g.selectable.value ? d.value : x.value;
  }), P = B(() => e.rounded || e.nav), H = B(() => e.color ?? e.activeColor), Y = B(() => ({ color: x.value ? H.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  le(() => {
    var _a2;
    return (_a2 = s.isActive) == null ? void 0 : _a2.value;
  }, (Z) => {
    Z && z();
  }), le(u, (Z) => {
    var _a2;
    !Z || !y || ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), le(D, (Z) => {
    var _a2;
    Z && ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ms(() => {
    var _a2;
    ((_a2 = s.isActive) == null ? void 0 : _a2.value) && dt(() => z());
  });
  function z() {
    S.value != null && g.open(S.value, true), v(true);
  }
  const { themeClasses: J } = sn(e), { borderClasses: Q } = gi(e), { colorClasses: oe, colorStyles: Oe, variantClasses: we } = Aa(Y), { densityClasses: ae } = pi(e), { dimensionStyles: he } = br(e), { elevationClasses: de } = _s(e), { roundedClasses: Be } = pr(P), Ge = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Ne = B(() => e.ripple !== void 0 && e.ripple && (_ == null ? void 0 : _.filterable) ? { keys: ["Enter"] } : e.ripple), L = N(() => ({ isActive: x.value, select: c, isOpen: f.value, isSelected: d.value, isIndeterminate: m.value, isDisabled: e.disabled }));
  function j(Z) {
    var _a2, _b2, _c2;
    i("click", Z), !["INPUT", "TEXTAREA"].includes((_a2 = Z.target) == null ? void 0 : _a2.tagName) && w.value && ((_c2 = (_b2 = s.navigate).value) == null ? void 0 : _c2.call(_b2, Z), !b && (g.activatable.value ? l(!u.value, Z) : (g.selectable.value || e.value != null && !E.value) && c(!d.value, Z)));
  }
  function G(Z) {
    const ge = Z.target;
    ["INPUT", "TEXTAREA"].includes(ge.tagName) || (Z.key === "Enter" || Z.key === " " && !(_ == null ? void 0 : _.filterable)) && (Z.preventDefault(), Z.stopPropagation(), Z.target.dispatchEvent(new MouseEvent("click", Z)));
  }
  return ze(() => {
    const Z = E.value ? "a" : e.tag, ge = r.title || e.title != null, h = r.subtitle || e.subtitle != null, C = !!(!!(e.appendAvatar || e.appendIcon) || r.append), V = !!(!!(e.prependAvatar || e.prependIcon) || r.prepend);
    return _ == null ? void 0 : _.updateHasPrepend(V), e.activeColor && Qf("active-color", ["color", "base-color"]), nr(M(Z, Re(s.linkProps, { ref: o, id: e.index !== void 0 && _ ? `v-list-item-${_.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !V && (_ == null ? void 0 : _.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": D.value, [`${e.activeClass}`]: e.activeClass && x.value }, J.value, Q.value, oe.value, ae.value, de.value, Ge.value, Be.value, we.value, e.class], style: [{ "--v-list-prepend-gap": pe(e.prependGap) }, Oe.value, he.value, e.style], tabindex: e.tabindex ?? (w.value ? _ ? -2 : 0 : void 0), "aria-selected": F.value, role: R.value, onClick: j, onKeydown: w.value && !E.value && G }), { default: () => {
      var _a2;
      return [xa(w.value || x.value, "v-list-item"), V && k("div", { key: "prepend", class: "v-list-item__prepend" }, [r.prepend ? M(mn, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.prepend) == null ? void 0 : _a3.call(r, L.value)];
      } }) : k(_e, null, [e.prependAvatar && M(kc, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && M(st, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), k("div", { class: "v-list-item__spacer" }, null)]), k("div", { class: "v-list-item__content", "data-no-activator": "" }, [ge && M(ky, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = r.title) == null ? void 0 : _a3.call(r, { title: e.title })) ?? ye(e.title)];
      } }), h && M(Ey, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = r.subtitle) == null ? void 0 : _a3.call(r, { subtitle: e.subtitle })) ?? ye(e.subtitle)];
      } }), (_a2 = r.default) == null ? void 0 : _a2.call(r, L.value)]), C && k("div", { key: "append", class: "v-list-item__append" }, [r.append ? M(mn, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.append) == null ? void 0 : _a3.call(r, L.value)];
      } }) : k(_e, null, [e.appendIcon && M(st, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && M(kc, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), k("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[ko, w.value && Ne.value]]);
  }), { activate: l, isActivated: u, isGroupActivator: b, isSelected: d, list: _, select: c, root: g, id: A, link: s };
} }), Ty = ne({ color: String, inset: Boolean, sticky: Boolean, title: String, ...qe(), ...Rt() }, "VListSubheader"), Py = Pe()({ name: "VListSubheader", props: Ty(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: r, textColorStyles: i } = Qr(() => e.color);
  return ze(() => {
    const s = !!(n.default || e.title);
    return M(e.tag, { class: Le(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, r.value, e.class]), style: He([{ textColorStyles: i }, e.style]) }, { default: () => {
      var _a2;
      return [s && k("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), Ry = ne({ items: Array, returnObject: Boolean }, "VListChildren"), zd = Pe()({ name: "VListChildren", props: Ry(), setup(e, t) {
  let { slots: n } = t;
  return Hd(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((r, i) => {
      var _a3, _b3;
      let { children: s, props: o, type: a, raw: l } = r;
      if (a === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: o })) ?? M(qp, o, null);
      if (a === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: o })) ?? M(Py, o, null);
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
      } : void 0 }, c = Mc.filterProps(o);
      return s ? M(Mc, Re(c, { value: e.returnObject ? l : o == null ? void 0 : o.value, rawId: o == null ? void 0 : o.value }), { activator: (f) => {
        let { props: d } = f;
        const m = Re(o, d, { value: e.returnObject ? l : o.value });
        return n.header ? n.header({ props: m }) : M(Ro, Re(m, { index: i }), u);
      }, default: () => M(zd, { items: s, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...o, index: i } }) : M(Ro, Re(o, { index: i, value: e.returnObject ? l : o.value }), u);
    }));
  };
} }), Iy = ne({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), Oy = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Vy(e, t) {
  const n = ar(t) ? t : Ar(t, e.itemTitle), r = ar(t) ? t : Ar(t, e.itemValue, void 0), i = Ar(t, e.itemChildren), s = e.itemProps === true ? mi(t, ["children"]) : Ar(t, e.itemProps);
  let o = Ar(t, e.itemType, "item");
  Oy.has(o) || (o = "item");
  const a = { title: n, value: r, ...s };
  return { type: o, title: a.title, value: a.value, props: a, children: o === "item" && i ? Gd(e, i) : void 0, raw: t };
}
function Gd(e, t) {
  const n = [];
  for (const r of t) n.push(Vy(e, r));
  return n;
}
function Dy(e) {
  return { items: N(() => Gd(e, e.items)) };
}
const Hy = ne({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: yt, collapseIcon: yt, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Hr(), "onClick:select": Hr(), "onUpdate:opened": Hr(), ..._y({ selectStrategy: "single-leaf", openStrategy: "list" }), ...hi(), ...qe(), ...vi(), ...yr(), ...bs(), ...Iy(), ...vr(), ...Rt(), ...Gt(), ...yi({ variant: "text" }) }, "VList"), Ny = Pe()({ name: "VList", props: Hy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const { items: s } = Dy(e), { themeClasses: o } = sn(e), { backgroundColorClasses: a, backgroundColorStyles: l } = Ca(() => e.bgColor), { borderClasses: u } = gi(e), { densityClasses: c } = pi(e), { dimensionStyles: f } = br(e), { elevationClasses: d } = _s(e), { roundedClasses: m } = pr(e), { children: b, open: g, parents: S, select: v, getPath: y } = wy(e, { items: s, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), A = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), _ = B(() => e.activeColor), x = B(() => e.baseColor), E = B(() => e.color), T = B(() => e.selectable || e.activatable), w = Qt(e, "navigationIndex", -1, (ae) => ae ?? -1), D = ai();
  Hd({ filterable: e.filterable, trackingIndex: w, navigationStrategy: B(() => e.navigationStrategy), uid: D }), le(s, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), _a({ VListGroup: { activeColor: _, baseColor: x, color: E, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: _, baseColor: x, color: E, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const R = ve(false), F = X();
  function P(ae) {
    R.value = true;
  }
  function H(ae) {
    R.value = false;
  }
  function Y(ae) {
    var _a2;
    e.navigationStrategy === "track" ? ~w.value || (w.value = Q("first")) : !R.value && !(ae.relatedTarget && ((_a2 = F.value) == null ? void 0 : _a2.contains(ae.relatedTarget))) && we();
  }
  function z() {
    e.navigationStrategy === "track" && (w.value = -1);
  }
  function J(ae) {
    switch (ae) {
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
  function Q(ae) {
    const he = s.value.length;
    if (he === 0) return -1;
    let de;
    ae === "first" ? de = 0 : ae === "last" ? de = he - 1 : (de = w.value + (ae === "next" ? 1 : -1), de < 0 && (de = he - 1), de >= he && (de = 0));
    const Be = de;
    let Ge = 0;
    for (; Ge < he; ) {
      const Ne = s.value[de];
      if (Ne && Ne.type !== "divider" && Ne.type !== "subheader") return de;
      if (de += ae === "next" || ae === "first" ? 1 : -1, de < 0 && (de = he - 1), de >= he && (de = 0), de === Be) return -1;
      Ge++;
    }
    return -1;
  }
  function oe(ae) {
    const he = ae.target;
    if (!F.value || he.tagName === "INPUT" && ["Home", "End"].includes(ae.key) || he.tagName === "TEXTAREA") return;
    const de = J(ae.key);
    if (de !== null) if (ae.preventDefault(), e.navigationStrategy === "track") {
      const Be = Q(de);
      Be !== -1 && (w.value = Be);
    } else we(de);
  }
  function Oe(ae) {
    R.value = true;
  }
  function we(ae) {
    if (F.value) return Nr(F.value, ae);
  }
  return ze(() => {
    const ae = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), he = T.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return M(e.tag, { ref: F, class: Le(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, a.value, u.value, c.value, d.value, A.value, m.value, e.class]), style: He([{ "--v-list-indent": pe(ae), "--v-list-group-prepend": ae ? "0px" : void 0, "--v-list-prepend-gap": pe(e.prependGap) }, l.value, f.value, e.style]), tabindex: e.disabled ? -1 : 0, role: T.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${D}-${w.value}` : void 0, "aria-multiselectable": he, onFocusin: P, onFocusout: H, onFocus: Y, onBlur: z, onKeydown: oe, onMousedown: Oe }, { default: () => [M(zd, { items: s.value, returnObject: e.returnObject }, r)] });
  }), { open: g, select: v, focus: we, children: b, parents: S, getPath: y, navigationIndex: w };
} });
function Js(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Fy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Tc(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: r } = e, i = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, s = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Js({ x: i, y: s }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: r } = e, i = n === "left" ? 0 : n === "right" ? t.width : n, s = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return Js({ x: i, y: s }, t);
  }
  return Js({ x: t.width / 2, y: t.height / 2 }, t);
}
const Ud = { static: jy, connected: zy }, $y = ne({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ud }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function By(e, t) {
  const n = X({}), r = X();
  Ie && ws(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var _a2, _b2;
    le(() => e.locationStrategy, a), ct(() => {
      window.removeEventListener("resize", i), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", s), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", o), r.value = void 0;
    }), window.addEventListener("resize", i, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", s, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", o, { passive: true }), typeof e.locationStrategy == "function" ? r.value = (_a2 = e.locationStrategy(t, e, n)) == null ? void 0 : _a2.updateLocation : r.value = (_b2 = Ud[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
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
function jy() {
}
function Wy(e, t) {
  const n = ud(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function zy(e, t, n) {
  (Array.isArray(e.target.value) || Uv(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: i, preferredOrigin: s } = pa(() => {
    const v = wo(t.location, e.isRtl.value), y = t.origin === "overlap" ? v : t.origin === "auto" ? Gs(v) : wo(t.origin, e.isRtl.value);
    return v.side === y.side && v.align === Us(y).align ? { preferredAnchor: ql(v), preferredOrigin: ql(y) } : { preferredAnchor: v, preferredOrigin: y };
  }), [o, a, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => N(() => {
    const y = parseFloat(t[v]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = N(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = false, d = -1;
  const m = new ov(4), b = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((y) => {
      y !== d && m.clear(), requestAnimationFrame((A) => {
        d = A;
      });
    }), m.isFull) {
      const y = m.values();
      if (Qn(y.at(-1), y.at(-3)) && !Qn(y.at(-1), y.at(-2))) return;
    }
    const v = S();
    v && m.push(v.flipped);
  });
  let g = new xt({ x: 0, y: 0, width: 0, height: 0 });
  le(e.target, (v, y) => {
    y && !Array.isArray(y) && b.unobserve(y), Array.isArray(v) ? Qn(v, y) || S() : v && b.observe(v);
  }, { immediate: true }), le(e.contentEl, (v, y) => {
    y && b.unobserve(y), v && b.observe(v);
  }, { immediate: true }), ct(() => {
    b.disconnect();
  });
  function S() {
    if (f = false, requestAnimationFrame(() => f = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (g = cd(e.target.value));
    const v = Wy(e.contentEl.value, e.isRtl.value), y = Xi(e.contentEl.value), A = Number(t.viewportMargin);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const _ = y.reduce((H, Y) => {
      const z = dv(Y);
      return H ? new xt({ x: Math.max(H.left, z.left), y: Math.max(H.top, z.top), width: Math.min(H.right, z.right) - Math.max(H.left, z.left), height: Math.min(H.bottom, z.bottom) - Math.max(H.top, z.top) }) : z;
    }, void 0);
    t.stickToTarget ? (_.x += Math.min(A, g.x), _.y += Math.min(A, g.y), _.width = Math.max(_.width - A * 2, g.x + g.width - A), _.height = Math.max(_.height - A * 2, g.y + g.height - A)) : (_.x += A, _.y += A, _.width -= A * 2, _.height -= A * 2);
    let x = { anchor: i.value, origin: s.value };
    function E(H) {
      const Y = new xt(v), z = Tc(H.anchor, g), J = Tc(H.origin, Y);
      let { x: Q, y: oe } = Fy(z, J);
      switch (H.anchor.side) {
        case "top":
          oe -= c.value[0];
          break;
        case "bottom":
          oe += c.value[0];
          break;
        case "left":
          Q -= c.value[0];
          break;
        case "right":
          Q += c.value[0];
          break;
      }
      switch (H.anchor.align) {
        case "top":
          oe -= c.value[1];
          break;
        case "bottom":
          oe += c.value[1];
          break;
        case "left":
          Q -= c.value[1];
          break;
        case "right":
          Q += c.value[1];
          break;
      }
      return Y.x += Q, Y.y += oe, Y.width = Math.min(Y.width, l.value), Y.height = Math.min(Y.height, u.value), { overflows: Jl(Y, _), x: Q, y: oe };
    }
    let T = 0, w = 0;
    const D = { x: 0, y: 0 }, R = { x: false, y: false };
    let F = -1;
    for (; !(F++ > 10); ) {
      const { x: H, y: Y, overflows: z } = E(x);
      T += H, w += Y, v.x += H, v.y += Y;
      {
        const J = Xl(x.anchor), Q = z.x.before || z.x.after, oe = z.y.before || z.y.after;
        let Oe = false;
        if (["x", "y"].forEach((we) => {
          if (we === "x" && Q && !R.x || we === "y" && oe && !R.y) {
            const ae = { anchor: { ...x.anchor }, origin: { ...x.origin } }, he = we === "x" ? J === "y" ? Us : Gs : J === "y" ? Gs : Us;
            ae.anchor = he(ae.anchor), ae.origin = he(ae.origin);
            const { overflows: de } = E(ae);
            (de[we].before <= z[we].before && de[we].after <= z[we].after || de[we].before + de[we].after < (z[we].before + z[we].after) / 2) && (x = ae, Oe = R[we] = true);
          }
        }), Oe) continue;
      }
      z.x.before && (T += z.x.before, v.x += z.x.before), z.x.after && (T -= z.x.after, v.x -= z.x.after), z.y.before && (w += z.y.before, v.y += z.y.before), z.y.after && (w -= z.y.after, v.y -= z.y.after);
      {
        const J = Jl(v, _);
        D.x = _.width - J.x.before - J.x.after, D.y = _.height - J.y.before - J.y.after, T += J.x.before, v.x += J.x.before, w += J.y.before, v.y += J.y.before;
      }
      break;
    }
    const P = Xl(x.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: pe(Qs(w)), left: e.isRtl.value ? void 0 : pe(Qs(T)), right: e.isRtl.value ? pe(Qs(-T)) : void 0, minWidth: pe(P === "y" ? Math.min(o.value, g.width) : o.value), maxWidth: pe(Pc(Ki(D.x, o.value === 1 / 0 ? 0 : o.value, l.value))), maxHeight: pe(Pc(Ki(D.y, a.value === 1 / 0 ? 0 : a.value, u.value))) }), { available: D, contentBox: v, flipped: R };
  }
  return le(() => [i.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => S()), dt(() => {
    const v = S();
    if (!v) return;
    const { available: y, contentBox: A } = v;
    A.height > y.y && requestAnimationFrame(() => {
      S(), requestAnimationFrame(() => {
        S();
      });
    });
  }), { updateLocation: S };
}
function Qs(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Pc(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Io = true;
const es = [];
function Gy(e) {
  !Io || es.length ? (es.push(e), Oo()) : (Io = false, e(), Oo());
}
let Rc = -1;
function Oo() {
  cancelAnimationFrame(Rc), Rc = requestAnimationFrame(() => {
    const e = es.shift();
    e && e(), es.length ? Oo() : Io = true;
  });
}
const Zd = { none: null, close: Ky, block: Yy, reposition: qy }, Uy = ne({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Zd } }, "VOverlay-scroll-strategies");
function Zy(e, t) {
  if (!Ie) return;
  let n;
  gn(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = jr(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = Zd[e.scrollStrategy]) == null ? void 0 : _a2.call(Zd, t, e, n);
    }));
  }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Ky(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Kd(Ia(e.target.value, e.contentEl.value), t);
}
function Yy(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, r = Ia(e.target.value, e.contentEl.value), i = [.../* @__PURE__ */ new Set([...Xi(r, t.contained ? n : void 0), ...Xi(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, o = ((a) => wa(a) && a)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((a, l) => {
    a.style.setProperty("--v-body-scroll-x", pe(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", pe(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", pe(s)), a.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    i.forEach((a, l) => {
      const u = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -u, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function qy(e, t, n) {
  let r = false, i = -1, s = -1;
  function o(a) {
    Gy(() => {
      var _a2, _b2;
      const l = performance.now();
      (_b2 = (_a2 = e.updateLocation).value) == null ? void 0 : _b2.call(_a2, a), r = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      Kd(Ia(e.target.value, e.contentEl.value), (a) => {
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
function Ia(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Kd(e, t) {
  const n = [document, ...Xi(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, { passive: true });
  }), ct(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const Vo = Symbol.for("vuetify:v-menu"), Xy = ne({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Jy(e, t) {
  let n = () => {
  };
  function r(o, a) {
    n == null ? void 0 : n();
    const l = o ? e.openDelay : e.closeDelay, u = Math.max((a == null ? void 0 : a.minDelay) ?? 0, Number(l ?? 0));
    return new Promise((c) => {
      n = lv(u, () => {
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
const Qy = ne({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Xy() }, "VOverlay-activator");
function e0(e, t) {
  let { isActive: n, isTop: r, contentEl: i } = t;
  const s = Ze("useActivator"), o = X();
  let a = false, l = false, u = true;
  const c = N(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = N(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: d, runCloseDelay: m } = Jy(e, (w) => {
    w === (e.openOnHover && a || c.value && l) && !(e.openOnHover && n.value && !r.value) && (n.value !== w && (u = true), n.value = w);
  }), b = X(), g = { onClick: (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (b.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    a = true, o.value = w.currentTarget || w.target, d();
  }, onMouseleave: (w) => {
    a = false, m();
  }, onFocus: (w) => {
    av(w.target, ":focus-visible") !== false && (l = true, w.stopPropagation(), o.value = w.currentTarget || w.target, d());
  }, onBlur: (w) => {
    l = false, w.stopPropagation(), m({ minDelay: 1 });
  } }, S = N(() => {
    const w = {};
    return f.value && (w.onClick = g.onClick), e.openOnHover && (w.onMouseenter = g.onMouseenter, w.onMouseleave = g.onMouseleave), c.value && (w.onFocus = g.onFocus, w.onBlur = g.onBlur), w;
  }), v = N(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      a = true, d();
    }, w.onMouseleave = () => {
      a = false, m();
    }), c.value && (w.onFocusin = (D) => {
      D.target.matches(":focus-visible") && (l = true, d());
    }, w.onFocusout = () => {
      l = false, m({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const D = ke(Vo, null);
      w.onClick = () => {
        n.value = false, D == null ? void 0 : D.closeParents();
      };
    }
    return w;
  }), y = N(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (a = true, u = false, d());
    }, w.onMouseleave = () => {
      a = false, m();
    }), w;
  });
  le(r, (w) => {
    var _a2;
    w && (e.openOnHover && !a && (!c.value || !l) || c.value && !l && (!e.openOnHover || !a)) && !((_a2 = i.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), le(n, (w) => {
    w || setTimeout(() => {
      b.value = void 0;
    });
  }, { flush: "post" });
  const A = _o();
  gn(() => {
    A.value && dt(() => {
      o.value = A.el;
    });
  });
  const _ = _o(), x = N(() => e.target === "cursor" && b.value ? b.value : _.value ? _.el : Yd(e.target, s) || o.value), E = N(() => Array.isArray(x.value) ? void 0 : x.value);
  let T;
  return le(() => !!e.activator, (w) => {
    w && Ie ? (T = jr(), T.run(() => {
      t0(e, s, { activatorEl: o, activatorEvents: S });
    })) : T && T.stop();
  }, { flush: "post", immediate: true }), ct(() => {
    T == null ? void 0 : T.stop();
  }), { activatorEl: o, activatorRef: A, target: x, targetEl: E, targetRef: _, activatorEvents: S, contentEvents: v, scrimEvents: y };
}
function t0(e, t, n) {
  let { activatorEl: r, activatorEvents: i } = n;
  le(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = a(u);
      c && o(c);
    }
    l && dt(() => s());
  }, { immediate: true }), le(() => e.activatorProps, () => {
    s();
  }), ct(() => {
    o();
  });
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && mv(l, Re(i.value, u));
  }
  function o() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && hv(l, Re(i.value, u));
  }
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Yd(l, t);
    return r.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, r.value;
  }
}
function Yd(e, t) {
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
const n0 = ne({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Di = /* @__PURE__ */ new Map();
let Ic = 0;
function Oc(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Di.values()).filter((u) => {
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
  const s = Jn(r).filter((u) => u.tabIndex >= 0);
  if (!s.length) return;
  const o = document.activeElement;
  if (s.length === 1 && s[0].classList.contains("v-list") && s[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const a = s[0], l = s[s.length - 1];
  e.shiftKey && (o === a || a.classList.contains("v-list") && a.contains(o)) && (e.preventDefault(), l.focus()), !e.shiftKey && (o === l || l.classList.contains("v-list") && l.contains(o)) && (e.preventDefault(), a.focus());
}
function r0(e, t) {
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
    const m = d.relatedTarget, b = d.target;
    document.removeEventListener("pointerdown", l), document.removeEventListener("keydown", c), await dt(), n.value && !o && m !== b && i.value && rt(r) && ![document, i.value].includes(b) && !i.value.contains(b) && ((_a2 = Jn(i.value)[0]) == null ? void 0 : _a2.focus());
  }
  function c(d) {
    if (d.key === "Tab" && (document.removeEventListener("keydown", c), n.value && i.value && d.target && !i.value.contains(d.target))) {
      const m = Jn(document.documentElement);
      if (d.shiftKey && d.target === m.at(0) || !d.shiftKey && d.target === m.at(-1)) {
        const b = Jn(i.value);
        b.length > 0 && (d.preventDefault(), b[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Ie && (le(() => e.retainFocus, (d) => {
    d ? Di.set(s, { isActive: n, contentEl: i }) : Di.delete(s);
  }, { immediate: true }), le(f, (d) => {
    d ? (document.addEventListener("pointerdown", l), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, { immediate: true }), Ic++ < 1 && document.addEventListener("keydown", Oc)), ct(() => {
    Di.delete(s), clearTimeout(a), document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Ic < 1 && document.removeEventListener("keydown", Oc);
  });
}
function i0() {
  if (!Ie) return ve(false);
  const { ssr: e } = ey();
  if (e) {
    const t = ve(false);
    return Wt(() => {
      t.value = true;
    }), t;
  } else return ve(true);
}
const s0 = ne({ eager: Boolean }, "lazy");
function o0(e, t) {
  const n = ve(false), r = B(() => n.value || e.eager || t.value);
  le(t, () => n.value = true);
  function i() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: r, onAfterLeave: i };
}
function Oa() {
  const t = Ze("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Vc = Symbol.for("vuetify:stack"), Lr = Ue([]);
function a0(e, t, n) {
  const r = Ze("useStack"), i = !n, s = ke(Vc, void 0), o = Ue({ activeChildren: /* @__PURE__ */ new Set() });
  it(Vc, o);
  const a = ve(Number(rt(t)));
  ws(e, () => {
    var _a2;
    const c = (_a2 = Lr.at(-1)) == null ? void 0 : _a2[1];
    a.value = c ? c + 10 : Number(rt(t)), i && Lr.push([r.uid, a.value]), s == null ? void 0 : s.activeChildren.add(r.uid), ct(() => {
      if (i) {
        const f = te(Lr).findIndex((d) => d[0] === r.uid);
        Lr.splice(f, 1);
      }
      s == null ? void 0 : s.activeChildren.delete(r.uid);
    });
  });
  const l = ve(true);
  return i && gn(() => {
    var _a2;
    const c = ((_a2 = Lr.at(-1)) == null ? void 0 : _a2[0]) === r.uid;
    setTimeout(() => l.value = c);
  }), { globalTop: er(l), localTop: B(() => !o.activeChildren.size), stackStyles: B(() => ({ zIndex: a.value })) };
}
function l0(e) {
  return { teleportTarget: N(() => {
    const n = e();
    if (n === true || !Ie) return;
    const r = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (r == null) return;
    let i = [...r.children].find((s) => s.matches(".v-overlay-container"));
    return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
  }) };
}
function c0() {
  return true;
}
function qd(e, t, n) {
  if (!e || Xd(e, n) === false) return false;
  const r = vd(t);
  if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && r.host === e.target) return false;
  const i = (typeof n.value == "object" && n.value.include || (() => []))();
  return i.push(t), !i.some((s) => s == null ? void 0 : s.contains(e.target));
}
function Xd(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || c0)(e);
}
function u0(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && qd(e, t, n) && setTimeout(() => {
    Xd(e, n) && r && r(e);
  }, 0);
}
function Dc(e, t) {
  const n = vd(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Hc = { mounted(e, t) {
  const n = (i) => u0(i, e, t), r = (i) => {
    e._clickOutside.lastMousedownWasOutside = qd(i, e, t);
  };
  Dc(e, (i) => {
    i.addEventListener("click", n, true), i.addEventListener("mousedown", r, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: r };
}, beforeUnmount(e, t) {
  e._clickOutside && (Dc(e, (n) => {
    var _a2;
    if (!n || !((_a2 = e._clickOutside) == null ? void 0 : _a2[t.instance.$.uid])) return;
    const { onClick: r, onMousedown: i } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", r, true), n.removeEventListener("mousedown", i, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function f0(e) {
  const { modelValue: t, color: n, ...r } = e;
  return M(or, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && k("div", Re({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, r), null)] });
}
const Va = ne({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...Qy(), ...qe(), ...yr(), ...s0(), ...$y(), ...Uy(), ...n0(), ...Gt(), ...Vd() }, "VOverlay"), ts = Pe()({ name: "VOverlay", directives: { vClickOutside: Hc }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...mi(Va(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: r, emit: i } = t;
  const s = Ze("VOverlay"), o = X(), a = X(), l = X(), u = Qt(e, "modelValue"), c = N({ get: () => u.value, set: (L) => {
    L && e.disabled || (u.value = L);
  } }), { themeClasses: f } = sn(e), { rtlClasses: d, isRtl: m } = bi(), { hasContent: b, onAfterLeave: g } = o0(e, c), S = Ca(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: v, localTop: y, stackStyles: A } = a0(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: _, activatorRef: x, target: E, targetEl: T, targetRef: w, activatorEvents: D, contentEvents: R, scrimEvents: F } = e0(e, { isActive: c, isTop: y, contentEl: l }), { teleportTarget: P } = l0(() => {
    var _a2, _b2, _c2;
    const L = e.attach || e.contained;
    if (L) return L;
    const j = ((_a2 = _ == null ? void 0 : _.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = s.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return j instanceof ShadowRoot ? j : false;
  }), { dimensionStyles: H } = br(e), Y = i0(), { scopeId: z } = Oa();
  le(() => e.disabled, (L) => {
    L && (c.value = false);
  });
  const { contentStyles: J, updateLocation: Q } = By(e, { isRtl: m, contentEl: l, target: E, isActive: c });
  Zy(e, { root: o, contentEl: l, targetEl: T, target: E, isActive: c, updateLocation: Q });
  function oe(L) {
    i("click:outside", L), e.persistent ? Be() : c.value = false;
  }
  function Oe(L) {
    return c.value && y.value && (!e.scrim || L.target === a.value || L instanceof MouseEvent && L.shadowTarget === a.value);
  }
  r0(e, { isActive: c, localTop: y, contentEl: l }), Ie && le(c, (L) => {
    L ? window.addEventListener("keydown", we) : window.removeEventListener("keydown", we);
  }, { immediate: true }), zt(() => {
    Ie && window.removeEventListener("keydown", we);
  });
  function we(L) {
    var _a2, _b2, _c2;
    L.key === "Escape" && v.value && (((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) || i("keydown", L), e.persistent ? Be() : (c.value = false, ((_b2 = l.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = _.value) == null ? void 0 : _c2.focus())));
  }
  function ae(L) {
    L.key === "Escape" && !v.value || i("keydown", L);
  }
  const he = Np();
  ws(() => e.closeOnBack, () => {
    Fp(he, (L) => {
      v.value && c.value ? (L(false), e.persistent ? Be() : c.value = false) : L();
    });
  });
  const de = X();
  le(() => c.value && (e.absolute || e.contained) && P.value == null, (L) => {
    if (L) {
      const j = zv(o.value);
      j && j !== document.scrollingElement && (de.value = j.scrollTop);
    }
  });
  function Be() {
    e.noClickAnimation || l.value && An(l.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Co });
  }
  function Ge() {
    i("afterEnter");
  }
  function Ne() {
    g(), i("afterLeave");
  }
  return ze(() => {
    var _a2;
    return k(_e, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: w, props: Re({ ref: x }, D.value, e.activatorProps) }), Y.value && b.value && M(ch, { disabled: !P.value, to: P.value }, { default: () => [k("div", Re({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, f.value, d.value, e.class], style: [A.value, { "--v-overlay-opacity": e.opacity, top: pe(de.value) }, e.style], ref: o, onKeydown: ae }, z, r), [M(f0, Re({ color: S, modelValue: c.value && !!e.scrim, ref: a }, F.value), null), M(zn, { appear: true, persisted: true, transition: e.transition, target: E.value, onAfterEnter: Ge, onAfterLeave: Ne }, { default: () => {
      var _a3;
      return [nr(k("div", Re({ ref: l, class: ["v-overlay__content", e.contentClass], style: [H.value, J.value] }, R.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[aa, c.value], [Hc, { handler: oe, closeConditional: Oe, include: () => [_.value] }]])];
    } })])] })]);
  }), { activatorEl: _, scrimEl: a, target: E, animateClick: Be, contentEl: l, rootEl: o, globalTop: v, localTop: y, updateLocation: Q };
} }), d0 = ne({ id: String, submenu: Boolean, ...mi(Va({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: ry } }), ["absolute"]) }, "VMenu"), m0 = Pe()({ name: "VMenu", props: d0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Qt(e, "modelValue"), { scopeId: i } = Oa(), { isRtl: s } = bi(), o = ai(), a = B(() => e.id || `v-menu-${o}`), l = X(), u = ke(Vo, null), c = ve(/* @__PURE__ */ new Set());
  it(Vo, { register() {
    c.value.add(o);
  }, unregister() {
    c.value.delete(o);
  }, closeParents(g) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (g == null || ((_a2 = l.value) == null ? void 0 : _a2.contentEl) && !cv(g, l.value.contentEl)) && (r.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), zt(() => u == null ? void 0 : u.unregister()), ef(() => r.value = false), le(r, (g) => {
    g ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function f(g) {
    u == null ? void 0 : u.closeParents(g);
  }
  function d(g) {
    var _a2, _b2, _c2, _d2, _e2;
    if (!e.disabled) if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
      if (g.key === "Enter" && (g.target instanceof HTMLTextAreaElement || g.target instanceof HTMLInputElement && g.target.closest("form"))) return;
      g.key === "Enter" && g.preventDefault(), !ad(Jn((_a2 = l.value) == null ? void 0 : _a2.contentEl, false), g.shiftKey ? "prev" : "next", (v) => v.tabIndex >= 0) && !e.retainFocus && (r.value = false, (_c2 = (_b2 = l.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && g.key === (s.value ? "ArrowRight" : "ArrowLeft") && (r.value = false, (_e2 = (_d2 = l.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e2.focus());
  }
  function m(g) {
    var _a2;
    if (e.disabled) return;
    const S = (_a2 = l.value) == null ? void 0 : _a2.contentEl;
    S && r.value ? g.key === "ArrowDown" ? (g.preventDefault(), g.stopImmediatePropagation(), Nr(S, "next")) : g.key === "ArrowUp" ? (g.preventDefault(), g.stopImmediatePropagation(), Nr(S, "prev")) : e.submenu && (g.key === (s.value ? "ArrowRight" : "ArrowLeft") ? r.value = false : g.key === (s.value ? "ArrowLeft" : "ArrowRight") && (g.preventDefault(), Nr(S, "first"))) : (e.submenu ? g.key === (s.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(g.key)) && (r.value = true, g.preventDefault(), setTimeout(() => setTimeout(() => m(g))));
  }
  const b = N(() => Re({ "aria-haspopup": "menu", "aria-expanded": String(r.value), "aria-controls": a.value, "aria-owns": a.value, onKeydown: m }, e.activatorProps));
  return ze(() => {
    const g = ts.filterProps(e);
    return M(ts, Re({ ref: l, id: a.value, class: ["v-menu", e.class], style: e.style }, g, { modelValue: r.value, "onUpdate:modelValue": (S) => r.value = S, absolute: true, activatorProps: b.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": f, onKeydown: d }, i), { activator: n.activator, default: function() {
      for (var S = arguments.length, v = new Array(S), y = 0; y < S; y++) v[y] = arguments[y];
      return M(mn, { root: "VMenu" }, { default: () => {
        var _a2;
        return [(_a2 = n.default) == null ? void 0 : _a2.call(n, ...v)];
      } });
    } });
  }), Dd({ id: a, \u03A8openChildren: c }, l);
} }), At = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t) n[r] = i;
  return n;
}, h0 = Ye({ __name: "AppBackground", setup(e) {
  const t = ca("AppBackground"), n = X(null), r = X(null), i = ig(), s = hr(), o = ag(i.gridInfo, s.worldOffsetDevicePx), a = lg(), l = cg(o), u = hg(i.post);
  Qg(i);
  function c(_) {
    return { ..._, edge: { ..._.edge } };
  }
  function f(_) {
    return _.map(c);
  }
  const d = rg({ onSetZones: (_) => i.post({ type: "set_zones", zones: f(_) }), onAddZone: (_) => i.post({ type: "add_zone", zone: c(_) }), onUpdateZone: (_) => i.post({ type: "update_zone", zone: c(_) }), onRemoveZone: (_) => i.post({ type: "remove_zone", id: _ }), onClearZones: () => i.post({ type: "clear_zones" }) }), m = X(false), b = X(false), g = X({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: S } = jf();
  le(S, (_) => {
    i.post({ type: "set_theme", theme: _ });
  });
  function v(_) {
    const x = Date.now(), E = g.value;
    return { id: crypto.randomUUID(), x1: _.x1, y1: _.y1, x2: _.x2, y2: _.y2, mode: E.mode, edge: { ...E.edge }, enabled: true, createdAt: x, updatedAt: x };
  }
  l.register("zone", { isEnabled: () => m.value, priority: 1, snapMajor: () => b.value, onCommit(_) {
    d.addZone(v(_));
  } });
  function y(_) {
    if (l.anyToolEnabled() || o.isInteractiveTarget(_.target)) return;
    const x = o.makeSnapshot();
    if (!x) return;
    const E = Df(_.clientX, _.clientY, x), T = $1(E, x);
    t.debug("Click \u2192", _.clientX, _.clientY, "\u2192 cell", T.cx, T.cy), i.post({ type: "toggle_cell", cx: T.cx, cy: T.cy, scrollCanvasPx: x.offsetY });
  }
  let A = null;
  return Wt(() => {
    const _ = n.value, x = r.value;
    if (!_ || !x) return;
    const { offscreen: E, gridPitch: T } = u.initialize(_, x);
    i.init(E, T, S.value), t.debug("Worker spawned, gridPitch", T.toFixed(2)), i.on("ready", (w) => {
      t.info(`${w.backend.toUpperCase()} renderer active`), i.post({ type: "set_theme", theme: S.value }), i.post({ type: "set_zones", zones: f(d.zones.value) });
      const D = s.worldOffsetDevicePx.value;
      i.post({ type: "camera", x: D.x, y: D.y });
    }), i.on("zones_state", (w) => d.syncFromWorker(w.zones)), i.on("zones_error", (w) => t.error("Zone update rejected:", w.message)), i.on("first_frame_painted", () => u.revealCanvas()), i.on("error", (w) => {
      w.phase === "gpu-init" ? t.debug(`GPU unavailable (${w.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${w.phase}]:`, w.message);
    }), vg(i), document.addEventListener("click", y), A = l.attachListeners(), a.start(() => i.post({ type: "frame" }));
  }), On(() => {
    a.stop(), u.teardown(), document.removeEventListener("click", y), A == null ? void 0 : A(), i.terminate();
  }), (_, x) => (ce(), me(_e, null, [k("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [k("canvas", { ref_key: "canvasRef", ref: r, class: "app-bg" }, null, 512)], 512), re(l).previewStyle.value ? (ce(), me("div", { key: 0, class: "zone-preview-overlay", style: He(re(l).previewStyle.value) }, null, 4)) : ir("", true), ir("", true)], 64));
} }), g0 = At(h0, [["__scopeId", "data-v-7fbe32f4"]]), Do = /* @__PURE__ */ new Set();
function v0(e) {
  return Do.add(e), () => {
    Do.delete(e);
  };
}
function p0(e, t) {
  const n = e.getBoundingClientRect();
  return n.width <= 0 || n.height <= 0 ? null : { cx: (n.left + n.width / 2) * t, cy: (n.top + n.height / 2) * t, halfW: n.width / 2 * t, halfH: n.height / 2 * t, cornerR: 0 };
}
let Ti = null;
function y0() {
  if (Ti !== null) return Ti;
  if (typeof document > "u") return 1;
  const e = document.createElement("div");
  e.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(e);
  const t = e.getBoundingClientRect().width;
  return e.remove(), Ti = t > 0 ? 100 / t : 1, Ti;
}
function b0() {
  const e = y0(), t = [];
  for (const n of Do) {
    const r = n(e);
    r && t.push(r);
  }
  return t;
}
function Nc(e, t = {}) {
  const n = typeof e == "function" ? e : () => e.value, r = t.enabled ?? (() => true), i = t.margin ?? 0;
  return v0((s) => {
    if (!r()) return null;
    const o = n();
    if (!o) return null;
    const a = p0(o, s);
    return a ? (i !== 0 && (a.halfW = Math.max(0, a.halfW + i), a.halfH = Math.max(0, a.halfH + i)), a) : null;
  });
}
const _0 = ne({ id: String, interactive: Boolean, text: String, ...mi(Va({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Fr = Pe()({ name: "VTooltip", props: _0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Qt(e, "modelValue"), { scopeId: i } = Oa(), s = ai(), o = B(() => e.id || `v-tooltip-${s}`), a = X(), l = N(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = N(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = N(() => Re({ "aria-describedby": o.value }, e.activatorProps));
  return ze(() => {
    const d = ts.filterProps(e);
    return M(ts, Re({ ref: a, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: o.value }, d, { modelValue: r.value, "onUpdate:modelValue": (m) => r.value = m, transition: c.value, absolute: true, location: l.value, origin: u.value, role: "tooltip", activatorProps: f.value, _disableGlobalStack: true }, i), { activator: n.activator, default: function() {
      var _a2;
      for (var m = arguments.length, b = new Array(m), g = 0; g < m; g++) b[g] = arguments[g];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...b)) ?? e.text;
    } });
  }), Dd({}, a);
} }), w0 = Ye({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = jf();
  return (n, r) => (ce(), rr(hp, { modelValue: re(t), "onUpdate:modelValue": r[0] || (r[0] = (i) => Ve(t) ? t.value = i : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: $e(() => [M(Vi, { value: "light", icon: re(Hl), size: "small" }, { default: $e(() => [M(st, { icon: re(Hl) }, null, 8, ["icon"]), M(Fr, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }, 8, ["icon"]), M(Vi, { value: "system", icon: re(Vl), size: "small" }, { default: $e(() => [M(st, { icon: re(Vl) }, null, 8, ["icon"]), M(Fr, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }, 8, ["icon"]), M(Vi, { value: "dark", icon: re(Dl), size: "small" }, { default: $e(() => [M(st, { icon: re(Dl) }, null, 8, ["icon"]), M(Fr, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 }, 8, ["icon"])]), _: 1 }, 8, ["modelValue"]));
} }), S0 = At(w0, [["__scopeId", "data-v-1de18a37"]]), C0 = { class: "chrome" }, x0 = { class: "chrome__bar" }, A0 = Ye({ __name: "AppChrome", setup(e) {
  const t = X(false), n = X(null);
  On(Nc(n, { margin: 8 }));
  const r = X(null);
  return On(Nc(() => {
    var _a2;
    return ((_a2 = r.value) == null ? void 0 : _a2.$el) ?? null;
  }, { margin: 8 })), (i, s) => {
    const o = rf("router-link");
    return ce(), me("div", C0, [k("div", x0, [M(o, { ref_key: "markRef", ref: r, to: "/", class: "chrome__mark glass-chip", "aria-label": "Taylor Hale \u2014 home" }, { default: $e(() => [...s[2] || (s[2] = [qn(" Taylor Hale ", -1)])]), _: 1 }, 512), k("div", { ref_key: "controlsRef", ref: n, class: "chrome__controls" }, [M(S0), M(m0, { modelValue: t.value, "onUpdate:modelValue": s[1] || (s[1] = (a) => t.value = a), location: "bottom end", offset: "10" }, { activator: $e(({ props: a }) => [M(Vi, Re(a, { icon: re(Cg), variant: "text", size: "small", class: "chrome__menu-btn", "aria-label": "All destinations" }), null, 16, ["icon"])]), default: $e(() => [M(Ny, { class: "chrome-menu-list", density: "compact" }, { default: $e(() => [(ce(true), me(_e, null, ht(re(mr), (a) => (ce(), rr(Ro, { key: a.id, to: a.route, title: a.label, onClick: s[0] || (s[0] = (l) => t.value = false) }, null, 8, ["to", "title"]))), 128))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 512)])]);
  };
} }), L0 = At(A0, [["__scopeId", "data-v-570bec19"]]);
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const Bn = typeof document < "u";
function Jd(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function E0(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Jd(e.default);
}
const Ce = Object.assign;
function eo(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = Pt(i) ? i.map(e) : e(i);
  }
  return n;
}
const $r = () => {
}, Pt = Array.isArray;
function Fc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const Qd = /#/g, k0 = /&/g, M0 = /\//g, T0 = /=/g, P0 = /\?/g, em = /\+/g, R0 = /%5B/g, I0 = /%5D/g, tm = /%5E/g, O0 = /%60/g, nm = /%7B/g, V0 = /%7C/g, rm = /%7D/g, D0 = /%20/g;
function Da(e) {
  return e == null ? "" : encodeURI("" + e).replace(V0, "|").replace(R0, "[").replace(I0, "]");
}
function H0(e) {
  return Da(e).replace(nm, "{").replace(rm, "}").replace(tm, "^");
}
function Ho(e) {
  return Da(e).replace(em, "%2B").replace(D0, "+").replace(Qd, "%23").replace(k0, "%26").replace(O0, "`").replace(nm, "{").replace(rm, "}").replace(tm, "^");
}
function N0(e) {
  return Ho(e).replace(T0, "%3D");
}
function F0(e) {
  return Da(e).replace(Qd, "%23").replace(P0, "%3F");
}
function $0(e) {
  return F0(e).replace(M0, "%2F");
}
function ni(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const B0 = /\/$/, j0 = (e) => e.replace(B0, "");
function to(e, t, n = "/") {
  let r, i = {}, s = "", o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), s = t.slice(l, a > 0 ? a : t.length), i = e(s.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = U0(r ?? t, n), { fullPath: r + s + o, path: r, query: i, hash: ni(o) };
}
function W0(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function $c(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function z0(e, t, n) {
  const r = t.matched.length - 1, i = n.matched.length - 1;
  return r > -1 && r === i && ur(t.matched[r], n.matched[i]) && im(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ur(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function im(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!G0(e[n], t[n])) return false;
  return true;
}
function G0(e, t) {
  return Pt(e) ? Bc(e, t) : Pt(t) ? Bc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Bc(e, t) {
  return Pt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function U0(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let s = n.length - 1, o, a;
  for (o = 0; o < r.length; o++) if (a = r[o], a !== ".") if (a === "..") s > 1 && s--;
  else break;
  return n.slice(0, s).join("/") + "/" + r.slice(o).join("/");
}
const an = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let No = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), no = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Z0(e) {
  if (!e) if (Bn) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), j0(e);
}
const K0 = /^[^#]+#/;
function Y0(e, t) {
  return e.replace(K0, "#") + t;
}
function q0(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const As = () => ({ left: window.scrollX, top: window.scrollY });
function X0(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = q0(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function jc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Fo = /* @__PURE__ */ new Map();
function J0(e, t) {
  Fo.set(e, t);
}
function Q0(e) {
  const t = Fo.get(e);
  return Fo.delete(e), t;
}
function eb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function sm(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Fe = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const om = Symbol("");
Fe.MATCHER_NOT_FOUND + "", Fe.NAVIGATION_GUARD_REDIRECT + "", Fe.NAVIGATION_ABORTED + "", Fe.NAVIGATION_CANCELLED + "", Fe.NAVIGATION_DUPLICATED + "";
function fr(e, t) {
  return Ce(new Error(), { type: e, [om]: true }, t);
}
function Kt(e, t) {
  return e instanceof Error && om in e && (t == null || !!(e.type & t));
}
const tb = ["params", "query", "hash"];
function nb(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of tb) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function rb(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(em, " "), s = i.indexOf("="), o = ni(s < 0 ? i : i.slice(0, s)), a = s < 0 ? null : ni(i.slice(s + 1));
    if (o in t) {
      let l = t[o];
      Pt(l) || (l = t[o] = [l]), l.push(a);
    } else t[o] = a;
  }
  return t;
}
function Wc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = N0(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pt(r) ? r.map((i) => i && Ho(i)) : [r && Ho(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function ib(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Pt(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return t;
}
const sb = Symbol(""), zc = Symbol(""), Ls = Symbol(""), Ha = Symbol(""), $o = Symbol("");
function Er() {
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
function fn(e, t, n, r, i, s = (o) => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const u = (d) => {
      d === false ? l(fr(Fe.NAVIGATION_ABORTED, { from: n, to: t })) : d instanceof Error ? l(d) : eb(d) ? l(fr(Fe.NAVIGATION_GUARD_REDIRECT, { from: t, to: d })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d), a());
    }, c = s(() => e.call(r && r.instances[i], t, n, u));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
  });
}
function ro(e, t, n, r, i = (s) => s()) {
  const s = [];
  for (const o of e) for (const a in o.components) {
    let l = o.components[a];
    if (!(t !== "beforeRouteEnter" && !o.instances[a])) if (Jd(l)) {
      const u = (l.__vccOpts || l)[t];
      u && s.push(fn(u, n, r, o, a, i));
    } else {
      let u = l();
      s.push(() => u.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
        const f = E0(c) ? c.default : c;
        o.mods[a] = c, o.components[a] = f;
        const d = (f.__vccOpts || f)[t];
        return d && fn(d, n, r, o, a, i)();
      }));
    }
  }
  return s;
}
function ob(e, t) {
  const n = [], r = [], i = [], s = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < s; o++) {
    const a = t.matched[o];
    a && (e.matched.find((u) => ur(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((u) => ur(u, l)) || i.push(l));
  }
  return [n, r, i];
}
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let ab = () => location.protocol + "//" + location.host;
function am(e, t) {
  const { pathname: n, search: r, hash: i } = t, s = e.indexOf("#");
  if (s > -1) {
    let o = i.includes(e.slice(s)) ? e.slice(s).length : 1, a = i.slice(o);
    return a[0] !== "/" && (a = "/" + a), $c(a, "");
  }
  return $c(n, e) + r + i;
}
function lb(e, t, n, r) {
  let i = [], s = [], o = null;
  const a = ({ state: d }) => {
    const m = am(e, location), b = n.value, g = t.value;
    let S = 0;
    if (d) {
      if (n.value = m, t.value = d, o && o === b) {
        o = null;
        return;
      }
      S = g ? d.position - g.position : 0;
    } else r(m);
    i.forEach((v) => {
      v(n.value, b, { delta: S, type: No.pop, direction: S ? S > 0 ? no.forward : no.back : no.unknown });
    });
  };
  function l() {
    o = n.value;
  }
  function u(d) {
    i.push(d);
    const m = () => {
      const b = i.indexOf(d);
      b > -1 && i.splice(b, 1);
    };
    return s.push(m), m;
  }
  function c() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(Ce({}, d.state, { scroll: As() }), "");
    }
  }
  function f() {
    for (const d of s) d();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), { pauseListeners: l, listen: u, destroy: f };
}
function Gc(e, t, n, r = false, i = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: i ? As() : null };
}
function cb(e) {
  const { history: t, location: n } = window, r = { value: am(e, n) }, i = { value: t.state };
  i.value || s(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function s(l, u, c) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : ab() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), i.value = u;
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](d);
    }
  }
  function o(l, u) {
    s(l, Ce({}, t.state, Gc(i.value.back, l, i.value.forward, true), u, { position: i.value.position }), true), r.value = l;
  }
  function a(l, u) {
    const c = Ce({}, i.value, t.state, { forward: l, scroll: As() });
    s(c.current, c, true), s(l, Ce({}, Gc(r.value, l, null), { position: c.position + 1 }, u), false), r.value = l;
  }
  return { location: r, state: i, push: a, replace: o };
}
function ub(e) {
  e = Z0(e);
  const t = cb(e), n = lb(e, t.state, t.location, t.replace);
  function r(s, o = true) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = Ce({ location: "", base: e, go: r, createHref: Y0.bind(null, e) }, t, n);
  return Object.defineProperty(i, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(i, "state", { enumerable: true, get: () => t.state.value }), i;
}
let En = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var We = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(We || {});
const fb = { type: En.Static, value: "" }, db = /[a-zA-Z0-9_]/;
function mb(e) {
  if (!e) return [[]];
  if (e === "/") return [[fb]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
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
        l === "(" ? n = We.ParamRegExp : db.test(l) ? d() : (f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--);
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
const Uc = "[^/]+?", hb = { sensitive: false, strict: false, start: true, end: true };
var at = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(at || {});
const gb = /[.+*?^${}()[\]/\\]/g;
function vb(e, t) {
  const n = Ce({}, hb, t), r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [at.Root];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let m = at.Segment + (n.sensitive ? at.BonusCaseSensitive : 0);
      if (d.type === En.Static) f || (i += "/"), i += d.value.replace(gb, "\\$&"), m += at.Static;
      else if (d.type === En.Param) {
        const { value: b, repeatable: g, optional: S, regexp: v } = d;
        s.push({ name: b, repeatable: g, optional: S });
        const y = v || Uc;
        if (y !== Uc) {
          m += at.BonusCustomRegExp;
          try {
            `${y}`;
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${y}): ` + _.message);
          }
        }
        let A = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (A = S && u.length < 2 ? `(?:/${A})` : "/" + A), S && (A += "?"), i += A, m += at.Dynamic, S && (m += at.BonusOptional), g && (m += at.BonusRepeatable), y === ".*" && (m += at.BonusWildcard);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += at.BonusStrict;
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(o), f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const m = c[d] || "", b = s[d - 1];
      f[b.name] = m && b.repeatable ? m.split("/") : m;
    }
    return f;
  }
  function l(u) {
    let c = "", f = false;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), f = false;
      for (const m of d) if (m.type === En.Static) c += m.value;
      else if (m.type === En.Param) {
        const { value: b, repeatable: g, optional: S } = m, v = b in u ? u[b] : "";
        if (Pt(v) && !g) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
        const y = Pt(v) ? v.join("/") : v;
        if (!y) if (S) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
        else throw new Error(`Missing required param "${b}"`);
        c += y;
      }
    }
    return c || "/";
  }
  return { re: o, score: r, keys: s, parse: a, stringify: l };
}
function pb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === at.Static + at.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === at.Static + at.Segment ? 1 : -1 : 0;
}
function lm(e, t) {
  let n = 0;
  const r = e.score, i = t.score;
  for (; n < r.length && n < i.length; ) {
    const s = pb(r[n], i[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Zc(r)) return 1;
    if (Zc(i)) return -1;
  }
  return i.length - r.length;
}
function Zc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const yb = { strict: false, end: true, sensitive: false };
function bb(e, t, n) {
  const r = vb(mb(e.path), n), i = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function _b(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Fc(yb, t);
  function i(f) {
    return r.get(f);
  }
  function s(f, d, m) {
    const b = !m, g = Yc(f);
    g.aliasOf = m && m.record;
    const S = Fc(t, f), v = [g];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of _) v.push(Yc(Ce({}, g, { components: m ? m.record.components : g.components, path: x, aliasOf: m ? m.record : g })));
    }
    let y, A;
    for (const _ of v) {
      const { path: x } = _;
      if (d && x[0] !== "/") {
        const E = d.record.path, T = E[E.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (x && T + x);
      }
      if (y = bb(_, d, S), m ? m.alias.push(y) : (A = A || y, A !== y && A.alias.push(y), b && f.name && !qc(y) && o(f.name)), cm(y) && l(y), g.children) {
        const E = g.children;
        for (let T = 0; T < E.length; T++) s(E[T], y, m && m.children[T]);
      }
      m = m || y;
    }
    return A ? () => {
      o(A);
    } : $r;
  }
  function o(f) {
    if (sm(f)) {
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
    const d = Cb(f, n);
    n.splice(d, 0, f), f.record.name && !qc(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let m, b = {}, g, S;
    if ("name" in f && f.name) {
      if (m = r.get(f.name), !m) throw fr(Fe.MATCHER_NOT_FOUND, { location: f });
      S = m.record.name, b = Ce(Kc(d.params, m.keys.filter((A) => !A.optional).concat(m.parent ? m.parent.keys.filter((A) => A.optional) : []).map((A) => A.name)), f.params && Kc(f.params, m.keys.map((A) => A.name))), g = m.stringify(b);
    } else if (f.path != null) g = f.path, m = n.find((A) => A.re.test(g)), m && (b = m.parse(g), S = m.record.name);
    else {
      if (m = d.name ? r.get(d.name) : n.find((A) => A.re.test(d.path)), !m) throw fr(Fe.MATCHER_NOT_FOUND, { location: f, currentLocation: d });
      S = m.record.name, b = Ce({}, d.params, f.params), g = m.stringify(b);
    }
    const v = [];
    let y = m;
    for (; y; ) v.unshift(y.record), y = y.parent;
    return { name: S, path: g, params: b, matched: v, meta: Sb(v) };
  }
  e.forEach((f) => s(f));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: s, resolve: u, removeRoute: o, clearRoutes: c, getRoutes: a, getRecordMatcher: i };
}
function Kc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Yc(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: wb(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function wb(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function qc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Sb(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function Cb(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    lm(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const i = xb(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function xb(e) {
  let t = e;
  for (; t = t.parent; ) if (cm(t) && lm(e, t) === 0) return t;
}
function cm({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Xc(e) {
  const t = ke(Ls), n = ke(Ha), r = N(() => {
    const l = re(e.to);
    return t.resolve(l);
  }), i = N(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const d = f.findIndex(ur.bind(null, c));
    if (d > -1) return d;
    const m = Jc(l[u - 2]);
    return u > 1 && Jc(c) === m && f[f.length - 1].path !== m ? f.findIndex(ur.bind(null, l[u - 2])) : d;
  }), s = N(() => i.value > -1 && Mb(n.params, r.value.params)), o = N(() => i.value > -1 && i.value === n.matched.length - 1 && im(n.params, r.value.params));
  function a(l = {}) {
    if (kb(l)) {
      const u = t[re(e.replace) ? "replace" : "push"](re(e.to)).catch($r);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: r, href: N(() => r.value.href), isActive: s, isExactActive: o, navigate: a };
}
function Ab(e) {
  return e.length === 1 ? e[0] : e;
}
const Lb = Ye({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Xc, setup(e, { slots: t }) {
  const n = Ue(Xc(e)), { options: r } = ke(Ls), i = N(() => ({ [Qc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Qc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const s = t.default && Ab(t.default(n));
    return e.custom ? s : vn("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: i.value }, s);
  };
} }), Eb = Lb;
function kb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Mb(e, t) {
  for (const n in t) {
    const r = t[n], i = e[n];
    if (typeof r == "string") {
      if (r !== i) return false;
    } else if (!Pt(i) || i.length !== r.length || r.some((s, o) => s.valueOf() !== i[o].valueOf())) return false;
  }
  return true;
}
function Jc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Qc = (e, t, n) => e ?? t ?? n, Tb = Ye({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = ke($o), i = N(() => e.route || r.value), s = ke(zc, 0), o = N(() => {
    let u = re(s);
    const { matched: c } = i.value;
    let f;
    for (; (f = c[u]) && !f.components; ) u++;
    return u;
  }), a = N(() => i.value.matched[o.value]);
  it(zc, N(() => o.value + 1)), it(sb, a), it($o, i);
  const l = X();
  return le(() => [l.value, a.value, e.name], ([u, c, f], [d, m, b]) => {
    c && (c.instances[f] = u, m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards), c.updateGuards.size || (c.updateGuards = m.updateGuards))), u && c && (!m || !ur(c, m) || !d) && (c.enterCallbacks[f] || []).forEach((g) => g(u));
  }, { flush: "post" }), () => {
    const u = i.value, c = e.name, f = a.value, d = f && f.components[c];
    if (!d) return eu(n.default, { Component: d, route: u });
    const m = f.props[c], b = m ? m === true ? u.params : typeof m == "function" ? m(u) : m : null, S = vn(d, Ce({}, b, t, { onVnodeUnmounted: (v) => {
      v.component.isUnmounted && (f.instances[c] = null);
    }, ref: l }));
    return eu(n.default, { Component: S, route: u }) || S;
  };
} });
function eu(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Pb = Tb;
function Rb(e) {
  const t = _b(e.routes, e), n = e.parseQuery || rb, r = e.stringifyQuery || Wc, i = e.history, s = Er(), o = Er(), a = Er(), l = ve(an);
  let u = an;
  Bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = eo.bind(null, (L) => "" + L), f = eo.bind(null, $0), d = eo.bind(null, ni);
  function m(L, j) {
    let G, Z;
    return sm(L) ? (G = t.getRecordMatcher(L), Z = j) : Z = L, t.addRoute(Z, G);
  }
  function b(L) {
    const j = t.getRecordMatcher(L);
    j && t.removeRoute(j);
  }
  function g() {
    return t.getRoutes().map((L) => L.record);
  }
  function S(L) {
    return !!t.getRecordMatcher(L);
  }
  function v(L, j) {
    if (j = Ce({}, j || l.value), typeof L == "string") {
      const C = to(n, L, j.path), I = t.resolve({ path: C.path }, j), V = i.createHref(C.fullPath);
      return Ce(C, I, { params: d(I.params), hash: ni(C.hash), redirectedFrom: void 0, href: V });
    }
    let G;
    if (L.path != null) G = Ce({}, L, { path: to(n, L.path, j.path).path });
    else {
      const C = Ce({}, L.params);
      for (const I in C) C[I] == null && delete C[I];
      G = Ce({}, L, { params: f(C) }), j.params = f(j.params);
    }
    const Z = t.resolve(G, j), ge = L.hash || "";
    Z.params = c(d(Z.params));
    const h = W0(r, Ce({}, L, { hash: H0(ge), path: Z.path })), p = i.createHref(h);
    return Ce({ fullPath: h, hash: ge, query: r === Wc ? ib(L.query) : L.query || {} }, Z, { redirectedFrom: void 0, href: p });
  }
  function y(L) {
    return typeof L == "string" ? to(n, L, l.value.path) : Ce({}, L);
  }
  function A(L, j) {
    if (u !== L) return fr(Fe.NAVIGATION_CANCELLED, { from: j, to: L });
  }
  function _(L) {
    return T(L);
  }
  function x(L) {
    return _(Ce(y(L), { replace: true }));
  }
  function E(L, j) {
    const G = L.matched[L.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: Z } = G;
      let ge = typeof Z == "function" ? Z(L, j) : Z;
      return typeof ge == "string" && (ge = ge.includes("?") || ge.includes("#") ? ge = y(ge) : { path: ge }, ge.params = {}), Ce({ query: L.query, hash: L.hash, params: ge.path != null ? {} : L.params }, ge);
    }
  }
  function T(L, j) {
    const G = u = v(L), Z = l.value, ge = L.state, h = L.force, p = L.replace === true, C = E(G, Z);
    if (C) return T(Ce(y(C), { state: typeof C == "object" ? Ce({}, ge, C.state) : ge, force: h, replace: p }), j || G);
    const I = G;
    I.redirectedFrom = j;
    let V;
    return !h && z0(r, Z, G) && (V = fr(Fe.NAVIGATION_DUPLICATED, { to: I, from: Z }), ae(Z, Z, true, false)), (V ? Promise.resolve(V) : R(I, Z)).catch((O) => Kt(O) ? Kt(O, Fe.NAVIGATION_GUARD_REDIRECT) ? O : we(O) : oe(O, I, Z)).then((O) => {
      if (O) {
        if (Kt(O, Fe.NAVIGATION_GUARD_REDIRECT)) return T(Ce({ replace: p }, y(O.to), { state: typeof O.to == "object" ? Ce({}, ge, O.to.state) : ge, force: h }), j || I);
      } else O = P(I, Z, true, p, ge);
      return F(I, Z, O), O;
    });
  }
  function w(L, j) {
    const G = A(L, j);
    return G ? Promise.reject(G) : Promise.resolve();
  }
  function D(L) {
    const j = Be.values().next().value;
    return j && typeof j.runWithContext == "function" ? j.runWithContext(L) : L();
  }
  function R(L, j) {
    let G;
    const [Z, ge, h] = ob(L, j);
    G = ro(Z.reverse(), "beforeRouteLeave", L, j);
    for (const C of Z) C.leaveGuards.forEach((I) => {
      G.push(fn(I, L, j));
    });
    const p = w.bind(null, L, j);
    return G.push(p), Ne(G).then(() => {
      G = [];
      for (const C of s.list()) G.push(fn(C, L, j));
      return G.push(p), Ne(G);
    }).then(() => {
      G = ro(ge, "beforeRouteUpdate", L, j);
      for (const C of ge) C.updateGuards.forEach((I) => {
        G.push(fn(I, L, j));
      });
      return G.push(p), Ne(G);
    }).then(() => {
      G = [];
      for (const C of h) if (C.beforeEnter) if (Pt(C.beforeEnter)) for (const I of C.beforeEnter) G.push(fn(I, L, j));
      else G.push(fn(C.beforeEnter, L, j));
      return G.push(p), Ne(G);
    }).then(() => (L.matched.forEach((C) => C.enterCallbacks = {}), G = ro(h, "beforeRouteEnter", L, j, D), G.push(p), Ne(G))).then(() => {
      G = [];
      for (const C of o.list()) G.push(fn(C, L, j));
      return G.push(p), Ne(G);
    }).catch((C) => Kt(C, Fe.NAVIGATION_CANCELLED) ? C : Promise.reject(C));
  }
  function F(L, j, G) {
    a.list().forEach((Z) => D(() => Z(L, j, G)));
  }
  function P(L, j, G, Z, ge) {
    const h = A(L, j);
    if (h) return h;
    const p = j === an, C = Bn ? history.state : {};
    G && (Z || p ? i.replace(L.fullPath, Ce({ scroll: p && C && C.scroll }, ge)) : i.push(L.fullPath, ge)), l.value = L, ae(L, j, G, p), we();
  }
  let H;
  function Y() {
    H || (H = i.listen((L, j, G) => {
      if (!Ge.listening) return;
      const Z = v(L), ge = E(Z, Ge.currentRoute.value);
      if (ge) {
        T(Ce(ge, { replace: true, force: true }), Z).catch($r);
        return;
      }
      u = Z;
      const h = l.value;
      Bn && J0(jc(h.fullPath, G.delta), As()), R(Z, h).catch((p) => Kt(p, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_CANCELLED) ? p : Kt(p, Fe.NAVIGATION_GUARD_REDIRECT) ? (T(Ce(y(p.to), { force: true }), Z).then((C) => {
        Kt(C, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_DUPLICATED) && !G.delta && G.type === No.pop && i.go(-1, false);
      }).catch($r), Promise.reject()) : (G.delta && i.go(-G.delta, false), oe(p, Z, h))).then((p) => {
        p = p || P(Z, h, false), p && (G.delta && !Kt(p, Fe.NAVIGATION_CANCELLED) ? i.go(-G.delta, false) : G.type === No.pop && Kt(p, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_DUPLICATED) && i.go(-1, false)), F(Z, h, p);
      }).catch($r);
    }));
  }
  let z = Er(), J = Er(), Q;
  function oe(L, j, G) {
    we(L);
    const Z = J.list();
    return Z.length ? Z.forEach((ge) => ge(L, j, G)) : console.error(L), Promise.reject(L);
  }
  function Oe() {
    return Q && l.value !== an ? Promise.resolve() : new Promise((L, j) => {
      z.add([L, j]);
    });
  }
  function we(L) {
    return Q || (Q = !L, Y(), z.list().forEach(([j, G]) => L ? G(L) : j()), z.reset()), L;
  }
  function ae(L, j, G, Z) {
    const { scrollBehavior: ge } = e;
    if (!Bn || !ge) return Promise.resolve();
    const h = !G && Q0(jc(L.fullPath, 0)) || (Z || !G) && history.state && history.state.scroll || null;
    return dt().then(() => ge(L, j, h)).then((p) => p && X0(p)).catch((p) => oe(p, L, j));
  }
  const he = (L) => i.go(L);
  let de;
  const Be = /* @__PURE__ */ new Set(), Ge = { currentRoute: l, listening: true, addRoute: m, removeRoute: b, clearRoutes: t.clearRoutes, hasRoute: S, getRoutes: g, resolve: v, options: e, push: _, replace: x, go: he, back: () => he(-1), forward: () => he(1), beforeEach: s.add, beforeResolve: o.add, afterEach: a.add, onError: J.add, isReady: Oe, install(L) {
    L.component("RouterLink", Eb), L.component("RouterView", Pb), L.config.globalProperties.$router = Ge, Object.defineProperty(L.config.globalProperties, "$route", { enumerable: true, get: () => re(l) }), Bn && !de && l.value === an && (de = true, _(i.location).catch((Z) => {
    }));
    const j = {};
    for (const Z in an) Object.defineProperty(j, Z, { get: () => l.value[Z], enumerable: true });
    L.provide(Ls, Ge), L.provide(Ha, Ou(j)), L.provide($o, l);
    const G = L.unmount;
    Be.add(L), L.unmount = function() {
      Be.delete(L), Be.size < 1 && (u = an, H && H(), H = null, l.value = an, de = false, Q = false), G();
    };
  } };
  function Ne(L) {
    return L.reduce((j, G) => j.then(() => D(G)), Promise.resolve());
  }
  return Ge;
}
function Ib() {
  return ke(Ls);
}
function um(e) {
  return ke(Ha);
}
function Ob(e, t, n) {
  const r = Zf(e, t, n);
  return Math.atan2(r.y - n.h / 2, r.x - n.w / 2);
}
function Vb(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function Db(e, t, n, r, i) {
  if (n <= t) return i;
  const s = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return i + (r - i) * s;
}
function Hb(e, t, n) {
  let r = 1 / 0;
  const i = (s) => {
    s > 0 && s < r && (r = s);
  };
  return t.x > 1e-9 && i((n.maxX - e.x) / t.x), t.x < -1e-9 && i((n.minX - e.x) / t.x), t.y > 1e-9 && i((n.maxY - e.y) / t.y), t.y < -1e-9 && i((n.minY - e.y) / t.y), Number.isFinite(r) ? { x: e.x + t.x * r, y: e.y + t.y * r } : { x: e.x, y: e.y };
}
function Nb(e, t, n, r) {
  const i = { x: Math.cos(t), y: Math.sin(t) }, s = Hb(e, i, n), o = s.x - i.x * r, a = s.y - i.y * r;
  return { x: Math.min(n.maxX - r, Math.max(n.minX + r, o)), y: Math.min(n.maxY - r, Math.max(n.minY + r, a)) };
}
const Fb = ["id", "aria-current", "aria-label"], $b = Ye({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = ps(t.waypointId), { camera: r, viewport: i, spacing: s, setCaptureScroll: o } = hr(), a = um(), l = N(() => a.name === t.waypointId), u = N(() => fi(n, s.value)), c = N(() => {
    const b = Math.min(s.value.col, s.value.row) * Ig;
    return Tg(u.value, r.value, i.value, { radius: b, floor: Rg });
  }), f = N(() => {
    const b = $l + (1 - $l) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${b})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none", maxHeight: l.value ? `${i.value.h}px` : void 0 };
  }), d = X(null);
  function m() {
    l.value && d.value && o(d.value.scrollTop);
  }
  return le(l, (b) => {
    b && d.value && (d.value.scrollTop = 0, o(0));
  }), (b, g) => (ce(), me("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: d, class: Le(["world-panel", { "world-panel--scroll": l.value }]), style: He(f.value), "aria-current": l.value ? "page" : void 0, "aria-label": re(n).label, tabindex: "-1", "data-grid-ignore-click": "true", onScroll: m }, [wh(b.$slots, "default", {}, void 0)], 46, Fb));
} }), kr = At($b, [["__scopeId", "data-v-9d4ba97d"]]), Qe = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, Bo = [{ label: "Location", icon: Gf, href: "https://maps.google.com/?q=Bentonville,+AR", display: Qe.location }, { label: "Email", icon: Wf, href: `mailto:${Qe.email}`, display: Qe.email }, { label: "Phone", icon: xg, href: `tel:${Qe.phone.replace(/[^\d+]/g, "")}`, display: Qe.phone }, { label: "GitHub", icon: zf, href: Qe.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: Sg, href: Qe.linkedin, display: "bits-for-bread" }], Bb = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], jb = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], Wb = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], zb = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], Gb = { id: "hero", class: "hero-section" }, Ub = { class: "hero-frame glass-panel glass-panel--strong" }, Zb = { class: "hero-main" }, Kb = ["href", "aria-label"], Yb = { class: "hero-name section-heading" }, qb = { class: "hero-tagline" }, Xb = { class: "hero-bio" }, Jb = { class: "hero-actions" }, Qb = { class: "hero-rail" }, e2 = { class: "hero-note quiet-sheet" }, t2 = { class: "skills-block" }, n2 = { class: "skill-label" }, r2 = { class: "skill-items" }, i2 = { class: "hero-note quiet-sheet" }, s2 = { class: "hero-links" }, o2 = ["href"], a2 = Ye({ __name: "HeroSection", setup(e) {
  const t = Bo.filter((r) => r.label === "Email" || r.label === "GitHub" || r.label === "LinkedIn"), n = Bo.find((r) => r.label === "Location");
  return (r, i) => {
    const s = rf("router-link");
    return ce(), me("section", Gb, [M(_i, { class: "hero-container" }, { default: $e(() => {
      var _a2;
      return [k("div", Ub, [k("div", Zb, [k("a", { href: (_a2 = re(n)) == null ? void 0 : _a2.href, target: "_blank", rel: "noopener noreferrer", class: "hero-kicker glass-chip section-kicker", "aria-label": `${re(Qe).location} \u2014 open in maps` }, [M(st, { icon: re(Gf), class: "hero-location-icon" }, null, 8, ["icon"]), qn(ye(re(Qe).location), 1)], 8, Kb), k("h1", Yb, ye(re(Qe).name), 1), k("p", qb, ye(re(Qe).tagline), 1), k("p", Xb, ye(re(Qe).bio), 1), k("div", Jb, [M(s, { to: "/projects", class: "hero-link paper-key paper-key--primary" }, { default: $e(() => [i[0] || (i[0] = qn(" View selected work ", -1)), M(st, { icon: re(yg), class: "hero-link-icon" }, null, 8, ["icon"])]), _: 1 }), M(s, { to: "/resume", class: "hero-link paper-key" }, { default: $e(() => [...i[1] || (i[1] = [qn("Resume", -1)])]), _: 1 })])]), k("aside", Qb, [k("section", e2, [i[2] || (i[2] = k("p", { class: "hero-note-label" }, "Capabilities", -1)), k("div", t2, [(ce(true), me(_e, null, ht(re(Bb), (o) => (ce(), me("div", { key: o.label, class: "skill-group" }, [k("span", n2, ye(o.label), 1), k("span", r2, ye(o.items.join("  \xB7  ")), 1)]))), 128))])]), k("section", i2, [i[3] || (i[3] = k("p", { class: "hero-note-label" }, "Elsewhere", -1)), k("div", s2, [(ce(true), me(_e, null, ht(re(t), (o) => (ce(), me("a", { key: o.label, href: o.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [M(st, { icon: o.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), k("span", null, ye(o.display ?? o.label), 1)], 8, o2))), 128))])])])])];
    }), _: 1 })]);
  };
} }), l2 = At(a2, [["__scopeId", "data-v-98831fd5"]]), jo = { demo: { ariaLabel: "Live demo", icon: Ol, label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: zf, label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: Ag, label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: Ol, label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: _g, label: "Docs", priority: 4 } };
function c2(e, t) {
  return jo[e].priority - jo[t].priority;
}
function u2(e) {
  return [...e.links ?? []].sort((t, n) => c2(t.kind, n.kind)).map((t) => ({ ...t, ...jo[t.kind] }));
}
function tu(e, t) {
  const n = u2(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const f2 = { id: "projects", class: "demos-section" }, d2 = { key: 0, class: "project-feature glass-panel" }, m2 = { class: "project-feature-body" }, h2 = { class: "project-feature-title" }, g2 = { class: "project-feature-blurb" }, v2 = { class: "project-feature-tech" }, p2 = { class: "project-feature-actions" }, y2 = ["href", "aria-label"], b2 = { class: "project-index" }, _2 = { class: "project-item-head" }, w2 = { class: "project-item-title" }, S2 = { key: 0, class: "project-item-links", "aria-label": "Project links" }, C2 = ["href", "aria-label"], x2 = { class: "project-item-blurb" }, A2 = { class: "project-item-tech" }, L2 = Ye({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = jb, r = t ? { ...t, visibleLinks: tu(t, "featured") } : null, i = n.map((s) => ({ ...s, visibleLinks: tu(s, "compact") }));
  return (s, o) => (ce(), me("section", f2, [M(_i, { class: "projects-container" }, { default: $e(() => [o[1] || (o[1] = k("div", { class: "projects-head" }, [k("div", { class: "projects-heading" }, [k("span", { class: "glass-chip section-kicker" }, "Selected work"), k("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), k("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), re(r) ? (ce(), me("article", d2, [k("div", m2, [o[0] || (o[0] = k("span", { class: "project-feature-label" }, "Featured project", -1)), k("h3", h2, ye(re(r).title), 1), k("p", g2, ye(re(r).blurb), 1), k("div", v2, [(ce(true), me(_e, null, ht(re(r).tech, (a) => (ce(), me("span", { key: a, class: "project-tech-tag" }, ye(a), 1))), 128))])]), k("div", p2, [(ce(true), me(_e, null, ht(re(r).visibleLinks, (a) => (ce(), me("a", { key: a.kind, href: a.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-link paper-key", { "paper-key--primary": a.kind === "demo" }]), "aria-label": a.ariaLabel }, [M(st, { icon: a.icon }, null, 8, ["icon"]), k("span", null, ye(a.label), 1), M(Fr, { activator: "parent", location: "top", text: a.ariaLabel }, null, 8, ["text"])], 10, y2))), 128))])])) : ir("", true), k("div", b2, [(ce(true), me(_e, null, ht(re(i), (a) => (ce(), me("article", { key: a.title, class: "project-item quiet-sheet" }, [k("header", _2, [k("h3", w2, ye(a.title), 1), a.visibleLinks.length ? (ce(), me("div", S2, [(ce(true), me(_e, null, ht(a.visibleLinks, (l) => (ce(), me("a", { key: l.kind, href: l.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-item-link paper-key--ghost", { "project-item-link--demo": l.kind === "demo" }]), "aria-label": l.ariaLabel }, [M(st, { icon: l.icon }, null, 8, ["icon"]), M(Fr, { activator: "parent", location: "top", text: l.ariaLabel }, null, 8, ["text"])], 10, C2))), 128))])) : ir("", true)]), k("p", x2, ye(a.blurb), 1), k("div", A2, [(ce(true), me(_e, null, ht(a.tech, (l) => (ce(), me("span", { key: l, class: "project-tech-tag" }, ye(l), 1))), 128))])]))), 128))])]), _: 1 })]));
} }), E2 = At(L2, [["__scopeId", "data-v-479b2a52"]]), k2 = { id: "resume", class: "resume-section" }, M2 = { class: "timeline" }, T2 = { class: "entry-rail" }, P2 = { class: "entry-dates glass-chip" }, R2 = { class: "entry quiet-sheet" }, I2 = { class: "entry-head" }, O2 = { class: "entry-titleblock" }, V2 = { class: "entry-role" }, D2 = { class: "entry-subhead" }, H2 = { class: "entry-company" }, N2 = { class: "entry-work-location" }, F2 = { class: "entry-bullets" }, $2 = { key: 0, class: "entry-tech" }, B2 = { class: "entry-tech-items" }, j2 = { class: "entry-head" }, W2 = { class: "entry-titleblock" }, z2 = { class: "entry-role" }, G2 = { class: "entry-company" }, U2 = { class: "entry-meta" }, Z2 = { class: "entry-dates" }, K2 = { class: "entry-location" }, Y2 = { key: 0, class: "entry-focus" }, q2 = Ye({ __name: "ResumeSection", setup(e) {
  return (t, n) => (ce(), me("section", k2, [M(_i, { class: "resume-container" }, { default: $e(() => [n[2] || (n[2] = k("div", { class: "resume-head" }, [k("div", { class: "resume-heading" }, [k("span", { class: "glass-chip section-kicker" }, "Resume"), k("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), k("ol", M2, [(ce(true), me(_e, null, ht(re(Wb), (r) => (ce(), me("li", { key: `${r.company}-${r.dates}`, class: "timeline-row" }, [k("div", T2, [k("span", P2, ye(r.dates), 1)]), k("article", R2, [k("header", I2, [k("div", O2, [k("h3", V2, ye(r.role), 1), k("div", D2, [k("p", H2, ye(r.company), 1), k("span", N2, ye(r.location), 1)])])]), k("ul", F2, [(ce(true), me(_e, null, ht(r.highlights, (i, s) => (ce(), me("li", { key: s }, ye(i), 1))), 128))]), r.tech ? (ce(), me("div", $2, [n[0] || (n[0] = k("span", { class: "entry-tech-label" }, "Stack", -1)), k("span", B2, ye(r.tech.join("  \xB7  ")), 1)])) : ir("", true)])]))), 128))]), n[3] || (n[3] = k("div", { class: "edu-head" }, [k("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (ce(true), me(_e, null, ht(re(zb), (r) => (ce(), me("div", { key: `${r.school}-${r.degree}`, class: "education-card glass-panel" }, [k("header", j2, [k("div", W2, [k("h3", z2, ye(r.degree) + " \u2014 " + ye(r.field), 1), k("p", G2, ye(r.school), 1)]), k("div", U2, [k("span", Z2, ye(r.dates), 1), k("span", K2, ye(r.location), 1)])]), r.focus ? (ce(), me("p", Y2, [n[1] || (n[1] = k("span", { class: "entry-tech-label" }, "Focus", -1)), qn(" " + ye(r.focus), 1)])) : ir("", true)]))), 128))]), _: 1 })]));
} }), X2 = At(q2, [["__scopeId", "data-v-081aa046"]]), J2 = ["href", "aria-label"], Q2 = { class: "contact-text" }, e_ = Ye({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => (ce(), me("div", { class: Le(["contact-strip", { "is-dense": e.dense }]) }, [(ce(true), me(_e, null, ht(re(Bo), (r) => (ce(), me("a", { key: r.label, href: r.href, "aria-label": r.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link paper-key" }, [M(st, { icon: r.icon, class: "contact-icon" }, null, 8, ["icon"]), k("span", Q2, ye(r.display ?? r.label), 1)], 8, J2))), 128))], 2));
} }), t_ = At(e_, [["__scopeId", "data-v-999b7116"]]), n_ = { id: "contact", class: "contact-section" }, r_ = { class: "contact-band glass-panel" }, i_ = Ye({ __name: "ContactSection", setup(e) {
  return (t, n) => (ce(), me("section", n_, [M(_i, { class: "contact-container" }, { default: $e(() => [k("div", r_, [n[0] || (n[0] = k("div", { class: "contact-head" }, [k("span", { class: "glass-chip section-kicker" }, "Contact"), k("h2", { class: "contact-title" }, "Open to interesting problems."), k("p", { class: "contact-copy" })], -1)), M(t_, { class: "contact-strip-wrap" })])]), _: 1 })]));
} }), s_ = At(i_, [["__scopeId", "data-v-95eff47f"]]), o_ = { class: "about-section" }, a_ = { class: "content-surface about-card" }, l_ = { class: "section-heading" }, c_ = { class: "about-tagline" }, u_ = { class: "section-intro" }, f_ = { class: "about-meta" }, d_ = Ye({ __name: "AboutSection", setup(e) {
  return (t, n) => (ce(), me("section", o_, [M(_i, { class: "about-container" }, { default: $e(() => [k("div", a_, [n[0] || (n[0] = k("p", { class: "section-kicker" }, "About", -1)), k("h2", l_, ye(re(Qe).name), 1), k("p", c_, ye(re(Qe).tagline), 1), k("p", u_, ye(re(Qe).bio), 1), k("p", f_, ye(re(Qe).location), 1)])]), _: 1 })]));
} }), m_ = At(d_, [["__scopeId", "data-v-b03b1108"]]), h_ = Ye({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n, isAnimating: r } = hr(), i = X(null);
  let s = null;
  function o(a) {
    const l = document.querySelector(".world-panel--scroll");
    if (!l || l.contains(a.target)) return;
    const u = a.deltaMode === 1 ? 16 : a.deltaMode === 2 ? l.clientHeight : 1;
    l.scrollTop += a.deltaY * u, a.preventDefault();
  }
  return Wt(() => {
    const a = i.value;
    if (!a) return;
    const l = () => n(a.clientWidth, a.clientHeight);
    l(), s = new ResizeObserver(l), s.observe(a), window.addEventListener("wheel", o, { passive: false });
  }), On(() => {
    s == null ? void 0 : s.disconnect(), window.removeEventListener("wheel", o);
  }), (a, l) => (ce(), me("div", { ref_key: "stageRef", ref: i, class: "world-stage" }, [k("div", { class: Le(["world-plane", { "world-plane--animating": re(r) }]), style: He(re(t)) }, [M(kr, { "waypoint-id": "hero" }, { default: $e(() => [M(l2)]), _: 1 }), M(kr, { "waypoint-id": "projects" }, { default: $e(() => [M(E2)]), _: 1 }), M(kr, { "waypoint-id": "resume" }, { default: $e(() => [M(X2)]), _: 1 }), M(kr, { "waypoint-id": "contact" }, { default: $e(() => [M(s_)]), _: 1 }), M(kr, { "waypoint-id": "about" }, { default: $e(() => [M(m_)]), _: 1 })], 6)], 512));
} }), g_ = At(h_, [["__scopeId", "data-v-e47457f7"]]);
function v_(e, t, n, r) {
  const i = r.halfW + n - Math.abs(e - r.cx), s = r.halfH + n - Math.abs(t - r.cy);
  return i <= 0 || s <= 0 ? { x: 0, y: 0 } : i < s ? { x: e >= r.cx ? i : -i, y: 0 } : { x: 0, y: t >= r.cy ? s : -s };
}
function nu(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function ru(e, t) {
  e.x = nu(e.x, t.minX + e.r, t.maxX - e.r), e.y = nu(e.y, t.minY + e.r, t.maxY - e.r);
}
function p_(e, t) {
  const n = e.r + t.r;
  let r = t.x - e.x, i = t.y - e.y, s = Math.hypot(r, i);
  if (s >= n) return;
  s < 1e-6 && (r = 1, i = 0, s = 1);
  const o = (n - s) / 2, a = r / s, l = i / s;
  e.x -= a * o, e.y -= l * o, t.x += a * o, t.y += l * o;
}
function y_(e, t) {
  for (const n of t) {
    const r = v_(e.x, e.y, e.r, n);
    e.x += r.x, e.y += r.y;
  }
}
function b_(e, t, n, r = []) {
  const i = e.map((s) => {
    const o = (s.pos.x - s.prevPos.x) * n.friction, a = (s.pos.y - s.prevPos.y) * n.friction, l = (s.target.x - s.pos.x) * n.stiffness, u = (s.target.y - s.pos.y) * n.stiffness;
    return { x: s.pos.x + o + l, y: s.pos.y + a + u, r: s.radius };
  });
  for (const s of i) ru(s, t);
  for (let s = 0; s < n.iterations; s++) {
    for (let o = 0; o < i.length; o++) for (let a = o + 1; a < i.length; a++) p_(i[o], i[a]);
    if (r.length) for (const o of i) y_(o, r);
    for (const o of i) ru(o, t);
  }
  return i.map((s) => ({ x: s.x, y: s.y }));
}
const __ = 25.5, w_ = 40, S_ = 0.05, C_ = 720, x_ = 12;
function A_(e) {
  return { minX: Li, minY: Li, maxX: e.w - Li, maxY: e.h - Li };
}
const L_ = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function E_() {
  const e = hr(), t = um(), n = X([]), r = /* @__PURE__ */ new Map(), i = L_();
  function s(c) {
    const f = e.camera.value, d = e.viewport.value, m = e.spacing.value, b = A_(d), g = { x: d.w / 2, y: d.h / 2 }, S = mr.map((H) => {
      const Y = fi(H, m);
      return { wp: H, dist: Vb(Y, f), bearing: Ob(Y, f, d) };
    }).filter((H) => H.dist > Bl), v = S.map((H) => H.dist), y = v.length ? Math.min(...v) : 0, A = v.length ? Math.max(...v) : 1, _ = Math.min(d.w, d.h), x = Math.min(x_, Math.max(0, S_ * (_ - C_))), E = __ + x, T = w_ + x, w = S.map((H) => {
      const Y = Db(H.dist, y, A, E, T), z = Nb(g, H.bearing, b, Y), J = r.get(H.wp.id) ?? { pos: z, prevPos: z };
      return { pos: J.pos, prevPos: J.prevPos, target: z, radius: Y };
    }), D = b0(), R = b_(w, b, { stiffness: c ? 1 : Vg, friction: c ? 0 : Dg, iterations: Hg }, D), F = new Set(S.map((H) => H.wp.id));
    for (const H of [...r.keys()]) F.has(H) || r.delete(H);
    let P = true;
    return n.value = S.map((H, Y) => {
      const z = R[Y], J = w[Y].pos;
      r.set(H.wp.id, { pos: z, prevPos: J });
      const Q = w[Y].target;
      return (Math.hypot(z.x - J.x, z.y - J.y) > 0.3 || Math.hypot(z.x - Q.x, z.y - Q.y) > 0.5) && (P = false), { id: H.wp.id, route: H.wp.route, label: H.wp.label, icon: H.wp.icon, x: z.x, y: z.y, radius: w[Y].radius, bearing: H.bearing, opacity: Math.min(1, Math.max(0, (H.dist - Bl) / Og)) };
    }), P;
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
  return le([() => e.camera.value.x, () => e.camera.value.y, () => e.viewport.value, () => e.spacing.value, e.isAnimating, () => t.name], u), Wt(() => i ? s(true) : u()), On(() => {
    o && cancelAnimationFrame(o);
  }), n;
}
const k_ = { class: "compass", "aria-label": "Move to a section" }, M_ = ["aria-label", "title", "onClick"], T_ = Ye({ __name: "CompassNav", setup(e) {
  const t = Ib(), n = E_();
  function r(i) {
    t.push(i);
  }
  return (i, s) => (ce(), me("nav", k_, [(ce(true), me(_e, null, ht(re(n), (o) => (ce(), me("button", { key: o.id, type: "button", class: "compass__marker", style: He({ transform: `translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`, width: `${o.radius * 2}px`, height: `${o.radius * 2}px`, opacity: o.opacity, pointerEvents: o.opacity > 0.4 ? "auto" : "none" }), "aria-label": `Go to ${o.label}`, title: o.label, onClick: (a) => r(o.route) }, [k("span", { class: "compass__arrow", style: He({ transform: `rotate(${o.bearing}rad)` }), "aria-hidden": "true" }, null, 4), M(st, { icon: o.icon, size: Math.round(o.radius), class: "compass__icon" }, null, 8, ["icon", "size"])], 12, M_))), 128))]));
} }), P_ = At(T_, [["__scopeId", "data-v-41dac3fc"]]), iu = Symbol.for("vuetify:layout"), R_ = Symbol.for("vuetify:layout-item"), su = 1e3, I_ = ne({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), O_ = (e, t, n, r) => {
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
function V_(e) {
  const t = ke(iu, null), n = N(() => t ? t.rootZIndex.value - 100 : su), r = X([]), i = Ue(/* @__PURE__ */ new Map()), s = Ue(/* @__PURE__ */ new Map()), o = Ue(/* @__PURE__ */ new Map()), a = Ue(/* @__PURE__ */ new Map()), l = Ue(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = wd(), f = N(() => {
    const E = /* @__PURE__ */ new Map(), T = e.overlaps ?? [];
    for (const w of T.filter((D) => D.includes(":"))) {
      const [D, R] = w.split(":");
      if (!r.value.includes(D) || !r.value.includes(R)) continue;
      const F = i.get(D), P = i.get(R), H = s.get(D), Y = s.get(R);
      !F || !P || !H || !Y || (E.set(R, { position: F.value, amount: parseInt(H.value, 10) }), E.set(D, { position: P.value, amount: -parseInt(Y.value, 10) }));
    }
    return E;
  }), d = N(() => {
    const E = [...new Set([...o.values()].map((w) => w.value))].sort((w, D) => w - D), T = [];
    for (const w of E) {
      const D = r.value.filter((R) => {
        var _a2;
        return ((_a2 = o.get(R)) == null ? void 0 : _a2.value) === w;
      });
      T.push(...D);
    }
    return O_(T, i, s, a);
  }), m = N(() => !Array.from(l.values()).some((E) => E.value)), b = N(() => d.value[d.value.length - 1].layer), g = B(() => ({ "--v-layout-left": pe(b.value.left), "--v-layout-right": pe(b.value.right), "--v-layout-top": pe(b.value.top), "--v-layout-bottom": pe(b.value.bottom), ...m.value ? void 0 : { transition: "none" } })), S = N(() => d.value.slice(1).map((E, T) => {
    let { id: w } = E;
    const { layer: D } = d.value[T], R = s.get(w), F = i.get(w);
    return { id: w, ...D, size: Number(R.value), position: F.value };
  })), v = (E) => S.value.find((T) => T.id === E), y = Ze("createLayout"), A = ve(false);
  return Wt(() => {
    A.value = true;
  }), it(iu, { register: (E, T) => {
    let { id: w, order: D, position: R, layoutSize: F, elementSize: P, active: H, disableTransitions: Y, absolute: z } = T;
    o.set(w, D), i.set(w, R), s.set(w, F), a.set(w, H), Y && l.set(w, Y);
    const Q = Wn(R_, y == null ? void 0 : y.vnode).indexOf(E);
    Q > -1 ? r.value.splice(Q, 0, w) : r.value.push(w);
    const oe = N(() => S.value.findIndex((he) => he.id === w)), Oe = N(() => n.value + d.value.length * 2 - oe.value * 2), we = N(() => {
      const he = R.value === "left" || R.value === "right", de = R.value === "right", Be = R.value === "bottom", Ge = P.value ?? F.value, Ne = Ge === 0 ? "%" : "px", L = { [R.value]: 0, zIndex: Oe.value, transform: `translate${he ? "X" : "Y"}(${(H.value ? 0 : -(Ge === 0 ? 100 : Ge)) * (de || Be ? -1 : 1)}${Ne})`, position: z.value || n.value !== su ? "absolute" : "fixed", ...m.value ? void 0 : { transition: "none" } };
      if (!A.value) return L;
      const j = S.value[oe.value], G = f.value.get(w);
      return G && (j[G.position] += G.amount), { ...L, height: he ? `calc(100% - ${j.top}px - ${j.bottom}px)` : P.value ? `${P.value}px` : void 0, left: de ? void 0 : `${j.left}px`, right: de ? `${j.right}px` : void 0, top: R.value !== "bottom" ? `${j.top}px` : void 0, bottom: R.value !== "top" ? `${j.bottom}px` : void 0, width: he ? P.value ? `${P.value}px` : void 0 : `calc(100% - ${j.left}px - ${j.right}px)` };
    }), ae = N(() => ({ zIndex: Oe.value - 1 }));
    return { layoutItemStyles: we, layoutItemScrimStyles: ae, zIndex: Oe };
  }, unregister: (E) => {
    o.delete(E), i.delete(E), s.delete(E), a.delete(E), l.delete(E), r.value = r.value.filter((T) => T !== E);
  }, mainRect: b, mainStyles: g, getLayoutItem: v, items: S, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: v, items: S, layoutRect: c, layoutRef: u };
}
const D_ = ne({ ...qe(), ...mi(I_(), ["fullHeight"]), ...Gt() }, "VApp"), H_ = Pe()({ name: "VApp", props: D_(), setup(e, t) {
  let { slots: n } = t;
  const r = sn(e), { layoutClasses: i, getLayoutItem: s, items: o, layoutRef: a } = V_({ ...e, fullHeight: true }), { rtlClasses: l } = bi();
  return ze(() => {
    var _a2;
    return k("div", { ref: a, class: Le(["v-application", r.themeClasses.value, i.value, l.value, e.class]), style: He([e.style]) }, [k("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: s, items: o, theme: r };
} }), N_ = Ye({ __name: "App", setup(e) {
  return (t, n) => (ce(), rr(H_, { class: "app-shell" }, { default: $e(() => [M(g0), M(L0), M(g_), M(P_)]), _: 1 }));
} }), F_ = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, $_ = { component: (e) => vn(_d, { ...e, class: "mdi" }) };
function B_() {
  return { svg: { component: La }, class: { component: _d } };
}
function j_(e) {
  const t = B_(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = $_), pt({ defaultSet: n, sets: t, aliases: { ...F_, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function wi(e) {
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
function W_(e, t, n) {
  var _a2;
  const r = [];
  let i = [];
  const s = fm(e), o = dm(e), a = n ?? ((_a2 = wi(t)) == null ? void 0 : _a2.firstDay) ?? 0, l = (s.getDay() - a + 7) % 7, u = (o.getDay() - a + 7) % 7;
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
function Br(e, t, n) {
  var _a2;
  let r = (n ?? ((_a2 = wi(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (r = 0);
  const i = new Date(e);
  for (; i.getDay() !== r; ) i.setDate(i.getDate() - 1);
  return i;
}
function z_(e, t) {
  var _a2;
  const n = new Date(e), r = ((((_a2 = wi(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function fm(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function dm(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function G_(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const U_ = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function mm(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (U_.test(e)) return G_(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const ou = new Date(2e3, 0, 2);
function Z_(e, t, n) {
  var _a2;
  const r = t ?? ((_a2 = wi(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return rd(7).map((i) => {
    const s = new Date(ou);
    return s.setDate(ou.getDate() + r + i), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(s);
  });
}
function K_(e, t, n, r) {
  const i = mm(e) ?? /* @__PURE__ */ new Date(), s = r == null ? void 0 : r[t];
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
function Y_(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), i = Zl(String(n.getMonth() + 1), 2, "0"), s = Zl(String(n.getDate()), 2, "0");
  return `${r}-${i}-${s}`;
}
function q_(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function X_(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function J_(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Rn(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Q_(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function ew(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ri(e) {
  return e.getFullYear();
}
function tw(e) {
  return e.getMonth();
}
function nw(e, t, n, r) {
  const i = wi(t), s = n ?? (i == null ? void 0 : i.firstDay) ?? 0, o = (i == null ? void 0 : i.firstWeekSize) ?? 1;
  return r !== void 0 ? rw(e, t, s, r) : iw(e, t, s, o);
}
function rw(e, t, n, r) {
  const i = (7 + r - n) % 7, s = Br(e, t, n), o = Rn(s, 6);
  function a(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let l = ri(s);
  l < ri(o) && a(l + 1) <= i && l++;
  const u = new Date(l, 0, 1), c = a(l), f = c <= i ? Rn(u, -c) : Rn(u, 7 - c);
  return 1 + rs(Na(s), ii(f), "weeks");
}
function iw(e, t, n, r) {
  const i = Br(e, t, n), s = Rn(Br(e, t, n), 6);
  function o(f) {
    const d = new Date(f, 0, 1);
    return 7 - rs(d, Br(d, t, n), "days");
  }
  let a = ri(i);
  a < ri(s) && o(a + 1) >= r && a++;
  const l = new Date(a, 0, 1), u = o(a), c = u >= r ? Rn(l, u - 7) : Rn(l, u);
  return 1 + rs(Na(i), ii(c), "weeks");
}
function sw(e) {
  return e.getDate();
}
function ow(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function aw(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function lw(e) {
  return e.getHours();
}
function cw(e) {
  return e.getMinutes();
}
function uw(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function fw(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function dw(e, t) {
  return ns(e, t[0]) && gw(e, t[1]);
}
function mw(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function ns(e, t) {
  return e.getTime() > t.getTime();
}
function hw(e, t) {
  return ns(ii(e), ii(t));
}
function gw(e, t) {
  return e.getTime() < t.getTime();
}
function au(e, t) {
  return e.getTime() === t.getTime();
}
function vw(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function pw(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function yw(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function rs(e, t, n) {
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
function bw(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function _w(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function ww(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Sw(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Cw(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function ii(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Na(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class xw {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return mm(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Y_(this, t);
  }
  parseISO(t) {
    return q_(t);
  }
  addMinutes(t, n) {
    return X_(t, n);
  }
  addHours(t, n) {
    return J_(t, n);
  }
  addDays(t, n) {
    return Rn(t, n);
  }
  addWeeks(t, n) {
    return Q_(t, n);
  }
  addMonths(t, n) {
    return ew(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return W_(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Br(t, this.locale, r);
  }
  endOfWeek(t) {
    return z_(t, this.locale);
  }
  startOfMonth(t) {
    return fm(t);
  }
  endOfMonth(t) {
    return dm(t);
  }
  format(t, n) {
    return K_(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return au(t, n);
  }
  isValid(t) {
    return mw(t);
  }
  isWithinRange(t, n) {
    return dw(t, n);
  }
  isAfter(t, n) {
    return ns(t, n);
  }
  isAfterDay(t, n) {
    return hw(t, n);
  }
  isBefore(t, n) {
    return !ns(t, n) && !au(t, n);
  }
  isSameDay(t, n) {
    return vw(t, n);
  }
  isSameMonth(t, n) {
    return pw(t, n);
  }
  isSameYear(t, n) {
    return yw(t, n);
  }
  setMinutes(t, n) {
    return _w(t, n);
  }
  setHours(t, n) {
    return bw(t, n);
  }
  setMonth(t, n) {
    return ww(t, n);
  }
  setDate(t, n) {
    return Sw(t, n);
  }
  setYear(t, n) {
    return Cw(t, n);
  }
  getDiff(t, n, r) {
    return rs(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return Z_(this.locale, r, n);
  }
  getYear(t) {
    return ri(t);
  }
  getMonth(t) {
    return tw(t);
  }
  getWeek(t, n, r) {
    const i = n !== void 0 ? Number(n) : void 0, s = r !== void 0 ? Number(r) : void 0;
    return nw(t, this.locale, i, s);
  }
  getDate(t) {
    return sw(t);
  }
  getNextMonth(t) {
    return ow(t);
  }
  getPreviousMonth(t) {
    return aw(t);
  }
  getHours(t) {
    return lw(t);
  }
  getMinutes(t) {
    return cw(t);
  }
  startOfDay(t) {
    return ii(t);
  }
  endOfDay(t) {
    return Na(t);
  }
  startOfYear(t) {
    return uw(t);
  }
  endOfYear(t) {
    return fw(t);
  }
}
const Aw = Symbol.for("vuetify:date-options"), lu = Symbol.for("vuetify:date-adapter");
function Lw(e, t) {
  const n = pt({ adapter: xw, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Ew(n, t) };
}
function Ew(e, t) {
  const n = Ue(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return le(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
function hm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, r = pt(t, n), { aliases: i = {}, components: s = {}, directives: o = {} } = r, a = jr();
  return a.run(() => {
    const l = Hv(r.defaults), u = Qp(r.display, r.ssr), c = np(r.theme), f = j_(r.icons), d = Ep(r.locale), m = Lw(r.date, d), b = fy(r.goTo, d);
    function g(v) {
      for (const A in o) v.directive(A, o[A]);
      for (const A in s) v.component(A, s[A]);
      for (const A in i) v.component(A, gr({ ...i[A], name: A, aliasName: i[A].name }));
      const y = jr();
      if (y.run(() => {
        c.install(v);
      }), v.onUnmount(() => y.stop()), v.provide(lr, l), v.provide(Mo, u), v.provide(Jr, c), v.provide(xo, f), v.provide(Ao, d), v.provide(Aw, m.options), v.provide(lu, m.instance), v.provide(cy, b), Ie && r.ssr) if (v.$nuxt) v.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: A } = v;
        v.mount = function() {
          const _ = A(...arguments);
          return dt(() => u.update()), v.mount = A, _;
        };
      }
      v.mixin({ computed: { $vuetify() {
        return Ue({ defaults: Fn.call(this, lr), display: Fn.call(this, Mo), theme: Fn.call(this, Jr), icons: Fn.call(this, xo), locale: Fn.call(this, Ao), date: Fn.call(this, lu) });
      } } });
    }
    function S() {
      a.stop();
    }
    return { install: g, unmount: S, defaults: l, display: u, theme: c, icons: f, locale: d, date: m, goTo: b };
  });
}
const kw = "3.12.1";
hm.version = kw;
function Fn(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const Mw = { collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z", info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z", checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z", sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z", expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", subgroup: "svg:M7,10L12,15L17,10H7Z", dropdown: "svg:M7,10L12,15L17,10H7Z", radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z", radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12", first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z", last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z", unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z", file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z", plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", minus: "svg:M19,13H5V11H19V13Z", calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", treeviewCollapse: "svg:M7,10L12,15L17,10H7Z", treeviewExpand: "svg:M10,17L15,12L10,7V17Z", tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z", upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z", color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8", command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z", ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z", space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z", shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z", alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z", enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z", arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z", arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z", arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z", arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z", backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z", play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z", pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z", fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z", volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z", volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z", volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z", search: "svg:M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, Tw = { component: La }, Pw = hm({ icons: { defaultSet: "mdi", aliases: Mw, sets: { mdi: Tw } }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function Rw(e) {
  const t = hr();
  let n = true, r = null;
  const i = (s) => {
    var _a2;
    (_a2 = document.getElementById(`panel-${s}`)) == null ? void 0 : _a2.focus({ preventScroll: true });
  };
  e.afterEach((s) => {
    const o = Eg(s.name);
    t.panToWaypoint(o, { snap: n }), n || (t.isAnimating.value ? r = o : i(o)), n = false;
  }), le(t.isAnimating, (s) => {
    !s && r !== null && (i(r), r = null);
  });
}
const Iw = Ye({ name: "RouteCoordinate", render: () => null }), Ow = [...mr.map((e) => ({ path: e.route, name: e.id, component: Iw })), { path: "/:pathMatch(.*)*", redirect: "/" }], Fa = Rb({ history: ub("/"), routes: Ow }), Vw = D1(N_).use(Pw).use(Fa);
Rw(Fa);
Fa.isReady().then(() => Vw.mount("#app"));
