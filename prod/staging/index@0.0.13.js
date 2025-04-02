var O_ = Object.defineProperty;
var P_ = (Ht, $e, ii) =>
  $e in Ht
    ? O_(Ht, $e, { enumerable: !0, configurable: !0, writable: !0, value: ii })
    : (Ht[$e] = ii);
var U = (Ht, $e, ii) => P_(Ht, typeof $e != "symbol" ? $e + "" : $e, ii);
(function (Ht) {
  typeof define == "function" && define.amd ? define(Ht) : Ht();
})(function () {
  "use strict";
  var Ht = document.createElement("style");
  (Ht.textContent = `@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list>.splide__slide{margin:0!important;opacity:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide:not(.is-overflow) .splide__pagination{display:none}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}
/*$vite$:1*/`),
    document.head.appendChild(Ht);
  function $e(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function ii(n, e) {
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e);
  }
  /*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Et = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Di = { duration: 0.5, overwrite: !1, delay: 0 },
    Co,
    Ge,
    ve,
    rr = 1e8,
    et = 1 / rr,
    Ao = Math.PI * 2,
    Rf = Ao / 4,
    Mf = 0,
    Sl = Math.sqrt,
    Df = Math.cos,
    Lf = Math.sin,
    Ve = function (e) {
      return typeof e == "string";
    },
    xe = function (e) {
      return typeof e == "function";
    },
    mr = function (e) {
      return typeof e == "number";
    },
    ko = function (e) {
      return typeof e > "u";
    },
    ir = function (e) {
      return typeof e == "object";
    },
    gt = function (e) {
      return e !== !1;
    },
    Oo = function () {
      return typeof window < "u";
    },
    ys = function (e) {
      return xe(e) || Ve(e);
    },
    bl =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    Po = /(?:-?\.?\d|\.)+/gi,
    Tl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Li = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ro = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    El = /[+-]=-?[.\d]+/,
    xl = /[^,'"\[\]\s]+/gi,
    If = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Se,
    nr,
    Mo,
    Do,
    xt = {},
    ws = {},
    Cl,
    Al = function (e) {
      return (ws = Ni(e, xt)) && yt;
    },
    Lo = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    _n = function (e, t) {
      return !t && console.warn(e);
    },
    kl = function (e, t) {
      return (e && (xt[e] = t) && ws && (ws[e] = t)) || xt;
    },
    gn = function () {
      return 0;
    },
    Nf = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ss = { suppressEvents: !0, kill: !1 },
    zf = { suppressEvents: !0 },
    Io = {},
    Dr = [],
    No = {},
    Ol,
    Ct = {},
    zo = {},
    Pl = 30,
    bs = [],
    Fo = "",
    qo = function (e) {
      var t = e[0],
        r,
        i;
      if ((ir(t) || xe(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
        for (i = bs.length; i-- && !bs[i].targetTest(t); );
        r = bs[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new su(e[i], r)))) ||
          e.splice(i, 1);
      return e;
    },
    ni = function (e) {
      return e._gsap || qo(zt(e))[0]._gsap;
    },
    Rl = function (e, t, r) {
      return (r = e[t]) && xe(r)
        ? e[t]()
        : (ko(r) && e.getAttribute && e.getAttribute(t)) || r;
    },
    mt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ke = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    De = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Ii = function (e, t) {
      var r = t.charAt(0),
        i = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
      );
    },
    Ff = function (e, t) {
      for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
      return i < r;
    },
    Ts = function () {
      var e = Dr.length,
        t = Dr.slice(0),
        r,
        i;
      for (No = {}, Dr.length = 0, r = 0; r < e; r++)
        (i = t[r]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Ml = function (e, t, r, i) {
      Dr.length && !Ge && Ts(),
        e.render(t, r, Ge && t < 0 && (e._initted || e._startAt)),
        Dr.length && !Ge && Ts();
    },
    Dl = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(xl).length < 2
        ? t
        : Ve(e)
        ? e.trim()
        : e;
    },
    Ll = function (e) {
      return e;
    },
    At = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    qf = function (e) {
      return function (t, r) {
        for (var i in r)
          i in t || (i === "duration" && e) || i === "ease" || (t[i] = r[i]);
      };
    },
    Ni = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Il = function n(e, t) {
      for (var r in t)
        r !== "__proto__" &&
          r !== "constructor" &&
          r !== "prototype" &&
          (e[r] = ir(t[r]) ? n(e[r] || (e[r] = {}), t[r]) : t[r]);
      return e;
    },
    Es = function (e, t) {
      var r = {},
        i;
      for (i in e) i in t || (r[i] = e[i]);
      return r;
    },
    mn = function (e) {
      var t = e.parent || Se,
        r = e.keyframes ? qf(tt(e.keyframes)) : At;
      if (gt(e.inherit))
        for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Wf = function (e, t) {
      for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; );
      return r < 0;
    },
    Nl = function (e, t, r, i, s) {
      var o = e[i],
        a;
      if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[r]), (e[r] = t)),
        t._next ? (t._next._prev = t) : (e[i] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    xs = function (e, t, r, i) {
      r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
      var s = t._prev,
        o = t._next;
      s ? (s._next = o) : e[r] === t && (e[r] = o),
        o ? (o._prev = s) : e[i] === t && (e[i] = s),
        (t._next = t._prev = t.parent = null);
    },
    Lr = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    si = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
      return e;
    },
    Bf = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Wo = function (e, t, r, i) {
      return (
        e._startAt &&
        (Ge
          ? e._startAt.revert(Ss)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, i))
      );
    },
    Vf = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    zl = function (e) {
      return e._repeat ? zi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    zi = function (e, t) {
      var r = Math.floor((e = De(e / t)));
      return e && r === e ? r - 1 : r;
    },
    Cs = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    As = function (e) {
      return (e._end = De(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || et) || 0)
      ));
    },
    ks = function (e, t) {
      var r = e._dp;
      return (
        r &&
          r.smoothChildTiming &&
          e._ts &&
          ((e._start = De(
            r._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          As(e),
          r._dirty || si(r, e)),
        e
      );
    },
    Fl = function (e, t) {
      var r;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((r = Cs(e.rawTime(), t)),
          (!t._dur || yn(0, t.totalDuration(), r) - t._tTime > et) &&
            t.render(r, !0)),
        si(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (r = e; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        e._zTime = -1e-8;
      }
    },
    sr = function (e, t, r, i) {
      return (
        t.parent && Lr(t),
        (t._start = De(
          (mr(r) ? r : r || e !== Se ? Nt(e, r, t) : e._time) + t._delay
        )),
        (t._end = De(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        Nl(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Bo(t) || (e._recent = t),
        i || Fl(e, t),
        e._ts < 0 && ks(e, e._tTime),
        e
      );
    },
    ql = function (e, t) {
      return (
        (xt.ScrollTrigger || Lo("scrollTrigger", t)) &&
        xt.ScrollTrigger.create(t, e)
      );
    },
    Wl = function (e, t, r, i, s) {
      if ((Zo(e, t, s), !e._initted)) return 1;
      if (
        !r &&
        e._pt &&
        !Ge &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Ol !== Ot.frame
      )
        return Dr.push(e), (e._lazy = [s, i]), 1;
    },
    Yf = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    Bo = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    Uf = function (e, t, r, i) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && Yf(e) && !(!e._initted && Bo(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Bo(e))))
            ? 0
            : 1,
        a = e._rDelay,
        l = 0,
        u,
        c,
        p;
      if (
        (a &&
          e._repeat &&
          ((l = yn(0, e._tDur, t)),
          (c = zi(l, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== zi(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || Ge || i || e._zTime === et || (!t && e._zTime))
      ) {
        if (!e._initted && Wl(e, t, i, r, l)) return;
        for (
          p = e._zTime,
            e._zTime = t || (r ? et : 0),
            r || (r = t && !p),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        t < 0 && Wo(e, t, r, !0),
          e._onUpdate && !r && kt(e, "onUpdate"),
          l && e._repeat && !r && e.parent && kt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Lr(e, 1),
            !r &&
              !Ge &&
              (kt(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Hf = function (e, t, r) {
      var i;
      if (r > t)
        for (i = e._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > t) return i;
          i = i._next;
        }
      else
        for (i = e._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < t) return i;
          i = i._prev;
        }
    },
    Fi = function (e, t, r, i) {
      var s = e._repeat,
        o = De(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !i && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : De(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !i && ks(e, (e._tTime = e._tDur * a)),
        e.parent && As(e),
        r || si(e.parent, e),
        e
      );
    },
    Bl = function (e) {
      return e instanceof ut ? si(e) : Fi(e, e._dur);
    },
    Xf = { _start: 0, endTime: gn, totalDuration: gn },
    Nt = function n(e, t, r) {
      var i = e.labels,
        s = e._recent || Xf,
        o = e.duration() >= rr ? s.endTime(!1) : e._dur,
        a,
        l,
        u;
      return Ve(t) && (isNaN(t) || t in i)
        ? ((l = t.charAt(0)),
          (u = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (u ? (a < 0 ? s : r).totalDuration() / 100 : 1))
            : a < 0
            ? (t in i || (i[t] = o), i[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              u && r && (l = (l / 100) * (tt(r) ? r[0] : r).totalDuration()),
              a > 1 ? n(e, t.substr(0, a - 1), r) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    vn = function (e, t, r) {
      var i = mr(t[1]),
        s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((i && (o.duration = t[1]), (o.parent = r), e)) {
        for (a = o, l = r; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = gt(l.vars.inherit) && l.parent);
        (o.immediateRender = gt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new Le(t[0], o, t[s + 1]);
    },
    Ir = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    yn = function (e, t, r) {
      return r < e ? e : r > t ? t : r;
    },
    rt = function (e, t) {
      return !Ve(e) || !(t = If.exec(e)) ? "" : t[1];
    },
    $f = function (e, t, r) {
      return Ir(r, function (i) {
        return yn(e, t, i);
      });
    },
    Vo = [].slice,
    Vl = function (e, t) {
      return (
        e &&
        ir(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ir(e[0]))) &&
        !e.nodeType &&
        e !== nr
      );
    },
    Gf = function (e, t, r) {
      return (
        r === void 0 && (r = []),
        e.forEach(function (i) {
          var s;
          return (Ve(i) && !t) || Vl(i, 1)
            ? (s = r).push.apply(s, zt(i))
            : r.push(i);
        }) || r
      );
    },
    zt = function (e, t, r) {
      return ve && !t && ve.selector
        ? ve.selector(e)
        : Ve(e) && !r && (Mo || !Wi())
        ? Vo.call((t || Do).querySelectorAll(e), 0)
        : tt(e)
        ? Gf(e, r)
        : Vl(e)
        ? Vo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Yo = function (e) {
      return (
        (e = zt(e)[0] || _n("Invalid scope") || {}),
        function (t) {
          var r = e.current || e.nativeElement || e;
          return zt(
            t,
            r.querySelectorAll
              ? r
              : r === e
              ? _n("Invalid scope") || Do.createElement("div")
              : e
          );
        }
      );
    },
    Yl = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Ul = function (e) {
      if (xe(e)) return e;
      var t = ir(e) ? e : { each: e },
        r = oi(t.ease),
        i = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = i > 0 && i < 1,
        l = isNaN(i) || a,
        u = t.axis,
        c = i,
        p = i;
      return (
        Ve(i)
          ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !a && l && ((c = i[0]), (p = i[1])),
        function (d, f, _) {
          var h = (_ || t).length,
            m = o[h],
            y,
            v,
            S,
            b,
            T,
            E,
            w,
            C,
            A;
          if (!m) {
            if (((A = t.grid === "auto" ? 0 : (t.grid || [1, rr])[1]), !A)) {
              for (
                w = -1e8;
                w < (w = _[A++].getBoundingClientRect().left) && A < h;

              );
              A < h && A--;
            }
            for (
              m = o[h] = [],
                y = l ? Math.min(A, h) * c - 0.5 : i % A,
                v = A === rr ? 0 : l ? (h * p) / A - 0.5 : (i / A) | 0,
                w = 0,
                C = rr,
                E = 0;
              E < h;
              E++
            )
              (S = (E % A) - y),
                (b = v - ((E / A) | 0)),
                (m[E] = T =
                  u ? Math.abs(u === "y" ? b : S) : Sl(S * S + b * b)),
                T > w && (w = T),
                T < C && (C = T);
            i === "random" && Yl(m),
              (m.max = w - C),
              (m.min = C),
              (m.v = h =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (A > h
                      ? h - 1
                      : u
                      ? u === "y"
                        ? h / A
                        : A
                      : Math.max(A, h / A)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (m.b = h < 0 ? s - h : s),
              (m.u = rt(t.amount || t.each) || 0),
              (r = r && h < 0 ? ru(r) : r);
          }
          return (
            (h = (m[d] - m.min) / m.max || 0),
            De(m.b + (r ? r(h) : h) * m.v) + m.u
          );
        }
      );
    },
    Uo = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var i = De(Math.round(parseFloat(r) / e) * e * t);
        return (i - (i % 1)) / t + (mr(r) ? 0 : rt(r));
      };
    },
    Hl = function (e, t) {
      var r = tt(e),
        i,
        s;
      return (
        !r &&
          ir(e) &&
          ((i = r = e.radius || rr),
          e.values
            ? ((e = zt(e.values)), (s = !mr(e[0])) && (i *= i))
            : (e = Uo(e.increment))),
        Ir(
          t,
          r
            ? xe(e)
              ? function (o) {
                  return (s = e(o)), Math.abs(s - o) <= i ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      u = rr,
                      c = 0,
                      p = e.length,
                      d,
                      f;
                    p--;

                  )
                    s
                      ? ((d = e[p].x - a),
                        (f = e[p].y - l),
                        (d = d * d + f * f))
                      : (d = Math.abs(e[p] - a)),
                      d < u && ((u = d), (c = p));
                  return (
                    (c = !i || u <= i ? e[c] : o),
                    s || c === o || mr(o) ? c : c + rt(o)
                  );
                }
            : Uo(e)
        )
      );
    },
    Xl = function (e, t, r, i) {
      return Ir(tt(e) ? !t : r === !0 ? !!(r = 0) : !i, function () {
        return tt(e)
          ? e[~~(Math.random() * e.length)]
          : (r = r || 1e-5) &&
              (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - r / 2 + Math.random() * (t - e + r * 0.99)) / r
                ) *
                  r *
                  i
              ) / i;
      });
    },
    Kf = function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (i) {
        return t.reduce(function (s, o) {
          return o(s);
        }, i);
      };
    },
    Zf = function (e, t) {
      return function (r) {
        return e(parseFloat(r)) + (t || rt(r));
      };
    },
    jf = function (e, t, r) {
      return Gl(e, t, 0, 1, r);
    },
    $l = function (e, t, r) {
      return Ir(r, function (i) {
        return e[~~t(i)];
      });
    },
    Qf = function n(e, t, r) {
      var i = t - e;
      return tt(e)
        ? $l(e, n(0, e.length), t)
        : Ir(r, function (s) {
            return ((i + ((s - e) % i)) % i) + e;
          });
    },
    Jf = function n(e, t, r) {
      var i = t - e,
        s = i * 2;
      return tt(e)
        ? $l(e, n(0, e.length - 1), t)
        : Ir(r, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
          });
    },
    wn = function (e) {
      for (var t = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", t)); )
        (o = e.indexOf(")", i)),
          (a = e.charAt(i + 7) === "["),
          (s = e.substr(i + 7, o - i - 7).match(a ? xl : Po)),
          (r +=
            e.substr(t, i - t) +
            Xl(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return r + e.substr(t, e.length - t);
    },
    Gl = function (e, t, r, i, s) {
      var o = t - e,
        a = i - r;
      return Ir(s, function (l) {
        return r + (((l - e) / o) * a || 0);
      });
    },
    eh = function n(e, t, r, i) {
      var s = isNaN(e + t)
        ? 0
        : function (f) {
            return (1 - f) * e + f * t;
          };
      if (!s) {
        var o = Ve(e),
          a = {},
          l,
          u,
          c,
          p,
          d;
        if ((r === !0 && (i = 1) && (r = null), o))
          (e = { p: e }), (t = { p: t });
        else if (tt(e) && !tt(t)) {
          for (c = [], p = e.length, d = p - 2, u = 1; u < p; u++)
            c.push(n(e[u - 1], e[u]));
          p--,
            (s = function (_) {
              _ *= p;
              var h = Math.min(d, ~~_);
              return c[h](_ - h);
            }),
            (r = t);
        } else i || (e = Ni(tt(e) ? [] : {}, e));
        if (!c) {
          for (l in t) Go.call(a, e, l, "get", t[l]);
          s = function (_) {
            return Jo(_, a) || (o ? e.p : e);
          };
        }
      }
      return Ir(r, s);
    },
    Kl = function (e, t, r) {
      var i = e.labels,
        s = rr,
        o,
        a,
        l;
      for (o in i)
        (a = i[o] - t),
          a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    kt = function (e, t, r) {
      var i = e.vars,
        s = i[t],
        o = ve,
        a = e._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = i[t + "Params"]),
          (u = i.callbackScope || e),
          r && Dr.length && Ts(),
          a && (ve = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (ve = o),
          c
        );
    },
    Sn = function (e) {
      return (
        Lr(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ge),
        e.progress() < 1 && kt(e, "onInterrupt"),
        e
      );
    },
    qi,
    Zl = [],
    jl = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Oo() || e.headless)) {
          var t = e.name,
            r = xe(e),
            i =
              t && !r && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: gn,
              render: Jo,
              add: Go,
              kill: gh,
              modifier: _h,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: Qo,
              aliases: {},
              register: 0,
            };
          if ((Wi(), e !== i)) {
            if (Ct[t]) return;
            At(i, At(Es(e, s), o)),
              Ni(i.prototype, Ni(s, Es(e, o))),
              (Ct[(i.prop = t)] = i),
              e.targetTest && (bs.push(i), (Io[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          kl(t, i), e.register && e.register(yt, i, vt);
        } else Zl.push(e);
    },
    de = 255,
    bn = {
      aqua: [0, de, de],
      lime: [0, de, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, de],
      navy: [0, 0, 128],
      white: [de, de, de],
      olive: [128, 128, 0],
      yellow: [de, de, 0],
      orange: [de, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [de, 0, 0],
      pink: [de, 192, 203],
      cyan: [0, de, de],
      transparent: [de, de, de, 0],
    },
    Ho = function (e, t, r) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (r - t) * e * 6
          : e < 0.5
          ? r
          : e * 3 < 2
          ? t + (r - t) * (2 / 3 - e) * 6
          : t) *
          de +
          0.5) |
          0
      );
    },
    Ql = function (e, t, r) {
      var i = e ? (mr(e) ? [e >> 16, (e >> 8) & de, e & de] : 0) : bn.black,
        s,
        o,
        a,
        l,
        u,
        c,
        p,
        d,
        f,
        _;
      if (!i) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), bn[e]))
          i = bn[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (i = parseInt(e.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & de, i & de, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (i = [e >> 16, (e >> 8) & de, e & de]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((i = _ = e.match(Po)), !t))
            (l = (+i[0] % 360) / 360),
              (u = +i[1] / 100),
              (c = +i[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              i.length > 3 && (i[3] *= 1),
              (i[0] = Ho(l + 1 / 3, s, o)),
              (i[1] = Ho(l, s, o)),
              (i[2] = Ho(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (i = e.match(Tl)), r && i.length < 4 && (i[3] = 1), i;
        } else i = e.match(Po) || bn.transparent;
        i = i.map(Number);
      }
      return (
        t &&
          !_ &&
          ((s = i[0] / de),
          (o = i[1] / de),
          (a = i[2] / de),
          (p = Math.max(s, o, a)),
          (d = Math.min(s, o, a)),
          (c = (p + d) / 2),
          p === d
            ? (l = u = 0)
            : ((f = p - d),
              (u = c > 0.5 ? f / (2 - p - d) : f / (p + d)),
              (l =
                p === s
                  ? (o - a) / f + (o < a ? 6 : 0)
                  : p === o
                  ? (a - s) / f + 2
                  : (s - o) / f + 4),
              (l *= 60)),
          (i[0] = ~~(l + 0.5)),
          (i[1] = ~~(u * 100 + 0.5)),
          (i[2] = ~~(c * 100 + 0.5))),
        r && i.length < 4 && (i[3] = 1),
        i
      );
    },
    Jl = function (e) {
      var t = [],
        r = [],
        i = -1;
      return (
        e.split(Nr).forEach(function (s) {
          var o = s.match(Li) || [];
          t.push.apply(t, o), r.push((i += o.length + 1));
        }),
        (t.c = r),
        t
      );
    },
    eu = function (e, t, r) {
      var i = "",
        s = (e + i).match(Nr),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        p;
      if (!s) return e;
      if (
        ((s = s.map(function (d) {
          return (
            (d = Ql(d, t, 1)) &&
            o +
              (t
                ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                : d.join(",")) +
              ")"
          );
        })),
        r && ((c = Jl(e)), (l = r.c), l.join(i) !== c.c.join(i)))
      )
        for (u = e.replace(Nr, "1").split(Li), p = u.length - 1; a < p; a++)
          i +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : r).shift());
      if (!u)
        for (u = e.split(Nr), p = u.length - 1; a < p; a++) i += u[a] + s[a];
      return i + u[p];
    },
    Nr = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in bn) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    th = /hsl[a]?\(/,
    tu = function (e) {
      var t = e.join(" "),
        r;
      if (((Nr.lastIndex = 0), Nr.test(t)))
        return (
          (r = th.test(t)),
          (e[1] = eu(e[1], r)),
          (e[0] = eu(e[0], r, Jl(e[1]))),
          !0
        );
    },
    Tn,
    Ot = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        r = n(),
        i = r,
        s = 1e3 / 240,
        o = s,
        a = [],
        l,
        u,
        c,
        p,
        d,
        f,
        _ = function h(m) {
          var y = n() - i,
            v = m === !0,
            S,
            b,
            T,
            E;
          if (
            ((y > e || y < 0) && (r += y - t),
            (i += y),
            (T = i - r),
            (S = T - o),
            (S > 0 || v) &&
              ((E = ++p.frame),
              (d = T - p.time * 1e3),
              (p.time = T = T / 1e3),
              (o += S + (S >= s ? 4 : s - S)),
              (b = 1)),
            v || (l = u(h)),
            b)
          )
            for (f = 0; f < a.length; f++) a[f](T, d, E, m);
        };
      return (
        (p = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (m) {
            return d / (1e3 / (m || 60));
          },
          wake: function () {
            Cl &&
              (!Mo &&
                Oo() &&
                ((nr = Mo = window),
                (Do = nr.document || {}),
                (xt.gsap = yt),
                (nr.gsapVersions || (nr.gsapVersions = [])).push(yt.version),
                Al(ws || nr.GreenSockGlobals || (!nr.gsap && nr) || {}),
                Zl.forEach(jl)),
              (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && p.sleep(),
              (u =
                c ||
                function (m) {
                  return setTimeout(m, (o - p.time * 1e3 + 1) | 0);
                }),
              (Tn = 1),
              _(2));
          },
          sleep: function () {
            (c ? cancelAnimationFrame : clearTimeout)(l), (Tn = 0), (u = gn);
          },
          lagSmoothing: function (m, y) {
            (e = m || 1 / 0), (t = Math.min(y || 33, e));
          },
          fps: function (m) {
            (s = 1e3 / (m || 240)), (o = p.time * 1e3 + s);
          },
          add: function (m, y, v) {
            var S = y
              ? function (b, T, E, w) {
                  m(b, T, E, w), p.remove(S);
                }
              : m;
            return p.remove(m), a[v ? "unshift" : "push"](S), Wi(), S;
          },
          remove: function (m, y) {
            ~(y = a.indexOf(m)) && a.splice(y, 1) && f >= y && f--;
          },
          _listeners: a,
        }),
        p
      );
    })(),
    Wi = function () {
      return !Tn && Ot.wake();
    },
    ae = {},
    rh = /^[\d.\-M][\d.\-,\s]/,
    ih = /["']/g,
    nh = function (e) {
      for (
        var t = {},
          r = e.substr(1, e.length - 3).split(":"),
          i = r[0],
          s = 1,
          o = r.length,
          a,
          l,
          u;
        s < o;
        s++
      )
        (l = r[s]),
          (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (t[i] = isNaN(u) ? u.replace(ih, "").trim() : +u),
          (i = l.substr(a + 1).trim());
      return t;
    },
    sh = function (e) {
      var t = e.indexOf("(") + 1,
        r = e.indexOf(")"),
        i = e.indexOf("(", t);
      return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
    },
    oh = function (e) {
      var t = (e + "").split("("),
        r = ae[t[0]];
      return r && t.length > 1 && r.config
        ? r.config.apply(
            null,
            ~e.indexOf("{") ? [nh(t[1])] : sh(e).split(",").map(Dl)
          )
        : ae._CE && rh.test(e)
        ? ae._CE("", e)
        : r;
    },
    ru = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    iu = function n(e, t) {
      for (var r = e._first, i; r; )
        r instanceof ut
          ? n(r, t)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== t &&
            (r.timeline
              ? n(r.timeline, t)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = t))),
          (r = r._next);
    },
    oi = function (e, t) {
      return (e && (xe(e) ? e : ae[e] || oh(e))) || t;
    },
    ai = function (e, t, r, i) {
      r === void 0 &&
        (r = function (l) {
          return 1 - t(1 - l);
        }),
        i === void 0 &&
          (i = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: r, easeInOut: i },
        o;
      return (
        mt(e, function (a) {
          (ae[a] = xt[a] = s), (ae[(o = a.toLowerCase())] = r);
          for (var l in s)
            ae[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = ae[a + "." + l] = s[l];
        }),
        s
      );
    },
    nu = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Xo = function n(e, t, r) {
      var i = t >= 1 ? t : 1,
        s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / Ao) * (Math.asin(1 / i) || 0),
        a = function (c) {
          return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Lf((c - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : nu(a);
      return (
        (s = Ao / s),
        (l.config = function (u, c) {
          return n(e, u, c);
        }),
        l
      );
    },
    $o = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var r = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        i =
          e === "out"
            ? r
            : e === "in"
            ? function (s) {
                return 1 - r(1 - s);
              }
            : nu(r);
      return (
        (i.config = function (s) {
          return n(e, s);
        }),
        i
      );
    };
  mt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    ai(
      n + ",Power" + (t - 1),
      e
        ? function (r) {
            return Math.pow(r, t);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, t);
      },
      function (r) {
        return r < 0.5
          ? Math.pow(r * 2, t) / 2
          : 1 - Math.pow((1 - r) * 2, t) / 2;
      }
    );
  }),
    (ae.Linear.easeNone = ae.none = ae.Linear.easeIn),
    ai("Elastic", Xo("in"), Xo("out"), Xo()),
    (function (n, e) {
      var t = 1 / e,
        r = 2 * t,
        i = 2.5 * t,
        s = function (a) {
          return a < t
            ? n * a * a
            : a < r
            ? n * Math.pow(a - 1.5 / e, 2) + 0.75
            : a < i
            ? n * (a -= 2.25 / e) * a + 0.9375
            : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      ai(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    ai("Expo", function (n) {
      return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
    }),
    ai("Circ", function (n) {
      return -(Sl(1 - n * n) - 1);
    }),
    ai("Sine", function (n) {
      return n === 1 ? 1 : -Df(n * Rf) + 1;
    }),
    ai("Back", $o("in"), $o("out"), $o()),
    (ae.SteppedEase =
      ae.steps =
      xt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var r = 1 / e,
              i = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - et;
            return function (a) {
              return (((i * yn(0, o, a)) | 0) + s) * r;
            };
          },
        }),
    (Di.ease = ae["quad.out"]),
    mt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (Fo += n + "," + n + "Params,");
      }
    );
  var su = function (e, t) {
      (this.id = Mf++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : Rl),
        (this.set = t ? t.getSetter : Qo);
    },
    En = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Fi(this, +t.duration, 1, 1),
          (this.data = t.data),
          ve && ((this._ctx = ve), ve.data.push(this)),
          Tn || Ot.wake();
      }
      var e = n.prototype;
      return (
        (e.delay = function (r) {
          return r || r === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + r - this._delay),
              (this._delay = r),
              this)
            : this._delay;
        }),
        (e.duration = function (r) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (r) {
          return arguments.length
            ? ((this._dirty = 0),
              Fi(
                this,
                this._repeat < 0
                  ? r
                  : (r - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (r, i) {
          if ((Wi(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              ks(this, r), !s._dp || s.parent || Fl(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && r < this._tDur) ||
                (this._ts < 0 && r > 0) ||
                (!this._tDur && !r)) &&
              sr(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === et) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Ml(this, r, i)),
            this
          );
        }),
        (e.time = function (r, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), r + zl(this)) %
                  (this._dur + this._rDelay) || (r ? this._dur : 0),
                i
              )
            : this._time;
        }),
        (e.totalProgress = function (r, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * r, i)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
            ? 1
            : 0;
        }),
        (e.progress = function (r, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                  zl(this),
                i
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (r, i) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (r - 1) * s, i)
            : this._repeat
            ? zi(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (r, i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === r) return this;
          var s =
            this.parent && this._ts ? Cs(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0),
            (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
            this.totalTime(yn(-Math.abs(this._delay), this._tDur, s), i !== !1),
            As(this),
            Bf(this)
          );
        }),
        (e.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Wi(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== et &&
                        (this._tTime -= et)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return (
              i && (i._sort || !this.parent) && sr(i, this, r - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (r) {
          return (
            this._start +
            (gt(r) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (r) {
          var i = this.parent || this._dp;
          return i
            ? r &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Cs(i.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (r) {
          r === void 0 && (r = zf);
          var i = Ge;
          return (
            (Ge = r),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(r),
              this.totalTime(-0.01, r.suppressEvents)),
            this.data !== "nested" && r.kill !== !1 && this.kill(),
            (Ge = i),
            this
          );
        }),
        (e.globalTime = function (r) {
          for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
          return !this.parent && this._sat ? this._sat.globalTime(r) : s;
        }),
        (e.repeat = function (r) {
          return arguments.length
            ? ((this._repeat = r === 1 / 0 ? -2 : r), Bl(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (r) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = r), Bl(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (e.seek = function (r, i) {
          return this.totalTime(Nt(this, r), gt(i));
        }),
        (e.restart = function (r, i) {
          return (
            this.play().totalTime(r ? -this._delay : 0, gt(i)),
            this._dur || (this._zTime = -1e-8),
            this
          );
        }),
        (e.play = function (r, i) {
          return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (r, i) {
          return (
            r != null && this.seek(r || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (r, i) {
          return r != null && this.seek(r, i), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (r) {
          return arguments.length
            ? (!!r !== this.reversed() &&
                this.timeScale(-this._rts || (r ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var r = this.parent || this._dp,
            i = this._start,
            s;
          return !!(
            !r ||
            (this._ts &&
              this._initted &&
              r.isActive() &&
              (s = r.rawTime(!0)) >= i &&
              s < this.endTime(!0) - et)
          );
        }),
        (e.eventCallback = function (r, i, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (i
                ? ((o[r] = i),
                  s && (o[r + "Params"] = s),
                  r === "onUpdate" && (this._onUpdate = i))
                : delete o[r],
              this)
            : o[r];
        }),
        (e.then = function (r) {
          var i = this;
          return new Promise(function (s) {
            var o = xe(r) ? r : Ll,
              a = function () {
                var u = i.then;
                (i.then = null),
                  xe(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
                  s(o),
                  (i.then = u);
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? a()
              : (i._prom = a);
          });
        }),
        (e.kill = function () {
          Sn(this);
        }),
        n
      );
    })();
  At(En.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var ut = (function (n) {
    ii(e, n);
    function e(r, i) {
      var s;
      return (
        r === void 0 && (r = {}),
        (s = n.call(this, r) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!r.smoothChildTiming),
        (s.autoRemoveChildren = !!r.autoRemoveChildren),
        (s._sort = gt(r.sortChildren)),
        Se && sr(r.parent || Se, $e(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && ql($e(s), r.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (i, s, o) {
        return vn(0, arguments, this), this;
      }),
      (t.from = function (i, s, o) {
        return vn(1, arguments, this), this;
      }),
      (t.fromTo = function (i, s, o, a) {
        return vn(2, arguments, this), this;
      }),
      (t.set = function (i, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          mn(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Le(i, s, Nt(this, o), 1),
          this
        );
      }),
      (t.call = function (i, s, o) {
        return sr(this, Le.delayedCall(0, i, s), o);
      }),
      (t.staggerTo = function (i, s, o, a, l, u, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new Le(i, o, Nt(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (i, s, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (mn(o).immediateRender = gt(o.immediateRender)),
          this.staggerTo(i, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (i, s, o, a, l, u, c, p) {
        return (
          (a.startAt = o),
          (mn(a).immediateRender = gt(a.immediateRender)),
          this.staggerTo(i, s, a, l, u, c, p)
        );
      }),
      (t.render = function (i, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = i <= 0 ? 0 : De(i),
          p = this._zTime < 0 != i < 0 && (this._initted || !u),
          d,
          f,
          _,
          h,
          m,
          y,
          v,
          S,
          b,
          T,
          E,
          w;
        if (
          (this !== Se && c > l && i >= 0 && (c = l),
          c !== this._tTime || o || p)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (i += this._time - a)),
            (d = c),
            (b = this._start),
            (S = this._ts),
            (y = !S),
            p && (u || (a = this._zTime), (i || !s) && (this._zTime = i)),
            this._repeat)
          ) {
            if (
              ((E = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(m * 100 + i, s, o);
            if (
              ((d = De(c % m)),
              c === l
                ? ((h = this._repeat), (d = u))
                : ((T = De(c / m)),
                  (h = ~~T),
                  h && h === T && ((d = u), h--),
                  d > u && (d = u)),
              (T = zi(this._tTime, m)),
              !a &&
                this._tTime &&
                T !== h &&
                this._tTime - T * m - this._dur <= 0 &&
                (T = h),
              E && h & 1 && ((d = u - d), (w = 1)),
              h !== T && !this._lock)
            ) {
              var C = E && T & 1,
                A = C === (E && h & 1);
              if (
                (h < T && (C = !C),
                (a = C ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (w ? 0 : De(h * m)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && kt(this, "onRepeat"),
                this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  y !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                A &&
                  ((this._lock = 2),
                  (a = C ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !w && this.invalidate()),
                (this._lock = 0),
                !this._ts && !y)
              )
                return this;
              iu(this, w);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((v = Hf(this, De(a), De(d))), v && (c -= d - (d = v._start))),
            (this._tTime = c),
            (this._time = d),
            (this._act = !S),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (a = 0)),
            !a && d && !s && !h && (kt(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (d >= a && i >= 0)
            for (f = this._first; f; ) {
              if (
                ((_ = f._next), (f._act || d >= f._start) && f._ts && v !== f)
              ) {
                if (f.parent !== this) return this.render(i, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (d - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (d - f._start) * f._ts,
                    s,
                    o
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), _ && (c += this._zTime = -1e-8);
                  break;
                }
              }
              f = _;
            }
          else {
            f = this._last;
            for (var O = i < 0 ? i : d; f; ) {
              if (
                ((_ = f._prev), (f._act || O <= f._end) && f._ts && v !== f)
              ) {
                if (f.parent !== this) return this.render(i, s, o);
                if (
                  (f.render(
                    f._ts > 0
                      ? (O - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (O - f._start) * f._ts,
                    s,
                    o || (Ge && (f._initted || f._startAt))
                  ),
                  d !== this._time || (!this._ts && !y))
                ) {
                  (v = 0), _ && (c += this._zTime = O ? -1e-8 : et);
                  break;
                }
              }
              f = _;
            }
          }
          if (
            v &&
            !s &&
            (this.pause(),
            (v.render(d >= a ? 0 : -1e-8)._zTime = d >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = b), As(this), this.render(i, s, o);
          this._onUpdate && !s && kt(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (b === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Lr(this, 1),
                !s &&
                  !(i < 0 && !a) &&
                  (c || a || !l) &&
                  (kt(
                    this,
                    c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (i, s) {
        var o = this;
        if ((mr(s) || (s = Nt(this, s, i)), !(i instanceof En))) {
          if (tt(i))
            return (
              i.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Ve(i)) return this.addLabel(i, s);
          if (xe(i)) i = Le.delayedCall(0, i);
          else return this;
        }
        return this !== i ? sr(this, i, s) : this;
      }),
      (t.getChildren = function (i, s, o, a) {
        i === void 0 && (i = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -1e8);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Le
              ? s && l.push(u)
              : (o && l.push(u),
                i && l.push.apply(l, u.getChildren(!0, s, o)))),
            (u = u._next);
        return l;
      }),
      (t.getById = function (i) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === i) return s[o];
      }),
      (t.remove = function (i) {
        return Ve(i)
          ? this.removeLabel(i)
          : xe(i)
          ? this.killTweensOf(i)
          : (i.parent === this && xs(this, i),
            i === this._recent && (this._recent = this._last),
            si(this));
      }),
      (t.totalTime = function (i, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = De(
                Ot.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts)
              )),
            n.prototype.totalTime.call(this, i, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (i, s) {
        return (this.labels[i] = Nt(this, s)), this;
      }),
      (t.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (t.addPause = function (i, s, o) {
        var a = Le.delayedCall(0, s || gn, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), sr(this, a, Nt(this, i))
        );
      }),
      (t.removePause = function (i) {
        var s = this._first;
        for (i = Nt(this, i); s; )
          s._start === i && s.data === "isPause" && Lr(s), (s = s._next);
      }),
      (t.killTweensOf = function (i, s, o) {
        for (var a = this.getTweensOf(i, o), l = a.length; l--; )
          zr !== a[l] && a[l].kill(i, s);
        return this;
      }),
      (t.getTweensOf = function (i, s) {
        for (var o = [], a = zt(i), l = this._first, u = mr(s), c; l; )
          l instanceof Le
            ? Ff(l._targets, a) &&
              (u
                ? (!zr || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              o.push(l)
            : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
            (l = l._next);
        return o;
      }),
      (t.tweenTo = function (i, s) {
        s = s || {};
        var o = this,
          a = Nt(o, i),
          l = s,
          u = l.startAt,
          c = l.onStart,
          p = l.onStartParams,
          d = l.immediateRender,
          f,
          _ = Le.to(
            o,
            At(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                  ) ||
                  et,
                onStart: function () {
                  if ((o.pause(), !f)) {
                    var m =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    _._dur !== m && Fi(_, m, 0, 1).render(_._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(_, p || []);
                },
              },
              s
            )
          );
        return d ? _.render(0) : _;
      }),
      (t.tweenFromTo = function (i, s, o) {
        return this.tweenTo(s, At({ startAt: { time: Nt(this, i) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (i) {
        return i === void 0 && (i = this._time), Kl(this, Nt(this, i));
      }),
      (t.previousLabel = function (i) {
        return i === void 0 && (i = this._time), Kl(this, Nt(this, i), 1);
      }),
      (t.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + et);
      }),
      (t.shiftChildren = function (i, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
        if (s) for (u in l) l[u] >= o && (l[u] += i);
        return si(this);
      }),
      (t.invalidate = function (i) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
        return n.prototype.invalidate.call(this, i);
      }),
      (t.clear = function (i) {
        i === void 0 && (i = !0);
        for (var s = this._first, o; s; )
          (o = s._next), this.remove(s), (s = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          si(this)
        );
      }),
      (t.totalDuration = function (i) {
        var s = 0,
          o = this,
          a = o._last,
          l = rr,
          u,
          c,
          p;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -i : i)
          );
        if (o._dirty) {
          for (p = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (sr(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((s -= c),
                ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = u);
          Fi(o, o === Se && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (i) {
        if ((Se._ts && (Ml(Se, Cs(i, Se)), (Ol = Ot.frame)), Ot.frame >= Pl)) {
          Pl += Et.autoSleep || 120;
          var s = Se._first;
          if ((!s || !s._ts) && Et.autoSleep && Ot._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Ot.sleep();
          }
        }
      }),
      e
    );
  })(En);
  At(ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var ah = function (e, t, r, i, s, o, a) {
      var l = new vt(this._pt, e, t, 0, 1, fu, null, s),
        u = 0,
        c = 0,
        p,
        d,
        f,
        _,
        h,
        m,
        y,
        v;
      for (
        l.b = r,
          l.e = i,
          r += "",
          i += "",
          (y = ~i.indexOf("random(")) && (i = wn(i)),
          o && ((v = [r, i]), o(v, e, t), (r = v[0]), (i = v[1])),
          d = r.match(Ro) || [];
        (p = Ro.exec(i));

      )
        (_ = p[0]),
          (h = i.substring(u, p.index)),
          f ? (f = (f + 1) % 5) : h.substr(-5) === "rgba(" && (f = 1),
          _ !== d[c++] &&
            ((m = parseFloat(d[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || c === 1 ? h : ",",
              s: m,
              c: _.charAt(1) === "=" ? Ii(m, _) - m : parseFloat(_) - m,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = Ro.lastIndex));
      return (
        (l.c = u < i.length ? i.substring(u, i.length) : ""),
        (l.fp = a),
        (El.test(i) || y) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Go = function (e, t, r, i, s, o, a, l, u, c) {
      xe(i) && (i = i(s || 0, e, o));
      var p = e[t],
        d =
          r !== "get"
            ? r
            : xe(p)
            ? u
              ? e[
                  t.indexOf("set") || !xe(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : p,
        f = xe(p) ? (u ? hh : uu) : jo,
        _;
      if (
        (Ve(i) &&
          (~i.indexOf("random(") && (i = wn(i)),
          i.charAt(1) === "=" &&
            ((_ = Ii(d, i) + (rt(d) || 0)), (_ || _ === 0) && (i = _))),
        !c || d !== i || Ko)
      )
        return !isNaN(d * i) && i !== ""
          ? ((_ = new vt(
              this._pt,
              e,
              t,
              +d || 0,
              i - (d || 0),
              typeof p == "boolean" ? ph : cu,
              0,
              f
            )),
            u && (_.fp = u),
            a && _.modifier(a, this, e),
            (this._pt = _))
          : (!p && !(t in e) && Lo(t, i),
            ah.call(this, e, t, d, i, f, l || Et.stringFilter, u));
    },
    lh = function (e, t, r, i, s) {
      if (
        (xe(e) && (e = xn(e, s, t, r, i)),
        !ir(e) || (e.style && e.nodeType) || tt(e) || bl(e))
      )
        return Ve(e) ? xn(e, s, t, r, i) : e;
      var o = {},
        a;
      for (a in e) o[a] = xn(e[a], s, t, r, i);
      return o;
    },
    ou = function (e, t, r, i, s, o) {
      var a, l, u, c;
      if (
        Ct[e] &&
        (a = new Ct[e]()).init(
          s,
          a.rawVars ? t[e] : lh(t[e], i, s, o, r),
          r,
          i,
          o
        ) !== !1 &&
        ((r._pt = l = new vt(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        r !== qi)
      )
        for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    zr,
    Ko,
    Zo = function n(e, t, r) {
      var i = e.vars,
        s = i.ease,
        o = i.startAt,
        a = i.immediateRender,
        l = i.lazy,
        u = i.onUpdate,
        c = i.runBackwards,
        p = i.yoyoEase,
        d = i.keyframes,
        f = i.autoRevert,
        _ = e._dur,
        h = e._startAt,
        m = e._targets,
        y = e.parent,
        v = y && y.data === "nested" ? y.vars.targets : m,
        S = e._overwrite === "auto" && !Co,
        b = e.timeline,
        T,
        E,
        w,
        C,
        A,
        O,
        P,
        x,
        R,
        L,
        F,
        V,
        W;
      if (
        (b && (!d || !s) && (s = "none"),
        (e._ease = oi(s, Di.ease)),
        (e._yEase = p ? ru(oi(p === !0 ? s : p, Di.ease)) : 0),
        p &&
          e._yoyo &&
          !e._repeat &&
          ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
        (e._from = !b && !!i.runBackwards),
        !b || (d && !i.stagger))
      ) {
        if (
          ((x = m[0] ? ni(m[0]).harness : 0),
          (V = x && i[x.prop]),
          (T = Es(i, Io)),
          h &&
            (h._zTime < 0 && h.progress(1),
            t < 0 && c && a && !f
              ? h.render(-1, !0)
              : h.revert(c && _ ? Ss : Nf),
            (h._lazy = 0)),
          o)
        ) {
          if (
            (Lr(
              (e._startAt = Le.set(
                m,
                At(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: !h && gt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return kt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ge || (!a && !f)) && e._startAt.revert(Ss),
            a && _ && t <= 0 && r <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (c && _ && !h) {
          if (
            (t && (a = !1),
            (w = At(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !h && gt(l),
                immediateRender: a,
                stagger: 0,
                parent: y,
              },
              T
            )),
            V && (w[x.prop] = V),
            Lr((e._startAt = Le.set(m, w))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ge ? e._startAt.revert(Ss) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            n(e._startAt, et, et);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (_ && gt(l)) || (l && !_), E = 0;
          E < m.length;
          E++
        ) {
          if (
            ((A = m[E]),
            (P = A._gsap || qo(m)[E]._gsap),
            (e._ptLookup[E] = L = {}),
            No[P.id] && Dr.length && Ts(),
            (F = v === m ? E : v.indexOf(A)),
            x &&
              (R = new x()).init(A, V || T, e, F, v) !== !1 &&
              ((e._pt = C =
                new vt(e._pt, A, R.name, 0, 1, R.render, R, 0, R.priority)),
              R._props.forEach(function (N) {
                L[N] = C;
              }),
              R.priority && (O = 1)),
            !x || V)
          )
            for (w in T)
              Ct[w] && (R = ou(w, T, e, F, A, v))
                ? R.priority && (O = 1)
                : (L[w] = C =
                    Go.call(e, A, w, "get", T[w], F, v, 0, i.stringFilter));
          e._op && e._op[E] && e.kill(A, e._op[E]),
            S &&
              e._pt &&
              ((zr = e),
              Se.killTweensOf(A, L, e.globalTime(t)),
              (W = !e.parent),
              (zr = 0)),
            e._pt && l && (No[P.id] = 1);
        }
        O && hu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !W),
        d && t <= 0 && b.render(rr, !0, !0);
    },
    uh = function (e, t, r, i, s, o, a, l) {
      var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        c,
        p,
        d,
        f;
      if (!u)
        for (
          u = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
          f--;

        ) {
          if (((c = d[f][t]), c && c.d && c.d._pt))
            for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
          if (!c)
            return (
              (Ko = 1),
              (e.vars[t] = "+=0"),
              Zo(e, a),
              (Ko = 0),
              l ? _n(t + " not eligible for reset") : 1
            );
          u.push(c);
        }
      for (f = u.length; f--; )
        (p = u[f]),
          (c = p._pt || p),
          (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c),
          (c.c = r - c.s),
          p.e && (p.e = ke(r) + rt(p.e)),
          p.b && (p.b = c.s + rt(p.b));
    },
    ch = function (e, t) {
      var r = e[0] ? ni(e[0]).harness : 0,
        i = r && r.aliases,
        s,
        o,
        a,
        l;
      if (!i) return t;
      s = Ni({}, t);
      for (o in i)
        if (o in s)
          for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    fh = function (e, t, r, i) {
      var s = t.ease || i || "power1.inOut",
        o,
        a;
      if (tt(t))
        (a = r[e] || (r[e] = [])),
          t.forEach(function (l, u) {
            return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in t)
          (a = r[o] || (r[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
    },
    xn = function (e, t, r, i, s) {
      return xe(e)
        ? e.call(t, r, i, s)
        : Ve(e) && ~e.indexOf("random(")
        ? wn(e)
        : e;
    },
    au = Fo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    lu = {};
  mt(au + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (lu[n] = 1);
  });
  var Le = (function (n) {
    ii(e, n);
    function e(r, i, s, o) {
      var a;
      typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
        (a = n.call(this, o ? i : mn(i)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        p = l.immediateRender,
        d = l.stagger,
        f = l.overwrite,
        _ = l.keyframes,
        h = l.defaults,
        m = l.scrollTrigger,
        y = l.yoyoEase,
        v = i.parent || Se,
        S = (tt(r) || bl(r) ? mr(r[0]) : "length" in i) ? [r] : zt(r),
        b,
        T,
        E,
        w,
        C,
        A,
        O,
        P;
      if (
        ((a._targets = S.length
          ? qo(S)
          : _n(
              "GSAP target " + r + " not found. https://gsap.com",
              !Et.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = f),
        _ || d || ys(u) || ys(c))
      ) {
        if (
          ((i = a.vars),
          (b = a.timeline =
            new ut({
              data: "nested",
              defaults: h || {},
              targets: v && v.data === "nested" ? v.vars.targets : S,
            })),
          b.kill(),
          (b.parent = b._dp = $e(a)),
          (b._start = 0),
          d || ys(u) || ys(c))
        ) {
          if (((w = S.length), (O = d && Ul(d)), ir(d)))
            for (C in d) ~au.indexOf(C) && (P || (P = {}), (P[C] = d[C]));
          for (T = 0; T < w; T++)
            (E = Es(i, lu)),
              (E.stagger = 0),
              y && (E.yoyoEase = y),
              P && Ni(E, P),
              (A = S[T]),
              (E.duration = +xn(u, $e(a), T, A, S)),
              (E.delay = (+xn(c, $e(a), T, A, S) || 0) - a._delay),
              !d &&
                w === 1 &&
                E.delay &&
                ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
              b.to(A, E, O ? O(T, A, S) : 0),
              (b._ease = ae.none);
          b.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (_) {
          mn(At(b.vars.defaults, { ease: "none" })),
            (b._ease = oi(_.ease || i.ease || "none"));
          var x = 0,
            R,
            L,
            F;
          if (tt(_))
            _.forEach(function (V) {
              return b.to(S, V, ">");
            }),
              b.duration();
          else {
            E = {};
            for (C in _)
              C === "ease" || C === "easeEach" || fh(C, _[C], E, _.easeEach);
            for (C in E)
              for (
                R = E[C].sort(function (V, W) {
                  return V.t - W.t;
                }),
                  x = 0,
                  T = 0;
                T < R.length;
                T++
              )
                (L = R[T]),
                  (F = {
                    ease: L.e,
                    duration: ((L.t - (T ? R[T - 1].t : 0)) / 100) * u,
                  }),
                  (F[C] = L.v),
                  b.to(S, F, x),
                  (x += F.duration);
            b.duration() < u && b.to({}, { duration: u - b.duration() });
          }
        }
        u || a.duration((u = b.duration()));
      } else a.timeline = 0;
      return (
        f === !0 && !Co && ((zr = $e(a)), Se.killTweensOf(S), (zr = 0)),
        sr(v, $e(a), s),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (p ||
          (!u &&
            !_ &&
            a._start === De(v._time) &&
            gt(p) &&
            Vf($e(a)) &&
            v.data !== "nested")) &&
          ((a._tTime = -1e-8), a.render(Math.max(0, -c) || 0)),
        m && ql($e(a), m),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (i, s, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          c = i < 0,
          p = i > l - et && !c ? l : i < et ? 0 : i,
          d,
          f,
          _,
          h,
          m,
          y,
          v,
          S,
          b;
        if (!u) Uf(this, i, s, o);
        else if (
          p !== this._tTime ||
          !i ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c) ||
          this._lazy
        ) {
          if (((d = p), (S = this.timeline), this._repeat)) {
            if (((h = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(h * 100 + i, s, o);
            if (
              ((d = De(p % h)),
              p === l
                ? ((_ = this._repeat), (d = u))
                : ((m = De(p / h)),
                  (_ = ~~m),
                  _ && _ === m ? ((d = u), _--) : d > u && (d = u)),
              (y = this._yoyo && _ & 1),
              y && ((b = this._yEase), (d = u - d)),
              (m = zi(this._tTime, h)),
              d === a && !o && this._initted && _ === m)
            )
              return (this._tTime = p), this;
            _ !== m &&
              (S && this._yEase && iu(S, y),
              this.vars.repeatRefresh &&
                !y &&
                !this._lock &&
                d !== h &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(De(h * _), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Wl(this, c ? i : d, o, s, p)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
              return this;
            if (u !== this._dur) return this.render(i, s, o);
          }
          if (
            ((this._tTime = p),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = v = (b || this._ease)(d / u)),
            this._from && (this.ratio = v = 1 - v),
            d && !a && !s && !_ && (kt(this, "onStart"), this._tTime !== p))
          )
            return this;
          for (f = this._pt; f; ) f.r(v, f.d), (f = f._next);
          (S && S.render(i < 0 ? i : S._dur * S._ease(d / this._dur), s, o)) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !s &&
              (c && Wo(this, i, s, o), kt(this, "onUpdate")),
            this._repeat &&
              _ !== m &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              kt(this, "onRepeat"),
            (p === this._tDur || !p) &&
              this._tTime === p &&
              (c && !this._onUpdate && Wo(this, i, !0, !0),
              (i || !u) &&
                ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) &&
                Lr(this, 1),
              !s &&
                !(c && !a) &&
                (p || a || y) &&
                (kt(this, p === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(p < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (i) {
        return (
          (!i || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(i),
          n.prototype.invalidate.call(this, i)
        );
      }),
      (t.resetTo = function (i, s, o, a, l) {
        Tn || Ot.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          c;
        return (
          this._initted || Zo(this, u),
          (c = this._ease(u / this._dur)),
          uh(this, i, s, o, a, c, u, l)
            ? this.resetTo(i, s, o, a, 1)
            : (ks(this, 0),
              this.parent ||
                Nl(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (i, s) {
        if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
          return (
            (this._lazy = this._pt = 0),
            this.parent
              ? Sn(this)
              : this.scrollTrigger && this.scrollTrigger.kill(!!Ge),
            this
          );
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, s, zr && zr.vars.overwrite !== !0)
              ._first || Sn(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Fi(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = i ? zt(i) : a,
          u = this._ptLookup,
          c = this._pt,
          p,
          d,
          f,
          _,
          h,
          m,
          y;
        if ((!s || s === "all") && Wf(a, l))
          return s === "all" && (this._pt = 0), Sn(this);
        for (
          p = this._op = this._op || [],
            s !== "all" &&
              (Ve(s) &&
                ((h = {}),
                mt(s, function (v) {
                  return (h[v] = 1);
                }),
                (s = h)),
              (s = ch(a, s))),
            y = a.length;
          y--;

        )
          if (~l.indexOf(a[y])) {
            (d = u[y]),
              s === "all"
                ? ((p[y] = s), (_ = d), (f = {}))
                : ((f = p[y] = p[y] || {}), (_ = s));
            for (h in _)
              (m = d && d[h]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(h) === !0) &&
                    xs(this, m, "_pt"),
                  delete d[h]),
                f !== "all" && (f[h] = 1);
          }
        return this._initted && !this._pt && c && Sn(this), this;
      }),
      (e.to = function (i, s) {
        return new e(i, s, arguments[2]);
      }),
      (e.from = function (i, s) {
        return vn(1, arguments);
      }),
      (e.delayedCall = function (i, s, o, a) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (i, s, o) {
        return vn(2, arguments);
      }),
      (e.set = function (i, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
      }),
      (e.killTweensOf = function (i, s, o) {
        return Se.killTweensOf(i, s, o);
      }),
      e
    );
  })(En);
  At(Le.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    mt("staggerTo,staggerFrom,staggerFromTo", function (n) {
      Le[n] = function () {
        var e = new ut(),
          t = Vo.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var jo = function (e, t, r) {
      return (e[t] = r);
    },
    uu = function (e, t, r) {
      return e[t](r);
    },
    hh = function (e, t, r, i) {
      return e[t](i.fp, r);
    },
    dh = function (e, t, r) {
      return e.setAttribute(t, r);
    },
    Qo = function (e, t) {
      return xe(e[t]) ? uu : ko(e[t]) && e.setAttribute ? dh : jo;
    },
    cu = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    ph = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    fu = function (e, t) {
      var r = t._pt,
        i = "";
      if (!e && t.b) i = t.b;
      else if (e === 1 && t.e) i = t.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * e)
              : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
            i),
            (r = r._next);
        i += t.c;
      }
      t.set(t.t, t.p, i, t);
    },
    Jo = function (e, t) {
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    _h = function (e, t, r, i) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === i && s.modifier(e, t, r), (s = o);
    },
    gh = function (e) {
      for (var t = this._pt, r, i; t; )
        (i = t._next),
          (t.p === e && !t.op) || t.op === e
            ? xs(this, t, "_pt")
            : t.dep || (r = 1),
          (t = i);
      return !r;
    },
    mh = function (e, t, r, i) {
      i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
    },
    hu = function (e) {
      for (var t = e._pt, r, i, s, o; t; ) {
        for (r = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
        (t._prev = i ? i._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = i) ? (i._prev = t) : (o = t),
          (t = r);
      }
      e._pt = s;
    },
    vt = (function () {
      function n(t, r, i, s, o, a, l, u, c) {
        (this.t = r),
          (this.s = s),
          (this.c = o),
          (this.p = i),
          (this.r = a || cu),
          (this.d = l || this),
          (this.set = u || jo),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (r, i, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = mh),
            (this.m = r),
            (this.mt = s),
            (this.tween = i);
        }),
        n
      );
    })();
  mt(
    Fo +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (Io[n] = 1);
    }
  ),
    (xt.TweenMax = xt.TweenLite = Le),
    (xt.TimelineLite = xt.TimelineMax = ut),
    (Se = new ut({
      sortChildren: !1,
      defaults: Di,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Et.stringFilter = tu);
  var li = [],
    Os = {},
    vh = [],
    du = 0,
    yh = 0,
    ea = function (e) {
      return (Os[e] || vh).map(function (t) {
        return t();
      });
    },
    ta = function () {
      var e = Date.now(),
        t = [];
      e - du > 2 &&
        (ea("matchMediaInit"),
        li.forEach(function (r) {
          var i = r.queries,
            s = r.conditions,
            o,
            a,
            l,
            u;
          for (a in i)
            (o = nr.matchMedia(i[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (r.revert(), l && t.push(r));
        }),
        ea("matchMediaRevert"),
        t.forEach(function (r) {
          return r.onMatch(r, function (i) {
            return r.add(null, i);
          });
        }),
        (du = e),
        ea("matchMedia"));
    },
    pu = (function () {
      function n(t, r) {
        (this.selector = r && Yo(r)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = yh++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (r, i, s) {
          xe(r) && ((s = i), (i = r), (r = xe));
          var o = this,
            a = function () {
              var u = ve,
                c = o.selector,
                p;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = Yo(s)),
                (ve = o),
                (p = i.apply(o, arguments)),
                xe(p) && o._r.push(p),
                (ve = u),
                (o.selector = c),
                (o.isReverted = !1),
                p
              );
            };
          return (
            (o.last = a),
            r === xe
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : r
              ? (o[r] = a)
              : a
          );
        }),
        (e.ignore = function (r) {
          var i = ve;
          (ve = null), r(this), (ve = i);
        }),
        (e.getTweens = function () {
          var r = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof n
                ? r.push.apply(r, i.getTweens())
                : i instanceof Le &&
                    !(i.parent && i.parent.data === "nested") &&
                    r.push(i);
            }),
            r
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (r, i) {
          var s = this;
          if (
            (r
              ? (function () {
                  for (var a = s.getTweens(), l = s.data.length, u; l--; )
                    (u = s.data[l]),
                      u.data === "isFlip" &&
                        (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function (c) {
                          return a.splice(a.indexOf(c), 1);
                        }));
                  for (
                    a
                      .map(function (c) {
                        return {
                          g:
                            c._dur ||
                            c._delay ||
                            (c._sat && !c._sat.vars.immediateRender)
                              ? c.globalTime(0)
                              : -1 / 0,
                          t: c,
                        };
                      })
                      .sort(function (c, p) {
                        return p.g - c.g || -1 / 0;
                      })
                      .forEach(function (c) {
                        return c.t.revert(r);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (u = s.data[l]),
                      u instanceof ut
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Le) && u.revert && u.revert(r);
                  s._r.forEach(function (c) {
                    return c(r, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            i)
          )
            for (var o = li.length; o--; )
              li[o].id === this.id && li.splice(o, 1);
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        n
      );
    })(),
    wh = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t), ve && ve.data.push(this);
      }
      var e = n.prototype;
      return (
        (e.add = function (r, i, s) {
          ir(r) || (r = { matches: r });
          var o = new pu(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          ve && !o.selector && (o.selector = ve.selector),
            this.contexts.push(o),
            (i = o.add("onMatch", i)),
            (o.queries = r);
          for (u in r)
            u === "all"
              ? (c = 1)
              : ((l = nr.matchMedia(r[u])),
                l &&
                  (li.indexOf(o) < 0 && li.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(ta)
                    : l.addEventListener("change", ta)));
          return (
            c &&
              i(o, function (p) {
                return o.add(null, p);
              }),
            this
          );
        }),
        (e.revert = function (r) {
          this.kill(r || {});
        }),
        (e.kill = function (r) {
          this.contexts.forEach(function (i) {
            return i.kill(r, !0);
          });
        }),
        n
      );
    })(),
    Ps = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        t.forEach(function (i) {
          return jl(i);
        });
      },
      timeline: function (e) {
        return new ut(e);
      },
      getTweensOf: function (e, t) {
        return Se.getTweensOf(e, t);
      },
      getProperty: function (e, t, r, i) {
        Ve(e) && (e = zt(e)[0]);
        var s = ni(e || {}).get,
          o = r ? Ll : Dl;
        return (
          r === "native" && (r = ""),
          e &&
            (t
              ? o(((Ct[t] && Ct[t].get) || s)(e, t, r, i))
              : function (a, l, u) {
                  return o(((Ct[a] && Ct[a].get) || s)(e, a, l, u));
                })
        );
      },
      quickSetter: function (e, t, r) {
        if (((e = zt(e)), e.length > 1)) {
          var i = e.map(function (c) {
              return yt.quickSetter(c, t, r);
            }),
            s = i.length;
          return function (c) {
            for (var p = s; p--; ) i[p](c);
          };
        }
        e = e[0] || {};
        var o = Ct[t],
          a = ni(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (c) {
                var p = new o();
                (qi._pt = 0),
                  p.init(e, r ? c + r : c, qi, 0, [e]),
                  p.render(1, p),
                  qi._pt && Jo(1, qi);
              }
            : a.set(e, l);
        return o
          ? u
          : function (c) {
              return u(e, l, r ? c + r : c, a, 1);
            };
      },
      quickTo: function (e, t, r) {
        var i,
          s = yt.to(
            e,
            At(
              ((i = {}), (i[t] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
              r || {}
            )
          ),
          o = function (l, u, c) {
            return s.resetTo(t, l, u, c);
          };
        return (o.tween = s), o;
      },
      isTweening: function (e) {
        return Se.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = oi(e.ease, Di.ease)), Il(Di, e || {});
      },
      config: function (e) {
        return Il(Et, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          r = e.effect,
          i = e.plugins,
          s = e.defaults,
          o = e.extendTimeline;
        (i || "").split(",").forEach(function (a) {
          return (
            a &&
            !Ct[a] &&
            !xt[a] &&
            _n(t + " effect requires " + a + " plugin.")
          );
        }),
          (zo[t] = function (a, l, u) {
            return r(zt(a), At(l || {}, s), u);
          }),
          o &&
            (ut.prototype[t] = function (a, l, u) {
              return this.add(zo[t](a, ir(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        ae[e] = oi(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? oi(e, t) : ae;
      },
      getById: function (e) {
        return Se.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var r = new ut(e),
          i,
          s;
        for (
          r.smoothChildTiming = gt(e.smoothChildTiming),
            Se.remove(r),
            r._dp = 0,
            r._time = r._tTime = Se._time,
            i = Se._first;
          i;

        )
          (s = i._next),
            (t ||
              !(
                !i._dur &&
                i instanceof Le &&
                i.vars.onComplete === i._targets[0]
              )) &&
              sr(r, i, i._start - i._delay),
            (i = s);
        return sr(Se, r, 0), r;
      },
      context: function (e, t) {
        return e ? new pu(e, t) : ve;
      },
      matchMedia: function (e) {
        return new wh(e);
      },
      matchMediaRefresh: function () {
        return (
          li.forEach(function (e) {
            var t = e.conditions,
              r,
              i;
            for (i in t) t[i] && ((t[i] = !1), (r = 1));
            r && e.revert();
          }) || ta()
        );
      },
      addEventListener: function (e, t) {
        var r = Os[e] || (Os[e] = []);
        ~r.indexOf(t) || r.push(t);
      },
      removeEventListener: function (e, t) {
        var r = Os[e],
          i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1);
      },
      utils: {
        wrap: Qf,
        wrapYoyo: Jf,
        distribute: Ul,
        random: Xl,
        snap: Hl,
        normalize: jf,
        getUnit: rt,
        clamp: $f,
        splitColor: Ql,
        toArray: zt,
        selector: Yo,
        mapRange: Gl,
        pipe: Kf,
        unitize: Zf,
        interpolate: eh,
        shuffle: Yl,
      },
      install: Al,
      effects: zo,
      ticker: Ot,
      updateRoot: ut.updateRoot,
      plugins: Ct,
      globalTimeline: Se,
      core: {
        PropTween: vt,
        globals: kl,
        Tween: Le,
        Timeline: ut,
        Animation: En,
        getCache: ni,
        _removeLinkedListItem: xs,
        reverting: function () {
          return Ge;
        },
        context: function (e) {
          return e && ve && (ve.data.push(e), (e._ctx = ve)), ve;
        },
        suppressOverwrites: function (e) {
          return (Co = e);
        },
      },
    };
  mt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Ps[n] = Le[n]);
  }),
    Ot.add(ut.updateRoot),
    (qi = Ps.to({}, { duration: 0 }));
  var Sh = function (e, t) {
      for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
      return r;
    },
    bh = function (e, t) {
      var r = e._targets,
        i,
        s,
        o;
      for (i in t)
        for (s = r.length; s--; )
          (o = e._ptLookup[s][i]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Sh(o, i)),
              o && o.modifier && o.modifier(t[i], e, r[s], i));
    },
    ra = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (i, s, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Ve(s) &&
                ((l = {}),
                mt(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            bh(a, s);
          };
        },
      };
    },
    yt =
      Ps.registerPlugin(
        {
          name: "attr",
          init: function (e, t, r, i, s) {
            var o, a, l;
            this.tween = r;
            for (o in t)
              (l = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[o],
                  i,
                  s,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (e, t) {
            for (var r = t._pt; r; )
              Ge ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var r = t.length; r--; )
              this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
          },
        },
        ra("roundProps", Uo),
        ra("modifiers"),
        ra("snap", Hl)
      ) || Ps;
  (Le.version = ut.version = yt.version = "3.12.7"),
    (Cl = 1),
    Oo() && Wi(),
    ae.Power0,
    ae.Power1,
    ae.Power2,
    ae.Power3,
    ae.Power4,
    ae.Linear,
    ae.Quad,
    ae.Cubic,
    ae.Quart,
    ae.Quint,
    ae.Strong,
    ae.Elastic,
    ae.Back,
    ae.SteppedEase,
    ae.Bounce,
    ae.Sine,
    ae.Expo,
    ae.Circ;
  /*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var _u,
    Fr,
    Bi,
    ia,
    ui,
    gu,
    na,
    Th = function () {
      return typeof window < "u";
    },
    vr = {},
    ci = 180 / Math.PI,
    Vi = Math.PI / 180,
    Yi = Math.atan2,
    mu = 1e8,
    sa = /([A-Z])/g,
    Eh = /(left|right|width|margin|padding|x)/i,
    xh = /[\s,\(]\S/,
    or = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    oa = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Ch = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Ah = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    kh = function (e, t) {
      var r = t.s + t.c * e;
      t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    vu = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    yu = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Oh = function (e, t, r) {
      return (e.style[t] = r);
    },
    Ph = function (e, t, r) {
      return e.style.setProperty(t, r);
    },
    Rh = function (e, t, r) {
      return (e._gsap[t] = r);
    },
    Mh = function (e, t, r) {
      return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    Dh = function (e, t, r, i, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
    },
    Lh = function (e, t, r, i, s) {
      var o = e._gsap;
      (o[t] = r), o.renderTransform(s, o);
    },
    be = "transform",
    wt = be + "Origin",
    Ih = function n(e, t) {
      var r = this,
        i = this.target,
        s = i.style,
        o = i._gsap;
      if (e in vr && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = or[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (r.tfm[a] = yr(i, a));
                })
              : (this.tfm[e] = o.x ? o[e] : yr(i, e)),
            e === wt && (this.tfm.zOrigin = o.zOrigin);
        else
          return or.transform.split(",").forEach(function (a) {
            return n.call(r, a, t);
          });
        if (this.props.indexOf(be) >= 0) return;
        o.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(wt, t, "")),
          (e = be);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    wu = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    Nh = function () {
      var e = this.props,
        t = this.target,
        r = t.style,
        i = t._gsap,
        s,
        o;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? e[s + 1] === 2
            ? t[e[s]](e[s + 2])
            : (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (r[e[s]] = e[s + 2])
          : r.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(sa, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) i[o] = this.tfm[o];
        i.svg &&
          (i.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = na()),
          (!s || !s.isStart) &&
            !r[be] &&
            (wu(r),
            i.zOrigin &&
              r[wt] &&
              ((r[wt] += " " + i.zOrigin + "px"),
              (i.zOrigin = 0),
              i.renderTransform()),
            (i.uncache = 1));
      }
    },
    Su = function (e, t) {
      var r = { target: e, props: [], revert: Nh, save: Ih };
      return (
        e._gsap || yt.core.getCache(e),
        t &&
          e.style &&
          e.nodeType &&
          t.split(",").forEach(function (i) {
            return r.save(i);
          }),
        r
      );
    },
    bu,
    aa = function (e, t) {
      var r = Fr.createElementNS
        ? Fr.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Fr.createElement(e);
      return r && r.style ? r : Fr.createElement(e);
    },
    ar = function n(e, t, r) {
      var i = getComputedStyle(e);
      return (
        i[t] ||
        i.getPropertyValue(t.replace(sa, "-$1").toLowerCase()) ||
        i.getPropertyValue(t) ||
        (!r && n(e, Ui(t) || t, 1)) ||
        ""
      );
    },
    Tu = "O,Moz,ms,Ms,Webkit".split(","),
    Ui = function (e, t, r) {
      var i = t || ui,
        s = i.style,
        o = 5;
      if (e in s && !r) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Tu[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Tu[o] : "") + e;
    },
    la = function () {
      Th() &&
        window.document &&
        ((_u = window),
        (Fr = _u.document),
        (Bi = Fr.documentElement),
        (ui = aa("div") || { style: {} }),
        aa("div"),
        (be = Ui(be)),
        (wt = be + "Origin"),
        (ui.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (bu = !!Ui("perspective")),
        (na = yt.core.reverting),
        (ia = 1));
    },
    Eu = function (e) {
      var t = e.ownerSVGElement,
        r = aa(
          "svg",
          (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = e.cloneNode(!0),
        s;
      (i.style.display = "block"), r.appendChild(i), Bi.appendChild(r);
      try {
        s = i.getBBox();
      } catch {}
      return r.removeChild(i), Bi.removeChild(r), s;
    },
    xu = function (e, t) {
      for (var r = t.length; r--; )
        if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
    },
    Cu = function (e) {
      var t, r;
      try {
        t = e.getBBox();
      } catch {
        (t = Eu(e)), (r = 1);
      }
      return (
        (t && (t.width || t.height)) || r || (t = Eu(e)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +xu(e, ["x", "cx", "x1"]) || 0,
              y: +xu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Au = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Cu(e));
    },
    fi = function (e, t) {
      if (t) {
        var r = e.style,
          i;
        t in vr && t !== wt && (t = be),
          r.removeProperty
            ? ((i = t.substr(0, 2)),
              (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              r.removeProperty(
                i === "--" ? t : t.replace(sa, "-$1").toLowerCase()
              ))
            : r.removeAttribute(t);
      }
    },
    qr = function (e, t, r, i, s, o) {
      var a = new vt(e._pt, t, r, 0, 1, o ? yu : vu);
      return (e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a;
    },
    ku = { deg: 1, rad: 1, turn: 1 },
    zh = { grid: 1, flex: 1 },
    Wr = function n(e, t, r, i) {
      var s = parseFloat(r) || 0,
        o = (r + "").trim().substr((s + "").length) || "px",
        a = ui.style,
        l = Eh.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        p = 100,
        d = i === "px",
        f = i === "%",
        _,
        h,
        m,
        y;
      if (i === o || !s || ku[i] || ku[o]) return s;
      if (
        (o !== "px" && !d && (s = n(e, t, r, "px")),
        (y = e.getCTM && Au(e)),
        (f || o === "%") && (vr[t] || ~t.indexOf("adius")))
      )
        return (
          (_ = y ? e.getBBox()[l ? "width" : "height"] : e[c]),
          ke(f ? (s / _) * p : (s / 100) * _)
        );
      if (
        ((a[l ? "width" : "height"] = p + (d ? o : i)),
        (h =
          (i !== "rem" && ~t.indexOf("adius")) ||
          (i === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        y && (h = (e.ownerSVGElement || {}).parentNode),
        (!h || h === Fr || !h.appendChild) && (h = Fr.body),
        (m = h._gsap),
        m && f && m.width && l && m.time === Ot.time && !m.uncache)
      )
        return ke((s / m.width) * p);
      if (f && (t === "height" || t === "width")) {
        var v = e.style[t];
        (e.style[t] = p + i), (_ = e[c]), v ? (e.style[t] = v) : fi(e, t);
      } else
        (f || o === "%") &&
          !zh[ar(h, "display")] &&
          (a.position = ar(e, "position")),
          h === e && (a.position = "static"),
          h.appendChild(ui),
          (_ = ui[c]),
          h.removeChild(ui),
          (a.position = "absolute");
      return (
        l && f && ((m = ni(h)), (m.time = Ot.time), (m.width = h[c])),
        ke(d ? (_ * s) / p : _ && s ? (p / _) * s : 0)
      );
    },
    yr = function (e, t, r, i) {
      var s;
      return (
        ia || la(),
        t in or &&
          t !== "transform" &&
          ((t = or[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        vr[t] && t !== "transform"
          ? ((s = An(e, i)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : Ms(ar(e, wt)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
              (s =
                (Rs[t] && Rs[t](e, t, r)) ||
                ar(e, t) ||
                Rl(e, t) ||
                (t === "opacity" ? 1 : 0))),
        r && !~(s + "").trim().indexOf(" ") ? Wr(e, t, s, r) + r : s
      );
    },
    Fh = function (e, t, r, i) {
      if (!r || r === "none") {
        var s = Ui(t, e, 1),
          o = s && ar(e, s, 1);
        o && o !== r
          ? ((t = s), (r = o))
          : t === "borderColor" && (r = ar(e, "borderTopColor"));
      }
      var a = new vt(this._pt, e.style, t, 0, 1, fu),
        l = 0,
        u = 0,
        c,
        p,
        d,
        f,
        _,
        h,
        m,
        y,
        v,
        S,
        b,
        T;
      if (
        ((a.b = r),
        (a.e = i),
        (r += ""),
        (i += ""),
        i === "auto" &&
          ((h = e.style[t]),
          (e.style[t] = i),
          (i = ar(e, t) || i),
          h ? (e.style[t] = h) : fi(e, t)),
        (c = [r, i]),
        tu(c),
        (r = c[0]),
        (i = c[1]),
        (d = r.match(Li) || []),
        (T = i.match(Li) || []),
        T.length)
      ) {
        for (; (p = Li.exec(i)); )
          (m = p[0]),
            (v = i.substring(l, p.index)),
            _
              ? (_ = (_ + 1) % 5)
              : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") &&
                (_ = 1),
            m !== (h = d[u++] || "") &&
              ((f = parseFloat(h) || 0),
              (b = h.substr((f + "").length)),
              m.charAt(1) === "=" && (m = Ii(f, m) + b),
              (y = parseFloat(m)),
              (S = m.substr((y + "").length)),
              (l = Li.lastIndex - S.length),
              S ||
                ((S = S || Et.units[t] || b),
                l === i.length && ((i += S), (a.e += S))),
              b !== S && (f = Wr(e, t, h, S) || 0),
              (a._pt = {
                _next: a._pt,
                p: v || u === 1 ? v : ",",
                s: f,
                c: y - f,
                m: (_ && _ < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < i.length ? i.substring(l, i.length) : "";
      } else a.r = t === "display" && i === "none" ? yu : vu;
      return El.test(i) && (a.e = 0), (this._pt = a), a;
    },
    Ou = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    qh = function (e) {
      var t = e.split(" "),
        r = t[0],
        i = t[1] || "50%";
      return (
        (r === "top" || r === "bottom" || i === "left" || i === "right") &&
          ((e = r), (r = i), (i = e)),
        (t[0] = Ou[r] || r),
        (t[1] = Ou[i] || i),
        t.join(" ")
      );
    },
    Wh = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t,
          i = r.style,
          s = t.u,
          o = r._gsap,
          a,
          l,
          u;
        if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
        else
          for (s = s.split(","), u = s.length; --u > -1; )
            (a = s[u]),
              vr[a] && ((l = 1), (a = a === "transformOrigin" ? wt : be)),
              fi(r, a);
        l &&
          (fi(r, be),
          o &&
            (o.svg && r.removeAttribute("transform"),
            (i.scale = i.rotate = i.translate = "none"),
            An(r, 1),
            (o.uncache = 1),
            wu(i)));
      }
    },
    Rs = {
      clearProps: function (e, t, r, i, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new vt(e._pt, t, r, 0, 0, Wh));
          return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
        }
      },
    },
    Cn = [1, 0, 0, 1, 0, 0],
    Pu = {},
    Ru = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    Mu = function (e) {
      var t = ar(e, be);
      return Ru(t) ? Cn : t.substr(7).match(Tl).map(ke);
    },
    ua = function (e, t) {
      var r = e._gsap || ni(e),
        i = e.style,
        s = Mu(e),
        o,
        a,
        l,
        u;
      return r.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Cn : s)
        : (s === Cn &&
            !e.offsetParent &&
            e !== Bi &&
            !r.svg &&
            ((l = i.display),
            (i.display = "block"),
            (o = e.parentNode),
            (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
              ((u = 1), (a = e.nextElementSibling), Bi.appendChild(e)),
            (s = Mu(e)),
            l ? (i.display = l) : fi(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Bi.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    ca = function (e, t, r, i, s, o) {
      var a = e._gsap,
        l = s || ua(e, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        p = a.xOffset || 0,
        d = a.yOffset || 0,
        f = l[0],
        _ = l[1],
        h = l[2],
        m = l[3],
        y = l[4],
        v = l[5],
        S = t.split(" "),
        b = parseFloat(S[0]) || 0,
        T = parseFloat(S[1]) || 0,
        E,
        w,
        C,
        A;
      r
        ? l !== Cn &&
          (w = f * m - _ * h) &&
          ((C = b * (m / w) + T * (-h / w) + (h * v - m * y) / w),
          (A = b * (-_ / w) + T * (f / w) - (f * v - _ * y) / w),
          (b = C),
          (T = A))
        : ((E = Cu(e)),
          (b = E.x + (~S[0].indexOf("%") ? (b / 100) * E.width : b)),
          (T =
            E.y + (~(S[1] || S[0]).indexOf("%") ? (T / 100) * E.height : T))),
        i || (i !== !1 && a.smooth)
          ? ((y = b - u),
            (v = T - c),
            (a.xOffset = p + (y * f + v * h) - y),
            (a.yOffset = d + (y * _ + v * m) - v))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = b),
        (a.yOrigin = T),
        (a.smooth = !!i),
        (a.origin = t),
        (a.originIsAbsolute = !!r),
        (e.style[wt] = "0px 0px"),
        o &&
          (qr(o, a, "xOrigin", u, b),
          qr(o, a, "yOrigin", c, T),
          qr(o, a, "xOffset", p, a.xOffset),
          qr(o, a, "yOffset", d, a.yOffset)),
        e.setAttribute("data-svg-origin", b + " " + T);
    },
    An = function (e, t) {
      var r = e._gsap || new su(e);
      if ("x" in r && !t && !r.uncache) return r;
      var i = e.style,
        s = r.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = ar(e, wt) || "0",
        c,
        p,
        d,
        f,
        _,
        h,
        m,
        y,
        v,
        S,
        b,
        T,
        E,
        w,
        C,
        A,
        O,
        P,
        x,
        R,
        L,
        F,
        V,
        W,
        N,
        z,
        g,
        I,
        $,
        he,
        te,
        me;
      return (
        (c = p = d = h = m = y = v = S = b = 0),
        (f = _ = 1),
        (r.svg = !!(e.getCTM && Au(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (i[be] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[be] !== "none" ? l[be] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (w = ua(e, r.svg)),
        r.svg &&
          (r.uncache
            ? ((N = e.getBBox()),
              (u = r.xOrigin - N.x + "px " + (r.yOrigin - N.y) + "px"),
              (W = ""))
            : (W = !t && e.getAttribute("data-svg-origin")),
          ca(e, W || u, !!W || r.originIsAbsolute, r.smooth !== !1, w)),
        (T = r.xOrigin || 0),
        (E = r.yOrigin || 0),
        w !== Cn &&
          ((P = w[0]),
          (x = w[1]),
          (R = w[2]),
          (L = w[3]),
          (c = F = w[4]),
          (p = V = w[5]),
          w.length === 6
            ? ((f = Math.sqrt(P * P + x * x)),
              (_ = Math.sqrt(L * L + R * R)),
              (h = P || x ? Yi(x, P) * ci : 0),
              (v = R || L ? Yi(R, L) * ci + h : 0),
              v && (_ *= Math.abs(Math.cos(v * Vi))),
              r.svg && ((c -= T - (T * P + E * R)), (p -= E - (T * x + E * L))))
            : ((me = w[6]),
              (he = w[7]),
              (g = w[8]),
              (I = w[9]),
              ($ = w[10]),
              (te = w[11]),
              (c = w[12]),
              (p = w[13]),
              (d = w[14]),
              (C = Yi(me, $)),
              (m = C * ci),
              C &&
                ((A = Math.cos(-C)),
                (O = Math.sin(-C)),
                (W = F * A + g * O),
                (N = V * A + I * O),
                (z = me * A + $ * O),
                (g = F * -O + g * A),
                (I = V * -O + I * A),
                ($ = me * -O + $ * A),
                (te = he * -O + te * A),
                (F = W),
                (V = N),
                (me = z)),
              (C = Yi(-R, $)),
              (y = C * ci),
              C &&
                ((A = Math.cos(-C)),
                (O = Math.sin(-C)),
                (W = P * A - g * O),
                (N = x * A - I * O),
                (z = R * A - $ * O),
                (te = L * O + te * A),
                (P = W),
                (x = N),
                (R = z)),
              (C = Yi(x, P)),
              (h = C * ci),
              C &&
                ((A = Math.cos(C)),
                (O = Math.sin(C)),
                (W = P * A + x * O),
                (N = F * A + V * O),
                (x = x * A - P * O),
                (V = V * A - F * O),
                (P = W),
                (F = N)),
              m &&
                Math.abs(m) + Math.abs(h) > 359.9 &&
                ((m = h = 0), (y = 180 - y)),
              (f = ke(Math.sqrt(P * P + x * x + R * R))),
              (_ = ke(Math.sqrt(V * V + me * me))),
              (C = Yi(F, V)),
              (v = Math.abs(C) > 2e-4 ? C * ci : 0),
              (b = te ? 1 / (te < 0 ? -te : te) : 0)),
          r.svg &&
            ((W = e.getAttribute("transform")),
            (r.forceCSS = e.setAttribute("transform", "") || !Ru(ar(e, be))),
            W && e.setAttribute("transform", W))),
        Math.abs(v) > 90 &&
          Math.abs(v) < 270 &&
          (s
            ? ((f *= -1),
              (v += h <= 0 ? 180 : -180),
              (h += h <= 0 ? 180 : -180))
            : ((_ *= -1), (v += v <= 0 ? 180 : -180))),
        (t = t || r.uncache),
        (r.x =
          c -
          ((r.xPercent =
            c &&
            ((!t && r.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (e.offsetWidth * r.xPercent) / 100
            : 0) +
          o),
        (r.y =
          p -
          ((r.yPercent =
            p &&
            ((!t && r.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          o),
        (r.z = d + o),
        (r.scaleX = ke(f)),
        (r.scaleY = ke(_)),
        (r.rotation = ke(h) + a),
        (r.rotationX = ke(m) + a),
        (r.rotationY = ke(y) + a),
        (r.skewX = v + a),
        (r.skewY = S + a),
        (r.transformPerspective = b + o),
        (r.zOrigin = parseFloat(u.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
          (i[wt] = Ms(u)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Et.force3D),
        (r.renderTransform = r.svg ? Vh : bu ? Du : Bh),
        (r.uncache = 0),
        r
      );
    },
    Ms = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    fa = function (e, t, r) {
      var i = rt(t);
      return ke(parseFloat(t) + parseFloat(Wr(e, "x", r + "px", i))) + i;
    },
    Bh = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        Du(e, t);
    },
    hi = "0deg",
    kn = "0px",
    di = ") ",
    Du = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        s = r.yPercent,
        o = r.x,
        a = r.y,
        l = r.z,
        u = r.rotation,
        c = r.rotationY,
        p = r.rotationX,
        d = r.skewX,
        f = r.skewY,
        _ = r.scaleX,
        h = r.scaleY,
        m = r.transformPerspective,
        y = r.force3D,
        v = r.target,
        S = r.zOrigin,
        b = "",
        T = (y === "auto" && e && e !== 1) || y === !0;
      if (S && (p !== hi || c !== hi)) {
        var E = parseFloat(c) * Vi,
          w = Math.sin(E),
          C = Math.cos(E),
          A;
        (E = parseFloat(p) * Vi),
          (A = Math.cos(E)),
          (o = fa(v, o, w * A * -S)),
          (a = fa(v, a, -Math.sin(E) * -S)),
          (l = fa(v, l, C * A * -S + S));
      }
      m !== kn && (b += "perspective(" + m + di),
        (i || s) && (b += "translate(" + i + "%, " + s + "%) "),
        (T || o !== kn || a !== kn || l !== kn) &&
          (b +=
            l !== kn || T
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + di),
        u !== hi && (b += "rotate(" + u + di),
        c !== hi && (b += "rotateY(" + c + di),
        p !== hi && (b += "rotateX(" + p + di),
        (d !== hi || f !== hi) && (b += "skew(" + d + ", " + f + di),
        (_ !== 1 || h !== 1) && (b += "scale(" + _ + ", " + h + di),
        (v.style[be] = b || "translate(0, 0)");
    },
    Vh = function (e, t) {
      var r = t || this,
        i = r.xPercent,
        s = r.yPercent,
        o = r.x,
        a = r.y,
        l = r.rotation,
        u = r.skewX,
        c = r.skewY,
        p = r.scaleX,
        d = r.scaleY,
        f = r.target,
        _ = r.xOrigin,
        h = r.yOrigin,
        m = r.xOffset,
        y = r.yOffset,
        v = r.forceCSS,
        S = parseFloat(o),
        b = parseFloat(a),
        T,
        E,
        w,
        C,
        A;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Vi),
            (u *= Vi),
            (T = Math.cos(l) * p),
            (E = Math.sin(l) * p),
            (w = Math.sin(l - u) * -d),
            (C = Math.cos(l - u) * d),
            u &&
              ((c *= Vi),
              (A = Math.tan(u - c)),
              (A = Math.sqrt(1 + A * A)),
              (w *= A),
              (C *= A),
              c &&
                ((A = Math.tan(c)),
                (A = Math.sqrt(1 + A * A)),
                (T *= A),
                (E *= A))),
            (T = ke(T)),
            (E = ke(E)),
            (w = ke(w)),
            (C = ke(C)))
          : ((T = p), (C = d), (E = w = 0)),
        ((S && !~(o + "").indexOf("px")) || (b && !~(a + "").indexOf("px"))) &&
          ((S = Wr(f, "x", o, "px")), (b = Wr(f, "y", a, "px"))),
        (_ || h || m || y) &&
          ((S = ke(S + _ - (_ * T + h * w) + m)),
          (b = ke(b + h - (_ * E + h * C) + y))),
        (i || s) &&
          ((A = f.getBBox()),
          (S = ke(S + (i / 100) * A.width)),
          (b = ke(b + (s / 100) * A.height))),
        (A =
          "matrix(" +
          T +
          "," +
          E +
          "," +
          w +
          "," +
          C +
          "," +
          S +
          "," +
          b +
          ")"),
        f.setAttribute("transform", A),
        v && (f.style[be] = A);
    },
    Yh = function (e, t, r, i, s) {
      var o = 360,
        a = Ve(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? ci : 1),
        u = l - i,
        c = i + u + "deg",
        p,
        d;
      return (
        a &&
          ((p = s.split("_")[1]),
          p === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -360)),
          p === "cw" && u < 0
            ? (u = ((u + o * mu) % o) - ~~(u / o) * o)
            : p === "ccw" && u > 0 && (u = ((u - o * mu) % o) - ~~(u / o) * o)),
        (e._pt = d = new vt(e._pt, t, r, i, u, Ch)),
        (d.e = c),
        (d.u = "deg"),
        e._props.push(r),
        d
      );
    },
    Lu = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Uh = function (e, t, r) {
      var i = Lu({}, r._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = r.style,
        a,
        l,
        u,
        c,
        p,
        d,
        f,
        _;
      i.svg
        ? ((u = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (o[be] = t),
          (a = An(r, 1)),
          fi(r, be),
          r.setAttribute("transform", u))
        : ((u = getComputedStyle(r)[be]),
          (o[be] = t),
          (a = An(r, 1)),
          (o[be] = u));
      for (l in vr)
        (u = i[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((f = rt(u)),
            (_ = rt(c)),
            (p = f !== _ ? Wr(r, l, u, _) : parseFloat(u)),
            (d = parseFloat(c)),
            (e._pt = new vt(e._pt, a, l, p, d - p, oa)),
            (e._pt.u = _ || 0),
            e._props.push(l));
      Lu(a, i);
    };
  mt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      r = "Right",
      i = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, r, i, s] : [t + s, t + r, i + r, i + s]).map(function (
        a
      ) {
        return e < 2 ? n + a : "border" + a + n;
      });
    Rs[e > 1 ? "border" + n : n] = function (a, l, u, c, p) {
      var d, f;
      if (arguments.length < 4)
        return (
          (d = o.map(function (_) {
            return yr(a, _, u);
          })),
          (f = d.join(" ")),
          f.split(d[0]).length === 5 ? d[0] : f
        );
      (d = (c + "").split(" ")),
        (f = {}),
        o.forEach(function (_, h) {
          return (f[_] = d[h] = d[h] || d[((h - 1) / 2) | 0]);
        }),
        a.init(l, f, p);
    };
  });
  var Iu = {
    name: "css",
    register: la,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, r, i, s) {
      var o = this._props,
        a = e.style,
        l = r.vars.startAt,
        u,
        c,
        p,
        d,
        f,
        _,
        h,
        m,
        y,
        v,
        S,
        b,
        T,
        E,
        w,
        C;
      ia || la(),
        (this.styles = this.styles || Su(e)),
        (C = this.styles.props),
        (this.tween = r);
      for (h in t)
        if (
          h !== "autoRound" &&
          ((c = t[h]), !(Ct[h] && ou(h, t, r, i, e, s)))
        ) {
          if (
            ((f = typeof c),
            (_ = Rs[h]),
            f === "function" && ((c = c.call(r, i, e, s)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = wn(c)),
            _)
          )
            _(this, e, h, c, r) && (w = 1);
          else if (h.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
              (c += ""),
              (Nr.lastIndex = 0),
              Nr.test(u) || ((m = rt(u)), (y = rt(c))),
              y ? m !== y && (u = Wr(e, h, u, y) + y) : m && (c += m),
              this.add(a, "setProperty", u, c, i, s, 0, 0, h),
              o.push(h),
              C.push(h, 0, a[h]);
          else if (f !== "undefined") {
            if (
              (l && h in l
                ? ((u =
                    typeof l[h] == "function" ? l[h].call(r, i, e, s) : l[h]),
                  Ve(u) && ~u.indexOf("random(") && (u = wn(u)),
                  rt(u + "") ||
                    u === "auto" ||
                    (u += Et.units[h] || rt(yr(e, h)) || ""),
                  (u + "").charAt(1) === "=" && (u = yr(e, h)))
                : (u = yr(e, h)),
              (d = parseFloat(u)),
              (v = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              v && (c = c.substr(2)),
              (p = parseFloat(c)),
              h in or &&
                (h === "autoAlpha" &&
                  (d === 1 && yr(e, "visibility") === "hidden" && p && (d = 0),
                  C.push("visibility", 0, a.visibility),
                  qr(
                    this,
                    a,
                    "visibility",
                    d ? "inherit" : "hidden",
                    p ? "inherit" : "hidden",
                    !p
                  )),
                h !== "scale" &&
                  h !== "transform" &&
                  ((h = or[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
              (S = h in vr),
              S)
            ) {
              if (
                (this.styles.save(h),
                b ||
                  ((T = e._gsap),
                  (T.renderTransform && !t.parseTransform) ||
                    An(e, t.parseTransform),
                  (E = t.smoothOrigin !== !1 && T.smooth),
                  (b = this._pt =
                    new vt(this._pt, a, be, 0, 1, T.renderTransform, T, 0, -1)),
                  (b.dep = 1)),
                h === "scale")
              )
                (this._pt = new vt(
                  this._pt,
                  T,
                  "scaleY",
                  T.scaleY,
                  (v ? Ii(T.scaleY, v + p) : p) - T.scaleY || 0,
                  oa
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", h),
                  (h += "X");
              else if (h === "transformOrigin") {
                C.push(wt, 0, a[wt]),
                  (c = qh(c)),
                  T.svg
                    ? ca(e, c, 0, E, 0, this)
                    : ((y = parseFloat(c.split(" ")[2]) || 0),
                      y !== T.zOrigin && qr(this, T, "zOrigin", T.zOrigin, y),
                      qr(this, a, h, Ms(u), Ms(c)));
                continue;
              } else if (h === "svgOrigin") {
                ca(e, c, 1, E, 0, this);
                continue;
              } else if (h in Pu) {
                Yh(this, T, h, d, v ? Ii(d, v + c) : c);
                continue;
              } else if (h === "smoothOrigin") {
                qr(this, T, "smooth", T.smooth, c);
                continue;
              } else if (h === "force3D") {
                T[h] = c;
                continue;
              } else if (h === "transform") {
                Uh(this, c, e);
                continue;
              }
            } else h in a || (h = Ui(h) || h);
            if (
              S ||
              ((p || p === 0) && (d || d === 0) && !xh.test(c) && h in a)
            )
              (m = (u + "").substr((d + "").length)),
                p || (p = 0),
                (y = rt(c) || (h in Et.units ? Et.units[h] : m)),
                m !== y && (d = Wr(e, h, u, y)),
                (this._pt = new vt(
                  this._pt,
                  S ? T : a,
                  h,
                  d,
                  (v ? Ii(d, v + p) : p) - d,
                  !S && (y === "px" || h === "zIndex") && t.autoRound !== !1
                    ? kh
                    : oa
                )),
                (this._pt.u = y || 0),
                m !== y && y !== "%" && ((this._pt.b = u), (this._pt.r = Ah));
            else if (h in a) Fh.call(this, e, h, u, v ? v + c : c);
            else if (h in e) this.add(e, h, u || e[h], v ? v + c : c, i, s);
            else if (h !== "parseTransform") {
              Lo(h, c);
              continue;
            }
            S ||
              (h in a
                ? C.push(h, 0, a[h])
                : typeof e[h] == "function"
                ? C.push(h, 2, e[h]())
                : C.push(h, 1, u || e[h])),
              o.push(h);
          }
        }
      w && hu(this);
    },
    render: function (e, t) {
      if (t.tween._time || !na())
        for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
      else t.styles.revert();
    },
    get: yr,
    aliases: or,
    getSetter: function (e, t, r) {
      var i = or[t];
      return (
        i && i.indexOf(",") < 0 && (t = i),
        t in vr && t !== wt && (e._gsap.x || yr(e, "x"))
          ? r && gu === r
            ? t === "scale"
              ? Mh
              : Rh
            : (gu = r || {}) && (t === "scale" ? Dh : Lh)
          : e.style && !ko(e.style[t])
          ? Oh
          : ~t.indexOf("-")
          ? Ph
          : Qo(e, t)
      );
    },
    core: { _removeProperty: fi, _getMatrix: ua },
  };
  (yt.utils.checkPrefix = Ui),
    (yt.core.getStyleSaver = Su),
    (function (n, e, t, r) {
      var i = mt(n + "," + e + "," + t, function (s) {
        vr[s] = 1;
      });
      mt(e, function (s) {
        (Et.units[s] = "deg"), (Pu[s] = 1);
      }),
        (or[i[13]] = n + "," + e),
        mt(r, function (s) {
          var o = s.split(":");
          or[o[1]] = i[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    mt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        Et.units[n] = "px";
      }
    ),
    yt.registerPlugin(Iu);
  var Y = yt.registerPlugin(Iu) || yt;
  Y.core.Tween;
  function Hh(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r);
    }
  }
  function Xh(n, e, t) {
    return e && Hh(n.prototype, e), n;
  }
  /*!
   * Observer 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Ke,
    Ds,
    Pt,
    Br,
    Vr,
    Hi,
    Nu,
    pi,
    On,
    zu,
    wr,
    Xt,
    Fu,
    qu = function () {
      return (
        Ke ||
        (typeof window < "u" && (Ke = window.gsap) && Ke.registerPlugin && Ke)
      );
    },
    Wu = 1,
    Xi = [],
    ie = [],
    lr = [],
    Pn = Date.now,
    ha = function (e, t) {
      return t;
    },
    $h = function () {
      var e = On.core,
        t = e.bridge || {},
        r = e._scrollers,
        i = e._proxies;
      r.push.apply(r, ie),
        i.push.apply(i, lr),
        (ie = r),
        (lr = i),
        (ha = function (o, a) {
          return t[o](a);
        });
    },
    Yr = function (e, t) {
      return ~lr.indexOf(e) && lr[lr.indexOf(e) + 1][t];
    },
    Rn = function (e) {
      return !!~zu.indexOf(e);
    },
    ct = function (e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: i !== !1, capture: !!s });
    },
    ft = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    Ls = "scrollLeft",
    Is = "scrollTop",
    da = function () {
      return (wr && wr.isPressed) || ie.cache++;
    },
    Ns = function (e, t) {
      var r = function i(s) {
        if (s || s === 0) {
          Wu && (Pt.history.scrollRestoration = "manual");
          var o = wr && wr.isPressed;
          (s = i.v = Math.round(s) || (wr && wr.iOS ? 1 : 0)),
            e(s),
            (i.cacheID = ie.cache),
            o && ha("ss", s);
        } else
          (t || ie.cache !== i.cacheID || ha("ref")) &&
            ((i.cacheID = ie.cache), (i.v = e()));
        return i.v + i.offset;
      };
      return (r.offset = 0), e && r;
    },
    ht = {
      s: Ls,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Ns(function (n) {
        return arguments.length
          ? Pt.scrollTo(n, ze.sc())
          : Pt.pageXOffset || Br[Ls] || Vr[Ls] || Hi[Ls] || 0;
      }),
    },
    ze = {
      s: Is,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: ht,
      sc: Ns(function (n) {
        return arguments.length
          ? Pt.scrollTo(ht.sc(), n)
          : Pt.pageYOffset || Br[Is] || Vr[Is] || Hi[Is] || 0;
      }),
    },
    St = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || Ke.utils.toArray)(e)[0] ||
        (typeof e == "string" && Ke.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Ur = function (e, t) {
      var r = t.s,
        i = t.sc;
      Rn(e) && (e = Br.scrollingElement || Vr);
      var s = ie.indexOf(e),
        o = i === ze.sc ? 1 : 2;
      !~s && (s = ie.push(e) - 1), ie[s + o] || ct(e, "scroll", da);
      var a = ie[s + o],
        l =
          a ||
          (ie[s + o] =
            Ns(Yr(e, r), !0) ||
            (Rn(e)
              ? i
              : Ns(function (u) {
                  return arguments.length ? (e[r] = u) : e[r];
                })));
      return (
        (l.target = e),
        a || (l.smooth = Ke.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    pa = function (e, t, r) {
      var i = e,
        s = e,
        o = Pn(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (_, h) {
          var m = Pn();
          h || m - o > l
            ? ((s = i), (i = _), (a = o), (o = m))
            : r
            ? (i += _)
            : (i = s + ((_ - s) / (m - a)) * (o - a));
        },
        p = function () {
          (s = i = r ? 0 : i), (a = o = 0);
        },
        d = function (_) {
          var h = a,
            m = s,
            y = Pn();
          return (
            (_ || _ === 0) && _ !== i && c(_),
            o === a || y - a > u
              ? 0
              : ((i + (r ? m : -m)) / ((r ? y : o) - h)) * 1e3
          );
        };
      return { update: c, reset: p, getVelocity: d };
    },
    Mn = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Bu = function (e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    Vu = function () {
      (On = Ke.core.globals().ScrollTrigger), On && On.core && $h();
    },
    Yu = function (e) {
      return (
        (Ke = e || qu()),
        !Ds &&
          Ke &&
          typeof document < "u" &&
          document.body &&
          ((Pt = window),
          (Br = document),
          (Vr = Br.documentElement),
          (Hi = Br.body),
          (zu = [Pt, Br, Vr, Hi]),
          Ke.utils.clamp,
          (Fu = Ke.core.context || function () {}),
          (pi = "onpointerenter" in Hi ? "pointer" : "mouse"),
          (Nu = Oe.isTouch =
            Pt.matchMedia &&
            Pt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Pt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Xt = Oe.eventTypes =
            (
              "ontouchstart" in Vr
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Vr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Wu = 0);
          }, 500),
          Vu(),
          (Ds = 1)),
        Ds
      );
    };
  (ht.op = ze), (ie.cache = 0);
  var Oe = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (r) {
        Ds || Yu(Ke) || console.warn("Please gsap.registerPlugin(Observer)"),
          On || Vu();
        var i = r.tolerance,
          s = r.dragMinimum,
          o = r.type,
          a = r.target,
          l = r.lineHeight,
          u = r.debounce,
          c = r.preventDefault,
          p = r.onStop,
          d = r.onStopDelay,
          f = r.ignore,
          _ = r.wheelSpeed,
          h = r.event,
          m = r.onDragStart,
          y = r.onDragEnd,
          v = r.onDrag,
          S = r.onPress,
          b = r.onRelease,
          T = r.onRight,
          E = r.onLeft,
          w = r.onUp,
          C = r.onDown,
          A = r.onChangeX,
          O = r.onChangeY,
          P = r.onChange,
          x = r.onToggleX,
          R = r.onToggleY,
          L = r.onHover,
          F = r.onHoverEnd,
          V = r.onMove,
          W = r.ignoreCheck,
          N = r.isNormalizer,
          z = r.onGestureStart,
          g = r.onGestureEnd,
          I = r.onWheel,
          $ = r.onEnable,
          he = r.onDisable,
          te = r.onClick,
          me = r.scrollSpeed,
          D = r.capture,
          G = r.allowClicks,
          fe = r.lockAxis,
          se = r.onLockAxis;
        (this.target = a = St(a) || Vr),
          (this.vars = r),
          f && (f = Ke.utils.toArray(f)),
          (i = i || 1e-9),
          (s = s || 0),
          (_ = _ || 1),
          (me = me || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Pt.getComputedStyle(Hi).lineHeight) || 22);
        var ye,
          Ze,
          je,
          M,
          K,
          Ce,
          We,
          k = this,
          Lt = 0,
          kr = 0,
          Jr = r.passive || (!c && r.passive !== !1),
          Pe = Ur(a, ht),
          Or = Ur(a, ze),
          ei = Pe(),
          ki = Or(),
          He =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Xt[0] === "pointerdown",
          ti = Rn(a),
          Re = a.ownerDocument || Br,
          jt = [0, 0, 0],
          Ut = [0, 0, 0],
          Pr = 0,
          ps = function () {
            return (Pr = Pn());
          },
          Ne = function (X, ue) {
            return (
              ((k.event = X) && f && ~f.indexOf(X.target)) ||
              (ue && He && X.pointerType !== "touch") ||
              (W && W(X, ue))
            );
          },
          To = function () {
            k._vx.reset(), k._vy.reset(), Ze.pause(), p && p(k);
          },
          Rr = function () {
            var X = (k.deltaX = Bu(jt)),
              ue = (k.deltaY = Bu(Ut)),
              q = Math.abs(X) >= i,
              j = Math.abs(ue) >= i;
            P && (q || j) && P(k, X, ue, jt, Ut),
              q &&
                (T && k.deltaX > 0 && T(k),
                E && k.deltaX < 0 && E(k),
                A && A(k),
                x && k.deltaX < 0 != Lt < 0 && x(k),
                (Lt = k.deltaX),
                (jt[0] = jt[1] = jt[2] = 0)),
              j &&
                (C && k.deltaY > 0 && C(k),
                w && k.deltaY < 0 && w(k),
                O && O(k),
                R && k.deltaY < 0 != kr < 0 && R(k),
                (kr = k.deltaY),
                (Ut[0] = Ut[1] = Ut[2] = 0)),
              (M || je) &&
                (V && V(k),
                je && (m && je === 1 && m(k), v && v(k), (je = 0)),
                (M = !1)),
              Ce && !(Ce = !1) && se && se(k),
              K && (I(k), (K = !1)),
              (ye = 0);
          },
          hn = function (X, ue, q) {
            (jt[q] += X),
              (Ut[q] += ue),
              k._vx.update(X),
              k._vy.update(ue),
              u ? ye || (ye = requestAnimationFrame(Rr)) : Rr();
          },
          dn = function (X, ue) {
            fe &&
              !We &&
              ((k.axis = We = Math.abs(X) > Math.abs(ue) ? "x" : "y"),
              (Ce = !0)),
              We !== "y" && ((jt[2] += X), k._vx.update(X, !0)),
              We !== "x" && ((Ut[2] += ue), k._vy.update(ue, !0)),
              u ? ye || (ye = requestAnimationFrame(Rr)) : Rr();
          },
          ri = function (X) {
            if (!Ne(X, 1)) {
              X = Mn(X, c);
              var ue = X.clientX,
                q = X.clientY,
                j = ue - k.x,
                H = q - k.y,
                Q = k.isDragging;
              (k.x = ue),
                (k.y = q),
                (Q ||
                  ((j || H) &&
                    (Math.abs(k.startX - ue) >= s ||
                      Math.abs(k.startY - q) >= s))) &&
                  ((je = Q ? 2 : 1), Q || (k.isDragging = !0), dn(j, H));
            }
          },
          Oi = (k.onPress = function (J) {
            Ne(J, 1) ||
              (J && J.button) ||
              ((k.axis = We = null),
              Ze.pause(),
              (k.isPressed = !0),
              (J = Mn(J)),
              (Lt = kr = 0),
              (k.startX = k.x = J.clientX),
              (k.startY = k.y = J.clientY),
              k._vx.reset(),
              k._vy.reset(),
              ct(N ? a : Re, Xt[1], ri, Jr, !0),
              (k.deltaX = k.deltaY = 0),
              S && S(k));
          }),
          oe = (k.onRelease = function (J) {
            if (!Ne(J, 1)) {
              ft(N ? a : Re, Xt[1], ri, !0);
              var X = !isNaN(k.y - k.startY),
                ue = k.isDragging,
                q =
                  ue &&
                  (Math.abs(k.x - k.startX) > 3 ||
                    Math.abs(k.y - k.startY) > 3),
                j = Mn(J);
              !q &&
                X &&
                (k._vx.reset(),
                k._vy.reset(),
                c &&
                  G &&
                  Ke.delayedCall(0.08, function () {
                    if (Pn() - Pr > 300 && !J.defaultPrevented) {
                      if (J.target.click) J.target.click();
                      else if (Re.createEvent) {
                        var H = Re.createEvent("MouseEvents");
                        H.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Pt,
                          1,
                          j.screenX,
                          j.screenY,
                          j.clientX,
                          j.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          J.target.dispatchEvent(H);
                      }
                    }
                  })),
                (k.isDragging = k.isGesturing = k.isPressed = !1),
                p && ue && !N && Ze.restart(!0),
                je && Rr(),
                y && ue && y(k),
                b && b(k, q);
            }
          }),
          Pi = function (X) {
            return (
              X.touches &&
              X.touches.length > 1 &&
              (k.isGesturing = !0) &&
              z(X, k.isDragging)
            );
          },
          Qt = function () {
            return (k.isGesturing = !1) || g(k);
          },
          Jt = function (X) {
            if (!Ne(X)) {
              var ue = Pe(),
                q = Or();
              hn((ue - ei) * me, (q - ki) * me, 1),
                (ei = ue),
                (ki = q),
                p && Ze.restart(!0);
            }
          },
          er = function (X) {
            if (!Ne(X)) {
              (X = Mn(X, c)), I && (K = !0);
              var ue =
                (X.deltaMode === 1
                  ? l
                  : X.deltaMode === 2
                  ? Pt.innerHeight
                  : 1) * _;
              hn(X.deltaX * ue, X.deltaY * ue, 0), p && !N && Ze.restart(!0);
            }
          },
          Ri = function (X) {
            if (!Ne(X)) {
              var ue = X.clientX,
                q = X.clientY,
                j = ue - k.x,
                H = q - k.y;
              (k.x = ue),
                (k.y = q),
                (M = !0),
                p && Ze.restart(!0),
                (j || H) && dn(j, H);
            }
          },
          pn = function (X) {
            (k.event = X), L(k);
          },
          Mr = function (X) {
            (k.event = X), F(k);
          },
          _s = function (X) {
            return Ne(X) || (Mn(X, c) && te(k));
          };
        (Ze = k._dc = Ke.delayedCall(d || 0.25, To).pause()),
          (k.deltaX = k.deltaY = 0),
          (k._vx = pa(0, 50, !0)),
          (k._vy = pa(0, 50, !0)),
          (k.scrollX = Pe),
          (k.scrollY = Or),
          (k.isDragging = k.isGesturing = k.isPressed = !1),
          Fu(this),
          (k.enable = function (J) {
            return (
              k.isEnabled ||
                (ct(ti ? Re : a, "scroll", da),
                o.indexOf("scroll") >= 0 &&
                  ct(ti ? Re : a, "scroll", Jt, Jr, D),
                o.indexOf("wheel") >= 0 && ct(a, "wheel", er, Jr, D),
                ((o.indexOf("touch") >= 0 && Nu) ||
                  o.indexOf("pointer") >= 0) &&
                  (ct(a, Xt[0], Oi, Jr, D),
                  ct(Re, Xt[2], oe),
                  ct(Re, Xt[3], oe),
                  G && ct(a, "click", ps, !0, !0),
                  te && ct(a, "click", _s),
                  z && ct(Re, "gesturestart", Pi),
                  g && ct(Re, "gestureend", Qt),
                  L && ct(a, pi + "enter", pn),
                  F && ct(a, pi + "leave", Mr),
                  V && ct(a, pi + "move", Ri)),
                (k.isEnabled = !0),
                (k.isDragging = k.isGesturing = k.isPressed = M = je = !1),
                k._vx.reset(),
                k._vy.reset(),
                (ei = Pe()),
                (ki = Or()),
                J && J.type && Oi(J),
                $ && $(k)),
              k
            );
          }),
          (k.disable = function () {
            k.isEnabled &&
              (Xi.filter(function (J) {
                return J !== k && Rn(J.target);
              }).length || ft(ti ? Re : a, "scroll", da),
              k.isPressed &&
                (k._vx.reset(), k._vy.reset(), ft(N ? a : Re, Xt[1], ri, !0)),
              ft(ti ? Re : a, "scroll", Jt, D),
              ft(a, "wheel", er, D),
              ft(a, Xt[0], Oi, D),
              ft(Re, Xt[2], oe),
              ft(Re, Xt[3], oe),
              ft(a, "click", ps, !0),
              ft(a, "click", _s),
              ft(Re, "gesturestart", Pi),
              ft(Re, "gestureend", Qt),
              ft(a, pi + "enter", pn),
              ft(a, pi + "leave", Mr),
              ft(a, pi + "move", Ri),
              (k.isEnabled = k.isPressed = k.isDragging = !1),
              he && he(k));
          }),
          (k.kill = k.revert =
            function () {
              k.disable();
              var J = Xi.indexOf(k);
              J >= 0 && Xi.splice(J, 1), wr === k && (wr = 0);
            }),
          Xi.push(k),
          N && Rn(a) && (wr = k),
          k.enable(h);
      }),
      Xh(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  (Oe.version = "3.12.7"),
    (Oe.create = function (n) {
      return new Oe(n);
    }),
    (Oe.register = Yu),
    (Oe.getAll = function () {
      return Xi.slice();
    }),
    (Oe.getById = function (n) {
      return Xi.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    qu() && Ke.registerPlugin(Oe);
  /*!
   * ScrollTrigger 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var B,
    $i,
    ne,
    _e,
    Rt,
    ce,
    _a,
    zs,
    Dn,
    Ln,
    In,
    Fs,
    it,
    qs,
    ga,
    dt,
    Uu,
    Hu,
    Gi,
    Xu,
    ma,
    $u,
    pt,
    va,
    Gu,
    Ku,
    Hr,
    ya,
    wa,
    Ki,
    Sa,
    Ws,
    ba,
    Ta,
    Bs = 1,
    nt = Date.now,
    Ea = nt(),
    Ft = 0,
    Nn = 0,
    Zu = function (e, t, r) {
      var i = Mt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
    },
    ju = function (e, t) {
      return t && (!Mt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    Gh = function n() {
      return Nn && requestAnimationFrame(n);
    },
    Qu = function () {
      return (qs = 1);
    },
    Ju = function () {
      return (qs = 0);
    },
    ur = function (e) {
      return e;
    },
    zn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ec = function () {
      return typeof window < "u";
    },
    tc = function () {
      return B || (ec() && (B = window.gsap) && B.registerPlugin && B);
    },
    _i = function (e) {
      return !!~_a.indexOf(e);
    },
    rc = function (e) {
      return (
        (e === "Height" ? Sa : ne["inner" + e]) ||
        Rt["client" + e] ||
        ce["client" + e]
      );
    },
    ic = function (e) {
      return (
        Yr(e, "getBoundingClientRect") ||
        (_i(e)
          ? function () {
              return (eo.width = ne.innerWidth), (eo.height = Sa), eo;
            }
          : function () {
              return Sr(e);
            })
      );
    },
    Kh = function (e, t, r) {
      var i = r.d,
        s = r.d2,
        o = r.a;
      return (o = Yr(e, "getBoundingClientRect"))
        ? function () {
            return o()[i];
          }
        : function () {
            return (t ? rc(s) : e["client" + s]) || 0;
          };
    },
    Zh = function (e, t) {
      return !t || ~lr.indexOf(e)
        ? ic(e)
        : function () {
            return eo;
          };
    },
    cr = function (e, t) {
      var r = t.s,
        i = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (r = "scroll" + i) && (o = Yr(e, r))
          ? o() - ic(e)()[s]
          : _i(e)
          ? (Rt[r] || ce[r]) - rc(i)
          : e[r] - e["offset" + i]
      );
    },
    Vs = function (e, t) {
      for (var r = 0; r < Gi.length; r += 3)
        (!t || ~t.indexOf(Gi[r + 1])) && e(Gi[r], Gi[r + 1], Gi[r + 2]);
    },
    Mt = function (e) {
      return typeof e == "string";
    },
    st = function (e) {
      return typeof e == "function";
    },
    Fn = function (e) {
      return typeof e == "number";
    },
    gi = function (e) {
      return typeof e == "object";
    },
    qn = function (e, t, r) {
      return e && e.progress(t ? 0 : 1) && r && e.pause();
    },
    xa = function (e, t) {
      if (e.enabled) {
        var r = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        r && r.totalTime && (e.callbackAnimation = r);
      }
    },
    Zi = Math.abs,
    nc = "left",
    sc = "top",
    Ca = "right",
    Aa = "bottom",
    mi = "width",
    vi = "height",
    Wn = "Right",
    Bn = "Left",
    Vn = "Top",
    Yn = "Bottom",
    Ie = "padding",
    qt = "margin",
    ji = "Width",
    ka = "Height",
    Fe = "px",
    Wt = function (e) {
      return ne.getComputedStyle(e);
    },
    jh = function (e) {
      var t = Wt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    oc = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    Sr = function (e, t) {
      var r =
          t &&
          Wt(e)[ga] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          B.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        i = e.getBoundingClientRect();
      return r && r.progress(0).kill(), i;
    },
    Ys = function (e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    ac = function (e) {
      var t = [],
        r = e.labels,
        i = e.duration(),
        s;
      for (s in r) t.push(r[s] / i);
      return t;
    },
    Qh = function (e) {
      return function (t) {
        return B.utils.snap(ac(e), t);
      };
    },
    Oa = function (e) {
      var t = B.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (i, s) {
            return i - s;
          });
      return r
        ? function (i, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return t(i);
            if (s > 0) {
              for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
              return r[a - 1];
            } else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a];
            return r[0];
          }
        : function (i, s, o) {
            o === void 0 && (o = 0.001);
            var a = t(i);
            return !s || Math.abs(a - i) < o || a - i < 0 == s < 0
              ? a
              : t(s < 0 ? i - e : i + e);
          };
    },
    Jh = function (e) {
      return function (t, r) {
        return Oa(ac(e))(t, r.direction);
      };
    },
    Us = function (e, t, r, i) {
      return r.split(",").forEach(function (s) {
        return e(t, s, i);
      });
    },
    Ye = function (e, t, r, i, s) {
      return e.addEventListener(t, r, { passive: !i, capture: !!s });
    },
    Ue = function (e, t, r, i) {
      return e.removeEventListener(t, r, !!i);
    },
    Hs = function (e, t, r) {
      (r = r && r.wheelHandler), r && (e(t, "wheel", r), e(t, "touchmove", r));
    },
    lc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Xs = { toggleActions: "play", anticipatePin: 0 },
    $s = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Gs = function (e, t) {
      if (Mt(e)) {
        var r = e.indexOf("="),
          i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
          (e =
            i +
            (e in $s
              ? $s[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Ks = function (e, t, r, i, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        p = s.fontSize,
        d = s.indent,
        f = s.fontWeight,
        _ = _e.createElement("div"),
        h = _i(r) || Yr(r, "pinType") === "fixed",
        m = e.indexOf("scroller") !== -1,
        y = h ? ce : r,
        v = e.indexOf("start") !== -1,
        S = v ? u : c,
        b =
          "border-color:" +
          S +
          ";font-size:" +
          p +
          ";color:" +
          S +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (b += "position:" + ((m || l) && h ? "fixed;" : "absolute;")),
        (m || l || !h) &&
          (b += (i === ze ? Ca : Aa) + ":" + (o + parseFloat(d)) + "px;"),
        a &&
          (b +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (_._isStart = v),
        _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (_.style.cssText = b),
        (_.innerText = t || t === 0 ? e + "-" + t : e),
        y.children[0] ? y.insertBefore(_, y.children[0]) : y.appendChild(_),
        (_._offset = _["offset" + i.op.d2]),
        Zs(_, 0, i, v),
        _
      );
    },
    Zs = function (e, t, r, i) {
      var s = { display: "block" },
        o = r[i ? "os2" : "p2"],
        a = r[i ? "p2" : "os2"];
      (e._isFlipped = i),
        (s[r.a + "Percent"] = i ? -100 : 0),
        (s[r.a] = i ? "1px" : 0),
        (s["border" + o + ji] = 1),
        (s["border" + a + ji] = 0),
        (s[r.p] = t + "px"),
        B.set(e, s);
    },
    re = [],
    Pa = {},
    Un,
    uc = function () {
      return nt() - Ft > 34 && (Un || (Un = requestAnimationFrame(br)));
    },
    Qi = function () {
      (!pt || !pt.isPressed || pt.startX > ce.clientWidth) &&
        (ie.cache++,
        pt ? Un || (Un = requestAnimationFrame(br)) : br(),
        Ft || wi("scrollStart"),
        (Ft = nt()));
    },
    Ra = function () {
      (Ku = ne.innerWidth), (Gu = ne.innerHeight);
    },
    Hn = function (e) {
      ie.cache++,
        (e === !0 ||
          (!it &&
            !$u &&
            !_e.fullscreenElement &&
            !_e.webkitFullscreenElement &&
            (!va ||
              Ku !== ne.innerWidth ||
              Math.abs(ne.innerHeight - Gu) > ne.innerHeight * 0.25))) &&
          zs.restart(!0);
    },
    yi = {},
    ed = [],
    cc = function n() {
      return Ue(Z, "scrollEnd", n) || bi(!0);
    },
    wi = function (e) {
      return (
        (yi[e] &&
          yi[e].map(function (t) {
            return t();
          })) ||
        ed
      );
    },
    Dt = [],
    fc = function (e) {
      for (var t = 0; t < Dt.length; t += 5)
        (!e || (Dt[t + 4] && Dt[t + 4].query === e)) &&
          ((Dt[t].style.cssText = Dt[t + 1]),
          Dt[t].getBBox && Dt[t].setAttribute("transform", Dt[t + 2] || ""),
          (Dt[t + 3].uncache = 1));
    },
    Ma = function (e, t) {
      var r;
      for (dt = 0; dt < re.length; dt++)
        (r = re[dt]),
          r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
      (Ws = !0), t && fc(t), t || wi("revert");
    },
    hc = function (e, t) {
      ie.cache++,
        (t || !_t) &&
          ie.forEach(function (r) {
            return st(r) && r.cacheID++ && (r.rec = 0);
          }),
        Mt(e) && (ne.history.scrollRestoration = wa = e);
    },
    _t,
    Si = 0,
    dc,
    td = function () {
      if (dc !== Si) {
        var e = (dc = Si);
        requestAnimationFrame(function () {
          return e === Si && bi(!0);
        });
      }
    },
    pc = function () {
      ce.appendChild(Ki),
        (Sa = (!pt && Ki.offsetHeight) || ne.innerHeight),
        ce.removeChild(Ki);
    },
    _c = function (e) {
      return Dn(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    bi = function (e, t) {
      if (
        ((Rt = _e.documentElement),
        (ce = _e.body),
        (_a = [ne, _e, Rt, ce]),
        Ft && !e && !Ws)
      ) {
        Ye(Z, "scrollEnd", cc);
        return;
      }
      pc(),
        (_t = Z.isRefreshing = !0),
        ie.forEach(function (i) {
          return st(i) && ++i.cacheID && (i.rec = i());
        });
      var r = wi("refreshInit");
      Xu && Z.sort(),
        t || Ma(),
        ie.forEach(function (i) {
          st(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        re.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        (Ws = !1),
        re.forEach(function (i) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
          }
        }),
        (ba = 1),
        _c(!0),
        re.forEach(function (i) {
          var s = cr(i.scroller, i._dir),
            o = i.vars.end === "max" || (i._endClamp && i.end > s),
            a = i._startClamp && i.start >= s;
          (o || a) &&
            i.setPositions(
              a ? s - 1 : i.start,
              o ? Math.max(a ? s : i.start + 1, s) : i.end,
              !0
            );
        }),
        _c(!1),
        (ba = 0),
        r.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        ie.forEach(function (i) {
          st(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        hc(wa, 1),
        zs.pause(),
        Si++,
        (_t = 2),
        br(2),
        re.forEach(function (i) {
          return st(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (_t = Z.isRefreshing = !1),
        wi("refresh");
    },
    Da = 0,
    js = 1,
    Xn,
    br = function (e) {
      if (e === 2 || (!_t && !Ws)) {
        (Z.isUpdating = !0), Xn && Xn.update(0);
        var t = re.length,
          r = nt(),
          i = r - Ea >= 50,
          s = t && re[0].scroll();
        if (
          ((js = Da > s ? -1 : 1),
          _t || (Da = s),
          i &&
            (Ft && !qs && r - Ft > 200 && ((Ft = 0), wi("scrollEnd")),
            (In = Ea),
            (Ea = r)),
          js < 0)
        ) {
          for (dt = t; dt-- > 0; ) re[dt] && re[dt].update(0, i);
          js = 1;
        } else for (dt = 0; dt < t; dt++) re[dt] && re[dt].update(0, i);
        Z.isUpdating = !1;
      }
      Un = 0;
    },
    La = [
      nc,
      sc,
      Aa,
      Ca,
      qt + Yn,
      qt + Wn,
      qt + Vn,
      qt + Bn,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Qs = La.concat([
      mi,
      vi,
      "boxSizing",
      "max" + ji,
      "max" + ka,
      "position",
      qt,
      Ie,
      Ie + Vn,
      Ie + Wn,
      Ie + Yn,
      Ie + Bn,
    ]),
    rd = function (e, t, r) {
      Ji(r);
      var i = e._gsap;
      if (i.spacerIsNative) Ji(i.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Ia = function (e, t, r, i) {
      if (!e._gsap.swappedIn) {
        for (var s = La.length, o = t.style, a = e.style, l; s--; )
          (l = La[s]), (o[l] = r[l]);
        (o.position = r.position === "absolute" ? "absolute" : "relative"),
          r.display === "inline" && (o.display = "inline-block"),
          (a[Aa] = a[Ca] = "auto"),
          (o.flexBasis = r.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[mi] = Ys(e, ht) + Fe),
          (o[vi] = Ys(e, ze) + Fe),
          (o[Ie] = a[qt] = a[sc] = a[nc] = "0"),
          Ji(i),
          (a[mi] = a["max" + ji] = r[mi]),
          (a[vi] = a["max" + ka] = r[vi]),
          (a[Ie] = r[Ie]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    id = /([A-Z])/g,
    Ji = function (e) {
      if (e) {
        var t = e.t.style,
          r = e.length,
          i = 0,
          s,
          o;
        for ((e.t._gsap || B.core.getCache(e.t)).uncache = 1; i < r; i += 2)
          (o = e[i + 1]),
            (s = e[i]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(id, "-$1").toLowerCase());
      }
    },
    Js = function (e) {
      for (var t = Qs.length, r = e.style, i = [], s = 0; s < t; s++)
        i.push(Qs[s], r[Qs[s]]);
      return (i.t = e), i;
    },
    nd = function (e, t, r) {
      for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), i.push(a, a in t ? t[a] : e[o + 1]);
      return (i.t = e.t), i;
    },
    eo = { left: 0, top: 0 },
    gc = function (e, t, r, i, s, o, a, l, u, c, p, d, f, _) {
      st(e) && (e = e(l)),
        Mt(e) &&
          e.substr(0, 3) === "max" &&
          (e = d + (e.charAt(4) === "=" ? Gs("0" + e.substr(3), r) : 0));
      var h = f ? f.time() : 0,
        m,
        y,
        v;
      if ((f && f.seek(0), isNaN(e) || (e = +e), Fn(e)))
        f &&
          (e = B.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            d,
            e
          )),
          a && Zs(a, r, i, !0);
      else {
        st(t) && (t = t(l));
        var S = (e || "0").split(" "),
          b,
          T,
          E,
          w;
        (v = St(t, l) || ce),
          (b = Sr(v) || {}),
          (!b || (!b.left && !b.top)) &&
            Wt(v).display === "none" &&
            ((w = v.style.display),
            (v.style.display = "block"),
            (b = Sr(v)),
            w ? (v.style.display = w) : v.style.removeProperty("display")),
          (T = Gs(S[0], b[i.d])),
          (E = Gs(S[1] || "0", r)),
          (e = b[i.p] - u[i.p] - c + T + s - E),
          a && Zs(a, E, i, r - E < 20 || (a._isStart && E > 20)),
          (r -= r - E);
      }
      if ((_ && ((l[_] = e || -0.001), e < 0 && (e = 0)), o)) {
        var C = e + r,
          A = o._isStart;
        (m = "scroll" + i.d2),
          Zs(
            o,
            C,
            i,
            (A && C > 20) ||
              (!A && (p ? Math.max(ce[m], Rt[m]) : o.parentNode[m]) <= C + 1)
          ),
          p &&
            ((u = Sr(a)),
            p && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Fe));
      }
      return (
        f &&
          v &&
          ((m = Sr(v)),
          f.seek(d),
          (y = Sr(v)),
          (f._caScrollDist = m[i.p] - y[i.p]),
          (e = (e / f._caScrollDist) * d)),
        f && f.seek(h),
        f ? e : Math.round(e)
      );
    },
    sd = /(webkit|moz|length|cssText|inset)/i,
    mc = function (e, t, r, i) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === ce) {
          (e._stOrig = s.cssText), (a = Wt(e));
          for (o in a)
            !+o &&
              !sd.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = r), (s.left = i);
        } else s.cssText = e._stOrig;
        (B.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    vc = function (e, t, r) {
      var i = t,
        s = i;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== i &&
            a !== s &&
            Math.abs(a - i) > 3 &&
            Math.abs(a - s) > 3 &&
            ((o = a), r && r()),
          (s = i),
          (i = Math.round(o)),
          i
        );
      };
    },
    to = function (e, t, r) {
      var i = {};
      (i[t.p] = "+=" + r), B.set(e, i);
    },
    yc = function (e, t) {
      var r = Ur(e, t),
        i = "_scroll" + t.p2,
        s = function o(a, l, u, c, p) {
          var d = o.tween,
            f = l.onComplete,
            _ = {};
          u = u || r();
          var h = vc(r, u, function () {
            d.kill(), (o.tween = 0);
          });
          return (
            (p = (c && p) || 0),
            (c = c || a - u),
            d && d.kill(),
            (l[i] = a),
            (l.inherit = !1),
            (l.modifiers = _),
            (_[i] = function () {
              return h(u + c * d.ratio + p * d.ratio * d.ratio);
            }),
            (l.onUpdate = function () {
              ie.cache++, o.tween && br();
            }),
            (l.onComplete = function () {
              (o.tween = 0), f && f.call(d);
            }),
            (d = o.tween = B.to(e, l)),
            d
          );
        };
      return (
        (e[i] = r),
        (r.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ye(e, "wheel", r.wheelHandler),
        Z.isTouch && Ye(e, "touchmove", r.wheelHandler),
        s
      );
    },
    Z = (function () {
      function n(t, r) {
        $i ||
          n.register(B) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          ya(this),
          this.init(t, r);
      }
      var e = n.prototype;
      return (
        (e.init = function (r, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Nn)
          ) {
            this.update = this.refresh = this.kill = ur;
            return;
          }
          r = oc(Mt(r) || Fn(r) || r.nodeType ? { trigger: r } : r, Xs);
          var s = r,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            p = s.scrub,
            d = s.trigger,
            f = s.pin,
            _ = s.pinSpacing,
            h = s.invalidateOnRefresh,
            m = s.anticipatePin,
            y = s.onScrubComplete,
            v = s.onSnapComplete,
            S = s.once,
            b = s.snap,
            T = s.pinReparent,
            E = s.pinSpacer,
            w = s.containerAnimation,
            C = s.fastScrollEnd,
            A = s.preventOverlaps,
            O =
              r.horizontal || (r.containerAnimation && r.horizontal !== !1)
                ? ht
                : ze,
            P = !p && p !== 0,
            x = St(r.scroller || ne),
            R = B.core.getCache(x),
            L = _i(x),
            F =
              ("pinType" in r
                ? r.pinType
                : Yr(x, "pinType") || (L && "fixed")) === "fixed",
            V = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            W = P && r.toggleActions.split(" "),
            N = "markers" in r ? r.markers : Xs.markers,
            z = L ? 0 : parseFloat(Wt(x)["border" + O.p2 + ji]) || 0,
            g = this,
            I =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(g);
              },
            $ = Kh(x, L, O),
            he = Zh(x, L),
            te = 0,
            me = 0,
            D = 0,
            G = Ur(x, O),
            fe,
            se,
            ye,
            Ze,
            je,
            M,
            K,
            Ce,
            We,
            k,
            Lt,
            kr,
            Jr,
            Pe,
            Or,
            ei,
            ki,
            He,
            ti,
            Re,
            jt,
            Ut,
            Pr,
            ps,
            Ne,
            To,
            Rr,
            hn,
            dn,
            ri,
            Oi,
            oe,
            Pi,
            Qt,
            Jt,
            er,
            Ri,
            pn,
            Mr;
          if (
            ((g._startClamp = g._endClamp = !1),
            (g._dir = O),
            (m *= 45),
            (g.scroller = x),
            (g.scroll = w ? w.time.bind(w) : G),
            (Ze = G()),
            (g.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
              ((Xu = 1), r.refreshPriority === -9999 && (Xn = g)),
            (R.tweenScroll = R.tweenScroll || {
              top: yc(x, ze),
              left: yc(x, ht),
            }),
            (g.tweenTo = fe = R.tweenScroll[O.p]),
            (g.scrubDuration = function (q) {
              (Pi = Fn(q) && q),
                Pi
                  ? oe
                    ? oe.duration(q)
                    : (oe = B.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: Pi,
                        paused: !0,
                        onComplete: function () {
                          return y && y(g);
                        },
                      }))
                  : (oe && oe.progress(1).kill(), (oe = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !g.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  r.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (g.animation = i.pause()),
              (i.scrollTrigger = g),
              g.scrubDuration(p),
              (ri = 0),
              l || (l = i.vars.id)),
            b &&
              ((!gi(b) || b.push) && (b = { snapTo: b }),
              "scrollBehavior" in ce.style &&
                B.set(L ? [ce, Rt] : x, { scrollBehavior: "auto" }),
              ie.forEach(function (q) {
                return (
                  st(q) &&
                  q.target === (L ? _e.scrollingElement || Rt : x) &&
                  (q.smooth = !1)
                );
              }),
              (ye = st(b.snapTo)
                ? b.snapTo
                : b.snapTo === "labels"
                ? Qh(i)
                : b.snapTo === "labelsDirectional"
                ? Jh(i)
                : b.directional !== !1
                ? function (q, j) {
                    return Oa(b.snapTo)(q, nt() - me < 500 ? 0 : j.direction);
                  }
                : B.utils.snap(b.snapTo)),
              (Qt = b.duration || { min: 0.1, max: 2 }),
              (Qt = gi(Qt) ? Ln(Qt.min, Qt.max) : Ln(Qt, Qt)),
              (Jt = B.delayedCall(b.delay || Pi / 2 || 0.1, function () {
                var q = G(),
                  j = nt() - me < 500,
                  H = fe.tween;
                if (
                  (j || Math.abs(g.getVelocity()) < 10) &&
                  !H &&
                  !qs &&
                  te !== q
                ) {
                  var Q = (q - M) / Pe,
                    Xe = i && !P ? i.totalProgress() : Q,
                    le = j ? 0 : ((Xe - Oi) / (nt() - In)) * 1e3 || 0,
                    Me = B.utils.clamp(-Q, 1 - Q, (Zi(le / 2) * le) / 0.185),
                    ot = Q + (b.inertia === !1 ? 0 : Me),
                    Ae,
                    we,
                    pe = b,
                    tr = pe.onStart,
                    Ee = pe.onInterrupt,
                    It = pe.onComplete;
                  if (
                    ((Ae = ye(ot, g)),
                    Fn(Ae) || (Ae = ot),
                    (we = Math.max(0, Math.round(M + Ae * Pe))),
                    q <= K && q >= M && we !== q)
                  ) {
                    if (H && !H._initted && H.data <= Zi(we - q)) return;
                    b.inertia === !1 && (Me = Ae - Q),
                      fe(
                        we,
                        {
                          duration: Qt(
                            Zi(
                              (Math.max(Zi(ot - Xe), Zi(Ae - Xe)) * 0.185) /
                                le /
                                0.05 || 0
                            )
                          ),
                          ease: b.ease || "power3",
                          data: Zi(we - q),
                          onInterrupt: function () {
                            return Jt.restart(!0) && Ee && Ee(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (te = G()),
                              i &&
                                !P &&
                                (oe
                                  ? oe.resetTo(
                                      "totalProgress",
                                      Ae,
                                      i._tTime / i._tDur
                                    )
                                  : i.progress(Ae)),
                              (ri = Oi =
                                i && !P ? i.totalProgress() : g.progress),
                              v && v(g),
                              It && It(g);
                          },
                        },
                        q,
                        Me * Pe,
                        we - q - Me * Pe
                      ),
                      tr && tr(g, fe.tween);
                  }
                } else g.isActive && te !== q && Jt.restart(!0);
              }).pause())),
            l && (Pa[l] = g),
            (d = g.trigger = St(d || (f !== !0 && f))),
            (Mr = d && d._gsap && d._gsap.stRevert),
            Mr && (Mr = Mr(g)),
            (f = f === !0 ? d : St(f)),
            Mt(a) && (a = { targets: d, className: a }),
            f &&
              (_ === !1 ||
                _ === qt ||
                (_ =
                  !_ &&
                  f.parentNode &&
                  f.parentNode.style &&
                  Wt(f.parentNode).display === "flex"
                    ? !1
                    : Ie),
              (g.pin = f),
              (se = B.core.getCache(f)),
              se.spacer
                ? (Or = se.pinState)
                : (E &&
                    ((E = St(E)),
                    E && !E.nodeType && (E = E.current || E.nativeElement),
                    (se.spacerIsNative = !!E),
                    E && (se.spacerState = Js(E))),
                  (se.spacer = He = E || _e.createElement("div")),
                  He.classList.add("pin-spacer"),
                  l && He.classList.add("pin-spacer-" + l),
                  (se.pinState = Or = Js(f))),
              r.force3D !== !1 && B.set(f, { force3D: !0 }),
              (g.spacer = He = se.spacer),
              (dn = Wt(f)),
              (ps = dn[_ + O.os2]),
              (Re = B.getProperty(f)),
              (jt = B.quickSetter(f, O.a, Fe)),
              Ia(f, He, dn),
              (ki = Js(f))),
            N)
          ) {
            (kr = gi(N) ? oc(N, lc) : lc),
              (k = Ks("scroller-start", l, x, O, kr, 0)),
              (Lt = Ks("scroller-end", l, x, O, kr, 0, k)),
              (ti = k["offset" + O.op.d2]);
            var _s = St(Yr(x, "content") || x);
            (Ce = this.markerStart = Ks("start", l, _s, O, kr, ti, 0, w)),
              (We = this.markerEnd = Ks("end", l, _s, O, kr, ti, 0, w)),
              w && (pn = B.quickSetter([Ce, We], O.a, Fe)),
              !F &&
                !(lr.length && Yr(x, "fixedMarkers") === !0) &&
                (jh(L ? ce : x),
                B.set([k, Lt], { force3D: !0 }),
                (To = B.quickSetter(k, O.a, Fe)),
                (hn = B.quickSetter(Lt, O.a, Fe)));
          }
          if (w) {
            var J = w.vars.onUpdate,
              X = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function () {
              g.update(0, 0, 1), J && J.apply(w, X || []);
            });
          }
          if (
            ((g.previous = function () {
              return re[re.indexOf(g) - 1];
            }),
            (g.next = function () {
              return re[re.indexOf(g) + 1];
            }),
            (g.revert = function (q, j) {
              if (!j) return g.kill(!0);
              var H = q !== !1 || !g.enabled,
                Q = it;
              H !== g.isReverted &&
                (H &&
                  ((er = Math.max(G(), g.scroll.rec || 0)),
                  (D = g.progress),
                  (Ri = i && i.progress())),
                Ce &&
                  [Ce, We, k, Lt].forEach(function (Xe) {
                    return (Xe.style.display = H ? "none" : "block");
                  }),
                H && ((it = g), g.update(H)),
                f &&
                  (!T || !g.isActive) &&
                  (H ? rd(f, He, Or) : Ia(f, He, Wt(f), Ne)),
                H || g.update(H),
                (it = Q),
                (g.isReverted = H));
            }),
            (g.refresh = function (q, j, H, Q) {
              if (!((it || !g.enabled) && !j)) {
                if (f && q && Ft) {
                  Ye(n, "scrollEnd", cc);
                  return;
                }
                !_t && I && I(g),
                  (it = g),
                  fe.tween && !H && (fe.tween.kill(), (fe.tween = 0)),
                  oe && oe.pause(),
                  h && i && i.revert({ kill: !1 }).invalidate(),
                  g.isReverted || g.revert(!0, !0),
                  (g._subPinOffset = !1);
                var Xe = $(),
                  le = he(),
                  Me = w ? w.duration() : cr(x, O),
                  ot = Pe <= 0.01,
                  Ae = 0,
                  we = Q || 0,
                  pe = gi(H) ? H.end : r.end,
                  tr = r.endTrigger || d,
                  Ee = gi(H)
                    ? H.start
                    : r.start ||
                      (r.start === 0 || !d ? 0 : f ? "0 0" : "0 100%"),
                  It = (g.pinnedContainer =
                    r.pinnedContainer && St(r.pinnedContainer, g)),
                  pr = (d && Math.max(0, re.indexOf(g))) || 0,
                  Qe = pr,
                  Je,
                  at,
                  Mi,
                  Eo,
                  lt,
                  Be,
                  _r,
                  wl,
                  Pf,
                  gs,
                  gr,
                  ms,
                  xo;
                for (
                  N &&
                  gi(H) &&
                  ((ms = B.getProperty(k, O.p)), (xo = B.getProperty(Lt, O.p)));
                  Qe-- > 0;

                )
                  (Be = re[Qe]),
                    Be.end || Be.refresh(0, 1) || (it = g),
                    (_r = Be.pin),
                    _r &&
                      (_r === d || _r === f || _r === It) &&
                      !Be.isReverted &&
                      (gs || (gs = []), gs.unshift(Be), Be.revert(!0, !0)),
                    Be !== re[Qe] && (pr--, Qe--);
                for (
                  st(Ee) && (Ee = Ee(g)),
                    Ee = Zu(Ee, "start", g),
                    M =
                      gc(
                        Ee,
                        d,
                        Xe,
                        O,
                        G(),
                        Ce,
                        k,
                        g,
                        le,
                        z,
                        F,
                        Me,
                        w,
                        g._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    st(pe) && (pe = pe(g)),
                    Mt(pe) &&
                      !pe.indexOf("+=") &&
                      (~pe.indexOf(" ")
                        ? (pe = (Mt(Ee) ? Ee.split(" ")[0] : "") + pe)
                        : ((Ae = Gs(pe.substr(2), Xe)),
                          (pe = Mt(Ee)
                            ? Ee
                            : (w
                                ? B.utils.mapRange(
                                    0,
                                    w.duration(),
                                    w.scrollTrigger.start,
                                    w.scrollTrigger.end,
                                    M
                                  )
                                : M) + Ae),
                          (tr = d))),
                    pe = Zu(pe, "end", g),
                    K =
                      Math.max(
                        M,
                        gc(
                          pe || (tr ? "100% 0" : Me),
                          tr,
                          Xe,
                          O,
                          G() + Ae,
                          We,
                          Lt,
                          g,
                          le,
                          z,
                          F,
                          Me,
                          w,
                          g._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    Ae = 0,
                    Qe = pr;
                  Qe--;

                )
                  (Be = re[Qe]),
                    (_r = Be.pin),
                    _r &&
                      Be.start - Be._pinPush <= M &&
                      !w &&
                      Be.end > 0 &&
                      ((Je =
                        Be.end -
                        (g._startClamp ? Math.max(0, Be.start) : Be.start)),
                      ((_r === d && Be.start - Be._pinPush < M) || _r === It) &&
                        isNaN(Ee) &&
                        (Ae += Je * (1 - Be.progress)),
                      _r === f && (we += Je));
                if (
                  ((M += Ae),
                  (K += Ae),
                  g._startClamp && (g._startClamp += Ae),
                  g._endClamp &&
                    !_t &&
                    ((g._endClamp = K || -0.001), (K = Math.min(K, cr(x, O)))),
                  (Pe = K - M || ((M -= 0.01) && 0.001)),
                  ot && (D = B.utils.clamp(0, 1, B.utils.normalize(M, K, er))),
                  (g._pinPush = we),
                  Ce &&
                    Ae &&
                    ((Je = {}),
                    (Je[O.a] = "+=" + Ae),
                    It && (Je[O.p] = "-=" + G()),
                    B.set([Ce, We], Je)),
                  f && !(ba && g.end >= cr(x, O)))
                )
                  (Je = Wt(f)),
                    (Eo = O === ze),
                    (Mi = G()),
                    (Ut = parseFloat(Re(O.a)) + we),
                    !Me &&
                      K > 1 &&
                      ((gr = (L ? _e.scrollingElement || Rt : x).style),
                      (gr = {
                        style: gr,
                        value: gr["overflow" + O.a.toUpperCase()],
                      }),
                      L &&
                        Wt(ce)["overflow" + O.a.toUpperCase()] !== "scroll" &&
                        (gr.style["overflow" + O.a.toUpperCase()] = "scroll")),
                    Ia(f, He, Je),
                    (ki = Js(f)),
                    (at = Sr(f, !0)),
                    (wl = F && Ur(x, Eo ? ht : ze)()),
                    _
                      ? ((Ne = [_ + O.os2, Pe + we + Fe]),
                        (Ne.t = He),
                        (Qe = _ === Ie ? Ys(f, O) + Pe + we : 0),
                        Qe &&
                          (Ne.push(O.d, Qe + Fe),
                          He.style.flexBasis !== "auto" &&
                            (He.style.flexBasis = Qe + Fe)),
                        Ji(Ne),
                        It &&
                          re.forEach(function (vs) {
                            vs.pin === It &&
                              vs.vars.pinSpacing !== !1 &&
                              (vs._subPinOffset = !0);
                          }),
                        F && G(er))
                      : ((Qe = Ys(f, O)),
                        Qe &&
                          He.style.flexBasis !== "auto" &&
                          (He.style.flexBasis = Qe + Fe)),
                    F &&
                      ((lt = {
                        top: at.top + (Eo ? Mi - M : wl) + Fe,
                        left: at.left + (Eo ? wl : Mi - M) + Fe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (lt[mi] = lt["max" + ji] = Math.ceil(at.width) + Fe),
                      (lt[vi] = lt["max" + ka] = Math.ceil(at.height) + Fe),
                      (lt[qt] =
                        lt[qt + Vn] =
                        lt[qt + Wn] =
                        lt[qt + Yn] =
                        lt[qt + Bn] =
                          "0"),
                      (lt[Ie] = Je[Ie]),
                      (lt[Ie + Vn] = Je[Ie + Vn]),
                      (lt[Ie + Wn] = Je[Ie + Wn]),
                      (lt[Ie + Yn] = Je[Ie + Yn]),
                      (lt[Ie + Bn] = Je[Ie + Bn]),
                      (ei = nd(Or, lt, T)),
                      _t && G(0)),
                    i
                      ? ((Pf = i._initted),
                        ma(1),
                        i.render(i.duration(), !0, !0),
                        (Pr = Re(O.a) - Ut + Pe + we),
                        (Rr = Math.abs(Pe - Pr) > 1),
                        F && Rr && ei.splice(ei.length - 2, 2),
                        i.render(0, !0, !0),
                        Pf || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        ma(0))
                      : (Pr = Pe),
                    gr &&
                      (gr.value
                        ? (gr.style["overflow" + O.a.toUpperCase()] = gr.value)
                        : gr.style.removeProperty("overflow-" + O.a));
                else if (d && G() && !w)
                  for (at = d.parentNode; at && at !== ce; )
                    at._pinOffset &&
                      ((M -= at._pinOffset), (K -= at._pinOffset)),
                      (at = at.parentNode);
                gs &&
                  gs.forEach(function (vs) {
                    return vs.revert(!1, !0);
                  }),
                  (g.start = M),
                  (g.end = K),
                  (Ze = je = _t ? er : G()),
                  !w && !_t && (Ze < er && G(er), (g.scroll.rec = 0)),
                  g.revert(!1, !0),
                  (me = nt()),
                  Jt && ((te = -1), Jt.restart(!0)),
                  (it = 0),
                  i &&
                    P &&
                    (i._initted || Ri) &&
                    i.progress() !== Ri &&
                    i.progress(Ri || 0, !0).render(i.time(), !0, !0),
                  (ot || D !== g.progress || w || h || (i && !i._initted)) &&
                    (i &&
                      !P &&
                      i.totalProgress(
                        w && M < -0.001 && !D ? B.utils.normalize(M, K, 0) : D,
                        !0
                      ),
                    (g.progress = ot || (Ze - M) / Pe === D ? 0 : D)),
                  f && _ && (He._pinOffset = Math.round(g.progress * Pr)),
                  oe && oe.invalidate(),
                  isNaN(ms) ||
                    ((ms -= B.getProperty(k, O.p)),
                    (xo -= B.getProperty(Lt, O.p)),
                    to(k, O, ms),
                    to(Ce, O, ms - (Q || 0)),
                    to(Lt, O, xo),
                    to(We, O, xo - (Q || 0))),
                  ot && !_t && g.update(),
                  c && !_t && !Jr && ((Jr = !0), c(g), (Jr = !1));
              }
            }),
            (g.getVelocity = function () {
              return ((G() - je) / (nt() - In)) * 1e3 || 0;
            }),
            (g.endAnimation = function () {
              qn(g.callbackAnimation),
                i &&
                  (oe
                    ? oe.progress(1)
                    : i.paused()
                    ? P || qn(i, g.direction < 0, 1)
                    : qn(i, i.reversed()));
            }),
            (g.labelToScroll = function (q) {
              return (
                (i &&
                  i.labels &&
                  (M || g.refresh() || M) +
                    (i.labels[q] / i.duration()) * Pe) ||
                0
              );
            }),
            (g.getTrailing = function (q) {
              var j = re.indexOf(g),
                H =
                  g.direction > 0 ? re.slice(0, j).reverse() : re.slice(j + 1);
              return (
                Mt(q)
                  ? H.filter(function (Q) {
                      return Q.vars.preventOverlaps === q;
                    })
                  : H
              ).filter(function (Q) {
                return g.direction > 0 ? Q.end <= M : Q.start >= K;
              });
            }),
            (g.update = function (q, j, H) {
              if (!(w && !H && !q)) {
                var Q = _t === !0 ? er : g.scroll(),
                  Xe = q ? 0 : (Q - M) / Pe,
                  le = Xe < 0 ? 0 : Xe > 1 ? 1 : Xe || 0,
                  Me = g.progress,
                  ot,
                  Ae,
                  we,
                  pe,
                  tr,
                  Ee,
                  It,
                  pr;
                if (
                  (j &&
                    ((je = Ze),
                    (Ze = w ? G() : Q),
                    b && ((Oi = ri), (ri = i && !P ? i.totalProgress() : le))),
                  m &&
                    f &&
                    !it &&
                    !Bs &&
                    Ft &&
                    (!le && M < Q + ((Q - je) / (nt() - In)) * m
                      ? (le = 1e-4)
                      : le === 1 &&
                        K > Q + ((Q - je) / (nt() - In)) * m &&
                        (le = 0.9999)),
                  le !== Me && g.enabled)
                ) {
                  if (
                    ((ot = g.isActive = !!le && le < 1),
                    (Ae = !!Me && Me < 1),
                    (Ee = ot !== Ae),
                    (tr = Ee || !!le != !!Me),
                    (g.direction = le > Me ? 1 : -1),
                    (g.progress = le),
                    tr &&
                      !it &&
                      ((we = le && !Me ? 0 : le === 1 ? 1 : Me === 1 ? 2 : 3),
                      P &&
                        ((pe =
                          (!Ee && W[we + 1] !== "none" && W[we + 1]) || W[we]),
                        (pr =
                          i &&
                          (pe === "complete" || pe === "reset" || pe in i)))),
                    A &&
                      (Ee || pr) &&
                      (pr || p || !i) &&
                      (st(A)
                        ? A(g)
                        : g.getTrailing(A).forEach(function (Mi) {
                            return Mi.endAnimation();
                          })),
                    P ||
                      (oe && !it && !Bs
                        ? (oe._dp._time - oe._start !== oe._time &&
                            oe.render(oe._dp._time - oe._start),
                          oe.resetTo
                            ? oe.resetTo(
                                "totalProgress",
                                le,
                                i._tTime / i._tDur
                              )
                            : ((oe.vars.totalProgress = le),
                              oe.invalidate().restart()))
                        : i && i.totalProgress(le, !!(it && (me || q)))),
                    f)
                  ) {
                    if ((q && _ && (He.style[_ + O.os2] = ps), !F))
                      jt(zn(Ut + Pr * le));
                    else if (tr) {
                      if (
                        ((It = !q && le > Me && K + 1 > Q && Q + 1 >= cr(x, O)),
                        T)
                      )
                        if (!q && (ot || It)) {
                          var Qe = Sr(f, !0),
                            Je = Q - M;
                          mc(
                            f,
                            ce,
                            Qe.top + (O === ze ? Je : 0) + Fe,
                            Qe.left + (O === ze ? 0 : Je) + Fe
                          );
                        } else mc(f, He);
                      Ji(ot || It ? ei : ki),
                        (Rr && le < 1 && ot) ||
                          jt(Ut + (le === 1 && !It ? Pr : 0));
                    }
                  }
                  b && !fe.tween && !it && !Bs && Jt.restart(!0),
                    a &&
                      (Ee || (S && le && (le < 1 || !Ta))) &&
                      Dn(a.targets).forEach(function (Mi) {
                        return Mi.classList[ot || S ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !P && !q && o(g),
                    tr && !it
                      ? (P &&
                          (pr &&
                            (pe === "complete"
                              ? i.pause().totalProgress(1)
                              : pe === "reset"
                              ? i.restart(!0).pause()
                              : pe === "restart"
                              ? i.restart(!0)
                              : i[pe]()),
                          o && o(g)),
                        (Ee || !Ta) &&
                          (u && Ee && xa(g, u),
                          V[we] && xa(g, V[we]),
                          S && (le === 1 ? g.kill(!1, 1) : (V[we] = 0)),
                          Ee ||
                            ((we = le === 1 ? 1 : 3), V[we] && xa(g, V[we]))),
                        C &&
                          !ot &&
                          Math.abs(g.getVelocity()) > (Fn(C) ? C : 2500) &&
                          (qn(g.callbackAnimation),
                          oe
                            ? oe.progress(1)
                            : qn(i, pe === "reverse" ? 1 : !le, 1)))
                      : P && o && !it && o(g);
                }
                if (hn) {
                  var at = w ? (Q / w.duration()) * (w._caScrollDist || 0) : Q;
                  To(at + (k._isFlipped ? 1 : 0)), hn(at);
                }
                pn && pn((-Q / w.duration()) * (w._caScrollDist || 0));
              }
            }),
            (g.enable = function (q, j) {
              g.enabled ||
                ((g.enabled = !0),
                Ye(x, "resize", Hn),
                L || Ye(x, "scroll", Qi),
                I && Ye(n, "refreshInit", I),
                q !== !1 && ((g.progress = D = 0), (Ze = je = te = G())),
                j !== !1 && g.refresh());
            }),
            (g.getTween = function (q) {
              return q && fe ? fe.tween : oe;
            }),
            (g.setPositions = function (q, j, H, Q) {
              if (w) {
                var Xe = w.scrollTrigger,
                  le = w.duration(),
                  Me = Xe.end - Xe.start;
                (q = Xe.start + (Me * q) / le), (j = Xe.start + (Me * j) / le);
              }
              g.refresh(
                !1,
                !1,
                {
                  start: ju(q, H && !!g._startClamp),
                  end: ju(j, H && !!g._endClamp),
                },
                Q
              ),
                g.update();
            }),
            (g.adjustPinSpacing = function (q) {
              if (Ne && q) {
                var j = Ne.indexOf(O.d) + 1;
                (Ne[j] = parseFloat(Ne[j]) + q + Fe),
                  (Ne[1] = parseFloat(Ne[1]) + q + Fe),
                  Ji(Ne);
              }
            }),
            (g.disable = function (q, j) {
              if (
                g.enabled &&
                (q !== !1 && g.revert(!0, !0),
                (g.enabled = g.isActive = !1),
                j || (oe && oe.pause()),
                (er = 0),
                se && (se.uncache = 1),
                I && Ue(n, "refreshInit", I),
                Jt &&
                  (Jt.pause(), fe.tween && fe.tween.kill() && (fe.tween = 0)),
                !L)
              ) {
                for (var H = re.length; H--; )
                  if (re[H].scroller === x && re[H] !== g) return;
                Ue(x, "resize", Hn), L || Ue(x, "scroll", Qi);
              }
            }),
            (g.kill = function (q, j) {
              g.disable(q, j), oe && !j && oe.kill(), l && delete Pa[l];
              var H = re.indexOf(g);
              H >= 0 && re.splice(H, 1),
                H === dt && js > 0 && dt--,
                (H = 0),
                re.forEach(function (Q) {
                  return Q.scroller === g.scroller && (H = 1);
                }),
                H || _t || (g.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  q && i.revert({ kill: !1 }),
                  j || i.kill()),
                Ce &&
                  [Ce, We, k, Lt].forEach(function (Q) {
                    return Q.parentNode && Q.parentNode.removeChild(Q);
                  }),
                Xn === g && (Xn = 0),
                f &&
                  (se && (se.uncache = 1),
                  (H = 0),
                  re.forEach(function (Q) {
                    return Q.pin === f && H++;
                  }),
                  H || (se.spacer = 0)),
                r.onKill && r.onKill(g);
            }),
            re.push(g),
            g.enable(!1, !1),
            Mr && Mr(g),
            i && i.add && !Pe)
          ) {
            var ue = g.update;
            (g.update = function () {
              (g.update = ue), ie.cache++, M || K || g.refresh();
            }),
              B.delayedCall(0.01, g.update),
              (Pe = 0.01),
              (M = K = 0);
          } else g.refresh();
          f && td();
        }),
        (n.register = function (r) {
          return (
            $i ||
              ((B = r || tc()),
              ec() && window.document && n.enable(),
              ($i = Nn)),
            $i
          );
        }),
        (n.defaults = function (r) {
          if (r) for (var i in r) Xs[i] = r[i];
          return Xs;
        }),
        (n.disable = function (r, i) {
          (Nn = 0),
            re.forEach(function (o) {
              return o[i ? "kill" : "disable"](r);
            }),
            Ue(ne, "wheel", Qi),
            Ue(_e, "scroll", Qi),
            clearInterval(Fs),
            Ue(_e, "touchcancel", ur),
            Ue(ce, "touchstart", ur),
            Us(Ue, _e, "pointerdown,touchstart,mousedown", Qu),
            Us(Ue, _e, "pointerup,touchend,mouseup", Ju),
            zs.kill(),
            Vs(Ue);
          for (var s = 0; s < ie.length; s += 3)
            Hs(Ue, ie[s], ie[s + 1]), Hs(Ue, ie[s], ie[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((ne = window),
            (_e = document),
            (Rt = _e.documentElement),
            (ce = _e.body),
            B &&
              ((Dn = B.utils.toArray),
              (Ln = B.utils.clamp),
              (ya = B.core.context || ur),
              (ma = B.core.suppressOverwrites || ur),
              (wa = ne.history.scrollRestoration || "auto"),
              (Da = ne.pageYOffset || 0),
              B.core.globals("ScrollTrigger", n),
              ce))
          ) {
            (Nn = 1),
              (Ki = document.createElement("div")),
              (Ki.style.height = "100vh"),
              (Ki.style.position = "absolute"),
              pc(),
              Gh(),
              Oe.register(B),
              (n.isTouch = Oe.isTouch),
              (Hr =
                Oe.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (va = Oe.isTouch === 1),
              Ye(ne, "wheel", Qi),
              (_a = [ne, _e, Rt, ce]),
              B.matchMedia
                ? ((n.matchMedia = function (u) {
                    var c = B.matchMedia(),
                      p;
                    for (p in u) c.add(p, u[p]);
                    return c;
                  }),
                  B.addEventListener("matchMediaInit", function () {
                    return Ma();
                  }),
                  B.addEventListener("matchMediaRevert", function () {
                    return fc();
                  }),
                  B.addEventListener("matchMedia", function () {
                    bi(0, 1), wi("matchMedia");
                  }),
                  B.matchMedia().add("(orientation: portrait)", function () {
                    return Ra(), Ra;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Ra(),
              Ye(_e, "scroll", Qi);
            var r = ce.hasAttribute("style"),
              i = ce.style,
              s = i.borderTopStyle,
              o = B.core.Animation.prototype,
              a,
              l;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                a = Sr(ce),
                ze.m = Math.round(a.top + ze.sc()) || 0,
                ht.m = Math.round(a.left + ht.sc()) || 0,
                s
                  ? (i.borderTopStyle = s)
                  : i.removeProperty("border-top-style"),
                r ||
                  (ce.setAttribute("style", ""), ce.removeAttribute("style")),
                Fs = setInterval(uc, 250),
                B.delayedCall(0.5, function () {
                  return (Bs = 0);
                }),
                Ye(_e, "touchcancel", ur),
                Ye(ce, "touchstart", ur),
                Us(Ye, _e, "pointerdown,touchstart,mousedown", Qu),
                Us(Ye, _e, "pointerup,touchend,mouseup", Ju),
                ga = B.utils.checkPrefix("transform"),
                Qs.push(ga),
                $i = nt(),
                zs = B.delayedCall(0.2, bi).pause(),
                Gi = [
                  _e,
                  "visibilitychange",
                  function () {
                    var u = ne.innerWidth,
                      c = ne.innerHeight;
                    _e.hidden
                      ? ((Uu = u), (Hu = c))
                      : (Uu !== u || Hu !== c) && Hn();
                  },
                  _e,
                  "DOMContentLoaded",
                  bi,
                  ne,
                  "load",
                  bi,
                  ne,
                  "resize",
                  Hn,
                ],
                Vs(Ye),
                re.forEach(function (u) {
                  return u.enable(0, 1);
                }),
                l = 0;
              l < ie.length;
              l += 3
            )
              Hs(Ue, ie[l], ie[l + 1]), Hs(Ue, ie[l], ie[l + 2]);
          }
        }),
        (n.config = function (r) {
          "limitCallbacks" in r && (Ta = !!r.limitCallbacks);
          var i = r.syncInterval;
          (i && clearInterval(Fs)) || ((Fs = i) && setInterval(uc, i)),
            "ignoreMobileResize" in r &&
              (va = n.isTouch === 1 && r.ignoreMobileResize),
            "autoRefreshEvents" in r &&
              (Vs(Ue) || Vs(Ye, r.autoRefreshEvents || "none"),
              ($u = (r.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (r, i) {
          var s = St(r),
            o = ie.indexOf(s),
            a = _i(s);
          ~o && ie.splice(o, a ? 6 : 2),
            i && (a ? lr.unshift(ne, i, ce, i, Rt, i) : lr.unshift(s, i));
        }),
        (n.clearMatchMedia = function (r) {
          re.forEach(function (i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (r, i, s) {
          var o = (Mt(r) ? St(r) : r).getBoundingClientRect(),
            a = o[s ? mi : vi] * i || 0;
          return s
            ? o.right - a > 0 && o.left + a < ne.innerWidth
            : o.bottom - a > 0 && o.top + a < ne.innerHeight;
        }),
        (n.positionInViewport = function (r, i, s) {
          Mt(r) && (r = St(r));
          var o = r.getBoundingClientRect(),
            a = o[s ? mi : vi],
            l =
              i == null
                ? a / 2
                : i in $s
                ? $s[i] * a
                : ~i.indexOf("%")
                ? (parseFloat(i) * a) / 100
                : parseFloat(i) || 0;
          return s
            ? (o.left + l) / ne.innerWidth
            : (o.top + l) / ne.innerHeight;
        }),
        (n.killAll = function (r) {
          if (
            (re.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            r !== !0)
          ) {
            var i = yi.killAll || [];
            (yi = {}),
              i.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  (Z.version = "3.12.7"),
    (Z.saveStyles = function (n) {
      return n
        ? Dn(n).forEach(function (e) {
            if (e && e.style) {
              var t = Dt.indexOf(e);
              t >= 0 && Dt.splice(t, 5),
                Dt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  B.core.getCache(e),
                  ya()
                );
            }
          })
        : Dt;
    }),
    (Z.revert = function (n, e) {
      return Ma(!n, e);
    }),
    (Z.create = function (n, e) {
      return new Z(n, e);
    }),
    (Z.refresh = function (n) {
      return n ? Hn(!0) : ($i || Z.register()) && bi(!0);
    }),
    (Z.update = function (n) {
      return ++ie.cache && br(n === !0 ? 2 : 0);
    }),
    (Z.clearScrollMemory = hc),
    (Z.maxScroll = function (n, e) {
      return cr(n, e ? ht : ze);
    }),
    (Z.getScrollFunc = function (n, e) {
      return Ur(St(n), e ? ht : ze);
    }),
    (Z.getById = function (n) {
      return Pa[n];
    }),
    (Z.getAll = function () {
      return re.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (Z.isScrolling = function () {
      return !!Ft;
    }),
    (Z.snapDirectional = Oa),
    (Z.addEventListener = function (n, e) {
      var t = yi[n] || (yi[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (Z.removeEventListener = function (n, e) {
      var t = yi[n],
        r = t && t.indexOf(e);
      r >= 0 && t.splice(r, 1);
    }),
    (Z.batch = function (n, e) {
      var t = [],
        r = {},
        i = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, c) {
          var p = [],
            d = [],
            f = B.delayedCall(i, function () {
              c(p, d), (p = []), (d = []);
            }).pause();
          return function (_) {
            p.length || f.restart(!0),
              p.push(_.trigger),
              d.push(_),
              s <= p.length && f.progress(1);
          };
        },
        a;
      for (a in e)
        r[a] =
          a.substr(0, 2) === "on" && st(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        st(s) &&
          ((s = s()),
          Ye(Z, "refresh", function () {
            return (s = e.batchMax());
          })),
        Dn(n).forEach(function (l) {
          var u = {};
          for (a in r) u[a] = r[a];
          (u.trigger = l), t.push(Z.create(u));
        }),
        t
      );
    });
  var wc = function (e, t, r, i) {
      return (
        t > i ? e(i) : t < 0 && e(0),
        r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
      );
    },
    Na = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Oe.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Rt && n(ce, t);
    },
    ro = { auto: 1, scroll: 1 },
    od = function (e) {
      var t = e.event,
        r = e.target,
        i = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || B.core.getCache(s),
        a = nt(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== ce &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(ro[(l = Wt(s)).overflowY] || ro[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== r &&
          !_i(s) &&
          (ro[(l = Wt(s)).overflowY] || ro[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || i === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Sc = function (e, t, r, i) {
      return Oe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (i = i && od),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return r && Ye(_e, Oe.eventTypes[0], Tc, !1, !0);
        },
        onDisable: function () {
          return Ue(_e, Oe.eventTypes[0], Tc, !0);
        },
      });
    },
    ad = /(input|label|select|textarea)/i,
    bc,
    Tc = function (e) {
      var t = ad.test(e.target.tagName);
      (t || bc) && ((e._gsapAllow = !0), (bc = t));
    },
    ld = function (e) {
      gi(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        r = t.normalizeScrollX,
        i = t.momentum,
        s = t.allowNestedScroll,
        o = t.onRelease,
        a,
        l,
        u = St(e.target) || Rt,
        c = B.core.globals().ScrollSmoother,
        p = c && c.get(),
        d =
          Hr &&
          ((e.content && St(e.content)) ||
            (p && e.content !== !1 && !p.smooth() && p.content())),
        f = Ur(u, ze),
        _ = Ur(u, ht),
        h = 1,
        m =
          (Oe.isTouch && ne.visualViewport
            ? ne.visualViewport.scale * ne.visualViewport.width
            : ne.outerWidth) / ne.innerWidth,
        y = 0,
        v = st(i)
          ? function () {
              return i(a);
            }
          : function () {
              return i || 2.8;
            },
        S,
        b,
        T = Sc(u, e.type, !0, s),
        E = function () {
          return (b = !1);
        },
        w = ur,
        C = ur,
        A = function () {
          (l = cr(u, ze)),
            (C = Ln(Hr ? 1 : 0, l)),
            r && (w = Ln(0, cr(u, ht))),
            (S = Si);
        },
        O = function () {
          (d._gsap.y = zn(parseFloat(d._gsap.y) + f.offset) + "px"),
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(d._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        P = function () {
          if (b) {
            requestAnimationFrame(E);
            var N = zn(a.deltaY / 2),
              z = C(f.v - N);
            if (d && z !== f.v + f.offset) {
              f.offset = z - f.v;
              var g = zn((parseFloat(d && d._gsap.y) || 0) - f.offset);
              (d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                g +
                ", 0, 1)"),
                (d._gsap.y = g + "px"),
                (f.cacheID = ie.cache),
                br();
            }
            return !0;
          }
          f.offset && O(), (b = !0);
        },
        x,
        R,
        L,
        F,
        V = function () {
          A(),
            x.isActive() &&
              x.vars.scrollY > l &&
              (f() > l ? x.progress(1) && f(l) : x.resetTo("scrollY", l));
        };
      return (
        d && B.set(d, { y: "+=0" }),
        (e.ignoreCheck = function (W) {
          return (
            (Hr && W.type === "touchmove" && P()) ||
            (h > 1.05 && W.type !== "touchstart") ||
            a.isGesturing ||
            (W.touches && W.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          b = !1;
          var W = h;
          (h = zn(((ne.visualViewport && ne.visualViewport.scale) || 1) / m)),
            x.pause(),
            W !== h && Na(u, h > 1.01 ? !0 : r ? !1 : "x"),
            (R = _()),
            (L = f()),
            A(),
            (S = Si);
        }),
        (e.onRelease = e.onGestureStart =
          function (W, N) {
            if ((f.offset && O(), !N)) F.restart(!0);
            else {
              ie.cache++;
              var z = v(),
                g,
                I;
              r &&
                ((g = _()),
                (I = g + (z * 0.05 * -W.velocityX) / 0.227),
                (z *= wc(_, g, I, cr(u, ht))),
                (x.vars.scrollX = w(I))),
                (g = f()),
                (I = g + (z * 0.05 * -W.velocityY) / 0.227),
                (z *= wc(f, g, I, cr(u, ze))),
                (x.vars.scrollY = C(I)),
                x.invalidate().duration(z).play(0.01),
                ((Hr && x.vars.scrollY >= l) || g >= l - 1) &&
                  B.to({}, { onUpdate: V, duration: z });
            }
            o && o(W);
          }),
        (e.onWheel = function () {
          x._ts && x.pause(), nt() - y > 1e3 && ((S = 0), (y = nt()));
        }),
        (e.onChange = function (W, N, z, g, I) {
          if (
            (Si !== S && A(),
            N && r && _(w(g[2] === N ? R + (W.startX - W.x) : _() + N - g[1])),
            z)
          ) {
            f.offset && O();
            var $ = I[2] === z,
              he = $ ? L + W.startY - W.y : f() + z - I[1],
              te = C(he);
            $ && he !== te && (L += te - he), f(te);
          }
          (z || N) && br();
        }),
        (e.onEnable = function () {
          Na(u, r ? !1 : "x"),
            Z.addEventListener("refresh", V),
            Ye(ne, "resize", V),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = _.smooth = !1)),
            T.enable();
        }),
        (e.onDisable = function () {
          Na(u, !0),
            Ue(ne, "resize", V),
            Z.removeEventListener("refresh", V),
            T.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Oe(e)),
        (a.iOS = Hr),
        Hr && !f() && f(1),
        Hr && B.ticker.add(ur),
        (F = a._dc),
        (x = B.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: r ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: vc(f, f(), function () {
              return x.pause();
            }),
          },
          onUpdate: br,
          onComplete: F.vars.onComplete,
        })),
        a
      );
    };
  (Z.sort = function (n) {
    if (st(n)) return re.sort(n);
    var e = ne.pageYOffset || 0;
    return (
      Z.getAll().forEach(function (t) {
        return (t._sortY = t.trigger
          ? e + t.trigger.getBoundingClientRect().top
          : t.start + ne.innerHeight);
      }),
      re.sort(
        n ||
          function (t, r) {
            return (
              (t.vars.refreshPriority || 0) * -1e6 +
              (t.vars.containerAnimation ? 1e6 : t._sortY) -
              ((r.vars.containerAnimation ? 1e6 : r._sortY) +
                (r.vars.refreshPriority || 0) * -1e6)
            );
          }
      )
    );
  }),
    (Z.observe = function (n) {
      return new Oe(n);
    }),
    (Z.normalizeScroll = function (n) {
      if (typeof n > "u") return pt;
      if (n === !0 && pt) return pt.enable();
      if (n === !1) {
        pt && pt.kill(), (pt = n);
        return;
      }
      var e = n instanceof Oe ? n : ld(n);
      return (
        pt && pt.target === e.target && pt.kill(), _i(e.target) && (pt = e), e
      );
    }),
    (Z.core = {
      _getVelocityProp: pa,
      _inputObserver: Sc,
      _scrollers: ie,
      _proxies: lr,
      bridge: {
        ss: function () {
          Ft || wi("scrollStart"), (Ft = nt());
        },
        ref: function () {
          return it;
        },
      },
    }),
    tc() && B.registerPlugin(Z);
  function ud() {
    Y.registerPlugin(Z);
    const n = document.querySelector(".navbar_navbar");
    if (!n || window.innerWidth < 992) return;
    const e = n.querySelector(".navbar_logo"),
      t = n.querySelector(".navbar_wordmark"),
      r = Y.timeline();
    Z.create({
      trigger: ".hero_description",
      start: "top top",
      end: "bottom-=80 top",
      scrub: !0,
      animation: r,
    }),
      r.fromTo(
        e,
        { scale: 7, transformOrigin: "top left" },
        { scale: 1, ease: "linear", immediateRender: !0 }
      ),
      r.fromTo(
        t,
        { width: "0rem", overflow: "hidden" },
        { width: "auto", ease: "linear", immediateRender: !0 },
        "<"
      );
  }
  const cd = () => {
    ud(), console.log("Home page initialized");
  };
  var fd = "1.2.3";
  function Ec(n, e, t) {
    return Math.max(n, Math.min(e, t));
  }
  function hd(n, e, t) {
    return (1 - t) * n + t * e;
  }
  function dd(n, e, t, r) {
    return hd(n, e, 1 - Math.exp(-t * r));
  }
  function pd(n, e) {
    return ((n % e) + e) % e;
  }
  var _d = class {
    constructor() {
      U(this, "isRunning", !1);
      U(this, "value", 0);
      U(this, "from", 0);
      U(this, "to", 0);
      U(this, "currentTime", 0);
      U(this, "lerp");
      U(this, "duration");
      U(this, "easing");
      U(this, "onUpdate");
    }
    advance(n) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const r = Ec(0, this.currentTime / this.duration, 1);
        e = r >= 1;
        const i = e ? 1 : this.easing(r);
        this.value = this.from + (this.to - this.from) * i;
      } else
        this.lerp
          ? ((this.value = dd(this.value, this.to, this.lerp * 60, n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(n, e, { lerp: t, duration: r, easing: i, onStart: s, onUpdate: o }) {
      (this.from = this.value = n),
        (this.to = e),
        (this.lerp = t),
        (this.duration = r),
        (this.easing = i),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = o);
    }
  };
  function gd(n, e) {
    let t;
    return function (...r) {
      let i = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), n.apply(i, r);
        }, e));
    };
  }
  var md = class {
      constructor(n, e, { autoResize: t = !0, debounce: r = 250 } = {}) {
        U(this, "width", 0);
        U(this, "height", 0);
        U(this, "scrollHeight", 0);
        U(this, "scrollWidth", 0);
        U(this, "debouncedResize");
        U(this, "wrapperResizeObserver");
        U(this, "contentResizeObserver");
        U(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        U(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        U(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = n),
          (this.content = e),
          t &&
            ((this.debouncedResize = gd(this.resize, r)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var n, e;
        (n = this.wrapperResizeObserver) == null || n.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    xc = class {
      constructor() {
        U(this, "events", {});
      }
      emit(n, ...e) {
        var r;
        let t = this.events[n] || [];
        for (let i = 0, s = t.length; i < s; i++)
          (r = t[i]) == null || r.call(t, ...e);
      }
      on(n, e) {
        var t;
        return (
          ((t = this.events[n]) != null && t.push(e)) || (this.events[n] = [e]),
          () => {
            var r;
            this.events[n] =
              (r = this.events[n]) == null ? void 0 : r.filter((i) => e !== i);
          }
        );
      }
      off(n, e) {
        var t;
        this.events[n] =
          (t = this.events[n]) == null ? void 0 : t.filter((r) => e !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    Cc = 100 / 6,
    Xr = { passive: !1 },
    vd = class {
      constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        U(this, "touchStart", { x: 0, y: 0 });
        U(this, "lastDelta", { x: 0, y: 0 });
        U(this, "window", { width: 0, height: 0 });
        U(this, "emitter", new xc());
        U(this, "onTouchStart", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
        });
        U(this, "onTouchMove", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            r = -(e - this.touchStart.x) * this.options.touchMultiplier,
            i = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit("scroll", { deltaX: r, deltaY: i, event: n });
        });
        U(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        U(this, "onWheel", (n) => {
          let { deltaX: e, deltaY: t, deltaMode: r } = n;
          const i = r === 1 ? Cc : r === 2 ? this.window.width : 1,
            s = r === 1 ? Cc : r === 2 ? this.window.height : 1;
          (e *= i),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n });
        });
        U(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = n),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Xr),
          this.element.addEventListener("touchstart", this.onTouchStart, Xr),
          this.element.addEventListener("touchmove", this.onTouchMove, Xr),
          this.element.addEventListener("touchend", this.onTouchEnd, Xr);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Xr),
          this.element.removeEventListener("touchstart", this.onTouchStart, Xr),
          this.element.removeEventListener("touchmove", this.onTouchMove, Xr),
          this.element.removeEventListener("touchend", this.onTouchEnd, Xr);
      }
    },
    yd = class {
      constructor({
        wrapper: n = window,
        content: e = document.documentElement,
        eventsTarget: t = n,
        smoothWheel: r = !0,
        syncTouch: i = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l = (E) => Math.min(1, 1.001 - Math.pow(2, -10 * E)),
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: p = "vertical",
        gestureOrientation: d = "vertical",
        touchMultiplier: f = 1,
        wheelMultiplier: _ = 1,
        autoResize: h = !0,
        prevent: m,
        virtualScroll: y,
        overscroll: v = !0,
        autoRaf: S = !1,
        anchors: b = !1,
        __experimental__naiveDimensions: T = !1,
      } = {}) {
        U(this, "_isScrolling", !1);
        U(this, "_isStopped", !1);
        U(this, "_isLocked", !1);
        U(this, "_preventNextNativeScrollEvent", !1);
        U(this, "_resetVelocityTimeout", null);
        U(this, "__rafID", null);
        U(this, "isTouching");
        U(this, "time", 0);
        U(this, "userData", {});
        U(this, "lastVelocity", 0);
        U(this, "velocity", 0);
        U(this, "direction", 0);
        U(this, "options");
        U(this, "targetScroll");
        U(this, "animatedScroll");
        U(this, "animate", new _d());
        U(this, "emitter", new xc());
        U(this, "dimensions");
        U(this, "virtualScroll");
        U(this, "onScrollEnd", (n) => {
          n instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              n.stopPropagation());
        });
        U(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        U(this, "onClick", (n) => {
          const t = n.composedPath().find((r) => {
            var i, s, o;
            return (
              r instanceof HTMLAnchorElement &&
              (((i = r.getAttribute("href")) == null
                ? void 0
                : i.startsWith("#")) ||
                ((s = r.getAttribute("href")) == null
                  ? void 0
                  : s.startsWith("/#")) ||
                ((o = r.getAttribute("href")) == null
                  ? void 0
                  : o.startsWith("./#")))
            );
          });
          if (t) {
            const r = t.getAttribute("href");
            if (r) {
              const i =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              this.scrollTo(`#${r.split("#")[1]}`, i);
            }
          }
        });
        U(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        U(this, "onVirtualScroll", (n) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(n) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: r } = n;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          const i = r.type.includes("touch"),
            s = r.type.includes("wheel");
          this.isTouching = r.type === "touchstart" || r.type === "touchmove";
          const o = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (o || l) return;
          let u = r.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((m) => {
              var y, v, S;
              return (
                m instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(m))) ||
                  ((y = m.hasAttribute) == null
                    ? void 0
                    : y.call(m, "data-lenis-prevent")) ||
                  (i &&
                    ((v = m.hasAttribute) == null
                      ? void 0
                      : v.call(m, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((S = m.hasAttribute) == null
                      ? void 0
                      : S.call(m, "data-lenis-prevent-wheel"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && i) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (r.lenisStopPropagation = !0);
            return;
          }
          let d = t;
          this.options.gestureOrientation === "both"
            ? (d = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (d = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.preventDefault();
          const f = i && this.options.syncTouch,
            h = i && r.type === "touchend" && Math.abs(d) > 5;
          h && (d = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + d, {
              programmatic: !1,
              ...(f
                ? { lerp: h ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        U(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const n = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - n),
              (this.direction = Math.sign(this.animatedScroll - n)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        U(this, "raf", (n) => {
          const e = n - (this.time || n);
          (this.time = n),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = fd),
          (!n || n === document.documentElement) && (n = window),
          (this.options = {
            wrapper: n,
            content: e,
            eventsTarget: t,
            smoothWheel: r,
            syncTouch: i,
            syncTouchLerp: s,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: d,
            orientation: p,
            touchMultiplier: f,
            wheelMultiplier: _,
            autoResize: h,
            prevent: m,
            virtualScroll: y,
            overscroll: v,
            autoRaf: S,
            anchors: b,
            __experimental__naiveDimensions: T,
          }),
          (this.dimensions = new md(n, e, { autoResize: h })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new vd(t, {
            touchMultiplier: f,
            wheelMultiplier: _,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      off(n, e) {
        return this.emitter.off(n, e);
      }
      setScroll(n) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: n, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: n, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1));
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0));
      }
      scrollTo(
        n,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: r = !1,
          duration: i = this.options.duration,
          easing: s = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: p,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
          if (typeof n == "string" && ["top", "left", "start"].includes(n))
            n = 0;
          else if (
            typeof n == "string" &&
            ["bottom", "right", "end"].includes(n)
          )
            n = this.limit;
          else {
            let d;
            if (
              (typeof n == "string"
                ? (d = document.querySelector(n))
                : n instanceof HTMLElement &&
                  n != null &&
                  n.nodeType &&
                  (d = n),
              d)
            ) {
              if (this.options.wrapper !== window) {
                const _ = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? _.left : _.top;
              }
              const f = d.getBoundingClientRect();
              n = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
            }
          }
          if (typeof n == "number") {
            if (
              ((n += e),
              (n = Math.round(n)),
              this.options.infinite
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (n = Ec(0, n, this.limit)),
              n === this.targetScroll)
            ) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = p ?? {}), t)) {
              (this.animatedScroll = this.targetScroll = n),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            c || (this.targetScroll = n),
              this.animate.fromTo(this.animatedScroll, n, {
                duration: i,
                easing: s,
                lerp: o,
                onStart: () => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (d, f) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = d - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = d),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = d),
                    f || this.emit(),
                    f &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        const n = this.options.wrapper;
        return this.isHorizontal
          ? n.scrollX ?? n.scrollLeft
          : n.scrollY ?? n.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? pd(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(n) {
        this._isScrolling !== n &&
          ((this._isScrolling = n), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(n) {
        this._isStopped !== n &&
          ((this._isStopped = n), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(n) {
        this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let n = "lenis";
        return (
          this.isStopped && (n += " lenis-stopped"),
          this.isLocked && (n += " lenis-locked"),
          this.isScrolling && (n += " lenis-scrolling"),
          this.isScrolling === "smooth" && (n += " lenis-smooth"),
          n
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  function za(n = null) {
    Y.registerPlugin(Z), n || (n = window);
    let e = new yd({ wrapper: n, lerp: 0.2, smooth: !0 });
    return (
      Y.ticker.add((t) => {
        e.raf(t * 1e3), Z.update();
      }),
      Y.ticker.lagSmoothing(0),
      console.log("lenis initiated"),
      e
    );
  }
  Y.defaults({ ease: "power2.inOut", duration: 0.3 });
  const Ac = {
    navbarEl: document.querySelector(".navbar_navbar"),
    navLinks: document.querySelectorAll(".navbar_link"),
    menuBtn: document.querySelector(".navbar_menu-button"),
    menuWrapper: document.querySelector(".navbar_menu-wrapper"),
    menuLinksWrapper: document.querySelector(".navbar_menu-links-wrapper"),
    overlay: document.querySelector(".overlay_wrapper"),
    menuDropdowns: document.querySelectorAll(
      ".navbar_menu-item-wrapper.w-dropdown"
    ),
    isMenuOpen: !1,
    isNavbarHidden: !1,
    isSetToMobile: !1,
    eventListenersMap: new WeakMap(),
    openMenu() {
      const n = Y.timeline();
      return (
        Zt.stop(),
        n.set(document.body, { overflow: "hidden" }),
        n.to(this.navbarEl, { opacity: 0, duration: 0.1 }),
        n.set(this.menuWrapper, { display: "block" }),
        n.set(this.navbarEl, {
          backgroundColor: "var(--background-color--background-primary)",
          color: "var(--text-color--text-primary)",
        }),
        n.set(this.menuLinksWrapper.children, { opacity: 0, y: "1rem" }),
        n.to(this.navbarEl, { opacity: 1 }),
        n.to(this.menuLinksWrapper.children, {
          opacity: 1,
          y: "",
          stagger: 0.08,
        }),
        (this.isMenuOpen = !0),
        n
      );
    },
    closeMenu() {
      const n = Y.timeline();
      return (
        Zt.start(),
        n.to(this.navbarEl, { opacity: 0 }),
        n.set(this.menuWrapper, { display: "none" }),
        n.set(this.navbarEl, { backgroundColor: "", color: "" }),
        n.to(this.navbarEl, { opacity: 1, duration: 0.1 }),
        n.to(document.body, { overflow: "" }),
        (this.isMenuOpen = !1),
        n
      );
    },
    handleMenuClick() {
      this.menuBtn.addEventListener("click", () => {
        this.isMenuOpen ? this.closeMenu() : this.openMenu();
      });
    },
    hide(n = !1) {
      return Y.timeline();
    },
    show() {
      return Y.timeline();
    },
    mobileInit() {
      const n = document.querySelector(".navbar_second-level-button"),
        e = document.querySelector(".navbar_menu-wrapper.is-second-level"),
        t = za(this.menuWrapper),
        r = za(e);
      function i() {
        e.querySelector(".navbar_second-level-links-wrapper").replaceChildren();
      }
      function s(l) {
        const u = Array.from(l).map((c) => c.cloneNode(!0));
        e.querySelector(".navbar_second-level-links-wrapper").append(...u),
          r.resize();
      }
      this.menuDropdowns.forEach((l) => {
        const u = l.querySelector(".navbar_dropdown-toggle"),
          c = l.querySelector(".navbar_link"),
          p = l.querySelector(".navbar_dropdown-list").children;
        Y.set([c, u], { pointerEvents: "none" }),
          Y.set(l, { pointerEvents: "all", cursor: "pointer" });
        const d = Y.timeline({ paused: !0 });
        d.to([this.menuLinksWrapper, e], {
          x: "-100vw",
          duration: 0.4,
          ease: "power2.inOut",
        });
        const f = () => {
          i(), s(p), t.stop(), d.restart();
        };
        this.eventListenersMap.set(l, f), l.addEventListener("click", f);
      });
      const o = Y.timeline({ paused: !0 });
      o.to([this.menuLinksWrapper, e], {
        x: "0vw",
        duration: 0.4,
        ease: "power2.inOut",
      });
      const a = function () {
        o.restart(), t.start();
      };
      this.eventListenersMap.set(n, a), n.addEventListener("click", a);
    },
    resizeListener() {
      const n = () => {
        const e = Y.timeline();
        return (
          window.innerWidth > 991 &&
            this.isSetToMobile &&
            (this.closeMenu(!0),
            (this.isSetToMobile = !1),
            e.call(() => {
              this.menuDropdowns.forEach((t) => {
                const r = t.querySelector(".navbar_dropdown-toggle"),
                  i = t.querySelector(".navbar_link");
                Y.set([i, r], { pointerEvents: "" }),
                  Y.set(t, { pointerEvents: "", cursor: "" }),
                  Y.set(this.menuLinksWrapper, { display: "" });
                const s = this.eventListenersMap.get(t);
                s &&
                  (t.removeEventListener("click", s),
                  this.eventListenersMap.delete(t));
              });
            }),
            e.set(this.menuWrapper, { display: "", delay: 0.1 }),
            e.set(this.navbarEl, { backgroundColor: "", color: "" }),
            console.log("debug")),
          window.innerWidth < 992 &&
            !this.isSetToMobile &&
            ((this.isSetToMobile = !0), this.mobileInit()),
          e
        );
      };
      window.addEventListener("resize", n);
    },
    hideOnScroll() {
      if (
        document
          .querySelector(".navbar_wrapper")
          .getAttribute("data-nav-hide-on-scroll") == "true"
      ) {
        let e = 0;
        window.addEventListener("scroll", () => {
          let t = window.pageYOffset || document.documentElement.scrollTop;
          t > e
            ? Y.to(this.navbarEl, {
                y: "-100%",
                duration: 0.4,
                ease: "power2.InOut",
              })
            : Y.to(this.navbarEl, {
                y: "0",
                duration: 0.4,
                ease: "power2.InOut",
              }),
            (e = t);
        });
      }
    },
    init() {
      window.innerWidth < 992
        ? ((this.isSetToMobile = !0), this.mobileInit())
        : this.hideOnScroll(),
        this.resizeListener(),
        this.handleMenuClick();
    },
  };
  function wd(n, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(n, r.key, r);
    }
  }
  function Sd(n, e, t) {
    return (
      e && wd(n.prototype, e),
      Object.defineProperty(n, "prototype", { writable: !1 }),
      n
    );
  }
  /*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   */ var kc = "(prefers-reduced-motion: reduce)",
    en = 1,
    bd = 2,
    tn = 3,
    rn = 4,
    $n = 5,
    io = 6,
    no = 7,
    Td = {
      CREATED: en,
      MOUNTED: bd,
      IDLE: tn,
      MOVING: rn,
      SCROLLING: $n,
      DRAGGING: io,
      DESTROYED: no,
    };
  function Tr(n) {
    n.length = 0;
  }
  function $r(n, e, t) {
    return Array.prototype.slice.call(n, e, t);
  }
  function ge(n) {
    return n.bind.apply(n, [null].concat($r(arguments, 1)));
  }
  var Oc = setTimeout,
    Fa = function () {};
  function Pc(n) {
    return requestAnimationFrame(n);
  }
  function so(n, e) {
    return typeof e === n;
  }
  function Gn(n) {
    return !Wa(n) && so("object", n);
  }
  var qa = Array.isArray,
    Rc = ge(so, "function"),
    Gr = ge(so, "string"),
    Kn = ge(so, "undefined");
  function Wa(n) {
    return n === null;
  }
  function Mc(n) {
    try {
      return n instanceof (n.ownerDocument.defaultView || window).HTMLElement;
    } catch {
      return !1;
    }
  }
  function Zn(n) {
    return qa(n) ? n : [n];
  }
  function Bt(n, e) {
    Zn(n).forEach(e);
  }
  function Ba(n, e) {
    return n.indexOf(e) > -1;
  }
  function oo(n, e) {
    return n.push.apply(n, Zn(e)), n;
  }
  function Er(n, e, t) {
    n &&
      Bt(e, function (r) {
        r && n.classList[t ? "add" : "remove"](r);
      });
  }
  function fr(n, e) {
    Er(n, Gr(e) ? e.split(" ") : e, !0);
  }
  function jn(n, e) {
    Bt(e, n.appendChild.bind(n));
  }
  function Va(n, e) {
    Bt(n, function (t) {
      var r = (e || t).parentNode;
      r && r.insertBefore(t, e);
    });
  }
  function Qn(n, e) {
    return Mc(n) && (n.msMatchesSelector || n.matches).call(n, e);
  }
  function Dc(n, e) {
    var t = n ? $r(n.children) : [];
    return e
      ? t.filter(function (r) {
          return Qn(r, e);
        })
      : t;
  }
  function Jn(n, e) {
    return e ? Dc(n, e)[0] : n.firstElementChild;
  }
  var es = Object.keys;
  function Ti(n, e, t) {
    return (
      n &&
        (t ? es(n).reverse() : es(n)).forEach(function (r) {
          r !== "__proto__" && e(n[r], r);
        }),
      n
    );
  }
  function ts(n) {
    return (
      $r(arguments, 1).forEach(function (e) {
        Ti(e, function (t, r) {
          n[r] = e[r];
        });
      }),
      n
    );
  }
  function Kr(n) {
    return (
      $r(arguments, 1).forEach(function (e) {
        Ti(e, function (t, r) {
          qa(t)
            ? (n[r] = t.slice())
            : Gn(t)
            ? (n[r] = Kr({}, Gn(n[r]) ? n[r] : {}, t))
            : (n[r] = t);
        });
      }),
      n
    );
  }
  function Lc(n, e) {
    Bt(e || es(n), function (t) {
      delete n[t];
    });
  }
  function hr(n, e) {
    Bt(n, function (t) {
      Bt(e, function (r) {
        t && t.removeAttribute(r);
      });
    });
  }
  function ee(n, e, t) {
    Gn(e)
      ? Ti(e, function (r, i) {
          ee(n, i, r);
        })
      : Bt(n, function (r) {
          Wa(t) || t === "" ? hr(r, e) : r.setAttribute(e, String(t));
        });
  }
  function nn(n, e, t) {
    var r = document.createElement(n);
    return e && (Gr(e) ? fr(r, e) : ee(r, e)), t && jn(t, r), r;
  }
  function $t(n, e, t) {
    if (Kn(t)) return getComputedStyle(n)[e];
    Wa(t) || (n.style[e] = "" + t);
  }
  function rs(n, e) {
    $t(n, "display", e);
  }
  function Ic(n) {
    (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
  }
  function Gt(n, e) {
    return n.getAttribute(e);
  }
  function Nc(n, e) {
    return n && n.classList.contains(e);
  }
  function Vt(n) {
    return n.getBoundingClientRect();
  }
  function Ei(n) {
    Bt(n, function (e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    });
  }
  function zc(n) {
    return Jn(new DOMParser().parseFromString(n, "text/html").body);
  }
  function xr(n, e) {
    n.preventDefault(),
      e && (n.stopPropagation(), n.stopImmediatePropagation());
  }
  function Fc(n, e) {
    return n && n.querySelector(e);
  }
  function Ya(n, e) {
    return e ? $r(n.querySelectorAll(e)) : [];
  }
  function Cr(n, e) {
    Er(n, e, !1);
  }
  function Ua(n) {
    return n.timeStamp;
  }
  function xi(n) {
    return Gr(n) ? n : n ? n + "px" : "";
  }
  var is = "splide",
    Ha = "data-" + is;
  function ns(n, e) {
    if (!n) throw new Error("[" + is + "] " + (e || ""));
  }
  var Zr = Math.min,
    ao = Math.max,
    lo = Math.floor,
    ss = Math.ceil,
    bt = Math.abs;
  function qc(n, e, t) {
    return bt(n - e) < t;
  }
  function uo(n, e, t, r) {
    var i = Zr(e, t),
      s = ao(e, t);
    return r ? i < n && n < s : i <= n && n <= s;
  }
  function sn(n, e, t) {
    var r = Zr(e, t),
      i = ao(e, t);
    return Zr(ao(r, n), i);
  }
  function Xa(n) {
    return +(n > 0) - +(n < 0);
  }
  function $a(n, e) {
    return (
      Bt(e, function (t) {
        n = n.replace("%s", "" + t);
      }),
      n
    );
  }
  function Ga(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  var Wc = {};
  function Ed(n) {
    return "" + n + Ga((Wc[n] = (Wc[n] || 0) + 1));
  }
  function Bc() {
    var n = [];
    function e(o, a, l, u) {
      i(o, a, function (c, p, d) {
        var f = "addEventListener" in c,
          _ = f
            ? c.removeEventListener.bind(c, p, l, u)
            : c.removeListener.bind(c, l);
        f ? c.addEventListener(p, l, u) : c.addListener(l),
          n.push([c, p, d, l, _]);
      });
    }
    function t(o, a, l) {
      i(o, a, function (u, c, p) {
        n = n.filter(function (d) {
          return d[0] === u && d[1] === c && d[2] === p && (!l || d[3] === l)
            ? (d[4](), !1)
            : !0;
        });
      });
    }
    function r(o, a, l) {
      var u,
        c = !0;
      return (
        typeof CustomEvent == "function"
          ? (u = new CustomEvent(a, { bubbles: c, detail: l }))
          : ((u = document.createEvent("CustomEvent")),
            u.initCustomEvent(a, c, !1, l)),
        o.dispatchEvent(u),
        u
      );
    }
    function i(o, a, l) {
      Bt(o, function (u) {
        u &&
          Bt(a, function (c) {
            c.split(" ").forEach(function (p) {
              var d = p.split(".");
              l(u, d[0], d[1]);
            });
          });
      });
    }
    function s() {
      n.forEach(function (o) {
        o[4]();
      }),
        Tr(n);
    }
    return { bind: e, unbind: t, dispatch: r, destroy: s };
  }
  var Ci = "mounted",
    Vc = "ready",
    jr = "move",
    os = "moved",
    Yc = "click",
    xd = "active",
    Cd = "inactive",
    Ad = "visible",
    kd = "hidden",
    qe = "refresh",
    Tt = "updated",
    as = "resize",
    Ka = "resized",
    Od = "drag",
    Pd = "dragging",
    Rd = "dragged",
    Za = "scroll",
    on = "scrolled",
    Md = "overflow",
    Uc = "destroy",
    Dd = "arrows:mounted",
    Ld = "arrows:updated",
    Id = "pagination:mounted",
    Nd = "pagination:updated",
    Hc = "navigation:mounted",
    Xc = "autoplay:play",
    zd = "autoplay:playing",
    $c = "autoplay:pause",
    Gc = "lazyload:loaded",
    Kc = "sk",
    Zc = "sh",
    co = "ei";
  function Te(n) {
    var e = n ? n.event.bus : document.createDocumentFragment(),
      t = Bc();
    function r(s, o) {
      t.bind(e, Zn(s).join(" "), function (a) {
        o.apply(o, qa(a.detail) ? a.detail : []);
      });
    }
    function i(s) {
      t.dispatch(e, s, $r(arguments, 1));
    }
    return (
      n && n.event.on(Uc, t.destroy),
      ts(t, { bus: e, on: r, off: ge(t.unbind, e), emit: i })
    );
  }
  function fo(n, e, t, r) {
    var i = Date.now,
      s,
      o = 0,
      a,
      l = !0,
      u = 0;
    function c() {
      if (!l) {
        if (
          ((o = n ? Zr((i() - s) / n, 1) : 1),
          t && t(o),
          o >= 1 && (e(), (s = i()), r && ++u >= r))
        )
          return d();
        a = Pc(c);
      }
    }
    function p(y) {
      y || _(), (s = i() - (y ? o * n : 0)), (l = !1), (a = Pc(c));
    }
    function d() {
      l = !0;
    }
    function f() {
      (s = i()), (o = 0), t && t(o);
    }
    function _() {
      a && cancelAnimationFrame(a), (o = 0), (a = 0), (l = !0);
    }
    function h(y) {
      n = y;
    }
    function m() {
      return l;
    }
    return { start: p, rewind: f, pause: d, cancel: _, set: h, isPaused: m };
  }
  function Fd(n) {
    var e = n;
    function t(i) {
      e = i;
    }
    function r(i) {
      return Ba(Zn(i), e);
    }
    return { set: t, is: r };
  }
  function qd(n, e) {
    var t = fo(0, n, null, 1);
    return function () {
      t.isPaused() && t.start();
    };
  }
  function Wd(n, e, t) {
    var r = n.state,
      i = t.breakpoints || {},
      s = t.reducedMotion || {},
      o = Bc(),
      a = [];
    function l() {
      var _ = t.mediaQuery === "min";
      es(i)
        .sort(function (h, m) {
          return _ ? +h - +m : +m - +h;
        })
        .forEach(function (h) {
          c(i[h], "(" + (_ ? "min" : "max") + "-width:" + h + "px)");
        }),
        c(s, kc),
        p();
    }
    function u(_) {
      _ && o.destroy();
    }
    function c(_, h) {
      var m = matchMedia(h);
      o.bind(m, "change", p), a.push([_, m]);
    }
    function p() {
      var _ = r.is(no),
        h = t.direction,
        m = a.reduce(function (y, v) {
          return Kr(y, v[1].matches ? v[0] : {});
        }, {});
      Lc(t),
        f(m),
        t.destroy
          ? n.destroy(t.destroy === "completely")
          : _
          ? (u(!0), n.mount())
          : h !== t.direction && n.refresh();
    }
    function d(_) {
      matchMedia(kc).matches && (_ ? Kr(t, s) : Lc(t, es(s)));
    }
    function f(_, h, m) {
      Kr(t, _),
        h && Kr(Object.getPrototypeOf(t), _),
        (m || !r.is(en)) && n.emit(Tt, t);
    }
    return { setup: l, destroy: u, reduce: d, set: f };
  }
  var ho = "Arrow",
    po = ho + "Left",
    _o = ho + "Right",
    jc = ho + "Up",
    Qc = ho + "Down",
    Jc = "rtl",
    go = "ttb",
    ja = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [jc, _o],
      ArrowRight: [Qc, po],
    };
  function Bd(n, e, t) {
    function r(s, o, a) {
      a = a || t.direction;
      var l = a === Jc && !o ? 1 : a === go ? 0 : -1;
      return (
        (ja[s] && ja[s][l]) ||
        s.replace(/width|left|right/i, function (u, c) {
          var p = ja[u.toLowerCase()][l] || u;
          return c > 0 ? p.charAt(0).toUpperCase() + p.slice(1) : p;
        })
      );
    }
    function i(s) {
      return s * (t.direction === Jc ? 1 : -1);
    }
    return { resolve: r, orient: i };
  }
  var Ar = "role",
    an = "tabindex",
    Vd = "disabled",
    Kt = "aria-",
    ls = Kt + "controls",
    ef = Kt + "current",
    tf = Kt + "selected",
    Yt = Kt + "label",
    Qa = Kt + "labelledby",
    rf = Kt + "hidden",
    Ja = Kt + "orientation",
    us = Kt + "roledescription",
    nf = Kt + "live",
    sf = Kt + "busy",
    of = Kt + "atomic",
    el = [Ar, an, Vd, ls, ef, Yt, Qa, rf, Ja, us],
    dr = is + "__",
    Qr = "is-",
    tl = is,
    af = dr + "track",
    Yd = dr + "list",
    mo = dr + "slide",
    lf = mo + "--clone",
    Ud = mo + "__container",
    rl = dr + "arrows",
    vo = dr + "arrow",
    uf = vo + "--prev",
    cf = vo + "--next",
    yo = dr + "pagination",
    ff = yo + "__page",
    Hd = dr + "progress",
    Xd = Hd + "__bar",
    $d = dr + "toggle",
    Gd = dr + "spinner",
    Kd = dr + "sr",
    Zd = Qr + "initialized",
    Ai = Qr + "active",
    hf = Qr + "prev",
    df = Qr + "next",
    il = Qr + "visible",
    nl = Qr + "loading",
    pf = Qr + "focus-in",
    _f = Qr + "overflow",
    jd = [Ai, il, hf, df, nl, pf, _f],
    Qd = {
      slide: mo,
      clone: lf,
      arrows: rl,
      arrow: vo,
      prev: uf,
      next: cf,
      pagination: yo,
      page: ff,
      spinner: Gd,
    };
  function Jd(n, e) {
    if (Rc(n.closest)) return n.closest(e);
    for (var t = n; t && t.nodeType === 1 && !Qn(t, e); ) t = t.parentElement;
    return t;
  }
  var ep = 5,
    gf = 200,
    mf = "touchstart mousedown",
    sl = "touchmove mousemove",
    ol = "touchend touchcancel mouseup click";
  function tp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.bind,
      o = n.root,
      a = t.i18n,
      l = {},
      u = [],
      c = [],
      p = [],
      d,
      f,
      _;
    function h() {
      S(), b(), v();
    }
    function m() {
      i(qe, y),
        i(qe, h),
        i(Tt, v),
        s(
          document,
          mf + " keydown",
          function (w) {
            _ = w.type === "keydown";
          },
          { capture: !0 }
        ),
        s(o, "focusin", function () {
          Er(o, pf, !!_);
        });
    }
    function y(w) {
      var C = el.concat("style");
      Tr(u), Cr(o, c), Cr(d, p), hr([d, f], C), hr(o, w ? C : ["style", us]);
    }
    function v() {
      Cr(o, c),
        Cr(d, p),
        (c = E(tl)),
        (p = E(af)),
        fr(o, c),
        fr(d, p),
        ee(o, Yt, t.label),
        ee(o, Qa, t.labelledby);
    }
    function S() {
      (d = T("." + af)),
        (f = Jn(d, "." + Yd)),
        ns(d && f, "A track/list element is missing."),
        oo(u, Dc(f, "." + mo + ":not(." + lf + ")")),
        Ti(
          {
            arrows: rl,
            pagination: yo,
            prev: uf,
            next: cf,
            bar: Xd,
            toggle: $d,
          },
          function (w, C) {
            l[C] = T("." + w);
          }
        ),
        ts(l, { root: o, track: d, list: f, slides: u });
    }
    function b() {
      var w = o.id || Ed(is),
        C = t.role;
      (o.id = w),
        (d.id = d.id || w + "-track"),
        (f.id = f.id || w + "-list"),
        !Gt(o, Ar) && o.tagName !== "SECTION" && C && ee(o, Ar, C),
        ee(o, us, a.carousel),
        ee(f, Ar, "presentation");
    }
    function T(w) {
      var C = Fc(o, w);
      return C && Jd(C, "." + tl) === o ? C : void 0;
    }
    function E(w) {
      return [
        w + "--" + t.type,
        w + "--" + t.direction,
        t.drag && w + "--draggable",
        t.isNavigation && w + "--nav",
        w === tl && Ai,
      ];
    }
    return ts(l, { setup: h, mount: m, destroy: y });
  }
  var ln = "slide",
    un = "loop",
    cs = "fade";
  function rp(n, e, t, r) {
    var i = Te(n),
      s = i.on,
      o = i.emit,
      a = i.bind,
      l = n.Components,
      u = n.root,
      c = n.options,
      p = c.isNavigation,
      d = c.updateOnMove,
      f = c.i18n,
      _ = c.pagination,
      h = c.slideFocus,
      m = l.Direction.resolve,
      y = Gt(r, "style"),
      v = Gt(r, Yt),
      S = t > -1,
      b = Jn(r, "." + Ud),
      T;
    function E() {
      S ||
        ((r.id = u.id + "-slide" + Ga(e + 1)),
        ee(r, Ar, _ ? "tabpanel" : "group"),
        ee(r, us, f.slide),
        ee(r, Yt, v || $a(f.slideLabel, [e + 1, n.length]))),
        w();
    }
    function w() {
      a(r, "click", ge(o, Yc, N)),
        a(r, "keydown", ge(o, Kc, N)),
        s([os, Zc, on], P),
        s(Hc, A),
        d && s(jr, O);
    }
    function C() {
      (T = !0),
        i.destroy(),
        Cr(r, jd),
        hr(r, el),
        ee(r, "style", y),
        ee(r, Yt, v || "");
    }
    function A() {
      var z = n.splides
        .map(function (g) {
          var I = g.splide.Components.Slides.getAt(e);
          return I ? I.slide.id : "";
        })
        .join(" ");
      ee(r, Yt, $a(f.slideX, (S ? t : e) + 1)),
        ee(r, ls, z),
        ee(r, Ar, h ? "button" : ""),
        h && hr(r, us);
    }
    function O() {
      T || P();
    }
    function P() {
      if (!T) {
        var z = n.index;
        x(), R(), Er(r, hf, e === z - 1), Er(r, df, e === z + 1);
      }
    }
    function x() {
      var z = F();
      z !== Nc(r, Ai) &&
        (Er(r, Ai, z), ee(r, ef, (p && z) || ""), o(z ? xd : Cd, N));
    }
    function R() {
      var z = V(),
        g = !z && (!F() || S);
      if (
        (n.state.is([rn, $n]) || ee(r, rf, g || ""),
        ee(Ya(r, c.focusableNodes || ""), an, g ? -1 : ""),
        h && ee(r, an, g ? -1 : 0),
        z !== Nc(r, il) && (Er(r, il, z), o(z ? Ad : kd, N)),
        !z && document.activeElement === r)
      ) {
        var I = l.Slides.getAt(n.index);
        I && Ic(I.slide);
      }
    }
    function L(z, g, I) {
      $t((I && b) || r, z, g);
    }
    function F() {
      var z = n.index;
      return z === e || (c.cloneStatus && z === t);
    }
    function V() {
      if (n.is(cs)) return F();
      var z = Vt(l.Elements.track),
        g = Vt(r),
        I = m("left", !0),
        $ = m("right", !0);
      return lo(z[I]) <= ss(g[I]) && lo(g[$]) <= ss(z[$]);
    }
    function W(z, g) {
      var I = bt(z - e);
      return !S && (c.rewind || n.is(un)) && (I = Zr(I, n.length - I)), I <= g;
    }
    var N = {
      index: e,
      slideIndex: t,
      slide: r,
      container: b,
      isClone: S,
      mount: E,
      destroy: C,
      update: P,
      style: L,
      isWithin: W,
    };
    return N;
  }
  function ip(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.emit,
      o = r.bind,
      a = e.Elements,
      l = a.slides,
      u = a.list,
      c = [];
    function p() {
      d(), i(qe, f), i(qe, d);
    }
    function d() {
      l.forEach(function (P, x) {
        h(P, x, -1);
      });
    }
    function f() {
      T(function (P) {
        P.destroy();
      }),
        Tr(c);
    }
    function _() {
      T(function (P) {
        P.update();
      });
    }
    function h(P, x, R) {
      var L = rp(n, x, R, P);
      L.mount(),
        c.push(L),
        c.sort(function (F, V) {
          return F.index - V.index;
        });
    }
    function m(P) {
      return P
        ? E(function (x) {
            return !x.isClone;
          })
        : c;
    }
    function y(P) {
      var x = e.Controller,
        R = x.toIndex(P),
        L = x.hasFocus() ? 1 : t.perPage;
      return E(function (F) {
        return uo(F.index, R, R + L - 1);
      });
    }
    function v(P) {
      return E(P)[0];
    }
    function S(P, x) {
      Bt(P, function (R) {
        if ((Gr(R) && (R = zc(R)), Mc(R))) {
          var L = l[x];
          L ? Va(R, L) : jn(u, R), fr(R, t.classes.slide), C(R, ge(s, as));
        }
      }),
        s(qe);
    }
    function b(P) {
      Ei(
        E(P).map(function (x) {
          return x.slide;
        })
      ),
        s(qe);
    }
    function T(P, x) {
      m(x).forEach(P);
    }
    function E(P) {
      return c.filter(
        Rc(P)
          ? P
          : function (x) {
              return Gr(P) ? Qn(x.slide, P) : Ba(Zn(P), x.index);
            }
      );
    }
    function w(P, x, R) {
      T(function (L) {
        L.style(P, x, R);
      });
    }
    function C(P, x) {
      var R = Ya(P, "img"),
        L = R.length;
      L
        ? R.forEach(function (F) {
            o(F, "load error", function () {
              --L || x();
            });
          })
        : x();
    }
    function A(P) {
      return P ? l.length : c.length;
    }
    function O() {
      return c.length > t.perPage;
    }
    return {
      mount: p,
      destroy: f,
      update: _,
      register: h,
      get: m,
      getIn: y,
      getAt: v,
      add: S,
      remove: b,
      forEach: T,
      filter: E,
      style: w,
      getLength: A,
      isEnough: O,
    };
  }
  function np(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.bind,
      o = r.emit,
      a = e.Slides,
      l = e.Direction.resolve,
      u = e.Elements,
      c = u.root,
      p = u.track,
      d = u.list,
      f = a.getAt,
      _ = a.style,
      h,
      m,
      y;
    function v() {
      S(), s(window, "resize load", qd(ge(o, as))), i([Tt, qe], S), i(as, b);
    }
    function S() {
      (h = t.direction === go),
        $t(c, "maxWidth", xi(t.width)),
        $t(p, l("paddingLeft"), T(!1)),
        $t(p, l("paddingRight"), T(!0)),
        b(!0);
    }
    function b(N) {
      var z = Vt(c);
      (N || m.width !== z.width || m.height !== z.height) &&
        ($t(p, "height", E()),
        _(l("marginRight"), xi(t.gap)),
        _("width", C()),
        _("height", A(), !0),
        (m = z),
        o(Ka),
        y !== (y = W()) && (Er(c, _f, y), o(Md, y)));
    }
    function T(N) {
      var z = t.padding,
        g = l(N ? "right" : "left");
      return (z && xi(z[g] || (Gn(z) ? 0 : z))) || "0px";
    }
    function E() {
      var N = "";
      return (
        h &&
          ((N = w()),
          ns(N, "height or heightRatio is missing."),
          (N = "calc(" + N + " - " + T(!1) + " - " + T(!0) + ")")),
        N
      );
    }
    function w() {
      return xi(t.height || Vt(d).width * t.heightRatio);
    }
    function C() {
      return t.autoWidth ? null : xi(t.fixedWidth) || (h ? "" : O());
    }
    function A() {
      return xi(t.fixedHeight) || (h ? (t.autoHeight ? null : O()) : w());
    }
    function O() {
      var N = xi(t.gap);
      return (
        "calc((100%" +
        (N && " + " + N) +
        ")/" +
        (t.perPage || 1) +
        (N && " - " + N) +
        ")"
      );
    }
    function P() {
      return Vt(d)[l("width")];
    }
    function x(N, z) {
      var g = f(N || 0);
      return g ? Vt(g.slide)[l("width")] + (z ? 0 : F()) : 0;
    }
    function R(N, z) {
      var g = f(N);
      if (g) {
        var I = Vt(g.slide)[l("right")],
          $ = Vt(d)[l("left")];
        return bt(I - $) + (z ? 0 : F());
      }
      return 0;
    }
    function L(N) {
      return R(n.length - 1) - R(0) + x(0, N);
    }
    function F() {
      var N = f(0);
      return (N && parseFloat($t(N.slide, l("marginRight")))) || 0;
    }
    function V(N) {
      return parseFloat($t(p, l("padding" + (N ? "Right" : "Left")))) || 0;
    }
    function W() {
      return n.is(cs) || L(!0) > P();
    }
    return {
      mount: v,
      resize: b,
      listSize: P,
      slideSize: x,
      sliderSize: L,
      totalSize: R,
      getPadding: V,
      isOverflow: W,
    };
  }
  var sp = 2;
  function op(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = e.Elements,
      o = e.Slides,
      a = e.Direction.resolve,
      l = [],
      u;
    function c() {
      i(qe, p), i([Tt, as], f), (u = m()) && (_(u), e.Layout.resize(!0));
    }
    function p() {
      d(), c();
    }
    function d() {
      Ei(l), Tr(l), r.destroy();
    }
    function f() {
      var y = m();
      u !== y && (u < y || !y) && r.emit(qe);
    }
    function _(y) {
      var v = o.get().slice(),
        S = v.length;
      if (S) {
        for (; v.length < y; ) oo(v, v);
        oo(v.slice(-y), v.slice(0, y)).forEach(function (b, T) {
          var E = T < y,
            w = h(b.slide, T);
          E ? Va(w, v[0].slide) : jn(s.list, w),
            oo(l, w),
            o.register(w, T - y + (E ? 0 : S), b.index);
        });
      }
    }
    function h(y, v) {
      var S = y.cloneNode(!0);
      return (
        fr(S, t.classes.clone), (S.id = n.root.id + "-clone" + Ga(v + 1)), S
      );
    }
    function m() {
      var y = t.clones;
      if (!n.is(un)) y = 0;
      else if (Kn(y)) {
        var v = t[a("fixedWidth")] && e.Layout.slideSize(0),
          S = v && ss(Vt(s.track)[a("width")] / v);
        y = S || (t[a("autoWidth")] && n.length) || t.perPage * sp;
      }
      return y;
    }
    return { mount: c, destroy: d };
  }
  function ap(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.emit,
      o = n.state.set,
      a = e.Layout,
      l = a.slideSize,
      u = a.getPadding,
      c = a.totalSize,
      p = a.listSize,
      d = a.sliderSize,
      f = e.Direction,
      _ = f.resolve,
      h = f.orient,
      m = e.Elements,
      y = m.list,
      v = m.track,
      S;
    function b() {
      (S = e.Transition), i([Ci, Ka, Tt, qe], T);
    }
    function T() {
      e.Controller.isBusy() ||
        (e.Scroll.cancel(), w(n.index), e.Slides.update());
    }
    function E(g, I, $, he) {
      g !== I && N(g > $) && (P(), C(O(L(), g > $), !0)),
        o(rn),
        s(jr, I, $, g),
        S.start(I, function () {
          o(tn), s(os, I, $, g), he && he();
        });
    }
    function w(g) {
      C(R(g, !0));
    }
    function C(g, I) {
      if (!n.is(cs)) {
        var $ = I ? g : A(g);
        $t(y, "transform", "translate" + _("X") + "(" + $ + "px)"),
          g !== $ && s(Zc);
      }
    }
    function A(g) {
      if (n.is(un)) {
        var I = x(g),
          $ = I > e.Controller.getEnd(),
          he = I < 0;
        (he || $) && (g = O(g, $));
      }
      return g;
    }
    function O(g, I) {
      var $ = g - W(I),
        he = d();
      return (g -= h(he * (ss(bt($) / he) || 1)) * (I ? 1 : -1)), g;
    }
    function P() {
      C(L(), !0), S.cancel();
    }
    function x(g) {
      for (
        var I = e.Slides.get(), $ = 0, he = 1 / 0, te = 0;
        te < I.length;
        te++
      ) {
        var me = I[te].index,
          D = bt(R(me, !0) - g);
        if (D <= he) (he = D), ($ = me);
        else break;
      }
      return $;
    }
    function R(g, I) {
      var $ = h(c(g - 1) - V(g));
      return I ? F($) : $;
    }
    function L() {
      var g = _("left");
      return Vt(y)[g] - Vt(v)[g] + h(u(!1));
    }
    function F(g) {
      return t.trimSpace && n.is(ln) && (g = sn(g, 0, h(d(!0) - p()))), g;
    }
    function V(g) {
      var I = t.focus;
      return I === "center" ? (p() - l(g, !0)) / 2 : +I * l(g) || 0;
    }
    function W(g) {
      return R(g ? e.Controller.getEnd() : 0, !!t.trimSpace);
    }
    function N(g) {
      var I = h(O(L(), g));
      return g ? I >= 0 : I <= y[_("scrollWidth")] - Vt(v)[_("width")];
    }
    function z(g, I) {
      I = Kn(I) ? L() : I;
      var $ = g !== !0 && h(I) < h(W(!1)),
        he = g !== !1 && h(I) > h(W(!0));
      return $ || he;
    }
    return {
      mount: b,
      move: E,
      jump: w,
      translate: C,
      shift: O,
      cancel: P,
      toIndex: x,
      toPosition: R,
      getPosition: L,
      getLimit: W,
      exceededLimit: z,
      reposition: T,
    };
  }
  function lp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.emit,
      o = e.Move,
      a = o.getPosition,
      l = o.getLimit,
      u = o.toPosition,
      c = e.Slides,
      p = c.isEnough,
      d = c.getLength,
      f = t.omitEnd,
      _ = n.is(un),
      h = n.is(ln),
      m = ge(L, !1),
      y = ge(L, !0),
      v = t.start || 0,
      S,
      b = v,
      T,
      E,
      w;
    function C() {
      A(), i([Tt, qe, co], A), i(Ka, O);
    }
    function A() {
      (T = d(!0)), (E = t.perMove), (w = t.perPage), (S = N());
      var D = sn(v, 0, f ? S : T - 1);
      D !== v && ((v = D), o.reposition());
    }
    function O() {
      S !== N() && s(co);
    }
    function P(D, G, fe) {
      if (!me()) {
        var se = R(D),
          ye = W(se);
        ye > -1 && (G || ye !== v) && ($(ye), o.move(se, ye, b, fe));
      }
    }
    function x(D, G, fe, se) {
      e.Scroll.scroll(D, G, fe, function () {
        var ye = W(o.toIndex(a()));
        $(f ? Zr(ye, S) : ye), se && se();
      });
    }
    function R(D) {
      var G = v;
      if (Gr(D)) {
        var fe = D.match(/([+\-<>])(\d+)?/) || [],
          se = fe[1],
          ye = fe[2];
        se === "+" || se === "-"
          ? (G = F(v + +("" + se + (+ye || 1)), v))
          : se === ">"
          ? (G = ye ? z(+ye) : m(!0))
          : se === "<" && (G = y(!0));
      } else G = _ ? D : sn(D, 0, S);
      return G;
    }
    function L(D, G) {
      var fe = E || (te() ? 1 : w),
        se = F(v + fe * (D ? -1 : 1), v, !(E || te()));
      return se === -1 && h && !qc(a(), l(!D), 1)
        ? D
          ? 0
          : S
        : G
        ? se
        : W(se);
    }
    function F(D, G, fe) {
      if (p() || te()) {
        var se = V(D);
        se !== D && ((G = D), (D = se), (fe = !1)),
          D < 0 || D > S
            ? !E && (uo(0, D, G, !0) || uo(S, G, D, !0))
              ? (D = z(g(D)))
              : _
              ? (D = fe ? (D < 0 ? -(T % w || w) : T) : D)
              : t.rewind
              ? (D = D < 0 ? S : 0)
              : (D = -1)
            : fe && D !== G && (D = z(g(G) + (D < G ? -1 : 1)));
      } else D = -1;
      return D;
    }
    function V(D) {
      if (h && t.trimSpace === "move" && D !== v)
        for (var G = a(); G === u(D, !0) && uo(D, 0, n.length - 1, !t.rewind); )
          D < v ? --D : ++D;
      return D;
    }
    function W(D) {
      return _ ? (D + T) % T || 0 : D;
    }
    function N() {
      for (var D = T - (te() || (_ && E) ? 1 : w); f && D-- > 0; )
        if (u(T - 1, !0) !== u(D, !0)) {
          D++;
          break;
        }
      return sn(D, 0, T - 1);
    }
    function z(D) {
      return sn(te() ? D : w * D, 0, S);
    }
    function g(D) {
      return te() ? Zr(D, S) : lo((D >= S ? T - 1 : D) / w);
    }
    function I(D) {
      var G = o.toIndex(D);
      return h ? sn(G, 0, S) : G;
    }
    function $(D) {
      D !== v && ((b = v), (v = D));
    }
    function he(D) {
      return D ? b : v;
    }
    function te() {
      return !Kn(t.focus) || t.isNavigation;
    }
    function me() {
      return n.state.is([rn, $n]) && !!t.waitForTransition;
    }
    return {
      mount: C,
      go: P,
      scroll: x,
      getNext: m,
      getPrev: y,
      getAdjacent: L,
      getEnd: N,
      setIndex: $,
      getIndex: he,
      toIndex: z,
      toPage: g,
      toDest: I,
      hasFocus: te,
      isBusy: me,
    };
  }
  var up = "http://www.w3.org/2000/svg",
    cp =
      "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    wo = 40;
  function fp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.bind,
      o = r.emit,
      a = t.classes,
      l = t.i18n,
      u = e.Elements,
      c = e.Controller,
      p = u.arrows,
      d = u.track,
      f = p,
      _ = u.prev,
      h = u.next,
      m,
      y,
      v = {};
    function S() {
      T(), i(Tt, b);
    }
    function b() {
      E(), S();
    }
    function T() {
      var x = t.arrows;
      x && !(_ && h) && A(),
        _ &&
          h &&
          (ts(v, { prev: _, next: h }),
          rs(f, x ? "" : "none"),
          fr(f, (y = rl + "--" + t.direction)),
          x && (w(), P(), ee([_, h], ls, d.id), o(Dd, _, h)));
    }
    function E() {
      r.destroy(),
        Cr(f, y),
        m ? (Ei(p ? [_, h] : f), (_ = h = null)) : hr([_, h], el);
    }
    function w() {
      i([Ci, os, qe, on, co], P),
        s(h, "click", ge(C, ">")),
        s(_, "click", ge(C, "<"));
    }
    function C(x) {
      c.go(x, !0);
    }
    function A() {
      (f = p || nn("div", a.arrows)),
        (_ = O(!0)),
        (h = O(!1)),
        (m = !0),
        jn(f, [_, h]),
        !p && Va(f, d);
    }
    function O(x) {
      var R =
        '<button class="' +
        a.arrow +
        " " +
        (x ? a.prev : a.next) +
        '" type="button"><svg xmlns="' +
        up +
        '" viewBox="0 0 ' +
        wo +
        " " +
        wo +
        '" width="' +
        wo +
        '" height="' +
        wo +
        '" focusable="false"><path d="' +
        (t.arrowPath || cp) +
        '" />';
      return zc(R);
    }
    function P() {
      if (_ && h) {
        var x = n.index,
          R = c.getPrev(),
          L = c.getNext(),
          F = R > -1 && x < R ? l.last : l.prev,
          V = L > -1 && x > L ? l.first : l.next;
        (_.disabled = R < 0),
          (h.disabled = L < 0),
          ee(_, Yt, F),
          ee(h, Yt, V),
          o(Ld, _, h, R, L);
      }
    }
    return { arrows: v, mount: S, destroy: E, update: P };
  }
  var hp = Ha + "-interval";
  function dp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.bind,
      o = r.emit,
      a = fo(t.interval, n.go.bind(n, ">"), w),
      l = a.isPaused,
      u = e.Elements,
      c = e.Elements,
      p = c.root,
      d = c.toggle,
      f = t.autoplay,
      _,
      h,
      m = f === "pause";
    function y() {
      f && (v(), d && ee(d, ls, u.track.id), m || S(), E());
    }
    function v() {
      t.pauseOnHover &&
        s(p, "mouseenter mouseleave", function (A) {
          (_ = A.type === "mouseenter"), T();
        }),
        t.pauseOnFocus &&
          s(p, "focusin focusout", function (A) {
            (h = A.type === "focusin"), T();
          }),
        d &&
          s(d, "click", function () {
            m ? S() : b(!0);
          }),
        i([jr, Za, qe], a.rewind),
        i(jr, C);
    }
    function S() {
      l() &&
        e.Slides.isEnough() &&
        (a.start(!t.resetProgress), (h = _ = m = !1), E(), o(Xc));
    }
    function b(A) {
      A === void 0 && (A = !0), (m = !!A), E(), l() || (a.pause(), o($c));
    }
    function T() {
      m || (_ || h ? b(!1) : S());
    }
    function E() {
      d && (Er(d, Ai, !m), ee(d, Yt, t.i18n[m ? "play" : "pause"]));
    }
    function w(A) {
      var O = u.bar;
      O && $t(O, "width", A * 100 + "%"), o(zd, A);
    }
    function C(A) {
      var O = e.Slides.getAt(A);
      a.set((O && +Gt(O.slide, hp)) || t.interval);
    }
    return { mount: y, destroy: a.cancel, play: S, pause: b, isPaused: l };
  }
  function pp(n, e, t) {
    var r = Te(n),
      i = r.on;
    function s() {
      t.cover && (i(Gc, ge(a, !0)), i([Ci, Tt, qe], ge(o, !0)));
    }
    function o(l) {
      e.Slides.forEach(function (u) {
        var c = Jn(u.container || u.slide, "img");
        c && c.src && a(l, c, u);
      });
    }
    function a(l, u, c) {
      c.style(
        "background",
        l ? 'center/cover no-repeat url("' + u.src + '")' : "",
        !0
      ),
        rs(u, l ? "none" : "");
    }
    return { mount: s, destroy: ge(o, !1) };
  }
  var _p = 10,
    gp = 600,
    mp = 0.6,
    vp = 1.5,
    yp = 800;
  function wp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.emit,
      o = n.state.set,
      a = e.Move,
      l = a.getPosition,
      u = a.getLimit,
      c = a.exceededLimit,
      p = a.translate,
      d = n.is(ln),
      f,
      _,
      h = 1;
    function m() {
      i(jr, b), i([Tt, qe], T);
    }
    function y(w, C, A, O, P) {
      var x = l();
      if ((b(), A && (!d || !c()))) {
        var R = e.Layout.sliderSize(),
          L = Xa(w) * R * lo(bt(w) / R) || 0;
        w = a.toPosition(e.Controller.toDest(w % R)) + L;
      }
      var F = qc(x, w, 1);
      (h = 1),
        (C = F ? 0 : C || ao(bt(w - x) / vp, yp)),
        (_ = O),
        (f = fo(C, v, ge(S, x, w, P), 1)),
        o($n),
        s(Za),
        f.start();
    }
    function v() {
      o(tn), _ && _(), s(on);
    }
    function S(w, C, A, O) {
      var P = l(),
        x = w + (C - w) * E(O),
        R = (x - P) * h;
      p(P + R),
        d && !A && c() && ((h *= mp), bt(R) < _p && y(u(c(!0)), gp, !1, _, !0));
    }
    function b() {
      f && f.cancel();
    }
    function T() {
      f && !f.isPaused() && (b(), v());
    }
    function E(w) {
      var C = t.easingFunc;
      return C ? C(w) : 1 - Math.pow(1 - w, 4);
    }
    return { mount: m, destroy: b, scroll: y, cancel: T };
  }
  var cn = { passive: !1, capture: !0 };
  function Sp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.emit,
      o = r.bind,
      a = r.unbind,
      l = n.state,
      u = e.Move,
      c = e.Scroll,
      p = e.Controller,
      d = e.Elements.track,
      f = e.Media.reduce,
      _ = e.Direction,
      h = _.resolve,
      m = _.orient,
      y = u.getPosition,
      v = u.exceededLimit,
      S,
      b,
      T,
      E,
      w,
      C = !1,
      A,
      O,
      P;
    function x() {
      o(d, sl, Fa, cn),
        o(d, ol, Fa, cn),
        o(d, mf, L, cn),
        o(d, "click", W, { capture: !0 }),
        o(d, "dragstart", xr),
        i([Ci, Tt], R);
    }
    function R() {
      var M = t.drag;
      je(!M), (E = M === "free");
    }
    function L(M) {
      if (((A = !1), !O)) {
        var K = ye(M);
        se(M.target) &&
          (K || !M.button) &&
          (p.isBusy()
            ? xr(M, !0)
            : ((P = K ? d : window),
              (w = l.is([rn, $n])),
              (T = null),
              o(P, sl, F, cn),
              o(P, ol, V, cn),
              u.cancel(),
              c.cancel(),
              N(M)));
      }
    }
    function F(M) {
      if ((l.is(io) || (l.set(io), s(Od)), M.cancelable))
        if (w) {
          u.translate(S + fe(te(M)));
          var K = me(M) > gf,
            Ce = C !== (C = v());
          (K || Ce) && N(M), (A = !0), s(Pd), xr(M);
        } else I(M) && ((w = g(M)), xr(M));
    }
    function V(M) {
      l.is(io) && (l.set(tn), s(Rd)),
        w && (z(M), xr(M)),
        a(P, sl, F),
        a(P, ol, V),
        (w = !1);
    }
    function W(M) {
      !O && A && xr(M, !0);
    }
    function N(M) {
      (T = b), (b = M), (S = y());
    }
    function z(M) {
      var K = $(M),
        Ce = he(K),
        We = t.rewind && t.rewindByDrag;
      f(!1),
        E
          ? p.scroll(Ce, 0, t.snap)
          : n.is(cs)
          ? p.go(m(Xa(K)) < 0 ? (We ? "<" : "-") : We ? ">" : "+")
          : n.is(ln) && C && We
          ? p.go(v(!0) ? ">" : "<")
          : p.go(p.toDest(Ce), !0),
        f(!0);
    }
    function g(M) {
      var K = t.dragMinThreshold,
        Ce = Gn(K),
        We = (Ce && K.mouse) || 0,
        k = (Ce ? K.touch : +K) || 10;
      return bt(te(M)) > (ye(M) ? k : We);
    }
    function I(M) {
      return bt(te(M)) > bt(te(M, !0));
    }
    function $(M) {
      if (n.is(un) || !C) {
        var K = me(M);
        if (K && K < gf) return te(M) / K;
      }
      return 0;
    }
    function he(M) {
      return (
        y() +
        Xa(M) *
          Zr(
            bt(M) * (t.flickPower || 600),
            E ? 1 / 0 : e.Layout.listSize() * (t.flickMaxPages || 1)
          )
      );
    }
    function te(M, K) {
      return G(M, K) - G(D(M), K);
    }
    function me(M) {
      return Ua(M) - Ua(D(M));
    }
    function D(M) {
      return (b === M && T) || b;
    }
    function G(M, K) {
      return (ye(M) ? M.changedTouches[0] : M)["page" + h(K ? "Y" : "X")];
    }
    function fe(M) {
      return M / (C && n.is(ln) ? ep : 1);
    }
    function se(M) {
      var K = t.noDrag;
      return !Qn(M, "." + ff + ", ." + vo) && (!K || !Qn(M, K));
    }
    function ye(M) {
      return typeof TouchEvent < "u" && M instanceof TouchEvent;
    }
    function Ze() {
      return w;
    }
    function je(M) {
      O = M;
    }
    return { mount: x, disable: je, isDragging: Ze };
  }
  var bp = { Spacebar: " ", Right: _o, Left: po, Up: jc, Down: Qc };
  function al(n) {
    return (n = Gr(n) ? n : n.key), bp[n] || n;
  }
  var vf = "keydown";
  function Tp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.bind,
      o = r.unbind,
      a = n.root,
      l = e.Direction.resolve,
      u,
      c;
    function p() {
      d(), i(Tt, f), i(Tt, d), i(jr, h);
    }
    function d() {
      var y = t.keyboard;
      y && ((u = y === "global" ? window : a), s(u, vf, m));
    }
    function f() {
      o(u, vf);
    }
    function _(y) {
      c = y;
    }
    function h() {
      var y = c;
      (c = !0),
        Oc(function () {
          c = y;
        });
    }
    function m(y) {
      if (!c) {
        var v = al(y);
        v === l(po) ? n.go("<") : v === l(_o) && n.go(">");
      }
    }
    return { mount: p, destroy: f, disable: _ };
  }
  var fs = Ha + "-lazy",
    So = fs + "-srcset",
    Ep = "[" + fs + "], [" + So + "]";
  function xp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.off,
      o = r.bind,
      a = r.emit,
      l = t.lazyLoad === "sequential",
      u = [os, on],
      c = [];
    function p() {
      t.lazyLoad && (d(), i(qe, d));
    }
    function d() {
      Tr(c), f(), l ? y() : (s(u), i(u, _), _());
    }
    function f() {
      e.Slides.forEach(function (v) {
        Ya(v.slide, Ep).forEach(function (S) {
          var b = Gt(S, fs),
            T = Gt(S, So);
          if (b !== S.src || T !== S.srcset) {
            var E = t.classes.spinner,
              w = S.parentElement,
              C = Jn(w, "." + E) || nn("span", E, w);
            c.push([S, v, C]), S.src || rs(S, "none");
          }
        });
      });
    }
    function _() {
      (c = c.filter(function (v) {
        var S = t.perPage * ((t.preloadPages || 1) + 1) - 1;
        return v[1].isWithin(n.index, S) ? h(v) : !0;
      })),
        c.length || s(u);
    }
    function h(v) {
      var S = v[0];
      fr(v[1].slide, nl),
        o(S, "load error", ge(m, v)),
        ee(S, "src", Gt(S, fs)),
        ee(S, "srcset", Gt(S, So)),
        hr(S, fs),
        hr(S, So);
    }
    function m(v, S) {
      var b = v[0],
        T = v[1];
      Cr(T.slide, nl),
        S.type !== "error" && (Ei(v[2]), rs(b, ""), a(Gc, b, T), a(as)),
        l && y();
    }
    function y() {
      c.length && h(c.shift());
    }
    return { mount: p, destroy: ge(Tr, c), check: _ };
  }
  function Cp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = r.emit,
      o = r.bind,
      a = e.Slides,
      l = e.Elements,
      u = e.Controller,
      c = u.hasFocus,
      p = u.getIndex,
      d = u.go,
      f = e.Direction.resolve,
      _ = l.pagination,
      h = [],
      m,
      y;
    function v() {
      S(), i([Tt, qe, co], v);
      var O = t.pagination;
      _ && rs(_, O ? "" : "none"),
        O &&
          (i([jr, Za, on], A),
          b(),
          A(),
          s(Id, { list: m, items: h }, C(n.index)));
    }
    function S() {
      m && (Ei(_ ? $r(m.children) : m), Cr(m, y), Tr(h), (m = null)),
        r.destroy();
    }
    function b() {
      var O = n.length,
        P = t.classes,
        x = t.i18n,
        R = t.perPage,
        L = c() ? u.getEnd() + 1 : ss(O / R);
      (m = _ || nn("ul", P.pagination, l.track.parentElement)),
        fr(m, (y = yo + "--" + w())),
        ee(m, Ar, "tablist"),
        ee(m, Yt, x.select),
        ee(m, Ja, w() === go ? "vertical" : "");
      for (var F = 0; F < L; F++) {
        var V = nn("li", null, m),
          W = nn("button", { class: P.page, type: "button" }, V),
          N = a.getIn(F).map(function (g) {
            return g.slide.id;
          }),
          z = !c() && R > 1 ? x.pageX : x.slideX;
        o(W, "click", ge(T, F)),
          t.paginationKeyboard && o(W, "keydown", ge(E, F)),
          ee(V, Ar, "presentation"),
          ee(W, Ar, "tab"),
          ee(W, ls, N.join(" ")),
          ee(W, Yt, $a(z, F + 1)),
          ee(W, an, -1),
          h.push({ li: V, button: W, page: F });
      }
    }
    function T(O) {
      d(">" + O, !0);
    }
    function E(O, P) {
      var x = h.length,
        R = al(P),
        L = w(),
        F = -1;
      R === f(_o, !1, L)
        ? (F = ++O % x)
        : R === f(po, !1, L)
        ? (F = (--O + x) % x)
        : R === "Home"
        ? (F = 0)
        : R === "End" && (F = x - 1);
      var V = h[F];
      V && (Ic(V.button), d(">" + F), xr(P, !0));
    }
    function w() {
      return t.paginationDirection || t.direction;
    }
    function C(O) {
      return h[u.toPage(O)];
    }
    function A() {
      var O = C(p(!0)),
        P = C(p());
      if (O) {
        var x = O.button;
        Cr(x, Ai), hr(x, tf), ee(x, an, -1);
      }
      if (P) {
        var R = P.button;
        fr(R, Ai), ee(R, tf, !0), ee(R, an, "");
      }
      s(Nd, { list: m, items: h }, O, P);
    }
    return { items: h, mount: v, destroy: S, getAt: C, update: A };
  }
  var Ap = [" ", "Enter"];
  function kp(n, e, t) {
    var r = t.isNavigation,
      i = t.slideFocus,
      s = [];
    function o() {
      n.splides.forEach(function (_) {
        _.isParent || (u(n, _.splide), u(_.splide, n));
      }),
        r && c();
    }
    function a() {
      s.forEach(function (_) {
        _.destroy();
      }),
        Tr(s);
    }
    function l() {
      a(), o();
    }
    function u(_, h) {
      var m = Te(_);
      m.on(jr, function (y, v, S) {
        h.go(h.is(un) ? S : y);
      }),
        s.push(m);
    }
    function c() {
      var _ = Te(n),
        h = _.on;
      h(Yc, d), h(Kc, f), h([Ci, Tt], p), s.push(_), _.emit(Hc, n.splides);
    }
    function p() {
      ee(e.Elements.list, Ja, t.direction === go ? "vertical" : "");
    }
    function d(_) {
      n.go(_.index);
    }
    function f(_, h) {
      Ba(Ap, al(h)) && (d(_), xr(h));
    }
    return {
      setup: ge(e.Media.set, { slideFocus: Kn(i) ? r : i }, !0),
      mount: o,
      destroy: a,
      remount: l,
    };
  }
  function Op(n, e, t) {
    var r = Te(n),
      i = r.bind,
      s = 0;
    function o() {
      t.wheel && i(e.Elements.track, "wheel", a, cn);
    }
    function a(u) {
      if (u.cancelable) {
        var c = u.deltaY,
          p = c < 0,
          d = Ua(u),
          f = t.wheelMinThreshold || 0,
          _ = t.wheelSleep || 0;
        bt(c) > f && d - s > _ && (n.go(p ? "<" : ">"), (s = d)), l(p) && xr(u);
      }
    }
    function l(u) {
      return (
        !t.releaseWheel || n.state.is(rn) || e.Controller.getAdjacent(u) !== -1
      );
    }
    return { mount: o };
  }
  var Pp = 90;
  function Rp(n, e, t) {
    var r = Te(n),
      i = r.on,
      s = e.Elements.track,
      o = t.live && !t.isNavigation,
      a = nn("span", Kd),
      l = fo(Pp, ge(c, !1));
    function u() {
      o &&
        (d(!e.Autoplay.isPaused()),
        ee(s, of, !0),
        (a.textContent = "…"),
        i(Xc, ge(d, !0)),
        i($c, ge(d, !1)),
        i([os, on], ge(c, !0)));
    }
    function c(f) {
      ee(s, sf, f), f ? (jn(s, a), l.start()) : (Ei(a), l.cancel());
    }
    function p() {
      hr(s, [nf, of, sf]), Ei(a);
    }
    function d(f) {
      o && ee(s, nf, f ? "off" : "polite");
    }
    return { mount: u, disable: d, destroy: p };
  }
  var Mp = Object.freeze({
      __proto__: null,
      Media: Wd,
      Direction: Bd,
      Elements: tp,
      Slides: ip,
      Layout: np,
      Clones: op,
      Move: ap,
      Controller: lp,
      Arrows: fp,
      Autoplay: dp,
      Cover: pp,
      Scroll: wp,
      Drag: Sp,
      Keyboard: Tp,
      LazyLoad: xp,
      Pagination: Cp,
      Sync: kp,
      Wheel: Op,
      Live: Rp,
    }),
    Dp = {
      prev: "Previous slide",
      next: "Next slide",
      first: "Go to first slide",
      last: "Go to last slide",
      slideX: "Go to slide %s",
      pageX: "Go to page %s",
      play: "Start autoplay",
      pause: "Pause autoplay",
      carousel: "carousel",
      slide: "slide",
      select: "Select a slide to show",
      slideLabel: "%s of %s",
    },
    Lp = {
      type: "slide",
      role: "region",
      speed: 400,
      perPage: 1,
      cloneStatus: !0,
      arrows: !0,
      pagination: !0,
      paginationKeyboard: !0,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: !0,
      direction: "ltr",
      trimSpace: !0,
      focusableNodes: "a, button, textarea, input, select, iframe",
      live: !0,
      classes: Qd,
      i18n: Dp,
      reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
    };
  function Ip(n, e, t) {
    var r = e.Slides;
    function i() {
      Te(n).on([Ci, qe], s);
    }
    function s() {
      r.forEach(function (a) {
        a.style("transform", "translateX(-" + 100 * a.index + "%)");
      });
    }
    function o(a, l) {
      r.style("transition", "opacity " + t.speed + "ms " + t.easing), Oc(l);
    }
    return { mount: i, start: o, cancel: Fa };
  }
  function Np(n, e, t) {
    var r = e.Move,
      i = e.Controller,
      s = e.Scroll,
      o = e.Elements.list,
      a = ge($t, o, "transition"),
      l;
    function u() {
      Te(n).bind(o, "transitionend", function (f) {
        f.target === o && l && (p(), l());
      });
    }
    function c(f, _) {
      var h = r.toPosition(f, !0),
        m = r.getPosition(),
        y = d(f);
      bt(h - m) >= 1 && y >= 1
        ? t.useScroll
          ? s.scroll(h, y, !1, _)
          : (a("transform " + y + "ms " + t.easing),
            r.translate(h, !0),
            (l = _))
        : (r.jump(f), _());
    }
    function p() {
      a(""), s.cancel();
    }
    function d(f) {
      var _ = t.rewindSpeed;
      if (n.is(ln) && _) {
        var h = i.getIndex(!0),
          m = i.getEnd();
        if ((h === 0 && f >= m) || (h >= m && f === 0)) return _;
      }
      return t.speed;
    }
    return { mount: u, start: c, cancel: p };
  }
  var zp = (function () {
      function n(t, r) {
        (this.event = Te()),
          (this.Components = {}),
          (this.state = Fd(en)),
          (this.splides = []),
          (this._o = {}),
          (this._E = {});
        var i = Gr(t) ? Fc(document, t) : t;
        ns(i, i + " is invalid."),
          (this.root = i),
          (r = Kr(
            { label: Gt(i, Yt) || "", labelledby: Gt(i, Qa) || "" },
            Lp,
            n.defaults,
            r || {}
          ));
        try {
          Kr(r, JSON.parse(Gt(i, Ha)));
        } catch {
          ns(!1, "Invalid JSON");
        }
        this._o = Object.create(Kr({}, r));
      }
      var e = n.prototype;
      return (
        (e.mount = function (r, i) {
          var s = this,
            o = this.state,
            a = this.Components;
          ns(o.is([en, no]), "Already mounted!"),
            o.set(en),
            (this._C = a),
            (this._T = i || this._T || (this.is(cs) ? Ip : Np)),
            (this._E = r || this._E);
          var l = ts({}, Mp, this._E, { Transition: this._T });
          return (
            Ti(l, function (u, c) {
              var p = u(s, a, s._o);
              (a[c] = p), p.setup && p.setup();
            }),
            Ti(a, function (u) {
              u.mount && u.mount();
            }),
            this.emit(Ci),
            fr(this.root, Zd),
            o.set(tn),
            this.emit(Vc),
            this
          );
        }),
        (e.sync = function (r) {
          return (
            this.splides.push({ splide: r }),
            r.splides.push({ splide: this, isParent: !0 }),
            this.state.is(tn) &&
              (this._C.Sync.remount(), r.Components.Sync.remount()),
            this
          );
        }),
        (e.go = function (r) {
          return this._C.Controller.go(r), this;
        }),
        (e.on = function (r, i) {
          return this.event.on(r, i), this;
        }),
        (e.off = function (r) {
          return this.event.off(r), this;
        }),
        (e.emit = function (r) {
          var i;
          return (
            (i = this.event).emit.apply(i, [r].concat($r(arguments, 1))), this
          );
        }),
        (e.add = function (r, i) {
          return this._C.Slides.add(r, i), this;
        }),
        (e.remove = function (r) {
          return this._C.Slides.remove(r), this;
        }),
        (e.is = function (r) {
          return this._o.type === r;
        }),
        (e.refresh = function () {
          return this.emit(qe), this;
        }),
        (e.destroy = function (r) {
          r === void 0 && (r = !0);
          var i = this.event,
            s = this.state;
          return (
            s.is(en)
              ? Te(this).on(Vc, this.destroy.bind(this, r))
              : (Ti(
                  this._C,
                  function (o) {
                    o.destroy && o.destroy(r);
                  },
                  !0
                ),
                i.emit(Uc),
                i.destroy(),
                r && Tr(this.splides),
                s.set(no)),
            this
          );
        }),
        Sd(n, [
          {
            key: "options",
            get: function () {
              return this._o;
            },
            set: function (r) {
              this._C.Media.set(r, !0, !0);
            },
          },
          {
            key: "length",
            get: function () {
              return this._C.Slides.getLength(!0);
            },
          },
          {
            key: "index",
            get: function () {
              return this._C.Controller.getIndex();
            },
          },
        ]),
        n
      );
    })(),
    ll = zp;
  (ll.defaults = {}), (ll.STATES = Td);
  /*!
   * @splidejs/splide-extension-auto-scroll
   * Version  : 0.5.3
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   */ function Fp(n, e, t) {
    return Array.prototype.slice.call(n, e, t);
  }
  function ul(n) {
    return n.bind.apply(n, [null].concat(Fp(arguments, 1)));
  }
  function cl(n, e) {
    return typeof e === n;
  }
  ul(cl, "function"), ul(cl, "string"), ul(cl, "undefined");
  function qp(n, e, t) {
    return Array.prototype.slice.call(n, e, t);
  }
  function fl(n) {
    return n.bind(null, ...qp(arguments, 1));
  }
  function hl(n, e) {
    return typeof e === n;
  }
  fl(hl, "function"), fl(hl, "string"), fl(hl, "undefined");
  const dl = "cubic-bezier(0.45, 0, 0.55, 1)",
    pl = {
      default: { pagination: !1, easing: dl },
      horizontalCard: {
        pagination: !1,
        gap: "calc(var(--sizes-gaps--padding))",
        easing: dl,
      },
      smallCard: {
        type: "loop",
        pagination: !1,
        gap: "1rem",
        easing: dl,
        clones: 8,
        autoScroll: { speed: 5 },
      },
    },
    Wp = () => {
      document.querySelectorAll(".splide").forEach((e) => {
        let t = pl.default,
          r = {};
        e.classList.contains("is-horizontal-card") && (t = pl.horizontalCard),
          e.classList.contains("is-small-card") && (t = pl.smallCard),
          new ll(e, t).mount(r);
      });
    };
  function Bp(n, e) {
    let t = [],
      r = n.charCodeAt(0),
      i = e.charCodeAt(0);
    for (let s = r; s <= i; s++) t.push(String.fromCharCode(s));
    return t;
  }
  const Vp = () => {
      let n = document.querySelector("[surename-filter]");
      if (!n) return;
      let e = document.querySelector(
          '[fs-cmsfilter-clear="letter"][fs-cmsfilter-element="clear"]'
        ),
        t = [...n.querySelectorAll(".tag")].filter((s) => s !== e),
        r = new Map(),
        i = document.querySelectorAll(
          '.filter-checkbox-field[fs-cmsfilter-field="letter"]'
        );
      t.forEach((s) => {
        let o = s.textContent;
        if (o !== "All") {
          let a = o.charAt(0),
            l = o.charAt(o.length - 1),
            u = Bp(a, l),
            c = [];
          u.forEach((p) => {
            i.forEach((d) => {
              d.querySelector("span").textContent == p && c.push(d);
            });
          }),
            r.set(s, c);
        }
      }),
        t.forEach((s) => {
          s.addEventListener("click", () => {
            r.get(s).forEach((a) => {
              a.click();
            }),
              s.classList.toggle("is-active");
          });
        }),
        e.addEventListener("click", () => {
          t.forEach((s) => {
            s.classList.remove("is-active");
          });
        });
    },
    Yp = () => {
      document.querySelectorAll("[unwrap]").forEach((e) => {
        const t = e.parentNode;
        for (; e.firstChild; ) t.insertBefore(e.firstChild, e);
        t.removeChild(e);
      });
    };
  function Up(n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  const Hp = () => {
    let n = document.querySelector("[pathname-component]");
    if (!n) return;
    let t = window.location.pathname.split("/").filter(Boolean),
      r = window.location.origin,
      i = n.querySelector(".pathname_wrapper");
    Y.set(i, { opacity: 0, y: "-1rem" }),
      t.forEach((s, o) => {
        let a = `${r}/${t.slice(0, o + 1).join("/")}`,
          l = Up(s.replace(/-/g, " "));
        Y.timeline();
        let u = '<div class="text-size-small margin-right">/</div>',
          c = `<a href="${a}" class="no-underline w-inline-block"><div class="text-size-small margin-right">${l}</div></a>`;
        i.insertAdjacentHTML("beforeend", u + c);
      }),
      Y.to(i, {
        opacity: 1,
        y: "",
        duration: 0.3,
        ease: "power2.inOut",
        delay: 0.4,
      });
  };
  function Xp() {
    let n = -120;
    return window.innerWidth < 992 && (n = -80), n;
  }
  const $p = () => {
    Array.from(document.querySelectorAll("a"))
      .filter((t) => {
        const r = t.getAttribute("href");
        return r && r.startsWith("#") && r.slice(1).length > 0;
      })
      .forEach((t) => {
        const r = document.querySelector(t.getAttribute("href"));
        t.setAttribute("href", "#"),
          r &&
            t.addEventListener("click", () => {
              Zt.scrollTo(r, { offset: Xp() });
            });
      });
  };
  function yf(n, e) {
    const t = e.querySelector(".accordion-content"),
      r = e.querySelector(".accordion-title-icon"),
      i = Y.timeline(),
      s = e.offsetHeight - t.offsetHeight;
    i.set(n, { pointerEvents: "none" }),
      i.to(t, { opacity: 0, duration: 0.2 }),
      i.to(r, { rotate: 0, duration: 0.2 }, "<"),
      i.to(e, { height: s, duration: 0.4, ease: "power3.inOut" }),
      i.set(t, { display: "none", opacity: "" }),
      i.set(e, { height: "auto" }),
      i.set(n, {
        pointerEvents: "",
        onComplete: () => {
          e.classList.remove("is-opened"), Z.refresh(), Zt.resize();
        },
      });
  }
  function Gp(n, e) {
    const t = e.querySelector(".accordion-content"),
      r = e.querySelector(".accordion-title-icon"),
      i = Y.timeline(),
      s = e.offsetHeight;
    i.set(n, { pointerEvents: "none" }),
      i.set(e, { height: s }),
      i.set(t, { display: "block", opacity: 0, height: "" }),
      i.to(e, { height: "auto", duration: 0.4, ease: "power3.inOut" }),
      i.to(r, { rotate: 45, duration: 0.2 }, "<"),
      i.to(t, { opacity: 1, duration: 0.2 }),
      i.set(n, {
        pointerEvents: "",
        onComplete: () => {
          e.classList.add("is-opened"), Z.refresh(), Zt.resize();
        },
      });
  }
  function wf(n) {
    return n.classList.contains("is-opened");
  }
  function Kp(n, e) {
    wf(e)
      ? yf(n, e)
      : (n.forEach((t) => {
          wf(t) && yf(n, t);
        }),
        Gp(n, e));
  }
  const Zp = () => {
    document.querySelectorAll(".accordion-list").forEach((e) => {
      const t = e.querySelectorAll(".accordion-item");
      t.forEach((r) => {
        r.addEventListener("click", () => {
          Kp(t, r);
        });
      });
    });
  };
  function jp() {
    let e = document.querySelector(".navbar_navbar").offsetHeight + 4 || 0;
    return (
      window.innerWidth < 992 &&
        [
          {
            selector: ".event-directory-grid",
            styles: { marginTop: "1.5rem", paddingTop: "6.5rem" },
          },
          { selector: ".person-card_grid", styles: { paddingTop: "7rem" } },
          {
            selector: ".session-list_list",
            styles: { marginTop: "1rem", paddingTop: "7rem" },
          },
        ].forEach(({ selector: r, styles: i }) => {
          const s = document.querySelector(r);
          s && Y.set(s, i);
        }),
      e
    );
  }
  let Sf = jp();
  const bf = document.querySelector("[mobile-filter-button]"),
    hs = document.querySelector("[mobile-filter-list]"),
    Tf = document.querySelector("[mobile-filter-active-tags]"),
    Qp = document.querySelector('[fs-cmsfilter-element="list"]');
  document.querySelector(".navbar_navbar");
  const bo = document.querySelector(".mobile-filters-overflow"),
    Ef = (hs == null ? void 0 : hs.querySelector(".button-small")) ?? null;
  let _l = !1;
  function gl() {
    _l
      ? (Y.set(hs, { display: "none" }),
        Y.set(bo, { display: "none" }),
        Y.set(Tf, { display: "flex" }),
        Zt.start(),
        (_l = !1))
      : (Zt.stop(),
        Zt.scrollTo(Qp, { offset: -Sf, force: !0 }),
        Y.set(bo, { display: "block" }),
        Y.set(hs, { display: "flex" }),
        Y.set(Tf, { display: "none" }),
        (_l = !0));
  }
  function Jp() {
    bf &&
      bf.addEventListener("click", () => {
        gl();
      }),
      Ef &&
        Ef.addEventListener("click", () => {
          gl();
        }),
      bo &&
        bo.addEventListener("click", () => {
          gl();
        });
  }
  function e_() {
    const n = document.querySelector('[fs-cmsfilter-element="list"]');
    window.innerWidth > 992 &&
      n &&
      document
        .querySelectorAll(
          '.filter-checkbox-field:not([fs-cmsfilter-field="letter"]), .filter-interface .tag'
        )
        .forEach((t) => {
          t.addEventListener("click", () => {
            Zt.scrollTo(n, { offset: -Sf });
          });
        });
  }
  let ml = !1;
  const t_ = new MutationObserver((n) => {
      n.some((e) => e.type === "childList") &&
        (ml ||
          ((ml = !0),
          setTimeout(() => {
            (ml = !1), Zt.resize(), console.log("session list updated");
          }, 10)));
    }),
    r_ = () => {
      console.log("filters init");
      const n = document.querySelector(".w-dyn-items");
      n &&
        (window.innerWidth < 992 ? Jp() : e_(),
        t_.observe(n, { childList: !0 }));
    },
    i_ = (n = document) => {
      Wp(), Vp(), Hp(), $p(), Zp(), Yp(), r_(), console.log("components init");
    },
    xf = () => {
      if (window.innerWidth < 992) return;
      document.querySelectorAll(".button, .button-small").forEach((e) => {
        const t = document.createElement("div"),
          r = t.children,
          i = e.innerHTML;
        for (
          t.innerHTML = `<div>${i}</div><div>${i}</div>`,
            Y.set(t.childNodes, {
              display: "flex",
              gap: "0.5rem",
              alignItems: "left",
            });
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        e.appendChild(t),
          Y.set(t, { overflow: "hidden", position: "relative" }),
          Y.set(r[1], { position: "absolute", top: "0%", right: "-150%" }),
          e.addEventListener("mouseenter", () => {
            Y.to(r, { x: "-150%", duration: 0.5, ease: "power2.inOut" });
          }),
          e.addEventListener("mouseleave", () => {
            Y.to(r, { x: "0%", duration: 0.5, ease: "power2.inOut" });
          });
      });
    };
  function n_() {
    const n = Y.timeline(),
      e = document.querySelector(".overlay_overlay"),
      t = e.querySelector(".overlay_loader-wrapper");
    return (
      e &&
        ((t.style.animation = "none"),
        n.to(t, { opacity: 0, duration: 0.2 }),
        n.to(e, { opacity: 0, duration: 0.4 }),
        n.set(e, { display: "none" })),
      n
    );
  }
  function s_(n) {
    const e = n.querySelector(".page-hero_left-block-wrapper"),
      t = n.querySelector(".page-hero_right-block-wrapper"),
      r = n.querySelector(".heading-style-h5"),
      i = n.querySelector(".page-hero_image-wrapper"),
      s = n.querySelector("img");
    if (!e || !r || !i || !s) return !1;
    const o = Y.timeline({ paused: !0 });
    return (
      o.set([e, t, r], { opacity: 0, y: "4rem" }),
      o.set(s, { opacity: 0 }),
      o.to([r, e, t], {
        opacity: 1,
        y: "",
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.15,
      }),
      o.to(s, { opacity: 1, delay: -0.6, duration: 0.8, ease: "power1.out" }),
      o
    );
  }
  function o_(n) {
    const e = n.querySelector(".hero-v2_text-content"),
      t = n.querySelector(".heading-style-h5"),
      r = n.querySelector(".hero-v2_image-wrapper"),
      i = n.querySelector("img");
    if (!e || !t || !r || !i) return !1;
    const s = Y.timeline({ paused: !0 });
    return (
      s.set([e, t], { opacity: 0, y: "4rem" }),
      s.set(i, { y: "-100%" }),
      s.to([e, t], {
        opacity: 1,
        y: "",
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.15,
      }),
      s.to(i, { y: "", delay: -0.6, duration: 0.8, ease: "power1.out" }),
      s
    );
  }
  function a_(n) {
    const e = n.querySelector(".page-hero-v3_heading-wrapper"),
      t = n.querySelector(".page-hero-v3_image-wrapper"),
      r = n.querySelector("img");
    if (!e || !t || !r) return !1;
    const i = Y.timeline({ paused: !0 });
    return (
      i.set([e], { opacity: 0, y: "4rem" }),
      i.set(r, { y: "100%" }),
      i.to([e], {
        opacity: 1,
        y: "",
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.15,
      }),
      i.to(r, { y: "", delay: -0.6, duration: 0.8, ease: "power1.out" }),
      i
    );
  }
  function l_(n) {
    const t = n.textContent,
      r = Y.timeline();
    (n.textContent = " "),
      window.innerWidth > 992 && Y.set(n.parentElement, { maxWidth: "70vw" }),
      Y.fromTo(
        n.nextSibling,
        {
          borderRightColor: "black",
          repeat: -1,
          duration: 1,
          ease: "power2.inOut",
        },
        {
          borderRightColor: "#BC915E",
          repeat: -1,
          duration: 1,
          ease: "power2.inOut",
        }
      );
    for (let i = 0; i < t.length; i++)
      r.to(n, { textContent: t.slice(0, i + 1), duration: 0.05, ease: "none" });
  }
  function u_(n) {
    const e = n.querySelector(".hero_left-block-wrapper"),
      t = n.querySelector(".hero_right-block-wrapper"),
      r = n.querySelector("img"),
      i = n.querySelector(".hero_right-block_button-wrapper"),
      s = n.querySelector(".hero_showreel-banner"),
      o = n.querySelector(".hero_h1-wrapper").children[0];
    if (!e || !r || !i || !s) return !1;
    const a = Y.timeline();
    return (
      l_(o),
      a.set([e, t, i, s], { opacity: 0, y: "4rem" }),
      a.set(r, { opacity: 0 }),
      Y.set(o.nextSibling, {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: "black",
      }),
      a.to([e, t, i, s], {
        opacity: 1,
        y: "",
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        stagger: 0.15,
      }),
      a.to(r, { opacity: 1, delay: -0.6, duration: 0.8, ease: "power1.out" }),
      a
    );
  }
  function c_() {
    const e = document.querySelector(".main-wrapper").children[0],
      t = Y.timeline({});
    let r;
    return (
      e.querySelector(".hero_wrapper") && (r = u_(e)),
      e.querySelector(".page-hero_wrapper") && (r = s_(e)),
      e.querySelector(".page-hero-v2_wrapper") && (r = o_(e)),
      e.querySelector(".page-hero-v3_wrapper") && (r = a_(e)),
      r ? (r.play(), t.add(r)) : console.warn("no hero animation detected"),
      t
    );
  }
  function f_() {
    const e = document.querySelector(".main-wrapper").children[1].children[0],
      t = Y.timeline({ paused: !0 }),
      r = Ac.navbarEl;
    return (
      t.set(e, { opacity: 0, y: "7rem" }),
      t.set(r, { y: "-100%" }),
      t.add(c_(), ">"),
      t.add(n_(), "<"),
      t.to(
        [e, r],
        { opacity: 1, y: "", duration: 0.8, ease: "power2.out" },
        "<"
      ),
      t
    );
  }
  const h_ = () => {
      console.log("general animations init"), f_().play(), xf();
    },
    d_ = () => {
      const n = document.querySelectorAll("[tile-link-block]");
      !n ||
        window.innerWidth < 992 ||
        n.forEach((e) => {
          const t = e.querySelector("[tile-link-block-caption]"),
            r = Y.timeline({ paused: !0 });
          t &&
            (Y.set(t, {
              opacity: 0,
              y: "1rem",
              scaleY: 0.8,
              pointerEvents: "none",
            }),
            r.to(t, {
              opacity: 1,
              y: "",
              scaleY: 1,
              duration: 0.3,
              ease: "power2.inOut",
            }),
            r.to(
              e.parentElement,
              { borderRadius: "0.5rem", duration: 0.3 },
              "<"
            ),
            e.addEventListener("mouseenter", () => {
              r.restart();
            }),
            e.addEventListener("mouseleave", () => {
              r.reverse();
            }));
        });
    },
    p_ = () => {
      h_(), xf(), d_();
    };
  var Zt = za();
  const __ = async () => {
      Ac.init(), i_(), p_(), console.log("globalInit");
    },
    Cf = document.querySelector(".session-list_list");
  let fn = document.querySelectorAll(".session-times_day-filter_day"),
    Af = document.querySelectorAll(".session-list_item"),
    ds = {};
  function g_() {
    return window.innerWidth > 991 ? -100 : -210;
  }
  function vl(n) {
    const e = document.querySelector(".session-times_day-caption");
    n &&
      ((e.querySelector("[session-date-dow]").textContent =
        n.getAttribute("session-date-dow")),
      (e.querySelector("[session-date-day]").textContent =
        n.getAttribute("session-date-day")),
      (e.querySelector("[session-date-month]").textContent =
        n.getAttribute("session-date-month")));
  }
  function m_() {
    (Af = document.querySelectorAll(".session-list_item")),
      fn.forEach((n, e) => {
        let t = document.querySelector(
          `.session-list_item[session-day="${e + 1}"]`
        );
        ds[e + 1] = t;
      }),
      console.log(ds),
      fn.forEach((n, e) => {
        ds[e + 1]
          ? (n.replaceWith(n.cloneNode(!0)),
            (n = document.querySelectorAll(".session-times_day-filter_day")[e]),
            n.addEventListener("click", () => {
              Zt.scrollTo(ds[e + 1], { offset: g_() });
            }),
            Y.set(n, { cursor: "" }))
          : Y.set(n, { cursor: "not-allowed" }),
          (fn = document.querySelectorAll(".session-times_day-filter_day"));
      });
  }
  function kf(n) {
    fn.forEach((e) => {
      e.classList.remove("is-active");
    }),
      fn[parseInt(n) - 1].classList.add("is-active");
  }
  function v_() {
    let n = null,
      e = null;
    Object.entries(ds).forEach(([t, r]) => {
      if (r) {
        let i = n,
          s = e;
        Z.create({
          trigger: r,
          start: "top 35%",
          onEnter: () => {
            vl(r), kf(t);
          },
          onLeaveBack: () => {
            i && (vl(i), kf(s));
          },
        }),
          (n = r),
          (e = t);
      }
    });
  }
  function Of() {
    Y.registerPlugin(Z),
      Z.killAll(),
      (fn = document.querySelectorAll(".session-times_day-filter_day")),
      m_(),
      v_(),
      setTimeout(() => {
        vl(Af[0]);
      }, 50);
  }
  let yl = !1;
  const y_ = new MutationObserver((n) => {
      n.some((e) => e.type === "childList") &&
        (yl ||
          ((yl = !0),
          setTimeout(() => {
            (yl = !1), Of(), console.log("session list updated");
          }, 10)));
    }),
    w_ = () => {
      Cf && (Of(), y_.observe(Cf, { childList: !0 }));
    };
  function S_() {
    const n = document.querySelectorAll("[data-author-instance]");
    if (!n) return;
    let e = new Set();
    n.forEach((t) => {
      const r = t.getAttribute("data-author-instance");
      e.has(r) ? t.remove() : e.add(r);
    });
  }
  const b_ = () => {
      S_();
    },
    T_ = () => {
      const n = document.querySelector(".section_wc-workshops");
      if (!n) return;
      const e = n.querySelector(".grid").querySelector(".grid"),
        r = window
          .getComputedStyle(e)
          .getPropertyValue("grid-template-columns")
          .split(" ").length,
        i = Array.from(e.querySelectorAll(".grid-cell")),
        s = i[0],
        o =
          parseInt(
            getComputedStyle(s).gridColumnStart.replace("span ", ""),
            10
          ) || 2,
        a = Math.floor(r / o);
      i.slice(a).forEach((l) => l.remove());
    };
  function E_() {
    const n = document.querySelectorAll(
      '.filter-checkbox-field[fs-cmsfilter-field="year"]'
    );
    if (!n) return;
    const t = parseInt(new Date().getFullYear());
    n.forEach((r) => {
      parseInt(r.textContent) > t && Y.set(r, { display: "none" });
    });
  }
  const x_ = () => {
    E_();
  };
  function C_() {
    console.log("debug");
    const n = document.querySelectorAll(
      '.filter-checkbox-field[fs-cmsfilter-field="year"]'
    );
    if (!n) return;
    const t = parseInt(new Date().getFullYear());
    n.forEach((r) => {
      parseInt(r.textContent) > t && Y.set(r, { display: "none" });
    });
  }
  const A_ = () => {
    C_();
  };
  function k_() {
    const n = document.querySelector("[data-page-name]");
    if (!n) {
      console.warn("No data-page-name attribute found on the page wrapper.");
      return;
    }
    const e = n.getAttribute("data-page-name"),
      r = {
        home: cd,
        program: w_,
        schoolProgram: b_,
        writersCentre: T_,
        news: x_,
        podcasts: A_,
      }[e];
    r ? r() : console.warn(`No specific animations found for page: ${e}`);
  }
  __(), k_(), console.log("Hello, Vite!");
});
