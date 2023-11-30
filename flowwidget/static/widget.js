function Bf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jf = { exports: {} }, dl = {}, Vf = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo = Symbol.for("react.element"), tg = Symbol.for("react.portal"), ng = Symbol.for("react.fragment"), rg = Symbol.for("react.strict_mode"), og = Symbol.for("react.profiler"), ig = Symbol.for("react.provider"), lg = Symbol.for("react.context"), sg = Symbol.for("react.forward_ref"), ug = Symbol.for("react.suspense"), ag = Symbol.for("react.memo"), cg = Symbol.for("react.lazy"), Ua = Symbol.iterator;
function fg(e) {
  return e === null || typeof e != "object" ? null : (e = Ua && e[Ua] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Uf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Wf = Object.assign, Yf = {};
function Rr(e, t, n) {
  this.props = e, this.context = t, this.refs = Yf, this.updater = n || Uf;
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xf() {
}
Xf.prototype = Rr.prototype;
function Tu(e, t, n) {
  this.props = e, this.context = t, this.refs = Yf, this.updater = n || Uf;
}
var Ru = Tu.prototype = new Xf();
Ru.constructor = Tu;
Wf(Ru, Rr.prototype);
Ru.isPureReactComponent = !0;
var Wa = Array.isArray, Kf = Object.prototype.hasOwnProperty, $u = { current: null }, Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zf(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Kf.call(t, r) && !Qf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++)
      u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Oo, type: e, key: i, ref: l, props: o, _owner: $u.current };
}
function dg(e, t) {
  return { $$typeof: Oo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oo;
}
function pg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ya = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? pg("" + e.key) : t.toString(36);
}
function yi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Oo:
          case tg:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + Hl(l, 0) : r, Wa(o) ? (n = "", e != null && (n = e.replace(Ya, "$&/") + "/"), yi(o, t, n, "", function(a) {
      return a;
    })) : o != null && (Au(o) && (o = dg(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Ya, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Wa(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Hl(i, s);
      l += yi(i, t, n, u, o);
    }
  else if (u = fg(e), typeof u == "function")
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, u = r + Hl(i, s++), l += yi(i, t, n, u, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Xo(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return yi(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function hg(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Re = { current: null }, vi = { transition: null }, gg = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: vi, ReactCurrentOwner: $u };
Z.Children = { map: Xo, forEach: function(e, t, n) {
  Xo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Au(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Z.Component = Rr;
Z.Fragment = ng;
Z.Profiler = og;
Z.PureComponent = Tu;
Z.StrictMode = rg;
Z.Suspense = ug;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gg;
Z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Wf({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = $u.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (u in t)
      Kf.call(t, u) && !Qf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Oo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
Z.createContext = function(e) {
  return e = { $$typeof: lg, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ig, _context: e }, e.Consumer = e;
};
Z.createElement = Zf;
Z.createFactory = function(e) {
  var t = Zf.bind(null, e);
  return t.type = e, t;
};
Z.createRef = function() {
  return { current: null };
};
Z.forwardRef = function(e) {
  return { $$typeof: sg, render: e };
};
Z.isValidElement = Au;
Z.lazy = function(e) {
  return { $$typeof: cg, _payload: { _status: -1, _result: e }, _init: hg };
};
Z.memo = function(e, t) {
  return { $$typeof: ag, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function(e) {
  var t = vi.transition;
  vi.transition = {};
  try {
    e();
  } finally {
    vi.transition = t;
  }
};
Z.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
Z.useContext = function(e) {
  return Re.current.useContext(e);
};
Z.useDebugValue = function() {
};
Z.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
Z.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
Z.useId = function() {
  return Re.current.useId();
};
Z.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
Z.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
Z.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
Z.useRef = function(e) {
  return Re.current.useRef(e);
};
Z.useState = function(e) {
  return Re.current.useState(e);
};
Z.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function() {
  return Re.current.useTransition();
};
Z.version = "18.2.0";
Vf.exports = Z;
var R = Vf.exports;
const mg = /* @__PURE__ */ Bf(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg = R, vg = Symbol.for("react.element"), wg = Symbol.for("react.fragment"), xg = Object.prototype.hasOwnProperty, Sg = yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    xg.call(t, r) && !_g.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: vg, type: e, key: i, ref: l, props: o, _owner: Sg.current };
}
dl.Fragment = wg;
dl.jsx = Gf;
dl.jsxs = Gf;
jf.exports = dl;
var L = jf.exports, _s = {}, qf = { exports: {} }, Ke = {}, Jf = { exports: {} }, bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(x, P) {
    var z = x.length;
    x.push(P);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, B = x[H];
        if (0 < o(B, P))
          x[H] = P, x[z] = B, z = H;
        else
          break e;
      }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0)
      return null;
    var P = x[0], z = x.pop();
    if (z !== P) {
      x[0] = z;
      e:
        for (var H = 0, B = x.length, Y = B >>> 1; H < Y; ) {
          var U = 2 * (H + 1) - 1, G = x[U], Q = U + 1, J = x[Q];
          if (0 > o(G, z))
            Q < B && 0 > o(J, G) ? (x[H] = J, x[Q] = z, H = Q) : (x[H] = G, x[U] = z, H = U);
          else if (Q < B && 0 > o(J, z))
            x[H] = J, x[Q] = z, H = Q;
          else
            break e;
        }
    }
    return P;
  }
  function o(x, P) {
    var z = x.sortIndex - P.sortIndex;
    return z !== 0 ? z : x.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var u = [], a = [], c = 1, f = null, d = 3, g = !1, w = !1, v = !1, N = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(x) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null)
        r(a);
      else if (P.startTime <= x)
        r(a), P.sortIndex = P.expirationTime, t(u, P);
      else
        break;
      P = n(a);
    }
  }
  function y(x) {
    if (v = !1, m(x), !w)
      if (n(u) !== null)
        w = !0, M(_);
      else {
        var P = n(a);
        P !== null && k(y, P.startTime - x);
      }
  }
  function _(x, P) {
    w = !1, v && (v = !1, p(T), T = -1), g = !0;
    var z = d;
    try {
      for (m(P), f = n(u); f !== null && (!(f.expirationTime > P) || x && !F()); ) {
        var H = f.callback;
        if (typeof H == "function") {
          f.callback = null, d = f.priorityLevel;
          var B = H(f.expirationTime <= P);
          P = e.unstable_now(), typeof B == "function" ? f.callback = B : f === n(u) && r(u), m(P);
        } else
          r(u);
        f = n(u);
      }
      if (f !== null)
        var Y = !0;
      else {
        var U = n(a);
        U !== null && k(y, U.startTime - P), Y = !1;
      }
      return Y;
    } finally {
      f = null, d = z, g = !1;
    }
  }
  var E = !1, C = null, T = -1, D = 5, I = -1;
  function F() {
    return !(e.unstable_now() - I < D);
  }
  function j() {
    if (C !== null) {
      var x = e.unstable_now();
      I = x;
      var P = !0;
      try {
        P = C(!0, x);
      } finally {
        P ? A() : (E = !1, C = null);
      }
    } else
      E = !1;
  }
  var A;
  if (typeof h == "function")
    A = function() {
      h(j);
    };
  else if (typeof MessageChannel < "u") {
    var S = new MessageChannel(), $ = S.port2;
    S.port1.onmessage = j, A = function() {
      $.postMessage(null);
    };
  } else
    A = function() {
      N(j, 0);
    };
  function M(x) {
    C = x, E || (E = !0, A());
  }
  function k(x, P) {
    T = N(function() {
      x(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, M(_));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(x) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = d;
    }
    var z = d;
    d = P;
    try {
      return x();
    } finally {
      d = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, P) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var z = d;
    d = x;
    try {
      return P();
    } finally {
      d = z;
    }
  }, e.unstable_scheduleCallback = function(x, P, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, x) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = z + B, x = { id: c++, callback: P, priorityLevel: x, startTime: z, expirationTime: B, sortIndex: -1 }, z > H ? (x.sortIndex = z, t(a, x), n(u) === null && x === n(a) && (v ? (p(T), T = -1) : v = !0, k(y, z - H))) : (x.sortIndex = B, t(u, x), w || g || (w = !0, M(_))), x;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(x) {
    var P = d;
    return function() {
      var z = d;
      d = P;
      try {
        return x.apply(this, arguments);
      } finally {
        d = z;
      }
    };
  };
})(bf);
Jf.exports = bf;
var Eg = Jf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed = R, Ye = Eg;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var td = /* @__PURE__ */ new Set(), po = {};
function Bn(e, t) {
  xr(e, t), xr(e + "Capture", t);
}
function xr(e, t) {
  for (po[e] = t, e = 0; e < t.length; e++)
    td.add(t[e]);
}
var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Es = Object.prototype.hasOwnProperty, kg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xa = {}, Ka = {};
function Ng(e) {
  return Es.call(Ka, e) ? !0 : Es.call(Xa, e) ? !1 : kg.test(e) ? Ka[e] = !0 : (Xa[e] = !0, !1);
}
function Cg(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mg(e, t, n, r) {
  if (t === null || typeof t > "u" || Cg(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Du = /[\-:]([a-z])/g;
function Lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Du,
    Lu
  );
  Ee[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Du, Lu);
  Ee[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Du, Lu);
  Ee[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Iu(e, t, n, r) {
  var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Mg(t, n, o, r) && (n = null), r || o === null ? Ng(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ko = Symbol.for("react.element"), Gn = Symbol.for("react.portal"), qn = Symbol.for("react.fragment"), Ou = Symbol.for("react.strict_mode"), ks = Symbol.for("react.profiler"), nd = Symbol.for("react.provider"), rd = Symbol.for("react.context"), Fu = Symbol.for("react.forward_ref"), Ns = Symbol.for("react.suspense"), Cs = Symbol.for("react.suspense_list"), Hu = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), od = Symbol.for("react.offscreen"), Qa = Symbol.iterator;
function Fr(e) {
  return e === null || typeof e != "object" ? null : (e = Qa && e[Qa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ue = Object.assign, Bl;
function qr(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = t && t[1] || "";
    }
  return `
` + Bl + e;
}
var jl = !1;
function Vl(e, t) {
  if (!e || jl)
    return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if (l--, s--, 0 > s || o[l] !== i[s]) {
                var u = `
` + o[l].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qr(e) : "";
}
function Pg(e) {
  switch (e.tag) {
    case 5:
      return qr(e.type);
    case 16:
      return qr("Lazy");
    case 13:
      return qr("Suspense");
    case 19:
      return qr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vl(e.type, !1), e;
    case 11:
      return e = Vl(e.type.render, !1), e;
    case 1:
      return e = Vl(e.type, !0), e;
    default:
      return "";
  }
}
function Ms(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Gn:
      return "Portal";
    case ks:
      return "Profiler";
    case Ou:
      return "StrictMode";
    case Ns:
      return "Suspense";
    case Cs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rd:
        return (e.displayName || "Context") + ".Consumer";
      case nd:
        return (e._context.displayName || "Context") + ".Provider";
      case Fu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Hu:
        return t = e.displayName || null, t !== null ? t : Ms(e.type) || "Memo";
      case Ut:
        t = e._payload, e = e._init;
        try {
          return Ms(e(t));
        } catch {
        }
    }
  return null;
}
function zg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ms(t);
    case 8:
      return t === Ou ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function id(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tg(e) {
  var t = id(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Qo(e) {
  e._valueTracker || (e._valueTracker = Tg(e));
}
function ld(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = id(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ai(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ps(e, t) {
  var n = t.checked;
  return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Za(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sd(e, t) {
  t = t.checked, t != null && Iu(e, "checked", t, !1);
}
function zs(e, t) {
  sd(e, t);
  var n = an(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ts(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ts(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ga(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ts(e, t, n) {
  (t !== "number" || Ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jr = Array.isArray;
function ar(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rs(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(O(92));
      if (Jr(n)) {
        if (1 < n.length)
          throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function ud(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ja(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ad(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $s(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ad(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Zo, cd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Zo = Zo || document.createElement("div"), Zo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zo.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ho(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ro = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Rg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ro).forEach(function(e) {
  Rg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ro[t] = ro[e];
  });
});
function fd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ro.hasOwnProperty(e) && ro[e] ? ("" + t).trim() : t + "px";
}
function dd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = fd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var $g = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function As(e, t) {
  if (t) {
    if ($g[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function Ds(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ls = null;
function Bu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Is = null, cr = null, fr = null;
function ba(e) {
  if (e = Bo(e)) {
    if (typeof Is != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = yl(t), Is(e.stateNode, e.type, t));
  }
}
function pd(e) {
  cr ? fr ? fr.push(e) : fr = [e] : cr = e;
}
function hd() {
  if (cr) {
    var e = cr, t = fr;
    if (fr = cr = null, ba(e), t)
      for (e = 0; e < t.length; e++)
        ba(t[e]);
  }
}
function gd(e, t) {
  return e(t);
}
function md() {
}
var Ul = !1;
function yd(e, t, n) {
  if (Ul)
    return e(t, n);
  Ul = !0;
  try {
    return gd(e, t, n);
  } finally {
    Ul = !1, (cr !== null || fr !== null) && (md(), hd());
  }
}
function go(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = yl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(O(231, t, typeof n));
  return n;
}
var Os = !1;
if ($t)
  try {
    var Hr = {};
    Object.defineProperty(Hr, "passive", { get: function() {
      Os = !0;
    } }), window.addEventListener("test", Hr, Hr), window.removeEventListener("test", Hr, Hr);
  } catch {
    Os = !1;
  }
function Ag(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var oo = !1, Di = null, Li = !1, Fs = null, Dg = { onError: function(e) {
  oo = !0, Di = e;
} };
function Lg(e, t, n, r, o, i, l, s, u) {
  oo = !1, Di = null, Ag.apply(Dg, arguments);
}
function Ig(e, t, n, r, o, i, l, s, u) {
  if (Lg.apply(this, arguments), oo) {
    if (oo) {
      var a = Di;
      oo = !1, Di = null;
    } else
      throw Error(O(198));
    Li || (Li = !0, Fs = a);
  }
}
function jn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function ec(e) {
  if (jn(e) !== e)
    throw Error(O(188));
}
function Og(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jn(e), t === null)
      throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return ec(o), e;
        if (i === r)
          return ec(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l)
          throw Error(O(189));
      }
    }
    if (n.alternate !== r)
      throw Error(O(190));
  }
  if (n.tag !== 3)
    throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function wd(e) {
  return e = Og(e), e !== null ? xd(e) : null;
}
function xd(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = xd(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Sd = Ye.unstable_scheduleCallback, tc = Ye.unstable_cancelCallback, Fg = Ye.unstable_shouldYield, Hg = Ye.unstable_requestPaint, fe = Ye.unstable_now, Bg = Ye.unstable_getCurrentPriorityLevel, ju = Ye.unstable_ImmediatePriority, _d = Ye.unstable_UserBlockingPriority, Ii = Ye.unstable_NormalPriority, jg = Ye.unstable_LowPriority, Ed = Ye.unstable_IdlePriority, pl = null, St = null;
function Vg(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var dt = Math.clz32 ? Math.clz32 : Yg, Ug = Math.log, Wg = Math.LN2;
function Yg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ug(e) / Wg | 0) | 0;
}
var Go = 64, qo = 4194304;
function br(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = br(s) : (i &= l, i !== 0 && (r = br(i)));
  } else
    l = n & ~o, l !== 0 ? r = br(l) : i !== 0 && (r = br(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - dt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Xg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - dt(i), s = 1 << l, u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = Xg(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Hs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function kd() {
  var e = Go;
  return Go <<= 1, !(Go & 4194240) && (Go = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Fo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
}
function Qg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - dt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Vu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var b = 0;
function Nd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Cd, Uu, Md, Pd, zd, Bs = !1, Jo = [], Jt = null, bt = null, en = null, mo = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), Kt = [], Zg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function nc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      mo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yo.delete(t.pointerId);
  }
}
function Br(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Bo(t), t !== null && Uu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Gg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Jt = Br(Jt, e, t, n, r, o), !0;
    case "dragenter":
      return bt = Br(bt, e, t, n, r, o), !0;
    case "mouseover":
      return en = Br(en, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return mo.set(i, Br(mo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, yo.set(i, Br(yo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Td(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vd(n), t !== null) {
          e.blockedOn = t, zd(e.priority, function() {
            Md(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wi(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ls = r, n.target.dispatchEvent(r), Ls = null;
    } else
      return t = Bo(n), t !== null && Uu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function rc(e, t, n) {
  wi(e) && n.delete(t);
}
function qg() {
  Bs = !1, Jt !== null && wi(Jt) && (Jt = null), bt !== null && wi(bt) && (bt = null), en !== null && wi(en) && (en = null), mo.forEach(rc), yo.forEach(rc);
}
function jr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bs || (Bs = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, qg)));
}
function vo(e) {
  function t(o) {
    return jr(o, e);
  }
  if (0 < Jo.length) {
    jr(Jo[0], e);
    for (var n = 1; n < Jo.length; n++) {
      var r = Jo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Jt !== null && jr(Jt, e), bt !== null && jr(bt, e), en !== null && jr(en, e), mo.forEach(t), yo.forEach(t), n = 0; n < Kt.length; n++)
    r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); )
    Td(n), n.blockedOn === null && Kt.shift();
}
var dr = Ot.ReactCurrentBatchConfig, Fi = !0;
function Jg(e, t, n, r) {
  var o = b, i = dr.transition;
  dr.transition = null;
  try {
    b = 1, Wu(e, t, n, r);
  } finally {
    b = o, dr.transition = i;
  }
}
function bg(e, t, n, r) {
  var o = b, i = dr.transition;
  dr.transition = null;
  try {
    b = 4, Wu(e, t, n, r);
  } finally {
    b = o, dr.transition = i;
  }
}
function Wu(e, t, n, r) {
  if (Fi) {
    var o = js(e, t, n, r);
    if (o === null)
      es(e, t, r, Hi, n), nc(e, r);
    else if (Gg(o, e, t, n, r))
      r.stopPropagation();
    else if (nc(e, r), t & 4 && -1 < Zg.indexOf(e)) {
      for (; o !== null; ) {
        var i = Bo(o);
        if (i !== null && Cd(i), i = js(e, t, n, r), i === null && es(e, t, r, Hi, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      es(e, t, r, null, n);
  }
}
var Hi = null;
function js(e, t, n, r) {
  if (Hi = null, e = Bu(r), e = Cn(e), e !== null)
    if (t = jn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = vd(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Hi = e, null;
}
function Rd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bg()) {
        case ju:
          return 1;
        case _d:
          return 4;
        case Ii:
        case jg:
          return 16;
        case Ed:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null, Yu = null, xi = null;
function $d() {
  if (xi)
    return xi;
  var e, t = Yu, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return xi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Si(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function bo() {
  return !0;
}
function oc() {
  return !1;
}
function Qe(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bo : oc, this.isPropagationStopped = oc, this;
  }
  return ue(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bo);
  }, persist: function() {
  }, isPersistent: bo }), t;
}
var $r = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Xu = Qe($r), Ho = ue({}, $r, { view: 0, detail: 0 }), em = Qe(Ho), Yl, Xl, Vr, hl = ue({}, Ho, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ku, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Vr && (Vr && e.type === "mousemove" ? (Yl = e.screenX - Vr.screenX, Xl = e.screenY - Vr.screenY) : Xl = Yl = 0, Vr = e), Yl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Xl;
} }), ic = Qe(hl), tm = ue({}, hl, { dataTransfer: 0 }), nm = Qe(tm), rm = ue({}, Ho, { relatedTarget: 0 }), Kl = Qe(rm), om = ue({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), im = Qe(om), lm = ue({}, $r, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sm = Qe(lm), um = ue({}, $r, { data: 0 }), lc = Qe(um), am = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, cm = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, fm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function dm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fm[e]) ? !!t[e] : !1;
}
function Ku() {
  return dm;
}
var pm = ue({}, Ho, { key: function(e) {
  if (e.key) {
    var t = am[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ku, charCode: function(e) {
  return e.type === "keypress" ? Si(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hm = Qe(pm), gm = ue({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sc = Qe(gm), mm = ue({}, Ho, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ku }), ym = Qe(mm), vm = ue({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wm = Qe(vm), xm = ue({}, hl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Sm = Qe(xm), _m = [9, 13, 27, 32], Qu = $t && "CompositionEvent" in window, io = null;
$t && "documentMode" in document && (io = document.documentMode);
var Em = $t && "TextEvent" in window && !io, Ad = $t && (!Qu || io && 8 < io && 11 >= io), uc = String.fromCharCode(32), ac = !1;
function Dd(e, t) {
  switch (e) {
    case "keyup":
      return _m.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ld(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jn = !1;
function km(e, t) {
  switch (e) {
    case "compositionend":
      return Ld(t);
    case "keypress":
      return t.which !== 32 ? null : (ac = !0, uc);
    case "textInput":
      return e = t.data, e === uc && ac ? null : e;
    default:
      return null;
  }
}
function Nm(e, t) {
  if (Jn)
    return e === "compositionend" || !Qu && Dd(e, t) ? (e = $d(), xi = Yu = Gt = null, Jn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ad && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cm[e.type] : t === "textarea";
}
function Id(e, t, n, r) {
  pd(r), t = Bi(t, "onChange"), 0 < t.length && (n = new Xu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var lo = null, wo = null;
function Mm(e) {
  Kd(e, 0);
}
function gl(e) {
  var t = tr(e);
  if (ld(t))
    return e;
}
function Pm(e, t) {
  if (e === "change")
    return t;
}
var Od = !1;
if ($t) {
  var Ql;
  if ($t) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var fc = document.createElement("div");
      fc.setAttribute("oninput", "return;"), Zl = typeof fc.oninput == "function";
    }
    Ql = Zl;
  } else
    Ql = !1;
  Od = Ql && (!document.documentMode || 9 < document.documentMode);
}
function dc() {
  lo && (lo.detachEvent("onpropertychange", Fd), wo = lo = null);
}
function Fd(e) {
  if (e.propertyName === "value" && gl(wo)) {
    var t = [];
    Id(t, wo, e, Bu(e)), yd(Mm, t);
  }
}
function zm(e, t, n) {
  e === "focusin" ? (dc(), lo = t, wo = n, lo.attachEvent("onpropertychange", Fd)) : e === "focusout" && dc();
}
function Tm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(wo);
}
function Rm(e, t) {
  if (e === "click")
    return gl(t);
}
function $m(e, t) {
  if (e === "input" || e === "change")
    return gl(t);
}
function Am(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ht = typeof Object.is == "function" ? Object.is : Am;
function xo(e, t) {
  if (ht(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Es.call(t, o) || !ht(e[o], t[o]))
      return !1;
  }
  return !0;
}
function pc(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function hc(e, t) {
  var n = pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pc(n);
  }
}
function Hd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bd() {
  for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ai(e.document);
  }
  return t;
}
function Zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dm(e) {
  var t = Bd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Zu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = hc(n, i);
        var l = hc(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Lm = $t && "documentMode" in document && 11 >= document.documentMode, bn = null, Vs = null, so = null, Us = !1;
function gc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Us || bn == null || bn !== Ai(r) || (r = bn, "selectionStart" in r && Zu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), so && xo(so, r) || (so = r, r = Bi(Vs, "onSelect"), 0 < r.length && (t = new Xu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bn)));
}
function ei(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var er = { animationend: ei("Animation", "AnimationEnd"), animationiteration: ei("Animation", "AnimationIteration"), animationstart: ei("Animation", "AnimationStart"), transitionend: ei("Transition", "TransitionEnd") }, Gl = {}, jd = {};
$t && (jd = document.createElement("div").style, "AnimationEvent" in window || (delete er.animationend.animation, delete er.animationiteration.animation, delete er.animationstart.animation), "TransitionEvent" in window || delete er.transitionend.transition);
function ml(e) {
  if (Gl[e])
    return Gl[e];
  if (!er[e])
    return e;
  var t = er[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in jd)
      return Gl[e] = t[n];
  return e;
}
var Vd = ml("animationend"), Ud = ml("animationiteration"), Wd = ml("animationstart"), Yd = ml("transitionend"), Xd = /* @__PURE__ */ new Map(), mc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Xd.set(e, t), Bn(t, [e]);
}
for (var ql = 0; ql < mc.length; ql++) {
  var Jl = mc[ql], Im = Jl.toLowerCase(), Om = Jl[0].toUpperCase() + Jl.slice(1);
  dn(Im, "on" + Om);
}
dn(Vd, "onAnimationEnd");
dn(Ud, "onAnimationIteration");
dn(Wd, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Yd, "onTransitionEnd");
xr("onMouseEnter", ["mouseout", "mouseover"]);
xr("onMouseLeave", ["mouseout", "mouseover"]);
xr("onPointerEnter", ["pointerout", "pointerover"]);
xr("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fm = new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));
function yc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ig(r, t, void 0, e), e.currentTarget = null;
}
function Kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l], u = s.instance, a = s.currentTarget;
          if (s = s.listener, u !== i && o.isPropagationStopped())
            break e;
          yc(o, s, a), i = u;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (s = r[l], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped())
            break e;
          yc(o, s, a), i = u;
        }
    }
  }
  if (Li)
    throw e = Fs, Li = !1, Fs = null, e;
}
function ne(e, t) {
  var n = t[Qs];
  n === void 0 && (n = t[Qs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Qd(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), Qd(n, e, r, t);
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);
function So(e) {
  if (!e[ti]) {
    e[ti] = !0, td.forEach(function(n) {
      n !== "selectionchange" && (Fm.has(n) || bl(n, !1, e), bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ti] || (t[ti] = !0, bl("selectionchange", !1, t));
  }
}
function Qd(e, t, n, r) {
  switch (Rd(t)) {
    case 1:
      var o = Jg;
      break;
    case 4:
      o = bg;
      break;
    default:
      o = Wu;
  }
  n = o.bind(null, t, n, e), o = void 0, !Os || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function es(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var u = l.tag;
              if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o))
                return;
              l = l.return;
            }
          for (; s !== null; ) {
            if (l = Cn(s), l === null)
              return;
            if (u = l.tag, u === 5 || u === 6) {
              r = i = l;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  yd(function() {
    var a = i, c = Bu(n), f = [];
    e: {
      var d = Xd.get(e);
      if (d !== void 0) {
        var g = Xu, w = e;
        switch (e) {
          case "keypress":
            if (Si(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = hm;
            break;
          case "focusin":
            w = "focus", g = Kl;
            break;
          case "focusout":
            w = "blur", g = Kl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Kl;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ic;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ym;
            break;
          case Vd:
          case Ud:
          case Wd:
            g = im;
            break;
          case Yd:
            g = wm;
            break;
          case "scroll":
            g = em;
            break;
          case "wheel":
            g = Sm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = sm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = sc;
        }
        var v = (t & 4) !== 0, N = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var h = a, m; h !== null; ) {
          m = h;
          var y = m.stateNode;
          if (m.tag === 5 && y !== null && (m = y, p !== null && (y = go(h, p), y != null && v.push(_o(h, y, m)))), N)
            break;
          h = h.return;
        }
        0 < v.length && (d = new g(d, w, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Ls && (w = n.relatedTarget || n.fromElement) && (Cn(w) || w[At]))
          break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = a, w = w ? Cn(w) : null, w !== null && (N = jn(w), w !== N || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = a), g !== w)) {
          if (v = ic, y = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = sc, y = "onPointerLeave", p = "onPointerEnter", h = "pointer"), N = g == null ? d : tr(g), m = w == null ? d : tr(w), d = new v(y, h + "leave", g, n, c), d.target = N, d.relatedTarget = m, y = null, Cn(c) === a && (v = new v(p, h + "enter", w, n, c), v.target = m, v.relatedTarget = N, y = v), N = y, g && w)
            t: {
              for (v = g, p = w, h = 0, m = v; m; m = Yn(m))
                h++;
              for (m = 0, y = p; y; y = Yn(y))
                m++;
              for (; 0 < h - m; )
                v = Yn(v), h--;
              for (; 0 < m - h; )
                p = Yn(p), m--;
              for (; h--; ) {
                if (v === p || p !== null && v === p.alternate)
                  break t;
                v = Yn(v), p = Yn(p);
              }
              v = null;
            }
          else
            v = null;
          g !== null && vc(f, d, g, v, !1), w !== null && N !== null && vc(f, N, w, v, !0);
        }
      }
      e: {
        if (d = a ? tr(a) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
          var _ = Pm;
        else if (cc(d))
          if (Od)
            _ = $m;
          else {
            _ = Tm;
            var E = zm;
          }
        else
          (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (_ = Rm);
        if (_ && (_ = _(e, a))) {
          Id(f, _, n, c);
          break e;
        }
        E && E(e, d, a), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Ts(d, "number", d.value);
      }
      switch (E = a ? tr(a) : window, e) {
        case "focusin":
          (cc(E) || E.contentEditable === "true") && (bn = E, Vs = a, so = null);
          break;
        case "focusout":
          so = Vs = bn = null;
          break;
        case "mousedown":
          Us = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Us = !1, gc(f, n, c);
          break;
        case "selectionchange":
          if (Lm)
            break;
        case "keydown":
        case "keyup":
          gc(f, n, c);
      }
      var C;
      if (Qu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Jn ? Dd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ad && n.locale !== "ko" && (Jn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Jn && (C = $d()) : (Gt = c, Yu = "value" in Gt ? Gt.value : Gt.textContent, Jn = !0)), E = Bi(a, T), 0 < E.length && (T = new lc(T, e, null, n, c), f.push({ event: T, listeners: E }), C ? T.data = C : (C = Ld(n), C !== null && (T.data = C)))), (C = Em ? km(e, n) : Nm(e, n)) && (a = Bi(a, "onBeforeInput"), 0 < a.length && (c = new lc("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: a }), c.data = C));
    }
    Kd(f, t);
  });
}
function _o(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = go(e, n), i != null && r.unshift(_o(e, i, o)), i = go(e, t), i != null && r.push(_o(e, i, o))), e = e.return;
  }
  return r;
}
function Yn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r)
      break;
    s.tag === 5 && a !== null && (s = a, o ? (u = go(n, i), u != null && l.unshift(_o(n, u, s))) : o || (u = go(n, i), u != null && l.push(_o(n, u, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Hm = /\r\n?/g, Bm = /\u0000|\uFFFD/g;
function wc(e) {
  return (typeof e == "string" ? e : "" + e).replace(Hm, `
`).replace(Bm, "");
}
function ni(e, t, n) {
  if (t = wc(t), wc(e) !== t && n)
    throw Error(O(425));
}
function ji() {
}
var Ws = null, Ys = null;
function Xs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ks = typeof setTimeout == "function" ? setTimeout : void 0, jm = typeof clearTimeout == "function" ? clearTimeout : void 0, xc = typeof Promise == "function" ? Promise : void 0, Vm = typeof queueMicrotask == "function" ? queueMicrotask : typeof xc < "u" ? function(e) {
  return xc.resolve(null).then(e).catch(Um);
} : Ks;
function Um(e) {
  setTimeout(function() {
    throw e;
  });
}
function ts(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), vo(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  vo(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Sc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ar = Math.random().toString(36).slice(2), xt = "__reactFiber$" + Ar, Eo = "__reactProps$" + Ar, At = "__reactContainer$" + Ar, Qs = "__reactEvents$" + Ar, Wm = "__reactListeners$" + Ar, Ym = "__reactHandles$" + Ar;
function Cn(e) {
  var t = e[xt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[At] || n[xt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Sc(e); e !== null; ) {
          if (n = e[xt])
            return n;
          e = Sc(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Bo(e) {
  return e = e[xt] || e[At], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function yl(e) {
  return e[Eo] || null;
}
var Zs = [], nr = -1;
function pn(e) {
  return { current: e };
}
function re(e) {
  0 > nr || (e.current = Zs[nr], Zs[nr] = null, nr--);
}
function ee(e, t) {
  nr++, Zs[nr] = e.current, e.current = t;
}
var cn = {}, Me = pn(cn), Fe = pn(!1), An = cn;
function Sr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function He(e) {
  return e = e.childContextTypes, e != null;
}
function Vi() {
  re(Fe), re(Me);
}
function _c(e, t, n) {
  if (Me.current !== cn)
    throw Error(O(168));
  ee(Me, t), ee(Fe, n);
}
function Zd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(O(108, zg(e) || "Unknown", o));
  return ue({}, n, r);
}
function Ui(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, An = Me.current, ee(Me, e), ee(Fe, Fe.current), !0;
}
function Ec(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(O(169));
  n ? (e = Zd(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, re(Fe), re(Me), ee(Me, e)) : re(Fe), ee(Fe, n);
}
var Mt = null, vl = !1, ns = !1;
function Gd(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Xm(e) {
  vl = !0, Gd(e);
}
function hn() {
  if (!ns && Mt !== null) {
    ns = !0;
    var e = 0, t = b;
    try {
      var n = Mt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mt = null, vl = !1;
    } catch (o) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), Sd(ju, hn), o;
    } finally {
      b = t, ns = !1;
    }
  }
  return null;
}
var rr = [], or = 0, Wi = null, Yi = 0, Ge = [], qe = 0, Dn = null, Pt = 1, zt = "";
function En(e, t) {
  rr[or++] = Yi, rr[or++] = Wi, Wi = e, Yi = t;
}
function qd(e, t, n) {
  Ge[qe++] = Pt, Ge[qe++] = zt, Ge[qe++] = Dn, Dn = e;
  var r = Pt;
  e = zt;
  var o = 32 - dt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Pt = 1 << 32 - dt(t) + o | n << o | r, zt = i + e;
  } else
    Pt = 1 << i | n << o | r, zt = e;
}
function Gu(e) {
  e.return !== null && (En(e, 1), qd(e, 1, 0));
}
function qu(e) {
  for (; e === Wi; )
    Wi = rr[--or], rr[or] = null, Yi = rr[--or], rr[or] = null;
  for (; e === Dn; )
    Dn = Ge[--qe], Ge[qe] = null, zt = Ge[--qe], Ge[qe] = null, Pt = Ge[--qe], Ge[qe] = null;
}
var We = null, Ue = null, ie = !1, at = null;
function Jd(e, t) {
  var n = Je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function kc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Ue = tn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Ue = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? { id: Pt, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Ue = null, !0) : !1;
    default:
      return !1;
  }
}
function Gs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qs(e) {
  if (ie) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!kc(e, t)) {
        if (Gs(e))
          throw Error(O(418));
        t = tn(n.nextSibling);
        var r = We;
        t && kc(e, t) ? Jd(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, We = e);
      }
    } else {
      if (Gs(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, ie = !1, We = e;
    }
  }
}
function Nc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function ri(e) {
  if (e !== We)
    return !1;
  if (!ie)
    return Nc(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xs(e.type, e.memoizedProps)), t && (t = Ue)) {
    if (Gs(e))
      throw bd(), Error(O(418));
    for (; t; )
      Jd(e, t), t = tn(t.nextSibling);
  }
  if (Nc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = tn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else
    Ue = We ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function bd() {
  for (var e = Ue; e; )
    e = tn(e.nextSibling);
}
function _r() {
  Ue = We = null, ie = !1;
}
function Ju(e) {
  at === null ? at = [e] : at.push(e);
}
var Km = Ot.ReactCurrentBatchConfig;
function st(e, t) {
  if (e && e.defaultProps) {
    t = ue({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xi = pn(null), Ki = null, ir = null, bu = null;
function ea() {
  bu = ir = Ki = null;
}
function ta(e) {
  var t = Xi.current;
  re(Xi), e._currentValue = t;
}
function Js(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function pr(e, t) {
  Ki = e, bu = ir = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function tt(e) {
  var t = e._currentValue;
  if (bu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ir === null) {
      if (Ki === null)
        throw Error(O(308));
      ir = e, Ki.dependencies = { lanes: 0, firstContext: e };
    } else
      ir = ir.next = e;
  return t;
}
var Mn = null;
function na(e) {
  Mn === null ? Mn = [e] : Mn.push(e);
}
function ep(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, na(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Dt(e, r);
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function ra(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Dt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, na(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Dt(e, n);
}
function _i(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vu(e, n);
  }
}
function Cc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Qi(e, t, n, r) {
  var o = e.updateQueue;
  Wt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, l === null ? i = a : l.next = a, l = u;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = a : s.next = a, c.lastBaseUpdate = u));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, c = a = u = null, s = i;
    do {
      var d = s.lane, g = s.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var w = e, v = s;
          switch (d = t, g = n, v.tag) {
            case 1:
              if (w = v.payload, typeof w == "function") {
                f = w.call(g, f, d);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = v.payload, d = typeof w == "function" ? w.call(g, f, d) : w, d == null)
                break e;
              f = ue({}, f, d);
              break e;
            case 2:
              Wt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [s] : d.push(s));
      } else
        g = { eventTime: g, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (a = c = g, u = f) : c = c.next = g, l |= d;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (1);
    if (c === null && (u = f), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    In |= l, e.lanes = l, e.memoizedState = f;
  }
}
function Mc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var np = new ed.Component().refs;
function bs(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wl = { isMounted: function(e) {
  return (e = e._reactInternals) ? jn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), o = on(e), i = Rt(r, o);
  i.payload = t, n != null && (i.callback = n), t = nn(e, i, o), t !== null && (pt(t, e, o, r), _i(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), o = on(e), i = Rt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = nn(e, i, o), t !== null && (pt(t, e, o, r), _i(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Te(), r = on(e), o = Rt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = nn(e, o, r), t !== null && (pt(t, e, r, n), _i(t, e, r));
} };
function Pc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !xo(n, r) || !xo(o, i) : !0;
}
function rp(e, t, n) {
  var r = !1, o = cn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = tt(i) : (o = He(t) ? An : Me.current, r = t.contextTypes, i = (r = r != null) ? Sr(e, o) : cn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function zc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wl.enqueueReplaceState(t, t.state, null);
}
function eu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = np, ra(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = tt(i) : (i = He(t) ? An : Me.current, o.context = Sr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (bs(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && wl.enqueueReplaceState(o, o.state, null), Qi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ur(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(O(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        s === np && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!n._owner)
      throw Error(O(290, e));
  }
  return e;
}
function oi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Tc(e) {
  var t = e._init;
  return t(e._payload);
}
function op(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(p, h), h = h.sibling;
    return null;
  }
  function r(p, h) {
    for (p = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
    return p;
  }
  function o(p, h) {
    return p = ln(p, h), p.index = 0, p.sibling = null, p;
  }
  function i(p, h, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, h, m, y) {
    return h === null || h.tag !== 6 ? (h = as(m, p.mode, y), h.return = p, h) : (h = o(h, m), h.return = p, h);
  }
  function u(p, h, m, y) {
    var _ = m.type;
    return _ === qn ? c(p, h, m.props.children, y, m.key) : h !== null && (h.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Ut && Tc(_) === h.type) ? (y = o(h, m.props), y.ref = Ur(p, h, m), y.return = p, y) : (y = Pi(m.type, m.key, m.props, null, p.mode, y), y.ref = Ur(p, h, m), y.return = p, y);
  }
  function a(p, h, m, y) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = cs(m, p.mode, y), h.return = p, h) : (h = o(h, m.children || []), h.return = p, h);
  }
  function c(p, h, m, y, _) {
    return h === null || h.tag !== 7 ? (h = Rn(m, p.mode, y, _), h.return = p, h) : (h = o(h, m), h.return = p, h);
  }
  function f(p, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = as("" + h, p.mode, m), h.return = p, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ko:
          return m = Pi(h.type, h.key, h.props, null, p.mode, m), m.ref = Ur(p, null, h), m.return = p, m;
        case Gn:
          return h = cs(h, p.mode, m), h.return = p, h;
        case Ut:
          var y = h._init;
          return f(p, y(h._payload), m);
      }
      if (Jr(h) || Fr(h))
        return h = Rn(h, p.mode, m, null), h.return = p, h;
      oi(p, h);
    }
    return null;
  }
  function d(p, h, m, y) {
    var _ = h !== null ? h.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return _ !== null ? null : s(p, h, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ko:
          return m.key === _ ? u(p, h, m, y) : null;
        case Gn:
          return m.key === _ ? a(p, h, m, y) : null;
        case Ut:
          return _ = m._init, d(
            p,
            h,
            _(m._payload),
            y
          );
      }
      if (Jr(m) || Fr(m))
        return _ !== null ? null : c(p, h, m, y, null);
      oi(p, m);
    }
    return null;
  }
  function g(p, h, m, y, _) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return p = p.get(m) || null, s(h, p, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ko:
          return p = p.get(y.key === null ? m : y.key) || null, u(h, p, y, _);
        case Gn:
          return p = p.get(y.key === null ? m : y.key) || null, a(h, p, y, _);
        case Ut:
          var E = y._init;
          return g(p, h, m, E(y._payload), _);
      }
      if (Jr(y) || Fr(y))
        return p = p.get(m) || null, c(h, p, y, _, null);
      oi(h, y);
    }
    return null;
  }
  function w(p, h, m, y) {
    for (var _ = null, E = null, C = h, T = h = 0, D = null; C !== null && T < m.length; T++) {
      C.index > T ? (D = C, C = null) : D = C.sibling;
      var I = d(p, C, m[T], y);
      if (I === null) {
        C === null && (C = D);
        break;
      }
      e && C && I.alternate === null && t(p, C), h = i(I, h, T), E === null ? _ = I : E.sibling = I, E = I, C = D;
    }
    if (T === m.length)
      return n(p, C), ie && En(p, T), _;
    if (C === null) {
      for (; T < m.length; T++)
        C = f(p, m[T], y), C !== null && (h = i(C, h, T), E === null ? _ = C : E.sibling = C, E = C);
      return ie && En(p, T), _;
    }
    for (C = r(p, C); T < m.length; T++)
      D = g(C, p, T, m[T], y), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? T : D.key), h = i(D, h, T), E === null ? _ = D : E.sibling = D, E = D);
    return e && C.forEach(function(F) {
      return t(p, F);
    }), ie && En(p, T), _;
  }
  function v(p, h, m, y) {
    var _ = Fr(m);
    if (typeof _ != "function")
      throw Error(O(150));
    if (m = _.call(m), m == null)
      throw Error(O(151));
    for (var E = _ = null, C = h, T = h = 0, D = null, I = m.next(); C !== null && !I.done; T++, I = m.next()) {
      C.index > T ? (D = C, C = null) : D = C.sibling;
      var F = d(p, C, I.value, y);
      if (F === null) {
        C === null && (C = D);
        break;
      }
      e && C && F.alternate === null && t(p, C), h = i(F, h, T), E === null ? _ = F : E.sibling = F, E = F, C = D;
    }
    if (I.done)
      return n(
        p,
        C
      ), ie && En(p, T), _;
    if (C === null) {
      for (; !I.done; T++, I = m.next())
        I = f(p, I.value, y), I !== null && (h = i(I, h, T), E === null ? _ = I : E.sibling = I, E = I);
      return ie && En(p, T), _;
    }
    for (C = r(p, C); !I.done; T++, I = m.next())
      I = g(C, p, T, I.value, y), I !== null && (e && I.alternate !== null && C.delete(I.key === null ? T : I.key), h = i(I, h, T), E === null ? _ = I : E.sibling = I, E = I);
    return e && C.forEach(function(j) {
      return t(p, j);
    }), ie && En(p, T), _;
  }
  function N(p, h, m, y) {
    if (typeof m == "object" && m !== null && m.type === qn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ko:
          e: {
            for (var _ = m.key, E = h; E !== null; ) {
              if (E.key === _) {
                if (_ = m.type, _ === qn) {
                  if (E.tag === 7) {
                    n(p, E.sibling), h = o(E, m.props.children), h.return = p, p = h;
                    break e;
                  }
                } else if (E.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Ut && Tc(_) === E.type) {
                  n(p, E.sibling), h = o(E, m.props), h.ref = Ur(p, E, m), h.return = p, p = h;
                  break e;
                }
                n(p, E);
                break;
              } else
                t(p, E);
              E = E.sibling;
            }
            m.type === qn ? (h = Rn(m.props.children, p.mode, y, m.key), h.return = p, p = h) : (y = Pi(m.type, m.key, m.props, null, p.mode, y), y.ref = Ur(p, h, m), y.return = p, p = y);
          }
          return l(p);
        case Gn:
          e: {
            for (E = m.key; h !== null; ) {
              if (h.key === E)
                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                  n(p, h.sibling), h = o(h, m.children || []), h.return = p, p = h;
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else
                t(p, h);
              h = h.sibling;
            }
            h = cs(m, p.mode, y), h.return = p, p = h;
          }
          return l(p);
        case Ut:
          return E = m._init, N(p, h, E(m._payload), y);
      }
      if (Jr(m))
        return w(p, h, m, y);
      if (Fr(m))
        return v(p, h, m, y);
      oi(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = o(h, m), h.return = p, p = h) : (n(p, h), h = as(m, p.mode, y), h.return = p, p = h), l(p)) : n(p, h);
  }
  return N;
}
var Er = op(!0), ip = op(!1), jo = {}, _t = pn(jo), ko = pn(jo), No = pn(jo);
function Pn(e) {
  if (e === jo)
    throw Error(O(174));
  return e;
}
function oa(e, t) {
  switch (ee(No, t), ee(ko, e), ee(_t, jo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $s(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $s(t, e);
  }
  re(_t), ee(_t, t);
}
function kr() {
  re(_t), re(ko), re(No);
}
function lp(e) {
  Pn(No.current);
  var t = Pn(_t.current), n = $s(t, e.type);
  t !== n && (ee(ko, e), ee(_t, n));
}
function ia(e) {
  ko.current === e && (re(_t), re(ko));
}
var le = pn(0);
function Zi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var rs = [];
function la() {
  for (var e = 0; e < rs.length; e++)
    rs[e]._workInProgressVersionPrimary = null;
  rs.length = 0;
}
var Ei = Ot.ReactCurrentDispatcher, os = Ot.ReactCurrentBatchConfig, Ln = 0, se = null, me = null, we = null, Gi = !1, uo = !1, Co = 0, Qm = 0;
function ke() {
  throw Error(O(321));
}
function sa(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n]))
      return !1;
  return !0;
}
function ua(e, t, n, r, o, i) {
  if (Ln = i, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ei.current = e === null || e.memoizedState === null ? Jm : bm, e = n(r, o), uo) {
    i = 0;
    do {
      if (uo = !1, Co = 0, 25 <= i)
        throw Error(O(301));
      i += 1, we = me = null, t.updateQueue = null, Ei.current = ey, e = n(r, o);
    } while (uo);
  }
  if (Ei.current = qi, t = me !== null && me.next !== null, Ln = 0, we = me = se = null, Gi = !1, t)
    throw Error(O(300));
  return e;
}
function aa() {
  var e = Co !== 0;
  return Co = 0, e;
}
function vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return we === null ? se.memoizedState = we = e : we = we.next = e, we;
}
function nt() {
  if (me === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = me.next;
  var t = we === null ? se.memoizedState : we.next;
  if (t !== null)
    we = t, me = e;
  else {
    if (e === null)
      throw Error(O(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, we === null ? se.memoizedState = we = e : we = we.next = e;
  }
  return we;
}
function Mo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function is(e) {
  var t = nt(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = me, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, u = null, a = i;
    do {
      var c = a.lane;
      if ((Ln & c) === c)
        u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = f, l = r) : u = u.next = f, se.lanes |= c, In |= c;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? l = r : u.next = s, ht(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, se.lanes |= i, In |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ls(e) {
  var t = nt(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    ht(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function sp() {
}
function up(e, t) {
  var n = se, r = nt(), o = t(), i = !ht(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ie = !0), r = r.queue, ca(fp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
    if (n.flags |= 2048, Po(9, cp.bind(null, n, r, o, t), void 0, null), xe === null)
      throw Error(O(349));
    Ln & 30 || ap(n, t, o);
  }
  return o;
}
function ap(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, dp(t) && pp(e);
}
function fp(e, t, n) {
  return n(function() {
    dp(t) && pp(e);
  });
}
function dp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function pp(e) {
  var t = Dt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Rc(e) {
  var t = vt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mo, lastRenderedState: e }, t.queue = e, e = e.dispatch = qm.bind(null, se, e), [t.memoizedState, e];
}
function Po(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hp() {
  return nt().memoizedState;
}
function ki(e, t, n, r) {
  var o = vt();
  se.flags |= e, o.memoizedState = Po(1 | t, n, void 0, r === void 0 ? null : r);
}
function xl(e, t, n, r) {
  var o = nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var l = me.memoizedState;
    if (i = l.destroy, r !== null && sa(r, l.deps)) {
      o.memoizedState = Po(t, n, i, r);
      return;
    }
  }
  se.flags |= e, o.memoizedState = Po(1 | t, n, i, r);
}
function $c(e, t) {
  return ki(8390656, 8, e, t);
}
function ca(e, t) {
  return xl(2048, 8, e, t);
}
function gp(e, t) {
  return xl(4, 2, e, t);
}
function mp(e, t) {
  return xl(4, 4, e, t);
}
function yp(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function vp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xl(4, 4, yp.bind(null, t, e), n);
}
function fa() {
}
function wp(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xp(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Sp(e, t, n) {
  return Ln & 21 ? (ht(n, t) || (n = kd(), se.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function Zm(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = os.transition;
  os.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, os.transition = r;
  }
}
function _p() {
  return nt().memoizedState;
}
function Gm(e, t, n) {
  var r = on(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ep(e))
    kp(t, n);
  else if (n = ep(e, t, n, r), n !== null) {
    var o = Te();
    pt(n, e, r, o), Np(n, t, r);
  }
}
function qm(e, t, n) {
  var r = on(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ep(e))
    kp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, s = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = s, ht(s, l)) {
          var u = t.interleaved;
          u === null ? (o.next = o, na(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = ep(e, t, o, r), n !== null && (o = Te(), pt(n, e, r, o), Np(n, t, r));
  }
}
function Ep(e) {
  var t = e.alternate;
  return e === se || t !== null && t === se;
}
function kp(e, t) {
  uo = Gi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Np(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Vu(e, n);
  }
}
var qi = { readContext: tt, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, Jm = { readContext: tt, useCallback: function(e, t) {
  return vt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: tt, useEffect: $c, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ki(
    4194308,
    4,
    yp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ki(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ki(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = vt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = vt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gm.bind(null, se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = vt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Rc, useDebugValue: fa, useDeferredValue: function(e) {
  return vt().memoizedState = e;
}, useTransition: function() {
  var e = Rc(!1), t = e[0];
  return e = Zm.bind(null, e[1]), vt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = se, o = vt();
  if (ie) {
    if (n === void 0)
      throw Error(O(407));
    n = n();
  } else {
    if (n = t(), xe === null)
      throw Error(O(349));
    Ln & 30 || ap(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, $c(fp.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Po(9, cp.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = vt(), t = xe.identifierPrefix;
  if (ie) {
    var n = zt, r = Pt;
    n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Co++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Qm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bm = {
  readContext: tt,
  useCallback: wp,
  useContext: tt,
  useEffect: ca,
  useImperativeHandle: vp,
  useInsertionEffect: gp,
  useLayoutEffect: mp,
  useMemo: xp,
  useReducer: is,
  useRef: hp,
  useState: function() {
    return is(Mo);
  },
  useDebugValue: fa,
  useDeferredValue: function(e) {
    var t = nt();
    return Sp(t, me.memoizedState, e);
  },
  useTransition: function() {
    var e = is(Mo)[0], t = nt().memoizedState;
    return [e, t];
  },
  useMutableSource: sp,
  useSyncExternalStore: up,
  useId: _p,
  unstable_isNewReconciler: !1
}, ey = { readContext: tt, useCallback: wp, useContext: tt, useEffect: ca, useImperativeHandle: vp, useInsertionEffect: gp, useLayoutEffect: mp, useMemo: xp, useReducer: ls, useRef: hp, useState: function() {
  return ls(Mo);
}, useDebugValue: fa, useDeferredValue: function(e) {
  var t = nt();
  return me === null ? t.memoizedState = e : Sp(t, me.memoizedState, e);
}, useTransition: function() {
  var e = ls(Mo)[0], t = nt().memoizedState;
  return [e, t];
}, useMutableSource: sp, useSyncExternalStore: up, useId: _p, unstable_isNewReconciler: !1 };
function Nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Pg(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ty = typeof WeakMap == "function" ? WeakMap : Map;
function Cp(e, t, n) {
  n = Rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    bi || (bi = !0, fu = r), tu(e, t);
  }, n;
}
function Mp(e, t, n) {
  n = Rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      tu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    tu(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ty();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = gy.bind(null, e, t, n), t.then(e, e));
}
function Dc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rt(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e);
}
var ny = Ot.ReactCurrentOwner, Ie = !1;
function ze(e, t, n, r) {
  t.child = e === null ? ip(t, null, n, r) : Er(t, e.child, n, r);
}
function Ic(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return pr(t, o), r = ua(e, t, n, r, i, o), n = aa(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Lt(e, t, o)) : (ie && n && Gu(t), t.flags |= 1, ze(e, t, r, o), t.child);
}
function Oc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !wa(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Pp(e, t, i, r, o)) : (e = Pi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : xo, n(l, r) && e.ref === t.ref)
      return Lt(e, t, o);
  }
  return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xo(i, r) && e.ref === t.ref)
      if (Ie = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ie = !0);
      else
        return t.lanes = e.lanes, Lt(e, t, o);
  }
  return nu(e, t, n, r, o);
}
function zp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(sr, Ve), Ve |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(sr, Ve), Ve |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ee(sr, Ve), Ve |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ee(sr, Ve), Ve |= r;
  return ze(e, t, o, n), t.child;
}
function Tp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function nu(e, t, n, r, o) {
  var i = He(n) ? An : Me.current;
  return i = Sr(t, i), pr(t, o), n = ua(e, t, n, r, i, o), r = aa(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Lt(e, t, o)) : (ie && r && Gu(t), t.flags |= 1, ze(e, t, n, o), t.child);
}
function Fc(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    Ui(t);
  } else
    i = !1;
  if (pr(t, o), t.stateNode === null)
    Ni(e, t), rp(t, n, r), eu(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var u = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = tt(a) : (a = He(n) ? An : Me.current, a = Sr(t, a));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && zc(t, l, r, a), Wt = !1;
    var d = t.memoizedState;
    l.state = d, Qi(t, r, l, o), u = t.memoizedState, s !== r || d !== u || Fe.current || Wt ? (typeof c == "function" && (bs(t, n, c, r), u = t.memoizedState), (s = Wt || Pc(t, n, s, r, d, u, a)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, tp(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : st(t.type, s), l.props = a, f = t.pendingProps, d = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = tt(u) : (u = He(n) ? An : Me.current, u = Sr(t, u));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || d !== u) && zc(t, l, r, u), Wt = !1, d = t.memoizedState, l.state = d, Qi(t, r, l, o);
    var w = t.memoizedState;
    s !== f || d !== w || Fe.current || Wt ? (typeof g == "function" && (bs(t, n, g, r), w = t.memoizedState), (a = Wt || Pc(t, n, a, r, d, w, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), l.props = r, l.state = w, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ru(e, t, n, r, i, o);
}
function ru(e, t, n, r, o, i) {
  Tp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && Ec(t, n, !1), Lt(e, t, i);
  r = t.stateNode, ny.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Er(t, e.child, null, i), t.child = Er(t, null, s, i)) : ze(e, t, s, i), t.memoizedState = r.state, o && Ec(t, n, !0), t.child;
}
function Rp(e) {
  var t = e.stateNode;
  t.pendingContext ? _c(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _c(e, t.context, !1), oa(e, t.containerInfo);
}
function Hc(e, t, n, r, o) {
  return _r(), Ju(o), t.flags |= 256, ze(e, t, n, r), t.child;
}
var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
function iu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $p(e, t, n) {
  var r = t.pendingProps, o = le.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(le, o & 1), e === null)
    return qs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = El(l, r, 0, null), e = Rn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = iu(n), t.memoizedState = ou, e) : da(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return ry(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = ln(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = ln(s, i) : (i = Rn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? iu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ou, r;
  }
  return i = e.child, e = i.sibling, r = ln(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function da(e, t) {
  return t = El({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ii(e, t, n, r) {
  return r !== null && Ju(r), Er(t, e.child, null, n), e = da(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ry(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ss(Error(O(422))), ii(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = El({ mode: "visible", children: r.children }, o, 0, null), i = Rn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Er(t, e.child, null, l), t.child.memoizedState = iu(l), t.memoizedState = ou, i);
  if (!(t.mode & 1))
    return ii(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(O(419)), r = ss(i, r, void 0), ii(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Ie || s) {
    if (r = xe, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Dt(e, o), pt(r, e, o, -1));
    }
    return va(), r = ss(Error(O(421))), ii(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = my.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ue = tn(o.nextSibling), We = t, ie = !0, at = null, e !== null && (Ge[qe++] = Pt, Ge[qe++] = zt, Ge[qe++] = Dn, Pt = e.id, zt = e.overflow, Dn = t), t = da(t, r.children), t.flags |= 4096, t);
}
function Bc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Js(e.return, t, n);
}
function us(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ap(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ze(e, t, r.children, n), r = le.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Bc(e, n, t);
          else if (e.tag === 19)
            Bc(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (ee(le, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Zi(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), us(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Zi(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        us(t, !0, n, null, i);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ni(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Lt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function oy(e, t, n) {
  switch (t.tag) {
    case 3:
      Rp(t), _r();
      break;
    case 5:
      lp(t);
      break;
    case 1:
      He(t.type) && Ui(t);
      break;
    case 4:
      oa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ee(Xi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ee(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? $p(e, t, n) : (ee(le, le.current & 1), e = Lt(e, t, n), e !== null ? e.sibling : null);
      ee(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ap(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(le, le.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, zp(e, t, n);
  }
  return Lt(e, t, n);
}
var Dp, lu, Lp, Ip;
Dp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
lu = function() {
};
Lp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Pn(_t.current);
    var i = null;
    switch (n) {
      case "input":
        o = Ps(e, o), r = Ps(e, r), i = [];
        break;
      case "select":
        o = ue({}, o, { value: void 0 }), r = ue({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Rs(e, o), r = Rs(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ji);
    }
    As(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (l in s)
            s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (po.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null))
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in u)
              u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), n[l] = u[l]);
          } else
            n || (i || (i = []), i.push(
              a,
              n
            )), n = u;
        else
          a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (po.hasOwnProperty(a) ? (u != null && a === "onScroll" && ne("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ip = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wr(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function iy(e, t, n) {
  var r = t.pendingProps;
  switch (qu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return He(t.type) && Vi(), Ne(t), null;
    case 3:
      return r = t.stateNode, kr(), re(Fe), re(Me), la(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (hu(at), at = null))), lu(e, t), Ne(t), null;
    case 5:
      ia(t);
      var o = Pn(No.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Lp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(O(166));
          return Ne(t), null;
        }
        if (e = Pn(_t.current), ri(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[xt] = t, r[Eo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < eo.length; o++)
                ne(eo[o], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne(
                "error",
                r
              ), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Za(r, i), ne("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ne("invalid", r);
              break;
            case "textarea":
              qa(r, i), ne("invalid", r);
          }
          As(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ni(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ni(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : po.hasOwnProperty(l) && s != null && l === "onScroll" && ne("scroll", r);
            }
          switch (n) {
            case "input":
              Qo(r), Ga(r, i, !0);
              break;
            case "textarea":
              Qo(r), Ja(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ji);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ad(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[xt] = t, e[Eo] = r, Dp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Ds(n, r), n) {
              case "dialog":
                ne("cancel", e), ne("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < eo.length; o++)
                  ne(eo[o], e);
                o = r;
                break;
              case "source":
                ne("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ne(
                  "error",
                  e
                ), ne("load", e), o = r;
                break;
              case "details":
                ne("toggle", e), o = r;
                break;
              case "input":
                Za(e, r), o = Ps(e, r), ne("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ue({}, r, { value: void 0 }), ne("invalid", e);
                break;
              case "textarea":
                qa(e, r), o = Rs(e, r), ne("invalid", e);
                break;
              default:
                o = r;
            }
            As(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style" ? dd(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && cd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ho(e, u) : typeof u == "number" && ho(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (po.hasOwnProperty(i) ? u != null && i === "onScroll" && ne("scroll", e) : u != null && Iu(e, i, u, l));
              }
            switch (n) {
              case "input":
                Qo(e), Ga(e, r, !1);
                break;
              case "textarea":
                Qo(e), Ja(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ar(e, !!r.multiple, i, !1) : r.defaultValue != null && ar(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ji);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null)
        Ip(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(O(166));
        if (n = Pn(No.current), Pn(_t.current), ri(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[xt] = t, (i = r.nodeValue !== n) && (e = We, e !== null))
            switch (e.tag) {
              case 3:
                ni(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ni(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xt] = t, t.stateNode = r;
      }
      return Ne(t), null;
    case 13:
      if (re(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Ue !== null && t.mode & 1 && !(t.flags & 128))
          bd(), _r(), t.flags |= 98560, i = !1;
        else if (i = ri(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[xt] = t;
          } else
            _r(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ne(t), i = !1;
        } else
          at !== null && (hu(at), at = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ye === 0 && (ye = 3) : va())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
    case 4:
      return kr(), lu(e, t), e === null && So(t.stateNode.containerInfo), Ne(t), null;
    case 10:
      return ta(t.type._context), Ne(t), null;
    case 17:
      return He(t.type) && Vi(), Ne(t), null;
    case 19:
      if (re(le), i = t.memoizedState, i === null)
        return Ne(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Wr(i, !1);
        else {
          if (ye !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Zi(e), l !== null) {
                for (t.flags |= 128, Wr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return ee(le, le.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && fe() > Cr && (t.flags |= 128, r = !0, Wr(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Zi(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ie)
              return Ne(t), null;
          } else
            2 * fe() - i.renderingStartTime > Cr && n !== 1073741824 && (t.flags |= 128, r = !0, Wr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = fe(), t.sibling = null, n = le.current, ee(le, r ? n & 1 | 2 : n & 1), t) : (Ne(t), null);
    case 22:
    case 23:
      return ya(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ve & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function ly(e, t) {
  switch (qu(t), t.tag) {
    case 1:
      return He(t.type) && Vi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return kr(), re(Fe), re(Me), la(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ia(t), null;
    case 13:
      if (re(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        _r();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return re(le), null;
    case 4:
      return kr(), null;
    case 10:
      return ta(t.type._context), null;
    case 22:
    case 23:
      return ya(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var li = !1, Ce = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else
      n.current = null;
}
function su(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var jc = !1;
function uy(e, t) {
  if (Ws = Fi, e = Bd(), Zu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0, s = -1, u = -1, a = 0, c = 0, f = e, d = null;
          t:
            for (; ; ) {
              for (var g; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (u = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (g = f.firstChild) !== null; )
                d = f, f = g;
              for (; ; ) {
                if (f === e)
                  break t;
                if (d === n && ++a === o && (s = l), d === i && ++c === r && (u = l), (g = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = g;
            }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ys = { focusedElem: e, selectionRange: n }, Fi = !1, V = t; V !== null; )
    if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, V = e;
    else
      for (; V !== null; ) {
        t = V;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps, N = w.memoizedState, p = t.stateNode, h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : st(t.type, v), N);
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (y) {
          ae(t, t.return, y);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, V = e;
          break;
        }
        V = t.return;
      }
  return w = jc, jc = !1, w;
}
function ao(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && su(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Sl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Op(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Op(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xt], delete t[Eo], delete t[Qs], delete t[Wm], delete t[Ym])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vc(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fp(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ji));
  else if (r !== 4 && (e = e.child, e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; )
      au(e, t, n), e = e.sibling;
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; )
      cu(e, t, n), e = e.sibling;
}
var Se = null, ut = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; )
    Hp(e, t, n), n = n.sibling;
}
function Hp(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(pl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ce || lr(n, t);
    case 6:
      var r = Se, o = ut;
      Se = null, jt(e, t, n), Se = r, ut = o, Se !== null && (ut ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null && (ut ? (e = Se, n = n.stateNode, e.nodeType === 8 ? ts(e.parentNode, n) : e.nodeType === 1 && ts(e, n), vo(e)) : ts(Se, n.stateNode));
      break;
    case 4:
      r = Se, o = ut, Se = n.stateNode.containerInfo, ut = !0, jt(e, t, n), Se = r, ut = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && su(n, t, l), o = o.next;
        } while (o !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (!Ce && (lr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          ae(n, t, s);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, jt(e, t, n), Ce = r) : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function Uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sy()), t.forEach(function(r) {
      var o = yy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, l = t, s = l;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                Se = s.stateNode, ut = !1;
                break e;
              case 3:
                Se = s.stateNode.containerInfo, ut = !0;
                break e;
              case 4:
                Se = s.stateNode.containerInfo, ut = !0;
                break e;
            }
            s = s.return;
          }
        if (Se === null)
          throw Error(O(160));
        Hp(i, l, o), Se = null, ut = !1;
        var u = o.alternate;
        u !== null && (u.return = null), o.return = null;
      } catch (a) {
        ae(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Bp(t, e), t = t.sibling;
}
function Bp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (lt(t, e), yt(e), r & 4) {
        try {
          ao(3, e, e.return), Sl(3, e);
        } catch (v) {
          ae(e, e.return, v);
        }
        try {
          ao(5, e, e.return);
        } catch (v) {
          ae(e, e.return, v);
        }
      }
      break;
    case 1:
      lt(t, e), yt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (lt(t, e), yt(e), r & 512 && n !== null && lr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ho(o, "");
        } catch (v) {
          ae(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && sd(o, i), Ds(s, l);
            var a = Ds(s, i);
            for (l = 0; l < u.length; l += 2) {
              var c = u[l], f = u[l + 1];
              c === "style" ? dd(o, f) : c === "dangerouslySetInnerHTML" ? cd(o, f) : c === "children" ? ho(o, f) : Iu(o, c, f, a);
            }
            switch (s) {
              case "input":
                zs(o, i);
                break;
              case "textarea":
                ud(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? ar(o, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? ar(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ar(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Eo] = i;
          } catch (v) {
            ae(e, e.return, v);
          }
      }
      break;
    case 6:
      if (lt(t, e), yt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          ae(e, e.return, v);
        }
      }
      break;
    case 3:
      if (lt(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          vo(t.containerInfo);
        } catch (v) {
          ae(e, e.return, v);
        }
      break;
    case 4:
      lt(t, e), yt(e);
      break;
    case 13:
      lt(t, e), yt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ga = fe())), r & 4 && Uc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (a = Ce) || c, lt(t, e), Ce = a) : lt(t, e), yt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1)
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (d = V, g = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ao(4, d, d.return);
                  break;
                case 1:
                  lr(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (v) {
                      ae(r, n, v);
                    }
                  }
                  break;
                case 5:
                  lr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Yc(f);
                    continue;
                  }
              }
              g !== null ? (g.return = d, V = g) : Yc(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  o = f.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, u = f.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = fd("display", l));
                } catch (v) {
                  ae(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = a ? "" : f.memoizedProps;
                } catch (v) {
                  ae(e, e.return, v);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e)
                break e;
              c === f && (c = null), f = f.return;
            }
            c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      lt(t, e), yt(e), r & 4 && Uc(e);
      break;
    case 21:
      break;
    default:
      lt(
        t,
        e
      ), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ho(o, ""), r.flags &= -33);
          var i = Vc(e);
          cu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = Vc(e);
          au(e, s, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (u) {
      ae(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ay(e, t, n) {
  V = e, jp(e);
}
function jp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || li;
      if (!l) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Ce;
        s = li;
        var a = Ce;
        if (li = l, (Ce = u) && !a)
          for (V = o; V !== null; )
            l = V, u = l.child, l.tag === 22 && l.memoizedState !== null ? Xc(o) : u !== null ? (u.return = l, V = u) : Xc(o);
        for (; i !== null; )
          V = i, jp(i), i = i.sibling;
        V = o, li = s, Ce = a;
      }
      Wc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, V = i) : Wc(e);
  }
}
function Wc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Mc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && vo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ce || t.flags & 512 && uu(t);
      } catch (d) {
        ae(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Yc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, V = n;
      break;
    }
    V = t.return;
  }
}
function Xc(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (u) {
            ae(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ae(t, o, u);
            }
          }
          var i = t.return;
          try {
            uu(t);
          } catch (u) {
            ae(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            uu(t);
          } catch (u) {
            ae(t, l, u);
          }
      }
    } catch (u) {
      ae(t, t.return, u);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, V = s;
      break;
    }
    V = t.return;
  }
}
var cy = Math.ceil, Ji = Ot.ReactCurrentDispatcher, pa = Ot.ReactCurrentOwner, et = Ot.ReactCurrentBatchConfig, q = 0, xe = null, ge = null, _e = 0, Ve = 0, sr = pn(0), ye = 0, zo = null, In = 0, _l = 0, ha = 0, co = null, Le = null, ga = 0, Cr = 1 / 0, Ct = null, bi = !1, fu = null, rn = null, si = !1, qt = null, el = 0, fo = 0, du = null, Ci = -1, Mi = 0;
function Te() {
  return q & 6 ? fe() : Ci !== -1 ? Ci : Ci = fe();
}
function on(e) {
  return e.mode & 1 ? q & 2 && _e !== 0 ? _e & -_e : Km.transition !== null ? (Mi === 0 && (Mi = kd()), Mi) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Rd(e.type)), e) : 1;
}
function pt(e, t, n, r) {
  if (50 < fo)
    throw fo = 0, du = null, Error(O(185));
  Fo(e, n, r), (!(q & 2) || e !== xe) && (e === xe && (!(q & 2) && (_l |= n), ye === 4 && Qt(e, _e)), Be(e, r), n === 1 && q === 0 && !(t.mode & 1) && (Cr = fe() + 500, vl && hn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Kg(e, t);
  var r = Oi(e, e === xe ? _e : 0);
  if (r === 0)
    n !== null && tc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && tc(n), t === 1)
      e.tag === 0 ? Xm(Kc.bind(null, e)) : Gd(Kc.bind(null, e)), Vm(function() {
        !(q & 6) && hn();
      }), n = null;
    else {
      switch (Nd(r)) {
        case 1:
          n = ju;
          break;
        case 4:
          n = _d;
          break;
        case 16:
          n = Ii;
          break;
        case 536870912:
          n = Ed;
          break;
        default:
          n = Ii;
      }
      n = Zp(n, Vp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vp(e, t) {
  if (Ci = -1, Mi = 0, q & 6)
    throw Error(O(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n)
    return null;
  var r = Oi(e, e === xe ? _e : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = tl(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = Wp();
    (xe !== e || _e !== t) && (Ct = null, Cr = fe() + 500, Tn(e, t));
    do
      try {
        py();
        break;
      } catch (s) {
        Up(e, s);
      }
    while (1);
    ea(), Ji.current = i, q = o, ge !== null ? t = 0 : (xe = null, _e = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (o = Hs(e), o !== 0 && (r = o, t = pu(e, o))), t === 1)
      throw n = zo, Tn(e, 0), Qt(e, r), Be(e, fe()), n;
    if (t === 6)
      Qt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !fy(o) && (t = tl(e, r), t === 2 && (i = Hs(e), i !== 0 && (r = i, t = pu(e, i))), t === 1))
        throw n = zo, Tn(e, 0), Qt(e, r), Be(e, fe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          kn(e, Le, Ct);
          break;
        case 3:
          if (Qt(e, r), (r & 130023424) === r && (t = ga + 500 - fe(), 10 < t)) {
            if (Oi(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Te(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ks(kn.bind(null, e, Le, Ct), t);
            break;
          }
          kn(e, Le, Ct);
          break;
        case 4:
          if (Qt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - dt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ks(kn.bind(null, e, Le, Ct), r);
            break;
          }
          kn(e, Le, Ct);
          break;
        case 5:
          kn(e, Le, Ct);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Be(e, fe()), e.callbackNode === n ? Vp.bind(null, e) : null;
}
function pu(e, t) {
  var n = co;
  return e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256), e = tl(e, t), e !== 2 && (t = Le, Le = n, t !== null && hu(t)), e;
}
function hu(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function fy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Qt(e, t) {
  for (t &= ~ha, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Kc(e) {
  if (q & 6)
    throw Error(O(327));
  hr();
  var t = Oi(e, 0);
  if (!(t & 1))
    return Be(e, fe()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hs(e);
    r !== 0 && (t = r, n = pu(e, r));
  }
  if (n === 1)
    throw n = zo, Tn(e, 0), Qt(e, t), Be(e, fe()), n;
  if (n === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, Le, Ct), Be(e, fe()), null;
}
function ma(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    q = n, q === 0 && (Cr = fe() + 500, vl && hn());
  }
}
function On(e) {
  qt !== null && qt.tag === 0 && !(q & 6) && hr();
  var t = q;
  q |= 1;
  var n = et.transition, r = b;
  try {
    if (et.transition = null, b = 1, e)
      return e();
  } finally {
    b = r, et.transition = n, q = t, !(q & 6) && hn();
  }
}
function ya() {
  Ve = sr.current, re(sr);
}
function Tn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, jm(n)), ge !== null)
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch (qu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vi();
          break;
        case 3:
          kr(), re(Fe), re(Me), la();
          break;
        case 5:
          ia(r);
          break;
        case 4:
          kr();
          break;
        case 13:
          re(le);
          break;
        case 19:
          re(le);
          break;
        case 10:
          ta(r.type._context);
          break;
        case 22:
        case 23:
          ya();
      }
      n = n.return;
    }
  if (xe = e, ge = e = ln(e.current, null), _e = Ve = t, ye = 0, zo = null, ha = _l = In = 0, Le = co = null, Mn !== null) {
    for (t = 0; t < Mn.length; t++)
      if (n = Mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    Mn = null;
  }
  return e;
}
function Up(e, t) {
  do {
    var n = ge;
    try {
      if (ea(), Ei.current = qi, Gi) {
        for (var r = se.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Gi = !1;
      }
      if (Ln = 0, we = me = se = null, uo = !1, Co = 0, pa.current = null, n === null || n.return === null) {
        ye = 1, zo = t, ge = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, u = t;
        if (t = _e, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, c = s, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = Dc(l);
          if (g !== null) {
            g.flags &= -257, Lc(g, l, s, i, t), g.mode & 1 && Ac(i, a, t), t = g, u = a;
            var w = t.updateQueue;
            if (w === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(u), t.updateQueue = v;
            } else
              w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ac(i, a, t), va();
              break e;
            }
            u = Error(O(426));
          }
        } else if (ie && s.mode & 1) {
          var N = Dc(l);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), Lc(N, l, s, i, t), Ju(Nr(u, s));
            break e;
          }
        }
        i = u = Nr(u, s), ye !== 4 && (ye = 2), co === null ? co = [i] : co.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Cp(i, u, t);
              Cc(i, p);
              break e;
            case 1:
              s = u;
              var h = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (rn === null || !rn.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var y = Mp(i, s, t);
                Cc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xp(n);
    } catch (_) {
      t = _, ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Wp() {
  var e = Ji.current;
  return Ji.current = qi, e === null ? qi : e;
}
function va() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), xe === null || !(In & 268435455) && !(_l & 268435455) || Qt(xe, _e);
}
function tl(e, t) {
  var n = q;
  q |= 2;
  var r = Wp();
  (xe !== e || _e !== t) && (Ct = null, Tn(e, t));
  do
    try {
      dy();
      break;
    } catch (o) {
      Up(e, o);
    }
  while (1);
  if (ea(), q = n, Ji.current = r, ge !== null)
    throw Error(O(261));
  return xe = null, _e = 0, ye;
}
function dy() {
  for (; ge !== null; )
    Yp(ge);
}
function py() {
  for (; ge !== null && !Fg(); )
    Yp(ge);
}
function Yp(e) {
  var t = Qp(e.alternate, e, Ve);
  e.memoizedProps = e.pendingProps, t === null ? Xp(e) : ge = t, pa.current = null;
}
function Xp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ly(n, t), n !== null) {
        n.flags &= 32767, ge = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ye = 6, ge = null;
        return;
      }
    } else if (n = iy(n, t, Ve), n !== null) {
      ge = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function kn(e, t, n) {
  var r = b, o = et.transition;
  try {
    et.transition = null, b = 1, hy(e, t, n, r);
  } finally {
    et.transition = o, b = r;
  }
  return null;
}
function hy(e, t, n, r) {
  do
    hr();
  while (qt !== null);
  if (q & 6)
    throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Qg(e, i), e === xe && (ge = xe = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || si || (si = !0, Zp(Ii, function() {
    return hr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = et.transition, et.transition = null;
    var l = b;
    b = 1;
    var s = q;
    q |= 4, pa.current = null, uy(e, n), Bp(n, e), Dm(Ys), Fi = !!Ws, Ys = Ws = null, e.current = n, ay(n), Hg(), q = s, b = l, et.transition = i;
  } else
    e.current = n;
  if (si && (si = !1, qt = e, el = o), i = e.pendingLanes, i === 0 && (rn = null), Vg(n.stateNode), Be(e, fe()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bi)
    throw bi = !1, e = fu, fu = null, e;
  return el & 1 && e.tag !== 0 && hr(), i = e.pendingLanes, i & 1 ? e === du ? fo++ : (fo = 0, du = e) : fo = 0, hn(), null;
}
function hr() {
  if (qt !== null) {
    var e = Nd(el), t = et.transition, n = b;
    try {
      if (et.transition = null, b = 16 > e ? 16 : e, qt === null)
        var r = !1;
      else {
        if (e = qt, qt = null, el = 0, q & 6)
          throw Error(O(331));
        var o = q;
        for (q |= 4, V = e.current; V !== null; ) {
          var i = V, l = i.child;
          if (V.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (V = a; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, V = f;
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling, g = c.return;
                      if (Op(c), c === a) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = g, V = d;
                        break;
                      }
                      V = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var N = v.sibling;
                    v.sibling = null, v = N;
                  } while (v !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null)
            l.return = i, V = l;
          else
            e:
              for (; V !== null; ) {
                if (i = V, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(9, i, i.return);
                  }
                var p = i.sibling;
                if (p !== null) {
                  p.return = i.return, V = p;
                  break e;
                }
                V = i.return;
              }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          l = V;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null)
            m.return = l, V = m;
          else
            e:
              for (l = h; V !== null; ) {
                if (s = V, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Sl(9, s);
                    }
                  } catch (_) {
                    ae(s, s.return, _);
                  }
                if (s === l) {
                  V = null;
                  break e;
                }
                var y = s.sibling;
                if (y !== null) {
                  y.return = s.return, V = y;
                  break e;
                }
                V = s.return;
              }
        }
        if (q = o, hn(), St && typeof St.onPostCommitFiberRoot == "function")
          try {
            St.onPostCommitFiberRoot(pl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      b = n, et.transition = t;
    }
  }
  return !1;
}
function Qc(e, t, n) {
  t = Nr(n, t), t = Cp(e, t, 1), e = nn(e, t, 1), t = Te(), e !== null && (Fo(e, 1, t), Be(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3)
    Qc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
          e = Nr(n, e), e = Mp(t, e, 1), t = nn(t, e, 1), e = Te(), t !== null && (Fo(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Te(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (_e & n) === n && (ye === 4 || ye === 3 && (_e & 130023424) === _e && 500 > fe() - ga ? Tn(e, 0) : ha |= n), Be(e, t);
}
function Kp(e, t) {
  t === 0 && (e.mode & 1 ? (t = qo, qo <<= 1, !(qo & 130023424) && (qo = 4194304)) : t = 1);
  var n = Te();
  e = Dt(e, t), e !== null && (Fo(e, t, n), Be(e, n));
}
function my(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kp(e, n);
}
function yy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Kp(e, n);
}
var Qp;
Qp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current)
      Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ie = !1, oy(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else
    Ie = !1, ie && t.flags & 1048576 && qd(t, Yi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ni(e, t), e = t.pendingProps;
      var o = Sr(t, Me.current);
      pr(t, n), o = ua(null, t, r, e, o, n);
      var i = aa();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (i = !0, Ui(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ra(t), o.updater = wl, t.stateNode = o, o._reactInternals = t, eu(t, r, e, n), t = ru(null, t, r, !0, i, n)) : (t.tag = 0, ie && i && Gu(t), ze(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ni(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = wy(r), e = st(r, e), o) {
          case 0:
            t = nu(null, t, r, e, n);
            break e;
          case 1:
            t = Fc(null, t, r, e, n);
            break e;
          case 11:
            t = Ic(null, t, r, e, n);
            break e;
          case 14:
            t = Oc(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), nu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), Fc(e, t, r, o, n);
    case 3:
      e: {
        if (Rp(t), e === null)
          throw Error(O(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, tp(e, t), Qi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Nr(Error(O(423)), t), t = Hc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Nr(Error(O(424)), t), t = Hc(e, t, r, n, o);
            break e;
          } else
            for (Ue = tn(t.stateNode.containerInfo.firstChild), We = t, ie = !0, at = null, n = ip(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_r(), r === o) {
            t = Lt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return lp(t), e === null && qs(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Xs(r, o) ? l = null : i !== null && Xs(r, i) && (t.flags |= 32), Tp(e, t), ze(e, t, l, n), t.child;
    case 6:
      return e === null && qs(t), null;
    case 13:
      return $p(e, t, n);
    case 4:
      return oa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Er(t, null, r, n) : ze(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), Ic(e, t, r, o, n);
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, ee(Xi, r._currentValue), r._currentValue = l, i !== null)
          if (ht(i.value, l)) {
            if (i.children === o.children && !Fe.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      u = Rt(-1, n & -n), u.tag = 2;
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
                      }
                    }
                    i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Js(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10)
                l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (l = i.return, l === null)
                  throw Error(O(341));
                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Js(l, n, t), l = i.sibling;
              } else
                l = i.child;
              if (l !== null)
                l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (i = l.sibling, i !== null) {
                    i.return = l.return, l = i;
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ze(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, pr(t, n), o = tt(o), r = r(o), t.flags |= 1, ze(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = st(r, t.pendingProps), o = st(r.type, o), Oc(e, t, r, o, n);
    case 15:
      return Pp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), Ni(e, t), t.tag = 1, He(r) ? (e = !0, Ui(t)) : e = !1, pr(t, n), rp(t, r, o), eu(t, r, o, n), ru(null, t, r, !0, e, n);
    case 19:
      return Ap(e, t, n);
    case 22:
      return zp(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Zp(e, t) {
  return Sd(e, t);
}
function vy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Je(e, t, n, r) {
  return new vy(e, t, n, r);
}
function wa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wy(e) {
  if (typeof e == "function")
    return wa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Fu)
      return 11;
    if (e === Hu)
      return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Pi(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    wa(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case qn:
          return Rn(n.children, o, i, t);
        case Ou:
          l = 8, o |= 8;
          break;
        case ks:
          return e = Je(12, n, t, o | 2), e.elementType = ks, e.lanes = i, e;
        case Ns:
          return e = Je(13, n, t, o), e.elementType = Ns, e.lanes = i, e;
        case Cs:
          return e = Je(19, n, t, o), e.elementType = Cs, e.lanes = i, e;
        case od:
          return El(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case nd:
                l = 10;
                break e;
              case rd:
                l = 9;
                break e;
              case Fu:
                l = 11;
                break e;
              case Hu:
                l = 14;
                break e;
              case Ut:
                l = 16, r = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Je(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Rn(e, t, n, r) {
  return e = Je(7, e, r, t), e.lanes = n, e;
}
function El(e, t, n, r) {
  return e = Je(22, e, r, t), e.elementType = od, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function as(e, t, n) {
  return e = Je(6, e, null, t), e.lanes = n, e;
}
function cs(e, t, n) {
  return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function xa(e, t, n, r, o, i, l, s, u) {
  return e = new xy(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ra(i), e;
}
function Sy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Gn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Gp(e) {
  if (!e)
    return cn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n))
      return Zd(e, n, t);
  }
  return t;
}
function qp(e, t, n, r, o, i, l, s, u) {
  return e = xa(n, r, !0, e, o, i, l, s, u), e.context = Gp(null), n = e.current, r = Te(), o = on(n), i = Rt(r, o), i.callback = t ?? null, nn(n, i, o), e.current.lanes = o, Fo(e, o, r), Be(e, r), e;
}
function kl(e, t, n, r) {
  var o = t.current, i = Te(), l = on(o);
  return n = Gp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(o, t, l), e !== null && (pt(e, o, l, i), _i(e, o, l)), l;
}
function nl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sa(e, t) {
  Zc(e, t), (e = e.alternate) && Zc(e, t);
}
function _y() {
  return null;
}
var Jp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function _a(e) {
  this._internalRoot = e;
}
Nl.prototype.render = _a.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  kl(e, t, null, null);
};
Nl.prototype.unmount = _a.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function() {
      kl(null, e, null, null);
    }), t[At] = null;
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Pd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++)
      ;
    Kt.splice(n, 0, e), n === 0 && Td(e);
  }
};
function Ea(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Gc() {
}
function Ey(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = nl(l);
        i.call(a);
      };
    }
    var l = qp(t, r, e, 0, null, !1, !1, "", Gc);
    return e._reactRootContainer = l, e[At] = l.current, So(e.nodeType === 8 ? e.parentNode : e), On(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = nl(u);
      s.call(a);
    };
  }
  var u = xa(e, 0, !1, null, null, !1, !1, "", Gc);
  return e._reactRootContainer = u, e[At] = u.current, So(e.nodeType === 8 ? e.parentNode : e), On(function() {
    kl(t, u, n, r);
  }), u;
}
function Ml(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = nl(l);
        s.call(u);
      };
    }
    kl(t, l, e, o);
  } else
    l = Ey(n, t, e, o, r);
  return nl(l);
}
Cd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = br(t.pendingLanes);
        n !== 0 && (Vu(t, n | 1), Be(t, fe()), !(q & 6) && (Cr = fe() + 500, hn()));
      }
      break;
    case 13:
      On(function() {
        var r = Dt(e, 1);
        if (r !== null) {
          var o = Te();
          pt(r, e, 1, o);
        }
      }), Sa(e, 1);
  }
};
Uu = function(e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Te();
      pt(t, e, 134217728, n);
    }
    Sa(e, 134217728);
  }
};
Md = function(e) {
  if (e.tag === 13) {
    var t = on(e), n = Dt(e, t);
    if (n !== null) {
      var r = Te();
      pt(n, e, t, r);
    }
    Sa(e, t);
  }
};
Pd = function() {
  return b;
};
zd = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
Is = function(e, t, n) {
  switch (t) {
    case "input":
      if (zs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = yl(r);
            if (!o)
              throw Error(O(90));
            ld(r), zs(r, o);
          }
        }
      }
      break;
    case "textarea":
      ud(e, n);
      break;
    case "select":
      t = n.value, t != null && ar(e, !!n.multiple, t, !1);
  }
};
gd = ma;
md = On;
var ky = { usingClientEntryPoint: !1, Events: [Bo, tr, yl, pd, hd, ma] }, Yr = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ny = { bundleType: Yr.bundleType, version: Yr.version, rendererPackageName: Yr.rendererPackageName, rendererConfig: Yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = wd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yr.findFiberByHostInstance || _y, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ui.isDisabled && ui.supportsFiber)
    try {
      pl = ui.inject(Ny), St = ui;
    } catch {
    }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ky;
Ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ea(t))
    throw Error(O(200));
  return Sy(e, t, null, n);
};
Ke.createRoot = function(e, t) {
  if (!Ea(e))
    throw Error(O(299));
  var n = !1, r = "", o = Jp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = xa(e, 1, !1, null, null, n, !1, r, o), e[At] = t.current, So(e.nodeType === 8 ? e.parentNode : e), new _a(t);
};
Ke.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = wd(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return On(e);
};
Ke.hydrate = function(e, t, n) {
  if (!Cl(t))
    throw Error(O(200));
  return Ml(null, e, t, !0, n);
};
Ke.hydrateRoot = function(e, t, n) {
  if (!Ea(e))
    throw Error(O(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Jp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = qp(t, null, e, 1, n ?? null, o, !1, i, l), e[At] = t.current, So(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Nl(t);
};
Ke.render = function(e, t, n) {
  if (!Cl(t))
    throw Error(O(200));
  return Ml(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function(e) {
  if (!Cl(e))
    throw Error(O(40));
  return e._reactRootContainer ? (On(function() {
    Ml(null, null, e, !1, function() {
      e._reactRootContainer = null, e[At] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = ma;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cl(n))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return Ml(e, t, n, !1, r);
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";
function bp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
    } catch (e) {
      console.error(e);
    }
}
bp(), qf.exports = Ke;
var Cy = qf.exports, qc = Cy;
_s.createRoot = qc.createRoot, _s.hydrateRoot = qc.hydrateRoot;
function rt(e) {
  if (typeof e == "string" || typeof e == "number")
    return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = rt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
const Jc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, a) => {
    const c = typeof u == "function" ? u(t) : u;
    if (!Object.is(c, t)) {
      const f = t;
      t = a ?? typeof c != "object" ? c : Object.assign({}, t, c), n.forEach((d) => d(t, f));
    }
  }, o = () => t, s = { setState: r, getState: o, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, s), s;
}, My = (e) => e ? Jc(e) : Jc;
var eh = { exports: {} }, th = {}, nh = { exports: {} }, rh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr = R;
function Py(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zy = typeof Object.is == "function" ? Object.is : Py, Ty = Mr.useState, Ry = Mr.useEffect, $y = Mr.useLayoutEffect, Ay = Mr.useDebugValue;
function Dy(e, t) {
  var n = t(), r = Ty({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return $y(function() {
    o.value = n, o.getSnapshot = t, fs(o) && i({ inst: o });
  }, [e, n, t]), Ry(function() {
    return fs(o) && i({ inst: o }), e(function() {
      fs(o) && i({ inst: o });
    });
  }, [e]), Ay(n), n;
}
function fs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zy(e, n);
  } catch {
    return !0;
  }
}
function Ly(e, t) {
  return t();
}
var Iy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Ly : Dy;
rh.useSyncExternalStore = Mr.useSyncExternalStore !== void 0 ? Mr.useSyncExternalStore : Iy;
nh.exports = rh;
var Oy = nh.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl = R, Fy = Oy;
function Hy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var By = typeof Object.is == "function" ? Object.is : Hy, jy = Fy.useSyncExternalStore, Vy = Pl.useRef, Uy = Pl.useEffect, Wy = Pl.useMemo, Yy = Pl.useDebugValue;
th.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Vy(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else
    l = i.current;
  i = Wy(function() {
    function u(g) {
      if (!a) {
        if (a = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
          var w = l.value;
          if (o(w, g))
            return f = w;
        }
        return f = g;
      }
      if (w = f, By(c, g))
        return w;
      var v = r(g);
      return o !== void 0 && o(w, v) ? w : (c = g, f = v);
    }
    var a = !1, c, f, d = n === void 0 ? null : n;
    return [function() {
      return u(t());
    }, d === null ? void 0 : function() {
      return u(d());
    }];
  }, [t, n, r, o]);
  var s = jy(e, i[0], i[1]);
  return Uy(function() {
    l.hasValue = !0, l.value = s;
  }, [s]), Yy(s), s;
};
eh.exports = th;
var Xy = eh.exports;
const Ky = /* @__PURE__ */ Bf(Xy), { useSyncExternalStoreWithSelector: Qy } = Ky;
function Zy(e, t = e.getState, n) {
  const r = Qy(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return R.useDebugValue(r), r;
}
function je(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size)
      return !1;
    for (const [r, o] of e)
      if (!Object.is(o, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size)
      return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]]))
      return !1;
  return !0;
}
var Gy = { value: () => {
} };
function zl() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new zi(n);
}
function zi(e) {
  this._ = e;
}
function qy(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
zi.prototype = zl.prototype = {
  constructor: zi,
  on: function(e, t) {
    var n = this._, r = qy(e + "", n), o, i = -1, l = r.length;
    if (arguments.length < 2) {
      for (; ++i < l; )
        if ((o = (e = r[i]).type) && (o = Jy(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < l; )
      if (o = (e = r[i]).type)
        n[o] = bc(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = bc(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new zi(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, i; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r)
      i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  }
};
function Jy(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function bc(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gy, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var gu = "http://www.w3.org/1999/xhtml";
const ef = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: gu,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Tl(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ef.hasOwnProperty(t) ? { space: ef[t], local: e } : e;
}
function by(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === gu && t.documentElement.namespaceURI === gu ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function ev(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function oh(e) {
  var t = Tl(e);
  return (t.local ? ev : by)(t);
}
function tv() {
}
function ka(e) {
  return e == null ? tv : function() {
    return this.querySelector(e);
  };
}
function nv(e) {
  typeof e != "function" && (e = ka(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = r[o] = new Array(l), u, a, c = 0; c < l; ++c)
      (u = i[c]) && (a = e.call(u, u.__data__, c, i)) && ("__data__" in u && (a.__data__ = u.__data__), s[c] = a);
  return new Xe(r, this._parents);
}
function rv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ov() {
  return [];
}
function ih(e) {
  return e == null ? ov : function() {
    return this.querySelectorAll(e);
  };
}
function iv(e) {
  return function() {
    return rv(e.apply(this, arguments));
  };
}
function lv(e) {
  typeof e == "function" ? e = iv(e) : e = ih(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var l = t[i], s = l.length, u, a = 0; a < s; ++a)
      (u = l[a]) && (r.push(e.call(u, u.__data__, a, l)), o.push(u));
  return new Xe(r, o);
}
function lh(e) {
  return function() {
    return this.matches(e);
  };
}
function sh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var sv = Array.prototype.find;
function uv(e) {
  return function() {
    return sv.call(this.children, e);
  };
}
function av() {
  return this.firstElementChild;
}
function cv(e) {
  return this.select(e == null ? av : uv(typeof e == "function" ? e : sh(e)));
}
var fv = Array.prototype.filter;
function dv() {
  return Array.from(this.children);
}
function pv(e) {
  return function() {
    return fv.call(this.children, e);
  };
}
function hv(e) {
  return this.selectAll(e == null ? dv : pv(typeof e == "function" ? e : sh(e)));
}
function gv(e) {
  typeof e != "function" && (e = lh(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = r[o] = [], u, a = 0; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && s.push(u);
  return new Xe(r, this._parents);
}
function uh(e) {
  return new Array(e.length);
}
function mv() {
  return new Xe(this._enter || this._groups.map(uh), this._parents);
}
function rl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
rl.prototype = {
  constructor: rl,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function yv(e) {
  return function() {
    return e;
  };
}
function vv(e, t, n, r, o, i) {
  for (var l = 0, s, u = t.length, a = i.length; l < a; ++l)
    (s = t[l]) ? (s.__data__ = i[l], r[l] = s) : n[l] = new rl(e, i[l]);
  for (; l < u; ++l)
    (s = t[l]) && (o[l] = s);
}
function wv(e, t, n, r, o, i, l) {
  var s, u, a = /* @__PURE__ */ new Map(), c = t.length, f = i.length, d = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = t[s]) && (d[s] = g = l.call(u, u.__data__, s, t) + "", a.has(g) ? o[s] = u : a.set(g, u));
  for (s = 0; s < f; ++s)
    g = l.call(e, i[s], s, i) + "", (u = a.get(g)) ? (r[s] = u, u.__data__ = i[s], a.delete(g)) : n[s] = new rl(e, i[s]);
  for (s = 0; s < c; ++s)
    (u = t[s]) && a.get(d[s]) === u && (o[s] = u);
}
function xv(e) {
  return e.__data__;
}
function Sv(e, t) {
  if (!arguments.length)
    return Array.from(this, xv);
  var n = t ? wv : vv, r = this._parents, o = this._groups;
  typeof e != "function" && (e = yv(e));
  for (var i = o.length, l = new Array(i), s = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var c = r[a], f = o[a], d = f.length, g = _v(e.call(c, c && c.__data__, a, r)), w = g.length, v = s[a] = new Array(w), N = l[a] = new Array(w), p = u[a] = new Array(d);
    n(c, f, v, N, p, g, t);
    for (var h = 0, m = 0, y, _; h < w; ++h)
      if (y = v[h]) {
        for (h >= m && (m = h + 1); !(_ = N[m]) && ++m < w; )
          ;
        y._next = _ || null;
      }
  }
  return l = new Xe(l, r), l._enter = s, l._exit = u, l;
}
function _v(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ev() {
  return new Xe(this._exit || this._groups.map(uh), this._parents);
}
function kv(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Nv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, l = Math.min(o, i), s = new Array(o), u = 0; u < l; ++u)
    for (var a = n[u], c = r[u], f = a.length, d = s[u] = new Array(f), g, w = 0; w < f; ++w)
      (g = a[w] || c[w]) && (d[w] = g);
  for (; u < o; ++u)
    s[u] = n[u];
  return new Xe(s, this._parents);
}
function Cv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], l; --o >= 0; )
      (l = r[o]) && (i && l.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(l, i), i = l);
  return this;
}
function Mv(e) {
  e || (e = Pv);
  function t(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var l = n[i], s = l.length, u = o[i] = new Array(s), a, c = 0; c < s; ++c)
      (a = l[c]) && (u[c] = a);
    u.sort(t);
  }
  return new Xe(o, this._parents).order();
}
function Pv(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function zv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Tv() {
  return Array.from(this);
}
function Rv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var l = r[o];
      if (l)
        return l;
    }
  return null;
}
function $v() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Av() {
  return !this.node();
}
function Dv(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, l = o.length, s; i < l; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function Lv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Iv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ov(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Fv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Hv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Bv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function jv(e, t) {
  var n = Tl(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Iv : Lv : typeof t == "function" ? n.local ? Bv : Hv : n.local ? Fv : Ov)(n, t));
}
function ah(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Vv(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Uv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Wv(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Yv(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Vv : typeof t == "function" ? Wv : Uv)(e, t, n ?? "")) : Pr(this.node(), e);
}
function Pr(e, t) {
  return e.style.getPropertyValue(t) || ah(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Xv(e) {
  return function() {
    delete this[e];
  };
}
function Kv(e, t) {
  return function() {
    this[e] = t;
  };
}
function Qv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Zv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Xv : typeof t == "function" ? Qv : Kv)(e, t)) : this.node()[e];
}
function ch(e) {
  return e.trim().split(/^|\s+/);
}
function Na(e) {
  return e.classList || new fh(e);
}
function fh(e) {
  this._node = e, this._names = ch(e.getAttribute("class") || "");
}
fh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function dh(e, t) {
  for (var n = Na(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function ph(e, t) {
  for (var n = Na(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function Gv(e) {
  return function() {
    dh(this, e);
  };
}
function qv(e) {
  return function() {
    ph(this, e);
  };
}
function Jv(e, t) {
  return function() {
    (t.apply(this, arguments) ? dh : ph)(this, e);
  };
}
function bv(e, t) {
  var n = ch(e + "");
  if (arguments.length < 2) {
    for (var r = Na(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Jv : t ? Gv : qv)(n, t));
}
function e1() {
  this.textContent = "";
}
function t1(e) {
  return function() {
    this.textContent = e;
  };
}
function n1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function r1(e) {
  return arguments.length ? this.each(e == null ? e1 : (typeof e == "function" ? n1 : t1)(e)) : this.node().textContent;
}
function o1() {
  this.innerHTML = "";
}
function i1(e) {
  return function() {
    this.innerHTML = e;
  };
}
function l1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function s1(e) {
  return arguments.length ? this.each(e == null ? o1 : (typeof e == "function" ? l1 : i1)(e)) : this.node().innerHTML;
}
function u1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function a1() {
  return this.each(u1);
}
function c1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function f1() {
  return this.each(c1);
}
function d1(e) {
  var t = typeof e == "function" ? e : oh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function p1() {
  return null;
}
function h1(e, t) {
  var n = typeof e == "function" ? e : oh(e), r = t == null ? p1 : typeof t == "function" ? t : ka(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function g1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function m1() {
  return this.each(g1);
}
function y1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function v1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function w1(e) {
  return this.select(e ? v1 : y1);
}
function x1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function S1(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function _1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function E1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function k1(e, t, n) {
  return function() {
    var r = this.__on, o, i = S1(t);
    if (r) {
      for (var l = 0, s = r.length; l < s; ++l)
        if ((o = r[l]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function N1(e, t, n) {
  var r = _1(e + ""), o, i = r.length, l;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, a = s.length, c; u < a; ++u)
        for (o = 0, c = s[u]; o < i; ++o)
          if ((l = r[o]).type === c.type && l.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? k1 : E1, o = 0; o < i; ++o)
    this.each(s(r[o], t, n));
  return this;
}
function hh(e, t, n) {
  var r = ah(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function C1(e, t) {
  return function() {
    return hh(this, e, t);
  };
}
function M1(e, t) {
  return function() {
    return hh(this, e, t.apply(this, arguments));
  };
}
function P1(e, t) {
  return this.each((typeof t == "function" ? M1 : C1)(e, t));
}
function* z1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, l; o < i; ++o)
      (l = r[o]) && (yield l);
}
var gh = [null];
function Xe(e, t) {
  this._groups = e, this._parents = t;
}
function Vo() {
  return new Xe([[document.documentElement]], gh);
}
function T1() {
  return this;
}
Xe.prototype = Vo.prototype = {
  constructor: Xe,
  select: nv,
  selectAll: lv,
  selectChild: cv,
  selectChildren: hv,
  filter: gv,
  data: Sv,
  enter: mv,
  exit: Ev,
  join: kv,
  merge: Nv,
  selection: T1,
  order: Cv,
  sort: Mv,
  call: zv,
  nodes: Tv,
  node: Rv,
  size: $v,
  empty: Av,
  each: Dv,
  attr: jv,
  style: Yv,
  property: Zv,
  classed: bv,
  text: r1,
  html: s1,
  raise: a1,
  lower: f1,
  append: d1,
  insert: h1,
  remove: m1,
  clone: w1,
  datum: x1,
  on: N1,
  dispatch: P1,
  [Symbol.iterator]: z1
};
function ct(e) {
  return typeof e == "string" ? new Xe([[document.querySelector(e)]], [document.documentElement]) : new Xe([[e]], gh);
}
function R1(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function wt(e, t) {
  if (e = R1(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const $1 = { passive: !1 }, To = { capture: !0, passive: !1 };
function ds(e) {
  e.stopImmediatePropagation();
}
function gr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function mh(e) {
  var t = e.document.documentElement, n = ct(e).on("dragstart.drag", gr, To);
  "onselectstart" in t ? n.on("selectstart.drag", gr, To) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function yh(e, t) {
  var n = e.document.documentElement, r = ct(e).on("dragstart.drag", null);
  t && (r.on("click.drag", gr, To), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ai = (e) => () => e;
function mu(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: l,
  y: s,
  dx: u,
  dy: a,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: a, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
mu.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function A1(e) {
  return !e.ctrlKey && !e.button;
}
function D1() {
  return this.parentNode;
}
function L1(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function I1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function O1() {
  var e = A1, t = D1, n = L1, r = I1, o = {}, i = zl("start", "drag", "end"), l = 0, s, u, a, c, f = 0;
  function d(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", N).on("touchmove.drag", p, $1).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, _) {
    if (!(c || !e.call(this, y, _))) {
      var E = m(this, t.call(this, y, _), y, _, "mouse");
      E && (ct(y.view).on("mousemove.drag", w, To).on("mouseup.drag", v, To), mh(y.view), ds(y), a = !1, s = y.clientX, u = y.clientY, E("start", y));
    }
  }
  function w(y) {
    if (gr(y), !a) {
      var _ = y.clientX - s, E = y.clientY - u;
      a = _ * _ + E * E > f;
    }
    o.mouse("drag", y);
  }
  function v(y) {
    ct(y.view).on("mousemove.drag mouseup.drag", null), yh(y.view, a), gr(y), o.mouse("end", y);
  }
  function N(y, _) {
    if (e.call(this, y, _)) {
      var E = y.changedTouches, C = t.call(this, y, _), T = E.length, D, I;
      for (D = 0; D < T; ++D)
        (I = m(this, C, y, _, E[D].identifier, E[D])) && (ds(y), I("start", y, E[D]));
    }
  }
  function p(y) {
    var _ = y.changedTouches, E = _.length, C, T;
    for (C = 0; C < E; ++C)
      (T = o[_[C].identifier]) && (gr(y), T("drag", y, _[C]));
  }
  function h(y) {
    var _ = y.changedTouches, E = _.length, C, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), C = 0; C < E; ++C)
      (T = o[_[C].identifier]) && (ds(y), T("end", y, _[C]));
  }
  function m(y, _, E, C, T, D) {
    var I = i.copy(), F = wt(D || E, _), j, A, S;
    if ((S = n.call(y, new mu("beforestart", {
      sourceEvent: E,
      target: d,
      identifier: T,
      active: l,
      x: F[0],
      y: F[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), C)) != null)
      return j = S.x - F[0] || 0, A = S.y - F[1] || 0, function $(M, k, x) {
        var P = F, z;
        switch (M) {
          case "start":
            o[T] = $, z = l++;
            break;
          case "end":
            delete o[T], --l;
          case "drag":
            F = wt(x || k, _), z = l;
            break;
        }
        I.call(
          M,
          y,
          new mu(M, {
            sourceEvent: k,
            subject: S,
            target: d,
            identifier: T,
            active: z,
            x: F[0] + j,
            y: F[1] + A,
            dx: F[0] - P[0],
            dy: F[1] - P[1],
            dispatch: I
          }),
          C
        );
      };
  }
  return d.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : ai(!!y), d) : e;
  }, d.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : ai(y), d) : t;
  }, d.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : ai(y), d) : n;
  }, d.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : ai(!!y), d) : r;
  }, d.on = function() {
    var y = i.on.apply(i, arguments);
    return y === i ? d : y;
  }, d.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, d) : Math.sqrt(f);
  }, d;
}
function Ca(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function vh(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t)
    n[r] = t[r];
  return n;
}
function Uo() {
}
var Ro = 0.7, ol = 1 / Ro, mr = "\\s*([+-]?\\d+)\\s*", $o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", F1 = /^#([0-9a-f]{3,8})$/, H1 = new RegExp(`^rgb\\(${mr},${mr},${mr}\\)$`), B1 = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), j1 = new RegExp(`^rgba\\(${mr},${mr},${mr},${$o}\\)$`), V1 = new RegExp(`^rgba\\(${Et},${Et},${Et},${$o}\\)$`), U1 = new RegExp(`^hsl\\(${$o},${Et},${Et}\\)$`), W1 = new RegExp(`^hsla\\(${$o},${Et},${Et},${$o}\\)$`), tf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ca(Uo, Ao, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nf,
  // Deprecated! Use color.formatHex.
  formatHex: nf,
  formatHex8: Y1,
  formatHsl: X1,
  formatRgb: rf,
  toString: rf
});
function nf() {
  return this.rgb().formatHex();
}
function Y1() {
  return this.rgb().formatHex8();
}
function X1() {
  return wh(this).formatHsl();
}
function rf() {
  return this.rgb().formatRgb();
}
function Ao(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = F1.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? of(t) : n === 3 ? new Oe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ci(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ci(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = H1.exec(e)) ? new Oe(t[1], t[2], t[3], 1) : (t = B1.exec(e)) ? new Oe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = j1.exec(e)) ? ci(t[1], t[2], t[3], t[4]) : (t = V1.exec(e)) ? ci(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = U1.exec(e)) ? uf(t[1], t[2] / 100, t[3] / 100, 1) : (t = W1.exec(e)) ? uf(t[1], t[2] / 100, t[3] / 100, t[4]) : tf.hasOwnProperty(e) ? of(tf[e]) : e === "transparent" ? new Oe(NaN, NaN, NaN, 0) : null;
}
function of(e) {
  return new Oe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ci(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Oe(e, t, n, r);
}
function K1(e) {
  return e instanceof Uo || (e = Ao(e)), e ? (e = e.rgb(), new Oe(e.r, e.g, e.b, e.opacity)) : new Oe();
}
function yu(e, t, n, r) {
  return arguments.length === 1 ? K1(e) : new Oe(e, t, n, r ?? 1);
}
function Oe(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ca(Oe, yu, vh(Uo, {
  brighter(e) {
    return e = e == null ? ol : Math.pow(ol, e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new Oe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Oe($n(this.r), $n(this.g), $n(this.b), il(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lf,
  // Deprecated! Use color.formatHex.
  formatHex: lf,
  formatHex8: Q1,
  formatRgb: sf,
  toString: sf
}));
function lf() {
  return `#${zn(this.r)}${zn(this.g)}${zn(this.b)}`;
}
function Q1() {
  return `#${zn(this.r)}${zn(this.g)}${zn(this.b)}${zn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sf() {
  const e = il(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$n(this.r)}, ${$n(this.g)}, ${$n(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function il(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $n(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zn(e) {
  return e = $n(e), (e < 16 ? "0" : "") + e.toString(16);
}
function uf(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ft(e, t, n, r);
}
function wh(e) {
  if (e instanceof ft)
    return new ft(e.h, e.s, e.l, e.opacity);
  if (e instanceof Uo || (e = Ao(e)), !e)
    return new ft();
  if (e instanceof ft)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), l = NaN, s = i - o, u = (i + o) / 2;
  return s ? (t === i ? l = (n - r) / s + (n < r) * 6 : n === i ? l = (r - t) / s + 2 : l = (t - n) / s + 4, s /= u < 0.5 ? i + o : 2 - i - o, l *= 60) : s = u > 0 && u < 1 ? 0 : l, new ft(l, s, u, e.opacity);
}
function Z1(e, t, n, r) {
  return arguments.length === 1 ? wh(e) : new ft(e, t, n, r ?? 1);
}
function ft(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ca(ft, Z1, vh(Uo, {
  brighter(e) {
    return e = e == null ? ol : Math.pow(ol, e), new ft(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new ft(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Oe(
      ps(e >= 240 ? e - 240 : e + 120, o, r),
      ps(e, o, r),
      ps(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ft(af(this.h), fi(this.s), fi(this.l), il(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = il(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${af(this.h)}, ${fi(this.s) * 100}%, ${fi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function af(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ps(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xh = (e) => () => e;
function G1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function q1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function J1(e) {
  return (e = +e) == 1 ? Sh : function(t, n) {
    return n - t ? q1(t, n, e) : xh(isNaN(t) ? n : t);
  };
}
function Sh(e, t) {
  var n = t - e;
  return n ? G1(e, n) : xh(isNaN(e) ? t : e);
}
const cf = function e(t) {
  var n = J1(t);
  function r(o, i) {
    var l = n((o = yu(o)).r, (i = yu(i)).r), s = n(o.g, i.g), u = n(o.b, i.b), a = Sh(o.opacity, i.opacity);
    return function(c) {
      return o.r = l(c), o.g = s(c), o.b = u(c), o.opacity = a(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Yt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var vu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, hs = new RegExp(vu.source, "g");
function b1(e) {
  return function() {
    return e;
  };
}
function ew(e) {
  return function(t) {
    return e(t) + "";
  };
}
function tw(e, t) {
  var n = vu.lastIndex = hs.lastIndex = 0, r, o, i, l = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (r = vu.exec(e)) && (o = hs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[l] ? s[l] += i : s[++l] = i), (r = r[0]) === (o = o[0]) ? s[l] ? s[l] += o : s[++l] = o : (s[++l] = null, u.push({ i: l, x: Yt(r, o) })), n = hs.lastIndex;
  return n < t.length && (i = t.slice(n), s[l] ? s[l] += i : s[++l] = i), s.length < 2 ? u[0] ? ew(u[0].x) : b1(t) : (t = u.length, function(a) {
    for (var c = 0, f; c < t; ++c)
      s[(f = u[c]).i] = f.x(a);
    return s.join("");
  });
}
var ff = 180 / Math.PI, wu = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function _h(e, t, n, r, o, i) {
  var l, s, u;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (u = e * n + t * r) && (n -= e * u, r -= t * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), e * r < t * n && (e = -e, t = -t, u = -u, l = -l), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ff,
    skewX: Math.atan(u) * ff,
    scaleX: l,
    scaleY: s
  };
}
var di;
function nw(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? wu : _h(t.a, t.b, t.c, t.d, t.e, t.f);
}
function rw(e) {
  return e == null || (di || (di = document.createElementNS("http://www.w3.org/2000/svg", "g")), di.setAttribute("transform", e), !(e = di.transform.baseVal.consolidate())) ? wu : (e = e.matrix, _h(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Eh(e, t, n, r) {
  function o(a) {
    return a.length ? a.pop() + " " : "";
  }
  function i(a, c, f, d, g, w) {
    if (a !== f || c !== d) {
      var v = g.push("translate(", null, t, null, n);
      w.push({ i: v - 4, x: Yt(a, f) }, { i: v - 2, x: Yt(c, d) });
    } else
      (f || d) && g.push("translate(" + f + t + d + n);
  }
  function l(a, c, f, d) {
    a !== c ? (a - c > 180 ? c += 360 : c - a > 180 && (a += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Yt(a, c) })) : c && f.push(o(f) + "rotate(" + c + r);
  }
  function s(a, c, f, d) {
    a !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Yt(a, c) }) : c && f.push(o(f) + "skewX(" + c + r);
  }
  function u(a, c, f, d, g, w) {
    if (a !== f || c !== d) {
      var v = g.push(o(g) + "scale(", null, ",", null, ")");
      w.push({ i: v - 4, x: Yt(a, f) }, { i: v - 2, x: Yt(c, d) });
    } else
      (f !== 1 || d !== 1) && g.push(o(g) + "scale(" + f + "," + d + ")");
  }
  return function(a, c) {
    var f = [], d = [];
    return a = e(a), c = e(c), i(a.translateX, a.translateY, c.translateX, c.translateY, f, d), l(a.rotate, c.rotate, f, d), s(a.skewX, c.skewX, f, d), u(a.scaleX, a.scaleY, c.scaleX, c.scaleY, f, d), a = c = null, function(g) {
      for (var w = -1, v = d.length, N; ++w < v; )
        f[(N = d[w]).i] = N.x(g);
      return f.join("");
    };
  };
}
var ow = Eh(nw, "px, ", "px)", "deg)"), iw = Eh(rw, ", ", ")", ")"), lw = 1e-12;
function df(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function sw(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function uw(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const aw = function e(t, n, r) {
  function o(i, l) {
    var s = i[0], u = i[1], a = i[2], c = l[0], f = l[1], d = l[2], g = c - s, w = f - u, v = g * g + w * w, N, p;
    if (v < lw)
      p = Math.log(d / a) / t, N = function(C) {
        return [
          s + C * g,
          u + C * w,
          a * Math.exp(t * C * p)
        ];
      };
    else {
      var h = Math.sqrt(v), m = (d * d - a * a + r * v) / (2 * a * n * h), y = (d * d - a * a - r * v) / (2 * d * n * h), _ = Math.log(Math.sqrt(m * m + 1) - m), E = Math.log(Math.sqrt(y * y + 1) - y);
      p = (E - _) / t, N = function(C) {
        var T = C * p, D = df(_), I = a / (n * h) * (D * uw(t * T + _) - sw(_));
        return [
          s + I * g,
          u + I * w,
          a * D / df(t * T + _)
        ];
      };
    }
    return N.duration = p * 1e3 * t / Math.SQRT2, N;
  }
  return o.rho = function(i) {
    var l = Math.max(1e-3, +i), s = l * l, u = s * s;
    return e(l, s, u);
  }, o;
}(Math.SQRT2, 2, 4);
var zr = 0, to = 0, Xr = 0, kh = 1e3, ll, no, sl = 0, Fn = 0, Rl = 0, Do = typeof performance == "object" && performance.now ? performance : Date, Nh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ma() {
  return Fn || (Nh(cw), Fn = Do.now() + Rl);
}
function cw() {
  Fn = 0;
}
function ul() {
  this._call = this._time = this._next = null;
}
ul.prototype = Ch.prototype = {
  constructor: ul,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Ma() : +n) + (t == null ? 0 : +t), !this._next && no !== this && (no ? no._next = this : ll = this, no = this), this._call = e, this._time = n, xu();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xu());
  }
};
function Ch(e, t, n) {
  var r = new ul();
  return r.restart(e, t, n), r;
}
function fw() {
  Ma(), ++zr;
  for (var e = ll, t; e; )
    (t = Fn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zr;
}
function pf() {
  Fn = (sl = Do.now()) + Rl, zr = to = 0;
  try {
    fw();
  } finally {
    zr = 0, pw(), Fn = 0;
  }
}
function dw() {
  var e = Do.now(), t = e - sl;
  t > kh && (Rl -= t, sl = e);
}
function pw() {
  for (var e, t = ll, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ll = n);
  no = e, xu(r);
}
function xu(e) {
  if (!zr) {
    to && (to = clearTimeout(to));
    var t = e - Fn;
    t > 24 ? (e < 1 / 0 && (to = setTimeout(pf, e - Do.now() - Rl)), Xr && (Xr = clearInterval(Xr))) : (Xr || (sl = Do.now(), Xr = setInterval(dw, kh)), zr = 1, Nh(pf));
  }
}
function hf(e, t, n) {
  var r = new ul();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var hw = zl("start", "end", "cancel", "interrupt"), gw = [], Mh = 0, gf = 1, Su = 2, Ti = 3, mf = 4, _u = 5, Ri = 6;
function $l(e, t, n, r, o, i) {
  var l = e.__transition;
  if (!l)
    e.__transition = {};
  else if (n in l)
    return;
  mw(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: hw,
    tween: gw,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Mh
  });
}
function Pa(e, t) {
  var n = gt(e, t);
  if (n.state > Mh)
    throw new Error("too late; already scheduled");
  return n;
}
function kt(e, t) {
  var n = gt(e, t);
  if (n.state > Ti)
    throw new Error("too late; already running");
  return n;
}
function gt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function mw(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ch(i, 0, n.time);
  function i(a) {
    n.state = gf, n.timer.restart(l, n.delay, n.time), n.delay <= a && l(a - n.delay);
  }
  function l(a) {
    var c, f, d, g;
    if (n.state !== gf)
      return u();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Ti)
          return hf(l);
        g.state === mf ? (g.state = Ri, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[c]) : +c < t && (g.state = Ri, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[c]);
      }
    if (hf(function() {
      n.state === Ti && (n.state = mf, n.timer.restart(s, n.delay, n.time), s(a));
    }), n.state = Su, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Su) {
      for (n.state = Ti, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = g);
      o.length = f + 1;
    }
  }
  function s(a) {
    for (var c = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), n.state = _u, 1), f = -1, d = o.length; ++f < d; )
      o[f].call(e, c);
    n.state === _u && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Ri, n.timer.stop(), delete r[t];
    for (var a in r)
      return;
    delete e.__transition;
  }
}
function $i(e, t) {
  var n = e.__transition, r, o, i = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((r = n[l]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Su && r.state < _u, r.state = Ri, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[l];
    }
    i && delete e.__transition;
  }
}
function yw(e) {
  return this.each(function() {
    $i(this, e);
  });
}
function vw(e, t) {
  var n, r;
  return function() {
    var o = kt(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var l = 0, s = r.length; l < s; ++l)
        if (r[l].name === t) {
          r = r.slice(), r.splice(l, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function ww(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = kt(this, e), l = i.tween;
    if (l !== r) {
      o = (r = l).slice();
      for (var s = { name: t, value: n }, u = 0, a = o.length; u < a; ++u)
        if (o[u].name === t) {
          o[u] = s;
          break;
        }
      u === a && o.push(s);
    }
    i.tween = o;
  };
}
function xw(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gt(this.node(), n).tween, o = 0, i = r.length, l; o < i; ++o)
      if ((l = r[o]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? vw : ww)(n, e, t));
}
function za(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = kt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gt(o, r).value[t];
  };
}
function Ph(e, t) {
  var n;
  return (typeof t == "number" ? Yt : t instanceof Ao ? cf : (n = Ao(t)) ? (t = n, cf) : tw)(e, t);
}
function Sw(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _w(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ew(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var l = this.getAttribute(e);
    return l === o ? null : l === r ? i : i = t(r = l, n);
  };
}
function kw(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === o ? null : l === r ? i : i = t(r = l, n);
  };
}
function Nw(e, t, n) {
  var r, o, i;
  return function() {
    var l, s = n(this), u;
    return s == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), u = s + "", l === u ? null : l === r && u === o ? i : (o = u, i = t(r = l, s)));
  };
}
function Cw(e, t, n) {
  var r, o, i;
  return function() {
    var l, s = n(this), u;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), u = s + "", l === u ? null : l === r && u === o ? i : (o = u, i = t(r = l, s)));
  };
}
function Mw(e, t) {
  var n = Tl(e), r = n === "transform" ? iw : Ph;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Cw : Nw)(n, r, za(this, "attr." + e, t)) : t == null ? (n.local ? _w : Sw)(n) : (n.local ? kw : Ew)(n, r, t));
}
function Pw(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function zw(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Tw(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && zw(e, i)), n;
  }
  return o._value = t, o;
}
function Rw(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Pw(e, i)), n;
  }
  return o._value = t, o;
}
function $w(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Tl(e);
  return this.tween(n, (r.local ? Tw : Rw)(r, t));
}
function Aw(e, t) {
  return function() {
    Pa(this, e).delay = +t.apply(this, arguments);
  };
}
function Dw(e, t) {
  return t = +t, function() {
    Pa(this, e).delay = t;
  };
}
function Lw(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Aw : Dw)(t, e)) : gt(this.node(), t).delay;
}
function Iw(e, t) {
  return function() {
    kt(this, e).duration = +t.apply(this, arguments);
  };
}
function Ow(e, t) {
  return t = +t, function() {
    kt(this, e).duration = t;
  };
}
function Fw(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Iw : Ow)(t, e)) : gt(this.node(), t).duration;
}
function Hw(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    kt(this, e).ease = t;
  };
}
function Bw(e) {
  var t = this._id;
  return arguments.length ? this.each(Hw(t, e)) : gt(this.node(), t).ease;
}
function jw(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    kt(this, e).ease = n;
  };
}
function Vw(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(jw(this._id, e));
}
function Uw(e) {
  typeof e != "function" && (e = lh(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], l = i.length, s = r[o] = [], u, a = 0; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i) && s.push(u);
  return new It(r, this._parents, this._name, this._id);
}
function Ww(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), l = new Array(r), s = 0; s < i; ++s)
    for (var u = t[s], a = n[s], c = u.length, f = l[s] = new Array(c), d, g = 0; g < c; ++g)
      (d = u[g] || a[g]) && (f[g] = d);
  for (; s < r; ++s)
    l[s] = t[s];
  return new It(l, this._parents, this._name, this._id);
}
function Yw(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Xw(e, t, n) {
  var r, o, i = Yw(t) ? Pa : kt;
  return function() {
    var l = i(this, e), s = l.on;
    s !== r && (o = (r = s).copy()).on(t, n), l.on = o;
  };
}
function Kw(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gt(this.node(), n).on.on(e) : this.each(Xw(n, e, t));
}
function Qw(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function Zw() {
  return this.on("end.remove", Qw(this._id));
}
function Gw(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ka(e));
  for (var r = this._groups, o = r.length, i = new Array(o), l = 0; l < o; ++l)
    for (var s = r[l], u = s.length, a = i[l] = new Array(u), c, f, d = 0; d < u; ++d)
      (c = s[d]) && (f = e.call(c, c.__data__, d, s)) && ("__data__" in c && (f.__data__ = c.__data__), a[d] = f, $l(a[d], t, n, d, a, gt(c, n)));
  return new It(i, this._parents, t, n);
}
function qw(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ih(e));
  for (var r = this._groups, o = r.length, i = [], l = [], s = 0; s < o; ++s)
    for (var u = r[s], a = u.length, c, f = 0; f < a; ++f)
      if (c = u[f]) {
        for (var d = e.call(c, c.__data__, f, u), g, w = gt(c, n), v = 0, N = d.length; v < N; ++v)
          (g = d[v]) && $l(g, t, n, v, d, w);
        i.push(d), l.push(c);
      }
  return new It(i, l, t, n);
}
var Jw = Vo.prototype.constructor;
function bw() {
  return new Jw(this._groups, this._parents);
}
function ex(e, t) {
  var n, r, o;
  return function() {
    var i = Pr(this, e), l = (this.style.removeProperty(e), Pr(this, e));
    return i === l ? null : i === n && l === r ? o : o = t(n = i, r = l);
  };
}
function zh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tx(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var l = Pr(this, e);
    return l === o ? null : l === r ? i : i = t(r = l, n);
  };
}
function nx(e, t, n) {
  var r, o, i;
  return function() {
    var l = Pr(this, e), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(e), Pr(this, e))), l === u ? null : l === r && u === o ? i : (o = u, i = t(r = l, s));
  };
}
function rx(e, t) {
  var n, r, o, i = "style." + t, l = "end." + i, s;
  return function() {
    var u = kt(this, e), a = u.on, c = u.value[i] == null ? s || (s = zh(t)) : void 0;
    (a !== n || o !== c) && (r = (n = a).copy()).on(l, o = c), u.on = r;
  };
}
function ox(e, t, n) {
  var r = (e += "") == "transform" ? ow : Ph;
  return t == null ? this.styleTween(e, ex(e, r)).on("end.style." + e, zh(e)) : typeof t == "function" ? this.styleTween(e, nx(e, r, za(this, "style." + e, t))).each(rx(this._id, e)) : this.styleTween(e, tx(e, r, t), n).on("end.style." + e, null);
}
function ix(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function lx(e, t, n) {
  var r, o;
  function i() {
    var l = t.apply(this, arguments);
    return l !== o && (r = (o = l) && ix(e, l, n)), r;
  }
  return i._value = t, i;
}
function sx(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, lx(e, t, n ?? ""));
}
function ux(e) {
  return function() {
    this.textContent = e;
  };
}
function ax(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function cx(e) {
  return this.tween("text", typeof e == "function" ? ax(za(this, "text", e)) : ux(e == null ? "" : e + ""));
}
function fx(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function dx(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && fx(o)), t;
  }
  return r._value = e, r;
}
function px(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, dx(e));
}
function hx() {
  for (var e = this._name, t = this._id, n = Th(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var l = r[i], s = l.length, u, a = 0; a < s; ++a)
      if (u = l[a]) {
        var c = gt(u, t);
        $l(u, e, n, a, l, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new It(r, this._parents, e, n);
}
function gx() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, l) {
    var s = { value: l }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var a = kt(this, r), c = a.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(u)), a.on = t;
    }), o === 0 && i();
  });
}
var mx = 0;
function It(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Th() {
  return ++mx;
}
var Nt = Vo.prototype;
It.prototype = {
  constructor: It,
  select: Gw,
  selectAll: qw,
  selectChild: Nt.selectChild,
  selectChildren: Nt.selectChildren,
  filter: Uw,
  merge: Ww,
  selection: bw,
  transition: hx,
  call: Nt.call,
  nodes: Nt.nodes,
  node: Nt.node,
  size: Nt.size,
  empty: Nt.empty,
  each: Nt.each,
  on: Kw,
  attr: Mw,
  attrTween: $w,
  style: ox,
  styleTween: sx,
  text: cx,
  textTween: px,
  remove: Zw,
  tween: xw,
  delay: Lw,
  duration: Fw,
  ease: Bw,
  easeVarying: Vw,
  end: gx,
  [Symbol.iterator]: Nt[Symbol.iterator]
};
function yx(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var vx = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: yx
};
function wx(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function xx(e) {
  var t, n;
  e instanceof It ? (t = e._id, e = e._name) : (t = Th(), (n = vx).time = Ma(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var l = r[i], s = l.length, u, a = 0; a < s; ++a)
      (u = l[a]) && $l(u, e, t, a, l, n || wx(u, t));
  return new It(r, this._parents, e, t);
}
Vo.prototype.interrupt = yw;
Vo.prototype.transition = xx;
const pi = (e) => () => e;
function Sx(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function Tt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Tt.prototype = {
  constructor: Tt,
  scale: function(e) {
    return e === 1 ? this : new Tt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Tt(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var sn = new Tt(1, 0, 0);
Tt.prototype;
function gs(e) {
  e.stopImmediatePropagation();
}
function Kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _x(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Ex() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function yf() {
  return this.__zoom || sn;
}
function kx(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Nx() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cx(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l)
  );
}
function Mx() {
  var e = _x, t = Ex, n = Cx, r = kx, o = Nx, i = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, u = aw, a = zl("start", "zoom", "end"), c, f, d, g = 500, w = 150, v = 0, N = 10;
  function p(S) {
    S.property("__zoom", yf).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", F).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(S, $, M, k) {
    var x = S.selection ? S.selection() : S;
    x.property("__zoom", yf), S !== x ? _(S, $, M, k) : x.interrupt().each(function() {
      E(this, arguments).event(k).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end();
    });
  }, p.scaleBy = function(S, $, M, k) {
    p.scaleTo(S, function() {
      var x = this.__zoom.k, P = typeof $ == "function" ? $.apply(this, arguments) : $;
      return x * P;
    }, M, k);
  }, p.scaleTo = function(S, $, M, k) {
    p.transform(S, function() {
      var x = t.apply(this, arguments), P = this.__zoom, z = M == null ? y(x) : typeof M == "function" ? M.apply(this, arguments) : M, H = P.invert(z), B = typeof $ == "function" ? $.apply(this, arguments) : $;
      return n(m(h(P, B), z, H), x, l);
    }, M, k);
  }, p.translateBy = function(S, $, M, k) {
    p.transform(S, function() {
      return n(this.__zoom.translate(
        typeof $ == "function" ? $.apply(this, arguments) : $,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), l);
    }, null, k);
  }, p.translateTo = function(S, $, M, k, x) {
    p.transform(S, function() {
      var P = t.apply(this, arguments), z = this.__zoom, H = k == null ? y(P) : typeof k == "function" ? k.apply(this, arguments) : k;
      return n(sn.translate(H[0], H[1]).scale(z.k).translate(
        typeof $ == "function" ? -$.apply(this, arguments) : -$,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), P, l);
    }, k, x);
  };
  function h(S, $) {
    return $ = Math.max(i[0], Math.min(i[1], $)), $ === S.k ? S : new Tt($, S.x, S.y);
  }
  function m(S, $, M) {
    var k = $[0] - M[0] * S.k, x = $[1] - M[1] * S.k;
    return k === S.x && x === S.y ? S : new Tt(S.k, k, x);
  }
  function y(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function _(S, $, M, k) {
    S.on("start.zoom", function() {
      E(this, arguments).event(k).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(k).end();
    }).tween("zoom", function() {
      var x = this, P = arguments, z = E(x, P).event(k), H = t.apply(x, P), B = M == null ? y(H) : typeof M == "function" ? M.apply(x, P) : M, Y = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]), U = x.__zoom, G = typeof $ == "function" ? $.apply(x, P) : $, Q = u(U.invert(B).concat(Y / U.k), G.invert(B).concat(Y / G.k));
      return function(J) {
        if (J === 1)
          J = G;
        else {
          var te = Q(J), pe = Y / te[2];
          J = new Tt(pe, B[0] - te[0] * pe, B[1] - te[1] * pe);
        }
        z.zoom(null, J);
      };
    });
  }
  function E(S, $, M) {
    return !M && S.__zooming || new C(S, $);
  }
  function C(S, $) {
    this.that = S, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, $), this.taps = 0;
  }
  C.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, $) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var $ = ct(this.that).datum();
      a.call(
        S,
        this.that,
        new Sx(S, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: S,
          transform: this.that.__zoom,
          dispatch: a
        }),
        $
      );
    }
  };
  function T(S, ...$) {
    if (!e.apply(this, arguments))
      return;
    var M = E(this, $).event(S), k = this.__zoom, x = Math.max(i[0], Math.min(i[1], k.k * Math.pow(2, r.apply(this, arguments)))), P = wt(S);
    if (M.wheel)
      (M.mouse[0][0] !== P[0] || M.mouse[0][1] !== P[1]) && (M.mouse[1] = k.invert(M.mouse[0] = P)), clearTimeout(M.wheel);
    else {
      if (k.k === x)
        return;
      M.mouse = [P, k.invert(P)], $i(this), M.start();
    }
    Kr(S), M.wheel = setTimeout(z, w), M.zoom("mouse", n(m(h(k, x), M.mouse[0], M.mouse[1]), M.extent, l));
    function z() {
      M.wheel = null, M.end();
    }
  }
  function D(S, ...$) {
    if (d || !e.apply(this, arguments))
      return;
    var M = S.currentTarget, k = E(this, $, !0).event(S), x = ct(S.view).on("mousemove.zoom", B, !0).on("mouseup.zoom", Y, !0), P = wt(S, M), z = S.clientX, H = S.clientY;
    mh(S.view), gs(S), k.mouse = [P, this.__zoom.invert(P)], $i(this), k.start();
    function B(U) {
      if (Kr(U), !k.moved) {
        var G = U.clientX - z, Q = U.clientY - H;
        k.moved = G * G + Q * Q > v;
      }
      k.event(U).zoom("mouse", n(m(k.that.__zoom, k.mouse[0] = wt(U, M), k.mouse[1]), k.extent, l));
    }
    function Y(U) {
      x.on("mousemove.zoom mouseup.zoom", null), yh(U.view, k.moved), Kr(U), k.event(U).end();
    }
  }
  function I(S, ...$) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, k = wt(S.changedTouches ? S.changedTouches[0] : S, this), x = M.invert(k), P = M.k * (S.shiftKey ? 0.5 : 2), z = n(m(h(M, P), k, x), t.apply(this, $), l);
      Kr(S), s > 0 ? ct(this).transition().duration(s).call(_, z, k, S) : ct(this).call(p.transform, z, k, S);
    }
  }
  function F(S, ...$) {
    if (e.apply(this, arguments)) {
      var M = S.touches, k = M.length, x = E(this, $, S.changedTouches.length === k).event(S), P, z, H, B;
      for (gs(S), z = 0; z < k; ++z)
        H = M[z], B = wt(H, this), B = [B, this.__zoom.invert(B), H.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== B[2] && (x.touch1 = B, x.taps = 0) : (x.touch0 = B, P = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), P && (x.taps < 2 && (f = B[0], c = setTimeout(function() {
        c = null;
      }, g)), $i(this), x.start());
    }
  }
  function j(S, ...$) {
    if (this.__zooming) {
      var M = E(this, $).event(S), k = S.changedTouches, x = k.length, P, z, H, B;
      for (Kr(S), P = 0; P < x; ++P)
        z = k[P], H = wt(z, this), M.touch0 && M.touch0[2] === z.identifier ? M.touch0[0] = H : M.touch1 && M.touch1[2] === z.identifier && (M.touch1[0] = H);
      if (z = M.that.__zoom, M.touch1) {
        var Y = M.touch0[0], U = M.touch0[1], G = M.touch1[0], Q = M.touch1[1], J = (J = G[0] - Y[0]) * J + (J = G[1] - Y[1]) * J, te = (te = Q[0] - U[0]) * te + (te = Q[1] - U[1]) * te;
        z = h(z, Math.sqrt(J / te)), H = [(Y[0] + G[0]) / 2, (Y[1] + G[1]) / 2], B = [(U[0] + Q[0]) / 2, (U[1] + Q[1]) / 2];
      } else if (M.touch0)
        H = M.touch0[0], B = M.touch0[1];
      else
        return;
      M.zoom("touch", n(m(z, H, B), M.extent, l));
    }
  }
  function A(S, ...$) {
    if (this.__zooming) {
      var M = E(this, $).event(S), k = S.changedTouches, x = k.length, P, z;
      for (gs(S), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), P = 0; P < x; ++P)
        z = k[P], M.touch0 && M.touch0[2] === z.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === z.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0)
        M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (z = wt(z, this), Math.hypot(f[0] - z[0], f[1] - z[1]) < N)) {
        var H = ct(this).on("dblclick.zoom");
        H && H.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : pi(+S), p) : r;
  }, p.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : pi(!!S), p) : e;
  }, p.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : pi(!!S), p) : o;
  }, p.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : pi([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), p) : t;
  }, p.scaleExtent = function(S) {
    return arguments.length ? (i[0] = +S[0], i[1] = +S[1], p) : [i[0], i[1]];
  }, p.translateExtent = function(S) {
    return arguments.length ? (l[0][0] = +S[0][0], l[1][0] = +S[1][0], l[0][1] = +S[0][1], l[1][1] = +S[1][1], p) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, p.constrain = function(S) {
    return arguments.length ? (n = S, p) : n;
  }, p.duration = function(S) {
    return arguments.length ? (s = +S, p) : s;
  }, p.interpolate = function(S) {
    return arguments.length ? (u = S, p) : u;
  }, p.on = function() {
    var S = a.on.apply(a, arguments);
    return S === a ? p : S;
  }, p.clickDistance = function(S) {
    return arguments.length ? (v = (S = +S) * S, p) : Math.sqrt(v);
  }, p.tapDistance = function(S) {
    return arguments.length ? (N = +S, p) : N;
  }, p;
}
const Al = R.createContext(null), Px = Al.Provider, fn = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, t) => `Couldn't create edge for ${e ? "target" : "source"} handle id: "${e ? t.targetHandle : t.sourceHandle}", edge id: ${t.id}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`
}, Rh = fn.error001();
function de(e, t) {
  const n = R.useContext(Al);
  if (n === null)
    throw new Error(Rh);
  return Zy(n, e, t);
}
const Pe = () => {
  const e = R.useContext(Al);
  if (e === null)
    throw new Error(Rh);
  return R.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe,
    destroy: e.destroy
  }), [e]);
}, zx = (e) => e.userSelectionActive ? "none" : "all";
function Tx({ position: e, children: t, className: n, style: r, ...o }) {
  const i = de(zx), l = `${e}`.split("-");
  return L.jsx("div", { className: rt(["react-flow__panel", n, ...l]), style: { ...r, pointerEvents: i }, ...o, children: t });
}
function Rx({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : L.jsx(Tx, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: L.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const $x = ({ x: e, y: t, label: n, labelStyle: r = {}, labelShowBg: o = !0, labelBgStyle: i = {}, labelBgPadding: l = [2, 4], labelBgBorderRadius: s = 2, children: u, className: a, ...c }) => {
  const f = R.useRef(null), [d, g] = R.useState({ x: 0, y: 0, width: 0, height: 0 }), w = rt(["react-flow__edge-textwrapper", a]);
  return R.useEffect(() => {
    if (f.current) {
      const v = f.current.getBBox();
      g({
        x: v.x,
        y: v.y,
        width: v.width,
        height: v.height
      });
    }
  }, [n]), typeof n > "u" || !n ? null : L.jsxs("g", { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: w, visibility: d.width ? "visible" : "hidden", ...c, children: [o && L.jsx("rect", { width: d.width + 2 * l[0], x: -l[0], y: -l[1], height: d.height + 2 * l[1], className: "react-flow__edge-textbg", style: i, rx: s, ry: s }), L.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: f, style: r, children: n }), u] });
};
var Ax = R.memo($x);
const Ta = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Tr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Ra = (e = { x: 0, y: 0 }, t) => ({
  x: Tr(e.x, t[0][0], t[1][0]),
  y: Tr(e.y, t[0][1], t[1][1])
}), vf = (e, t, n) => e < t ? Tr(Math.abs(e - t), 1, 50) / 50 : e > n ? -Tr(Math.abs(e - n), 1, 50) / 50 : 0, $h = (e, t) => {
  const n = vf(e.x, 35, t.width - 35) * 20, r = vf(e.y, 35, t.height - 35) * 20;
  return [n, r];
}, Ah = (e) => {
  var t;
  return ((t = e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Dx = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Dh = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Lx = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), wf = (e) => ({
  ...e.positionAbsolute || { x: 0, y: 0 },
  width: e.width || 0,
  height: e.height || 0
}), Eu = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Ix = (e) => be(e.width) && be(e.height) && be(e.x) && be(e.y), be = (e) => !isNaN(e) && isFinite(e), ve = Symbol.for("internals"), Lh = ["Enter", " ", "Escape"], Ox = (e, t) => {
}, Fx = (e) => "nativeEvent" in e;
function ku(e) {
  var o, i;
  const t = Fx(e) ? e.nativeEvent : e, n = ((i = (o = t.composedPath) == null ? void 0 : o.call(t)) == null ? void 0 : i[0]) || e.target;
  return ["INPUT", "SELECT", "TEXTAREA"].includes(n == null ? void 0 : n.nodeName) || (n == null ? void 0 : n.hasAttribute("contenteditable")) || !!(n != null && n.closest(".nokey"));
}
const Ih = (e) => "clientX" in e, un = (e, t) => {
  var i, l;
  const n = Ih(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Wo = ({ id: e, path: t, labelX: n, labelY: r, label: o, labelStyle: i, labelShowBg: l, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: a, style: c, markerEnd: f, markerStart: d, interactionWidth: g = 20 }) => L.jsxs(L.Fragment, { children: [L.jsx("path", { id: e, style: c, d: t, fill: "none", className: "react-flow__edge-path", markerEnd: f, markerStart: d }), g && L.jsx("path", { d: t, fill: "none", strokeOpacity: 0, strokeWidth: g, className: "react-flow__edge-interaction" }), o && be(n) && be(r) ? L.jsx(Ax, { x: n, y: r, label: o, labelStyle: i, labelShowBg: l, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: a }) : null] });
Wo.displayName = "BaseEdge";
function Qr(e, t, n) {
  return n === void 0 ? n : (r) => {
    const o = t().edges.find((i) => i.id === e);
    o && n(r, { ...o });
  };
}
function Oh({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, l = Math.abs(r - t) / 2, s = r < t ? r + l : r - l;
  return [i, s, o, l];
}
function Fh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: l, targetControlY: s }) {
  const u = e * 0.125 + o * 0.375 + l * 0.375 + n * 0.125, a = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(u - e), f = Math.abs(a - t);
  return [u, a, c, f];
}
var Hn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Hn || (Hn = {}));
var yr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(yr || (yr = {}));
var Lo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Lo || (Lo = {}));
var Zt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Zt || (Zt = {}));
var al;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(al || (al = {}));
var W;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(W || (W = {}));
function xf({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === W.Left || e === W.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function Hh({ sourceX: e, sourceY: t, sourcePosition: n = W.Bottom, targetX: r, targetY: o, targetPosition: i = W.Top }) {
  const [l, s] = xf({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [u, a] = xf({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [c, f, d, g] = Fh({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: l,
    sourceControlY: s,
    targetControlX: u,
    targetControlY: a
  });
  return [
    `M${e},${t} C${l},${s} ${u},${a} ${r},${o}`,
    c,
    f,
    d,
    g
  ];
}
const $a = R.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourcePosition: o = W.Bottom, targetPosition: i = W.Top, label: l, labelStyle: s, labelShowBg: u, labelBgStyle: a, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: g, markerStart: w, interactionWidth: v }) => {
  const [N, p, h] = Hh({
    sourceX: e,
    sourceY: t,
    sourcePosition: o,
    targetX: n,
    targetY: r,
    targetPosition: i
  });
  return L.jsx(Wo, { path: N, labelX: p, labelY: h, label: l, labelStyle: s, labelShowBg: u, labelBgStyle: a, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: g, markerStart: w, interactionWidth: v });
});
$a.displayName = "SimpleBezierEdge";
const Sf = {
  [W.Left]: { x: -1, y: 0 },
  [W.Right]: { x: 1, y: 0 },
  [W.Top]: { x: 0, y: -1 },
  [W.Bottom]: { x: 0, y: 1 }
}, Hx = ({ source: e, sourcePosition: t = W.Bottom, target: n }) => t === W.Left || t === W.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _f = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Bx({ source: e, sourcePosition: t = W.Bottom, target: n, targetPosition: r = W.Top, center: o, offset: i }) {
  const l = Sf[t], s = Sf[r], u = { x: e.x + l.x * i, y: e.y + l.y * i }, a = { x: n.x + s.x * i, y: n.y + s.y * i }, c = Hx({
    source: u,
    sourcePosition: t,
    target: a
  }), f = c.x !== 0 ? "x" : "y", d = c[f];
  let g = [], w, v;
  const [N, p, h, m] = Oh({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[f] * s[f] === -1) {
    w = o.x || N, v = o.y || p;
    const _ = [
      { x: w, y: u.y },
      { x: w, y: a.y }
    ], E = [
      { x: u.x, y: v },
      { x: a.x, y: v }
    ];
    l[f] === d ? g = f === "x" ? _ : E : g = f === "x" ? E : _;
  } else {
    const _ = [{ x: u.x, y: a.y }], E = [{ x: a.x, y: u.y }];
    if (f === "x" ? g = l.x === d ? E : _ : g = l.y === d ? _ : E, t !== r) {
      const C = f === "x" ? "y" : "x", T = l[f] === s[C], D = u[C] > a[C], I = u[C] < a[C];
      (l[f] === 1 && (!T && D || T && I) || l[f] !== 1 && (!T && I || T && D)) && (g = f === "x" ? _ : E);
    }
    w = g[0].x, v = g[0].y;
  }
  return [[e, u, ...g, a, n], w, v, h, m];
}
function jx(e, t, n, r) {
  const o = Math.min(_f(e, t) / 2, _f(t, n) / 2, r), { x: i, y: l } = t;
  if (e.x === i && i === n.x || e.y === l && l === n.y)
    return `L${i} ${l}`;
  if (e.y === l) {
    const a = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * a},${l}Q ${i},${l} ${i},${l + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${l + o * u}Q ${i},${l} ${i + o * s},${l}`;
}
function Nu({ sourceX: e, sourceY: t, sourcePosition: n = W.Bottom, targetX: r, targetY: o, targetPosition: i = W.Top, borderRadius: l = 5, centerX: s, centerY: u, offset: a = 20 }) {
  const [c, f, d, g, w] = Bx({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: u },
    offset: a
  });
  return [c.reduce((N, p, h) => {
    let m = "";
    return h > 0 && h < c.length - 1 ? m = jx(c[h - 1], p, c[h + 1], l) : m = `${h === 0 ? "M" : "L"}${p.x} ${p.y}`, N += m, N;
  }, ""), f, d, g, w];
}
const Dl = R.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, label: o, labelStyle: i, labelShowBg: l, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: a, style: c, sourcePosition: f = W.Bottom, targetPosition: d = W.Top, markerEnd: g, markerStart: w, pathOptions: v, interactionWidth: N }) => {
  const [p, h, m] = Nu({
    sourceX: e,
    sourceY: t,
    sourcePosition: f,
    targetX: n,
    targetY: r,
    targetPosition: d,
    borderRadius: v == null ? void 0 : v.borderRadius,
    offset: v == null ? void 0 : v.offset
  });
  return L.jsx(Wo, { path: p, labelX: h, labelY: m, label: o, labelStyle: i, labelShowBg: l, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: a, style: c, markerEnd: g, markerStart: w, interactionWidth: N });
});
Dl.displayName = "SmoothStepEdge";
const Aa = R.memo((e) => {
  var t;
  return L.jsx(Dl, { ...e, pathOptions: R.useMemo(() => {
    var n;
    return { borderRadius: 0, offset: (n = e.pathOptions) == null ? void 0 : n.offset };
  }, [(t = e.pathOptions) == null ? void 0 : t.offset]) });
});
Aa.displayName = "StepEdge";
function Vx({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, l, s] = Oh({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, l, s];
}
const Da = R.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, label: o, labelStyle: i, labelShowBg: l, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: a, style: c, markerEnd: f, markerStart: d, interactionWidth: g }) => {
  const [w, v, N] = Vx({ sourceX: e, sourceY: t, targetX: n, targetY: r });
  return L.jsx(Wo, { path: w, labelX: v, labelY: N, label: o, labelStyle: i, labelShowBg: l, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: a, style: c, markerEnd: f, markerStart: d, interactionWidth: g });
});
Da.displayName = "StraightEdge";
function hi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ef({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case W.Left:
      return [t - hi(t - r, i), n];
    case W.Right:
      return [t + hi(r - t, i), n];
    case W.Top:
      return [t, n - hi(n - o, i)];
    case W.Bottom:
      return [t, n + hi(o - n, i)];
  }
}
function Bh({ sourceX: e, sourceY: t, sourcePosition: n = W.Bottom, targetX: r, targetY: o, targetPosition: i = W.Top, curvature: l = 0.25 }) {
  const [s, u] = Ef({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: l
  }), [a, c] = Ef({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: l
  }), [f, d, g, w] = Fh({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: u,
    targetControlX: a,
    targetControlY: c
  });
  return [
    `M${e},${t} C${s},${u} ${a},${c} ${r},${o}`,
    f,
    d,
    g,
    w
  ];
}
const cl = R.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourcePosition: o = W.Bottom, targetPosition: i = W.Top, label: l, labelStyle: s, labelShowBg: u, labelBgStyle: a, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: g, markerStart: w, pathOptions: v, interactionWidth: N }) => {
  const [p, h, m] = Bh({
    sourceX: e,
    sourceY: t,
    sourcePosition: o,
    targetX: n,
    targetY: r,
    targetPosition: i,
    curvature: v == null ? void 0 : v.curvature
  });
  return L.jsx(Wo, { path: p, labelX: h, labelY: m, label: l, labelStyle: s, labelShowBg: u, labelBgStyle: a, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: g, markerStart: w, interactionWidth: N });
});
cl.displayName = "BezierEdge";
const La = R.createContext(null), Ux = La.Provider;
La.Consumer;
const Wx = () => R.useContext(La), Yx = (e) => "id" in e && "source" in e && "target" in e, Xx = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `reactflow__edge-${e}${t || ""}-${n}${r || ""}`, Cu = (e, t) => typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`, Kx = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Qx = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Yx(e) ? n = { ...e } : n = {
    ...e,
    id: Xx(e)
  }, Kx(n, t) ? t : t.concat(n);
}, jh = ({ x: e, y: t }, [n, r, o], i, [l, s]) => {
  const u = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? {
    x: l * Math.round(u.x / l),
    y: s * Math.round(u.y / s)
  } : u;
}, Zx = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), vr = (e, t = [0, 0]) => {
  if (!e)
    return {
      x: 0,
      y: 0,
      positionAbsolute: {
        x: 0,
        y: 0
      }
    };
  const n = (e.width ?? 0) * t[0], r = (e.height ?? 0) * t[1], o = {
    x: e.position.x - n,
    y: e.position.y - r
  };
  return {
    ...o,
    positionAbsolute: e.positionAbsolute ? {
      x: e.positionAbsolute.x - n,
      y: e.positionAbsolute.y - r
    } : o
  };
}, Vh = (e, t = [0, 0]) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const { x: i, y: l } = vr(o, t).positionAbsolute;
    return Dx(r, Dh({
      x: i,
      y: l,
      width: o.width || 0,
      height: o.height || 0
    }));
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Lx(n);
}, Uh = (e, t, [n, r, o] = [0, 0, 1], i = !1, l = !1, s = [0, 0]) => {
  const u = {
    x: (t.x - n) / o,
    y: (t.y - r) / o,
    width: t.width / o,
    height: t.height / o
  }, a = [];
  return e.forEach((c) => {
    const { width: f, height: d, selectable: g = !0, hidden: w = !1 } = c;
    if (l && !g || w)
      return !1;
    const { positionAbsolute: v } = vr(c, s), N = {
      x: v.x,
      y: v.y,
      width: f || 0,
      height: d || 0
    }, p = Eu(u, N), h = typeof f > "u" || typeof d > "u" || f === null || d === null, m = i && p > 0, y = (f || 0) * (d || 0);
    (h || m || p >= y || c.dragging) && a.push(c);
  }), a;
}, Wh = (e, t) => {
  const n = e.map((r) => r.id);
  return t.filter((r) => n.includes(r.source) || n.includes(r.target));
}, Yh = (e, t, n, r, o, i = 0.1) => {
  const l = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), u = Math.min(l, s), a = Tr(u, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * a, g = n / 2 - f * a;
  return [d, g, a];
}, Nn = (e, t = 0) => e.transition().duration(t);
function kf(e, t, n, r) {
  return (t[n] || []).reduce((o, i) => {
    var l, s;
    return `${e.id}-${i.id}-${n}` !== r && o.push({
      id: i.id || null,
      type: n,
      nodeId: e.id,
      x: (((l = e.positionAbsolute) == null ? void 0 : l.x) ?? 0) + i.x + i.width / 2,
      y: (((s = e.positionAbsolute) == null ? void 0 : s.y) ?? 0) + i.y + i.height / 2
    }), o;
  }, []);
}
function Gx(e, t, n, r, o, i) {
  const { x: l, y: s } = un(e), a = t.elementsFromPoint(l, s).find((w) => w.classList.contains("react-flow__handle"));
  if (a) {
    const w = a.getAttribute("data-nodeid");
    if (w) {
      const v = Ia(void 0, a), N = a.getAttribute("data-handleid"), p = i({ nodeId: w, id: N, type: v });
      if (p)
        return {
          handle: {
            id: N,
            type: v,
            nodeId: w,
            x: n.x,
            y: n.y
          },
          validHandleResult: p
        };
    }
  }
  let c = [], f = 1 / 0;
  if (o.forEach((w) => {
    const v = Math.sqrt((w.x - n.x) ** 2 + (w.y - n.y) ** 2);
    if (v <= r) {
      const N = i(w);
      v <= f && (v < f ? c = [{ handle: w, validHandleResult: N }] : v === f && c.push({
        handle: w,
        validHandleResult: N
      }), f = v);
    }
  }), !c.length)
    return { handle: null, validHandleResult: Xh() };
  if (c.length === 1)
    return c[0];
  const d = c.some(({ validHandleResult: w }) => w.isValid), g = c.some(({ handle: w }) => w.type === "target");
  return c.find(({ handle: w, validHandleResult: v }) => g ? w.type === "target" : d ? v.isValid : !0) || c[0];
}
const qx = { source: null, target: null, sourceHandle: null, targetHandle: null }, Xh = () => ({
  handleDomNode: null,
  isValid: !1,
  connection: qx,
  endHandle: null
});
function Kh(e, t, n, r, o, i, l) {
  const s = o === "target", u = l.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), a = {
    ...Xh(),
    handleDomNode: u
  };
  if (u) {
    const c = Ia(void 0, u), f = u.getAttribute("data-nodeid"), d = u.getAttribute("data-handleid"), g = u.classList.contains("connectable"), w = u.classList.contains("connectableend"), v = {
      source: s ? f : n,
      sourceHandle: s ? d : r,
      target: s ? n : f,
      targetHandle: s ? r : d
    };
    a.connection = v, g && w && (t === Hn.Strict ? s && c === "source" || !s && c === "target" : f !== n || d !== r) && (a.endHandle = {
      nodeId: f,
      handleId: d,
      type: c
    }, a.isValid = i(v));
  }
  return a;
}
function Jx({ nodes: e, nodeId: t, handleId: n, handleType: r }) {
  return e.reduce((o, i) => {
    if (i[ve]) {
      const { handleBounds: l } = i[ve];
      let s = [], u = [];
      l && (s = kf(i, l, "source", `${t}-${n}-${r}`), u = kf(i, l, "target", `${t}-${n}-${r}`)), o.push(...s, ...u);
    }
    return o;
  }, []);
}
function Ia(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function ms(e) {
  e == null || e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
}
function bx(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function Qh({ event: e, handleId: t, nodeId: n, onConnect: r, isTarget: o, getState: i, setState: l, isValidConnection: s, edgeUpdaterType: u, onEdgeUpdateEnd: a }) {
  const c = Ah(e.target), { connectionMode: f, domNode: d, autoPanOnConnect: g, connectionRadius: w, onConnectStart: v, panBy: N, getNodes: p, cancelConnection: h } = i();
  let m = 0, y;
  const { x: _, y: E } = un(e), C = c == null ? void 0 : c.elementFromPoint(_, E), T = Ia(u, C), D = d == null ? void 0 : d.getBoundingClientRect();
  if (!D || !T)
    return;
  let I, F = un(e, D), j = !1, A = null, S = !1, $ = null;
  const M = Jx({
    nodes: p(),
    nodeId: n,
    handleId: t,
    handleType: T
  }), k = () => {
    if (!g)
      return;
    const [z, H] = $h(F, D);
    N({ x: z, y: H }), m = requestAnimationFrame(k);
  };
  l({
    connectionPosition: F,
    connectionStatus: null,
    // connectionNodeId etc will be removed in the next major in favor of connectionStartHandle
    connectionNodeId: n,
    connectionHandleId: t,
    connectionHandleType: T,
    connectionStartHandle: {
      nodeId: n,
      handleId: t,
      type: T
    },
    connectionEndHandle: null
  }), v == null || v(e, { nodeId: n, handleId: t, handleType: T });
  function x(z) {
    const { transform: H } = i();
    F = un(z, D);
    const { handle: B, validHandleResult: Y } = Gx(z, c, jh(F, H, !1, [1, 1]), w, M, (U) => Kh(U, f, n, t, o ? "target" : "source", s, c));
    if (y = B, j || (k(), j = !0), $ = Y.handleDomNode, A = Y.connection, S = Y.isValid, l({
      connectionPosition: y && S ? Zx({
        x: y.x,
        y: y.y
      }, H) : F,
      connectionStatus: bx(!!y, S),
      connectionEndHandle: Y.endHandle
    }), !y && !S && !$)
      return ms(I);
    A.source !== A.target && $ && (ms(I), I = $, $.classList.add("connecting", "react-flow__handle-connecting"), $.classList.toggle("valid", S), $.classList.toggle("react-flow__handle-valid", S));
  }
  function P(z) {
    var H, B;
    (y || $) && A && S && (r == null || r(A)), (B = (H = i()).onConnectEnd) == null || B.call(H, z), u && (a == null || a(z)), ms(I), h(), cancelAnimationFrame(m), j = !1, S = !1, A = null, $ = null, c.removeEventListener("mousemove", x), c.removeEventListener("mouseup", P), c.removeEventListener("touchmove", x), c.removeEventListener("touchend", P);
  }
  c.addEventListener("mousemove", x), c.addEventListener("mouseup", P), c.addEventListener("touchmove", x), c.addEventListener("touchend", P);
}
const Nf = () => !0, eS = (e) => ({
  connectionStartHandle: e.connectionStartHandle,
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName
}), tS = (e, t, n) => (r) => {
  const { connectionStartHandle: o, connectionEndHandle: i, connectionClickStartHandle: l } = r;
  return {
    connecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.handleId) === t && (o == null ? void 0 : o.type) === n || (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.handleId) === t && (i == null ? void 0 : i.type) === n,
    clickConnecting: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.handleId) === t && (l == null ? void 0 : l.type) === n
  };
}, Zh = R.forwardRef(({ type: e = "source", position: t = W.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: l, onConnect: s, children: u, className: a, onMouseDown: c, onTouchStart: f, ...d }, g) => {
  var D, I;
  const w = l || null, v = e === "target", N = Pe(), p = Wx(), { connectOnClick: h, noPanClassName: m } = de(eS, je), { connecting: y, clickConnecting: _ } = de(tS(p, w, e), je);
  p || (I = (D = N.getState()).onError) == null || I.call(D, "010", fn.error010());
  const E = (F) => {
    const { defaultEdgeOptions: j, onConnect: A, hasDefaultEdges: S } = N.getState(), $ = {
      ...j,
      ...F
    };
    if (S) {
      const { edges: M, setEdges: k } = N.getState();
      k(Qx($, M));
    }
    A == null || A($), s == null || s($);
  }, C = (F) => {
    if (!p)
      return;
    const j = Ih(F);
    o && (j && F.button === 0 || !j) && Qh({
      event: F,
      handleId: w,
      nodeId: p,
      onConnect: E,
      isTarget: v,
      getState: N.getState,
      setState: N.setState,
      isValidConnection: n || N.getState().isValidConnection || Nf
    }), j ? c == null || c(F) : f == null || f(F);
  }, T = (F) => {
    const { onClickConnectStart: j, onClickConnectEnd: A, connectionClickStartHandle: S, connectionMode: $, isValidConnection: M } = N.getState();
    if (!p || !S && !o)
      return;
    if (!S) {
      j == null || j(F, { nodeId: p, handleId: w, handleType: e }), N.setState({ connectionClickStartHandle: { nodeId: p, type: e, handleId: w } });
      return;
    }
    const k = Ah(F.target), x = n || M || Nf, { connection: P, isValid: z } = Kh({
      nodeId: p,
      id: w,
      type: e
    }, $, S.nodeId, S.handleId || null, S.type, x, k);
    z && E(P), A == null || A(F), N.setState({ connectionClickStartHandle: null });
  };
  return L.jsx("div", { "data-handleid": w, "data-nodeid": p, "data-handlepos": t, "data-id": `${p}-${w}-${e}`, className: rt([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    m,
    a,
    {
      source: !v,
      target: v,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      connecting: _,
      // this class is used to style the handle when the user is connecting
      connectionindicator: r && (o && !y || i && y)
    }
  ]), onMouseDown: C, onTouchStart: C, onClick: h ? T : void 0, ref: g, ...d, children: u });
});
Zh.displayName = "Handle";
var fl = R.memo(Zh);
const Gh = ({ data: e, isConnectable: t, targetPosition: n = W.Top, sourcePosition: r = W.Bottom }) => L.jsxs(L.Fragment, { children: [L.jsx(fl, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, L.jsx(fl, { type: "source", position: r, isConnectable: t })] });
Gh.displayName = "DefaultNode";
var Mu = R.memo(Gh);
const qh = ({ data: e, isConnectable: t, sourcePosition: n = W.Bottom }) => L.jsxs(L.Fragment, { children: [e == null ? void 0 : e.label, L.jsx(fl, { type: "source", position: n, isConnectable: t })] });
qh.displayName = "InputNode";
var Jh = R.memo(qh);
const bh = ({ data: e, isConnectable: t, targetPosition: n = W.Top }) => L.jsxs(L.Fragment, { children: [L.jsx(fl, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
bh.displayName = "OutputNode";
var e0 = R.memo(bh);
const Oa = () => null;
Oa.displayName = "GroupNode";
const nS = (e) => ({
  selectedNodes: e.getNodes().filter((t) => t.selected),
  selectedEdges: e.edges.filter((t) => t.selected)
}), gi = (e) => e.id;
function rS(e, t) {
  return je(e.selectedNodes.map(gi), t.selectedNodes.map(gi)) && je(e.selectedEdges.map(gi), t.selectedEdges.map(gi));
}
const t0 = R.memo(({ onSelectionChange: e }) => {
  const t = Pe(), { selectedNodes: n, selectedEdges: r } = de(nS, rS);
  return R.useEffect(() => {
    var i, l;
    const o = { nodes: n, edges: r };
    e == null || e(o), (l = (i = t.getState()).onSelectionChange) == null || l.call(i, o);
  }, [n, r, e]), null;
});
t0.displayName = "SelectionListener";
const oS = (e) => !!e.onSelectionChange;
function iS({ onSelectionChange: e }) {
  const t = de(oS);
  return e || t ? L.jsx(t0, { onSelectionChange: e }) : null;
}
const lS = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset
});
function Xn(e, t) {
  R.useEffect(() => {
    typeof e < "u" && t(e);
  }, [e]);
}
function K(e, t, n) {
  R.useEffect(() => {
    typeof t < "u" && n({ [e]: t });
  }, [t]);
}
const sS = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: o, onConnectStart: i, onConnectEnd: l, onClickConnectStart: s, onClickConnectEnd: u, nodesDraggable: a, nodesConnectable: c, nodesFocusable: f, edgesFocusable: d, edgesUpdatable: g, elevateNodesOnSelect: w, minZoom: v, maxZoom: N, nodeExtent: p, onNodesChange: h, onEdgesChange: m, elementsSelectable: y, connectionMode: _, snapGrid: E, snapToGrid: C, translateExtent: T, connectOnClick: D, defaultEdgeOptions: I, fitView: F, fitViewOptions: j, onNodesDelete: A, onEdgesDelete: S, onNodeDrag: $, onNodeDragStart: M, onNodeDragStop: k, onSelectionDrag: x, onSelectionDragStart: P, onSelectionDragStop: z, noPanClassName: H, nodeOrigin: B, rfId: Y, autoPanOnConnect: U, autoPanOnNodeDrag: G, onError: Q, connectionRadius: J, isValidConnection: te }) => {
  const { setNodes: pe, setEdges: ce, setDefaultNodesAndEdges: Ze, setMinZoom: ot, setMaxZoom: mt, setTranslateExtent: he, setNodeExtent: oe, reset: Ae } = de(lS, je), X = Pe();
  return R.useEffect(() => {
    const Ft = r == null ? void 0 : r.map((gn) => ({ ...gn, ...I }));
    return Ze(n, Ft), () => {
      Ae();
    };
  }, []), K("defaultEdgeOptions", I, X.setState), K("connectionMode", _, X.setState), K("onConnect", o, X.setState), K("onConnectStart", i, X.setState), K("onConnectEnd", l, X.setState), K("onClickConnectStart", s, X.setState), K("onClickConnectEnd", u, X.setState), K("nodesDraggable", a, X.setState), K("nodesConnectable", c, X.setState), K("nodesFocusable", f, X.setState), K("edgesFocusable", d, X.setState), K("edgesUpdatable", g, X.setState), K("elementsSelectable", y, X.setState), K("elevateNodesOnSelect", w, X.setState), K("snapToGrid", C, X.setState), K("snapGrid", E, X.setState), K("onNodesChange", h, X.setState), K("onEdgesChange", m, X.setState), K("connectOnClick", D, X.setState), K("fitViewOnInit", F, X.setState), K("fitViewOnInitOptions", j, X.setState), K("onNodesDelete", A, X.setState), K("onEdgesDelete", S, X.setState), K("onNodeDrag", $, X.setState), K("onNodeDragStart", M, X.setState), K("onNodeDragStop", k, X.setState), K("onSelectionDrag", x, X.setState), K("onSelectionDragStart", P, X.setState), K("onSelectionDragStop", z, X.setState), K("noPanClassName", H, X.setState), K("nodeOrigin", B, X.setState), K("rfId", Y, X.setState), K("autoPanOnConnect", U, X.setState), K("autoPanOnNodeDrag", G, X.setState), K("onError", Q, X.setState), K("connectionRadius", J, X.setState), K("isValidConnection", te, X.setState), Xn(e, pe), Xn(t, ce), Xn(v, ot), Xn(N, mt), Xn(T, he), Xn(p, oe), null;
}, Cf = { display: "none" }, uS = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, n0 = "react-flow__node-desc", r0 = "react-flow__edge-desc", aS = "react-flow__aria-live", cS = (e) => e.ariaLiveMessage;
function fS({ rfId: e }) {
  const t = de(cS);
  return L.jsx("div", { id: `${aS}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: uS, children: t });
}
function dS({ rfId: e, disableKeyboardA11y: t }) {
  return L.jsxs(L.Fragment, { children: [L.jsxs("div", { id: `${n0}-${e}`, style: Cf, children: ["Press enter or space to select a node.", !t && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "] }), L.jsx("div", { id: `${r0}-${e}`, style: Cf, children: "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel." }), !t && L.jsx(fS, { rfId: e })] });
}
const pS = (e, t, n) => n === W.Left ? e - t : n === W.Right ? e + t : e, hS = (e, t, n) => n === W.Top ? e - t : n === W.Bottom ? e + t : e, Mf = "react-flow__edgeupdater", Pf = ({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: l, type: s }) => L.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: l, className: rt([Mf, `${Mf}-${s}`]), cx: pS(t, r, e), cy: hS(n, r, e), r, stroke: "transparent", fill: "transparent" }), gS = () => !0;
var Kn = (e) => {
  const t = ({ id: n, className: r, type: o, data: i, onClick: l, onEdgeDoubleClick: s, selected: u, animated: a, label: c, labelStyle: f, labelShowBg: d, labelBgStyle: g, labelBgPadding: w, labelBgBorderRadius: v, style: N, source: p, target: h, sourceX: m, sourceY: y, targetX: _, targetY: E, sourcePosition: C, targetPosition: T, elementsSelectable: D, hidden: I, sourceHandleId: F, targetHandleId: j, onContextMenu: A, onMouseEnter: S, onMouseMove: $, onMouseLeave: M, edgeUpdaterRadius: k, onEdgeUpdate: x, onEdgeUpdateStart: P, onEdgeUpdateEnd: z, markerEnd: H, markerStart: B, rfId: Y, ariaLabel: U, isFocusable: G, isUpdatable: Q, pathOptions: J, interactionWidth: te }) => {
    const pe = R.useRef(null), [ce, Ze] = R.useState(!1), [ot, mt] = R.useState(!1), he = Pe(), oe = R.useMemo(() => `url(#${Cu(B, Y)})`, [B, Y]), Ae = R.useMemo(() => `url(#${Cu(H, Y)})`, [H, Y]);
    if (I)
      return null;
    const X = (De) => {
      const { edges: it, addSelectedEdges: vn } = he.getState();
      if (D && (he.setState({ nodesSelectionActive: !1 }), vn([n])), l) {
        const wn = it.find((xn) => xn.id === n);
        l(De, wn);
      }
    }, Ft = Qr(n, he.getState, s), gn = Qr(n, he.getState, A), Dr = Qr(n, he.getState, S), Lr = Qr(n, he.getState, $), Vn = Qr(n, he.getState, M), mn = (De, it) => {
      if (De.button !== 0)
        return;
      const { edges: vn, isValidConnection: wn } = he.getState(), xn = it ? h : p, Yo = (it ? j : F) || null, Sn = it ? "target" : "source", Ll = wn || gS, Il = it, Or = vn.find((_n) => _n.id === n);
      mt(!0), P == null || P(De, Or, Sn);
      const Ol = (_n) => {
        mt(!1), z == null || z(_n, Or, Sn);
      };
      Qh({
        event: De,
        handleId: Yo,
        nodeId: xn,
        onConnect: (_n) => x == null ? void 0 : x(Or, _n),
        isTarget: Il,
        getState: he.getState,
        setState: he.setState,
        isValidConnection: Ll,
        edgeUpdaterType: Sn,
        onEdgeUpdateEnd: Ol
      });
    }, Ht = (De) => mn(De, !0), Un = (De) => mn(De, !1), Bt = () => Ze(!0), yn = () => Ze(!1), Ir = !D && !l, Wn = (De) => {
      var it;
      if (Lh.includes(De.key) && D) {
        const { unselectNodesAndEdges: vn, addSelectedEdges: wn, edges: xn } = he.getState();
        De.key === "Escape" ? ((it = pe.current) == null || it.blur(), vn({ edges: [xn.find((Sn) => Sn.id === n)] })) : wn([n]);
      }
    };
    return L.jsxs("g", { className: rt([
      "react-flow__edge",
      `react-flow__edge-${o}`,
      r,
      { selected: u, animated: a, inactive: Ir, updating: ce }
    ]), onClick: X, onDoubleClick: Ft, onContextMenu: gn, onMouseEnter: Dr, onMouseMove: Lr, onMouseLeave: Vn, onKeyDown: G ? Wn : void 0, tabIndex: G ? 0 : void 0, role: G ? "button" : void 0, "data-testid": `rf__edge-${n}`, "aria-label": U === null ? void 0 : U || `Edge from ${p} to ${h}`, "aria-describedby": G ? `${r0}-${Y}` : void 0, ref: pe, children: [!ot && L.jsx(e, { id: n, source: p, target: h, selected: u, animated: a, label: c, labelStyle: f, labelShowBg: d, labelBgStyle: g, labelBgPadding: w, labelBgBorderRadius: v, data: i, style: N, sourceX: m, sourceY: y, targetX: _, targetY: E, sourcePosition: C, targetPosition: T, sourceHandleId: F, targetHandleId: j, markerStart: oe, markerEnd: Ae, pathOptions: J, interactionWidth: te }), Q && L.jsxs(L.Fragment, { children: [(Q === "source" || Q === !0) && L.jsx(Pf, { position: C, centerX: m, centerY: y, radius: k, onMouseDown: Ht, onMouseEnter: Bt, onMouseOut: yn, type: "source" }), (Q === "target" || Q === !0) && L.jsx(Pf, { position: T, centerX: _, centerY: E, radius: k, onMouseDown: Un, onMouseEnter: Bt, onMouseOut: yn, type: "target" })] })] });
  };
  return t.displayName = "EdgeWrapper", R.memo(t);
};
function mS(e) {
  const t = {
    default: Kn(e.default || cl),
    straight: Kn(e.bezier || Da),
    step: Kn(e.step || Aa),
    smoothstep: Kn(e.step || Dl),
    simplebezier: Kn(e.simplebezier || $a)
  }, n = {}, r = Object.keys(e).filter((o) => !["default", "bezier"].includes(o)).reduce((o, i) => (o[i] = Kn(e[i] || cl), o), n);
  return {
    ...t,
    ...r
  };
}
function zf(e, t, n = null) {
  const r = ((n == null ? void 0 : n.x) || 0) + t.x, o = ((n == null ? void 0 : n.y) || 0) + t.y, i = (n == null ? void 0 : n.width) || t.width, l = (n == null ? void 0 : n.height) || t.height;
  switch (e) {
    case W.Top:
      return {
        x: r + i / 2,
        y: o
      };
    case W.Right:
      return {
        x: r + i,
        y: o + l / 2
      };
    case W.Bottom:
      return {
        x: r + i / 2,
        y: o + l
      };
    case W.Left:
      return {
        x: r,
        y: o + l / 2
      };
  }
}
function Tf(e, t) {
  return e ? e.length === 1 || !t ? e[0] : t && e.find((n) => n.id === t) || null : null;
}
const yS = (e, t, n, r, o, i) => {
  const l = zf(n, e, t), s = zf(i, r, o);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: s.x,
    targetY: s.y
  };
};
function vS({ sourcePos: e, targetPos: t, sourceWidth: n, sourceHeight: r, targetWidth: o, targetHeight: i, width: l, height: s, transform: u }) {
  const a = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + o),
    y2: Math.max(e.y + r, t.y + i)
  };
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const c = Dh({
    x: (0 - u[0]) / u[2],
    y: (0 - u[1]) / u[2],
    width: l / u[2],
    height: s / u[2]
  }), f = Math.max(0, Math.min(c.x2, a.x2) - Math.max(c.x, a.x)), d = Math.max(0, Math.min(c.y2, a.y2) - Math.max(c.y, a.y));
  return Math.ceil(f * d) > 0;
}
function Rf(e) {
  var r, o, i, l, s;
  const t = ((r = e == null ? void 0 : e[ve]) == null ? void 0 : r.handleBounds) || null, n = t && (e == null ? void 0 : e.width) && (e == null ? void 0 : e.height) && typeof ((o = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : o.x) < "u" && typeof ((i = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : i.y) < "u";
  return [
    {
      x: ((l = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : l.x) || 0,
      y: ((s = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : s.y) || 0,
      width: (e == null ? void 0 : e.width) || 0,
      height: (e == null ? void 0 : e.height) || 0
    },
    t,
    !!n
  ];
}
function o0(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t.get(e.parentNode);
  return n ? n.selected ? !0 : o0(n, t) : !1;
}
function $f(e, t, n) {
  let r = e;
  do {
    if (r != null && r.matches(t))
      return !0;
    if (r === n.current)
      return !1;
    r = r.parentElement;
  } while (r);
  return !1;
}
function wS(e, t, n, r) {
  return Array.from(e.values()).filter((o) => (o.selected || o.id === r) && (!o.parentNode || !o0(o, e)) && (o.draggable || t && typeof o.draggable > "u")).map((o) => {
    var i, l;
    return {
      id: o.id,
      position: o.position || { x: 0, y: 0 },
      positionAbsolute: o.positionAbsolute || { x: 0, y: 0 },
      distance: {
        x: n.x - (((i = o.positionAbsolute) == null ? void 0 : i.x) ?? 0),
        y: n.y - (((l = o.positionAbsolute) == null ? void 0 : l.y) ?? 0)
      },
      delta: {
        x: 0,
        y: 0
      },
      extent: o.extent,
      parentNode: o.parentNode,
      width: o.width,
      height: o.height
    };
  });
}
function xS(e, t) {
  return !t || t === "parent" ? t : [t[0], [t[1][0] - (e.width || 0), t[1][1] - (e.height || 0)]];
}
function i0(e, t, n, r, o = [0, 0], i) {
  const l = xS(e, e.extent || r);
  let s = l;
  if (e.extent === "parent")
    if (e.parentNode && e.width && e.height) {
      const c = n.get(e.parentNode), { x: f, y: d } = vr(c, o).positionAbsolute;
      s = c && be(f) && be(d) && be(c.width) && be(c.height) ? [
        [f + e.width * o[0], d + e.height * o[1]],
        [
          f + c.width - e.width + e.width * o[0],
          d + c.height - e.height + e.height * o[1]
        ]
      ] : s;
    } else
      i == null || i("005", fn.error005()), s = l;
  else if (e.extent && e.parentNode) {
    const c = n.get(e.parentNode), { x: f, y: d } = vr(c, o).positionAbsolute;
    s = [
      [e.extent[0][0] + f, e.extent[0][1] + d],
      [e.extent[1][0] + f, e.extent[1][1] + d]
    ];
  }
  let u = { x: 0, y: 0 };
  if (e.parentNode) {
    const c = n.get(e.parentNode);
    u = vr(c, o).positionAbsolute;
  }
  const a = s ? Ra(t, s) : t;
  return {
    position: {
      x: a.x - u.x,
      y: a.y - u.y
    },
    positionAbsolute: a
  };
}
function ys({ nodeId: e, dragItems: t, nodeInternals: n }) {
  const r = t.map((o) => ({
    ...n.get(o.id),
    position: o.position,
    positionAbsolute: o.positionAbsolute
  }));
  return [e ? r.find((o) => o.id === e) : r[0], r];
}
const Af = (e, t, n, r) => {
  const o = t.querySelectorAll(e);
  if (!o || !o.length)
    return null;
  const i = Array.from(o), l = t.getBoundingClientRect(), s = {
    x: l.width * r[0],
    y: l.height * r[1]
  };
  return i.map((u) => {
    const a = u.getBoundingClientRect();
    return {
      id: u.getAttribute("data-handleid"),
      position: u.getAttribute("data-handlepos"),
      x: (a.left - l.left - s.x) / n,
      y: (a.top - l.top - s.y) / n,
      ...Ta(u)
    };
  });
};
function Zr(e, t, n) {
  return n === void 0 ? n : (r) => {
    const o = t().nodeInternals.get(e);
    n(r, { ...o });
  };
}
function Pu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: l, nodeInternals: s } = t.getState(), u = s.get(e);
  t.setState({ nodesSelectionActive: !1 }), u.selected ? (n || u.selected && l) && (i({ nodes: [u] }), requestAnimationFrame(() => {
    var a;
    return (a = r == null ? void 0 : r.current) == null ? void 0 : a.blur();
  })) : o([e]);
}
function SS() {
  const e = Pe();
  return R.useCallback(({ sourceEvent: n }) => {
    const { transform: r, snapGrid: o, snapToGrid: i } = e.getState(), l = n.touches ? n.touches[0].clientX : n.clientX, s = n.touches ? n.touches[0].clientY : n.clientY, u = {
      x: (l - r[0]) / r[2],
      y: (s - r[1]) / r[2]
    };
    return {
      xSnapped: i ? o[0] * Math.round(u.x / o[0]) : u.x,
      ySnapped: i ? o[1] * Math.round(u.y / o[1]) : u.y,
      ...u
    };
  }, []);
}
function vs(e) {
  return (t, n, r) => e == null ? void 0 : e(t, r);
}
function l0({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, selectNodesOnDrag: l }) {
  const s = Pe(), [u, a] = R.useState(!1), c = R.useRef([]), f = R.useRef({ x: null, y: null }), d = R.useRef(0), g = R.useRef(null), w = R.useRef({ x: 0, y: 0 }), v = R.useRef(null), N = R.useRef(!1), p = SS();
  return R.useEffect(() => {
    if (e != null && e.current) {
      const h = ct(e.current), m = ({ x: _, y: E }) => {
        const { nodeInternals: C, onNodeDrag: T, onSelectionDrag: D, updateNodePositions: I, nodeExtent: F, snapGrid: j, snapToGrid: A, nodeOrigin: S, onError: $ } = s.getState();
        f.current = { x: _, y: E };
        let M = !1;
        if (c.current = c.current.map((x) => {
          const P = { x: _ - x.distance.x, y: E - x.distance.y };
          A && (P.x = j[0] * Math.round(P.x / j[0]), P.y = j[1] * Math.round(P.y / j[1]));
          const z = i0(x, P, C, F, S, $);
          return M = M || x.position.x !== z.position.x || x.position.y !== z.position.y, x.position = z.position, x.positionAbsolute = z.positionAbsolute, x;
        }), !M)
          return;
        I(c.current, !0, !0), a(!0);
        const k = o ? T : vs(D);
        if (k && v.current) {
          const [x, P] = ys({
            nodeId: o,
            dragItems: c.current,
            nodeInternals: C
          });
          k(v.current, x, P);
        }
      }, y = () => {
        if (!g.current)
          return;
        const [_, E] = $h(w.current, g.current);
        if (_ !== 0 || E !== 0) {
          const { transform: C, panBy: T } = s.getState();
          f.current.x = (f.current.x ?? 0) - _ / C[2], f.current.y = (f.current.y ?? 0) - E / C[2], T({ x: _, y: E }) && m(f.current);
        }
        d.current = requestAnimationFrame(y);
      };
      if (t)
        h.on(".drag", null);
      else {
        const _ = O1().on("start", (E) => {
          var M;
          const { nodeInternals: C, multiSelectionActive: T, domNode: D, nodesDraggable: I, unselectNodesAndEdges: F, onNodeDragStart: j, onSelectionDragStart: A } = s.getState(), S = o ? j : vs(A);
          !l && !T && o && ((M = C.get(o)) != null && M.selected || F()), o && i && l && Pu({
            id: o,
            store: s,
            nodeRef: e
          });
          const $ = p(E);
          if (f.current = $, c.current = wS(C, I, $, o), S && c.current) {
            const [k, x] = ys({
              nodeId: o,
              dragItems: c.current,
              nodeInternals: C
            });
            S(E.sourceEvent, k, x);
          }
          g.current = (D == null ? void 0 : D.getBoundingClientRect()) || null, w.current = un(E.sourceEvent, g.current);
        }).on("drag", (E) => {
          const C = p(E), { autoPanOnNodeDrag: T } = s.getState();
          !N.current && T && (N.current = !0, y()), (f.current.x !== C.xSnapped || f.current.y !== C.ySnapped) && c.current && (v.current = E.sourceEvent, w.current = un(E.sourceEvent, g.current), m(C));
        }).on("end", (E) => {
          if (a(!1), N.current = !1, cancelAnimationFrame(d.current), c.current) {
            const { updateNodePositions: C, nodeInternals: T, onNodeDragStop: D, onSelectionDragStop: I } = s.getState(), F = o ? D : vs(I);
            if (C(c.current, !1, !1), F) {
              const [j, A] = ys({
                nodeId: o,
                dragItems: c.current,
                nodeInternals: T
              });
              F(E.sourceEvent, j, A);
            }
          }
        }).filter((E) => {
          const C = E.target;
          return !E.button && (!n || !$f(C, `.${n}`, e)) && (!r || $f(C, r, e));
        });
        return h.call(_), () => {
          h.on(".drag", null);
        };
      }
    }
  }, [
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    l,
    p
  ]), u;
}
function s0() {
  const e = Pe();
  return R.useCallback((n) => {
    const { nodeInternals: r, nodeExtent: o, updateNodePositions: i, getNodes: l, snapToGrid: s, snapGrid: u, onError: a, nodesDraggable: c } = e.getState(), f = l().filter((h) => h.selected && (h.draggable || c && typeof h.draggable > "u")), d = s ? u[0] : 5, g = s ? u[1] : 5, w = n.isShiftPressed ? 4 : 1, v = n.x * d * w, N = n.y * g * w, p = f.map((h) => {
      if (h.positionAbsolute) {
        const m = { x: h.positionAbsolute.x + v, y: h.positionAbsolute.y + N };
        s && (m.x = u[0] * Math.round(m.x / u[0]), m.y = u[1] * Math.round(m.y / u[1]));
        const { positionAbsolute: y, position: _ } = i0(h, m, r, o, void 0, a);
        h.position = _, h.positionAbsolute = y;
      }
      return h;
    });
    i(p, !0, !1);
  }, []);
}
const wr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Gr = (e) => {
  const t = ({ id: n, type: r, data: o, xPos: i, yPos: l, xPosOrigin: s, yPosOrigin: u, selected: a, onClick: c, onMouseEnter: f, onMouseMove: d, onMouseLeave: g, onContextMenu: w, onDoubleClick: v, style: N, className: p, isDraggable: h, isSelectable: m, isConnectable: y, isFocusable: _, selectNodesOnDrag: E, sourcePosition: C, targetPosition: T, hidden: D, resizeObserver: I, dragHandle: F, zIndex: j, isParent: A, noDragClassName: S, noPanClassName: $, initialized: M, disableKeyboardA11y: k, ariaLabel: x, rfId: P }) => {
    const z = Pe(), H = R.useRef(null), B = R.useRef(C), Y = R.useRef(T), U = R.useRef(r), G = m || h || c || f || d || g, Q = s0(), J = Zr(n, z.getState, f), te = Zr(n, z.getState, d), pe = Zr(n, z.getState, g), ce = Zr(n, z.getState, w), Ze = Zr(n, z.getState, v), ot = (oe) => {
      if (m && (!E || !h) && Pu({
        id: n,
        store: z,
        nodeRef: H
      }), c) {
        const Ae = z.getState().nodeInternals.get(n);
        c(oe, { ...Ae });
      }
    }, mt = (oe) => {
      if (!ku(oe))
        if (Lh.includes(oe.key) && m) {
          const Ae = oe.key === "Escape";
          Pu({
            id: n,
            store: z,
            unselect: Ae,
            nodeRef: H
          });
        } else
          !k && h && a && Object.prototype.hasOwnProperty.call(wr, oe.key) && (z.setState({
            ariaLiveMessage: `Moved selected node ${oe.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~i}, y: ${~~l}`
          }), Q({
            x: wr[oe.key].x,
            y: wr[oe.key].y,
            isShiftPressed: oe.shiftKey
          }));
    };
    R.useEffect(() => {
      if (H.current && !D) {
        const oe = H.current;
        return I == null || I.observe(oe), () => I == null ? void 0 : I.unobserve(oe);
      }
    }, [D]), R.useEffect(() => {
      const oe = U.current !== r, Ae = B.current !== C, X = Y.current !== T;
      H.current && (oe || Ae || X) && (oe && (U.current = r), Ae && (B.current = C), X && (Y.current = T), z.getState().updateNodeDimensions([{ id: n, nodeElement: H.current, forceUpdate: !0 }]));
    }, [n, r, C, T]);
    const he = l0({
      nodeRef: H,
      disabled: D || !h,
      noDragClassName: S,
      handleSelector: F,
      nodeId: n,
      isSelectable: m,
      selectNodesOnDrag: E
    });
    return D ? null : L.jsx("div", { className: rt([
      "react-flow__node",
      `react-flow__node-${r}`,
      {
        // this is overwritable by passing `nopan` as a class name
        [$]: h
      },
      p,
      {
        selected: a,
        selectable: m,
        parent: A,
        dragging: he
      }
    ]), ref: H, style: {
      zIndex: j,
      transform: `translate(${s}px,${u}px)`,
      pointerEvents: G ? "all" : "none",
      visibility: M ? "visible" : "hidden",
      ...N
    }, "data-id": n, "data-testid": `rf__node-${n}`, onMouseEnter: J, onMouseMove: te, onMouseLeave: pe, onContextMenu: ce, onClick: ot, onDoubleClick: Ze, onKeyDown: _ ? mt : void 0, tabIndex: _ ? 0 : void 0, role: _ ? "button" : void 0, "aria-describedby": k ? void 0 : `${n0}-${P}`, "aria-label": x, children: L.jsx(Ux, { value: n, children: L.jsx(e, { id: n, data: o, type: r, xPos: i, yPos: l, selected: a, isConnectable: y, sourcePosition: C, targetPosition: T, dragging: he, dragHandle: F, zIndex: j }) }) });
  };
  return t.displayName = "NodeWrapper", R.memo(t);
};
function _S(e) {
  const t = {
    input: Gr(e.input || Jh),
    default: Gr(e.default || Mu),
    output: Gr(e.output || e0),
    group: Gr(e.group || Oa)
  }, n = {}, r = Object.keys(e).filter((o) => !["input", "default", "output", "group"].includes(o)).reduce((o, i) => (o[i] = Gr(e[i] || Mu), o), n);
  return {
    ...t,
    ...r
  };
}
const ES = ({ x: e, y: t, width: n, height: r, origin: o }) => !n || !r ? { x: e, y: t } : o[0] < 0 || o[1] < 0 || o[0] > 1 || o[1] > 1 ? { x: e, y: t } : {
  x: e - n * o[0],
  y: t - r * o[1]
}, kS = typeof document < "u" ? document : null;
var Io = (e = null, t = { target: kS }) => {
  const [n, r] = R.useState(!1), o = R.useRef(!1), i = R.useRef(/* @__PURE__ */ new Set([])), [l, s] = R.useMemo(() => {
    if (e !== null) {
      const a = (Array.isArray(e) ? e : [e]).filter((f) => typeof f == "string").map((f) => f.split("+")), c = a.reduce((f, d) => f.concat(...d), []);
      return [a, c];
    }
    return [[], []];
  }, [e]);
  return R.useEffect(() => {
    var u, a;
    if (e !== null) {
      const c = (g) => {
        if (o.current = g.ctrlKey || g.metaKey || g.shiftKey, !o.current && ku(g))
          return !1;
        const w = Lf(g.code, s);
        i.current.add(g[w]), Df(l, i.current, !1) && (g.preventDefault(), r(!0));
      }, f = (g) => {
        if (!o.current && ku(g))
          return !1;
        const w = Lf(g.code, s);
        Df(l, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(g[w]), o.current = !1;
      }, d = () => {
        i.current.clear(), r(!1);
      };
      return (u = t == null ? void 0 : t.target) == null || u.addEventListener("keydown", c), (a = t == null ? void 0 : t.target) == null || a.addEventListener("keyup", f), window.addEventListener("blur", d), () => {
        var g, w;
        (g = t == null ? void 0 : t.target) == null || g.removeEventListener("keydown", c), (w = t == null ? void 0 : t.target) == null || w.removeEventListener("keyup", f), window.removeEventListener("blur", d);
      };
    }
  }, [e, r]), n;
};
function Df(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function Lf(e, t) {
  return t.includes(e) ? "code" : "key";
}
function u0(e, t, n, r) {
  var l, s;
  if (!e.parentNode)
    return n;
  const o = t.get(e.parentNode), i = vr(o, r);
  return u0(o, t, {
    x: (n.x ?? 0) + i.x,
    y: (n.y ?? 0) + i.y,
    z: (((l = o[ve]) == null ? void 0 : l.z) ?? 0) > (n.z ?? 0) ? ((s = o[ve]) == null ? void 0 : s.z) ?? 0 : n.z ?? 0
  }, r);
}
function a0(e, t, n) {
  e.forEach((r) => {
    var o;
    if (r.parentNode && !e.has(r.parentNode))
      throw new Error(`Parent node ${r.parentNode} not found`);
    if (r.parentNode || n != null && n[r.id]) {
      const { x: i, y: l, z: s } = u0(r, e, {
        ...r.position,
        z: ((o = r[ve]) == null ? void 0 : o.z) ?? 0
      }, t);
      r.positionAbsolute = {
        x: i,
        y: l
      }, r[ve].z = s, n != null && n[r.id] && (r[ve].isParent = !0);
    }
  });
}
function ws(e, t, n, r) {
  const o = /* @__PURE__ */ new Map(), i = {}, l = r ? 1e3 : 0;
  return e.forEach((s) => {
    var f;
    const u = (be(s.zIndex) ? s.zIndex : 0) + (s.selected ? l : 0), a = t.get(s.id), c = {
      width: a == null ? void 0 : a.width,
      height: a == null ? void 0 : a.height,
      ...s,
      positionAbsolute: {
        x: s.position.x,
        y: s.position.y
      }
    };
    s.parentNode && (c.parentNode = s.parentNode, i[s.parentNode] = !0), Object.defineProperty(c, ve, {
      enumerable: !1,
      value: {
        handleBounds: (f = a == null ? void 0 : a[ve]) == null ? void 0 : f.handleBounds,
        z: u
      }
    }), o.set(s.id, c);
  }), a0(o, n, i), o;
}
function c0(e, t = {}) {
  const { getNodes: n, width: r, height: o, minZoom: i, maxZoom: l, d3Zoom: s, d3Selection: u, fitViewOnInitDone: a, fitViewOnInit: c, nodeOrigin: f } = e(), d = t.initial && !a && c;
  if (s && u && (d || !t.initial)) {
    const w = n().filter((N) => {
      var h;
      const p = t.includeHiddenNodes ? N.width && N.height : !N.hidden;
      return (h = t.nodes) != null && h.length ? p && t.nodes.some((m) => m.id === N.id) : p;
    }), v = w.every((N) => N.width && N.height);
    if (w.length > 0 && v) {
      const N = Vh(w, f), [p, h, m] = Yh(N, r, o, t.minZoom ?? i, t.maxZoom ?? l, t.padding ?? 0.1), y = sn.translate(p, h).scale(m);
      return typeof t.duration == "number" && t.duration > 0 ? s.transform(Nn(u, t.duration), y) : s.transform(u, y), !0;
    }
  }
  return !1;
}
function NS(e, t) {
  return e.forEach((n) => {
    const r = t.get(n.id);
    r && t.set(r.id, {
      ...r,
      [ve]: r[ve],
      selected: n.selected
    });
  }), new Map(t);
}
function CS(e, t) {
  return t.map((n) => {
    const r = e.find((o) => o.id === n.id);
    return r && (n.selected = r.selected), n;
  });
}
function mi({ changedNodes: e, changedEdges: t, get: n, set: r }) {
  const { nodeInternals: o, edges: i, onNodesChange: l, onEdgesChange: s, hasDefaultNodes: u, hasDefaultEdges: a } = n();
  e != null && e.length && (u && r({ nodeInternals: NS(e, o) }), l == null || l(e)), t != null && t.length && (a && r({ edges: CS(t, i) }), s == null || s(t));
}
const Qn = () => {
}, MS = {
  zoomIn: Qn,
  zoomOut: Qn,
  zoomTo: Qn,
  getZoom: () => 1,
  setViewport: Qn,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  fitView: () => !1,
  setCenter: Qn,
  fitBounds: Qn,
  project: (e) => e,
  viewportInitialized: !1
}, PS = (e) => ({
  d3Zoom: e.d3Zoom,
  d3Selection: e.d3Selection
}), zS = () => {
  const e = Pe(), { d3Zoom: t, d3Selection: n } = de(PS, je);
  return R.useMemo(() => n && t ? {
    zoomIn: (o) => t.scaleBy(Nn(n, o == null ? void 0 : o.duration), 1.2),
    zoomOut: (o) => t.scaleBy(Nn(n, o == null ? void 0 : o.duration), 1 / 1.2),
    zoomTo: (o, i) => t.scaleTo(Nn(n, i == null ? void 0 : i.duration), o),
    getZoom: () => e.getState().transform[2],
    setViewport: (o, i) => {
      const [l, s, u] = e.getState().transform, a = sn.translate(o.x ?? l, o.y ?? s).scale(o.zoom ?? u);
      t.transform(Nn(n, i == null ? void 0 : i.duration), a);
    },
    getViewport: () => {
      const [o, i, l] = e.getState().transform;
      return { x: o, y: i, zoom: l };
    },
    fitView: (o) => c0(e.getState, o),
    setCenter: (o, i, l) => {
      const { width: s, height: u, maxZoom: a } = e.getState(), c = typeof (l == null ? void 0 : l.zoom) < "u" ? l.zoom : a, f = s / 2 - o * c, d = u / 2 - i * c, g = sn.translate(f, d).scale(c);
      t.transform(Nn(n, l == null ? void 0 : l.duration), g);
    },
    fitBounds: (o, i) => {
      const { width: l, height: s, minZoom: u, maxZoom: a } = e.getState(), [c, f, d] = Yh(o, l, s, u, a, (i == null ? void 0 : i.padding) ?? 0.1), g = sn.translate(c, f).scale(d);
      t.transform(Nn(n, i == null ? void 0 : i.duration), g);
    },
    project: (o) => {
      const { transform: i, snapToGrid: l, snapGrid: s } = e.getState();
      return jh(o, i, l, s);
    },
    viewportInitialized: !0
  } : MS, [t, n]);
};
function f0() {
  const e = zS(), t = Pe(), n = R.useCallback(() => t.getState().getNodes().map((v) => ({ ...v })), []), r = R.useCallback((v) => t.getState().nodeInternals.get(v), []), o = R.useCallback(() => {
    const { edges: v = [] } = t.getState();
    return v.map((N) => ({ ...N }));
  }, []), i = R.useCallback((v) => {
    const { edges: N = [] } = t.getState();
    return N.find((p) => p.id === v);
  }, []), l = R.useCallback((v) => {
    const { getNodes: N, setNodes: p, hasDefaultNodes: h, onNodesChange: m } = t.getState(), y = N(), _ = typeof v == "function" ? v(y) : v;
    if (h)
      p(_);
    else if (m) {
      const E = _.length === 0 ? y.map((C) => ({ type: "remove", id: C.id })) : _.map((C) => ({ item: C, type: "reset" }));
      m(E);
    }
  }, []), s = R.useCallback((v) => {
    const { edges: N = [], setEdges: p, hasDefaultEdges: h, onEdgesChange: m } = t.getState(), y = typeof v == "function" ? v(N) : v;
    if (h)
      p(y);
    else if (m) {
      const _ = y.length === 0 ? N.map((E) => ({ type: "remove", id: E.id })) : y.map((E) => ({ item: E, type: "reset" }));
      m(_);
    }
  }, []), u = R.useCallback((v) => {
    const N = Array.isArray(v) ? v : [v], { getNodes: p, setNodes: h, hasDefaultNodes: m, onNodesChange: y } = t.getState();
    if (m) {
      const E = [...p(), ...N];
      h(E);
    } else if (y) {
      const _ = N.map((E) => ({ item: E, type: "add" }));
      y(_);
    }
  }, []), a = R.useCallback((v) => {
    const N = Array.isArray(v) ? v : [v], { edges: p = [], setEdges: h, hasDefaultEdges: m, onEdgesChange: y } = t.getState();
    if (m)
      h([...p, ...N]);
    else if (y) {
      const _ = N.map((E) => ({ item: E, type: "add" }));
      y(_);
    }
  }, []), c = R.useCallback(() => {
    const { getNodes: v, edges: N = [], transform: p } = t.getState(), [h, m, y] = p;
    return {
      nodes: v().map((_) => ({ ..._ })),
      edges: N.map((_) => ({ ..._ })),
      viewport: {
        x: h,
        y: m,
        zoom: y
      }
    };
  }, []), f = R.useCallback(({ nodes: v, edges: N }) => {
    const { nodeInternals: p, getNodes: h, edges: m, hasDefaultNodes: y, hasDefaultEdges: _, onNodesDelete: E, onEdgesDelete: C, onNodesChange: T, onEdgesChange: D } = t.getState(), I = (v || []).map(($) => $.id), F = (N || []).map(($) => $.id), j = h().reduce(($, M) => {
      const k = !I.includes(M.id) && M.parentNode && $.find((P) => P.id === M.parentNode);
      return (typeof M.deletable == "boolean" ? M.deletable : !0) && (I.includes(M.id) || k) && $.push(M), $;
    }, []), A = m.filter(($) => typeof $.deletable == "boolean" ? $.deletable : !0), S = A.filter(($) => F.includes($.id));
    if (j || S) {
      const $ = Wh(j, A), M = [...S, ...$], k = M.reduce((x, P) => (x.includes(P.id) || x.push(P.id), x), []);
      if ((_ || y) && (_ && t.setState({
        edges: m.filter((x) => !k.includes(x.id))
      }), y && (j.forEach((x) => {
        p.delete(x.id);
      }), t.setState({
        nodeInternals: new Map(p)
      }))), k.length > 0 && (C == null || C(M), D && D(k.map((x) => ({
        id: x,
        type: "remove"
      })))), j.length > 0 && (E == null || E(j), T)) {
        const x = j.map((P) => ({ id: P.id, type: "remove" }));
        T(x);
      }
    }
  }, []), d = R.useCallback((v) => {
    const N = Ix(v), p = N ? null : t.getState().nodeInternals.get(v.id);
    return [N ? v : wf(p), p, N];
  }, []), g = R.useCallback((v, N = !0, p) => {
    const [h, m, y] = d(v);
    return h ? (p || t.getState().getNodes()).filter((_) => {
      if (!y && (_.id === m.id || !_.positionAbsolute))
        return !1;
      const E = wf(_), C = Eu(E, h);
      return N && C > 0 || C >= v.width * v.height;
    }) : [];
  }, []), w = R.useCallback((v, N, p = !0) => {
    const [h] = d(v);
    if (!h)
      return !1;
    const m = Eu(h, N);
    return p && m > 0 || m >= v.width * v.height;
  }, []);
  return R.useMemo(() => ({
    ...e,
    getNodes: n,
    getNode: r,
    getEdges: o,
    getEdge: i,
    setNodes: l,
    setEdges: s,
    addNodes: u,
    addEdges: a,
    toObject: c,
    deleteElements: f,
    getIntersectingNodes: g,
    isNodeIntersecting: w
  }), [
    e,
    n,
    r,
    o,
    i,
    l,
    s,
    u,
    a,
    c,
    f,
    g,
    w
  ]);
}
var TS = ({ deleteKeyCode: e, multiSelectionKeyCode: t }) => {
  const n = Pe(), { deleteElements: r } = f0(), o = Io(e), i = Io(t);
  R.useEffect(() => {
    if (o) {
      const { edges: l, getNodes: s } = n.getState(), u = s().filter((c) => c.selected), a = l.filter((c) => c.selected);
      r({ nodes: u, edges: a }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), R.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
};
function RS(e) {
  const t = Pe();
  R.useEffect(() => {
    let n;
    const r = () => {
      var i, l;
      if (!e.current)
        return;
      const o = Ta(e.current);
      (o.height === 0 || o.width === 0) && ((l = (i = t.getState()).onError) == null || l.call(i, "004", fn.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
    };
    return r(), window.addEventListener("resize", r), e.current && (n = new ResizeObserver(() => r()), n.observe(e.current)), () => {
      window.removeEventListener("resize", r), n && e.current && n.unobserve(e.current);
    };
  }, []);
}
const Fa = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, $S = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, xs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Zn = (e, t) => e.target.closest(`.${t}`), If = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), AS = (e) => ({
  d3Zoom: e.d3Zoom,
  d3Selection: e.d3Selection,
  d3ZoomHandler: e.d3ZoomHandler,
  userSelectionActive: e.userSelectionActive
}), DS = ({ onMove: e, onMoveStart: t, onMoveEnd: n, onPaneContextMenu: r, zoomOnScroll: o = !0, zoomOnPinch: i = !0, panOnScroll: l = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: u = yr.Free, zoomOnDoubleClick: a = !0, elementsSelectable: c, panOnDrag: f = !0, defaultViewport: d, translateExtent: g, minZoom: w, maxZoom: v, zoomActivationKeyCode: N, preventScrolling: p = !0, children: h, noWheelClassName: m, noPanClassName: y }) => {
  const _ = R.useRef(), E = Pe(), C = R.useRef(!1), T = R.useRef(!1), D = R.useRef(null), I = R.useRef({ x: 0, y: 0, zoom: 0 }), { d3Zoom: F, d3Selection: j, d3ZoomHandler: A, userSelectionActive: S } = de(AS, je), $ = Io(N), M = R.useRef(0);
  return RS(D), R.useEffect(() => {
    if (D.current) {
      const k = D.current.getBoundingClientRect(), x = Mx().scaleExtent([w, v]).translateExtent(g), P = ct(D.current).call(x), z = sn.translate(d.x, d.y).scale(Tr(d.zoom, w, v)), H = [
        [0, 0],
        [k.width, k.height]
      ], B = x.constrain()(z, H, g);
      x.transform(P, B), E.setState({
        d3Zoom: x,
        d3Selection: P,
        d3ZoomHandler: P.on("wheel.zoom"),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [B.x, B.y, B.k],
        domNode: D.current.closest(".react-flow")
      });
    }
  }, []), R.useEffect(() => {
    j && F && (l && !$ && !S ? j.on("wheel.zoom", (k) => {
      if (Zn(k, m))
        return !1;
      k.preventDefault(), k.stopImmediatePropagation();
      const x = j.property("__zoom").k || 1;
      if (k.ctrlKey && i) {
        const B = wt(k), Y = -k.deltaY * (k.deltaMode === 1 ? 0.05 : k.deltaMode ? 1 : 2e-3) * 10, U = x * Math.pow(2, Y);
        F.scaleTo(j, U, B);
        return;
      }
      const P = k.deltaMode === 1 ? 20 : 1, z = u === yr.Vertical ? 0 : k.deltaX * P, H = u === yr.Horizontal ? 0 : k.deltaY * P;
      F.translateBy(j, -(z / x) * s, -(H / x) * s);
    }, { passive: !1 }) : typeof A < "u" && j.on("wheel.zoom", function(k, x) {
      if (!p || Zn(k, m))
        return null;
      k.preventDefault(), A.call(this, k, x);
    }, { passive: !1 }));
  }, [
    S,
    l,
    u,
    j,
    F,
    A,
    $,
    i,
    p,
    m
  ]), R.useEffect(() => {
    F && F.on("start", (k) => {
      var P;
      if (!k.sourceEvent)
        return null;
      M.current = k.sourceEvent.button;
      const { onViewportChangeStart: x } = E.getState();
      if (C.current = !0, ((P = k.sourceEvent) == null ? void 0 : P.type) === "mousedown" && E.setState({ paneDragging: !0 }), t || x) {
        const z = xs(k.transform);
        I.current = z, x == null || x(z), t == null || t(k.sourceEvent, z);
      }
    });
  }, [F, t]), R.useEffect(() => {
    F && (S && !C.current ? F.on("zoom", null) : S || F.on("zoom", (k) => {
      const { onViewportChange: x } = E.getState();
      if (E.setState({ transform: [k.transform.x, k.transform.y, k.transform.k] }), T.current = !!(r && If(f, M.current ?? 0)), e || x) {
        const P = xs(k.transform);
        x == null || x(P), e == null || e(k.sourceEvent, P);
      }
    }));
  }, [S, F, e, f, r]), R.useEffect(() => {
    F && F.on("end", (k) => {
      if (!k.sourceEvent)
        return null;
      const { onViewportChangeEnd: x } = E.getState();
      if (C.current = !1, E.setState({ paneDragging: !1 }), r && If(f, M.current ?? 0) && !T.current && r(k.sourceEvent), T.current = !1, (n || x) && $S(I.current, k.transform)) {
        const P = xs(k.transform);
        I.current = P, clearTimeout(_.current), _.current = setTimeout(() => {
          x == null || x(P), n == null || n(k.sourceEvent, P);
        }, l ? 150 : 0);
      }
    });
  }, [F, l, f, n, r]), R.useEffect(() => {
    F && F.filter((k) => {
      const x = $ || o, P = i && k.ctrlKey;
      if (k.button === 1 && k.type === "mousedown" && (Zn(k, "react-flow__node") || Zn(k, "react-flow__edge")))
        return !0;
      if (!f && !x && !l && !a && !i || S || !a && k.type === "dblclick" || Zn(k, m) && k.type === "wheel" || Zn(k, y) && k.type !== "wheel" || !i && k.ctrlKey && k.type === "wheel" || !x && !l && !P && k.type === "wheel" || !f && (k.type === "mousedown" || k.type === "touchstart") || Array.isArray(f) && !f.includes(k.button) && (k.type === "mousedown" || k.type === "touchstart"))
        return !1;
      const z = Array.isArray(f) && f.includes(k.button) || !k.button || k.button <= 1;
      return (!k.ctrlKey || k.type === "wheel") && z;
    });
  }, [
    S,
    F,
    o,
    i,
    l,
    a,
    f,
    c,
    $
  ]), L.jsx("div", { className: "react-flow__renderer", ref: D, style: Fa, children: h });
}, LS = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function IS() {
  const { userSelectionActive: e, userSelectionRect: t } = de(LS, je);
  return e && t ? L.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
function Of(e, t) {
  const n = e.find((r) => r.id === t.parentNode);
  if (n) {
    const r = t.position.x + t.width - n.width, o = t.position.y + t.height - n.height;
    if (r > 0 || o > 0 || t.position.x < 0 || t.position.y < 0) {
      if (n.style = { ...n.style }, n.style.width = n.style.width ?? n.width, n.style.height = n.style.height ?? n.height, r > 0 && (n.style.width += r), o > 0 && (n.style.height += o), t.position.x < 0) {
        const i = Math.abs(t.position.x);
        n.position.x = n.position.x - i, n.style.width += i, t.position.x = 0;
      }
      if (t.position.y < 0) {
        const i = Math.abs(t.position.y);
        n.position.y = n.position.y - i, n.style.height += i, t.position.y = 0;
      }
      n.width = n.style.width, n.height = n.style.height;
    }
  }
}
function d0(e, t) {
  if (e.some((r) => r.type === "reset"))
    return e.filter((r) => r.type === "reset").map((r) => r.item);
  const n = e.filter((r) => r.type === "add").map((r) => r.item);
  return t.reduce((r, o) => {
    const i = e.filter((s) => s.id === o.id);
    if (i.length === 0)
      return r.push(o), r;
    const l = { ...o };
    for (const s of i)
      if (s)
        switch (s.type) {
          case "select": {
            l.selected = s.selected;
            break;
          }
          case "position": {
            typeof s.position < "u" && (l.position = s.position), typeof s.positionAbsolute < "u" && (l.positionAbsolute = s.positionAbsolute), typeof s.dragging < "u" && (l.dragging = s.dragging), l.expandParent && Of(r, l);
            break;
          }
          case "dimensions": {
            typeof s.dimensions < "u" && (l.width = s.dimensions.width, l.height = s.dimensions.height), typeof s.updateStyle < "u" && (l.style = { ...l.style || {}, ...s.dimensions }), typeof s.resizing == "boolean" && (l.resizing = s.resizing), l.expandParent && Of(r, l);
            break;
          }
          case "remove":
            return r;
        }
    return r.push(l), r;
  }, n);
}
function p0(e, t) {
  return d0(e, t);
}
function OS(e, t) {
  return d0(e, t);
}
const Xt = (e, t) => ({
  id: e,
  type: "select",
  selected: t
});
function ur(e, t) {
  return e.reduce((n, r) => {
    const o = t.includes(r.id);
    return !r.selected && o ? (r.selected = !0, n.push(Xt(r.id, !0))) : r.selected && !o && (r.selected = !1, n.push(Xt(r.id, !1))), n;
  }, []);
}
const Ss = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, FS = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  dragging: e.paneDragging
}), h0 = R.memo(({ isSelecting: e, selectionMode: t = Lo.Full, panOnDrag: n, onSelectionStart: r, onSelectionEnd: o, onPaneClick: i, onPaneContextMenu: l, onPaneScroll: s, onPaneMouseEnter: u, onPaneMouseMove: a, onPaneMouseLeave: c, children: f }) => {
  const d = R.useRef(null), g = Pe(), w = R.useRef(0), v = R.useRef(0), N = R.useRef(), { userSelectionActive: p, elementsSelectable: h, dragging: m } = de(FS, je), y = () => {
    g.setState({ userSelectionActive: !1, userSelectionRect: null }), w.current = 0, v.current = 0;
  }, _ = (A) => {
    i == null || i(A), g.getState().resetSelectedElements(), g.setState({ nodesSelectionActive: !1 });
  }, E = (A) => {
    if (Array.isArray(n) && (n != null && n.includes(2))) {
      A.preventDefault();
      return;
    }
    l == null || l(A);
  }, C = s ? (A) => s(A) : void 0, T = (A) => {
    const { resetSelectedElements: S, domNode: $ } = g.getState();
    if (N.current = $ == null ? void 0 : $.getBoundingClientRect(), !h || !e || A.button !== 0 || A.target !== d.current || !N.current)
      return;
    const { x: M, y: k } = un(A, N.current);
    S(), g.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: M,
        startY: k,
        x: M,
        y: k
      }
    }), r == null || r(A);
  }, D = (A) => {
    const { userSelectionRect: S, nodeInternals: $, edges: M, transform: k, onNodesChange: x, onEdgesChange: P, nodeOrigin: z, getNodes: H } = g.getState();
    if (!e || !N.current || !S)
      return;
    g.setState({ userSelectionActive: !0, nodesSelectionActive: !1 });
    const B = un(A, N.current), Y = S.startX ?? 0, U = S.startY ?? 0, G = {
      ...S,
      x: B.x < Y ? B.x : Y,
      y: B.y < U ? B.y : U,
      width: Math.abs(B.x - Y),
      height: Math.abs(B.y - U)
    }, Q = H(), J = Uh($, G, k, t === Lo.Partial, !0, z), te = Wh(J, M).map((ce) => ce.id), pe = J.map((ce) => ce.id);
    if (w.current !== pe.length) {
      w.current = pe.length;
      const ce = ur(Q, pe);
      ce.length && (x == null || x(ce));
    }
    if (v.current !== te.length) {
      v.current = te.length;
      const ce = ur(M, te);
      ce.length && (P == null || P(ce));
    }
    g.setState({
      userSelectionRect: G
    });
  }, I = (A) => {
    if (A.button !== 0)
      return;
    const { userSelectionRect: S } = g.getState();
    !p && S && A.target === d.current && (_ == null || _(A)), g.setState({ nodesSelectionActive: w.current > 0 }), y(), o == null || o(A);
  }, F = (A) => {
    p && (g.setState({ nodesSelectionActive: w.current > 0 }), o == null || o(A)), y();
  }, j = h && (e || p);
  return L.jsxs("div", { className: rt(["react-flow__pane", { dragging: m, selection: e }]), onClick: j ? void 0 : Ss(_, d), onContextMenu: Ss(E, d), onWheel: Ss(C, d), onMouseEnter: j ? void 0 : u, onMouseDown: j ? T : void 0, onMouseMove: j ? D : a, onMouseUp: j ? I : void 0, onMouseLeave: j ? F : c, ref: d, style: Fa, children: [f, L.jsx(IS, {})] });
});
h0.displayName = "Pane";
const HS = (e) => {
  const t = e.getNodes().filter((n) => n.selected);
  return {
    ...Vh(t, e.nodeOrigin),
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
    userSelectionActive: e.userSelectionActive
  };
};
function BS({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = Pe(), { width: o, height: i, x: l, y: s, transformString: u, userSelectionActive: a } = de(HS, je), c = s0(), f = R.useRef(null);
  if (R.useEffect(() => {
    var w;
    n || (w = f.current) == null || w.focus({
      preventScroll: !0
    });
  }, [n]), l0({
    nodeRef: f
  }), a || !o || !i)
    return null;
  const d = e ? (w) => {
    const v = r.getState().getNodes().filter((N) => N.selected);
    e(w, v);
  } : void 0, g = (w) => {
    Object.prototype.hasOwnProperty.call(wr, w.key) && c({
      x: wr[w.key].x,
      y: wr[w.key].y,
      isShiftPressed: w.shiftKey
    });
  };
  return L.jsx("div", { className: rt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: u
  }, children: L.jsx("div", { ref: f, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : g, style: {
    width: o,
    height: i,
    top: s,
    left: l
  } }) });
}
var jS = R.memo(BS);
const VS = (e) => e.nodesSelectionActive, g0 = ({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: l, deleteKeyCode: s, onMove: u, onMoveStart: a, onMoveEnd: c, selectionKeyCode: f, selectionOnDrag: d, selectionMode: g, onSelectionStart: w, onSelectionEnd: v, multiSelectionKeyCode: N, panActivationKeyCode: p, zoomActivationKeyCode: h, elementsSelectable: m, zoomOnScroll: y, zoomOnPinch: _, panOnScroll: E, panOnScrollSpeed: C, panOnScrollMode: T, zoomOnDoubleClick: D, panOnDrag: I, defaultViewport: F, translateExtent: j, minZoom: A, maxZoom: S, preventScrolling: $, onSelectionContextMenu: M, noWheelClassName: k, noPanClassName: x, disableKeyboardA11y: P }) => {
  const z = de(VS), H = Io(f), Y = Io(p) || I, U = H || d && Y !== !0;
  return TS({ deleteKeyCode: s, multiSelectionKeyCode: N }), L.jsx(DS, { onMove: u, onMoveStart: a, onMoveEnd: c, onPaneContextMenu: i, elementsSelectable: m, zoomOnScroll: y, zoomOnPinch: _, panOnScroll: E, panOnScrollSpeed: C, panOnScrollMode: T, zoomOnDoubleClick: D, panOnDrag: !H && Y, defaultViewport: F, translateExtent: j, minZoom: A, maxZoom: S, zoomActivationKeyCode: h, preventScrolling: $, noWheelClassName: k, noPanClassName: x, children: L.jsxs(h0, { onSelectionStart: w, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: l, panOnDrag: Y, isSelecting: !!U, selectionMode: g, children: [e, z && L.jsx(jS, { onSelectionContextMenu: M, noPanClassName: x, disableKeyboardA11y: P })] }) });
};
g0.displayName = "FlowRenderer";
var US = R.memo(g0);
function WS(e) {
  return de(R.useCallback((n) => e ? Uh(n.nodeInternals, { x: 0, y: 0, width: n.width, height: n.height }, n.transform, !0) : n.getNodes(), [e]));
}
const YS = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  updateNodeDimensions: e.updateNodeDimensions,
  onError: e.onError
}), m0 = (e) => {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, updateNodeDimensions: i, onError: l } = de(YS, je), s = WS(e.onlyRenderVisibleElements), u = R.useRef(), a = R.useMemo(() => {
    if (typeof ResizeObserver > "u")
      return null;
    const c = new ResizeObserver((f) => {
      const d = f.map((g) => ({
        id: g.target.getAttribute("data-id"),
        nodeElement: g.target,
        forceUpdate: !0
      }));
      i(d);
    });
    return u.current = c, c;
  }, []);
  return R.useEffect(() => () => {
    var c;
    (c = u == null ? void 0 : u.current) == null || c.disconnect();
  }, []), L.jsx("div", { className: "react-flow__nodes", style: Fa, children: s.map((c) => {
    var _, E;
    let f = c.type || "default";
    e.nodeTypes[f] || (l == null || l("003", fn.error003(f)), f = "default");
    const d = e.nodeTypes[f] || e.nodeTypes.default, g = !!(c.draggable || t && typeof c.draggable > "u"), w = !!(c.selectable || o && typeof c.selectable > "u"), v = !!(c.connectable || n && typeof c.connectable > "u"), N = !!(c.focusable || r && typeof c.focusable > "u"), p = e.nodeExtent ? Ra(c.positionAbsolute, e.nodeExtent) : c.positionAbsolute, h = (p == null ? void 0 : p.x) ?? 0, m = (p == null ? void 0 : p.y) ?? 0, y = ES({
      x: h,
      y: m,
      width: c.width ?? 0,
      height: c.height ?? 0,
      origin: e.nodeOrigin
    });
    return L.jsx(d, { id: c.id, className: c.className, style: c.style, type: f, data: c.data, sourcePosition: c.sourcePosition || W.Bottom, targetPosition: c.targetPosition || W.Top, hidden: c.hidden, xPos: h, yPos: m, xPosOrigin: y.x, yPosOrigin: y.y, selectNodesOnDrag: e.selectNodesOnDrag, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, selected: !!c.selected, isDraggable: g, isSelectable: w, isConnectable: v, isFocusable: N, resizeObserver: a, dragHandle: c.dragHandle, zIndex: ((_ = c[ve]) == null ? void 0 : _.z) ?? 0, isParent: !!((E = c[ve]) != null && E.isParent), noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, initialized: !!c.width && !!c.height, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, ariaLabel: c.ariaLabel }, c.id);
  }) });
};
m0.displayName = "NodeRenderer";
var XS = R.memo(m0);
const KS = [{ level: 0, isMaxLevel: !0, edges: [] }];
function QS(e, t, n = !1) {
  let r = -1;
  const o = e.reduce((l, s) => {
    var c, f;
    const u = be(s.zIndex);
    let a = u ? s.zIndex : 0;
    if (n) {
      const d = t.get(s.target), g = t.get(s.source), w = s.selected || (d == null ? void 0 : d.selected) || (g == null ? void 0 : g.selected), v = Math.max(((c = g == null ? void 0 : g[ve]) == null ? void 0 : c.z) || 0, ((f = d == null ? void 0 : d[ve]) == null ? void 0 : f.z) || 0, 1e3);
      a = (u ? s.zIndex : 0) + (w ? v : 0);
    }
    return l[a] ? l[a].push(s) : l[a] = [s], r = a > r ? a : r, l;
  }, {}), i = Object.entries(o).map(([l, s]) => {
    const u = +l;
    return {
      edges: s,
      level: u,
      isMaxLevel: u === r
    };
  });
  return i.length === 0 ? KS : i;
}
function ZS(e, t, n) {
  const r = de(R.useCallback((o) => e ? o.edges.filter((i) => {
    const l = t.get(i.source), s = t.get(i.target);
    return (l == null ? void 0 : l.width) && (l == null ? void 0 : l.height) && (s == null ? void 0 : s.width) && (s == null ? void 0 : s.height) && vS({
      sourcePos: l.positionAbsolute || { x: 0, y: 0 },
      targetPos: s.positionAbsolute || { x: 0, y: 0 },
      sourceWidth: l.width,
      sourceHeight: l.height,
      targetWidth: s.width,
      targetHeight: s.height,
      width: o.width,
      height: o.height,
      transform: o.transform
    });
  }) : o.edges, [e, t]));
  return QS(r, t, n);
}
const GS = ({ color: e = "none", strokeWidth: t = 1 }) => L.jsx("polyline", { stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: t, fill: "none", points: "-5,-4 0,0 -5,4" }), qS = ({ color: e = "none", strokeWidth: t = 1 }) => L.jsx("polyline", { stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: t, fill: e, points: "-5,-4 0,0 -5,4 -5,-4" }), Ff = {
  [al.Arrow]: GS,
  [al.ArrowClosed]: qS
};
function JS(e) {
  const t = Pe();
  return R.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Ff, e) ? Ff[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", fn.error009(e)), null);
  }, [e]);
}
const bS = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: l, orient: s = "auto-start-reverse" }) => {
  const u = JS(t);
  return u ? L.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: s, refX: "0", refY: "0", children: L.jsx(u, { color: n, strokeWidth: l }) }) : null;
}, e_ = ({ defaultColor: e, rfId: t }) => (n) => {
  const r = [];
  return n.edges.reduce((o, i) => ([i.markerStart, i.markerEnd].forEach((l) => {
    if (l && typeof l == "object") {
      const s = Cu(l, t);
      r.includes(s) || (o.push({ id: s, color: l.color || e, ...l }), r.push(s));
    }
  }), o), []).sort((o, i) => o.id.localeCompare(i.id));
}, y0 = ({ defaultColor: e, rfId: t }) => {
  const n = de(
    R.useCallback(e_({ defaultColor: e, rfId: t }), [e, t]),
    // the id includes all marker options, so we just need to look at that part of the marker
    (r, o) => !(r.length !== o.length || r.some((i, l) => i.id !== o[l].id))
  );
  return L.jsx("defs", { children: n.map((r) => L.jsx(bS, { id: r.id, type: r.type, color: r.color, width: r.width, height: r.height, markerUnits: r.markerUnits, strokeWidth: r.strokeWidth, orient: r.orient }, r.id)) });
};
y0.displayName = "MarkerDefinitions";
var t_ = R.memo(y0);
const n_ = (e) => ({
  nodesConnectable: e.nodesConnectable,
  edgesFocusable: e.edgesFocusable,
  edgesUpdatable: e.edgesUpdatable,
  elementsSelectable: e.elementsSelectable,
  width: e.width,
  height: e.height,
  connectionMode: e.connectionMode,
  nodeInternals: e.nodeInternals,
  onError: e.onError
}), v0 = ({ defaultMarkerColor: e, onlyRenderVisibleElements: t, elevateEdgesOnSelect: n, rfId: r, edgeTypes: o, noPanClassName: i, onEdgeUpdate: l, onEdgeContextMenu: s, onEdgeMouseEnter: u, onEdgeMouseMove: a, onEdgeMouseLeave: c, onEdgeClick: f, edgeUpdaterRadius: d, onEdgeDoubleClick: g, onEdgeUpdateStart: w, onEdgeUpdateEnd: v, children: N }) => {
  const { edgesFocusable: p, edgesUpdatable: h, elementsSelectable: m, width: y, height: _, connectionMode: E, nodeInternals: C, onError: T } = de(n_, je), D = ZS(t, C, n);
  return y ? L.jsxs(L.Fragment, { children: [D.map(({ level: I, edges: F, isMaxLevel: j }) => L.jsxs("svg", { style: { zIndex: I }, width: y, height: _, className: "react-flow__edges react-flow__container", children: [j && L.jsx(t_, { defaultColor: e, rfId: r }), L.jsx("g", { children: F.map((A) => {
    const [S, $, M] = Rf(C.get(A.source)), [k, x, P] = Rf(C.get(A.target));
    if (!M || !P)
      return null;
    let z = A.type || "default";
    o[z] || (T == null || T("011", fn.error011(z)), z = "default");
    const H = o[z] || o.default, B = E === Hn.Strict ? x.target : (x.target ?? []).concat(x.source ?? []), Y = Tf($.source, A.sourceHandle), U = Tf(B, A.targetHandle), G = (Y == null ? void 0 : Y.position) || W.Bottom, Q = (U == null ? void 0 : U.position) || W.Top, J = !!(A.focusable || p && typeof A.focusable > "u"), te = typeof l < "u" && (A.updatable || h && typeof A.updatable > "u");
    if (!Y || !U)
      return T == null || T("008", fn.error008(Y, A)), null;
    const { sourceX: pe, sourceY: ce, targetX: Ze, targetY: ot } = yS(S, Y, G, k, U, Q);
    return L.jsx(H, { id: A.id, className: rt([A.className, i]), type: z, data: A.data, selected: !!A.selected, animated: !!A.animated, hidden: !!A.hidden, label: A.label, labelStyle: A.labelStyle, labelShowBg: A.labelShowBg, labelBgStyle: A.labelBgStyle, labelBgPadding: A.labelBgPadding, labelBgBorderRadius: A.labelBgBorderRadius, style: A.style, source: A.source, target: A.target, sourceHandleId: A.sourceHandle, targetHandleId: A.targetHandle, markerEnd: A.markerEnd, markerStart: A.markerStart, sourceX: pe, sourceY: ce, targetX: Ze, targetY: ot, sourcePosition: G, targetPosition: Q, elementsSelectable: m, onEdgeUpdate: l, onContextMenu: s, onMouseEnter: u, onMouseMove: a, onMouseLeave: c, onClick: f, edgeUpdaterRadius: d, onEdgeDoubleClick: g, onEdgeUpdateStart: w, onEdgeUpdateEnd: v, rfId: r, ariaLabel: A.ariaLabel, isFocusable: J, isUpdatable: te, pathOptions: "pathOptions" in A ? A.pathOptions : void 0, interactionWidth: A.interactionWidth }, A.id);
  }) })] }, I)), N] }) : null;
};
v0.displayName = "EdgeRenderer";
var r_ = R.memo(v0);
const o_ = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function i_({ children: e }) {
  const t = de(o_);
  return L.jsx("div", { className: "react-flow__viewport react-flow__container", style: { transform: t }, children: e });
}
function l_(e) {
  const t = f0(), n = R.useRef(!1);
  R.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const s_ = {
  [W.Left]: W.Right,
  [W.Right]: W.Left,
  [W.Top]: W.Bottom,
  [W.Bottom]: W.Top
}, w0 = ({ nodeId: e, handleType: t, style: n, type: r = Zt.Bezier, CustomComponent: o, connectionStatus: i }) => {
  var E, C, T;
  const { fromNode: l, handleId: s, toX: u, toY: a, connectionMode: c } = de(R.useCallback((D) => ({
    fromNode: D.nodeInternals.get(e),
    handleId: D.connectionHandleId,
    toX: (D.connectionPosition.x - D.transform[0]) / D.transform[2],
    toY: (D.connectionPosition.y - D.transform[1]) / D.transform[2],
    connectionMode: D.connectionMode
  }), [e]), je), f = (E = l == null ? void 0 : l[ve]) == null ? void 0 : E.handleBounds;
  let d = f == null ? void 0 : f[t];
  if (c === Hn.Loose && (d = d || (f == null ? void 0 : f[t === "source" ? "target" : "source"])), !l || !d)
    return null;
  const g = s ? d.find((D) => D.id === s) : d[0], w = g ? g.x + g.width / 2 : (l.width ?? 0) / 2, v = g ? g.y + g.height / 2 : l.height ?? 0, N = (((C = l.positionAbsolute) == null ? void 0 : C.x) ?? 0) + w, p = (((T = l.positionAbsolute) == null ? void 0 : T.y) ?? 0) + v, h = g == null ? void 0 : g.position, m = h ? s_[h] : null;
  if (!h || !m)
    return null;
  if (o)
    return L.jsx(o, { connectionLineType: r, connectionLineStyle: n, fromNode: l, fromHandle: g, fromX: N, fromY: p, toX: u, toY: a, fromPosition: h, toPosition: m, connectionStatus: i });
  let y = "";
  const _ = {
    sourceX: N,
    sourceY: p,
    sourcePosition: h,
    targetX: u,
    targetY: a,
    targetPosition: m
  };
  return r === Zt.Bezier ? [y] = Bh(_) : r === Zt.Step ? [y] = Nu({
    ..._,
    borderRadius: 0
  }) : r === Zt.SmoothStep ? [y] = Nu(_) : r === Zt.SimpleBezier ? [y] = Hh(_) : y = `M${N},${p} ${u},${a}`, L.jsx("path", { d: y, fill: "none", className: "react-flow__connection-path", style: n });
};
w0.displayName = "ConnectionLine";
const u_ = (e) => ({
  nodeId: e.connectionNodeId,
  handleType: e.connectionHandleType,
  nodesConnectable: e.nodesConnectable,
  connectionStatus: e.connectionStatus,
  width: e.width,
  height: e.height
});
function a_({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodeId: o, handleType: i, nodesConnectable: l, width: s, height: u, connectionStatus: a } = de(u_, je);
  return !(o && i && s && l) ? null : L.jsx("svg", { style: e, width: s, height: u, className: "react-flow__edges react-flow__connectionline react-flow__container", children: L.jsx("g", { className: rt(["react-flow__connection", a]), children: L.jsx(w0, { nodeId: o, handleType: i, style: t, type: n, CustomComponent: r, connectionStatus: a }) }) });
}
const x0 = ({ nodeTypes: e, edgeTypes: t, onMove: n, onMoveStart: r, onMoveEnd: o, onInit: i, onNodeClick: l, onEdgeClick: s, onNodeDoubleClick: u, onEdgeDoubleClick: a, onNodeMouseEnter: c, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: g, onSelectionContextMenu: w, onSelectionStart: v, onSelectionEnd: N, connectionLineType: p, connectionLineStyle: h, connectionLineComponent: m, connectionLineContainerStyle: y, selectionKeyCode: _, selectionOnDrag: E, selectionMode: C, multiSelectionKeyCode: T, panActivationKeyCode: D, zoomActivationKeyCode: I, deleteKeyCode: F, onlyRenderVisibleElements: j, elementsSelectable: A, selectNodesOnDrag: S, defaultViewport: $, translateExtent: M, minZoom: k, maxZoom: x, preventScrolling: P, defaultMarkerColor: z, zoomOnScroll: H, zoomOnPinch: B, panOnScroll: Y, panOnScrollSpeed: U, panOnScrollMode: G, zoomOnDoubleClick: Q, panOnDrag: J, onPaneClick: te, onPaneMouseEnter: pe, onPaneMouseMove: ce, onPaneMouseLeave: Ze, onPaneScroll: ot, onPaneContextMenu: mt, onEdgeUpdate: he, onEdgeContextMenu: oe, onEdgeMouseEnter: Ae, onEdgeMouseMove: X, onEdgeMouseLeave: Ft, edgeUpdaterRadius: gn, onEdgeUpdateStart: Dr, onEdgeUpdateEnd: Lr, noDragClassName: Vn, noWheelClassName: mn, noPanClassName: Ht, elevateEdgesOnSelect: Un, disableKeyboardA11y: Bt, nodeOrigin: yn, nodeExtent: Ir, rfId: Wn }) => (l_(i), L.jsx(US, { onPaneClick: te, onPaneMouseEnter: pe, onPaneMouseMove: ce, onPaneMouseLeave: Ze, onPaneContextMenu: mt, onPaneScroll: ot, deleteKeyCode: F, selectionKeyCode: _, selectionOnDrag: E, selectionMode: C, onSelectionStart: v, onSelectionEnd: N, multiSelectionKeyCode: T, panActivationKeyCode: D, zoomActivationKeyCode: I, elementsSelectable: A, onMove: n, onMoveStart: r, onMoveEnd: o, zoomOnScroll: H, zoomOnPinch: B, zoomOnDoubleClick: Q, panOnScroll: Y, panOnScrollSpeed: U, panOnScrollMode: G, panOnDrag: J, defaultViewport: $, translateExtent: M, minZoom: k, maxZoom: x, onSelectionContextMenu: w, preventScrolling: P, noDragClassName: Vn, noWheelClassName: mn, noPanClassName: Ht, disableKeyboardA11y: Bt, children: L.jsxs(i_, { children: [L.jsx(r_, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: a, onEdgeUpdate: he, onlyRenderVisibleElements: j, onEdgeContextMenu: oe, onEdgeMouseEnter: Ae, onEdgeMouseMove: X, onEdgeMouseLeave: Ft, onEdgeUpdateStart: Dr, onEdgeUpdateEnd: Lr, edgeUpdaterRadius: gn, defaultMarkerColor: z, noPanClassName: Ht, elevateEdgesOnSelect: !!Un, disableKeyboardA11y: Bt, rfId: Wn, children: L.jsx(a_, { style: h, type: p, component: m, containerStyle: y }) }), L.jsx("div", { className: "react-flow__edgelabel-renderer" }), L.jsx(XS, { nodeTypes: e, onNodeClick: l, onNodeDoubleClick: u, onNodeMouseEnter: c, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: g, selectNodesOnDrag: S, onlyRenderVisibleElements: j, noPanClassName: Ht, noDragClassName: Vn, disableKeyboardA11y: Bt, nodeOrigin: yn, nodeExtent: Ir, rfId: Wn })] }) }));
x0.displayName = "GraphView";
var c_ = R.memo(x0);
const zu = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Vt = {
  rfId: "1",
  width: 0,
  height: 0,
  transform: [0, 0, 1],
  nodeInternals: /* @__PURE__ */ new Map(),
  edges: [],
  onNodesChange: null,
  onEdgesChange: null,
  hasDefaultNodes: !1,
  hasDefaultEdges: !1,
  d3Zoom: null,
  d3Selection: null,
  d3ZoomHandler: void 0,
  minZoom: 0.5,
  maxZoom: 2,
  translateExtent: zu,
  nodeExtent: zu,
  nodesSelectionActive: !1,
  userSelectionActive: !1,
  userSelectionRect: null,
  connectionNodeId: null,
  connectionHandleId: null,
  connectionHandleType: "source",
  connectionPosition: { x: 0, y: 0 },
  connectionStatus: null,
  connectionMode: Hn.Strict,
  domNode: null,
  paneDragging: !1,
  noPanClassName: "nopan",
  nodeOrigin: [0, 0],
  snapGrid: [15, 15],
  snapToGrid: !1,
  nodesDraggable: !0,
  nodesConnectable: !0,
  nodesFocusable: !0,
  edgesFocusable: !0,
  edgesUpdatable: !0,
  elementsSelectable: !0,
  elevateNodesOnSelect: !0,
  fitViewOnInit: !1,
  fitViewOnInitDone: !1,
  fitViewOnInitOptions: void 0,
  multiSelectionActive: !1,
  connectionStartHandle: null,
  connectionEndHandle: null,
  connectionClickStartHandle: null,
  connectOnClick: !0,
  ariaLiveMessage: "",
  autoPanOnConnect: !0,
  autoPanOnNodeDrag: !0,
  connectionRadius: 20,
  onError: Ox,
  isValidConnection: void 0
}, f_ = () => My((e, t) => ({
  ...Vt,
  setNodes: (n) => {
    const { nodeInternals: r, nodeOrigin: o, elevateNodesOnSelect: i } = t();
    e({ nodeInternals: ws(n, r, o, i) });
  },
  getNodes: () => Array.from(t().nodeInternals.values()),
  setEdges: (n) => {
    const { defaultEdgeOptions: r = {} } = t();
    e({ edges: n.map((o) => ({ ...r, ...o })) });
  },
  setDefaultNodesAndEdges: (n, r) => {
    const o = typeof n < "u", i = typeof r < "u", l = o ? ws(n, /* @__PURE__ */ new Map(), t().nodeOrigin, t().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
    e({ nodeInternals: l, edges: i ? r : [], hasDefaultNodes: o, hasDefaultEdges: i });
  },
  updateNodeDimensions: (n) => {
    const { onNodesChange: r, nodeInternals: o, fitViewOnInit: i, fitViewOnInitDone: l, fitViewOnInitOptions: s, domNode: u, nodeOrigin: a } = t(), c = u == null ? void 0 : u.querySelector(".react-flow__viewport");
    if (!c)
      return;
    const f = window.getComputedStyle(c), { m22: d } = new window.DOMMatrixReadOnly(f.transform), g = n.reduce((v, N) => {
      const p = o.get(N.id);
      if (p) {
        const h = Ta(N.nodeElement);
        !!(h.width && h.height && (p.width !== h.width || p.height !== h.height || N.forceUpdate)) && (o.set(p.id, {
          ...p,
          [ve]: {
            ...p[ve],
            handleBounds: {
              source: Af(".source", N.nodeElement, d, a),
              target: Af(".target", N.nodeElement, d, a)
            }
          },
          ...h
        }), v.push({
          id: p.id,
          type: "dimensions",
          dimensions: h
        }));
      }
      return v;
    }, []);
    a0(o, a);
    const w = l || i && !l && c0(t, { initial: !0, ...s });
    e({ nodeInternals: new Map(o), fitViewOnInitDone: w }), (g == null ? void 0 : g.length) > 0 && (r == null || r(g));
  },
  updateNodePositions: (n, r = !0, o = !1) => {
    const { triggerNodeChanges: i } = t(), l = n.map((s) => {
      const u = {
        id: s.id,
        type: "position",
        dragging: o
      };
      return r && (u.positionAbsolute = s.positionAbsolute, u.position = s.position), u;
    });
    i(l);
  },
  triggerNodeChanges: (n) => {
    const { onNodesChange: r, nodeInternals: o, hasDefaultNodes: i, nodeOrigin: l, getNodes: s, elevateNodesOnSelect: u } = t();
    if (n != null && n.length) {
      if (i) {
        const a = p0(n, s()), c = ws(a, o, l, u);
        e({ nodeInternals: c });
      }
      r == null || r(n);
    }
  },
  addSelectedNodes: (n) => {
    const { multiSelectionActive: r, edges: o, getNodes: i } = t();
    let l, s = null;
    r ? l = n.map((u) => Xt(u, !0)) : (l = ur(i(), n), s = ur(o, [])), mi({
      changedNodes: l,
      changedEdges: s,
      get: t,
      set: e
    });
  },
  addSelectedEdges: (n) => {
    const { multiSelectionActive: r, edges: o, getNodes: i } = t();
    let l, s = null;
    r ? l = n.map((u) => Xt(u, !0)) : (l = ur(o, n), s = ur(i(), [])), mi({
      changedNodes: s,
      changedEdges: l,
      get: t,
      set: e
    });
  },
  unselectNodesAndEdges: ({ nodes: n, edges: r } = {}) => {
    const { edges: o, getNodes: i } = t(), l = n || i(), s = r || o, u = l.map((c) => (c.selected = !1, Xt(c.id, !1))), a = s.map((c) => Xt(c.id, !1));
    mi({
      changedNodes: u,
      changedEdges: a,
      get: t,
      set: e
    });
  },
  setMinZoom: (n) => {
    const { d3Zoom: r, maxZoom: o } = t();
    r == null || r.scaleExtent([n, o]), e({ minZoom: n });
  },
  setMaxZoom: (n) => {
    const { d3Zoom: r, minZoom: o } = t();
    r == null || r.scaleExtent([o, n]), e({ maxZoom: n });
  },
  setTranslateExtent: (n) => {
    var r;
    (r = t().d3Zoom) == null || r.translateExtent(n), e({ translateExtent: n });
  },
  resetSelectedElements: () => {
    const { edges: n, getNodes: r } = t(), i = r().filter((s) => s.selected).map((s) => Xt(s.id, !1)), l = n.filter((s) => s.selected).map((s) => Xt(s.id, !1));
    mi({
      changedNodes: i,
      changedEdges: l,
      get: t,
      set: e
    });
  },
  setNodeExtent: (n) => {
    const { nodeInternals: r } = t();
    r.forEach((o) => {
      o.positionAbsolute = Ra(o.position, n);
    }), e({
      nodeExtent: n,
      nodeInternals: new Map(r)
    });
  },
  panBy: (n) => {
    const { transform: r, width: o, height: i, d3Zoom: l, d3Selection: s, translateExtent: u } = t();
    if (!l || !s || !n.x && !n.y)
      return !1;
    const a = sn.translate(r[0] + n.x, r[1] + n.y).scale(r[2]), c = [
      [0, 0],
      [o, i]
    ], f = l == null ? void 0 : l.constrain()(a, c, u);
    return l.transform(s, f), r[0] !== f.x || r[1] !== f.y || r[2] !== f.k;
  },
  cancelConnection: () => e({
    connectionNodeId: Vt.connectionNodeId,
    connectionHandleId: Vt.connectionHandleId,
    connectionHandleType: Vt.connectionHandleType,
    connectionStatus: Vt.connectionStatus,
    connectionStartHandle: Vt.connectionStartHandle,
    connectionEndHandle: Vt.connectionEndHandle
  }),
  reset: () => e({ ...Vt })
})), S0 = ({ children: e }) => {
  const t = R.useRef(null);
  return t.current || (t.current = f_()), L.jsx(Px, { value: t.current, children: e });
};
S0.displayName = "ReactFlowProvider";
const _0 = ({ children: e }) => R.useContext(Al) ? L.jsx(L.Fragment, { children: e }) : L.jsx(S0, { children: e });
_0.displayName = "ReactFlowWrapper";
function Hf(e, t) {
  return R.useRef(null), R.useMemo(() => t(e), [e]);
}
const d_ = {
  input: Jh,
  default: Mu,
  output: e0,
  group: Oa
}, p_ = {
  default: cl,
  straight: Da,
  step: Aa,
  smoothstep: Dl,
  simplebezier: $a
}, h_ = [0, 0], g_ = [15, 15], m_ = { x: 0, y: 0, zoom: 1 }, y_ = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
}, E0 = R.forwardRef(({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i = d_, edgeTypes: l = p_, onNodeClick: s, onEdgeClick: u, onInit: a, onMove: c, onMoveStart: f, onMoveEnd: d, onConnect: g, onConnectStart: w, onConnectEnd: v, onClickConnectStart: N, onClickConnectEnd: p, onNodeMouseEnter: h, onNodeMouseMove: m, onNodeMouseLeave: y, onNodeContextMenu: _, onNodeDoubleClick: E, onNodeDragStart: C, onNodeDrag: T, onNodeDragStop: D, onNodesDelete: I, onEdgesDelete: F, onSelectionChange: j, onSelectionDragStart: A, onSelectionDrag: S, onSelectionDragStop: $, onSelectionContextMenu: M, onSelectionStart: k, onSelectionEnd: x, connectionMode: P = Hn.Strict, connectionLineType: z = Zt.Bezier, connectionLineStyle: H, connectionLineComponent: B, connectionLineContainerStyle: Y, deleteKeyCode: U = "Backspace", selectionKeyCode: G = "Shift", selectionOnDrag: Q = !1, selectionMode: J = Lo.Full, panActivationKeyCode: te = "Space", multiSelectionKeyCode: pe = "Meta", zoomActivationKeyCode: ce = "Meta", snapToGrid: Ze = !1, snapGrid: ot = g_, onlyRenderVisibleElements: mt = !1, selectNodesOnDrag: he = !0, nodesDraggable: oe, nodesConnectable: Ae, nodesFocusable: X, nodeOrigin: Ft = h_, edgesFocusable: gn, edgesUpdatable: Dr, elementsSelectable: Lr, defaultViewport: Vn = m_, minZoom: mn = 0.5, maxZoom: Ht = 2, translateExtent: Un = zu, preventScrolling: Bt = !0, nodeExtent: yn, defaultMarkerColor: Ir = "#b1b1b7", zoomOnScroll: Wn = !0, zoomOnPinch: De = !0, panOnScroll: it = !1, panOnScrollSpeed: vn = 0.5, panOnScrollMode: wn = yr.Free, zoomOnDoubleClick: xn = !0, panOnDrag: Yo = !0, onPaneClick: Sn, onPaneMouseEnter: Ll, onPaneMouseMove: Il, onPaneMouseLeave: Or, onPaneScroll: Ol, onPaneContextMenu: Ha, children: _n, onEdgeUpdate: k0, onEdgeContextMenu: N0, onEdgeDoubleClick: C0, onEdgeMouseEnter: M0, onEdgeMouseMove: P0, onEdgeMouseLeave: z0, onEdgeUpdateStart: T0, onEdgeUpdateEnd: R0, edgeUpdaterRadius: $0 = 10, onNodesChange: A0, onEdgesChange: D0, noDragClassName: L0 = "nodrag", noWheelClassName: I0 = "nowheel", noPanClassName: Ba = "nopan", fitView: O0 = !1, fitViewOptions: F0, connectOnClick: H0 = !0, attributionPosition: B0, proOptions: j0, defaultEdgeOptions: V0, elevateNodesOnSelect: U0 = !0, elevateEdgesOnSelect: W0 = !1, disableKeyboardA11y: ja = !1, autoPanOnConnect: Y0 = !0, autoPanOnNodeDrag: X0 = !0, connectionRadius: K0 = 20, isValidConnection: Q0, onError: Z0, style: G0, id: Va, ...q0 }, J0) => {
  const b0 = Hf(i, _S), eg = Hf(l, mS), Fl = Va || "1";
  return L.jsx("div", { ...q0, style: { ...G0, ...y_ }, ref: J0, className: rt(["react-flow", o]), "data-testid": "rf__wrapper", id: Va, children: L.jsxs(_0, { children: [L.jsx(c_, { onInit: a, onMove: c, onMoveStart: f, onMoveEnd: d, onNodeClick: s, onEdgeClick: u, onNodeMouseEnter: h, onNodeMouseMove: m, onNodeMouseLeave: y, onNodeContextMenu: _, onNodeDoubleClick: E, nodeTypes: b0, edgeTypes: eg, connectionLineType: z, connectionLineStyle: H, connectionLineComponent: B, connectionLineContainerStyle: Y, selectionKeyCode: G, selectionOnDrag: Q, selectionMode: J, deleteKeyCode: U, multiSelectionKeyCode: pe, panActivationKeyCode: te, zoomActivationKeyCode: ce, onlyRenderVisibleElements: mt, selectNodesOnDrag: he, defaultViewport: Vn, translateExtent: Un, minZoom: mn, maxZoom: Ht, preventScrolling: Bt, zoomOnScroll: Wn, zoomOnPinch: De, zoomOnDoubleClick: xn, panOnScroll: it, panOnScrollSpeed: vn, panOnScrollMode: wn, panOnDrag: Yo, onPaneClick: Sn, onPaneMouseEnter: Ll, onPaneMouseMove: Il, onPaneMouseLeave: Or, onPaneScroll: Ol, onPaneContextMenu: Ha, onSelectionContextMenu: M, onSelectionStart: k, onSelectionEnd: x, onEdgeUpdate: k0, onEdgeContextMenu: N0, onEdgeDoubleClick: C0, onEdgeMouseEnter: M0, onEdgeMouseMove: P0, onEdgeMouseLeave: z0, onEdgeUpdateStart: T0, onEdgeUpdateEnd: R0, edgeUpdaterRadius: $0, defaultMarkerColor: Ir, noDragClassName: L0, noWheelClassName: I0, noPanClassName: Ba, elevateEdgesOnSelect: W0, rfId: Fl, disableKeyboardA11y: ja, nodeOrigin: Ft, nodeExtent: yn }), L.jsx(sS, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: g, onConnectStart: w, onConnectEnd: v, onClickConnectStart: N, onClickConnectEnd: p, nodesDraggable: oe, nodesConnectable: Ae, nodesFocusable: X, edgesFocusable: gn, edgesUpdatable: Dr, elementsSelectable: Lr, elevateNodesOnSelect: U0, minZoom: mn, maxZoom: Ht, nodeExtent: yn, onNodesChange: A0, onEdgesChange: D0, snapToGrid: Ze, snapGrid: ot, connectionMode: P, translateExtent: Un, connectOnClick: H0, defaultEdgeOptions: V0, fitView: O0, fitViewOptions: F0, onNodesDelete: I, onEdgesDelete: F, onNodeDragStart: C, onNodeDrag: T, onNodeDragStop: D, onSelectionDrag: S, onSelectionDragStart: A, onSelectionDragStop: $, noPanClassName: Ba, nodeOrigin: Ft, rfId: Fl, autoPanOnConnect: Y0, autoPanOnNodeDrag: X0, onError: Z0, connectionRadius: K0, isValidConnection: Q0 }), L.jsx(iS, { onSelectionChange: j }), _n, L.jsx(Rx, { proOptions: j0, position: B0 }), L.jsx(dS, { rfId: Fl, disableKeyboardA11y: ja })] }) });
});
E0.displayName = "ReactFlow";
const v_ = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 }
  },
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: /* @__PURE__ */ L.jsx("div", { children: "Default Node" }) },
    position: { x: 100, y: 125 }
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 }
  }
], w_ = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: !0 }
];
function x_() {
  const [e, t] = R.useState(v_), [n, r] = R.useState(w_), o = R.useCallback(
    (l) => t((s) => p0(l, s)),
    [t]
  ), i = R.useCallback(
    (l) => r((s) => OS(l, s)),
    [r]
  );
  return /* @__PURE__ */ L.jsx("div", { style: { width: "100vw", height: "100vh" }, children: /* @__PURE__ */ L.jsx(
    E0,
    {
      nodes: e,
      edges: n,
      onNodesChange: o,
      onEdgesChange: i,
      fitView: !0
    }
  ) });
}
function S_({ model: e, el: t }) {
  let n = _s.createRoot(t);
  return n.render(
    /* @__PURE__ */ L.jsx(mg.StrictMode, { children: /* @__PURE__ */ L.jsx(x_, {}) })
  ), () => n.unmount();
}
export {
  S_ as render
};
