/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(44));
__export(__webpack_require__(45));
__export(__webpack_require__(64));
__export(__webpack_require__(65));
__export(__webpack_require__(66));
__export(__webpack_require__(67));
__export(__webpack_require__(68));
__export(__webpack_require__(69));
__export(__webpack_require__(70));
__export(__webpack_require__(71));
var Types = __webpack_require__(72);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// Office Fabric-UI JavaScript Library
__export(__webpack_require__(22));
// Fabric Components
__export(__webpack_require__(27));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(31));
__export(__webpack_require__(32));
__export(__webpack_require__(33));
__export(__webpack_require__(34));
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(37));
__export(__webpack_require__(38));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(41));
__export(__webpack_require__(99));
__export(__webpack_require__(100));
__export(__webpack_require__(101));
__export(__webpack_require__(102));
__export(__webpack_require__(103));
// Templates
var Templates = __webpack_require__(4);
exports.Templates = Templates;
// Types
var Types = __webpack_require__(123);
exports.Types = Types;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(43));
__export(__webpack_require__(73));
__export(__webpack_require__(74));
__export(__webpack_require__(75));
__export(__webpack_require__(76));
__export(__webpack_require__(77));
__export(__webpack_require__(78));
__export(__webpack_require__(79));
__export(__webpack_require__(80));
__export(__webpack_require__(81));
__export(__webpack_require__(82));
__export(__webpack_require__(83));
__export(__webpack_require__(11));
var Types = __webpack_require__(84);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Type definitions for gd-sprest
// Project: https://gunjandatta.github.io/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>
/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/
var Helper = __webpack_require__(7);
exports.Helper = Helper;
var mapper_1 = __webpack_require__(5);
exports.SPTypes = mapper_1.SPTypes;
var Types = __webpack_require__(97);
exports.Types = Types;
__export(__webpack_require__(2));
__export(__webpack_require__(98));
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(104));
__export(__webpack_require__(105));
__export(__webpack_require__(106));
__export(__webpack_require__(107));
__export(__webpack_require__(108));
__export(__webpack_require__(109));
__export(__webpack_require__(110));
__export(__webpack_require__(111));
__export(__webpack_require__(112));
__export(__webpack_require__(113));
__export(__webpack_require__(114));
__export(__webpack_require__(115));
__export(__webpack_require__(116));
__export(__webpack_require__(117));
__export(__webpack_require__(118));
__export(__webpack_require__(119));
__export(__webpack_require__(120));
__export(__webpack_require__(121));
__export(__webpack_require__(122));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mapper = __webpack_require__(46);
exports.Mapper = Mapper;
var SPTypes = __webpack_require__(59);
exports.SPTypes = SPTypes;
var Types = __webpack_require__(60);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// Fabric
var Fabric = __webpack_require__(1);
exports.Fabric = Fabric;
// Components
var Components = __webpack_require__(8);
__export(__webpack_require__(8));
// WebParts
var WebParts = __webpack_require__(9);
exports.WebParts = WebParts;
// Wait for the core library to be loaded
SP ? SP.SOD.executeOrDelayUntilScriptLoaded(function () {
    // Get the global variable
    var $REST = window["$REST"];
    if ($REST) {
        // Add the JS library
        $REST["JS"] = { Components: Components, Fabric: Fabric, WebParts: WebParts };
    }
    // Alert other scripts this library is loaded
    SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-js.js");
}, "gd-sprest.js") : null;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(42));
__export(__webpack_require__(85));
__export(__webpack_require__(86));
__export(__webpack_require__(88));
__export(__webpack_require__(89));
__export(__webpack_require__(90));
__export(__webpack_require__(91));
__export(__webpack_require__(13));
__export(__webpack_require__(92));
__export(__webpack_require__(93));
__export(__webpack_require__(12));
__export(__webpack_require__(14));
__export(__webpack_require__(94));
var SP = __webpack_require__(95);
exports.SP = SP;
var Types = __webpack_require__(96);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(125));
__export(__webpack_require__(126));
__export(__webpack_require__(127));
__export(__webpack_require__(128));
var Types = __webpack_require__(129);
exports.Types = Types;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(130));
__export(__webpack_require__(15));
__export(__webpack_require__(131));
__export(__webpack_require__(132));
__export(__webpack_require__(133));
var Types = __webpack_require__(134);
exports.Types = Types;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a) {}return void 0 === b || k.call(a, b);
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
            delete f[d[c]];
          }
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", o = 0;while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ja(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }c[N.expando] = void 0;
          }c[O.expando] && (c[O.expando] = void 0);
        }
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      var _i = function _i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
      };

      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
          return _i(), b;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == c && _i(), c;
        }, pixelMarginRight: function pixelMarginRight() {
          return null == c && _i(), e;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return null == c && _i(), f;
        }, reliableMarginRight: function reliableMarginRight() {
          var b,
              c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
        } });
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }return g;
  }function Pa(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ca(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var gb = /\r/g,
      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b);
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var jb = a.location,
      kb = n.now(),
      lb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var mb = /#.*$/,
      nb = /([?&])_=[^&]*/,
      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qb = /^(?:GET|HEAD)$/,
      rb = /^\/\//,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function xb(a, b, c, d) {
    var e = {},
        f = a === tb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function yb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function zb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Ab(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = ob.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
        x[l](m[l]);
      }if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Bb = /%20/g,
      Cb = /\[\]$/,
      Db = /\r?\n/g,
      Eb = /^(?:submit|button|image|reset|file)$/i,
      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Gb(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Gb(c, a[c], b, e);
    }return d.join("&").replace(Bb, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Db, "\r\n") };
        }) : { name: b.name, value: c.replace(Db, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Hb = { 0: 200, 1223: 204 },
      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var _c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(25) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return n;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Nb = a.jQuery,
      Ob = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Web
/*********************************************************************************************************************************/
var _Web = /** @class */ (function (_super) {
    __extends(_Web, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Web(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "web" } });
        return _this;
    }
    return _Web;
}(utils_1.Base));
exports.Web = _Web;
//# sourceMappingURL=web.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(87));
var lib_1 = __webpack_require__(2);
var _1 = __webpack_require__(7);
/**
 * SharePoint Configuration
 */
var _SPConfig = /** @class */ (function () {
    /**
     * Constructor
     */
    function _SPConfig(cfg, webUrl) {
        var _this = this;
        // Method to install by configuration type
        this.installByType = function (cfgType, callback, targetName) { return _this.install(callback, cfgType, targetName); };
        // Method to uninstall by the configuration type
        this.uninstallByType = function (cfgType, callback, targetName) { return _this.uninstall(callback, cfgType, targetName); };
        /**
         * Methods
         */
        // Method to create the content types
        this.createContentTypes = function (contentTypes, cfgContentTypes) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the content types exist
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                var _loop_1 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    // See if this content type already exists
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        // Log
                        console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");
                        // Update the configuration
                        cfgContentType.ContentType = ct;
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");
                        // See if the parent name exists
                        if (cfgContentType.ParentName) {
                            // Get the web containing the parent content type
                            (new lib_1.Web(cfgContentType.ParentWebUrl || _this._webUrl))
                                .ContentTypes()
                                .query({
                                Filter: "Name eq '" + cfgContentType.ParentName + "'"
                            })
                                .execute(function (parent) {
                                // See if the parent exists
                                if (parent.results[0]) {
                                    // Add the available content type
                                    contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(function (ct) {
                                        // See if it was successful
                                        if (ct.existsFl) {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                            // Update the configuration
                                            cfgContentType.ContentType = ct;
                                            // Trigger the event
                                            cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                        }
                                        else {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                            console.error("[gd-sprest][Field] Error: " + ct.response);
                                        }
                                    }, true);
                                }
                                else {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                                }
                            });
                        }
                        else {
                            // Create the content type
                            contentTypes.add({
                                Description: cfgContentType.Description,
                                Group: cfgContentType.Group,
                                Name: cfgContentType.Name
                            }).execute(function (ct) {
                                // See if it was successful
                                if (ct.existsFl) {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                    // Update the configuration
                                    cfgContentType.ContentType = ct;
                                    // Trigger the event
                                    cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                }
                                else {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                    console.error("[gd-sprest][Field] Error: " + ct.response);
                                }
                            });
                        }
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_1(i);
                }
                // Wait for the requests to complete
                contentTypes.done(function () {
                    var _loop_2 = function (i) {
                        var cfgContentType = cfgContentTypes[i];
                        var cfgUpdate = {};
                        var updateFl = false;
                        // Ensure the content type exists
                        if (cfgContentType.ContentType == null) {
                            return "continue";
                        }
                        /**
                         * See if we need to update the properties
                         */
                        // Description
                        if (cfgContentType.ContentType.Description != cfgContentType.Description) {
                            // Update the configuration
                            cfgUpdate.Description = cfgContentType.Description;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Description requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // Group
                        if (cfgContentType.ContentType.Group != cfgContentType.Group) {
                            // Update the configuration
                            cfgUpdate.Group = cfgContentType.Group;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Group requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // JSLink
                        if (cfgContentType.ContentType.JSlink != cfgContentType.JSLink) {
                            // Update the configuration
                            cfgUpdate.JSLink = cfgContentType.JSLink;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] JSLink requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // Name
                        if (cfgContentType.ContentType.Name != cfgContentType.Name) {
                            // Update the configuration
                            cfgUpdate.Name = cfgContentType.Name;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Name requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // See if an update is needed
                        if (updateFl) {
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Updating the webpart.");
                            // Update the content type
                            cfgContentType.ContentType.update({ JSLink: cfgContentType.JSLink }).execute(function () {
                                // Log
                                console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");
                                // Trigger the event
                                cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                            });
                        }
                        else {
                            // Trigger the event
                            cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                        }
                    };
                    // Parse the configuration
                    for (var i = 0; i < cfgContentTypes.length; i++) {
                        _loop_2(i);
                    }
                    // Wait for the requests to complete
                    contentTypes.done(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the fields
        this.createFields = function (fields, cfgFields) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the fields exist
                if (cfgFields == null || cfgFields.length == 0) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
                var _loop_3 = function (i) {
                    var cfgField = cfgFields[i];
                    // See if this field already exists
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");
                        // Trigger the event
                        cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");
                        //
                        var onFieldCreated_1 = function (field) {
                            // See if it was successful
                            if (field.existsFl) {
                                // Log
                                console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");
                                // Trigger the event
                                cfgField.onCreated ? cfgField.onCreated(field) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Field] The field '" + cfgField.name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + field.response);
                            }
                        };
                        // Compute the schema xml
                        _1.FieldSchemaXML(cfgField).then(function (response) {
                            var schemas = typeof (response) === "string" ? [response] : response;
                            // Parse the fields to add
                            for (var i_1 = 0; i_1 < schemas.length; i_1++) {
                                // Add the field
                                fields.createFieldAsXml(schemas[i_1]).execute(onFieldCreated_1, true);
                            }
                        });
                    }
                };
                // Parse the fields
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_3(i);
                }
                // Wait for the requests to complete
                fields.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to create the lists
        this.createLists = function (lists, cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        // Resolve the promise and return
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgLists == null || cfgLists.length == 0) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
                var _loop_4 = function (i) {
                    var cfgList = cfgLists[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // See if this content type already exists
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        // Log
                        console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");
                        // Update the list name and remove spaces
                        var listInfo_1 = cfgList.ListInformation;
                        var listName_1 = listInfo_1.Title;
                        listInfo_1.Title = listName_1.replace(/ /g, "");
                        // Add the list
                        lists.add(listInfo_1)
                            .execute(function (list) {
                            // Restore the list name in the configuration
                            listInfo_1.Title = listName_1;
                            // See if the request was successful
                            if (list.existsFl) {
                                // See if we need to update the list
                                if (list.existsFl && list.Title != listName_1) {
                                    // Update the list
                                    list.update({ Title: listName_1 }).execute(function () {
                                        // Log
                                        console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                    });
                                }
                                else {
                                    // Log
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                }
                                // Trigger the event
                                cfgList.onCreated ? cfgList.onCreated(list) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][List] The list '" + listInfo_1.Title + "' failed to be created.");
                                console.log("[gd-sprest][List] Error: '" + list.response);
                            }
                        });
                    }
                };
                // Parse the content types
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_4(i);
                }
                // Wait for the requests to complete
                lists.done(function () {
                    // Update the lists
                    _this.updateLists(cfgLists).then(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the user custom actions
        this.createUserCustomActions = function (customActions, cfgCustomActions) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                // Parse the custom actions
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    var cfgCustomAction = cfgCustomActions[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this custom action
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            // Skip this custom action
                            continue;
                        }
                    }
                    // See if this custom action already exists
                    if (_this.isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                        // Log
                        console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                    }
                    else {
                        // Add the custom action
                        customActions.add(cfgCustomAction).execute(function (ca) {
                            // Ensure it exists
                            if (ca.existsFl) {
                                // Log
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was created successfully.");
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' failed to be created.");
                                console.log("[gd-sprest][Custom Action] Error: " + ca.response);
                            }
                        }, true);
                    }
                }
                // Wait for the requests to complete
                customActions.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to create the list views
        this.createViews = function (views, cfgViews) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the list views exist
                if (cfgViews == null || cfgViews.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_5 = function (i) {
                    var cfgView = cfgViews[i];
                    // See if this view exists
                    var view = _this.isInCollection("Title", cfgView.ViewName, views.results);
                    if (view) {
                        // Log
                        console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' already exists.");
                    }
                    else {
                        // Add the view
                        views.add({
                            Title: cfgView.ViewName,
                            ViewQuery: cfgView.ViewQuery
                        }).execute(function (view) {
                            // Ensure it exists
                            if (view.existsFl) {
                                // Log
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' was created successfully.");
                                // Trigger the event
                                cfgView.onCreated ? cfgView.onCreated(view) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' failed to be created.");
                                console.log("[gd-sprest][View] Error: " + view.response);
                            }
                        }, true);
                    }
                };
                // Parse the views
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_5(i);
                }
                // Wait for the requests to complete
                views.done(function () {
                    // Update the views
                    _this.updateViews(views, cfgViews).then(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the web parts
        this.createWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != _1.SPCfgType.WebParts) {
                    return;
                }
            }
            // Ensure the configuration exists
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                return;
            }
            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            // Get the root web
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .Lists("Web Part Gallery")
                .RootFolder()
                .query({
                Expand: ["Files"]
            })
                .execute(function (folder) {
                var _loop_6 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // See if this webpart exists
                    var file = _this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
                        // Trigger the event
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
                    }
                    else {
                        // Trim the xml
                        var xml = cfgWebPart.XML.trim();
                        // Convert the string to an array buffer
                        var buffer = new ArrayBuffer(xml.length * 2);
                        var bufferView = new Uint16Array(buffer);
                        for (var j = 0; j < xml.length; j++) {
                            bufferView[j] = xml.charCodeAt(j);
                        }
                        // Create the webpart, but execute the requests one at a time
                        folder.Files.add(true, cfgWebPart.FileName, buffer).execute(function (file) {
                            // See if group exists
                            if (cfgWebPart.Group) {
                                // Set the target to the root web
                                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                                    .Lists("Web Part Gallery")
                                    .Items()
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    .execute(function (items) {
                                    // Update the item
                                    items.results[0].update({
                                        Group: cfgWebPart.Group
                                    }).execute();
                                });
                            }
                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                            // Trigger the event
                            cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                        });
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_6(i);
                }
            });
        };
        // Method to install the site components
        this.installSite = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure site actions exist
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Log
                console.log("[gd-sprest] Loading the site information...");
                // Get the site
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    // Install the user custom actions
                    _this.createUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        // Resolve the promise
                        resolve(site);
                    });
                });
            });
        };
        // Method to install the web components
        this.installWeb = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest] Loading the web information...");
                // Get the web
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    // Create the fields
                    _this.createFields(web.Fields, _this._configuration.Fields).then(function () {
                        // Create the content types
                        _this.createContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            // Create the lists
                            _this.createLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                // Create the web custom actions
                                _this.createUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    // Resolve the promise
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        // Method to see if an object exists in a collection
        this.isInCollection = function (key, value, collection) {
            var valueLower = value.toLowerCase();
            // Parse the collection
            for (var i = 0; i < collection.length; i++) {
                var keyValue = collection[i][key];
                keyValue = keyValue ? keyValue.toLowerCase() : "";
                // See if the item exists
                if (valueLower == keyValue) {
                    // Return true
                    return collection[i];
                }
            }
            // Not in the collection
            return false;
        };
        // Method to remove the content type
        this.removeContentTypes = function (contentTypes, cfgContentTypes) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the content types exist
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_7 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    // Get the field
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        // Remove the field
                        ct.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_7(i);
                }
                // Wait for the requests to complete
                contentTypes.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the fields
        this.removeFields = function (fields, cfgFields) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the fields exist
                if (cfgFields == null || cfgFields.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_8 = function (i) {
                    var cfgField = cfgFields[i];
                    // Get the field
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        // Remove the field
                        field.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_8(i);
                }
                // Wait for the requests to complete
                fields.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the lists
        this.removeLists = function (lists, cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgLists == null || cfgLists.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_9 = function (i) {
                    var cfgList = cfgLists[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // Get the list
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        // Remove the list
                        list.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_9(i);
                }
                // Wait for the requests to complete
                lists.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the user custom actions
        this.removeUserCustomActions = function (customActions, cfgCustomActions) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the custom actions exist
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_10 = function (i) {
                    var cfgCustomAction = cfgCustomActions[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this custom action
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // Get the custom action
                    var ca = _this.isInCollection("Name", cfgCustomAction.Name, customActions.results);
                    if (ca) {
                        // Remove the custom action
                        ca.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    _loop_10(i);
                }
                // Wait for the requests to complete
                customActions.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the web parts
        this.removeWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.WebParts) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the configuration exists
                if (cfgWebParts == null || cfgWebParts.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                // Log
                console.log("[gd-sprest][WebPart] Creating the web parts.");
                // Get the root web
                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                    .Lists("Web Part Gallery")
                    .RootFolder()
                    .Files()
                    .execute(function (files) {
                    var _loop_11 = function (i) {
                        var cfgWebPart = cfgWebParts[i];
                        // See if the target name exists
                        if (_this._cfgType && _this._targetName) {
                            // Ensure it's for this list
                            if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                                return "continue";
                            }
                        }
                        // Get the file
                        var file = _this.isInCollection("Name", cfgWebPart.FileName, files.results);
                        if (file) {
                            // Remove the file
                            file.delete().execute(function () {
                                // Log
                                console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                            }, true);
                        }
                    };
                    // Parse the configuration
                    for (var i = 0; i < cfgWebParts.length; i++) {
                        _loop_11(i);
                    }
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to update the lists
        this.updateLists = function (cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                var request = function (idx, resolve) {
                    // Get the list configuration
                    var cfgList = cfgLists[idx];
                    // See if the target name exists
                    if (_this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            // Update the next list
                            request(idx + 1, resolve);
                            return;
                        }
                    }
                    // Ensure the configuration exists
                    if (cfgList) {
                        // Get the web
                        (new lib_1.Web(_this._webUrl))
                            .Lists(cfgList.ListInformation.Title)
                            .query({
                            Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                        })
                            .execute(function (list) {
                            // See if the title field is being updated
                            if (cfgList.TitleFieldDisplayName) {
                                // Parse the fields
                                for (var i = 0; i < list.Fields.results.length; i++) {
                                    var field = list.Fields.results[i];
                                    // See if this is the title field
                                    if (field.InternalName == "Title") {
                                        // See if an update is required
                                        if (field.Title != cfgList.TitleFieldDisplayName) {
                                            // Update the field name
                                            field.update({ Title: cfgList.TitleFieldDisplayName }).execute(function () {
                                                // Log
                                                console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                                            });
                                        }
                                    }
                                }
                            }
                            // Update the list fields
                            _this.createFields(list.Fields, cfgList.CustomFields).then(function () {
                                // Update the content types
                                _this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(function () {
                                    // Update the views
                                    _this.createViews(list.Views, cfgList.ViewInformation).then(function () {
                                        // Trigger the event
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                        // Update the next list
                                        request(idx + 1, resolve);
                                    });
                                });
                            });
                            // Update the user custom actions
                            _this.createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions);
                        });
                    }
                    else {
                        // Resolve the promise
                        resolve();
                    }
                };
                // Execute the request
                request(0, resolve);
            });
        };
        // Method to update the views
        this.updateViews = function (views, cfgViews) {
            var counter = 0;
            // Return a promise
            return new Promise(function (resolve, reject) {
                var _loop_12 = function (i) {
                    var cfgView = cfgViews[i];
                    // Get the view
                    var view = views.getByTitle(cfgView.ViewName);
                    // See if the view fields are defined
                    if (cfgView.ViewFields && cfgView.ViewFields.length > 0) {
                        // Log
                        console.log("[gd-sprest][View] Updating the view fields for the '" + cfgView.ViewName + "' view.");
                        // Clear the view fields
                        view.ViewFields().removeAllViewFields().execute(true);
                        // Parse the view fields
                        for (var i_2 = 0; i_2 < cfgView.ViewFields.length; i_2++) {
                            // Add the view field
                            view.ViewFields().addViewField(cfgView.ViewFields[i_2]).execute(true);
                        }
                    }
                    // See if we are updating the view properties
                    if (cfgView.JSLink || cfgView.ViewQuery) {
                        var props = {};
                        // Log
                        console.log("[gd-sprest][View] Updating the view properties for the '" + cfgView.ViewName + "' view.");
                        // Set the properties
                        cfgView.JSLink ? props["JSLink"] = cfgView.JSLink : null;
                        cfgView.ViewQuery ? props["ViewQuery"] = cfgView.ViewQuery : null;
                        // Update the view
                        view.update(props).execute(true);
                    }
                    // Wait for the requests to complete
                    view.done(function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Trigger the event
                        cfgView.onUpdated ? cfgView.onUpdated(view) : null;
                        // See if we are done
                        if (++counter >= cfgViews.length) {
                            // Resolve the promise
                            resolve();
                        }
                    });
                };
                // Parse the views
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_12(i);
                }
            });
        };
        // Method to uninstall the site components
        this.uninstallSite = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the site information...");
                // Ensure site actions exist
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the site
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    // Remove the user custom actions
                    _this.removeUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        // Resolve the promise
                        resolve(site);
                    });
                });
            });
        };
        // Method to uninstall the web components
        this.uninstallWeb = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the web information...");
                // Get the web
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    // Remove the fields
                    _this.removeFields(web.Fields, _this._configuration.Fields).then(function () {
                        // Remove the content types
                        _this.removeContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            // Remove the lists
                            _this.removeLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                // Remove the web custom actions
                                _this.removeUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    // Resolve the promise
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        // Save the configuration
        this._configuration = cfg;
        // Save the target web url
        this._webUrl = webUrl;
    }
    /**
     * Public Methods
     */
    // Method to install the configuration
    _SPConfig.prototype.install = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;
        // Install the web components
        this.installWeb().then(function () {
            // Install the site components
            _this.installSite().then(function () {
                // Create the webparts
                _this.createWebParts();
                // Log
                console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                // See if the callback exists
                if (callback && typeof (callback) === "function") {
                    // Execute the callback
                    callback();
                }
            });
        });
    };
    // Method to uninstall the configuration
    _SPConfig.prototype.uninstall = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName;
        // Uninstall the web components
        this.uninstallWeb().then(function () {
            // Uninstall the site components
            _this.uninstallSite().then(function () {
                // Remove the webparts
                _this.removeWebParts().then(function () {
                    // Log
                    console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                    // See if the callback exists
                    if (callback && typeof (callback) === "function") {
                        // Execute the callback
                        callback();
                    }
                });
            });
        });
    };
    return _SPConfig;
}());
;
exports.SPConfig = _SPConfig;
//# sourceMappingURL=spCfg.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Convert a JSON string to a base object
 */
exports.parse = function (jsonString) {
    // Try to parse the string
    try {
        var obj = JSON.parse(jsonString);
        // Create a base object
        var base = new utils_1.Base(obj.props);
        // Set the properties
        base.response = obj.response;
        base.status = obj.status;
        // Update the object
        base.updateDataObject(false);
        // Return the base object
        return base;
    }
    catch (_a) { }
    return null;
};
//# sourceMappingURL=parse.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Taxonomy Helper Class
 */
exports.Taxonomy = {
    /**
     * Method to find a term by id
     */
    findById: function (term, termId) {
        // See if this is the root node
        if (term.info && term.info.id == termId) {
            // Return the root node
            return term;
        }
        // Parse the child nodes
        for (var prop in term) {
            // Skip the info and parent
            if (prop == "info" || prop == "parent") {
                continue;
            }
            // Find the term by id
            var childTerm = exports.Taxonomy.findById(term[prop], termId);
            if (childTerm) {
                return childTerm;
            }
        }
    },
    /**
     * Method to find a term by name
     */
    findByName: function (term, termName) {
        // See if this is the root node
        if (term.info && term.info.name == termName) {
            // Return the root node
            return term;
        }
        // Parse the child nodes
        for (var prop in term) {
            // Skip the info and parent
            if (prop == "info" || prop == "parent") {
                continue;
            }
            // Find the term by id
            var childTerm = exports.Taxonomy.findByName(term[prop], termName);
            if (childTerm) {
                return childTerm;
            }
        }
    },
    /**
     * Method to get the terms
     */
    getTerms: function (termSet, termSetTerms) {
        var terms = [];
        // Add the root term
        terms.push({
            description: termSet.get_description(),
            id: termSet.get_id().toString(),
            name: termSet.get_name(),
            path: [],
            pathAsString: "",
            props: termSet.get_customProperties()
        });
        // Parse the term sets terms
        var enumerator = termSetTerms.getEnumerator();
        while (enumerator.moveNext()) {
            var term = enumerator.get_current();
            // Create the terms
            terms.push({
                description: term.get_description(),
                id: term.get_id().toString(),
                name: term.get_name(),
                path: term.get_pathOfTerm().split(";"),
                pathAsString: term.get_pathOfTerm(),
                props: term.get_customProperties()
            });
        }
        // Sort the terms
        terms.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        // Return the terms
        return terms;
    },
    /**
     * Method to get the term group
     */
    getTermGroup: function (groupName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the scripts
            exports.Taxonomy.loadScripts().then(function () {
                // Get the taxonomy session
                var context = SP.ClientContext.get_current();
                var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                // See if we are getting a specific group name
                if (groupName) {
                    // Resolve the promise
                    var termStores_1 = session.get_termStores();
                    context.load(termStores_1, "Include(Groups)");
                    context.executeQueryAsync(function () {
                        // Get the default store
                        var enumerator = termStores_1.getEnumerator();
                        var termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                        if (termStore) {
                            // Get the term group
                            var termGroup = termStore.get_groups().getByName(groupName);
                            context.load(termGroup);
                            // Resolve the promise
                            resolve({ context: context, termGroup: termGroup });
                        }
                        else {
                            // Reject the promise
                            reject("Unable to find the taxonomy store.");
                        }
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Reject the promise
                        reject(args[1].get_message());
                    });
                }
                else {
                    // Get the default site collection group
                    var termStore = session.getDefaultSiteCollectionTermStore();
                    var termGroup = termStore.getSiteCollectionGroup(context.get_site());
                    context.load(termGroup);
                    // Resolve the promise
                    resolve({ context: context, termGroup: termGroup });
                }
            });
        });
    },
    /**
     * Method to get the terms by id
     */
    getTermsById: function (termStoreId, termSetId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the scripts
            exports.Taxonomy.loadScripts().then(function () {
                // Get the taxonomy session
                var context = SP.ClientContext.get_current();
                var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                // Get the term set terms
                var termStore = session.get_termStores().getById(termStoreId);
                var termSet = termStore.getTermSet(termSetId);
                var terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                // Execute the request
                context.executeQueryAsync(function () {
                    // Resolve the promise
                    resolve(exports.Taxonomy.getTerms(termSet, terms));
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Reject the promise
                    reject(args[1].get_message());
                });
            });
        });
    },
    /**
     * Method to get the term set by id
     */
    getTermSetById: function (termStoreId, termSetId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the terms
            exports.Taxonomy.getTermsById(termStoreId, termSetId).then(
            // Success
            function (terms) {
                // Resolve the promise
                resolve(exports.Taxonomy.toObject(terms));
            }, 
            // Error
            function (reason) {
                // Reject the promise
                reject(reason);
            });
        });
    },
    /**
     * Method to get the terms from the default site collection
     */
    getTermsFromDefaultSC: function (termSetName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the term group
            exports.Taxonomy.getTermGroup().then(
            // Success
            function (_a) {
                var context = _a.context, termGroup = _a.termGroup;
                // Get the term set terms
                var termSet = termGroup.get_termSets().getByName(termSetName);
                var terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                // Execute the request
                context.executeQueryAsync(function () {
                    // Resolve the promise
                    resolve(exports.Taxonomy.getTerms(termSet, terms));
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Reject the promise
                    reject(args[1].get_message());
                });
            }, 
            // Error
            function (reason) {
                // Reject the promise
                reject(reason);
            });
        });
    },
    /**
     * Method to get the term set from the default site collection
     */
    getTermSetFromDefaultSC: function (termSetName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the terms
            exports.Taxonomy.getTermsFromDefaultSC(termSetName).then(
            // Success
            function (terms) {
                // Resolve the object
                resolve(exports.Taxonomy.toObject(terms));
            }, 
            // Error
            function (reason) {
                // Reject the promise
                reject(reason);
            });
        });
    },
    /**
     * Method to get a terms from a specified group
     */
    getTermsByGroupName: function (termSetName, groupName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the term group
            exports.Taxonomy.getTermGroup(groupName).then(function (_a) {
                var context = _a.context, termGroup = _a.termGroup;
                // Get the term set terms
                var termSet = termGroup.get_termSets().getByName(termSetName);
                var terms = termSet.getAllTerms();
                context.load(termSet);
                context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                // Execute the request
                context.executeQueryAsync(function () {
                    // Resolve the promise
                    resolve(exports.Taxonomy.getTerms(termSet, terms));
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Reject the promise
                    reject(args[1].get_message());
                });
            });
        });
    },
    /**
     * Method to get the term set from the default site collection
     */
    getTermSetByGroupName: function (termSetName, groupName) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the terms
            exports.Taxonomy.getTermsByGroupName(termSetName, groupName).then(
            // Success
            function (terms) {
                // Resolve the object
                resolve(exports.Taxonomy.toObject(terms));
            }, 
            // Error
            function (reason) {
                // Reject the promise
                reject(reason);
            });
        });
    },
    /**
     * Method to ensure the taxonomy script references are loaded.
     */
    loadScripts: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the core script is loaded
            SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", function () {
                // Ensure the taxonomy script is loaded
                SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", function () {
                    // Resolve the promise
                    resolve();
                });
            }, "sp.js");
        });
    },
    /**
     * Method to convert a term to an array of term information
     */
    toArray: function (term) {
        var terms = [];
        // Recursive method to extract the child terms
        var getChildTerms = function (term, terms) {
            // Parse the properties
            for (var prop in term) {
                // Skip the info and parent properties
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                // Add the child term
                var childTerm = term[prop];
                terms.push(childTerm.info);
                // Add the child terms
                getChildTerms(childTerm, terms);
            }
        };
        // Ensure the term exists
        if (term) {
            // See if the root node contains term information
            if (term.info) {
                // Add the root term
                terms.push(term.info);
            }
            // Get the child terms
            getChildTerms(term, terms);
        }
        // Return the child terms
        return terms;
    },
    /**
     * Method to convert a term to a field value
     */
    toFieldValue: function (term) {
        var termInfo = term ? term["info"] || term : null;
        // Ensure the term exists
        if (termInfo) {
            return {
                __metadata: { "type": "SP.Taxonomy.TaxonomyFieldValue" },
                Label: termInfo.name,
                TermGuid: termInfo.id,
                WssId: -1
            };
        }
        // Return nothing
        return null;
    },
    /**
     * Method to convert a collection of terms to a field value
     */
    toFieldMultiValue: function (terms) {
        var results = [];
        // Ensure terms exist
        if (terms && terms.length > 0) {
            // Parse the terms
            for (var i = 0; i < terms.length; i++) {
                var termInfo = terms[i]["info"] || terms[i];
                // Add the term
                results.push(";#" + termInfo.name + "|" + termInfo.id);
            }
        }
        // Return a blank array
        return {
            __metadata: { type: "Collection(SP.Taxonomy.TaxonomyFieldValue)" },
            results: results
        };
    },
    /**
     * Method to convert the terms to an object
     */
    toObject: function (terms) {
        var root = {};
        // Recursive method to add terms
        var addTerm = function (node, info, path) {
            var term = node;
            var termName = "";
            // Loop for each term
            while (path.length > 0) {
                // Ensure the term exists
                termName = path[0];
                if (term[termName] == null) {
                    // Create the term
                    term[termName] = {};
                }
                // Set the term
                var parent_1 = term;
                term = term[termName];
                // Set the parent
                term.parent = parent_1;
                // Remove the term from the path
                path.splice(0, 1);
            }
            // Set the info
            term.info = info;
        };
        // Ensure the terms exist
        if (terms && terms.length > 0) {
            // Parse the terms
            for (var i = 0; i < terms.length; i++) {
                var term = terms[i];
                // See if this is the root term
                if (term.pathAsString == "") {
                    // Set the root information
                    root.info = term;
                }
                else {
                    // Add the term
                    addTerm(root, term, term.pathAsString.split(";"));
                }
            }
            // Return the root term
            return exports.Taxonomy.findById(root, terms[0].id);
        }
        // Return nothing
        return null;
    }
};
//# sourceMappingURL=taxonomy.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
/**
 * WebPart Configuration
 */
exports.WPCfg = {
    // Method to get the webpart
    getWebPart: function getWebPart(wpId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current context
            var context = SP.ClientContext.get_current();
            // Get the webpart from the current page
            var page = context.get_web().getFileByServerRelativeUrl(gd_sprest_1.ContextInfo.serverRequestPath);
            var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
            var wpDef = wpMgr.get_webParts().getById(wpId);
            var wp = wpDef.get_webPart();
            context.load(wp, "Properties");
            // Execute the request
            context.executeQueryAsync(
            // Success
            function () {
                // Resolve the promise
                resolve({
                    Context: context,
                    Properties: wp.get_properties(),
                    WebPart: wp,
                    WebPartDefinition: wpDef
                });
            },
            // Error
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // Reject the promise
                reject(args[1] ? args[1].get_message() : "");
            });
        });
    },
    // Method to get the webpart id for a specified element
    getWebPartId: function getWebPartId(el) {
        // Loop until we find the webpart id
        while (el) {
            // See if this element contains the webpart id
            var wpId = el.getAttribute("webpartid");
            if (wpId) {
                // Return the webpart id
                return wpId;
            }
            // Check the parent
            el = el.parentElement;
        }
        // Unable to detect
        return "";
    },
    // Method to save the webpart configuration
    saveConfiguration: function saveConfiguration(wpId, cfgId, wpCfg) {
        // Update the webpart content elements and return if they exist
        if (exports.WPCfg.updateWebPartContentElements(wpId, cfgId, wpCfg)) {
            return;
        }
        // Get the target webpart
        exports.WPCfg.getWebPart(wpId).then(function (wpInfo) {
            // Get the content
            var content = wpInfo && wpInfo.Properties.get_fieldValues()["Content"];
            if (content) {
                // Create an element so we can update the configuration
                var el = document.createElement("div");
                el.innerHTML = content;
                // Get the configuration element and update it
                var cfg = el.querySelector("#" + cfgId);
                cfg ? cfg.innerText = JSON.stringify(wpCfg) : null;
                // Update the webpart
                wpInfo.Properties.set_item("Content", el.innerHTML);
                wpInfo.WebPartDefinition.saveWebPartChanges();
                wpInfo.Context.load(wpInfo.WebPartDefinition);
                // Execute the request
                wpInfo.Context.executeQueryAsync(
                // Success
                function () {
                    // Disable the edit page warning
                    if (SP && SP.Ribbon && SP.Ribbon.PageState && SP.Ribbon.PageState.PageStateHandler) {
                        SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;
                    }
                    // Refresh the page
                    window.location.href = window.location.pathname + "?DisplayMode=Design";
                },
                // Error
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Log
                    console.error("[gd-sprest] Error saving the configuration. " + args[1].get_message());
                });
            }
        });
    },
    // Method to update the configuration element
    updateConfigurationInElement: function updateConfigurationInElement(cfgId, elTarget, wpCfg) {
        // Create an element so we can update the configuration
        var el = document.createElement("div");
        el.innerHTML = elTarget.value;
        // Get the configuration element and update it
        var cfg = el.querySelector("#" + cfgId);
        cfg ? cfg.innerText = JSON.stringify(wpCfg) : null;
        // Update the value
        elTarget.value = el.innerHTML;
    },
    // Method to update the webpart content elements
    updateWebPartContentElements: function updateWebPartContentElements(wpId, cfgId, wpCfg) {
        // Get the webpart element
        var elWebPart = document.querySelector("div[webpartid='" + wpId + "']");
        if (elWebPart) {
            var wpContent = null;
            var wpPageContent = null;
            // Get the associated webpart id
            var wpId2 = elWebPart.getAttribute("webpartid2");
            // Update the configuration
            var cfg = elWebPart.querySelector("#" + cfgId);
            cfg ? cfg.innerText = JSON.stringify(wpCfg) : null;
            // Parse the hidden elements on the page
            var hiddenElements = document.querySelectorAll("input[type='hidden']");
            for (var i = 0; i < hiddenElements.length; i++) {
                var elHidden = hiddenElements[i];
                // See if we have found the webpart content and page content hidden elements
                if (wpContent && wpPageContent) {
                    continue;
                }
                // See if this is a hidden webpart content element
                if (elHidden.name && elHidden.name.indexOf("scriptcontent") == elHidden.name.length - 13) {
                    // See if it's for this webpart
                    if (elHidden.name.indexOf(wpId2) == 0) {
                        // Set the webpart content element
                        wpContent = elHidden;
                        // Update the configuration in the webpart content element
                        exports.WPCfg.updateConfigurationInElement(cfgId, wpContent, wpCfg);
                    }
                    // Continue the loop
                    continue;
                }
                // Create an element and set the inner html to the value
                var el = document.createElement("div");
                el.innerHTML = elHidden.value;
                // See if this is a hidden field element
                if (el.querySelector("#" + cfgId)) {
                    // Set the webpart page content
                    wpPageContent = elHidden;
                    // Update the configuration in the webpart content element
                    exports.WPCfg.updateConfigurationInElement(cfgId, wpPageContent, wpCfg);
                    // Continue the loop
                    continue;
                }
            }
            // Return true, if the page content exists
            return wpPageContent != null;
        }
        // Webpart is not in a content field
        return false;
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(6);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(20)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./gd-sprest-js.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./gd-sprest-js.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "/**\r\n * Contextual Host\r\n */\r\n\r\n/** Ensure the popup is visible over the panel. */\r\n.ms-ContextualHost {\r\n    z-index: 1010;\r\n}\r\n\r\n/**\r\n * Display Form\r\n */\r\n\r\n/** Add an underline to the field */\r\n.display-form {\r\n    border-bottom: 1px solid #c8c8c8;\r\n    padding: 5px 0px;\r\n}\r\n.display-form:hover {\r\n    border-color: #767676;\r\n}\r\n\r\n/** The field value */\r\n.display-form .field-value{\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n}\r\n\r\n/**\r\n * Dropdown\r\n */\r\n\r\n/** Update the font color to make it more visible. */\r\n.dropdown .textfield .ms-TextField-field {\r\n    color: #444;\r\n}\r\n\r\n/** Set the max height of the dropdown */\r\n.ms-List--dropdown {\r\n    max-height: 50vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n/**\r\n * Form Error\r\n */\r\n.ms-Label.form-error {\r\n    color: #a80000;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    padding-left: 12px;\r\n}\r\n\r\n/**\r\n * Field\r\n */\r\n\r\n/** Label **/\r\n.field-label {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding-left: 12px;\r\n}\r\n\r\n/**\r\n * Label\r\n */\r\n\r\n/** Hide the description by default */\r\n.ms-Icon.is-description span { display: none; }\r\n\r\n/** Show the description on hover */\r\n.ms-Icon.is-description:hover span { display: block; }\r\n\r\n/**\r\n * Link Field\r\n */\r\n\r\n /** Add the underline */\r\n.ms-LinkField {\r\n    border-bottom: 1px solid #c8c8c8;\r\n}\r\n.ms-LinkField:hover {\r\n    border-color: #767676;\r\n}\r\n\r\n/** Align the link */\r\n.ms-LinkField .ms-Link {\r\n    padding-left: 5px;\r\n}\r\n\r\n/**\r\n * Panel\r\n */\r\n\r\n/** Fix the height */\r\n.ms-Panel-contentInner.ms-Panel-main {\r\n    height: 85vh;\r\n}\r\n\r\n/**\r\n * Text Field\r\n */\r\n\r\n/** Update the disabled labels font color */\r\n.ms-TextField .ms-TextField-field:disabled {\r\n    color: #444;\r\n}\r\n\r\n/** Update the label for the underline type */\r\n.ms-TextField.ms-TextField--underlined > .ms-Label.field-label {\r\n    display: block;\r\n}\r\n\r\n/**\r\n * WebPart Tabs\r\n */\r\n\r\n/** Remove the spacing around the webparts */\r\n.ms-webpart-zone.wp-tabs {\r\n    border-spacing: 0px;\r\n}\r\n\r\n/** Hide the titles of the webparts */\r\n.ms-webpart-zone.wp-tabs .ms-webpart-titleText {\r\n    display: none;\r\n}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(21);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// Include the fabric js
__export(__webpack_require__(23));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(10);
__webpack_require__(26);
//Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * Office UI Fabric JS 1.5.0
 * The JavaScript front-end framework for building experiences for Office 365.
 **/
var fabric;!function (e) {
  var t = 33,
      i = function () {
    function e() {}return e.transition = function (t, i) {
      var n = { element: t, props: i, transformations: {} };e._animationObjects.push(n), e._parseProperties(n), e._createTransition(n), setTimeout(e._setProperties, 0, n), e._setCallback(n);
    }, e.animation = function (t, i, n) {
      var s = { element: t, keyframes: i, props: n };e._animationObjects.push(s), e._parseProperties(s), e._createAnimation(s), e._setCallback(s);
    }, e.scrollTo = function (t, i) {
      var n = { element: t, props: i, step: 0 };e._setScrollProperties(n), n.props.delay ? setTimeout(e._animationObjects, 1e3 * n.props.delay, n) : e._animateScroll(n), e._animationObjects.push(n);
    }, e._setScrollProperties = function (e) {
      e.beginTop = e.element.scrollTop, e.change = e.props.top - e.beginTop, e.props.duration = 1e3 * e.props.duration;
    }, e._parseProperties = function (t) {
      var i = e._timeProps.concat(e._callbackProps);t.tweenObj = {};for (var n in t.props) {
        e._contains(i, n) ? t[n] = t.props[n] : t.tweenObj[n] = t.props[n];
      }
    }, e._animateScroll = function (i) {
      var n = i.props.duration / t,
          s = e._easeOutExpo(i.step++, i.beginTop, i.change, n);i.element.scrollTop = s, i.step >= n ? (i.element.scrollTop = i.props.top, e._executeCallback(i.props), e._removeAnimationObject(i)) : setTimeout(function () {
        requestAnimationFrame(function () {
          e._animateScroll(i);
        });
      }, t);
    }, e._createTransition = function (t) {
      var i = t.duration || 0,
          n = t.delay || 0;t.element.style.transitionProperty = e._getTransitionProperties(t.tweenObj), t.element.style.transitionDuration = i.toString() + "s", t.element.style.transitionTimingFunction = t.ease || "linear", t.element.style.transitionDelay = n.toString() + "s";
    }, e._createAnimation = function (e) {
      var t = e.duration || 0,
          i = e.delay || 0;e.element.style.animationName = e.keyframes, e.element.style.animationDuration = t.toString() + "s", e.element.style.animationTimingFunction = e.ease || "linear", e.element.style.animationDelay = i.toString() + "s", e.element.style.animationFillMode = "both";
    }, e._getTransitionProperties = function (t) {
      var i = !1,
          n = !1,
          s = [];for (var o in t) {
        e._contains(e._transformProps, o) ? i = !0 : e._contains(e._filters, o) ? n = !0 : s.push(e._camelCaseToDash(o));
      }return i && s.push("transform"), n && (s.push("-webkit-filter"), s.push("filter")), s.join(", ");
    }, e._setProperties = function (t) {
      for (var i in t.tweenObj) {
        e._contains(e._transformProps, i) ? e._setTransformValues(t, i) : e._contains(e._filters, i) ? e._setFilterValues(t, i) : e._setRegularValues(t, i);
      }t.transformations && e._setTransformations(t);
    }, e._setRegularValues = function (e, t) {
      var i = e.tweenObj[t];i.toString().indexOf("%") === -1 && (i += "opacity" !== t && "backgroundColor" !== t && "boxShadow" !== t ? "px" : ""), e.element.style[t] = i;
    }, e._setFilterValues = function (t, i) {
      var n = t.tweenObj[i];n = "hueRotate" === i ? "(" + n + "deg)" : "blur" === i ? "(" + n + "px)" : "(" + n + "%)", i = e._camelCaseToDash(i), t.element.style.webkitFilter = i + n, t.element.style.filter = i + n;
    }, e._setTransformValues = function (e, t) {
      /x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(t) && (e.transformations[t] = e.tweenObj[t]);
    }, e._setTransformations = function (e) {
      var t = "",
          i = "",
          n = "",
          s = "",
          o = e.transformations;s += void 0 !== o.x && o.x ? "translateX(" + o.x + "px) " : "", s += void 0 !== o.y && o.y ? "translateY(" + o.y + "px) " : "", s += void 0 !== o.z && o.z ? "translateZ(" + o.z + "px) " : "", t += void 0 !== o.rotate && o.rotate ? "rotate(" + o.rotate + "deg) " : "", t += void 0 !== o.rotateX && o.rotateX ? "rotateX(" + o.rotateX + "deg) " : "", t += void 0 !== o.rotateY && o.rotateY ? "rotate(" + o.rotateY + "deg) " : "", t += void 0 !== o.rotateZ && o.rotateZ ? "rotate(" + o.rotateZ + "deg) " : "", i += void 0 !== o.scaleX && o.scaleX ? "scaleX(" + o.scaleX + ") " : "", i += void 0 !== o.scaleY && o.scaleY ? "scaleY(" + o.scaleY + ") " : "", i += void 0 !== o.scaleZ && o.scaleZ ? "scaleZ(" + o.scaleZ + ") " : "", n += void 0 !== o.skewX && o.skewX ? "skewX(" + o.skewX + "deg) " : "", n += void 0 !== o.skewY && o.skewY ? "skewY(" + o.skewY + "deg) " : "", e.element.style.transform = s + t + i + n;
    }, e._setCallback = function (t) {
      t.element.addEventListener("webkitTransitionEnd", e._complete, !1), t.element.addEventListener("transitionend", e._complete, !1), t.element.addEventListener("webkitAnimationEnd", e._complete, !1), t.element.addEventListener("animationend", e._complete, !1);
    }, e._complete = function (t) {
      t.target.removeEventListener("webkitTransitionEnd", e._complete), t.target.removeEventListener("transitionend", e._complete), t.target.removeEventListener("webkitAnimationEnd", e._complete), t.target.removeEventListener("animationend", e._complete);var i = e._getAnimationObjByElement(t.target);e._executeCallback(i), e._removeAnimationObject(i);
    }, e._getAnimationObjByElement = function (t) {
      for (var i = e._animationObjects.length; i--;) {
        if (e._animationObjects[i].element === t) return e._animationObjects[i];
      }return null;
    }, e._removeAnimationObject = function (t) {
      for (var i = e._animationObjects.length; i--;) {
        e._animationObjects[i] === t && e._animationObjects.splice(i, 1);
      }
    }, e._executeCallback = function (e) {
      if (e.onEnd) {
        var t = e.onEndArgs || [];e.onEnd.apply(null, t);
      }
    }, e._contains = function (e, t) {
      for (var i = e.length; i--;) {
        if (t === e[i]) return !0;
      }return !1;
    }, e._camelCaseToDash = function (e) {
      return e.replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
    }, e._easeOutExpo = function (e, t, i, n) {
      return e === n ? t + i : i * (-Math.pow(2, -10 * e / n) + 1) + t;
    }, e._transformProps = ["x", "y", "z", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"], e._filters = ["blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia"], e._timeProps = ["duration", "ease", "delay"], e._callbackProps = ["onEnd", "onEndArgs"], e._animationObjects = [], e;
  }();e.Animate = i;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e() {}return e.QUAD_EASE_IN = e.CB + "(0.550, 0.085, 0.680, 0.530)", e.CUBIC_EASE_IN = e.CB + "(0.550, 0.055, 0.675, 0.190)", e.QUART_EASE_IN = e.CB + "(0.895, 0.030, 0.685, 0.220)", e.QUINT_EASE_IN = e.CB + "(0.755, 0.050, 0.855, 0.060)", e.SINE_EASE_IN = e.CB + "(0.470, 0, 0.745, 0.715)", e.EXPO_EASE_IN = e.CB + "(0.950, 0.050, 0.795, 0.035)", e.CIRC_EASE_IN = e.CB + "(0.600, 0.040, 0.980, 0.335)", e.BACK_EASE_IN = e.CB + "(0.600, 0.040, 0.980, 0.335)", e.QUAD_EASE_OUT = e.CB + "(0.250, 0.460, 0.450, 0.940)", e.CUBIC_EASE_OUT = e.CB + "(0.215, 0.610, 0.355, 1)", e.QUART_EASE_OUT = e.CB + "(0.165, 0.840, 0.440, 1)", e.QUINT_EASE_OUT = e.CB + "(0.230, 1, 0.320, 1)", e.SINE_EASE_OUT = e.CB + "(0.390, 0.575, 0.565, 1)", e.EXPO_EASE_OUT = e.CB + "(0.190, 1, 0.220, 1)", e.CIRC_EASE_OUT = e.CB + "(0.075, 0.820, 0.165, 1)", e.BACK_EASE_OUT = e.CB + "(0.175, 0.885, 0.320, 1.275)", e.QUAD_EASE_IN_OUT = e.CB + "(0.455, 0.030, 0.515, 0.955)", e.CUBIC_EASE_IN_OUT = e.CB + "(0.645, 0.045, 0.355, 1)", e.QUART_EASE_IN_OUT = e.CB + "(0.770, 0, 0.175, 1)", e.QUINT_EASE_IN_OUT = e.CB + "(0.860, 0, 0.070, 1)", e.SINE_EASE_IN_OUT = e.CB + "(0.445, 0.050, 0.550, 0.950)", e.EXPO_EASE_IN_OUT = e.CB + "(1, 0, 0, 1)", e.CIRC_EASE_IN_OUT = e.CB + "(0.785, 0.135, 0.150, 0.860)", e.BACK_EASE_IN_OUT = e.CB + "(0.680, -0.550, 0.265, 1.550)", e.CB = "cubic-bezier", e;
  }();e.Ease = t;
}(fabric || (fabric = {})), function () {
  function e(e, t) {
    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };var i = document.createEvent("CustomEvent");return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
  }e.prototype = Event.prototype, window.CustomEvent = e;
}();var fabric;!function (e) {
  "use strict";
  var t = function () {
    function e(e) {
      this._currentMaxItems = 0, this._itemCollection = [], this._tabIndex = 2, this.container = e, this._onResize = this._onResize.bind(this), this._openOverflow = this._openOverflow.bind(this), this._overflowKeyPress = this._overflowKeyPress.bind(this), this._closeOverflow = this._closeOverflow.bind(this), this.removeOutlinesOnClick = this.removeOutlinesOnClick.bind(this), this.init();
    }return e.prototype.removeOutlinesOnClick = function () {
      this._breadcrumbList.blur();
    }, e.prototype.addItem = function (e, t) {
      this._itemCollection.push({ text: e, link: t }), this._updateBreadcrumbs();
    }, e.prototype.removeItemByLabel = function (e) {
      for (var t = this._itemCollection.length; t--;) {
        this._itemCollection[t].text === e && this._itemCollection.splice(t, 1);
      }this._updateBreadcrumbs();
    }, e.prototype.removeItemByPosition = function (e) {
      this._itemCollection.splice(e, 1), this._updateBreadcrumbs();
    }, e.prototype.init = function () {
      this._cacheDOM(), this._setListeners(), this._createItemCollection(), this._onResize();
    }, e.prototype._createItemCollection = function () {
      var e,
          t,
          i,
          n,
          s = this._listItems.length,
          o = 0;for (o; o < s; o++) {
        e = this._listItems[o].querySelector(".ms-Breadcrumb-itemLink"), t = e.textContent, i = e.getAttribute("href"), n = parseInt(e.getAttribute("tabindex"), 10), this._itemCollection.push({ link: i, tabIndex: n, text: t });
      }
    }, e.prototype._onResize = function () {
      this._closeOverflow(null), this._renderList();
    }, e.prototype._renderList = function () {
      var t = window.innerWidth > e.MEDIUM ? 4 : 2;t !== this._currentMaxItems && this._updateBreadcrumbs(), this._currentMaxItems = t;
    }, e.prototype._updateBreadcrumbs = function () {
      this._tabIndex = 2;var t = window.innerWidth > e.MEDIUM ? 4 : 2;this._itemCollection.length > t ? this._breadcrumb.classList.add("is-overflow") : this._breadcrumb.classList.remove("is-overflow"), this._addItemsToOverflow(t), this._addBreadcrumbItems(t);
    }, e.prototype._addItemsToOverflow = function (e) {
      var t = this;this._resetList(this._contextMenu);var i = this._itemCollection.length - e,
          n = this._itemCollection.slice(0, i);n.forEach(function (e) {
        var i = document.createElement("li");i.className = "ms-ContextualMenu-item";var n = document.createElement("a");n.className = "ms-ContextualMenu-link", null !== e.link && n.setAttribute("href", e.link), n.setAttribute("tabindex", (t._tabIndex++).toString()), n.textContent = e.text, i.appendChild(n), t._contextMenu.appendChild(i);
      });
    }, e.prototype._addBreadcrumbItems = function (e) {
      this._resetList(this._breadcrumbList);var t = this._itemCollection.length - e;if (t = t < 0 ? 0 : t, t >= 0) for (t; t < this._itemCollection.length; t++) {
        var i = document.createElement("li"),
            n = this._itemCollection[t],
            s = document.createElement("a"),
            o = document.createElement("i");i.className = "ms-Breadcrumb-listItem", s.className = "ms-Breadcrumb-itemLink", null !== n.link && s.setAttribute("href", n.link), s.setAttribute("tabindex", (this._tabIndex++).toString()), s.textContent = n.text, o.className = "ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight", i.appendChild(s), i.appendChild(o), this._breadcrumbList.appendChild(i);
      }
    }, e.prototype._resetList = function (e) {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }
    }, e.prototype._openOverflow = function (e) {
      this._overflowMenu.className.indexOf(" is-open") === -1 && (this._overflowMenu.classList.add("is-open"), this.removeOutlinesOnClick(), this._overflowButton.focus());
    }, e.prototype._overflowKeyPress = function (e) {
      13 === e.keyCode && this._openOverflow(e);
    }, e.prototype._closeOverflow = function (e) {
      e && e.target === this._overflowButton || this._overflowMenu.classList.remove("is-open");
    }, e.prototype._cacheDOM = function () {
      this._breadcrumb = this.container, this._breadcrumbList = this._breadcrumb.querySelector(".ms-Breadcrumb-list"), this._listItems = this._breadcrumb.querySelectorAll(".ms-Breadcrumb-listItem"), this._contextMenu = this._breadcrumb.querySelector(".ms-ContextualMenu"), this._overflowButton = this._breadcrumb.querySelector(".ms-Breadcrumb-overflowButton"), this._overflowMenu = this._breadcrumb.querySelector(".ms-Breadcrumb-overflowMenu");
    }, e.prototype._setListeners = function () {
      window.addEventListener("resize", this._onResize, !1), this._overflowButton.addEventListener("click", this._openOverflow, !1), this._overflowButton.addEventListener("keypress", this._overflowKeyPress, !1), document.addEventListener("click", this._closeOverflow, !1), this._breadcrumbList.addEventListener("click", this.removeOutlinesOnClick, !1);
    }, e.MEDIUM = 639, e;
  }();e.Breadcrumb = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  "use strict";
  var t = function () {
    function e(e, t) {
      this._container = e, t && (this._clickHandler = t, this._setClick());
    }return e.prototype.disposeEvents = function () {
      this._container.removeEventListener("click", this._clickHandler, !1);
    }, e.prototype._setClick = function () {
      this._container.addEventListener("click", this._clickHandler, !1);
    }, e;
  }();e.Button = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "is-open",
      i = "is-positioned",
      n = "ms-ContextualHost-main",
      s = "ms-ContextualHost-beak",
      o = "ms-ContextualHost--arrowLeft",
      r = "ms-ContextualHost--arrowTop",
      a = "ms-ContextualHost--arrowBottom",
      c = "ms-ContextualHost--arrowRight",
      l = "ms-ContextualHost--",
      h = 28,
      d = 8,
      p = function () {
    function e(t, i, o, r, a, c, h) {
      if (void 0 === r && (r = !0), this._resizeAction = this._resizeAction.bind(this), this._dismissAction = this._dismissAction.bind(this), this._handleKeyUpDismiss = this._handleKeyUpDismiss.bind(this), this._matchTargetWidth = c || !1, this._direction = i, this._container = this.createContainer(), this._contextualHost = this._container, this._contextualHostMain = this._contextualHost.getElementsByClassName(n)[0], this._contextualHostMain.appendChild(t), this._hasArrow = r, this._arrow = this._container.getElementsByClassName(s)[0], this._targetElement = o, this._openModal(), this._setResizeDisposal(), h && (this._disposalCallback = h), a) for (var d = 0; d < a.length; d++) {
        this._container.classList.add(l + a[d]);
      }e.hosts || (e.hosts = []), e.hosts.push(this);
    }return e.prototype.disposeModal = function () {
      if (e.hosts.length > 0) {
        window.removeEventListener("resize", this._resizeAction, !1), document.removeEventListener("click", this._dismissAction, !0), document.removeEventListener("keyup", this._handleKeyUpDismiss, !0), this._container.parentNode.removeChild(this._container), this._disposalCallback && this._disposalCallback();var t = e.hosts.indexOf(this);e.hosts.splice(t, 1);for (var i = e.hosts.length; i--;) {
          e.hosts[i].disposeModal(), e.hosts.splice(i, 1);
        }
      }
    }, e.prototype.setChildren = function (e) {
      this._children || (this._children = []), this._children.push(e);
    }, e.prototype.contains = function (e) {
      return this._container.contains(e);
    }, e.prototype.createContainer = function () {
      var e = document.createElement("div");e.setAttribute("class", "ms-ContextualHost"), e.innerHTML += " ";var t = document.createElement("div");t.setAttribute("class", n), t.innerHTML += " ", e.appendChild(t), e.innerHTML += " ";var i = document.createElement("div");return i.setAttribute("class", s), e.appendChild(i), e.innerHTML += "", e;
    }, e.prototype._openModal = function () {
      var e = this;this._copyModalToBody(), this._saveModalSize(), this._findAvailablePosition(), this._showModal(), setTimeout(function () {
        e._setDismissClick();
      }, 100);
    }, e.prototype._findAvailablePosition = function () {
      var e;switch (this._direction) {case "left":
          e = this._positionOk(this._tryPosModalLeft.bind(this), this._tryPosModalRight.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this)), this._setPosition(e);break;case "right":
          e = this._positionOk(this._tryPosModalRight.bind(this), this._tryPosModalLeft.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this)), this._setPosition(e);break;case "top":
          e = this._positionOk(this._tryPosModalTop.bind(this), this._tryPosModalBottom.bind(this)), this._setPosition(e);break;case "bottom":
          e = this._positionOk(this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this)), this._setPosition(e);break;default:
          this._setPosition();}
    }, e.prototype._showModal = function () {
      this._container.classList.add(t);
    }, e.prototype._positionOk = function (e, t, i, n) {
      var s;return s = e(), s || (s = t(), !s && i && (s = i(), !s && n && (s = n()))), s;
    }, e.prototype._calcLeft = function (e, t, i) {
      var n = e / 2,
          s = t / 2,
          o = i + s - n;return o = o < n ? i : o;
    }, e.prototype._calcTop = function (e, t, i) {
      var n = e / 2,
          s = t / 2,
          o = i + s - n;return o = o < n ? i : o;
    }, e.prototype._setPosition = function (e) {
      var t,
          n,
          s,
          l,
          p = this._targetElement.getBoundingClientRect(),
          u = p.left,
          _ = p.right,
          m = p.top,
          f = p.width,
          v = p.height,
          y = "",
          b = window.scrollX ? window.scrollX : 0,
          g = window.scrollY ? window.scrollY : 0,
          C = this._hasArrow ? h : 0;switch (this._matchTargetWidth && (y = "width: " + this._modalWidth + "px;"), e) {case "left":
          t = u - this._modalWidth - C, n = this._calcTop(this._modalHeight, v, m), n += window.scrollY ? window.scrollY : 0, this._container.setAttribute("style", "top: " + n + "px; left: " + t + "px;" + y), this._container.classList.add(i), this._hasArrow && (this._container.classList.add(c), s = m + g - n + d, this._arrow.setAttribute("style", "top: " + s + "px;"));break;case "right":
          n = this._calcTop(this._modalHeight, v, m), n += g, t = _ + C, this._container.setAttribute("style", "top: " + n + "px; left: " + t + "px;" + y), this._container.classList.add(i), this._hasArrow && (s = g + m - n + d, this._arrow.setAttribute("style", "top: " + s + "px;"), this._container.classList.add(o));break;case "top":
          t = this._calcLeft(this._modalWidth, this._teWidth, u), n = m - this._modalHeight - C, n += g, this._container.setAttribute("style", "top: " + n + "px; left: " + t + "px;" + y), this._container.classList.add(i), this._hasArrow && (s = this._modalHeight - C / 2, l = Math.max(b + u - t + (f - C) / 2, d), this._arrow.setAttribute("style", "top: " + s + "px; left: " + l + "px;"), this._container.classList.add(a));break;case "bottom":
          t = t = this._calcLeft(this._modalWidth, this._teWidth, u), n = m + v + C, n += window.scrollY ? window.scrollY : 0, this._container.setAttribute("style", "top: " + n + "px; left: " + t + "px;" + y), this._container.classList.add(i), this._hasArrow && (l = Math.max(b + u - t + (f - C) / 2, d), this._arrow.setAttribute("style", "left: " + l + "px;"), this._container.classList.add(r));break;default:
          this._container.setAttribute("style", "top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);");}
    }, e.prototype._tryPosModalLeft = function () {
      var e = this._targetElement.getBoundingClientRect().left;return !(e < this._modalWidth) && "left";
    }, e.prototype._tryPosModalRight = function () {
      var e = this._targetElement.getBoundingClientRect().right,
          t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);return !(t - e < this._modalWidth) && "right";
    }, e.prototype._tryPosModalBottom = function () {
      var e = window.innerHeight - this._targetElement.getBoundingClientRect().bottom;return !(e < this._modalHeight) && "bottom";
    }, e.prototype._tryPosModalTop = function () {
      var e = this._targetElement.getBoundingClientRect().top;return !(e < this._modalHeight) && "top";
    }, e.prototype._copyModalToBody = function () {
      document.body.appendChild(this._container);
    }, e.prototype._saveModalSize = function () {
      var e = window.getComputedStyle(this._container);if (this._container.setAttribute("style", "opacity: 0; z-index: -1"), this._container.classList.add(i), this._container.classList.add(t), this._matchTargetWidth) {
        var n = window.getComputedStyle(this._targetElement);this._modalWidth = this._targetElement.getBoundingClientRect().width + (parseInt(n.marginLeft, 10) + parseInt(n.marginLeft, 10));
      } else this._modalWidth = this._container.getBoundingClientRect().width + (parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)), this._container.setAttribute("style", "");this._modalHeight = this._container.getBoundingClientRect().height + (parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10)), this._container.classList.remove(i), this._container.classList.remove(t), this._teWidth = this._targetElement.getBoundingClientRect().width, this._teHeight = this._targetElement.getBoundingClientRect().height;
    }, e.prototype._dismissAction = function (e) {
      if (!this._container.contains(e.target) && e.target !== this._container) if (void 0 !== this._children) {
        var t = !1;this._children.map(function (i) {
          void 0 !== i && (t = i.contains(e.target));
        }), t || this.disposeModal();
      } else this.disposeModal();
    }, e.prototype._setDismissClick = function () {
      document.addEventListener("click", this._dismissAction, !0), document.addEventListener("keyup", this._handleKeyUpDismiss, !0);
    }, e.prototype._handleKeyUpDismiss = function (e) {
      32 !== e.keyCode && 27 !== e.keyCode || this._dismissAction(e);
    }, e.prototype._resizeAction = function () {
      this.disposeModal();
    }, e.prototype._setResizeDisposal = function () {
      window.addEventListener("resize", this._resizeAction, !1);
    }, e;
  }();e.ContextualHost = p;
}(fabric || (fabric = {}));var STATE_HIDDEN = "is-hidden",
    CLOSE_BUTTON_CLASS = ".ms-Callout-close",
    MODIFIER_OOBE_CLASS = "ms-Callout--OOBE",
    fabric;!function (e) {
  "use strict";
  var t = function () {
    function t(e, t, i) {
      this._container = e, this._addTarget = t, this._position = i, this._closeButton = document.querySelector(CLOSE_BUTTON_CLASS), this._setOpener();
    }return t.prototype._setOpener = function () {
      this._addTarget.addEventListener("click", this._clickHandler.bind(this), !0), this._addTarget.addEventListener("keyup", this._keyupHandler.bind(this), !0);
    }, t.prototype._openContextMenu = function () {
      var t = [];this._hasModifier(MODIFIER_OOBE_CLASS) && t.push("primaryArrow"), this._container.classList.remove(STATE_HIDDEN), this._contextualHost = new e.ContextualHost(this._container, this._position, this._addTarget, !0, t), this._closeButton && this._closeButton.addEventListener("click", this._closeHandler.bind(this), !1);
    }, t.prototype._hasModifier = function (e) {
      return this._container.classList.contains(e);
    }, t.prototype._closeHandler = function (e) {
      null != this._contextualHost && this._contextualHost.disposeModal(), this._closeButton.removeEventListener("click", this._closeHandler.bind(this), !1), this._addTarget.removeEventListener("click", this._clickHandler.bind(this), !0), this._addTarget.removeEventListener("keyup", this._keyupHandler.bind(this), !0);
    }, t.prototype._clickHandler = function (e) {
      this._openContextMenu();
    }, t.prototype._keyupHandler = function (e) {
      32 === e.keyCode ? (e.stopPropagation(), e.preventDefault(), this._openContextMenu()) : this._closeHandler(e);
    }, t;
  }();e.Callout = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e) {
      this._container = e, this._choiceField = this._container.querySelector(".ms-CheckBox-field"), this._choiceInput = this._container.querySelector(".ms-CheckBox-input"), this._choiceInput.checked && this._choiceField.setAttribute("aria-checked", "true"), "true" === this._choiceField.getAttribute("aria-checked") && this._choiceField.classList.add("is-checked"), this._addListeners();
    }return e.prototype.getValue = function () {
      return "true" === this._choiceField.getAttribute("aria-checked");
    }, e.prototype.toggle = function () {
      this.getValue() ? this.unCheck() : this.check(), this._choiceInput.click();
    }, e.prototype.check = function () {
      this._choiceField.setAttribute("aria-checked", "true"), this._choiceField.classList.add("is-checked");
    }, e.prototype.unCheck = function () {
      this._choiceField.setAttribute("aria-checked", "false"), this._choiceField.classList.remove("is-checked");
    }, e.prototype.removeListeners = function () {
      this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this)), this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this)), this._choiceField.removeEventListener("click", this._ClickHandler.bind(this)), this._choiceField.removeEventListener("keydown", this._KeydownHandler.bind(this));
    }, e.prototype._addListeners = function (e) {
      var t = e && e.ignore;t && t.indexOf("focus") > -1 || this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), !1), t && t.indexOf("blur") > -1 || this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), !1), t && t.indexOf("click") > -1 || this._choiceField.addEventListener("click", this._ClickHandler.bind(this), !1), t && t.indexOf("keydown") > -1 || this._choiceField.addEventListener("keydown", this._KeydownHandler.bind(this), !1);
    }, e.prototype._FocusHandler = function () {
      this._choiceField.classList.add("in-focus");
    }, e.prototype._BlurHandler = function () {
      this._choiceField.classList.remove("in-focus");
    }, e.prototype._ClickHandler = function (e) {
      e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this.toggle();
    }, e.prototype._KeydownHandler = function (e) {
      32 === e.keyCode && (e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this.toggle());
    }, e;
  }();e.CheckBox = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e) {
      this._container = e, this._choiceField = this._container.querySelector(".ms-RadioButton-field"), this._choiceInput = this._container.querySelector(".ms-RadioButton-input"), "true" === this._choiceField.getAttribute("aria-checked") && this._choiceField.classList.add("is-checked"), this._addListeners();
    }return e.prototype.getValue = function () {
      return "true" === this._choiceField.getAttribute("aria-checked");
    }, e.prototype.toggle = function () {
      this.getValue() ? this.unCheck() : this.check();
    }, e.prototype.check = function () {
      this._choiceField.setAttribute("aria-checked", "true"), this._choiceField.classList.add("is-checked"), this._choiceInput.checked = !0;
    }, e.prototype.unCheck = function () {
      this._choiceField.setAttribute("aria-checked", "false"), this._choiceField.classList.remove("is-checked"), this._choiceInput.checked = !1;
    }, e.prototype.removeListeners = function () {
      this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this)), this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this)), this._choiceField.removeEventListener("click", this._RadioClickHandler.bind(this)), this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this));
    }, e.prototype._addListeners = function () {
      this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), !1), this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), !1), this._choiceField.addEventListener("click", this._RadioClickHandler.bind(this), !1), this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this), !1);
    }, e.prototype._RadioClickHandler = function (e) {
      e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this._dispatchSelectEvent();
    }, e.prototype._dispatchSelectEvent = function () {
      var e = { bubbles: !0, cancelable: !0, detail: { name: this._choiceField.getAttribute("name"), item: this } };this._choiceField.dispatchEvent(new CustomEvent("msChoicefield", e));
    }, e.prototype._RadioKeydownHandler = function (e) {
      32 === e.keyCode && (e.stopPropagation(), e.preventDefault(), this._choiceField.classList.contains("is-disabled") || this._dispatchSelectEvent());
    }, e.prototype._FocusHandler = function () {
      this._choiceField.classList.add("in-focus");
    }, e.prototype._BlurHandler = function () {
      this._choiceField.classList.remove("in-focus");
    }, e;
  }();e.RadioButton = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function t(e) {
      this._choiceFieldGroup = e, this._choiceFieldComponents = [], this._initalSetup(), this._addListeners();
    }return t.prototype.removeListeners = function () {
      this._choiceFieldGroup.removeEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this));
    }, t.prototype._initalSetup = function () {
      for (var t = this._choiceFieldGroup.querySelectorAll(".ms-RadioButton"), i = 0; i < t.length; i++) {
        this._choiceFieldComponents[i] = new e.RadioButton(t[i]);
      }
    }, t.prototype._addListeners = function () {
      document.addEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this), !1);
    }, t.prototype._ChoiceFieldHandler = function (e) {
      var t = e.detail.name,
          i = e.detail.item;if (this._choiceFieldGroup.id === t) {
        for (var n = 0; n < this._choiceFieldComponents.length; n++) {
          this._choiceFieldComponents[n].unCheck();
        }i.check();
      }
    }, t;
  }();e.ChoiceFieldGroup = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = ".ms-SearchBox-field",
      i = ".ms-SearchBox-clear",
      n = ".ms-SearchBox-exit",
      s = "has-text",
      o = "is-active",
      r = "is-animated",
      a = function () {
    function e(e) {
      var t = this;this._container = e, this._saveDOMRefs(this._container), this._boundExpandSearchHandler = this._expandSearchHandler.bind(this), this._boundEnableClose = this._enableClose.bind(this), this._boundCollapseSearchBox = this._collapseSearchBox.bind(this), this._boundClearSearchBox = this._clearSearchBox.bind(this), this._boundHandleBlur = this._handleBlur.bind(this), this._boundExitSearchBox = this._exitSearchBox.bind(this), this._setHasText(), this._setFocusAction(this._container), this._setClearButtonAction(), this._setBlurAction(), this._clearOnly = !1, setTimeout(function () {
        t._checkState(), t._addAnimation();
      }, 10);
    }return e.prototype.setCollapsedListeners = function () {
      this._disposeListeners(), this._searchBox.addEventListener("click", this._boundExpandSearchHandler, !1), this._searchBoxField.addEventListener("focus", this._boundExpandSearchHandler, !0);
    }, e.prototype.getInputField = function () {
      return this._searchBoxField;
    }, e.prototype._saveDOMRefs = function (e) {
      this._searchBox = e, this._searchBoxField = this._searchBox.querySelector(t), this._searchBoxClearButton = this._searchBox.querySelector(i), this._searchBoxExitButton = this._searchBox.querySelector(n);
    }, e.prototype._disposeListeners = function () {
      this._searchBox.removeEventListener("click", this._boundExpandSearchHandler), this._searchBoxField.removeEventListener("focus", this._boundExpandSearchHandler);
    }, e.prototype._exitSearchBox = function (e) {
      e.stopPropagation(), e.target.blur(), this._clearSearchBox(), this._collapseSearchBox(), this._searchBox.removeEventListener("keyup", this._boundEnableClose), this.setCollapsedListeners();
    }, e.prototype._collapseSearchBox = function () {
      this._searchBox.classList.remove("is-active");var e = document.createEvent("Event");e.initEvent("searchCollapse", !0, !0), this._searchBoxField.dispatchEvent(e);
    }, e.prototype._expandSearchHandler = function () {
      this._disposeListeners(), this._searchBox.classList.add("is-active"), this._searchBoxField.focus();
    }, e.prototype._enableClose = function () {
      this._setHasText();
    }, e.prototype._setHasText = function () {
      this._searchBoxField.value.length > 0 ? this._searchBox.classList.add(s) : this._searchBox.classList.remove(s);
    }, e.prototype._setFocusAction = function (e) {
      var t = this;this._searchBoxField.addEventListener("focus", function () {
        t._setHasText(), t._searchBox.addEventListener("keyup", t._boundEnableClose, !1), t._searchBox.classList.add(o), t._searchBox.classList.add(o);
      }, !0);
    }, e.prototype._clearSearchBox = function (e) {
      var t = this;this._clearOnly = !0, this._searchBoxField.value = "", this._setHasText(), setTimeout(function () {
        t._clearOnly = !1;
      }, 10);
    }, e.prototype._setClearButtonAction = function () {
      var e = this;this._searchBoxExitButton && this._searchBoxExitButton.addEventListener("click", this._boundExitSearchBox, !1), this._searchBoxClearButton.addEventListener("mousedown", this._boundClearSearchBox, !1), this._searchBoxClearButton.addEventListener("keydown", function (t) {
        var i = t.keyCode;13 === i && e._clearSearchBox(t);
      }, !1);
    }, e.prototype._handleBlur = function (e) {
      var t = this;this._clearOnly ? this._searchBoxField.focus() : (this._searchBox.removeEventListener("keyup", this._boundEnableClose), setTimeout(function () {
        t._searchBox.contains(document.activeElement) || (t._clearSearchBox(), t._collapseSearchBox(), t.setCollapsedListeners());
      }, 10)), this._clearOnly = !1;
    }, e.prototype._setBlurAction = function () {
      this._searchBoxField.addEventListener("blur", this._boundHandleBlur, !0), this._searchBoxClearButton.addEventListener("blur", this._boundHandleBlur, !0);
    }, e.prototype._checkState = function () {
      this._searchBox.classList.contains("is-collapsed") && this.setCollapsedListeners();
    }, e.prototype._addAnimation = function () {
      this._container.classList.add(r);
    }, e;
  }();e.SearchBox = a;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = ".ms-ContextualMenu",
      i = ".ms-CommandButton-splitIcon",
      n = ".ms-CommandButton-button",
      s = "bottom",
      o = function () {
    function o(e, s) {
      this._container = e, this._command = this._container, this._commandButton = this._command.querySelector(n), this._splitButton = this._command.querySelector(i), s ? this._contextualMenu = s : this._contextualMenu = this._container.querySelector(t), this._checkForMenu();
    }return o.prototype._createModalHostView = function () {
      this._modalHostView = new e.ContextualHost(this._contextualMenu, s, this._command, !1);
    }, o.prototype._setClick = function () {
      this._splitButton ? this._splitButton.addEventListener("click", this._createModalHostView.bind(this), !1) : this._commandButton.addEventListener("click", this._createModalHostView.bind(this), !1);
    }, o.prototype._checkForMenu = function () {
      this._contextualMenu && this._setClick();
    }, o;
  }();e.CommandButton = o;
}(fabric || (fabric = {}));var fabric;!function (e) {
  "use strict";
  var t = ".ms-ContextualMenu",
      i = ".ms-ContextualMenu-item",
      n = ".ms-ContextualMenu-link",
      s = ".ms-SearchBox",
      o = ".ms-CommandBar-mainArea",
      r = ".ms-CommandBar-sideCommands",
      a = ".ms-CommandBar-overflowButton",
      c = "ms-CommandButton--noLabel",
      l = ".ms-SearchBox-closeField",
      h = ".ms-CommandButton",
      d = ".ms-CommandButton-label",
      p = ".ms-Icon",
      u = 40,
      _ = 30,
      m = function () {
    function m(e) {
      this.responsiveSizes = { "sm-min": 320, "md-min": 480, "lg-min": 640, "xl-min": 1024, "xxl-min": 1366, "xxxl-min": 1920 }, this.visibleCommands = [], this.commandWidths = [], this.overflowCommands = [], this.itemCollection = [], this._sideAreaCollection = [], this.breakpoint = "sm", this._container = e, this.responsiveSizes["sm-max"] = this.responsiveSizes["md-min"] - 1, this.responsiveSizes["md-max"] = this.responsiveSizes["lg-min"] - 1, this.responsiveSizes["lg-max"] = this.responsiveSizes["xl-min"] - 1, this.responsiveSizes["xl-max"] = this.responsiveSizes["xxl-min"] - 1, this.responsiveSizes["xxl-max"] = this.responsiveSizes["xxxl-min"] - 1, this._setElements(), this._setBreakpoint(), this._elements.overflowCommand && this._initOverflow(), this._setUIState();
    }return m.prototype._runsSearchBox = function (e) {
      void 0 === e && (e = "add"), this._changeSearchState("is-collapsed", e);
    }, m.prototype._runOverflow = function () {
      this._elements.overflowCommand && (this._saveCommandWidths(), this._redrawMenu(), this._updateCommands(), this._drawCommands(), this._checkOverflow());
    }, m.prototype._initOverflow = function () {
      this._createContextualRef(), this._createItemCollection(this.itemCollection, o), this._createItemCollection(this._sideAreaCollection, r), this._saveCommandWidths(), this._updateCommands(), this._drawCommands(), this._setWindowEvent(), this._checkOverflow();
    }, m.prototype._hasClass = function (e, t) {
      return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
    }, m.prototype._onSearchExpand = function () {
      "lg" === this.breakpoint && (this._container.classList.add("search-expanded"), this._doResize());
    }, m.prototype._onSearchCollapse = function () {
      "lg" === this.breakpoint && (this._container.classList.remove("search-expanded"), this._doResize());
    }, m.prototype._getScreenSize = function () {
      var e = window,
          t = { x: 0, y: 0 },
          i = document,
          n = i.documentElement,
          s = i.getElementsByTagName("body")[0];return t.x = e.innerWidth || n.clientWidth || s.clientWidth, t.y = e.innerHeight || n.clientHeight || s.clientHeight, t;
    }, m.prototype._setBreakpoint = function () {
      var e = this._getScreenSize().x;switch (!0) {case e <= this.responsiveSizes["sm-max"]:
          this.breakpoint = "sm";break;case e >= this.responsiveSizes["md-min"] && e <= this.responsiveSizes["md-max"]:
          this.breakpoint = "md";break;case e >= this.responsiveSizes["lg-min"] && e <= this.responsiveSizes["lg-max"]:
          this.breakpoint = "lg";break;case e >= this.responsiveSizes["xl-min"] && e <= this.responsiveSizes["xl-max"]:
          this.breakpoint = "xl";break;case e >= this.responsiveSizes["xxl-min"] && e <= this.responsiveSizes["xxl-max"]:
          this.breakpoint = "xxl";break;case e >= this.responsiveSizes["xxxl-min"]:
          this.breakpoint = "xxxl";}
    }, m.prototype._createSearchInstance = function () {
      return !!this._elements.searchBox && new e.SearchBox(this._elements.searchBox);
    }, m.prototype._changeSearchState = function (e, t) {
      if (this._elements.searchBox) switch (t) {case "remove":
          this._elements.searchBox.classList.remove(e);break;case "add":
          this._elements.searchBox.classList.add(e);}
    }, m.prototype._setElements = function () {
      var e = this;this._elements = { mainArea: this._container.querySelector(o) }, this._container.querySelector(r) && (this._elements.sideCommandArea = this._container.querySelector(r)), this._container.querySelector(a) && (this._elements.overflowCommand = this._container.querySelector(a), this._elements.contextMenu = this._container.querySelector(a).querySelector(t)), this._container.querySelector(o + " " + s) && (this._elements.searchBox = this._container.querySelector(o + " " + s), this._elements.searchBoxClose = this._container.querySelector(l), this.searchBoxInstance = this._createSearchInstance(), this.searchBoxInstance.getInputField().addEventListener("focus", function () {
        e._onSearchExpand();
      }, !1), this.searchBoxInstance.getInputField().addEventListener("searchCollapse", function () {
        e._onSearchCollapse();
      }, !1));
    }, m.prototype._createItemCollection = function (t, i) {
      var n,
          s,
          o,
          r,
          l = this._container.querySelectorAll(i + " > " + h + ":not(" + a + ")");this._commandButtonInstance = new e.CommandButton(this._elements.overflowCommand);for (var u = 0; u < l.length; u++) {
        n = l[u], s = n.querySelector(d).textContent;var _ = n.querySelector(p);if (_) {
          o = _.className, r = o.split(" ");for (var m = 0; m < r.length; m++) {
            if (r[m].indexOf(p.replace(".", "") + "--") > -1) {
              _ = r[m];break;
            }
          }
        }t.push({ item: n, label: s, icon: _, isCollapsed: !!n.classList.contains(c), commandButtonRef: new e.CommandButton(n) });
      }
    }, m.prototype._createContextualRef = function () {
      this.contextualItemContainerRef = this._elements.contextMenu.querySelector(i).cloneNode(!0), this.contextualItemLink = this._elements.contextMenu.querySelector(n).cloneNode(!1), this.contextualItemIcon = this._elements.contextMenu.querySelector(".ms-Icon").cloneNode(!1), this._elements.contextMenu.innerHTML = "";
    }, m.prototype._getElementWidth = function (e) {
      var t, i;return null === e.offsetParent && e.setAttribute("style", "position: absolute; opacity: 0; display: block;"), t = e.getBoundingClientRect().width, i = window.getComputedStyle(e), t += parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10), e.setAttribute("style", ""), t;
    }, m.prototype._saveCommandWidths = function () {
      for (var e = 0; e < this.itemCollection.length; e++) {
        var t = this.itemCollection[e].item,
            i = this._getElementWidth(t);this.commandWidths[e] = i;
      }
    }, m.prototype._updateCommands = function () {
      var e = 0,
          t = this._elements.mainArea.getBoundingClientRect().width;this._elements.searchBox && (e = this._getElementWidth(this._elements.searchBox));var i = e + u + _,
          n = t - i;this.visibleCommands = [], this.overflowCommands = [];for (var s = 0, o = 0; o < this.itemCollection.length; o++) {
        s += this.commandWidths[o], s < n ? this.visibleCommands.push(this.itemCollection[o]) : this.overflowCommands.push(this.itemCollection[o]);
      }
    }, m.prototype._drawCommands = function () {
      this._elements.contextMenu.innerHTML = "";for (var e = 0; e < this.overflowCommands.length; e++) {
        this.overflowCommands[e].item.classList.add("is-hidden");var t = this.contextualItemContainerRef.cloneNode(!1),
            i = this.contextualItemLink.cloneNode(!1),
            n = this.overflowCommands[e].icon;if (i.innerText = this.overflowCommands[e].label, t.appendChild(i), n) {
          var s = this.contextualItemIcon.cloneNode(!1);s.className = p.replace(".", "") + " " + n, t.appendChild(s);
        }this._elements.contextMenu.appendChild(t);
      }for (var o = 0; o < this.visibleCommands.length; o++) {
        this.visibleCommands[o].item.classList.remove("is-hidden");
      }
    }, m.prototype._setWindowEvent = function () {
      var e = this;window.addEventListener("resize", function () {
        e._doResize();
      }, !1);
    }, m.prototype._processCollapsedClasses = function (e) {
      for (var t = 0; t < this.itemCollection.length; t++) {
        var i = this.itemCollection[t];i.isCollapsed || ("add" === e ? i.item.classList.add(c) : i.item.classList.remove(c));
      }for (var t = 0; t < this._sideAreaCollection.length; t++) {
        var i = this._sideAreaCollection[t];i.isCollapsed || ("add" === e ? i.item.classList.add(c) : i.item.classList.remove(c));
      }
    }, m.prototype._setUIState = function () {
      switch (this.breakpoint) {case "sm":
          this._runsSearchBox(), this._processCollapsedClasses("add"), this._runOverflow();break;case "md":
          this._runsSearchBox(), this._processCollapsedClasses("add"), this._runOverflow();break;case "lg":
          this._runsSearchBox(), this._processCollapsedClasses("remove"), this._runOverflow();break;case "xl":
          this._runsSearchBox("remove"), this._processCollapsedClasses("remove"), this._runOverflow();break;default:
          this._runsSearchBox("remove"), this._processCollapsedClasses("remove"), this._runOverflow();}
    }, m.prototype._checkOverflow = function () {
      this.overflowCommands.length > 0 ? this._elements.overflowCommand.classList.remove("is-hidden") : (this._elements.overflowCommand.classList.add("is-hidden"), this.activeCommand === this._elements.overflowCommand && this._elements.contextMenu.classList.remove("is-open"));
    }, m.prototype._redrawMenu = function () {
      var e;this._hasClass(this._elements.contextMenu, "is-open") && (e = this.activeCommand.getBoundingClientRect().left, this._drawOverflowMenu(e));
    }, m.prototype._drawOverflowMenu = function (e) {
      this._elements.contextMenu.setAttribute("style", "left: " + e + "px; transform: translateX(-50%)");
    }, m.prototype._doResize = function () {
      this._setBreakpoint(), this._setUIState();
    }, m;
  }();e.CommandBar = m;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "bottom",
      i = "right",
      n = function () {
    function n(e, i, n) {
      this._container = e, this._hostTarget = i, this._position = n ? n : t, this._isOpen = !1, this._setOpener(i), this._init();
    }return n.prototype.getHost = function () {
      return this._host;
    }, n.prototype._init = function () {
      this._container.addEventListener("click", this._onContextualMenuClick.bind(this), !0), document.addEventListener("click", this._onDocumentClick.bind(this), !1);
    }, n.prototype._onDocumentClick = function (e) {
      if (e.target instanceof HTMLElement) {
        var t = e.target,
            i = t.classList;this._hostTarget.contains(t) || i.contains("ms-ContextualMenu-link") || (this._isOpen = !1);
      }
    }, n.prototype._onContextualMenuClick = function (e) {
      var t = e.target,
          i = t.classList;i.contains("ms-ContextualMenu-link") && !i.contains("is-disabled") && (this._container.classList.contains("ms-ContextualMenu--multiselect") ? this._multiSelect(t) : (this._singleSelect(t), t.parentElement.classList.contains("ms-ContextualMenu-item--hasMenu") || (this._host.disposeModal(), this._isOpen = !1)));
    }, n.prototype._multiSelect = function (e) {
      e.classList.contains("is-selected") ? e.classList.remove("is-selected") : e.classList.add("is-selected");
    }, n.prototype._singleSelect = function (e) {
      for (var t = this._container.querySelectorAll(".is-selected"), i = t.length; i--;) {
        t[i].classList.remove("is-selected");
      }e.classList.add("is-selected");
    }, n.prototype._toggleMenu = function (e) {
      this._isOpen ? this._host.disposeModal() : this._openContextMenu(e), this._isOpen = !this._isOpen;
    }, n.prototype._setOpener = function (e) {
      var t = this;e.addEventListener("click", function (e) {
        e.preventDefault(), t._toggleMenu(e);
      });
    }, n.prototype._openContextMenu = function (e) {
      this._createModalHostView(this._container, this._position, this._hostTarget), this._checkForSubmenus(this._container);
    }, n.prototype._checkForSubmenus = function (t) {
      var n = this,
          s = t.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu"),
          o = s.length;if (s.length) for (var r = function r() {
        var t = s[o].querySelector(".ms-ContextualMenu-link"),
            r = s[o].querySelector(".ms-ContextualMenu");if (r) {
          var a = new e.ContextualMenu(r, t, i);r.addEventListener("hostAdded", function () {
            n._host.setChildren(a.getHost());
          });
        }
      }; o--;) {
        r();
      }
    }, n.prototype._createModalHostView = function (t, i, n) {
      t.classList.remove("is-hidden"), this._host = new e.ContextualHost(t, i, n, !1);var s = document.createEvent("Event");s.initEvent("hostAdded", !0, !0), t.dispatchEvent(s);
    }, n;
  }();e.ContextualMenu = n;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e, t) {
      var i = this,
          n = $(e),
          s = n.find(".ms-TextField-field").pickadate($.extend({ weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"], clear: "", close: "", today: "", onStart: function onStart() {
          i.initCustomView(n);
        }, klass: { input: "ms-DatePicker-input", active: "ms-DatePicker-input--active", picker: "ms-DatePicker-picker", opened: "ms-DatePicker-picker--opened", focused: "ms-DatePicker-picker--focused", holder: "ms-DatePicker-holder", frame: "ms-DatePicker-frame", wrap: "ms-DatePicker-wrap", box: "ms-DatePicker-dayPicker", header: "ms-DatePicker-header", month: "ms-DatePicker-month", year: "ms-DatePicker-year", table: "ms-DatePicker-table", weekdays: "ms-DatePicker-weekday", day: "ms-DatePicker-day", disabled: "ms-DatePicker-day--disabled", selected: "ms-DatePicker-day--selected", highlighted: "ms-DatePicker-day--highlighted", now: "ms-DatePicker-day--today", infocus: "ms-DatePicker-day--infocus", outfocus: "ms-DatePicker-day--outfocus" } }, t || {})),
          o = s.pickadate("picker");this.picker = o, o.on({ render: function render() {
          i.updateCustomView(n);
        } });
    }return e.prototype.initCustomView = function (e) {
      var t = this,
          i = e.find(".ms-DatePicker-monthComponents"),
          n = e.find(".ms-DatePicker-goToday"),
          s = e.find(".ms-DatePicker-monthPicker"),
          o = e.find(".ms-DatePicker-yearPicker"),
          r = e.find(".ms-DatePicker-wrap"),
          a = e.find(".ms-TextField-field").pickadate("picker");i.appendTo(r), n.appendTo(r), s.appendTo(r), o.appendTo(r), this.updateCustomView(e), a.on("open", function (e) {
        var t = document.createEvent("MouseEvents");t.initEvent("click", !0, !0), document.dispatchEvent(t);
      }), i.on("click", ".js-prevMonth", function (e) {
        e.preventDefault();var i = a.get("highlight").month - 1;t.changeHighlightedDate([null, i, null]);
      }), i.on("click", ".js-nextMonth", function (e) {
        e.preventDefault();var i = a.get("highlight").month + 1;t.changeHighlightedDate([null, i, null]);
      }), s.on("click", ".js-prevYear", function (e) {
        e.preventDefault();var i = a.get("highlight").year - 1;t.changeHighlightedDate([i, null, null]);
      }), s.on("click", ".js-nextYear", function (e) {
        e.preventDefault();var i = a.get("highlight").year + 1;t.changeHighlightedDate([i, null, null]);
      }), o.on("click", ".js-prevDecade", function (e) {
        e.preventDefault();var i = a.get("highlight").year - 10;t.changeHighlightedDate([i, null, null]);
      }), o.on("click", ".js-nextDecade", function (e) {
        e.preventDefault();var i = a.get("highlight").year + 10;t.changeHighlightedDate([i, null, null]);
      }), n.click(function (t) {
        t.preventDefault();var i = new Date();a.set("select", [i.getFullYear(), i.getMonth(), i.getDate()]), e.removeClass("is-pickingMonths").removeClass("is-pickingYears");
      }), s.on("click", ".js-changeDate", function (i) {
        i.preventDefault();var n = $(i.target),
            s = n.attr("data-year"),
            o = n.attr("data-month"),
            r = n.attr("data-day");t.changeHighlightedDate([s, o, r]), e.hasClass("is-pickingMonths") && e.removeClass("is-pickingMonths");
      }), o.on("click", ".js-changeDate", function (i) {
        i.preventDefault();var n = $(i.target),
            s = n.attr("data-year"),
            o = n.attr("data-month"),
            r = n.attr("data-day");t.changeHighlightedDate([s, o, r]), e.hasClass("is-pickingYears") && e.removeClass("is-pickingYears");
      }), s.on("click", ".js-showDayPicker", function () {
        e.removeClass("is-pickingMonths"), e.removeClass("is-pickingYears");
      }), i.on("click", ".js-showMonthPicker", function () {
        e.toggleClass("is-pickingMonths");
      }), s.on("click", ".js-showYearPicker", function () {
        e.toggleClass("is-pickingYears");
      });
    }, e.prototype.changeHighlightedDate = function (e) {
      var t = this.setDateAttributes(e);this.picker.set("highlight", t);
    }, e.prototype.updateCustomView = function (e) {
      var t = e.find(".ms-DatePicker-monthPicker"),
          i = e.find(".ms-DatePicker-yearPicker"),
          n = e.find(".ms-TextField-field").pickadate("picker");t.find(".ms-DatePicker-currentYear").text(n.get("view").year), t.find(".ms-DatePicker-monthOption").removeClass("is-highlighted"), t.find(".ms-DatePicker-monthOption[data-month='" + n.get("highlight").month + "']").addClass("is-highlighted"), i.find(".ms-DatePicker-currentDecade").remove(), i.find(".ms-DatePicker-optionGrid").remove();var s = n.get("highlight").year - 11,
          o = s + " - " + (s + 11),
          r = "<div class='ms-DatePicker-currentDecade'>" + o + "</div>";r += "<div class='ms-DatePicker-optionGrid'>";for (var a = s; a < s + 12; a++) {
        r += "<span class='ms-DatePicker-yearOption js-changeDate' data-year='" + a + "'>" + a + "</span>";
      }r += "</div>", i.append(r), i.find(".ms-DatePicker-yearOption").removeClass("is-highlighted"), i.find(".ms-DatePicker-yearOption[data-year='" + n.get("highlight").year + "']").addClass("is-highlighted");
    }, e.prototype.setDateAttributes = function (e) {
      var t = e[0],
          i = e[1],
          n = e[2];return "undefined" != typeof t && null !== t || (t = this.picker.get("highlight").year), "undefined" != typeof i && null !== i || (i = this.picker.get("highlight").month), "undefined" != typeof n && null !== n || (n = this.picker.get("highlight").date), [t, i, n];
    }, e;
  }();e.DatePicker = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e) {
      if (e) this.overlayElement = e;else {
        var t = document.createElement("div");t.setAttribute("class", "ms-Overlay"), this.overlayElement = t;
      }this.overlayElement.addEventListener("click", this.hide.bind(this), !1);
    }return e.prototype.remove = function () {
      this.overlayElement.parentElement.removeChild(this.overlayElement);
    }, e.prototype.show = function () {
      this.overlayElement.classList.add("is-visible"), document.body.classList.add("ms-u-overflowHidden");
    }, e.prototype.hide = function () {
      this.overlayElement.classList.remove("is-visible"), document.body.classList.remove("ms-u-overflowHidden");
    }, e;
  }();e.Overlay = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function t(e) {
      this._dialog = e, this._closeButtonElement = this._dialog.querySelector(".ms-Dialog-buttonClose"), this._actionButtonElements = this._dialog.querySelectorAll(".ms-Dialog-action"), this._closeButtonElement && this._closeButtonElement.addEventListener("click", this.close.bind(this), !1);for (var t = 0; t < this._actionButtonElements.length; t++) {
        this._actionButtonElements[t].addEventListener("click", this.close.bind(this), !1);
      }
    }return t.prototype.close = function () {
      this._overlay.remove(), this._dialog.classList.remove("is-open"), document.body.classList.remove("ms-u-overflowHidden"), this._overlay.overlayElement.removeEventListener("click", this.close.bind(this));
    }, t.prototype.open = function () {
      this._dialog.classList.add("is-open"), this._overlay = new e.Overlay(), this._dialog.classList.contains("ms-Dialog--blocking") || (this._overlay.overlayElement.addEventListener("click", this.close.bind(this), !1), this._overlay.show(), document.body.classList.add("ms-u-overflowHidden")), this._dialog.parentElement.appendChild(this._overlay.overlayElement);
    }, t;
  }();e.Dialog = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e() {}return e;
  }();e.DialogHost = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "ms-PanelHost",
      i = function () {
    function i(e, t) {
      this._layer = e, this._callBack = t, this._createElements(), this._renderElements();
    }return i.prototype.dismiss = function () {
      this.overlay.hide(), document.body.removeChild(this.panelHost);
    }, i.prototype.update = function (e, t) {
      this.panelHost.replaceChild(e, this._layer), t && t();
    }, i.prototype._renderElements = function () {
      document.body.appendChild(this.panelHost), this._callBack && this._callBack(this._layer);
    }, i.prototype._createElements = function () {
      this.panelHost = document.createElement("div"), this.panelHost.classList.add(t), this.panelHost.appendChild(this._layer), this.overlay = new e.Overlay(this._overlayContainer), this.overlay.show(), this.panelHost.appendChild(this.overlay.overlayElement);
    }, i;
  }();e.PanelHost = i;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "animate-in",
      i = "animate-out",
      n = 400,
      s = function () {
    function s(t, i, n) {
      this._panel = t, this._direction = i || "right", this._animateOverlay = n || !0, this.panelHost = new e.PanelHost(this._panel, this._animateInPanel), this._closeButton = this._panel.querySelector(".ms-PanelAction-close"), this._clickHandler = this.dismiss.bind(this, null), this._setEvents(), document.body.setAttribute("style", "height: 100%; overflow: hidden;");
    }return s.prototype.dismiss = function (e) {
      var t = this;this._panel.classList.add(i), setTimeout(function () {
        t._panel.classList.remove(i), t._panel.classList.remove("is-open"), t.panelHost.dismiss(), e && e(), document.body.setAttribute("style", "");
      }, n), null !== this._closeButton && this._closeButton.removeEventListener("click", this._clickHandler);
    }, s.prototype._setEvents = function () {
      this.panelHost.overlay.overlayElement.addEventListener("click", this._clickHandler), null !== this._closeButton && this._closeButton.addEventListener("click", this._clickHandler);
    }, s.prototype._animateInPanel = function (e) {
      e.classList.add(t), e.classList.add("is-open"), setTimeout(function () {
        e.classList.remove(t);
      }, n);
    }, s;
  }();e.Panel = s;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "ms-Dropdown",
      i = "ms-Dropdown-title",
      n = "ms-Dropdown-truncator",
      s = "ms-Dropdown-items",
      o = "ms-Dropdown-item",
      r = ".ms-Dropdown-select",
      a = "ms-Panel",
      c = "is-open",
      l = "is-disabled",
      h = "is-selected",
      d = "animate-in",
      p = 479,
      u = function () {
    function u(e) {
      this._container = e, this._dropdownLabelHelper = document.createElement("span"), this._dropdownLabelHelper.classList.add(n), this._dropdownLabelHelper.classList.add(i), this._newDropdownLabel = document.createElement("span"), this._newDropdownLabel.classList.add(i), this._newDropdown = document.createElement("ul"), this._newDropdown.classList.add(s), this._dropdownItems = [], this._originalDropdown = e.querySelector(r);var t = this._originalDropdown.querySelectorAll("option");this._onCloseDropdown = this._onCloseDropdown.bind(this), this._onItemSelection = this._onItemSelection.bind(this), this._onOpenDropdown = this._onOpenDropdown.bind(this);for (var a = 0; a < t.length; ++a) {
        var c = t[a];c.selected && (this._newDropdownLabel.innerHTML = c.text);var d = document.createElement("li");d.classList.add(o), c.disabled && d.classList.add(l), c.selected && d.classList.add(h), d.innerHTML = c.text, d.addEventListener("click", this._onItemSelection), this._newDropdown.appendChild(d), this._dropdownItems.push({ oldOption: c, newItem: d });
      }e.appendChild(this._newDropdownLabel), e.appendChild(this._newDropdown), e.appendChild(this._dropdownLabelHelper), this._newDropdownLabel.addEventListener("click", this._onOpenDropdown), this._checkTruncation(), this._setWindowEvent();
    }return u.prototype._setWindowEvent = function () {
      var e = this;window.addEventListener("resize", function () {
        e._doResize(), e._checkTruncation();
      }, !1);
    }, u.prototype._checkTruncation = function () {
      var e = this._newDropdown.querySelector("." + h),
          t = e ? e.textContent : this._newDropdown.querySelectorAll("." + o)[0].textContent;if (this._dropdownLabelHelper.textContent = t, this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight) {
        var i = 0,
            n = "...",
            s = void 0;do {
          i--, s = t.slice(0, i), this._dropdownLabelHelper.textContent = s + n;
        } while (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight);
      }this._newDropdownLabel.textContent = this._dropdownLabelHelper.textContent;
    }, u.prototype._getScreenSize = function () {
      var e = window,
          t = { x: 0, y: 0 },
          i = document,
          n = i.documentElement,
          s = i.getElementsByTagName("body")[0];return t.x = e.innerWidth || n.clientWidth || s.clientWidth, t.y = e.innerHeight || n.clientHeight || s.clientHeight, t;
    }, u.prototype._doResize = function () {
      var e = this._container.classList.contains(c);if (e) {
        var t = this._getScreenSize().x;t <= p ? this._openDropdownAsPanel() : this._removeDropdownAsPanel();
      }
    }, u.prototype._openDropdownAsPanel = function () {
      void 0 === this._panel && (this._panelContainer = document.createElement("div"), this._panelContainer.classList.add(a), this._panelContainer.classList.add(t), this._panelContainer.classList.add(c), this._panelContainer.classList.add(d), this._panelContainer.appendChild(this._newDropdown), this._panel = new e.Panel(this._panelContainer));
    }, u.prototype._removeDropdownAsPanel = function (e) {
      var t = this;void 0 !== this._panel && (e && e.target === this._panel.panelHost.overlay.overlayElement ? this._container.appendChild(this._newDropdown) : this._panel.dismiss(function () {
        t._container.appendChild(t._newDropdown);
      }), this._panel = void 0);
    }, u.prototype._onOpenDropdown = function (e) {
      var t = this._container.classList.contains(l),
          i = this._container.classList.contains(c);if (!t && !i) {
        e.stopPropagation(), this._closeOtherDropdowns(), this._container.classList.add(c), document.addEventListener("click", this._onCloseDropdown);var n = this._getScreenSize().x;n <= p && this._openDropdownAsPanel();
      }
    }, u.prototype._closeOtherDropdowns = function () {
      for (var e = document.querySelectorAll("." + t + "." + c), i = 0; i < e.length; i++) {
        e[i].classList.remove(c);
      }
    }, u.prototype._onCloseDropdown = function (e) {
      this._removeDropdownAsPanel(e), this._container.classList.remove(c), document.removeEventListener("click", this._onCloseDropdown);
    }, u.prototype._onItemSelection = function (e) {
      var t = e.target,
          i = this._container.classList.contains(l),
          n = t.classList.contains(l);if (!i && !n) {
        for (var s = 0; s < this._dropdownItems.length; ++s) {
          this._dropdownItems[s].newItem === t ? (this._dropdownItems[s].newItem.classList.add(h), this._dropdownItems[s].oldOption.selected = !0) : (this._dropdownItems[s].newItem.classList.remove(h), this._dropdownItems[s].oldOption.selected = !1);
        }this._newDropdownLabel.innerHTML = t.textContent, this._checkTruncation();var o = document.createEvent("HTMLEvents");o.initEvent("change", !1, !0), this._originalDropdown.dispatchEvent(o);
      }
    }, u;
  }();e.Dropdown = u;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function t(e) {
      this._container = e;var t = this._container.querySelector(".ms-PersonaCard-action.is-active"),
          i = t.getAttribute("data-action-id");this._actions = this._container.querySelector(".ms-PersonaCard-actions"), this._expander = this._container.querySelector(".ms-PersonaCard-detailExpander"), this._actionDetailBox = this._container.querySelector(".ms-PersonaCard-actionDetailBox"), this._setDetail(i), this._boundOnActionClick = this._onActionClick.bind(this), this._boundOnExpanderClick = this._onExpanderClick.bind(this), this._boundOnTab = this._onTab.bind(this), this._addListeners();
    }return t.prototype.removeListeners = function () {
      this._actions.removeEventListener("click", this._boundOnActionClick), this._expander.removeEventListener("click", this._boundOnExpanderClick), this._container.removeEventListener("keydown", this._boundOnTab);
    }, t.prototype._addListeners = function () {
      this._actions.addEventListener("click", this._boundOnActionClick, !1), this._expander.addEventListener("click", this._boundOnExpanderClick, !1), this._container.addEventListener("keydown", this._boundOnTab, !1);
    }, t.prototype._onTab = function (e) {
      var t = e.target;9 === e.keyCode && t.classList.contains("ms-PersonaCard-action") && this._onActionClick(e);
    }, t.prototype._onExpanderClick = function (e) {
      var t = e.target.parentElement;t.classList.contains("is-collapsed") ? t.classList.remove("is-collapsed") : t.classList.add("is-collapsed");var i = t.clientHeight;this._animateDetail(i);
    }, t.prototype._onActionClick = function (e) {
      var t = e.target,
          i = t.getAttribute("data-action-id");i && t.className.indexOf("is-active") === -1 && (this._setAction(t), this._setDetail(i));
    }, t.prototype._setAction = function (e) {
      var t = this._container.querySelector(".ms-PersonaCard-action.is-active");t.classList.remove("is-active"), e.classList.add("is-active");
    }, t.prototype._setDetail = function (e) {
      var t = ".ms-PersonaCard-details[data-detail-id='" + e + "']",
          i = this._container.querySelector(".ms-PersonaCard-details.is-active"),
          n = this._container.querySelector(t);i && i.classList.remove("is-active"), n.classList.add("is-active");var s = n.clientHeight;this._animateDetail(s);
    }, t.prototype._animateDetail = function (t) {
      var i = this;this._actionDetailBox.style.overflowY = "hidden", e.Animate.transition(this._actionDetailBox, { height: t, duration: .25, ease: e.Ease.SINE_EASE_OUT, onEnd: function onEnd() {
          i._actionDetailBox.style.overflowY = "auto";
        } });
    }, t;
  }();e.PersonaCard = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "top",
      i = function () {
    function i(e) {
      this._persona = e, this._personaCard = this._persona.querySelector(".ms-PersonaCard"), this._personaCard && (this._assignEvents(), this._personaCard.setAttribute("style", "display: none;"), this._createPersonaCard());
    }return i.prototype._createPersonaCard = function () {
      this._personaCardInstance = new e.PersonaCard(this._personaCard);
    }, i.prototype._createContextualHostInstance = function () {
      this._personaCard.setAttribute("style", "display: block;"), this._contextualHostInstance = new e.ContextualHost(this._personaCard, t, this._persona);
    }, i.prototype._personaEventHandler = function () {
      this._createContextualHostInstance();
    }, i.prototype._assignEvents = function () {
      var e = this;this._persona.addEventListener("click", this._personaEventHandler.bind(this), !1), this._persona.addEventListener("keyup", function (t) {
        return 32 === t.keyCode ? e._personaEventHandler() : null;
      }, !1);
    }, i;
  }();e.Persona = i;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = ".ms-Persona--facePile",
      i = ".ms-Persona-initials",
      n = ".ms-Persona-image",
      s = ".ms-Persona-primaryText",
      o = ".ms-Persona-secondaryText",
      r = function () {
    function r(e) {
      this._personaCollection = [], this._facePile = e, this._createPersonaCollection();
    }return r.prototype._createPersonaCollection = function () {
      for (var r = document.querySelectorAll(t), a = 0; a < r.length; a++) {
        var c = r[a];this._personaCollection.push({ item: c, initials: c.querySelector(i).textContent, image: c.querySelector(n) ? c.querySelector(n).getAttribute("src") : null, primaryText: c.querySelector(s) ? c.querySelector(s).textContent : "", secondaryText: c.querySelector(o) ? c.querySelector(o).textContent : "", personaInstance: new e.Persona(c) });
      }
    }, r;
  }();e.FacePile = r;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e) {
      this._container = e, this._toggleElement = this._container.querySelector(".ms-ListItem-selectionTarget"), this._addListeners();
    }return e.prototype.removeListeners = function () {
      this._toggleElement.removeEventListener("click", this._toggleHandler.bind(this));
    }, e.prototype._addListeners = function () {
      this._toggleElement.addEventListener("click", this._toggleHandler.bind(this), !1);
    }, e.prototype._toggleHandler = function () {
      this._container.classList.toggle("is-selected");
    }, e;
  }();e.ListItem = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function t(t) {
      this._container = t, this._listItemComponents = [];for (var i = this._container.querySelectorAll(".ms-ListItem"), n = 0; n < i.length; n++) {
        this._listItemComponents[n] = new e.ListItem(i[n]);
      }
    }return t;
  }();e.List = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  "use strict";
  var t = function () {
    function e(e) {
      this._textContainerMaxWidth = 700, this._bufferElementsWidth = 88, this._bufferElementsWidthSmall = 35, this.SMALL_BREAK_POINT = 480, this.container = e, this.init();
    }return e.prototype.init = function () {
      this._cacheDOM(), this._setListeners(), this._clientWidth = this._errorBanner.offsetWidth, this._initTextWidth = this._clipper.offsetWidth, this._onResize();
    }, e.prototype.show = function () {
      this._errorBanner.className = "ms-MessageBanner";
    }, e.prototype.showBanner = function () {
      this.show();
    }, e.prototype.hide = function () {
      this._errorBanner.className.indexOf("hide") === -1 && (this._errorBanner.className += " hide", setTimeout(this._hideMessageBanner.bind(this), 500));
    }, e.prototype._hideMessageBanner = function () {
      this._errorBanner.className = "ms-MessageBanner is-hidden";
    }, e.prototype._onResize = function () {
      this._clientWidth = this._errorBanner.offsetWidth, window.innerWidth >= this.SMALL_BREAK_POINT ? this._resizeRegular() : this._resizeSmall();
    }, e.prototype._resizeRegular = function () {
      this._clientWidth - this._bufferSize > this._initTextWidth && this._initTextWidth < this._textContainerMaxWidth ? (this._textWidth = "auto", this._chevronButton.className = "ms-MessageBanner-expand", this._collapse()) : (this._textWidth = Math.min(this._clientWidth - this._bufferSize, this._textContainerMaxWidth) + "px", this._chevronButton.className.indexOf("is-visible") === -1 && (this._chevronButton.className += " is-visible")), this._clipper.style.width = this._textWidth;
    }, e.prototype._resizeSmall = function () {
      this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) > this._initTextWidth ? (this._textWidth = "auto", this._collapse()) : this._textWidth = this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) + "px", this._clipper.style.width = this._textWidth;
    }, e.prototype._cacheDOM = function () {
      this._errorBanner = this.container, this._clipper = this.container.querySelector(".ms-MessageBanner-clipper"), this._chevronButton = this.container.querySelector(".ms-MessageBanner-expand"), this._actionButton = this.container.querySelector(".ms-MessageBanner-action"), this._bufferSize = this._actionButton.offsetWidth + this._bufferElementsWidth, this._closeButton = this.container.querySelector(".ms-MessageBanner-close");
    }, e.prototype._expand = function () {
      var e = this._chevronButton.querySelector(".ms-Icon");this._errorBanner.className += " is-expanded", e.className = "ms-Icon ms-Icon--DoubleChevronUp";
    }, e.prototype._collapse = function () {
      var e = this._chevronButton.querySelector(".ms-Icon");this._errorBanner.className = "ms-MessageBanner", e.className = "ms-Icon ms-Icon--DoubleChevronDown";
    }, e.prototype._toggleExpansion = function () {
      this._errorBanner.className.indexOf("is-expanded") > -1 ? this._collapse() : this._expand();
    }, e.prototype._setListeners = function () {
      window.addEventListener("resize", this._onResize.bind(this), !1), this._chevronButton.addEventListener("click", this._toggleExpansion.bind(this), !1), this._closeButton.addEventListener("click", this.hide.bind(this), !1);
    }, e;
  }();e.MessageBanner = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = "bottom",
      i = "ms-Persona--token",
      n = function () {
    function n(e) {
      this._container = e, this._peoplePickerMenu = this._container.querySelector(".ms-PeoplePicker-results"), this._peoplePickerSearch = this._container.querySelector(".ms-TextField-field"), this._peoplePickerSearchBox = this._container.querySelector(".ms-PeoplePicker-searchBox"), this._selectedPeople = this._container.querySelector(".ms-PeoplePicker-selectedPeople"), this._assignClicks(), this._selectedPeople && (this._assignRemoveHandler(), this._selectedCount = this._container.querySelector(".ms-PeoplePicker-selectedCount"), this._selectedPlural = this._container.querySelector(".ms-PeoplePicker-selectedCountPlural")), this._peoplePickerMenu && this._peoplePickerMenu.setAttribute("style", "display: none;");
    }return n.prototype._createModalHost = function (i) {
      i.stopPropagation(), this._peoplePickerMenu.setAttribute("style", "display: block;"), this._contextualHostView = new e.ContextualHost(this._peoplePickerMenu, t, this._peoplePickerSearchBox, !1, [""], !0, this._contextHostCallBack.bind(this)), this._peoplePickerSearchBox.classList.add("is-active"), this._isContextualMenuOpen = !0;
    }, n.prototype._clickHandler = function (e) {
      this._createModalHost(e);var t = this._peoplePickerMenu.querySelector(".ms-PeoplePicker-result"),
          i = t.parentNode,
          n = i.cloneNode(!0);i.parentNode.replaceChild(n, i), this._peoplePickerResults = this._peoplePickerMenu.querySelectorAll(".ms-PeoplePicker-result");for (var s = 0; s < this._peoplePickerResults.length; s++) {
        var o = this._peoplePickerResults[s].querySelector(".ms-Persona"),
            r = this._peoplePickerResults[s].querySelector(".ms-PeoplePicker-resultAction");o.addEventListener("click", this._selectResult.bind(this), !0), r.addEventListener("click", this._removeItem.bind(this), !0);
      }
    }, n.prototype._selectResult = function (e) {
      e.stopPropagation();var t = this._findElement(e.target, "ms-Persona"),
          i = t.cloneNode(!0);this._container.classList.contains("ms-PeoplePicker--facePile") ? this._addResultToMembers(i) : this._tokenizeResult(i), this._updateCount(), this._contextualHostView.disposeModal();
    }, n.prototype._findElement = function (e, t) {
      for (var i = e.parentNode; !i.classList.contains(t);) {
        i = i.parentNode;
      }return i;
    }, n.prototype._addRemoveBtn = function (e, t) {
      var i,
          n = document.createElement("i");t ? (i = document.createElement("div"), i.classList.add("ms-Persona-actionIcon"), i.addEventListener("click", this._removeToken.bind(this), !0)) : (i = document.createElement("button"), i.classList.add("ms-PeoplePicker-resultAction"), i.addEventListener("click", this._removeResult.bind(this), !0)), n.classList.add("ms-Icon", "ms-Icon--Cancel"), i.appendChild(n), e.appendChild(i);
    }, n.prototype._removeToken = function (e) {
      var t = this._findElement(e.target, "ms-Persona");t.remove();
    }, n.prototype._removeResult = function (e) {
      var t = this._findElement(e.target, "ms-PeoplePicker-selectedPerson");t.remove(), this._updateCount();
    }, n.prototype._removeItem = function (e) {
      var t = this._findElement(e.target, "ms-PeoplePicker-result");t.remove();
    }, n.prototype._updateCount = function () {
      if (this._selectedPeople) {
        var e = this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson").length;this._selectedCount.textContent = e.toString(), this._selectedPlural.style.display = 1 === e ? "none" : "inline";
      }
    }, n.prototype._tokenizeResult = function (e) {
      var t = this._container.querySelector(".ms-PeoplePicker-searchBox"),
          n = t.querySelector(".ms-TextField");e.classList.add(i, "ms-PeoplePicker-persona"), this._addRemoveBtn(e, !0), e.classList.contains("ms-Persona--sm") && (e.classList.remove("ms-Persona--sm"), e.classList.add("ms-Persona--xs")), t.insertBefore(e, n);
    }, n.prototype._addResultToMembers = function (e) {
      var t = this._container.querySelector(".ms-PeoplePicker-selectedPeople"),
          i = t.querySelector(".ms-PeoplePicker-selectedPerson"),
          n = document.createElement("li");n.classList.add("ms-PeoplePicker-selectedPerson"), n.tabIndex = 1, n.appendChild(e), this._addRemoveBtn(n, !1), n.querySelector(".ms-PeoplePicker-resultAction").addEventListener("click", this._removeResult.bind(this), !0), t.insertBefore(n, i);
    }, n.prototype._assignClicks = function () {
      var e = this;this._peoplePickerSearch.addEventListener("click", this._clickHandler.bind(this), !0), this._peoplePickerSearch.addEventListener("keyup", function (t) {
        27 === t.keyCode || e._isContextualMenuOpen || e._clickHandler(t);
      }, !0);
    }, n.prototype._assignRemoveHandler = function () {
      for (var e = this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson"), t = 0; t < e.length; t++) {
        e[t].querySelector(".ms-PeoplePicker-resultAction").addEventListener("click", this._removeResult.bind(this), !0);
      }
    }, n.prototype._contextHostCallBack = function () {
      this._peoplePickerSearchBox.classList.remove("is-active"), this._isContextualMenuOpen = !1;
    }, n;
  }();e.PeoplePicker = n;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e) {
      this._container = e, this._addListeners();var t = this._container.querySelector(".ms-Pivot-content");t.style.display = "block";
    }return e.prototype.removeListeners = function () {
      this._container.removeEventListener("click", this._selectTab.bind(this));
    }, e.prototype._addListeners = function () {
      var e = this;this._container.querySelector(".ms-Pivot-links").addEventListener("click", this._selectTabMouse.bind(this), !1), this._container.addEventListener("keyup", function (t) {
        13 === t.keyCode && e._selectTabKeyboard(t);
      }, !0);
    }, e.prototype._selectTab = function (e) {
      if (e.classList.contains("ms-Pivot-link") && !e.querySelector(".ms-Pivot-ellipsis")) {
        for (var t = e.parentElement.firstElementChild; t;) {
          t.classList.remove("is-selected"), t = t.nextElementSibling;
        }e.classList.add("is-selected");var i = this._container.querySelectorAll(".ms-Pivot-content");Array.prototype.forEach.call(i, function (e, t) {
          e.style.display = "none";
        });var n = e.getAttribute("data-content"),
            s = this._container.querySelector(".ms-Pivot-content[data-content='" + n + "']");s.style.display = "block";
      }
    }, e.prototype._selectTabMouse = function (e) {
      e.preventDefault();var t = e.target;this._selectTab(t);
    }, e.prototype._selectTabKeyboard = function (e) {
      e.preventDefault();var t = e.target;this._selectTab(t);
    }, e;
  }();e.Pivot = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  "use strict";
  var t = function () {
    function e(e) {
      this.container = e, this.cacheDOM();
    }return e.prototype.setProgressPercent = function (e) {
      this._progressBar.style.width = Math.round(this._width * e) + "px";
    }, e.prototype.setProgress = function (e) {
      this._progress = e;var t = this._progress / this._total;this.setProgressPercent(t);
    }, e.prototype.setTotal = function (e) {
      this._total = e;
    }, e.prototype.setName = function (e) {
      this._itemName.innerHTML = e;
    }, e.prototype.setDescription = function (e) {
      this._itemDescription.innerHTML = e;
    }, e.prototype.cacheDOM = function () {
      this._itemName = this.container.querySelector(".ms-ProgressIndicator-itemName") || null, this._itemDescription = this.container.querySelector(".ms-ProgressIndicator-itemDescription") || null, this._progressBar = this.container.querySelector(".ms-ProgressIndicator-progressBar");var e = this.container.querySelector(".ms-ProgressIndicator-itemProgress");this._width = e.offsetWidth;
    }, e;
  }();e.ProgressIndicator = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e, t) {
      this.element = e, this.j = t;
    }return e;
  }(),
      i = function () {
    function e(e) {
      this.eightSize = .2, this.animationSpeed = 90, this.parentSize = 20, this.fadeIncrement = 0, this.circleObjects = [], this._target = e, this._init();
    }return e.prototype.start = function () {
      var e = this;this.stop(), this.interval = setInterval(function () {
        for (var t = e.circleObjects.length; t--;) {
          e._fade(e.circleObjects[t]);
        }
      }, this.animationSpeed);
    }, e.prototype.stop = function () {
      clearInterval(this.interval);
    }, e.prototype._init = function () {
      this._setTargetElement(), this._setPropertiesForSize(), this._createCirclesAndArrange(), this._initializeOpacities(), this.start();
    }, e.prototype._setPropertiesForSize = function () {
      this.spinner.className.indexOf("large") > -1 && (this.parentSize = 28, this.eightSize = .179), this.offsetSize = this.eightSize, this.numCircles = 8;
    }, e.prototype._setTargetElement = function () {
      this._target.className.indexOf("ms-Spinner") === -1 ? (this.spinner = document.createElement("div"), this.spinner.className = "ms-Spinner", this._target.appendChild(this.spinner)) : this.spinner = this._target;
    }, e.prototype._initializeOpacities = function () {
      var e,
          t = 0,
          i = 1;for (this.fadeIncrement = 1 / this.numCircles, t; t < this.numCircles; t++) {
        var n = this.circleObjects[t];e = this.fadeIncrement * i++, this._setOpacity(n.element, e);
      }
    }, e.prototype._fade = function (e) {
      var t = this._getOpacity(e.element) - this.fadeIncrement;t <= 0 && (t = 1), this._setOpacity(e.element, t);
    }, e.prototype._getOpacity = function (e) {
      return parseFloat(window.getComputedStyle(e).getPropertyValue("opacity"));
    }, e.prototype._setOpacity = function (e, t) {
      e.style.opacity = t.toString();
    }, e.prototype._createCircle = function () {
      var e = document.createElement("div");return e.className = "ms-Spinner-circle", e.style.width = e.style.height = this.parentSize * this.offsetSize + "px", e;
    }, e.prototype._createCirclesAndArrange = function () {
      for (var e, i = 0, n = this.parentSize * this.offsetSize, s = 2 * Math.PI / this.numCircles, o = this.numCircles, r = .5 * (this.parentSize - n); o--;) {
        var a = this._createCircle(),
            c = Math.round(.5 * this.parentSize + r * Math.cos(i) - .5 * a.clientWidth) - .5 * n,
            l = Math.round(.5 * this.parentSize + r * Math.sin(i) - .5 * a.clientHeight) - .5 * n;this.spinner.appendChild(a), a.style.left = c + "px", a.style.top = l + "px", i += s, e = new t(a, o), this.circleObjects.push(e);
      }
    }, e;
  }();e.Spinner = i;
}(fabric || (fabric = {}));var fabric;!function (e) {
  "use strict";
  var t = function () {
    function e(e) {
      this.container = e, this.container.className.indexOf("ms-Table--selectable") !== -1 && this._addListeners();
    }return e.prototype._addListeners = function () {
      this.container.addEventListener("click", this._toggleRowSelection.bind(this), !1);
    }, e.prototype._toggleRowSelection = function (e) {
      var t = e.target.parentElement;if ("TR" === t.tagName) {
        var i = "is-selected";t.className === i ? t.className = "" : t.className = i;
      }
    }, e;
  }();e.Table = t;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t;!function (e) {
    !function (e) {
      e[e.Placeholder = 0] = "Placeholder", e[e.Underlined = 1] = "Underlined";
    }(e.Type || (e.Type = {}));e.Type;
  }(t || (t = {}));var i = function () {
    function e(e) {
      this._container = e, this._type = [], this._textField = this._container.querySelector(".ms-TextField-field"), this._textFieldLabel = this._container.querySelector(".ms-Label"), this._setTextFieldType(), this._addListeners();
    }return e.prototype._setTextFieldType = function () {
      this._container.classList.contains("ms-TextField--placeholder") && this._type.push(t.Type.Placeholder), this._container.classList.contains("ms-TextField--underlined") && this._type.push(t.Type.Underlined);
    }, e.prototype._addListeners = function () {
      var e = this;this._textFieldLabel.addEventListener("click", function (t) {
        e._textField.focus();
      }), this._type.indexOf(t.Type.Placeholder) >= 0 && (this._textField.addEventListener("focus", function (t) {
        e._textFieldLabel.style.display = "none";
      }), this._textField.addEventListener("blur", function (t) {
        0 === e._textField.value.length && (e._textFieldLabel.style.display = "block");
      })), this._type.indexOf(t.Type.Underlined) >= 0 && (this._textField.addEventListener("focus", function (t) {
        e._container.classList.add("is-active");
      }), this._textField.addEventListener("blur", function (t) {
        e._container.classList.remove("is-active");
      }));
    }, e;
  }();e.TextField = i;
}(fabric || (fabric = {}));var fabric;!function (e) {
  var t = function () {
    function e(e) {
      this._container = e, this._toggleField = this._container.querySelector(".ms-Toggle-field"), this._addListeners();
    }return e.prototype.removeListeners = function () {
      this._toggleField.removeEventListener("click", this._toggleHandler.bind(this));
    }, e.prototype._addListeners = function () {
      var e = this;this._toggleField.addEventListener("click", this._toggleHandler.bind(this), !1), this._toggleField.addEventListener("keyup", function (t) {
        return 32 === t.keyCode ? e._toggleHandler() : null;
      }, !1);
    }, e.prototype._toggleHandler = function () {
      this._toggleField.classList.toggle("is-selected");
    }, e;
  }();e.Toggle = t;
}(fabric || (fabric = {}));exports.fabric = fabric;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a(require("./jquery.js")) : this.Picker = a(jQuery);
}(function (a) {
  function b(f, g, h, k) {
    function l() {
      return b._.node("div", b._.node("div", b._.node("div", b._.node("div", w.component.nodes(r.open), t.box), t.wrap), t.frame), t.holder);
    }function m() {
      u.data(g, w).addClass(t.input).val(u.data("value") ? w.get("select", s.format) : f.value).on("focus." + r.id + " click." + r.id, p), s.editable || u.on("keydown." + r.id, function (a) {
        var b = a.keyCode,
            c = /^(8|46)$/.test(b);return 27 == b ? (w.close(), !1) : void ((32 == b || c || !r.open && w.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? w.clear().close() : w.open()));
      }), e(f, { haspopup: !0, expanded: !1, readonly: !1, owns: f.id + "_root" + (w._hidden ? " " + w._hidden.id : "") });
    }function n() {
      w.$root.on({ focusin: function focusin(a) {
          w.$root.removeClass(t.focused), a.stopPropagation();
        }, "mousedown click": function mousedownClick(b) {
          var c = b.target;c != w.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is(":input") || "OPTION" == c.nodeName || (b.preventDefault(), f.focus()));
        } }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
        var b = a(this),
            c = b.data(),
            d = b.hasClass(t.navDisabled) || b.hasClass(t.disabled),
            e = document.activeElement;e = e && (e.type || e.href) && e, (d || e && !a.contains(w.$root[0], e)) && f.focus(), !d && c.nav ? w.set("highlight", w.component.item.highlight, { nav: c.nav }) : !d && "pick" in c ? w.set("select", c.pick).close(!0) : c.clear ? w.clear().close(!0) : c.close && w.close(!0);
      }), e(w.$root[0], "hidden", !0);
    }function o() {
      var b;s.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof s.hiddenPrefix ? s.hiddenPrefix : "", "string" == typeof s.hiddenSuffix ? s.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), w._hidden = a('<input type=hidden name="' + b + '"' + (u.data("value") || f.value ? ' value="' + w.get("select", s.formatSubmit) + '"' : "") + ">")[0], u.on("change." + r.id, function () {
        w._hidden.value = f.value ? w.get("select", s.formatSubmit) : "";
      }).after(w._hidden);
    }function p(a) {
      a.stopPropagation(), "focus" == a.type && w.$root.addClass(t.focused), w.open();
    }if (!f) return b;var q = !1,
        r = { id: f.id || "P" + Math.abs(~~(Math.random() * new Date())) },
        s = h ? a.extend(!0, {}, h.defaults, k) : k || {},
        t = a.extend({}, b.klasses(), s.klass),
        u = a(f),
        v = function v() {
      return this.start();
    },
        w = v.prototype = { constructor: v, $node: u, start: function start() {
        return r && r.start ? w : (r.methods = {}, r.start = !0, r.open = !1, r.type = f.type, f.autofocus = f == document.activeElement, f.readOnly = !s.editable, f.id = f.id || r.id, "text" != f.type && (f.type = "text"), w.component = new h(w, s), w.$root = a(b._.node("div", l(), t.picker, 'id="' + f.id + '_root"')), n(), s.formatSubmit && o(), m(), s.container ? a(s.container).append(w.$root) : u.after(w.$root), w.on({ start: w.component.onStart, render: w.component.onRender, stop: w.component.onStop, open: w.component.onOpen, close: w.component.onClose, set: w.component.onSet }).on({ start: s.onStart, render: s.onRender, stop: s.onStop, open: s.onOpen, close: s.onClose, set: s.onSet }), q = c(w.$root.children()[0]), f.autofocus && w.open(), w.trigger("start").trigger("render"));
      }, render: function render(a) {
        return a ? w.$root.html(l()) : w.$root.find("." + t.box).html(w.component.nodes(r.open)), w.trigger("render");
      }, stop: function stop() {
        return r.start ? (w.close(), w._hidden && w._hidden.parentNode.removeChild(w._hidden), w.$root.remove(), u.removeClass(t.input).removeData(g), setTimeout(function () {
          u.off("." + r.id);
        }, 0), f.type = r.type, f.readOnly = !1, w.trigger("stop"), r.methods = {}, r.start = !1, w) : w;
      }, open: function open(c) {
        return r.open ? w : (u.addClass(t.active), e(f, "expanded", !0), setTimeout(function () {
          w.$root.addClass(t.opened), e(w.$root[0], "hidden", !1);
        }, 0), c !== !1 && (r.open = !0, q && j.css("overflow", "hidden").css("padding-right", "+=" + d()), u.trigger("focus"), i.on("click." + r.id + " focusin." + r.id, function (a) {
          var b = a.target;b != f && b != document && 3 != a.which && w.close(b === w.$root.children()[0]);
        }).on("keydown." + r.id, function (c) {
          var d = c.keyCode,
              e = w.component.key[d],
              g = c.target;27 == d ? w.close(!0) : g != f || !e && 13 != d ? a.contains(w.$root[0], g) && 13 == d && (c.preventDefault(), g.click()) : (c.preventDefault(), e ? b._.trigger(w.component.key.go, w, [b._.trigger(e)]) : w.$root.find("." + t.highlighted).hasClass(t.disabled) || w.set("select", w.component.item.highlight).close());
        })), w.trigger("open"));
      }, close: function close(a) {
        return a && (u.off("focus." + r.id).trigger("focus"), setTimeout(function () {
          u.on("focus." + r.id, p);
        }, 0)), u.removeClass(t.active), e(f, "expanded", !1), setTimeout(function () {
          w.$root.removeClass(t.opened + " " + t.focused), e(w.$root[0], "hidden", !0);
        }, 0), r.open ? (r.open = !1, q && j.css("overflow", "").css("padding-right", "-=" + d()), i.off("." + r.id), w.trigger("close")) : w;
      }, clear: function clear(a) {
        return w.set("clear", null, a);
      }, set: function set(b, c, d) {
        var e,
            f,
            g = a.isPlainObject(b),
            h = g ? b : {};if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
          g || (h[b] = c);for (e in h) {
            f = h[e], e in w.component.item && (void 0 === f && (f = null), w.component.set(e, f, d)), ("select" == e || "clear" == e) && u.val("clear" == e ? "" : w.get(e, s.format)).trigger("change");
          }w.render();
        }return d.muted ? w : w.trigger("set", h);
      }, get: function get(a, c) {
        if (a = a || "value", null != r[a]) return r[a];if ("value" == a) return f.value;if (a in w.component.item) {
          if ("string" == typeof c) {
            var d = w.component.get(a);return d ? b._.trigger(w.component.formats.toString, w.component, [c, d]) : "";
          }return w.component.get(a);
        }
      }, on: function on(b, c, d) {
        var e,
            f,
            g = a.isPlainObject(b),
            h = g ? b : {};if (b) {
          g || (h[b] = c);for (e in h) {
            f = h[e], d && (e = "_" + e), r.methods[e] = r.methods[e] || [], r.methods[e].push(f);
          }
        }return w;
      }, off: function off() {
        var a,
            b,
            c = arguments;for (a = 0, namesCount = c.length; namesCount > a; a += 1) {
          b = c[a], b in r.methods && delete r.methods[b];
        }return w;
      }, trigger: function trigger(a, c) {
        var d = function d(a) {
          var d = r.methods[a];d && d.map(function (a) {
            b._.trigger(a, w, [c]);
          });
        };return d("_" + a), d(a), w;
      } };return new v();
  }function c(a) {
    var b,
        c = "position";return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b;
  }function d() {
    if (j.height() <= h.height()) return 0;var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
        c = b[0].offsetWidth;b.css("overflow", "scroll");var d = a('<div style="width:100%" />').appendTo(b),
        e = d[0].offsetWidth;return b.remove(), c - e;
  }function e(b, c, d) {
    if (a.isPlainObject(c)) for (var e in c) {
      f(b, e, c[e]);
    } else f(b, c, d);
  }function f(a, b, c) {
    a.setAttribute(("role" == b ? "" : "aria-") + b, c);
  }function g(b, c) {
    a.isPlainObject(b) || (b = { attribute: c }), c = "";for (var d in b) {
      var e = ("role" == d ? "" : "aria-") + d,
          f = b[d];c += null == f ? "" : e + '="' + b[d] + '"';
    }return c;
  }var h = a(window),
      i = a(document),
      j = a(document.documentElement);return b.klasses = function (a) {
    return a = a || "picker", { picker: a, opened: a + "--opened", focused: a + "--focused", input: a + "__input", active: a + "__input--active", holder: a + "__holder", frame: a + "__frame", wrap: a + "__wrap", box: a + "__box" };
  }, b._ = { group: function group(a) {
      for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) {
        c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
      }return d;
    }, node: function node(b, c, d, e) {
      return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : "";
    }, lead: function lead(a) {
      return (10 > a ? "0" : "") + a;
    }, trigger: function trigger(a, b, c) {
      return "function" == typeof a ? a.apply(b, c || []) : a;
    }, digits: function digits(a) {
      return (/\d/.test(a[1]) ? 2 : 1
      );
    }, isDate: function isDate(a) {
      return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getUTCDate());
    }, isInteger: function isInteger(a) {
      return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0;
    }, ariaAttr: g }, b.extend = function (c, d) {
    a.fn[c] = function (e, f) {
      var g = this.data(c);return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function () {
        var f = a(this);f.data(c) || new b(this, c, d, e);
      });
    }, a.fn[c].defaults = d.defaults;
  }, b;
}), function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a(require("./picker.js"), require("./jquery.js")) : a(Picker, jQuery);
}(function (a, b) {
  function c(a, b) {
    var c = this,
        d = a.$node[0],
        e = d.value,
        f = a.$node.data("value"),
        g = f || e,
        h = f ? b.formatSubmit : b.format,
        i = function i() {
      return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction;
    };c.settings = b, c.$node = a.$node, c.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = -function (a) {
      return a[0] === !0 ? a.shift() : -1;
    }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, { format: h }) : c.set("select", null).set("highlight", c.item.now), c.key = { 40: 7, 38: -7, 39: function _() {
        return i() ? -1 : 1;
      }, 37: function _() {
        return i() ? 1 : -1;
      }, go: function go(a) {
        var b = c.item.highlight,
            d = new Date(Date.UTC(b.year, b.month, b.date + a));c.set("highlight", d, { interval: a }), this.render();
      } }, a.on("render", function () {
      a.$root.find("." + b.klass.selectMonth).on("change", function () {
        var c = this.value;c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"));
      }), a.$root.find("." + b.klass.selectYear).on("change", function () {
        var c = this.value;c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"));
      });
    }, 1).on("open", function () {
      var d = "";c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1);
    }, 1).on("close", function () {
      a.$root.find("button, select").attr("disabled", !0);
    }, 1);
  }var d = 7,
      e = 6,
      f = a._;c.prototype.set = function (a, b, c) {
    var d = this,
        e = d.item;return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function (e) {
      return b = d[e](a, b, c);
    }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d);
  }, c.prototype.get = function (a) {
    return this.item[a];
  }, c.prototype.create = function (a, c, d) {
    var e,
        g = this;return c = void 0 === c ? a : c, c == -1 / 0 || 1 / 0 == c ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(Date.UTC(c[0], c[1], c[2])), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) ? g.normalize(new Date(c), d) : f.isDate(c) ? g.normalize(c, d) : g.now(a, c, d), { year: e || c.getUTCFullYear(), month: e || c.getUTCMonth(), date: e || c.getUTCDate(), day: e || c.getUTCDay(), obj: e || c, pick: e || c.getTime() };
  }, c.prototype.createRange = function (a, c) {
    var d = this,
        e = function e(a) {
      return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a;
    };return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), { from: e(a), to: e(c) };
  }, c.prototype.withinRange = function (a, b) {
    return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick;
  }, c.prototype.overlapRanges = function (a, b) {
    var c = this;return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to);
  }, c.prototype.now = function (a, b, c) {
    return b = new Date(), c && c.rel && b.setUTCDate(b.getUTCDate() + c.rel), this.normalize(b, c);
  }, c.prototype.navigate = function (a, c, d) {
    var e,
        f,
        g,
        h,
        i = b.isArray(c),
        j = b.isPlainObject(c),
        k = this.item.view;if (i || j) {
      for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(Date.UTC(f, g + (d && d.nav ? d.nav : 0), 1)), f = e.getUTCFullYear(), g = e.getUTCMonth(); new Date(Date.UTC(f, g, h)).getUTCMonth() !== g;) {
        h -= 1;
      }c = [f, g, h];
    }return c;
  }, c.prototype.normalize = function (a) {
    return a.setUTCHours(0, 0, 0, 0), a;
  }, c.prototype.measure = function (a, b) {
    var c = this;return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, { rel: b })) : b = "min" == a ? -1 / 0 : 1 / 0, b;
  }, c.prototype.viewset = function (a, b) {
    return this.create([b.year, b.month, 1]);
  }, c.prototype.validate = function (a, c, d) {
    var e,
        g,
        h,
        i,
        j = this,
        k = c,
        l = d && d.interval ? d.interval : 1,
        m = -1 === j.item.enable,
        n = j.item.min,
        o = j.item.max,
        p = m && j.item.disable.filter(function (a) {
      if (b.isArray(a)) {
        var d = j.create(a).pick;d < c.pick ? e = !0 : d > c.pick && (g = !0);
      }return f.isInteger(a);
    }).length;if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick))) for (m && !p && (!g && l > 0 || !e && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) {
      c = j.create([c.year, c.month, c.date + l]);
    }return c;
  }, c.prototype.disabled = function (a) {
    var c = this,
        d = c.item.disable.filter(function (d) {
      return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0;
    });return d = d.length && !d.filter(function (a) {
      return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted;
    }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick;
  }, c.prototype.parse = function (a, b, c) {
    var d = this,
        e = {};return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function (a) {
      var c = d.formats[a],
          g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;c && (e[a] = b.substr(0, g)), b = b.substr(g);
    }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b;
  }, c.prototype.formats = function () {
    function a(a, b, c) {
      var d = a.match(/\w+/)[0];return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length;
    }function b(a) {
      return a.match(/\w+/)[0].length;
    }return { d: function d(a, b) {
        return a ? f.digits(a) : b.date;
      }, dd: function dd(a, b) {
        return a ? 2 : f.lead(b.date);
      }, ddd: function ddd(a, c) {
        return a ? b(a) : this.settings.weekdaysShort[c.day];
      }, dddd: function dddd(a, c) {
        return a ? b(a) : this.settings.weekdaysFull[c.day];
      }, m: function m(a, b) {
        return a ? f.digits(a) : b.month + 1;
      }, mm: function mm(a, b) {
        return a ? 2 : f.lead(b.month + 1);
      }, mmm: function mmm(b, c) {
        var d = this.settings.monthsShort;return b ? a(b, d, c) : d[c.month];
      }, mmmm: function mmmm(b, c) {
        var d = this.settings.monthsFull;return b ? a(b, d, c) : d[c.month];
      }, yy: function yy(a, b) {
        return a ? 2 : ("" + b.year).slice(2);
      }, yyyy: function yyyy(a, b) {
        return a ? 4 : b.year;
      }, toArray: function toArray(a) {
        return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
      }, toString: function toString(a, b) {
        var c = this;return c.formats.toArray(a).map(function (a) {
          return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "");
        }).join("");
      } };
  }(), c.prototype.isDateExact = function (a, c) {
    var d = this;return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isPlainObject(a) && b.isPlainObject(c) ? d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to) : !1;
  }, c.prototype.isDateOverlap = function (a, c) {
    var d = this,
        e = d.settings.firstDay ? 1 : 0;return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : b.isPlainObject(a) && b.isPlainObject(c) ? d.overlapRanges(a, c) : !1;
  }, c.prototype.flipEnable = function (a) {
    var b = this.item;b.enable = a || (-1 == b.enable ? 1 : -1);
  }, c.prototype.deactivate = function (a, c) {
    var d = this,
        e = d.item.disable.slice(0);return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function (a) {
      for (var c, g = 0; g < e.length; g += 1) {
        if (d.isDateExact(a, e[g])) {
          c = !0;break;
        }
      }c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a);
    }), e;
  }, c.prototype.activate = function (a, c) {
    var d = this,
        e = d.item.disable,
        g = e.length;return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function (a) {
      var c, h, i, j;for (i = 0; g > i; i += 1) {
        if (h = e[i], d.isDateExact(h, a)) {
          c = e[i] = null, j = !0;break;
        }if (d.isDateOverlap(h, a)) {
          b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), "inverted"]);break;
        }
      }if (c) for (i = 0; g > i; i += 1) {
        if (d.isDateExact(e[i], a)) {
          e[i] = null;break;
        }
      }if (j) for (i = 0; g > i; i += 1) {
        if (d.isDateOverlap(e[i], a)) {
          e[i] = null;break;
        }
      }c && e.push(c);
    }), e.filter(function (a) {
      return null != a;
    });
  }, c.prototype.nodes = function (a) {
    var b = this,
        c = b.settings,
        g = b.item,
        h = g.now,
        i = g.select,
        j = g.highlight,
        k = g.view,
        l = g.disable,
        m = g.min,
        n = g.max,
        o = function (a, b) {
      return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({ min: 0, max: d - 1, i: 1, node: "th", item: function item(d) {
          return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"'];
        } })));
    }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysShort).slice(0), c.weekdaysFull.slice(0)),
        p = function p(a) {
      return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({ role: "button", components: b.$node[0].id + "_table" }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"');
    },
        q = function q() {
      var d = c.showMonthsShort ? c.monthsShort : c.monthsFull;return c.selectMonths ? f.node("select", f.group({ min: 0, max: 11, i: 1, node: "option", item: function item(a) {
          return [d[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")];
        } }), c.klass.selectMonth, (a ? "" : "disabled") + " " + f.ariaAttr({ components: b.$node[0].id + "_table" }) + ' title="' + c.labelMonthSelect + '"') : f.node("div", d[k.month], c.klass.month);
    },
        r = function r() {
      var d = k.year,
          e = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);if (e) {
        var g = m.year,
            h = n.year,
            i = d - e,
            j = d + e;if (g > i && (j += g - i, i = g), j > h) {
          var l = i - g,
              o = j - h;i -= l > o ? o : l, j = h;
        }return f.node("select", f.group({ min: i, max: j, i: 1, node: "option", item: function item(a) {
            return [a, 0, "value=" + a + (d == a ? " selected" : "")];
          } }), c.klass.selectYear, (a ? "" : "disabled") + " " + f.ariaAttr({ components: b.$node[0].id + "_table" }) + ' title="' + c.labelYearSelect + '"');
      }return f.node("div", d, c.klass.year);
    };return f.node("div", (c.selectYears ? r() + q() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({ min: 0, max: e - 1, i: 1, node: "tr", item: function item(a) {
        var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;return [f.group({ min: d * a - k.day + e + 1, max: function max() {
            return this.min + d - 1;
          }, i: 1, node: "td", item: function item(a) {
            a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);var d = i && i.pick == a.pick,
                e = j && j.pick == a.pick,
                g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick;return [f.node("div", a.date, function (b) {
              return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ");
            }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({ role: "gridcell", selected: d && b.$node.val() === f.trigger(b.formats.toString, b, [c.format, a]) ? !0 : null, activedescendant: e ? !0 : null, disabled: g ? !0 : null })), "", f.ariaAttr({ role: "presentation" })];
          } })];
      } })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({ role: "grid", components: b.$node[0].id, readonly: !0 })) + f.node("div", f.node("button", c.today, c.klass.buttonToday, "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({ components: b.$node[0].id })) + f.node("button", c.clear, c.klass.buttonClear, "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({ components: b.$node[0].id })) + f.node("button", c.close, c.klass.buttonClose, "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({ components: b.$node[0].id })), c.klass.footer);
  }, c.defaults = function (a) {
    return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], today: "Today", clear: "Clear", close: "Close", format: "d mmmm, yyyy", klass: { table: a + "table", header: a + "header", navPrev: a + "nav--prev", navNext: a + "nav--next", navDisabled: a + "nav--disabled", month: a + "month", year: a + "year", selectMonth: a + "select--month", selectYear: a + "select--year", weekdays: a + "weekday", day: a + "day", disabled: a + "day--disabled", selected: a + "day--selected", highlighted: a + "day--highlighted", now: a + "day--today", infocus: a + "day--infocus", outfocus: a + "day--outfocus", footer: a + "footer", buttonClear: a + "button--clear", buttonToday: a + "button--today", buttonClose: a + "button--close" } };
  }(a.klasses().picker + "__"), a.extend("pickadate", c);
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Button
 */
exports.Button = function (props) {
    // Add the button html
    props.el.innerHTML = _1.Templates.Button(props);
    // Get the button
    var btn = props.el.firstElementChild;
    // Set the button click event
    btn.addEventListener("click", function (ev) {
        // Disable postback
        ev ? ev.preventDefault() : null;
        // Execute the click event
        props.onClick ? props.onClick(ev.currentTarget) : null;
    });
    // Create the button
    var _btn = new _1.fabric.Button(btn);
    // Return the button
    return btn;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Callout Positions
 */
exports.CalloutPositions = {
    left: "left",
    right: "right",
    top: "top",
    bottom: "bottom"
};
/**
 * Callout Types
 */
var CalloutTypes;
(function (CalloutTypes) {
    /** Action */
    CalloutTypes[CalloutTypes["Action"] = 0] = "Action";
    /** Close */
    CalloutTypes[CalloutTypes["Close"] = 1] = "Close";
    /** Default */
    CalloutTypes[CalloutTypes["Default"] = 2] = "Default";
    /** Out of the Box */
    CalloutTypes[CalloutTypes["OOBE"] = 3] = "OOBE";
    /** Peek */
    CalloutTypes[CalloutTypes["Peek"] = 4] = "Peek";
})(CalloutTypes = exports.CalloutTypes || (exports.CalloutTypes = {}));
/**
 * Callout
 */
exports.Callout = function (props) {
    // Set the template
    props.el.innerHTML = _1.Templates.Callout(props);
    // Create the callout
    var _callout = new _1.fabric.Callout(props.el.querySelector(".ms-Callout"), props.elTarget, props.position || "top");
    // Return the callout
    return _callout;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * CheckBox
 */
exports.CheckBox = function (props) {
    var _cb = null;
    // Method to get the checkbox element
    var get = function get() {
        // Returns the checkbox element
        return props.el.querySelector(".ms-CheckBox");
    };
    // Method to get the fabric component
    var getFabricComponent = function getFabricComponent() {
        // Return the checkbox
        return _cb;
    };
    // Method to get the value
    var getValue = function getValue() {
        // Get the checkbox value
        return _cb ? _cb.getValue() : false;
    };
    // Add the checkbox html
    props.el.innerHTML = _1.Templates.CheckBox(props);
    // Get the checkbox
    var cb = get();
    // Set the checkbox change event
    cb.onchange = function () {
        // Execute the change event
        props.onChange ? props.onChange(_cb.getValue()) : null;
    };
    // Create the checkbox
    _cb = new _1.fabric.CheckBox(cb);
    // Update the value
    props.value ? _cb.check() : _cb.unCheck();
    // Return the checkbox
    return {
        get: get,
        getFabricComponent: getFabricComponent,
        getValue: getValue
    };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Command Bar
 */
exports.CommandBar = function (props) {
    // Method to get the command bar
    var get = function get() {
        return _menu;
    };
    // Set the command bar html
    props.el.innerHTML = _1.Templates.CommandBar(props);
    // Create the command bar
    var _menu = new _1.fabric.CommandBar(props.el.querySelector(".ms-CommandBar"));
    // Parse the menu buttons
    var buttonProps = (props.sideCommands || []).concat(props.mainCommands || []);
    var buttons = _menu._container.querySelectorAll(".ms-CommandButton-button");
    for (var i = 0; i < buttons.length; i++) {
        // See if a click event exists
        if (buttonProps[i].onClick && buttons[i]) {
            // Add the index attribute
            buttons[i].setAttribute("data-btn-idx", i.toString());
            // Add a click event
            buttons[i].addEventListener("click", function (ev) {
                var btn = ev.currentTarget;
                // Disable postback
                ev.preventDefault();
                // Get the button index
                var idx = parseInt(btn.getAttribute("data-btn-idx"));
                if (idx >= 0 && buttonProps[idx]) {
                    // Execute the postback
                    buttonProps[idx].onClick(btn);
                }
            });
        }
    }
    // Return the command bar
    return { get: get };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Command Button
 */
exports.CommandButton = function (props) {
    // Method to get the fabric component
    var get = function get() {
        return _button;
    };
    // Set the command button html
    props.el.innerHTML = _1.Templates.CommandButton(props);
    // Create the contextual menu
    var _button = new _1.fabric.CommandButton(props.el.querySelector(".ms-CommandButton"));
    // Return the contextual menu
    return { get: get };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Contextual Menu
 */
exports.ContextualMenu = function (props) {
    // Method to get the contextual menu
    var get = function get() {
        return _menu;
    };
    // Set the contextual menu html
    props.el.innerHTML = _1.Templates.ContextualMenu(props);
    // Create the contextual menu
    var _menu = new _1.fabric.ContextualMenu(props.el.querySelector(".ms-ContextualMenu"), props.elTarget);
    // Return the contextual menu
    return { get: get };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Time Picker Type
 */
var TimePickerType;
(function (TimePickerType) {
    TimePickerType[TimePickerType["Default"] = 0] = "Default";
    TimePickerType[TimePickerType["Military"] = 1] = "Military";
})(TimePickerType = exports.TimePickerType || (exports.TimePickerType = {}));
/**
 * Date Picker
 */
exports.DatePicker = function (props) {
    // Method to get the date picker element
    var getDate = function getDate() {
        // Returns the datetime element
        return props.el.querySelector(".ms-DatePicker");
    };
    // Method to get the time picker element
    var getTime = function getTime() {
        // Returns the datetime element
        return props.el.querySelector(".ms-TimePicker");
    };
    // Method to get the fabric component
    var getFabricComponent = function getFabricComponent() {
        // Return the date picker
        return _dp;
    };
    // Method to get the value
    var getValue = function getValue() {
        var dt = null;
        // Get the date value
        var dtValue = _dp.picker.get();
        if (dtValue) {
            // Set the date
            dt = new Date(dtValue);
        }
        // See if the time exists
        var timeValue = _tp ? _tp.getValue() : null;
        timeValue = timeValue && timeValue.value ? timeValue.value.split(" ") : null;
        if (timeValue) {
            // Set the time
            // Set the hours
            var hours = parseInt(timeValue[0].split(":")[0]);
            hours += timeValue[1] == "PM" ? 12 : 0;
            // Set the minutes
            var minutes = parseInt(timeValue[0].split(":")[1]);
            // Set the time value
            dt.setHours(hours);
            dt.setMinutes(minutes);
        }
        // Return the date
        return dt;
    };
    // Method to render the date picker
    var renderDatePicker = function renderDatePicker(el) {
        // Add the datetime html
        el.innerHTML = _1.Templates.DatePicker(props);
        // Set the date picker change event
        el.onchange = function () {
            // Execute the change event
            props.onChange ? props.onChange(getValue()) : null;
        };
        // Create the date picker
        return new _1.fabric.DatePicker(el);
    };
    // Method to render the time picker
    var renderTimePicker = function renderTimePicker(el) {
        // Render the options
        var options = [];
        // Create the hours
        for (var i = 0; i < 25; i++) {
            var hour = "";
            // See if this is military time
            if (props.timePickerType == TimePickerType.Military) {
                // Set the hour
                hour = ("0" + i).slice(-2);
            } else {
                // Set the hour
                if (i == 0 || i == 12) {
                    hour = "12";
                } else {
                    hour = ("0" + i % 12).slice(-2);
                }
            }
            // Create the minutes
            for (var j = 0; j < 4; j++) {
                var min = ("0" + j * 15).slice(-2);
                // See if this is not military time
                if (props.timePickerType != TimePickerType.Military) {
                    min += " " + (i < 12 ? "AM" : "PM");
                }
                // Add the option
                options.push({
                    text: hour + ":" + min,
                    value: hour + ":" + min
                });
            }
        }
        // Render a dropdown
        return _1.Dropdown({
            el: el,
            label: "Time",
            options: options
        });
    };
    // Add the date picker
    props.el.innerHTML = ['<div class="ms-DatePicker"></div>', props.showTime ? '<div class="ms-TimePicker"></div>' : ''].join('\n');
    // Render the date picker
    var _dp = renderDatePicker(props.el.children[0]);
    // Render the time picker
    var _tp = props.showTime ? renderTimePicker(props.el.children[1]) : null;
    // Return the date picker
    return {
        getDate: getDate,
        getTime: getTime,
        getFabricComponent: getFabricComponent,
        getValue: getValue
    };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Dialog
 */
exports.Dialog = function (props) {
    // Returns the dialog component
    var get = function get() {
        return _dialog;
    };
    // Return the actions container
    var getActions = function getActions() {
        return _dialog._dialog.querySelector(".ms-Dialog-actions");
    };
    // Return the actions container
    var getContent = function getContent() {
        return _dialog._dialog.querySelector(".ms-Dialog-content");
    };
    // Return the actions container
    var getTitle = function getTitle() {
        return _dialog._dialog.querySelector(".ms-Dialog-title");
    };
    // Create the dialog
    props.el.innerHTML = _1.Templates.Dialog(props);
    var _dialog = new _1.fabric.Dialog(props.el.querySelector(".ms-Dialog"));
    // Return the dialog
    return {
        get: get,
        getActions: getActions,
        getContent: getContent,
        getTitle: getTitle
    };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = undefined;
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Dropdown Types
 */
var DropdownTypes;
(function (DropdownTypes) {
    DropdownTypes[DropdownTypes["Item"] = 0] = "Item";
    DropdownTypes[DropdownTypes["Header"] = 1] = "Header";
})(DropdownTypes = exports.DropdownTypes || (exports.DropdownTypes = {}));
/**
 * Dropdown
 */
exports.Dropdown = function (props) {
    // Method to create the list items
    var createList = function createList(el, options) {
        if (options === void 0) {
            options = [];
        }
        var items = [];
        // Method to render the items
        var renderItems = function renderItems(options, isCategory) {
            if (isCategory === void 0) {
                isCategory = false;
            }
            var items = [];
            // Parse the options
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                // See if this is a header
                if (option.type == DropdownTypes.Header) {
                    // Add a header item
                    items.push(_1.Templates.ListItem({
                        className: "ms-ListItem--" + (isCategory ? "category" : "header"),
                        isSelectable: isCategory ? props.multi : false,
                        isSelected: props.multi ? option.isSelected : false,
                        primaryText: option.text,
                        value: JSON.stringify(option)
                    }));
                } else if (option.options && option.options.length > 0) {
                    // Add the option as a category
                    items.push(renderItems(option.options, true).join('\n'));
                } else {
                    // Add the item
                    items.push(_1.Templates.ListItem({
                        isSelectable: props.multi,
                        isSelected: props.multi ? option.isSelected : false,
                        secondaryText: option.text,
                        value: JSON.stringify(option)
                    }));
                }
            }
            // Return the items
            return items;
        };
        // Set the click event
        var onClick = function onClick(ev) {
            var item = ev.currentTarget;
            var option = JSON.parse(item.getAttribute("data-value"));
            var tb = _tb.get()._textField;
            // Return if this is a header
            if (item.className.indexOf("ms-ListItem--header") > 0) {
                return;
            }
            // See if this is a multi-select
            if (props.multi) {
                var removeFl = false;
                // See if this item is selected
                if (item.className.indexOf("is-selected") >= 0) {
                    // Unselect this item
                    item.className = item.className.replace(/is\-selected/g, "").trim();
                    // Set the flag
                    removeFl = true;
                } else {
                    // Select this item
                    item.className += " is-selected";
                }
                // Update the value
                var values = updateValue(option.value, removeFl);
                // Call the change event
                props.onChange ? props.onChange(values) : null;
            } else {
                // Update the textbox
                updateValue(option.value);
                // Call the change event
                props.onChange ? props.onChange(option) : null;
                // Close the callout
                _callout._contextualHost.disposeModal();
            }
        };
        // Return the list
        return _1.List({
            className: "ms-List--dropdown",
            el: el,
            items: renderItems(options),
            onClick: onClick
        });
    };
    // Method to get the toggle element
    var get = function get() {
        // Returns the toggle element
        return props.el.querySelector(".ms-ContextualMenu");
    };
    // Method to get the fabric component
    var getFabricComponent = function getFabricComponent() {
        // Return the menu
        return _callout._contextualHost;
    };
    // Method to get the value
    var getValue = function getValue() {
        var value = _tb.get()._textField.getAttribute("data-value");
        // Return the value
        return value ? JSON.parse(value) : value;
    };
    // Method to set the options
    var setOptions = function setOptions(options) {
        // Clear the textbox value
        _tb.setValue("");
        // Create the list
        _list = createList(_callout._container, options);
        // Return this object
        return _this;
    };
    // Method to update the value
    var updateValue = function updateValue(value, removeFl) {
        if (removeFl === void 0) {
            removeFl = false;
        }
        var isUnsorted = props.multi && props.isUnsorted ? true : false;
        var values = (isUnsorted ? getValue() : null) || [];
        // See if this is a multi-select dropdown
        if (props.multi) {
            // Get the selected values
            var items = _list._container.querySelectorAll(".is-selected");
            for (var i = 0; i < items.length; i++) {
                var option = JSON.parse(items[i].getAttribute("data-value"));
                // See if we are removing this value
                if (value == option.value && removeFl) {
                    continue;
                }
                // See if the values are unsorted
                if (isUnsorted) {
                    var exists = false;
                    // Parse the selected values
                    for (var j = 0; j < values.length; j++) {
                        if (values[j].value == option.value) {
                            // Set the flag
                            exists = true;
                            break;
                        }
                    }
                    // Ensure the value exists
                    if (!exists) {
                        // Add the value
                        values.push(option);
                    }
                } else {
                    // Add the value
                    values.push(option);
                }
            }
            // Parse the values
            var textValues = [];
            for (var i = 0; i < values.length; i++) {
                // Add the text value
                textValues.push(values[i].text);
            }
            // Update the textbox
            _tb.get()._textField.setAttribute("data-value", JSON.stringify(props.multi ? values : values[0] || {}));
            _tb.setValue(textValues.join(", "));
        } else {
            var findOption_1 = function findOption_1(options) {
                // Ensure options exist
                if (options && options.length > 0) {
                    // Parse the options
                    for (var i = 0; i < options.length; i++) {
                        var option_1 = options[i];
                        // See if this is the target item, and return it
                        if (option_1.value == value) {
                            return option_1;
                        }
                        // Search the sub-options
                        option_1 = findOption_1(option_1.options);
                        if (option_1) {
                            return option_1;
                        }
                    }
                }
                // Option not found
                return null;
            };
            // Find the option
            var option = findOption_1(props.options);
            if (option) {
                // Update the textbox
                _tb.get()._textField.setAttribute("data-value", JSON.stringify(option));
                _tb.setValue(option.text);
            }
        }
        // Return the values
        return values;
    };
    // Render the dropdown
    props.el.innerHTML = ['<div class="dropdown">', '<div class="textfield"></div>', '<div class="callout"></div>', '</div>'].join('\n');
    // Render the textfield
    var _tb = _1.TextField({
        el: props.el.querySelector(".textfield"),
        label: props.label,
        required: props.required,
        type: _1.TextFieldTypes.Underline
    });
    // Create the callout
    var _callout = _1.Callout({
        className: "dropdown-list",
        el: props.el.querySelector(".callout"),
        elTarget: _tb.get()._textField,
        position: _1.CalloutPositions.left,
        subText: props.description,
        type: _1.CalloutTypes.Default
    });
    // Render the list
    var _list = createList(_callout._container, props.options);
    // Update the value
    updateValue(props.value);
    // Return the dropdown
    return {
        get: get,
        getFabricComponent: getFabricComponent,
        getValue: getValue,
        setOptions: setOptions
    };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Link Field
 */
exports.LinkField = function (props) {
    var _desc = null;
    var _url = null;
    // Method to get the link element
    var get = function get() {
        // Returns the link element
        return _url ? _url.get()._textField : null;
    };
    // Method to get the fabric component
    var getFabricComponent = function getFabricComponent() {
        // Return the link
        return _url;
    };
    // Method to get the value
    var getValue = function getValue() {
        // Get the link value
        return {
            Description: _desc ? _desc.getValue() : "",
            Url: _url ? _url.getValue() : ""
        };
    };
    // Method to validate the url
    var validate = function validate(url) {
        // Clear the error message
        _url.setErrorMessage("");
        // See if the url exists
        if (url) {
            // Validate the url
            if (/^https?\:\/\//.test(url) == false) {
                // Set the error message
                _url.setErrorMessage("The value must start with http:// or https://");
            }
        } else {
            // See if this field is required
            if (props.required) {
                // Set the error message
                _url.setErrorMessage("This field requires a value.");
            }
        }
        // Call the change event
        props.onChange ? function (value) {
            props.onChange(getValue());
        } : null;
    };
    // See if the field is disabled
    if (props.disable) {
        // Add the link html
        props.el.innerHTML = _1.Templates.LinkField(props);
    } else {
        // Add the link html
        props.el.innerHTML = ['<div class="url"></div>', '<div class="description"></div>'].join('\n');
        // Create the url textfield
        _url = _1.TextField({
            disable: props.disable,
            el: props.el.children[0],
            label: props.label,
            onChange: validate,
            required: props.required,
            type: _1.TextFieldTypes.Underline,
            value: props.value && props.value.Url ? props.value.Url : ""
        });
        // Create the description textfield
        _desc = _1.TextField({
            disable: props.disable,
            el: props.el.children[1],
            label: props.label + " Description",
            onChange: props.onChange ? function (value) {
                props.onChange(getValue());
            } : null,
            required: props.required,
            type: _1.TextFieldTypes.Underline,
            value: props.value && props.value.Description ? props.value.Description : ""
        });
        // Validate the url
        validate(props.value ? props.value.Url : "");
    }
    // Return the link
    return {
        get: get,
        getFabricComponent: getFabricComponent,
        getValue: getValue
    };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * List
 */
exports.List = function (props) {
    // Set the template
    props.el.innerHTML = _1.Templates.List(props);
    // Create the list and parse the items
    var _list = new _1.fabric.List(props.el.querySelector(".ms-List"));
    // See if the click event is defined
    if (props.onClick && _list._listItemComponents) {
        for (var i = 0; i < _list._listItemComponents.length; i++) {
            // Add the click event
            _list._listItemComponents[i]._container.addEventListener("click", props.onClick.bind(_list._listItemComponents[i]));
        }
    }
    // Return the list
    return _list;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * List Item
 */
exports.ListItem = function (props) {
    // Set the template
    props.el.innerHTML = _1.Templates.ListItem(props);
    // Return the list item
    return new _1.fabric.ListItem(props.el.querySelector(".ms-ListItem"));
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Number Field Types
 */
var NumberFieldTypes;
(function (NumberFieldTypes) {
    NumberFieldTypes[NumberFieldTypes["Integer"] = 0] = "Integer";
    NumberFieldTypes[NumberFieldTypes["Number"] = 1] = "Number";
    NumberFieldTypes[NumberFieldTypes["Percentage"] = 2] = "Percentage";
})(NumberFieldTypes = exports.NumberFieldTypes || (exports.NumberFieldTypes = {}));
/**
 * Number Field
 */
exports.NumberField = function (props) {
    // Method to get the value
    var getValue = function getValue() {
        // Ensure a value exists
        var value = _numberfield.getValue();
        if (value) {
            switch (props.type) {
                case NumberFieldTypes.Integer:
                    value = parseInt(value);
                    return typeof value === "number" ? value : null;
                case NumberFieldTypes.Number:
                    value = parseFloat(value);
                    return typeof value === "number" ? value : null;
                case NumberFieldTypes.Percentage:
                    value = parseFloat(value);
                    return typeof value === "number" ? value / 100 : null;
            }
        }
        // Return nothing
        return null;
    };
    // Method to validate the value
    var validate = function validate(value) {
        var maxValue = typeof props.minValue === "number" ? props.maxValue : Number.MAX_VALUE;
        var minValue = typeof props.minValue === "number" ? props.minValue : Number.MAX_VALUE * -1;
        var numberValue = null;
        var valueExists = (value || "").length > 0;
        // Clear the error message
        _numberfield.setErrorMessage("");
        // Ensure a value exists
        if (valueExists) {
            // Validate based on the type
            switch (props.type) {
                // Integer
                case NumberFieldTypes.Integer:
                    // Ensure this is an integer
                    numberValue = parseInt(value);
                    if (numberValue.toString() != value) {
                        // Set the error message
                        _numberfield.setErrorMessage("The value is not an integer");
                        // Validation failed
                        return false;
                    }
                    // Ensure it's between the min/max range
                    if (!(numberValue >= minValue && numberValue <= maxValue)) {
                        // Set the error message
                        _numberfield.setErrorMessage("The value must be between " + minValue + " and " + maxValue + ".");
                        // Validation failed
                        return false;
                    }
                    break;
                case NumberFieldTypes.Number:
                    // Ensure this is a number
                    numberValue = parseFloat(value);
                    if (numberValue != value) {
                        // Set the error message
                        _numberfield.setErrorMessage("The value is not an number");
                        // Validation failed
                        return false;
                    }
                    // Ensure it's between the min/max range
                    if (!(numberValue >= minValue && numberValue <= maxValue)) {
                        // Set the error message
                        _numberfield.setErrorMessage("The value must be between " + minValue + " and " + maxValue + ".");
                        // Validation failed
                        return false;
                    }
                    break;
                case NumberFieldTypes.Percentage:
                    // Update the min/max values
                    maxValue = maxValue == Number.MAX_VALUE ? 100 : maxValue;
                    minValue = minValue == Number.MAX_VALUE * -1 ? 0 : minValue;
                    // Ensure this is a number
                    numberValue = parseFloat(value);
                    if (numberValue != value) {
                        // Set the error message
                        _numberfield.setErrorMessage("The value is not an number");
                        // Validation failed
                        return false;
                    }
                    // Ensure it's between the min/max range
                    if (!(numberValue >= minValue && numberValue <= maxValue)) {
                        // Set the error message
                        _numberfield.setErrorMessage("The value must be between " + minValue + " and " + maxValue + ".");
                        // Validation failed
                        return false;
                    }
                    break;
            }
        }
        // Call the change event
        props.onChange ? props.onChange(value) : null;
        // Validation passed
        return true;
    };
    // Render the number field
    var _numberfield = _1.TextField({
        className: props.className,
        disable: props.disable,
        el: props.el,
        label: props.label,
        onChange: validate,
        placeholder: props.placeholder,
        required: props.required,
        value: props.value
    });
    // Return the number field
    return {
        get: _numberfield.get,
        getValue: getValue,
        setErrorMessage: _numberfield.setErrorMessage,
        setValue: _numberfield.setValue
    };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = undefined;
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Panel Types
 */
var PanelTypes;
(function (PanelTypes) {
    PanelTypes[PanelTypes["Left"] = 0] = "Left";
    PanelTypes[PanelTypes["Medium"] = 1] = "Medium";
    PanelTypes[PanelTypes["Large"] = 2] = "Large";
    PanelTypes[PanelTypes["LargeFixed"] = 3] = "LargeFixed";
    PanelTypes[PanelTypes["XLarge"] = 4] = "XLarge";
    PanelTypes[PanelTypes["XXLarge"] = 5] = "XXLarge";
})(PanelTypes = exports.PanelTypes || (exports.PanelTypes = {}));
/**
 * Panel
 */
exports.Panel = function (props) {
    var _panel = null;
    // Method to get the fabric component
    var get = function get() {
        // Return the panel
        return _panel;
    };
    // Method to get the content element
    var getContent = function getContent() {
        return _panel ? _panel._panel.querySelector(".ms-Panel-content") : null;
    };
    // Method to get the footer element
    var getFooter = function getFooter() {
        return _panel ? _panel._panel.querySelector(".ms-Panel-footer") : null;
    };
    // Method to get the header element
    var getHeader = function getHeader() {
        return _panel ? _panel._panel.querySelector(".ms-Panel-header") : null;
    };
    // Method to hide the panel
    var hide = function hide() {
        // Dismiss the panel
        _panel ? _panel.dismiss() : null;
        // Clear the panel
        _panel = null;
    };
    // Method to determine if the panel is open
    var isOpen = function isOpen() {
        return _panel && _panel._panel.className.indexOf("is-open") > 0;
    };
    // Method to show the panel
    var show = function show(content) {
        if (content === void 0) {
            content = "";
        }
        // Add the panel html
        props.el.innerHTML = _1.Templates.Panel(props);
        // Show the panel
        _panel = new _1.fabric.Panel(props.el.querySelector(".ms-Panel"));
        // Update the z-index of the panel host
        _panel.panelHost.panelHost.style.zIndex = "1000";
        // See if we are hiding the close button
        if (props.showCloseButton == false) {
            // Remove the button
            _panel._closeButton.remove();
        }
        // Get the inner content
        var innerContent = _panel._panel.querySelector(".ms-Panel-contentInner");
        if (innerContent) {
            // Set the class name
            innerContent.className += " ms-Panel-main";
            // Get the panel content
            innerContent = innerContent.querySelector(".ms-Panel-content");
            if (innerContent) {
                // Update the panel content
                innerContent.innerHTML = content;
            }
        }
        // Return content
        return innerContent;
    };
    // Method to update the panel content
    var updateContent = function updateContent(content) {
        if (content === void 0) {
            content = "";
        }
        var panelContent = null;
        // Ensure the panel exists
        if (_panel == null) {
            // Show the panel
            panelContent = show(content);
        } else {
            // Update the panel content
            panelContent = _panel._panel.querySelector(".ms-Panel-content");
            panelContent ? panelContent.innerHTML = content : null;
        }
        // Return the panel content
        return panelContent;
    };
    // Method to update the panel footer
    var updateFooter = function updateFooter(content) {
        if (content === void 0) {
            content = "";
        }
        // Update the content
        var el = _panel._panel.querySelector(".ms-Panel-footer");
        el ? el.innerHTML = content : null;
        // Return the panel content
        return el;
    };
    // Method to update the panel header
    var updateHeader = function updateHeader(content) {
        if (content === void 0) {
            content = "";
        }
        // Update the content
        var el = _panel._panel.querySelector(".ms-Panel-header");
        el ? el.innerHTML = content : null;
        // Return the panel content
        return el;
    };
    // See if we are showing the panel
    if (props.visible) {
        // Show the panel
        _this.show();
    }
    // Return the panel
    return {
        get: get,
        getContent: getContent,
        getFooter: getFooter,
        getHeader: getHeader,
        hide: hide,
        isOpen: isOpen,
        show: show,
        updateContent: updateContent,
        updateFooter: updateFooter,
        updateHeader: updateHeader
    };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
var _1 = __webpack_require__(1);
/**
 * People Picker
 */
exports.PeoplePicker = function (props) {
    var _filterText = "";
    var _templates = _1.Templates.PeoplePicker(props);
    // Method to get the component
    var get = function get() {
        // Return the people picker
        return _peoplepicker;
    };
    // Method to get the value
    var getValue = function getValue() {
        var users = [];
        // Parse the selected users
        var selectedUsers = _peoplepicker._peoplePickerSearchBox ? _peoplepicker._peoplePickerSearchBox.querySelectorAll(".ms-Persona") : [];
        // Set the value
        for (var i = 0; i < selectedUsers.length; i++) {
            var userInfo = selectedUsers[i].getAttribute("data-user");
            // Add the user information
            userInfo ? users.push(JSON.parse(userInfo)) : null;
        }
        // Return the users
        return users;
    };
    // Method to render the results
    var renderResults = function renderResults(ev, searchAll) {
        if (searchAll === void 0) {
            searchAll = false;
        }
        var searchDialog = _peoplepicker._contextualHostView._contextualHost;
        // Clear the results
        searchDialog.innerHTML = _templates.group(_filterText.length > 1 ? "Searching for '" + _filterText + "'" : "User Search");
        // Ensure 2 characters exist
        if (_filterText.length > 1) {
            // Search for the user
            new gd_sprest_1.PeoplePicker().clientPeoplePickerSearchUser({
                MaximumEntitySuggestions: 15,
                PrincipalSource: searchAll ? gd_sprest_1.SPTypes.PrincipalSources.All : gd_sprest_1.SPTypes.PrincipalSources.UserInfoList,
                PrincipalType: props.allowGroups ? gd_sprest_1.SPTypes.PrincipalTypes.All : gd_sprest_1.SPTypes.PrincipalTypes.User,
                QueryString: _filterText
            }).execute(function (search) {
                var users = [];
                var value = getValue();
                // Parse the users
                for (var i = 0; i < search.ClientPeoplePickerSearchUser.length; i++) {
                    var exists = false;
                    var user = search.ClientPeoplePickerSearchUser[i];
                    // Parse the current value
                    for (var j = 0; j < value.length; j++) {
                        // See if this user is already selected
                        if (exists = user.Key == value[j].Key) {
                            break;
                        }
                    }
                    // Ensure the user isn't already selected
                    if (exists) {
                        continue;
                    }
                    // Add the user
                    users.push(_templates.result(user));
                }
                // Append the results
                searchDialog.innerHTML = _templates.group('Search Results for \'' + _filterText + '\'', 'Search All Users', users.length == 0 ? '<div class="ms-PeoplePicker-result">Search returned no results</div>' : users.join('\n'));
                // See if we have searched all sources
                var btn = _peoplepicker._contextualHostView._contextualHost.querySelector(".ms-PeoplePicker-searchMore");
                if (searchAll) {
                    // Hide the button
                    btn.style.display = "none";
                } else {
                    // Set the search click event
                    btn.addEventListener("click", function (ev) {
                        // Disable postback
                        ev ? ev.preventDefault() : null;
                        // Search all sources
                        renderResults(ev, true);
                    });
                }
                // Parse the results
                var results = _peoplepicker._contextualHostView._contextualHost.querySelectorAll(".ms-PeoplePicker-result");
                for (var i = 0; i < results.length; i++) {
                    // Set the click event
                    var personaResult = results[i].querySelector(".ms-Persona");
                    if (personaResult) {
                        personaResult.addEventListener("click", function (ev) {
                            // Clear the filter
                            _filterText = "";
                            _peoplepicker._peoplePickerSearch.value = "";
                            // Select the result
                            _peoplepicker._selectResult.apply(_peoplepicker, [ev]);
                        });
                    }
                }
            });
        }
    };
    // Add the people picker html
    props.el.innerHTML = ['<div class="ms-PeoplePicker">', _templates.header(), _templates.searchBox(), _templates.results("Users"), '</div>'].join('\n');
    // Create the people picker
    var _peoplepicker = new _1.fabric.PeoplePicker(props.el.querySelector(".ms-PeoplePicker"));
    // Add the search event
    _peoplepicker._peoplePickerSearch.addEventListener("keyup", function (ev) {
        // Set the filter text
        var filterText = _peoplepicker._peoplePickerSearch.value;
        _filterText = filterText;
        // Wait 500ms before searching
        setTimeout(function (ev) {
            // Ensure the filters match
            if (filterText == _filterText) {
                // Render the users
                renderResults(ev);
            }
        }, 500);
    });
    // Return the people picker
    return {
        get: get,
        getValue: getValue
    };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * App Helper Methods
 * Helper methods designed to be run from the app web.
 */
exports.App = {
    // Method to copy a file in this app web to the host web
    copyFileToHostWeb: function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
        var srcFile = null;
        var origVal = lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the current web is an app web
            if (!lib_1.ContextInfo.isAppWeb) {
                // Error
                console.error("[gd-sprest] The current web is not an app web.");
                reject();
                return;
            }
            // Get the host web
            lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
            var web = (new lib_1.Web(rootWebFl ? lib_1.ContextInfo.siteServerRelativeUrl : null));
            // See if the folder url was given
            if (typeof (dstFolder) === "string") {
                // Get the folder
                exports.App.getFolder(web, dstFolder, true)
                    .then(function (folder) {
                    // Copy the file to the host web
                    exports.App.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                        .then(function (_a) {
                        var file = _a.file, folder = _a.folder;
                        resolve({ file: file, folder: folder });
                    });
                });
            }
            else {
                // Get the file name
                var fileName = fileUrl.split("/");
                fileName = fileName[fileName.length - 1];
                // Set the file urls
                var dstFileUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                var srcFileUrl_1 = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(lib_1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
                // Get the destination file
                web.getFileByServerRelativeUrl(dstFileUrl)
                    .execute(function (file) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // See if the file exists
                        if (file.Exists) {
                            // Check out the file, and resolve the promise
                            file.checkout().execute(resolve);
                        }
                        else {
                            // Resolve the promise
                            resolve();
                        }
                    });
                });
                // Target the current web
                lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = false;
                // Get the current web
                (new lib_1.Web())
                    .getFileByServerRelativeUrl(srcFileUrl_1)
                    .content()
                    .execute(function (content) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Get the file name
                        var fileName = srcFileUrl_1.split("/");
                        fileName = fileName[fileName.length - 1];
                        // Target the host web
                        lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
                        // Add the file to the folder
                        (dstFolder).Files().add(true, fileName, content)
                            .execute(function (file) {
                            // Save a reference to this file
                            srcFile = file;
                            // Check in the file
                            file.checkin("", 1).execute();
                            // Publish the file
                            file.publish("").execute(true);
                            // Wait for the requests to complete
                            file.done(function () {
                                // Resolve the promise
                                resolve();
                            });
                        });
                    });
                }, true);
                // Wait for the requests to complete, and resolve the promise
                web.done(function () { resolve({ file: srcFile, folder: dstFolder }); });
            }
        });
    },
    // Method to copy a file in this app web to the host web
    copyFilesToHostWeb: function (fileUrls, folderUrls, overwriteFl, rootWebFl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (files, folders, idx) {
                // Ensure the array is not empty
                if (fileUrls.length == idx || folderUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve({ files: files, folders: folders });
                    return;
                }
                // Copy the file
                exports.App.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
                    .then(function (_a) {
                    var file = _a.file, folder = _a.folder;
                    // Save a reference to the file and folder
                    files.push(file);
                    folders.push(folder);
                    // Copy the files
                    request(files, folders, ++idx);
                });
            };
            // Execute the request
            request([], [], 0);
        });
    },
    // Method to create sub-folders
    createSubFolders: function (folder, subFolderUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (resolve) {
                // Get the sub-folder name
                var subFolderName = subFolderUrl.split("/")[0];
                // Update the sub folder url
                subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);
                // Get the sub-folder
                var subFolder = folder.Folders(subFolderName).execute(function (subFolder) {
                    // Method to add additional sub folders
                    var addSubFolders = function (subFolder) {
                        // See if we are done
                        if (subFolderUrl.length == 0) {
                            // Resolve the promise
                            resolve(subFolder);
                        }
                        else {
                            // Create the sub folder
                            request(resolve);
                        }
                    };
                    // Ensure the sub-folder exists
                    if (subFolder.Exists) {
                        // Add the rest of the sub folders
                        addSubFolders(subFolder);
                    }
                    else {
                        // Create the sub folder
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            };
            // Execute the request
            request(resolve);
        });
    },
    // Method to get a folder
    getFolder: function (web, folderUrl, createFl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var dstFolder = null;
            // Ensure the web exists
            if (!web.existsFl) {
                // Get the web
                web.execute();
            }
            // Wait for the requests to complete
            web.done(function () {
                // Set the destination folder url
                var dstFolderUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));
                // Get the folder
                web.getFolderByServerRelativeUrl(folderUrl)
                    .execute(function (folder) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Ensure the folder exists
                        if (folder.Exists) {
                            // Save a reference to the folder
                            dstFolder = folder;
                            // Resolve the promise
                            resolve();
                        }
                        else {
                            // Create the folder
                            exports.App.createSubFolders(web.RootFolder(), folderUrl).then(function (folder) {
                                // Save a reference to the folder
                                dstFolder = folder;
                                // Resolve the promise
                                resolve();
                            });
                        }
                    });
                }, true);
                // Wait for the request to complete
                web.done(function () {
                    // Resolve the promise
                    resolve(dstFolder);
                });
            });
        });
    },
    // Method to remove empty folders
    removeEmptyFolders: function (web, folderUrls) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure folder urls exist
            if (folderUrls.length == 0) {
                // Resolve the promise and return it
                resolve();
            }
            else {
                var prevFolderUrl = null;
                // Sort the urls alphabetically, then from longest to shortest
                folderUrls.sort().sort(function (a, b) { return a.length > b.length ? -1 : 1; });
                // Parse the folders
                for (var _i = 0, folderUrls_1 = folderUrls; _i < folderUrls_1.length; _i++) {
                    var folderUrl = folderUrls_1[_i];
                    var folder = null;
                    // See if we already removed this folder
                    if (folderUrl == prevFolderUrl) {
                        continue;
                    }
                    else {
                        prevFolderUrl = folderUrl;
                    }
                    // Parse the folder names
                    var folderNames = folderUrl.split('/');
                    for (var _a = 0, folderNames_1 = folderNames; _a < folderNames_1.length; _a++) {
                        var folderName = folderNames_1[_a];
                        // Get the sub-folder
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }
                    // Execute the request
                    folder.execute(function (folder) {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if the folder is empty
                            if (folder.ItemCount == 0) {
                                // Delete the folder, and resolve the promise
                                folder.delete().execute(resolve);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    }, true);
                }
                // Wait for the requests to complete, and resolve the promise
                web.done(function () { resolve(); });
            }
        });
    },
    // Method to remove a file
    removeFile: function (web, fileUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var folder = null;
            var folders = fileUrl.split('/');
            // Parse the folders
            for (var i = 0; i < folders.length - 1; i++) {
                // Get the folder
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }
            // Get the file
            folder.Files(folders[folders.length - 1]).execute(function (file) {
                // See if it exists
                if (file.Exists) {
                    // Delete it and resolve the promise
                    file.delete().execute(resolve);
                }
                else {
                    // Resolve the promise
                    resolve();
                }
            }, true);
        });
    },
    // Method to remove files
    removeFiles: function (web, fileUrls, idx) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (idx, resolve) {
                // See if we have removed all files
                if (fileUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve();
                }
                else {
                    // Remove the file
                    exports.App.removeFile(web, fileUrls[idx]).then(function () {
                        // Remove the files
                        request(++idx, resolve);
                    });
                }
            };
            // Execute the request
            request(0, resolve);
        });
    }
};
//# sourceMappingURL=app.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Context Information
 */
var _ContextInfo = /** @class */ (function () {
    function _ContextInfo() {
    }
    Object.defineProperty(_ContextInfo, "_contextInfo", {
        // The current context information
        get: function () {
            return this.window["_spPageContextInfo"] ||
                {
                    existsFl: false,
                    isAppWeb: false,
                    isHubSite: false,
                    isSPO: false,
                    siteAbsoluteUrl: "",
                    siteServerRelativeUrl: "",
                    userId: 0,
                    webAbsoluteUrl: "",
                    webServerRelativeUrl: ""
                };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(_ContextInfo, "aadInstanceUrl", {
        /**
         * Properties
         */
        get: function () { return this._contextInfo.aadInstanceUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "aadTenantId", {
        get: function () { return this._contextInfo.aadTenantId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "alertsEnabled", {
        get: function () { return this._contextInfo.alertsEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "allowSilverlightPrompt", {
        get: function () { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "canUserCreateMicrosoftForm", {
        get: function () { return this._contextInfo.canUserCreateMicrosoftForm; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "canUserCreateVisioDrawing", {
        get: function () { return this._contextInfo.canUserCreateVisioDrawing; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "cdnPrefix", {
        get: function () { return this._contextInfo.cdnPrefix; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "clientServerTimeDelta", {
        get: function () { return this._contextInfo.clientServerTimeDelta; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "CorrelationId", {
        get: function () { return this._contextInfo.CorrelationId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "crossDomainPhotosEnabled", {
        get: function () { return this._contextInfo.crossDomainPhotosEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentCultureName", {
        get: function () { return this._contextInfo.currentCultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentLanguage", {
        get: function () { return this._contextInfo.currentLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentUICultureName", {
        get: function () { return this._contextInfo.currentUICultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "departmentId", {
        get: function () { return this._contextInfo.departmentId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "DesignPackageId", {
        get: function () { return this._contextInfo.DesignPackageId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "disableAppViews", {
        get: function () { return this._contextInfo.disableAppViews; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "disableFlows", {
        get: function () { return this._contextInfo.disableFlows; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "document", {
        get: function () { return this.window.document; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "env", {
        get: function () { return this._contextInfo.env; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "existsFl", {
        get: function () { return this._contextInfo.existsFl == null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "farmLabel", {
        get: function () { return this._contextInfo.farmLabel; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "fid", {
        get: function () { return this._contextInfo.fid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "formDigestTimeoutSeconds", {
        get: function () { return this._contextInfo.formDigestTimeoutSeconds; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "formDigestValue", {
        get: function () { return this._contextInfo.formDigestValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupColor", {
        get: function () { return this._contextInfo.groupColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupHasHomepage", {
        get: function () { return this._contextInfo.groupHasHomepage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupId", {
        get: function () { return this._contextInfo.groupId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupType", {
        get: function () { return this._contextInfo.groupType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "guestsEnabled", {
        get: function () { return this._contextInfo.guestsEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hasManageWebPermissions", {
        get: function () { return this._contextInfo.hasManageWebPermissions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hasPendingWebTemplateExtension", {
        get: function () { return this._contextInfo.hasPendingWebTemplateExtension; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hideSyncButtonOnODB", {
        get: function () { return this._contextInfo.hideSyncButtonOnODB; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hubSiteId", {
        get: function () { return this._contextInfo.hubSiteId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "idleSessionSignOutEnabled", {
        get: function () { return this._contextInfo.idleSessionSignOutEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isAnonymousGuestUser", {
        get: function () { return this._contextInfo.isAnonymousGuestUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isAppWeb", {
        get: function () { return this._contextInfo.isAppWeb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isEmailAuthenticatinoGuesUser", {
        get: function () { return this._contextInfo.isEmailAuthenticatinoGuesUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isExternalGuestUser", {
        get: function () { return this._contextInfo.isExternalGuestUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isHubSite", {
        get: function () { return this._contextInfo.isHubSite; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isMultiGeoTenant", {
        get: function () { return this._contextInfo.isMultiGeoTenant; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isNoScriptEnabled", {
        get: function () { return this._contextInfo.isNoScriptEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isSiteAdmin", {
        get: function () { return this._contextInfo.isSiteAdmin; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isSPO", {
        get: function () { return this._contextInfo.isSPO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isTenantDevSite", {
        get: function () { return this._contextInfo.isTenantDevSite; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isWebWelcomePage", {
        get: function () { return this._contextInfo.isWebWelcomePage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "layoutsUrl", {
        get: function () { return this._contextInfo.layoutsUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listBaseTemplate", {
        get: function () { return this._contextInfo.listBaseTemplate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listId", {
        get: function () { return this._contextInfo.listId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listTitle", {
        get: function () { return this._contextInfo.listTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listPermMask", {
        get: function () { return this._contextInfo.listPermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listUrl", {
        get: function () { return this._contextInfo.listUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "maximumFileSize", {
        get: function () { return this._contextInfo.maximumFileSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "nid", {
        get: function () { return this._contextInfo.nid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "openInClient", {
        get: function () { return this._contextInfo.openInClient; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pageItemId", {
        get: function () { return this._contextInfo.pageItemId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pageListId", {
        get: function () { return this._contextInfo.pageListId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pagePermMask", {
        get: function () { return this._contextInfo.pagePermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pagePersonalizationScope", {
        get: function () { return this._contextInfo.pagePersonalizationScope; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "preferUserTimeZone", {
        get: function () { return this._contextInfo.preferUserTimeZone; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "PreviewFeaturesEnabled", {
        get: function () { return this._contextInfo.PreviewFeaturesEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "profileUrl", {
        get: function () { return this._contextInfo.profileUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "PublishingFeatureOn", {
        get: function () { return this._contextInfo.PublishingFeatureOn; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "RecycleBinItemCount", {
        get: function () { return this._contextInfo.RecycleBinItemCount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverRedirectedUrl", {
        get: function () { return this._contextInfo.serverRedirectedUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverRequestPath", {
        get: function () { return this._contextInfo.serverRequestPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverTime", {
        get: function () { return this._contextInfo.serverTime; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "showNGSCDialogForSyncOnODB", {
        get: function () { return this._contextInfo.showNGSCDialogForSyncOnODB; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "showNGSCDialogForSyncOnTS", {
        get: function () { return this._contextInfo.showNGSCDialogForSyncOnTS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteAbsoluteUrl", {
        get: function () { return this._contextInfo.siteAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteClassification", {
        get: function () { return this._contextInfo.siteClassification; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteClientTag", {
        get: function () { return this._contextInfo.siteClientTag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteColor", {
        get: function () { return this._contextInfo.siteColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteId", {
        get: function () { return this._contextInfo.siteId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "sitePagesEnabled", {
        get: function () { return this._contextInfo.sitePagesEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteServerRelativeUrl", {
        get: function () { return this._contextInfo.siteServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteSubscriptionId", {
        get: function () { return this._contextInfo.siteSubscriptionId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "supportPercentStorePage", {
        get: function () { return this._contextInfo.supportPercentStorePage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "supportPoundStorePath", {
        get: function () { return this._contextInfo.supportPoundStorePath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "systemUserKey", {
        get: function () { return this._contextInfo.systemUserKey; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "tenantAppVersion", {
        get: function () { return this._contextInfo.tenantAppVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeCacheToken", {
        get: function () { return this._contextInfo.themeCacheToken; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeCssFolderUrl", {
        get: function () { return this._contextInfo.themeCssFolderUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeImageFileNames", {
        get: function () { return this._contextInfo.themeImageFileNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "updateFromDigestPageLoaded", {
        get: function () { return this._contextInfo.updateFromDigestPageLoaded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userDisplayName", {
        get: function () { return this._contextInfo.userDisplayName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userEmail", {
        get: function () { return this._contextInfo.userEmail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userFirstDayOfWeek", {
        get: function () { return this._contextInfo.userFirstDayOfWeek; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userId", {
        get: function () { return this._contextInfo.userId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userLoginName", {
        get: function () { return this._contextInfo.userLoginName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userTime24", {
        get: function () { return this._contextInfo.userTime24; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userTimeZoneData", {
        get: function () { return this._contextInfo.userTimeZoneData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "viewId", {
        get: function () { return this._contextInfo.viewId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "viewOnlyExperienceEnabled", {
        get: function () { return this._contextInfo.viewOnlyExperienceEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webAbsoluteUrl", {
        get: function () { return this._contextInfo.webAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webDescription", {
        get: function () { return this._contextInfo.webDescription; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webFirstDayOfWeek", {
        get: function () { return this._contextInfo.webFirstDayOfWeek; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webId", {
        get: function () { return this._contextInfo.webId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webLanguage", {
        get: function () { return this._contextInfo.webLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webLogoUrl", {
        get: function () { return this._contextInfo.webLogoUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webPermMask", {
        get: function () { return this._contextInfo.webPermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webServerRelativeUrl", {
        get: function () { return this._contextInfo.webServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTemplate", {
        get: function () { return this._contextInfo.webTemplate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTime24", {
        get: function () { return this._contextInfo.webTime24; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTitle", {
        get: function () { return this._contextInfo.webTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webUIVersion", {
        get: function () { return this._contextInfo.webUIVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "window", {
        get: function () { return typeof (window) == "undefined" ? {} : window; },
        enumerable: true,
        configurable: true
    });
    /**
     * Methods
     */
    // Method to generate a guid
    _ContextInfo.generateGUID = function () {
        // Set the batch id
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    // Method to get the context information for a web
    _ContextInfo.getWeb = function (url) {
        // Create a new base object
        return new utils_1.Base({
            endpoint: "contextinfo",
            method: "POST",
            url: url
        });
    };
    return _ContextInfo;
}());
exports.ContextInfo = _ContextInfo;
//# sourceMappingURL=contextInfo.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Request Type
 */
exports.RequestType = {
    // Requests
    Custom: 0,
    Delete: 1,
    Merge: 2,
    OData: 3,
    // Get Requests
    Get: 10,
    GetBuffer: 11,
    GetWithArgs: 12,
    GetWithArgsInBody: 13,
    GetWithArgsInQS: 14,
    GetWithArgsValueOnly: 15,
    GetReplace: 16,
    // Post Requests
    Post: 20,
    PostWithArgs: 21,
    PostWithArgsInBody: 22,
    PostWithArgsInQS: 23,
    PostWithArgsValueOnly: 24,
    PostReplace: 25
};
//# sourceMappingURL=requestType.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var mapper_1 = __webpack_require__(5);
var _1 = __webpack_require__(0);
/**
 * Request Helper
 */
var BaseHelper = /** @class */ (function () {
    function BaseHelper() {
    }
    // Method to add the methods to base object
    BaseHelper.prototype.addMethods = function (base, data) {
        var isCollection = data.results && data.results.length > 0;
        // Determine the metadata
        var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
        // Determine the object type
        var objType = metadata && metadata.type ? metadata.type : base.targetInfo.endpoint;
        objType = objType.split('/');
        objType = (objType[objType.length - 1]);
        objType = objType.split('.');
        objType = (objType[objType.length - 1]).toLowerCase();
        objType += isCollection ? "s" : "";
        // See if the base is a field
        if ((/^field/.test(objType) || /fields?$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
            // Update the type
            objType = "field" + (isCollection ? "s" : "");
        }
        else if (/item$/.test(objType)) {
            // Update the type
            objType = "listitem";
        }
        else if (/items$/.test(objType)) {
            // Update the type
            objType = "items";
        }
        else if (/corporatecatalogappmetadata/.test(objType)) {
            // Update the type
            objType = "tenantapp";
        }
        else if (/corporatecatalogappmetadatas/.test(objType)) {
            // Update the type
            objType = "tenantapps";
        }
        // Get the methods for the base object
        var methods = mapper_1.Mapper[objType];
        if (methods) {
            // Parse the methods
            for (var methodName in methods) {
                // Get the method information
                var methodInfo = methods[methodName] ? methods[methodName] : {};
                // See if the base is the "Properties" definition for the object
                if (methodName == "properties") {
                    // Parse the properties
                    for (var _i = 0, methodInfo_1 = methodInfo; _i < methodInfo_1.length; _i++) {
                        var property = methodInfo_1[_i];
                        var propInfo = property.split("|");
                        // Get the metadata type
                        var propName = propInfo[0];
                        var propType = propInfo.length > 1 ? propInfo[1] : null;
                        var subPropName = propInfo.length > 2 ? propInfo[2] : null;
                        var subPropType = propInfo.length > 3 ? propInfo[3] : null;
                        // See if the property is null or is a collection
                        if (base[propName] == null || (base[propName].__deferred && base[propName].__deferred.uri)) {
                            // See if the base property has a sub-property defined for it
                            if (propInfo.length == 4) {
                                // Update the ' char in the property name
                                subPropName = subPropName.replace(/'/g, "\\'");
                                // Add the property
                                base[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            }
                            else {
                                // Add the property
                                base[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
                            }
                        }
                    }
                    // Continue the loop
                    continue;
                }
                // See if the base object has a dynamic metadata type
                if (typeof (methodInfo.metadataType) === "function") {
                    // Clone the object properties
                    methodInfo = JSON.parse(JSON.stringify(methodInfo));
                    // Set the metadata type
                    methodInfo.metadataType = methods[methodName].metadataType(base);
                }
                // Add the method to the object
                base[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
            }
        }
    };
    // Method to add properties to the base object
    BaseHelper.prototype.addProperties = function (base, data) {
        // Parse the data properties
        for (var key in data) {
            var value = data[key];
            // Skip properties
            if (key == "__metadata" || key == "results") {
                continue;
            }
            // See if the base is a collection property
            if (value && value.__deferred && value.__deferred.uri) {
                // Generate a method for the base property
                base["get_" + key] = base["get_" + key] ? base["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
            }
            else {
                // Set the property, based on the property name
                switch (key) {
                    case "ClientPeoplePickerResolveUser":
                    case "ClientPeoplePickerSearchUser":
                        base[key] = JSON.parse(value);
                        break;
                    default:
                        // Append the property to the base object
                        base[key] = value;
                        break;
                }
                // See if the base is a collection
                if (base[key] && base[key].results) {
                    // Ensure the collection is an object
                    if (base[key].results.length == 0 || typeof (base[key].results[0]) === "object") {
                        // Create the base property as a new request
                        var objCollection = new _1.Base(base.targetInfo);
                        objCollection["results"] = base[key].results;
                        // See no results exist
                        if (objCollection["results"].length == 0) {
                            // Set the metadata type to the key
                            objCollection["__metadata"] = { type: key };
                        }
                        // Update the endpoint for the base request to point to the base property
                        objCollection.targetInfo.endpoint = (objCollection.targetInfo.endpoint.split("?")[0] + "/" + key).replace(/\//g, "/");
                        // Add the methods
                        base.addMethods(objCollection, objCollection);
                        // Update the data collection
                        base.updateDataCollection(base, objCollection["results"]);
                        // Update the property
                        base[key] = objCollection;
                    }
                }
            }
        }
    };
    // Method to update a collection object
    BaseHelper.prototype.updateDataCollection = function (obj, results) {
        // Ensure the base is a collection
        if (results) {
            // Save the results
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;
            // See if only one object exists
            if (obj["results"].length > 0) {
                var results_1 = obj["results"];
                // Parse the results
                for (var _i = 0, results_2 = results_1; _i < results_2.length; _i++) {
                    var result = results_2[_i];
                    // Add the base references
                    result["addMethods"] = obj.addMethods;
                    result["base"] = obj.base;
                    result["done"] = obj.done;
                    result["execute"] = obj.execute;
                    result["executeAndWait"] = obj.executeAndWait;
                    result["executeMethod"] = obj.executeMethod;
                    result["existsFl"] = true;
                    result["getProperty"] = obj.getProperty;
                    result["parent"] = obj;
                    result["targetInfo"] = obj.targetInfo;
                    result["updateMetadataUri"] = obj.updateMetadataUri;
                    result["waitForRequestsToComplete"] = obj.waitForRequestsToComplete;
                    // Update the metadata
                    this.updateMetadata(obj, result);
                    // Add the methods
                    this.addMethods(result, result);
                }
            }
        }
    };
    // Method to convert the input arguments into an object
    BaseHelper.prototype.updateDataObject = function (isBatchRequest) {
        // Ensure the request was successful
        if (this.status >= 200 && this.status < 300) {
            // Return if we are expecting a buffer
            if (this.requestType == _1.RequestType.GetBuffer) {
                return;
            }
            // Parse the responses
            var batchIdx = 0;
            var batchRequestIdx = 0;
            var responses = isBatchRequest ? this.response.split("\n") : [this.response];
            for (var i = 0; i < responses.length; i++) {
                var data = null;
                // Try to convert the response
                var response = responses[i];
                response = response === "" && !isBatchRequest ? "{}" : response;
                try {
                    data = isBatchRequest && response.indexOf("<?xml") == 0 ? response : JSON.parse(response);
                }
                catch (ex) {
                    continue;
                }
                // Set the object based on the request type
                var obj = isBatchRequest ? Object.create(this) : this;
                // Set the exists flag
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;
                // See if the data properties exists
                if (data.d) {
                    // Save a reference to it
                    obj["d"] = data.d;
                    // Update the metadata
                    this.updateMetadata(obj, data.d);
                    // Update the base object's properties
                    this.addProperties(obj, data.d);
                    // Add the methods
                    this.addMethods(obj, data.d);
                    // Update the data collection
                    this.updateDataCollection(obj, data.d.results);
                }
                // See if the batch request exists
                if (isBatchRequest) {
                    // Get the batch request
                    var batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    if (batchRequest == null) {
                        // Update the batch indexes
                        batchIdx++;
                        batchRequestIdx = 0;
                        // Update the batch request
                        batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    }
                    // Ensure the batch request exists
                    if (batchRequest) {
                        // Set the response object
                        batchRequest.response = typeof (data) === "string" ? data : obj;
                        // Execute the callback if it exists
                        batchRequest.callback ? batchRequest.callback(batchRequest.response) : null;
                    }
                }
            }
            // Clear the batch requests
            if (isBatchRequest) {
                this.base.batchRequests = null;
            }
        }
    };
    // Method to update the metadata
    BaseHelper.prototype.updateMetadata = function (base, data) {
        // Ensure the base is the app web
        if (!lib_1.ContextInfo.isAppWeb) {
            return;
        }
        // Get the url information
        var hostUrl = lib_1.ContextInfo.webAbsoluteUrl.toLowerCase();
        var requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
        var targetUrl = base.targetInfo && base.targetInfo.url ? base.targetInfo.url.toLowerCase() : null;
        // Ensure the urls exist
        if (hostUrl == null || requestUrl == null || targetUrl == null) {
            return;
        }
        // See if we need to make an update
        if (targetUrl.indexOf(hostUrl) == 0) {
            return;
        }
        // Update the metadata uri
        data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
    };
    return BaseHelper;
}());
exports.BaseHelper = BaseHelper;
//# sourceMappingURL=baseHelper.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(47));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(54));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(57));
__export(__webpack_require__(58));
//# sourceMappingURL=mapper.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Audit
 */
exports.audit = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=audit.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Event Receiver
 */
exports.eventreceiver = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Event Receivers
 */
exports.eventreceivers = {
    // Adds an event receiver to the collection.
    add: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets an event receiver by it's id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=eventReceiver.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Attachment
 */
exports.attachment = {};
/**
 * Attachment Files
 */
exports.attachmentfiles = {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param name - The name of the file to add.
     * @param contents - The file contents as an array buffer.
    **/
    add: {
        argNames: ["fileName"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * File
 */
exports.file = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
        "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties|propertyvalues", "VersionEvents", "Versions|fileversions"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Approves the file submitted for content approval with the specified comment.
    approve: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    cancelupload: {
        argNames: ["uploadId"],
        name: "cancelupload(guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    // Checks the file in to a document library based on the check-in type.
    // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
    checkin: {
        argNames: ["comment", "checkInType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Checks out the file from a document library based on the check-out type.
    checkout: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the file content.
    content: {
        name: "$value",
        requestType: utils_1.RequestType.GetBuffer
    },
    // Continues the chunk upload session with an additional fragment. The current file content is not changed.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    continueUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    // Copies the file to the destination URL.
    copyTo: {
        argNames: ["strNewUrl", "bOverWrite"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Denies approval for a file that was submitted for content approval.
    // Only documents in lists that are enabled for content approval can be denied.
    deny: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    finishUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
    // An exception is thrown if the file is not an ASPX page.
    // Type of scopes: 
    getlimitedwebpartmanager: {
        argNames: ["scope"],
        name: "getLimitedWebPartManager(scope=[[scope]])",
        requestType: utils_1.RequestType.GetReplace
    },
    // Moves the file to the specified destination URL.
    // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
    moveTo: {
        argNames: ["newUrl", "flags"],
        name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
        requestType: utils_1.RequestType.PostReplace
    },
    // Opens the file as a stream.
    openBinaryStream: {
        requestType: utils_1.RequestType.GetBuffer
    },
    // Submits the file for content approval with the specified comment.
    publish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Get
    },
    // Saves the file as a stream.
    saveBinaryStream: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
    // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
    // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
    startUpload: {
        argNames: ["uploadId"],
        name: "startupload(uploadId=guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    // Reverts an existing checkout for the file.
    undoCheckOut: {
        requestType: utils_1.RequestType.Post
    },
    // Removes the file from content approval or unpublish a major version.
    unpublish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.File",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Files
 */
exports.files = {
    // Adds a file to this collection.
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Adds a ghosted file to an existing list or document library.
    // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
    addTemplateFile: {
        argNames: ["urlOfFile", "templateFileType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * File Version
 */
exports.fileversion = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * File Versions
 */
exports.fileversions = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Folder
 */
exports.folder = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Folders
 */
exports.folders = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get the file at the specified URL.
    getbyurl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Limited Web Part Manager
 */
exports.limitedwebpartmanager = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "WebParts|webparts|/([Id])|webpart"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Gets a webpart by its id.
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: utils_1.RequestType.GetReplace
    }
};
//# sourceMappingURL=file.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Content Type
 */
exports.contenttype = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the content type.
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.ContentType",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Content Types
 */
exports.contenttypes = {
    // Adds a content type to the collection.
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Adds an existing content type to this collection.
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets a content type by id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Field
 */
exports.field = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Sets the value of the ShowInDisplayForm property for this field.
    setShowInDisplayForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Sets the value of the ShowInEditForm property for this field.
    setShowInEditForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Sets the value of the ShowInNewForm property for this field.
    setShowInNewForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Field Links
 */
exports.fieldlinks = {
    // Adds a field link to the collection.
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets a field link by it's id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Fields
 */
exports.fields = {
    // Adds a field to the field collection.
    add: {
        metadataType: "SP.Field",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Adds a field to the field collection.
    addField: {
        argNames: ["parameters"],
        metadataType: "SP.FieldCreationInformation",
        name: "addField",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
    addDependentLookupField: {
        argNames: ["displayname", "primarylookupfieldid", "showfield"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Creates a field based on the specified schema, Boolean value, and field options.
    // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
    createFieldAsXml: {
        argNames: ["schemaXml"],
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            parameters: {
                __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                Options: 8,
                SchemaXml: "[[schemaXml]]"
            }
        }
    },
    // Gets the field with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Returns the first Field object with the specified internal name or title from the collection.
    getByInternalNameOrTitle: {
        argNames: ["internalNameOrTitle"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Returns the first field object in the collection based on the title of the specified field.
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Items
 */
exports.items = {
    // Adds an item to the list item collection.
    add: {
        metadataType: function (obj) {
            return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem";
        },
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets an item by its id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "listitem"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * List
 */
exports.list = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns an item based on the id.
    getItemById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "item"
    },
    // Returns a collection of items from the list based on the view xml.
    getItems: {
        argNames: ["viewXml"],
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "[[viewXml]]"
            }
        }
    },
    // Returns a collection of items from the list based on the specified query.
    getItemsByQuery: {
        argNames: ["camlQuery"],
        name: "getItems",
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "<View>[[camlQuery]]</View>"
            }
        }
    },
    // Returns a collection of items from the list based on the specified query.
    getListItemChangesSinceToken: {
        argNames: ["query"],
        metadataType: "SP.ChangeLogItemQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
    getRelatedFields: {
        requestType: utils_1.RequestType.Get
    },
    // Gets the effective user permissions for the current user.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Returns the list view with the specified view identifier.
    getViewById: {
        argNames: ["viewId"],
        name: "getView",
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    // Renders the list data.
    renderListData: {
        argNames: ["viewXml"],
        name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
        requestType: utils_1.RequestType.PostReplace
    },
    // Renders the list form data.
    // Types of modes: 1 - Display, 2 - Edit, 3 - New
    renderListFormData: {
        argNames: ["itemid", "formid", "mode"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Reserves a list item ID for idempotent list item creation.
    reserveListItemId: {
        requestType: utils_1.RequestType.Post
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.List",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * List Item
 */
exports.listitem = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
        "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
        "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Gets the effective permissions that a specified user has on the list item.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Validates and sets the values of the specified collection of fields for the list item.
    validateUpdateListItem: {
        argNames: ["formValues", "bNewDocumentUpdate"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Lists
 */
exports.lists = {
    // Adds a list to the list collection.
    add: {
        metadataType: "SP.List",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
    ensureSiteAssetsLibrary: {
        requestType: utils_1.RequestType.Post
    },
    // Gets a list that is the default location for wiki pages.
    ensureSitePagesLibrary: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the list with the specified list identifier.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Returns the list with the specified title from the collection.
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Version
 */
exports.version = {
    // Gets the version with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "version"
    },
    // Deletes all versions in the collection.
    deleteAll: {
        requestType: utils_1.RequestType.Post
    },
    // Deletes a version, by the specified id.
    deleteById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Deletes a version, by the specified label.
    deleteByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Restores a version, by the specified label.
    restoreByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
/**
 * View
 */
exports.view = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "ViewFields|viewfieldcollection"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Returns the list view as HTML.
    renderAsHtml: {
        requestType: utils_1.RequestType.Get
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * View Field Collection
 */
exports.viewfieldcollection = {
    // Adds the field with the specified field internal name or display name to the collection.
    addViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Moves the field with the specified field internal name to the specified position in the collection.
    moveViewFieldTo: {
        argNames: ["field", "index"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Removes all the fields from the collection.
    removeAllViewFields: {
        requestType: utils_1.RequestType.Post
    },
    // Removes the field with the specified field internal name from the collection.
    removeViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    }
};
/**
 * Views
 */
exports.views = {
    // Adds a view to the view collection.
    add: {
        metadataType: "SP.View",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the list view with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Gets the list view with the specified title.
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=list.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Navigation
 */
exports.navigationservicerest = {
    /**
     * Properties
     */
    properties: [
        "MenuState|menustate|([Name])|menunode"
    ],
    /**
     * Methods
     */
    // Method to get the menu state.
    getMenuState: {
        argNames: ["menuNodeKey", "depth", "customProperties", "mapProviderName"],
        name: "MenuState",
        RequestType: utils_1.RequestType.GetWithArgsInQS
    }
};
//# sourceMappingURL=navigation.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Property Values
 */
exports.propertyvalues = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=propertyValues.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Search
 */
exports.search = {
    postquery: {
        argNames: ["request"],
        metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
//# sourceMappingURL=search.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Role Assignment
 */
exports.roleassignment = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Member", "RoleDefinitionBindings|roledefinitions"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Role Assignments
 */
exports.roleassignments = {
    // Adds a new role assignment with the specified principal and role definitions to the collection.
    addRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Gets the role assignment associated with the specified principal ID from the collection.
    getByPrincipalId: {
        argNames: ["principalId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roleassignment"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Gets the role definition with the specified role type.
    removeRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
/**
 * Role Definition
 */
exports.roledefinition = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Role Definitions
 */
exports.roledefinitions = {
    // Gets the role definition with the specified ID from the collection.
    getById: {
        argNames: ["roleDefId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    // Gets the role definition with the specified name.
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    // Gets the role definitions with the specified role type.
    getByType: {
        argNames: ["roleType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinitions"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=security.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Site
 */
exports.site = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
    createPreviewSPSite: {
        argNames: ["upgrade", "sendemail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
    extendUpgradeReminderDate: {
        requestType: utils_1.RequestType.Post
    },
    // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
    getCatalog: {
        argNames: ["typeCatalog"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Specifies the collection of custom list templates for a given site.
    getCustomListTemplates: {
        argNames: ["web"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the collection of site definitions that are available for creating Web sites within the site collection.
    getWebTemplates: {
        argNames: ["LCID", "overrideCompatLevel"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
    invalidate: {
        requestType: utils_1.RequestType.Post
    },
    // Returns true if the object needs to be upgraded; otherwise, false.
    needsUpgradeByType: {
        argNames: ["versionUpgrade", "recursive"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the site at the specified URL.
    openWeb: {
        argNames: ["strUrl"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Returns the site with the specified GUID.
    openWebById: {
        argNames: ["gWebId"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
    runHealthCheck: {
        argNames: ["ruleId", "bRepair", "bRunAlways"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
    runUpgradeSiteSession: {
        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Site",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: ["requireUseRemoteAPIs"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
/**
 * Tenant App
 */
exports.tenantapp = {
    // Deploy solution package in tenant app catalog
    deploy: {
        requestType: utils_1.RequestType.Post
    },
    // Install solution package from tenant app catalog to SharePoint site
    install: {
        requestType: utils_1.RequestType.Post
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Remove solution package from tenant app catalog
    remove: {
        requestType: utils_1.RequestType.Post
    },
    // Retract solution package in the tenant app catalog
    retract: {
        requestType: utils_1.RequestType.Post
    },
    // Upgrade solution package in SharePoint site
    upgrade: {
        requestType: utils_1.RequestType.Post
    },
    // Uninstall solution package from SharePoint site
    uninstall: {
        requestType: utils_1.RequestType.Post
    }
};
/**
 * Tenant Apps
 */
exports.tenantapps = {
    // Get an app by id
    getById: {
        argNames: ["guid"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "tenantapp"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Tenant App Catalog
 */
exports.tenantappcatalog = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AvailableApps|tenantapps|/getById('[Id]')|tenantapp"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get an app by id.
    getById: {
        argNames: ["guid"],
        name: "AvailableApps/getById('[[guid]]')",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "tenantapp"
    },
    // Gets the site collection app catalog sites
    SiteCollectionAppCatalogsSites: {
        requestType: utils_1.RequestType.Post
    }
};
/**
 * Utility
 */
exports.utility = {
    createEmailBodyForInvitation: {
        argNames: ["pageAddress"],
        name: "SP.Utilities.Utility.CreateEmailBodyForInvitation",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getAppLicenseDeploymentId: {
        name: "SP.Utilities.Utility.GetAppLicenseDeploymentId",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getAppLicenseInformation: {
        name: "SP.Utilities.Utility.GetAppLicenseInformation",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getCurrentUserEmailAddresses: {
        name: "SP.Utilities.Utility.GetCurrentUserEmailAddresses",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getLocalizedString: {
        argNames: ["sourceValue"],
        name: "SP.Utilities.Utility.GetLocalizedString",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getLowerCaseString: {
        argNames: ["sourceValue", "lcid"],
        name: "SP.Utilities.Utility.GetLowerCaseString",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    importAppLicense: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.ImportAppLicense",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    isUserLicensedForEntityInContext: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.IsUserLicensedForEntityInContext",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    localizeWebPartGallery: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.LocalizeWebPartGallery",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    markDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.MarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    resolvePrincipal: {
        name: "SP.Utilities.Utility.ResolvePrincipalInCurrentContext",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    searchPrincipals: {
        name: "SP.Utilities.Utility.SearchPrincipalsUsingContextWeb",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    unmarkDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.UnmarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Web
 */
exports.web = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AllProperties|propertyvalues", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group",
        "AssociatedVisitorGroup|group", "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields",
        "ClientWebParts", "ContentTypes|contenttypes|('[Name]')|contenttype", "CurrentUser|user", "DataLeakagePreventionStatusInfo",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features",
        "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "FirstUniqueAncestorSecurableObject",
        "Folders|folders|/getByUrl('[Name]')|folder", "Lists|lists|/getByTitle('[Name]')|list",
        "ListTemplates|listtemplates|('[Name]')|listtemplate", "Navigation", "ParentWeb",
        "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RoleDefinitions|roledefinitions|/getByName('[Name]')|roledefinition", "RootFolder|folder|/getByUrl('[Name]')|file",
        "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user",
        "TenantAppCatalog|tenantappcatalog", "ThemeInfo", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos|webinfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
    applyTheme: {
        argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Applies the specified site definition or site template to the Web site that has no template applied to it.
    applyWebTemplate: {
        argName: ["name"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
    doesPushNotificationSubscriberExist: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns whether the current user has the given set of permissions.
    doesUserHavePermissions: {
        argNames: ["High", "Low"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
    ensureUser: {
        argNames: ["logonName"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Sends data to an OData service.
    executeRemoteLOB: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the app BDC catalog.
    getAppBdcCatalog: {
        requestType: utils_1.RequestType.Post
    },
    // Gets the app BDC catalog for the specified app instance.
    getAppBdcCatalogForAppInstance: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Retrieves an AppInstance installed on this Site.
    getAppInstanceById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Retrieves all AppInstances installed on this site that are instances of the specified App.
    getAppInstancesByProductId: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns a collection of site templates available for the site.
    getAvailableWebTemplates: {
        argNames: ["lcid", "doincludecrosslanguage"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    // Returns the list gallery on the site.
    getCatalog: {
        argNames: ["galleryType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the context information for the site. Static method.
    getContextWebInformation: {
        name: "contextInfo",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    // Gets the custom list templates for the site.
    getCustomListTemplates: {
        requestType: utils_1.RequestType.Get
    },
    // Gets the document libraries on a site. Static method. (SharePoint Online only)
    getDocumentLibraries: {
        argNames: ["url"],
        name: "sp.web.getDocumentLibraries",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Gets the specified external content type in a line-of-business (LOB) system application.
    getEntity: {
        argNames: ["namespace", "name"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the file object located at the specified server-relative URL.
    getFileByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    // Returns the folder object located at the specified server-relative URL.
    getFolderByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Gets the list at the specified site-relative URL. (SharePoint Online only)
    getList: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Gets the push notification subscriber over the site for the specified device application instance ID.
    getPushNotificationSubscriber: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
    getPushNotificationSubscribersByArgs: {
        argNames: ["args"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Queries for the push notification subscribers over the site for the specified user.
    getPushNotificationSubscribersByUser: {
        argNames: ["loginName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
    getSubwebsFilteredForCurrentUser: {
        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
        requestType: utils_1.RequestType.GetWithArgs,
        returnType: "webinfos"
    },
    // Returns the user corresponding to the specified member identifier for the current site.
    getUserById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the effective permissions that the specified user has within the current application scope.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Gets the site URL from a page URL. Static method.
    getWebUrlFromPageUrl: {
        name: "sp.web.getWebUrlFromPageUrl",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Uploads and installs an app package to this site.
    loadAndInstallApp: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Uploads and installs an App package on the site in a specified locale.
    loadAndInstallAppInSpecifiedLocale: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Uploads an App package and creates an instance from it.
    loadApp: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns the name of the image file for the icon that is used to represent the specified file.
    mapToIcon: {
        argNames: ["filename", "progid", "size"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    // Processes a notification from an external system.
    processExternalNotification: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
    registerPushNotificationSubscriber: {
        argNames: ["deviceappinstanceid", "servicetoken"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Unregisters the subscriber for push notifications from the site.
    unregisterPushNotificationSubscriber: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Web",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Web Information Collection
 */
exports.webinfos = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Webs
 */
exports.webs = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=site.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * People Manager
 */
exports.peoplemanager = {
    amIFollowedBy: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    amIFollowing: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    follow: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    followTag: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getFollowedTags: {
        argNames: ["maxCount"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getFollowersFor: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getMyFollowers: {
        requestType: utils_1.RequestType.Get
    },
    getMyProperties: {
        requestType: utils_1.RequestType.Get
    },
    getMySuggestions: {
        requestType: utils_1.RequestType.Get
    },
    getPeopleFollowedBy: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getPeopleFollowedByMe: {
        requestType: utils_1.RequestType.Get
    },
    getPropertiesFor: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getTrendingTags: {
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getUserProfilePropertyFor: {
        argNames: ["accountName", "propertyName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    hideSuggestion: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    isFollowing: {
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    setMyProfilePicture: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    stopFollowing: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    stopFollowingTag: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
/**
 * Profile Loader
 */
exports.profileloader = {
    createPersonalSiteEnqueueBulk: {
        argNames: ["emailIDs"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getOwnerUserProfile: {
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post,
        returnType: "userprofile"
    },
    getUserProfile: {
        requestType: utils_1.RequestType.Post,
        returnType: "userprofile"
    },
};
/**
 * Social Feed
 */
exports.socialfeed = {
    actor: {
        argNames: ["accountName"],
        name: "actor(item=@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    actorFeed: {
        argNames: ["accountName"],
        name: "actor(item=@v)/feed?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    clearMyUnreadMentionCount: {
        name: "my/mentionfeed/clearMyUnreadMentionCount",
        requestType: utils_1.RequestType.Post
    },
    my: {
        name: "my",
        requestType: utils_1.RequestType.Get
    },
    myFeed: {
        name: "my/feed",
        requestType: utils_1.RequestType.Get
    },
    myLikes: {
        name: "my/likes",
        requestType: utils_1.RequestType.Get
    },
    myMentionFeed: {
        name: "my/mentionfeed",
        requestType: utils_1.RequestType.Get
    },
    myNews: {
        name: "my/news",
        requestType: utils_1.RequestType.Get
    },
    myTimelineFeed: {
        name: "my/timelinefeed",
        requestType: utils_1.RequestType.Get
    },
    myUnreadMentionCount: {
        name: "my/unreadmentioncount",
        requestType: utils_1.RequestType.Get
    }
};
/**
 * User Profile
 */
exports.userprofile = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "PersonalSite|site"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    createPersonalSiteEnque: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    shareAllSocialData: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
//# sourceMappingURL=social.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Group
 */
exports.group = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Users|users|/getById([Name])|user"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Site Groups
 */
exports.sitegroups = {
    // Adds a group to the group collection.
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns a group from the collection based on the member ID of the group.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    // Returns a cross-site group from the collection based on the name of the group.
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Removes the group with the specified member ID from the collection.
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Removes the cross-site group with the specified name from the collection.
    removeByLoginName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
/**
 * People Picker
 */
exports.peoplepicker = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * User
 */
exports.user = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Groups|sitegroups|([Name])|group"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Users
 */
exports.users = {
    // Adds a user to the user collection.
    add: {
        metadataType: "SP.User",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the user with the specified email address.
    getByEmail: {
        argNames: ["email"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the user with the specified member identifier (ID).
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the user with the specified login name.
    getByLoginName: {
        argNames: ["loginName"],
        name: "getByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "user"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Removes the user with the specified ID.
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Removes the user with the specified login name.
    removeByLoginName: {
        argNames: ["loginName"],
        name: "removeByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.PostReplace
    }
};
//# sourceMappingURL=user.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * User Custom Action
 */
exports.usercustomaction = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * User Custom Actions
 */
exports.usercustomactions = {
    // Adds a user custom action to the collection.
    add: {
        metadataType: "SP.UserCustomAction",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Deletes all custom actions in the collection.
    clear: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the custom action with the specified identifier.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=userCustomAction.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calendar Types
 */
exports.CalendarTypes = {
    Gregorian: 1,
    JapaneseEmperorEra: 3,
    TaiwanCalendar: 4,
    KoreanTangunEra: 5,
    Hijri: 6,
    Thai: 7,
    HebrewLunar: 8,
    GregorianMiddleEastFrench: 9,
    GregorianArabic: 10,
    GregorianTransliteratedEnglish: 11,
    GregorianTransliteratedFrench: 12,
    KoreanandJapaneseLunar: 14,
    ChineseLunar: 15,
    SakaEra: 16
};
/**
 * Check Out Types
 */
exports.CheckOutType = { Online: 0, Offline: 1, None: 2 };
/**
 * Choice Format Types
 */
exports.ChoiceFormatType = { Dropdown: 0, RadioButtons: 1 };
/**
 * Client Template Utility
 */
exports.ClientTemplatesUtility = {
    UserLookupDelimitString: ";#",
    UserMultiValueDelimitString: ",#"
};
/**
 * Control Modes
 */
exports.ControlMode = {
    Invalid: 0,
    Display: 1,
    Edit: 2,
    New: 3,
    View: 4
};
/**
 * Date Format
 */
exports.DateFormat = { DateOnly: 0, DateTime: 1 };
/**
 * Draft Visibility Types
 */
exports.DraftVisibilityType = { Reader: 0, Author: 1, Approver: 2 };
/**
 * Event Receiver Synchronization Types
 */
exports.EventReceiverSynchronizationType = { Synchronization: 1, Asynchronous: 2 };
/**
 * Event Receiver Types
 */
exports.EventReceiverType = {
    ItemAdding: 1,
    ItemUpdating: 2,
    ItemDeleting: 3,
    ItemCheckingIn: 4,
    ItemCheckingOut: 5,
    ItemUncheckingOut: 6,
    ItemAttachmentAdding: 7,
    ItemAttachmentDeleting: 8,
    ItemFileMoving: 9,
    ItemVersionDeleting: 11,
    FieldAdding: 101,
    FieldUpdating: 102,
    FieldDeleting: 103,
    ListAdding: 104,
    ListDeleting: 105,
    SiteDeleting: 201,
    WebDeleting: 202,
    WebMoving: 203,
    WebAdding: 204,
    GroupAdding: 301,
    GroupUpdating: 302,
    GroupDeleting: 303,
    GroupUserAdding: 304,
    GroupUserDeleting: 305,
    RoleDefinitionAdding: 306,
    RoleDefinitionUpdating: 307,
    RoleDefinitionDeleting: 308,
    RoleAssignmentAdding: 309,
    RoleAssignmentDeleting: 310,
    InheritanceBreaking: 311,
    InheritanceResetting: 312,
    WorkflowStarting: 501,
    ItemAdded: 10001,
    ItemUpdated: 10002,
    ItemDeleted: 10003,
    ItemCheckedIn: 10004,
    ItemCheckedOut: 10005,
    ItemUncheckedOut: 10006,
    ItemAttachmentAdded: 10007,
    ItemAttachmentDeleted: 10008,
    ItemFileMoved: 10009,
    ItemFileConverted: 10010,
    ItemVersionDeleted: 10011,
    FieldAdded: 10101,
    FieldUpdated: 10102,
    FieldDeleted: 10103,
    ListAdded: 10104,
    ListDeleted: 10105,
    SiteDeleted: 10201,
    WebDeleted: 10202,
    WebMoved: 10203,
    WebProvisioned: 10204,
    GroupAdded: 10301,
    GroupUpdated: 10302,
    GroupDeleted: 10303,
    GroupUserAdded: 10304,
    GroupUserDeleted: 10305,
    RoleDefinitionAdded: 10306,
    RoleDefinitionUpdated: 10307,
    RoleDefinitionDeleted: 10308,
    RoleAssignmentAdded: 10309,
    RoleAssignmentDeleted: 10310,
    InheritanceBroken: 10311,
    InheritanceReset: 10312,
    WorkflowStarted: 10501,
    WorkflowPostponed: 10502,
    WorkflowCompleted: 10503,
    EntityInstanceAdded: 10601,
    EntityInstanceUpdated: 10602,
    EntityInstanceDeleted: 10603,
    AppInstalled: 10701,
    AppUpgraded: 10702,
    AppUninstalling: 10703,
    EmailReceived: 20000,
    ContextEvent: 32766
};
/**
 * Field Note Types
 */
exports.FieldNoteType = {
    /** Enhance Rich Text */
    EnhancedRichText: 0,
    /** Rich Text */
    RichText: 1,
    /** Text Only */
    TextOnly: 2
};
/**
 * Field Number Type
 */
exports.FieldNumberType = {
    /** Decimal */
    Decimal: 0,
    /** Integer */
    Integer: 1,
    /** Percentage */
    Percentage: 2,
};
/**
 * Field Result Types
 */
exports.FieldResultType = {
    /** Boolean */
    Boolean: "Boolean",
    /** Currency */
    Currency: "Currency",
    /** Date Only */
    DateOnly: "DateOnly",
    /** Date & Time */
    DateTime: "DateTime",
    /** Number */
    Number: "Number",
    /** Text */
    Text: "Text"
};
/**
 * Field Types
 */
exports.FieldType = {
    AllDayEvent: 29,
    Attachments: 19,
    Boolean: 8,
    Calculated: 17,
    Choice: 6,
    Computed: 12,
    ContentTypeId: 25,
    Counter: 5,
    CrossProjectLink: 22,
    Currency: 10,
    DateTime: 4,
    Error: 24,
    File: 18,
    Geolocation: 31,
    GridChoice: 16,
    Guid: 14,
    Integer: 1,
    Invalid: 0,
    Lookup: 7,
    MaxItems: 31,
    ModStat: 23,
    MultiChoice: 15,
    Note: 3,
    Number: 9,
    PageSeparator: 26,
    Recurrence: 21,
    Text: 2,
    ThreadIndex: 27,
    Threading: 13,
    URL: 11,
    User: 20,
    WorkflowEventType: 30,
    WorkflowStatus: 28
};
/**
 * Field User Selection Types
 */
exports.FieldUserSelectionType = { PeopleOnly: 0, PeopleAndGroups: 1 };
/**
 * File Template Types
*/
exports.FileTemplateType = { StandardPage: 0, WikiPage: 1, FormPage: 2 };
/**
 * Friendly Date Format
 */
exports.FriendlyDateFormat = {
    Unspecified: 0,
    Disabled: 1,
    Relative: 2
};
/**
 * List Template Types
*/
exports.ListTemplateType = {
    AccessRequest: 160,
    AdminTasks: 1200,
    Agenda: 201,
    AppDataCatalog: 125,
    Announcements: 104,
    CallTrack: 404,
    Categories: 303,
    Circulation: 405,
    Comments: 302,
    Contacts: 105,
    CustomGrid: 120,
    DataConnectionLibrary: 130,
    DataSources: 110,
    Decision: 204,
    DesignCatalog: 124,
    DeveloperSiteDraftApps: 1230,
    DiscussionBoard: 108,
    DocumentLibrary: 101,
    Events: 106,
    ExternalList: 600,
    Facility: 402,
    GanttTasks: 150,
    GenericList: 100,
    HealthReports: 1221,
    HealthRules: 1220,
    HelpLibrary: 151,
    Holidays: 421,
    HomePageLibrary: 212,
    IMEDic: 499,
    IssueTracking: 1100,
    Links: 103,
    ListTemplateCatalog: 114,
    MasterPageCatalog: 116,
    MaintenanceLogs: 175,
    MeetingObjective: 207,
    Meetings: 200,
    MeetingUser: 202,
    MySiteDocumentLibrary: 700,
    Posts: 301,
    NoCodePublic: 122,
    NoCodeWorkflows: 117,
    PictureLibrary: 109,
    SolutionCatalog: 121,
    Survey: 102,
    Tasks: 107,
    TasksWithTimelineAndHierarchy: 171,
    TextBox: 210,
    ThemeCatalog: 123,
    ThingsToBring: 211,
    Timecard: 420,
    UserInformation: 112,
    WebPageLibrary: 119,
    WebPartCatalog: 113,
    WebTemplateCatalog: 111,
    Whereabouts: 403,
    WorkflowHistory: 140,
    WorkflowProcess: 118,
    XMLForm: 115
};
/**
 * Locale LCID Types
 */
exports.LocaleLCIDType = {
    Afrikaans: 1078,
    Albanian: 1052,
    ArabicAlgeria: 5121,
    ArabicBahrain: 15361,
    ArabicEgypt: 3073,
    ArabicIraq: 2049,
    ArabicJordan: 11265,
    ArabicLebanon: 12289,
    ArabicLibya: 4097,
    ArabicMorocco: 6145,
    ArabicOman: 8193,
    ArabicQatar: 16385,
    ArabicSaudiArabia: 1025,
    ArabicSyria: 10241,
    ArabicTunisia: 7169,
    ArabicUAE: 14337,
    ArabicYemen: 9217,
    Armenian: 1067,
    AzeriCyrillic: 2092,
    AzeriLatin: 1068,
    Basque: 1069,
    Belarusian: 1059,
    Bulgarian: 1026,
    Catalan: 1027,
    ChineseHongKongSAR: 3076,
    ChineseMacaoSAR: 5124,
    ChinesePRC: 2052,
    ChineseSingapore: 4100,
    ChineseTaiwan: 1028,
    CroatianCroatia: 1050,
    Czech: 1029,
    Danish: 1030,
    Divehi: 1125,
    DutchBelgium: 2067,
    DutchNetherlands: 1043,
    EnglishAustralia: 3081,
    EnglishBelize: 10249,
    EnglishCanada: 4105,
    EnglishCaribbean: 9225,
    EnglishIreland: 6153,
    EnglishJamaica: 8201,
    EnglishNewZealand: 5129,
    EnglishPhilippines: 13321,
    EnglishSouthAfrica: 7177,
    EnglishTrinidad: 11273,
    EnglishUnitedKingdom: 2057,
    EnglishUnitedStates: 1033,
    EnglishZimbabwe: 12297,
    Estonian: 1061,
    Faeroese: 1080,
    Finnish: 1035,
    FrenchBelgium: 2060,
    FrenchCanada: 3084,
    FrenchFrance: 1036,
    FrenchLuxembourg: 5132,
    FrenchMonaco: 6156,
    FrenchSwitzerland: 4108,
    Galician: 1110,
    Georgian: 1079,
    GermanAustria: 3079,
    GermanGermany: 1031,
    GermanLiechtenstein: 5127,
    GermanLuxembourg: 4103,
    GermanSwitzerland: 2055,
    Greek: 1032,
    Gujarati: 1095,
    HebrewIsrael: 1037,
    HindiIndia: 1081,
    Hungarian: 1038,
    Icelandic: 1039,
    Indonesian: 1057,
    ItalianItaly: 1040,
    ItalianSwitzerland: 2064,
    Japanese: 1041,
    Kannada: 1099,
    Kazakh: 1087,
    Konkani: 1111,
    Korean: 1042,
    KyrgyzCyrillic: 1088,
    Latvian: 1062,
    Lithuanian: 1063,
    MacedonianFYROM: 1071,
    Malay: 1086,
    MalayBruneiDarussalam: 2110,
    Marathi: 1102,
    MongolianCyrillic: 1104,
    NorwegianBokmal: 1044,
    NorwegianNynorsk: 2068,
    PersianIran: 1065,
    Polish: 1045,
    PortugueseBrazil: 1046,
    PortuguesePortugal: 2070,
    Punjabi: 1094,
    Romanian: 1048,
    Russian: 1049,
    Sanskrit: 1103,
    SerbianCyrillic: 3098,
    SerbianLatin: 2074,
    Slovak: 1051,
    Slovenian: 1060,
    SpanishArgentina: 11274,
    SpanishBolivia: 16394,
    SpanishChile: 13322,
    SpanishColombia: 9226,
    SpanishCostaRica: 5130,
    SpanishDominicanRepublic: 7178,
    SpanishEcuador: 12298,
    SpanishElSalvador: 17418,
    SpanishGuatemala: 4106,
    SpanishHonduras: 18442,
    SpanishMexico: 2058,
    SpanishNicaragua: 19466,
    SpanishPanama: 6154,
    SpanishParaguay: 15370,
    SpanishPeru: 10250,
    SpanishPuertoRico: 20490,
    SpanishSpain: 3082,
    SpanishUruguay: 14346,
    SpanishVenezuela: 8202,
    Swahili: 1089,
    Swedish: 1053,
    SwedishFinland: 2077,
    Syriac: 1114,
    Tamil: 1097,
    Tatar: 1092,
    Telugu: 1098,
    ThaiThailand: 1054,
    Turkish: 1055,
    Ukrainian: 1058,
    UrduPakistan: 1056,
    UzbekCyrillic: 2115,
    UzbekLatin: 1091,
    Vietnamese: 1066,
};
/**
 * Page Types
 */
exports.PageType = {
    DefaultView: 0,
    DialogView: 2,
    DisplayForm: 4,
    DisplayFormDialog: 5,
    EditForm: 6,
    EditFormDialog: 7,
    Invalid: -1,
    NewForm: 8,
    NewFormDialog: 9,
    NormalView: 1,
    Page_MAXITEMS: 11,
    SolutionForm: 10,
    View: 3
};
/**
 * Personal Site Capabilities
 */
exports.PersonalSiteCapabilities = {
    Education: 16,
    Guest: 32,
    MyTasksDashboard: 8,
    None: 0,
    Profile: 1,
    Social: 2,
    Storage: 4
};
/**
 * Principal Sources
 */
exports.PrincipalSources = {
    All: 15,
    MembershipProvider: 4,
    None: 0,
    RoleProvider: 8,
    UserInfoList: 1,
    Windows: 2
};
/**
 * Principal Types
 */
exports.PrincipalTypes = {
    All: 15,
    DistributionList: 2,
    None: 0,
    SecurityGroup: 4,
    SharePointGroup: 8,
    User: 1
};
/**
 * Relationship Delete Behavior Types
 */
exports.RelationshipDeleteBehaviorType = { None: 0, Cascade: 1, Restrict: 2 };
/**
 * Reordering Rule Match Types
 */
exports.ReorderingRuleMatchType = {
    ContentTypeIs: 5,
    FileExtensionMatches: 6,
    ManualCondition: 8,
    ResultContainsKeyword: 0,
    ResultHasTag: 7,
    TitleContainsKeyword: 1,
    TitleMatchesKeyword: 2,
    UrlExactlyMatches: 4,
    UrlStartsWith: 3
};
/**
 * Role Types
 */
exports.RoleType = {
    Administrator: 5,
    Contributor: 3,
    Editor: 6,
    Guest: 1,
    None: 0,
    Reader: 2,
    WebDesigner: 4
};
/**
 * Status Pri Color
 */
exports.StatusPriColor = {
    Blue: "blue",
    Green: "green",
    Red: "red",
    Yellow: "yellow"
};
/**
 * URL Format Types
 */
exports.UrlFormatType = { Hyperlink: 0, Image: 1 };
/**
 * URL Zones
 */
exports.URLZones = { Default: 0, Intranet: 1, Internet: 2, Custom: 3, Extranet: 4 };
/**
 * User Custom Action Registration Types
 */
exports.UserCustomActionRegistrationType = { None: 0, List: 1, ContentType: 2, ProgId: 3, FileType: 4 };
/**
 * View Types
 */
exports.ViewType = {
    Calendar: 524288,
    Chart: 131072,
    Gantt: 67108864,
    Grid: 2048,
    Html: 1,
    Recurrence: 8193
};
//# sourceMappingURL=sptypes.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComplexTypes = __webpack_require__(61);
exports.ComplexTypes = ComplexTypes;
var Results = __webpack_require__(62);
exports.Results = Results;
var SPTypes = __webpack_require__(63);
exports.SPTypes = SPTypes;
//# sourceMappingURL=index.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=complexTypes.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=results.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=sptypes.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
/**
 * Base Request
 */
var BaseRequest = /** @class */ (function (_super) {
    __extends(BaseRequest, _super);
    function BaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method to execute a method
    BaseRequest.prototype.executeMethod = function (methodName, methodConfig, args) {
        var targetInfo = null;
        // See if the metadata is defined for the base object
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            // Create the target information and use the url defined for the base object
            targetInfo = {
                url: metadata.uri
            };
            // See if we are inheriting the metadata type
            if (methodConfig.inheritMetadataType) {
                // Copy the metadata type
                methodConfig.metadataType = metadata.type;
            }
            // Update the metadata uri
            this.updateMetadataUri(metadata, targetInfo);
        }
        else {
            // Copy the target information
            targetInfo = Object.create(this.targetInfo);
        }
        // Get the method information
        var methodInfo = new _1.MethodInfo(methodName, methodConfig, args);
        // Update the target information
        targetInfo.bufferFl = methodConfig.requestType == _1.RequestType.GetBuffer;
        targetInfo.data = methodInfo.body;
        targetInfo.defaultToWebFl = typeof (targetInfo.defaultToWebFl) === "undefined" && this.base ? this.base.targetInfo.defaultToWebFl : targetInfo.defaultToWebFl;
        targetInfo.method = methodInfo.requestMethod;
        // See if we are replacing the endpoint
        if (methodInfo.replaceEndpointFl) {
            // Replace the endpoint
            targetInfo.endpoint = methodInfo.url;
        }
        else if (methodInfo.url && methodInfo.url.length > 0) {
            // Ensure the end point exists
            targetInfo.endpoint = targetInfo.endpoint ? targetInfo.endpoint : "";
            // See if the endpoint exists, and the method is not a query string
            if (targetInfo.endpoint && methodInfo.url && methodInfo.url.indexOf("?") != 0) {
                // Add a "/" separator to the url
                targetInfo.endpoint += "/";
            }
            // Append the url
            targetInfo.endpoint += methodInfo.url;
        }
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this;
        obj.requestType = methodConfig.requestType;
        // Ensure the return type exists
        if (methodConfig.returnType) {
            // Add the methods
            this.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }
        // Return the object
        return obj;
    };
    // Method to execute the request
    BaseRequest.prototype.executeRequest = function (asyncFl, callback) {
        var _this = this;
        var isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        var targetInfo = isBatchRequest ? _1.Batch.getTargetInfo(this.base.batchRequests) : new _1.TargetInfo(this.targetInfo);
        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (this.xhr && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this) : null;
            }
            else {
                // Create the request
                this.xhr = new _1.XHRRequest(asyncFl, targetInfo, function () {
                    // Update the response and status
                    _this.response = _this.xhr.response;
                    _this.status = _this.xhr.status;
                    // See if we are returning a file buffer
                    if (_this.requestType == _1.RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(_this.response) : null;
                    }
                    else {
                        // Update the data object
                        _this.updateDataObject(isBatchRequest);
                        // Validate the data collection
                        isBatchRequest ? null : _this.validateDataCollectionResults().then(function () {
                            // Execute the callback
                            callback ? callback(_this) : null;
                        });
                    }
                });
            }
        }
        else if (this.xhr) {
            return this;
        }
        else {
            // Create the request
            this.xhr = new _1.XHRRequest(asyncFl, targetInfo);
            // Update the response and status
            this.response = this.xhr.response;
            this.status = this.xhr.status;
            // See if we are returning a file buffer
            if (this.requestType == _1.RequestType.GetBuffer) {
                // Return the response
                return this.response;
            }
            // Update the base object
            this.updateDataObject(isBatchRequest);
            // See if the base is a collection and has more results
            if (this["d"] && this["d"].__next) {
                // Add the "next" method to get the next set of results
                this["next"] = new Function("return this.getNextSetOfResults();");
            }
            // Return the base object
            return this;
        }
    };
    // Method to return a collection
    BaseRequest.prototype.getCollection = function (method, args) {
        // Copy the target information
        var targetInfo = Object.create(this.targetInfo);
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;
            // Update the metadata uri
            this.updateMetadataUri(metadata, targetInfo);
            // Set the endpoint
            targetInfo.endpoint = method;
        }
        else {
            // Append the method to the endpoint
            targetInfo.endpoint += "/" + method;
        }
        // Update the callback
        targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        // Return the object
        return obj;
    };
    // Method to get the next set of results
    BaseRequest.prototype.getNextSetOfResults = function () {
        // Create the target information to query the next set of results
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = this["d"].__next;
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        // Return the object
        return obj;
    };
    // Method to return a property of the base object
    BaseRequest.prototype.getProperty = function (propertyName, requestType) {
        // Copy the target information
        var targetInfo = Object.create(this.targetInfo);
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;
            // Update the metadata uri
            this.updateMetadataUri(metadata, targetInfo);
            // Set the endpoint
            targetInfo.endpoint = propertyName;
        }
        else {
            // Append the property name to the endpoint
            targetInfo.endpoint += "/" + propertyName;
        }
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        // Add the methods
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;
        // Return the object
        return obj;
    };
    // Method to update the metadata uri
    BaseRequest.prototype.updateMetadataUri = function (metadata, targetInfo) {
        // See if this is a field
        if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
        }
        else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
        }
        else if (/Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata/.test(targetInfo.url)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.split("Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata")[0] + "web/tenantappcatalog/availableapps/getbyid('" + this["ID"] + "')";
        }
    };
    // Method to validate the data collection results
    BaseRequest.prototype.validateDataCollectionResults = function () {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (xhr, resolve) {
                // Validate the response
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    // Convert the response and ensure the data property exists
                    var data = JSON.parse(xhr.response);
                    // See if there are more items to get
                    if (data.d && data.d.__next) {
                        // See if we are getting all items in the base request
                        if (_this.getAllItemsFl) {
                            // Create the target information to query the next set of results
                            var targetInfo = Object.create(_this.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;
                            // Create a new object
                            new _1.XHRRequest(true, new _1.TargetInfo(targetInfo), function (xhr) {
                                // Convert the response and ensure the data property exists
                                var data = JSON.parse(xhr.response);
                                if (data.d) {
                                    // Update the data collection
                                    _this.updateDataCollection(_this, data.d.results);
                                    // Append the raw data results
                                    _this["d"].results = _this["d"].results.concat(data.d.results);
                                    // Validate the data collection
                                    request(xhr, resolve);
                                }
                                // Resolve the promise
                                resolve();
                            });
                        }
                        else {
                            // Add a method to get the next set of results
                            _this["next"] = new Function("return this.getNextSetOfResults();");
                            // Resolve the promise
                            resolve();
                        }
                    }
                    else {
                        // Resolve the promise
                        resolve();
                    }
                }
                else {
                    // Resolve the promise
                    resolve();
                }
            };
            // Execute the request
            request(_this.xhr, resolve);
        });
    };
    return BaseRequest;
}(_1.BaseHelper));
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=baseRequest.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Base Execution
 */
var BaseExecution = /** @class */ (function (_super) {
    __extends(BaseExecution, _super);
    function BaseExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method to execute this request as a batch request
    BaseExecution.prototype.batch = function (arg) {
        var callback = null;
        var appendFl = false;
        // See if the input is a boolean
        if (typeof (arg) === "boolean") {
            // Set the flag
            appendFl = arg;
        }
        else {
            // Set the callback
            callback = arg;
        }
        // Set the base
        this.base = this.base ? this.base : this;
        // See if we are appending this request
        if (appendFl && this.base.batchRequests) {
            // Append the request
            this.base.batchRequests[this.base.batchRequests.length - 1].push({
                targetInfo: new _1.TargetInfo(this.targetInfo)
            });
        }
        else {
            // Ensure the batch requests exist
            this.base.batchRequests = this.base.batchRequests || [];
            // Create the request
            this.base.batchRequests.push([{
                    callback: callback,
                    targetInfo: new _1.TargetInfo(this.targetInfo)
                }]);
        }
        // Return this object
        return this;
    };
    // Method to execute the request
    BaseExecution.prototype.execute = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callback = null;
        var waitFl = false;
        // Set the callback and wait flag
        switch (args.length) {
            case 1:
                callback = typeof (args[0]) === "boolean" ? callback : args[0];
                waitFl = typeof (args[0]) === "boolean" ? args[0] : waitFl;
                break;
            case 2:
                callback = args[0];
                waitFl = args[1];
                break;
        }
        // Set the base
        this.base = this.base ? this.base : this;
        // Set the response index
        this.responseIndex = this.base.responses.length;
        // Add this object to the responses
        this.base.responses.push(this);
        // See if we are waiting for the responses to complete
        if (waitFl) {
            // Wait for the responses to execute
            this.waitForRequestsToComplete(function () {
                // Execute this request
                _this.executeRequest(true, function (response) {
                    // See if there is a callback
                    if (callback) {
                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        _this.base = _this;
                        _this.base.responses = [];
                        // Execute the callback and see if it returns a promise
                        var returnVal = callback(response);
                        var waitFunc = returnVal ? returnVal.done || returnVal.then : null;
                        if (waitFunc && typeof (waitFunc) === "function") {
                            // Wait for the promise to complete
                            waitFunc(function () {
                                // Reset the base
                                _this.base = _this.parent.base;
                                // Set the wait flag
                                _this.base.waitFlags[_this.responseIndex] = true;
                            });
                            // Wait for the promise to complete
                            return;
                        }
                        // Reset the base
                        _this.base = _this.parent.base;
                    }
                    // Set the wait flag
                    _this.base.waitFlags[_this.responseIndex] = true;
                });
            }, this.responseIndex);
        }
        else {
            // Execute this request
            this.executeRequest(true, function (response) {
                // Execute the callback and see if it returns a promise
                var returnVal = callback ? callback(response) : null;
                if (returnVal && typeof (returnVal.done) === "function") {
                    // Wait for the promise to complete
                    returnVal.done(function () {
                        // Set the wait flag
                        _this.base.waitFlags[_this.responseIndex] = true;
                    });
                }
                else {
                    // Set the wait flag
                    _this.base.waitFlags[_this.responseIndex] = true;
                }
            });
        }
        // Return this object
        return this;
    };
    // Method to execute the request synchronously
    BaseExecution.prototype.executeAndWait = function () { return this.executeRequest(false); };
    // Method to wait for the parent requests to complete
    BaseExecution.prototype.waitForRequestsToComplete = function (callback, requestIdx) {
        var _this = this;
        // Loop until the requests have completed
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            var counter = 0;
            // Parse the responses to the requests
            for (var i = 0; i < _this.base.responses.length; i++) {
                var response = _this.base.responses[i];
                // See if we are waiting until a specified index
                if (requestIdx == counter++) {
                    break;
                }
                // Return if the request hasn't completed
                if (response.xhr == null || !response.xhr.completedFl) {
                    return;
                }
                // Ensure the wait flag is set for the previous request
                if (counter > 0 && _this.base.waitFlags[counter - 1] != true) {
                    return;
                }
            }
            // Clear the interval
            lib_1.ContextInfo.window.clearInterval(intervalId);
            // Execute the callback
            callback();
        }, 10);
    };
    return BaseExecution;
}(_1.BaseRequest));
exports.BaseExecution = BaseExecution;
//# sourceMappingURL=baseExecution.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    function Base(targetInfo) {
        var _this = _super.call(this) || this;
        // Default the properties
        _this.targetInfo = Object.create(targetInfo || {});
        _this.responses = [];
        _this.requestType = 0;
        _this.waitFlags = [];
        return _this;
    }
    // Method to wait for the requests to complete
    Base.prototype.done = function (resolve) {
        var _this = this;
        // Ensure the base is set
        this.base = this.base ? this.base : this;
        // Ensure the response index is set
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;
        // Wait for the responses to execute
        this.waitForRequestsToComplete(function () {
            var responses = _this.base.responses;
            // Clear the responses
            _this.base.responses = [];
            // Clear the wait flags
            _this.base.waitFlags = [];
            // Resolve the request
            resolve ? resolve.apply(_this, responses) : null;
        });
    };
    // Method to get the request information
    Base.prototype.getInfo = function () { return (new _1.TargetInfo(this.targetInfo)).requestInfo; };
    // Method to stringify the object
    Base.prototype.stringify = function () {
        // Stringify the object
        return JSON.stringify({
            response: this.response,
            status: this.status,
            targetInfo: this.targetInfo
        });
    };
    return Base;
}(_1.BaseExecution));
exports.Base = Base;
//# sourceMappingURL=base.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var _1 = __webpack_require__(0);
/**
 * Batch Requests
 */
var Batch = /** @class */ (function () {
    function Batch() {
    }
    /**
     * Methods
     */
    // Method to generate a batch request
    Batch.getTargetInfo = function (requests) {
        var batchId = "batch_" + lib_1.ContextInfo.generateGUID();
        var batchRequests = [];
        // Parse the requests
        for (var i = 0; i < requests.length; i++) {
            // Create the batch request
            batchRequests.push(this.createBatch(batchId, requests[i]));
        }
        // End the batch request
        batchRequests.push("--" + batchId + "--");
        // Return the target info
        return new _1.TargetInfo({
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    };
    // Method to generate a batch request
    Batch.createBatch = function (batchId, requests) {
        // Create the batch request
        var batch = ["--" + batchId];
        // Determine if the batch requires a change set
        var requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            var changesets = [];
            var changesetId = "changeset_" + lib_1.ContextInfo.generateGUID();
            // Parse the requests
            for (var i = 0; i < requests.length; i++) {
                var request = [];
                var targetInfo = requests[i].targetInfo;
                // Create a change set
                request.push("--" + changesetId);
                request.push("Content-Type: application/http");
                request.push("Content-Transfer-Encoding: binary");
                request.push("");
                request.push("POST " + targetInfo.requestUrl + " HTTP/1.1");
                request.push("Content-Type: application/json;odata=verbose");
                request.push("");
                targetInfo.requestData ? request.push(targetInfo.requestData) : null;
                request.push("");
                // Add the request to the change set
                changesets.push(request.join("\r\n"));
            }
            // End the change set
            changesets.push("--" + changesetId + "--");
            // Generate the change set
            var changeset = changesets.join("\r\n");
            // Add the change set information to the batch
            batch.push("Content-Type: multipart/mixed; boundary=" + changesetId);
            batch.push("Content-Length: " + changeset.length);
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push(changeset);
            batch.push("");
        }
        else if (requests[0]) {
            var targetInfo = requests[0].targetInfo;
            // Add the request to the batch
            batch.push("Content-Type: application/http");
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push("GET " + targetInfo.requestUrl + " HTTP/1.1");
            batch.push("Accept: application/json;odata=verbose");
            batch.push("");
            targetInfo.requestData ? batch.push(targetInfo.requestData) : null;
            batch.push("");
        }
        // Return the batch request
        return batch.join("\r\n");
    };
    return Batch;
}());
exports.Batch = Batch;
//# sourceMappingURL=batch.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Method Information
// This class will create the method information for the request.
/*********************************************************************************************************************************/
var MethodInfo = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function MethodInfo(methodName, methodInfo, args) {
        // Default the properties
        this.methodInfo = methodInfo;
        this.methodInfo.argValues = args;
        this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;
        // Generate the parameters
        this.generateParams();
        // Generate the url
        this.methodUrl = this.generateUrl();
    }
    Object.defineProperty(MethodInfo.prototype, "body", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // The data passed through the body of the request
        get: function () { return this.methodData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "getAllItemsFl", {
        // Flag to determine if we are getting all items
        get: function () { return this.methodInfo.getAllItemsFl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replaceEndpointFl", {
        // Flag to determine if this method replaces the endpoint
        get: function () { return this.methodInfo.replaceEndpointFl ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "requestMethod", {
        // The request method
        get: function () {
            // Return the request method if it exists
            if (typeof (this.methodInfo.requestMethod) === "string") {
                return this.methodInfo.requestMethod;
            }
            // Determine the request method, based on the request type
            switch (this.methodInfo.requestType) {
                case _1.RequestType.Delete:
                case _1.RequestType.Post:
                case _1.RequestType.PostWithArgs:
                case _1.RequestType.PostWithArgsInBody:
                case _1.RequestType.PostWithArgsInQS:
                case _1.RequestType.PostWithArgsValueOnly:
                case _1.RequestType.PostReplace:
                    return "POST";
                default:
                    return "GET";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "url", {
        // The url of the method and parameters
        get: function () { return this.methodUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInBody", {
        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetWithArgsInBody || this.methodInfo.requestType == _1.RequestType.PostWithArgsInBody; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetWithArgsInQS || this.methodInfo.requestType == _1.RequestType.PostWithArgsInQS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "isTemplate", {
        get: function () { return this.methodInfo.data ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replace", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetReplace || this.methodInfo.requestType == _1.RequestType.PostReplace; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to generate the method input parameters
    MethodInfo.prototype.generateParams = function () {
        var params = {};
        // Ensure values exist
        if (this.methodInfo.argValues == null) {
            return;
        }
        // See if the argument names exist
        if (this.methodInfo.argNames) {
            // Parse the argument names
            for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
                var name_1 = this.methodInfo.argNames[i];
                var value = this.methodInfo.argValues[i];
                // Copy the parameter value
                switch (typeof (this.methodInfo.argValues[i])) {
                    case "boolean":
                        params[name_1] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                    case "number":
                        params[name_1] = this.methodInfo.argValues[i];
                        break;
                    //case "string":
                    //params[name] = this.isTemplate || this.replace ? value : "'" + value + "'";
                    //break;
                    default:
                        params[name_1] = value;
                        break;
                }
            }
        }
        // See if the method has parameters
        var isEmpty = true;
        for (var k in params) {
            isEmpty = false;
            break;
        }
        this.methodParams = isEmpty ? null : params;
        // See if method parameters exist
        if (this.methodParams) {
            // See if a template is defined for the method data
            if (this.isTemplate) {
                // Ensure the object is a string
                if (typeof (this.methodInfo.data) !== "string") {
                    // Stringify the object
                    this.methodInfo.data = JSON.stringify(this.methodInfo.data);
                }
                // Parse the arguments
                for (var key in this.methodParams) {
                    // Replace the argument in the template
                    this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"').replace(/\n/g, ""));
                }
                // Set the method data
                this.methodData = JSON.parse(this.methodInfo.data);
            }
        }
        // See if argument values exist
        if (this.methodInfo.argValues && this.methodInfo.argValues.length > 0) {
            // See if argument names exist
            if (this.methodInfo.argNames == null) {
                // Set the method data to first argument value
                this.methodData = this.methodInfo.argValues[0];
            }
            else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                // Set the method data to the next available argument value
                this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
            }
        }
        // See if the metadata type exists
        if (this.methodInfo.metadataType) {
            // See if parameters exist
            if (this.methodInfo.argNames) {
                // Append the metadata to the first parameter, if it doesn't exist
                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] =
                    (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] || { "type": this.methodInfo.metadataType };
            }
            else {
                // Append the metadata to the parameters, if it doesn't exist
                (this.methodData || this.methodParams)["__metadata"] =
                    (this.methodData || this.methodParams)["__metadata"] || { "type": this.methodInfo.metadataType };
            }
        }
    };
    // Method to generate the method and parameters as a url
    MethodInfo.prototype.generateUrl = function () {
        var url = this.methodInfo.name;
        // See if we are deleting the object
        if (this.methodInfo.requestType == _1.RequestType.Delete) {
            // Update the url
            url = "deleteObject";
        }
        // See if we are passing the data in the body
        if (this.passDataInBody) {
            var data = this.methodData || this.methodParams;
            // Stringify the data to be passed in the body
            this.methodData = JSON.stringify(data);
        }
        // See if we are passing the data in the query string
        if (this.passDataInQS) {
            var data = this.methodParams || this.methodData;
            // Append the parameters in the query string
            url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
        }
        // See if we are replacing the arguments
        if (this.replace) {
            // Parse the arguments
            for (var key in this.methodParams) {
                // Replace the argument in the url
                url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
            }
        }
        else if (this.methodInfo.requestType == _1.RequestType.OData) {
            var oData = new _1.OData(this.methodParams["oData"]);
            // Update the url
            url = "?" + oData.QueryString;
            // Set the get all items Flag
            this.methodInfo.getAllItemsFl = oData.GetAllItems;
        }
        else if (!this.passDataInBody && !this.passDataInQS) {
            var params = "";
            // Ensure data exists
            var data = this.methodParams || this.methodData;
            if (data) {
                // Ensure the data is an object
                data = data && typeof (data) === "object" ? data : { value: data };
                // Parse the parameters
                for (var name_2 in data) {
                    var value = data[name_2];
                    value = typeof (value) === "string" ? "'" + value + "'" : value;
                    switch (this.methodInfo.requestType) {
                        // Append the value only
                        case _1.RequestType.GetWithArgsValueOnly:
                        case _1.RequestType.PostWithArgsValueOnly:
                            params += value + ", ";
                            break;
                        // Append the parameter and value
                        default:
                            params += name_2 + "=" + value + ", ";
                            break;
                    }
                }
            }
            // Set the url
            url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
        }
        // Return the url
        return url;
    };
    return MethodInfo;
}());
exports.MethodInfo = MethodInfo;
//# sourceMappingURL=methodInfo.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * OData
 */
var OData = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    // The class constructor
    function OData(oData) {
        // Default the Variables
        this._custom = oData && oData.Custom ? oData.Custom : null;
        this._expand = oData && oData.Expand ? oData.Expand : [];
        this._filter = oData && oData.Filter ? oData.Filter : null;
        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
        this._select = oData && oData.Select ? oData.Select : [];
        this._skip = oData && oData.Skip ? oData.Skip : null;
        this._top = oData && oData.Top ? oData.Top : null;
    }
    Object.defineProperty(OData.prototype, "Custom", {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        // Custom
        get: function () { return this._custom; },
        set: function (value) { this._custom = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Expand", {
        // Expand
        get: function () { return this._expand; },
        set: function (value) { this._expand = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Filter", {
        // Filter
        get: function () { return this._filter; },
        set: function (value) { this._filter = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "GetAllItems", {
        // Flag to get all items
        get: function () { return this._getAllItems; },
        set: function (value) { this._getAllItems = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "OrderBy", {
        // Order By
        get: function () { return this._orderBy; },
        set: function (value) { this._orderBy = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "QueryString", {
        // Query String
        get: function () {
            var qs = "";
            var values = [];
            // Get the query string values for the properties
            values.push(this.getQSValue("$select", this._select));
            values.push(this.getQSValue("$orderby", this._orderBy));
            this._top ? values.push("$top=" + this._top) : null;
            this._skip ? values.push("$skip=" + this._skip) : null;
            this._filter ? values.push("$filter=" + this._filter) : null;
            values.push(this.getQSValue("$expand", this._expand));
            this._custom ? values.push(this._custom) : null;
            // Parse the values
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                // Ensure a value exists
                if (value && value != "") {
                    // Append the query string value
                    qs += (qs == "" ? "" : "&") + value;
                }
            }
            // Return the query string
            return qs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Select", {
        // Select
        get: function () { return this._select; },
        set: function (value) { this._select = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Skip", {
        // Skip
        get: function () { return this._skip; },
        set: function (value) { this._skip = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Top", {
        // Top
        get: function () { return this._top; },
        set: function (value) { this._top = value; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to convert the array of strings to a query string value.
    OData.prototype.getQSValue = function (qsKey, keys) {
        // Return the query string
        return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
    };
    return OData;
}());
exports.OData = OData;
//# sourceMappingURL=oData.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * Target Information
 */
var TargetInfo = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function TargetInfo(targetInfo) {
        // Default the properties
        this.request = targetInfo || {};
        this.requestData = this.request.data;
        this.requestHeaders = this.request.requestHeader;
        this.requestMethod = this.request.method ? this.request.method : "GET";
        // Set the request url
        this.setRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "isBatchRequest", {
        // Flag to determine if this is a batch request
        get: function () { return this.request.endpoint == "$batch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "requestInfo", {
        // The request information
        get: function () {
            // Return the request information
            return {
                data: this.requestData,
                method: this.requestMethod,
                url: this.requestUrl
            };
        },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to get the domain url
    TargetInfo.prototype.getDomainUrl = function () {
        var url = lib_1.ContextInfo.document.location.href;
        // See if this is an app web
        if (lib_1.ContextInfo.isAppWeb) {
            // Set the url to the host url
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
        }
        // Split the url and validate it
        url = url.split('/');
        if (url && url.length >= 2) {
            // Set the url
            url = url[0] + "//" + url[2];
        }
        // Return the url
        return url;
    };
    // Method to get a query string value
    TargetInfo.getQueryStringValue = function (key) {
        // Get the query string
        var queryString = lib_1.ContextInfo.existsFl ? lib_1.ContextInfo.document.location.href.split('?') : [""];
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];
        // Parse the values
        var values = queryString.split('&');
        for (var i = 0; i < values.length; i++) {
            var keyValue = values[i].split('=');
            // Ensure a value exists
            if (keyValue.length == 1) {
                continue;
            }
            // See if this is the key we are looking for
            if (decodeURIComponent(keyValue[0]) == key) {
                return decodeURIComponent(keyValue[1]);
            }
        }
        // Key was not found
        return null;
    };
    // Method to set the request url
    TargetInfo.prototype.setRequestUrl = function () {
        var endpoint = this.request.endpoint ? "/" + this.request.endpoint : "";
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
        // See if we are defaulting the url for the app web
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && !this.request.overrideDefaultRequestToHostFl && this.request.url == null) {
            // Default the url to the host web
            this.request.url = hostUrl;
        }
        // Ensure the url exists
        if (this.request.url == null) {
            // Default the url to the current site/web url
            this.request.url = this.request.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        else if (/\/_api\//.test(this.request.url)) {
            // Get the url
            var url = this.request.url.toLowerCase().split("/_api/");
            // See if this is the app web and we are executing against a different web
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                // Set the request url
                this.requestUrl = this.request.url + (this.request.endpoint ? "/" + this.request.endpoint : "");
            }
            return;
        }
        // See if this is a relative url
        if (this.request.url.indexOf("http") != 0) {
            // Add the domain
            this.request.url = this.getDomainUrl() + this.request.url;
        }
        // See if this is the app web, and we are executing against a different web
        if (lib_1.ContextInfo.isAppWeb && this.request.url != lib_1.ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.request.url));
        }
        else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.request.url)
                .replace(/{{EndPoint}}/g, this.request.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    };
    return TargetInfo;
}());
exports.TargetInfo = TargetInfo;
//# sourceMappingURL=targetInfo.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * XML HTTP Request Class
 */
var XHRRequest = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function XHRRequest(asyncFl, targetInfo, callback) {
        // Default the properties
        this.asyncFl = asyncFl;
        this.onRequestCompleted = callback || targetInfo.request.callback;
        this.targetInfo = targetInfo;
        this.xhr = this.createXHR();
        // Execute the request
        this.execute();
    }
    Object.defineProperty(XHRRequest.prototype, "completedFl", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // Flag indicating the request has completed
        get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "response", {
        // The response
        get: function () { return this.xhr ? this.xhr.response : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "request", {
        // The xml http request
        get: function () { return this.xhr ? this.xhr : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestData", {
        // The data send in the body of the request
        get: function () { return this.targetInfo.requestData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestUrl", {
        // The reqest url
        get: function () { return this.xhr ? this.xhr.responseURL : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "status", {
        // The request status
        get: function () { return this.xhr ? this.xhr.status : null; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to create the xml http request
    XHRRequest.prototype.createXHR = function () {
        // See if the generic object doesn't exist
        if (typeof (XMLHttpRequest) !== "undefined") {
            // Create an instance of the xml http request object
            return new XMLHttpRequest();
        }
        // Try to create the request
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) { }
        // Try to create the request
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (e) { }
        // Try to create the request
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { }
        // Throw an error
        throw new Error("This browser does not support xml http requests.");
    };
    // Method to default the request headers
    XHRRequest.prototype.defaultHeaders = function () {
        // See if the custom headers exist
        if (this.targetInfo.requestHeaders) {
            // Parse the custom headers
            for (var header in this.targetInfo.requestHeaders) {
                // Add the header
                this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
            }
        }
        else {
            // Set the default headers
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
        }
        // Set the method
        this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
        // See if the request digest has been defined
        if (this.targetInfo.request.requestDigest) {
            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", this.targetInfo.request.requestDigest);
        }
        else {
            // Get the request digest
            var requestDigest = lib_1.ContextInfo.document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";
            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
        }
        // See if we are deleting or updating the data
        if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
            // Append the header for deleting/updating
            this.xhr.setRequestHeader("IF-MATCH", "*");
        }
    };
    // Method to execute the xml http request
    XHRRequest.prototype.execute = function () {
        var _this = this;
        // Ensure the xml http request exists
        if (this.xhr == null) {
            return null;
        }
        // Open the request
        this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);
        // See if we are making an asynchronous request
        if (this.asyncFl) {
            // Set the state change event
            this.xhr.onreadystatechange = function () {
                // See if the request has finished
                if (_this.xhr.readyState == 4) {
                    // Execute the request completed event
                    _this.onRequestCompleted ? _this.onRequestCompleted(_this) : null;
                }
            };
        }
        // See if we the response type is an array buffer
        // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
        if (this.targetInfo.request.bufferFl && this.asyncFl) {
            // Set the response type
            this.xhr.responseType = "arraybuffer";
        }
        else {
            // Default the headers
            this.defaultHeaders();
            // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
            if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                // Stringify the data object, if it's not an array buffer
                this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
            }
        }
        // Execute the request
        this.targetInfo.request.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
    };
    return XHRRequest;
}());
exports.XHRRequest = XHRRequest;
//# sourceMappingURL=xhrRequest.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * JS Link
 */
var _JSLink = /** @class */ (function () {
    /**
     * Constructor
     */
    function _JSLink(cfg) {
        // See if the configuration exists
        if (cfg) {
            // Set the properties
            this._baseViewID = cfg.BaseViewID;
            this._listTemplateType = cfg.ListTemplateType;
            this._onPostRender = cfg.OnPostRender;
            this._onPreRender = cfg.OnPreRender;
            this._templates = cfg.Templates;
        }
    }
    Object.defineProperty(_JSLink.prototype, "BaseViewID", {
        set: function (value) { this._baseViewID = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "ListTemplateType", {
        set: function (value) { this._listTemplateType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "OnPostRender", {
        set: function (value) { this._onPostRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "OnPreRender", {
        set: function (value) { this._onPreRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "Templates", {
        set: function (value) { this._templates = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Methods
     */
    /**
     * Returns the CSR template.
     */
    _JSLink.prototype.getTemplate = function () {
        var template = {};
        // Add the properties
        if (this._baseViewID) {
            template.BaseViewID = this._baseViewID;
        }
        if (this._listTemplateType) {
            template.ListTemplateType = this._listTemplateType;
        }
        if (this._onPostRender) {
            template.OnPostRender = this._onPostRender;
        }
        if (this._onPreRender) {
            template.OnPreRender = this._onPreRender;
        }
        if (this._templates) {
            template.Templates = this._templates;
        }
        // See if there are fields
        if (template.Templates && template.Templates.Fields) {
            var fields = {};
            // Parse the fields
            for (var _i = 0, _a = template.Templates.Fields; _i < _a.length; _i++) {
                var field = _a[_i];
                // Add the field
                fields[field.Name] = {};
                // Add the field properties
                if (field.DisplayForm) {
                    fields[field.Name].DisplayForm = field.DisplayForm;
                }
                if (field.EditForm) {
                    fields[field.Name].EditForm = field.EditForm;
                }
                if (field.NewForm) {
                    fields[field.Name].NewForm = field.NewForm;
                }
                if (field.View) {
                    fields[field.Name].View = field.View;
                }
            }
            // Update the fields
            template.Templates.Fields = fields;
        }
        // Return the template
        return template;
    };
    /**
     * Method to register the CSR override.
     */
    _JSLink.prototype.register = function () {
        // Get the template manager
        var templateManager = lib_1.ContextInfo.window.SPClientTemplates;
        templateManager = templateManager ? templateManager.TemplateManager : null;
        // Ensure it exists
        if (templateManager) {
            // Apply the customization
            templateManager.RegisterTemplateOverrides(this.getTemplate());
        }
    };
    return _JSLink;
}());
exports.JSLink = _JSLink;
//# sourceMappingURL=jslink.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var web_1 = __webpack_require__(11);
/**
 * List
 */
var _List = /** @class */ (function (_super) {
    __extends(_List, _super);
    /**
     * Constructor
     */
    function _List(listName, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "list" } });
        return _this;
    }
    // Method to get the list by the entity name.
    _List.getByEntityName = function (entityTypeName, callback, targetInfo) {
        // Query for the list
        var query = (new web_1.Web(targetInfo))
            .Lists()
            .query({
            Filter: "EntityTypeName eq '" + entityTypeName + "'",
            Top: 1
        });
        // See if the callback exists
        if (typeof (callback) != "function") {
            // Execute the request synchronously and return it
            var list = query.executeAndWait();
            return list.results ? list.results[0] : list;
        }
        // Execute the request asynchronously
        query.execute(function (lists) {
            // Execute the callback method
            callback(lists.results ? lists.results[0] : lists);
        });
    };
    return _List;
}(utils_1.Base));
exports.List = _List;
//# sourceMappingURL=list.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Navigation
 */
var _Navigation = /** @class */ (function (_super) {
    __extends(_Navigation, _super);
    /**
     * Constructor
     */
    function _Navigation(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "navigation";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "navigationservicerest" } });
        return _this;
    }
    return _Navigation;
}(utils_1.Base));
exports.Navigation = _Navigation;
//# sourceMappingURL=navigation.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// People Manager
/*********************************************************************************************************************************/
var _PeopleManager = /** @class */ (function (_super) {
    __extends(_PeopleManager, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _PeopleManager(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "peoplemanager" } });
        return _this;
    }
    return _PeopleManager;
}(utils_1.Base));
exports.PeopleManager = _PeopleManager;
//# sourceMappingURL=peopleManager.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
var _PeoplePicker = /** @class */ (function (_super) {
    __extends(_PeoplePicker, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _PeoplePicker(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
        _this.targetInfo.overrideDefaultRequestToHostFl = true;
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "peoplepicker" } });
        return _this;
    }
    return _PeoplePicker;
}(utils_1.Base));
exports.PeoplePicker = _PeoplePicker;
//# sourceMappingURL=peoplePicker.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Profile Loader
/*********************************************************************************************************************************/
var _ProfileLoader = /** @class */ (function (_super) {
    __extends(_ProfileLoader, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _ProfileLoader(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        _this.targetInfo.method = "POST";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "profileloader" } });
        return _this;
    }
    return _ProfileLoader;
}(utils_1.Base));
exports.ProfileLoader = _ProfileLoader;
//# sourceMappingURL=profileLoader.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Search
/*********************************************************************************************************************************/
var _Search = /** @class */ (function (_super) {
    __extends(_Search, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Search(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "search";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "search" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to compute the query
    _Search.prototype.getQuery = function (parameters) {
        var query = "";
        // Parse the parameters
        for (var key in parameters) {
            // Append the parameter to the query
            query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
        }
        // Return the query
        return [query];
    };
    /** The search query method */
    _Search.prototype.searchquery = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    /** The suggest method */
    _Search.prototype.suggest = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    return _Search;
}(utils_1.Base));
exports.Search = _Search;
//# sourceMappingURL=search.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var _1 = __webpack_require__(2);
/*********************************************************************************************************************************/
// Site
// The SPSite object.
/*********************************************************************************************************************************/
var _Site = /** @class */ (function (_super) {
    __extends(_Site, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Site(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "site";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "site" } });
        return _this;
    }
    // Method to get the root web
    _Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
    // Method to determine if the current user has access, based on the permissions.
    _Site.prototype.hasAccess = function (permissions) {
        // TO DO
        return true;
    };
    ;
    return _Site;
}(utils_1.Base));
exports.Site = _Site;
//# sourceMappingURL=site.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Social Feed
/*********************************************************************************************************************************/
var _SocialFeed = /** @class */ (function (_super) {
    __extends(_SocialFeed, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _SocialFeed(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "social.feed";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "socialfeed" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to post to another user's feed
    _SocialFeed.prototype.postToFeed = function (accountName, creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    // Method to post to the current user's feed
    _SocialFeed.prototype.postToMyFeed = function (creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    return _SocialFeed;
}(utils_1.Base));
exports.SocialFeed = (new _SocialFeed());
//# sourceMappingURL=socialFeed.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// User Profile
/*********************************************************************************************************************************/
var _UserProfile = /** @class */ (function (_super) {
    __extends(_UserProfile, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _UserProfile(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
        _this.targetInfo.method = "POST";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "userprofile" } });
        return _this;
    }
    return _UserProfile;
}(utils_1.Base));
exports.UserProfile = _UserProfile;
//# sourceMappingURL=userProfile.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Utility
 */
var _Utility = /** @class */ (function (_super) {
    __extends(_Utility, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Utility(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.Utilities.Utility";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "utility" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to create a wiki page
    _Utility.prototype.createWikiPage = function (listUrl, content) {
        if (content === void 0) { content = ""; }
        var parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };
        // Execute the method
        return this.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [parameters]);
    };
    // Method to send an email
    _Utility.prototype.sendEmail = function (properties) {
        // Parse the email properties
        for (var _i = 0, _a = ["To", "CC", "BCC"]; _i < _a.length; _i++) {
            var propName = _a[_i];
            var propValue = properties[propName];
            // Ensure the value exists
            if (propValue) {
                // See if it's a string
                if (typeof (propValue) === "string") {
                    // Add the results property
                    properties[propName] = { 'results': [propValue] };
                }
                else {
                    // Add the results property
                    properties[propName] = { 'results': propValue };
                }
            }
        }
        // Execute the method
        return this.executeMethod("sendEmail", {
            argNames: ["properties"],
            metadataType: "SP.Utilities.EmailProperties",
            name: "SP.Utilities.Utility.sendEmail",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [properties]);
    };
    return _Utility;
}(utils_1.Base));
exports.Utility = _Utility;
//# sourceMappingURL=utility.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * Dependencies
 * This class will ensure the core SP scripts are loaded on the page.
 */
var _Dependencies = /** @class */ (function () {
    /**
     * Constructor
     * @param callback - The method to execute after the scripts have been loaded.
     */
    function _Dependencies(callback) {
        this._callback = null;
        // Default the properties
        this._callback = callback;
        this.MAX_WAIT = 5;
        this.SCRIPTS = [
            "MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"
        ];
        // Load the dependencies
        this.loadDependencies();
    }
    Object.defineProperty(_Dependencies.prototype, "pageContextExistsFl", {
        get: function () { return lib_1.ContextInfo.webAbsoluteUrl != ""; },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to ensure the SP classes are loaded
     */
    _Dependencies.prototype.loadDependencies = function () {
        // See if the page context exists
        if (this.pageContextExistsFl) {
            // Call the callback event
            this._callback ? this._callback() : null;
        }
        else {
            // Load the required scripts
            for (var fileName in this.SCRIPTS) {
                // Create the script element
                var elScript = lib_1.ContextInfo.document.createElement("script");
                // Set the properties
                elScript.setAttribute("src", "/_layouts/15/" + fileName);
                elScript.setAttribute("type", "text/javascript");
                // Add the script element to the head
                lib_1.ContextInfo.document.head.appendChild(elScript);
            }
            // Wait for the page context to exist
            this.waitForPageContext();
        }
    };
    /**
     * Method to wait for the page context to be loaded
     */
    _Dependencies.prototype.waitForPageContext = function () {
        var counter = 0;
        // Check every 10ms
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            // See if the page context exists, and ensure we haven't hit the max attempts
            if (this.pageContextExists || ++counter >= this.MAX_WAIT) {
                // Clear the interval
                lib_1.ContextInfo.window.clearInterval(intervalId);
                // Call the callback event
                this._callback ? this._callback() : null;
            }
        }, 10);
    };
    return _Dependencies;
}());
exports.Dependencies = _Dependencies;
//# sourceMappingURL=dependencies.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var __1 = __webpack_require__(3);
var spCfg_1 = __webpack_require__(12);
/**
 * Field Schema XML
 * Helper class for generating the field schema xml
 */
exports.FieldSchemaXML = function (fieldInfo) {
    var _resolve = null;
    // Returns the schema xml for a boolean field.
    var createBoolean = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Boolean";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.defaultValue) {
            schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
        }
        schemaXml += "</Field>";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a calculated field.
    var createCalculated = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Calculated";
        // Set the result type
        switch (fieldInfo.resultType) {
            case __1.SPTypes.FieldResultType.Boolean:
                props["ResultType"] = "Boolean";
                break;
            case __1.SPTypes.FieldResultType.Currency:
                props["ResultType"] = "Currency";
                break;
            case __1.SPTypes.FieldResultType.DateOnly:
                props["Format"] = "DateOnly";
                props["ResultType"] = "DateTime";
                break;
            case __1.SPTypes.FieldResultType.DateTime:
                props["Format"] = "DateTime";
                props["ResultType"] = "DateTime";
                break;
            case __1.SPTypes.FieldResultType.Number:
                props["ResultType"] = "Number";
                break;
            default:
                props["ResultType"] = "Text";
                break;
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.formula) {
            schemaXml += "<Formula>" + fieldInfo.formula + "</Formula>";
        }
        if (fieldInfo.fieldRefs) {
            schemaXml += "<FieldRefs>";
            for (var i = 0; i < fieldInfo.fieldRefs.length; i++) {
                schemaXml += "<FieldRef Name=\"" + fieldInfo.fieldRefs[i] + "\" />";
            }
            schemaXml += "</FieldRefs>";
        }
        schemaXml += "</Field>";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a choice field.
    var createChoice = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + ">";
        if (fieldInfo.defaultValue) {
            schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
        }
        if (fieldInfo.choices) {
            schemaXml += "<CHOICES>";
            for (var i = 0; i < fieldInfo.choices.length; i++) {
                schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>";
            }
            schemaXml += "</CHOICES>";
        }
        schemaXml += "</Field>";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a date field.
    var createDate = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "DateTime";
        // Set the date/time properties
        props["Format"] = fieldInfo.format == __1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a lookup field.
    var createLookup = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";
        // Set the lookup properties
        if (fieldInfo.fieldRef) {
            props["FieldRef"] = fieldInfo.fieldRef;
        }
        if (fieldInfo.multi) {
            props["Mult"] = "TRUE";
        }
        if (fieldInfo.showField) {
            props["ShowField"] = fieldInfo.showField;
        }
        // See if the lookup name exists
        if (fieldInfo.listName) {
            // Get the web containing the list
            (new lib_1.Web(fieldInfo.webUrl))
                .Lists(fieldInfo.listName)
                .query({
                Expand: ["ParentWeb"]
            })
                .execute(function (list) {
                // Set the list and web ids
                props["List"] = list.Id;
                if (fieldInfo.webUrl) {
                    props["WebId"] = list.ParentWeb.Id;
                }
                // Resolve the request
                _resolve("<Field " + toString(props) + " />");
            });
        }
        else {
            // Set the list id
            props["List"] = fieldInfo.listId;
            // Resolve the request
            _resolve("<Field " + toString(props) + " />");
        }
    };
    // Returns the schema xml for a managed metadata field.
    var createMMS = function (fieldInfo, props) {
        // Create the value field
        var valueProps = {
            ID: "{" + lib_1.ContextInfo.generateGUID() + "}",
            Name: fieldInfo.name + "_0",
            StaticName: fieldInfo.name + "_0",
            DisplayName: fieldInfo.title + " Value",
            Type: "Note",
            Hidden: "TRUE",
            Required: "FALSE",
            ShowInViewForms: "FALSE",
            CanToggleHidden: "TRUE"
        };
        // Generate the value field schema xml
        var schemaXmlValue = "<Field " + toString(valueProps) + " />";
        // Set the mms properties
        props["Type"] = "TaxonomyFieldType";
        props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
        // Generate the mms field schema xml
        var schemaXml = [
            "<Field " + toString(props) + ">",
            "<Customization>",
            "<ArrayOfProperty>",
            "<Property>",
            "<Name>TextField</Name>",
            "<Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">" + valueProps.ID + "</Value>",
            "</Property>",
            "</ArrayOfProperty>",
            "</Customization>",
            "</Field>"
        ].join("");
        // Resolve the request
        _resolve([schemaXmlValue, schemaXml]);
    };
    // Returns the schema xml for a note field.
    var createNote = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Note";
        // Set the note properties
        if (fieldInfo.appendFl) {
            props["AppendOnly"] = "TRUE";
        }
        if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == __1.SPTypes.FieldNoteType.RichText) {
            props["RichText"] = "TRUE";
        }
        if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText) {
            props["RichTextMode"] = "FullHtml";
        }
        if (fieldInfo.numberOfLines > 0) {
            props["NumLines"] = fieldInfo.numberOfLines;
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a number field.
    var createNumber = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Number";
        // Set the number properties
        if (fieldInfo.decimals >= 0) {
            props["Decimals"] = fieldInfo.decimals;
        }
        if (fieldInfo.max != null) {
            props["Max"] = fieldInfo.max;
        }
        if (fieldInfo.min != null) {
            props["Min"] = fieldInfo.min;
        }
        if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Integer) {
            props["Decimals"] = 0;
        }
        if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Percentage) {
            props["ShowPercentage"] = "TRUE";
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a text field.
    var createText = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "Text";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a url field.
    var createUrl = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "URL";
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Returns the schema xml for a user field.
    var createUser = function (fieldInfo, props) {
        var schemaXml = null;
        // Set the field type
        props["Type"] = "User";
        // Set the user properties
        if (fieldInfo.multi) {
            props["Mult"] = "TRUE";
        }
        if (fieldInfo.selectionMode != null) {
            props["UserSelectionMode"] = fieldInfo.selectionMode;
        }
        if (fieldInfo.selectionScope != null) {
            props["UserSelectionScope"] = fieldInfo.selectionScope;
        }
        // Generate the schema
        schemaXml = "<Field " + toString(props) + " />";
        // Resolve the request
        _resolve(schemaXml);
    };
    // Method to convert the properties to a string
    var toString = function (props) {
        var properties = "";
        // Parse the properties
        for (var key in props) {
            var value = props[key];
            // Add the property
            properties += (properties ? " " : "") + key + "=\"" + props[key] + "\"";
        }
        // Return the string value
        return properties;
    };
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Set the resolve method
        _resolve = resolve;
        // See if the schema xml has been defined
        if (fieldInfo.schemaXml) {
            // Resolve the promise
            resolve(fieldInfo.schemaXml);
        }
        else {
            // Set the base properties
            var props = {};
            props["ID"] = "{" + lib_1.ContextInfo.generateGUID() + "}";
            props["Name"] = fieldInfo.name;
            props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
            props["StaticName"] = fieldInfo.name;
            props["DisplayName"] = fieldInfo.title;
            // Set the type
            switch (fieldInfo.type) {
                // Boolean
                case spCfg_1.SPCfgFieldType.Boolean:
                    createBoolean(fieldInfo, props);
                    break;
                // Calculated
                case spCfg_1.SPCfgFieldType.Calculated:
                    createCalculated(fieldInfo, props);
                    break;
                // Choice
                case spCfg_1.SPCfgFieldType.Choice:
                    createChoice(fieldInfo, props);
                    break;
                // Date/Time
                case spCfg_1.SPCfgFieldType.Date:
                    createDate(fieldInfo, props);
                    break;
                // Lookup
                case spCfg_1.SPCfgFieldType.Lookup:
                    createLookup(fieldInfo, props);
                    break;
                // MMS
                case spCfg_1.SPCfgFieldType.MMS:
                    createMMS(fieldInfo, props);
                    break;
                // Note
                case spCfg_1.SPCfgFieldType.Note:
                    createNote(fieldInfo, props);
                    break;
                // Number
                case spCfg_1.SPCfgFieldType.Number:
                    createNumber(fieldInfo, props);
                    break;
                // Text
                case spCfg_1.SPCfgFieldType.Text:
                    createText(fieldInfo, props);
                    break;
                // URL
                case spCfg_1.SPCfgFieldType.Url:
                    createUrl(fieldInfo, props);
                    break;
                // User
                case spCfg_1.SPCfgFieldType.User:
                    createUser(fieldInfo, props);
                    break;
                // Field type not supported
                default:
                    // Resolve the promise
                    resolve();
                    break;
            }
        }
    });
};
//# sourceMappingURL=fieldSchemaXML.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SharePoint Configuration Field Types
 */
exports.SPCfgFieldType = {
    Boolean: 0,
    Calculated: 1,
    Choice: 2,
    Date: 3,
    Lookup: 4,
    MMS: 5,
    Note: 6,
    Number: 7,
    Text: 8,
    Url: 9,
    User: 10
};
/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
exports.SPCfgType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
};
//# sourceMappingURL=spCfgTypes.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var mapper_1 = __webpack_require__(5);
/**
 * JSLink Helper Methods
 */
exports.JSLink = {
    // Hide event flag
    _hideEventFl: false,
    /**
     * Field to Method Mapper
     * 1 - Display Form
     * 2 - Edit Form
     * 3 - New Form
     * 4 - View
     */
    _fieldToMethodMapper: {
        'Attachments': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldAttachments_Default"],
            2: lib_1.ContextInfo.window["SPFieldAttachments_Default"],
            3: lib_1.ContextInfo.window["SPFieldAttachments_Default"]
        },
        'Boolean': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_DefaultNoEncode"],
            2: lib_1.ContextInfo.window["SPFieldBoolean_Edit"],
            3: lib_1.ContextInfo.window["SPFieldBoolean_Edit"]
        },
        'Currency': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldNumber_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Calculated': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPField_FormDisplay_Empty"],
            3: lib_1.ContextInfo.window["SPField_FormDisplay_Empty"]
        },
        'Choice': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldChoice_Edit"],
            3: lib_1.ContextInfo.window["SPFieldChoice_Edit"]
        },
        'Computed': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            3: lib_1.ContextInfo.window["SPField_FormDisplay_Default"]
        },
        'DateTime': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldDateTime_Display"],
            2: lib_1.ContextInfo.window["SPFieldDateTime_Edit"],
            3: lib_1.ContextInfo.window["SPFieldDateTime_Edit"]
        },
        'File': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldFile_Display"],
            2: lib_1.ContextInfo.window["SPFieldFile_Edit"],
            3: lib_1.ContextInfo.window["SPFieldFile_Edit"]
        },
        'Integer': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldNumber_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Lookup': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldLookup_Display"],
            2: lib_1.ContextInfo.window["SPFieldLookup_Edit"],
            3: lib_1.ContextInfo.window["SPFieldLookup_Edit"]
        },
        'LookupMulti': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldLookup_Display"],
            2: lib_1.ContextInfo.window["SPFieldLookup_Edit"],
            3: lib_1.ContextInfo.window["SPFieldLookup_Edit"]
        },
        'MultiChoice': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldMultiChoice_Edit"],
            3: lib_1.ContextInfo.window["SPFieldMultiChoice_Edit"]
        },
        'Note': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldNote_Display"],
            2: lib_1.ContextInfo.window["SPFieldNote_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNote_Edit"]
        },
        'Number': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldNumber_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Text': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldText_Edit"],
            3: lib_1.ContextInfo.window["SPFieldText_Edit"]
        },
        'URL': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldUrl_Display"],
            2: lib_1.ContextInfo.window["SPFieldUrl_Edit"],
            3: lib_1.ContextInfo.window["SPFieldUrl_Edit"]
        },
        'User': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldUser_Display"],
            2: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"],
            3: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"]
        },
        'UserMulti': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldUserMulti_Display"],
            2: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"],
            3: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"]
        }
    },
    /**
     * Methods
     */
    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    disableEdit: function (ctx, field, requireValueFl) {
        var fieldValue = ctx.CurrentFieldValue;
        // Ensure a value exists
        if (fieldValue) {
            // Update the context, based on the field type
            switch (ctx.CurrentFieldSchema.Type) {
                case "MultiChoice":
                    var regExp = new RegExp(mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString, "g");
                    // Update the field value
                    fieldValue = ctx.CurrentFieldValue
                        .replace(regExp, "; ")
                        .replace(/^; /g, "")
                        .replace(/; $/g, "");
                    break;
                case "Note":
                    // Replace the return characters
                    fieldValue = "<div>" + ctx.CurrentFieldValue.replace(/\n/g, "<br />") + "</div>";
                    break;
                case "User":
                case "UserMulti":
                    for (var i = 0; i < ctx.CurrentFieldValue.length; i++) {
                        var userValue = ctx.CurrentFieldValue[i];
                        // Add the user value
                        fieldValue +=
                            // User Lookup ID
                            userValue.EntityData.SPUserID +
                                // Delimiter
                                mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString +
                                // User Lookup Value
                                userValue.DisplayText +
                                // Optional Delimiter
                                ((i == ctx.CurrentFieldValue.length - 1 ? "" : mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString));
                    }
                    break;
            }
            ;
            // Update the current field value
            ctx.CurrentFieldValue = fieldValue;
        }
        // Determine the control mode
        var controlMode = mapper_1.SPTypes.ControlMode.Display;
        if (requireValueFl && (fieldValue == null || fieldValue == "")) {
            // Inherit the control mode
            controlMode = ctx.ControlMode;
        }
        // Return the display value of the field
        return exports.JSLink.renderField(ctx, field, controlMode);
    },
    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit: function (ctx, field) {
        // Ensure we are in grid edit mode
        if (ctx.inGridMode) {
            // Disable editing for this field
            field.AllowGridEditing = false;
            return "";
        }
        // Return the default field value html
        return exports.JSLink.renderField(ctx, field);
    },
    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView: function (ctx) {
        // Get the webpart
        var wp = exports.JSLink.getWebPart(ctx);
        if (wp) {
            // Find the list form table
            wp = wp.querySelector(".ms-formtable");
        }
        // Return the list view
        return wp;
    },
    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems: function (ctx) {
        // Return the list view items
        return ctx.ListData ? ctx.ListData.Row : [];
    },
    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems: function () {
        // Return the selected items
        return lib_1.ContextInfo.window["SP"].ListOperation.Selection.getSelectedItems();
    },
    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart: function (ctx) {
        // Return the webpart
        return lib_1.ContextInfo.document.querySelector("#WebPart" + (ctx.FormUniqueId || ctx.wpq));
    },
    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField: function (ctx, field) {
        // Ensure the hide event has been created
        if (!exports.JSLink._hideEventFl) {
            // Set the flag
            exports.JSLink._hideEventFl = true;
            // Create the event
            lib_1.ContextInfo.window.addEventListener("load", function () {
                // Query for the elements to hide
                var fieldElements = lib_1.ContextInfo.document.querySelectorAll(".hide-field");
                for (var _i = 0, fieldElements_1 = fieldElements; _i < fieldElements_1.length; _i++) {
                    var fieldElement = fieldElements_1[_i];
                    // Get the parent row
                    var parentRow = fieldElement.parentNode && fieldElement.parentNode.parentNode ? fieldElement.parentNode.parentNode : null;
                    if (parentRow) {
                        // Ensure the parent row exists
                        if (fieldElement.parentNode.getAttribute("data-field-name") != parentRow.getAttribute("data-field-name")) {
                            // Find the parent row
                            while (parentRow && parentRow.nodeName.toLowerCase() != "tr") {
                                // Update the parent node
                                parentRow = parentRow.parentNode;
                            }
                        }
                        // Hide the parent row
                        if (parentRow) {
                            parentRow.style.display = "none";
                        }
                    }
                }
            });
        }
    },
    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField: function (ctx, field) {
        // Hide the field
        exports.JSLink.hideField(ctx, field);
        // Return an empty element
        return "<div class='hide-field'></div>";
    },
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField: function (ctx, field, formType) {
        // Determine the field type
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);
        // Ensure the form type is set
        formType = formType ? formType : ctx.ControlMode;
        // Ensure a field to method mapper exists
        if (exports.JSLink._fieldToMethodMapper[fieldType] && exports.JSLink._fieldToMethodMapper[fieldType][formType]) {
            // Return the default html for this field
            var defaultHtml = exports.JSLink._fieldToMethodMapper[fieldType][formType](ctx);
            if (defaultHtml) {
                return defaultHtml;
            }
        }
        // Set the field renderer based on the field type
        var field = ctx.CurrentFieldSchema;
        var fieldRenderer = null;
        switch (field.Type) {
            case "AllDayEvent":
                fieldRenderer = new lib_1.ContextInfo.window["AllDayEventFieldRenderer"](field.Name);
                break;
            case "Attachments":
                fieldRenderer = new lib_1.ContextInfo.window["AttachmentFieldRenderer"](field.Name);
                break;
            case "BusinessData":
                fieldRenderer = new lib_1.ContextInfo.window["BusinessDataFieldRenderer"](field.Name);
                break;
            case "Computed":
                fieldRenderer = new lib_1.ContextInfo.window["ComputedFieldRenderer"](field.Name);
                break;
            case "CrossProjectLink":
                fieldRenderer = new lib_1.ContextInfo.window["ProjectLinkFieldRenderer"](field.Name);
                break;
            case "Currency":
                fieldRenderer = new lib_1.ContextInfo.window["NumberFieldRenderer"](field.Name);
                break;
            case "DateTime":
                fieldRenderer = new lib_1.ContextInfo.window["DateTimeFieldRenderer"](field.Name);
                break;
            case "Lookup":
                fieldRenderer = new lib_1.ContextInfo.window["LookupFieldRenderer"](field.Name);
                break;
            case "LookupMulti":
                fieldRenderer = new lib_1.ContextInfo.window["LookupFieldRenderer"](field.Name);
                break;
            case "Note":
                fieldRenderer = new lib_1.ContextInfo.window["NoteFieldRenderer"](field.Name);
                break;
            case "Number":
                fieldRenderer = new lib_1.ContextInfo.window["NumberFieldRenderer"](field.Name);
                break;
            case "Recurrence":
                fieldRenderer = new lib_1.ContextInfo.window["RecurrenceFieldRenderer"](field.Name);
                break;
            case "Text":
                fieldRenderer = new lib_1.ContextInfo.window["TextFieldRenderer"](field.Name);
                break;
            case "URL":
                fieldRenderer = new lib_1.ContextInfo.window["UrlFieldRenderer"](field.Name);
                break;
            case "User":
                fieldRenderer = new lib_1.ContextInfo.window["UserFieldRenderer"](field.Name);
                break;
            case "UserMulti":
                fieldRenderer = new lib_1.ContextInfo.window["UserFieldRenderer"](field.Name);
                break;
            case "WorkflowStatus":
                fieldRenderer = new lib_1.ContextInfo.window["RawFieldRenderer"](field.Name);
                break;
        }
        ;
        // Get the current item
        var currentItem = ctx.CurrentItem || ctx.ListData.Items[0];
        // Return the item's field value html
        return fieldRenderer ? fieldRenderer.RenderField(ctx, field, currentItem, ctx.ListSchema) : currentItem[field.Name];
    }
};
//# sourceMappingURL=jslink.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var parse_1 = __webpack_require__(13);
/**
 * List Form
 */
var _ListForm = /** @class */ (function () {
    /**
     * Constructor
    */
    function _ListForm(props) {
        var _this = this;
        this._cacheData = null;
        this._info = null;
        this._props = null;
        this._resolve = null;
        // Method to load the list data
        this.load = function () {
            // Clear the information
            _this._info = {
                item: _this._props.item,
                query: _this._props.query || {}
            };
            // Load the data from cache
            _this.loadFromCache();
            // Load the list data
            _this.loadListData().then(function () {
                // See if the fields have been defined
                if (_this._props.fields) {
                    // Process the fields
                    _this.processFields();
                    // Load the item data
                    _this.loadItem();
                }
                else {
                    // Load the content type
                    _this.loadDefaultContentType();
                }
            });
        };
        // Method to load the default content type
        this.loadDefaultContentType = function () {
            // See if the content type info exists
            if (_this._cacheData && _this._cacheData.ct) {
                // Try to parse the data
                try {
                    // Parse the content type
                    var ct = parse_1.parse(_this._cacheData.ct);
                    // Load the default fields
                    _this.loadDefaultFields(ct.results[0]);
                    return;
                }
                catch (_a) {
                    // Clear the cache data
                    sessionStorage.removeItem(_this._props.cacheKey);
                }
            }
            // Load the content types
            _this._info.list.ContentTypes()
                .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
                .execute(function (ct) {
                // See if we are storing data in cache
                if (_this._props.cacheKey) {
                    // Update the cache data
                    _this._cacheData = _this._cacheData || {};
                    _this._cacheData.ct = ct.stringify();
                    // Update the cache
                    sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                }
                // Resolve the promise
                _this.loadDefaultFields(ct.results[0]);
            });
        };
        // Method to load the default fields
        this.loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            // Parse the field links
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                // Get the field
                var field = _this._info.fields[fieldLink.Name];
                if (field) {
                    // Skip the content type field
                    if (field.InternalName == "ContentType") {
                        continue;
                    }
                    // Skip hidden fields
                    if (field.Hidden || fieldLink.Hidden) {
                        continue;
                    }
                    // Save the form field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._info.fields = formFields;
            // Load the item data
            _this.loadItem();
        };
        // Method to load the field data
        this.loadFieldData = function (fields) {
            // Clear the fields
            _this._info.fields = {};
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // Save the field
                _this._info.fields[field.InternalName] = field;
            }
        };
        // Method to load the data from cache
        this.loadFromCache = function () {
            // See if we are loading from cache
            if (_this._props.cacheKey) {
                // Get the data
                var data = sessionStorage.getItem(_this._props.cacheKey);
                if (data) {
                    // Try to parse the data
                    try {
                        // Set the cache data
                        _this._cacheData = JSON.parse(data);
                        // Update the list information
                        _this._info = _this._info || {};
                        _this._info.list = parse_1.parse(_this._cacheData.list);
                        // Load the field data
                        _this.loadFieldData(parse_1.parse(_this._cacheData.fields));
                    }
                    catch (_a) {
                        // Clear the cache data
                        sessionStorage.removeItem(_this._props.cacheKey);
                    }
                }
            }
        };
        // Method to load the item
        this.loadItem = function () {
            // See if the item already exist
            if (_this._info.item) {
                // Resolve the promise
                _this._resolve(_this._info);
            }
            else if (_this._props.itemId > 0) {
                // Default the select query to get all the fields by default
                _this._info.query = _this._props.query || {};
                _this._info.query.Select = _this._info.query.Select || ["*"];
                // See if we are loading the attachments
                if (_this._props.loadAttachments) {
                    // Expand the attachment files collection
                    _this._info.query.Expand = _this._info.query.Expand || [];
                    _this._info.query.Expand.push("AttachmentFiles");
                    // Select the attachment files
                    _this._info.query.Select.push("Attachments");
                    _this._info.query.Select.push("AttachmentFiles");
                }
                // Get the list item
                _this._info.list.Items(_this._props.itemId)
                    .query(_this._info.query)
                    .execute(function (item) {
                    // Save the attachments
                    _this._info.attachments = item.AttachmentFiles.results;
                    // Save the item
                    _this._info.item = item;
                    // Resolve the promise
                    _this._resolve(_this._info);
                });
            }
            else {
                // Resolve the promise
                _this._resolve(_this._info);
            }
        };
        // Method to load the list data
        this.loadListData = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the list & fields already exist
                if (_this._info.list && _this._info.fields) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the web
                var list = (new lib_1.Web(_this._props.webUrl))
                    .Lists(_this._props.listName)
                    .execute(function (list) {
                    // Save the list
                    _this._info.list = list;
                });
                // Load the fields
                list.Fields()
                    .execute(function (fields) {
                    // See if we are caching the data
                    if (_this._props.cacheKey) {
                        // Update the cache
                        _this._cacheData = _this._cacheData || {};
                        _this._cacheData.fields = fields.stringify();
                        _this._cacheData.list = _this._info.list.stringify();
                        // Cache the data
                        sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                    }
                    // Load the field data
                    _this.loadFieldData(fields);
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to process the fields
        this.processFields = function () {
            var formFields = {};
            // Parse the fields provided
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._info.fields[_this._props.fields[i]];
                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._info.fields = formFields;
        };
        // Save the properties
        this._props = props || {};
        this._props.fields = this._props.fields;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // Load the list data
            _this.load();
        });
    }
    /**
     * Methods
     */
    // Method to create an instance of the list form
    _ListForm.create = function (props) {
        // Return an instance of the list form
        return new _ListForm(props);
    };
    // Method to load the item attachments
    _ListForm.loadAttachments = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the item id exists
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles()
                    .execute(function (attachments) {
                    // Resolve the promise
                    resolve(attachments.results || []);
                });
            }
            else {
                // Resolve the promise
                resolve([]);
            }
        });
    };
    // Method to refresh an item
    _ListForm.refreshItem = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                // Update the item
                info.item = item;
                // Resolve the promise
                resolve(info);
            });
        });
    };
    // Method to remove attachments from an item
    _ListForm.prototype.removeAttachments = function (info, attachments) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var web = new lib_1.Web(info.webUrl);
            // Parse the attachments
            for (var i = 0; i < attachments.length; i++) {
                var attachment = attachments[i];
                // Get the file
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                    .delete()
                    .execute(true);
            }
            // Wait for the requests to complete
            web.done(function () {
                // Resolve the request
                resolve();
            });
        });
    };
    // Method to save attachments to an existing item
    _ListForm.saveAttachments = function (info, attachmentInfo) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                var attachments = (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles();
                // Parse the attachment information
                for (var i = 0; i < attachmentInfo.length; i++) {
                    var attachment = attachmentInfo[i];
                    // Add the attachment
                    attachments.add(attachment.name, attachment.data).execute(true);
                }
                // Wait for the requests to complete
                attachments.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Resolve the promise
                    resolve(args);
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to save a new or existing item
    _ListForm.saveItem = function (info, formValues) {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(function (response) {
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
            else {
                // Set the metadata type
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                // Add the item
                info.list.Items().add(formValues)
                    .execute(function (item) {
                    // Update the info
                    info.item = item;
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
        });
    };
    return _ListForm;
}());
exports.ListForm = _ListForm;
//# sourceMappingURL=listForm.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
var __1 = __webpack_require__(3);
var taxonomy_1 = __webpack_require__(14);
/**
 * List Form Field
 */
var _ListFormField = /** @class */ (function () {
    /**
     * Constructor
     */
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
        // Load the field
        this.load = function () {
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            }
            else {
                // Get the web
                (new lib_1.Web(_this._fieldInfo.webUrl))
                    .Lists(_this._fieldInfo.listName)
                    .Fields()
                    .getByInternalNameOrTitle(_this._fieldInfo.name)
                    .execute(function (field) {
                    // Save the field
                    _this._fieldInfo.field = field;
                    // Process the field
                    _this.processField();
                });
            }
        };
        // Method to proces the field and save its information
        this.processField = function () {
            // Update the field information
            _this._fieldInfo.defaultValue = _this._fieldInfo.field.DefaultValue;
            _this._fieldInfo.readOnly = _this._fieldInfo.field.ReadOnlyField;
            _this._fieldInfo.required = _this._fieldInfo.field.Required ? true : false;
            _this._fieldInfo.title = _this._fieldInfo.field.Title;
            _this._fieldInfo.type = _this._fieldInfo.field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._fieldInfo.field.TypeAsString;
            // Update the field info, based on the type
            switch (_this._fieldInfo.type) {
                // Choice
                case __1.SPTypes.FieldType.Choice:
                case __1.SPTypes.FieldType.MultiChoice:
                    var choices = _this._fieldInfo.field.Choices;
                    _this._fieldInfo.choices = (choices ? choices.results : null) || [];
                    _this._fieldInfo.multi = _this._fieldInfo.type == __1.SPTypes.FieldType.MultiChoice;
                    break;
                // Date/Time
                case __1.SPTypes.FieldType.DateTime:
                    var fldDate = _this._fieldInfo.field;
                    _this._fieldInfo.showTime = fldDate.DisplayFormat == __1.SPTypes.DateFormat.DateTime;
                    break;
                // Lookup
                case __1.SPTypes.FieldType.Lookup:
                    var fldLookup = _this._fieldInfo.field;
                    _this._fieldInfo.lookupField = fldLookup.LookupField;
                    _this._fieldInfo.lookupListId = fldLookup.LookupList;
                    _this._fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _this._fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
                // Number
                case __1.SPTypes.FieldType.Number:
                    var fldNumber = _this._fieldInfo.field;
                    var startIdx = fldNumber.SchemaXml.indexOf('Decimals="') + 10;
                    _this._fieldInfo.decimals = startIdx > 10 ? parseInt(fldNumber.SchemaXml.substr(startIdx, fldNumber.SchemaXml.substr(startIdx).indexOf('"'))) : 0;
                    _this._fieldInfo.maxValue = fldNumber.MaximumValue;
                    _this._fieldInfo.minValue = fldNumber.MinimumValue;
                    _this._fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    break;
                // Note
                case __1.SPTypes.FieldType.Note:
                    var fldNote = _this._fieldInfo.field;
                    _this._fieldInfo.multiline = true;
                    _this._fieldInfo.richText = fldNote.RichText;
                    _this._fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                // Text
                case __1.SPTypes.FieldType.Text:
                    _this._fieldInfo.multiline = false;
                    _this._fieldInfo.richText = false;
                    _this._fieldInfo.rows = 1;
                    break;
                // User
                case __1.SPTypes.FieldType.User:
                    var fldUser = _this._fieldInfo.field;
                    _this._fieldInfo.allowGroups = fldUser.SelectionMode == __1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _this._fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                // Default
                default:
                    // See if this is an MMS field
                    if (_this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _this._fieldInfo.field;
                        _this._fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _this._fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _this._fieldInfo.termSetId = fldMMS.TermSetId;
                        _this._fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
            // Resolve the promise
            _this._resolve(_this._fieldInfo);
        };
        // Save the properties and field information
        this._fieldInfo = props || {};
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            }
            else {
                // Load the field
                _this.load();
            }
        });
    }
    /**
     * Methods
     */
    // Method to create an instance of the list form field
    _ListFormField.create = function (props) {
        // Return an instance of the list form field
        return new _ListFormField(props);
    };
    // Method to load the lookup data
    _ListFormField.loadLookupData = function (info, queryTop) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current site collection
            (new lib_1.Site())
                .openWebById(info.lookupWebId)
                .execute(function (web) {
                // Get the list
                web.Lists()
                    .getById(info.lookupListId)
                    .Items()
                    .query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                })
                    .execute(function (items) {
                    // Resolve the promise
                    resolve(items.results);
                });
            });
        });
    };
    // Method to load the mms data
    _ListFormField.loadMMSData = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the term set
            taxonomy_1.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                // Get the target root term
                var root = taxonomy_1.Taxonomy.findById(termSet, info.termId);
                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = taxonomy_1.Taxonomy.findById(termSet, info.termSetId);
                }
                // Resolve the request
                resolve(taxonomy_1.Taxonomy.toArray(root));
            });
        });
    };
    // Method to load the mms value field
    _ListFormField.loadMMSValueField = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if we are allowing multiple values
            if (info.multi) {
                // Get the web
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Fields()
                    .getByInternalNameOrTitle(info.name + "_0")
                    .execute(function (field) {
                    // See if the field exists
                    if (field.existsFl) {
                        // Resolve the promise
                        resolve(field);
                    }
                    else {
                        // Log
                        console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                    }
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    return _ListFormField;
}());
exports.ListFormField = _ListFormField;
//# sourceMappingURL=listFormField.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * Loader
 */
exports.Loader = {
    // Flag to determine if the SharePoint core libraries have been loaded
    loaded: false,
    // Method to wait for the SharePoint core libraries to be loaded
    waitForSPLibs: function (callback, timeout, loadLibraries) {
        var counter = 0;
        // Default the flag to load the libraries
        loadLibraries = typeof (loadLibraries) === "boolean" ? loadLibraries : false;
        // Default the timeout (5 seconds)
        timeout = typeof (timeout) === "number" ? timeout : 2500;
        // Determine the number of iterations
        var maxLoops = timeout / 25;
        // See if the flag has already been set
        if (_this.loaded) {
            // Execute the callback
            callback();
            return;
        }
        // See if we are loading the libraries
        if (loadLibraries) {
            // Parse the files to load
            ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"].every(function (fileName) {
                // Create the script element
                var el = lib_1.ContextInfo.document.createElement("script");
                // Set the properties
                el.setAttribute("src", "/_layouts/15/" + fileName);
                el.setAttribute("type", "text/javascript");
                // Add the element to the head
                lib_1.ContextInfo.document.head.appendChild(el);
                // Continue the loop
                return true;
            });
        }
        // Loop until the libraries are loaded
        var intervalId = setInterval(function () {
            var maxLoopFl = ++counter > maxLoops;
            // See if the page context exists or if we have hit the max attempts
            if (lib_1.ContextInfo.existsFl || maxLoopFl) {
                // Stop the loop
                clearInterval(intervalId);
                // Execute the callback
                callback();
            }
        }, 25);
    }
};
//# sourceMappingURL=loader.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ribbon Link
 */
exports.RibbonLink = function (props) {
    var link = null;
    // Default the append flag
    var appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : false;
    // Get the ribbon top bar
    var topBar = document.querySelector("#RibbonContainer-TabRowRight");
    if (topBar) {
        // Get the link
        link = topBar.querySelector("#" + props.id);
        if (link == null) {
            // Create the link
            link = document.createElement("a");
            link.className = "ms-promotedActionButton " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.innerHTML = "<span class='ms-promotedActionButton-text'>" + props.title + "</span>";
            link.id = props.id;
            link.onclick = props.onClick;
            // Add the link
            appendFl ? topBar.appendChild(link) : topBar.insertBefore(link, topBar.firstChild);
        }
    }
    // Return the link
    return link;
};
//# sourceMappingURL=ribbonLink.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Suite Bar Link
 */
exports.SuiteBarLink = function (props) {
    var link = null;
    // Default the append flag
    var appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : true;
    // Get the suite bar top links
    var topLinks = document.querySelector("#suiteLinksBox > ul");
    if (topLinks) {
        // Query for the link, and ensure it exists
        link = topLinks.querySelector("#" + props.id);
        if (link == null) {
            // Create a list link
            link = document.createElement("a");
            link.className = "ms-core-suiteLink-a " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.id = props.id;
            link.innerHTML = props.title;
            link.onclick = props.onClick;
            // Create the suite bar link
            var sbLink = document.createElement("li");
            sbLink.className = "ms-core-suiteLink";
            sbLink.appendChild(link);
            // Append the item to the list
            appendFl ? topLinks.appendChild(sbLink) : topLinks.insertBefore(sbLink, topLinks.firstChild);
        }
    }
    // Return the link
    return link;
};
//# sourceMappingURL=sbLink.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(2);
/**
 * Web Part
 */
var _WebPart = /** @class */ (function () {
    /**
     * Constructor
     * @param props - The webpart properties.
     */
    function _WebPart(props) {
        var _this = this;
        this._props = null;
        this._wp = null;
        /**
         * Method to add the help link to a script part editor.
         * @wpId - The webpart id.
         */
        this.addHelpLink = function () {
            // Ensure the help properties exist
            if (_this._props.helpProps) {
                // Get the webpart's "Snippet"
                var link = document.querySelector("div[webpartid='" + _this._wp.wpId + "'] a[title='Edit Snippet']");
                if (link) {
                    // Create the help link
                    var helpLink = document.createElement("a");
                    helpLink.href = _this._props.helpProps.url || "#";
                    helpLink.style.paddingLeft = "10px";
                    helpLink.setAttribute("role", "button");
                    helpLink.title = _this._props.helpProps.title || "Help";
                    helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                    helpLink.target = "_blank";
                    // Append the link
                    link.parentElement.appendChild(helpLink);
                }
            }
        };
        /**
         * Method to get the webpart
         */
        this.getWebPart = function (wpId) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the current context
                var context = SP.ClientContext.get_current();
                // Get the webpart from the current page
                var page = context.get_web().getFileByServerRelativeUrl(lib_1.ContextInfo.serverRequestPath);
                var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                var wpDef = wpMgr.get_webParts().getById(wpId);
                var wp = wpDef.get_webPart();
                context.load(wp, "Properties");
                // Execute the request
                context.executeQueryAsync(
                // Success
                function () {
                    // Resolve the promise
                    resolve({
                        Context: context,
                        Properties: wp.get_properties(),
                        WebPart: wp,
                        WebPartDefinition: wpDef,
                        WebPartId: wp.get_id()
                    });
                }, 
                // Error
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Reject the promise
                    reject(args[1] ? args[1].get_message() : "");
                });
            });
        };
        /**
         * Method to get the webpart id for a specified element
         * @param el - The target element.
         */
        this.getWebPartId = function (el) {
            // Loop until we find the webpart id
            while (el) {
                // See if this element contains the webpart id
                var wpId = el.getAttribute("webpartid");
                if (wpId) {
                    // Return the webpart id
                    return wpId;
                }
                // Check the parent
                el = el.parentElement;
            }
            // Unable to detect
            return "";
        };
        /**
         * Method to get the webpart information
         */
        this.getWebPartInfo = function () {
            var targetInfo = {
                cfg: null,
                el: null,
                wpId: null
            };
            // Ensure the element id exists
            if (_this._props.elementId) {
                // Get the webpart elements
                var elements = document.querySelectorAll("#" + _this._props.elementId);
                for (var i = 0; i < elements.length; i++) {
                    var elWebPart = elements[i];
                    // See if we have already configured this element
                    if (elWebPart.getAttribute("data-isConfigured")) {
                        continue;
                    }
                    // Get the webpart id
                    var wpId = _this.getWebPartId(elWebPart);
                    if (wpId) {
                        // See if the configuration element exists
                        var elCfg = _this._props.cfgElementId ? elWebPart.parentElement.querySelector("#" + _this._props.cfgElementId) : null;
                        if (elCfg) {
                            try {
                                // Parse the configuration
                                var cfg = JSON.parse(elCfg.innerText.trim());
                                // See if the webaprt id exists
                                if (cfg.WebPartId) {
                                    // See if it's for this webpart
                                    if (cfg.WebPartId == wpId) {
                                        // Set the target information
                                        targetInfo = {
                                            cfg: cfg,
                                            el: elWebPart,
                                            wpId: wpId
                                        };
                                        break;
                                    }
                                }
                                else {
                                    // Set the target information
                                    targetInfo = {
                                        cfg: {
                                            WebPartId: wpId
                                        },
                                        el: elWebPart,
                                        wpId: wpId
                                    };
                                    break;
                                }
                            }
                            catch (ex) {
                                // Set the target information
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                // Log
                                console.log("[sp-webpart] Error parsing the configuration for element '" + _this._props.cfgElementId + "'.");
                            }
                            // Break from the loop
                            break;
                        }
                        else {
                            // Set the target information
                            targetInfo = {
                                cfg: {
                                    WebPartId: wpId
                                },
                                el: elWebPart,
                                wpId: wpId
                            };
                            break;
                        }
                    }
                }
                // Ensure elements were found
                if (elements.length == 0) {
                    // Log
                    console.log("[sp-webpart] Error - Unable to find elements with id '" + _this._props.elementId + "'.");
                }
            }
            else {
                // Log
                console.log("[sp-webpart] The target element id is not defined.");
            }
            // Ensure the target element exists
            if (targetInfo.el) {
                // Set the configuration flag
                targetInfo.el.setAttribute("data-isConfigured", "true");
            }
            // Return the target information
            return targetInfo;
        };
        /**
         * Method to detect if a page is being edited
         */
        this.isEditMode = function () {
            var formName = MSOWebPartPageFormName ? MSOWebPartPageFormName : "";
            // Get the form
            var form = document.forms[MSOWebPartPageFormName];
            if (form) {
                // Get the wiki page mode
                var wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
                // Get the webpart page mode
                var wpPageMode = form.MSOLayout_InDesignMode ? form.MSOLayout_InDesignMode.value : null;
                // Determine if the page is being edited
                return wikiPageMode == "Edit" || wpPageMode == "1";
            }
            // Unable to determine
            return false;
        };
        /**
         * Method to render the webpart
         */
        this.render = function () {
            var element = null;
            // Get the webpart information
            _this._wp = _this.getWebPartInfo();
            if (_this._wp == null || _this._wp.el == null) {
                // Log
                console.log("[sp-webpart] The target webpart element '" + _this._props.elementId + "' was not found.");
                return;
            }
            // See if the page is being edited
            var returnVal = null;
            if (_this.isEditMode()) {
                // Add the help link
                _this.addHelpLink();
                // Call the render event
                if (_this._props.onRenderEdit) {
                    // Execute the render edit event
                    returnVal = _this._props.onRenderEdit(_this._wp);
                }
            }
            else {
                // See if the configuration is defined, but has no value
                if (_this._wp.cfg || (_this._props.cfgElementId || "").length == 0) {
                    // Execute the render edit event
                    returnVal = _this._props.onRenderDisplay(_this._wp);
                }
                else {
                    // Render a message
                    _this._wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
                }
            }
            // See if a promise was returned
            if (returnVal && returnVal.then) {
                // Wait for the request to complete
                returnVal.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Execute the post render event
                    _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
                });
            }
            else {
                // Execute the post render event
                _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
            }
        };
        // Set the properties
        this._props = props || {};
        // Add a load event
        window.addEventListener("load", function () {
            // Render the component
            _this.render();
        });
    }
    // Method to create an instance of the webpart
    _WebPart.create = function (props) {
        // Return an instance of the webpart
        return new _WebPart(props);
    };
    return _WebPart;
}());
exports.WebPart = _WebPart;
//# sourceMappingURL=webpart.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Modal Dialog
 */
exports.ModalDialog = {
    // Closes the dialog
    close: function (dialogResult) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.close(dialogResult); });
    },
    // Close the dialog
    commonModalDialogClose: function (dialogResult, returnVal) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.commonModalDialogClose(dialogResult, returnVal); });
    },
    // Open a dialog
    commonModalDialogOpen: function (url, options, callback, args) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.commonModalDialogOpen(url, options, callback, args); });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (SP && SP.UI && SP.UI.ModalDialog) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.ModalDialog", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Opens a pop-up page
    OpenPopUpPage: function (url, callback, width, height) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.OpenPopUpPage(url, callback, width, height); });
    },
    // Refreshes the page
    RefreshPage: function (dialogResult) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.RefreshPage(dialogResult); });
    },
    // Shows a modal dialog
    showModalDialog: function (options) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.showModalDialog(options); });
    },
    // Shows a pop-up dialog
    ShowPopupDialog: function (url) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.ShowPopupDialog(url); });
    },
    // Shows a wait screen
    showWaitScreenSize: function (title, message, callback, height, width) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.showWaitScreenSize(title, message, callback, height, width); });
    },
    // Shows a wait screen w/ no close button
    showWaitScreenWithNoClose: function (title, message, height, width) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModalDialog.showWaitScreenWithNoClose(title, message, height, width); });
    }
};
/**
 * Notification
 */
exports.Notify = {
    // Adds a notification
    addNotification: function (html, sticky) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library and call the method
            exports.Notify.load().then(function () { resolve(SP.UI.Notify.addNotification(html, sticky)); });
        });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (SP && SP.UI && SP.UI.Notify) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.Notify", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Removes a notification
    removeNotification: function (id) {
        // Load the library and call the method
        exports.Notify.load().then(function () { SP.UI.Notify.removeNotification(id); });
    }
};
/**
 * Status
 */
exports.Status = {
    // Adds a status
    addStatus: function (title, html, prepend) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library
            exports.Status.load().then(function () {
                // Add the status and resolve the promise
                resolve(SP.UI.Status.addStatus(title, html, prepend));
            });
        });
    },
    // Appends a status
    appendStatus: function (id, title, html) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the library
            exports.Status.load().then(function () {
                // Add the status and resolve the promise
                resolve(SP.UI.Status.appendStatus(id, title, html));
            });
        });
    },
    // Method to ensure the core library is loaded
    load: function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if the class exists
            if (SP && SP.UI && SP.UI.Status) {
                resolve();
            }
            else {
                // Wait for the core script to be loaded
                SP.SOD.executeFunc("sp.js", "SP.UI.Status", function () {
                    // Resolve the promise
                    resolve();
                });
            }
        });
    },
    // Removes all status messages
    removeAllStatus: function (hide) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.removeAllStatus(hide); });
    },
    // Removes a status
    removeStatus: function (id) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.removeStatus(id); });
    },
    // Sets the status color
    setStatusPriColor: function (id, color) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.setStatusPriColor(id, color); });
    },
    // Updates the status
    updateStatus: function (id, html) {
        // Load the library and call the method
        exports.Status.load().then(function () { SP.UI.Status.updateStatus(id, html); });
    }
};
//# sourceMappingURL=sp.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(7);
exports.Helper = helper_1.Types;
var mapper_1 = __webpack_require__(5);
exports.SP = mapper_1.Types;
var utils_1 = __webpack_require__(0);
exports.Util = utils_1.Types;
//# sourceMappingURL=types.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helper = __webpack_require__(7);
var Lib = __webpack_require__(2);
var Mapper = __webpack_require__(5);
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 3.49,
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Helper: {
        App: Helper.App,
        Dependencies: Helper.Dependencies,
        FieldSchemaXML: Helper.FieldSchemaXML,
        JSLink: Helper.JSLink,
        ListForm: Helper.ListForm,
        ListFormField: Helper.ListFormField,
        Loader: Helper.Loader,
        parse: Helper.parse,
        RibbonLink: Helper.RibbonLink,
        SP: Helper.SP,
        SPConfig: Helper.SPConfig,
        SuiteBarLink: Helper.SuiteBarLink,
        Taxonomy: Helper.Taxonomy,
        WebPart: Helper.WebPart
    },
    List: function (listName, targetInfo) { return new Lib.List(listName, targetInfo); },
    Navigation: function (url, targetInfo) { return new Lib.Navigation(url, targetInfo); },
    PeopleManager: function (targetInfo) { return new Lib.PeopleManager(targetInfo); },
    PeoplePicker: function (targetInfo) { return new Lib.PeoplePicker(targetInfo); },
    ProfileLoader: function (targetInfo) { return new Lib.ProfileLoader(targetInfo); },
    Search: function (url, targetInfo) { return new Lib.Search(url, targetInfo); },
    Site: function (url, targetInfo) { return new Lib.Site(url, targetInfo); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
    UserProfile: function (targetInfo) { return new Lib.UserProfile(targetInfo); },
    Utility: function (url, targetInfo) { return new Lib.Utility(url, targetInfo); },
    Web: function (url, targetInfo) { return new Lib.Web(url, targetInfo); }
};
// See if the library doesn't exist, or is an older version
var global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < exports.$REST.__ver) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = exports.$REST;
    // Alert other scripts this library is loaded
    SP ? SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest.js") : null;
}
//# sourceMappingURL=rest.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Pivot
 */
exports.Pivot = function (props) {
    var _pivot = null;
    // Ensure the element exists
    if (props.el) {
        // Render a pivot
        props.el.innerHTML = _1.Templates.Pivot(props);
        // Initialize the pivot
        _pivot = new _1.fabric.Pivot(props.el.querySelector(".ms-Pivot"));
        // Parse the tab links
        var links = props.el.querySelectorAll(".ms-Pivot-link");
        for (var i = 0; i < links.length; i++) {
            // Parse the tabs
            for (var j = 0; j < props.tabs.length; j++) {
                var tab = props.tabs[j];
                // See if a click event exists
                if (tab.onClick) {
                    // Add a click event
                    links[i].addEventListener("click", tab.onClick);
                }
            }
        }
    }
    // Return the pivot
    return _pivot;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Spinner
 */
exports.Spinner = function (props) {
    var _spinner = null;
    // Method to get the component
    var get = function get() {
        // Return the spinner
        return _spinner;
    };
    // Ensure the element exists
    if (props.el) {
        // Render a spinner
        props.el.innerHTML = _1.Templates.Spinner(props);
        // Initialize the spinner
        _spinner = new _1.fabric.Spinner(props.el.querySelector(".ms-Spinner"));
    }
    // Return the spinner
    return {
        get: get
    };
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Table
 */
exports.Table = function (props) {
    // Returns the fabric component
    var get = function get() {
        return _table;
    };
    // Returns the selected table rows
    var getSelectedRows = function getSelectedRows() {
        return _table.container.querySelectorAll("tbody>tr.is-selected");
    };
    // Create the table
    props.el.innerHTML = _1.Templates.Table(props);
    var _table = new _1.fabric.Table(props.el.querySelector(".ms-Table"));
    // Return the table
    return {
        get: get,
        getSelectedRows: getSelectedRows
    };
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Text Field Types
 */
var TextFieldTypes;
(function (TextFieldTypes) {
    TextFieldTypes[TextFieldTypes["Default"] = 0] = "Default";
    TextFieldTypes[TextFieldTypes["Multi"] = 1] = "Multi";
    TextFieldTypes[TextFieldTypes["Underline"] = 2] = "Underline";
})(TextFieldTypes = exports.TextFieldTypes || (exports.TextFieldTypes = {}));
/**
 * Text Field
 */
exports.TextField = function (props) {
    // Method to get the fabric component
    var get = function get() {
        // Return the textfield
        return _textfield;
    };
    // Method to get the value
    var getValue = function getValue() {
        // Get the text field
        return _textfield._textField.value || "";
    };
    // Method to set the error message
    var setErrorMessage = function setErrorMessage(message) {
        // Get the error message
        var errorMessage = _textfield._container.querySelector(".error");
        if (errorMessage) {
            // Set the error message
            errorMessage.innerHTML = message || "";
        }
    };
    // Method to set the value
    var setValue = function setValue(value) {
        // Get the text field
        _textfield._textField.value = value || "";
    };
    // Method to validate the value
    var validate = function validate(value) {
        // Clear the error message
        setErrorMessage("");
        // See if this field is required
        if (props.required && (value || "").length == 0) {
            // Set the error message
            setErrorMessage("This field is required");
            // Validation failed
            return false;
        }
        // Validation passed
        return true;
    };
    // Add the textfield html
    props.el.innerHTML = _1.Templates.TextField(props);
    // Create the textfield
    var _textfield = new _1.fabric.TextField(props.el.firstElementChild);
    var _value = props.value || "";
    // The change event
    var onChange = function onChange() {
        var value = getValue().trim();
        // See if the value is the same
        if (value == _value) {
            return;
        }
        // Update the value
        _value = value;
        // Validate the value
        if (validate(value) && props.onChange) {
            // Call the change event
            props.onChange(value);
        }
    };
    // Set the blur event
    _textfield._textField.addEventListener("blur", onChange);
    // Set the change event
    _textfield._textField.addEventListener("change", onChange);
    // Set the focus event
    _textfield._textField.addEventListener("focus", onChange);
    // Validate the textfield
    validate(props.value);
    // Return the text field
    return {
        get: get,
        getValue: getValue,
        setErrorMessage: setErrorMessage,
        setValue: setValue
    };
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(1);
/**
 * Toggle
 */
exports.Toggle = function (props) {
    // Method to get the toggle element
    var get = function get() {
        // Returns the toggle element
        return props.el.querySelector(".ms-Toggle");
    };
    // Method to get the fabric component
    var getFabricComponent = function getFabricComponent() {
        // Return the toggle
        return _toggle;
    };
    // Method to get the value
    var getValue = function getValue() {
        // Get the toggle value
        return _toggle ? _toggle._container.querySelector(".ms-Toggle-field").className.indexOf("is-selected") > 0 : false;
    };
    // Add the toggle html
    props.el.innerHTML = _1.Templates.Toggle(props);
    // Get the toggle
    var toggle = get();
    // Set the toggle click event
    toggle.onclick = function () {
        // Execute the change event
        props.onChange ? props.onChange(getValue()) : null;
    };
    // Create the toggle
    var _toggle = new _1.fabric.Toggle(toggle);
    // Return the toggle
    return {
        get: get,
        getFabricComponent: getFabricComponent,
        getValue: getValue
    };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Button
 */
exports.Button = function (props) {
    // Return the template
    return [props.href ? '<a href="' + props.href + '">' : '', '<button class="ms-Button ' + (props.className || "") + '"' + (props.disable ? " disabled" : "") + '>', '<span class="ms-Button-label">' + (props.text || "") + '</span>', '</button>', props.href ? '</a>' : ''].join('\n');
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(1);
/**
 * Callout
 */
exports.Callout = function (props) {
    // Set the class name
    var className = props.className || "";
    switch (props.type) {
        case __1.CalloutTypes.Action:
            className += " " + "ms-Callout--actionText";
            break;
        case __1.CalloutTypes.Close:
            className += " " + "ms-Callout--close";
            break;
        case __1.CalloutTypes.OOBE:
            className += " " + "ms-Callout--OOBE";
            break;
        case __1.CalloutTypes.Peek:
            className += " " + "ms-Callout--peek";
            break;
        default:
            break;
    }
    // Return the template
    return ['<div class="ms-Callout is-hidden ' + className.trim() + '">', '<div class="ms-Callout-main">', props.showCloseButton ? '<button class="ms-Callout-close"><i class="ms-Icon ms-Icon--Clear"></i></button>' : '', '<div class="ms-Callout-header">', '<p class="ms-Callout-title">' + (props.title || "") + '</p>', '</div>', '<div class="ms-Callout-inner">', '<div class="ms-Callout-content">', props.content || "", props.subText ? '<div class="ms-Callout-subText">' + props.subText + '</div>' : '', '</div>', '<div class="ms-Callout-actions">', props.actions || "", '</div>', '</div>', '</div>', '</div>'].join('\n');
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CheckBox
 */
exports.CheckBox = function (props) {
    // Return the template
    return ['<div class="ms-CheckBox ' + (props.className || "") + '">', '<input tabindex="-1" type="checkbox" class="ms-CheckBox-input"></input>', '<label role="checkbox" class="ms-CheckBox-field field-label' + (props.disable ? " is-disabled" : "") + '" tabindex="0" aria-checked="" name="checkbox' + props.label + '">', '<span class="ms-Label' + (props.required ? ' is-required' : '') + '">' + props.label + '</span>', '</label>', '</div>'].join('\n');
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(4);
/**
 * Command Bar
 */
exports.CommandBar = function (props) {
    // Render the button
    var renderButtons = function renderButtons(buttonProps) {
        if (buttonProps === void 0) {
            buttonProps = [];
        }
        var buttons = [];
        // Parse the buttons
        for (var i = 0; i < buttonProps.length; i++) {
            // Add the button
            buttons.push(_1.CommandButton(buttonProps[i]));
        }
        // Return the buttons
        return buttons.join('\n');
    };
    // Return the template
    return ['<div class="ms-CommandBar ' + (props.className || "") + '">', '<div class="ms-CommandBar-sideCommands">', renderButtons(props.sideCommands), '</div>', '<div class="ms-CommandBar-mainArea">', renderButtons(props.mainCommands), '</div>', '</div>'].join('\n');
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(4);
/**
 * Command Button
 */
exports.CommandButton = function (props) {
    // Determine the class name
    var className = [props.className || "", props.isAction ? "ms-CommandButton--actionButton" : "", props.isActive ? "is-active" : "", props.isDisabled ? "is-disabled" : "", props.isInline ? "ms-CommandButton--inline" : "", props.isPivot ? "ms-CommandButton--pivot" : "", props.isTextOnly ? "ms-CommandButton--TextOnly" : "", props.text ? "" : "ms-CommandButton--noLabel"].join(' ').trim();
    // Return the template
    return ['<div class="ms-CommandButton ' + (props.className || "") + '">', '<button class="ms-CommandButton-button">', props.icon ? '<span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--' + props.icon + '"></i></span>' : '', props.text ? '<span class="ms-CommandButton-label">' + props.text + '</span>' : '', props.menu ? '<span class="ms-CommandButton-dropdownIcon"><i class="ms-Icon ms-Icon--ChevronDown"></i></span>' : '', '</button>', props.isSplit ? '<button class="ms-CommandButton-splitIcon"><i class="ms-Icon ms-Icon--ChevronDown"></i></button>' : '', props.menu ? _1.ContextualMenu(props.menu) : '', '</div>'].join('\n');
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contextual Menu
 */
exports.ContextualMenu = function (props) {
    // Method to render the items
    var renderItems = function renderItems(items) {
        var menuItems = [];
        // Ensure items exist
        if (items && items.length > 0) {
            // Parse the items
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                // Set the class name
                var className = ["ms-ContextualMenu-link", item.isDisabled ? "is-disabled" : "", item.isSelected ? "is-selected" : ""].join(" ");
                // Add the menu item
                menuItems.push(['<li class="ms-ContextualMenu-item">', '<a class="ms-ContextualMenu-link' + item.isSelected + '" tabindex="1">' + (item.text || "") + '</a>', '</li>'].join('\n'));
            }
        }
        // Return the items
        return menuItems;
    };
    // Return the template
    return ['<ul class="ms-ContextualMenu ' + (props.className || "") + '">', renderItems(props.items), '</ul>'].join('\n');
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = __webpack_require__(4);
/**
 * Date Picker
 */
exports.DatePicker = function (props) {
    // Return the template
    return ['<div class="ms-TextField">', props.label ? templates_1.Label({ description: props.description, text: props.label }) : '', '<i class="ms-DatePicker-event ms-Icon ms-Icon--Event"></i>', '<input class="ms-TextField-field" type="text" placeholder="Select a date&hellip;">', '</div>', '<div class="ms-DatePicker-monthComponents">', '<span class="ms-DatePicker-nextMonth js-nextMonth"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>', '<span class="ms-DatePicker-prevMonth js-prevMonth"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span>', '<div class="ms-DatePicker-headerToggleView js-showMonthPicker"></div>', '</div>', '<span class="ms-DatePicker-goToday js-goToday">Go to today</span>', '<div class="ms-DatePicker-monthPicker">', '<div class="ms-DatePicker-header">', '<div class="ms-DatePicker-yearComponents">', '<span class="ms-DatePicker-nextYear js-nextYear"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>', '<span class="ms-DatePicker-prevYear js-prevYear"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span>', '</div>', '<div class="ms-DatePicker-currentYear js-showYearPicker"></div>', '</div>', '<div class="ms-DatePicker-optionGrid">', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="0">Jan</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="1">Feb</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="2">Mar</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="3">Apr</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="4">May</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="5">Jun</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="6">Jul</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="7">Aug</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="8">Sep</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="9">Oct</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="10">Nov</span>', '<span class="ms-DatePicker-monthOption js-changeDate" data-month="11">Dec</span>', '</div>', '</div>', '<div class="ms-DatePicker-yearPicker">', '<div class="ms-DatePicker-decadeComponents">', '<span class="ms-DatePicker-nextDecade js-nextDecade"><i class="ms-Icon ms-Icon--ChevronRight"></i></span>', '<span class="ms-DatePicker-prevDecade js-prevDecade"><i class="ms-Icon ms-Icon--ChevronLeft"></i></span> ', '</div>', '</div>'].join('\n');
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(4);
/**
 * Dialog
 */
exports.Dialog = function (props) {
    // Set the class name
    var className = [props.className || "", props.isBlocking ? "ms-Dialog--blocking" : "", props.isLargeHeader ? "ms-Dialog--lgHeader" : "", props.isMultiLine ? "ms-Dialog--multiline" : "", props.showCloseButton == false ? "" : "ms-Dialog--close"].join(' ').trim();
    // Parse the actions
    var actions = props.actions || [];
    var dialogActions = [];
    for (var i = 0; i < actions.length; i++) {
        // Add the dialog action
        dialogActions.push([_1.Button({
            className: "ms-Dialog-action " + actions[i].className,
            disable: actions[i].disable,
            text: actions[i].text
        })]);
    }
    // Return the template
    return ['<div class="ms-Dialog ' + className + '">', props.showCloseButton ? '<button class="ms-Dialog-button ms-Dialog-buttonClose"><i class="ms-Icon ms-Icon--Cancel"></i></button>' : '', '<div class="ms-Dialog-title">' + (props.title || "") + '</div>', '<div class="ms-Dialog-content">', props.subText ? '<p class="ms-Dialog-subText">' + props.subText + '</p>' : '', props.content || "", '</div>', actions ? '<div class="ms-Dialog-actions">' + actions + '</div>' : '', '</div>'].join('\n');
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Label
 */
exports.Label = function (props) {
    // Set the class name
    var className = [props.className || "", props.isDisabled ? "is-disabled" : "", props.isRequired ? "is-required" : ""].join(' ').trim();
    // Return the template
    return ['<label class="ms-Label ' + className + '">', props.text || "", props.description ? '<i class="ms-Icon ms-Icon--Info is-description"><span>' + props.description + '</span></i>' : '', '</label>'].join("");
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(4);
/**
 * Link Field
 */
exports.LinkField = function (props) {
    var desc = (props.value ? props.value.Description : null) || "";
    var url = (props.value ? props.value.Url : null) || "";
    // Return the template
    return ['<div class="ms-LinkField ' + (props.className || "") + '">', props.label ? _1.Label({
        className: "field-label",
        description: props.description,
        isRequired: props.required,
        text: props.label
    }) : '', '<a class="ms-Link" href="' + url + '">' + (desc || url) + '</a>', '</div>'].join("");
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * List
 */
exports.List = function (props) {
    // Return the template
    return ['<ul class="ms-List ' + (props.className || "") + '">', props.items && props.items.length > 0 ? props.items.join('\n') : '', '</ul>'].join('\n');
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * List Item
 */
exports.ListItem = function (props) {
    // Set the class name
    var className = [props.className || "", props.isDocument ? "ms-ListItem--document" : "", props.isImage ? "ms-ListItem--image" : "", props.isSelectable ? "is-selectable" : "", props.isSelected ? "is-selected" : "", props.isUnread ? "is-unread" : "", props.isUnseen ? "is-unseen" : ""].join(' ').trim();
    // Return the template
    return ['<li class="ms-ListItem ' + className + '" tabindex="0" data-value=\'' + (props.value || "") + '\'>', '<span class="ms-ListItem-primaryText">' + (props.primaryText || "") + '</span>', '<span class="ms-ListItem-secondaryText">' + (props.secondaryText || "") + '</span>', '<span class="ms-ListItem-tertiaryText">' + (props.tertiaryText || "") + '</span>', '<span class="ms-ListItem-metaText">' + (props.metaText || "") + '</span>', '<div class="ms-ListItem-selectionTarget">' + (props.selectionTarget || "") + '</div>', '<div class="ms-ListItem-actions">' + (props.actions || "") + '</div>', '</li>'].join('\n');
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(1);
/**
 * Panel
 */
exports.Panel = function (props, content) {
    // Set the class name
    var className = props.className || "";
    switch (props.panelType) {
        case __1.PanelTypes.Left:
            className += " ms-Panel--left";
            break;
        case __1.PanelTypes.Medium:
            className += " ms-Panel--md";
            break;
        case __1.PanelTypes.Large:
            className += " ms-Panel--lg";
            break;
        case __1.PanelTypes.LargeFixed:
            className += " ms-Panel--lg ms-Panel--fixed";
            break;
        case __1.PanelTypes.XLarge:
            className += " ms-Panel--xl";
            break;
        case __1.PanelTypes.XXLarge:
            className += " ms-Panel--xxl";
            break;
    }
    ;
    // Method to render the close button
    var renderCloseButton = function renderCloseButton() {
        return props.showCloseButton == false ? "" : ['<button class="ms-Panel-closeButton ms-PanelAction-close">', '<i class="ms-Panel-closeIcon ms-Icon ms-Icon--Cancel"></i>', '</button>'].join('\n');
    };
    // Return the template
    return ['<div class="ms-Panel ' + className.trim() + '">', renderCloseButton(), '<div class="ms-Panel-header">' + (props.panelHeader || "") + '</div>', '<div class="ms-Panel-contentInner">', props.headerText ? '<p class="ms-Panel-headerText">' + props.headerText + '</p>' : '', '<div class="ms-Panel-content">' + (content || props.panelContent || "") + '</div>', '</div>', '<div class="ms-Panel-footer">' + (props.panelFooter || "") + '</div>', '</div>'].join('\n');
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = __webpack_require__(4);
/**
 * People Picker
 */
exports.PeoplePicker = function (props) {
    // Group
    var group = function group(title, searchText, results) {
        if (title === void 0) {
            title = "";
        }
        if (searchText === void 0) {
            searchText = "";
        }
        // Return the template
        return ['<div class="ms-PeoplePicker-resultGroup">', '<div class="ms-PeoplePicker-resultGroupTitle">', title, '</div>', '</div>', results ? results : result(), '<button class="ms-PeoplePicker-searchMore"' + (searchText ? '' : ' style="display: none;"') + '>', '<div class="ms-PeoplePicker-searchMoreIcon">', '<i class="ms-Icon ms-Icon--Search"></i>', '</div>', '<div class="ms-PeoplePicker-searchMoreText">', searchText, '</div>', '</button>', '</div>'].join('\n');
    };
    // Header
    var header = function header() {
        // Return the template
        return templates_1.Label({
            className: "field-label",
            description: props.description,
            isRequired: props.required,
            text: props.label
        }) || "";
    };
    // Result
    var result = function result(user) {
        // Ensure the user exists
        if (user) {
            return ['<div class="ms-PeoplePicker-result" tabindex="1">', '<div class="ms-Persona ms-Persona--sm" data-user=\'' + JSON.stringify(user) + '\'>', '<div class="ms-Persona-imageArea"></div>', '<div class="ms-Persona-details">', '<div class="ms-Persona-primaryText">' + user.DisplayText + '</div>', '<div class="ms-Persona-secondaryText">' + user.EntityData.Email + '</div>', '</div>', '</div>', '<button class="ms-PeoplePicker-resultAction" style="display: none;"></button>', '</div>'].join('\n');
        }
        // Return an empty persona
        return ['<div class="ms-PeoplePicker-result" style="display: none;">', '<div class="ms-Persona"></div>', '<button class="ms-PeoplePicker-resultAction"></button>', '</div>'].join('\n');
    };
    // Results
    var results = function results(title, searchText) {
        if (title === void 0) {
            title = "";
        }
        if (searchText === void 0) {
            searchText = "";
        }
        // Return the template
        return ['<div class="ms-PeoplePicker-results">', group(title, searchText), '<div class="selected-users"></div>'].join('\n');
    };
    // Search Box
    var searchBox = function searchBox() {
        // Return the template
        return ['<div class="ms-PeoplePicker-searchBox">', '<div class="ms-TextField ms-TextField--textFieldUnderlined">', '<input class="ms-TextField-field" type="text" value="" placeholder="Search"></input>', '</div>', '</div>'].join('\n');
    };
    return {
        group: group,
        header: header,
        result: result,
        results: results,
        searchBox: searchBox
    };
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pivot
 */
exports.Pivot = function (props) {
    var tabs = [];
    var tabContents = [];
    // Parse the tabs
    for (var i = 0; i < props.tabs.length; i++) {
        var tab = props.tabs[i];
        // Set the class name
        var className_1 = tab.className || "";
        className_1 += tab.isSelected ? " is-selected" : "";
        // Add the tab
        tabs.push(['<li class="ms-Pivot-link ' + className_1 + '" data-content="' + tab.name + '" title="' + tab.name + '" tabindex="1">', tab.name, '</li>'].join('\n'));
        // Add the tab content
        tabContents.push(['<div class="ms-Pivot-content" data-content="' + tab.name + '">', tab.content, '</div>'].join('\n'));
    }
    // Set the class name
    var className = [props.className || "", props.isLarge ? "ms-Pivot--large" : "", props.isTabs ? "ms-Pivot--tabs" : ""].join(" ").trim();
    // Return the template
    return props.isFlipped ? ['<div class="ms-Pivot ' + className + '">', tabContents.join('\n'), '<ul class="ms-Pivot-links">', tabs.join('\n'), '</ul>', '</div>'].join('\n') : ['<div class="ms-Pivot ' + className + '">', '<ul class="ms-Pivot-links">', tabs.join('\n'), '</ul>', tabContents.join('\n'), '</div>'].join('\n');
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Spinner
 */
exports.Spinner = function (props) {
    // Return the template
    return ['<div class="ms-Spinner ' + (props.className || "") + '">', '<div class="ms-Spinner-label">' + (props.text || "") + '</div>', '</div>'].join('\n');
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Table
 */
exports.Table = function (props) {
    var columns = props.columns || [];
    var rows = props.rows || [];
    // Set the class name
    var className = [props.className || "", props.isFixed ? "ms-Table--fixed" : "", props.isSelectable ? "ms-Table--selectable" : ""].join(' ').trim();
    // See if we are rendering the header row
    var headerRow = props.renderHeaderRow ? ['<thead>', '<tr>', '<th>' + columns.join('</th><th>') + '</th>', '</tr>', '</thead>'].join('\n') : "";
    // Parse the rows
    var rowData = [];
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        // Add the opening row element
        rowData.push('<tr>');
        // Parse the columns
        for (var j = 0; j < columns.length; j++) {
            // Add the column element
            rowData.push('<td>' + (row[columns[j]] || "") + '</td>');
        }
        // Add the closing row element
        rowData.push('</tr>');
    }
    // Return the template
    return ['<table class="ms-Table ' + className + '">', headerRow, '<tbody>', rowData.join('\n'), '</tbody>', '</table>'].join('\n');
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = __webpack_require__(4);
var __1 = __webpack_require__(1);
/**
 * TextField
 */
exports.TextField = function (props) {
    var isUnderline = props.type != __1.TextFieldTypes.Multi && props.type != __1.TextFieldTypes.Default;
    // Set the class name
    var className = [props.className || "", props.placeholder ? "ms-TextField--placeholder" : "", props.type == __1.TextFieldTypes.Multi ? "ms-TextField--multiline" : "", isUnderline ? "ms-TextField--underlined" : ""].join(' ').trim();
    // Return the template
    return ['<div class="ms-TextField ' + className.trim() + '">', props.label ? templates_1.Label({
        className: "field-label",
        description: props.description,
        isRequired: props.required,
        text: props.label
    }) : '', props.placeholder ? '<label class="ms-Label">' + props.placeholder + '</label>' : '', props.type == __1.TextFieldTypes.Multi && props.disable != true ? '<textarea class="ms-TextField-field">' + (props.value || "") + '</textarea>' : '<input class="ms-TextField-field" type="text" value="' + (props.value || "") + '" placeholder=""' + (props.disable ? " disabled" : "") + '></input>', '<label class="ms-Label ms-fontColor-redDark error" style="color:#a80000;"></label>', '</div>'].join('\n');
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = __webpack_require__(4);
/**
 * Toggle
 */
exports.Toggle = function (props) {
    // Set the class name
    var className = props.className || "";
    if (props.disable) {
        className += " is-disabled";
    }
    // Return the template
    return [props.label ? templates_1.Label({ className: "field-label", text: props.label }) : '', '<div class="ms-Toggle ' + className.trim() + '">', props.description ? '<span class="ms-Toggle-description">' + props.description + "</span>" : '', '<input type="checkbox" class="ms-Toggle-input"></input>', '<label class="ms-Toggle-field' + (props.value ? ' is-selected' : '') + '" tabindex="0">', '<span class="ms-Label ms-Label--off">Off</span>', '<span class="ms-Label ms-Label--on">On</span>', '</label>', '</div>'].join('\n');
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
// Fabric Components
var Fabric = __webpack_require__(124);
exports.Fabric = Fabric;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
var __1 = __webpack_require__(6);
var _1 = __webpack_require__(8);
/**
 * Field
 */
exports.Field = function (props) {
    // Method to generate the choice dropdown options
    var getChoiceOptions = function getChoiceOptions(fieldinfo, selectedValues) {
        var options = [];
        // Get the current value
        var values = selectedValues || null;
        values = values && values.results ? values.results : [values];
        // Parse the options
        for (var i = 0; i < fieldinfo.choices.length; i++) {
            var choice = fieldinfo.choices[i];
            var isSelected = false;
            // Determine if this choice is selected
            for (var j = 0; j < values.length; j++) {
                // See if this choice is selected
                if (choice == values[j]) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }
            // Add the option
            options.push({
                isSelected: isSelected,
                text: choice,
                type: __1.Fabric.DropdownTypes.Item,
                value: choice
            });
        }
        // Return the options
        return options;
    };
    // Method to generate the lookup dropdown options
    var getLookupOptions = function getLookupOptions(fieldinfo, selectedValues) {
        var options = [];
        // Get the current value
        var values = props.value || null;
        values = values && values.results ? values.results : [values];
        // Parse the selected values
        for (var i = 0; i < selectedValues.length; i++) {
            var item = selectedValues[i];
            var isSelected = false;
            // See if this is a multi-lookup field
            if (fieldinfo.multi) {
                // Determine if this lookup is selected
                for (var j = 0; j < values.length; j++) {
                    var id = values[j] ? values[j].Id : null;
                    // See if this choice is selected
                    if (item.Id == id) {
                        // Set the flag and break from the loop
                        isSelected = true;
                        break;
                    }
                }
            }
            // Add the option
            options.push({
                isSelected: isSelected,
                text: item[fieldinfo.lookupField],
                type: __1.Fabric.DropdownTypes.Item,
                value: item.Id.toString()
            });
        }
        // Return the options
        return options;
    };
    // Method to get the lookup values
    var getLookupValues = function getLookupValues(fieldinfo, value) {
        var values = [];
        // See if this is a multi-lookup
        if (fieldinfo.multi) {
            var results = value && value.results ? value.results : [];
            // Parse the values
            for (var i = 0; i < results.length; i++) {
                // Add the value
                values.push(results[i].Id ? results[i].Id : results[i]);
            }
        } else {
            // Set the value
            values.push(value && value.Id > 0 ? value.Id : value);
        }
        // Return the values
        return values;
    };
    // Method to get the mms dropdown options
    var getMMSOptions = function getMMSOptions(term, selectedValues) {
        if (selectedValues === void 0) {
            selectedValues = [];
        }
        var options = [];
        // See if information exists
        if (term.info) {
            var isSelected = false;
            // Parse the selected values
            for (var i = 0; i < selectedValues.length; i++) {
                // See if this item is selected
                if (selectedValues[i] == term.info.id) {
                    isSelected = true;
                    break;
                }
            }
            // Add the heading
            options.push({
                isSelected: isSelected,
                text: term.info.name,
                type: __1.Fabric.DropdownTypes.Header,
                value: term.info.id
            });
        }
        // Parse the terms
        for (var termName in term) {
            var child = term[termName];
            var isSelected = false;
            // Skip the info and parent properties
            if (termName == "info" || termName == "parent") {
                continue;
            }
            // Get the child options
            var childOptions = getMMSOptions(child, selectedValues);
            // Parse the selected values
            for (var i = 0; i < selectedValues.length; i++) {
                // See if this item is selected
                if (selectedValues[i] == child.info.id) {
                    isSelected = true;
                    break;
                }
            }
            // Add the option
            options.push({
                isSelected: isSelected,
                options: childOptions.length > 1 ? childOptions : null,
                text: child.info.name,
                type: __1.Fabric.DropdownTypes.Item,
                value: child.info.id
            });
        }
        // Return the options
        return options;
    };
    // Method to get the MMS values
    var getMMSValues = function getMMSValues(value) {
        var values = [];
        // Parse the MMS values
        var mmsValues = (value || "").split(";#");
        for (var i = 0; i < values.length; i++) {
            var mmsValue = mmsValues[i].split("|");
            if (mmsValue[1]) {
                // Add the value
                values.push(mmsValue[1]);
            }
        }
        // Return the values
        return values;
    };
    // Method to update the value
    var _value = props.value;
    var updateValue = function updateValue(value) {
        // Update the value
        _value = value;
        // Call the change event
        props.onChange ? props.onChange(value) : null;
    };
    // Render a loading message
    var _spinner = __1.Fabric.Spinner({
        el: props.el,
        text: "Loading the field..."
    });
    // Return a promise
    return new Promise(function (resolve, reject) {
        // See if we are displaying the field
        if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.Display) {
            // Update the value, based on the type
            var value = props.value || "";
            switch (props.fieldInfo.field.FieldTypeKind) {
                // Lookup
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                    var results = value.results ? value.results : [value];
                    var values = [];
                    // Parse the results
                    for (var i = 0; i < results.length; i++) {
                        var result = results[i] ? results[i][props.fieldInfo.field.LookupField] : null;
                        // Ensure the value exists
                        if (result) {
                            // Add the value
                            values.push(result);
                        }
                    }
                    // Update the value
                    value = values.join(", ");
                    break;
                // Multi-Choice
                case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                    // Update the values
                    value = value.results ? value.results.join(", ") : value;
                    break;
                // URL
                case gd_sprest_1.SPTypes.FieldType.URL:
                    // Resolve the promise
                    resolve({
                        fieldInfo: props.fieldInfo,
                        element: __1.Fabric.LinkField({
                            className: props.className,
                            description: props.fieldInfo.field.Description,
                            disable: true,
                            el: props.el,
                            label: props.fieldInfo.field.Title,
                            required: props.fieldInfo.required,
                            value: value
                        })
                    });
                    return;
                // User
                case gd_sprest_1.SPTypes.FieldType.User:
                    var userNames = [];
                    var userValues = value && value.results ? value.results : [value];
                    // Parse the user values
                    for (var i = 0; i < userValues.length; i++) {
                        // Ensure the name exists
                        if (userValues[i] && userValues[i].Title) {
                            // Add the user name
                            userNames.push(userValues[i].Title);
                        }
                    }
                    // Update the value
                    value = userNames.join(", ");
                    return;
            }
            // See if this is a taxonomy field
            if (props.fieldInfo.field.TypeAsString.startsWith("TaxonomyFieldType")) {
                var mmsValues = (value || "").split(";#");
                value = [];
                // Parse the values
                for (var i = 0; i < mmsValues.length; i++) {
                    // Add the term label
                    value.push(mmsValues[i].split("|")[0]);
                }
                // Update the value
                value = value.join(", ");
            }
            // Resolve the promise
            resolve({
                fieldInfo: props.fieldInfo,
                element: __1.Fabric.TextField({
                    className: props.className,
                    description: props.fieldInfo.field.Description,
                    disable: true,
                    el: props.el,
                    label: props.fieldInfo.field.Title,
                    required: props.fieldInfo.required,
                    type: __1.Fabric.TextFieldTypes.Underline,
                    value: value
                })
            });
            // Return
            return;
        }
        // Load the field information
        _1.ListFormField.create(props.fieldInfo).then(function (fieldInfo) {
            // Set the value
            var value = props.controlMode == gd_sprest_1.SPTypes.ControlMode.New ? props.fieldInfo.defaultValue : props.value;
            // Render the field based on the type
            switch (fieldInfo.type) {
                // Boolean Field
                case gd_sprest_1.SPTypes.FieldType.Boolean:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.Toggle({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            value: value
                        })
                    });
                    break;
                // Calculated Field
                case gd_sprest_1.SPTypes.FieldType.Calculated:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.TextField({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: true,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            required: fieldInfo.required,
                            type: __1.Fabric.TextFieldTypes.Underline,
                            value: value
                        })
                    });
                    break;
                // Choice Field
                case gd_sprest_1.SPTypes.FieldType.Choice:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.Dropdown({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            options: getChoiceOptions(fieldInfo, value),
                            required: fieldInfo.required,
                            value: value
                        })
                    });
                    break;
                // Date/Time
                case gd_sprest_1.SPTypes.FieldType.DateTime:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.DatePicker({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            required: fieldInfo.required,
                            showTime: fieldInfo.showTime,
                            value: value
                        })
                    });
                    break;
                // Lookup Field
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                    // Get the drop down information
                    _1.ListFormField.loadLookupData(fieldInfo, 500).then(function (items) {
                        resolve({
                            fieldInfo: fieldInfo,
                            element: __1.Fabric.Dropdown({
                                className: props.className,
                                description: fieldInfo.field.Description,
                                disable: props.disabled,
                                el: props.el,
                                label: fieldInfo.title,
                                multi: fieldInfo.multi,
                                onChange: updateValue,
                                options: getLookupOptions(fieldInfo, items),
                                required: fieldInfo.required,
                                value: getLookupValues(fieldInfo, value)
                            })
                        });
                    });
                    break;
                // Multi-Choice Field
                case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.Dropdown({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            multi: true,
                            onChange: updateValue,
                            options: getChoiceOptions(fieldInfo, value),
                            required: fieldInfo.required,
                            value: value ? value.results : value
                        })
                    });
                    break;
                // Note Field
                case gd_sprest_1.SPTypes.FieldType.Note:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.TextField({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            required: fieldInfo.required,
                            type: __1.Fabric.TextFieldTypes.Multi,
                            value: value
                        })
                    });
                    break;
                // Number or Currency Field
                case gd_sprest_1.SPTypes.FieldType.Number:
                case gd_sprest_1.SPTypes.FieldType.Currency:
                    var numberInfo = fieldInfo;
                    resolve({
                        fieldInfo: numberInfo,
                        element: __1.Fabric.NumberField({
                            className: props.className,
                            decimals: numberInfo.decimals,
                            description: numberInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: numberInfo.title,
                            maxValue: numberInfo.maxValue,
                            minValue: numberInfo.minValue,
                            onChange: updateValue,
                            required: numberInfo.required,
                            type: numberInfo.showAsPercentage ? __1.Fabric.NumberFieldTypes.Percentage : numberInfo.decimals == 0 ? __1.Fabric.NumberFieldTypes.Integer : __1.Fabric.NumberFieldTypes.Number,
                            value: value
                        })
                    });
                    break;
                // Text Field
                case gd_sprest_1.SPTypes.FieldType.Text:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.TextField({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            required: fieldInfo.required,
                            type: __1.Fabric.TextFieldTypes.Underline,
                            value: value
                        })
                    });
                    break;
                // Url Field
                case gd_sprest_1.SPTypes.FieldType.URL:
                    resolve({
                        fieldInfo: fieldInfo,
                        element: __1.Fabric.LinkField({
                            className: props.className,
                            description: fieldInfo.field.Description,
                            disable: props.disabled,
                            el: props.el,
                            label: fieldInfo.title,
                            onChange: updateValue,
                            required: fieldInfo.required,
                            value: value
                        })
                    });
                    break;
                // User Field
                case gd_sprest_1.SPTypes.FieldType.User:
                    var userInfo = fieldInfo;
                    resolve({
                        fieldInfo: userInfo,
                        element: __1.Fabric.PeoplePicker({
                            allowGroups: userInfo.allowGroups,
                            allowMultiple: userInfo.multi,
                            description: userInfo.field.Description,
                            el: props.el,
                            label: userInfo.title,
                            required: userInfo.required,
                            value: value
                        })
                    });
                    break;
                // Default
                default:
                    // See if this is a taxonomy field
                    if (fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var mmsInfo_1 = fieldInfo;
                        // See if this is a new form
                        if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.New) {
                            // Clear the value
                            value = [];
                            // Get the default values
                            var values = (mmsInfo_1.defaultValue || props.value || "").split(";#");
                            for (var i = 0; i < values.length; i++) {
                                var value_1 = values[i].split("|");
                                if (value_1.length == 2) {
                                    // Add the term id
                                    value_1.push(value_1[1]);
                                }
                            }
                        } else {
                            // Parse the values
                            var values = value && value.results ? value.results : [value];
                            value = [];
                            for (var i = 0; i < values.length; i++) {
                                // Ensure the value exists
                                if (values[i] && values[i].TermGuid) {
                                    // Add the value
                                    value.push(values[i].TermGuid);
                                }
                            }
                        }
                        // Load the terms
                        _1.ListFormField.loadMMSData(mmsInfo_1).then(function (terms) {
                            // Load the value field
                            _1.ListFormField.loadMMSValueField(mmsInfo_1).then(function (valueField) {
                                // Set the value field
                                mmsInfo_1.valueField = valueField;
                                // Resolve the promise
                                resolve({
                                    fieldInfo: mmsInfo_1,
                                    element: __1.Fabric.Dropdown({
                                        className: props.className,
                                        description: mmsInfo_1.field.Description,
                                        disable: props.disabled,
                                        el: props.el,
                                        label: mmsInfo_1.title,
                                        multi: mmsInfo_1.multi,
                                        onChange: updateValue,
                                        options: getMMSOptions(gd_sprest_1.Helper.Taxonomy.toObject(terms), value),
                                        required: mmsInfo_1.required,
                                        value: value
                                    })
                                });
                            });
                        });
                    } else {
                        // Log
                        console.log("[gd-sprest] The field type '" + fieldInfo.typeAsString + "' is not supported.");
                    }
                    break;
            }
        });
    });
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
/**
 * List Form
 */
var _ListForm = /** @class */function () {
    /**
     * Constructor
    */
    function _ListForm(props) {
        var _this = this;
        this._cacheData = null;
        this._info = null;
        this._props = null;
        this._resolve = null;
        // Method to load the list data
        this.load = function () {
            // Clear the information
            _this._info = {
                item: _this._props.item,
                query: _this._props.query || {}
            };
            // Load the data from cache
            _this.loadFromCache();
            // Load the list data
            _this.loadListData().then(function () {
                // See if the fields have been defined
                if (_this._props.fields) {
                    // Process the fields
                    _this.processFields();
                    // Load the item data
                    _this.loadItem();
                } else {
                    // Load the content type
                    _this.loadDefaultContentType();
                }
            });
        };
        // Method to load the default content type
        this.loadDefaultContentType = function () {
            // See if the content type info exists
            if (_this._cacheData && _this._cacheData.ct) {
                // Try to parse the data
                try {
                    // Parse the content type
                    var ct = gd_sprest_1.Helper.parse(_this._cacheData.ct);
                    // Load the default fields
                    _this.loadDefaultFields(ct.results[0]);
                    return;
                } catch (_a) {
                    // Clear the cache data
                    sessionStorage.removeItem(_this._props.cacheKey);
                }
            }
            // Load the content types
            _this._info.list.ContentTypes().query({
                Expand: ["FieldLinks"],
                Top: 1
            }).execute(function (ct) {
                // See if we are storing data in cache
                if (_this._props.cacheKey) {
                    // Update the cache data
                    _this._cacheData = _this._cacheData || {};
                    _this._cacheData.ct = ct.stringify();
                    // Update the cache
                    sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                }
                // Resolve the promise
                _this.loadDefaultFields(ct.results[0]);
            });
        };
        // Method to load the default fields
        this.loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            // Parse the field links
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                // Get the field
                var field = _this._info.fields[fieldLink.Name];
                if (field) {
                    // Skip the content type field
                    if (field.InternalName == "ContentType") {
                        continue;
                    }
                    // Skip hidden fields
                    if (field.Hidden || fieldLink.Hidden) {
                        continue;
                    }
                    // Save the form field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._info.fields = formFields;
            // Load the item data
            _this.loadItem();
        };
        // Method to load the field data
        this.loadFieldData = function (fields) {
            // Clear the fields
            _this._info.fields = {};
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // Save the field
                _this._info.fields[field.InternalName] = field;
            }
        };
        // Method to load the data from cache
        this.loadFromCache = function () {
            // See if we are loading from cache
            if (_this._props.cacheKey) {
                // Get the data
                var data = sessionStorage.getItem(_this._props.cacheKey);
                if (data) {
                    // Try to parse the data
                    try {
                        // Set the cache data
                        _this._cacheData = JSON.parse(data);
                        // Update the list information
                        _this._info = _this._info || {};
                        _this._info.list = gd_sprest_1.Helper.parse(_this._cacheData.list);
                        // Load the field data
                        _this.loadFieldData(gd_sprest_1.Helper.parse(_this._cacheData.fields));
                    } catch (_a) {
                        // Clear the cache data
                        sessionStorage.removeItem(_this._props.cacheKey);
                    }
                }
            }
        };
        // Method to load the item
        this.loadItem = function () {
            // See if the item already exist
            if (_this._info.item) {
                // Resolve the promise
                _this._resolve(_this._info);
            } else if (_this._props.itemId > 0) {
                // Update the item query
                _this._info.query = _ListForm.generateODataQuery(_this._info, _this._props.loadAttachments);
                // Get the list item
                _this._info.list.Items(_this._props.itemId).query(_this._info.query).execute(function (item) {
                    // Save the attachments
                    _this._info.attachments = item.AttachmentFiles.results;
                    // Save the item
                    _this._info.item = item;
                    // Resolve the promise
                    _this._resolve(_this._info);
                });
            } else {
                // Resolve the promise
                _this._resolve(_this._info);
            }
        };
        // Method to load the list data
        this.loadListData = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the list & fields already exist
                if (_this._info.list && _this._info.fields) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the web
                var list = new gd_sprest_1.Web(_this._props.webUrl).Lists(_this._props.listName).execute(function (list) {
                    // Save the list
                    _this._info.list = list;
                });
                // Load the fields
                list.Fields().execute(function (fields) {
                    // See if we are caching the data
                    if (_this._props.cacheKey) {
                        // Update the cache
                        _this._cacheData = _this._cacheData || {};
                        _this._cacheData.fields = fields.stringify();
                        _this._cacheData.list = _this._info.list.stringify();
                        // Cache the data
                        sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                    }
                    // Load the field data
                    _this.loadFieldData(fields);
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to process the fields
        this.processFields = function () {
            var formFields = {};
            // Parse the fields provided
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._info.fields[_this._props.fields[i]];
                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;
                    // See if this is a taxonomy field
                    if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                        // Parse the list fields
                        for (var fieldName in _this._info.fields) {
                            var valueField = _this._info.fields[fieldName];
                            // See if this is a value field
                            if (valueField.InternalName == field.InternalName + "_0" || valueField.Title == field.InternalName + "_0") {
                                // Include this field
                                formFields[valueField.InternalName] = valueField;
                                break;
                            }
                        }
                    }
                }
            }
            // Update the fields
            _this._info.fields = formFields;
        };
        // Save the properties
        this._props = props || {};
        this._props.fields = this._props.fields;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // Load the list data
            _this.load();
        });
    }
    /**
     * Methods
     */
    // Method to create an instance of the list form
    _ListForm.create = function (props) {
        // Return an instance of the list form
        return new _ListForm(props);
    };
    // Method to load the item attachments
    _ListForm.loadAttachments = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the item id exists
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                new gd_sprest_1.Web(info.webUrl).Lists(info.listName).Items(itemId).AttachmentFiles().execute(function (attachments) {
                    // Resolve the promise
                    resolve(attachments.results || []);
                });
            } else {
                // Resolve the promise
                resolve([]);
            }
        });
    };
    // Method to refresh an item
    _ListForm.refreshItem = function (info) {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Update the query
            info.query = _this.generateODataQuery(info, true);
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                // Update the item
                info.item = item;
                // Resolve the promise
                resolve(info);
            });
        });
    };
    // Method to remove attachments from an item
    _ListForm.prototype.removeAttachments = function (info, attachments) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var web = new gd_sprest_1.Web(info.webUrl);
            // Parse the attachments
            for (var i = 0; i < attachments.length; i++) {
                var attachment = attachments[i];
                // Get the file
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl).delete().execute(true);
            }
            // Wait for the requests to complete
            web.done(function () {
                // Resolve the request
                resolve();
            });
        });
    };
    // Method to save attachments to an existing item
    _ListForm.saveAttachments = function (info, attachmentInfo) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                var attachments = new gd_sprest_1.Web(info.webUrl).Lists(info.listName).Items(itemId).AttachmentFiles();
                // Parse the attachment information
                for (var i = 0; i < attachmentInfo.length; i++) {
                    var attachment = attachmentInfo[i];
                    // Add the attachment
                    attachments.add(attachment.name, attachment.data).execute(true);
                }
                // Wait for the requests to complete
                attachments.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Resolve the promise
                    resolve(args);
                });
            } else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to save a new or existing item
    _ListForm.saveItem = function (info, formValues) {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(function (response) {
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            } else {
                // Set the metadata type
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                // Add the item
                info.list.Items().add(formValues).execute(function (item) {
                    // Update the info
                    info.item = item;
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
        });
    };
    // Method to generate the odata query
    _ListForm.generateODataQuery = function (info, loadAttachments) {
        if (loadAttachments === void 0) {
            loadAttachments = false;
        }
        var query = info.query || {};
        // Default the select query to get all the fields by default
        query.Select = query.Select || ["*"];
        query.Expand = query.Expand || [];
        // See if we are loading the attachments
        if (loadAttachments) {
            // Expand the attachment files collection
            query.Expand.push("AttachmentFiles");
            // Select the attachment files
            query.Select.push("Attachments");
            query.Select.push("AttachmentFiles");
        }
        // Parse the fields
        for (var fieldName in info.fields) {
            var field = info.fields[fieldName];
            // Update the query, based on the type
            switch (field.FieldTypeKind) {
                // Lookup Field
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                    // Expand the field
                    query.Expand.push(field.InternalName);
                    // Select the fields
                    query.Select.push(field.InternalName + "/Id");
                    query.Select.push(field.InternalName + "/" + field.LookupField);
                    break;
                // User Field
                case gd_sprest_1.SPTypes.FieldType.User:
                    // Expand the field
                    query.Expand.push(field.InternalName);
                    // Select the fields
                    query.Select.push(field.InternalName + "/Id");
                    query.Select.push(field.InternalName + "/Title");
                    break;
                // Default
                default:
                    // See if this is an taxonomy field
                    if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                        // Parse the fields
                        for (var fieldName_1 in info.fields) {
                            var valueField = info.fields[fieldName_1];
                            // See if this is the value field
                            if (valueField.InternalName == field.InternalName + "_0" || valueField.Title == field.InternalName + "_0") {
                                // Include the value field
                                query.Select.push(valueField.InternalName);
                                break;
                            }
                        }
                    }
                    break;
            }
        }
        // Return the query
        return query;
    };
    return _ListForm;
}();
exports.ListForm = _ListForm;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
/**
 * List Form Field
 */
var _ListFormField = /** @class */function () {
    /**
     * Constructor
     */
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
        // Load the field
        this.load = function () {
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            } else {
                // Get the web
                new gd_sprest_1.Web(_this._fieldInfo.webUrl).Lists(_this._fieldInfo.listName).Fields().getByInternalNameOrTitle(_this._fieldInfo.name).execute(function (field) {
                    // Save the field
                    _this._fieldInfo.field = field;
                    // Process the field
                    _this.processField();
                });
            }
        };
        // Method to proces the field and save its information
        this.processField = function () {
            // Update the field information
            _this._fieldInfo.defaultValue = _this._fieldInfo.field.DefaultValue;
            _this._fieldInfo.readOnly = _this._fieldInfo.field.ReadOnlyField;
            _this._fieldInfo.required = _this._fieldInfo.field.Required ? true : false;
            _this._fieldInfo.title = _this._fieldInfo.field.Title;
            _this._fieldInfo.type = _this._fieldInfo.field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._fieldInfo.field.TypeAsString;
            // Update the field info, based on the type
            switch (_this._fieldInfo.type) {
                // Choice
                case gd_sprest_1.SPTypes.FieldType.Choice:
                case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                    var choices = _this._fieldInfo.field.Choices;
                    _this._fieldInfo.choices = (choices ? choices.results : null) || [];
                    _this._fieldInfo.multi = _this._fieldInfo.type == gd_sprest_1.SPTypes.FieldType.MultiChoice;
                    break;
                // Date/Time
                case gd_sprest_1.SPTypes.FieldType.DateTime:
                    var fldDate = _this._fieldInfo.field;
                    _this._fieldInfo.showTime = fldDate.DisplayFormat == gd_sprest_1.SPTypes.DateFormat.DateTime;
                    break;
                // Lookup
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                    var fldLookup = _this._fieldInfo.field;
                    _this._fieldInfo.lookupField = fldLookup.LookupField;
                    _this._fieldInfo.lookupListId = fldLookup.LookupList;
                    _this._fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _this._fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
                // Number
                case gd_sprest_1.SPTypes.FieldType.Number:
                    var fldNumber = _this._fieldInfo.field;
                    var startIdx = fldNumber.SchemaXml.indexOf('Decimals="') + 10;
                    _this._fieldInfo.decimals = startIdx > 10 ? parseInt(fldNumber.SchemaXml.substr(startIdx, fldNumber.SchemaXml.substr(startIdx).indexOf('"'))) : 0;
                    _this._fieldInfo.maxValue = fldNumber.MaximumValue;
                    _this._fieldInfo.minValue = fldNumber.MinimumValue;
                    _this._fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    break;
                // Note
                case gd_sprest_1.SPTypes.FieldType.Note:
                    var fldNote = _this._fieldInfo.field;
                    _this._fieldInfo.multiline = true;
                    _this._fieldInfo.richText = fldNote.RichText;
                    _this._fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                // Text
                case gd_sprest_1.SPTypes.FieldType.Text:
                    _this._fieldInfo.multiline = false;
                    _this._fieldInfo.richText = false;
                    _this._fieldInfo.rows = 1;
                    break;
                // User
                case gd_sprest_1.SPTypes.FieldType.User:
                    var fldUser = _this._fieldInfo.field;
                    _this._fieldInfo.allowGroups = fldUser.SelectionMode == gd_sprest_1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _this._fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                // Default
                default:
                    // See if this is an MMS field
                    if (_this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _this._fieldInfo.field;
                        _this._fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _this._fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _this._fieldInfo.termSetId = fldMMS.TermSetId;
                        _this._fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
            // Resolve the promise
            _this._resolve(_this._fieldInfo);
        };
        // Save the properties and field information
        this._fieldInfo = props || {};
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            } else {
                // Load the field
                _this.load();
            }
        });
    }
    /**
     * Methods
     */
    // Method to create an instance of the list form field
    _ListFormField.create = function (props) {
        // Return an instance of the list form field
        return new _ListFormField(props);
    };
    // Method to load the lookup data
    _ListFormField.loadLookupData = function (info, queryTop) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current site collection
            new gd_sprest_1.Site().openWebById(info.lookupWebId).execute(function (web) {
                // Get the list
                web.Lists().getById(info.lookupListId).Items().query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                }).execute(function (items) {
                    // Resolve the promise
                    resolve(items.results);
                });
            });
        });
    };
    // Method to load the mms data
    _ListFormField.loadMMSData = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the term set
            gd_sprest_1.Helper.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                // Get the target root term
                var root = gd_sprest_1.Helper.Taxonomy.findById(termSet, info.termId);
                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = gd_sprest_1.Helper.Taxonomy.findById(termSet, info.termSetId);
                }
                // Resolve the request
                resolve(gd_sprest_1.Helper.Taxonomy.toArray(root));
            });
        });
    };
    // Method to load the mms value field
    _ListFormField.loadMMSValueField = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the web
            new gd_sprest_1.Web(info.webUrl).Lists(info.listName).Fields().getByInternalNameOrTitle(info.name + "_0").execute(function (field) {
                // See if the field exists
                if (field.existsFl) {
                    // Resolve the promise
                    resolve(field);
                } else {
                    // Log
                    console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                }
            });
        });
    };
    return _ListFormField;
}();
exports.ListFormField = _ListFormField;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
var fabric_1 = __webpack_require__(1);
var _1 = __webpack_require__(8);
/**
 * Item Form
 */
exports.ListFormPanel = function (props) {
    /**
     * Display Form
     */
    // Render the display form
    var renderDisplayForm = function renderDisplayForm() {
        // Get the list
        _formInfo.list.Items(_formInfo.item.Id).FieldValuesAsHtml().execute(function (formValues) {
            // Parse the fields
            for (var fieldName in _formInfo.fields) {
                // Get the element
                var el = _panel.get()._panel.querySelector("[data-field='" + fieldName + "']");
                if (el) {
                    var field = _formInfo.fields[fieldName];
                    var html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";
                    // Set the html for this field
                    el.innerHTML = ['<div class="display-form">', fabric_1.Templates.Label({
                        className: "field-label",
                        description: field.Description,
                        text: field.Title
                    }), '<div class="field-value">' + html + '</div>', '</div>'].join('\n');
                }
            }
        });
    };
    /**
     * Edit Form
     */
    var _fields = [];
    var _formInfo = null;
    // Render the edit form
    var renderEditForm = function renderEditForm(controlMode) {
        // Clear the fields
        _fields = [];
        // Parse the fields
        for (var fieldName in _formInfo.fields) {
            var field = _formInfo.fields[fieldName];
            var value = _formInfo.item ? _formInfo.item[fieldName] : null;
            // See if this is a read-only field
            if (field.ReadOnlyField) {
                // Do not render in the new form
                if (controlMode == gd_sprest_1.SPTypes.ControlMode.New) {
                    continue;
                }
            }
            // See if this is the hidden taxonomy field
            if (field.Hidden && field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Note && field.Title.endsWith("_0")) {
                // Do not render this field
                continue;
            }
            // See if this is an invalid field type
            if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Invalid) {
                // Ensure it's not a taxonomy field
                if (!field.TypeAsString.startsWith("TaxonomyFieldType")) {
                    continue;
                }
            }
            // Render the field
            _1.Field({
                controlMode: controlMode,
                el: _panel.get()._panel.querySelector("[data-field='" + fieldName + "']"),
                fieldInfo: {
                    field: field,
                    listName: _formInfo.list.Title,
                    name: fieldName
                },
                value: value
            }).then(function (field) {
                // Add the field
                _fields.push(field);
            });
        }
    };
    /**
     * Render Form
     */
    // Render the form
    var renderForm = function renderForm(controlMode) {
        if (controlMode === void 0) {
            controlMode = gd_sprest_1.SPTypes.ControlMode.Display;
        }
        // Parse the fields
        var fields = "";
        for (var fieldName in _formInfo.fields) {
            // Append the div for this field
            fields += "<div data-field='" + fieldName + "'></div>";
        }
        // Render the menu
        renderMenu(controlMode);
        // Update the panel content
        _panel.updateContent(['<div class="ms-ListForm">', '<label class="ms-Label ms-fontColor-redDark form-error error"></label>', fields, '</div>'].join('\n'));
        // See if this is a new/edit form
        if (controlMode == gd_sprest_1.SPTypes.ControlMode.Edit || controlMode == gd_sprest_1.SPTypes.ControlMode.New) {
            // Render the edit form
            renderEditForm(controlMode);
        } else {
            // Render the display form
            renderDisplayForm();
        }
        // Add the menu click event
        addMenuClickEvents();
    };
    // Add the menu click events
    var addMenuClickEvents = function addMenuClickEvents() {
        var buttons = null;
        // Cancel buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-cancel");
        for (var i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", function (ev) {
                // Disable postback
                ev ? ev.preventDefault() : null;
                // Render the form
                renderForm(gd_sprest_1.SPTypes.ControlMode.Display);
            });
        }
        // Close buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-close");
        for (var i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", function (ev) {
                // Disable postback
                ev ? ev.preventDefault() : null;
                // Close the panel
                _panel.hide();
            });
        }
        // Set the edit button click event
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-edit");
        for (var i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", function (ev) {
                // Disable postback
                ev ? ev.preventDefault() : null;
                // Render the form
                renderForm(gd_sprest_1.SPTypes.ControlMode.Edit);
            });
        }
        // Set the save button click event
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-save");
        for (var i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", function (ev) {
                var formValues = {};
                var unknownUsers = {};
                // Disable postback
                ev ? ev.preventDefault() : null;
                // Validate the form
                if (validate() == false) {
                    // Display an error message
                    var errorMessage = _panel.get()._panel.querySelector(".form-error");
                    if (errorMessage) {
                        // Set the error message
                        errorMessage.innerHTML = "The form contains errors.";
                    }
                    // Return
                    return;
                }
                // Render a saving message
                var content = _panel.updateContent(fabric_1.Templates.Spinner({ text: "Saving the item..." }));
                fabric_1.Spinner({
                    el: content,
                    text: "Saving the item..."
                });
                // Parse the fields
                for (var i_1 = 0; i_1 < _fields.length; i_1++) {
                    var field = _fields[i_1];
                    var fieldName = field.fieldInfo.name;
                    var fieldValue = field.element.getValue();
                    // Update the field name/value, based on the type
                    switch (field.fieldInfo.type) {
                        // Choice
                        case gd_sprest_1.SPTypes.FieldType.Choice:
                            // Update the field value
                            fieldValue = fieldValue ? fieldValue.value : fieldValue;
                            break;
                        // Lookup
                        case gd_sprest_1.SPTypes.FieldType.Lookup:
                            // Append 'Id' to the field name
                            fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";
                            // See if this is a multi-value field
                            if (field.fieldInfo.multi) {
                                var values = fieldValue || [];
                                fieldValue = { results: [] };
                                // Parse the options
                                for (var j = 0; j < values.length; j++) {
                                    // Add the value
                                    fieldValue.results.push(values[j].value);
                                }
                            } else {
                                // Update the field value
                                fieldValue = fieldValue ? fieldValue.value : fieldValue;
                            }
                            break;
                        // Multi-Choice
                        case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                            var options = fieldValue || [];
                            fieldValue = { results: [] };
                            // Parse the options
                            for (var j = 0; j < options.length; j++) {
                                // Add the option
                                fieldValue.results.push(options[j].value);
                            }
                            break;
                        // URL
                        case gd_sprest_1.SPTypes.FieldType.URL:
                            // See if the field value exists
                            if (fieldValue) {
                                // Add the metadata
                                fieldValue.__metadata = { type: "SP.FieldUrlValue" };
                            }
                            break;
                        // User
                        case gd_sprest_1.SPTypes.FieldType.User:
                            // Append 'Id' to the field name
                            fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";
                            // See if this is a multi-value field
                            if (field.fieldInfo.multi) {
                                var values = fieldValue || [];
                                fieldValue = { results: [] };
                                // Parse the options
                                for (var j = 0; j < values.length; j++) {
                                    var userValue = values[j];
                                    if (userValue && userValue.EntityData) {
                                        // Ensure the user or group id exists
                                        if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                            // Update the field value
                                            fieldValue.results.push(userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID);
                                        } else {
                                            // Add the unknown user account
                                            unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                            unknownUsers[fieldName].push(userValue.Key);
                                        }
                                    }
                                }
                            } else {
                                var userValue = fieldValue ? fieldValue[0] : null;
                                if (userValue && userValue.EntityData) {
                                    // Ensure the user or group id exists
                                    if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                        // Update the field value
                                        fieldValue = userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID;
                                    } else {
                                        // Add the unknown user account
                                        unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                        unknownUsers[fieldName].push(userValue.Key);
                                    }
                                } else {
                                    // Clear the field value
                                    fieldValue = null;
                                }
                            }
                            break;
                        // MMS
                        default:
                            if (field.fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                                // See if this is a multi field
                                if (field.fieldInfo.typeAsString.endsWith("Multi")) {
                                    // Update the field name to the value field
                                    fieldName = field.fieldInfo.valueField.InternalName;
                                    // Parse the field values
                                    var fieldValues = fieldValue || [];
                                    fieldValue = [];
                                    for (var j = 0; j < fieldValues.length; j++) {
                                        var termInfo = fieldValues[j];
                                        // Add the field value
                                        fieldValue.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                                    }
                                    // Set the field value
                                    fieldValue = fieldValue.join(";#");
                                } else {
                                    // Update the value
                                    fieldValue = fieldValue ? {
                                        __metadata: { type: "SP.Taxonomy.TaxonomyFieldValue" },
                                        Label: fieldValue.text,
                                        TermGuid: fieldValue.value,
                                        WssId: -1
                                    } : fieldValue;
                                }
                            }
                            break;
                    }
                    // Set the field value
                    formValues[fieldName] = fieldValue;
                }
                // Ensure the user accounts exist
                ensureUserAccounts(unknownUsers, formValues).then(function (formValues) {
                    // Save the item
                    _1.ListForm.saveItem(_formInfo, formValues).then(function (formInfo) {
                        // Update the form info
                        _formInfo = formInfo;
                        // Render the form
                        renderForm(gd_sprest_1.SPTypes.ControlMode.Display);
                    });
                });
            });
        }
    };
    // Method to ensure the user accounts exist
    var ensureUserAccounts = function ensureUserAccounts(userAccounts, formValues) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var web = new gd_sprest_1.Web();
            // Parse the field names
            for (var fieldName in userAccounts) {
                // Parse the user accounts
                for (var i = 0; i < userAccounts[fieldName].length; i++) {
                    // Ensure this user account exists
                    web.ensureUser(userAccounts[fieldName][i]).execute(true);
                }
            }
            // Wait for the requests to complete
            web.done(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // Parse the field names
                for (var fieldName in userAccounts) {
                    // Parse the user accounts
                    for (var i = 0; i < userAccounts[fieldName].length; i++) {
                        var userLogin = userAccounts[fieldName][i];
                        // Parse the responses
                        for (var j = 0; j < args.length; j++) {
                            var user = args[j];
                            // See if this is the user
                            if (user.LoginName == userLogin) {
                                // See if this is a multi-user value
                                if (formValues[fieldName].results != null) {
                                    // Set the user account
                                    formValues[fieldName].push(user.Id);
                                } else {
                                    // Set the user account
                                    formValues[fieldName] = user.Id;
                                }
                            }
                        }
                    }
                }
                // Resolve the promise
                resolve(formValues);
            });
        });
    };
    // Render the menu
    var renderMenu = function renderMenu(controlMode) {
        // Determine the main commands
        var mainCommands = null;
        switch (controlMode) {
            // Display
            case gd_sprest_1.SPTypes.ControlMode.Display:
                mainCommands = [{
                    className: "ms-CommandButton-edit",
                    icon: "Edit",
                    text: "Edit"
                }, {
                    className: "ms-CommandButton-close",
                    icon: "Cancel",
                    text: "Close"
                }];
                break;
            // Edit
            case gd_sprest_1.SPTypes.ControlMode.Edit:
                mainCommands = [{
                    className: "ms-CommandButton-cancel",
                    icon: "Back",
                    text: "Cancel"
                }, {
                    className: "ms-CommandButton-save",
                    icon: "Save",
                    text: "Update"
                }];
                break;
            // New
            case gd_sprest_1.SPTypes.ControlMode.New:
                mainCommands = [{
                    className: "ms-CommandButton-save",
                    icon: "Save",
                    text: "Save"
                }, {
                    className: "ms-CommandButton-close",
                    icon: "Cancel",
                    text: "Close"
                }];
                break;
        }
        // Render the menu
        fabric_1.CommandBar({
            className: "ms-CommandBar--navBar",
            el: _panel.get()._panel.querySelector(".ms-Panel-header"),
            mainCommands: mainCommands,
            sideCommands: [{
                className: "ms-CommandButton-close",
                icon: "Cancel"
            }]
        });
    };
    // Method to validate the form
    var validate = function validate() {
        // Get the fields
        var fields = _panel.get()._panel.querySelectorAll(".ms-ListForm > div");
        for (var i = 0; i < fields.length; i++) {
            // See if there is an error message
            var errorMessage = fields[i].querySelector(".ms-Label.error");
            if (errorMessage && errorMessage.innerText) {
                // Form contains error
                return false;
            }
        }
        // Form is valid
        return true;
    };
    /**
     * Main
     */
    // Render the panel
    props.el.innerHTML = fabric_1.Templates.Panel({
        className: props.className,
        el: props.el,
        headerText: props.panelTitle,
        panelType: typeof props.panelType === "number" ? props.panelType : fabric_1.PanelTypes.Large,
        showCloseButton: false
    });
    // Create the panel
    var _panel = fabric_1.Panel(props);
    // Create an instance of the list form
    new _1.ListForm({
        cacheKey: props.cacheKey,
        fields: props.fields,
        item: props.item,
        itemId: props.itemId,
        listName: props.listName,
        loadAttachments: props.loadAttachments,
        query: props.query,
        webUrl: props.webUrl
    }).then(function (formInfo) {
        // Save the form information
        _formInfo = formInfo;
        // See if the panel is open
        if (_panel.isOpen()) {
            // Render the panel
            renderForm(props.controlMode);
        }
    });
    // Return the panel
    return {
        show: function show(controlMode) {
            if (controlMode === void 0) {
                controlMode = gd_sprest_1.SPTypes.ControlMode.Display;
            }
            // See if the panel is open
            if (_panel.isOpen()) {
                return;
            }
            // See if the list info exists
            if (_formInfo) {
                // Show the form
                _panel.show();
                // Render the form
                renderForm(props.controlMode);
            } else {
                // Show the panel
                var content = _panel.show(_formInfo ? "" : "<div class='spinner'></div>");
                // Render a spinner
                fabric_1.Spinner({ el: content.querySelector(".spinner"), text: "Loading..." });
            }
        }
    };
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
var fabric_1 = __webpack_require__(1);
var wpCfg_1 = __webpack_require__(15);
/**
 * Web Part
 */
exports.WebPart = function (props) {
    var _panel = null;
    var _panelCfg = props.editPanel || {};
    var _cfg = {};
    var _wp = null;
    /**
     * Method to add the help link to a script part editor.
     * @wpId - The webpart id.
     */
    var addHelpLink = function addHelpLink() {
        // Ensure the help properties exist
        if (props.helpProps) {
            // Get the webpart's "Snippet"
            var link = document.querySelector("div[webpartid='" + _wp.wpId + "'] a[title='Edit Snippet']");
            if (link) {
                // Create the help link
                var helpLink = document.createElement("a");
                helpLink.href = props.helpProps.url || "#";
                helpLink.style.paddingLeft = "10px";
                helpLink.setAttribute("role", "button");
                helpLink.title = props.helpProps.title || "Help";
                helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                helpLink.target = "_blank";
                // Append the link
                link.parentElement.appendChild(helpLink);
            }
        }
    };
    /**
     * Method to get the webpart
     */
    var getWebPart = function getWebPart(wpId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current context
            var context = SP.ClientContext.get_current();
            // Get the webpart from the current page
            var page = context.get_web().getFileByServerRelativeUrl(gd_sprest_1.ContextInfo.serverRequestPath);
            var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
            var wpDef = wpMgr.get_webParts().getById(wpId);
            var wp = wpDef.get_webPart();
            context.load(wp, "Properties");
            // Execute the request
            context.executeQueryAsync(
            // Success
            function () {
                // Resolve the promise
                resolve({
                    Context: context,
                    Properties: wp.get_properties(),
                    WebPart: wp,
                    WebPartDefinition: wpDef,
                    WebPartId: wp.get_id()
                });
            },
            // Error
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // Reject the promise
                reject(args[1] ? args[1].get_message() : "");
            });
        });
    };
    /**
     * Method to get the webpart id for a specified element
     * @param el - The target element.
     */
    var getWebPartId = function getWebPartId(el) {
        // Loop until we find the webpart id
        while (el) {
            // See if this element contains the webpart id
            var wpId = el.getAttribute("webpartid");
            if (wpId) {
                // Return the webpart id
                return wpId;
            }
            // Check the parent
            el = el.parentElement;
        }
        // Unable to detect
        return "";
    };
    /**
     * Method to get the webpart information
     */
    var getWebPartInfo = function getWebPartInfo() {
        var targetInfo = {
            cfg: null,
            el: null,
            wpId: null
        };
        // Ensure the element id exists
        if (props.elementId) {
            // Get the webpart elements
            var elements = document.querySelectorAll("#" + props.elementId);
            for (var i = 0; i < elements.length; i++) {
                var elWebPart = elements[i];
                // See if we have already configured this element
                if (elWebPart.getAttribute("data-isConfigured")) {
                    continue;
                }
                // Get the webpart id
                var wpId = getWebPartId(elWebPart);
                if (wpId) {
                    // See if the configuration element exists
                    var elCfg = props.cfgElementId ? elWebPart.parentElement.querySelector("#" + props.cfgElementId) : null;
                    if (elCfg) {
                        try {
                            // Parse the configuration
                            var data = elCfg.innerText.trim();
                            var cfg = data.length > 0 ? JSON.parse(data) : null;
                            // See if the webaprt id exists
                            if (cfg && cfg.WebPartId) {
                                // See if it's for this webpart
                                if (cfg.WebPartId == wpId) {
                                    // Set the target information
                                    targetInfo = {
                                        cfg: cfg,
                                        el: elWebPart,
                                        wpId: wpId
                                    };
                                    break;
                                }
                            } else {
                                // Set the target information
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                break;
                            }
                        } catch (ex) {
                            // Set the target information
                            targetInfo = {
                                cfg: {
                                    WebPartId: wpId
                                },
                                el: elWebPart,
                                wpId: wpId
                            };
                            // Log
                            console.log("[sp-webpart] Error parsing the configuration for element '" + props.cfgElementId + "'.");
                        }
                        // Break from the loop
                        break;
                    } else {
                        // Set the target information
                        targetInfo = {
                            cfg: {
                                WebPartId: wpId
                            },
                            el: elWebPart,
                            wpId: wpId
                        };
                        break;
                    }
                }
            }
            // Ensure elements were found
            if (elements.length == 0) {
                // Log
                console.log("[sp-webpart] Error - Unable to find elements with id '" + props.elementId + "'.");
            }
        } else {
            // Log
            console.log("[sp-webpart] The target element id is not defined.");
        }
        // Ensure the target element exists
        if (targetInfo.el) {
            // Set the configuration flag
            targetInfo.el.setAttribute("data-isConfigured", "true");
        }
        // Return the target information
        return targetInfo;
    };
    /**
     * Method to detect if a page is being edited
     */
    var isEditMode = function isEditMode() {
        var formName = MSOWebPartPageFormName ? MSOWebPartPageFormName : "";
        // Get the form
        var form = document.forms[MSOWebPartPageFormName];
        if (form) {
            // Get the wiki page mode
            var wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
            // Get the webpart page mode
            var wpPageMode = form.MSOLayout_InDesignMode ? form.MSOLayout_InDesignMode.value : null;
            // Determine if the page is being edited
            return wikiPageMode == "Edit" || wpPageMode == "1";
        }
        // Unable to determine
        return false;
    };
    /**
     * Method to render the webpart
     */
    var render = function render() {
        var element = null;
        // Get the webpart information
        _wp = getWebPartInfo();
        if (_wp == null || _wp.el == null) {
            // Log
            console.log("[sp-webpart] The target webpart element '" + props.elementId + "' was not found.");
            return;
        }
        // Set the configuration
        _cfg = _wp.cfg;
        // See if the page is being edited
        var returnVal = null;
        if (isEditMode()) {
            // Add the help link
            addHelpLink();
            // Call the render event
            if (props.onRenderEdit) {
                // Execute the render edit event
                returnVal = props.onRenderEdit(_wp);
            } else if (props.editPanel) {
                // Display the edit panel
                renderEditPanel();
            }
        } else {
            // See if the configuration is defined, but has no value
            if (_wp.cfg || (props.cfgElementId || "").length == 0) {
                // Execute the render edit event
                returnVal = props.onRenderDisplay(_wp);
            } else {
                // Render a message
                _wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
            }
        }
        // See if a promise was returned
        if (returnVal && returnVal.then) {
            // Wait for the request to complete
            returnVal.then(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // Execute the post render event
                props.onPostRender ? props.onPostRender(_wp) : null;
            });
        } else {
            // Execute the post render event
            props.onPostRender ? props.onPostRender(_wp) : null;
        }
    };
    // Renders the configuration panel
    var renderConfiguration = function renderConfiguration() {
        // Render the panel contents
        var panelContents = _panel.updateContent(['<div></div>', '<div></div>'].join('\n'));
        // See if the render header event exists
        if (_panelCfg.onRenderHeader) {
            // Call the event
            _panelCfg.onRenderHeader(panelContents.children[0], _wp);
        }
        // See if the render footer event exists
        if (_panelCfg.onRenderFooter) {
            // Call the event
            _panelCfg.onRenderFooter(panelContents.children[1], _wp);
        }
    };
    // The default render method when the page is edited
    var renderEditPanel = function renderEditPanel() {
        // Ensure we are rendering the panel
        if (_panelCfg == null) {
            return;
        }
        // Render the configuration panel
        _wp.el.innerHTML = ['<div></div>', '<div></div>'].join('\n');
        // Render the panel
        _panel = fabric_1.Panel({
            el: _wp.el.children[0],
            headerText: "Configuration Panel",
            panelType: _panelCfg.panelType || fabric_1.PanelTypes.Medium
        });
        // Render the button
        var btn = fabric_1.Button({
            el: _wp.el.children[1],
            text: "Show Configuration",
            onClick: function onClick() {
                var mainCommands = [];
                // Show the panel
                _panel.show();
                // See if we are adding the save button
                if (_panelCfg.showSaveButton != false) {
                    // Add the save button
                    mainCommands.push({
                        icon: "Save",
                        text: "Save",
                        onClick: function onClick() {
                            // Call the save event and set the configuration
                            var cfg = _panelCfg.onSave ? _panelCfg.onSave(_wp.cfg) : null;
                            cfg = cfg ? cfg : _wp.cfg;
                            // Save the configuration
                            wpCfg_1.WPCfg.saveConfiguration(_wp.wpId, props.cfgElementId, cfg);
                        }
                    });
                }
                // See if custom buttons exist
                if (_panelCfg.menuLeftCommands) {
                    // Add the buttons
                    mainCommands = mainCommands.concat(_panelCfg.menuLeftCommands);
                }
                // Set the side commands
                var sideCommands = (_panelCfg.menuRightCommands || []).concat([{
                    className: "ms-CommandButton-close",
                    icon: "Cancel",
                    onClick: function onClick() {
                        // Close the panel
                        _panel.hide();
                    }
                }]);
                // Render the menu
                fabric_1.CommandBar({
                    el: _panel.getHeader(),
                    mainCommands: mainCommands,
                    sideCommands: sideCommands
                });
                // Render the configuration
                renderConfiguration();
            }
        });
    };
    // Add a load event
    window.addEventListener("load", function () {
        // Render the component
        render();
    });
    return {
        cfg: _cfg,
        info: _wp
    };
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
var __1 = __webpack_require__(6);
var _1 = __webpack_require__(9);
/**
 * List WebPart
 */
exports.WPList = function (props) {
    var _cfg = props.editPanel || {};
    var _el;
    var _items = null;
    var _lists = null;
    var _wpInfo = null;
    /**
     * Display Form
     */
    // Method to render the display form
    var renderDisplayForm = function renderDisplayForm(wpInfo) {
        // Save the information
        _wpInfo = wpInfo;
        // Load the items
        loadItems();
    };
    // Method to load the items
    var loadItems = function loadItems() {
        // See if items exist
        if (_items && _items.length > 0) {
            // Call the render event
            props.onRenderItems ? props.onRenderItems(_wpInfo, _items) : null;
            return;
        }
        // See if we are using the CAML query
        var cfg = _wpInfo.cfg || {};
        if (props.camlQuery || props.onExecutingCAMLQuery) {
            loadCAML(cfg.WebUrl, cfg.ListName, props.camlQuery);
        } else {
            loadODATA(cfg.WebUrl, cfg.ListName, props.odataQuery);
        }
    };
    // Method to load the items using a CAML query
    var loadCAML = function loadCAML(webUrl, listName, caml) {
        if (caml === void 0) {
            caml = "";
        }
        // Call the load caml query event
        caml = props.onExecutingCAMLQuery ? props.onExecutingCAMLQuery(_wpInfo, caml) : null;
        // See if we are targeting a different web
        if (webUrl) {
            // Get the context information for the destination web
            // Note - Since we are using a POST request, this would be required for cross-site collection requests
            gd_sprest_1.ContextInfo.getWeb(webUrl).execute(function (contextInfo) {
                // Get the web
                new gd_sprest_1.Web(webUrl, { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue }).Lists(listName).getItemsByQuery(caml).execute(function (items) {
                    // Render the items
                    props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
                });
            });
        } else {
            // Get the web
            new gd_sprest_1.Web(webUrl).Lists(listName).getItemsByQuery(caml).execute(function (items) {
                // Render the items
                props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
            });
        }
    };
    // Method to load the items using an ODATA query
    var loadODATA = function loadODATA(webUrl, listName, query) {
        if (query === void 0) {
            query = {};
        }
        // Call the load caml query event
        query = props.onExecutingODATAQuery ? props.onExecutingODATAQuery(_wpInfo, query) : null;
        // Get the web
        new gd_sprest_1.Web(webUrl).Lists(listName).Items().query(query).execute(function (items) {
            // Render the items
            props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
        });
    };
    /**
     * Edit Form
     */
    // Method to load the lists
    var loadLists = function loadLists(webUrl) {
        // Set the query
        var query = props.listQuery || {};
        // Render a loading message
        __1.Fabric.Spinner({
            el: _el.children[2],
            text: "Loading the lists..."
        });
        // Get the web
        new gd_sprest_1.Web(webUrl).Lists().query(query).execute(function (lists) {
            // Save the lists
            _lists = lists.results;
            // Call the list rendering event
            _lists = (_cfg.onListsRendering ? _cfg.onListsRendering(_wpInfo, _lists) : null) || _lists;
            // See if the list name exists and a post render event exists
            var list = null;
            if (_wpInfo.cfg && _wpInfo.cfg.ListName) {
                // Parse the dropdown lists
                for (var i = 0; i < _lists.length; i++) {
                    if (_lists[i].Title == _wpInfo.cfg.ListName) {
                        // Set the list
                        list = _lists[i];
                        break;
                    }
                }
            }
            // Render the configuration
            renderConfiguration(list);
        });
    };
    // Method to render the configuration panel
    var renderConfiguration = function renderConfiguration(list) {
        // Render the panel contents
        _el.innerHTML = ['<div></div>', '<div></div>', '<div></div>', '<div></div>'].join('\n');
        // Render the web url textbox
        var tb = __1.Fabric.TextField({
            el: _el.children[1],
            label: "Relative Web Url:",
            description: "The web containing the list. If blank, the current web is used.",
            value: _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.WebUrl : "",
            onChange: function onChange(value) {
                // Update the configuration
                _wpInfo.cfg.WebUrl = value;
            }
        });
        // See if the lists exists
        if (_lists) {
            // Render the header
            if (_cfg.onRenderHeader) {
                _cfg.onRenderHeader(_el.children[0], _wpInfo, list);
            }
            // Render the dropdown
            renderDropdown(_el.children[2]);
            // Render the footer
            if (_cfg.onRenderFooter) {
                _cfg.onRenderFooter(_el.children[3], _wpInfo, list);
            }
        } else {
            // Load the lists
            loadLists(tb.getValue());
        }
    };
    // Method to render the dropdown
    var renderDropdown = function renderDropdown(el) {
        var options = [];
        // Parse the lists
        for (var i = 0; i < _lists.length; i++) {
            // Add the option
            options.push({
                text: _lists[i].Title,
                value: _lists[i].Title
            });
        }
        // Render the dropdown
        var ddl = __1.Fabric.Dropdown({
            el: el,
            label: "List:",
            options: options,
            value: _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.ListName : null,
            onChange: function onChange(option) {
                // Parse the list
                for (var i = 0; i < _lists.length; i++) {
                    // See if this is the target list
                    if (_lists[i].Title == option.text) {
                        // Update the configuration
                        _wpInfo.cfg.ListName = option.value;
                        // Call the change event
                        _cfg.onListChanged ? _cfg.onListChanged(_wpInfo, _lists[i]) : null;
                        break;
                    }
                }
            }
        });
    };
    /**
     * Main
     */
    // Create the menu commands
    var menuLeftCommands = [{
        icon: "Refresh",
        text: "Refresh",
        onClick: function onClick() {
            // Load the lists
            loadLists(_wpInfo.cfg.WebUrl);
        }
    }];
    // See if custom commands exist
    if (props.editPanel && props.editPanel.menuLeftCommands) {
        // Add the custom commands
        menuLeftCommands = menuLeftCommands.concat(props.editPanel.menuLeftCommands);
    }
    // Create the webpart
    var _wp = _1.WebPart({
        cfgElementId: props.cfgElementId,
        editPanel: {
            panelType: props.editPanel ? props.editPanel.panelType : null,
            menuLeftCommands: menuLeftCommands,
            menuRightCommands: props.editPanel ? props.editPanel.menuRightCommands : null,
            onRenderHeader: function onRenderHeader(el, wpInfo) {
                // Save the properties
                _el = el;
                _wpInfo = wpInfo;
                // Render the configuration
                renderConfiguration();
            },
            onSave: function onSave(cfg) {
                // Update the webpart configuration and return it
                cfg.ListName = _wpInfo.cfg.ListName;
                cfg.WebUrl = _wpInfo.cfg.WebUrl;
                return cfg;
            }
        },
        elementId: props.elementId,
        onRenderDisplay: renderDisplayForm
    });
    // Return the webpart
    return {
        cfg: _wp.cfg,
        info: _wp.info
    };
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(3);
var __1 = __webpack_require__(6);
var _1 = __webpack_require__(9);
/**
 * Search WebPart
 */
exports.WPSearch = function (props) {
    var ddlFields = null;
    // Method to update the 
    var listChanged = function listChanged(el, wpInfo, list) {
        var options = [];
        // Parse the fields
        for (var i = 0; i < list.Fields.results.length; i++) {
            var addField = false;
            var field = list.Fields.results[i];
            // Add the field, based on the type
            switch (field.FieldTypeKind) {
                // Searchable Fields
                case gd_sprest_1.SPTypes.FieldType.Choice:
                case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                case gd_sprest_1.SPTypes.FieldType.Text:
                case gd_sprest_1.SPTypes.FieldType.URL:
                case gd_sprest_1.SPTypes.FieldType.User:
                    addField = true;
                    break;
                default:
                    // Allow managed metadata fields
                    addField = field.TypeAsString.startsWith("TaxonomyFieldType");
                    break;
            }
            // See if we are adding the field
            if (addField) {
                options.push({
                    text: field.Title + " [" + field.InternalName + "]",
                    value: field.InternalName
                });
            }
        }
        // Render the field dropdown
        ddlFields = __1.Fabric.Dropdown({
            el: wpInfo.el.querySelector("#field-cfg"),
            multi: true,
            options: options
        });
    };
    // Method to render the footer
    var renderFooter = function renderFooter(el, wpInfo, list) {
        // Render a spinner
        __1.Fabric.Spinner({
            el: el,
            text: "Loading the fields..."
        });
        // Load the fields
        listChanged(el, wpInfo, list);
    };
    // Method to save the configuration
    var saveConfiguration = function saveConfiguration(cfg) {
        // Set the fields configuraiton
        cfg.Fields = ddlFields ? ddlFields.getValue() : [];
        // Return the configuration
        return cfg;
    };
    // Create the webpart
    var _wp = _1.WPList({
        camlQuery: props.camlQuery,
        cfgElementId: props.cfgElementId,
        className: props.className,
        editPanel: {
            menuLeftCommands: props.editPanel ? props.editPanel.menuLeftCommands : null,
            menuRightCommands: props.editPanel ? props.editPanel.menuRightCommands : null,
            onRenderFooter: renderFooter
        },
        elementId: props.elementId,
        helpProps: props.helpProps,
        listQuery: props.listQuery,
        odataQuery: props.odataQuery,
        onRenderItems: props.onRenderItems,
        onSave: saveConfiguration
    });
    // Return the webpart
    return {
        cfg: _wp.cfg,
        info: _wp.info
    };
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var fabric_1 = __webpack_require__(1);
var _1 = __webpack_require__(9);
/**
 * Web Part Tabs
 */
exports.WPTabs = function (props) {
    var _isContentZone = false;
    // Method to get the webparts
    var getWebParts = function getWebParts(wpInfo) {
        var wps = [];
        // Get the webpart element and zone
        var elWebPart = document.querySelector("div[webpartid='" + wpInfo.cfg.WebPartId + "']");
        var elWebPartZone = elWebPart ? getWebPartZone(elWebPart) : null;
        if (elWebPart && elWebPartZone) {
            // Add a class name to the webpart zone
            elWebPartZone.className += " wp-tabs";
            // Parse the webparts in this zone
            var webparts = elWebPartZone.querySelectorAll(".ms-webpartzone-cell[id^='MSOZoneCell_WebPart']");
            for (var i = 0; i < webparts.length; i++) {
                var webpart = webparts[i];
                // Skip this webpart
                if (webpart.querySelector("div[webpartid='" + wpInfo.cfg.WebPartId + "']")) {
                    continue;
                }
                // Skip hidden webparts
                var wpTitle = (webpart.querySelector(".ms-webpart-titleText") || {}).innerText || "";
                var isHidden = webpart.firstElementChild && webpart.firstElementChild.className.indexOf("ms-hide") >= 0;
                isHidden = isHidden || wpTitle.startsWith("(Hidden)");
                if (isHidden) {
                    continue;
                }
                // See if this is within a content zone
                if (_isContentZone) {
                    // Get the parent webpart box
                    while (webpart.parentNode) {
                        // See if this is the webpart box element
                        if (webpart.className.indexOf("ms-rte-wpbox") >= 0) {
                            // Add this webpart and break from the loop
                            wps.push(webpart);
                            break;
                        }
                        // Check the parent element
                        webpart = webpart.parentNode;
                    }
                } else {
                    // Add the webpart
                    wps.push(webpart);
                }
            }
        }
        // Return the webparts
        return wps;
    };
    // Method to get the webpart zone
    var getWebPartZone = function getWebPartZone(el) {
        // Ensure the element exists
        if (el) {
            // See if this is the webpart zone element
            if (el.className.indexOf("ms-webpart-zone") >= 0) {
                // Return it
                return el;
            }
            // See if this is the inner page zone
            if (el.className.indexOf("ms-rte-layoutszone-inner") >= 0) {
                // Set the flag
                _isContentZone = true;
                // Return it
                return el;
            }
            // Check the parent element
            return getWebPartZone(el.parentNode);
        }
        // Return nothing
        return null;
    };
    // Method to update the visibility of the webparts
    var updateWebParts = function updateWebParts(ev) {
        var selectedTabId = 0;
        // See if the event exists
        if (ev) {
            // Parse the webparts
            for (var i = 0; i < _webparts.length; i++) {
                // Get the webpart
                var wpTitle = _webparts[i].querySelector(".ms-webpart-titleText");
                if (wpTitle && wpTitle.innerText == ev.currentTarget.getAttribute("title")) {
                    // Update the selected tab id
                    selectedTabId = i;
                    break;
                }
            }
        } else {
            // Parse the webparts
            for (selectedTabId = 0; selectedTabId < _webparts.length; selectedTabId++) {
                // Break if this webpart has a title
                if (_webparts[selectedTabId].querySelector(".ms-webpart-titleText")) {
                    break;
                }
            }
        }
        // Parse the webparts
        for (var i = 0; i < _webparts.length; i++) {
            // Get the webpart
            var webpart = document.querySelector("#" + _webparts[i].id);
            if (webpart) {
                // Update the visibility
                webpart.style.display = i == selectedTabId ? "" : "none";
            }
        }
    };
    /**
     * Main
     */
    var _webparts = [];
    // Return the webpart
    var _wp = _1.WebPart({
        elementId: props.elementId,
        onRenderDisplay: function onRenderDisplay(wpInfo) {
            // Set the webparts
            _webparts = getWebParts(wpInfo);
            // Parse the webparts
            var tabs = [];
            for (var i = 0; i < _webparts.length; i++) {
                // Ensure a title exists
                var wpTitle = _webparts[i].querySelector(".ms-webpart-titleText");
                if (wpTitle) {
                    // Add the tab
                    tabs.push({
                        isSelected: i == 0,
                        name: wpTitle.innerText,
                        onClick: updateWebParts
                    });
                }
            }
            // Render the tabs
            var pivot = fabric_1.Pivot({
                className: props.className,
                el: wpInfo.el,
                isLarge: props.isLarge,
                isTabs: props.isTabs,
                tabs: tabs
            });
            // Update the webparts
            updateWebParts();
        }
    });
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });

/***/ })
/******/ ]);