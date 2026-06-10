(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const i = {};
    return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(s) {
    if (s.ep) return;
    s.ep = true;
    const i = n(s);
    fetch(s.href, i);
  }
})();
/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $o(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ee = {}, zn = [], jt = () => {
}, iu = () => false, ni = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bo = (e) => e.startsWith("onUpdate:"), je = Object.assign, jo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fm = Object.prototype.hasOwnProperty, xe = (e, t) => fm.call(e, t), se = Array.isArray, Gn = (e) => ss(e) === "[object Map]", ou = (e) => ss(e) === "[object Set]", $a = (e) => ss(e) === "[object Date]", ue = (e) => typeof e == "function", De = (e) => typeof e == "string", Mt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", au = (e) => (Se(e) || ue(e)) && ue(e.then) && ue(e.catch), lu = Object.prototype.toString, ss = (e) => lu.call(e), dm = (e) => ss(e).slice(8, -1), cu = (e) => ss(e) === "[object Object]", ri = (e) => De(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mr = $o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), si = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, mm = /-\w/g, _t = si((e) => e.replace(mm, (t) => t.slice(1).toUpperCase())), hm = /\B([A-Z])/g, On = si((e) => e.replace(hm, "-$1").toLowerCase()), ur = si((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ai = si((e) => e ? `on${ur(e)}` : ""), dn = (e, t) => !Object.is(e, t), Li = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, uu = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, gm = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, vm = (e) => {
  const t = De(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ba;
const ii = () => Ba || (Ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function He(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = De(r) ? _m(r) : He(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else if (De(e) || Se(e)) return e;
}
const pm = /;(?![^(]*\))/g, ym = /:([^]+)/, bm = /\/\*[^]*?\*\//g;
function _m(e) {
  const t = {};
  return e.replace(bm, "").split(pm).forEach((n) => {
    if (n) {
      const r = n.split(ym);
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
const wm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Sm = $o(wm);
function fu(e) {
  return !!e || e === "";
}
function Cm(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let r = 0; n && r < e.length; r++) n = Wo(e[r], t[r]);
  return n;
}
function Wo(e, t) {
  if (e === t) return true;
  let n = $a(e), r = $a(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : false;
  if (n = Mt(e), r = Mt(t), n || r) return e === t;
  if (n = se(e), r = se(t), n || r) return n && r ? Cm(e, t) : false;
  if (n = Se(e), r = Se(t), n || r) {
    if (!n || !r) return false;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i) return false;
    for (const o in e) {
      const a = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (a && !l || !a && l || !Wo(e[o], t[o])) return false;
    }
  }
  return String(e) === String(t);
}
const du = (e) => !!(e && e.__v_isRef === true), ye = (e) => De(e) ? e : e == null ? "" : se(e) || Se(e) && (e.toString === lu || !ue(e.toString)) ? du(e) ? ye(e.value) : JSON.stringify(e, mu, 2) : String(e), mu = (e, t) => du(t) ? mu(e, t.value) : Gn(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], i) => (n[Ei(r, i) + " =>"] = s, n), {}) } : ou(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ei(n)) } : Mt(t) ? Ei(t) : Se(t) && !se(t) && !cu(t) ? String(t) : t, Ei = (e, t = "") => {
  var n;
  return Mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Je;
class hu {
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
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function $r(e) {
  return new hu(e);
}
function gu() {
  return Je;
}
function ct(e, t = false) {
  Je && Je.cleanups.push(e);
}
let Te;
const Mi = /* @__PURE__ */ new WeakSet();
class vu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && Je.active && Je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Mi.has(this) && (Mi.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yu(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ja(this), bu(this);
    const t = Te, n = Et;
    Te = this, Et = true;
    try {
      return this.fn();
    } finally {
      _u(this), Te = t, Et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Uo(t);
      this.deps = this.depsTail = void 0, ja(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Mi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ro(this) && this.run();
  }
  get dirty() {
    return ro(this);
  }
}
let pu = 0, kr, Tr;
function yu(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Tr, Tr = e;
    return;
  }
  e.next = kr, kr = e;
}
function zo() {
  pu++;
}
function Go() {
  if (--pu > 0) return;
  if (Tr) {
    let t = Tr;
    for (Tr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kr; ) {
    let t = kr;
    for (kr = void 0; t; ) {
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
function bu(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function _u(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Uo(r), xm(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function ro(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (wu(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function wu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Br) || (e.globalVersion = Br, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ro(e)))) return;
  e.flags |= 2;
  const t = e.dep, n = Te, r = Et;
  Te = e, Et = true;
  try {
    bu(e);
    const s = e.fn(e._value);
    (t.version === 0 || dn(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Te = n, Et = r, _u(e), e.flags &= -3;
  }
}
function Uo(e, t = false) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep) Uo(i, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xm(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Et = true;
const Su = [];
function en() {
  Su.push(Et), Et = false;
}
function tn() {
  const e = Su.pop();
  Et = e === void 0 ? true : e;
}
function ja(e) {
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
let Br = 0;
class Am {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t) {
    if (!Te || !Et || Te === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Te) n = this.activeLink = new Am(Te, this), Te.deps ? (n.prevDep = Te.depsTail, Te.depsTail.nextDep = n, Te.depsTail = n) : Te.deps = Te.depsTail = n, Cu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Te.depsTail, n.nextDep = void 0, Te.depsTail.nextDep = n, Te.depsTail = n, Te.deps === n && (Te.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Br++, this.notify(t);
  }
  notify(t) {
    zo();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Go();
    }
  }
}
function Cu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Cu(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vs = /* @__PURE__ */ new WeakMap(), Mn = Symbol(""), so = Symbol(""), jr = Symbol("");
function Qe(e, t, n) {
  if (Et && Te) {
    let r = Vs.get(e);
    r || Vs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Zo()), s.map = r, s.key = n), s.track();
  }
}
function Xt(e, t, n, r, s, i) {
  const o = Vs.get(e);
  if (!o) {
    Br++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (zo(), t === "clear") o.forEach(a);
  else {
    const l = se(e), u = l && ri(n);
    if (l && n === "length") {
      const c = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === jr || !Mt(d) && d >= c) && a(f);
      });
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(jr)), t) {
      case "add":
        l ? u && a(o.get("length")) : (a(o.get(Mn)), Gn(e) && a(o.get(so)));
        break;
      case "delete":
        l || (a(o.get(Mn)), Gn(e) && a(o.get(so)));
        break;
      case "set":
        Gn(e) && a(o.get(Mn));
        break;
    }
  }
  Go();
}
function Lm(e, t) {
  const n = Vs.get(e);
  return n && n.get(t);
}
function Vn(e) {
  const t = te(e);
  return t === e ? t : (Qe(t, "iterate", jr), bt(e) ? t : t.map(kt));
}
function oi(e) {
  return Qe(e = te(e), "iterate", jr), e;
}
function cn(e, t) {
  return nn(e) ? Qn(kn(e) ? kt(t) : t) : kt(t);
}
const Em = { __proto__: null, [Symbol.iterator]() {
  return ki(this, Symbol.iterator, (e) => cn(this, e));
}, concat(...e) {
  return Vn(this).concat(...e.map((t) => se(t) ? Vn(t) : t));
}, entries() {
  return ki(this, "entries", (e) => (e[1] = cn(this, e[1]), e));
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
  return Ti(this, "includes", e);
}, indexOf(...e) {
  return Ti(this, "indexOf", e);
}, join(e) {
  return Vn(this).join(e);
}, lastIndexOf(...e) {
  return Ti(this, "lastIndexOf", e);
}, map(e, t) {
  return Ut(this, "map", e, t, void 0, arguments);
}, pop() {
  return br(this, "pop");
}, push(...e) {
  return br(this, "push", e);
}, reduce(e, ...t) {
  return Wa(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Wa(this, "reduceRight", e, t);
}, shift() {
  return br(this, "shift");
}, some(e, t) {
  return Ut(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return br(this, "splice", e);
}, toReversed() {
  return Vn(this).toReversed();
}, toSorted(e) {
  return Vn(this).toSorted(e);
}, toSpliced(...e) {
  return Vn(this).toSpliced(...e);
}, unshift(...e) {
  return br(this, "unshift", e);
}, values() {
  return ki(this, "values", (e) => cn(this, e));
} };
function ki(e, t, n) {
  const r = oi(e), s = r[t]();
  return r !== e && !bt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Mm = Array.prototype;
function Ut(e, t, n, r, s, i) {
  const o = oi(e), a = o !== e && !bt(e), l = o[t];
  if (l !== Mm[t]) {
    const f = l.apply(e, i);
    return a ? kt(f) : f;
  }
  let u = n;
  o !== e && (a ? u = function(f, d) {
    return n.call(this, cn(e, f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const c = l.call(o, u, r);
  return a && s ? s(c) : c;
}
function Wa(e, t, n, r) {
  const s = oi(e);
  let i = n;
  return s !== e && (bt(e) ? n.length > 3 && (i = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : i = function(o, a, l) {
    return n.call(this, o, cn(e, a), l, e);
  }), s[t](i, ...r);
}
function Ti(e, t, n) {
  const r = te(e);
  Qe(r, "iterate", jr);
  const s = r[t](...n);
  return (s === -1 || s === false) && ai(n[0]) ? (n[0] = te(n[0]), r[t](...n)) : s;
}
function br(e, t, n = []) {
  en(), zo();
  const r = te(e)[t].apply(e, n);
  return Go(), tn(), r;
}
const km = $o("__proto__,__v_isRef,__isVue"), xu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Mt));
function Tm(e) {
  Mt(e) || (e = String(e));
  const t = te(this);
  return Qe(t, "has", e), t.hasOwnProperty(e);
}
class Au {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw") return r === (s ? i ? $m : ku : i ? Mu : Eu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = se(t);
    if (!s) {
      let l;
      if (o && (l = Em[n])) return l;
      if (n === "hasOwnProperty") return Tm;
    }
    const a = Reflect.get(t, n, Ve(t) ? t : r);
    if ((Mt(n) ? xu.has(n) : km(n)) || (s || Qe(t, "get", n), i)) return a;
    if (Ve(a)) {
      const l = o && ri(n) ? a : a.value;
      return s && Se(l) ? Jn(l) : l;
    }
    return Se(a) ? s ? Jn(a) : Ue(a) : a;
  }
}
class Lu extends Au {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = se(t) && ri(n);
    if (!this._isShallow) {
      const u = nn(i);
      if (!bt(r) && !nn(r) && (i = te(i), r = te(r)), !o && Ve(i) && !Ve(r)) return u || (i.value = r), true;
    }
    const a = o ? Number(n) < t.length : xe(t, n), l = Reflect.set(t, n, r, Ve(t) ? t : s);
    return t === te(s) && (a ? dn(r, i) && Xt(t, "set", n, r) : Xt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = xe(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Xt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Mt(n) || !xu.has(n)) && Qe(t, "has", n), r;
  }
  ownKeys(t) {
    return Qe(t, "iterate", se(t) ? "length" : Mn), Reflect.ownKeys(t);
  }
}
class Pm extends Au {
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
const Rm = new Lu(), Im = new Pm(), Om = new Lu(true);
const io = (e) => e, Ss = (e) => Reflect.getPrototypeOf(e);
function Vm(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = te(s), o = Gn(i), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = s[e](...r), c = n ? io : t ? Qn : kt;
    return !t && Qe(i, "iterate", l ? so : Mn), je(Object.create(u), { next() {
      const { value: f, done: d } = u.next();
      return d ? { value: f, done: d } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
    } });
  };
}
function Cs(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Dm(e, t) {
  const n = { get(s) {
    const i = this.__v_raw, o = te(i), a = te(s);
    e || (dn(s, a) && Qe(o, "get", s), Qe(o, "get", a));
    const { has: l } = Ss(o), u = t ? io : e ? Qn : kt;
    if (l.call(o, s)) return u(i.get(s));
    if (l.call(o, a)) return u(i.get(a));
    i !== o && i.get(s);
  }, get size() {
    const s = this.__v_raw;
    return !e && Qe(te(s), "iterate", Mn), s.size;
  }, has(s) {
    const i = this.__v_raw, o = te(i), a = te(s);
    return e || (dn(s, a) && Qe(o, "has", s), Qe(o, "has", a)), s === a ? i.has(s) : i.has(s) || i.has(a);
  }, forEach(s, i) {
    const o = this, a = o.__v_raw, l = te(a), u = t ? io : e ? Qn : kt;
    return !e && Qe(l, "iterate", Mn), a.forEach((c, f) => s.call(i, u(c), u(f), o));
  } };
  return je(n, e ? { add: Cs("add"), set: Cs("set"), delete: Cs("delete"), clear: Cs("clear") } : { add(s) {
    !t && !bt(s) && !nn(s) && (s = te(s));
    const i = te(this);
    return Ss(i).has.call(i, s) || (i.add(s), Xt(i, "add", s, s)), this;
  }, set(s, i) {
    !t && !bt(i) && !nn(i) && (i = te(i));
    const o = te(this), { has: a, get: l } = Ss(o);
    let u = a.call(o, s);
    u || (s = te(s), u = a.call(o, s));
    const c = l.call(o, s);
    return o.set(s, i), u ? dn(i, c) && Xt(o, "set", s, i) : Xt(o, "add", s, i), this;
  }, delete(s) {
    const i = te(this), { has: o, get: a } = Ss(i);
    let l = o.call(i, s);
    l || (s = te(s), l = o.call(i, s)), a && a.call(i, s);
    const u = i.delete(s);
    return l && Xt(i, "delete", s, void 0), u;
  }, clear() {
    const s = te(this), i = s.size !== 0, o = s.clear();
    return i && Xt(s, "clear", void 0, void 0), o;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    n[s] = Vm(s, e, t);
  }), n;
}
function Ko(e, t) {
  const n = Dm(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(xe(n, s) && s in r ? n : r, s, i);
}
const Hm = { get: Ko(false, false) }, Nm = { get: Ko(false, true) }, Fm = { get: Ko(true, false) };
const Eu = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), $m = /* @__PURE__ */ new WeakMap();
function Bm(e) {
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
function jm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bm(dm(e));
}
function Ue(e) {
  return nn(e) ? e : Yo(e, false, Rm, Hm, Eu);
}
function Tu(e) {
  return Yo(e, false, Om, Nm, Mu);
}
function Jn(e) {
  return Yo(e, true, Im, Fm, ku);
}
function Yo(e, t, n, r, s) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = jm(e);
  if (i === 0) return e;
  const o = s.get(e);
  if (o) return o;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function kn(e) {
  return nn(e) ? kn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nn(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function ai(e) {
  return e ? !!e.__v_raw : false;
}
function te(e) {
  const t = e && e.__v_raw;
  return t ? te(t) : e;
}
function Wm(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && uu(e, "__v_skip", true), e;
}
const kt = (e) => Se(e) ? Ue(e) : e, Qn = (e) => Se(e) ? Jn(e) : e;
function Ve(e) {
  return e ? e.__v_isRef === true : false;
}
function X(e) {
  return Pu(e, false);
}
function ve(e) {
  return Pu(e, true);
}
function Pu(e, t) {
  return Ve(e) ? e : new zm(e, t);
}
class zm {
  constructor(t, n) {
    this.dep = new Zo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : te(t), this._value = n ? t : kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || bt(t) || nn(t);
    t = r ? t : te(t), dn(t, n) && (this._rawValue = t, this._value = r ? t : kt(t), this.dep.trigger());
  }
}
function oe(e) {
  return Ve(e) ? e.value : e;
}
function nt(e) {
  return ue(e) ? e() : oe(e);
}
const Gm = { get: (e, t, n) => t === "__v_raw" ? e : oe(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const s = e[t];
  return Ve(s) && !Ve(n) ? (s.value = n, true) : Reflect.set(e, t, n, r);
} };
function Ru(e) {
  return kn(e) ? e : new Proxy(e, Gm);
}
function Iu(e) {
  const t = se(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Ou(e, n);
  return t;
}
class Um {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0, this._raw = te(t);
    let s = true, i = t;
    if (!se(t) || !ri(String(n))) do
      s = !ai(i) || bt(i);
    while (s && (i = i.__v_raw));
    this._shallow = s;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = oe(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return Lm(this._raw, this._key);
  }
}
class Zm {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function B(e, t, n) {
  return Ve(e) ? e : ue(e) ? new Zm(e) : Se(e) && arguments.length > 1 ? Ou(e, t, n) : X(e);
}
function Ou(e, t, n) {
  return new Um(e, t, n);
}
class Km {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Br - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Te !== this) return yu(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return wu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ym(e, t, n = false) {
  let r, s;
  return ue(e) ? r = e : (r = e.get, s = e.set), new Km(r, s, n);
}
const xs = {}, Ds = /* @__PURE__ */ new WeakMap();
let xn;
function qm(e, t = false, n = xn) {
  if (n) {
    let r = Ds.get(n);
    r || Ds.set(n, r = []), r.push(e);
  }
}
function Xm(e, t, n = Ee) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: a, call: l } = n, u = (_) => s ? _ : bt(_) || s === false || s === 0 ? Jt(_, 1) : Jt(_);
  let c, f, d, m, b = false, g = false;
  if (Ve(e) ? (f = () => e.value, b = bt(e)) : kn(e) ? (f = () => u(e), b = true) : se(e) ? (g = true, b = e.some((_) => kn(_) || bt(_)), f = () => e.map((_) => {
    if (Ve(_)) return _.value;
    if (kn(_)) return u(_);
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
  } : f = jt, t && s) {
    const _ = f, x = s === true ? 1 / 0 : s;
    f = () => Jt(_(), x);
  }
  const S = gu(), v = () => {
    c.stop(), S && S.active && jo(S.effects, c);
  };
  if (i && t) {
    const _ = t;
    t = (...x) => {
      _(...x), v();
    };
  }
  let y = g ? new Array(e.length).fill(xs) : xs;
  const A = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_)) if (t) {
      const x = c.run();
      if (s || b || (g ? x.some((E, T) => dn(E, y[T])) : dn(x, y))) {
        d && d();
        const E = xn;
        xn = c;
        try {
          const T = [x, y === xs ? void 0 : g && y[0] === xs ? [] : y, m];
          y = x, l ? l(t, 3, T) : t(...T);
        } finally {
          xn = E;
        }
      }
    } else c.run();
  };
  return a && a(A), c = new vu(f), c.scheduler = o ? () => o(A, false) : A, m = (_) => qm(_, false, c), d = c.onStop = () => {
    const _ = Ds.get(c);
    if (_) {
      if (l) l(_, 4);
      else for (const x of _) x();
      Ds.delete(c);
    }
  }, t ? r ? A(true) : y = c.run() : o ? o(A.bind(null, true), true) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v;
}
function Jt(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, Ve(e)) Jt(e.value, t, n);
  else if (se(e)) for (let r = 0; r < e.length; r++) Jt(e[r], t, n);
  else if (ou(e) || Gn(e)) e.forEach((r) => {
    Jt(r, t, n);
  });
  else if (cu(e)) {
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
function is(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    li(s, t, n);
  }
}
function Tt(e, t, n, r) {
  if (ue(e)) {
    const s = is(e, t, n, r);
    return s && au(s) && s.catch((i) => {
      li(i, t, n);
    }), s;
  }
  if (se(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++) s.push(Tt(e[i], t, n, r));
    return s;
  }
}
function li(e, t, n, r = true) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ee;
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
    if (i) {
      en(), is(i, null, 10, [e, l, u]), tn();
      return;
    }
  }
  Jm(e, n, s, r, o);
}
function Jm(e, t, n, r = true, s = false) {
  if (s) throw e;
  console.error(e);
}
const lt = [];
let Nt = -1;
const Un = [];
let un = null, Fn = 0;
const Vu = Promise.resolve();
let Hs = null;
function dt(e) {
  const t = Hs || Vu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qm(e) {
  let t = Nt + 1, n = lt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = lt[r], i = Wr(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function qo(e) {
  if (!(e.flags & 1)) {
    const t = Wr(e), n = lt[lt.length - 1];
    !n || !(e.flags & 2) && t >= Wr(n) ? lt.push(e) : lt.splice(Qm(t), 0, e), e.flags |= 1, Du();
  }
}
function Du() {
  Hs || (Hs = Vu.then(Nu));
}
function eh(e) {
  se(e) ? Un.push(...e) : un && e.id === -1 ? un.splice(Fn + 1, 0, e) : e.flags & 1 || (Un.push(e), e.flags |= 1), Du();
}
function za(e, t, n = Nt + 1) {
  for (; n < lt.length; n++) {
    const r = lt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      lt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Hu(e) {
  if (Un.length) {
    const t = [...new Set(Un)].sort((n, r) => Wr(n) - Wr(r));
    if (Un.length = 0, un) {
      un.push(...t);
      return;
    }
    for (un = t, Fn = 0; Fn < un.length; Fn++) {
      const n = un[Fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    un = null, Fn = 0;
  }
}
const Wr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Nu(e) {
  try {
    for (Nt = 0; Nt < lt.length; Nt++) {
      const t = lt[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), is(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nt < lt.length; Nt++) {
      const t = lt[Nt];
      t && (t.flags &= -2);
    }
    Nt = -1, lt.length = 0, Hu(), Hs = null, (lt.length || Un.length) && Nu();
  }
}
let Ke = null, Fu = null;
function Ns(e) {
  const t = Ke;
  return Ke = e, Fu = e && e.type.__scopeId || null, t;
}
function Be(e, t = Ke, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Bs(-1);
    const i = Ns(t);
    let o;
    try {
      o = e(...s);
    } finally {
      Ns(i), r._d && Bs(1);
    }
    return o;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function er(e, t) {
  if (Ke === null) return e;
  const n = mi(Ke), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, l = Ee] = t[s];
    i && (ue(i) && (i = { mounted: i, updated: i }), i.deep && Jt(o), r.push({ dir: i, instance: n, value: o, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function yn(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[r];
    l && (en(), Tt(l, n, 8, [e.el, a, e, t]), tn());
  }
}
function rt(e, t) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), n[e] = t;
  }
}
function Me(e, t, n = false) {
  const r = cs();
  if (r || Kn) {
    let s = Kn ? Kn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ue(t) ? t.call(r && r.proxy) : t;
  }
}
const th = Symbol.for("v-scx"), nh = () => Me(th);
function gn(e, t) {
  return Xo(e, null, t);
}
function le(e, t, n) {
  return Xo(e, t, n);
}
function Xo(e, t, n = Ee) {
  const { immediate: r, deep: s, flush: i, once: o } = n, a = je({}, n), l = t && r || !t && i !== "post";
  let u;
  if (Kr) {
    if (i === "sync") {
      const m = nh();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = jt, m.resume = jt, m.pause = jt, m;
    }
  }
  const c = tt;
  a.call = (m, b, g) => Tt(m, c, b, g);
  let f = false;
  i === "post" ? a.scheduler = (m) => {
    Xe(m, c && c.suspense);
  } : i !== "sync" && (f = true, a.scheduler = (m, b) => {
    b ? m() : qo(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), f && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const d = Xm(e, t, a);
  return Kr && (u ? u.push(d) : l && d()), d;
}
function rh(e, t, n) {
  const r = this.proxy, s = De(e) ? e.includes(".") ? $u(r, e) : () => r[e] : e.bind(r, r);
  let i;
  ue(t) ? i = t : (i = t.handler, n = t);
  const o = us(this), a = Xo(s, i.bind(r), n);
  return o(), a;
}
function $u(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
const Bu = Symbol("_vte"), ju = (e) => e.__isTeleport, Pr = (e) => e && (e.disabled || e.disabled === ""), Ga = (e) => e && (e.defer || e.defer === ""), Ua = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Za = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, oo = (e, t) => {
  const n = e && e.to;
  return De(n) ? t ? t(n) : null : n;
}, Wu = { name: "Teleport", __isTeleport: true, process(e, t, n, r, s, i, o, a, l, u) {
  const { mc: c, pc: f, pbc: d, o: { insert: m, querySelector: b, createText: g, createComment: S } } = u, v = Pr(t.props);
  let { shapeFlag: y, children: A, dynamicChildren: _ } = t;
  if (e == null) {
    const x = t.el = g(""), E = t.anchor = g("");
    m(x, n, r), m(E, n, r);
    const T = (D, R) => {
      y & 16 && c(A, D, R, s, i, o, a, l);
    }, w = () => {
      const D = t.target = oo(t.props, b), R = ao(D, t, g, m);
      D && (o !== "svg" && Ua(D) ? o = "svg" : o !== "mathml" && Za(D) && (o = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(D), v || (T(D, R), ks(t, false)));
    };
    v && (T(n, E), ks(t, true)), Ga(t.props) ? (t.el.__isMounted = false, Xe(() => {
      w(), delete t.el.__isMounted;
    }, i)) : w();
  } else {
    if (Ga(t.props) && e.el.__isMounted === false) {
      Xe(() => {
        Wu.process(e, t, n, r, s, i, o, a, l, u);
      }, i);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, E = t.target = e.target, T = t.targetAnchor = e.targetAnchor, w = Pr(e.props), D = w ? n : E, R = w ? x : T;
    if (o === "svg" || Ua(E) ? o = "svg" : (o === "mathml" || Za(E)) && (o = "mathml"), _ ? (d(e.dynamicChildren, _, D, s, i, o, a), na(e, t, true)) : l || f(e, t, D, R, s, i, o, a, false), v) w ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : As(t, n, x, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const N = t.target = oo(t.props, b);
      N && As(t, N, null, u, 0);
    } else w && As(t, E, T, u, 1);
    ks(t, v);
  }
}, remove(e, t, n, { um: r, o: { remove: s } }, i) {
  const { shapeFlag: o, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
  if (f && (s(u), s(c)), i && s(l), o & 16) {
    const m = i || !Pr(d);
    for (let b = 0; b < a.length; b++) {
      const g = a[b];
      r(g, t, n, m, !!g.dynamicChildren);
    }
  }
}, move: As, hydrate: sh };
function As(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e, f = i === 2;
  if (f && r(o, t, n), (!f || Pr(c)) && l & 16) for (let d = 0; d < u.length; d++) s(u[d], t, n, 2);
  f && r(a, t, n);
}
function sh(e, t, n, r, s, i, { o: { nextSibling: o, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
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
    v.anchor = f(o(S), v, a(S), n, r, s, i);
  }
  const b = t.target = oo(t.props, l), g = Pr(t.props);
  if (b) {
    const S = b._lpa || b.firstChild;
    t.shapeFlag & 16 && (g ? (m(e, t), d(b, S), t.targetAnchor || ao(b, t, c, u, a(e) === b ? e : null)) : (t.anchor = o(e), d(b, S), t.targetAnchor || ao(b, t, c, u), f(S && o(S), t, b, n, r, s, i))), ks(t, g);
  } else g && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const ih = Wu;
function ks(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function ao(e, t, n, r, s = null) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[Bu] = o, e && (r(i, e, s), r(o, e, s)), o;
}
const Ft = Symbol("_leaveCb"), _r = Symbol("_enterCb");
function zu() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Wt(() => {
    e.isMounted = true;
  }), zt(() => {
    e.isUnmounting = true;
  }), e;
}
const St = [Function, Array], Gu = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: St, onEnter: St, onAfterEnter: St, onEnterCancelled: St, onBeforeLeave: St, onLeave: St, onAfterLeave: St, onLeaveCancelled: St, onBeforeAppear: St, onAppear: St, onAfterAppear: St, onAppearCancelled: St }, Uu = (e) => {
  const t = e.subTree;
  return t.component ? Uu(t.component) : t;
}, oh = { name: "BaseTransition", props: Gu, setup(e, { slots: t }) {
  const n = cs(), r = zu();
  return () => {
    const s = t.default && Jo(t.default(), true);
    if (!s || !s.length) return;
    const i = Zu(s), o = te(e), { mode: a } = o;
    if (r.isLeaving) return Pi(i);
    const l = Ka(i);
    if (!l) return Pi(i);
    let u = zr(l, o, r, n, (f) => u = f);
    l.type !== et && In(l, u);
    let c = n.subTree && Ka(n.subTree);
    if (c && c.type !== et && !Ln(c, l) && Uu(n).type !== et) {
      let f = zr(c, o, r, n);
      if (In(c, f), a === "out-in" && l.type !== et) return r.isLeaving = true, f.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
      }, Pi(i);
      a === "in-out" && l.type !== et ? f.delayLeave = (d, m, b) => {
        const g = Ku(r, c);
        g[String(c.key)] = c, d[Ft] = () => {
          m(), d[Ft] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          b(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return i;
  };
} };
function Zu(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== et) {
      t = n;
      break;
    }
  }
  return t;
}
const ah = oh;
function Ku(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function zr(e, t, n, r, s) {
  const { appear: i, mode: o, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: m, onAfterLeave: b, onLeaveCancelled: g, onBeforeAppear: S, onAppear: v, onAfterAppear: y, onAppearCancelled: A } = t, _ = String(e.key), x = Ku(n, e), E = (D, R) => {
    D && Tt(D, r, 9, R);
  }, T = (D, R) => {
    const N = R[1];
    E(D, R), se(D) ? D.every((M) => M.length <= 1) && N() : D.length <= 1 && N();
  }, w = { mode: o, persisted: a, beforeEnter(D) {
    let R = l;
    if (!n.isMounted) if (i) R = S || l;
    else return;
    D[Ft] && D[Ft](true);
    const N = x[_];
    N && Ln(e, N) && N.el[Ft] && N.el[Ft](), E(R, [D]);
  }, enter(D) {
    if (x[_] === e) return;
    let R = u, N = c, M = f;
    if (!n.isMounted) if (i) R = v || u, N = y || c, M = A || f;
    else return;
    let $ = false;
    D[_r] = (Z) => {
      $ || ($ = true, Z ? E(M, [D]) : E(N, [D]), w.delayedLeave && w.delayedLeave(), D[_r] = void 0);
    };
    const Y = D[_r].bind(null, false);
    R ? T(R, [D, Y]) : Y();
  }, leave(D, R) {
    const N = String(e.key);
    if (D[_r] && D[_r](true), n.isUnmounting) return R();
    E(d, [D]);
    let M = false;
    D[Ft] = (Y) => {
      M || (M = true, R(), Y ? E(g, [D]) : E(b, [D]), D[Ft] = void 0, x[N] === e && delete x[N]);
    };
    const $ = D[Ft].bind(null, false);
    x[N] = e, m ? T(m, [D, $]) : $();
  }, clone(D) {
    const R = zr(D, t, n, r, s);
    return s && s(R), R;
  } };
  return w;
}
function Pi(e) {
  if (ci(e)) return e = hn(e), e.children = null, e;
}
function Ka(e) {
  if (!ci(e)) return ju(e.type) && e.children ? Zu(e.children) : e;
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
function Jo(e, t = false, n) {
  let r = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === _e ? (o.patchFlag & 128 && s++, r = r.concat(Jo(o.children, t, a))) : (t || o.type !== et) && r.push(a != null ? hn(o, { key: a }) : o);
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function Ye(e, t) {
  return ue(e) ? je({ name: e.name }, t, { setup: e }) : e;
}
function os() {
  const e = cs();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Yu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ya(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fs = /* @__PURE__ */ new WeakMap();
function Rr(e, t, n, r, s = false) {
  if (se(e)) {
    e.forEach((g, S) => Rr(g, t && (se(t) ? t[S] : t), n, r, s));
    return;
  }
  if (Zn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Rr(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? mi(r.component) : r.el, o = s ? null : i, { i: a, r: l } = e, u = t && t.r, c = a.refs === Ee ? a.refs = {} : a.refs, f = a.setupState, d = te(f), m = f === Ee ? iu : (g) => Ya(c, g) ? false : xe(d, g), b = (g, S) => !(S && Ya(c, S));
  if (u != null && u !== l) {
    if (qa(t), De(u)) c[u] = null, m(u) && (f[u] = null);
    else if (Ve(u)) {
      const g = t;
      b(u, g.k) && (u.value = null), g.k && (c[g.k] = null);
    }
  }
  if (ue(l)) is(l, a, 12, [o, c]);
  else {
    const g = De(l), S = Ve(l);
    if (g || S) {
      const v = () => {
        if (e.f) {
          const y = g ? m(l) ? f[l] : c[l] : b() || !e.k ? l.value : c[e.k];
          if (s) se(y) && jo(y, i);
          else if (se(y)) y.includes(i) || y.push(i);
          else if (g) c[l] = [i], m(l) && (f[l] = c[l]);
          else {
            const A = [i];
            b(l, e.k) && (l.value = A), e.k && (c[e.k] = A);
          }
        } else g ? (c[l] = o, m(l) && (f[l] = o)) : S && (b(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const y = () => {
          v(), Fs.delete(e);
        };
        y.id = -1, Fs.set(e, y), Xe(y, n);
      } else qa(e), v();
    }
  }
}
function qa(e) {
  const t = Fs.get(e);
  t && (t.flags |= 8, Fs.delete(e));
}
ii().requestIdleCallback;
ii().cancelIdleCallback;
const Zn = (e) => !!e.type.__asyncLoader, ci = (e) => e.type.__isKeepAlive;
function lh(e, t) {
  Xu(e, "a", t);
}
function qu(e, t) {
  Xu(e, "da", t);
}
function Xu(e, t, n = tt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated) return;
      s = s.parent;
    }
    return e();
  });
  if (ui(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; ) ci(s.parent.vnode) && ch(r, t, n, s), s = s.parent;
  }
}
function ch(e, t, n, r) {
  const s = ui(t, e, r, true);
  as(() => {
    jo(r[t], s);
  }, n);
}
function ui(e, t, n = tt, r = false) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      en();
      const a = us(n), l = Tt(t, n, e, o);
      return a(), tn(), l;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const rn = (e) => (t, n = tt) => {
  (!Kr || e === "sp") && ui(e, (...r) => t(...r), n);
}, fi = rn("bm"), Wt = rn("m"), uh = rn("bu"), Qo = rn("u"), zt = rn("bum"), as = rn("um"), fh = rn("sp"), dh = rn("rtg"), mh = rn("rtc");
function hh(e, t = tt) {
  ui("ec", e, t);
}
const Ju = "components";
function gh(e, t) {
  return Qu(Ju, e, true, t) || e;
}
const vh = Symbol.for("v-ndc");
function ph(e) {
  return De(e) && Qu(Ju, e, false) || e;
}
function Qu(e, t, n = true, r = false) {
  const s = Ke || tt;
  if (s) {
    const i = s.type;
    {
      const a = t1(i, false);
      if (a && (a === t || a === _t(t) || a === ur(_t(t)))) return i;
    }
    const o = Xa(s[e] || i[e], t) || Xa(s.appContext[e], t);
    return !o && r ? i : o;
  }
}
function Xa(e, t) {
  return e && (e[t] || e[_t(t)] || e[ur(_t(t))]);
}
function ht(e, t, n, r) {
  let s;
  const i = n, o = se(e);
  if (o || De(e)) {
    const a = o && kn(e);
    let l = false, u = false;
    a && (l = !bt(e), u = nn(e), e = oi(e)), s = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++) s[c] = t(l ? u ? Qn(kt(e[c])) : kt(e[c]) : e[c], c, void 0, i);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i);
  } else if (Se(e)) if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, i));
  else {
    const a = Object.keys(e);
    s = new Array(a.length);
    for (let l = 0, u = a.length; l < u; l++) {
      const c = a[l];
      s[l] = t(e[c], c, l, i);
    }
  }
  else s = [];
  return s;
}
function yh(e, t, n = {}, r, s) {
  if (Ke.ce || Ke.parent && Zn(Ke.parent) && Ke.parent.ce) {
    const u = Object.keys(n).length > 0;
    return ce(), tr(_e, null, [P("slot", n, r)], u ? -2 : 64);
  }
  let i = e[t];
  i && i._c && (i._d = false), ce();
  const o = i && ef(i(n)), a = n.key || o && o.key, l = tr(_e, { key: (a && !Mt(a) ? a : `_${t}`) + (!o && r ? "_fb" : "") }, o || [], o && e._ === 1 ? 64 : -2);
  return i && i._c && (i._d = true), l;
}
function ef(e) {
  return e.some((t) => Ur(t) ? !(t.type === et || t.type === _e && !ef(t.children)) : true) ? e : null;
}
const lo = (e) => e ? _f(e) ? mi(e) : lo(e.parent) : null, Ir = je(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => lo(e.parent), $root: (e) => lo(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => nf(e), $forceUpdate: (e) => e.f || (e.f = () => {
  qo(e.update);
}), $nextTick: (e) => e.n || (e.n = dt.bind(e.proxy)), $watch: (e) => rh.bind(e) }), Ri = (e, t) => e !== Ee && !e.__isScriptSetup && xe(e, t), bh = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: l } = e;
  if (t[0] !== "$") {
    const d = o[t];
    if (d !== void 0) switch (d) {
      case 1:
        return r[t];
      case 2:
        return s[t];
      case 4:
        return n[t];
      case 3:
        return i[t];
    }
    else {
      if (Ri(r, t)) return o[t] = 1, r[t];
      if (s !== Ee && xe(s, t)) return o[t] = 2, s[t];
      if (xe(i, t)) return o[t] = 3, i[t];
      if (n !== Ee && xe(n, t)) return o[t] = 4, n[t];
      co && (o[t] = 0);
    }
  }
  const u = Ir[t];
  let c, f;
  if (u) return t === "$attrs" && Qe(e.attrs, "get", ""), u(e);
  if ((c = a.__cssModules) && (c = c[t])) return c;
  if (n !== Ee && xe(n, t)) return o[t] = 4, n[t];
  if (f = l.config.globalProperties, xe(f, t)) return f[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: s, ctx: i } = e;
  return Ri(s, t) ? (s[t] = n, true) : r !== Ee && xe(r, t) ? (r[t] = n, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o } }, a) {
  let l;
  return !!(n[a] || e !== Ee && a[0] !== "$" && xe(e, a) || Ri(t, a) || xe(i, a) || xe(r, a) || xe(Ir, a) || xe(s.config.globalProperties, a) || (l = o.__cssModules) && l[a]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Ja(e) {
  return se(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
let co = true;
function _h(e) {
  const t = nf(e), n = e.proxy, r = e.ctx;
  co = false, t.beforeCreate && Qa(t.beforeCreate, e, "bc");
  const { data: s, computed: i, methods: o, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: b, activated: g, deactivated: S, beforeDestroy: v, beforeUnmount: y, destroyed: A, unmounted: _, render: x, renderTracked: E, renderTriggered: T, errorCaptured: w, serverPrefetch: D, expose: R, inheritAttrs: N, components: M, directives: $, filters: Y } = t;
  if (u && wh(u, r, null), o) for (const Q in o) {
    const ae = o[Q];
    ue(ae) && (r[Q] = ae.bind(n));
  }
  if (s) {
    const Q = s.call(n, n);
    Se(Q) && (e.data = Ue(Q));
  }
  if (co = true, i) for (const Q in i) {
    const ae = i[Q], Oe = ue(ae) ? ae.bind(n, n) : ue(ae.get) ? ae.get.bind(n, n) : jt, we = !ue(ae) && ue(ae.set) ? ae.set.bind(n) : jt, ie = H({ get: Oe, set: we });
    Object.defineProperty(r, Q, { enumerable: true, configurable: true, get: () => ie.value, set: (he) => ie.value = he });
  }
  if (a) for (const Q in a) tf(a[Q], r, n, Q);
  if (l) {
    const Q = ue(l) ? l.call(n) : l;
    Reflect.ownKeys(Q).forEach((ae) => {
      rt(ae, Q[ae]);
    });
  }
  c && Qa(c, e, "c");
  function J(Q, ae) {
    se(ae) ? ae.forEach((Oe) => Q(Oe.bind(n))) : ae && Q(ae.bind(n));
  }
  if (J(fi, f), J(Wt, d), J(uh, m), J(Qo, b), J(lh, g), J(qu, S), J(hh, w), J(mh, E), J(dh, T), J(zt, y), J(as, _), J(fh, D), se(R)) if (R.length) {
    const Q = e.exposed || (e.exposed = {});
    R.forEach((ae) => {
      Object.defineProperty(Q, ae, { get: () => n[ae], set: (Oe) => n[ae] = Oe, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === jt && (e.render = x), N != null && (e.inheritAttrs = N), M && (e.components = M), $ && (e.directives = $), D && Yu(e);
}
function wh(e, t, n = jt) {
  se(e) && (e = uo(e));
  for (const r in e) {
    const s = e[r];
    let i;
    Se(s) ? "default" in s ? i = Me(s.from || r, s.default, true) : i = Me(s.from || r) : i = Me(s), Ve(i) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => i.value, set: (o) => i.value = o }) : t[r] = i;
  }
}
function Qa(e, t, n) {
  Tt(se(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function tf(e, t, n, r) {
  let s = r.includes(".") ? $u(n, r) : () => n[r];
  if (De(e)) {
    const i = t[e];
    ue(i) && le(s, i);
  } else if (ue(e)) le(s, e.bind(n));
  else if (Se(e)) if (se(e)) e.forEach((i) => tf(i, t, n, r));
  else {
    const i = ue(e.handler) ? e.handler.bind(n) : t[e.handler];
    ue(i) && le(s, i, e);
  }
}
function nf(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach((u) => $s(l, u, o, true)), $s(l, t, o)), Se(t) && i.set(t, l), l;
}
function $s(e, t, n, r = false) {
  const { mixins: s, extends: i } = t;
  i && $s(e, i, n, true), s && s.forEach((o) => $s(e, o, n, true));
  for (const o in t) if (!(r && o === "expose")) {
    const a = Sh[o] || n && n[o];
    e[o] = a ? a(e[o], t[o]) : t[o];
  }
  return e;
}
const Sh = { data: el, props: tl, emits: tl, methods: Er, computed: Er, beforeCreate: it, created: it, beforeMount: it, mounted: it, beforeUpdate: it, updated: it, beforeDestroy: it, beforeUnmount: it, destroyed: it, unmounted: it, activated: it, deactivated: it, errorCaptured: it, serverPrefetch: it, components: Er, directives: Er, watch: xh, provide: el, inject: Ch };
function el(e, t) {
  return t ? e ? function() {
    return je(ue(e) ? e.call(this, this) : e, ue(t) ? t.call(this, this) : t);
  } : t : e;
}
function Ch(e, t) {
  return Er(uo(e), uo(t));
}
function uo(e) {
  if (se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function it(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Er(e, t) {
  return e ? je(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tl(e, t) {
  return e ? se(e) && se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : je(/* @__PURE__ */ Object.create(null), Ja(e), Ja(t ?? {})) : t;
}
function xh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = je(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = it(e[r], t[r]);
  return n;
}
function rf() {
  return { app: null, config: { isNativeTag: iu, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let Ah = 0;
function Lh(e, t) {
  return function(r, s = null) {
    ue(r) || (r = je({}, r)), s != null && !Se(s) && (s = null);
    const i = rf(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = false;
    const u = i.app = { _uid: Ah++, _component: r, _props: s, _container: null, _context: i, _instance: null, version: r1, get config() {
      return i.config;
    }, set config(c) {
    }, use(c, ...f) {
      return o.has(c) || (c && ue(c.install) ? (o.add(c), c.install(u, ...f)) : ue(c) && (o.add(c), c(u, ...f))), u;
    }, mixin(c) {
      return i.mixins.includes(c) || i.mixins.push(c), u;
    }, component(c, f) {
      return f ? (i.components[c] = f, u) : i.components[c];
    }, directive(c, f) {
      return f ? (i.directives[c] = f, u) : i.directives[c];
    }, mount(c, f, d) {
      if (!l) {
        const m = u._ceVNode || P(r, s);
        return m.appContext = i, d === true ? d = "svg" : d === false && (d = void 0), e(m, c, d), l = true, u._container = c, c.__vue_app__ = u, mi(m.component);
      }
    }, onUnmount(c) {
      a.push(c);
    }, unmount() {
      l && (Tt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
    }, provide(c, f) {
      return i.provides[c] = f, u;
    }, runWithContext(c) {
      const f = Kn;
      Kn = u;
      try {
        return c();
      } finally {
        Kn = f;
      }
    } };
    return u;
  };
}
let Kn = null;
const Eh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${On(t)}Modifiers`];
function Mh(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ee;
  let s = n;
  const i = t.startsWith("update:"), o = i && Eh(r, t.slice(7));
  o && (o.trim && (s = n.map((c) => De(c) ? c.trim() : c)), o.number && (s = n.map(gm)));
  let a, l = r[a = Ai(t)] || r[a = Ai(_t(t))];
  !l && i && (l = r[a = Ai(On(t))]), l && Tt(l, e, 6, s);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = true, Tt(u, e, 6, s);
  }
}
const kh = /* @__PURE__ */ new WeakMap();
function sf(e, t, n = false) {
  const r = n ? kh : t.emitsCache, s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let o = {}, a = false;
  if (!ue(e)) {
    const l = (u) => {
      const c = sf(u, t, true);
      c && (a = true, je(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !a ? (Se(e) && r.set(e, null), null) : (se(i) ? i.forEach((l) => o[l] = null) : je(o, i), Se(e) && r.set(e, o), o);
}
function di(e, t) {
  return !e || !ni(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, On(t)) || xe(e, t));
}
function nl(e) {
  const { type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [i], slots: o, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: m, ctx: b, inheritAttrs: g } = e, S = Ns(e);
  let v, y;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r, x = _;
      v = $t(u.call(x, _, c, f, m, d, b)), y = a;
    } else {
      const _ = t;
      v = $t(_.length > 1 ? _(f, { attrs: a, slots: o, emit: l }) : _(f, null)), y = t.props ? a : Th(a);
    }
  } catch (_) {
    Or.length = 0, li(_, e, 1), v = P(et);
  }
  let A = v;
  if (y && g !== false) {
    const _ = Object.keys(y), { shapeFlag: x } = A;
    _.length && x & 7 && (i && _.some(Bo) && (y = Ph(y, i)), A = hn(A, y, false, true));
  }
  return n.dirs && (A = hn(A, null, false, true), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && In(A, n.transition), v = A, Ns(S), v;
}
const Th = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || ni(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ph = (e, t) => {
  const n = {};
  for (const r in e) (!Bo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Rh(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: a, patchFlag: l } = t, u = i.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && l >= 0) {
    if (l & 1024) return true;
    if (l & 16) return r ? rl(r, o, u) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (of(o, r, d) && !di(u, d)) return true;
      }
    }
  } else return (s || a) && (!a || !a.$stable) ? true : r === o ? false : r ? o ? rl(r, o, u) : true : !!o;
  return false;
}
function rl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (of(t, e, i) && !di(n, i)) return true;
  }
  return false;
}
function of(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && Se(r) && Se(s) ? !Wo(r, s) : r !== s;
}
function Ih({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const af = {}, lf = () => Object.create(af), cf = (e) => Object.getPrototypeOf(e) === af;
function Oh(e, t, n, r = false) {
  const s = {}, i = lf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), uf(e, t, s, i);
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
  n ? e.props = r ? s : Tu(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Vh(e, t, n, r) {
  const { props: s, attrs: i, vnode: { patchFlag: o } } = e, a = te(s), [l] = e.propsOptions;
  let u = false;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (di(e.emitsOptions, d)) continue;
        const m = t[d];
        if (l) if (xe(i, d)) m !== i[d] && (i[d] = m, u = true);
        else {
          const b = _t(d);
          s[b] = fo(l, a, b, m, e, false);
        }
        else m !== i[d] && (i[d] = m, u = true);
      }
    }
  } else {
    uf(e, t, s, i) && (u = true);
    let c;
    for (const f in a) (!t || !xe(t, f) && ((c = On(f)) === f || !xe(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = fo(l, a, f, void 0, e, true)) : delete s[f]);
    if (i !== a) for (const f in i) (!t || !xe(t, f)) && (delete i[f], u = true);
  }
  u && Xt(e.attrs, "set", "");
}
function uf(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = false, a;
  if (t) for (let l in t) {
    if (Mr(l)) continue;
    const u = t[l];
    let c;
    s && xe(s, c = _t(l)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : di(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = true);
  }
  if (i) {
    const l = te(n), u = a || Ee;
    for (let c = 0; c < i.length; c++) {
      const f = i[c];
      n[f] = fo(s, l, f, u[f], e, !xe(u, f));
    }
  }
  return o;
}
function fo(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = xe(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ue(l)) {
        const { propsDefaults: u } = s;
        if (n in u) r = u[n];
        else {
          const c = us(s);
          r = u[n] = l.call(null, t), c();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    o[0] && (i && !a ? r = false : o[1] && (r === "" || r === On(n)) && (r = true));
  }
  return r;
}
const Dh = /* @__PURE__ */ new WeakMap();
function ff(e, t, n = false) {
  const r = n ? Dh : t.propsCache, s = r.get(e);
  if (s) return s;
  const i = e.props, o = {}, a = [];
  let l = false;
  if (!ue(e)) {
    const c = (f) => {
      l = true;
      const [d, m] = ff(f, t, true);
      je(o, d), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !l) return Se(e) && r.set(e, zn), zn;
  if (se(i)) for (let c = 0; c < i.length; c++) {
    const f = _t(i[c]);
    sl(f) && (o[f] = Ee);
  }
  else if (i) for (const c in i) {
    const f = _t(c);
    if (sl(f)) {
      const d = i[c], m = o[f] = se(d) || ue(d) ? { type: d } : je({}, d), b = m.type;
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
function sl(e) {
  return e[0] !== "$" && !Mr(e);
}
const ea = (e) => e === "_" || e === "_ctx" || e === "$stable", ta = (e) => se(e) ? e.map($t) : [$t(e)], Hh = (e, t, n) => {
  if (t._n) return t;
  const r = Be((...s) => ta(t(...s)), n);
  return r._c = false, r;
}, df = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ea(s)) continue;
    const i = e[s];
    if (ue(i)) t[s] = Hh(s, i, r);
    else if (i != null) {
      const o = ta(i);
      t[s] = () => o;
    }
  }
}, mf = (e, t) => {
  const n = ta(t);
  e.slots.default = () => n;
}, hf = (e, t, n) => {
  for (const r in t) (n || !ea(r)) && (e[r] = t[r]);
}, Nh = (e, t, n) => {
  const r = e.slots = lf();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (hf(r, t, n), n && uu(r, "_", s, true)) : df(t, r);
  } else t && mf(e, t);
}, Fh = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = true, o = Ee;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = false : hf(s, t, n) : (i = !t.$stable, df(t, s)), o = t;
  } else t && (mf(e, t), o = { default: 1 });
  if (i) for (const a in s) !ea(a) && o[a] == null && delete s[a];
}, Xe = zh;
function $h(e) {
  return Bh(e);
}
function Bh(e, t) {
  const n = ii();
  n.__VUE__ = true;
  const { insert: r, remove: s, patchProp: i, createElement: o, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m = jt, insertStaticContent: b } = e, g = (h, p, C, I = null, V = null, O = null, K = void 0, G = null, W = !!p.dynamicChildren) => {
    if (h === p) return;
    h && !Ln(h, p) && (I = L(h), he(h, V, O, true), h = null), p.patchFlag === -2 && (W = false, p.dynamicChildren = null);
    const { type: F, ref: re, shapeFlag: q } = p;
    switch (F) {
      case ls:
        S(h, p, C, I);
        break;
      case et:
        v(h, p, C, I);
        break;
      case Oi:
        h == null && y(p, C, I, K);
        break;
      case _e:
        M(h, p, C, I, V, O, K, G, W);
        break;
      default:
        q & 1 ? x(h, p, C, I, V, O, K, G, W) : q & 6 ? $(h, p, C, I, V, O, K, G, W) : (q & 64 || q & 128) && F.process(h, p, C, I, V, O, K, G, W, U);
    }
    re != null && V ? Rr(re, h && h.ref, O, p || h, !p) : re == null && h && h.ref != null && Rr(h.ref, null, O, h, true);
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
    for (; h && h !== p; ) C = d(h), s(h), h = C;
    s(p);
  }, x = (h, p, C, I, V, O, K, G, W) => {
    if (p.type === "svg" ? K = "svg" : p.type === "math" && (K = "mathml"), h == null) E(p, C, I, V, O, K, G, W);
    else {
      const F = h.el && h.el._isVueCE ? h.el : null;
      try {
        F && F._beginPatch(), D(h, p, V, O, K, G, W);
      } finally {
        F && F._endPatch();
      }
    }
  }, E = (h, p, C, I, V, O, K, G) => {
    let W, F;
    const { props: re, shapeFlag: q, transition: ee, dirs: fe } = h;
    if (W = h.el = o(h.type, O, re && re.is, re), q & 8 ? c(W, h.children) : q & 16 && w(h.children, W, null, I, V, Ii(h, O), K, G), fe && yn(h, null, I, "created"), T(W, h, h.scopeId, K, I), re) {
      for (const ke in re) ke !== "value" && !Mr(ke) && i(W, ke, null, re[ke], O, I);
      "value" in re && i(W, "value", null, re.value, O), (F = re.onVnodeBeforeMount) && Dt(F, I, h);
    }
    fe && yn(h, null, I, "beforeMount");
    const be = jh(V, ee);
    be && ee.beforeEnter(W), r(W, p, C), ((F = re && re.onVnodeMounted) || be || fe) && Xe(() => {
      F && Dt(F, I, h), be && ee.enter(W), fe && yn(h, null, I, "mounted");
    }, V);
  }, T = (h, p, C, I, V) => {
    if (C && m(h, C), I) for (let O = 0; O < I.length; O++) m(h, I[O]);
    if (V) {
      let O = V.subTree;
      if (p === O || pf(O.type) && (O.ssContent === p || O.ssFallback === p)) {
        const K = V.vnode;
        T(h, K, K.scopeId, K.slotScopeIds, V.parent);
      }
    }
  }, w = (h, p, C, I, V, O, K, G, W = 0) => {
    for (let F = W; F < h.length; F++) {
      const re = h[F] = G ? qt(h[F]) : $t(h[F]);
      g(null, re, p, C, I, V, O, K, G);
    }
  }, D = (h, p, C, I, V, O, K) => {
    const G = p.el = h.el;
    let { patchFlag: W, dynamicChildren: F, dirs: re } = p;
    W |= h.patchFlag & 16;
    const q = h.props || Ee, ee = p.props || Ee;
    let fe;
    if (C && bn(C, false), (fe = ee.onVnodeBeforeUpdate) && Dt(fe, C, p, h), re && yn(p, h, C, "beforeUpdate"), C && bn(C, true), (q.innerHTML && ee.innerHTML == null || q.textContent && ee.textContent == null) && c(G, ""), F ? R(h.dynamicChildren, F, G, C, I, Ii(p, V), O) : K || ae(h, p, G, null, C, I, Ii(p, V), O, false), W > 0) {
      if (W & 16) N(G, q, ee, C, V);
      else if (W & 2 && q.class !== ee.class && i(G, "class", null, ee.class, V), W & 4 && i(G, "style", q.style, ee.style, V), W & 8) {
        const be = p.dynamicProps;
        for (let ke = 0; ke < be.length; ke++) {
          const Ae = be[ke], ut = q[Ae], ft = ee[Ae];
          (ft !== ut || Ae === "value") && i(G, Ae, ut, ft, V, C);
        }
      }
      W & 1 && h.children !== p.children && c(G, p.children);
    } else !K && F == null && N(G, q, ee, C, V);
    ((fe = ee.onVnodeUpdated) || re) && Xe(() => {
      fe && Dt(fe, C, p, h), re && yn(p, h, C, "updated");
    }, I);
  }, R = (h, p, C, I, V, O, K) => {
    for (let G = 0; G < p.length; G++) {
      const W = h[G], F = p[G], re = W.el && (W.type === _e || !Ln(W, F) || W.shapeFlag & 198) ? f(W.el) : C;
      g(W, F, re, null, I, V, O, K, true);
    }
  }, N = (h, p, C, I, V) => {
    if (p !== C) {
      if (p !== Ee) for (const O in p) !Mr(O) && !(O in C) && i(h, O, p[O], null, V, I);
      for (const O in C) {
        if (Mr(O)) continue;
        const K = C[O], G = p[O];
        K !== G && O !== "value" && i(h, O, G, K, V, I);
      }
      "value" in C && i(h, "value", p.value, C.value, V);
    }
  }, M = (h, p, C, I, V, O, K, G, W) => {
    const F = p.el = h ? h.el : a(""), re = p.anchor = h ? h.anchor : a("");
    let { patchFlag: q, dynamicChildren: ee, slotScopeIds: fe } = p;
    fe && (G = G ? G.concat(fe) : fe), h == null ? (r(F, C, I), r(re, C, I), w(p.children || [], C, re, V, O, K, G, W)) : q > 0 && q & 64 && ee && h.dynamicChildren && h.dynamicChildren.length === ee.length ? (R(h.dynamicChildren, ee, C, V, O, K, G), (p.key != null || V && p === V.subTree) && na(h, p, true)) : ae(h, p, C, re, V, O, K, G, W);
  }, $ = (h, p, C, I, V, O, K, G, W) => {
    p.slotScopeIds = G, h == null ? p.shapeFlag & 512 ? V.ctx.activate(p, C, I, K, W) : Y(p, C, I, V, O, K, W) : Z(h, p, W);
  }, Y = (h, p, C, I, V, O, K) => {
    const G = h.component = qh(h, I, V);
    if (ci(h) && (G.ctx.renderer = U), Xh(G, false, K), G.asyncDep) {
      if (V && V.registerDep(G, J, K), !h.el) {
        const W = G.subTree = P(et);
        v(null, W, p, C), h.placeholder = W.el;
      }
    } else J(G, h, p, C, V, O, K);
  }, Z = (h, p, C) => {
    const I = p.component = h.component;
    if (Rh(h, p, C)) if (I.asyncDep && !I.asyncResolved) {
      Q(I, p, C);
      return;
    } else I.next = p, I.update();
    else p.el = h.el, I.vnode = p;
  }, J = (h, p, C, I, V, O, K) => {
    const G = () => {
      if (h.isMounted) {
        let { next: q, bu: ee, u: fe, parent: be, vnode: ke } = h;
        {
          const Ot = gf(h);
          if (Ot) {
            q && (q.el = ke.el, Q(h, q, K)), Ot.asyncDep.then(() => {
              Xe(() => {
                h.isUnmounted || F();
              }, V);
            });
            return;
          }
        }
        let Ae = q, ut;
        bn(h, false), q ? (q.el = ke.el, Q(h, q, K)) : q = ke, ee && Li(ee), (ut = q.props && q.props.onVnodeBeforeUpdate) && Dt(ut, be, q, ke), bn(h, true);
        const ft = nl(h), It = h.subTree;
        h.subTree = ft, g(It, ft, f(It.el), L(It), h, V, O), q.el = ft.el, Ae === null && Ih(h, ft.el), fe && Xe(fe, V), (ut = q.props && q.props.onVnodeUpdated) && Xe(() => Dt(ut, be, q, ke), V);
      } else {
        let q;
        const { el: ee, props: fe } = p, { bm: be, m: ke, parent: Ae, root: ut, type: ft } = h, It = Zn(p);
        bn(h, false), be && Li(be), !It && (q = fe && fe.onVnodeBeforeMount) && Dt(q, Ae, p), bn(h, true);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(ft);
          const Ot = h.subTree = nl(h);
          g(null, Ot, C, I, h, V, O), p.el = Ot.el;
        }
        if (ke && Xe(ke, V), !It && (q = fe && fe.onVnodeMounted)) {
          const Ot = p;
          Xe(() => Dt(q, Ae, Ot), V);
        }
        (p.shapeFlag & 256 || Ae && Zn(Ae.vnode) && Ae.vnode.shapeFlag & 256) && h.a && Xe(h.a, V), h.isMounted = true, p = C = I = null;
      }
    };
    h.scope.on();
    const W = h.effect = new vu(G);
    h.scope.off();
    const F = h.update = W.run.bind(W), re = h.job = W.runIfDirty.bind(W);
    re.i = h, re.id = h.uid, W.scheduler = () => qo(re), bn(h, true), F();
  }, Q = (h, p, C) => {
    p.component = h;
    const I = h.vnode.props;
    h.vnode = p, h.next = null, Vh(h, p.props, I, C), Fh(h, p.children, C), en(), za(h), tn();
  }, ae = (h, p, C, I, V, O, K, G, W = false) => {
    const F = h && h.children, re = h ? h.shapeFlag : 0, q = p.children, { patchFlag: ee, shapeFlag: fe } = p;
    if (ee > 0) {
      if (ee & 128) {
        we(F, q, C, I, V, O, K, G, W);
        return;
      } else if (ee & 256) {
        Oe(F, q, C, I, V, O, K, G, W);
        return;
      }
    }
    fe & 8 ? (re & 16 && Ne(F, V, O), q !== F && c(C, q)) : re & 16 ? fe & 16 ? we(F, q, C, I, V, O, K, G, W) : Ne(F, V, O, true) : (re & 8 && c(C, ""), fe & 16 && w(q, C, I, V, O, K, G, W));
  }, Oe = (h, p, C, I, V, O, K, G, W) => {
    h = h || zn, p = p || zn;
    const F = h.length, re = p.length, q = Math.min(F, re);
    let ee;
    for (ee = 0; ee < q; ee++) {
      const fe = p[ee] = W ? qt(p[ee]) : $t(p[ee]);
      g(h[ee], fe, C, null, V, O, K, G, W);
    }
    F > re ? Ne(h, V, O, true, false, q) : w(p, C, I, V, O, K, G, W, q);
  }, we = (h, p, C, I, V, O, K, G, W) => {
    let F = 0;
    const re = p.length;
    let q = h.length - 1, ee = re - 1;
    for (; F <= q && F <= ee; ) {
      const fe = h[F], be = p[F] = W ? qt(p[F]) : $t(p[F]);
      if (Ln(fe, be)) g(fe, be, C, null, V, O, K, G, W);
      else break;
      F++;
    }
    for (; F <= q && F <= ee; ) {
      const fe = h[q], be = p[ee] = W ? qt(p[ee]) : $t(p[ee]);
      if (Ln(fe, be)) g(fe, be, C, null, V, O, K, G, W);
      else break;
      q--, ee--;
    }
    if (F > q) {
      if (F <= ee) {
        const fe = ee + 1, be = fe < re ? p[fe].el : I;
        for (; F <= ee; ) g(null, p[F] = W ? qt(p[F]) : $t(p[F]), C, be, V, O, K, G, W), F++;
      }
    } else if (F > ee) for (; F <= q; ) he(h[F], V, O, true), F++;
    else {
      const fe = F, be = F, ke = /* @__PURE__ */ new Map();
      for (F = be; F <= ee; F++) {
        const mt = p[F] = W ? qt(p[F]) : $t(p[F]);
        mt.key != null && ke.set(mt.key, F);
      }
      let Ae, ut = 0;
      const ft = ee - be + 1;
      let It = false, Ot = 0;
      const yr = new Array(ft);
      for (F = 0; F < ft; F++) yr[F] = 0;
      for (F = fe; F <= q; F++) {
        const mt = h[F];
        if (ut >= ft) {
          he(mt, V, O, true);
          continue;
        }
        let Vt;
        if (mt.key != null) Vt = ke.get(mt.key);
        else for (Ae = be; Ae <= ee; Ae++) if (yr[Ae - be] === 0 && Ln(mt, p[Ae])) {
          Vt = Ae;
          break;
        }
        Vt === void 0 ? he(mt, V, O, true) : (yr[Vt - be] = F + 1, Vt >= Ot ? Ot = Vt : It = true, g(mt, p[Vt], C, null, V, O, K, G, W), ut++);
      }
      const Ha = It ? Wh(yr) : zn;
      for (Ae = Ha.length - 1, F = ft - 1; F >= 0; F--) {
        const mt = be + F, Vt = p[mt], Na = p[mt + 1], Fa = mt + 1 < re ? Na.el || vf(Na) : I;
        yr[F] === 0 ? g(null, Vt, C, Fa, V, O, K, G, W) : It && (Ae < 0 || F !== Ha[Ae] ? ie(Vt, C, Fa, 2) : Ae--);
      }
    }
  }, ie = (h, p, C, I, V = null) => {
    const { el: O, type: K, transition: G, children: W, shapeFlag: F } = h;
    if (F & 6) {
      ie(h.component.subTree, p, C, I);
      return;
    }
    if (F & 128) {
      h.suspense.move(p, C, I);
      return;
    }
    if (F & 64) {
      K.move(h, p, C, U);
      return;
    }
    if (K === _e) {
      r(O, p, C);
      for (let q = 0; q < W.length; q++) ie(W[q], p, C, I);
      r(h.anchor, p, C);
      return;
    }
    if (K === Oi) {
      A(h, p, C);
      return;
    }
    if (I !== 2 && F & 1 && G) if (I === 0) G.beforeEnter(O), r(O, p, C), Xe(() => G.enter(O), V);
    else {
      const { leave: q, delayLeave: ee, afterLeave: fe } = G, be = () => {
        h.ctx.isUnmounted ? s(O) : r(O, p, C);
      }, ke = () => {
        O._isLeaving && O[Ft](true), q(O, () => {
          be(), fe && fe();
        });
      };
      ee ? ee(O, be, ke) : ke();
    }
    else r(O, p, C);
  }, he = (h, p, C, I = false, V = false) => {
    const { type: O, props: K, ref: G, children: W, dynamicChildren: F, shapeFlag: re, patchFlag: q, dirs: ee, cacheIndex: fe } = h;
    if (q === -2 && (V = false), G != null && (en(), Rr(G, null, C, h, true), tn()), fe != null && (p.renderCache[fe] = void 0), re & 256) {
      p.ctx.deactivate(h);
      return;
    }
    const be = re & 1 && ee, ke = !Zn(h);
    let Ae;
    if (ke && (Ae = K && K.onVnodeBeforeUnmount) && Dt(Ae, p, h), re & 6) Ge(h.component, C, I);
    else {
      if (re & 128) {
        h.suspense.unmount(C, I);
        return;
      }
      be && yn(h, null, p, "beforeUnmount"), re & 64 ? h.type.remove(h, p, C, U, I) : F && !F.hasOnce && (O !== _e || q > 0 && q & 64) ? Ne(F, p, C, false, true) : (O === _e && q & 384 || !V && re & 16) && Ne(W, p, C), I && de(h);
    }
    (ke && (Ae = K && K.onVnodeUnmounted) || be) && Xe(() => {
      Ae && Dt(Ae, p, h), be && yn(h, null, p, "unmounted");
    }, C);
  }, de = (h) => {
    const { type: p, el: C, anchor: I, transition: V } = h;
    if (p === _e) {
      $e(C, I);
      return;
    }
    if (p === Oi) {
      _(h);
      return;
    }
    const O = () => {
      s(C), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (h.shapeFlag & 1 && V && !V.persisted) {
      const { leave: K, delayLeave: G } = V, W = () => K(C, O);
      G ? G(h.el, O, W) : W();
    } else O();
  }, $e = (h, p) => {
    let C;
    for (; h !== p; ) C = d(h), s(h), h = C;
    s(p);
  }, Ge = (h, p, C) => {
    const { bum: I, scope: V, job: O, subTree: K, um: G, m: W, a: F } = h;
    il(W), il(F), I && Li(I), V.stop(), O && (O.flags |= 8, he(K, h, p, C)), G && Xe(G, p), Xe(() => {
      h.isUnmounted = true;
    }, p);
  }, Ne = (h, p, C, I = false, V = false, O = 0) => {
    for (let K = O; K < h.length; K++) he(h[K], p, C, I, V);
  }, L = (h) => {
    if (h.shapeFlag & 6) return L(h.component.subTree);
    if (h.shapeFlag & 128) return h.suspense.next();
    const p = d(h.anchor || h.el), C = p && p[Bu];
    return C ? d(C) : p;
  };
  let j = false;
  const z = (h, p, C) => {
    let I;
    h == null ? p._vnode && (he(p._vnode, null, null, true), I = p._vnode.component) : g(p._vnode || null, h, p, null, null, null, C), p._vnode = h, j || (j = true, za(I), Hu(), j = false);
  }, U = { p: g, um: he, m: ie, r: de, mt: Y, mc: w, pc: ae, pbc: R, n: L, o: e };
  return { render: z, hydrate: void 0, createApp: Lh(z) };
}
function Ii({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function jh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function na(e, t, n = false) {
  const r = e.children, s = t.children;
  if (se(r) && se(s)) for (let i = 0; i < r.length; i++) {
    const o = r[i];
    let a = s[i];
    a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = qt(s[i]), a.el = o.el), !n && a.patchFlag !== -2 && na(o, a)), a.type === ls && (a.patchFlag === -1 && (a = s[i] = qt(a)), a.el = o.el), a.type === et && !a.el && (a.el = o.el);
  }
}
function Wh(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; ) a = i + o >> 1, e[n[a]] < u ? i = a + 1 : o = a;
      u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) n[i] = o, o = t[o];
  return n;
}
function gf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : gf(t);
}
function il(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function vf(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? vf(t.subTree) : null;
}
const pf = (e) => e.__isSuspense;
function zh(e, t) {
  t && t.pendingBranch ? se(e) ? t.effects.push(...e) : t.effects.push(e) : eh(e);
}
const _e = Symbol.for("v-fgt"), ls = Symbol.for("v-txt"), et = Symbol.for("v-cmt"), Oi = Symbol.for("v-stc"), Or = [];
let vt = null;
function ce(e = false) {
  Or.push(vt = e ? null : []);
}
function Gh() {
  Or.pop(), vt = Or[Or.length - 1] || null;
}
let Gr = 1;
function Bs(e, t = false) {
  Gr += e, e < 0 && vt && t && (vt.hasOnce = true);
}
function yf(e) {
  return e.dynamicChildren = Gr > 0 ? vt || zn : null, Gh(), Gr > 0 && vt && vt.push(e), e;
}
function me(e, t, n, r, s, i) {
  return yf(k(e, t, n, r, s, i, true));
}
function tr(e, t, n, r, s) {
  return yf(P(e, t, n, r, s, true));
}
function Ur(e) {
  return e ? e.__v_isVNode === true : false;
}
function Ln(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bf = ({ key: e }) => e ?? null, Ts = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? De(e) || Ve(e) || ue(e) ? { i: Ke, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, r = 0, s = null, i = e === _e ? 0 : 1, o = false, a = false) {
  const l = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && bf(t), ref: t && Ts(t), scopeId: Fu, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: r, dynamicProps: s, dynamicChildren: null, appContext: null, ctx: Ke };
  return a ? (ra(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= De(n) ? 8 : 16), Gr > 0 && !o && vt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && vt.push(l), l;
}
const P = Uh;
function Uh(e, t = null, n = null, r = 0, s = null, i = false) {
  if ((!e || e === vh) && (e = et), Ur(e)) {
    const a = hn(e, t, true);
    return n && ra(a, n), Gr > 0 && !i && vt && (a.shapeFlag & 6 ? vt[vt.indexOf(e)] = a : vt.push(a)), a.patchFlag = -2, a;
  }
  if (n1(e) && (e = e.__vccOpts), t) {
    t = Zh(t);
    let { class: a, style: l } = t;
    a && !De(a) && (t.class = Le(a)), Se(l) && (ai(l) && !se(l) && (l = je({}, l)), t.style = He(l));
  }
  const o = De(e) ? 1 : pf(e) ? 128 : ju(e) ? 64 : Se(e) ? 4 : ue(e) ? 2 : 0;
  return k(e, t, n, r, s, o, i, true);
}
function Zh(e) {
  return e ? ai(e) || cf(e) ? je({}, e) : e : null;
}
function hn(e, t, n = false, r = false) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: l } = e, u = t ? Re(s || {}, t) : s, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: u, key: u && bf(u), ref: t && t.ref ? n && i ? se(i) ? i.concat(Ts(t)) : [i, Ts(t)] : Ts(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: a, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && hn(e.ssContent), ssFallback: e.ssFallback && hn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && r && In(c, l.clone(c)), c;
}
function Zr(e = " ", t = 0) {
  return P(ls, null, e, t);
}
function nr(e = "", t = false) {
  return t ? (ce(), tr(et, null, e)) : P(et, null, e);
}
function $t(e) {
  return e == null || typeof e == "boolean" ? P(et) : se(e) ? P(_e, null, e.slice()) : Ur(e) ? qt(e) : P(ls, null, String(e));
}
function qt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : hn(e);
}
function ra(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (se(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const s = t.default;
    s && (s._c && (s._d = false), ra(e, s()), s._c && (s._d = true));
    return;
  } else {
    n = 32;
    const s = t._;
    !s && !cf(t) ? t._ctx = Ke : s === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else ue(t) ? (t = { default: t, _ctx: Ke }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Zr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Re(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r) if (s === "class") t.class !== r.class && (t.class = Le([t.class, r.class]));
    else if (s === "style") t.style = He([t.style, r.style]);
    else if (ni(s)) {
      const i = t[s], o = r[s];
      o && i !== o && !(se(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
    } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Dt(e, t, n, r = null) {
  Tt(e, t, 7, [n, r]);
}
const Kh = rf();
let Yh = 0;
function qh(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Kh, i = { uid: Yh++, vnode: e, type: r, parent: t, appContext: s, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new hu(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(s.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: ff(r, s), emitsOptions: sf(r, s), emit: null, emitted: null, propsDefaults: Ee, inheritAttrs: r.inheritAttrs, ctx: Ee, data: Ee, props: Ee, attrs: Ee, slots: Ee, refs: Ee, setupState: Ee, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Mh.bind(null, i), e.ce && e.ce(i), i;
}
let tt = null;
const cs = () => tt || Ke;
let js, mo;
{
  const e = ii(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  js = t("__VUE_INSTANCE_SETTERS__", (n) => tt = n), mo = t("__VUE_SSR_SETTERS__", (n) => Kr = n);
}
const us = (e) => {
  const t = tt;
  return js(e), e.scope.on(), () => {
    e.scope.off(), js(t);
  };
}, ol = () => {
  tt && tt.scope.off(), js(null);
};
function _f(e) {
  return e.vnode.shapeFlag & 4;
}
let Kr = false;
function Xh(e, t = false, n = false) {
  t && mo(t);
  const { props: r, children: s } = e.vnode, i = _f(e);
  Oh(e, r, i, t), Nh(e, s, n || t);
  const o = i ? Jh(e, t) : void 0;
  return t && mo(false), o;
}
function Jh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bh);
  const { setup: r } = n;
  if (r) {
    en();
    const s = e.setupContext = r.length > 1 ? e1(e) : null, i = us(e), o = is(r, e, 0, [e.props, s]), a = au(o);
    if (tn(), i(), (a || e.sp) && !Zn(e) && Yu(e), a) {
      if (o.then(ol, ol), t) return o.then((l) => {
        al(e, l);
      }).catch((l) => {
        li(l, e, 0);
      });
      e.asyncDep = o;
    } else al(e, o);
  } else wf(e);
}
function al(e, t, n) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Ru(t)), wf(e);
}
function wf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || jt);
  {
    const s = us(e);
    en();
    try {
      _h(e);
    } finally {
      tn(), s();
    }
  }
}
const Qh = { get(e, t) {
  return Qe(e, "get", ""), e[t];
} };
function e1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Qh), slots: e.slots, emit: e.emit, expose: t };
}
function mi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ru(Wm(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Ir) return Ir[n](e);
  }, has(t, n) {
    return n in t || n in Ir;
  } })) : e.proxy;
}
function t1(e, t = true) {
  return ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function n1(e) {
  return ue(e) && "__vccOpts" in e;
}
const H = (e, t) => Ym(e, t, Kr);
function vn(e, t, n) {
  try {
    Bs(-1);
    const r = arguments.length;
    return r === 2 ? Se(t) && !se(t) ? Ur(t) ? P(e, null, [t]) : P(e, t) : P(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ur(n) && (n = [n]), P(e, t, n));
  } finally {
    Bs(1);
  }
}
const r1 = "3.5.29";
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ho;
const ll = typeof window < "u" && window.trustedTypes;
if (ll) try {
  ho = ll.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const Sf = ho ? (e) => ho.createHTML(e) : (e) => e, s1 = "http://www.w3.org/2000/svg", i1 = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, cl = Yt && Yt.createElement("template"), o1 = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const s = t === "svg" ? Yt.createElementNS(s1, e) : t === "mathml" ? Yt.createElementNS(i1, e) : n ? Yt.createElement(e, { is: n }) : Yt.createElement(e);
  return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
}, createText: (e) => Yt.createTextNode(e), createComment: (e) => Yt.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Yt.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, s, i) {
  const o = n ? n.previousSibling : t.lastChild;
  if (s && (s === i || s.nextSibling)) for (; t.insertBefore(s.cloneNode(true), n), !(s === i || !(s = s.nextSibling)); ) ;
  else {
    cl.innerHTML = Sf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const a = cl.content;
    if (r === "svg" || r === "mathml") {
      const l = a.firstChild;
      for (; l.firstChild; ) a.appendChild(l.firstChild);
      a.removeChild(l);
    }
    t.insertBefore(a, n);
  }
  return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, on = "transition", wr = "animation", rr = Symbol("_vtc"), Cf = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, xf = je({}, Gu, Cf), a1 = (e) => (e.displayName = "Transition", e.props = xf, e), sr = a1((e, { slots: t }) => vn(ah, Af(e), t)), _n = (e, t = []) => {
  se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ul = (e) => e ? se(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Af(e) {
  const t = {};
  for (const M in e) M in Cf || (t[M] = e[M]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: s, enterFromClass: i = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = i, appearActiveClass: u = o, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, b = l1(s), g = b && b[0], S = b && b[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: A, onLeave: _, onLeaveCancelled: x, onBeforeAppear: E = v, onAppear: T = y, onAppearCancelled: w = A } = t, D = (M, $, Y, Z) => {
    M._enterCancelled = Z, ln(M, $ ? c : a), ln(M, $ ? u : o), Y && Y();
  }, R = (M, $) => {
    M._isLeaving = false, ln(M, f), ln(M, m), ln(M, d), $ && $();
  }, N = (M) => ($, Y) => {
    const Z = M ? T : y, J = () => D($, M, Y);
    _n(Z, [$, J]), fl(() => {
      ln($, M ? l : i), Ht($, M ? c : a), ul(Z) || dl($, r, g, J);
    });
  };
  return je(t, { onBeforeEnter(M) {
    _n(v, [M]), Ht(M, i), Ht(M, o);
  }, onBeforeAppear(M) {
    _n(E, [M]), Ht(M, l), Ht(M, u);
  }, onEnter: N(false), onAppear: N(true), onLeave(M, $) {
    M._isLeaving = true;
    const Y = () => R(M, $);
    Ht(M, f), M._enterCancelled ? (Ht(M, d), go(M)) : (go(M), Ht(M, d)), fl(() => {
      M._isLeaving && (ln(M, f), Ht(M, m), ul(_) || dl(M, r, S, Y));
    }), _n(_, [M, Y]);
  }, onEnterCancelled(M) {
    D(M, false, void 0, true), _n(A, [M]);
  }, onAppearCancelled(M) {
    D(M, true, void 0, true), _n(w, [M]);
  }, onLeaveCancelled(M) {
    R(M), _n(x, [M]);
  } });
}
function l1(e) {
  if (e == null) return null;
  if (Se(e)) return [Vi(e.enter), Vi(e.leave)];
  {
    const t = Vi(e);
    return [t, t];
  }
}
function Vi(e) {
  return vm(e);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[rr] || (e[rr] = /* @__PURE__ */ new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[rr];
  n && (n.delete(t), n.size || (e[rr] = void 0));
}
function fl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let c1 = 0;
function dl(e, t, n, r) {
  const s = e._endId = ++c1, i = () => {
    s === e._endId && r();
  };
  if (n != null) return setTimeout(i, n);
  const { type: o, timeout: a, propCount: l } = Lf(e, t);
  if (!o) return r();
  const u = o + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, d), i();
  }, d = (m) => {
    m.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, a + 1), e.addEventListener(u, d);
}
function Lf(e, t) {
  const n = window.getComputedStyle(e), r = (b) => (n[b] || "").split(", "), s = r(`${on}Delay`), i = r(`${on}Duration`), o = ml(s, i), a = r(`${wr}Delay`), l = r(`${wr}Duration`), u = ml(a, l);
  let c = null, f = 0, d = 0;
  t === on ? o > 0 && (c = on, f = o, d = i.length) : t === wr ? u > 0 && (c = wr, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? on : wr : null, d = c ? c === on ? i.length : l.length : 0);
  const m = c === on && /\b(?:transform|all)(?:,|$)/.test(r(`${on}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: m };
}
function ml(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => hl(n) + hl(e[r])));
}
function hl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function go(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function u1(e, t, n) {
  const r = e[rr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ws = Symbol("_vod"), Ef = Symbol("_vsh"), sa = { name: "show", beforeMount(e, { value: t }, { transition: n }) {
  e[Ws] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Sr(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Sr(e, true), r.enter(e)) : r.leave(e, () => {
    Sr(e, false);
  }) : Sr(e, t));
}, beforeUnmount(e, { value: t }) {
  Sr(e, t);
} };
function Sr(e, t) {
  e.style.display = t ? e[Ws] : "none", e[Ef] = !t;
}
const f1 = Symbol(""), d1 = /(?:^|;)\s*display\s*:/;
function m1(e, t, n) {
  const r = e.style, s = De(n);
  let i = false;
  if (n && !s) {
    if (t) if (De(t)) for (const o of t.split(";")) {
      const a = o.slice(0, o.indexOf(":")).trim();
      n[a] == null && Ps(r, a, "");
    }
    else for (const o in t) n[o] == null && Ps(r, o, "");
    for (const o in n) o === "display" && (i = true), Ps(r, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = r[f1];
      o && (n += ";" + o), r.cssText = n, i = d1.test(n);
    }
  } else t && e.removeAttribute("style");
  Ws in e && (e[Ws] = i ? r.display : "", e[Ef] && (r.display = "none"));
}
const gl = /\s*!important$/;
function Ps(e, t, n) {
  if (se(n)) n.forEach((r) => Ps(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = h1(e, t);
    gl.test(n) ? e.setProperty(On(r), n.replace(gl, ""), "important") : e[r] = n;
  }
}
const vl = ["Webkit", "Moz", "ms"], Di = {};
function h1(e, t) {
  const n = Di[t];
  if (n) return n;
  let r = _t(t);
  if (r !== "filter" && r in e) return Di[t] = r;
  r = ur(r);
  for (let s = 0; s < vl.length; s++) {
    const i = vl[s] + r;
    if (i in e) return Di[t] = i;
  }
  return t;
}
const pl = "http://www.w3.org/1999/xlink";
function yl(e, t, n, r, s, i = Sm(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pl, t.slice(6, t.length)) : e.setAttributeNS(pl, t, n) : n == null || i && !fu(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Mt(n) ? String(n) : n);
}
function bl(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sf(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = false;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = fu(n) : n == null && a === "string" ? (n = "", o = true) : a === "number" && (n = 0, o = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function g1(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function v1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const _l = Symbol("_vei");
function p1(e, t, n, r, s = null) {
  const i = e[_l] || (e[_l] = {}), o = i[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = y1(t);
    if (r) {
      const u = i[t] = w1(r, s);
      g1(e, a, u, l);
    } else o && (v1(e, a, o, l), i[t] = void 0);
  }
}
const wl = /(?:Once|Passive|Capture)$/;
function y1(e) {
  let t;
  if (wl.test(e)) {
    t = {};
    let r;
    for (; r = e.match(wl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : On(e.slice(2)), t];
}
let Hi = 0;
const b1 = Promise.resolve(), _1 = () => Hi || (b1.then(() => Hi = 0), Hi = Date.now());
function w1(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Tt(S1(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = _1(), n;
}
function S1(e, t) {
  if (se(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (s) => !s._stopped && r && r(s));
  } else return t;
}
const Sl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, C1 = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? u1(e, r, o) : t === "style" ? m1(e, n, r) : ni(t) ? Bo(t) || p1(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : x1(e, t, r, o)) ? (bl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yl(e, t, r, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !De(r)) ? bl(e, _t(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), yl(e, t, r, o));
};
function x1(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Sl(t) && ue(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
  }
  return Sl(t) && De(n) ? false : t in e;
}
const Mf = /* @__PURE__ */ new WeakMap(), kf = /* @__PURE__ */ new WeakMap(), zs = Symbol("_moveCb"), Cl = Symbol("_enterCb"), A1 = (e) => (delete e.props.mode, e), L1 = A1({ name: "TransitionGroup", props: je({}, xf, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  const n = cs(), r = zu();
  let s, i;
  return Qo(() => {
    if (!s.length) return;
    const o = e.moveClass || `${e.name || "v"}-move`;
    if (!T1(s[0].el, n.vnode.el, o)) {
      s = [];
      return;
    }
    s.forEach(E1), s.forEach(M1);
    const a = s.filter(k1);
    go(n.vnode.el), a.forEach((l) => {
      const u = l.el, c = u.style;
      Ht(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
      const f = u[zs] = (d) => {
        d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[zs] = null, ln(u, o));
      };
      u.addEventListener("transitionend", f);
    }), s = [];
  }), () => {
    const o = te(e), a = Af(o);
    let l = o.tag || _e;
    if (s = [], i) for (let u = 0; u < i.length; u++) {
      const c = i[u];
      c.el && c.el instanceof Element && (s.push(c), In(c, zr(c, a, r, n)), Mf.set(c, Tf(c.el)));
    }
    i = t.default ? Jo(t.default()) : [];
    for (let u = 0; u < i.length; u++) {
      const c = i[u];
      c.key != null && In(c, zr(c, a, r, n));
    }
    return P(l, null, i);
  };
} }), ia = L1;
function E1(e) {
  const t = e.el;
  t[zs] && t[zs](), t[Cl] && t[Cl]();
}
function M1(e) {
  kf.set(e, Tf(e.el));
}
function k1(e) {
  const t = Mf.get(e), n = kf.get(e), r = t.left - n.left, s = t.top - n.top;
  if (r || s) {
    const i = e.el, o = i.style, a = i.getBoundingClientRect();
    let l = 1, u = 1;
    return i.offsetWidth && (l = a.width / i.offsetWidth), i.offsetHeight && (u = a.height / i.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < 0.01 && (l = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${r / l}px,${s / u}px)`, o.transitionDuration = "0s", e;
  }
}
function Tf(e) {
  const t = e.getBoundingClientRect();
  return { left: t.left, top: t.top };
}
function T1(e, t, n) {
  const r = e.cloneNode(), s = e[rr];
  s && s.forEach((a) => {
    a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(r);
  const { hasTransform: o } = Lf(r);
  return i.removeChild(r), o;
}
const P1 = je({ patchProp: C1 }, o1);
let xl;
function R1() {
  return xl || (xl = $h(P1));
}
const I1 = ((...e) => {
  const t = R1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = V1(r);
    if (!s) return;
    const i = t._component;
    !ue(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, false, O1(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function O1(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function V1(e) {
  return De(e) ? document.querySelector(e) : e;
}
const Al = () => {
};
function oa(e) {
  const t = `[${e}]`;
  return { debug: Al, info: Al, warn: (...n) => console.warn(t, ...n), error: (...n) => console.error(t, ...n) };
}
const Ll = 5;
function D1(e, t, n) {
  const r = t * n, s = Math.max(1, Math.round(e / (r * Ll)));
  return e / (s * Ll);
}
function Pf(e, t, n) {
  const r = e * n.dpr, s = t * n.dpr, i = r + n.offsetX, o = s + n.offsetY, a = Math.floor(i / n.gridPitch), l = Math.floor(o / n.gridPitch);
  return { cx: a, cy: l };
}
function H1(e, t) {
  const n = (e.cx % t.worldCols + t.worldCols) % t.worldCols, r = (e.cy % t.worldRows + t.worldRows) % t.worldRows;
  return { cx: n, cy: r };
}
function N1(e, t, n) {
  return { cssX: (e * n.gridPitch - n.offsetX) / n.dpr, cssY: (t * n.gridPitch - n.offsetY) / n.dpr };
}
function F1(e, t) {
  return e * t.gridPitch / t.dpr;
}
const Rf = 1, $1 = `gol.gridBlankZones.v${Rf}`, B1 = 128;
function j1(e, t, n, r) {
  if (!Array.isArray(e)) return [];
  const s = r ?? Date.now(), i = [];
  for (const o of e) {
    if (i.length >= n) break;
    const a = t(o, s);
    a && i.push(a);
  }
  return i;
}
const W1 = /* @__PURE__ */ new Set(["minor", "major", "both"]), z1 = /* @__PURE__ */ new Set(["none", "bold-major", "fade", "noted"]);
function Ni(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Bn(e) {
  return typeof e != "number" || !Number.isFinite(e) ? null : Math.trunc(e);
}
function G1() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `zone-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function U1(e) {
  return typeof e == "string" && W1.has(e) ? e : "both";
}
function Z1(e) {
  const t = e && typeof e == "object" ? e : {}, n = typeof t.style == "string" && z1.has(t.style) ? t.style : "none", r = Ni(Bn(t.widthCells) ?? 1, 1, 4), s = typeof t.opacity == "number" ? t.opacity : 1, i = Ni(s, 0, 1), o = { style: n, widthCells: r, opacity: i };
  if (n === "fade") {
    const a = typeof t.fadeStrength == "number" ? t.fadeStrength : 0.6;
    o.fadeStrength = Ni(a, 0, 1);
  }
  return n === "noted" && (o.notePitchCells = Math.max(1, Bn(t.notePitchCells) ?? 2)), (n === "bold-major" || n === "noted") && (o.hideInteriorBorder = typeof t.hideInteriorBorder == "boolean" ? t.hideInteriorBorder : false), o;
}
function K1(e) {
  return typeof e == "boolean" ? e : true;
}
function El(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function If(e, t = Date.now()) {
  if (!e || typeof e != "object") return null;
  const n = e, r = Bn(n.x1), s = Bn(n.y1), i = Bn(n.x2), o = Bn(n.y2);
  if (r === null || s === null || i === null || o === null) return null;
  const a = Math.min(r, i), l = Math.max(r, i), u = Math.min(s, o), c = Math.max(s, o);
  return { id: typeof n.id == "string" && n.id.length > 0 ? n.id : G1(), x1: a, y1: u, x2: l, y2: c, mode: U1(n.mode), edge: Z1(n.edge), enabled: K1(n.enabled), createdAt: El(n.createdAt, t), updatedAt: El(n.updatedAt, t) };
}
function Of(e, t = Date.now()) {
  return j1(e, If, B1, t);
}
function Fi() {
  return typeof localStorage < "u";
}
function Y1(e) {
  return { load() {
    if (!Fi()) return [];
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
    if (!Fi()) return;
    const n = { version: e.version, [e.itemsKey]: e.normalize(t) };
    localStorage.setItem(e.key, JSON.stringify(n));
  }, clear() {
    Fi() && localStorage.removeItem(e.key);
  } };
}
const aa = Y1({ key: $1, version: Rf, normalize: Of, itemsKey: "zones" }), q1 = aa.load, X1 = aa.save, J1 = aa.clear;
function Q1(e) {
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
  function s(u) {
    var _a2;
    const c = e.normalizeOne(u);
    c && (n([...t.value.filter((f) => f.id !== c.id), c]), (_a2 = e.onAdd) == null ? void 0 : _a2.call(e, c));
  }
  function i(u) {
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
  return { items: t, setItems: r, addItem: s, updateItem: i, removeItem: o, clearItems: a, syncFromWorker: l };
}
function eg(e = {}) {
  const { items: t, setItems: n, addItem: r, updateItem: s, removeItem: i, clearItems: o, syncFromWorker: a } = Q1({ storage: { load: q1, save: X1, clear: J1 }, normalize: Of, normalizeOne: If, onSet: e.onSetZones, onAdd: e.onAddZone, onUpdate: e.onUpdateZone, onRemove: e.onRemoveZone, onClear: e.onClearZones });
  return { zones: t, setZones: n, addZone: r, updateZone: s, removeZone: i, clearZones: o, syncFromWorker: a };
}
const Ml = oa("WorkerBridge");
function tg() {
  let e = null;
  const t = X(null), n = /* @__PURE__ */ new Map();
  function r(l, u) {
    if (e) try {
      u && u.length > 0 ? e.postMessage(l, u) : e.postMessage(l);
    } catch (c) {
      Ml.error("Worker postMessage failed:", c instanceof Error ? c.message : String(c));
    }
  }
  function s(l, u) {
    return n.has(l) || n.set(l, /* @__PURE__ */ new Set()), n.get(l).add(u), () => {
      var _a2;
      return (_a2 = n.get(l)) == null ? void 0 : _a2.delete(u);
    };
  }
  function i(l) {
    (l.type === "ready" || l.type === "grid_info") && (t.value = l.gridInfo);
    const u = n.get(l.type);
    if (u) for (const c of u) c(l);
  }
  function o(l, u, c) {
    const f = new Worker(new URL("/assets/backgroundRenderer-DBvns1f7.js", import.meta.url), { type: "module" });
    f.onmessage = (d) => i(d.data), f.onerror = (d) => {
      Ml.error("Worker uncaught exception:", d.message, `at ${d.filename}:${d.lineno}`);
    }, e = f, r({ type: "init", canvas: l, cellPx: u, theme: c }, [l]);
  }
  function a() {
    r({ type: "stop" }), e == null ? void 0 : e.terminate(), e = null;
  }
  return { gridInfo: t, post: r, on: s, init: o, terminate: a };
}
const $i = 5, ng = /* @__PURE__ */ new Set(["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "LABEL"]), rg = '.zone-panel, .v-overlay-container, [data-grid-ignore-click="true"]';
function sg(e, t) {
  function n() {
    const l = e.value;
    return !l || l.gridPitch === 0 ? null : { gridPitch: l.gridPitch, offsetX: t.value.x, offsetY: t.value.y, dpr: devicePixelRatio, worldCols: l.worldCols, worldRows: l.worldRows };
  }
  function r(l, u) {
    return (l % u.worldCols + u.worldCols) % u.worldCols;
  }
  function s(l) {
    const u = n();
    if (!u) return null;
    const c = Pf(l.clientX, l.clientY, u);
    return { cx: r(c.cx, u), cy: c.cy };
  }
  function i(l, u) {
    return { x1: Math.min(l.cx, u.cx), y1: Math.min(l.cy, u.cy), x2: Math.max(l.cx, u.cx), y2: Math.max(l.cy, u.cy) };
  }
  function o(l, u) {
    const c = (d) => Math.floor(d / $i) * $i, f = (d) => c(d) + ($i - 1);
    return { x1: Math.max(0, Math.min(u.worldCols - 1, c(l.x1))), y1: c(l.y1), x2: Math.max(0, Math.min(u.worldCols - 1, f(l.x2))), y2: f(l.y2) };
  }
  function a(l) {
    if (!(l instanceof HTMLElement)) return false;
    if (l.closest(rg)) return true;
    let u = l;
    for (; u; ) {
      if (ng.has(u.tagName) || u.getAttribute("role") === "button") return true;
      u = u.parentElement;
    }
    return false;
  }
  return { makeSnapshot: n, pointerToCell: s, cellToScreen: N1, cellSpanToCssPx: F1, normalizeRect: i, snapRectToMajor: o, isInteractiveTarget: a, wrapXToWorld: r };
}
function ig() {
  let e = 0;
  function t(r) {
    function s() {
      r(), e = requestAnimationFrame(s);
    }
    e = requestAnimationFrame(s);
  }
  function n() {
    e && (cancelAnimationFrame(e), e = 0);
  }
  return { start: t, stop: n };
}
function og(e) {
  const t = /* @__PURE__ */ new Map(), n = X(null), r = X(null), s = X(null);
  let i = null, o = null;
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
      s.value = null;
      return;
    }
    const y = e.cellToScreen(S.x1, S.y1, v), A = e.cellSpanToCssPx(S.x2 - S.x1 + 1, v), _ = e.cellSpanToCssPx(S.y2 - S.y1 + 1, v);
    s.value = { left: `${y.cssX}px`, top: `${y.cssY}px`, width: `${A}px`, height: `${_}px` };
  }
  function c() {
    i = null, n.value = null, o = null, r.value = null, s.value = null;
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
    n.value = v[0], i = y;
    const A = { x1: y.cx, y1: y.cy, x2: y.cx, y2: y.cy };
    v[1].dragMode === "paint" && (o = { ...A }), r.value = A, u(), S.target instanceof Element && S.target.setPointerCapture(S.pointerId), S.preventDefault();
  }
  function m(S) {
    var _a2;
    if (!n.value || !i) return;
    const v = t.get(n.value);
    if (!v) return;
    const y = e.pointerToCell(S), A = e.makeSnapshot();
    if (!(!y || !A)) {
      if (v.dragMode === "paint" && o) o.x1 = Math.min(o.x1, y.cx), o.y1 = Math.min(o.y1, y.cy), o.x2 = Math.max(o.x2, y.cx), o.y2 = Math.max(o.y2, y.cy), r.value = { ...o };
      else {
        const _ = e.normalizeRect(i, y);
        r.value = ((_a2 = v.snapMajor) == null ? void 0 : _a2.call(v)) ? e.snapRectToMajor(_, A) : _;
      }
      u();
    }
  }
  function b(S) {
    var _a2;
    if (!n.value || !i || S.button !== 0) return;
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
      const E = e.normalizeRect(i, y);
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
  return { register: a, activeTool: n, previewRect: r, previewStyle: s, cancelActiveDrag: f, anyToolEnabled: l, attachListeners: g };
}
const kl = { surface: [0.985, -1e-3, 4e-3], ink: [0.28, 1e-3, 5e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.1, grain_intensity: 0, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.88, 0.08, 15], accent_chroma_scale: 1 }, Tl = { surface: [0.18, 0, -3e-3], ink: [0.84, 0, -2e-3], minor_t: 0.08, major_t: 0.14, border_t: 0.24, ink_opacity: 0.12, grain_intensity: 8e-3, ink_secondary_t: 0.78, ink_tertiary_t: 0.54, accent: [0.72, 0.08, 305], accent_chroma_scale: 0.75 };
function wn(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n];
}
function Lt([e, t, n], r = 1) {
  return r === 1 ? `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)})` : `oklab(${e.toFixed(4)} ${t.toFixed(4)} ${n.toFixed(4)} / ${r.toFixed(3)})`;
}
function Bi([e, t, n], r = 1, s = 1) {
  const i = t * r;
  return s === 1 ? `oklch(${e.toFixed(4)} ${i.toFixed(4)} ${n.toFixed(2)})` : `oklch(${e.toFixed(4)} ${i.toFixed(4)} ${n.toFixed(2)} / ${s.toFixed(3)})`;
}
const Vf = "theme-preference";
function ag() {
  var _a2;
  if (typeof window > "u") return "system";
  const e = (_a2 = window.localStorage) == null ? void 0 : _a2.getItem(Vf);
  return e === "light" || e === "dark" || e === "system" ? e : "system";
}
const Yr = X(ag()), Df = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (n) => {
    Df.value = n.matches;
  };
  typeof e.addEventListener == "function" ? e.addEventListener("change", t) : e.addListener(t);
}
le(Yr, (e) => {
  var _a2;
  typeof window < "u" && ((_a2 = window.localStorage) == null ? void 0 : _a2.setItem(Vf, e));
});
const vo = H(() => Yr.value === "light" ? kl : Yr.value === "dark" || Df.value ? Tl : kl);
if (typeof window < "u" && (document == null ? void 0 : document.documentElement)) {
  const e = (t) => {
    const n = document.documentElement, r = (i, o) => {
      n.style.setProperty(i, o);
    };
    n.dataset.themeMode = t.surface[0] > 0.5 ? "light" : "dark", r("--theme-surface", Lt(t.surface)), r("--theme-ink", Lt(t.ink)), r("--theme-ink-secondary", Lt(wn(t.surface, t.ink, t.ink_secondary_t))), r("--theme-ink-tertiary", Lt(wn(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-text-primary", Lt(t.ink)), r("--theme-text-secondary", Lt(wn(t.surface, t.ink, t.ink_secondary_t))), r("--theme-text-tertiary", Lt(wn(t.surface, t.ink, t.ink_tertiary_t))), r("--theme-grid-minor", Lt(wn(t.surface, t.ink, t.minor_t))), r("--theme-grid-major", Lt(wn(t.surface, t.ink, t.major_t))), r("--theme-grid-border", Lt(wn(t.surface, t.ink, t.border_t))), r("--theme-accent", Bi(t.accent, t.accent_chroma_scale)), r("--theme-accent-ring", Bi(t.accent, t.accent_chroma_scale, 0.45)), r("--theme-selection-bg", Bi(t.accent, t.accent_chroma_scale, 0.2)), r("color-scheme", t.surface[0] > 0.5 ? "light" : "dark");
    const s = document.querySelector('meta[name="theme-color"]');
    s && s.setAttribute("content", Lt(t.surface));
  };
  e(vo.value), le(vo, e);
}
function Hf() {
  return { preference: Yr, theme: vo, setPreference(e) {
    Yr.value = e;
  } };
}
const lg = 5, cg = 16, ug = 2160;
function fg(e) {
  let t = null, n = 0, r = 0, s = null, i = null, o = 0, a = null, l = null, u = null, c = false, f = false;
  function d(R) {
    const N = R.getBoundingClientRect();
    return { width: Math.max(1, Math.round(N.width * devicePixelRatio)), height: Math.max(1, Math.round(N.height * devicePixelRatio)) };
  }
  function m(R) {
    var _a2, _b2;
    const N = (_b2 = (_a2 = R.devicePixelContentBoxSize) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.inlineSize;
    return typeof N == "number" && N > 0 ? N : Math.max(1, Math.round(R.contentRect.width * devicePixelRatio));
  }
  function b(R) {
    const N = Math.round(screen.height * devicePixelRatio);
    return Math.max(R, N, ug);
  }
  function g() {
    const R = document.createElement("div");
    R.style.cssText = "position:fixed;left:-9999px;top:0;width:100px;height:100px;", document.body.appendChild(R);
    const N = R.getBoundingClientRect().width;
    return R.remove(), Math.abs(N - 100) > 0.1;
  }
  function S(R) {
    return D1(R, cg, devicePixelRatio);
  }
  function v(R, N, M) {
    const $ = N / devicePixelRatio, Y = M / devicePixelRatio;
    let Z = $, J = Y;
    if (c) {
      const Q = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
      Q > 0 && Q !== 1 && (Z = $ / Q, J = Y / Q);
    }
    R.style.width = `${Z.toFixed(2)}px`, R.style.height = `${J.toFixed(2)}px`;
  }
  function y(R) {
    R.classList.add("app-bg--hidden"), i !== null && clearTimeout(i), i = window.setTimeout(() => {
      i = null, R.classList.remove("app-bg--hidden");
    }, 120);
  }
  function A(R) {
    const N = S(R);
    document.documentElement.style.setProperty("--grid-margin", `${(0.8 * N * lg / devicePixelRatio).toFixed(1)}px`);
  }
  function _(R, N) {
    n = N, v(R, n, r), y(R), A(n), l !== null && clearTimeout(l), l = window.setTimeout(() => {
      l = null, e({ type: "resize", width: n, height: r }), y(R);
    }, 90);
  }
  function x(R) {
    a === null && (a = requestAnimationFrame(() => {
      a = null, !(o === 0 || o === n) && _(R, o);
    }));
  }
  function E(R) {
    let N = false;
    const M = () => {
      if (N) return;
      const $ = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), Y = () => {
        N || (R(), M());
      };
      $.addEventListener("change", Y, { once: true });
    };
    return M(), () => {
      N = true;
    };
  }
  function T(R, N) {
    t = N, c = g();
    const M = d(R);
    n = M.width, r = b(M.height), N.width = n, N.height = r, v(N, n, r);
    const $ = N.transferControlToOffscreen(), Y = S(n);
    return A(n), s = new ResizeObserver(([Z]) => {
      if (!t) return;
      const J = m(Z);
      J <= 0 || J === n || (o = J, x(t));
    }), s.observe(R), u = E(() => {
      if (!t) return;
      c = g();
      const Z = Math.round(R.getBoundingClientRect().height * devicePixelRatio);
      r = b(Z), _(t, n);
    }), { offscreen: $, gridPitch: Y };
  }
  function w() {
    t && (t.classList.add("app-bg--visible"), window.setTimeout(() => {
      f || (t == null ? void 0 : t.classList.add("app-bg--snappy-transition"));
    }, 1100));
  }
  function D() {
    f = true, s == null ? void 0 : s.disconnect(), u == null ? void 0 : u(), i !== null && (clearTimeout(i), i = null), a !== null && (cancelAnimationFrame(a), a = null), l !== null && (clearTimeout(l), l = null), t = null;
  }
  return { initialize: T, revealCanvas: w, teardown: D };
}
const dg = oa("AppBackground");
function mg(e) {
  e.on("startup_breakdown", (t) => {
    const n = (i) => `${i.toFixed(0)}ms`, r = ["Startup breakdown:", `  total            ${n(t.phases.total)}`, `  gpu_probe        ${n(t.phases.gpuProbe)}`, `  wasm_import      ${n(t.phases.wasmImport)}`, `  new_offscreen    ${n(t.phases.newOffscreen)}`, `  ready_post       ${n(t.phases.readyPost)}`], s = t.phases.newOffscreenPhases;
    s && (r.push("  new_offscreen sub-phases:"), r.push(`    device_request   ${n(s.deviceRequest)}`), r.push(`    panel_init       ${n(s.panelInit)}`), r.push(`    seeding          ${n(s.seeding)}`), r.push(`    simulation_init  ${n(s.simulationInit)}`), r.push(`    renderer_init    ${n(s.rendererInit)}`));
  }), e.on("gpu_pass_breakdown", (t) => {
    const n = (s) => s === null ? "\u2014" : `${s.toFixed(2)}ms`, r = t.durations;
    dg.info(`GPU pass breakdown (frame ${t.frame}):
  compute_tick   ${n(r.computeTickMs)}
  xor_edit       ${n(r.xorEditMs)}
  or_edit        ${n(r.orEditMs)}
  render_pass    ${n(r.renderPassMs)}`);
  });
}
var hg = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z", gg = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Nf = "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z", vg = "M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M13 13C13 14.1 12.1 15 11 15S9 14.1 9 13 9.9 11 11 11 13 11.9 13 13M15 18V19H7V18C7 16.67 9.67 16 11 16S15 16.67 15 18Z", pg = "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z", Ff = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", yg = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z", bg = "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z", $f = "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z", _g = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", wg = "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z", Pl = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z", Sg = "M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z", Rl = "M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z", Cg = "M3 11H11V3H3M5 5H9V9H5M13 21H21V13H13M15 15H19V19H15M3 21H11V13H3M5 15H9V19H5M13 3V11H21V3M19 9H15V5H19Z", Il = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", Ol = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
const fr = [{ id: "hero", route: "/", label: "Home", gx: 0, gy: 0, icon: yg }, { id: "projects", route: "/projects", label: "Demos", gx: 1, gy: 0, icon: Cg }, { id: "resume", route: "/resume", label: "Resume", gx: -1, gy: 0, icon: vg }, { id: "contact", route: "/contact", label: "Contact", gx: 0, gy: 1, icon: Nf }, { id: "about", route: "/about", label: "About", gx: 0, gy: -1, icon: hg }], hi = fr[0], Bf = new Map(fr.map((e) => [e.id, e]));
new Map(fr.map((e) => [e.route, e]));
function gi(e) {
  return Bf.get(e) ?? hi;
}
function xg(e) {
  return typeof e == "string" && Bf.has(e) ? e : hi.id;
}
function Ag(e, t) {
  return Math.min(e.w, t);
}
function Vl(e, t, n, r) {
  return (e + t) / (2 * Math.max(n, 1e-6)) + r;
}
function Lg(e, t) {
  const n = t.zoom, r = Ag(e, t.panelMaxWidth), s = t.panelHeight ?? e.h;
  return { col: Vl(e.w, r, n, t.gutterX), row: Vl(e.h, s, n, t.gutterY) };
}
function fs(e, t) {
  return { x: e.gx * t.col, y: e.gy * t.row };
}
function jf(e, t, n) {
  return { x: n.w / 2 + (e.x - t.x) * t.zoom, y: n.h / 2 + (e.y - t.y) * t.zoom };
}
function Eg(e, t, n, r) {
  const s = jf(e, t, n), i = Math.hypot(s.x - n.w / 2, s.y - n.h / 2), o = Math.min(1, i / Math.max(r.radius, 1e-6)), a = o * o * (3 - 2 * o);
  return r.floor + (1 - r.floor) * (1 - a);
}
const Mg = 1200, Dl = 0.55, kg = 0.7, Tg = 0.7, Hl = 0.5, Nl = 40, Pg = 240, Rg = 0.14, Ig = 0.7, Og = 6, Vg = 84, ji = 18, Dg = 0.01;
function Hg(e, t, n) {
  return { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, zoom: e.zoom + (t.zoom - e.zoom) * n };
}
function Ng(e, t, n = Dg) {
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.zoom - t.zoom) < n;
}
function Fg(e, t) {
  const n = t.w / 2, r = t.h / 2;
  return `translate(${n}px, ${r}px) scale(${e.zoom}) translate(${-e.x}px, ${-e.y}px)`;
}
function $g(e, t, n) {
  return { x: e.x * t * n, y: e.y * t * n };
}
const Bg = 0.18, jg = 1;
function Wf(e) {
  return Lg(e, { panelMaxWidth: Mg, gutterX: Dl * e.w, gutterY: Dl * e.h, zoom: 1 });
}
const ds = X({ w: 1, h: 1 });
function zf() {
  const e = gi(hi.id), t = fs(e, Wf(ds.value));
  return { x: t.x, y: t.y, zoom: e.zoom ?? 1 };
}
const Ct = X(zf()), Yn = X(zf()), vi = X(false), la = X(hi.id), ca = X(0), Gf = X(typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
if (typeof window < "u" && window.matchMedia) {
  const e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = (n) => {
    Gf.value = n.matches;
  };
  typeof e.addEventListener == "function" && e.addEventListener("change", t);
}
const ua = H(() => Wf(ds.value));
let Tn = 0;
function Uf() {
  if (Ct.value = Hg(Ct.value, Yn.value, Bg), Ng(Ct.value, Yn.value)) {
    Ct.value = { ...Yn.value }, vi.value = false, Tn = 0;
    return;
  }
  Tn = requestAnimationFrame(Uf);
}
function Wg() {
  Tn === 0 && (vi.value = true, Tn = requestAnimationFrame(Uf));
}
function zg() {
  Tn !== 0 && (cancelAnimationFrame(Tn), Tn = 0), vi.value = false;
}
function fa(e, t, n) {
  zg();
  const r = n ?? Ct.value.zoom;
  Ct.value = { x: e, y: t, zoom: r }, Yn.value = { x: e, y: t, zoom: r };
}
function Zf(e, t, n = {}) {
  const r = n.zoom ?? Yn.value.zoom;
  if (Yn.value = { x: e, y: t, zoom: r }, n.snap || Gf.value) {
    fa(e, t, r);
    return;
  }
  Wg();
}
function Gg(e, t = {}) {
  la.value = e, ca.value = 0;
  const n = gi(e), r = fs(n, ua.value);
  Zf(r.x, r.y, { zoom: n.zoom, snap: t.snap });
}
function Ug() {
  la.value = null;
}
function Zg(e, t) {
  ds.value = { w: Math.max(1, e), h: Math.max(1, t) };
}
function Kg(e) {
  ca.value = Math.max(0, e);
}
le(ua, (e) => {
  const t = la.value;
  if (t === null) return;
  const n = gi(t), r = fs(n, e);
  fa(r.x, r.y, n.zoom ?? Ct.value.zoom);
});
const Yg = H(() => ({ transform: Fg(Ct.value, ds.value) })), qg = H(() => $g({ x: Ct.value.x, y: Ct.value.y + ca.value, zoom: Ct.value.zoom }, typeof window < "u" ? window.devicePixelRatio : 1, jg));
function dr() {
  return { camera: Ct, isAnimating: vi, viewport: ds, spacing: ua, cameraStyle: Yg, worldOffsetDevicePx: qg, panTo: Zf, panToWaypoint: Gg, snapTo: fa, releaseAnchor: Ug, setViewport: Zg, setCaptureScroll: Kg };
}
const Fl = 0.1;
function Xg(e) {
  const { worldOffsetDevicePx: t } = dr();
  let n = Number.NaN, r = Number.NaN;
  le(t, ({ x: s, y: i }) => {
    Math.abs(s - n) < Fl && Math.abs(i - r) < Fl || (n = s, r = i, e.post({ type: "camera", x: s, y: i }));
  });
}
function Kf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`;
}
const Ie = typeof window < "u", da = Ie && "IntersectionObserver" in window, Jg = Ie && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Yf = Ie && "matchMedia" in window && typeof window.matchMedia == "function", Gs = () => Yf && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function $l(e, t, n) {
  Qg(e, t), t.set(e, n);
}
function Qg(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Bl(e, t, n) {
  return e.set(qf(e, t), n), n;
}
function Zt(e, t) {
  return e.get(qf(e, t));
}
function qf(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Xf(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let s = 0; s < r; s++) {
    if (e == null) return n;
    e = e[t[s]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function po(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Xf(e, t.split("."), n));
}
function Cr(e, t, n) {
  if (t === true) return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean") return n;
  if (e !== Object(e)) {
    if (typeof t != "function") return n;
    const s = t(e, n);
    return typeof s > "u" ? n : s;
  }
  if (typeof t == "string") return po(e, t, n);
  if (Array.isArray(t)) return Xf(e, t, n);
  if (typeof t != "function") return n;
  const r = t(e, n);
  return typeof r > "u" ? n : r;
}
function Jf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (n, r) => t + r);
}
function pe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "") return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function yo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function jl(e) {
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
function Wi(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function tv(e, t) {
  const n = {};
  for (const r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function ms(e, t) {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}
const nv = /^on[^a-z]/, Qf = (e) => nv.test(e);
function ma(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Us(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Wl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function zl(e, t) {
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
  for (const s in e) r[s] = e[s];
  for (const s in t) {
    const i = e[s], o = t[s];
    if (jl(i) && jl(o)) {
      r[s] = pt(i, o, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(o)) {
      r[s] = n(i, o);
      continue;
    }
    r[s] = o;
  }
  return r;
}
function ed(e) {
  return e.map((t) => t.type === _e ? ed(t.children) : t).flat();
}
function Pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Pn.cache.has(e)) return Pn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Pn.cache.set(e, t), t;
}
Pn.cache = /* @__PURE__ */ new Map();
function jn(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((n) => jn(e, n)).flat(1);
  if (t.suspense) return jn(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((n) => jn(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e)) return [t.component];
    if (t.component.subTree) return jn(e, t.component.subTree).flat(1);
  }
  return [];
}
var Dn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap();
class sv {
  constructor(t) {
    $l(this, Dn, []), $l(this, Sn, 0), this.size = t;
  }
  get isFull() {
    return Zt(Dn, this).length === this.size;
  }
  push(t) {
    Zt(Dn, this)[Zt(Sn, this)] = t, Bl(Sn, this, (Zt(Sn, this) + 1) % this.size);
  }
  values() {
    return Zt(Dn, this).slice(Zt(Sn, this)).concat(Zt(Dn, this).slice(0, Zt(Sn, this)));
  }
  clear() {
    Zt(Dn, this).length = 0, Bl(Sn, this, 0);
  }
}
function ha(e) {
  const t = Ue({});
  gn(() => {
    const r = e();
    for (const s in r) t[s] = r[s];
  }, { flush: "sync" });
  const n = {};
  for (const r in t) n[r] = B(() => t[r]);
  return n;
}
function Zs(e, t) {
  return e.includes(t);
}
function td(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Vr = () => [Function, Array];
function Gl(e, t) {
  return t = "on" + ur(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function qn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((s) => `${s}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let r;
  try {
    r = [...e.querySelectorAll(n)];
  } catch {
    return [];
  }
  return r.filter((s) => !s.closest("[inert]")).filter((s) => !!s.offsetParent || s.getClientRects().length > 0).filter((s) => {
    var _a2, _b2;
    return !((_a2 = s.parentElement) == null ? void 0 : _a2.closest("details:not([open])")) || s.tagName === "SUMMARY" && ((_b2 = s.parentElement) == null ? void 0 : _b2.tagName) === "DETAILS";
  });
}
function nd(e, t, n) {
  let r, s = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    s += i, r = e[s];
  while ((!r || r.offsetParent == null || !((n == null ? void 0 : n(r)) ?? true)) && s < e.length && s >= 0);
  return r;
}
function Dr(e, t) {
  var _a2, _b2, _c2, _d2;
  const n = qn(e);
  if (t == null) (e === document.activeElement || !e.contains(document.activeElement)) && ((_a2 = n[0]) == null ? void 0 : _a2.focus());
  else if (t === "first") (_b2 = n[0]) == null ? void 0 : _b2.focus();
  else if (t === "last") (_c2 = n.at(-1)) == null ? void 0 : _c2.focus();
  else if (typeof t == "number") (_d2 = n[t]) == null ? void 0 : _d2.focus();
  else {
    const r = nd(n, t);
    r ? r.focus() : Dr(e, t === "next" ? "first" : "last");
  }
}
function iv(e, t) {
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
  const n = e.clientX, r = e.clientY, s = t.getBoundingClientRect(), i = s.left, o = s.top, a = s.right, l = s.bottom;
  return n >= i && n <= a && r >= o && r <= l;
}
function bo() {
  const e = ve(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", { enumerable: true, get: () => e.value, set: (n) => e.value = n }), Object.defineProperty(t, "el", { enumerable: true, get: () => ev(e.value) }), t;
}
function ir(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function lv(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, s] = n;
    return t.includes(r) ? !!s : s !== void 0;
  }));
}
const rd = ["top", "bottom"], cv = ["start", "end", "left", "right"];
function _o(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = Zs(rd, n) ? "start" : Zs(cv, n) ? "top" : "center"), { side: Ul(n, t), align: Ul(r, t) };
}
function Ul(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function zi(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Gi(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Zl(e) {
  return { side: e.align, align: e.side };
}
function Kl(e) {
  return Zs(rd, e.side) ? "y" : "x";
}
class xt {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, r = t instanceof Element, s = r ? 1 + (1 - n) / n : 1, { x: i, y: o, width: a, height: l } = r ? t.getBoundingClientRect() : t;
    this.x = i * s, this.y = o * s, this.width = a * s, this.height = l * s;
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
function Yl(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function sd(e) {
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
function id(e) {
  const t = new xt(e), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let s, i, o, a, l;
    if (r.startsWith("matrix3d(")) s = r.slice(9, -1).split(/, /), i = Number(s[0]), o = Number(s[5]), a = Number(s[12]), l = Number(s[13]);
    else if (r.startsWith("matrix(")) s = r.slice(7, -1).split(/, /), i = Number(s[0]), o = Number(s[3]), a = Number(s[4]), l = Number(s[5]);
    else return new xt(t);
    const u = n.transformOrigin, c = t.x - a - (1 - i) * parseFloat(u), f = t.y - l - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = i ? t.width / i : e.offsetWidth + 1, m = o ? t.height / o : e.offsetHeight + 1;
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
  return typeof r.finished > "u" && (r.finished = new Promise((s) => {
    r.onfinish = () => {
      s(r);
    };
  })), r;
}
const Rs = /* @__PURE__ */ new WeakMap();
function fv(e, t) {
  Object.keys(t).forEach((n) => {
    if (Qf(n)) {
      const r = td(n), s = Rs.get(e);
      if (t[n] == null) s == null ? void 0 : s.forEach((i) => {
        const [o, a] = i;
        o === r && (e.removeEventListener(r, a), s.delete(i));
      });
      else if (!s || ![...s].some((i) => i[0] === r && i[1] === t[n])) {
        e.addEventListener(r, t[n]);
        const i = s || /* @__PURE__ */ new Set();
        i.add([r, t[n]]), Rs.has(e) || Rs.set(e, i);
      }
    } else t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function dv(e, t) {
  Object.keys(t).forEach((n) => {
    if (Qf(n)) {
      const r = td(n), s = Rs.get(e);
      s == null ? void 0 : s.forEach((i) => {
        const [o, a] = i;
        o === r && (e.removeEventListener(r, a), s.delete(i));
      });
    } else e.removeAttribute(n);
  });
}
const Hn = 2.4, ql = 0.2126729, Xl = 0.7151522, Jl = 0.072175, mv = 0.55, hv = 0.58, gv = 0.57, vv = 0.62, Ls = 0.03, Ql = 1.45, pv = 5e-4, yv = 1.25, bv = 1.25, ec = 0.078, tc = 12.82051282051282, Es = 0.06, nc = 1e-3;
function rc(e, t) {
  const n = (e.r / 255) ** Hn, r = (e.g / 255) ** Hn, s = (e.b / 255) ** Hn, i = (t.r / 255) ** Hn, o = (t.g / 255) ** Hn, a = (t.b / 255) ** Hn;
  let l = n * ql + r * Xl + s * Jl, u = i * ql + o * Xl + a * Jl;
  if (l <= Ls && (l += (Ls - l) ** Ql), u <= Ls && (u += (Ls - u) ** Ql), Math.abs(u - l) < pv) return 0;
  let c;
  if (u > l) {
    const f = (u ** mv - l ** hv) * yv;
    c = f < nc ? 0 : f < ec ? f - f * tc * Es : f - Es;
  } else {
    const f = (u ** vv - l ** gv) * bv;
    c = f > -nc ? 0 : f > -ec ? f - f * tc * Es : f + Es;
  }
  return c * 100;
}
const Ks = 0.20689655172413793, _v = (e) => e > Ks ** 3 ? Math.cbrt(e) : e / (3 * Ks ** 2) + 4 / 29, wv = (e) => e > Ks ? e ** 3 : 3 * Ks ** 2 * (e - 4 / 29);
function od(e) {
  const t = _v, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function ad(e) {
  const t = wv, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const Sv = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Cv = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, xv = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Av = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function ld(e) {
  const t = Array(3), n = Cv, r = Sv;
  for (let s = 0; s < 3; ++s) t[s] = Math.round(Us(n(r[s][0] * e[0] + r[s][1] * e[1] + r[s][2] * e[2])) * 255);
  return { r: t[0], g: t[1], b: t[2] };
}
function ga(e) {
  let { r: t, g: n, b: r } = e;
  const s = [0, 0, 0], i = Av, o = xv;
  t = i(t / 255), n = i(n / 255), r = i(r / 255);
  for (let a = 0; a < 3; ++a) s[a] = o[a][0] * t + o[a][1] * n + o[a][2] * r;
  return s;
}
function wo(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Lv(e) {
  return wo(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const sc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ev = { rgb: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), rgba: (e, t, n, r) => ({ r: e, g: t, b: n, a: r }), hsl: (e, t, n, r) => ic({ h: e, s: t, l: n, a: r }), hsla: (e, t, n, r) => ic({ h: e, s: t, l: n, a: r }), hsv: (e, t, n, r) => qr({ h: e, s: t, v: n, a: r }), hsva: (e, t, n, r) => qr({ h: e, s: t, v: n, a: r }) };
function Bt(e) {
  if (typeof e == "number") return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && sc.test(e)) {
    const { groups: t } = e.match(sc), { fn: n, values: r } = t, s = r.split(/,\s*|\s*\/\s*|\s+/).map((i, o) => i.endsWith("%") || o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Ev[n](...s);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((n) => n + n).join("") : [6, 8].includes(t.length), kv(t);
  } else if (typeof e == "object") {
    if (Wi(e, ["r", "g", "b"])) return e;
    if (Wi(e, ["h", "s", "l"])) return qr(cd(e));
    if (Wi(e, ["h", "s", "v"])) return qr(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function qr(e) {
  const { h: t, s: n, v: r, a: s } = e, i = (a) => {
    const l = (a + t / 60) % 6;
    return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0);
  }, o = [i(5), i(3), i(1)].map((a) => Math.round(a * 255));
  return { r: o[0], g: o[1], b: o[2], a: s };
}
function ic(e) {
  return qr(cd(e));
}
function cd(e) {
  const { h: t, s: n, l: r, a: s } = e, i = r + n * Math.min(r, 1 - r), o = i === 0 ? 0 : 2 - 2 * r / i;
  return { h: t, s: o, v: i, a: s };
}
function Ms(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Mv(e) {
  let { r: t, g: n, b: r, a: s } = e;
  return `#${[Ms(t), Ms(n), Ms(r), s !== void 0 ? Ms(Math.round(s * 255)) : ""].join("")}`;
}
function kv(e) {
  e = Tv(e);
  let [t, n, r, s] = rv(e, 2).map((i) => parseInt(i, 16));
  return s = s === void 0 ? s : s / 255, { r: t, g: n, b: r, a: s };
}
function Tv(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Wl(Wl(e, 6), 8, "F")), e;
}
function Pv(e, t) {
  const n = od(ga(e));
  return n[0] = n[0] + t * 10, ld(ad(n));
}
function Rv(e, t) {
  const n = od(ga(e));
  return n[0] = n[0] - t * 10, ld(ad(n));
}
function Iv(e) {
  const t = Bt(e);
  return ga(t)[1];
}
function ud(e) {
  const t = Math.abs(rc(Bt(0), Bt(e)));
  return Math.abs(rc(Bt(16777215), Bt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function ne(e, t) {
  return (n) => Object.keys(e).reduce((r, s) => {
    const o = typeof e[s] == "object" && e[s] != null && !Array.isArray(e[s]) ? e[s] : { type: e[s] };
    return n && s in n ? r[s] = { ...o, default: n[s] } : r[s] = o, t && !r[s].source && (r[s].source = t), r;
  }, {});
}
const qe = ne({ class: [String, Array, Object], style: { type: [String, Array, Object], default: null } }, "component");
function Ze(e, t) {
  const n = cs();
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
const or = Symbol.for("vuetify:defaults");
function Vv(e) {
  return X(e);
}
function va() {
  const e = Me(or);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pa(e, t) {
  const n = va(), r = X(e), s = H(() => {
    if (oe(t == null ? void 0 : t.disabled)) return n.value;
    const o = oe(t == null ? void 0 : t.scoped), a = oe(t == null ? void 0 : t.reset), l = oe(t == null ? void 0 : t.root);
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
  return rt(or, s), s;
}
function Dv(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Pn(t)] < "u");
}
function Hv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : va();
  const r = Ze("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
  const s = H(() => {
    var _a2;
    return (_a2 = n.value) == null ? void 0 : _a2[e._as ?? t];
  }), i = new Proxy(e, { get(l, u) {
    var _a2, _b2, _c2, _d2;
    const c = Reflect.get(l, u);
    if (u === "class" || u === "style") return [(_a2 = s.value) == null ? void 0 : _a2[u], c].filter((m) => m != null);
    if (Dv(r.vnode, u)) return c;
    const f = (_b2 = s.value) == null ? void 0 : _b2[u];
    if (f !== void 0) return f;
    const d = (_d2 = (_c2 = n.value) == null ? void 0 : _c2.global) == null ? void 0 : _d2[u];
    return d !== void 0 ? d : c;
  } }), o = ve();
  gn(() => {
    if (s.value) {
      const l = Object.entries(s.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = l.length ? Object.fromEntries(l) : void 0;
    } else o.value = void 0;
  });
  function a() {
    const l = Ov(or, r);
    rt(or, H(() => o.value ? pt((l == null ? void 0 : l.value) ?? {}, o.value) : l == null ? void 0 : l.value));
  }
  return { props: i, provideSubDefaults: a };
}
function mr(e) {
  if (e._setup = e._setup ?? e.setup, !e.name) return e;
  if (e._setup) {
    e.props = ne(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return tv(r, t);
    }, e.props._as = String, e.setup = function(r, s) {
      const i = va();
      if (!i.value) return e._setup(r, s);
      const { props: o, provideSubDefaults: a } = Hv(r, r._as ?? e.name, i), l = e._setup(o, s);
      return a(), l;
    };
  }
  return e;
}
function Pe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  return (t) => (e ? mr : Ye)(t);
}
function Nv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Pe()({ name: n ?? ur(_t(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...qe() }, setup(r, s) {
    let { slots: i } = s;
    return () => {
      var _a2;
      return vn(r.tag, { class: [e, r.class], style: r.style }, (_a2 = i.default) == null ? void 0 : _a2.call(i));
    };
  } });
}
function Fv(e, t, n, r) {
  if (!n || ir(e) || ir(t)) return;
  const s = n.get(e);
  if (s) s.set(t, r);
  else {
    const i = /* @__PURE__ */ new WeakMap();
    i.set(t, r), n.set(e, i);
  }
}
function $v(e, t, n) {
  var _a2, _b2;
  if (!n || ir(e) || ir(t)) return null;
  const r = (_a2 = n.get(e)) == null ? void 0 : _a2.get(t);
  if (typeof r == "boolean") return r;
  const s = (_b2 = n.get(t)) == null ? void 0 : _b2.get(e);
  return typeof s == "boolean" ? s : null;
}
function Xn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return true;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return false;
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return false;
  const s = $v(e, t, n);
  return s || (Fv(e, t, n, true), r.every((i) => Xn(e[i], t[i], n)));
}
function fd(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: true }) !== document ? null : t;
}
const So = "cubic-bezier(0.4, 0, 0.2, 1)", oc = "cubic-bezier(0.0, 0, 0.2, 1)", ac = "cubic-bezier(0.4, 0, 1, 1)", Bv = { linear: (e) => e, easeInQuad: (e) => e ** 2, easeOutQuad: (e) => e * (2 - e), easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, easeInCubic: (e) => e ** 3, easeOutCubic: (e) => --e ** 3 + 1, easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, easeInQuart: (e) => e ** 4, easeOutQuart: (e) => 1 - --e ** 4, easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4, easeInQuint: (e) => e ** 5, easeOutQuint: (e) => 1 + --e ** 5, easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, instant: (e) => 1 };
function jv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  for (; e; ) {
    if (t ? Wv(e) : ya(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ys(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (ya(e) && n.push(e), e !== t); ) e = e.parentElement;
  return n;
}
function ya(e) {
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
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { leading: true, trailing: true }, r = 0, s = 0, i = false, o = 0;
  function a() {
    clearTimeout(r), i = false, o = 0;
  }
  const l = function() {
    for (var u = arguments.length, c = new Array(u), f = 0; f < u; f++) c[f] = arguments[f];
    clearTimeout(r);
    const d = Date.now();
    o || (o = d);
    const m = d - Math.max(o, s);
    function b() {
      s = Date.now(), r = setTimeout(a, t), e(...c);
    }
    i ? m >= t ? b() : n.trailing && (r = setTimeout(b, t - m)) : (i = true, n.leading && b());
  };
  return l.clear = a, l.immediate = e, l;
}
const hs = ne({ border: [Boolean, Number, String] }, "border");
function gs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { borderClasses: H(() => {
    const r = e.border;
    return r === true || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((s) => `border-${s}`) : [];
  }) };
}
const Uv = [null, "default", "comfortable", "compact"], vs = ne({ density: { type: String, default: "default", validator: (e) => Uv.includes(e) } }, "density");
function ps(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { densityClasses: B(() => `${t}--density-${e.density}`) };
}
const pi = ne({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function yi(e) {
  return { elevationClasses: B(() => {
    const n = Ve(e) ? e.value : e.elevation;
    return n == null ? [] : [`elevation-${n}`];
  }) };
}
const hr = ne({ rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean }, "rounded");
function gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return { roundedClasses: H(() => {
    const r = Ve(e) ? e.value : e.rounded, s = Ve(e) ? false : e.tile, i = [];
    if (s || r === false) i.push("rounded-0");
    else if (r === true || r === "") i.push(`${t}--rounded`);
    else if (typeof r == "string" || r === 0) for (const o of String(r).split(" ")) i.push(`rounded-${o}`);
    return i;
  }) };
}
const Rt = ne({ tag: { type: [String, Object, Function], default: "div" } }, "tag"), Xr = Symbol.for("vuetify:theme"), Gt = ne({ theme: String }, "theme");
function lc() {
  return { defaultTheme: "light", prefix: "v-", variations: { colors: [], lighten: 0, darken: 0 }, themes: { light: { dark: false, colors: { background: "#FFFFFF", surface: "#FFFFFF", "surface-bright": "#FFFFFF", "surface-light": "#EEEEEE", "surface-variant": "#424242", "on-surface-variant": "#EEEEEE", primary: "#1867C0", "primary-darken-1": "#1F5592", secondary: "#48A9A6", "secondary-darken-1": "#018786", error: "#B00020", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#000000", "border-opacity": 0.12, "high-emphasis-opacity": 0.87, "medium-emphasis-opacity": 0.6, "disabled-opacity": 0.38, "idle-opacity": 0.04, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.12, "dragged-opacity": 0.08, "theme-kbd": "#EEEEEE", "theme-on-kbd": "#000000", "theme-code": "#F5F5F5", "theme-on-code": "#000000" } }, dark: { dark: true, colors: { background: "#121212", surface: "#212121", "surface-bright": "#ccbfd6", "surface-light": "#424242", "surface-variant": "#c8c8c8", "on-surface-variant": "#000000", primary: "#2196F3", "primary-darken-1": "#277CC1", secondary: "#54B6B2", "secondary-darken-1": "#48A9A6", error: "#CF6679", info: "#2196F3", success: "#4CAF50", warning: "#FB8C00" }, variables: { "border-color": "#FFFFFF", "border-opacity": 0.12, "high-emphasis-opacity": 1, "medium-emphasis-opacity": 0.7, "disabled-opacity": 0.5, "idle-opacity": 0.1, "hover-opacity": 0.04, "focus-opacity": 0.12, "selected-opacity": 0.08, "activated-opacity": 0.12, "pressed-opacity": 0.16, "dragged-opacity": 0.08, "theme-kbd": "#424242", "theme-on-kbd": "#FFFFFF", "theme-code": "#343434", "theme-on-code": "#CCCCCC" } } }, stylesheetId: "vuetify-theme-stylesheet", scoped: false, unimportant: false, utilities: true };
}
function Zv() {
  var _a2, _b2;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lc();
  const t = lc();
  if (!e) return { ...t, isDisabled: true };
  const n = {};
  for (const [r, s] of Object.entries(e.themes ?? {})) {
    const i = s.dark || r === "dark" ? (_a2 = t.themes) == null ? void 0 : _a2.dark : (_b2 = t.themes) == null ? void 0 : _b2.light;
    n[r] = pt(i, s);
  }
  return pt(t, { ...e, themes: n });
}
function Cn(e, t, n, r) {
  e.push(`${Xv(t, r)} {
`, ...n.map((s) => `  ${s};
`), `}
`);
}
function cc(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, s = [];
  for (const [i, o] of Object.entries(e.colors)) {
    const a = Bt(o);
    s.push(`--${t}theme-${i}: ${a.r},${a.g},${a.b}`), i.startsWith("on-") || s.push(`--${t}theme-${i}-overlay-multiplier: ${Iv(o) > 0.18 ? n : r}`);
  }
  for (const [i, o] of Object.entries(e.variables)) {
    const a = typeof o == "string" && o.startsWith("#") ? Bt(o) : void 0, l = a ? `${a.r}, ${a.g}, ${a.b}` : void 0;
    s.push(`--${t}${i}: ${l ?? o}`);
  }
  return s;
}
function Kv(e, t, n) {
  const r = {};
  if (n) for (const s of ["lighten", "darken"]) {
    const i = s === "lighten" ? Pv : Rv;
    for (const o of Jf(n[s], 1)) r[`${e}-${s}-${o}`] = Mv(i(Bt(t), o));
  }
  return r;
}
function Yv(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const s = e[r];
    s && (n = { ...n, ...Kv(r, s, t) });
  }
  return n;
}
function qv(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, s = Bt(e[n]);
    t[r] = ud(s);
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
  const t = Zv(e), n = ve(t.defaultTheme), r = X(t.themes), s = ve("light"), i = H({ get() {
    return n.value === "system" ? s.value : n.value;
  }, set(v) {
    n.value = v;
  } }), o = H(() => {
    const v = {};
    for (const [y, A] of Object.entries(r.value)) {
      const _ = { ...A.colors, ...Yv(A.colors, t.variations) };
      v[y] = { ...A, colors: { ..._, ...qv(_) } };
    }
    return v;
  }), a = B(() => o.value[i.value]), l = B(() => n.value === "system"), u = H(() => {
    var _a2;
    const v = [], y = t.unimportant ? "" : " !important", A = t.scoped ? t.prefix : "";
    ((_a2 = a.value) == null ? void 0 : _a2.dark) && Cn(v, ":root", ["color-scheme: dark"], t.scope), Cn(v, ":root", cc(a.value, t.prefix), t.scope);
    for (const [x, E] of Object.entries(o.value)) Cn(v, `.${t.prefix}theme--${x}`, [`color-scheme: ${E.dark ? "dark" : "normal"}`, ...cc(E, t.prefix)], t.scope);
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
  }), c = B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${i.value}`), f = B(() => Object.keys(o.value));
  if (Yf) {
    let y = function() {
      s.value = v.matches ? "dark" : "light";
    };
    const v = window.matchMedia("(prefers-color-scheme: dark)");
    y(), v.addEventListener("change", y, { passive: true }), gu() && ct(() => {
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
        Jv(t.stylesheetId, t.cspNonce, u.value);
      };
      Ie ? le(u, A, { immediate: true }) : A();
    }
  }
  function m(v) {
    v !== "system" && !f.value.includes(v) || (i.value = v);
  }
  function b() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    const y = v.indexOf(i.value), A = y === -1 ? 0 : (y + 1) % v.length;
    m(v[A]);
  }
  function g() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    b(v);
  }
  const S = new Proxy(i, { get(v, y) {
    return Reflect.get(v, y);
  }, set(v, y, A) {
    return y === "value" && Kf(`theme.global.name.value = ${A}`, `theme.change('${A}')`), Reflect.set(v, y, A);
  } });
  return { install: d, change: m, cycle: b, toggle: g, isDisabled: t.isDisabled, isSystem: l, name: i, themes: r, current: a, computedThemes: o, prefix: t.prefix, themeClasses: c, styles: u, global: { name: S, current: a } };
}
function sn(e) {
  Ze("provideTheme");
  const t = Me(Xr, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = B(() => e.theme ?? t.name.value), i = { ...t, name: n, current: B(() => t.themes.value[n.value]), themeClasses: B(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`) };
  return rt(Xr, i), i;
}
function tp() {
  Ze("useTheme");
  const e = Me(Xr, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function ba(e) {
  return ha(() => {
    const { class: t, style: n } = rp(e);
    return { colorClasses: t, colorStyles: n };
  });
}
function Jr(e) {
  const { colorClasses: t, colorStyles: n } = ba(() => ({ text: nt(e) }));
  return { textColorClasses: t, textColorStyles: n };
}
function _a(e) {
  const { colorClasses: t, colorStyles: n } = ba(() => ({ background: nt(e) }));
  return { backgroundColorClasses: t, backgroundColorStyles: n };
}
function np(e) {
  return { text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text, background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background };
}
function rp(e) {
  const t = np(nt(e)), n = [], r = {};
  if (t.background) if (wo(t.background)) {
    if (r.backgroundColor = t.background, !t.text && Lv(t.background)) {
      const s = Bt(t.background);
      if (s.a == null || s.a === 1) {
        const i = ud(s);
        r.color = i, r.caretColor = i;
      }
    }
  } else n.push(`bg-${t.background}`);
  return t.text && (wo(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), { class: n, style: r };
}
const sp = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function wa(e, t) {
  return k(_e, null, [e && k("span", { key: "overlay", class: Le(`${t}__overlay`) }, null), k("span", { key: "underlay", class: Le(`${t}__underlay`) }, null)]);
}
const ys = ne({ color: String, variant: { type: String, default: "elevated", validator: (e) => sp.includes(e) } }, "variant");
function Sa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = B(() => {
    const { variant: i } = nt(e);
    return `${t}--variant-${i}`;
  }), { colorClasses: r, colorStyles: s } = ba(() => {
    const { variant: i, color: o } = nt(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: o };
  });
  return { colorClasses: r, colorStyles: s, variantClasses: n };
}
const dd = ne({ baseColor: String, divided: Boolean, direction: { type: String, default: "horizontal" }, ...hs(), ...qe(), ...vs(), ...pi(), ...hr(), ...Rt(), ...Gt(), ...ys() }, "VBtnGroup"), uc = Pe()({ name: "VBtnGroup", props: dd(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = sn(e), { densityClasses: s } = ps(e), { borderClasses: i } = gs(e), { elevationClasses: o } = yi(e), { roundedClasses: a } = gr(e);
  pa({ VBtn: { height: B(() => e.direction === "horizontal" ? "auto" : null), baseColor: B(() => e.baseColor), color: B(() => e.color), density: B(() => e.density), flat: true, variant: B(() => e.variant) } }), ze(() => P(e.tag, { class: Le(["v-btn-group", `v-btn-group--${e.direction}`, { "v-btn-group--divided": e.divided }, r.value, i.value, s.value, o.value, a.value, e.class]), style: He(e.style) }, n));
} });
function bi(e, t) {
  let n;
  function r() {
    n = $r(), n.run(() => t.length ? t(() => {
      n == null ? void 0 : n.stop(), r();
    }) : t());
  }
  le(e, (s) => {
    s && !n ? r() : s || (n == null ? void 0 : n.stop(), n = void 0);
  }, { immediate: true }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Qt(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Ze("useProxiedModel"), o = X(e[t] !== void 0 ? e[t] : n), a = Pn(t), u = H(a !== t ? () => {
    var _a2, _b2, _c2, _d2;
    return e[t], !!((((_a2 = i.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) || ((_b2 = i.vnode.props) == null ? void 0 : _b2.hasOwnProperty(a))) && (((_c2 = i.vnode.props) == null ? void 0 : _c2.hasOwnProperty(`onUpdate:${t}`)) || ((_d2 = i.vnode.props) == null ? void 0 : _d2.hasOwnProperty(`onUpdate:${a}`))));
  } : () => {
    var _a2, _b2;
    return e[t], !!(((_a2 = i.vnode.props) == null ? void 0 : _a2.hasOwnProperty(t)) && ((_b2 = i.vnode.props) == null ? void 0 : _b2.hasOwnProperty(`onUpdate:${t}`)));
  });
  bi(() => !u.value, () => {
    le(() => e[t], (f) => {
      o.value = f;
    });
  });
  const c = H({ get() {
    const f = e[t];
    return r(u.value ? f : o.value);
  }, set(f) {
    const d = s(f), m = te(u.value ? e[t] : o.value);
    m === d || r(m) === f || (o.value = d, i == null ? void 0 : i.emit(`update:${t}`, d));
  } });
  return Object.defineProperty(c, "externalValue", { get: () => u.value ? e[t] : o.value }), c;
}
const ip = ne({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), op = ne({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function ap(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const r = Ze("useGroupItem");
  if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const s = os();
  rt(Symbol.for(`${t.description}:id`), s);
  const i = Me(t, null);
  if (!i) {
    if (!n) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = B(() => e.value), a = H(() => !!(i.disabled.value || e.disabled));
  function l() {
    i == null ? void 0 : i.register({ id: s, value: o, disabled: a }, r);
  }
  function u() {
    i == null ? void 0 : i.unregister(s);
  }
  l(), zt(() => u());
  const c = H(() => i.isSelected(s)), f = H(() => i.items.value[0].id === s), d = H(() => i.items.value[i.items.value.length - 1].id === s), m = H(() => c.value && [i.selectedClass.value, e.selectedClass]);
  return le(c, (b) => {
    r.emit("group:selected", { value: b });
  }, { flush: "sync" }), { id: s, isSelected: c, isFirst: f, isLast: d, toggle: () => i.select(s, !c.value), select: (b) => i.select(s, b), selectedClass: m, value: o, disabled: a, group: i, register: l, unregister: u };
}
function lp(e, t) {
  let n = false;
  const r = Ue([]), s = Qt(e, "modelValue", [], (d) => d === void 0 ? [] : md(r, d === null ? [null] : ma(d)), (d) => {
    const m = up(r, d);
    return e.multiple ? m : m[0];
  }), i = Ze("useGroup");
  function o(d, m) {
    const b = d, g = Symbol.for(`${t.description}:id`), v = jn(g, i == null ? void 0 : i.vnode).indexOf(m);
    oe(b.value) === void 0 && (b.value = v, b.useIndexAsValue = true), v > -1 ? r.splice(v, 0, b) : r.push(b);
  }
  function a(d) {
    if (n) return;
    l();
    const m = r.findIndex((b) => b.id === d);
    r.splice(m, 1);
  }
  function l() {
    const d = r.find((m) => !m.disabled);
    d && e.mandatory === "force" && !s.value.length && (s.value = [d.id]);
  }
  Wt(() => {
    l();
  }), zt(() => {
    n = true;
  }), Qo(() => {
    for (let d = 0; d < r.length; d++) r[d].useIndexAsValue && (r[d].value = d);
  });
  function u(d, m) {
    const b = r.find((g) => g.id === d);
    if (!(m && (b == null ? void 0 : b.disabled))) if (e.multiple) {
      const g = s.value.slice(), S = g.findIndex((y) => y === d), v = ~S;
      if (m = m ?? !v, v && e.mandatory && g.length <= 1 || !v && e.max != null && g.length + 1 > e.max) return;
      S < 0 && m ? g.push(d) : S >= 0 && !m && g.splice(S, 1), s.value = g;
    } else {
      const g = s.value.includes(d);
      if (e.mandatory && g || !g && !m) return;
      s.value = m ?? !g ? [d] : [];
    }
  }
  function c(d) {
    if (e.multiple, s.value.length) {
      const m = s.value[0], b = r.findIndex((v) => v.id === m);
      let g = (b + d) % r.length, S = r[g];
      for (; S.disabled && g !== b; ) g = (g + d) % r.length, S = r[g];
      if (S.disabled) return;
      s.value = [r[g].id];
    } else {
      const m = r.find((b) => !b.disabled);
      m && (s.value = [m.id]);
    }
  }
  const f = { register: o, unregister: a, selected: s, select: u, disabled: B(() => e.disabled), prev: () => c(r.length - 1), next: () => c(1), isSelected: (d) => s.value.includes(d), selectedClass: B(() => e.selectedClass), items: B(() => r), getItemIndex: (d) => cp(r, d) };
  return rt(t, f), f;
}
function cp(e, t) {
  const n = md(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function md(e, t) {
  const n = [];
  return t.forEach((r) => {
    const s = e.find((o) => Xn(r, o.value)), i = e[r];
    (s == null ? void 0 : s.value) !== void 0 ? n.push(s.id) : (i == null ? void 0 : i.useIndexAsValue) && n.push(i.id);
  }), n;
}
function up(e, t) {
  const n = [];
  return t.forEach((r) => {
    const s = e.findIndex((i) => i.id === r);
    if (~s) {
      const i = e[s];
      n.push(i.value !== void 0 ? i.value : s);
    }
  }), n;
}
const hd = Symbol.for("vuetify:v-btn-toggle"), fp = ne({ ...dd(), ...ip() }, "VBtnToggle"), dp = Pe()({ name: "VBtnToggle", props: fp(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: r, next: s, prev: i, select: o, selected: a } = lp(e, hd);
  return ze(() => {
    const l = uc.filterProps(e);
    return P(uc, Re({ class: ["v-btn-toggle", e.class] }, l, { style: e.style }), { default: () => {
      var _a2;
      return [(_a2 = n.default) == null ? void 0 : _a2.call(n, { isSelected: r, next: s, prev: i, select: o, selected: a })];
    } });
  }), { next: s, prev: i, select: o };
} }), mp = ne({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), mn = Pe(false)({ name: "VDefaultsProvider", props: mp(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: r, disabled: s, reset: i, root: o, scoped: a } = Iu(e);
  return pa(r, { reset: i, root: o, scoped: a, disabled: s }), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), yt = [String, Function, Object, Array], Co = Symbol.for("vuetify:icons"), _i = ne({ icon: { type: yt }, tag: { type: [String, Object, Function], required: true } }, "icon"), fc = Pe()({ name: "VComponentIcon", props: _i(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const r = e.icon;
    return P(e.tag, null, { default: () => {
      var _a2;
      return [e.icon ? P(r, null, null) : (_a2 = n.default) == null ? void 0 : _a2.call(n)];
    } });
  };
} }), Ca = mr({ name: "VSvgIcon", inheritAttrs: false, props: _i(), setup(e, t) {
  let { attrs: n } = t;
  return () => P(e.tag, Re(n, { style: null }), { default: () => [k("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? k("path", { d: r[0], "fill-opacity": r[1] }, null) : k("path", { d: r }, null)) : k("path", { d: e.icon }, null)])] });
} });
mr({ name: "VLigatureIcon", props: _i(), setup(e) {
  return () => P(e.tag, null, { default: () => [e.icon] });
} });
const gd = mr({ name: "VClassIcon", props: _i(), setup(e) {
  return () => P(e.tag, { class: Le(e.icon) }, null);
} }), hp = (e) => {
  const t = Me(Co);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return { iconData: H(() => {
    var _a2;
    const r = nt(e);
    if (!r) return { component: fc };
    let s = r;
    if (typeof s == "string" && (s = s.trim(), s.startsWith("$") && (s = (_a2 = t.aliases) == null ? void 0 : _a2[s.slice(1)])), Array.isArray(s)) return { component: Ca, icon: s };
    if (typeof s != "string") return { component: fc, icon: s };
    const i = Object.keys(t.sets).find((l) => typeof s == "string" && s.startsWith(`${l}:`)), o = i ? s.slice(i.length + 1) : s;
    return { component: t.sets[i ?? t.defaultSet].component, icon: o };
  }) };
}, gp = ["x-small", "small", "default", "large", "x-large"], wi = ne({ size: { type: [String, Number], default: "default" } }, "size");
function Si(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  return ha(() => {
    const n = e.size;
    let r, s;
    return Zs(gp, n) ? r = `${t}--size-${n}` : n && (s = { width: pe(n), height: pe(n) }), { sizeClasses: r, sizeStyles: s };
  });
}
const vp = ne({ color: String, disabled: Boolean, start: Boolean, end: Boolean, icon: yt, opacity: [String, Number], ...qe(), ...wi(), ...Rt({ tag: "i" }), ...Gt() }, "VIcon"), st = Pe()({ name: "VIcon", props: vp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const s = ve(), { themeClasses: i } = tp(), { iconData: o } = hp(() => s.value || e.icon), { sizeClasses: a } = Si(e), { textColorClasses: l, textColorStyles: u } = Jr(() => e.color);
  return ze(() => {
    var _a2, _b2;
    const c = (_a2 = r.default) == null ? void 0 : _a2.call(r);
    c && (s.value = (_b2 = ed(c).filter((d) => d.type === ls && d.children && typeof d.children == "string")[0]) == null ? void 0 : _b2.children);
    const f = !!(n.onClick || n.onClickOnce);
    return P(o.value.component, { tag: e.tag, icon: o.value.icon, class: Le(["v-icon", "notranslate", i.value, a.value, l.value, { "v-icon--clickable": f, "v-icon--disabled": e.disabled, "v-icon--start": e.start, "v-icon--end": e.end }, e.class]), style: He([{ "--v-icon-opacity": e.opacity }, a.value ? void 0 : { fontSize: pe(e.size), height: pe(e.size), width: pe(e.size) }, u.value, e.style]), role: f ? "button" : void 0, "aria-hidden": !f, tabindex: f ? e.disabled ? -1 : 0 : void 0 }, { default: () => [c] });
  }), {};
} });
function pp(e, t) {
  const n = X(), r = ve(false);
  if (da) {
    const s = new IntersectionObserver((i) => {
      r.value = !!i.find((o) => o.isIntersecting);
    }, t);
    ct(() => {
      s.disconnect();
    }), le(n, (i, o) => {
      o && (s.unobserve(o), r.value = false), i && s.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: r };
}
function vd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = bo(), r = X();
  if (Ie) {
    const s = new ResizeObserver((i) => {
      i.length && (t === "content" ? r.value = i[0].contentRect : r.value = i[0].target.getBoundingClientRect());
    });
    zt(() => {
      s.disconnect();
    }), le(() => n.el, (i, o) => {
      o && (s.unobserve(o), r.value = void 0), i && s.observe(i);
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: Jn(r) };
}
const yp = ne({ reveal: { type: [Boolean, Object], default: false } }, "reveal");
function bp(e) {
  const n = B(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = ve(e.reveal ? "initial" : "disabled");
  return Wt(async () => {
    e.reveal && (r.value = "initial", await new Promise((s) => requestAnimationFrame(s)), r.value = "pending", await new Promise((s) => setTimeout(s, n.value)), r.value = "done");
  }), { duration: n, state: r };
}
const _p = ne({ bgColor: String, color: String, indeterminate: [Boolean, String], rounded: Boolean, modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...qe(), ...yp(), ...wi(), ...Rt({ tag: "div" }), ...Gt() }, "VProgressCircular"), wp = Pe()({ name: "VProgressCircular", props: _p(), setup(e, t) {
  let { slots: n } = t;
  const r = 20, s = 2 * Math.PI * r, i = X(), { themeClasses: o } = sn(e), { sizeClasses: a, sizeStyles: l } = Si(e), { textColorClasses: u, textColorStyles: c } = Jr(() => e.color), { textColorClasses: f, textColorStyles: d } = Jr(() => e.bgColor), { intersectionRef: m, isIntersecting: b } = pp(), { resizeRef: g, contentRect: S } = vd(), { state: v, duration: y } = bp(e), A = B(() => v.value === "initial" ? 0 : Us(parseFloat(e.modelValue), 0, 100)), _ = B(() => Number(e.width)), x = B(() => l.value ? Number(e.size) : S.value ? S.value.width : Math.max(_.value, 32)), E = B(() => r / (1 - _.value / x.value) * 2), T = B(() => _.value / x.value * E.value), w = B(() => {
    const R = (100 - A.value) / 100 * s;
    return e.rounded && A.value > 0 && A.value < 100 ? pe(Math.min(s - 0.01, R + T.value)) : pe(R);
  }), D = H(() => {
    const R = Number(e.rotate);
    return e.rounded ? R + T.value / 2 / s * 360 : R;
  });
  return gn(() => {
    m.value = i.value, g.value = i.value;
  }), ze(() => P(e.tag, { ref: i, class: Le(["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": b.value, "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || Gs()), "v-progress-circular--revealing": ["initial", "pending"].includes(v.value) }, o.value, a.value, u.value, e.class]), style: He([l.value, c.value, { "--progress-reveal-duration": `${y.value}ms` }, e.style]), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : A.value }, { default: () => [k("svg", { style: { transform: `rotate(calc(-90deg + ${D.value}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${E.value} ${E.value}` }, [k("circle", { class: Le(["v-progress-circular__underlay", f.value]), style: He(d.value), fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": s, "stroke-dashoffset": 0 }, null), k("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r, "stroke-width": T.value, "stroke-dasharray": s, "stroke-dashoffset": w.value, "stroke-linecap": e.rounded ? "round" : void 0 }, null)]), n.default && k("div", { class: "v-progress-circular__content" }, [n.default({ value: A.value })])] })), {};
} }), vr = ne({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function pr(e) {
  return { dimensionStyles: H(() => {
    const n = {}, r = pe(e.height), s = pe(e.maxHeight), i = pe(e.maxWidth), o = pe(e.minHeight), a = pe(e.minWidth), l = pe(e.width);
    return r != null && (n.height = r), s != null && (n.maxHeight = s), i != null && (n.maxWidth = i), o != null && (n.minHeight = o), a != null && (n.minWidth = a), l != null && (n.width = l), n;
  }) };
}
const Sp = { badge: "Badge", open: "Open", close: "Close", dismiss: "Dismiss", confirmEdit: { ok: "OK", cancel: "Cancel" }, dataIterator: { noResultsText: "No matching records found", loadingText: "Loading items..." }, dataTable: { itemsPerPageText: "Rows per page:", ariaLabel: { sortDescending: "Sorted descending.", sortAscending: "Sorted ascending.", sortNone: "Not sorted.", activateNone: "Activate to remove sorting.", activateDescending: "Activate to sort descending.", activateAscending: "Activate to sort ascending." }, sortBy: "Sort by" }, dataFooter: { itemsPerPageText: "Items per page:", itemsPerPageAll: "All", nextPage: "Next page", prevPage: "Previous page", firstPage: "First page", lastPage: "Last page", pageText: "{0}-{1} of {2}" }, dateRangeInput: { divider: "to" }, datePicker: { itemsSelected: "{0} selected", range: { title: "Select dates", header: "Enter dates" }, title: "Select date", header: "Enter date", input: { placeholder: "Enter date" }, ariaLabel: { previousMonth: "Previous month", nextMonth: "Next month", selectYear: "Select year", previousYear: "Previous year", nextYear: "Next year", selectMonth: "Select month", selectDate: "{0}", currentDate: "Today, {0}" } }, noDataText: "No data available", carousel: { prev: "Previous visual", next: "Next visual", ariaLabel: { delimiter: "Carousel slide {0} of {1}" } }, calendar: { moreEvents: "{0} more", today: "Today" }, input: { clear: "Clear {0}", prependAction: "{0} prepended action", appendAction: "{0} appended action", otp: "Please enter OTP character {0}" }, fileInput: { counter: "{0} files", counterSize: "{0} files ({1} in total)" }, fileUpload: { title: "Drag and drop files here", divider: "or", browse: "Browse Files" }, timePicker: { am: "AM", pm: "PM", title: "Select Time", hour: "Hour", minute: "Minute", second: "Second", notAllowed: "Value is not allowed" }, pagination: { ariaLabel: { root: "Pagination Navigation", next: "Next page", previous: "Previous page", page: "Go to page {0}", currentPage: "Page {0}, Current page", first: "First page", last: "Last page" } }, stepper: { next: "Next", prev: "Previous" }, rating: { ariaLabel: { item: "Rating {0} of {1}" } }, loading: "Loading...", infiniteScroll: { loadMore: "Load more", empty: "No more" }, rules: { required: "This field is required", email: "Please enter a valid email", number: "This field can only contain numbers", integer: "This field can only contain integer values", capital: "This field can only contain uppercase letters", maxLength: "You must enter a maximum of {0} characters", minLength: "You must enter a minimum of {0} characters", strictLength: "The length of the entered field is invalid", exclude: "The {0} character is not allowed", notEmpty: "Please choose at least one value", pattern: "Invalid format" }, command: { search: "Type a command or search..." }, hotkey: { then: "then", ctrl: "Ctrl", command: "Command", space: "Space", shift: "Shift", alt: "Alt", enter: "Enter", escape: "Escape", upArrow: "Up Arrow", downArrow: "Down Arrow", leftArrow: "Left Arrow", rightArrow: "Right Arrow", backspace: "Backspace", option: "Option", plus: "plus", shortcut: "Keyboard shortcut: {0}", or: "or" }, video: { play: "Play", pause: "Pause", seek: "Seek", volume: "Volume", showVolume: "Show volume control", mute: "Mute", unmute: "Unmute", enterFullscreen: "Full screen", exitFullscreen: "Exit full screen" }, colorPicker: { ariaLabel: { eyedropper: "Select color with eyedropper", hueSlider: "Hue", alphaSlider: "Alpha", redInput: "Red value", greenInput: "Green value", blueInput: "Blue value", alphaInput: "Alpha value", hueInput: "Hue value", saturationInput: "Saturation value", lightnessInput: "Lightness value", hexInput: "HEX value", hexaInput: "HEX with alpha value", changeFormat: "Change color format" } } }, dc = "$vuetify.", mc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), pd = (e, t, n) => function(r) {
  for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) i[o - 1] = arguments[o];
  if (!r.startsWith(dc)) return mc(r, i);
  const a = r.replace(dc, ""), l = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = po(l, a, null);
  return c || (`${r}${e.value}`, c = po(u, a, null)), c || (c = r), typeof c != "string" && (c = r), mc(c, i);
};
function xa(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function yd(e, t) {
  return xa(e, t)(0.1).includes(",") ? "," : ".";
}
function Ui(e, t, n) {
  const r = Qt(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, le(n, (s) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function bd(e) {
  return (t) => {
    const n = Ui(t, "locale", e.current), r = Ui(t, "fallback", e.fallback), s = Ui(t, "messages", e.messages);
    return { name: "vuetify", current: n, fallback: r, messages: s, decimalSeparator: B(() => yd(n, r)), t: pd(n, r, s), n: xa(n, r), provide: bd({ current: n, fallback: r, messages: s }) };
  };
}
function Cp(e) {
  const t = ve((e == null ? void 0 : e.locale) ?? "en"), n = ve((e == null ? void 0 : e.fallback) ?? "en"), r = X({ en: Sp, ...e == null ? void 0 : e.messages });
  return { name: "vuetify", current: t, fallback: n, messages: r, decimalSeparator: B(() => (e == null ? void 0 : e.decimalSeparator) ?? yd(t, n)), t: pd(t, n, r), n: xa(t, n), provide: bd({ current: t, fallback: n, messages: r }) };
}
const xo = Symbol.for("vuetify:locale");
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
  const n = X((t == null ? void 0 : t.rtl) ?? Lp()), r = H(() => n.value[e.current.value] ?? false);
  return { isRtl: r, rtl: n, rtlClasses: B(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`) };
}
function bs() {
  const e = Me(xo);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const hc = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Mp = ne({ location: String }, "location");
function kp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: r } = bs();
  return { locationStyles: H(() => {
    if (!e.location) return {};
    const { side: i, align: o } = _o(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
    function a(u) {
      return n ? n(u) : 0;
    }
    const l = {};
    return i !== "center" && (t ? l[hc[i]] = `calc(100% - ${a(i)}px)` : l[i] = 0), o !== "center" ? t ? l[hc[o]] = `calc(100% - ${a(o)}px)` : l[o] = 0 : (i === "center" ? l.top = l.left = "50%" : l[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", l.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), l;
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
  return H(() => {
    var _a2;
    return (_a2 = e == null ? void 0 : e.proxy) == null ? void 0 : _a2.$route;
  });
}
function Dp() {
  var _a2, _b2;
  return (_b2 = (_a2 = Ze("useRouter")) == null ? void 0 : _a2.proxy) == null ? void 0 : _b2.$router;
}
function _d(e, t) {
  const n = ph("RouterLink"), r = B(() => !!(e.href || e.to)), s = H(() => (r == null ? void 0 : r.value) || Gl(t, "click") || Gl(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = B(() => e.href);
    return { isLink: r, isRouterLink: B(() => false), isClickable: s, href: f, linkProps: Ue({ href: f }), route: B(() => {
    }), navigate: B(() => {
    }) };
  }
  const i = n.useLink({ to: B(() => e.to || ""), replace: B(() => e.replace) }), o = H(() => e.to ? i : void 0), a = Vp(), l = H(() => {
    var _a2, _b2, _c2;
    return o.value ? e.exact ? a.value ? ((_a2 = o.value.isExactActive) == null ? void 0 : _a2.value) && Xn(o.value.route.value.query, a.value.query) : ((_b2 = o.value.isExactActive) == null ? void 0 : _b2.value) ?? false : ((_c2 = o.value.isActive) == null ? void 0 : _c2.value) ?? false : false;
  }), u = H(() => {
    var _a2;
    return e.to ? (_a2 = o.value) == null ? void 0 : _a2.route.value.href : e.href;
  });
  return { isLink: r, isRouterLink: B(() => !!e.to), isClickable: s, isActive: l, route: B(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.route.value;
  }), navigate: B(() => {
    var _a2;
    return (_a2 = o.value) == null ? void 0 : _a2.navigate;
  }), href: u, linkProps: Ue({ href: u, "aria-current": B(() => l.value ? "page" : void 0), "aria-disabled": B(() => e.disabled && r.value ? "true" : void 0), tabindex: B(() => e.disabled && r.value ? "-1" : void 0) }) };
}
const wd = ne({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Zi = false;
function Hp(e, t) {
  let n = false, r, s;
  Ie && (e == null ? void 0 : e.beforeEach) && (dt(() => {
    window.addEventListener("popstate", i), r = e.beforeEach((o, a, l) => {
      Zi ? n ? t(l) : l() : setTimeout(() => n ? t(l) : l()), Zi = true;
    }), s = e == null ? void 0 : e.afterEach(() => {
      Zi = false;
    });
  }), ct(() => {
    window.removeEventListener("popstate", i), r == null ? void 0 : r(), s == null ? void 0 : s();
  }));
  function i(o) {
    var _a2;
    ((_a2 = o.state) == null ? void 0 : _a2.replaced) || (n = true, setTimeout(() => n = false));
  }
}
function Np(e, t) {
  le(() => {
    var _a2;
    return (_a2 = e.isActive) == null ? void 0 : _a2.value;
  }, (n) => {
    e.isLink.value && n != null && t && dt(() => {
      t(n);
    });
  }, { immediate: true });
}
const Ao = Symbol("rippleStop"), Fp = 80;
function gc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Lo(e) {
  return e.constructor.name === "TouchEvent";
}
function Sd(e) {
  return e.constructor.name === "KeyboardEvent";
}
const $p = function(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, s = 0;
  if (!Sd(e)) {
    const f = t.getBoundingClientRect(), d = Lo(e) ? e.touches[e.touches.length - 1] : e;
    r = d.clientX - f.left, s = d.clientY - f.top;
  }
  let i = 0, o = 0.3;
  ((_a2 = t._ripple) == null ? void 0 : _a2.circle) ? (o = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((r - i) ** 2 + (s - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const a = `${(t.clientWidth - i * 2) / 2}px`, l = `${(t.clientHeight - i * 2) / 2}px`, u = n.center ? a : `${r - i}px`, c = n.center ? l : `${s - i}px`;
  return { radius: i, scale: o, x: u, y: c, centerX: a, centerY: l };
}, qs = { show(e, t) {
  var _a2;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((_a2 = t == null ? void 0 : t._ripple) == null ? void 0 : _a2.enabled)) return;
  const r = document.createElement("span"), s = document.createElement("span");
  r.appendChild(s), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
  const { radius: i, scale: o, x: a, y: l, centerX: u, centerY: c } = $p(e, t, n), f = `${i * 2}px`;
  s.className = "v-ripple__animation", s.style.width = f, s.style.height = f, t.appendChild(r);
  const d = window.getComputedStyle(t);
  d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), s.classList.add("v-ripple__animation--enter"), s.classList.add("v-ripple__animation--visible"), gc(s, `translate(${a}, ${l}) scale3d(${o},${o},${o})`), s.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      s.classList.remove("v-ripple__animation--enter"), s.classList.add("v-ripple__animation--in"), gc(s, `translate(${u}, ${c}) scale3d(1,1,1)`);
    });
  });
}, hide(e) {
  var _a2;
  if (!((_a2 = e == null ? void 0 : e._ripple) == null ? void 0 : _a2.enabled)) return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0) return;
  const n = Array.from(t).findLast((i) => !i.dataset.isHiding);
  if (n) n.dataset.isHiding = "true";
  else return;
  const r = performance.now() - Number(n.dataset.activated), s = Math.max(250 - r, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var _a3;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((_a3 = n.parentNode) == null ? void 0 : _a3.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, s);
} };
function Cd(e) {
  return typeof e > "u" || !!e;
}
function Qr(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n == null ? void 0 : n._ripple) || n._ripple.touched || e[Ao])) {
    if (e[Ao] = true, Lo(e)) n._ripple.touched = true, n._ripple.isTouch = true;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Sd(e), n._ripple.class && (t.class = n._ripple.class), Lo(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        qs.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var _a2;
        ((_a2 = n == null ? void 0 : n._ripple) == null ? void 0 : _a2.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, Fp);
    } else qs.show(e, n, t);
  }
}
function Xs(e) {
  e[Ao] = true;
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
    }), qs.hide(t);
  }
}
function xd(e) {
  const t = e.currentTarget;
  (t == null ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let es = false;
function Bp(e, t) {
  !es && t.includes(e.key) && (es = true, Qr(e));
}
function Ad(e) {
  es = false, gt(e);
}
function Ld(e) {
  es && (es = false, gt(e));
}
function Ed(e, t, n) {
  const { value: r, modifiers: s } = t, i = Cd(r);
  i || qs.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = s.center, e._ripple.circle = s.circle;
  const o = yo(r) ? r : {};
  o.class && (e._ripple.class = o.class);
  const a = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (l) => Bp(l, a), i && !n) {
    if (s.stop) {
      e.addEventListener("touchstart", Xs, { passive: true }), e.addEventListener("mousedown", Xs);
      return;
    }
    e.addEventListener("touchstart", Qr, { passive: true }), e.addEventListener("touchend", gt, { passive: true }), e.addEventListener("touchmove", xd, { passive: true }), e.addEventListener("touchcancel", gt), e.addEventListener("mousedown", Qr), e.addEventListener("mouseup", gt), e.addEventListener("mouseleave", gt), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Ad), e.addEventListener("blur", Ld), e.addEventListener("dragstart", gt, { passive: true });
  } else !i && n && Md(e);
}
function Md(e) {
  var _a2;
  e.removeEventListener("touchstart", Xs), e.removeEventListener("mousedown", Xs), e.removeEventListener("touchstart", Qr), e.removeEventListener("touchend", gt), e.removeEventListener("touchmove", xd), e.removeEventListener("touchcancel", gt), e.removeEventListener("mousedown", Qr), e.removeEventListener("mouseup", gt), e.removeEventListener("mouseleave", gt), ((_a2 = e._ripple) == null ? void 0 : _a2.keyDownHandler) && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Ad), e.removeEventListener("blur", Ld), e.removeEventListener("dragstart", gt);
}
function jp(e, t) {
  Ed(e, t, false);
}
function Wp(e) {
  Md(e), delete e._ripple;
}
function zp(e, t) {
  if (t.value === t.oldValue) return;
  const n = Cd(t.oldValue);
  Ed(e, t, n);
}
const Eo = { mounted: jp, unmounted: Wp, updated: zp }, Gp = ne({ active: { type: Boolean, default: void 0 }, activeColor: String, baseColor: String, symbol: { type: null, default: hd }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: yt, appendIcon: yt, block: Boolean, readonly: Boolean, slim: Boolean, stacked: Boolean, spaced: String, ripple: { type: [Boolean, Object], default: true }, text: { type: [String, Number, Boolean], default: void 0 }, ...hs(), ...qe(), ...vs(), ...vr(), ...pi(), ...op(), ...Tp(), ...Mp(), ...Ip(), ...hr(), ...wd(), ...wi(), ...Rt({ tag: "button" }), ...Gt(), ...ys({ variant: "elevated" }) }, "VBtn"), Is = Pe()({ name: "VBtn", props: Gp(), emits: { "group:selected": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: s } = sn(e), { borderClasses: i } = gs(e), { densityClasses: o } = ps(e), { dimensionStyles: a } = pr(e), { elevationClasses: l } = yi(e), { loaderClasses: u } = Pp(e), { locationStyles: c } = kp(e), { positionClasses: f } = Op(e), { roundedClasses: d } = gr(e), { sizeClasses: m, sizeStyles: b } = Si(e), g = ap(e, e.symbol, false), S = _d(e, n), v = H(() => {
    var _a2;
    return e.active !== void 0 ? e.active : S.isRouterLink.value ? (_a2 = S.isActive) == null ? void 0 : _a2.value : g == null ? void 0 : g.isSelected.value;
  }), y = B(() => v.value ? e.activeColor ?? e.color : e.color), A = H(() => {
    var _a2, _b2;
    return { color: (g == null ? void 0 : g.isSelected.value) && (!S.isLink.value || ((_a2 = S.isActive) == null ? void 0 : _a2.value)) || !g || ((_b2 = S.isActive) == null ? void 0 : _b2.value) ? y.value ?? e.baseColor : e.baseColor, variant: e.variant };
  }), { colorClasses: _, colorStyles: x, variantClasses: E } = Sa(A), T = H(() => (g == null ? void 0 : g.disabled.value) || e.disabled), w = B(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), D = H(() => {
    if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function R(N) {
    var _a2, _b2;
    T.value || S.isLink.value && (N.metaKey || N.ctrlKey || N.shiftKey || N.button !== 0 || n.target === "_blank") || (S.isRouterLink.value ? (_b2 = (_a2 = S.navigate).value) == null ? void 0 : _b2.call(_a2, N) : g == null ? void 0 : g.toggle());
  }
  return Np(S, g == null ? void 0 : g.select), ze(() => {
    const N = S.isLink.value ? "a" : e.tag, M = !!(e.prependIcon || r.prepend), $ = !!(e.appendIcon || r.append), Y = !!(e.icon && e.icon !== true);
    return er(P(N, Re(S.linkProps, { type: N === "a" ? void 0 : "button", class: ["v-btn", g == null ? void 0 : g.selectedClass.value, { "v-btn--active": v.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": w.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--readonly": e.readonly, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], s.value, i.value, _.value, o.value, l.value, u.value, f.value, d.value, m.value, E.value, e.class], style: [x.value, a.value, c.value, b.value, e.style], "aria-busy": e.loading ? true : void 0, disabled: T.value && N !== "a" || void 0, tabindex: e.loading || e.readonly ? -1 : void 0, onClick: R, value: D.value }), { default: () => {
      var _a2;
      return [wa(true, "v-btn"), !e.icon && M && k("span", { key: "prepend", class: "v-btn__prepend" }, [r.prepend ? P(mn, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, r.prepend) : P(st, { key: "prepend-icon", icon: e.prependIcon }, null)]), k("span", { class: "v-btn__content", "data-no-activator": "" }, [!r.default && Y ? P(st, { key: "content-icon", icon: e.icon }, null) : P(mn, { key: "content-defaults", disabled: !Y, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var _a3;
        return [((_a3 = r.default) == null ? void 0 : _a3.call(r)) ?? ye(e.text)];
      } })]), !e.icon && $ && k("span", { key: "append", class: "v-btn__append" }, [r.append ? P(mn, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, r.append) : P(st, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && k("span", { key: "loader", class: "v-btn__loader" }, [((_a2 = r.loader) == null ? void 0 : _a2.call(r)) ?? P(wp, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: true, width: "2" }, null)])];
    } }), [[Eo, !T.value && e.ripple, "", { center: !!e.icon }]]);
  }), { group: g };
} }), Up = ["dotted", "dashed", "solid", "double"], Zp = ne({ color: String, contentOffset: [Number, String, Array], gradient: Boolean, inset: Boolean, length: [Number, String], opacity: [Number, String], thickness: [Number, String], vertical: Boolean, variant: { type: String, default: "solid", validator: (e) => Up.includes(e) }, ...qe(), ...Gt() }, "VDivider"), Kp = Pe()({ name: "VDivider", props: Zp(), setup(e, t) {
  let { attrs: n, slots: r } = t;
  const { themeClasses: s } = sn(e), { textColorClasses: i, textColorStyles: o } = Jr(() => e.color), a = H(() => {
    const u = {};
    return e.length && (u[e.vertical ? "height" : "width"] = pe(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = pe(e.thickness)), u;
  }), l = B(() => {
    const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
    return { marginBlock: e.vertical && u ? pe(u) : void 0, marginInline: !e.vertical && u ? pe(u) : void 0, transform: c ? `translate${e.vertical ? "X" : "Y"}(${pe(c)})` : void 0 };
  });
  return ze(() => {
    const u = k("hr", { class: Le([{ "v-divider": true, "v-divider--gradient": e.gradient && !r.default, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, s.value, i.value, e.class]), style: He([a.value, o.value, { "--v-border-opacity": e.opacity }, { "border-style": e.variant }, e.style]), "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0, role: `${n.role || "separator"}` }, null);
    return r.default ? k("div", { class: Le(["v-divider__wrapper", { "v-divider__wrapper--gradient": e.gradient, "v-divider__wrapper--inset": e.inset, "v-divider__wrapper--vertical": e.vertical }]) }, [u, k("div", { class: "v-divider__content", style: He(l.value) }, [r.default()]), u]) : u;
  }), {};
} }), Yp = ne({ fluid: { type: Boolean, default: false }, ...qe(), ...vr(), ...Rt() }, "VContainer"), _s = Pe()({ name: "VContainer", props: Yp(), setup(e, t) {
  let { slots: n } = t;
  const { rtlClasses: r } = bs(), { dimensionStyles: s } = pr(e);
  return ze(() => P(e.tag, { class: Le(["v-container", { "v-container--fluid": e.fluid }, r.value, e.class]), style: He([s.value, e.style]) }, n)), {};
} }), Mo = Symbol.for("vuetify:display"), vc = { mobileBreakpoint: "lg", thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 } }, qp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vc;
  return pt(vc, e);
};
function pc(e) {
  return Ie && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function yc(e) {
  return Ie && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function bc(e) {
  const t = Ie && !e ? window.navigator.userAgent : "ssr";
  function n(b) {
    return !!t.match(b);
  }
  const r = n(/android/i), s = n(/iphone|ipad|ipod/i), i = n(/cordova/i), o = n(/electron/i), a = n(/chrome/i), l = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), m = n(/linux/i);
  return { android: r, ios: s, cordova: i, electron: o, chrome: a, edge: l, firefox: u, opera: c, win: f, mac: d, linux: m, touch: Jg, ssr: t === "ssr" };
}
function Xp(e, t) {
  const { thresholds: n, mobileBreakpoint: r } = qp(e), s = ve(yc(t)), i = ve(bc(t)), o = Ue({}), a = ve(pc(t));
  function l() {
    s.value = yc(), a.value = pc();
  }
  function u() {
    l(), i.value = bc();
  }
  return gn(() => {
    const c = a.value < n.sm, f = a.value < n.md && !c, d = a.value < n.lg && !(f || c), m = a.value < n.xl && !(d || f || c), b = a.value < n.xxl && !(m || d || f || c), g = a.value >= n.xxl, S = c ? "xs" : f ? "sm" : d ? "md" : m ? "lg" : b ? "xl" : "xxl", v = typeof r == "number" ? r : n[r], y = a.value < v;
    o.xs = c, o.sm = f, o.md = d, o.lg = m, o.xl = b, o.xxl = g, o.smAndUp = !c, o.mdAndUp = !(c || f), o.lgAndUp = !(c || f || d), o.xlAndUp = !(c || f || d || m), o.smAndDown = !(d || m || b || g), o.mdAndDown = !(m || b || g), o.lgAndDown = !(b || g), o.xlAndDown = !g, o.name = S, o.height = s.value, o.width = a.value, o.mobile = y, o.mobileBreakpoint = r, o.platform = i.value, o.thresholds = n;
  }), Ie && (window.addEventListener("resize", l, { passive: true }), ct(() => {
    window.removeEventListener("resize", l);
  }, true)), { ...Iu(o), update: u, ssr: !!t };
}
function Jp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn();
  const n = Me(Mo);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = H(() => e.mobile ? true : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : false);
  return { ...n, displayClasses: B(() => t ? { [`${t}--mobile`]: r.value } : {}), mobile: r };
}
const Qp = ne({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function wt(e, t, n) {
  return Pe()({ name: e, props: Qp({ mode: n, origin: t }), setup(r, s) {
    let { slots: i } = s;
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
      const a = r.group ? ia : sr;
      return vn(a, { name: r.disabled ? "" : e, css: !r.disabled, ...r.group ? void 0 : { mode: r.mode }, ...r.disabled ? {} : o }, i.default);
    };
  } });
}
function Aa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Pe()({ name: e, props: { mode: { type: String, default: n }, disabled: { type: Boolean, default: Gs() }, group: Boolean, hideOnLeave: Boolean }, setup(r, s) {
    let { slots: i } = s;
    const o = r.group ? ia : sr;
    return () => vn(o, { name: r.disabled ? "" : e, css: !r.disabled, ...r.disabled ? {} : { ...t, onLeave: (a) => {
      var _a2;
      r.hideOnLeave ? a.style.setProperty("display", "none", "important") : (_a2 = t.onLeave) == null ? void 0 : _a2.call(t, a);
    } } }, i.default);
  } });
}
function La() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return { onBeforeEnter(s) {
    s._parent = s.parentNode, s._initialStyle = { transition: s.style.transition, overflow: s.style.overflow, width: s.style.width, height: s.style.height };
  }, onEnter(s) {
    const i = s._initialStyle;
    if (!i) return;
    s.style.setProperty("transition", "none", "important"), s.style.overflow = "hidden";
    const o = `${s.offsetWidth}px`, a = `${s.offsetHeight}px`;
    ["x", "both"].includes(t) && (s.style.width = "0"), ["y", "both"].includes(t) && (s.style.height = "0"), s.offsetHeight, s.style.transition = i.transition, e && s._parent && s._parent.classList.add(e), requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (s.style.width = o), ["y", "both"].includes(t) && (s.style.height = a);
    });
  }, onAfterEnter: r, onEnterCancelled: r, onLeave(s) {
    s._initialStyle = { transition: "", overflow: s.style.overflow, width: s.style.width, height: s.style.height }, s.style.overflow = "hidden", ["x", "both"].includes(t) && (s.style.width = `${s.offsetWidth}px`), ["y", "both"].includes(t) && (s.style.height = `${s.offsetHeight}px`), s.offsetHeight, requestAnimationFrame(() => {
      ["x", "both"].includes(t) && (s.style.width = "0"), ["y", "both"].includes(t) && (s.style.height = "0");
    });
  }, onAfterLeave: n, onLeaveCancelled: n };
  function n(s) {
    e && s._parent && s._parent.classList.remove(e), r(s);
  }
  function r(s) {
    if (!s._initialStyle) return;
    const { width: i, height: o } = s._initialStyle;
    s.style.overflow = s._initialStyle.overflow, i != null && ["x", "both"].includes(t) && (s.style.width = i), o != null && ["y", "both"].includes(t) && (s.style.height = o), delete s._initialStyle;
  }
}
const ey = ne({ target: [Object, Array] }, "v-dialog-transition"), Ki = /* @__PURE__ */ new WeakMap(), ty = Pe()({ name: "VDialogTransition", props: ey(), setup(e, t) {
  let { slots: n } = t;
  const r = { onBeforeEnter(s) {
    s.style.pointerEvents = "none", s.style.visibility = "hidden";
  }, async onEnter(s, i) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), s.style.visibility = "";
    const o = wc(e.target, s), { x: a, y: l, sx: u, sy: c, speed: f } = o;
    if (Ki.set(s, o), Gs()) An(s, [{ opacity: 0 }, {}], { duration: 125 * f, easing: oc }).finished.then(() => i());
    else {
      const d = An(s, [{ transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }, {}], { duration: 225 * f, easing: oc });
      (_a2 = _c(s)) == null ? void 0 : _a2.forEach((m) => {
        An(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * f, easing: So });
      }), d.finished.then(() => i());
    }
  }, onAfterEnter(s) {
    s.style.removeProperty("pointer-events");
  }, onBeforeLeave(s) {
    s.style.pointerEvents = "none";
  }, async onLeave(s, i) {
    var _a2;
    await new Promise((d) => requestAnimationFrame(d));
    let o;
    !Ki.has(s) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = wc(e.target, s) : o = Ki.get(s);
    const { x: a, y: l, sx: u, sy: c, speed: f } = o;
    Gs() ? An(s, [{}, { opacity: 0 }], { duration: 85 * f, easing: ac }).finished.then(() => i()) : (An(s, [{}, { transform: `translate(${a}px, ${l}px) scale(${u}, ${c})`, opacity: 0 }], { duration: 125 * f, easing: ac }).finished.then(() => i()), (_a2 = _c(s)) == null ? void 0 : _a2.forEach((m) => {
      An(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * f, easing: So });
    }));
  }, onAfterLeave(s) {
    s.style.removeProperty("pointer-events");
  } };
  return () => e.target ? P(sr, Re({ name: "dialog-transition" }, r, { css: false }), n) : P(sr, { name: "dialog-transition" }, n);
} });
function _c(e) {
  var _a2;
  const t = (_a2 = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a2.children;
  return t && [...t];
}
function wc(e, t) {
  const n = sd(e), r = id(t), [s, i] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [o, a] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let l = n.left + n.width / 2;
  o === "left" || a === "left" ? l -= n.width / 2 : (o === "right" || a === "right") && (l += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || a === "top" ? u -= n.height / 2 : (o === "bottom" || a === "bottom") && (u += n.height / 2);
  const c = n.width / r.width, f = n.height / r.height, d = Math.max(1, c, f), m = c / d || 0, b = f / d || 0, g = r.width * r.height / (window.innerWidth * window.innerHeight), S = g > 0.12 ? Math.min(1.5, (g - 0.12) * 10 + 1) : 1;
  return { x: l - (s + r.left), y: u - (i + r.top), sx: m, sy: b, speed: S };
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
const ny = Aa("expand-transition", La());
Aa("expand-x-transition", La("", "x"));
Aa("expand-both-transition", La("", "both"));
function ry(e) {
  return { aspectStyles: H(() => {
    const t = Number(e.aspectRatio);
    return t ? { paddingBottom: String(1 / t * 100) + "%" } : void 0;
  }) };
}
const kd = ne({ aspectRatio: [String, Number], contentClass: null, inline: Boolean, ...qe(), ...vr() }, "VResponsive"), Sc = Pe()({ name: "VResponsive", props: kd(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: r } = ry(e), { dimensionStyles: s } = pr(e);
  return ze(() => {
    var _a2;
    return k("div", { class: Le(["v-responsive", { "v-responsive--inline": e.inline }, e.class]), style: He([s.value, e.style]) }, [k("div", { class: "v-responsive__sizer", style: He(r.value) }, null), (_a2 = n.additional) == null ? void 0 : _a2.call(n), n.default && k("div", { class: Le(["v-responsive__content", e.contentClass]) }, [n.default()])]);
  }), {};
} }), Td = ne({ transition: { type: null, default: "fade-transition", validator: (e) => e !== true } }, "transition"), Wn = (e, t) => {
  let { slots: n } = t;
  const { transition: r, disabled: s, group: i, ...o } = e, { component: a = i ? ia : sr, ...l } = yo(r) ? r : {};
  let u;
  return yo(r) ? u = Re(l, lv({ disabled: s, group: i }), o) : u = Re({ name: s || !r ? "" : r }, o), vn(a, u, n);
};
function Cc(e, t) {
  if (!da) return;
  const n = t.modifiers || {}, r = t.value, { handler: s, options: i } = typeof r == "object" ? r : { handler: r, options: {} }, o = new IntersectionObserver(function() {
    var _a2;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const u = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
    if (!u) return;
    const c = a.some((f) => f.isIntersecting);
    s && (!n.quiet || u.init) && (!n.once || c || u.init) && s(c, a, l), c && n.once ? ko(e, t) : u.init = true;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: false, observer: o }, o.observe(e);
}
function ko(e, t) {
  var _a2;
  const n = (_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const xc = { mounted: Cc, unmounted: ko, updated: (e, t) => {
  var _a2;
  ((_a2 = e._observe) == null ? void 0 : _a2[t.instance.$.uid]) && (ko(e, t), Cc(e, t));
} }, sy = ne({ absolute: Boolean, alt: String, cover: Boolean, color: String, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, imageClass: null, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...kd(), ...qe(), ...hr(), ...Td() }, "VImg"), iy = Pe()({ name: "VImg", directives: { vIntersect: xc }, props: sy(), emits: { loadstart: (e) => true, load: (e) => true, error: (e) => true }, setup(e, t) {
  let { emit: n, slots: r } = t;
  const { backgroundColorClasses: s, backgroundColorStyles: i } = _a(() => e.color), { roundedClasses: o } = gr(e), a = Ze("VImg"), l = ve(""), u = X(), c = ve(e.eager ? "loading" : "idle"), f = ve(), d = ve(), m = H(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), b = H(() => m.value.aspect || f.value / d.value || 0);
  le(() => e.src, () => {
    g(c.value !== "idle");
  }), le(b, (M, $) => {
    !M && $ && u.value && _(u.value);
  }), fi(() => g());
  function g(M) {
    if (!(e.eager && M) && !(da && !M && !e.eager)) {
      if (c.value = "loading", m.value.lazySrc) {
        const $ = new Image();
        $.src = m.value.lazySrc, _($, null);
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
    const M = u.value;
    M && (l.value = M.currentSrc || M.src);
  }
  let A = -1;
  zt(() => {
    clearTimeout(A);
  });
  function _(M) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const Y = () => {
      if (clearTimeout(A), a.isUnmounted) return;
      const { naturalHeight: Z, naturalWidth: J } = M;
      Z || J ? (f.value = J, d.value = Z) : !M.complete && c.value === "loading" && $ != null ? A = window.setTimeout(Y, $) : (M.currentSrc.endsWith(".svg") || M.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
    };
    Y();
  }
  const x = B(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), E = () => {
    var _a2;
    if (!m.value.src || c.value === "idle") return null;
    const M = k("img", { class: Le(["v-img__img", x.value, e.imageClass]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.src, srcset: m.value.srcset, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: u, onLoad: S, onError: v }, null), $ = (_a2 = r.sources) == null ? void 0 : _a2.call(r);
    return P(Wn, { transition: e.transition, appear: true }, { default: () => [er($ ? k("picture", { class: "v-img__picture" }, [$, M]) : M, [[sa, c.value === "loaded"]])] });
  }, T = () => P(Wn, { transition: e.transition }, { default: () => [m.value.lazySrc && c.value !== "loaded" && k("img", { class: Le(["v-img__img", "v-img__img--preload", x.value]), style: { objectPosition: e.position }, crossorigin: e.crossorigin, src: m.value.lazySrc, alt: e.alt, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => r.placeholder ? P(Wn, { transition: e.transition, appear: true }, { default: () => [(c.value === "loading" || c.value === "error" && !r.error) && k("div", { class: "v-img__placeholder" }, [r.placeholder()])] }) : null, D = () => r.error ? P(Wn, { transition: e.transition, appear: true }, { default: () => [c.value === "error" && k("div", { class: "v-img__error" }, [r.error()])] }) : null, R = () => e.gradient ? k("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, N = ve(false);
  {
    const M = le(b, ($) => {
      $ && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          N.value = true;
        });
      }), M());
    });
  }
  return ze(() => {
    const M = Sc.filterProps(e);
    return er(P(Sc, Re({ class: ["v-img", { "v-img--absolute": e.absolute, "v-img--booting": !N.value, "v-img--fit-content": e.width === "fit-content" }, s.value, o.value, e.class], style: [{ width: pe(e.width === "auto" ? f.value : e.width) }, i.value, e.style] }, M, { aspectRatio: b.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => k(_e, null, [P(E, null, null), P(T, null, null), P(R, null, null), P(w, null, null), P(D, null, null)]), default: r.default }), [[xc, { handler: g, options: e.options }, null, { once: true }]]);
  }), { currentSrc: l, image: u, state: c, naturalWidth: f, naturalHeight: d };
} }), oy = ne({ start: Boolean, end: Boolean, icon: yt, image: String, text: String, ...hs(), ...qe(), ...vs(), ...hr(), ...wi(), ...Rt(), ...Gt(), ...ys({ variant: "flat" }) }, "VAvatar"), Ac = Pe()({ name: "VAvatar", props: oy(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: r } = sn(e), { borderClasses: s } = gs(e), { colorClasses: i, colorStyles: o, variantClasses: a } = Sa(e), { densityClasses: l } = ps(e), { roundedClasses: u } = gr(e), { sizeClasses: c, sizeStyles: f } = Si(e);
  return ze(() => P(e.tag, { class: Le(["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, r.value, s.value, i.value, l.value, u.value, c.value, a.value, e.class]), style: He([o.value, f.value, e.style]) }, { default: () => [n.default ? P(mn, { key: "content-defaults", defaults: { VImg: { cover: true, src: e.image }, VIcon: { icon: e.icon } } }, { default: () => [n.default()] }) : e.image ? P(iy, { key: "image", src: e.image, alt: "", cover: true }, null) : e.icon ? P(st, { key: "icon", icon: e.icon }, null) : e.text, wa(false, "v-avatar")] })), {};
} }), Yi = Symbol("Forwarded refs");
function qi(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function Pd(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return e[Yi] = n, new Proxy(e, { get(s, i) {
    if (Reflect.has(s, i)) return Reflect.get(s, i);
    if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
      for (const o of n) if (o.value && Reflect.has(o.value, i)) {
        const a = Reflect.get(o.value, i);
        return typeof a == "function" ? a.bind(o.value) : a;
      }
    }
  }, has(s, i) {
    if (Reflect.has(s, i)) return true;
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return false;
    for (const o of n) if (o.value && Reflect.has(o.value, i)) return true;
    return false;
  }, set(s, i, o) {
    if (Reflect.has(s, i)) return Reflect.set(s, i, o);
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return false;
    for (const a of n) if (a.value && Reflect.has(a.value, i)) return Reflect.set(a.value, i, o);
    return false;
  }, getOwnPropertyDescriptor(s, i) {
    var _a2;
    const o = Reflect.getOwnPropertyDescriptor(s, i);
    if (o) return o;
    if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
      for (const a of n) {
        if (!a.value) continue;
        const l = qi(a.value, i) ?? ("_" in a.value ? qi((_a2 = a.value._) == null ? void 0 : _a2.setupState, i) : void 0);
        if (l) return l;
      }
      for (const a of n) {
        const l = a.value && a.value[Yi];
        if (!l) continue;
        const u = l.slice();
        for (; u.length; ) {
          const c = u.shift(), f = qi(c.value, i);
          if (f) return f;
          const d = c.value && c.value[Yi];
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
const To = Symbol.for("vuetify:list");
function Rd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { filterable: false };
  const t = Me(To, { filterable: false, hasPrepend: ve(false), updateHasPrepend: () => null, trackingIndex: ve(-1), navigationStrategy: ve("focus"), uid: "" }), { filterable: n, trackingIndex: r = t.trackingIndex, navigationStrategy: s = t.navigationStrategy, uid: i = t.uid || os() } = e, o = { filterable: t.filterable || n, hasPrepend: ve(false), updateHasPrepend: (a) => {
    a && (o.hasPrepend.value = a);
  }, trackingIndex: r, navigationStrategy: s, uid: i };
  return rt(To, o), t;
}
function Id() {
  return Me(To, null);
}
const Ea = (e) => {
  const t = { activate: (n) => {
    let { id: r, value: s, activated: i } = n;
    return r = te(r), e && !s && i.size === 1 && i.has(r) || (s ? i.add(r) : i.delete(r)), i;
  }, in: (n, r, s) => {
    let i = /* @__PURE__ */ new Set();
    if (n != null) for (const o of ma(n)) i = t.activate({ id: o, value: true, activated: new Set(i), children: r, parents: s });
    return i;
  }, out: (n) => Array.from(n) };
  return t;
}, Od = (e) => {
  const t = Ea(e);
  return { activate: (r) => {
    let { activated: s, id: i, ...o } = r;
    i = te(i);
    const a = s.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
    return t.activate({ ...o, id: i, activated: a });
  }, in: (r, s, i) => {
    let o = /* @__PURE__ */ new Set();
    if (r != null) {
      const a = ma(r);
      a.length && (o = t.in(a.slice(0, 1), s, i));
    }
    return o;
  }, out: (r, s, i) => t.out(r, s, i) };
}, uy = (e) => {
  const t = Ea(e);
  return { activate: (r) => {
    let { id: s, activated: i, children: o, ...a } = r;
    return s = te(s), o.has(s) ? i : t.activate({ id: s, activated: i, children: o, ...a });
  }, in: t.in, out: t.out };
}, fy = (e) => {
  const t = Od(e);
  return { activate: (r) => {
    let { id: s, activated: i, children: o, ...a } = r;
    return s = te(s), o.has(s) ? i : t.activate({ id: s, activated: i, children: o, ...a });
  }, in: t.in, out: t.out };
}, dy = { open: (e) => {
  let { id: t, value: n, opened: r, parents: s } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(t);
    let o = s.get(t);
    for (; o != null; ) i.add(o), o = s.get(o);
    return i;
  } else return r.delete(t), r;
}, select: () => null }, Vd = { open: (e) => {
  let { id: t, value: n, opened: r, parents: s } = e;
  if (n) {
    let i = s.get(t);
    for (r.add(t); i != null && i !== t; ) r.add(i), i = s.get(i);
    return r;
  } else r.delete(t);
  return r;
}, select: () => null }, my = { open: Vd.open, select: (e) => {
  let { id: t, value: n, opened: r, parents: s } = e;
  if (!n) return r;
  const i = [];
  let o = s.get(t);
  for (; o != null; ) i.push(o), o = s.get(o);
  return new Set(i);
} }, Ma = (e) => {
  const t = { select: (n) => {
    let { id: r, value: s, selected: i } = n;
    if (r = te(r), e && !s) {
      const o = Array.from(i.entries()).reduce((a, l) => {
        let [u, c] = l;
        return c === "on" && a.push(u), a;
      }, []);
      if (o.length === 1 && o[0] === r) return i;
    }
    return i.set(r, s ? "on" : "off"), i;
  }, in: (n, r, s, i) => {
    const o = /* @__PURE__ */ new Map();
    for (const a of n || []) t.select({ id: a, value: true, selected: o, children: r, parents: s, disabled: i });
    return o;
  }, out: (n) => {
    const r = [];
    for (const [s, i] of n.entries()) i === "on" && r.push(s);
    return r;
  } };
  return t;
}, Dd = (e) => {
  const t = Ma(e);
  return { select: (r) => {
    let { selected: s, id: i, ...o } = r;
    i = te(i);
    const a = s.has(i) ? /* @__PURE__ */ new Map([[i, s.get(i)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...o, id: i, selected: a });
  }, in: (r, s, i, o) => (r == null ? void 0 : r.length) ? t.in(r.slice(0, 1), s, i, o) : /* @__PURE__ */ new Map(), out: (r, s, i) => t.out(r, s, i) };
}, hy = (e) => {
  const t = Ma(e);
  return { select: (r) => {
    let { id: s, selected: i, children: o, ...a } = r;
    return s = te(s), o.has(s) ? i : t.select({ id: s, selected: i, children: o, ...a });
  }, in: t.in, out: t.out };
}, gy = (e) => {
  const t = Dd(e);
  return { select: (r) => {
    let { id: s, selected: i, children: o, ...a } = r;
    return s = te(s), o.has(s) ? i : t.select({ id: s, selected: i, children: o, ...a });
  }, in: t.in, out: t.out };
}, ka = (e) => {
  const t = { select: (n) => {
    let { id: r, value: s, selected: i, children: o, parents: a, disabled: l } = n;
    r = te(r);
    const u = new Map(i), c = [r];
    for (; c.length; ) {
      const d = c.shift();
      l.has(d) || i.set(te(d), s ? "on" : "off"), o.has(d) && c.push(...o.get(d));
    }
    let f = te(a.get(r));
    for (; f; ) {
      let d = true, m = true;
      for (const b of o.get(f)) {
        const g = te(b);
        if (!l.has(g) && (i.get(g) !== "on" && (d = false), i.has(g) && i.get(g) !== "off" && (m = false), !d && !m)) break;
      }
      i.set(f, d ? "on" : m ? "off" : "indeterminate"), f = te(a.get(f));
    }
    return e && !s && Array.from(i.entries()).reduce((m, b) => {
      let [g, S] = b;
      return S === "on" && m.push(g), m;
    }, []).length === 0 ? u : i;
  }, in: (n, r, s) => {
    let i = /* @__PURE__ */ new Map();
    for (const o of n || []) i = t.select({ id: o, value: true, selected: i, children: r, parents: s, disabled: /* @__PURE__ */ new Set() });
    return i;
  }, out: (n, r) => {
    const s = [];
    for (const [i, o] of n.entries()) o === "on" && !r.has(i) && s.push(i);
    return s;
  } };
  return t;
}, vy = (e) => {
  const t = ka(e);
  return { select: t.select, in: t.in, out: (r, s, i) => {
    const o = [];
    for (const [a, l] of r.entries()) if (l === "on") {
      if (i.has(a)) {
        const u = i.get(a);
        if (r.get(u) === "on") continue;
      }
      o.push(a);
    }
    return o;
  } };
}, py = (e) => {
  const n = { select: ka(e).select, in: (r, s, i, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const l of r || []) s.has(l) || (a = n.select({ id: l, value: true, selected: a, children: s, parents: i, disabled: o }));
    return a;
  }, out: (r) => {
    const s = [];
    for (const [i, o] of r.entries()) (o === "on" || o === "indeterminate") && s.push(i);
    return s;
  } };
  return n;
}, ar = Symbol.for("vuetify:nested"), Hd = { id: ve(), root: { itemsRegistration: X("render"), register: () => null, unregister: () => null, updateDisabled: () => null, children: X(/* @__PURE__ */ new Map()), parents: X(/* @__PURE__ */ new Map()), disabled: X(/* @__PURE__ */ new Set()), open: () => null, openOnSelect: () => null, activate: () => null, select: () => null, activatable: X(false), scrollToActive: X(false), selectable: X(false), opened: X(/* @__PURE__ */ new Set()), activated: X(/* @__PURE__ */ new Set()), selected: X(/* @__PURE__ */ new Map()), selectedValues: X([]), getPath: () => [] } }, yy = ne({ activatable: Boolean, selectable: Boolean, activeStrategy: [String, Function, Object], selectStrategy: [String, Function, Object], openStrategy: [String, Object], opened: null, activated: null, selected: null, mandatory: Boolean, itemsRegistration: { type: String, default: "render" } }, "nested"), by = (e, t) => {
  let { items: n, returnObject: r, scrollToActive: s } = t, i = false;
  const o = ve(/* @__PURE__ */ new Map()), a = ve(/* @__PURE__ */ new Map()), l = ve(/* @__PURE__ */ new Set()), u = Qt(e, "opened", e.opened, (x) => new Set(Array.isArray(x) ? x.map((E) => te(E)) : x), (x) => [...x.values()]), c = H(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return uy(e.mandatory);
      case "single-leaf":
        return fy(e.mandatory);
      case "independent":
        return Ea(e.mandatory);
      case "single-independent":
      default:
        return Od(e.mandatory);
    }
  }), f = H(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return gy(e.mandatory);
      case "leaf":
        return hy(e.mandatory);
      case "independent":
        return Ma(e.mandatory);
      case "single-independent":
        return Dd(e.mandatory);
      case "trunk":
        return vy(e.mandatory);
      case "branch":
        return py(e.mandatory);
      case "classic":
      default:
        return ka(e.mandatory);
    }
  }), d = H(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return my;
      case "single":
        return dy;
      case "multiple":
      default:
        return Vd;
    }
  }), m = Qt(e, "activated", e.activated, (x) => c.value.in(x, o.value, a.value), (x) => c.value.out(x, o.value, a.value)), b = Qt(e, "selected", e.selected, (x) => f.value.in(x, o.value, a.value, l.value), (x) => f.value.out(x, o.value, a.value));
  zt(() => {
    i = true;
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
  le(() => [n.value, nt(r)], () => {
    e.itemsRegistration === "props" && A();
  }, { immediate: true });
  function A() {
    const x = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), w = nt(r) ? (N) => te(N.raw) : (N) => N.value, D = [...n.value];
    let R = 0;
    for (; R < D.length; ) {
      const N = D[R++], M = w(N);
      if (N.children) {
        const $ = [];
        for (const Y of N.children) {
          const Z = w(Y);
          x.set(Z, M), $.push(Z), D.push(Y);
        }
        E.set(M, $);
      }
      N.props.disabled && T.add(M);
    }
    o.value = E, a.value = x, l.value = T;
  }
  const _ = { id: ve(), root: { opened: u, activatable: B(() => e.activatable), scrollToActive: B(() => nt(s)), selectable: B(() => e.selectable), activated: m, selected: b, selectedValues: H(() => {
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
    if (i) return;
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
  return rt(ar, _), _.root;
}, Nd = (e, t, n) => {
  const r = Me(ar, Hd), s = Symbol("nested item"), i = H(() => {
    const a = te(nt(e));
    return a !== void 0 ? a : s;
  }), o = { ...r, id: i, open: (a, l) => r.root.open(i.value, a, l), openOnSelect: (a, l) => r.root.openOnSelect(i.value, a, l), isOpen: H(() => r.root.opened.value.has(i.value)), parent: H(() => r.root.parents.value.get(i.value)), activate: (a, l) => r.root.activate(i.value, a, l), isActivated: H(() => r.root.activated.value.has(i.value)), scrollToActive: r.root.scrollToActive, select: (a, l) => r.root.select(i.value, a, l), isSelected: H(() => r.root.selected.value.get(i.value) === "on"), isIndeterminate: H(() => r.root.selected.value.get(i.value) === "indeterminate"), isLeaf: H(() => !r.root.children.value.get(i.value)), isGroupActivator: r.isGroupActivator };
  return fi(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || dt(() => {
      r.root.register(i.value, r.id.value, nt(t), n);
    });
  }), zt(() => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || r.root.unregister(i.value);
  }), le(i, (a, l) => {
    r.isGroupActivator || r.root.itemsRegistration.value === "props" || (r.root.unregister(l), dt(() => {
      r.root.register(a, r.id.value, nt(t), n);
    }));
  }), le(() => nt(t), (a) => {
    r.root.updateDisabled(i.value, a);
  }), n && rt(ar, o), o;
}, _y = () => {
  const e = Me(ar, Hd);
  rt(ar, { ...e, isGroupActivator: true });
};
function wy() {
  const e = ve(false);
  return Wt(() => {
    window.requestAnimationFrame(() => {
      e.value = true;
    });
  }), { ssrBootStyles: B(() => e.value ? void 0 : { transition: "none !important" }), isBooted: Jn(e) };
}
const Sy = mr({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return _y(), () => {
    var _a2;
    return (_a2 = n.default) == null ? void 0 : _a2.call(n);
  };
} }), Cy = ne({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: yt, default: "$collapse" }, disabled: Boolean, expandIcon: { type: yt, default: "$expand" }, rawId: [String, Number], prependIcon: yt, appendIcon: yt, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...qe(), ...Rt() }, "VListGroup"), Lc = Pe()({ name: "VListGroup", props: Cy(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: r, open: s, id: i } = Nd(() => e.value, () => e.disabled, true), o = H(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), a = Id(), { isBooted: l } = wy(), u = Me(ar), c = B(() => {
    var _a2;
    return ((_a2 = u == null ? void 0 : u.root) == null ? void 0 : _a2.itemsRegistration.value) === "render";
  });
  function f(g) {
    var _a2;
    ["INPUT", "TEXTAREA"].includes((_a2 = g.target) == null ? void 0 : _a2.tagName) || s(!r.value, g);
  }
  const d = H(() => ({ onClick: f, class: "v-list-group__header", id: o.value })), m = H(() => r.value ? e.collapseIcon : e.expandIcon), b = H(() => ({ VListItem: { activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && m.value, appendIcon: e.appendIcon || !e.subgroup && m.value, title: e.title, value: e.value } }));
  return ze(() => P(e.tag, { class: Le(["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": r.value }, e.class]), style: He(e.style) }, { default: () => [n.activator && P(mn, { defaults: b.value }, { default: () => [P(Sy, null, { default: () => [n.activator({ props: d.value, isOpen: r.value })] })] }), P(Wn, { transition: { component: ny }, disabled: !l.value }, { default: () => {
    var _a2, _b2;
    return [c.value ? er(k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)]), [[sa, r.value]]) : r.value && k("div", { class: "v-list-group__items", role: "group", "aria-labelledby": o.value }, [(_b2 = n.default) == null ? void 0 : _b2.call(n)])];
  } })] })), { isOpen: r };
} }), xy = ne({ opacity: [Number, String], ...qe(), ...Rt() }, "VListItemSubtitle"), Ay = Pe()({ name: "VListItemSubtitle", props: xy(), setup(e, t) {
  let { slots: n } = t;
  return ze(() => P(e.tag, { class: Le(["v-list-item-subtitle", e.class]), style: He([{ "--v-list-item-subtitle-opacity": e.opacity }, e.style]) }, n)), {};
} }), Ly = Nv("v-list-item-title"), Ey = ne({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: yt, baseColor: String, disabled: Boolean, lines: [Boolean, String], link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: yt, ripple: { type: [Boolean, Object], default: true }, slim: Boolean, prependGap: [Number, String], subtitle: { type: [String, Number, Boolean], default: void 0 }, title: { type: [String, Number, Boolean], default: void 0 }, value: null, index: Number, tabindex: [Number, String], onClick: Vr(), onClickOnce: Vr(), ...hs(), ...qe(), ...vs(), ...vr(), ...pi(), ...hr(), ...wd(), ...Rt(), ...Gt(), ...ys({ variant: "text" }) }, "VListItem"), Po = Pe()({ name: "VListItem", directives: { vRipple: Eo }, props: Ey(), emits: { click: (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: s } = t;
  const i = _d(e, n), o = X(), a = H(() => e.value === void 0 ? i.href.value : e.value), { activate: l, isActivated: u, select: c, isOpen: f, isSelected: d, isIndeterminate: m, isGroupActivator: b, root: g, parent: S, openOnSelect: v, scrollToActive: y, id: A } = Nd(a, () => e.disabled, false), _ = Id(), x = H(() => {
    var _a2;
    return e.active !== false && (e.active || ((_a2 = i.isActive) == null ? void 0 : _a2.value) || (g.activatable.value ? u.value : d.value));
  }), E = B(() => e.link !== false && i.isLink.value), T = H(() => !!_ && (g.selectable.value || g.activatable.value || e.value != null)), w = H(() => !e.disabled && e.link !== false && (e.link || i.isClickable.value || T.value)), D = H(() => _ && _.navigationStrategy.value === "track" && e.index !== void 0 && _.trackingIndex.value === e.index), R = H(() => _ ? E.value ? "link" : T.value ? "option" : "listitem" : void 0), N = H(() => {
    if (T.value) return g.activatable.value ? u.value : g.selectable.value ? d.value : x.value;
  }), M = B(() => e.rounded || e.nav), $ = B(() => e.color ?? e.activeColor), Y = B(() => ({ color: x.value ? $.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  le(() => {
    var _a2;
    return (_a2 = i.isActive) == null ? void 0 : _a2.value;
  }, (U) => {
    U && Z();
  }), le(u, (U) => {
    var _a2;
    !U || !y || ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), le(D, (U) => {
    var _a2;
    U && ((_a2 = o.value) == null ? void 0 : _a2.scrollIntoView({ block: "nearest", behavior: "instant" }));
  }), fi(() => {
    var _a2;
    ((_a2 = i.isActive) == null ? void 0 : _a2.value) && dt(() => Z());
  });
  function Z() {
    S.value != null && g.open(S.value, true), v(true);
  }
  const { themeClasses: J } = sn(e), { borderClasses: Q } = gs(e), { colorClasses: ae, colorStyles: Oe, variantClasses: we } = Sa(Y), { densityClasses: ie } = ps(e), { dimensionStyles: he } = pr(e), { elevationClasses: de } = yi(e), { roundedClasses: $e } = gr(M), Ge = B(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Ne = B(() => e.ripple !== void 0 && e.ripple && (_ == null ? void 0 : _.filterable) ? { keys: ["Enter"] } : e.ripple), L = H(() => ({ isActive: x.value, select: c, isOpen: f.value, isSelected: d.value, isIndeterminate: m.value, isDisabled: e.disabled }));
  function j(U) {
    var _a2, _b2, _c2;
    s("click", U), !["INPUT", "TEXTAREA"].includes((_a2 = U.target) == null ? void 0 : _a2.tagName) && w.value && ((_c2 = (_b2 = i.navigate).value) == null ? void 0 : _c2.call(_b2, U), !b && (g.activatable.value ? l(!u.value, U) : (g.selectable.value || e.value != null && !E.value) && c(!d.value, U)));
  }
  function z(U) {
    const ge = U.target;
    ["INPUT", "TEXTAREA"].includes(ge.tagName) || (U.key === "Enter" || U.key === " " && !(_ == null ? void 0 : _.filterable)) && (U.preventDefault(), U.stopPropagation(), U.target.dispatchEvent(new MouseEvent("click", U)));
  }
  return ze(() => {
    const U = E.value ? "a" : e.tag, ge = r.title || e.title != null, h = r.subtitle || e.subtitle != null, C = !!(!!(e.appendAvatar || e.appendIcon) || r.append), V = !!(!!(e.prependAvatar || e.prependIcon) || r.prepend);
    return _ == null ? void 0 : _.updateHasPrepend(V), e.activeColor && Kf("active-color", ["color", "base-color"]), er(P(U, Re(i.linkProps, { ref: o, id: e.index !== void 0 && _ ? `v-list-item-${_.uid}-${e.index}` : void 0, class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": w.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !V && (_ == null ? void 0 : _.hasPrepend.value), "v-list-item--slim": e.slim, "v-list-item--focus-visible": D.value, [`${e.activeClass}`]: e.activeClass && x.value }, J.value, Q.value, ae.value, ie.value, de.value, Ge.value, $e.value, we.value, e.class], style: [{ "--v-list-prepend-gap": pe(e.prependGap) }, Oe.value, he.value, e.style], tabindex: e.tabindex ?? (w.value ? _ ? -2 : 0 : void 0), "aria-selected": N.value, role: R.value, onClick: j, onKeydown: w.value && !E.value && z }), { default: () => {
      var _a2;
      return [wa(w.value || x.value, "v-list-item"), V && k("div", { key: "prepend", class: "v-list-item__prepend" }, [r.prepend ? P(mn, { key: "prepend-defaults", defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.prepend) == null ? void 0 : _a3.call(r, L.value)];
      } }) : k(_e, null, [e.prependAvatar && P(Ac, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && P(st, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), k("div", { class: "v-list-item__spacer" }, null)]), k("div", { class: "v-list-item__content", "data-no-activator": "" }, [ge && P(Ly, { key: "title" }, { default: () => {
        var _a3;
        return [((_a3 = r.title) == null ? void 0 : _a3.call(r, { title: e.title })) ?? ye(e.title)];
      } }), h && P(Ay, { key: "subtitle" }, { default: () => {
        var _a3;
        return [((_a3 = r.subtitle) == null ? void 0 : _a3.call(r, { subtitle: e.subtitle })) ?? ye(e.subtitle)];
      } }), (_a2 = r.default) == null ? void 0 : _a2.call(r, L.value)]), C && k("div", { key: "append", class: "v-list-item__append" }, [r.append ? P(mn, { key: "append-defaults", defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: true }, VCheckboxBtn: { density: e.density } } }, { default: () => {
        var _a3;
        return [(_a3 = r.append) == null ? void 0 : _a3.call(r, L.value)];
      } }) : k(_e, null, [e.appendIcon && P(st, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && P(Ac, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), k("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[Eo, w.value && Ne.value]]);
  }), { activate: l, isActivated: u, isGroupActivator: b, isSelected: d, list: _, select: c, root: g, id: A, link: i };
} }), My = ne({ color: String, inset: Boolean, sticky: Boolean, title: String, ...qe(), ...Rt() }, "VListSubheader"), ky = Pe()({ name: "VListSubheader", props: My(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: r, textColorStyles: s } = Jr(() => e.color);
  return ze(() => {
    const i = !!(n.default || e.title);
    return P(e.tag, { class: Le(["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, r.value, e.class]), style: He([{ textColorStyles: s }, e.style]) }, { default: () => {
      var _a2;
      return [i && k("div", { class: "v-list-subheader__text" }, [((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? e.title])];
    } });
  }), {};
} }), Ty = ne({ items: Array, returnObject: Boolean }, "VListChildren"), Fd = Pe()({ name: "VListChildren", props: Ty(), setup(e, t) {
  let { slots: n } = t;
  return Rd(), () => {
    var _a2, _b2;
    return ((_a2 = n.default) == null ? void 0 : _a2.call(n)) ?? ((_b2 = e.items) == null ? void 0 : _b2.map((r, s) => {
      var _a3, _b3;
      let { children: i, props: o, type: a, raw: l } = r;
      if (a === "divider") return ((_a3 = n.divider) == null ? void 0 : _a3.call(n, { props: o })) ?? P(Kp, o, null);
      if (a === "subheader") return ((_b3 = n.subheader) == null ? void 0 : _b3.call(n, { props: o })) ?? P(ky, o, null);
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
      } : void 0 }, c = Lc.filterProps(o);
      return i ? P(Lc, Re(c, { value: e.returnObject ? l : o == null ? void 0 : o.value, rawId: o == null ? void 0 : o.value }), { activator: (f) => {
        let { props: d } = f;
        const m = Re(o, d, { value: e.returnObject ? l : o.value });
        return n.header ? n.header({ props: m }) : P(Po, Re(m, { index: s }), u);
      }, default: () => P(Fd, { items: i, returnObject: e.returnObject }, n) }) : n.item ? n.item({ props: { ...o, index: s } }) : P(Po, Re(o, { index: s, value: e.returnObject ? l : o.value }), u);
    }));
  };
} }), Py = ne({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, itemType: { type: [Boolean, String, Array, Function], default: "type" }, returnObject: Boolean, valueComparator: Function }, "list-items"), Ry = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Iy(e, t) {
  const n = ir(t) ? t : Cr(t, e.itemTitle), r = ir(t) ? t : Cr(t, e.itemValue, void 0), s = Cr(t, e.itemChildren), i = e.itemProps === true ? ms(t, ["children"]) : Cr(t, e.itemProps);
  let o = Cr(t, e.itemType, "item");
  Ry.has(o) || (o = "item");
  const a = { title: n, value: r, ...i };
  return { type: o, title: a.title, value: a.value, props: a, children: o === "item" && s ? $d(e, s) : void 0, raw: t };
}
function $d(e, t) {
  const n = [];
  for (const r of t) n.push(Iy(e, r));
  return n;
}
function Oy(e) {
  return { items: H(() => $d(e, e.items)) };
}
const Vy = ne({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, filterable: Boolean, expandIcon: yt, collapseIcon: yt, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, prependGap: [Number, String], indent: [Number, String], nav: Boolean, navigationStrategy: { type: String, default: "focus" }, navigationIndex: Number, "onClick:open": Vr(), "onClick:select": Vr(), "onUpdate:opened": Vr(), ...yy({ selectStrategy: "single-leaf", openStrategy: "list" }), ...hs(), ...qe(), ...vs(), ...vr(), ...pi(), ...Py(), ...hr(), ...Rt(), ...Gt(), ...ys({ variant: "text" }) }, "VList"), Dy = Pe()({ name: "VList", props: Vy(), emits: { "update:selected": (e) => true, "update:activated": (e) => true, "update:opened": (e) => true, "update:navigationIndex": (e) => true, "click:open": (e) => true, "click:activate": (e) => true, "click:select": (e) => true }, setup(e, t) {
  let { attrs: n, slots: r, emit: s } = t;
  const { items: i } = Oy(e), { themeClasses: o } = sn(e), { backgroundColorClasses: a, backgroundColorStyles: l } = _a(() => e.bgColor), { borderClasses: u } = gs(e), { densityClasses: c } = ps(e), { dimensionStyles: f } = pr(e), { elevationClasses: d } = yi(e), { roundedClasses: m } = gr(e), { children: b, open: g, parents: S, select: v, getPath: y } = by(e, { items: i, returnObject: B(() => e.returnObject), scrollToActive: B(() => e.navigationStrategy === "track") }), A = B(() => e.lines ? `v-list--${e.lines}-line` : void 0), _ = B(() => e.activeColor), x = B(() => e.baseColor), E = B(() => e.color), T = B(() => e.selectable || e.activatable), w = Qt(e, "navigationIndex", -1, (ie) => ie ?? -1), D = os();
  Rd({ filterable: e.filterable, trackingIndex: w, navigationStrategy: B(() => e.navigationStrategy), uid: D }), le(i, () => {
    e.navigationStrategy === "track" && (w.value = -1);
  }), pa({ VListGroup: { activeColor: _, baseColor: x, color: E, expandIcon: B(() => e.expandIcon), collapseIcon: B(() => e.collapseIcon) }, VListItem: { activeClass: B(() => e.activeClass), activeColor: _, baseColor: x, color: E, density: B(() => e.density), disabled: B(() => e.disabled), lines: B(() => e.lines), nav: B(() => e.nav), slim: B(() => e.slim), variant: B(() => e.variant), tabindex: B(() => e.navigationStrategy === "track" ? -1 : void 0) } });
  const R = ve(false), N = X();
  function M(ie) {
    R.value = true;
  }
  function $(ie) {
    R.value = false;
  }
  function Y(ie) {
    var _a2;
    e.navigationStrategy === "track" ? ~w.value || (w.value = Q("first")) : !R.value && !(ie.relatedTarget && ((_a2 = N.value) == null ? void 0 : _a2.contains(ie.relatedTarget))) && we();
  }
  function Z() {
    e.navigationStrategy === "track" && (w.value = -1);
  }
  function J(ie) {
    switch (ie) {
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
  function Q(ie) {
    const he = i.value.length;
    if (he === 0) return -1;
    let de;
    ie === "first" ? de = 0 : ie === "last" ? de = he - 1 : (de = w.value + (ie === "next" ? 1 : -1), de < 0 && (de = he - 1), de >= he && (de = 0));
    const $e = de;
    let Ge = 0;
    for (; Ge < he; ) {
      const Ne = i.value[de];
      if (Ne && Ne.type !== "divider" && Ne.type !== "subheader") return de;
      if (de += ie === "next" || ie === "first" ? 1 : -1, de < 0 && (de = he - 1), de >= he && (de = 0), de === $e) return -1;
      Ge++;
    }
    return -1;
  }
  function ae(ie) {
    const he = ie.target;
    if (!N.value || he.tagName === "INPUT" && ["Home", "End"].includes(ie.key) || he.tagName === "TEXTAREA") return;
    const de = J(ie.key);
    if (de !== null) if (ie.preventDefault(), e.navigationStrategy === "track") {
      const $e = Q(de);
      $e !== -1 && (w.value = $e);
    } else we(de);
  }
  function Oe(ie) {
    R.value = true;
  }
  function we(ie) {
    if (N.value) return Dr(N.value, ie);
  }
  return ze(() => {
    const ie = e.indent ?? (e.prependGap ? Number(e.prependGap) + 24 : void 0), he = T.value ? n.ariaMultiselectable ?? !String(e.selectStrategy).startsWith("single-") : void 0;
    return P(e.tag, { ref: N, class: Le(["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, a.value, u.value, c.value, d.value, A.value, m.value, e.class]), style: He([{ "--v-list-indent": pe(ie), "--v-list-group-prepend": ie ? "0px" : void 0, "--v-list-prepend-gap": pe(e.prependGap) }, l.value, f.value, e.style]), tabindex: e.disabled ? -1 : 0, role: T.value ? "listbox" : "list", "aria-activedescendant": e.navigationStrategy === "track" && w.value >= 0 ? `v-list-item-${D}-${w.value}` : void 0, "aria-multiselectable": he, onFocusin: M, onFocusout: $, onFocus: Y, onBlur: Z, onKeydown: ae, onMousedown: Oe }, { default: () => [P(Fd, { items: i.value, returnObject: e.returnObject }, r)] });
  }), { open: g, select: v, focus: we, children: b, parents: S, getPath: y, navigationIndex: w };
} });
function Xi(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function Hy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ec(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: r } = e, s = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Xi({ x: s, y: i }, t);
  } else if (e.side === "left" || e.side === "right") {
    const { side: n, align: r } = e, s = n === "left" ? 0 : n === "right" ? t.width : n, i = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return Xi({ x: s, y: i }, t);
  }
  return Xi({ x: t.width / 2, y: t.height / 2 }, t);
}
const Bd = { static: $y, connected: jy }, Ny = ne({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Bd }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array], stickToTarget: Boolean, viewportMargin: { type: [Number, String], default: 12 } }, "VOverlay-location-strategies");
function Fy(e, t) {
  const n = X({}), r = X();
  Ie && bi(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    var _a2, _b2;
    le(() => e.locationStrategy, a), ct(() => {
      window.removeEventListener("resize", s), visualViewport == null ? void 0 : visualViewport.removeEventListener("resize", i), visualViewport == null ? void 0 : visualViewport.removeEventListener("scroll", o), r.value = void 0;
    }), window.addEventListener("resize", s, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("resize", i, { passive: true }), visualViewport == null ? void 0 : visualViewport.addEventListener("scroll", o, { passive: true }), typeof e.locationStrategy == "function" ? r.value = (_a2 = e.locationStrategy(t, e, n)) == null ? void 0 : _a2.updateLocation : r.value = (_b2 = Bd[e.locationStrategy](t, e, n)) == null ? void 0 : _b2.updateLocation;
  });
  function s(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  function i(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  function o(a) {
    var _a2;
    (_a2 = r.value) == null ? void 0 : _a2.call(r, a);
  }
  return { contentStyles: n, updateLocation: r };
}
function $y() {
}
function By(e, t) {
  const n = id(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function jy(e, t, n) {
  (Array.isArray(e.target.value) || zv(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: s, preferredOrigin: i } = ha(() => {
    const v = _o(t.location, e.isRtl.value), y = t.origin === "overlap" ? v : t.origin === "auto" ? zi(v) : _o(t.origin, e.isRtl.value);
    return v.side === y.side && v.align === Gi(y).align ? { preferredAnchor: Zl(v), preferredOrigin: Zl(y) } : { preferredAnchor: v, preferredOrigin: y };
  }), [o, a, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => H(() => {
    const y = parseFloat(t[v]);
    return isNaN(y) ? 1 / 0 : y;
  })), c = H(() => {
    if (Array.isArray(t.offset)) return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = false, d = -1;
  const m = new sv(4), b = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((y) => {
      y !== d && m.clear(), requestAnimationFrame((A) => {
        d = A;
      });
    }), m.isFull) {
      const y = m.values();
      if (Xn(y.at(-1), y.at(-3)) && !Xn(y.at(-1), y.at(-2))) return;
    }
    const v = S();
    v && m.push(v.flipped);
  });
  let g = new xt({ x: 0, y: 0, width: 0, height: 0 });
  le(e.target, (v, y) => {
    y && !Array.isArray(y) && b.unobserve(y), Array.isArray(v) ? Xn(v, y) || S() : v && b.observe(v);
  }, { immediate: true }), le(e.contentEl, (v, y) => {
    y && b.unobserve(y), v && b.observe(v);
  }, { immediate: true }), ct(() => {
    b.disconnect();
  });
  function S() {
    if (f = false, requestAnimationFrame(() => f = true), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (g = sd(e.target.value));
    const v = By(e.contentEl.value, e.isRtl.value), y = Ys(e.contentEl.value), A = Number(t.viewportMargin);
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const _ = y.reduce(($, Y) => {
      const Z = uv(Y);
      return $ ? new xt({ x: Math.max($.left, Z.left), y: Math.max($.top, Z.top), width: Math.min($.right, Z.right) - Math.max($.left, Z.left), height: Math.min($.bottom, Z.bottom) - Math.max($.top, Z.top) }) : Z;
    }, void 0);
    t.stickToTarget ? (_.x += Math.min(A, g.x), _.y += Math.min(A, g.y), _.width = Math.max(_.width - A * 2, g.x + g.width - A), _.height = Math.max(_.height - A * 2, g.y + g.height - A)) : (_.x += A, _.y += A, _.width -= A * 2, _.height -= A * 2);
    let x = { anchor: s.value, origin: i.value };
    function E($) {
      const Y = new xt(v), Z = Ec($.anchor, g), J = Ec($.origin, Y);
      let { x: Q, y: ae } = Hy(Z, J);
      switch ($.anchor.side) {
        case "top":
          ae -= c.value[0];
          break;
        case "bottom":
          ae += c.value[0];
          break;
        case "left":
          Q -= c.value[0];
          break;
        case "right":
          Q += c.value[0];
          break;
      }
      switch ($.anchor.align) {
        case "top":
          ae -= c.value[1];
          break;
        case "bottom":
          ae += c.value[1];
          break;
        case "left":
          Q -= c.value[1];
          break;
        case "right":
          Q += c.value[1];
          break;
      }
      return Y.x += Q, Y.y += ae, Y.width = Math.min(Y.width, l.value), Y.height = Math.min(Y.height, u.value), { overflows: Yl(Y, _), x: Q, y: ae };
    }
    let T = 0, w = 0;
    const D = { x: 0, y: 0 }, R = { x: false, y: false };
    let N = -1;
    for (; !(N++ > 10); ) {
      const { x: $, y: Y, overflows: Z } = E(x);
      T += $, w += Y, v.x += $, v.y += Y;
      {
        const J = Kl(x.anchor), Q = Z.x.before || Z.x.after, ae = Z.y.before || Z.y.after;
        let Oe = false;
        if (["x", "y"].forEach((we) => {
          if (we === "x" && Q && !R.x || we === "y" && ae && !R.y) {
            const ie = { anchor: { ...x.anchor }, origin: { ...x.origin } }, he = we === "x" ? J === "y" ? Gi : zi : J === "y" ? zi : Gi;
            ie.anchor = he(ie.anchor), ie.origin = he(ie.origin);
            const { overflows: de } = E(ie);
            (de[we].before <= Z[we].before && de[we].after <= Z[we].after || de[we].before + de[we].after < (Z[we].before + Z[we].after) / 2) && (x = ie, Oe = R[we] = true);
          }
        }), Oe) continue;
      }
      Z.x.before && (T += Z.x.before, v.x += Z.x.before), Z.x.after && (T -= Z.x.after, v.x -= Z.x.after), Z.y.before && (w += Z.y.before, v.y += Z.y.before), Z.y.after && (w -= Z.y.after, v.y -= Z.y.after);
      {
        const J = Yl(v, _);
        D.x = _.width - J.x.before - J.x.after, D.y = _.height - J.y.before - J.y.after, T += J.x.before, v.x += J.x.before, w += J.y.before, v.y += J.y.before;
      }
      break;
    }
    const M = Kl(x.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: pe(Ji(w)), left: e.isRtl.value ? void 0 : pe(Ji(T)), right: e.isRtl.value ? pe(Ji(-T)) : void 0, minWidth: pe(M === "y" ? Math.min(o.value, g.width) : o.value), maxWidth: pe(Mc(Us(D.x, o.value === 1 / 0 ? 0 : o.value, l.value))), maxHeight: pe(Mc(Us(D.y, a.value === 1 / 0 ? 0 : a.value, u.value))) }), { available: D, contentBox: v, flipped: R };
  }
  return le(() => [s.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => S()), dt(() => {
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
function Ji(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Mc(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ro = true;
const Js = [];
function Wy(e) {
  !Ro || Js.length ? (Js.push(e), Io()) : (Ro = false, e(), Io());
}
let kc = -1;
function Io() {
  cancelAnimationFrame(kc), kc = requestAnimationFrame(() => {
    const e = Js.shift();
    e && e(), Js.length ? Io() : Ro = true;
  });
}
const jd = { none: null, close: Uy, block: Zy, reposition: Ky }, zy = ne({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in jd } }, "VOverlay-scroll-strategies");
function Gy(e, t) {
  if (!Ie) return;
  let n;
  gn(async () => {
    n == null ? void 0 : n.stop(), t.isActive.value && e.scrollStrategy && (n = $r(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      var _a2;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (_a2 = jd[e.scrollStrategy]) == null ? void 0 : _a2.call(jd, t, e, n);
    }));
  }), ct(() => {
    n == null ? void 0 : n.stop();
  });
}
function Uy(e) {
  function t(n) {
    e.isActive.value = false;
  }
  Wd(Ta(e.target.value, e.contentEl.value), t);
}
function Zy(e, t) {
  var _a2;
  const n = (_a2 = e.root.value) == null ? void 0 : _a2.offsetParent, r = Ta(e.target.value, e.contentEl.value), s = [.../* @__PURE__ */ new Set([...Ys(r, t.contained ? n : void 0), ...Ys(e.contentEl.value, t.contained ? n : void 0)])].filter((a) => !a.classList.contains("v-overlay-scroll-blocked")), i = window.innerWidth - document.documentElement.offsetWidth, o = ((a) => ya(a) && a)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), s.forEach((a, l) => {
    a.style.setProperty("--v-body-scroll-x", pe(-a.scrollLeft)), a.style.setProperty("--v-body-scroll-y", pe(-a.scrollTop)), a !== document.documentElement && a.style.setProperty("--v-scrollbar-offset", pe(i)), a.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    s.forEach((a, l) => {
      const u = parseFloat(a.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(a.style.getPropertyValue("--v-body-scroll-y")), f = a.style.scrollBehavior;
      a.style.scrollBehavior = "auto", a.style.removeProperty("--v-body-scroll-x"), a.style.removeProperty("--v-body-scroll-y"), a.style.removeProperty("--v-scrollbar-offset"), a.classList.remove("v-overlay-scroll-blocked"), a.scrollLeft = -u, a.scrollTop = -c, a.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ky(e, t, n) {
  let r = false, s = -1, i = -1;
  function o(a) {
    Wy(() => {
      var _a2, _b2;
      const l = performance.now();
      (_b2 = (_a2 = e.updateLocation).value) == null ? void 0 : _b2.call(_a2, a), r = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    n.run(() => {
      Wd(Ta(e.target.value, e.contentEl.value), (a) => {
        r ? (cancelAnimationFrame(s), s = requestAnimationFrame(() => {
          s = requestAnimationFrame(() => {
            o(a);
          });
        })) : o(a);
      });
    });
  }), ct(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(s);
  });
}
function Ta(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !(t == null ? void 0 : t.contains(n))) : e ?? t;
}
function Wd(e, t) {
  const n = [document, ...Ys(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, { passive: true });
  }), ct(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const Oo = Symbol.for("vuetify:v-menu"), Yy = ne({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
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
  function s() {
    return r(true);
  }
  function i(o) {
    return r(false, o);
  }
  return { clearDelay: n, runOpenDelay: s, runCloseDelay: i };
}
const Xy = ne({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Yy() }, "VOverlay-activator");
function Jy(e, t) {
  let { isActive: n, isTop: r, contentEl: s } = t;
  const i = Ze("useActivator"), o = X();
  let a = false, l = false, u = true;
  const c = H(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = H(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), { runOpenDelay: d, runCloseDelay: m } = qy(e, (w) => {
    w === (e.openOnHover && a || c.value && l) && !(e.openOnHover && n.value && !r.value) && (n.value !== w && (u = true), n.value = w);
  }), b = X(), g = { onClick: (w) => {
    w.stopPropagation(), o.value = w.currentTarget || w.target, n.value || (b.value = [w.clientX, w.clientY]), n.value = !n.value;
  }, onMouseenter: (w) => {
    a = true, o.value = w.currentTarget || w.target, d();
  }, onMouseleave: (w) => {
    a = false, m();
  }, onFocus: (w) => {
    iv(w.target, ":focus-visible") !== false && (l = true, w.stopPropagation(), o.value = w.currentTarget || w.target, d());
  }, onBlur: (w) => {
    l = false, w.stopPropagation(), m({ minDelay: 1 });
  } }, S = H(() => {
    const w = {};
    return f.value && (w.onClick = g.onClick), e.openOnHover && (w.onMouseenter = g.onMouseenter, w.onMouseleave = g.onMouseleave), c.value && (w.onFocus = g.onFocus, w.onBlur = g.onBlur), w;
  }), v = H(() => {
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
      const D = Me(Oo, null);
      w.onClick = () => {
        n.value = false, D == null ? void 0 : D.closeParents();
      };
    }
    return w;
  }), y = H(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      u && (a = true, u = false, d());
    }, w.onMouseleave = () => {
      a = false, m();
    }), w;
  });
  le(r, (w) => {
    var _a2;
    w && (e.openOnHover && !a && (!c.value || !l) || c.value && !l && (!e.openOnHover || !a)) && !((_a2 = s.value) == null ? void 0 : _a2.contains(document.activeElement)) && (n.value = false);
  }), le(n, (w) => {
    w || setTimeout(() => {
      b.value = void 0;
    });
  }, { flush: "post" });
  const A = bo();
  gn(() => {
    A.value && dt(() => {
      o.value = A.el;
    });
  });
  const _ = bo(), x = H(() => e.target === "cursor" && b.value ? b.value : _.value ? _.el : zd(e.target, i) || o.value), E = H(() => Array.isArray(x.value) ? void 0 : x.value);
  let T;
  return le(() => !!e.activator, (w) => {
    w && Ie ? (T = $r(), T.run(() => {
      Qy(e, i, { activatorEl: o, activatorEvents: S });
    })) : T && T.stop();
  }, { flush: "post", immediate: true }), ct(() => {
    T == null ? void 0 : T.stop();
  }), { activatorEl: o, activatorRef: A, target: x, targetEl: E, targetRef: _, activatorEvents: S, contentEvents: v, scrimEvents: y };
}
function Qy(e, t, n) {
  let { activatorEl: r, activatorEvents: s } = n;
  le(() => e.activator, (l, u) => {
    if (u && l !== u) {
      const c = a(u);
      c && o(c);
    }
    l && dt(() => i());
  }, { immediate: true }), le(() => e.activatorProps, () => {
    i();
  }), ct(() => {
    o();
  });
  function i() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && fv(l, Re(s.value, u));
  }
  function o() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && dv(l, Re(s.value, u));
  }
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = zd(l, t);
    return r.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, r.value;
  }
}
function zd(e, t) {
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
const e0 = ne({ retainFocus: Boolean, captureFocus: Boolean, disableInitialFocus: Boolean }, "focusTrap"), Os = /* @__PURE__ */ new Map();
let Tc = 0;
function Pc(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(Os.values()).filter((u) => {
    var _a2;
    let { isActive: c, contentEl: f } = u;
    return c.value && ((_a2 = f.value) == null ? void 0 : _a2.contains(t));
  }).map((u) => u.contentEl.value);
  let r, s = t.parentElement;
  for (; s; ) {
    if (n.includes(s)) {
      r = s;
      break;
    }
    s = s.parentElement;
  }
  if (!r) return;
  const i = qn(r).filter((u) => u.tabIndex >= 0);
  if (!i.length) return;
  const o = document.activeElement;
  if (i.length === 1 && i[0].classList.contains("v-list") && i[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const a = i[0], l = i[i.length - 1];
  e.shiftKey && (o === a || a.classList.contains("v-list") && a.contains(o)) && (e.preventDefault(), l.focus()), !e.shiftKey && (o === l || l.classList.contains("v-list") && l.contains(o)) && (e.preventDefault(), a.focus());
}
function t0(e, t) {
  let { isActive: n, localTop: r, contentEl: s } = t;
  const i = Symbol("trap");
  let o = false, a = -1;
  async function l() {
    o = true, a = window.setTimeout(() => {
      o = false;
    }, 100);
  }
  async function u(d) {
    var _a2;
    const m = d.relatedTarget, b = d.target;
    document.removeEventListener("pointerdown", l), document.removeEventListener("keydown", c), await dt(), n.value && !o && m !== b && s.value && nt(r) && ![document, s.value].includes(b) && !s.value.contains(b) && ((_a2 = qn(s.value)[0]) == null ? void 0 : _a2.focus());
  }
  function c(d) {
    if (d.key === "Tab" && (document.removeEventListener("keydown", c), n.value && s.value && d.target && !s.value.contains(d.target))) {
      const m = qn(document.documentElement);
      if (d.shiftKey && d.target === m.at(0) || !d.shiftKey && d.target === m.at(-1)) {
        const b = qn(s.value);
        b.length > 0 && (d.preventDefault(), b[0].focus());
      }
    }
  }
  const f = B(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Ie && (le(() => e.retainFocus, (d) => {
    d ? Os.set(i, { isActive: n, contentEl: s }) : Os.delete(i);
  }, { immediate: true }), le(f, (d) => {
    d ? (document.addEventListener("pointerdown", l), document.addEventListener("focusin", u, { once: true }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, { immediate: true }), Tc++ < 1 && document.addEventListener("keydown", Pc)), ct(() => {
    Os.delete(i), clearTimeout(a), document.removeEventListener("pointerdown", l), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Tc < 1 && document.removeEventListener("keydown", Pc);
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
function s0(e, t) {
  const n = ve(false), r = B(() => n.value || e.eager || t.value);
  le(t, () => n.value = true);
  function s() {
    e.eager || (n.value = false);
  }
  return { isBooted: n, hasContent: r, onAfterLeave: s };
}
function Pa() {
  const t = Ze("useScopeId").vnode.scopeId;
  return { scopeId: t ? { [t]: "" } : void 0 };
}
const Rc = Symbol.for("vuetify:stack"), xr = Ue([]);
function i0(e, t, n) {
  const r = Ze("useStack"), s = !n, i = Me(Rc, void 0), o = Ue({ activeChildren: /* @__PURE__ */ new Set() });
  rt(Rc, o);
  const a = ve(Number(nt(t)));
  bi(e, () => {
    var _a2;
    const c = (_a2 = xr.at(-1)) == null ? void 0 : _a2[1];
    a.value = c ? c + 10 : Number(nt(t)), s && xr.push([r.uid, a.value]), i == null ? void 0 : i.activeChildren.add(r.uid), ct(() => {
      if (s) {
        const f = te(xr).findIndex((d) => d[0] === r.uid);
        xr.splice(f, 1);
      }
      i == null ? void 0 : i.activeChildren.delete(r.uid);
    });
  });
  const l = ve(true);
  return s && gn(() => {
    var _a2;
    const c = ((_a2 = xr.at(-1)) == null ? void 0 : _a2[0]) === r.uid;
    setTimeout(() => l.value = c);
  }), { globalTop: Jn(l), localTop: B(() => !o.activeChildren.size), stackStyles: B(() => ({ zIndex: a.value })) };
}
function o0(e) {
  return { teleportTarget: H(() => {
    const n = e();
    if (n === true || !Ie) return;
    const r = n === false ? document.body : typeof n == "string" ? document.querySelector(n) : n;
    if (r == null) return;
    let s = [...r.children].find((i) => i.matches(".v-overlay-container"));
    return s || (s = document.createElement("div"), s.className = "v-overlay-container", r.appendChild(s)), s;
  }) };
}
function a0() {
  return true;
}
function Gd(e, t, n) {
  if (!e || Ud(e, n) === false) return false;
  const r = fd(t);
  if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && r.host === e.target) return false;
  const s = (typeof n.value == "object" && n.value.include || (() => []))();
  return s.push(t), !s.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Ud(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || a0)(e);
}
function l0(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Gd(e, t, n) && setTimeout(() => {
    Ud(e, n) && r && r(e);
  }, 0);
}
function Ic(e, t) {
  const n = fd(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Oc = { mounted(e, t) {
  const n = (s) => l0(s, e, t), r = (s) => {
    e._clickOutside.lastMousedownWasOutside = Gd(s, e, t);
  };
  Ic(e, (s) => {
    s.addEventListener("click", n, true), s.addEventListener("mousedown", r, true);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: false }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: r };
}, beforeUnmount(e, t) {
  e._clickOutside && (Ic(e, (n) => {
    var _a2;
    if (!n || !((_a2 = e._clickOutside) == null ? void 0 : _a2[t.instance.$.uid])) return;
    const { onClick: r, onMousedown: s } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", r, true), n.removeEventListener("mousedown", s, true);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function c0(e) {
  const { modelValue: t, color: n, ...r } = e;
  return P(sr, { name: "fade-transition", appear: true }, { default: () => [e.modelValue && k("div", Re({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, r), null)] });
}
const Ra = ne({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: true }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, opacity: [Number, String], noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: true }, zIndex: { type: [Number, String], default: 2e3 }, ...Xy(), ...qe(), ...vr(), ...r0(), ...Ny(), ...zy(), ...e0(), ...Gt(), ...Td() }, "VOverlay"), Qs = Pe()({ name: "VOverlay", directives: { vClickOutside: Oc }, inheritAttrs: false, props: { _disableGlobalStack: Boolean, ...ms(Ra(), ["disableInitialFocus"]) }, emits: { "click:outside": (e) => true, "update:modelValue": (e) => true, keydown: (e) => true, afterEnter: () => true, afterLeave: () => true }, setup(e, t) {
  let { slots: n, attrs: r, emit: s } = t;
  const i = Ze("VOverlay"), o = X(), a = X(), l = X(), u = Qt(e, "modelValue"), c = H({ get: () => u.value, set: (L) => {
    L && e.disabled || (u.value = L);
  } }), { themeClasses: f } = sn(e), { rtlClasses: d, isRtl: m } = bs(), { hasContent: b, onAfterLeave: g } = s0(e, c), S = _a(() => typeof e.scrim == "string" ? e.scrim : null), { globalTop: v, localTop: y, stackStyles: A } = i0(c, () => e.zIndex, e._disableGlobalStack), { activatorEl: _, activatorRef: x, target: E, targetEl: T, targetRef: w, activatorEvents: D, contentEvents: R, scrimEvents: N } = Jy(e, { isActive: c, isTop: y, contentEl: l }), { teleportTarget: M } = o0(() => {
    var _a2, _b2, _c2;
    const L = e.attach || e.contained;
    if (L) return L;
    const j = ((_a2 = _ == null ? void 0 : _.value) == null ? void 0 : _a2.getRootNode()) || ((_c2 = (_b2 = i.proxy) == null ? void 0 : _b2.$el) == null ? void 0 : _c2.getRootNode());
    return j instanceof ShadowRoot ? j : false;
  }), { dimensionStyles: $ } = pr(e), Y = n0(), { scopeId: Z } = Pa();
  le(() => e.disabled, (L) => {
    L && (c.value = false);
  });
  const { contentStyles: J, updateLocation: Q } = Fy(e, { isRtl: m, contentEl: l, target: E, isActive: c });
  Gy(e, { root: o, contentEl: l, targetEl: T, target: E, isActive: c, updateLocation: Q });
  function ae(L) {
    s("click:outside", L), e.persistent ? $e() : c.value = false;
  }
  function Oe(L) {
    return c.value && y.value && (!e.scrim || L.target === a.value || L instanceof MouseEvent && L.shadowTarget === a.value);
  }
  t0(e, { isActive: c, localTop: y, contentEl: l }), Ie && le(c, (L) => {
    L ? window.addEventListener("keydown", we) : window.removeEventListener("keydown", we);
  }, { immediate: true }), zt(() => {
    Ie && window.removeEventListener("keydown", we);
  });
  function we(L) {
    var _a2, _b2, _c2;
    L.key === "Escape" && v.value && (((_a2 = l.value) == null ? void 0 : _a2.contains(document.activeElement)) || s("keydown", L), e.persistent ? $e() : (c.value = false, ((_b2 = l.value) == null ? void 0 : _b2.contains(document.activeElement)) && ((_c2 = _.value) == null ? void 0 : _c2.focus())));
  }
  function ie(L) {
    L.key === "Escape" && !v.value || s("keydown", L);
  }
  const he = Dp();
  bi(() => e.closeOnBack, () => {
    Hp(he, (L) => {
      v.value && c.value ? (L(false), e.persistent ? $e() : c.value = false) : L();
    });
  });
  const de = X();
  le(() => c.value && (e.absolute || e.contained) && M.value == null, (L) => {
    if (L) {
      const j = jv(o.value);
      j && j !== document.scrollingElement && (de.value = j.scrollTop);
    }
  });
  function $e() {
    e.noClickAnimation || l.value && An(l.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: So });
  }
  function Ge() {
    s("afterEnter");
  }
  function Ne() {
    g(), s("afterLeave");
  }
  return ze(() => {
    var _a2;
    return k(_e, null, [(_a2 = n.activator) == null ? void 0 : _a2.call(n, { isActive: c.value, targetRef: w, props: Re({ ref: x }, D.value, e.activatorProps) }), Y.value && b.value && P(ih, { disabled: !M.value, to: M.value }, { default: () => [k("div", Re({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, f.value, d.value, e.class], style: [A.value, { "--v-overlay-opacity": e.opacity, top: pe(de.value) }, e.style], ref: o, onKeydown: ie }, Z, r), [P(c0, Re({ color: S, modelValue: c.value && !!e.scrim, ref: a }, N.value), null), P(Wn, { appear: true, persisted: true, transition: e.transition, target: E.value, onAfterEnter: Ge, onAfterLeave: Ne }, { default: () => {
      var _a3;
      return [er(k("div", Re({ ref: l, class: ["v-overlay__content", e.contentClass], style: [$.value, J.value] }, R.value, e.contentProps), [(_a3 = n.default) == null ? void 0 : _a3.call(n, { isActive: c })]), [[sa, c.value], [Oc, { handler: ae, closeConditional: Oe, include: () => [_.value] }]])];
    } })])] })]);
  }), { activatorEl: _, scrimEl: a, target: E, animateClick: $e, contentEl: l, rootEl: o, globalTop: v, localTop: y, updateLocation: Q };
} }), u0 = ne({ id: String, submenu: Boolean, ...ms(Ra({ captureFocus: true, closeDelay: 250, closeOnContentClick: true, locationStrategy: "connected", location: void 0, openDelay: 300, scrim: false, scrollStrategy: "reposition", transition: { component: ty } }), ["absolute"]) }, "VMenu"), f0 = Pe()({ name: "VMenu", props: u0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Qt(e, "modelValue"), { scopeId: s } = Pa(), { isRtl: i } = bs(), o = os(), a = B(() => e.id || `v-menu-${o}`), l = X(), u = Me(Oo, null), c = ve(/* @__PURE__ */ new Set());
  rt(Oo, { register() {
    c.value.add(o);
  }, unregister() {
    c.value.delete(o);
  }, closeParents(g) {
    setTimeout(() => {
      var _a2;
      !c.value.size && !e.persistent && (g == null || ((_a2 = l.value) == null ? void 0 : _a2.contentEl) && !av(g, l.value.contentEl)) && (r.value = false, u == null ? void 0 : u.closeParents());
    }, 40);
  } }), zt(() => u == null ? void 0 : u.unregister()), qu(() => r.value = false), le(r, (g) => {
    g ? u == null ? void 0 : u.register() : u == null ? void 0 : u.unregister();
  }, { immediate: true });
  function f(g) {
    u == null ? void 0 : u.closeParents(g);
  }
  function d(g) {
    var _a2, _b2, _c2, _d2, _e2;
    if (!e.disabled) if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
      if (g.key === "Enter" && (g.target instanceof HTMLTextAreaElement || g.target instanceof HTMLInputElement && g.target.closest("form"))) return;
      g.key === "Enter" && g.preventDefault(), !nd(qn((_a2 = l.value) == null ? void 0 : _a2.contentEl, false), g.shiftKey ? "prev" : "next", (v) => v.tabIndex >= 0) && !e.retainFocus && (r.value = false, (_c2 = (_b2 = l.value) == null ? void 0 : _b2.activatorEl) == null ? void 0 : _c2.focus());
    } else e.submenu && g.key === (i.value ? "ArrowRight" : "ArrowLeft") && (r.value = false, (_e2 = (_d2 = l.value) == null ? void 0 : _d2.activatorEl) == null ? void 0 : _e2.focus());
  }
  function m(g) {
    var _a2;
    if (e.disabled) return;
    const S = (_a2 = l.value) == null ? void 0 : _a2.contentEl;
    S && r.value ? g.key === "ArrowDown" ? (g.preventDefault(), g.stopImmediatePropagation(), Dr(S, "next")) : g.key === "ArrowUp" ? (g.preventDefault(), g.stopImmediatePropagation(), Dr(S, "prev")) : e.submenu && (g.key === (i.value ? "ArrowRight" : "ArrowLeft") ? r.value = false : g.key === (i.value ? "ArrowLeft" : "ArrowRight") && (g.preventDefault(), Dr(S, "first"))) : (e.submenu ? g.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(g.key)) && (r.value = true, g.preventDefault(), setTimeout(() => setTimeout(() => m(g))));
  }
  const b = H(() => Re({ "aria-haspopup": "menu", "aria-expanded": String(r.value), "aria-controls": a.value, "aria-owns": a.value, onKeydown: m }, e.activatorProps));
  return ze(() => {
    const g = Qs.filterProps(e);
    return P(Qs, Re({ ref: l, id: a.value, class: ["v-menu", e.class], style: e.style }, g, { modelValue: r.value, "onUpdate:modelValue": (S) => r.value = S, absolute: true, activatorProps: b.value, location: e.location ?? (e.submenu ? "end" : "bottom"), "onClick:outside": f, onKeydown: d }, s), { activator: n.activator, default: function() {
      for (var S = arguments.length, v = new Array(S), y = 0; y < S; y++) v[y] = arguments[y];
      return P(mn, { root: "VMenu" }, { default: () => {
        var _a2;
        return [(_a2 = n.default) == null ? void 0 : _a2.call(n, ...v)];
      } });
    } });
  }), Pd({ id: a, \u03A8openChildren: c }, l);
} }), At = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t) n[r] = s;
  return n;
}, d0 = Ye({ __name: "AppBackground", setup(e) {
  const t = oa("AppBackground"), n = X(null), r = X(null), s = tg(), i = dr(), o = sg(s.gridInfo, i.worldOffsetDevicePx), a = ig(), l = og(o), u = fg(s.post);
  Xg(s);
  function c(_) {
    return { ..._, edge: { ..._.edge } };
  }
  function f(_) {
    return _.map(c);
  }
  const d = eg({ onSetZones: (_) => s.post({ type: "set_zones", zones: f(_) }), onAddZone: (_) => s.post({ type: "add_zone", zone: c(_) }), onUpdateZone: (_) => s.post({ type: "update_zone", zone: c(_) }), onRemoveZone: (_) => s.post({ type: "remove_zone", id: _ }), onClearZones: () => s.post({ type: "clear_zones" }) }), m = X(false), b = X(false), g = X({ mode: "both", edge: { style: "none", widthCells: 1, opacity: 1 } }), { theme: S } = Hf();
  le(S, (_) => {
    s.post({ type: "set_theme", theme: _ });
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
    const E = Pf(_.clientX, _.clientY, x), T = H1(E, x);
    t.debug("Click \u2192", _.clientX, _.clientY, "\u2192 cell", T.cx, T.cy), s.post({ type: "toggle_cell", cx: T.cx, cy: T.cy, scrollCanvasPx: x.offsetY });
  }
  let A = null;
  return Wt(() => {
    const _ = n.value, x = r.value;
    if (!_ || !x) return;
    const { offscreen: E, gridPitch: T } = u.initialize(_, x);
    s.init(E, T, S.value), t.debug("Worker spawned, gridPitch", T.toFixed(2)), s.on("ready", (w) => {
      t.info(`${w.backend.toUpperCase()} renderer active`), s.post({ type: "set_theme", theme: S.value }), s.post({ type: "set_zones", zones: f(d.zones.value) });
      const D = i.worldOffsetDevicePx.value;
      s.post({ type: "camera", x: D.x, y: D.y });
    }), s.on("zones_state", (w) => d.syncFromWorker(w.zones)), s.on("zones_error", (w) => t.error("Zone update rejected:", w.message)), s.on("first_frame_painted", () => u.revealCanvas()), s.on("error", (w) => {
      w.phase === "gpu-init" ? t.debug(`GPU unavailable (${w.message}) \u2014 CPU fallback in progress`) : t.error(`Renderer error [${w.phase}]:`, w.message);
    }), mg(s), document.addEventListener("click", y), A = l.attachListeners(), a.start(() => s.post({ type: "frame" }));
  }), as(() => {
    a.stop(), u.teardown(), document.removeEventListener("click", y), A == null ? void 0 : A(), s.terminate();
  }), (_, x) => (ce(), me(_e, null, [k("div", { ref_key: "shellRef", ref: n, class: "app-bg-shell" }, [k("canvas", { ref_key: "canvasRef", ref: r, class: "app-bg" }, null, 512)], 512), oe(l).previewStyle.value ? (ce(), me("div", { key: 0, class: "zone-preview-overlay", style: He(oe(l).previewStyle.value) }, null, 4)) : nr("", true), nr("", true)], 64));
} }), m0 = At(d0, [["__scopeId", "data-v-7fbe32f4"]]), h0 = ne({ id: String, interactive: Boolean, text: String, ...ms(Ra({ closeOnBack: false, location: "end", locationStrategy: "connected", eager: true, minWidth: 0, offset: 10, openOnClick: false, openOnHover: true, origin: "auto", scrim: false, scrollStrategy: "reposition", transition: null }), ["absolute", "retainFocus", "captureFocus", "disableInitialFocus"]) }, "VTooltip"), Hr = Pe()({ name: "VTooltip", props: h0(), emits: { "update:modelValue": (e) => true }, setup(e, t) {
  let { slots: n } = t;
  const r = Qt(e, "modelValue"), { scopeId: s } = Pa(), i = os(), o = B(() => e.id || `v-tooltip-${i}`), a = X(), l = H(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = H(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = B(() => e.transition != null ? e.transition : r.value ? "scale-transition" : "fade-transition"), f = H(() => Re({ "aria-describedby": o.value }, e.activatorProps));
  return ze(() => {
    const d = Qs.filterProps(e);
    return P(Qs, Re({ ref: a, class: ["v-tooltip", { "v-tooltip--interactive": e.interactive }, e.class], style: e.style, id: o.value }, d, { modelValue: r.value, "onUpdate:modelValue": (m) => r.value = m, transition: c.value, absolute: true, location: l.value, origin: u.value, role: "tooltip", activatorProps: f.value, _disableGlobalStack: true }, s), { activator: n.activator, default: function() {
      var _a2;
      for (var m = arguments.length, b = new Array(m), g = 0; g < m; g++) b[g] = arguments[g];
      return ((_a2 = n.default) == null ? void 0 : _a2.call(n, ...b)) ?? e.text;
    } });
  }), Pd({}, a);
} }), g0 = Ye({ __name: "ThemeToggle", setup(e) {
  const { preference: t } = Hf();
  return (n, r) => (ce(), tr(dp, { modelValue: oe(t), "onUpdate:modelValue": r[0] || (r[0] = (s) => Ve(t) ? t.value = s : null), mandatory: "", density: "compact", variant: "text", class: "theme-toggle" }, { default: Be(() => [P(Is, { value: "light", icon: oe(Ol), size: "small" }, { default: Be(() => [P(st, { icon: oe(Ol) }, null, 8, ["icon"]), P(Hr, { activator: "parent", location: "bottom", text: "Light" })]), _: 1 }, 8, ["icon"]), P(Is, { value: "system", icon: oe(Rl), size: "small" }, { default: Be(() => [P(st, { icon: oe(Rl) }, null, 8, ["icon"]), P(Hr, { activator: "parent", location: "bottom", text: "System" })]), _: 1 }, 8, ["icon"]), P(Is, { value: "dark", icon: oe(Il), size: "small" }, { default: Be(() => [P(st, { icon: oe(Il) }, null, 8, ["icon"]), P(Hr, { activator: "parent", location: "bottom", text: "Dark" })]), _: 1 }, 8, ["icon"])]), _: 1 }, 8, ["modelValue"]));
} }), v0 = At(g0, [["__scopeId", "data-v-3db27090"]]), p0 = { class: "chrome" }, y0 = { class: "chrome__bar" }, b0 = { class: "chrome__controls" }, _0 = Ye({ __name: "AppChrome", setup(e) {
  const t = X(false);
  return (n, r) => {
    const s = gh("router-link");
    return ce(), me("div", p0, [k("div", y0, [P(s, { to: "/", class: "chrome__mark glass-chip", "aria-label": "Taylor Hale \u2014 home" }, { default: Be(() => [...r[2] || (r[2] = [Zr(" Taylor Hale ", -1)])]), _: 1 }), k("div", b0, [P(v0), P(f0, { modelValue: t.value, "onUpdate:modelValue": r[1] || (r[1] = (i) => t.value = i), location: "bottom end", offset: "10" }, { activator: Be(({ props: i }) => [P(Is, Re(i, { icon: oe(_g), variant: "text", size: "small", class: "chrome__menu-btn", "aria-label": "All destinations" }), null, 16, ["icon"])]), default: Be(() => [P(Dy, { class: "chrome-menu-list", density: "compact" }, { default: Be(() => [(ce(true), me(_e, null, ht(oe(fr), (i) => (ce(), tr(Po, { key: i.id, to: i.route, title: i.label, onClick: r[0] || (r[0] = (o) => t.value = false) }, null, 8, ["to", "title"]))), 128))]), _: 1 })]), _: 1 }, 8, ["modelValue"])])])]);
  };
} }), w0 = At(_0, [["__scopeId", "data-v-d468d2cb"]]);
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const $n = typeof document < "u";
function Zd(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function S0(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Zd(e.default);
}
const Ce = Object.assign;
function Qi(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Pt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Nr = () => {
}, Pt = Array.isArray;
function Vc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
const Kd = /#/g, C0 = /&/g, x0 = /\//g, A0 = /=/g, L0 = /\?/g, Yd = /\+/g, E0 = /%5B/g, M0 = /%5D/g, qd = /%5E/g, k0 = /%60/g, Xd = /%7B/g, T0 = /%7C/g, Jd = /%7D/g, P0 = /%20/g;
function Ia(e) {
  return e == null ? "" : encodeURI("" + e).replace(T0, "|").replace(E0, "[").replace(M0, "]");
}
function R0(e) {
  return Ia(e).replace(Xd, "{").replace(Jd, "}").replace(qd, "^");
}
function Vo(e) {
  return Ia(e).replace(Yd, "%2B").replace(P0, "+").replace(Kd, "%23").replace(C0, "%26").replace(k0, "`").replace(Xd, "{").replace(Jd, "}").replace(qd, "^");
}
function I0(e) {
  return Vo(e).replace(A0, "%3D");
}
function O0(e) {
  return Ia(e).replace(Kd, "%23").replace(L0, "%3F");
}
function V0(e) {
  return O0(e).replace(x0, "%2F");
}
function ts(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const D0 = /\/$/, H0 = (e) => e.replace(D0, "");
function eo(e, t, n = "/") {
  let r, s = {}, i = "", o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), i = t.slice(l, a > 0 ? a : t.length), s = e(i.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = B0(r ?? t, n), { fullPath: r + i + o, path: r, query: s, hash: ts(o) };
}
function N0(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Dc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function F0(e, t, n) {
  const r = t.matched.length - 1, s = n.matched.length - 1;
  return r > -1 && r === s && lr(t.matched[r], n.matched[s]) && Qd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function lr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var n in e) if (!$0(e[n], t[n])) return false;
  return true;
}
function $0(e, t) {
  return Pt(e) ? Hc(e, t) : Pt(t) ? Hc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Hc(e, t) {
  return Pt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function B0(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let i = n.length - 1, o, a;
  for (o = 0; o < r.length; o++) if (a = r[o], a !== ".") if (a === "..") i > 1 && i--;
  else break;
  return n.slice(0, i).join("/") + "/" + r.slice(o).join("/");
}
const an = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let Do = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), to = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function j0(e) {
  if (!e) if ($n) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), H0(e);
}
const W0 = /^[^#]+#/;
function z0(e, t) {
  return e.replace(W0, "#") + t;
}
function G0(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const Ci = () => ({ left: window.scrollX, top: window.scrollY });
function U0(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = G0(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Nc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ho = /* @__PURE__ */ new Map();
function Z0(e, t) {
  Ho.set(e, t);
}
function K0(e) {
  const t = Ho.get(e);
  return Ho.delete(e), t;
}
function Y0(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function em(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Fe = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const tm = Symbol("");
Fe.MATCHER_NOT_FOUND + "", Fe.NAVIGATION_GUARD_REDIRECT + "", Fe.NAVIGATION_ABORTED + "", Fe.NAVIGATION_CANCELLED + "", Fe.NAVIGATION_DUPLICATED + "";
function cr(e, t) {
  return Ce(new Error(), { type: e, [tm]: true }, t);
}
function Kt(e, t) {
  return e instanceof Error && tm in e && (t == null || !!(e.type & t));
}
const q0 = ["params", "query", "hash"];
function X0(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of q0) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function J0(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const s = n[r].replace(Yd, " "), i = s.indexOf("="), o = ts(i < 0 ? s : s.slice(0, i)), a = i < 0 ? null : ts(s.slice(i + 1));
    if (o in t) {
      let l = t[o];
      Pt(l) || (l = t[o] = [l]), l.push(a);
    } else t[o] = a;
  }
  return t;
}
function Fc(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = I0(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pt(r) ? r.map((s) => s && Vo(s)) : [r && Vo(r)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
    });
  }
  return t;
}
function Q0(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = Pt(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
  }
  return t;
}
const eb = Symbol(""), $c = Symbol(""), xi = Symbol(""), Oa = Symbol(""), No = Symbol("");
function Ar() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const s = e.indexOf(r);
      s > -1 && e.splice(s, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function fn(e, t, n, r, s, i = (o) => o()) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () => new Promise((a, l) => {
    const u = (d) => {
      d === false ? l(cr(Fe.NAVIGATION_ABORTED, { from: n, to: t })) : d instanceof Error ? l(d) : Y0(d) ? l(cr(Fe.NAVIGATION_GUARD_REDIRECT, { from: t, to: d })) : (o && r.enterCallbacks[s] === o && typeof d == "function" && o.push(d), a());
    }, c = i(() => e.call(r && r.instances[s], t, n, u));
    let f = Promise.resolve(c);
    e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
  });
}
function no(e, t, n, r, s = (i) => i()) {
  const i = [];
  for (const o of e) for (const a in o.components) {
    let l = o.components[a];
    if (!(t !== "beforeRouteEnter" && !o.instances[a])) if (Zd(l)) {
      const u = (l.__vccOpts || l)[t];
      u && i.push(fn(u, n, r, o, a, s));
    } else {
      let u = l();
      i.push(() => u.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
        const f = S0(c) ? c.default : c;
        o.mods[a] = c, o.components[a] = f;
        const d = (f.__vccOpts || f)[t];
        return d && fn(d, n, r, o, a, s)();
      }));
    }
  }
  return i;
}
function tb(e, t) {
  const n = [], r = [], s = [], i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const a = t.matched[o];
    a && (e.matched.find((u) => lr(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((u) => lr(u, l)) || s.push(l));
  }
  return [n, r, s];
}
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let nb = () => location.protocol + "//" + location.host;
function nm(e, t) {
  const { pathname: n, search: r, hash: s } = t, i = e.indexOf("#");
  if (i > -1) {
    let o = s.includes(e.slice(i)) ? e.slice(i).length : 1, a = s.slice(o);
    return a[0] !== "/" && (a = "/" + a), Dc(a, "");
  }
  return Dc(n, e) + r + s;
}
function rb(e, t, n, r) {
  let s = [], i = [], o = null;
  const a = ({ state: d }) => {
    const m = nm(e, location), b = n.value, g = t.value;
    let S = 0;
    if (d) {
      if (n.value = m, t.value = d, o && o === b) {
        o = null;
        return;
      }
      S = g ? d.position - g.position : 0;
    } else r(m);
    s.forEach((v) => {
      v(n.value, b, { delta: S, type: Do.pop, direction: S ? S > 0 ? to.forward : to.back : to.unknown });
    });
  };
  function l() {
    o = n.value;
  }
  function u(d) {
    s.push(d);
    const m = () => {
      const b = s.indexOf(d);
      b > -1 && s.splice(b, 1);
    };
    return i.push(m), m;
  }
  function c() {
    if (document.visibilityState === "hidden") {
      const { history: d } = window;
      if (!d.state) return;
      d.replaceState(Ce({}, d.state, { scroll: Ci() }), "");
    }
  }
  function f() {
    for (const d of i) d();
    i = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c);
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), { pauseListeners: l, listen: u, destroy: f };
}
function Bc(e, t, n, r = false, s = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: s ? Ci() : null };
}
function sb(e) {
  const { history: t, location: n } = window, r = { value: nm(e, n) }, s = { value: t.state };
  s.value || i(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function i(l, u, c) {
    const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : nb() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), s.value = u;
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](d);
    }
  }
  function o(l, u) {
    i(l, Ce({}, t.state, Bc(s.value.back, l, s.value.forward, true), u, { position: s.value.position }), true), r.value = l;
  }
  function a(l, u) {
    const c = Ce({}, s.value, t.state, { forward: l, scroll: Ci() });
    i(c.current, c, true), i(l, Ce({}, Bc(r.value, l, null), { position: c.position + 1 }, u), false), r.value = l;
  }
  return { location: r, state: s, push: a, replace: o };
}
function ib(e) {
  e = j0(e);
  const t = sb(e), n = rb(e, t.state, t.location, t.replace);
  function r(i, o = true) {
    o || n.pauseListeners(), history.go(i);
  }
  const s = Ce({ location: "", base: e, go: r, createHref: z0.bind(null, e) }, t, n);
  return Object.defineProperty(s, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(s, "state", { enumerable: true, get: () => t.state.value }), s;
}
let En = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var We = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(We || {});
const ob = { type: En.Static, value: "" }, ab = /[a-zA-Z0-9_]/;
function lb(e) {
  if (!e) return [[]];
  if (e === "/") return [[ob]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = We.Static, r = n;
  const s = [];
  let i;
  function o() {
    i && s.push(i), i = [];
  }
  let a = 0, l, u = "", c = "";
  function f() {
    u && (n === We.Static ? i.push({ type: En.Static, value: u }) : n === We.Param || n === We.ParamRegExp || n === We.ParamRegExpEnd ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: En.Param, value: u, regexp: c, repeatable: l === "*" || l === "+", optional: l === "*" || l === "?" })) : t("Invalid state to consume buffer"), u = "");
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
        l === "(" ? n = We.ParamRegExp : ab.test(l) ? d() : (f(), n = We.Static, l !== "*" && l !== "?" && l !== "+" && a--);
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
  return n === We.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), s;
}
const jc = "[^/]+?", cb = { sensitive: false, strict: false, start: true, end: true };
var ot = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(ot || {});
const ub = /[.+*?^${}()[\]/\\]/g;
function fb(e, t) {
  const n = Ce({}, cb, t), r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const u of e) {
    const c = u.length ? [] : [ot.Root];
    n.strict && !u.length && (s += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let m = ot.Segment + (n.sensitive ? ot.BonusCaseSensitive : 0);
      if (d.type === En.Static) f || (s += "/"), s += d.value.replace(ub, "\\$&"), m += ot.Static;
      else if (d.type === En.Param) {
        const { value: b, repeatable: g, optional: S, regexp: v } = d;
        i.push({ name: b, repeatable: g, optional: S });
        const y = v || jc;
        if (y !== jc) {
          m += ot.BonusCustomRegExp;
          try {
            `${y}`;
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${b}" (${y}): ` + _.message);
          }
        }
        let A = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (A = S && u.length < 2 ? `(?:/${A})` : "/" + A), S && (A += "?"), s += A, m += ot.Dynamic, S && (m += ot.BonusOptional), g && (m += ot.BonusRepeatable), y === ".*" && (m += ot.BonusWildcard);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += ot.BonusStrict;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const o = new RegExp(s, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(o), f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const m = c[d] || "", b = i[d - 1];
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
  return { re: o, score: r, keys: i, parse: a, stringify: l };
}
function db(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === ot.Static + ot.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === ot.Static + ot.Segment ? 1 : -1 : 0;
}
function rm(e, t) {
  let n = 0;
  const r = e.score, s = t.score;
  for (; n < r.length && n < s.length; ) {
    const i = db(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Wc(r)) return 1;
    if (Wc(s)) return -1;
  }
  return s.length - r.length;
}
function Wc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const mb = { strict: false, end: true, sensitive: false };
function hb(e, t, n) {
  const r = fb(lb(e.path), n), s = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function gb(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Vc(mb, t);
  function s(f) {
    return r.get(f);
  }
  function i(f, d, m) {
    const b = !m, g = Gc(f);
    g.aliasOf = m && m.record;
    const S = Vc(t, f), v = [g];
    if ("alias" in f) {
      const _ = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const x of _) v.push(Gc(Ce({}, g, { components: m ? m.record.components : g.components, path: x, aliasOf: m ? m.record : g })));
    }
    let y, A;
    for (const _ of v) {
      const { path: x } = _;
      if (d && x[0] !== "/") {
        const E = d.record.path, T = E[E.length - 1] === "/" ? "" : "/";
        _.path = d.record.path + (x && T + x);
      }
      if (y = hb(_, d, S), m ? m.alias.push(y) : (A = A || y, A !== y && A.alias.push(y), b && f.name && !Uc(y) && o(f.name)), sm(y) && l(y), g.children) {
        const E = g.children;
        for (let T = 0; T < E.length; T++) i(E[T], y, m && m.children[T]);
      }
      m = m || y;
    }
    return A ? () => {
      o(A);
    } : Nr;
  }
  function o(f) {
    if (em(f)) {
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
    const d = yb(f, n);
    n.splice(d, 0, f), f.record.name && !Uc(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let m, b = {}, g, S;
    if ("name" in f && f.name) {
      if (m = r.get(f.name), !m) throw cr(Fe.MATCHER_NOT_FOUND, { location: f });
      S = m.record.name, b = Ce(zc(d.params, m.keys.filter((A) => !A.optional).concat(m.parent ? m.parent.keys.filter((A) => A.optional) : []).map((A) => A.name)), f.params && zc(f.params, m.keys.map((A) => A.name))), g = m.stringify(b);
    } else if (f.path != null) g = f.path, m = n.find((A) => A.re.test(g)), m && (b = m.parse(g), S = m.record.name);
    else {
      if (m = d.name ? r.get(d.name) : n.find((A) => A.re.test(d.path)), !m) throw cr(Fe.MATCHER_NOT_FOUND, { location: f, currentLocation: d });
      S = m.record.name, b = Ce({}, d.params, f.params), g = m.stringify(b);
    }
    const v = [];
    let y = m;
    for (; y; ) v.unshift(y.record), y = y.parent;
    return { name: S, path: g, params: b, matched: v, meta: pb(v) };
  }
  e.forEach((f) => i(f));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: i, resolve: u, removeRoute: o, clearRoutes: c, getRoutes: a, getRecordMatcher: s };
}
function zc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Gc(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: vb(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function vb(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Uc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function pb(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function yb(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const i = n + r >> 1;
    rm(e, t[i]) < 0 ? r = i : n = i + 1;
  }
  const s = bb(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function bb(e) {
  let t = e;
  for (; t = t.parent; ) if (sm(t) && rm(e, t) === 0) return t;
}
function sm({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Zc(e) {
  const t = Me(xi), n = Me(Oa), r = H(() => {
    const l = oe(e.to);
    return t.resolve(l);
  }), s = H(() => {
    const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
    if (!c || !f.length) return -1;
    const d = f.findIndex(lr.bind(null, c));
    if (d > -1) return d;
    const m = Kc(l[u - 2]);
    return u > 1 && Kc(c) === m && f[f.length - 1].path !== m ? f.findIndex(lr.bind(null, l[u - 2])) : d;
  }), i = H(() => s.value > -1 && xb(n.params, r.value.params)), o = H(() => s.value > -1 && s.value === n.matched.length - 1 && Qd(n.params, r.value.params));
  function a(l = {}) {
    if (Cb(l)) {
      const u = t[oe(e.replace) ? "replace" : "push"](oe(e.to)).catch(Nr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return { route: r, href: H(() => r.value.href), isActive: i, isExactActive: o, navigate: a };
}
function _b(e) {
  return e.length === 1 ? e[0] : e;
}
const wb = Ye({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Zc, setup(e, { slots: t }) {
  const n = Ue(Zc(e)), { options: r } = Me(xi), s = H(() => ({ [Yc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [Yc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const i = t.default && _b(t.default(n));
    return e.custom ? i : vn("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: s.value }, i);
  };
} }), Sb = wb;
function Cb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function xb(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s) return false;
    } else if (!Pt(s) || s.length !== r.length || r.some((i, o) => i.valueOf() !== s[o].valueOf())) return false;
  }
  return true;
}
function Kc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Yc = (e, t, n) => e ?? t ?? n, Ab = Ye({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = Me(No), s = H(() => e.route || r.value), i = Me($c, 0), o = H(() => {
    let u = oe(i);
    const { matched: c } = s.value;
    let f;
    for (; (f = c[u]) && !f.components; ) u++;
    return u;
  }), a = H(() => s.value.matched[o.value]);
  rt($c, H(() => o.value + 1)), rt(eb, a), rt(No, s);
  const l = X();
  return le(() => [l.value, a.value, e.name], ([u, c, f], [d, m, b]) => {
    c && (c.instances[f] = u, m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards), c.updateGuards.size || (c.updateGuards = m.updateGuards))), u && c && (!m || !lr(c, m) || !d) && (c.enterCallbacks[f] || []).forEach((g) => g(u));
  }, { flush: "post" }), () => {
    const u = s.value, c = e.name, f = a.value, d = f && f.components[c];
    if (!d) return qc(n.default, { Component: d, route: u });
    const m = f.props[c], b = m ? m === true ? u.params : typeof m == "function" ? m(u) : m : null, S = vn(d, Ce({}, b, t, { onVnodeUnmounted: (v) => {
      v.component.isUnmounted && (f.instances[c] = null);
    }, ref: l }));
    return qc(n.default, { Component: S, route: u }) || S;
  };
} });
function qc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Lb = Ab;
function Eb(e) {
  const t = gb(e.routes, e), n = e.parseQuery || J0, r = e.stringifyQuery || Fc, s = e.history, i = Ar(), o = Ar(), a = Ar(), l = ve(an);
  let u = an;
  $n && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Qi.bind(null, (L) => "" + L), f = Qi.bind(null, V0), d = Qi.bind(null, ts);
  function m(L, j) {
    let z, U;
    return em(L) ? (z = t.getRecordMatcher(L), U = j) : U = L, t.addRoute(U, z);
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
      const C = eo(n, L, j.path), I = t.resolve({ path: C.path }, j), V = s.createHref(C.fullPath);
      return Ce(C, I, { params: d(I.params), hash: ts(C.hash), redirectedFrom: void 0, href: V });
    }
    let z;
    if (L.path != null) z = Ce({}, L, { path: eo(n, L.path, j.path).path });
    else {
      const C = Ce({}, L.params);
      for (const I in C) C[I] == null && delete C[I];
      z = Ce({}, L, { params: f(C) }), j.params = f(j.params);
    }
    const U = t.resolve(z, j), ge = L.hash || "";
    U.params = c(d(U.params));
    const h = N0(r, Ce({}, L, { hash: R0(ge), path: U.path })), p = s.createHref(h);
    return Ce({ fullPath: h, hash: ge, query: r === Fc ? Q0(L.query) : L.query || {} }, U, { redirectedFrom: void 0, href: p });
  }
  function y(L) {
    return typeof L == "string" ? eo(n, L, l.value.path) : Ce({}, L);
  }
  function A(L, j) {
    if (u !== L) return cr(Fe.NAVIGATION_CANCELLED, { from: j, to: L });
  }
  function _(L) {
    return T(L);
  }
  function x(L) {
    return _(Ce(y(L), { replace: true }));
  }
  function E(L, j) {
    const z = L.matched[L.matched.length - 1];
    if (z && z.redirect) {
      const { redirect: U } = z;
      let ge = typeof U == "function" ? U(L, j) : U;
      return typeof ge == "string" && (ge = ge.includes("?") || ge.includes("#") ? ge = y(ge) : { path: ge }, ge.params = {}), Ce({ query: L.query, hash: L.hash, params: ge.path != null ? {} : L.params }, ge);
    }
  }
  function T(L, j) {
    const z = u = v(L), U = l.value, ge = L.state, h = L.force, p = L.replace === true, C = E(z, U);
    if (C) return T(Ce(y(C), { state: typeof C == "object" ? Ce({}, ge, C.state) : ge, force: h, replace: p }), j || z);
    const I = z;
    I.redirectedFrom = j;
    let V;
    return !h && F0(r, U, z) && (V = cr(Fe.NAVIGATION_DUPLICATED, { to: I, from: U }), ie(U, U, true, false)), (V ? Promise.resolve(V) : R(I, U)).catch((O) => Kt(O) ? Kt(O, Fe.NAVIGATION_GUARD_REDIRECT) ? O : we(O) : ae(O, I, U)).then((O) => {
      if (O) {
        if (Kt(O, Fe.NAVIGATION_GUARD_REDIRECT)) return T(Ce({ replace: p }, y(O.to), { state: typeof O.to == "object" ? Ce({}, ge, O.to.state) : ge, force: h }), j || I);
      } else O = M(I, U, true, p, ge);
      return N(I, U, O), O;
    });
  }
  function w(L, j) {
    const z = A(L, j);
    return z ? Promise.reject(z) : Promise.resolve();
  }
  function D(L) {
    const j = $e.values().next().value;
    return j && typeof j.runWithContext == "function" ? j.runWithContext(L) : L();
  }
  function R(L, j) {
    let z;
    const [U, ge, h] = tb(L, j);
    z = no(U.reverse(), "beforeRouteLeave", L, j);
    for (const C of U) C.leaveGuards.forEach((I) => {
      z.push(fn(I, L, j));
    });
    const p = w.bind(null, L, j);
    return z.push(p), Ne(z).then(() => {
      z = [];
      for (const C of i.list()) z.push(fn(C, L, j));
      return z.push(p), Ne(z);
    }).then(() => {
      z = no(ge, "beforeRouteUpdate", L, j);
      for (const C of ge) C.updateGuards.forEach((I) => {
        z.push(fn(I, L, j));
      });
      return z.push(p), Ne(z);
    }).then(() => {
      z = [];
      for (const C of h) if (C.beforeEnter) if (Pt(C.beforeEnter)) for (const I of C.beforeEnter) z.push(fn(I, L, j));
      else z.push(fn(C.beforeEnter, L, j));
      return z.push(p), Ne(z);
    }).then(() => (L.matched.forEach((C) => C.enterCallbacks = {}), z = no(h, "beforeRouteEnter", L, j, D), z.push(p), Ne(z))).then(() => {
      z = [];
      for (const C of o.list()) z.push(fn(C, L, j));
      return z.push(p), Ne(z);
    }).catch((C) => Kt(C, Fe.NAVIGATION_CANCELLED) ? C : Promise.reject(C));
  }
  function N(L, j, z) {
    a.list().forEach((U) => D(() => U(L, j, z)));
  }
  function M(L, j, z, U, ge) {
    const h = A(L, j);
    if (h) return h;
    const p = j === an, C = $n ? history.state : {};
    z && (U || p ? s.replace(L.fullPath, Ce({ scroll: p && C && C.scroll }, ge)) : s.push(L.fullPath, ge)), l.value = L, ie(L, j, z, p), we();
  }
  let $;
  function Y() {
    $ || ($ = s.listen((L, j, z) => {
      if (!Ge.listening) return;
      const U = v(L), ge = E(U, Ge.currentRoute.value);
      if (ge) {
        T(Ce(ge, { replace: true, force: true }), U).catch(Nr);
        return;
      }
      u = U;
      const h = l.value;
      $n && Z0(Nc(h.fullPath, z.delta), Ci()), R(U, h).catch((p) => Kt(p, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_CANCELLED) ? p : Kt(p, Fe.NAVIGATION_GUARD_REDIRECT) ? (T(Ce(y(p.to), { force: true }), U).then((C) => {
        Kt(C, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_DUPLICATED) && !z.delta && z.type === Do.pop && s.go(-1, false);
      }).catch(Nr), Promise.reject()) : (z.delta && s.go(-z.delta, false), ae(p, U, h))).then((p) => {
        p = p || M(U, h, false), p && (z.delta && !Kt(p, Fe.NAVIGATION_CANCELLED) ? s.go(-z.delta, false) : z.type === Do.pop && Kt(p, Fe.NAVIGATION_ABORTED | Fe.NAVIGATION_DUPLICATED) && s.go(-1, false)), N(U, h, p);
      }).catch(Nr);
    }));
  }
  let Z = Ar(), J = Ar(), Q;
  function ae(L, j, z) {
    we(L);
    const U = J.list();
    return U.length ? U.forEach((ge) => ge(L, j, z)) : console.error(L), Promise.reject(L);
  }
  function Oe() {
    return Q && l.value !== an ? Promise.resolve() : new Promise((L, j) => {
      Z.add([L, j]);
    });
  }
  function we(L) {
    return Q || (Q = !L, Y(), Z.list().forEach(([j, z]) => L ? z(L) : j()), Z.reset()), L;
  }
  function ie(L, j, z, U) {
    const { scrollBehavior: ge } = e;
    if (!$n || !ge) return Promise.resolve();
    const h = !z && K0(Nc(L.fullPath, 0)) || (U || !z) && history.state && history.state.scroll || null;
    return dt().then(() => ge(L, j, h)).then((p) => p && U0(p)).catch((p) => ae(p, L, j));
  }
  const he = (L) => s.go(L);
  let de;
  const $e = /* @__PURE__ */ new Set(), Ge = { currentRoute: l, listening: true, addRoute: m, removeRoute: b, clearRoutes: t.clearRoutes, hasRoute: S, getRoutes: g, resolve: v, options: e, push: _, replace: x, go: he, back: () => he(-1), forward: () => he(1), beforeEach: i.add, beforeResolve: o.add, afterEach: a.add, onError: J.add, isReady: Oe, install(L) {
    L.component("RouterLink", Sb), L.component("RouterView", Lb), L.config.globalProperties.$router = Ge, Object.defineProperty(L.config.globalProperties, "$route", { enumerable: true, get: () => oe(l) }), $n && !de && l.value === an && (de = true, _(s.location).catch((U) => {
    }));
    const j = {};
    for (const U in an) Object.defineProperty(j, U, { get: () => l.value[U], enumerable: true });
    L.provide(xi, Ge), L.provide(Oa, Tu(j)), L.provide(No, l);
    const z = L.unmount;
    $e.add(L), L.unmount = function() {
      $e.delete(L), $e.size < 1 && (u = an, $ && $(), $ = null, l.value = an, de = false, Q = false), z();
    };
  } };
  function Ne(L) {
    return L.reduce((j, z) => j.then(() => D(z)), Promise.resolve());
  }
  return Ge;
}
function Mb() {
  return Me(xi);
}
function im(e) {
  return Me(Oa);
}
function kb(e, t, n) {
  const r = jf(e, t, n);
  return Math.atan2(r.y - n.h / 2, r.x - n.w / 2);
}
function Tb(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y);
}
function Pb(e, t, n, r, s) {
  if (n <= t) return s;
  const i = Math.min(1, Math.max(0, (e - t) / (n - t)));
  return s + (r - s) * i;
}
function Rb(e, t, n) {
  let r = 1 / 0;
  const s = (i) => {
    i > 0 && i < r && (r = i);
  };
  return t.x > 1e-9 && s((n.maxX - e.x) / t.x), t.x < -1e-9 && s((n.minX - e.x) / t.x), t.y > 1e-9 && s((n.maxY - e.y) / t.y), t.y < -1e-9 && s((n.minY - e.y) / t.y), Number.isFinite(r) ? { x: e.x + t.x * r, y: e.y + t.y * r } : { x: e.x, y: e.y };
}
function Ib(e, t, n, r) {
  const s = { x: Math.cos(t), y: Math.sin(t) }, i = Rb(e, s, n), o = i.x - s.x * r, a = i.y - s.y * r;
  return { x: Math.min(n.maxX - r, Math.max(n.minX + r, o)), y: Math.min(n.maxY - r, Math.max(n.minY + r, a)) };
}
const Ob = ["id", "aria-current", "aria-label"], Vb = Ye({ __name: "WorldPanel", props: { waypointId: {} }, setup(e) {
  const t = e, n = gi(t.waypointId), { camera: r, viewport: s, spacing: i, setCaptureScroll: o } = dr(), a = im(), l = H(() => a.name === t.waypointId), u = H(() => fs(n, i.value)), c = H(() => {
    const b = Math.min(i.value.col, i.value.row) * Tg;
    return Eg(u.value, r.value, s.value, { radius: b, floor: kg });
  }), f = H(() => {
    const b = Hl + (1 - Hl) * c.value;
    return { transform: `translate(${u.value.x}px, ${u.value.y}px) translate(-50%, -50%) scale(${b})`, opacity: c.value, pointerEvents: c.value > 0.5 ? "auto" : "none", maxHeight: l.value ? `${s.value.h}px` : void 0 };
  }), d = X(null);
  function m() {
    l.value && d.value && o(d.value.scrollTop);
  }
  return le(l, (b) => {
    b && d.value && (d.value.scrollTop = 0, o(0));
  }), (b, g) => (ce(), me("section", { id: `panel-${e.waypointId}`, ref_key: "panelRef", ref: d, class: Le(["world-panel", { "world-panel--scroll": l.value }]), style: He(f.value), "aria-current": l.value ? "page" : void 0, "aria-label": oe(n).label, tabindex: "-1", "data-grid-ignore-click": "true", onScroll: m }, [yh(b.$slots, "default", {}, void 0)], 46, Ob));
} }), Lr = At(Vb, [["__scopeId", "data-v-9d4ba97d"]]), at = { name: "Taylor Hale", tagline: "Engineer\xA0\xA0\xB7\xA0\xA0Designer\xA0\xA0\xB7\xA0\xA0Tinkerer", bio: "I build careful software: graphics systems, codegen tools, integration work on short delivery cycles. My background spans computer vision research, contract engineering, and full-stack web development. I'm chasing elegance where low-level detail and high-level design meet. At least once.", location: "Bentonville, AR", email: "hale.taylor.dev@gmail.com", phone: "(615) 681-3779", github: "https://github.com/Anjin-Byte", linkedin: "https://linkedin.com/in/bits-for-bread" }, om = [{ label: "Location", icon: $f, href: "https://maps.google.com/?q=Bentonville,+AR", display: at.location }, { label: "Email", icon: Nf, href: `mailto:${at.email}`, display: at.email }, { label: "Phone", icon: wg, href: `tel:${at.phone.replace(/[^\d+]/g, "")}`, display: at.phone }, { label: "GitHub", icon: Ff, href: at.github, display: "Anjin-Byte" }, { label: "LinkedIn", icon: bg, href: at.linkedin, display: "bits-for-bread" }], Db = [{ label: "Languages", items: ["Python", "Java", "Rust", "C/C++", "JavaScript", "TypeScript", "SQL"] }, { label: "Frameworks & Libraries", items: ["PyTorch", "Pydantic", "CUDA", "OpenCV", "Detectron2", "React", "Vue", "OpenGL / WebGPU"] }, { label: "Tools & Platforms", items: ["Git", "Cargo", "wasm-pack", "pnpm", "Vite", "Docker", "FFmpeg", "CMake", "GitHub Actions", "Postman"] }], Hb = [{ title: "SM83 Emulator", blurb: "An SM83 CPU disassembler and emulator \u2014 translating Game Boy binaries into readable assembly and a custom microcode format, rendered with a WebGL2 LCD-substrate shader for material-grain authenticity.", tech: ["Rust", "WASM", "WebGL2", "Svelte", "TypeScript"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/fragile-canvas/" }, { kind: "source", href: "https://github.com/Anjin-Byte/fragile-canvas" }] }, { title: "Anjin-Byte.github.io", blurb: "This site. Conway's Game of Life running as a WebGPU-rendered engineering-paper background, with a theme system parameterized in OKLab.", tech: ["Rust", "WebGPU", "WASM", "Vue 3", "TypeScript", "WGSL"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Anjin-Byte.github.io" }] }, { title: "Gestalt", blurb: "A GPU-driven voxel mesh renderer built with Rust + WASM + Svelte 5 + WebGPU.", tech: ["Rust", "WASM", "WebGPU", "Svelte 5"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/Gestalt/" }, { kind: "source", href: "https://github.com/Anjin-Byte/Gestalt" }] }, { title: "Adaptive Ray Tracer", blurb: 'A first-principles ray tracer based on "Ray Tracing in One Weekend," extended with entropy-based heuristics that dynamically adjust sample density for rendering efficiency.', tech: ["C++", "Rendering"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/shiny-parakeet" }] }, { title: "SIBR SDF Lattice Generator", blurb: "A Rust API for generating printable lattice meshes via SDF. Supports cubic, Kelvin, and BccXy unit cells; produces STL through a marching-cubes pipeline with Taubin smoothing and optional QEM decimation.", tech: ["Rust", "SDF", "Marching Cubes", "Mesh Processing"], links: [{ kind: "demo", href: "https://anjin-byte.github.io/WoodwardFormanLatticeGen/" }, { kind: "source", href: "https://github.com/Anjin-Byte/SIBR_SDF_Lattice_Generator" }] }, { title: "Heightfield Filters", blurb: "A Rust image-processing suite for terrain heightfields \u2014 hexagonal-kernel aggregation, Sobel/Prewitt edge detection, and extraction of structural lines (crests, thalwegs, convex/concave ridges) from raw .r32 elevation rasters. Parallelized with Rayon.", tech: ["Rust", "Image Processing", "Terrain Analysis", "Rayon"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/probable-eureka" }] }, { title: "Schmith", blurb: "A Python CLI that generates C# DataObjects from API specifications. Supports deterministic and LLM-augmented (Anthropic, OpenAI) generation with stable, reproducible output and partial regeneration that preserves downstream hand-edits as specs evolve.", tech: ["Python", "C#", "LLM", "Anthropic", "OpenAI", "CLI"], links: [{ kind: "source", href: "https://github.com/Anjin-Byte/Schmith" }] }], Nb = [{ role: "Dispatcher \xB7 NW: Nationwide Service & Projects", company: "Wachter, Inc.", location: "Bentonville, AR", dates: "Nov 2025 \u2013 Present", highlights: ["Coordinate nationwide dispatch of service technicians for low-voltage networking projects, maintaining an updated schedule in a high-volume, time-sensitive environment.", "Act as central coordination point between project managers, field technicians, and clients \u2014 translating job requirements into execution and closing communication gaps.", "Manage full lifecycle of service tickets across multiple concurrent projects: creation, assignment, progress tracking, and closeout deliverables."] }, { role: "Contract Developer \u2014 XChange Connector Engineering", company: "Pipeline Data Services", location: "Remote", dates: "Sep 2025 \u2013 Present", tech: ["C#", ".NET", "XChange SDK", "REST", "Python"], highlights: ["Delivered 5 production-ready connectors on an accelerated timeline, unifying client data across workforce-management and project-planning systems via Trimble's App Xchange platform.", "Designed an automated contract-testing framework validating API documentation, client data, and XChange Data Objects \u2014 reducing T&E cycles by 45%."] }, { role: "AI Systems Developer \u2014 SBIR Phase I Prototype", company: "Brynhild Industries", location: "Washington, DC \xB7 Remote", dates: "Feb 2024 \u2013 Apr 2025", tech: ["Python", "Pydantic", "anytree", "OpenAI API"], highlights: ["Built a recursive task-decomposition engine that transformed open-ended prompts into structured task trees, enabling downstream agent assignment and process automation.", "Wrote duplicate-detection and best-fit specialist-assignment logic, demonstrating schema-bound agent coordination for planning workflows."] }, { role: "Data Collection & Model Training", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Jul 2023 \u2013 Jun 2024", tech: ["Python", "OpenCV", "FFmpeg", "Detectron2", "PyTorch"], highlights: ["Engineered an end-to-end video-to-training pipeline \u2014 ingesting raw multi-device footage, parallelizing instance segmentation with Detectron2, and aligning outputs to CASIA-B gait dataset standards \u2014 producing model-ready training data for gait-recognition research."] }, { role: "Graduate Research Assistant", company: "UARK Computer Vision & Image Understanding Lab", location: "Fayetteville, AR", dates: "Aug 2021 \u2013 Feb 2022", highlights: ["Built labeled datasets of thousands of taxonomically verified specimens and prototyped a detection + classification pipeline for species-level insect identification \u2014 targeting early-warning systems for agricultural pest outbreaks."] }, { role: "Internship", company: "Daybright Financial", location: "Brentwood, TN \xB7 Chennai, India", dates: "Apr 2021 \u2013 May 2022", highlights: ["Connected rich-text HTML email templates to Oracle databases via PL/SQL (UTL_MAIL, UTL_SMTP) to automate internal and customer-facing communications with consistent rendering across mail clients."] }], Fb = [{ degree: "BA", school: "University of Arkansas", field: "Computer Science", location: "Fayetteville, AR", dates: "Graduated 2024", focus: "GPGPU Programming" }], $b = { id: "hero", class: "hero-section" }, Bb = { class: "hero-frame glass-panel glass-panel--strong" }, jb = { class: "hero-main" }, Wb = { class: "hero-kicker glass-chip section-kicker" }, zb = { class: "hero-name section-heading" }, Gb = { class: "hero-tagline" }, Ub = { class: "hero-bio" }, Zb = { class: "hero-actions" }, Kb = { href: "#projects", class: "hero-link hero-link--primary" }, Yb = { class: "hero-rail" }, qb = { class: "hero-note quiet-sheet" }, Xb = { class: "skills-block" }, Jb = { class: "skill-label" }, Qb = { class: "skill-items" }, e2 = { class: "hero-note quiet-sheet" }, t2 = { class: "hero-links" }, n2 = ["href"], r2 = Ye({ __name: "HeroSection", setup(e) {
  const t = om.filter((n) => n.label === "Email" || n.label === "GitHub" || n.label === "LinkedIn");
  return (n, r) => (ce(), me("section", $b, [P(_s, { class: "hero-container" }, { default: Be(() => [k("div", Bb, [k("div", jb, [k("span", Wb, [P(st, { icon: oe($f), class: "hero-location-icon" }, null, 8, ["icon"]), Zr(ye(oe(at).location), 1)]), k("h1", zb, ye(oe(at).name), 1), k("p", Gb, ye(oe(at).tagline), 1), k("p", Ub, ye(oe(at).bio), 1), k("div", Zb, [k("a", Kb, [r[0] || (r[0] = Zr(" View selected work ", -1)), P(st, { icon: oe(gg), class: "hero-link-icon" }, null, 8, ["icon"])]), r[1] || (r[1] = k("a", { href: "#resume", class: "hero-link" }, "Resume", -1))])]), k("aside", Yb, [k("section", qb, [r[2] || (r[2] = k("p", { class: "hero-note-label" }, "Capabilities", -1)), k("div", Xb, [(ce(true), me(_e, null, ht(oe(Db), (s) => (ce(), me("div", { key: s.label, class: "skill-group" }, [k("span", Jb, ye(s.label), 1), k("span", Qb, ye(s.items.join("  \xB7  ")), 1)]))), 128))])]), k("section", e2, [r[3] || (r[3] = k("p", { class: "hero-note-label" }, "Elsewhere", -1)), k("div", t2, [(ce(true), me(_e, null, ht(oe(t), (s) => (ce(), me("a", { key: s.label, href: s.href, class: "hero-meta-link", target: "_blank", rel: "noopener noreferrer" }, [P(st, { icon: s.icon, class: "hero-meta-link-icon" }, null, 8, ["icon"]), k("span", null, ye(s.display ?? s.label), 1)], 8, n2))), 128))])])])])]), _: 1 })]));
} }), s2 = At(r2, [["__scopeId", "data-v-2df64b8e"]]), Fo = { demo: { ariaLabel: "Live demo", icon: Pl, label: "Demo", priority: 0 }, source: { ariaLabel: "GitHub repository", icon: Ff, label: "Source", priority: 1 }, writeup: { ariaLabel: "Project writeup", icon: Sg, label: "Writeup", priority: 2 }, video: { ariaLabel: "Project video", icon: Pl, label: "Video", priority: 3 }, docs: { ariaLabel: "Project documentation", icon: pg, label: "Docs", priority: 4 } };
function i2(e, t) {
  return Fo[e].priority - Fo[t].priority;
}
function o2(e) {
  return [...e.links ?? []].sort((t, n) => i2(t.kind, n.kind)).map((t) => ({ ...t, ...Fo[t.kind] }));
}
function Xc(e, t) {
  const n = o2(e);
  return t === "featured" ? n : n.slice(0, 2);
}
const a2 = { id: "projects", class: "demos-section" }, l2 = { key: 0, class: "project-feature glass-panel" }, c2 = { class: "project-feature-body" }, u2 = { class: "project-feature-title" }, f2 = { class: "project-feature-blurb" }, d2 = { class: "project-feature-tech" }, m2 = { class: "project-feature-actions" }, h2 = ["href", "aria-label"], g2 = { class: "project-index" }, v2 = { class: "project-item-head" }, p2 = { class: "project-item-title" }, y2 = { key: 0, class: "project-item-links", "aria-label": "Project links" }, b2 = ["href", "aria-label"], _2 = { class: "project-item-blurb" }, w2 = { class: "project-item-tech" }, S2 = Ye({ __name: "ProjectsSection", setup(e) {
  const [t, ...n] = Hb, r = t ? { ...t, visibleLinks: Xc(t, "featured") } : null, s = n.map((i) => ({ ...i, visibleLinks: Xc(i, "compact") }));
  return (i, o) => (ce(), me("section", a2, [P(_s, { class: "projects-container" }, { default: Be(() => [o[1] || (o[1] = k("div", { class: "projects-head" }, [k("div", { class: "projects-heading" }, [k("span", { class: "glass-chip section-kicker" }, "Selected work"), k("h2", { class: "section-heading projects-title" }, "Small things, built carefully.")]), k("p", { class: "section-intro projects-intro" }, " Projects spanning graphics, emulation, mesh generation, and interface engineering. ")], -1)), oe(r) ? (ce(), me("article", l2, [k("div", c2, [o[0] || (o[0] = k("span", { class: "project-feature-label" }, "Featured project", -1)), k("h3", u2, ye(oe(r).title), 1), k("p", f2, ye(oe(r).blurb), 1), k("div", d2, [(ce(true), me(_e, null, ht(oe(r).tech, (a) => (ce(), me("span", { key: a, class: "project-tech-tag" }, ye(a), 1))), 128))])]), k("div", m2, [(ce(true), me(_e, null, ht(oe(r).visibleLinks, (a) => (ce(), me("a", { key: a.kind, href: a.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-link", { "project-link--demo": a.kind === "demo" }]), "aria-label": a.ariaLabel }, [P(st, { icon: a.icon }, null, 8, ["icon"]), k("span", null, ye(a.label), 1), P(Hr, { activator: "parent", location: "top", text: a.ariaLabel }, null, 8, ["text"])], 10, h2))), 128))])])) : nr("", true), k("div", g2, [(ce(true), me(_e, null, ht(oe(s), (a) => (ce(), me("article", { key: a.title, class: "project-item quiet-sheet" }, [k("header", v2, [k("h3", p2, ye(a.title), 1), a.visibleLinks.length ? (ce(), me("div", y2, [(ce(true), me(_e, null, ht(a.visibleLinks, (l) => (ce(), me("a", { key: l.kind, href: l.href, target: "_blank", rel: "noopener noreferrer", class: Le(["project-item-link", { "project-item-link--demo": l.kind === "demo" }]), "aria-label": l.ariaLabel }, [P(st, { icon: l.icon }, null, 8, ["icon"]), P(Hr, { activator: "parent", location: "top", text: l.ariaLabel }, null, 8, ["text"])], 10, b2))), 128))])) : nr("", true)]), k("p", _2, ye(a.blurb), 1), k("div", w2, [(ce(true), me(_e, null, ht(a.tech, (l) => (ce(), me("span", { key: l, class: "project-tech-tag" }, ye(l), 1))), 128))])]))), 128))])]), _: 1 })]));
} }), C2 = At(S2, [["__scopeId", "data-v-370ff70d"]]), x2 = { id: "resume", class: "resume-section" }, A2 = { class: "timeline" }, L2 = { class: "entry-rail" }, E2 = { class: "entry-dates glass-chip" }, M2 = { class: "entry quiet-sheet" }, k2 = { class: "entry-head" }, T2 = { class: "entry-titleblock" }, P2 = { class: "entry-role" }, R2 = { class: "entry-subhead" }, I2 = { class: "entry-company" }, O2 = { class: "entry-work-location" }, V2 = { class: "entry-bullets" }, D2 = { key: 0, class: "entry-tech" }, H2 = { class: "entry-tech-items" }, N2 = { class: "entry-head" }, F2 = { class: "entry-titleblock" }, $2 = { class: "entry-role" }, B2 = { class: "entry-company" }, j2 = { class: "entry-meta" }, W2 = { class: "entry-dates" }, z2 = { class: "entry-location" }, G2 = { key: 0, class: "entry-focus" }, U2 = Ye({ __name: "ResumeSection", setup(e) {
  return (t, n) => (ce(), me("section", x2, [P(_s, { class: "resume-container" }, { default: Be(() => [n[2] || (n[2] = k("div", { class: "resume-head" }, [k("div", { class: "resume-heading" }, [k("span", { class: "glass-chip section-kicker" }, "Resume"), k("h2", { class: "section-heading resume-title" }, "Experience")])], -1)), k("ol", A2, [(ce(true), me(_e, null, ht(oe(Nb), (r) => (ce(), me("li", { key: `${r.company}-${r.dates}`, class: "timeline-row" }, [k("div", L2, [k("span", E2, ye(r.dates), 1)]), k("article", M2, [k("header", k2, [k("div", T2, [k("h3", P2, ye(r.role), 1), k("div", R2, [k("p", I2, ye(r.company), 1), k("span", O2, ye(r.location), 1)])])]), k("ul", V2, [(ce(true), me(_e, null, ht(r.highlights, (s, i) => (ce(), me("li", { key: i }, ye(s), 1))), 128))]), r.tech ? (ce(), me("div", D2, [n[0] || (n[0] = k("span", { class: "entry-tech-label" }, "Stack", -1)), k("span", H2, ye(r.tech.join("  \xB7  ")), 1)])) : nr("", true)])]))), 128))]), n[3] || (n[3] = k("div", { class: "edu-head" }, [k("span", { class: "glass-chip section-kicker" }, "Education")], -1)), (ce(true), me(_e, null, ht(oe(Fb), (r) => (ce(), me("div", { key: `${r.school}-${r.degree}`, class: "education-card glass-panel" }, [k("header", N2, [k("div", F2, [k("h3", $2, ye(r.degree) + " \u2014 " + ye(r.field), 1), k("p", B2, ye(r.school), 1)]), k("div", j2, [k("span", W2, ye(r.dates), 1), k("span", z2, ye(r.location), 1)])]), r.focus ? (ce(), me("p", G2, [n[1] || (n[1] = k("span", { class: "entry-tech-label" }, "Focus", -1)), Zr(" " + ye(r.focus), 1)])) : nr("", true)]))), 128))]), _: 1 })]));
} }), Z2 = At(U2, [["__scopeId", "data-v-081aa046"]]), K2 = ["href", "aria-label"], Y2 = { class: "contact-text" }, q2 = Ye({ __name: "ContactStrip", props: { dense: { type: Boolean } }, setup(e) {
  return (t, n) => (ce(), me("div", { class: Le(["contact-strip", { "is-dense": e.dense }]) }, [(ce(true), me(_e, null, ht(oe(om), (r) => (ce(), me("a", { key: r.label, href: r.href, "aria-label": r.label, target: "_blank", rel: "noopener noreferrer", class: "contact-link" }, [P(st, { icon: r.icon, class: "contact-icon" }, null, 8, ["icon"]), k("span", Y2, ye(r.display ?? r.label), 1)], 8, K2))), 128))], 2));
} }), X2 = At(q2, [["__scopeId", "data-v-0c3dbac0"]]), J2 = { id: "contact", class: "contact-section" }, Q2 = { class: "contact-band glass-panel" }, e_ = Ye({ __name: "ContactSection", setup(e) {
  return (t, n) => (ce(), me("section", J2, [P(_s, { class: "contact-container" }, { default: Be(() => [k("div", Q2, [n[0] || (n[0] = k("div", { class: "contact-head" }, [k("span", { class: "glass-chip section-kicker" }, "Contact"), k("h2", { class: "contact-title" }, "Open to interesting problems."), k("p", { class: "contact-copy" })], -1)), P(X2, { class: "contact-strip-wrap" })])]), _: 1 })]));
} }), t_ = At(e_, [["__scopeId", "data-v-95eff47f"]]), n_ = { class: "about-section" }, r_ = { class: "content-surface about-card" }, s_ = { class: "section-heading" }, i_ = { class: "about-tagline" }, o_ = { class: "section-intro" }, a_ = { class: "about-meta" }, l_ = Ye({ __name: "AboutSection", setup(e) {
  return (t, n) => (ce(), me("section", n_, [P(_s, { class: "about-container" }, { default: Be(() => [k("div", r_, [n[0] || (n[0] = k("p", { class: "section-kicker" }, "About", -1)), k("h2", s_, ye(oe(at).name), 1), k("p", i_, ye(oe(at).tagline), 1), k("p", o_, ye(oe(at).bio), 1), k("p", a_, ye(oe(at).location), 1)])]), _: 1 })]));
} }), c_ = At(l_, [["__scopeId", "data-v-b03b1108"]]), u_ = Ye({ __name: "WorldStage", setup(e) {
  const { cameraStyle: t, setViewport: n, isAnimating: r } = dr(), s = X(null);
  let i = null;
  return Wt(() => {
    const o = s.value;
    if (!o) return;
    const a = () => n(o.clientWidth, o.clientHeight);
    a(), i = new ResizeObserver(a), i.observe(o);
  }), as(() => i == null ? void 0 : i.disconnect()), (o, a) => (ce(), me("div", { ref_key: "stageRef", ref: s, class: "world-stage" }, [k("div", { class: Le(["world-plane", { "world-plane--animating": oe(r) }]), style: He(oe(t)) }, [P(Lr, { "waypoint-id": "hero" }, { default: Be(() => [P(s2)]), _: 1 }), P(Lr, { "waypoint-id": "projects" }, { default: Be(() => [P(C2)]), _: 1 }), P(Lr, { "waypoint-id": "resume" }, { default: Be(() => [P(Z2)]), _: 1 }), P(Lr, { "waypoint-id": "contact" }, { default: Be(() => [P(t_)]), _: 1 }), P(Lr, { "waypoint-id": "about" }, { default: Be(() => [P(c_)]), _: 1 })], 6)], 512));
} }), f_ = At(u_, [["__scopeId", "data-v-0dbf5244"]]);
function Jc(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function d_(e, t, n) {
  const r = Math.abs(e.x - (t.minX + n)), s = Math.abs(e.x - (t.maxX - n)), i = Math.abs(e.y - (t.minY + n)), o = Math.abs(e.y - (t.maxY - n)), a = Math.min(r, s, i, o);
  return a === r ? "L" : a === s ? "R" : a === i ? "T" : "B";
}
function Qc(e, t) {
  e.wall === "L" ? e.x = t.minX + e.r : e.wall === "R" ? e.x = t.maxX - e.r : e.wall === "T" ? e.y = t.minY + e.r : e.y = t.maxY - e.r, e.x = Jc(e.x, t.minX + e.r, t.maxX - e.r), e.y = Jc(e.y, t.minY + e.r, t.maxY - e.r);
}
function m_(e, t) {
  const n = e.r + t.r;
  if (e.wall === t.wall) {
    const o = e.wall === "L" || e.wall === "R", a = o ? t.y - e.y : t.x - e.x, l = Math.abs(a);
    if (l < n) {
      const u = (n - l) / 2, c = a >= 0 ? 1 : -1;
      o ? (e.y -= c * u, t.y += c * u) : (e.x -= c * u, t.x += c * u);
    }
    return;
  }
  const r = t.x - e.x, s = t.y - e.y, i = Math.hypot(r, s);
  if (i > 1e-6 && i < n) {
    const o = (n - i) / 2;
    e.x -= r / i * o, e.y -= s / i * o, t.x += r / i * o, t.y += s / i * o;
  }
}
function h_(e, t, n) {
  const r = e.map((s) => {
    const i = (s.pos.x - s.prevPos.x) * n.friction, o = (s.pos.y - s.prevPos.y) * n.friction, a = (s.target.x - s.pos.x) * n.stiffness, l = (s.target.y - s.pos.y) * n.stiffness;
    return { x: s.pos.x + i + a, y: s.pos.y + o + l, r: s.radius, wall: d_(s.target, t, s.radius) };
  });
  for (const s of r) Qc(s, t);
  for (let s = 0; s < n.iterations; s++) {
    for (let i = 0; i < r.length; i++) for (let o = i + 1; o < r.length; o++) m_(r[i], r[o]);
    for (const i of r) Qc(i, t);
  }
  return r.map((s) => ({ x: s.x, y: s.y }));
}
const g_ = 25.5, v_ = 40, p_ = 0.05, y_ = 720, b_ = 12;
function __(e) {
  return { minX: ji, minY: Vg, maxX: e.w - ji, maxY: e.h - ji };
}
const w_ = () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function S_() {
  const e = dr(), t = im(), n = X([]), r = /* @__PURE__ */ new Map(), s = w_();
  function i(c) {
    const f = e.camera.value, d = e.viewport.value, m = e.spacing.value, b = __(d), g = { x: d.w / 2, y: d.h / 2 }, S = fr.map((M) => {
      const $ = fs(M, m);
      return { wp: M, dist: Tb($, f), bearing: kb($, f, d) };
    }).filter((M) => M.dist > Nl), v = S.map((M) => M.dist), y = v.length ? Math.min(...v) : 0, A = v.length ? Math.max(...v) : 1, _ = Math.min(d.w, d.h), x = Math.min(b_, Math.max(0, p_ * (_ - y_))), E = g_ + x, T = v_ + x, w = S.map((M) => {
      const $ = Pb(M.dist, y, A, E, T), Y = Ib(g, M.bearing, b, $), Z = r.get(M.wp.id) ?? { pos: Y, prevPos: Y };
      return { pos: Z.pos, prevPos: Z.prevPos, target: Y, radius: $ };
    }), D = h_(w, b, { stiffness: c ? 1 : Rg, friction: c ? 0 : Ig, iterations: Og }), R = new Set(S.map((M) => M.wp.id));
    for (const M of [...r.keys()]) R.has(M) || r.delete(M);
    let N = true;
    return n.value = S.map((M, $) => {
      const Y = D[$], Z = w[$].pos;
      r.set(M.wp.id, { pos: Y, prevPos: Z });
      const J = w[$].target;
      return (Math.hypot(Y.x - Z.x, Y.y - Z.y) > 0.3 || Math.hypot(Y.x - J.x, Y.y - J.y) > 0.5) && (N = false), { id: M.wp.id, route: M.wp.route, label: M.wp.label, icon: M.wp.icon, x: Y.x, y: Y.y, radius: w[$].radius, bearing: M.bearing, opacity: Math.min(1, Math.max(0, (M.dist - Nl) / Pg)) };
    }), N;
  }
  let o = 0, a = false;
  function l() {
    const c = i(false);
    if (!e.isAnimating.value && c) {
      a = false, o = 0;
      return;
    }
    o = requestAnimationFrame(l);
  }
  function u() {
    if (s) {
      i(true);
      return;
    }
    a || (a = true, o = requestAnimationFrame(l));
  }
  return le([() => e.camera.value.x, () => e.camera.value.y, () => e.viewport.value, () => e.spacing.value, e.isAnimating, () => t.name], u), Wt(() => s ? i(true) : u()), as(() => {
    o && cancelAnimationFrame(o);
  }), n;
}
const C_ = { class: "compass", "aria-label": "Move to a section" }, x_ = ["aria-label", "title", "onClick"], A_ = Ye({ __name: "CompassNav", setup(e) {
  const t = Mb(), n = S_();
  function r(s) {
    t.push(s);
  }
  return (s, i) => (ce(), me("nav", C_, [(ce(true), me(_e, null, ht(oe(n), (o) => (ce(), me("button", { key: o.id, type: "button", class: "compass__marker", style: He({ transform: `translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`, width: `${o.radius * 2}px`, height: `${o.radius * 2}px`, opacity: o.opacity, pointerEvents: o.opacity > 0.4 ? "auto" : "none" }), "aria-label": `Go to ${o.label}`, title: o.label, onClick: (a) => r(o.route) }, [k("span", { class: "compass__arrow", style: He({ transform: `rotate(${o.bearing}rad)` }), "aria-hidden": "true" }, null, 4), P(st, { icon: o.icon, size: Math.round(o.radius), class: "compass__icon" }, null, 8, ["icon", "size"])], 12, x_))), 128))]));
} }), L_ = At(A_, [["__scopeId", "data-v-8c614831"]]), eu = Symbol.for("vuetify:layout"), E_ = Symbol.for("vuetify:layout-item"), tu = 1e3, M_ = ne({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, "layout"), k_ = (e, t, n, r) => {
  let s = { top: 0, left: 0, right: 0, bottom: 0 };
  const i = [{ id: "", layer: { ...s } }];
  for (const o of e) {
    const a = t.get(o), l = n.get(o), u = r.get(o);
    if (!a || !l || !u) continue;
    const c = { ...s, [a.value]: parseInt(s[a.value], 10) + (u.value ? parseInt(l.value, 10) : 0) };
    i.push({ id: o, layer: c }), s = c;
  }
  return i;
};
function T_(e) {
  const t = Me(eu, null), n = H(() => t ? t.rootZIndex.value - 100 : tu), r = X([]), s = Ue(/* @__PURE__ */ new Map()), i = Ue(/* @__PURE__ */ new Map()), o = Ue(/* @__PURE__ */ new Map()), a = Ue(/* @__PURE__ */ new Map()), l = Ue(/* @__PURE__ */ new Map()), { resizeRef: u, contentRect: c } = vd(), f = H(() => {
    const E = /* @__PURE__ */ new Map(), T = e.overlaps ?? [];
    for (const w of T.filter((D) => D.includes(":"))) {
      const [D, R] = w.split(":");
      if (!r.value.includes(D) || !r.value.includes(R)) continue;
      const N = s.get(D), M = s.get(R), $ = i.get(D), Y = i.get(R);
      !N || !M || !$ || !Y || (E.set(R, { position: N.value, amount: parseInt($.value, 10) }), E.set(D, { position: M.value, amount: -parseInt(Y.value, 10) }));
    }
    return E;
  }), d = H(() => {
    const E = [...new Set([...o.values()].map((w) => w.value))].sort((w, D) => w - D), T = [];
    for (const w of E) {
      const D = r.value.filter((R) => {
        var _a2;
        return ((_a2 = o.get(R)) == null ? void 0 : _a2.value) === w;
      });
      T.push(...D);
    }
    return k_(T, s, i, a);
  }), m = H(() => !Array.from(l.values()).some((E) => E.value)), b = H(() => d.value[d.value.length - 1].layer), g = B(() => ({ "--v-layout-left": pe(b.value.left), "--v-layout-right": pe(b.value.right), "--v-layout-top": pe(b.value.top), "--v-layout-bottom": pe(b.value.bottom), ...m.value ? void 0 : { transition: "none" } })), S = H(() => d.value.slice(1).map((E, T) => {
    let { id: w } = E;
    const { layer: D } = d.value[T], R = i.get(w), N = s.get(w);
    return { id: w, ...D, size: Number(R.value), position: N.value };
  })), v = (E) => S.value.find((T) => T.id === E), y = Ze("createLayout"), A = ve(false);
  return Wt(() => {
    A.value = true;
  }), rt(eu, { register: (E, T) => {
    let { id: w, order: D, position: R, layoutSize: N, elementSize: M, active: $, disableTransitions: Y, absolute: Z } = T;
    o.set(w, D), s.set(w, R), i.set(w, N), a.set(w, $), Y && l.set(w, Y);
    const Q = jn(E_, y == null ? void 0 : y.vnode).indexOf(E);
    Q > -1 ? r.value.splice(Q, 0, w) : r.value.push(w);
    const ae = H(() => S.value.findIndex((he) => he.id === w)), Oe = H(() => n.value + d.value.length * 2 - ae.value * 2), we = H(() => {
      const he = R.value === "left" || R.value === "right", de = R.value === "right", $e = R.value === "bottom", Ge = M.value ?? N.value, Ne = Ge === 0 ? "%" : "px", L = { [R.value]: 0, zIndex: Oe.value, transform: `translate${he ? "X" : "Y"}(${($.value ? 0 : -(Ge === 0 ? 100 : Ge)) * (de || $e ? -1 : 1)}${Ne})`, position: Z.value || n.value !== tu ? "absolute" : "fixed", ...m.value ? void 0 : { transition: "none" } };
      if (!A.value) return L;
      const j = S.value[ae.value], z = f.value.get(w);
      return z && (j[z.position] += z.amount), { ...L, height: he ? `calc(100% - ${j.top}px - ${j.bottom}px)` : M.value ? `${M.value}px` : void 0, left: de ? void 0 : `${j.left}px`, right: de ? `${j.right}px` : void 0, top: R.value !== "bottom" ? `${j.top}px` : void 0, bottom: R.value !== "top" ? `${j.bottom}px` : void 0, width: he ? M.value ? `${M.value}px` : void 0 : `calc(100% - ${j.left}px - ${j.right}px)` };
    }), ie = H(() => ({ zIndex: Oe.value - 1 }));
    return { layoutItemStyles: we, layoutItemScrimStyles: ie, zIndex: Oe };
  }, unregister: (E) => {
    o.delete(E), s.delete(E), i.delete(E), a.delete(E), l.delete(E), r.value = r.value.filter((T) => T !== E);
  }, mainRect: b, mainStyles: g, getLayoutItem: v, items: S, layoutRect: c, rootZIndex: n }), { layoutClasses: B(() => ["v-layout", { "v-layout--full-height": e.fullHeight }]), layoutStyles: B(() => ({ zIndex: t ? n.value : void 0, position: t ? "relative" : void 0, overflow: t ? "hidden" : void 0 })), getLayoutItem: v, items: S, layoutRect: c, layoutRef: u };
}
const P_ = ne({ ...qe(), ...ms(M_(), ["fullHeight"]), ...Gt() }, "VApp"), R_ = Pe()({ name: "VApp", props: P_(), setup(e, t) {
  let { slots: n } = t;
  const r = sn(e), { layoutClasses: s, getLayoutItem: i, items: o, layoutRef: a } = T_({ ...e, fullHeight: true }), { rtlClasses: l } = bs();
  return ze(() => {
    var _a2;
    return k("div", { ref: a, class: Le(["v-application", r.themeClasses.value, s.value, l.value, e.class]), style: He([e.style]) }, [k("div", { class: "v-application__wrap" }, [(_a2 = n.default) == null ? void 0 : _a2.call(n)])]);
  }), { getLayoutItem: i, items: o, theme: r };
} }), I_ = Ye({ __name: "App", setup(e) {
  return (t, n) => (ce(), tr(R_, { class: "app-shell" }, { default: Be(() => [P(m0), P(w0), P(f_), P(L_)]), _: 1 }));
} }), O_ = { collapse: "mdi-chevron-up", complete: "mdi-check", cancel: "mdi-close-circle", close: "mdi-close", delete: "mdi-close-circle", clear: "mdi-close-circle", success: "mdi-check-circle", info: "mdi-information", warning: "mdi-alert-circle", error: "mdi-close-circle", prev: "mdi-chevron-left", next: "mdi-chevron-right", checkboxOn: "mdi-checkbox-marked", checkboxOff: "mdi-checkbox-blank-outline", checkboxIndeterminate: "mdi-minus-box", delimiter: "mdi-circle", sortAsc: "mdi-arrow-up", sortDesc: "mdi-arrow-down", expand: "mdi-chevron-down", menu: "mdi-menu", subgroup: "mdi-menu-down", dropdown: "mdi-menu-down", radioOn: "mdi-radiobox-marked", radioOff: "mdi-radiobox-blank", edit: "mdi-pencil", ratingEmpty: "mdi-star-outline", ratingFull: "mdi-star", ratingHalf: "mdi-star-half-full", loading: "mdi-cached", first: "mdi-page-first", last: "mdi-page-last", unfold: "mdi-unfold-more-horizontal", file: "mdi-paperclip", plus: "mdi-plus", minus: "mdi-minus", calendar: "mdi-calendar", treeviewCollapse: "mdi-menu-down", treeviewExpand: "mdi-menu-right", tableGroupCollapse: "mdi-chevron-down", tableGroupExpand: "mdi-chevron-right", eyeDropper: "mdi-eyedropper", upload: "mdi-cloud-upload", color: "mdi-palette", command: "mdi-apple-keyboard-command", ctrl: "mdi-apple-keyboard-control", space: "mdi-keyboard-space", shift: "mdi-apple-keyboard-shift", alt: "mdi-apple-keyboard-option", enter: "mdi-keyboard-return", arrowup: "mdi-arrow-up", arrowdown: "mdi-arrow-down", arrowleft: "mdi-arrow-left", arrowright: "mdi-arrow-right", backspace: "mdi-backspace", play: "mdi-play", pause: "mdi-pause", fullscreen: "mdi-fullscreen", fullscreenExit: "mdi-fullscreen-exit", volumeHigh: "mdi-volume-high", volumeMedium: "mdi-volume-medium", volumeLow: "mdi-volume-low", volumeOff: "mdi-volume-variant-off", search: "mdi-magnify" }, V_ = { component: (e) => vn(gd, { ...e, class: "mdi" }) };
function D_() {
  return { svg: { component: Ca }, class: { component: gd } };
}
function H_(e) {
  const t = D_(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = V_), pt({ defaultSet: n, sets: t, aliases: { ...O_, vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]], "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z", "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]] } }, e);
}
function ws(e) {
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
function N_(e, t, n) {
  var _a2;
  const r = [];
  let s = [];
  const i = am(e), o = lm(e), a = n ?? ((_a2 = ws(t)) == null ? void 0 : _a2.firstDay) ?? 0, l = (i.getDay() - a + 7) % 7, u = (o.getDay() - a + 7) % 7;
  for (let c = 0; c < l; c++) {
    const f = new Date(i);
    f.setDate(f.getDate() - (l - c)), s.push(f);
  }
  for (let c = 1; c <= o.getDate(); c++) {
    const f = new Date(e.getFullYear(), e.getMonth(), c);
    s.push(f), s.length === 7 && (r.push(s), s = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const f = new Date(o);
    f.setDate(f.getDate() + c), s.push(f);
  }
  return s.length > 0 && r.push(s), r;
}
function Fr(e, t, n) {
  var _a2;
  let r = (n ?? ((_a2 = ws(t)) == null ? void 0 : _a2.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (r = 0);
  const s = new Date(e);
  for (; s.getDay() !== r; ) s.setDate(s.getDate() - 1);
  return s;
}
function F_(e, t) {
  var _a2;
  const n = new Date(e), r = ((((_a2 = ws(t)) == null ? void 0 : _a2.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; ) n.setDate(n.getDate() + 1);
  return n;
}
function am(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function lm(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function $_(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const B_ = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function cm(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (B_.test(e)) return $_(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const nu = new Date(2e3, 0, 2);
function j_(e, t, n) {
  var _a2;
  const r = t ?? ((_a2 = ws(e)) == null ? void 0 : _a2.firstDay) ?? 0;
  return Jf(7).map((s) => {
    const i = new Date(nu);
    return i.setDate(nu.getDate() + r + s), new Intl.DateTimeFormat(e, { weekday: n ?? "narrow" }).format(i);
  });
}
function W_(e, t, n, r) {
  const s = cm(e) ?? /* @__PURE__ */ new Date(), i = r == null ? void 0 : r[t];
  if (typeof i == "function") return i(s, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = { year: "numeric", month: "short", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      o = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const a = s.getDate(), l = new Intl.DateTimeFormat(n, { month: "long" }).format(s);
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
      return new Intl.NumberFormat(n).format(s.getDate());
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
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric" }, new Intl.DateTimeFormat(n, o).format(s).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: true }, new Intl.DateTimeFormat(n, o).format(s).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = { year: "numeric", month: "2-digit", day: "2-digit", hour: "numeric", minute: "numeric", hour12: false }, new Intl.DateTimeFormat(n, o).format(s).replace(/, /g, " ");
    default:
      o = i ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(n, o).format(s);
}
function z_(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), s = zl(String(n.getMonth() + 1), 2, "0"), i = zl(String(n.getDate()), 2, "0");
  return `${r}-${s}-${i}`;
}
function G_(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function U_(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function Z_(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Rn(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function K_(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Y_(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function ns(e) {
  return e.getFullYear();
}
function q_(e) {
  return e.getMonth();
}
function X_(e, t, n, r) {
  const s = ws(t), i = n ?? (s == null ? void 0 : s.firstDay) ?? 0, o = (s == null ? void 0 : s.firstWeekSize) ?? 1;
  return r !== void 0 ? J_(e, t, i, r) : Q_(e, t, i, o);
}
function J_(e, t, n, r) {
  const s = (7 + r - n) % 7, i = Fr(e, t, n), o = Rn(i, 6);
  function a(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let l = ns(i);
  l < ns(o) && a(l + 1) <= s && l++;
  const u = new Date(l, 0, 1), c = a(l), f = c <= s ? Rn(u, -c) : Rn(u, 7 - c);
  return 1 + ti(Va(i), rs(f), "weeks");
}
function Q_(e, t, n, r) {
  const s = Fr(e, t, n), i = Rn(Fr(e, t, n), 6);
  function o(f) {
    const d = new Date(f, 0, 1);
    return 7 - ti(d, Fr(d, t, n), "days");
  }
  let a = ns(s);
  a < ns(i) && o(a + 1) >= r && a++;
  const l = new Date(a, 0, 1), u = o(a), c = u >= r ? Rn(l, u - 7) : Rn(l, u);
  return 1 + ti(Va(s), rs(c), "weeks");
}
function ew(e) {
  return e.getDate();
}
function tw(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function nw(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function rw(e) {
  return e.getHours();
}
function sw(e) {
  return e.getMinutes();
}
function iw(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function ow(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function aw(e, t) {
  return ei(e, t[0]) && uw(e, t[1]);
}
function lw(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function ei(e, t) {
  return e.getTime() > t.getTime();
}
function cw(e, t) {
  return ei(rs(e), rs(t));
}
function uw(e, t) {
  return e.getTime() < t.getTime();
}
function ru(e, t) {
  return e.getTime() === t.getTime();
}
function fw(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function dw(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function mw(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function ti(e, t, n) {
  const r = new Date(e), s = new Date(t);
  switch (n) {
    case "years":
      return r.getFullYear() - s.getFullYear();
    case "quarters":
      return Math.floor((r.getMonth() - s.getMonth() + (r.getFullYear() - s.getFullYear()) * 12) / 4);
    case "months":
      return r.getMonth() - s.getMonth() + (r.getFullYear() - s.getFullYear()) * 12;
    case "weeks":
      return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((r.getTime() - s.getTime()) / 1e3);
    default:
      return r.getTime() - s.getTime();
  }
}
function hw(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function gw(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function vw(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function pw(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function yw(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function rs(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Va(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class bw {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return cm(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return z_(this, t);
  }
  parseISO(t) {
    return G_(t);
  }
  addMinutes(t, n) {
    return U_(t, n);
  }
  addHours(t, n) {
    return Z_(t, n);
  }
  addDays(t, n) {
    return Rn(t, n);
  }
  addWeeks(t, n) {
    return K_(t, n);
  }
  addMonths(t, n) {
    return Y_(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return N_(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Fr(t, this.locale, r);
  }
  endOfWeek(t) {
    return F_(t, this.locale);
  }
  startOfMonth(t) {
    return am(t);
  }
  endOfMonth(t) {
    return lm(t);
  }
  format(t, n) {
    return W_(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return ru(t, n);
  }
  isValid(t) {
    return lw(t);
  }
  isWithinRange(t, n) {
    return aw(t, n);
  }
  isAfter(t, n) {
    return ei(t, n);
  }
  isAfterDay(t, n) {
    return cw(t, n);
  }
  isBefore(t, n) {
    return !ei(t, n) && !ru(t, n);
  }
  isSameDay(t, n) {
    return fw(t, n);
  }
  isSameMonth(t, n) {
    return dw(t, n);
  }
  isSameYear(t, n) {
    return mw(t, n);
  }
  setMinutes(t, n) {
    return gw(t, n);
  }
  setHours(t, n) {
    return hw(t, n);
  }
  setMonth(t, n) {
    return vw(t, n);
  }
  setDate(t, n) {
    return pw(t, n);
  }
  setYear(t, n) {
    return yw(t, n);
  }
  getDiff(t, n, r) {
    return ti(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return j_(this.locale, r, n);
  }
  getYear(t) {
    return ns(t);
  }
  getMonth(t) {
    return q_(t);
  }
  getWeek(t, n, r) {
    const s = n !== void 0 ? Number(n) : void 0, i = r !== void 0 ? Number(r) : void 0;
    return X_(t, this.locale, s, i);
  }
  getDate(t) {
    return ew(t);
  }
  getNextMonth(t) {
    return tw(t);
  }
  getPreviousMonth(t) {
    return nw(t);
  }
  getHours(t) {
    return rw(t);
  }
  getMinutes(t) {
    return sw(t);
  }
  startOfDay(t) {
    return rs(t);
  }
  endOfDay(t) {
    return Va(t);
  }
  startOfYear(t) {
    return iw(t);
  }
  endOfYear(t) {
    return ow(t);
  }
}
const _w = Symbol.for("vuetify:date-options"), su = Symbol.for("vuetify:date-adapter");
function ww(e, t) {
  const n = pt({ adapter: bw, locale: { af: "af-ZA", bg: "bg-BG", ca: "ca-ES", ckb: "", cs: "cs-CZ", de: "de-DE", el: "el-GR", en: "en-US", et: "et-EE", fa: "fa-IR", fi: "fi-FI", hr: "hr-HR", hu: "hu-HU", he: "he-IL", id: "id-ID", it: "it-IT", ja: "ja-JP", ko: "ko-KR", lv: "lv-LV", lt: "lt-LT", nl: "nl-NL", no: "no-NO", pl: "pl-PL", pt: "pt-PT", ro: "ro-RO", ru: "ru-RU", sk: "sk-SK", sl: "sl-SI", srCyrl: "sr-SP", srLatn: "sr-SP", sv: "sv-SE", th: "th-TH", tr: "tr-TR", az: "az-AZ", uk: "uk-UA", vi: "vi-VN", zhHans: "zh-CN", zhHant: "zh-TW" } }, e);
  return { options: n, instance: Sw(n, t) };
}
function Sw(e, t) {
  const n = Ue(typeof e.adapter == "function" ? new e.adapter({ locale: e.locale[t.current.value] ?? t.current.value, formats: e.formats }) : e.adapter);
  return le(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
function um() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...n } = e, r = pt(t, n), { aliases: s = {}, components: i = {}, directives: o = {} } = r, a = $r();
  return a.run(() => {
    const l = Vv(r.defaults), u = Xp(r.display, r.ssr), c = ep(r.theme), f = H_(r.icons), d = Ap(r.locale), m = ww(r.date, d), b = cy(r.goTo, d);
    function g(v) {
      for (const A in o) v.directive(A, o[A]);
      for (const A in i) v.component(A, i[A]);
      for (const A in s) v.component(A, mr({ ...s[A], name: A, aliasName: s[A].name }));
      const y = $r();
      if (y.run(() => {
        c.install(v);
      }), v.onUnmount(() => y.stop()), v.provide(or, l), v.provide(Mo, u), v.provide(Xr, c), v.provide(Co, f), v.provide(xo, d), v.provide(_w, m.options), v.provide(su, m.instance), v.provide(ay, b), Ie && r.ssr) if (v.$nuxt) v.$nuxt.hook("app:suspense:resolve", () => {
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
        return Ue({ defaults: Nn.call(this, or), display: Nn.call(this, Mo), theme: Nn.call(this, Xr), icons: Nn.call(this, Co), locale: Nn.call(this, xo), date: Nn.call(this, su) });
      } } });
    }
    function S() {
      a.stop();
    }
    return { install: g, unmount: S, defaults: l, display: u, theme: c, icons: f, locale: d, date: m, goTo: b };
  });
}
const Cw = "3.12.1";
um.version = Cw;
function Nn(e) {
  var _a2, _b2;
  const t = this.$, n = ((_a2 = t.parent) == null ? void 0 : _a2.provides) ?? ((_b2 = t.vnode.appContext) == null ? void 0 : _b2.provides);
  if (n && e in n) return n[e];
}
const xw = { collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z", complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z", info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z", prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z", checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z", delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z", sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z", expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", subgroup: "svg:M7,10L12,15L17,10H7Z", dropdown: "svg:M7,10L12,15L17,10H7Z", radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z", radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z", edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z", ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z", loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12", first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z", last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z", unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z", file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z", plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", minus: "svg:M19,13H5V11H19V13Z", calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", treeviewCollapse: "svg:M7,10L12,15L17,10H7Z", treeviewExpand: "svg:M10,17L15,12L10,7V17Z", tableGroupExpand: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", tableGroupCollapse: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z", upload: "svg:M11 20H6.5q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55Z", color: "svg:M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8", command: "svg:M6,2A4,4 0 0,1 10,6V8H14V6A4,4 0 0,1 18,2A4,4 0 0,1 22,6A4,4 0 0,1 18,10H16V14H18A4,4 0 0,1 22,18A4,4 0 0,1 18,22A4,4 0 0,1 14,18V16H10V18A4,4 0 0,1 6,22A4,4 0 0,1 2,18A4,4 0 0,1 6,14H8V10H6A4,4 0 0,1 2,6A4,4 0 0,1 6,2M16,18A2,2 0 0,0 18,20A2,2 0 0,0 20,18A2,2 0 0,0 18,16H16V18M14,10H10V14H14V10M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18V16H6M8,6A2,2 0 0,0 6,4A2,2 0 0,0 4,6A2,2 0 0,0 6,8H8V6M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6V8H18Z", ctrl: "svg:M19.78,11.78L18.36,13.19L12,6.83L5.64,13.19L4.22,11.78L12,4L19.78,11.78Z", space: "svg:M3 15H5V19H19V15H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15Z", shift: "svg:M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z", alt: "svg:M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z", enter: "svg:M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z", arrowup: "svg:M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z", arrowdown: "svg:M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16z", arrowleft: "svg:M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z", arrowright: "svg:M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z", backspace: "svg:M19 15.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12zM22 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7c-.69 0-1.23-.36-1.59-.89L0 12l5.41-8.12C5.77 3.35 6.31 3 7 3zm0 2H7l-4.72 7L7 19h15z", play: "svg:M8,5.14V19.14L19,12.14L8,5.14Z", pause: "svg:M14,19H18V5H14M6,19H10V5H6V19Z", fullscreen: "svg:M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", fullscreenExit: "svg:M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", volumeHigh: "svg:M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z", volumeMedium: "svg:M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z", volumeLow: "svg:M7,9V15H11L16,20V4L11,9H7Z", volumeOff: "svg:M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z", search: "svg:M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }, Aw = { component: Ca }, Lw = um({ icons: { defaultSet: "mdi", aliases: xw, sets: { mdi: Aw } }, theme: { defaultTheme: "dark", themes: { dark: { dark: true, colors: { background: "#0a0a0f", surface: "#12121a", primary: "#7c4dff", secondary: "#00e5ff", accent: "#69ff47" } } } } });
function Ew(e) {
  const t = dr();
  let n = true, r = null;
  const s = (i) => {
    var _a2;
    (_a2 = document.getElementById(`panel-${i}`)) == null ? void 0 : _a2.focus({ preventScroll: true });
  };
  e.afterEach((i) => {
    const o = xg(i.name);
    t.panToWaypoint(o, { snap: n }), n || (t.isAnimating.value ? r = o : s(o)), n = false;
  }), le(t.isAnimating, (i) => {
    !i && r !== null && (s(r), r = null);
  });
}
const Mw = Ye({ name: "RouteCoordinate", render: () => null }), kw = [...fr.map((e) => ({ path: e.route, name: e.id, component: Mw })), { path: "/:pathMatch(.*)*", redirect: "/" }], Da = Eb({ history: ib("/"), routes: kw }), Tw = I1(I_).use(Lw).use(Da);
Ew(Da);
Da.isReady().then(() => Tw.mount("#app"));
