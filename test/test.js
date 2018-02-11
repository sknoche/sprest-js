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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(48));
__export(__webpack_require__(49));
__export(__webpack_require__(50));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(54));
__export(__webpack_require__(55));
var Types = __webpack_require__(56);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(27));
__export(__webpack_require__(57));
__export(__webpack_require__(58));
__export(__webpack_require__(59));
__export(__webpack_require__(60));
__export(__webpack_require__(61));
__export(__webpack_require__(62));
__export(__webpack_require__(63));
__export(__webpack_require__(64));
__export(__webpack_require__(65));
__export(__webpack_require__(66));
__export(__webpack_require__(67));
__export(__webpack_require__(8));
var Types = __webpack_require__(68);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Office Fabric-UI JavaScript Library
__export(__webpack_require__(13));
// Common Components
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));
__export(__webpack_require__(23));
__export(__webpack_require__(24));
// SharePoint Components
__export(__webpack_require__(25));
// Types
var Types = __webpack_require__(83);
exports.Types = Types;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mapper = __webpack_require__(30);
exports.Mapper = Mapper;
var SPTypes = __webpack_require__(43);
exports.SPTypes = SPTypes;
var Types = __webpack_require__(44);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(26));
__export(__webpack_require__(69));
__export(__webpack_require__(70));
__export(__webpack_require__(72));
__export(__webpack_require__(73));
__export(__webpack_require__(74));
__export(__webpack_require__(75));
__export(__webpack_require__(10));
__export(__webpack_require__(76));
__export(__webpack_require__(77));
__export(__webpack_require__(9));
__export(__webpack_require__(11));
__export(__webpack_require__(78));
var SP = __webpack_require__(79);
exports.SP = SP;
var Types = __webpack_require__(80);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
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
var Helper = __webpack_require__(4);
exports.Helper = Helper;
var mapper_1 = __webpack_require__(3);
exports.SPTypes = mapper_1.SPTypes;
var Types = __webpack_require__(81);
exports.Types = Types;
__export(__webpack_require__(1));
__export(__webpack_require__(82));
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
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
/* 7 */
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

var	fixUrls = __webpack_require__(16);

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(71));
var lib_1 = __webpack_require__(1);
var _1 = __webpack_require__(4);
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
/* 10 */
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
/* 11 */
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
                            // Log
                            console.error("[gd-sprest] Unable to get the taxonomy store.");
                            // Reject the promise
                            reject();
                        }
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Log
                        console.error("[gd-sprest] Error getting the term group.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        // Reject the promise
                        reject(args);
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
                    // Log
                    console.error("[gd-sprest] Error getting the term group.");
                    console.error("[gd-sprest] Error: " + args[1].get_message());
                    // Reject the promise
                    reject(args);
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
            exports.Taxonomy.getTermsById(termStoreId, termSetId).then(function (terms) {
                // Resolve the promise
                resolve(exports.Taxonomy.toObject(terms));
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
            exports.Taxonomy.getTermGroup().then(function (_a) {
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
                    // Log
                    console.error("[gd-sprest] Error getting the terms from the default site collection.");
                    console.error("[gd-sprest] Error: " + args[1].get_message());
                    // Reject the promise
                    reject(args);
                });
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
            exports.Taxonomy.getTermsFromDefaultSC(termSetName).then(function (terms) {
                // Resolve the object
                resolve(exports.Taxonomy.toObject(terms));
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
                    // Log
                    console.error("[gd-sprest] Error getting the terms.");
                    console.error("[gd-sprest] Error: " + args[1].get_message());
                    // Reject the promise
                    reject(args);
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
            exports.Taxonomy.getTermsByGroupName(termSetName, groupName).then(function (terms) {
                // Resolve the object
                resolve(exports.Taxonomy.toObject(terms));
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
        if (terms) {
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
        }
        // Return the root term
        return root;
    }
};
//# sourceMappingURL=taxonomy.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var build_1 = __webpack_require__(2);
window.addEventListener("load", function () {
    // Get the element
    var el = document.querySelector("#test");
    if (el) {
        // Render elements
        el.innerHTML = "<div></div><div></div>";
        // Render the button
        var button = build_1.Button({
            el: el.firstElementChild,
            text: "Show Panel",
            onClick: function onClick() {
                // Show the panel
                var content = panel_1.show("<div></div><div></div>");
                // Create a field element
                build_1.Field({
                    el: content.firstElementChild,
                    fieldInfo: {
                        listName: "SPReact",
                        name: "Title"
                    }
                });
                // Create a field element
                build_1.Field({
                    el: content.lastElementChild,
                    fieldInfo: {
                        listName: "SPReact",
                        name: "TestBoolean"
                    }
                });
            }
        });
        // Render the panel
        var panel_1 = build_1.Panel({
            el: el.lastElementChild,
            headerText: "My List Form"
        });
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(14);
__webpack_require__(17);
__export(__webpack_require__(19));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(15);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./fabric.min.css", function() {
		var newContent = require("!!../../../../../node_modules/css-loader/index.js!./fabric.min.css");

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */\r\n/**\n * Office UI Fabric Core 5.0.1\n * The front-end framework for building experiences for Office 365.\n **/\n.ms-u-borderBox,.ms-u-borderBox:after,.ms-u-borderBox:before{box-sizing:border-box}.ms-u-borderBase{border:1px solid}.ms-u-clearfix{*zoom:1}.ms-u-clearfix:after,.ms-u-clearfix:before{display:table;content:'';line-height:0}.ms-u-clearfix:after{clear:both}.ms-u-normalize{box-sizing:border-box;margin:0;padding:0;box-shadow:none}.ms-u-textAlignLeft{text-align:left}.ms-u-textAlignCenter{text-align:center}.ms-u-textAlignRight{text-align:right}.ms-u-screenReaderOnly{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ms-u-textTruncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.ms-u-noWrap{white-space:nowrap}.ms-bgColor-themeDark,.ms-bgColor-themeDark--hover:hover{background-color:#005a9e}.ms-bgColor-themeDarkAlt,.ms-bgColor-themeDarkAlt--hover:hover{background-color:#106ebe}.ms-bgColor-themeDarker,.ms-bgColor-themeDarker--hover:hover{background-color:#004578}.ms-bgColor-themePrimary,.ms-bgColor-themePrimary--hover:hover{background-color:#0078d7}.ms-bgColor-themeSecondary,.ms-bgColor-themeSecondary--hover:hover{background-color:#2488d8}.ms-bgColor-themeTertiary,.ms-bgColor-themeTertiary--hover:hover{background-color:#69afe5}.ms-bgColor-themeLight,.ms-bgColor-themeLight--hover:hover{background-color:#b3d6f2}.ms-bgColor-themeLighter,.ms-bgColor-themeLighter--hover:hover{background-color:#deecf9}.ms-bgColor-themeLighterAlt,.ms-bgColor-themeLighterAlt--hover:hover{background-color:#eff6fc}.ms-bgColor-black,.ms-bgColor-black--hover:hover{background-color:#000}.ms-bgColor-neutralDark,.ms-bgColor-neutralDark--hover:hover{background-color:#212121}.ms-bgColor-neutralPrimary,.ms-bgColor-neutralPrimary--hover:hover{background-color:#333}.ms-bgColor-neutralPrimaryAlt,.ms-bgColor-neutralPrimaryAlt--hover:hover{background-color:#3c3c3c}.ms-bgColor-neutralSecondary,.ms-bgColor-neutralSecondary--hover:hover{background-color:#666}.ms-bgColor-neutralSecondaryAlt,.ms-bgColor-neutralSecondaryAlt--hover:hover{background-color:#767676}.ms-bgColor-neutralTertiary,.ms-bgColor-neutralTertiary--hover:hover{background-color:#a6a6a6}.ms-bgColor-neutralTertiaryAlt,.ms-bgColor-neutralTertiaryAlt--hover:hover{background-color:#c8c8c8}.ms-bgColor-neutralLight,.ms-bgColor-neutralLight--hover:hover{background-color:#eaeaea}.ms-bgColor-neutralLighter,.ms-bgColor-neutralLighter--hover:hover{background-color:#f4f4f4}.ms-bgColor-neutralLighterAlt,.ms-bgColor-neutralLighterAlt--hover:hover{background-color:#f8f8f8}.ms-bgColor-white,.ms-bgColor-white--hover:hover{background-color:#fff}.ms-bgColor-yellow{background-color:#ffb900}.ms-bgColor-yellowLight{background-color:#fff100}.ms-bgColor-orange{background-color:#d83b01}.ms-bgColor-orangeLight{background-color:#ea4300}.ms-bgColor-orangeLighter{background-color:#ff8c00}.ms-bgColor-redDark{background-color:#a80000}.ms-bgColor-red{background-color:#e81123}.ms-bgColor-magentaDark{background-color:#5c005c}.ms-bgColor-magenta{background-color:#b4009e}.ms-bgColor-magentaLight{background-color:#e3008c}.ms-bgColor-purpleDark{background-color:#32145a}.ms-bgColor-purple{background-color:#5c2d91}.ms-bgColor-purpleLight{background-color:#b4a0ff}.ms-bgColor-blueDark{background-color:#002050}.ms-bgColor-blueMid{background-color:#00188f}.ms-bgColor-blue{background-color:#0078d7}.ms-bgColor-blueLight{background-color:#00bcf2}.ms-bgColor-tealDark{background-color:#004b50}.ms-bgColor-teal{background-color:#008272}.ms-bgColor-tealLight{background-color:#00b294}.ms-bgColor-greenDark{background-color:#004b1c}.ms-bgColor-green{background-color:#107c10}.ms-bgColor-greenLight{background-color:#bad80a}.ms-bgColor-info{background-color:#f4f4f4}.ms-bgColor-success{background-color:#dff6dd}.ms-bgColor-severeWarning{background-color:#fed9cc}.ms-bgColor-warning{background-color:#fff4ce}.ms-bgColor-error{background-color:#fde7e9}.ms-borderColor-themeDark,.ms-borderColor-themeDark--hover:hover{border-color:#005a9e}.ms-borderColor-themeDarkAlt,.ms-borderColor-themeDarkAlt--hover:hover{border-color:#106ebe}.ms-borderColor-themeDarker,.ms-borderColor-themeDarker--hover:hover{border-color:#004578}.ms-borderColor-themePrimary,.ms-borderColor-themePrimary--hover:hover{border-color:#0078d7}.ms-borderColor-themeSecondary,.ms-borderColor-themeSecondary--hover:hover{border-color:#2488d8}.ms-borderColor-themeTertiary,.ms-borderColor-themeTertiary--hover:hover{border-color:#69afe5}.ms-borderColor-themeLight,.ms-borderColor-themeLight--hover:hover{border-color:#b3d6f2}.ms-borderColor-themeLighter,.ms-borderColor-themeLighter--hover:hover{border-color:#deecf9}.ms-borderColor-themeLighterAlt,.ms-borderColor-themeLighterAlt--hover:hover{border-color:#eff6fc}.ms-borderColor-black,.ms-borderColor-black--hover:hover{border-color:#000}.ms-borderColor-neutralDark,.ms-borderColor-neutralDark--hover:hover{border-color:#212121}.ms-borderColor-neutralPrimary,.ms-borderColor-neutralPrimary--hover:hover{border-color:#333}.ms-borderColor-neutralPrimaryAlt,.ms-borderColor-neutralPrimaryAlt--hover:hover{border-color:#3c3c3c}.ms-borderColor-neutralSecondary,.ms-borderColor-neutralSecondary--hover:hover{border-color:#666}.ms-borderColor-neutralSecondaryAlt,.ms-borderColor-neutralSecondaryAlt--hover:hover{border-color:#767676}.ms-borderColor-neutralTertiary,.ms-borderColor-neutralTertiary--hover:hover{border-color:#a6a6a6}.ms-borderColor-neutralTertiaryAlt,.ms-borderColor-neutralTertiaryAlt--hover:hover{border-color:#c8c8c8}.ms-borderColor-neutralLight,.ms-borderColor-neutralLight--hover:hover{border-color:#eaeaea}.ms-borderColor-neutralLighter,.ms-borderColor-neutralLighter--hover:hover{border-color:#f4f4f4}.ms-borderColor-neutralLighterAlt,.ms-borderColor-neutralLighterAlt--hover:hover{border-color:#f8f8f8}.ms-borderColor-white,.ms-borderColor-white--hover:hover{border-color:#fff}.ms-borderColor-yellow{border-color:#ffb900}.ms-borderColor-yellowLight{border-color:#fff100}.ms-borderColor-orange{border-color:#d83b01}.ms-borderColor-orangeLight{border-color:#ea4300}.ms-borderColor-orangeLighter{border-color:#ff8c00}.ms-borderColor-redDark{border-color:#a80000}.ms-borderColor-red{border-color:#e81123}.ms-borderColor-magentaDark{border-color:#5c005c}.ms-borderColor-magenta{border-color:#b4009e}.ms-borderColor-magentaLight{border-color:#e3008c}.ms-borderColor-purpleDark{border-color:#32145a}.ms-borderColor-purple{border-color:#5c2d91}.ms-borderColor-purpleLight{border-color:#b4a0ff}.ms-borderColor-blueDark{border-color:#002050}.ms-borderColor-blueMid{border-color:#00188f}.ms-borderColor-blue{border-color:#0078d7}.ms-borderColor-blueLight{border-color:#00bcf2}.ms-borderColor-tealDark{border-color:#004b50}.ms-borderColor-teal{border-color:#008272}.ms-borderColor-tealLight{border-color:#00b294}.ms-borderColor-greenDark{border-color:#004b1c}.ms-borderColor-green{border-color:#107c10}.ms-borderColor-greenLight{border-color:#bad80a}.ms-borderColorTop-themePrimary,.ms-borderColorTop-themePrimary--hover:hover{border-top-color:#0078d7}.ms-font-su{font-size:42px}.ms-font-su,.ms-font-xxl{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:100}.ms-font-xxl{font-size:28px}.ms-font-xl{font-size:21px;font-weight:100}.ms-font-l,.ms-font-xl{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-font-l{font-size:17px;font-weight:300}.ms-font-m-plus{font-size:15px}.ms-font-m,.ms-font-m-plus{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-font-m{font-size:14px}.ms-font-s-plus{font-size:13px}.ms-font-s,.ms-font-s-plus{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-font-s{font-size:12px}.ms-font-xs{font-size:11px;font-weight:400}.ms-font-mi,.ms-font-xs{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-font-mi{font-size:10px;font-weight:600}.ms-fontWeight-light,.ms-fontWeight-light--hover:hover{font-weight:100}.ms-fontWeight-semilight,.ms-fontWeight-semilight--hover:hover{font-weight:300}.ms-fontWeight-regular,.ms-fontWeight-regular--hover:hover{font-weight:400}.ms-fontWeight-semibold,.ms-fontWeight-semibold--hover:hover{font-weight:600}.ms-fontSize-su{font-size:42px}.ms-fontSize-xxl{font-size:28px}.ms-fontSize-xl{font-size:21px}.ms-fontSize-l{font-size:17px}.ms-fontSize-mPlus{font-size:15px}.ms-fontSize-m{font-size:14px}.ms-fontSize-sPlus{font-size:13px}.ms-fontSize-s{font-size:12px}.ms-fontSize-xs{font-size:11px}.ms-fontSize-mi{font-size:10px}.ms-fontColor-themeDarker,.ms-fontColor-themeDarker--hover:hover{color:#004578}.ms-fontColor-themeDark,.ms-fontColor-themeDark--hover:hover{color:#005a9e}.ms-fontColor-themeDarkAlt,.ms-fontColor-themeDarkAlt--hover:hover{color:#106ebe}.ms-fontColor-themePrimary,.ms-fontColor-themePrimary--hover:hover{color:#0078d7}.ms-fontColor-themeSecondary,.ms-fontColor-themeSecondary--hover:hover{color:#2488d8}.ms-fontColor-themeTertiary,.ms-fontColor-themeTertiary--hover:hover{color:#69afe5}.ms-fontColor-themeLight,.ms-fontColor-themeLight--hover:hover{color:#b3d6f2}.ms-fontColor-themeLighter,.ms-fontColor-themeLighter--hover:hover{color:#deecf9}.ms-fontColor-themeLighterAlt,.ms-fontColor-themeLighterAlt--hover:hover{color:#eff6fc}.ms-fontColor-black,.ms-fontColor-black--hover:hover{color:#000}.ms-fontColor-neutralDark,.ms-fontColor-neutralDark--hover:hover{color:#212121}.ms-fontColor-neutralPrimary,.ms-fontColor-neutralPrimary--hover:hover{color:#333}.ms-fontColor-neutralPrimaryAlt,.ms-fontColor-neutralPrimaryAlt--hover:hover{color:#3c3c3c}.ms-fontColor-neutralSecondary,.ms-fontColor-neutralSecondary--hover:hover{color:#666}.ms-fontColor-neutralSecondaryAlt,.ms-fontColor-neutralSecondaryAlt--hover:hover{color:#767676}.ms-fontColor-neutralTertiary,.ms-fontColor-neutralTertiary--hover:hover{color:#a6a6a6}.ms-fontColor-neutralTertiaryAlt,.ms-fontColor-neutralTertiaryAlt--hover:hover{color:#c8c8c8}.ms-fontColor-neutralLight,.ms-fontColor-neutralLight--hover:hover{color:#eaeaea}.ms-fontColor-neutralLighter,.ms-fontColor-neutralLighter--hover:hover{color:#f4f4f4}.ms-fontColor-neutralLighterAlt,.ms-fontColor-neutralLighterAlt--hover:hover{color:#f8f8f8}.ms-fontColor-white,.ms-fontColor-white--hover:hover{color:#fff}.ms-fontColor-yellow,.ms-fontColor-yellow--hover:hover{color:#ffb900}.ms-fontColor-yellowLight,.ms-fontColor-yellowLight--hover:hover{color:#fff100}.ms-fontColor-orange,.ms-fontColor-orange--hover:hover{color:#d83b01}.ms-fontColor-orangeLight,.ms-fontColor-orangeLight--hover:hover{color:#ea4300}.ms-fontColor-orangeLighter,.ms-fontColor-orangeLighter--hover:hover{color:#ff8c00}.ms-fontColor-redDark,.ms-fontColor-redDark--hover:hover{color:#a80000}.ms-fontColor-red,.ms-fontColor-red--hover:hover{color:#e81123}.ms-fontColor-magentaDark,.ms-fontColor-magentaDark--hover:hover{color:#5c005c}.ms-fontColor-magenta,.ms-fontColor-magenta--hover:hover{color:#b4009e}.ms-fontColor-magentaLight,.ms-fontColor-magentaLight--hover:hover{color:#e3008c}.ms-fontColor-purpleDark,.ms-fontColor-purpleDark--hover:hover{color:#32145a}.ms-fontColor-purple,.ms-fontColor-purple--hover:hover{color:#5c2d91}.ms-fontColor-purpleLight,.ms-fontColor-purpleLight--hover:hover{color:#b4a0ff}.ms-fontColor-blueDark,.ms-fontColor-blueDark--hover:hover{color:#002050}.ms-fontColor-blueMid,.ms-fontColor-blueMid--hover:hover{color:#00188f}.ms-fontColor-blue,.ms-fontColor-blue--hover:hover{color:#0078d7}.ms-fontColor-blueLight,.ms-fontColor-blueLight--hover:hover{color:#00bcf2}.ms-fontColor-tealDark,.ms-fontColor-tealDark--hover:hover{color:#004b50}.ms-fontColor-teal,.ms-fontColor-teal--hover:hover{color:#008272}.ms-fontColor-tealLight,.ms-fontColor-tealLight--hover:hover{color:#00b294}.ms-fontColor-greenDark,.ms-fontColor-greenDark--hover:hover{color:#004b1c}.ms-fontColor-green,.ms-fontColor-green--hover:hover{color:#107c10}.ms-fontColor-greenLight,.ms-fontColor-greenLight--hover:hover{color:#bad80a}.ms-fontColor-info,.ms-fontColor-info--hover:hover{color:#767676}.ms-fontColor-success,.ms-fontColor-success--hover:hover{color:#107c10}.ms-fontColor-alert,.ms-fontColor-alert--hover:hover{color:#d83b01}.ms-fontColor-warning,.ms-fontColor-warning--hover:hover{color:#767676}.ms-fontColor-severeWarning,.ms-fontColor-severeWarning--hover:hover{color:#d83b01}.ms-fontColor-error,.ms-fontColor-error--hover:hover{color:#a80000}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Light'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.ttf) format('truetype');font-weight:100;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Semibold'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.ttf) format('truetype');font-weight:600;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Semilight'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.ttf) format('truetype');font-weight:200;font-style:normal}@font-face{font-family:FabricMDL2Icons;src:url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.ttf) format('truetype');font-weight:400;font-style:normal}.ms-Icon{-moz-osx-font-smoothing:grayscale;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none}.ms-Icon,.ms-Icon--circle{-webkit-font-smoothing:antialiased;display:inline-block}.ms-Icon--circle{position:relative;font-size:1rem;width:1em;height:1em;margin:0 .5em 0 0;padding:0;text-align:left}.ms-Icon--circle:after,.ms-Icon--circle:before{line-height:1;font-size:inherit}.ms-Icon--circle:before{display:block;width:100%;height:100%;margin:0;padding:0;vertical-align:top;position:absolute}.ms-Icon--circle:after{content:'\\E000';position:absolute;top:0;left:0;transform:scale(2);transform-origin:50% 50%;z-index:0}.ms-Icon--xs{font-size:10px}.ms-Icon--s{font-size:12px}.ms-Icon--m{font-size:16px}.ms-Icon--l{font-size:20px}.ms-Icon--DecreaseIndentLegacy:before{content:'\\E290'}.ms-Icon--IncreaseIndentLegacy:before{content:'\\E291'}.ms-Icon--GlobalNavButton:before{content:'\\E700'}.ms-Icon--InternetSharing:before{content:'\\E704'}.ms-Icon--Brightness:before{content:'\\E706'}.ms-Icon--MapPin:before{content:'\\E707'}.ms-Icon--Airplane:before{content:'\\E709'}.ms-Icon--Tablet:before{content:'\\E70A'}.ms-Icon--QuickNote:before{content:'\\E70B'}.ms-Icon--ChevronDown:before{content:'\\E70D'}.ms-Icon--ChevronUp:before{content:'\\E70E'}.ms-Icon--Edit:before{content:'\\E70F'}.ms-Icon--Add:before{content:'\\E710'}.ms-Icon--Cancel:before{content:'\\E711'}.ms-Icon--More:before{content:'\\E712'}.ms-Icon--Settings:before{content:'\\E713'}.ms-Icon--Video:before{content:'\\E714'}.ms-Icon--Mail:before{content:'\\E715'}.ms-Icon--People:before{content:'\\E716'}.ms-Icon--Phone:before{content:'\\E717'}.ms-Icon--Pin:before{content:'\\E718'}.ms-Icon--Shop:before{content:'\\E719'}.ms-Icon--Link:before{content:'\\E71B'}.ms-Icon--Filter:before{content:'\\E71C'}.ms-Icon--Zoom:before{content:'\\E71E'}.ms-Icon--ZoomOut:before{content:'\\E71F'}.ms-Icon--Microphone:before{content:'\\E720'}.ms-Icon--Search:before{content:'\\E721'}.ms-Icon--Camera:before{content:'\\E722'}.ms-Icon--Attach:before{content:'\\E723'}.ms-Icon--Send:before{content:'\\E724'}.ms-Icon--FavoriteList:before{content:'\\E728'}.ms-Icon--PageSolid:before{content:'\\E729'}.ms-Icon--Forward:before{content:'\\E72A'}.ms-Icon--Back:before{content:'\\E72B'}.ms-Icon--Refresh:before{content:'\\E72C'}.ms-Icon--Share:before{content:'\\E72D'}.ms-Icon--Lock:before{content:'\\E72E'}.ms-Icon--EMI:before{content:'\\E731'}.ms-Icon--MiniLink:before{content:'\\E732'}.ms-Icon--Blocked:before{content:'\\E733'}.ms-Icon--FavoriteStar:before{content:'\\E734'}.ms-Icon--FavoriteStarFill:before{content:'\\E735'}.ms-Icon--ReadingMode:before{content:'\\E736'}.ms-Icon--Remove:before{content:'\\E738'}.ms-Icon--Checkbox:before{content:'\\E739'}.ms-Icon--CheckboxComposite:before{content:'\\E73A'}.ms-Icon--CheckboxIndeterminate:before{content:'\\E73C'}.ms-Icon--CheckMark:before{content:'\\E73E'}.ms-Icon--BackToWindow:before{content:'\\E73F'}.ms-Icon--FullScreen:before{content:'\\E740'}.ms-Icon--Print:before{content:'\\E749'}.ms-Icon--Up:before{content:'\\E74A'}.ms-Icon--Down:before{content:'\\E74B'}.ms-Icon--Delete:before{content:'\\E74D'}.ms-Icon--Save:before{content:'\\E74E'}.ms-Icon--Sad:before{content:'\\E757'}.ms-Icon--SIPMove:before{content:'\\E759'}.ms-Icon--EraseTool:before{content:'\\E75C'}.ms-Icon--GripperTool:before{content:'\\E75E'}.ms-Icon--Dialpad:before{content:'\\E75F'}.ms-Icon--PageLeft:before{content:'\\E760'}.ms-Icon--PageRight:before{content:'\\E761'}.ms-Icon--MultiSelect:before{content:'\\E762'}.ms-Icon--Play:before{content:'\\E768'}.ms-Icon--Pause:before{content:'\\E769'}.ms-Icon--ChevronLeft:before{content:'\\E76B'}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Icon--Emoji2:before{content:'\\E76E'}.ms-Icon--System:before{content:'\\E770'}.ms-Icon--Globe:before{content:'\\E774'}.ms-Icon--ContactInfo:before{content:'\\E779'}.ms-Icon--Unpin:before{content:'\\E77A'}.ms-Icon--Contact:before{content:'\\E77B'}.ms-Icon--Memo:before{content:'\\E77C'}.ms-Icon--WindowsLogo:before{content:'\\E782'}.ms-Icon--Error:before{content:'\\E783'}.ms-Icon--Unlock:before{content:'\\E785'}.ms-Icon--Calendar:before{content:'\\E787'}.ms-Icon--Megaphone:before{content:'\\E789'}.ms-Icon--AutoEnhanceOn:before{content:'\\E78D'}.ms-Icon--AutoEnhanceOff:before{content:'\\E78E'}.ms-Icon--Color:before{content:'\\E790'}.ms-Icon--SaveAs:before{content:'\\E792'}.ms-Icon--Light:before{content:'\\E793'}.ms-Icon--Filters:before{content:'\\E795'}.ms-Icon--Contrast:before{content:'\\E7A1'}.ms-Icon--Redo:before{content:'\\E7A6'}.ms-Icon--Undo:before{content:'\\E7A7'}.ms-Icon--PhotoCollection:before{content:'\\E7AA'}.ms-Icon--Album:before{content:'\\E7AB'}.ms-Icon--Rotate:before{content:'\\E7AD'}.ms-Icon--PanoIndicator:before{content:'\\E7B0'}.ms-Icon--ThumbnailView:before{content:'\\E7B6'}.ms-Icon--Package:before{content:'\\E7B8'}.ms-Icon--Warning:before{content:'\\E7BA'}.ms-Icon--Financial:before{content:'\\E7BB'}.ms-Icon--ShoppingCart:before{content:'\\E7BF'}.ms-Icon--Train:before{content:'\\E7C0'}.ms-Icon--Flag:before{content:'\\E7C1'}.ms-Icon--Move:before{content:'\\E7C2'}.ms-Icon--Page:before{content:'\\E7C3'}.ms-Icon--TouchPointer:before{content:'\\E7C9'}.ms-Icon--Merge:before{content:'\\E7D5'}.ms-Icon--TurnRight:before{content:'\\E7DB'}.ms-Icon--Ferry:before{content:'\\E7E3'}.ms-Icon--Tab:before{content:'\\E7E9'}.ms-Icon--Admin:before{content:'\\E7EF'}.ms-Icon--TVMonitor:before{content:'\\E7F4'}.ms-Icon--Speakers:before{content:'\\E7F5'}.ms-Icon--Nav2DMapView:before{content:'\\E800'}.ms-Icon--Car:before{content:'\\E804'}.ms-Icon--EatDrink:before{content:'\\E807'}.ms-Icon--LocationCircle:before{content:'\\E80E'}.ms-Icon--Home:before{content:'\\E80F'}.ms-Icon--SwitcherStartEnd:before{content:'\\E810'}.ms-Icon--IncidentTriangle:before{content:'\\E814'}.ms-Icon--Touch:before{content:'\\E815'}.ms-Icon--MapDirections:before{content:'\\E816'}.ms-Icon--History:before{content:'\\E81C'}.ms-Icon--Location:before{content:'\\E81D'}.ms-Icon--Work:before{content:'\\E821'}.ms-Icon--Recent:before{content:'\\E823'}.ms-Icon--Hotel:before{content:'\\E824'}.ms-Icon--LocationDot:before{content:'\\E827'}.ms-Icon--News:before{content:'\\E900'}.ms-Icon--Chat:before{content:'\\E901'}.ms-Icon--Group:before{content:'\\E902'}.ms-Icon--View:before{content:'\\E890'}.ms-Icon--Clear:before{content:'\\E894'}.ms-Icon--Sync:before{content:'\\E895'}.ms-Icon--Download:before{content:'\\E896'}.ms-Icon--Help:before{content:'\\E897'}.ms-Icon--Upload:before{content:'\\E898'}.ms-Icon--Emoji:before{content:'\\E899'}.ms-Icon--MailForward:before{content:'\\E89C'}.ms-Icon--ClosePane:before{content:'\\E89F'}.ms-Icon--OpenPane:before{content:'\\E8A0'}.ms-Icon--PreviewLink:before{content:'\\E8A1'}.ms-Icon--ZoomIn:before{content:'\\E8A3'}.ms-Icon--Bookmarks:before{content:'\\E8A4'}.ms-Icon--Document:before{content:'\\E8A5'}.ms-Icon--ProtectedDocument:before{content:'\\E8A6'}.ms-Icon--OpenInNewWindow:before{content:'\\E8A7'}.ms-Icon--MailFill:before{content:'\\E8A8'}.ms-Icon--ViewAll:before{content:'\\E8A9'}.ms-Icon--Switch:before{content:'\\E8AB'}.ms-Icon--Rename:before{content:'\\E8AC'}.ms-Icon--Folder:before{content:'\\E8B7'}.ms-Icon--Picture:before{content:'\\E8B9'}.ms-Icon--ShowResults:before{content:'\\E8BC'}.ms-Icon--Message:before{content:'\\E8BD'}.ms-Icon--CalendarDay:before{content:'\\E8BF'}.ms-Icon--CalendarWeek:before{content:'\\E8C0'}.ms-Icon--MailReplyAll:before{content:'\\E8C2'}.ms-Icon--Read:before{content:'\\E8C3'}.ms-Icon--PaymentCard:before{content:'\\E8C7'}.ms-Icon--Copy:before{content:'\\E8C8'}.ms-Icon--Important:before{content:'\\E8C9'}.ms-Icon--MailReply:before{content:'\\E8CA'}.ms-Icon--Sort:before{content:'\\E8CB'}.ms-Icon--GotoToday:before{content:'\\E8D1'}.ms-Icon--Font:before{content:'\\E8D2'}.ms-Icon--FontColor:before{content:'\\E8D3'}.ms-Icon--FolderFill:before{content:'\\E8D5'}.ms-Icon--Permissions:before{content:'\\E8D7'}.ms-Icon--DisableUpdates:before{content:'\\E8D8'}.ms-Icon--Unfavorite:before{content:'\\E8D9'}.ms-Icon--Italic:before{content:'\\E8DB'}.ms-Icon--Underline:before{content:'\\E8DC'}.ms-Icon--Bold:before{content:'\\E8DD'}.ms-Icon--MoveToFolder:before{content:'\\E8DE'}.ms-Icon--Dislike:before{content:'\\E8E0'}.ms-Icon--Like:before{content:'\\E8E1'}.ms-Icon--AlignRight:before{content:'\\E8E2'}.ms-Icon--AlignCenter:before{content:'\\E8E3'}.ms-Icon--AlignLeft:before{content:'\\E8E4'}.ms-Icon--OpenFile:before{content:'\\E8E5'}.ms-Icon--FontDecrease:before{content:'\\E8E7'}.ms-Icon--FontIncrease:before{content:'\\E8E8'}.ms-Icon--FontSize:before{content:'\\E8E9'}.ms-Icon--CellPhone:before{content:'\\E8EA'}.ms-Icon--Tag:before{content:'\\E8EC'}.ms-Icon--Library:before{content:'\\E8F1'}.ms-Icon--PostUpdate:before{content:'\\E8F3'}.ms-Icon--NewFolder:before{content:'\\E8F4'}.ms-Icon--CalendarReply:before{content:'\\E8F5'}.ms-Icon--UnsyncFolder:before{content:'\\E8F6'}.ms-Icon--SyncFolder:before{content:'\\E8F7'}.ms-Icon--BlockContact:before{content:'\\E8F8'}.ms-Icon--AddFriend:before{content:'\\E8FA'}.ms-Icon--BulletedList:before{content:'\\E8FD'}.ms-Icon--Preview:before{content:'\\E8FF'}.ms-Icon--DockLeft:before{content:'\\E90C'}.ms-Icon--DockRight:before{content:'\\E90D'}.ms-Icon--Repair:before{content:'\\E90F'}.ms-Icon--Accounts:before{content:'\\E910'}.ms-Icon--RadioBullet:before{content:'\\E915'}.ms-Icon--Stopwatch:before{content:'\\E916'}.ms-Icon--Clock:before{content:'\\E917'}.ms-Icon--WorldClock:before{content:'\\E918'}.ms-Icon--AlarmClock:before{content:'\\E919'}.ms-Icon--Hospital:before{content:'\\E91D'}.ms-Icon--Timer:before{content:'\\E91E'}.ms-Icon--FullCircleMask:before{content:'\\E91F'}.ms-Icon--LocationFill:before{content:'\\E920'}.ms-Icon--ChromeMinimize:before{content:'\\E921'}.ms-Icon--Annotation:before{content:'\\E924'}.ms-Icon--ChromeClose:before{content:'\\E8BB'}.ms-Icon--Accept:before{content:'\\E8FB'}.ms-Icon--Fingerprint:before{content:'\\E928'}.ms-Icon--Handwriting:before{content:'\\E929'}.ms-Icon--StackIndicator:before{content:'\\E7FF'}.ms-Icon--Completed:before{content:'\\E930'}.ms-Icon--Label:before{content:'\\E932'}.ms-Icon--FlickDown:before{content:'\\E935'}.ms-Icon--FlickUp:before{content:'\\E936'}.ms-Icon--FlickLeft:before{content:'\\E937'}.ms-Icon--FlickRight:before{content:'\\E938'}.ms-Icon--MusicInCollection:before{content:'\\E940'}.ms-Icon--OneDrive:before{content:'\\E941'}.ms-Icon--CompassNW:before{content:'\\E942'}.ms-Icon--Code:before{content:'\\E943'}.ms-Icon--LightningBolt:before{content:'\\E945'}.ms-Icon--Info:before{content:'\\E946'}.ms-Icon--CalculatorAddition:before{content:'\\E948'}.ms-Icon--CalculatorSubtract:before{content:'\\E949'}.ms-Icon--PrintfaxPrinterFile:before{content:'\\E956'}.ms-Icon--Health:before{content:'\\E95E'}.ms-Icon--ChevronUpSmall:before{content:'\\E96D'}.ms-Icon--ChevronDownSmall:before{content:'\\E96E'}.ms-Icon--ChevronLeftSmall:before{content:'\\E96F'}.ms-Icon--ChevronRightSmall:before{content:'\\E970'}.ms-Icon--ChevronUpMed:before{content:'\\E971'}.ms-Icon--ChevronDownMed:before{content:'\\E972'}.ms-Icon--ChevronLeftMed:before{content:'\\E973'}.ms-Icon--ChevronRightMed:before{content:'\\E974'}.ms-Icon--Dictionary:before{content:'\\E82D'}.ms-Icon--ChromeBack:before{content:'\\E830'}.ms-Icon--PC1:before{content:'\\E977'}.ms-Icon--PresenceChickletVideo:before{content:'\\E979'}.ms-Icon--Reply:before{content:'\\E97A'}.ms-Icon--DoubleChevronLeftMed:before{content:'\\E991'}.ms-Icon--Volume0:before{content:'\\E992'}.ms-Icon--Volume1:before{content:'\\E993'}.ms-Icon--Volume2:before{content:'\\E994'}.ms-Icon--Volume3:before{content:'\\E995'}.ms-Icon--CaretHollow:before{content:'\\E817'}.ms-Icon--CaretSolid:before{content:'\\E818'}.ms-Icon--FolderOpen:before{content:'\\E838'}.ms-Icon--Pinned:before{content:'\\E840'}.ms-Icon--PinnedFill:before{content:'\\E842'}.ms-Icon--Chart:before{content:'\\E999'}.ms-Icon--BidiLtr:before{content:'\\E9AA'}.ms-Icon--BidiRtl:before{content:'\\E9AB'}.ms-Icon--RevToggleKey:before{content:'\\E845'}.ms-Icon--RightDoubleQuote:before{content:'\\E9B1'}.ms-Icon--Sunny:before{content:'\\E9BD'}.ms-Icon--CloudWeather:before{content:'\\E9BE'}.ms-Icon--Cloudy:before{content:'\\E9BF'}.ms-Icon--PartlyCloudyDay:before{content:'\\E9C0'}.ms-Icon--PartlyCloudyNight:before{content:'\\E9C1'}.ms-Icon--ClearNight:before{content:'\\E9C2'}.ms-Icon--RainShowersDay:before{content:'\\E9C3'}.ms-Icon--Rain:before{content:'\\E9C4'}.ms-Icon--Thunderstorms:before{content:'\\E9C6'}.ms-Icon--RainSnow:before{content:'\\E9C7'}.ms-Icon--BlowingSnow:before{content:'\\E9C9'}.ms-Icon--Frigid:before{content:'\\E9CA'}.ms-Icon--Fog:before{content:'\\E9CB'}.ms-Icon--Squalls:before{content:'\\E9CC'}.ms-Icon--Duststorm:before{content:'\\E9CD'}.ms-Icon--Precipitation:before{content:'\\E9CF'}.ms-Icon--Ringer:before{content:'\\EA8F'}.ms-Icon--PDF:before{content:'\\EA90'}.ms-Icon--SortLines:before{content:'\\E9D0'}.ms-Icon--Ribbon:before{content:'\\E9D1'}.ms-Icon--CheckList:before{content:'\\E9D5'}.ms-Icon--Generate:before{content:'\\E9DA'}.ms-Icon--Equalizer:before{content:'\\E9E9'}.ms-Icon--BarChartHorizontal:before{content:'\\E9EB'}.ms-Icon--Freezing:before{content:'\\E9EF'}.ms-Icon--SnowShowerDay:before{content:'\\E9FD'}.ms-Icon--HailDay:before{content:'\\EA00'}.ms-Icon--WorkFlow:before{content:'\\EA01'}.ms-Icon--StoreLogoMed:before{content:'\\EA04'}.ms-Icon--RainShowersNight:before{content:'\\EA0F'}.ms-Icon--SnowShowerNight:before{content:'\\EA11'}.ms-Icon--HailNight:before{content:'\\EA13'}.ms-Icon--Info2:before{content:'\\EA1F'}.ms-Icon--StoreLogo:before{content:'\\EA96'}.ms-Icon--MultiSelectMirrored:before{content:'\\EA98'}.ms-Icon--Broom:before{content:'\\EA99'}.ms-Icon--MusicInCollectionFill:before{content:'\\EA36'}.ms-Icon--List:before{content:'\\EA37'}.ms-Icon--Asterisk:before{content:'\\EA38'}.ms-Icon--ErrorBadge:before{content:'\\EA39'}.ms-Icon--CircleRing:before{content:'\\EA3A'}.ms-Icon--CircleFill:before{content:'\\EA3B'}.ms-Icon--BookmarksMirrored:before{content:'\\EA41'}.ms-Icon--BulletedListMirrored:before{content:'\\EA42'}.ms-Icon--CaretHollowMirrored:before{content:'\\EA45'}.ms-Icon--CaretSolidMirrored:before{content:'\\EA46'}.ms-Icon--ChromeBackMirrored:before{content:'\\EA47'}.ms-Icon--ClosePaneMirrored:before{content:'\\EA49'}.ms-Icon--DockLeftMirrored:before{content:'\\EA4C'}.ms-Icon--DoubleChevronLeftMedMirrored:before{content:'\\EA4D'}.ms-Icon--HelpMirrored:before{content:'\\EA51'}.ms-Icon--ListMirrored:before{content:'\\EA55'}.ms-Icon--MailForwardMirrored:before{content:'\\EA56'}.ms-Icon--MailReplyMirrored:before{content:'\\EA57'}.ms-Icon--MailReplyAllMirrored:before{content:'\\EA58'}.ms-Icon--OpenPaneMirrored:before{content:'\\EA5B'}.ms-Icon--SendMirrored:before{content:'\\EA63'}.ms-Icon--ShowResultsMirrored:before{content:'\\EA65'}.ms-Icon--ThumbnailViewMirrored:before{content:'\\EA67'}.ms-Icon--Lightbulb:before{content:'\\EA80'}.ms-Icon--StatusTriangle:before{content:'\\EA82'}.ms-Icon--VolumeDisabled:before{content:'\\EA85'}.ms-Icon--Puzzle:before{content:'\\EA86'}.ms-Icon--EmojiNeutral:before{content:'\\EA87'}.ms-Icon--EmojiDisappointed:before{content:'\\EA88'}.ms-Icon--HomeSolid:before{content:'\\EA8A'}.ms-Icon--Cocktails:before{content:'\\EA9D'}.ms-Icon--Articles:before{content:'\\EAC1'}.ms-Icon--Cycling:before{content:'\\EAC7'}.ms-Icon--DietPlanNotebook:before{content:'\\EAC8'}.ms-Icon--Pill:before{content:'\\EACB'}.ms-Icon--Running:before{content:'\\EADA'}.ms-Icon--Weights:before{content:'\\EADB'}.ms-Icon--BarChart4:before{content:'\\EAE7'}.ms-Icon--CirclePlus:before{content:'\\EAEE'}.ms-Icon--Coffee:before{content:'\\EAEF'}.ms-Icon--Cotton:before{content:'\\EAF3'}.ms-Icon--Market:before{content:'\\EAFC'}.ms-Icon--Money:before{content:'\\EAFD'}.ms-Icon--PieDouble:before{content:'\\EB04'}.ms-Icon--RemoveFilter:before{content:'\\EB08'}.ms-Icon--StockDown:before{content:'\\EB0F'}.ms-Icon--StockUp:before{content:'\\EB11'}.ms-Icon--Cricket:before{content:'\\EB1E'}.ms-Icon--Golf:before{content:'\\EB1F'}.ms-Icon--Baseball:before{content:'\\EB20'}.ms-Icon--Soccer:before{content:'\\EB21'}.ms-Icon--MoreSports:before{content:'\\EB22'}.ms-Icon--AutoRacing:before{content:'\\EB24'}.ms-Icon--CollegeHoops:before{content:'\\EB25'}.ms-Icon--CollegeFootball:before{content:'\\EB26'}.ms-Icon--ProFootball:before{content:'\\EB27'}.ms-Icon--ProHockey:before{content:'\\EB28'}.ms-Icon--Rugby:before{content:'\\EB2D'}.ms-Icon--Tennis:before{content:'\\EB33'}.ms-Icon--Arrivals:before{content:'\\EB34'}.ms-Icon--Design:before{content:'\\EB3C'}.ms-Icon--Website:before{content:'\\EB41'}.ms-Icon--Drop:before{content:'\\EB42'}.ms-Icon--Snow:before{content:'\\EB46'}.ms-Icon--BusSolid:before{content:'\\EB47'}.ms-Icon--FerrySolid:before{content:'\\EB48'}.ms-Icon--TrainSolid:before{content:'\\EB4D'}.ms-Icon--Heart:before{content:'\\EB51'}.ms-Icon--HeartFill:before{content:'\\EB52'}.ms-Icon--Ticket:before{content:'\\EB54'}.ms-Icon--AzureLogo:before{content:'\\EB6A'}.ms-Icon--BingLogo:before{content:'\\EB6B'}.ms-Icon--MSNLogo:before{content:'\\EB6C'}.ms-Icon--OutlookLogo:before{content:'\\EB6D'}.ms-Icon--OfficeLogo:before{content:'\\EB6E'}.ms-Icon--SkypeLogo:before{content:'\\EB6F'}.ms-Icon--Door:before{content:'\\EB75'}.ms-Icon--EditMirrored:before{content:'\\EB7E'}.ms-Icon--GiftCard:before{content:'\\EB8E'}.ms-Icon--DoubleBookmark:before{content:'\\EB8F'}.ms-Icon--StatusErrorFull:before{content:'\\EB90'}.ms-Icon--Certificate:before{content:'\\EB95'}.ms-Icon--Photo2:before{content:'\\EB9F'}.ms-Icon--CloudDownload:before{content:'\\EBD3'}.ms-Icon--WindDirection:before{content:'\\EBE6'}.ms-Icon--Family:before{content:'\\EBDA'}.ms-Icon--CSS:before{content:'\\EBEF'}.ms-Icon--JS:before{content:'\\EBF0'}.ms-Icon--ReminderGroup:before{content:'\\EBF8'}.ms-Icon--Section:before{content:'\\EC0C'}.ms-Icon--OneNoteLogo:before{content:'\\EC0D'}.ms-Icon--ToggleFilled:before{content:'\\EC11'}.ms-Icon--ToggleBorder:before{content:'\\EC12'}.ms-Icon--SliderThumb:before{content:'\\EC13'}.ms-Icon--ToggleThumb:before{content:'\\EC14'}.ms-Icon--Documentation:before{content:'\\EC17'}.ms-Icon--Badge:before{content:'\\EC1B'}.ms-Icon--Giftbox:before{content:'\\EC1F'}.ms-Icon--ExcelLogo:before{content:'\\EC28'}.ms-Icon--WordLogo:before{content:'\\EC29'}.ms-Icon--PowerPointLogo:before{content:'\\EC2A'}.ms-Icon--Cafe:before{content:'\\EC32'}.ms-Icon--SpeedHigh:before{content:'\\EC4A'}.ms-Icon--MusicNote:before{content:'\\EC4F'}.ms-Icon--EdgeLogo:before{content:'\\EC60'}.ms-Icon--CompletedSolid:before{content:'\\EC61'}.ms-Icon--AlbumRemove:before{content:'\\EC62'}.ms-Icon--MessageFill:before{content:'\\EC70'}.ms-Icon--TabletSelected:before{content:'\\EC74'}.ms-Icon--MobileSelected:before{content:'\\EC75'}.ms-Icon--LaptopSelected:before{content:'\\EC76'}.ms-Icon--TVMonitorSelected:before{content:'\\EC77'}.ms-Icon--DeveloperTools:before{content:'\\EC7A'}.ms-Icon--InsertTextBox:before{content:'\\EC7D'}.ms-Icon--LowerBrightness:before{content:'\\EC8A'}.ms-Icon--CloudUpload:before{content:'\\EC8E'}.ms-Icon--DateTime:before{content:'\\EC92'}.ms-Icon--Event:before{content:'\\ECA3'}.ms-Icon--Cake:before{content:'\\ECA4'}.ms-Icon--Tiles:before{content:'\\ECA5'}.ms-Icon--Org:before{content:'\\ECA6'}.ms-Icon--PartyLeader:before{content:'\\ECA7'}.ms-Icon--DRM:before{content:'\\ECA8'}.ms-Icon--CloudAdd:before{content:'\\ECA9'}.ms-Icon--AppIconDefault:before{content:'\\ECAA'}.ms-Icon--Photo2Add:before{content:'\\ECAB'}.ms-Icon--Photo2Remove:before{content:'\\ECAC'}.ms-Icon--POI:before{content:'\\ECAF'}.ms-Icon--FacebookLogo:before{content:'\\ECB3'}.ms-Icon--AddTo:before{content:'\\ECC8'}.ms-Icon--RadioBtnOn:before{content:'\\ECCB'}.ms-Icon--Embed:before{content:'\\ECCE'}.ms-Icon--VideoSolid:before{content:'\\EA0C'}.ms-Icon--Teamwork:before{content:'\\EA12'}.ms-Icon--PeopleAdd:before{content:'\\EA15'}.ms-Icon--Glasses:before{content:'\\EA16'}.ms-Icon--DateTime2:before{content:'\\EA17'}.ms-Icon--Shield:before{content:'\\EA18'}.ms-Icon--Header1:before{content:'\\EA19'}.ms-Icon--PageAdd:before{content:'\\EA1A'}.ms-Icon--NumberedList:before{content:'\\EA1C'}.ms-Icon--PowerBILogo:before{content:'\\EA1E'}.ms-Icon--Product:before{content:'\\ECDC'}.ms-Icon--Blocked2:before{content:'\\ECE4'}.ms-Icon--FangBody:before{content:'\\ECEB'}.ms-Icon--Glimmer:before{content:'\\ECF4'}.ms-Icon--ChatInviteFriend:before{content:'\\ECFE'}.ms-Icon--SharepointLogo:before{content:'\\ED18'}.ms-Icon--YammerLogo:before{content:'\\ED19'}.ms-Icon--ReturnToSession:before{content:'\\ED24'}.ms-Icon--OpenFolderHorizontal:before{content:'\\ED25'}.ms-Icon--CalendarMirrored:before{content:'\\ED28'}.ms-Icon--SwayLogo:before{content:'\\ED29'}.ms-Icon--OutOfOffice:before{content:'\\ED34'}.ms-Icon--Trophy:before{content:'\\ED3F'}.ms-Icon--ReopenPages:before{content:'\\ED50'}.ms-Icon--AADLogo:before{content:'\\ED68'}.ms-Icon--AccessLogo:before{content:'\\ED69'}.ms-Icon--AdminALogo:before{content:'\\ED6A'}.ms-Icon--AdminCLogo:before{content:'\\ED6B'}.ms-Icon--AdminDLogo:before{content:'\\ED6C'}.ms-Icon--AdminELogo:before{content:'\\ED6D'}.ms-Icon--AdminLLogo:before{content:'\\ED6E'}.ms-Icon--AdminMLogo:before{content:'\\ED6F'}.ms-Icon--AdminOLogo:before{content:'\\ED70'}.ms-Icon--AdminPLogo:before{content:'\\ED71'}.ms-Icon--AdminSLogo:before{content:'\\ED72'}.ms-Icon--AdminYLogo:before{content:'\\ED73'}.ms-Icon--AlchemyLogo:before{content:'\\ED74'}.ms-Icon--BoxLogo:before{content:'\\ED75'}.ms-Icon--DelveLogo:before{content:'\\ED76'}.ms-Icon--DropboxLogo:before{content:'\\ED77'}.ms-Icon--ExchangeLogo:before{content:'\\ED78'}.ms-Icon--LyncLogo:before{content:'\\ED79'}.ms-Icon--OfficeVideoLogo:before{content:'\\ED7A'}.ms-Icon--ParatureLogo:before{content:'\\ED7B'}.ms-Icon--SocialListeningLogo:before{content:'\\ED7C'}.ms-Icon--VisioLogo:before{content:'\\ED7D'}.ms-Icon--Balloons:before{content:'\\ED7E'}.ms-Icon--Cat:before{content:'\\ED7F'}.ms-Icon--MailAlert:before{content:'\\ED80'}.ms-Icon--MailCheck:before{content:'\\ED81'}.ms-Icon--MailLowImportance:before{content:'\\ED82'}.ms-Icon--MailPause:before{content:'\\ED83'}.ms-Icon--MailRepeat:before{content:'\\ED84'}.ms-Icon--SecurityGroup:before{content:'\\ED85'}.ms-Icon--Table:before{content:'\\ED86'}.ms-Icon--VoicemailForward:before{content:'\\ED87'}.ms-Icon--VoicemailReply:before{content:'\\ED88'}.ms-Icon--Waffle:before{content:'\\ED89'}.ms-Icon--RemoveEvent:before{content:'\\ED8A'}.ms-Icon--EventInfo:before{content:'\\ED8B'}.ms-Icon--ForwardEvent:before{content:'\\ED8C'}.ms-Icon--WipePhone:before{content:'\\ED8D'}.ms-Icon--AddOnlineMeeting:before{content:'\\ED8E'}.ms-Icon--JoinOnlineMeeting:before{content:'\\ED8F'}.ms-Icon--RemoveLink:before{content:'\\ED90'}.ms-Icon--PeopleBlock:before{content:'\\ED91'}.ms-Icon--PeopleRepeat:before{content:'\\ED92'}.ms-Icon--PeopleAlert:before{content:'\\ED93'}.ms-Icon--PeoplePause:before{content:'\\ED94'}.ms-Icon--TransferCall:before{content:'\\ED95'}.ms-Icon--AddPhone:before{content:'\\ED96'}.ms-Icon--UnknownCall:before{content:'\\ED97'}.ms-Icon--NoteReply:before{content:'\\ED98'}.ms-Icon--NoteForward:before{content:'\\ED99'}.ms-Icon--NotePinned:before{content:'\\ED9A'}.ms-Icon--RemoveOccurrence:before{content:'\\ED9B'}.ms-Icon--Timeline:before{content:'\\ED9C'}.ms-Icon--EditNote:before{content:'\\ED9D'}.ms-Icon--CircleHalfFull:before{content:'\\ED9E'}.ms-Icon--Room:before{content:'\\ED9F'}.ms-Icon--Unsubscribe:before{content:'\\EDA0'}.ms-Icon--Subscribe:before{content:'\\EDA1'}.ms-Icon--RecurringTask:before{content:'\\EDB2'}.ms-Icon--TaskManager:before{content:'\\EDB7'}.ms-Icon--TaskManagerMirrored:before{content:'\\EDB8'}.ms-Icon--Combine:before{content:'\\EDBB'}.ms-Icon--Split:before{content:'\\EDBC'}.ms-Icon--DoubleChevronUp:before{content:'\\EDBD'}.ms-Icon--DoubleChevronLeft:before{content:'\\EDBE'}.ms-Icon--DoubleChevronRight:before{content:'\\EDBF'}.ms-Icon--Ascending:before{content:'\\EDC0'}.ms-Icon--Descending:before{content:'\\EDC1'}.ms-Icon--TextBox:before{content:'\\EDC2'}.ms-Icon--TextField:before{content:'\\EDC3'}.ms-Icon--NumberField:before{content:'\\EDC4'}.ms-Icon--Dropdown:before{content:'\\EDC5'}.ms-Icon--BookingsLogo:before{content:'\\EDC7'}.ms-Icon--ClassNotebookLogo:before{content:'\\EDC8'}.ms-Icon--CollabsDBLogo:before{content:'\\EDC9'}.ms-Icon--DelveAnalyticsLogo:before{content:'\\EDCA'}.ms-Icon--DocsLogo:before{content:'\\EDCB'}.ms-Icon--Dynamics365Logo:before,.ms-Icon--DynamicsCRMLogo:before{content:'\\EDCC'}.ms-Icon--DynamicSMBLogo:before{content:'\\EDCD'}.ms-Icon--OfficeAssistantLogo:before{content:'\\EDCE'}.ms-Icon--OfficeStoreLogo:before{content:'\\EDCF'}.ms-Icon--OneNoteEduLogo:before{content:'\\EDD0'}.ms-Icon--Planner:before{content:'\\EDD1'}.ms-Icon--PowerApps:before{content:'\\EDD2'}.ms-Icon--Suitcase:before{content:'\\EDD3'}.ms-Icon--ProjectLogo:before{content:'\\EDD4'}.ms-Icon--CaretLeft8:before{content:'\\EDD5'}.ms-Icon--CaretRight8:before{content:'\\EDD6'}.ms-Icon--CaretUp8:before{content:'\\EDD7'}.ms-Icon--CaretDown8:before{content:'\\EDD8'}.ms-Icon--CaretLeftSolid8:before{content:'\\EDD9'}.ms-Icon--CaretRightSolid8:before,.ms-Icon--CarotRightSolid8:before{content:'\\EDDA'}.ms-Icon--CaretUpSolid8:before{content:'\\EDDB'}.ms-Icon--CaretDownSolid8:before{content:'\\EDDC'}.ms-Icon--ClearFormatting:before{content:'\\EDDD'}.ms-Icon--Superscript:before{content:'\\EDDE'}.ms-Icon--Subscript:before{content:'\\EDDF'}.ms-Icon--Strikethrough:before{content:'\\EDE0'}.ms-Icon--SingleBookmark:before{content:'\\EDFF'}.ms-Icon--DoubleChevronDown:before{content:'\\EE04'}.ms-Icon--ReplyAll:before{content:'\\EE0A'}.ms-Icon--GoogleDriveLogo:before{content:'\\EE0B'}.ms-Icon--Questionnaire:before{content:'\\EE19'}.ms-Icon--ReplyMirrored:before{content:'\\EE35'}.ms-Icon--ReplyAllMirrored:before{content:'\\EE36'}.ms-Icon--AddGroup:before{content:'\\EE3D'}.ms-Icon--QuestionnaireMirrored:before{content:'\\EE4B'}.ms-Icon--TemporaryUser:before{content:'\\EE58'}.ms-Icon--GroupedDescending:before{content:'\\EE66'}.ms-Icon--GroupedAscending:before{content:'\\EE67'}.ms-Icon--SortUp:before{content:'\\EE68'}.ms-Icon--SortDown:before{content:'\\EE69'}.ms-Icon--AwayStatus:before{content:'\\EE6A'}.ms-Icon--SyncToPC:before{content:'\\EE6E'}.ms-Icon--AustralianRules:before{content:'\\EE70'}.ms-Icon--DateTimeMirrored:before{content:'\\EE93'}.ms-Icon--DoubleChevronUp12:before{content:'\\EE96'}.ms-Icon--DoubleChevronDown12:before{content:'\\EE97'}.ms-Icon--DoubleChevronLeft12:before{content:'\\EE98'}.ms-Icon--DoubleChevronRight12:before{content:'\\EE99'}.ms-Icon--CalendarAgenda:before{content:'\\EE9A'}.ms-Icon--AddEvent:before{content:'\\EEB5'}.ms-Icon--AssetLibrary:before{content:'\\EEB6'}.ms-Icon--DataConnectionLibrary:before{content:'\\EEB7'}.ms-Icon--DocLibrary:before{content:'\\EEB8'}.ms-Icon--FormLibrary:before{content:'\\EEB9'}.ms-Icon--FormLibraryMirrored:before{content:'\\EEBA'}.ms-Icon--ReportLibrary:before{content:'\\EEBB'}.ms-Icon--ReportLibraryMirrored:before{content:'\\EEBC'}.ms-Icon--ContactCard:before{content:'\\EEBD'}.ms-Icon--CustomList:before{content:'\\EEBE'}.ms-Icon--CustomListMirrored:before{content:'\\EEBF'}.ms-Icon--IssueTracking:before{content:'\\EEC0'}.ms-Icon--IssueTrackingMirrored:before{content:'\\EEC1'}.ms-Icon--PictureLibrary:before{content:'\\EEC2'}.ms-Icon--AppForOfficeLogo:before{content:'\\EEC7'}.ms-Icon--OfflineOneDriveParachute:before{content:'\\EEC8'}.ms-Icon--OfflineOneDriveParachuteDisabled:before{content:'\\EEC9'}.ms-Icon--LargeGrid:before{content:'\\EECB'}.ms-Icon--TriangleSolidUp12:before{content:'\\EECC'}.ms-Icon--TriangleSolidDown12:before{content:'\\EECD'}.ms-Icon--TriangleSolidLeft12:before{content:'\\EECE'}.ms-Icon--TriangleSolidRight12:before{content:'\\EECF'}.ms-Icon--TriangleUp12:before{content:'\\EED0'}.ms-Icon--TriangleDown12:before{content:'\\EED1'}.ms-Icon--TriangleLeft12:before{content:'\\EED2'}.ms-Icon--TriangleRight12:before{content:'\\EED3'}.ms-Icon--ArrowUpRight8:before{content:'\\EED4'}.ms-Icon--ArrowDownRight8:before{content:'\\EED5'}.ms-Icon--DocumentSet:before{content:'\\EED6'}.ms-Icon--DelveAnalytics:before{content:'\\EEEE'}.ms-Icon--ArrowUpRightMirrored8:before{content:'\\EEEF'}.ms-Icon--ArrowDownRightMirrored8:before{content:'\\EEF0'}.ms-Icon--OneDriveAdd:before{content:'\\EF32'}.ms-Icon--Header2:before{content:'\\EF36'}.ms-Icon--Header3:before{content:'\\EF37'}.ms-Icon--Header4:before{content:'\\EF38'}.ms-Icon--MarketDown:before{content:'\\EF42'}.ms-Icon--CalendarWorkWeek:before{content:'\\EF51'}.ms-Icon--SidePanel:before{content:'\\EF52'}.ms-Icon--GlobeFavorite:before{content:'\\EF53'}.ms-Icon--CaretTopLeftSolid8:before{content:'\\EF54'}.ms-Icon--CaretTopRightSolid8:before{content:'\\EF55'}.ms-Icon--ViewAll2:before{content:'\\EF56'}.ms-Icon--DocumentReply:before{content:'\\EF57'}.ms-Icon--PlayerSettings:before{content:'\\EF58'}.ms-Icon--ReceiptForward:before{content:'\\EF59'}.ms-Icon--ReceiptReply:before{content:'\\EF5A'}.ms-Icon--ReceiptCheck:before{content:'\\EF5B'}.ms-Icon--Fax:before{content:'\\EF5C'}.ms-Icon--RecurringEvent:before{content:'\\EF5D'}.ms-Icon--ReplyAlt:before{content:'\\EF5E'}.ms-Icon--ReplyAllAlt:before{content:'\\EF5F'}.ms-Icon--EditStyle:before{content:'\\EF60'}.ms-Icon--EditMail:before{content:'\\EF61'}.ms-Icon--Lifesaver:before{content:'\\EF62'}.ms-Icon--LifesaverLock:before{content:'\\EF63'}.ms-Icon--InboxCheck:before{content:'\\EF64'}.ms-Icon--FolderSearch:before{content:'\\EF65'}.ms-Icon--CollapseMenu:before{content:'\\EF66'}.ms-Icon--ExpandMenu:before{content:'\\EF67'}.ms-Icon--Boards:before{content:'\\EF68'}.ms-Icon--SunAdd:before{content:'\\EF69'}.ms-Icon--SunQuestionMark:before{content:'\\EF6A'}.ms-Icon--LandscapeOrientation:before{content:'\\EF6B'}.ms-Icon--DocumentSearch:before{content:'\\EF6C'}.ms-Icon--PublicCalendar:before{content:'\\EF6D'}.ms-Icon--PublicContactCard:before{content:'\\EF6E'}.ms-Icon--PublicEmail:before{content:'\\EF6F'}.ms-Icon--PublicFolder:before{content:'\\EF70'}.ms-Icon--WordDocument:before{content:'\\EF71'}.ms-Icon--PowerPointDocument:before{content:'\\EF72'}.ms-Icon--ExcelDocument:before{content:'\\EF73'}.ms-Icon--GroupedList:before{content:'\\EF74'}.ms-Icon--ClassroomLogo:before{content:'\\EF75'}.ms-Icon--Sections:before{content:'\\EF76'}.ms-Icon--EditPhoto:before{content:'\\EF77'}.ms-Icon--Starburst:before{content:'\\EF78'}.ms-Icon--ShareiOS:before{content:'\\EF79'}.ms-Icon--AirTickets:before{content:'\\EF7A'}.ms-Icon--PencilReply:before{content:'\\EF7B'}.ms-Icon--Tiles2:before{content:'\\EF7C'}.ms-Icon--SkypeCircleCheck:before{content:'\\EF7D'}.ms-Icon--SkypeCircleClock:before{content:'\\EF7E'}.ms-Icon--SkypeCircleMinus:before{content:'\\EF7F'}.ms-Icon--SkypeCheck:before{content:'\\EF80'}.ms-Icon--SkypeClock:before{content:'\\EF81'}.ms-Icon--SkypeMinus:before{content:'\\EF82'}.ms-Icon--SkypeMessage:before{content:'\\EF83'}.ms-Icon--ClosedCaption:before{content:'\\EF84'}.ms-Icon--ATPLogo:before{content:'\\EF85'}.ms-Icon--OfficeFormLogo:before{content:'\\EF86'}.ms-Icon--RecycleBin:before{content:'\\EF87'}.ms-Icon--EmptyRecycleBin:before{content:'\\EF88'}.ms-Icon--Hide2:before{content:'\\EF89'}.ms-Icon--iOSAppStoreLogo:before{content:'\\EF8A'}.ms-Icon--AndroidLogo:before{content:'\\EF8B'}.ms-Icon--Breadcrumb:before{content:'\\EF8C'}.ms-Icon--ClearFilter:before{content:'\\EF8F'}.ms-Icon--Flow:before{content:'\\EF90'}.ms-Icon--PageCheckedOut:before{content:'\\F02C'}.ms-Icon--SetAction:before{content:'\\F071'}.ms-Icon--PowerAppsLogo:before{content:'\\F091'}.ms-Icon--PowerApps2Logo:before{content:'\\F092'}.ms-Icon--FabricAssetLibrary:before{content:'\\F09C'}.ms-Icon--FabricDataConnectionLibrary:before{content:'\\F09D'}.ms-Icon--FabricDocLibrary:before{content:'\\F09E'}.ms-Icon--FabricFormLibrary:before{content:'\\F09F'}.ms-Icon--FabricFormLibraryMirrored:before{content:'\\F0A0'}.ms-Icon--FabricReportLibrary:before{content:'\\F0A1'}.ms-Icon--FabricReportLibraryMirrored:before{content:'\\F0A2'}.ms-Icon--FabricPublicFolder:before{content:'\\F0A3'}.ms-Icon--FabricFolderSearch:before{content:'\\F0A4'}.ms-Icon--FabricMovetoFolder:before{content:'\\F0A5'}.ms-Icon--FabricUnsyncFolder:before{content:'\\F0A6'}.ms-Icon--FabricSyncFolder:before{content:'\\F0A7'}.ms-Icon--FabricOpenFolderHorizontal:before{content:'\\F0A8'}.ms-Icon--FabricFolder:before{content:'\\F0A9'}.ms-Icon--FabricFolderFill:before{content:'\\F0AA'}.ms-Icon--FabricNewFolder:before{content:'\\F0AB'}.ms-Icon--FabricPictureLibrary:before{content:'\\F0AC'}.ms-Icon--AddFavorite:before{content:'\\F0C8'}.ms-Icon--AddFavoriteFill:before{content:'\\F0C9'}.ms-Icon--BufferTimeBefore:before{content:'\\F0CF'}.ms-Icon--BufferTimeAfter:before{content:'\\F0D0'}.ms-Icon--BufferTimeBoth:before{content:'\\F0D1'}.ms-Icon--PageCheckedin:before{content:'\\F104'}.ms-Icon--CaretBottomLeftSolid8:before{content:'\\F121'}.ms-Icon--CaretBottomRightSolid8:before{content:'\\F122'}.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1.png)}.ms-BrandIcon--Icon16{background-size:100% 100%;width:16px;height:16px}.ms-BrandIcon--Icon48{background-size:100% 100%;width:48px;height:48px}.ms-BrandIcon--Icon96{background-size:100% 100%;width:96px;height:96px}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min-resolution:144dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1_5.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1_5.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1_5.png)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x2.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x2.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x2.png)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min-resolution:288dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x3.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x3.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x3.png)}}.ms-u-slideRightIn10{animation-name:fadeIn,slideRightIn10;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn10{0%{transform:translate3d(-10px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn20{animation-name:fadeIn,slideRightIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn20{0%{transform:translate3d(-20px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn40{animation-name:fadeIn,slideRightIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn40{0%{transform:translate3d(-40px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn10{animation-name:fadeIn,slideLeftIn10;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn10{0%{transform:translate3d(10px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn20{animation-name:fadeIn,slideLeftIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn20{0%{transform:translate3d(20px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn40{animation-name:fadeIn,slideLeftIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn40{0%{transform:translate3d(40px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn400{animation-name:fadeIn,slideRightIn400;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn400{0%{transform:translate3d(-400px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn400{animation-name:fadeIn,slideLeft400;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeft400{0%{transform:translate3d(400px,0,0)}to{transform:translateZ(0)}}.ms-u-slideUpIn20{animation-name:fadeIn,slideUpIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideUpIn20{0%{transform:translate3d(0,20px,0)}to{transform:translateZ(0)}}.ms-u-slideUpIn10{animation-name:fadeIn,slideUpIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpIn10{0%{transform:translate3d(0,10px,0)}to{transform:translateZ(0)}}.ms-u-slideDownIn20{animation-name:fadeIn,slideDownIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideDownIn20{0%{transform:translate3d(0,-20px,0)}to{transform:translateZ(0)}}.ms-u-slideDownIn10{animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownIn10{0%{transform:translate3d(0,-10px,0)}to{transform:translateZ(0)}}.ms-u-slideRightOut40{animation-name:fadeOut,slideRightOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideRightOut40{0%{transform:translateZ(0)}to{transform:translate3d(40px,0,0)}}.ms-u-slideLeftOut40{animation-name:fadeOut,slideLeftOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideLeftOut40{0%{transform:translateZ(0)}to{transform:translate3d(-40px,0,0)}}.ms-u-slideRightOut400{animation-name:fadeOut,slideRightOut400;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideRightOut400{0%{transform:translateZ(0)}to{transform:translate3d(400px,0,0)}}.ms-u-slideLeftOut400{animation-name:fadeOut,slideLeftOut400;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideLeftOut400{0%{transform:translateZ(0)}to{transform:translate3d(-400px,0,0)}}.ms-u-slideUpOut20{animation-name:fadeOut,slideUpOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpOut20{0%{transform:translateZ(0)}to{transform:translate3d(0,-20px,0)}}.ms-u-slideUpOut10{animation-name:fadeOut,slideUpOut10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpOut10{0%{transform:translateZ(0)}to{transform:translate3d(0,-10px,0)}}.ms-u-slideDownOut20{animation-name:fadeOut,slideDownOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownOut20{0%{transform:translateZ(0)}to{transform:translate3d(0,20px,0)}}.ms-u-slideDownOut10{animation-name:fadeOut,slideDownOut10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownOut10{0%{transform:translateZ(0)}to{transform:translate3d(0,10px,0)}}.ms-u-scaleUpIn100{animation-name:fadeIn,scaleUp100;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleUp100{0%{transform:scale3d(.98,.98,1)}to{transform:scaleX(1)}}.ms-u-scaleDownIn100{animation-name:fadeIn,scaleDown100;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleDown100{0%{transform:scale3d(1.03,1.03,1)}to{transform:scaleX(1)}}.ms-u-scaleUpOut103{animation-name:fadeOut,scaleUp103;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes scaleUp103{0%{transform:scaleX(1)}to{transform:scale3d(1.03,1.03,1)}}.ms-u-scaleDownOut98{animation-name:fadeOut,scaleDown98;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes scaleDown98{0%{transform:scaleX(1)}to{transform:scale3d(.98,.98,1)}}.ms-u-fadeIn100,.ms-u-fadeIn400{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both}.ms-u-fadeIn100{animation-duration:.167s}.ms-u-fadeIn200{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both;animation-duration:.267s}.ms-u-fadeIn500{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both;animation-duration:.467s}@keyframes fadeIn{0%{opacity:0;animation-timing-function:cubic-bezier(.1,.25,.75,.9)}to{opacity:1}}.ms-u-fadeOut100,.ms-u-fadeOut400{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both}.ms-u-fadeOut100{animation-duration:.1s}.ms-u-fadeOut200{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both;animation-duration:.167s}.ms-u-fadeOut500{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both;animation-duration:.467s}@keyframes fadeOut{0%{opacity:1;animation-timing-function:cubic-bezier(.1,.25,.75,.9)}to{opacity:0}}.ms-u-rotate90deg{animation-name:rotate90;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;-ms-animation-duration:.1s;-o-animation-duration:.1s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes rotate90{0%{transform:rotate(0deg)}to{transform:rotate(90deg)}}.ms-u-rotateN90deg{animation-name:rotateN90;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;-ms-animation-duration:.1s;-o-animation-duration:.1s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes rotateN90{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}.ms-u-expandCollapse400{transition:height .367s cubic-bezier(.1,.25,.75,.9)}.ms-u-expandCollapse200{transition:height .167s cubic-bezier(.1,.25,.75,.9)}.ms-u-expandCollapse100{transition:height .1s cubic-bezier(.1,.25,.75,.9)}.ms-u-delay100{animation-delay:.167s}.ms-u-delay200{animation-delay:.267s}@media (max-width:479px){.ms-u-hiddenLgDown,.ms-u-hiddenMdDown,.ms-u-hiddenSm,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:480px) and (max-width:639px){.ms-u-hiddenLgDown,.ms-u-hiddenMd,.ms-u-hiddenMdDown,.ms-u-hiddenMdUp,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:640px) and (max-width:1023px){.ms-u-hiddenLg,.ms-u-hiddenLgDown,.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:1024px) and (max-width:1365px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXl,.ms-u-hiddenXlDown,.ms-u-hiddenXlUp,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:1366px) and (max-width:1919px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlUp,.ms-u-hiddenXxl,.ms-u-hiddenXxlDown,.ms-u-hiddenXxlUp{display:none!important}}@media (min-width:1920px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlUp,.ms-u-hiddenXxlUp,.ms-u-hiddenXxxl{display:none!important}}.ms-u-sm12{width:100%}.ms-u-sm11{width:91.66666666666666%}.ms-u-sm10{width:83.33333333333334%}.ms-u-sm9{width:75%}.ms-u-sm8{width:66.66666666666666%}.ms-u-sm7{width:58.333333333333336%}.ms-u-sm6{width:50%}.ms-u-sm5{width:41.66666666666667%}.ms-u-sm4{width:33.33333333333333%}.ms-u-sm3{width:25%}.ms-u-sm2{width:16.666666666666664%}.ms-u-sm1{width:8.333333333333332%}.ms-u-smPull12{right:100%}.ms-u-smPull11{right:91.66666666666666%}.ms-u-smPull10{right:83.33333333333334%}.ms-u-smPull9{right:75%}.ms-u-smPull8{right:66.66666666666666%}.ms-u-smPull7{right:58.333333333333336%}.ms-u-smPull6{right:50%}.ms-u-smPull5{right:41.66666666666667%}.ms-u-smPull4{right:33.33333333333333%}.ms-u-smPull3{right:25%}.ms-u-smPull2{right:16.666666666666664%}.ms-u-smPull1{right:8.333333333333332%}.ms-u-smPull0{right:auto}.ms-u-smPush12{left:100%}.ms-u-smPush11{left:91.66666666666666%}.ms-u-smPush10{left:83.33333333333334%}.ms-u-smPush9{left:75%}.ms-u-smPush8{left:66.66666666666666%}.ms-u-smPush7{left:58.333333333333336%}.ms-u-smPush6{left:50%}.ms-u-smPush5{left:41.66666666666667%}.ms-u-smPush4{left:33.33333333333333%}.ms-u-smPush3{left:25%}.ms-u-smPush2{left:16.666666666666664%}.ms-u-smPush1{left:8.333333333333332%}.ms-u-smPush0{left:auto}.ms-u-smOffset11{margin-left:91.66666666666666%}.ms-u-smOffset10{margin-left:83.33333333333334%}.ms-u-smOffset9{margin-left:75%}.ms-u-smOffset8{margin-left:66.66666666666666%}.ms-u-smOffset7{margin-left:58.333333333333336%}.ms-u-smOffset6{margin-left:50%}.ms-u-smOffset5{margin-left:41.66666666666667%}.ms-u-smOffset4{margin-left:33.33333333333333%}.ms-u-smOffset3{margin-left:25%}.ms-u-smOffset2{margin-left:16.666666666666664%}.ms-u-smOffset1{margin-left:8.333333333333332%}.ms-u-smOffset0{margin-left:0}@media (min-width:480px){.ms-u-md12{width:100%}}@media (min-width:480px){.ms-u-md11{width:91.66666666666666%}}@media (min-width:480px){.ms-u-md10{width:83.33333333333334%}}@media (min-width:480px){.ms-u-md9{width:75%}}@media (min-width:480px){.ms-u-md8{width:66.66666666666666%}}@media (min-width:480px){.ms-u-md7{width:58.333333333333336%}}@media (min-width:480px){.ms-u-md6{width:50%}}@media (min-width:480px){.ms-u-md5{width:41.66666666666667%}}@media (min-width:480px){.ms-u-md4{width:33.33333333333333%}}@media (min-width:480px){.ms-u-md3{width:25%}}@media (min-width:480px){.ms-u-md2{width:16.666666666666664%}}@media (min-width:480px){.ms-u-md1{width:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPull12{right:100%}}@media (min-width:480px){.ms-u-mdPull11{right:91.66666666666666%}}@media (min-width:480px){.ms-u-mdPull10{right:83.33333333333334%}}@media (min-width:480px){.ms-u-mdPull9{right:75%}}@media (min-width:480px){.ms-u-mdPull8{right:66.66666666666666%}}@media (min-width:480px){.ms-u-mdPull7{right:58.333333333333336%}}@media (min-width:480px){.ms-u-mdPull6{right:50%}}@media (min-width:480px){.ms-u-mdPull5{right:41.66666666666667%}}@media (min-width:480px){.ms-u-mdPull4{right:33.33333333333333%}}@media (min-width:480px){.ms-u-mdPull3{right:25%}}@media (min-width:480px){.ms-u-mdPull2{right:16.666666666666664%}}@media (min-width:480px){.ms-u-mdPull1{right:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPull0{right:auto}}@media (min-width:480px){.ms-u-mdPush12{left:100%}}@media (min-width:480px){.ms-u-mdPush11{left:91.66666666666666%}}@media (min-width:480px){.ms-u-mdPush10{left:83.33333333333334%}}@media (min-width:480px){.ms-u-mdPush9{left:75%}}@media (min-width:480px){.ms-u-mdPush8{left:66.66666666666666%}}@media (min-width:480px){.ms-u-mdPush7{left:58.333333333333336%}}@media (min-width:480px){.ms-u-mdPush6{left:50%}}@media (min-width:480px){.ms-u-mdPush5{left:41.66666666666667%}}@media (min-width:480px){.ms-u-mdPush4{left:33.33333333333333%}}@media (min-width:480px){.ms-u-mdPush3{left:25%}}@media (min-width:480px){.ms-u-mdPush2{left:16.666666666666664%}}@media (min-width:480px){.ms-u-mdPush1{left:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPush0{left:auto}}@media (min-width:480px){.ms-u-mdOffset11{margin-left:91.66666666666666%}}@media (min-width:480px){.ms-u-mdOffset10{margin-left:83.33333333333334%}}@media (min-width:480px){.ms-u-mdOffset9{margin-left:75%}}@media (min-width:480px){.ms-u-mdOffset8{margin-left:66.66666666666666%}}@media (min-width:480px){.ms-u-mdOffset7{margin-left:58.333333333333336%}}@media (min-width:480px){.ms-u-mdOffset6{margin-left:50%}}@media (min-width:480px){.ms-u-mdOffset5{margin-left:41.66666666666667%}}@media (min-width:480px){.ms-u-mdOffset4{margin-left:33.33333333333333%}}@media (min-width:480px){.ms-u-mdOffset3{margin-left:25%}}@media (min-width:480px){.ms-u-mdOffset2{margin-left:16.666666666666664%}}@media (min-width:480px){.ms-u-mdOffset1{margin-left:8.333333333333332%}}@media (min-width:480px){.ms-u-mdOffset0{margin-left:0}}@media (min-width:640px){.ms-u-lg12{width:100%}}@media (min-width:640px){.ms-u-lg11{width:91.66666666666666%}}@media (min-width:640px){.ms-u-lg10{width:83.33333333333334%}}@media (min-width:640px){.ms-u-lg9{width:75%}}@media (min-width:640px){.ms-u-lg8{width:66.66666666666666%}}@media (min-width:640px){.ms-u-lg7{width:58.333333333333336%}}@media (min-width:640px){.ms-u-lg6{width:50%}}@media (min-width:640px){.ms-u-lg5{width:41.66666666666667%}}@media (min-width:640px){.ms-u-lg4{width:33.33333333333333%}}@media (min-width:640px){.ms-u-lg3{width:25%}}@media (min-width:640px){.ms-u-lg2{width:16.666666666666664%}}@media (min-width:640px){.ms-u-lg1{width:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPull12{right:100%}}@media (min-width:640px){.ms-u-lgPull11{right:91.66666666666666%}}@media (min-width:640px){.ms-u-lgPull10{right:83.33333333333334%}}@media (min-width:640px){.ms-u-lgPull9{right:75%}}@media (min-width:640px){.ms-u-lgPull8{right:66.66666666666666%}}@media (min-width:640px){.ms-u-lgPull7{right:58.333333333333336%}}@media (min-width:640px){.ms-u-lgPull6{right:50%}}@media (min-width:640px){.ms-u-lgPull5{right:41.66666666666667%}}@media (min-width:640px){.ms-u-lgPull4{right:33.33333333333333%}}@media (min-width:640px){.ms-u-lgPull3{right:25%}}@media (min-width:640px){.ms-u-lgPull2{right:16.666666666666664%}}@media (min-width:640px){.ms-u-lgPull1{right:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPull0{right:auto}}@media (min-width:640px){.ms-u-lgPush12{left:100%}}@media (min-width:640px){.ms-u-lgPush11{left:91.66666666666666%}}@media (min-width:640px){.ms-u-lgPush10{left:83.33333333333334%}}@media (min-width:640px){.ms-u-lgPush9{left:75%}}@media (min-width:640px){.ms-u-lgPush8{left:66.66666666666666%}}@media (min-width:640px){.ms-u-lgPush7{left:58.333333333333336%}}@media (min-width:640px){.ms-u-lgPush6{left:50%}}@media (min-width:640px){.ms-u-lgPush5{left:41.66666666666667%}}@media (min-width:640px){.ms-u-lgPush4{left:33.33333333333333%}}@media (min-width:640px){.ms-u-lgPush3{left:25%}}@media (min-width:640px){.ms-u-lgPush2{left:16.666666666666664%}}@media (min-width:640px){.ms-u-lgPush1{left:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPush0{left:auto}}@media (min-width:640px){.ms-u-lgOffset11{margin-left:91.66666666666666%}}@media (min-width:640px){.ms-u-lgOffset10{margin-left:83.33333333333334%}}@media (min-width:640px){.ms-u-lgOffset9{margin-left:75%}}@media (min-width:640px){.ms-u-lgOffset8{margin-left:66.66666666666666%}}@media (min-width:640px){.ms-u-lgOffset7{margin-left:58.333333333333336%}}@media (min-width:640px){.ms-u-lgOffset6{margin-left:50%}}@media (min-width:640px){.ms-u-lgOffset5{margin-left:41.66666666666667%}}@media (min-width:640px){.ms-u-lgOffset4{margin-left:33.33333333333333%}}@media (min-width:640px){.ms-u-lgOffset3{margin-left:25%}}@media (min-width:640px){.ms-u-lgOffset2{margin-left:16.666666666666664%}}@media (min-width:640px){.ms-u-lgOffset1{margin-left:8.333333333333332%}}@media (min-width:640px){.ms-u-lgOffset0{margin-left:0}}@media (min-width:1024px){.ms-u-xl12{width:100%}}@media (min-width:1024px){.ms-u-xl11{width:91.66666666666666%}}@media (min-width:1024px){.ms-u-xl10{width:83.33333333333334%}}@media (min-width:1024px){.ms-u-xl9{width:75%}}@media (min-width:1024px){.ms-u-xl8{width:66.66666666666666%}}@media (min-width:1024px){.ms-u-xl7{width:58.333333333333336%}}@media (min-width:1024px){.ms-u-xl6{width:50%}}@media (min-width:1024px){.ms-u-xl5{width:41.66666666666667%}}@media (min-width:1024px){.ms-u-xl4{width:33.33333333333333%}}@media (min-width:1024px){.ms-u-xl3{width:25%}}@media (min-width:1024px){.ms-u-xl2{width:16.666666666666664%}}@media (min-width:1024px){.ms-u-xl1{width:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPull12{right:100%}}@media (min-width:1024px){.ms-u-xlPull11{right:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlPull10{right:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlPull9{right:75%}}@media (min-width:1024px){.ms-u-xlPull8{right:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlPull7{right:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlPull6{right:50%}}@media (min-width:1024px){.ms-u-xlPull5{right:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlPull4{right:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlPull3{right:25%}}@media (min-width:1024px){.ms-u-xlPull2{right:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlPull1{right:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPull0{right:auto}}@media (min-width:1024px){.ms-u-xlPush12{left:100%}}@media (min-width:1024px){.ms-u-xlPush11{left:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlPush10{left:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlPush9{left:75%}}@media (min-width:1024px){.ms-u-xlPush8{left:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlPush7{left:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlPush6{left:50%}}@media (min-width:1024px){.ms-u-xlPush5{left:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlPush4{left:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlPush3{left:25%}}@media (min-width:1024px){.ms-u-xlPush2{left:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlPush1{left:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPush0{left:auto}}@media (min-width:1024px){.ms-u-xlOffset11{margin-left:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlOffset10{margin-left:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlOffset9{margin-left:75%}}@media (min-width:1024px){.ms-u-xlOffset8{margin-left:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlOffset7{margin-left:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlOffset6{margin-left:50%}}@media (min-width:1024px){.ms-u-xlOffset5{margin-left:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlOffset4{margin-left:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlOffset3{margin-left:25%}}@media (min-width:1024px){.ms-u-xlOffset2{margin-left:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlOffset1{margin-left:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlOffset0{margin-left:0}}@media (min-width:1366px){.ms-u-xxl12{width:100%}}@media (min-width:1366px){.ms-u-xxl11{width:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxl10{width:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxl9{width:75%}}@media (min-width:1366px){.ms-u-xxl8{width:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxl7{width:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxl6{width:50%}}@media (min-width:1366px){.ms-u-xxl5{width:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxl4{width:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxl3{width:25%}}@media (min-width:1366px){.ms-u-xxl2{width:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxl1{width:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPull12{right:100%}}@media (min-width:1366px){.ms-u-xxlPull11{right:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPull10{right:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlPull9{right:75%}}@media (min-width:1366px){.ms-u-xxlPull8{right:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPull7{right:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlPull6{right:50%}}@media (min-width:1366px){.ms-u-xxlPull5{right:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlPull4{right:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlPull3{right:25%}}@media (min-width:1366px){.ms-u-xxlPull2{right:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlPull1{right:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPull0{right:auto}}@media (min-width:1366px){.ms-u-xxlPush12{left:100%}}@media (min-width:1366px){.ms-u-xxlPush11{left:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPush10{left:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlPush9{left:75%}}@media (min-width:1366px){.ms-u-xxlPush8{left:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPush7{left:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlPush6{left:50%}}@media (min-width:1366px){.ms-u-xxlPush5{left:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlPush4{left:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlPush3{left:25%}}@media (min-width:1366px){.ms-u-xxlPush2{left:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlPush1{left:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPush0{left:auto}}@media (min-width:1366px){.ms-u-xxlOffset11{margin-left:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlOffset10{margin-left:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlOffset9{margin-left:75%}}@media (min-width:1366px){.ms-u-xxlOffset8{margin-left:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlOffset7{margin-left:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlOffset6{margin-left:50%}}@media (min-width:1366px){.ms-u-xxlOffset5{margin-left:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlOffset4{margin-left:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlOffset3{margin-left:25%}}@media (min-width:1366px){.ms-u-xxlOffset2{margin-left:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlOffset1{margin-left:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlOffset0{margin-left:0}}@media (min-width:1920px){.ms-u-xxxl12{width:100%}}@media (min-width:1920px){.ms-u-xxxl11{width:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxl10{width:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxl9{width:75%}}@media (min-width:1920px){.ms-u-xxxl8{width:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxl7{width:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxl6{width:50%}}@media (min-width:1920px){.ms-u-xxxl5{width:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxl4{width:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxl3{width:25%}}@media (min-width:1920px){.ms-u-xxxl2{width:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxl1{width:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPull12{right:100%}}@media (min-width:1920px){.ms-u-xxxlPull11{right:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPull10{right:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlPull9{right:75%}}@media (min-width:1920px){.ms-u-xxxlPull8{right:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPull7{right:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlPull6{right:50%}}@media (min-width:1920px){.ms-u-xxxlPull5{right:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlPull4{right:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlPull3{right:25%}}@media (min-width:1920px){.ms-u-xxxlPull2{right:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlPull1{right:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPull0{right:auto}}@media (min-width:1920px){.ms-u-xxxlPush12{left:100%}}@media (min-width:1920px){.ms-u-xxxlPush11{left:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPush10{left:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlPush9{left:75%}}@media (min-width:1920px){.ms-u-xxxlPush8{left:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPush7{left:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlPush6{left:50%}}@media (min-width:1920px){.ms-u-xxxlPush5{left:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlPush4{left:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlPush3{left:25%}}@media (min-width:1920px){.ms-u-xxxlPush2{left:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlPush1{left:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPush0{left:auto}}@media (min-width:1920px){.ms-u-xxxlOffset11{margin-left:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlOffset10{margin-left:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlOffset9{margin-left:75%}}@media (min-width:1920px){.ms-u-xxxlOffset8{margin-left:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlOffset7{margin-left:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlOffset6{margin-left:50%}}@media (min-width:1920px){.ms-u-xxxlOffset5{margin-left:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlOffset4{margin-left:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlOffset3{margin-left:25%}}@media (min-width:1920px){.ms-u-xxxlOffset2{margin-left:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlOffset1{margin-left:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlOffset0{margin-left:0}}.ms-Grid{box-sizing:border-box;*zoom:1;padding:0 8px}.ms-Grid:after,.ms-Grid:before{display:table;content:'';line-height:0}.ms-Grid:after{clear:both}.ms-Grid-row{margin:0 -8px;box-sizing:border-box;*zoom:1}.ms-Grid-row:after,.ms-Grid-row:before{display:table;content:'';line-height:0}.ms-Grid-row:after{clear:both}.ms-Grid-col{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box;float:left}.ms-Grid-col .ms-Grid{padding:0}.ms-Fabric{color:#333}", ""]);

// exports


/***/ }),
/* 16 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./fabric.components.min.css", function() {
		var newContent = require("!!../../../../../node_modules/css-loader/index.js!./fabric.components.min.css");

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

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */\r\n/**\n * Office UI Fabric JS 1.5.0\n * The JavaScript front-end framework for building experiences for Office 365.\n **/\n.ms-Breadcrumb{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb.is-overflow .ms-Breadcrumb-overflow{display:inline-block;margin-right:-4px}.ms-Breadcrumb-chevron{font-size:12px;color:#666;vertical-align:top;margin:13px 4px;line-height:1}.ms-Breadcrumb-list{display:inline;white-space:nowrap;padding:0;margin:0}.ms-Breadcrumb-list .ms-Breadcrumb-listItem{list-style-type:none;vertical-align:top;margin:0;padding:0;display:inline-block}.ms-Breadcrumb-list .ms-Breadcrumb-listItem:last-of-type .ms-Breadcrumb-chevron{display:none}.ms-Breadcrumb-overflow{display:none;position:relative}.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton{font-size:16px;display:inline-block;color:#0078d7;padding:8px;cursor:pointer;vertical-align:top}.ms-Breadcrumb-overflowMenu{display:none;position:absolute}.ms-Breadcrumb-overflowMenu.is-open{display:block;top:36px;left:0;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:#fff;border:1px solid #c8c8c8;z-index:105}.ms-Breadcrumb-overflowMenu:before{position:absolute;box-shadow:0 0 5px 0 rgba(0,0,0,.4);top:-6px;left:6px;content:\" \";width:16px;height:16px;transform:rotate(45deg);background-color:#fff}.ms-Breadcrumb-overflowMenu .ms-ContextualMenu{border:0;box-shadow:none;position:relative;width:190px}.ms-Breadcrumb-overflowMenu .ms-ContextualMenu.is-open{margin-bottom:0}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:#f4f4f4;cursor:pointer}.ms-Breadcrumb-itemLink:focus,.ms-Breadcrumb-overflowButton:focus{outline:1px solid #767676;color:#000}.ms-Breadcrumb-itemLink:active,.ms-Breadcrumb-overflowButton:active{outline:transparent;background-color:#c8c8c8}.ms-Breadcrumb-itemLink{font-weight:100;font-size:21px;color:#333;display:inline-block;padding:0 4px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;vertical-align:top}@media screen and (max-width:639px){.ms-Breadcrumb{margin:10px 0}.ms-Breadcrumb-itemLink{font-size:17px}.ms-Breadcrumb-chevron{font-size:10px;margin:9px 3px}.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton{font-size:16px;padding:2px 0}}@media screen and (max-width:479px){.ms-Breadcrumb-itemLink{font-size:14px;max-width:116px}.ms-Breadcrumb-chevron{margin:5px 4px}.ms-Breadcrumb-overflow .ms-Breadcrumb-overflowButton{padding:2px 4px}}.ms-Button{box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px}.ms-Button.is-hidden{display:none}.ms-Button:hover{background-color:#eaeaea;border-color:#eaeaea}.ms-Button:hover .ms-Button-label{color:#000}@media screen and (-ms-high-contrast:active){.ms-Button:hover{color:#1aebff;border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button:hover{color:#37006e;border-color:#37006e}}.ms-Button:focus{background-color:#eaeaea;border-color:#0078d7;outline:1px solid transparent}.ms-Button:focus .ms-Button-label{color:#000}.ms-Button:active{background-color:#0078d7;border-color:#0078d7}.ms-Button:active .ms-Button-label{color:#fff}.ms-Button.is-disabled,.ms-Button:disabled{background-color:#f4f4f4;border-color:#f4f4f4;cursor:default}.ms-Button.is-disabled .ms-Button-label,.ms-Button:disabled .ms-Button-label{color:#a6a6a6}.ms-Button.is-disabled:focus,.ms-Button.is-disabled:hover,.ms-Button:disabled:focus,.ms-Button:disabled:hover{outline:0}.ms-Button-label{color:#333;font-weight:600;font-size:14px}.ms-Button-description,.ms-Button-icon{display:none}.ms-Button.ms-Button--primary{background-color:#0078d7;border-color:#0078d7}.ms-Button.ms-Button--primary .ms-Button-label{color:#fff}.ms-Button.ms-Button--primary:hover{background-color:#005a9e;border-color:#005a9e}.ms-Button.ms-Button--primary:focus{background-color:#005a9e;border-color:#004578}.ms-Button.ms-Button--primary:active{background-color:#0078d7;border-color:#0078d7}.ms-Button.ms-Button--primary.is-disabled,.ms-Button.ms-Button--primary:disabled{background-color:#f4f4f4;border-color:#f4f4f4}.ms-Button.ms-Button--primary.is-disabled .ms-Button-label,.ms-Button.ms-Button--primary:disabled .ms-Button-label{color:#a6a6a6}.ms-Button.ms-Button--small{min-width:60px;min-height:24px;height:auto;padding-top:0;padding-bottom:4px}.ms-Button.ms-Button--small .ms-Button-label{font-weight:400;font-size:12px}.ms-Button.ms-Button--hero{-ms-flex-align:center;align-items:center;background-color:transparent;border:0;padding:0;position:relative}.ms-Button.ms-Button--hero .ms-Button-icon{color:#0078d7;display:inline-block;font-size:12px;margin-right:4px;padding-top:5px;text-align:center}.ms-Button.ms-Button--hero .ms-Button-icon .ms-Icon{border-radius:18px;border:1px solid #0078d7;font-size:12px;height:18px;line-height:18px;width:18px}.ms-Button.ms-Button--hero .ms-Button-label{color:#0078d7;font-size:21px;font-weight:100;position:relative;text-decoration:none;vertical-align:top}.ms-Button.ms-Button--hero:focus .ms-Button-icon,.ms-Button.ms-Button--hero:hover .ms-Button-icon{color:#005a9e}.ms-Button.ms-Button--hero:focus .ms-Button-icon .ms-Icon,.ms-Button.ms-Button--hero:hover .ms-Button-icon .ms-Icon{border:1px solid #005a9e}.ms-Button.ms-Button--hero:focus .ms-Button-label,.ms-Button.ms-Button--hero:hover .ms-Button-label{color:#004578}.ms-Button.ms-Button--hero:active .ms-Button-icon{color:#0078d7}.ms-Button.ms-Button--hero:active .ms-Button-icon .ms-Icon{border:1px solid #0078d7}.ms-Button.ms-Button--hero:active .ms-Button-label{color:#0078d7}.ms-Button.ms-Button--hero.is-disabled .ms-Button-icon,.ms-Button.ms-Button--hero:disabled .ms-Button-icon{color:#c8c8c8}.ms-Button.ms-Button--hero.is-disabled .ms-Button-icon .ms-Icon,.ms-Button.ms-Button--hero:disabled .ms-Button-icon .ms-Icon{border:1px solid #c8c8c8}.ms-Button.ms-Button--hero.is-disabled .ms-Button-label,.ms-Button.ms-Button--hero:disabled .ms-Button-label{color:#a6a6a6}.ms-Button.ms-Button--compound{display:block;height:auto;max-width:280px;min-height:72px;padding:20px}.ms-Button.ms-Button--compound .ms-Button-label{display:block;font-weight:600;position:relative;text-align:left;margin-top:-5px}.ms-Button.ms-Button--compound .ms-Button-description{color:#666;display:block;font-weight:400;font-size:12px;position:relative;text-align:left;top:3px}.ms-Button.ms-Button--compound:hover .ms-Button-description{color:#212121}.ms-Button.ms-Button--compound:focus{border-color:#0078d7;background-color:#f4f4f4}.ms-Button.ms-Button--compound:focus .ms-Button-label{color:#333}.ms-Button.ms-Button--compound:focus .ms-Button-description{color:#666}.ms-Button.ms-Button--compound:active{background-color:#0078d7}.ms-Button.ms-Button--compound:active .ms-Button-description,.ms-Button.ms-Button--compound:active .ms-Button-label{color:#fff}.ms-Button.ms-Button--compound.is-disabled .ms-Button-description,.ms-Button.ms-Button--compound.is-disabled .ms-Button-label,.ms-Button.ms-Button--compound:disabled .ms-Button-description,.ms-Button.ms-Button--compound:disabled .ms-Button-label{color:#a6a6a6}.ms-Button.ms-Button--compound.is-disabled:active,.ms-Button.ms-Button--compound.is-disabled:focus,.ms-Button.ms-Button--compound:disabled:active,.ms-Button.ms-Button--compound:disabled:focus{border-color:#f4f4f4;background-color:#f4f4f4}.ms-Button.ms-Button--compound.is-disabled:active .ms-Button-description,.ms-Button.ms-Button--compound.is-disabled:active .ms-Button-label,.ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-description,.ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-label,.ms-Button.ms-Button--compound:disabled:active .ms-Button-description,.ms-Button.ms-Button--compound:disabled:active .ms-Button-label,.ms-Button.ms-Button--compound:disabled:focus .ms-Button-description,.ms-Button.ms-Button--compound:disabled:focus .ms-Button-label{color:#a6a6a6}.ms-Callout{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;width:288px}.ms-Callout.is-hidden{display:none}.ms-Callout-header{z-index:105;padding:24px 28px 12px}.ms-Callout-title{margin:0;font-weight:300;font-size:21px}.ms-Callout-subText{margin:0;font-weight:300;color:#333;font-size:12px}.ms-Callout-close{margin:0;border:0;background:none;cursor:pointer;position:absolute;top:12px;right:12px;padding:8px;width:32px;height:32px;font-size:14px;color:#666;z-index:110}.ms-Callout-link{font-size:14px}.ms-Callout-inner{height:100%;padding:0 28px 12px}.ms-Callout-actions{position:relative;margin-top:20px;width:100%;white-space:nowrap}.ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline,.ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button{height:27px;line-height:27px}.ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-icon,.ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-label{line-height:27px}.ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline:focus .ms-Button,.ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline:hover .ms-Button{color:#0078d7}.ms-Callout-actions .ms-Callout-button{margin-right:12px}.ms-Callout.ms-Callout--OOBE .ms-Callout-header{padding:28px 24px;background-color:#0078d7}.ms-Callout.ms-Callout--OOBE .ms-Callout-title{font-weight:100;font-size:28px;color:#fff}.ms-Callout.ms-Callout--OOBE .ms-Callout-inner{padding-top:20px}.ms-Callout.ms-Callout--OOBE .ms-Callout-subText{font-size:14px}.ms-Callout.ms-Callout--actionText .ms-Callout-actions{border-top:1px solid #eaeaea;padding-top:12px}.ms-Callout.ms-Callout--actionText .ms-Callout-inner{padding-bottom:12px}.ms-Callout.ms-Callout--peek .ms-Callout-header{padding-bottom:0}.ms-Callout.ms-Callout--peek .ms-Callout-title{font-size:14px}.ms-Callout.ms-Callout--peek .ms-Callout-actions{margin-top:12px;margin-bottom:-4px}.ms-CheckBox{box-sizing:border-box;color:#333;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}.ms-CheckBox .ms-Label{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}.ms-CheckBox-input{position:absolute;opacity:0}.ms-CheckBox-field:before{content:\"\";display:inline-block;border:2px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;transition-property:background,border,border-color;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.23,1)}.ms-CheckBox-field:after{content:\"\\E73E\";font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:#fff;line-height:20px;width:20px;text-align:center}@media screen and (-ms-high-contrast:active){.ms-CheckBox-field:after{color:#000}}@media screen and (-ms-high-contrast:black-on-white){.ms-CheckBox-field:after{color:#fff}}.ms-CheckBox-field{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}.ms-CheckBox-field:focus:before,.ms-CheckBox-field:hover:before{border-color:#767676}.ms-CheckBox-field:focus .ms-Label,.ms-CheckBox-field:hover .ms-Label{color:#000}.ms-CheckBox-field.is-disabled{cursor:default}.ms-CheckBox-field.is-disabled:before{background-color:#c8c8c8;border-color:#c8c8c8;color:#c8c8c8}@media screen and (-ms-high-contrast:active){.ms-CheckBox-field.is-disabled:before{border-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-CheckBox-field.is-disabled:before{border-color:#600000}}.ms-CheckBox-field.is-disabled .ms-Label{color:#a6a6a6}@media screen and (-ms-high-contrast:active){.ms-CheckBox-field.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-CheckBox-field.is-disabled .ms-Label{color:#600000}}.ms-CheckBox-field.in-focus:before{border-color:#767676}.ms-CheckBox-field.in-focus.is-disabled:before{border-color:#c8c8c8}.ms-CheckBox-field.in-focus.is-checked:before{border-color:#106ebe}.ms-CheckBox-field.is-checked:before{border:10px solid #0078d7;background-color:#0078d7}@media screen and (-ms-high-contrast:active){.ms-CheckBox-field.is-checked:before{border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-CheckBox-field.is-checked:before{border-color:#37006e}}.ms-CheckBox-field.is-checked:after{display:block}.ms-CheckBox-field.is-checked:focus:before,.ms-CheckBox-field.is-checked:hover:before{border-color:#106ebe}.ms-RadioButton{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#333;font-size:14px;font-weight:400;min-height:36px;position:relative}.ms-RadioButton .ms-Label{font-size:14px;padding:0 0 0 26px;cursor:pointer;display:inline-block}.ms-RadioButton-input{position:absolute;opacity:0}.ms-RadioButton-field:before{content:\"\";display:inline-block;border:2px solid #a6a6a6;width:20px;height:20px;cursor:pointer;font-weight:400;position:absolute;box-sizing:border-box;transition-property:border-color;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.23,1);border-radius:50%}.ms-RadioButton-field:after{content:\"\";width:0;height:0;border-radius:50%;position:absolute;top:8px;left:8px;bottom:0;right:0;transition-property:top,left,width,height;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.23,1);box-sizing:border-box}@media screen and (-ms-high-contrast:active){.ms-RadioButton-field:after{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-RadioButton-field:after{color:#600000}}.ms-RadioButton-field{display:inline-block;cursor:pointer;margin-top:8px;position:relative;outline:0;vertical-align:top}.ms-RadioButton-field:focus:before,.ms-RadioButton-field:hover:before{border-color:#767676}.ms-RadioButton-field:focus .ms-Label,.ms-RadioButton-field:hover .ms-Label{color:#000}.ms-RadioButton-field.is-disabled{cursor:default}.ms-RadioButton-field.is-disabled:before{background-color:#c8c8c8;border-color:#c8c8c8;color:#c8c8c8}@media screen and (-ms-high-contrast:active){.ms-RadioButton-field.is-disabled:before{border-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-RadioButton-field.is-disabled:before{border-color:#600000}}.ms-RadioButton-field.is-disabled .ms-Label{color:#a6a6a6}@media screen and (-ms-high-contrast:active){.ms-RadioButton-field.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-RadioButton-field.is-disabled .ms-Label{color:#600000}}.ms-RadioButton-field.is-disabled:focus:before,.ms-RadioButton-field.is-disabled:hover:before{border-color:#c8c8c8}.ms-RadioButton-field.in-focus:before{border-color:#767676}.ms-RadioButton-field.is-checked:before{border:2px solid #0078d7;background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-RadioButton-field.is-checked:before{border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-RadioButton-field.is-checked:before{border-color:#37006e}}.ms-RadioButton-field.is-checked:after{background-color:#0078d7;top:5px;left:5px;width:10px;height:10px}@media screen and (-ms-high-contrast:active){.ms-RadioButton-field.is-checked:after{background-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-RadioButton-field.is-checked:after{background-color:#37006e}}.ms-RadioButton-field.is-checked.in-focus:before,.ms-RadioButton-field.is-checked:focus:before,.ms-RadioButton-field.is-checked:hover:before{border-color:#0078d7}.ms-ChoiceFieldGroup{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;margin-bottom:4px}.ms-ChoiceFieldGroup .ms-ChoiceFieldGroup-list{padding:0;margin:0;list-style:none}.ms-CommandBar{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;background-color:#f4f4f4;height:40px;white-space:nowrap;padding-left:0;border:0;position:relative}.ms-CommandBar:focus{outline:none}.ms-CommandBar .ms-CommandButton--actionButton{border-right:1px solid #eaeaea}.ms-CommandBar .ms-Button{height:100%}.ms-CommandBar .ms-Button.ms-Button--noLabel .ms-Button-icon{padding-right:0}.ms-CommandBar .ms-Button.is-hidden{display:none}.ms-CommandBar .ms-SearchBox,.ms-CommandBar .ms-SearchBox-field,.ms-CommandBar .ms-SearchBox-label{height:100%}.ms-CommandBar .ms-SearchBox{display:inline-block;vertical-align:top;transition:margin-right .267s}.ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active{width:220px}@media only screen and (max-width:639px){.ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active{width:100%;position:absolute;left:0;right:0;z-index:10}}.ms-CommandBar .ms-CommandBar-overflowButton .ms-CommandButton-button{font-size:18px;padding:0 11px}@media only screen and (min-width:1024px){.ms-CommandBar .ms-SearchBox{margin-right:24px}}@media only screen and (max-width:639px){.ms-CommandBar{height:44px}}@media only screen and (min-width:640px){.ms-CommandBar.search-expanded .ms-SearchBox{margin-right:8px}.ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed{transition:none}}.ms-CommandBar-mainArea{overflow-x:hidden;display:block;height:100%;overflow:hidden}.ms-CommandBar-sideCommands{float:right;text-align:right;width:auto;padding-right:4px;height:100%}.ms-CommandBar-sideCommands .ms-Button:last-child{margin-right:0}@media only screen and (min-width:640px){.ms-CommandBar-sideCommands{min-width:128px}}@media only screen and (min-width:1024px){.ms-CommandBar-sideCommands{padding-right:20px}}.ms-CommandButton{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;display:inline-block;position:relative;vertical-align:top}.ms-CommandButton.is-hidden{display:none}.ms-CommandButton.is-disabled .ms-CommandButton-button,.ms-CommandButton:disabled .ms-CommandButton-button{cursor:default}.ms-CommandButton.is-disabled .ms-CommandButton-button:hover,.ms-CommandButton:disabled .ms-CommandButton-button:hover{background-color:#eff6fc}.ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon,.ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label,.ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon,.ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label{color:#a6a6a6}.ms-CommandButton .ms-ContextualMenu{display:none}.ms-CommandButton-button,.ms-CommandButton-splitIcon{box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;cursor:pointer;display:inline-block;height:40px;line-height:40px;outline:1px solid transparent;padding:0 8px;position:relative;vertical-align:top;background:transparent}.ms-CommandButton-button:hover,.ms-CommandButton-splitIcon:hover{background-color:#eaeaea}.ms-CommandButton-button:hover .ms-CommandButton-label,.ms-CommandButton-splitIcon:hover .ms-CommandButton-label{color:#212121}.ms-CommandButton-button:active,.ms-CommandButton-splitIcon:active{background-color:#eaeaea}.ms-CommandButton-button:focus:before,.ms-CommandButton-splitIcon:focus:before{top:3px;left:3px;right:3px;bottom:3px;border:1px solid #333;position:absolute;z-index:10;content:\"\";outline:none}.ms-CommandButton-button:focus,.ms-CommandButton-splitIcon:focus{outline:0}@media only screen and (max-width:639px){.ms-CommandButton-button,.ms-CommandButton-splitIcon{height:44px}.ms-CommandButton-button .ms-CommandButton-icon,.ms-CommandButton-splitIcon .ms-CommandButton-icon{font-size:20px}.ms-CommandButton-button .ms-CommandButton-label,.ms-CommandButton-splitIcon .ms-CommandButton-label{line-height:44px}}.ms-CommandButton-button{border:0;margin:0}.ms-CommandButton+.ms-CommandButton{margin-left:8px}@media only screen and (max-width:639px){.ms-CommandButton+.ms-CommandButton{margin-left:4px}}.ms-CommandButton-icon{display:inline-block;margin-right:8px;position:relative;font-size:16px;min-width:16px;height:100%}.ms-CommandButton-icon .ms-Icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ms-CommandButton-label{font-size:14px;font-weight:400;color:#333;line-height:40px;height:100%;display:inline-block;vertical-align:top}.ms-CommandButton-label:hover{color:#212121}.ms-CommandButton-dropdownIcon,.ms-CommandButton-splitIcon{display:inline-block;position:relative;color:#333;font-size:12px;font-weight:300;min-width:12px;height:100%;vertical-align:top;margin-left:8px}.ms-CommandButton-dropdownIcon .ms-Icon,.ms-CommandButton-splitIcon .ms-Icon{line-height:normal;padding-top:16px}.ms-CommandButton-dropdownIcon:focus:before,.ms-CommandButton-splitIcon:focus:before{top:3px;left:3px;right:3px;bottom:3px;border:1px solid #333;position:absolute;z-index:10;content:\"\";outline:none}@media only screen and (max-width:639px){.ms-CommandButton-dropdownIcon,.ms-CommandButton-splitIcon{display:none}}.ms-CommandButton-splitIcon{margin-left:-2px;width:27px;border:0}.ms-CommandButton-splitIcon .ms-Icon{margin-left:-1px;position:relative;padding-top:16px}.ms-CommandButton-splitIcon .ms-Icon:after{position:absolute;content:\" \";width:1px;height:16px;top:12px;left:-8px;border-left:1px solid #c8c8c8}.ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon{margin-right:0}.ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label{display:none}.ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button{padding:0 12px}.ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button{background:none}.ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button{width:50px;height:40px}.ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px;padding-right:0}.ms-CommandButton.ms-CommandButton--pivot.is-active:before,.ms-CommandButton.ms-CommandButton--pivot:hover:before{content:\"\";height:2px;position:absolute;left:0;right:0;background-color:#0078d7;bottom:0;z-index:5}.ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label,.ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label{display:inline-block}@media only screen and (max-width:479px){.ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label,.ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label{font-size:16px}}.ms-ContextualMenu{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;display:block;min-width:180px;max-width:220px;list-style-type:none;position:relative;background-color:#fff}.ms-ContextualMenu.is-hidden{display:none}.ms-ContextualMenu-item{position:relative}.ms-ContextualMenu-link{box-sizing:border-box;text-decoration:none;color:#333;border:1px solid transparent;cursor:pointer;display:block;height:36px;overflow:hidden;line-height:34px;padding:0 16px 0 25px;position:relative;text-overflow:ellipsis;white-space:nowrap}.ms-ContextualMenu-link:active,.ms-ContextualMenu-link:focus,.ms-ContextualMenu-link:hover{background-color:#f4f4f4;color:#212121}.ms-ContextualMenu-link:active .ms-ContextualMenu-subMenuIcon,.ms-ContextualMenu-link:focus .ms-ContextualMenu-subMenuIcon,.ms-ContextualMenu-link:hover .ms-ContextualMenu-subMenuIcon{color:#212121}.ms-ContextualMenu-link:focus{outline:transparent;border:1px solid #666}.ms-ContextualMenu-link.is-selected{background-color:#dadada;color:#000;font-weight:600}.ms-ContextualMenu-link.is-selected~.ms-ContextualMenu-subMenuIcon{color:#000}.ms-ContextualMenu-link.is-selected:hover{background-color:#d0d0d0}.ms-ContextualMenu-link.is-disabled{color:#a6a6a6;background-color:#fff;pointer-events:none}.ms-ContextualMenu-link.is-disabled:active,.ms-ContextualMenu-link.is-disabled:focus{border-color:#fff}.ms-ContextualMenu-link.is-disabled .ms-Icon{color:#a6a6a6;pointer-events:none;cursor:default}.ms-ContextualMenu-item.ms-ContextualMenu-item--divider{cursor:default;display:block;height:1px;background-color:#eaeaea;position:relative}.ms-ContextualMenu-item.ms-ContextualMenu-item--header{color:#0078d7;font-size:12px;text-transform:uppercase;height:36px;line-height:36px;padding:0 18px}.ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu .ms-ContextualMenu{position:absolute;top:-1px;left:178px}.ms-ContextualMenu-caretRight,.ms-ContextualMenu-subMenuIcon{color:#333;font-size:8px;font-weight:600;width:24px;height:36px;line-height:36px;position:absolute;text-align:center;top:0;right:0;z-index:1;pointer-events:none}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-item.ms-ContextualMenu-item--header{padding:0 16px 0 26px}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected{background-color:#fff;font-weight:600;color:#333}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:after{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none;color:#333;content:\"\\E73E\";font-size:10px;font-weight:800;height:36px;line-height:36px;position:absolute;left:7px}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:focus,.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:hover{color:#212121;background-color:#f4f4f4}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:focus:after,.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:hover:after{color:#212121}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:active{color:#000;background-color:#d0d0d0}.ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:active:after{color:#000}.ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-ContextualMenu-link,.ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-ContextualMenu-link{padding-left:40px}.ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-Icon,.ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-Icon{position:absolute;top:50%;transform:translateY(-50%);width:40px;text-align:center}.ms-ContextualMenu.ms-ContextualMenu--hasIcons{width:220px}.ms-DatePicker{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:17px;z-index:300}.ms-DatePicker .ms-TextField{position:relative}.ms-DatePicker-picker{color:#000;font-size:14px;position:relative;text-align:left;z-index:0}.ms-DatePicker-event{color:#666;font-size:21px;line-height:20px;pointer-events:none;position:absolute;right:5px;bottom:5px;z-index:5}.ms-DatePicker-holder{-webkit-overflow-scrolling:touch;box-sizing:border-box;background:#fff;position:absolute;min-width:300px;display:none}.ms-DatePicker-picker.ms-DatePicker-picker--opened .ms-DatePicker-holder{animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both;box-sizing:border-box;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border:1px solid #eaeaea;display:block}.ms-DatePicker-picker--opened{position:relative;z-index:10}.ms-DatePicker-frame{padding:1px}.ms-DatePicker-wrap{margin:-1px;padding:9px}.ms-DatePicker-dayPicker{display:block;margin-bottom:30px}.ms-DatePicker-header{height:40px;line-height:44px}.ms-DatePicker-month,.ms-DatePicker-year{display:inline-block;font-weight:100;font-size:21px;color:#0078d7;margin-top:-1px}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:#005a9e;cursor:pointer}.ms-DatePicker-month{margin-left:15px}.ms-DatePicker-year{margin-left:5px}.ms-DatePicker-table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:inherit}.ms-DatePicker-table td{margin:0;padding:0}.ms-DatePicker-table td:hover{outline:1px solid transparent}.ms-DatePicker-day,.ms-DatePicker-weekday{width:40px;height:40px;padding:0;line-height:40px;font-weight:400;font-size:15px;color:#333}.ms-DatePicker-day--today{position:relative;background-color:#b3d6f2}.ms-DatePicker-day--disabled:before{border-top-color:#a6a6a6}.ms-DatePicker-day--outfocus{color:#a6a6a6;font-weight:400}.ms-DatePicker-day--infocus:hover,.ms-DatePicker-day--outfocus:hover{cursor:pointer;color:#000;background:#eaeaea}.ms-DatePicker-day--highlighted:hover,.ms-DatePicker-picker--focused .ms-DatePicker-day--highlighted{cursor:pointer;color:#fff;background:#0078d7}.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled,.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled:hover{background:#a6a6a6}.ms-DatePicker-monthPicker,.ms-DatePicker-yearPicker{display:none}.ms-DatePicker-monthComponents{position:absolute;top:9px;right:9px;left:9px}.ms-DatePicker-decadeComponents,.ms-DatePicker-yearComponents{position:absolute;right:10px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{width:40px;height:40px;display:block;float:right;margin-left:10px;text-align:center;line-height:40px;font-size:21px;color:#666;position:relative;top:3px}.ms-DatePicker-nextDecade:hover,.ms-DatePicker-nextMonth:hover,.ms-DatePicker-nextYear:hover,.ms-DatePicker-prevDecade:hover,.ms-DatePicker-prevMonth:hover,.ms-DatePicker-prevYear:hover{color:#212121;cursor:pointer;outline:1px solid transparent}.ms-DatePicker-headerToggleView{height:40px;left:0;position:absolute;top:0;width:140px;z-index:5;cursor:pointer}.ms-DatePicker-currentDecade,.ms-DatePicker-currentYear{display:block;font-weight:300;font-size:21px;height:40px;line-height:42px;margin-left:15px}.ms-DatePicker-currentYear{color:#0078d7}.ms-DatePicker-currentYear:hover{color:#005a9e;cursor:pointer}.ms-DatePicker-optionGrid{position:relative;height:210px;width:280px;margin:10px 0 30px 5px}.ms-DatePicker-monthOption,.ms-DatePicker-yearOption{background-color:#f4f4f4;width:60px;height:60px;line-height:60px;cursor:pointer;float:left;margin:0 10px 10px 0;font-weight:400;font-size:13px;color:#333;text-align:center}.ms-DatePicker-monthOption:hover,.ms-DatePicker-yearOption:hover{background-color:#c8c8c8;outline:1px solid transparent}.ms-DatePicker-monthOption.is-highlighted,.ms-DatePicker-yearOption.is-highlighted{background-color:#333;color:#fff}.ms-DatePicker-goToday{bottom:9px;color:#0078d7;cursor:pointer;font-weight:300;font-size:13px;height:30px;line-height:30px;padding:0 10px;position:absolute;right:9px}.ms-DatePicker-goToday:hover{outline:1px solid transparent}.ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents,.ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}@media (min-width:460px){.ms-DatePicker-holder{width:440px}.ms-DatePicker-month,.ms-DatePicker-year{font-weight:300;font-size:17px;color:#333}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:#333;cursor:default}.ms-DatePicker-header{height:30px;line-height:28px}.ms-DatePicker-dayPicker{box-sizing:border-box;border-right:1px solid #eaeaea;width:220px;margin:-10px 0;padding:10px 0}.ms-DatePicker-monthPicker{display:block}.ms-DatePicker-monthPicker,.ms-DatePicker-yearPicker{top:9px;left:238px;position:absolute}.ms-DatePicker-optionGrid{width:200px;height:auto;margin:10px 0 0}.ms-DatePicker-monthComponents{width:210px}.ms-DatePicker-month{margin-left:12px}.ms-DatePicker-day,.ms-DatePicker-weekday{width:30px;height:30px;line-height:30px;font-weight:600;font-size:12px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{font-size:17px;width:30px;height:30px;line-height:29px}.ms-DatePicker-toggleMonthView{display:none}.ms-DatePicker-currentDecade,.ms-DatePicker-currentYear{font-size:17px;margin:0;height:30px;line-height:26px;padding:0 10px;display:inline-block}.ms-DatePicker-monthOption,.ms-DatePicker-yearOption{width:40px;height:40px;line-height:40px;font-size:12px;margin:0 10px 10px 0}.ms-DatePicker-monthOption:hover,.ms-DatePicker-yearOption:hover{outline:1px solid transparent}.ms-DatePicker-goToday{box-sizing:border-box;font-size:12px;height:30px;line-height:30px;padding:0 10px;right:10px;text-align:right;top:199px;width:210px}.ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:block}.ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}}@media (max-width:459px){.ms-DatePicker.is-pickingMonths .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthPicker{display:block}}.ms-DetailsList{position:relative}.ms-DetailsList.is-horizontalConstrained{overflow-x:auto;overflow-y:inherit}.ms-DetailsList-cell{word-break:break-word}.ms-DetailsHeader{display:inline-block;min-width:100%;height:36px;line-height:36px;white-space:nowrap;padding-bottom:1px;border-bottom:1px solid #eaeaea;margin-bottom:1px;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-DetailsHeader.is-singleSelect{padding-left:40px}.ms-DetailsHeader.is-resizingColumn .ms-DetailsHeader-sizerCover{background:transparent;position:fixed;left:0;top:0;right:0;bottom:0;z-index:99;cursor:col-resize}.ms-DetailsHeader-cell.is-check .ms-Check-circle{visibility:hidden}.ms-DetailsHeader-cell.is-check:hover .ms-Check-circle,.ms-DetailsHeader.is-allSelected .ms-Check-circle{visibility:visible}.ms-DetailsHeader-cellWrapper{display:inline-block;position:relative}.ms-DetailsHeader-cellSizeWrapper{display:inline-block;vertical-align:top;margin-right:16px}.ms-DetailsHeader-cellSizeWrapper:last-child{margin-right:0}.ms-DetailsHeader-filterChevron.ms-Icon{color:#a6a6a6;padding-left:4px;vertical-align:middle}.ms-DetailsHeader-cell{display:inline-block;box-sizing:border-box;padding:0 8px;color:#a6a6a6;border:0;background:none;line-height:inherit;margin:0;font-size:inherit;font-family:inherit;text-align:left;height:36px;vertical-align:top}.ms-DetailsHeader-cell.is-check{position:relative;padding:8px 10px;margin:0}.ms-DetailsHeader-cell:focus{outline:transparent}.ms-DetailsHeader-cell.is-sortable{color:#000;cursor:default}.ms-DetailsHeader-cell.is-sortable:hover{background-color:#eaeaea}.ms-DetailsHeader-cell.is-filter{position:absolute;right:0;width:20px;top:0;bottom:0;padding:0;text-align:center;color:#000}.ms-DetailsHeader-cell.is-filter:hover{background-color:#eaeaea}.ms-DetailsHeader-cell.is-filter:before{content:\"\";position:absolute;border-left:1px solid #a6a6a6;top:10px;bottom:10px;left:0}.ms-DetailsHeader-cell.is-sizer{position:absolute;width:16px;cursor:col-resize;bottom:0;top:0;height:inherit;z-index:99}.ms-DetailsHeader-cell.is-sorted.is-sortable .ms-DetailsHeader-sortArrow{display:inline}.ms-DetailsHeader-cellis-sortedDescending .ms-DetailsHeader-sortArrow{transform:rotate(180deg)}.ms-DetailsHeader-cell.is-resizing.is-sizer:after,.ms-DetailsHeader-cell.is-sizer:hover:after{content:\"\";position:absolute;left:50%;top:0;bottom:0;width:1px;background:#eaeaea;border:1px solid #fff}.ms-DetailsHeader-cell:focus:before,.ms-Fabric.is-focusVisible .ms-DetailsHeader-cell:focus:before{content:\"\";pointer-events:none;position:absolute;left:0;top:0;right:0;bottom:0;border:1px solid #a6a6a6}.ms-DetailsHeader-sortArrow.ms-Icon{font-size:12px;margin-right:4px;display:none;color:#a6a6a6}.ms-DetailsRow{position:relative;display:inline-block;min-width:100%;min-height:36px;vertical-align:top;white-space:nowrap;padding:10px 0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;box-sizing:border-box}.ms-DetailsRow:focus{outline:transparent}.ms-DetailsRow.ms-DetailsRow.is-selected{background:#deecf9}.ms-DetailsRow:hover,.ms-Fabric.is-stationary .ms-DetailsRow:hover{background:#eff6fc}.ms-DetailsRow.is-selected:hover,.ms-Fabric.is-stationary .ms-DetailsRow.is-selected:hover{background:#b3d6f2}.ms-DetailsRow-cell{display:inline-block;box-sizing:border-box;padding:0 8px;vertical-align:top;white-space:normal;word-break:break-word;margin-right:16px}.ms-DetailsRow-cell.is-clipped{overflow:hidden}.ms-DetailsRow-cell:last-child{margin-right:0}.ms-DetailsRow-cellIcon{display:inline-block;margin-right:6px;position:relative;bottom:-2px}.ms-DetailsRow-check{display:inline-block;cursor:default;padding:10px;margin:-10px 0;box-sizing:border-box;vertical-align:top;background:none;border:0;visibility:hidden}.ms-DetailsRow-check:focus{outline:transparent}.ms-DetailsRow.is-selected .ms-DetailsRow-check,.ms-DetailsRow:hover .ms-DetailsRow-check,.ms-Fabric.is-stationary .ms-DetailsRow:hover .ms-DetailsRow-check{visibility:visible}.ms-DetailsRow:focus .ms-DetailsRow-focusBox,.ms-Fabric.is-focusVisible .ms-DetailsRow:focus .ms-DetailsRow-focusBox{position:absolute;left:0;right:0;top:0;bottom:0;border:1px solid #a6a6a6}.ms-DetailsRow-cellMeasurer{position:absolute;visibility:hidden;white-space:nowrap;top:-1000000000}.ms-Check{display:inline-block;cursor:default;line-height:0;vertical-align:top}.ms-Check.is-checked .ms-Check-circle{fill:#0078d7;stroke:#fff;stroke-width:1px}.ms-Check.is-checked .ms-Check-check{stroke:#fff}.ms-Check-circle{fill:#fff;stroke:#c8c8c8}.ms-Check-check{stroke:#c8c8c8}.ms-Dialog{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:#fff;display:none;height:auto;min-width:220px;max-width:340px;padding:28px 24px;z-index:10;position:fixed;transform:translate(-50%,-50%);left:50%;top:50%}.ms-Dialog.is-open{display:block}.ms-Dialog-title{font-size:21px;font-weight:100;margin-bottom:24px}.ms-Dialog-content{position:relative}.ms-Dialog-subText{color:#333;font-size:12px;font-weight:300;line-height:1.5}.ms-Dialog-actions{margin-top:24px;text-align:right}.ms-Dialog--multiline .ms-Dialog-title{font-size:28px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title{background-color:#0078d7;color:#fff;font-size:28px;font-weight:100;padding:28px 24px;margin-top:-28px;margin-left:-24px;margin-right:-24px}.ms-Dialog-buttonClose{background:none;border:0;cursor:pointer;margin:0;padding:4px;position:absolute;right:12px;top:12px;z-index:10}.ms-Dialog-buttonClose .ms-Icon.ms-Icon--Cancel{color:#666;font-size:16px}.ms-Button.ms-Button--compound:not(:last-child){margin-bottom:20px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-title{margin-right:20px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-buttonClose{display:block}@media (min-width:480px){.ms-Dialog-main{width:auto;min-width:288px;max-width:340px}}.ms-Dropdown{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;margin-bottom:10px;position:relative;outline:0}.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:#000}.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:#767676}.ms-Dropdown:focus .ms-Dropdown-title{border-color:#0078d7}.ms-Dropdown .ms-Label{display:inline-block;margin-bottom:8px}.ms-Dropdown.is-disabled .ms-Dropdown-title{background-color:#f4f4f4;border-color:#f4f4f4;color:#a6a6a6;cursor:default}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#0f0;color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#600000;color:#600000}}.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#a6a6a6}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#600000}}.ms-Dropdown.is-open .ms-Dropdown-items{display:block;position:absolute}.ms-Panel .ms-Dropdown-items{box-shadow:none;overflow-y:auto;padding-top:4px;max-height:100%}.ms-Panel .ms-Dropdown-items .ms-Dropdown-item{padding:7px 16px;overflow:hidden;text-overflow:ellipsis}.ms-Panel .ms-Dropdown-items:before{content:none;border:0}.ms-Dropdown-select{display:none}.ms-Dropdown-caretDown{color:#212121;font-size:12px;position:absolute;right:13px;bottom:9px;z-index:1;pointer-events:none}.ms-Dropdown-title{box-sizing:border-box;margin:0;padding:0;box-shadow:none;background:#fff;border:1px solid #c8c8c8;cursor:pointer;display:block;height:32px;padding:5px 32px 0 10px;position:relative;overflow:hidden}.ms-Dropdown-title.ms-Dropdown-truncator{height:auto;display:block;position:absolute;visibility:hidden}.ms-Dropdown-items{box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:#fff;display:none;list-style-type:none;position:absolute;width:100%;max-height:200px;z-index:400;overflow-y:scroll;top:auto;right:auto;bottom:auto;left:auto;max-width:100%}.ms-Dropdown-items:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;border:1px solid #eaeaea}@media screen and (-ms-high-contrast:active){.ms-Dropdown-items{border:1px solid #fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-items{border:1px solid #000}}.ms-Dropdown-item{box-sizing:border-box;cursor:pointer;display:block;height:36px;padding:7px 10px;position:relative;border:1px solid transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item{border-color:#000}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item{border-color:#fff}}.ms-Dropdown-item:hover{background-color:#eaeaea;color:#000}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item:hover{background-color:#1aebff;border-color:#1aebff;color:#000}.ms-Dropdown-item:hover:focus{border-color:#000}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item:hover{background-color:#37006e;border-color:#37006e;color:#fff}}.ms-Dropdown-item:active{background-color:#eaeaea;border-color:#0078d7;color:#000}.ms-Dropdown-item.is-disabled{background:#fff;color:#a6a6a6;cursor:default}.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#b3d6f2;color:#000}.ms-Dropdown-item.is-selected:hover,.ms-Dropdown-item.ms-Dropdown-item--selected:hover{background-color:#b3d6f2}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#1aebff;border-color:#1aebff;color:#000}.ms-Dropdown-item.is-selected:focus,.ms-Dropdown-item.ms-Dropdown-item--selected:focus{border-color:#000}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#37006e;border-color:#37006e;color:#fff}}.ms-FacePile{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;position:relative;height:32px;width:auto}.ms-FacePile .ms-FacePile-personaCardHost{display:none}.ms-FacePile-addButton{background:none;border:0;cursor:pointer;position:relative;height:32px;width:32px;line-height:32px;text-align:center;float:left;padding:0;margin-right:4px;outline:transparent;border-radius:50%;vertical-align:top}.ms-FacePile-addButton .ms-Persona-details,.ms-FacePile-addButton .ms-Persona-presence{display:none}.ms-FacePile-addButton.ms-FacePile-addButton--addPerson{background-color:#0078d7;color:#fff;font-size:16px}.ms-FacePile-addButton.ms-FacePile-addButton--addPerson:focus,.ms-FacePile-addButton.ms-FacePile-addButton--addPerson:hover{background-color:#005a9e}.ms-FacePile-addButton.ms-FacePile-addButton--addPerson:active{background-color:#004578}.ms-FacePile-addButton.ms-FacePile-addButton--addPerson:disabled{background-color:#c8c8c8}.ms-FacePile-addButton.ms-FacePile-addButton--overflow{background-color:#eaeaea;color:#666;display:none}.ms-FacePile-addButton.ms-FacePile-addButton--overflow.is-active{display:block}.ms-FacePile-addButton.ms-FacePile-addButton--overflow:hover{color:#212121}.ms-FacePile-addButton.ms-FacePile-addButton--overflow:disabled{color:#c8c8c8}.ms-FacePile-addPersonIcon{position:relative;top:-1px}.ms-FacePile-overflowText{font-size:14px}.ms-FacePile-panel.ms-FacePile-panel--overflow .ms-Panel-headerText,.ms-FacePile-panel.ms-FacePile-panel--overflow .ms-PeoplePicker-resultAction,.ms-FacePile-panel.ms-FacePile-panel--overflow .ms-PeoplePicker-results,.ms-FacePile-panel.ms-FacePile-panel--overflow .ms-PeoplePicker-searchBox{display:none}.ms-FacePile-panel.ms-FacePile-panel--overflow .ms-PeoplePicker-selectedHeader{font-weight:100;font-size:21px;color:#333;line-height:82px;height:74px;text-transform:none}.ms-Link{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:#0078d7;text-decoration:none;cursor:pointer;outline:none}.ms-Link:focus,.ms-Link:hover{color:#004578}.ms-Link:active{color:#0078d7}.ms-List{padding:0;list-style-type:none}.ms-List,.ms-ListItem{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;box-shadow:none;color:#333;font-size:14px;font-weight:400}.ms-ListItem{padding:0;*zoom:1;padding:9px 28px 3px;position:relative;display:block}.ms-ListItem:after,.ms-ListItem:before{display:table;content:\"\";line-height:0}.ms-ListItem:after{clear:both}.ms-ListItem-primaryText,.ms-ListItem-secondaryText,.ms-ListItem-tertiaryText{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.ms-ListItem-primaryText{color:#212121;font-weight:300;font-size:21px;padding-right:80px;position:relative;top:-4px}.ms-ListItem-secondaryText{color:#333;font-weight:400;font-size:14px;line-height:25px;position:relative;top:-7px;padding-right:30px}.ms-ListItem-tertiaryText{color:#767676;font-weight:300;font-size:14px;position:relative;top:-9px;margin-bottom:-4px;padding-right:30px}.ms-ListItem-metaText{color:#333;font-weight:300;font-size:11px;position:absolute;right:30px;top:39px}.ms-ListItem-image{float:left;height:70px;margin-left:-8px;margin-right:10px;width:70px;background-color:#333}.ms-ListItem-selectionTarget{display:none}.ms-ListItem-actions{max-width:80px;position:absolute;right:30px;text-align:right;top:10px}.ms-ListItem-action{color:#a6a6a6;display:inline-block;font-size:15px;position:relative;text-align:center;top:3px;cursor:pointer;height:16px;width:16px}.ms-ListItem-action .ms-Icon{vertical-align:top}.ms-ListItem-action:hover{color:#666;outline:1px solid transparent}.ms-ListItem.is-unread{border-left:3px solid #0078d7;padding-left:27px}.ms-ListItem.is-unread .ms-ListItem-metaText,.ms-ListItem.is-unread .ms-ListItem-secondaryText{color:#0078d7;font-weight:600}.ms-ListItem.is-unseen:after{border-right:10px solid transparent;border-top:10px solid #0078d7;left:0;position:absolute;top:0}.ms-ListItem.is-selectable .ms-ListItem-selectionTarget{display:block;height:20px;left:6px;position:absolute;top:13px;width:20px}.ms-ListItem.is-selectable .ms-ListItem-image{margin-left:0}.ms-ListItem.is-selectable:hover{background-color:#eaeaea;cursor:pointer;outline:1px solid transparent}.ms-ListItem.is-selectable:hover:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none;position:absolute;top:14px;left:7px;height:15px;width:15px;border:1px solid #767676}.ms-ListItem.is-selected:before{border:1px solid transparent}.ms-ListItem.is-selected:before,.ms-ListItem.is-selected:hover:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none;content:\"\\E73A\";font-size:17px;color:#767676;position:absolute;top:23px;left:7px;border:0}.ms-ListItem.is-selected:hover{background-color:#b3d6f2;outline:1px solid transparent}.ms-ListItem.ms-ListItem--document{padding:0}.ms-ListItem.ms-ListItem--document .ms-ListItem-itemIcon{width:70px;height:70px;float:left;text-align:center}.ms-ListItem.ms-ListItem--document .ms-ListItem-itemIcon .ms-Icon{font-size:38px;line-height:70px;color:#666}.ms-ListItem.ms-ListItem--document .ms-ListItem-primaryText{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;padding-top:15px;padding-right:0;position:static}.ms-ListItem.ms-ListItem--document .ms-ListItem-secondaryText{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#666;font-weight:400;font-size:11px;padding-top:6px}.ms-MessageBanner{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:12px;font-weight:400;position:relative;border-bottom:1px solid #767676;background-color:#eff6fc;min-width:320px;width:100%;height:52px;text-align:center;overflow:hidden;animation-name:fadeIn,slideDownIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}.ms-MessageBanner .ms-Icon{font-size:16px}.ms-MessageBanner.hide{animation-name:fadeOut,slideUpOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}.ms-MessageBanner.is-hidden{display:none}.ms-MessageBanner-close,.ms-MessageBanner-expand{height:52px;width:40px;cursor:pointer;border:0;background-color:transparent}.ms-MessageBanner-close{position:absolute;right:0;top:0;line-height:52px;color:#666}.ms-MessageBanner-text{display:inline-block;padding:18px 0;margin-left:0;max-width:770px;overflow:hidden;text-align:left}.ms-MessageBanner-expand{display:none;vertical-align:top}.ms-MessageBanner-expand.is-visible{display:inline-block}.ms-MessageBanner-action{display:inline-block;vertical-align:top;margin-top:10px;margin-left:10px;padding-right:36px}.ms-MessageBanner-action .ms-Button{color:#fff}.ms-MessageBanner-clipper{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;vertical-align:top}.ms-MessageBanner.is-expanded{height:auto}.ms-MessageBanner.is-expanded .ms-MessageBanner-clipper{white-space:normal}@media screen and (max-width:479px){.ms-MessageBanner-action{margin:0;display:block;text-align:right;padding:0 10px 10px 0}.ms-MessageBanner-text{margin-left:-25px;padding:18px 0 10px;min-width:240px}.ms-MessageBanner-expand{display:inline-block;padding:0;margin-left:-5px;width:20px}.ms-MessageBanner-expand .ms-Icon{color:#0078d7}}.ms-ContextualHost{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;z-index:10;margin:16px auto;position:relative;min-width:10px;display:none;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.4)}.ms-ContextualHost.is-positioned{position:absolute;margin:0}.ms-ContextualHost.is-open{display:inline-block}.ms-ContextualHost-beak{box-shadow:0 0 15px -5px #3c3c3c;position:absolute;width:28px;height:28px;background:#fff;border:1px solid #eaeaea;box-sizing:border-box;top:-6px;display:none;transform:rotate(45deg);z-index:0;outline:1px solid transparent}.ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak,.ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak{top:40px;display:none}.ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak{left:-10px}.ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak{right:-10px}.ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak{display:block;top:-10px}.ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak{display:block;bottom:-10px}.ms-ContextualHost-main{position:relative;background-color:#fff;box-sizing:border-box;outline:1px solid transparent;z-index:5;min-height:10px}.ms-ContextualHost-close{margin:0;border:0;background:none;cursor:pointer;position:absolute;top:12px;right:12px;padding:8px;width:32px;height:32px;font-size:14px;color:#666;z-index:10}.ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title{margin-right:20px}.ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak{background-color:#0078d7}@media (min-width:480px){.ms-ContextualHost{margin:16px}.ms-ContextualHost.is-positioned{margin:0}.ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak,.ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak{display:block}}.ms-MessageBar{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;padding:8px;display:table;background-color:#f4f4f4}.ms-MessageBar .ms-Link{font-size:12px}.ms-MessageBar-icon,.ms-MessageBar-text{display:table-cell;vertical-align:top}.ms-MessageBar-icon{padding-right:8px;font-size:16px;color:#767676}.ms-MessageBar-text{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400}.ms-MessageBar.ms-MessageBar--warning{background-color:#fff4ce}.ms-MessageBar.ms-MessageBar--severeWarning{background-color:#fed9cc}.ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon{color:#d83b01}.ms-MessageBar.ms-MessageBar--error{background-color:#fde7e9}.ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon{color:#a80000}.ms-MessageBar.ms-MessageBar--blocked{background-color:#fde7e9}.ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon{color:#a80000}.ms-MessageBar.ms-MessageBar--success{background-color:#dff6dd}.ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon{color:#107c10}.ms-OrgChart{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400}.ms-OrgChart-groupTitle{color:#666;line-height:1}.ms-OrgChart-list{padding:0;margin:12px 0 16px}.ms-OrgChart-listItem{height:50px;width:100%;position:relative;list-style:none;margin-bottom:8px}.ms-OrgChart-listItemBtn{cursor:pointer;position:relative;height:50px;width:100%;background:none;border:0;text-align:left;margin:0;padding:0}.ms-Overlay{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;background-color:hsla(0,0%,100%,.4);position:fixed;bottom:0;left:0;right:0;top:0;z-index:0;display:none}.ms-Overlay.is-visible{display:block}.ms-Overlay--dark{background-color:rgba(0,0,0,.4)}.ms-u-overflowHidden{overflow:hidden}.ms-Panel{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;background-color:#fff;width:100%;max-width:340px;box-shadow:-30px 0 30px -30px rgba(0,0,0,.2);position:absolute;top:0;right:0;bottom:0;z-index:10;display:none;height:100%}.ms-Panel.animate-in{animation-name:fadeIn,slideLeftIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}.ms-Panel.animate-out{animation-name:fadeOut,slideRightOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}.ms-Panel.is-open{display:block}.ms-Panel .ms-CommandBar{padding-right:0;padding-left:8px}.ms-Panel.ms-Panel--md{max-width:340px}.ms-Panel.ms-Panel--lg{max-width:644px}.ms-Panel.ms-Panel--xl{max-width:940px}.ms-Panel.ms-Panel--xxl{max-width:1192px}.ms-Panel--left{box-shadow:-30px 0 30px 30px rgba(0,0,0,.2);left:0;right:auto}.ms-Panel--left.animate-in{animation-name:fadeIn,slideRightIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}.ms-Panel--left.animate-out{animation-name:fadeOut,slideLeftOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}.ms-Panel-closeButton{background:none;border:0;cursor:pointer;position:absolute;right:6px;top:0;height:40px;width:40px;line-height:40px;outline:0;padding:0;color:#666;font-size:16px}.ms-Panel-closeButton:hover{color:#333}.ms-Panel-closeButton .ms-Icon--Cancel{margin-top:2px}@media (max-width:639px){.ms-Panel-closeButton{font-size:20px;line-height:20px;height:44px;right:4px}}.ms-Panel-contentInner{margin-top:40px;padding:0 16px 20px;overflow-y:auto;height:100%}@media (min-width:640px){.ms-Panel-contentInner{padding:0 32px 20px}}@media (min-width:1366px){.ms-Panel-contentInner{padding:0 40px 20px}}.ms-Panel-headerText{font-weight:100;font-size:21px;color:#333;margin:10px 0;padding:4px 0;line-height:1;text-overflow:ellipsis;overflow:hidden}@media (min-width:1024px){.ms-Panel-headerText{margin-top:30px}}.ms-PanelHost{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:fixed;right:0;top:0;z-index:10}.ms-PanelHost .ms-Overlay{cursor:pointer}.ms-PeoplePicker{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;background-color:#fff;margin-bottom:10px}.ms-PeoplePicker-searchBox{border-bottom:1px solid #c8c8c8;cursor:text;-ms-flex-flow:row wrap;flex-flow:row wrap;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch}.ms-PeoplePicker-searchBox:hover{border-color:#767676}.ms-PeoplePicker-searchBox.is-active,.ms-PeoplePicker-searchBox:focus{border-color:#0078d7}@media screen and (-ms-high-contrast:active){.ms-PeoplePicker-searchBox:focus,.ms-PeoplePicker-searchBox:hover{border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-PeoplePicker-searchBox:focus,.ms-PeoplePicker-searchBox:hover{border-color:#37006e}}.ms-PeoplePicker-searchBox::-webkit-input-placeholder{color:#666}.ms-PeoplePicker-searchBox:-moz-placeholder,.ms-PeoplePicker-searchBox::-moz-placeholder{color:#666}.ms-PeoplePicker-searchBox:-ms-input-placeholder{color:#666}.ms-PeoplePicker-searchBox .ms-TextField.ms-TextField--textFieldUnderlined{border:0;margin-bottom:0;display:inline-block;width:100%;-ms-flex:1;flex:1}.ms-PeoplePicker-searchBox .ms-TextField.ms-TextField--textFieldUnderlined .ms-TextField-field{min-height:40px;border:0}.ms-PeoplePicker.is-active .ms-PeoplePicker-searchBox .ms-TextField-field{border-color:#0078d7}.ms-PeoplePicker-persona{cursor:pointer}.ms-PeoplePicker-persona.has-error .ms-Persona-primaryText{color:#a80000}.ms-PeoplePicker-personaRemove{background:none;border:0;cursor:pointer;background-color:#f4f4f4;color:#666;display:inline-block;text-align:center;height:32px;width:32px}.ms-PeoplePicker-personaRemove:hover{background-color:#eaeaea;color:#333;cursor:pointer}.ms-PeoplePicker-personaRemove:focus{background-color:#eaeaea;color:#333;border:1px solid #0078d7;outline:none}.ms-PeoplePicker-results{background-color:#fff;border:1px solid #c8c8c8;margin-bottom:-1px;padding-top:9px;width:100%;padding-left:0;box-sizing:border-box}.ms-PeoplePicker.is-active .ms-PeoplePicker-results{display:block;opacity:1}.ms-PeoplePicker-resultGroup{border-top:1px solid #eaeaea}.ms-PeoplePicker-resultGroup:first-child{border-top:0}.ms-PeoplePicker-resultGroupTitle{color:#0078d7;font-weight:300;font-size:12px;padding-top:8px;padding-bottom:8px;text-transform:uppercase;padding-left:16px}.ms-PeoplePicker-resultList{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:-1px;list-style-type:none}.ms-PeoplePicker-result{position:relative;margin-top:8px;margin-bottom:8px;padding-left:16px;cursor:pointer;outline:0}.ms-PeoplePicker-result:focus,.ms-PeoplePicker-result:hover{background-color:#eaeaea}.ms-PeoplePicker-result:focus{box-shadow:inset 0 0 0 1px #0078d7}.ms-PeoplePicker-result.is-selected{background-color:#b3d6f2}.ms-PeoplePicker-result.is-selected .ms-PeoplePicker-resultAction:active,.ms-PeoplePicker-result.is-selected .ms-PeoplePicker-resultAction:hover{background-color:#69afe5}.ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker-resultBtn{cursor:pointer;position:relative;box-sizing:border-box;height:34px;width:100%;background:none;border:0;text-align:left;margin:0 0 10px;padding:0 0 0 9px}@media (min-width:480px){.ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker-resultBtn{height:48px}}.ms-PeoplePicker-peopleListBtn:hover,.ms-PeoplePicker-resultBtn:hover{background-color:#eaeaea;outline:1px solid transparent}.ms-PeoplePicker-peopleListBtn:focus,.ms-PeoplePicker-resultBtn:focus{outline:1}.ms-PeoplePicker-peopleListBtn.ms-PeoplePicker-resultBtn--compact,.ms-PeoplePicker-resultBtn.ms-PeoplePicker-resultBtn--compact{height:32px}.ms-PeoplePicker-peopleListBtn{margin-bottom:0;padding:0}.ms-PeoplePicker-peopleListBtn:hover{background-color:transparent}.ms-PeoplePicker-resultAction{background:none;border:0;cursor:pointer;display:block;height:100%;transition:background-color .367s cubic-bezier(.1,.9,.2,1);position:absolute;right:0;top:0;width:40px;text-align:center}.ms-PeoplePicker-resultAction .ms-Icon{color:#666;font-size:15px}.ms-PeoplePicker-resultAction:hover{background-color:#c8c8c8;outline:1px solid transparent}.ms-PeoplePicker-resultAction:active{background-color:#a6a6a6}.ms-PeoplePicker-resultAdditionalContent{display:none}.ms-PeoplePicker-result.is-expanded{background-color:#f4f4f4;margin-bottom:11px}.ms-PeoplePicker-result.is-expanded .ms-PeoplePicker-resultAction .ms-Icon{transform:rotate(180deg)}.ms-PeoplePicker-result.is-expanded .ms-PeoplePicker-resultAdditionalContent{display:block}.ms-PeoplePicker-searchMore{background:none;border:0;cursor:pointer;height:40px;position:relative;width:100%}.ms-PeoplePicker-searchMore:hover{background-color:#f4f4f4}.ms-PeoplePicker-searchMoreIcon{font-size:21px;height:40px;left:16px;line-height:40px;position:absolute;text-align:center;top:0;width:40px}.ms-PeoplePicker-searchMoreText{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;height:40px;left:64px;line-height:40px;position:absolute;top:0}.ms-PeoplePicker-results.ms-PeoplePicker-results--compact .ms-PeoplePicker-resultAction{height:32px;width:32px}.ms-PeoplePicker-results.ms-PeoplePicker-results--compact .ms-PeoplePicker-resultGroups{max-height:209px}.ms-PeoplePicker.ms-PeoplePicker--facePile.is-searching .ms-PeoplePicker-results{border-bottom:0;padding:20px 0 0}.ms-PeoplePicker.ms-PeoplePicker--facePile.is-searching .ms-PeoplePicker-peopleListHeader{display:none}.ms-PeoplePicker.ms-PeoplePicker--facePile .ms-PersonaCard{display:none;position:absolute;height:200px}.ms-PeoplePicker.ms-PeoplePicker--facePile .ms-PersonaCard.is-active{display:block}.ms-PeoplePicker.ms-PeoplePicker--facePile .ms-Persona.ms-Persona--selectable{padding:0}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile{position:relative;border:0;box-shadow:none;margin:0;max-width:100%;border-bottom:1px solid #eaeaea}@media (max-width:479px){.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona-placeholder,.ms-PeoplePicker-selectedPeople .ms-Persona-placeholder{font-size:28px;top:6px}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona-initials,.ms-PeoplePicker-selectedPeople .ms-Persona-initials{font-size:12px;line-height:32px}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona-presence,.ms-PeoplePicker-selectedPeople .ms-Persona-presence{left:19px}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona-details,.ms-PeoplePicker-selectedPeople .ms-Persona-details{padding-left:8px}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona-primaryText,.ms-PeoplePicker-selectedPeople .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona-secondaryText,.ms-PeoplePicker-selectedPeople .ms-Persona-secondaryText{display:none}}@media (min-width:480px){.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-Persona .ms-Persona-secondaryText,.ms-PeoplePicker-selectedPeople .ms-Persona .ms-Persona-secondaryText{display:block}}@media (min-width:480px){.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-PeoplePicker-resultAction,.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-PeoplePicker-resultBtn,.ms-PeoplePicker-selectedPeople .ms-PeoplePicker-peopleListBtn,.ms-PeoplePicker-selectedPeople .ms-PeoplePicker-resultAction,.ms-PeoplePicker-selectedPeople .ms-PeoplePicker-resultBtn{height:40px}}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-PeoplePicker-selected,.ms-PeoplePicker-selectedPeople .ms-PeoplePicker-selected{margin-bottom:20px;display:none}.ms-PeoplePicker-results.ms-PeoplePicker-results--facePile .ms-PeoplePicker-selected.is-active,.ms-PeoplePicker-selectedPeople .ms-PeoplePicker-selected.is-active{display:block}.ms-PeoplePicker-peopleListHeader,.ms-PeoplePicker-selectedHeader{color:#0078d7;font-size:12px;font-weight:400;height:50px;line-height:50px}.ms-PeoplePicker-peopleList,.ms-PeoplePicker-selectedPeople{box-sizing:border-box;margin:0;padding:0;box-shadow:none;list-style:none}.ms-PeoplePicker-selectedPerson{margin-bottom:8px;position:relative}.ms-PeoplePicker-peopleListItem{margin-bottom:6px;position:relative}.ms-Persona{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;line-height:1;position:relative;width:100%;height:48px;display:table;table-layout:fixed;border-collapse:separate}.ms-Persona .ms-ContextualHost{display:none}.ms-Persona-imageArea{position:absolute;overflow:hidden;text-align:center;max-width:48px;height:48px;border-radius:50%;z-index:0;width:100%;top:0;left:0}@media screen and (-ms-high-contrast:active){.ms-Persona-imageArea{border:1px solid #fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-imageArea{border:1px solid #000}}.ms-Persona-placeholder{color:#fff;position:absolute;right:0;left:0;font-size:47px;top:9px;z-index:5}.ms-Persona-initials{color:#fff;font-size:17px;font-weight:100;line-height:48px}.ms-Persona-initials.ms-Persona-initials--blueLight{background-color:#00bcf2}.ms-Persona-initials.ms-Persona-initials--blue{background-color:#0078d7}.ms-Persona-initials.ms-Persona-initials--blueDark{background-color:#002050}.ms-Persona-initials.ms-Persona-initials--teal{background-color:#008272}.ms-Persona-initials.ms-Persona-initials--greenLight{background-color:#bad80a}.ms-Persona-initials.ms-Persona-initials--green{background-color:#107c10}.ms-Persona-initials.ms-Persona-initials--greenDark{background-color:#004b1c}.ms-Persona-initials.ms-Persona-initials--magentaLight{background-color:#e3008c}.ms-Persona-initials.ms-Persona-initials--magenta{background-color:#b4009e}.ms-Persona-initials.ms-Persona-initials--purpleLight{background-color:#b4a0ff}.ms-Persona-initials.ms-Persona-initials--purple{background-color:#5c2d91}.ms-Persona-initials.ms-Persona-initials--black{background-color:#000}.ms-Persona-initials.ms-Persona-initials--orange{background-color:#d83b01}.ms-Persona-initials.ms-Persona-initials--red{background-color:#e81123}.ms-Persona-initials.ms-Persona-initials--redDark{background-color:#a80000}.ms-Persona-image{position:absolute;top:0;left:0;height:48px;z-index:10;width:100%}.ms-Persona-image[src=\"\"]{display:none}.ms-Persona-presence{background-color:#7fba00;position:absolute;height:12px;width:12px;border-radius:50%;top:auto;left:34px;bottom:-1px;border:2px solid #fff;text-align:center}@media screen and (-ms-high-contrast:active){.ms-Persona-presence{border-color:#000;box-shadow:inset 0 0 0 1px #1aebff;color:#000;background-color:#fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-presence{border-color:#fff;box-shadow:inset 0 0 0 1px #37006e;color:#fff;background-color:#000}}.ms-Persona-presenceIcon{color:#fff;font-size:8px;line-height:12px;vertical-align:top}.ms-Persona-details{padding:0 12px;vertical-align:middle;overflow:hidden;text-align:left;padding-left:60px;display:table-cell;width:100%}.ms-Persona-optionalText,.ms-Persona-primaryText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{display:block;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis}.ms-Persona-primaryText{color:#333;font-weight:400;font-size:17px;margin-top:-3px;line-height:1.4}.ms-Persona-optionalText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{color:#666;font-weight:400;font-size:12px;white-space:nowrap;line-height:1.3}.ms-Persona-secondaryText{padding-top:3px}.ms-Persona-optionalText,.ms-Persona-tertiaryText{padding-top:5px;display:none}.ms-Persona.ms-Persona--tiny{height:30px;display:inline-block}.ms-Persona.ms-Persona--tiny .ms-Persona-imageArea{overflow:visible;display:none}.ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:auto;top:10px;left:0;border:0}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:9px;border:1px solid #fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{border:1px solid #000}}.ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-left:20px}.ms-Persona.ms-Persona--tiny .ms-Persona-primaryText{font-size:14px;padding-top:9px}.ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly{padding:0;background-color:transparent}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText:after{content:\";\"}.ms-Persona.ms-Persona--facePile,.ms-Persona.ms-Persona--token,.ms-Persona.ms-Persona--xs{height:32px}.ms-Persona.ms-Persona--facePile .ms-Persona-image,.ms-Persona.ms-Persona--facePile .ms-Persona-imageArea,.ms-Persona.ms-Persona--token .ms-Persona-image,.ms-Persona.ms-Persona--token .ms-Persona-imageArea,.ms-Persona.ms-Persona--xs .ms-Persona-image,.ms-Persona.ms-Persona--xs .ms-Persona-imageArea{max-width:32px;height:32px}.ms-Persona.ms-Persona--facePile .ms-Persona-placeholder,.ms-Persona.ms-Persona--token .ms-Persona-placeholder,.ms-Persona.ms-Persona--xs .ms-Persona-placeholder{font-size:28px;top:6px}.ms-Persona.ms-Persona--facePile .ms-Persona-initials,.ms-Persona.ms-Persona--token .ms-Persona-initials,.ms-Persona.ms-Persona--xs .ms-Persona-initials{font-size:12px;line-height:32px}.ms-Persona.ms-Persona--facePile .ms-Persona-presence,.ms-Persona.ms-Persona--token .ms-Persona-presence,.ms-Persona.ms-Persona--xs .ms-Persona-presence{left:19px}.ms-Persona.ms-Persona--facePile .ms-Persona-details,.ms-Persona.ms-Persona--token .ms-Persona-details,.ms-Persona.ms-Persona--xs .ms-Persona-details{padding-left:40px}.ms-Persona.ms-Persona--facePile .ms-Persona-primaryText,.ms-Persona.ms-Persona--token .ms-Persona-primaryText,.ms-Persona.ms-Persona--xs .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-Persona.ms-Persona--facePile .ms-Persona-secondaryText,.ms-Persona.ms-Persona--token .ms-Persona-secondaryText,.ms-Persona.ms-Persona--xs .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--sm{height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-image,.ms-Persona.ms-Persona--sm .ms-Persona-imageArea{max-width:40px;height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-placeholder{font-size:38px;top:5px}.ms-Persona.ms-Persona--sm .ms-Persona-initials{font-size:14px;line-height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-presence{left:27px}.ms-Persona.ms-Persona--sm .ms-Persona-details{padding-left:48px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText{font-size:14px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText,.ms-Persona.ms-Persona--sm .ms-Persona-secondaryText{padding-top:1px}.ms-Persona.ms-Persona--lg{height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-image,.ms-Persona.ms-Persona--lg .ms-Persona-imageArea{max-width:72px;height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-placeholder{font-size:67px;top:10px}.ms-Persona.ms-Persona--lg .ms-Persona-initials{font-size:28px;line-height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-presence{left:49px;height:20px;width:20px;border-width:3px}.ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon{line-height:20px;font-size:14px}.ms-Persona.ms-Persona--lg .ms-Persona-details{padding-left:84px}.ms-Persona.ms-Persona--lg .ms-Persona-secondaryText{padding-top:3px}.ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--xl{height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-image,.ms-Persona.ms-Persona--xl .ms-Persona-imageArea{max-width:100px;height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-placeholder{font-size:95px;top:12px}.ms-Persona.ms-Persona--xl .ms-Persona-initials{font-size:42px;line-height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-presence{height:28px;width:28px;left:71px;border-width:4px}.ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon{line-height:28px;font-size:21px;position:relative;top:1px}.ms-Persona.ms-Persona--xl .ms-Persona-details{padding-left:120px}.ms-Persona.ms-Persona--xl .ms-Persona-primaryText{font-size:21px;font-weight:300;margin-top:0}.ms-Persona.ms-Persona--xl .ms-Persona-secondaryText{padding-top:2px}.ms-Persona.ms-Persona--xl .ms-Persona-optionalText,.ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--darkText .ms-Persona-primaryText{color:#212121}.ms-Persona.ms-Persona--darkText .ms-Persona-optionalText,.ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText{color:#333}.ms-Persona.ms-Persona--selectable{cursor:pointer;padding:0 10px}.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):focus,.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):hover{background-color:#deecf9;outline:1px solid transparent}.ms-Persona.ms-Persona--available .ms-Persona-presence{background-color:#7fba00}.ms-Persona.ms-Persona--away .ms-Persona-presence{background-color:#fcd116}.ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{position:relative;left:1px}.ms-Persona.ms-Persona--blocked .ms-Persona-presence{background-color:#fff}.ms-Persona.ms-Persona--blocked .ms-Persona-presence:before{content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #d93b3b;border-radius:50%}.ms-Persona.ms-Persona--blocked .ms-Persona-presence:after{content:\"\";width:100%;height:2px;background-color:#d93b3b;transform:rotate(-45deg);position:absolute;top:5px;left:0}.ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence:after{top:9px}.ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence:after{top:13px}.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#d93b3b}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#37006e}}.ms-Persona.ms-Persona--dnd .ms-Persona-presence{background-color:#e81123}.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#93abbd}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#000;box-shadow:inset 0 0 0 1px #fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#fff;box-shadow:inset 0 0 0 1px #000}}.ms-Persona.ms-Persona--facePile{display:inline-block;width:auto}.ms-Persona.ms-Persona--facePile:hover{cursor:pointer}.ms-Persona.ms-Persona--facePile .ms-Persona-imageArea{position:relative;width:100%;min-width:32px}.ms-Persona.ms-Persona--facePile .ms-Persona-initials{position:relative}.ms-Persona.ms-Persona--facePile .ms-Persona-details,.ms-Persona.ms-Persona--facePile .ms-Persona-presence{display:none}.ms-Persona.ms-Persona--token{display:-ms-inline-flexbox;display:inline-flex;width:auto;background-color:#f4f4f4;border-radius:20px;margin:4px}.ms-Persona.ms-Persona--token:hover{cursor:pointer}.ms-Persona.ms-Persona--token .ms-Persona-actionIcon{border-radius:20px;display:inline-block;width:32px;height:32px;padding:0;line-height:30px;transition:background-color .167s cubic-bezier(.1,.9,.2,1);text-align:center}.ms-Persona.ms-Persona--token .ms-Persona-actionIcon:hover{background-color:#eaeaea}.ms-Persona.ms-Persona--token .ms-Persona-imageArea{width:100%;min-width:32px}.ms-Persona.ms-Persona--token .ms-Persona-details{height:30px;display:inline-block;width:auto;padding-right:8px}.ms-Persona.ms-Persona--token .ms-Persona-primaryText{padding-top:0;line-height:34px}.ms-Persona.ms-Persona--token .ms-Persona-initials{position:relative}.ms-PersonaCard{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;animation-name:fadeIn,slideUpIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both;color:#333;font-size:14px;font-weight:400;bottom:0;left:0;position:fixed;right:0;outline:1px solid transparent}.ms-PersonaCard-persona{background-color:#f4f4f4;padding-top:12px;padding-bottom:12px;padding-left:20px}.ms-PersonaCard-actions{box-sizing:border-box;position:relative;list-style:none;margin:0;padding:0 10px;background-color:#fff;height:48px}.ms-PersonaCard-actions:before{content:\"\";position:absolute;top:47px;left:0;width:100%;border-top:1px solid #c8c8c8}.ms-PersonaCard-action,.ms-PersonaCard-overflow{display:inline-block;cursor:pointer;font-size:16px;height:48px;line-height:48px;padding:0 10px;color:#666;outline:transparent;position:relative;box-sizing:border-box}.ms-PersonaCard-action:hover,.ms-PersonaCard-overflow:hover{color:#212121}.ms-PersonaCard-action:active,.ms-PersonaCard-overflow:active{color:#0078d7}.ms-PersonaCard-action:before,.ms-PersonaCard-overflow:before{content:\"\";position:absolute;width:100%;height:100%;background-color:transparent;top:0;left:0;z-index:100}.ms-PersonaCard-action.is-active,.ms-PersonaCard-overflow.is-active{color:#0078d7}.ms-PersonaCard-action.is-active:after,.ms-PersonaCard-overflow.is-active:after{box-sizing:border-box;transform:rotate(45deg);content:\"\";width:10px;height:10px;border:1px solid #c8c8c8;background-color:#fff;position:absolute;border-right:0;border-bottom:0;bottom:-4px;left:13px}.ms-PersonaCard-overflow{font-size:14px;color:#333;float:right;margin-top:-1px}.ms-PersonaCard-overflow:hover{color:#0078d7}.ms-PersonaCard-orgChart{position:absolute;right:12px;top:-95px}.ms-PersonaCard-actionDetailBox{min-height:48px;overflow-y:auto;overflow-x:hidden;background-color:#fff}.ms-PersonaCard-details{display:none;width:100%;margin:0;max-height:300px;min-height:48px;color:#666;padding:9px 20px;box-sizing:border-box}.ms-PersonaCard-details.is-active{display:block}.ms-PersonaCard-details.is-collapsed{height:30px;overflow:hidden}.ms-PersonaCard-details.is-collapsed .ms-PersonaCard-detailExpander:after{content:\"\\E70D\"}.ms-PersonaCard-details[data-detail-id=org]{max-height:300px}.ms-PersonaCard-detailExpander{color:#333;cursor:pointer;font-size:16px;height:30px;line-height:30px;margin-top:2px;position:absolute;right:10px;text-align:center;width:30px}.ms-PersonaCard-detailExpander:after{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none;content:\"\\E70E\"}.ms-PersonaCard-detailLine{color:#333;line-height:30px}.ms-PersonaCard-detailLabel{color:#666}.ms-PersonaCard-action.ms-PersonaCard-orgChart:after{display:none}@media (min-width:480px){.ms-PersonaCard{box-shadow:0 0 5px 0 rgba(0,0,0,.4);max-width:360px;position:relative}.ms-ContextualHost .ms-PersonaCard{box-shadow:none}}.ms-Pivot{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-size:14px;font-weight:400}.ms-Pivot-links{font-size:0;height:40px;list-style-type:none;padding:0;white-space:nowrap}.ms-Pivot-link{color:#333;display:inline-block;font-size:14px;font-weight:400;line-height:40px;margin-right:8px;padding:0 8px;text-align:center;vertical-align:top}.ms-Pivot-link:hover{cursor:pointer}.ms-Pivot-link:before{background-color:transparent;bottom:0;content:\"\";height:2px;left:8px;position:absolute;right:8px;transition:background-color .267s cubic-bezier(.1,.25,.75,.9)}.ms-Pivot-link:after{color:transparent;content:attr(title);display:block;font-weight:700;height:1px;overflow:hidden;visibility:hidden}.ms-Pivot-link.is-selected{font-weight:600;position:relative}.ms-Pivot-link.is-selected:before{background-color:#0078d7}.ms-Pivot-link.is-disabled{color:#a6a6a6}.ms-Pivot-link.ms-Pivot-link--overflow{color:#666}.ms-Pivot-link.ms-Pivot-link--overflow.is-selected{color:#0078d7}.ms-Pivot-link.ms-Pivot-link--overflow:focus:not(.is-selected),.ms-Pivot-link.ms-Pivot-link--overflow:hover:not(.is-selected){color:#212121}.ms-Pivot-link.ms-Pivot-link--overflow:active{color:#0078d7}.ms-Pivot-ellipsis{font-size:15px;position:relative;top:0}.ms-Pivot-content{display:none;margin-top:20px}.ms-Pivot.ms-Pivot--large .ms-Pivot-link{font-size:17px}.ms-Pivot.ms-Pivot--large .ms-Pivot-link.is-selected{font-weight:300}.ms-Pivot.ms-Pivot--large .ms-Pivot-link.ms-Pivot-link--overflow:after{font-size:17px}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link{height:40px;background-color:#f4f4f4;line-height:40px;margin-right:-2px;padding:0 10px}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:focus:not(.is-selected):not(.ms-Pivot-link--overflow),.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:hover:not(.is-selected):not(.ms-Pivot-link--overflow){color:#000}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active{color:#fff;background-color:#0078d7}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{background-color:#0078d7;color:#fff;font-weight:300}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:focus:not(.is-selected),.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:hover:not(.is-selected){background-color:#fff}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:active{background-color:#0078d7}@media screen and (-ms-high-contrast:active){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{font-weight:600}}.ms-ProgressIndicator{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-ProgressIndicator-itemName{color:#333;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-top:4px;line-height:20px}.ms-ProgressIndicator-itemDescription{color:#767676;font-size:11px;line-height:18px}.ms-ProgressIndicator-itemProgress{position:relative;width:180px;height:2px;padding:8px 0}.ms-ProgressIndicator-progressTrack{position:absolute;width:100%;height:2px;background-color:#eaeaea;outline:1px solid transparent}.ms-ProgressIndicator-progressBar{background-color:#0078d7;height:2px;position:absolute;transition:width .3s ease;width:0}@media screen and (-ms-high-contrast:active){.ms-ProgressIndicator-progressBar{background-color:#fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-ProgressIndicator-progressBar{background-color:#000}}.ms-SearchBox{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;height:36px;color:#333;font-size:14px;font-weight:400;position:relative;margin-bottom:10px;display:inline-block;overflow:hidden;background-color:#fff}.ms-SearchBox.is-active{z-index:10}.ms-SearchBox.is-active .ms-SearchBox-label{display:none}.ms-SearchBox.is-active .ms-SearchBox-clear{display:block}.ms-SearchBox:hover{background-color:#deecf9}.ms-SearchBox:hover .ms-SearchBox-label{color:#000}.ms-SearchBox:hover .ms-SearchBox-label .ms-Icon{color:#333}.ms-SearchBox.is-disabled{background-color:#f4f4f4;pointer-events:none}.ms-SearchBox.is-disabled .ms-SearchBox-icon,.ms-SearchBox.is-disabled .ms-SearchBox-label{color:#a6a6a6}.ms-SearchBox.is-disabled .ms-SearchBox-field{color:#a6a6a6;background-color:transparent;border-color:#f4f4f4;cursor:default}.ms-SearchBox-clear{display:none;position:absolute;top:0;right:0;z-index:10}.ms-SearchBox-clear .ms-CommandButton-button{background-color:#0078d7;color:#fff;height:36px}.ms-SearchBox-clear .ms-CommandButton-icon{color:#fff}.ms-SearchBox-icon{position:relative;top:50%;transform:translateY(-50%);display:inline-block;font-size:16px;width:16px;margin-left:12px;margin-right:6px;color:#0078d7;vertical-align:top}.ms-SearchBox-field{position:relative;box-sizing:border-box;margin:0;padding:0;box-shadow:none;border:1px solid #69afe5;outline:1px solid transparent;font-weight:300;font-size:14px;color:#000;height:36px;padding:6px 3px 7px 45px;width:208px;background-color:transparent;z-index:5;transition:padding-left .167s}.ms-SearchBox-field:focus{padding:6px 32px 7px 10px;border-color:#0078d7;background-color:#deecf9}.ms-SearchBox-field::-ms-clear{display:none}.ms-SearchBox-label{position:absolute;top:0;left:0;height:36px;line-height:36px;color:#666}.ms-SearchBox.ms-SearchBox--commandBar{background-color:#fff;width:208px;height:40px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label{height:40px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field{transition:none;border:0}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field:focus{background-color:transparent;padding:6px 3px 7px 45px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter{display:none;position:absolute;top:0;z-index:10;color:#a6a6a6}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button{height:40px;background-color:transparent}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter{right:8px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-icon{color:#0078d7}.ms-SearchBox.ms-SearchBox--commandBar:before{position:absolute;content:\" \";right:0;bottom:0;left:0;margin:0 8px;border-bottom:1px solid #eaeaea}.ms-SearchBox.ms-SearchBox--commandBar:hover{background-color:#fff}.ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-label{color:#212121}.ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-icon{color:#0078d7}.ms-SearchBox.ms-SearchBox--commandBar:focus{background-color:transparent}.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-exit,.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-filter{display:block}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed{width:50px;min-height:40px;z-index:0;background-color:#f4f4f4}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-text{display:none}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-field{cursor:pointer;width:calc(100% - 50px)}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed:before{visibility:hidden}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active{width:100%}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-field{display:block;cursor:text}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-text{display:inline-block}@media only screen and (max-width:639px){.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active{width:100%}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-clear{display:inline-block;right:58px}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-filter{display:inline-block}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active.is-animated{transition:width .167s cubic-bezier(.1,.9,.2,1)}}.ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active:before{visibility:visible}.ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear{display:inline-block}.ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon{color:#a6a6a6}.ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon:active{color:#0078d7}@media only screen and (min-width:1024px){.ms-SearchBox.ms-SearchBox--commandBar{background-color:#fff;border-right:1px solid #eaeaea}}@media only screen and (max-width:639px){.ms-SearchBox.ms-SearchBox--commandBar{height:44px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label{height:44px;line-height:44px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon{font-size:20px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon .ms-CommandButton-button{height:44px}.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field,.ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label{font-size:16px}}.ms-SearchBox.ms-SearchBox--commandBar.is-active{background-color:#fff}.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label{display:block;line-height:40px;height:40px}.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label .ms-SearchBox-text{display:none}.ms-SearchBox.ms-SearchBox--commandBar.is-active:before{visibility:visible}@media only screen and (max-width:639px){.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-field{width:100%;padding-right:100px}.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-icon{display:none}.ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-exit{display:inline-block}.ms-SearchBox.ms-SearchBox--commandBar.is-active.has-text .ms-SearchBox-filter .ms-CommandButton-icon{color:#a6a6a6}}.ms-Spinner{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;position:relative;height:20px}.ms-Spinner.ms-Spinner--large{height:28px}.ms-Spinner.ms-Spinner--large .ms-Spinner-label{left:34px;top:6px}.ms-Spinner-circle{position:absolute;border-radius:100px;background-color:#0078d7;opacity:0}@media screen and (-ms-high-contrast:active){.ms-Spinner-circle{background-color:#fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Spinner-circle{background-color:#000}}.ms-Spinner-label{position:relative;font-size:12px;font-weight:400;color:#0078d7;left:28px;top:2px}.ms-Spinner-label,.ms-Table{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-Table{display:table;width:100%;border-collapse:collapse}.ms-Table--fixed{table-layout:fixed}.ms-Table-row,.ms-Table tr{display:table-row;line-height:30px;font-weight:300;font-size:12px;color:#333}.ms-Table-row.is-selected,.ms-Table tr.is-selected{background-color:#b3d6f2}.ms-Table-row.is-selected .ms-Table-rowCheck,.ms-Table tr.is-selected .ms-Table-rowCheck{background-color:#0078d7}.ms-Table-row.is-selected .ms-Table-rowCheck:before,.ms-Table tr.is-selected .ms-Table-rowCheck:before{display:none}.ms-Table-row.is-selected .ms-Table-rowCheck:after,.ms-Table tr.is-selected .ms-Table-rowCheck:after{content:\"\\E73A\";color:#fff}.ms-Table-cell,.ms-Table td,.ms-Table th{display:table-cell;padding:0 10px}.ms-Table-head,.ms-Table thead th{font-weight:300;font-size:11px;color:#666}.ms-Table-head .ms-Table-cell,.ms-Table-head .ms-Table-rowCheck,.ms-Table-head td,.ms-Table-head th,.ms-Table thead .ms-Table-cell,.ms-Table thead .ms-Table-rowCheck,.ms-Table thead td,.ms-Table thead th{font-weight:400;text-align:left;border-bottom:1px solid #eaeaea}.ms-Table-rowCheck{display:table-cell;width:20px;position:relative;padding:0}.ms-Table-rowCheck:after{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none;content:\"\\E739\";color:#a6a6a6;font-size:12px;position:absolute;left:4px;top:1px}.ms-Table--selectable .ms-Table-row:hover,.ms-Table--selectable tr:hover{background-color:#f4f4f4;cursor:pointer;outline:1px solid transparent}@media screen and (-ms-high-contrast:active){.ms-Table-row.is-selected .ms-Table-rowCheck{background:none}.ms-Table-row.is-selected .ms-Table-rowCheck:before{display:block}}.ms-TextField{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:#333;font-size:14px;font-weight:400;margin-bottom:8px}.ms-TextField .ms-Label{font-size:14px;font-weight:600}.ms-TextField.is-disabled .ms-TextField-field{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField.is-disabled::-webkit-input-placeholder{color:#a6a6a6}.ms-TextField.is-disabled:-moz-placeholder,.ms-TextField.is-disabled::-moz-placeholder{color:#a6a6a6}.ms-TextField.is-disabled:-ms-input-placeholder{color:#a6a6a6}.ms-TextField.is-required .ms-Label:after{content:\" *\";color:#a80000}.ms-TextField.is-required::-webkit-input-placeholder:after{content:\" *\";color:#a80000}.ms-TextField.is-required:-moz-placeholder:after,.ms-TextField.is-required::-moz-placeholder:after{content:\" *\";color:#a80000}.ms-TextField.is-required:-ms-input-placeholder:after{content:\" *\";color:#a80000}.ms-TextField.is-active{border-color:#0078d7}.ms-TextField-field{box-sizing:border-box;margin:0;padding:0;box-shadow:none;border:1px solid #c8c8c8;border-radius:0;font-weight:300;font-size:14px;color:#333;height:32px;padding:6px 12px 7px;width:100%;min-width:180px;outline:0;text-overflow:ellipsis}.ms-TextField-field:hover{border-color:#767676}.ms-TextField-field:focus{border-color:#0078d7}@media screen and (-ms-high-contrast:active){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#37006e}}.ms-TextField-field[disabled]{background-color:#f4f4f4;border-color:#f4f4f4;pointer-events:none;cursor:default}.ms-TextField-field::-webkit-input-placeholder{color:#666}.ms-TextField-field:-moz-placeholder,.ms-TextField-field::-moz-placeholder{color:#666}.ms-TextField-field:-ms-input-placeholder{color:#666}.ms-TextField-description{color:#767676;font-size:11px}.ms-TextField.ms-TextField--placeholder{position:relative;background-color:#fff}.ms-TextField.ms-TextField--placeholder .ms-TextField-field{position:relative;background-color:transparent;z-index:5}.ms-TextField.ms-TextField--placeholder .ms-Label{position:absolute;font-weight:300;font-size:14px;color:#666;padding:6px 12px 7px;pointer-events:none;z-index:0}.ms-TextField.ms-TextField--placeholder.is-disabled,.ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label{color:#a6a6a6}.ms-TextField.ms-TextField--underlined{border-bottom:1px solid #c8c8c8;display:table;width:100%;min-width:180px}.ms-TextField.ms-TextField--underlined:hover{border-color:#767676}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined:hover{border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined:hover{border-color:#37006e}}.ms-TextField.ms-TextField--underlined:active,.ms-TextField.ms-TextField--underlined:focus{border-color:#0078d7}.ms-TextField.ms-TextField--underlined .ms-Label{font-size:14px;margin-right:8px;display:table-cell;vertical-align:top;padding-left:12px;padding-top:9px;height:32px;width:1%;white-space:nowrap}.ms-TextField.ms-TextField--underlined .ms-TextField-field{border:0;float:left;display:table-cell;text-align:left;padding-top:8px;padding-bottom:3px}.ms-TextField.ms-TextField--underlined .ms-TextField-field:active,.ms-TextField.ms-TextField--underlined .ms-TextField-field:focus,.ms-TextField.ms-TextField--underlined .ms-TextField-field:hover{outline:0}.ms-TextField.ms-TextField--underlined.is-disabled{border-bottom-color:#eaeaea}.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label{color:#a6a6a6}.ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field{background-color:transparent;color:#a6a6a6}.ms-TextField.ms-TextField--underlined.is-active{border-color:#0078d7}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined.is-active{border-color:#1aebff}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined.is-active{border-color:#37006e}}.ms-TextField.ms-TextField--multiline .ms-TextField-field{color:#666;font-size:14px;line-height:17px;min-height:60px;min-width:260px;padding-top:6px;overflow:auto}.ms-Label,.ms-TextField.ms-TextField--multiline .ms-TextField-field{-webkit-font-smoothing:antialiased;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-weight:400}.ms-Label{margin:0;padding:0;box-shadow:none;color:#333;font-size:12px;box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required:after{content:\" *\";color:#a80000}.ms-Label.is-disabled{color:#a6a6a6}.ms-Toggle{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;position:relative;display:block;margin-bottom:26px}.ms-Toggle .ms-Label{position:relative;top:-2px;padding:0 0 0 50px}.ms-Toggle .ms-Toggle-field:before{position:absolute;top:3px;width:10px;height:10px;border-radius:10px;content:\"\";left:4px;background-color:#666;outline:1px solid transparent;transition-property:background,left;transition-duration:.25s;transition-timing-function:cubic-bezier(.4,0,.23,1)}@media screen and (-ms-high-contrast:active){.ms-Toggle .ms-Toggle-field:before{border:2.5px solid #fff;height:15px;outline:0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle .ms-Toggle-field:before{border-color:#000}}.ms-Toggle .ms-Toggle-field:before{right:auto}.ms-Toggle .ms-Toggle-field .ms-Label--off{display:block}.ms-Toggle .ms-Toggle-field .ms-Label--on{display:none}.ms-Toggle .ms-Toggle-field.is-selected{background-color:#0078d7;border-color:#0078d7}.ms-Toggle .ms-Toggle-field.is-selected:before{position:absolute;top:3px;width:10px;height:10px;border-radius:10px;content:\"\";right:4px;background-color:#666;outline:1px solid transparent;transition-property:background,left;transition-duration:.25s;transition-timing-function:cubic-bezier(.4,0,.23,1)}@media screen and (-ms-high-contrast:active){.ms-Toggle .ms-Toggle-field.is-selected:before{border:2.5px solid #fff;height:15px;outline:0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle .ms-Toggle-field.is-selected:before{border-color:#000}}.ms-Toggle .ms-Toggle-field.is-selected:before{background-color:#fff;left:28px}.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off{display:none}.ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on{display:block}@media screen and (-ms-high-contrast:active){.ms-Toggle .ms-Toggle-field.is-selected{background-color:#fff}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle .ms-Toggle-field.is-selected{background-color:#000}}.ms-Toggle:focus+.ms-Toggle-field,.ms-Toggle:hover+.ms-Toggle-field{border-color:#666}.ms-Toggle:focus+.ms-Toggle-field:before,.ms-Toggle:hover+.ms-Toggle-field:before{background-color:#333}.ms-Toggle:focus:checked+.ms-Toggle-field,.ms-Toggle:hover:checked+.ms-Toggle-field{background-color:#106ebe;border-color:#106ebe}.ms-Toggle:focus:checked+.ms-Toggle-field:before,.ms-Toggle:hover:checked+.ms-Toggle-field:before{background-color:#fff}.ms-Toggle:active:checked+.ms-Toggle-field{background-color:#005a9e;border-color:#005a9e}.ms-Toggle .ms-Toggle-field:focus,.ms-Toggle .ms-Toggle-field:hover{border-color:#333}.ms-Toggle .ms-Toggle-field.is-selected:focus,.ms-Toggle .ms-Toggle-field.is-selected:hover{background-color:#106ebe;border-color:#106ebe}.ms-Toggle .ms-Toggle-field .ms-Label{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle .ms-Toggle-field:hover .ms-Label{color:#000}.ms-Toggle .ms-Toggle-field:active .ms-Label{color:#333}.ms-Toggle.is-disabled .ms-Label{color:#a6a6a6}.ms-Toggle.is-disabled .ms-Toggle-field{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}.ms-Toggle.is-disabled .ms-Toggle-field:before{background-color:#c8c8c8}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-disabled .ms-Toggle-field,.ms-Toggle.is-disabled .ms-Toggle-field:before{border-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-disabled .ms-Toggle-field,.ms-Toggle.is-disabled .ms-Toggle-field:before{border-color:#600000}}.ms-Toggle-description{position:relative;font-size:14px;vertical-align:top;display:block;margin-bottom:8px}.ms-Toggle-field{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:2px solid #a6a6a6;border-radius:20px;cursor:pointer;transition-property:background,left,border-color;transition-duration:.25s;transition-timing-function:cubic-bezier(.4,0,.23,1);outline:0}.ms-Toggle-field:focus,.ms-Toggle-field:hover{border-color:#666}.ms-Toggle-input{display:none}.ms-Toggle.ms-Toggle--textLeft{width:225px;margin-bottom:40px}.ms-Toggle.ms-Toggle--textLeft .ms-Toggle-description{display:inline-block;max-width:150px;top:-3px;margin-bottom:0}.ms-Toggle.ms-Toggle--textLeft .ms-Toggle-field{float:right}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

//Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * Office UI Fabric JS 1.5.0
 * The JavaScript front-end framework for building experiences for Office 365.
 **/
var fabric;!function(e){var t=33,i=function(){function e(){}return e.transition=function(t,i){var n={element:t,props:i,transformations:{}};e._animationObjects.push(n),e._parseProperties(n),e._createTransition(n),setTimeout(e._setProperties,0,n),e._setCallback(n)},e.animation=function(t,i,n){var s={element:t,keyframes:i,props:n};e._animationObjects.push(s),e._parseProperties(s),e._createAnimation(s),e._setCallback(s)},e.scrollTo=function(t,i){var n={element:t,props:i,step:0};e._setScrollProperties(n),n.props.delay?setTimeout(e._animationObjects,1e3*n.props.delay,n):e._animateScroll(n),e._animationObjects.push(n)},e._setScrollProperties=function(e){e.beginTop=e.element.scrollTop,e.change=e.props.top-e.beginTop,e.props.duration=1e3*e.props.duration},e._parseProperties=function(t){var i=e._timeProps.concat(e._callbackProps);t.tweenObj={};for(var n in t.props)e._contains(i,n)?t[n]=t.props[n]:t.tweenObj[n]=t.props[n]},e._animateScroll=function(i){var n=i.props.duration/t,s=e._easeOutExpo(i.step++,i.beginTop,i.change,n);i.element.scrollTop=s,i.step>=n?(i.element.scrollTop=i.props.top,e._executeCallback(i.props),e._removeAnimationObject(i)):setTimeout(function(){requestAnimationFrame(function(){e._animateScroll(i)})},t)},e._createTransition=function(t){var i=t.duration||0,n=t.delay||0;t.element.style.transitionProperty=e._getTransitionProperties(t.tweenObj),t.element.style.transitionDuration=i.toString()+"s",t.element.style.transitionTimingFunction=t.ease||"linear",t.element.style.transitionDelay=n.toString()+"s"},e._createAnimation=function(e){var t=e.duration||0,i=e.delay||0;e.element.style.animationName=e.keyframes,e.element.style.animationDuration=t.toString()+"s",e.element.style.animationTimingFunction=e.ease||"linear",e.element.style.animationDelay=i.toString()+"s",e.element.style.animationFillMode="both"},e._getTransitionProperties=function(t){var i=!1,n=!1,s=[];for(var o in t)e._contains(e._transformProps,o)?i=!0:e._contains(e._filters,o)?n=!0:s.push(e._camelCaseToDash(o));return i&&s.push("transform"),n&&(s.push("-webkit-filter"),s.push("filter")),s.join(", ")},e._setProperties=function(t){for(var i in t.tweenObj)e._contains(e._transformProps,i)?e._setTransformValues(t,i):e._contains(e._filters,i)?e._setFilterValues(t,i):e._setRegularValues(t,i);t.transformations&&e._setTransformations(t)},e._setRegularValues=function(e,t){var i=e.tweenObj[t];i.toString().indexOf("%")===-1&&(i+="opacity"!==t&&"backgroundColor"!==t&&"boxShadow"!==t?"px":""),e.element.style[t]=i},e._setFilterValues=function(t,i){var n=t.tweenObj[i];n="hueRotate"===i?"("+n+"deg)":"blur"===i?"("+n+"px)":"("+n+"%)",i=e._camelCaseToDash(i),t.element.style.webkitFilter=i+n,t.element.style.filter=i+n},e._setTransformValues=function(e,t){/x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(t)&&(e.transformations[t]=e.tweenObj[t])},e._setTransformations=function(e){var t="",i="",n="",s="",o=e.transformations;s+=void 0!==o.x&&o.x?"translateX("+o.x+"px) ":"",s+=void 0!==o.y&&o.y?"translateY("+o.y+"px) ":"",s+=void 0!==o.z&&o.z?"translateZ("+o.z+"px) ":"",t+=void 0!==o.rotate&&o.rotate?"rotate("+o.rotate+"deg) ":"",t+=void 0!==o.rotateX&&o.rotateX?"rotateX("+o.rotateX+"deg) ":"",t+=void 0!==o.rotateY&&o.rotateY?"rotate("+o.rotateY+"deg) ":"",t+=void 0!==o.rotateZ&&o.rotateZ?"rotate("+o.rotateZ+"deg) ":"",i+=void 0!==o.scaleX&&o.scaleX?"scaleX("+o.scaleX+") ":"",i+=void 0!==o.scaleY&&o.scaleY?"scaleY("+o.scaleY+") ":"",i+=void 0!==o.scaleZ&&o.scaleZ?"scaleZ("+o.scaleZ+") ":"",n+=void 0!==o.skewX&&o.skewX?"skewX("+o.skewX+"deg) ":"",n+=void 0!==o.skewY&&o.skewY?"skewY("+o.skewY+"deg) ":"",e.element.style.transform=s+t+i+n},e._setCallback=function(t){t.element.addEventListener("webkitTransitionEnd",e._complete,!1),t.element.addEventListener("transitionend",e._complete,!1),t.element.addEventListener("webkitAnimationEnd",e._complete,!1),t.element.addEventListener("animationend",e._complete,!1)},e._complete=function(t){t.target.removeEventListener("webkitTransitionEnd",e._complete),t.target.removeEventListener("transitionend",e._complete),t.target.removeEventListener("webkitAnimationEnd",e._complete),t.target.removeEventListener("animationend",e._complete);var i=e._getAnimationObjByElement(t.target);e._executeCallback(i),e._removeAnimationObject(i)},e._getAnimationObjByElement=function(t){for(var i=e._animationObjects.length;i--;)if(e._animationObjects[i].element===t)return e._animationObjects[i];return null},e._removeAnimationObject=function(t){for(var i=e._animationObjects.length;i--;)e._animationObjects[i]===t&&e._animationObjects.splice(i,1)},e._executeCallback=function(e){if(e.onEnd){var t=e.onEndArgs||[];e.onEnd.apply(null,t)}},e._contains=function(e,t){for(var i=e.length;i--;)if(t===e[i])return!0;return!1},e._camelCaseToDash=function(e){return e.replace(/\W+/g,"-").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()},e._easeOutExpo=function(e,t,i,n){return e===n?t+i:i*(-Math.pow(2,-10*e/n)+1)+t},e._transformProps=["x","y","z","scaleX","scaleY","scaleZ","rotate","rotateX","rotateY","rotateZ","skewX","skewY"],e._filters=["blur","brightness","contrast","dropShadow","grayscale","hueRotate","invert","saturate","sepia"],e._timeProps=["duration","ease","delay"],e._callbackProps=["onEnd","onEndArgs"],e._animationObjects=[],e}();e.Animate=i}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(){}return e.QUAD_EASE_IN=e.CB+"(0.550, 0.085, 0.680, 0.530)",e.CUBIC_EASE_IN=e.CB+"(0.550, 0.055, 0.675, 0.190)",e.QUART_EASE_IN=e.CB+"(0.895, 0.030, 0.685, 0.220)",e.QUINT_EASE_IN=e.CB+"(0.755, 0.050, 0.855, 0.060)",e.SINE_EASE_IN=e.CB+"(0.470, 0, 0.745, 0.715)",e.EXPO_EASE_IN=e.CB+"(0.950, 0.050, 0.795, 0.035)",e.CIRC_EASE_IN=e.CB+"(0.600, 0.040, 0.980, 0.335)",e.BACK_EASE_IN=e.CB+"(0.600, 0.040, 0.980, 0.335)",e.QUAD_EASE_OUT=e.CB+"(0.250, 0.460, 0.450, 0.940)",e.CUBIC_EASE_OUT=e.CB+"(0.215, 0.610, 0.355, 1)",e.QUART_EASE_OUT=e.CB+"(0.165, 0.840, 0.440, 1)",e.QUINT_EASE_OUT=e.CB+"(0.230, 1, 0.320, 1)",e.SINE_EASE_OUT=e.CB+"(0.390, 0.575, 0.565, 1)",e.EXPO_EASE_OUT=e.CB+"(0.190, 1, 0.220, 1)",e.CIRC_EASE_OUT=e.CB+"(0.075, 0.820, 0.165, 1)",e.BACK_EASE_OUT=e.CB+"(0.175, 0.885, 0.320, 1.275)",e.QUAD_EASE_IN_OUT=e.CB+"(0.455, 0.030, 0.515, 0.955)",e.CUBIC_EASE_IN_OUT=e.CB+"(0.645, 0.045, 0.355, 1)",e.QUART_EASE_IN_OUT=e.CB+"(0.770, 0, 0.175, 1)",e.QUINT_EASE_IN_OUT=e.CB+"(0.860, 0, 0.070, 1)",e.SINE_EASE_IN_OUT=e.CB+"(0.445, 0.050, 0.550, 0.950)",e.EXPO_EASE_IN_OUT=e.CB+"(1, 0, 0, 1)",e.CIRC_EASE_IN_OUT=e.CB+"(0.785, 0.135, 0.150, 0.860)",e.BACK_EASE_IN_OUT=e.CB+"(0.680, -0.550, 0.265, 1.550)",e.CB="cubic-bezier",e}();e.Ease=t}(fabric||(fabric={})),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}e.prototype=Event.prototype,window.CustomEvent=e}();var fabric;!function(e){"use strict";var t=function(){function e(e){this._currentMaxItems=0,this._itemCollection=[],this._tabIndex=2,this.container=e,this._onResize=this._onResize.bind(this),this._openOverflow=this._openOverflow.bind(this),this._overflowKeyPress=this._overflowKeyPress.bind(this),this._closeOverflow=this._closeOverflow.bind(this),this.removeOutlinesOnClick=this.removeOutlinesOnClick.bind(this),this.init()}return e.prototype.removeOutlinesOnClick=function(){this._breadcrumbList.blur()},e.prototype.addItem=function(e,t){this._itemCollection.push({text:e,link:t}),this._updateBreadcrumbs()},e.prototype.removeItemByLabel=function(e){for(var t=this._itemCollection.length;t--;)this._itemCollection[t].text===e&&this._itemCollection.splice(t,1);this._updateBreadcrumbs()},e.prototype.removeItemByPosition=function(e){this._itemCollection.splice(e,1),this._updateBreadcrumbs()},e.prototype.init=function(){this._cacheDOM(),this._setListeners(),this._createItemCollection(),this._onResize()},e.prototype._createItemCollection=function(){var e,t,i,n,s=this._listItems.length,o=0;for(o;o<s;o++)e=this._listItems[o].querySelector(".ms-Breadcrumb-itemLink"),t=e.textContent,i=e.getAttribute("href"),n=parseInt(e.getAttribute("tabindex"),10),this._itemCollection.push({link:i,tabIndex:n,text:t})},e.prototype._onResize=function(){this._closeOverflow(null),this._renderList()},e.prototype._renderList=function(){var t=window.innerWidth>e.MEDIUM?4:2;t!==this._currentMaxItems&&this._updateBreadcrumbs(),this._currentMaxItems=t},e.prototype._updateBreadcrumbs=function(){this._tabIndex=2;var t=window.innerWidth>e.MEDIUM?4:2;this._itemCollection.length>t?this._breadcrumb.classList.add("is-overflow"):this._breadcrumb.classList.remove("is-overflow"),this._addItemsToOverflow(t),this._addBreadcrumbItems(t)},e.prototype._addItemsToOverflow=function(e){var t=this;this._resetList(this._contextMenu);var i=this._itemCollection.length-e,n=this._itemCollection.slice(0,i);n.forEach(function(e){var i=document.createElement("li");i.className="ms-ContextualMenu-item";var n=document.createElement("a");n.className="ms-ContextualMenu-link",null!==e.link&&n.setAttribute("href",e.link),n.setAttribute("tabindex",(t._tabIndex++).toString()),n.textContent=e.text,i.appendChild(n),t._contextMenu.appendChild(i)})},e.prototype._addBreadcrumbItems=function(e){this._resetList(this._breadcrumbList);var t=this._itemCollection.length-e;if(t=t<0?0:t,t>=0)for(t;t<this._itemCollection.length;t++){var i=document.createElement("li"),n=this._itemCollection[t],s=document.createElement("a"),o=document.createElement("i");i.className="ms-Breadcrumb-listItem",s.className="ms-Breadcrumb-itemLink",null!==n.link&&s.setAttribute("href",n.link),s.setAttribute("tabindex",(this._tabIndex++).toString()),s.textContent=n.text,o.className="ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight",i.appendChild(s),i.appendChild(o),this._breadcrumbList.appendChild(i)}},e.prototype._resetList=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},e.prototype._openOverflow=function(e){this._overflowMenu.className.indexOf(" is-open")===-1&&(this._overflowMenu.classList.add("is-open"),this.removeOutlinesOnClick(),this._overflowButton.focus())},e.prototype._overflowKeyPress=function(e){13===e.keyCode&&this._openOverflow(e)},e.prototype._closeOverflow=function(e){e&&e.target===this._overflowButton||this._overflowMenu.classList.remove("is-open")},e.prototype._cacheDOM=function(){this._breadcrumb=this.container,this._breadcrumbList=this._breadcrumb.querySelector(".ms-Breadcrumb-list"),this._listItems=this._breadcrumb.querySelectorAll(".ms-Breadcrumb-listItem"),this._contextMenu=this._breadcrumb.querySelector(".ms-ContextualMenu"),this._overflowButton=this._breadcrumb.querySelector(".ms-Breadcrumb-overflowButton"),this._overflowMenu=this._breadcrumb.querySelector(".ms-Breadcrumb-overflowMenu")},e.prototype._setListeners=function(){window.addEventListener("resize",this._onResize,!1),this._overflowButton.addEventListener("click",this._openOverflow,!1),this._overflowButton.addEventListener("keypress",this._overflowKeyPress,!1),document.addEventListener("click",this._closeOverflow,!1),this._breadcrumbList.addEventListener("click",this.removeOutlinesOnClick,!1)},e.MEDIUM=639,e}();e.Breadcrumb=t}(fabric||(fabric={}));var fabric;!function(e){"use strict";var t=function(){function e(e,t){this._container=e,t&&(this._clickHandler=t,this._setClick())}return e.prototype.disposeEvents=function(){this._container.removeEventListener("click",this._clickHandler,!1)},e.prototype._setClick=function(){this._container.addEventListener("click",this._clickHandler,!1)},e}();e.Button=t}(fabric||(fabric={}));var fabric;!function(e){var t="is-open",i="is-positioned",n="ms-ContextualHost-main",s="ms-ContextualHost-beak",o="ms-ContextualHost--arrowLeft",r="ms-ContextualHost--arrowTop",a="ms-ContextualHost--arrowBottom",c="ms-ContextualHost--arrowRight",l="ms-ContextualHost--",h=28,d=8,p=function(){function e(t,i,o,r,a,c,h){if(void 0===r&&(r=!0),this._resizeAction=this._resizeAction.bind(this),this._dismissAction=this._dismissAction.bind(this),this._handleKeyUpDismiss=this._handleKeyUpDismiss.bind(this),this._matchTargetWidth=c||!1,this._direction=i,this._container=this.createContainer(),this._contextualHost=this._container,this._contextualHostMain=this._contextualHost.getElementsByClassName(n)[0],this._contextualHostMain.appendChild(t),this._hasArrow=r,this._arrow=this._container.getElementsByClassName(s)[0],this._targetElement=o,this._openModal(),this._setResizeDisposal(),h&&(this._disposalCallback=h),a)for(var d=0;d<a.length;d++)this._container.classList.add(l+a[d]);e.hosts||(e.hosts=[]),e.hosts.push(this)}return e.prototype.disposeModal=function(){if(e.hosts.length>0){window.removeEventListener("resize",this._resizeAction,!1),document.removeEventListener("click",this._dismissAction,!0),document.removeEventListener("keyup",this._handleKeyUpDismiss,!0),this._container.parentNode.removeChild(this._container),this._disposalCallback&&this._disposalCallback();var t=e.hosts.indexOf(this);e.hosts.splice(t,1);for(var i=e.hosts.length;i--;)e.hosts[i].disposeModal(),e.hosts.splice(i,1)}},e.prototype.setChildren=function(e){this._children||(this._children=[]),this._children.push(e)},e.prototype.contains=function(e){return this._container.contains(e)},e.prototype.createContainer=function(){var e=document.createElement("div");e.setAttribute("class","ms-ContextualHost"),e.innerHTML+=" ";var t=document.createElement("div");t.setAttribute("class",n),t.innerHTML+=" ",e.appendChild(t),e.innerHTML+=" ";var i=document.createElement("div");return i.setAttribute("class",s),e.appendChild(i),e.innerHTML+="",e},e.prototype._openModal=function(){var e=this;this._copyModalToBody(),this._saveModalSize(),this._findAvailablePosition(),this._showModal(),setTimeout(function(){e._setDismissClick()},100)},e.prototype._findAvailablePosition=function(){var e;switch(this._direction){case"left":e=this._positionOk(this._tryPosModalLeft.bind(this),this._tryPosModalRight.bind(this),this._tryPosModalBottom.bind(this),this._tryPosModalTop.bind(this)),this._setPosition(e);break;case"right":e=this._positionOk(this._tryPosModalRight.bind(this),this._tryPosModalLeft.bind(this),this._tryPosModalBottom.bind(this),this._tryPosModalTop.bind(this)),this._setPosition(e);break;case"top":e=this._positionOk(this._tryPosModalTop.bind(this),this._tryPosModalBottom.bind(this)),this._setPosition(e);break;case"bottom":e=this._positionOk(this._tryPosModalBottom.bind(this),this._tryPosModalTop.bind(this)),this._setPosition(e);break;default:this._setPosition()}},e.prototype._showModal=function(){this._container.classList.add(t)},e.prototype._positionOk=function(e,t,i,n){var s;return s=e(),s||(s=t(),!s&&i&&(s=i(),!s&&n&&(s=n()))),s},e.prototype._calcLeft=function(e,t,i){var n=e/2,s=t/2,o=i+s-n;return o=o<n?i:o},e.prototype._calcTop=function(e,t,i){var n=e/2,s=t/2,o=i+s-n;return o=o<n?i:o},e.prototype._setPosition=function(e){var t,n,s,l,p=this._targetElement.getBoundingClientRect(),u=p.left,_=p.right,m=p.top,f=p.width,v=p.height,y="",b=window.scrollX?window.scrollX:0,g=window.scrollY?window.scrollY:0,C=this._hasArrow?h:0;switch(this._matchTargetWidth&&(y="width: "+this._modalWidth+"px;"),e){case"left":t=u-this._modalWidth-C,n=this._calcTop(this._modalHeight,v,m),n+=window.scrollY?window.scrollY:0,this._container.setAttribute("style","top: "+n+"px; left: "+t+"px;"+y),this._container.classList.add(i),this._hasArrow&&(this._container.classList.add(c),s=m+g-n+d,this._arrow.setAttribute("style","top: "+s+"px;"));break;case"right":n=this._calcTop(this._modalHeight,v,m),n+=g,t=_+C,this._container.setAttribute("style","top: "+n+"px; left: "+t+"px;"+y),this._container.classList.add(i),this._hasArrow&&(s=g+m-n+d,this._arrow.setAttribute("style","top: "+s+"px;"),this._container.classList.add(o));break;case"top":t=this._calcLeft(this._modalWidth,this._teWidth,u),n=m-this._modalHeight-C,n+=g,this._container.setAttribute("style","top: "+n+"px; left: "+t+"px;"+y),this._container.classList.add(i),this._hasArrow&&(s=this._modalHeight-C/2,l=Math.max(b+u-t+(f-C)/2,d),this._arrow.setAttribute("style","top: "+s+"px; left: "+l+"px;"),this._container.classList.add(a));break;case"bottom":t=t=this._calcLeft(this._modalWidth,this._teWidth,u),n=m+v+C,n+=window.scrollY?window.scrollY:0,this._container.setAttribute("style","top: "+n+"px; left: "+t+"px;"+y),this._container.classList.add(i),this._hasArrow&&(l=Math.max(b+u-t+(f-C)/2,d),this._arrow.setAttribute("style","left: "+l+"px;"),this._container.classList.add(r));break;default:this._container.setAttribute("style","top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);")}},e.prototype._tryPosModalLeft=function(){var e=this._targetElement.getBoundingClientRect().left;return!(e<this._modalWidth)&&"left"},e.prototype._tryPosModalRight=function(){var e=this._targetElement.getBoundingClientRect().right,t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return!(t-e<this._modalWidth)&&"right"},e.prototype._tryPosModalBottom=function(){var e=window.innerHeight-this._targetElement.getBoundingClientRect().bottom;return!(e<this._modalHeight)&&"bottom"},e.prototype._tryPosModalTop=function(){var e=this._targetElement.getBoundingClientRect().top;return!(e<this._modalHeight)&&"top"},e.prototype._copyModalToBody=function(){document.body.appendChild(this._container)},e.prototype._saveModalSize=function(){var e=window.getComputedStyle(this._container);if(this._container.setAttribute("style","opacity: 0; z-index: -1"),this._container.classList.add(i),this._container.classList.add(t),this._matchTargetWidth){var n=window.getComputedStyle(this._targetElement);this._modalWidth=this._targetElement.getBoundingClientRect().width+(parseInt(n.marginLeft,10)+parseInt(n.marginLeft,10))}else this._modalWidth=this._container.getBoundingClientRect().width+(parseInt(e.marginLeft,10)+parseInt(e.marginRight,10)),this._container.setAttribute("style","");this._modalHeight=this._container.getBoundingClientRect().height+(parseInt(e.marginTop,10)+parseInt(e.marginBottom,10)),this._container.classList.remove(i),this._container.classList.remove(t),this._teWidth=this._targetElement.getBoundingClientRect().width,this._teHeight=this._targetElement.getBoundingClientRect().height},e.prototype._dismissAction=function(e){if(!this._container.contains(e.target)&&e.target!==this._container)if(void 0!==this._children){var t=!1;this._children.map(function(i){void 0!==i&&(t=i.contains(e.target))}),t||this.disposeModal()}else this.disposeModal()},e.prototype._setDismissClick=function(){document.addEventListener("click",this._dismissAction,!0),document.addEventListener("keyup",this._handleKeyUpDismiss,!0)},e.prototype._handleKeyUpDismiss=function(e){32!==e.keyCode&&27!==e.keyCode||this._dismissAction(e)},e.prototype._resizeAction=function(){this.disposeModal()},e.prototype._setResizeDisposal=function(){window.addEventListener("resize",this._resizeAction,!1)},e}();e.ContextualHost=p}(fabric||(fabric={}));var STATE_HIDDEN="is-hidden",CLOSE_BUTTON_CLASS=".ms-Callout-close",MODIFIER_OOBE_CLASS="ms-Callout--OOBE",fabric;!function(e){"use strict";var t=function(){function t(e,t,i){this._container=e,this._addTarget=t,this._position=i,this._closeButton=document.querySelector(CLOSE_BUTTON_CLASS),this._setOpener()}return t.prototype._setOpener=function(){this._addTarget.addEventListener("click",this._clickHandler.bind(this),!0),this._addTarget.addEventListener("keyup",this._keyupHandler.bind(this),!0)},t.prototype._openContextMenu=function(){var t=[];this._hasModifier(MODIFIER_OOBE_CLASS)&&t.push("primaryArrow"),this._container.classList.remove(STATE_HIDDEN),this._contextualHost=new e.ContextualHost(this._container,this._position,this._addTarget,(!0),t),this._closeButton&&this._closeButton.addEventListener("click",this._closeHandler.bind(this),!1)},t.prototype._hasModifier=function(e){return this._container.classList.contains(e)},t.prototype._closeHandler=function(e){null!=this._contextualHost&&this._contextualHost.disposeModal(),this._closeButton.removeEventListener("click",this._closeHandler.bind(this),!1),this._addTarget.removeEventListener("click",this._clickHandler.bind(this),!0),this._addTarget.removeEventListener("keyup",this._keyupHandler.bind(this),!0)},t.prototype._clickHandler=function(e){this._openContextMenu()},t.prototype._keyupHandler=function(e){32===e.keyCode?(e.stopPropagation(),e.preventDefault(),this._openContextMenu()):this._closeHandler(e)},t}();e.Callout=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e){this._container=e,this._choiceField=this._container.querySelector(".ms-CheckBox-field"),this._choiceInput=this._container.querySelector(".ms-CheckBox-input"),this._choiceInput.checked&&this._choiceField.setAttribute("aria-checked","true"),"true"===this._choiceField.getAttribute("aria-checked")&&this._choiceField.classList.add("is-checked"),this._addListeners()}return e.prototype.getValue=function(){return"true"===this._choiceField.getAttribute("aria-checked")},e.prototype.toggle=function(){this.getValue()?this.unCheck():this.check(),this._choiceInput.click()},e.prototype.check=function(){this._choiceField.setAttribute("aria-checked","true"),this._choiceField.classList.add("is-checked")},e.prototype.unCheck=function(){this._choiceField.setAttribute("aria-checked","false"),this._choiceField.classList.remove("is-checked")},e.prototype.removeListeners=function(){this._choiceField.removeEventListener("focus",this._FocusHandler.bind(this)),this._choiceField.removeEventListener("blur",this._BlurHandler.bind(this)),this._choiceField.removeEventListener("click",this._ClickHandler.bind(this)),this._choiceField.removeEventListener("keydown",this._KeydownHandler.bind(this))},e.prototype._addListeners=function(e){var t=e&&e.ignore;t&&t.indexOf("focus")>-1||this._choiceField.addEventListener("focus",this._FocusHandler.bind(this),!1),t&&t.indexOf("blur")>-1||this._choiceField.addEventListener("blur",this._BlurHandler.bind(this),!1),t&&t.indexOf("click")>-1||this._choiceField.addEventListener("click",this._ClickHandler.bind(this),!1),t&&t.indexOf("keydown")>-1||this._choiceField.addEventListener("keydown",this._KeydownHandler.bind(this),!1)},e.prototype._FocusHandler=function(){this._choiceField.classList.add("in-focus")},e.prototype._BlurHandler=function(){this._choiceField.classList.remove("in-focus")},e.prototype._ClickHandler=function(e){e.stopPropagation(),e.preventDefault(),this._choiceField.classList.contains("is-disabled")||this.toggle()},e.prototype._KeydownHandler=function(e){32===e.keyCode&&(e.stopPropagation(),e.preventDefault(),this._choiceField.classList.contains("is-disabled")||this.toggle())},e}();e.CheckBox=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e){this._container=e,this._choiceField=this._container.querySelector(".ms-RadioButton-field"),this._choiceInput=this._container.querySelector(".ms-RadioButton-input"),"true"===this._choiceField.getAttribute("aria-checked")&&this._choiceField.classList.add("is-checked"),this._addListeners()}return e.prototype.getValue=function(){return"true"===this._choiceField.getAttribute("aria-checked")},e.prototype.toggle=function(){this.getValue()?this.unCheck():this.check()},e.prototype.check=function(){this._choiceField.setAttribute("aria-checked","true"),this._choiceField.classList.add("is-checked"),this._choiceInput.checked=!0},e.prototype.unCheck=function(){this._choiceField.setAttribute("aria-checked","false"),this._choiceField.classList.remove("is-checked"),this._choiceInput.checked=!1},e.prototype.removeListeners=function(){this._choiceField.removeEventListener("focus",this._FocusHandler.bind(this)),this._choiceField.removeEventListener("blur",this._BlurHandler.bind(this)),this._choiceField.removeEventListener("click",this._RadioClickHandler.bind(this)),this._choiceField.addEventListener("keydown",this._RadioKeydownHandler.bind(this))},e.prototype._addListeners=function(){this._choiceField.addEventListener("focus",this._FocusHandler.bind(this),!1),this._choiceField.addEventListener("blur",this._BlurHandler.bind(this),!1),this._choiceField.addEventListener("click",this._RadioClickHandler.bind(this),!1),this._choiceField.addEventListener("keydown",this._RadioKeydownHandler.bind(this),!1)},e.prototype._RadioClickHandler=function(e){e.stopPropagation(),e.preventDefault(),this._choiceField.classList.contains("is-disabled")||this._dispatchSelectEvent()},e.prototype._dispatchSelectEvent=function(){var e={bubbles:!0,cancelable:!0,detail:{name:this._choiceField.getAttribute("name"),item:this}};this._choiceField.dispatchEvent(new CustomEvent("msChoicefield",e))},e.prototype._RadioKeydownHandler=function(e){32===e.keyCode&&(e.stopPropagation(),e.preventDefault(),this._choiceField.classList.contains("is-disabled")||this._dispatchSelectEvent())},e.prototype._FocusHandler=function(){this._choiceField.classList.add("in-focus")},e.prototype._BlurHandler=function(){this._choiceField.classList.remove("in-focus")},e}();e.RadioButton=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function t(e){this._choiceFieldGroup=e,this._choiceFieldComponents=[],this._initalSetup(),this._addListeners()}return t.prototype.removeListeners=function(){this._choiceFieldGroup.removeEventListener("msChoicefield",this._ChoiceFieldHandler.bind(this))},t.prototype._initalSetup=function(){for(var t=this._choiceFieldGroup.querySelectorAll(".ms-RadioButton"),i=0;i<t.length;i++)this._choiceFieldComponents[i]=new e.RadioButton(t[i])},t.prototype._addListeners=function(){document.addEventListener("msChoicefield",this._ChoiceFieldHandler.bind(this),!1)},t.prototype._ChoiceFieldHandler=function(e){var t=e.detail.name,i=e.detail.item;if(this._choiceFieldGroup.id===t){for(var n=0;n<this._choiceFieldComponents.length;n++)this._choiceFieldComponents[n].unCheck();i.check()}},t}();e.ChoiceFieldGroup=t}(fabric||(fabric={}));var fabric;!function(e){var t=".ms-SearchBox-field",i=".ms-SearchBox-clear",n=".ms-SearchBox-exit",s="has-text",o="is-active",r="is-animated",a=function(){function e(e){var t=this;this._container=e,this._saveDOMRefs(this._container),this._boundExpandSearchHandler=this._expandSearchHandler.bind(this),this._boundEnableClose=this._enableClose.bind(this),this._boundCollapseSearchBox=this._collapseSearchBox.bind(this),this._boundClearSearchBox=this._clearSearchBox.bind(this),this._boundHandleBlur=this._handleBlur.bind(this),this._boundExitSearchBox=this._exitSearchBox.bind(this),this._setHasText(),this._setFocusAction(this._container),this._setClearButtonAction(),this._setBlurAction(),this._clearOnly=!1,setTimeout(function(){t._checkState(),t._addAnimation()},10)}return e.prototype.setCollapsedListeners=function(){this._disposeListeners(),this._searchBox.addEventListener("click",this._boundExpandSearchHandler,!1),this._searchBoxField.addEventListener("focus",this._boundExpandSearchHandler,!0)},e.prototype.getInputField=function(){return this._searchBoxField},e.prototype._saveDOMRefs=function(e){this._searchBox=e,this._searchBoxField=this._searchBox.querySelector(t),this._searchBoxClearButton=this._searchBox.querySelector(i),this._searchBoxExitButton=this._searchBox.querySelector(n)},e.prototype._disposeListeners=function(){this._searchBox.removeEventListener("click",this._boundExpandSearchHandler),this._searchBoxField.removeEventListener("focus",this._boundExpandSearchHandler)},e.prototype._exitSearchBox=function(e){e.stopPropagation(),e.target.blur(),this._clearSearchBox(),this._collapseSearchBox(),this._searchBox.removeEventListener("keyup",this._boundEnableClose),this.setCollapsedListeners()},e.prototype._collapseSearchBox=function(){this._searchBox.classList.remove("is-active");var e=document.createEvent("Event");e.initEvent("searchCollapse",!0,!0),this._searchBoxField.dispatchEvent(e)},e.prototype._expandSearchHandler=function(){this._disposeListeners(),this._searchBox.classList.add("is-active"),this._searchBoxField.focus()},e.prototype._enableClose=function(){this._setHasText()},e.prototype._setHasText=function(){this._searchBoxField.value.length>0?this._searchBox.classList.add(s):this._searchBox.classList.remove(s)},e.prototype._setFocusAction=function(e){var t=this;this._searchBoxField.addEventListener("focus",function(){t._setHasText(),t._searchBox.addEventListener("keyup",t._boundEnableClose,!1),t._searchBox.classList.add(o),t._searchBox.classList.add(o)},!0)},e.prototype._clearSearchBox=function(e){var t=this;this._clearOnly=!0,this._searchBoxField.value="",this._setHasText(),setTimeout(function(){t._clearOnly=!1},10)},e.prototype._setClearButtonAction=function(){var e=this;this._searchBoxExitButton&&this._searchBoxExitButton.addEventListener("click",this._boundExitSearchBox,!1),this._searchBoxClearButton.addEventListener("mousedown",this._boundClearSearchBox,!1),this._searchBoxClearButton.addEventListener("keydown",function(t){var i=t.keyCode;13===i&&e._clearSearchBox(t)},!1)},e.prototype._handleBlur=function(e){var t=this;this._clearOnly?this._searchBoxField.focus():(this._searchBox.removeEventListener("keyup",this._boundEnableClose),setTimeout(function(){t._searchBox.contains(document.activeElement)||(t._clearSearchBox(),t._collapseSearchBox(),t.setCollapsedListeners())},10)),this._clearOnly=!1},e.prototype._setBlurAction=function(){this._searchBoxField.addEventListener("blur",this._boundHandleBlur,!0),this._searchBoxClearButton.addEventListener("blur",this._boundHandleBlur,!0)},e.prototype._checkState=function(){this._searchBox.classList.contains("is-collapsed")&&this.setCollapsedListeners()},e.prototype._addAnimation=function(){this._container.classList.add(r)},e}();e.SearchBox=a}(fabric||(fabric={}));var fabric;!function(e){var t=".ms-ContextualMenu",i=".ms-CommandButton-splitIcon",n=".ms-CommandButton-button",s="bottom",o=function(){function o(e,s){this._container=e,this._command=this._container,this._commandButton=this._command.querySelector(n),this._splitButton=this._command.querySelector(i),s?this._contextualMenu=s:this._contextualMenu=this._container.querySelector(t),this._checkForMenu()}return o.prototype._createModalHostView=function(){this._modalHostView=new e.ContextualHost(this._contextualMenu,s,this._command,(!1))},o.prototype._setClick=function(){this._splitButton?this._splitButton.addEventListener("click",this._createModalHostView.bind(this),!1):this._commandButton.addEventListener("click",this._createModalHostView.bind(this),!1)},o.prototype._checkForMenu=function(){this._contextualMenu&&this._setClick()},o}();e.CommandButton=o}(fabric||(fabric={}));var fabric;!function(e){"use strict";var t=".ms-ContextualMenu",i=".ms-ContextualMenu-item",n=".ms-ContextualMenu-link",s=".ms-SearchBox",o=".ms-CommandBar-mainArea",r=".ms-CommandBar-sideCommands",a=".ms-CommandBar-overflowButton",c="ms-CommandButton--noLabel",l=".ms-SearchBox-closeField",h=".ms-CommandButton",d=".ms-CommandButton-label",p=".ms-Icon",u=40,_=30,m=function(){function m(e){this.responsiveSizes={"sm-min":320,"md-min":480,"lg-min":640,"xl-min":1024,"xxl-min":1366,"xxxl-min":1920},this.visibleCommands=[],this.commandWidths=[],this.overflowCommands=[],this.itemCollection=[],this._sideAreaCollection=[],this.breakpoint="sm",this._container=e,this.responsiveSizes["sm-max"]=this.responsiveSizes["md-min"]-1,this.responsiveSizes["md-max"]=this.responsiveSizes["lg-min"]-1,this.responsiveSizes["lg-max"]=this.responsiveSizes["xl-min"]-1,this.responsiveSizes["xl-max"]=this.responsiveSizes["xxl-min"]-1,this.responsiveSizes["xxl-max"]=this.responsiveSizes["xxxl-min"]-1,this._setElements(),this._setBreakpoint(),this._elements.overflowCommand&&this._initOverflow(),this._setUIState()}return m.prototype._runsSearchBox=function(e){void 0===e&&(e="add"),this._changeSearchState("is-collapsed",e)},m.prototype._runOverflow=function(){this._elements.overflowCommand&&(this._saveCommandWidths(),this._redrawMenu(),this._updateCommands(),this._drawCommands(),this._checkOverflow())},m.prototype._initOverflow=function(){this._createContextualRef(),this._createItemCollection(this.itemCollection,o),
this._createItemCollection(this._sideAreaCollection,r),this._saveCommandWidths(),this._updateCommands(),this._drawCommands(),this._setWindowEvent(),this._checkOverflow()},m.prototype._hasClass=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},m.prototype._onSearchExpand=function(){"lg"===this.breakpoint&&(this._container.classList.add("search-expanded"),this._doResize())},m.prototype._onSearchCollapse=function(){"lg"===this.breakpoint&&(this._container.classList.remove("search-expanded"),this._doResize())},m.prototype._getScreenSize=function(){var e=window,t={x:0,y:0},i=document,n=i.documentElement,s=i.getElementsByTagName("body")[0];return t.x=e.innerWidth||n.clientWidth||s.clientWidth,t.y=e.innerHeight||n.clientHeight||s.clientHeight,t},m.prototype._setBreakpoint=function(){var e=this._getScreenSize().x;switch(!0){case e<=this.responsiveSizes["sm-max"]:this.breakpoint="sm";break;case e>=this.responsiveSizes["md-min"]&&e<=this.responsiveSizes["md-max"]:this.breakpoint="md";break;case e>=this.responsiveSizes["lg-min"]&&e<=this.responsiveSizes["lg-max"]:this.breakpoint="lg";break;case e>=this.responsiveSizes["xl-min"]&&e<=this.responsiveSizes["xl-max"]:this.breakpoint="xl";break;case e>=this.responsiveSizes["xxl-min"]&&e<=this.responsiveSizes["xxl-max"]:this.breakpoint="xxl";break;case e>=this.responsiveSizes["xxxl-min"]:this.breakpoint="xxxl"}},m.prototype._createSearchInstance=function(){return!!this._elements.searchBox&&new e.SearchBox(this._elements.searchBox)},m.prototype._changeSearchState=function(e,t){if(this._elements.searchBox)switch(t){case"remove":this._elements.searchBox.classList.remove(e);break;case"add":this._elements.searchBox.classList.add(e)}},m.prototype._setElements=function(){var e=this;this._elements={mainArea:this._container.querySelector(o)},this._container.querySelector(r)&&(this._elements.sideCommandArea=this._container.querySelector(r)),this._container.querySelector(a)&&(this._elements.overflowCommand=this._container.querySelector(a),this._elements.contextMenu=this._container.querySelector(a).querySelector(t)),this._container.querySelector(o+" "+s)&&(this._elements.searchBox=this._container.querySelector(o+" "+s),this._elements.searchBoxClose=this._container.querySelector(l),this.searchBoxInstance=this._createSearchInstance(),this.searchBoxInstance.getInputField().addEventListener("focus",function(){e._onSearchExpand()},!1),this.searchBoxInstance.getInputField().addEventListener("searchCollapse",function(){e._onSearchCollapse()},!1))},m.prototype._createItemCollection=function(t,i){var n,s,o,r,l=this._container.querySelectorAll(i+" > "+h+":not("+a+")");this._commandButtonInstance=new e.CommandButton(this._elements.overflowCommand);for(var u=0;u<l.length;u++){n=l[u],s=n.querySelector(d).textContent;var _=n.querySelector(p);if(_){o=_.className,r=o.split(" ");for(var m=0;m<r.length;m++)if(r[m].indexOf(p.replace(".","")+"--")>-1){_=r[m];break}}t.push({item:n,label:s,icon:_,isCollapsed:!!n.classList.contains(c),commandButtonRef:new e.CommandButton(n)})}},m.prototype._createContextualRef=function(){this.contextualItemContainerRef=this._elements.contextMenu.querySelector(i).cloneNode(!0),this.contextualItemLink=this._elements.contextMenu.querySelector(n).cloneNode(!1),this.contextualItemIcon=this._elements.contextMenu.querySelector(".ms-Icon").cloneNode(!1),this._elements.contextMenu.innerHTML=""},m.prototype._getElementWidth=function(e){var t,i;return null===e.offsetParent&&e.setAttribute("style","position: absolute; opacity: 0; display: block;"),t=e.getBoundingClientRect().width,i=window.getComputedStyle(e),t+=parseInt(i.marginLeft,10)+parseInt(i.marginRight,10),e.setAttribute("style",""),t},m.prototype._saveCommandWidths=function(){for(var e=0;e<this.itemCollection.length;e++){var t=this.itemCollection[e].item,i=this._getElementWidth(t);this.commandWidths[e]=i}},m.prototype._updateCommands=function(){var e=0,t=this._elements.mainArea.getBoundingClientRect().width;this._elements.searchBox&&(e=this._getElementWidth(this._elements.searchBox));var i=e+u+_,n=t-i;this.visibleCommands=[],this.overflowCommands=[];for(var s=0,o=0;o<this.itemCollection.length;o++)s+=this.commandWidths[o],s<n?this.visibleCommands.push(this.itemCollection[o]):this.overflowCommands.push(this.itemCollection[o])},m.prototype._drawCommands=function(){this._elements.contextMenu.innerHTML="";for(var e=0;e<this.overflowCommands.length;e++){this.overflowCommands[e].item.classList.add("is-hidden");var t=this.contextualItemContainerRef.cloneNode(!1),i=this.contextualItemLink.cloneNode(!1),n=this.overflowCommands[e].icon;if(i.innerText=this.overflowCommands[e].label,t.appendChild(i),n){var s=this.contextualItemIcon.cloneNode(!1);s.className=p.replace(".","")+" "+n,t.appendChild(s)}this._elements.contextMenu.appendChild(t)}for(var o=0;o<this.visibleCommands.length;o++)this.visibleCommands[o].item.classList.remove("is-hidden")},m.prototype._setWindowEvent=function(){var e=this;window.addEventListener("resize",function(){e._doResize()},!1)},m.prototype._processCollapsedClasses=function(e){for(var t=0;t<this.itemCollection.length;t++){var i=this.itemCollection[t];i.isCollapsed||("add"===e?i.item.classList.add(c):i.item.classList.remove(c))}for(var t=0;t<this._sideAreaCollection.length;t++){var i=this._sideAreaCollection[t];i.isCollapsed||("add"===e?i.item.classList.add(c):i.item.classList.remove(c))}},m.prototype._setUIState=function(){switch(this.breakpoint){case"sm":this._runsSearchBox(),this._processCollapsedClasses("add"),this._runOverflow();break;case"md":this._runsSearchBox(),this._processCollapsedClasses("add"),this._runOverflow();break;case"lg":this._runsSearchBox(),this._processCollapsedClasses("remove"),this._runOverflow();break;case"xl":this._runsSearchBox("remove"),this._processCollapsedClasses("remove"),this._runOverflow();break;default:this._runsSearchBox("remove"),this._processCollapsedClasses("remove"),this._runOverflow()}},m.prototype._checkOverflow=function(){this.overflowCommands.length>0?this._elements.overflowCommand.classList.remove("is-hidden"):(this._elements.overflowCommand.classList.add("is-hidden"),this.activeCommand===this._elements.overflowCommand&&this._elements.contextMenu.classList.remove("is-open"))},m.prototype._redrawMenu=function(){var e;this._hasClass(this._elements.contextMenu,"is-open")&&(e=this.activeCommand.getBoundingClientRect().left,this._drawOverflowMenu(e))},m.prototype._drawOverflowMenu=function(e){this._elements.contextMenu.setAttribute("style","left: "+e+"px; transform: translateX(-50%)")},m.prototype._doResize=function(){this._setBreakpoint(),this._setUIState()},m}();e.CommandBar=m}(fabric||(fabric={}));var fabric;!function(e){var t="bottom",i="right",n=function(){function n(e,i,n){this._container=e,this._hostTarget=i,this._position=n?n:t,this._isOpen=!1,this._setOpener(i),this._init()}return n.prototype.getHost=function(){return this._host},n.prototype._init=function(){this._container.addEventListener("click",this._onContextualMenuClick.bind(this),!0),document.addEventListener("click",this._onDocumentClick.bind(this),!1)},n.prototype._onDocumentClick=function(e){if(e.target instanceof HTMLElement){var t=e.target,i=t.classList;this._hostTarget.contains(t)||i.contains("ms-ContextualMenu-link")||(this._isOpen=!1)}},n.prototype._onContextualMenuClick=function(e){var t=e.target,i=t.classList;i.contains("ms-ContextualMenu-link")&&!i.contains("is-disabled")&&(this._container.classList.contains("ms-ContextualMenu--multiselect")?this._multiSelect(t):(this._singleSelect(t),t.parentElement.classList.contains("ms-ContextualMenu-item--hasMenu")||(this._host.disposeModal(),this._isOpen=!1)))},n.prototype._multiSelect=function(e){e.classList.contains("is-selected")?e.classList.remove("is-selected"):e.classList.add("is-selected")},n.prototype._singleSelect=function(e){for(var t=this._container.querySelectorAll(".is-selected"),i=t.length;i--;)t[i].classList.remove("is-selected");e.classList.add("is-selected")},n.prototype._toggleMenu=function(e){this._isOpen?this._host.disposeModal():this._openContextMenu(e),this._isOpen=!this._isOpen},n.prototype._setOpener=function(e){var t=this;e.addEventListener("click",function(e){e.preventDefault(),t._toggleMenu(e)})},n.prototype._openContextMenu=function(e){this._createModalHostView(this._container,this._position,this._hostTarget),this._checkForSubmenus(this._container)},n.prototype._checkForSubmenus=function(t){var n=this,s=t.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu"),o=s.length;if(s.length)for(var r=function(){var t=s[o].querySelector(".ms-ContextualMenu-link"),r=s[o].querySelector(".ms-ContextualMenu");if(r){var a=new e.ContextualMenu(r,t,i);r.addEventListener("hostAdded",function(){n._host.setChildren(a.getHost())})}};o--;)r()},n.prototype._createModalHostView=function(t,i,n){t.classList.remove("is-hidden"),this._host=new e.ContextualHost(t,i,n,(!1));var s=document.createEvent("Event");s.initEvent("hostAdded",!0,!0),t.dispatchEvent(s)},n}();e.ContextualMenu=n}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e,t){var i=this,n=$(e),s=n.find(".ms-TextField-field").pickadate($.extend({weekdaysShort:["S","M","T","W","T","F","S"],clear:"",close:"",today:"",onStart:function(){i.initCustomView(n)},klass:{input:"ms-DatePicker-input",active:"ms-DatePicker-input--active",picker:"ms-DatePicker-picker",opened:"ms-DatePicker-picker--opened",focused:"ms-DatePicker-picker--focused",holder:"ms-DatePicker-holder",frame:"ms-DatePicker-frame",wrap:"ms-DatePicker-wrap",box:"ms-DatePicker-dayPicker",header:"ms-DatePicker-header",month:"ms-DatePicker-month",year:"ms-DatePicker-year",table:"ms-DatePicker-table",weekdays:"ms-DatePicker-weekday",day:"ms-DatePicker-day",disabled:"ms-DatePicker-day--disabled",selected:"ms-DatePicker-day--selected",highlighted:"ms-DatePicker-day--highlighted",now:"ms-DatePicker-day--today",infocus:"ms-DatePicker-day--infocus",outfocus:"ms-DatePicker-day--outfocus"}},t||{})),o=s.pickadate("picker");this.picker=o,o.on({render:function(){i.updateCustomView(n)}})}return e.prototype.initCustomView=function(e){var t=this,i=e.find(".ms-DatePicker-monthComponents"),n=e.find(".ms-DatePicker-goToday"),s=e.find(".ms-DatePicker-monthPicker"),o=e.find(".ms-DatePicker-yearPicker"),r=e.find(".ms-DatePicker-wrap"),a=e.find(".ms-TextField-field").pickadate("picker");i.appendTo(r),n.appendTo(r),s.appendTo(r),o.appendTo(r),this.updateCustomView(e),a.on("open",function(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),document.dispatchEvent(t)}),i.on("click",".js-prevMonth",function(e){e.preventDefault();var i=a.get("highlight").month-1;t.changeHighlightedDate([null,i,null])}),i.on("click",".js-nextMonth",function(e){e.preventDefault();var i=a.get("highlight").month+1;t.changeHighlightedDate([null,i,null])}),s.on("click",".js-prevYear",function(e){e.preventDefault();var i=a.get("highlight").year-1;t.changeHighlightedDate([i,null,null])}),s.on("click",".js-nextYear",function(e){e.preventDefault();var i=a.get("highlight").year+1;t.changeHighlightedDate([i,null,null])}),o.on("click",".js-prevDecade",function(e){e.preventDefault();var i=a.get("highlight").year-10;t.changeHighlightedDate([i,null,null])}),o.on("click",".js-nextDecade",function(e){e.preventDefault();var i=a.get("highlight").year+10;t.changeHighlightedDate([i,null,null])}),n.click(function(t){t.preventDefault();var i=new Date;a.set("select",[i.getFullYear(),i.getMonth(),i.getDate()]),e.removeClass("is-pickingMonths").removeClass("is-pickingYears")}),s.on("click",".js-changeDate",function(i){i.preventDefault();var n=$(i.target),s=n.attr("data-year"),o=n.attr("data-month"),r=n.attr("data-day");t.changeHighlightedDate([s,o,r]),e.hasClass("is-pickingMonths")&&e.removeClass("is-pickingMonths")}),o.on("click",".js-changeDate",function(i){i.preventDefault();var n=$(i.target),s=n.attr("data-year"),o=n.attr("data-month"),r=n.attr("data-day");t.changeHighlightedDate([s,o,r]),e.hasClass("is-pickingYears")&&e.removeClass("is-pickingYears")}),s.on("click",".js-showDayPicker",function(){e.removeClass("is-pickingMonths"),e.removeClass("is-pickingYears")}),i.on("click",".js-showMonthPicker",function(){e.toggleClass("is-pickingMonths")}),s.on("click",".js-showYearPicker",function(){e.toggleClass("is-pickingYears")})},e.prototype.changeHighlightedDate=function(e){var t=this.setDateAttributes(e);this.picker.set("highlight",t)},e.prototype.updateCustomView=function(e){var t=e.find(".ms-DatePicker-monthPicker"),i=e.find(".ms-DatePicker-yearPicker"),n=e.find(".ms-TextField-field").pickadate("picker");t.find(".ms-DatePicker-currentYear").text(n.get("view").year),t.find(".ms-DatePicker-monthOption").removeClass("is-highlighted"),t.find(".ms-DatePicker-monthOption[data-month='"+n.get("highlight").month+"']").addClass("is-highlighted"),i.find(".ms-DatePicker-currentDecade").remove(),i.find(".ms-DatePicker-optionGrid").remove();var s=n.get("highlight").year-11,o=s+" - "+(s+11),r="<div class='ms-DatePicker-currentDecade'>"+o+"</div>";r+="<div class='ms-DatePicker-optionGrid'>";for(var a=s;a<s+12;a++)r+="<span class='ms-DatePicker-yearOption js-changeDate' data-year='"+a+"'>"+a+"</span>";r+="</div>",i.append(r),i.find(".ms-DatePicker-yearOption").removeClass("is-highlighted"),i.find(".ms-DatePicker-yearOption[data-year='"+n.get("highlight").year+"']").addClass("is-highlighted")},e.prototype.setDateAttributes=function(e){var t=e[0],i=e[1],n=e[2];return"undefined"!=typeof t&&null!==t||(t=this.picker.get("highlight").year),"undefined"!=typeof i&&null!==i||(i=this.picker.get("highlight").month),"undefined"!=typeof n&&null!==n||(n=this.picker.get("highlight").date),[t,i,n]},e}();e.DatePicker=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e){if(e)this.overlayElement=e;else{var t=document.createElement("div");t.setAttribute("class","ms-Overlay"),this.overlayElement=t}this.overlayElement.addEventListener("click",this.hide.bind(this),!1)}return e.prototype.remove=function(){this.overlayElement.parentElement.removeChild(this.overlayElement)},e.prototype.show=function(){this.overlayElement.classList.add("is-visible"),document.body.classList.add("ms-u-overflowHidden")},e.prototype.hide=function(){this.overlayElement.classList.remove("is-visible"),document.body.classList.remove("ms-u-overflowHidden")},e}();e.Overlay=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function t(e){this._dialog=e,this._closeButtonElement=this._dialog.querySelector(".ms-Dialog-buttonClose"),this._actionButtonElements=this._dialog.querySelectorAll(".ms-Dialog-action"),this._closeButtonElement&&this._closeButtonElement.addEventListener("click",this.close.bind(this),!1);for(var t=0;t<this._actionButtonElements.length;t++)this._actionButtonElements[t].addEventListener("click",this.close.bind(this),!1)}return t.prototype.close=function(){this._overlay.remove(),this._dialog.classList.remove("is-open"),document.body.classList.remove("ms-u-overflowHidden"),this._overlay.overlayElement.removeEventListener("click",this.close.bind(this))},t.prototype.open=function(){this._dialog.classList.add("is-open"),this._overlay=new e.Overlay,this._dialog.classList.contains("ms-Dialog--blocking")||(this._overlay.overlayElement.addEventListener("click",this.close.bind(this),!1),this._overlay.show(),document.body.classList.add("ms-u-overflowHidden")),this._dialog.parentElement.appendChild(this._overlay.overlayElement)},t}();e.Dialog=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(){}return e}();e.DialogHost=t}(fabric||(fabric={}));var fabric;!function(e){var t="ms-PanelHost",i=function(){function i(e,t){this._layer=e,this._callBack=t,this._createElements(),this._renderElements()}return i.prototype.dismiss=function(){this.overlay.hide(),document.body.removeChild(this.panelHost)},i.prototype.update=function(e,t){this.panelHost.replaceChild(e,this._layer),t&&t()},i.prototype._renderElements=function(){document.body.appendChild(this.panelHost),this._callBack&&this._callBack(this._layer)},i.prototype._createElements=function(){this.panelHost=document.createElement("div"),this.panelHost.classList.add(t),this.panelHost.appendChild(this._layer),this.overlay=new e.Overlay(this._overlayContainer),this.overlay.show(),this.panelHost.appendChild(this.overlay.overlayElement)},i}();e.PanelHost=i}(fabric||(fabric={}));var fabric;!function(e){var t="animate-in",i="animate-out",n=400,s=function(){function s(t,i,n){this._panel=t,this._direction=i||"right",this._animateOverlay=n||!0,this.panelHost=new e.PanelHost(this._panel,this._animateInPanel),this._closeButton=this._panel.querySelector(".ms-PanelAction-close"),this._clickHandler=this.dismiss.bind(this,null),this._setEvents(),document.body.setAttribute("style","height: 100%; overflow: hidden;")}return s.prototype.dismiss=function(e){var t=this;this._panel.classList.add(i),setTimeout(function(){t._panel.classList.remove(i),t._panel.classList.remove("is-open"),t.panelHost.dismiss(),e&&e(),document.body.setAttribute("style","")},n),null!==this._closeButton&&this._closeButton.removeEventListener("click",this._clickHandler)},s.prototype._setEvents=function(){this.panelHost.overlay.overlayElement.addEventListener("click",this._clickHandler),null!==this._closeButton&&this._closeButton.addEventListener("click",this._clickHandler)},s.prototype._animateInPanel=function(e){e.classList.add(t),e.classList.add("is-open"),setTimeout(function(){e.classList.remove(t)},n)},s}();e.Panel=s}(fabric||(fabric={}));var fabric;!function(e){var t="ms-Dropdown",i="ms-Dropdown-title",n="ms-Dropdown-truncator",s="ms-Dropdown-items",o="ms-Dropdown-item",r=".ms-Dropdown-select",a="ms-Panel",c="is-open",l="is-disabled",h="is-selected",d="animate-in",p=479,u=function(){function u(e){this._container=e,this._dropdownLabelHelper=document.createElement("span"),this._dropdownLabelHelper.classList.add(n),this._dropdownLabelHelper.classList.add(i),this._newDropdownLabel=document.createElement("span"),this._newDropdownLabel.classList.add(i),this._newDropdown=document.createElement("ul"),this._newDropdown.classList.add(s),this._dropdownItems=[],this._originalDropdown=e.querySelector(r);var t=this._originalDropdown.querySelectorAll("option");this._onCloseDropdown=this._onCloseDropdown.bind(this),this._onItemSelection=this._onItemSelection.bind(this),this._onOpenDropdown=this._onOpenDropdown.bind(this);for(var a=0;a<t.length;++a){var c=t[a];c.selected&&(this._newDropdownLabel.innerHTML=c.text);var d=document.createElement("li");d.classList.add(o),c.disabled&&d.classList.add(l),c.selected&&d.classList.add(h),d.innerHTML=c.text,d.addEventListener("click",this._onItemSelection),this._newDropdown.appendChild(d),this._dropdownItems.push({oldOption:c,newItem:d})}e.appendChild(this._newDropdownLabel),e.appendChild(this._newDropdown),e.appendChild(this._dropdownLabelHelper),this._newDropdownLabel.addEventListener("click",this._onOpenDropdown),this._checkTruncation(),this._setWindowEvent()}return u.prototype._setWindowEvent=function(){var e=this;window.addEventListener("resize",function(){e._doResize(),e._checkTruncation()},!1)},u.prototype._checkTruncation=function(){var e=this._newDropdown.querySelector("."+h),t=e?e.textContent:this._newDropdown.querySelectorAll("."+o)[0].textContent;if(this._dropdownLabelHelper.textContent=t,this._dropdownLabelHelper.offsetHeight>this._newDropdownLabel.offsetHeight){var i=0,n="...",s=void 0;do i--,s=t.slice(0,i),this._dropdownLabelHelper.textContent=s+n;while(this._dropdownLabelHelper.offsetHeight>this._newDropdownLabel.offsetHeight)}this._newDropdownLabel.textContent=this._dropdownLabelHelper.textContent},u.prototype._getScreenSize=function(){var e=window,t={x:0,y:0},i=document,n=i.documentElement,s=i.getElementsByTagName("body")[0];return t.x=e.innerWidth||n.clientWidth||s.clientWidth,t.y=e.innerHeight||n.clientHeight||s.clientHeight,t},u.prototype._doResize=function(){var e=this._container.classList.contains(c);if(e){var t=this._getScreenSize().x;t<=p?this._openDropdownAsPanel():this._removeDropdownAsPanel()}},u.prototype._openDropdownAsPanel=function(){void 0===this._panel&&(this._panelContainer=document.createElement("div"),this._panelContainer.classList.add(a),this._panelContainer.classList.add(t),this._panelContainer.classList.add(c),this._panelContainer.classList.add(d),this._panelContainer.appendChild(this._newDropdown),this._panel=new e.Panel(this._panelContainer))},u.prototype._removeDropdownAsPanel=function(e){var t=this;void 0!==this._panel&&(e&&e.target===this._panel.panelHost.overlay.overlayElement?this._container.appendChild(this._newDropdown):this._panel.dismiss(function(){t._container.appendChild(t._newDropdown)}),this._panel=void 0)},u.prototype._onOpenDropdown=function(e){var t=this._container.classList.contains(l),i=this._container.classList.contains(c);if(!t&&!i){e.stopPropagation(),this._closeOtherDropdowns(),this._container.classList.add(c),document.addEventListener("click",this._onCloseDropdown);var n=this._getScreenSize().x;n<=p&&this._openDropdownAsPanel()}},u.prototype._closeOtherDropdowns=function(){for(var e=document.querySelectorAll("."+t+"."+c),i=0;i<e.length;i++)e[i].classList.remove(c)},u.prototype._onCloseDropdown=function(e){this._removeDropdownAsPanel(e),this._container.classList.remove(c),document.removeEventListener("click",this._onCloseDropdown)},u.prototype._onItemSelection=function(e){var t=e.target,i=this._container.classList.contains(l),n=t.classList.contains(l);if(!i&&!n){for(var s=0;s<this._dropdownItems.length;++s)this._dropdownItems[s].newItem===t?(this._dropdownItems[s].newItem.classList.add(h),this._dropdownItems[s].oldOption.selected=!0):(this._dropdownItems[s].newItem.classList.remove(h),this._dropdownItems[s].oldOption.selected=!1);this._newDropdownLabel.innerHTML=t.textContent,this._checkTruncation();var o=document.createEvent("HTMLEvents");o.initEvent("change",!1,!0),this._originalDropdown.dispatchEvent(o)}},u}();e.Dropdown=u}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function t(e){this._container=e;var t=this._container.querySelector(".ms-PersonaCard-action.is-active"),i=t.getAttribute("data-action-id");this._actions=this._container.querySelector(".ms-PersonaCard-actions"),this._expander=this._container.querySelector(".ms-PersonaCard-detailExpander"),this._actionDetailBox=this._container.querySelector(".ms-PersonaCard-actionDetailBox"),this._setDetail(i),this._boundOnActionClick=this._onActionClick.bind(this),this._boundOnExpanderClick=this._onExpanderClick.bind(this),this._boundOnTab=this._onTab.bind(this),this._addListeners()}return t.prototype.removeListeners=function(){this._actions.removeEventListener("click",this._boundOnActionClick),this._expander.removeEventListener("click",this._boundOnExpanderClick),this._container.removeEventListener("keydown",this._boundOnTab)},t.prototype._addListeners=function(){this._actions.addEventListener("click",this._boundOnActionClick,!1),this._expander.addEventListener("click",this._boundOnExpanderClick,!1),this._container.addEventListener("keydown",this._boundOnTab,!1)},t.prototype._onTab=function(e){var t=e.target;9===e.keyCode&&t.classList.contains("ms-PersonaCard-action")&&this._onActionClick(e)},t.prototype._onExpanderClick=function(e){var t=e.target.parentElement;t.classList.contains("is-collapsed")?t.classList.remove("is-collapsed"):t.classList.add("is-collapsed");var i=t.clientHeight;this._animateDetail(i)},t.prototype._onActionClick=function(e){var t=e.target,i=t.getAttribute("data-action-id");i&&t.className.indexOf("is-active")===-1&&(this._setAction(t),this._setDetail(i))},t.prototype._setAction=function(e){var t=this._container.querySelector(".ms-PersonaCard-action.is-active");t.classList.remove("is-active"),e.classList.add("is-active")},t.prototype._setDetail=function(e){var t=".ms-PersonaCard-details[data-detail-id='"+e+"']",i=this._container.querySelector(".ms-PersonaCard-details.is-active"),n=this._container.querySelector(t);i&&i.classList.remove("is-active"),n.classList.add("is-active");var s=n.clientHeight;this._animateDetail(s)},t.prototype._animateDetail=function(t){var i=this;this._actionDetailBox.style.overflowY="hidden",e.Animate.transition(this._actionDetailBox,{height:t,duration:.25,ease:e.Ease.SINE_EASE_OUT,onEnd:function(){i._actionDetailBox.style.overflowY="auto"}})},t}();e.PersonaCard=t}(fabric||(fabric={}));var fabric;!function(e){var t="top",i=function(){function i(e){this._persona=e,this._personaCard=this._persona.querySelector(".ms-PersonaCard"),this._personaCard&&(this._assignEvents(),this._personaCard.setAttribute("style","display: none;"),this._createPersonaCard())}return i.prototype._createPersonaCard=function(){this._personaCardInstance=new e.PersonaCard(this._personaCard)},i.prototype._createContextualHostInstance=function(){this._personaCard.setAttribute("style","display: block;"),this._contextualHostInstance=new e.ContextualHost(this._personaCard,t,this._persona)},i.prototype._personaEventHandler=function(){this._createContextualHostInstance()},i.prototype._assignEvents=function(){var e=this;this._persona.addEventListener("click",this._personaEventHandler.bind(this),!1),this._persona.addEventListener("keyup",function(t){return 32===t.keyCode?e._personaEventHandler():null},!1)},i}();e.Persona=i}(fabric||(fabric={}));var fabric;!function(e){var t=".ms-Persona--facePile",i=".ms-Persona-initials",n=".ms-Persona-image",s=".ms-Persona-primaryText",o=".ms-Persona-secondaryText",r=function(){function r(e){this._personaCollection=[],this._facePile=e,this._createPersonaCollection()}return r.prototype._createPersonaCollection=function(){for(var r=document.querySelectorAll(t),a=0;a<r.length;a++){var c=r[a];this._personaCollection.push({item:c,initials:c.querySelector(i).textContent,image:c.querySelector(n)?c.querySelector(n).getAttribute("src"):null,primaryText:c.querySelector(s)?c.querySelector(s).textContent:"",secondaryText:c.querySelector(o)?c.querySelector(o).textContent:"",personaInstance:new e.Persona(c)})}},r}();e.FacePile=r}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e){this._container=e,this._toggleElement=this._container.querySelector(".ms-ListItem-selectionTarget"),this._addListeners()}return e.prototype.removeListeners=function(){this._toggleElement.removeEventListener("click",this._toggleHandler.bind(this))},e.prototype._addListeners=function(){this._toggleElement.addEventListener("click",this._toggleHandler.bind(this),!1)},e.prototype._toggleHandler=function(){this._container.classList.toggle("is-selected")},e}();e.ListItem=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function t(t){this._container=t,this._listItemComponents=[];for(var i=this._container.querySelectorAll(".ms-ListItem"),n=0;n<i.length;n++)this._listItemComponents[n]=new e.ListItem(i[n])}return t}();e.List=t}(fabric||(fabric={}));var fabric;!function(e){"use strict";var t=function(){function e(e){this._textContainerMaxWidth=700,this._bufferElementsWidth=88,this._bufferElementsWidthSmall=35,this.SMALL_BREAK_POINT=480,this.container=e,this.init()}return e.prototype.init=function(){this._cacheDOM(),this._setListeners(),this._clientWidth=this._errorBanner.offsetWidth,this._initTextWidth=this._clipper.offsetWidth,this._onResize()},e.prototype.show=function(){this._errorBanner.className="ms-MessageBanner"},e.prototype.showBanner=function(){this.show()},e.prototype.hide=function(){this._errorBanner.className.indexOf("hide")===-1&&(this._errorBanner.className+=" hide",setTimeout(this._hideMessageBanner.bind(this),500))},e.prototype._hideMessageBanner=function(){this._errorBanner.className="ms-MessageBanner is-hidden"},e.prototype._onResize=function(){this._clientWidth=this._errorBanner.offsetWidth,window.innerWidth>=this.SMALL_BREAK_POINT?this._resizeRegular():this._resizeSmall()},e.prototype._resizeRegular=function(){this._clientWidth-this._bufferSize>this._initTextWidth&&this._initTextWidth<this._textContainerMaxWidth?(this._textWidth="auto",this._chevronButton.className="ms-MessageBanner-expand",this._collapse()):(this._textWidth=Math.min(this._clientWidth-this._bufferSize,this._textContainerMaxWidth)+"px",this._chevronButton.className.indexOf("is-visible")===-1&&(this._chevronButton.className+=" is-visible")),this._clipper.style.width=this._textWidth},e.prototype._resizeSmall=function(){this._clientWidth-(this._bufferElementsWidthSmall+this._closeButton.offsetWidth)>this._initTextWidth?(this._textWidth="auto",this._collapse()):this._textWidth=this._clientWidth-(this._bufferElementsWidthSmall+this._closeButton.offsetWidth)+"px",this._clipper.style.width=this._textWidth},e.prototype._cacheDOM=function(){this._errorBanner=this.container,this._clipper=this.container.querySelector(".ms-MessageBanner-clipper"),this._chevronButton=this.container.querySelector(".ms-MessageBanner-expand"),this._actionButton=this.container.querySelector(".ms-MessageBanner-action"),this._bufferSize=this._actionButton.offsetWidth+this._bufferElementsWidth,this._closeButton=this.container.querySelector(".ms-MessageBanner-close")},e.prototype._expand=function(){var e=this._chevronButton.querySelector(".ms-Icon");this._errorBanner.className+=" is-expanded",e.className="ms-Icon ms-Icon--DoubleChevronUp"},e.prototype._collapse=function(){var e=this._chevronButton.querySelector(".ms-Icon");this._errorBanner.className="ms-MessageBanner",e.className="ms-Icon ms-Icon--DoubleChevronDown"},e.prototype._toggleExpansion=function(){this._errorBanner.className.indexOf("is-expanded")>-1?this._collapse():this._expand()},e.prototype._setListeners=function(){window.addEventListener("resize",this._onResize.bind(this),!1),this._chevronButton.addEventListener("click",this._toggleExpansion.bind(this),!1),this._closeButton.addEventListener("click",this.hide.bind(this),!1)},e}();e.MessageBanner=t}(fabric||(fabric={}));var fabric;!function(e){var t="bottom",i="ms-Persona--token",n=function(){function n(e){this._container=e,this._peoplePickerMenu=this._container.querySelector(".ms-PeoplePicker-results"),this._peoplePickerSearch=this._container.querySelector(".ms-TextField-field"),this._peoplePickerSearchBox=this._container.querySelector(".ms-PeoplePicker-searchBox"),this._selectedPeople=this._container.querySelector(".ms-PeoplePicker-selectedPeople"),this._assignClicks(),this._selectedPeople&&(this._assignRemoveHandler(),this._selectedCount=this._container.querySelector(".ms-PeoplePicker-selectedCount"),this._selectedPlural=this._container.querySelector(".ms-PeoplePicker-selectedCountPlural")),this._peoplePickerMenu&&this._peoplePickerMenu.setAttribute("style","display: none;")}return n.prototype._createModalHost=function(i){i.stopPropagation(),this._peoplePickerMenu.setAttribute("style","display: block;"),this._contextualHostView=new e.ContextualHost(this._peoplePickerMenu,t,this._peoplePickerSearchBox,(!1),[""],(!0),this._contextHostCallBack.bind(this)),this._peoplePickerSearchBox.classList.add("is-active"),this._isContextualMenuOpen=!0},n.prototype._clickHandler=function(e){this._createModalHost(e);var t=this._peoplePickerMenu.querySelector(".ms-PeoplePicker-result"),i=t.parentNode,n=i.cloneNode(!0);i.parentNode.replaceChild(n,i),this._peoplePickerResults=this._peoplePickerMenu.querySelectorAll(".ms-PeoplePicker-result");for(var s=0;s<this._peoplePickerResults.length;s++){var o=this._peoplePickerResults[s].querySelector(".ms-Persona"),r=this._peoplePickerResults[s].querySelector(".ms-PeoplePicker-resultAction");o.addEventListener("click",this._selectResult.bind(this),!0),r.addEventListener("click",this._removeItem.bind(this),!0)}},n.prototype._selectResult=function(e){e.stopPropagation();var t=this._findElement(e.target,"ms-Persona"),i=t.cloneNode(!0);this._container.classList.contains("ms-PeoplePicker--facePile")?this._addResultToMembers(i):this._tokenizeResult(i),this._updateCount(),this._contextualHostView.disposeModal()},n.prototype._findElement=function(e,t){for(var i=e.parentNode;!i.classList.contains(t);)i=i.parentNode;
return i},n.prototype._addRemoveBtn=function(e,t){var i,n=document.createElement("i");t?(i=document.createElement("div"),i.classList.add("ms-Persona-actionIcon"),i.addEventListener("click",this._removeToken.bind(this),!0)):(i=document.createElement("button"),i.classList.add("ms-PeoplePicker-resultAction"),i.addEventListener("click",this._removeResult.bind(this),!0)),n.classList.add("ms-Icon","ms-Icon--Cancel"),i.appendChild(n),e.appendChild(i)},n.prototype._removeToken=function(e){var t=this._findElement(e.target,"ms-Persona");t.remove()},n.prototype._removeResult=function(e){var t=this._findElement(e.target,"ms-PeoplePicker-selectedPerson");t.remove(),this._updateCount()},n.prototype._removeItem=function(e){var t=this._findElement(e.target,"ms-PeoplePicker-result");t.remove()},n.prototype._updateCount=function(){if(this._selectedPeople){var e=this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson").length;this._selectedCount.textContent=e.toString(),this._selectedPlural.style.display=1===e?"none":"inline"}},n.prototype._tokenizeResult=function(e){var t=this._container.querySelector(".ms-PeoplePicker-searchBox"),n=t.querySelector(".ms-TextField");e.classList.add(i,"ms-PeoplePicker-persona"),this._addRemoveBtn(e,!0),e.classList.contains("ms-Persona--sm")&&(e.classList.remove("ms-Persona--sm"),e.classList.add("ms-Persona--xs")),t.insertBefore(e,n)},n.prototype._addResultToMembers=function(e){var t=this._container.querySelector(".ms-PeoplePicker-selectedPeople"),i=t.querySelector(".ms-PeoplePicker-selectedPerson"),n=document.createElement("li");n.classList.add("ms-PeoplePicker-selectedPerson"),n.tabIndex=1,n.appendChild(e),this._addRemoveBtn(n,!1),n.querySelector(".ms-PeoplePicker-resultAction").addEventListener("click",this._removeResult.bind(this),!0),t.insertBefore(n,i)},n.prototype._assignClicks=function(){var e=this;this._peoplePickerSearch.addEventListener("click",this._clickHandler.bind(this),!0),this._peoplePickerSearch.addEventListener("keyup",function(t){27===t.keyCode||e._isContextualMenuOpen||e._clickHandler(t)},!0)},n.prototype._assignRemoveHandler=function(){for(var e=this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson"),t=0;t<e.length;t++)e[t].querySelector(".ms-PeoplePicker-resultAction").addEventListener("click",this._removeResult.bind(this),!0)},n.prototype._contextHostCallBack=function(){this._peoplePickerSearchBox.classList.remove("is-active"),this._isContextualMenuOpen=!1},n}();e.PeoplePicker=n}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e){this._container=e,this._addListeners();var t=this._container.querySelector(".ms-Pivot-content");t.style.display="block"}return e.prototype.removeListeners=function(){this._container.removeEventListener("click",this._selectTab.bind(this))},e.prototype._addListeners=function(){var e=this;this._container.querySelector(".ms-Pivot-links").addEventListener("click",this._selectTabMouse.bind(this),!1),this._container.addEventListener("keyup",function(t){13===t.keyCode&&e._selectTabKeyboard(t)},!0)},e.prototype._selectTab=function(e){if(e.classList.contains("ms-Pivot-link")&&!e.querySelector(".ms-Pivot-ellipsis")){for(var t=e.parentElement.firstElementChild;t;)t.classList.remove("is-selected"),t=t.nextElementSibling;e.classList.add("is-selected");var i=this._container.querySelectorAll(".ms-Pivot-content");Array.prototype.forEach.call(i,function(e,t){e.style.display="none"});var n=e.getAttribute("data-content"),s=this._container.querySelector(".ms-Pivot-content[data-content='"+n+"']");s.style.display="block"}},e.prototype._selectTabMouse=function(e){e.preventDefault();var t=e.target;this._selectTab(t)},e.prototype._selectTabKeyboard=function(e){e.preventDefault();var t=e.target;this._selectTab(t)},e}();e.Pivot=t}(fabric||(fabric={}));var fabric;!function(e){"use strict";var t=function(){function e(e){this.container=e,this.cacheDOM()}return e.prototype.setProgressPercent=function(e){this._progressBar.style.width=Math.round(this._width*e)+"px"},e.prototype.setProgress=function(e){this._progress=e;var t=this._progress/this._total;this.setProgressPercent(t)},e.prototype.setTotal=function(e){this._total=e},e.prototype.setName=function(e){this._itemName.innerHTML=e},e.prototype.setDescription=function(e){this._itemDescription.innerHTML=e},e.prototype.cacheDOM=function(){this._itemName=this.container.querySelector(".ms-ProgressIndicator-itemName")||null,this._itemDescription=this.container.querySelector(".ms-ProgressIndicator-itemDescription")||null,this._progressBar=this.container.querySelector(".ms-ProgressIndicator-progressBar");var e=this.container.querySelector(".ms-ProgressIndicator-itemProgress");this._width=e.offsetWidth},e}();e.ProgressIndicator=t}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e,t){this.element=e,this.j=t}return e}(),i=function(){function e(e){this.eightSize=.2,this.animationSpeed=90,this.parentSize=20,this.fadeIncrement=0,this.circleObjects=[],this._target=e,this._init()}return e.prototype.start=function(){var e=this;this.stop(),this.interval=setInterval(function(){for(var t=e.circleObjects.length;t--;)e._fade(e.circleObjects[t])},this.animationSpeed)},e.prototype.stop=function(){clearInterval(this.interval)},e.prototype._init=function(){this._setTargetElement(),this._setPropertiesForSize(),this._createCirclesAndArrange(),this._initializeOpacities(),this.start()},e.prototype._setPropertiesForSize=function(){this.spinner.className.indexOf("large")>-1&&(this.parentSize=28,this.eightSize=.179),this.offsetSize=this.eightSize,this.numCircles=8},e.prototype._setTargetElement=function(){this._target.className.indexOf("ms-Spinner")===-1?(this.spinner=document.createElement("div"),this.spinner.className="ms-Spinner",this._target.appendChild(this.spinner)):this.spinner=this._target},e.prototype._initializeOpacities=function(){var e,t=0,i=1;for(this.fadeIncrement=1/this.numCircles,t;t<this.numCircles;t++){var n=this.circleObjects[t];e=this.fadeIncrement*i++,this._setOpacity(n.element,e)}},e.prototype._fade=function(e){var t=this._getOpacity(e.element)-this.fadeIncrement;t<=0&&(t=1),this._setOpacity(e.element,t)},e.prototype._getOpacity=function(e){return parseFloat(window.getComputedStyle(e).getPropertyValue("opacity"))},e.prototype._setOpacity=function(e,t){e.style.opacity=t.toString()},e.prototype._createCircle=function(){var e=document.createElement("div");return e.className="ms-Spinner-circle",e.style.width=e.style.height=this.parentSize*this.offsetSize+"px",e},e.prototype._createCirclesAndArrange=function(){for(var e,i=0,n=this.parentSize*this.offsetSize,s=2*Math.PI/this.numCircles,o=this.numCircles,r=.5*(this.parentSize-n);o--;){var a=this._createCircle(),c=Math.round(.5*this.parentSize+r*Math.cos(i)-.5*a.clientWidth)-.5*n,l=Math.round(.5*this.parentSize+r*Math.sin(i)-.5*a.clientHeight)-.5*n;this.spinner.appendChild(a),a.style.left=c+"px",a.style.top=l+"px",i+=s,e=new t(a,o),this.circleObjects.push(e)}},e}();e.Spinner=i}(fabric||(fabric={}));var fabric;!function(e){"use strict";var t=function(){function e(e){this.container=e,this.container.className.indexOf("ms-Table--selectable")!==-1&&this._addListeners()}return e.prototype._addListeners=function(){this.container.addEventListener("click",this._toggleRowSelection.bind(this),!1)},e.prototype._toggleRowSelection=function(e){var t=e.target.parentElement;if("TR"===t.tagName){var i="is-selected";t.className===i?t.className="":t.className=i}},e}();e.Table=t}(fabric||(fabric={}));var fabric;!function(e){var t;!function(e){!function(e){e[e.Placeholder=0]="Placeholder",e[e.Underlined=1]="Underlined"}(e.Type||(e.Type={}));e.Type}(t||(t={}));var i=function(){function e(e){this._container=e,this._type=[],this._textField=this._container.querySelector(".ms-TextField-field"),this._textFieldLabel=this._container.querySelector(".ms-Label"),this._setTextFieldType(),this._addListeners()}return e.prototype._setTextFieldType=function(){this._container.classList.contains("ms-TextField--placeholder")&&this._type.push(t.Type.Placeholder),this._container.classList.contains("ms-TextField--underlined")&&this._type.push(t.Type.Underlined)},e.prototype._addListeners=function(){var e=this;this._textFieldLabel.addEventListener("click",function(t){e._textField.focus()}),this._type.indexOf(t.Type.Placeholder)>=0&&(this._textField.addEventListener("focus",function(t){e._textFieldLabel.style.display="none"}),this._textField.addEventListener("blur",function(t){0===e._textField.value.length&&(e._textFieldLabel.style.display="block")})),this._type.indexOf(t.Type.Underlined)>=0&&(this._textField.addEventListener("focus",function(t){e._container.classList.add("is-active")}),this._textField.addEventListener("blur",function(t){e._container.classList.remove("is-active")}))},e}();e.TextField=i}(fabric||(fabric={}));var fabric;!function(e){var t=function(){function e(e){this._container=e,this._toggleField=this._container.querySelector(".ms-Toggle-field"),this._addListeners()}return e.prototype.removeListeners=function(){this._toggleField.removeEventListener("click",this._toggleHandler.bind(this))},e.prototype._addListeners=function(){var e=this;this._toggleField.addEventListener("click",this._toggleHandler.bind(this),!1),this._toggleField.addEventListener("keyup",function(t){return 32===t.keyCode?e._toggleHandler():null},!1)},e.prototype._toggleHandler=function(){this._toggleField.classList.toggle("is-selected")},e}();e.Toggle=t}(fabric||(fabric={}));exports.fabric = fabric;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(2);
/**
 * Button
 */
exports.Button = function (props) {
    // Add the button html
    props.el.innerHTML = [
        '<button class="ms-Button ' + (props.className || "") + '">',
        '<span class="ms-Button-label">' + (props.text || "") + '</span>',
        '</button>'
    ].join('\n');
    // Get the button
    var btn = props.el.firstElementChild;
    // See if the button is disabled
    if (props.disable) {
        // Disable the button
        btn.disabled = true;
    }
    // Set the button click event
    btn.onclick = function () {
        // Execute the click event
        props.onClick ? props.onClick() : null;
        // Disable postback
        return false;
    };
    // Create the button
    new _1.fabric.Button(btn);
    // Return the button
    return btn;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(2);
/**
 * CheckBox
 */
exports.CheckBox = function (props) {
    var _cb = null;
    // Method to get the checkbox element
    var get = function () {
        // Returns the checkbox element
        return props.el.querySelector(".ms-CheckBox");
    };
    // Method to get the value
    var getValue = function () {
        // Get the checkbox value
        return _cb ? _cb.getValue() : false;
    };
    // Add the checkbox html
    props.el.innerHTML = [
        '<div class="ms-CheckBox ' + (props.className || "") + '">',
        '<input tabindex="-1" type="checkbox" class="ms-CheckBox-input">',
        '<label role="checkbox" class="ms-CheckBox-field" tabindex="0" aria-checked="" name="checkbox' + props.label + '">',
        '<span class="ms-Label">' + props.label + '</span>',
        '</label>',
        '</div>'
    ].join('\n');
    // Get the checkbox
    var cb = get();
    // See if the checkbox is disabled
    if (props.disable) {
        // Disable the checkbox
        cb.disabled = true;
    }
    // Set the checkbox change event
    cb.onchange = function () {
        // Execute the change event
        props.onChange ? props.onChange(_cb.getValue()) : null;
    };
    // Create the checkbox
    _cb = new _1.fabric.CheckBox(cb);
    // Update the value
    props.value ? _cb.check() : _cb.uncheck();
    // Return the checkbox
    return {
        get: get,
        getValue: getValue
    };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(2);
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
    // Method to get the content element
    var getContent = function () {
        // Return the content
        return query(".ms-Panel-contentInner");
    };
    // Method to get the panel element
    var getPanel = function () {
        // Return the panel
        return _panel ? _panel._panel : (props.el).querySelector(".ms-Panel ");
    };
    // Method to hide the panel
    var hide = function () {
        // Dismiss the panel
        _panel ? _panel.dismiss() : null;
        // Clear the panel
        _panel = null;
    };
    // Method to query the panel
    var query = function (qs) {
        if (qs === void 0) { qs = ""; }
        var panel = getPanel();
        if (panel) {
            // Query the panel
            return panel.querySelector(qs);
        }
        // Return nothing
        return null;
    };
    // Method to query the panel
    var queryAll = function (qs) {
        if (qs === void 0) { qs = ""; }
        var panel = getPanel();
        if (panel) {
            // Query the panel
            return panel.querySelectorAll(qs);
        }
        // Return nothing
        return [];
    };
    // Method to set the header text
    var setHeaderText = function (html) {
        var header = query(".ms-Panel-headerText");
        if (header) {
            header.innerHTML = html;
        }
        // Return the header
        return header;
    };
    // Method to show the panel
    var show = function (content) {
        if (content === void 0) { content = ""; }
        // Set the class name
        var className = (props.className || "");
        switch (props.panelType) {
            case PanelTypes.Left:
                className += " ms-Panel--left";
                break;
            case PanelTypes.Medium:
                className += " ms-Panel--md";
                break;
            case PanelTypes.Large:
                className += " ms-Panel--lg";
                break;
            case PanelTypes.LargeFixed:
                className += " ms-Panel--lg ms-Panel--fixed";
                break;
            case PanelTypes.XLarge:
                className += " ms-Panel--xl";
                break;
            case PanelTypes.XXLarge:
                className += " ms-Panel--xxl";
                break;
        }
        // Add the panel html
        props.el.innerHTML = [
            '<div class="ms-Panel ' + className.trim() + '">',
            '<div class="ms-Panel-contentInner">',
            '<p class="ms-Panel-headerText"></p>',
            '<div class="ms-Panel-content">',
            content,
            '</div>',
            '</div>',
            '</div>',
        ].join('\n');
        // See if we are showing the close button
        if (typeof (props.showCloseButton) === "undefined" || props.showCloseButton) {
            // Show the close button
            showCloseButton();
        }
        // Set the header text
        setHeaderText(props.headerText);
        // Show the panel
        _panel = new _1.fabric.Panel(props.el.firstElementChild);
        // Return the panel content
        return getContent();
    };
    // Method to show the close button
    var showCloseButton = function () {
        // See if it exists
        if (query(".ms-Panel-closeButton")) {
            return;
        }
        // Get the panel
        var panel = getPanel();
        if (panel) {
            // Add the close button
            panel.innerHTML = [
                '<button class="ms-Panel-closeButton ms-PanelAction-close">',
                '<i class="ms-Panel-closeIcon ms-Icon ms-Icon--Cancel"></i>',
                '</button>',
                panel.innerHTML
            ].join('\n');
            // Set the click event for the close button
            panel.firstElementChild.onclick = function () {
                // Hide the panel
                hide();
                // Disable postback
                return false;
            };
        }
    };
    // See if we are showing the panel
    if (props.visible) {
        // Show the panel
        _this.show();
    }
    // Return the panel
    return {
        getContent: getContent,
        getPanel: getPanel,
        hide: hide,
        query: query,
        queryAll: queryAll,
        setHeaderText: setHeaderText,
        show: show,
        showCloseButton: showCloseButton
    };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(2);
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
    // Method to get the text field element
    var get = function () {
        // Returns the text field element
        return props.el.querySelector(".ms-TextField-field");
    };
    // Method to get the value
    var getValue = function () {
        // Get the text field
        return get().value;
    };
    // Set the class name
    var className = props.className || "";
    if (props.placeholder) {
        className += " ms-TextField--placeholder";
    }
    if (props.type == TextFieldTypes.Multi) {
        className += " ms-TextField--multiline";
    }
    // Add the button html
    props.el.innerHTML = [
        '<div class="ms-TextField ' + className.trim() + '">',
        props.label ? '<label class="ms-Label">' + props.label + "'</label>" : '',
        props.placeholder ? '<label class="ms-Label">' + props.placeholder + '</label>' : '',
        props.type == TextFieldTypes.Multi ?
            '<textarea class="ms-TextField-field"></textarea>' :
            '<input class="ms-TextField-field" type="text" value="' + (props.value || "") + '" placeholder=""></input>',
        '</div>'
    ].join('\n');
    // Get the textfield
    var tb = get();
    // See if the button is disabled
    if (props.disable) {
        // Disable the button
        tb.disabled = true;
    }
    // See if we are adding a change event
    if (props.onChange) {
        // Set the change event
        tb.onchange = function () {
            // Call the change event
            props.onChange(getValue());
        };
    }
    // Create the textfield
    new _1.fabric.TextField(props.el.firstElementChild);
    // Return the text field
    return {
        get: get,
        getValue: getValue
    };
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(2);
/**
 * Toggle
 */
exports.Toggle = function (props) {
    var _toggle = null;
    // Method to get the toggle element
    var get = function () {
        // Returns the toggle element
        return props.el.querySelector(".ms-Toggle");
    };
    // Method to get the value
    var getValue = function () {
        // Get the toggle value
        return _toggle ? _toggle._container.querySelector(".ms-Toggle-field").className.indexOf("is-selected") > 0 : false;
    };
    // Add the toggle html
    props.el.innerHTML = [
        '<div class="ms-Toggle ' + (props.className || "") + '">',
        props.description ? '<span class="ms-Toggle-description">' + props.description + "</span>" : '',
        '<input type="checkbox" class="ms-Toggle-input">',
        '<label class="ms-Toggle-field" tabindex="0">',
        '<span class="ms-Label ms-Label--off">Off</span>',
        '<span class="ms-Label ms-Label--on">On</span>',
        '</label>',
        '</div>'
    ].join('\n');
    // Get the toggle
    var toggle = get();
    // See if the toggle is disabled
    if (props.disable) {
        // Disable the toggle
        toggle.disabled = true;
    }
    // Set the toggle click event
    toggle.onclick = function () {
        // Execute the change event
        props.onChange ? props.onChange(getValue()) : null;
    };
    // Create the toggle
    _toggle = new _1.fabric.Toggle(toggle);
    // Update the value
    props.value ? _toggle.check() : _toggle.uncheck();
    // Return the toggle
    return {
        get: get,
        getValue: getValue
    };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = __webpack_require__(5);
var _1 = __webpack_require__(2);
/**
 * Field
 */
exports.Field = function (props) {
    // Load the field information
    gd_sprest_1.Helper.ListFormField.create(props.fieldInfo).then(function (fieldInfo) {
        // Render the field based on the type
        switch (fieldInfo.type) {
            // Boolean Field
            case gd_sprest_1.SPTypes.FieldType.Boolean:
                _1.Toggle({
                    className: props.className,
                    description: props.fieldInfo.field.Description,
                    disable: props.disabled,
                    el: props.el,
                    label: props.fieldInfo.title,
                    onChange: props.onChange,
                    value: props.value
                });
                break;
            // Text Field
            case gd_sprest_1.SPTypes.FieldType.Text:
                _1.TextField({
                    className: props.className,
                    disable: props.disabled,
                    el: props.el,
                    label: props.fieldInfo.title,
                    onChange: props.onChange,
                    value: props.value || props.fieldInfo.defaultValue || ""
                });
                break;
            default:
                // Log
                console.log("[gd-sprest] The field type '" + fieldInfo.typeAsString + "' is not supported.");
                break;
        }
    });
    // Render a spinner
    props.el.innerHTML = "\n        <div class=\"ms-Spinner\">\n            <div class=\"ms-Spinner-label\">Loading the field...</div>\n        </div>\n    ".trim();
    // Initialize the spinner
    new _1.fabric.Spinner(props.el.firstChild);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var mapper_1 = __webpack_require__(3);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
__export(__webpack_require__(42));
//# sourceMappingURL=mapper.js.map

/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComplexTypes = __webpack_require__(45);
exports.ComplexTypes = ComplexTypes;
var Results = __webpack_require__(46);
exports.Results = Results;
var SPTypes = __webpack_require__(47);
exports.SPTypes = SPTypes;
//# sourceMappingURL=index.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=complexTypes.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=results.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=sptypes.js.map

/***/ }),
/* 48 */
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
/* 49 */
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
var lib_1 = __webpack_require__(1);
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 58 */
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
var web_1 = __webpack_require__(8);
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
var utils_1 = __webpack_require__(0);
var _1 = __webpack_require__(1);
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
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var __1 = __webpack_require__(5);
var spCfg_1 = __webpack_require__(9);
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var mapper_1 = __webpack_require__(3);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(10);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var __1 = __webpack_require__(5);
var taxonomy_1 = __webpack_require__(11);
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
                    _this._fieldInfo.maxValue = fldNumber.MaximumValue;
                    _this._fieldInfo.minValue = fldNumber.MinimumValue;
                    if (fldNumber.ShowAsPercentage != undefined) {
                        _this._fieldInfo.showAsPercentage = fldNumber.ShowAsPercentage;
                    }
                    else {
                        _this._fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    }
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
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
/* 79 */
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
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.close(dialogResult); });
    },
    // Close the dialog
    commonModalDialogClose: function (dialogResult, returnVal) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.commonModalDialogClose(dialogResult, returnVal); });
    },
    // Open a dialog
    commonModalDialogOpen: function (url, options, callback, args) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.commonModalDialogOpen(url, options, callback, args); });
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
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.OpenPopUpPage(url, callback, width, height); });
    },
    // Refreshes the page
    RefreshPage: function (dialogResult) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.RefreshPage(dialogResult); });
    },
    // Shows a modal dialog
    showModalDialog: function (options) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.showModalDialog(options); });
    },
    // Shows a pop-up dialog
    ShowPopupDialog: function (url) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.ShowPopupDialog(url); });
    },
    // Shows a wait screen
    showWaitScreenSize: function (title, message, callback, height, width) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.showWaitScreenSize(title, message, callback, height, width); });
    },
    // Shows a wait screen w/ no close button
    showWaitScreenWithNoClose: function (title, message, height, width) {
        // Load the library and call the method
        exports.ModalDialog.load().then(function () { SP.UI.ModialDialog.showWaitScreenWithNoClose(title, message, height, width); });
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(4);
exports.Helper = helper_1.Types;
var mapper_1 = __webpack_require__(3);
exports.SP = mapper_1.Types;
var utils_1 = __webpack_require__(0);
exports.Util = utils_1.Types;
//# sourceMappingURL=types.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helper = __webpack_require__(4);
var Lib = __webpack_require__(1);
var Mapper = __webpack_require__(3);
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 3.44,
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
}
//# sourceMappingURL=rest.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })
/******/ ]);