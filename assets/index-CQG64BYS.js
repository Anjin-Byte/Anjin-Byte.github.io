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
}, gm = Object.prototype.hasOwnProperty, xe = (e, t) => gm.call(e, t), se = Array.isArray, Un = (e) => ii(e) === "[object Map]", uu = (e) => ii(e) === "[object Set]", Wa = (e) => ii(e) === "[object Date]", ue = (e) => typeof e == "function", De = (e) => typeof e == "string", kt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", fu = (e) => (Se(e) || ue(e)) && ue(e.then) && ue(e.catch), du = Object.prototype.toString, ii = (e) => du.call(e), vm = (e) => ii(e).slice(8, -1), mu = (e) => ii(e) === "[object Object]", ss = (e) => De(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mr = Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, pm = /-\w/g, wt = os((e) => e.replace(pm, (t) => t.slice(1).toUpperCase())), ym = /\B([A-Z])/g, Vn = os((e) => e.replace(ym, "-$1").toLowerCase()), dr = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = os((e) => e ? `on${dr(e)}` : ""), dn = (e, t) => !Object.is(e, t), ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, hu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, bm = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, wm = (e) => {
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
const _m = /;(?![^(]*\))/g, Sm = /:([^]+)/, Cm = /\/\*[^]*?\*\//g;
function xm(e) {
  const t = {};
  return e.replace(Cm, "").split(_m).forEach((n) => {
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
function Br(e) {
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
class wu {
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
let _u = 0, Tr, Pr;
function Su(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Pr, Pr = e;
    return;
  }
  e.next = Tr, Tr = e;
}
function Zo() {
  _u++;
}
function Ko() {
  if (--_u > 0) return;
  if (Pr) {
    let t = Pr;
    for (Pr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Tr; ) {
    let t = Tr;
    for (Tr = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jr) || (e.globalVersion = jr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !io(e)))) return;
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
let jr = 0;
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
    this.version++, jr++, this.notify(t);
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
const Hi = /* @__PURE__ */ new WeakMap(), kn = Symbol(""), so = Symbol(""), Wr = Symbol("");
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
    jr++;
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
        (d === "length" || d === Wr || !kt(d) && d >= c) && a(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(Wr)), t) {
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
  return t === e ? t : (et(t, "iterate", Wr), bt(e) ? t : t.map(Mt));
}
function ls(e) {
  return et(e = te(e), "iterate", Wr), e;
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
  et(r, "iterate", Wr);
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
const Dm = new Tu(), Hm = new Vm(), $m = new Tu(true);
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
function Nm(e, t) {
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
  const n = Nm(e, t);
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
  return Jo(e, false, $m, jm, Ru);
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
  for (const n in e) t[n] = $u(e, n);
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
  return Ve(e) ? e : ue(e) ? new Xm(e) : Se(e) && arguments.length > 1 ? $u(e, t, n) : X(e);
}
function $u(e, t, n) {
  return new qm(e, t, n);
}
class Jm {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
const xi = {}, $i = /* @__PURE__ */ new WeakMap();
let xn;
function eh(e, t = false, n = xn) {
  if (n) {
    let r = $i.get(n);
    r || $i.set(n, r = []), r.push(e);
  }
}
function th(e, t, n = Ee) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: a, call: l } = n, u = (w) => i ? w : bt(w) || i === false || i === 0 ? Jt(w, 1) : Jt(w);
  let c, f, d, m, b = false, g = false;
  if (Ve(e) ? (f = () => e.value, b = bt(e)) : Mn(e) ? (f = () => u(e), b = true) : se(e) ? (g = true, b = e.some((w) => Mn(w) || bt(w)), f = () => e.map((w) => {
    if (Ve(w)) return w.value;
    if (Mn(w)) return u(w);
    if (ue(w)) return l ? l(w, 2) : w();
  })) : ue(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (d) {
      en();
      try {
        d();
      } finally {
        tn();
      }
    }
    const w = xn;
    xn = c;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      xn = w;
    }
  } : f = jt, t && i) {
    const w = f, x = i === true ? 1 / 0 : i;
    f = () => Jt(w(), x);
  }
  const S = bu(), v = () => {
    c.stop(), S && S.active && Go(S.effects, c);
  };
  if (s && t) {
    const w = t;
    t = (...x) => {
      w(...x), v();
    };
  }
  let y = g ? new Array(e.length).fill(xi) : xi;
  const A = (w) => {
    if (!(!(c.flags & 1) || !c.dirty && !w)) if (t) {
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
  return a && a(A), c = new wu(f), c.scheduler = o ? () => o(A, false) : A, m = (w) => eh(w, false, c), d = c.onStop = () => {
    const w = $i.get(c);
    if (w) {
      if (l) l(w, 4);
      else for (const x of w) x();
      $i.delete(c);
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
function si(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    us(i, t, n);
  }
}
function Tt(e, t, n, r) {
  if (ue(e)) {
    const i = si(e, t, n, r);
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
      en(), si(s, null, 10, [e, l, u]), tn();
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
let $t = -1;
const Zn = [];
let un = null, Nn = 0;
const Fu = Promise.resolve();
let Fi = null;
function dt(e) {
  const t = Fi || Fu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rh(e) {
  let t = $t + 1, n = lt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = lt[r], s = zr(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Qo(e) {
  if (!(e.flags & 1)) {
    const t = zr(e), n = lt[lt.length - 1];
    !n || !(e.flags & 2) && t >= zr(n) ? lt.push(e) : lt.splice(rh(t), 0, e), e.flags |= 1, Nu();
  }
}
function Nu() {
  Fi || (Fi = Fu.then(ju));
}
function ih(e) {
  se(e) ? Zn.push(...e) : un && e.id === -1 ? un.splice(Nn + 1, 0, e) : e.flags & 1 || (Zn.push(e), e.flags |= 1), Nu();
}
function Za(e, t, n = $t + 1) {
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
    const t = [...new Set(Zn)].sort((n, r) => zr(n) - zr(r));
    if (Zn.length = 0, un) {
      un.push(...t);
      return;
    }
    for (un = t, Nn = 0; Nn < un.length; Nn++) {
      const n = un[Nn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    un = null, Nn = 0;
  }
}
const zr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ju(e) {
  try {
    for ($t = 0; $t < lt.length; $t++) {
      const t = lt[$t];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), si(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $t < lt.length; $t++) {
      const t = lt[$t];
      t && (t.flags &= -2);
    }
    $t = -1, lt.length = 0, Bu(), Fi = null, (lt.length || Zn.length) && ju();
  }
}
let Ke = null, Wu = null;
function Ni(e) {
  const t = Ke;
  return Ke = e, Wu = e && e.type.__scopeId || null, t;
}
function Ne(e, t = Ke, n) {
  if (!t || e._n) return e;
  const r = (...i) => {
    r._d && Wi(-1);
    const s = Ni(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Ni(s), r._d && Wi(1);
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
  const r = li();
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
function ce(e, t, n) {
  return ea(e, t, n);
}
function ea(e, t, n = Ee) {
  const { immediate: r, deep: i, flush: s, once: o } = n, a = je({}, n), l = t && r || !t && s !== "post";
  let u;
  if (Kr) {
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
  return Kr && (u ? u.push(d) : l && d()), d;
}
function ah(e, t, n) {
  const r = this.proxy, i = De(e) ? e.includes(".") ? zu(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ue(t) ? s = t : (s = t.handler, n = t);
  const o = ci(this), a = ea(i, s.bind(r), n);
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
const Gu = Symbol("_vte"), Uu = (e) => e.__isTeleport, Rr = (e) => e && (e.disabled || e.disabled === ""), Ka = (e) => e && (e.defer || e.defer === ""), Ya = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ao = (e, t) => {
  const n = e && e.to;
  return De(n) ? t ? t(n) : null : n;
}, Zu = { name: "Teleport", __isTeleport: true, process(e, t, n, r, i, s, o, a, l, u) {
  const { mc: c, pc: f, pbc: d, o: { insert: m, querySelector: b, createText: g, createComment: S } } = u, v = Rr(t.props);
  let { shapeFlag: y, children: A, dynamicChildren: w } = t;
  if (e == null) {
    const x = t.el = g(""), E = t.anchor = g("");
    m(x, n, r), m(E, n, r);
    const T = (V, R) => {
      y & 16 && c(A, V, R, i, s, o, a, l);
    }, _ = () => {
      const V = t.target = ao(t.props, b), R = lo(V, t, g, m);
      V && (o !== "svg" && Ya(V) ? o = "svg" : o !== "mathml" && qa(V) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(V), v || (T(V, R), Pi(t, false)));
    };
    v && (T(n, E), Pi(t, true)), Ka(t.props) ? (t.el.__isMounted = false, Xe(() => {
      _(), delete t.el.__isMounted;
    }, s)) : _();
  } else {
    if (Ka(t.props) && e.el.__isMounted === false) {
      Xe(() => {
        Zu.process(e, t, n, r, i, s, o, a, l, u);
      }, s);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, E = t.target = e.target, T = t.targetAnchor = e.targetAnchor, _ = Rr(e.props), V = _ ? n : E, R = _ ? x : T;
    if (o === "svg" || Ya(E) ? o = "svg" : (o === "mathml" || qa(E)) && (o = "mathml"), w ? (d(e.dynamicChildren, w, V, i, s, o, a), sa(e, t, true)) : l || f(e, t, V, R, i, s, o, a, false), v) _ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ai(t, n, x, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const F = t.target = ao(t.props, b);
      F && Ai(t, F, null, u, 0);
    } else _ && Ai(t, E, T, u, 1);
    Pi(t, v);
  }
}, remove(e, t, n, { um: r, o: { remove: i } }, s) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
  if (f && (i(u), i(c)), s && i(l), o & 16) {
    const m = s || !Rr(d);
    for (let b = 0; b < a.length; b++) {
      const g = a[b];
      r(g, t, n, m, !!g.dynamicChildren);
    }
  }
}, move: Ai, hydrate: lh };
function Ai(e, t, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
  if (f && r(o, t, n), (!f || Rr(c)) && l & 16) for (let d = 0; d < u.length; d++) i(u[d], t, n, 2);
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
  const b = t.target = ao(t.props, l), g = Rr(t.props);
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
const Ft = Symbol("_leaveCb"), _r = Symbol("_enterCb");
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
  const n = li(), r = Ku();
  return () => {
    const i = t.default && ta(t.default(), true);
    if (!i || !i.length) return;
    const s = Xu(i), o = te(e), { mode: a } = o;
    if (r.isLeaving) return Is(s);
    const l = Xa(s);
    if (!l) return Is(s);
    let u = Gr(l, o, r, n, (f) => u = f);
    l.type !== tt && In(l, u);
    let c = n.subTree && Xa(n.subTree);
    if (c && c.type !== tt && !Ln(c, l) && qu(n).type !== tt) {
      let f = Gr(c, o, r, n);
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
function Gr(e, t, n, r, i) {
  const { appear: s, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: m, onAfterLeave: b, onLeaveCancelled: g, onBeforeAppear: S, onAppear: v, onAfterAppear: y, onAppearCancelled: A } = t, w = String(e.key), x = Ju(n, e), E = (V, R) => {
    V && Tt(V, r, 9, R);
  }, T = (V, R) => {
    const F = R[1];
    E(V, R), se(V) ? V.every((P) => P.length <= 1) && F() : V.length <= 1 && F();
  }, _ = { mode: o, persisted: a, beforeEnter(V) {
    let R = l;
    if (!n.isMounted) if (s) R = S || l;
    else return;
    V[Ft] && V[Ft](true);
    const F = x[w];
    F && Ln(e, F) && F.el[Ft] && F.el[Ft](), E(R, [V]);
  }, enter(V) {
    if (x[w] === e) return;
    let R = u, F = c, P = f;
    if (!n.isMounted) if (s) R = v || u, F = y || c, P = A || f;
    else return;
    let H = false;
    V[_r] = (z) => {
      H || (H = true, z ? E(P, [V]) : E(F, [V]), _.delayedLeave && _.delayedLeave(), V[_r] = void 0);
    };
    const Y = V[_r].bind(null, false);
    R ? T(R, [V, Y]) : Y();
  }, leave(V, R) {
    const F = String(e.key);
    if (V[_r] && V[_r](true), n.isUnmounting) return R();
    E(d, [V]);
    let P = false;
    V[Ft] = (Y) => {
      P || (P = true, R(), Y ? E(g, [V]) : E(b, [V]), V[Ft] = void 0, x[F] === e && delete x[F]);
    };
    const H = V[Ft].bind(null, false);
    x[F] = e, m ? T(m, [V, H]) : H();
  }, clone(V) {
    const R = Gr(V, t, n, r, i);
    return i && i(R), R;
  } };
  return _;
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
    o.type === we ? (o.patchFlag & 128 && i++, r = r.concat(ta(o.children, t, a))) : (t || o.type !== tt) && r.push(a != null ? hn(o, { key: a }) : o);
  }
  if (i > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
function Ye(e, t) {
  return ue(e) ? je({ name: e.name }, t, { setup: e }) : e;
}
function oi() {
  const e = li();
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
function Ir(e, t, n, r, i = false) {
  if (se(e)) {
    e.forEach((g, S) => Ir(g, t && (se(t) ? t[S] : t), n, r, i));
    return;
  }
  if (Kn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ir(e, t, n, r.component.subTree);
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
  if (ue(l)) si(l, a, 12, [o, c]);
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
      const a = ci(n), l = Tt(t, n, e, o);
      return a(), tn(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const rn = (e) => (t, n = nt) => {
  (!Kr || e === "sp") && ds(e, (...r) => t(...r), n);
}, ms = rn("bm"), Wt = rn("m"), hh = rn("bu"), na = rn("u"), zt = rn("bum"), On = rn("um"), gh = rn("sp"), vh = rn("rtg"), ph = rn("rtc");
function yh(e, t = nt) {
  ds("ec", e, t);
}
const nf = "components";
function rf(e, t) {
  return sf(nf, e, true, t) || e;
}
const bh = Symbol.for("v-ndc");
function wh(e) {
  return De(e) && sf(nf, e, false) || e;
}
function sf(e, t, n = true, r = false) {
  const i = Ke || nt;
  if (i) {
    const s = i.type;
    {
      const a = i1(s, false);
      if (a && (a === t || a === wt(t) || a === dr(wt(t)))) return s;
    }
    const o = el(i[e] || s[e], t) || el(i.appContext[e], t);
    return !o && r ? s : o;
  }
}
function el(e, t) {
  return e && (e[t] || e[wt(t)] || e[dr(wt(t))]);
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
function _h(e, t, n = {}, r, i) {
  if (Ke.ce || Ke.parent && Kn(Ke.parent) && Ke.parent.ce) {
    const u = Object.keys(n).length > 0;
    return le(), rr(we, null, [M("slot", n, r)], u ? -2 : 64);
  }
  let s = e[t];
  s && s._c && (s._d = false), le();
  const o = s && of(s(n)), a = n.key || o && o.key, l = rr(we, { key: (a && !kt(a) ? a : `_${t}`) + (!o && r ? "_fb" : "") }, o || [], o && e._ === 1 ? 64 : -2);
  return s && s._c && (s._d = true), l;
}
function of(e) {
  return e.some((t) => Zr(t) ? !(t.type === tt || t.type === we && !of(t.children)) : true) ? e : null;
}
const co = (e) => e ? Af(e) ? gs(e) : co(e.parent) : null, Or = je(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => co(e.parent), $root: (e) => co(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => lf(e), $forceUpdate: (e) => e.f || (e.f = () => {
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
  const u = Or[t];
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
  return !!(n[a] || e !== Ee && a[0] !== "$" && xe(e, a) || Os(t, a) || xe(s, a) || xe(r, a) || xe(Or, a) || xe(i.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
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
  const { data: i, computed: s, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: b, activated: g, deactivated: S, beforeDestroy: v, beforeUnmount: y, destroyed: A, unmounted: w, render: x, renderTracked: E, renderTriggered: T, errorCaptured: _, serverPrefetch: V, expose: R, inheritAttrs: F, components: P, directives: H, filters: Y } = t;
  if (u && xh(u, r, null), o) for (const Q in o) {
    const oe = o[Q];
    ue(oe) && (r[Q] = oe.bind(n));
  }
  if (i) {
    const Q = i.call(n, n);
    Se(Q) && (e.data = Ue(Q));
  }
  if (uo = true, s) for (const Q in s) {
    const oe = s[Q], Oe = ue(oe) ? oe.bind(n, n) : ue(oe.get) ? oe.get.bind(n, n) : jt, _e = !ue(oe) && ue(oe.set) ? oe.set.bind(n) : jt, ae = $({ get: Oe, set: _e });
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
  if (J(ms, f), J(Wt, d), J(hh, m), J(na, b), J(dh, g), J(ef, S), J(yh, _), J(ph, E), J(vh, T), J(zt, y), J(On, w), J(gh, V), se(R)) if (R.length) {
    const Q = e.exposed || (e.exposed = {});
    R.forEach((oe) => {
      Object.defineProperty(Q, oe, { get: () => n[oe], set: (Oe) => n[oe] = Oe, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === jt && (e.render = x), F != null && (e.inheritAttrs = F), P && (e.components = P), H && (e.directives = H), V && Qu(e);
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
    ue(s) && ce(i, s);
  } else if (ue(e)) ce(i, e.bind(n));
  else if (Se(e)) if (se(e)) e.forEach((s) => af(s, t, n, r));
  else {
    const s = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
    ue(s) && ce(i, s, e);
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
const Ah = { data: rl, props: il, emits: il, methods: kr, computed: kr, beforeCreate: ot, created: ot, beforeMount: ot, mounted: ot, beforeUpdate: ot, updated: ot, beforeDestroy: ot, beforeUnmount: ot, destroyed: ot, unmounted: ot, activated: ot, deactivated: ot, errorCaptured: ot, serverPrefetch: ot, components: kr, directives: kr, watch: Eh, provide: rl, inject: Lh };
function rl(e, t) {
  return t ? e ? function() {
    return je(ue(e) ? e.call(this, this) : e, ue(t) ? t.call(this, this) : t);
  } : t : e;
}
function Lh(e, t) {
  return kr(fo(e), fo(t));
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
function kr(e, t) {
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
const Th = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];
function Ph(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ee;
  let i = n;
  const s = t.startsWith("update:"), o = s && Th(r, t.slice(7));
  o && (o.trim && (i = n.map((c) => De(c) ? c.trim() : c)), o.number && (i = n.map(bm)));
  let a, l = r[a = Es(t)] || r[a = Es(wt(t))];
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
  const { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: m, ctx: b, inheritAttrs: g } = e, S = Ni(e);
  let v, y;
  try {
    if (n.shapeFlag & 4) {
      const w = i || r, x = w;
      v = Nt(u.call(x, w, c, f, m, d, b)), y = a;
    } else {
      const w = t;
      v = Nt(w.length > 1 ? w(f, { attrs: a, slots: o, emit: l }) : w(f, null)), y = t.props ? a : Ih(a);
    }
  } catch (w) {
    Vr.length = 0, us(w, e, 1), v = M(tt);
  }
  let A = v;
  if (y && g !== false) {
    const w = Object.keys(y), { shapeFlag: x } = A;
    w.length && x & 7 && (s && w.some(zo) && (y = Oh(y, s)), A = hn(A, y, false, true));
  }
  return n.dirs && (A = hn(A, null, false, true), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && In(A, n.transition), v = A, Ni(S), v;
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
function $h(e, t, n, r) {
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
          const b = wt(d);
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
    if (Mr(l)) continue;
    const u = t[l];
    let c;
    i && xe(i, c = wt(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : hs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = true);
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
          const c = ci(i);
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
    const f = wt(s[c]);
    al(f) && (o[f] = Ee);
  }
  else if (s) for (const c in s) {
    const f = wt(c);
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
  return e[0] !== "$" && !Mr(e);
}
const ra = (e) => e === "_" || e === "_ctx" || e === "$stable", ia = (e) => se(e) ? e.map(Nt) : [Nt(e)], Nh = (e, t, n) => {
  if (t._n) return t;
  const r = Ne((...i) => ia(t(...i)), n);
  return r._c = false, r;
}, pf = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ra(i)) continue;
    const s = e[i];
    if (ue(s)) t[i] = Nh(i, s, r);
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
  const { insert: r, remove: i, patchProp: s, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m = jt, insertStaticContent: b } = e, g = (h, p, C, I = null, D = null, O = null, K = void 0, U = null, W = !!p.dynamicChildren) => {
    if (h === p) return;
    h && !Ln(h, p) && (I = L(h), he(h, D, O, true), h = null), p.patchFlag === -2 && (W = false, p.dynamicChildren = null);
    const { type: N, ref: ie, shapeFlag: q } = p;
    switch (N) {
      case ai:
        S(h, p, C, I);
        break;
      case tt:
        v(h, p, C, I);
        break;
      case Ds:
        h == null && y(p, C, I, K);
        break;
      case we:
        P(h, p, C, I, D, O, K, U, W);
        break;
      default:
        q & 1 ? x(h, p, C, I, D, O, K, U, W) : q & 6 ? H(h, p, C, I, D, O, K, U, W) : (q & 64 || q & 128) && N.process(h, p, C, I, D, O, K, U, W, Z);
    }
    ie != null && D ? Ir(ie, h && h.ref, O, p || h, !p) : ie == null && h && h.ref != null && Ir(h.ref, null, O, h, true);
  }, S = (h, p, C, I) => {
    if (h == null) r(p.el = a(p.children), C, I);
    else {
      const D = p.el = h.el;
      p.children !== h.children && u(D, p.children);
    }
  }, v = (h, p, C, I) => {
    h == null ? r(p.el = l(p.children || ""), C, I) : p.el = h.el;
  }, y = (h, p, C, I) => {
    [h.el, h.anchor] = b(h.children, p, C, I, h.el, h.anchor);
  }, A = ({ el: h, anchor: p }, C, I) => {
    let D;
    for (; h && h !== p; ) D = d(h), r(h, C, I), h = D;
    r(p, C, I);
  }, w = ({ el: h, anchor: p }) => {
    let C;
    for (; h && h !== p; ) C = d(h), i(h), h = C;
    i(p);
  }, x = (h, p, C, I, D, O, K, U, W) => {
    if (p.type === "svg" ? K = "svg" : p.type === "math" && (K = "mathml"), h == null) E(p, C, I, D, O, K, U, W);
    else {
      const N = h.el && h.el._isVueCE ? h.el : null;
      try {
        N && N._beginPatch(), V(h, p, D, O, K, U, W);
      } finally {
        N && N._endPatch();
      }
    }
  }, E = (h, p, C, I, D, O, K, U) => {
    let W, N;
    const { props: ie, shapeFlag: q, transition: ee, dirs: fe } = h;
    if (W = h.el = o(h.type, O, ie && ie.is, ie), q & 8 ? c(W, h.children) : q & 16 && _(h.children, W, null, I, D, Vs(h, O), K, U), fe && yn(h, null, I, "created"), T(W, h, h.scopeId, K, I), ie) {
      for (const Me in ie) Me !== "value" && !Mr(Me) && s(W, Me, null, ie[Me], O, I);
      "value" in ie && s(W, "value", null, ie.value, O), (N = ie.onVnodeBeforeMount) && Dt(N, I, h);
    }
    fe && yn(h, null, I, "beforeMount");
    const be = Gh(D, ee);
    be && ee.beforeEnter(W), r(W, p, C), ((N = ie && ie.onVnodeMounted) || be || fe) && Xe(() => {
      N && Dt(N, I, h), be && ee.enter(W), fe && yn(h, null, I, "mounted");
    }, D);
  }, T = (h, p, C, I, D) => {
    if (C && m(h, C), I) for (let O = 0; O < I.length; O++) m(h, I[O]);
    if (D) {
      let O = D.subTree;
      if (p === O || Sf(O.type) && (O.ssContent === p || O.ssFallback === p)) {
        const K = D.vnode;
        T(h, K, K.scopeId, K.slotScopeIds, D.parent);
      }
    }
  }, _ = (h, p, C, I, D, O, K, U, W = 0) => {
    for (let N = W; N < h.length; N++) {
      const ie = h[N] = U ? qt(h[N]) : Nt(h[N]);
      g(null, ie, p, C, I, D, O, K, U);
    }
  }, V = (h, p, C, I, D, O, K) => {
    const U = p.el = h.el;
    let { patchFlag: W, dynamicChildren: N, dirs: ie } = p;
    W |= h.patchFlag & 16;
    const q = h.props || Ee, ee = p.props || Ee;
    let fe;
    if (C && bn(C, false), (fe = ee.onVnodeBeforeUpdate) && Dt(fe, C, p, h), ie && yn(p, h, C, "beforeUpdate"), C && bn(C, true), (q.innerHTML && ee.innerHTML == null || q.textContent && ee.textContent == null) && c(U, ""), N ? R(h.dynamicChildren, N, U, C, I, Vs(p, D), O) : K || oe(h, p, U, null, C, I, Vs(p, D), O, false), W > 0) {
      if (W & 16) F(U, q, ee, C, D);
      else if (W & 2 && q.class !== ee.class && s(U, "class", null, ee.class, D), W & 4 && s(U, "style", q.style, ee.style, D), W & 8) {
        const be = p.dynamicProps;
        for (let Me = 0; Me < be.length; Me++) {
          const Ae = be[Me], ut = q[Ae], ft = ee[Ae];
          (ft !== ut || Ae === "value") && s(U, Ae, ut, ft, D, C);
        }
      }
      W & 1 && h.children !== p.children && c(U, p.children);
    } else !K && N == null && F(U, q, ee, C, D);
    ((fe = ee.onVnodeUpdated) || ie) && Xe(() => {
      fe && Dt(fe, C, p, h), ie && yn(p, h, C, "updated");
    }, I);
  }, R = (h, p, C, I, D, O, K) => {
    for (let U = 0; U < p.length; U++) {
      const W = h[U], N = p[U], ie = W.el && (W.type === we || !Ln(W, N) || W.shapeFlag & 198) ? f(W.el) : C;
      g(W, N, ie, null, I, D, O, K, true);
    }
  }, F = (h, p, C, I, D) => {
    if (p !== C) {
      if (p !== Ee) for (const O in p) !Mr(O) && !(O in C) && s(h, O, p[O], null, D, I);
      for (const O in C) {
        if (Mr(O)) continue;
        const K = C[O], U = p[O];
        K !== U && O !== "value" && s(h, O, U, K, D, I);
      }
      "value" in C && s(h, "value", p.value, C.value, D);
    }
  }, P = (h, p, C, I, D, O, K, U, W) => {
    const N = p.el = h ? h.el : a(""), ie = p.anchor = h ? h.anchor : a("");
    let { patchFlag: q, dynamicChildren: ee, slotScopeIds: fe } = p;
    fe && (U = U ? U.concat(fe) : fe), h == null ? (r(N, C, I), r(ie, C, I), _(p.children || [], C, ie, D, O, K, U, W)) : q > 0 && q & 64 && ee && h.dynamicChildren && h.dynamicChildren.length === ee.length ? (R(h.dynamicChildren, ee, C, D, O, K, U), (p.key != null || D && p === D.subTree) && sa(h, p, true)) : oe(h, p, C, ie, D, O, K, U, W);
  }, H = (h, p, C, I, D, O, K, U, W) => {
    p.slotScopeIds = U, h == null ? p.shapeFlag & 512 ? D.ctx.activate(p, C, I, K, W) : Y(p, C, I, D, O, K, W) : z(h, p, W);
  }, Y = (h, p, C, I, D, O, K) => {
    const U = h.component = Qh(h, I, D);
    if (fs(h) && (U.ctx.renderer = Z), e1(U, false, K), U.asyncDep) {
      if (D && D.registerDep(U, J, K), !h.el) {
        const W = U.subTree = M(tt);
        v(null, W, p, C), h.placeholder = W.el;
      }
    } else J(U, h, p, C, D, O, K);
  }, z = (h, p, C) => {
    const I = p.component = h.component;
    if (Vh(h, p, C)) if (I.asyncDep && !I.asyncResolved) {
      Q(I, p, C);
      return;
    } else I.next = p, I.update();
    else p.el = h.el, I.vnode = p;
  }, J = (h, p, C, I, D, O, K) => {
    const U = () => {
      if (h.isMounted) {
        let { next: q, bu: ee, u: fe, parent: be, vnode: Me } = h;
        {
          const Ot = wf(h);
          if (Ot) {
            q && (q.el = Me.el, Q(h, q, K)), Ot.asyncDep.then(() => {
              Xe(() => {
                h.isUnmounted || N();
              }, D);
            });
            return;
          }
        }
        let Ae = q, ut;
        bn(h, false), q ? (q.el = Me.el, Q(h, q, K)) : q = Me, ee && ks(ee), (ut = q.props && q.props.onVnodeBeforeUpdate) && Dt(ut, be, q, Me), bn(h, true);
        const ft = sl(h), It = h.subTree;
        h.subTree = ft, g(It, ft, f(It.el), L(It), h, D, O), q.el = ft.el, Ae === null && Dh(h, ft.el), fe && Xe(fe, D), (ut = q.props && q.props.onVnodeUpdated) && Xe(() => Dt(ut, be, q, Me), D);
      } else {
        let q;
        const { el: ee, props: fe } = p, { bm: be, m: Me, parent: Ae, root: ut, type: ft } = h, It = Kn(p);
        bn(h, false), be && ks(be), !It && (q = fe && fe.onVnodeBeforeMount) && Dt(q, Ae, p), bn(h, true);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(ft);
          const Ot = h.subTree = sl(h);
          g(null, Ot, C, I, h, D, O), p.el = Ot.el;
        }
        if (Me && Xe(Me, D), !It && (q = fe && fe.onVnodeMounted)) {
          const Ot = p;
          Xe(() => Dt(q, Ae, Ot), D);
        }
        (p.shapeFlag & 256 || Ae && Kn(Ae.vnode) && Ae.vnode.shapeFlag & 256) && h.a && Xe(h.a, D), h.isMounted = true, p = C = I = null;
      }
    };
    h.scope.on();
    const W = h.effect = new wu(U);
    h.scope.off();
    const N = h.update = W.run.bind(W), ie = h.job = W.runIfDirty.bind(W);
    ie.i = h, ie.id = h.uid, W.scheduler = () => Qo(ie), bn(h, true), N();
  }, Q = (h, p, C) => {
    p.component = h;
    const I = h.vnode.props;
    h.vnode = p, h.next = null, $h(h, p.props, I, C), jh(h, p.children, C), en(), Za(h), tn();
  }, oe = (h, p, C, I, D, O, K, U, W = false) => {
    const N = h && h.children, ie = h ? h.shapeFlag : 0, q = p.children, { patchFlag: ee, shapeFlag: fe } = p;
    if (ee > 0) {
      if (ee & 128) {
        _e(N, q, C, I, D, O, K, U, W);
        return;
      } else if (ee & 256) {
        Oe(N, q, C, I, D, O, K, U, W);
        return;
      }
    }
    fe & 8 ? (ie & 16 && $e(N, D, O), q !== N && c(C, q)) : ie & 16 ? fe & 16 ? _e(N, q, C, I, D, O, K, U, W) : $e(N, D, O, true) : (ie & 8 && c(C, ""), fe & 16 && _(q, C, I, D, O, K, U, W));
  }, Oe = (h, p, C, I, D, O, K, U, W) => {
    h = h || Gn, p = p || Gn;
    const N = h.length, ie = p.length, q = Math.min(N, ie);
    let ee;
    for (ee = 0; ee < q; ee++) {
      const fe = p[ee] = W ? qt(p[ee]) : Nt(p[ee]);
      g(h[ee], fe, C, null, D, O, K, U, W);
    }
    N > ie ? $e(h, D, O, true, false, q) : _(p, C, I, D, O, K, U, W, q);
  }, _e = (h, p, C, I, D, O, K, U, W) => {
    let N = 0;
    const ie = p.length;
    let q = h.length - 1, ee = ie - 1;
    for (; N <= q && N <= ee; ) {
      const fe = h[N], be = p[N] = W ? qt(p[N]) : Nt(p[N]);
      if (Ln(fe, be)) g(fe, be, C, null, D, O, K, U, W);
      else break;
      N++;
    }
    for (; N <= q && N <= ee; ) {
      const fe = h[q], be = p[ee] = W ? qt(p[ee]) : Nt(p[ee]);
      if (Ln(fe, be)) g(fe, be, C, null, D, O, K, U, W);
      else break;
      q--, ee--;
    }
    if (N > q) {
      if (N <= ee) {
        const fe = ee + 1, be = fe < ie ? p[fe].el : I;
        for (; N <= ee; ) g(null, p[N] = W ? qt(p[N]) : Nt(p[N]), C, be, D, O, K, U, W), N++;
      }
    } else if (N > ee) for (; N <= q; ) he(h[N], D, O, true), N++;
    else {
      const fe = N, be = N, Me = /* @__PURE__ */ new Map();
      for (N = be; N <= ee; N++) {
        const mt = p[N] = W ? qt(p[N]) : Nt(p[N]);
        mt.key != null && Me.set(mt.key, N);
      }
      let Ae, ut = 0;
      const ft = ee - be + 1;
      let It = false, Ot = 0;
      const br = new Array(ft);
      for (N = 0; N < ft; N++) br[N] = 0;
      for (N = fe; N <= q; N++) {
        const mt = h[N];
        if (ut >= ft) {
          he(mt, D, O, true);
          continue;
        }
        let Vt;
        if (mt.key != null) Vt = Me.get(mt.key);
        else for (Ae = be; Ae <= ee; Ae++) if (br[Ae - be] === 0 && Ln(mt, p[Ae])) {
          Vt = Ae;
          break;
        }
        Vt === void 0 ? he(mt, D, O, true) : (br[Vt - be] = N + 1, Vt >= Ot ? Ot = Vt : It = true, g(mt, p[Vt], C, null, D, O, K, U, W), ut++);
      }
      const Na = It ? Uh(br) : Gn;
      for (Ae = Na.length - 1, N = ft - 1; N >= 0; N--) {
        const mt = be + N, Vt = p[mt], Ba = p[mt + 1], ja = mt + 1 < ie ? Ba.el || _f(Ba) : I;
        br[N] === 0 ? g(null, Vt, C, ja, D, O, K, U, W) : It && (Ae < 0 || N !== Na[Ae] ? ae(Vt, C, ja, 2) : Ae--);
      }
    }
  }, ae = (h, p, C, I, D = null) => {
    const { el: O, type: K, transition: U, children: W, shapeFlag: N } = h;
    if (N & 6) {
      ae(h.component.subTree, p, C, I);
      return;
    }
    if (N & 128) {
      h.suspense.move(p, C, I);
      return;
    }
    if (N & 64) {
      K.move(h, p, C, Z);
      return;
    }
    if (K === we) {
      r(O, p, C);
      for (let q = 0; q < W.length; q++) ae(W[q], p, C, I);
      r(h.anchor, p, C);
      return;
    }
    if (K === Ds) {
      A(h, p, C);
      return;
    }
    if (I !== 2 && N & 1 && U) if (I === 0) U.beforeEnter(O), r(O, p, C), Xe(() => U.enter(O), D);
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
  }, he = (h, p, C, I = false, D = false) => {
    const { type: O, props: K, ref: U, children: W, dynamicChildren: N, shapeFlag: ie, patchFlag: q, dirs: ee, cacheIndex: fe } = h;
    if (q === -2 && (D = false), U != null && (en(), Ir(U, null, C, h, true), tn()), fe != null && (p.renderCache[fe] = void 0), ie & 256) {
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
      be && yn(h, null, p, "beforeUnmount"), ie & 64 ? h.type.remove(h, p, C, Z, I) : N && !N.hasOnce && (O !== we || q > 0 && q & 64) ? $e(N, p, C, false, true) : (O === we && q & 384 || !D && ie & 16) && $e(W, p, C), I && de(h);
    }
    (Me && (Ae = K && K.onVnodeUnmounted) || be) && Xe(() => {
      Ae && Dt(Ae, p, h), be && yn(h, null, p, "unmounted");
    }, C);
  }, de = (h) => {
    const { type: p, el: C, anchor: I, transition: D } = h;
    if (p === we) {
      Be(C, I);
      return;
    }
    if (p === Ds) {
      w(h);
      return;
    }
    const O = () => {
      i(C), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (h.shapeFlag & 1 && D && !D.persisted) {
      const { leave: K, delayLeave: U } = D, W = () => K(C, O);
      U ? U(h.el, O, W) : W();
    } else O();
  }, Be = (h, p) => {
    let C;
    for (; h !== p; ) C = d(h), i(h), h = C;
    i(p);
  }, Ge = (h, p, C) => {
    const { bum: I, scope: D, job: O, subTree: K, um: U, m: W, a: N } = h;
    ll(W), ll(N), I && ks(I), D.stop(), O && (O.flags |= 8, he(K, h, p, C)), U && Xe(U, p), Xe(() => {
      h.isUnmounted = true;
    }, p);
  }, $e = (h, p, C, I = false, D = false, O = 0) => {
    for (let K = O; K < h.length; K++) he(h[K], p, C, I, D);
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
  }, Z = { p: g, um: he, m: ae, r: de, mt: Y, mc: _, pc: oe, pbc: R, n: L, o: e };
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
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = qt(i[s]), a.el = o.el), !n && a.patchFlag !== -2 && sa(o, a)), a.type === ai && (a.patchFlag === -1 && (a = i[s] = qt(a)), a.el = o.el), a.type === tt && !a.el && (a.el = o.el);
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
function wf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : wf(t);
}
function ll(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function _f(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? _f(t.subTree) : null;
}
const Sf = (e) => e.__isSuspense;
function Zh(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : ih(e);
}
const we = Symbol.for("v-fgt"), ai = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), Ds = Symbol.for("v-stc"), Vr = [];
let vt = null;
function le(e = false) {
  Vr.push(vt = e ? null : []);
}
function Kh() {
  Vr.pop(), vt = Vr[Vr.length - 1] || null;
}
let Ur = 1;
function Wi(e, t = false) {
  Ur += e, e < 0 && vt && t && (vt.hasOnce = true);
}
function Cf(e) {
  return e.dynamicChildren = Ur > 0 ? vt || Gn : null, Kh(), Ur > 0 && vt && vt.push(e), e;
}
function me(e, t, n, r, i, s) {
  return Cf(k(e, t, n, r, i, s, true));
}
function rr(e, t, n, r, i) {
  return Cf(M(e, t, n, r, i, true));
}
function Zr(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xf = ({ key: e }) => e ?? null, Ri = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? De(e) || Ve(e) || ue(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, r = 0, i = null, s = e === we ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && xf(t), ref: t && Ri(t), scopeId: Wu, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: r, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Ke };
  return a ? (oa(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= De(n) ? 8 : 16), Ur > 0 && !o && vt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && vt.push(l), l;
}
const M = Yh;
function Yh(e, t = null, n = null, r = 0, i = null, s = false) {
  if ((!e || e === bh) && (e = tt), Zr(e)) {
    const a = hn(e, t, true);
    return n && oa(a, n), Ur > 0 && !s && vt && (a.shapeFlag & 6 ? vt[vt.indexOf(e)] = a : vt.push(a)), a.patchFlag = -2, a;
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
  const { props: i, ref: s, patchFlag: o, children: a, transition: l } = e, u = t ? Re(i || {}, t) : i, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && xf(u), ref: t && t.ref ? n && s ? se(s) ? s.concat(Ri(t)) : [s, Ri(t)] : Ri(t) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && hn(e.ssContent), ssFallback: e.ssFallback && hn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && r && In(c, l.clone(c)), c;
}
function qn(e = " ", t = 0) {
  return M(ai, null, e, t);
}
function ir(e = "", t = false) {
  return t ? (le(), rr(tt, null, e)) : M(tt, null, e);
}
function Nt(e) {
  return e == null || typeof e == "boolean" ? M(tt) : se(e) ? M(we, null, e.slice()) : Zr(e) ? qt(e) : M(ai, null, String(e));
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
const li = () => nt || Ke;
let zi, ho;
{
  const e = as(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  zi = t("__VUE_INSTANCE_SETTERS__", (n) => nt = n), ho = t("__VUE_SSR_SETTERS__", (n) => Kr = n);
}
const ci = (e) => {
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
let Kr = false;
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
    const i = e.setupContext = r.length > 1 ? r1(e) : null, s = ci(e), o = si(r, e, 0, [e.props, i]), a = fu(o);
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
    const i = ci(e);
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
    if (n in Or) return Or[n](e);
  }, has(t, n) {
    return n in t || n in Or;
  } })) : e.proxy;
}
function i1(e, t = true) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function s1(e) {
  return ue(e) && "__vccOpts" in e;
}
const $ = (e, t) => Qm(e, t, Kr);
function vn(e, t, n) {
  try {
    Wi(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !se(t) ? Zr(t) ? M(e, null, [t]) : M(e, t) : M(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Zr(n) && (n = [n]), M(e, t, n));
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
} }, on = "transition", Sr = "animation", sr = Symbol("_vtc"), kf = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Mf = je({}, Yu, kf), u1 = (e) => (e.displayName = "Transition", e.props = Mf, e), or = u1((e, { slots: t }) => vn(fh, Tf(e), t)), wn = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ml = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Tf(e) {
  const t = {};
  for (const P in e) P in kf || (t[P] = e[P]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: i, enterFromClass: s = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, b = f1(i), g = b && b[0], S = b && b[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: A, onLeave: w, onLeaveCancelled: x, onBeforeAppear: E = v, onAppear: T = y, onAppearCancelled: _ = A } = t, V = (P, H, Y, z) => {
    P._enterCancelled = z, ln(P, H ? c : a), ln(P, H ? u : o), Y && Y();
  }, R = (P, H) => {
    P._isLeaving = false, ln(P, f), ln(P, m), ln(P, d), H && H();
  }, F = (P) => (H, Y) => {
    const z = P ? T : y, J = () => V(H, P, Y);
    wn(z, [H, J]), hl(() => {
      ln(H, P ? l : s), Ht(H, P ? c : a), ml(z) || gl(H, r, g, J);
    });
  };
  return je(t, { onBeforeEnter(P) {
    wn(v, [P]), Ht(P, s), Ht(P, o);
  }, onBeforeAppear(P) {
    wn(E, [P]), Ht(P, l), Ht(P, u);
  }, onEnter: F(false), onAppear: F(true), onLeave(P, H) {
    P._isLeaving = true;
    const Y = () => R(P, H);
    Ht(P, f), P._enterCancelled ? (Ht(P, d), vo(P)) : (vo(P), Ht(P, d)), hl(() => {
      P._isLeaving && (ln(P, f), Ht(P, m), ml(w) || gl(P, r, S, Y));
    }), wn(w, [P, Y]);
  }, onEnterCancelled(P) {
    V(P, false, void 0, true), wn(A, [P]);
  }, onAppearCancelled(P) {
    V(P, true, void 0, true), wn(_, [P]);
  }, onLeaveCancelled(P) {
    R(P), wn(x, [P]);
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
  return wm(e);
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
  const n = window.getComputedStyle(e), r = (b) => (n[b] || "").split(", "), i = r(`${on}Delay`), s = r(`${on}Duration`), o = vl(i, s), a = r(`${Sr}Delay`), l = r(`${Sr}Duration`), u = vl(a, l);
  let c = null, f = 0, d = 0;
  t === on ? o > 0 && (c = on, f = o, d = s.length) : t === Sr ? u > 0 && (c = Sr, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? on : Sr : null, d = c ? c === on ? s.length : l.length : 0);
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
  e[Gi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Cr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Cr(e, true), r.enter(e)) : r.leave(e, () => {
    Cr(e, false);
  }) : Cr(e, t));
}, beforeUnmount(e, { value: t }) {
  Cr(e, t);
} };
function Cr(e, t) {
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
const bl = ["Webkit", "Moz", "ms"], $s = {};
function p1(e, t) {
  const n = $s[t];
  if (n) return n;
  let r = wt(t);
  if (r !== "filter" && r in e) return $s[t] = r;
  r = dr(r);
  for (let i = 0; i < bl.length; i++) {
    const s = bl[i] + r;
    if (s in e) return $s[t] = s;
  }
  return t;
}
const wl = "http://www.w3.org/1999/xlink";
function _l(e, t, n, r, i, s = Lm(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wl, t.slice(6, t.length)) : e.setAttributeNS(wl, t, n) : n == null || s && !gu(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : kt(n) ? String(n) : n);
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
function w1(e, t, n, r, i = null) {
  const s = e[Cl] || (e[Cl] = {}), o = s[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = _1(t);
    if (r) {
      const u = s[t] = x1(r, i);
      y1(e, a, u, l);
    } else o && (b1(e, a, o, l), s[t] = void 0);
  }
}
const xl = /(?:Once|Passive|Capture)$/;
function _1(e) {
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
  t === "class" ? m1(e, r, o) : t === "style" ? v1(e, n, r) : is(t) ? zo(t) || w1(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : E1(e, t, r, o)) ? (Sl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _l(e, t, r, o, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !De(r)) ? Sl(e, wt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), _l(e, t, r, o));
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
  const n = li(), r = Ku();
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
    let l = o.tag || we;
    if (i = [], s) for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.el && c.el instanceof Element && (i.push(c), In(c, Gr(c, a, r, n)), If.set(c, Vf(c.el)));
    }
    s = t.default ? ta(t.default()) : [];
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      c.key != null && In(c, Gr(c, a, r, n));
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
    const i = $1(r);
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
function $1(e) {
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
function N1(e, t) {
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
function Ns(e, t, n) {
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
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && Z1.has(t.style) ? t.style : "none", r = Ns(jn(t.widthCells) ?? 1, 1, 4), i = typeof t.opacity == "number" ? t.opacity : 1, s = Ns(i, 0, 1), o = { style: n, widthCells: r, opacity: s };
  if (n === "fade") {
    const a = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    o.fadeStrength = Ns(a, 0, 1);
  }
  return n === "noted" && (o.notePitchCells = Math.max(1, jn(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (o.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), o;
}
function X1(e) {
  return typeof e == "boolean" ? e : true;
}
function Tl(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function $f(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, r = jn(n.x1), i = jn(n.y1), s = jn(n.x2), o = jn(n.y2);
  if (r === null || i === null || s === null || o === null) return null;
  const a = Math.min(r, s), l = Math.max(r, s), u = Math.min(i, o), c = Math.max(i, o);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : K1(), x1: a, y1: u, x2: l, y2: c, mode: Y1(n.mode), edge: q1(n.edge), enabled: X1(n.enabled), createdAt: Tl(n.createdAt, t), updatedAt: Tl(n.updatedAt, t) };
}
function Ff(e, t = Date.now()) {
  return G1(e, $f, z1, t);
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
  const { items: t, setItems: n, addItem: r, updateItem: i, removeItem: s, clearItems: o, syncFromWorker: a } = ng({ storage: { load: Q1, save: eg, clear: tg }, normalize: Ff, normalizeOne: $f, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
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
    const f = new Worker(new URL("/assets/backgroundRenderer-BdXzG2nH.js", import.meta.url), { type: "module" });
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
    const y = e.cellToScreen(S.x1, S.y1, v), A = e.cellSpanToCssPx(S.x2 - S.x1 + 1, v), w = e.cellSpanToCssPx(S.y2 - S.y1 + 1, v);
    i.value = { left: `${y.cssX}px`, top: `${y.cssY}px`, width: `${A}px`, height: `${w}px` };
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
    for (const w of t.entries()) w[1].isEnabled() && (!v || w[1].priority > v[1].priority) && (v = w);
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
        const w = e.normalizeRect(s, y);
        r.value = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) ? e.snapRectToMajor(w, A) : w;
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
    let w;
    if (v.dragMode === "paint" && o) y && (o.x1 = Math.min(o.x1, y.cx), o.y1 = Math.min(o.y1, y.cy), o.x2 = Math.max(o.x2, y.cx), o.y2 = Math.max(o.y2, y.cy)), w = o;
    else if (y) {
      const E = e.normalizeRect(s, y);
      w = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) && A ? e.snapRectToMajor(E, A) : E;
    } else {
      c();
      return;
    }
    v.onCommit(w, A) === false || c();
  }
  function g() {
    return document.addEventListener("pointerdown", d), document.addEventListener("pointermove", m), document.addEventListener("pointerup", b), () => {
      document.removeEventListener("pointerdown", d), document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", b);
    };
  }
  return { register: a, activeTool: n, previewRect: r, previewStyle: i, cancelActiveDrag: f, anyToolEnabled: l, attachListeners: g };
}
const Rl = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, Il = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.6, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function _n(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Lt([e, t, n], r = 1) {
  return r === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${r.toFixed(3)})`;
}
function Ws([e, t, n], r = 1, i = 1) {
  const s = t * r;
  return i === 1 ? `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${s.toFixed(4)} ${n.toFixed(2)} / ${i.toFixed(3)})`;
}
const Nf = "theme-preference";
function ug() {
  var _a2;
  if (typeof window > "u") return "system";
  const e = (_a2 = window.localStorage) == null ? void 0 : _a2.getItem(Nf);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const Yr = X(ug()), Bf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    Bf.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
ce(Yr, (e) => {
  var _a2;
  typeof window < "u" && ((_a2 = window.localStorage) == null ? void 0 : _a2.setItem(Nf, e));
});
const po = $(() => Yr.value === "light" ? Rl : Yr.value === "dark" || Bf.value ? Il : Rl);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, r = (s, o) => {
      n.style.setProperty(s, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", r("--theme-surface", Lt(t.surface)), r("--theme-ink", Lt(t.ink)), r("--theme-ink-secondary", Lt(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-ink-tertiary", Lt(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-text-primary", Lt(t.ink)), r("--theme-text-secondary", Lt(_n(t.surface, t.ink, t.ink_secondary_t))), r("--theme-text-tertiary", Lt(_n(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-grid-minor", Lt(_n(t.surface, t.ink, t.minor_t))), r("--theme-grid-major", Lt(_n(t.surface, t.ink, t.major_t))), r("--theme-grid-border", Lt(_n(t.surface, t.ink, t.border_t))), r("--theme-accent", Ws(t.accent, t.accent_chroma_scale)), r("--theme-accent-ring", Ws(t.accent, t.accent_chroma_scale, 0.45)), r("--theme-selection-bg", Ws(t.accent, t.accent_chroma_scale, 0.2)), r("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const i = document.querySelector('meta[name="theme-color"]');
    i && i.setAttribute("content", Lt(t.surface));
  };
  e(po.value), ce(po, e);
}
function jf() {
  return { preference: Yr, theme: po, setPreference(e) {
    Yr.value = e;
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
  function w(R, F) {
    n = F, v(R, n, r), y(R), A(n), l !== null && clearTimeout(l), l = window.setTimeout(() => {
      l = null, e({ type: "resize", width: n, height: r }), y(R);
    }, 90);
  }
  function x(R) {
    a === null && (a = requestAnimationFrame(() => {
      a = null, !(o === 0 || o === n) && w(R, o);
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
      r = b(z), w(t, n);
    }), { offscreen: H, gridPitch: Y };
  }
  function _() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      f || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 1100));
  }
  function V() {
    f = true, i == null ? void 0 : i.disconnect(), u == null ? void 0 : u(), s !== null && (clearTimeout(s), s = null), a !== null && (cancelAnimationFrame(a), a = null), l !== null && (clearTimeout(l), l = null), t = null;
  }
  return { initialize: T, revealCanvas: _, teardown: V };
}
const Ol = ca("AppBackground");
function gg(e) {
  e.on("startup_breakdown", (t) => {
    const n = (s) => `${s.toFixed(0)}ms`, r = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], i = t.phases.newOffscreenPhases;
    i && (r.push("  new_offscreen sub-phases:"), r.push(`    device_request   ${n(i.deviceRequest)}`), r.push(`    panel_init       ${n(i.panelInit)}`), r.push(`    seeding          ${n(i.seeding)}`), r.push(`    simulation_init  ${n(i.simulationInit)}`), r.push(`    renderer_init    ${n(i.rendererInit)}`));
  }), e.on("gpu_pass_breakdown", (t) => {
    const n = (i) => i === null ? "\u2014" : `${i.toFixed(2)}ms`, r = t.durations;
    Ol.info(`GPU pass breakdown (frame ${t.frame}):
  compute_tick   ${n(r.computeTickMs)}
  xor_edit       ${n(r.xorEditMs)}
  or_edit        ${n(r.orEditMs)}
  render_pass    ${n(r.renderPassMs)}`);
  }), e.on("tick_breakdown", (t) => {
    Ol.info(`Tick breakdown (frame ${t.frame}):  reseed ${t.reseedMs.toFixed(1)}ms  \xB7  present ${t.presentMs.toFixed(1)}ms`);
  }), e.on("memory_breakdown", (t) => {
    const n = (o) => `${(o / 1048576).toFixed(2)} MB`, r = t.mem, i = [`Memory (frame ${t.frame}):`, `  GPU surface    ${r.canvasW}\xD7${r.canvasH} \xD7 4B = ${n(r.surfaceBytes)}  (\xD72\u20133 swapchain, browser-managed)`, `  GPU cells      ${n(r.cellBytes)}  (3 buffers)`, `  GPU noise      ${n(r.noiseBytes)}`];
    r.workerHeapBytes !== null && i.push(`  worker heap    ${n(r.workerHeapBytes)} used`);
    const s = performance.memory;
    s && i.push(`  main heap      ${n(s.usedJSHeapSize)} / ${n(s.totalJSHeapSize)}  (limit ${n(s.jsHeapSizeLimit)})`);
  });
}
var vg = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z", pg = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Wf = "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z", yg = "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M13 13C13 14.1 12.1 15 11 15S9 14.1 9 13 9.9 11 11 11 13 11.9 13 13M15 18V19H7V18C7 16.67 9.67 16 11 16S15 16.67 15 18Z", bg = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z", zf = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", wg = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z", _g = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z", Gf = "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z", Sg = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", Cg = "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z", Vl = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z", xg = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z", Dl = "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z", Ag = "M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z", Hl = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", $l = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
const mr = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0, icon: wg }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0, icon: Ag }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0, icon: yg }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1, icon: Wf }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1, icon: vg }], vs = mr[0], Uf = new Map(mr.map((e) => [e.id, e]));
new Map(mr.map((e) => [e.route, e]));
function ps(e) {
  return Uf.get(e) ?? vs;
}
function Lg(e) {
  return typeof e == "string" && Uf.has(e) ? e : vs.id;
}
function Eg(e, t) {
  return Math.min(e.w, t);
}
function Fl(e, t, n, r) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + r;
}
function kg(e, t) {
  const n = t.zoom, r = Eg(e, t.panelMaxWidth), i = t.panelHeight ?? e.h;
  return { col: Fl(e.w, r, n, t.gutterX), row: Fl(e.h, i, n, t.gutterY) };
}
function ui(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function Zf(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function Mg(e, t, n, r) {
  const i = Zf(e, t, n), s = Math.hypot(i.x - n.w / 2, i.y - n.h / 2), o = Math.min(1, s / Math.max(r.radius, 1e-6)), a = o * o * (3 - 2 * o);
  return r.floor + (1 - r.floor) * (1 - a);
}
const Tg = 1200, Nl = 0.55, Pg = 0.7, Rg = 0.7, Bl = 0.5, jl = 40, Ig = 240, Og = 0.14, Vg = 0.7, Dg = 6, Li = 18, Hg = 0.01;
function $g(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function Fg(e, t, n = Hg) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function Ng(e, t) {
  const n = t.w / 2, r = t.h / 2;
  return `translate(${n}px, ${r}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function Bg(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const jg = 0.18, Wg = 1;
function Kf(e) {
  return kg(e, { panelMaxWidth: Tg, gutterX: Nl * e.w, gutterY: Nl * e.h, zoom: 1 });
}
const fi = X({ w: 1, h: 1 });
function Yf() {
  const e = ps(vs.id), t = ui(e, Kf(fi.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const Ct = X(Yf()), Xn = X(Yf()), ys = X(false), fa = X(vs.id), da = X(0), qf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    qf.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const ma = $(() => Kf(fi.value));
let Tn = 0;
function Xf() {
  if (Ct.value = $g(Ct.value, Xn.value, jg), Fg(Ct.value, Xn.value)) {
    Ct.value = { ...Xn.value }, ys.value = false, Tn = 0;
    return;
  }
  Tn = requestAnimationFrame(Xf);
}
function zg() {
  Tn === 0 && (ys.value = true, Tn = requestAnimationFrame(Xf));
}
function Gg() {
  Tn !== 0 && (cancelAnimationFrame(Tn), Tn = 0), ys.value = false;
}
function ha(e, t, n) {
  Gg();
  const r = n ?? Ct.value.zoom;
  Ct.value = { x: e, y: t, zoom: r }, Xn.value = { x: e, y: t, zoom: r };
}
function Jf(e, t, n = {}) {
  const r = n.zoom ?? Xn.value.zoom;
  if (Xn.value = { x: e, y: t, zoom: r }, n.snap || qf.value) {
    ha(e, t, r);
    return;
  }
  zg();
}
function Ug(e, t = {}) {
  fa.value = e, da.value = 0;
  const n = ps(e), r = ui(n, ma.value);
  Jf(r.x, r.y, { zoom: n.zoom, snap: t.snap });
}
function Zg() {
  fa.value = null;
}
function Kg(e, t) {
  fi.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function Yg(e) {
  da.value = Math.max(0, e);
}
ce(ma, (e) => {
  const t = fa.value;
  if (t === null) return;
  const n = ps(t), r = ui(n, e);
  ha(r.x, r.y, n.zoom ?? Ct.value.zoom);
});
const qg = $(() => ({ transform: Ng(Ct.value, fi.value) })), Xg = $(() => Bg({ x: Ct.value.x, y: Ct.value.y + da.value, zoom: Ct.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, Wg));
function di() {
  return { camera: Ct, isAnimating: ys, viewport: fi, spacing: ma, cameraStyle: qg, worldOffsetDevicePx: Xg, panTo: Jf, panToWaypoint: Ug, snapTo: ha, releaseAnchor: Zg, setViewport: Kg, setCaptureScroll: Yg };
}
function Qf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ie = typeof window < "u", ga = Ie && "IntersectionObserver" in window, Jg = Ie && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), ed = Ie && "matchMedia" in window && typeof window.matchMedia == "function", Zi = () => ed && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Wl(e, t, n) {
  Qg(e, t), t.set(e, n);
}
function Qg(e, t) {
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
function xr(e, t, n) {
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
function ev(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function zs(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function tv(e, t) {
  const n = {};
  for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function mi(e, t) {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}
const nv = /^on[^a-z]/, id = (e) => nv.test(e);
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
function rv(e) {
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
  return e.map((t) => t.type === we ? sd(t.children) : t).flat();
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
class iv {
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
const Dr = () => [Function, Array];
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
function Hr(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = Jn(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const r = ad(n, t);
    r ? r.focus() : Hr(e, t === "next" ? "first" : "last");
  }
}
function sv(e, t) {
  if (!(Ie && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function ov(e, t) {
  if (!Ie || e === 0) return t(), () => {
  };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function av(e, t) {
  const n = e.clientX, r = e.clientY, i = t.getBoundingClientRect(), s = i.left, o = i.top, a = i.right, l = i.bottom;
  return n >= s && n <= a && r >= o && r <= l;
}
function wo() {
  const e = ve(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => ev(e.value) }), t;
}
function ar(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function lv(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, i] = n;
    return t.includes(r) ? !!i : i !== void 0;
  }));
}
const ld = ["top", "bottom"], cv = ["start", "end", "left", "right"];
function _o(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = Yi(ld, n) ? "start" : Yi(cv, n) ? "top" : "center"), { side: Yl(n, t), align: Yl(r, t) };
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
function uv(e) {
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
function fv(e, t) {
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
function dv(e, t) {
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
const $n = 2.4, Ql = 0.2126729, ec = 0.7151522, tc = 0.072175, mv = 0.55, hv = 0.58, gv = 0.57, vv = 0.62, Ei = 0.03, nc = 1.45, pv = 5e-4, yv = 1.25, bv = 1.25, rc = 0.078, ic = 12.82051282051282, ki = 0.06, sc = 1e-3;
function oc(e, t) {
  const n = (e.r / 255) ** $n, r = (e.g / 255) ** $n, i = (e.b / 255) ** $n, s = (t.r / 255) ** $n, o = (t.g / 255) ** $n, a = (t.b / 255) ** $n;
  let l = n * Ql + r * ec + i * tc, u = s * Ql + o * ec + a * tc;
  if (l <= Ei && (l += (Ei - l) ** nc), u <= Ei && (u += (Ei - u) ** nc), Math.abs(u - l) < pv) return 0;
  let c;
  if (u > l) {
    const f = (u ** mv - l ** hv) * yv;
    c = f < sc ? 0 : f < rc ? f - f * ic * ki : f - ki;
  } else {
    const f = (u ** vv - l ** gv) * bv;
    c = f > -sc ? 0 : f > -rc ? f - f * ic * ki : f + ki;
  }
  return c * 100;
}
const qi = 0.20689655172413793, wv = (e) => e > qi ** 3 ? Math.cbrt(e) : e / (3 * qi ** 2) + 4 / 29, _v = (e) => e > qi ? e ** 3 : 3 * qi ** 2 * (e - 4 / 29);
function fd(e) {
  const t = wv, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function dd(e) {
  const t = _v, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Sv = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Cv = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, xv = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Av = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function md(e) {
  const t = Array(3), n = Cv, r = Sv;
  for (let i = 0; i < 3; ++i) t[i] = Math.round(Ki(n(r[i][0] * e[0] + r[i][1] * e[1] + r[i][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function ya(e) {
  let { r: t, g: n, b: r } = e;
  const i = [0, 0, 0], s = Av, o = xv;
  t = s(t / 255), n = s(n / 255), r = s(r / 255);
  for (let a = 0; a < 3; ++a) i[a] = o[a][0] * t + o[a][1] * n + o[a][2] * r;
  return i;
}
function So(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Lv(e) {
  return So(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const ac = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ev = { rgb: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), rgba: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), hsl: (e, t, n, r) => lc({ h: e, s: t, l: n, a: r }), hsla: (e, t, n, r) => lc({ h: e, s: t, l: n, a: r }), hsv: (e, t, n, r) => qr({ h: e, s: t, v: n, a: r }), hsva: (e, t, n, r) => qr({ h: e, s: t, v: n, a: r }) };
function Bt(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && ac.test(e)) {
    const { groups: t } = e.match(ac), { fn: n, values: r } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((s, o) => s.endsWith("%") || o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return Ev[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), Mv(t);
  } else if (typeof e == "object") {
    if (zs(e, ["r", "g", "b"])) return e;
    if (zs(e, ["h", "s", "l"])) return qr(hd(e));
    if (zs(e, ["h", "s", "v"])) return qr(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function qr(e) {
  const { h: t, s: n, v: r, a: i } = e, s = (a) => {
    const l = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0);
  }, o = [s(5), s(3), s(1)].map((a) => Math.round(a * 255));
  return { r: o[0], g: o[1], b: o[2], a: i };
}
function lc(e) {
  return qr(hd(e));
}
function hd(e) {
  const { h: t, s: n, l: r, a: i } = e, s = r + n * Math.min(r, 1 - r), o = s === 0 ? 0 : 2 - 2 * r / s;
  return { h: t, s: o, v: s, a: i };
}
function Mi(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function kv(e) {
  let { r: t, g: n, b: r, a: i } = e;
  return `#${[Mi(t), Mi(n), Mi(r), i !== void 0 ? Mi(Math.round(i * 255)) : ""].join("")}`;
}
function Mv(e) {
  e = Tv(e);
  let [t, n, r, i] = rv(e, 2).map((s) => parseInt(s, 16));
  return i = i === void 0 ? i : i / 255, { r: t, g: n, b: r, a: i };
}
function Tv(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Ul(Ul(e, 6), 8, "F")), e;
}
function Pv(e, t) {
  const n = fd(ya(e));
  return n[0] = n[0] + t * 10, md(dd(n));
}
function Rv(e, t) {
  const n = fd(ya(e));
  return n[0] = n[0] - t * 10, md(dd(n));
}
function Iv(e) {
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
  const n = li();
  if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ze(e).type;
  return Pn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
function Ov(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ze("injectSelf");
  const { provides: n } = t;
  if (n && e in n) return n[e];
}
const lr = Symbol.for("vuetify:defaults");
function Vv(e) {
  return X(e);
}
function ba() {
  const e = ke(lr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function wa(e, t) {
  const n = ba(), r = X(e), i = $(() => {
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
function Dv(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Pn(t)] < "u");
}
function Hv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ba();
  const r = Ze("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const i = $(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), s = new Proxy(e, { get(l, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(l, u);
    if (u === "class" || u === "style") return [(_a2 = i.value) == null ? void 0 : _a2[u], c].filter((m) => m != null);
    if (Dv(r.vnode, u)) return c;
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
    const l = Ov(lr, r);
    it(lr, $(() => o.value ? pt((l == null ? void 0 : l.value) ?? {}, o.value) : l == null ? void 0 : l.value));
  }
  return { props: s, provideSubDefaults: a };
}
function hr(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = ne(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return tv(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const s = ba();
      if (!s.value) return e._setup(r, i);
      const { props: o, provideSubDefaults: a } = Hv(r, r._as ?? e.name, s), l = e._setup(o, i);
      return a(), l;
    };
  }
  return e;
}
function Pe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? hr : Ye)(t);
}
function $v(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Pe()({ name: n ?? dr(wt(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...qe() }, setup(r, i) {
    let { slots: s } = i;
    return () => {
      var _a2;
      return vn(r.tag, { class: [e, r.class], style: r.style }, (_a2 = s.default) == null ? void 0 : _a2.call(s));
    };
  } });
}
function Fv(e, t, n, r) {
  if (!n || ar(e) || ar(t)) return;
  const i = n.get(e);
  if (i) i.set(t, r);
  else {
    const s = /* @__PURE__ */ new WeakMap();
    s.set(t, r), n.set(e, s);
  }
}
function Nv(e, t, n) {
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
  const i = Nv(e, t, n);
  return i || (Fv(e, t, n, true), r.every((s) => Qn(e[s], t[s], n)));
}
function vd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const Co = "cubic-bezier(0.4, 0, 0.2, 1)", cc = "cubic-bezier(0.0, 0, 0.2, 1)", uc = "cubic-bezier(0.4, 0, 1, 1)", Bv = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function jv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? Wv(e) : _a(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Xi(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (_a(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function _a(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, r = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || r;
}
function Wv(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return false;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function zv(e) {
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
function Gv(e, t) {
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
  return { borderClasses: $(() => {
    const r = e.border;
    return r === true || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((i) => `border-${i}`) : [];
  }) };
}
const Uv = [null, "default", "comfortable", "compact"], vi = ne({ density: { type: String, default: "default", validator: (e) => Uv.includes(e) } }, "density");
function pi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const bs = ne({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function ws(e) {
  return { elevationClasses: B(() => {
    const n = Ve(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const gr = ne({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function vr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { roundedClasses: $(() => {
    const r = Ve(e) ? e.value : e.rounded, i = Ve(e) ? false : e.tile, s = [];
    if (i || r === false) s.push("rounded-0");
    else if (r === true || r === "") s.push(`${t}--rounded`);
    else if (typeof r == "string" || r === 0) for (const o of String(r).split(" ")) s.push(`rounded-${o}`);
    return s;
  }) };
}
const Rt = ne({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Xr = Symbol.for("vuetify:theme"), Gt = ne({ theme: String }, "theme");
function fc() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Zv() {
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
  e.push(`${Xv(t, r)} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function dc(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, i = [];
  for (const [s, o] of Object.entries(e.colors)) {
    const a = Bt(o);
    i.push(`--${t}theme-${s}: ${a.r},${a.g},${a.b}`), s.startsWith("on-") || i.push(`--${t}theme-${s}-overlay-multiplier: ${Iv(o) > 0.18 ? n : r}`);
  }
  for (const [s, o] of Object.entries(e.variables)) {
    const a = typeof o == "string" && o.startsWith("#") ? Bt(o) : void 0, l = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    i.push(`--${t}${s}: ${l ?? o}`);
  }
  return i;
}
function Kv(e, t, n) {
  const r = {};
  if (n) for (const i of ["lighten", "darken"]) {
    const s = i === "lighten" ? Pv : Rv;
    for (const o of rd(n[i], 1)) r[`${e}-${i}-${o}`] = kv(s(Bt(t), o));
  }
  return r;
}
function Yv(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const i = e[r];
    i && (n = { ...n, ...Kv(r, i, t) });
  }
  return n;
}
function qv(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, i = Bt(e[n]);
    t[r] = gd(i);
  }
  return t;
}
function Xv(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function Jv(e, t, n) {
  const r = Qv(e, t);
  r && (r.innerHTML = n);
}
function Qv(e, t) {
  if (!Ie) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function ep(e) {
  const t = Zv(e), n = ve(t.defaultTheme), r = X(t.themes), i = ve("light"), s = $({ get() {
    return n.value === "system" ? i.value : n.value;
  }, set(v) {
    n.value = v;
  } }), o = $(() => {
    const v = {};
    for (const [y, A] of Object.entries(r.value)) {
      const w = { ...A.colors, ...Yv(A.colors, t.variations) };
      v[y] = { ...A, colors: { ...w, ...qv(w) } };
    }
    return v;
  }), a = B(() => o.value[s.value]), l = B(() => n.value === "system"), u = $(() => {
    var _a2;
    const v = [], y = t.unimportant ? "" : " !important", A = t.scoped ? t.prefix : "";
    ((_a2 = a.value) == null ? void 0 : _a2.dark) && Cn(v, ":root", ["color-scheme: dark"], t.scope), Cn(v, ":root", dc(a.value, t.prefix), t.scope);
    for (const [x, E] of Object.entries(o.value)) Cn(v, `.${t.prefix}theme--${x}`, [`color-scheme: ${E.dark ? "dark" : "normal"}`, ...dc(E, t.prefix)], t.scope);
    if (t.utilities) {
      const x = [], E = [], T = new Set(Object.values(o.value).flatMap((_) => Object.keys(_.colors)));
      for (const _ of T) _.startsWith("on-") ? Cn(E, `.${_}`, [`color: rgb(var(--${t.prefix}theme-${_}))${y}`], t.scope) : (Cn(x, `.${A}bg-${_}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${_}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${_}))${y}`, `color: rgb(var(--${t.prefix}theme-on-${_}))${y}`], t.scope), Cn(E, `.${A}text-${_}`, [`color: rgb(var(--${t.prefix}theme-${_}))${y}`], t.scope), Cn(E, `.${A}border-${_}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${_})`], t.scope));
      t.layers ? v.push(`@layer background {
`, ...x.map((_) => `  ${_}`), `}
`, `@layer foreground {
`, ...E.map((_) => `  ${_}`), `}
`) : v.push(...x, ...E);
    }
    let w = v.map((x, E) => E === 0 ? x : `    ${x}`).join("");
    return t.layers && (w = `@layer vuetify.theme {
` + v.map((x) => `  ${x}`).join("") + `
}`), w;
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
        const w = y.push(A);
        Ie && ce(u, () => {
          w.patch(A);
        });
      } else Ie ? (y.addHeadObjs(B(A)), gn(() => y.updateDOM())) : y.addHeadObjs(A());
    } else {
      let A = function() {
        Jv(t.stylesheetId, t.cspNonce, u.value);
      };
      Ie ? ce(u, A, { immediate: true }) : A();
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
  const t = ke(Xr, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), s = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return it(Xr, s), s;
}
function tp() {
  Ze("useTheme");
  const e = ke(Xr, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Sa(e) {
  return pa(() => {
    const { class: t, style: n } = rp(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Jr(e) {
  const { colorClasses: t, colorStyles: n } = Sa(() => ({ text: rt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function Ca(e) {
  const { colorClasses: t, colorStyles: n } = Sa(() => ({ background: rt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function np(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function rp(e) {
  const t = np(rt(e)), n = [], r = {};
  if (t.background) if (So(t.background)) {
    if (r.backgroundColor = t.background, !t.text && Lv(t.background)) {
      const i = Bt(t.background);
      if (i.a == null || i.a === 1) {
        const s = gd(i);
        r.color = s, r.caretColor = s;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (So(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: r };
}
const ip = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function xa(e, t) {
  return k(we, null, [e && k("span", { key: "overlay", class: Le(`${t}__overlay`) }, null), k("span", { key: "underlay", class: Le(`${t}__underlay`) }, null)]);
}
const yi = ne({ color: String, variant: { type: String, default: "elevated", validator: (e) => ip.includes(e) } }, "variant");
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
const pd = ne({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...hi(), ...qe(), ...vi(), ...bs(), ...gr(), ...Rt(), ...Gt(), ...yi() }, "VBtnGroup"), mc = Pe()({ name: "VBtnGroup", props: pd(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = sn(e), { densityClasses: i } = pi(e), { borderClasses: s } = gi(e), { elevationClasses: o } = ws(e), { roundedClasses: a } = vr(e);
  wa({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ze(() => M(e.tag, { class: Le(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, r.value, s.value, i.value, o.value, a.value, e.class]), style: He(e.style) }, n));
} });
function _s(e, t) {
  let n;
  function r() {
    n = Br(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), r();
    }) : t());
  }
  ce(e, (i) => {
    i && !n ? r() : i || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Qt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const s = Ze("useProxiedModel"), o = X(e[t] !== void 0 ? e[t] : n), a = Pn(t), u = $(a !== t ? () => {
    var _a2, _b2, _c2, _d2;
    return e[t], !!((((_a2 = s.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) || ((_b2 = s.vnode.props) == null ? void 0 : _b2.hasOwnProperty(a))) && (((_c2 = s.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = s.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${a}`))));
  } : () => {
    var _a2, _b2;
    return e[t], !!(((_a2 = s.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) && ((_b2 = s.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  _s(() => !u.value, () => {
    ce(() => e[t], (f) => {
      o.value = f;
    });
  });
  const c = $({ get() {
    const f = e[t];
    return r(u.value ? f : o.value);
  }, set(f) {
    const d = i(f), m = te(u.value ? e[t] : o.value);
    m === d || r(m) === f || (o.value = d, s == null ? void 0 : s.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : o.value }), c;
}
const sp = ne({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), op = ne({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ap(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const r = Ze("useGroupItem");
  if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const i = oi();
  it(Symbol.for(`${t.description}:id`), i);
  const s = ke(t, null);
  if (!s) {
    if (!n) return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = B(() => e.value), a = $(() => !!(s.disabled.value || e.disabled));
  function l() {
    s == null ? void 0 : s.register({ id: i, value: o, disabled: a }, r);
  }
  function u() {
    s == null ? void 0 : s.unregister(i);
  }
  l(), zt(() => u());
  const c = $(() => s.isSelected(i)), f = $(() => s.items.value[0].id === i), d = $(() => s.items.value[s.items.value.length - 1].id === i), m = $(() => c.value && [s.selectedClass.value, e.selectedClass]);
  return ce(c, (b) => {
    r.emit("group:selected", { value: b });
  }, { flush: "sync" }), { id: i, isSelected: c, isFirst: f, isLast: d, toggle: () => s.select(i, !c.value), select: (b) => s.select(i, b), selectedClass: m, value: o, disabled: a, group: s, register: l, unregister: u };
}
function lp(e, t) {
  let n = false;
  const r = Ue([]), i = Qt(e, "modelValue", [], (d) => d === void 0 ? [] : yd(r, d === null ? [null] : va(d)), (d) => {
    const m = up(r, d);
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
  const f = { register: o, unregister: a, selected: i, select: u, disabled: B(() => e.disabled), prev: () => c(r.length - 1), next: () => c(1), isSelected: (d) => i.value.includes(d), selectedClass: B(() => e.selectedClass), items: B(() => r), getItemIndex: (d) => cp(r, d) };
  return it(t, f), f;
}
function cp(e, t) {
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
function up(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.findIndex((s) => s.id === r);
    if (~i) {
      const s = e[i];
      n.push(s.value !== void 0 ? s.value : i);
    }
  }), n;
}
const bd = Symbol.for("vuetify:v-btn-toggle"), fp = ne({ ...pd(), ...sp() }, "VBtnToggle"), dp = Pe()({ name: "VBtnToggle", props: fp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: r, next: i, prev: s, select: o, selected: a } = lp(e, bd);
  return ze(() => {
    const l = mc.filterProps(e);
    return M(mc, Re({ class: ["v-btn-toggle", e.class] }, l, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: r, next: i, prev: s, select: o, selected: a })];
    } });
  }), { next: i, prev: s, select: o };
} }), mp = ne({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), mn = Pe(false)({ name: "VDefaultsProvider", props: mp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: r, disabled: i, reset: s, root: o, scoped: a } = Hu(e);
  return wa(r, { reset: s, root: o, scoped: a, disabled: i }), () => {
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
} }), La = hr({ name: "VSvgIcon", inheritAttrs: false, props: Ss(), setup(e, t) {
  let { attrs: n } = t;
  return () => M(e.tag, Re(n, { style: null }), { default: () => [k("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? k("path", { d: r[0], "fill-opacity": r[1] }, null) : k("path", { d: r }, null)) : k("path", { d: e.icon }, null)])] });
} });
hr({ name: "VLigatureIcon", props: Ss(), setup(e) {
  return () => M(e.tag, null, { default: () => [e.icon] });
} });
const wd = hr({ name: "VClassIcon", props: Ss(), setup(e) {
  return () => M(e.tag, { class: Le(e.icon) }, null);
} }), hp = (e) => {
  const t = ke(xo);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: $(() => {
    var _a2;
    const r = rt(e);
    if (!r) return { component: hc };
    let i = r;
    if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = (_a2 = t.aliases) == null ? void 0 : _a2[i.slice(1)])), Array.isArray(i)) return { component: La, icon: i };
    if (typeof i != "string") return { component: hc, icon: i };
    const s = Object.keys(t.sets).find((l) => typeof i == "string" && i.startsWith(`${l}:`)), o = s ? i.slice(s.length + 1) : i;
    return { component: t.sets[s ?? t.defaultSet].component, icon: o };
  }) };
}, gp = ["x-small", "small", "default", "large", "x-large"], Cs = ne({ size: { type: [String, Number], default: "default" } }, "size");
function xs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return pa(() => {
    const n = e.size;
    let r, i;
    return Yi(gp, n) ? r = `${t}--size-${n}` : n && (i = { width: pe(n), height: pe(n) }), { sizeClasses: r, sizeStyles: i };
  });
}
const vp = ne({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: yt, opacity: [String, Number], ...qe(), ...Cs(), ...Rt({ tag: "i" }), ...Gt() }, "VIcon"), st = Pe()({ name: "VIcon", props: vp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const i = ve(), { themeClasses: s } = tp(), { iconData: o } = hp(() => i.value || e.icon), { sizeClasses: a } = xs(e), { textColorClasses: l, textColorStyles: u } = Jr(() => e.color);
  return ze(() => {
    var _a2, _b2;
    const c = (_a2 = r.default) == null ? void 0 : _a2.call(r);
    c && (i.value = (_b2 = sd(c).filter((d) => d.type === ai && d.children && typeof d.children == "string")[0]) == null ? void 0 : _b2.children);
    const f = !!(n.onClick || n.onClickOnce);
    return M(o.value.component, { tag: e.tag, icon: o.value.icon, class: Le(["v-icon", "notranslate", s.value, a.value, l.value, { "v-icon--clickable": f, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: He([{ "--v-icon-opacity": e.opacity }, a.value ? void 0 : { fontSize: pe(e.size), height: pe(e.size), width: pe(e.size) }, u.value, e.style]), role: f ? "button" : void 0, "aria-hidden": !f, tabindex: f ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function pp(e, t) {
  const n = X(), r = ve(false);
  if (ga) {
    const i = new IntersectionObserver((s) => {
      r.value = !!s.find((o) => o.isIntersecting);
    }, t);
    ct(() => {
      i.disconnect();
    }), ce(n, (s, o) => {
      o && (i.unobserve(o), r.value = false), s && i.observe(s);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: r };
}
function _d(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = wo(), r = X();
  if (Ie) {
    const i = new ResizeObserver((s) => {
      s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    zt(() => {
      i.disconnect();
    }), ce(() => n.el, (s, o) => {
      o && (i.unobserve(o), r.value = void 0), s && i.observe(s);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: er(r) };
}
const yp = ne({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function bp(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = ve(e.reveal ? "initial" : "disabled");
  return Wt(async () => {
    e.reveal && (r.value = "initial", await new Promise((i) => requestAnimationFrame(i)), r.value = "pending", await new Promise((i) => setTimeout(i, n.value)), r.value = "done");
  }), { duration: n, state: r };
}
const wp = ne({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...qe(), ...yp(), ...Cs(), ...Rt({ tag: "div" }), ...Gt() }, "VProgressCircular"), _p = Pe()({ name: "VProgressCircular", props: wp(), setup(e, t) {
  let { slots: n } = t;
  const r = 20, i = 2 * Math.PI * r, s = X(), { themeClasses: o } = sn(e), { sizeClasses: a, sizeStyles: l } = xs(e), { textColorClasses: u, textColorStyles: c } = Jr(() => e.color), { textColorClasses: f, textColorStyles: d } = Jr(() => e.bgColor), { intersectionRef: m, isIntersecting: b } = pp(), { resizeRef: g, contentRect: S } = _d(), { state: v, duration: y } = bp(e), A = B(() => v.value === "initial" ? 0 : Ki(parseFloat(e.modelValue), 0, 100)), w = B(() => Number(e.width)), x = B(() => l.value ? Number(e.size) : S.value ? S.value.width : Math.max(w.value, 32)), E = B(() => r / (1 - w.value / x.value) * 2), T = B(() => w.value / x.value * E.value), _ = B(() => {
    const R = (100 - A.value) / 100 * i;
    return e.rounded && A.value > 0 && A.value < 100 ? pe(Math.min(i - 0.01, R + T.value)) : pe(R);
  }), V = $(() => {
    const R = Number(e.rotate);
    return e.rounded ? R + T.value / 2 / i * 360 : R;
  });
  return gn(() => {
    m.value = s.value, g.value = s.value;
  }), ze(() => M(e.tag, { ref: s, class: Le(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": b.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Zi()), "v-progress-circular--revealing": ["initial", "pending"].includes(v.value) }, o.value, a.value, u.value, e.class]), style: He([l.value, c.value, { "--progress-reveal-duration": `${y.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : A.value }, { default: () => [k("svg", { style: { transform: `rotate(calc(-90deg + ${V.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${E.value} ${E.value}` }, [k("circle", { class: Le(["v-progress-circular__underlay", f.value]), style: He(d.value), fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": 0 }, null), k("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": i, "stroke-dashoffset": _.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && k("div", { class: "v-progress-circular__content" }, [n.default({ value: A.value })])] })), {};
} }), pr = ne({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function yr(e) {
  return { dimensionStyles: $(() => {
    const n = {}, r = pe(e.height), i = pe(e.maxHeight), s = pe(e.maxWidth), o = pe(e.minHeight), a = pe(e.minWidth), l = pe(e.width);
    return r != null && (n.height = r), i != null && (n.maxHeight = i), s != null && (n.maxWidth = s), o != null && (n.minHeight = o), a != null && (n.minWidth = a), l != null && (n.width = l), n;
  }) };
}
const Sp = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, gc = "$vuetify.", vc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), Sd = (e, t, n) => function(r) {
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
  return r.value = e[t] ?? n.value, ce(n, (i) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function xd(e) {
  return (t) => {
    const n = Zs(t, "locale", e.current), r = Zs(t, "fallback", e.fallback), i = Zs(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: r, messages: i, decimalSeparator: B(() => Cd(n, r)), t: Sd(n, r, i), n: Ea(n, r), provide: xd({ current: n, fallback: r, messages: i }) };
  };
}
function Cp(e) {
  const t = ve((e == null ? void 0 : e.locale) ?? "en"), n = ve((e == null ? void 0 : e.fallback) ?? "en"), r = X({ en: Sp, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: r, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? Cd(t, n)), t: Sd(t, n, r), n: Ea(t, n), provide: xd({ current: t, fallback: n, messages: r }) };
}
const Ao = Symbol.for("vuetify:locale");
function xp(e) {
  return e.name != null;
}
function Ap(e) {
  const t = (e == null ? void 0 : e.adapter) && xp(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Cp(e), n = Ep(t, e);
  return { ...t, ...n };
}
function Lp() {
  return { af: false, ar: true, bg: false, ca: false, ckb: false, cs: false, de: false, el: false, en: false, es: false, et: false, fa: true, fi: false, fr: false, hr: false, hu: false, he: true, id: false, it: false, ja: false, km: false, ko: false, lv: false, lt: false, nl: false, no: false, pl: false, pt: false, ro: false, ru: false, sk: false, sl: false, srCyrl: false, srLatn: false, sv: false, th: false, tr: false, az: false, uk: false, vi: false, zhHans: false, zhHant: false };
}
function Ep(e, t) {
  const n = X((t == null ? void 0 : t.rtl) ?? Lp()), r = $(() => n.value[e.current.value] ?? false);
  return { isRtl: r, rtl: n, rtlClasses: B(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`) };
}
function bi() {
  const e = ke(Ao);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const pc = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, kp = ne({ location: String }, "location");
function Mp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: r } = bi();
  return { locationStyles: $(() => {
    if (!e.location) return {};
    const { side: s, align: o } = _o(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
    function a(u) {
      return n ? n(u) : 0;
    }
    const l = {};
    return s !== "center" && (t ? l[pc[s]] = `calc(100% - ${a(s)}px)` : l[s] = 0), o !== "center" ? t ? l[pc[o]] = `calc(100% - ${a(o)}px)` : l[o] = 0 : (s === "center" ? l.top = l.left = "50%" : l[{ top: "left", bottom: "left", left: "top", right: "top" }[s]] = "50%", l.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[s]), l;
  }) };
}
const Tp = ne({ loading: [Boolean, String] }, "loader");
function Pp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { loaderClasses: B(() => ({ [`${t}--loading`]: e.loading })) };
}
const Rp = ["static", "relative", "fixed", "absolute", "sticky"], Ip = ne({ position: { type: String, validator: (e) => Rp.includes(e) } }, "position");
function Op(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { positionClasses: B(() => e.position ? `${t}--${e.position}` : void 0) };
}
function Vp() {
  const e = Ze("useRoute");
  return $(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function Dp() {
  var _a2, _b2;
  return (_b2 = (_a2 = Ze("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function Ad(e, t) {
  const n = wh("RouterLink"), r = B(() => !!(e.href || e.to)), i = $(() => (r == null ? void 0 : r.value) || Kl(t, "click") || Kl(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = B(() => e.href);
    return { isLink: r, isRouterLink: B(() => false), isClickable: i, href: f, linkProps: Ue({ href: f }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const s = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), o = $(() => e.to ? s : void 0), a = Vp(), l = $(() => {
    var _a2, _b2, _c2;
    return o.value ? e.exact ? a.value ? ((_a2 = o.value.isExactActive) == null ? void 0 : _a2.value) && Qn(o.value.route.value.query, a.value.query) : ((_b2 = o.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = o.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = $(() => {
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
function Hp(e, t) {
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
  ce(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && dt(() => {
      t(n);
    });
  }, { immediate: true });
}
const Lo = Symbol("rippleStop"), Fp = 80;
function yc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Eo(e) {
  return e.constructor.name === "TouchEvent";
}
function Ed(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Np = function(e, t) {
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
  const { radius: s, scale: o, x: a, y: l, centerX: u, centerY: c } = Np(e, t, n), f = `${s * 2}px`;
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
function Qr(e) {
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
      }, Fp);
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
let ei = false;
function Bp(e, t) {
  !ei && t.includes(e.key) && (ei = true, Qr(e));
}
function Td(e) {
  ei = false, gt(e);
}
function Pd(e) {
  ei && (ei = false, gt(e));
}
function Rd(e, t, n) {
  const { value: r, modifiers: i } = t, s = kd(r);
  s || Ji.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = i.center, e._ripple.circle = i.circle;
  const o = bo(r) ? r : {};
  o.class && (e._ripple.class = o.class);
  const a = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (l) => Bp(l, a), s && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", Qi, { passive: true }), e.addEventListener("mousedown", Qi);
      return;
    }
    e.addEventListener("touchstart", Qr, { passive: true }), e.addEventListener("touchend", gt, { passive: true }), e.addEventListener("touchmove", Md, { passive: true }), e.addEventListener("touchcancel", gt), e.addEventListener("mousedown", Qr), e.addEventListener("mouseup", gt), e.addEventListener("mouseleave", gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Td), e.addEventListener("blur", Pd), e.addEventListener("dragstart", gt, { passive: true });
  } else !s && n && Id(e);
}
function Id(e) {
  var _a2;
  e.removeEventListener("touchstart", Qi), e.removeEventListener("mousedown", Qi), e.removeEventListener("touchstart", Qr), e.removeEventListener("touchend", gt), e.removeEventListener("touchmove", Md), e.removeEventListener("touchcancel", gt), e.removeEventListener("mousedown", Qr), e.removeEventListener("mouseup", gt), e.removeEventListener("mouseleave", gt), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Td), e.removeEventListener("blur", Pd), e.removeEventListener("dragstart", gt);
}
function jp(e, t) {
  Rd(e, t, false);
}
function Wp(e) {
  Id(e), delete e._ripple;
}
function zp(e, t) {
  if (t.value === t.oldValue) return;
  const n = kd(t.oldValue);
  Rd(e, t, n);
}
const ko = { mounted: jp, unmounted: Wp, updated: zp }, Gp = ne({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: bd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: yt, appendIcon: yt, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...hi(), ...qe(), ...vi(), ...pr(), ...bs(), ...op(), ...Tp(), ...kp(), ...Ip(), ...gr(), ...Ld(), ...Cs(), ...Rt({ tag: "button" }), ...Gt(), ...yi({ variant: "elevated" }) }, "VBtn"), Vi = Pe()({ name: "VBtn", props: Gp(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = sn(e), { borderClasses: s } = gi(e), { densityClasses: o } = pi(e), { dimensionStyles: a } = yr(e), { elevationClasses: l } = ws(e), { loaderClasses: u } = Pp(e), { locationStyles: c } = Mp(e), { positionClasses: f } = Op(e), { roundedClasses: d } = vr(e), { sizeClasses: m, sizeStyles: b } = xs(e), g = ap(e, e.symbol, false), S = Ad(e, n), v = $(() => {
    var _a2;
    return e.active !== void 0 ? e.active : S.isRouterLink.value ? (_a2 = S.isActive) == null ? void 0 : _a2.value : g == null ? void 0 : g.isSelected.value;
  }), y = B(() => v.value ? e.activeColor ?? e.color : e.color), A = $(() => {
    var _a2, _b2;
    return { color: (g == null ? void 0 : g.isSelected.value) && (!S.isLink.value || ((_a2 = S.isActive) == null ? void 0 : _a2.value)) || !g || ((_b2 = S.isActive) == null ? void 0 : _b2.value) ? y.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: w, colorStyles: x, variantClasses: E } = Aa(A), T = $(() => (g == null ? void 0 : g.disabled.value) || e.disabled), _ = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), V = $(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function R(F) {
    var _a2, _b2;
    T.value || S.isLink.value && (F.metaKey || F.ctrlKey || F.shiftKey || F.button !== 0 || n.target === "_blank") || (S.isRouterLink.value ? (_b2 = (_a2 = S.navigate).value) == null ? void 0 : _b2.call(_a2, F) : g == null ? void 0 : g.toggle());
  }
  return $p(S, g == null ? void 0 : g.select), ze(() => {
    const F = S.isLink.value ? "a" : e.tag, P = !!(e.prependIcon || r.prepend), H = !!(e.appendIcon || r.append), Y = !!(e.icon && e.icon !== true);
    return nr(M(F, Re(S.linkProps, { type: F === "a" ? void 0 : "button", class: ["v-btn", g == null ? void 0 : g.selectedClass.value, { "v-btn--active": v.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": _.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], i.value, s.value, w.value, o.value, l.value, u.value, f.value, d.value, m.value, E.value, e.class], style: [x.value, a.value, c.value, b.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: T.value && F !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: R, value: V.value }), { default: () => {
      var _a2;
      return [xa(true, "v-btn"), !e.icon && P && k("span", { key: "prepend", class: "v-btn__prepend" }, [r.prepend ? M(mn, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, r.prepend) : M(st, { key: "prepend-icon", icon: e.prependIcon }, null)]), k("span", { class: "v-btn__content", "data-no-activator": "" }, [!r.default && Y ? M(st, { key: "content-icon", icon: e.icon }, null) : M(mn, { key: "content-defaults", disabled: !Y, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = r.default) == null ? void 0 : _a3.call(r)) ?? ye(e.text)];
      } })]), !e.icon && H && k("span", { key: "append", class: "v-btn__append" }, [r.append ? M(mn, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, r.append) : M(st, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && k("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = r.loader) == null ? void 0 : _a2.call(r)) ?? M(_p, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[ko, !T.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: g };
} }), Up = ["dotted", "dashed", "solid", "double"], Zp = ne({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => Up.includes(e) }, ...qe(), ...Gt() }, "VDivider"), Kp = Pe()({ name: "VDivider", props: Zp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: i } = sn(e), { textColorClasses: s, textColorStyles: o } = Jr(() => e.color), a = $(() => {
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
} }), Yp = ne({ fluid: { type: Boolean, default: false }, ...qe(), ...pr(), ...Rt() }, "VContainer"), wi = Pe()({ name: "VContainer", props: Yp(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: r } = bi(), { dimensionStyles: i } = yr(e);
  return ze(() => M(e.tag, { class: Le(["v-container", { "v-container--fluid": e.fluid }, r.value, e.class]), style: He([i.value, e.style]) }, n)), {};
} }), Mo = Symbol.for("vuetify:display"), bc = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, qp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bc;
  return pt(bc, e);
};
function wc(e) {
  return Ie && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function _c(e) {
  return Ie && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Sc(e) {
  const t = Ie && !e ? window.navigator.userAgent : "ssr";
  function n(b) {
    return !!t.match(b);
  }
  const r = n(/android/i), i = n(/iphone|ipad|ipod/i), s = n(/cordova/i), o = n(/electron/i), a = n(/chrome/i), l = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), m = n(/linux/i);
  return { android: r, ios: i, cordova: s, electron: o, chrome: a, edge: l, firefox: u, opera: c, win: f, mac: d, linux: m, touch: Jg, ssr: t === "ssr" };
}
function Xp(e, t) {
  const { thresholds: n, mobileBreakpoint: r } = qp(e), i = ve(_c(t)), s = ve(Sc(t)), o = Ue({}), a = ve(wc(t));
  function l() {
    i.value = _c(), a.value = wc();
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
function Jp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = ke(Mo);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = $(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: r.value } : {}), mobile: r };
}
const Qp = ne({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function _t(e, t, n) {
  return Pe()({ name: e, props: Qp({ mode: n, origin: t }), setup(r, i) {
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
const ey = ne({ target: [Object, Array] }, "v-dialog-transition"), Ys = /* @__PURE__ */ new WeakMap(), ty = Pe()({ name: "VDialogTransition", props: ey(), setup(e, t) {
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
_t("fab-transition", "center center", "out-in");
_t("dialog-bottom-transition");
_t("dialog-top-transition");
_t("fade-transition");
_t("scale-transition");
_t("scroll-x-transition");
_t("scroll-x-reverse-transition");
_t("scroll-y-transition");
_t("scroll-y-reverse-transition");
_t("slide-x-transition");
_t("slide-x-reverse-transition");
_t("slide-y-transition");
_t("slide-y-reverse-transition");
const ny = ka("expand-transition", Ma());
ka("expand-x-transition", Ma("", "x"));
ka("expand-both-transition", Ma("", "both"));
function ry(e) {
  return { aspectStyles: $(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const Od = ne({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...qe(), ...pr() }, "VResponsive"), Ac = Pe()({ name: "VResponsive", props: Od(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: r } = ry(e), { dimensionStyles: i } = yr(e);
  return ze(() => {
    var _a2;
    return k("div", { class: Le(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: He([i.value, e.style]) }, [k("div", { class: "v-responsive__sizer", style: He(r.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && k("div", { class: Le(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} }), Vd = ne({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), zn = (e, t) => {
  let { slots: n } = t;
  const { transition: r, disabled: i, group: s, ...o } = e, { component: a = s ? la : or, ...l } = bo(r) ? r : {};
  let u;
  return bo(r) ? u = Re(l, lv({ disabled: i, group: s }), o) : u = Re({ name: i || !r ? "" : r }, o), vn(a, u, n);
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
} }, iy = ne({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Od(), ...qe(), ...gr(), ...Vd() }, "VImg"), sy = Pe()({ name: "VImg", directives: { vIntersect: Ec }, props: iy(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: r } = t;
  const { backgroundColorClasses: i, backgroundColorStyles: s } = Ca(() => e.color), { roundedClasses: o } = vr(e), a = Ze("VImg"), l = ve(""), u = X(), c = ve(e.eager ? "loading" : "idle"), f = ve(), d = ve(), m = $(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), b = $(() => m.value.aspect || f.value / d.value || 0);
  ce(() => e.src, () => {
    g(c.value !== "idle");
  }), ce(b, (P, H) => {
    !P && H && u.value && w(u.value);
  }), ms(() => g());
  function g(P) {
    if (!(e.eager && P) && !(ga && !P && !e.eager)) {
      if (c.value = "loading", m.value.lazySrc) {
        const H = new Image();
        H.src = m.value.lazySrc, w(H, null);
      }
      m.value.src && dt(() => {
        var _a2;
        n("loadstart", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src), setTimeout(() => {
          var _a3;
          if (!a.isUnmounted) if ((_a3 = u.value) == null ? void 0 : _a3.complete) {
            if (u.value.naturalWidth || v(), c.value === "error") return;
            b.value || w(u.value, null), c.value === "loading" && S();
          } else b.value || w(u.value), y();
        });
      });
    }
  }
  function S() {
    var _a2;
    a.isUnmounted || (y(), w(u.value), c.value = "loaded", n("load", ((_a2 = u.value) == null ? void 0 : _a2.currentSrc) || m.value.src));
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
  function w(P) {
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
  }, T = () => M(zn, { transition: e.transition }, { default: () => [m.value.lazySrc && c.value !== "loaded" && k("img", { class: Le(["v-img__img", "v-img__img--preload", x.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), _ = () => r.placeholder ? M(zn, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !r.error) && k("div", { class: "v-img__placeholder" }, [r.placeholder()])] }) : null, V = () => r.error ? M(zn, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && k("div", { class: "v-img__error" }, [r.error()])] }) : null, R = () => e.gradient ? k("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, F = ve(false);
  {
    const P = ce(b, (H) => {
      H && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          F.value = true;
        });
      }), P());
    });
  }
  return ze(() => {
    const P = Ac.filterProps(e);
    return nr(M(Ac, Re({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !F.value, "v-img--fit-content": e.width === "fit-content" }, i.value, o.value, e.class], style: [{ width: pe(e.width === "auto" ? f.value : e.width) }, s.value, e.style] }, P, { aspectRatio: b.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => k(we, null, [M(E, null, null), M(T, null, null), M(R, null, null), M(_, null, null), M(V, null, null)]), default: r.default }), [[Ec, { handler: g, options: e.options }, null, { once: true }]]);
  }), { currentSrc: l, image: u, state: c, naturalWidth: f, naturalHeight: d };
} }), oy = ne({ start: Boolean, end: Boolean, icon: yt, image: String, text: String, ...hi(), ...qe(), ...vi(), ...gr(), ...Cs(), ...Rt(), ...Gt(), ...yi({ variant: "flat" }) }, "VAvatar"), kc = Pe()({ name: "VAvatar", props: oy(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = sn(e), { borderClasses: i } = gi(e), { colorClasses: s, colorStyles: o, variantClasses: a } = Aa(e), { densityClasses: l } = pi(e), { roundedClasses: u } = vr(e), { sizeClasses: c, sizeStyles: f } = xs(e);
  return ze(() => M(e.tag, { class: Le(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, r.value, i.value, s.value, l.value, u.value, c.value, a.value, e.class]), style: He([o.value, f.value, e.style]) }, { default: () => [n.default ? M(mn, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? M(sy, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? M(st, { key: "icon", icon: e.icon }, null) : e.text, xa(false, "v-avatar")] })), {};
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
const ay = Symbol.for("vuetify:goto");
function ly() {
  return { container: void 0, duration: 300, layout: false, offset: 0, easing: "easeInOutCubic", patterns: Bv };
}
function cy(e, t) {
  return { rtl: t.isRtl, options: pt(ly(), e) };
}
const Po = Symbol.for("vuetify:list");
function Hd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = ke(Po, { filterable: false, hasPrepend: ve(false), updateHasPrepend: () => null, trackingIndex: ve(-1), navigationStrategy: ve("focus"), uid: "" }), { filterable: n, trackingIndex: r = t.trackingIndex, navigationStrategy: i = t.navigationStrategy, uid: s = t.uid || oi() } = e, o = { filterable: t.filterable || n, hasPrepend: ve(false), updateHasPrepend: (a) => {
    a && (o.hasPrepend.value = a);
  }, trackingIndex: r, navigationStrategy: i, uid: s };
  return it(Po, o), t;
}
function $d() {
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
}, uy = (e) => {
  const t = Ta(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, fy = (e) => {
  const t = Fd(e);
  return { activate: (r) => {
    let { id: i, activated: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.activate({ id: i, activated: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, dy = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    const s = /* @__PURE__ */ new Set();
    s.add(t);
    let o = i.get(t);
    for (; o != null; ) s.add(o), o = i.get(o);
    return s;
  } else return r.delete(t), r;
}, select: () => null }, Nd = { open: (e) => {
  let { id: t, value: n, opened: r, parents: i } = e;
  if (n) {
    let s = i.get(t);
    for (r.add(t); s != null && s !== t; ) r.add(s), s = i.get(s);
    return r;
  } else r.delete(t);
  return r;
}, select: () => null }, my = { open: Nd.open, select: (e) => {
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
}, hy = (e) => {
  const t = Pa(e);
  return { select: (r) => {
    let { id: i, selected: s, children: o, ...a } = r;
    return i = te(i), o.has(i) ? s : t.select({ id: i, selected: s, children: o, ...a });
  }, in: t.in, out: t.out };
}, gy = (e) => {
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
}, vy = (e) => {
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
}, py = (e) => {
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
}, cr = Symbol.for("vuetify:nested"), jd = { id: ve(), root: { itemsRegistration: X("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: X(/* @__PURE__ */ new Map()), parents: X(/* @__PURE__ */ new Map()), disabled: X(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: X(false), scrollToActive: X(false), selectable: X(false), opened: X(/* @__PURE__ */ new Set()), activated: X(/* @__PURE__ */ new Set()), selected: X(/* @__PURE__ */ new Map()), selectedValues: X([]), getPath: () => [] } }, yy = ne({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), by = (e, t) => {
  let { items: n, returnObject: r, scrollToActive: i } = t, s = false;
  const o = ve(/* @__PURE__ */ new Map()), a = ve(/* @__PURE__ */ new Map()), l = ve(/* @__PURE__ */ new Set()), u = Qt(e, "opened", e.opened, (x) => new Set(Array.isArray(x) ? x.map((E) => te(E)) : x), (x) => [...x.values()]), c = $(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return uy(e.mandatory);
      case "single-leaf":
        return fy(e.mandatory);
      case "independent":
        return Ta(e.mandatory);
      case "single-independent":
      default:
        return Fd(e.mandatory);
    }
  }), f = $(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return gy(e.mandatory);
      case "leaf":
        return hy(e.mandatory);
      case "independent":
        return Pa(e.mandatory);
      case "single-independent":
        return Bd(e.mandatory);
      case "trunk":
        return vy(e.mandatory);
      case "branch":
        return py(e.mandatory);
      case "classic":
      default:
        return Ra(e.mandatory);
    }
  }), d = $(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return my;
      case "single":
        return dy;
      case "multiple":
      default:
        return Nd;
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
  const S = Ze("nested"), v = /* @__PURE__ */ new Set(), y = Gv(() => {
    dt(() => {
      o.value = new Map(o.value), a.value = new Map(a.value);
    });
  }, 100);
  ce(() => [n.value, rt(r)], () => {
    e.itemsRegistration === "props" && A();
  }, { immediate: true });
  function A() {
    const x = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), _ = rt(r) ? (F) => te(F.raw) : (F) => F.value, V = [...n.value];
    let R = 0;
    for (; R < V.length; ) {
      const F = V[R++], P = _(F);
      if (F.children) {
        const H = [];
        for (const Y of F.children) {
          const z = _(Y);
          x.set(z, P), H.push(z), V.push(Y);
        }
        E.set(P, H);
      }
      F.props.disabled && T.add(P);
    }
    o.value = E, a.value = x, l.value = T;
  }
  const w = { id: ve(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => rt(i)), selectable: B(() => e.selectable), activated: m, selected: b, selectedValues: $(() => {
    const x = [];
    for (const [E, T] of b.value.entries()) T === "on" && x.push(E);
    return x;
  }), itemsRegistration: B(() => e.itemsRegistration), register: (x, E, T, _) => {
    if (v.has(x)) {
      g(x).map(String).join(" -> "), g(E).concat(x).map(String).join(" -> ");
      return;
    } else v.add(x);
    E && x !== E && a.value.set(x, E), T && l.value.add(x), _ && o.value.set(x, []), E != null && o.value.set(E, [...o.value.get(E) || [], x]), y();
  }, unregister: (x) => {
    if (s) return;
    v.delete(x), o.value.delete(x), l.value.delete(x);
    const E = a.value.get(x);
    if (E) {
      const T = o.value.get(E) ?? [];
      o.value.set(E, T.filter((_) => _ !== x));
    }
    a.value.delete(x), y();
  }, updateDisabled: (x, E) => {
    E ? l.value.add(x) : l.value.delete(x);
  }, open: (x, E, T) => {
    S.emit("click:open", { id: x, value: E, path: g(x), event: T });
    const _ = d.value.open({ id: x, value: E, opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    _ && (u.value = _);
  }, openOnSelect: (x, E, T) => {
    const _ = d.value.select({ id: x, value: E, selected: new Map(b.value), opened: new Set(u.value), children: o.value, parents: a.value, event: T });
    _ && (u.value = _);
  }, select: (x, E, T) => {
    S.emit("click:select", { id: x, value: E, path: g(x), event: T });
    const _ = f.value.select({ id: x, value: E, selected: new Map(b.value), children: o.value, parents: a.value, disabled: l.value, event: T });
    _ && (b.value = _), w.root.openOnSelect(x, E, T);
  }, activate: (x, E, T) => {
    if (!e.activatable) return w.root.select(x, true, T);
    S.emit("click:activate", { id: x, value: E, path: g(x), event: T });
    const _ = c.value.activate({ id: x, value: E, activated: new Set(m.value), children: o.value, parents: a.value, event: T });
    if (_.size !== m.value.size) m.value = _;
    else {
      for (const V of _) if (!m.value.has(V)) {
        m.value = _;
        return;
      }
      for (const V of m.value) if (!_.has(V)) {
        m.value = _;
        return;
      }
    }
  }, children: o, parents: a, disabled: l, getPath: g } };
  return it(cr, w), w.root;
}, Wd = (e, t, n) => {
  const r = ke(cr, jd), i = Symbol("nested item"), s = $(() => {
    const a = te(rt(e));
    return a !== void 0 ? a : i;
  }), o = { ...r, id: s, open: (a, l) => r.root.open(s.value, a, l), openOnSelect: (a, l) => r.root.openOnSelect(s.value, a, l), isOpen: $(() => r.root.opened.value.has(s.value)), parent: $(() => r.root.parents.value.get(s.value)), activate: (a, l) => r.root.activate(s.value, a, l), isActivated: $(() => r.root.activated.value.has(s.value)), scrollToActive: r.root.scrollToActive, select: (a, l) => r.root.select(s.value, a, l), isSelected: $(() => r.root.selected.value.get(s.value) === "on"), isIndeterminate: $(() => r.root.selected.value.get(s.value) === "indeterminate"), isLeaf: $(() => !r.root.children.value.get(s.value)), isGroupActivator: r.isGroupActivator };
  return ms(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || dt(() => {
      r.root.register(s.value, r.id.value, rt(t), n);
    });
  }), zt(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || r.root.unregister(s.value);
  }), ce(s, (a, l) => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || (r.root.unregister(l), dt(() => {
      r.root.register(a, r.id.value, rt(t), n);
    }));
  }), ce(() => rt(t), (a) => {
    r.root.updateDisabled(s.value, a);
  }), n && it(cr, o), o;
}, wy = () => {
  const e = ke(cr, jd);
  it(cr, { ...e, isGroupActivator: true });
};
function _y() {
  const e = ve(false);
  return Wt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: er(e) };
}
const Sy = hr({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return wy(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), Cy = ne({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: yt, default: "$collapse" }, disabled: Boolean, expandIcon: { type: yt, default: "$expand" }, rawId: [String, Number], prependIcon: yt, appendIcon: yt, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...qe(), ...Rt() }, "VListGroup"), Mc = Pe()({ name: "VListGroup", props: Cy(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: r, open: i, id: s } = Wd(() => e.value, () => e.disabled, true), o = $(() => `v-list-group--id-${String(e.rawId ?? s.value)}`), a = $d(), { isBooted: l } = _y(), u = ke(cr), c = B(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function f(g) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = g.target) == null ? void 0 : _a2.tagName) || i(!r.value, g);
  }
  const d = $(() => ({ onClick: f, class: "v-list-group__header", id: o.value })), m = $(() => r.value ? e.collapseIcon : e.expandIcon), b = $(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return ze(() => M(e.tag, { class: Le(["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": r.value }, e.class]), style: He(e.style) }, { default: () => [n.activator && M(mn, { defaults: b.value }, { default: () => [M(Sy, null, { default: () => [n.activator({ props: d.value, isOpen: r.value })] })] }), M(zn, { transition: { component: ny }, disabled: !l.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? nr(k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[aa, r.value]]) : r.value && k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: r };
} }), xy = ne({ opacity: [Number, String], ...qe(), ...Rt() }, "VListItemSubtitle"), Ay = Pe()({ name: "VListItemSubtitle", props: xy(), setup(e, t) {
  let { slots: n } = t;
  return ze(() => M(e.tag, { class: Le(["v-list-item-subtitle", e.class]), style: He([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Ly = $v("v-list-item-title"), Ey = ne({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: yt, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: yt, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Dr(), onClickOnce: Dr(), ...hi(), ...qe(), ...vi(), ...pr(), ...bs(), ...gr(), ...Ld(), ...Rt(), ...Gt(), ...yi({ variant: "text" }) }, "VListItem"), Ro = Pe()({ name: "VListItem", directives: { vRipple: ko }, props: Ey(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const s = Ad(e, n), o = X(), a = $(() => e.value === void 0 ? s.href.value : e.value), { activate: l, isActivated: u, select: c, isOpen: f, isSelected: d, isIndeterminate: m, isGroupActivator: b, root: g, parent: S, openOnSelect: v, scrollToActive: y, id: A } = Wd(a, () => e.disabled, false), w = $d(), x = $(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = s.isActive) == null ? void 0 : _a2.value) || (g.activatable.value ? u.value : d.value));
  }), E = B(() => e.link !== false && s.isLink.value), T = $(() => !!w && (g.selectable.value || g.activatable.value || e.value != null)), _ = $(() => !e.disabled && e.link !== false && (e.link || s.isClickable.value || T.value)), V = $(() => w && w.navigationStrategy.value === "track" && e.index !== void 0 && w.trackingIndex.value === e.index), R = $(() => w ? E.value ? "link" : T.value ? "option" : "listitem" : void 0), F = $(() => {
    if (T.value) return g.activatable.value ? u.value : g.selectable.value ? d.value : x.value;
  }), P = B(() => e.rounded || e.nav), H = B(() => e.color ?? e.activeColor), Y = B(() => ({ color: x.value ? H.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  ce(() => {
    var _a2;
    return (_a2 = s.isActive) == null ? void 0 : _a2.value;
  }, (Z) => {
    Z && z();
  }), ce(u, (Z) => {
    var _a2;
    !Z || !y || ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ce(V, (Z) => {
    var _a2;
    Z && ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), ms(() => {
    var _a2;
    ((_a2 = s.isActive) == null ? void 0 : _a2.value) && dt(() => z());
  });
  function z() {
    S.value != null && g.open(S.value, true), v(true);
  }
  const { themeClasses: J } = sn(e), { borderClasses: Q } = gi(e), { colorClasses: oe, colorStyles: Oe, variantClasses: _e } = Aa(Y), { densityClasses: ae } = pi(e), { dimensionStyles: he } = yr(e), { elevationClasses: de } = ws(e), { roundedClasses: Be } = vr(P), Ge = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), $e = B(() => e.ripple !== void 0 && e.ripple && (w == null ? void 0 : w.filterable) ? { keys: ["Enter"] } : e.ripple), L = $(() => ({ isActive: x.value, select: c, isOpen: f.value, isSelected: d.value, isIndeterminate: m.value, isDisabled: e.disabled }));
  function j(Z) {
    var _a2, _b2, _c2;
    i("click", Z), !["INPUT", "TEXTAREA"].includes((_a2 = Z.target) == null ? void 0 : _a2.tagName) && _.value && ((_c2 = (_b2 = s.navigate).value) == null ? void 0 : _c2.call(_b2, Z), !b && (g.activatable.value ? l(!u.value, Z) : (g.selectable.value || e.value != null && !E.value) && c(!d.value, Z)));
  }
  function G(Z) {
    const ge = Z.target;
    ["INPUT", "TEXTAREA"].includes(ge.tagName) || (Z.key === "Enter" || Z.key === " " && !(w == null ? void 0 : w.filterable)) && (Z.preventDefault(), Z.stopPropagation(), Z.target.dispatchEvent(new MouseEvent("click", Z)));
  }
  return ze(() => {
    const Z = E.value ? "a" : e.tag, ge = r.title || e.title != null, h = r.subtitle || e.subtitle != null, C = !!(!!(e.appendAvatar || e.appendIcon) || r.append), D = !!(!!(e.prependAvatar || e.prependIcon) || r.prepend);
    return w == null ? void 0 : w.updateHasPrepend(D), e.activeColor && Qf("active-color", ["color", "base-color"]), nr(M(Z, Re(s.linkProps, { ref: o, id: e.index !== void 0 && w ? `v-list-item-${w.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": _.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !D && (w == null ? void 0 : w.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": V.value, [`${e.activeClass}`]: e.activeClass && x.value }, J.value, Q.value, oe.value, ae.value, de.value, Ge.value, Be.value, _e.value, e.class], style: [{ "--v-list-prepend-gap": pe(e.prependGap) }, Oe.value, he.value, e.style], tabindex: e.tabindex ?? (_.value ? w ? -2 : 0 : void 0), "aria-selected": F.value, role: R.value, onClick: j, onKeydown: _.value && !E.value && G }), { default: () => {
      var _a2;
      return [xa(_.value || x.value, "v-list-item"), D && k("div", { key: "prepend", class: "v-list-item__prepend" }, [r.prepend ? M(mn, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.prepend) == null ? void 0 : _a3.call(r, L.value)];
      } }) : k(we, null, [e.prependAvatar && M(kc, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && M(st, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), k("div", { class: "v-list-item__spacer" }, null)]), k("div", { class: "v-list-item__content", "data-no-activator": "" }, [ge && M(Ly, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = r.title) == null ? void 0 : _a3.call(r, { title: e.title })) ?? ye(e.title)];
      } }), h && M(Ay, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = r.subtitle) == null ? void 0 : _a3.call(r, { subtitle: e.subtitle })) ?? ye(e.subtitle)];
      } }), (_a2 = r.default) == null ? void 0 : _a2.call(r, L.value)]), C && k("div", { key: "append", class: "v-list-item__append" }, [r.append ? M(mn, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.append) == null ? void 0 : _a3.call(r, L.value)];
      } }) : k(we, null, [e.appendIcon && M(st, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && M(kc, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), k("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[ko, _.value && $e.value]]);
  }), { activate: l, isActivated: u, isGroupActivator: b, isSelected: d, list: w, select: c, root: g, id: A, link: s };
} }), ky = ne({ color: String, inset: Boolean, sticky: Boolean, title: String, ...qe(), ...Rt() }, "VListSubheader"), My = Pe()({ name: "VListSubheader", props: ky(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: r, textColorStyles: i } = Jr(() => e.color);
  return ze(() => {
    const s = !!(n.default || e.title);
    return M(e.tag, { class: Le(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, r.value, e.class]), style: He([{ textColorStyles: i }, e.style]) }, { default: () => {
      var _a2;
      return [s && k("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), Ty = ne({ items: Array, returnObject: Boolean }, "VListChildren"), zd = Pe()({ name: "VListChildren", props: Ty(), setup(e, t) {
  let { slots: n } = t;
  return Hd(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((r, i) => {
      var _a3, _b3;
      let { children: s, props: o, type: a, raw: l } = r;
      if (a === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: o })) ?? M(Kp, o, null);
      if (a === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: o })) ?? M(My, o, null);
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
} }), Py = ne({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), Ry = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Iy(e, t) {
  const n = ar(t) ? t : xr(t, e.itemTitle), r = ar(t) ? t : xr(t, e.itemValue, void 0), i = xr(t, e.itemChildren), s = e.itemProps === true ? mi(t, ["children"]) : xr(t, e.itemProps);
  let o = xr(t, e.itemType, "item");
  Ry.has(o) || (o = "item");
  const a = { title: n, value: r, ...s };
  return { type: o, title: a.title, value: a.value, props: a, children: o === "item" && i ? Gd(e, i) : void 0, raw: t };
}
function Gd(e, t) {
  const n = [];
  for (const r of t) n.push(Iy(e, r));
  return n;
}
function Oy(e) {
  return { items: $(() => Gd(e, e.items)) };
}
const Vy = ne({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: yt, collapseIcon: yt, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Dr(), "onClick:select": Dr(), "onUpdate:opened": Dr(), ...yy({ selectStrategy: "single-leaf", openStrategy: "list" }), ...hi(), ...qe(), ...vi(), ...pr(), ...bs(), ...Py(), ...gr(), ...Rt(), ...Gt(), ...yi({ variant: "text" }) }, "VList"), Dy = Pe()({ name: "VList", props: Vy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: i } = t;
  const { items: s } = Oy(e), { themeClasses: o } = sn(e), { backgroundColorClasses: a, backgroundColorStyles: l } = Ca(() => e.bgColor), { borderClasses: u } = gi(e), { densityClasses: c } = pi(e), { dimensionStyles: f } = yr(e), { elevationClasses: d } = ws(e), { roundedClasses: m } = vr(e), { children: b, open: g, parents: S, select: v, getPath: y } = by(e, { items: s, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), A = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), w = B(() => e.activeColor), x = B(() => e.baseColor), E = B(() => e.color), T = B(() => e.selectable || e.activatable), _ = Qt(e, "navigationIndex", -1, (ae) => ae ?? -1), V = oi();
  Hd({ filterable: e.filterable, trackingIndex: _, navigationStrategy: B(() => e.navigationStrategy), uid: V }), ce(s, () => {
    e.navigationStrategy === "track" && (_.value = -1);
  }), wa({ VListGroup: { activeColor: w, baseColor: x, color: E, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: w, baseColor: x, color: E, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const R = ve(false), F = X();
  function P(ae) {
    R.value = true;
  }
  function H(ae) {
    R.value = false;
  }
  function Y(ae) {
    var _a2;
    e.navigationStrategy === "track" ? ~_.value || (_.value = Q("first")) : !R.value && !(ae.relatedTarget && ((_a2 = F.value) == null ? void 0 : _a2.contains(ae.relatedTarget))) && _e();
  }
  function z() {
    e.navigationStrategy === "track" && (_.value = -1);
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
    ae === "first" ? de = 0 : ae === "last" ? de = he - 1 : (de = _.value + (ae === "next" ? 1 : -1), de < 0 && (de = he - 1), de >= he && (de = 0));
    const Be = de;
    let Ge = 0;
    for (; Ge < he; ) {
      const $e = s.value[de];
      if ($e && $e.type !== "divider" && $e.type !== "subheader") return de;
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
      Be !== -1 && (_.value = Be);
    } else _e(de);
  }
  function Oe(ae) {
    R.value = true;
  }
  function _e(ae) {
    if (F.value) return Hr(F.value, ae);
  }
  return ze(() => {
    const ae = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), he = T.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return M(e.tag, { ref: F, class: Le(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, a.value, u.value, c.value, d.value, A.value, m.value, e.class]), style: He([{ "--v-list-indent": pe(ae), "--v-list-group-prepend": ae ? "0px" : void 0, "--v-list-prepend-gap": pe(e.prependGap) }, l.value, f.value, e.style]), tabindex: e.disabled ? -1 : 0, role: T.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && _.value >= 0 ? `v-list-item-${V}-${_.value}` : void 0, "aria-multiselectable": he, onFocusin: P, onFocusout: H, onFocus: Y, onBlur: z, onKeydown: oe, onMousedown: Oe }, { default: () => [M(zd, { items: s.value, returnObject: e.returnObject }, r)] });
  }), { open: g, select: v, focus: _e, children: b, parents: S, getPath: y, navigationIndex: _ };
} });
function Js(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Hy(e, t) {
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
const Ud = { static: Ny, connected: jy }, $y = ne({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Ud }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function Fy(e, t) {
  const n = X({}), r = X();
  Ie && _s(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var _a2, _b2;
    ce(() => e.locationStrategy, a), ct(() => {
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
function Ny() {
}
function By(e, t) {
  const n = ud(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function jy(e, t, n) {
  (Array.isArray(e.target.value) || zv(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: i, preferredOrigin: s } = pa(() => {
    const v = _o(t.location, e.isRtl.value), y = t.origin === "overlap" ? v : t.origin === "auto" ? Gs(v) : _o(t.origin, e.isRtl.value);
    return v.side === y.side && v.align === Us(y).align ? { preferredAnchor: ql(v), preferredOrigin: ql(y) } : { preferredAnchor: v, preferredOrigin: y };
  }), [o, a, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => $(() => {
    const y = parseFloat(t[v]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = $(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = false, d = -1;
  const m = new iv(4), b = new ResizeObserver(() => {
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
  ce(e.target, (v, y) => {
    y && !Array.isArray(y) && b.unobserve(y), Array.isArray(v) ? Qn(v, y) || S() : v && b.observe(v);
  }, { immediate: true }), ce(e.contentEl, (v, y) => {
    y && b.unobserve(y), v && b.observe(v);
  }, { immediate: true }), ct(() => {
    b.disconnect();
  });
  function S() {
    if (f = false, requestAnimationFrame(() => f = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (g = cd(e.target.value));
    const v = By(e.contentEl.value, e.isRtl.value), y = Xi(e.contentEl.value), A = Number(t.viewportMargin);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = y.reduce((H, Y) => {
      const z = uv(Y);
      return H ? new xt({ x: Math.max(H.left, z.left), y: Math.max(H.top, z.top), width: Math.min(H.right, z.right) - Math.max(H.left, z.left), height: Math.min(H.bottom, z.bottom) - Math.max(H.top, z.top) }) : z;
    }, void 0);
    t.stickToTarget ? (w.x += Math.min(A, g.x), w.y += Math.min(A, g.y), w.width = Math.max(w.width - A * 2, g.x + g.width - A), w.height = Math.max(w.height - A * 2, g.y + g.height - A)) : (w.x += A, w.y += A, w.width -= A * 2, w.height -= A * 2);
    let x = { anchor: i.value, origin: s.value };
    function E(H) {
      const Y = new xt(v), z = Tc(H.anchor, g), J = Tc(H.origin, Y);
      let { x: Q, y: oe } = Hy(z, J);
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
      return Y.x += Q, Y.y += oe, Y.width = Math.min(Y.width, l.value), Y.height = Math.min(Y.height, u.value), { overflows: Jl(Y, w), x: Q, y: oe };
    }
    let T = 0, _ = 0;
    const V = { x: 0, y: 0 }, R = { x: false, y: false };
    let F = -1;
    for (; !(F++ > 10); ) {
      const { x: H, y: Y, overflows: z } = E(x);
      T += H, _ += Y, v.x += H, v.y += Y;
      {
        const J = Xl(x.anchor), Q = z.x.before || z.x.after, oe = z.y.before || z.y.after;
        let Oe = false;
        if (["x", "y"].forEach((_e) => {
          if (_e === "x" && Q && !R.x || _e === "y" && oe && !R.y) {
            const ae = { anchor: { ...x.anchor }, origin: { ...x.origin } }, he = _e === "x" ? J === "y" ? Us : Gs : J === "y" ? Gs : Us;
            ae.anchor = he(ae.anchor), ae.origin = he(ae.origin);
            const { overflows: de } = E(ae);
            (de[_e].before <= z[_e].before && de[_e].after <= z[_e].after || de[_e].before + de[_e].after < (z[_e].before + z[_e].after) / 2) && (x = ae, Oe = R[_e] = true);
          }
        }), Oe) continue;
      }
      z.x.before && (T += z.x.before, v.x += z.x.before), z.x.after && (T -= z.x.after, v.x -= z.x.after), z.y.before && (_ += z.y.before, v.y += z.y.before), z.y.after && (_ -= z.y.after, v.y -= z.y.after);
      {
        const J = Jl(v, w);
        V.x = w.width - J.x.before - J.x.after, V.y = w.height - J.y.before - J.y.after, T += J.x.before, v.x += J.x.before, _ += J.y.before, v.y += J.y.before;
      }
      break;
    }
    const P = Xl(x.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: pe(Qs(_)), left: e.isRtl.value ? void 0 : pe(Qs(T)), right: e.isRtl.value ? pe(Qs(-T)) : void 0, minWidth: pe(P === "y" ? Math.min(o.value, g.width) : o.value), maxWidth: pe(Pc(Ki(V.x, o.value === 1 / 0 ? 0 : o.value, l.value))), maxHeight: pe(Pc(Ki(V.y, a.value === 1 / 0 ? 0 : a.value, u.value))) }), { available: V, contentBox: v, flipped: R };
  }
  return ce(() => [i.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => S()), dt(() => {
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
function Wy(e) {
  !Io || es.length ? (es.push(e), Oo()) : (Io = false, e(), Oo());
}
let Rc = -1;
function Oo() {
  cancelAnimationFrame(Rc), Rc = requestAnimationFrame(() => {
    const e = es.shift();
    e && e(), es.length ? Oo() : Io = true;
  });
}
const Zd = { none: null, close: Uy, block: Zy, reposition: Ky }, zy = ne({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Zd } }, "VOverlay-scroll-strategies");
function Gy(e, t) {
  if (!Ie) return;
  let n;
  gn(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = Br(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = Zd[e.scrollStrategy]) == null ? void 0 : _a2.call(Zd, t, e, n);
    }));
  }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Uy(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Kd(Ia(e.target.value, e.contentEl.value), t);
}
function Zy(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, r = Ia(e.target.value, e.contentEl.value), i = [.../* @__PURE__ */ new Set([...Xi(r, t.contained ? n : void 0), ...Xi(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, o = ((a) => _a(a) && a)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((a, l) => {
    a.style.setProperty("--v-body-scroll-x", pe(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", pe(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", pe(s)), a.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    i.forEach((a, l) => {
      const u = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -u, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ky(e, t, n) {
  let r = false, i = -1, s = -1;
  function o(a) {
    Wy(() => {
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
const Vo = Symbol.for("vuetify:v-menu"), Yy = ne({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function qy(e, t) {
  let n = () => {
  };
  function r(o, a) {
    n == null ? void 0 : n();
    const l = o ? e.openDelay : e.closeDelay, u = Math.max((a == null ? void 0 : a.minDelay) ?? 0, Number(l ?? 0));
    return new Promise((c) => {
      n = ov(u, () => {
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
const Xy = ne({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Yy() }, "VOverlay-activator");
function Jy(e, t) {
  let { isActive: n, isTop: r, contentEl: i } = t;
  const s = Ze("useActivator"), o = X();
  let a = false, l = false, u = true;
  const c = $(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = $(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: d, runCloseDelay: m } = qy(e, (_) => {
    _ === (e.openOnHover && a || c.value && l) && !(e.openOnHover && n.value && !r.value) && (n.value !== _ && (u = true), n.value = _);
  }), b = X(), g = { onClick: (_) => {
    _.stopPropagation(), o.value = _.currentTarget || _.target, n.value || (b.value = [_.clientX, _.clientY]), n.value = !n.value;
  }, onMouseenter: (_) => {
    a = true, o.value = _.currentTarget || _.target, d();
  }, onMouseleave: (_) => {
    a = false, m();
  }, onFocus: (_) => {
    sv(_.target, ":focus-visible") !== false && (l = true, _.stopPropagation(), o.value = _.currentTarget || _.target, d());
  }, onBlur: (_) => {
    l = false, _.stopPropagation(), m({ minDelay: 1 });
  } }, S = $(() => {
    const _ = {};
    return f.value && (_.onClick = g.onClick), e.openOnHover && (_.onMouseenter = g.onMouseenter, _.onMouseleave = g.onMouseleave), c.value && (_.onFocus = g.onFocus, _.onBlur = g.onBlur), _;
  }), v = $(() => {
    const _ = {};
    if (e.openOnHover && (_.onMouseenter = () => {
      a = true, d();
    }, _.onMouseleave = () => {
      a = false, m();
    }), c.value && (_.onFocusin = (V) => {
      V.target.matches(":focus-visible") && (l = true, d());
    }, _.onFocusout = () => {
      l = false, m({ minDelay: 1 });
    }), e.closeOnContentClick) {
      const V = ke(Vo, null);
      _.onClick = () => {
        n.value = false, V == null ? void 0 : V.closeParents();
      };
    }
    return _;
  }), y = $(() => {
    const _ = {};
    return e.openOnHover && (_.onMouseenter = () => {
      u && (a = true, u = false, d());
    }, _.onMouseleave = () => {
      a = false, m();
    }), _;
  });
  ce(r, (_) => {
    var _a2;
    _ && (e.openOnHover && !a && (!c.value || !l) || c.value && !l && (!e.openOnHover || !a)) && !((_a2 = i.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), ce(n, (_) => {
    _ || setTimeout(() => {
      b.value = void 0;
    });
  }, { flush: "post" });
  const A = wo();
  gn(() => {
    A.value && dt(() => {
      o.value = A.el;
    });
  });
  const w = wo(), x = $(() => e.target === "cursor" && b.value ? b.value : w.value ? w.el : Yd(e.target, s) || o.value), E = $(() => Array.isArray(x.value) ? void 0 : x.value);
  let T;
  return ce(() => !!e.activator, (_) => {
    _ && Ie ? (T = Br(), T.run(() => {
      Qy(e, s, { activatorEl: o, activatorEvents: S });
    })) : T && T.stop();
  }, { flush: "post", immediate: true }), ct(() => {
    T == null ? void 0 : T.stop();
  }), { activatorEl: o, activatorRef: A, target: x, targetEl: E, targetRef: w, activatorEvents: S, contentEvents: v, scrimEvents: y };
}
function Qy(e, t, n) {
  let { activatorEl: r, activatorEvents: i } = n;
  ce(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = a(u);
      c && o(c);
    }
    l && dt(() => s());
  }, { immediate: true }), ce(() => e.activatorProps, () => {
    s();
  }), ct(() => {
    o();
  });
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && fv(l, Re(i.value, u));
  }
  function o() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && dv(l, Re(i.value, u));
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
const e0 = ne({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Di = /* @__PURE__ */ new Map();
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
function t0(e, t) {
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
  Ie && (ce(() => e.retainFocus, (d) => {
    d ? Di.set(s, { isActive: n, contentEl: i }) : Di.delete(s);
  }, { immediate: true }), ce(f, (d) => {
    d ? (document.addEventListener("pointerdown", l), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, { immediate: true }), Ic++ < 1 && document.addEventListener("keydown", Oc)), ct(() => {
    Di.delete(s), clearTimeout(a), document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Ic < 1 && document.removeEventListener("keydown", Oc);
  });
}
function n0() {
  if (!Ie) return ve(false);
  const { ssr: e } = Jp();
  if (e) {
    const t = ve(false);
    return Wt(() => {
      t.value = true;
    }), t;
  } else return ve(true);
}
const r0 = ne({ eager: Boolean }, "lazy");
function i0(e, t) {
  const n = ve(false), r = B(() => n.value || e.eager || t.value);
  ce(t, () => n.value = true);
  function i() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: r, onAfterLeave: i };
}
function Oa() {
  const t = Ze("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Vc = Symbol.for("vuetify:stack"), Ar = Ue([]);
function s0(e, t, n) {
  const r = Ze("useStack"), i = !n, s = ke(Vc, void 0), o = Ue({ activeChildren: /* @__PURE__ */ new Set() });
  it(Vc, o);
  const a = ve(Number(rt(t)));
  _s(e, () => {
    var _a2;
    const c = (_a2 = Ar.at(-1)) == null ? void 0 : _a2[1];
    a.value = c ? c + 10 : Number(rt(t)), i && Ar.push([r.uid, a.value]), s == null ? void 0 : s.activeChildren.add(r.uid), ct(() => {
      if (i) {
        const f = te(Ar).findIndex((d) => d[0] === r.uid);
        Ar.splice(f, 1);
      }
      s == null ? void 0 : s.activeChildren.delete(r.uid);
    });
  });
  const l = ve(true);
  return i && gn(() => {
    var _a2;
    const c = ((_a2 = Ar.at(-1)) == null ? void 0 : _a2[0]) === r.uid;
    setTimeout(() => l.value = c);
  }), { globalTop: er(l), localTop: B(() => !o.activeChildren.size), stackStyles: B(() => ({ zIndex: a.value })) };
}
function o0(e) {
  return { teleportTarget: $(() => {
    const n = e();
    if (n === true || !Ie) return;
    const r = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (r == null) return;
    let i = [...r.children].find((s) => s.matches(".v-overlay-container"));
    return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
  }) };
}
function a0() {
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
  return (typeof t.value == "object" && t.value.closeConditional || a0)(e);
}
function l0(e, t, n) {
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
  const n = (i) => l0(i, e, t), r = (i) => {
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
function c0(e) {
  const { modelValue: t, color: n, ...r } = e;
  return M(or, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && k("div", Re({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, r), null)] });
}
const Va = ne({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...Xy(), ...qe(), ...pr(), ...r0(), ...$y(), ...zy(), ...e0(), ...Gt(), ...Vd() }, "VOverlay"), ts = Pe()({ name: "VOverlay", directives: { vClickOutside: Hc }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...mi(Va(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: r, emit: i } = t;
  const s = Ze("VOverlay"), o = X(), a = X(), l = X(), u = Qt(e, "modelValue"), c = $({ get: () => u.value, set: (L) => {
    L && e.disabled || (u.value = L);
  } }), { themeClasses: f } = sn(e), { rtlClasses: d, isRtl: m } = bi(), { hasContent: b, onAfterLeave: g } = i0(e, c), S = Ca(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: v, localTop: y, stackStyles: A } = s0(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: w, activatorRef: x, target: E, targetEl: T, targetRef: _, activatorEvents: V, contentEvents: R, scrimEvents: F } = Jy(e, { isActive: c, isTop: y, contentEl: l }), { teleportTarget: P } = o0(() => {
    var _a2, _b2, _c2;
    const L = e.attach || e.contained;
    if (L) return L;
    const j = ((_a2 = w == null ? void 0 : w.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = s.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return j instanceof ShadowRoot ? j : false;
  }), { dimensionStyles: H } = yr(e), Y = n0(), { scopeId: z } = Oa();
  ce(() => e.disabled, (L) => {
    L && (c.value = false);
  });
  const { contentStyles: J, updateLocation: Q } = Fy(e, { isRtl: m, contentEl: l, target: E, isActive: c });
  Gy(e, { root: o, contentEl: l, targetEl: T, target: E, isActive: c, updateLocation: Q });
  function oe(L) {
    i("click:outside", L), e.persistent ? Be() : c.value = false;
  }
  function Oe(L) {
    return c.value && y.value && (!e.scrim || L.target === a.value || L instanceof MouseEvent && L.shadowTarget === a.value);
  }
  t0(e, { isActive: c, localTop: y, contentEl: l }), Ie && ce(c, (L) => {
    L ? window.addEventListener("keydown", _e) : window.removeEventListener("keydown", _e);
  }, { immediate: true }), zt(() => {
    Ie && window.removeEventListener("keydown", _e);
  });
  function _e(L) {
    var _a2, _b2, _c2;
    L.key === "Escape" && v.value && (((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) || i("keydown", L), e.persistent ? Be() : (c.value = false, ((_b2 = l.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = w.value) == null ? void 0 : _c2.focus())));
  }
  function ae(L) {
    L.key === "Escape" && !v.value || i("keydown", L);
  }
  const he = Dp();
  _s(() => e.closeOnBack, () => {
    Hp(he, (L) => {
      v.value && c.value ? (L(false), e.persistent ? Be() : c.value = false) : L();
    });
  });
  const de = X();
  ce(() => c.value && (e.absolute || e.contained) && P.value == null, (L) => {
    if (L) {
      const j = jv(o.value);
      j && j !== document.scrollingElement && (de.value = j.scrollTop);
    }
  });
  function Be() {
    e.noClickAnimation || l.value && An(l.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Co });
  }
  function Ge() {
    i("afterEnter");
  }
  function $e() {
    g(), i("afterLeave");
  }
  return ze(() => {
    var _a2;
    return k(we, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: _, props: Re({ ref: x }, V.value, e.activatorProps) }), Y.value && b.value && M(ch, { disabled: !P.value, to: P.value }, { default: () => [k("div", Re({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, f.value, d.value, e.class], style: [A.value, { "--v-overlay-opacity": e.opacity, top: pe(de.value) }, e.style], ref: o, onKeydown: ae }, z, r), [M(c0, Re({ color: S, modelValue: c.value && !!e.scrim, ref: a }, F.value), null), M(zn, { appear: true, persisted: true, transition: e.transition, target: E.value, onAfterEnter: Ge, onAfterLeave: $e }, { default: () => {
      var _a3;
      return [nr(k("div", Re({ ref: l, class: ["v-overlay__content", e.contentClass], style: [H.value, J.value] }, R.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[aa, c.value], [Hc, { handler: oe, closeConditional: Oe, include: () => [w.value] }]])];
    } })])] })]);
  }), { activatorEl: w, scrimEl: a, target: E, animateClick: Be, contentEl: l, rootEl: o, globalTop: v, localTop: y, updateLocation: Q };
} }), u0 = ne({ id: String, submenu: Boolean, ...mi(Va({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: ty } }), ["absolute"]) }, "VMenu"), f0 = Pe()({ name: "VMenu", props: u0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Qt(e, "modelValue"), { scopeId: i } = Oa(), { isRtl: s } = bi(), o = oi(), a = B(() => e.id || `v-menu-${o}`), l = X(), u = ke(Vo, null), c = ve(/* @__PURE__ */ new Set());
  it(Vo, { register() {
    c.value.add(o);
  }, unregister() {
    c.value.delete(o);
  }, closeParents(g) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (g == null || ((_a2 = l.value) == null ? void 0 : _a2.contentEl) && !av(g, l.value.contentEl)) && (r.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), zt(() => u == null ? void 0 : u.unregister()), ef(() => r.value = false), ce(r, (g) => {
    g ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function f(g) {
    u == null ? void 0 : u.closeParents(g);
  }
  function d(g) {
    var _a2, _b2, _c2, _d2, _e;
    if (!e.disabled) if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
      if (g.key === "Enter" && (g.target instanceof HTMLTextAreaElement || g.target instanceof HTMLInputElement && g.target.closest("form"))) return;
      g.key === "Enter" && g.preventDefault(), !ad(Jn((_a2 = l.value) == null ? void 0 : _a2.contentEl, false), g.shiftKey ? "prev" : "next", (v) => v.tabIndex >= 0) && !e.retainFocus && (r.value = false, (_c2 = (_b2 = l.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && g.key === (s.value ? "ArrowRight" : "ArrowLeft") && (r.value = false, (_e = (_d2 = l.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e.focus());
  }
  function m(g) {
    var _a2;
    if (e.disabled) return;
    const S = (_a2 = l.value) == null ? void 0 : _a2.contentEl;
    S && r.value ? g.key === "ArrowDown" ? (g.preventDefault(), g.stopImmediatePropagation(), Hr(S, "next")) : g.key === "ArrowUp" ? (g.preventDefault(), g.stopImmediatePropagation(), Hr(S, "prev")) : e.submenu && (g.key === (s.value ? "ArrowRight" : "ArrowLeft") ? r.value = false : g.key === (s.value ? "ArrowLeft" : "ArrowRight") && (g.preventDefault(), Hr(S, "first"))) : (e.submenu ? g.key === (s.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(g.key)) && (r.value = true, g.preventDefault(), setTimeout(() => setTimeout(() => m(g))));
  }
  const b = $(() => Re({ "aria-haspopup": "menu", "aria-expanded": String(r.value), "aria-controls": a.value, "aria-owns": a.value, onKeydown: m }, e.activatorProps));
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
}, d0 = Ye({ __name: "AppBackground", setup(e) {
  const t = ca("AppBackground"), n = X(null), r = X(null), i = ig(), s = di(), o = ag(i.gridInfo, s.worldOffsetDevicePx), a = lg(), l = cg(o), u = hg(i.post);
  function c(w) {
    return { ...w, edge: { ...w.edge } };
  }
  function f(w) {
    return w.map(c);
  }
  const d = rg({ onSetZones: (w) => i.post({ type: "set_zones", zones: f(w) }), onAddZone: (w) => i.post({ type: "add_zone", zone: c(w) }), onUpdateZone: (w) => i.post({ type: "update_zone", zone: c(w) }), onRemoveZone: (w) => i.post({ type: "remove_zone", id: w }), onClearZones: () => i.post({ type: "clear_zones" }) }), m = X(false), b = X(false), g = X({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: S } = jf();
  ce(S, (w) => {
    i.post({ type: "set_theme", theme: w });
  });
  function v(w) {
    const x = Date.now(), E = g.value;
    return { id: crypto.randomUUID(), x1: w.x1, y1: w.y1, x2: w.x2, y2: w.y2, mode: E.mode, edge: { ...E.edge }, enabled: true, createdAt: x, updatedAt: x };
  }
  l.register("zone", { isEnabled: () => m.value, priority: 1, snapMajor: () => b.value, onCommit(w) {
    d.addZone(v(w));
  } });
  function y(w) {
    if (l.anyToolEnabled() || o.isInteractiveTarget(w.target)) return;
    const x = o.makeSnapshot();
    if (!x) return;
    const E = Df(w.clientX, w.clientY, x), T = N1(E, x);
    t.debug("Click \u2192", w.clientX, w.clientY, "\u2192 cell", T.cx, T.cy), i.post({ type: "toggle_cell", cx: T.cx, cy: T.cy, scrollCanvasPx: x.offsetY });
  }
  let A = null;
  return Wt(() => {
    const w = n.value, x = r.value;
    if (!w || !x) return;
    const { offscreen: E, gridPitch: T } = u.initialize(w, x);
    i.init(E, T, S.value), t.debug("Worker spawned, gridPitch", T.toFixed(2)), i.on("ready", (_) => {
      t.info(`${_.backend.toUpperCase()} renderer active`), i.post({ type: "set_theme", theme: S.value }), i.post({ type: "set_zones", zones: f(d.zones.value) });
      const V = s.worldOffsetDevicePx.value;
      i.post({ type: "camera", x: V.x, y: V.y });
    }), i.on("zones_state", (_) => d.syncFromWorker(_.zones)), i.on("zones_error", (_) => t.error("Zone update rejected:", _.message)), i.on("first_frame_painted", () => u.revealCanvas()), i.on("error", (_) => {
      _.phase === "gpu-init" ? t.debug(`GPU unavailable (${_.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${_.phase}]:`, _.message);
    }), gg(i), document.addEventListener("click", y), A = l.attachListeners(), a.start(() => {
      const _ = document.querySelector(".world-panel--scroll");
      _ && s.setCaptureScroll(_.scrollTop);
      const V = s.worldOffsetDevicePx.value;
      i.post({ type: "frame", cameraX: V.x, cameraY: V.y });
    });
  }), On(() => {
    a.stop(), u.teardown(), document.removeEventListener("click", y), A == null ? void 0 : A(), i.terminate();
  }), (w, x) => (le(), me(we, null, [k("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [k("canvas", { ref_key: "canvasRef", ref: r, class: "app-bg" }, null, 512)], 512), re(l).previewStyle.value ? (le(), me("div", { key: 0, class: "zone-preview-overlay", style: He(re(l).previewStyle.value) }, null, 4)) : ir("", true), ir("", true)], 64));
} }), m0 = At(d0, [["__scopeId", "data-v-b078853e"]]), Do = /* @__PURE__ */ new Set();
function h0(e) {
  return Do.add(e), () => {
    Do.delete(e);
  };
}
function g0(e, t) {
  const n = e.getBoundingClientRect();
  return n.width <= 0 || n.height <= 0 ? null : { cx: (n.left + n.width / 2) * t, cy: (n.top + n.height / 2) * t, halfW: n.width / 2 * t, halfH: n.height / 2 * t, cornerR: 0 };
}
let Ti = null;
function v0() {
  if (Ti !== null) return Ti;
  if (typeof document > "u") return 1;
  const e = document.createElement("div");
  e.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(e);
  const t = e.getBoundingClientRect().width;
  return e.remove(), Ti = t > 0 ? 100 / t : 1, Ti;
}
function p0() {
  const e = v0(), t = [];
  for (const n of Do) {
    const r = n(e);
    r && t.push(r);
  }
  return t;
}
function $c(e, t = {}) {
  const n = typeof e == "function" ? e : () => e.value, r = t.enabled ?? (() => true), i = t.margin ?? 0;
  return h0((s) => {
    if (!r()) return null;
    const o = n();
    if (!o) return null;
    const a = g0(o, s);
    return a ? (i !== 0 && (a.halfW = Math.max(0, a.halfW + i), a.halfH = Math.max(0, a.halfH + i)), a) : null;
  });
}
const y0 = ne({ id: String, interactive: Boolean, text: String, ...mi(Va({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), $r = Pe()({ name: "VTooltip", props: y0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Qt(e, "modelValue"), { scopeId: i } = Oa(), s = oi(), o = B(() => e.id || `v-tooltip-${s}`), a = X(), l = $(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = $(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = $(() => Re({ "aria-describedby": o.value }, e.activatorProps));
  return ze(() => {
    const d = ts.filterProps(e);
    return M(ts, Re({ ref: a, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: o.value }, d, { modelValue: r.value, "onUpdate:modelValue": (m) => r.value = m, transition: c.value, absolute: true, location: l.value, origin: u.value, role: "tooltip", activatorProps: f.value, _disableGlobalStack: true }, i), { activator: n.activator, default: function() {
      var _a2;
      for (var m = arguments.length, b = new Array(m), g = 0; g < m; g++) b[g] = arguments[g];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...b)) ?? e.text;
    } });
  }), Dd({}, a);
} }), b0 = Ye({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = jf();
  return (n, r) => (le(), rr(dp, { modelValue: re(t), "onUpdate:modelValue": r[0] || (r[0] = (i) => Ve(t) ? t.value = i : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Ne(() => [M(Vi, { value: "light", icon: re($l), size: "small" }, { default: Ne(() => [M(st, { icon: re($l) }, null, 8, ["icon"]), M($r, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }, 8, ["icon"]), M(Vi, { value: "system", icon: re(Dl), size: "small" }, { default: Ne(() => [M(st, { icon: re(Dl) }, null, 8, ["icon"]), M($r, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }, 8, ["icon"]), M(Vi, { value: "dark", icon: re(Hl), size: "small" }, { default: Ne(() => [M(st, { icon: re(Hl) }, null, 8, ["icon"]), M($r, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 }, 8, ["icon"])]), _: 1 }, 8, ["modelValue"]));
} }), w0 = At(b0, [["__scopeId", "data-v-1de18a37"]]), _0 = { class: "chrome" }, S0 = { class: "chrome__bar" }, C0 = Ye({ __name: "AppChrome", setup(e) {
  const t = X(false), n = X(null);
  On($c(n, { margin: 8 }));
  const r = X(null);
  return On($c(() => {
    var _a2;
    return ((_a2 = r.value) == null ? void 0 : _a2.$el) ?? null;
  }, { margin: 8 })), (i, s) => {
    const o = rf("router-link");
    return le(), me("div", _0, [k("div", S0, [M(o, { ref_key: "markRef", ref: r, to: "/", class: "chrome__mark glass-chip", "aria-label": "Taylor Hale \u2014 home" }, { default: Ne(() => [...s[2] || (s[2] = [qn(" Taylor Hale ", -1)])]), _: 1 }, 512), k("div", { ref_key: "controlsRef", ref: n, class: "chrome__controls" }, [M(w0), M(f0, { modelValue: t.value, "onUpdate:modelValue": s[1] || (s[1] = (a) => t.value = a), location: "bottom end", offset: "10" }, { activator: Ne(({ props: a }) => [M(Vi, Re(a, { icon: re(Sg), variant: "text", size: "small", class: "chrome__menu-btn", "aria-label": "All destinations" }), null, 16, ["icon"])]), default: Ne(() => [M(Dy, { class: "chrome-menu-list", density: "compact" }, { default: Ne(() => [(le(true), me(we, null, ht(re(mr), (a) => (le(), rr(Ro, { key: a.id, to: a.route, title: a.label, onClick: s[0] || (s[0] = (l) => t.value = false) }, null, 8, ["to", "title"]))), 128))]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 512)])]);
  };
} }), x0 = At(C0, [["__scopeId", "data-v-570bec19"]]);
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const Bn = typeof document < "u";
function Jd(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function A0(e) {
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
const Fr = () => {
}, Pt = Array.isArray;
function Fc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const Qd = /#/g, L0 = /&/g, E0 = /\//g, k0 = /=/g, M0 = /\?/g, em = /\+/g, T0 = /%5B/g, P0 = /%5D/g, tm = /%5E/g, R0 = /%60/g, nm = /%7B/g, I0 = /%7C/g, rm = /%7D/g, O0 = /%20/g;
function Da(e) {
  return e == null ? "" : encodeURI("" + e).replace(I0, "|").replace(T0, "[").replace(P0, "]");
}
function V0(e) {
  return Da(e).replace(nm, "{").replace(rm, "}").replace(tm, "^");
}
function Ho(e) {
  return Da(e).replace(em, "%2B").replace(O0, "+").replace(Qd, "%23").replace(L0, "%26").replace(R0, "`").replace(nm, "{").replace(rm, "}").replace(tm, "^");
}
function D0(e) {
  return Ho(e).replace(k0, "%3D");
}
function H0(e) {
  return Da(e).replace(Qd, "%23").replace(M0, "%3F");
}
function $0(e) {
  return H0(e).replace(E0, "%2F");
}
function ti(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const F0 = /\/$/, N0 = (e) => e.replace(F0, "");
function to(e, t, n = "/") {
  let r, i = {}, s = "", o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), s = t.slice(l, a > 0 ? a : t.length), i = e(s.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = z0(r ?? t, n), { fullPath: r + s + o, path: r, query: i, hash: ti(o) };
}
function B0(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Nc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function j0(e, t, n) {
  const r = t.matched.length - 1, i = n.matched.length - 1;
  return r > -1 && r === i && ur(t.matched[r], n.matched[i]) && im(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ur(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function im(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!W0(e[n], t[n])) return false;
  return true;
}
function W0(e, t) {
  return Pt(e) ? Bc(e, t) : Pt(t) ? Bc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Bc(e, t) {
  return Pt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function z0(e, t) {
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
let $o = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), no = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function G0(e) {
  if (!e) if (Bn) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), N0(e);
}
const U0 = /^[^#]+#/;
function Z0(e, t) {
  return e.replace(U0, "#") + t;
}
function K0(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const As = () => ({ left: window.scrollX, top: window.scrollY });
function Y0(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = K0(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function jc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Fo = /* @__PURE__ */ new Map();
function q0(e, t) {
  Fo.set(e, t);
}
function X0(e) {
  const t = Fo.get(e);
  return Fo.delete(e), t;
}
function J0(e) {
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
const Q0 = ["params", "query", "hash"];
function eb(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Q0) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function tb(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(em, " "), s = i.indexOf("="), o = ti(s < 0 ? i : i.slice(0, s)), a = s < 0 ? null : ti(i.slice(s + 1));
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
    if (n = D0(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pt(r) ? r.map((i) => i && Ho(i)) : [r && Ho(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function nb(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Pt(r) ? r.map((i) => i == null ? null : "" + i) : r == null ? r : "" + r);
  }
  return t;
}
const rb = Symbol(""), zc = Symbol(""), Ls = Symbol(""), Ha = Symbol(""), No = Symbol("");
function Lr() {
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
      d === false ? l(fr(Fe.NAVIGATION_ABORTED, { from: n, to: t })) : d instanceof Error ? l(d) : J0(d) ? l(fr(Fe.NAVIGATION_GUARD_REDIRECT, { from: t, to: d })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d), a());
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
        const f = A0(c) ? c.default : c;
        o.mods[a] = c, o.components[a] = f;
        const d = (f.__vccOpts || f)[t];
        return d && fn(d, n, r, o, a, i)();
      }));
    }
  }
  return s;
}
function ib(e, t) {
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
let sb = () => location.protocol + "//" + location.host;
function am(e, t) {
  const { pathname: n, search: r, hash: i } = t, s = e.indexOf("#");
  if (s > -1) {
    let o = i.includes(e.slice(s)) ? e.slice(s).length : 1, a = i.slice(o);
    return a[0] !== "/" && (a = "/" + a), Nc(a, "");
  }
  return Nc(n, e) + r + i;
}
function ob(e, t, n, r) {
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
      v(n.value, b, { delta: S, type: $o.pop, direction: S ? S > 0 ? no.forward : no.back : no.unknown });
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
function ab(e) {
  const { history: t, location: n } = window, r = { value: am(e, n) }, i = { value: t.state };
  i.value || s(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function s(l, u, c) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : sb() + e + l;
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
function lb(e) {
  e = G0(e);
  const t = ab(e), n = ob(e, t.state, t.location, t.replace);
  function r(s, o = true) {
    o || n.pauseListeners(), history.go(s);
  }
  const i = Ce({ location: "", base: e, go: r, createHref: Z0.bind(null, e) }, t, n);
  return Object.defineProperty(i, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(i, "state", { enumerable: true, get: () => t.state.value }), i;
}
let En = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var We = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(We || {});
const cb = { type: En.Static, value: "" }, ub = /[a-zA-Z0-9_]/;
function fb(e) {
  if (!e) return [[]];
  if (e === "/") return [[cb]];
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
        l === "(" ? n = We.ParamRegExp : ub.test(l) ? d() : (f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--);
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
const Uc = "[^/]+?", db = { sensitive: false, strict: false, start: true, end: true };
var at = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(at || {});
const mb = /[.+*?^${}()[\]/\\]/g;
function hb(e, t) {
  const n = Ce({}, db, t), r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [at.Root];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let m = at.Segment + (n.sensitive ? at.BonusCaseSensitive : 0);
      if (d.type === En.Static) f || (i += "/"), i += d.value.replace(mb, "\\$&"), m += at.Static;
      else if (d.type === En.Param) {
        const { value: b, repeatable: g, optional: S, regexp: v } = d;
        s.push({ name: b, repeatable: g, optional: S });
        const y = v || Uc;
        if (y !== Uc) {
          m += at.BonusCustomRegExp;
          try {
            `${y}`;
          } catch (w) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${y}): ` + w.message);
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
function gb(e, t) {
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
    const s = gb(r[n], i[n]);
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
const vb = { strict: false, end: true, sensitive: false };
function pb(e, t, n) {
  const r = hb(fb(e.path), n), i = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function yb(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Fc(vb, t);
  function i(f) {
    return r.get(f);
  }
  function s(f, d, m) {
    const b = !m, g = Yc(f);
    g.aliasOf = m && m.record;
    const S = Fc(t, f), v = [g];
    if ("alias" in f) {
      const w = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of w) v.push(Yc(Ce({}, g, { components: m ? m.record.components : g.components, path: x, aliasOf: m ? m.record : g })));
    }
    let y, A;
    for (const w of v) {
      const { path: x } = w;
      if (d && x[0] !== "/") {
        const E = d.record.path, T = E[E.length - 1] === "/" ? "" : "/";
        w.path = d.record.path + (x && T + x);
      }
      if (y = pb(w, d, S), m ? m.alias.push(y) : (A = A || y, A !== y && A.alias.push(y), b && f.name && !qc(y) && o(f.name)), cm(y) && l(y), g.children) {
        const E = g.children;
        for (let T = 0; T < E.length; T++) s(E[T], y, m && m.children[T]);
      }
      m = m || y;
    }
    return A ? () => {
      o(A);
    } : Fr;
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
    const d = _b(f, n);
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
    return { name: S, path: g, params: b, matched: v, meta: wb(v) };
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
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: bb(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function bb(e) {
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
function wb(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function _b(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    lm(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const i = Sb(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function Sb(e) {
  let t = e;
  for (; t = t.parent; ) if (cm(t) && lm(e, t) === 0) return t;
}
function cm({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Xc(e) {
  const t = ke(Ls), n = ke(Ha), r = $(() => {
    const l = re(e.to);
    return t.resolve(l);
  }), i = $(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const d = f.findIndex(ur.bind(null, c));
    if (d > -1) return d;
    const m = Jc(l[u - 2]);
    return u > 1 && Jc(c) === m && f[f.length - 1].path !== m ? f.findIndex(ur.bind(null, l[u - 2])) : d;
  }), s = $(() => i.value > -1 && Eb(n.params, r.value.params)), o = $(() => i.value > -1 && i.value === n.matched.length - 1 && im(n.params, r.value.params));
  function a(l = {}) {
    if (Lb(l)) {
      const u = t[re(e.replace) ? "replace" : "push"](re(e.to)).catch(Fr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: r, href: $(() => r.value.href), isActive: s, isExactActive: o, navigate: a };
}
function Cb(e) {
  return e.length === 1 ? e[0] : e;
}
const xb = Ye({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Xc, setup(e, { slots: t }) {
  const n = Ue(Xc(e)), { options: r } = ke(Ls), i = $(() => ({ [Qc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Qc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const s = t.default && Cb(t.default(n));
    return e.custom ? s : vn("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: i.value }, s);
  };
} }), Ab = xb;
function Lb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Eb(e, t) {
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
const Qc = (e, t, n) => e ?? t ?? n, kb = Ye({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = ke(No), i = $(() => e.route || r.value), s = ke(zc, 0), o = $(() => {
    let u = re(s);
    const { matched: c } = i.value;
    let f;
    for (; (f = c[u]) && !f.components; ) u++;
    return u;
  }), a = $(() => i.value.matched[o.value]);
  it(zc, $(() => o.value + 1)), it(rb, a), it(No, i);
  const l = X();
  return ce(() => [l.value, a.value, e.name], ([u, c, f], [d, m, b]) => {
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
const Mb = kb;
function Tb(e) {
  const t = yb(e.routes, e), n = e.parseQuery || tb, r = e.stringifyQuery || Wc, i = e.history, s = Lr(), o = Lr(), a = Lr(), l = ve(an);
  let u = an;
  Bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = eo.bind(null, (L) => "" + L), f = eo.bind(null, $0), d = eo.bind(null, ti);
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
      const C = to(n, L, j.path), I = t.resolve({ path: C.path }, j), D = i.createHref(C.fullPath);
      return Ce(C, I, { params: d(I.params), hash: ti(C.hash), redirectedFrom: void 0, href: D });
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
    const h = B0(r, Ce({}, L, { hash: V0(ge), path: Z.path })), p = i.createHref(h);
    return Ce({ fullPath: h, hash: ge, query: r === Wc ? nb(L.query) : L.query || {} }, Z, { redirectedFrom: void 0, href: p });
  }
  function y(L) {
    return typeof L == "string" ? to(n, L, l.value.path) : Ce({}, L);
  }
  function A(L, j) {
    if (u !== L) return fr(Fe.NAVIGATION_CANCELLED, { from: j, to: L });
  }
  function w(L) {
    return T(L);
  }
  function x(L) {
    return w(Ce(y(L), { replace: true }));
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
    let D;
    return !h && j0(r, Z, G) && (D = fr(Fe.NAVIGATION_DUPLICATED, { to: I, from: Z }), ae(Z, Z, true, false)), (D ? Promise.resolve(D) : R(I, Z)).catch((O) => Kt(O) ? Kt(O, Fe.NAVIGATION_GUARD_REDIRECT) ? O : _e(O) : oe(O, I, Z)).then((O) => {
      if (O) {
        if (Kt(O, Fe.NAVIGATION_GUARD_REDIRECT)) return T(Ce({ replace: p }, y(O.to), { state: typeof O.to == "object" ? Ce({}, ge, O.to.state) : ge, force: h }), j || I);
      } else O = P(I, Z, true, p, ge);
      return F(I, Z, O), O;
    });
  }
  function _(L, j) {
    const G = A(L, j);
    return G ? Promise.reject(G) : Promise.resolve();
  }
  function V(L) {
    const j = Be.values().next().value;
    return j && typeof j.runWithContext == "function" ? j.runWithContext(L) : L();
  }
  function R(L, j) {
    let G;
    const [Z, ge, h] = ib(L, j);
    G = ro(Z.reverse(), "beforeRouteLeave", L, j);
    for (const C of Z) C.leaveGuards.forEach((I) => {
      G.push(fn(I, L, j));
    });
    const p = _.bind(null, L, j);
    return G.push(p), $e(G).then(() => {
      G = [];
      for (const C of s.list()) G.push(fn(C, L, j));
      return G.push(p), $e(G);
    }).then(() => {
      G = ro(ge, "beforeRouteUpdate", L, j);
      for (const C of ge) C.updateGuards.forEach((I) => {
        G.push(fn(I, L, j));
      });
      return G.push(p), $e(G);
    }).then(() => {
      G = [];
      for (const C of h) if (C.beforeEnter) if (Pt(C.beforeEnter)) for (const I of C.beforeEnter) G.push(fn(I, L, j));
      else G.push(fn(C.beforeEnter, L, j));
      return G.push(p), $e(G);
    }).then(() => (L.matched.forEach((C) => C.enterCallbacks = {}), G = ro(h, "beforeRouteEnter", L, j, V), G.push(p), $e(G))).then(() => {
      G = [];
      for (const C of o.list()) G.push(fn(C, L, j));
      return G.push(p), $e(G);
    }).catch((C) => Kt(C, Fe.NAVIGATION_CANCELLED) ? C : Promise.reject(C));
  }
  function F(L, j, G) {
    a.list().forEach((Z) => V(() => Z(L, j, G)));
  }
  function P(L, j, G, Z, ge) {
    const h = A(L, j);
    if (h) return h;
    const p = j === an, C = Bn ? history.state : {};
    G && (Z || p ? i.replace(L.fullPath, Ce({ scroll: p && C && C.scroll }, ge)) : i.push(L.fullPath, ge)), l.value = L, ae(L, j, G, p), _e();
  }
  let H;
  function Y() {
    H || (H = i.listen((L, j, G) => {
      if (!Ge.listening) return;
      const Z = v(L), ge = E(Z, Ge.currentRoute.value);
      if (ge) {
        T(Ce(ge, { replace: true, force: true }), Z).catch(Fr);
        return;
      }
      u = Z;
      const h = l.value;
      Bn && q0(jc(h.fullPath, G.delta), As()), R(Z, h).catch((p) => Kt(p, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_CANCELLED) ? p : Kt(p, Fe.NAVIGATION_GUARD_REDIRECT) ? (T(Ce(y(p.to), { force: true }), Z).then((C) => {
        Kt(C, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_DUPLICATED) && !G.delta && G.type === $o.pop && i.go(-1, false);
      }).catch(Fr), Promise.reject()) : (G.delta && i.go(-G.delta, false), oe(p, Z, h))).then((p) => {
        p = p || P(Z, h, false), p && (G.delta && !Kt(p, Fe.NAVIGATION_CANCELLED) ? i.go(-G.delta, false) : G.type === $o.pop && Kt(p, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_DUPLICATED) && i.go(-1, false)), F(Z, h, p);
      }).catch(Fr);
    }));
  }
  let z = Lr(), J = Lr(), Q;
  function oe(L, j, G) {
    _e(L);
    const Z = J.list();
    return Z.length ? Z.forEach((ge) => ge(L, j, G)) : console.error(L), Promise.reject(L);
  }
  function Oe() {
    return Q && l.value !== an ? Promise.resolve() : new Promise((L, j) => {
      z.add([L, j]);
    });
  }
  function _e(L) {
    return Q || (Q = !L, Y(), z.list().forEach(([j, G]) => L ? G(L) : j()), z.reset()), L;
  }
  function ae(L, j, G, Z) {
    const { scrollBehavior: ge } = e;
    if (!Bn || !ge) return Promise.resolve();
    const h = !G && X0(jc(L.fullPath, 0)) || (Z || !G) && history.state && history.state.scroll || null;
    return dt().then(() => ge(L, j, h)).then((p) => p && Y0(p)).catch((p) => oe(p, L, j));
  }
  const he = (L) => i.go(L);
  let de;
  const Be = /* @__PURE__ */ new Set(), Ge = { currentRoute: l, listening: true, addRoute: m, removeRoute: b, clearRoutes: t.clearRoutes, hasRoute: S, getRoutes: g, resolve: v, options: e, push: w, replace: x, go: he, back: () => he(-1), forward: () => he(1), beforeEach: s.add, beforeResolve: o.add, afterEach: a.add, onError: J.add, isReady: Oe, install(L) {
    L.component("RouterLink", Ab), L.component("RouterView", Mb), L.config.globalProperties.$router = Ge, Object.defineProperty(L.config.globalProperties, "$route", { enumerable: true, get: () => re(l) }), Bn && !de && l.value === an && (de = true, w(i.location).catch((Z) => {
    }));
    const j = {};
    for (const Z in an) Object.defineProperty(j, Z, { get: () => l.value[Z], enumerable: true });
    L.provide(Ls, Ge), L.provide(Ha, Ou(j)), L.provide(No, l);
    const G = L.unmount;
    Be.add(L), L.unmount = function() {
      Be.delete(L), Be.size < 1 && (u = an, H && H(), H = null, l.value = an, de = false, Q = false), G();
    };
  } };
  function $e(L) {
    return L.reduce((j, G) => j.then(() => V(G)), Promise.resolve());
  }
  return Ge;
}
function Pb() {
  return ke(Ls);
}
function um(e) {
  return ke(Ha);
}
function Rb(e, t, n) {
  const r = Zf(e, t, n);
  return Math.atan2(r.y - n.h / 2, r.x - n.w / 2);
}
function Ib(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function Ob(e, t, n, r, i) {
  if (n <= t) return i;
  const s = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return i + (r - i) * s;
}
function Vb(e, t, n) {
  let r = 1 / 0;
  const i = (s) => {
    s > 0 && s < r && (r = s);
  };
  return t.x > 1e-9 && i((n.maxX - e.x) / t.x), t.x < -1e-9 && i((n.minX - e.x) / t.x), t.y > 1e-9 && i((n.maxY - e.y) / t.y), t.y < -1e-9 && i((n.minY - e.y) / t.y), Number.isFinite(r) ? { x: e.x + t.x * r, y: e.y + t.y * r } : { x: e.x, y: e.y };
}
function Db(e, t, n, r) {
  const i = { x: Math.cos(t), y: Math.sin(t) }, s = Vb(e, i, n), o = s.x - i.x * r, a = s.y - i.y * r;
  return { x: Math.min(n.maxX - r, Math.max(n.minX + r, o)), y: Math.min(n.maxY - r, Math.max(n.minY + r, a)) };
}
const Hb = ["id", "aria-current", "aria-label"], $b = Ye({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = ps(t.waypointId), { camera: r, viewport: i, spacing: s, setCaptureScroll: o } = di(), a = um(), l = $(() => a.name === t.waypointId), u = $(() => ui(n, s.value)), c = $(() => {
    const m = Math.min(s.value.col, s.value.row) * Rg;
    return Mg(u.value, r.value, i.value, { radius: m, floor: Pg });
  }), f = $(() => {
    const m = Bl + (1 - Bl) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${m})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none", maxHeight: l.value ? `${i.value.h}px` : void 0 };
  }), d = X(null);
  return ce(l, (m) => {
    m && d.value && (d.value.scrollTop = 0, o(0));
  }), (m, b) => (le(), me("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: d, class: Le(["world-panel", { "world-panel--scroll": l.value }]), style: He(f.value), "aria-current": l.value ? "page" : void 0, "aria-label": re(n).label, tabindex: "-1", "data-grid-ignore-click": "true" }, [_h(m.$slots, "default", {}, void 0)], 14, Hb));
} }), Er = At($b, [["__scopeId", "data-v-8984bafa"]]), Qe = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, Bo = [{ label: "Location", icon: Gf, href: "https://maps.google.com/?q=Bentonville,+AR", display: Qe.location }, { label: "Email", icon: Wf, href: `mailto:${Qe.email}`, display: Qe.email }, { label: "Phone", icon: Cg, href: `tel:${Qe.phone.replace(/[^\d+]/g, "")}`, display: Qe.phone }, { label: "GitHub", icon: zf, href: Qe.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: _g, href: Qe.linkedin, display: "bits-for-bread" }], Fb = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], Nb = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], Bb = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], jb = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], Wb = { id: "hero", class: "hero-section" }, zb = { class: "hero-frame glass-panel glass-panel--strong" }, Gb = { class: "hero-main" }, Ub = ["href", "aria-label"], Zb = { class: "hero-name section-heading" }, Kb = { class: "hero-tagline" }, Yb = { class: "hero-bio" }, qb = { class: "hero-actions" }, Xb = { class: "hero-rail" }, Jb = { class: "hero-note quiet-sheet" }, Qb = { class: "skills-block" }, e2 = { class: "skill-label" }, t2 = { class: "skill-items" }, n2 = { class: "hero-note quiet-sheet" }, r2 = { class: "hero-links" }, i2 = ["href"], s2 = Ye({ __name: "HeroSection", setup(e) {
  const t = Bo.filter((r) => r.label === "Email" || r.label === "GitHub" || r.label === "LinkedIn"), n = Bo.find((r) => r.label === "Location");
  return (r, i) => {
    const s = rf("router-link");
    return le(), me("section", Wb, [M(wi, { class: "hero-container" }, { default: Ne(() => {
      var _a2;
      return [k("div", zb, [k("div", Gb, [k("a", { href: (_a2 = re(n)) == null ? void 0 : _a2.href, target: "_blank", rel: "noopener noreferrer", class: "hero-kicker glass-chip section-kicker", "aria-label": `${re(Qe).location} \u2014 open in maps` }, [M(st, { icon: re(Gf), class: "hero-location-icon" }, null, 8, ["icon"]), qn(ye(re(Qe).location), 1)], 8, Ub), k("h1", Zb, ye(re(Qe).name), 1), k("p", Kb, ye(re(Qe).tagline), 1), k("p", Yb, ye(re(Qe).bio), 1), k("div", qb, [M(s, { to: "/projects", class: "hero-link paper-key paper-key--primary" }, { default: Ne(() => [i[0] || (i[0] = qn(" View selected work ", -1)), M(st, { icon: re(pg), class: "hero-link-icon" }, null, 8, ["icon"])]), _: 1 }), M(s, { to: "/resume", class: "hero-link paper-key" }, { default: Ne(() => [...i[1] || (i[1] = [qn("Resume", -1)])]), _: 1 })])]), k("aside", Xb, [k("section", Jb, [i[2] || (i[2] = k("p", { class: "hero-note-label" }, "Capabilities", -1)), k("div", Qb, [(le(true), me(we, null, ht(re(Fb), (o) => (le(), me("div", { key: o.label, class: "skill-group" }, [k("span", e2, ye(o.label), 1), k("span", t2, ye(o.items.join("  \xB7  ")), 1)]))), 128))])]), k("section", n2, [i[3] || (i[3] = k("p", { class: "hero-note-label" }, "Elsewhere", -1)), k("div", r2, [(le(true), me(we, null, ht(re(t), (o) => (le(), me("a", { key: o.label, href: o.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [M(st, { icon: o.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), k("span", null, ye(o.display ?? o.label), 1)], 8, i2))), 128))])])])])];
    }), _: 1 })]);
  };
} }), o2 = At(s2, [["__scopeId", "data-v-98831fd5"]]), jo = { demo: { ariaLabel: "Live demo", icon: Vl, label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: zf, label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: xg, label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: Vl, label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: bg, label: "Docs", priority: 4 } };
function a2(e, t) {
  return jo[e].priority - jo[t].priority;
}
function l2(e) {
  return [...e.links ?? []].sort((t, n) => a2(t.kind, n.kind)).map((t) => ({ ...t, ...jo[t.kind] }));
}
function tu(e, t) {
  const n = l2(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const c2 = { id: "projects", class: "demos-section" }, u2 = { key: 0, class: "project-feature glass-panel" }, f2 = { class: "project-feature-body" }, d2 = { class: "project-feature-title" }, m2 = { class: "project-feature-blurb" }, h2 = { class: "project-feature-tech" }, g2 = { class: "project-feature-actions" }, v2 = ["href", "aria-label"], p2 = { class: "project-index" }, y2 = { class: "project-item-head" }, b2 = { class: "project-item-title" }, w2 = { key: 0, class: "project-item-links", "aria-label": "Project links" }, _2 = ["href", "aria-label"], S2 = { class: "project-item-blurb" }, C2 = { class: "project-item-tech" }, x2 = Ye({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = Nb, r = t ? { ...t, visibleLinks: tu(t, "featured") } : null, i = n.map((s) => ({ ...s, visibleLinks: tu(s, "compact") }));
  return (s, o) => (le(), me("section", c2, [M(wi, { class: "projects-container" }, { default: Ne(() => [o[1] || (o[1] = k("div", { class: "projects-head" }, [k("div", { class: "projects-heading" }, [k("span", { class: "glass-chip section-kicker" }, "Selected work"), k("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), k("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), re(r) ? (le(), me("article", u2, [k("div", f2, [o[0] || (o[0] = k("span", { class: "project-feature-label" }, "Featured project", -1)), k("h3", d2, ye(re(r).title), 1), k("p", m2, ye(re(r).blurb), 1), k("div", h2, [(le(true), me(we, null, ht(re(r).tech, (a) => (le(), me("span", { key: a, class: "project-tech-tag" }, ye(a), 1))), 128))])]), k("div", g2, [(le(true), me(we, null, ht(re(r).visibleLinks, (a) => (le(), me("a", { key: a.kind, href: a.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-link paper-key", { "paper-key--primary": a.kind === "demo" }]), "aria-label": a.ariaLabel }, [M(st, { icon: a.icon }, null, 8, ["icon"]), k("span", null, ye(a.label), 1), M($r, { activator: "parent", location: "top", text: a.ariaLabel }, null, 8, ["text"])], 10, v2))), 128))])])) : ir("", true), k("div", p2, [(le(true), me(we, null, ht(re(i), (a) => (le(), me("article", { key: a.title, class: "project-item quiet-sheet" }, [k("header", y2, [k("h3", b2, ye(a.title), 1), a.visibleLinks.length ? (le(), me("div", w2, [(le(true), me(we, null, ht(a.visibleLinks, (l) => (le(), me("a", { key: l.kind, href: l.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-item-link paper-key--ghost", { "project-item-link--demo": l.kind === "demo" }]), "aria-label": l.ariaLabel }, [M(st, { icon: l.icon }, null, 8, ["icon"]), M($r, { activator: "parent", location: "top", text: l.ariaLabel }, null, 8, ["text"])], 10, _2))), 128))])) : ir("", true)]), k("p", S2, ye(a.blurb), 1), k("div", C2, [(le(true), me(we, null, ht(a.tech, (l) => (le(), me("span", { key: l, class: "project-tech-tag" }, ye(l), 1))), 128))])]))), 128))])]), _: 1 })]));
} }), A2 = At(x2, [["__scopeId", "data-v-479b2a52"]]), L2 = { id: "resume", class: "resume-section" }, E2 = { class: "timeline" }, k2 = { class: "entry-rail" }, M2 = { class: "entry-dates glass-chip" }, T2 = { class: "entry quiet-sheet" }, P2 = { class: "entry-head" }, R2 = { class: "entry-titleblock" }, I2 = { class: "entry-role" }, O2 = { class: "entry-subhead" }, V2 = { class: "entry-company" }, D2 = { class: "entry-work-location" }, H2 = { class: "entry-bullets" }, $2 = { key: 0, class: "entry-tech" }, F2 = { class: "entry-tech-items" }, N2 = { class: "entry-head" }, B2 = { class: "entry-titleblock" }, j2 = { class: "entry-role" }, W2 = { class: "entry-company" }, z2 = { class: "entry-meta" }, G2 = { class: "entry-dates" }, U2 = { class: "entry-location" }, Z2 = { key: 0, class: "entry-focus" }, K2 = Ye({ __name: "ResumeSection", setup(e) {
  return (t, n) => (le(), me("section", L2, [M(wi, { class: "resume-container" }, { default: Ne(() => [n[2] || (n[2] = k("div", { class: "resume-head" }, [k("div", { class: "resume-heading" }, [k("span", { class: "glass-chip section-kicker" }, "Resume"), k("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), k("ol", E2, [(le(true), me(we, null, ht(re(Bb), (r) => (le(), me("li", { key: `${r.company}-${r.dates}`, class: "timeline-row" }, [k("div", k2, [k("span", M2, ye(r.dates), 1)]), k("article", T2, [k("header", P2, [k("div", R2, [k("h3", I2, ye(r.role), 1), k("div", O2, [k("p", V2, ye(r.company), 1), k("span", D2, ye(r.location), 1)])])]), k("ul", H2, [(le(true), me(we, null, ht(r.highlights, (i, s) => (le(), me("li", { key: s }, ye(i), 1))), 128))]), r.tech ? (le(), me("div", $2, [n[0] || (n[0] = k("span", { class: "entry-tech-label" }, "Stack", -1)), k("span", F2, ye(r.tech.join("  \xB7  ")), 1)])) : ir("", true)])]))), 128))]), n[3] || (n[3] = k("div", { class: "edu-head" }, [k("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (le(true), me(we, null, ht(re(jb), (r) => (le(), me("div", { key: `${r.school}-${r.degree}`, class: "education-card glass-panel" }, [k("header", N2, [k("div", B2, [k("h3", j2, ye(r.degree) + " \u2014 " + ye(r.field), 1), k("p", W2, ye(r.school), 1)]), k("div", z2, [k("span", G2, ye(r.dates), 1), k("span", U2, ye(r.location), 1)])]), r.focus ? (le(), me("p", Z2, [n[1] || (n[1] = k("span", { class: "entry-tech-label" }, "Focus", -1)), qn(" " + ye(r.focus), 1)])) : ir("", true)]))), 128))]), _: 1 })]));
} }), Y2 = At(K2, [["__scopeId", "data-v-081aa046"]]), q2 = ["href", "aria-label"], X2 = { class: "contact-text" }, J2 = Ye({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => (le(), me("div", { class: Le(["contact-strip", { "is-dense": e.dense }]) }, [(le(true), me(we, null, ht(re(Bo), (r) => (le(), me("a", { key: r.label, href: r.href, "aria-label": r.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link paper-key" }, [M(st, { icon: r.icon, class: "contact-icon" }, null, 8, ["icon"]), k("span", X2, ye(r.display ?? r.label), 1)], 8, q2))), 128))], 2));
} }), Q2 = At(J2, [["__scopeId", "data-v-999b7116"]]), ew = { id: "contact", class: "contact-section" }, tw = { class: "contact-band glass-panel" }, nw = Ye({ __name: "ContactSection", setup(e) {
  return (t, n) => (le(), me("section", ew, [M(wi, { class: "contact-container" }, { default: Ne(() => [k("div", tw, [n[0] || (n[0] = k("div", { class: "contact-head" }, [k("span", { class: "glass-chip section-kicker" }, "Contact"), k("h2", { class: "contact-title" }, "Open to interesting problems."), k("p", { class: "contact-copy" })], -1)), M(Q2, { class: "contact-strip-wrap" })])]), _: 1 })]));
} }), rw = At(nw, [["__scopeId", "data-v-95eff47f"]]), iw = { class: "about-section" }, sw = { class: "content-surface about-card" }, ow = { class: "section-heading" }, aw = { class: "about-tagline" }, lw = { class: "section-intro" }, cw = { class: "about-meta" }, uw = Ye({ __name: "AboutSection", setup(e) {
  return (t, n) => (le(), me("section", iw, [M(wi, { class: "about-container" }, { default: Ne(() => [k("div", sw, [n[0] || (n[0] = k("p", { class: "section-kicker" }, "About", -1)), k("h2", ow, ye(re(Qe).name), 1), k("p", aw, ye(re(Qe).tagline), 1), k("p", lw, ye(re(Qe).bio), 1), k("p", cw, ye(re(Qe).location), 1)])]), _: 1 })]));
} }), fw = At(uw, [["__scopeId", "data-v-b03b1108"]]), dw = Ye({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n, isAnimating: r } = di(), i = X(null);
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
  }), (a, l) => (le(), me("div", { ref_key: "stageRef", ref: i, class: "world-stage" }, [k("div", { class: Le(["world-plane", { "world-plane--animating": re(r) }]), style: He(re(t)) }, [M(Er, { "waypoint-id": "hero" }, { default: Ne(() => [M(o2)]), _: 1 }), M(Er, { "waypoint-id": "projects" }, { default: Ne(() => [M(A2)]), _: 1 }), M(Er, { "waypoint-id": "resume" }, { default: Ne(() => [M(Y2)]), _: 1 }), M(Er, { "waypoint-id": "contact" }, { default: Ne(() => [M(rw)]), _: 1 }), M(Er, { "waypoint-id": "about" }, { default: Ne(() => [M(fw)]), _: 1 })], 6)], 512));
} }), mw = At(dw, [["__scopeId", "data-v-e47457f7"]]);
function hw(e, t, n, r) {
  const i = r.halfW + n - Math.abs(e - r.cx), s = r.halfH + n - Math.abs(t - r.cy);
  return i <= 0 || s <= 0 ? { x: 0, y: 0 } : i < s ? { x: e >= r.cx ? i : -i, y: 0 } : { x: 0, y: t >= r.cy ? s : -s };
}
function nu(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function ru(e, t) {
  e.x = nu(e.x, t.minX + e.r, t.maxX - e.r), e.y = nu(e.y, t.minY + e.r, t.maxY - e.r);
}
function gw(e, t) {
  const n = e.r + t.r;
  let r = t.x - e.x, i = t.y - e.y, s = Math.hypot(r, i);
  if (s >= n) return;
  s < 1e-6 && (r = 1, i = 0, s = 1);
  const o = (n - s) / 2, a = r / s, l = i / s;
  e.x -= a * o, e.y -= l * o, t.x += a * o, t.y += l * o;
}
function vw(e, t) {
  for (const n of t) {
    const r = hw(e.x, e.y, e.r, n);
    e.x += r.x, e.y += r.y;
  }
}
function pw(e, t, n, r = []) {
  const i = e.map((s) => {
    const o = (s.pos.x - s.prevPos.x) * n.friction, a = (s.pos.y - s.prevPos.y) * n.friction, l = (s.target.x - s.pos.x) * n.stiffness, u = (s.target.y - s.pos.y) * n.stiffness;
    return { x: s.pos.x + o + l, y: s.pos.y + a + u, r: s.radius };
  });
  for (const s of i) ru(s, t);
  for (let s = 0; s < n.iterations; s++) {
    for (let o = 0; o < i.length; o++) for (let a = o + 1; a < i.length; a++) gw(i[o], i[a]);
    if (r.length) for (const o of i) vw(o, r);
    for (const o of i) ru(o, t);
  }
  return i.map((s) => ({ x: s.x, y: s.y }));
}
const yw = 25.5, bw = 40, ww = 0.05, _w = 720, Sw = 12;
function Cw(e) {
  return { minX: Li, minY: Li, maxX: e.w - Li, maxY: e.h - Li };
}
const xw = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Aw() {
  const e = di(), t = um(), n = X([]), r = /* @__PURE__ */ new Map(), i = xw();
  function s(c) {
    const f = e.camera.value, d = e.viewport.value, m = e.spacing.value, b = Cw(d), g = { x: d.w / 2, y: d.h / 2 }, S = mr.map((H) => {
      const Y = ui(H, m);
      return { wp: H, dist: Ib(Y, f), bearing: Rb(Y, f, d) };
    }).filter((H) => H.dist > jl), v = S.map((H) => H.dist), y = v.length ? Math.min(...v) : 0, A = v.length ? Math.max(...v) : 1, w = Math.min(d.w, d.h), x = Math.min(Sw, Math.max(0, ww * (w - _w))), E = yw + x, T = bw + x, _ = S.map((H) => {
      const Y = Ob(H.dist, y, A, E, T), z = Db(g, H.bearing, b, Y), J = r.get(H.wp.id) ?? { pos: z, prevPos: z };
      return { pos: J.pos, prevPos: J.prevPos, target: z, radius: Y };
    }), V = p0(), R = pw(_, b, { stiffness: c ? 1 : Og, friction: c ? 0 : Vg, iterations: Dg }, V), F = new Set(S.map((H) => H.wp.id));
    for (const H of [...r.keys()]) F.has(H) || r.delete(H);
    let P = true;
    return n.value = S.map((H, Y) => {
      const z = R[Y], J = _[Y].pos;
      r.set(H.wp.id, { pos: z, prevPos: J });
      const Q = _[Y].target;
      return (Math.hypot(z.x - J.x, z.y - J.y) > 0.3 || Math.hypot(z.x - Q.x, z.y - Q.y) > 0.5) && (P = false), { id: H.wp.id, route: H.wp.route, label: H.wp.label, icon: H.wp.icon, x: z.x, y: z.y, radius: _[Y].radius, bearing: H.bearing, opacity: Math.min(1, Math.max(0, (H.dist - jl) / Ig)) };
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
  return ce([() => e.camera.value.x, () => e.camera.value.y, () => e.viewport.value, () => e.spacing.value, e.isAnimating, () => t.name], u), Wt(() => i ? s(true) : u()), On(() => {
    o && cancelAnimationFrame(o);
  }), n;
}
const Lw = { class: "compass", "aria-label": "Move to a section" }, Ew = ["aria-label", "title", "onClick"], kw = Ye({ __name: "CompassNav", setup(e) {
  const t = Pb(), n = Aw();
  function r(i) {
    t.push(i);
  }
  return (i, s) => (le(), me("nav", Lw, [(le(true), me(we, null, ht(re(n), (o) => (le(), me("button", { key: o.id, type: "button", class: "compass__marker", style: He({ transform: `translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`, width: `${o.radius * 2}px`, height: `${o.radius * 2}px`, opacity: o.opacity, pointerEvents: o.opacity > 0.4 ? "auto" : "none" }), "aria-label": `Go to ${o.label}`, title: o.label, onClick: (a) => r(o.route) }, [k("span", { class: "compass__arrow", style: He({ transform: `rotate(${o.bearing}rad)` }), "aria-hidden": "true" }, null, 4), M(st, { icon: o.icon, size: Math.round(o.radius), class: "compass__icon" }, null, 8, ["icon", "size"])], 12, Ew))), 128))]));
} }), Mw = At(kw, [["__scopeId", "data-v-41dac3fc"]]), iu = Symbol.for("vuetify:layout"), Tw = Symbol.for("vuetify:layout-item"), su = 1e3, Pw = ne({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), Rw = (e, t, n, r) => {
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
function Iw(e) {
  const t = ke(iu, null), n = $(() => t ? t.rootZIndex.value - 100 : su), r = X([]), i = Ue(/* @__PURE__ */ new Map()), s = Ue(/* @__PURE__ */ new Map()), o = Ue(/* @__PURE__ */ new Map()), a = Ue(/* @__PURE__ */ new Map()), l = Ue(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = _d(), f = $(() => {
    const E = /* @__PURE__ */ new Map(), T = e.overlaps ?? [];
    for (const _ of T.filter((V) => V.includes(":"))) {
      const [V, R] = _.split(":");
      if (!r.value.includes(V) || !r.value.includes(R)) continue;
      const F = i.get(V), P = i.get(R), H = s.get(V), Y = s.get(R);
      !F || !P || !H || !Y || (E.set(R, { position: F.value, amount: parseInt(H.value, 10) }), E.set(V, { position: P.value, amount: -parseInt(Y.value, 10) }));
    }
    return E;
  }), d = $(() => {
    const E = [...new Set([...o.values()].map((_) => _.value))].sort((_, V) => _ - V), T = [];
    for (const _ of E) {
      const V = r.value.filter((R) => {
        var _a2;
        return ((_a2 = o.get(R)) == null ? void 0 : _a2.value) === _;
      });
      T.push(...V);
    }
    return Rw(T, i, s, a);
  }), m = $(() => !Array.from(l.values()).some((E) => E.value)), b = $(() => d.value[d.value.length - 1].layer), g = B(() => ({ "--v-layout-left": pe(b.value.left), "--v-layout-right": pe(b.value.right), "--v-layout-top": pe(b.value.top), "--v-layout-bottom": pe(b.value.bottom), ...m.value ? void 0 : { transition: "none" } })), S = $(() => d.value.slice(1).map((E, T) => {
    let { id: _ } = E;
    const { layer: V } = d.value[T], R = s.get(_), F = i.get(_);
    return { id: _, ...V, size: Number(R.value), position: F.value };
  })), v = (E) => S.value.find((T) => T.id === E), y = Ze("createLayout"), A = ve(false);
  return Wt(() => {
    A.value = true;
  }), it(iu, { register: (E, T) => {
    let { id: _, order: V, position: R, layoutSize: F, elementSize: P, active: H, disableTransitions: Y, absolute: z } = T;
    o.set(_, V), i.set(_, R), s.set(_, F), a.set(_, H), Y && l.set(_, Y);
    const Q = Wn(Tw, y == null ? void 0 : y.vnode).indexOf(E);
    Q > -1 ? r.value.splice(Q, 0, _) : r.value.push(_);
    const oe = $(() => S.value.findIndex((he) => he.id === _)), Oe = $(() => n.value + d.value.length * 2 - oe.value * 2), _e = $(() => {
      const he = R.value === "left" || R.value === "right", de = R.value === "right", Be = R.value === "bottom", Ge = P.value ?? F.value, $e = Ge === 0 ? "%" : "px", L = { [R.value]: 0, zIndex: Oe.value, transform: `translate${he ? "X" : "Y"}(${(H.value ? 0 : -(Ge === 0 ? 100 : Ge)) * (de || Be ? -1 : 1)}${$e})`, position: z.value || n.value !== su ? "absolute" : "fixed", ...m.value ? void 0 : { transition: "none" } };
      if (!A.value) return L;
      const j = S.value[oe.value], G = f.value.get(_);
      return G && (j[G.position] += G.amount), { ...L, height: he ? `calc(100% - ${j.top}px - ${j.bottom}px)` : P.value ? `${P.value}px` : void 0, left: de ? void 0 : `${j.left}px`, right: de ? `${j.right}px` : void 0, top: R.value !== "bottom" ? `${j.top}px` : void 0, bottom: R.value !== "top" ? `${j.bottom}px` : void 0, width: he ? P.value ? `${P.value}px` : void 0 : `calc(100% - ${j.left}px - ${j.right}px)` };
    }), ae = $(() => ({ zIndex: Oe.value - 1 }));
    return { layoutItemStyles: _e, layoutItemScrimStyles: ae, zIndex: Oe };
  }, unregister: (E) => {
    o.delete(E), i.delete(E), s.delete(E), a.delete(E), l.delete(E), r.value = r.value.filter((T) => T !== E);
  }, mainRect: b, mainStyles: g, getLayoutItem: v, items: S, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: v, items: S, layoutRect: c, layoutRef: u };
}
const Ow = ne({ ...qe(), ...mi(Pw(), ["fullHeight"]), ...Gt() }, "VApp"), Vw = Pe()({ name: "VApp", props: Ow(), setup(e, t) {
  let { slots: n } = t;
  const r = sn(e), { layoutClasses: i, getLayoutItem: s, items: o, layoutRef: a } = Iw({ ...e, fullHeight: true }), { rtlClasses: l } = bi();
  return ze(() => {
    var _a2;
    return k("div", { ref: a, class: Le(["v-application", r.themeClasses.value, i.value, l.value, e.class]), style: He([e.style]) }, [k("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: s, items: o, theme: r };
} }), Dw = Ye({ __name: "App", setup(e) {
  return (t, n) => (le(), rr(Vw, { class: "app-shell" }, { default: Ne(() => [M(m0), M(x0), M(mw), M(Mw)]), _: 1 }));
} }), Hw = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, $w = { component: (e) => vn(wd, { ...e, class: "mdi" }) };
function Fw() {
  return { svg: { component: La }, class: { component: wd } };
}
function Nw(e) {
  const t = Fw(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = $w), pt({ defaultSet: n, sets: t, aliases: { ...Hw, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function _i(e) {
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
function Bw(e, t, n) {
  var _a2;
  const r = [];
  let i = [];
  const s = fm(e), o = dm(e), a = n ?? ((_a2 = _i(t)) == null ? void 0 : _a2.firstDay) ?? 0, l = (s.getDay() - a + 7) % 7, u = (o.getDay() - a + 7) % 7;
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
function Nr(e, t, n) {
  var _a2;
  let r = (n ?? ((_a2 = _i(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (r = 0);
  const i = new Date(e);
  for (; i.getDay() !== r; ) i.setDate(i.getDate() - 1);
  return i;
}
function jw(e, t) {
  var _a2;
  const n = new Date(e), r = ((((_a2 = _i(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function fm(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function dm(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Ww(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const zw = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function mm(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (zw.test(e)) return Ww(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const ou = new Date(2e3, 0, 2);
function Gw(e, t, n) {
  var _a2;
  const r = t ?? ((_a2 = _i(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return rd(7).map((i) => {
    const s = new Date(ou);
    return s.setDate(ou.getDate() + r + i), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(s);
  });
}
function Uw(e, t, n, r) {
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
function Zw(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), i = Zl(String(n.getMonth() + 1), 2, "0"), s = Zl(String(n.getDate()), 2, "0");
  return `${r}-${i}-${s}`;
}
function Kw(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function Yw(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function qw(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Rn(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Xw(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Jw(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ni(e) {
  return e.getFullYear();
}
function Qw(e) {
  return e.getMonth();
}
function e_(e, t, n, r) {
  const i = _i(t), s = n ?? (i == null ? void 0 : i.firstDay) ?? 0, o = (i == null ? void 0 : i.firstWeekSize) ?? 1;
  return r !== void 0 ? t_(e, t, s, r) : n_(e, t, s, o);
}
function t_(e, t, n, r) {
  const i = (7 + r - n) % 7, s = Nr(e, t, n), o = Rn(s, 6);
  function a(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let l = ni(s);
  l < ni(o) && a(l + 1) <= i && l++;
  const u = new Date(l, 0, 1), c = a(l), f = c <= i ? Rn(u, -c) : Rn(u, 7 - c);
  return 1 + rs($a(s), ri(f), "weeks");
}
function n_(e, t, n, r) {
  const i = Nr(e, t, n), s = Rn(Nr(e, t, n), 6);
  function o(f) {
    const d = new Date(f, 0, 1);
    return 7 - rs(d, Nr(d, t, n), "days");
  }
  let a = ni(i);
  a < ni(s) && o(a + 1) >= r && a++;
  const l = new Date(a, 0, 1), u = o(a), c = u >= r ? Rn(l, u - 7) : Rn(l, u);
  return 1 + rs($a(i), ri(c), "weeks");
}
function r_(e) {
  return e.getDate();
}
function i_(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function s_(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function o_(e) {
  return e.getHours();
}
function a_(e) {
  return e.getMinutes();
}
function l_(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function c_(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function u_(e, t) {
  return ns(e, t[0]) && m_(e, t[1]);
}
function f_(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function ns(e, t) {
  return e.getTime() > t.getTime();
}
function d_(e, t) {
  return ns(ri(e), ri(t));
}
function m_(e, t) {
  return e.getTime() < t.getTime();
}
function au(e, t) {
  return e.getTime() === t.getTime();
}
function h_(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function g_(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function v_(e, t) {
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
function p_(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function y_(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function b_(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function w_(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function __(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function ri(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function $a(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class S_ {
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
    return Zw(this, t);
  }
  parseISO(t) {
    return Kw(t);
  }
  addMinutes(t, n) {
    return Yw(t, n);
  }
  addHours(t, n) {
    return qw(t, n);
  }
  addDays(t, n) {
    return Rn(t, n);
  }
  addWeeks(t, n) {
    return Xw(t, n);
  }
  addMonths(t, n) {
    return Jw(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Bw(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Nr(t, this.locale, r);
  }
  endOfWeek(t) {
    return jw(t, this.locale);
  }
  startOfMonth(t) {
    return fm(t);
  }
  endOfMonth(t) {
    return dm(t);
  }
  format(t, n) {
    return Uw(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return au(t, n);
  }
  isValid(t) {
    return f_(t);
  }
  isWithinRange(t, n) {
    return u_(t, n);
  }
  isAfter(t, n) {
    return ns(t, n);
  }
  isAfterDay(t, n) {
    return d_(t, n);
  }
  isBefore(t, n) {
    return !ns(t, n) && !au(t, n);
  }
  isSameDay(t, n) {
    return h_(t, n);
  }
  isSameMonth(t, n) {
    return g_(t, n);
  }
  isSameYear(t, n) {
    return v_(t, n);
  }
  setMinutes(t, n) {
    return y_(t, n);
  }
  setHours(t, n) {
    return p_(t, n);
  }
  setMonth(t, n) {
    return b_(t, n);
  }
  setDate(t, n) {
    return w_(t, n);
  }
  setYear(t, n) {
    return __(t, n);
  }
  getDiff(t, n, r) {
    return rs(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return Gw(this.locale, r, n);
  }
  getYear(t) {
    return ni(t);
  }
  getMonth(t) {
    return Qw(t);
  }
  getWeek(t, n, r) {
    const i = n !== void 0 ? Number(n) : void 0, s = r !== void 0 ? Number(r) : void 0;
    return e_(t, this.locale, i, s);
  }
  getDate(t) {
    return r_(t);
  }
  getNextMonth(t) {
    return i_(t);
  }
  getPreviousMonth(t) {
    return s_(t);
  }
  getHours(t) {
    return o_(t);
  }
  getMinutes(t) {
    return a_(t);
  }
  startOfDay(t) {
    return ri(t);
  }
  endOfDay(t) {
    return $a(t);
  }
  startOfYear(t) {
    return l_(t);
  }
  endOfYear(t) {
    return c_(t);
  }
}
const C_ = Symbol.for("vuetify:date-options"), lu = Symbol.for("vuetify:date-adapter");
function x_(e, t) {
  const n = pt({ adapter: S_, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: A_(n, t) };
}
function A_(e, t) {
  const n = Ue(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return ce(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
function hm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, r = pt(t, n), { aliases: i = {}, components: s = {}, directives: o = {} } = r, a = Br();
  return a.run(() => {
    const l = Vv(r.defaults), u = Xp(r.display, r.ssr), c = ep(r.theme), f = Nw(r.icons), d = Ap(r.locale), m = x_(r.date, d), b = cy(r.goTo, d);
    function g(v) {
      for (const A in o) v.directive(A, o[A]);
      for (const A in s) v.component(A, s[A]);
      for (const A in i) v.component(A, hr({ ...i[A], name: A, aliasName: i[A].name }));
      const y = Br();
      if (y.run(() => {
        c.install(v);
      }), v.onUnmount(() => y.stop()), v.provide(lr, l), v.provide(Mo, u), v.provide(Xr, c), v.provide(xo, f), v.provide(Ao, d), v.provide(C_, m.options), v.provide(lu, m.instance), v.provide(ay, b), Ie && r.ssr) if (v.$nuxt) v.$nuxt.hook("app:suspense:resolve", () => {
        u.update();
      });
      else {
        const { mount: A } = v;
        v.mount = function() {
          const w = A(...arguments);
          return dt(() => u.update()), v.mount = A, w;
        };
      }
      v.mixin({ computed: { $vuetify() {
        return Ue({ defaults: Fn.call(this, lr), display: Fn.call(this, Mo), theme: Fn.call(this, Xr), icons: Fn.call(this, xo), locale: Fn.call(this, Ao), date: Fn.call(this, lu) });
      } } });
    }
    function S() {
      a.stop();
    }
    return { install: g, unmount: S, defaults: l, display: u, theme: c, icons: f, locale: d, date: m, goTo: b };
  });
}
const L_ = "3.12.1";
hm.version = L_;
function Fn(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const E_ = { collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z", info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z", checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z", sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z", expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", subgroup: "svg:M7,10L12,15L17,10H7Z", dropdown: "svg:M7,10L12,15L17,10H7Z", radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z", radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12", first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z", last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z", unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z", file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z", plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", minus: "svg:M19,13H5V11H19V13Z", calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", treeviewCollapse: "svg:M7,10L12,15L17,10H7Z", treeviewExpand: "svg:M10,17L15,12L10,7V17Z", tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z", upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z", color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8", command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z", ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z", space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z", shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z", alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z", enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z", arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z", arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z", arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z", arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z", backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z", play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z", pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z", fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z", volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z", volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z", volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z", search: "svg:M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, k_ = { component: La }, M_ = hm({ icons: { defaultSet: "mdi", aliases: E_, sets: { mdi: k_ } }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function T_(e) {
  const t = di();
  let n = true, r = null;
  const i = (s) => {
    var _a2;
    (_a2 = document.getElementById(`panel-${s}`)) == null ? void 0 : _a2.focus({ preventScroll: true });
  };
  e.afterEach((s) => {
    const o = Lg(s.name);
    t.panToWaypoint(o, { snap: n }), n || (t.isAnimating.value ? r = o : i(o)), n = false;
  }), ce(t.isAnimating, (s) => {
    !s && r !== null && (i(r), r = null);
  });
}
const P_ = Ye({ name: "RouteCoordinate", render: () => null }), R_ = [...mr.map((e) => ({ path: e.route, name: e.id, component: P_ })), { path: "/:pathMatch(.*)*", redirect: "/" }], Fa = Tb({ history: lb("/"), routes: R_ }), I_ = D1(Dw).use(M_).use(Fa);
T_(Fa);
Fa.isReady().then(() => I_.mount("#app"));
